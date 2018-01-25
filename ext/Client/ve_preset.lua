class "ve_preset"

local table = [[{
    "Dof": {
        "Enable": {
            "Boolean": "on"
        },
        "FocusDistance": {
            "Float32": 0.29
        },
        "BlurFilterDeviation": {
            "Float32": 0.24
        },
        "NearDistanceScale": {
            "Float32": 2.19
        },
        "Scale": {
            "Float32": 0.64
        }
    },
    "ColorCorrection": {
        "Enable": {
            "Boolean": "on"
        },
        "Brightness": {
            "Vec3": "1:0.78:1:"
        },
        "ColorGradingEnable": {
            "Boolean": "on"
        },
        "Saturation": {
            "Vec3": "0.16:0.54:0.92:"
        },
        "Contrast": {
            "Vec3": "0.19:1:1:"
        }
    },
    "Fog": {
        "FogDistanceMultiplier": {
            "Float32": 0.75
        },
        "FogColor": {
            "Vec3": "1:0.13:0.22:"
        },
        "FogColorCurve": {
            "Vec4": "-8.56:5.2:0.467176:-0.009652:"
        }
    },
    "Vignette": {
        "Scale": {
            "Vec2": "7.89:5.81:"
        },
        "Exponent": {
            "Float32": 6.4
        },
        "Color": {
            "Vec3": "0.15:0.19:0.04:"
        },
        "Opacity": {
            "Float32": 0.16
        }
    },
    "SunFlare": {
        "OccluderSize": {
            "Float32": 73.37
        },
        "Element1RayDistance": {
            "Float32": 0.2
        },
        "Element1SizeOccluderCurve": {
            "Vec4": "0:0.25:0.83:8.16:"
        },
        "Element1AlphaScreenPosCurve": {
            "Vec4": "0:0.34:-0.773885:1.001131:"
        },
        "Element2Enable": {
            "Boolean": "on"
        }
    }}]]
function ve_preset:GetPreset()
  return table
end



local g_ve_preset = ve_preset()
return ve_preset