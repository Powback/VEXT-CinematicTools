
var AABBData = {
HalfExtents:"Vec3",
Position:"Vec3"
};

var AbstractAwardData = null;

var AbstractLeaderboardData = {
LeaderboardName:"string"
};

var AbstractLocoWaypointData = {
BaseTask:"AILocoBaseTaskData"
};

var AbstractPersistenceData = null;

var AbstractPersistentStatRef = null;

var ActionNode = {
ActionAsset:"CtrRef",
ActionKey:"int",
AppendIncomingParams:"bool",
DataInputs:"List<CtrRef>",
In:"CtrRef",
Out:"CtrRef",
Params:"List<string>"
};

var ActionSuppressor = {
ActionToSuppress:"EntryInputActionEnum",
SuppressingValue:"float"
};

var AdsrNodeData = {
A:"AudioGraphNodePort",
D:"AudioGraphNodePort",
Finished:"AudioGraphNodePort",
R:"AudioGraphNodePort",
Release:"AudioGraphNodePort",
S:"AudioGraphNodePort",
Trigger:"AudioGraphNodePort",
Value:"AudioGraphNodePort"
};

var AdvancedDogTagData = {
IsStatMeasuredInTime:"bool",
StatCode:"string",
StatSID:"string"
};

var AdvertisementComponentData = {
AdTexture:"string",
Identifier:"string"
};

var AdvertisementLevelDescriptionComponent = {
Identifier:"string",
Members:"List<AdvertisementZoneMember>"
};

var AdvertisementZoneMember = {
Filename:"string",
Identifier:"string"
};

var AeroDynamicPhysicsData = {
BodyDrag:"Vec3",
BodyDragOffsetXY:"Vec3",
BodyDragOffsetXZ:"Vec3",
BodyDragOffsetYZ:"Vec3"
};

var AIAimingConstraintsData = {
MaxPitch:"float",
MaxYaw:"float",
MinPitch:"float",
MinYaw:"float"
};

var AIDifficultyData = {
AccuracyIncreaseTimeModifier:"float",
FinalAccuracyModifierCrouching:"float",
FinalAccuracyModifierStanding:"float",
Name:"string",
ReadinessReactionTimeMultiplier:"float",
StartAccuracyModifierCrouching:"float",
StartAccuracyModifierStanding:"float"
};

var AIEntryData = {
Armament:"CtrRef",
EquipmentType:"CtrRef",
Forbidden:"bool",
HasExposedSoldier:"bool",
InterludeOnly:"bool",
InvalidForAI:"bool",
Mobility:"CtrRef",
ReuseTime:"float",
StrengthType:"fb.StrengthType"
};

var AiffWriterNodeData = {
FileName:"string",
In:"AudioGraphNodePort",
Plugin:"SoundGraphPluginRef",
Start:"AudioGraphNodePort",
Stop:"AudioGraphNodePort"
};

var AILocoBaseTaskData = {
AttentionChangeMovingTowards:"AntAttentionStateEnum",
AttentionStateChange:"AntAttentionStateEnum",
IsScripted:"bool",
PoseChange:"AntPoseEnum",
PoseChangeMovingTowards:"AntPoseEnum",
Radius:"float",
SpeedChangeMovingTowards:"AntSpeedLevel",
SpeedLevelChange:"AntSpeedLevel"
};

var AILocoBinding = {
AttentionState:"AntRef",
CurrentPoseEnum:"AntRef",
EnableProceduralHeadAim:"AntRef",
EndPoseEnum:"AntRef",
EnterExitPoseEnum:"AntRef",
LocoTarget:"AntRef",
RunStyle:"AntRef",
TargetSpeedLevel:"AntRef",
TargetWaypointPosition:"AntRef"
};

var AILocoComponentData = {
AnimationEntitySpacePriority:"int",
Binding:"AILocoBinding",
CoverBinding:"AILocoCoverBinding",
VaultBinding:"AILocoVaultBinding",
WantedYaw:"float"
};

var AILocoCoverBinding = {
AbsoluteDistance:"AntRef",
AngleToNormal:"AntRef",
CoverFireStyle:"AntRef",
CoverTypeEnum:"AntRef",
DistanceScale:"AntRef",
EnterCover:"AntRef",
EnterStrategy:"AntRef",
ExitCover:"AntRef",
ExitStyle:"AntRef",
IdleBehindCover:"AntRef",
IsCloseCover:"AntRef",
OutAngle:"AntRef",
PeekOut:"AntRef",
PeekType:"AntRef",
PrepareFire:"AntRef",
StopExitCoverOutAround:"AntRef",
ThreatAngle:"AntRef",
ThrowGrenade:"AntRef"
};

var AILocoCoverTaskData = {
CoverPose:"AntPoseEnum",
CoverType:"AntCoverEnum",
DistanceToNextWaypoint:"float",
EnterStrategy:"CoverEnterStrategy",
ExitAngle:"float",
ExitPose:"AntPoseEnum",
ExitStyle:"CoverExitStyle",
ForceExitCover:"bool",
OffsetLength:"float",
PeekOut:"CoverPeekType",
PrepareFireType:"CoverFireType",
ThreatPosition:"Vec3",
UseClientPosition:"bool",
WaitTime:"float",
WantedPos:"Vec3",
WorldAngle:"float"
};

var AILocoMoveTaskData = {
EnterPose:"AntPoseEnum",
ExitPose:"AntPoseEnum",
OverrideAngle:"bool",
UseClientPosition:"bool",
WaitTime:"float",
WantedPos:"Vec3",
WorldAngle:"float"
};

var AILocoVaultBinding = {
DistanceAfterVault:"AntRef",
DistanceBeforeVault:"AntRef",
HeightAfterVault:"AntRef",
HeightBeforeVault:"AntRef",
LengthOfVaultableObject:"AntRef",
Vault:"AntRef",
VaultType:"AntRef"
};

var AILocoVaultTaskData = {
DistanceAfterVault:"float",
DistanceBeforeVault:"float",
HeightAfterVault:"float",
HeightBeforeVault:"float",
LengthOfVaultableObject:"float",
StartPoint:"Vec3",
UseClientPosition:"bool",
VaultType:"WaypointVaultType",
WorldAngle:"float"
};

var AimAtOrderEntityData = null;

var AimerModifierData = {
LookSpeedMultiplier:"float",
OnlyInSupportedShooting:"bool"
};

var AimingConstraintEntityBinding = {
ProneAimDistance:"AntRef",
ProneAimLimit:"AntRef"
};

var AimingConstraintEntityCommonData = {
AimingConstraints:"AimingConstraintsData",
AimingConstraintsBinding:"AimingConstraintEntityBinding",
ConstraintMoveSpeedMultiplier:"float",
DisableAimingConstraintsDelay:"float",
ShuffleAnimationDelay:"float",
ShuffleAnimationThreshold:"float"
};

var AimingConstraintEntityData = {
CommonData:"CtrRef",
EnabledInProne:"bool"
};

var AimingConstraintsData = {
MaxPitch:"float",
MaxYaw:"float",
MinPitch:"float",
MinYaw:"float"
};

var AimingPoseData = {
AimSteadiness:"float",
MaximumPitch:"float",
MinimumPitch:"float",
RecoilMultiplier:"float",
SpeedMultiplier:"float",
TargetingFov:"float"
};

var AIProximityReactionsBinding = {
AIExplosionForce:"AntRef",
AIExplosionReaction:"AntRef",
AimUpAndDown:"AntRef",
AIReaction:"AntRef",
AIReactionDirection:"AntRef",
AIStunReaction:"AntRef",
AIStunReactionRandomFactor:"AntRef",
EnableProceduralHeadAim:"AntRef",
FireNearby:"AntRef",
FocusAiming:"AntRef",
FocusAimScale:"AntRef",
KillFromAnimation:"AntRef",
PlayerAnimationKill:"AntRef",
PlayerInitiatedRagdoll:"AntRef"
};

var AIProximityReactionsComponentData = {
Binding:"AIProximityReactionsBinding",
Enabled:"bool",
FireReactionDistance:"float",
MaxExplosionLookDistance:"float",
MinExplosionImpulseForce:"float"
};

var AirMissileJammingData = {
EnableAirMissileJamming:"bool",
JammingTime:"float",
MaxRadius:"float",
MaxTurnSpeed:"float",
MinRadius:"float",
MinTurnSpeed:"float",
Phi:"float",
QuietModeProbability:"float",
QuietModeTime:"float",
Theta:"float",
TurnCalculationTime:"float",
UpdateJammingPositionTime:"float"
};

var AirRadarData = {
CenterIcon:"UIHudIcon",
EastIcon:"UIHudIcon",
EnemyIcon:"UIHudIcon",
FriendlyIcon:"UIHudIcon",
HeatSensitivity:"float",
LaserPaintedIcon:"UIHudIcon",
MissileIcon:"UIHudIcon",
NorthIcon:"UIHudIcon",
RadarRange:"float",
RadarSensitivity:"float",
SouthIcon:"UIHudIcon",
SubScreen:"SubScreenData",
TrackLaserPaintedObjects:"bool",
TrackOnlyUsedVehicles:"bool",
UseCameraComponentTransform:"bool",
WestIcon:"UIHudIcon"
};

var AirResistanceData = {
DragFactor:"float"
};

var AISettingsData = {
CoverConstants:"CtrRef",
DebugConstants:"CtrRef",
DecisionConstants:"CtrRef",
DefaultBehaviourTemplate:"CtrRef",
DefaultVehicleType:"CtrRef",
PositionEvaluationConstants:"CtrRef",
ReadinessLevels:"fb.ReadinessLevels",
SoundEnvironmentConstants:"CtrRef",
TimingConstants:"CtrRef"
};

var AISystemAsset = {
Behaviours:"CtrRef",
Orders:"CtrRef",
Settings:"CtrRef"
};

var AIVehicleBehaviourData = {
Behaviours:"List<string>",
Controls:"List<string>",
Goals:"List<string>",
Intents:"List<IntentData>",
Name:"string"
};

var AIVehicleTypes = {
Goals:"List<CtrRef>",
Intents:"List<CtrRef>",
VehicleTypes:"List<CtrRef>"
};

var AIWeaponData = {
AdditionalMinimumAccuracyAtMinRange:"float",
AimAngularVelocity:"float",
AimHighIndirectPath:"bool",
AimOrigin:"fb.AimOrigin",
AimTransitionFireDelay:"float",
AimWhileReloading:"bool",
AllowedAgainstImmortals:"bool",
AngleToTargetSnap:"float",
BurstLimitFar:"BurstLimit",
BurstLimitNear:"BurstLimit",
CanAltAttack:"bool",
CanSuppress:"bool",
DisableWeaponSway:"bool",
FinalAccuracyPercentage:"float",
GravityModifier:"float",
InaccuracyFollowsTarget:"bool",
Indirect:"bool",
InnerInaccurateDistance:"float",
IsAiAllowed:"bool",
IsBlindFireAllowed:"bool",
IsMelee:"bool",
IsStandStill:"bool",
LostTargetBurstCoolDownModifier:"float",
MaxBurstCoolDownTime:"float",
MaxExtraReloadTime:"float",
MaxRange:"float",
MinBurstCoolDownTime:"float",
MinExtraReloadTime:"float",
MinimumAccuracyBeforeFiring:"float",
MinRange:"float",
OptimalRangePercentage:"float",
OuterInaccurateDistance:"float",
ReloadBehavior:"fb.ReloadBehavior",
StartAccuracyPercentage:"float",
Strengths:"fb.Strengths",
SweepDistance:"float",
SweepFirstAttack:"bool",
SweepTime:"float",
SweepType:"SweepSelectionType",
UseFromCover:"bool",
UseInaccuracyAtCloseRange:"bool",
UseZoom:"bool",
WaitTimeBeforeFire:"float"
};

var AlignmentData = {
AlignAction:"EntryInputActionEnum",
Speed:"float",
StopTolerance:"float"
};

var AllowedVehiclesData = null;

var AlternateCameraViewData = {
AllowFieldOfViewScaling:"bool",
BlackDuration:"float",
FadeInDuration:"float",
FadeOutDuration:"float",
FadeToBlack:"bool",
FieldOfView:"float",
FLIREnabled:"bool",
FovTransitionTime:"float",
Hud:"HudData",
InputSuppression:"InputSuppressionData",
LockMeshToRenderView:"bool",
MaskMeshBlueprint:"CtrRef",
Mesh:"CtrRef",
MeshOffset:"Vec3",
ScreenExposureAreaScale:"float",
ToggleViewChange:"bool",
UseProfileOptionForToggleViewChange:"bool",
WorldSpaceLockEfficiency:"float"
};

var AlternateSpawnEntityData = {
Enabled:"bool",
Priority:"float",
Team:"TeamId"
};

var AmmoConfigData = {
AmmoBagPickupAmount:"int",
AmmoBagPickupDelayMultiplier:"float",
AmmoPickupMaxAmount:"uint",
AmmoPickupMinAmount:"uint",
AutoReplenishDelay:"float",
AutoReplenishMagazine:"bool",
MagazineCapacity:"int",
NumberOfMagazines:"int",
TraceFrequency:"uint"
};

var AmmoCrateEntityData = {
EnableReplenish:"bool",
Marker:"CtrRef",
Model:"CtrRef",
Radius:"float",
RefillDelay:"float"
};

var AndEntityData = {
In1:"bool",
In2:"bool",
Realm:"fb.Realm"
};

var AngleOfImpactData = {
Enabled:"bool",
Zone12Delimiter:"float",
Zone1Multiplier:"float",
Zone23Delimiter:"float",
Zone2Multiplier:"float",
Zone3Multiplier:"float"
};

var Animated1pOnlyWeaponBinding = {
CameraFreeWeight:"AntRef",
Deploy1P:"AntRef",
HideWeapon1p:"AntRef",
UndeployFinished:"AntRef"
};

var Animated3pOnlyWeaponBinding = {
Deploy3P:"AntRef",
HideWeapon3p:"AntRef"
};

var AnimatedCameraData = {
CameraBone:"string",
FovBone:"string",
Skeleton:"CtrRef"
};

var AnimatedDestructionComponentData = null;

var AnimatedDriverEntityData = {
DelayAnimationWheelTransform:"bool",
InputTransform:"LinearTransform",
MovementStateStandThreshold:"float",
Pitch:"NormalizeSettings",
Roll:"NormalizeSettings",
VehicleBoost:"AntRef",
VehicleBrake:"AntRef",
VehicleClutch:"AntRef",
VehicleMovementState:"AntRef",
VehicleSpeed:"AntRef",
Yaw:"NormalizeSettings"
};

var AnimatedPointCloudAsset = null;

var AnimatedPointCloudAttributeDesc = {
DFrameQuantization:"PointCloudAttributeQuantization",
IFrameQuantization:"PointCloudAttributeQuantization",
Usage:"PointCloudAttributeUsage"
};

var AnimatedPointCloudComponentData = {
ExternalTime:"float",
PointCloud:"CtrRef",
StartPaused:"bool"
};

var AnimatedPointCloudEntityData = {
ExternalTime:"float",
PointCloud:"CtrRef",
Realm:"fb.Realm",
StartPaused:"bool"
};

var AnimatedSkeletonDatabase = {
Items:"List<AnimatedSkeletonDatabaseItem>",
Ragdolls:"List<CtrRef>"
};

var AnimatedSkeletonDatabaseItem = {
Asset:"CtrRef",
HeadBone:"string",
HipBone:"string",
Names:"List<int>",
Ragdoll:"CtrRef",
RagdollCollision:"CtrRef",
SoldierCollision:"CtrRef",
SpecialBones:"List<string>"
};

var AnimatedTransformEntityData = {
Animatable:"AntRef",
BoneName:"string",
Controller:"AntRef",
ExternalTime:"float"
};

var AnimatedWeaponBinding = {
AbortVehicleDeploy:"AntRef",
AIAllowFire:"AntRef",
AIAltFireFromAnt:"AntRef",
AimBody:"AntRef",
AimBodyWeight:"AntRef",
AimingEnabled:"AntRef",
AimTargetPosBody:"AntRef",
AltDeploy:"AntRef",
AlwaysAimHead:"AntRef",
AnimType:"AntRef",
ATType:"AntRef",
BagType:"AntRef",
BoltAction:"AntRef",
BreathControl:"AntRef",
BulletsLeftInGun:"AntRef",
CurrentProjectileIndex:"AntRef",
Deploy:"AntRef",
DeploySpeed:"AntRef",
DisableZoomToggleWeight:"AntRef",
Dispersion:"AntRef",
Fire:"AntRef",
FireHoldAndRelease:"AntRef",
FireModeChanged:"AntRef",
FireSimple:"AntRef",
FireSingle:"AntRef",
FirstShotSpawned:"AntRef",
GunDown:"AntRef",
HgrType:"AntRef",
IsSprinting:"AntRef",
JustStartedSprinting:"AntRef",
KickBackInIronSight:"AntRef",
LightEnabled:"AntRef",
LMGType:"AntRef",
LowerGun:"AntRef",
MeleeAttack:"AntRef",
NumberOfBulletsLeftInGun:"AntRef",
OffsetX:"AntRef",
OffsetY:"AntRef",
OffsetZ:"AntRef",
OneHanded:"AntRef",
OneHandedAiming:"AntRef",
PreparingToBash:"AntRef",
PstlType:"AntRef",
PumpAction:"AntRef",
QuickSwitch:"AntRef",
QuickThrow:"AntRef",
QuickThrowType:"AntRef",
Reload:"AntRef",
ReloadShotgun:"AntRef",
RflType:"AntRef",
ShgType:"AntRef",
SnpType:"AntRef",
TriggerZoomGunTwitch:"AntRef",
Undeploy:"AntRef",
UnDeploySpeed:"AntRef",
WeaponActionESIG:"AntRef",
WeaponChooserSignal:"AntRef",
WeaponClassSignal:"AntRef",
Zoom:"AntRef",
ZoomingTime:"AntRef",
ZoomInSpeed:"AntRef",
ZoomOutSpeed:"AntRef",
ZoomParameter:"AntRef",
ZoomScaleFactor:"AntRef"
};

var AnimationConfigurationData = {
ShootModuleData:"AnimationConfigurationShootModuleData",
WeaponOffsetModuleData:"CtrRef",
WeaponSpeedModuleData:"CtrRef"
};

var AnimationConfigurationShootModuleData = {
ZoomedKickbackFactor:"float"
};

var AnimationControlledStateData = {
UpNormalTolerance:"float"
};

var AnimationDrivenBinding = {
EnableCollision:"AntRef",
Velocity:"AntRef"
};

var AnimationEnumerationChoiceEntityData = {
Realm:"fb.Realm",
Value:"int"
};

var AnimationEnumerationEntityData = {
AntEnum:"CtrRef",
Realm:"fb.Realm"
};

var AnimationSignalEntityData = {
Continuous:"bool",
FloatGameState:"AntRef",
IntGameState:"AntRef",
Realm:"fb.Realm",
Reset:"bool",
Signal:"AntRef",
ValueFloat:"float",
ValueInt:"int"
};

var AnimationSpawnTemplate = {
RunStyle:"CtrRef"
};

var AnimationTurretRotationComponentData = {
OutputWorldTransform:"bool",
Rotations:"List<TurretRotationInfo>",
SoldierBaseIndex:"int",
UseVehicleWorldTransform:"bool"
};

var AntAnimatableComponentData = {
AnimationControlledFromStart:"bool",
AnimationData:"AntAnimationHandlerData",
AutoActivate:"bool",
ForceDisableCulling:"bool",
Mesh:"CtrRef",
Realm:"fb.Realm",
SubRealm:"fb.SubRealm"
};

var AntAnimatableData = {
Actor:"AntRef",
LeftHandEffectorDisableOverride:"AntRef",
MasterSkeletonAsset:"CtrRef",
ProceduralAwareness:"CtrRef",
RightHandEffectorDisableOverride:"AntRef"
};

var AntAnimationHandlerData = {
Animatable:"AntAnimatableData",
AntPackageData:"List<CtrRef>",
BonesToMirror:"List<GameplayBone>",
EnableMasterSlaveCopy:"bool",
IsProp:"bool",
LodBinding:"fb.LodBinding",
ReportBackFromAnt:"bool",
RootController:"AntRef"
};

var AntAnimationSetAsset = {
ActorAssetIndex:"int",
AllowAnimationCulling:"bool",
ClipAssetIndices:"List<int>",
LoopingClipAssetIndices:"List<int>",
SceneOpMatrixAssetIndex:"int",
SkeletonAsset:"CtrRef",
UseTraj2Ref:"bool"
};

var AntDrivenComponentData = {
CharacterGameState:"AnimationDrivenBinding"
};

var AntDynamicAvoidanceBinding = {
DistanceUntilCollision:"AntRef",
NormalizedVelocity:"AntRef",
Speed:"AntRef",
TimeUntilCollision:"AntRef"
};

var AntEnumeration = {
AntAsset:"AntRef",
Value:"int"
};

var AntEventData = {
Event:"EventSpec",
TagId:"int"
};

var AntEventEntityData = {
AutoActivate:"bool",
OnEnterEvents:"List<AntEventData>",
OnLeaveEvents:"List<AntEventData>",
OnUpdateEvents:"List<AntEventData>",
SendAsPlayerEvent:"bool"
};

var AntInteractionBinding = {
OtherAnimatableID:"AntRef"
};

var AntInteractionData = {
AntBindings:"AntInteractionBinding"
};

var AntiRollBar = {
Stiffness:"float",
TorqueActivationLimit:"float"
};

var AntiRollBars = {
Front:"CtrRef",
Rear:"CtrRef"
};

var AntiSpamConfig = {
DetectionInterval:"float",
DetectionIntervalMaxMessageCount:"uint",
NotificationSid:"string",
SecondsBlocked:"uint",
ServerSideMessageCountTolerance:"uint",
ServerSideSecondsBlockedTolerance:"uint",
StillBlockedSid:"string",
WarningSound:"CtrRef"
};

var AntMemorySettings = {
RTPoolChooserControllers:"int",
RTPoolClipControllers:"int",
RTPoolLayersControllers:"int",
RTPoolLoopingControllers:"int",
RTPoolStateflowControllers:"int",
RTPoolStateflowNodeControllers:"int",
RTPoolTransitionControllers:"int",
RTPoolTransparentControllers:"int"
};

var AntPackageAsset = {
ChunkSize:"uint",
PackagingType:"AntPackagingType",
StreamingGuid:"GUID",
Win32FileName:"string",
XePs3FileName:"string"
};

var AntProjectAsset = {
AntNativeProjectName:"string",
PackageAssets:"List<CtrRef>",
ProjectId:"int",
SceneOp:"AntRef"
};

var AntRef = {
AssetId:"int"
};

var AntSettings = {
AllowVariableTickLength:"bool",
BlockOnJobs:"bool",
CheckGiantSoldiers:"float",
ClientEmulatesServer:"bool",
DetailedCollisionSpeedLimit:"float",
DisableAILodFeature:"bool",
DisableAnimManagerSceneOps:"bool",
DisableModelAnimationCulling:"bool",
EnableDebugLogFile:"bool",
EnableJobs:"bool",
EnablePA:"bool",
EnablePackageCache:"bool",
EnablePoseJobs:"bool",
ForceLodDistance:"float",
ForcePoseUpdate:"bool",
InterpolatePoses:"bool",
LeanSignalClamp:"float",
LeanSignalScale:"float",
MaxAnimatablesPerPoseJob:"int",
MaxInterpolationSlots:"int",
MaxSingleBoneInterpolationSlots:"int",
ReducedInterpolationDistance:"float",
RunAsHighPriority:"bool",
TrajectoryInterpolationDistance:"float",
UpdateEnable:"bool",
UpdateLoddingEnable:"bool",
UseCameraFov:"bool",
UseHIK:"bool",
UsePA:"bool",
UseWeaponFov:"bool"
};

var AntTrackData = {
AntTrackItemDatas:"List<CtrRef>"
};

var AntTrackItemData = {
Controller:"AntRef",
NumTicks:"uint",
ResumeAtEnd:"bool",
SequenceTrackIndex:"int",
StartTime:"int"
};

var AreaProximityEntityData = {
AutoStart:"bool",
ProximityDistance:"float",
Realm:"fb.Realm",
UpdatePass:"fb.UpdatePass"
};

var AreaTriggerEntityData = {
GeometryTransform:"LinearTransform",
Include:"AreaTriggerInclude",
InsideAreaEventRepeatTime:"float",
OneInsideAreaEventPerSoldier:"bool",
Radius:"float",
ResetOnEnable:"bool",
TriggerOnLeaveOnDeath:"bool",
TriggerOnLeaveOnDisable:"bool",
TriggerOnlyOnLeave:"bool",
UseCharacterEntity:"bool"
};

var AreaValueTeam = {
AreaValue:"int",
Team:"TeamId"
};

var ArmamentData = {
IsAntiAircraft:"bool",
ThreatLength:"int",
TurretData:"CtrRef"
};

var ArmDisarmAwardEntityData = null;

var ArtilleryStrikeEntityData = {
DurationOfArtilleryStrike:"float",
FollowSoldier:"bool",
HeightOffsetWhenFollowingSoldier:"float",
MaxDelayBetweenProjectiles:"float",
MaxDelayBetweenStrikes:"float",
MaxProjectilesPerStrike:"uint",
MinDelayBetweenProjectiles:"float",
MinDelayBetweenStrikes:"float",
MinProjectilesPerStrike:"uint",
MinRadiusToSoldier:"float",
MissileData:"CtrRef",
MissileSpawnRadius:"float",
NumberOfStrikes:"uint",
RadiusWhenFollowingSoldier:"float"
};

var ArtilleryStrikeWeaponData = {
AimingCameraFov:"float",
AimingCameraHeight:"float",
AimingCameraOffset:"float",
Camera:"CtrRef",
DelayBeforeAimingCamera:"float",
EnableCameraRotation:"bool",
EnableProjectileTrails:"bool",
FireCameraTime:"float",
FireProjectileFromWeapon:"bool",
IncreaseSpawnHeightWithDistance:"bool",
MaxRandomSpawnHeight:"float",
MaxStrikeDistance:"float",
SpawnHeight:"float",
SpawnHeightMultiplier:"float",
StrikeCameraFov:"float",
StrikeCameraHeight:"float",
StrikeCameraOffset:"float",
StrikeCameraTime:"float",
StrikeRadius:"float",
ValidMaxAngle:"float",
ValidMaxDistance:"float",
ValidMinDistance:"float"
};

var AssemblyDescriptorData = null;

var Asset = {
Name:"string"
};

var AssetAabbs = {
PartAabb:"List<AxisAlignedBox>"
};

var AudioCurve = {
CurveType:"AudioCurveType",
Points:"List<AudioCurvePoint>"
};

var AudioCurvePoint = {
K:"float",
X:"float",
Y:"float"
};

var AudioGraphAssetParameter = null;

var AudioGraphData = {
Nodes:"List<CtrRef>",
PublicAssetParameters:"List<CtrRef>",
PublicEvents:"List<CtrRef>",
PublicParameters:"List<CtrRef>",
PublicValueCount:"ushort",
ValueCount:"ushort"
};

var AudioGraphEvent = null;

var AudioGraphNodeData = null;

var AudioGraphNodePort = {
IsConnected:"bool",
UnconnectedValue:"float",
ValueIndex:"ushort"
};

var AudioGraphNodePortGroup = null;

var AudioGraphParameter = {
DefaultValue:"float",
NameHash:"uint",
ValueIndex:"ushort"
};

var AudioLanguage = {
LanguageMapping:"LanguageFormat",
Name:"string"
};

var AudioLanguageMapping = {
Source:"CtrRef",
Target:"CtrRef"
};

var AudioLanguagesDependancyObject = {
AudioLanguages:"List<CtrRef>"
};

var AudioLanguageSetting = {
DisplayName:"string",
IsDefault:"bool",
Mappings:"List<AudioLanguageMapping>",
Name:"string",
NameHash:"uint"
};

var AudioMaterialDefinitions = null;

var AudioObstructionMaterialInfo = {
GainReduction:"float",
Material:"CtrRef",
ObstructionFrequency:"float"
};

var AudioSettings = {
AudioCoreCpuLoadLimit:"float",
AudioCoreCpuLoadRecovery:"float",
AudioCoreMaxMixJobThreadCount:"int",
AudioCoreMinProcStageVoicesToGoWide:"int",
AudioCoreMixJobThreadCount:"int",
AudioCoreMultipleMixJobsEnabled:"bool",
AudioCoreThread:"int",
DelayLineAllocSize:"uint",
MaxAudibleSoundCount:"uint",
ReverbAllocSize:"uint",
WaveCacheHeadroom:"uint",
WaveCacheMaxReadActiveCount:"uint",
WaveCacheMaxReadIssueCount:"uint",
WaveCachePruneTimeLimit:"float",
WaveCacheRsxPruneTimeLimit:"float",
WaveCacheRsxSize:"uint",
WaveCacheSize:"uint"
};

var AudioSystemAsset = {
DefaultLanguage:"CtrRef",
DefaultWave:"CtrRef",
DopplerFactor:"float",
Languages:"List<CtrRef>",
LanguageSettings:"List<CtrRef>",
MasterPatch:"CtrRef",
MixerSystem:"CtrRef",
SampleRate:"uint",
Scopes:"List<CtrRef>",
ScopeSetups:"List<CtrRef>",
ScopeStrategies:"List<CtrRef>",
SoundSpeed:"float",
StreamPools:"List<CtrRef>",
Tests:"CtrRef"
};

var AutoAimData = {
AutoAimInnerBoxExtends:"Vec3",
AutoAimInnerBoxOffset:"Vec3",
AutoAimOuterBoxExtends:"Vec3",
AutoAimOuterBoxOffset:"Vec3",
PoseType:"CharacterPoseType"
};

var AutoSquadEntityData = {
SquadId:"fb.SquadId"
};

var AutoTeamEntityData = {
AutoBalance:"bool",
ForceIntoSquad:"bool",
PlayerCountNeededToAutoBalance:"uint",
RotateTeamOnNewRound:"bool",
TeamAssignMode:"fb.TeamAssignMode",
TeamDifferenceToAutoBalance:"uint"
};

var AvengerScoringHandlerData = {
AvengerKillTimeout:"float"
};

var AwardableTreeBase = {
GeneralCriteria:"List<CtrRef>",
GeneralStatistics:"bool",
StatCategoryTreeCollection:"CtrRef"
};

var AwardAchievementData = null;

var AwardData = {
ActiveOnCreation:"bool",
Bucket:"ScoringBucket",
Code:"string",
Criteria:"List<CtrRef>",
Dependencies:"List<CriteriaAward>",
Description:"string",
FilteredChildAwards:"List<CtrRef>",
Group:"AwardGroup",
ImageFancyName:"string",
ImageName:"string",
ImageSmallName:"string",
KitAssociation:"AwardKitAssociation",
Licenses:"List<string>",
MaxRepetitions:"uint",
Multiplicity:"StatsMultiplicity",
NameSid:"string",
ParentAward:"CtrRef",
Repeat:"AwardType",
Score:"float",
SoundName:"string",
UnlockGates:"CtrRef",
UnlockInfos:"List<BasicUnlockInfo>",
Visible:"bool"
};

var AwardDataTree = {
FilteredAwards:"List<CtrRef>"
};

var AwardHeaderData = {
Group:"AwardGroup",
Multiplicity:"StatsMultiplicity"
};

var AwardStarData = {
StarTemplate:"CtrRef"
};

var AwardStarNameData = {
NameInstances:"List<AwardStarNameInstance>"
};

var AwardStarNameInstance = {
Category:"CtrRef",
Name:"string"
};

var AwardStatus = {
Code:"string",
Counters:"List<CounterStatus>",
CurrentValue:"uint",
IsCounting:"bool",
OriginalValue:"uint"
};

var AxesInputActionData = {
Axis:"InputDeviceAxes",
NormalizeInput:"bool"
};

var BandPassFir64NodeData = {
Bandwidth:"AudioGraphNodePort",
Frequency:"AudioGraphNodePort",
In:"AudioGraphNodePort",
Out:"AudioGraphNodePort",
Plugin:"SoundGraphPluginRef"
};

var BandPassIir2NodeData = {
Bandwidth:"AudioGraphNodePort",
Frequency:"AudioGraphNodePort",
In:"AudioGraphNodePort",
Out:"AudioGraphNodePort",
Plugin:"SoundGraphPluginRef"
};

var BangerEntityData = {
DestructiblePartCount:"uint",
Explosion:"CtrRef",
Mesh:"CtrRef",
Scales:"List<float>",
TimeToLive:"float",
UseVariableNetworkFrequency:"bool"
};

var BangerSpawnImpulseParams = {
AngularDamping:"float",
LinearDamping:"float",
MaxHorizontalAngle:"float",
MaxStrength:"float",
MaxVerticalAngle:"float",
MinHorizontalAngle:"float",
MinStrength:"float",
MinVerticalAngle:"float",
WaterStrengthModifier:"float"
};

var BaseEmitterData = {
EmitterAsset:"CtrRef"
};

var BaseShapeData = null;

var BaseSkeletonAsset = null;

var BasicDogTagData = null;

var BasicUnlockInfo = {
AdditionalLicenses:"List<string>",
Identifier:"uint",
Licenses:"List<string>",
StringId:"string",
UnlockGuid:"GUID",
UnlockScore:"uint"
};

var BehaviourData = {
Name:"string"
};

var BehaviourTemplateData = {
AccuracyIncreaseTime:"float",
AccuracyModifier:"float",
AccuracyModifierVsNonHumans:"float",
AltAttackProbability:"float",
AlwaysInFirePose:"CoverFireType",
AlwaysStrafeToCoversBehindMe:"bool",
AlwaysStrafeToCoversWithinDistance:"float",
AlwaysStrafeToFirstCover:"bool",
AlwaysUpdate:"bool",
AttackUrgencyModifier:"float",
CanMeleeFromScriptedCover:"bool",
ChargeSurpriseFlankedDistance:"float",
ChargeSurpriseNearDistance:"float",
ChargeSurpriseVelocity:"float",
CloseRangeAccuracyDistanceOverride:"float",
CoverSwitchTime:"FloatRangeDefaultZero",
CoverWaitTime:"FloatRange",
CrouchProbability:"float",
DisableMissileGravity:"bool",
ExplosiveObjectChance:"float",
FireBlindOutBurstCount:"UIntRange",
FireBlindOutChance:"float",
FireBlindOverBurstCount:"UIntRange",
FireBlindOverChance:"float",
FireGrenadeBlindOverBurstCount:"UIntRange",
FireGrenadeBlindOverChance:"float",
FireGrenadeStepOutBurstCount:"UIntRange",
FireGrenadeStepOutChance:"float",
FireLeanBurstCount:"UIntRange",
FireLeanChance:"float",
FireLmgBurstCount:"UIntRange",
FireLmgChance:"float",
FireOverBurstCount:"UIntRange",
FireOverChance:"float",
FireStepOutBurstCount:"UIntRange",
FireStepOutChance:"float",
FireStepOutFireFromHipBurstCount:"UIntRange",
FireStepOutFireFromHipChance:"float",
FireStepOutSlowBurstCount:"UIntRange",
FireStepOutSlowChance:"float",
FireStepOutStandToCrouchBurstCount:"UIntRange",
FireStepOutStandToCrouchChance:"float",
FireStepOutUrgentBurstCount:"UIntRange",
FireStepOutUrgentChance:"float",
FireStyleTimeout:"float",
InvestigateStopDelay:"float",
InvestigateVisualTestDist:"float",
LeaveVehicleOnSearchAndDestroyOrder:"bool",
MaxAngleDiffForBlindFire:"float",
MaxAttackBursts:"uint",
MaxSuppressTime:"float",
MeleeMaxTime:"float",
MeleeProbability:"float",
MeleeRange:"float",
MinAttackBursts:"uint",
ReadinessReactionTimeMultiplier:"float",
ReloadBelowPercent:"float",
ShotAtFireBlindOutChance:"float",
ShotAtFireBlindOverChance:"float",
ShotAtFireGrenadeBlindOverChance:"float",
ShouldFireThroughSmoke:"bool",
SoldierMovementVolumeOverride:"float",
StandProbability:"float",
StepBackIfBeingShot:"bool",
StrafeToCoverProbablity:"float",
SuppressIndirectProbability:"float",
SuppressingBurstCount:"int",
SuppressingBurstCountMax:"int",
SuppressingBurstCountMin:"int",
TargetDangerFactor:"float",
TargetDistanceFactor:"float",
TargetIsAttackingFactor:"float",
TargetStrengthFactor:"float",
TurnAgainstTargetDistance:"float",
UseShotAtSettings:"bool"
};

var BFAISettingsData = {
CombatConstants:"CtrRef",
FollowConstants:"CtrRef",
MovementConstants:"CtrRef",
SearchAndDestroyConstants:"CtrRef",
TurretControlConstants:"CtrRef"
};

var BFAISystem = null;

var BFOrderEntityData = {
ForbiddenToFire:"bool"
};

var BFServerConfiguration = {
Schedules:"List<BFServerConfigurationSchedule>"
};

var BFServerConfigurationData = {
Licenses:"string",
ScoreMultiplier:"uint"
};

var BFServerConfigurationSchedule = {
Data:"BFServerConfigurationData",
Levels:"List<string>",
Licenses:"List<string>"
};

var BFServerSettings = {
AutoBalance:"bool",
BannerUrl:"string",
CTFRoundTimeModifier:"float",
DeathmatchFriendZoneFallbackCount:"int",
DefaultVoiceChannel:"VoiceChannel",
ForceTeamForPlayerTag:"string",
ForceTeamForPlayerTagTeam:"int",
GameMod:"string",
GameSize:"uint",
GunMasterWeaponsPresetIndex:"uint",
IsKillerCameraEnabled:"bool",
IsManDownRotationEnabled:"bool",
KickAPlayerOnVIPJoin:"bool",
MapSequencerEnabled:"bool",
NoInteractivityBanRoundCount:"uint",
NoInteractivityThresholdLimit:"float",
NoInteractivityTimeoutTime:"float",
OverrideAutoBalance:"bool",
OverrideServerConfigurationStartTime:"string",
PingSite:"string",
PremiumStatus:"bool",
PunkBusterVersion:"string",
RoundLockdownCountdown:"int",
RoundMaxPlayerCount:"int",
RoundMinPlayerCount:"int",
RoundRestartCountdown:"int",
RoundWarmupTimeout:"int",
ServerAdministrationMapRotation:"string",
ServerAdministrationMapRotationInformation:"string",
ServerAdministrationRoundsPerMap:"uint",
ServerAdministrationSettings:"string",
ServerConfigurationRefreshInterval:"int",
ServerDescription:"string",
ServerMessage:"string",
ServerPreset:"string",
Spectators:"string",
TeamKillCountForKick:"uint",
TeamKillKickForBan:"uint",
TeamKillValueDecreasePerSecond:"float",
TeamKillValueForKick:"float",
TeamKillValueIncrease:"float",
TeamSwitchImbalanceLimit:"uint"
};

var BFTargetEvaluatorComponentData = {
Settings:"CtrRef"
};

var BigWorldSetting = {
MaxDelayTimeInMinutes:"float",
MaxDistance:"int",
MinDelayTimeInMinutes:"float",
MinDistance:"int",
Sound:"CtrRef"
};

var BigWorldSettingsAsset = {
Settings:"List<CtrRef>"
};

var BinaryLogicNode = {
DataSourceInfo:"UIDataSourceInfo",
False:"CtrRef",
In:"CtrRef",
True:"CtrRef"
};

var BinaryOption = {
Name:"string"
};

var BlazeCreateGameParameters = {
Base:"MatchmakingCreateGameParameters"
};

var BlazePresenceBackendData = {
MatchmakingSessions:"List<CtrRef>",
UseDemanglerService:"bool"
};

var BlazeServerBackendData = {
ConfigUrl:"OnlineEnvironmentConsoleUrl",
CreateParameters:"BlazeCreateGameParameters"
};

var Blueprint = null;

var BlueprintAndVariationPair = {
BaseAsset:"CtrRef",
Variation:"CtrRef"
};

var BlueprintBundle = {
Blueprint:"CtrRef",
RegistryContainer:"CtrRef"
};

var BlueprintBundleLoaderEntityData = null;

var BlueprintBundleMetadata = {
BlueprintName:"string",
BundleName:"string",
BundlePathName:"string"
};

var BlueprintBundleMetadataContainer = {
Items:"List<CtrRef>"
};

var BlueprintBundleSelectorEntityData = {
BlueprintSelector:"CtrRef"
};

var BlueprintBundleStateLogicEntityData = {
BundleNames:"List<string>"
};

var BlueprintContainerItem = {
Metadata:"CtrRef"
};

var BlurEffectData = {
BulletFalloffSpeed:"float",
BulletStrength:"float",
DispersionStrength:"float",
DispersionThreshhold:"float",
ExplosionFalloffSpeed:"float",
ExplosionStrength:"float"
};

var BoatFloatPhysicsData = {
FrontRatio:"float"
};

var BoltActionData = {
BoltActionDelay:"float",
BoltActionTime:"float",
ForceBoltActionOnFireTrigger:"bool",
HoldBoltActionUntilFireRelease:"bool",
HoldBoltActionUntilZoomRelease:"bool",
ReturnToZoomAfterBoltAction:"bool",
UnZoomOnBoltAction:"bool"
};

var BoneCollisionComponentData = {
SkeletonCollisionData:"CtrRef"
};

var BoneCollisionData = {
AnimationHitReactionType:"HitReactionType",
BoneAxis:"int",
BoneName:"string",
CapsuleLength:"float",
CapsuleOffset:"Vec3",
CapsuleRadius:"float",
DeactivateIfBehindWall:"bool",
DebugDrawColor:"Vec4",
MaterialPair:"CtrRef",
MaxPitch:"PitchModifier",
MinPitch:"PitchModifier",
UsePhysicsRotation:"bool",
ValidInHiLod:"bool",
ValidInLowLod:"bool"
};

var BoneFakePhysicsData = {
BoneId:"int",
BoneName:"string",
FakePhysics:"CtrRef"
};

var BoolEntityData = {
DefaultValue:"bool",
Realm:"fb.Realm"
};

var BoolHubEntityData = {
InputCount:"int",
InputSelect:"int",
Realm:"fb.Realm"
};

var BoolPropertyTrackData = {
Values:"List<bool>"
};

var BoolRecordingData = {
Values:"List<bool>"
};

var BoolShaderParameter = {
ParameterName:"string",
Value:"bool"
};

var BoolToEventEntityData = {
InitalEvent:"bool",
Realm:"fb.Realm",
Value:"bool"
};

var BoolUnlockValuePair = {
DefaultValue:"bool",
UnlockedValue:"bool"
};

var Boost = {
AccelerationScale:"float",
CrawlStrength:"float",
DissipationTime:"float",
ForwardStrength:"float",
RecoveryTime:"float",
ReverseStrength:"float"
};

var BotPriorityConfigData = {
AngleOffset:"float",
AppliesToDecisions:"bool",
AppliesToExecution:"bool",
DebugColor:"Vec3",
Distance:"float",
Period:"int"
};

var BoxEvaluatorData = {
Dimensions:"Vec3",
Pivot:"Vec3"
};

var BoxFloatPhysicsData = null;

var BreakableControllerComponentData = {
BreakablePartCount:"uint",
NetworkIdCount:"uint"
};

var BreakableModelEntityData = {
BoneCount:"uint",
DecalVolumeScaleFactor:"float",
DecalVolumeShader:"CtrRef",
EdgeModelLightMapData:"CtrRef",
Mesh:"CtrRef"
};

var BreakablePartComponentData = {
Collapsable:"bool",
DestroyNearbyStaticEntities:"bool",
HealthPercentage:"uint"
};

var BreakableRuinComponentData = {
RuinModel:"CtrRef"
};

var BreathControlData = {
BreathControlPenaltyMultiplier:"float",
BreathControlPenaltyTimeout:"float",
BreathControlReleaseTime:"float",
BreathControlTime:"float"
};

var BulletEntityData = {
DamageFalloffEndDistance:"float",
DamageFalloffStartDistance:"float",
DetonationTimeVariation:"float",
DistributeDamageOverTime:"float",
DudExplosion:"CtrRef",
EndDamage:"float",
FirstFrameTravelDistance:"float",
FlyBySound:"CtrRef",
FlyBySoundRadius:"float",
FlyBySoundSpeed:"float",
Gravity:"float",
HasVehicleDetonation:"bool",
ImpactImpulse:"float",
InstantHit:"bool",
Stamina:"float",
StartDamage:"float",
StopTrailEffectOnUnspawn:"bool",
TimeToArmExplosion:"float",
VehicleDetonationActivationDelay:"float",
VehicleDetonationRadius:"float"
};

var BulletHitInfo = {
BoneType:"int",
Direction:"Vec3",
ShooterPlayerId:"int",
SpawnPosition:"Vec3",
WeaponType:"AntHitReactionWeaponType",
WeaponUnlockAsset:"CtrRef"
};

var BurstLimit = {
Max:"int",
Min:"int"
};

var BusNodeData = {
Out:"AudioGraphNodePort",
VuPlugin:"SoundGraphPluginRef"
};

var ByteRasterData = null;

var CameraActionData = {
ActionMode:"CameraMovementActionMode"
};

var CameraBinding = {
ForceRender1pInForeground:"AntRef",
Render1pInBackground:"AntRef"
};

var CameraComponentData = {
AlternateView:"CtrRef",
AlternateViewEnabled:"bool",
Camera:"CtrRef",
CameraSoundData:"CtrRef",
CameraTransitionPos:"Vec3",
CameraTransitionTime:"float",
EnableCameraMesh:"bool",
FieldOfView:"float",
ForceFieldOfView:"float",
FreezeHeight:"float",
IgnoreOwnerOrientation:"bool",
IsFirstPerson:"bool",
MeshParentComponentNumber:"uint",
ReceiveImpulsesAsThirdPerson:"bool",
RegularView:"RegularCameraViewData",
SoldierAnimatedCamera:"SoldierAnimatedCameraData",
StanceData:"StanceCameraData",
UseCameraTransition:"bool"
};

var CameraComponentSoundData = {
SwitchToAlternateViewSound:"CtrRef",
SwitchToNormalViewSound:"CtrRef"
};

var CameraData = {
FadeTime:"float",
FadeWaitTime:"float",
NearPlane:"float",
OcclusionRayOffset:"Vec3",
PreFadeTime:"float",
ShadowViewDistanceScale:"float",
ShakeFactor:"float",
SoundListenerRadius:"float",
SoundOcclusion:"float",
StayFadedWhileStreaming:"bool",
ViewFx:"CtrRef"
};

var CameraEnterAreaTriggerEntityData = {
AutoStart:"bool",
Realm:"fb.Realm",
TimeTreshold:"float",
UpdatePass:"fb.UpdatePass"
};

var CameraEntityBaseData = {
Enabled:"bool",
NameId:"string",
Priority:"int"
};

var CameraEntityData = {
Fov:"float"
};

var CameraLeapData = {
FovModifier:"float",
Time:"float",
Transform:"LinearTransform"
};

var CameraLoosePartPhysicsData = {
Scale:"float"
};

var CameraModeAsset = null;

var CameraParamsComponentData = {
NearPlane:"float",
SunShadowmapViewDistance:"float",
ViewDistance:"float"
};

var CameraProximityEvaluatorData = {
ForwardOffset:"float",
InnerRadius:"float",
InnerRadiusDirection:"Vec3",
Offset:"Vec3",
Size:"Vec3"
};

var CameraRecoilData = {
SpringConstant:"float",
SpringDamping:"float",
SpringMinThresholdAngle:"float"
};

var CameraShakeNodeData = {
Pitch:"AudioGraphNodePort",
Roll:"AudioGraphNodePort",
Yaw:"AudioGraphNodePort"
};

var CameraSineCurveData = {
Amplitude:"float",
Frequency:"float",
PhaseShift:"float"
};

var CameraTransition = null;

var CancelOrderEntityData = null;

var CannedAnimationBinding = {
ActorIndex:"AntRef",
AdvanceScenario:"AntRef",
BlendValue:"AntRef",
EnteredLoop:"AntRef",
ExitCannedAnimation:"AntRef",
ExternalTime:"AntRef",
LevelIndex:"AntRef",
PartIndex:"AntRef",
ScenarioIndex:"AntRef",
TriggerCannedAnimation:"AntRef"
};

var CannedScenarioEntityData = {
AlwaysClearEntitySpaceWhenInScenario:"bool",
AnimationEntitySpacePriority:"int",
CannedAnimBinding:"CannedAnimationBinding"
};

var CapturePointEntityData = {
AddedMultiplierPerPlayer:"float",
AreaValue:"int",
AreaValues:"List<AreaValueTeam>",
CapturableType:"fb.CapturableType",
CapturePoint:"CtrRef",
CaptureRadius:"float",
DisableIfEnemyInside:"bool",
DisableWhenLosingControl:"bool",
EnemyTicketLossWhenCaptured:"int",
FlagTemplates:"List<CtrRef>",
ForceSnap:"bool",
HideRadius:"float",
HoistFlag:"bool",
InitialOwnerTeam:"TeamId",
IntruderWarning:"bool",
IntruderWarningSID:"string",
IsCapturedInUpperSphere:"bool",
IsVisible:"bool",
LoseControlWhenNotClose:"bool",
MaxCaptureMultiplier:"int",
MinNrToTakeControl:"int",
Modify3DIconVerticalOffset:"float",
OnlyTakeableByTeam:"int",
RemoveWhenCaptured:"bool",
ReturnMultiplier:"float",
SeesawCapturing:"bool",
ShowOnMinimap:"bool",
ShowRadius:"float",
SpawnMenuListOrdinal:"uint",
StartAtBottom:"bool",
TimeToGetControl:"int",
TimeToLoseControl:"int",
UseAreaValuesPerTeam:"bool"
};

var CapturePointScoringHandlerData = {
SquadCappingBonus:"float"
};

var CellDetailSelectionRule = {
Detail:"PackagingDetailLevel"
};

var ChangeReadinessOrderEntityData = {
AllowDecrease:"bool",
Minimum:"ReadinessLevel",
Pulse:"ReadinessLevel"
};

var CharacterAnimationEntityData = {
Controller:"AntRef",
EntitySpaceTransform:"LinearTransform",
ExternalTime:"float",
RestoreControllerOnFinish:"bool",
TrackLength:"float",
WarpAnimationBlendTime:"float"
};

var CharacterAnimationSpaceEntityData = {
Realm:"fb.Realm",
SpacePositionGS:"AntRef",
SpaceRotationGS:"AntRef",
WarpAnimationBlendTime:"float"
};

var CharacterAsset = null;

var CharacterBlueprint = null;

var CharacterCameraComponentData = {
CameraBoneName:"string",
Cameras:"List<CtrRef>"
};

var CharacterCustomizationAsset = {
LabelSid:"string",
SpecializationTable:"CtrRef",
UIHudIcon:"fb.UIHudIcon",
VisualTable:"CtrRef",
VoiceOverLabels:"List<CtrRef>"
};

var CharacterCustomizationComponentData = {
SharedLodGroup:"CtrRef",
SocketList:"CtrRef"
};

var CharacterEntityData = {
CharacterLightingEnable:"bool",
DefaultViewMode:"PersonViewMode",
PlayerSpawnType:"fb.PlayerSpawnType"
};

var CharacterHealthComponentData = {
IsImmortal:"bool",
MaxHealth:"float",
RegenerateHealth:"bool",
RegenerateHealthPerSecond:"float"
};

var CharacterInVehicleScenarioEntityData = {
ActorId:"int",
LevelId:"int",
PartId:"int",
Realm:"fb.Realm",
ScenarioAntRef:"AntRef",
ScenarioId:"int"
};

var CharacterLightingComponentData = {
BlendFactor:"float",
BottomLight:"Vec3",
CameraUpRotation:"float",
CharacterLightEnable:"bool",
CharacterLightingMode:"fb.CharacterLightingMode",
FirstPersonEnable:"bool",
LockToCameraDirection:"bool",
TopLight:"Vec3",
TopLightDirX:"float",
TopLightDirY:"float"
};

var CharacterMeleeBinding = {
MeleeActive:"AntRef",
OtherActor:"AntRef",
SelfActor:"AntRef",
TriggerMelee:"AntRef"
};

var CharacterMeleeCommonBinding = {
CloseToTarget:"AntRef",
MeleeAborted:"AntRef",
MeleeAngle:"AntRef",
MeleeDefenceTime:"AntRef",
MeleeDistance:"AntRef",
MeleeSequenceTime:"AntRef",
MeleeType:"AntRef"
};

var CharacterPhysicsComponentData = {
CharacterPhysics:"CtrRef",
EnableCollisionOnSpawn:"bool"
};

var CharacterPhysicsData = {
AllowPoseChangeDuringTransition:"bool",
DefaultState:"CharacterStateType",
InputAcceleration:"float",
JumpPenaltyFactor:"float",
JumpPenaltyTime:"float",
LadderAcceptAngle:"float",
LadderAcceptAnglePitch:"float",
Mass:"float",
MaterialPair:"CtrRef",
MaxAscendAngle:"float",
PhysicalRadius:"float",
Poses:"List<CtrRef>",
PushableObjectWeight:"int",
RadiusToPredictCollisionOnCharacters:"float",
Sprint:"CtrRef",
States:"List<CtrRef>",
WaterDepthLimit:"float"
};

var CharacterPoseConstraintsData = {
CrouchPose:"bool",
PronePose:"bool",
StandPose:"bool"
};

var CharacterPoseData = {
CollisionBoxMaxExpand:"Vec3",
CollisionBoxMinExpand:"Vec3",
CollisionType:"CharacterPoseCollisionType",
EyePosition:"Vec3",
Height:"float",
LookConstraints:"LookConstraintsData",
PoseType:"CharacterPoseType",
StepHeight:"float",
ThrottleModifierCurve:"List<Vec2>",
TransitionTimes:"List<PoseTransitionTime>"
};

var CharacterSocketListAsset = {
GameplaySockets:"List<CtrRef>",
RigidVisualSockets:"List<CtrRef>",
SkinnedVisualSockets:"List<CtrRef>"
};

var CharacterSpawnReferenceObjectData = {
AffectMinimapPosition:"bool",
AllowFallbackOnNextAvailabeVehicleEntry:"bool",
CheckMaxPlayersInVehicle:"bool",
HumanTargetPreference:"float",
IgnoreVehicleIcon:"bool",
IsTarget:"bool",
MinimapIcon:"UIHudIcon",
PlayerType:"PlayerSpawnType",
Template:"CtrRef",
VehicleEntryIndex:"uint"
};

var CharacterSprintData = {
AllowContinousSprinting:"bool",
SprintMinimumPower:"float",
SprintPowerDecreasePerSecond:"float",
SprintPowerIncreasePerSecond:"float"
};

var CharacterStateData = {
PoseInfo:"List<CtrRef>"
};

var CharacterStatePoseInfo = {
AccelerationGain:"float",
DecelerationGain:"float",
PoseType:"CharacterPoseType",
SpeedModifier:"SpeedModifierData",
SprintGain:"float",
SprintMultiplier:"float",
Velocity:"float"
};

var CharacterStateTriggerEntityData = {
ActiveWeaponSlot:"uint",
AmmoToSet:"uint",
CharacterPose:"CharacterPoseAction",
CheckAllWeapons:"bool",
CheckHealthGreaterOrEqual:"bool",
ContinueToCheckIfHoldingWrongWeapon:"bool",
DisablePhysicsWhenLeavingVehicle:"bool",
ExcludeConnectedVehicles:"bool",
HealthToCheck:"uint",
HealthToSet:"uint",
Pitch:"float",
PoseToCheck:"CharacterPoseAction",
SeatIndex:"uint",
ShouldCheckSeatIndex:"bool",
StayInVehicleOnMove:"bool",
UseExitPointWhenLeavingVehicle:"bool",
UsePitch:"bool",
Weapon:"CtrRef"
};

var CharacterWeaponBinding = {
WeaponId:"AntRef"
};

var CharacterWeaponComponentData = {
AimBoneName:"string",
DefaultWeaponBlueprint:"CtrRef",
WeaponSkeleton:"CtrRef"
};

var ChaseCameraData = {
AwayFromTargetForceScale:"float",
CollisionRadius:"float",
ForceFieldForceScale:"float",
ForceFieldRadius:"float",
HasCollision:"bool",
InheritTargetVelocity:"bool",
KeepTargetPitch:"bool",
LookDistanceInFrontOfTarget:"float",
LookDistanceScale:"float",
MaxDistance:"float",
MaxVelocity:"float",
MaxViewRotationAngleDeg:"float",
PillExpandSizeSpeedAcceleration:"float",
PillMaximumCollisionRadius:"float",
PillMinimumCollisionLength:"float",
PillMinimumCollisionRadius:"float",
ShouldRollWithTarget:"bool",
SnapDistance:"float",
TargetOffset:"Vec3",
TargetRotationOffset:"float",
ToWantedPositionScale:"Vec3",
UpdateRate:"uint",
VelocityDrag:"float",
WantedAngleDeg:"float",
WantedDistance:"float"
};

var ChassisComponentData = {
AllowNegativeThrottle:"bool",
AlwaysFullThrottle:"bool",
ForceLandingGearsRetract:"bool",
GearboxConfig:"CtrRef",
LandingGearLogic:"CtrRef",
TriggerGroundEffectImpulse:"float",
VehicleConfig:"CtrRef",
WaterEffects:"List<CtrRef>",
WaterStreakEffects:"List<CtrRef>"
};

var ChatSettings = {
AntiSpam:"AntiSpamConfig",
Channels:"List<ChatChannelType>",
ChatSettings: "readonly",
ChatChannelType: "uint"
};

var ChildBarrelComponentData = null;

var ChildComponentData = {
AlignmentSettings:"CtrRef",
AlignTransform:"LinearTransform",
EnableAlignToCamera:"bool",
HealthZone:"VehicleHealthZoneData",
MovingBody:"CtrRef",
SoundEffect:"CtrRef",
SoundEffectStartRpm:"float",
SoundEffectStopRpm:"float",
WorldSpacePositionLock:"bool"
};

var ChildMovingBodyData = {
InputAction:"EntryInputActionEnum",
InputDelay:"float",
IsOneShotInput:"bool",
Speed:"float",
TriggerImpulse:"float"
};

var ChildRotationBodyData = {
ForceModifier:"float",
ResetForceInputThreshold:"float",
ResetForceModifier:"float",
RotationInput:"EntryInputActionEnum",
UseLinearInput:"bool",
WorldSpaceLockEfficiency:"float"
};

var ChildStaticModelNetworkInfo = {
InstanceIndex:"uint",
NetworkRange:"IndexRange",
ParentHealthStateIndex:"uint",
ParentPartComponentIndex:"uint"
};

var ChunkStreamerCell = {
BundleName:"string",
Shape:"List<Vec2>"
};

var ChunkStreamerEntityData = {
Cells:"List<ChunkStreamerCell>"
};

var ClearAreaTriggerEntityData = {
ExcludeImmortalSoldiersInTeam:"bool",
RemoveBangers:"bool",
RemoveDebrisClusters:"bool",
RemoveEffects:"bool",
RemoveMeshProxies:"bool",
RemoveSoldiers:"bool",
RemoveStaticModels:"bool",
RemoveVehicles:"bool",
TeamOfImmortalSoldiers:"TeamId"
};

var ClientEffectMaskVolumeEntityData = {
ApplyEffectCurve:"Vec4",
LifeTimeInSeconds:"float",
Radius:"float",
UpdatePeriodInSeconds:"float"
};

var ClientJuiceState = {
SessionId:"int"
};

var ClientMetricsSettings = {
Enabled:"bool"
};

var ClientPlayerInputPlaybackEntityData = {
FileName:"string",
Realm:"fb.Realm"
};

var ClientPlayerInputRecorderEntityData = {
FileNameBase:"string",
Realm:"fb.Realm"
};

var ClientSettings = {
AimScale:"float",
AsyncClientBulletEntity:"bool",
AutoUnspawnDynamicObjects:"bool",
CorruptionChance:"float",
DebrisClusterEnabled:"bool",
DebugMenuOnLThumb:"bool",
DropSpikeChance:"float",
DuplicationChance:"float",
EffectsEnabled:"bool",
EmittersEnabled:"bool",
EnableRestTool:"bool",
ExtractPersistenceInformation:"bool",
HavokCaptureToFile:"bool",
HavokVDBShowsEffectsWorld:"bool",
HavokVisualDebugger:"bool",
IgnoreClientFireRateMultiplier:"bool",
IncomingFrequency:"float",
IncomingRate:"uint",
IngameTimeout:"float",
InputEnable:"bool",
InvertFreeCamera:"bool",
InvertPadPcRightStick:"bool",
InvertPitch:"bool",
InvertYaw:"bool",
IsInternetSimulationEnabled:"bool",
IsPresenceEnabled:"bool",
IsSpectator:"bool",
LipSyncEnabled:"bool",
LoadedTimeout:"float",
LoadingTimeout:"float",
LoadMenu:"bool",
LocalVehicleSimulationEnabled:"bool",
MaxDropDuration:"float",
MaxIncomingLatency:"float",
MaxLatency:"float",
MinDropDuration:"float",
MinIncomingLatency:"float",
MinLatency:"float",
OccludersEnabled:"bool",
OnDamageSpottingEnabled:"bool",
OutgoingRate:"uint",
OvergrowthEnabled:"bool",
PacketDrops:"float",
PadRumbleEnabled:"bool",
PauseGameOnStartUp:"bool",
QuitGameOnServerDisconnect:"bool",
RenderTags:"bool",
ReorderingChance:"float",
Scheme0FlipY:"bool",
Scheme1FlipY:"bool",
Scheme2FlipY:"bool",
ScreenshotFilename:"string",
ScreenshotSuffix:"string",
ScreenshotToFile:"bool",
SecondaryServerIp:"string",
ServerIp:"string",
ShowBuildId:"bool",
SkipFastLevelLoad:"bool",
SpawnPointIndex:"int",
Team:"uint",
TerrainEnabled:"bool",
ThreadedLoadingEnable:"bool",
UseGlobalGamePadInput:"bool",
UseMouseAndKeyboardSystem:"bool",
VegetationEnabled:"bool",
VisualFrameInterpolation:"bool",
VsyncEnable:"bool",
WaterPhysicsEnabled:"bool",
WorldRenderEnabled:"bool"
};

var ClimbingStateData = {
AttractionVelocity:"float",
ClimbHeightOffset:"float",
ClimbOffHorizontalDistance:"float",
ClimbOffHorizontalTime:"float",
ClimbOffVerticalDistance:"float",
ClimbOffVerticalTime:"float",
DownAngleLimit:"float",
DropOffAngle:"float",
LateralInputScale:"float",
PushAwayVelocity:"float"
};

var ClimbLadderBinding = {
ClimbLadderConnectPhase:"AntRef",
ClimbLadderPhase:"AntRef",
ClimbLadderTransitionPhase:"AntRef",
FallHigh:"AntRef",
LadderTopTransition:"AntRef",
OnLadder:"AntRef"
};

var ClimbLadderComponentData = {
Binding:"ClimbLadderBinding",
ClimbPhase:"int",
ConnectJointDisplacement:"float",
ConnectPhase:"int"
};

var ClosestInstancesScopeStrategyData = {
Count:"uint"
};

var CollisionData = {
DamageAtHorizVelocity:"List<ValueAtX>",
DamageAtVerticalVelocity:"List<ValueAtX>"
};

var ColorCorrectionComponentData = {
Brightness:"Vec3",
ColorGradingEnable:"bool",
ColorGradingTexture:"CtrRef",
Contrast:"Vec3",
Enable:"bool",
Hue:"float",
Realm:"fb.Realm",
Saturation:"Vec3"
};

var ColorReference = {
Color:"Vec4"
};

var ColorTintData = {
Brightness:"Vec3",
Contrast:"Vec3",
Hue:"float",
Saturation:"Vec3"
};

var ColorTintScopeFilterData = {
ColorTintData:"fb.ColorTintData"
};

var ColorUnlockPartData = {
ColorReference:"CtrRef"
};

var CombatActionTriggerEntityData = {
TimeToTriggerOnNoAction:"float"
};

var CombatAreaTriggerEntityData = {
DeserterProjectile:"CtrRef",
InitalSpeed:"float",
IsAiAllowedOutside:"bool",
IsTeamSpecific:"bool",
MaxRandomSpawnHeight:"float",
SpawnHeight:"float",
StrikeRadius:"float",
Team:"TeamId",
TimeToReturn:"uint"
};

var CombatConstantData = {
AllowCrouchFiringWaterLevel:"float",
AvoidC4Time:"float",
ChangePoseStopDelay:"float",
CloseRangeAccuracyDistance:"float",
ExplosionInterestRange:"float",
ExplosiveBlastMultiplier:"float",
ExplosiveObjectSearchRadius:"float",
FightFromPathRadius:"float",
InvestigateAroundTargetRadius:"float",
InvestigateCoverSearchWidth:"float",
InvestigateFreeLookRadius:"float",
InvestigatePauseTimeMax:"float",
InvestigatePauseTimeMin:"float",
MaxSuppressDistance:"float",
MaxSuppressorsRatio:"float",
MeleeCooldown:"float",
PoseChangeLockoutTime:"float",
PoseTransitionFireDelay:"float",
PrecisionTimeout:"float",
SmokeLifeTime:"float",
SmokeRadius:"float",
StandStillMinTime:"float",
StationaryBailDistance:"float",
SuppressMinLOFDistance:"float",
SuppressMinLOFOffsetDistance:"float",
SuppressOffsetXz:"float",
SuppressOffsetY:"float"
};

var CombustionEngineConfigData = null;

var CompareBoolEntityData = {
Bool:"bool",
Realm:"fb.Realm",
TriggerOnPropertyChange:"bool"
};

var CompareEntityData = {
FloatIn0:"float",
FloatIn1:"float",
IntIn0:"int",
IntIn1:"int",
Operator:"CompareOp",
Realm:"fb.Realm"
};

var CompareFloatEntityData = {
A:"float",
B:"float",
Realm:"fb.Realm",
TriggerOnPropertyChange:"bool",
TriggerOnStart:"bool"
};

var CompareIntEntityData = {
A:"int",
B:"int",
Realm:"fb.Realm",
TriggerOnPropertyChange:"bool",
TriggerOnStart:"bool"
};

var ComparisonLogicNode = {
DataSourceInfo:"UIDataSourceInfo",
In:"CtrRef",
Outputs:"List<CtrRef>",
SkipFractionals:"bool"
};

var ComponentData = {
Components:"List<CtrRef>",
Excluded:"bool",
Transform:"LinearTransform"
};

var CompositeMeshAsset = null;

var CompositeMeshEntityData = {
Mesh:"CtrRef"
};

var CompressorNodeData = {
AttackTime:"AudioGraphNodePort",
ChannelMode:"CompressorChannelMode",
In:"AudioGraphNodePort",
Out:"AudioGraphNodePort",
Plugin:"SoundGraphPluginRef",
Ratio:"AudioGraphNodePort",
ReleaseTime:"AudioGraphNodePort",
Threshold:"AudioGraphNodePort"
};

var CompressorSettings = {
Attack:"float",
Ratio:"float",
Release:"float",
Threshold:"float"
};

var ConditionGroup = {
Condition:"ConditionType",
True:"AudioGraphNodePort",
X:"AudioGraphNodePort",
Y:"AudioGraphNodePort"
};

var ConditionNodeData = {
Conditions:"List<CtrRef>"
};

var ConeOutputNodeData = {
CenterLevel:"AudioGraphNodePort",
Direction:"Vec3",
HFDampingAngle:"float",
InnerAngle:"AudioGraphNodePort",
LfeLevel:"AudioGraphNodePort",
OuterAngle:"AudioGraphNodePort",
OutsideGain:"float",
PanPlugin:"SoundGraphPluginRef",
PanSize:"float",
PositionX:"AudioGraphNodePort",
PositionY:"AudioGraphNodePort",
PositionZ:"AudioGraphNodePort",
ReverbGain:"float",
ReverbSend:"CtrRef",
ReverbSendPlugin:"SoundGraphPluginRef"
};

var ConsoleCommandEntityData = {
Commands:"List<string>",
Realm:"fb.Realm"
};

var ConsoleCommandTriggerEntityData = {
CommandName:"string",
Realm:"fb.Realm"
};

var ConstantEvaluatorData = {
Scale:"float"
};

var ConstantForceData = {
Condition:"ForceCondition",
Space:"SpaceType",
TypeOfForce:"ForceType",
Value:"Vec3"
};

var Consumable = {
Group:"ConsumableGroup",
Instance:"GUID"
};

var ConsumablesLevelDescriptionComponent = {
Consumables:"List<Consumable>"
};

var ConsumableTriggerEntityData = {
ConsumableGroup:"fb.ConsumableGroup",
Persistent:"bool"
};

var ContinueWeaponAmmoData = {
MinMags:"int",
WeaponSlot:"int"
};

var ControllableEntityData = {
DefaultTeam:"TeamId",
FakeImmortal:"bool",
ForceForegroundRendering:"bool",
Immortal:"bool",
LowHealthThreshold:"float",
MaterialPair:"CtrRef",
ResetTeamOnLastPlayerExits:"bool",
UsePrediction:"bool"
};

var CoopLobbyEntityData = {
ClientConnectionTimeout:"float",
IsInGame:"bool"
};

var CoreSettings = {
AvailableLanguages:"string",
CrashOnFatalErrors:"bool",
DisplayAsserts:"bool",
GameConfigurationName:"string",
HardwareCpuBias:"float",
HardwareGpuBias:"float",
HardwareProfile:"fb.HardwareProfile",
Host:"string",
HostUser:"string",
HostUserDomain:"string",
InitSeed:"string",
JobProcessorCount:"int",
LiveEditingEnable:"bool",
LogLevel:"CoreLogLevel",
MaxJobThreadCount:"int",
ProfileDirectoryName:"string",
RandomSessionId:"int",
RandomTickSeed:"int",
RandomTimeSeed:"int",
UseDiskCaching:"bool",
UseStorageServer:"bool"
};

var CountDownEntityData = {
Realm:"fb.Realm",
RunOnce:"bool",
StartValue:"int"
};

var CounterHelper = {
dummy:"bool"
};

var CounterStatus = {
CurrentValue:"float",
OriginalValue:"float"
};

var CoverConstantData = {
AttackPositionEvaluationWeight:"float",
ContinueMeleeFromCoverDistance:"float",
CoverFailIgnoreTime:"float",
CoverSelectionMethod:"fb.CoverSelectionMethod",
CrouchCoverModifier:"float",
CrouchHeight:"float",
DislikePreviousCoverWeight:"float",
DistanceEvaluationWeight:"float",
EnemiesEvaluationWeight:"float",
ExtraCoverSize:"float",
InCoverDistance:"float",
IntermediateCoverSlotModifier:"float",
MaxCoversInMemory:"int",
MaxHeightDifference:"float",
MediumCoverModifier:"float",
MediumHeight:"float",
MinAttackableEnemyDistance:"float",
MinimumOpenCoverWidth:"float",
OptimalWeaponDistanceEvaluationWeight:"float",
ProneCoverModifier:"float",
ProneHeight:"float",
ReevaluationTime:"float",
SearchRadius:"float",
SlotBlockedEdgeDistance:"float",
SlotEdgeDistance:"float",
SlotSize:"float",
SlotSpacing:"float",
StandCoverModifier:"float",
StandHeight:"float",
StartMeleeFromCoverDistance:"float",
SwitchCoverUrgencyThreshold:"float",
ThreatRadius:"float"
};

var CoverEntityData = {
CoverType:"fb.CoverType",
LeftEdgeBlocked:"bool",
RightEdgeBlocked:"bool",
Slots:"List<CoverSlot>",
TopBlocked:"bool",
Width:"float"
};

var CoverPrepareFireEntityData = null;

var CoverSlot = {
Position:"Vec3"
};

var CoverWaypointData = {
CoverTask:"AILocoCoverTaskData"
};

var CreateDestructionVolumeParams = {
AssetName:"string"
};

var CreateRawFileParams = {
AssetName:"string",
CreateResource:"bool",
SourceFile:"string"
};

var CriteriaAward = {
Award:"CtrRef",
Count:"uint",
Sid:"string"
};

var CriteriaData = {
CompletionValue:"float",
CountEvents:"bool",
CriteriaType:"fb.CriteriaType",
DescriptionSid:"string",
GateList:"CtrRef",
Measuring:"StatEvent",
OrParamsX:"List<CtrRef>",
ParamX:"CtrRef",
ParamY:"CtrRef",
Scale:"float",
ScaleFactor:"float",
ShouldHide:"bool",
ShouldSummarize:"bool"
};

var CriteriaGateList = {
CriteriaGates:"List<float>"
};

var CriteriaStarCategoryData = {
CriteriaInstances:"List<CriteriaStarCategoryInstance>"
};

var CriteriaStarCategoryInstance = {
Name:"string",
ParamX:"CtrRef",
ParamY:"CtrRef"
};

var CriteriaStarData = {
StarTemplate:"CtrRef"
};

var Crossfader2NodeData = {
Ctrl:"AudioGraphNodePort",
CtrlOut1:"AudioGraphNodePort",
CtrlOut2:"AudioGraphNodePort"
};

var CrossfaderNodeData = {
Ctrl:"AudioGraphNodePort",
In1:"AudioGraphNodePort",
In2:"AudioGraphNodePort",
Out:"AudioGraphNodePort",
Plugin1:"SoundGraphPluginRef",
Plugin2:"SoundGraphPluginRef"
};

var CTFScoringHandlerData = {
CaptureAssistRadius:"float",
EnemySuppressionTimeout:"float",
EnemyThreatRadius:"float",
MaxTeams:"int",
PickUpAssistRadius:"float"
};

var Curve2D = {
Curve:"List<Vec2>"
};

var CustomizationTable = {
UnlockParts:"List<CtrRef>"
};

var CustomizationUnlockParts = {
SelectableUnlocks:"List<CtrRef>",
UICategorySid:"string"
};

var CustomizeBaseEntityData = {
Realm:"fb.Realm"
};

var CustomizeCharacterData = {
ClearVisualState:"bool",
OverrideCriticalHealthThreshold:"float",
OverrideMaxHealth:"float",
RestoreToOriginalVisualState:"bool",
Unlocks:"List<CtrRef>",
VisualGroups:"List<CustomizeVisual>"
};

var CustomizeCharacterEntityData = {
CustomizeCharacterData:"CtrRef"
};

var CustomizedMaterialData = {
ColorParameters:"List<CtrRef>",
MaterialNames:"List<string>",
TextureParameters:"List<CtrRef>",
TextureSliceParameters:"List<CtrRef>"
};

var CustomizedMeshMaterialsData = {
MaterialNames:"List<string>",
MeshBlueprint:"CtrRef"
};

var CustomizeSoldierData = {
ActiveSlot:"WeaponSlot",
DeathPickup:"CtrRef",
DisableDeathPickup:"bool",
RemoveAllExistingWeapons:"bool",
Weapons:"List<UnlockWeaponAndSlot>"
};

var CustomizeSoldierEntityData = {
CustomizeSoldierData:"CtrRef"
};

var CustomizeVisual = {
Visual:"List<CtrRef>"
};

var CustomReportValueData = {
DataType:"PersistentValueDataType",
Kind:"CustomReportValueKind",
Name:"string"
};

var CustomSequenceTrackData = {
EventMap:"List<CtrRef>",
InputLinkMap:"List<CtrRef>",
OutputLinkMap:"List<CtrRef>",
SourceAndTargetPropertyMap:"List<CtrRef>",
SourcePropertyMap:"List<CtrRef>",
TargetPropertyMap:"List<CtrRef>",
TrackName:"string"
};

var CustomSequenceTrackEventMapping = {
SequenceEventID:"int",
TrackEventID:"int"
};

var CustomSequenceTrackLinkMapping = {
SequenceLinkID:"int",
TrackLinkID:"int"
};

var CustomSequenceTrackPropertyMapping = {
SequencePropertyID:"int",
TrackPropertyID:"int"
};

var CustomSplineData = null;

var DacNodeData = {
DacPlugin:"SoundGraphPluginRef",
GainPlugin:"SoundGraphPluginRef",
In:"AudioGraphNodePort",
SampleRate:"AudioGraphNodePort",
SpeakerCount:"AudioGraphNodePort",
VuPlugin:"SoundGraphPluginRef"
};

var DamageAreaTriggerEntityData = {
DamageBangers:"bool",
DamageCharacters:"bool",
DamagePerSecond:"float",
DamageTime:"float",
DamageVehicles:"bool",
ExcludeImmortalCharactersInTeam:"bool",
ExcludeShieldedSoldiers:"bool",
TeamOfImmortalCharacters:"TeamId"
};

var DamageEffectComponentData = {
BottomDamage:"Vec4",
DebugDamage:"bool",
EndCriticalEffectHealthThreshold:"float",
FallofTime:"float",
FrameWidth:"float",
InnerFrameOpacity:"float",
LeftDamage:"Vec4",
MaxOpacityDamagePercentage:"float",
MinDamagePercentageThreshold:"float",
OuterFrameOpacity:"float",
Realm:"fb.Realm",
RightDamage:"Vec4",
Shader:"CtrRef",
StartCriticalEffectHealthThreshold:"float",
TopDamage:"Vec4"
};

var DamageScoringHandlerData = {
DamageTeamVehicleLimit:"float",
HotVehicleTimeout:"float",
KillAssistLimit:"float",
KillAssistTimeout:"float",
RepairVehicleLimit:"float",
SaviorDamageLimit:"float",
SaviorKillTimeout:"float",
TeamDamageLimit:"float",
TeamHealingLimit:"float",
VehicleDestroyAssistLimit:"float"
};

var DamageToVehicleEvent = {
DamageAmount:"float",
VehicleName:"string",
WeaponName:"string"
};

var DataBusData = {
LinkConnections:"List<LinkConnection>",
PropertyConnections:"List<PropertyConnection>"
};

var DataContainerAsset = {
Data:"CtrRef"
};

var DataCopSettings = {
Values:"List<DataCopValueSetting>"
};

var DataCopValueSetting = {
DataKey:"int",
FrameSpacing:"int",
Offset:"int"
};

var DataField = {
AccessType:"FieldAccessType",
Id:"int",
Value:"string",
ValueRef:"CtrRef"
};

var DataGetNode = {
DataSource:"UIDataSourceInfo",
In:"CtrRef",
Out:"CtrRef"
};

var DataIncrementNode = {
DataSource:"UIDataSourceInfo",
In:"CtrRef",
IncrementSize:"float",
Max:"float",
Min:"float",
Out:"CtrRef"
};

var DataSetNode = {
DataSource:"UIDataSourceInfo",
ForceUpdate:"bool",
In:"CtrRef",
Out:"CtrRef",
Param:"string",
SetToEmptyString:"bool"
};

var DataSource = {
Category:"CtrRef",
Value:"int"
};

var DataStepNode = {
CurrentStepDataSource:"UIDataSourceInfo",
DataSource:"UIDataSourceInfo",
In:"CtrRef",
Out:"CtrRef",
Steps:"List<float>"
};

var DataToggleNode = {
DataSource:"UIDataSourceInfo",
In:"CtrRef",
Out:"CtrRef"
};

var DataVisualizerValue = {
Value:"string"
};

var DeathAreaTriggerEntityData = {
Damage:"float",
TimeToReturn:"float"
};

var DeathEvent = {
KillerId:"ulong",
KillerPosition:"Vec3",
Position:"Vec3",
Time:"float",
Weapon:"string"
};

var DebrisClusterData = {
ActivateOnSpawn:"bool",
ActivationEffect:"CtrRef",
ActivationPushForceMul:"float",
ClientSideOnly:"bool",
ClusterLifetime:"float",
CompositePartCount:"uint",
DeactivatePartsOnSleep:"bool",
Effect:"CtrRef",
Explosion:"CtrRef",
InEffectWorldOnly:"bool",
InitRotationRndMul:"Vec3",
KillPartsOnCollision:"bool",
MaxActivePartsCount:"uint",
Mesh:"CtrRef",
NoCollision:"bool",
OnPartCollisionEnable:"bool",
OnPartCollisionSpeedThreshold:"float",
PartHierarchy:"List<DebrisClusterPartInfoData>",
PartialDestruction:"bool",
PhysicsData:"CtrRef",
ProjectileForceTransferMul:"float",
PushVelocityMul:"Vec3",
PushVelocityRndMul:"Vec3",
SpawnExplosionOnFirstImpactOnly:"bool"
};

var DebrisClusterPartInfoData = {
AngularVelocity:"Vec3",
InEffectWorldOnly:"bool",
LinearVelocity:"Vec3",
NumberOfChildren:"int",
PartIndex:"int",
SplitSpeedThreshold:"float",
SyncContinous:"bool",
SyncRestPosition:"bool"
};

var DebrisHavokInfo = {
HavokAsset:"CtrRef",
ReserveCount:"int"
};

var DebrisSystemAsset = {
HavokMeshCount:"int",
HavokMeshes:"List<DebrisHavokInfo>"
};

var DebrisSystemMetrics = {
HavokParticleCount:"int",
HavokParticlePartCount:"int"
};

var DebrisSystemSettings = {
DrawStats:"uint",
Enable:"bool",
EnableJobs:"bool",
MeshBatchCountLimit:"uint",
MeshCullingDistance:"float",
MeshDrawBoundingBoxes:"bool",
MeshDrawCountLimit:"uint",
MeshDrawCullStats:"bool",
MeshDrawTransforms:"bool",
MeshHavokRenderingEnable:"bool",
MeshRenderingEnable:"bool",
MeshShadowEnable:"bool",
MeshStreamingPriorityMultiplier:"float",
MeshViewCullingEnable:"bool",
TimeScale:"float"
};

var DebugComponentData = {
DebugTexture:"CtrRef",
Enable:"bool",
Fullscreen:"bool",
Realm:"fb.Realm"
};

var DebugConstantData = {
BotDebugDistance:"float",
GraphDataBuffer:"uint",
InaccuracyEnabled:"bool",
InViewModeFOV:"float",
MinDecisionTime:"float"
};

var DebugEventInput = {
E:"AudioGraphNodePort",
Name:"string",
RequireTriggeredAndSet:"bool"
};

var DebugMenuItemEntityData = {
ItemType:"DebugMenuItemType",
Text:"string"
};

var DebugMenuSubMenuEntityData = {
Text:"string"
};

var DebugRenderSettings = {
DrawStatsEnable:"bool",
DxLine2dAntialiasingEnable:"bool",
DxLine3dAntialiasingEnable:"bool",
DxMaxVertexCount:"uint",
Enable:"bool",
ProcessJobCount:"int",
Ps3SpuEnable:"bool",
Ps3SpuFrameBufferSize:"uint",
TextQueueLocationTop:"bool",
TextQueueMaxLineCount:"uint",
TextQueueTimeVisible:"float",
TextViewDistance:"float"
};

var DebugSurveyEvent = {
PlayerName:"string",
SurveyMetricLink:"GUID"
};

var DebugTestEntityData = null;

var DebugTextEntityData = {
Centered:"bool",
DebugText:"string",
DepthTest:"bool",
Realm:"fb.Realm",
Scale:"float",
ScaleWithDistance:"bool",
TextColor:"Vec3",
Visible:"bool"
};

var DebugValueInput = {
Max:"float",
Min:"float",
Name:"string",
RenderType:"DebugRenderType",
V:"AudioGraphNodePort"
};

var DecalAtlasTile = {
FlipX:"bool",
FlipY:"bool",
TileCountX:"float",
TileCountY:"float",
TileIndexX:"float",
TileIndexY:"float"
};

var DecalEntityData = {
AtlasTile:"DecalAtlasTile",
MaterialIndex:"sbyte",
Projected:"bool",
Shader:"CtrRef",
SortingPriority:"sbyte"
};

var DecalSettings = {
DebugMemUsageEnable:"bool",
DebugWarningsEnable:"bool",
DrawEnable:"bool",
Enable:"bool",
NvidiaStreamOutputWorkaroundEnable:"bool",
RingBufferMaxVertexCount:"uint",
StaticBufferMaxVertexCount:"uint",
SystemEnable:"bool",
SystemEnable2:"bool"
};

var DecalTemplateData = {
AtlasTile:"DecalAtlasTile",
ClipAngle:"float",
MaterialIndex:"sbyte",
MeshUVIndex:"int",
NormalOffset:"float",
Projected:"bool",
ProjectMultiple:"bool",
ProximityRadiusFactor:"float",
RandomRotation:"float",
RandomSize:"float",
Rotation:"float",
Shader:"CtrRef",
Size:"float",
SortingPriority:"sbyte"
};

var DecalVolumeEntityData = null;

var DecisionConstantData = {
AllowEmergencyGoalInterrupt:"bool",
AllowUninterruptibleBehaviours:"bool",
NewEnemyDecideMaxDistance:"float"
};

var DefaultSelectionItem = {
DefaultSelectionIndex:"int",
DefaultSelectionQuery:"UIDataSourceInfo"
};

var DefibrillatorWeaponData = {
AttackTime:"float",
ReviveTime:"float"
};

var DelayEntityData = {
AutoStart:"bool",
Delay:"float",
Realm:"fb.Realm",
RemoveDuplicateEvents:"bool",
RunOnce:"bool"
};

var DelayNodeData = {
DelayTime:"AudioGraphNodePort",
Feedback:"AudioGraphNodePort",
In:"AudioGraphNodePort",
MaxDelayTime:"float",
Out:"AudioGraphNodePort",
Plugin:"SoundGraphPluginRef"
};

var DelayTriggerEntityData = {
AutoTriggerEvent:"bool"
};

var DeltaGroup = {
Delta:"AudioGraphNodePort",
In:"AudioGraphNodePort"
};

var DeltaNodeData = {
Deltas:"List<CtrRef>"
};

var DemoSettings = {
AllowOverwrite:"bool",
ChangePlayerInterval:"uint",
ForcedDeltaTickCount:"uint",
LockToPlayerName:"string",
LockToRandomPlayer:"bool",
LogPerformance:"bool",
LoopingDemo:"bool",
PauseOnStartup:"bool",
PlaybackDemoFileName:"string",
RecordDemoFileName:"string",
ShutdownOnDemoComplete:"bool",
StartProfilingOnFrame:"uint",
StopProfilingOnFrame:"uint",
SuppressDebugLog:"bool",
TakeScreenshotOnFrame:"uint",
TimeDemo:"string"
};

var DeMuxNodeData = {
Outputs:"List<CtrRef>",
Trigger:"AudioGraphNodePort",
Value:"AudioGraphNodePort",
WrapValue:"bool"
};

var DeMuxOutput = {
Trigger:"AudioGraphNodePort"
};

var DestroyAllInSquadScoringHandlerData = null;

var DestroyLevelCommandEntityData = {
DestroyDelay:"uint",
InstanceCountDestroyedPerFrame:"uint"
};

var DestructionCommandEntityData = {
InstanceCountDestroyedPerFrame:"uint",
InstanceCountDestroyedPerType:"uint"
};

var DestructionControllerComponentData = {
AttachToNearbyObjects:"bool",
DebrisClusters:"List<CtrRef>"
};

var DestructionDepthRasterData = null;

var DestructionDepthTreeAsset = null;

var DestructionEdgeModelComponentData = null;

var DestructionMaskVolumeEntityData = {
DustAccumulationCurve:"Vec4",
DustAccumulationLifeTime:"float",
Radius:"float",
Shader:"SurfaceShaderInstanceDataStruct",
ShaderUserMasks:"Vec4"
};

var DestructionPartComponentData = {
ConnectivityType:"DestructionConnectivityType",
Fixed:"bool",
Fragile:"bool",
Objects:"List<CtrRef>",
PartIndex:"uint"
};

var DestructionVolumeAsset = {
AtlasTextureScale:"float",
DiffuseAtlas:"CtrRef",
NormalmapAtlas:"CtrRef"
};

var DestructionVolumeAtlasTextureData = {
AtlasAlphaInfluence:"float",
MaskEdgeThickness:"float"
};

var DestructionVolumeComponentData = {
DestructionVolumeData:"CtrRef"
};

var DestructionVolumeData = {
Asset:"CtrRef",
BoundingBox:"AxisAlignedBox",
Impacts:"List<Vec4>",
PartToImpactIndices:"List<uint>"
};

var DestructionVolumeProjectionData = {
Normal:"Vec3",
TangentAngle:"float"
};

var DetonatedWeaponData = {
LockingController:"CtrRef",
Range:"float"
};

var DialogNode = {
Buttons:"List<UIPopupButton>",
DialogText:"string",
DialogTitle:"string"
};

var DialogSamplerNodeData = {
Amplitude:"AudioGraphNodePort",
Continue:"AudioGraphNodePort",
Finished:"AudioGraphNodePort",
GainPlugin:"SoundGraphPluginRef",
Output:"AudioGraphNodePort",
PausePlugin:"SoundGraphPluginRef",
Pitch:"AudioGraphNodePort",
ResamplePlugin:"SoundGraphPluginRef",
SndPlayerPlugin:"SoundGraphPluginRef",
TailLength:"float",
Triggered:"AudioGraphNodePort"
};

var DifficultyData = {
AdrenalineKillLimit:"int",
AiBulletDamageHumanCooldown:"float",
AIData:"CtrRef",
CriticalFakeImmortalModifier:"float",
CriticalHealthJesusModeTimeModifier:"float",
Difficulty:"fb.Difficulty",
EnemiesHealthModifier:"float",
FriendlyDamageModifier:"float",
FriendsHealthModifier:"float",
GameType:"PersistenceGameType",
HumanHealthModifier:"float",
HumanInCriticalHealth:"float",
HumanInCriticalHealthDamageModifier:"float",
HumanRegenerationRateModifier:"float",
InteractiveManDownDamageModifier:"float",
InteractiveManDownReviveTime:"float",
InteractiveManDownTimeMultiplier:"float",
SnapBoxModifier:"Vec3",
StickyBoxModifier:"Vec3",
SuckZoomModifier:"float",
UsePitchZoomSnap:"bool",
VehicleDamageModifier:"float"
};

var DifficultyDatas = {
Difficulties:"List<CtrRef>"
};

var DifficultyIndexEntityData = {
Realm:"fb.Realm"
};

var DirectOutputNodeData = null;

var DirectWeaponSwitchingMapData = {
Action:"EntryInputActionEnum",
FireAndSwitchBackToPrev:"bool",
PreventMeleeRepeatTime:"float",
SwitchBackToPrevMaxTimePressed:"float",
ToWeapon:"WeaponSwitchingEnum",
UseQuickSwitch:"bool"
};

var DirtySockPresenceBackendData = null;

var DiscComponentData = null;

var DistortionClipNodeData = {
ClipLevel:"AudioGraphNodePort",
In:"AudioGraphNodePort",
Out:"AudioGraphNodePort",
Plugin:"SoundGraphPluginRef"
};

var DivisibleLoopPlayerNodeData = {
Amplitude:"AudioGraphNodePort",
CrossFadeLength:"float",
ExternalWave:"AudioGraphNodePort",
FreezeSegment:"AudioGraphNodePort",
Output:"AudioGraphNodePort",
Plugins:"List<DivisibleLoopPlayerPlugins>",
Start:"AudioGraphNodePort",
StartAtRandomPosition:"bool",
Stop:"AudioGraphNodePort",
Wave:"CtrRef"
};

var DivisibleLoopPlayerPlugins = {
Gain:"SoundGraphPluginRef",
GainFader:"SoundGraphPluginRef",
Pause:"SoundGraphPluginRef",
SndPlayer:"SoundGraphPluginRef"
};

var DofComponentData = {
BlurAdd:"float",
BlurFilter:"fb.BlurFilter",
BlurFilterDeviation:"float",
DiffusionDofAperture:"float",
DiffusionDofEnable:"bool",
DiffusionDofFocalLength:"float",
Enable:"bool",
FarDistanceScale:"float",
FocusDistance:"float",
NearDistanceScale:"float",
Realm:"fb.Realm",
Scale:"float"
};

var DogTagData = {
Category:"DogTagCategory",
DescriptionSID:"string",
ExcludedOnPs3:"bool",
ExcludedOnWin32:"bool",
ExcludedOnXenon:"bool",
ImageName:"string",
InvertText:"bool",
IsAlwaysAvailable:"bool",
NameSID:"string",
SmallImageName:"string"
};

var DogTagsAsset = {
AdvancedDogTags:"List<CtrRef>",
BasicDogTags:"List<CtrRef>",
MeleeKillWeapon:"CtrRef"
};

var DriverComponentData = {
Settings:"CtrRef",
WantedSpeed:"float"
};

var DriverSettings = {
AccDiffAtMaxThrottleVelocityAccelerating:"float",
AccDiffAtMaxThrottleVelocityDecelerating:"float",
AccDiffAtMinThrottleVelocityAccelerating:"float",
AccDiffAtMinThrottleVelocityDecelerating:"float",
AngleDiffForFullSlowdown:"float",
AngleDiffForNoSlowdown:"float",
D:"float",
I:"float",
LookAheadTime:"float",
MaxAcc:"float",
MaxBrakeOutput:"float",
MaxDec:"float",
MaxError:"float",
MaxITerm:"float",
MaxPTerm:"float",
MaxSumError:"float",
MaxThrottleVelocityAccelerating:"float",
MaxThrottleVelocityDecelerating:"float",
MaxYawToApplySprint:"float",
MinAcc:"float",
MinDec:"float",
MinRadius:"float",
MinThrottleVelocityAccelerating:"float",
MinThrottleVelocityDecelerating:"float",
P:"float",
RadiusGrowthSpeed:"float",
SquareBrakeOutput:"bool",
SteeringSensitivity:"float",
StoppingDeceleration:"float",
UsePIDRegulator:"bool",
UseSquareAccDiffCurveAcc:"bool",
UseSquareAccDiffCurveDec:"bool",
UseSquareVelDiffCurveAcc:"bool",
UseSquareVelDiffCurveDec:"bool",
VelDiffAtMaxAcc:"float",
VelDiffAtMaxDec:"float",
VelDiffAtMinAcc:"float",
VelDiffAtMinDec:"float",
VelocityAtFullSlowdown:"float"
};

var DriverStaticObjectComponentData = {
Acceleration:"float",
AlignWithGroundNormal:"bool",
Deceleration:"float",
TurningRadius:"float",
TurnWhileStill:"bool"
};

var DropWeaponComponentData = {
ActionIdentifier:"EntryInputActionEnum",
AllowDropWeaponOnAction:"bool",
DeathPickup:"CtrRef",
DropWeaponAfterTime:"float",
ExcludedWeaponSlots:"List<WeaponSlot>",
ListenToAnimationWeaponDropSignal:"bool",
Pickup:"CtrRef",
RequireWeaponSlotEmpty:"bool",
WeaponDropTime:"float",
DropWeaponComponentData: "readonly",
WeaponSlot: "uint"
};

var DuplicateSpawnScopeStrategyData = {
ClosestCount:"uint",
Distance:"float",
GroupTypes:"bool",
Time:"float"
};

var DxDisplaySettings = {
AmdMinDriverVersion:"string",
CreateMinimalWindow:"bool",
DebugBreakIgnoredIDs:"List<int>",
DebugBreakOnErrorEnable:"bool",
DebugBreakOnInfoEnable:"bool",
DebugBreakOnWarningEnable:"bool",
DebugInfoEnable:"bool",
DriverInternalThreadingEnable:"bool",
Dx10Dot0Enable:"bool",
Dx10Dot1Enable:"bool",
Dx10PlusEnable:"bool",
Dx11Enable:"bool",
ForceRenderAheadLimit:"int",
Fullscreen:"bool",
FullscreenHeight:"uint",
FullscreenModeEnable:"bool",
FullscreenOutputIndex:"int",
FullscreenRefreshRate:"float",
FullscreenWidth:"uint",
MinDriverRequired:"bool",
MultiGpuValidationEnable:"bool",
NullDriverEnable:"bool",
NvApiEnable:"bool",
NvidiaMinDriverVersion:"uint",
NvPerfHudEnable:"bool",
PresentInterval:"int",
RefDriverEnable:"bool",
StereoConvergenceScale:"float",
StereoDepth:"float",
StereoEnable:"bool",
StereoSeparationScale:"float",
StereoSoldierZoomConvergenceScale:"float",
TripleBufferingEnable:"bool",
VSyncEnable:"bool",
WarpDriverEnable:"bool"
};

var DynamicAOComponentData = {
Enable:"bool",
HbaoAngleBias:"float",
HbaoAttenuation:"float",
HbaoContrast:"float",
HbaoMaxFootprintRadius:"float",
HbaoPowerExponent:"float",
HbaoRadius:"float",
Realm:"fb.Realm",
SsaoFade:"float",
SsaoMaxDistanceInner:"float",
SsaoMaxDistanceOuter:"float",
SsaoRadius:"float"
};

var DynamicAvoidanceEntityData = {
AffectedByRepellingForce:"bool",
AntBinding:"AntDynamicAvoidanceBinding",
CollisionRadius:"float",
PredictedByOthers:"bool",
Realm:"fb.Realm",
RepelOthers:"DynamicAvoidanceMode",
ReportPredictedCollision:"DynamicAvoidanceMode"
};

var DynamicDataContainer = {
Fields:"List<DataField>"
};

var DynamicEnlightenEntityData = {
EnlightenData:"CtrRef"
};

var DynamicEnvmapComponentData = {
Enable:"bool",
GroundColorEnvmap:"Vec3",
KeyColorEnvmap:"Vec3",
SkyColorEnvmap:"Vec3"
};

var DynamicEvent = {
Id:"int"
};

var DynamicGamePhysicsEntityData = null;

var DynamicLink = {
Id:"int"
};

var DynamicModelEntityData = {
Mesh:"CtrRef",
NoCollision:"bool",
Part:"CtrRef"
};

var DynamicWeaponPickupEntityData = {
KeepAmmoState:"bool",
WeaponSlots:"List<DynamicWeaponPickupSlotData>"
};

var DynamicWeaponPickupSlotData = {
AltWeaponSlot:"int",
LinkedToWeaponSlot:"int",
WeaponSlot:"uint"
};

var EdgeModelComponentData = {
MaxInstanceCount:"uint",
RigidMeshes:"List<CtrRef>"
};

var EdgeModelInstance = {
Transform:"LinearTransform"
};

var EdgeModelLightMapData = {
LightMapUvs:"List<Vec4>"
};

var EdgeModelLightMapInstance = {
LightMapUv:"Vec4",
Position:"Vec3"
};

var EdgePointerData = {
NegativeXLimit:"float",
NegativeYLimit:"float",
PositiveXLimit:"float",
PositiveYLimit:"float"
};

var EditableAction = {
Concept:"InputConceptIdentifiers"
};

var EditableActionMap = {
ActionMap:"CtrRef",
ConfigurationLayout:"EditableActions",
Id:"string",
NameId:"string"
};

var EditableActions = {
Actions:"List<CtrRef>"
};

var EffectAsset = null;

var EffectBlueprint = null;

var EffectComponentData = {
AutoStart:"bool",
Effect:"CtrRef",
EmitterParameter1:"float",
EmitterParameter2:"float",
EmitterParameter3:"float",
SnapToWaterSurface:"bool"
};

var EffectEntityData = {
Components:"List<CtrRef>",
CullDistance:"float",
HighEndPc:"bool",
LowEndPc:"bool",
MaxInstanceCount:"uint",
MediumPc:"bool",
ResetInstanceWhenStarted:"bool",
StartDelay:"float"
};

var EffectManagerSettings = {
EffectQuality:"uint",
MaxNewEffectsPerFrameCount:"uint",
SizeToGrowNewEffectsContainer:"uint"
};

var EffectReferenceObjectData = {
AutoStart:"bool"
};

var EloExpectedFunctionPoint = {
XValue:"float",
YValue:"float"
};

var EloFunctionPoint = {
XValue:"float",
YValue:"float"
};

var EloParameters = {
Expected:"List<EloExpectedFunctionPoint>",
KCompetitor:"List<EloFunctionPoint>",
KLoser:"List<EloFunctionPoint>",
KNewbie:"List<EloFunctionPoint>",
KWinner:"List<EloFunctionPoint>"
};

var EmitterAsset = null;

var EmitterComponentData = null;

var EmitterData = {
EmitterAssets:"List<CtrRef>"
};

var EmitterDocument = {
RootProcessor:"CtrRef",
TemplateData:"CtrRef"
};

var EmitterEntityData = {
Emitter:"CtrRef",
SpawnProbability:"float"
};

var EmitterExclusionVolumeData = null;

var EmitterSystemAsset = {
BaseAtlasTexture:"CtrRef",
NormalAtlasTexture:"CtrRef",
TextureInfos:"List<EmitterTextureAtlasInfo>"
};

var EmitterSystemSettings = {
DebugOverdrawCount:"int",
DrawBoundingBoxes:"uint",
DrawProjectedBoxes:"bool",
DrawStats:"uint",
Enable:"bool",
EnableFixedDelta:"bool",
EnableFixedTimeStep:"bool",
EnableJobs:"bool",
EnableRendering:"bool",
GlobalResetStartTimeInterval:"float",
MeshCullingDistance:"float",
MeshDrawBoundingBoxes:"bool",
MeshDrawCountLimit:"uint",
MeshDrawCullStats:"bool",
MeshDrawTransforms:"bool",
MeshRenderingEnable:"bool",
MeshShadowEnable:"bool",
MeshStreamingPriorityMultiplier:"float",
MinScreenArea:"float",
QuadClipScaleEnable:"bool",
QuadColorShaderCostsEnable:"bool",
QuadEnableOpaque:"bool",
QuadEnableOverdrawRendering:"bool",
QuadEnableRendering:"bool",
QuadEnableSorting:"bool",
QuadEnableWireframe:"bool",
QuadEnableZOcclusion:"bool",
QuadGroupsJoinAll:"bool",
QuadGroupsJoinNiceAndSimple:"bool",
QuadGroupsJoinNone:"bool",
QuadHalfResEnable:"bool",
QuadHalfResSlice1ThresholdHigh:"float",
QuadHalfResSlice1ThresholdLow:"float",
QuadHalfResSlice2ThresholdHigh:"float",
QuadHalfResSlice2ThresholdLow:"float",
QuadNearFadeDistance:"float",
QuadNiceRenderingEnable:"bool",
QuadPointLightsEnable:"bool",
QuadSimpleRenderingEnable:"bool",
QuadSpotLightsEnable:"bool",
QuadTechnique:"int",
QuadVertexShadowsEnable:"bool",
QuadZOcclusionBias:"float",
TimeScale:"float",
ZBufferCullEnable:"bool"
};

var EmitterTemplateData = {
ActAsPointLight:"bool",
DistanceScaleFarValue:"float",
DistanceScaleLength:"float",
DistanceScaleNearValue:"float",
Emissive:"bool",
EmittableType:"fb.EmittableType",
ExclusionVolumeCullEnable:"bool",
FollowSpawnSource:"bool",
ForceFullRes:"bool",
ForceNiceSorting:"bool",
GlobalLocalNormalBlendFactor:"float",
KillParticlesWithEmitter:"bool",
Lifetime:"float",
LifetimeFrameCount:"uint",
LightMultiplier:"float",
LightWrapAroundFactor:"float",
LocalSpace:"bool",
MaxCount:"uint",
MaxSpawnDistance:"float",
Mesh:"CtrRef",
MeshCullingDistance:"float",
MinScreenArea:"float",
Name:"string",
Opaque:"bool",
ParticleCullingFactor:"float",
PointLightColor:"Vec3",
PointLightIntensity:"Vec4",
PointLightMaxClamp:"float",
PointLightMinClamp:"float",
PointLightPivot:"Vec3",
PointLightRadius:"float",
PointLightRandomIntensityMax:"float",
PointLightRandomIntensityMin:"float",
RepeatParticleSpawning:"bool",
RootProcessor:"CtrRef",
SoftParticlesFadeDistanceMultiplier:"float",
TimeScale:"float",
TransparencySunShadowEnable:"bool",
VertexPixelLightingBlendFactor:"float",
VisibleAfterDistance:"float",
ZOcclusionLookup:"List<float>"
};

var EmitterTextureAtlasInfo = {
MaxUv:"Vec2",
MinUv:"Vec2",
TextureName:"string"
};

var EmitterTextureInfo = {
AnimationFrameColumnCount:"float",
AnimationFrameCount:"float",
EnableAnimation:"bool",
NormalmapName:"string",
TextureName:"string"
};

var EndPointData = {
EndDamping:"float",
Pos:"float",
SpringAcceleration:"float",
SpringDamping:"float",
SpringLength:"float"
};

var EngineComponentData = {
Config:"CtrRef",
OutputIsEngineInWater:"bool",
SoundEffect:"CtrRef",
SurfaceSoundEffect:"CtrRef",
UseFirstPersonSounds:"bool"
};

var EngineConfigData = {
Boost:"fb.Boost",
EnginePowerMultiplier:"float",
InternalAccelerationFactor:"float",
InternalDeaccelerationFactor:"float",
Position:"Vec3",
RpmCurvePoints:"List<float>",
RpmCut:"float",
RpmMax:"float",
RpmMin:"float",
TorqueCurvePoints:"List<float>"
};

var EnlightenBuildRadiosityParams = null;

var EnlightenBuildRadiositySceneDesc = {
CacheEnable:"bool",
ClusterSize:"float",
DistributedBuild:"bool",
Instances:"List<EnlightenInputInstance>",
IrBudget:"uint",
LightProbeSets:"List<EnlightenLightProbeSet>",
SamplesPerCluster:"uint",
SaveDebugData:"bool",
StaticLightProbes:"List<Vec3>",
SystemInfluenceRadius:"float",
SystemSize:"uint",
Terrain:"string"
};

var EnlightenComponentData = {
BounceScale:"float",
CullDistance:"float",
Enable:"bool",
Realm:"fb.Realm",
SkyBoxBackLightColor:"Vec3",
SkyBoxBackLightColorSize:"float",
SkyBoxBackLightRotationX:"float",
SkyBoxBackLightRotationY:"float",
SkyBoxEnable:"bool",
SkyBoxGroundColor:"Vec3",
SkyBoxSkyColor:"Vec3",
SkyBoxSunLightColor:"Vec3",
SkyBoxSunLightColorSize:"float",
SunScale:"float",
TerrainColor:"Vec3"
};

var EnlightenDataAsset = {
DebugBackFaceTexture:"CtrRef",
DebugChartTexture:"CtrRef",
DynamicEnable:"bool",
LoadDebugData:"bool",
MaxResolutionX:"int",
MaxResolutionY:"int",
SkyVisibilityTexture:"CtrRef",
VisibilityThreshold:"float"
};

var EnlightenDatabaseAsset = {
DataVersion:"uint",
DebugMeshDataVersion:"uint",
LightProbeSets:"List<EnlightenLightProbeSet>",
OutputSizeX:"uint",
OutputSizeY:"uint",
Systems:"List<EnlightenDbSystem>"
};

var EnlightenDataCreatorParams = {
AssetName:"string"
};

var EnlightenDbInstance = {
CacheKey:"GUID",
EnlightenMeshName:"string",
GeometryId:"uint",
GuidString:"string",
InstanceAlbedos:"List<ulong>",
MeshAsset:"string",
ObjectVariation:"string",
PixelSize:"float",
UvSizeX:"uint",
UvSizeY:"uint",
UvTransform:"Vec4",
UvTranslation:"Vec2",
WorldBoundingbox:"AxisAlignedBox",
WorldTransform:"LinearTransform"
};

var EnlightenDbSystem = {
AtlasStartX:"uint",
AtlasStartY:"uint",
BoundingBox:"AxisAlignedBox",
ClusteringCache:"PrecomputeCache",
InputSystems:"List<int>",
Instances:"List<EnlightenDbInstance>",
LightTransportCache:"PrecomputeCache",
OutputHeight:"uint",
OutputWidth:"uint",
PixelCount:"uint",
PixelSize:"float",
PreClusteringCache:"PrecomputeCache",
SystemCache:"PrecomputeCache",
SystemId:"int",
TerrainSystem:"bool",
VisibilityCache:"PrecomputeCache"
};

var EnlightenEntityData = {
Enable:"bool",
Priority:"int",
Realm:"fb.Realm"
};

var EnlightenInputInstance = {
Asset:"string",
ObjectVariation:"string",
SystemId:"int",
Transform:"LinearTransform"
};

var EnlightenLightProbeSet = {
BlendDistance:"float",
BoundingBox:"AxisAlignedBox",
Cache:"PrecomputeCache",
InputSystems:"List<int>",
Positions:"List<Vec3>",
Priority:"int",
SizeX:"uint",
SizeY:"uint",
SizeZ:"uint",
StaticProbeSet:"bool",
SystemId:"int",
Transform:"LinearTransform",
ValidIndices:"List<uint>"
};

var EnlightenPipelineParams = {
DynamicEnable:"bool"
};

var EnlightenPipelineTerrain = {
Meshes:"List<EnlightenPipelineTerrainMesh>"
};

var EnlightenPipelineTerrainMesh = {
BoundingBox:"AxisAlignedBox",
LightMapResolution:"uint",
TerrainMeshName:"string",
UvTransform:"Vec4",
UvTranslation:"Vec2"
};

var EnlightenRuntimeConfig = {
JobCount:"uint"
};

var EnlightenRuntimeSettings = {
AlbedoDefaultColor:"Vec3",
AlbedoForceColorEnable:"bool",
AlbedoForceUpdateEnable:"bool",
CompensateSunShadowHeightScale:"bool",
DrawDebugBackFaces:"bool",
DrawDebugColoringEnable:"bool",
DrawDebugEntities:"bool",
DrawDebugLightProbeBoundingBoxes:"bool",
DrawDebugLightProbeOcclusion:"bool",
DrawDebugLightProbes:"bool",
DrawDebugLightProbeSize:"float",
DrawDebugLightProbeStats:"bool",
DrawDebugSystemBoundingBoxEnable:"int",
DrawDebugSystemDependenciesEnable:"int",
DrawDebugSystemsEnable:"bool",
DrawDebugTargetMeshes:"bool",
DrawDebugTextures:"bool",
DrawSolveTaskPerformance:"bool",
DrawWarningsEnable:"bool",
EmissiveEnable:"bool",
Enable:"bool",
ForceDynamic:"bool",
JobCount:"uint",
LightMapsEnable:"bool",
LightProbeEnable:"bool",
LightProbeForceUpdate:"bool",
LightProbeJobsEnable:"bool",
LightProbeMaxUpdateSolveCount:"uint",
LocalLightCullingEnable:"bool",
LocalLightCustumFalloff:"bool",
LocalLightForceRadius:"float",
LocalLightsEnable:"bool",
MinSystemUpdateCount:"uint",
SaveRadiosityTexturesEnable:"bool",
ShadowsEnable:"bool",
SkyBoxScale:"float",
TemporalCoherenceThreshold:"float",
TerrainMapEnable:"bool"
};

var EnlightenShaderDatabaseAsset = null;

var EnlightenState = {
BounceScale:"float",
OutputScale:"float",
SkyBoxBackLightColor:"Vec3",
SkyBoxBackLightColorSize:"float",
SkyBoxBackLightRotationX:"float",
SkyBoxBackLightRotationY:"float",
SkyBoxEnable:"bool",
SkyBoxGroundColor:"Vec3",
SkyBoxSkyColor:"Vec3",
SkyBoxSunLightColor:"Vec3",
SkyBoxSunLightColorSize:"float",
SunScale:"float"
};

var EnterVehicleSurveyEvent = {
SurveyMetricLink:"GUID",
VehicleName:"string"
};

var EntitlementData = {
EntitlementTag:"string",
GroupName:"string",
License:"string",
ProductId:"string",
ProjectId:"string",
UsageType:"EntitlementType",
VerifyOwnership:"bool"
};

var EntitlementQuery = {
EntitlementsData:"List<EntitlementData>",
EntitlementTag:"string",
GroupNames:"List<string>",
Platform:"GamePlatform",
ProductId:"string",
ProjectId:"string"
};

var EntityBusData = {
AlwaysCreateEntityBusClient:"bool",
AlwaysCreateEntityBusServer:"bool",
Descriptor:"CtrRef",
EventConnections:"List<EventConnection>",
InterfaceHasConnections:"bool",
NeedNetworkId:"bool"
};

var EntityData = null;

var EntityInteractionComponentData = {
AllowInteractionWithSoldiers:"bool",
InteractWithTypes:"InteractionTypesData",
MaxAmmoCrateTimer:"float",
MaxAmmoPickupTimer:"float",
MaxLookAtAngle:"float",
OnlyAllowInteractionWithManDownSoldiers:"bool",
PickupRadius:"float",
SoldierInteractInputAction:"EntryInputActionEnum",
SoldierInteractRadius:"float"
};

var EntityRecordingData = {
Data:"List<CtrRef>",
EntityGuid:"GUID"
};

var EntitySettings = {
EditorGameViewEnable:"bool",
ExecutionMode:"ExecutionModeType",
OutOfEntityBusNetworkIdThreshold:"uint",
SpawnSubLevelsFromLogic:"bool"
};

var EntityTransformData = {
EntityTransforms:"List<LinearTransform>"
};

var EntityUid = {
Id:"uint"
};

var EntityVoiceOverInfo = {
Labels:"List<CtrRef>",
VoiceOverType:"CtrRef"
};

var EntryComponentData = {
AIData:"CtrRef",
EnterImpulse:"float",
EntryClass:"fb.EntryClass",
EntryComponentSound:"CtrRef",
EntryOrderNumber:"int",
EntryRadius:"float",
EntrySpottingSettings:"fb.EntrySpottingSettings",
ForbiddenForHuman:"bool",
HideSoldierForPassengers:"bool",
HudData:"EntryComponentHudData",
InputConceptDefinition:"CtrRef",
InputCurves:"List<CtrRef>",
InputMapping:"CtrRef",
IsAllowedToExitInAir:"bool",
IsShielded:"bool",
LockSoldierAimingToEntry:"bool",
NumberOfStances:"int",
PoseConstraints:"PoseConstraintsData",
Show1pSoldierInEntry:"bool",
Show1pSoldierInEntryForPlayerOnly:"bool",
Show3pSoldierWeaponInEntry:"bool",
ShowSoldierGearInEntry:"bool",
ShowSoldierInEntry:"bool",
ShowSoldierWeaponInEntry:"bool",
SoldierOffset:"Vec3",
SoldierTransitionInvisbleTime:"float",
StancesEnabled:"bool",
TriggerEventOnKey:"EntryInputActionEnum"
};

var EntryComponentHudData = {
Frustum:"bool",
Index:"int",
MaximizeMiniMapOnEntry:"bool",
SeatType:"EntrySeatType",
Visible:"bool"
};

var EntryComponentSoundData = {
StanceSounds:"List<StanceSwitchSoundData>",
StanceSwitchSound:"CtrRef"
};

var EntryInputActionMapData = null;

var EntryInputActionMappingData = {
ActionIdentifier:"EntryInputActionEnum",
ConceptIdentifier:"InputConceptIdentifiers"
};

var EntryInputActionMapsData = {
ActionMapSettingsScheme:"int",
DefaultInputActionMap:"InputActionMapSlot",
InputActionMaps:"List<CtrRef>"
};

var EnvmapEntityData = null;

var EqualizerSettings = {
HighShelfFrequency:"float",
HighShelfGain:"float",
HpCutoffFrequency:"float",
LowShelfFrequency:"float",
LowShelfGain:"float"
};

var EulerTransformEntityData = {
Euler:"ModifierEuler",
In:"float",
In1:"Vec3",
Realm:"fb.Realm"
};

var EulerTransformSplitterEntityData = {
Realm:"fb.Realm",
Transform:"LinearTransform"
};

var EvaluatorData = {
EmitterParameter:"fb.EmitterParameter"
};

var EventAndGateEntityData = {
EventCount:"uint",
Realm:"fb.Realm"
};

var EventCompareGateEntityData = {
CompareType:"EventCompareGateType",
Realm:"fb.Realm",
Value:"int"
};

var EventConnection = {
Source:"CtrRef",
SourceEvent:"EventSpec",
Target:"CtrRef",
TargetEvent:"EventSpec",
TargetType:"EventConnectionTargetType"
};

var EventDebugNodeData = {
Events:"List<CtrRef>"
};

var EventGateEntityData = {
Default:"bool",
Realm:"fb.Realm"
};

var EventGateNodeData = {
CoolDownTime:"AudioGraphNodePort",
Enable:"AudioGraphNodePort",
In:"AudioGraphNodePort",
Out:"AudioGraphNodePort"
};

var EventIfSwitchEntityData = {
RunOnce:"bool",
StartState:"bool"
};

var EventMemoryEntityData = {
Realm:"fb.Realm"
};

var EventQueueEntityData = {
Realm:"fb.Realm"
};

var EventScaleData = {
Event:"StatEvent",
Scale:"float"
};

var EventSpec = {
Id:"int"
};

var EventSplitterEntityData = {
Realm:"fb.Realm",
RunOnce:"bool"
};

var EventSwitchEntityData = {
AutoIncrement:"bool",
OutEvents:"uint",
Realm:"fb.Realm"
};

var EventSwitcherEntry = {
CaseTrigger:"AudioGraphNodePort",
Value:"float"
};

var EventSwitcherNodeData = {
Inputs:"List<CtrRef>",
Value:"AudioGraphNodePort"
};

var EventSyncEntityData = null;

var ExampleVehicleBlueprintBundleMetadata = {
ExampleVehicleType:"fb.ExampleVehicleType"
};

var ExpanderNodeData = {
AttackTime:"AudioGraphNodePort",
ChannelMode:"ExpanderChannelMode",
In:"AudioGraphNodePort",
Out:"AudioGraphNodePort",
Plugin:"SoundGraphPluginRef",
Ratio:"AudioGraphNodePort",
ReleaseTime:"AudioGraphNodePort",
Threshold:"AudioGraphNodePort"
};

var ExplosionEntityData = {
BlastDamage:"float",
BlastImpulse:"float",
BlastRadius:"float",
CameraShockwaveRadius:"float",
DamageIndicationType:"fb.DamageIndicationType",
DestructionMaskVolume:"CtrRef",
DetonateOnce:"bool",
DetonationEffect:"CtrRef",
DisableOcclusion:"bool",
DisableStaticEntityOcclusion:"bool",
EmpTime:"float",
HasStunEffect:"bool",
InnerBlastRadius:"float",
MaskVolume:"CtrRef",
MaterialPair:"CtrRef",
MaxOcclusionRaycastRadius:"float",
ShockwaveDamage:"float",
ShockwaveImpulse:"float",
ShockwaveRadius:"float",
ShockwaveTime:"float",
ShowOnMinimap:"bool",
SpawnDelay:"float",
TriggerImpairedHearing:"bool",
UseEntityTransformForDetonationEffect:"bool"
};

var ExplosionPackEntityData = {
DefuseRadius:"float",
HasRemoteDetonator:"bool",
HasVehicleDetonation:"bool",
Health:"float",
Icon:"UIHudIcon",
IsDestructible:"bool",
ReceivesExplosionDamage:"bool",
SoldierDetonationData:"fb.SoldierDetonationData",
SpottedTime:"float",
TimeToLiveOnPlayerDeath:"float",
VehicleDetonationActivationDelay:"float",
VehicleDetonationRadius:"float"
};

var ExtendedConstraintsData = {
AngularConstraintMax:"float",
AngularConstraintMin:"float",
Falloff:"float",
Heading:"float",
Width:"float"
};

var FaceAnimationWaveMapping = {
AntEnumValue:"int",
WaveNameHash:"int"
};

var FaceAnimationWaveMappings = {
AntAsset:"AntRef",
Mappings:"List<FaceAnimationWaveMapping>",
OnStartedTalking:"AntRef"
};

var FaceposerComponentData = {
FacePoseLibrary:"List<AntRef>",
FacePoseLibraryIndex:"int",
FacePoseLibraryReference:"AntRef",
FacePoserDofSetName:"string",
FacePoserEnabled:"AntRef",
LodDistance:"float",
ShaderExposedValues:"List<string>"
};

var FadeEntityData = {
FadeAudio:"bool",
FadeMovie:"bool",
FadeRumble:"bool",
FadeScreen:"bool",
FadeTime:"float",
FadeUI:"bool",
MaxWaitFadedWhileStreamingTime:"float",
StartFaded:"bool"
};

var FakeHingeData = {
AngularDampening:"float",
ExtensionAxis:"Vec3",
InertiaModifier:"float",
MaxAngle:"float",
MinAngle:"float",
Pivot:"Vec3",
ProgressiveExponent:"float",
PullbackAcceleration:"float",
RotationAxis:"Vec3"
};

var FakePhysicsData = {
ChildFakePhysics:"CtrRef",
EndDampening:"float",
GravityModifier:"float",
Mass:"float",
MaxSpeed:"float",
MinSpeed:"float",
StartDampening:"float",
StartSpeed:"float"
};

var FakeSpringData = {
Acceleration:"float",
Damping:"float",
Direction:"Vec3",
Length:"float",
ProgressiveExponent:"float"
};

var FallingStateData = null;

var FenceModelEntityData = {
Angle:"float",
Width:"float"
};

var FilmGrainComponentData = {
ColorScale:"Vec3",
Enable:"bool",
LinearFilteringEnable:"bool",
RandomEnable:"bool",
Realm:"fb.Realm",
Texture:"CtrRef",
TextureScale:"Vec2"
};

var FireEffectData = {
DisableDuringZoom:"bool",
Effect:"CtrRef",
Offset:"Vec3",
Rotation:"Vec3",
StopLoopingEffects:"bool",
UpdateTransform:"bool",
UseZoomOffset:"bool",
UseZoomRotation:"bool",
ZoomOffset:"Vec3",
ZoomRotation:"Vec3"
};

var FireLogicData = {
AlwaysAutoReload:"bool",
AutomaticDelay:"float",
BoltAction:"BoltActionData",
ClientFireRateMultiplier:"float",
CycleFireModeInputAction:"EntryInputActionEnum",
FireInputAction:"EntryInputActionEnum",
FireLogicType:"fb.FireLogicType",
FireLogicTypeArray:"List<fb.FireLogicType>",
ForceReloadActionOnFireTrigger:"bool",
HoldAndRelease:"HoldAndReleaseData",
HoldOffReloadUntilFireRelease:"bool",
HoldOffReloadUntilZoomRelease:"bool",
PreFireDelay:"float",
RateOfFire:"float",
RateOfFireForBurst:"float",
Recoil:"RecoilData",
ReloadDelay:"float",
ReloadInputAction:"EntryInputActionEnum",
ReloadLogic:"fb.ReloadLogic",
ReloadThreshold:"float",
ReloadTime:"float",
ReloadTimeBulletsLeft:"float",
ReloadType:"fb.ReloadType",
TriggerPullWeight:"float",
FireLogicData: "readonly",
FireLogicType: "uint"
};

var FiringDispersionData = {
DecreasePerSecond:"float",
IncreasePerShot:"float",
MaxAngle:"float",
MinAngle:"float"
};

var FiringFunctionData = {
Ammo:"AmmoConfigData",
AmmoCrateReloadDelay:"float",
Dispersion:"List<FiringDispersionData>",
FireEffects1p:"List<FireEffectData>",
FireEffects3p:"List<FireEffectData>",
FireLogic:"FireLogicData",
OverHeat:"OverHeatData",
SelfHealTimeWhenDeployed:"float",
Shot:"ShotConfigData",
Sound:"CtrRef",
UnlimitedAmmoForAI:"bool",
UsePrimaryAmmo:"bool",
WeaponDispersion:"SoldierWeaponDispersion"
};

var FirstPersonCameraData = {
CameraSpringEffect:"CtrRef",
MoveForwardModifier:"float",
MoveStrafeModifier:"float",
Offset:"Vec3",
OffsetReleaseModifier:"float",
ReleaseModifier:"float",
ReleaseModifierPitch:"float",
ReleaseModifierRoll:"float",
ReleaseModifierYaw:"float",
RotatePitchModifier:"float",
RotateRollModifier:"float",
RotateYawModifier:"float",
Rotation:"Vec3",
RotationAdditionToOffset:"float",
WeaponBaseOffset:"Vec3",
WeaponLagRotationOffset:"Vec3",
WeaponSpringEffect:"CtrRef",
ZoomMoveForwardModifier:"float",
ZoomMoveStrafeModifier:"float",
ZoomOffsetReleaseModifier:"float",
ZoomReleaseModifierPitch:"float",
ZoomReleaseModifierRoll:"float",
ZoomReleaseModifierYaw:"float",
ZoomRotatePitchModifier:"float",
ZoomRotateRollModifier:"float",
ZoomRotateYawModifier:"float"
};

var FlagComponentData = {
Flag_Team1:"CtrRef",
Flag_Team2:"CtrRef",
Realm:"fb.Realm"
};

var FlagCounterEntityData = {
EnemyFlagProgress:"float",
ObjectiveFlagCount:"int",
RoundTime:"float",
TeamId:"fb.TeamId",
VisibleInMinimap:"bool"
};

var FlapComponentData = {
RotationAxis:"RotationAxisEnum",
RotationScale:"float"
};

var FlareEntityData = {
FlareRange:"float"
};

var FlashlightWeaponData = {
Angle:"float",
Range:"float",
UpdateFrequency:"float"
};

var FlatOutputNodeData = {
Angle:"float",
CenterLevel:"AudioGraphNodePort",
LfeLevel:"AudioGraphNodePort",
PanPlugin:"SoundGraphPluginRef",
ReverbGain:"float",
ReverbSend:"CtrRef",
ReverbSendPlugin:"SoundGraphPluginRef"
};

var FloatEntityData = {
DefaultValue:"float",
IncDecValue:"float",
Realm:"fb.Realm"
};

var FloatHubEntityData = {
InputCount:"int",
InputSelect:"int",
Realm:"fb.Realm"
};

var FloatOption = {
Max:"float",
Min:"float",
Name:"string",
Step:"float",
Value:"float"
};

var FloatPhysicsData = {
Density:"float",
FilledDensity:"float"
};

var FloatPropertyTrackData = {
Values:"List<float>"
};

var FloatRange = {
Max:"float",
Min:"float"
};

var FloatRangeDefaultZero = {
Max:"float",
Min:"float"
};

var FloatRecordingData = {
Values:"List<float>"
};

var FloatUnlockValuePair = {
DefaultValue:"float",
UnlockedValue:"float"
};

var FogComponentData = {
Curve:"Vec4",
Enable:"bool",
End:"float",
FogColor:"Vec3",
FogColorCurve:"Vec4",
FogColorEnable:"bool",
FogColorEnd:"float",
FogColorStart:"float",
FogDistanceMultiplier:"float",
FogGradientEnable:"bool",
HeightFogAltitude:"float",
HeightFogDepth:"float",
HeightFogEnable:"bool",
HeightFogFollowCamera:"float",
HeightFogVisibilityRange:"float",
Realm:"fb.Realm",
Start:"float",
TransparencyFadeClamp:"float",
TransparencyFadeEnd:"float",
TransparencyFadeStart:"float"
};

var FogEffectState = {
Curve:"Vec4",
Enable:"bool",
End:"float",
FogColor:"Vec3",
FogColorCurve:"Vec4",
FogColorEnd:"float",
FogColorStart:"float",
HeightFogAltitude:"float",
HeightFogDepth:"float",
HeightFogEnable:"bool",
HeightFogFollowCamera:"float",
HeightFogVisibilityRange:"float",
Start:"float",
TransparencyFadeClamp:"float",
TransparencyFadeEnd:"float",
TransparencyFadeStart:"float"
};

var FollowAISoldierOrderEntityData = null;

var FollowClosestHumanOrderEntityData = null;

var FollowConstantData = {
DistanceFromPlayerBeforeTeleport:"float",
FollowAiInCombatMaxDistance:"float",
FollowAiMaxDistance:"float",
FollowHumanInCombatMaxDistance:"float",
FollowHumanMaxDistance:"float",
FollowInertia:"float",
FollowMimicPoseDistance:"float",
LookAwayAngle:"float"
};

var FollowEnvelopeNodeData = {
Base:"float",
Pivot:"float",
Scale:"float",
X:"AudioGraphNodePort",
Y:"AudioGraphNodePort"
};

var FollowPlayerOrderEntityData = {
CombatForbidden:"bool",
Formation:"CtrRef"
};

var FollowWaypointsEntityData = {
StartAtGeometricallyClosestWaypoint:"bool",
TypeOfRoute:"RouteType",
UsePathFinding:"bool"
};

var FootStepTrigger = {
Time:"float"
};

var FormationData = {
Name:"string",
Positions:"List<Vec3>"
};

var FormationHolder = {
Formations:"List<CtrRef>"
};

var FPSCameraData = {
BlurEffectSettings:"BlurEffectData",
FOV:"float",
TurnEffectSettings:"TurnEffectData"
};

var FramerateHistogramPerformanceEvent = {
Above60:"float",
Below10:"float",
Below15:"float",
Below20:"float",
Below25:"float",
Below30:"float",
Below5:"float",
Below60:"float",
PerformanceLink:"GUID",
SpikeAverage:"float"
};

var FrequencyShiftSsbNodeData = {
Filter:"FrequencyShiftSsbFilter",
Frequency:"AudioGraphNodePort",
In:"AudioGraphNodePort",
Out:"AudioGraphNodePort",
Plugin:"SoundGraphPluginRef"
};

var FrictionScaleAtVelocity = {
FrictionScale:"float",
Velocity:"float"
};

var FriendlyFireEntityData = {
DecayRate:"float",
EnemyCommitmentAllocation:"float",
FailureThreshold:"float",
FriendlyCommitmentAllocation:"float",
MaxCommitment:"float",
Teams:"List<TeamId>",
FriendlyFireEntityData: "readonly",
TeamId: "uint"
};

var FriendZoneDebugRenderEntityData = {
Realm:"fb.Realm"
};

var FriendZoneEntityData = {
CorpsTimeout:"int",
CorpsWeight:"int",
CountCorpsesForAllTeams:"bool",
EnemyWeight:"int",
FriendlyWeight:"int",
InitialZoneRandomized:"bool"
};

var FrontEndComponentData = null;

var GainFaderNodeData = {
Amplitude:"AudioGraphNodePort",
FadeTime:"AudioGraphNodePort",
FadeType:"GainFaderFadeType",
In:"AudioGraphNodePort",
Out:"AudioGraphNodePort",
Plugin:"SoundGraphPluginRef",
Start:"AudioGraphNodePort",
StartTime:"AudioGraphNodePort"
};

var GainNodeData = {
Amplitude:"AudioGraphNodePort",
In:"AudioGraphNodePort",
Out:"AudioGraphNodePort",
Plugin:"SoundGraphPluginRef"
};

var GameAIDifficultyData = null;

var GameAIEntryData = null;

var GameAISystem = null;

var GameAIWeaponData = null;

var GameAnimationConfig = {
ClientEnable:"bool",
ServerEnable:"bool",
UseRawGamepadInput:"bool"
};

var GameAnimationSettings = {
AntOnClientOnlyGamemodes:"List<string>",
ClientEnable:"bool",
ServerEnable:"bool",
TemporalLoddingFarDistance:"float",
TemporalLoddingFifthDeltaTime:"float",
TemporalLoddingFifthDistance:"float",
TemporalLoddingFirstDeltaTime:"float",
TemporalLoddingFirstDistance:"float",
TemporalLoddingFourthDeltaTime:"float",
TemporalLoddingFourthDistance:"float",
TemporalLoddingSecondDeltaTime:"float",
TemporalLoddingSecondDistance:"float",
TemporalLoddingSixthDeltaTime:"float",
TemporalLoddingSixthDistance:"float",
TemporalLoddingThirdDeltaTime:"float",
TemporalLoddingThirdDistance:"float",
UseAnimationDrivenCharacter:"bool",
UseRawGamepadInput:"bool"
};

var GameBehaviourTemplateData = null;

var GameDataContainer = null;

var GameDataContainerAsset = {
Data:"CtrRef"
};

var GameEntityData = {
Components:"List<CtrRef>",
Enabled:"bool",
RuntimeComponentCount:"sbyte"
};

var GameInteractionEntityData = {
Blink:"BlinkType",
CapturepointVerticalOffset:"float",
DelayBetweenUses:"float",
EnemyTextSid:"string",
FriendlyTextSid:"string",
HoldToInteractTime:"float",
InputAction:"EntryInputActionEnum",
InteractingSid:"string",
InteractionEntityType:"fb.InteractionEntityType",
InteractionSid:"string",
InteractionVerticalOffset:"float",
NameSid:"string",
ShowAsCapturePoint:"bool",
ShrinkSnap:"bool",
TeamId:"fb.TeamId"
};

var GameModeConfiguration = {
Information:"List<GameModeInformation>"
};

var GameModeInformation = {
AllowFallbackToDefault:"bool",
DefaultSize:"GameModeSize",
Platform:"GamePlatform",
Sizes:"List<GameModeSize>"
};

var GameModeSettings = {
Information:"List<GameModeInformation>"
};

var GameModeSize = {
ForceSquad:"bool",
MetaIdentifier:"string",
Name:"string",
PlayerCount:"uint",
RoundsPerMap:"uint",
ShortName:"string",
Teams:"List<GameModeTeamSize>"
};

var GameModeTeamSize = {
PlayerCount:"uint",
SquadSize:"uint"
};

var GameModeVariation = {
Identifier:"string",
Name:"string"
};

var GameObjectData = {
IndexInBlueprint:"ushort",
IsEventConnectionTarget:"sbyte",
IsPropertyConnectionTarget:"sbyte"
};

var GamePhysicsEntityData = {
PhysicsData:"CtrRef"
};

var GameplayBone = {
Bone:"GameplayBones",
Name:"string"
};

var GameRenderSettings = {
BlurEnable:"bool",
BuildJobSyncEnable:"bool",
CameraCutMaxFrameTranslation:"float",
DebugRendererEnable:"bool",
DebugRenderServiceEnable:"bool",
DestructionVolumeDrawEnable:"bool",
DrawFps:"bool",
DrawFpsHistogram:"bool",
DrawFpsMethod:"uint",
DrawInfo:"bool",
DrawScreenInfo:"bool",
EdgeModelAdditionalCullEnable:"bool",
EdgeModelCastShadowsEnable:"bool",
EdgeModelCullEnable:"bool",
EdgeModelDepthBiasEnable:"bool",
EdgeModelDrawBoxes:"bool",
EdgeModelDrawStats:"bool",
EdgeModelForceLod:"int",
EdgeModelFrustumCullEnable:"bool",
EdgeModelLodScale:"float",
EdgeModelMaxVisibleInstanceCount:"uint",
EdgeModelOcclusionCullEnable:"bool",
EdgeModelScreenAreaScale:"float",
EdgeModelsEnable:"bool",
EdgeModelShadowDepthBiasEnable:"bool",
EdgeModelSpuInstancingEnable:"bool",
EdgeModelUseLodBox:"bool",
EdgeModelUseMainLodEnable:"bool",
EdgeModelViewDistance:"float",
EmittersEnable:"bool",
Enable:"bool",
EntityRenderEnable:"bool",
FadeEnable:"bool",
FadeWaitingEnable:"bool",
ForceBlurAmount:"float",
ForceFov:"float",
ForceOrthoViewEnable:"bool",
ForceOrthoViewSize:"float",
ForceSquareOrthoView:"bool",
ForceVSyncEnable:"bool",
ForceWorldFadeAmount:"float",
FovMultiplier:"float",
Fullscreen:"bool",
GcmHudEnable:"bool",
GpuProfilerEnable:"bool",
InactiveSkipFrameCount:"uint",
InitialClearEnable:"bool",
JobEnable:"bool",
LockView:"bool",
MovieVSyncEnable:"bool",
NearPlane:"float",
PerfOverlayEnable:"bool",
PerfOverlayLatestFrameTimeEnable:"bool",
PerfOverlayVisible:"bool",
Ps3CellMemoryTexturesEnable:"bool",
Ps3FrameLocalBufferSize:"uint",
Ps3FrameMainBufferSize:"uint",
Ps3LinearFrameCmdBufEnable:"bool",
Ps3Res1280x704Enable:"bool",
Ps3VideoGamma:"float",
Ps3VSyncMethod:"uint",
ResetLockedView:"bool",
SplitScreenTestViewCount:"uint",
StaticModelCullJobCount:"uint",
StaticModelCullSpuJobEnable:"bool",
StaticModelDrawBoxes:"bool",
StaticModelDrawStats:"bool",
StaticModelEnable:"bool",
StaticModelMeshesEnable:"bool",
StaticModelPartCullEnable:"bool",
StaticModelPartFrustumCullEnable:"bool",
StaticModelPartOcclusionCullEnable:"bool",
StaticModelPartOcclusionMaxScreenArea:"float",
StaticModelPartShadowCullEnable:"bool",
StaticModelZPassEnable:"bool",
StereoCrosshairDampingFactor:"float",
StereoCrosshairMaxHitDepth:"float",
StereoCrosshairRadius:"float",
ViewDistance:"float",
VSyncFlashTestEnable:"bool",
XenonBufferTwoFramesEnable:"bool",
XenonGammaRampType:"uint",
XenonPresentImmediateThreshold:"uint",
XenonRes1280x704Enable:"bool",
XenonRingBufferSize:"uint"
};

var GameSensingTemplateData = null;

var GameSettings = {
AdjustVehicleCenterOfMass:"bool",
AimAssistEnabled:"bool",
AimAssistUsePolynomials:"bool",
AllowDestructionOutsideCombatArea:"bool",
AutoAimEnabled:"bool",
CurrentSKU:"SKU",
DefaultLayerInclusion:"string",
DefaultTeamId:"TeamId",
DifficultyIndex:"int",
DifficultySettings:"CtrRef",
EnableLoadingProfile:"bool",
ForceDisableFreeStreaming:"bool",
ForceFreeStreaming:"bool",
GameAdministrationEnabled:"bool",
HasUnlimitedAmmo:"bool",
HasUnlimitedMags:"bool",
InputConfiguration:"List<CtrRef>",
IsGodMode:"bool",
IsJesusMode:"bool",
IsJesusModeAi:"bool",
LayerInclusionTable:"CtrRef",
Level:"string",
LevelWarmUpTime:"float",
LogFileCollisionMode:"fb.LogFileCollisionMode",
LogFileEnable:"bool",
LogFileRotationHistoryLength:"uint",
LogHistory:"uint",
MaxPlayerCount:"uint",
MaxSpectatorCount:"uint",
MetadataContainers:"List<CtrRef>",
Platform:"GamePlatform",
Player:"CtrRef",
PS3ContentRatingAge:"uint",
ResourceRefreshAlwaysAllowed:"bool",
RotateLogs:"bool",
SoldierWeaponSwitching:"CtrRef",
TimeBeforeSpawnIsAllowed:"float",
TimeToWaitForQuitTaskCompletion:"float",
UseSingleWeaponSelector:"bool",
UseSpeedBasedDetailedCollision:"bool",
Version:"CtrRef"
};

var GameSoundEntityData = {
PlayOnCreation:"bool",
Sound:"CtrRef"
};

var GameSplineData = {
SplineType:"GameSplineType"
};

var GameSplineEntityData = {
LocalPoints:"List<Vec3>",
Normals:"List<Vec3>",
SplineType:"GameSplineType"
};

var GameTimeSettings = {
ClampTicks:"int",
ForceDeltaTickCount:"int",
ForceDeltaTime:"float",
ForceMultiplayerOneTickMin:"bool",
ForceSinglePlayerFixedTick:"bool",
ForceUseSleepTimer:"bool",
JoinJobsTimeLimit:"float",
MaxInactiveVariableFps:"float",
MaxSimFps:"float",
MaxVariableFps:"float",
TimeScale:"float",
UseWaitableTimers:"bool",
VariableSimTickTimeEnable:"bool",
VSyncSubtractTime:"float",
YieldTime:"int",
YieldTimeLimit:"float"
};

var GameTipAsset = {
Tips:"List<GameTipData>"
};

var GameTipData = {
Text:"string"
};

var GearBagSpec = {
ChildSpecs:"List<CtrRef>",
GadgetSlots:"uint",
MaxGadgetsPerSlot:"uint",
MaxPrimaryWeapons:"uint",
MaxSecondaryWeapons:"uint",
MaxSidearms:"uint"
};

var GearboxConfigData = {
BackwardThrottleLimit:"float",
ClutchSpeedFactor:"float",
ForwardGearRatios:"List<float>",
ForwardGearSpeeds:"List<float>",
GearboxMode:"int",
GearboxType:"int",
GearChangeTime:"float",
GearDownSpeedFactor:"float",
LimitBackwardThrottle:"bool",
OppositeDirGearChangeMaxSpeed:"float",
OppositeDirGearChangeTime:"float",
ReverseGearRatios:"List<float>",
ReverseGearSpeeds:"List<float>",
TransmissionEfficiency:"float",
UseAutoClutch:"bool",
UseClassicGearBoxAutoClutch:"bool",
UseNeutralGear:"bool"
};

var GeographicalData = {
Latitude:"UIGeoLatitude",
Longitude:"UIGeoLongitude",
SeaLevelOffset:"float"
};

var GeographicalLevelDescriptionComponent = {
GeographicalData:"CtrRef"
};

var GeometryTriggerEntityData = null;

var GlobalNode = {
Outputs:"List<CtrRef>"
};

var GlobalPostProcessSettings = {
BloomBlurEnable:"bool",
BloomBlurFilter:"BlurFilter",
BloomBlurIterationCount:"uint",
BloomEnable:"bool",
BloomPyramidAttenuateEnable:"bool",
BloomPyramidEnable:"bool",
BloomPyramidFinalLevel:"uint",
BloomPyramidLevelCount:"uint",
BloomQuarterResEnable:"bool",
BlurBlendEnable:"bool",
Brightness:"Vec3",
ColorGradingEnable:"bool",
ColorGradingForceUpdateAlways:"bool",
ColorTransformEnable:"bool",
Contrast:"Vec3",
DebugMode:"PostProcessDebugMode",
DebugModeStep:"uint",
DiffusionDofEnable:"bool",
DiffusionDofLuminance:"float",
DirectExposureEnable:"bool",
DownsampleAverageFromBloomEnable:"bool",
DownsampleAverageStartMipmap:"uint",
DownsampleBeforeBlurEnable:"bool",
DownsampleLogAverageEnable:"bool",
DrawDebugInfo:"bool",
DrawDebugUserBrightnessLUT:"bool",
DynamicAOEnable:"bool",
DynamicAOMethod:"fb.DynamicAOMethod",
ExposureClampEnable:"bool",
FilmGrainColorScale:"Vec3",
FilmGrainEnable:"bool",
FilmGrainLinearFilteringEnable:"bool",
FilmGrainRandomEnable:"bool",
FilmGrainTextureScale:"Vec2",
ForceBloomScale:"Vec3",
ForceBlurAdd:"float",
ForceChromostereopsisEnable:"int",
ForceChromostereopsisOffset:"int",
ForceChromostereopsisScale:"float",
ForceDiffusionDofAperture:"float",
ForceDiffusionDofFocalLength:"float",
ForceDiffusionDofPlaneInFocus:"float",
ForceDofBlurFilterDeviation:"float",
ForceDofEnable:"int",
ForceDofFarDistanceScale:"float",
ForceDofFocusDistance:"float",
ForceDofNearDistanceScale:"float",
ForceDofScale:"float",
ForceExposure:"float",
ForceMiddleGray:"float",
ForceTonemapMethod:"int",
ForceVignetteColor:"Vec4",
ForceVignetteExponent:"float",
ForceVignetteScale:"Vec2",
HbaoBilateralBlurCsEnable:"bool",
HbaoBilateralBlurEnable:"bool",
HbaoBilateralBlurRadius:"uint",
HbaoBilateralBlurSharpness:"float",
HbaoDirCount:"float",
HbaoForceVendor:"int",
HbaoGaussianBlurEnable:"bool",
HbaoGaussianBlurHalfResEnable:"bool",
HbaoGaussianBlurSize:"BlurFilter",
HbaoHalfResDepthEnable:"bool",
HbaoHalfResEnable:"bool",
HbaoMaxFootprintRadius:"float",
HbaoQuality:"uint",
HbaoRandomDirVariationCount:"uint",
HbaoRandomTextureWidth:"uint",
HbaoStepCount:"float",
HbaoTemporalFilterDebugMode:"uint",
HbaoTemporalFilterEnable:"bool",
HbaoTemporalFilterMaxNumFrames:"uint",
HbaoTemporalFilterThreshold:"float",
HbaoTemporalFilterThreshold2:"float",
HbaoVectorizedEnable:"bool",
HdrBloomEnable:"bool",
HdrBlurEnable:"bool",
Hue:"float",
Ldr16BitBloomEnable:"bool",
LdrBloomRange:"float",
LensScopeFilterColorScale:"float",
LensScopeFilterEnable:"bool",
LUTGammaB:"float",
LUTGammaCurbOffset:"float",
LUTGammaG:"float",
LUTGammaR:"float",
Ps3BackBufferAsLdrTargetEnable:"bool",
Ps3CompressedRenderTargetsEnable:"bool",
Ps3EdgeMlaaAbsoluteThreshold:"uint",
Ps3EdgeMlaaCopyOnly:"bool",
Ps3EdgeMlaaEnable:"bool",
Ps3EdgeMlaaGpuBlockEnable:"bool",
Ps3EdgeMlaaJobCount:"uint",
Ps3EdgeMlaaJobPriority:"uint",
Ps3EdgeMlaaRelativeEdgeDetection:"bool",
Ps3EdgeMlaaShowEdges:"bool",
Ps3EdgeMlaaThresholdBase:"uint",
Ps3EdgeMlaaThresholdFactor:"uint",
Ps3TiledBloomMipmapCount:"uint",
Ps3TiledFloatMipmapCount:"uint",
Ps3TiledLdrMipmapCount:"uint",
QuarterDownsamplingEnable:"bool",
Saturation:"Vec3",
UIBrightnessNorm:"float",
UserBrightnessAddScale:"float",
UserBrightnessLUTEnable:"bool",
UserBrightnessMax:"float",
UserBrightnessMin:"float",
UserBrightnessMulScale:"float"
};

var GravityData = {
Gravity:"float"
};

var GrenadeEntityData = {
CollisionSpeedMultiplier:"float",
Gravity:"float",
GrenadeType:"fb.GrenadeType",
MinBounceSpeed:"float"
};

var GroundHeightData = {
Data:"List<ushort>",
HeightSpan:"Vec2",
WorldSize:"float"
};

var GroundHeightEntityData = {
Data:"GroundHeightData"
};

var GroupHavokAsset = {
Aabb:"List<AssetAabbs>",
ExternalAssetScaleIndex:"List<ushort>"
};

var GunMasterKillCounterEntityData = {
WeaponsPreset:"List<GunMasterWeaponsPreset>"
};

var GunMasterLevelInfo = {
CustomizeData:"CtrRef",
KillsNeeded:"int"
};

var GunMasterWeaponsPreset = {
GunMasterLevelInfos:"List<GunMasterLevelInfo>",
LevelOverrides:"List<CtrRef>"
};

var GunnerSpottingTrackerData = {
SpottedInfantryIcon:"UIHudIcon",
SpottedVehicleIcon:"UIHudIcon"
};

var GunSwayBaseData = {
BaseValue:"GunSwayDispersionData",
GunSwayLag:"GunSwayLagData",
Recoil:"GunSwayRecoilData"
};

var GunSwayBaseMoveData = {
BaseValue:"GunSwayDispersionData",
GunSwayLag:"GunSwayLagData",
Moving:"GunSwayDispersionData",
Recoil:"GunSwayRecoilData"
};

var GunSwayBaseMoveJumpData = {
BaseValue:"GunSwayDispersionData",
GunSwayLag:"GunSwayLagData",
Jumping:"GunSwayDispersionData",
Moving:"GunSwayDispersionData",
Recoil:"GunSwayRecoilData",
Sprinting:"GunSwayDispersionData",
VaultingMediumObject:"GunSwayDispersionData",
VaultingSmallObject:"GunSwayDispersionData"
};

var GunSwayCrouchProneData = {
NoZoom:"GunSwayBaseMoveData",
Zoom:"GunSwayBaseMoveData"
};

var GunSwayData = {
CameraRecoil:"CtrRef",
Crouch:"GunSwayCrouchProneData",
CrouchToProne:"GunSwayStanceTransition",
CrouchToStand:"GunSwayStanceTransition",
DeviationScaleFactorNoZoom:"float",
DeviationScaleFactorZoom:"float",
FirstShotRecoilMultiplier:"float",
GameplayDeviationScaleFactorNoZoom:"float",
GameplayDeviationScaleFactorZoom:"float",
Modifiers:"List<CtrRef>",
Prone:"GunSwayCrouchProneData",
ProneToCrouch:"GunSwayStanceTransition",
ProneToStand:"GunSwayStanceTransition",
ShootingRecoilDecreaseScale:"float",
Stand:"GunSwayStandData",
StandToCrouch:"GunSwayStanceTransition",
StandToProne:"GunSwayStanceTransition",
SuppressionModifierUnzoomed:"GunSwayStanceZoomModifierData",
SuppressionModifierZoomed:"GunSwayStanceZoomModifierData"
};

var GunSwayDispersionData = {
DecreasePerSecond:"float",
IncreasePerShot:"float",
MaxAngle:"float",
MinAngle:"float"
};

var GunSwayDispersionModData = {
DecreasePerSecondModifier:"float",
IncreasePerShotModifier:"float",
MaxAngleModifier:"float",
MinAngleModifier:"float"
};

var GunSwayLagData = {
MoveForwardModifier:"float",
MoveStrafeModifier:"float",
ReleaseModifier:"float",
RotatePitchModifier:"float",
RotateYawModifier:"float"
};

var GunSwayModifierData = {
CrouchNoZoomModifier:"GunSwayStanceZoomModifierData",
CrouchZoomModifier:"GunSwayStanceZoomModifierData",
OnlyInSupportedShooting:"bool",
OnlyOnWeaponLightEnabled:"bool",
ProneNoZoomModifier:"GunSwayStanceZoomModifierData",
ProneZoomModifier:"GunSwayStanceZoomModifierData",
StandNoZoomModifier:"GunSwayStanceZoomModifierData",
StandZoomModifier:"GunSwayStanceZoomModifierData",
UnlockAsset:"CtrRef"
};

var GunSwayRecoilData = {
HorizontalRecoilAmplitudeIncPerShotMax:"float",
HorizontalRecoilAmplitudeIncPerShotMin:"float",
HorizontalRecoilAmplitudeMax:"float",
RecoilAmplitudeDecreaseFactor:"float",
RecoilAmplitudeIncPerShot:"float",
RecoilAmplitudeMax:"float"
};

var GunSwayStanceTransition = {
CoolDown:"float",
MaxPenaltyValue:"GunSwayDispersionData"
};

var GunSwayStanceZoomModifierData = {
DispersionMod:"GunSwayDispersionModData",
LagPitchMod:"float",
LagYawMod:"float",
RecoilAngleMod:"float",
RecoilMagnitudeMod:"float"
};

var GunSwayStandData = {
NoZoom:"GunSwayBaseMoveJumpData",
Zoom:"GunSwayBaseMoveJumpData"
};

var HavokAsset = {
ExternalAssets:"List<CtrRef>",
Scale:"float"
};

var HdrSetting = {
AllowedOvershoot:"float",
CompressFactor:"float",
DischargeFactor:"float",
Headroom:"float",
MaxAllowedEnergy:"float",
WindowBottomAttackTime:"float",
WindowBottomReleaseTime:"float",
WindowMinBottom:"float",
WindowMinTop:"float",
WindowSize:"float",
WindowTopAttackTime:"float",
WindowTopMaxReleaseTime:"float",
WindowTopMinReleaseTime:"float",
WindowTopReleaseTimeCurve:"AudioCurve"
};

var HealerData = {
HealingTime:"float",
Health:"float",
PickUpDelay:"float",
Radius:"float"
};

var HealingSphereData = {
HealthIncSpeed:"float",
Radius:"float"
};

var HealthComponentData = {
Health:"float",
MaterialPair:"CtrRef"
};

var HealthStateData = {
CanSupportOtherParts:"bool",
CopyDamageToBanger:"bool",
Health:"float",
LoosePartPhysics:"List<CtrRef>",
Objects:"List<CtrRef>",
PartIndex:"uint",
PhysicsEnabled:"bool",
SpawnedBangerBlueprint:"CtrRef",
SpawnedBangerImpulseParams:"CtrRef"
};

var HeightfieldRasterData = null;

var HeightfieldTreeAsset = {
MinHeightSamplesPerSide:"int",
MinHeightWidth:"float"
};

var HidableSoldierMeshWeaponPart = {
BoneName:"string",
HideAlways:"bool",
HideInVehicleEntries:"bool",
WeaponMesh:"CtrRef",
WeaponMeshBlueprint:"CtrRef"
};

var HighPassButterworthNodeData = {
Frequency:"AudioGraphNodePort",
In:"AudioGraphNodePort",
Order:"AudioGraphNodePort",
Out:"AudioGraphNodePort",
Plugin:"SoundGraphPluginRef"
};

var HighPassFir64NodeData = {
Frequency:"AudioGraphNodePort",
In:"AudioGraphNodePort",
Out:"AudioGraphNodePort",
Plugin:"SoundGraphPluginRef"
};

var HighPassIir2NodeData = {
Frequency:"AudioGraphNodePort",
In:"AudioGraphNodePort",
Out:"AudioGraphNodePort",
Plugin:"SoundGraphPluginRef"
};

var HighShelfIir2NodeData = {
Amplitude:"AudioGraphNodePort",
Frequency:"AudioGraphNodePort",
In:"AudioGraphNodePort",
Out:"AudioGraphNodePort",
Plugin:"SoundGraphPluginRef"
};

var HIKData = {
Pull:"float",
ReachR:"float",
ReachT:"float",
Resist:"float"
};

var HitReactionComponentBinding = {
AllowKillFromAnimation:"AntRef",
BoneType:"AntRef",
Direction:"AntRef",
FiringDistance:"AntRef",
Hit:"AntRef",
Immortal:"AntRef",
ImpactType:"AntRef",
RandomAnimationIndex:"AntRef"
};

var HitReactionComponentData = {
Enabled:"bool",
HitReactionBinding:"HitReactionComponentBinding"
};

var HoldAndReleaseData = {
Delay:"float",
ForceFireWhenKilledHolding:"bool",
KilledHoldingPowerModifier:"float",
MaxHoldTime:"float",
MaxPowerModifier:"float",
MinPowerModifier:"float",
PowerIncreasePerSecond:"float"
};

var HoldGroundOrderEntityData = null;

var HovercraftFloatPhysicsData = {
FrontLength:"float",
LandFrictionAxisMod:"Vec3",
LandResistanceAxisMod:"Vec3",
SideLength:"float"
};

var HudCameraShakeData = {
CameraShakeMaxAngle:"float",
CameraShakeMinAngle:"float",
CameraShakeScale:"float",
FilterSize:"uint",
JumpEffectDurationMax:"float",
JumpEffectDurationMin:"float",
JumpEffectMax:"float",
JumpEffectMin:"float",
LandEffectDurationMax:"float",
LandEffectDurationMin:"float",
LandEffectMax:"float",
LandEffectMin:"float",
MaxDisplacement:"float",
WeaponDispersionMax:"float",
WeaponDispersionMin:"float",
WeaponDispersionOffsetScale:"float",
WeaponLagXScale:"float",
WeaponLagYScale:"float"
};

var HudCapturePointTrackerData = null;

var HudConfigAsset = null;

var HudData = {
CameraShakeModifier:"float",
CrosshairOpacityMax:"float",
CrosshairOpacityMin:"float",
CrosshairOpacityModifier:"float",
CrosshairScaleMax:"float",
CrosshairScaleMin:"float",
CrosshairTypeId:"string",
HideAmmo:"bool",
HideCrosshairWhenAimOnFriend:"bool",
HudPropertyList:"CtrRef",
InfiniteAmmo:"bool",
LowAmmoWarning:"float",
ReloadPrompt:"float",
RenderTargetIndex:"int",
SeaLevelAltFreq:"float",
ShowMinimap:"bool",
UseAimWarning:"bool",
UseClimbRate:"bool",
UseGForce:"bool",
UseLockingController:"bool",
UsePredictedSight:"bool",
UseRangeMeter:"bool",
UseRenderTarget:"bool",
UseSkidSlip:"bool",
UseThrust:"bool",
UseVelocityVectorMarker:"bool",
UseWeaponOrientations:"bool",
WeaponClass:"string"
};

var HudEntityData = null;

var HudImpactData = {
Enable:"bool",
MaxHealth:"float",
MaxTimeVisible:"float",
MinHealth:"float",
MinTimeVisible:"float"
};

var HudProgressbarData = {
ProgressType:"fb.ProgressType"
};

var HudTrackerData = {
DisplayExtraInfo:"bool",
DistanceTextOffsetY:"float",
FadeMinAlpha:"float",
IconSize:"float",
MaxDistance:"float",
SecondFadeDistance:"float",
ShowDistance:"bool",
StartFadeDistance:"float",
TrackerHudRadiusX:"float",
TrackerHudRadiusY:"float"
};

var HudVehicleTrackerData = {
DistanceIconShrinkFactor:"float",
EdgePointer:"EdgePointerData",
EnableEdgePointers:"bool",
EnemyTrackerIcon:"UIHudIcon",
FriendlyTrackerIcon:"UIHudIcon",
HeatSensitivity:"float",
IconSize:"float",
LaserPaintedVehicleTrackerIcon:"UIHudIcon",
MaxDistance:"float",
MissileLockTrackerIcon:"UIHudIcon",
MissileTrackerIcon:"UIHudIcon",
OutsideScreenTrackerIcon:"UIHudIcon",
RadarSensitivity:"float",
RenderTargetData:"VehicleTrackerRenderTargetData",
ShowTracker:"bool",
TrackLaserPaintedObjects:"bool",
TrackOnlyUsedVehicles:"bool",
UseCameraComponentTransform:"bool",
UseTrackerSignatures:"bool"
};

var HullFloatPhysicsData = {
AngularDampening:"float",
Depth:"float",
FrictionThrottleModifier:"float",
FrontCurveDegree:"float",
Length:"float",
LiftModifier:"float",
NonEngineSteer:"float",
NonEngineSteerMaxSpeed:"float",
NonEngineSteerMinSpeed:"float",
Offset:"Vec3",
SideCurveDegree:"float",
SubSurfaceSplits:"int",
SupportSizeMod:"float",
WaterDampeningMod:"float",
WaterFrictionAxisMod:"Vec3",
WaterResistanceAxisMod:"Vec3",
Width:"float"
};

var HumanPlayerEntityData = {
DisplayTime:"float",
LastManStandingSid:"string",
PlayerKilledDelay:"float"
};

var IKComponentData = {
IKData:"HIKData",
IKEffector:"IKEffectorEnum"
};

var ImpulseResponseAsset = null;

var InAirStateData = {
FreeFallVelocity:"float"
};

var IndexRange = {
First:"uint",
Last:"uint"
};

var InputActionData = {
IsAnalog:"bool",
NegateValue:"bool"
};

var InputActionMapData = {
Actions:"List<CtrRef>",
CopyKeyBindingsFrom:"string",
PlatformSpecific:"InputActionMapPlatform",
Slot:"InputActionMapSlot"
};

var InputActionMappingData = null;

var InputActionMappingsData = {
Mappings:"List<CtrRef>"
};

var InputActionsData = {
ConceptIdentifier:"InputConceptIdentifiers",
CopyKeyBindingFrom:"InputConceptIdentifiers",
HideInKeyBindings:"bool",
InputActions:"List<CtrRef>",
NameSid:"string"
};

var InputConfigurationAsset = {
CrouchAction:"EntryInputActionEnum",
CrouchAndHoldAction:"EntryInputActionEnum",
DefaultExclusiveInputConcepts:"List<InputConceptIdentifiers>",
DefaultInputConceptDefinition:"CtrRef",
DisableCrawlingWhileFiring:"bool",
DisableCrawlingWhileReloading:"bool",
DisableFiringWhileDeployingBipod:"bool",
DisableFiringWhileJumping:"bool",
DisableSprintingWhileReloading:"bool",
EnableSprintToCrouchTransition:"bool",
FiringDisablingTransitions:"List<PoseTransition>",
InputCurvesEnabled:"bool",
PickupInteractionAction:"EntryInputActionEnum",
ProneToStandOnJump:"bool",
SprintReleaseTime:"float",
StandAutomaticallyIfSprinting:"bool",
StopSprintingWhenReleasingSprint:"bool",
StopSprintingWhenReleasingThrottle:"bool",
ThrottleInputRequiredForSprint:"float",
TogglePoseAction:"EntryInputActionEnum",
UserConfigurableActionMaps:"List<EditableActionMap>",
VehicleBoostIsToggle:"bool",
WaitForSprintReleaseBeforeSprintAgain:"bool",
InputConfigurationAsset: "readonly",
InputConceptIdentifiers: "uint",
PoseTransition: "uint"
};

var InputCurveData = {
AffectedInputs:"List<EntryInputActionEnum>",
HandleMultipleInputsAsSquare:"bool",
InputModifierCurve:"List<Vec2>",
InputCurveData: "readonly",
EntryInputActionEnum: "uint"
};

var InputModifierEntityData = {
Action:"EntryInputActionEnum",
Enabled:"bool",
Offset:"float",
Scale:"float"
};

var InputRecorderData = {
AutoIncrementFileName:"bool",
FileName:"string",
FileNamePrefix:"string",
ToggleRecordAction:"EntryInputActionEnum"
};

var InputRecorderTrackData = {
Name:"string",
PropertyTrack:"CtrRef"
};

var InputRestrictionEntityData = {
AltFire:"bool",
ApplyRestrictionsToSpecificPlayer:"bool",
Brake:"bool",
ChangeEntry:"bool",
ChangePose:"bool",
ChangeVehicle:"bool",
ChangeWeapon:"bool",
Clutch:"bool",
CycleRadioChannel:"bool",
DynamicGadget1:"bool",
DynamicGadget2:"bool",
Fire:"bool",
FireCountermeasure:"bool",
GearDown:"bool",
GearUp:"bool",
GiveOrder:"bool",
GrenadeLauncher:"bool",
HandBrake:"bool",
Jump:"bool",
MapZoom:"bool",
MeleeAttack:"bool",
OverridePreviousInputRestriction:"bool",
Pitch:"bool",
Prone:"bool",
Reload:"bool",
Roll:"bool",
ScoreboardMenu:"bool",
SelectMeleeWeapon:"bool",
SelectWeapon1:"bool",
SelectWeapon2:"bool",
SelectWeapon3:"bool",
SelectWeapon4:"bool",
SelectWeapon5:"bool",
SelectWeapon6:"bool",
SelectWeapon7:"bool",
SelectWeapon8:"bool",
SelectWeapon9:"bool",
Sprint:"bool",
StaticGadget:"bool",
Strafe:"bool",
SwitchPrimaryInventory:"bool",
SwitchPrimaryWeapon:"bool",
ThreeDimensionalMap:"bool",
Throttle:"bool",
ThrowGrenade:"bool",
ToggleCamera:"bool",
ToggleParachute:"bool",
Yaw:"bool",
Zoom:"bool"
};

var InputSuppressionData = {
SuppressVehicleInput:"List<ActionSuppressor>"
};

var InspectAnimationTriggerData = {
Animation:"AntRef",
Probability:"float"
};

var InspectEntityData = {
AnimationSignal:"AntRef",
Cameras:"List<CtrRef>",
CenterOffset:"Vec3",
MaxDistance:"float",
MaxLookAtHeight:"float",
MinDistance:"float",
MinLookAtHeight:"float",
UIName:"string",
ViewPoints:"List<InspectViewPointData>",
ZoomScrollAcceleration:"float",
ZoomScrollSpeed:"float"
};

var InspectViewPointData = {
AdjustmentYaw:"float",
AnimationTriggers:"List<InspectAnimationTriggerData>",
ContinuousAnimationSignal:"List<AntRef>",
Distance:"float",
Fixed:"bool",
FovOffset:"float",
LookAtHeight:"float",
Pitch:"float",
ViewPointID:"string",
Yaw:"float"
};

var InstanceInputNode = {
Out:"CtrRef"
};

var InstanceNode = {
Inputs:"List<CtrRef>",
Outputs:"List<CtrRef>",
UIGraph:"CtrRef"
};

var InstanceOutputNode = {
DestroyGraph:"bool",
Id:"int",
In:"CtrRef"
};

var IntegratorOrDifferentiatorEntityData = {
Bounded:"bool",
Input:"float",
MaxValue:"float",
MinValue:"float",
Realm:"fb.Realm",
StartValue:"float",
UpdatePass:"EntityUpdateOrder"
};

var IntentData = {
DefaultModifier:"float",
Name:"string"
};

var IntEntityData = {
DefaultValue:"int",
IncDecValue:"int",
Realm:"fb.Realm"
};

var InteractableStaticModelEntityData = null;

var InteractionEntityData = {
AllowInteractionViaRemoteEntry:"bool",
MaxUses:"uint",
PreInteractionSoundEffect:"CtrRef",
TestIfOccluded:"bool",
UseWithinAngle:"float",
UseWithinRadius:"float"
};

var InteractionTypesData = {
AmmoCrateEntity:"bool",
ExplosionPackEntity:"bool",
InteractionEntity:"bool",
PickupEntity:"bool",
SoldierEntity:"bool",
VehicleEntity:"bool"
};

var InterfaceDescriptorData = {
InputEvents:"List<DynamicEvent>",
InputLinks:"List<DynamicLink>",
OutputEvents:"List<DynamicEvent>",
OutputLinks:"List<DynamicLink>"
};

var InterludeOrderEntityData = {
Crouch:"bool",
IsCutscene:"bool"
};

var InterruptFlow = {
interruptEnum:"UIInterruptID",
interruptFlow:"CtrRef"
};

var IntHubEntityData = {
InputCount:"int",
InputSelect:"int",
Realm:"fb.Realm"
};

var IntOption = {
Name:"string",
Value:"int"
};

var IntPropertyTrackData = {
Values:"List<int>"
};

var IntRecordingData = {
Values:"List<int>"
};

var IntUnlockValuePair = {
DefaultValue:"int",
UnlockedValue:"int"
};

var IrReverbControllerNodeData = {
Amplitude0:"AudioGraphNodePort",
Amplitude1:"AudioGraphNodePort",
Reverb0:"AudioGraphNodePort",
Reverb1:"AudioGraphNodePort"
};

var IrReverbEntityData = {
FadeCurve:"FadeCurveType",
Gain:"float",
ImpulseResponse:"CtrRef",
Volume:"float"
};

var IrReverbNodeData = {
Amplitude0:"AudioGraphNodePort",
Amplitude1:"AudioGraphNodePort",
In:"AudioGraphNodePort",
MaxReverbLength:"float",
Out:"AudioGraphNodePort",
Reverb0:"AudioGraphNodePort",
Reverb1:"AudioGraphNodePort",
ReverbPlugin:"SoundGraphPluginRef"
};

var JammingComponentData = {
AirMissileJamming:"AirMissileJammingData",
SmokeJamming:"SmokeJammingData"
};

var JetEngineConfigData = {
AngleInputPitchMultiplier:"float",
AngleInputYMultiplier:"float",
DirectionVectorIndex:"uint",
ForceMagnitudeMultiplier:"float",
IsTurnable:"bool",
IsWaterJetEngine:"bool",
MaxVelocity:"float",
PowerFadeOutRange:"Vec2"
};

var JoypadNodeData = {
AButton:"AudioGraphNodePort",
BButton:"AudioGraphNodePort",
LeftAnalogX:"AudioGraphNodePort",
LeftAnalogY:"AudioGraphNodePort",
RightAnalogX:"AudioGraphNodePort",
RightAnalogY:"AudioGraphNodePort"
};

var JumpNode = {
In:"CtrRef",
TargetNode:"CtrRef",
TargetPort:"CtrRef"
};

var JumpStateData = {
JumpEffectSize:"float",
JumpHeight:"float"
};

var KeyboardInputActionData = {
Key:"InputDeviceKeys"
};

var KillAllEntityData = {
KillAllHumanSoldiers:"bool"
};

var KillCounterEntityData = {
EnemyWeight:"float",
IgnoreAI:"bool",
MaxKillCount:"uint",
NeutralTeamWeight:"KillWeight",
TeamId:"fb.TeamId",
TeamKillWeight:"KillWeight"
};

var KillEvent = {
Position:"Vec3",
Time:"float",
VictimId:"ulong",
VictimPosition:"Vec3",
Weapon:"string"
};

var KillFromVehicleScoringHandlerData = null;

var KillWeight = {
CoolDownTime:"float",
HighIntenseWeight:"float",
LowIntenseWeight:"float"
};

var KitPickupEntityData = {
KeepAdditionalWeapons:"bool",
KeepAmmoState:"bool"
};

var KitState = {
Kit:"string"
};

var KitStateEvent = {
Kit:"string",
SecondsAsKit:"float"
};

var KyotoPlayerAliveFilterEntityData = null;

var LadderComponentData = null;

var LadderEntityData = null;

var LakeData = null;

var LandingFlapData = {
ActivationHeight:"float",
ActivationVelocity:"float",
HeightTolerance:"float",
VelocityTolerance:"float"
};

var LandingGearConditionData = {
Angle:"float",
Height:"float",
Velocity:"float"
};

var LandingGearLogicData = {
DeployCondition:"LandingGearConditionData",
RetractCondition:"LandingGearConditionData"
};

var LanPresenceBackendData = null;

var LanServerBackendData = null;

var LaserDesignatorData = {
BomberSound:"CtrRef",
BomberTime:"float",
BombWarnTime:"float",
PostLockTime:"float"
};

var LaserPainterData = {
TimeObjectIsPainted:"float"
};

var LensFlareComponentData = {
LensFlare:"CtrRef"
};

var LensFlareElement = {
AlphaAngleCurve:"Vec4",
AlphaCamDistCurve:"Vec4",
AlphaCamDistMax:"float",
AlphaOccluderCurve:"Vec4",
AlphaScreenPosCurve:"Vec4",
RayDistance:"float",
Shader:"CtrRef",
Size:"Vec2",
SizeAngleCurve:"Vec4",
SizeCamDistCurve:"Vec4",
SizeCamDistMax:"float",
SizeOccluderCurve:"Vec4",
SizeScreenPosCurve:"Vec4"
};

var LensFlareEntityData = {
DebugDrawOccluder:"bool",
Elements:"List<LensFlareElement>",
HalfRes:"bool",
OccluderSize:"float",
Visible:"bool"
};

var LensScopeComponentData = {
BlurCenter:"Vec2",
BlurScale:"float",
ChromaticAberrationColor1:"Vec3",
ChromaticAberrationColor2:"Vec3",
ChromaticAberrationDisplacement1:"Vec2",
ChromaticAberrationDisplacement2:"Vec2",
ChromaticAberrationStrengths:"Vec2",
Enable:"bool",
RadialBlendDistanceCoefficients:"Vec2",
Realm:"fb.Realm"
};

var LevelAudioObstructionAsset = {
FrequencySlewRate:"float",
GainSlewRate:"float",
MaterialMap:"List<AudioObstructionMaterialInfo>",
MaxRaycastDistanceSquared:"float"
};

var LevelControlEntityData = {
LevelToLoad:"string",
RollCredits:"bool"
};

var LevelData = {
AerialHeightmapData:"string",
AISystem:"CtrRef",
AnimatedSkeletonDatabase:"CtrRef",
AntProjectAssets:"List<CtrRef>",
AudioObstructionInfo:"CtrRef",
CameraModes:"List<CtrRef>",
CameraTransitions:"List<CtrRef>",
DefaultFOV:"float",
EmitterExclusionVolumes:"List<CtrRef>",
EmitterSystemAsset:"CtrRef",
EnlightenShaderDatabase:"CtrRef",
FaceAnimationsWaveMappings:"CtrRef",
FreeStreamingEnable:"bool",
GameConfigurationName:"string",
HackForceBuild:"CtrRef",
HugeBroadPhase:"bool",
InfantryFOVMultiplier:"float",
LevelDescription:"fb.LevelDescription",
LevelReference:"CtrRef",
MaxEntityBusNetworkCount:"uint",
MaxVehicleHeight:"float",
PathfindingBlobInfo:"PathfindingBlob",
SoundStates:"CtrRef",
VoiceOverLogic:"List<CtrRef>",
VoiceOverSystem:"CtrRef",
WorldSizeXZ:"float"
};

var LevelDescription = {
Components:"List<CtrRef>",
Description:"string",
IsCoop:"bool",
IsMenu:"bool",
IsMultiplayer:"bool",
Name:"string"
};

var LevelDescriptionAsset = {
Categories:"List<LevelDescriptionInclusionCategory>",
Description:"LevelDescription",
LevelName:"string",
StartPoints:"List<string>"
};

var LevelDescriptionComponent = null;

var LevelDescriptionInclusionCategory = {
Category:"string",
Mode:"List<string>"
};

var LevelReportingAsset = {
BuiltLevels:"List<CtrRef>"
};

var LevelSaveData = {
SaveNames:"List<string>",
SaveSize:"uint"
};

var LevelSetup = {
DifficultyIndex:"uint",
ForceReloadResources:"bool",
InclusionOptions:"List<LevelSetupOption>",
IsSaveGame:"bool",
Name:"string",
SubLevelNames:"List<string>",
SubLevelStates:"List<int>"
};

var LevelSetupOption = {
Criterion:"string",
Value:"string"
};

var LfoNodeData = {
Amplitude:"AudioGraphNodePort",
Hz:"AudioGraphNodePort",
Max:"float",
Min:"float",
Out:"AudioGraphNodePort",
StartAtRandomValue:"bool"
};

var LicenseConfiguration = {
Licenses:"List<LicenseInfo>"
};

var LicenseInfo = {
AllowStaging:"bool",
ClientOnly:"bool",
Name:"string",
StagingPlatform:"GamePlatform"
};

var LifeCounterEntityData = {
Attacker:"bool",
BaseCount:"int",
DefensiveKillRadius:"float",
DisplayTime:"float",
FallbackTime:"float",
FightHarderMessageSid:"string",
FightHarderTreshold:"float",
LifeTresholdValues:"List<int>",
ReinforceMessageSid:"string",
ReinforceTable:"List<float>",
ReinforceThreshold:"int",
SetBestSquadSpawner:"bool",
SimpleReinforce:"bool",
StartingLifeCount:"int",
TeamId:"fb.TeamId",
UiShowCountLowerThreshold:"int",
UiShowCountUpperThreshold:"int"
};

var LightComponentData = {
Light:"CtrRef"
};

var LightProbeVolumeData = {
BlendDistance:"float",
Priority:"int",
Xres:"uint",
Yres:"uint",
Zres:"uint"
};

var LimiterNodeData = {
ChannelMode:"LimiterChannelMode",
In:"AudioGraphNodePort",
Out:"AudioGraphNodePort",
Plugin:"SoundGraphPluginRef",
ReleaseTime:"AudioGraphNodePort",
Threshold:"AudioGraphNodePort"
};

var LinearMovingBodyData = {
Axis:"Vec3",
End:"EndPointData",
Start:"EndPointData"
};

var LinearTransformNodeData = {
K:"AudioGraphNodePort",
M:"AudioGraphNodePort",
X:"AudioGraphNodePort",
Y:"AudioGraphNodePort"
};

var LinearTransformRecordingData = {
Values:"List<LinearTransform>"
};

var LinkConnection = {
Source:"CtrRef",
SourceFieldId:"int",
Target:"CtrRef",
TargetFieldId:"int"
};

var LocalForceData = {
LocalForce:"Vec3"
};

var LocalizationAsset = {
LocalizedTexts:"List<CtrRef>"
};

var LocalLightEntityData = {
AttenuationOffset:"float",
Color:"Vec3",
EnlightenColorMode:"fb.EnlightenColorMode",
EnlightenColorScale:"Vec3",
EnlightenEnable:"bool",
Intensity:"float",
ParticleColorScale:"Vec3",
Radius:"float",
SpecularEnable:"bool",
Visible:"bool"
};

var LocalServerBackendData = null;

var LocatorComponentData = {
Realm:"fb.Realm"
};

var LocatorEntityData = {
Realm:"fb.Realm"
};

var LockedSettingConfig = {
Key:"string",
Value:"uint"
};

var LockingControllerData = {
AcceptanceAngle:"float",
AngleConstant:"float",
DistanceConstant:"float",
HoldStillThreshold:"float",
IgnoreHeigthLockDistance:"bool",
LockOnEmptyVehicles:"bool",
LockOnVisibleTargetsOnly:"bool",
LockOnWorldSpacePos:"bool",
LockTime:"float",
MinimumLockTime:"float",
PositionOnly:"bool",
RayLength:"float",
ReleaseOnNewTargetTime:"float",
ReleaseTime:"float",
SampleRate:"float",
Sensitivity:"float",
ZoomLevelLock:"List<ZoomLevelLockData>"
};

var LockingScoringHandlerData = {
HotVehicleTimeout:"float"
};

var LockingWeaponData = {
FireOnlyWhenLockedOn:"bool",
IsGuided:"bool",
IsGuidedWhenZoomed:"bool",
IsHoming:"bool",
LockingController:"CtrRef",
SecondaryLockingController:"CtrRef",
WarnLock:"WarnTarget"
};

var LodBinding = {
DisableControllerUpdate:"AntRef",
DisablePoseUpdate:"AntRef",
DistanceFromCamera:"AntRef"
};

var LoggingEntityData = {
BoolValue:"bool",
FloatValue:"float",
IntValue:"int",
Realm:"fb.Realm",
Strings:"List<string>",
TransformValue:"LinearTransform",
Vec2Value:"Vec2",
Vec3Value:"Vec3"
};

var LogicalExpressionEntry = {
Trigger:"AudioGraphNodePort"
};

var LogicalExpressionNodeData = {
Inputs:"List<CtrRef>",
Operator:"LogicalExpressionOperator",
Trigger:"AudioGraphNodePort"
};

var LogicPrefabBlueprint = null;

var LogicReferenceObjectData = {
SubRealm:"fb.SubRealm"
};

var LogicVisualEnvironmentEntityData = {
Visibility:"float",
VisualEnvironment:"CtrRef"
};

var LookAtCameraEntityData = null;

var LookAtEntityData = {
Enabled:"bool",
RunOnce:"bool",
UseStaticDirection:"bool"
};

var LookAtTriggerEntityData = {
CheckOcclusion:"bool",
FOV:"float",
MaxDistanceToObject:"float",
MinDistanceToObject:"float",
StartTriggerLookingAt:"bool",
Weapon:"CtrRef",
ZoomLevel:"uint"
};

var LookConstraintsData = {
MaxLookPitch:"float",
MaxLookYaw:"float",
MinLookPitch:"float",
MinLookYaw:"float"
};

var LoosePartPhysicsData = {
FakePhysics:"CtrRef"
};

var LowPassButterworthNodeData = {
Frequency:"AudioGraphNodePort",
In:"AudioGraphNodePort",
Order:"AudioGraphNodePort",
Out:"AudioGraphNodePort",
Plugin:"SoundGraphPluginRef"
};

var LowPassFir64NodeData = {
Frequency:"AudioGraphNodePort",
In:"AudioGraphNodePort",
Out:"AudioGraphNodePort",
Plugin:"SoundGraphPluginRef"
};

var LowPassIir2NodeData = {
Frequency:"AudioGraphNodePort",
In:"AudioGraphNodePort",
Out:"AudioGraphNodePort",
Plugin:"SoundGraphPluginRef"
};

var LowShelfIir2NodeData = {
Amplitude:"AudioGraphNodePort",
Frequency:"AudioGraphNodePort",
In:"AudioGraphNodePort",
Out:"AudioGraphNodePort",
Plugin:"SoundGraphPluginRef"
};

var ManualDataAsset = {
Entries:"List<ManualDataEntry>"
};

var ManualDataEntry = {
Language:"LanguageFormat",
Platform:"GamePlatform",
Textures:"List<CtrRef>"
};

var MapMarkerEntityData = {
BaseTransform:"Vec3",
BlinkTime:"float",
FlagControlMarker:"bool",
FocusPointRadius:"float",
HideRadius:"float",
HudIcon:"UIHudIcon",
InstantFlagReturnRadius:"float",
IsFocusPoint:"bool",
IsVisible:"bool",
MarkerType:"MapMarkerType",
NrOfEntries:"int",
NrOfPassengers:"int",
OnlyShowSnapped:"bool",
OwnerTeam:"TeamId",
Progress:"float",
ProgressMinTime:"float",
ProgressPlayerSpeedUpPercentage:"float",
ProgressTime:"float",
ProgressTime1Player:"float",
ShowAirTargetBox:"bool",
ShowProgress:"bool",
ShowRadius:"float",
Sid:"string",
Snap:"bool",
TrackedPlayersInRange:"uint",
TrackingPlayerRange:"float",
UseMarkerTransform:"bool",
VerticalOffset:"float",
VisibleForTeam:"TeamId"
};

var MapRotataionLookup = {
GameMode:"string"
};

var MapRotationConfig = {
DescSid:"string",
GameMode:"string",
MapRotationId:"int",
Mod:"string",
NameSid:"string",
RandomizeStartingMap:"bool"
};

var MaskVolumeEntityData = null;

var MasterSkeletonAsset = {
MasterSkeleton:"CtrRef",
SubSkeletons:"List<SubSkeleton>"
};

var MasterUnitNodeData = {
Amplitude:"AudioGraphNodePort",
CompAttack:"AudioGraphNodePort",
CompRatio:"AudioGraphNodePort",
CompRelease:"AudioGraphNodePort",
CompThreshold:"AudioGraphNodePort",
DistClipLevel:"AudioGraphNodePort",
FadeTime:"AudioGraphNodePort",
HighPassFreq:"AudioGraphNodePort",
HighShelfFreq:"AudioGraphNodePort",
HighShelfGain:"AudioGraphNodePort",
LowShelfFreq:"AudioGraphNodePort",
LowShelfGain:"AudioGraphNodePort",
MainMixGain:"AudioGraphNodePort",
MasterDialogGain:"AudioGraphNodePort",
MasterGain:"AudioGraphNodePort",
MasterLfeGain:"AudioGraphNodePort",
ParallelDistortionGain:"AudioGraphNodePort",
PostEffectsGain:"AudioGraphNodePort",
ReverbGain:"AudioGraphNodePort",
Settings:"List<CtrRef>",
SettingsIndex:"AudioGraphNodePort"
};

var MasterUnitSettings = {
Compressor:"CtrRef",
DistortionClipLevel:"float",
Equalizer:"CtrRef",
FadeTime:"float",
MainMixVolume:"float",
MasterDialogGain:"float",
MasterLfeGain:"float",
MasterVolume:"float",
Name:"string",
ParallelDistortionGain:"float",
PostEffectsGain:"float",
ReverbVolume:"float"
};

var MatchmakingCreateGameParameters = {
Attributes:"List<MatchmakingGameAttribute>",
GameTopology:"MatchmakingNetworkTopology",
PeerMode:"MatchmakingPeer2PeerMode",
QueueCapacity:"uint",
Settings:"MatchmakingGameSettings",
VoipTopology:"MatchmakingNetworkTopology"
};

var MatchmakingCriteria = {
GenericRules:"List<MatchmakingGenericRule>",
PingSiteRule:"MatchmakingPingSiteRule",
RankedRule:"MatchmakingRankedRule",
SizeRule:"MatchmakingSizeRule",
UEDRules:"List<MatchmakingUserExtendedDataRule>",
VirtualizedRule:"MatchmakingVirtualizedRule"
};

var MatchmakingGameAttribute = {
Attribute:"string",
Override:"bool",
Value:"string"
};

var MatchmakingGameSettings = {
AdminInvitesOnlyIgnoreEntryChecks:"bool",
AdminOnlyInvites:"bool",
AllowSameTeamId:"bool",
EnablePersistedGameId:"bool",
EnforceSingleGroupJoin:"bool",
HostMigratable:"bool",
JoinInProgressSupported:"bool",
OpenToBrowsing:"bool",
OpenToInvites:"bool",
OpenToJoinByPlayer:"bool",
OpenToMatchmaking:"bool",
Ranked:"bool"
};

var MatchmakingGenericRule = {
DesiredValues:"List<MatchmakingRuleString>",
IgnoreIfDefault:"bool",
MergeValues:"bool",
MinFitThresHold:"string",
Rule:"string",
Setting:"string",
SortValues:"bool"
};

var MatchmakingModifier = null;

var MatchmakingPingSiteRule = {
MinFitThreshold:"string"
};

var MatchmakingPlayerCapacityModifier = {
Attribute:"string"
};

var MatchmakingRankedRule = {
MinFitThreshold:"string"
};

var MatchmakingRuleString = {
Licenses:"List<string>",
Platform:"MatchmakingPlatform",
UseOnlyIfEmpty:"bool",
Value:"string"
};

var MatchmakingSession = {
CreateGameParams:"MatchmakingCreateGameParameters",
Criteria:"MatchmakingCriteria",
DurationMs:"uint",
Mode:"MatchmakingSessionMode",
Modifiers:"List<CtrRef>",
OnNotFound:"CtrRef"
};

var MatchmakingSizeConfiguration = {
DesiredPlayerCount:"uint",
MaxPlayerCapacity:"uint",
MinFitThreshold:"string",
MinPlayerCount:"uint",
Platform:"MatchmakingPlatform",
Settings:"List<string>"
};

var MatchmakingSizeRule = {
Configurations:"List<MatchmakingSizeConfiguration>",
Setting:"string"
};

var MatchmakingUserExtendedDataRule = {
MinFitThresHold:"string",
Rule:"string"
};

var MatchmakingVirtualizedRule = {
MinFitThreshold:"string",
VirtualizationMode:"MatchmakingVirtualizationMode"
};

var MaterialContainerAsset = {
MaterialNames:"List<string>",
MaterialPairs:"List<CtrRef>"
};

var MaterialContainerPair = {
FlagsAndIndex:"uint",
PhysicsMaterialIndex:"sbyte",
PhysicsPropertyIndex:"sbyte"
};

var MaterialGridData = {
DefaultMaterial:"CtrRef",
DefaultMaterialIndex:"uint",
InteractionGrid:"List<MaterialInteractionGridRow>",
MaterialIndexMap:"List<uint>",
MaterialPairs:"List<CtrRef>",
MaterialProperties:"List<MaterialRelationPropertyPair>"
};

var MaterialInteractionGridRow = {
Items:"List<MaterialRelationPropertyPair>"
};

var MaterialPropertyEffectData = {
ImpactEffects:"List<CtrRef>"
};

var MaterialPropertyHealthData = {
Health:"float"
};

var MaterialPropertyImpulseData = {
ImpulseAbsorptionMultiplier:"float"
};

var MaterialPropertyPhysicsData = {
DynamicFrictionModifier:"float",
Resistance:"float",
RestitutionModifier:"float",
StaticFrictionModifier:"float"
};

var MaterialPropertySoundData = {
ImpactSound:"CtrRef",
MaterialSoundId:"float",
ScrapeLength:"float",
ScrapeSound:"CtrRef",
Softness:"float",
SoldierSettings:"CtrRef"
};

var MaterialPropertyTerrainData = {
DestructionEffect:"CtrRef",
DirtTriggerColor:"Vec3",
DirtTriggerFactor:"float"
};

var MaterialRelationDamageData = {
CollisionDamageMultiplier:"float",
CollisionDamageThreshold:"float",
DamagePenetrationMultiplier:"float",
DamageProtectionMultiplier:"float",
DamageProtectionThreshold:"float",
ExplosionCoverDamageModifier:"float",
InflictsDemolitionDamage:"bool"
};

var MaterialRelationDecalData = {
Decal:"CtrRef"
};

var MaterialRelationEffectData = {
ImpactDebris:"List<CtrRef>",
ImpactEffectMaxSpreadAngle:"float",
ImpactEffects:"List<CtrRef>",
MirrorImpactDirection:"bool"
};

var MaterialRelationPenetrationData = {
NeverPenetrate:"bool"
};

var MaterialRelationPropertyData = null;

var MaterialRelationPropertyPair = {
PhysicsMaterialProperties:"List<CtrRef>",
PhysicsPropertyProperties:"List<CtrRef>"
};

var MaterialRelationSoundData = {
ImpactSound:"CtrRef",
ScrapeLength:"float",
ScrapeSound:"CtrRef"
};

var MaterialRelationTerrainDestructionData = {
Depth:"float",
Width:"float"
};

var MaterialRelationVehicleData = {
ChassiEffect:"CtrRef",
GroundEffect:"CtrRef",
TrackEffect:"CtrRef",
WheelEffect:"CtrRef"
};

var MaterialSoldierSoundSettings = {
FootStepSound:"CtrRef",
LandSound:"CtrRef",
ProneSound:"CtrRef"
};

var MathOpEntityData = {
Operators:"List<MathOp>",
Realm:"fb.Realm",
MathOpEntityData: "readonly",
MathOp: "uint"
};

var MatrixPannerNodeData = {
Center:"AudioGraphNodePort",
FarRearLeft:"AudioGraphNodePort",
FarRearRight:"AudioGraphNodePort",
FrontLeft:"AudioGraphNodePort",
FrontRight:"AudioGraphNodePort",
In:"AudioGraphNodePort",
Lfe:"AudioGraphNodePort",
Out:"AudioGraphNodePort",
RearLeft:"AudioGraphNodePort",
RearRight:"AudioGraphNodePort"
};

var MaxInstancesScopeStrategyData = {
Count:"uint",
KeepOldest:"bool"
};

var MedicBagEntityData = {
Healer:"HealerData"
};

var MedicBagHealingSphereEntityData = {
Healer:"HealingSphereData"
};

var MedicBagHealingSphereWeaponData = {
Healer:"HealingSphereData",
HealthPointsPerBag:"float",
HealthPointsRefillSpeed:"float"
};

var MedicBagWeaponData = {
Healer:"HealerData",
HealthPointsPerBag:"float",
HealthPointsRefillSpeed:"float"
};

var MedkitWeaponData = null;

var MeleeEntityCommonData = {
CrouchAttackType:"CtrRef",
DefendWindow:"float",
EnableAbortPossibility:"bool",
InvalidMeleeAttackZone:"float",
KillDamage:"float",
KillDelay:"float",
MaxAttackHeightDifference:"float",
MeleeAttackDistance:"float",
MeleeBinding:"CharacterMeleeBinding",
MeleeCommonBinding:"CharacterMeleeCommonBinding",
MeleeEndDelay:"float",
ProneAttackType:"CtrRef",
TriggerDelay:"float"
};

var MeleeEntityData = {
CommonData:"CtrRef"
};

var MeleeTriggerEntityData = {
ConnectTransform:"LinearTransform",
MeleeEnabled:"bool",
MeleeType:"CtrRef"
};

var MeleeWeaponData = {
UseCannedAnimation:"bool",
UseSphereDamage:"bool"
};

var MemoryLevelDescriptionComponent = {
MeshPoolSizePs3:"int",
MeshPoolSizePs3Cell:"int",
MeshPoolSizeXenon:"int",
TexturePoolSize:"int",
TexturePoolSizePs3:"int",
TexturePoolSizeXenon:"int"
};

var MenuConfigAsset = null;

var MenuIdAsset = {
ShortName:"string"
};

var MeshAsset = {
CullScale:"float",
DestructionMaterialEnable:"bool",
EnlightenType:"fb.EnlightenType",
LodGroup:"CtrRef",
LodScale:"float",
Materials:"List<CtrRef>",
NameHash:"uint",
OccluderHighPriority:"bool",
OccluderMeshEnable:"bool",
StreamingEnable:"bool"
};

var MeshComponentData = {
BoneFakePhysics:"List<CtrRef>",
Mesh:"CtrRef",
Skeleton:"CtrRef"
};

var MeshLodGroup = {
CullScreenArea:"float",
Lod1Distance:"float",
Lod2Distance:"float",
Lod3Distance:"float",
Lod4Distance:"float",
Lod5Distance:"float",
ShadowDistance:"float"
};

var MeshMaterial = {
Shader:"SurfaceShaderInstanceDataStruct",
ShaderInstance:"CtrRef"
};

var MeshMaterialVariation = {
Shader:"SurfaceShaderInstanceDataStruct"
};

var MeshMergingSettings = {
ClearMergeReport:"bool",
DrawDebugTexturesEnable:"bool",
DrawStatsEnable:"bool",
Enable:"bool",
StatsLodIndex:"int",
StatsSeedIndex:"int",
TextureAtlasMergeEnable:"bool",
TextureAtlasWidth:"uint",
VirtualTextureArrayStreamingEnable:"bool"
};

var MeshProjectileEntityData = {
ExtraDamping:"bool",
InitialAngularVelocity:"Vec3",
IsAttachable:"bool",
MaxAttachableInclination:"float",
Mesh:"CtrRef",
TrailEffect:"CtrRef"
};

var MeshProxyEntityData = {
BasePoseTransforms:"List<LinearTransform>",
Mesh:"CtrRef"
};

var MeshScatteringMaskScaleDrawMethodData = null;

var MeshSettings = {
ForceLod:"int",
GlobalLodScale:"float",
LoadingEnabled:"bool",
OverrideShadersMeshName:"string",
OverrideShadersShaderName:"string",
ShadowDistanceScale:"float"
};

var MeshStreamingSettings = {
AsyncCreatesEnable:"bool",
DefragEnable:"bool",
DefragTransferLimit:"uint",
DefragTransfersEnable:"bool",
DrawInstanceBoxesEnable:"bool",
DrawLoadingListEnable:"bool",
DrawMeshListEnable:"bool",
DrawMissingListEnable:"bool",
DrawNonStreamedListEnable:"bool",
DrawPriorityListEnable:"bool",
DrawStatsEnable:"bool",
DumpLoadedList:"bool",
DxImmutableUsageEnable:"bool",
DynamicLoadingEnable:"bool",
Enable:"bool",
ForceLod:"int",
HighestPriorityEnable:"bool",
InstantUnloadingEnable:"bool",
ListViewPageIndex:"uint",
ListViewSortOrder:"uint",
MaxPendingLoadCount:"uint",
MaxUnloadCountPerFrame:"uint",
OverridePoolSizes:"bool",
PoolHeadroomSize:"uint",
PoolSize:"uint",
PrioritizeNearestPointEnable:"bool",
PrioritizeTexturesEnable:"bool",
PrioritizeVisibleLoadsEnable:"bool",
PrioritizeVisibleLodsFirstEnable:"bool",
PrioritizeVisibleMeshesFirstEnable:"bool",
PriorityJobEnable:"bool",
PrioritySpuJobEnable:"bool",
Ps3CellDefragTransferLimit:"uint",
Ps3CellPoolHeadroomSize:"uint",
Ps3CellPoolSize:"uint",
UpdateEnable:"bool",
UpdateJobEnable:"bool",
UseConditionalStreaming:"bool",
UseSlowTexturePrio:"bool",
XenonFinalPoolSizeAdjustment:"uint",
XenonRetailPoolSizeAdjustment:"uint"
};

var MeshVariationDatabase = {
Entries:"List<CtrRef>",
RedirectEntries:"List<CtrRef>"
};

var MeshVariationDatabaseEntry = {
Materials:"List<MeshVariationDatabaseMaterial>",
Mesh:"CtrRef",
VariationAssetNameHash:"uint"
};

var MeshVariationDatabaseMaterial = {
Material:"CtrRef",
MaterialVariation:"CtrRef",
TextureParameters:"List<TextureShaderParameter>"
};

var MeshVariationInfo = {
MeshAsset:"CtrRef",
OrigMeshAsset:"CtrRef",
VariationAsset:"CtrRef"
};

var MessageEntityData = {
AdditionalMessages:"List<MessageLineData>",
DisplayTime:"float",
Enabled:"bool",
EntryInputAction:"EntryInputActionEnum",
MessageSid:"string",
MessageType:"UIMessageEntityType"
};

var MessageInfo = {
MessageQueueSize:"uint",
NormalMessageTime:"float",
RowTypeName:"string",
ShortMessageTime:"float"
};

var MessageLineData = {
EntryInputAction:"EntryInputActionEnum",
MessageSid:"string"
};

var MetricAggregate = null;

var MetricEvent = {
Owner:"ulong"
};

var MetricReport = {
Events:"List<CtrRef>"
};

var MetricState = {
IsSet:"bool"
};

var Minimap2DEntityData = {
AntialiasMultiplier:"uint",
CameraTransform:"Vec3",
Fov:"uint",
ImageHeight:"uint",
ImageWidth:"uint",
TerrainHeight:"uint"
};

var MinimapCameraOffsetData = {
CameraFov:"float",
Position:"Vec2"
};

var MinimapData = {
AnchorPosHorizontal:"float",
AnchorPosVertical:"float",
CameraDistance:"float",
CameraFov:"float",
CameraLookDistance:"float",
CameraPosition:"Vec3",
CameraRotation:"float",
CenterOnCombatArea:"bool",
InnerZoomFactor:"int",
MaxZoomLevels:"int",
OverlayAlpha:"float",
OverlayColor:"Vec3",
Position:"Vec2",
PositionFromPlayer:"bool",
RotationFromPlayer:"bool",
Size:"Vec2",
StartZoomLevel:"int"
};

var MinMaxNodeData = {
Max:"AudioGraphNodePort",
Min:"AudioGraphNodePort",
X:"AudioGraphNodePort",
Y:"AudioGraphNodePort"
};

var MinMaxValueSelectorEntry = {
Input:"AudioGraphNodePort"
};

var MinMaxValueSelectorNodeData = {
Inputs:"List<CtrRef>",
MaxIndex:"AudioGraphNodePort",
MaxValue:"AudioGraphNodePort",
MinIndex:"AudioGraphNodePort",
MinValue:"AudioGraphNodePort"
};

var MissileEntityData = {
ApplyGravityWhenGuided:"bool",
Damage:"float",
DefaultTeam:"TeamId",
Drag:"float",
DudExplosion:"CtrRef",
EngineEffect:"CtrRef",
EngineStrength:"float",
EngineTimeToIgnition:"float",
EngineTimeToLive:"float",
FlyBySound:"CtrRef",
FlyBySoundRadius:"float",
FlyBySoundSpeed:"float",
Gravity:"float",
ImpactImpulse:"float",
LockableInfo:"MissileLockableInfoData",
LockingController:"CtrRef",
MaxSpeed:"float",
MaxTurnAngle:"float",
NearTargetDetonation:"NearTargetDetonationData",
TimeToActivateGuidingSystem:"float",
TimeToArm:"float",
UnguidedData:"MissileUnguidedData",
WarnOnPointingMissile:"bool",
WarnTarget:"fb.WarnTarget"
};

var MissileLockableInfoData = {
HeatSignature:"float",
RadarSignature:"float"
};

var MissileUnguidedData = {
StaticPosition:"Vec2",
TargetPositionOffset:"Vec2",
UseStaticPosition:"bool",
UseTargetPosition:"bool"
};

var MissionObjectiveHudData = {
CameraDistance:"float",
CameraFov:"float",
CameraLookDistance:"float",
CameraPosition:"Vec3",
CameraRotation:"float",
HorizontalBoundaries:"Vec2",
VerticalBoundaries:"Vec2"
};

var MixerAsset = {
DefaultPreset:"CtrRef",
Graph:"CtrRef",
Presets:"List<CtrRef>"
};

var MixerEntityData = {
ActivateOnCreation:"bool",
Mixer:"CtrRef"
};

var MixerEntry = {
Amplitude:"AudioGraphNodePort",
In:"AudioGraphNodePort",
Plugin:"SoundGraphPluginRef"
};

var MixerGraphData = {
AccumulateModes:"List<MixerValueAccumulateMode>",
Inputs:"List<CtrRef>",
Outputs:"List<CtrRef>",
MixerGraphData: "readonly",
MixerValueAccumulateMode: "uint"
};

var MixerInputEntry = {
AccumulateMode:"MixerValueAccumulateMode",
Out:"AudioGraphNodePort",
Source:"CtrRef"
};

var MixerInputNodeData = {
Entries:"List<CtrRef>"
};

var MixerNodeData = {
Entries:"List<CtrRef>",
Out:"AudioGraphNodePort"
};

var MixerOutputEntry = {
In:"AudioGraphNodePort",
Target:"CtrRef"
};

var MixerOutputNodeData = {
Entries:"List<CtrRef>"
};

var MixerPreset = {
Groups:"List<MixerPresetGroupData>",
NameHash:"uint",
Nodes:"List<MixerPresetNodeData>"
};

var MixerPresetGroupData = {
AttackTime:"float",
Group:"CtrRef",
IsDominant:"bool",
Properties:"List<MixGroupPropertyValue>",
ReleaseTime:"float",
State:"MixGroupState"
};

var MixerPresetNodeData = {
Node:"CtrRef",
Value:"float"
};

var MixerReceiveEntry = {
Mixer:"CtrRef",
Out:"AudioGraphNodePort",
Source:"CtrRef"
};

var MixerReceiveNodeData = {
Entries:"List<CtrRef>"
};

var MixerSendEntry = {
In:"AudioGraphNodePort",
Mixer:"CtrRef",
Target:"CtrRef"
};

var MixerSendNodeData = {
Entries:"List<CtrRef>"
};

var MixerSetPropertyEntry = {
AttackTime:"float",
Group:"CtrRef",
In:"AudioGraphNodePort",
ReleaseTime:"float",
Target:"uint"
};

var MixerSetPropertyNodeData = {
Entries:"List<CtrRef>"
};

var MixerSimplePresetNodeData = {
Index:"AudioGraphNodePort",
Presets:"List<CtrRef>"
};

var MixerSystemAsset = {
Groups:"List<CtrRef>"
};

var MixerValueNodeData = {
DefaultValue:"float",
Out:"AudioGraphNodePort"
};

var MixGroup = {
GroupIndex:"ushort",
Name:"string",
ParentGroupIndex:"ushort"
};

var MixGroupPropertyValue = {
Property:"uint",
Value:"float"
};

var MobileSpawnComponentData = {
EnterMobileSpawnPoint:"bool",
NameSid:"string",
ParachuteSpawnDistance:"float",
ParachuteSpawnRadiusMax:"float",
ParachuteSpawnRadiusMin:"float"
};

var MobilityData = {
MaxSpeed:"float",
Use3DWaypoints:"bool"
};

var ModelAnimationEntityData = {
AnimationEntitySpace:"LinearTransform",
AnimationEntitySpaceActive:"bool",
AnimationIndex:"int",
AnimationSet:"CtrRef",
ApplyPreTransformation:"bool",
ApplyRotationCompensation:"bool",
AutoStart:"bool",
BoneToPlace:"GameplayBones",
ConnectBoneName:"string",
DefaultAnimation:"string",
DisableCulling:"bool",
EnableJointWorldTransformOutput:"bool",
ExternalTime:"float",
InstanceSeed:"int",
JointOutputPropertyIds:"List<int>",
JointWorldTransformUpdateOrder:"ModelAnimationUpdateOrder",
Looping:"bool",
ModelAnimationTransformType:"fb.ModelAnimationTransformType",
PlayFirstFrame:"bool",
Realm:"fb.Realm",
ResetAfterStop:"bool",
RootMeshBoneName:"string",
ShowDebugTransforms:"bool",
TrajectoryBoneName:"string"
};

var MortarStrikeWeaponData = {
HoldingTolerance:"float",
MaxRandomSpawnHeight:"float",
MaxStrikeDistance:"float",
StrikeRadius:"float"
};

var MotionBlurComponentData = {
CutoffGradientScale:"float",
MotionBlurCutoffRadius:"float",
MotionBlurEnable:"bool",
Realm:"fb.Realm"
};

var MotionControllerInputActionData = {
Button:"InputDeviceMotionControllerButtons"
};

var MotionDampingData = {
Linear:"float",
LinearModifier:"Vec3",
Pitch:"float",
Roll:"float",
Yaw:"float"
};

var MotorbikeData = {
CounterLeanForce:"float",
DampBigJumpImpact:"bool",
DampBigJumpImpactCounterForce:"Vec3",
DampBigJumpImpactVelocity:"float",
JumpForwardLeanMinAngle:"float",
JumpForwardLeanMomentum:"float",
KickstandLinearDamping:"float",
KickstandRoll:"float",
LeanForce:"float",
LeanForceMaxVel:"float",
MaxLeaningRoll:"float",
ProximityExtScale:"Vec3",
ProximityHeightTranslation:"float",
ShortOffgroundGravityMultiplier:"float",
ShortOffgroundPeriod:"float",
StandStillRoll:"float",
StoppieActivationVelocity:"float",
StoppieMomentum:"float",
StoppieStartVelocity:"float",
StoppieStopVelocity:"float",
WheelieAngularDamping:"float",
WheelieAngularDampingSpeed:"float",
WheelieAngularStartMomentum:"float",
WheelieForce:"Vec3",
WheelieForceBodyOffset:"Vec3",
WheelieInertia:"float",
WheelieMaxAngle:"float",
WheelieMaxNoContactTime:"float",
WheelieMaxNoDownForceContactTime:"float",
WheelieMaxVelocity:"float",
WheelieMaxVelocityDampRange:"float",
WheelieMaxVelocityUndamped:"float",
WheelieOutAngularMomentum:"float",
WheelieSpringDamping:"float",
WheelieStartVelocity:"float",
WheelieSteeringFactor:"float",
WheelieVelocityForceScale:"float",
YawBrakeDampingLerpEndScale:"float",
YawBrakeDampingLerpStartScale:"float"
};

var MouseInputActionData = {
Button:"InputDeviceMouseButtons",
RememberExcessInput:"bool",
ScaleScrollWheelAxisInput:"bool",
SimulateJoystickAxis:"bool"
};

var MovementActionData = null;

var MovementActionGroupData = {
Actions:"List<CtrRef>",
RestartChildren:"bool",
RunSimultaneously:"bool"
};

var MovementActionRandomizerData = {
Actions:"List<CtrRef>",
ReinsertIntoRandomizedListAfterUse:"bool"
};

var MovementActionRoot = {
StartSequence:"CtrRef"
};

var MovementComponentBinding = {
AnimationControlled:"AntRef"
};

var MovementComponentData = {
MovementBinding:"MovementComponentBinding"
};

var MovementConstantData = {
MaxCrouchWalkDistance:"float"
};

var MovieComponentData = {
ExternalTime:"float",
IsNormalMap:"bool",
Movie:"CtrRef"
};

var MovieEntityData = {
ExternalTime:"float",
IsNormalMap:"bool",
Movie:"CtrRef"
};

var MovieTextureAsset = {
ChunkGuid:"GUID",
ChunkSize:"uint",
HasLocalizedAudioTracks:"bool",
OverrideBackgroundMusic:"bool",
SubtitleChunkGuid:"GUID",
SubtitleChunkSize:"uint"
};

var MovieTextureSettings = {
Enable:"bool"
};

var MovingBodyData = {
Inertia:"float",
Mass:"float"
};

var MPModeData = {
VehiclePoints:"int"
};

var MultiCrossfaderGroup = {
Amplitude:"AudioGraphNodePort",
FadeAmplitude:"float",
FadeBegin:"float",
FadeEnd:"float",
FadeType:"FaderType",
Start:"AudioGraphNodePort",
Stop:"AudioGraphNodePort"
};

var MultiCrossfaderNodeData = {
Control:"AudioGraphNodePort",
CrossfaderGroups:"List<CtrRef>",
LockControlValue:"bool",
Start:"AudioGraphNodePort",
Stop:"AudioGraphNodePort"
};

var MultipleActorScenarioEntityData = {
Actor1:"int",
Actor1Part:"int",
Actor1Prepared:"bool",
Actor1SecondPart:"int",
Actor2:"int",
Actor2Part:"int",
Actor2Prepared:"bool",
Actor2SecondPart:"int",
Actor3:"int",
Actor3Part:"int",
Actor3Prepared:"bool",
Actor3SecondPart:"int",
Actor4:"int",
Actor4Part:"int",
Actor4Prepared:"bool",
Actor4SecondPart:"int",
Actor5:"int",
Actor5Part:"int",
Actor5Prepared:"bool",
Actor5SecondPart:"int",
Actor6:"int",
Actor6Part:"int",
Actor6Prepared:"bool",
Actor6SecondPart:"int",
AligningEnabled:"bool",
CheckActor1Finished:"bool",
CheckActor2Finished:"bool",
CheckActor3Finished:"bool",
CheckActor4Finished:"bool",
CheckActor5Finished:"bool",
CheckActor6Finished:"bool",
ExternalTime:"float",
LevelChoice:"int",
Realm:"fb.Realm",
ScenarioActive:"bool",
ScenarioAntRef:"AntRef",
ScenarioChoice:"int",
UseExternalTime:"bool",
UseInputEventPlayerAsPlayer1:"bool",
WorldSpace:"bool",
WorldSpaceConnectTransform:"LinearTransform"
};

var MultipleTargetPainterWeaponData = {
Angle:"float",
Range:"float",
SpottingBehavior:"SpottingType",
TimeObjectIsPainted:"float",
TimeObjectIsSpotted:"float",
UseLaserPainting:"bool",
UseSpotting:"bool"
};

var MultipleTriggerEntityData = {
TriggerAmount:"int"
};

var NearTargetDetonationData = {
DetonateNearTarget:"bool",
DetonationRadius:"float",
MaxDetonationDelay:"float",
MinDetonationDelay:"float"
};

var NestedList = {
DefaultHighlighted:"DefaultSelectionItem",
DynamicShowList:"UIDataSourceInfo",
HiddenOnPC:"bool",
HiddenOnXenon:"bool",
HighLightOnUpdate:"bool",
Index:"string",
Label:"string",
ListDataSource:"UIDataSourceInfo",
RowType:"UIListRowType",
StaticItems:"List<string>",
UseAsNormalListRows:"bool"
};

var NetworkableLoosePartPhysicsData = {
Networked:"bool"
};

var NetworkDataId = {
Value:"uint"
};

var NetworkPerformanceEvent = {
PerformanceLink:"GUID",
Received:"uint",
ReceivedAverage:"float",
Sent:"uint",
SentAverage:"float"
};

var NetworkSettings = {
ClientConnectionDebugFilePrefix:"string",
ClientPort:"uint",
ConnectTimeout:"float",
IncrementServerPortOnFail:"bool",
MaxClientCount:"uint",
MaxClientFrameSize:"uint",
MaxGhostCount:"uint",
MaxServerFrameSize:"uint",
ProtocolVersion:"uint",
ServerAddress:"string",
ServerConnectionDebugFilePrefix:"string",
ServerPort:"uint",
TimeNudgeBias:"float",
TimeNudgeGhostFrequencyFactor:"float",
TimeSyncEnabled:"bool",
TitleId:"string",
UseFrameManager:"bool",
XlspAddress:"string"
};

var NetworkVoteDetails = {
Issuer:"uint",
Personal:"bool",
VoteId:"sbyte"
};

var NFSUIListDataBinding = {
Items:"List<UIListItem>",
Refresh:"UIDataSourceInfo"
};

var NoiseTextureAsset = null;

var NormalizeSettings = {
Lower:"float",
Maximum:"float",
Minimum:"float",
Normalize:"bool",
Upper:"float",
Velocity:"float"
};

var NotEntityData = {
In:"bool",
Realm:"fb.Realm"
};

var NumberGeneratorNodeData = {
Max:"float",
Min:"float",
Mode:"NumberGeneratorMode",
Trigger:"AudioGraphNodePort",
Y:"AudioGraphNodePort"
};

var OBBData = {
HalfExtents:"Vec3",
Transform:"LinearTransform"
};

var ObjectBlueprint = {
Object:"CtrRef"
};

var ObjectEnterAreaTriggerEntityData = {
AutoStart:"bool",
Realm:"fb.Realm",
UpdatePass:"fb.UpdatePass"
};

var ObjectiveEntityData = {
DelayTime:"float",
DisplaySuccess:"bool",
DisplayTime:"float",
HudData:"CtrRef",
ObjectiveBriefSid:"string",
ObjectiveSid:"string",
ObjectiveType:"fb.ObjectiveType",
Reciever:"MessageReciever",
RetriggerSuccessOnShowObjective:"bool",
SquadId:"fb.SquadId",
SuccessSid:"string",
TeamId:"fb.TeamId",
Tutorial:"bool"
};

var ObjectVariation = {
NameHash:"uint"
};

var ObjectVariationSwitchEntityData = {
Variation1:"CtrRef",
Variation2:"CtrRef"
};

var OccluderMeshEntityData = {
Mesh:"CtrRef"
};

var OccluderVolumeEntityData = {
OccluderHighPriority:"bool"
};

var OcclusionSettings = {
DrawBinaryBuffer:"bool",
DrawZbuffer:"bool",
Enable:"bool"
};

var OneOptionAxisEditableAction = {
Header:"string",
Invert:"bool"
};

var OneOptionButtonEditableAction = {
Header:"string"
};

var OnGroundStateData = {
AllowedDistanceFromGround:"float",
GroundHugging:"bool",
JumpDelay:"float",
JumpStaminaPenalty:"float",
LimitDownwardVelocity:"bool"
};

var OnlineConfiguration = {
Backend:"BackendType",
Chat:"CtrRef",
Provider:"CtrRef",
RichPresence:"CtrRef"
};

var OnlineEnvironmentConsoleUrl = {
Urls:"List<OnlineEnvironmentConsoleUrlData>"
};

var OnlineEnvironmentConsoleUrlData = {
Platform:"GamePlatform",
Url:"OnlineEnvironmentUrl"
};

var OnlineEnvironmentUrl = {
Urls:"List<OnlineEnvironmentUrlData>"
};

var OnlineEnvironmentUrlData = {
Environment:"OnlineEnvironment",
Url:"string"
};

var OnlinePlatformConfiguration = {
ClientBackends:"List<CtrRef>",
IsFallback:"bool",
Platform:"GamePlatform",
ServerBackends:"List<CtrRef>",
Services:"CtrRef"
};

var OnlineProviderAsset = {
Configurations:"List<OnlineProviderConfiguration>"
};

var OnlineProviderConfiguration = {
Client:"string",
IsServer:"bool",
Platform:"GamePlatform",
ServerSocketPacketSize:"uint",
ServiceName:"string",
SKU:"string",
Version:"string"
};

var OnlineServicesAsset = {
OnlineServices:"List<CtrRef>"
};

var OnlineSettings = {
Backend:"BackendType",
ChatSettings:"CtrRef",
Country:"string",
Environment:"OnlineEnvironment",
IsSecure:"bool",
MatchmakeImmediately:"bool",
MatchmakingMode:"string",
MatchmakingOptions:"string",
MatchmakingToken:"string",
NegativeUserCacheRefreshPeriod:"uint",
PeerBackend:"BackendType",
Provider:"CtrRef",
Region:"string",
RichPresence:"CtrRef",
SupportHostMigration:"bool"
};

var OperandLogicNode = {
False:"CtrRef",
In:"CtrRef",
LeftDataSourceInfo:"UIDataSourceInfo",
Operator:"UILogicOperator",
RightDataSourceInfo:"UIDataSourceInfo",
RightLiteralOperand:"double",
True:"CtrRef"
};

var Or4EntityData = {
In1:"bool",
In2:"bool",
In3:"bool",
In4:"bool",
Realm:"fb.Realm"
};

var OrderBonusScoringHandlerData = null;

var OrderEntityData = {
DebugName:"string",
Enabled:"bool",
IssueOrderDelay:"float",
OnCompleteTimeOut:"float",
OnFailedTimeOut:"float",
ReadinessOnStart:"ReadinessLevel"
};

var OrderReadiness = {
MinimumReadiness:"ReadinessState",
OrderType:"string"
};

var OrderSettings = {
Orders:"List<CtrRef>"
};

var OrEntityData = {
In1:"bool",
In2:"bool",
Realm:"fb.Realm"
};

var OrientationNodeData = {
ListenerRelativePitch:"AudioGraphNodePort",
ListenerRelativeRoll:"AudioGraphNodePort",
ListenerRelativeYaw:"AudioGraphNodePort"
};

var OutdoorLightComponentData = {
CloudShadowCoverage:"float",
CloudShadowEnable:"bool",
CloudShadowExponent:"float",
CloudShadowSize:"float",
CloudShadowSpeed:"Vec2",
CloudShadowTexture:"CtrRef",
Enable:"bool",
GroundColor:"Vec3",
Realm:"fb.Realm",
SkyColor:"Vec3",
SkyEnvmapShadowScale:"float",
SkyLightAngleFactor:"float",
SunColor:"Vec3",
SunRotationX:"float",
SunRotationY:"float",
SunShadowHeightScale:"float",
SunSpecularScale:"float",
TranslucencyAmbient:"float",
TranslucencyDistortion:"float",
TranslucencyPower:"float",
TranslucencyScale:"float"
};

var OutdoorLightEffectState = {
CloudShadowCoverage:"float",
CloudShadowEnable:"bool",
CloudShadowExponent:"float",
CloudShadowSize:"float",
CloudShadowSpeed:"Vec2",
CloudShadowTexture:"CtrRef",
Enable:"bool",
GroundColor:"Vec3",
SkyColor:"Vec3",
SkyLightAngleFactor:"float",
SunColor:"Vec3",
SunRotationX:"float",
SunRotationY:"float",
SunShadowHeightScale:"float"
};

var OutputNodeData = {
AttenuationCurve:"AudioCurve",
BypassHeadroom:"AudioGraphNodePort",
EnableHdr:"bool",
Gain:"float",
HFDampingDistance:"float",
HFDampingObstruction:"float",
HFDampingOcclusion:"float",
In:"AudioGraphNodePort",
LowPassPlugin:"SoundGraphPluginRef",
MainSend:"CtrRef",
MainSendPlugin:"SoundGraphPluginRef",
MinDistance:"float",
OutputName:"string",
OutputNameHash:"uint",
Solo:"bool",
TransformSource:"OutputTransformSource",
VuPlugin:"SoundGraphPluginRef"
};

var OverHeatData = {
HeatDropPerSecond:"float",
HeatPerBullet:"float",
OverHeatEffect:"FireEffectData",
OverHeatPenaltyTime:"float",
OverHeatThreshold:"float"
};

var PackagingCellData = {
Rules:"List<CtrRef>",
Shape:"List<Vec2>",
Targets:"List<CtrRef>"
};

var PackagingDetailInfo = {
IncludeAnimation:"bool",
IncludeMeshes:"bool",
IncludeSounds:"bool",
IncludeTextures:"bool",
LodsToSkip:"int",
MipsToSkip:"int"
};

var PackagingRule = {
CanTargetSelf:"bool",
DebugColor:"Vec3"
};

var PadInputActionData = {
Button:"InputDevicePadButtons",
Pov:"InputDevicePOVs",
PS3AlternativeButton:"InputDevicePadButtons",
UseSquareInput:"bool"
};

var PadRumbleNodeData = {
RumbleHigh:"AudioGraphNodePort",
RumbleLow:"AudioGraphNodePort"
};

var ParachuteStateData = {
AngleOfAttack:"float",
BankOffset:"float",
BrakeOffset:"float",
DeployTime:"float",
ForwardDragCoefficient:"float",
MaxPitchVelocity:"float",
MaxRollVelocity:"float",
MaxYawVelocity:"float",
TerminalVelocity:"float",
ThrottleOffset:"float"
};

var ParameterFilterLinearNodeData = {
AttackSpeed:"AudioGraphNodePort",
In:"AudioGraphNodePort",
Out:"AudioGraphNodePort",
ReleaseSpeed:"AudioGraphNodePort"
};

var ParameterFilterLpNodeData = {
Hz:"AudioGraphNodePort",
In:"AudioGraphNodePort",
Out:"AudioGraphNodePort"
};

var PartComponentData = {
AnimatePhysics:"bool",
HealthStates:"List<CtrRef>",
IsFragile:"bool",
IsNetworkable:"bool",
IsSupported:"bool",
IsWindow:"bool",
PartLinks:"List<CtrRef>"
};

var PartInfoData = {
Aabb:"AxisAlignedBox",
Translation:"Vec3"
};

var PartLinkData = {
PartComponentIndex1:"uint",
PartComponentIndex2:"uint"
};

var PathfindingBlob = {
BlobId:"GUID",
BlobSize:"uint",
ChunkSizes:"List<uint>"
};

var PathfindingBuildOrderData = null;

var PathfindingBuildSettingsAsset = {
AdditionalInwardsSmoothingDist:"float",
EntityHeight:"float",
EntityRadius:"float",
GridSideLength:"float",
LeaveSmallIslandsTouchingPortals:"bool",
MaxStep:"float",
MaxWalkableSlope:"float",
MinIslandSurfaceArea:"float",
OptimizeForAxisAligned:"bool",
TerrainSamplingStep:"uint",
TesselateForPathingAccuracy:"bool",
UseEnhancedTerrainTracking:"bool",
VoxSize:"float"
};

var PathfindingDebugSettings = {
DrawConnections:"bool",
DrawFilledPolygons:"bool",
DrawMemory:"bool",
DrawObstacles:"bool",
DrawPolygonOutline:"bool",
DrawStats:"bool",
DrawTimings:"bool",
OriginalPaths:"bool",
PotentialObstacles:"bool",
RandomPositions:"bool",
ReplayMode:"PathfindingReplayMode",
TextOffsetY:"int",
TextStartX:"int",
TextStartY:"int",
TypesToDrawMask:"int"
};

var PathfindingExclusionVolumeData = null;

var PathfindingObjectCategoryAsset = null;

var PathfindingObjectCategoryRepresentation = {
Category:"CtrRef",
Representation:"PathfindingRepresentation"
};

var PathfindingSandboxAsset = {
System:"CtrRef"
};

var PathfindingSystemEntityData = {
PathfindingTypesOnLevel:"List<uint>"
};

var PathfindingTypeAsset = {
Index:"uint"
};

var PathFollowingComponentData = {
AlternatePathfindingIndices:"List<uint>",
MovementCorridorRadius:"float",
PreferredPathfindingIndex:"uint",
UpdatePathAtDistancePercent:"float"
};

var PatrolOrderEntityData = {
CombatMode:"CombatPatrolMode",
StartAtGeometricallyClosestWaypoint:"bool",
StartingWaypoint:"CtrRef",
TypeOfRoute:"RouteType",
UsePathFinding:"bool"
};

var PeakingIir2NodeData = {
Amplitude:"AudioGraphNodePort",
Frequency:"AudioGraphNodePort",
In:"AudioGraphNodePort",
Out:"AudioGraphNodePort",
Plugin:"SoundGraphPluginRef",
Q:"AudioGraphNodePort"
};

var PeerCreateGameParameters = {
Base:"MatchmakingCreateGameParameters",
PlayerCapacity:"uint"
};

var PeerServerBackendData = {
CreateParameters:"PeerCreateGameParameters"
};

var PerformanceEvent = {
AllocCPUMemory:"float",
AllocGPUMemory:"float",
CPUAverage:"float",
DrawCallCount:"int",
FreeCPUMemory:"float",
FreeGPUMemory:"float",
GPUAverage:"float",
PerformanceLink:"GUID",
PerformanceLocation:"string",
Position:"Vec3",
PrimitiveCount:"int"
};

var PerformanceFpsHistogram = {
Above60:"float",
Below10:"float",
Below15:"float",
Below20:"float",
Below25:"float",
Below30:"float",
Below5:"float",
Below60:"float"
};

var PerformanceProfileState = {
GpuMemMB:"uint",
GraphicAdapterName:"string",
Platform:"string",
ProcessorClock:"uint",
ProcessorCoreCount:"uint",
ProcessorCount:"uint",
TotalMemMB:"uint"
};

var PerformanceTrackerSettings = {
Enabled:"bool",
Interval:"float",
JuiceLogPerformance:"bool",
SupressPerformanceStatsOnIdle:"bool",
SupressPerformanceStatsUntilSpawned:"bool"
};

var PersistenceConfiguration = {
CoopProfile:"CtrRef",
LicenseConfig:"CtrRef",
MPProfile:"CtrRef",
PointSystemParams:"CtrRef",
SPProfile:"CtrRef",
StatCategoryTreeCollection:"CtrRef"
};

var PersistenceConsumableMapping = {
Group:"ConsumableGroup"
};

var PersistenceData = {
ClientDefaultGroup:"CtrRef",
ClubPersistenceName:"string",
ConsumableMappings:"List<PersistenceConsumableMapping>",
CustomReportValues:"List<CustomReportValueData>",
DeltaGameReports:"bool",
HistoryDaily:"bool",
HistoryMonthly:"bool",
HistoryWeekly:"bool",
OutputProperties:"bool",
PersistenceName:"string",
RetentionPolicy:"CtrRef",
ServerDefaultGroup:"CtrRef",
Values:"List<PersistentValueTemplateData>"
};

var PersistenceGameData = {
Assets:"List<CtrRef>"
};

var PersistenceRetentionPolicy = {
DailyHistoryCount:"int",
MonthlyHistoryCount:"int",
WeeklyHistoryCount:"int"
};

var PersistenceSettings = {
CoopProfile:"CtrRef",
LicenseConfig:"CtrRef",
MPProfile:"CtrRef",
PointSystemParams:"CtrRef",
SPProfile:"CtrRef",
StatCategoryTreeCollection:"CtrRef"
};

var PersistenceStatGroup = {
GroupName:"string"
};

var PersistenceStatTable = {
OwnerPersistenceData:"CtrRef",
TableName:"string"
};

var PersistentAwardDataStatRef = {
Definition:"CtrRef"
};

var PersistentCriteriaStatRef = {
Criteria:"CtrRef",
CriteriaOwner:"CtrRef",
ParamX:"CtrRef",
ParamY:"CtrRef"
};

var PersistentValueTemplate = {
Data:"PersistentValueTemplateData",
DerivedFormulaRefs:"List<CtrRef>"
};

var PersistentValueTemplateData = {
ClubStat:"bool",
DataType:"PersistentValueDataType",
DefaultFloatValue:"float",
DefaultIntValue:"int",
DefaultValue:"string",
ForceIntoTemplate:"bool",
Group:"AwardGroup",
HistoryType:"PersistentValueHistoryType",
Name:"string",
ValueType:"PersistentValueType"
};

var PersistentValueTemplateStatRef = {
Definition:"CtrRef"
};

var PhantomComponentData = {
AsyncQueryPointerAsset:"AntRef",
BoxSize:"Vec3",
EnableTrajectoryOverride:"AntRef",
TrajectoryOverride:"AntRef"
};

var PhysicsConeConstraintData = {
AngularFriction:"float",
HasLimits:"bool",
MaxAngle:"float",
MinAngle:"float"
};

var PhysicsConstraintData = {
BreakThreshold:"float",
ConstrainedObject:"CtrRef",
IsBreakable:"bool",
Transform:"LinearTransform"
};

var PhysicsDebugSettings = {
DebugHingeConstraints:"bool",
TimingRecursionDepth:"uint",
UsePhysicsCpuTimers:"bool"
};

var PhysicsDrivenAnimationEntityBinding = {
AimLeftRight:"AntRef",
AimUpDown:"AntRef",
Crouch:"AntRef",
CustomizationScreen:"AntRef",
FalseSignal:"AntRef",
ForceSetTrajectory:"AntRef",
GroundAngleFromNormal:"AntRef",
GroundAngleX:"AntRef",
GroundAngleZ:"AntRef",
GroundDistance:"AntRef",
GroundNormal:"AntRef",
GroundSupported:"AntRef",
InAir:"AntRef",
InputBackward:"AntRef",
InputForward:"AntRef",
InputLeft:"AntRef",
InputRight:"AntRef",
IsClientAnimatable:"AntRef",
IsEnemy:"AntRef",
Jump:"AntRef",
LeanLeftRight:"AntRef",
LockArmsToCameraWeight:"AntRef",
Minimal3pServer:"AntRef",
Parachute:"AntRef",
Prone:"AntRef",
Skydive:"AntRef",
Sprint:"AntRef",
Swim:"AntRef",
VerticalImpact:"AntRef"
};

var PhysicsDrivenAnimationEntityData = {
AnimationEntitySpacePriority:"int",
Binding:"PhysicsDrivenAnimationEntityBinding",
Realm:"fb.Realm"
};

var PhysicsEntityData = {
AngularVelocityDamping:"float",
Asset:"CtrRef",
Constraints:"List<CtrRef>",
EncapsulatePartsInLists:"bool",
FloatPhysics:"CtrRef",
Friction:"float",
InertiaModifier:"Vec3",
LinearVelocityDamping:"float",
Mass:"float",
MovableParts:"bool",
Proximity:"CtrRef",
Restitution:"float",
RigidBodies:"List<CtrRef>",
ScaledAssets:"List<CtrRef>"
};

var PhysicsEntry = {
Azimuth:"AudioGraphNodePort",
Distance:"AudioGraphNodePort",
ElevationAngle:"AudioGraphNodePort",
Output:"CtrRef"
};

var PhysicsHingeConstraintData = {
AngularFriction:"float",
HasLimits:"bool",
MaxAngle:"float",
MinAngle:"float"
};

var PhysicsMaterialRelationPropertyData = null;

var PhysicsMaterialsRasterData = null;

var PhysicsNodeData = {
Azimuth:"AudioGraphNodePort",
Distance:"AudioGraphNodePort",
ElevationAngle:"AudioGraphNodePort",
Entries:"List<CtrRef>",
RelativeVelocity:"AudioGraphNodePort",
Velocity:"AudioGraphNodePort"
};

var PhysicsPartInfo = {
HealthStateIndex:"uint",
PartComponentIndex:"uint"
};

var PhysicsPropertyRelationPropertyData = null;

var PhysicsRenderSettings = {
CollisionSpawnDebug:"bool",
RenderActiveConstraintCount:"bool",
RenderBroadphaseHandles:"bool",
RenderCenterOfMass:"bool",
RenderCharacterCollision:"bool",
RenderClient:"bool",
RenderCollidesWithTerrain:"bool",
RenderCollisionSpheres:"bool",
RenderConstraintCount:"bool",
RenderConstraints:"bool",
RenderDestructionConnections:"bool",
RenderDetail:"bool",
RenderEffectWorld:"bool",
RenderEntityStats:"bool",
RenderGroup:"bool",
RenderInertia:"bool",
RenderLinearVelocity:"bool",
RenderMemoryUsed:"bool",
RenderOnlyBoundingBoxes:"bool",
RenderOnlyContactConstraints:"bool",
RenderPartBoundingBoxes:"bool",
RenderPhantoms:"bool",
RenderRagdoll:"bool",
RenderServer:"bool",
RenderSimulationIslands:"bool",
RenderSolidGeometry:"bool",
RenderSpecificPart:"int",
RenderStatic:"bool",
RenderUngrouped:"bool",
RenderWater:"bool",
RenderWorldStats:"bool",
ShowContactsInWorldStats:"bool",
ShowFixedObjectsInWorldStats:"bool",
ShowInactiveContactsInWorldStats:"bool",
ShowPhantomsInWorldStats:"bool",
UseShapeCache:"bool",
ViewDistance:"float"
};

var PhysicsSettings = {
ClientEffectWorldThreadCount:"uint",
ClientWorldThreadCount:"uint",
CollideJobCount:"uint",
Enable:"bool",
EnableAIRigidBody:"bool",
EnableASyncWheelRaycasts:"bool",
EnableClientWheelRaycasts:"bool",
EnableFollowWheelRaycasts:"bool",
EnableJobs:"bool",
ForceSingleStepCharacterInSP:"bool",
ForestEnable:"bool",
IntegrateJobCount:"uint",
RemoveFromWorldOnCollisionOverflow:"bool",
RemoveRagdollWhenWoken:"bool",
ServerWorldThreadCount:"uint",
SingleStepCharacter:"bool",
SuppressDebrisSpawnUntilReady:"bool",
UseDelayedWakeUpClient:"bool",
UseDelayedWakeUpServer:"bool"
};

var PickupEntityAsset = {
Data:"CtrRef"
};

var PickupEntityData = {
AllowPickup:"bool",
ContentIsStatic:"bool",
DisplayInMiniMap:"bool",
ForceWeaponSlotSelection:"bool",
HasAutomaticAmmoPickup:"bool",
IgnoreNullWeaponSlots:"bool",
InteractionRadius:"float",
MaxRandomClipAmmoPercent:"int",
MaxRandomSpareAmmoPercent:"int",
Mesh:"CtrRef",
MinRandomClipAmmoPercent:"int",
MinRandomSpareAmmoPercent:"int",
PhysicsBlueprint:"CtrRef",
PositionIsStatic:"bool",
PreferredWeaponSlot:"uint",
RandomizeAmmoOnDropForPlayer:"PickupPlayerEnum",
RemoveWeaponOnDrop:"bool",
ReplaceAllContent:"bool",
SendPlayerInEventOnPickup:"bool",
TimeToLive:"float",
UnspawnOnAmmoPickup:"bool",
UnspawnOnPickup:"bool",
UseWeaponMesh:"bool"
};

var PickupSettingsData = {
MeshRenderOffset:"Vec3",
MeshRenderRotation:"Vec3"
};

var PitchModifier = {
Offset:"Vec3",
PitchAngle:"float",
PitchVal:"float"
};

var PlanarReflectionComponentData = {
Enable:"bool",
GroundHeight:"float",
HorizontalBlurFilter:"BlurFilter",
HorizontalDeviation:"float",
SkyRenderEnable:"bool",
VerticalBlurFilter:"BlurFilter",
VerticalDeviation:"float"
};

var PlatformSplitterEntityData = {
Realm:"fb.Realm",
RunOnce:"bool"
};

var PlayerCameraEntityData = {
ReleaseControlIfTargetLost:"bool",
ShouldTargetControllable:"bool",
ShouldTargetExtraPlayerInDoublePlayerEvent:"bool",
ShouldTargetVehicleDriverEntry:"bool",
SoldierCameraIndex:"uint",
SoldierTargetMode:"TargetMode",
VehicleCameraIndex:"uint",
VehicleTargetMode:"TargetMode"
};

var PlayerData = {
InputConceptDefinition:"CtrRef",
InputMapping:"CtrRef",
PlayerView:"CtrRef"
};

var PlayerEntryComponentData = {
AnimationAccelerationMultiplier:"Vec3",
AntEntryEnumeration:"CtrRef",
AntEntryId:"AntEntryIdEnum",
AntEntryID:"string",
ShieldedTransitionExitTime:"float"
};

var PlayerFilterEntityData = {
ForwardToSpectators:"bool",
InvertFilter:"bool",
Realm:"fb.Realm"
};

var PlayerInputTriggerEntityData = {
AccumulatedValueAtStart:"float",
EnabledFromStart:"bool",
EntryInputActions:"EntryInputActionEnum",
Realm:"fb.Realm",
SendTriggerEvents:"bool",
TrailingValueAtStart:"float",
ValueModifier:"float"
};

var PlayerInteractionViewData = null;

var PlayerLookAtEntityData = {
TargetTransform:"LinearTransform"
};

var PlayerOrderTrackerData = {
AttackIcon:"UIHudIcon",
DefendIcon:"UIHudIcon",
MoveToIcon:"UIHudIcon"
};

var PlayerScore = {
Deaths:"uint",
GlobalScoreOriginal:"int",
GlobalScoreUpdated:"int",
GunMasterLevel:"uint",
Kills:"uint",
Rank:"int",
Score:"int",
ScoreMultiplier:"uint",
Time:"float"
};

var PlayerState = {
OnlineId:"ulong"
};

var PlayerTakeOverTriggerEntityData = {
TeamId:"fb.TeamId",
TimeToLoseControl:"float"
};

var PlayerTypeProfile = {
Awards:"CtrRef",
DogTags:"CtrRef",
EloParams:"EloParameters",
OrderedUnlockNames:"List<string>",
RankParams:"CtrRef",
Scoring:"CtrRef",
SpamSettings:"CtrRef",
StaticUnlocks:"CtrRef",
Values:"CtrRef"
};

var PlayerViewData = {
SubViews:"List<CtrRef>"
};

var PlayFromHereAsset = {
AnimatedSkeletonDatabase:"CtrRef",
AntProject:"CtrRef",
Soldier:"CtrRef"
};

var PlayVideoEntityData = {
AllowSkip:"bool",
KeepBlackScreen:"bool",
Movie:"CtrRef"
};

var PointEnvelope = {
Points:"List<PointEnvelopePoint>"
};

var PointEnvelopePoint = {
X:"float",
Y:"float"
};

var PointLightEntityData = {
TranslucencyAmbient:"float",
TranslucencyDistortion:"float",
TranslucencyPower:"uint",
TranslucencyScale:"float",
Width:"float"
};

var PointSystemParamsAsset = {
DnfTimeout:"float",
FreefallHeight:"float",
KillStreakX:"uint",
MultiKillTimeLimit:"float",
NemesisKillX:"uint"
};

var PointTargetData = null;

var PoissonRadialBlurData = {
BlendFactor:"float",
PoissonDiscScale:"Vec2",
RadialExponent:"float",
RadialScale:"float"
};

var PolynomialColorInterpData = {
Coefficients:"Vec4",
Color0:"Vec3",
Color1:"Vec3"
};

var PolynomialData = {
Coefficients:"Vec4",
MaxClamp:"float",
MinClamp:"float",
ScaleValue:"float"
};

var PolynomialOperatorData = {
FirstOperand:"PolynomialTempData",
MaxClampResult:"float",
MinClampResult:"float",
Operation:"PolynomialOperation",
SecondOperand:"PolynomialTempData"
};

var PolynomialTempData = {
Coefficients:"Vec4",
MaxClamp:"float",
MinClamp:"float",
ScaleValue:"float"
};

var PoseConstraintsData = {
CrouchPose:"bool",
PronePose:"bool",
StandPose:"bool"
};

var PoseTransitionTime = {
ToPose:"CharacterPoseType",
TransitionTime:"float"
};

var PositionEvaluationConstantData = {
LeaderRandomPositionsRadius:"float",
OwnRandomPositionsRadius:"float"
};

var PowerToolWeaponData = {
DamageSound:"CtrRef",
PlayFireEffectOnRepairOnly:"bool",
RepairCompletedSound:"CtrRef",
RepairMaterialPair:"CtrRef",
RepairSound:"CtrRef"
};

var PrecomputeCache = {
CachedDataEnable:"bool",
Guid:"GUID",
Key:"string"
};

var PredestructionEntityData = {
Radius:"float"
};

var PrefabBlueprint = {
Objects:"List<CtrRef>"
};

var PreRoundEntityData = {
RoundMaxPlayerCount:"int",
RoundMinPlayerCount:"int",
RoundRestartCountdown:"uint"
};

var PresenceAchievementServiceData = null;

var PresenceBackendData = {
Requests:"List<PresenceRequest>",
PresenceBackendData: "readonly",
PresenceRequest: "uint"
};

var PresenceBlobServiceData = null;

var PresenceCalendarServiceData = null;

var PresenceCommerceServiceData = null;

var PresenceCommServiceData = null;

var PresenceEntitlementServiceData = null;

var PresenceFriendsServiceData = null;

var PresenceGameConfigurationServiceData = {
ConfigUrl:"OnlineEnvironmentConsoleUrl"
};

var PresenceLeaderboardServiceData = null;

var PresenceMatchFeedServiceData = null;

var PresenceNewsTickerServiceData = null;

var PresencePlaygroupServiceData = null;

var PresenceRspServiceData = null;

var PresenceServerBrowserServiceData = {
FilterCriterias:"MatchmakingCriteria",
ListCapacity:"uint"
};

var PresenceServiceData = null;

var PresenceStatisticsServiceData = null;

var PresenceUserIdServiceData = null;

var PresenceWebFeedServiceData = null;

var PresenceXPromoServiceData = null;

var PresetTypeConfig = {
DescSid:"string",
Key:"string",
LockedSettings:"List<LockedSettingConfig>",
NameSid:"string",
Predefined:"bool",
PresetId:"int"
};

var PrintDebugTextEntityData = {
Enabled:"bool",
Realm:"fb.Realm",
Text:"string",
TextColor:"Vec3"
};

var ProceduralAwarenessAntRefs = {
ProceduralAwarenessActive:"AntRef",
ProceduralAwarenessData:"AntRef",
ProceduralAwarenessHumanIKActive:"AntRef"
};

var ProcessorData = {
DefaultValues:"Vec4",
Enable:"bool",
EvaluatorInput:"EmittableField",
NextProcessor:"CtrRef",
Pre:"CtrRef"
};

var ProfileEntityData = {
ProfileName:"string",
Realm:"fb.Realm"
};

var ProfileOptionData = {
Category:"ProfileOptionsType",
UniqueId:"string"
};

var ProfileOptionDataBinary = {
MaxLength:"int"
};

var ProfileOptionDataBool = {
Value:"bool"
};

var ProfileOptionDataEnum = {
Items:"List<ProfileOptionDataEnumItem>"
};

var ProfileOptionDataEnumItem = {
Default:"bool",
DisplayName:"string"
};

var ProfileOptionDataFloat = {
Max:"float",
Min:"float",
Step:"float",
Value:"float"
};

var ProfileOptionDataInt = {
Max:"int",
Min:"int",
Step:"int",
Value:"int"
};

var ProfileOptionDataString = {
MaxLength:"int",
Value:"string"
};

var ProfileOptionsAsset = {
AutoSaveOnQuit:"bool",
ContentName:"string",
FileName:"string",
FileSize:"uint",
Options:"List<CtrRef>"
};

var ProjectileBlueprint = null;

var ProjectileEntityData = {
AmmunitionType:"string",
DetonateOnTimeout:"bool",
Explosion:"CtrRef",
HitReactionWeaponType:"AntHitReactionWeaponType",
InitialSpeed:"float",
InitMeshHideTime:"float",
MaterialPair:"CtrRef",
MaxCount:"uint",
ServerProjectileDisabled:"bool",
SuppressionData:"CtrRef",
SuppressOwnerVehicleDamage:"bool",
TimeToLive:"float",
VisualConvergeDistance:"float"
};

var PropellerEngineConfigData = {
AttackAngleMod:"float",
BankingLimit:"float",
BankingStrength:"float",
CollectiveBrakeInputScale:"float",
CollectiveInputIdle:"float",
CollectiveThrottleInputScale:"float",
CyclicInputScalePitch:"float",
CyclicInputScaleRoll:"float",
CyclicPitchLiftMod:"float",
CyclicPitchStrafeBrakeMod:"float",
CyclicPitchStrafeMod:"float",
CyclicRollLiftMod:"float",
CyclicRollStrafeMod:"float",
DefaultAngleOfAttack:"float",
DirectionVectorIndex:"uint",
EnableNewHelicopter:"bool",
ForceMagnitudeInputType:"fb.ForceMagnitudeInputType",
ForceMagnitudeMultiplier:"float",
GravityMod:"float",
HorisontalForceOffset:"Vec3",
HorisontalMinEffectMod:"float",
HorisontalMinEffectVelocity:"float",
LiftForceDampingConstant:"float",
LiftForceSpringConstant:"float",
PitchFromVel:"float",
PitchLimit:"float",
PitchStrength:"float",
PitchUpWhenBankLimit:"float",
PitchUpWhenBankStrength:"float",
PropellerType:"fb.PropellerType",
RollStrength:"float",
RotorConfig:"CtrRef",
SPAllowed:"bool",
SPDefault:"bool",
SPForwardStrength:"float",
SPSidewaysStrength:"float",
SPVerticalStrength:"float",
StabilizerMod:"float",
VelocityFromPitch:"float"
};

var PropertyCastEntityData = {
BoolValue:"bool",
FloatValue:"float",
IntValue:"int",
Realm:"fb.Realm"
};

var PropertyConnection = {
Source:"CtrRef",
SourceFieldId:"int",
Target:"CtrRef",
TargetFieldId:"int"
};

var PropertyDebugEntityData = {
BoolValue:"bool",
DefaultVisible:"bool",
FloatValue:"float",
IntValue:"int",
Multiline:"bool",
Realm:"fb.Realm",
ScreenPosition:"Vec2",
StringValue:"string",
TextColor:"Vec3",
TextScale:"float",
TransformValue:"LinearTransform",
ValuePrefix:"string",
Vec2Value:"Vec2",
Vec3Value:"Vec3"
};

var PropertyGateEntityData = {
BoolIn:"bool",
Default:"bool",
FloatIn:"float",
IntIn:"int",
Realm:"fb.Realm",
TransformIn:"LinearTransform",
Vec3In:"Vec3",
Vec4In:"Vec4"
};

var PropertyRecordingData = {
Id:"int"
};

var PropertyTrackData = {
Id:"int",
Times:"List<int>"
};

var ProximityData = {
ProximityType:"ProximityObjectType"
};

var Ps3AgeLevels = {
AgeLevel10:"int",
AgeLevel7:"int",
AgeLevel8:"int",
AgeLevel9:"int"
};

var Ps3ParentalLockAgeSettings = {
AgeLevels:"Ps3AgeLevels",
CountryOverrides:"CtrRef",
Region:"string"
};

var Ps3ParentalLockAgeSettingsForCountry = {
AgeLevels:"Ps3AgeLevels",
CountryCode:"string"
};

var Ps3ParentalLockAgeSettingsOverrides = {
Overrides:"List<Ps3ParentalLockAgeSettingsForCountry>"
};

var Ps3PresenceBackendData = {
CommunicationId:"string",
CommunicationSignature:"string",
ParentalLockAgeSettings:"List<Ps3ParentalLockAgeSettings>",
SkuSettings:"List<Ps3SkuSettings>"
};

var Ps3SkuSettings = {
GrantsOnlinePass:"bool",
SpId:"string",
TitleId:"string"
};

var PS3StoreImageHD1080 = {
Identifier:"string",
ImagePath:"string"
};

var PS3StoreImageSD = {
Identifier:"string",
ImagePath:"string"
};

var QueryGetNode = {
DataSource:"UIDataSourceInfo",
In:"CtrRef",
Out:"CtrRef"
};

var RadarSweepComponentData = {
ControllableSpeedThreshold:"float",
ControllableSweepInterval:"float",
ControllableSweepRadius:"float",
MineSweepInterval:"float",
MineSweepRadius:"float",
SweepForControllables:"bool",
SweepForMines:"bool"
};

var RadioAltitudeData = {
CollisionMethod:"CollisionMethodEnum",
Range:"float",
UpdateFrequency:"float"
};

var RadioComponentData = {
SoundEffect:"CtrRef"
};

var RadiosityEntityData = null;

var RadiosityMaterial = {
Color:"Vec3",
Emissive:"bool",
Name:"string"
};

var RagdollAsset = {
MaterialPair:"CtrRef",
UseServerRagdoll:"bool"
};

var RagdollBinding = {
RagdollActiveTime:"AntRef",
RagdollBlend:"AntRef",
RagdollForceBlendDisabled:"AntRef",
RagdollFullyBlendedIn:"AntRef",
RagdollOnBack:"AntRef"
};

var RagdollComponentData = {
Binding:"RagdollBinding",
LeftLegBoneName:"string",
RagdollAsset:"CtrRef",
RightLegBoneName:"string",
SkeletonAsset:"CtrRef",
SkeletonCollisionData:"CtrRef"
};

var RandomDelayEntityData = {
AutoStart:"bool",
MaxDelay:"float",
MinDelay:"float",
Realm:"fb.Realm",
RunOnce:"bool"
};

var RandomEvaluatorData = {
Max:"float",
Min:"float"
};

var RandomEventEntityData = {
AutoStart:"bool",
Probability:"int",
RandomizeFirstOnly:"bool",
Realm:"fb.Realm"
};

var RandomFloatEntityData = {
Max:"float",
Min:"float",
Realm:"fb.Realm"
};

var RandomMultiEventEntityData = {
DisableOutputOnTrigger:"bool",
RandomEventWeight:"List<float>",
Realm:"fb.Realm",
ResetOutputsWhenAllHasTriggered:"bool",
UniformDistribution:"bool"
};

var RandomWalkOrderEntityData = {
CombatForbidden:"bool"
};

var RandomXYZEvaluatorData = {
MaxX:"float",
MaxY:"float",
MaxZ:"float",
MinX:"float",
MinY:"float",
MinZ:"float"
};

var RankLevelData = {
IconName:"string",
ImageName:"string",
PointsNeeded:"uint",
RankName:"string",
RankNumber:"int",
SoundName:"string",
UnlockInfos:"List<BasicUnlockInfo>"
};

var RankParamsAsset = {
Ranks:"List<CtrRef>"
};

var RasterCoverageData = null;

var RasterQuadtreeData = null;

var RasterQuadtreeNodeData = null;

var RasterTreeAsset = null;

var RawFileAsset = null;

var RawFileDataAsset = {
RawData:"List<byte>",
Size:"uint"
};

var RawFileImportActionParams = {
SourceFile:"string"
};

var RawFileResourceAsset = null;

var ReadinessLevelCharacteristics = {
MaxReactionTime:"float",
MinReactionTime:"float",
ReductionTime:"float"
};

var ReadinessLevels = {
Combat:"ReadinessLevelCharacteristics",
Patrol:"ReadinessLevelCharacteristics",
Ready:"ReadinessLevelCharacteristics"
};

var ReceivedAwardSurveyEvent = {
AwardName:"string",
SurveyMetricLink:"GUID"
};

var ReceiveEntry = {
Out:"AudioGraphNodePort",
Parameter:"float",
SavedValue:"float",
Source:"CtrRef"
};

var ReceiveNodeData = {
Entries:"List<CtrRef>"
};

var RecoilData = {
MaxRecoilAngleX:"float",
MaxRecoilAngleY:"float",
MaxRecoilAngleZ:"float",
MaxRecoilFov:"float",
MinRecoilAngleX:"float",
MinRecoilAngleY:"float",
MinRecoilAngleZ:"float",
MinRecoilFov:"float",
RecoilFollowsDispersion:"bool"
};

var RecordedInputData = {
TrackData:"List<InputRecorderTrackData>"
};

var RectangularCoverageData = null;

var ReferenceObjectData = {
Blueprint:"CtrRef",
BlueprintTransform:"LinearTransform",
CastSunShadowEnable:"bool",
Excluded:"bool",
ObjectVariation:"CtrRef",
StreamRealm:"fb.StreamRealm"
};

var RefreshNode = {
DataSource:"UIDataSourceInfo",
In:"CtrRef",
Out:"CtrRef"
};

var RegistryContainer = {
AssetRegistry:"List<CtrRef>",
BlueprintRegistry:"List<CtrRef>",
EntityRegistry:"List<CtrRef>",
ReferenceObjectRegistry:"List<CtrRef>"
};

var RegularCameraViewData = {
AllowFieldOfViewScaling:"bool",
FieldOfView:"float",
FLIREnabled:"bool",
InputSuppression:"InputSuppressionData",
LockMeshToRenderView:"bool",
MaskMeshBlueprint:"CtrRef",
Mesh:"CtrRef",
MeshOffset:"Vec3",
ScreenExposureAreaScale:"float"
};

var RegularSocketObjectData = {
Mesh3pTransforms:"List<LinearTransform>",
Transform:"LinearTransform"
};

var RemoteEntryComponentData = null;

var RenderTextureAsset = null;

var RenderVolumeEntityData = {
Enabled:"bool",
Shader:"SurfaceShaderInstanceDataStruct",
TransformType:"RenderVolumeTransformType",
UserMasks:"Vec4"
};

var RepairToolWeaponData = {
RechargeSpeed:"float"
};

var ResourceManagerSettings = {
BundleProfilingEnable:"bool",
CasBundleDecompressBufferCount:"int",
CasBundleDecompressBufferSizeKb:"int",
CasBundleReadBufferSizeKb:"int",
SPUDecompressEnable:"bool"
};

var RGBRasterData = null;

var RibbonData = {
RibbonPoints:"List<RibbonPointData>"
};

var RibbonPointData = {
Left:"float",
Right:"float",
UserMaskLeft:"Vec4",
UserMaskRight:"Vec4"
};

var RichPresenceContext = {
DefaultValue:"CtrRef",
Index:"sbyte",
Name:"string",
Values:"List<CtrRef>"
};

var RichPresenceContextSetting = {
Context:"CtrRef",
Value:"CtrRef"
};

var RichPresenceContextValue = {
Index:"sbyte",
SID:"string"
};

var RichPresenceContextValueWithKey = {
Key:"string"
};

var RichPresenceData = {
Contexts:"List<CtrRef>",
DefaultMode:"CtrRef",
InactiveMode:"CtrRef",
PresenceModes:"List<CtrRef>",
Properties:"List<RichPresenceProperty>"
};

var RichPresencePresenceString = {
Index:"sbyte",
Interpolated:"bool",
SID:"string"
};

var RichPresenceProperty = {
Name:"string",
PropertyType:"RichPresencePropertyType"
};

var RigidBodyConeConstraintData = {
AngularFriction:"float",
HasLimits:"bool",
MaxAngle:"float",
MinAngle:"float"
};

var RigidBodyConstraintData = {
BreakThreshold:"float",
IsBreakable:"bool",
ParentBody:"CtrRef",
Transform:"LinearTransform"
};

var RigidBodyData = {
AngularVelocityDamping:"float",
CollisionLayer:"RigidBodyCollisionLayer",
Constraints:"List<CtrRef>",
FloatPhysics:"CtrRef",
Friction:"float",
InertiaModifier:"Vec3",
InteractionToolkitCollisionVolumeId:"uint",
LinearVelocityDamping:"float",
Mass:"float",
MotionType:"RigidBodyMotionType",
QualityType:"RigidBodyQualityType",
Restitution:"float",
RigidBodyType:"fb.RigidBodyType"
};

var RigidBodyHingeConstraintData = {
AngularFriction:"float",
HasLimits:"bool",
MaxAngle:"float",
MinAngle:"float"
};

var RigidMeshAsset = null;

var RigidMeshEntityData = {
Mesh:"CtrRef"
};

var RigidMeshSocketTransform = {
SocketObject:"CtrRef",
Transform:"LinearTransform"
};

var RiverData = null;

var RoadData = {
Shader2d:"CtrRef",
Shader3dZOnly:"CtrRef",
StickToTerrain:"bool",
UvTileFactor:"float"
};

var RotateToHitData = {
RotationSpeedFactor:"float"
};

var RotateVectorData = {
Angle:"float",
InputAffectsPhi:"bool",
RotateWithinPlane:"bool"
};

var RotationBodyData = {
AngularConstraintMax:"float",
AngularConstraintMin:"float",
AngularMomentumDamping:"float",
AngularMomentumDampingAcc:"float",
AngularMomentumDampingDeacc:"float",
AngularMomentumMultiplier:"float",
AngularMomentumThreshold:"float",
ExtendedConstraints:"CtrRef",
RotationAxis:"int",
UseAngularConstraint:"bool",
UseAngularMomentumDamping:"bool",
UseAngularMomentumThreshold:"bool",
UsePostSatisfyConstraints:"bool"
};

var RotorComponentData = {
BlowEffect:"CtrRef",
ChangeModelRpm:"float",
CriticalDamage:"bool",
CriticallyDamagedRotationForce:"float",
GroundEffectOnTerrainOnly:"bool",
HighRpmModel:"RotorModelData",
LowRpmModel:"RotorModelData",
OnlyTriggerBlowEffectInWater:"bool",
RotationAxis:"fb.RotationAxis",
RotationMultiplier:"float",
TriggerGroundEffectHeight:"float"
};

var RotorModelData = {
PartIndex:"uint",
RotationRpm:"float"
};

var RotorParameters = {
AdditionalGravityModifier:"float",
AngleOfAttack:"List<Vec2>",
CollectiveBrakeInputScale:"float",
CollectiveInputIdle:"float",
CollectiveThrottleInputScale:"float",
CyclicFadeOutOffset:"float",
CyclicInputScalePitch:"float",
CyclicInputScaleRoll:"float",
EnableHorisontalMinEffect:"bool",
HorisontalMinEffectMod:"float",
HorisontalMinEffectVelocity:"float",
HorizontalForceModifier:"float",
ReverseThrottle:"bool"
};

var RoundEvent = {
JuiceSessionId:"int",
LevelName:"string"
};

var RoundOverEntityData = {
Team:"TeamId"
};

var RoundOverEvent = {
TicketsLeft:"int",
WinningTeam:"int"
};

var RouteEntry = {
Amplitude:"AudioGraphNodePort",
Output:"AudioGraphNodePort",
Plugin:"SoundGraphPluginRef"
};

var RouteNodeData = {
In:"AudioGraphNodePort",
Routes:"List<CtrRef>"
};

var RumbleFiringData = {
HighRumble:"float",
LowRumble:"float",
RumbleDuration:"float"
};

var SamplerNodeData = {
Amplitude:"AudioGraphNodePort",
BasePitch:"float",
Buffer:"AudioGraphNodePort",
Buffered:"AudioGraphNodePort",
Delay:"AudioGraphNodePort",
EnableStep:"AudioGraphNodePort",
ExternalWave:"AudioGraphNodePort",
Finished:"AudioGraphNodePort",
Loop:"LoopType",
Offset:"AudioGraphNodePort",
Output:"AudioGraphNodePort",
Pitch:"AudioGraphNodePort",
Plugins:"List<SamplerPlugins>",
Position:"AudioGraphNodePort",
Release:"AudioGraphNodePort",
ShuffleSegments:"bool",
Step:"AudioGraphNodePort",
Trigger:"AudioGraphNodePort",
Variation:"AudioGraphNodePort",
Wave:"CtrRef"
};

var SamplerPlugins = {
Gain:"SoundGraphPluginRef",
Pause:"SoundGraphPluginRef",
Resample:"SoundGraphPluginRef",
SndPlayer:"SoundGraphPluginRef"
};

var SampleTextureData = {
ColorIntensityMax:"Vec3",
ColorIntensityMin:"Vec3",
GradientData:"List<Vec4>",
TextureDimensions:"Vec2",
TextureOriginU:"float",
TextureOriginV:"float"
};

var SaveEntityData = {
CheckForHumanPlayer:"bool",
LevelName:"string",
SaveFileName:"string",
SaveNameSID:"string",
SaveScreenTexture:"CtrRef"
};

var SaveGameLoadedEntityData = null;

var ScaleClampNodeData = {
In:"AudioGraphNodePort",
InMax:"AudioGraphNodePort",
InMin:"AudioGraphNodePort",
Out:"AudioGraphNodePort",
OutMax:"AudioGraphNodePort",
OutMin:"AudioGraphNodePort"
};

var ScenarioTaskData = {
ActorId:"int",
ConnectTransforms:"List<LinearTransform>",
EndPointWorldOffset:"Vec3",
LevelId:"int",
PartId:"int",
ScenarioId:"int",
StartPoint:"Vec3",
StartTimerDistance:"float",
StartTurnDistance:"float",
TriggerScenario:"bool",
TriggerScenarioDelay:"float",
UseClientPosition:"bool",
WorldAngle:"float"
};

var ScenarioWaypointData = {
ScenarioAntRef:"AntRef",
ScenarioTask:"ScenarioTaskData"
};

var SceneRecordingData = {
Data:"List<CtrRef>"
};

var ScopeFilterData = null;

var ScoreAggregate = {
TotalScore:"float"
};

var ScoringBucketData = {
AddToEntry:"bool",
BucketType:"ScoringBucketType",
ConnectedCategories:"List<CtrRef>",
DestinationBucket:"ScoringBucket",
GlobalScore:"bool",
Name:"string",
RoundScore:"bool",
TeamTotalBucket:"CtrRef",
Unlocks:"List<ScoringBucketUnlockData>"
};

var ScoringBucketUnlockData = {
PointsNeeded:"uint",
UnlockInfo:"BasicUnlockInfo"
};

var ScoringData = {
Buckets:"List<CtrRef>",
ScoringHandlers:"List<CtrRef>",
ScoringTypes:"List<CtrRef>"
};

var ScoringHandlerData = null;

var ScoringTypeData = {
AdditionalValueMultiplier:"float",
Bucket:"ScoringBucket",
DescriptionSid:"string",
Limit:"float",
Measuring:"StatEvent",
ParamX:"CtrRef",
ParamY:"CtrRef",
Score:"float",
ShowForTeam:"bool",
VisibilityType:"ScoringVisibilityType"
};

var ScreenEffectComponentData = {
Angle:"float",
FrameType:"ScreenEffectFrameType",
FrameWidth:"float",
InnerFrameOpacity:"float",
OuterFrameOpacity:"float",
Realm:"fb.Realm",
ScreenEffectParams:"Vec4",
Shader:"CtrRef"
};

var ScreenshotInfo = {
CropImage:"bool",
CropImageX1:"uint",
CropImageX2:"uint",
CropImageY1:"uint",
CropImageY2:"uint",
Name:"string",
ResizeOutputImage:"bool",
ResizeOutputImageHeight:"uint",
ResizeOutputImageWidth:"uint"
};

var ScriptEntityData = {
Code:"string",
Realm:"fb.Realm"
};

var SearchAndDestroyConstantData = {
DefaultSearchAndDestroyRadius:"float",
TimeToWaitMax:"float",
TimeToWaitMin:"float"
};

var SearchAndDestroyOrderEntityData = {
Aggressive:"bool",
FindTargetTime:"float",
TargetAreaFollowsTarget:"bool",
TargetPosKnowledge:"TargetPosKnowledgeType"
};

var SelectEventEntityData = {
Events:"List<string>",
Realm:"fb.Realm"
};

var SendEntry = {
In:"AudioGraphNodePort",
Target:"CtrRef"
};

var SendNodeData = {
Entries:"List<CtrRef>"
};

var SenseTerrainSphereData = null;

var SensingComponentData = {
Enabled:"bool",
Settings:"CtrRef",
SharedPlayerMemory:"bool",
Template:"CtrRef",
UseWeaponTransform:"bool"
};

var SensingLimits = {
HearingCutoff:"float",
HearingDistance:"float",
PeripheralMovementCutoff:"float",
PeripheralViewAngle:"float",
PeripheralViewDistance:"float",
ViewAngle:"float",
ViewDistance:"float"
};

var SensingManagerEntityData = {
SenseTerrainAreas:"List<SensingSphere>"
};

var SensingSettings = {
AttackerTrackTime:"double",
BackgroundLoudnessFactor:"float",
CharacterVisionBoxSettings:"VisionBoxSettings",
CloseExplosiveImpactDistance:"float",
CloseFireImpactDistance:"float",
CloseTrajectoryDistance:"float",
DefaultTemplate:"CtrRef",
ImpactSenseDistance:"float",
LineOfSightTestTime:"double",
LuckModifier:"float",
MaxRays:"int",
MaxSize:"float",
MaxSpeed:"float",
MaxVolume:"float",
MotionDistanceFactor:"float",
MotionPeripheralityFactor:"float",
MotionSizeFactor:"float",
MotionSpeedFactor:"float",
MovementModifier:"float",
SensingTimeSpan:"double",
SmokeSphereDuration:"float",
SmokeSphereRadius:"float",
SpawnOutOfLOSRadius:"float",
SpawnOutOfLOSRaycastDistance:"float",
SpawnOutOfLOSRaycastHeight:"float",
SpawnOutOfLOSTraceDistance:"float",
VehicleVisionBoxSettings:"VisionBoxSettings",
VolumeModifier:"float"
};

var SensingSphere = {
Position:"Vec3",
RadiusSqr:"float"
};

var SensingTemplateData = {
AwareForgetTime:"double",
CombatLimits:"SensingLimits",
DebugText:"string",
LostForgetTime:"double",
MaximumAlertDistance:"float",
MaximumMergeDistance:"float",
MaximumReadinessRaiseDistance:"float",
NoticeBullets:"bool",
ReadyLimits:"SensingLimits",
RelaxedLimits:"SensingLimits",
TimeUntilUnseenIsLost:"double",
UseSenseSharing:"bool"
};

var SensitivityAtVelocity = {
SteeringSensitivity:"float",
Velocity:"float"
};

var SequenceData = null;

var SequenceEntityData = {
AutoPlayFirstFrame:"bool",
AutoStart:"bool",
ClientUpdatePass:"UpdatePass",
CustomSequenceTracks:"List<CtrRef>",
Events:"List<SequenceEventData>",
ExternalTime:"float",
Looping:"bool",
PlayInReverse:"bool",
PropertyTracks:"List<CtrRef>",
Realm:"fb.Realm",
SequenceLength:"int",
SequenceStartTime:"int",
ServerUpdatePass:"UpdatePass"
};

var SequenceEventData = {
Event:"EventSpec",
Time:"int"
};

var SequenceGeneratorNodeData = {
Max:"AudioGraphNodePort",
Min:"AudioGraphNodePort",
Reset:"AudioGraphNodePort",
Step:"AudioGraphNodePort",
Trigger:"AudioGraphNodePort",
Value:"AudioGraphNodePort"
};

var ServerBackendAttributeMapping = {
Attribute:"ServerBackendAttribute",
DefaultValue:"string",
Setting:"string"
};

var ServerBackendData = {
Mappings:"List<ServerBackendAttributeMapping>"
};

var ServerInfoSetting = {
IsBool:"bool",
Key:"string",
Name:"string"
};

var ServerMetricsSettings = {
CompressTransactions:"bool",
DbxReportEnabled:"bool",
DevelopmentTelemetryEnabled:"bool",
Enabled:"bool",
JuiceTelemetryEnabled:"bool",
PerformanceProfileStateEnabled:"bool",
PerformanceTelemetryEnabled:"bool",
ReportName:"string",
TickTelemetryEnabled:"bool",
TransactionTelemetryEnabled:"bool"
};

var ServerPerformanceEvent = {
CPUAverage:"float",
CPUMemory:"float",
Received:"uint",
ReceivedAverage:"float",
Sent:"uint",
SentAverage:"float"
};

var ServerSettings = {
AdministrationEnabled:"bool",
AdministrationEventsEnabled:"bool",
AdministrationLogEnabled:"bool",
AdministrationPassword:"string",
AdministrationServerNameRestricted:"bool",
AdministrationTimeStampLogNames:"bool",
AILooksIntoCamera:"bool",
AllowIndestructibleParts:"bool",
AutoUnspawnBangers:"bool",
CorruptionChance:"float",
DeathmatchDebugInfo:"bool",
DebrisClusterEnabled:"bool",
DebugMenuClick:"string",
DedicatedServerCpu:"int",
DisableCutscenes:"bool",
DrawActivePhysicsObjects:"bool",
DropSpikeChance:"float",
DuplicationChance:"float",
EnableAnimationCulling:"bool",
FallBackToSquadSpawn:"bool",
ForcePlaylist:"bool",
HavokCaptureToFile:"bool",
HavokVisualDebugger:"bool",
HumanHealthMultiplier:"float",
IncomingRate:"uint",
IngameTimeout:"float",
InstancePath:"string",
IsAiEnabled:"bool",
IsDesertingAllowed:"bool",
IsDestructionEnabled:"bool",
IsInternetSimulationEnabled:"bool",
IsNetworkStatsEnabled:"bool",
IsPresenceEnabled:"bool",
IsRanked:"bool",
IsReconfigurable:"bool",
IsRenderDamageEvents:"bool",
IsSoldierAnimationEnabled:"bool",
IsSoldierDetailedCollisionEnabled:"bool",
IsStatsEnabled:"bool",
IsTreeDestructionEnabled:"bool",
JobEnable:"bool",
LoadingTimeout:"float",
LoadSavePoint:"bool",
MaxDropDuration:"float",
MaxLatency:"float",
MaxQueriesPerSecond:"uint",
MinDropDuration:"float",
MinLatency:"float",
OutgoingFrequency:"float",
OutgoingRate:"uint",
PacketDrops:"float",
PlayerCountNeededForMultiplayer:"uint",
Playlist:"string",
QueryProviderEnabled:"bool",
RegulatedAIThrottle:"bool",
RemoteAdministrationPort:"string",
RemoteControlPort:"uint",
ReorderingChance:"float",
RespawnOnDeathPosition:"bool",
RespawnTimeModifier:"float",
SaveGameVersion:"uint",
SavePoint:"string",
ScoringLogEnabled:"bool",
ServerName:"string",
ServerPassword:"string",
ShowTriggerDebugText:"bool",
ThreadedLoadingEnable:"bool",
ThreadingEnable:"bool",
TimeoutGame:"bool",
TimeoutTime:"float",
UnlockResolver:"bool",
VegetationEnabled:"bool",
VehicleSpawnAllowed:"bool",
VehicleSpawnDelayModifier:"float",
WaterPhysicsEnabled:"bool"
};

var SettingConfig = {
Default:"uint",
DescSid:"string",
Key:"string",
Max:"uint",
Min:"uint",
NameSid:"string",
Ranked:"bool"
};

var SettingEntityData = {
BoolSettingName:"string",
FloatSettingName:"string",
IntSettingName:"string",
Realm:"fb.Realm"
};

var SettingsBundleAsset = {
Settings:"List<CtrRef>"
};

var ShaderColorUnlockPartCollection = {
DefaultColorReference:"CtrRef",
UnlockParts:"List<CtrRef>"
};

var ShaderCustomizationUnlockPartCollection = {
MeshBlueprints:"List<CtrRef>",
MeshMaterials:"List<CustomizedMeshMaterialsData>",
ShaderNodeName:"string"
};

var ShaderDatabaseAsset = {
LevelName:"string"
};

var ShaderGraph = {
GammaCorrectionEnable:"bool",
MaxSubMaterialCount:"uint"
};

var ShaderParameterComponentData = {
ShaderParameterVectors:"List<ShaderParameterVector>"
};

var ShaderParameterVector = {
ParameterName:"string",
Value:"Vec4"
};

var ShaderParamsComponentData = {
ParameterName:"string",
Value:"Vec4"
};

var ShaderSystemSettings = {
AlphaBlendEnable:"bool",
BoneConstantOptimizationEnable:"bool",
ClipPlanesEnable:"bool",
DatabaseLoadingEnable:"bool",
DebugNonFiniteColor:"Vec3",
DepthEnable:"bool",
DepthTestEnable:"bool",
DepthWriteEnable:"bool",
DispatchDirectEnable:"bool",
DispatchExecuteEnable:"bool",
DispatchPrepareBlockEnable:"bool",
DispatchPrepareJobCount:"int",
DrawAdvancedStats:"bool",
DrawCallEnable:"bool",
DrawCallMultiplier:"uint",
DrawInlineBlocks:"bool",
DrawInstancedBlocks:"bool",
DrawNonInstancedBlocks:"bool",
DrawNonStreamedTextureBlocks:"bool",
DrawOpaque:"bool",
DrawOpaqueAlphaTest:"bool",
DrawOpaqueAlphaTestSimple:"bool",
DrawStats:"bool",
DrawStreamedTextureBlocks:"bool",
DrawTileClassifiedBlocks:"bool",
DrawTransparent:"bool",
DrawTransparentDecal:"bool",
DrawZOnly:"bool",
DxBatchedSamplerStatesEnable:"bool",
DxBatchedTexturesEnable:"bool",
DxDelayedShaderLoadingEnable:"bool",
DxDispatchJobBlocksPerCommandList:"uint",
DxDispatchJobCount:"int",
DxDispatchJobMinBlockCount:"uint",
DxFrameVertexBufferPoolSize:"uint",
DxInstancingBufferHandlingMethod:"uint",
DxMaxInstanceCount:"uint",
DxMaxInstructionCount:"uint",
DxMultisampleEnable:"bool",
DxParallelShaderLoadingEnable:"bool",
DxPsExternalConstantBufferSize:"uint",
DxPsFunctionConstantBufferSize:"uint",
DxSamplerStatesEnable:"bool",
DxStatesEnable:"bool",
DxTransparencySupersamplingEnable:"bool",
DxVsExternalConstantBufferSize:"uint",
DxVsFunctionConstantBufferSize:"uint",
FlushEnable:"bool",
ForceDoubleSided:"bool",
ForcePointFiltering:"bool",
FrameMemoryBufferSize:"uint",
GcmReplayMarkersEnable:"bool",
LogEnable:"bool",
MaxAnisotropy:"uint",
MipmapBias:"float",
OnDemandBuildingEnable:"bool",
OnDemandMonitoringEnable:"bool",
OnDemandPrimingEnable:"bool",
OverdrawMaxLayerCount:"uint",
PixBlockEventsEnable:"bool",
PixelConstantRedundancyCheckingEnable:"bool",
PixelConstantsEnable:"bool",
Ps3CmdBufClearEnable:"bool",
Ps3CmdBufVertexShaderInlineEnable:"bool",
Ps3DispatchBlocksPerJob:"uint",
Ps3DispatchFrameBlockEnable:"bool",
Ps3DispatchJobCount:"uint",
Ps3DispatchJobEnable:"bool",
Ps3DispatchJobPriority:"uint",
Ps3DispatchJobSpuCount:"uint",
Ps3DispatchOnlyJob:"int",
Ps3DispatchPrepareSpuJobEnable:"bool",
Ps3DispatchSetupSpuJobEnable:"bool",
Ps3DispatchSpuBufferLinkingEnable:"bool",
Ps3DispatchYieldGranularity:"float",
Ps3DrawBlockCullEnable:"bool",
Ps3DrawEdgeGeometryEnable:"bool",
Ps3DrawNonEdgeGeometryEnable:"bool",
Ps3FinishEnable:"bool",
Ps3FlushEnable:"bool",
Ps3GeometryDebugRenderEnable:"bool",
Ps3GeometryJobCount:"uint",
Ps3GeometryJobEnable:"bool",
Ps3GeometryJobPriority:"uint",
Ps3GeometryJobSpuCount:"uint",
Ps3GeometryJobWithoutDispatchJobEnable:"bool",
Ps3GeometryYieldGranularity:"float",
Ps3MaxMipmap:"uint",
Ps3MinMipmap:"uint",
Ps3PartitionClipPlaneCullEnable:"bool",
Ps3PartitionFrustumCullEnable:"bool",
Ps3PartitionVolumeCullEnable:"bool",
Ps3PixelShaderHashStoreEnable:"bool",
Ps3PixelShaderRedundancyCheckingEnable:"bool",
Ps3SCullEnable:"bool",
Ps3SpuClipPlaneRejectEnable:"bool",
Ps3SpuCullVolumesEnable:"bool",
Ps3SpuInstancingEnable:"bool",
Ps3SpuYieldingEnable:"bool",
Ps3TriangleBackfaceCullEnable:"bool",
Ps3TriangleCull1BoneSkinningEnable:"bool",
Ps3TriangleCull4BoneSkinningEnable:"bool",
Ps3TriangleCullDoubleSidedEnable:"bool",
Ps3TriangleCullEnable:"bool",
Ps3TriangleCullZPassEnable:"bool",
Ps3TriangleFrustumCullEnable:"bool",
Ps3TrianglePartCullEnable:"bool",
Ps3TxpDemotionEnable:"bool",
Ps3ZCullBehindLimit:"uint",
Ps3ZCullEnable:"bool",
Ps3ZCullInFrontLimit:"uint",
PseudoInstancingEnable:"bool",
ShaderPixScopeEnable:"bool",
SimplePixelShaderEnable:"bool",
SimpleTextureFilteringEnable:"bool",
SimpleTexturesEnable:"bool",
SimpleVertexShaderEnable:"bool",
SingleFrameBlockLogEnable:"bool",
SingleFrameLogEnable:"bool",
SingleFrameLogOverwrite:"bool",
SinglePrimitiveEnable:"bool",
SortBlocksEnable:"bool",
StatesEnable:"bool",
StencilEnable:"bool",
TextureGammaCorrectionEnable:"bool",
TileClassificationEnable:"bool",
VertexConstantRedundancyCheckingEnable:"bool",
VertexConstantsEnable:"bool",
XenonDispatchBlockOnCmdBufEnable:"bool",
XenonDispatchBlocksPerJob:"uint",
XenonDispatchCmdBufferSegmentSize:"uint",
XenonDispatchCmdBufferSize:"uint",
XenonDispatchJobCount:"uint",
XenonDispatchJobEnable:"bool",
XenonDispatchMinJobBlockCount:"uint",
XenonDispatchOnlyJob:"int",
XenonHiZEnable:"bool",
XenonTrilinearThreshold:"uint",
ZeroViewportEnable:"bool",
ZOnlyMaxAnisotropy:"uint"
};

var ShaderTextureUnlockPartCollection = {
DefaultTextureReference:"CtrRef",
UnlockParts:"List<CtrRef>"
};

var ShootAtFromCoverData = {
CycleTargets:"bool",
PreferAlternativeWeapon:"bool",
RandomTargetOrder:"bool",
ShootType:"fb.ShootType",
StrengthType:"fb.StrengthType"
};

var ShootOrderEntityData = {
CompleteWhenHumanIsSensed:"bool",
CycleTargets:"bool",
Pose:"PoseType",
PreferAlternativeWeapon:"bool",
RandomTargetOrder:"bool",
ShootType:"fb.ShootType",
StrengthType:"fb.StrengthType"
};

var ShotConfigData = {
ActiveForceSpawnToCamera:"bool",
AlternateProjectiles:"List<UnlockableProjectile>",
ForceSpawnToCamera:"bool",
InheritWeaponSpeedAmount:"float",
InitialDirection:"Vec3",
InitialPosition:"Vec3",
InitialSpeed:"Vec3",
MuzzleExplosion:"CtrRef",
NumberOfBulletsPerBurst:"uint",
NumberOfBulletsPerShell:"uint",
NumberOfBulletsPerShot:"uint",
Projectile:"CtrRef",
ProjectileData:"CtrRef",
RelativeTargetAiming:"bool",
SecondaryProjectile:"CtrRef",
SecondaryProjectileData:"CtrRef",
SpawnDelay:"float",
SpawnVisualAtWeaponBone:"bool"
};

var SimpleAnimationControlBinding = {
LocoTarget:"AntRef"
};

var SimpleAnimationControlComponentData = {
AnimationEntitySpacePriority:"int",
Binding:"SimpleAnimationControlBinding",
Run:"bool"
};

var SimpleMovementActionBaseData = {
RunTimeInfo:"SimpleMovementActionTimeData",
StartTimeInfo:"SimpleMovementActionTimeData"
};

var SimpleMovementActionData = {
Action:"EntryInputActionEnum",
Level:"float",
Respawn:"bool",
SpecialAnimationIndex:"int",
Teleport:"bool"
};

var SimpleMovementActionTimeData = {
MaxVariation:"float",
Time:"float"
};

var SimplePropertyTrackData = {
InterpolationType:"fb.InterpolationType"
};

var SimpleTransformNodeData = {
AngleUnit:"fb.AngleUnit",
Operation:"SimpleTransformOperation",
X:"AudioGraphNodePort",
Y:"AudioGraphNodePort",
Z:"AudioGraphNodePort"
};

var SimpleValueSelectorNodeData = {
Index:"AudioGraphNodePort",
Out:"AudioGraphNodePort",
OutValues:"List<float>"
};

var SingleTerrainLayerData = null;

var SkeletonAsset = {
BoneNames:"List<string>",
CameraBoneName:"string",
HeadBoneName:"string",
Hierarchy:"List<int>",
HipBoneName:"string",
LocalPose:"List<LinearTransform>",
ModelPose:"List<LinearTransform>",
WeaponBoneName:"string"
};

var SkeletonCollisionData = {
BoneCollisionData:"List<fb.BoneCollisionData>",
SkeletonAsset:"CtrRef"
};

var SkinnedMeshAsset = {
BoundingBoxPositionOffset:"Vec3",
BoundingBoxSizeOffset:"Vec3"
};

var SkinnedSocketObjectData = {
FaceposerLibraryIndex:"int"
};

var SkyCloudLayer = {
AlphaMul:"float",
Altitude:"float",
AmbientLightIntensity:"float",
Color:"Vec3",
Rotation:"float",
Speed:"float",
SunLightIntensity:"float",
SunLightPower:"float",
Texture:"CtrRef",
TileFactor:"float"
};

var SkyComponentData = {
BrightnessScale:"float",
CloudLayer1AlphaMul:"float",
CloudLayer1Altitude:"float",
CloudLayer1AmbientLightIntensity:"float",
CloudLayer1Color:"Vec3",
CloudLayer1Rotation:"float",
CloudLayer1Speed:"float",
CloudLayer1SunLightIntensity:"float",
CloudLayer1SunLightPower:"float",
CloudLayer1Texture:"CtrRef",
CloudLayer1TileFactor:"float",
CloudLayer2AlphaMul:"float",
CloudLayer2Altitude:"float",
CloudLayer2AmbientLightIntensity:"float",
CloudLayer2Color:"Vec3",
CloudLayer2Rotation:"float",
CloudLayer2Speed:"float",
CloudLayer2SunLightIntensity:"float",
CloudLayer2SunLightPower:"float",
CloudLayer2Texture:"CtrRef",
CloudLayer2TileFactor:"float",
CloudLayerMaskTexture:"CtrRef",
CloudLayerSunColor:"Vec3",
CustomEnvmapAmbient:"float",
CustomEnvmapScale:"float",
CustomEnvmapTexture:"CtrRef",
Enable:"bool",
PanoramicAlphaTexture:"CtrRef",
PanoramicRotation:"float",
PanoramicTexture:"CtrRef",
PanoramicTileFactor:"float",
PanoramicUVMaxX:"float",
PanoramicUVMaxY:"float",
PanoramicUVMinX:"float",
PanoramicUVMinY:"float",
Realm:"fb.Realm",
SkyEnvmap8BitTexScale:"float",
SkyGradientTexture:"CtrRef",
SkyVisibilityExponent:"float",
StaticEnvmapScale:"float",
StaticEnvmapTexture:"CtrRef",
SunScale:"float",
SunSize:"float"
};

var SkyEffectState = {
CloudLayer1:"SkyCloudLayer",
CloudLayer2:"SkyCloudLayer",
CloudLayerMaskTexture:"CtrRef",
CloudLayerSunColor:"Vec3",
Enable:"bool",
PanoramicAlphaTexture:"CtrRef",
PanoramicRotation:"float",
PanoramicTexture:"CtrRef",
PanoramicTileFactor:"float",
PanoramicUVMaxX:"float",
PanoramicUVMaxY:"float",
PanoramicUVMinX:"float",
PanoramicUVMinY:"float",
SkyGradientScale:"float",
SkyGradientTexture:"CtrRef",
StaticEnvmapTexture:"CtrRef",
SunScale:"float",
SunSize:"float",
WindDirection:"float"
};

var SlidingStateData = {
GravityScale:"float",
HorizontalInputScale:"float"
};

var SlowMotionEntityData = {
Realm:"fb.Realm",
ScaleDownTransitionTime:"float",
ScaleUpTransitionTime:"float",
TimeScale:"float"
};

var SmokeJammingData = {
EnableSmokeJamming:"bool",
JammingPositionIsLocationDependent:"bool",
JammingTime:"float",
MaxRadius:"float",
MinRadius:"float",
ReportJammedBasedOnStartPosition:"bool",
TargetUpdateTime:"float"
};

var SniperLensScopeFilterData = {
BlurCenter:"Vec2",
BlurScale:"float",
ChromaticAberrationColor1:"Vec3",
ChromaticAberrationColor2:"Vec3",
ChromaticAberrationDisplacement1:"Vec2",
ChromaticAberrationDisplacement2:"Vec2",
ChromaticAberrationStrengths:"Vec2",
ColorTintData:"fb.ColorTintData",
RadialBlendDistanceCoefficients:"Vec2"
};

var SocketData = {
AvailableObjects:"List<CtrRef>",
BoneId:"int",
BoneName:"string",
BoneRigidTransform:"LinearTransform",
DefaultEnableSocketEntities:"bool",
Excluded:"bool",
ForceSocketEntitiesEnabled:"bool",
GearSlot:"fb.GearSlot",
HideByLightToggle:"bool",
HideByZoomTransition:"bool",
SocketType:"fb.SocketType",
Transform:"LinearTransform",
UnlockAsset:"CtrRef",
UsesDefaultObject:"bool"
};

var SocketObjectData = {
Asset1pGuid:"GUID",
Asset1pZoomGuid:"GUID",
Asset3pGuid:"GUID",
CustomizedMaterials:"List<CtrRef>",
Variation1pGuids:"List<GUID>",
Variation1pZoomGuids:"List<GUID>",
Variation3pGuids:"List<GUID>"
};

var SocketObjectDataBase = null;

var SoldierAimAssistData = {
AccelerationDamping:"float",
AccelerationInputThreshold:"float",
AccelerationMultiplier:"float",
AccelerationTimeThreshold:"float",
AttractDistanceFallOff:"List<float>",
AttractOwnRequiredMovementForMaximumAttract:"float",
AttractOwnSpeedInfluence:"float",
AttractPitchStrength:"float",
AttractSoftZone:"float",
AttractStartInputThreshold:"float",
AttractTargetSpeedInfluence:"float",
AttractUserInputMultiplier:"float",
AttractYawStrength:"float",
AttractZoomingMultiplier:"float",
AttractZoomingPostTime:"float",
EyePosOffset:"Vec3",
InputPolynomial:"List<float>",
MaxAcceleration:"Vec2",
PitchSpeedStrength:"float",
SnapBoxScale:"Vec3",
SnapDistanceScale:"Vec3",
SquaredAcceleration:"float",
StickyBoxScale:"Vec3",
StickyDistanceScale:"Vec3",
UsePitchAcceleration:"bool",
UseYawAcceleration:"bool",
YawSpeedStrength:"float",
ZoomedInputPolynomial:"List<float>"
};

var SoldierAimingConstraintsData = {
SwimmingConstraints:"AimingConstraintsData"
};

var SoldierAimingSimulationData = {
AimAssist:"CtrRef",
AimingRange:"float",
CrouchPose:"AimingPoseData",
FovDelayTime:"float",
FovTransitionTime:"float",
LockAimToTargetSpeed:"float",
Modifiers:"List<CtrRef>",
PronePose:"AimingPoseData",
ReturnToZoomAfterReload:"bool",
StandPose:"AimingPoseData",
ZoomLevels:"List<CtrRef>",
ZoomTransitionTime:"float",
ZoomTransitionTimeArray:"List<ZoomLevelSpecificTransitionTime>"
};

var SoldierAnimatedCameraData = {
CameraTransitionTime:"float",
EnableFeature:"bool"
};

var SoldierAsset = null;

var SoldierAutoAimData = {
Poses:"List<AutoAimData>"
};

var SoldierBlueprint = null;

var SoldierBodyComponentData = {
OverrideGravity:"bool",
OverrideGravityValue:"float",
OverrideVelocity:"bool",
OverrideVelocityY:"float",
SprintMultiplier:"float"
};

var SoldierCameraComponentData = {
AuthoritativeEyePosition:"bool",
CameraBinding:"fb.CameraBinding",
Cameras:"List<CtrRef>",
DisableAiming:"bool",
ExplosionImpulseMultiplier:"float",
ForceFieldOfView:"float",
PitchTiltStrength:"float",
StrafeTiltStrength:"float"
};

var SoldierCustomizationAsset = {
WeaponTable:"CtrRef"
};

var SoldierDecalComponentData = {
PoolDecal:"CtrRef",
PoolRayLength:"float",
PoolRayYOffset:"float",
SplashDecal:"CtrRef",
SplashRayLength:"float"
};

var SoldierDetonationData = {
Angle:"float",
HasSoldierDetonation:"bool",
MinSpeedForActivation:"float",
Radius:"float",
SoldierDetonationActivationDelay:"float",
UseAngle:"bool"
};

var SoldierEmoteBinding = {
EmoteAttackCapturePoint:"AntRef",
EmoteDefendCapturePoint:"AntRef",
EmoteFollowMe:"AntRef",
EmoteGoGoGo:"AntRef",
EmoteMoveToPosition:"AntRef",
EmoteNeedAmmo:"AntRef",
EmoteNeedARide:"AntRef",
EmoteNeedBackup:"AntRef",
EmoteNeedMedic:"AntRef",
EmoteNo:"AntRef",
EmoteOk:"AntRef",
EmoteSorry:"AntRef",
EmoteSpot:"AntRef",
EmoteThanks:"AntRef",
IsSquadLeader:"AntRef",
Speak:"AntRef"
};

var SoldierEmoteComponentData = {
Binding:"SoldierEmoteBinding",
NetworkedMessageMappings:"List<CtrRef>"
};

var SoldierEmoteNetworkedMessageMapping = {
Emote:"SoldierEmote",
Messages:"List<UIMessageType>",
SoldierEmoteNetworkedMessageMapping: "readonly",
UIMessageType: "uint"
};

var SoldierEntityData = {
AimingConstraints:"CtrRef",
AutoAim:"CtrRef",
BoneFakePhysics:"List<CtrRef>",
BreathControl:"List<CtrRef>",
CharacterPhysics:"CtrRef",
CollisionEnabled:"bool",
CollisionInfo:"CtrRef",
EnableGroundmapLighting:"bool",
ExplosionDamageModifier:"float",
FLIRKeyColor:"Vec3",
FLIRValue:"float",
FootMaterialPair:"CtrRef",
FreeSpaceCheck:"bool",
HeadCollision:"CtrRef",
HeadMaterialPair:"CtrRef",
HealthModule:"CtrRef",
HidableMeshParts:"List<HidableSoldierMeshWeaponPart>",
HumanPlayerControlled:"bool",
ImpulseReactionTime:"float",
InteractiveManDownAllowed:"bool",
IsPushable:"bool",
LowerGunOnOwnTeam:"bool",
MaxHealth:"float",
Meshes1p:"List<SoldierMeshData>",
Meshes3p:"List<SoldierMeshData>",
PhysicsControlled:"bool",
ProximityCheck:"bool",
RegenerationDelayModifier:"float",
ShowNametag:"bool",
ShowWeaponWhenDead:"bool",
Sound:"CtrRef",
SprintSettings:"CtrRef",
StreamGroup1p:"CtrRef",
UIParts:"List<CtrRef>",
UseSpineXRotation:"bool",
VoiceOverInfo:"CtrRef"
};

var SoldierEntityInteractionComponentData = null;

var SoldierEntryComponentData = {
AimingConstraints:"AimingConstraintsData",
AlignConstraintsToEntity:"bool",
AntEntryEnumeration:"CtrRef"
};

var SoldierFootplantEffectComponentData = {
FootMaterialPair:"CtrRef",
FootVelocityThreshold:"float",
FullFootplantingEnabled:"bool",
HeightOverGroundThreshold:"float",
LodDistance:"float"
};

var SoldierGripComponentData = null;

var SoldierHeadCollisionData = {
HeadRadius:"float",
PoseStates:"List<SoldierHeadCollisionPoseData>"
};

var SoldierHeadCollisionPoseData = {
IdleOffset:"Vec3",
MovingForwardOffset:"Vec3"
};

var SoldierHealthModuleBinding = {
CriticallyHit:"AntRef",
Dead:"AntRef",
DeathAnimationTriggered:"AntRef",
DeathHitDirection:"AntRef",
Explosion:"AntRef",
ForwardSpeed:"AntRef",
HeadShot:"AntRef",
HitBack:"AntRef",
HitFront:"AntRef",
HitLeft:"AntRef",
HitRight:"AntRef",
InteractiveManDown:"AntRef",
LeftArmHit:"AntRef",
LeftLegHit:"AntRef",
OnGround:"AntRef",
Pose:"AntRef",
RandomAnimationIndex:"AntRef",
RandomValue:"AntRef",
Revived:"AntRef",
RightArmHit:"AntRef",
RightLegHit:"AntRef",
RightSpeed:"AntRef",
Sprinting:"AntRef"
};

var SoldierHealthModuleData = null;

var SoldierMeshData = {
Mesh:"CtrRef",
MeshBlueprint:"CtrRef",
RandomGroup:"int"
};

var SoldierMovementSequenceData = {
IgnoreRecordingIndexFilter:"bool",
InputRecordingIndex:"int",
RecordedInput:"CtrRef",
ReportWhenFinished:"bool"
};

var SoldierParachuteBinding = {
AccelerateBrake:"AntRef",
Enabled:"AntRef",
Pitch:"AntRef",
Roll:"AntRef",
SteerLeftRight:"AntRef"
};

var SoldierParachuteComponentData = {
AimingConstraints:"AimingConstraintsData",
Binding:"SoldierParachuteBinding",
UndeployTime:"float"
};

var SoldierSoundComponentData = {
RunPeriod:"float",
RunVelocityThreshold:"float",
WalkPeriod:"float",
WalkVelocityThreshold:"float"
};

var SoldierSoundData = {
BreathControl:"CtrRef",
BulletImpact:"CtrRef",
Death:"CtrRef",
Healing:"CtrRef",
HitIndicator:"CtrRef",
MinHealSoundTime:"float",
Movement:"CtrRef",
MovementThreshold:"float",
PickupAmmo:"CtrRef",
PickupKit:"CtrRef",
SprintTimeForRecovery:"float"
};

var SoldierSpawnAppearanceTemplateData = {
Body:"uint"
};

var SoldierSpawnKitTemplateData = {
Kit:"uint",
MainGun:"uint"
};

var SoldierSpawnTemplateData = {
AnimationTemplate:"CtrRef",
Behaviour:"CtrRef",
CustomizeSoldierData:"CtrRef",
Sensing:"CtrRef",
VoiceOverLabels:"List<CtrRef>"
};

var SoldierSprintSettingsData = {
Fov:"float",
FovInDelay:"float",
FovInTime:"float",
FovOutDelay:"float",
FovOutTime:"float",
InterruptingActions:"List<EntryInputActionEnum>",
RecoverTime:"float",
SprintToProneRecoverTime:"float",
SoldierSprintSettingsData: "readonly",
EntryInputActionEnum: "uint"
};

var SoldierSuppressionComponentData = {
CheckLineOfSight:"bool",
FallOffDelay:"float",
FallOffMultiplier:"float",
ReactionToSuppression:"SuppressionReactionData",
SuppressionAbortsHealthRegeneration:"bool",
SuppressionBoostModifier:"float",
SuppressionDecay:"float",
SuppressionResistModifier:"float",
SuppressionSphereRadius:"float"
};

var SoldierTestEntityData = {
ActiveInputRecording:"float",
AuthoritativeAimingActive:"float",
AuthoritativePitch:"float",
AuthoritativeYaw:"float",
CameraMovementsFilename:"string",
FireCounterMeasure:"float",
FireInputVal:"float",
InputRecorder:"CtrRef",
JumpInputVal:"float",
PitchInputVal:"float",
ProneInputVal:"float",
RandomSeed:"int",
RollInputVal:"float",
RunAutomatically:"bool",
SpecialAnimationIndex:"float",
SprintInputVal:"bool",
StartSequence:"CtrRef",
StartSequenceRoot:"CtrRef",
StrafeInputVal:"float",
Team:"TeamId",
Template:"CtrRef",
TestSoldier:"CtrRef",
TestVehicle:"CtrRef",
ThrottleInputVal:"float",
UnlocksProfile:"CtrRef",
UseUnlocksProfile:"bool",
YawInputVal:"float",
ZoomInputVal:"float"
};

var SoldierWeaponAsset = null;

var SoldierWeaponBlueprint = null;

var SoldierWeaponCustomizationAsset = {
Customization:"CtrRef"
};

var SoldierWeaponData = {
AimingController:"CtrRef",
AllowSwitchingToWeaponInVehicles:"bool",
AllowSwitchingToWeaponOutOfAmmo:"bool",
AllowSwitchingToWeaponReloading:"bool",
AnimationData:"CtrRef",
AnimBaseSet:"WeaponAnimBaseSetEnum",
CanBeInSupportedShooting:"bool",
Customization:"CtrRef",
DamageGiverName:"string",
EnableBreathControl:"bool",
FirstPersonCamera:"CtrRef",
HideWhenOutOfAmmo:"bool",
Hud:"HudData",
InteractionOffset:"Vec3",
IsSilenced:"bool",
LowerOnOwnTeam:"bool",
PersistenceId:"string",
PickupSettings:"PickupSettingsData",
QuickThrowType:"QuickThrowTypeEnum",
RedeployWhenSwitchingWeaponStates:"bool",
RenderFov:"float",
Sockets:"List<CtrRef>",
SoldierWeaponBlueprint:"CtrRef",
StreamGroup1p:"CtrRef",
SwitchToPrimaryWhenOutOfAmmo:"bool",
SwitchWeaponStateInputAction:"EntryInputActionEnum",
UseQuickThrowOnAutomaticSwitchback:"bool",
VoiceOverInfo:"CtrRef",
WeaponFloatParam:"float",
WeaponModifierData:"List<fb.WeaponModifierData>",
ZoomRenderFov:"float"
};

var SoldierWeaponDispersion = {
CrouchDispersion:"FiringDispersionData",
DecreasePerSecond:"float",
JumpDispersionAngle:"float",
MoveDispersionAngle:"float",
MoveZoomedDispersionAngle:"float",
ProneDispersion:"FiringDispersionData",
ProneTransitionDispersionAngle:"float",
StandDispersion:"FiringDispersionData"
};

var SoldierWeaponMultiUnlock = {
First:"CtrRef",
UnlockAssetPairs:"List<UnlockAssetPair>"
};

var SoldierWeaponOverrideData = {
Overrides:"List<CtrRef>"
};

var SoldierWeaponsComponentData = {
AimDir:"LinearTransform",
AmmoClipIncreaseMultiplier:"float",
Animated1pOnlyWeaponBinding:"fb.Animated1pOnlyWeaponBinding",
Animated3pOnlyWeaponBinding:"fb.Animated3pOnlyWeaponBinding",
AnimatedWeaponBinding:"fb.AnimatedWeaponBinding",
ExplosiveIncreaseMultiplier:"float",
GrenadeIncrease:"int",
LockTimeMultiplier:"float",
PrimaryWeaponId:"int",
UnderslungGrenadeIncrease:"int",
UnlimitedAmmo:"bool",
UnlimitedMags:"bool",
UseExternalAimDir:"bool",
WeaponSkeleton:"CtrRef"
};

var SoldierWeaponSwitchingData = {
DirectSwitchMap:"List<DirectWeaponSwitchingMapData>",
SwitchMap:"List<WeaponSwitchingMapData>",
SwitchToGadgetCooldownTime:"float"
};

var SoldierWeaponUnlockAsset = {
Extra:"CtrRef",
Weapon:"CtrRef",
WeaponIdentifier:"uint"
};

var SoundAreaEntityData = {
BigWorld:"CtrRef",
FadeCurve:"FadeCurveType",
FadeWidth:"float",
ProximityMultiplier:"float",
Sound:"CtrRef"
};

var SoundAsset = {
Scope:"CtrRef"
};

var SoundBusData = {
BusName:"string",
ChannelCount:"sbyte",
SubmixPlugin:"SoundGraphPluginRef"
};

var SoundDataAsset = {
Chunks:"List<SoundDataChunk>",
NameHash:"uint"
};

var SoundDataChunk = {
ChunkId:"GUID",
ChunkSize:"uint"
};

var SoundEffectEntityData = {
Sound:"CtrRef"
};

var SoundEntityData = {
ObstructionHandle:"int",
PlayOnCreation:"bool",
Sound:"CtrRef",
Transform:"LinearTransform"
};

var SoundEnvironmentConstantData = {
HumanPlayerSoldierMovementVolumeOverride:"float",
MemoryTime:"float",
MinimumLoudness:"float"
};

var SoundGraphAsset = {
Graph:"CtrRef",
Mixer:"CtrRef"
};

var SoundGraphData = {
Info:"SoundGraphInfo",
InputEvents:"List<CtrRef>",
InputParameters:"List<CtrRef>",
OutputEvents:"List<CtrRef>",
OutputParameters:"List<CtrRef>"
};

var SoundGraphInfo = {
Connections:"List<SoundGraphPluginConnection>",
ConstructParams:"List<SoundGraphPluginConstructParam>",
LinkedPluginAttributes:"List<SoundGraphLinkedPluginAttribute>",
PluginCount:"uint",
PluginsParamCount:"uint",
Voices:"List<SoundGraphVoiceInfo>"
};

var SoundGraphLinkedPluginAttribute = {
AllowExtremeValues:"bool",
AttributeIndex:"sbyte",
Node:"CtrRef",
Plugin:"SoundGraphPluginRef",
Port:"AudioGraphNodePort"
};

var SoundGraphPluginConnection = {
Bus:"CtrRef",
ConnectionType:"SoundGraphPluginConnectionType",
Parameters:"List<SoundGraphPluginConnectionParam>",
VoiceIndex:"sbyte"
};

var SoundGraphPluginConnectionParam = {
Index:"sbyte",
Value:"float"
};

var SoundGraphPluginConstructParam = {
Index:"sbyte",
Value:"float"
};

var SoundGraphPluginInfo = {
ConnectionIndex:"sbyte",
ConstructParamCount:"sbyte",
ConstructParamsIndex:"sbyte",
EnableAttributeReadMask:"uint",
Id:"uint",
OutputChannelCount:"sbyte"
};

var SoundGraphPluginRef = {
IsValid:"bool",
PluginIndex:"sbyte",
VoiceIndex:"sbyte"
};

var SoundGraphVoiceInfo = {
Plugins:"List<SoundGraphPluginInfo>",
ProcessingStage:"sbyte"
};

var SoundMasterPatchAsset = {
Busses:"List<CtrRef>",
RwMovieBus:"CtrRef"
};

var SoundPatchAsset = {
AILoudness:"float",
DefaultEnterScopeEvent:"CtrRef",
DefaultForceInitEvent:"CtrRef",
DefaultStartEvent:"CtrRef",
DefaultStopEvent:"CtrRef",
DopplerFactor:"float",
IsLooping:"bool",
IsPersistent:"bool",
Loudness:"float",
MasterPitch:"float",
MixGroup:"CtrRef",
OutputNodes:"List<CtrRef>",
Radius:"float"
};

var SoundPatchConfigurationAsset = {
Entries:"List<CtrRef>",
Loudness:"float",
Sound:"CtrRef"
};

var SoundPatchConfigurationAssetEntry = {
NameHash:"uint",
Value:"CtrRef"
};

var SoundPatchConfigurationEntry = null;

var SoundPatchConfigurationParameterEntry = {
NameHash:"uint",
Value:"float"
};

var SoundPatchPublicNode = {
Id:"uint",
Node:"CtrRef"
};

var SoundPrimeEntityData = {
DataAssets:"List<CtrRef>"
};

var SoundScopeData = {
DefaultStrategy:"CtrRef",
Name:"string"
};

var SoundScopeSetupData = {
Mappings:"List<SoundScopeStrategyMapping>",
Name:"string"
};

var SoundScopeSetupEntityData = {
Setup:"CtrRef"
};

var SoundScopeStrategyData = {
Name:"string"
};

var SoundScopeStrategyMapping = {
Scope:"CtrRef",
Strategy:"CtrRef"
};

var SoundSettings = {
AudioSystemUri:"string",
Enable:"bool",
VOCommon:"string",
VOEnglish:"string",
VOFrench:"string",
VOGerman:"string",
VOItalian:"string",
VOSpanish:"string"
};

var SoundState = {
BypassSound:"CtrRef",
Duration:"float",
FadeInTime:"float",
FadeOutTime:"float",
FadeSound:"bool",
HdrSetting:"CtrRef",
LpCutoffFrequency:"float",
Mixer:"CtrRef",
Name:"string"
};

var SoundStateEntityData = {
SoundState:"CtrRef"
};

var SoundStateSettingsAsset = {
ImpairedHearingImpulseThreshold:"float",
ScreamThreshold:"float",
SoundStates:"List<CtrRef>",
SupressionThreshold:"float"
};

var SoundTestAsset = {
Suites:"List<CtrRef>",
TaskSpecs:"List<CtrRef>",
TestSpecs:"List<CtrRef>"
};

var SoundTestEventTask = {
EventName:"string"
};

var SoundTestParamTask = {
Behavior:"SoundTestParamBehavior",
InitialValue:"float",
ParamName:"string",
RangeMax:"float",
RangeMin:"float"
};

var SoundTestSpec = {
Description:"string",
Duration:"float",
MainStartTask:"CtrRef",
MainStopTask:"CtrRef",
Name:"string",
Tasks:"List<CtrRef>"
};

var SoundTestSuite = {
Assets:"List<CtrRef>",
Name:"string",
ProfileTests:"bool",
Tests:"List<CtrRef>"
};

var SoundTestTask = {
Param:"CtrRef",
Repetitions:"uint",
Spec:"CtrRef",
StartTime:"float"
};

var SoundTestTaskParam = null;

var SoundTestTaskSpec = {
Description:"string",
Duration:"float"
};

var SoundTestTransformTask = {
Behavior:"SoundTestTransformBehavior",
InitialPosition:"Vec3",
RelativeListener:"bool"
};

var SoundWaveAsset = {
ChannelCount:"sbyte",
Localization:"List<SoundWaveLocalizationInfo>",
PersistentVariationCount:"sbyte",
PreferAvailableVariations:"bool",
PrimePriority:"sbyte",
RequestPriority:"sbyte",
Seekable:"bool",
Selection:"SoundWaveVariationSelection",
StreamPool:"CtrRef",
SubtitleStringIds:"List<string>",
Variations:"List<CtrRef>",
VoicePriority:"sbyte"
};

var SoundWaveLocalizationInfo = {
FirstVariationIndex:"ushort",
Language:"CtrRef",
VariationCount:"ushort"
};

var SoundWaveSubtitle = {
StringIndex:"sbyte",
Time:"float"
};

var SoundWaveVariation = {
ChunkIndex:"sbyte",
FirstLoopSegmentIndex:"sbyte",
LastLoopSegmentIndex:"sbyte",
SeekTablesSize:"uint",
Segments:"List<SoundWaveVariationSegment>",
Subtitles:"List<SoundWaveSubtitle>"
};

var SoundWaveVariationSegment = {
SamplesOffset:"uint",
SeekTableOffset:"uint",
SegmentLength:"float"
};

var SpatialEntityData = {
Transform:"LinearTransform"
};

var SpatialPrefabBlueprint = null;

var SpatialReferenceObjectData = null;

var SpawnAnimationData = {
AnimationSpeed:"float"
};

var SpawnAnimationFrameData = {
AnimationFrame:"uint"
};

var SpawnDirectionData = {
DirectionFromEmitterOrigin:"float",
InheritSpeedAndDirectionFromEmitter:"bool"
};

var SpawnEntitySelector = null;

var SpawnEvent = {
Position:"Vec3",
Time:"float"
};

var SpawnOrientationData = null;

var SpawnPointManagerData = {
UseAiLodSystem:"bool"
};

var SpawnPositionData = null;

var SpawnRateData = {
DistributeOverDistance:"bool",
DistributeOverTime:"bool",
SpawnRate:"float",
TrailSegmentLength:"float"
};

var SpawnReferenceObjectData = {
AirdropTransform:"LinearTransform",
AutoSpawn:"bool",
ClearBangersOnSpawn:"bool",
ControllableInput:"LinearTransform",
ControllableTransform:"LinearTransform",
Enabled:"bool",
InitialAutoSpawn:"bool",
InitialSpawnDelay:"float",
InitialVelocity:"float",
IsDynamicSpawn:"bool",
LocationNameSid:"string",
LocationTextSid:"string",
LockedTeam:"bool",
MaxCount:"int",
MaxCountSimultaneously:"int",
OnlySendEventForHumanPlayers:"bool",
OverwriteThrottle:"bool",
ReturnControlOnIdle:"bool",
RotationPitch:"float",
RotationRoll:"float",
RotationYaw:"float",
SendWeaponEvents:"bool",
SpawnAreaRadius:"float",
SpawnDelay:"float",
SpawnProtectionCheckAllTeams:"bool",
SpawnProtectionFriendlyKilledCount:"uint",
SpawnProtectionFriendlyKilledTime:"float",
SpawnProtectionRadius:"float",
TakeControlEntryIndex:"int",
TakeControlOnTransformChange:"bool",
Team:"TeamId",
Throttle:"float",
TotalCountSimultaneouslyOfType:"int",
TryToSpawnOutOfSight:"bool",
UseAsSpawnPoint:"bool"
};

var SpawnRotationData = {
Rotation:"float"
};

var SpawnRotationSpeedData = {
RotationSpeed:"float"
};

var SpawnScreenWeaponData = {
Texture:"CtrRef",
WeaponName:"string"
};

var SpawnSizeData = {
Size:"float"
};

var SpawnSpeedData = {
Speed:"float"
};

var SpawnState = {
Team:"int"
};

var SpawnSubViewData = null;

var SpawnSurveyEvent = {
SurveyMetricLink:"GUID"
};

var SpecialMoveInterpolatedPoint = {
Time:"float",
Value:"Vec3"
};

var SpecialMovesBinding = {
CancelAnimation:"AntRef",
ObjectDistance:"AntRef",
ObjectHeight:"AntRef",
SpecialAnimationIndex:"AntRef",
StartObjectDistanceTimer:"AntRef",
TriggerHighVault:"AntRef",
TriggerLowVault:"AntRef",
TriggerSlideIntoProne:"AntRef",
TriggerSpecialAnimation:"AntRef",
TriggerUpVault:"AntRef",
VaultObjectPositionX:"AntRef",
VaultObjectPositionZ:"AntRef"
};

var SpecialMovesComponentData = {
Binding:"SpecialMovesBinding",
DeathState:"SpecialMoveStateData",
IndexedDeathStates:"List<SpecialMoveStateData>",
IndexedSpecialAnimationStates:"List<SpecialMoveStateData>",
IndexedVaultOverHighStates:"List<SpecialMoveVaultStateCriteria>",
IndexedVaultOverLowStates:"List<SpecialMoveVaultStateCriteria>",
IndexedVaultUpStates:"List<SpecialMoveVaultStateCriteria>",
SpecialAnimationState:"SpecialMoveStateData",
SprintToProneState:"SpecialMoveStateData",
VaultOverHighState:"SpecialMoveStateData",
VaultOverLowState:"SpecialMoveStateData",
VaultUpHighState:"SpecialMoveStateData"
};

var SpecialMoveStateData = {
ExitAnimationDrivenStateVelocity:"float",
GravityPoints:"List<SpecialMoveInterpolatedPoint>",
KeepInitialSoldierDirection:"bool",
MaxDistanceScale:"float",
MaxHeightScale:"float",
MaxObjectLengthScale:"float",
MinDistanceScale:"float",
MinHeightScale:"float",
MinObjectLengthScale:"float",
MotionPoints:"List<SpecialMoveInterpolatedPoint>",
OptimumDistanceFromObject:"float",
OptimumHeightOfObject:"float",
OptimumLengthOfObject:"float",
OverridePose:"SpecialMovesPoseType",
ResetPose:"SpecialMovesPoseType",
ScaleWithDistanceToObject:"bool"
};

var SpecialMoveVaultStateCriteria = {
DistToObject:"float",
DistToObjectTolerance:"float",
HeightOfObject:"float",
HeightOfObjectTolerance:"float",
LengthOfObject:"float",
LengthOfObjectTolerance:"float",
SpecialMoveState:"SpecialMoveStateData"
};

var SpectatorReplayEntityData = null;

var SpectatorSubViewData = null;

var SpeedEventGateEntityData = {
MaxSpeed:"float",
MinSpeed:"float"
};

var SpeedModifierData = {
BackwardConstant:"float",
ForwardConstant:"float",
LeftConstant:"float",
RightConstant:"float"
};

var SphereCollisionData = {
CounterNormalBrakeForceMod:"float",
Enabled:"bool",
ExtraRadius:"float"
};

var SphereData = {
Position:"Vec3",
Radius:"float"
};

var SphereEvaluatorData = {
Pivot:"Vec3",
Radius:"float",
Scale:"Vec3"
};

var SplitterNode = {
In:"CtrRef",
Outputs:"List<CtrRef>"
};

var SpotLightEntityData = {
CastShadowsEnable:"bool",
CastShadowsMinLevel:"QualityLevel",
ConeInnerAngle:"float",
ConeOuterAngle:"float",
FrustumAspect:"float",
FrustumFov:"float",
OrthoHeight:"float",
OrthoWidth:"float",
Shape:"SpotLightShape",
Texture:"CtrRef"
};

var SpottingComponentData = {
AmmoOrderDistance:"float",
CoolDownAllowedSpotsWithinHistory:"int",
CoolDownHistoryTime:"float",
HealOrderDistance:"float",
OnlyAllowedToHaveOneSpottedPlayer:"bool",
OrderHealPercentage:"float",
OrderNeedAmmoPercentage:"float",
OrderRepairPercentage:"float",
PassiveSpottingTimeInterval:"float",
PickupOrderDistance:"float",
RepairOrderDistance:"float",
SpottingDistance:"float",
SpottingFov:"float",
TeamOrderFov:"float",
TimeRequiredToPassiveSpot:"float"
};

var SpottingEntityData = {
Enabled:"bool",
Realm:"fb.Realm",
TeamToSpot:"TeamId"
};

var SpottingScoringHandlerData = null;

var SpottingTargetComponentData = {
ActiveSpottedTime:"float",
ActiveSpottedTimeMultiplier:"float",
PassiveSpottedTime:"float",
PassiveSpottedTimeMultiplier:"float",
SpotOnFireMultiplier:"float",
TargetBoundingBoxCenter:"bool"
};

var SpringData = {
AttachOffsetY:"float",
Damping:"float",
DisabledStrenghModifier:"float",
Length:"float",
MaxSpringForce:"float",
ProgressiveExponent:"float",
ProgressiveStartRatio:"float",
Stiffness:"float",
VisualClipOffset:"float"
};

var StabilizerData = {
Advanced:"bool",
AdvancedYaw:"bool",
PitchStrength:"float",
RollStrength:"float",
VerticalVelocityStrength:"float",
YawStrength:"float"
};

var StabilizerSettings = {
Advanced:"bool",
Property:"StabilizerProperty",
Strength:"float"
};

var StanceCameraData = {
DefaultCameraForStances:"List<int>",
ValidStances:"List<int>"
};

var StanceFilterComponentData = {
ActionsToFilter:"List<ActionSuppressor>",
FilterSpecificActions:"bool",
StanceChangeTime:"float",
UndoParentStanceFilter:"bool",
ValidStances:"List<int>"
};

var StanceSwitchSoundData = {
StanceSwitchSound:"CtrRef",
ValidStances:"List<int>"
};

var StandardMoveWaypointData = {
MoveTask:"AILocoMoveTaskData"
};

var StartEntityData = {
IsDefault:"bool",
SortIndex:"float",
StartName:"string"
};

var StatCategoriesAwardTree = null;

var StatCategoriesBaseTree = {
ParamX:"List<CtrRef>",
ParamY:"List<CtrRef>",
ProcessAllLevelsInTree:"bool",
RootBaseCategories:"List<CtrRef>"
};

var StatCategoriesDifficultyTree = null;

var StatCategoriesGuidTree = null;

var StatCategoriesKitTree = null;

var StatCategoriesLevelTree = null;

var StatCategoriesPlayerRoleTree = null;

var StatCategoriesScoreboardPositionTree = null;

var StatCategoriesScoringBucketTree = null;

var StatCategoriesTree = {
Categories:"List<CtrRef>"
};

var StatCategoriesVehicleStateTypeTree = null;

var StatCategoriesVehicleTree = null;

var StatCategoriesVehicleWeaponTree = null;

var StatCategoriesWeaponAccessoryTree = null;

var StatCategoriesWeaponTree = null;

var StatCategoryTreeCollection = {
CategoryTrees:"List<CtrRef>"
};

var StateEventGateEntityData = {
CheckedState:"EventGateState"
};

var StateNode = {
Hide:"CtrRef",
In:"CtrRef",
Inputs:"List<CtrRef>",
Outputs:"List<CtrRef>",
RenderToTexture:"bool",
Screen:"CtrRef",
Show:"CtrRef"
};

var StateRenderSettings = {
Ps3PixelShaderConstantsEnable:"bool"
};

var StatEventTriggerEntityData = {
MiscParamX:"string",
MiscParamY:"string",
SendToAll:"bool",
StatEvent:"fb.StatEvent"
};

var StaticCameraData = {
AccumulateInput:"bool",
AverageFilterFrames:"int",
DownCurve:"List<Vec3>",
DownPitchAngle:"float",
LeftCurve:"List<Vec3>",
LeftYawAngle:"float",
LoosePartPhysics:"List<CtrRef>",
MirrorHorizontalCurves:"bool",
MirrorVerticalCurves:"bool",
PitchInputAction:"EntryInputActionEnum",
PitchSensitivityNonZoomed:"float",
PitchSensitivityZoomed:"float",
ResetAccumulatedInputOnViewChange:"bool",
RightCurve:"List<Vec3>",
RightYawAngle:"float",
UpCurve:"List<Vec3>",
UpPitchAngle:"float",
YawInputAction:"EntryInputActionEnum",
YawSensitivityNonZoomed:"float",
YawSensitivityZoomed:"float"
};

var StaticConfigAsset = null;

var StaticEnlightenData = {
StaticDirectionTexture:"CtrRef",
StaticIrradianceChromaTexture:"CtrRef",
StaticIrradianceLumaTexture:"CtrRef"
};

var StaticEnlightenEntityData = {
DynamicEnlightenData:"CtrRef",
EnlightenData:"CtrRef"
};

var StaticListItem = {
AppendPlatformToSID:"bool",
DynamicDisable:"UIDataSourceInfo",
DynamicNewContent:"UIDataSourceInfo",
ExcludeInRetail:"bool",
ItemName:"string"
};

var StaticModelEntityData = {
AnimatePhysics:"bool",
BasePoseTransforms:"List<LinearTransform>",
BoneCount:"uint",
ExcludeFromNearbyObjectDestruction:"bool",
Mesh:"CtrRef",
NetworkInfo:"StaticModelNetworkInfo",
PartLinks:"List<CtrRef>",
PhysicsPartInfos:"List<PhysicsPartInfo>",
Visible:"bool"
};

var StaticModelGroupEntityData = {
HackToSolveRealTimeTweakingIssue:"GUID",
MemberDatas:"List<StaticModelGroupMemberData>",
NetworkIdCount:"uint"
};

var StaticModelGroupMemberData = {
HealthStateEntityManagerId:"uint",
InstanceCastSunShadow:"List<bool>",
InstanceCount:"uint",
InstanceObjectVariation:"List<uint>",
InstanceScale:"List<float>",
InstanceTransforms:"List<LinearTransform>",
MemberType:"CtrRef",
MeshEntityType:"CtrRef",
NetworkIdCountPerInstance:"uint",
NetworkIdRange:"IndexRange",
PhysicsPartCountPerInstance:"uint",
PhysicsPartRange:"IndexRange"
};

var StaticModelNetworkInfo = {
ChildNetworkIdCount:"uint",
ChildNetworkInfos:"List<ChildStaticModelNetworkInfo>",
NetworkIdCount:"uint",
PartNetworkIdRanges:"List<IndexRange>"
};

var StaticUnlockList = {
UnlockInfos:"List<BasicUnlockInfo>"
};

var StatsCategoryAwardData = null;

var StatsCategoryBaseData = {
BaseSubCategories:"List<CtrRef>",
Code:"string"
};

var StatsCategoryData = {
Categories:"List<CtrRef>",
Members:"List<string>"
};

var StatsCategoryDifficultyData = null;

var StatsCategoryGuidData = {
ObjectInstanceGuids:"List<GUID>"
};

var StatsCategoryKitData = null;

var StatsCategoryLevelData = null;

var StatsCategoryPlayerRoleData = {
Roles:"List<PlayerRole>",
StatsCategoryPlayerRoleData: "readonly",
PlayerRole: "uint"
};

var StatsCategoryScoreboardPositionData = {
Positions:"List<ScoreboardPosition>",
StatsCategoryScoreboardPositionData: "readonly",
ScoreboardPosition: "uint"
};

var StatsCategoryScoringBucketData = null;

var StatsCategoryVehicleData = {
FirstVehicleId:"uint"
};

var StatsCategoryVehicleStateTypeData = {
States:"List<VehicleStateType>",
StatsCategoryVehicleStateTypeData: "readonly",
VehicleStateType: "uint"
};

var StatsCategoryVehicleWeaponData = null;

var StatsCategoryWeaponAccessoryData = null;

var StatsCategoryWeaponData = {
AccessoryUnlockGates:"CtrRef",
SoldierWeaponId:"uint",
UnlocksInfo:"List<BasicUnlockInfo>"
};

var StatSpamSetting = {
AmountLimit:"uint",
Event:"StatEvent",
PlayerToPlayer:"bool",
TimeLimit:"float"
};

var StatSpamSettings = {
SpamList:"List<StatSpamSetting>"
};

var StatSurveyEvent = {
SurveyMetricLink:"GUID"
};

var StopWatchEntityData = {
Multiplier:"float",
Realm:"fb.Realm",
TriggerOnTime:"float",
UpdatePass:"fb.UpdatePass"
};

var StreamGridCell = {
ReferenceData:"CtrRef",
X:"int",
Z:"int"
};

var StreamGridEntityData = {
Cells:"List<StreamGridCell>",
CellSize:"float",
MaxStreamInCountPerFrame:"int",
MaxStreamOutCountPerFrame:"int",
ViewDistance:"float"
};

var StreamGroupData = {
Assets:"List<CtrRef>"
};

var StreamingGateEntityData = {
Timeout:"float"
};

var StreamPoolAsset = {
StreamBufferSizePs3:"uint",
StreamBufferSizeWin32:"uint",
StreamBufferSizeXenon:"uint",
StreamCountPs3:"uint",
StreamCountWin32:"uint",
StreamCountXenon:"uint",
StreamPoolId:"uint",
StreamReadBlockSizePs3:"uint",
StreamReadBlockSizeWin32:"uint",
StreamReadBlockSizeXenon:"uint",
StreamStarveMode:"fb.StreamStarveMode"
};

var Strengths = {
HeavyArmour:"float",
Helicopter:"float",
Infantry:"float",
LightArmour:"float"
};

var StringOption = {
Name:"string",
Value:"string"
};

var SubScreenData = {
IconSize:"float",
ProjectionAngleX:"float",
ProjectionAngleY:"float",
ProjectionAngleZ:"float",
RenderTargetApectRatio:"float",
RenderTargetIndex:"int",
ScaleIconSizeByDepthStrength:"float",
ScreenPosition:"Vec3",
ScreenSize:"float",
UseRenderTarget:"bool"
};

var SubSkeleton = {
BoneMap:"List<int>",
Skeleton:"CtrRef",
TransformMap:"List<LinearTransform>"
};

var SubsystemTimingConfigData = {
BehaviourExecution:"float",
BehaviourSelection:"float",
Evaluation:"float",
GoalUpdates:"float",
IntentUpdates:"float",
Sensing:"float"
};

var SubtitleDataNode = {
DisplayTime:"float",
SID1:"string",
SID2:"string",
Time:"float"
};

var SubtitleDataTree = {
Subtitles:"List<CtrRef>"
};

var SubtitleMainDataNode = {
Language:"LanguageFormat",
Subtitles:"List<CtrRef>"
};

var SubViewData = null;

var SubWorldData = {
IsPs3SubLevel:"bool",
IsWin32SubLevel:"bool",
IsXenonSubLevel:"bool",
RegistryContainer:"CtrRef",
RememberStateOnStreamOut:"bool"
};

var SubWorldInclusion = {
Criteria:"List<CtrRef>"
};

var SubWorldInclusionCriterion = {
Name:"string",
Options:"List<string>"
};

var SubWorldInclusionSetting = {
Criterion:"CtrRef",
EnabledOptions:"List<string>"
};

var SubWorldInclusionSettings = {
Settings:"List<CtrRef>"
};

var SubWorldReferenceObjectData = {
AutoLoad:"bool",
BundleName:"string",
InclusionSettings:"CtrRef",
IsPs3SubLevel:"bool",
IsWin32SubLevel:"bool",
IsXenonSubLevel:"bool"
};

var SunFlareComponentData = {
DebugDrawOccluder:"bool",
Element1AlphaOccluderCurve:"Vec4",
Element1AlphaScreenPosCurve:"Vec4",
Element1Enable:"bool",
Element1RayDistance:"float",
Element1Shader:"CtrRef",
Element1Size:"Vec2",
Element1SizeOccluderCurve:"Vec4",
Element1SizeScreenPosCurve:"Vec4",
Element2AlphaOccluderCurve:"Vec4",
Element2AlphaScreenPosCurve:"Vec4",
Element2Enable:"bool",
Element2RayDistance:"float",
Element2Shader:"CtrRef",
Element2Size:"Vec2",
Element2SizeOccluderCurve:"Vec4",
Element2SizeScreenPosCurve:"Vec4",
Element3AlphaOccluderCurve:"Vec4",
Element3AlphaScreenPosCurve:"Vec4",
Element3Enable:"bool",
Element3RayDistance:"float",
Element3Shader:"CtrRef",
Element3Size:"Vec2",
Element3SizeOccluderCurve:"Vec4",
Element3SizeScreenPosCurve:"Vec4",
Element4AlphaOccluderCurve:"Vec4",
Element4AlphaScreenPosCurve:"Vec4",
Element4Enable:"bool",
Element4RayDistance:"float",
Element4Shader:"CtrRef",
Element4Size:"Vec2",
Element4SizeOccluderCurve:"Vec4",
Element4SizeScreenPosCurve:"Vec4",
Element5AlphaOccluderCurve:"Vec4",
Element5AlphaScreenPosCurve:"Vec4",
Element5Enable:"bool",
Element5RayDistance:"float",
Element5Shader:"CtrRef",
Element5Size:"Vec2",
Element5SizeOccluderCurve:"Vec4",
Element5SizeScreenPosCurve:"Vec4",
Enable:"bool",
OccluderSize:"float",
Realm:"fb.Realm"
};

var SunFlareEffectState = {
DebugDrawOccluder:"bool",
Element1AlphaOccluderCurve:"Vec4",
Element1AlphaScreenPosCurve:"Vec4",
Element1Enable:"bool",
Element1RayDistance:"float",
Element1Shader:"CtrRef",
Element1Size:"Vec2",
Element1SizeOccluderCurve:"Vec4",
Element1SizeScreenPosCurve:"Vec4",
Element2AlphaOccluderCurve:"Vec4",
Element2AlphaScreenPosCurve:"Vec4",
Element2Enable:"bool",
Element2RayDistance:"float",
Element2Shader:"CtrRef",
Element2Size:"Vec2",
Element2SizeOccluderCurve:"Vec4",
Element2SizeScreenPosCurve:"Vec4",
Element3AlphaOccluderCurve:"Vec4",
Element3AlphaScreenPosCurve:"Vec4",
Element3Enable:"bool",
Element3RayDistance:"float",
Element3Shader:"CtrRef",
Element3Size:"Vec2",
Element3SizeOccluderCurve:"Vec4",
Element3SizeScreenPosCurve:"Vec4",
Element4AlphaOccluderCurve:"Vec4",
Element4AlphaScreenPosCurve:"Vec4",
Element4Enable:"bool",
Element4RayDistance:"float",
Element4Shader:"CtrRef",
Element4Size:"Vec2",
Element4SizeOccluderCurve:"Vec4",
Element4SizeScreenPosCurve:"Vec4",
Element5AlphaOccluderCurve:"Vec4",
Element5AlphaScreenPosCurve:"Vec4",
Element5Enable:"bool",
Element5RayDistance:"float",
Element5Shader:"CtrRef",
Element5Size:"Vec2",
Element5SizeOccluderCurve:"Vec4",
Element5SizeScreenPosCurve:"Vec4",
Enable:"bool",
OccluderSize:"float"
};

var SupplyData = {
Ammo:"SupplyUnitSphereData",
ExcludeSelf:"bool",
Healing:"SupplyUnitSphereData",
SupplySoldiers:"bool",
SupplyVehicles:"bool",
TeamSpecific:"bool"
};

var SupplySphereComponentData = {
SupplyData:"fb.SupplyData"
};

var SupplySphereEntityData = {
SupplyData:"fb.SupplyData"
};

var SupplySphereWeaponData = {
SupplyData:"fb.SupplyData"
};

var SupplyUnitSphereData = {
InfiniteCapacity:"bool",
Radius:"float",
SupplyIncSpeed:"float",
SupplyPointsCapacity:"float",
SupplyPointsRefillSpeed:"float"
};

var SupportedShootingBinding = {
AnimatedCamera:"AntRef",
DistToObject:"AntRef",
ForwardVector:"AntRef",
HeightOfObject:"AntRef",
Pitch:"AntRef",
Supported:"AntRef",
SupportedPos:"AntRef",
Undeploying:"AntRef",
Yaw:"AntRef"
};

var SupportedShootingCommonData = {
AimingConstraints:"AimingConstraintsData",
Binding:"SupportedShootingBinding",
Crouch:"SupportedShootingProximityChecking",
EnterSupportedShootingAction:"EntryInputActionEnum",
Stand:"SupportedShootingProximityChecking"
};

var SupportedShootingComponentData = {
CommonData:"CtrRef"
};

var SupportedShootingProximityChecking = {
RayAboveGunHeightOffset:"float",
RayAboveLength:"float",
RayBelowGunHeightOffset:"float",
RayBelowLength:"float"
};

var SuppressionReactionData = {
SuppressionHighThreshold:"float",
SuppressionLowThreshold:"float",
SuppressionUIThreshold:"float"
};

var SuppressionScoringHandlerData = {
SuppressionAmountLimit:"float",
TimeSinceSuppressionLimit:"float"
};

var SuppressionSettings = null;

var Surface2dDrawMethodData = null;

var Surface2dDrawPassData = null;

var Surface3dDrawMethodData = null;

var SurfaceShaderBaseAsset = null;

var SurfaceShaderInstanceData = {
Shader:"CtrRef"
};

var SurfaceShaderInstanceDataStruct = {
BoolParameters:"List<BoolShaderParameter>",
Shader:"CtrRef",
TextureParameters:"List<TextureShaderParameter>",
VectorArrayParameters:"List<VectorArrayShaderParameter>",
VectorParameters:"List<VectorShaderParameter>"
};

var SurroundingGeometryEntityData = {
AllowedVehicleList:"CtrRef",
CombatArea:"CtrRef",
CombatAreaIndex:"uint"
};

var SurveyEvent = {
AnswerQuestion1:"int",
AnswerQuestion2:"int",
AnswerQuestion3:"int",
AnswerQuestion4:"int",
AnswerQuestion5:"int",
FreeTextField:"string",
SurveyMetricLink:"GUID",
SurveyName:"string"
};

var SurveySuppressedEvent = {
SuppressReason:"string"
};

var SwimmingStateData = {
BodyUnderWater:"float"
};

var SwitcherEntry = {
CaseTrigger:"AudioGraphNodePort",
CaseValue:"float"
};

var SwitcherNodeData = {
DefaultCaseValue:"float",
Outputs:"List<CtrRef>",
Trigger:"AudioGraphNodePort",
Value:"AudioGraphNodePort"
};

var SwitchPropertyStringEntityData = {
Realm:"fb.Realm",
StringProperties:"List<string>"
};

var SyncAnimationsEntityData = {
ExternalTime:"float",
NearEndEventTime:"float",
StartServerPaused:"bool"
};

var SyncedBFSettings = {
AllUnlocksUnlocked:"bool",
GameModeCounterModifier:"float",
MemoryDefragGlobal:"bool",
MemoryDefragUI:"bool",
MemoryGarbageCollectHavok:"bool",
No3dSpotting:"bool",
NoHud:"bool",
NoMinimap:"bool",
NoMinimapSpotting:"bool",
NoNameTag:"bool",
OnlySquadLeaderSpawn:"bool",
TeamSwitchingAllowed:"bool",
UnlicensedUnlocksUnlocked:"bool"
};

var SyncedBoolEntityData = {
In:"bool"
};

var SyncedFloatEntityData = {
In:"float"
};

var SyncedGameSettings = {
AllowClientSideDamageArbitration:"bool",
BulletDamageModifier:"float",
DifficultyIndex:"uint",
DisableRegenerateHealth:"bool",
DisableToggleEntryCamera:"bool",
EnableFriendlyFire:"bool",
ManDownTimeModifier:"float",
MaxAllowedLatency:"float"
};

var SyncedIntEntityData = {
In:"int"
};

var SyncedSequenceEntityData = {
InterpolateTime:"bool"
};

var SyncedTransformEntityData = {
In:"LinearTransform",
Interpolate:"bool"
};

var SystemSettings = {
Name:"string"
};

var TacticalObjectiveEntityData = {
BriefingSidTeam1:"string",
BriefingSidTeam2:"string",
MissionSid:"string",
Team1Timer:"float",
Team2Timer:"float"
};

var TargetCameraData = {
Hud:"HudData",
UIParts:"List<CtrRef>"
};

var TargetCameraEntityData = {
Camera:"CtrRef"
};

var TargetEntityData = null;

var TargetEvaluationConstantData = {
DefaultHumanTargetPreference:"float",
MaxBattleStrength:"float",
OtherSquadAttackerFactorUsage:"float",
TargetFlipFactorUsage:"float"
};

var TargetEvaluatorComponentData = {
UpdateInterval:"float"
};

var TeamAsset = null;

var TeamData = {
Faction:"FactionId",
Soldier:"CtrRef",
SoldierCustomization:"List<CtrRef>",
VehicleCustomization:"List<CtrRef>"
};

var TeamEntityData = {
Id:"TeamId",
Team:"CtrRef"
};

var TeamFilterEntityData = {
GenerateEventForEveryMatchingTeamMember:"bool",
InvertFilter:"bool",
Realm:"fb.Realm",
Team:"TeamId"
};

var TelemetryTriggerEntityData = {
Realm:"fb.Realm",
Value:"string"
};

var TerrainColorTreeAsset = null;

var TerrainData = null;

var TerrainDecalsData = null;

var TerrainEntityData = {
TerrainAsset:"CtrRef",
Visible:"bool",
WaterMaterial:"CtrRef"
};

var TerrainFillDecalData = {
Shader2d:"CtrRef",
Shader3dZOnly:"CtrRef"
};

var TerrainGeoTexture = null;

var TerrainHeightfieldData = null;

var TerrainLayerCombinationDrawData = null;

var TerrainLayerCombinationDrawPassData = null;

var TerrainLayerData = null;

var TerrainLayerProceduralMask = {
AltitudeMin:"float"
};

var TerrainMaskTreeAsset = null;

var TerrainMaterialMapAsset = null;

var TerrainMaterialTreeAsset = null;

var TerrainMeshScatteringType = null;

var TerrainQuadDecalAtlasTile = {
FlipX:"bool",
FlipY:"bool",
TileCountX:"uint",
TileCountY:"uint",
TileIndexX:"uint",
TileIndexY:"uint"
};

var TerrainQuadDecalAtlasTileTemplateData = {
AtlasTile:"TerrainQuadDecalAtlasTile"
};

var TerrainQuadDecalData = {
AtlasTile:"TerrainQuadDecalAtlasTile",
AtlasTileTemplate:"CtrRef",
Shader2d:"CtrRef",
Shader3dZOnly:"CtrRef",
UserMasks:"Vec4"
};

var TerrainSettings = {
HeightQueryCacheSize:"uint",
IntersectingModifiersMax:"uint",
ModifierDepthFactor:"float",
ModifiersCapacity:"uint",
ModifiersEnable:"bool",
ModifierSlopeMax:"float"
};

var TerrainStreamingSettings = {
ActiveFreeStreamingDataLoadJobCount:"uint",
AdditionalBlurriness:"uint",
ColorAdditionalBlurriness:"uint",
ColorAtlasSampleCountXFactor:"uint",
ColorAtlasSampleCountYFactor:"uint",
DataLoadJobCount:"uint",
HeightfieldAtlasSampleCountXFactor:"uint",
HeightfieldAtlasSampleCountYFactor:"uint",
InvisibleDetailReductionFactor:"float",
KeepPoolFullEnable:"bool",
LoadOccluderDataEnable:"bool",
MaskAdditionalBlurriness:"uint",
MaskAtlasSampleCountXFactor:"uint",
MaskAtlasSampleCountYFactor:"uint",
OccludedDetailReductionFactor:"float"
};

var TerrainStreamingTreeAsset = null;

var TerrainSubLayerData = null;

var TerrainUndergrowthType = null;

var TestCaseEntityData = {
Enabled:"bool",
Stable:"bool",
TestCaseName:"string",
TestGroup:"string",
TimeOut:"float"
};

var TestPointEntityData = {
OutputName:"string"
};

var TextUnlockPartData = {
MeshBlueprint:"CtrRef",
ShaderNodeName:"string"
};

var TextureArrayAsset = null;

var TextureAsset = null;

var TextureAssetUnlockPartData = {
Texture:"CtrRef"
};

var TextureAtlasAsset = null;

var TextureBaseAsset = null;

var TextureCompressSettings = {
DebugDrawAlphaOverlayScale:"float",
DebugDrawEnable:"bool",
TextureCompressJobPoolSize:"uint",
ViewMode:"TextureCompressQualityMode"
};

var TextureGroup = null;

var TextureReference = {
Texture:"CtrRef"
};

var TextureSettings = {
LoadingEnabled:"bool",
RenderTexturesEnabled:"bool",
SkipMipmapCount:"uint"
};

var TextureShaderParameter = {
ParameterName:"string",
Value:"CtrRef"
};

var TextureSliceUnlockPartData = {
SliceIndex:"int"
};

var TextureStreamingSettings = {
AsyncCreatesEnable:"bool",
ChunkLoadEnable:"bool",
DefragEnable:"bool",
DefragFrameTransferLimit:"uint",
DefragTransfersEnable:"bool",
DrawLoadingListEnable:"bool",
DrawPriorityListEnable:"bool",
DrawStatsEnable:"bool",
DrawTextureFormatStatsEnable:"bool",
DrawTextureGroupStatsEnable:"bool",
DumpLoadedList:"bool",
DxImmutableUsageEnable:"bool",
DynamicLoadingEnable:"bool",
Enable:"bool",
FadeMipmapsEnable:"bool",
FadeMipmapTime:"float",
ForceMipmap:"int",
ForceWantedEnable:"bool",
InstantUnloadingEnable:"bool",
ListViewPageIndex:"uint",
LoadMipmapsEnable:"bool",
MaxFrameTextureCreateCount:"uint",
MaxFrameTextureCreateSize:"uint",
MaxMipmapCount:"uint",
MaxPendingLoadCount:"uint",
MaxTextureSizeKb:"uint",
MinMipmapCount:"uint",
MinTextureSize:"uint",
MipmapBias:"float",
MipmapsEnable:"bool",
OnDemandPoolSize:"uint",
OnlyWantedInPool:"bool",
OverridePoolSize:"bool",
PoolEnable:"bool",
PoolHeadroomSize:"uint",
PoolSize:"uint",
PriorityThreshold:"float",
TextureUpdateEnable:"bool",
UpdateEnable:"bool",
UploadMipmapsEnable:"bool",
UseConditionalStreaming:"bool",
XenonFinalPoolSizeAdjustment:"uint",
XenonRetailPoolSizeAdjustment:"uint"
};

var TextureUnlockPartData = {
TextureReference:"CtrRef"
};

var TicketCounterEntityData = {
DecreaseTickets:"TicketDecreaseType",
HaltTicketLossOnEqualPointCount:"bool",
InitialTicketCount:"int",
ResetCapturePointsOnReset:"bool",
SetBestSquadSpawner:"bool",
SpawnAlwaysAllowed:"bool",
TeamId:"fb.TeamId",
TicketLossPerMin:"int",
TicketLossStart:"int",
TicketLossWhenLostAll:"int",
TicketLossWhenLostAllControlsPoint:"int",
TicketPercentages:"List<TicketCountPercentage>"
};

var TicketCountPercentage = {
MaxPercentOfTicketsLeft:"int",
TicketLossPerMin:"int"
};

var TickEvent = {
Position:"Vec3",
Time:"float"
};

var TimerNodeData = {
Mode:"TimerMode",
Period:"AudioGraphNodePort",
Progress:"AudioGraphNodePort",
Start:"AudioGraphNodePort",
Stop:"AudioGraphNodePort",
Tick:"AudioGraphNodePort"
};

var TimingConstantData = {
PriorityClasses:"List<CtrRef>",
SubsystemTimeParts:"SubsystemTimingConfigData",
UpdateTimePerFrame:"float"
};

var TimingViewCategories = {
TimingCategories:"List<CtrRef>"
};

var TimingViewCategory = {
CategoryName:"string",
CpuBudget:"float",
GpuBudget:"float",
Keywords:"List<string>",
SpuBudget:"float"
};

var TimingViewSettings = {
AutolockNameFilter:"string",
AutolockThreshold:"float",
AverageFrameCount:"int",
BarHeight:"uint",
BarMinTime:"double",
BarPad:"uint",
BarSyncProcessor:"int",
DrawBarsEnable:"bool",
DrawCpuLegendEnable:"bool",
DrawEnable:"bool",
DrawGpuLegendEnable:"bool",
DrawLegendEnable:"bool",
DrawOnlySummaryEnable:"bool",
DrawSpuLegendEnable:"bool",
Enable:"bool",
FilterEnable:"bool",
FilterEventName:"string",
FrameCount:"uint",
FrameDelayCount:"uint",
GpuBarFrameOffset:"int",
LegendColumnWidth:"int",
LegendDisplayMode:"int",
LegendScreenOffset:"int",
MaxCpuLegendColumnCount:"int",
MaxFrameEventCount:"uint",
MaxGpuLegendColumnCount:"int",
MaxSpuLegendColumnCount:"int",
SnoopEnable:"bool",
SnoopEventName:"string",
SnoopOnly:"bool",
SortByTime:"bool",
TimeOffset:"float",
TimeRange:"float"
};

var TonemapComponentData = {
BloomScale:"Vec3",
ChromostereopsisEnable:"bool",
ChromostereopsisOffset:"float",
ChromostereopsisScale:"float",
ExposureAdjustTime:"float",
MaxExposure:"float",
MiddleGray:"float",
MinExposure:"float",
Realm:"fb.Realm",
TonemapMethod:"fb.TonemapMethod"
};

var ToolData = {
IsAlwaysActive:"bool"
};

var TopPlayersEntityData = null;

var ToWorldSpaceTransformEntityData = {
In1:"LinearTransform",
Realm:"fb.Realm"
};

var TrackComponentData = {
ScrollFactor:"float"
};

var TrackPlayerEntityData = {
CheckPlayerAlive:"bool",
EnforceSharedCombatArea:"bool",
RandomizeTracker:"bool",
Reseted:"bool",
SnapHeightOffsetY:"float",
SnapHeightOnKilledDestroyed:"bool",
TrackMultiplePlayers:"bool",
UpdateFlagComponent:"bool"
};

var TrackWheelComponentData = {
BoneName:"string"
};

var TrajectoryEntityData = {
OutTransform:"LinearTransform"
};

var TransformBlendEntityData = {
BlendValue:"float",
BlendValue2:"float",
In1:"LinearTransform",
In2:"LinearTransform",
Realm:"fb.Realm"
};

var TransformEntityData = {
DefaultTransform:"LinearTransform",
Realm:"fb.Realm"
};

var TransformHubEntityData = {
In1:"LinearTransform",
In2:"LinearTransform",
In3:"LinearTransform",
In4:"LinearTransform",
In5:"LinearTransform",
In6:"LinearTransform",
In7:"LinearTransform",
In8:"LinearTransform",
Realm:"fb.Realm"
};

var TransformModifierEntityData = {
Forward:"ModifierAxis",
In:"LinearTransform",
InvertForward:"bool",
InvertLeft:"bool",
InvertUp:"bool",
Left:"ModifierAxis",
Realm:"fb.Realm",
Up:"ModifierAxis"
};

var TransformMultiplierEntityData = {
In1:"LinearTransform",
In2:"LinearTransform",
Realm:"fb.Realm"
};

var TransformPartPropertyTrackData = {
IsStatic:"bool",
KeyCount:"uint",
KeyStartIndex:"uint",
PostInfinity:"CurveInfinityType",
PreInfinity:"CurveInfinityType",
ResourceName:"string",
TransformPart:"fb.TransformPart",
Weighted:"bool"
};

var TransformPropertyTrackData = {
Values:"List<LinearTransform>"
};

var TransformSelectorEntityData = {
In1:"LinearTransform",
In2:"LinearTransform",
Realm:"fb.Realm",
Selection:"bool"
};

var TransformSnapToGroundEntityData = {
AlignWithGroundNormal:"bool",
DistanceToGround:"float",
In:"LinearTransform",
RayCastLength:"float",
RayCastUpOffset:"float",
Realm:"fb.Realm"
};

var TransformSplitterEntityData = {
Realm:"fb.Realm",
Transform:"LinearTransform"
};

var TreeBase = null;

var TreeNodeBase = {
NodeName:"string"
};

var TriggerEntityData = {
Delay:"float",
RunOnce:"bool"
};

var TriggerEventEntityData = null;

var TurbulanceData = {
Intensity:"float"
};

var TurnEffectData = {
BeginTime:"float",
EndTime:"float",
HoldTime:"float",
MaxPitchAngle:"float",
MaxRollAngle:"float",
SafeTime:"float",
VelocityThreshhold:"float",
YawVelocityThreshhold:"float"
};

var TurretControlConstantData = {
FastLookSpeed:"float",
NormalLookSpeed:"float",
SearchLookSpeed:"float",
SlowLookSpeed:"float"
};

var TurretData = {
AimingConstraints:"CtrRef",
FakeShootSpaceMaxDistance:"float",
FakeShootSpaceMinDistance:"float",
PitchP:"float",
YawP:"float"
};

var TurretRotationInfo = {
Channel:"RotationChannel",
InvertRotation:"bool",
MaxRotation:"float",
MinRotation:"float",
NormalizeRotation:"bool",
PhaseOffset:"float",
RotationAxis:"fb.RotationAxis"
};

var UavCameraData = {
CenterPoint:"UavCameraPointData",
FocusPoint:"UavCameraPointData",
Fov:"float",
RotationSpeed:"float",
RotationSpeedCurve:"List<CameraSineCurveData>",
UpWeightDistance:"float",
ViewAngle:"float",
ViewAngleCurve:"List<CameraSineCurveData>",
ViewDistance:"float",
ViewDistanceCurve:"List<CameraSineCurveData>",
ZoomDelay:"float",
ZoomFov:"float",
ZoomTransitionTime:"float"
};

var UavCameraPointData = {
AccelerationTime:"float",
MaxTime:"float",
MinTime:"float",
Speed:"float"
};

var UI3dIconCompData = {
CircularSnap:"bool",
DrawDistance:"float",
FadeDistance:"float",
FadeEndDistance:"float",
HorisontalOffset:"float",
IconSize:"float",
MaxCloseFade:"float",
MaxFarFade:"float",
MaxLookAtThreshold:"float",
MaxScaleMod:"float",
MaxTagUpdatesPerFrame:"int",
MaxXRotation:"float",
MaxYRotation:"float",
MinimumDrawDistance:"float",
MinimumFadeDistance:"float",
MinLookAtThreshold:"float",
MinLookAtThresholdDistance:"float",
OnlyShowSnapped:"bool",
PixelOffset:"Vec2",
ScaleDistance:"float",
ShowEngineerArmorThreshold:"float",
ShowLabelRange:"float",
ShowMedicHealthThreshold:"float",
ShowSupportAmmoThreshold:"float",
ShrinkSnapAnimationTime:"float",
SnapCenterYOffset:"float",
SnapIcons:"bool",
SnapSafeZone:"float",
TeamRadioDistance:"float",
TrackerHudRadiusX:"float",
TrackerHudRadiusY:"float",
VerticalOffset:"float",
VerticalOffsetMaxOffset:"float",
VerticalOffsetScaleFactor:"float"
};

var UI3dLaserTagCompData = null;

var UIActionData = {
ActionKeys:"List<string>"
};

var UIAlerttagCompData = null;

var UIAnimatedTextureAsset = {
FrameRate:"float",
TextureAtlas:"CtrRef",
TextureInfos:"List<UITextureAtlasInfo>"
};

var UIAsset = null;

var UIAssignmentsCompData = null;

var UIAudioEventAsset = {
AudioEventMappings:"List<UIAudioEventMapping>"
};

var UIAudioEventMapping = {
EventName:"string",
SoundAsset:"CtrRef"
};

var UIAwardDescription = {
IgnoreBuild:"bool"
};

var UIAwardsScreenCompData = {
TrackableAwardCol:"List<CtrRef>",
TrackableAwardRow:"List<CtrRef>"
};

var UIAwardsTrackingCompData = null;

var UIBarDataBinding = {
Color:"UIDataSourceInfo",
Refresh:"bool",
Value:"UIDataSourceInfo",
Visibility:"UIDataSourceInfo"
};

var UIBattleLogCompData = null;

var UIBundleAssetState = {
ResourceBundleName:"string",
StateName:"string",
UIState:"fb.UIState"
};

var UIBundlesAsset = {
UIBundleAssetStateList:"List<UIBundleAssetState>"
};

var UIButton = {
ButtonId:"string",
ButtonLabel:"string",
IsPremium:"bool"
};

var UIButtonDataBinding = {
ButtonsDatasource:"UIDataSourceInfo",
DefaultButtonSet:"UIButtonSet",
InputOnRelease:"bool",
InvertVisible:"bool",
Visibility:"UIDataSourceInfo",
Visible:"bool"
};

var UIButtonSet = {
Buttons:"List<UIButton>"
};

var UICameraCompData = null;

var UICampaignCompData = null;

var UICapturepointCompData = null;

var UICapturepointtagCompData = null;

var UIChatCompData = {
Settings:"CtrRef"
};

var UIColor = {
Color:"Vec4",
ColorType:"UIColorType"
};

var UIColorTemplate = {
Active:"bool",
Colors:"List<CtrRef>"
};

var UICombatAreaAsset = {
Prefix:"string"
};

var UICombatAreaCompData = {
OutOfAreaSidPrefix:"string"
};

var UICombatAreaEntityData = {
Asset:"CtrRef"
};

var UICompassDataBinding = {
Heading:"UIDataSourceInfo",
Objectives:"UIDataSourceInfo",
RadarSweepDegree:"UIDataSourceInfo",
ShowAirRadar:"UIDataSourceInfo",
Visibility:"UIDataSourceInfo"
};

var UIComponentData = {
DataSources:"List<string>",
ShortName:"string",
UpdatesPerSecond:"int",
UpdateType:"UIUpdateType"
};

var UIConnectionCompData = null;

var UICoopCompData = null;

var UICoopEndOfRoundCompData = null;

var UICoopLevelDescription = {
Debriefing:"string",
DevTime:"int",
UnlockedByLevels:"List<string>"
};

var UICreditsAsset = {
Pages:"List<UICreditsPage>"
};

var UICreditsCompData = null;

var UICreditsLine = {
Text:"string",
TextType:"UICreditsTextType"
};

var UICreditsPage = {
Header1:"string",
Header2:"string",
Lines:"List<UICreditsLine>"
};

var UICrosshairDataBinding = {
Dispersion:"UIDataSourceInfo",
DispersionBaseOffset:"float",
Visibility:"UIDataSourceInfo",
Zoomed:"UIDataSourceInfo"
};

var UICustomizationCompData = {
NetworkThrottleTimer:"float",
SoldierOffset:"Vec3",
SoldierRotation:"Vec3",
VehicleRotation:"Vec3"
};

var UIDamageIndicatorCompData = {
MaxUpdateTime:"float"
};

var UIDataBinding = null;

var UIDataInterfaceCompData = null;

var UIDataSourceInfo = {
DataCategory:"CtrRef",
DataKey:"int",
DataName:"string",
UpdateOnInitialize:"bool",
UseDirectAccess:"bool"
};

var UIDelayedCommandsCompData = null;

var UIDetailedServerInfoCompData = {
Settings:"List<ServerInfoSetting>"
};

var UIDirectAccessCompData = null;

var UIDistanceFieldAsset = {
DistanceFieldTexture:"CtrRef"
};

var UIDogTagDescription = {
IgnoreBuild:"bool"
};

var UIDynamicDataBinding = {
Bindings:"List<UIDataSourceInfo>",
Refresh:"bool"
};

var UIDynamicTextureCompData = null;

var UIEndOfRoundCompData = null;

var UIEndOfRoundEntityData = {
EorTime:"float",
PreEorTime:"float"
};

var UIEventAsset = {
Category:"string",
EventList:"List<string>"
};

var UIFlagCounterCompData = null;

var UIFontAsset = {
CompleteJapanese:"bool",
CompleteKorean:"bool",
CompleteTraditionalChinese:"bool",
NumericsOnly:"bool",
ScaleformFontName:"List<string>",
SourceFile:"string",
TextDatabase:"CtrRef"
};

var UIFontCollection = {
BundleKind:"ResourceBundleKind",
Fonts:"List<CtrRef>",
Language:"LanguageFormat",
TextDatabase:"CtrRef"
};

var UIFontMapping = {
FontLongName:"string",
ScaleformFontName:"List<string>"
};

var UIFontMappingCollection = {
Fonts:"List<UIFontMapping>",
TextDatabase:"List<CtrRef>"
};

var UIFriendsCompData = null;

var UIGameModeDescription = {
Abbreviation:"string",
BattlelogId:"int",
Desc:"string",
Identifier:"string",
Name:"string",
TexturePath:"string",
Variations:"List<GameModeVariation>"
};

var UIGameQueueCompData = null;

var UIGeneralCompData = null;

var UIGenericItemDescription = {
Identifier:"string",
ImagePath:"string"
};

var UIGeoLatitude = {
Degrees:"int",
Minuites:"int",
Seconds:"int"
};

var UIGeoLongitude = {
Degrees:"int",
Minuites:"int",
Seconds:"int"
};

var UIGPSPosition = {
Latitude:"double",
Longitude:"double",
SeaLevelOffset:"double"
};

var UIGraphAsset = {
AudioEventMappings:"CtrRef",
BundleAssetName:"string",
Connections:"List<CtrRef>",
EventList:"List<CtrRef>",
GlobalNode:"CtrRef",
IsPs3UIGraphAsset:"bool",
IsWin32UIGraphAsset:"bool",
IsXenonUIGraphAsset:"bool",
Modal:"bool",
Nodes:"List<CtrRef>",
ProtectScreens:"bool"
};

var UIGraphEntityData = {
Events:"List<EventSpec>",
GraphAsset:"CtrRef",
GraphPriority:"UIGraphPriority",
PopPreviousGraph:"bool",
State:"UIState"
};

var UIGraphPipelineSettings = {
OneBundlePerGraph:"bool"
};

var UIGunMasterCompData = null;

var UIHardcoreCompData = null;

var UIHUDMessageBinding = {
MessageQuery:"UIDataSourceInfo",
NumberOfRows:"int",
VisibilityQuery:"UIDataSourceInfo"
};

var UIImageDataBinding = {
ImageData:"UIDataSourceInfo",
StaticImageUrl:"string",
Visibility:"UIDataSourceInfo",
Visible:"bool"
};

var UIIngameMenuCompData = null;

var UIInputCompData = null;

var UIInputEventNodePort = {
InputEventType:"UIInputAction"
};

var UIInstallHDContentCompData = null;

var UIInteractionCompData = {
PickupShrinkSnap:"bool",
RepairSnapCircle:"bool",
RepairSnapDistance:"float"
};

var UIInterruptFlow = {
interruptFlow:"List<InterruptFlow>"
};

var UIInventoryCompData = null;

var UIItemDescription = {
IgnoreBuild:"bool",
ItemIds:"List<uint>"
};

var UIItemDescriptionAsset = {
Children:"List<CtrRef>",
Items:"List<CtrRef>"
};

var UIKillCardCompData = null;

var UIKillCounterCompData = null;

var UIKitCompData = null;

var UIKitItemDescription = {
Category:"string",
Description:"string",
HiddenInProgression:"bool",
HudIcon:"UIHudIcon",
IconTexturePath:"string",
Name:"string",
NotExplicitelySelectable:"bool",
TexturePath:"string",
UnlockName:"string",
UnlockTexturePath:"string"
};

var UILeaderboardCompData = null;

var UILeaderboardData = {
Description:"string",
Name:"string"
};

var UILevelCompData = null;

var UILevelDescription = {
LevelName:"string",
TexturePath:"string",
ThumbnailTexturePath:"string"
};

var UILevelDescriptionComponent = {
CreditsAssets:"List<CtrRef>",
GPSPosition:"UIGPSPosition",
HintAsset:"CtrRef",
IsMenuLevel:"bool",
LevelCompledStatData:"UILevelStatData",
LevelImagePath:"string",
LevelScoreStatData:"UILevelStatData",
LoadingImagePath:"string",
LoadingMusic:"CtrRef",
LoadingMusicPath:"string",
MinimapData:"UIMinimapData",
MPLoadingAssetPath:"string",
SortIndex:"int",
SPLoadingAssetPath:"string"
};

var UILevelLocation = null;

var UILevelLocationDescription = {
Description:"string",
Name:"string",
TexturePath:"string"
};

var UILevelSpecificPageHeader = {
Header:"string",
LevelNameSID:"string",
SubHeader:"string"
};

var UILevelStatData = {
StatEasy:"string",
StatHard:"string",
StatHardcore:"string",
StatMedium:"string"
};

var UILicenseDescription = {
LicenseId:"string",
PopupText:"string"
};

var UILifeCounterCompData = null;

var UILightExposureComponentData = null;

var UIListDataBinding = {
ClearListAtNavigationEvent:"bool",
DataIncludesButtonLayout:"bool",
DefaultHighlightedRow:"DefaultSelectionItem",
DisabledRows:"string",
EmptyRowType:"UIListEmptyRowType",
FireHighlightOnMouseOut:"bool",
HighLightOnUpdate:"bool",
KeepScrollOffset:"bool",
ListIndex:"int",
ListQuery:"UIDataSourceInfo",
NavigationType:"UIListNavigationType",
NavigationTypeSource:"UIDataSourceInfo",
RowSpacing:"int",
RowType:"UIListRowType",
ScreenRotationEnabled:"bool",
SendIndexWithEvent:"bool",
SpinnerEnabled:"bool",
StaticItems:"List<StaticListItem>",
UnFocusMode:"UIListUnFocusMode",
Use3DSelection:"bool",
UseScrollBar:"bool",
Visible:"bool"
};

var UIListItem = {
DataUpdate:"UIDataSourceInfo",
DefaultIsEnabled:"bool",
DefaultIsVisible:"bool",
IsEnabled:"UIDataSourceInfo",
IsVisible:"UIDataSourceInfo",
Label:"string",
ToggleItems:"UIDataSourceInfo"
};

var UILoadLevelCompData = null;

var UILocalizeCompData = null;

var UIManageMapsCompData = null;

var UIManagePlayersCompData = null;

var UIManageServerPresetsCompData = null;

var UIManDownCompData = {
DelayManDownTextTime:"float"
};

var UIManualCompData = null;

var UIMapmarkerCompData = {
ProximityIntervals:"List<int>"
};

var UIMapmarkertagCompData = null;

var UIMatchCompData = null;

var UIMatchesListCompData = null;

var UIMemCardCompData = null;

var UIMessageCompData = {
ChatMessageInfo:"MessageInfo",
ForceSubtitlesForTheseLevels:"List<string>",
ForceSubtitlesOffForTheseLevels:"List<string>",
GameMessageInfo:"MessageInfo",
GunMasterMessageInfo:"MessageInfo",
KillMessageInfo:"MessageInfo",
KillScoreMessageInfo:"MessageInfo",
LocalKillMessageInfo:"MessageInfo",
LogLinesMessageInfo:"MessageInfo",
OutOfBoundsMessageInfo:"MessageInfo",
RewardMessageInfo:"MessageInfo",
ScoreAggregateTime:"float",
ScoreMajorMessageInfo:"MessageInfo",
ScoreMessageInfo:"MessageInfo",
ScoreMinorMessageInfo:"MessageInfo",
ServerAdminYellMessageInfo:"MessageInfo",
StaticMessageInfo:"MessageInfo",
SubtitleMessageInfo:"MessageInfo",
TooltipMessageInfo:"MessageInfo"
};

var UIMessageTriggerData = {
Realm:"fb.Realm"
};

var UIMinimapCompData = null;

var UIMinimapConfig = {
CameraInterpolationTime:"float",
CameraPanSensitivity:"float",
CombatAreaCameraDelay:"float",
CombatAreaFadeSpeed:"float",
DisableDefaultState:"bool",
MaxVelocity:"float",
MinVelocity:"float",
VelocityModifier:"float",
ZoomStates:"List<UIMinimapZoomConfig>"
};

var UIMinimapData = {
AirRadarFadeTexture:"CtrRef",
AirRadarRange:"float",
CombatAreaAlphaThreshold:"float",
CombatAreaColor:"Vec4",
CombatAreaDistanceScale:"float",
CombatAreaFadeSpeed:"float",
CombatAreaMultiplyTexture:"CtrRef",
CombatAreaMultiplyWrapAmount:"Vec2",
CombatAreaScale:"float",
Detail:"UIMinimapDistanceFieldParams",
DetailTexture:"CtrRef",
DetailTextureTint:"Vec4",
FadeTexture:"CtrRef",
StreamingMinimapDelay:"float",
StreamingMinimapTransitionSpeed:"float",
UseCombatAreaTexture:"bool",
UseStreamingMinimap:"bool",
Vegetation:"UIMinimapDistanceFieldParams",
WorldCenter:"Vec2",
WorldRange:"float",
WorldRotation:"float",
WorldSize:"float"
};

var UIMinimapDistanceFieldParams = {
AlphaThreshold:"float",
ColorTint:"Vec4",
DistanceField:"CtrRef",
DistanceScale:"float",
OutlineColor:"Vec4",
OutlineInner:"float",
OutlineOuter:"float"
};

var UIMinimapIconTexture = {
IconType:"UIHudIcon",
States:"List<UIMinimapIconTextureState>"
};

var UIMinimapIconTextureAtlasAsset = {
Icons:"List<UIMinimapIconTexture>",
TextureAtlas:"CtrRef"
};

var UIMinimapIconTextureState = {
FrameRate:"float",
ShouldRotate:"bool",
State:"UIIconState",
TextureInfos:"List<UIMinimapIconUv>"
};

var UIMinimapIconUv = {
MaxUv:"Vec2",
MinUv:"Vec2"
};

var UIMinimapVolumeEntityData = {
Asset:"CtrRef",
IsDefault:"bool"
};

var UIMinimapZoomConfig = {
Data:"MinimapData",
State:"UIMinimapZoomState"
};

var UIModDescription = {
Desc:"string",
FullName:"string",
Identifier:"string",
ShortName:"string"
};

var UINametag = {
HealthFadeDistance:"float",
HealthMaxDistance:"float",
Icon:"UIHudIcon",
IconFadeDistance:"float",
IconMaxDistance:"float",
TargetInTimer:"float",
TargetOutTimer:"float",
TextColor:"Vec3",
TextFadeDistance:"float",
TextMaxDistance:"float"
};

var UINametagCompData = {
EnemyTint:"Vec4",
FriendlyTint:"Vec4",
HealthBarSize:"float",
NameFontSize:"float",
NameGlowSize:"float",
OrderCooldown:"int",
SquadTint:"Vec4",
TooltipCooldown:"int"
};

var UINametagCoopCompData = null;

var UINametagSPCompData = null;

var UINavigationCompData = null;

var UINestedListDataBinding = {
ClearListAtNavigationEvent:"bool",
DataIncludesButtonLayout:"bool",
DefaultHighlightedRow:"DefaultSelectionItem",
EmptyRowType:"UIListEmptyRowType",
HighLightOnUpdate:"bool",
InvertVisible:"bool",
KeepScrollOffset:"bool",
ListIndex:"int",
NavigationType:"UIListNavigationType",
NestedLists:"List<NestedList>",
RowSpacing:"int",
RowType:"UIListRowType",
ScreenRotationEnabled:"bool",
SelectorWidth:"int",
SendIndexWithEvent:"bool",
Use3DSelection:"bool",
UseScrollBar:"bool",
Visibility:"UIDataSourceInfo",
Visible:"bool"
};

var UINetworkTextInfo = {
DisplayTime:"float",
StringId:"string"
};

var UINodeConnection = {
NumScreensToPop:"int",
SourceNode:"CtrRef",
SourcePort:"CtrRef",
TargetNode:"CtrRef",
TargetPort:"CtrRef"
};

var UINodeData = {
IsRootNode:"bool",
Name:"string",
ParentGraph:"CtrRef",
ParentIsScreen:"bool"
};

var UINodePort = {
AllowManualRemove:"bool",
InstanceName:"string",
Name:"string",
Query:"UIWidgetEventID"
};

var UIntRange = {
Max:"uint",
Min:"uint"
};

var UINumberDataBinding = {
NumValue:"int",
Refresh:"bool",
Value:"UIDataSourceInfo"
};

var UIObjectivesCompData = null;

var UIOnDemandFontComponentData = {
FontCollections:"List<CtrRef>"
};

var UIPageHeaderBinding = {
Header:"UIDataSourceInfo",
Icon:"UIDataSourceInfo",
LevelSpecificHeaders:"List<UILevelSpecificPageHeader>",
StaticHeader:"string",
StaticIcon:"string",
StaticSubHeader:"string",
SubHeader:"UIDataSourceInfo"
};

var UIPartData = null;

var UIPartProperties = {
CompensateFreelook:"bool",
Frequency:"float",
Identifier:"UIPartIdentifier",
Range:"float"
};

var UIPartPropertyList = {
HudPropertyList:"List<UIPartProperties>"
};

var UIPersistenceCompData = null;

var UIPlaygroupCompData = null;

var UIPopupButton = {
InputConcept:"UIInputAction",
Label:"string"
};

var UIPopupCompData = null;

var UIPopupTextInput = {
DefaultValue:"string",
Id:"string",
IsPassword:"bool",
Label:"string"
};

var UIPostProcessComponentData = {
BShift:"float",
Distort:"float",
Enabled:"bool",
GShift:"float",
Highlight:"float",
HighlightThreshold:"float",
NoiseTexture:"CtrRef",
RShift:"float",
TimeScale:"float",
TweakMode:"bool",
XPower:"float",
YPower:"float"
};

var UIPremiumCompData = null;

var UIPreRoundCompData = null;

var UIPresenceCompData = null;

var UIQueuedEventsCompData = {
InitialQueueDelay:"float",
ShowUnlocksBecomingAvailable:"bool"
};

var UIRankDescription = {
IgnoreBuild:"bool"
};

var UIRenderCompData = {
AlphaAnimationSpeed:"float",
AlphaMax:"float",
AlphaMin:"float",
AlphaOffset:"float",
BackgroundRect0:"Vec4",
BackgroundRect1:"Vec4",
BgTexture1:"CtrRef",
BgTexture2:"CtrRef"
};

var UIRightClickCompData = null;

var UIScoreboardCompData = {
MaxUpdateInterval:"float"
};

var UIScreenAsset = null;

var UIScreenEventCompData = null;

var UIScreenshotCompData = {
AutoResizeImage:"bool",
ResizeImageHeight:"uint",
ResizeImageWidth:"uint",
ScreenshotInfos:"List<ScreenshotInfo>"
};

var UIServerBrowserCompData = null;

var UIServerListCompData = null;

var UIServerListFilterBarCompData = null;

var UISessionDataComponentData = null;

var UISettings = {
Bundles:"CtrRef",
DataCop:"DataCopSettings",
DrawEnable:"bool",
Language:"LanguageFormat",
OneBundlePerGraph:"bool",
ProfileOptions:"CtrRef",
System:"UISystemType"
};

var UISettingsCompData = {
SettingsPages:"List<UISettingsPage>"
};

var UISettingsGroup = {
NameSid:"string",
ScreenColumn:"int",
SettingsItems:"List<UISettingsItem>"
};

var UISettingsItem = {
NameSid:"string",
Setting:"CtrRef",
StartEndSymbols:"UISettingSymbols"
};

var UISettingsPage = {
NameSid:"string",
SettingsGroups:"List<UISettingsGroup>"
};

var UISetupServerWizardCompData = {
PasswdMinLen:"int"
};

var UISetValueData = {
BoolValue:"bool",
DataSource:"UIDataSourceInfo",
FloatValue:"float",
IntValue:"int",
StringValue:"string"
};

var UISoldierCompData = {
CriticalHealthThreshold:"float",
EKGLineAlpha:"float",
EKGLineThickness:"float",
FocusAbilityIndex:"int",
HitShaderDamageMultiplier:"float",
HitShaderGradientDurationMultiplier:"float",
HitShaderIndicatorDurationMultiplier:"float",
HitShaderMaxDamage:"float",
HitShaderMinDamage:"float",
RangerPTProgramAbilityIndex:"int",
ShockTraumaAbilityIndex:"int",
SpawnOnSquadLeaders:"bool",
UseSquadSpawn:"bool",
UseVehicleTeamSpawn:"bool"
};

var UISoundCompData = null;

var UISpawnLogicCompData = null;

var UISpawnPointCompData = null;

var UISpectatorCompData = null;

var UISquadCompData = {
HideLocalSquadBoostData:"bool",
Squad1:"string",
Squad10:"string",
Squad11:"string",
Squad12:"string",
Squad13:"string",
Squad14:"string",
Squad15:"string",
Squad16:"string",
Squad17:"string",
Squad18:"string",
Squad19:"string",
Squad2:"string",
Squad20:"string",
Squad21:"string",
Squad22:"string",
Squad23:"string",
Squad24:"string",
Squad25:"string",
Squad26:"string",
Squad27:"string",
Squad28:"string",
Squad29:"string",
Squad3:"string",
Squad30:"string",
Squad31:"string",
Squad32:"string",
Squad4:"string",
Squad5:"string",
Squad6:"string",
Squad7:"string",
Squad8:"string",
Squad9:"string"
};

var UIStateAsset = {
ActionscriptLibraries:"List<CtrRef>",
ActionscriptNames:"List<string>",
StateName:"string",
StatePath:"string",
UIComponents:"List<CtrRef>"
};

var UIStatsCompData = null;

var UIStoreCompData = null;

var UITaggedVehicleCrosshair = {
MaxDistance:"float",
MaxSize:"int",
MinDistance:"float",
MinSize:"int"
};

var UITeamCompData = null;

var UITeamSupportTagCompData = null;

var UITextDatabase = {
BinaryChunk:"GUID",
BinaryChunkSize:"uint",
HistogramChunk:"GUID",
HistogramChunkSize:"uint",
Language:"LanguageFormat"
};

var UITextDataBinding = {
OverrideDirectAccess:"bool",
Refresh:"bool",
StaticText:"string",
TextData:"UIDataSourceInfo",
Visibility:"UIDataSourceInfo"
};

var UITextureAtlasInfo = {
MaxUv:"Vec2",
MinUv:"Vec2"
};

var UITextureStreamingComponentData = null;

var UITicketCounterCompData = null;

var UITrackingtagCompData = {
ShowUnlockedLockAlways:"bool",
ShowUnlockedLockOnHeat:"bool",
ShowUnlockedLockOnLaserPainted:"bool",
ShowUnlockedLockOnRadar:"bool"
};

var UITrainingCompData = null;

var UIUnlocksCompData = null;

var UIVehicleCompData = {
RangeMeterUpdatesPerSecond:"int"
};

var UIVehicleDescription = {
Description:"string",
Name:"string",
TexturePath:"string"
};

var UIVehicleUnlockDescription = {
Category:"string",
Description:"string",
HiddenInProgression:"bool",
IconTexturePath:"string",
Name:"string",
NotExplicitelySelectable:"bool",
TexturePath:"string",
UnlockTexturePath:"string"
};

var UIVehicleWeaponDescription = {
Name:"string"
};

var UIVoiceCompData = {
HudMaxSpeakers:"uint"
};

var UIWeaponAccessoryDescription = {
Category:"string",
CoreAccessory:"bool",
Description:"string",
HiddenInProgression:"bool",
IconTexturePath:"string",
MiscTexturePath:"string",
Name:"string",
TexturePath:"string",
UnlockTexturePath:"string"
};

var UIWeaponCompData = {
MaxHitIndicatorLimit:"float",
MinHitIndicatorLimit:"float",
NormalHitIndicatorLimit:"float"
};

var UIWeaponDescription = {
Ammo:"string",
Category:"string",
Description:"string",
FireModeAuto:"bool",
FireModeBurst:"bool",
FireModeSingle:"bool",
HiddenInProgression:"bool",
IconTexturePath:"string",
Name:"string",
Range:"string",
RateOfFire:"string",
TexturePath:"string",
UnlockName:"string",
UnlockTexturePath:"string"
};

var UIWidgetAsset = {
WidgetEvents:"List<WidgetEventQueryPair>"
};

var UIWidgetEventCompData = null;

var UIWidgetMovieCompData = null;

var UIWidgetPathBinding = {
Visibility:"UIDataSourceInfo",
WidgetPathQuery:"UIDataSourceInfo"
};

var UIWidgetProperty = {
Name:"string",
Value:"string"
};

var UnderFireTriggerEntityData = {
CoolDownTime:"float",
DisableIfTrackEntityIsLost:"bool",
IndicateHit:"bool",
Radius:"float",
RandomYaw:"bool",
TriggeredBy:"AreaTriggerInclude",
TriggerOnMaterialOnly:"CtrRef"
};

var UnlockableColorCollection = {
DefaultValue:"CtrRef",
PossibleValues:"List<CtrRef>"
};

var UnlockableProjectile = {
InitialSpeed:"Vec3",
Projectile:"CtrRef",
ProjectileData:"CtrRef",
Unlock:"CtrRef"
};

var UnlockableShaderParameterValueCollection = {
ShaderParameterName:"string"
};

var UnlockableTextureCollection = {
DefaultValue:"CtrRef"
};

var UnlockableTextureSliceCollection = {
DefaultValue:"int",
PossibleValues:"List<CtrRef>"
};

var UnlockAsset = {
LinkedTo:"List<CtrRef>"
};

var UnlockAssetBase = {
AutoAvailable:"bool",
AvailableForPlayer:"UnlockAvailability",
DebugUnlockId:"string",
HiddenInProgression:"bool",
Identifier:"uint",
NextLevelUnlockAsset:"CtrRef",
UnlockScore:"uint",
UnlockUserData:"CtrRef"
};

var UnlockAssetPair = {
Result:"CtrRef",
Second:"CtrRef"
};

var UnlockComponentData = {
InvertUnlockTest:"bool",
UnlockableFromAllEntries:"bool",
UnlockAsset:"CtrRef",
UnlockDataKey:"uint"
};

var UnlockUserDataBase = null;

var UnlockValuePair = {
Id:"string"
};

var UnlockWeaponAndSlot = {
Slot:"WeaponSlot",
UnlockAssets:"List<CtrRef>",
Weapon:"CtrRef"
};

var UpdateAgeData = {
Lifetime:"float"
};

var UpdateAlphaLevelMaxData = {
MaxLevel:"float"
};

var UpdateAlphaLevelMinData = {
MinLevel:"float"
};

var UpdateAlphaLevelScaleData = {
Exponent:"float"
};

var UpdateCameraProximityData = {
ForwardOffset:"float",
Size:"Vec3"
};

var UpdateClipScaleData = {
Lookup:"List<short>"
};

var UpdateColorData = {
Color:"Vec3"
};

var UpdateLinearVelocityData = null;

var UpdateOrientationData = null;

var UpdateRotationData = null;

var UpdateSizeData = {
Pivot:"Vec2"
};

var UpdateSizeXData = null;

var UpdateSizeYData = null;

var UpdateSizeZData = null;

var UpdateTextureCoordsData = {
TextureBlendValue:"float",
TextureInfo1:"EmitterTextureInfo"
};

var UpdateTransparencyData = {
CullThreshold:"float"
};

var UrgencyModifierData = {
Modifier:"float",
Name:"string"
};

var UrgencySetData = {
Name:"string",
UrgencyModifiers:"List<UrgencyModifierData>"
};

var UrgencyUserData = {
Base:"CtrRef",
ModifierSets:"List<CtrRef>",
UrgencyModifiers:"List<UrgencyModifierData>"
};

var UserComponentData = null;

var UserMusicArbiterNodeData = {
In:"AudioGraphNodePort",
Out:"AudioGraphNodePort",
Plugin:"SoundGraphPluginRef"
};

var UserMusicControllerNodeData = {
Override:"AudioGraphNodePort",
Restore:"AudioGraphNodePort",
RestoreOnDeactivated:"bool"
};

var ValueAtX = {
Value:"float",
X:"float"
};

var ValueDebugNodeData = {
Values:"List<CtrRef>"
};

var ValueSelectorEntry = {
CaseValue:"float",
Input:"AudioGraphNodePort"
};

var ValueSelectorNodeData = {
DefaultCaseValue:"float",
Inputs:"List<CtrRef>",
Out:"AudioGraphNodePort",
Value:"AudioGraphNodePort"
};

var ValueUnlockAsset = {
UnlockValues:"List<CtrRef>"
};

var VaultWaypointData = {
VaultTask:"AILocoVaultTaskData"
};

var Vec2PropertyTrackData = {
Values:"List<Vec2>"
};

var Vec2RecordingData = {
Values:"List<Vec2>"
};

var Vec3EntityData = {
DefaultValue:"Vec3",
Realm:"fb.Realm"
};

var Vec3MathOpEntityData = {
Operators:"List<Vec3MathOp>",
Realm:"fb.Realm",
Vec3MathOpEntityData: "readonly",
Vec3MathOp: "uint"
};

var Vec3PropertyTrackData = {
Values:"List<Vec3>"
};

var Vec3RecordingData = {
Values:"List<Vec3>"
};

var Vec4PropertyTrackData = {
Values:"List<Vec4>"
};

var Vec4RecordingData = {
Values:"List<Vec4>"
};

var VecSplitterEntityData = {
Realm:"fb.Realm",
Vec3:"RimeLib.Frostbite.Containers.Vec3",
Vec4:"RimeLib.Frostbite.Containers.Vec4"
};

var VectorArrayShaderParameter = {
ParameterName:"string",
ParameterType:"ShaderParameterType",
Values:"List<Vec4>"
};

var VectorShaderParameter = {
ParameterName:"string",
ParameterType:"ShaderParameterType",
Value:"Vec4"
};

var VectorShapeData = {
AllowRoll:"bool",
IsClosed:"bool",
Normals:"List<Vec3>",
Points:"List<Vec3>",
Tension:"float"
};

var VegetationBaseEntityData = {
BasePoseTransforms:"List<LinearTransform>",
BasePoseTranslations:"List<Vec3>",
Hierarchy:"List<int>",
Mesh:"CtrRef",
PhysicsData:"CtrRef",
ShadowMesh:"CtrRef"
};

var VegetationSystemSettings = {
BatchDrawEnable:"bool",
DestructionEnabled:"bool",
DissolveEnable:"bool",
DrawEnable:"bool",
DrawNodes:"bool",
Enable:"bool",
EnableJobs:"bool",
ForceShadowLod:"int",
JobCount:"uint",
JointTensionLimit:"float",
JointTensionLimitIndex:"int",
LocalInfluencesEnabled:"bool",
MaxActiveDistance:"float",
MaxPreSimsPerJob:"uint",
ShadowMeshEnable:"bool",
SimulateServerSide:"bool",
SimulationMemKbClient:"uint",
SimulationMemKbServer:"uint",
SubDestructionEnabled:"bool",
TimeScale:"float",
UseShadowLodOffset:"bool",
WindStrength:"float",
WindVariation:"float",
WindVariationRate:"float"
};

var VegetationTreeEntityData = {
BranchHitpoints:"float",
BranchL2Hitpoints:"float",
BranchStiffness:"float",
BranchStiffnessL2:"float",
BreakableJointThreshold:"float",
BulletImpactEffect:"CtrRef",
ClientSideOnly:"bool",
ColiPlaneDepth:"float",
CollisionEffect:"CtrRef",
CollisionImpactMultiplier:"float",
ConstraintStemB1:"bool",
ConstraintStemB2:"bool",
FallDirectionEnd:"float",
FallDirectionStart:"float",
ForceFullSim:"bool",
GroundImpactEffect:"CtrRef",
ImpactThreshold:"float",
LocalWindEffect:"CtrRef",
PartsTimeToLive:"float",
ShadowLODOffset:"uint",
SplashDistantEffect:"CtrRef",
SplashNearEffect:"CtrRef",
StemBoneCount:"int",
StemHitpoints:"float",
StemPhysicsWidth:"float",
StemRipEffect:"CtrRef",
StemStiffness:"float",
StemStiffnessSpread:"float",
TreeFallEffect:"CtrRef",
UseImpactThreshold:"bool",
UsePhysicsShapes:"bool",
WindBranch:"float",
WindBranchL2:"float",
WindStem:"float"
};

var VehicleAsset = null;

var VehicleBlueprint = null;

var VehicleCameraControlBinding = {
EnableAnimatedVehicleCamera:"AntRef"
};

var VehicleCameraData = {
FixedAngleZ:"bool",
FixedPosition:"bool",
MoveToPosition:"Vec3",
MoveToPositionSlopeFactor:"Vec3",
PositionFactor:"float",
ResetDistance:"float",
RotationFactor:"Vec3",
TargetOffset:"Vec3",
TargetOffsetSlopeFactor:"Vec3",
UseTerrainAdjustment:"bool"
};

var VehicleComponentData = null;

var VehicleConfigData = {
AeroDynamicPhysics:"CtrRef",
AirDensity:"float",
AirDragArea:"float",
AntiRollBars:"fb.AntiRollBars",
BodyMass:"float",
CenterOfMass:"Vec3",
CenterOfMassHandlingOffset:"Vec3",
CoefficientOfAirFriction:"float",
ConstantForce:"List<ConstantForceData>",
DownForceBaseFactor:"float",
DownForceWheelFactor:"float",
FloatPhysics:"CtrRef",
GravityModifier:"float",
InertiaModifier:"Vec3",
Input:"VehicleInputData",
InvertPitchAllowed:"bool",
MotionDamping:"CtrRef",
MotorbikePhysics:"CtrRef",
ParachutePhysics:"CtrRef",
Stabilizer:"CtrRef",
Stabilizers:"List<StabilizerSettings>",
StandStillLowSpeedTimeLimit:"float",
StaticFrictionBreakCollisionMod:"float",
StaticFrictionBreakVelocityMod:"float",
UseDownForce:"bool",
UseDownForceWheelFactor:"bool",
UseGearbox:"bool",
UseMotorcycleControl:"bool",
UseStandStillBrake:"bool",
UseStandStillSleep:"bool",
UseTurnAroundForce:"bool",
UseWindResistance:"bool",
VehicleModeAtReset:"VehicleMode",
VehicleModeChangeEnteringTime:"float",
VehicleModeChangeLeavingTime:"float",
VehicleModeChangeStartingTime:"float",
VehicleModeChangeStoppingTime:"float",
WindResistanceBaseFactor:"float",
WindResistanceVelocityFactor:"float",
WindResistanceVelocityFactorMax:"float",
WindResistanceVelocityFactorMin:"float",
YawMax:"float",
YawMin:"float"
};

var VehicleCustomizationAsset = {
Customization:"CtrRef"
};

var VehicleDeployWeaponData = {
CanRemoteEnterVehicle:"bool",
CheckClearSky:"bool",
DeployAreaGroundFlatness:"float",
DeployAreaGroundRayLength:"float",
DeployAreaRadius:"float",
PreviewObject:"CtrRef",
UsePreview:"bool"
};

var VehicleEntityData = {
AllowVehicleOutsideCombatAreas:"bool",
AngleOfImpact:"AngleOfImpactData",
ArmorMultiplier:"float",
BelowWaterDamageDelay:"float",
ChoseExitPointByDirection:"bool",
CockpitMesh:"CtrRef",
ControllableType:"string",
CriticalDamageTime:"float",
CriticallyDamagedEffect:"CtrRef",
CriticallyDamagedEffectPosition:"Vec3",
DecayDelay:"float",
DecayRate:"float",
DisabledDamageThreshold:"float",
EmergencyRepairHealth:"float",
EnableGroundmapLighting:"bool",
EquipmentFakeVehicle:"bool",
ExitAllowed:"bool",
ExitCameraSwitchDelay:"float",
ExitDirectionSpeedThreshold:"float",
ExitSpeedThreshold:"float",
Explosion:"CtrRef",
ExplosionPacksAttachable:"bool",
FLIRKeyColor:"Vec3",
FLIRValue:"float",
ForegroundRenderCockpitMesh:"bool",
FrontHealthZone:"VehicleHealthZoneData",
HealthZonesShareDamage:"bool",
HighAltitudeLockHeight:"float",
HudData:"VehicleHudData",
IgnoreSoldierCollisionNormal:"bool",
InteractionOffset:"Vec3",
IsAffectedByEMP:"bool",
IsLockable:"bool",
KillSoldierCollisionSpeedThreshold:"float",
LeftHealthZone:"VehicleHealthZoneData",
LockingTimeMultiplier:"float",
MaxPlayersInVehicle:"int",
Mesh:"CtrRef",
MinSpeedForMineActivation:"float",
MotionBlurMask:"bool",
MPMode:"MPModeData",
NameSid:"string",
NametagHeightOffset:"float",
NametagHeightScale:"float",
NeverReportVehicleAsEmpty:"bool",
PreDestructionDamageThreshold:"float",
PreExplosionEffect:"CtrRef",
PreExplosionEffectPosition:"Vec3",
PreExplosionTime:"float",
RearHealthZone:"VehicleHealthZoneData",
RegenerationDelay:"float",
RegenerationDelayMultiplier:"float",
RegenerationRate:"float",
RegenerationRateMultiplier:"float",
RenderVehicleMesh:"bool",
RightHealthZone:"VehicleHealthZoneData",
ShowPlayerHealth:"bool",
Sound:"CtrRef",
ThrowOutSoldierInsideOnWaterDamage:"bool",
UpsideDownAngle:"float",
UpsideDownDamage:"float",
UpsideDownDamageDelay:"float",
UseAsTeamSpawner:"bool",
UseDriverEyePosForNametagPos:"bool",
UseLowAltitudeHeatSignature:"bool",
UseProtectedShields:"bool",
VehicleLockableInfo:"VehicleLockableInfoData",
VelocityDamageMagnifier:"float",
VelocityDamageThreshold:"float",
VoiceOverInfo:"CtrRef",
WaterDamage:"float",
WaterDamageOffset:"float"
};

var VehicleEntryListenerBinding = {
InOpenEntry:"AntRef",
InVehicle:"AntRef",
InVehicleRetrigger:"AntRef",
VehicleEntryChooserIndex:"AntRef",
VehicleEntryFire:"AntRef",
VehicleEntryForceX:"AntRef",
VehicleEntryForceY:"AntRef",
VehicleEntryForceZ:"AntRef",
VehicleEntryIndex:"AntRef",
VehicleEntryIndexUpdated:"AntRef",
VehicleEntryPitch:"AntRef",
VehicleEntryRoll:"AntRef",
VehicleEntryRotation:"AntRef",
VehicleEntryYaw:"AntRef",
VehicleOpenEntryIndex:"AntRef"
};

var VehicleEntryListenerComponentData = {
AnimationEntitySpacePriority:"int",
AnimationWheelTransformDelay:"float",
VehicleCameraControl:"VehicleCameraControlBinding",
VehicleEntryListener:"VehicleEntryListenerBinding"
};

var VehicleExitPointComponentData = {
CheckForVehicleOverrun:"bool",
Impulse:"Vec3",
InheritCameraDirection:"bool",
Ordinal:"int",
TerrainHeight:"float",
Velocity:"float"
};

var VehicleHealthZoneData = {
DamageAngleMultiplier:"float",
MaxHealth:"float",
MaxShieldHealth:"float",
MinDamageAngle:"float",
UseDamageAngleCalculation:"bool"
};

var VehicleHudData = {
Customization:"CtrRef",
CustomizationOffset:"Vec3",
MinimapIcon:"UIHudIcon",
Texture:"CtrRef",
VehicleItemHash:"uint"
};

var VehicleInputData = {
BrakeDeadzone:"float",
BrakeInertiaInDuration:"float",
BrakeInertiaMinRatio:"float",
BrakeInertiaOutDuration:"float",
PitchDeadzone:"float",
PitchInertiaInDuration:"float",
PitchInertiaMinRatio:"float",
PitchInertiaOutDuration:"float",
RollDeadzone:"float",
RollInertiaInDuration:"float",
RollInertiaMinRatio:"float",
RollInertiaOutDuration:"float",
ThrottleDeadzone:"float",
ThrottleInertiaInDuration:"float",
ThrottleInertiaMinRatio:"float",
ThrottleInertiaOutDuration:"float",
YawDeadzone:"float",
YawInertiaInDuration:"float",
YawInertiaMinRatio:"float",
YawInertiaOutDuration:"float"
};

var VehicleInputTweakData = {
InputTweakType:"VehicleInputTweakType",
MaxSpeed:"float",
MaxSpeedScale:"float",
MinSpeed:"float",
MinSpeedScale:"float"
};

var VehicleLockableInfoData = {
HeatSignature:"float",
LowAltitudeHeatSignature:"float",
LowAltitudeHeight:"float",
RadarSignature:"float"
};

var VehicleParachuteBinding = {
Enabled:"AntRef",
VehicleType:"AntRef"
};

var VehicleParachuteComponentData = {
Binding:"VehicleParachuteBinding",
DropParachuteOnUndeploy:"bool",
TimeInvisibleAfterSpawn:"float",
UndeployTime:"float",
VehicleType:"int"
};

var VehicleParachuteData = {
AngularDeployDamping:"float",
AngularDescentDamping:"float",
DeployInitialDragStart:"float",
DeployPhysicsStart:"float",
DeployTime:"float",
DragCoefficient:"float",
FreefallGravityMultiplier:"float",
InitialDragAngularVelocityPitch:"float",
InitialDragRandomAngularVelocityRollMax:"float",
InitialDragStartVelocityScale:"float",
MaxPitchVelocity:"float",
MaxRollVelocity:"float",
MaxYawVelocity:"float",
RampLength:"float",
TerminalVelocity:"float",
UndeployGroundHeight:"float"
};

var VehicleProjectileEntityData = {
AlignWithGround:"bool",
AlignWithGroundRayLength:"float",
AutoEnter:"bool",
CheckGroundWhenSpawned:"bool",
DeployInsideNeutralCombatAreaOnly:"bool",
EnterDelay:"float",
NoVehicleCollisionTime:"float",
Vehicle:"CtrRef"
};

var VehicleSoundData = {
BulletImpact:"CtrRef"
};

var VehicleSpawnReferenceObjectData = {
ActiveStance:"int",
ActiveStanceEntryIndex:"int",
AffectedByImpulse:"bool",
AirDropCarrierTransform:"LinearTransform",
ApplyDamageToAbandonedVehicles:"bool",
BotBailOutDelay:"float",
BotBailWhenHealthBelow:"float",
DisregardSpawnAllowedSetting:"bool",
EnableAvailableSeatOutput:"bool",
EnterRestriction:"EntryEnterRestriction",
KeepAliveRadius:"float",
RespawnRange:"float",
SetTeamOnSpawn:"bool",
TimeUntilAbandoned:"float",
TimeUntilAbandonedIsDestroyed:"float",
VehicleIsNearDistance:"float",
WreckDuration:"float"
};

var VehicleSpawnStateEntityData = {
EngineIndex:"uint",
HeightOffset:"float",
InitialRpmModifier:"float",
InitialThrottle:"float",
InitialVelocity:"Vec3",
Radius:"float",
StartupDelayModifier:"float"
};

var VehicleState = {
VehicleName:"string"
};

var VehicleStateTriggerEntityData = {
AllowAiToEnterAllSeats:"bool",
AllowHumanToEnterAllSeats:"bool",
BanAiFromSpecificSeat:"bool",
BulletCount:"uint",
CheckHealthGreaterOrEqual:"bool",
DestructionRadius:"float",
HealthToCheck:"uint",
HealthToSet:"uint",
LockAmount:"float",
RestrictHumanToSpecificSeat:"bool",
SeatSpecificIndexForAi:"uint",
SeatSpecificIndexForHuman:"uint",
ShouldDestroyBangers:"bool",
ShouldDestroyVehicles:"bool",
TriggerCriticalOnHealthSet:"bool"
};

var VehicleTrackerRenderTargetData = {
PositionOffset:"Vec2",
RenderTargetApectRatio:"float",
RenderTargetIndex:"int",
ScaleSize:"float",
UseRenderTarget:"bool"
};

var VehicleVisualCustomizationAsset = {
TextUnlockParts:"List<CtrRef>",
TextureUnlockPartCollections:"List<CtrRef>"
};

var VehicleWaterEffectData = {
Effect:"CtrRef",
Position:"Vec3"
};

var VehicleWaypointData = {
Angleoffset:"float",
MinSlowdownSpeed:"float",
Speed:"float",
SpeedOverrideMovingTowards:"float",
StopHere:"bool",
StopHereRadius:"float",
StoppingDeceleration:"float"
};

var VeniceCombatAreaCamera = null;

var VeniceExplosionEntityData = {
IsCausingSuppression:"bool",
SpotsOnExplode:"bool",
UnspotsOnExplode:"bool",
UnspottableTime:"float"
};

var VeniceFPSCameraData = {
SuppressionBlurAmountMultiplier:"float",
SuppressionBlurSizeMultiplier:"float"
};

var VeniceGameplayLevelDescriptionComponent = {
AllowParachuteFromMobileSpawnpoint:"bool"
};

var VeniceHudConfigAsset = {
AmmoPickupSound:"CtrRef",
ArtilleryAiming:"CtrRef",
ArtilleryAimingOOA:"CtrRef",
CriticalHealthThreshold:"float",
InnerNametagRadius:"float",
LaserDesignatorLocked:"CtrRef",
LaserDesignatorLocking:"CtrRef",
MaxOrderIconDistance:"float",
Minimap:"UIMinimapConfig",
MortarStrikeLocking:"CtrRef",
MPDefeatSoundMec:"CtrRef",
MPDefeatSoundRu:"CtrRef",
MPDefeatSoundUs:"CtrRef",
MPVictorySoundMec:"CtrRef",
MPVictorySoundRu:"CtrRef",
MPVictorySoundUs:"CtrRef",
NametagHealthVisibleForAll:"bool",
Nametags:"List<CtrRef>",
NewObjectiveSound:"CtrRef",
ObjectiveCompletedSound:"CtrRef",
ObjectiveUpdatedSound:"CtrRef",
OuterNametagRadius:"float",
ShowSpawnPointsOnMinimap:"bool",
SpawnScreenWeapons:"List<SpawnScreenWeaponData>",
TaggedVehicleCrosshair:"UITaggedVehicleCrosshair",
WeaponPickupSound:"CtrRef"
};

var VeniceMapMarkerHudData = {
Icon:"UIHudIcon"
};

var VeniceMatchmakingLevelDescriptionComponent = {
Licenses:"List<string>",
Mod:"string"
};

var VeniceMissionObjectiveHudData = null;

var VeniceOnlineConfiguration = {
EntitlementQueries:"List<CtrRef>",
Platforms:"List<OnlinePlatformConfiguration>",
UseFallback:"bool"
};

var VeniceOnlineSettings = {
BattlelogReport:"bool",
BattlelogReportURL:"string",
BlazeLogLevel:"int",
ClientGameConfigurationOverride:"string",
DirtySockLogLevel:"int",
DogTagUploadPolicy:"DTagUploadPolicy",
EnableQoS:"bool",
EnableSnowroller:"bool",
EntitlementQueries:"List<CtrRef>",
MatchFeedDetailsUrlPrefix:"string",
MatchFeedListUrlPrefix:"string",
MatchFeedMaxFetchAttempts:"uint",
MatchFeedMinimumMillisecondsBetweenMatchReloads:"uint",
MatchFeedMinimumMillisecondsBetweenMatchRequests:"uint",
MatchFeedMinimumMillisecondsBetweenNewRequestAttempt:"uint",
MatchFeedMinimumMillisecondsBetweenRequests:"uint",
MatchImagesUrlPrefix:"string",
PingPeriod:"uint",
Platforms:"List<OnlinePlatformConfiguration>",
PunkBusterActivateClient:"bool",
PunkBusterActivateServer:"bool",
QueueCapacityOverride:"int",
ServiceNameOverride:"string",
SnowrollerOrphanTimeout:"float",
UseFallback:"bool",
WebFeedCountUrlPrefix:"string",
WebFeedMaxFetchAttempts:"uint",
WebFeedMaxItems:"uint",
WebFeedMillisecondsBetweenNewRequestAttempt:"uint",
WebFeedMinimumMillisecondsBetweenRequests:"uint",
WebFeedUnreadCountFetchPeriod:"uint",
WebFeedUrlPrefix:"string"
};

var VeniceRichPresenceLevelDescriptionComponent = {
ContextValues:"List<RichPresenceContextSetting>",
PresenceMode:"CtrRef"
};

var VeniceSoldierCustomizationAsset = null;

var VeniceSoldierHealthModuleData = {
AbortSpawnImmortalityInputs:"List<EntryInputActionEnum>",
Binding:"SoldierHealthModuleBinding",
CriticalFakeImmortalTime:"float",
ImmortalTimeAfterSpawn:"float",
InteractiveManDown:"bool",
InteractiveManDownPoseConstraints:"PoseConstraintsData",
InteractiveManDownThreshold:"float",
ManDownRotate:"RotateToHitData",
ManDownStateHealthPoints:"float",
ManDownStateTime:"float",
PostReviveHealth:"float",
PostReviveResponseTime:"float",
RegenerationDelay:"float",
RegenerationRate:"float",
SprintDisabledDamageThreshold:"float",
SprintDisabledWhenDamagedTime:"float",
TimeForCorpse:"float",
VeniceSoldierHealthModuleData: "readonly",
EntryInputActionEnum: "uint"
};

var VeniceSoldierWeaponCustomizationAsset = null;

var VeniceUICombatAreaAsset = {
DistanceField:"CtrRef",
SurroundingDistanceField:"CtrRef"
};

var VeniceUIConfiguration = {
MetaDataAssetPath:"string"
};

var VeniceUISettings = {
GetStatsInOnlineFlow:"bool",
MetaDataAssetPath:"string"
};

var VeniceUnlockUserData = {
CheckSquad:"bool"
};

var VeniceVehicleCustomizationAsset = {
Category:"VehicleCategory",
NameSid:"string"
};

var VersionData = {
BranchId:"string",
DateTime:"string",
disclaimer:"string",
GameName:"string",
Version:"int"
};

var ViewFxData = {
BlurAdd:"float",
ColorTint:"ColorTintData",
ColorTintEnable:"bool",
PoissonRadialBlur:"PoissonRadialBlurData",
PoissonRadialBlurEnable:"bool"
};

var VignetteComponentData = {
Color:"Vec3",
Enable:"bool",
Exponent:"float",
Opacity:"float",
Realm:"fb.Realm",
Scale:"Vec2"
};

var VirtualRasterQuadtreeData = null;

var VisionBoxSettings = {
DecreaseXz:"float",
LowerTop:"float",
RaiseBottom:"float",
RaiseBottomHuman:"float"
};

var VisualEnvironmentBlueprint = null;

var VisualEnvironmentEffectEntityData = {
CullAngleCurve:"Vec4",
CullDistanceCurve:"Vec4",
Lifetime:"float",
LifetimeCurve:"Vec4",
SampleOnStartOnly:"bool",
VisualEnvironment:"CtrRef"
};

var VisualEnvironmentEntityData = {
Priority:"int",
Visibility:"float"
};

var VisualEnvironmentReferenceObjectData = {
OverrideVisibility:"bool",
Priority:"int"
};

var VisualEnvironmentSettings = {
DrawStats:"bool",
SunRotationX:"float",
SunRotationY:"float"
};

var VisualTerrainEntityData = {
Settings:"CtrRef",
Terrain:"CtrRef"
};

var VisualTerrainSettings = {
BuildJobCount:"uint",
BuildSpuJobEnable:"bool",
CastShadowsEnable:"bool",
CullSampleBoundingBoxHeightEnable:"bool",
CullSpuJobEnable:"bool",
DebugOverlayBrushCoverageMin:"Vec2",
DebugOverlayBrushEnable:"bool",
DebugOverlayBrushSize:"float",
DebugOverlayGridEnable:"bool",
DebugOverlayGridSize:"float",
DebugOverlayIsolinesEnable:"bool",
DebugOverlayIsolineSpacing:"float",
DebugOverlaySketchTextureEnable:"bool",
DebugOverlayWireframeEnable:"bool",
Decal3dFarDrawDistanceScaleFactor:"float",
DecalEnable:"bool",
DecalOffsetY:"float",
DecalZPassDrawDistance:"float",
DestroyAll:"bool",
DetailOverlayEnable:"bool",
DrawDebugTextEnable:"bool",
DrawDebugTexturesEnable:"bool",
DrawDecal2dEnable:"bool",
DrawDecal3dEnable:"bool",
DrawDecalZPassEnable:"bool",
DrawEnable:"bool",
DrawMeshScatteringCellBoxesEnable:"bool",
DrawMeshScatteringCulledCellBoxesEnable:"bool",
DrawMeshScatteringDebugMaskScaleTexturesEnable:"bool",
DrawMeshScatteringEnable:"bool",
DrawMeshScatteringInstanceBoxesEnable:"bool",
DrawMeshScatteringNodeBoxesEnable:"bool",
DrawMeshScatteringQuadtreeEnable:"bool",
DrawMeshScatteringStatsEnable:"bool",
DrawOnlyDecalZPassEnable:"bool",
DrawPatchBoxesEnable:"bool",
DrawPatchesEnable:"bool",
DrawQuadtreeAtlasTexturesEnable:"bool",
DrawQuadtreesEnable:"bool",
DrawQuadtreeStatsEnable:"bool",
DrawQuadtreeZoomIndex:"int",
DrawTextureDebugColors:"bool",
DrawTextureDebugDepthComplexity:"bool",
DrawTextureTileBoxesEnable:"bool",
DrawVertexYTextureEnable:"bool",
DrawWaterEnable:"bool",
DxDisplacementMappingEnable:"bool",
DxTessellatedTriWidth:"float",
DxTessellationPatchFacesPerSide:"uint",
DxTessellationPatchShrink:"float",
DynamicMaskDecalWidthScale:"float",
DynamicMaskEnable:"bool",
EditServiceEnable:"bool",
Enable:"bool",
ForceDecalReducedQuality:"bool",
ForceGraphicsDriverCrash:"bool",
ForcePatchRebuildEnable:"bool",
GlobalColormapEnable:"bool",
GpuTextureCompressionEnable:"bool",
LodCenterExtrapolationDistanceMax:"float",
LodCenterExtrapolationTime:"float",
LodScale:"float",
MaxNonVisibleTextureUpdateCount:"uint",
MeshScatteringBuildChannelCount:"uint",
MeshScatteringBuildChannelsLaunchedPerFrameCountMax:"uint",
MeshScatteringBuildVisibleFirst:"bool",
MeshScatteringCastShadowsEnable:"bool",
MeshScatteringCellPoolCapacity:"uint",
MeshScatteringClodFrameCount:"uint",
MeshScatteringCullRecordCount:"uint",
MeshScatteringCullSpuJobEnable:"bool",
MeshScatteringDensityMarginFactor:"float",
MeshScatteringDensityScaleFactor:"float",
MeshScatteringDistanceScaleFactor:"float",
MeshScatteringEnable:"bool",
MeshScatteringForceUpdateEnable:"bool",
MeshScatteringInstanceAdditionalCullEnable:"bool",
MeshScatteringInstanceCountLodEnable:"bool",
MeshScatteringInstanceCullBoxTestEnable:"bool",
MeshScatteringInstanceCullDynamicAllocEnable:"bool",
MeshScatteringInstanceCullEnable:"bool",
MeshScatteringInstanceCullJobCount:"uint",
MeshScatteringInstanceCullListCount:"uint",
MeshScatteringInstanceCullSpuJobEnable:"bool",
MeshScatteringInstanceFrustumCullEnable:"bool",
MeshScatteringInstanceOcclusionCullEnable:"bool",
MeshScatteringInstancesPerCellMax:"uint",
MeshScatteringInvisibleCellFovFactor:"float",
MeshScatteringJobsEnable:"bool",
MeshScatteringPregenerationDistanceRatio:"float",
MeshScatteringPrioritizationSpuJobEnable:"bool",
MeshScatteringSpuJobEnable:"bool",
MeshScatteringTreeNodePoolCapacity:"uint",
MeshScatteringWindSpeed:"float",
OccludedEnable:"bool",
OccludedMinDistance:"float",
OccluderEnable:"bool",
OccluderJobEnable:"bool",
OccluderLodBoostLevelCount:"uint",
OccluderSpuJobEnable:"bool",
PatchErrorFov:"float",
PatchErrorFovEnable:"bool",
PatchFacesPerSide:"uint",
PatchLodTransitionsEnable:"bool",
PatchMaterialSortingEnable:"bool",
PatchSlotCount:"uint",
PrepareBuildSpuJobEnable:"bool",
PrioritizationOcclusionEnable:"bool",
PrioritizationSpuJobEnable:"bool",
Ps3MeshScatteringInstanceCellMemoryEnable:"bool",
RegenerateTexturesEnable:"bool",
RenderMode:"TerrainRenderMode",
SlotDebugOutputEnable:"bool",
SlotReuseWaitCount:"uint",
TessellationFacesPerSideMin:"uint",
TextureAtlasSampleCountXFactor:"uint",
TextureAtlasSampleCountYFactor:"uint",
TextureBlockOnStreamingEnable:"bool",
TextureClodCutoffPriority:"float",
TextureClodEnable:"bool",
TextureClodFrameCount:"uint",
TextureCompressFastAlgorithmEnable:"bool",
TextureCompressionQuality:"int",
TextureCompressJobCount:"uint",
TextureCompressSpuJobsEnable:"bool",
TextureDetailFalloffCurve:"float",
TextureDetailFalloffDistance:"float",
TextureDetailFalloffFactor:"float",
TextureDetailSlopeBoost:"float",
TextureDrawTerrainLayersEnable:"bool",
TextureForceUpdateEnable:"bool",
TextureGenerationMipBias:"float",
TextureInvisibleDetailReductionFactor:"float",
TextureKeepPoolFullEnable:"bool",
TextureLayerCullingEnable:"bool",
TextureLevelOffset:"int",
TextureOccludedDetailReductionFactor:"float",
TextureQuadsPerTileLevel:"uint",
TextureRenderJobCount:"uint",
TextureRenderJobsLaunchedPerFrameCountMax:"uint",
TextureSamplesPerMeterMax:"float",
TextureTileBorderWidth:"uint",
TextureTileSamplesPerSide:"uint",
TextureVtIndirectionJobEnable:"bool",
TextureVtIndirectionSpuJobEnable:"bool",
TriangleSizeMin:"float",
UpdateJobsEnable:"bool",
VertexBufferHeightsEnable:"bool",
WaterDepthMetersPerSample:"float",
WireframeEnable:"bool",
ZeroViewportEnable:"bool",
ZPassDistance:"float"
};

var VisualVectorShapeData = {
DrawOrderIndex:"uint",
ErrorTolerance:"float",
Shader3d:"CtrRef",
TessellationTriangleSize:"float"
};

var VoiceOverArithmeticNode = {
A:"CtrRef",
B:"CtrRef",
Operation:"VoiceOverArithmeticExpressionType",
Result:"CtrRef"
};

var VoiceOverCharacterAsset = null;

var VoiceOverCompareNode = {
A:"CtrRef",
B:"CtrRef",
False:"CtrRef",
Operation:"VoiceOverCompareExpressionType",
True:"CtrRef"
};

var VoiceOverConstantBooleanValue = {
Value:"bool"
};

var VoiceOverConstantFloatValue = {
Value:"float"
};

var VoiceOverConstantGlobalValue = {
Source:"CtrRef"
};

var VoiceOverConstantIntegerValue = {
Value:"int"
};

var VoiceOverConstantNode = {
Source:"CtrRef",
Value:"CtrRef"
};

var VoiceOverConstantValue = null;

var VoiceOverConstantVectorValue = {
Value:"Vec4"
};

var VoiceOverContainerNode = {
Condition:"List<CtrRef>",
ConditionMode:"VoiceOverContainerConditionMode",
FalseRelationship:"List<CtrRef>",
Interval:"CtrRef",
Probability:"float",
TrueRelationship:"List<CtrRef>"
};

var VoiceOverConversationGroupEntityData = {
QueueGroup:"CtrRef"
};

var VoiceOverConversationNode = {
BlockedRelationship:"List<CtrRef>",
Condition:"List<CtrRef>",
ConditionMode:"VoiceOverContainerConditionMode",
FinishedRelationship:"List<CtrRef>",
Groups:"List<CtrRef>",
InterruptMode:"VoiceOverConversationInterruptMode",
Interval:"CtrRef",
LastSequenceIndex:"sbyte",
Priority:"int",
Probability:"float",
Pronunciation:"CtrRef",
QueueMode:"VoiceOverConversationQueueMode",
Relevancy:"float",
TrackCount:"sbyte"
};

var VoiceOverConversationQueueGroup = {
Name:"string",
Polyphony:"uint",
PolyphonyMode:"VoiceOverConversationQueueGroupPolyphony"
};

var VoiceOverDialogClip = {
Events:"CtrRef",
Offset:"float",
OffsetReferences:"List<CtrRef>",
SequenceIndex:"sbyte",
Takes:"List<VoiceOverDialogTake>"
};

var VoiceOverDialogClipEvents = {
FinishedNameHash:"uint",
StartedNameHash:"uint"
};

var VoiceOverDialogGroup = {
Sound:"CtrRef",
Tracks:"List<CtrRef>"
};

var VoiceOverDialogTake = {
Wave:"CtrRef"
};

var VoiceOverDialogTakeMapping = {
TakeControlMax:"float",
TakeControlMin:"float",
TakeIndex:"sbyte"
};

var VoiceOverDialogTrack = {
Clips:"List<CtrRef>",
Output:"CtrRef",
ParentTrackIndex:"sbyte",
QueueGroup:"CtrRef",
SamplerNode:"CtrRef",
Source:"CtrRef",
TakeControl:"CtrRef",
TakeIndexMapping:"List<VoiceOverDialogTakeMapping>",
TakeSwitching:"VoiceOverDialogTakeBehavior",
TakeSwitchingOnResume:"bool"
};

var VoiceOverDistanceNode = {
A:"CtrRef",
B:"CtrRef",
Distance:"CtrRef",
False:"CtrRef",
Operation:"VoiceOverCompareExpressionType",
Threshold:"CtrRef",
True:"CtrRef"
};

var VoiceOverEvent = {
Name:"string",
Owner:"CtrRef",
Parameters:"List<CtrRef>"
};

var VoiceOverEventEntityData = {
EventPlayer:"CtrRef",
ExtraEventPlayer:"CtrRef",
FinishedDelay:"float",
RunOnce:"bool",
TriggerDelay:"float",
VoEvent:"CtrRef"
};

var VoiceOverEventNode = {
Event:"CtrRef",
Interval:"CtrRef",
Redirects:"List<CtrRef>",
Relationship:"List<CtrRef>"
};

var VoiceOverExpressionNode = null;

var VoiceOverGlobalConstantValue = {
Name:"string",
Source:"CtrRef"
};

var VoiceOverGlobalNode = {
Field:"CtrRef",
Object:"CtrRef",
Value:"CtrRef"
};

var VoiceOverGroup = {
Name:"string",
Priority:"int"
};

var VoiceOverInfoNode = {
ExpectedType:"CtrRef",
Field:"CtrRef",
Object:"CtrRef",
Value:"CtrRef"
};

var VoiceOverInterval = {
Name:"string"
};

var VoiceOverIntervalNode = {
False:"CtrRef",
Interval:"CtrRef",
Threshold:"CtrRef",
Time:"CtrRef",
True:"CtrRef"
};

var VoiceOverLabel = {
Name:"string"
};

var VoiceOverLabelNode = {
False:"CtrRef",
SourceMode:"VoiceOverLabelSourceMode",
Sources:"List<CtrRef>",
True:"CtrRef",
UnwantedCompareMode:"VoiceOverLabelCompareMode",
UnwantedLabels:"List<CtrRef>",
WantedCompareMode:"VoiceOverLabelCompareMode",
WantedLabels:"List<CtrRef>"
};

var VoiceOverLabelSource = {
Source:"CtrRef"
};

var VoiceOverLanguageRoot = {
Language:"CtrRef",
Path:"string"
};

var VoiceOverLogicAsset = {
Events:"List<CtrRef>",
Flows:"List<CtrRef>",
Groups:"List<CtrRef>",
System:"CtrRef"
};

var VoiceOverLogicFlow = {
Group:"CtrRef",
Locals:"List<CtrRef>",
Name:"string",
Roots:"List<CtrRef>"
};

var VoiceOverManuscriptAsset = {
AllowDelete:"bool",
CharacterColumn:"string",
FileNameColumn:"string",
FirstContentRow:"int",
KeepPath:"bool",
LanguageColumns:"List<VoiceOverManuscriptLanguageColumns>",
Languages:"List<CtrRef>",
MasterLanguage:"CtrRef",
NameTranslation:"VoiceOverWaveNameTranslation",
OutputPath:"string",
PathColumn:"string",
SheetName:"string",
StreamPool:"CtrRef",
StringIdColumn:"string",
StringIdPrefix:"string",
StringIdUpperCase:"bool",
VoiceColumn:"string",
WaveAssetStatusColumn:"string"
};

var VoiceOverManuscriptLanguageColumns = {
Language:"CtrRef",
SubtitleOffsetColumn:"string",
TextColumn:"string"
};

var VoiceOverNamedValue = {
Name:"string"
};

var VoiceOverNode = null;

var VoiceOverObject = {
Properties:"List<CtrRef>"
};

var VoiceOverProbabilityNode = {
False:"CtrRef",
Probability:"float",
True:"CtrRef"
};

var VoiceOverPronunciation = {
Name:"string",
PrimaryLanguage:"CtrRef",
SecondaryFallback:"VoiceOverPronunciationFallback",
SecondaryLanguage:"CtrRef"
};

var VoiceOverRelationshipInput = null;

var VoiceOverStructureConnection = {
TargetInput:"CtrRef",
TargetNode:"CtrRef"
};

var VoiceOverStructureNode = {
FlowMode:"VoiceOverLogicFlowMode"
};

var VoiceOverSystemAsset = {
Constants:"List<CtrRef>",
DefaultPositionedQueueGroup:"CtrRef",
DefaultPronunciation:"CtrRef",
DefaultUnpositionedQueueGroup:"CtrRef",
Intervals:"List<CtrRef>",
Labels:"List<CtrRef>",
MasterLanguage:"CtrRef",
Objects:"List<CtrRef>",
Pronunciations:"List<CtrRef>",
QueueGroups:"List<CtrRef>",
Types:"List<CtrRef>"
};

var VoiceOverTriggerNode = {
Delay:"float",
Event:"CtrRef",
Parameters:"List<CtrRef>"
};

var VoiceOverTriggerParameter = {
EventParameter:"CtrRef",
Source:"CtrRef"
};

var VoiceOverValue = {
ValueType:"VoiceOverValueType"
};

var VoiceOverValueConnection = {
TargetNode:"CtrRef",
TargetValue:"CtrRef"
};

var VoiceOverValueRedirect = {
Source:"CtrRef",
Target:"CtrRef"
};

var VoiceOverVariableNode = {
Source:"CtrRef",
Value:"CtrRef"
};

var VolumeVectorShapeData = {
Height:"float"
};

var WarningSystemComponentData = {
AimWarnSoundEffect:"CtrRef",
LockedWarnSoundEffect:"CtrRef",
LockingWarnSoundEffect:"CtrRef",
LowHealthWarnSoundEffect:"CtrRef",
MissileWarnSoundEffect:"CtrRef",
PlayerType:"WarningPlayerType"
};

var WarpAnimationBinding = {
ConnectJointGroup:"AntRef",
ConnectJointWeight:"AntRef",
DisableCulling:"AntRef",
EnableAlign:"AntRef",
TranslationYWarpTolerance:"AntRef"
};

var WarpAnimationComponentData = {
AnimationEntitySpacePriority:"int",
BoneToAlign:"GameplayBones",
CannedAnimBinding:"CannedAnimationBinding",
ConnectTransform:"LinearTransform",
ExternalConnectTransform:"bool",
ForceAnimationTransform:"bool",
RequireAnimationWeight:"bool",
WarpBinding:"WarpAnimationBinding"
};

var WarpAnimationEntityData = {
AnimationEntitySpacePriority:"int",
BoneToAlign:"GameplayBones",
ConnectTransform:"LinearTransform",
ExternalConnectTransform:"bool",
ForceAnimationTransform:"bool",
RequireAnimationWeight:"bool",
WarpBinding:"WarpAnimationBinding"
};

var WaterAsset = null;

var WaterData = null;

var WaterEntityData = {
Asset:"CtrRef"
};

var WaveSwitcherNodeData = {
Advance:"AudioGraphNodePort",
DefaultIndex:"float",
Index:"AudioGraphNodePort",
IndexChanged:"AudioGraphNodePort",
IsRandom:"bool",
RandomStartIndex:"bool",
Wave:"AudioGraphNodePort",
Waves:"List<CtrRef>"
};

var WaypointComponentData = {
Looping:"bool"
};

var WaypointData = {
SchematicsNameHash:"int",
UseClientsPosition:"bool",
WaypointId:"ushort"
};

var WaypointsShapeData = {
Waypoints:"List<CtrRef>"
};

var WaypointTriggerEntityData = {
Realm:"fb.Realm"
};

var WeaponAimingSimulationModifier = {
AimingController:"CtrRef"
};

var WeaponAnimatedFireTypeModifier = {
AnimatedFireType:"AnimatedFireEnum"
};

var WeaponAnimationConfigurationModifier = {
AnimatedFireType:"AnimatedFireEnum",
AnimationConfiguration:"AnimationConfigurationData",
ZoomInOutMeshTransitionFactors:"List<float>"
};

var WeaponAnimatedFireTypeModifier = {
AnimatedFireType:"AnimatedFireEnum"
};

var WeaponAnimTypeModifier = {
WeaponAnimType:"fb.WeaponAnimType"
};

var WeaponClassModifier = {
WeaponClass:"WeaponClassEnum"
};

var WeaponComponentData = {
AIData:"CtrRef",
Classification:"WeaponClassification",
CustomWeaponType:"CtrRef",
DamageGiverName:"string",
DamageMultiplier:"float",
ExplosionDamageMultiplier:"float",
ImpulseStrength:"float",
LockingAcceptanceAngleMultiplier:"float",
LockTimeMultiplier:"float",
OverheatDropPerSecondMultiplier:"float",
ProjectileSpawnOffset:"Vec3",
ReloadTimeMultiplier:"float",
SequentialFiring:"bool",
WeaponFiring:"CtrRef",
WeaponItemHash:"uint",
WeaponMesh:"CtrRef"
};

var WeaponData = {
ShowLaserPaintedVehicles:"bool"
};

var WeaponDeployTimeModifier = {
AltDeployId:"int",
AltDeployTime:"float",
DeployTime:"float",
DisableZoomOnDeployTime:"float"
};

var WeaponEntityData = {
AIData:"CtrRef",
CustomWeaponType:"CtrRef",
WeaponClass:"WeaponClassEnum",
WeaponFiring:"CtrRef",
WeaponStates:"List<WeaponStateData>"
};

var WeaponFiringData = {
AbortReloadOnSprint:"bool",
AltDeployId:"int",
AltDeployTime:"float",
DeployTime:"float",
DisableReloadWhileSprinting:"bool",
DisableZoomOnDeployTime:"float",
InflictSelfDamage:"bool",
PrimaryFire:"CtrRef",
ReactivateCooldownTime:"float",
ReloadWholeMags:"bool",
Rumble:"RumbleFiringData",
ShowEnemyNametagOnAim:"bool",
SupportDelayProne:"float",
SupportDelayStand:"float",
UseAutoAiming:"bool",
WeaponSway:"CtrRef"
};

var WeaponFiringDataAsset = null;

var WeaponFiringDataModifier = {
WeaponFiring:"CtrRef"
};

var WeaponFiringEffectsModifier = {
FireEffects1p:"List<FireEffectData>",
FireEffects3p:"List<FireEffectData>"
};

var WeaponInputRouterComponentData = {
MaxFireRate:"float",
RotationCount:"uint"
};

var WeaponLagBinding = {
EntityPitch:"AntRef",
EntityYaw:"AntRef",
PitchResult:"AntRef",
RollResult:"AntRef",
YawResult:"AntRef"
};

var WeaponLagEffectForceData = {
OffsetForce:"Vec3",
RotationForce:"Vec3"
};

var WeaponLagEffectSpringData = {
Constant:"float",
Damping:"float"
};

var WeaponLagEffectSpringVector = {
SpringX:"WeaponLagEffectSpringData",
SpringY:"WeaponLagEffectSpringData",
SpringZ:"WeaponLagEffectSpringData"
};

var WeaponLagEntityData = {
Binding:"WeaponLagBinding"
};

var WeaponLagSpringEffectData = {
JumpForces:"WeaponLagEffectForceData",
LandForces:"WeaponLagEffectForceData",
OffsetSprings:"WeaponLagEffectSpringVector",
PoseDownForces:"WeaponLagEffectForceData",
PoseUpForces:"WeaponLagEffectForceData",
RotationSprings:"WeaponLagEffectSpringVector",
ZoomForceModifier:"float"
};

var WeaponMagazineModifier = {
MagazineCapacity:"int",
NumberOfMagazines:"int"
};

var WeaponMiscModifier = {
CanBeInSupportedShooting:"bool",
EnableBreathControl:"bool",
HoldBoltActionUntilZoomRelease:"bool",
IsSilenced:"bool",
UnZoomOnBoltAction:"bool"
};

var WeaponMiscModifierSettings = {
CanBeInSupportedShooting:"bool",
EnableBreathControl:"bool",
HoldBoltActionUntilZoomRelease:"bool",
IsSilenced:"bool",
UnZoomOnBoltAction:"bool"
};

var WeaponModifier = {
DummyToMakeFrostEDcompile:"int"
};

var WeaponModifierBase = null;

var WeaponModifierData = {
Modifiers:"List<CtrRef>",
UnlockAsset:"CtrRef"
};

var WeaponOffsetData = {
WeaponOffsetX:"float",
WeaponOffsetY:"float",
WeaponOffsetZ:"float",
WeaponZoomedOffsetX:"float",
WeaponZoomedOffsetY:"float",
WeaponZoomedOffsetZ:"float"
};

var WeaponOverrideData = {
Data:"CtrRef",
Values:"List<WeaponOverrideValue>"
};

var WeaponOverrideValue = {
Value:"float",
ValueType:"WeaponOverrideValueType"
};

var WeaponPickupData = {
AltWeaponSlot:"int",
LinkedToWeaponSlot:"int",
MaxAmmo:"uint",
MinAmmo:"uint",
Weapon:"CtrRef",
WeaponSlot:"uint"
};

var WeaponPickupEntityData = {
UseForPersistence:"bool",
Weapons:"List<WeaponPickupData>"
};

var WeaponProjectileModifier = {
ProjectileData:"CtrRef"
};

var WeaponRegularSocketObjectData = {
Mesh3pTransforms:"List<LinearTransform>",
Transform:"LinearTransform"
};

var WeaponShotModifier = {
InitialSpeed:"Vec3",
NumberOfBulletsPerShell:"int"
};

var WeaponSkinnedSocketObjectData = null;

var WeaponSocketObjectData = {
Asset1p:"CtrRef",
Asset1pzoom:"CtrRef",
Asset3p:"CtrRef",
ReferencedAssetHashes:"List<uint>"
};

var WeaponSoundModifier = {
Sound:"CtrRef"
};

var WeaponSpeedData = {
DeploySpeed:"float",
UnDeploySpeed:"float",
ZoomInSpeed:"float",
ZoomOutSpeed:"float"
};

var WeaponStateData = {
AlwaysAimHead:"bool",
AnimatedAimingType:"AnimatedAimingEnum",
AnimatedFireType:"AnimatedFireEnum",
AnimationConfiguration:"AnimationConfigurationData",
BoneFakePhysics:"List<CtrRef>",
HideProjectileAfterFireTime:"float",
IsOneHanded:"bool",
KeepAimingTime:"float",
Mesh1p:"CtrRef",
Mesh3p:"CtrRef",
Mesh3pRigidMeshSocketObjectTransforms:"List<RigidMeshSocketTransform>",
Mesh3pTransforms:"List<LinearTransform>",
MeshZoom1p:"CtrRef",
NonZoomedScopeFilter:"CtrRef",
PlayDeployAfterFire:"bool",
ProjectileBoneName:"string",
ReferencedAssetHashes:"List<uint>",
SkipDeployAnimation:"bool",
SkipFireAnimation:"bool",
SkipReloadAnimation:"bool",
Weapon:"AntRef",
ZoomedScopeFilter:"CtrRef",
ZoomInOutMeshTransitionFactors:"List<float>",
ZoomMeshTransitionFactor:"float",
ZoomScaleFactor:"float"
};

var WeaponStateEntityData = {
Realm:"fb.Realm",
WeaponSlot:"int"
};

var WeaponSuppressionData = {
MaxDistance:"float",
MaxMultiplier:"float",
MinDistance:"float",
MinMultiplier:"float"
};

var WeaponSwayData = null;

var WeaponSwitchingMapData = {
Action:"EntryInputActionEnum",
FireAndSwitchBackToPrev:"bool",
FromWeapon:"WeaponSwitchingEnum",
ToWeapon:"List<WeaponSwitchingEnum>",
WeaponSwitchingMapData: "readonly",
WeaponSwitchingEnum: "uint"
};

var WeaponUnlockPickupData = {
AltWeaponSlot:"int",
DefaultToFullAmmo:"bool",
LinkedToWeaponSlot:"int",
MaxAmmo:"uint",
MinAmmo:"uint",
UnlockWeaponAndSlot:"fb.UnlockWeaponAndSlot"
};

var WeaponUnlockPickupEntityData = {
RandomlySelectOneWeapon:"bool",
UseForPersistence:"bool",
Weapons:"List<WeaponUnlockPickupData>"
};

var WeaponZoomModifier = {
ZoomRenderFov:"float"
};

var WebPresenceBackendData = null;

var WheelComponentData = {
Config:"CtrRef",
EffectClampVelocity:"float",
PhysicsType:"WheelPhysicsType"
};

var WheelConfigData = {
AckermanDeviceType:"int",
AdjustWheelRotation:"bool",
AlignMomScale:"float",
AlwaysGrip:"bool",
AngularVelocityMinSlipCondition:"float",
BrakeFactor:"float",
BrakeForce:"float",
CollisionMaterialPair:"CtrRef",
CollisionYawDampening:"float",
CollisionYawDampeningDuration:"float",
ConstantSpringForceFrictionScale:"float",
DiffGearRatio:"float",
DrivingType:"int",
EngineBrakeMaxFactor:"float",
EngineBrakeMinFactor:"float",
EngineBrakeVelocityFactor:"float",
EngineIndex:"int",
FrictionMethod:"int",
FrictionMomentMaxFactor:"float",
FrictionMomentMultiplier:"float",
FrictionMomentVelocityMax:"float",
FrictionMomentVelocityMin:"float",
FxTorqueRadiusMultiplier:"float",
HandBrakeFactor:"float",
HandBrakeForce:"float",
HasSteeringInverted:"bool",
HighSpeedSteeringSensitivity:"float",
HighSpeedSteeringSensitivityLimit:"float",
Inertia:"Vec3",
IsAllowedToSpin:"bool",
LateralFrictionForceMaxFactor:"float",
LateralNegK:"float",
LateralPosK:"float",
LattitudeFrictionScale:"List<FrictionScaleAtVelocity>",
LongitudeFrictionScale:"List<FrictionScaleAtVelocity>",
LongitudinalFrictionForceMaxFactor:"float",
LongitudinalNegK:"float",
LongitudinalPosK:"float",
LowSpeedSteeringSensitivity:"float",
LowSpeedSteeringSensitivityLimit:"float",
Mass:"float",
MaxSlipRatio:"float",
MidSpeedSteeringSensitivity:"float",
MidSpeedSteeringSensitivityLimit:"float",
OffGroundGravityModifier:"float",
Offset:"Vec3",
PacejkaConfigIndex:"int",
Radius:"float",
Resistance:"float",
RollingResistanceBaseFactor:"float",
RollingResistanceInternalBaseFactor:"float",
RollingResistanceVelocityFactor:"float",
RotationBody:"CtrRef",
RotationDirectionIndex:"int",
SensitivityRangeScale:"float",
SideSlipAngleMaxSlipCondition:"float",
SlopeGripExponent:"int",
SlopeGripMaxAngle:"float",
SlopeGripMinAngle:"float",
SphereCollision:"SphereCollisionData",
Spring:"SpringData",
SteerInertia:"CtrRef",
SteeringAngleIndex:"int",
SteeringSensitivity:"List<SensitivityAtVelocity>",
SteeringType:"int",
TrackedForwardSpeedLimit:"float",
TrackedTurnSpeedLimit:"float",
TransmissionLoss:"List<Vec2>",
UseEngineBrake:"bool",
UseFrictionMoment:"bool",
UseLowSpeedAutoBrake:"bool",
UseRollingResistanceBaseFactor:"bool",
UseRollingResistanceVelocityFactor:"bool",
WheelBaseLateral:"float",
WheelBaseLongitudinal:"float",
WheelFrictionLattitudeBrakeScale:"float",
WheelSlipRatioMaxSlipCondition:"float",
WheelVelocityXMinSlipCondition:"float",
Width:"float"
};

var WidgetEventQueryPair = {
InstanceName:"string",
IsOutput:"bool",
Name:"string",
Query:"UIWidgetEventID"
};

var WidgetNode = {
AlwaysInFocus:"bool",
DataBinding:"CtrRef",
FocusIndex:"int",
HorisontalAlign:"WidgetHorisontalAlignment",
Inputs:"List<CtrRef>",
InstanceName:"string",
Outputs:"List<CtrRef>",
VerticalAlign:"WidgetVerticalAlignment",
WidgetAsset:"CtrRef",
WidgetProperties:"List<UIWidgetProperty>",
ZDepthLevel:"int"
};

var WindComponentData = {
Realm:"fb.Realm",
WindDirection:"float",
WindStrength:"float"
};

var WindowSettings = {
AutoSize:"bool",
BordersEnable:"bool",
EnableEscape:"bool",
EnableInputOnActivate:"bool",
FullscreenAutoSize:"bool",
FullscreenWhenJoiningServer:"bool",
Height:"uint",
HibernateOnClose:"bool",
Hidden:"bool",
Minimized:"bool",
PosX:"int",
PosY:"int",
Width:"uint"
};

var WingComponentData = {
Config:"CtrRef"
};

var WingPhysicsData = {
AngularVelocityLiftModifier:"float",
BaseAngleOfAttack:"float",
Drag:"float",
DragCoefficient:"CtrRef",
DragRotationModifier:"float",
FlapDrag:"float",
FlapLift:"float",
FlapTurnSpeed:"float",
InputForFlap:"int",
LandingFlapLift:"float",
LandingFlapLogic:"CtrRef",
Lift:"float",
LiftCoefficient:"CtrRef",
MaxFlapAngleScaleFactor:"CtrRef",
VisualFlapAngleLimit:"float",
VisualFlapTurnSpeed:"float"
};

var WorldData = {
RuntimeMaterialGrid:"CtrRef"
};

var WorldObjectListData = null;

var WorldPartData = {
Enabled:"bool",
HackToSolveRealTimeTweakingIssue:"GUID",
UseDeferredEntityCreation:"bool"
};

var WorldPartInclusion = null;

var WorldPartInclusionCriterion = null;

var WorldPartInclusionSetting = null;

var WorldPartInclusionSettings = null;

var WorldPartReferenceObjectData = null;

var WorldRenderSettings = {
ApplyShadowmapsEnable:"bool",
BilateralHalfResCompositeEnable:"bool",
CloudShadowEnable:"bool",
ColoredShadowmapSlicesEnable:"bool",
ConeLightsEnable:"bool",
ConsoleRenderTargetPoolSharingEnable:"bool",
CullScreenAreaScale:"float",
CustomEnvmapEnable:"bool",
DecalVolumeEnable:"bool",
DecalVolumeScale:"float",
DrawBoundingSpheres:"bool",
DrawDebugDecalVolumes:"bool",
DrawDebugDestructionVolumes:"bool",
DrawDebugDynamicAO:"bool",
DrawDebugDynamicEnvmap:"bool",
DrawDebugDynamicEnvmapMipLevel:"int",
DrawDebugGBuffer:"bool",
DrawDebugHalfResEnvironment:"bool",
DrawDebugLensFlareOccluders:"bool",
DrawDebugLensFlares:"bool",
DrawDebugLightShadowSources:"bool",
DrawDebugLightSources:"bool",
DrawDebugLightStats:"bool",
DrawDebugLightTileFbGrid:"bool",
DrawDebugLightTileGrid:"bool",
DrawDebugLightTiles:"bool",
DrawDebugLightTileSources:"bool",
DrawDebugLightTileVolumes:"bool",
DrawDebugMultisampleClassify:"bool",
DrawDebugPlanarReflection:"bool",
DrawDebugPlanarReflectionCullFrustum:"bool",
DrawDebugQuarterShadowmaps:"bool",
DrawDebugShadowmaps:"bool",
DrawDebugSkyEnvmap:"bool",
DrawDebugSkyEnvmapMipLevel:"int",
DrawDebugSpotLightShadowmaps:"bool",
DrawDebugTransShadowmap:"bool",
DrawDebugVelocityBuffer:"bool",
DrawDebugVisibleEntityTypes:"bool",
DrawDebugWorldOcclusions:"bool",
DrawDebugZBufferEnable:"bool",
DrawFrustums:"bool",
DrawLightSources:"bool",
DrawLineBoundingBoxes:"bool",
DrawShadowFrustums:"bool",
DrawSolidBoundingBoxes:"bool",
DrawTransparent:"bool",
DrawTransparentDecal:"bool",
DxDeferredCsPathEnable:"bool",
DxGBufferLight16BitEnable:"bool",
DxGBufferNormal16BitEnable:"bool",
DxLinearDepth32BitFormatEnable:"bool",
DxShadowmap16BitEnable:"bool",
DxSpotLightShadowmap16BitEnable:"bool",
DynamicCullDrawOccludedBoxesEnable:"bool",
DynamicCullSpuJobEnable:"bool",
DynamicCullZBufferTestEnable:"bool",
DynamicEnvmapDefaultPosition:"Vec3",
DynamicEnvmapEnable:"bool",
DynamicEnvmapFilterMode:"MipmapFilterMode",
DynamicEnvmapFilterWidth:"float",
DynamicEnvmapLightingEnable:"bool",
DynamicEnvmapMipmapGenEnable:"bool",
DynamicEnvmapResolution:"uint",
EmissiveEnable:"bool",
Enable:"bool",
FinalPostEnable:"bool",
ForceMotionBlurCutoffGradientScale:"float",
ForceMotionBlurDepthCutoff:"float",
ForegroundAsMainEnable:"bool",
ForegroundDepthClearEnable:"bool",
ForegroundEnable:"bool",
ForegroundTransparentEnable:"bool",
ForegroundZPassEnable:"bool",
FreezePlanarReflectionCullFrustum:"bool",
FxaaEnable:"bool",
FxaaForceVendor:"int",
FxaaQuality:"uint",
GBufferAlphaTestSimpleEnable:"bool",
GBufferClearEnable:"bool",
GBufferLayout:"ShaderGBufferLayout",
GBufferTestCount:"uint",
GenerateShadowmapsEnable:"bool",
GenericEntityMaxVisibleEntityCount:"uint",
GenericEntityRendererEnable:"bool",
HalfResEnable:"bool",
HalfResLensFlaresEnable:"bool",
HdrEnable:"bool",
LensFlareOcclusionEnable:"bool",
LensFlaresEnable:"bool",
LightAttenuationThreshold:"float",
LightAttenuationThresholdEnable:"bool",
LightConeCullEnable:"bool",
LightCullEnable:"bool",
LightDepthCullEnable:"bool",
LightForceIntensity:"float",
LightIntensityNormalizationEnable:"bool",
LightIntensityScale:"float",
LightLodFadeArea:"float",
LightLodMinArea:"float",
LightLodRadiusFactor:"float",
LightLodSpecularFadeAreaEnd:"float",
LightLodSpecularFadeAreaStart:"float",
LightNormalCullEnable:"bool",
LightOverdrawMaxLayerCount:"uint",
LightProbesEnable:"bool",
LightRadiusScale:"float",
LightStencilMethodEnable:"bool",
LightStencilMinArea:"float",
LightTileMinArea:"float",
LightTileOverlayEnable:"bool",
LightVolumeDepthTestEnable:"bool",
LightVolumeMethodEnable:"bool",
LightWidthEnable:"bool",
LineLightsEnable:"bool",
MainOpaqueZPassEnable:"bool",
MaxDecalVolumeCount:"uint",
MaxDestructionVolumeCount:"uint",
MaxPointLightCount:"uint",
MaxSpotLightCount:"uint",
MaxSpotLightShadowCount:"uint",
MotionBlurEnable:"bool",
MotionBlurFrameAverageCount:"uint",
MotionBlurGeometryPassEnable:"bool",
MotionBlurMax:"float",
MotionBlurMaxFrameTime:"float",
MotionBlurMaxSampleCount:"uint",
MotionBlurNoiseScale:"float",
MotionBlurQuality:"uint",
MotionBlurScale:"float",
MotionBlurStencilPassEnable:"bool",
MultisampleCount:"uint",
MultisampleThreshold:"float",
OccluderMeshZPrepassDebugEnable:"bool",
OccluderMeshZPrepassEnable:"bool",
OnlyLightTileIndex:"int",
OnlyLightTileX:"int",
OnlyLightTileY:"int",
OnlyShadowmapSlice:"int",
OnlyTileIndex:"int",
OpaqueSortBySolutionEnable:"bool",
OutdoorKeyLightEnable:"bool",
OutdoorLightEnable:"bool",
OutdoorLightSpecularEnable:"bool",
OutdoorLightTileBatchCount:"uint",
OutdoorLightTileBlendEnable:"bool",
OutdoorLightTileRenderEnable:"bool",
OutdoorLightTileSimpleShaderEnable:"bool",
OutdoorLightTilingEnable:"bool",
OutdoorSkyLightEnable:"bool",
OutputGammaCorrectionEnable:"bool",
OverrideDynamicAO:"bool",
PlanarReflectionBlur:"bool",
PlanarReflectionCullFOV:"float",
PlanarReflectionDebugCullMode:"bool",
PlanarReflectionEnable:"bool",
PlanarReflectionHeight:"uint",
PlanarReflectionWidth:"uint",
PointLightsEnable:"bool",
Ps3ColorCompressionEnable:"bool",
Ps3DepthBoundsLightCullingEnable:"bool",
Ps3HdrClearEnable:"bool",
Ps3LightTileJobCount:"uint",
Ps3LightTileJobMaxFbTileCount:"uint",
Ps3LightTileJobPriority:"uint",
Ps3LightTileJobYieldEnable:"bool",
Ps3LightTileJobYieldGranularity:"float",
Ps3LightTileMethod:"uint",
Ps3RenderTargetPoolGBufferOffsetEnable:"bool",
Ps3SCullEnable:"bool",
Ps3Shadowmap16BitEnable:"bool",
Ps3ShadowmapTilingEnable:"bool",
Ps3SpotLightShadowmap16BitEnable:"bool",
Ps3TiledHalfTargetEnable:"bool",
Ps3TiledSSAOTargetsEnable:"bool",
Ps3TilingEnable:"bool",
Ps3ZCullEnable:"bool",
ReflectionEnvmapSize:"uint",
ScreenEffectEnable:"bool",
SetupJobEnable:"bool",
ShadowmapAccumBilinearEnable:"bool",
ShadowmapAccumEnable:"bool",
ShadowmapCullVolumeEnable:"bool",
ShadowmapExtrusionLength:"float",
ShadowmapFirstSliceScale:"float",
ShadowmapFixedDepthEnable:"bool",
ShadowmapFixedMovementEnable:"bool",
ShadowmapMinFov:"float",
ShadowmapMinScreenArea:"float",
ShadowmapPoissonFilterScale:"float",
ShadowmapQuality:"uint",
ShadowmapResolution:"uint",
ShadowmapsEnable:"bool",
ShadowmapSizeZScale:"float",
ShadowmapSliceCount:"uint",
ShadowmapSliceSchemeWeight:"float",
ShadowmapViewDistance:"float",
ShadowmapViewDistanceScaleEnable:"bool",
ShadowMinScreenArea:"float",
ShadowViewportScale:"float",
SimpleShadowmapsEnable:"bool",
SkinLightingEnable:"bool",
SkyEnable:"bool",
SkyEnvmapEnable:"bool",
SkyEnvmapFilterMode:"MipmapFilterMode",
SkyEnvmapFilterWidth:"float",
SkyEnvmapForceUpdateEnable:"bool",
SkyEnvmapMipmapGenEnable:"bool",
SkyEnvmapResolution:"uint",
SkyEnvmapSidesPerFrameCount:"uint",
SkyEnvmapUpdateEnable:"bool",
SkyEnvmapUse8BitTexture:"bool",
SkyFogEnable:"bool",
SkyVisibilityEnvmapScalingEnable:"bool",
SpecularLightingEnable:"bool",
SpotLightNearPlane:"float",
SpotLightsEnable:"bool",
SpotLightShadomapLevel:"QualityLevel",
SpotLightShadowmapEnable:"bool",
SpotLightShadowmapPoissonFilterScale:"float",
SpotLightShadowmapQuality:"uint",
SpotLightShadowmapResolution:"uint",
StaticEnvmapEnable:"bool",
SubSurfaceColor:"Vec3",
SubSurfaceRolloffKeyLight:"float",
SubSurfaceRolloffLocalLight:"float",
TempPlanarReflectionY:"float",
TiledHalfResCompositeEnable:"bool",
TiledHalfResStencilOccludersEnable:"bool",
TranslucencyLightingEnable:"bool",
TransparencyShadowmapsEnable:"bool",
UnlitEnable:"bool",
ViewFxEnable:"bool",
ViewMode:"WorldViewMode",
ViewportScale:"float",
WireframeEnable:"bool",
XenonAsyncLightJobsEnable:"bool",
XenonDrawDebugLightTileGridMode:"uint",
XenonFastHdrEnable:"bool",
XenonFloatDepthBufferEnable:"bool",
XenonHdrColorScale:"float",
XenonHdrColorScaleFactor:"float",
XenonLightTileConstantBufferSize:"uint",
XenonLightTileCpuPointLightCullingEnable:"bool",
XenonLightTileDownsampleSpecularCheckEnable:"bool",
XenonLightTileMaxLineLightCount:"uint",
XenonLightTileMaxPointLightCount:"uint",
XenonLightTileMaxSpotLightCount:"uint",
XenonLineLightsTilingEnable:"bool",
XenonOutdoorLightTilingEnable:"bool",
XenonPointLightsTilingEnable:"bool",
XenonSpotLightsTilingEnable:"bool",
ZBufferShadowTestEnable:"bool",
ZPassEnable:"bool"
};

var XenonPresenceBackendData = {
TitleId:"uint"
};

var XorEntityData = {
In1:"bool",
In2:"bool",
Realm:"fb.Realm"
};

var ZoomLevelData = {
AllowFieldOfViewScaling:"bool",
CameraImpulseMultiplier:"float",
DispersionMultiplier:"float",
FadeFromBlackDuration:"float",
FadeToBlackDuration:"float",
FadeToBlackInZoomTransition:"bool",
FieldOfView:"float",
LookSpeedMultiplier:"float",
MoveSpeedMultiplier:"float",
OnActivateEventType:"ZoomLevelActivateEventType",
RecoilFovMultiplier:"float",
RecoilMultiplier:"float",
ScreenExposureAreaScale:"float",
SprintLookSpeedMultiplier:"float",
StartFadeFromBlackAtTime:"float",
StartFadeToBlackAtTime:"float",
SupportedSwayPitchMultiplier:"float",
SupportedSwayYawMultiplier:"float",
SwayPitchMultiplier:"float",
SwayYawMultiplier:"float",
TimePitchMultiplier:"float",
TimeYawMultiplier:"float",
UseFovSpecialisation:"bool"
};

var ZoomLevelLockData = {
LockType:"fb.LockType",
OutlineTaggedDistance:"float"
};

var ZoomLevelSpecificTransitionTime = {
FovTransitionTime:"float",
FromZoomLevel:"int",
ToZoomLevel:"int",
ZoomTransitionTime:"float"
}