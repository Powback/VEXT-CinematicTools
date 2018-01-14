class 'CinematicToolsClient'


function CinematicToolsClient:__init()
	print("Initializing CinematicToolsClient")
	self:RegisterVars()
	self:RegisterEvents()
end


function CinematicToolsClient:RegisterVars()
	self.m_SupportedTypes = Set {"Vec2", "Vec3", "Vec4", "Float32", "Boolean", "Int"}
end


function CinematicToolsClient:RegisterEvents()

	self.m_StateAddedEvent = Events:Subscribe('VE:StateAdded', self, self.OnStateAdded)
	self.m_StateRemovedEvent = Events:Subscribe('VE:StateRemoved', self, self.OnStateRemoved)
    self.m_OnLoadedEvent = Events:Subscribe('ExtensionLoaded', self, self.OnLoaded)
    self.m_OnUpdateInputEvent = Events:Subscribe('Client:UpdateInput', self, self.OnUpdateInput)
    self.m_OnWebUIUpdateEvent = Events:Subscribe('CT:UpdateValue', self, self.OnUpdateValue)
end

function CinematicToolsClient:OnLoaded()
		-- Make sure all our VE states are fixed.
	local s_States = VisualEnvironmentManager:GetStates()

	for i, s_State in ipairs(s_States) do
		if s_State.entityName ~= 'EffectEntity' then
			self:FixEnvironmentState(s_State)	
		end
	end
    WebUI:Init()
end


function CinematicToolsClient:OnUpdateInput(p_Delta)
    
    if InputManager:WentKeyDown(InputDeviceKeys.IDK_F1) then
       -- WebUI:ExecuteJS('document.location.reload()')
    end

    if InputManager:WentKeyDown(InputDeviceKeys.IDK_F2) then
        WebUI:BringToFront()
        WebUI:EnableMouse()
        WebUI:Show()
    end

    if InputManager:WentKeyDown(InputDeviceKeys.IDK_F3) then
        --WebUI:BringToFront()
        WebUI:DisableMouse()
        WebUI:Hide()
    end
end




function CinematicToolsClient:OnStateAdded(p_State)
	-- Fix a newly added state (if needed).
	if p_State.entityName ~= 'EffectEntity' then
		self:FixEnvironmentState(p_State)
	end
end
function CinematicToolsClient:OnStateRemoved(p_State)
	-- Fix a newly added state (if needed).
	if p_State.entityName ~= 'EffectEntity' then
		self:FixEnvironmentState(p_State)
	end
end


function CinematicToolsClient:FixEnvironmentState(p_State)
	if(p_State.entityName == "Levels/Web_Loading/Lighting/Web_Loading_VE") then
		return
	end
	print('Fixing visual environment state ' .. p_State.entityName)

	if(p_State.cameraParams ~= nil) then
		local s_cameraParams = p_State.cameraParams
		self:SendState("CameraParams", s_cameraParams, CameraParamsComponentData.typeInfo)
	end
	if(p_State.characterLighting ~= nil) then
		local s_characterLighting = p_State.characterLighting
		self:SendState("CharacterLighting", s_characterLighting, CharacterLightingComponentData.typeInfo)
	end
	if(p_State.colorCorrection ~= nil) then
		local s_colorCorrection = p_State.colorCorrection
		self:SendState("ColorCorrection", s_colorCorrection, ColorCorrectionComponentData.typeInfo)
	end
	if(p_State.dof ~= nil) then
		local s_dof = p_State.dof
		self:SendState("Dof", s_dof, DofComponentData.typeInfo)
	end
	if(p_State.dynamicAO ~= nil) then
		local s_dynamicAO = p_State.dynamicAO
		self:SendState("DynamicAO", s_dynamicAO, DynamicAOComponentData.typeInfo)
	end
	if(p_State.enlighten ~= nil) then
		local s_enlighten = p_State.enlighten
		self:SendState("Enlighten", s_enlighten, EnlightenComponentData.typeInfo)
	end
	if(p_State.filmGrain ~= nil) then
		local s_filmGrain = p_State.filmGrain
		self:SendState("FilmGrain", s_filmGrain, FilmGrainComponentData.typeInfo)
	end
	if(p_State.fog ~= nil) then
		local s_fog = p_State.fog
		
		self:SendState("Fog", s_fog, FogComponentData.typeInfo)
	end
	if(p_State.lensScope ~= nil) then
		local s_lensScope = p_State.lensScope
		self:SendState("LensScope", s_lensScope, LensScopeComponentData.typeInfo)
	end
	if(p_State.outdoorLight ~= nil) then
		local s_outdoorLight = p_State.outdoorLight
		self:SendState("OutdoorLight", s_outdoorLight, OutdoorLightComponentData.typeInfo)
	end
	if(p_State.sky ~= nil) then
		local s_sky = p_State.sky
		self:SendState("Sky", s_sky, SkyComponentData .typeInfo)
	end
	if(p_State.sunFlare ~= nil) then
		local s_sunFlare = p_State.sunFlare
		self:SendState("SunFlare", s_sunFlare, SunFlareComponentData.typeInfo)
	end
	if(p_State.tonemap ~= nil) then
		local s_tonemap = p_State.tonemap
		self:SendState("Tonemap", s_tonemap, TonemapComponentData.typeInfo)
	end
	if(p_State.vignette ~= nil) then
		local s_vignette = p_State.vignette
		self:SendState("Vignette", s_vignette, VignetteComponentData.typeInfo)
	end
	if(p_State.wind ~= nil) then
		local s_wind = p_State.wind
		self:SendState("Wind", s_wind, WindComponentData.typeInfo)
	end

end

function CinematicToolsClient:SendState(p_Class, p_State, p_TypeInfo)
	for _, field in ipairs(p_TypeInfo.fields) do
		if(self.m_SupportedTypes[field.typeInfo.name] == nil) then
			if(field.typeInfo.enum) then
				self:SendEnum(field.typeInfo)
			else
				--print(field.typeInfo.name .. " is not supported yet.")
			end
		end
	    --print(p_TypeInfo.name .. ": " .. field.typeInfo.name .. " | " ..field.name .. " | " .. tostring(p_State[firstToLower(field.name)]))
	    local s_FixedName = field.name
	    	if(field.name == "End") then
	    		s_FixedName = "EndValue"
	    	end
    	local s_WebUIJS = string.format("AddField(\"%s\",\"%s\",\"%s\",\"%s\")", p_Class, s_FixedName, field.typeInfo.name, tostring(p_State[firstToLower(s_FixedName)]))
    	WebUI:ExecuteJS(s_WebUIJS)
	end
end	

--self:SendDefault("vignette","enable","bool", s_Vignette.enable, 0, 360)

function CinematicToolsClient:SendEnum(p_Enum)
	local s_Enum = "";
	for _, field in ipairs(p_Enum.fields) do
		s_Enum = s_Enum .. field.name .. ":"
	end
	WebUI:ExecuteJS(string.format("AddEnum(\"%s\", \"%s\")", p_Enum.name, s_Enum))
end

-- TODO: Fix this. Looks pigdisgusting.
function CinematicToolsClient:OnUpdateValue(p_Contents)
	
	local s_Content = split(p_Contents, ":")
	local s_Class = firstToLower(s_Content[1]) -- ColorCorrection
	local s_Field = firstToLower(s_Content[2]) -- Contrast
	local s_Type = s_Content[3] -- Vec3
	local s_Val = tostring(s_Content[4])

	local s_States = VisualEnvironmentManager:GetStates()

	for i, s_State in ipairs(s_States) do
		if s_State.entityName ~= 'EffectEntity' then
			local m_class = s_State[s_Class] --colorCorrection
			if m_class ~= nil then
				
				
				local s_object = m_class[s_Field] --colorCorrection Contrast
				
				if(s_Type == "Float32") then 
					m_class[s_Field] = tonumber(s_Content[4])
				end
				if(s_Type == "Boolean") then
					if(s_Val == "true") then
						m_class[s_Field] = true
					else
						m_class[s_Field] = false
					end
				end
				if(s_Type == "Vec2") then -- Vec2
					local s_var1 = s_Content[4] --x
					local s_Val1 = tonumber(s_Content[5]) --1
					local s_var2 = s_Content[6] --y
					local s_Val2 = tonumber(s_Content[7]) --1
					m_class[s_Field] = Vec2(s_Val1,s_Val2)
				end		
				if(s_Type == "Vec3") then -- Vec3

					local s_var1 = s_Content[4] --x
					local s_Val1 = tonumber(s_Content[5]) --1
					local s_var2 = s_Content[6] --y
					local s_Val2 = tonumber(s_Content[7]) --1
					local s_var3 = s_Content[8] --z
					local s_Val3 = tonumber(s_Content[9]) --1
					m_class[s_Field] = Vec3(s_Val1,s_Val2,s_Val3)
				end		
				if(s_Type == "Vec4") then -- Vec4

					local s_var1 = s_Content[4] --x
					local s_Val1 = tonumber(s_Content[5]) --1
					local s_var2 = s_Content[6] --y
					local s_Val2 = tonumber(s_Content[7]) --1
					local s_var3 = s_Content[8] --z
					local s_Val3 = tonumber(s_Content[9]) --1
					local s_var4 = s_Content[10] --w
					local s_Val4 = tonumber(s_Content[11]) --1
					m_class[s_Field] = Vec4(s_Val1,s_Val2,s_Val3,s_Val4)
				end	

				
			end
		end
	end
	VisualEnvironmentManager.dirty = true
end
--[[


Utilities


]]

function split(pString, pPattern)
   local Table = {}  -- NOTE: use {n = 0} in Lua-5.0
   local fpat = "(.-)" .. pPattern
   local last_end = 1
   local s, e, cap = pString:find(fpat, 1)
   while s do
	  if s ~= 1 or cap ~= "" then
	 table.insert(Table,cap)
	  end
	  last_end = e+1
	  s, e, cap = pString:find(fpat, last_end)
   end
   if last_end <= #pString then
	  cap = pString:sub(last_end)
	  table.insert(Table, cap)
   end
   return Table
end


function firstToLower(str)
    return (str:gsub("^%L", string.lower))
end

function Set (list)
  local set = {}
  for _, l in ipairs(list) do set[l] = true end
  return set
end

g_CinematicToolsClient = CinematicToolsClient()

--[[
cameraParams // CameraParamsData
characterLighting // CharacterLightingData
colorCorrection // ColorCorrectionData
dof // DofData
dynamicAO // DynamicAOData
enlighten // EnlightenData
filmGrain // FilmGrainData
fog // FogData
lensScope // LensScopeData
outdoorLight // OutdoorLightData 
sky // SkyData 
sunFlare // SunFlareData
tonemap // TonemapData
vignette // VignetteData
wind // WindData

activeEffectPosition // not used
damageEffect // not used
dynamicEnvmap // not used
excluded // not used
motionBlur // not used
overrideVisibility // not used
planarReflection // not used
priority // not used
screenEffect // not used
shaderParamsCount // not used
stateId // not used
visibility // not used
]]