<?php
   
namespace App\Http\Controllers\API;
   
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\InspectionDetail;
use Illuminate\Support\Facades\Auth;
use Validator;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\Farm as FarmResource;
class TurbineInspectionController extends BaseController
{
    public function index(Request $request)
{
    
 $results = DB::select('select t.name as turbine ,t.lat,t.long,c.name as component ,g.name as grade ,g.value  as gradevalue, i.inspected_at,i.id 
, id.id as insid from farms f left join turbines t on t.farm_id=f.id left join 
 turbine_component_relations r on r.turbine_id=t.id left join components 
 c on c.id=r.component_id left join inspections i on i.turbine_id=t.id 
 left join inspection_details id on id.inspection_id=i.id and 
 id.turbine_component_relation_id=r.id left join grades g on 
 g.id=id.grade_id where f.id=? order by i.inspected_at DESC,t.name',[$request->id]);

    $message = $this->sendResponse($results, 'List of inspection');

    return $message;
}

}
