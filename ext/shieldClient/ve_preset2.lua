class "ve_preset2"
local table = [[
{
    "Name": "ve_preset2",
    "Priority": "123",
    "ColorCorrection": {
        "Realm": "nil",
        "Enable": "true",
        "Brightness": "(1.000000, 0.000000, 0.000000)",
        "Contrast": "(1.000000, 1.000000, 1.000000)",
        "Saturation": "(0.800000, 0.800000, 0.800000)",
        "Hue": "0.0",
        "ColorGradingEnable": "true",
        "ColorGradingTexture": "sol.sol::detail::unique_usertype<VeniceEXT::Classes::Shared::DataContainer>: 3BECFB60"
    }
}
]]


function ve_preset2:GetPreset()
  return table
end

return ve_preset2