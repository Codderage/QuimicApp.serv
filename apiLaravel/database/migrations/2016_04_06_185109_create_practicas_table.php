<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePracticasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('practicas', function (Blueprint $table) {
            $table->id();
            #$table->timestamps();
            $table->date('fecha_inicio');
            $table->date('fecha_fin');
            $table->string('respuesta');
            $table->string('enunciado')->nullable();
            
            $table->unsignedBigInteger('muestra_id');
            $table->foreign('muestra_id')->references('id')->on('muestras');
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('practicas');
    }
}
