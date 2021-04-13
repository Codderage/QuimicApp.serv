<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Usuario

Route::get('/usuarios', [ApiController::class, 'getUsuarios']);
Route::get('/usuario/{id}', [ApiController::class, 'getUsuario']);
Route::put('/usuario/{id}', [ApiController::class, 'updateUsuario']);
Route::post('/usuario', [ApiController::class, 'insertUsuario']);
Route::delete('/usuario/{id}', [ApiController::class, 'deleteAutor']);

//Alumno

Route::get('/alumnos', [ApiController::class, 'getUsuarios']);
Route::get('/alumno/{id}', [ApiController::class, 'getUsuario']);
Route::put('/alumno/{id}', [ApiController::class, 'updateUsuario']);
Route::post('/alumno', [ApiController::class, 'insertUsuario']);
Route::delete('/alumno/{id}', [ApiController::class, 'deleteAutor']);

//Profesor

Route::get('/profesores', [ApiController::class, 'getProfesores']);
Route::get('/profesor/{id}', [ApiController::class, 'getProfesor']);
Route::put('/profesor/{id}', [ApiController::class, 'updateProfesor']);
Route::post('/profesor', [ApiController::class, 'insertProfesor']);
Route::delete('/profesor/{id}', [ApiController::class, 'deleteProfesor']);


