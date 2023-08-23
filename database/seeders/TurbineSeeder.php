<?php

namespace Database\Seeders;

use App\Models\Farm;
use App\Models\Turbine;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TurbineSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Farm::all()
        ->each(function($farm){
            Turbine::factory(5)
            ->create(['farm_id'=>$farm->id,]);
        });
    }

       
}
