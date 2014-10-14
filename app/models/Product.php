<?php

class Product extends Eloquent{

  public function orderdetails()
  {
        return $this->hasMany('Orderdetail', 'product_id', 'id');
  }

}
