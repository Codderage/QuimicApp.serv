<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompuestoenmuestrasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('compuesto_en_muestras', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('compuesto_id');
            $table->foreign('compuesto_id')->references('id')->on('compuestos_quimicos');

            $table->unsignedBigInteger('muestra_id');
            $table->foreign('muestra_id')->references('id')->on('muestras');

            $table->unsignedBigInteger('condiciones_id');
            $table->foreign('condiciones_id')->references('id')->on('condiciones');
            
            $table->string('cantidad');
            $table->integer('minutos');
            $table->integer('altura');

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
        Schema::dropIfExists('compuesto_en_muestras');
    }
}
