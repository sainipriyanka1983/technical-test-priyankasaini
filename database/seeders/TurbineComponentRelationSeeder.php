<?php

namespace Database\Seeders;

use App\Models\Turbine;
use App\Models\Component;
use App\Models\TurbineComponentRelation;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TurbineComponentRelationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       Turbine::all()
       ->each(function($turbine){
        Component::all()
        ->each(function($component) use ($turbine){
            TurbineComponentRelation::factory()
            ->create([
                'turbine_id'=>$turbine->id,
                'component_id'=>$component->id,
            ]);
        });
       });
        
        
    }
}
