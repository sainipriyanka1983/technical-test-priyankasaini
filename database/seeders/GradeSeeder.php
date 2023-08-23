<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use App\Models\Grade;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GradeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('grades')->delete();
        $data = [
            [
                'name' => 'perfect',
                'value'=>'1'
            ],
            [
                'name' => 'good',
                'value'=>'2'
            ],
            [
                'name' => 'fair',
                'value'=>'3'
            ]
            ,
            [
                'name' => 'bad condition',
                'value'=>'4'
            ]
            ,
            [
                'name' => 'broken/missing',
                'value'=>'5'
            ]
        ];
        Grade::insert($data);
    }
}
