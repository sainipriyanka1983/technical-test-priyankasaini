<?php
   
namespace App\Http\Controllers\API;
   
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\Farm;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\Http\Resources\Farm as FarmResource;
class FarmController extends BaseController
{
    public function index()
    {
        $products = Farm::all();

        return $this->sendResponse(FarmResource::collection($products), 'Farm Retrieved Successfully.');
    }

}
