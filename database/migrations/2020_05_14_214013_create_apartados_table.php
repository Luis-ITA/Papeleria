<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateApartadosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('apartados', function (Blueprint $table) {
            $table->bigIncrements('id_apartado');
            $table->smallInteger('sku_articulo');
            $table->smallInteger('numero_cliente');
            $table->double('abono',4,2);
            $table->string('condiciones',200);
            $table->timestamps();

            $table->foreign('sku_articulo')->references('sku')->on('articulos')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('numero_cliente')->references('id_cliente')->on('clientes')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('apartados');
    }
}
