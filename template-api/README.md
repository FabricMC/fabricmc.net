# Fabric template generator API

TBD: Host on cloudflare workers?

## POST /v1/generate
Returns a zip file containing the generated mod template zip

### Request:

```json
{
    "minecraftVersion": "1.20.4", // Optional, defaults to the latest stable version
    "modName": "Example Mod", // Optional, defaults to "Example Mod"
    "modId": "example_mod", // Optional, defaults to being generated from the mod name
    "packageName": "com.example", // Optional, defaults to being generated from the mod id
    "options": { // Optional
        "kotlin": false, // All sub keys are optional
        "dataGeneration": false,
        "splitSources": true
    }
}
```

### Response (200):

A zip file containing the generated mod. The `Content-Disposition` header will be set with the intended filename e.g:

`Content-Disposition: attachment; filename="example-mod-1.20.4.zip"`

### Response (400):

An human reasonable error message, e.g "Invalid package name"

```json
{
    "error": 400,
    "message": "A message that can be shown to the user",
    "field": "packageName" // An optional field to indicate what input was incorrect.
}
```

Example field names:
- `minecraftVersion`
- `modName`
- `packageName`
- `options.kotlin`
- `options.dataGeneration`
- `options.splitSources`

You should gracefully handle unknown field names.

## GET /v1/minecraftVersions
Returns a list of the supported Minecraft versions, older snapshots arent supported.

### Response (200):
```json
{
    "versions": [
        "24w13a": {
            "stable": false
        },
        "1.20.4": {
            "stable": true
        },
        "1.20.3": {
            "stable": true
        },
        // And others
    ]
}
```