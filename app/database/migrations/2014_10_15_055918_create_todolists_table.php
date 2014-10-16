<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTodolistsTable extends Migration {

	/**
	* Run the migrations.
	*
	* @return void
	*/
	public function up()
	{
		//
		Schema::create('todolists', function($table)
		{
				$table->increments('id');
				$table->bigInteger('order_id')->unsigned();
				$table->bigInteger('orderdetail_id')->unsigned();
				$table->integer('product_id');
				$table->integer('checked');
				$table->timestamps();
				$table->index('order_id');
				$table->foreign('order_id')->references('id')->on('orders');
				$table->foreign('orderdetail_id')->references('id')->on('orderdetails');
		});
	}

	/**
	* Reverse the migrations.
	*
	* @return void
	*/
	public function down()
	{
		//
	}

}
