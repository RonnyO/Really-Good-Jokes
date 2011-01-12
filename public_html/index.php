<?
define ('SECURITY_CHECK', TRUE);
require_once ('../../config/dbConnection.php');
require_once ('../../config/config.php');

function jokes()
{
$query="";
$page=0;
if(isset($_REQUEST['page']) && is_numeric($_REQUEST['page']) && $_REQUEST['page']>0)  $page=$_REQUEST['page']-1;
$start=$page*40;

if(isset($_REQUEST['get'])&&$_REQUEST['get']=='top') {
	$query = " ORDER BY rating DESC LIMIT $start, 40 ";
	$get = "top";
} else {
	$query = " ORDER BY ID DESC LIMIT $start, 40";
	$get = "new";
}

 $result = mysql_query("select * from jokes $query");
 if (!$result) {
    $message  = 'Invalid query: ' . mysql_error() . "\n";
    $message .= 'Whole query: ' . $query;
    die($message);
 }
 else
 {
  $jokes=array(); 
  while ($row = mysql_fetch_assoc($result))
  {
   $jokes[]=$row;
  }
  mysql_free_result($result);
 }
 $result=mysql_query("select count(*) as c from jokes");
 if (!$result) {
    $message  = 'Invalid query: ' . mysql_error() . "\n";
    $message .= 'Whole query: ' . $query;
    die($message);
 }
 else
 {
  $count=0;
  if($row = mysql_fetch_assoc($result))  $count=$row['c']; 
  mysql_free_result($result);
  $pages=ceil($count/40);
 }

 return array('jokes'=>$jokes,'count'=>$pages, currentPage=>$get);
}
$jokes=jokes();

mysql_close($conn);
?>
<!doctype html>
<html dir="rtl">
<head>
      <meta charset="utf-8">
	  <title>שחור משחור</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" /> 
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <link rel="stylesheet" type="text/css" href="app.css?v=<?= V ?>">
</head>
<body class="<?= $jokes['currentPage'] ?>">

<div class="cont">
	<div id="bottomBar">
		<div class="voting">
			<a id="like" href="#" class="vote" rel="nofollow">מצחיק <span class="icon">:-D</span></a>
			<a id="dislike" href="#" class="vote" rel="nofollow">לא מצחיק <span class="icon">:-(</span></a>
			<a id="submit" href="#" rel="nofollow">שלח בדיחה <span class="icon">&lt;[ ]</span></a>
		</div>
		<nav>
			<a id="new" href="?get=new">
				<div class="inner"><span class="icon"></span>בדיחות חדשות</div></a>
			<a id="top" href="?get=top">
				<div class="inner"><span class="icon"></span>הכי טובות</div></a>
			<a id="send" href="#send">
				<div class="inner"><span class="icon"></span>שלח בדיחה</div></a>
			<a id="about" href="#about">
				<div class="inner"><span class="icon"></span>עלינו</div></a>
		</nav>
	</div>
    <div id="viewport">
    <div id="jokes">
        <ul>
			<li class="joke" id="submitForm">
				<div class="inner">
				<h2>שלח בדיחה</h2>
				<form>
					<div class="controls">
						<textarea placeholder="שתהיה מצחיקה, שחורה ושלך." title="שלח בדיחה"></textarea>
					</div>
				</form>
				</div>
			 </li>
			<?foreach($jokes['jokes'] as $joke){?>
			 <li class="joke" id="joke-<?=$joke['id']?>">
				<div class="inner">
					<?=htmlspecialchars($joke['joke'])?>
				</div>
			</li>
			<? } ?>
    </ul>
    </div>
</div>
</div>

 <script>
	var_gaq=[['_setAccount','UA-20534477-1'],['_trackPageview']];
	(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.async=true;
	g.src=('https:'==location.protocol?'https://ssl':'http://www')+'.google-analytics.com/ga.js';
	s.parentNode.insertBefore(g,s)})(document,'script');
</script>
<script src="js/iscroll.js?v=<?= V ?>"></script>
<script src="js/app.js?v=<?= V ?>"></script>
</body>
</html>