
<?php
$ad=$_POST["ad"];
$tcode=$_POST["tcode"];

if($ad=="example"&&$tcode=="123456"){
	echo json_encode(array('login'=>1));
}
else {
	
	echo json_encode(array('login'=>0));
}
