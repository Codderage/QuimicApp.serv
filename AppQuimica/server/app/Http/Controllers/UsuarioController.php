<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Usuario;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

use App\Models\Alumno;
use App\Models\Profesor;

class UsuarioController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['']]);
    }


    /**
     * Register a User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function registro(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'username' => 'required|string|between:2,100',
            'password' => 'required|string|confirmed|min:6',
            'id_profesor' => 'integer',
            'id_alumno' => 'integer',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }

        $user = Usuario::create(array_merge(
            $validator->validated(),
            ['password' => bcrypt($request->password)]
        ));

        return response()->json([
            'message' => 'Registrado con éxito',
            'user' => $user
        ], 201);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function registroAlumno(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|string|between:2,100',
            'password' => 'required|string|confirmed|min:6',
            'id_profesor' => 'integer',
            'id_alumno' => 'integer',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }

        // $alumno = new Alumno;

        // $alumno->id_grupo = $request->id_grupo;
        // $alumno->nombre = $request->nombre;
        // $alumno->apellidos = $request->apellidos;
        // $alumno->email = $request->email;

        // $alumno->save();

        $alumno = Alumno::create(
            [
                'id_grupo' => $request->id_grupo,
                'nombre' => $request->nombre,
                'apellidos' => $request->apellidos,
                'email' => $request->email
            ]
        );

        $user = Usuario::create(array_merge(
            $validator->validated(),
            ['password' => bcrypt($request->password)],
            ['id_alumno' => $alumno->id]
        ));

        return response()->json([
            'message' => 'Registrado con éxito',
            'user' => $user
        ], 201);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function registroProfesor(Request $request)
    {
        
        $validator = Validator::make($request->all(), [
            'username' => 'required|string|between:2,100',
            'password' => 'required|string|confirmed|min:6',
            'id_profesor' => 'integer',
            'id_alumno' => 'integer',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }

        // $profesor = new Profesor;

        // $profesor->nombre = $request->nombre;
        // $profesor->apellidos = $request->apellidos;
        // $profesor->email = $request->email;
        // $profesor->es_admin = $request->es_admin;

        // $profesor->save();

        $profesor = Profesor::create(
            [
                'nombre' => $request->nombre,
                'apellidos' => $request->apellidos,
                'email' => $request->email,
                'es_admin' => $request->es_admin
            ]
        );

        $user = Usuario::create(array_merge(
            $validator->validated(),
            ['password' => bcrypt($request->password)],
            ['id_profesor' => $profesor->id]
        ));

        return response()->json([
            'message' => 'Registrado con éxito',
            'user' => $user
        ], 201);
    }

    public function eliminarUsuario($id)
    {
        $usuario = Usuario::find($id);

        if($usuario->id_profesor){
            $profesor = Profesor::find($usuario->id_profesor);
            $profesor->delete();
        }else{
            $alumno = Alumno::find($usuario->id_alumno);
            $alumno->delete();
        }
        $usuario->delete();

        return $usuario;
    }

    public function leerUsuario($id)
    {
        $usuario = Usuario::find($id);
        unset($usuario['password']);
        unset($usuario['token']);

        if($usuario->id_profesor){
            $profesor = Profesor::find($usuario->id_profesor);
            unset($profesor['es_admin']);
            return [$usuario, $profesor];
        }else{
            $alumno = Alumno::find($usuario->id_alumno);
            return [$usuario, $alumno];
        }
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function updateUsuario(Request $request, $id)
    {
        $usuario = Usuario::find($id);
        

        if($request->password){
            //$password = bcrypt($request->password);
            //$usuario->update("password"->$password);
            $request->password = bcrypt($request->password);
            $usuario->update(array_merge($request->all(),
            ['password' => bcrypt($request->password)]));
        }else{
            $usuario->update($request->all());
        }

        unset($usuario['password']);
        unset($usuario['token']);

        if($usuario->id_alumno){
            $alumno = Alumno::find($usuario->id_alumno);
            $alumno->update($request->all());
            $respuesta = response()->json([
                'message' => 'Actualizado con éxito',
                'user' => [$usuario, $alumno]
            ], 200);
        }else{
            $profesor = Profesor::find($usuario->id_profesor);
            $profesor->update($request->all());
            unset($profesor['es_admin']);
            $respuesta = response()->json([
                'message' => 'Actualizado con éxito',
                'user' => [$usuario, $profesor]
            ], 200);
        }

        return $respuesta;
    }
}
