<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Apartado extends Model
{
    protected $fillable = ['id_apartado','sku_articulo','numero_cliente','abono','condiciones'];
    public $timestamps = false;
}
