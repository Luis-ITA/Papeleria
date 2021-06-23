<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    protected $fillable = ['id_cliente','nombre','apellido','direccion','correo','contraseña'];
}
