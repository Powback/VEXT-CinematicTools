class 'CinematicToolsClient'

function CinematicToolsClient:__init()

	print("Initializing CinematicToolsClient")
	self:RegisterVars()
	self:RegisterEvents()
end
function CinematicToolsClient:RegisterVars()
	self.m_CursorMode = false
	self.m_Variables = {}

end

function CinematicToolsClient:RegisterEvents()
	self.m_EnableCursorModeHook = Hooks:Install('UI:EnableCursorMode',999, self, self.OnEnableCursorMode)
	
	self.m_StateAddedEvent = Events:Subscribe('VE:StateAdded', self, self.OnStateAdded)
	self.m_StateRemovedEvent = Events:Subscribe('VE:StateRemoved', self, self.OnStateRemoved)
    --self.m_InputConceptEventHook = Hooks:Install('UI:InputConceptEvent', self, self.OnInputConceptEvent)
    --self.m_ReadInstanceEvent = Events:Subscribe('Partition:ReadInstance', self, self.ReadInstance)
    self.m_OnLoadedEvent = Events:Subscribe('ExtensionLoaded', self, self.OnLoaded)
    self.m_OnUpdateInputEvent = Events:Subscribe('Client:UpdateInput', self, self.OnUpdateInput)
    --self.m_OnUpdateEvent = Events:Subscribe('Engine:Update', self, self.OnUpdate)


    self.m_OnWebUIUpdateEvent = Events:Subscribe('CT:UpdateValue', self, self.OnUpdateValue)


end

function CinematicToolsClient:OnUpdateValue(p_Contents)
	
	WebUI:ExecuteJS(string.format('Debug("Server got data: %s")', p_Contents))
	local s_Content = split(p_Contents, ":")
	local s_class = s_Content[1] -- ColorCorrection
	local s_key = s_Content[2] -- Contrast
	local s_type = s_Content[3] -- Vec3
	local s_val = tostring(s_Content[4])
	WebUI:ExecuteJS(string.format('Debug("Server: %s")', p_Contents))

	local s_States = VisualEnvironmentManager:GetStates()

	for i, s_State in ipairs(s_States) do
		if s_State.entityName ~= 'EffectEntity' then
			local m_class = s_State[s_class] --colorCorrection
			if m_class ~= nil then
				
				
				local s_object = m_class[s_key] --colorCorrection Contrast
				
				if(s_type == "float") then 
					m_class[s_key] = tonumber(s_Content[4])
				end
				if(s_type == "bool") then
					if(s_val == "true") then
						m_class[s_key] = true
						WebUI:ExecuteJS(string.format('Debug("True: %s")', p_val))
					else
						m_class[s_key] = false
						WebUI:ExecuteJS(string.format('Debug("False: %s")', p_val))
					end
				end
				if(s_type == "Vec2") then -- Vec2
					local s_var1 = s_Content[4] --x
					local s_val1 = tonumber(s_Content[5]) --1
					local s_var2 = s_Content[6] --y
					local s_val2 = tonumber(s_Content[7]) --1
					m_class[s_key] = Vec2(s_val1,s_val2)
					WebUI:ExecuteJS(string.format('Debug("Debug! %s %s %s %s ")', s_var1, s_val1, s_var2, s_val2))
				end		
				if(s_type == "Vec3") then -- Vec3

					local s_var1 = s_Content[4] --x
					local s_val1 = tonumber(s_Content[5]) --1
					local s_var2 = s_Content[6] --y
					local s_val2 = tonumber(s_Content[7]) --1
					local s_var3 = s_Content[8] --z
					local s_val3 = tonumber(s_Content[9]) --1
					m_class[s_key] = Vec3(s_val1,s_val2,s_val3)
					WebUI:ExecuteJS(string.format('Debug("Debug! %s %s %s %s %s %s")', s_var1, s_val1, s_var2, s_val2, s_var3, s_val3))
				end		
				if(s_type == "Vec4") then -- Vec4

					local s_var1 = s_Content[4] --x
					local s_val1 = tonumber(s_Content[5]) --1
					local s_var2 = s_Content[6] --y
					local s_val2 = tonumber(s_Content[7]) --1
					local s_var3 = s_Content[8] --z
					local s_val3 = tonumber(s_Content[9]) --1
					local s_var4 = s_Content[10] --w
					local s_val4 = tonumber(s_Content[11]) --1
					m_class[s_key] = Vec4(s_val1,s_val2,s_val3,s_val4)
					WebUI:ExecuteJS(string.format('Debug("Debug! %s %s %s %s %s %s %s %s")', s_var1, s_val1, s_var2, s_val2, s_var3, s_val3, s_var4, s_val4))
				end			
				
				WebUI:ExecuteJS(string.format('Debug("Serv3232er: %s")', p_Contents))
			end
		end
	end
	VisualEnvironmentManager.dirty = true
end

function CinematicToolsClient:InitializeDefaultVariables()
	--[[
	local s_States = VisualEnvironmentManager:GetStates()

	for i, s_State in ipairs(s_States) do
		if s_State.entityName ~= 'EffectEntity' then
			
			local s_colorCorrection = s_State.colorCorrection
			if s_colorCorrection ~= nil then
				m_Variables["colorCorrection"] = s_colorCorrection 
				WebUI:ExecuteJS('Debug("Added CC")')
			end		
		end
	end
	]]
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

function CinematicToolsClient:OnEnableCursorMode(p_Hook, p_Enable, p_Cursor)
    -- Here we store the current cursor mode as requested by the
    -- engine in order to restore it later on.
    self.m_CursorMode = p_Enable
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

-- Not tested

function CinematicToolsClient:SendDefault(p_class, p_key, p_type, p_val, p_min, p_max)
	--WebUI:ExecuteJS(string.format('Debug(%s, %s %s %s)',p_class, p_key, p_type, tostring(p_val)))
	local s_newVal = p_val
	if(p_type == "bool") then
		s_newVal = tostring(p_val)
	end
	if(p_type == "Vec2") then
		s_newVal = string.format('%s:%s', p_val.x, p_val.y)
	end
	if(p_type == "Vec3") then
		s_newVal = string.format('%s:%s:%s', p_val.x, p_val.y,p_val.z)
	end
	if(p_type == "Vec4") then
		s_newVal = string.format('%s:%s:%s:%s', p_val.x, p_val.y,p_val.z,p_val.w)
	end
	local combined = string.format("AddOption(\"%s\",\"%s\",\"%s\",\"%s\",\"%s\",\"%s\")", p_class,p_key,p_type,tostring(s_newVal), p_min, p_max)
	WebUI:ExecuteJS(combined)
	
end

function CinematicToolsClient:FixEnvironmentState(p_State)
	print('Fixing visual environment state ' .. p_State.entityName)
	if s_CameraParams ~= nil then
		self:SendDefault("camera","nearPlane","float", s_CameraParams.nearPlane,0,10)
		self:SendDefault("camera","viewDistance","float", s_CameraParams.nearPlane,0,100000000)
	end
	local s_ColorCorrection = p_State.colorCorrection
	if s_ColorCorrection ~= nil then

		self:SendDefault("colorCorrection","colorGradingEnable","bool", s_ColorCorrection.colorGradingEnable, nil, nil)
		--self:SendDefault("colorCorrection","enable","bool", s_ColorCorrection.enable)
		self:SendDefault("colorCorrection","brightness","Vec3", s_ColorCorrection.brightness, 0, 2)
		--self:SendDefault("colorCorrection","colorGradingTexture","CtrRef", s_ColorCorrection.colorGradingTexture)
		self:SendDefault("colorCorrection","contrast","Vec3", s_ColorCorrection.contrast, 0, 2)
		self:SendDefault("colorCorrection","hue","float", s_ColorCorrection.hue, 0, 325)
		--self:SendDefault("colorCorrection","realm","Realm", s_ColorCorrection.realm)
		self:SendDefault("colorCorrection","saturation","Vec3", s_ColorCorrection.saturation, 0, 2)
	end

	local s_Sky = p_State.sky

	if s_Sky ~= nil then
        self:SendDefault("sky", "enable", "bool", s_Sky.enable, nil, nil)
        self:SendDefault("sky", "brightnessScale", "float", s_Sky.brightnessScale, 0, 5)
        self:SendDefault("sky", "cloudLayer1AlphaMul", "float", s_Sky.cloudLayer1AlphaMul, 0, 2)
        self:SendDefault("sky", "cloudLayer1Altitude", "float", s_Sky.cloudLayer1Altitude, 0, 100000)
        self:SendDefault("sky", "cloudLayer1AmbientLightIntensity", "float", s_Sky.cloudLayer1AmbientLightIntensity, 0, 10)
        self:SendDefault("sky", "cloudLayer1Rotation", "float", s_Sky.cloudLayer1Rotation, 0, 360)
        self:SendDefault("sky", "cloudLayer1Speed", "float", s_Sky.cloudLayer1Speed, 0, 1)
        self:SendDefault("sky", "cloudLayer1SunLightIntensity", "float", s_Sky.cloudLayer1SunLightIntensity, 0, 10)
        self:SendDefault("sky", "cloudLayer1SunLightPower", "float", s_Sky.cloudLayer1SunLightPower, 0, 10)
        self:SendDefault("sky", "cloudLayer1TileFactor", "float", s_Sky.cloudLayer1TileFactor, 0, 1)
        self:SendDefault("sky", "cloudLayer2AlphaMul", "float", s_Sky.cloudLayer2AlphaMul, 0, 1)
        self:SendDefault("sky", "cloudLayer2Altitude", "float", s_Sky.cloudLayer2Altitude, 0, 100000)
        self:SendDefault("sky", "cloudLayer2AmbientLightIntensity", "float", s_Sky.cloudLayer2AmbientLightIntensity, 0, 1)
        self:SendDefault("sky", "cloudLayer2Rotation", "float", s_Sky.cloudLayer2Rotation, 0, 360)
        self:SendDefault("sky", "cloudLayer2Speed", "float", s_Sky.cloudLayer2Speed, -1, 1)
        self:SendDefault("sky", "cloudLayer2SunLightIntensity", "float", s_Sky.cloudLayer2SunLightIntensity, 0, 10)
        self:SendDefault("sky", "cloudLayer2SunLightPower", "float", s_Sky.cloudLayer2SunLightPower, 0, 50)
        self:SendDefault("sky", "cloudLayer2TileFactor", "float", s_Sky.cloudLayer2TileFactor, 0, 1)
        self:SendDefault("sky", "customEnvmapAmbient", "float", s_Sky.customEnvmapAmbient, 0, 1)
        self:SendDefault("sky", "customEnvmapScale", "float", s_Sky.customEnvmapScale, 0, 10)
        self:SendDefault("sky", "panoramicRotation", "float", s_Sky.panoramicRotation, 0, 1)
        self:SendDefault("sky", "panoramicTileFactor", "float", s_Sky.panoramicTileFactor, 0, 1)
        self:SendDefault("sky", "panoramicUVMaxX", "float", s_Sky.panoramicUVMaxX, 0, 1)
        self:SendDefault("sky", "panoramicUVMaxY", "float", s_Sky.panoramicUVMaxY, 0, 1)
        self:SendDefault("sky", "panoramicUVMinX", "float", s_Sky.panoramicUVMinX, 0, 1)
        self:SendDefault("sky", "panoramicUVMinY", "float", s_Sky.panoramicUVMinY, 0, 1)
        self:SendDefault("sky", "skyEnvmap8BitTexScale", "float", s_Sky.skyEnvmap8BitTexScale, 0, 1)
        self:SendDefault("sky", "skyVisibilityExponent", "float", s_Sky.skyVisibilityExponent, 0, 1)
        self:SendDefault("sky", "staticEnvmapScale", "float", s_Sky.staticEnvmapScale, 0, 2)
        self:SendDefault("sky", "sunScale", "float", s_Sky.sunScale, 0, 10)
        self:SendDefault("sky", "sunSize", "float", s_Sky.sunSize, 0, 5)
        self:SendDefault("sky", "cloudLayer1Color", "Vec3", s_Sky.cloudLayer1Color, 0, 1)
        self:SendDefault("sky", "cloudLayer2Color", "Vec3", s_Sky.cloudLayer2Color, 0, 1)
        self:SendDefault("sky", "cloudLayerSunColor", "Vec3", s_Sky.cloudLayerSunColor, 0, 1)
      
	end
	
	local s_OutdoorLight = p_State.outdoorLight

	if s_OutdoorLight ~= nil then
		self:SendDefault("outdoorLight","enable", "bool", s_OutdoorLight.enable, nil, nil)
		self:SendDefault("outdoorLight","sunRotationX", "float", s_OutdoorLight.sunRotationX, 0, 360)
		self:SendDefault("outdoorLight","sunRotationY", "float", s_OutdoorLight.sunRotationY, 0, 360)
		self:SendDefault("outdoorLight","cloudShadowCoverage", "float", s_OutdoorLight.cloudShadowCoverage, 0, 1)
		self:SendDefault("outdoorLight","cloudShadowEnable", "bool", s_OutdoorLight.cloudShadowEnable, 0, 1)
		self:SendDefault("outdoorLight","cloudShadowExponent", "float", s_OutdoorLight.cloudShadowExponent, 0, 10)
		self:SendDefault("outdoorLight","cloudShadowSize", "float", s_OutdoorLight.cloudShadowSize, 0, 4000)
		self:SendDefault("outdoorLight","cloudShadowSpeed", "Vec2", s_OutdoorLight.cloudShadowSpeed)
		--self:SendDefault("outdoorLight","cloudShadowTexture", "CtrRef", s_OutdoorLight.cloudShadowTexture)
		self:SendDefault("outdoorLight","groundColor", "Vec3", s_OutdoorLight.groundColor, 0, 255)
		--self:SendDefault("outdoorLight","realm", "Realm", s_OutdoorLight.realm)
		self:SendDefault("outdoorLight","skyColor", "Vec3", s_OutdoorLight.skyColor, 0, 1)
		self:SendDefault("outdoorLight","skyEnvmapShadowScale", "float", s_OutdoorLight.skyEnvmapShadowScale, 0, 1)
		self:SendDefault("outdoorLight","skyLightAngleFactor", "float", s_OutdoorLight.skyLightAngleFactor, 0, 1)
		self:SendDefault("outdoorLight","sunColor", "Vec3", s_OutdoorLight.sunColor, 0, 1)
		self:SendDefault("outdoorLight","sunShadowHeightScale", "float", s_OutdoorLight.sunShadowHeightScale, 0, 1)
		self:SendDefault("outdoorLight","sunSpecularScale", "float", s_OutdoorLight.sunSpecularScale, 0, 5)
		self:SendDefault("outdoorLight","translucencyAmbient", "float", s_OutdoorLight.translucencyAmbient, 0, 1)
		self:SendDefault("outdoorLight","translucencyDistortion", "float", s_OutdoorLight.translucencyDistortion, 0, 1)
		self:SendDefault("outdoorLight","translucencyPower", "float", s_OutdoorLight.translucencyPower, 0, 100)
		self:SendDefault("outdoorLight","translucencyScale", "float", s_OutdoorLight.translucencyScale, 0, 1)
	end

	local s_Fog = p_State.fog
	if s_Fog ~= nil then
		self:SendDefault("fog","enable","bool", s_Fog.enable)
		self:SendDefault("fog","curve","Vec4", s_Fog.curve,0,1)	
		self:SendDefault("fog","start","float", s_Fog.start,0,1000)	
		self:SendDefault("fog","end","float", s_Fog['end'],0,100000)
		self:SendDefault("fog","fogColorEnable","bool", s_Fog.fogColorEnable)
		self:SendDefault("fog","fogColor","Vec3", s_Fog.fogColor,0,1)
		self:SendDefault("fog","fogColorCurve","Vec4", s_Fog.fogColorCurve,0,1)
		self:SendDefault("fog","fogColorEnd","float", s_Fog.fogColorEnd,0,100000)
		self:SendDefault("fog","fogColorStart","float", s_Fog.fogColorStart,0,100000)
		self:SendDefault("fog","fogDistanceMultiplier","float", s_Fog.fogDistanceMultiplier,0,1)
		self:SendDefault("fog","fogGradientEnable","bool", s_Fog.fogGradientEnable)
		self:SendDefault("fog","heightFogEnable","bool", s_Fog.heightFogEnable)
		self:SendDefault("fog","heightFogAltitude","float", s_Fog.heightFogAltitude,0,1000)
		self:SendDefault("fog","heightFogDepth","float", s_Fog.heightFogDepth,0,10000)
		self:SendDefault("fog","heightFogFollowCamera","float", s_Fog.heightFogFollowCamera,0,10000)
		self:SendDefault("fog","heightFogVisibilityRange","float", s_Fog.heightFogVisibilityRange,0,100000)
		--self:SendDefault("fog","realm","Realm", s_Fog.realm,0,1)
		self:SendDefault("fog","transparencyFadeClamp","float", s_Fog.transparencyFadeClamp,0,1000)
		self:SendDefault("fog","transparencyFadeStart","float", s_Fog.transparencyFadeStart,0,100000)
		self:SendDefault("fog","transparencyFadeEnd","float", s_Fog.transparencyFadeEnd,0,1000000)
	end
	local s_CameraParams = p_State.cameraParams

	if s_CameraParams ~= nil then
		self:SendDefault("cameraParams","nearPlane","float", s_CameraParams.nearPlane,-1,1)
		self:SendDefault("cameraParams","viewDistance","float", s_CameraParams.nearPlane,0,100000)
		self:SendDefault("cameraParams","SunShadowmapViewDistance","float", s_CameraParams.SunShadowmapViewDistance,0,10000)
		
	end

local s_CharacterLighting = p_State.characterLighting

	if s_CharacterLighting ~= nil then
		self:SendDefault("characterLighting","characterLightEnable","bool", s_CharacterLighting.characterLightEnable)
		self:SendDefault("characterLighting","firstPersonEnable","bool", s_CharacterLighting.firstPersonEnable)
		self:SendDefault("characterLighting","lockToCameraDirection","bool", s_CharacterLighting.lockToCameraDirection)
		self:SendDefault("characterLighting","characterLightEnable","bool", s_CharacterLighting.characterLightEnable)
		self:SendDefault("characterLighting","cameraUpRotation","float", s_CharacterLighting.characterLightEnable, 0, 180)
		--self:SendDefault("characterLighting","CharacterLightingMode","float", s_CharacterLighting.CharacterLightingMode)
		self:SendDefault("characterLighting","blendFactor","float", s_CharacterLighting.blendFactor, 0, 10)
		self:SendDefault("characterLighting","topLight","Vec3", s_CharacterLighting.topLight,0,1)
		self:SendDefault("characterLighting","bottomLight","Vec3", s_CharacterLighting.bottomLight,0,1)
		self:SendDefault("characterLighting","topLightDirX","float", s_CharacterLighting.topLightDirX,0,180)
		self:SendDefault("characterLighting","topLightDirY","float", s_CharacterLighting.topLightDirY,0,180)
	end


	local s_Enlighten = p_State.enlighten
	if s_Enlighten ~= nil then
		print("enlighten")
	    self:SendDefault("enlighten","enable","bool", s_Enlighten.enable)
		self:SendDefault("enlighten","bounceScale","float", s_Enlighten.bounceScale, 0, 10)
		self:SendDefault("enlighten","sunScale","float", s_Enlighten.sunScale, 0, 10)
		self:SendDefault("enlighten","terrainColor","Vec3", s_Enlighten.terrainColor, 0, 1)
		self:SendDefault("enlighten","cullDistance","float", s_Enlighten.cullDistance, -1, 1)
		self:SendDefault("enlighten","skyBoxEnable","bool", s_Enlighten.skyBoxEnable)
		self:SendDefault("enlighten","skyBoxSkyColor","Vec3", s_Enlighten.skyBoxSkyColor, 0, 1)
		self:SendDefault("enlighten","skyBoxGroundColor","bool", s_Enlighten.skyBoxGroundColor, 0, 1)
		self:SendDefault("enlighten","skyBoxSunLightColor","Vec3", s_Enlighten.skyBoxSunLightColor, 0, 1)
		self:SendDefault("enlighten","skyBoxSunLightColorSize","float", s_Enlighten.skyBoxSunLightColorSize, 0, 1)
		self:SendDefault("enlighten","skyBoxBackLightColor","Vec3", s_Enlighten.skyBoxBackLightColor, 0, 1)
		self:SendDefault("enlighten","skyBoxBackLightColorSize","float", s_Enlighten.skyBoxBackLightColorSize, 0, 1)
		self:SendDefault("enlighten","skyBoxBackLightRotationX","float", s_Enlighten.skyBoxBackLightRotationX, 0, 360)
		self:SendDefault("enlighten","skyBoxBackLightRotationY","float", s_Enlighten.skyBoxBackLightRotationY, 0, 360 )
	end

	local s_Dof = p_State.dof

	if s_Dof ~= nil then
		self:SendDefault("dof","enable","bool", s_Dof.enable)
		self:SendDefault("dof","nearDistanceScale","float", s_Dof.nearDistanceScale,0,100)
		self:SendDefault("dof","focusDistance","float", s_Dof.focusDistance,0,100)
		self:SendDefault("dof","blurFilterDeviation","float", s_Dof.blurFilterDeviation,0,100)
		self:SendDefault("dof","farDistanceScale","float", s_Dof.farDistanceScale,0,100)
		self:SendDefault("dof","blurAdd","float", s_Dof.blurAdd,0,100)
		self:SendDefault("dof","scale","float", s_Dof.scale,0,100)
		self:SendDefault("dof","diffusionDofFocalLength","float", s_Dof.diffusionDofFocalLength,0,100)
		self:SendDefault("dof","diffusionDofAperture","float", s_Dof.diffusionDofAperture,0,100)
		self:SendDefault("dof","diffusionDofEnable","bool", s_Dof.diffusionDofEnable)
	end


	local s_Wind = p_State.wind

	if s_Wind ~= nil then
		s_Wind.windStrength = SharedUtils:GetRandom(0,10)
		self:SendDefault("wind","windStrength","float", s_Wind.windStrength, 0, 10000)
		self:SendDefault("wind","windDirection","float", s_Wind.WindDirection, 0, 360000)
	end

	local s_Vignette = p_State.vignette

	if s_Vignette ~= nil then
		self:SendDefault("vignette","enable","bool", s_Vignette.enable, 0, 360)
		self:SendDefault("vignette","color","Vec3", s_Vignette.color, 0, 1)
		self:SendDefault("vignette","exponent","float", s_Vignette.exponent, 0, 5)
		self:SendDefault("vignette","opacity","float", s_Vignette.opacity, 0, 1)
		self:SendDefault("vignette","scale","Vec2", s_Vignette.scale, 0, 10)
	end

	local s_FilmGrain = p_State.filmGrain

	if s_FilmGrain ~= nil then
		self:SendDefault("filmGrain","enable","bool", s_FilmGrain.enable)
		self:SendDefault("filmGrain","colorScale","Vec3", s_FilmGrain.colorScale, 0, 5)
		self:SendDefault("filmGrain","linearFilteringEnable","bool", s_FilmGrain.linearFilteringEnable, 0, 1)
		self:SendDefault("filmGrain","randomEnable","bool", s_FilmGrain.randomEnable)
		self:SendDefault("filmGrain","textureScale","Vec2", s_FilmGrain.textureScale, 0, 10)
	end



	--local s_DynamicEnvmap = p_State.dynamicEnvmap

	--if s_DynamicEnvmap ~= nil then
	--	self:SendDefault("dynamicEnvmap","groundColorEnvmap","Vec3", s_DynamicEnvmap.groundColorEnvmap, 0, 1)
	--	self:SendDefault("dynamicEnvmap","keyColorEnvmap","Vec3", s_DynamicEnvmap.keyColorEnvmap, 0, 1)
	--	self:SendDefault("dynamicEnvmap","skyColorEnvmap","Vec3", s_DynamicEnvmap.skyColorEnvmap, 0, 1)
	--end
--[[
	local s_TonemapData = p_State.tonemap
	if s_TonemapData ~= nil then
		self:SendDefault("tonemap", "bloomScale", "Vec3", s_Instance.bloomScale, 0, 1)
		self:SendDefault("tonemap", "chromostereopsisEnable", "bool", s_Instance.chromostereopsisEnable)
		self:SendDefault("tonemap", "chromostereopsisOffset", "float", s_Instance.chromostereopsisOffset,0,10)
		self:SendDefault("tonemap", "chromostereopsisScale", "float", s_Instance.chromostereopsisScale,0,10)
		self:SendDefault("tonemap", "exposureAdjustTime", "float", s_Instance.exposureAdjustTime,0,100)
		self:SendDefault("tonemap", "maxExposure", "float", s_Instance.maxExposure,0,100)
		self:SendDefault("tonemap", "middleGray", "float", s_Instance.middleGray,0,100)
		self:SendDefault("tonemap", "minExposure", "float", s_Instance.minExposure,0,100)
		--self:SendDefault("tonemap", "realm", "fb.Realm)", s_Instance.realm)
		--self:SendDefault("tonemap", "tonemapMethod", "fb.TonemapMethod)", s_Instance.tonemapMethod)
	end

	local s_TonemapData = p_State.tonemap

	if s_TonemapData ~= nil then
		--s_TonemapData.bloomScale = Vec3(0, 0, 0)
		--s_TonemapData.minExposure =0.1
		--s_TonemapData.middleGray = 0.4
		--s_TonemapData.maxExposure = 1.5

	end


	local s_Enlighten = p_State.enlighten

	if s_Enlighten ~= nil then
	    s_Enlighten.enable = false
	    s_Enlighten.bounceScale = 1.0
	    s_Enlighten.sunScale = 0.75
	    s_Enlighten.terrainColor = Vec3(0.1, 0.1, 0.1)
	    s_Enlighten.cullDistance = -1.0
	    s_Enlighten.skyBoxEnable = true
	    s_Enlighten.skyBoxSkyColor = Vec3(0.01, 0.019, 0.032)
	    s_Enlighten.skyBoxGroundColor = Vec3(0.0, 0.0, 0.0)
	    s_Enlighten.skyBoxSunLightColor = Vec3(1.0, 0.759, 0.476)
	    s_Enlighten.skyBoxSunLightColorSize = 1.0
	    s_Enlighten.skyBoxBackLightColor = Vec3(0.0, 0.0, 0.0)
	    s_Enlighten.skyBoxBackLightColorSize = 0.0
	    s_Enlighten.skyBoxBackLightRotationX = 0.0
	    s_Enlighten.skyBoxBackLightRotationY = 60.0

	end

	

	

	

	local s_Wind = p_State.wind

	if s_Wind ~= nil then
		s_Wind.windStrength = SharedUtils:GetRandom(0,10)
	end


	local s_CameraParams = p_State.cameraParams

	if s_CameraParams ~= nil then
		s_CameraParams.viewDistance = 5000
		s_CameraParams.sunShadowmapViewDistance = 100
		
	end
	--]]
	VisualEnvironmentManager.dirty = true
	
end


-- Copy pasta'd from http://www.computercraft.info/forums2/index.php?/topic/930-lua-string-split/page__p__93664#entry93664
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

g_CinematicToolsClient = CinematicToolsClient()

return CinematicToolsClient
