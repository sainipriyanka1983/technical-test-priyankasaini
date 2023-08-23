<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use App\Models\Farm;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FarmSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('farms')->delete();
        $data = [
            [
                'name' => 'Farm 1',
                'location'=>'Location 1'
            ],
            [
                'name' => 'Farm 2',
                'location'=>'Location 2'
            ],
            [
                'name' => 'Farm 3',
                'location'=>'Location 3'
            ]
        ];
        Farm::insert($data);
    }
}
