var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i392 = root || request.c( 'UnityEngine.JointSpring' )
  var i393 = data
  i392.spring = i393[0]
  i392.damper = i393[1]
  i392.targetPosition = i393[2]
  return i392
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i394 = root || request.c( 'UnityEngine.JointMotor' )
  var i395 = data
  i394.m_TargetVelocity = i395[0]
  i394.m_Force = i395[1]
  i394.m_FreeSpin = i395[2]
  return i394
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i396 = root || request.c( 'UnityEngine.JointLimits' )
  var i397 = data
  i396.m_Min = i397[0]
  i396.m_Max = i397[1]
  i396.m_Bounciness = i397[2]
  i396.m_BounceMinVelocity = i397[3]
  i396.m_ContactDistance = i397[4]
  i396.minBounce = i397[5]
  i396.maxBounce = i397[6]
  return i396
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i398 = root || request.c( 'UnityEngine.JointDrive' )
  var i399 = data
  i398.m_PositionSpring = i399[0]
  i398.m_PositionDamper = i399[1]
  i398.m_MaximumForce = i399[2]
  i398.m_UseAcceleration = i399[3]
  return i398
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i400 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i401 = data
  i400.m_Spring = i401[0]
  i400.m_Damper = i401[1]
  return i400
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i402 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i403 = data
  i402.m_Limit = i403[0]
  i402.m_Bounciness = i403[1]
  i402.m_ContactDistance = i403[2]
  return i402
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i404 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i405 = data
  i404.m_ExtremumSlip = i405[0]
  i404.m_ExtremumValue = i405[1]
  i404.m_AsymptoteSlip = i405[2]
  i404.m_AsymptoteValue = i405[3]
  i404.m_Stiffness = i405[4]
  return i404
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i406 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i407 = data
  i406.m_LowerAngle = i407[0]
  i406.m_UpperAngle = i407[1]
  return i406
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i408 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i409 = data
  i408.m_MotorSpeed = i409[0]
  i408.m_MaximumMotorTorque = i409[1]
  return i408
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i410 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i411 = data
  i410.m_DampingRatio = i411[0]
  i410.m_Frequency = i411[1]
  i410.m_Angle = i411[2]
  return i410
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i412 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i413 = data
  i412.m_LowerTranslation = i413[0]
  i412.m_UpperTranslation = i413[1]
  return i412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i415 = data
  i414.name = i415[0]
  i414.width = i415[1]
  i414.height = i415[2]
  i414.mipmapCount = i415[3]
  i414.anisoLevel = i415[4]
  i414.filterMode = i415[5]
  i414.hdr = !!i415[6]
  i414.format = i415[7]
  i414.wrapMode = i415[8]
  i414.alphaIsTransparency = !!i415[9]
  i414.alphaSource = i415[10]
  i414.graphicsFormat = i415[11]
  i414.sRGBTexture = !!i415[12]
  i414.desiredColorSpace = i415[13]
  i414.wrapU = i415[14]
  i414.wrapV = i415[15]
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.RenderTexture"] = function (request, data, root) {
  var i416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.RenderTexture' )
  var i417 = data
  i416.name = i417[0]
  i416.width = i417[1]
  i416.height = i417[2]
  i416.anisoLevel = i417[3]
  i416.filterMode = i417[4]
  i416.hdr = !!i417[5]
  i416.colorFormat = i417[6]
  i416.depthStencilFormat = i417[7]
  i416.renderTextureFormat = i417[8]
  i416.depth = i417[9]
  i416.wrapU = i417[10]
  i416.wrapV = i417[11]
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i418 = root || new pc.UnityMaterial()
  var i419 = data
  i418.name = i419[0]
  request.r(i419[1], i419[2], 0, i418, 'shader')
  i418.renderQueue = i419[3]
  i418.enableInstancing = !!i419[4]
  var i421 = i419[5]
  var i420 = []
  for(var i = 0; i < i421.length; i += 1) {
    i420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i421[i + 0]) );
  }
  i418.floatParameters = i420
  var i423 = i419[6]
  var i422 = []
  for(var i = 0; i < i423.length; i += 1) {
    i422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i423[i + 0]) );
  }
  i418.colorParameters = i422
  var i425 = i419[7]
  var i424 = []
  for(var i = 0; i < i425.length; i += 1) {
    i424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i425[i + 0]) );
  }
  i418.vectorParameters = i424
  var i427 = i419[8]
  var i426 = []
  for(var i = 0; i < i427.length; i += 1) {
    i426.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i427[i + 0]) );
  }
  i418.textureParameters = i426
  var i429 = i419[9]
  var i428 = []
  for(var i = 0; i < i429.length; i += 1) {
    i428.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i429[i + 0]) );
  }
  i418.materialFlags = i428
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i433 = data
  i432.name = i433[0]
  i432.value = i433[1]
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i437 = data
  i436.name = i437[0]
  i436.value = new pc.Color(i437[1], i437[2], i437[3], i437[4])
  return i436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i441 = data
  i440.name = i441[0]
  i440.value = new pc.Vec4( i441[1], i441[2], i441[3], i441[4] )
  return i440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i445 = data
  i444.name = i445[0]
  request.r(i445[1], i445[2], 0, i444, 'value')
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i449 = data
  i448.name = i449[0]
  i448.enabled = !!i449[1]
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i451 = data
  i450.name = i451[0]
  i450.halfPrecision = !!i451[1]
  i450.useUInt32IndexFormat = !!i451[2]
  i450.vertexCount = i451[3]
  i450.aabb = i451[4]
  var i453 = i451[5]
  var i452 = []
  for(var i = 0; i < i453.length; i += 1) {
    i452.push( !!i453[i + 0] );
  }
  i450.streams = i452
  i450.vertices = i451[6]
  var i455 = i451[7]
  var i454 = []
  for(var i = 0; i < i455.length; i += 1) {
    i454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i455[i + 0]) );
  }
  i450.subMeshes = i454
  var i457 = i451[8]
  var i456 = []
  for(var i = 0; i < i457.length; i += 16) {
    i456.push( new pc.Mat4().setData(i457[i + 0], i457[i + 1], i457[i + 2], i457[i + 3],  i457[i + 4], i457[i + 5], i457[i + 6], i457[i + 7],  i457[i + 8], i457[i + 9], i457[i + 10], i457[i + 11],  i457[i + 12], i457[i + 13], i457[i + 14], i457[i + 15]) );
  }
  i450.bindposes = i456
  var i459 = i451[9]
  var i458 = []
  for(var i = 0; i < i459.length; i += 1) {
    i458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i459[i + 0]) );
  }
  i450.blendShapes = i458
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i465 = data
  i464.triangles = i465[0]
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i471 = data
  i470.name = i471[0]
  var i473 = i471[1]
  var i472 = []
  for(var i = 0; i < i473.length; i += 1) {
    i472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i473[i + 0]) );
  }
  i470.frames = i472
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i475 = data
  i474.name = i475[0]
  i474.index = i475[1]
  i474.startup = !!i475[2]
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i477 = data
  i476.position = new pc.Vec3( i477[0], i477[1], i477[2] )
  i476.scale = new pc.Vec3( i477[3], i477[4], i477[5] )
  i476.rotation = new pc.Quat(i477[6], i477[7], i477[8], i477[9])
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i479 = data
  i478.enabled = !!i479[0]
  i478.aspect = i479[1]
  i478.orthographic = !!i479[2]
  i478.orthographicSize = i479[3]
  i478.backgroundColor = new pc.Color(i479[4], i479[5], i479[6], i479[7])
  i478.nearClipPlane = i479[8]
  i478.farClipPlane = i479[9]
  i478.fieldOfView = i479[10]
  i478.depth = i479[11]
  i478.clearFlags = i479[12]
  i478.cullingMask = i479[13]
  i478.rect = i479[14]
  request.r(i479[15], i479[16], 0, i478, 'targetTexture')
  i478.usePhysicalProperties = !!i479[17]
  i478.focalLength = i479[18]
  i478.sensorSize = new pc.Vec2( i479[19], i479[20] )
  i478.lensShift = new pc.Vec2( i479[21], i479[22] )
  i478.gateFit = i479[23]
  i478.commandBufferCount = i479[24]
  i478.cameraType = i479[25]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i481 = data
  i480.name = i481[0]
  i480.tagId = i481[1]
  i480.enabled = !!i481[2]
  i480.isStatic = !!i481[3]
  i480.layer = i481[4]
  return i480
}

Deserializers["UIManager"] = function (request, data, root) {
  var i482 = root || request.c( 'UIManager' )
  var i483 = data
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i485 = data
  i484.pivot = new pc.Vec2( i485[0], i485[1] )
  i484.anchorMin = new pc.Vec2( i485[2], i485[3] )
  i484.anchorMax = new pc.Vec2( i485[4], i485[5] )
  i484.sizeDelta = new pc.Vec2( i485[6], i485[7] )
  i484.anchoredPosition3D = new pc.Vec3( i485[8], i485[9], i485[10] )
  i484.rotation = new pc.Quat(i485[11], i485[12], i485[13], i485[14])
  i484.scale = new pc.Vec3( i485[15], i485[16], i485[17] )
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i487 = data
  i486.enabled = !!i487[0]
  i486.planeDistance = i487[1]
  i486.referencePixelsPerUnit = i487[2]
  i486.isFallbackOverlay = !!i487[3]
  i486.renderMode = i487[4]
  i486.renderOrder = i487[5]
  i486.sortingLayerName = i487[6]
  i486.sortingOrder = i487[7]
  i486.scaleFactor = i487[8]
  request.r(i487[9], i487[10], 0, i486, 'worldCamera')
  i486.overrideSorting = !!i487[11]
  i486.pixelPerfect = !!i487[12]
  i486.targetDisplay = i487[13]
  i486.overridePixelPerfect = !!i487[14]
  return i486
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i489 = data
  i488.m_UiScaleMode = i489[0]
  i488.m_ReferencePixelsPerUnit = i489[1]
  i488.m_ScaleFactor = i489[2]
  i488.m_ReferenceResolution = new pc.Vec2( i489[3], i489[4] )
  i488.m_ScreenMatchMode = i489[5]
  i488.m_MatchWidthOrHeight = i489[6]
  i488.m_PhysicalUnit = i489[7]
  i488.m_FallbackScreenDPI = i489[8]
  i488.m_DefaultSpriteDPI = i489[9]
  i488.m_DynamicPixelsPerUnit = i489[10]
  i488.m_PresetInfoIsWorld = !!i489[11]
  return i488
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i491 = data
  i490.m_IgnoreReversedGraphics = !!i491[0]
  i490.m_BlockingObjects = i491[1]
  i490.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i491[2] )
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i493 = data
  i492.cullTransparentMesh = !!i493[0]
  return i492
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.UI.Image' )
  var i495 = data
  request.r(i495[0], i495[1], 0, i494, 'm_Sprite')
  i494.m_Type = i495[2]
  i494.m_PreserveAspect = !!i495[3]
  i494.m_FillCenter = !!i495[4]
  i494.m_FillMethod = i495[5]
  i494.m_FillAmount = i495[6]
  i494.m_FillClockwise = !!i495[7]
  i494.m_FillOrigin = i495[8]
  i494.m_UseSpriteMesh = !!i495[9]
  i494.m_PixelsPerUnitMultiplier = i495[10]
  request.r(i495[11], i495[12], 0, i494, 'm_Material')
  i494.m_Maskable = !!i495[13]
  i494.m_Color = new pc.Color(i495[14], i495[15], i495[16], i495[17])
  i494.m_RaycastTarget = !!i495[18]
  i494.m_RaycastPadding = new pc.Vec4( i495[19], i495[20], i495[21], i495[22] )
  return i494
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.UI.Button' )
  var i497 = data
  i496.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i497[0], i496.m_OnClick)
  i496.m_Navigation = request.d('UnityEngine.UI.Navigation', i497[1], i496.m_Navigation)
  i496.m_Transition = i497[2]
  i496.m_Colors = request.d('UnityEngine.UI.ColorBlock', i497[3], i496.m_Colors)
  i496.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i497[4], i496.m_SpriteState)
  i496.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i497[5], i496.m_AnimationTriggers)
  i496.m_Interactable = !!i497[6]
  request.r(i497[7], i497[8], 0, i496, 'm_TargetGraphic')
  return i496
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i499 = data
  i498.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i499[0], i498.m_PersistentCalls)
  return i498
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i501 = data
  var i503 = i501[0]
  var i502 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i503.length; i += 1) {
    i502.add(request.d('UnityEngine.Events.PersistentCall', i503[i + 0]));
  }
  i500.m_Calls = i502
  return i500
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i507 = data
  request.r(i507[0], i507[1], 0, i506, 'm_Target')
  i506.m_TargetAssemblyTypeName = i507[2]
  i506.m_MethodName = i507[3]
  i506.m_Mode = i507[4]
  i506.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i507[5], i506.m_Arguments)
  i506.m_CallState = i507[6]
  return i506
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i509 = data
  request.r(i509[0], i509[1], 0, i508, 'm_ObjectArgument')
  i508.m_ObjectArgumentAssemblyTypeName = i509[2]
  i508.m_IntArgument = i509[3]
  i508.m_FloatArgument = i509[4]
  i508.m_StringArgument = i509[5]
  i508.m_BoolArgument = !!i509[6]
  return i508
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i511 = data
  i510.m_Mode = i511[0]
  i510.m_WrapAround = !!i511[1]
  request.r(i511[2], i511[3], 0, i510, 'm_SelectOnUp')
  request.r(i511[4], i511[5], 0, i510, 'm_SelectOnDown')
  request.r(i511[6], i511[7], 0, i510, 'm_SelectOnLeft')
  request.r(i511[8], i511[9], 0, i510, 'm_SelectOnRight')
  return i510
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i512 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i513 = data
  i512.m_NormalColor = new pc.Color(i513[0], i513[1], i513[2], i513[3])
  i512.m_HighlightedColor = new pc.Color(i513[4], i513[5], i513[6], i513[7])
  i512.m_PressedColor = new pc.Color(i513[8], i513[9], i513[10], i513[11])
  i512.m_SelectedColor = new pc.Color(i513[12], i513[13], i513[14], i513[15])
  i512.m_DisabledColor = new pc.Color(i513[16], i513[17], i513[18], i513[19])
  i512.m_ColorMultiplier = i513[20]
  i512.m_FadeDuration = i513[21]
  return i512
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i514 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i515 = data
  request.r(i515[0], i515[1], 0, i514, 'm_HighlightedSprite')
  request.r(i515[2], i515[3], 0, i514, 'm_PressedSprite')
  request.r(i515[4], i515[5], 0, i514, 'm_SelectedSprite')
  request.r(i515[6], i515[7], 0, i514, 'm_DisabledSprite')
  return i514
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i516 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i517 = data
  i516.m_NormalTrigger = i517[0]
  i516.m_HighlightedTrigger = i517[1]
  i516.m_PressedTrigger = i517[2]
  i516.m_SelectedTrigger = i517[3]
  i516.m_DisabledTrigger = i517[4]
  return i516
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i518 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i519 = data
  request.r(i519[0], i519[1], 0, i518, 'm_Texture')
  i518.m_UVRect = UnityEngine.Rect.MinMaxRect(i519[2], i519[3], i519[4], i519[5])
  request.r(i519[6], i519[7], 0, i518, 'm_Material')
  i518.m_Maskable = !!i519[8]
  i518.m_Color = new pc.Color(i519[9], i519[10], i519[11], i519[12])
  i518.m_RaycastTarget = !!i519[13]
  i518.m_RaycastPadding = new pc.Vec4( i519[14], i519[15], i519[16], i519[17] )
  return i518
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i521 = data
  request.r(i521[0], i521[1], 0, i520, 'm_FirstSelected')
  i520.m_sendNavigationEvents = !!i521[2]
  i520.m_DragThreshold = i521[3]
  return i520
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i522 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i523 = data
  i522.m_HorizontalAxis = i523[0]
  i522.m_VerticalAxis = i523[1]
  i522.m_SubmitButton = i523[2]
  i522.m_CancelButton = i523[3]
  i522.m_InputActionsPerSecond = i523[4]
  i522.m_RepeatDelay = i523[5]
  i522.m_ForceModuleActive = !!i523[6]
  i522.m_SendPointerHoverToParent = !!i523[7]
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.VideoPlayer"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.VideoPlayer' )
  var i525 = data
  i524.enabled = !!i525[0]
  i524.source = i525[1]
  request.r(i525[2], i525[3], 0, i524, 'clip')
  i524.url = i525[4]
  i524.playOnAwake = !!i525[5]
  i524.isLooping = !!i525[6]
  i524.renderMode = i525[7]
  request.r(i525[8], i525[9], 0, i524, 'targetTexture')
  request.r(i525[10], i525[11], 0, i524, 'targetMaterialRenderer')
  i524.targetMaterialProperty = i525[12]
  i524.playbackSpeed = i525[13]
  return i524
}

Deserializers["VideoManager"] = function (request, data, root) {
  var i526 = root || request.c( 'VideoManager' )
  var i527 = data
  request.r(i527[0], i527[1], 0, i526, 'fullVidHorizon')
  request.r(i527[2], i527[3], 0, i526, 'fullVidVertical')
  request.r(i527[4], i527[5], 0, i526, 'ScreenHorizon')
  request.r(i527[6], i527[7], 0, i526, 'ScreenVertical')
  request.r(i527[8], i527[9], 0, i526, 'audioBG')
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i529 = data
  request.r(i529[0], i529[1], 0, i528, 'clip')
  request.r(i529[2], i529[3], 0, i528, 'outputAudioMixerGroup')
  i528.playOnAwake = !!i529[4]
  i528.loop = !!i529[5]
  i528.time = i529[6]
  i528.volume = i529[7]
  i528.pitch = i529[8]
  i528.enabled = !!i529[9]
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i531 = data
  i530.enabled = !!i531[0]
  request.r(i531[1], i531[2], 0, i530, 'sharedMaterial')
  var i533 = i531[3]
  var i532 = []
  for(var i = 0; i < i533.length; i += 2) {
  request.r(i533[i + 0], i533[i + 1], 2, i532, '')
  }
  i530.sharedMaterials = i532
  i530.receiveShadows = !!i531[4]
  i530.shadowCastingMode = i531[5]
  i530.sortingLayerID = i531[6]
  i530.sortingOrder = i531[7]
  i530.lightmapIndex = i531[8]
  i530.lightmapSceneIndex = i531[9]
  i530.lightmapScaleOffset = new pc.Vec4( i531[10], i531[11], i531[12], i531[13] )
  i530.lightProbeUsage = i531[14]
  i530.reflectionProbeUsage = i531[15]
  i530.color = new pc.Color(i531[16], i531[17], i531[18], i531[19])
  request.r(i531[20], i531[21], 0, i530, 'sprite')
  i530.flipX = !!i531[22]
  i530.flipY = !!i531[23]
  i530.drawMode = i531[24]
  i530.size = new pc.Vec2( i531[25], i531[26] )
  i530.tileMode = i531[27]
  i530.adaptiveModeThreshold = i531[28]
  i530.maskInteraction = i531[29]
  i530.spriteSortPoint = i531[30]
  return i530
}

Deserializers["Hand"] = function (request, data, root) {
  var i536 = root || request.c( 'Hand' )
  var i537 = data
  request.r(i537[0], i537[1], 0, i536, 'source')
  request.r(i537[2], i537[3], 0, i536, 'anim')
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i539 = data
  request.r(i539[0], i539[1], 0, i538, 'animatorController')
  request.r(i539[2], i539[3], 0, i538, 'avatar')
  i538.updateMode = i539[4]
  i538.hasTransformHierarchy = !!i539[5]
  i538.applyRootMotion = !!i539[6]
  var i541 = i539[7]
  var i540 = []
  for(var i = 0; i < i541.length; i += 2) {
  request.r(i541[i + 0], i541[i + 1], 2, i540, '')
  }
  i538.humanBones = i540
  i538.enabled = !!i539[8]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i545 = data
  request.r(i545[0], i545[1], 0, i544, 'sharedMesh')
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i547 = data
  request.r(i547[0], i547[1], 0, i546, 'additionalVertexStreams')
  i546.enabled = !!i547[2]
  request.r(i547[3], i547[4], 0, i546, 'sharedMaterial')
  var i549 = i547[5]
  var i548 = []
  for(var i = 0; i < i549.length; i += 2) {
  request.r(i549[i + 0], i549[i + 1], 2, i548, '')
  }
  i546.sharedMaterials = i548
  i546.receiveShadows = !!i547[6]
  i546.shadowCastingMode = i547[7]
  i546.sortingLayerID = i547[8]
  i546.sortingOrder = i547[9]
  i546.lightmapIndex = i547[10]
  i546.lightmapSceneIndex = i547[11]
  i546.lightmapScaleOffset = new pc.Vec4( i547[12], i547[13], i547[14], i547[15] )
  i546.lightProbeUsage = i547[16]
  i546.reflectionProbeUsage = i547[17]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i551 = data
  i550.enabled = !!i551[0]
  i550.isTrigger = !!i551[1]
  request.r(i551[2], i551[3], 0, i550, 'material')
  request.r(i551[4], i551[5], 0, i550, 'sharedMesh')
  i550.convex = !!i551[6]
  return i550
}

Deserializers["DeviceOrientation"] = function (request, data, root) {
  var i552 = root || request.c( 'DeviceOrientation' )
  var i553 = data
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i555 = data
  i554.ambientIntensity = i555[0]
  i554.reflectionIntensity = i555[1]
  i554.ambientMode = i555[2]
  i554.ambientLight = new pc.Color(i555[3], i555[4], i555[5], i555[6])
  i554.ambientSkyColor = new pc.Color(i555[7], i555[8], i555[9], i555[10])
  i554.ambientGroundColor = new pc.Color(i555[11], i555[12], i555[13], i555[14])
  i554.ambientEquatorColor = new pc.Color(i555[15], i555[16], i555[17], i555[18])
  i554.fogColor = new pc.Color(i555[19], i555[20], i555[21], i555[22])
  i554.fogEndDistance = i555[23]
  i554.fogStartDistance = i555[24]
  i554.fogDensity = i555[25]
  i554.fog = !!i555[26]
  request.r(i555[27], i555[28], 0, i554, 'skybox')
  i554.fogMode = i555[29]
  var i557 = i555[30]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i557[i + 0]) );
  }
  i554.lightmaps = i556
  i554.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i555[31], i554.lightProbes)
  i554.lightmapsMode = i555[32]
  i554.mixedBakeMode = i555[33]
  i554.environmentLightingMode = i555[34]
  i554.ambientProbe = new pc.SphericalHarmonicsL2(i555[35])
  i554.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i555[36])
  i554.useReferenceAmbientProbe = !!i555[37]
  request.r(i555[38], i555[39], 0, i554, 'customReflection')
  request.r(i555[40], i555[41], 0, i554, 'defaultReflection')
  i554.defaultReflectionMode = i555[42]
  i554.defaultReflectionResolution = i555[43]
  i554.sunLightObjectId = i555[44]
  i554.pixelLightCount = i555[45]
  i554.defaultReflectionHDR = !!i555[46]
  i554.hasLightDataAsset = !!i555[47]
  i554.hasManualGenerate = !!i555[48]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i561 = data
  request.r(i561[0], i561[1], 0, i560, 'lightmapColor')
  request.r(i561[2], i561[3], 0, i560, 'lightmapDirection')
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i562 = root || new UnityEngine.LightProbes()
  var i563 = data
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i571 = data
  var i573 = i571[0]
  var i572 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i573.length; i += 1) {
    i572.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i573[i + 0]));
  }
  i570.ShaderCompilationErrors = i572
  i570.name = i571[1]
  i570.guid = i571[2]
  var i575 = i571[3]
  var i574 = []
  for(var i = 0; i < i575.length; i += 1) {
    i574.push( i575[i + 0] );
  }
  i570.shaderDefinedKeywords = i574
  var i577 = i571[4]
  var i576 = []
  for(var i = 0; i < i577.length; i += 1) {
    i576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i577[i + 0]) );
  }
  i570.passes = i576
  var i579 = i571[5]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i579[i + 0]) );
  }
  i570.usePasses = i578
  var i581 = i571[6]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i581[i + 0]) );
  }
  i570.defaultParameterValues = i580
  request.r(i571[7], i571[8], 0, i570, 'unityFallbackShader')
  i570.readDepth = !!i571[9]
  i570.isCreatedByShaderGraph = !!i571[10]
  i570.compiled = !!i571[11]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i585 = data
  i584.shaderName = i585[0]
  i584.errorMessage = i585[1]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i590 = root || new pc.UnityShaderPass()
  var i591 = data
  i590.id = i591[0]
  i590.subShaderIndex = i591[1]
  i590.name = i591[2]
  i590.passType = i591[3]
  i590.grabPassTextureName = i591[4]
  i590.usePass = !!i591[5]
  i590.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i591[6], i590.zTest)
  i590.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i591[7], i590.zWrite)
  i590.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i591[8], i590.culling)
  i590.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i591[9], i590.blending)
  i590.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i591[10], i590.alphaBlending)
  i590.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i591[11], i590.colorWriteMask)
  i590.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i591[12], i590.offsetUnits)
  i590.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i591[13], i590.offsetFactor)
  i590.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i591[14], i590.stencilRef)
  i590.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i591[15], i590.stencilReadMask)
  i590.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i591[16], i590.stencilWriteMask)
  i590.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i591[17], i590.stencilOp)
  i590.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i591[18], i590.stencilOpFront)
  i590.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i591[19], i590.stencilOpBack)
  var i593 = i591[20]
  var i592 = []
  for(var i = 0; i < i593.length; i += 1) {
    i592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i593[i + 0]) );
  }
  i590.tags = i592
  var i595 = i591[21]
  var i594 = []
  for(var i = 0; i < i595.length; i += 1) {
    i594.push( i595[i + 0] );
  }
  i590.passDefinedKeywords = i594
  var i597 = i591[22]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i597[i + 0]) );
  }
  i590.passDefinedKeywordGroups = i596
  var i599 = i591[23]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i599[i + 0]) );
  }
  i590.variants = i598
  var i601 = i591[24]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i601[i + 0]) );
  }
  i590.excludedVariants = i600
  i590.hasDepthReader = !!i591[25]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i603 = data
  i602.val = i603[0]
  i602.name = i603[1]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i605 = data
  i604.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i605[0], i604.src)
  i604.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i605[1], i604.dst)
  i604.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i605[2], i604.op)
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i607 = data
  i606.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i607[0], i606.pass)
  i606.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i607[1], i606.fail)
  i606.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i607[2], i606.zFail)
  i606.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i607[3], i606.comp)
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i611 = data
  i610.name = i611[0]
  i610.value = i611[1]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i615 = data
  var i617 = i615[0]
  var i616 = []
  for(var i = 0; i < i617.length; i += 1) {
    i616.push( i617[i + 0] );
  }
  i614.keywords = i616
  i614.hasDiscard = !!i615[1]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i621 = data
  i620.passId = i621[0]
  i620.subShaderIndex = i621[1]
  var i623 = i621[2]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( i623[i + 0] );
  }
  i620.keywords = i622
  i620.vertexProgram = i621[3]
  i620.fragmentProgram = i621[4]
  i620.exportedForWebGl2 = !!i621[5]
  i620.readDepth = !!i621[6]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i627 = data
  request.r(i627[0], i627[1], 0, i626, 'shader')
  i626.pass = i627[2]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i631 = data
  i630.name = i631[0]
  i630.type = i631[1]
  i630.value = new pc.Vec4( i631[2], i631[3], i631[4], i631[5] )
  i630.textureValue = i631[6]
  i630.shaderPropertyFlag = i631[7]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i633 = data
  i632.name = i633[0]
  request.r(i633[1], i633[2], 0, i632, 'texture')
  i632.aabb = i633[3]
  i632.vertices = i633[4]
  i632.triangles = i633[5]
  i632.textureRect = UnityEngine.Rect.MinMaxRect(i633[6], i633[7], i633[8], i633[9])
  i632.packedRect = UnityEngine.Rect.MinMaxRect(i633[10], i633[11], i633[12], i633[13])
  i632.border = new pc.Vec4( i633[14], i633[15], i633[16], i633[17] )
  i632.transparency = i633[18]
  i632.bounds = i633[19]
  i632.pixelsPerUnit = i633[20]
  i632.textureWidth = i633[21]
  i632.textureHeight = i633[22]
  i632.nativeSize = new pc.Vec2( i633[23], i633[24] )
  i632.pivot = new pc.Vec2( i633[25], i633[26] )
  i632.textureRectOffset = new pc.Vec2( i633[27], i633[28] )
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.VideoClip"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.VideoClip' )
  var i635 = data
  i634.name = i635[0]
  i634.width = i635[1]
  i634.height = i635[2]
  i634.frameRate = i635[3]
  i634.frameCount = System.UInt64(i635[4])
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i637 = data
  i636.name = i637[0]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i639 = data
  i638.name = i639[0]
  i638.wrapMode = i639[1]
  i638.isLooping = !!i639[2]
  i638.length = i639[3]
  var i641 = i639[4]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i641[i + 0]) );
  }
  i638.curves = i640
  var i643 = i639[5]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i643[i + 0]) );
  }
  i638.events = i642
  i638.halfPrecision = !!i639[6]
  i638._frameRate = i639[7]
  i638.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i639[8], i638.localBounds)
  i638.hasMuscleCurves = !!i639[9]
  var i645 = i639[10]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( i645[i + 0] );
  }
  i638.clipMuscleConstant = i644
  i638.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i639[11], i638.clipBindingConstant)
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i649 = data
  i648.path = i649[0]
  i648.hash = i649[1]
  i648.componentType = i649[2]
  i648.property = i649[3]
  i648.keys = i649[4]
  var i651 = i649[5]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i651[i + 0]) );
  }
  i648.objectReferenceKeys = i650
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i655 = data
  i654.time = i655[0]
  request.r(i655[1], i655[2], 0, i654, 'value')
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i659 = data
  i658.functionName = i659[0]
  i658.floatParameter = i659[1]
  i658.intParameter = i659[2]
  i658.stringParameter = i659[3]
  request.r(i659[4], i659[5], 0, i658, 'objectReferenceParameter')
  i658.time = i659[6]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i661 = data
  i660.center = new pc.Vec3( i661[0], i661[1], i661[2] )
  i660.extends = new pc.Vec3( i661[3], i661[4], i661[5] )
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i665 = data
  var i667 = i665[0]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( i667[i + 0] );
  }
  i664.genericBindings = i666
  var i669 = i665[1]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( i669[i + 0] );
  }
  i664.pptrCurveMapping = i668
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i671 = data
  i670.name = i671[0]
  var i673 = i671[1]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i673[i + 0]) );
  }
  i670.layers = i672
  var i675 = i671[2]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i675[i + 0]) );
  }
  i670.parameters = i674
  i670.animationClips = i671[3]
  i670.avatarUnsupported = i671[4]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i679 = data
  i678.name = i679[0]
  i678.defaultWeight = i679[1]
  i678.blendingMode = i679[2]
  i678.avatarMask = i679[3]
  i678.syncedLayerIndex = i679[4]
  i678.syncedLayerAffectsTiming = !!i679[5]
  i678.syncedLayers = i679[6]
  i678.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i679[7], i678.stateMachine)
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i681 = data
  i680.id = i681[0]
  i680.name = i681[1]
  i680.path = i681[2]
  var i683 = i681[3]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i683[i + 0]) );
  }
  i680.states = i682
  var i685 = i681[4]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i685[i + 0]) );
  }
  i680.machines = i684
  var i687 = i681[5]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i687[i + 0]) );
  }
  i680.entryStateTransitions = i686
  var i689 = i681[6]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i689[i + 0]) );
  }
  i680.exitStateTransitions = i688
  var i691 = i681[7]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i691[i + 0]) );
  }
  i680.anyStateTransitions = i690
  i680.defaultStateId = i681[8]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i695 = data
  i694.id = i695[0]
  i694.name = i695[1]
  i694.cycleOffset = i695[2]
  i694.cycleOffsetParameter = i695[3]
  i694.cycleOffsetParameterActive = !!i695[4]
  i694.mirror = !!i695[5]
  i694.mirrorParameter = i695[6]
  i694.mirrorParameterActive = !!i695[7]
  i694.motionId = i695[8]
  i694.nameHash = i695[9]
  i694.fullPathHash = i695[10]
  i694.speed = i695[11]
  i694.speedParameter = i695[12]
  i694.speedParameterActive = !!i695[13]
  i694.tag = i695[14]
  i694.tagHash = i695[15]
  i694.writeDefaultValues = !!i695[16]
  var i697 = i695[17]
  var i696 = []
  for(var i = 0; i < i697.length; i += 2) {
  request.r(i697[i + 0], i697[i + 1], 2, i696, '')
  }
  i694.behaviours = i696
  var i699 = i695[18]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i699[i + 0]) );
  }
  i694.transitions = i698
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i705 = data
  i704.fullPath = i705[0]
  i704.canTransitionToSelf = !!i705[1]
  i704.duration = i705[2]
  i704.exitTime = i705[3]
  i704.hasExitTime = !!i705[4]
  i704.hasFixedDuration = !!i705[5]
  i704.interruptionSource = i705[6]
  i704.offset = i705[7]
  i704.orderedInterruption = !!i705[8]
  i704.destinationStateId = i705[9]
  i704.isExit = !!i705[10]
  i704.mute = !!i705[11]
  i704.solo = !!i705[12]
  var i707 = i705[13]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
    i706.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i707[i + 0]) );
  }
  i704.conditions = i706
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i713 = data
  i712.destinationStateId = i713[0]
  i712.isExit = !!i713[1]
  i712.mute = !!i713[2]
  i712.solo = !!i713[3]
  var i715 = i713[4]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i715[i + 0]) );
  }
  i712.conditions = i714
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i719 = data
  i718.mode = i719[0]
  i718.parameter = i719[1]
  i718.threshold = i719[2]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i723 = data
  i722.defaultBool = !!i723[0]
  i722.defaultFloat = i723[1]
  i722.defaultInt = i723[2]
  i722.name = i723[3]
  i722.nameHash = i723[4]
  i722.type = i723[5]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i725 = data
  var i727 = i725[0]
  var i726 = []
  for(var i = 0; i < i727.length; i += 1) {
    i726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i727[i + 0]) );
  }
  i724.files = i726
  i724.componentToPrefabIds = i725[1]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i731 = data
  i730.path = i731[0]
  request.r(i731[1], i731[2], 0, i730, 'unityObject')
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i733 = data
  var i735 = i733[0]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i735[i + 0]) );
  }
  i732.scriptsExecutionOrder = i734
  var i737 = i733[1]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i737[i + 0]) );
  }
  i732.sortingLayers = i736
  var i739 = i733[2]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i739[i + 0]) );
  }
  i732.cullingLayers = i738
  i732.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i733[3], i732.timeSettings)
  i732.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i733[4], i732.physicsSettings)
  i732.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i733[5], i732.physics2DSettings)
  i732.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i733[6], i732.qualitySettings)
  i732.enableRealtimeShadows = !!i733[7]
  i732.enableAutoInstancing = !!i733[8]
  i732.enableDynamicBatching = !!i733[9]
  i732.lightmapEncodingQuality = i733[10]
  i732.desiredColorSpace = i733[11]
  var i741 = i733[12]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( i741[i + 0] );
  }
  i732.allTags = i740
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i745 = data
  i744.name = i745[0]
  i744.value = i745[1]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i749 = data
  i748.id = i749[0]
  i748.name = i749[1]
  i748.value = i749[2]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i753 = data
  i752.id = i753[0]
  i752.name = i753[1]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i755 = data
  i754.fixedDeltaTime = i755[0]
  i754.maximumDeltaTime = i755[1]
  i754.timeScale = i755[2]
  i754.maximumParticleTimestep = i755[3]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i757 = data
  i756.gravity = new pc.Vec3( i757[0], i757[1], i757[2] )
  i756.defaultSolverIterations = i757[3]
  i756.bounceThreshold = i757[4]
  i756.autoSyncTransforms = !!i757[5]
  i756.autoSimulation = !!i757[6]
  var i759 = i757[7]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i759[i + 0]) );
  }
  i756.collisionMatrix = i758
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i763 = data
  i762.enabled = !!i763[0]
  i762.layerId = i763[1]
  i762.otherLayerId = i763[2]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i765 = data
  request.r(i765[0], i765[1], 0, i764, 'material')
  i764.gravity = new pc.Vec2( i765[2], i765[3] )
  i764.positionIterations = i765[4]
  i764.velocityIterations = i765[5]
  i764.velocityThreshold = i765[6]
  i764.maxLinearCorrection = i765[7]
  i764.maxAngularCorrection = i765[8]
  i764.maxTranslationSpeed = i765[9]
  i764.maxRotationSpeed = i765[10]
  i764.baumgarteScale = i765[11]
  i764.baumgarteTOIScale = i765[12]
  i764.timeToSleep = i765[13]
  i764.linearSleepTolerance = i765[14]
  i764.angularSleepTolerance = i765[15]
  i764.defaultContactOffset = i765[16]
  i764.autoSimulation = !!i765[17]
  i764.queriesHitTriggers = !!i765[18]
  i764.queriesStartInColliders = !!i765[19]
  i764.callbacksOnDisable = !!i765[20]
  i764.reuseCollisionCallbacks = !!i765[21]
  i764.autoSyncTransforms = !!i765[22]
  var i767 = i765[23]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i767[i + 0]) );
  }
  i764.collisionMatrix = i766
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i771 = data
  i770.enabled = !!i771[0]
  i770.layerId = i771[1]
  i770.otherLayerId = i771[2]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i773 = data
  var i775 = i773[0]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i775[i + 0]) );
  }
  i772.qualityLevels = i774
  var i777 = i773[1]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( i777[i + 0] );
  }
  i772.names = i776
  i772.shadows = i773[2]
  i772.anisotropicFiltering = i773[3]
  i772.antiAliasing = i773[4]
  i772.lodBias = i773[5]
  i772.shadowCascades = i773[6]
  i772.shadowDistance = i773[7]
  i772.shadowmaskMode = i773[8]
  i772.shadowProjection = i773[9]
  i772.shadowResolution = i773[10]
  i772.softParticles = !!i773[11]
  i772.softVegetation = !!i773[12]
  i772.activeColorSpace = i773[13]
  i772.desiredColorSpace = i773[14]
  i772.masterTextureLimit = i773[15]
  i772.maxQueuedFrames = i773[16]
  i772.particleRaycastBudget = i773[17]
  i772.pixelLightCount = i773[18]
  i772.realtimeReflectionProbes = !!i773[19]
  i772.shadowCascade2Split = i773[20]
  i772.shadowCascade4Split = new pc.Vec3( i773[21], i773[22], i773[23] )
  i772.streamingMipmapsActive = !!i773[24]
  i772.vSyncCount = i773[25]
  i772.asyncUploadBufferSize = i773[26]
  i772.asyncUploadTimeSlice = i773[27]
  i772.billboardsFaceCameraPosition = !!i773[28]
  i772.shadowNearPlaneOffset = i773[29]
  i772.streamingMipmapsMemoryBudget = i773[30]
  i772.maximumLODLevel = i773[31]
  i772.streamingMipmapsAddAllCameras = !!i773[32]
  i772.streamingMipmapsMaxLevelReduction = i773[33]
  i772.streamingMipmapsRenderersPerFrame = i773[34]
  i772.resolutionScalingFixedDPIFactor = i773[35]
  i772.streamingMipmapsMaxFileIORequests = i773[36]
  i772.currentQualityLevel = i773[37]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i783 = data
  i782.weight = i783[0]
  i782.vertices = i783[1]
  i782.normals = i783[2]
  i782.tangents = i783[3]
  return i782
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Textures.RenderTexture":{"name":0,"width":1,"height":2,"anisoLevel":3,"filterMode":4,"hdr":5,"colorFormat":6,"depthStencilFormat":7,"renderTextureFormat":8,"depth":9,"wrapU":10,"wrapV":11},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.VideoPlayer":{"enabled":0,"source":1,"clip":2,"url":4,"playOnAwake":5,"isLooping":6,"renderMode":7,"targetTexture":8,"targetMaterialRenderer":10,"targetMaterialProperty":12,"playbackSpeed":13},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.VideoClip":{"name":0,"width":1,"height":2,"frameRate":3,"frameCount":4},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"36":[37],"38":[37],"39":[37],"40":[37],"41":[37],"42":[37],"43":[44],"45":[3],"46":[47],"48":[47],"49":[47],"50":[47],"51":[47],"52":[47],"53":[47],"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[55],"62":[55],"63":[55],"64":[55],"65":[55],"66":[55],"67":[55],"68":[3],"69":[32],"70":[71],"72":[71],"8":[7],"73":[74],"75":[25],"76":[74],"77":[7],"78":[7],"11":[8],"13":[12,7],"79":[7],"10":[8],"80":[7],"81":[7],"82":[7],"83":[7],"84":[7],"85":[7],"86":[7],"87":[7],"88":[7],"16":[12,7],"89":[7],"90":[7],"91":[7],"92":[7],"93":[12,7],"94":[7],"95":[17],"96":[17],"18":[17],"97":[17],"98":[3],"99":[3],"100":[101],"102":[3],"103":[7],"104":[32,7],"105":[7,12],"106":[7],"107":[12,7],"108":[32],"109":[12,7],"110":[7],"111":[74]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.RenderTexture","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","UIManager","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Button","UnityEngine.UI.RawImage","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Video.VideoPlayer","VideoManager","UnityEngine.GameObject","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Video.VideoClip","UnityEngine.SpriteRenderer","UnityEngine.Material","Hand","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.MeshCollider","DeviceOrientation","UnityEngine.Texture2D","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.41f1";

Deserializers.productName = "KingPin_EC(1)_2101";

Deserializers.lunaInitializationTime = "01/17/2025 15:27:37";

Deserializers.lunaDaysRunning = "2.5";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "3622";

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

Deserializers.buildID = "71dfacb6-12da-499d-8a17-b03885f750df";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

