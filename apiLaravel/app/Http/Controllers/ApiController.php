<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

use App\Models\Usuario;
use App\Models\Alumno;
use App\Models\Profesor;
use App\Models\Grupo;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;

class ApiController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

   // USUARIO
   function getUsuarios () {
      return Usuario::all();
   }

   function getUsuario (Request $request, $id) {
      return Usuario::find($id);
   }

   function updateUsuario (Request $request, $id) {
      $usuario = Usuario::find($id);
      //print_r($usuario);
      //print_r($request);exit;
      $usuario->update($request->all());
  
      return $usuario;
    }

    function insertUsuario(Request $request)
    {
        $usuario = new Usuario;

        $usuario->id_profesor = $request->id_profesor;
        $usuario->id_alumno = $request->id_alumno;
        $usuario->username = $request->username;
        $usuario->password = $request->password;
        $usuario->token = $request->token;

        $usuario->save();
        return $usuario;
    }

    function deleteUsuario(Request $request, $id) {
      $usuario = Usuario::find($id);

      $usuario->delete();
  
      return $usuario;
    }

   // ALUMNO
   function getAlumnos () {
      return Alumno::all();
   }

   function getAlumno (Request $request, $id) {
      return Alumno::find($id);
   }

   function updateAlumno (Request $request, $id) {
      $alumno = Alumno::find($id);
      //print_r($alumno);
      //print_r($request);exit;
      $alumno->update($request->all());
  
      return $alumno;
    }

    function insertAlumno(Request $request)
    {
        $alumno = new Alumno;

        $alumno->id_grupo = $request->id_grupo;
        $alumno->nombre = $request->nombre;
        $alumno->apellidos = $request->apellidos;
        $alumno->email = $request->email;

        $alumno->save();
        return $alumno;
    }

    function deleteAlumno(Request $request, $id) {
      $alumno = Alumno::find($id);

      $alumno->delete();
  
      return $alumno;
    }


    // PROFESOR
   function getProfesores () {
      return Profesor::all();
   }

   function getProfesor (Request $request, $id) {
      return Profesor::find($id);
   }

   function updateProfesor (Request $request, $id) {
      $profesor = Profesor::find($id);
      //print_r($profesor);
      //print_r($request);exit;
      $profesor->update($request->all());
  
      return $profesor;
    }

    function insertProfesor(Request $request)
    {
        $profesor = new Profesor;

        $profesor->nombre = $request->nombre;
        $profesor->apellidos = $request->apellidos;
        $profesor->email = $request->email;
        $profesor->es_admin = $request->es_admin;

        $profesor->save();
        return $profesor;
    }

    function deleteProfesor(Request $request, $id) {
      $profesor = Profesor::find($id);

      $profesor->delete();
  
      return $profesor;
    }

}
