# 3D product models

`Scene3D` renders a procedural fallback chair when no `modelUrl` is passed to
`<ProductConfigurator />`. To use a real scanned/modeled product, drop a
binary-packed `.glb` here and wire it up.

## Spec

- **Format:** `.glb` (binary glTF, single file — avoid `.gltf` + separate
  textures for production, it's extra round trips).
- **Scale:** export at real-world meters; the camera rig in `Scene3D.tsx`
  assumes a ~1m-tall object centered near the origin.
- **Draco compression:** recommended for anything over ~2MB —
  `gltf-transform optimize input.glb output.glb --compress draco`.
- **Material naming:** name any mesh/material that should respond to the
  finish switcher so it contains `upholstery` or `fabric` (case-insensitive),
  e.g. `Upholstery_Seat`, `Fabric_Back`. `GltfModel` in `Scene3D.tsx` matches
  on that substring and recolors it to the active finish hex at runtime.

## Wiring a model in

```tsx
<Scene3D modelUrl="/models/dormitory-chair.glb" finishHex={activeFinish.hex} hotspots={HOTSPOTS} />
```

Preload it (optional, avoids a pop-in on first interaction):

```tsx
useGLTF.preload("/models/dormitory-chair.glb");
```
