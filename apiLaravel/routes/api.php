<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

//Autor

Route::get('/api/Autors', [ApiController::class, 'getAutors']);
Route::get('/api/autor/{id}', [ApiController::class, 'getAutor']);
Route::put('/api/autor/{id}', [ApiController::class, 'updAteautor']);
Route::post('/api/autor', [ApiController::class, 'insertAutor']);
Route::delete('/api/autor/{id}', [ApiController::class, 'deleteAutor']);

//Llibre

Route::get('/api/llibres', [ApiController::class, 'getLlibres']);
Route::get('/api/llibre/{id}', [ApiController::class, 'getLlibre']);
Route::put('/api/llibre/{id}', [ApiController::class, 'updateLlibre']);
Route::post('/api/llibre', [ApiController::class, 'insertLlibres']);
Route::delete('/api/llibre/{id}', [ApiController::class, 'deleteLlibres']);
