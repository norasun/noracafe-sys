<?php

class Todolist extends Eloquent{

  protected $fillable = array('order_id', 'product_id', 'orderdetail_id', 'checked');

   public function order()
   {
        return $this->belongsTo('Order', 'id', 'order_id');
   }

   public function product()
   {
        return $this->belongsTo('Product', 'id', 'product_id');
   }

   public function orderdetail()
   {
        return $this->belongsTo('Orderdetail', 'id', 'orderdetail_id');
   }


}
