<?php

class Orderdetail extends Eloquent{

   protected $fillable = array('order_id', 'product_id', 'num', 'checked_num', 'price', 'name');

   public function order()
   {
        return $this->belongsTo('Order');
   }

   public function product()
   {
        return $this->belongsTo('Product', 'id', 'product_id');
   }

   public function todolist()
   {
         return $this->hasMany('Todolist', 'orderdetail_id');
   }

}
