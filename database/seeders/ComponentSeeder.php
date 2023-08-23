<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use App\Models\Grade;
use App\Models\Component;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ComponentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
            DB::table('components')->delete();
            $data = [
                [
                    'name' => 'Generator',
                    
                ],
                [
                    'name' => 'Blade',
                    
                ],
                [
                    'name' => 'Rotor',
                    
                ],
                [
                    'name' => 'Hub',
                    
                ]
            ];
            Component::insert($data);
    }
}
