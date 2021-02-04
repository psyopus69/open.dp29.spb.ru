<?php
$hosts = $_SERVER['HTTP_ORIGIN'];
header('Access-Control-Allow-Origin: '.$hosts);
header('Access-Control-Allow-Credentials: true');
header('Content-Type: charset=utf-8');
$logins=[];
$logins[0] = ['modxReactAsync', 'hardPsOfAsyncUser'];
$secretSession = "SoHardPassPhrase";
if ($need == 'mainPageContent') {
    $id = 1;
}
if ($need == 'kdcPageContent') {
   $id = 2;
}
if ($need == 'vacanciesPageContent') {
   $id = 22;
}
if ($need == 'contactsPageContent') {
   $id = 24;
}
if ($need == 'kzrPageContent') {
   $id = 25;
}
if ($need == 'rehabilitationPageContent') {
   $id = 26;
}
if ($need == 'contactsOSMPContent') {
   $id = 27;
}
if ($need == 'environmentPageContent') {
   $id = 28;
}
if ($need == 'reviewsPageContent') {
   $id = 29;
}
if ($need == 'postReviewPageContent') {
   $id = 30;
}
if ($need == 'collectivePageContent') {
   $id = 31;
}
if ($need == 'antiCorruptionPageContent') {
   $id = 32;
}
if ($need == 'tradeUnionPageContent') {
   $id = 33;
}
if ($need == 'ped29') {
$id = 4;
}
if ($need == 'ped61') {
$id = 5;
}
if ($need == 'spec') {
$id = 6;
}
if ($need == 'spec29') {
$id = 6;
}
if ($need == 'spec61') {
$id = 6;
}
if ($need == 'proc29') {
$id = 7;
}
if ($need == 'proc61') {
$id = 8;
}
if ($need == 'kzr29') {
$id = 9;
}
if ($need == 'kzr61') {
$id = 10;
}
if($secretJs==$secretSession && $goLog==$logins[0][0] && $goPs==$logins[0][1]) {
  if ($contour == 'test'){
    if ($need == 'mainPageContent') {
      $id = 18;
    }
    if ($need == 'kdcPageContent') {
      $id = 21;
    }
    if ($need == 'vacanciesPageContent') {
      $id = 23;
    }
  }
}
if ($id == '') {
return;
}
$res = $modx->getObject('modResource', $id);
if ($res->get('content') == '') {
    return '<div></div>';
}
return $res->get('content');
//if ($id == '') {
//  echo 'enter pageId';
//  return;
//}
// return $modx->getChunk('futureSchedule');

// $res = $modx->getObject('modResource', $id);
// echo $res->getContent();