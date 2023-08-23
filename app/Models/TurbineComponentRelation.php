<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TurbineComponentRelation extends Model
{
    use HasFactory;
    public function inspectiondetail()
    {
        return $this->hasMany(InspectionDetail::class);
    }
}
