<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration {

	/**
	* Run the migrations.
	*
	* @return void
	*/
	public function up()
	{
		Schema::create('products', function($table)
		{
				$table->increments('id');
				$table->string('name'); //食材名称
				$table->float('price'); //费用
				$table->string('number'); //默认为0
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
