<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration {

	/**
	* Run the migrations.
	*
	* @return void
	*/
	public function up()
	{
		//
		Schema::create('orders', function($table)
		{
				$table->bigIncrements('id')->unsigned();
				$table->integer('completed');
				$table->integer('paid');
				$table->timestamps();
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
