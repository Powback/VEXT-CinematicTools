class 'CinematicToolsClient'
json = require "json"
ve_preset = require "ve_preset"
ve_preset2 = require "ve_preset2"
ve_base = require "ve_base"

function CinematicToolsClient:__init()
	print("Initializing CinematicToolsClient")
	self:RegisterVars()
	self:RegisterEvents()
end


function CinematicToolsClient:RegisterVars()
	self.m_SupportedTypes = {"Vec2", "Vec3", "Vec4", "Float32", "Boolean", "Int"}
	self.m_SupportedClasses = {
		"CameraParams",
		"CharacterLighting",
		"ColorCorrection",
		"DamageEffect",
		"Dof",
		"DynamicAO",
		"DynamicEnvmap",
		"Enlighten",
		"FilmGrain",
		"Fog",
		"LensScope",
		"MotionBlur",
		"OutdoorLight",
		"PlanarReflection",
		"ScreenEffect",
		"Sky",
		"SunFlare",
		"Tonemap",
		"Vignette",
		"Wind"}
	self.m_TestPreset1 = json.decode(ve_preset:GetPreset())
	self.m_TestPreset2 = json.decode(ve_preset2:GetPreset())
	self.m_base = json.decode(ve_base:GetPreset())
	self.m_Presets = {}
	self.m_ActivePresets = {}
	self.m_RemovedPresets = {}
	self.m_Original = {}
	self.m_LerpUpdate = {}
	self.m_LerpStart = {}
end


function CinematicToolsClient:RegisterEvents()

	self.m_StateAddedEvent = Events:Subscribe('VE:StateAdded', self, self.OnStateAdded)
	self.m_StateRemovedEvent = Events:Subscribe('VE:StateRemoved', self, self.OnStateRemoved)
	self.m_OnLoadedEvent = Events:Subscribe('ExtensionLoaded', self, self.OnLoaded)
	self.m_OnUpdateInputEvent = Events:Subscribe('Client:UpdateInput', self, self.OnUpdateInput)
	self.m_OnWebUIUpdateEvent = Events:Subscribe('CT:UpdateValue', self, self.OnUpdateValue)
	self.m_OnWebUIUpdateEvent = Events:Subscribe('CT:SetKeyboard', self, self.OnSetKeyboard)
end

function CinematicToolsClient:OnSetKeyboard(p_Value)
	if(p_Value == "true") then
		WebUI:EnableKeyboard()
	end
	if(p_Value == "false") then
		WebUI:DisableKeyboard()
	end
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


function CinematicToolsClient:OnUpdateInput(p_Delta, p_SimulationDelta)

	if(self.m_LerpUpdate['time'] ~= nil ) then
		
		local TimeSinceStarted = SharedUtils:GetTimeMS() - self.m_LerpUpdate['startTime']
		local PercentageComplete = TimeSinceStarted / self.m_LerpUpdate['time']
		self:UpdateLerp(PercentageComplete)
		if(PercentageComplete >= 1) then
			self.m_LerpUpdate = {}
			self.m_LerpStart = {}
			return
		end
	end


	if InputManager:WentKeyDown(InputDeviceKeys.IDK_F1) then
		-- WebUI:ExecuteJS('document.location.reload()')
		self:LoadPreset(self.m_TestPreset1, 1)
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

	if InputManager:WentKeyDown(InputDeviceKeys.IDK_F4) then
		-- WebUI:ExecuteJS('document.location.reload()')
		self:LoadPreset(self.m_base, 1)
	end

	if InputManager:WentKeyDown(InputDeviceKeys.IDK_F5) then
		-- WebUI:ExecuteJS('document.location.reload()')
		self:RemovePreset(self.m_TestPreset1['Name'], 1)
	end
		if InputManager:WentKeyDown(InputDeviceKeys.IDK_F6) then
		-- WebUI:ExecuteJS('document.location.reload()')
		self:RemovePreset(self.m_base['Name'])
	end

end


function CinematicToolsClient:LoadPreset(p_Preset, p_LerpTime)
	print("Adding " .. p_Preset['Name'] )
	self.m_LerpStart = {}
	if(p_LerpTime ~= nil) then
		self.m_LerpUpdate['time'] = p_LerpTime * 1000
		self.m_LerpUpdate['startTime'] = SharedUtils:GetTimeMS()
		self.m_LerpUpdate['name'] = p_Preset['Name']
	end
	if(self.m_Presets[p_Preset['Name']] == nil) then
		self.m_Presets[p_Preset['Name']] = p_Preset
	end

	self.m_ActivePresets[p_Preset['Name']] = p_Preset
	if(self.m_RemovedPresets[p_Preset['Name']] ~= nil) then
		self.m_RemovedPresets[p_Preset['Name']] = nil
	end
	self:LoadPresets(p_LerpTime)
end

function CinematicToolsClient:RemovePreset(p_PresetName, p_LerpTime)
	print("Removing " .. p_PresetName )
	self.m_LerpStart = {}

	if(p_LerpTime ~= nil) then
		self.m_LerpUpdate['time'] = p_LerpTime * 1000
		self.m_LerpUpdate['startTime'] = SharedUtils:GetTimeMS()
		self.m_LerpUpdate['name'] = p_PresetName
	end

	self.m_ActivePresets[p_PresetName] = nil
	self.m_RemovedPresets[p_PresetName] = self.m_Presets[p_PresetName]
	self:LoadPresets(p_LerpTime)
end


function CinematicToolsClient:UpdateLerp(p_Delta)
	for l_Class in pairs(self.m_LerpUpdate) do
		if(l_Class ~= "time" and l_Class ~= "startTime" and l_Class ~= "name") then
			for l_Field in pairs(self.m_LerpUpdate[l_Class]) do
				self:OnUpdateValue(self.m_LerpUpdate[l_Class][l_Field], p_Delta)
			end
		end
	end
end	

function CinematicToolsClient:LoadPresets(p_LerpTime)

	print("Loading presets....")
	local s_States = VisualEnvironmentManager:GetStates()


	for _,s_Class in pairs(self.m_SupportedClasses) do
		local typeInfo = _G[s_Class.."ComponentData"].typeInfo
		s_Class_lower = firstToLower(s_Class)
		for _, l_Field in ipairs(typeInfo.fields) do
			local s_Field = l_Field.name
			if(s_Field == "End") then
				s_Field = "EndValue"
			end
			local s_Type = l_Field.typeInfo.name
			local s_Value = nil

			local s_Priority = 0
			for i, s_Preset in pairs(self.m_ActivePresets) do
				if( s_Preset['Priority'] ~= nil and
					tonumber(s_Preset['Priority']) > s_Priority and
					s_Preset[s_Class] ~= nil) and
					s_Preset[s_Class][s_Field] ~= nil then
						s_Value = s_Preset[s_Class][s_Field]
						s_Priority = tonumber(s_Preset['Priority'])
				end 
			end
			if s_Value ~= nil then
				local s_Update = string.format("%s:%s:%s:%s", s_Class, s_Field, s_Type, tostring(s_Value))
				
				--We're lerping, so we don't update the value right now.
				if(p_LerpTime ~= nil) then
					if self.m_ActivePresets[self.m_LerpUpdate['name']] ~= nil and self.m_ActivePresets[self.m_LerpUpdate['name']][s_Class] ~= nil and self.m_ActivePresets[self.m_LerpUpdate['name']][s_Class][s_Field] ~= nil then
						if self.m_LerpUpdate[s_Class] == nil then
							self.m_LerpUpdate[s_Class] = {}
						end
						self.m_LerpUpdate[s_Class][s_Field] = s_Update
					end
				else

					self:OnUpdateValue(s_Update)
					self:SendValue(s_Class, s_Field, s_Type, tostring(s_Value))
				end
			else
				if(self.m_Original[s_Class] ~= nil and self.m_Original[s_Class][s_Field] ~= nil) then
					local s_Original = string.format("%s:%s:%s:%s", s_Class, s_Field, s_Type, tostring(self.m_Original[s_Class][s_Field]))
				

					--We're lerping, so we don't update the value right now.
					if(p_LerpTime ~= nil) then
						if self.m_RemovedPresets[self.m_LerpUpdate['name']] ~= nil and self.m_RemovedPresets[self.m_LerpUpdate['name']][s_Class] ~= nil and self.m_RemovedPresets[self.m_LerpUpdate['name']][s_Class][s_Field] ~= nil then

							if self.m_LerpUpdate[s_Class] == nil then
								self.m_LerpUpdate[s_Class] = {}
							end
							self.m_LerpUpdate[s_Class][s_Field] = s_Original
						end
					else
						self:OnUpdateValue(s_Original)
						self:SendValue(s_Class, s_Field, s_Type, tostring(self.m_Original[s_Class][s_Field]))
					end
				end
			end
		end
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
	for _,s_Class in pairs(self.m_SupportedClasses) do
		s_Class_lower = firstToLower(s_Class)

		if p_State[s_Class_lower] == nil then
			-- Causes a crash as of 30.01.2018
			--local s_Data = self:CreateData(s_Class)
			--p_State[s_Class_lower] = s_Data
		end

		local s_State = p_State[s_Class_lower]

		if(_G[s_Class.."ComponentData"] == nil) then
			print(tostring(s_Class) .. " | " .. tostring(s_State))
			return
		end

		local typeInfo = _G[s_Class.."ComponentData"].typeInfo


		--placeholder while the creation thing is fucked
		if(s_State ~= nil) then
			self:SendState(s_Class, s_State , _G[s_Class.."ComponentData"].typeInfo)	
		end
	end
end

function CinematicToolsClient:SendState(p_Class, p_State, p_TypeInfo)
	for _, field in ipairs(p_TypeInfo.fields) do
		if(self.m_SupportedTypes[field.typeInfo.name] == nil) then
			if(field.typeInfo.enum) then
				self:SendEnum(field.typeInfo, p_State[field])
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
    	--print("Out: " .. s_WebUIJS)

		if(self.m_Original[p_Class] == nil) then
			self.m_Original[p_Class] = {}
			self.m_Original[p_Class]['data'] = p_State -- Set so the state isn't collected by the garbagecollector
		end
		if(self.m_Original[p_Class][s_FixedName] == nil ) then
			self.m_Original[p_Class][s_FixedName] = tostring(p_State[firstToLower(s_FixedName)])
		end
		

		WebUI:ExecuteJS(s_WebUIJS)
	end
end

function CinematicToolsClient:SendValue(p_Class, p_Field, p_Type, p_Value)

	
  	local s_WebUIJS = string.format("AddField(\"%s\",\"%s\",\"%s\",\"%s\")", p_Class, p_Field, p_Type, p_Value)
	--print("Out: " .. s_WebUIJS)
	WebUI:ExecuteJS(s_WebUIJS)
	
end

--self:SendDefault("vignette","enable","bool", s_Vignette.enable, 0, 360)
function CinematicToolsClient:CreateData(p_DataName)
	print("Creating " .. p_DataName .. "Data")

	-- We're crashing here.
	local s_Data = _G[p_DataName .. "Data"]()

	print("Created " .. p_DataName)

	for _, field in ipairs(_G[p_DataName .. "ComponentData"].typeInfo.fields) do
		local s_FixedName = field.name
        if(field.name == "End") then
          s_FixedName = "EndValue"
        end

        local s_Value = nil
        local s_Type = field.typeInfo.name


        
        if s_Type == "Float32" or s_Type == "Int" then
        	s_Value = 0;
        elseif s_Type == "Vec2" then
        	s_Value = Vec2(0,0)
    	elseif s_Type == "Vec3" then
    		s_Value = Vec3(0,0,0)
		elseif s_Type == "Vec4" then
			s_Value = Vec4(0,0,0,0)
		elseif s_Type == "Boolean" then
			s_Value = false
		elseif s_Type == "Realm" or 
		s_Type == "TextureAsset" then
			s_Value = nil
		else
			print("Unsupported type: " .. s_Type)
			s_Value = 0
		end

		if(s_Value ~= nil) then
	      	s_Data[firstToLower(s_FixedName)] = s_Value

	    end
	end
	return s_Data
end

function CinematicToolsClient:SendEnum(p_Enum)
	local s_Enum = ""
	for _, field in ipairs(p_Enum.fields) do
		s_Enum = s_Enum .. field.name .. ":"
	end
	local s_EnumJS = string.format("AddEnum(\"%s\", \"%s\")", p_Enum.name, s_Enum)

	self.m_SupportedTypes[p_Enum.name] = p_Enum

	--print("Out: " .. s_EnumJS)

	WebUI:ExecuteJS(s_EnumJS)
end

-- TODO: Fix this. Looks pigdisgusting.
function CinematicToolsClient:OnUpdateValue(p_Contents, p_LerpTime)
	-- No lerp time specified, making changes instantly.
	if(p_LerpTime == nil) then
		p_LerpTime = 1
	end

	local s_fixedContents = string.gsub(p_Contents, "%(", "")
	local s_fixedContents = string.gsub(s_fixedContents, "%)", "")
	local s_fixedContents = string.gsub(s_fixedContents, ", ", ":")
		--print("In : " .. s_fixedContents)

	local s_Content = split(s_fixedContents, ":")
	local s_Class = firstToLower(s_Content[1]) -- ColorCorrection
	local s_Field = firstToLower(s_Content[2]) -- Contrast
	local s_Type = s_Content[3] -- Vec3
	local s_Val = tostring(s_Content[4])


	local s_States = VisualEnvironmentManager:GetStates()

	for i, s_State in ipairs(s_States) do

		if s_State.entityName ~= 'EffectEntity' then
			local m_Class = s_State[s_Class] --colorCorrection
			if m_Class ~= nil then
				local s_object = m_Class[s_Field] --colorCorrection Contrast

				if(self.m_LerpStart[s_Class] == nil) then
					self.m_LerpStart[s_Class] = {}
				end
				
				if(s_Type == "Boolean") then
					if(s_Val == "true") then
						m_Class[s_Field] = true
					else
						m_Class[s_Field] = false
					end
				end
				if(s_Type == "Float32") then
					if(self.m_LerpStart[s_Class][s_Field] == nil) then
						self.m_LerpStart[s_Class][s_Field] = tonumber(m_Class[s_Field])
					end
					m_Class[s_Field] = lerp(self.m_LerpStart[s_Class][s_Field], tonumber(s_Content[4]), p_LerpTime)
				end
				if(s_Type == "Vec2") then -- Vec2
					if(self.m_LerpStart[s_Class][s_Field] == nil) then
						self.m_LerpStart[s_Class][s_Field] = Vec2(m_Class[s_Field].x, m_Class[s_Field].y)
					end
					local s_Val1 = lerp(self.m_LerpStart[s_Class][s_Field].x, tonumber(s_Content[4]), p_LerpTime)  --x
					local s_Val2 = lerp(self.m_LerpStart[s_Class][s_Field].y, tonumber(s_Content[5]), p_LerpTime) --y
					m_Class[s_Field] = Vec2(s_Val1,s_Val2)
				end
				if(s_Type == "Vec3") then -- Vec3
					if(self.m_LerpStart[s_Class][s_Field] == nil) then
						self.m_LerpStart[s_Class][s_Field] = Vec3(m_Class[s_Field].x, m_Class[s_Field].y,m_Class[s_Field].z)
					end
					local s_Val1 = lerp(self.m_LerpStart[s_Class][s_Field].x, tonumber(s_Content[4]), p_LerpTime) --x
					local s_Val2 = lerp(self.m_LerpStart[s_Class][s_Field].y, tonumber(s_Content[5]), p_LerpTime) --y
					local s_Val3 = lerp(self.m_LerpStart[s_Class][s_Field].z, tonumber(s_Content[6]), p_LerpTime) --x
					m_Class[s_Field] = Vec3(s_Val1,s_Val2,s_Val3)
				end
				if(s_Type == "Vec4") then -- Vec4
					if(self.m_LerpStart[s_Class][s_Field] == nil) then
						self.m_LerpStart[s_Class][s_Field] = Vec4(m_Class[s_Field].x, m_Class[s_Field].y,m_Class[s_Field].z,m_Class[s_Field].w)
					end
					local s_Val1 = tonumber(lerp(self.m_LerpStart[s_Class][s_Field].x, tonumber(s_Content[4]), p_LerpTime)) --x
					local s_Val2 = tonumber(lerp(self.m_LerpStart[s_Class][s_Field].y, tonumber(s_Content[5]), p_LerpTime)) --y
					local s_Val3 = tonumber(lerp(self.m_LerpStart[s_Class][s_Field].z, tonumber(s_Content[6]), p_LerpTime)) --x
					local s_Val4 = tonumber(lerp(self.m_LerpStart[s_Class][s_Field].w, tonumber(s_Content[7]), p_LerpTime)) --w
					m_Class[s_Field] = Vec4(s_Val1,s_Val2,s_Val3,s_Val4)
				end
				if(s_Type == "Enum") then -- Enum

					local s_Val = tonumber(s_Content[4])  -- Value
					--print(s_Val)
					m_Class[s_Field] = s_Val
				end

			end
		end
	end
	VisualEnvironmentManager.dirty = true
end
--[[


Utilities


]]

function table.shallow_copy(t)
  local t2 = {}
  for k,v in pairs(t) do
    t2[k] = v
  end
  return t2
end


function lerp(a,b,t)
	if(a == b) then
		return b
	end
	local res = a + (b - a) * t
	return res
	
end

function split(pString, pPattern)
	local Table = {} -- NOTE: use {n = 0} in Lua-5.0
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

function firstToUpper(str)
	return (str:gsub("^%U", string.upper))
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


