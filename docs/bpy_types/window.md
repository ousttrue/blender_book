# window

- [【Blender 2.8 アドオン開発】003 Blender 内のデータにアクセスしよう(Context と データ構造 と レイアウト)](https://memoteu.hatenablog.com/entry/2019/04/02/041803)

```py
def print_layout(window):
    workspace = window.workspace
    print(f"[Workspace] {workspace.name}")
    for screen in workspace.screens:
        print(f"  [Screen] {screen.name}")
        for area in screen.areas:
            print(f"    [Area] {area.type}")
            for region in area.regions:
                print(f"      [Region] {region.type}")


print_layout(bpy.context.window)
```

```
[Workspace] Layout
  [Screen] Layout
    [Area] PROPERTIES
      [Region] HEADER
      [Region] NAVIGATION_BAR
      [Region] WINDOW
    [Area] OUTLINER
      [Region] HEADER
      [Region] WINDOW
    [Area] DOPESHEET_EDITOR
      [Region] HEADER
      [Region] CHANNELS
      [Region] UI
      [Region] WINDOW
    [Area] VIEW_3D
      [Region] TOOL_HEADER
      [Region] HEADER
      [Region] TOOLS
      [Region] UI
      [Region] HUD
      [Region] WINDOW
```

## bpy.types.Window

- https://docs.blender.org/api/current/bpy.types.Window.html?highlight=window

## bpy.types.Screen

- https://docs.blender.org/api/current/bpy.types.Screen.html

## bpy.types.Area

https://docs.blender.org/api/current/bpy.types.Area.html

`bpy.context.area.type`
