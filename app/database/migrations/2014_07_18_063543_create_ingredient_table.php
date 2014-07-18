<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateIngredientTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('ingredients', function($table)
    {
        $table->increments('id');
        $table->string('name'); //食材名称
				$table->date('date_of_production'); //生产日期
				$table->integer('quality_guarantee_period'); //保质期（天）
				$table->integer('weight'); //重量
				$table->float('price'); //费用
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
