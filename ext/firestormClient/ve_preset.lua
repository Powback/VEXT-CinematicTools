class "ve_preset"
local table = [[
{
    "Name": "ve_preset",
    "Priority": "1",
    "ColorCorrection": {
        "Realm": "nil",
        "Enable": "true",
        "Brightness": "(0.000000, 1.000000, 1.000000)",
        "Contrast": "(1.000000, 1.000000, 1.000000)",
        "Saturation": "(0.800000, 0.800000, 0.800000)",
        "Hue": "0.0",
        "ColorGradingEnable": "true",
        "ColorGradingTexture": "sol.sol::detail::unique_usertype<VeniceEXT::Classes::Shared::DataContainer>: 3BECFB60"
    }
}
]]


function ve_preset:GetPreset()
  return table
end

return ve_preset