<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;


    public function alumnos()
    {
        return $this->hasMany('alumnos');
    }

    public function profesores()
    {
        return $this->hasMany('profesores');
    }
}
