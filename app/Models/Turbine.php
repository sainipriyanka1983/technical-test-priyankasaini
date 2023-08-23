<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Turbine extends Model
{
    use HasFactory;

    public function farms()
    {
        return $this->belongsTo(Farm::class);
    }
    public function turbinecomponentrelation()
    {
        return $this->hasMany(TurbineComponentRelation::class);
    }

    public function inspectionDetails()
    {
        return $this->hasMany(InspectionDetail::class);
    }
}
