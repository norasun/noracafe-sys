@extends('layout')


@section('content')

  <?php
    $products = Product::all()->toJson();
  ?>

  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h4>点单</h4>
      </div>
    </div>

    <div id="orderApp">

    </div>

@stop


@section('js')
<script>
  var data = {{$products}};
</script>
<script type="text/jsx" src="/js/order.js"></script>

@stop
