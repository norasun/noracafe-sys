<?php

class Order extends Eloquent{

  public function orderdetails()
  {
        return $this->hasMany('Orderdetail');
  }

}
