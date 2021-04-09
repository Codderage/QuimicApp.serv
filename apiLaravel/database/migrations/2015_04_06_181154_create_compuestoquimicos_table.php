<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompuestoquimicosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('compuestoquimicos', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('formula')->nullable();
            $table->string('descripcion');
            $table->string('tipo');
            $table->string('estructura')->nullable();
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
        Schema::dropIfExists('compuestoquimicos');
    }
}
