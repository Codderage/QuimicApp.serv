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

//Usuarui

Route::get('/usuarios', [ApiController::class, 'getUsuarios']);
Route::get('/usuario/{id}', [ApiController::class, 'getUsuario']);

//Llibre

//Route::get('/api/llibres', [ApiController::class, 'getLlibres']);
//Route::get('/api/llibre/{id}', [ApiController::class, 'getLlibre']);
