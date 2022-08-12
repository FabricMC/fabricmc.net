<?php
$TMP_PATH = "/tmp/fabric-cache";

if (!is_dir($TMP_PATH)) {
	mkdir($TMP_PATH, 0775, false);
}

$yarnVersion = filter_input(INPUT_GET, "yarn", FILTER_SANITIZE_STRING);
$intermediaryVersion = filter_input(INPUT_GET, "intermediary", FILTER_SANITIZE_STRING);
$loaderVersion = filter_input(INPUT_GET, "loader", FILTER_SANITIZE_STRING);
$formatArg = filter_input(INPUT_GET, "format", FILTER_SANITIZE_STRING);

if (empty($intermediaryVersion) || !preg_match("/^[+0-9a-zA-Z .-]+$/", $intermediaryVersion)) {
	if (empty($yarnVersion) || !preg_match("/^[+0-9a-zA-Z .-]+$/", $yarnVersion)) {
		die("Invalid mappings version!");
	}
	if (strrpos($yarnVersion, "+") === FALSE) {
		$intermediaryVersion = substr($yarnVersion, 0, strrpos($yarnVersion, "."));
	} else {
		$intermediaryVersion = substr($yarnVersion, 0, strrpos($yarnVersion, "+"));
	}
} else {
	$yarnVersion = "";
}

if (empty($loaderVersion) || !preg_match("/^[+0-9a-z.-]+$/", $loaderVersion)) {
	die("Invalid loader version!");
}

// set filenames
$loaderVersionSplit = explode("-", $loaderVersion);
$loaderJsonPath = $TMP_PATH . "/fabric-loader-" . $loaderVersion . ".json";
$versionString = "";
if (!empty($yarnVersion)) {
	$versionString = $yarnVersion . "_yarn-" . $loaderVersionSplit[count($loaderVersionSplit) - 1];
} else {
	$versionString = $intermediaryVersion . "-" . $loaderVersionSplit[count($loaderVersionSplit) - 1];
}
$versionFilenameString = str_replace(' ', '_', strtolower($versionString));

$mcVersion = $intermediaryVersion;

function returnZipFile($zipPath, $zipFilename) {
	header($_SERVER["SERVER_PROTOCOL"] . " 200 OK");
	header("Content-Type: application/zip");
	header("Content-Transfer-Encoding: binary");
	header("Content-Length: " . filesize($zipPath));
	header("Cache-Control: public");
	header("Content-Disposition: attachment; filename=" . $zipFilename);
	readfile($zipPath);
	die();
}

function returnJsonFile($text, $filename) {
	header("Content-Type: application/json");
	header("Cache-Control: public");
	header("Content-Disposition: attachment; filename=" . $filename);
	echo($text);
	die();
}

function returnXmlFile($text, $filename) {
	header("Content-Type: text/xml");
	header("Cache-Control: public");
//	header("Content-Disposition: attachment; filename=" . $filename);
	echo($text);
	die();
}

function readLoaderJson() {
	global $loaderVersion, $loaderJsonPath;

	$jsonText = "";
	if (!is_file($loaderJsonPath)) {
		$loaderVersionEnc = urlencode($loaderVersion);
		$loaderJsonUrl = "https://maven.fabricmc.net/net/fabricmc/fabric-loader/" . $loaderVersionEnc . "/fabric-loader-" . $loaderVersionEnc . ".json";
		$jsonText = file_get_contents($loaderJsonUrl);
		if (empty($jsonText)) {
			return NULL;
		}
		file_put_contents($loaderJsonPath, $jsonText);
	} else {
		$jsonText = file_get_contents($loaderJsonPath);
	}
	return json_decode($jsonText, true);
}
?>
