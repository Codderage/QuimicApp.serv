<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePracticascreadasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('practicas_creadas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_practica');
            $table->foreign('id_practica')
                ->references('id')->on('practicas');

            $table->unsignedBigInteger('id_profesor');
            $table->foreign('id_profesor')
                ->references('id')->on('profesores');

            $table->string('comentarios')->nullable();
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
        Schema::dropIfExists('practicas_creadas');
    }
}
