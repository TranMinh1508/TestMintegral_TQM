var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i334 = root || request.c( 'UnityEngine.JointSpring' )
  var i335 = data
  i334.spring = i335[0]
  i334.damper = i335[1]
  i334.targetPosition = i335[2]
  return i334
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i336 = root || request.c( 'UnityEngine.JointMotor' )
  var i337 = data
  i336.m_TargetVelocity = i337[0]
  i336.m_Force = i337[1]
  i336.m_FreeSpin = i337[2]
  return i336
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i338 = root || request.c( 'UnityEngine.JointLimits' )
  var i339 = data
  i338.m_Min = i339[0]
  i338.m_Max = i339[1]
  i338.m_Bounciness = i339[2]
  i338.m_BounceMinVelocity = i339[3]
  i338.m_ContactDistance = i339[4]
  i338.minBounce = i339[5]
  i338.maxBounce = i339[6]
  return i338
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i340 = root || request.c( 'UnityEngine.JointDrive' )
  var i341 = data
  i340.m_PositionSpring = i341[0]
  i340.m_PositionDamper = i341[1]
  i340.m_MaximumForce = i341[2]
  i340.m_UseAcceleration = i341[3]
  return i340
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i342 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i343 = data
  i342.m_Spring = i343[0]
  i342.m_Damper = i343[1]
  return i342
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i344 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i345 = data
  i344.m_Limit = i345[0]
  i344.m_Bounciness = i345[1]
  i344.m_ContactDistance = i345[2]
  return i344
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i346 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i347 = data
  i346.m_ExtremumSlip = i347[0]
  i346.m_ExtremumValue = i347[1]
  i346.m_AsymptoteSlip = i347[2]
  i346.m_AsymptoteValue = i347[3]
  i346.m_Stiffness = i347[4]
  return i346
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i348 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i349 = data
  i348.m_LowerAngle = i349[0]
  i348.m_UpperAngle = i349[1]
  return i348
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i350 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i351 = data
  i350.m_MotorSpeed = i351[0]
  i350.m_MaximumMotorTorque = i351[1]
  return i350
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i352 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i353 = data
  i352.m_DampingRatio = i353[0]
  i352.m_Frequency = i353[1]
  i352.m_Angle = i353[2]
  return i352
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i354 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i355 = data
  i354.m_LowerTranslation = i355[0]
  i354.m_UpperTranslation = i355[1]
  return i354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i357 = data
  i356.name = i357[0]
  i356.width = i357[1]
  i356.height = i357[2]
  i356.mipmapCount = i357[3]
  i356.anisoLevel = i357[4]
  i356.filterMode = i357[5]
  i356.hdr = !!i357[6]
  i356.format = i357[7]
  i356.wrapMode = i357[8]
  i356.alphaIsTransparency = !!i357[9]
  i356.alphaSource = i357[10]
  i356.graphicsFormat = i357[11]
  i356.sRGBTexture = !!i357[12]
  i356.desiredColorSpace = i357[13]
  i356.wrapU = i357[14]
  i356.wrapV = i357[15]
  return i356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.RenderTexture"] = function (request, data, root) {
  var i358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.RenderTexture' )
  var i359 = data
  i358.name = i359[0]
  i358.width = i359[1]
  i358.height = i359[2]
  i358.anisoLevel = i359[3]
  i358.filterMode = i359[4]
  i358.hdr = !!i359[5]
  i358.colorFormat = i359[6]
  i358.depthStencilFormat = i359[7]
  i358.renderTextureFormat = i359[8]
  i358.depth = i359[9]
  i358.wrapU = i359[10]
  i358.wrapV = i359[11]
  return i358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i360 = root || new pc.UnityMaterial()
  var i361 = data
  i360.name = i361[0]
  request.r(i361[1], i361[2], 0, i360, 'shader')
  i360.renderQueue = i361[3]
  i360.enableInstancing = !!i361[4]
  var i363 = i361[5]
  var i362 = []
  for(var i = 0; i < i363.length; i += 1) {
    i362.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i363[i + 0]) );
  }
  i360.floatParameters = i362
  var i365 = i361[6]
  var i364 = []
  for(var i = 0; i < i365.length; i += 1) {
    i364.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i365[i + 0]) );
  }
  i360.colorParameters = i364
  var i367 = i361[7]
  var i366 = []
  for(var i = 0; i < i367.length; i += 1) {
    i366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i367[i + 0]) );
  }
  i360.vectorParameters = i366
  var i369 = i361[8]
  var i368 = []
  for(var i = 0; i < i369.length; i += 1) {
    i368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i369[i + 0]) );
  }
  i360.textureParameters = i368
  var i371 = i361[9]
  var i370 = []
  for(var i = 0; i < i371.length; i += 1) {
    i370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i371[i + 0]) );
  }
  i360.materialFlags = i370
  return i360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i375 = data
  i374.name = i375[0]
  i374.value = i375[1]
  return i374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i379 = data
  i378.name = i379[0]
  i378.value = new pc.Color(i379[1], i379[2], i379[3], i379[4])
  return i378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i383 = data
  i382.name = i383[0]
  i382.value = new pc.Vec4( i383[1], i383[2], i383[3], i383[4] )
  return i382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i387 = data
  i386.name = i387[0]
  request.r(i387[1], i387[2], 0, i386, 'value')
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i391 = data
  i390.name = i391[0]
  i390.enabled = !!i391[1]
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i392 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i393 = data
  i392.name = i393[0]
  i392.index = i393[1]
  i392.startup = !!i393[2]
  return i392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i395 = data
  i394.position = new pc.Vec3( i395[0], i395[1], i395[2] )
  i394.scale = new pc.Vec3( i395[3], i395[4], i395[5] )
  i394.rotation = new pc.Quat(i395[6], i395[7], i395[8], i395[9])
  return i394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i397 = data
  i396.enabled = !!i397[0]
  i396.aspect = i397[1]
  i396.orthographic = !!i397[2]
  i396.orthographicSize = i397[3]
  i396.backgroundColor = new pc.Color(i397[4], i397[5], i397[6], i397[7])
  i396.nearClipPlane = i397[8]
  i396.farClipPlane = i397[9]
  i396.fieldOfView = i397[10]
  i396.depth = i397[11]
  i396.clearFlags = i397[12]
  i396.cullingMask = i397[13]
  i396.rect = i397[14]
  request.r(i397[15], i397[16], 0, i396, 'targetTexture')
  i396.usePhysicalProperties = !!i397[17]
  i396.focalLength = i397[18]
  i396.sensorSize = new pc.Vec2( i397[19], i397[20] )
  i396.lensShift = new pc.Vec2( i397[21], i397[22] )
  i396.gateFit = i397[23]
  i396.commandBufferCount = i397[24]
  i396.cameraType = i397[25]
  return i396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i399 = data
  i398.name = i399[0]
  i398.tagId = i399[1]
  i398.enabled = !!i399[2]
  i398.isStatic = !!i399[3]
  i398.layer = i399[4]
  return i398
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i400 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i401 = data
  request.r(i401[0], i401[1], 0, i400, 'm_FirstSelected')
  i400.m_sendNavigationEvents = !!i401[2]
  i400.m_DragThreshold = i401[3]
  return i400
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i402 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i403 = data
  i402.m_HorizontalAxis = i403[0]
  i402.m_VerticalAxis = i403[1]
  i402.m_SubmitButton = i403[2]
  i402.m_CancelButton = i403[3]
  i402.m_InputActionsPerSecond = i403[4]
  i402.m_RepeatDelay = i403[5]
  i402.m_ForceModuleActive = !!i403[6]
  i402.m_SendPointerHoverToParent = !!i403[7]
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i405 = data
  i404.pivot = new pc.Vec2( i405[0], i405[1] )
  i404.anchorMin = new pc.Vec2( i405[2], i405[3] )
  i404.anchorMax = new pc.Vec2( i405[4], i405[5] )
  i404.sizeDelta = new pc.Vec2( i405[6], i405[7] )
  i404.anchoredPosition3D = new pc.Vec3( i405[8], i405[9], i405[10] )
  i404.rotation = new pc.Quat(i405[11], i405[12], i405[13], i405[14])
  i404.scale = new pc.Vec3( i405[15], i405[16], i405[17] )
  return i404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i407 = data
  i406.enabled = !!i407[0]
  i406.planeDistance = i407[1]
  i406.referencePixelsPerUnit = i407[2]
  i406.isFallbackOverlay = !!i407[3]
  i406.renderMode = i407[4]
  i406.renderOrder = i407[5]
  i406.sortingLayerName = i407[6]
  i406.sortingOrder = i407[7]
  i406.scaleFactor = i407[8]
  request.r(i407[9], i407[10], 0, i406, 'worldCamera')
  i406.overrideSorting = !!i407[11]
  i406.pixelPerfect = !!i407[12]
  i406.targetDisplay = i407[13]
  i406.overridePixelPerfect = !!i407[14]
  return i406
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i408 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i409 = data
  i408.m_UiScaleMode = i409[0]
  i408.m_ReferencePixelsPerUnit = i409[1]
  i408.m_ScaleFactor = i409[2]
  i408.m_ReferenceResolution = new pc.Vec2( i409[3], i409[4] )
  i408.m_ScreenMatchMode = i409[5]
  i408.m_MatchWidthOrHeight = i409[6]
  i408.m_PhysicalUnit = i409[7]
  i408.m_FallbackScreenDPI = i409[8]
  i408.m_DefaultSpriteDPI = i409[9]
  i408.m_DynamicPixelsPerUnit = i409[10]
  i408.m_PresetInfoIsWorld = !!i409[11]
  return i408
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i410 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i411 = data
  i410.m_IgnoreReversedGraphics = !!i411[0]
  i410.m_BlockingObjects = i411[1]
  i410.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i411[2] )
  return i410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i413 = data
  i412.cullTransparentMesh = !!i413[0]
  return i412
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i414 = root || request.c( 'UnityEngine.UI.Image' )
  var i415 = data
  request.r(i415[0], i415[1], 0, i414, 'm_Sprite')
  i414.m_Type = i415[2]
  i414.m_PreserveAspect = !!i415[3]
  i414.m_FillCenter = !!i415[4]
  i414.m_FillMethod = i415[5]
  i414.m_FillAmount = i415[6]
  i414.m_FillClockwise = !!i415[7]
  i414.m_FillOrigin = i415[8]
  i414.m_UseSpriteMesh = !!i415[9]
  i414.m_PixelsPerUnitMultiplier = i415[10]
  request.r(i415[11], i415[12], 0, i414, 'm_Material')
  i414.m_Maskable = !!i415[13]
  i414.m_Color = new pc.Color(i415[14], i415[15], i415[16], i415[17])
  i414.m_RaycastTarget = !!i415[18]
  i414.m_RaycastPadding = new pc.Vec4( i415[19], i415[20], i415[21], i415[22] )
  return i414
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i416 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i417 = data
  request.r(i417[0], i417[1], 0, i416, 'm_Texture')
  i416.m_UVRect = UnityEngine.Rect.MinMaxRect(i417[2], i417[3], i417[4], i417[5])
  request.r(i417[6], i417[7], 0, i416, 'm_Material')
  i416.m_Maskable = !!i417[8]
  i416.m_Color = new pc.Color(i417[9], i417[10], i417[11], i417[12])
  i416.m_RaycastTarget = !!i417[13]
  i416.m_RaycastPadding = new pc.Vec4( i417[14], i417[15], i417[16], i417[17] )
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.VideoPlayer"] = function (request, data, root) {
  var i418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.VideoPlayer' )
  var i419 = data
  i418.enabled = !!i419[0]
  i418.source = i419[1]
  request.r(i419[2], i419[3], 0, i418, 'clip')
  i418.url = i419[4]
  i418.playOnAwake = !!i419[5]
  i418.isLooping = !!i419[6]
  i418.renderMode = i419[7]
  request.r(i419[8], i419[9], 0, i418, 'targetTexture')
  request.r(i419[10], i419[11], 0, i418, 'targetMaterialRenderer')
  i418.targetMaterialProperty = i419[12]
  i418.playbackSpeed = i419[13]
  return i418
}

Deserializers["VideoConverter"] = function (request, data, root) {
  var i420 = root || request.c( 'VideoConverter' )
  var i421 = data
  i420.videoPathOriginal = i421[0]
  i420.name = i421[1]
  request.r(i421[2], i421[3], 0, i420, 'videoPlayer')
  return i420
}

Deserializers["DeviceOrientation"] = function (request, data, root) {
  var i422 = root || request.c( 'DeviceOrientation' )
  var i423 = data
  return i422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i425 = data
  request.r(i425[0], i425[1], 0, i424, 'clip')
  request.r(i425[2], i425[3], 0, i424, 'outputAudioMixerGroup')
  i424.playOnAwake = !!i425[4]
  i424.loop = !!i425[5]
  i424.time = i425[6]
  i424.volume = i425[7]
  i424.pitch = i425[8]
  i424.enabled = !!i425[9]
  return i424
}

Deserializers["VideoManager"] = function (request, data, root) {
  var i426 = root || request.c( 'VideoManager' )
  var i427 = data
  request.r(i427[0], i427[1], 0, i426, 'fullVidHorizon')
  request.r(i427[2], i427[3], 0, i426, 'fullVidVertical')
  request.r(i427[4], i427[5], 0, i426, 'ScreenHorizon')
  request.r(i427[6], i427[7], 0, i426, 'ScreenVertical')
  request.r(i427[8], i427[9], 0, i426, 'audioBG')
  request.r(i427[10], i427[11], 0, i426, 'hand')
  request.r(i427[12], i427[13], 0, i426, 'image')
  request.r(i427[14], i427[15], 0, i426, 'BG_V')
  request.r(i427[16], i427[17], 0, i426, 'canvasHorizon')
  request.r(i427[18], i427[19], 0, i426, 'canvasVertical')
  return i426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i429 = data
  i428.enabled = !!i429[0]
  request.r(i429[1], i429[2], 0, i428, 'sharedMaterial')
  var i431 = i429[3]
  var i430 = []
  for(var i = 0; i < i431.length; i += 2) {
  request.r(i431[i + 0], i431[i + 1], 2, i430, '')
  }
  i428.sharedMaterials = i430
  i428.receiveShadows = !!i429[4]
  i428.shadowCastingMode = i429[5]
  i428.sortingLayerID = i429[6]
  i428.sortingOrder = i429[7]
  i428.lightmapIndex = i429[8]
  i428.lightmapSceneIndex = i429[9]
  i428.lightmapScaleOffset = new pc.Vec4( i429[10], i429[11], i429[12], i429[13] )
  i428.lightProbeUsage = i429[14]
  i428.reflectionProbeUsage = i429[15]
  i428.color = new pc.Color(i429[16], i429[17], i429[18], i429[19])
  request.r(i429[20], i429[21], 0, i428, 'sprite')
  i428.flipX = !!i429[22]
  i428.flipY = !!i429[23]
  i428.drawMode = i429[24]
  i428.size = new pc.Vec2( i429[25], i429[26] )
  i428.tileMode = i429[27]
  i428.adaptiveModeThreshold = i429[28]
  i428.maskInteraction = i429[29]
  i428.spriteSortPoint = i429[30]
  return i428
}

Deserializers["Hand"] = function (request, data, root) {
  var i434 = root || request.c( 'Hand' )
  var i435 = data
  request.r(i435[0], i435[1], 0, i434, 'source')
  request.r(i435[2], i435[3], 0, i434, 'anim')
  request.r(i435[4], i435[5], 0, i434, 'point1')
  request.r(i435[6], i435[7], 0, i434, 'point2')
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i437 = data
  request.r(i437[0], i437[1], 0, i436, 'animatorController')
  request.r(i437[2], i437[3], 0, i436, 'avatar')
  i436.updateMode = i437[4]
  i436.hasTransformHierarchy = !!i437[5]
  i436.applyRootMotion = !!i437[6]
  var i439 = i437[7]
  var i438 = []
  for(var i = 0; i < i439.length; i += 2) {
  request.r(i439[i + 0], i439[i + 1], 2, i438, '')
  }
  i436.humanBones = i438
  i436.enabled = !!i437[8]
  return i436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i443 = data
  i442.ambientIntensity = i443[0]
  i442.reflectionIntensity = i443[1]
  i442.ambientMode = i443[2]
  i442.ambientLight = new pc.Color(i443[3], i443[4], i443[5], i443[6])
  i442.ambientSkyColor = new pc.Color(i443[7], i443[8], i443[9], i443[10])
  i442.ambientGroundColor = new pc.Color(i443[11], i443[12], i443[13], i443[14])
  i442.ambientEquatorColor = new pc.Color(i443[15], i443[16], i443[17], i443[18])
  i442.fogColor = new pc.Color(i443[19], i443[20], i443[21], i443[22])
  i442.fogEndDistance = i443[23]
  i442.fogStartDistance = i443[24]
  i442.fogDensity = i443[25]
  i442.fog = !!i443[26]
  request.r(i443[27], i443[28], 0, i442, 'skybox')
  i442.fogMode = i443[29]
  var i445 = i443[30]
  var i444 = []
  for(var i = 0; i < i445.length; i += 1) {
    i444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i445[i + 0]) );
  }
  i442.lightmaps = i444
  i442.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i443[31], i442.lightProbes)
  i442.lightmapsMode = i443[32]
  i442.mixedBakeMode = i443[33]
  i442.environmentLightingMode = i443[34]
  i442.ambientProbe = new pc.SphericalHarmonicsL2(i443[35])
  i442.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i443[36])
  i442.useReferenceAmbientProbe = !!i443[37]
  request.r(i443[38], i443[39], 0, i442, 'customReflection')
  request.r(i443[40], i443[41], 0, i442, 'defaultReflection')
  i442.defaultReflectionMode = i443[42]
  i442.defaultReflectionResolution = i443[43]
  i442.sunLightObjectId = i443[44]
  i442.pixelLightCount = i443[45]
  i442.defaultReflectionHDR = !!i443[46]
  i442.hasLightDataAsset = !!i443[47]
  i442.hasManualGenerate = !!i443[48]
  return i442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i449 = data
  request.r(i449[0], i449[1], 0, i448, 'lightmapColor')
  request.r(i449[2], i449[3], 0, i448, 'lightmapDirection')
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i450 = root || new UnityEngine.LightProbes()
  var i451 = data
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i459 = data
  var i461 = i459[0]
  var i460 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i461.length; i += 1) {
    i460.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i461[i + 0]));
  }
  i458.ShaderCompilationErrors = i460
  i458.name = i459[1]
  i458.guid = i459[2]
  var i463 = i459[3]
  var i462 = []
  for(var i = 0; i < i463.length; i += 1) {
    i462.push( i463[i + 0] );
  }
  i458.shaderDefinedKeywords = i462
  var i465 = i459[4]
  var i464 = []
  for(var i = 0; i < i465.length; i += 1) {
    i464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i465[i + 0]) );
  }
  i458.passes = i464
  var i467 = i459[5]
  var i466 = []
  for(var i = 0; i < i467.length; i += 1) {
    i466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i467[i + 0]) );
  }
  i458.usePasses = i466
  var i469 = i459[6]
  var i468 = []
  for(var i = 0; i < i469.length; i += 1) {
    i468.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i469[i + 0]) );
  }
  i458.defaultParameterValues = i468
  request.r(i459[7], i459[8], 0, i458, 'unityFallbackShader')
  i458.readDepth = !!i459[9]
  i458.isCreatedByShaderGraph = !!i459[10]
  i458.compiled = !!i459[11]
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i473 = data
  i472.shaderName = i473[0]
  i472.errorMessage = i473[1]
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i478 = root || new pc.UnityShaderPass()
  var i479 = data
  i478.id = i479[0]
  i478.subShaderIndex = i479[1]
  i478.name = i479[2]
  i478.passType = i479[3]
  i478.grabPassTextureName = i479[4]
  i478.usePass = !!i479[5]
  i478.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i479[6], i478.zTest)
  i478.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i479[7], i478.zWrite)
  i478.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i479[8], i478.culling)
  i478.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i479[9], i478.blending)
  i478.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i479[10], i478.alphaBlending)
  i478.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i479[11], i478.colorWriteMask)
  i478.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i479[12], i478.offsetUnits)
  i478.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i479[13], i478.offsetFactor)
  i478.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i479[14], i478.stencilRef)
  i478.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i479[15], i478.stencilReadMask)
  i478.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i479[16], i478.stencilWriteMask)
  i478.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i479[17], i478.stencilOp)
  i478.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i479[18], i478.stencilOpFront)
  i478.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i479[19], i478.stencilOpBack)
  var i481 = i479[20]
  var i480 = []
  for(var i = 0; i < i481.length; i += 1) {
    i480.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i481[i + 0]) );
  }
  i478.tags = i480
  var i483 = i479[21]
  var i482 = []
  for(var i = 0; i < i483.length; i += 1) {
    i482.push( i483[i + 0] );
  }
  i478.passDefinedKeywords = i482
  var i485 = i479[22]
  var i484 = []
  for(var i = 0; i < i485.length; i += 1) {
    i484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i485[i + 0]) );
  }
  i478.passDefinedKeywordGroups = i484
  var i487 = i479[23]
  var i486 = []
  for(var i = 0; i < i487.length; i += 1) {
    i486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i487[i + 0]) );
  }
  i478.variants = i486
  var i489 = i479[24]
  var i488 = []
  for(var i = 0; i < i489.length; i += 1) {
    i488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i489[i + 0]) );
  }
  i478.excludedVariants = i488
  i478.hasDepthReader = !!i479[25]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i491 = data
  i490.val = i491[0]
  i490.name = i491[1]
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i493 = data
  i492.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i493[0], i492.src)
  i492.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i493[1], i492.dst)
  i492.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i493[2], i492.op)
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i495 = data
  i494.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i495[0], i494.pass)
  i494.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i495[1], i494.fail)
  i494.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i495[2], i494.zFail)
  i494.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i495[3], i494.comp)
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i499 = data
  i498.name = i499[0]
  i498.value = i499[1]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i503 = data
  var i505 = i503[0]
  var i504 = []
  for(var i = 0; i < i505.length; i += 1) {
    i504.push( i505[i + 0] );
  }
  i502.keywords = i504
  i502.hasDiscard = !!i503[1]
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i509 = data
  i508.passId = i509[0]
  i508.subShaderIndex = i509[1]
  var i511 = i509[2]
  var i510 = []
  for(var i = 0; i < i511.length; i += 1) {
    i510.push( i511[i + 0] );
  }
  i508.keywords = i510
  i508.vertexProgram = i509[3]
  i508.fragmentProgram = i509[4]
  i508.exportedForWebGl2 = !!i509[5]
  i508.readDepth = !!i509[6]
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i515 = data
  request.r(i515[0], i515[1], 0, i514, 'shader')
  i514.pass = i515[2]
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i519 = data
  i518.name = i519[0]
  i518.type = i519[1]
  i518.value = new pc.Vec4( i519[2], i519[3], i519[4], i519[5] )
  i518.textureValue = i519[6]
  i518.shaderPropertyFlag = i519[7]
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i521 = data
  i520.name = i521[0]
  request.r(i521[1], i521[2], 0, i520, 'texture')
  i520.aabb = i521[3]
  i520.vertices = i521[4]
  i520.triangles = i521[5]
  i520.textureRect = UnityEngine.Rect.MinMaxRect(i521[6], i521[7], i521[8], i521[9])
  i520.packedRect = UnityEngine.Rect.MinMaxRect(i521[10], i521[11], i521[12], i521[13])
  i520.border = new pc.Vec4( i521[14], i521[15], i521[16], i521[17] )
  i520.transparency = i521[18]
  i520.bounds = i521[19]
  i520.pixelsPerUnit = i521[20]
  i520.textureWidth = i521[21]
  i520.textureHeight = i521[22]
  i520.nativeSize = new pc.Vec2( i521[23], i521[24] )
  i520.pivot = new pc.Vec2( i521[25], i521[26] )
  i520.textureRectOffset = new pc.Vec2( i521[27], i521[28] )
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.VideoClip"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.VideoClip' )
  var i523 = data
  i522.name = i523[0]
  i522.width = i523[1]
  i522.height = i523[2]
  i522.frameRate = i523[3]
  i522.frameCount = System.UInt64(i523[4])
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i525 = data
  i524.name = i525[0]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i527 = data
  i526.name = i527[0]
  i526.wrapMode = i527[1]
  i526.isLooping = !!i527[2]
  i526.length = i527[3]
  var i529 = i527[4]
  var i528 = []
  for(var i = 0; i < i529.length; i += 1) {
    i528.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i529[i + 0]) );
  }
  i526.curves = i528
  var i531 = i527[5]
  var i530 = []
  for(var i = 0; i < i531.length; i += 1) {
    i530.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i531[i + 0]) );
  }
  i526.events = i530
  i526.halfPrecision = !!i527[6]
  i526._frameRate = i527[7]
  i526.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i527[8], i526.localBounds)
  i526.hasMuscleCurves = !!i527[9]
  var i533 = i527[10]
  var i532 = []
  for(var i = 0; i < i533.length; i += 1) {
    i532.push( i533[i + 0] );
  }
  i526.clipMuscleConstant = i532
  i526.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i527[11], i526.clipBindingConstant)
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i537 = data
  i536.path = i537[0]
  i536.hash = i537[1]
  i536.componentType = i537[2]
  i536.property = i537[3]
  i536.keys = i537[4]
  var i539 = i537[5]
  var i538 = []
  for(var i = 0; i < i539.length; i += 1) {
    i538.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i539[i + 0]) );
  }
  i536.objectReferenceKeys = i538
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i543 = data
  i542.time = i543[0]
  request.r(i543[1], i543[2], 0, i542, 'value')
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i547 = data
  i546.functionName = i547[0]
  i546.floatParameter = i547[1]
  i546.intParameter = i547[2]
  i546.stringParameter = i547[3]
  request.r(i547[4], i547[5], 0, i546, 'objectReferenceParameter')
  i546.time = i547[6]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i549 = data
  i548.center = new pc.Vec3( i549[0], i549[1], i549[2] )
  i548.extends = new pc.Vec3( i549[3], i549[4], i549[5] )
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i553 = data
  var i555 = i553[0]
  var i554 = []
  for(var i = 0; i < i555.length; i += 1) {
    i554.push( i555[i + 0] );
  }
  i552.genericBindings = i554
  var i557 = i553[1]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( i557[i + 0] );
  }
  i552.pptrCurveMapping = i556
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i559 = data
  i558.name = i559[0]
  var i561 = i559[1]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
    i560.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i561[i + 0]) );
  }
  i558.layers = i560
  var i563 = i559[2]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i563[i + 0]) );
  }
  i558.parameters = i562
  i558.animationClips = i559[3]
  i558.avatarUnsupported = i559[4]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i567 = data
  i566.name = i567[0]
  i566.defaultWeight = i567[1]
  i566.blendingMode = i567[2]
  i566.avatarMask = i567[3]
  i566.syncedLayerIndex = i567[4]
  i566.syncedLayerAffectsTiming = !!i567[5]
  i566.syncedLayers = i567[6]
  i566.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i567[7], i566.stateMachine)
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i569 = data
  i568.id = i569[0]
  i568.name = i569[1]
  i568.path = i569[2]
  var i571 = i569[3]
  var i570 = []
  for(var i = 0; i < i571.length; i += 1) {
    i570.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i571[i + 0]) );
  }
  i568.states = i570
  var i573 = i569[4]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i573[i + 0]) );
  }
  i568.machines = i572
  var i575 = i569[5]
  var i574 = []
  for(var i = 0; i < i575.length; i += 1) {
    i574.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i575[i + 0]) );
  }
  i568.entryStateTransitions = i574
  var i577 = i569[6]
  var i576 = []
  for(var i = 0; i < i577.length; i += 1) {
    i576.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i577[i + 0]) );
  }
  i568.exitStateTransitions = i576
  var i579 = i569[7]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i579[i + 0]) );
  }
  i568.anyStateTransitions = i578
  i568.defaultStateId = i569[8]
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i583 = data
  i582.id = i583[0]
  i582.name = i583[1]
  i582.cycleOffset = i583[2]
  i582.cycleOffsetParameter = i583[3]
  i582.cycleOffsetParameterActive = !!i583[4]
  i582.mirror = !!i583[5]
  i582.mirrorParameter = i583[6]
  i582.mirrorParameterActive = !!i583[7]
  i582.motionId = i583[8]
  i582.nameHash = i583[9]
  i582.fullPathHash = i583[10]
  i582.speed = i583[11]
  i582.speedParameter = i583[12]
  i582.speedParameterActive = !!i583[13]
  i582.tag = i583[14]
  i582.tagHash = i583[15]
  i582.writeDefaultValues = !!i583[16]
  var i585 = i583[17]
  var i584 = []
  for(var i = 0; i < i585.length; i += 2) {
  request.r(i585[i + 0], i585[i + 1], 2, i584, '')
  }
  i582.behaviours = i584
  var i587 = i583[18]
  var i586 = []
  for(var i = 0; i < i587.length; i += 1) {
    i586.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i587[i + 0]) );
  }
  i582.transitions = i586
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i593 = data
  i592.fullPath = i593[0]
  i592.canTransitionToSelf = !!i593[1]
  i592.duration = i593[2]
  i592.exitTime = i593[3]
  i592.hasExitTime = !!i593[4]
  i592.hasFixedDuration = !!i593[5]
  i592.interruptionSource = i593[6]
  i592.offset = i593[7]
  i592.orderedInterruption = !!i593[8]
  i592.destinationStateId = i593[9]
  i592.isExit = !!i593[10]
  i592.mute = !!i593[11]
  i592.solo = !!i593[12]
  var i595 = i593[13]
  var i594 = []
  for(var i = 0; i < i595.length; i += 1) {
    i594.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i595[i + 0]) );
  }
  i592.conditions = i594
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i601 = data
  i600.destinationStateId = i601[0]
  i600.isExit = !!i601[1]
  i600.mute = !!i601[2]
  i600.solo = !!i601[3]
  var i603 = i601[4]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i603[i + 0]) );
  }
  i600.conditions = i602
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i607 = data
  i606.mode = i607[0]
  i606.parameter = i607[1]
  i606.threshold = i607[2]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i611 = data
  i610.defaultBool = !!i611[0]
  i610.defaultFloat = i611[1]
  i610.defaultInt = i611[2]
  i610.name = i611[3]
  i610.nameHash = i611[4]
  i610.type = i611[5]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i613 = data
  var i615 = i613[0]
  var i614 = []
  for(var i = 0; i < i615.length; i += 1) {
    i614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i615[i + 0]) );
  }
  i612.files = i614
  i612.componentToPrefabIds = i613[1]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i619 = data
  i618.path = i619[0]
  request.r(i619[1], i619[2], 0, i618, 'unityObject')
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i621 = data
  var i623 = i621[0]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i623[i + 0]) );
  }
  i620.scriptsExecutionOrder = i622
  var i625 = i621[1]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i625[i + 0]) );
  }
  i620.sortingLayers = i624
  var i627 = i621[2]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i627[i + 0]) );
  }
  i620.cullingLayers = i626
  i620.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i621[3], i620.timeSettings)
  i620.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i621[4], i620.physicsSettings)
  i620.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i621[5], i620.physics2DSettings)
  i620.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i621[6], i620.qualitySettings)
  i620.enableRealtimeShadows = !!i621[7]
  i620.enableAutoInstancing = !!i621[8]
  i620.enableDynamicBatching = !!i621[9]
  i620.lightmapEncodingQuality = i621[10]
  i620.desiredColorSpace = i621[11]
  var i629 = i621[12]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( i629[i + 0] );
  }
  i620.allTags = i628
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i633 = data
  i632.name = i633[0]
  i632.value = i633[1]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i637 = data
  i636.id = i637[0]
  i636.name = i637[1]
  i636.value = i637[2]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i641 = data
  i640.id = i641[0]
  i640.name = i641[1]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i643 = data
  i642.fixedDeltaTime = i643[0]
  i642.maximumDeltaTime = i643[1]
  i642.timeScale = i643[2]
  i642.maximumParticleTimestep = i643[3]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i645 = data
  i644.gravity = new pc.Vec3( i645[0], i645[1], i645[2] )
  i644.defaultSolverIterations = i645[3]
  i644.bounceThreshold = i645[4]
  i644.autoSyncTransforms = !!i645[5]
  i644.autoSimulation = !!i645[6]
  var i647 = i645[7]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i647[i + 0]) );
  }
  i644.collisionMatrix = i646
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i651 = data
  i650.enabled = !!i651[0]
  i650.layerId = i651[1]
  i650.otherLayerId = i651[2]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i653 = data
  request.r(i653[0], i653[1], 0, i652, 'material')
  i652.gravity = new pc.Vec2( i653[2], i653[3] )
  i652.positionIterations = i653[4]
  i652.velocityIterations = i653[5]
  i652.velocityThreshold = i653[6]
  i652.maxLinearCorrection = i653[7]
  i652.maxAngularCorrection = i653[8]
  i652.maxTranslationSpeed = i653[9]
  i652.maxRotationSpeed = i653[10]
  i652.baumgarteScale = i653[11]
  i652.baumgarteTOIScale = i653[12]
  i652.timeToSleep = i653[13]
  i652.linearSleepTolerance = i653[14]
  i652.angularSleepTolerance = i653[15]
  i652.defaultContactOffset = i653[16]
  i652.autoSimulation = !!i653[17]
  i652.queriesHitTriggers = !!i653[18]
  i652.queriesStartInColliders = !!i653[19]
  i652.callbacksOnDisable = !!i653[20]
  i652.reuseCollisionCallbacks = !!i653[21]
  i652.autoSyncTransforms = !!i653[22]
  var i655 = i653[23]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i655[i + 0]) );
  }
  i652.collisionMatrix = i654
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i659 = data
  i658.enabled = !!i659[0]
  i658.layerId = i659[1]
  i658.otherLayerId = i659[2]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i661 = data
  var i663 = i661[0]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i663[i + 0]) );
  }
  i660.qualityLevels = i662
  var i665 = i661[1]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( i665[i + 0] );
  }
  i660.names = i664
  i660.shadows = i661[2]
  i660.anisotropicFiltering = i661[3]
  i660.antiAliasing = i661[4]
  i660.lodBias = i661[5]
  i660.shadowCascades = i661[6]
  i660.shadowDistance = i661[7]
  i660.shadowmaskMode = i661[8]
  i660.shadowProjection = i661[9]
  i660.shadowResolution = i661[10]
  i660.softParticles = !!i661[11]
  i660.softVegetation = !!i661[12]
  i660.activeColorSpace = i661[13]
  i660.desiredColorSpace = i661[14]
  i660.masterTextureLimit = i661[15]
  i660.maxQueuedFrames = i661[16]
  i660.particleRaycastBudget = i661[17]
  i660.pixelLightCount = i661[18]
  i660.realtimeReflectionProbes = !!i661[19]
  i660.shadowCascade2Split = i661[20]
  i660.shadowCascade4Split = new pc.Vec3( i661[21], i661[22], i661[23] )
  i660.streamingMipmapsActive = !!i661[24]
  i660.vSyncCount = i661[25]
  i660.asyncUploadBufferSize = i661[26]
  i660.asyncUploadTimeSlice = i661[27]
  i660.billboardsFaceCameraPosition = !!i661[28]
  i660.shadowNearPlaneOffset = i661[29]
  i660.streamingMipmapsMemoryBudget = i661[30]
  i660.maximumLODLevel = i661[31]
  i660.streamingMipmapsAddAllCameras = !!i661[32]
  i660.streamingMipmapsMaxLevelReduction = i661[33]
  i660.streamingMipmapsRenderersPerFrame = i661[34]
  i660.resolutionScalingFixedDPIFactor = i661[35]
  i660.streamingMipmapsMaxFileIORequests = i661[36]
  i660.currentQualityLevel = i661[37]
  return i660
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.RenderTexture":{"name":0,"width":1,"height":2,"anisoLevel":3,"filterMode":4,"hdr":5,"colorFormat":6,"depthStencilFormat":7,"renderTextureFormat":8,"depth":9,"wrapU":10,"wrapV":11},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.VideoPlayer":{"enabled":0,"source":1,"clip":2,"url":4,"playOnAwake":5,"isLooping":6,"renderMode":7,"targetTexture":8,"targetMaterialRenderer":10,"targetMaterialProperty":12,"playbackSpeed":13},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.VideoClip":{"name":0,"width":1,"height":2,"frameRate":3,"frameCount":4},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"31":[32],"33":[32],"34":[32],"35":[32],"36":[32],"37":[32],"38":[39],"40":[2],"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[42],"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[50],"57":[50],"58":[50],"59":[50],"60":[50],"61":[50],"62":[50],"63":[2],"64":[65],"66":[67],"68":[67],"8":[7],"69":[70],"71":[26],"72":[70],"73":[7],"74":[7],"10":[8],"12":[11,7],"75":[7],"9":[8],"76":[7],"77":[7],"78":[7],"79":[7],"80":[7],"81":[7],"82":[7],"83":[7],"84":[7],"14":[11,7],"85":[7],"86":[7],"87":[7],"88":[7],"89":[11,7],"90":[7],"91":[5],"92":[5],"6":[5],"93":[5],"94":[2],"95":[2],"96":[97],"98":[2],"99":[7],"100":[65,7],"101":[7,11],"102":[7],"103":[11,7],"104":[65],"105":[11,7],"106":[7],"107":[70]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.RawImage","UnityEngine.RenderTexture","UnityEngine.Video.VideoPlayer","UnityEngine.Video.VideoClip","UnityEngine.MonoBehaviour","VideoConverter","DeviceOrientation","UnityEngine.AudioSource","UnityEngine.AudioClip","VideoManager","UnityEngine.GameObject","Hand","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.Texture2D","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.41f1";

Deserializers.productName = "KingPin_EC(1)_2101";

Deserializers.lunaInitializationTime = "03/23/2025 05:49:59";

Deserializers.lunaDaysRunning = "0.9";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "HomeIsland_Ec_2103";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1792";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4148";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system, prefabs";

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

Deserializers.buildID = "f47e0d51-aa90-494c-af3e-b77c067635f9";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

