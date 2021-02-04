$actual_link = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$path = parse_url($actual_link, PHP_URL_PATH);

// Get the contents of the JSON file
$strJsonFileContents = file_get_contents("assets/js/staticSets.js");
// Convert to array
$array = json_decode($strJsonFileContents, true);
//var_dump($path); // print array
for ($i = 0; $i< count($array); $i++) {
    if ($array[$i]['to'] == $path) {
     if (array_key_exists('title', $array[$i])) {
      $title = $array[$i]['title'];
     } else {
      $title = $array[$i]['name'];
     }
      $description = $array[$i]['description'];
    }
}
return "<title>$title</title><meta name='description' content='$description'>";
//return "<meta name='description' content='$description'>";
