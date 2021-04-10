<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRealizaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('realiza', function (Blueprint $table) {
            $table->id();

            //$table->unsignedBigInteger('grupo_id');
            //$table->foreign('grupo_id')->references('id')->on('grupos');

            $table->unsignedBigInteger('practica_id')->nullable();
            $table->foreign('practica_id')->references('id')->on('practicas');

            $table->unsignedBigInteger('alumno_id')->nullable();
            $table->foreign('alumno_id')->references('id')->on('alumnos');

            $table->unsignedBigInteger('profesor_id')->nullable();
            $table->foreign('profesor_id')->references('id')->on('profesores');

            $table->integer('nota')->nullable();
            $table->string('comentario_alumno')->nullable();
            $table->string('comentario_profesor')->nullable();
            $table->string('fichero')->nullable();
            $table->string('respuesta_alumno')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('realiza');
    }
}
