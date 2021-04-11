<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PracticaRealizada extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'practicas_realizadas';
    
    use HasFactory;
}
