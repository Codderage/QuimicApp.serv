<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_profesor', 'id_alumno', 'username', 'password', 'token'
    ];

    // public function alumnos()
    // {
    //     return $this->hasMany('alumnos');
    // }

    // public function profesores()
    // {
    //     return $this->hasMany('profesores');
    // }
}
