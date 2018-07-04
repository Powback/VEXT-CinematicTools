class "valleynight"
local table = [[
{
    "Enlighten": {
        "Realm": "4",
        "Enable": false
    },
    "Fog": {
        "Realm": "4",
        "EndValue": "3074.35",
        "TransparencyFadeEnd": "2531.89",
        "TransparencyFadeClamp": "1"
    },
    "SunFlare": {
        "Realm": "4",
        "Element1Enable": true,
        "Element1Size": "0.6:0.6:",
        "Element2Enable": false,
        "Element3Enable": false,
        "Element1RayDistance": "0",
        "Element5Enable": false,
        "Element4Enable": false,
        "OccluderSize": "200.46",
        "Enable": true
    },
    "Tonemap": {
        "Realm": "4",
        "MiddleGray": "0.1",
        "MinExposure": "0.13",
        "MaxExposure": "5",
        "ExposureAdjustTime": "0",
        "BloomScale": "0.01:0.01:0.01:",
        "ChromostereopsisEnable": false,
        "ChromostereopsisScale": "1"
    },
    "Vignette": {
        "Realm": "4",
        "Enable": true,
        "Scale": "1:1:",
        "Color": "0:0.000000:0.000000:"
    },
    "ColorCorrection": {
        "ColorGradingEnable": false,
        "Contrast": "1.1:1.1:1.1:",
        "Saturation": "0.8:0.8:0.8:",
        "Brightness": "0.9:0.9:0.9:"
    },
    "OutdoorLight": {
        "SunColor": "0.02:0.02:0.02:",
        "SkyColor": "0:0:0:",
        "GroundColor": "0:0:0:",
        "Enable": true,
        "SkyLightAngleFactor": "0.02",
        "SunSpecularScale": "0.08",
        "SunShadowHeightScale": "1",
        "TranslucencyPower": "80.15",
        "TranslucencyDistortion": "0.1"
    },
    "Sky": {
        "BrightnessScale": "0.02",
        "SunScale": "8.99",
        "SunSize": "0.02",
        "CloudLayerSunColor": "0.88:0.852000:0.708000:",
        "CloudLayer1Altitude": "100000",
        "CloudLayer1SunLightIntensity": "1.95",
        "CloudLayer1SunLightPower": "26.06",
        "CloudLayer1AmbientLightIntensity": "0.18",
        "CloudLayer2Altitude": "51014.46",
        "CloudLayer2TileFactor": "0.28",
        "CloudLayer2SunLightIntensity": "1.32",
        "CloudLayer2SunLightPower": "84.84",
        "CloudLayer2AmbientLightIntensity": "0.34",
        "CloudLayer2Color": "0.036000:0.087000:0.11:",
        "StaticEnvmapScale": "1.01",
        "CustomEnvmapAmbient": "0"
    },
    "Name": "valleynight",
    "Priority": "1"
}
]]


function valleynight:GetPreset()
  return table
end

return valleynight