<?php

namespace App\Http\Controllers;
use App\Apartado;
use Illuminate\Http\Request;

class ApartadoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Apartado::all();
    }

    /**
     * Show the form for creating a new resource.
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $apartados = Apartado::create
        (
            [   
                'sku_articulo'=>$request->sku_articulo,
                'numero_cliente'=>$request->numero_cliente,
                'abono'=>$request->abono,
                'condiciones'=>$request->condiciones
            ]
        );

        $response['message'] = "Guardo exitosamente";
        $response['success'] = true;
  
        return $response;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $apartados = Apartado::where('id_apartado',$request->id_apartado)
        ->update([
            'sku_articulo'=>$request->sku_articulo,
            'numero_cliente'=>$request->numero_cliente,
            'abono'=>$request->abono,
            'condiciones'=>$request->condiciones
        ]);

        $response['message'] = "Actualizaciòn exitosa";
        $response['success'] = true;

        return $response;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     * @param  \Illuminate\Http\Request  $request
     * 
     */
    public function destroy(Request $request)
    {
        $apartados = Apartado::where('id_apartado',$request->id_apartado)->delete();
        $response['message'] = "Eliminaciòn exitosa";
        $response['success'] = true;
  
        return $response;
    }
}
