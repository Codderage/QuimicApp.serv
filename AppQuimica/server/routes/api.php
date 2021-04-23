<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\AuthController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/registro', [AuthController::class, 'registro']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/perfil-usuario', [AuthController::class, 'perfilUsuario']);
});

//USUARIO

Route::get('/usuarios', [ApiController::class, 'getUsuarios']);
Route::get('/usuario/{id}', [ApiController::class, 'getUsuario']);
Route::put('/usuario/{id}', [ApiController::class, 'updateUsuario']);
Route::post('/usuario', [ApiController::class, 'insertUsuario']);
Route::delete('/usuario/{id}', [ApiController::class, 'deleteAutor']);

//ALUMNO

Route::get('/alumnos', [ApiController::class, 'getAlumnos']);
Route::get('/alumno/{id}', [ApiController::class, 'getAlumno']);
Route::put('/alumno/{id}', [ApiController::class, 'updatealumno']);
Route::post('/alumno', [ApiController::class, 'insertAlumno']);
Route::delete('/alumno/{id}', [ApiController::class, 'deleteAlumno']);

//PROFESOR

Route::get('/profesores', [ApiController::class, 'getProfesores']);
Route::get('/profesor/{id}', [ApiController::class, 'getProfesor']);
Route::put('/profesor/{id}', [ApiController::class, 'updateProfesor']);
Route::post('/profesor', [ApiController::class, 'insertProfesor']);
Route::delete('/profesor/{id}', [ApiController::class, 'deleteProfesor']);


//GRUPO

Route::get('/grupos', [ApiController::class, 'getGrupos']);
Route::get('/grupo/{id}', [ApiController::class, 'getGrupo']);
Route::put('/grupo/{id}', [ApiController::class, 'updateGrupo']);
Route::post('/grupo', [ApiController::class, 'insertGrupo']);
Route::delete('/grupo/{id}', [ApiController::class, 'deleteGrupo']);


//PRACTICA

Route::get('/practicas', [ApiController::class, 'getPracticas']);
Route::get('/practica/{id}', [ApiController::class, 'getPractica']);
Route::put('/practica/{id}', [ApiController::class, 'updatePractica']);
Route::post('/practica', [ApiController::class, 'insertPractica']);
Route::delete('/practica/{id}', [ApiController::class, 'deletePractica']);

//PRACTICA REALIZADA

Route::get('/practicas_realizadas', [ApiController::class, 'getPracticasRealizadas']);
Route::get('/practica_realizada/{id}', [ApiController::class, 'getPracticaRealizada']);
Route::put('/practica_realizada/{id}', [ApiController::class, 'updatePracticaRealizada']);
Route::post('/practica_realizada', [ApiController::class, 'insertPracticaRealizada']);
Route::delete('/practica_realizada/{id}', [ApiController::class, 'deletePracticaRealizada']);


//MUESTRA

Route::get('/muestras', [ApiController::class, 'getMuestras']);
Route::get('/muestra/{id}', [ApiController::class, 'getMuestra']);
Route::put('/muestra/{id}', [ApiController::class, 'updateMuestra']);
Route::post('/muestra', [ApiController::class, 'insertMuestra']);
Route::delete('/muestra/{id}', [ApiController::class, 'deleteMuestra']);

//CONDICION

Route::get('/condiciones', [ApiController::class, 'getCondiciones']);
Route::get('/condicion/{id}', [ApiController::class, 'getCondicion']);
Route::put('/condicion/{id}', [ApiController::class, 'updateCondicion']);
Route::post('/condicion', [ApiController::class, 'insertCondicion']);
Route::delete('/condicion/{id}', [ApiController::class, 'deleteCondicion']);


//COMPUESTO QUÍMICO

Route::get('/compuestos_quimicos', [ApiController::class, 'getCompuestosQuimicos']);
Route::get('/compuesto_quimico/{id}', [ApiController::class, 'getCompuestoQuimico']);
Route::put('/compuesto_quimico/{id}', [ApiController::class, 'updateCompuestoQuimico']);
Route::post('/compuesto_quimico', [ApiController::class, 'insertCompuestoQuimico']);
Route::delete('/compuesto_quimico/{id}', [ApiController::class, 'deleteCompuestoQuimico']);

//COMPUESTO EN MUESTRA

Route::get('/compuestos_muestras', [ApiController::class, 'getCompuestosMuestras']);
Route::get('/compuesto_muestra/{id}', [ApiController::class, 'getCompuestoMuestra']);
Route::put('/compuesto_muestra/{id}', [ApiController::class, 'updateCompuestoMuestra']);
Route::post('/compuesto_muestra', [ApiController::class, 'insertCompuestoMuestra']);
Route::delete('/compuesto_muestra/{id}', [ApiController::class, 'deleteCompuestoMuestra']);
