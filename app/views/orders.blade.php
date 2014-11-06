@extends('layout')


@section('content')

  <?php
    $orderList = Order::has('Orderdetails')->take(100)->orderBy('created_at', 'desc')->get();
    $orderList = $orderList->load('Orderdetails')->toJson();

    $todoList = Product::has('Orderdetails')->take(1000)->orderBy('created_at')->get();
    $todoList = $todoList->load('Orderdetails');
    //$todoList = $todoList->load('Todolist')->toJson();

  ?>

  <div class="container">

    <div class="row">
      <div class="col-md-12">
        <div class="mb-15 text-center" style="margin-top:40px;">
          <p>
            <strong class="text-xxl">订单</strong>

          </p>
        </div>
      </div>

    </div>
    <div class="row">


      <div class="col-md-8 col-md-offset-2">
        <div class="pb-20 text-m text-center" style="border-bottom:1px solid #e5e5e5;padding-bottom:40px">
          <b>今天</b>
          <a href="#" class="ml-20">本周</a>
          <a href="#" class="ml-20">本月</a>
          <a href="#" class="ml-20">全部</a>
        </div>
        <div id="orderList"></div>
      </div>


    </div>

  </div>
@stop


@section('js')
<script>
  var orderListData = {{$orderList}};
  var todoListData = {{$todoList}};
</script>
<!--script src="/js/order.js"></script-->
<script src="/js/flux/js/bundle.js"></script>

@stop
