"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export interface UpdateProductState {
  error?: string;
  success?: boolean;
}

export async function updateProduct(
  id: string,
  categorySlug: string,
  _prevState: UpdateProductState,
  formData: FormData
): Promise<UpdateProductState> {
  const name = String(formData.get("name") || "").trim();
  const description = String(formData.get("description") || "").trim();
  const priceRaw = String(formData.get("price") || "");
  const price = Number(priceRaw);
  const imageFile = formData.get("image");

  if (!name || !description) {
    return { error: "Name and description are required." };
  }
  if (!Number.isFinite(price) || price < 0) {
    return { error: "Price must be a positive number." };
  }

  const supabase = await createClient();

  let imageUrl: string | undefined;
  if (imageFile instanceof File && imageFile.size > 0) {
    if (!imageFile.type.startsWith("image/")) {
      return { error: "That file isn't an image." };
    }
    if (imageFile.size > 5 * 1024 * 1024) {
      return { error: "Image must be under 5MB." };
    }
    const ext = imageFile.name.split(".").pop() || "jpg";
    const path = `${categorySlug}/${id}-${Date.now()}.${ext}`;
    const { error: uploadError } = await supabase.storage
      .from("product-images")
      .upload(path, imageFile, { upsert: true });
    if (uploadError) {
      return { error: `Image upload failed: ${uploadError.message}` };
    }
    const { data: publicUrl } = supabase.storage.from("product-images").getPublicUrl(path);
    imageUrl = publicUrl.publicUrl;
  }

  const { error: updateError } = await supabase
    .from("products")
    .update({
      name,
      description,
      price: Math.round(price),
      ...(imageUrl ? { image_url: imageUrl } : {}),
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (updateError) {
    return { error: updateError.message };
  }

  revalidatePath(`/categories/${categorySlug}`);
  revalidatePath("/categories");
  revalidatePath("/admin");
  revalidatePath(`/admin/products/${id}`);

  return { success: true };
}
