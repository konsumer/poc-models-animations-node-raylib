const r = require('raylib');

function main()
{
    const screenWidth = 800;
    const screenHeight = 450;
    r.InitWindow(screenWidth, screenHeight, "raylib [core] example - basic window");
    r.SetTargetFPS(60);
	
    var model = r.LoadModel("guy.iqm");
    //var anim = r.LoadModelAnimations("guy.iqm",0);

    var camera = {};
    camera.position = {x:10.0, y:10.0, z:10.0};
    camera.target = {x:0.0, y:10.0, z:0.0};
    camera.up = {x:0.0, y:1.0, z:0.0};
    camera.fovy = 30.0;
    camera.projection = r.CAMERA_PERSPECTIVE;
    r.SetCameraMode(camera, r.CAMERA_CUSTOM);

    while (!r.WindowShouldClose()) 
    {
        r.UpdateCamera(camera);
	r.BeginDrawing();
        r.BeginMode3D(camera);
	r.ClearBackground(r.RAYWHITE);
        r.EndMode3D(camera);
        r.DrawText("Congrats! You created your first node-raylib window!", 120, 200, 20, r.LIGHTGRAY);
        r.EndDrawing();
    }
    r.CloseWindow();
}
main();
