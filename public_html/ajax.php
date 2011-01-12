<?
header('Content-type: text/javascript');
define ('SECURITY_CHECK', TRUE);
require_once ('../../config/dbConnection.php');

function jokes()
{
$query="";
$page=0;
if(isset($_REQUEST['page']) && is_numeric($_REQUEST['page']) && $_REQUEST['page']>0)  $page=$_REQUEST['page']-1;
$start=$page*40;

if(isset($_REQUEST['get'])&&$_REQUEST['get']=='top') $query=" ORDER BY rate DESC LIMIT $start, 40 ";

else if(isset($_REQUEST['get'])&&$_REQUEST['get']=='new') $query=" ORDER BY ID DESC LIMIT $start, 40";

else $query=" ORDER BY RAND(".ip2long($_SERVER["REMOTE_ADDR"]).")  LIMIT $start, 40 ";

 $result=mysql_query("select * from jokes $query");
 if (!$result)
 {
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

 return array('jokes'=>$jokes,'count'=>$pages);
}

if(isset($_REQUEST['get'])) 
 echo json_encode(jokes());
else if(isset($_REQUEST['vote']) && isset($_REQUEST['id']))
{
 $id=intval($_REQUEST['id']);
 if($id>0 && $id<2760000)
 {
  if($_REQUEST['vote']=='like')
   $result=mysql_query("update jokes set rating=rating+1 where id=$id");
  if($_REQUEST['vote']=='dislike')
   $result=mysql_query("update jokes set rating=rating-1 where id=$id");
 }
 echo 'voted';
}
else
{
 echo 'usage: ajax.php?get=top&page=2 ajax.php?get=new&page=1 ajax.php?get=rand ajax.php?vote=1&id=123 ajax.php?vote=0&id=123 ';
}

mysql_close($conn);
?>