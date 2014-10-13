<?php

class Orderdetail extends Eloquent{

   protected $fillable = array('order_id', 'product_id', 'num', 'price', 'name');

   public function order()
    {
        return $this->belongsTo('Order');
    }

}
