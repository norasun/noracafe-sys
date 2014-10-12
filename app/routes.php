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
	$Product->save();


});


//下订单
Route::get('/create_order', function(){

	return View::make('create_order');

});

Route::post('/create_order', function(){

	$order = new Order;
	$order->detail_id = 123;
	$order->save();

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
