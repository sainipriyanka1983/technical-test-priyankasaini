<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TurbineInspection extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
       
       return[
        'id' => $this->id,
        'turbine_name' => $this->turbine,
        'lat' => $this->lat,
        'long' => $this->long,
        'component' => $this->component,
        'grade' => $this->grade,
        'gradevalue' => $this->gradevalue,
        'inspected_at' => $this->inspected_at,
       ];
    }
}
