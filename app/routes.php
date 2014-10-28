<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/


//登录
Route::get('/login', function(){
	return View::make('login');
});

Route::get('/', function()
{
	return View::make('hello');
});

//创建食材

Route::get('/create_ingredient', function(){

	return View::make('hello');

});


Route::post('/create_ingredient', function(){

	$Ingredient = new Ingredient;
	$Ingredient->name = Input::get('name');
	$Ingredient->date_of_production = Input::get('date_of_production');
	$Ingredient->quality_guarantee_period = Input::get('quality_guarantee_period');
	$Ingredient->weight = Input::get('weight');
	$Ingredient->price = Input::get('price');
	$Ingredient->save();


});


//创建产品

Route::get('/create_product', function(){

	return View::make('product');

});


Route::post('/create_product', function(){

	$Product = new Product;
	$Product->name = Input::get('name');
	$Product->price = Input::get('price');
	$Product->number = 0;
	$Product->save();


});

Route::get('/orders', function()
{
	return View::make('orders');
});

Route::post('/set_orderdetail', function(){

	$orderdetail = Orderdetail::find(Input::get('todoId'));
	$orderdetail->checked_num = Input::get('checkedNum');
	$orderdetail->save();


});

//下订单
Route::get('/create_order', function(){

	return View::make('create_order');

});
//修改订单
Route::get('/update_order/{id}', function($id){

	return View::make('create_order')->with('order_id', $id);

});

Route::post('/create_order', function(){

	$order = new Order;
	$order->completed = 0;
	$order->paid = 0;
	$order->save();

	$order_id = $order->id;
	$order_details = Input::get('hiddendata');
	$order_details = json_decode($order_details, true);
	//print_r($order_details);

	$thisOrder = Order::find($order_id);

	$order_list = Array();

	foreach($order_details as $v){

		$order_list[] = new Orderdetail(array(
			'order_id' => $order_id,
			'product_id' => $v['productID'],
			'num' => $v['productQuantity'],
			'checked_num' => 0,
			'completed' => 0,
			'price' => $v['productPrice'],
			'name' => $v['productName']
		));

	}
	// print_r($todo_list);


	$thisOrder->Orderdetails()->saveMany($order_list);
	// $thisOrder->Todolist()->saveMany($todo_list);

	 return Redirect::to('/orders');





});
//

// Confide routes
Route::get('users/create', 'UsersController@create');
Route::post('users', 'UsersController@store');
Route::get('users/login', 'UsersController@login');
Route::post('users/login', 'UsersController@doLogin');
Route::get('users/confirm/{code}', 'UsersController@confirm');
Route::get('users/forgot_password', 'UsersController@forgotPassword');
Route::post('users/forgot_password', 'UsersController@doForgotPassword');
Route::get('users/reset_password/{token}', 'UsersController@resetPassword');
Route::post('users/reset_password', 'UsersController@doResetPassword');
Route::get('users/logout', 'UsersController@logout');
