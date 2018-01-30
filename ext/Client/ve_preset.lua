class "ve_preset"
--[[    "CharacterLighting": {
        "FirstPersonEnable": true
    },]]
local table = [[{
	"entityName": "CustomPreset",
	"priority": 1,
    "ColorCorrection": {
        "Brightness": "1:0.9:0.31:"
    }
}]]

local priority = 1

function ve_preset:GetPreset()
  return table
end

function ve_preset:GetPriority()
  return priority
end

local g_ve_preset = ve_preset()
return ve_preset