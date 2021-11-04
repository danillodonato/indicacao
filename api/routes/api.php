<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\IndicacoesController;

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

Route::get('/indicacoes', [IndicacoesController::class, 'list']);
Route::post('/indicacao', [IndicacoesController::class, 'store']);
Route::delete('/indicacao/{id}', [IndicacoesController::class, 'destroy']);
Route::post('/indicacao/novo_status', [IndicacoesController::class, 'alteraStatus']);
Route::post('/valida_cpf', [IndicacoesController::class, 'verificaCpf']);
Route::post('/valida_email', [IndicacoesController::class, 'validaEmail']);
