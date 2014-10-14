<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="favicon.ico">

    <title>乐店</title>

    <!-- Bootstrap core CSS -->
    <link href="/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/css/font-awesome.min.css">
    <link href="/css/jquery.datetimepicker.css" rel="stylesheet">
    <!-- Custom styles for this template -->
    <link href="/css/main.css" rel="stylesheet">

    <!-- Just for debugging purposes. Don't actually copy these 2 lines! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->
    <script src="/js/ie-emulation-modes-warning.js"></script>

    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="/js/ie10-viewport-bug-workaround.js"></script>

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>

    <nav class="navbar navbar-fixed-top headroom" role="navigation" id="headroom">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="logo" href="#"></a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="/">首页</a></li>

            <li><a href="/create_ingredient">采购</a></li>
            <li><a href="/create_product">商品</a></li>
            <li><a href="/orders">订单</a></li>
            <li>
              <a href="/create_order" type="button" class="btn btn-default nav-btn" style="margin-top:10px;margin-left:30px;"><i class="fa fa-plus"></i> 点单</a>
            </li>


          </ul>

          <ul class="nav navbar-nav pull-right">

            <li><a href="/" > ... </a></li>


          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>



    @yield('content')




    </div><!-- /.container -->
    <!-- 基础js -->
    <script src="/js/jquery.js"></script>
    <script src="/js/headroom.min.js"></script>
    <script src="/js/bootstrap.min.js"></script>
    <!-- / 基础js -->


    <script src="/js/jquery.datetimepicker.js"></script>
    <script charset="utf-8">
      $(function(){


          //初始化header，自动显示或消失
          var myElement = document.querySelector("nav");
          var headroom  = new Headroom(myElement,{
            offset: 50
          });
          headroom.init();
          //初始化header，结束




          $('#default_datetimepicker').datetimepicker({
            lang:'ch',
            timepicker:false,
            format:'Y/m/d',
            formatDate:'Y/m/d'
          });


      });

    </script>

    @yield('js')

  </body>
</html>
