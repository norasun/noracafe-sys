@extends('layout')


@section('content')

<div class="container">

  <div class="row">
    <div class="col-md-4 col-md-offset-4">
      <div class="mb-15" style="margin-top:20px;">
        <p>
          <strong class="text-xxl mr-20">登录</strong>

        </p>
        <div>
          {{ Confide::makeLoginForm()->render() }}
        </div>
      </div>
    </div>

  </div>
</div>


@stop


@section('js')

<!--script src="/js/order.js"></script-->
<script src="/js/flux/js/bundle.js"></script>

@stop
