<?php

class Order extends Eloquent{

  protected $fillable = array('completed', 'paid');

  public function orderdetails()
  {
        return $this->hasMany('Orderdetail');
  }

  public function todolist()
  {
        return $this->hasMany('Todolist');
  }

}
