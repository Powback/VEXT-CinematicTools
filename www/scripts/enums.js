var AddGameBanResponseType = [
"AddGameBanResponseType_Success",
"AddGameBanResponseType_Failure",
"AddGameBanResponseType_UserNotFound",
"AddGameBanResponseType_UserCannotBeBanned"
]

var AdministrationEventType = [
"AdministrationEventType_Add",
"AdministrationEventType_Remove",
"AdministrationEventType_Clear",
"AdministrationEventType_List",
"AdministrationEventType_Load",
"AdministrationEventType_Save"
]

var AdministrationRestrictionLevel = [
"AdministrationRestrictionLevel_Zero",
"AdministrationRestrictionLevel_One",
"AdministrationRestrictionLevel_Two",
"AdministrationRestrictionLevel_Three",
"AdministrationRestrictionLevel_Count"
]

var AIAltFireFromAntState = [
"AltFireFromAntState_NoForcedFire",
"AltFireFromAntState_Prepare",
"AltFireFromAntState_ForceFire"
]

var AIDeathReactionAnimationType = [
"AIDeathReactionAnimationType_1",
"AIDeathReactionAnimationType_2",
"AIDeathReactionAnimationType_3",
"AIDeathReactionAnimationType_4",
"AIDeathReactionAnimationType_5",
"AIDeathReactionAnimationType_Count"
]

var AIHitReactionAnimationType = [
"AIHitReactionAnimationType_1",
"AIHitReactionAnimationType_2",
"AIHitReactionAnimationType_3",
"AIHitReactionAnimationType_4",
"AIHitReactionAnimationType_5",
"AIHitReactionAnimationType_Count"
]

var AimOrigin = [
"AoDefault",
"AoCamera",
"AoWeapon"
]

var AIStunReactionAnimationType = [
"AIStunReactionAnimationType_1",
"AIStunReactionAnimationType_2",
"AIStunReactionAnimationType_3",
"AIStunReactionAnimationType_4",
"AIStunReactionAnimationType_5",
"AIStunReactionAnimationType_Count"
]

var AngleUnit = [
"AngleUnit_Radians",
"AngleUnit_Degrees"
]

var AnimatedAimingEnum = [
"AnimatedAimingTwoHanded",
"AnimatedAimingRightHanded",
"AnimatedAimingDisabled"
]

var AnimatedFireEnum = [
"AnimatedFireAutomatic",
"AnimatedFireSingle",
"AnimatedFireHoldAndRelease",
"AnimatedFireDelayedSingleShot",
"AnimatedFireSimple"
]

var AntAttentionStateEnum = [
"AntAttentionStateEnum_Relaxed",
"AntAttentionStateEnum_Ready",
"AntAttentionStateEnum_Combat",
"AntAttentionStateEnum_Evasive",
"AntAttentionStateEnum_AntEnumCount",
"AntAttentionStateEnum_NoChange",
"AntAttentionStateEnum_Count",
"AntAttentionStateEnum_Dummy1"
]

var AntCoverEnum = [
"AntCoverEnum_RightCover",
"AntCoverEnum_LeftCover",
"AntCoverEnum_MiddleCover",
"AntCoverEnum_MediumLeftCover",
"AntCoverEnum_MediumRightCover",
"AntCoverEnum_Prone",
"AntCoverEnum_Count"
]

var AntCoverFireType = [
"AntCoverFireType_BlindFireAround", "3",
"AntCoverFireType_BlindFireOver", "4",
"AntCoverFireType_FireFromHipStepOut", "14",
"AntCoverFireType_FireLmg", "13",
"AntCoverFireType_FireOver", "2",
"AntCoverFireType_FireStepOut", "1",
"AntCoverFireType_FireStepOut_Crouched", "12",
"AntCoverFireType_FireStepOutSlow", "10",
"AntCoverFireType_FireStepOutUrgent", "11",
"AntCoverFireType_FlankedWhileFiring", "8",
"AntCoverFireType_PeekFire", "0"
]

var AntEntryIdEnum = [
"AntEntryIdEnum_Humvee_Driver",
"AntEntryIdEnum_Humvee_Gunner",
"AntEntryIdEnum_Humvee_PassengerRearLeft",
"AntEntryIdEnum_Humvee_PassengerRearRight",
"AntEntryIdEnum_F16_Pilot",
"AntEntryIdEnum_SU37_Pilot",
"AntEntryIdEnum_AH6_Pilot",
"AntEntryIdEnum_AH64_Pilot",
"AntEntryIdEnum_AH64_Gunner",
"AntEntryIdEnum_Vodnik_Driver",
"AntEntryIdEnum_Vodnik_Gunner",
"AntEntryIdEnum_Humvee_PassengerFrontRight",
"AntEntryIdEnum_Vodnik_PassengerFrontRight",
"AntEntryIdEnum_Vodnik_PassengerRearRight",
"AntEntryIdEnum_Vodnik_PassengerRearLeft",
"AntEntryIdEnum_VadsGunner",
"AntEntryIdEnum_F18F_Pilot",
"AntEntryIdEnum_F18F_Navigator",
"AntEntryIdEnum_M1A2_Gunner",
"AntEntryIdEnum_M1A2_Driver"
]

var AntHitReactionWeaponType = [
"AntHitReactionWeaponType_Pistol",
"AntHitReactionWeaponType_SMG",
"AntHitReactionWeaponType_AssaultRifle",
"AntHitReactionWeaponType_LMG",
"AntHitReactionWeaponType_Shotgun",
"AntHitReactionWeaponType_SniperRifle",
"AntHitReactionWeaponType_Explosion",
"AntHitReactionWeaponType_Flashbang",
"AntHitReactionWeaponType_Melee"
]

var AntPackagingType = [
"AntPackagingType_Static",
"AntPackagingType_Chunk",
"AntPackagingType_Bundle",
"AntPackagingType_AnimationSet"
]

var AntPoseEnum = [
"AntPoseEnum_Stand",
"AntPoseEnum_Crouch",
"AntPoseEnum_AntEnumCount",
"AntPoseEnum_NoChange",
"AntPoseEnum_Count"
]

var AntSpeedLevel = [
"AntSpeedLevel_Still",
"AntSpeedLevel_Walk",
"AntSpeedLevel_Jog_DEPRECATED_DO_NOT_USE",
"AntSpeedLevel_Sneak",
"AntSpeedLevel_Run",
"AntSpeedLevel_Sprint",
"AntSpeedLevel_Stairs_Walk_Up",
"AntSpeedLevel_Stairs_Walk_Down",
"AntSpeedLevel_Stairs_Run_Up",
"AntSpeedLevel_Stairs_Run_Down",
"AntSpeedLevel_Stairs_Sprint_Up",
"AntSpeedLevel_Stairs_Sprint_Down",
"AntSpeedLevel_AntEnumCount",
"AntSpeedLevel_NoChange",
"AntSpeedLevel_Count"
]

var AreaTriggerInclude = [
"ATNone",
"ATAll",
"ATPlayers",
"ATAI",
"ATAI_Allies",
"ATAI_Enemies",
"ATPlayersNotInVehicle"
]

var AudioCurveType = [
"AudioCurveType_Spline"
]

var AudioSystemSpeakerSetup = [
"FiveDotOne", "6",
"SevenDotOne", "8"
]

var AwardGroup = [
"AwardGroup_Undefined",
"AwardGroup_Ribbons",
"AwardGroup_DogTags",
"AwardGroup_Medals",
"AwardGroup_Star",
"AwardGroup_Mission",
"AwardGroup_LevelComplete",
"AwardGroup_Achievements",
"AwardGroup_LastAwardGroup"
]

var AwardKitAssociation = [
"AwardKitAssociation_Undefined",
"AwardKitAssociation_Assault",
"AwardKitAssociation_Engineer",
"AwardKitAssociation_Recon",
"AwardKitAssociation_Support",
"AwardKitAssociation_All",
"AwardKitAssociation_LAST_ITEM"
]

var AwardType = [
"AwardType_OnceGlobally",
"AwardType_OncePerRound",
"AwardType_Unlimited",
"AwardType_Limited",
"AwardType_GateList"
]

var BackendType = [
"Backend_Lan",
"Backend_Blaze",
"Backend_Peer",
"Backend_Local",
"Backend_Count_"
]

var BlendShaderMode = [
"BsmLerp",
"BsmAdd",
"BsmSubtract",
"BsmMultiply",
"BsmMultiply2x",
"BsmScreen",
"BsmDifference",
"BsmLighten",
"BsmDarken",
"BsmOverlay"
]

var BlinkType = [
"BTHold",
"BTBlink",
"BTCount"
]

var BlurFilter = [
"BfNone",
"BfGaussian3Pixels",
"BfGaussian5Pixels",
"BfGaussian7Pixels",
"BfGaussian9Pixels",
"BfGaussian15Pixels",
"BfGaussian31Pixels"
]

var BreakableControllerComponentNetworkId = [
"BreakableControllerComponentNetworkId_Collapsed",
"BreakableControllerComponentNetworkId_SpawnPartObjectsOnCollapse",
"BreakableControllerComponentNetworkId_ExtraPartCount"
]

var BreakableControllerComponentNetworkIdMultiplier = [
"BreakableControllerComponentNetworkIdMultiplier_HidePartObjects",
"BreakableControllerComponentNetworkIdMultiplier_DisablePart",
"BreakableControllerComponentNetworkIdMultiplier_PartCount"
]

var Buttons = [
"NoneButton",
"XButton",
"SquareButton",
"CircleButton",
"TriangleButton"
]

var CameraIds = [
"NoCameraId",
"FreeCameraId",
"EntryCameraId",
"CameraIdCount"
]

var CameraMovementActionMode = [
"CameraMovementActionMode_Start",
"CameraMovementActionMode_Stop",
"CameraMovementActionMode_StartAndStop"
]

var CapturableType = [
"CTDefault",
"CTUnableToChangeTeam",
"CTCaptureEnablable"
]

var ChangeGameSettingType = [
"CGSNone",
"CGSInvertVerticalLookAxis",
"CGSCount"
]

var CharacterLightingMode = [
"CharacterLightingMode_Add",
"CharacterLightingMode_Blend"
]

var CharacterPoseAction = [
"CPTNoAction",
"CPTForceToStand",
"CPTForceToCroch",
"CPTForceToProne"
]

var CharacterPoseCollisionType = [
"CharacterPoseCollisionType_Capsule",
"CharacterPoseCollisionType_Pencil"
]

var CharacterPoseType = [
"CharacterPoseType_Stand",
"CharacterPoseType_Crouch",
"CharacterPoseType_Prone",
"CharacterPoseTypeCount"
]

var CharacterStateType = [
"CharacterStateType_AnimationControlled", "7",
"CharacterStateType_Climbing", "3",
"CharacterStateType_Falling", "4",
"CharacterStateType_InAir", "2",
"CharacterStateType_Jumping", "1",
"CharacterStateType_OnGround", "0",
"CharacterStateType_Parachute", "5",
"CharacterStateType_Sliding", "8",
"CharacterStateType_StateCount", "11",
"CharacterStateType_Swimming", "6",
"CharacterStateType_User_0", "5",
"CharacterStateType_User_1", "6",
"CharacterStateType_User_2", "7",
"CharacterStateType_User_3", "8",
"CharacterStateType_User_4", "9",
"CharacterStateType_User_5", "10"
]

var ChatChannelType = [
"CctSayAll",
"CctTeam",
"CctSquad",
"CctSquadLeader",
"CctAdmin",
"CctSize"
]

var ClientGameType = [
"ClientGameType_SinglePlayer",
"ClientGameType_Hosted",
"ClientGameType_Joined"
]

var ClientState = [
"ClientState_WaitingForStaticBundleLoad",
"ClientState_LoadProfileOptions",
"ClientState_LostConnection",
"ClientState_Startup",
"ClientState_StartServer",
"ClientState_WaitingForLevel",
"ClientState_StartLoadingLevel",
"ClientState_WaitingForLevelLoaded",
"ClientState_WaitingForLevelLink",
"ClientState_LevelLinked",
"ClientState_WaitingUIIngame",
"ClientState_Ingame",
"ClientState_ConnectToServer",
"ClientState_WaitingUILoading",
"ClientState_WaitingUIUnload",
"ClientState_None"
]

var CollisionMethodEnum = [
"CMESimple",
"CMEDetailed"
]

var CombatPatrolMode = [
"CombatPatrolMode_MustStayOnPath",
"CombatPatrolMode_FreeToFight",
"CombatPatrolMode_FreeToFightAtDestination"
]

var CompareOp = [
"CompareOp_Equal",
"CompareOp_NotEqual",
"CompareOp_Greater",
"CompareOp_Less",
"CompareOp_GreaterOrEqual",
"CompareOp_LessOrEqual"
]

var CompareOperation = [
"Equal",
"NotEqual",
"LesserEqual",
"GreaterEqual",
"Lesser",
"Greater"
]

var CompressorChannelMode = [
"CompressorChannelMode_Independent",
"CompressorChannelMode_Grouped"
]

var ConditionType = [
"ConditionType_And",
"ConditionType_Or",
"ConditionType_XOr",
"ConditionType_Equal",
"ConditionType_Less",
"ConditionType_Greater",
"ConditionType_LessOrEqual",
"ConditionType_GreaterOrEqual"
]

var ConsumableGroup = [
"ConsumableGroup_0",
"ConsumableGroup_1",
"ConsumableGroup_2",
"ConsumableGroup_3",
"ConsumableGroup_4",
"ConsumableGroup_5",
"ConsumableGroup_6",
"ConsumableGroup_7",
"ConsumableGroup_Count"
]

var CoopPlayerEvent = [
"CoopPlayerEvent_Connecting",
"CoopPlayerEvent_Connected",
"CoopPlayerEvent_Disconnected",
"CoopPlayerEvent_Stats",
"CoopPlayerEvent_StatsFailed"
]

var CoreLogLevel = [
"CllNone",
"CllEventRecord",
"CllCrash",
"CllError",
"CllAssert",
"CllFatalAssert",
"CllValidate",
"CllWarning",
"CllInfo",
"CllOutput",
"CllDebug"
]

var CoverEnterStrategy = [
"CoverEnterStrategy_EnterNormally",
"CoverEnterStrategy_SkipEnterButAlign",
"CoverEnterStrategy_SkipEnterDontAlign"
]

var CoverExitStyle = [
"CoverExitStyle_ExitCover",
"CoverExitStyle_VaultFromCrouchCover",
"CoverExitStyle_StrafeFire",
"CoverExitStyle_Surprised",
"CoverExitStyle_Sprint"
]

var CoverFireType = [
"CoverFireType_BlindOut", "3",
"CoverFireType_BlindOver", "4",
"CoverFireType_Flanked", "8",
"CoverFireType_FlankedSurprised", "15",
"CoverFireType_GrenadeBlindOver", "6",
"CoverFireType_GrenadeOut", "5",
"CoverFireType_Lmg", "13",
"CoverFireType_NoFire", "7",
"CoverFireType_Out", "1",
"CoverFireType_OutFireFromHip", "14",
"CoverFireType_OutSlow", "10",
"CoverFireType_OutStandToCrouch", "12",
"CoverFireType_OutUrgent", "11",
"CoverFireType_Over", "2",
"CoverFireType_Peek", "0"
]

var CoverPeekType = [
"CoverPeekType_Out",
"CoverPeekType_Over",
"CoverPeekType_None"
]

var CoverSelectionMethod = [
"CSMAgainstThreatPosition",
"CSMAgainstHighestThreat",
"CSMAgainstSelectedTarget",
"CSMAgainstAllEnemies",
"CSMAgainstAllEnemiesWithFallback"
]

var CoverType = [
"CoverType_Stand",
"CoverType_Medium",
"CoverType_Crouch",
"CoverType_Prone"
]

var CriteriaType = [
"CriteriaType_IAR_InARound",
"CriteriaType_IAR_InARoundResetIfValueNotChanged",
"CriteriaType_IAS_InASpawn",
"CriteriaType_IAS_InASpawnNotResetable",
"CriteriaType_IAS_InASpawnWithoutTakingDamage",
"CriteriaType_GLOBAL_AllTimeTotal",
"CriteriaType_GLOBAL_HighestValue",
"CriteriaType_GLOBAL_HighestValueAlways",
"CriteriaType_GLOBAL_HighestValueInASpawn",
"CriteriaType_GLOBAL_LowestValueAlways",
"CriteriaType_IfNotTrue",
"CriteriaType_IAD_InADeathStreak",
"CriteriaType_GLOBAL_HighestValuePersistent",
"CriteriaType_LAST_ITEM"
]

var CurveInfinityType = [
"CurveInfinityType_Constant",
"CurveInfinityType_Linear",
"CurveInfinityType_Cycle",
"CurveInfinityType_CycleWithOffset",
"CurveInfinityType_Oscillate"
]

var CurveShaderType = [
"CstSine",
"CstSineNormalized",
"CstSawtooth",
"CstTriangle",
"CstSquare"
]

var CustomizationConstants = [
"MaxAttachedSockets", "4",
"MaxVisualSockets", "0x10"
]

var CustomReportValueKind = [
"CustomReportValueKind_ScoreMultiplier",
"CustomReportValueKind_GunMasterLevel"
]

var DamageIndicationType = [
"DamageIndicationType_GiverPlayer",
"DamageIndicationType_ExplosionCenter"
]

var DeathAnimationOperation = [
"DALessThan",
"DAGreaterThan",
"DAEqualTo"
]

var DebugMenuItemType = [
"DmitItem",
"DmitToggle"
]

var DebugRenderType = [
"DebugRenderType_Text",
"DebugRenderType_Plot",
"DebugRenderType_Bar"
]

var DepthStencilCompareFunc = [
"DepthStencilCompareFunc_Never",
"DepthStencilCompareFunc_Less",
"DepthStencilCompareFunc_Equal",
"DepthStencilCompareFunc_LessEqual",
"DepthStencilCompareFunc_Greater",
"DepthStencilCompareFunc_NotEqual",
"DepthStencilCompareFunc_GreaterEqual",
"DepthStencilCompareFunc_Always"
]

var DestructionConnectivityType = [
"DestructionConnectivityType_Full",
"DestructionConnectivityType_Partial",
"DestructionConnectivityType_None",
"DestructionConnectivityType_Inherited"
]

var Difficulty = [
"Difficulty_Easy",
"Difficulty_Medium",
"Difficulty_Hard",
"Difficulty_Hardcore",
"Difficulty_None"
]

var DisableTeamType = [
"DttDisable",
"DttUnspawn"
]

var DogTagCategory = [
"DTC_Invalid",
"DTC_Ribbons",
"DTC_Medals",
"DTC_Ranks",
"DTC_ServiceStars",
"DTC_Weapons",
"DTC_Misc",
"DTC_Assassin"
]

var DTagUploadPolicy = [
"DTUP_FirstTimeSeenAndEndOfRound",
"DTUP_Always"
]

var DynamicAOMethod = [
"DynamicAOMethod_SSAO",
"DynamicAOMethod_HBAO"
]

var DynamicAvoidanceMode = [
"DynamicAvoidanceMode_Never",
"DynamicAvoidanceMode_WhenScripted",
"DynamicAvoidanceMode_WhenNotScripted",
"DynamicAvoidanceMode_Always"
]

var EmittableField = [
"EfZero",
"EfOne",
"EfNormTime",
"EfEmitterNormTime",
"EfSpawnAnimationSpeed",
"EfSpawnAnimationFrameIndex",
"EfVelocity",
"EfParameters",
"EfRotation",
"EfSpeed",
"EfUserDefined",
"EfConstantFloat",
"EfConstantVec",
"EfNone"
]

var EmittableType = [
"Point",
"Quad",
"ScreenAlignedQuad",
"DirectionAlignedQuad",
"WorldAlignedQuad",
"Trail",
"ParticleMesh",
"EmittableTypeCount"
]

var EmitterParameter = [
"EmitterParameterNone",
"EmitterParameter1",
"EmitterParameter2",
"EmitterParameter3",
"EmitterParameter4",
"EmitterParameterVec",
"EmitterParameterDistance",
"EmitterParameterVecAverage"
]

var EnlightenColorMode = [
"EnlightenColorMode_Multiply",
"EnlightenColorMode_Override"
]

var EnlightenType = [
"EnlightenType_Dynamic",
"EnlightenType_LightProbe",
"EnlightenType_Static"
]

var EntitlementType = [
"EntitlementType_Ignored",
"EntitlementType_Write",
"EntitlementType_Read"
]

var EntityCreatorType = [
"EntityCreatorType_Unknown",
"EntityCreatorType_Level",
"EntityCreatorType_Spawner",
"EntityCreatorType_Owner",
"EntityCreatorType_Ghost"
]

var EntityInitPass = [
"EntityInitPass_Early",
"EntityInitPass_Normal",
"EntityInitPass_Count"
]

var EntityUpdateOrder = [
"EntityUpdateOrder_Async", "1",
"EntityUpdateOrder_Both", "3",
"EntityUpdateOrder_Sync", "2"
]

var EntropyCodecType = [
"EntropyCodecType_Arithmetic"
]

var EntryClass = [
"ecPrimary",
"ecSecondary"
]

var EntryEnterRestriction = [
"EntryEnterRestriction_NoRestriction",
"EntryEnterRestriction_OnlyPrimaryEntry"
]

var EntryInputActionEnum = [
"EIABrake", "2",
"EIABreathControl", "0x2d",
"EIACameraPitch", "8",
"EIACameraYaw", "9",
"EIAChangeEntry", "0x30",
"EIAChangeEntry1", "0x31",
"EIAChangeEntry2", "50",
"EIAChangeEntry3", "0x33",
"EIAChangeEntry4", "0x34",
"EIAChangeEntry5", "0x35",
"EIAChangeEntry6", "0x36",
"EIAChangeEntry7", "0x37",
"EIAChangeEntry8", "0x38",
"EIAChangePose", "13",
"EIAChangeVehicle", "0x2f",
"EIAClutch", "0x2a",
"EIACrawlSpeed", "0x21",
"EIACycleFireMode", "0x22",
"EIACycleRadioChannel", "0x25",
"EIADynamicGadget1", "0x1c",
"EIADynamicGadget2", "0x1d",
"EIAFire", "7",
"EIAFireCountermeasure", "10",
"EIAGearDown", "0x29",
"EIAGearDownOrExitSupportedShooting", "0x29",
"EIAGearUp", "40",
"EIAGearUpOrToggleWeaponLight", "40",
"EIAGiveOrder", "0x2c",
"EIAGrenadeLauncher", "0x1a",
"EIAHandBrake", "0x2b",
"EIAInteract", "0x23",
"EIAJump", "12",
"EIAMapZoom", "0x2e",
"EIAMeleeAttack", "30",
"EIANoInput", "0x80",
"EIAPitch", "5",
"EIAProne", "14",
"EIAQuicktimeBlock", "0x3e",
"EIAQuicktimeCrouchDuck", "0x41",
"EIAQuicktimeFastMelee", "0x3f",
"EIAQuicktimeFire", "0x3d",
"EIAQuicktimeInteractDrag", "60",
"EIAQuicktimeJumpClimb", "0x40",
"EIAReload", "15",
"EIARoll", "6",
"EIAScoreboardMenu", "0x27",
"EIASelectWeapon1", "0x10",
"EIASelectWeapon2", "0x11",
"EIASelectWeapon3", "0x12",
"EIASelectWeapon4", "0x13",
"EIASelectWeapon5", "20",
"EIASelectWeapon6", "0x15",
"EIASelectWeapon7", "0x16",
"EIASelectWeapon8", "0x17",
"EIASelectWeapon9", "0x18",
"EIAShowCommoRose", "0x3a",
"EIAShowLeaderCommoRose", "0x3b",
"EIASprint", "0x20",
"EIAStaticGadget", "0x1b",
"EIAStrafe", "1",
"EIASwitchPrimaryInventory", "3",
"EIASwitchPrimaryWeapon", "0x19",
"EIAThreeDimensionalMap", "0x39",
"EIAThrottle", "0",
"EIAThrowGrenade", "0x1f",
"EIAToggleCamera", "0x26",
"EIAToggleParachute", "0x24",
"EIAUndefined", "0x80",
"EIAYaw", "4",
"EIAZoom", "11"
]

var EntrySeatType = [
"EST_Driver",
"EST_Gunner",
"EST_Passenger"
]

var EntrySpottingSettings = [
"ESSDefault",
"ESSSendAndReceive",
"ESSReceive",
"ESSCount"
]

var EvaluatorType = [
"EtDefault",
"EtBox",
"EtPolynomial",
"EtPolynomialOperator",
"EtRandom",
"EtRandomXYZ",
"EtRotateVector",
"EtSampleTexture",
"EtSphere",
"EtConstant",
"EtPolynomialColorInterp",
"EtCamProx",
"EvaluatorTypeCount"
]

var EventCompareGateType = [
"EventCompareGate_Equals",
"EventCompareGate_NotEquals",
"EventCompareGate_Less",
"EventCompareGate_LessEquals",
"EventCompareGate_Greater",
"EventCompareGate_GreaterEquals"
]

var EventConnectionTargetType = [
"EventConnectionTargetType_Invalid",
"EventConnectionTargetType_ClientAndServer",
"EventConnectionTargetType_Client",
"EventConnectionTargetType_Server",
"EventConnectionTargetType_NetworkedClient",
"EventConnectionTargetType_NetworkedClientAndServer"
]

var EventGateState = [
"EGSInvalid",
"EGSUpright",
"EGSCrouched",
"EGSProne",
"EGSZoomed",
"EGSCount"
]

var ExampleVehicleType = [
"ExampleVehicleType_Small",
"ExampleVehicleType_Medium",
"ExampleVehicleType_Large"
]

var ExecutionModeType = [
"ExecutionMode_Play",
"ExecutionMode_GameView",
"ExecutionMode_PlayFromHere"
]

var ExitToMenuReason = [
"ExitToMenuReason_None",
"ExitToMenuReason_UserDisconnected",
"ExitToMenuReason_DisconnectedFromServer",
"ExitToMenuReason_UnableToConnectToServer",
"ExitToMenuReason_ClientDisconnected",
"ExitToMenuReason_FirstPartyConnectionFailed",
"ExitToMenuReason_MissingContent",
"ExitToMenuReason_TeamKills",
"ExitToMenuReason_KickedByAdmin",
"ExitToMenuReason_Banned",
"ExitToMenuReason_InteractivityTimeout",
"ExitToMenuReason_KickedOutServerFull",
"ExitToMenuReason_ESportsMatchStarting",
"ExitToMenuReason_NotInESportsRosters",
"ExitToMenuReason_ESportsMatchEnding",
"ExitToMenuReason_VirtualServerExpired",
"ExitToMenuReason_VirtualServerRecreate",
"ExitToMenuReason_ESportsTeamFull",
"ExitToMenuReason_ESportsMatchAborted",
"ExitToMenuReason_ESportsMatchWalkover",
"ExitToMenuReason_ESportsMatchWarmupTimedOut",
"ExitToMenuReason_PremiumStatusMismatch"
]

var ExpanderChannelMode = [
"ExpanderChannelMode_Independent",
"ExpanderChannelMode_Grouped"
]

var EyeVectorSpace = [
"EyeVectorSpace_World",
"EyeVectorSpace_Object",
"EyeVectorSpace_Tangent"
]

var FactionId = [
"FactionNeutral",
"FactionUS",
"FactionRUS",
"FactionMEC",
"FactionIdCount",
"FactionInvalid"
]

var FadeCurveType = [
"FadeCurveType_LinearAmplitude",
"FadeCurveType_SineAmplitude",
"FadeCurveType_LinearDecibel"
]

var FaderType = [
"FaderType_Linear",
"FaderType_Cosine"
]

var FieldAccessType = [
"FieldAccessType_Source",
"FieldAccessType_Target",
"FieldAccessType_SourceAndTarget"
]

var FireLogicType = [
"fltSingleFire",
"fltSingleFireWithBoltAction",
"fltAutomaticFire",
"fltBurstFire",
"fltHoldAndRelease",
"fltDetonatedFiring",
"fltCount"
]

var ForceCondition = [
"FCNever",
"FCNotCriticalDamaged",
"FCCriticalDamaged",
"FCNotOccupied",
"FCOccupied",
"FCAlways"
]

var ForceMagnitudeInputType = [
"FMITYaw",
"FMITPitch",
"FMITRoll",
"FMITThrottle"
]

var ForceType = [
"FTForce",
"FTTorque"
]

var FrequencyShiftSsbFilter = [
"FrequencyShiftSsbFilter_None",
"FrequencyShiftSsbFilter_Fir64"
]

var GainFaderFadeType = [
"GainFaderFadeType_LinearAmplitude",
"GainFaderFadeType_LinearPower",
"GainFaderFadeType_SineAmplitude"
]

var GameOverResult = [
"GameOver_Defeat", "2",
"GameOver_Draw", "7",
"GameOver_MajorDefeat", "1",
"GameOver_MajorVictory", "4",
"GameOver_MinorDefeat", "3",
"GameOver_MinorVictory", "6",
"GameOver_Victory", "5"
]

var GamePlatform = [
"GamePlatform_Ps3",
"GamePlatform_Win32",
"GamePlatform_Xenon",
"GamePlatform_Any",
"GamePlatform_Invalid",
"GamePlatform_Count"
]

var GameplayBones = [
"GameplayBones_UndefinedBone",
"GameplayBones_HeadBone",
"GameplayBones_AimBone",
"GameplayBones_RootBone",
"GameplayBones_WeaponBone",
"GameplayBones_ConnectBone",
"GameplayBones_RootMeshBone",
"GameplayBones_MagazineBone",
"GameplayBones_Count"
]

var GameSplineType = [
"GameSplineType_Generic",
"GameSplineType_Pipe",
"GameSplineType_Zipline",
"GameSplineType_Swing"
]

var GearSlot = [
"GearSlot_Melee",
"GearSlot_Sidearm",
"GearSlot_Primary",
"GearSlot_Auxiliary",
"GearSlot_Secondary",
"GearSlot_Gadget1",
"GearSlot_Gadget2",
"GearSlot_Gadget3",
"GearSlot_Gadget4",
"GearSlot_Gadget5",
"GearSlot_Gadget6",
"GearSlot_Gadget7",
"GearSlot_GearSlotCount",
"GearSlot_NotEquipped"
]

var GrenadeType = [
"GrenadeType_NotSet",
"GrenadeType_Frag",
"GrenadeType_Smoke",
"GrenadeType_Flash"
]

var GunMasterNotificationType = [
"GunMasterNotificationType_LevelUp",
"GunMasterNotificationType_Demoted",
"GunMasterNotificationType_ReachedLevel",
"GunMasterNotificationType_TookLead",
"GunMasterNotificationType_LostLead"
]

var HardwareProfile = [
"Hardware_Autodetect",
"Hardware_LowEnd",
"Hardware_Medium",
"Hardware_HighEnd",
"Hardware_Maximum"
]

var HitReactionType = [
"HRT_Body",
"HRT_Head",
"HRT_RightArm",
"HRT_LeftArm",
"HRT_RightLeg",
"HRT_LeftLeg",
"HRT_Count"
]

var HudTextReceiver = [
"HudTextReceiver_Team",
"HudTextReceiver_Squad",
"HudTextReceiver_All",
"HudTextReceiver_Count"
]

var IKEffectorEnum = [
"IKLeftHand",
"IKRightHand"
]

var IndexBufferFormat = [
"IndexBufferFormat_16Bit",
"IndexBufferFormat_32Bit"
]

var IndexInBlueprint = [
"IndexInBlueprint_HighestIndex", "0xfffe",
"IndexInBlueprint_Unknown", "0xffff"
]

var InputActionMapPlatform = [
"IAMPWin32",
"IAMPXenon",
"IAMPPs3",
"IAMPAllPlatforms"
]

var InputActionMapSlot = [
"InputActionMapSlot_Undefined",
"InputActionMapSlot_Root1",
"InputActionMapSlot_Root2",
"InputActionMapSlot_Root3",
"InputActionMapSlot_Root4",
"InputActionMapSlot_Root5",
"InputActionMapSlot_Root6",
"InputActionMapSlot_Root7",
"InputActionMapSlot_Root8",
"InputActionMapSlot_Root9",
"InputActionMapSlot_Root10",
"InputActionMapSlot_Root11",
"InputActionMapSlot_Root12",
"InputActionMapSlot_Root13",
"InputActionMapSlot_Root14",
"InputActionMapSlot_Root15",
"InputActionMapSlot_Root16",
"InputActionMapSlot_Sticks1",
"InputActionMapSlot_Sticks2",
"InputActionMapSlot_Sticks3",
"InputActionMapSlot_Sticks4",
"InputActionMapSlot_Buttons1",
"InputActionMapSlot_Buttons2",
"InputActionMapSlot_Buttons3",
"InputActionMapSlot_Buttons4",
"InputActionMapSlot_Sticks1Buttons1",
"InputActionMapSlot_Sticks1Buttons2",
"InputActionMapSlot_Sticks1Buttons3",
"InputActionMapSlot_Sticks1Buttons4",
"InputActionMapSlot_Sticks2Buttons1",
"InputActionMapSlot_Sticks2Buttons2",
"InputActionMapSlot_Sticks2Buttons3",
"InputActionMapSlot_Sticks2Buttons4",
"InputActionMapSlot_Sticks3Buttons1",
"InputActionMapSlot_Sticks3Buttons2",
"InputActionMapSlot_Sticks3Buttons3",
"InputActionMapSlot_Sticks3Buttons4",
"InputActionMapSlot_Sticks4Buttons1",
"InputActionMapSlot_Sticks4Buttons2",
"InputActionMapSlot_Sticks4Buttons3",
"InputActionMapSlot_Sticks4Buttons4",
"InputActionMapSlot_Count"
]

var InputConceptIdentifiers = [
"ConceptMoveFB",
"ConceptMoveLR",
"ConceptMoveForward",
"ConceptMoveBackward",
"ConceptMoveLeft",
"ConceptMoveRight",
"ConceptYaw",
"ConceptPitch",
"ConceptRoll",
"ConceptRecenterCamera",
"ConceptFire",
"ConceptAltFire",
"ConceptFireCountermeasure",
"ConceptReload",
"ConceptZoom",
"ConceptToggleCamera",
"ConceptSprint",
"ConceptCrawl",
"ConceptToggleWeaponLight",
"ConceptJump",
"ConceptCrouch",
"ConceptCrouchOnHold",
"ConceptProne",
"ConceptInteract",
"ConceptPickUp",
"ConceptDrop",
"ConceptBreathControl",
"ConceptParachute",
"ConceptSwitchInventoryItem",
"ConceptSelectInventoryItem1",
"ConceptSelectInventoryItem2",
"ConceptSelectInventoryItem3",
"ConceptSelectInventoryItem4",
"ConceptSelectInventoryItem5",
"ConceptSelectInventoryItem6",
"ConceptSelectInventoryItem7",
"ConceptSelectInventoryItem8",
"ConceptSelectInventoryItem9",
"ConceptSwitchToPrimaryWeapon",
"ConceptSwitchToGrenadeLauncher",
"ConceptSwitchToStaticGadget",
"ConceptSwitchToDynamicGadget1",
"ConceptSwitchToDynamicGadget2",
"ConceptMeleeAttack",
"ConceptThrowGrenade",
"ConceptCycleFireMode",
"ConceptChangeVehicle",
"ConceptBrake",
"ConceptHandBrake",
"ConceptClutch",
"ConceptGearUp",
"ConceptGearDown",
"ConceptGearSwitch",
"ConceptNextPosition",
"ConceptSelectPosition1",
"ConceptSelectPosition2",
"ConceptSelectPosition3",
"ConceptSelectPosition4",
"ConceptSelectPosition5",
"ConceptSelectPosition6",
"ConceptSelectPosition7",
"ConceptSelectPosition8",
"ConceptCameraPitch",
"ConceptCameraYaw",
"ConceptMapZoom",
"ConceptMapInnerZoom",
"ConceptMapSize",
"ConceptMapThreeDimensional",
"ConceptScoreboard",
"ConceptMenu",
"ConceptSpawnMenu",
"ConceptCancel",
"ConceptCommMenu1",
"ConceptCommMenu2",
"ConceptCommMenu3",
"ConceptAccept",
"ConceptDecline",
"ConceptSelect",
"ConceptBack",
"ConceptActivate",
"ConceptDeactivate",
"ConceptEdit",
"ConceptView",
"ConceptParentNavigateLeft",
"ConceptParentNavigateRight",
"ConceptMenuZoomIn",
"ConceptMenuZoomOut",
"ConceptPanX",
"ConceptPanY",
"ConceptVoiceFunction1",
"ConceptSayAllChat",
"ConceptTeamChat",
"ConceptSquadChat",
"ConceptSquadLeaderChat",
"ConceptToggleChat",
"ConceptQuicktimeInteractDrag",
"ConceptQuicktimeFire",
"ConceptQuicktimeBlock",
"ConceptQuicktimeFastMelee",
"ConceptQuicktimeJumpClimb",
"ConceptQuicktimeCrouchDuck",
"ConceptFreeCameraMoveUp",
"ConceptFreeCameraMoveDown",
"ConceptFreeCameraMoveLR",
"ConceptFreeCameraMoveFB",
"ConceptFreeCameraRotateX",
"ConceptFreeCameraRotateY",
"ConceptFreeCameraIncreaseSpeed",
"ConceptFreeCameraDecreaseSpeed",
"ConceptFreeCameraFOVModifier",
"ConceptFreeCameraChangeFOV",
"ConceptFreeCameraSwitchSpeed",
"ConceptFreeCameraTurboSpeed",
"ConceptFreeCameraActivator1",
"ConceptFreeCameraActivator2",
"ConceptFreeCameraActivator3",
"ConceptFreeCameraMayaInputActivator",
"ConceptTargetedCameraDistance",
"ConceptTargetedCameraRotateX",
"ConceptTargetedCameraRotateY",
"ConceptTargetedCameraChangeSpeed",
"ConceptLThumb",
"ConceptRThumb",
"ConceptToggleMinimapType",
"ConceptUndefined",
"ConceptSize"
]

var InputDeviceAxes = [
"IDA_Axis0X",
"IDA_Axis0Y",
"IDA_Axis0XPos",
"IDA_Axis0YPos",
"IDA_Axis0XNeg",
"IDA_Axis0YNeg",
"IDA_Axis1X",
"IDA_Axis1Y",
"IDA_Axis1XPos",
"IDA_Axis1YPos",
"IDA_Axis1XNeg",
"IDA_Axis1YNeg",
"IDA_Axis2X",
"IDA_Axis2Y",
"IDA_Axis3X",
"IDA_Axis3Y",
"IDA_Axis4X",
"IDA_Axis4Y",
"IDA_Axis5X",
"IDA_Axis5Y",
"IDA_Axis6X",
"IDA_Axis6Y",
"IDA_Axis7X",
"IDA_Axis7Y",
"IDA_Undefined"
]

var InputDeviceKeys = [
"IDK_0", "11",
"IDK_1", "2",
"IDK_2", "3",
"IDK_3", "4",
"IDK_4", "5",
"IDK_5", "6",
"IDK_6", "7",
"IDK_7", "8",
"IDK_8", "9",
"IDK_9", "10",
"IDK_A", "30",
"IDK_Add", "0x4e",
"IDK_Apostrophe", "40",
"IDK_AppMenu", "0xdd",
"IDK_ArrowDown", "0xd0",
"IDK_ArrowLeft", "0xcb",
"IDK_ArrowRight", "0xcd",
"IDK_ArrowUp", "200",
"IDK_At", "0x91",
"IDK_Ax", "150",
"IDK_B", "0x30",
"IDK_Backslash", "0x2b",
"IDK_Backspace", "14",
"IDK_C", "0x2e",
"IDK_Calculator", "0xa1",
"IDK_Capital", "0x3a",
"IDK_Colon", "0x92",
"IDK_Comma", "0x33",
"IDK_Convert", "0x79",
"IDK_D", "0x20",
"IDK_Decimal", "0x53",
"IDK_Delete", "0xd3",
"IDK_Divide", "0xb5",
"IDK_E", "0x12",
"IDK_End", "0xcf",
"IDK_Enter", "0x1c",
"IDK_Equals", "13",
"IDK_Escape", "1",
"IDK_F", "0x21",
"IDK_F1", "0x3b",
"IDK_F10", "0x44",
"IDK_F11", "0x57",
"IDK_F12", "0x58",
"IDK_F13", "100",
"IDK_F14", "0x65",
"IDK_F15", "0x66",
"IDK_F2", "60",
"IDK_F3", "0x3d",
"IDK_F4", "0x3e",
"IDK_F5", "0x3f",
"IDK_F6", "0x40",
"IDK_F7", "0x41",
"IDK_F8", "0x42",
"IDK_F9", "0x43",
"IDK_G", "0x22",
"IDK_Grave", "0x29",
"IDK_H", "0x23",
"IDK_Home", "0xc7",
"IDK_I", "0x17",
"IDK_Insert", "210",
"IDK_J", "0x24",
"IDK_K", "0x25",
"IDK_Kana", "0x70",
"IDK_Kanji", "0x94",
"IDK_L", "0x26",
"IDK_LeftAlt", "0x38",
"IDK_LeftBracket", "0x1a",
"IDK_LeftCtrl", "0x1d",
"IDK_LeftShift", "0x2a",
"IDK_LeftWin", "0xdb",
"IDK_M", "50",
"IDK_Mail", "0xec",
"IDK_MediaSelect", "0xed",
"IDK_MediaStop", "0xa4",
"IDK_Minus", "12",
"IDK_Multiply", "0x37",
"IDK_Mute", "160",
"IDK_MyComputer", "0xeb",
"IDK_N", "0x31",
"IDK_NextTrack", "0x99",
"IDK_NoConvert", "0x7b",
"IDK_None", "0",
"IDK_Numlock", "0x45",
"IDK_Numpad0", "0x52",
"IDK_Numpad1", "0x4f",
"IDK_Numpad2", "80",
"IDK_Numpad3", "0x51",
"IDK_Numpad4", "0x4b",
"IDK_Numpad5", "0x4c",
"IDK_Numpad6", "0x4d",
"IDK_Numpad7", "0x47",
"IDK_Numpad8", "0x48",
"IDK_Numpad9", "0x49",
"IDK_NumpadComma", "0xb3",
"IDK_NumpadEnter", "0x9c",
"IDK_NumpadEquals", "0x8d",
"IDK_O", "0x18",
"IDK_OEM_102", "0x56",
"IDK_P", "0x19",
"IDK_PageDown", "0xd1",
"IDK_PageUp", "0xc9",
"IDK_Pause", "0xc5",
"IDK_Period", "0x34",
"IDK_PlayPause", "0xa2",
"IDK_Power", "0xde",
"IDK_PrevTrack", "0x90",
"IDK_PrintScreen", "0xb7",
"IDK_Q", "0x10",
"IDK_R", "0x13",
"IDK_RightAlt", "0xb8",
"IDK_RightBracket", "0x1b",
"IDK_RightCtrl", "0x9d",
"IDK_RightShift", "0x36",
"IDK_RightWin", "220",
"IDK_S", "0x1f",
"IDK_ScrollLock", "70",
"IDK_Semicolon", "0x27",
"IDK_Slash", "0x35",
"IDK_Sleep", "0xdf",
"IDK_Space", "0x39",
"IDK_Stop", "0x95",
"IDK_Subtract", "0x4a",
"IDK_T", "20",
"IDK_Tab", "15",
"IDK_U", "0x16",
"IDK_Undefined", "0xff",
"IDK_Underline", "0x93",
"IDK_Unlabeled", "0x97",
"IDK_V", "0x2f",
"IDK_VolumeDown", "0xae",
"IDK_VolumeUp", "0xb0",
"IDK_W", "0x11",
"IDK_Wake", "0xe3",
"IDK_WebBack", "0xea",
"IDK_WebFavorites", "230",
"IDK_WebForward", "0xe9",
"IDK_WebHome", "0xb2",
"IDK_WebRefresh", "0xe7",
"IDK_WebSearch", "0xe5",
"IDK_WebStop", "0xe8",
"IDK_X", "0x2d",
"IDK_Y", "0x15",
"IDK_Yen", "0x7d",
"IDK_Z", "0x2c"
]

var InputDeviceMotionControllerButtons = [
"IDMCB_Rup",
"IDMCB_Rdown",
"IDMCB_Rleft",
"IDMCB_Rright",
"IDMCB_start",
"IDMCB_alt",
"IDMCB_center",
"IDMCB_trigger",
"IDMCB_reload",
"IDMCB_pumpaction",
"IDMCB_Gstab",
"IDMCB_Grotleft",
"IDMCB_Grotright",
"IDMCB_Undefined"
]

var InputDeviceMouseButtons = [
"IDB_Button_0",
"IDB_Button_1",
"IDB_Button_2",
"IDB_Button_3",
"IDB_Button_4",
"IDB_Button_5",
"IDB_Button_6",
"IDB_Button_7",
"IDB_Button_Undefined"
]

var InputDevicePadButtons = [
"IDB_alt", "13",
"IDB_Ldown", "1",
"IDB_Lleft", "2",
"IDB_Lright", "3",
"IDB_Lthumb", "10",
"IDB_Ltrigger", "14",
"IDB_Ltrigger2", "0x10",
"IDB_Lup", "0",
"IDB_NegZAxis", "0x25",
"IDB_NumPadButtons", "60",
"IDB_PosZAxis", "0x24",
"IDB_Pov1East", "0x2f",
"IDB_Pov1North", "0x2c",
"IDB_Pov1South", "0x2d",
"IDB_Pov1West", "0x2e",
"IDB_Pov2East", "0x33",
"IDB_Pov2North", "0x30",
"IDB_Pov2South", "0x31",
"IDB_Pov2West", "50",
"IDB_Pov3East", "0x37",
"IDB_Pov3North", "0x34",
"IDB_Pov3South", "0x35",
"IDB_Pov3West", "0x36",
"IDB_Pov4East", "0x3b",
"IDB_Pov4North", "0x38",
"IDB_Pov4South", "0x39",
"IDB_Pov4West", "0x3a",
"IDB_Rdown", "5",
"IDB_Rleft", "6",
"IDB_Rright", "7",
"IDB_Rthumb", "11",
"IDB_Rtopleft", "8",
"IDB_Rtopright", "9",
"IDB_Rtrigger", "15",
"IDB_Rtrigger2", "0x11",
"IDB_Rup", "4",
"IDB_start", "12",
"IDB_Undefined", "60",
"IDB_XButton1", "0x12",
"IDB_XButton10", "0x1b",
"IDB_XButton11", "0x1c",
"IDB_XButton12", "0x1d",
"IDB_XButton13", "30",
"IDB_XButton14", "0x1f",
"IDB_XButton15", "0x20",
"IDB_XButton16", "0x21",
"IDB_XButton17", "0x22",
"IDB_XButton18", "0x23",
"IDB_XButton2", "0x13",
"IDB_XButton3", "20",
"IDB_XButton4", "0x15",
"IDB_XButton5", "0x16",
"IDB_XButton6", "0x17",
"IDB_XButton7", "0x18",
"IDB_XButton8", "0x19",
"IDB_XButton9", "0x1a",
"IDB_XRotationNeg", "0x27",
"IDB_XRotationPos", "0x26",
"IDB_YRotationNeg", "0x29",
"IDB_YRotationPos", "40",
"IDB_ZRotationNeg", "0x2b",
"IDB_ZRotationPos", "0x2a"
]

var InputDevicePOVs = [
"IDP_POV_0",
"IDP_POV_1",
"IDP_POV_2",
"IDP_POV_Undefined"
]

var InputIds = [
"NoInputId",
"SpectatorInputId",
"FreeCameraInputId",
"EntryInputId"
]

var InteractionEntityType = [
"IET_None",
"IET_RushCrateArm",
"IET_RushCrateDisarm",
"IET_CTFFlag"
]

var InterpolationType = [
"InterpolationType_None",
"InterpolationType_Linear",
"InterpolationType_CatmullRom",
"InterpolationType_Curves"
]

var InvitePlatform = [
"InvitePlatform_Invalid",
"InvitePlatform_X360",
"InvitePlatform_PS3",
"InvitePlatform_PC",
"InvitePlatform_Count"
]

var InviteType = [
"InviteType_Invalid",
"InviteType_Invite",
"InviteType_JoinSession",
"InviteType_JoinFriendSession",
"InviteType_Count"
]

var LanguageFormat = [
"LanguageFormat_English",
"LanguageFormat_French",
"LanguageFormat_German",
"LanguageFormat_Spanish",
"LanguageFormat_Italian",
"LanguageFormat_Japanese",
"LanguageFormat_Russian",
"LanguageFormat_Polish",
"LanguageFormat_Dutch",
"LanguageFormat_Portuguese",
"LanguageFormat_TraditionalChinese",
"LanguageFormat_Korean",
"LanguageFormat_Czech",
"LanguageFormat_Count",
"LanguageFormat_Undefined"
]

var LimiterChannelMode = [
"LimiterChannelMode_Independent",
"LimiterChannelMode_Grouped"
]

var LockType = [
"LockAlways",
"LockOnRadar",
"LockOnHeat",
"LockOnLaserPainted",
"LockNever",
"LockTypeCount"
]

var LogFileCollisionMode = [
"LFCM_Overwrite",
"LFCM_Rotate",
"LFCM_TimeStamp"
]

var LogicalExpressionOperator = [
"LogicalExpressionOperator_And",
"LogicalExpressionOperator_Or",
"LogicalExpressionOperator_Nand",
"LogicalExpressionOperator_Nor"
]

var LoopType = [
"LtNone",
"LtForward",
"LtRelease",
"LtInstantRelease"
]

var MapMarkerColorType = [
"MMCTRed",
"MMCTBlue",
"MMCTGreen"
]

var MapMarkerType = [
"MMTMissionObjective",
"MMTSecondaryMissionObjective",
"MMTSoldier",
"MMTVehicle",
"MMTAmmoCrate",
"MMTGeneric",
"MMTFlag"
]

var MatchmakingNetworkTopology = [
"MatchmakingNetworkTopology_Disabled",
"MatchmakingNetworkTopology_Peer2Peer",
"MatchmakingNetworkTopology_PeerHosted",
"MatchmakingNetworkTopology_DedicatedServer"
]

var MatchmakingPeer2PeerMode = [
"MatchmakingPeer2PeerMode_FullMesh",
"MatchmakingPeer2PeerMode_PartialMesh",
"MatchmakingPeer2PeerMode_DirtyCastFailover"
]

var MatchmakingPlatform = [
"MatchmakingPlatform_PC",
"MatchmakingPlatform_Console",
"MatchmakingPlatform_360",
"MatchmakingPlatform_PS3",
"MatchmakingPlatform_Any"
]

var MatchmakingRankedMode = [
"MatchmakingRankedMode_Ranked",
"MatchmakingRankedMode_Unranked",
"MatchmakingRankedMode_Any"
]

var MatchmakingSessionMode = [
"MatchmakingSessionMode_FindDedicatedServer",
"MatchmakingSessionMode_ResetDedicatedServer",
"MatchmakingSessionMode_FindPeerGame",
"MatchmakingSessionMode_CreatePeerGame",
"MatchmakingSessionMode_Invalid"
]

var MatchmakingVirtualizationMode = [
"MatchmakingVirtualizationMode_Virtualized",
"MatchmakingVirtualizationMode_Standard",
"MatchmakingVirtualizationMode_Any"
]

var MathOp = [
"MathOp_Add",
"MathOp_Subtract",
"MathOp_Multiply",
"MathOp_Divide",
"MathOp_Min",
"MathOp_Max"
]

var MenuResponse = [
"ResponseOk",
"ResponseCancel",
"ResponseSquare",
"ResponseCount"
]

var MeshHandleFlags = [
"InvalidMeshHandle"
]

var MeshLimits = [
"MaxMeshLodCount", "5"
]

var MeshScatteringElevationMode = [
"MeshScatteringElevationMode_SnapBoundingBox",
"MeshScatteringElevationMode_SnapPivotPoint"
]

var MeshScatteringInstanceDataMode = [
"MeshScatteringInstanceDataMode_None",
"MeshScatteringInstanceDataMode_Normal",
"MeshScatteringInstanceDataMode_NormalAndColor"
]

var MeshScatteringOrientationMode = [
"MeshScatteringOrientationMode_Horizontal",
"MeshScatteringOrientationMode_LeanToTerrain",
"MeshScatteringOrientationMode_SkewToTerrain"
]

var MeshScatteringRotationMode = [
"MeshScatteringRotationMode_Random",
"MeshScatteringRotationMode_TowardsSlope",
"MeshScatteringRotationMode_Fixed"
]

var MeshSubsetCategory = [
"MeshSubsetCategory_Opaque",
"MeshSubsetCategory_Transparent",
"MeshSubsetCategory_TransparentDecal",
"MeshSubsetCategory_ZOnly",
"MeshSubsetCategoryCount"
]

var MeshSubsetCategoryFlags = [
"MeshSubsetCategoryFlags_All", "0x3f",
"MeshSubsetCategoryFlags_DynamicEnvmap", "0x10",
"MeshSubsetCategoryFlags_Normal", "7",
"MeshSubsetCategoryFlags_Opaque", "1",
"MeshSubsetCategoryFlags_PlanarReflection", "0x20",
"MeshSubsetCategoryFlags_Transparent", "2",
"MeshSubsetCategoryFlags_TransparentDecal", "4",
"MeshSubsetCategoryFlags_ZOnly", "8"
]

var MeshType = [
"MeshType_Rigid",
"MeshType_Skinned",
"MeshType_Composite"
]

var MessageReciever = [
"MrAll",
"MrTeam",
"MrTeamAndSquad",
"MrPlayer"
]

var MinimapIconInteractionConcept = [
"MinimapIconInteractionConcept_None",
"MinimapIconInteractionConcept_SelectSpawnPoint",
"MinimapIconInteractionConcept_RemoveOrder",
"MinimapIconInteractionConcept_AttackDefendCapturePoint"
]

var MipmapFilterMode = [
"MipmapFilterMode_Box",
"MipmapFilterMode_Renormalize",
"MipmapFilterMode_Poisson13",
"MipmapFilterMode_Poisson13Clamped"
]

var MixerValueAccumulateMode = [
"MixerValueAccumulateMode_None",
"MixerValueAccumulateMode_Min",
"MixerValueAccumulateMode_Max"
]

var MixerValueUI = [
"MixerValueUI_None",
"MixerValueUI_Fader",
"MixerValueUI_Knob",
"MixerValueUI_EditBox"
]

var MixerValueUIOrientation = [
"MixerValueUIOrientation_Horizontal",
"MixerValueUIOrientation_Vertical"
]

var MixerValueUIScale = [
"MixerValueUIScale_Linear",
"MixerValueUIScale_Logarithmic"
]

var MixGroupPropertyType = [
"MixGroupPropertyType_Gain",
"MixGroupPropertyType_Pitch",
"MixGroupPropertyTypeCount"
]

var MixGroupState = [
"MixGroupState_Normal",
"MixGroupState_Mute",
"MixGroupState_Solo"
]

var ModelAnimationTransformType = [
"ModelAnimationTransformType_World",
"ModelAnimationTransformType_Model",
"ModelAnimationTransformType_Local"
]

var ModelAnimationUpdateOrder = [
"ModelAnimationUpdateOrder_PostAnimation", "0",
"ModelAnimationUpdateOrder_PreFrame", "1",
"ModelAnimationUpdateOrder_PreInput", "1"
]

var ModifierAxis = [
"maLeft",
"maUp",
"maForward"
]

var ModifierEuler = [
"Roll",
"Pitch",
"Yaw",
"Trans"
]

var NotifyType = [
"NotifyPersonal",
"NotifyGeneral",
"NotifyConsole",
"NotityTooltip",
"NotifyCount"
]

var NumberGeneratorMode = [
"NumberGeneratorMode_RandomUniform"
]

var ObjectiveType = [
"OTPrimary",
"OTTactical",
"OTChildMisson"
]

var OnlineEnvironment = [
"OnlineEnvironment_Development",
"OnlineEnvironment_Test",
"OnlineEnvironment_Certification",
"OnlineEnvironment_Production",
"OnlineEnvironment_Count"
]

var OrderType = [
"OrderType_None",
"OrderType_RequestHeal",
"OrderType_LetMeHeal",
"OrderType_RequestAmmo",
"OrderType_LetMeGiveAmmo",
"OrderType_LetMeRepair",
"OrderType_RequestRepair",
"OrderType_RequestRide",
"OrderType_GoGoGo",
"OrderType_FollowMe",
"OrderType_Negative",
"OrderType_Sorry",
"OrderType_ThankYou",
"OrderType_RogerThat",
"OrderType_NeedBackup",
"OrderType_GetIn",
"OrderType_GetOut",
"OrderType_Attack",
"OrderType_Count"
]

var OutputTransformSource = [
"OutputTransformSource_Sound",
"OutputTransformSource_Listener",
"OutputTransformSource_Output"
]

var PackagingDetailLevel = [
"PackagingDetailLevel_Low",
"PackagingDetailLevel_Medium",
"PackagingDetailLevel_High",
"PackagingDetailLevel_Base",
"PackagingDetailLevel_Count"
]

var PartComponentConstants = [
"MaxHealthStateCount", "0x100"
]

var PathfindingReplayMode = [
"PathfindingReplayMode_Disabled",
"PathfindingReplayMode_Binary",
"PathfindingReplayMode_Text"
]

var PathfindingRepresentation = [
"PathfindingRepresentation_Ignore",
"PathfindingRepresentation_WalkableMesh",
"PathfindingRepresentation_ObstacleMesh",
"PathfindingRepresentation_ObstacleMeshAndThinSideLink",
"PathfindingRepresentation_BoundingBoxExclusion"
]

var PathfindingStreamAndConnect = [
"PathfindingStreamAndConnect_Grid",
"PathfindingStreamAndConnect_Manual"
]

var PerformanceProfilePlatform = [
"PPP_Win32",
"PPP_Xenon",
"PPP_PS3"
]

var PersistenceGameType = [
"PersistenceGameType_Singleplayer",
"PersistenceGameType_Cooperative",
"PersistenceGameType_Multiplayer",
"PersistenceGameType_Count"
]

var PersistentValueDataKind = [
"PersistentValueDataKind_Raw",
"PersistentValueDataKind_Seconds",
"PersistentValueDataKind_Minutes",
"PersistentValueDataKind_Hours",
"PersistentValueDataKind_Percent"
]

var PersistentValueDataType = [
"PersistentValueDataType_Decimal",
"PersistentValueDataType_Integer",
"PersistentValueDataType_String",
"PersistentValueDataType_HighPrecisionDecimal"
]

var PersistentValueHistoryType = [
"PersistentValueHistoryType_None",
"PersistentValueHistoryType_Delta",
"PersistentValueHistoryType_DeltaAndAbsolute",
"PersistentValueHistoryType_HistoryOnly"
]

var PersistentValueType = [
"PersistentValueType_Set",
"PersistentValueType_High",
"PersistentValueType_Low",
"PersistentValueType_Increment",
"PersistentValueType_Decrement"
]

var PersonViewMode = [
"PersonViewMode_FirstPerson",
"PersonViewMode_ThirdPerson"
]

var PhysicsWorldType = [
"PhysicsWorldType_Client", "0",
"PhysicsWorldType_ClientEffect", "1",
"PhysicsWorldType_Server", "2",
"PhysicsWorldType_Unknown", "100"
]

var PickupPlayerEnum = [
"PickupPlayerEnum_None",
"PickupPlayerEnum_Both",
"PickupPlayerEnum_HumanOnly",
"PickupPlayerEnum_AIOnly"
]

var PixelNormalSpace = [
"PnsTangent"
]

var PlayerKilledWeaponType = [
"PlayerKilledWeaponType_Unknown",
"PlayerKilledWeaponType_HandheldWeapon",
"PlayerKilledWeaponType_Vehicle",
"PlayerKilledWeaponType_Count"
]

var PlayerRole = [
"PRSquadLeader",
"PRSquadMember",
"PRUnknown"
]

var PlayerSpawnType = [
"PlayerSpawnType_HumanPlayer",
"PlayerSpawnType_AiPlayer",
"PlayerSpawnType_Actor"
]

var PointCloudAttributeQuantization = [
"PointCloudAttributeQuantization_s5e5",
"PointCloudAttributeQuantization_s7e5",
"PointCloudAttributeQuantization_s10e5",
"PointCloudAttributeQuantization_s16e7",
"PointCloudAttributeQuantization_None",
"PointCloudAttributeQuantization_Count"
]

var PointCloudAttributeUsage = [
"PointCloudAttributeUsage_Position",
"PointCloudAttributeUsage_Normal",
"PointCloudAttributeUsage_Tangent",
"PointCloudAttributeUsage_Binormal",
"PointCloudAttributeUsage_Count"
]

var PolynomialOperation = [
"Multiplication",
"Addition",
"Subtraction"
]

var PoseTransition = [
"PTStandToProne",
"PTStandToCrouch",
"PTCrouchToStand",
"PTCrouchToProne",
"PTProneToStand",
"PTProneToCrouch"
]

var PoseType = [
"PoseType_Current",
"PoseType_Stand",
"PoseType_Crouch"
]

var PostProcessDebugMode = [
"PpdmDefault",
"PpdmBloom",
"PpdmBloomStep",
"PpdmDofBlur",
"PpdmBlur",
"PpdmBlurStep",
"PpdmDepth"
]

var PresenceRequest = [
"PresenceRequest_Invalid",
"PresenceRequest_DownloadBlob",
"PresenceRequest_UploadBlob",
"PresenceRequest_DownloadUserSettings",
"PresenceRequest_UploadUserSettings",
"PresenceRequest_InitializeCommerceService",
"PresenceRequest_ShutDownCommerceService",
"PresenceRequest_EnumerateCommerceContent",
"PresenceRequest_PurchaseCommerceContent",
"PresenceRequest_PurchaseConsumableCommerceContent",
"PresenceRequest_ConsumeCommerceContent",
"PresenceRequest_GetCommerceContentImage",
"PresenceRequest_CheckOnlinePass",
"PresenceRequest_PurchaseOnlinePass",
"PresenceRequest_RedeemOnlinePassCode",
"PresenceRequest_SetOverlayUrl",
"PresenceRequest_ListEntitlements",
"PresenceRequest_GrantEntitlement",
"PresenceRequest_GetFriends",
"PresenceRequest_InviteFriend",
"PresenceRequest_RemoveFriend",
"PresenceRequest_HttpGet",
"PresenceRequest_JoinGameByOnlineNativeData",
"PresenceRequest_DownloadUpdate",
"PresenceRequest_SendMessage",
"PresenceRequest_CreatePlaygroup",
"PresenceRequest_JoinPlaygroup",
"PresenceRequest_JoinPlaygroupByUsername",
"PresenceRequest_JoinPlaygroupByOnlineNativeData",
"PresenceRequest_JoinPlaygroupByInviteToken",
"PresenceRequest_SetPlaygroupAttribute",
"PresenceRequest_LeavePlaygroup",
"PresenceRequest_DownloadStatistics",
"PresenceRequest_GetLeaderboard",
"PresenceRequest_UploadProgression",
"PresenceRequest_SendInvite",
"PresenceRequest_KickFromPlaygroup",
"PresenceRequest_ViewInvite",
"PresenceRequest_SendInviteToLiveParty",
"PresenceRequest_SetUserInfoAttribute",
"PresenceRequest_GetServerBrowserSnapshot",
"PresenceRequest_GetGamesWithFriends",
"PresenceRequest_GetGamesByServerId",
"PresenceRequest_GetDetailedServerInfo",
"PresenceRequest_UnlockAchievements",
"PresenceRequest_RspGetServers",
"PresenceRequest_RspGetServerDetails",
"PresenceRequest_RspUpdateServerSettings",
"PresenceRequest_RspGetConfig",
"PresenceRequest_RspRestartServer",
"PresenceRequest_RspUpdatePreset",
"PresenceRequest_RspUpdateMapRotation",
"PresenceRequest_RspUpdateAdminUser",
"PresenceRequest_RspUpdateBannedUser",
"PresenceRequest_RspUpdateVipUser",
"PresenceRequest_RspUpdateServerBanner",
"PresenceRequest_ReportServerBanner",
"PresenceRequest_GetUserId",
"PresenceRequest_VerifyGrantEntitlement",
"PresenceRequest_ResetStatistics",
"PresenceRequest_GetXPromoInformation",
"PresenceRequest_GetContentInformation",
"PresenceRequest_DownloadPromoItem",
"PresenceRequest_Count"
]

var PrimitiveType = [
"PrimitiveType_LineList", "1",
"PrimitiveType_LineStrip", "2",
"PrimitiveType_PointList", "0",
"PrimitiveType_QuadList", "7",
"PrimitiveType_TriangleList", "3",
"PrimitiveType_TriangleStrip", "5",
"PrimitiveType_XenonRectList", "8"
]

var ProcessorType = [
"PtBaseEmitter",
"PtSpawnRate",
"PtSpawnSpeed",
"PtSpawnPosition",
"PtSpawnDirection",
"PtSpawnSize",
"PtSpawnAnimation",
"PtSpawnAnimationFrame",
"PtSpawnRotation",
"PtSpawnOrientation",
"PtSpawnRotationSpeed",
"PtUpdatePosition",
"PtUpdateAge",
"PtTurbulance",
"PtGravity",
"PtLocalForce",
"PtAirResistance",
"PtUpdateLinearVelocity",
"PtUpdateOrientation",
"PtEmitter",
"PtUpdateColor",
"PtUpdateColorLeaf",
"PtUpdateTransparency",
"PtUpdateTextureCoords",
"PtUpdateRotation",
"PtUpdateSizeX",
"PtUpdateSizeY",
"PtUpdateSizeZ",
"PtUpdateSize",
"PtUpdateAlphaLevelMin",
"PtUpdateAlphaLevelMax",
"PtUpdateAlphaLevelScale",
"PtUpdateClipScale",
"PtUpdateCameraProximity",
"ProcessorTypeCount"
]

var ProfileOptionsType = [
"GstAudio",
"GstRender",
"GstInput",
"GstAI",
"GstGameplay",
"GstPlayerProfile",
"GstPersistence",
"GstBinary",
"GstKeyBinding",
"GstCount"
]

var ProgressType = [
"PT_CapturePointCooldown"
]

var PropellerType = [
"PropellerType_Regular",
"PropellerType_Rotor"
]

var ProximityObjectType = [
"PotProximityDisabled",
"PotVaultableLow",
"PotVaultableHigh",
"PotSupportedShooting",
"PotInteractWith",
"PotBashable"
]

var QualityLevel = [
"QualityLevel_Low",
"QualityLevel_Medium",
"QualityLevel_High",
"QualityLevel_Ultra"
]

var QuickThrowTypeEnum = [
"QttHand",
"QttBag"
]

var RasterNodeUsage = [
"RasterNodeUsage_Default",
"RasterNodeUsage_Disabled",
"RasterNodeUsage_Persistent",
"RasterNodeUsage_PersistentDedicatedServer",
"RasterNodeUsage_Pruned"
]

var RasterTreeBuildMode = [
"RasterTreeBuildMode_InlinePersistentStreamRest",
"RasterTreeBuildMode_InlinePersistentRemoveRest",
"RasterTreeBuildMode_InlineAll"
]

var ReadinessLevel = [
"RLPatrol",
"RLReady",
"RLCombat",
"RLNone"
]

var ReadinessState = [
"RSPatrol",
"RSReady",
"RSCombat"
]

var Realm = [
"Realm_Client",
"Realm_Server",
"Realm_ClientAndServer",
"Realm_None",
"Realm_Pipeline"
]

var ReloadBehavior = [
"RbInCover",
"RbStationary",
"RbAnywhere"
]

var ReloadLogic = [
"rlWeaponSwitchCancelsUnfinishedReload",
"rlReloadUnaffectedByWeaponSwitch"
]

var ReloadType = [
"rtSingleBullet",
"rtMagazine",
"rtMagazineWithPossibleShorterReload"
]

var RenderBlendMode = [
"RenderBlendMode_Zero",
"RenderBlendMode_One",
"RenderBlendMode_SourceColor",
"RenderBlendMode_InvSourceColor",
"RenderBlendMode_SourceAlpha",
"RenderBlendMode_InvSourceAlpha",
"RenderBlendMode_DestColor",
"RenderBlendMode_InvDestColor",
"RenderBlendMode_DestAlpha",
"RenderBlendMode_InvDestAlpha",
"RenderBlendMode_SourceAlphaSaturate"
]

var RenderBlendOp = [
"RenderBlendOp_Add",
"RenderBlendOp_Subtract",
"RenderBlendOp_RevSubtract",
"RenderBlendOp_Min",
"RenderBlendOp_Max"
]

var RenderClearMask = [
"RenderClearMask_All", "0x3ff",
"RenderClearMask_Color", "0xff",
"RenderClearMask_Color0", "1",
"RenderClearMask_Color1", "2",
"RenderClearMask_Color2", "4",
"RenderClearMask_Color3", "8",
"RenderClearMask_Color4", "0x10",
"RenderClearMask_Color5", "0x20",
"RenderClearMask_Color6", "0x40",
"RenderClearMask_Color7", "0x80",
"RenderClearMask_Depth", "0x100",
"RenderClearMask_Stencil", "0x200"
]

var RenderCullMode = [
"RenderCullMode_None",
"RenderCullMode_Front",
"RenderCullMode_Back"
]

var RenderDepthMode = [
"RenderDepthMode_Disabled",
"RenderDepthMode_ReadOnly",
"RenderDepthMode_ReadAndWrite",
"RenderDepthMode_WriteOnly"
]

var RenderFillMode = [
"RenderFillMode_Solid",
"RenderFillMode_Wireframe"
]

var RenderVolumeTransformType = [
"RenderVolumeTransformType_WorldSpaceInv",
"RenderVolumeTransformType_WorldSpaceNoScale"
]

var RenderWriteMask = [
"RenderWriteMask_All", "15",
"RenderWriteMask_Alpha", "8",
"RenderWriteMask_Blue", "4",
"RenderWriteMask_Color", "7",
"RenderWriteMask_Green", "2",
"RenderWriteMask_None", "0",
"RenderWriteMask_Red", "1"
]

var ResourceBundleKind = [
"ResourceBundleKind_AlwaysLoaded",
"ResourceBundleKind_GlobalPackage",
"ResourceBundleKind_AssetPackage",
"ResourceBundleKind_SubLevelPackage",
"ResourceBundleKind_BlueprintBundle"
]

var RichPresencePropertyType = [
"RichPresencePropertyType_Float",
"RichPresencePropertyType_Integer",
"RichPresencePropertyType_LongFloat",
"RichPresencePropertyType_LongInteger"
]

var RigidBodyCollisionLayer = [
"RigidBodyCollisionLayer_Invalid",
"RigidBodyCollisionLayer_VehicleLayer",
"RigidBodyCollisionLayer_VehicleAndCharacterCollisionLayer",
"RigidBodyCollisionLayer_Size"
]

var RigidBodyMotionType = [
"RigidBodyMotionType_Invalid",
"RigidBodyMotionType_Fixed",
"RigidBodyMotionType_Keyframed",
"RigidBodyMotionType_Dynamic",
"RigidBodyMotionType_Size"
]

var RigidBodyQualityType = [
"RigidBodyQualityType_Invalid",
"RigidBodyQualityType_Fixed",
"RigidBodyQualityType_Debris",
"RigidBodyQualityType_DebrisSimpleToi",
"RigidBodyQualityType_Moving",
"RigidBodyQualityType_Critical",
"RigidBodyQualityType_Size"
]

var RigidBodyType = [
"RBTypeCollision",
"RBTypeDetail",
"RBTypeCharacter",
"RBTypeRaycast",
"RBTypeGroup",
"RBTypeSize"
]

var RotationAxis = [
"raX",
"raY",
"raZ"
]

var RotationAxisEnum = [
"RALeft",
"RAUp",
"RADof"
]

var RotationChannel = [
"RotationChannel_Pitch",
"RotationChannel_Yaw",
"RotationChannel_Roll"
]

var RouteChannel = [
"RouteChannel_0",
"RouteChannel_1",
"RouteChannel_2",
"RouteChannel_3",
"RouteChannel_4",
"RouteChannel_5",
"RouteChannel_6",
"RouteChannel_7",
"RouteChannel_8",
"RouteChannel_9",
"RouteChannel_10",
"RouteChannel_11",
"RouteChannel_12",
"RouteChannel_13",
"RouteChannel_14",
"RouteChannel_15",
"RouteChannel_16",
"RouteChannel_17",
"RouteChannel_18",
"RouteChannel_19",
"RouteChannel_21",
"RouteChannel_22",
"RouteChannel_23",
"RouteChannel_24",
"RouteChannel_25",
"RouteChannel_26",
"RouteChannel_27",
"RouteChannel_28",
"RouteChannel_29",
"RouteChannel_30",
"RouteChannel_31",
"RouteChannel_32",
"RouteChannel_33",
"RouteChannel_34",
"RouteChannel_35",
"RouteChannel_36",
"RouteChannel_37",
"RouteChannel_38",
"RouteChannel_39",
"RouteChannel_40",
"RouteChannel_41",
"RouteChannel_42",
"RouteChannel_43",
"RouteChannel_44",
"RouteChannel_45",
"RouteChannel_46",
"RouteChannel_47",
"RouteChannel_48",
"RouteChannel_49",
"RouteChannel_50",
"RouteChannel_51",
"RouteChannel_52",
"RouteChannel_53",
"RouteChannel_54",
"RouteChannel_55",
"RouteChannel_56",
"RouteChannel_57",
"RouteChannel_58",
"RouteChannel_59",
"RouteChannel_60",
"RouteChannel_61",
"RouteChannel_62",
"RouteChannel_63"
]

var RouteType = [
"RouteStop",
"RouteCircular"
]

var SampleCenter = [
"SampleCenter_Center",
"SampleCenter_TopLeft"
]

var ScoreboardPosition = [
"ScoreboardPosition_FirstPlace",
"ScoreboardPosition_SecondPlace",
"ScoreboardPosition_ThirdPlace",
"ScoreboardPosition_FourthPlace",
"ScoreboardPosition_FifthPlace",
"ScoreboardPosition_LAST_ITEM"
]

var ScoringBucket = [
"ScoringBucket_General",
"ScoringBucket_Teamwork",
"ScoringBucket_Bonus",
"ScoringBucket_Squad",
"ScoringBucket_Objective",
"ScoringBucket_Award",
"ScoringBucket_VehicleMBT",
"ScoringBucket_VehicleIFV",
"ScoringBucket_VehicleAA",
"ScoringBucket_VehicleAttackHeli",
"ScoringBucket_VehicleScoutHeli",
"ScoringBucket_VehicleJet",
"ScoringBucket_KitAssault",
"ScoringBucket_KitEngineer",
"ScoringBucket_KitRecon",
"ScoringBucket_KitSupport",
"ScoringBucket_SinglePlayer",
"ScoringBucket_Cooperation",
"ScoringBucket_CoopIndivid",
"ScoringBucket_Unlock",
"ScoringBucket_SpecialKit",
"ScoringBucket_VehicleLBT",
"ScoringBucket_VehicleArtillery",
"ScoringBucket_LastScoringBucketItem"
]

var ScoringBucketType = [
"ScoringBucketType_Disabled",
"ScoringBucketType_Normal",
"ScoringBucketType_Vehicle",
"ScoringBucketType_Kit",
"ScoringBucketType_Count"
]

var ScoringVisibilityType = [
"ScoringVisibilityType_Major",
"ScoringVisibilityType_Minor",
"ScoringVisibilityType_Hidden"
]

var ScreenEffectFrameType = [
"ScreenEffectFrameType_FullFrame",
"ScreenEffectFrameType_SingleFramePart",
"ScreenEffectFrameType_SingleSquareFramePart"
]

var SecureReason = [
"SecureReason_Ok",
"SecureReason_WrongProtocolVersion",
"SecureReason_WrongTitleVersion",
"SecureReason_ServerFull",
"SecureReason_KickedOut",
"SecureReason_Banned",
"SecureReason_GenericError",
"SecureReason_WrongPassword",
"SecureReason_KickedOutDemoOver",
"SecureReason_RankRestricted",
"SecureReason_ConfigurationNotAllowed",
"SecureReason_ServerReclaimed",
"SecureReason_MissingContent",
"SecureReason_NotVerified",
"SecureReason_TimedOut",
"SecureReason_ConnectFailed",
"SecureReason_NoReply",
"SecureReason_AcceptFailed",
"SecureReason_MismatchingContent",
"SecureReason_InteractivityTimeout",
"SecureReason_KickedFromQueue",
"SecureReason_TeamKills",
"SecureReason_KickedByAdmin",
"SecureReason_KickedViaPunkBuster",
"SecureReason_KickedOutServerFull",
"SecureReason_ESportsMatchStarting",
"SecureReason_NotInESportsRosters",
"SecureReason_ESportsMatchEnding",
"SecureReason_VirtualServerExpired",
"SecureReason_VirtualServerRecreate",
"SecureReason_ESportsTeamFull",
"SecureReason_ESportsMatchAborted",
"SecureReason_ESportsMatchWalkover",
"SecureReason_ESportsMatchWarmupTimedOut",
"SecureReason_NotAllowedToSpectate",
"SecureReason_NoSpectateSlotAvailable",
"SecureReason_InvalidSpectateJoin",
"SecureReason_PremiumStatusMismatch"
]

var ServerBackendAttribute = [
"ServerBackendAttribute_Level",
"ServerBackendAttribute_GameMode",
"ServerBackendAttribute_LevelLocation",
"ServerBackendAttribute_Mod",
"ServerBackendAttribute_Public",
"ServerBackendAttribute_Vip",
"ServerBackendAttribute_Preset",
"ServerBackendAttribute_Settings1",
"ServerBackendAttribute_Settings2",
"ServerBackendAttribute_MapSettings",
"ServerBackendAttribute_Maps1",
"ServerBackendAttribute_Maps2",
"ServerBackendAttribute_Description1",
"ServerBackendAttribute_Description2",
"ServerBackendAttribute_Admins1",
"ServerBackendAttribute_Admins2",
"ServerBackendAttribute_ReservedSlots1",
"ServerBackendAttribute_ReservedSlots2",
"ServerBackendAttribute_Message",
"ServerBackendAttribute_BannerUrl",
"ServerBackendAttribute_Mission",
"ServerBackendAttribute_Difficulty",
"ServerBackendAttribute_PingSite",
"ServerBackendAttribute_MapsInfo",
"ServerBackendAttribute_Owner",
"ServerBackendAttribute_MatchId",
"ServerBackendAttribute_RosterA1",
"ServerBackendAttribute_RosterA2",
"ServerBackendAttribute_RosterA3",
"ServerBackendAttribute_RosterA4",
"ServerBackendAttribute_RosterA5",
"ServerBackendAttribute_RosterA6",
"ServerBackendAttribute_RosterA7",
"ServerBackendAttribute_RosterA8",
"ServerBackendAttribute_RosterA9",
"ServerBackendAttribute_RosterB1",
"ServerBackendAttribute_RosterB2",
"ServerBackendAttribute_RosterB3",
"ServerBackendAttribute_RosterB4",
"ServerBackendAttribute_RosterB5",
"ServerBackendAttribute_RosterB6",
"ServerBackendAttribute_RosterB7",
"ServerBackendAttribute_RosterB8",
"ServerBackendAttribute_RosterB9",
"ServerBackendAttribute_Spectators",
"ServerBackendAttribute_ExpirationDate",
"ServerBackendAttribute_MatchState",
"ServerBackendAttribute_PremiumStatus",
"ServerBackendAttribute_Count"
]

var ServerMapSequencerEventType = [
"ServerMapSequencerEventType_Add",
"ServerMapSequencerEventType_Remove",
"ServerMapSequencerEventType_Clear",
"ServerMapSequencerEventType_List",
"ServerMapSequencerEventType_Load",
"ServerMapSequencerEventType_Save",
"ServerMapSequencerEventType_SetNextMapIndex",
"ServerMapSequencerEventType_GetMapIndices",
"ServerMapSequencerEventType_GetRounds",
"ServerMapSequencerEventType_RunNextRound",
"ServerMapSequencerEventType_RestartRound",
"ServerMapSequencerEventType_AvailableMaps"
]

var ServerUnlockListEventType = [
"ServerUnlockListEventType_Add",
"ServerUnlockListEventType_Remove",
"ServerUnlockListEventType_Clear",
"ServerUnlockListEventType_List",
"ServerUnlockListEventType_Load",
"ServerUnlockListEventType_Save",
"ServerUnlockListEventType_GetMode",
"ServerUnlockListEventType_SetMode",
"ServerUnlockListEventType_SetFromBitmap"
]

var ServerUnlockSystemType = [
"ServerUnlockSystemType_All",
"ServerUnlockSystemType_Common",
"ServerUnlockSystemType_None",
"ServerUnlockSystemType_FromStats",
"ServerUnlockSystemType_FromWhiteList",
"ServerUnlockSystemType_FromBlackList",
"ServerUnlockSystemType_Count"
]

var ShaderBlendMode = [
"ShaderBlendMode_Lerp",
"ShaderBlendMode_Additive",
"ShaderBlendMode_Multiply",
"ShaderBlendMode_LerpPremultiplied",
"ShaderBlendMode_DecalLerpNoSpec",
"ShaderBlendMode_DecalLerpNormal",
"ShaderBlendMode_DecalLerpNormalMultiplyDiffuse",
"ShaderBlendMode_DecalLerpDiffuse",
"ShaderBlendMode_DecalLerpDiffuseNoSpec"
]

var ShaderBranchMethod = [
"SbmStatic",
"SbmFlat",
"SbmDynamicIfElse",
"SbmDynamicIfTrue",
"SbmDynamicIfFalse"
]

var ShaderComparisonOperator = [
"ScoEquals",
"ScoNotEquals",
"ScoLess",
"ScoLessEquals",
"ScoGreater",
"ScoGreaterEquals"
]

var ShaderConstantFunction = [
"ShaderConstantFunction_ViewMatrix",
"ShaderConstantFunction_ViewProjMatrix",
"ShaderConstantFunction_WorldViewMatrix",
"ShaderConstantFunction_WorldViewProjMatrix",
"ShaderConstantFunction_CrViewProjMatrix",
"ShaderConstantFunction_CrWorldViewProjMatrix",
"ShaderConstantFunction_CameraPos",
"ShaderConstantFunction_PrevViewProjMatrix",
"ShaderConstantFunction_PrevWorldViewProjMatrix",
"ShaderConstantFunction_WorldMatrix",
"ShaderConstantFunction_PrevWorldMatrix",
"ShaderConstantFunction_BoneVectors",
"ShaderConstantFunction_PrevBoneVectors",
"ShaderConstantFunction_LightProbeShR",
"ShaderConstantFunction_LightProbeShG",
"ShaderConstantFunction_LightProbeShB",
"ShaderConstantFunction_LightProbeShO",
"ShaderConstantFunction_LightMapUvTransform",
"ShaderConstantFunction_LightMapUvTranslation",
"ShaderConstantFunction_LightMapIrradianceTexture",
"ShaderConstantFunction_LightMapIrradianceChromaTexture",
"ShaderConstantFunction_LightMapIrradianceLumaTexture",
"ShaderConstantFunction_LightMapDirectionTexture",
"ShaderConstantFunction_LightMapSkyVisibilityTexture",
"ShaderConstantFunction_DepthBufferTexture",
"ShaderConstantFunction_ViewportZMinMaxKzKw",
"ShaderConstantFunction_Time",
"ShaderConstantFunction_ScreenSize",
"ShaderConstantFunction_OutdoorLightDir",
"ShaderConstantFunction_OutdoorLightHemisphereDir",
"ShaderConstantFunction_OutdoorLightKeyColor",
"ShaderConstantFunction_OutdoorLightKeySpecularColorAndHemisphereVisibility",
"ShaderConstantFunction_OutdoorLightTopColor",
"ShaderConstantFunction_OutdoorLightBottomColor",
"ShaderConstantFunction_OutdoorLightShadowTransform",
"ShaderConstantFunction_OutdoorLightShadowmapSizeAndInvSize",
"ShaderConstantFunction_OutdoorLightShadowmapTexture",
"ShaderConstantFunction_OutdoorLightTransparencyShadowmapTexture",
"ShaderConstantFunction_OutdoorLightSkyEnvmap",
"ShaderConstantFunction_OutdoorLightDynamicEnvmap",
"ShaderConstantFunction_OutdoorLightTopColorEnvmap",
"ShaderConstantFunction_OutdoorLightBottomColorEnvmap",
"ShaderConstantFunction_OutdoorLightKeyColorEnvmap",
"ShaderConstantFunction_OutdoorLightSkyEnvmap8BitTexInvScale",
"ShaderConstantFunction_TransparentStartAndEndAndClamp",
"ShaderConstantFunction_BestFitNormalScaleTexture",
"ShaderConstantFunction_SceneTexture",
"ShaderConstantFunction_ColorScale",
"ShaderConstantFunction_DebugNonFiniteColor",
"ShaderConstantFunction_XenonInstancingIndexCount",
"ShaderConstantFunction_Ps3ClipPlane",
"ShaderConstantFunction_DxVectorBufferOffsets",
"ShaderConstantFunctionCount"
]

var ShaderConstantSystemTexture = [
"ShaderConstantSystemTexture_DepthBufferTexture",
"ShaderConstantSystemTextureCount"
]

var ShaderDepthBiasGroup = [
"ShaderDepthBiasGroup_Default",
"ShaderDepthBiasGroup_Decal",
"ShaderDepthBiasGroup_EmitterOcclusion",
"ShaderDepthBiasGroup_EdgeModel",
"ShaderDepthBiasGroup_TerrainDecal",
"ShaderDepthBiasGroup_TerrainDecalZPass",
"ShaderDepthBiasGroup_Shadow16Bit",
"ShaderDepthBiasGroup_Shadow24Bit",
"ShaderDepthBiasGroup_ZPass",
"ShaderDepthBiasGroup_Emissive",
"ShaderDepthBiasGroupCount"
]

var ShaderGBufferLayout = [
"ShaderGBufferLayout_Default",
"ShaderGBufferLayout_Test"
]

var ShaderGeometrySpace = [
"ShaderGeometrySpace_Object",
"ShaderGeometrySpace_ObjectScaled",
"ShaderGeometrySpace_World",
"ShaderGeometrySpace_Screen"
]

var ShaderInstancingMethod = [
"ShaderInstancingMethod_None",
"ShaderInstancingMethod_ObjectTransform4x3Half",
"ShaderInstancingMethod_ObjectTransform4x3InstanceData4x1Half",
"ShaderInstancingMethod_ObjectTransform4x3InstanceData4x2Half",
"ShaderInstancingMethod_WorldTransform4x3Float",
"ShaderInstancingMethod_ObjectTranslationScaleHalf",
"ShaderInstancingMethod_ObjectTranslationScaleHalfInstanceData4x1Half",
"ShaderInstancingMethod_ObjectTranslationScaleHalfInstanceData4x2Half",
"ShaderInstancingMethod_VertexAnimation",
"ShaderInstancingMethod_DxBuffer",
"ShaderInstancingMethodCount"
]

var ShaderInterpolationType = [
"ShaderInterpolationType_Linear",
"ShaderInterpolationType_Centroid",
"ShaderInterpolationType_NoInterpolation",
"ShaderInterpolationType_NoPerspective",
"ShaderInterpolationType_Sample",
"ShaderInterpolationType_Count"
]

var ShaderLightingModel = [
"ShaderLightingModel_Standard",
"ShaderLightingModel_Metallic",
"ShaderLightingModel_Skin",
"ShaderLightingModel_DynamicEnvmap",
"ShaderLightingModel_Translucent"
]

var ShaderObjectLighting = [
"ShaderObjectLighting_None",
"ShaderObjectLighting_LightProbe",
"ShaderObjectLighting_LightMap"
]

var ShaderParameterType = [
"ShaderParameterType_Bool",
"ShaderParameterType_Int",
"ShaderParameterType_Scalar",
"ShaderParameterType_Vec2",
"ShaderParameterType_Vec3",
"ShaderParameterType_Vec4",
"ShaderParameterType_Color",
"ShaderParameterType_TextureSlice",
"ShaderParameterTypeCount"
]

var ShaderPortType = [
"SptBool",
"SptInteger",
"SptScalar",
"SptVec2",
"SptVec3",
"SptVec4",
"SptColor"
]

var ShaderPositionSpace = [
"ShaderPositionSpace_Object",
"ShaderPositionSpace_World"
]

var ShaderProgram = [
"ShaderProgram_DebugRender_Font2d",
"ShaderProgram_DebugRender_FontShadow2d",
"ShaderProgram_DebugRender_Color2d",
"ShaderProgram_DebugRender_Color3d",
"ShaderProgram_DebugRender_Lit3d",
"ShaderProgram_DebugRender_LitGrid3d",
"ShaderProgram_SimpleWhite",
"ShaderProgram_MaterialID",
"ShaderProgram_DownsampleQuarter",
"ShaderProgram_DownsampleQuarterZ",
"ShaderProgram_DownsampleHalf",
"ShaderProgram_DownsampleDepthHalfSingleSample",
"ShaderProgram_DownsampleHalfGrayscaleLog",
"ShaderProgram_DownsampleCubeHalfPoisson13",
"ShaderProgram_DownsampleCubeHalfPoisson13Clamped",
"ShaderProgram_SeperableFilter",
"ShaderProgram_GaussianBlurRgb15HCube",
"ShaderProgram_GaussianBlurRgb15VCube",
"ShaderProgram_FastGaussian9H",
"ShaderProgram_FastGaussian9V",
"ShaderProgram_GreyscaleGaussian9H",
"ShaderProgram_GreyscaleGaussian9V",
"ShaderProgram_CosineBlurRgbHCube",
"ShaderProgram_CosineBlurRgbVCube",
"ShaderProgram_GaussianBlurRgba15HCube",
"ShaderProgram_GaussianBlurRgba15VCube",
"ShaderProgram_CosineBlurRgbaHCube",
"ShaderProgram_CosineBlurRgbaVCube",
"ShaderProgram_Tex2d",
"ShaderProgram_Tex2dConstantAlpha",
"ShaderProgram_Tex2dSaturateAlpha",
"ShaderProgram_Tex2dAlpha",
"ShaderProgram_Tex2dAlphaOverlayAdd",
"ShaderProgram_Tex2dAlphaOverlayLerp",
"ShaderProgram_Tex2dPow",
"ShaderProgram_Tex2dPowAlpha",
"ShaderProgram_Tex2dMrt2",
"ShaderProgram_Tex2dMrt3",
"ShaderProgram_Tex2dMrt4",
"ShaderProgram_Tex2dGrayscaleLog",
"ShaderProgram_Tex3d",
"ShaderProgram_TexCube",
"ShaderProgram_TexCubeAlpha",
"ShaderProgram_TexCubeAlphaOverlayAdd",
"ShaderProgram_TexCubeAlphaOverlayLerp",
"ShaderProgram_Color",
"ShaderProgram_Tonemap",
"ShaderProgram_ColorGrade",
"ShaderProgram_Dof",
"ShaderProgram_UnprojectDepthBuffer",
"ShaderProgram_UnprojectDepthBufferHalf",
"ShaderProgram_UnprojectDepthBufferMsaa",
"ShaderProgram_SingleDepthSampleMsaa",
"ShaderProgram_MaxDepthSampleMsaa",
"ShaderProgram_TexYCrCb",
"ShaderProgram_CombineTextures2",
"ShaderProgram_CombineTextures3",
"ShaderProgram_CombineTextures4",
"ShaderProgram_CombineTextures5",
"ShaderProgram_CombineTextures6",
"ShaderProgram_CombineTextures2Bilinear",
"ShaderProgram_CombineTextures3Bilinear",
"ShaderProgram_CombineTextures4Bilinear",
"ShaderProgram_CombineTextures5Bilinear",
"ShaderProgram_CombineTextures6Bilinear",
"ShaderProgram_CombineOpaqueAndTrans2d",
"ShaderProgram_CombineOpaqueAndTransCube",
"ShaderProgram_CombineOpaqueAndTrans2dSpecial",
"ShaderProgram_CombineOpaqueAndTransCubeSpecial",
"ShaderProgram_CrtHudFx",
"ShaderProgram_CrtAnalogLinkHudFx",
"ShaderProgram_RadialBlur",
"ShaderProgram_PoissonRadialBlur",
"ShaderProgram_ChromaticAberrationWithRadialBlend",
"ShaderProgram_FLIR",
"ShaderProgram_ColorTint",
"ShaderProgram_WriteZ",
"ShaderProgram_WriteHalfResZ",
"ShaderProgram_WriteHalfResZFat",
"ShaderProgram_WriteHalfResZAverage",
"ShaderProgram_LinearZ",
"ShaderProgram_ParticleVertexShadows",
"ShaderProgram_ParticleVertexShadowsAccum",
"ShaderProgram_ParticleVertexShadowsAccumBlend",
"ShaderProgram_HalfResUpsampleBilateral",
"ShaderProgram_HalfResUpsampleBilateralTiled",
"ShaderProgram_HalfResUpsampleBilinearTiled",
"ShaderProgram_HalfResCategorize",
"ShaderProgram_HalfResCategorizeDownsample",
"ShaderProgram_DigitalDistortion",
"ShaderProgram_MotionBlur",
"ShaderProgram_CalcVelocityFromZBuffer",
"ShaderProgram_FXAA",
"ShaderProgram_HorizonBasedAO",
"ShaderProgram_HorizonBasedAO_BlurPS",
"ShaderProgram_HorizonBasedAO_BlurCS",
"ShaderProgram_HorizonBasedAO_PackAODepth",
"ShaderProgram_HorizonBasedAO_CompositeTemporal",
"ShaderProgram_HorizonBasedAO_NoiseDetection",
"ShaderProgram_SSAO",
"ShaderProgram_SSAO_DilateDraw",
"ShaderProgram_LightTileDownsampleHalf",
"ShaderProgram_LightTileDownsampleHalfStage2",
"ShaderProgram_LightTileDownsampleHalfStage3",
"ShaderProgram_TiledLightVisibility_Point",
"ShaderProgram_TiledLightVisibility_Spot",
"ShaderProgram_TiledLightVisibility_Line",
"ShaderProgram_TiledLightVisibility_CalcTileFrustaData",
"ShaderProgram_DeferredGBufferSimpleFixup",
"ShaderProgram_MsaaClassify",
"ShaderProgram_DeferredPointLight",
"ShaderProgram_DeferredPointLightCS",
"ShaderProgram_DeferredPointLightTile",
"ShaderProgram_DeferredPointLightZ",
"ShaderProgram_DeferredLineLight",
"ShaderProgram_DeferredLineLightTile",
"ShaderProgram_DeferredSpotLight",
"ShaderProgram_DeferredSpotLightZ",
"ShaderProgram_DeferredConeLight",
"ShaderProgram_DeferredConeLightTile",
"ShaderProgram_DeferredOutdoorLight",
"ShaderProgram_DeferredOutdoorLightTile",
"ShaderProgram_DeferredShadow",
"ShaderProgram_Sky",
"ShaderProgram_HeightfieldTessellation",
"ShaderProgram_XenonMemCopy",
"ShaderProgram_XenonFastUntile",
"ShaderProgram_XenonFastDepthStencilFill",
"ShaderProgram_XenonFastDepthStencilFill_ZOnly",
"ShaderProgram_XenonJobEnable",
"ShaderProgram_Ui_Textured",
"ShaderProgram_Ui_Textured2",
"ShaderProgram_Ui_Textured3",
"ShaderProgram_Ui_Textured2GlobalColor",
"ShaderProgram_Ui_Scaleform_StripSolidColor",
"ShaderProgram_Ui_Scaleform_StripCxformTextureMultiply",
"ShaderProgram_Ui_Scaleform_StripCxformTexture",
"ShaderProgram_Ui_Scaleform_StripCxformGauraudNoAddAlpha",
"ShaderProgram_Ui_Scaleform_StripCxformGauraud",
"ShaderProgram_Ui_Scaleform_StripCxformGauraudTexture",
"ShaderProgram_Ui_Scaleform_StripCxform2Texture",
"ShaderProgram_Ui_Scaleform_StripCxformGauraudMultiply",
"ShaderProgram_Ui_Scaleform_StripCxformGauraudMultiplyNoAddAlpha",
"ShaderProgram_Ui_Scaleform_StripCxformGauraudMultiplyTexture",
"ShaderProgram_Ui_Scaleform_StripCxformMultiply2Texture",
"ShaderProgram_Ui_Scaleform_XY16iC32SolidColor",
"ShaderProgram_Ui_Scaleform_XY16iC32CxformTextureMultiply",
"ShaderProgram_Ui_Scaleform_XY16iC32CxformTexture",
"ShaderProgram_Ui_Scaleform_XY16iC32CxformGauraudNoAddAlpha",
"ShaderProgram_Ui_Scaleform_XY16iC32CxformGauraud",
"ShaderProgram_Ui_Scaleform_XY16iC32CxformGauraudTexture",
"ShaderProgram_Ui_Scaleform_XY16iC32Cxform2Texture",
"ShaderProgram_Ui_Scaleform_XY16iC32CxformGauraudMultiply",
"ShaderProgram_Ui_Scaleform_XY16iC32CxformGauraudMultiplyNoAddAlpha",
"ShaderProgram_Ui_Scaleform_XY16iC32CxformGauraudMultiplyTexture",
"ShaderProgram_Ui_Scaleform_XY16iC32CxformMultiply2Texture",
"ShaderProgram_Ui_Scaleform_XY16iCF32SolidColor",
"ShaderProgram_Ui_Scaleform_XY16iCF32CxformTextureMultiply",
"ShaderProgram_Ui_Scaleform_XY16iCF32CxformTexture",
"ShaderProgram_Ui_Scaleform_XY16iCF32CxformGauraudNoAddAlpha",
"ShaderProgram_Ui_Scaleform_XY16iCF32CxformGauraud",
"ShaderProgram_Ui_Scaleform_XY16iCF32CxformGauraudTexture",
"ShaderProgram_Ui_Scaleform_XY16iCF32Cxform2Texture",
"ShaderProgram_Ui_Scaleform_XY16iCF32CxformGauraudMultiply",
"ShaderProgram_Ui_Scaleform_XY16iCF32CxformGauraudMultiplyNoAddAlpha",
"ShaderProgram_Ui_Scaleform_XY16iCF32CxformGauraudMultiplyTexture",
"ShaderProgram_Ui_Scaleform_XY16iCF32CxformMultiply2Texture",
"ShaderProgram_Ui_Scaleform_XY16iCF32_T2SolidColor",
"ShaderProgram_Ui_Scaleform_XY16iCF32_T2CxformTextureMultiply",
"ShaderProgram_Ui_Scaleform_XY16iCF32_T2CxformTexture",
"ShaderProgram_Ui_Scaleform_XY16iCF32_T2CxformGauraudNoAddAlpha",
"ShaderProgram_Ui_Scaleform_XY16iCF32_T2CxformGauraud",
"ShaderProgram_Ui_Scaleform_XY16iCF32_T2CxformGauraudTexture",
"ShaderProgram_Ui_Scaleform_XY16iCF32_T2Cxform2Texture",
"ShaderProgram_Ui_Scaleform_XY16iCF32_T2CxformGauraudMultiply",
"ShaderProgram_Ui_Scaleform_XY16iCF32_T2CxformGauraudMultiplyNoAddAlpha",
"ShaderProgram_Ui_Scaleform_XY16iCF32_T2CxformGauraudMultiplyTexture",
"ShaderProgram_Ui_Scaleform_XY16iCF32_T2CxformMultiply2Texture",
"ShaderProgram_Ui_Scaleform_GlyphTextTextureAlpha",
"ShaderProgram_Ui_Scaleform_GlyphTextTextureColorMultiply",
"ShaderProgram_Ui_Scaleform_GlyphTextTextureColor",
"ShaderProgram_Ui_Scaleform_StripFilterBlur",
"ShaderProgram_Ui_Scaleform_StripFilterShadow",
"ShaderProgram_Ui_Scaleform_XY16iC32FilterBlur",
"ShaderProgram_Ui_Scaleform_XY16iC32FilterShadow",
"ShaderProgram_Ui_Scaleform_XY16iCF32FilterBlur",
"ShaderProgram_Ui_Scaleform_XY16iCF32FilterShadow",
"ShaderProgram_Ui_Scaleform_XY16iCF32_T2FilterBlur",
"ShaderProgram_Ui_Scaleform_XY16iCF32_T2FilterShadow",
"ShaderProgram_Ui_Scaleform_GlyphFilterBlur",
"ShaderProgram_Ui_Scaleform_GlyphFilterShadow",
"ShaderProgram_Ui_Minimap",
"ShaderProgram_Ui_MinimapIcon",
"ShaderProgram_Ui_CombatArea",
"ShaderProgram_ExperimentShader_A",
"ShaderProgram_ExperimentShader_B",
"ShaderProgram_TextureCompress_A",
"ShaderProgram_TextureCompress_DXT1",
"ShaderProgram_TextureCompress_DXT5",
"ShaderProgram_ErrorDifferenceSurface_RGB",
"ShaderProgram_ErrorDifferenceSurface_Alpha",
"ShaderProgram_XenonEncodeDXT5MemExport",
"ShaderProgram_TerrainEncodeSurface_A",
"ShaderProgram_TerrainEncodeSurface_B",
"ShaderProgram_TerrainPatchVertexYFetch",
"ShaderProgram_TerrainMeshScatteringYFetch",
"ShaderProgram_TexYCrCbA",
"ShaderProgram_RgbSeparation",
"ShaderProgram_Distort",
"ShaderProgram_DiffusionDofComputeRadius",
"ShaderProgram_DiffusionDofTridiagonalFill",
"ShaderProgram_DiffusionDofForwardCR",
"ShaderProgram_DiffusionDofBackwardCR",
"ShaderProgram_DiffusionDofSolveFinal",
"ShaderProgram_DiffusionDofOutputPS",
"ShaderProgram_DiffusionDofLinearRadiusPS",
"ShaderProgram_DiffusionDofNonLinearRadiusPS",
"ShaderProgram_DiffusionDofDetectForegroundPS",
"ShaderProgram_DiffusionDofCombineForegroundPS",
"ShaderProgram_DiffusionDofBlurXForegroundPS",
"ShaderProgram_DiffusionDofBlurYForegroundPS",
"ShaderProgram_Ui_DetailTexturedMinimap",
"ShaderProgramCount"
]

var ShaderRenderMode = [
"ShaderRenderMode_Default",
"ShaderRenderMode_DynamicEnvmap",
"ShaderRenderMode_ZOnly",
"ShaderRenderMode_DeferredShadingGBufferLayout0",
"ShaderRenderMode_DeferredShadingGBufferLayout1",
"ShaderRenderMode_DeferredShadingEmissive",
"ShaderRenderMode_DeferredShadingUnlit",
"ShaderRenderMode_VelocityVector",
"ShaderRenderMode_DistortionVector",
"ShaderRenderMode_AmbientOcclusionVolume",
"ShaderRenderMode_DebugSimple",
"ShaderRenderMode_DebugMulti",
"ShaderRenderMode_DebugOverdraw",
"ShaderRenderMode_DebugShaderCost",
"ShaderRenderModeCount"
]

var ShaderRenderPath = [
"ShaderRenderPath_Dx10",
"ShaderRenderPath_Dx10Plus",
"ShaderRenderPath_Dx10_1",
"ShaderRenderPath_Dx11",
"ShaderRenderPath_Xenon",
"ShaderRenderPath_Ps3",
"ShaderRenderPath_Gl",
"ShaderRenderPathCount"
]

var ShaderShadowmapMethod = [
"ShaderShadowmapMethod_None",
"ShaderShadowmapMethod_Single",
"ShaderShadowmapMethod_SingleDiscard",
"ShaderShadowmapMethod_CascadedBox3",
"ShaderShadowmapMethod_CascadedBox4"
]

var ShaderShadowmapQuality = [
"ShaderShadowmapQuality_Pcf2x2",
"ShaderShadowmapQuality_Pcf4x4",
"ShaderShadowmapQuality_Gaussian"
]

var ShaderSkinningMethod = [
"ShaderSkinningMethod_DualQuaternion4Bone", "10",
"ShaderSkinningMethod_Linear1Bone", "1",
"ShaderSkinningMethod_Linear2Bone", "2",
"ShaderSkinningMethod_Linear4Bone", "4",
"ShaderSkinningMethod_Linear8Bone", "8",
"ShaderSkinningMethod_None", "0",
"ShaderSkinningMethod_Null", "9"
]

var ShaderStageType = [
"ShaderStageType_Vertex",
"ShaderStageType_Pixel",
"ShaderStageType_Hull",
"ShaderStageType_Domain",
"ShaderStageType_Geometry",
"ShaderStageType_Compute",
"ShaderStageTypeCount"
]

var ShaderTextureCoordType = [
"ShaderTextureCoordType_Unknown",
"ShaderTextureCoordType_VertexElement",
"ShaderTextureCoordType_WorldPos"
]

var ShaderTextureDecompression = [
"ShaderTextureDecompression_None",
"ShaderTextureDecompression_NormalAG",
"ShaderTextureDecompression_NormalRG",
"ShaderTextureDecompression_NormalRGA",
"ShaderTextureDecompression_RGBE",
"ShaderTextureDecompression_SrgbToLinear",
"ShaderTextureDecompression_NormalRGorAG"
]

var ShaderTimeType = [
"ShaderTimeType_Game",
"ShaderTimeType_Real"
]

var ShaderValueFormat = [
"ShaderValueFormat_Half",
"ShaderValueFormat_Float",
"ShaderValueFormat_Int",
"ShaderValueFormat_UInt",
"ShaderValueFormat_Bool"
]

var ShaderValueParameterType = [
"SvptLiteral",
"SvptExternalPermutation",
"SvptExternalConstant",
"SvptExternalSubMaterial"
]

var ShaderValueType = [
"ShaderValueType_None",
"ShaderValueType_Half1",
"ShaderValueType_Half1x2",
"ShaderValueType_Half1x3",
"ShaderValueType_Half1x4",
"ShaderValueType_Half2",
"ShaderValueType_Half2x2",
"ShaderValueType_Half2x3",
"ShaderValueType_Half2x4",
"ShaderValueType_Half3",
"ShaderValueType_Half3x2",
"ShaderValueType_Half3x3",
"ShaderValueType_Half3x4",
"ShaderValueType_Half4",
"ShaderValueType_Half4x2",
"ShaderValueType_Half4x3",
"ShaderValueType_Half4x4",
"ShaderValueType_Float1",
"ShaderValueType_Float1x2",
"ShaderValueType_Float1x3",
"ShaderValueType_Float1x4",
"ShaderValueType_Float2",
"ShaderValueType_Float2x2",
"ShaderValueType_Float2x3",
"ShaderValueType_Float2x4",
"ShaderValueType_Float3",
"ShaderValueType_Float3x2",
"ShaderValueType_Float3x3",
"ShaderValueType_Float3x4",
"ShaderValueType_Float4",
"ShaderValueType_Float4x2",
"ShaderValueType_Float4x3",
"ShaderValueType_Float4x4",
"ShaderValueType_Int1",
"ShaderValueType_Int1x2",
"ShaderValueType_Int1x3",
"ShaderValueType_Int1x4",
"ShaderValueType_Int2",
"ShaderValueType_Int2x2",
"ShaderValueType_Int2x3",
"ShaderValueType_Int2x4",
"ShaderValueType_Int3",
"ShaderValueType_Int3x2",
"ShaderValueType_Int3x3",
"ShaderValueType_Int3x4",
"ShaderValueType_Int4",
"ShaderValueType_Int4x2",
"ShaderValueType_Int4x3",
"ShaderValueType_Int4x4",
"ShaderValueType_UInt1",
"ShaderValueType_UInt1x2",
"ShaderValueType_UInt1x3",
"ShaderValueType_UInt1x4",
"ShaderValueType_UInt2",
"ShaderValueType_UInt2x2",
"ShaderValueType_UInt2x3",
"ShaderValueType_UInt2x4",
"ShaderValueType_UInt3",
"ShaderValueType_UInt3x2",
"ShaderValueType_UInt3x3",
"ShaderValueType_UInt3x4",
"ShaderValueType_UInt4",
"ShaderValueType_UInt4x2",
"ShaderValueType_UInt4x3",
"ShaderValueType_UInt4x4",
"ShaderValueType_Bool1",
"ShaderValueType_Bool1x2",
"ShaderValueType_Bool1x3",
"ShaderValueType_Bool1x4",
"ShaderValueType_Bool2",
"ShaderValueType_Bool2x2",
"ShaderValueType_Bool2x3",
"ShaderValueType_Bool2x4",
"ShaderValueType_Bool3",
"ShaderValueType_Bool3x2",
"ShaderValueType_Bool3x3",
"ShaderValueType_Bool3x4",
"ShaderValueType_Bool4",
"ShaderValueType_Bool4x2",
"ShaderValueType_Bool4x3",
"ShaderValueType_Bool4x4",
"ShaderValueType_Sampler1d",
"ShaderValueType_Sampler1dArray",
"ShaderValueType_Sampler2d",
"ShaderValueType_Sampler2dArray",
"ShaderValueType_Sampler3d",
"ShaderValueType_SamplerCube"
]

var ShapeType = [
"ShapeType_Hull",
"ShapeType_Box",
"ShapeType_OBB",
"ShapeType_Sphere",
"ShapeType_Cylinder",
"ShapeType_Capsule",
"ShapeType_Mesh",
"ShapeType_Decompose",
"ShapeType_Unknown"
]

var ShooterInfo = [
"ShooterInfoDrivingVehicle", "8",
"ShooterInfoInAerialVehicle", "4",
"ShooterInfoInBoat", "0x100",
"ShooterInfoInHeavyArmoredVehicle", "0x80",
"ShooterInfoInLandVehicle", "2",
"ShooterInfoInLightArmoredVehicle", "0x20",
"ShooterInfoInMediumArmoredVehicle", "0x40",
"ShooterInfoInStationaryWeapon", "0x10",
"ShooterInfoInVehicle", "1",
"ShooterInfoNoTeamKillPenalty", "0x4000",
"ShooterInfoUsedArtilleryStrike", "0x400",
"ShooterInfoUsedGrenade", "0x200",
"ShooterInfoUsedLaserDesignator", "0x800",
"ShooterInfoUsedMortarStrike", "0x1000",
"ShooterInfoUsedStingerMissile", "0x2000"
]

var ShootType = [
"ShootType_OneBurstPerTarget",
"ShootType_Continuous"
]

var SimpleTransformOperation = [
"SimpleTransformOperation_Add",
"SimpleTransformOperation_Subtract",
"SimpleTransformOperation_Multiply",
"SimpleTransformOperation_Divide",
"SimpleTransformOperation_Sine",
"SimpleTransformOperation_Cosine",
"SimpleTransformOperation_ArcSine",
"SimpleTransformOperation_ArcCosine",
"SimpleTransformOperation_Modulus",
"SimpleTransformOperation_Round",
"SimpleTransformOperation_Floor",
"SimpleTransformOperation_Ceiling",
"SimpleTransformOperation_Power",
"SimpleTransformOperation_SquareRoot",
"SimpleTransformOperation_Absolute",
"SimpleTransformOperation_Exp",
"SimpleTransformOperation_Log",
"SimpleTransformOperation_Log10",
"SimpleTransformOperation_Tangent",
"SimpleTransformOperation_ArcTangent"
]

var SKU = [
"WW",
"EU",
"US",
"JPN",
"ROA",
"RU",
"EN"
]

var SocketPhysics = [
"SocketPhysics_Default",
"SocketPhysics_FakePhysics",
"SocketPhysics_Droppable"
]

var SocketType = [
"SocketType_Undefined",
"SocketType_Gameplay",
"SocketType_Visual"
]

var SoldierBuffId = [
"SBImprovedBodyArmor",
"SBCount"
]

var SoldierChangeAction = [
"SCA_Done",
"SCA_Altered",
"SCA_None"
]

var SoldierEmote = [
"SoldierEmote_Spot",
"SoldierEmote_Ok",
"SoldierEmote_NeedARide",
"SoldierEmote_GoGoGo",
"SoldierEmote_NeedBackup",
"SoldierEmote_Thanks",
"SoldierEmote_NeedMedic",
"SoldierEmote_FollowMe",
"SoldierEmote_NeedAmmo",
"SoldierEmote_Sorry",
"SoldierEmote_No",
"SoldierEmote_DefendCapturePoint",
"SoldierEmote_AttackCapturePoint",
"SoldierEmote_MoveToPosition",
"SoldierEmote_Count"
]

var SoundDataRequestResult = [
"SoundDataRequestResult_NotRequested",
"SoundDataRequestResult_Requested",
"SoundDataRequestResult_Available"
]

var SoundDataState = [
"SoundDataState_Pending",
"SoundDataState_Cancelled",
"SoundDataState_Lost",
"SoundDataState_Valid"
]

var SoundGraphPluginConnectionType = [
"SoundGraphPluginConnectionType_Unconnected",
"SoundGraphPluginConnectionType_Voice",
"SoundGraphPluginConnectionType_Bus"
]

var SoundPatchDefaultEvent = [
"SoundPatchDefaultEvent_Start",
"SoundPatchDefaultEvent_Stop",
"SoundPatchDefaultEvent_EnterScope",
"SoundPatchDefaultEvent_ForceInit"
]

var SoundTestParamBehavior = [
"SoundTestParamBehavior_Constant",
"SoundTestParamBehavior_LinearRamp",
"SoundTestParamBehavior_Random"
]

var SoundTestTransformBehavior = [
"SoundTestTransformBehavior_Static"
]

var SoundWaveReadPriority = [
"SoundWaveReadPriority_Unspecified",
"SoundWaveReadPriority_Low",
"SoundWaveReadPriority_Medium",
"SoundWaveReadPriority_Normal",
"SoundWaveReadPriority_High"
]

var SoundWaveVariationSelection = [
"SwvsSequential",
"SwvsRandom"
]

var SoundWaveVoicePriority = [
"SoundWaveVoicePriority_Unspecified",
"SoundWaveVoicePriority_Low",
"SoundWaveVoicePriority_Normal",
"SoundWaveVoicePriority_High",
"SoundWaveVoicePriority_Permanent"
]

var SpaceType = [
"STBody",
"STWorld"
]

var SpecialMovesPoseType = [
"SpecialMovesPoseType_Crouch", "1",
"SpecialMovesPoseType_None =","",
"SpecialMovesPoseType_Prone", "2",
"SpecialMovesPoseType_Stand", "0"
]

var SpotLightShape = [
"SpotLightShape_Cone",
"SpotLightShape_Frustum",
"SpotLightShape_OrthoFrustum"
]

var SpottingType = [
"STGunner",
"STSquadLeader",
"STDefault",
"STPersonal",
"STSnapshot",
"STSquadUav",
"STTypesCount"
]

var SpotType = [
"SpotType_None",
"SpotType_Active",
"SpotType_Passive",
"SpotType_Radar",
"SpotType_Unspottable",
"SpotType_Count"
]

var SquadAction = [
"SquadAction_PlayerJoined",
"SquadAction_PlayerLeft",
"SquadAction_PlayerWasKicked"
]

var SquadId = [
"SquadNone",
"Squad1",
"Squad2",
"Squad3",
"Squad4",
"Squad5",
"Squad6",
"Squad7",
"Squad8",
"Squad9",
"Squad10",
"Squad11",
"Squad12",
"Squad13",
"Squad14",
"Squad15",
"Squad16",
"Squad17",
"Squad18",
"Squad19",
"Squad20",
"Squad21",
"Squad22",
"Squad23",
"Squad24",
"Squad25",
"Squad26",
"Squad27",
"Squad28",
"Squad29",
"Squad30",
"Squad31",
"Squad32",
"SquadIdCount"
]

var StabilizerProperty = [
"SPPitchAngle",
"SPYawAngle",
"SPRollAngle",
"SPVerticalPosition",
"SPVerticalVelocity"
]

var StatEvent = [
"StatEvent_Kill",
"StatEvent_Kill_In_X",
"StatEvent_Kill_As_X",
"StatEvent_KillWith_X_As_Y",
"StatEvent_KillDistance",
"StatEvent_KillOf_X_As_Y",
"StatEvent_KillOf_X_In_Y",
"StatEvent_TeamKill",
"StatEvent_AvengerKill",
"StatEvent_SaviorKill",
"StatEvent_DriverAssist",
"StatEvent_TeamDriverAssist",
"StatEvent_SquadDriverAssist",
"StatEvent_PassengerAssist",
"StatEvent_TeamPassengerAssist",
"StatEvent_SquadPassengerAssist",
"StatEvent_RoadKill",
"StatEvent_Death",
"StatEvent_DoubleKill",
"StatEvent_TripleKill",
"StatEvent_MultiKill",
"StatEvent_PostMortemKill",
"StatEvent_KillStreak",
"StatEvent_KillStreakX",
"StatEvent_CancelKillStreak",
"StatEvent_Comeback",
"StatEvent_SquadWipe",
"StatEvent_NemesisKill",
"StatEvent_NemesisKillX",
"StatEvent_CancelNemesisKill",
"StatEvent_SecondsAs_X",
"StatEvent_SecondsWith_X",
"StatEvent_SecondsIn_X",
"StatEvent_SecondsOn_X",
"StatEvent_Destroy_X",
"StatEvent_Destroy_X_As_Y",
"StatEvent_Destroy_X_In_Y",
"StatEvent_DestroyWith_X_As_Y",
"StatEvent_Destroy_X_With_Y",
"StatEvent_DestroyExplosives",
"StatEvent_Disabled_X",
"StatEvent_KillOfWith_X_As_Y",
"StatEvent_TaggedDamageAssist_X",
"StatEvent_Tagged_X",
"StatEvent_SuppressWith_X_As_Y",
"StatEvent_Level_X_Completed_Y_Difficulty",
"StatEvent_Level_X_Completed_Y_Difficulty_WithTimeValue",
"StatEvent_CleanLevel_X_Completed",
"StatEvent_RoundOverOutcome_X_On_Y",
"StatEvent_Rounds",
"StatEvent_Headshot_X_With_Y",
"StatEvent_HeadshotAs_X_With_Y",
"StatEvent_HeadshotDistance_With_X",
"StatEvent_SelfHeal",
"StatEvent_BestSquad",
"StatEvent_ShotsFired_With_X",
"StatEvent_ShotsHit_With_X",
"StatEvent_SpotAssist",
"StatEvent_SpotAssistFrom_X",
"StatEvent_SuppressionAssist",
"StatEvent_Heal",
"StatEvent_TeamHeal",
"StatEvent_SquadHeal",
"StatEvent_Revive",
"StatEvent_TeamRevive",
"StatEvent_SquadRevive",
"StatEvent_ReviveAccepted",
"StatEvent_TeamReviveAccepted",
"StatEvent_SquadReviveAccepted",
"StatEvent_ManDownRevive",
"StatEvent_Resupply",
"StatEvent_TeamResupply",
"StatEvent_SquadResupply",
"StatEvent_KillAssist",
"StatEvent_Repair",
"StatEvent_TeamRepair",
"StatEvent_SquadRepair",
"StatEvent_VehicleDestroyAssist",
"StatEvent_TreeDestroyed",
"StatEvent_WallDestroyed",
"StatEvent_CaptureCapturePoint",
"StatEvent_CaptureCapturePointAssist",
"StatEvent_NeutralizeCapturePoint",
"StatEvent_NeutralizeCapturePointAssist",
"StatEvent_CapturePointDefense",
"StatEvent_CapturePointAttack",
"StatEvent_CrateArmed",
"StatEvent_CrateDisarmed",
"StatEvent_CrateDestroyed",
"StatEvent_CrateDefendKill",
"StatEvent_CrateAttackKill",
"StatEvent_SquadDefendOrder",
"StatEvent_SquadAttackOrder",
"StatEvent_SquadLeaderDefendOrder",
"StatEvent_SquadLeaderAttackOrder",
"StatEvent_RankUp",
"StatEvent_UniqueAward",
"StatEvent_DogTag",
"StatEvent_DogTagSavior",
"StatEvent_SquadSpawn",
"StatEvent_SquadSpawnOnRemoteVehicle_X",
"StatEvent_Suicide",
"StatEvent_GainAward_X",
"StatEvent_PlayerScoreboardPosition_X",
"StatEvent_GainedHighestRank",
"StatEvent_GainedHighestUnlockInBucket_X",
"StatEvent_Misc_X_and_Y",
"StatEvent_TotalScoreOn_X_Difficulty_Y",
"StatEvent_Invalid",
"StatEvent_Damage",
"StatEvent_PlayerScoreboardPosition_X_On_Y",
"StatEvent_CaptureCapturePointDOM",
"StatEvent_CaptureCapturePointAssistDOM",
"StatEvent_NeutralizeCapturePointDOM",
"StatEvent_NeutralizeCapturePointAssistDOM",
"StatEvent_Kill_With_X_In_Y",
"StatEvent_DoubleKill_With_X_In_Y",
"StatEvent_ShotFired_With_X",
"StatEvent_SpotAssistFor_X",
"StatEvent_Misc_X_In_Y",
"StatEvent_CTF_Capture",
"StatEvent_CTF_CaptureStreak",
"StatEvent_CTF_CaptureAssist",
"StatEvent_CTF_PickUp",
"StatEvent_CTF_PickUpAssist",
"StatEvent_CTF_Return",
"StatEvent_CTF_CarrierAssist",
"StatEvent_CTF_CarrierAssistStreak",
"StatEvent_CTF_FlagTransporter_In_X",
"StatEvent_CTF_CarrierSavior",
"StatEvent_CTF_CarrierSuppression",
"StatEvent_CTF_CarrierKiller",
"StatEvent_CTF_CarrierKillAssist",
"StatEvent_CTF_CarrierHeal",
"StatEvent_BadLuck",
"StatEvent_Jump_In_X",
"StatEvent_Kill_From_X",
"StatEvent_ParadropDestroy_X",
"StatEvent_ParadropKill",
"StatEvent_FreefallDeath",
"StatEvent_PassengerKill_In_X",
"StatEvent_TakeDogTagAssassin",
"StatEvent_Spawn_In_X",
"StatEvent_RoadKill_With_X",
"StatEvent_LAST_ITEM"
]

var StatPeriod = [
"StatPeriod_AllTime",
"StatPeriod_Monthly",
"StatPeriod_Weekly",
"StatPeriod_Daily",
"StatPeriod_Size",
"StatPeriod_Error"
]

var StatsMultiplicity = [
"StatsMultiplicity_Invalid",
"StatsMultiplicity_Solo",
"StatsMultiplicity_Club",
"StatsMultiplicity_LAST_ITEM"
]

var StencilOperation = [
"StencilOperation_Keep",
"StencilOperation_Zero",
"StencilOperation_Replace",
"StencilOperation_IncrementSaturate",
"StencilOperation_DecrementSaturate",
"StencilOperation_Invert",
"StencilOperation_IncrementWrap",
"StencilOperation_DecrementWrap"
]

var StreamRealm = [
"StreamRealm_None",
"StreamRealm_Client",
"StreamRealm_Both"
]

var StreamStarveMode = [
"StreamStarveMode_Off",
"StreamStarveMode_On",
"StreamStarveMode_Dynamic"
]

var StrengthType = [
"Infantry",
"LightArmour",
"HeavyArmour",
"Helicopter",
"NumberOfStrengthTypes"
]

var SubRealm = [
"SubRealm_All",
"SubRealm_LocalPlayer",
"SubRealm_RemotePlayer"
]

var SurfaceShaderType = [
"SurfaceShaderType_Opaque",
"SurfaceShaderType_OpaqueAlphaTest",
"SurfaceShaderType_OpaqueAlphaTestSimple",
"SurfaceShaderType_Transparent",
"SurfaceShaderType_TransparentDecal"
]

var SweepSelectionType = [
"SstTargetLost",
"SstFirstTime"
]

var SwitchTeamsResult = [
"SwitchTeamsResult_FailedDisabled", "5",
"SwitchTeamsResult_FailedMustBeDead", "3",
"SwitchTeamsResult_FailedTeamFull", "4",
"SwitchTeamsResult_FailedTooFewTickets", "2",
"SwitchTeamsResult_FailedTooSoon", "1",
"SwitchTeamsResult_FailedUnbalanced", "0",
"SwitchTeamsResult_Success =",""
]

var SyncAnimationsState = [
"Idle",
"Play",
"Skip",
"Stop"
]

var TargetMode = [
"TargetMode_FirstPerson",
"TargetMode_ThirdPerson",
"TargetMode_Index"
]

var TargetPosKnowledgeType = [
"TargetPosKnown",
"TargetPosUnknown",
"TargetPosFind"
]

var TeamAssignMode = [
"TamEqualTeams",
"TamFullTeams",
"TamOneTeam"
]

var TeamId = [
"TeamNeutral",
"Team1",
"Team2",
"Team3",
"Team4",
"Team5",
"Team6",
"Team7",
"Team8",
"Team9",
"Team10",
"Team11",
"Team12",
"Team13",
"Team14",
"Team15",
"Team16",
"TeamIdCount"
]

var TerrainBrushDetailOperation = [
"Lerp",
"Add",
"Multiply"
]

var TerrainDrawPassType = [
"TerrainDrawPassType_SinglePass",
"TerrainDrawPassType_MultipassFirst",
"TerrainDrawPassType_MultipassConsecutive"
]

var TerrainLayerType = [
"TerrainLayerType_IgnoreMask",
"TerrainLayerType_Masked",
"TerrainLayerType_BinaryMasked"
]

var TerrainRenderMode = [
"TerrainRenderMode_Default",
"TerrainRenderMode_DrawPassCount2d",
"TerrainRenderMode_LayerCount2d",
"TerrainRenderMode_LayerCount3d",
"TerrainRenderMode_MaskedLayerCount2d",
"TerrainRenderMode_MaskedLayerCount3d"
]

var TextureAddress = [
"TaBorder", "4",
"TaClamp", "2",
"TaMirror", "1",
"TaMirrorOnce", "5",
"TaWrap", "0"
]

var TextureCompressQualityMode = [
"TextureCompressQualityMode_Default",
"TextureCompressQualityMode_Simple",
"TextureCompressQualityMode_HighQuality"
]

var TextureFilter = [
"TfNone",
"TfPoint",
"TfLinear",
"TfAnisotropic",
"TfDefault"
]

var TextureFormat = [
"TextureFormat_DXT1",
"TextureFormat_DXT3",
"TextureFormat_DXT5",
"TextureFormat_DXT5A",
"TextureFormat_DXN",
"TextureFormat_RGB565",
"TextureFormat_RGB888",
"TextureFormat_ARGB1555",
"TextureFormat_ARGB4444",
"TextureFormat_ARGB8888",
"TextureFormat_L8",
"TextureFormat_L16",
"TextureFormat_ABGR16",
"TextureFormat_ABGR16F",
"TextureFormat_ABGR32F",
"TextureFormat_R16F",
"TextureFormat_R32F",
"TextureFormat_NormalDXN",
"TextureFormat_NormalDXT1",
"TextureFormat_NormalDXT5",
"TextureFormat_NormalDXT5RGA",
"TextureFormat_RG8",
"TextureFormat_GR16",
"TextureFormat_GR16F",
"TextureFormat_D16",
"TextureFormat_D24S8",
"TextureFormat_D24FS8",
"TextureFormat_D32F",
"TextureFormat_ABGR32",
"TextureFormat_GR32F",
"TextureFormat_A2R10G10B10",
"TextureFormat_Unknown"
]

var TextureType = [
"TextureType_2d",
"TextureType_Cube",
"TextureType_3d",
"TextureType_2dArray",
"TextureType_1dArray",
"TextureType_1d"
]

var TicketDecreaseType = [
"TDTOnKilled",
"TDTOnRespawned",
"TDTNoDecreaseOnSoldierDeath"
]

var TimerMode = [
"TimerMode_Repeating",
"TimerMode_SingleShot"
]

var TinyEvent = [
"TinyEvent_AckAuthentication", "5",
"TinyEvent_AckEnterPatchRecvState", "4",
"TinyEvent_AckExitLevel", "7",
"TinyEvent_AckLevelLinked", "2",
"TinyEvent_AckLevelRestarted", "3",
"TinyEvent_AckTimeSyncDone", "1",
"TinyEvent_CmdContinueLevel", "11",
"TinyEvent_CmdEnterPatchRecvState", "9",
"TinyEvent_CmdExitLevel", "10",
"TinyEvent_CmdLinkLevel", "8",
"TinyEvent_NackAuthentication", "6"
]

var TonemapMethod = [
"TonemapMethod_Filmic", "1",
"TonemapMethod_FilmicNeutral", "2",
"TonemapMethod_Linear", "0",
"TonemapMethod_None", "3",
"TonemapMethodCount", "3"
]

var ToolTipType = [
"AimAtEnemyToolTip", "2",
"AimAtTeamMateToolTip", "1"
]

var TransformPart = [
"TransformPart_TranslationX",
"TransformPart_TranslationY",
"TransformPart_TranslationZ",
"TransformPart_RotationX",
"TransformPart_RotationY",
"TransformPart_RotationZ"
]

var UI3dIconQuery = [
"UI3dIconQuery_Active3dIconsData"
]

var UIColorType = [
"UIColorType_Unselected",
"UIColorType_Selected",
"UIColorType_SelectInside",
"UIColorType_UnselectedInside",
"UIColorType_Locked",
"UIColorType_IconBg",
"UIColorType_FrameSoft",
"UIColorType_FrameHard",
"UIColorType_HudYellow",
"UIColorType_CriticalColor",
"UIColorType_Friendly",
"UIColorType_Enemy",
"UIColorType_SquadColor",
"UIColorType_NormalTextColor",
"UIColorType_HeaderTextColor",
"UIColorType_StaticHUDColor",
"UIColorType_DynamicHUDColor",
"UIColorType_MouseOver",
"UIColorType_MouseOut"
]

var UIConsoleKeyboardStatus = [
"UIConsoleKeyboardStatus_Success",
"UIConsoleKeyboardStatus_Failed",
"UIConsoleKeyboardStatus_Cancelled",
"UIConsoleKeyboardStatus_Active",
"UIConsoleKeyboardStatus_Inactive",
"UIConsoleKeyboardStatus_Count"
]

var UIConstants = [
"UIConstants_MaxCaptureAreas", "0x10"
]

var UICreditsTextType = [
"SingleLine",
"MultiLine"
]

var UIGraphPriority = [
"UIGraphPriority_Low",
"UIGraphPriority_Normal",
"UIGraphPriority_High",
"UIGraphPriority_OverlayScreens",
"UIGraphPriority_Critical"
]

var UIHudIcon = [
"UIHudIcon_Unused",
"UIHudIcon_LocalPlayer",
"UIHudIcon_LocalDirection",
"UIHudIcon_FriendlyPlayer",
"UIHudIcon_EnemyPlayer",
"UIHudIcon_NeutralPlayer",
"UIHudIcon_SquadMember",
"UIHudIcon_SquadLeader",
"UIHudIcon_SquadLeaderTargeted",
"UIHudIcon_Vehicle",
"UIHudIcon_PrimaryObjective",
"UIHudIcon_PrimaryObjectiveBlink",
"UIHudIcon_SecondaryObjective",
"UIHudIcon_AreaMapMarker",
"UIHudIcon_ObjectiveDestroy",
"UIHudIcon_ObjectiveScout",
"UIHudIcon_ObjectiveDefend",
"UIHudIcon_ObjectiveMoveTo",
"UIHudIcon_ObjectiveAttack",
"UIHudIcon_ObjectiveFollow",
"UIHudIcon_ObjectiveGeneral",
"UIHudICon_UAV",
"UIHudIcon_AmmoCrate",
"UIHudIcon_MedicBag",
"UIHudIcon_C4",
"UIHudIcon_ATMine",
"UIHudIcon_StationaryWeapon",
"UIHudIcon_North",
"UIHudIcon_South",
"UIHudIcon_West",
"UIHudIcon_East",
"UIHudIcon_NeutralFlag",
"UIHudIcon_FriendlyFlag",
"UIHudIcon_EnemyFlag",
"UIHudIcon_FriendlyBase",
"UIHudIcon_EnemyBase",
"UIHudIcon_Team1Flag",
"UIHudIcon_Team2Flag",
"UIHudIcon_NeutralFlagLit",
"UIHudIcon_FriendlyFlagLit",
"UIHudIcon_EnemyFlagLit",
"UIHudIcon_SelectableSpawnPoint",
"UIHudIcon_SelectedSpawnPoint",
"UIHudIcon_NonSelectableSpawnPoint",
"UIHudIcon_FriendlyFlagUnderAttack",
"UIHudIcon_EnemyFlagUnderAttack",
"UIHudIcon_OrderAttack",
"UIHudIcon_OrderDefend",
"UIHudIcon_OrderAttackObserved",
"UIHudIcon_OrderDefendObserved",
"UIHudIcon_Boat",
"UIHudIcon_Car",
"UIHudIcon_Jeep",
"UIHudIcon_HeliAttack",
"UIHudIcon_HeliScout",
"UIHudIcon_Tank",
"UIHudIcon_TankIFV",
"UIHudIcon_TankArty",
"UIHudIcon_TankAA",
"UIHudIcon_TankAT",
"UIHudIcon_Jet",
"UIHudIcon_JetBomber",
"UIHudIcon_Stationary",
"UIHudIcon_Strategic",
"UIHudIcon_MotionRadarSweep",
"UIHudIcon_NeedBackup",
"UIHudIcon_NeedAmmo",
"UIHudIcon_NeedMedic",
"UIHudIcon_NeedPickup",
"UIHudIcon_NeedRepair",
"UIHudIcon_KitAssault",
"UIHudIcon_KitDemolition",
"UIHudIcon_KitRecon",
"UIHudIcon_KitSpecialist",
"UIHudIcon_KitSupport",
"UIHudIcon_KitMedic",
"UIHudIcon_KitEngineer",
"UIHudIcon_KitPickupAssault",
"UIHudIcon_KitPickupDemolition",
"UIHudIcon_KitPickupRecon",
"UIHudIcon_KitPickupSpecialist",
"UIHudIcon_KitPickupSupport",
"UIHudIcon_KitPickupMedic",
"UIHudIcon_KitPickupEngineer",
"UIHudIcon_Pickup",
"UIHudIcon_TaggedVehicle",
"UIHudIcon_LaserPaintedVehicle",
"UIHudIcon_HeliTargetEnemy",
"UIHudIcon_HeliTargetFriendly",
"UIHudIcon_ArtilleryTarget",
"UIHudIcon_NeutralFlagAttacker",
"UIHudIcon_FriendlyFlagAttacker",
"UIHudIcon_EnemyFlagAttacker",
"UIHudIcon_LaserTarget",
"UIHudIcon_ObjectiveAttacker",
"UIHudIcon_ObjectiveDefender",
"UIHudIcon_HealthbarBackground",
"UIHudIcon_Healthbar",
"UIHudIcon_RadarSweepComponent",
"UIHudIcon_Blank",
"UIHudIcon_LocalPlayerBigIcon",
"UIHudIcon_LocalPlayerOutOfMap",
"UIHudIcon_PrimaryObjectiveLarge",
"UIHudIcon_TargetUnlocked",
"UIHudIcon_TargetLocked",
"UIHudIcon_TargetLocking",
"UIHudIcon_ArtilleryStrikeNametag",
"UIHudIcon_ArtilleryStrikeMinimap",
"UIHudIcon_CapturePointContested",
"UIHudIcon_CapturePointDefended",
"UIHudIcon_RoundBar",
"UIHudIcon_RoundBarBg",
"UIHudIcon_RoundBarBgPlate",
"UIHudIcon_SnapOvalArrow",
"UIHudIcon_SquadleaderBg",
"UIHudIcon_VehicleBg",
"UIHudIcon_NonTakeableControlPoint",
"UIHudIcon_SpottedPosition",
"UIHudIcon_Grenade",
"UIHudIcon_Revive",
"UIHudIcon_Repair",
"UIHudIcon_Interact",
"UIHudIcon_Voip",
"UIHudIcon_Claymore",
"UIHudIcon_EodBot",
"UIHudIcon_Explosive",
"UIHudIcon_LaserDesignator",
"UIHudIcon_Mav",
"UIHudIcon_Mortar",
"UIHudIcon_RadioBeacon",
"UIHudIcon_Ugs",
"UIHudIcon_PercetageBarMiddle",
"UIHudIcon_PercetageBarEdge",
"UIHudIcon_PercentageBarBackground",
"UIHudIcon_TankLC",
"UIHudIcon_HeliTrans",
"UIHudIcon_StaticAT",
"UIHudIcon_StaticAA",
"UIHudIcon_SprintBoost",
"UIHudIcon_AmmoBoost",
"UIHudIcon_ExplosiveBoost",
"UIHudIcon_ExplosiveResistBoost",
"UIHudIcon_SuppressionBoost",
"UIHudIcon_SuppressionResistBoost",
"UIHudIcon_GrenadeBoost",
"UIHudIcon_HealSpeedBoost",
"UIHudIcon_NeedAmmoHighlight",
"UIHudIcon_NeedMedicHighlight",
"UIHudIcon_NeedRepairHighlight",
"UIHudIcon_NeedPickupHighlight",
"UIHudIcon_PlayerDead",
"UIHudIcon_Player",
"UIHudIcon_Flag",
"UIHudIcon_Base",
"UIHudIcon_TankDestroyer",
"UIHudIcon_Gunship",
"UIHudIcon_ATV",
"UIHudIcon_WeaponPickupTier1",
"UIHudIcon_WeaponPickupTier2",
"UIHudIcon_WeaponPickupTier3",
"UIHudIcon_VehicleParachuted",
"UIHudIcon_CTFFlagFriendlyHome",
"UIHudIcon_CTFFlagFriendlyPicked",
"UIHudIcon_CTFFlagFriendlyDropped",
"UIHudIcon_CTFFlagEnemyHome",
"UIHudIcon_CTFFlagEnemyPicked",
"UIHudIcon_CTFFlagEnemyDropped",
"UIHudIcon_FriendlyRedFlag",
"UIHudIcon_EnemyGreenFlag",
"UIHudIcon_DirtBike",
"UIHudIcon_Count"
]

var UIIconState = [
"UIIconState_Default",
"UIIconState_Enemy",
"UIIconState_Friendly",
"UIIconState_Neutral",
"UIIconState_Squad",
"UIIconState_Blink",
"UIIconState_BlinkEnemy",
"UIIconState_Count"
]

var UIInputAction = [
"UIInputAction_NavigateUp",
"UIInputAction_NavigateDown",
"UIInputAction_NavigateLeft",
"UIInputAction_NavigateRight",
"UIInputAction_TabLeft",
"UIInputAction_TabRight",
"UIInputAction_Activate",
"UIInputAction_Deactivate",
"UIInputAction_Menu",
"UIInputAction_Cancel",
"UIInputAction_OK",
"UIInputAction_Back",
"UIInputAction_Tab",
"UIInputAction_Edit",
"UIInputAction_View",
"UIInputAction_LThumb",
"UIInputAction_RThumb",
"UIInputAction_MapZoom",
"UIInputAction_MapSize",
"UIInputAction_SayAllChat",
"UIInputAction_TeamChat",
"UIInputAction_SquadChat",
"UIInputAction_CommoRose",
"UIInputAction_ToggleChat",
"UIInputAction_ToggleMinimapType",
"UIInputAction_Size",
"UIInputAction_None"
]

var UIInputActionEventType = [
"UIInputActionEventType_Pressed", "1",
"UIInputActionEventType_Released", "2"
]

var UIInputEvent = [
"UIInputEvent_None",
"UIInputEvent_OnButtonA",
"UIInputEvent_OnButtonB",
"UIInputEvent_OnButtonBack",
"UIInputEvent_OnButtonDPad_Down",
"UIInputEvent_OnButtonDPad_Left",
"UIInputEvent_OnButtonDPad_Right",
"UIInputEvent_OnButtonDPad_Up",
"UIInputEvent_OnButtonLB",
"UIInputEvent_OnButtonRB",
"UIInputEvent_OnButtonStart",
"UIInputEvent_OnButtonX",
"UIInputEvent_OnButtonY"
]

var UIInterruptID = [
"UIInterruptID_None",
"UIInterruptID_ControllerPull"
]

var UIKeyboardEventType = [
"UIKeyboardEventType_KeyDown",
"UIKeyboardEventType_KeyUp",
"UIKeyboardEventType_Char"
]

var UIListEmptyRowType = [
"emptyRow_28px",
"emptyRow_20px",
"emptyRowNone"
]

var UIListNavigationType = [
"loop",
"noLoop",
"sendEventTopBottom",
"sendEventTop",
"sendEventBottom",
"none"
]

var UIListRowType = [
"MixedRows",
"basicRow",
"baseSpawn",
"squadSpawn",
"MenuRow_34px",
"MenuRow_64px",
"ScoreboardRow",
"ScoreboardRow64Players",
"TextSelectorRow",
"TextSelectorRow_28px",
"BarSelectorRow",
"SquadRow",
"ServerListRow",
"StoreRow",
"ComCenterStandardDelimiter",
"ComCenterSquadDelimiter",
"ComCenterStandardFriendRow",
"ComCenterSquadFriendRow",
"ComCenterSquadButtonRow",
"ComCenterLivePartyDelimiter",
"ComCenterLivePartyFriendRow",
"SquadDetailedRow",
"ComCenterLivePartyButtonRow",
"CoopMissionTeamRow",
"LeaderBoardRow",
"CoopLeaderBoardRow",
"BattleLogStandardRow",
"BattleLogNewsRow",
"ServerLocationsRow",
"ServerExtendRow",
"ServerInfoSettingsRow",
"ServerInfoPlayersRow",
"CheckBoxRow",
"BarSelectorRow_28px",
"BasicRow_34px",
"KeyBindingRow",
"SquadListRow",
"teamSpawn",
"MatchListRow",
"MatchPlayerListRow",
"ManageServerPlayerRow",
"ServerSettingsRow",
"ServerPlayersRow",
"TopPlayersRow",
"MenuRowPremium_34px",
"MenuRowPremium_64px"
]

var UIListUnFocusMode = [
"DeSelect",
"ChangeState",
"None"
]

var UILogicOperator = [
"UILogicOperator_None",
"UILogicOperator_Equal",
"UILogicOperator_GreaterThan",
"UILogicOperator_GreaterThanOrEqual",
"UILogicOperator_LessThan",
"UILogicOperator_LessThanOrEqual"
]

var UIMessageEntityType = [
"UIMessageEntityType_Message",
"UIMessageEntityType_Tooltip",
"UIMessageEntityType_LogLines",
"UIMessageEntityType_Subtitle",
"UIMessageEntityType_FailState",
"UIMessageEntityType_OutOfBounds"
]

var UIMessageType = [
"UIMessageType_Text",
"UIMessageType_EnemyTank",
"UIMessageType_EnemyCar",
"UIMessageType_EnemyBoat",
"UIMessageType_EnemyHelicopter",
"UIMessageType_EnemyInfantry",
"UIMessageType_EnemyActivity",
"UIMessageType_EnemyC4",
"UIMessageType_EnemyATMine",
"UIMessageType_ChatGo",
"UIMessageType_ChatFollowMe",
"UIMessageType_ChatNeedBackup",
"UIMessageType_ChatNeedPickup",
"UIMessageType_ChatNeedAmmo",
"UIMessageType_ChatNeedMedic",
"UIMessageType_ChatYes",
"UIMessageType_ChatNo",
"UIMessageType_ChatThanks",
"UIMessageType_ChatSorry",
"UIMessageType_ChatNeedRepair",
"UIMessageType_ChatGetIn",
"UIMessageType_ChatGetOut",
"UIMessageType_ChatDropMeOff",
"UIMessageType_OrderDefendBase",
"UIMessageType_OrderAttackBase",
"UIMessageType_OrderMoveToPos",
"UIMessageType_JoinedSquad",
"UIMessageType_LeftSquad",
"UIMessageType_RequestSquad",
"UIMessageType_InviteSquad",
"UIMessageType_KickSquad",
"UIMessageType_LeaderPromoted",
"UIMessageType_Connected",
"UIMessageType_Disconnected",
"UIMessageType_Killed",
"UIMessageType_Died"
]

var UIMinimapZoomState = [
"UIMinimapZoomState_Default",
"UIMinimapZoomState_Overview",
"UIMinimapZoomState_CombatArea",
"UIMinimapZoomState_Mission",
"UIMinimapZoomState_Artillery",
"UIMinimapZoomState_Spawn",
"UIMinimapZoomState_ManDown",
"UIMinimapZoomState_Count"
]

var UIMouseButton = [
"UIMouseButton_Left",
"UIMouseButton_Right",
"UIMouseButton_Middle"
]

var UIMouseEventType = [
"UIMouseEventType_MouseMove",
"UIMouseEventType_MouseWheel",
"UIMouseEventType_ButtonDown",
"UIMouseEventType_ButtonUp"
]

var UIPartIdentifier = [
"HCI_None",
"HCI_RangeMeter",
"HCI_PredictedSight",
"HCI_VelocityVector",
"HCI_RadioAltitude"
]

var UIPopupType = [
"PopupType_MemCard",
"PopupType_ControllerDisconnected",
"PopupType_Login",
"PopupType_TermsOfService",
"PopupType_PrivacyPolicy",
"PopupType_RevivePrompt",
"PopupType_Generic",
"PopupType_ServerReminder",
"PopupType_Error",
"PopupType_ManagePlayer",
"PopupType_Invalid",
"PopupType_IngamePlayer",
"PopupType_OnlinePass",
"PopupType_Origin",
"PopupType_UpdateAvailable",
"PopupType_Dynamic",
"PopupType_GameQueue",
"PopupType_COOPMatchmaking",
"PopupType_PromoInfo"
]

var UISettingSymbols = [
"UISettingSymbols_Pluses",
"UISettingSymbols_Values",
"UISettingSymbols_None"
]

var UISettingType = [
"UISettingType_Slider",
"UISettingType_TickerUpDown",
"UISettingType_Droplist",
"UISettingType_Checkbox",
"UISettingType_Text",
"UISettingType_NotSet"
]

var UIState = [
"UIState_Menu",
"UIState_LoadingSP",
"UIState_LoadingMP",
"UIState_Playing",
"UIState_Unload",
"UIState_Embedded",
"UIState_Static",
"UIState_StaticGenerated",
"UIState_PreEndOfRound",
"UIState_EndOfRound",
"UIState_PlayingSP",
"UIState_PlayingMP",
"UIState_None"
]

var UISystemType = [
"UISystem_None",
"UISystem_Standard"
]

var UIUpdateType = [
"UIUpdateType_Always",
"UIUpdateType_Odd",
"UIUpdateType_Even",
"UIUpdateType_Never"
]

var UIWidgetEventID = [
"UIWidgetEventID_None",
"UIWidgetEventID_OnItemSelected",
"UIWidgetEventID_OnItemHighlighted",
"UIWidgetEventID_OnItemReleased",
"UIWidgetEventID_OnItemUnhighlighted",
"UIWidgetEventID_OnItemPressed",
"UIWidgetEventID_OnItemOver",
"UIWidgetEventID_OnItemOut",
"UIWidgetEventID_OnToggle",
"UIWidgetEventID_OnChanged",
"UIWidgetEventID_OnButtonBarChanged",
"UIWidgetEventID_EnterTop",
"UIWidgetEventID_EnterBottom",
"UIWidgetEventID_EnterAny",
"UIWidgetEventID_SetIndex",
"UIWidgetEventID_SetPercentage",
"UIWidgetEventID_OnReachedTop",
"UIWidgetEventID_OnReachedBottom",
"UIWidgetEventID_OnNavigateLeft",
"UIWidgetEventID_OnNavigateRight",
"UIWidgetEventID_Show",
"UIWidgetEventID_Hide",
"UIWidgetEventID_OnShow",
"UIWidgetEventID_OnHide",
"UIWidgetEventID_Toggle",
"UIWidgetEventID_ToggleOn",
"UIWidgetEventID_ToggleOff",
"UIWidgetEventID_ToggledOn",
"UIWidgetEventID_ToggledOff",
"UIWidgetEventID_Update",
"UIWidgetEventID_OnComplete",
"UIWidgetEventID_Focus",
"UIWidgetEventID_OnHeaderChanged",
"UIWidgetEventID_OnDescriptionChanged",
"UIWidgetEventID_OnMapChanged",
"UIWidgetEventID_Clear",
"UIWidgetEventID_Delete",
"UIWidgetEventID_LThumb",
"UIWidgetEventID_RThumb",
"UIWidgetEventID_LTAB",
"UIWidgetEventID_RTAB",
"UIWidgetEventID_OnLarge",
"UIWidgetEventID_OnSmall",
"UIWidgetEventID_TextEntered",
"UIWidgetEventID_PlaySoundNavigate",
"UIWidgetEventID_PlaySoundSelect",
"UIWidgetEventID_PlaySoundPageSwap",
"UIWidgetEventID_OnComPressed",
"UIWidgetEventID_OnComReleased",
"UIWidgetEventID_NumItems"
]

var UIWidgetEventQuery = [
"UIWidgetEventQuery_FireEvent"
]

var UndergrowthOrientationMode = [
"UndergrowthOrientationMode_Horizontal",
"UndergrowthOrientationMode_LeanToTerrain",
"UndergrowthOrientationMode_SkewToTerrain"
]

var UndergrowthRotationMode = [
"UndergrowthRotationMode_Random",
"UndergrowthRotationMode_TowardsSlope",
"UndergrowthRotationMode_Fixed"
]

var UnlockAvailability = [
"UnlockAvailability_All",
"UnlockAvailability_HumanPlayerOnly",
"UnlockAvailability_AIOnly"
]

var UpdatePass = [
"UpdatePass_PreSim",
"UpdatePass_PostSim",
"UpdatePass_PostFrame",
"UpdatePass_FrameInterpolation",
"UpdatePass_PreInput",
"UpdatePass_PreFrame",
"UpdatePass_Count"
]

var Vec3MathOp = [
"Vec3MathOp_Add",
"Vec3MathOp_Subtract",
"Vec3MathOp_Multiply",
"Vec3MathOp_Divide",
"Vec3MathOp_Min",
"Vec3MathOp_Max",
"Vec3MathOp_Dot",
"Vec3MathOp_Len",
"Vec3MathOp_LenSq",
"Vec3MathOp_Cross",
"Vec3MathOp_Norm"
]

var VehicleCategory = [
"VehicleCategory_Land",
"VehicleCategory_Air"
]

var VehicleHudType = [
"VehicleHudType_Car",
"VehicleHudType_Tank",
"VehicleHudType_Boat",
"VehicleHudType_Helicopter",
"VehicleHudType_Stationary",
"VehicleHudType_Strategic",
"VehicleHudType_Dummy",
"VehicleHudType_Count"
]

var VehicleInputTweakType = [
"CombinedTimedSpeedTweakType",
"CombinedSpeedTweakType",
"SpeedTweakType",
"ScaledSpeedTweakType"
]

var VehicleMode = [
"VmIdle",
"VmEntering",
"VmEntered",
"VmStarting",
"VmStarted",
"VmStopping",
"VmLeaving"
]

var VehicleStateType = [
"VehicleStateType_Normal",
"VehicleStateType_LowHealth",
"VehicleStateType_CriticalState",
"VehicleStateType_LAST_ITEM"
]

var VeniceNetworkUnlockGainedType = [
"VeniceNetworkUnlockGainedType_Bucket",
"VeniceNetworkUnlockGainedType_Rank",
"VeniceNetworkUnlockGainedType_Weapon",
"VeniceNetworkUnlockGainedType_Award"
]

var VertexElementClassification = [
"VertexElementClassification_PerVertex",
"VertexElementClassification_PerInstance",
"VertexElementClassification_Index"
]

var VertexElementFormat = [
"VertexElementFormat_Byte4", "10",
"VertexElementFormat_Byte4N", "11",
"VertexElementFormat_Comp3_10_10_10", "0x26",
"VertexElementFormat_Comp3_11_11_10", "0x2a",
"VertexElementFormat_Comp3N_10_10_10", "0x27",
"VertexElementFormat_Comp3N_11_11_10", "0x2b",
"VertexElementFormat_Comp4_10_10_10_2", "0x2e",
"VertexElementFormat_Comp4N_10_10_10_2", "0x2f",
"VertexElementFormat_Float", "1",
"VertexElementFormat_Float2", "2",
"VertexElementFormat_Float3", "3",
"VertexElementFormat_Float4", "4",
"VertexElementFormat_Half", "5",
"VertexElementFormat_Half2", "6",
"VertexElementFormat_Half3", "7",
"VertexElementFormat_Half4", "8",
"VertexElementFormat_Int", "0x1a",
"VertexElementFormat_Int2", "0x1b",
"VertexElementFormat_Int2N", "30",
"VertexElementFormat_Int3", "0x33",
"VertexElementFormat_Int4", "0x1c",
"VertexElementFormat_Int4N", "0x1f",
"VertexElementFormat_IntN", "0x1d",
"VertexElementFormat_None", "0",
"VertexElementFormat_Short", "14",
"VertexElementFormat_Short2", "15",
"VertexElementFormat_Short2N", "0x13",
"VertexElementFormat_Short3", "0x10",
"VertexElementFormat_Short3N", "20",
"VertexElementFormat_Short4", "0x11",
"VertexElementFormat_Short4N", "0x15",
"VertexElementFormat_ShortN", "0x12",
"VertexElementFormat_UByte4", "12",
"VertexElementFormat_UByte4N", "13",
"VertexElementFormat_UByteN", "50",
"VertexElementFormat_UComp3_10_10_10", "40",
"VertexElementFormat_UComp3_11_11_10", "0x2c",
"VertexElementFormat_UComp3N_10_10_10", "0x29",
"VertexElementFormat_UComp3N_11_11_10", "0x2d",
"VertexElementFormat_UComp4_10_10_10_2", "0x30",
"VertexElementFormat_UComp4N_10_10_10_2", "0x31",
"VertexElementFormat_UInt", "0x20",
"VertexElementFormat_UInt2", "0x21",
"VertexElementFormat_UInt2N", "0x24",
"VertexElementFormat_UInt3", "0x34",
"VertexElementFormat_UInt4", "0x22",
"VertexElementFormat_UInt4N", "0x25",
"VertexElementFormat_UIntN", "0x23",
"VertexElementFormat_UShort2", "0x16",
"VertexElementFormat_UShort2N", "0x18",
"VertexElementFormat_UShort4", "0x17",
"VertexElementFormat_UShort4N", "0x19"
]

var VertexElementUsage = [
"VertexElementUsage_Alpha", "0x97",
"VertexElementUsage_Binormal", "8",
"VertexElementUsage_BinormalSign", "9",
"VertexElementUsage_BoneIndices", "2",
"VertexElementUsage_BoneIndices2", "3",
"VertexElementUsage_BoneWeights", "4",
"VertexElementUsage_BoneWeights2", "5",
"VertexElementUsage_BranchInfo", "60",
"VertexElementUsage_ClipDistance0", "0x30",
"VertexElementUsage_ClipDistance1", "0x31",
"VertexElementUsage_Color0", "30",
"VertexElementUsage_Color1", "0x1f",
"VertexElementUsage_Custom", "230",
"VertexElementUsage_EyeVector", "0xd4",
"VertexElementUsage_FadePos", "90",
"VertexElementUsage_GlobalColorUv", "0xbd",
"VertexElementUsage_Height", "0xb5",
"VertexElementUsage_HeightfieldPixelSizeAndAspect", "190",
"VertexElementUsage_HeightfieldUv", "0xbb",
"VertexElementUsage_Index", "0x13",
"VertexElementUsage_InstanceId", "13",
"VertexElementUsage_InstanceUserData0", "14",
"VertexElementUsage_InstanceUserData1", "15",
"VertexElementUsage_LeftAndRotation", "0x9a",
"VertexElementUsage_LightDir", "0xe1",
"VertexElementUsage_LightInnerAndOuterAngle", "0xe0",
"VertexElementUsage_LightMatrix1", "0xe2",
"VertexElementUsage_LightMatrix2", "0xe3",
"VertexElementUsage_LightMatrix3", "0xe4",
"VertexElementUsage_LightMatrix4", "0xe5",
"VertexElementUsage_LightParams1", "220",
"VertexElementUsage_LightParams2", "0xdd",
"VertexElementUsage_LightSideVector", "0xdf",
"VertexElementUsage_LightSubParams", "0xde",
"VertexElementUsage_MaskUv", "0xbc",
"VertexElementUsage_MaskUVs0", "0xb6",
"VertexElementUsage_MaskUVs1", "0xb7",
"VertexElementUsage_MaskUVs2", "0xb8",
"VertexElementUsage_MaskUVs3", "0xb9",
"VertexElementUsage_Misc0", "0x98",
"VertexElementUsage_Misc1", "0x99",
"VertexElementUsage_Normal", "6",
"VertexElementUsage_PackedTexCoord0", "0x2c",
"VertexElementUsage_PackedTexCoord1", "0x2d",
"VertexElementUsage_PackedTexCoord2", "0x2e",
"VertexElementUsage_PackedTexCoord3", "0x2f",
"VertexElementUsage_ParentTerrainTextureNodeUv", "0xc1",
"VertexElementUsage_PatchUv", "180",
"VertexElementUsage_Pos", "1",
"VertexElementUsage_PosAndRejectCulling", "0x9f",
"VertexElementUsage_PosAndScale", "0x3d",
"VertexElementUsage_PosAndSoftMul", "150",
"VertexElementUsage_RadiosityTexCoord", "0x29",
"VertexElementUsage_Rotation", "0x3e",
"VertexElementUsage_SH_B", "0x9e",
"VertexElementUsage_SH_G", "0x9d",
"VertexElementUsage_SH_R", "0x9c",
"VertexElementUsage_Shadow", "160",
"VertexElementUsage_SpawnTime", "0x5b",
"VertexElementUsage_SpriteSize", "0x2b",
"VertexElementUsage_SpriteSizeAndUv", "0x3f",
"VertexElementUsage_SubMaterialIndex", "50",
"VertexElementUsage_Tangent", "7",
"VertexElementUsage_TerrainTextureNodeUv", "0xc0",
"VertexElementUsage_TexCoord0", "0x21",
"VertexElementUsage_TexCoord1", "0x22",
"VertexElementUsage_TexCoord2", "0x23",
"VertexElementUsage_TexCoord3", "0x24",
"VertexElementUsage_TexCoord4", "0x25",
"VertexElementUsage_TexCoord5", "0x26",
"VertexElementUsage_TexCoord6", "0x27",
"VertexElementUsage_TexCoord7", "40",
"VertexElementUsage_Unknown", "0",
"VertexElementUsage_UpAndNormalBlend", "0x9b",
"VertexElementUsage_UserMasks", "0xba",
"VertexElementUsage_Uv01", "210",
"VertexElementUsage_ViewIndex", "20",
"VertexElementUsage_VisInfo", "0x2a",
"VertexElementUsage_WorldPos", "0xd3",
"VertexElementUsage_WorldPositionXz", "0xbf",
"VertexElementUsage_WorldTrans1", "10",
"VertexElementUsage_WorldTrans2", "11",
"VertexElementUsage_WorldTrans3", "12",
"VertexElementUsage_XenonBarycentric", "0x11",
"VertexElementUsage_XenonIndex", "0x10",
"VertexElementUsage_XenonQuadID", "0x12"
]

var VertexNormalSpace = [
"VnsObject",
"VnsInstance",
"VnsWorld"
]

var VirtualGameState = [
"VirtualGameState_Inactive",
"VirtualGameState_Active",
"VirtualGameState_Expired",
"VirtualGameState_Recreate",
"VirtualGameState_Updated"
]

var VoiceChannel = [
"VoiceChannel_Off",
"VoiceChannel_Team",
"VoiceChannel_Squad",
"VoiceChannel_Loopback",
"VoiceChannel_Count"
]

var VoiceOverArithmeticExpressionType = [
"VoiceOverArithmeticExpressionType_Addition",
"VoiceOverArithmeticExpressionType_Subtraction",
"VoiceOverArithmeticExpressionType_Multiplication",
"VoiceOverArithmeticExpressionType_Division",
"VoiceOverArithmeticExpressionType_Difference"
]

var VoiceOverCompareExpressionType = [
"VoiceOverCompareExpressionType_Equals",
"VoiceOverCompareExpressionType_Differs",
"VoiceOverCompareExpressionType_Greater",
"VoiceOverCompareExpressionType_Less",
"VoiceOverCompareExpressionType_GreaterOrEquals",
"VoiceOverCompareExpressionType_LessOrEquals"
]

var VoiceOverContainerConditionMode = [
"VoiceOverContainerConditionMode_All",
"VoiceOverContainerConditionMode_Any"
]

var VoiceOverConversationInterruptMode = [
"VoiceOverConversationInterruptMode_Disallow",
"VoiceOverConversationInterruptMode_Allow",
"VoiceOverConversationInterruptMode_AllowSame"
]

var VoiceOverConversationQueueGroupPolyphony = [
"VoiceOverConversationQueueGroupPolyphony_Sources",
"VoiceOverConversationQueueGroupPolyphony_Conversations"
]

var VoiceOverConversationQueueMode = [
"VoiceOverConversationQueueMode_Always",
"VoiceOverConversationQueueMode_Never",
"VoiceOverConversationQueueMode_SamePriority"
]

var VoiceOverDialogTakeBehavior = [
"VoiceOverDialogTakeBehavior_Start",
"VoiceOverDialogTakeBehavior_Clip",
"VoiceOverDialogTakeBehavior_Continuous"
]

var VoiceOverLabelCompareMode = [
"VoiceOverLabelCompareMode_Any",
"VoiceOverLabelCompareMode_All",
"VoiceOverLabelCompareMode_One"
]

var VoiceOverLabelSourceMode = [
"VoiceOverLabelSourceMode_Combined",
"VoiceOverLabelSourceMode_Shared"
]

var VoiceOverLogicFlowMode = [
"VoiceOverLogicFlowMode_All",
"VoiceOverLogicFlowMode_One"
]

var VoiceOverPronunciationFallback = [
"VoiceOverPronunciationFallback_None",
"VoiceOverPronunciationFallback_Master"
]

var VoiceOverValueType = [
"VoiceOverValueType_Boolean",
"VoiceOverValueType_Integer",
"VoiceOverValueType_Float",
"VoiceOverValueType_Vector",
"VoiceOverValueType_Object",
"VoiceOverValueTypeCount"
]

var VoiceOverWaveNameTranslation = [
"VoiceOverWaveNameTranslation_FullName",
"VoiceOverWaveNameTranslation_PathOnly",
"VoiceOverWaveNameTranslation_NameOnly"
]

var VotingType = [
"VotingMap",
"VotingGameMode",
"VotingFriendlyFire"
]

var WarningPlayerType = [
"WPTInflictor",
"WPTVictim"
]

var WarnTarget = [
"wtWarnSoldierAndVehicle",
"wtWarnSoldier",
"wtWarnVehicle",
"wtWarnNone"
]

var WaveCodec = [
"WaveCodec_EaLayer3",
"WaveCodec_EaXma",
"WaveCodec_Xas",
"WaveCodec_EaSpeex",
"WaveCodec_Pcm",
"WaveCodec_Count"
]

var WavePriority = [
"WpNone",
"WpLow",
"WpNormal",
"WpHigh",
"WpPermanent"
]

var WaypointsSnappingSettings = [
"UseShapeSettings",
"SnapToTerrain",
"NoSnap"
]

var WaypointVaultType = [
"WaypointVaultType_VaultOverHigh",
"WaypointVaultType_VaultOntoLow",
"WaypointVaultType_VaultDownLow",
"WaypointVaultType_VaultDownHigh",
"WaypointVaultType_ClimbUpHigh",
"WaypointVaultType_ClimbOverHigh",
"WaypointVaultType_JumpAcross",
"WaypointVaultType_Count"
]

var WeaponAnimBaseSetEnum = [
"wabsRif",
"wabsPstl",
"wabsHgr",
"wabsAT",
"wabsShg",
"wabsLMG",
"wabsBag",
"wabsSnp",
"wabsCount",
"wabsNone"
]

var WeaponAnimType = [
"WeaponAnimType_NoAddon",
"WeaponAnimType_Bipod",
"WeaponAnimType_Foregrip",
"WeaponAnimType_40mm_GL",
"WeaponAnimType_40mm_GL_Fire",
"WeaponAnimType_Underslung_Shotgun",
"WeaponAnimType_Underslung_Shotgun_Fire",
"WeaponAnimType_Straight_Pull_Bolt",
"WeaponAnimType_Extended_Mag"
]

var WeaponClassEnum = [
"wc12gauge",
"wc338Magnum",
"wc357Magnum",
"wc44Magnum",
"wc45cal",
"wc46x30mm",
"wc50cal",
"wc545x45mmWP",
"wc556x45mmNATO",
"wc57x28mm",
"wc58x42mm",
"wc762x39mmWP",
"wc762x51mmNATO",
"wc762x54mmR",
"wc9x19mm",
"wc9x39mm",
"wcAssault",
"wcShotgun",
"wcSmg",
"wcLmg",
"wcSniper",
"wcUgl",
"wcHgr",
"wcAt",
"wcATMine",
"wcC4",
"wcAutoInjector",
"wcKnife",
"wcLaserDesignator",
"wcLaserPainter",
"wcMedKit",
"wcMortarStrike",
"wcPowerTool",
"wcTracerDart",
"wcRadioBeacon",
"wcEodBot",
"wcReconMav",
"wcUGS",
"wcCount",
"wcNone"
]

var WeaponClassification = [
"WCNone",
"WCPrimary",
"WCSecondary"
]

var WeaponFiringEvent = [
"WeaponFiringEvent_Push",
"WeaponFiringEvent_Pop",
"WeaponFiringEvent_PrimaryStartedFiringCallback",
"WeaponFiringEvent_PrimaryFireCallback",
"WeaponFiringEvent_PrimaryFireReleaseCallback",
"WeaponFiringEvent_PrimaryFireShotSpawnedCallback",
"WeaponFiringEvent_PrimaryFireAutomaticBeginCallback",
"WeaponFiringEvent_PrimaryFireAutomaticEndCallback",
"WeaponFiringEvent_PrimaryStoppedFiringCallback",
"WeaponFiringEvent_ReloadPrimaryCallback",
"WeaponFiringEvent_ReloadPrimaryEndCallback",
"WeaponFiringEvent_BoltActionCallback",
"WeaponFiringEvent_BoltActionEndCallback",
"WeaponFiringEvent_DetonationSwitchCallback",
"WeaponFiringEvent_HoldAndReleaseReleaseCallback",
"WeaponFiringEvent_UpdateRequired"
]

var WeaponOverrideValueType = [
"OverrideValue_BulletEntity_DistributeDamageOverTime",
"OverrideValue_BulletEntity_StartDamage",
"OverrideValue_BulletEntity_EndDamage",
"OverrideValue_BulletEntity_DamageFalloffStartDistance",
"OverrideValue_BulletEntity_DamageFalloffEndDistance"
]

var WeaponSlot = [
"WeaponSlot_0",
"WeaponSlot_1",
"WeaponSlot_2",
"WeaponSlot_3",
"WeaponSlot_4",
"WeaponSlot_5",
"WeaponSlot_6",
"WeaponSlot_7",
"WeaponSlot_8",
"WeaponSlot_9",
"WeaponSlot_NumSlots",
"WeaponSlot_NotDefined"
]

var WeaponSwitchingEnum = [
"wsLastPrimary", "11",
"wsMaxSlots", "10",
"wsMeleeWeapon", "7",
"wsNotUsed", "13",
"wsOtherPrimary", "12",
"wsSlot0", "0",
"wsSlot1", "1",
"wsSlot2", "2",
"wsSlot3", "3",
"wsSlot4", "4",
"wsSlot5", "5",
"wsSlot6", "6",
"wsSlot7", "7",
"wsSlot8", "8",
"wsSlot9", "9"
]

var WeaponUnlocks = [
"WeaponUnlocks_MaxAmount", "7"
]

var WheelPhysicsType = [
"wptNormal",
"wptFollow",
"wptStatic"
]

var WidgetHorisontalAlignment = [
"WHA_Left",
"WHA_Center",
"WHA_Right"
]

var WidgetVerticalAlignment = [
"WVA_Top",
"WVA_Center",
"WVA_Bottom"
]

var WorldViewMode = [
"WorldViewMode_Default",
"WorldViewMode_RawLinear",
"WorldViewMode_RawLinearAlpha",
"WorldViewMode_Diffuse",
"WorldViewMode_Specular",
"WorldViewMode_Emissive",
"WorldViewMode_Normal",
"WorldViewMode_Smoothness",
"WorldViewMode_Material",
"WorldViewMode_Light",
"WorldViewMode_LightDiffuse",
"WorldViewMode_LightSpecular",
"WorldViewMode_LightIndirect",
"WorldViewMode_LightTranslucency",
"WorldViewMode_LightOverdraw",
"WorldViewMode_SkyVisibility",
"WorldViewMode_SkyVisibilityRaw",
"WorldViewMode_Overdraw",
"WorldViewMode_DynamicAO",
"WorldViewMode_Occluders",
"WorldViewMode_RadiosityLightMaps",
"WorldViewMode_RadiosityDiffuseColor",
"WorldViewMode_RadiosityTargetUV",
"WorldViewMode_VelocityVector",
"WorldViewMode_DistortionVector"
]

var XenonShaderBranchType = [
"XsbtDefault",
"XsbtPredicate",
"XsbtPredicateBlock",
"XsbtBranch"
]

var XenonTessellationMode = [
"XenonTessellationMode_Discrete",
"XenonTessellationMode_Continuous",
"XenonTessellationMode_PerEdge"
]

var ZoomLevelActivateEventType = [
"ZoomLevelActivateEventType_Disable",
"ZoomLevelActivateEventType_Enable",
"ZoomLevelActivateEventType_ToggleOnLightSwitch"
]
