<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use DB;

class Indicacoes extends Model
{
    use HasFactory;

    protected $table = 'indicacoes';

    public $fillable = [
        'nome',
        'cpf',
        'telefone',
        'email',
        'status_id'
    ];

    public function findCpf($cpf) {
        return DB::table('indicacoes')->where('cpf', $cpf)->get();
    }

    public function listAll() {
        return DB::table('indicacoes')
                ->join('status_indicacao', 'status_indicacao.id', '=', 'indicacoes.status_id')
                ->select('indicacoes.*', 'status_indicacao.descricao')
                ->get();
    }
}
