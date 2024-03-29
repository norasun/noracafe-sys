<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrderdetailsTable extends Migration {

	/**
	* Run the migrations.
	*
	* @return void
	*/
	public function up()
	{
		//
		Schema::create('orderdetails', function($table)
		{
				$table->bigInteger('order_id')->unsigned();
				$table->bigIncrements('id');
				$table->integer('product_id');
				$table->integer('num');
				$table->integer('checked_num');
				$table->integer('price');
				$table->string('name');
				$table->integer('completed');
				$table->timestamps();
				$table->index('order_id');
				$table->foreign('order_id')->references('id')->on('orders');
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
