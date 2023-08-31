<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\RegisterController;

use App\Http\Controllers\API\FarmController;

use App\Http\Controllers\API\TurbineInspectionController;

/*ZZ
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('register', [RegisterController::class, 'register']);
Route::post('login', [RegisterController::class, 'login']);
//Route::get('farms', [farmsController::class, 'farms']);

//Route::middleware('auth:api')->group( function () {
    ////Route::resource('products', 'API\ProductController');
//});
Route::middleware('auth:api')->group( function () {
    Route::resource('farms', FarmController::class);
    Route::post('insp', [TurbineInspectionController::class, 'index']);
    
});
