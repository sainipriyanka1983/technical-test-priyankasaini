<?php

namespace Database\Seeders;


use App\Models\Turbine;
use App\Models\Inspection;
use App\Models\Grade;
use App\Models\TurbineComponentRelation;
use App\Models\InspectionDetail;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class InspectionDetailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $grade=Grade::all();
        Inspection::all()
          ->each((function($inspection) use ($grade) {
            $turbinecomponentrelations= $inspection->turbine->turbinecomponentrelation;
            $turbinecomponentrelations->each(function($turbinecomponentrelation) use ($inspection, $grade) {
                $turbinecomponentrelation->inspectiondetail()->save(
                    InspectionDetail::factory()
                        ->create([
                            'inspection_id' => $inspection->id,
                            'grade_id' => $grade->random()->id,
                            'turbine_component_relation_id' => $turbinecomponentrelation->id
                        ])
                );
            });
        }));
    }
}
