<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

use App\Models\Usuario;
use App\Models\Alumno;
use App\Models\CompuestoEnMuestra;
use App\Models\Profesor;
use App\Models\Grupo;
use App\Models\Practica;
use App\Models\PracticaRealizada;
use App\Models\Muestra;
use App\Models\Condicion;
use App\Models\CompuestoQuimico;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;

class ApiController extends BaseController
{
   use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

   // USUARIO
   function getUsuarios()
   {
      return Usuario::all();
   }

   function getUsuario($id)
   {
      return Usuario::find($id);
   }

   function updateUsuario(Request $request)
   {
      $usuario = Usuario::find($request->id);
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

   function deleteUsuario($id)
   {
      $usuario = Usuario::find($id);

      $usuario->delete();

      return $usuario;
   }

   // ALUMNO
   function getAlumnos()
   {
      return Alumno::all();
   }

   function getAlumno($id)
   {
      return Alumno::find($id);
   }

   function updateAlumno(Request $request)
   {
      $alumno = Alumno::find($request->id);
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

   function deleteAlumno($id)
   {
      $alumno = Alumno::find($id);

      $alumno->delete();

      return $alumno;
   }


   // PROFESOR
   function getProfesores()
   {
      return Profesor::all();
   }

   function getProfesor($id)
   {
      return Profesor::find($id);
   }

   function updateProfesor(Request $request)
   {
      $profesor = Profesor::find($request->id);
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

   function deleteProfesor($id)
   {
      $profesor = Profesor::find($id);

      $profesor->delete();

      return $profesor;
   }

   // GRUPO
   function getGrupos()
   {
      return Grupo::all();
   }

   function getGrupo($id)
   {
      return Grupo::find($id);
   }

   function updateGrupo(Request $request)
   {
      $grupo = Grupo::find($request->id);
      $grupo->update($request->all());

      return $grupo;
   }

   function insertGrupo(Request $request)
   {
      $grupo = new Grupo;
      $grupo->nombre = $request->nombre;

      $grupo->save();
      return $grupo;
   }

   function deleteGrupo($id)
   {
      $grupo = Grupo::find($id);

      $grupo->delete();

      return $grupo;
   }



   // PRACTICA
   function getPracticas()
   {
      return Practica::all();
   }

   function getPractica($id)
   {
      return Practica::find($id);
   }

   function updatePractica(Request $request)
   {
      $practica = Practica::find($request->id);
      $practica->update($request->all());

      return $practica;
   }

   function insertPractica(Request $request)
   {
      $practica = new Practica;
      $practica->id_profesor = $request->id_profesor;
      $practica->id_muestra = $request->id_muestra;
      $practica->fecha_inicio = $request->fecha_inicio;
      $practica->fecha_fin = $request->fecha_fin;
      $practica->enunciado = $request->enunciado;

      $practica->save();
      return $practica;
   }

   function deletePractica($id)
   {
      $practica = Practica::find($id);

      $practica->delete();

      return $practica;
   }

   // PRACTICA REALIZADA
   function getPracticasRealizadas()
   {
      return PracticaRealizada::all();
   }

   function getPracticaRealizada($id)
   {
      return PracticaRealizada::find($id);
   }

   function updatePracticarealizada(Request $request)
   {
      $practicaRealizada = PracticaRealizada::find($request->id);
      $practicaRealizada->update($request->all());

      return $practicaRealizada;
   }

   function insertPracticaRealizada(Request $request)
   {
      $practicaRealizada = new PracticaRealizada;
      $practicaRealizada->id_profesor = $request->id_profesor;
      $practicaRealizada->id_muestra = $request->id_muestra;
      $practicaRealizada->fecha_inicio = $request->fecha_inicio;
      $practicaRealizada->fecha_fin = $request->fecha_fin;
      $practicaRealizada->enunciado = $request->enunciado;

      $practicaRealizada->save();
      return $practicaRealizada;
   }

   function deletePracticaRealizada($id)
   {
      $practicaRealizada = PracticaRealizada::find($id);

      $practicaRealizada->delete();

      return $practicaRealizada;
   }

   // MUESTRA
   function getMuestras()
   {
      return Muestra::all();
   }

   function getMuestra($id)
   {
      return Muestra::find($id);
   }

   function updateMuestra(Request $request)
   {
      $muestra = Muestra::find($request->id);
      $muestra->update($request->all());

      return $muestra;
   }

   function insertMuestra(Request $request)
   {
      $muestra = new Muestra;
      $muestra->nombre = $request->nombre;
      $muestra->codigo = $request->codigo;
      $muestra->comentario = $request->comentario;

      $muestra->save();

      return $muestra;
   }

   function deleteMuestra($id)
   {
      $muestra = Muestra::find($id);

      $muestra->delete();

      return $muestra;
   }

   // CONDICIONES
   function getCondiciones()
   {
      return Condicion::all();
   }

   function getCondicion($id)
   {
      return Condicion::find($id);
   }

   function updateCondicion(Request $request)
   {
      $condicion = Condicion::find($request->id);
      $condicion->update($request->all());

      return $condicion;
   }

   function insertCondicion(Request $request)
   {
      $condicion = new Condicion;
      $condicion->longitud_columna = $request->longitud_columna;
      $condicion->diametro_interior_columna = $request->diametro_interior_columna;
      $condicion->tamano_particula = $request->tamano_particula;
      $condicion->temperatura = $request->temperatura;
      $condicion->velocidad_flujo = $request->velocidad_flujo;
      $condicion->eluyente = $request->eluyente;
      $condicion->detector_uv = $request->detector_uv;

      $condicion->save();

      return $condicion;
   }

   function deleteCondicion($id)
   {
      $condicion = Condicion::find($id);

      $condicion->delete();

      return $condicion;
   }


   // COMPUESTO QUíMICO
   function getCompuestosQuimicos()
   {
      return CompuestoQuimico::all();
   }

   function getCompuestoQuimico($id)
   {
      return CompuestoQuimico::find($id);
   }

   function updateCompuestoQuimico(Request $request)
   {
      $compuestoQuimico = CompuestoQuimico::find($request->id);
      $compuestoQuimico->update($request->all());

      return $compuestoQuimico;
   }

   function insertCompuestoQuimico(Request $request)
   {
      $compuestoQuimico = new CompuestoQuimico;
      $compuestoQuimico->nombre = $request->nombre;
      $compuestoQuimico->formula = $request->dormula;
      $compuestoQuimico->descripcion = $request->descripcion;
      $compuestoQuimico->tipo = $request->tipo;
      $compuestoQuimico->estructura = $request->estructura;

      $compuestoQuimico->save();

      return $compuestoQuimico;
   }

   function deleteCompuestoQuimico($id)
   {
      $compuestoQuimico = CompuestoQuimico::find($id);

      $compuestoQuimico->delete();

      return $compuestoQuimico;
   }



   // COMPUESTO EN QUíMICO
   function getCompuestosMuestras()
   {
      return CompuestoEnMuestra::all();
   }

   function getCompuestoMuestra($id)
   {
      return CompuestoEnMuestra::find($id);
   }

   function updateCompuestoMuestra(Request $request)
   {
      $compuestoMuestra = CompuestoEnMuestra::find($request->id);
      $compuestoMuestra->update($request->all());

      return $compuestoMuestra;
   }

   function insertCompuestoMuestra(Request $request)
   {
      $compuestoMuestra = new CompuestoEnMuestra;
      $compuestoMuestra->nombre = $request->nombre;
      $compuestoMuestra->compuesto_id = $request->compuesto_id;
      $compuestoMuestra->condiciones_id = $request->condiciones_id;
      $compuestoMuestra->muestra_id = $request->muestra_id;
      $compuestoMuestra->cantidad = $request->cantidad;
      $compuestoMuestra->minutos = $request->minutos;
      $compuestoMuestra->altura = $request->altura;

      $compuestoMuestra->save();

      return $compuestoMuestra;
   }

   function deleteCompuestoMuestra($id)
   {
      $compuestoMuestra = CompuestoEnMuestra::find($id);

      $compuestoMuestra->delete();

      return $compuestoMuestra;
   }
}
