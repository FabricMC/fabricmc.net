<?php
include '../preamble.php';
$xmlFilename = "mcupdater-fabric-" . $versionString . ".xml";
$xmlTmpPath = $TMP_PATH . "/" . $xmlFilename;

$loaderJson = readLoaderJson();
if ($loaderJson == NULL) {
	die("Could not find loader version!");
}

function createModule($tree, $mtype, $id, $name, $modType, $mavenUrl, $mavenName) {
	$mavenParts = explode(":", $mavenName);
	$filename = $mavenParts[1] . "-" . $mavenParts[2] . ".jar";
	$mavenPath = str_replace('.', '/', $mavenParts[0]) . "/" . $mavenParts[1] . "/" . $mavenParts[2] . "/" . $filename;
	$url = $mavenUrl . $mavenPath;
	$path = "libraries/" . $mavenPath;

	$elem = $tree->createElement($mtype);
	$elem->setAttribute("id", $id);
	$elem->setAttribute("name", $name);
	$urlObj = $tree->createElement("URL", $url);
	$urlObj->setAttribute("priority", "0");
	$modtypeObj = $tree->createElement("ModType", $modType);
	$reqObj = $tree->createElement("Required", "true");
	$pathObj = $tree->createElement("ModPath", $path);
	$elem->appendChild($urlObj);
	$elem->appendChild($modtypeObj);
	$elem->appendChild($reqObj);
	$elem->appendChild($pathObj);
	return $elem;
}

$tree = new DOMDocument('1.0', 'UTF-8');
$serverPack = $tree->createElement("ServerPack");
$serverPack->setAttribute("version", "3.3");
$serverPack->setAttribute("xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
$serverPack->setAttribute("xmlns", "http://www.mcupdater.com");
$serverPack->setAttribute("xsi:schemaLocation", "http://www.mcupdater.com http://files.mcupdater.com/ServerPackv2.xsd");

$server = $tree->createElement("Server");
$server->setAttribute("id", "fabric");
$server->setAttribute("name", "Fabric and dependencies");
$server->setAttribute("version", $mcVersion);
$server->setAttribute("abstract", "true");
$server->setAttribute("revision", $versionString);

$fabricModule = createModule($tree, "Module", "fabric-loader-" . $versionString, "Fabric Loader",
	"Library", "https://maven.fabricmc.net/", "net.fabricmc:fabric-loader:" . $loaderVersion);

if (is_string($loaderJson["mainClass"])) {
	$server->setAttribute("mainClass", $loaderJson["mainClass"]);
} else {
	$server->setAttribute("mainClass", $loaderJson["mainClass"]["client"]);
}
$server->setAttribute("serverClass", "net.fabricmc.loader.launch.server.FabricServerLauncher");

$server->appendChild($fabricModule);
$serverPack->appendChild($server);
$tree->appendChild($serverPack);

if (!empty($yarnVersion)) {
	$yarnSubmodule = createModule($tree, "Submodule", "yarn-" . $yarnVersion, "Yarn Mappings",
		"Library", "https://maven.fabricmc.net/", "net.fabricmc:yarn:" . $yarnVersion);
	$fabricModule->appendChild($yarnSubmodule);
} elseif (!empty($intermediaryVersion)) {
	$intermediarySubmodule = createModule($tree, "Submodule", "intermediary-" . $intermediaryVersion, "Intermediary Mappings",
		"Library", "https://maven.fabricmc.net/", "net.fabricmc:intermediary:" . $intermediaryVersion);
	$fabricModule->appendChild($intermediarySubmodule);
}

// add loader deps
foreach (["common", "client"] as $type) {
	// add tweakers
	// TODO
	//if (isset($loaderJson["launchwrapper"]) && isset($loaderJson["launchwrapper"]["tweakers"])
	//	&& isset($loaderJson["launchwrapper"]["tweakers"][$type])) {

	//	foreach($loaderJson["launchwrapper"]["tweakers"][$type] as $tweaker) {
	//		array_push($patchJson["+tweakers"], $tweaker);
	//	}
	//}

	// add libraries
	if (isset($loaderJson["libraries"]) && isset($loaderJson["libraries"][$type])) {
		foreach($loaderJson["libraries"][$type] as $lib) {
			$lurl = $lib["url"];
			if (!isset($lurl)) {
				$lurl = "https://libraries.minecraft.net/";
			}

			$fabricModule->appendChild(createModule($tree, "Submodule",
				str_replace(':', '-', explode(":", $lib["name"], 2)[1]),
				"Library: " . explode(":", $lib["name"])[1],
				"Library", $lurl, $lib["name"]));
		}
	}
}

returnXmlFile($tree->saveXML(), $xmlFilename);
?>
