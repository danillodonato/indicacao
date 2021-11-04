<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StatusIndicacaoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $status = [
            ['descricao' => 'INICIADA'],
            ['descricao' => 'PROCESSO'], 
            ['descricao' => 'FINALIZADA']
        ];

        DB::table('status_indicacao')->insert($status);
    }
}
