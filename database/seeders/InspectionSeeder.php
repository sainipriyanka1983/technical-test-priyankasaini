<?php

namespace Database\Seeders;

use App\Models\Turbine;
use App\Models\Inspection;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class InspectionSeeder extends Seeder
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
            Inspection::factory(2)
            ->create(['turbine_id'=>$turbine->id,]);
        });
    }
}
