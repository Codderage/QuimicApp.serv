<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsuariosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('id_profesor')->nullable();
            $table->foreign('id_profesor')
                ->references('id')->on('profesores')
                ->onDelete('cascade');

            $table->unsignedBigInteger('id_alumno')->nullable();
            $table->foreign('id_alumno')
                ->references('id')->on('profesores')
                ->onDelete('cascade');

            $table->string('username');
            $table->string('password');
            $table->string('token')->nullable();
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
        Schema::dropIfExists('usuarios');
    }
}
