<?php

namespace App\Http\Controllers;

use App\Models\Estudiante;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class EstudianteController extends Controller
{
    //
    public function index()
    {
        $estudiantes = Estudiante::All();

        return response()->json($estudiantes,200);
    }

    //guardar datos
    public function guardar(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|max:255',
            'apellidos' => 'required|max:255',
            'email' => 'required',
            'lenguaje' => 'required|in:Java,PHP,React'
        ]);
    
        //si hubo error
        if($validator->fails()){
            $data = [
                'message' => 'Error en la validación de datos',
                'errors' => $validator->errors(),
                'status' => 400
            ];
            return response()->json($data,200);
        }
        //si todo sale bien
        $estudiante = Estudiante::create([
            'nombre' => $request->nombre,
            'apellidos' => $request->apellidos,
            'email' => $request->email,
            'lenguaje' => $request->lenguaje,
        ]);

        //si no se pudo crear el estudiante
        if(!$estudiante){
            $data = [
                'message' => 'Error al crear estudiante',
                'status' => 500
            ];
            return response()->json($data,500);
        }

        //si se pudo crear
        $data = [
            'Estudiante' => $estudiante,
            'status' => 201
        ];
        return response()->json($data,201);
    }

    public function show($id)
    {
        $estudiante = Estudiante::find($id);

        if(!$estudiante){
            $data = [
                'message' => 'Estudiante no encontrado',
                'status' => 404
            ];
            return response()->json($data,404);
        }

        $data = [
            'estudiante' => $estudiante,
            'status' => 200
        ];
        return response()->json($data, 404);
    }

    public function actualizar(Request $request, $id)
    {   
        $estudiante = Estudiante::find($id);

        if(!$estudiante){
            $data = [
                'message' => 'Estudiante no encontrado',
                'status' => 404
            ];
            return response()->json($data,404);
        }

        $validator = Validator::make($request->all(), [
        'nombre' => 'max:255',
        'apellidos' => 'max:255',
        'email' => 'email',
        'lenguaje' => 'in:Java,PHP,React'
        ]);

        //si hubo error
        if($validator->fails()){
            $data = [
                'message' => 'Error en la validación de datos',
                'errors' => $validator->errors(),
                'status' => 400
            ];
            return response()->json($data,200);
        }

        $estudiante->nombre = $request->nombre;
        $estudiante->apellidos = $request->apellidos;
        $estudiante->email = $request->email; 
        $estudiante->lenguaje = $request->lenguaje;

        $estudiante->save();

        $data = [
            'message' => 'Estudiante actualizado',
            'estudiante' => $estudiante,
            'status' => 200
        ];
        return response()->json($data,200);
    }

    public function actualizarParcial(Request $request, $id)
    {

        $estudiante = Estudiante::find($id);
        if(!$estudiante){
            $data = [
                'message' => 'Estudiante no encontrado',
                'status' => 404
            ];
            return response()->json($data,404);
        }

        $validator = Validator::make($request->all(), [
                'nombre' => 'max:255',
                'apellidos' => 'max:255',
                'email' => 'email',
                'lenguaje' => 'in:Java,PHP,React'
        ]);

        //si hubo error
        if($validator->fails()){
            $data = [
                'message' => 'Error en la validación de datos',
                'errors' => $validator->errors(),
                'status' => 400
            ];
            return response()->json($data,200);
        }
        
        if($request->has('nombre')){
            $estudiante->nombre = $request->nombre;
        }                
        if($request->has('apellidos')){
            $estudiante->apellidos = $request->apellidos;
        }                
        if($request->has('email')){
            $estudiante->email = $request->email; 
        }
        if($request->has('lenguaje')){
            $estudiante->lenguaje = $request->lenguaje;
        }
        $estudiante->save();

        $data = [
            'message' => 'Estudiante actualizado',
            'estudiante' => $estudiante,
            'status' => 200
        ];
        return response()->json($data,200);
    }

    public function eliminar(Request $request, $id)
    {
        $estudiante = Estudiante::find($id);
        if(!$estudiante){
            $data = [
                'message' => 'Estudiante no encontrado',
                'status' => 404
            ];
            return response()->json($data,404);
        }
        $estudiante->delate();

        $data = [
            'message' => 'Estudiante eliminado',
            'status' => 200
        ];
        return response()->json($data,200);
    }
}

