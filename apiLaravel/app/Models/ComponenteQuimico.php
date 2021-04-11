<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ComponenteQuimico extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'componentes_quimicos';
    
    use HasFactory;
}
