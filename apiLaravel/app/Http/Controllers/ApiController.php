<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class ApiController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

function getLlibres () {
        return Llibre::all();
     }

     function getLlibre (Request $request, $id) {
        return Llibre::find($id);
     }


 function updateLlibre (Request $request, $id) {
    //cal posar en la peticio PUT el Header field:
    //Content-Type = application/x-www-form-urlencoded
    $llibre = Llibre::find($id);
    $llibre->update($request->all());

    return $llibre;
  }

  function insertLlibres(Request $request)
    {
        // Validate the request...

        $llibre = new Llibre;

        $llibre->titol = $request->titol;
        $llibre->paginas = $request->paginas;
        $llibre->autor_id = $request->autor_id;

        $llibre->save();
    }

    function deleteLlibres (Request $request, $id) {
        $llibre = Llibre::find($id);

        $llibre->delete();
    
        //return $llibre;
      }

      //=======================================

      function getAutors () {
        return Autor::all();
     }

     function getAutor (Request $request, $id) {
        return Autor::find($id);
     }


 function updAteautor (Request $request, $id) {
    //cal posar en la peticio PUT el Header field:
    //Content-Type = application/x-www-form-urlencoded
    $autor = Autor::find($id);
    $autor->update($request->all());

    return $autor;
  }

  function insertAutor(Request $request)
    {
        // Validate the request...

        $autor = new Autor;

        $autor->nom = $request->nom;
        $autor->cognoms = $request->cognoms;

        $autor->save();
    }

    function deleteAutor (Request $request, $id) {
        $autor = Autor::find($id);

        $autor->delete();
    
        //return $llibre;
      }


}
