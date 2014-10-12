<?php

class createOrderController extends BaseController {


    public function store() {


			$order = new Order;
      $order->product_id = 123;
      $order->save();



	}


	public function makeImageUrl($num){
		return $num;
	}

}
