class "ve_preset2"
--[[    "CharacterLighting": {
        "FirstPersonEnable": true
    },]]
local table = [[{
	"entityName": "CustomPreset2",
	"priority": 2,
    "ColorCorrection": {
        "Brightness": "0:0.9:0.31:"
    }
}]]

local priority = 1

function ve_preset2:GetPreset()
  return table
end

function ve_preset2:GetPriority()
  return priority
end

local g_ve_preset2 = ve_preset()
return ve_preset2