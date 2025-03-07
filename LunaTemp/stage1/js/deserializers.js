var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i330 = root || request.c( 'UnityEngine.JointSpring' )
  var i331 = data
  i330.spring = i331[0]
  i330.damper = i331[1]
  i330.targetPosition = i331[2]
  return i330
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i332 = root || request.c( 'UnityEngine.JointMotor' )
  var i333 = data
  i332.m_TargetVelocity = i333[0]
  i332.m_Force = i333[1]
  i332.m_FreeSpin = i333[2]
  return i332
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i334 = root || request.c( 'UnityEngine.JointLimits' )
  var i335 = data
  i334.m_Min = i335[0]
  i334.m_Max = i335[1]
  i334.m_Bounciness = i335[2]
  i334.m_BounceMinVelocity = i335[3]
  i334.m_ContactDistance = i335[4]
  i334.minBounce = i335[5]
  i334.maxBounce = i335[6]
  return i334
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i336 = root || request.c( 'UnityEngine.JointDrive' )
  var i337 = data
  i336.m_PositionSpring = i337[0]
  i336.m_PositionDamper = i337[1]
  i336.m_MaximumForce = i337[2]
  i336.m_UseAcceleration = i337[3]
  return i336
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i338 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i339 = data
  i338.m_Spring = i339[0]
  i338.m_Damper = i339[1]
  return i338
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i340 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i341 = data
  i340.m_Limit = i341[0]
  i340.m_Bounciness = i341[1]
  i340.m_ContactDistance = i341[2]
  return i340
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i342 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i343 = data
  i342.m_ExtremumSlip = i343[0]
  i342.m_ExtremumValue = i343[1]
  i342.m_AsymptoteSlip = i343[2]
  i342.m_AsymptoteValue = i343[3]
  i342.m_Stiffness = i343[4]
  return i342
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i344 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i345 = data
  i344.m_LowerAngle = i345[0]
  i344.m_UpperAngle = i345[1]
  return i344
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i346 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i347 = data
  i346.m_MotorSpeed = i347[0]
  i346.m_MaximumMotorTorque = i347[1]
  return i346
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i348 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i349 = data
  i348.m_DampingRatio = i349[0]
  i348.m_Frequency = i349[1]
  i348.m_Angle = i349[2]
  return i348
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i350 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i351 = data
  i350.m_LowerTranslation = i351[0]
  i350.m_UpperTranslation = i351[1]
  return i350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.RenderTexture"] = function (request, data, root) {
  var i352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.RenderTexture' )
  var i353 = data
  i352.name = i353[0]
  i352.width = i353[1]
  i352.height = i353[2]
  i352.anisoLevel = i353[3]
  i352.filterMode = i353[4]
  i352.hdr = !!i353[5]
  i352.colorFormat = i353[6]
  i352.depthStencilFormat = i353[7]
  i352.renderTextureFormat = i353[8]
  i352.depth = i353[9]
  i352.wrapU = i353[10]
  i352.wrapV = i353[11]
  return i352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i354 = root || new pc.UnityMaterial()
  var i355 = data
  i354.name = i355[0]
  request.r(i355[1], i355[2], 0, i354, 'shader')
  i354.renderQueue = i355[3]
  i354.enableInstancing = !!i355[4]
  var i357 = i355[5]
  var i356 = []
  for(var i = 0; i < i357.length; i += 1) {
    i356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i357[i + 0]) );
  }
  i354.floatParameters = i356
  var i359 = i355[6]
  var i358 = []
  for(var i = 0; i < i359.length; i += 1) {
    i358.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i359[i + 0]) );
  }
  i354.colorParameters = i358
  var i361 = i355[7]
  var i360 = []
  for(var i = 0; i < i361.length; i += 1) {
    i360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i361[i + 0]) );
  }
  i354.vectorParameters = i360
  var i363 = i355[8]
  var i362 = []
  for(var i = 0; i < i363.length; i += 1) {
    i362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i363[i + 0]) );
  }
  i354.textureParameters = i362
  var i365 = i355[9]
  var i364 = []
  for(var i = 0; i < i365.length; i += 1) {
    i364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i365[i + 0]) );
  }
  i354.materialFlags = i364
  return i354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i369 = data
  i368.name = i369[0]
  i368.value = i369[1]
  return i368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i373 = data
  i372.name = i373[0]
  i372.value = new pc.Color(i373[1], i373[2], i373[3], i373[4])
  return i372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i377 = data
  i376.name = i377[0]
  i376.value = new pc.Vec4( i377[1], i377[2], i377[3], i377[4] )
  return i376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i381 = data
  i380.name = i381[0]
  request.r(i381[1], i381[2], 0, i380, 'value')
  return i380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i385 = data
  i384.name = i385[0]
  i384.enabled = !!i385[1]
  return i384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i387 = data
  i386.name = i387[0]
  i386.width = i387[1]
  i386.height = i387[2]
  i386.mipmapCount = i387[3]
  i386.anisoLevel = i387[4]
  i386.filterMode = i387[5]
  i386.hdr = !!i387[6]
  i386.format = i387[7]
  i386.wrapMode = i387[8]
  i386.alphaIsTransparency = !!i387[9]
  i386.alphaSource = i387[10]
  i386.graphicsFormat = i387[11]
  i386.sRGBTexture = !!i387[12]
  i386.desiredColorSpace = i387[13]
  i386.wrapU = i387[14]
  i386.wrapV = i387[15]
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i389 = data
  i388.name = i389[0]
  i388.index = i389[1]
  i388.startup = !!i389[2]
  return i388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i391 = data
  i390.position = new pc.Vec3( i391[0], i391[1], i391[2] )
  i390.scale = new pc.Vec3( i391[3], i391[4], i391[5] )
  i390.rotation = new pc.Quat(i391[6], i391[7], i391[8], i391[9])
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i393 = data
  i392.enabled = !!i393[0]
  i392.aspect = i393[1]
  i392.orthographic = !!i393[2]
  i392.orthographicSize = i393[3]
  i392.backgroundColor = new pc.Color(i393[4], i393[5], i393[6], i393[7])
  i392.nearClipPlane = i393[8]
  i392.farClipPlane = i393[9]
  i392.fieldOfView = i393[10]
  i392.depth = i393[11]
  i392.clearFlags = i393[12]
  i392.cullingMask = i393[13]
  i392.rect = i393[14]
  request.r(i393[15], i393[16], 0, i392, 'targetTexture')
  i392.usePhysicalProperties = !!i393[17]
  i392.focalLength = i393[18]
  i392.sensorSize = new pc.Vec2( i393[19], i393[20] )
  i392.lensShift = new pc.Vec2( i393[21], i393[22] )
  i392.gateFit = i393[23]
  i392.commandBufferCount = i393[24]
  i392.cameraType = i393[25]
  return i392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i395 = data
  i394.name = i395[0]
  i394.tagId = i395[1]
  i394.enabled = !!i395[2]
  i394.isStatic = !!i395[3]
  i394.layer = i395[4]
  return i394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i397 = data
  i396.pivot = new pc.Vec2( i397[0], i397[1] )
  i396.anchorMin = new pc.Vec2( i397[2], i397[3] )
  i396.anchorMax = new pc.Vec2( i397[4], i397[5] )
  i396.sizeDelta = new pc.Vec2( i397[6], i397[7] )
  i396.anchoredPosition3D = new pc.Vec3( i397[8], i397[9], i397[10] )
  i396.rotation = new pc.Quat(i397[11], i397[12], i397[13], i397[14])
  i396.scale = new pc.Vec3( i397[15], i397[16], i397[17] )
  return i396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i399 = data
  i398.enabled = !!i399[0]
  i398.planeDistance = i399[1]
  i398.referencePixelsPerUnit = i399[2]
  i398.isFallbackOverlay = !!i399[3]
  i398.renderMode = i399[4]
  i398.renderOrder = i399[5]
  i398.sortingLayerName = i399[6]
  i398.sortingOrder = i399[7]
  i398.scaleFactor = i399[8]
  request.r(i399[9], i399[10], 0, i398, 'worldCamera')
  i398.overrideSorting = !!i399[11]
  i398.pixelPerfect = !!i399[12]
  i398.targetDisplay = i399[13]
  i398.overridePixelPerfect = !!i399[14]
  return i398
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i400 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i401 = data
  i400.m_UiScaleMode = i401[0]
  i400.m_ReferencePixelsPerUnit = i401[1]
  i400.m_ScaleFactor = i401[2]
  i400.m_ReferenceResolution = new pc.Vec2( i401[3], i401[4] )
  i400.m_ScreenMatchMode = i401[5]
  i400.m_MatchWidthOrHeight = i401[6]
  i400.m_PhysicalUnit = i401[7]
  i400.m_FallbackScreenDPI = i401[8]
  i400.m_DefaultSpriteDPI = i401[9]
  i400.m_DynamicPixelsPerUnit = i401[10]
  i400.m_PresetInfoIsWorld = !!i401[11]
  return i400
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i402 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i403 = data
  i402.m_IgnoreReversedGraphics = !!i403[0]
  i402.m_BlockingObjects = i403[1]
  i402.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i403[2] )
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i405 = data
  i404.cullTransparentMesh = !!i405[0]
  return i404
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i406 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i407 = data
  request.r(i407[0], i407[1], 0, i406, 'm_Texture')
  i406.m_UVRect = UnityEngine.Rect.MinMaxRect(i407[2], i407[3], i407[4], i407[5])
  request.r(i407[6], i407[7], 0, i406, 'm_Material')
  i406.m_Maskable = !!i407[8]
  i406.m_Color = new pc.Color(i407[9], i407[10], i407[11], i407[12])
  i406.m_RaycastTarget = !!i407[13]
  i406.m_RaycastPadding = new pc.Vec4( i407[14], i407[15], i407[16], i407[17] )
  return i406
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i408 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i409 = data
  request.r(i409[0], i409[1], 0, i408, 'm_FirstSelected')
  i408.m_sendNavigationEvents = !!i409[2]
  i408.m_DragThreshold = i409[3]
  return i408
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i410 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i411 = data
  i410.m_HorizontalAxis = i411[0]
  i410.m_VerticalAxis = i411[1]
  i410.m_SubmitButton = i411[2]
  i410.m_CancelButton = i411[3]
  i410.m_InputActionsPerSecond = i411[4]
  i410.m_RepeatDelay = i411[5]
  i410.m_ForceModuleActive = !!i411[6]
  i410.m_SendPointerHoverToParent = !!i411[7]
  return i410
}

Deserializers["VideoManager"] = function (request, data, root) {
  var i412 = root || request.c( 'VideoManager' )
  var i413 = data
  request.r(i413[0], i413[1], 0, i412, 'fullVidHorizon')
  request.r(i413[2], i413[3], 0, i412, 'fullVidVertical')
  request.r(i413[4], i413[5], 0, i412, 'ScreenHorizon')
  request.r(i413[6], i413[7], 0, i412, 'ScreenVertical')
  request.r(i413[8], i413[9], 0, i412, 'audioBG')
  return i412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i415 = data
  request.r(i415[0], i415[1], 0, i414, 'clip')
  request.r(i415[2], i415[3], 0, i414, 'outputAudioMixerGroup')
  i414.playOnAwake = !!i415[4]
  i414.loop = !!i415[5]
  i414.time = i415[6]
  i414.volume = i415[7]
  i414.pitch = i415[8]
  i414.enabled = !!i415[9]
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.VideoPlayer"] = function (request, data, root) {
  var i416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.VideoPlayer' )
  var i417 = data
  i416.enabled = !!i417[0]
  i416.source = i417[1]
  request.r(i417[2], i417[3], 0, i416, 'clip')
  i416.url = i417[4]
  i416.playOnAwake = !!i417[5]
  i416.isLooping = !!i417[6]
  i416.renderMode = i417[7]
  request.r(i417[8], i417[9], 0, i416, 'targetTexture')
  request.r(i417[10], i417[11], 0, i416, 'targetMaterialRenderer')
  i416.targetMaterialProperty = i417[12]
  i416.playbackSpeed = i417[13]
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i419 = data
  i418.enabled = !!i419[0]
  request.r(i419[1], i419[2], 0, i418, 'sharedMaterial')
  var i421 = i419[3]
  var i420 = []
  for(var i = 0; i < i421.length; i += 2) {
  request.r(i421[i + 0], i421[i + 1], 2, i420, '')
  }
  i418.sharedMaterials = i420
  i418.receiveShadows = !!i419[4]
  i418.shadowCastingMode = i419[5]
  i418.sortingLayerID = i419[6]
  i418.sortingOrder = i419[7]
  i418.lightmapIndex = i419[8]
  i418.lightmapSceneIndex = i419[9]
  i418.lightmapScaleOffset = new pc.Vec4( i419[10], i419[11], i419[12], i419[13] )
  i418.lightProbeUsage = i419[14]
  i418.reflectionProbeUsage = i419[15]
  i418.color = new pc.Color(i419[16], i419[17], i419[18], i419[19])
  request.r(i419[20], i419[21], 0, i418, 'sprite')
  i418.flipX = !!i419[22]
  i418.flipY = !!i419[23]
  i418.drawMode = i419[24]
  i418.size = new pc.Vec2( i419[25], i419[26] )
  i418.tileMode = i419[27]
  i418.adaptiveModeThreshold = i419[28]
  i418.maskInteraction = i419[29]
  i418.spriteSortPoint = i419[30]
  return i418
}

Deserializers["Hand"] = function (request, data, root) {
  var i424 = root || request.c( 'Hand' )
  var i425 = data
  request.r(i425[0], i425[1], 0, i424, 'source')
  request.r(i425[2], i425[3], 0, i424, 'anim')
  return i424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i427 = data
  request.r(i427[0], i427[1], 0, i426, 'animatorController')
  request.r(i427[2], i427[3], 0, i426, 'avatar')
  i426.updateMode = i427[4]
  i426.hasTransformHierarchy = !!i427[5]
  i426.applyRootMotion = !!i427[6]
  var i429 = i427[7]
  var i428 = []
  for(var i = 0; i < i429.length; i += 2) {
  request.r(i429[i + 0], i429[i + 1], 2, i428, '')
  }
  i426.humanBones = i428
  i426.enabled = !!i427[8]
  return i426
}

Deserializers["DeviceOrientation"] = function (request, data, root) {
  var i432 = root || request.c( 'DeviceOrientation' )
  var i433 = data
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i435 = data
  i434.ambientIntensity = i435[0]
  i434.reflectionIntensity = i435[1]
  i434.ambientMode = i435[2]
  i434.ambientLight = new pc.Color(i435[3], i435[4], i435[5], i435[6])
  i434.ambientSkyColor = new pc.Color(i435[7], i435[8], i435[9], i435[10])
  i434.ambientGroundColor = new pc.Color(i435[11], i435[12], i435[13], i435[14])
  i434.ambientEquatorColor = new pc.Color(i435[15], i435[16], i435[17], i435[18])
  i434.fogColor = new pc.Color(i435[19], i435[20], i435[21], i435[22])
  i434.fogEndDistance = i435[23]
  i434.fogStartDistance = i435[24]
  i434.fogDensity = i435[25]
  i434.fog = !!i435[26]
  request.r(i435[27], i435[28], 0, i434, 'skybox')
  i434.fogMode = i435[29]
  var i437 = i435[30]
  var i436 = []
  for(var i = 0; i < i437.length; i += 1) {
    i436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i437[i + 0]) );
  }
  i434.lightmaps = i436
  i434.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i435[31], i434.lightProbes)
  i434.lightmapsMode = i435[32]
  i434.mixedBakeMode = i435[33]
  i434.environmentLightingMode = i435[34]
  i434.ambientProbe = new pc.SphericalHarmonicsL2(i435[35])
  i434.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i435[36])
  i434.useReferenceAmbientProbe = !!i435[37]
  request.r(i435[38], i435[39], 0, i434, 'customReflection')
  request.r(i435[40], i435[41], 0, i434, 'defaultReflection')
  i434.defaultReflectionMode = i435[42]
  i434.defaultReflectionResolution = i435[43]
  i434.sunLightObjectId = i435[44]
  i434.pixelLightCount = i435[45]
  i434.defaultReflectionHDR = !!i435[46]
  i434.hasLightDataAsset = !!i435[47]
  i434.hasManualGenerate = !!i435[48]
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i441 = data
  request.r(i441[0], i441[1], 0, i440, 'lightmapColor')
  request.r(i441[2], i441[3], 0, i440, 'lightmapDirection')
  return i440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i442 = root || new UnityEngine.LightProbes()
  var i443 = data
  return i442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i451 = data
  var i453 = i451[0]
  var i452 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i453.length; i += 1) {
    i452.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i453[i + 0]));
  }
  i450.ShaderCompilationErrors = i452
  i450.name = i451[1]
  i450.guid = i451[2]
  var i455 = i451[3]
  var i454 = []
  for(var i = 0; i < i455.length; i += 1) {
    i454.push( i455[i + 0] );
  }
  i450.shaderDefinedKeywords = i454
  var i457 = i451[4]
  var i456 = []
  for(var i = 0; i < i457.length; i += 1) {
    i456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i457[i + 0]) );
  }
  i450.passes = i456
  var i459 = i451[5]
  var i458 = []
  for(var i = 0; i < i459.length; i += 1) {
    i458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i459[i + 0]) );
  }
  i450.usePasses = i458
  var i461 = i451[6]
  var i460 = []
  for(var i = 0; i < i461.length; i += 1) {
    i460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i461[i + 0]) );
  }
  i450.defaultParameterValues = i460
  request.r(i451[7], i451[8], 0, i450, 'unityFallbackShader')
  i450.readDepth = !!i451[9]
  i450.isCreatedByShaderGraph = !!i451[10]
  i450.compiled = !!i451[11]
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i465 = data
  i464.shaderName = i465[0]
  i464.errorMessage = i465[1]
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i470 = root || new pc.UnityShaderPass()
  var i471 = data
  i470.id = i471[0]
  i470.subShaderIndex = i471[1]
  i470.name = i471[2]
  i470.passType = i471[3]
  i470.grabPassTextureName = i471[4]
  i470.usePass = !!i471[5]
  i470.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i471[6], i470.zTest)
  i470.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i471[7], i470.zWrite)
  i470.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i471[8], i470.culling)
  i470.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i471[9], i470.blending)
  i470.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i471[10], i470.alphaBlending)
  i470.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i471[11], i470.colorWriteMask)
  i470.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i471[12], i470.offsetUnits)
  i470.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i471[13], i470.offsetFactor)
  i470.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i471[14], i470.stencilRef)
  i470.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i471[15], i470.stencilReadMask)
  i470.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i471[16], i470.stencilWriteMask)
  i470.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i471[17], i470.stencilOp)
  i470.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i471[18], i470.stencilOpFront)
  i470.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i471[19], i470.stencilOpBack)
  var i473 = i471[20]
  var i472 = []
  for(var i = 0; i < i473.length; i += 1) {
    i472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i473[i + 0]) );
  }
  i470.tags = i472
  var i475 = i471[21]
  var i474 = []
  for(var i = 0; i < i475.length; i += 1) {
    i474.push( i475[i + 0] );
  }
  i470.passDefinedKeywords = i474
  var i477 = i471[22]
  var i476 = []
  for(var i = 0; i < i477.length; i += 1) {
    i476.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i477[i + 0]) );
  }
  i470.passDefinedKeywordGroups = i476
  var i479 = i471[23]
  var i478 = []
  for(var i = 0; i < i479.length; i += 1) {
    i478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i479[i + 0]) );
  }
  i470.variants = i478
  var i481 = i471[24]
  var i480 = []
  for(var i = 0; i < i481.length; i += 1) {
    i480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i481[i + 0]) );
  }
  i470.excludedVariants = i480
  i470.hasDepthReader = !!i471[25]
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i483 = data
  i482.val = i483[0]
  i482.name = i483[1]
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i485 = data
  i484.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i485[0], i484.src)
  i484.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i485[1], i484.dst)
  i484.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i485[2], i484.op)
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i487 = data
  i486.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i487[0], i486.pass)
  i486.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i487[1], i486.fail)
  i486.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i487[2], i486.zFail)
  i486.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i487[3], i486.comp)
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i491 = data
  i490.name = i491[0]
  i490.value = i491[1]
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i495 = data
  var i497 = i495[0]
  var i496 = []
  for(var i = 0; i < i497.length; i += 1) {
    i496.push( i497[i + 0] );
  }
  i494.keywords = i496
  i494.hasDiscard = !!i495[1]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i501 = data
  i500.passId = i501[0]
  i500.subShaderIndex = i501[1]
  var i503 = i501[2]
  var i502 = []
  for(var i = 0; i < i503.length; i += 1) {
    i502.push( i503[i + 0] );
  }
  i500.keywords = i502
  i500.vertexProgram = i501[3]
  i500.fragmentProgram = i501[4]
  i500.exportedForWebGl2 = !!i501[5]
  i500.readDepth = !!i501[6]
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i507 = data
  request.r(i507[0], i507[1], 0, i506, 'shader')
  i506.pass = i507[2]
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i511 = data
  i510.name = i511[0]
  i510.type = i511[1]
  i510.value = new pc.Vec4( i511[2], i511[3], i511[4], i511[5] )
  i510.textureValue = i511[6]
  i510.shaderPropertyFlag = i511[7]
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i513 = data
  i512.name = i513[0]
  request.r(i513[1], i513[2], 0, i512, 'texture')
  i512.aabb = i513[3]
  i512.vertices = i513[4]
  i512.triangles = i513[5]
  i512.textureRect = UnityEngine.Rect.MinMaxRect(i513[6], i513[7], i513[8], i513[9])
  i512.packedRect = UnityEngine.Rect.MinMaxRect(i513[10], i513[11], i513[12], i513[13])
  i512.border = new pc.Vec4( i513[14], i513[15], i513[16], i513[17] )
  i512.transparency = i513[18]
  i512.bounds = i513[19]
  i512.pixelsPerUnit = i513[20]
  i512.textureWidth = i513[21]
  i512.textureHeight = i513[22]
  i512.nativeSize = new pc.Vec2( i513[23], i513[24] )
  i512.pivot = new pc.Vec2( i513[25], i513[26] )
  i512.textureRectOffset = new pc.Vec2( i513[27], i513[28] )
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.VideoClip"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.VideoClip' )
  var i515 = data
  i514.name = i515[0]
  i514.width = i515[1]
  i514.height = i515[2]
  i514.frameRate = i515[3]
  i514.frameCount = System.UInt64(i515[4])
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i517 = data
  i516.name = i517[0]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i519 = data
  i518.name = i519[0]
  i518.wrapMode = i519[1]
  i518.isLooping = !!i519[2]
  i518.length = i519[3]
  var i521 = i519[4]
  var i520 = []
  for(var i = 0; i < i521.length; i += 1) {
    i520.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i521[i + 0]) );
  }
  i518.curves = i520
  var i523 = i519[5]
  var i522 = []
  for(var i = 0; i < i523.length; i += 1) {
    i522.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i523[i + 0]) );
  }
  i518.events = i522
  i518.halfPrecision = !!i519[6]
  i518._frameRate = i519[7]
  i518.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i519[8], i518.localBounds)
  i518.hasMuscleCurves = !!i519[9]
  var i525 = i519[10]
  var i524 = []
  for(var i = 0; i < i525.length; i += 1) {
    i524.push( i525[i + 0] );
  }
  i518.clipMuscleConstant = i524
  i518.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i519[11], i518.clipBindingConstant)
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i529 = data
  i528.path = i529[0]
  i528.hash = i529[1]
  i528.componentType = i529[2]
  i528.property = i529[3]
  i528.keys = i529[4]
  var i531 = i529[5]
  var i530 = []
  for(var i = 0; i < i531.length; i += 1) {
    i530.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i531[i + 0]) );
  }
  i528.objectReferenceKeys = i530
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i535 = data
  i534.time = i535[0]
  request.r(i535[1], i535[2], 0, i534, 'value')
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i539 = data
  i538.functionName = i539[0]
  i538.floatParameter = i539[1]
  i538.intParameter = i539[2]
  i538.stringParameter = i539[3]
  request.r(i539[4], i539[5], 0, i538, 'objectReferenceParameter')
  i538.time = i539[6]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i541 = data
  i540.center = new pc.Vec3( i541[0], i541[1], i541[2] )
  i540.extends = new pc.Vec3( i541[3], i541[4], i541[5] )
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i545 = data
  var i547 = i545[0]
  var i546 = []
  for(var i = 0; i < i547.length; i += 1) {
    i546.push( i547[i + 0] );
  }
  i544.genericBindings = i546
  var i549 = i545[1]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( i549[i + 0] );
  }
  i544.pptrCurveMapping = i548
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i551 = data
  i550.name = i551[0]
  var i553 = i551[1]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i553[i + 0]) );
  }
  i550.layers = i552
  var i555 = i551[2]
  var i554 = []
  for(var i = 0; i < i555.length; i += 1) {
    i554.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i555[i + 0]) );
  }
  i550.parameters = i554
  i550.animationClips = i551[3]
  i550.avatarUnsupported = i551[4]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i559 = data
  i558.name = i559[0]
  i558.defaultWeight = i559[1]
  i558.blendingMode = i559[2]
  i558.avatarMask = i559[3]
  i558.syncedLayerIndex = i559[4]
  i558.syncedLayerAffectsTiming = !!i559[5]
  i558.syncedLayers = i559[6]
  i558.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i559[7], i558.stateMachine)
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i561 = data
  i560.id = i561[0]
  i560.name = i561[1]
  i560.path = i561[2]
  var i563 = i561[3]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i563[i + 0]) );
  }
  i560.states = i562
  var i565 = i561[4]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i565[i + 0]) );
  }
  i560.machines = i564
  var i567 = i561[5]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i567[i + 0]) );
  }
  i560.entryStateTransitions = i566
  var i569 = i561[6]
  var i568 = []
  for(var i = 0; i < i569.length; i += 1) {
    i568.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i569[i + 0]) );
  }
  i560.exitStateTransitions = i568
  var i571 = i561[7]
  var i570 = []
  for(var i = 0; i < i571.length; i += 1) {
    i570.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i571[i + 0]) );
  }
  i560.anyStateTransitions = i570
  i560.defaultStateId = i561[8]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i575 = data
  i574.id = i575[0]
  i574.name = i575[1]
  i574.cycleOffset = i575[2]
  i574.cycleOffsetParameter = i575[3]
  i574.cycleOffsetParameterActive = !!i575[4]
  i574.mirror = !!i575[5]
  i574.mirrorParameter = i575[6]
  i574.mirrorParameterActive = !!i575[7]
  i574.motionId = i575[8]
  i574.nameHash = i575[9]
  i574.fullPathHash = i575[10]
  i574.speed = i575[11]
  i574.speedParameter = i575[12]
  i574.speedParameterActive = !!i575[13]
  i574.tag = i575[14]
  i574.tagHash = i575[15]
  i574.writeDefaultValues = !!i575[16]
  var i577 = i575[17]
  var i576 = []
  for(var i = 0; i < i577.length; i += 2) {
  request.r(i577[i + 0], i577[i + 1], 2, i576, '')
  }
  i574.behaviours = i576
  var i579 = i575[18]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i579[i + 0]) );
  }
  i574.transitions = i578
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i585 = data
  i584.fullPath = i585[0]
  i584.canTransitionToSelf = !!i585[1]
  i584.duration = i585[2]
  i584.exitTime = i585[3]
  i584.hasExitTime = !!i585[4]
  i584.hasFixedDuration = !!i585[5]
  i584.interruptionSource = i585[6]
  i584.offset = i585[7]
  i584.orderedInterruption = !!i585[8]
  i584.destinationStateId = i585[9]
  i584.isExit = !!i585[10]
  i584.mute = !!i585[11]
  i584.solo = !!i585[12]
  var i587 = i585[13]
  var i586 = []
  for(var i = 0; i < i587.length; i += 1) {
    i586.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i587[i + 0]) );
  }
  i584.conditions = i586
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i593 = data
  i592.destinationStateId = i593[0]
  i592.isExit = !!i593[1]
  i592.mute = !!i593[2]
  i592.solo = !!i593[3]
  var i595 = i593[4]
  var i594 = []
  for(var i = 0; i < i595.length; i += 1) {
    i594.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i595[i + 0]) );
  }
  i592.conditions = i594
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i599 = data
  i598.mode = i599[0]
  i598.parameter = i599[1]
  i598.threshold = i599[2]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i603 = data
  i602.defaultBool = !!i603[0]
  i602.defaultFloat = i603[1]
  i602.defaultInt = i603[2]
  i602.name = i603[3]
  i602.nameHash = i603[4]
  i602.type = i603[5]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i605 = data
  var i607 = i605[0]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i607[i + 0]) );
  }
  i604.files = i606
  i604.componentToPrefabIds = i605[1]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i611 = data
  i610.path = i611[0]
  request.r(i611[1], i611[2], 0, i610, 'unityObject')
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i613 = data
  var i615 = i613[0]
  var i614 = []
  for(var i = 0; i < i615.length; i += 1) {
    i614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i615[i + 0]) );
  }
  i612.scriptsExecutionOrder = i614
  var i617 = i613[1]
  var i616 = []
  for(var i = 0; i < i617.length; i += 1) {
    i616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i617[i + 0]) );
  }
  i612.sortingLayers = i616
  var i619 = i613[2]
  var i618 = []
  for(var i = 0; i < i619.length; i += 1) {
    i618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i619[i + 0]) );
  }
  i612.cullingLayers = i618
  i612.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i613[3], i612.timeSettings)
  i612.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i613[4], i612.physicsSettings)
  i612.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i613[5], i612.physics2DSettings)
  i612.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i613[6], i612.qualitySettings)
  i612.enableRealtimeShadows = !!i613[7]
  i612.enableAutoInstancing = !!i613[8]
  i612.enableDynamicBatching = !!i613[9]
  i612.lightmapEncodingQuality = i613[10]
  i612.desiredColorSpace = i613[11]
  var i621 = i613[12]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( i621[i + 0] );
  }
  i612.allTags = i620
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i625 = data
  i624.name = i625[0]
  i624.value = i625[1]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i629 = data
  i628.id = i629[0]
  i628.name = i629[1]
  i628.value = i629[2]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i633 = data
  i632.id = i633[0]
  i632.name = i633[1]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i635 = data
  i634.fixedDeltaTime = i635[0]
  i634.maximumDeltaTime = i635[1]
  i634.timeScale = i635[2]
  i634.maximumParticleTimestep = i635[3]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i637 = data
  i636.gravity = new pc.Vec3( i637[0], i637[1], i637[2] )
  i636.defaultSolverIterations = i637[3]
  i636.bounceThreshold = i637[4]
  i636.autoSyncTransforms = !!i637[5]
  i636.autoSimulation = !!i637[6]
  var i639 = i637[7]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i639[i + 0]) );
  }
  i636.collisionMatrix = i638
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i643 = data
  i642.enabled = !!i643[0]
  i642.layerId = i643[1]
  i642.otherLayerId = i643[2]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i645 = data
  request.r(i645[0], i645[1], 0, i644, 'material')
  i644.gravity = new pc.Vec2( i645[2], i645[3] )
  i644.positionIterations = i645[4]
  i644.velocityIterations = i645[5]
  i644.velocityThreshold = i645[6]
  i644.maxLinearCorrection = i645[7]
  i644.maxAngularCorrection = i645[8]
  i644.maxTranslationSpeed = i645[9]
  i644.maxRotationSpeed = i645[10]
  i644.baumgarteScale = i645[11]
  i644.baumgarteTOIScale = i645[12]
  i644.timeToSleep = i645[13]
  i644.linearSleepTolerance = i645[14]
  i644.angularSleepTolerance = i645[15]
  i644.defaultContactOffset = i645[16]
  i644.autoSimulation = !!i645[17]
  i644.queriesHitTriggers = !!i645[18]
  i644.queriesStartInColliders = !!i645[19]
  i644.callbacksOnDisable = !!i645[20]
  i644.reuseCollisionCallbacks = !!i645[21]
  i644.autoSyncTransforms = !!i645[22]
  var i647 = i645[23]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i647[i + 0]) );
  }
  i644.collisionMatrix = i646
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i651 = data
  i650.enabled = !!i651[0]
  i650.layerId = i651[1]
  i650.otherLayerId = i651[2]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i653 = data
  var i655 = i653[0]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i655[i + 0]) );
  }
  i652.qualityLevels = i654
  var i657 = i653[1]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( i657[i + 0] );
  }
  i652.names = i656
  i652.shadows = i653[2]
  i652.anisotropicFiltering = i653[3]
  i652.antiAliasing = i653[4]
  i652.lodBias = i653[5]
  i652.shadowCascades = i653[6]
  i652.shadowDistance = i653[7]
  i652.shadowmaskMode = i653[8]
  i652.shadowProjection = i653[9]
  i652.shadowResolution = i653[10]
  i652.softParticles = !!i653[11]
  i652.softVegetation = !!i653[12]
  i652.activeColorSpace = i653[13]
  i652.desiredColorSpace = i653[14]
  i652.masterTextureLimit = i653[15]
  i652.maxQueuedFrames = i653[16]
  i652.particleRaycastBudget = i653[17]
  i652.pixelLightCount = i653[18]
  i652.realtimeReflectionProbes = !!i653[19]
  i652.shadowCascade2Split = i653[20]
  i652.shadowCascade4Split = new pc.Vec3( i653[21], i653[22], i653[23] )
  i652.streamingMipmapsActive = !!i653[24]
  i652.vSyncCount = i653[25]
  i652.asyncUploadBufferSize = i653[26]
  i652.asyncUploadTimeSlice = i653[27]
  i652.billboardsFaceCameraPosition = !!i653[28]
  i652.shadowNearPlaneOffset = i653[29]
  i652.streamingMipmapsMemoryBudget = i653[30]
  i652.maximumLODLevel = i653[31]
  i652.streamingMipmapsAddAllCameras = !!i653[32]
  i652.streamingMipmapsMaxLevelReduction = i653[33]
  i652.streamingMipmapsRenderersPerFrame = i653[34]
  i652.resolutionScalingFixedDPIFactor = i653[35]
  i652.streamingMipmapsMaxFileIORequests = i653[36]
  i652.currentQualityLevel = i653[37]
  return i652
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.RenderTexture":{"name":0,"width":1,"height":2,"anisoLevel":3,"filterMode":4,"hdr":5,"colorFormat":6,"depthStencilFormat":7,"renderTextureFormat":8,"depth":9,"wrapU":10,"wrapV":11},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.VideoPlayer":{"enabled":0,"source":1,"clip":2,"url":4,"playOnAwake":5,"isLooping":6,"renderMode":7,"targetTexture":8,"targetMaterialRenderer":10,"targetMaterialProperty":12,"playbackSpeed":13},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.VideoClip":{"name":0,"width":1,"height":2,"frameRate":3,"frameCount":4},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"29":[30],"31":[30],"32":[30],"33":[30],"34":[30],"35":[30],"36":[37],"38":[2],"39":[40],"41":[40],"42":[40],"43":[40],"44":[40],"45":[40],"46":[40],"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[48],"55":[48],"56":[48],"57":[48],"58":[48],"59":[48],"60":[48],"61":[2],"62":[63],"64":[65],"66":[65],"5":[4],"67":[68],"69":[21],"70":[68],"71":[4],"72":[4],"8":[5],"73":[9,4],"74":[4],"7":[5],"75":[4],"76":[4],"77":[4],"78":[4],"79":[4],"80":[4],"81":[4],"82":[4],"83":[4],"10":[9,4],"84":[4],"85":[4],"86":[4],"87":[4],"88":[9,4],"89":[4],"90":[12],"91":[12],"13":[12],"92":[12],"93":[2],"94":[2],"95":[96],"97":[2],"98":[4],"99":[63,4],"100":[4,9],"101":[4],"102":[9,4],"103":[63],"104":[9,4],"105":[4],"106":[68]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","UnityEngine.RenderTexture","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.MonoBehaviour","VideoManager","UnityEngine.Video.VideoPlayer","UnityEngine.GameObject","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Video.VideoClip","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","Hand","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","DeviceOrientation","UnityEngine.Texture2D","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.41f1";

Deserializers.productName = "KingPin_EC(1)_2101";

Deserializers.lunaInitializationTime = "01/17/2025 15:27:37";

Deserializers.lunaDaysRunning = "2.5";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "KingPin_Ec_18s_2101";

Deserializers.lunaAppID = "25626";

Deserializers.projectId = "f9764b7631c968347b71a6067fd79800";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1718";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3621";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system, reflection, prefabs";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "2194c84d-5812-4d06-b25d-aa6a9e3295e7";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

