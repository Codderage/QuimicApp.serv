<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMuestrasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('muestras', function (Blueprint $table) {
            $table->id();
            
            $table->unsignedBigInteger('id_compuesto_muestra');
            $table->foreign('id_compuesto_muestra')
                ->references('id')->on('compuestos_en_muestras');

            $table->unsignedBigInteger('id_condiciones');
            $table->foreign('id_condiciones')
                ->references('id')->on('condiciones');

            $table->string('nombre')->nullable();
            $table->string('comentario')->nullable();
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
        Schema::dropIfExists('muestras');
    }
}
