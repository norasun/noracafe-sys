@extends('layout')


@section('content')

  <?php
    $orderList = Order::take(100)->orderBy('created_at', 'desc')->get();
    $orderList = $orderList->load('Orderdetails')->toJson();

    $todoList = Product::has('Orderdetails')->take(1000)->orderBy('created_at')->get();
    $todoList = $todoList->load('Orderdetails')->toJson();

  ?>

  <div class="container">

    <div class="row">
      <div class="col-md-8">
        <div class="mb-15" style="margin-top:20px;">
          <p>
            <strong class="text-xxl mr-20">订单</strong>

          </p>
        </div>
      </div>

    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="pb-20 text-l">
          全部订单
        </div>
        <div id="orderList"></div>
      </div>

      <div class="col-md-6">
        <div class="pb-20 text-l">
          厨房清单
        </div>
        <div id="todoList" ></div>
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
