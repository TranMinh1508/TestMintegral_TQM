var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i332 = root || request.c( 'UnityEngine.JointSpring' )
  var i333 = data
  i332.spring = i333[0]
  i332.damper = i333[1]
  i332.targetPosition = i333[2]
  return i332
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i334 = root || request.c( 'UnityEngine.JointMotor' )
  var i335 = data
  i334.m_TargetVelocity = i335[0]
  i334.m_Force = i335[1]
  i334.m_FreeSpin = i335[2]
  return i334
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i336 = root || request.c( 'UnityEngine.JointLimits' )
  var i337 = data
  i336.m_Min = i337[0]
  i336.m_Max = i337[1]
  i336.m_Bounciness = i337[2]
  i336.m_BounceMinVelocity = i337[3]
  i336.m_ContactDistance = i337[4]
  i336.minBounce = i337[5]
  i336.maxBounce = i337[6]
  return i336
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i338 = root || request.c( 'UnityEngine.JointDrive' )
  var i339 = data
  i338.m_PositionSpring = i339[0]
  i338.m_PositionDamper = i339[1]
  i338.m_MaximumForce = i339[2]
  i338.m_UseAcceleration = i339[3]
  return i338
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i340 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i341 = data
  i340.m_Spring = i341[0]
  i340.m_Damper = i341[1]
  return i340
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i342 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i343 = data
  i342.m_Limit = i343[0]
  i342.m_Bounciness = i343[1]
  i342.m_ContactDistance = i343[2]
  return i342
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i344 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i345 = data
  i344.m_ExtremumSlip = i345[0]
  i344.m_ExtremumValue = i345[1]
  i344.m_AsymptoteSlip = i345[2]
  i344.m_AsymptoteValue = i345[3]
  i344.m_Stiffness = i345[4]
  return i344
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i346 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i347 = data
  i346.m_LowerAngle = i347[0]
  i346.m_UpperAngle = i347[1]
  return i346
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i348 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i349 = data
  i348.m_MotorSpeed = i349[0]
  i348.m_MaximumMotorTorque = i349[1]
  return i348
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i350 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i351 = data
  i350.m_DampingRatio = i351[0]
  i350.m_Frequency = i351[1]
  i350.m_Angle = i351[2]
  return i350
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i352 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i353 = data
  i352.m_LowerTranslation = i353[0]
  i352.m_UpperTranslation = i353[1]
  return i352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i355 = data
  i354.name = i355[0]
  i354.width = i355[1]
  i354.height = i355[2]
  i354.mipmapCount = i355[3]
  i354.anisoLevel = i355[4]
  i354.filterMode = i355[5]
  i354.hdr = !!i355[6]
  i354.format = i355[7]
  i354.wrapMode = i355[8]
  i354.alphaIsTransparency = !!i355[9]
  i354.alphaSource = i355[10]
  i354.graphicsFormat = i355[11]
  i354.sRGBTexture = !!i355[12]
  i354.desiredColorSpace = i355[13]
  i354.wrapU = i355[14]
  i354.wrapV = i355[15]
  return i354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.RenderTexture"] = function (request, data, root) {
  var i356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.RenderTexture' )
  var i357 = data
  i356.name = i357[0]
  i356.width = i357[1]
  i356.height = i357[2]
  i356.anisoLevel = i357[3]
  i356.filterMode = i357[4]
  i356.hdr = !!i357[5]
  i356.colorFormat = i357[6]
  i356.depthStencilFormat = i357[7]
  i356.renderTextureFormat = i357[8]
  i356.depth = i357[9]
  i356.wrapU = i357[10]
  i356.wrapV = i357[11]
  return i356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i358 = root || new pc.UnityMaterial()
  var i359 = data
  i358.name = i359[0]
  request.r(i359[1], i359[2], 0, i358, 'shader')
  i358.renderQueue = i359[3]
  i358.enableInstancing = !!i359[4]
  var i361 = i359[5]
  var i360 = []
  for(var i = 0; i < i361.length; i += 1) {
    i360.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i361[i + 0]) );
  }
  i358.floatParameters = i360
  var i363 = i359[6]
  var i362 = []
  for(var i = 0; i < i363.length; i += 1) {
    i362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i363[i + 0]) );
  }
  i358.colorParameters = i362
  var i365 = i359[7]
  var i364 = []
  for(var i = 0; i < i365.length; i += 1) {
    i364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i365[i + 0]) );
  }
  i358.vectorParameters = i364
  var i367 = i359[8]
  var i366 = []
  for(var i = 0; i < i367.length; i += 1) {
    i366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i367[i + 0]) );
  }
  i358.textureParameters = i366
  var i369 = i359[9]
  var i368 = []
  for(var i = 0; i < i369.length; i += 1) {
    i368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i369[i + 0]) );
  }
  i358.materialFlags = i368
  return i358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i373 = data
  i372.name = i373[0]
  i372.value = i373[1]
  return i372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i377 = data
  i376.name = i377[0]
  i376.value = new pc.Color(i377[1], i377[2], i377[3], i377[4])
  return i376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i381 = data
  i380.name = i381[0]
  i380.value = new pc.Vec4( i381[1], i381[2], i381[3], i381[4] )
  return i380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i385 = data
  i384.name = i385[0]
  request.r(i385[1], i385[2], 0, i384, 'value')
  return i384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i389 = data
  i388.name = i389[0]
  i388.enabled = !!i389[1]
  return i388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i391 = data
  i390.name = i391[0]
  i390.index = i391[1]
  i390.startup = !!i391[2]
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i393 = data
  i392.position = new pc.Vec3( i393[0], i393[1], i393[2] )
  i392.scale = new pc.Vec3( i393[3], i393[4], i393[5] )
  i392.rotation = new pc.Quat(i393[6], i393[7], i393[8], i393[9])
  return i392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i395 = data
  i394.enabled = !!i395[0]
  i394.aspect = i395[1]
  i394.orthographic = !!i395[2]
  i394.orthographicSize = i395[3]
  i394.backgroundColor = new pc.Color(i395[4], i395[5], i395[6], i395[7])
  i394.nearClipPlane = i395[8]
  i394.farClipPlane = i395[9]
  i394.fieldOfView = i395[10]
  i394.depth = i395[11]
  i394.clearFlags = i395[12]
  i394.cullingMask = i395[13]
  i394.rect = i395[14]
  request.r(i395[15], i395[16], 0, i394, 'targetTexture')
  i394.usePhysicalProperties = !!i395[17]
  i394.focalLength = i395[18]
  i394.sensorSize = new pc.Vec2( i395[19], i395[20] )
  i394.lensShift = new pc.Vec2( i395[21], i395[22] )
  i394.gateFit = i395[23]
  i394.commandBufferCount = i395[24]
  i394.cameraType = i395[25]
  return i394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i397 = data
  i396.name = i397[0]
  i396.tagId = i397[1]
  i396.enabled = !!i397[2]
  i396.isStatic = !!i397[3]
  i396.layer = i397[4]
  return i396
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i398 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i399 = data
  request.r(i399[0], i399[1], 0, i398, 'm_FirstSelected')
  i398.m_sendNavigationEvents = !!i399[2]
  i398.m_DragThreshold = i399[3]
  return i398
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i400 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i401 = data
  i400.m_HorizontalAxis = i401[0]
  i400.m_VerticalAxis = i401[1]
  i400.m_SubmitButton = i401[2]
  i400.m_CancelButton = i401[3]
  i400.m_InputActionsPerSecond = i401[4]
  i400.m_RepeatDelay = i401[5]
  i400.m_ForceModuleActive = !!i401[6]
  i400.m_SendPointerHoverToParent = !!i401[7]
  return i400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i403 = data
  i402.pivot = new pc.Vec2( i403[0], i403[1] )
  i402.anchorMin = new pc.Vec2( i403[2], i403[3] )
  i402.anchorMax = new pc.Vec2( i403[4], i403[5] )
  i402.sizeDelta = new pc.Vec2( i403[6], i403[7] )
  i402.anchoredPosition3D = new pc.Vec3( i403[8], i403[9], i403[10] )
  i402.rotation = new pc.Quat(i403[11], i403[12], i403[13], i403[14])
  i402.scale = new pc.Vec3( i403[15], i403[16], i403[17] )
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i405 = data
  i404.enabled = !!i405[0]
  i404.planeDistance = i405[1]
  i404.referencePixelsPerUnit = i405[2]
  i404.isFallbackOverlay = !!i405[3]
  i404.renderMode = i405[4]
  i404.renderOrder = i405[5]
  i404.sortingLayerName = i405[6]
  i404.sortingOrder = i405[7]
  i404.scaleFactor = i405[8]
  request.r(i405[9], i405[10], 0, i404, 'worldCamera')
  i404.overrideSorting = !!i405[11]
  i404.pixelPerfect = !!i405[12]
  i404.targetDisplay = i405[13]
  i404.overridePixelPerfect = !!i405[14]
  return i404
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i406 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i407 = data
  i406.m_UiScaleMode = i407[0]
  i406.m_ReferencePixelsPerUnit = i407[1]
  i406.m_ScaleFactor = i407[2]
  i406.m_ReferenceResolution = new pc.Vec2( i407[3], i407[4] )
  i406.m_ScreenMatchMode = i407[5]
  i406.m_MatchWidthOrHeight = i407[6]
  i406.m_PhysicalUnit = i407[7]
  i406.m_FallbackScreenDPI = i407[8]
  i406.m_DefaultSpriteDPI = i407[9]
  i406.m_DynamicPixelsPerUnit = i407[10]
  i406.m_PresetInfoIsWorld = !!i407[11]
  return i406
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i408 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i409 = data
  i408.m_IgnoreReversedGraphics = !!i409[0]
  i408.m_BlockingObjects = i409[1]
  i408.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i409[2] )
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i411 = data
  i410.cullTransparentMesh = !!i411[0]
  return i410
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i412 = root || request.c( 'UnityEngine.UI.Image' )
  var i413 = data
  request.r(i413[0], i413[1], 0, i412, 'm_Sprite')
  i412.m_Type = i413[2]
  i412.m_PreserveAspect = !!i413[3]
  i412.m_FillCenter = !!i413[4]
  i412.m_FillMethod = i413[5]
  i412.m_FillAmount = i413[6]
  i412.m_FillClockwise = !!i413[7]
  i412.m_FillOrigin = i413[8]
  i412.m_UseSpriteMesh = !!i413[9]
  i412.m_PixelsPerUnitMultiplier = i413[10]
  request.r(i413[11], i413[12], 0, i412, 'm_Material')
  i412.m_Maskable = !!i413[13]
  i412.m_Color = new pc.Color(i413[14], i413[15], i413[16], i413[17])
  i412.m_RaycastTarget = !!i413[18]
  i412.m_RaycastPadding = new pc.Vec4( i413[19], i413[20], i413[21], i413[22] )
  return i412
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i414 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i415 = data
  request.r(i415[0], i415[1], 0, i414, 'm_Texture')
  i414.m_UVRect = UnityEngine.Rect.MinMaxRect(i415[2], i415[3], i415[4], i415[5])
  request.r(i415[6], i415[7], 0, i414, 'm_Material')
  i414.m_Maskable = !!i415[8]
  i414.m_Color = new pc.Color(i415[9], i415[10], i415[11], i415[12])
  i414.m_RaycastTarget = !!i415[13]
  i414.m_RaycastPadding = new pc.Vec4( i415[14], i415[15], i415[16], i415[17] )
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

Deserializers["DeviceOrientation"] = function (request, data, root) {
  var i418 = root || request.c( 'DeviceOrientation' )
  var i419 = data
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i421 = data
  request.r(i421[0], i421[1], 0, i420, 'clip')
  request.r(i421[2], i421[3], 0, i420, 'outputAudioMixerGroup')
  i420.playOnAwake = !!i421[4]
  i420.loop = !!i421[5]
  i420.time = i421[6]
  i420.volume = i421[7]
  i420.pitch = i421[8]
  i420.enabled = !!i421[9]
  return i420
}

Deserializers["VideoManager"] = function (request, data, root) {
  var i422 = root || request.c( 'VideoManager' )
  var i423 = data
  request.r(i423[0], i423[1], 0, i422, 'fullVidHorizon')
  request.r(i423[2], i423[3], 0, i422, 'fullVidVertical')
  request.r(i423[4], i423[5], 0, i422, 'ScreenHorizon')
  request.r(i423[6], i423[7], 0, i422, 'ScreenVertical')
  request.r(i423[8], i423[9], 0, i422, 'audioBG')
  request.r(i423[10], i423[11], 0, i422, 'hand')
  request.r(i423[12], i423[13], 0, i422, 'image')
  request.r(i423[14], i423[15], 0, i422, 'BG_V')
  request.r(i423[16], i423[17], 0, i422, 'canvasHorizon')
  request.r(i423[18], i423[19], 0, i422, 'canvasVertical')
  return i422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i425 = data
  i424.enabled = !!i425[0]
  request.r(i425[1], i425[2], 0, i424, 'sharedMaterial')
  var i427 = i425[3]
  var i426 = []
  for(var i = 0; i < i427.length; i += 2) {
  request.r(i427[i + 0], i427[i + 1], 2, i426, '')
  }
  i424.sharedMaterials = i426
  i424.receiveShadows = !!i425[4]
  i424.shadowCastingMode = i425[5]
  i424.sortingLayerID = i425[6]
  i424.sortingOrder = i425[7]
  i424.lightmapIndex = i425[8]
  i424.lightmapSceneIndex = i425[9]
  i424.lightmapScaleOffset = new pc.Vec4( i425[10], i425[11], i425[12], i425[13] )
  i424.lightProbeUsage = i425[14]
  i424.reflectionProbeUsage = i425[15]
  i424.color = new pc.Color(i425[16], i425[17], i425[18], i425[19])
  request.r(i425[20], i425[21], 0, i424, 'sprite')
  i424.flipX = !!i425[22]
  i424.flipY = !!i425[23]
  i424.drawMode = i425[24]
  i424.size = new pc.Vec2( i425[25], i425[26] )
  i424.tileMode = i425[27]
  i424.adaptiveModeThreshold = i425[28]
  i424.maskInteraction = i425[29]
  i424.spriteSortPoint = i425[30]
  return i424
}

Deserializers["Hand"] = function (request, data, root) {
  var i430 = root || request.c( 'Hand' )
  var i431 = data
  request.r(i431[0], i431[1], 0, i430, 'source')
  request.r(i431[2], i431[3], 0, i430, 'anim')
  request.r(i431[4], i431[5], 0, i430, 'point1')
  request.r(i431[6], i431[7], 0, i430, 'point2')
  return i430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i433 = data
  request.r(i433[0], i433[1], 0, i432, 'animatorController')
  request.r(i433[2], i433[3], 0, i432, 'avatar')
  i432.updateMode = i433[4]
  i432.hasTransformHierarchy = !!i433[5]
  i432.applyRootMotion = !!i433[6]
  var i435 = i433[7]
  var i434 = []
  for(var i = 0; i < i435.length; i += 2) {
  request.r(i435[i + 0], i435[i + 1], 2, i434, '')
  }
  i432.humanBones = i434
  i432.enabled = !!i433[8]
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i439 = data
  i438.ambientIntensity = i439[0]
  i438.reflectionIntensity = i439[1]
  i438.ambientMode = i439[2]
  i438.ambientLight = new pc.Color(i439[3], i439[4], i439[5], i439[6])
  i438.ambientSkyColor = new pc.Color(i439[7], i439[8], i439[9], i439[10])
  i438.ambientGroundColor = new pc.Color(i439[11], i439[12], i439[13], i439[14])
  i438.ambientEquatorColor = new pc.Color(i439[15], i439[16], i439[17], i439[18])
  i438.fogColor = new pc.Color(i439[19], i439[20], i439[21], i439[22])
  i438.fogEndDistance = i439[23]
  i438.fogStartDistance = i439[24]
  i438.fogDensity = i439[25]
  i438.fog = !!i439[26]
  request.r(i439[27], i439[28], 0, i438, 'skybox')
  i438.fogMode = i439[29]
  var i441 = i439[30]
  var i440 = []
  for(var i = 0; i < i441.length; i += 1) {
    i440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i441[i + 0]) );
  }
  i438.lightmaps = i440
  i438.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i439[31], i438.lightProbes)
  i438.lightmapsMode = i439[32]
  i438.mixedBakeMode = i439[33]
  i438.environmentLightingMode = i439[34]
  i438.ambientProbe = new pc.SphericalHarmonicsL2(i439[35])
  i438.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i439[36])
  i438.useReferenceAmbientProbe = !!i439[37]
  request.r(i439[38], i439[39], 0, i438, 'customReflection')
  request.r(i439[40], i439[41], 0, i438, 'defaultReflection')
  i438.defaultReflectionMode = i439[42]
  i438.defaultReflectionResolution = i439[43]
  i438.sunLightObjectId = i439[44]
  i438.pixelLightCount = i439[45]
  i438.defaultReflectionHDR = !!i439[46]
  i438.hasLightDataAsset = !!i439[47]
  i438.hasManualGenerate = !!i439[48]
  return i438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i445 = data
  request.r(i445[0], i445[1], 0, i444, 'lightmapColor')
  request.r(i445[2], i445[3], 0, i444, 'lightmapDirection')
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i446 = root || new UnityEngine.LightProbes()
  var i447 = data
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i455 = data
  var i457 = i455[0]
  var i456 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i457.length; i += 1) {
    i456.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i457[i + 0]));
  }
  i454.ShaderCompilationErrors = i456
  i454.name = i455[1]
  i454.guid = i455[2]
  var i459 = i455[3]
  var i458 = []
  for(var i = 0; i < i459.length; i += 1) {
    i458.push( i459[i + 0] );
  }
  i454.shaderDefinedKeywords = i458
  var i461 = i455[4]
  var i460 = []
  for(var i = 0; i < i461.length; i += 1) {
    i460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i461[i + 0]) );
  }
  i454.passes = i460
  var i463 = i455[5]
  var i462 = []
  for(var i = 0; i < i463.length; i += 1) {
    i462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i463[i + 0]) );
  }
  i454.usePasses = i462
  var i465 = i455[6]
  var i464 = []
  for(var i = 0; i < i465.length; i += 1) {
    i464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i465[i + 0]) );
  }
  i454.defaultParameterValues = i464
  request.r(i455[7], i455[8], 0, i454, 'unityFallbackShader')
  i454.readDepth = !!i455[9]
  i454.isCreatedByShaderGraph = !!i455[10]
  i454.compiled = !!i455[11]
  return i454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i469 = data
  i468.shaderName = i469[0]
  i468.errorMessage = i469[1]
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i474 = root || new pc.UnityShaderPass()
  var i475 = data
  i474.id = i475[0]
  i474.subShaderIndex = i475[1]
  i474.name = i475[2]
  i474.passType = i475[3]
  i474.grabPassTextureName = i475[4]
  i474.usePass = !!i475[5]
  i474.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i475[6], i474.zTest)
  i474.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i475[7], i474.zWrite)
  i474.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i475[8], i474.culling)
  i474.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i475[9], i474.blending)
  i474.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i475[10], i474.alphaBlending)
  i474.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i475[11], i474.colorWriteMask)
  i474.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i475[12], i474.offsetUnits)
  i474.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i475[13], i474.offsetFactor)
  i474.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i475[14], i474.stencilRef)
  i474.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i475[15], i474.stencilReadMask)
  i474.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i475[16], i474.stencilWriteMask)
  i474.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i475[17], i474.stencilOp)
  i474.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i475[18], i474.stencilOpFront)
  i474.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i475[19], i474.stencilOpBack)
  var i477 = i475[20]
  var i476 = []
  for(var i = 0; i < i477.length; i += 1) {
    i476.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i477[i + 0]) );
  }
  i474.tags = i476
  var i479 = i475[21]
  var i478 = []
  for(var i = 0; i < i479.length; i += 1) {
    i478.push( i479[i + 0] );
  }
  i474.passDefinedKeywords = i478
  var i481 = i475[22]
  var i480 = []
  for(var i = 0; i < i481.length; i += 1) {
    i480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i481[i + 0]) );
  }
  i474.passDefinedKeywordGroups = i480
  var i483 = i475[23]
  var i482 = []
  for(var i = 0; i < i483.length; i += 1) {
    i482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i483[i + 0]) );
  }
  i474.variants = i482
  var i485 = i475[24]
  var i484 = []
  for(var i = 0; i < i485.length; i += 1) {
    i484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i485[i + 0]) );
  }
  i474.excludedVariants = i484
  i474.hasDepthReader = !!i475[25]
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i487 = data
  i486.val = i487[0]
  i486.name = i487[1]
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i489 = data
  i488.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i489[0], i488.src)
  i488.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i489[1], i488.dst)
  i488.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i489[2], i488.op)
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i491 = data
  i490.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i491[0], i490.pass)
  i490.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i491[1], i490.fail)
  i490.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i491[2], i490.zFail)
  i490.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i491[3], i490.comp)
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i495 = data
  i494.name = i495[0]
  i494.value = i495[1]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i499 = data
  var i501 = i499[0]
  var i500 = []
  for(var i = 0; i < i501.length; i += 1) {
    i500.push( i501[i + 0] );
  }
  i498.keywords = i500
  i498.hasDiscard = !!i499[1]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i505 = data
  i504.passId = i505[0]
  i504.subShaderIndex = i505[1]
  var i507 = i505[2]
  var i506 = []
  for(var i = 0; i < i507.length; i += 1) {
    i506.push( i507[i + 0] );
  }
  i504.keywords = i506
  i504.vertexProgram = i505[3]
  i504.fragmentProgram = i505[4]
  i504.exportedForWebGl2 = !!i505[5]
  i504.readDepth = !!i505[6]
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i511 = data
  request.r(i511[0], i511[1], 0, i510, 'shader')
  i510.pass = i511[2]
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i515 = data
  i514.name = i515[0]
  i514.type = i515[1]
  i514.value = new pc.Vec4( i515[2], i515[3], i515[4], i515[5] )
  i514.textureValue = i515[6]
  i514.shaderPropertyFlag = i515[7]
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i517 = data
  i516.name = i517[0]
  request.r(i517[1], i517[2], 0, i516, 'texture')
  i516.aabb = i517[3]
  i516.vertices = i517[4]
  i516.triangles = i517[5]
  i516.textureRect = UnityEngine.Rect.MinMaxRect(i517[6], i517[7], i517[8], i517[9])
  i516.packedRect = UnityEngine.Rect.MinMaxRect(i517[10], i517[11], i517[12], i517[13])
  i516.border = new pc.Vec4( i517[14], i517[15], i517[16], i517[17] )
  i516.transparency = i517[18]
  i516.bounds = i517[19]
  i516.pixelsPerUnit = i517[20]
  i516.textureWidth = i517[21]
  i516.textureHeight = i517[22]
  i516.nativeSize = new pc.Vec2( i517[23], i517[24] )
  i516.pivot = new pc.Vec2( i517[25], i517[26] )
  i516.textureRectOffset = new pc.Vec2( i517[27], i517[28] )
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.VideoClip"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.VideoClip' )
  var i519 = data
  i518.name = i519[0]
  i518.width = i519[1]
  i518.height = i519[2]
  i518.frameRate = i519[3]
  i518.frameCount = System.UInt64(i519[4])
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i521 = data
  i520.name = i521[0]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i523 = data
  i522.name = i523[0]
  i522.wrapMode = i523[1]
  i522.isLooping = !!i523[2]
  i522.length = i523[3]
  var i525 = i523[4]
  var i524 = []
  for(var i = 0; i < i525.length; i += 1) {
    i524.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i525[i + 0]) );
  }
  i522.curves = i524
  var i527 = i523[5]
  var i526 = []
  for(var i = 0; i < i527.length; i += 1) {
    i526.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i527[i + 0]) );
  }
  i522.events = i526
  i522.halfPrecision = !!i523[6]
  i522._frameRate = i523[7]
  i522.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i523[8], i522.localBounds)
  i522.hasMuscleCurves = !!i523[9]
  var i529 = i523[10]
  var i528 = []
  for(var i = 0; i < i529.length; i += 1) {
    i528.push( i529[i + 0] );
  }
  i522.clipMuscleConstant = i528
  i522.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i523[11], i522.clipBindingConstant)
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i533 = data
  i532.path = i533[0]
  i532.hash = i533[1]
  i532.componentType = i533[2]
  i532.property = i533[3]
  i532.keys = i533[4]
  var i535 = i533[5]
  var i534 = []
  for(var i = 0; i < i535.length; i += 1) {
    i534.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i535[i + 0]) );
  }
  i532.objectReferenceKeys = i534
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i539 = data
  i538.time = i539[0]
  request.r(i539[1], i539[2], 0, i538, 'value')
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i543 = data
  i542.functionName = i543[0]
  i542.floatParameter = i543[1]
  i542.intParameter = i543[2]
  i542.stringParameter = i543[3]
  request.r(i543[4], i543[5], 0, i542, 'objectReferenceParameter')
  i542.time = i543[6]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i545 = data
  i544.center = new pc.Vec3( i545[0], i545[1], i545[2] )
  i544.extends = new pc.Vec3( i545[3], i545[4], i545[5] )
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i549 = data
  var i551 = i549[0]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( i551[i + 0] );
  }
  i548.genericBindings = i550
  var i553 = i549[1]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( i553[i + 0] );
  }
  i548.pptrCurveMapping = i552
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i555 = data
  i554.name = i555[0]
  var i557 = i555[1]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i557[i + 0]) );
  }
  i554.layers = i556
  var i559 = i555[2]
  var i558 = []
  for(var i = 0; i < i559.length; i += 1) {
    i558.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i559[i + 0]) );
  }
  i554.parameters = i558
  i554.animationClips = i555[3]
  i554.avatarUnsupported = i555[4]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i563 = data
  i562.name = i563[0]
  i562.defaultWeight = i563[1]
  i562.blendingMode = i563[2]
  i562.avatarMask = i563[3]
  i562.syncedLayerIndex = i563[4]
  i562.syncedLayerAffectsTiming = !!i563[5]
  i562.syncedLayers = i563[6]
  i562.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i563[7], i562.stateMachine)
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i565 = data
  i564.id = i565[0]
  i564.name = i565[1]
  i564.path = i565[2]
  var i567 = i565[3]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i567[i + 0]) );
  }
  i564.states = i566
  var i569 = i565[4]
  var i568 = []
  for(var i = 0; i < i569.length; i += 1) {
    i568.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i569[i + 0]) );
  }
  i564.machines = i568
  var i571 = i565[5]
  var i570 = []
  for(var i = 0; i < i571.length; i += 1) {
    i570.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i571[i + 0]) );
  }
  i564.entryStateTransitions = i570
  var i573 = i565[6]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i573[i + 0]) );
  }
  i564.exitStateTransitions = i572
  var i575 = i565[7]
  var i574 = []
  for(var i = 0; i < i575.length; i += 1) {
    i574.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i575[i + 0]) );
  }
  i564.anyStateTransitions = i574
  i564.defaultStateId = i565[8]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i579 = data
  i578.id = i579[0]
  i578.name = i579[1]
  i578.cycleOffset = i579[2]
  i578.cycleOffsetParameter = i579[3]
  i578.cycleOffsetParameterActive = !!i579[4]
  i578.mirror = !!i579[5]
  i578.mirrorParameter = i579[6]
  i578.mirrorParameterActive = !!i579[7]
  i578.motionId = i579[8]
  i578.nameHash = i579[9]
  i578.fullPathHash = i579[10]
  i578.speed = i579[11]
  i578.speedParameter = i579[12]
  i578.speedParameterActive = !!i579[13]
  i578.tag = i579[14]
  i578.tagHash = i579[15]
  i578.writeDefaultValues = !!i579[16]
  var i581 = i579[17]
  var i580 = []
  for(var i = 0; i < i581.length; i += 2) {
  request.r(i581[i + 0], i581[i + 1], 2, i580, '')
  }
  i578.behaviours = i580
  var i583 = i579[18]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i583[i + 0]) );
  }
  i578.transitions = i582
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i589 = data
  i588.fullPath = i589[0]
  i588.canTransitionToSelf = !!i589[1]
  i588.duration = i589[2]
  i588.exitTime = i589[3]
  i588.hasExitTime = !!i589[4]
  i588.hasFixedDuration = !!i589[5]
  i588.interruptionSource = i589[6]
  i588.offset = i589[7]
  i588.orderedInterruption = !!i589[8]
  i588.destinationStateId = i589[9]
  i588.isExit = !!i589[10]
  i588.mute = !!i589[11]
  i588.solo = !!i589[12]
  var i591 = i589[13]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i591[i + 0]) );
  }
  i588.conditions = i590
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i597 = data
  i596.destinationStateId = i597[0]
  i596.isExit = !!i597[1]
  i596.mute = !!i597[2]
  i596.solo = !!i597[3]
  var i599 = i597[4]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i599[i + 0]) );
  }
  i596.conditions = i598
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i603 = data
  i602.mode = i603[0]
  i602.parameter = i603[1]
  i602.threshold = i603[2]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i607 = data
  i606.defaultBool = !!i607[0]
  i606.defaultFloat = i607[1]
  i606.defaultInt = i607[2]
  i606.name = i607[3]
  i606.nameHash = i607[4]
  i606.type = i607[5]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i609 = data
  var i611 = i609[0]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i611[i + 0]) );
  }
  i608.files = i610
  i608.componentToPrefabIds = i609[1]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i615 = data
  i614.path = i615[0]
  request.r(i615[1], i615[2], 0, i614, 'unityObject')
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i617 = data
  var i619 = i617[0]
  var i618 = []
  for(var i = 0; i < i619.length; i += 1) {
    i618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i619[i + 0]) );
  }
  i616.scriptsExecutionOrder = i618
  var i621 = i617[1]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i621[i + 0]) );
  }
  i616.sortingLayers = i620
  var i623 = i617[2]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i623[i + 0]) );
  }
  i616.cullingLayers = i622
  i616.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i617[3], i616.timeSettings)
  i616.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i617[4], i616.physicsSettings)
  i616.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i617[5], i616.physics2DSettings)
  i616.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i617[6], i616.qualitySettings)
  i616.enableRealtimeShadows = !!i617[7]
  i616.enableAutoInstancing = !!i617[8]
  i616.enableDynamicBatching = !!i617[9]
  i616.lightmapEncodingQuality = i617[10]
  i616.desiredColorSpace = i617[11]
  var i625 = i617[12]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( i625[i + 0] );
  }
  i616.allTags = i624
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i629 = data
  i628.name = i629[0]
  i628.value = i629[1]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i633 = data
  i632.id = i633[0]
  i632.name = i633[1]
  i632.value = i633[2]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i637 = data
  i636.id = i637[0]
  i636.name = i637[1]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i639 = data
  i638.fixedDeltaTime = i639[0]
  i638.maximumDeltaTime = i639[1]
  i638.timeScale = i639[2]
  i638.maximumParticleTimestep = i639[3]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i641 = data
  i640.gravity = new pc.Vec3( i641[0], i641[1], i641[2] )
  i640.defaultSolverIterations = i641[3]
  i640.bounceThreshold = i641[4]
  i640.autoSyncTransforms = !!i641[5]
  i640.autoSimulation = !!i641[6]
  var i643 = i641[7]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i643[i + 0]) );
  }
  i640.collisionMatrix = i642
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i647 = data
  i646.enabled = !!i647[0]
  i646.layerId = i647[1]
  i646.otherLayerId = i647[2]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i649 = data
  request.r(i649[0], i649[1], 0, i648, 'material')
  i648.gravity = new pc.Vec2( i649[2], i649[3] )
  i648.positionIterations = i649[4]
  i648.velocityIterations = i649[5]
  i648.velocityThreshold = i649[6]
  i648.maxLinearCorrection = i649[7]
  i648.maxAngularCorrection = i649[8]
  i648.maxTranslationSpeed = i649[9]
  i648.maxRotationSpeed = i649[10]
  i648.baumgarteScale = i649[11]
  i648.baumgarteTOIScale = i649[12]
  i648.timeToSleep = i649[13]
  i648.linearSleepTolerance = i649[14]
  i648.angularSleepTolerance = i649[15]
  i648.defaultContactOffset = i649[16]
  i648.autoSimulation = !!i649[17]
  i648.queriesHitTriggers = !!i649[18]
  i648.queriesStartInColliders = !!i649[19]
  i648.callbacksOnDisable = !!i649[20]
  i648.reuseCollisionCallbacks = !!i649[21]
  i648.autoSyncTransforms = !!i649[22]
  var i651 = i649[23]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i651[i + 0]) );
  }
  i648.collisionMatrix = i650
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i655 = data
  i654.enabled = !!i655[0]
  i654.layerId = i655[1]
  i654.otherLayerId = i655[2]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i657 = data
  var i659 = i657[0]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i659[i + 0]) );
  }
  i656.qualityLevels = i658
  var i661 = i657[1]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( i661[i + 0] );
  }
  i656.names = i660
  i656.shadows = i657[2]
  i656.anisotropicFiltering = i657[3]
  i656.antiAliasing = i657[4]
  i656.lodBias = i657[5]
  i656.shadowCascades = i657[6]
  i656.shadowDistance = i657[7]
  i656.shadowmaskMode = i657[8]
  i656.shadowProjection = i657[9]
  i656.shadowResolution = i657[10]
  i656.softParticles = !!i657[11]
  i656.softVegetation = !!i657[12]
  i656.activeColorSpace = i657[13]
  i656.desiredColorSpace = i657[14]
  i656.masterTextureLimit = i657[15]
  i656.maxQueuedFrames = i657[16]
  i656.particleRaycastBudget = i657[17]
  i656.pixelLightCount = i657[18]
  i656.realtimeReflectionProbes = !!i657[19]
  i656.shadowCascade2Split = i657[20]
  i656.shadowCascade4Split = new pc.Vec3( i657[21], i657[22], i657[23] )
  i656.streamingMipmapsActive = !!i657[24]
  i656.vSyncCount = i657[25]
  i656.asyncUploadBufferSize = i657[26]
  i656.asyncUploadTimeSlice = i657[27]
  i656.billboardsFaceCameraPosition = !!i657[28]
  i656.shadowNearPlaneOffset = i657[29]
  i656.streamingMipmapsMemoryBudget = i657[30]
  i656.maximumLODLevel = i657[31]
  i656.streamingMipmapsAddAllCameras = !!i657[32]
  i656.streamingMipmapsMaxLevelReduction = i657[33]
  i656.streamingMipmapsRenderersPerFrame = i657[34]
  i656.resolutionScalingFixedDPIFactor = i657[35]
  i656.streamingMipmapsMaxFileIORequests = i657[36]
  i656.currentQualityLevel = i657[37]
  return i656
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.RenderTexture":{"name":0,"width":1,"height":2,"anisoLevel":3,"filterMode":4,"hdr":5,"colorFormat":6,"depthStencilFormat":7,"renderTextureFormat":8,"depth":9,"wrapU":10,"wrapV":11},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.VideoPlayer":{"enabled":0,"source":1,"clip":2,"url":4,"playOnAwake":5,"isLooping":6,"renderMode":7,"targetTexture":8,"targetMaterialRenderer":10,"targetMaterialProperty":12,"playbackSpeed":13},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.VideoClip":{"name":0,"width":1,"height":2,"frameRate":3,"frameCount":4},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"30":[31],"32":[31],"33":[31],"34":[31],"35":[31],"36":[31],"37":[38],"39":[2],"40":[41],"42":[41],"43":[41],"44":[41],"45":[41],"46":[41],"47":[41],"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[49],"56":[49],"57":[49],"58":[49],"59":[49],"60":[49],"61":[49],"62":[2],"63":[64],"65":[66],"67":[66],"8":[7],"68":[69],"70":[25],"71":[69],"72":[7],"73":[7],"10":[8],"12":[11,7],"74":[7],"9":[8],"75":[7],"76":[7],"77":[7],"78":[7],"79":[7],"80":[7],"81":[7],"82":[7],"83":[7],"14":[11,7],"84":[7],"85":[7],"86":[7],"87":[7],"88":[11,7],"89":[7],"90":[5],"91":[5],"6":[5],"92":[5],"93":[2],"94":[2],"95":[96],"97":[2],"98":[7],"99":[64,7],"100":[7,11],"101":[7],"102":[11,7],"103":[64],"104":[11,7],"105":[7],"106":[69]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.RawImage","UnityEngine.RenderTexture","UnityEngine.Video.VideoPlayer","UnityEngine.Video.VideoClip","UnityEngine.MonoBehaviour","DeviceOrientation","UnityEngine.AudioSource","UnityEngine.AudioClip","VideoManager","UnityEngine.GameObject","Hand","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Texture2D","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.41f1";

Deserializers.productName = "KingPin_EC(1)_2101";

Deserializers.lunaInitializationTime = "03/23/2025 05:49:59";

Deserializers.lunaDaysRunning = "0.9";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "Test";

Deserializers.lunaAppID = "25626";

Deserializers.projectId = "f9764b7631c968347b71a6067fd79800";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1864";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4148";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system, prefabs";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "f58bf9bd-0b50-48e1-942c-d1320d47ec51";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

