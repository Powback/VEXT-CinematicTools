class "ve_preset"
--[[    "CharacterLighting": {
        "FirstPersonEnable": true
    },]]
local table = [[{
	"Name": "CustomPreset",
	"Priority": 1,
    "ColorCorrection": {
        "Brightness": "1:0.9:0.31:"
    }
}]]

local priority = 1

function ve_preset:GetPreset()
  return table
end

local g_ve_preset = ve_preset()
return ve_preset