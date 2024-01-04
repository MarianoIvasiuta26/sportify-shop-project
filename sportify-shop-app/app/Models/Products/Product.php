<?php

namespace App\Models\Products;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'category_id',
        'name',
        'description',
        'price',
        'discount',
        'stock',
        'picture',
        'state',
    ];

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function getDiscountAttribute($value){
        return $value / 100;
    }

    public function setDiscountAttribute($value){
        $this->attributes['discount'] = $value * 100;
    }

    public function getPriceAttribute($value){
        return $value;
    }

    public function setPriceAttribute($value){
        $this->attributes['price'] = $value;
    }

}
