<?php

use Illuminate\Http\Request;

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

//Route::middleware('auth:api')->get('/user', function (Request $request) {
    //return $request->user();
//});

Route::post('insertarCliente','ClienteController@store');
Route::get('mostrarArticulos','ArticuloController@index');
Route::get('mostrarApartados','ApartadoController@index');
Route::post('insertarApartado','ApartadoController@create');
Route::post('actualizarApartado','ApartadoController@update');
Route::post('eliminarApartado','ApartadoController@destroy');


