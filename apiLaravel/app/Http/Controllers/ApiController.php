<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

use App\Models\Usuario;
use App\Models\Idioma;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;

class ApiController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;


    function getUsuarios () {
      return Usuario::all();
   }

   //eeeeee
   function getUsuario (Request $request, $id) {
      return Usuario::find($id);
   }

}
