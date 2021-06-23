<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Articulo extends Model
{
    protected $fillable = ['sku','producto','marca','precio','descripcion'];
    protected $table = "articulos";
}
