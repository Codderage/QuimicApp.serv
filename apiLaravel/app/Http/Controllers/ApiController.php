<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class ApiController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

<<<<<<< 0548cca8d40fa8fb7e02c0825ceae6a937b099fd
/**
    * @OA\Get(
    *   path="/api/llibres",
    *   tags={"llibres"},
    *   summary="Veure tots els llibres.",
    *   @OA\Response(
    *     response=200,
    *     description="Retorna tots els llibres.",
    *   ),
    *   @OA\Response(
    *     response="default",
    *     description="S'ha produit un error.",
    *   )
    * )
    */
    function getLlibres () {
        return Llibre::all();
     }
     /**
      * @OA\Get(
      *   path="/api/llibre/{id}",
      *   tags={"llibres"},
      *   summary="Veure un llibre.",
      *   description="Retorna un llibre",
      *   @OA\Parameter(
      *     name="id",
      *     description="id del llibre",
      *     required=true,
      *     in="path",
      *     @OA\Schema(
      *       type="integer"
      *     )
      *   ),
      *   @OA\Response(
      *     response=200,
      *     description="Retorna un llibre.",
      *   ),
      *   @OA\Response(
      *     response="default",
      *     description="S'ha produit un error.",
      *   )
      * )
      *
      */

     function getLlibre (Request $request, $id) {
      return Llibre::find($id);
   }

   

   /**
    * @OA\Put(
    *   path="/api/llibre/{id}",
    *   tags={"llibres"},
    *   summary="Modificar un llibre.",
    *   @OA\Parameter(
    *          name="id",
    *          description="Id del llibre",
    *          required=true,
    *          in="path",
    *          @OA\Schema(
    *              type="integer"
    *          )
    *    ),
    *   @OA\Parameter(
    *     name="titol",
    *     description="titol del llibre",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="string"
    *     )
    *   ),
    *   @OA\Parameter(
    *     name="data_publi",
    *     description="data de publicació del llibre",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="string"
    *     )
    *   ),
    *   @OA\Parameter(
    *     name="autor_id",
    *     description="id de l'autor del llibre",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
    *   @OA\Parameter(
    *     name="idioma_id",
    *     description="id del idioma del llibre",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
    *   @OA\Response(
    *     response=200,
    *     description="Retorna el llibre que hem modificat.",
    *   ),
    *   @OA\Response(
    *     response="default",
    *     description="S'ha produit un error.",
    *   )
    * )
    */
=======
function getLlibres () {
        return Llibre::all();
     }

     function getLlibre (Request $request, $id) {
        return Llibre::find($id);
     }


>>>>>>> rutas y api controller
 function updateLlibre (Request $request, $id) {
    //cal posar en la peticio PUT el Header field:
    //Content-Type = application/x-www-form-urlencoded
    $llibre = Llibre::find($id);
<<<<<<< 0548cca8d40fa8fb7e02c0825ceae6a937b099fd
    //print_r($llibre);
    //print_r($request);exit;
=======
>>>>>>> rutas y api controller
    $llibre->update($request->all());

    return $llibre;
  }

<<<<<<< 0548cca8d40fa8fb7e02c0825ceae6a937b099fd
  /**
    * @OA\Post(
    *   path="/api/llibre",
    *   tags={"llibres"},
    *   summary="Inserir un nou llibre.",
    *   @OA\Parameter(
    *     name="titol",
    *     description="titol del llibre",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="string"
    *     )
    *   ),
    *   @OA\Parameter(
    *     name="data_publi",
    *     description="data de publicació del llibre",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="string"
    *     )
    *   ),
    *   @OA\Parameter(
    *     name="autor_id",
    *     description="id de l'autor del llibre",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
    *   @OA\Parameter(
    *     name="idioma_id",
    *     description="id del idioma del llibre",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
    *   @OA\Response(
    *     response=200,
    *     description="Retorna el llibre que hem inserit.",
    *   ),
    *   @OA\Response(
    *     response="default",
    *     description="S'ha produit un error.",
    *   )
    * )
    */
=======
>>>>>>> rutas y api controller
  function insertLlibres(Request $request)
    {
        // Validate the request...

        $llibre = new Llibre;

        $llibre->titol = $request->titol;
<<<<<<< 0548cca8d40fa8fb7e02c0825ceae6a937b099fd
        $llibre->data_publi = $request->data_publi;
        $llibre->autor_id = $request->autor_id;

        $llibre->save();
        return $llibre;
    }

    /**
      * @OA\Delete(
      *   path="/api/llibre/{id}",
      *   tags={"llibres"},
      *   summary="Eliminar un llibre.",
      *   description="Elimina un llibre",
      *   @OA\Parameter(
      *     name="id",
      *     description="id del llibre",
      *     required=true,
      *     in="path",
      *     @OA\Schema(
      *       type="integer"
      *     )
      *   ),
      *   @OA\Response(
      *     response=200,
      *     description="Retorna un llibre.",
      *   ),
      *   @OA\Response(
      *     response="default",
      *     description="S'ha produit un error.",
      *   )
      * )
      *
      */
=======
        $llibre->paginas = $request->paginas;
        $llibre->autor_id = $request->autor_id;

        $llibre->save();
    }

>>>>>>> rutas y api controller
    function deleteLlibres (Request $request, $id) {
        $llibre = Llibre::find($id);

        $llibre->delete();
    
<<<<<<< 0548cca8d40fa8fb7e02c0825ceae6a937b099fd
        return $llibre;
      }

      //=======================================
  
  /**
    * @OA\Get(
    *   path="/api/autors",
    *   tags={"autors"},
    *   summary="Veure tots els autors.",
    *   @OA\Response(
    *     response=200,
    *     description="Retorna tots els autors.",
    *   ),
    *   @OA\Response(
    *          response=401,
    *          description="Unauthenticated",
    *   ),
    *   @OA\Response(
    *          response=403,
    *          description="Forbidden"
    *   ),
    *   @OA\Response(
    *          response=404,
    *          description="Recurso no encontrado"
    *   ),
    *   @OA\Response(
    *     response="default",
    *     description="S'ha produit un error.",
    *   )
    * )
    */
=======
        //return $llibre;
      }

      //=======================================

>>>>>>> rutas y api controller
      function getAutors () {
        return Autor::all();
     }

<<<<<<< 0548cca8d40fa8fb7e02c0825ceae6a937b099fd
    /**
      * @OA\Get(
      *   path="/api/autor/{id}",
      *   tags={"autors"},
      *   summary="Veure un autor.",
      *   description="Retorna un autor",
      *   @OA\Parameter(
      *     name="id",
      *     description="id del autor",
      *     required=true,
      *     in="path",
      *     @OA\Schema(
      *       type="integer"
      *     )
      *   ),
      *   @OA\Response(
      *         response=200,
      *         description="Retorna un autor.",
      *   ),
      *   @OA\Response(
      *          response=401,
      *          description="Unauthenticated",
      *   ),
      *   @OA\Response(
      *          response=403,
      *          description="Forbidden"
      *   ),
      *   @OA\Response(
      *          response=404,
      *          description="Recurso no encontrado"
      *   ),
      *   @OA\Response(
      *     response="default",
      *     description="S'ha produit un error.",
      *   )
      * )
      */
=======
>>>>>>> rutas y api controller
     function getAutor (Request $request, $id) {
        return Autor::find($id);
     }

<<<<<<< 0548cca8d40fa8fb7e02c0825ceae6a937b099fd
     function getUltimAutor () {

      $autores=Autor::all();
      //$sql = 'SELECT * FROM autor WHERE id = (SELECT MAX(id) FROM autor)';
      //$products = DB::select($sql);
      $idMax=0;
          $arrayIds = json_decode($autores, true);
          //print_r($arrayIds);
          //exit;
          foreach ($arrayIds as $key => $value) {
            foreach ($value as $key1 => $value1) {
              if( $key1=='id') {
                if($value1>=$idMax){
                  $idMax=$value1;
                }
              }
            }
          }
          echo $idMax;
          exit;
          
      //return $idMax;//json_encode($idMax);
      
      //return Autor::all();
   }
   
  
   /**
    * @OA\Put(
    *   path="/api/autor/{id}",
    *   tags={"autors"},
    *   summary="Modificar un autor.",
    *   @OA\Parameter(
    *          name="id",
    *          description="Id del autor",
    *          required=true,
    *          in="path",
    *          @OA\Schema(
    *              type="integer"
    *          )
    *    ),
    *   @OA\Parameter(
    *     name="nom",
    *     description="nom del autor",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="string"
    *     )
    *   ),
    *   @OA\Parameter(
    *     name="cognoms",
    *     description="Cognoms del autor",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="string"
    *     )
    *   ),
    *   @OA\Response(
    *     response=200,
    *     description="Retorna el autor que hem modificat.",
    *   ),
    *   @OA\Response(
    *          response=401,
    *          description="Unauthenticated",
    *   ),
    *   @OA\Response(
    *          response=403,
    *          description="Forbidden"
    *   ),
    *   @OA\Response(
    *          response=404,
    *          description="Recurso no encontrado"
    *   ),
    *   @OA\Response(
    *     response="default",
    *     description="S'ha produit un error.",
    *   )
    * )
    */
=======

>>>>>>> rutas y api controller
 function updAteautor (Request $request, $id) {
    //cal posar en la peticio PUT el Header field:
    //Content-Type = application/x-www-form-urlencoded
    $autor = Autor::find($id);
    $autor->update($request->all());

    return $autor;
  }
<<<<<<< 0548cca8d40fa8fb7e02c0825ceae6a937b099fd
/**
    * @OA\Post(
    *   path="/api/autor",
    *   tags={"autors"},
    *   summary="Inserir un nou autor.",
    *   @OA\Parameter(
    *     name="nom",
    *     description="Nom del autor",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="string"
    *     )
    *   ),
    *   @OA\Parameter(
    *     name="cognoms",
    *     description="Cognoms del autor",
    *     required=true,
    *     in="query",
    *     @OA\Schema(
    *       type="string"
    *     )
    *   ),
    *   @OA\Response(
    *     response=200,
    *     description="Retorna el llibre que hem inserit.",
    *   ),
    *   @OA\Response(
    *          response=401,
    *          description="Unauthenticated",
    *   ),
    *   @OA\Response(
    *          response=403,
    *          description="Forbidden"
    *   ),
    *   @OA\Response(
    *          response=404,
    *          description="Recurso no encontrado"
    *   ),
    *   @OA\Response(
    *     response="default",
    *     description="S'ha produit un error.",
    *   )
    * )
    */
=======

>>>>>>> rutas y api controller
  function insertAutor(Request $request)
    {
        // Validate the request...

        $autor = new Autor;

        $autor->nom = $request->nom;
        $autor->cognoms = $request->cognoms;

        $autor->save();
<<<<<<< 0548cca8d40fa8fb7e02c0825ceae6a937b099fd
        
        return $autor;
    }

    /**
      * @OA\Delete(
      *   path="/api/autor/{id}",
      *   tags={"autors"},
      *   summary="Eliminar un autor.",
      *   description="Elimina un autor",
      *   @OA\Parameter(
      *     name="id",
      *     description="Id del autor",
      *     required=true,
      *     in="path",
      *     @OA\Schema(
      *       type="integer"
      *     )
      *   ),
      *   @OA\Response(
      *     response=200,
      *     description="Retorna un autor.",
      *   ),
      *   @OA\Response(
      *          response=401,
      *          description="Unauthenticated",
      *   ),
      *   @OA\Response(
      *          response=403,
      *          description="Forbidden"
      *   ),
      *   @OA\Response(
      *          response=404,
      *          description="Recurso no encontrado"
      *   ),
      *   @OA\Response(
      *          response=500,
      *          description="Recurso no encontrado"
      *   ),
      *   @OA\Response(
      *     response="default",
      *     description="S'ha produit un error.",
      *   )
      * )
      */
=======
    }

>>>>>>> rutas y api controller
    function deleteAutor (Request $request, $id) {
        $autor = Autor::find($id);

        $autor->delete();
    
<<<<<<< 0548cca8d40fa8fb7e02c0825ceae6a937b099fd
        return $autor;
      }


      /**
    * @OA\Get(
    *   path="/api/idiomes",
    *   tags={"idiomes"},
    *   summary="Veure tots els idiomes.",
    *   @OA\Response(
    *     response=200,
    *     description="Retorna tots els idiomes.",
    *   ),
    *   @OA\Response(
    *     response="default",
    *     description="S'ha produit un error.",
    *   )
    * )
    */
    function getIdiomes () {
      return Idioma::all();
   }
   /**
    * @OA\Get(
    *   path="/api/idioma/{id}",
    *   tags={"idiomes"},
    *   summary="Veure un idioma.",
    *   description="Retorna un idioma",
    *   @OA\Parameter(
    *     name="id",
    *     description="id del idioma",
    *     required=true,
    *     in="path",
    *     @OA\Schema(
    *       type="integer"
    *     )
    *   ),
    *   @OA\Response(
    *     response=200,
    *     description="Retorna un idioma.",
    *   ),
    *   @OA\Response(
    *     response="default",
    *     description="S'ha produit un error.",
    *   )
    * )
    *
    */

   function getIdioma (Request $request, $id) {
    return Idioma::find($id);
 }


    
=======
        //return $llibre;
      }


>>>>>>> rutas y api controller
}
