<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Indicacoes;
use DB;

class IndicacoesController extends Controller
{
    public function list()
    {
        return Indicacoes::listAll();
    }

    public function store(Request $request)
    {
        $data = $request->all();

        return Indicacoes::create($data);
    }

    public function destroy($id) {
        return Indicacoes::destroy($id);
    }

    public function alteraStatus(Request $request)
    {
        $id = $request->get('id');

        $status = $request->get('status_id');

        $indicacao = Indicacoes::find($id);

        $indicacao->status_id = $status;

        return $indicacao->save();
    }

    public function verificaCpf(Request $request)
    {
        $cpf = $request->get('cpf');
        
        $return = ['status' => true];

        $cpfExists = Indicacoes::findCpf($cpf);

        if (!$this->validaCpf($cpf))
            $return = ['status' => false, 'message' => 'CPF inválido!'];

        if (count($cpfExists) > 0)
            $return = ['status' => false, 'message' => 'CPF já indicado!'];

        return $return;
    }

    public function validaCpf($cpf)
    {       
        $numeros = substr($cpf, 0, 9);

        $digitos = substr($cpf, -2);
        
        if(!$this->verificacaoDigitos($numeros, $digitos[0]))
            return false;

        $novosNumeros = $numeros . $digitos[0];
        
        if(!$this->verificacaoDigitos($novosNumeros, $digitos[1]))
            return false;
        
        return true;
    }

    public function verificacaoDigitos($numeros, $digito) {
        $soma = 0;

        $multiplicadores = strlen($numeros) + 1;
        
        $numeros = array_reverse(str_split($numeros));

        for($i = $multiplicadores; $i > 1; $i--) {
            $j = $i - 2;
            $soma += intval($numeros[$j]) * $i;
        }
        
        $resto = (($soma * 10) % 11) == 10 ? 0 : ($soma * 10) % 11;

        if($resto != $digito)
            return false;

        return true;
    }

    public function validaEmail(Request $request) {
        $email = $request->get('email');

        $return = ['status' => true];

        if (!filter_var($email, FILTER_VALIDATE_EMAIL))
            $return = ['status' => false, 'message' => 'Email inválido'];

        return $return;
    }
}
