@extends('layout')


@section('content')

  <?php
    $orderList = Order::take(100)->orderBy('created_at', 'desc')->get();
    $orderList = $orderList->load('Orderdetails')->toJson();

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
      <div id="orderList" class="col-md-5">

      </div>

    </div>

  </div>
@stop


@section('js')
<script>
  var orderListData = {{$orderList}};
</script>
<!--script src="/js/order.js"></script-->
<script src="/js/flux/js/bundle.js"></script>

@stop
