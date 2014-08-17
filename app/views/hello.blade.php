<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="favicon.ico">

    <title>Starter Template for Bootstrap</title>

    <!-- Bootstrap core CSS -->
    <link href="/css/bootstrap.min.css" rel="stylesheet">
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

    <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">小店宝</a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="/create_ingredient">添加食材</a></li>
            <li><a href="/create_product">添加产品</a></li>
            <li><a href="/create_order">点菜</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </div>

    <div class="container">
			<div class="row">
				<div class="col-md-12">
					<h1>购入食材</h1>
				</div>
			</div>
      <form role="form" method="post" action="create_ingredient">
			<div class="row">
				<div class="col-md-9">
					<p>
						选择食材
					</p>
					<p>
						{{Form::text('name', '', array('placeholder'=>'食材名称'))}}
					</p>
					<p>
						生产日期
					</p>
					<p>
						{{Form::text('date_of_production', '', array('placeholder'=>'日期','id'=>'default_datetimepicker'))}}
					</p>
					<p>
						保质期
					</p>
					<p>
						{{Form::text('quality_guarantee_period', '', array('placeholder'=>''))}} 天
					</p>
					<p>
						费用
					</p>
					<p>
						{{Form::text('price', '', array('placeholder'=>''))}} 元
					</p>
					<p>
						入库量
					</p>
					<p>
						{{Form::text('weight', '', array('placeholder'=>''))}} 克
					</p>
          <p>
            <button name="submit">提交</button>
          </p>
				</div>
			</div>
    </form>







    </div><!-- /.container -->


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="/js/react.min.js"></script>
    <script src="/js/jquery.js"></script>
    <script src="/js/bootstrap.min.js"></script>
    <script src="/js/jquery.datetimepicker.js"></script>
    <script charset="utf-8">
      $(function(){

          $('#default_datetimepicker').datetimepicker({

            lang:'ch',
            timepicker:false,
            format:'Y/m/d',
            formatDate:'Y/m/d'
          });


      });

    </script>

    <!--测试flux -->
    <script src="/js/promise-1.0.0.min.js"></script>
    <script src="/js/flux.js"></script>

  </body>
</html>
