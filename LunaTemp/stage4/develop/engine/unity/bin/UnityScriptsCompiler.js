if ( TRACE ) { TRACE( JSON.parse( '["DeviceOrientation#Update","Hand#Start","Hand#SetUp","Hand#Click","UIManager#TriggerCTA","VideoManager#Start","VideoManager#OnHorizontal","VideoManager#OnVertical"]' ) ); }
/**
 * @version 1.0.9151.17407
 * @copyright anton
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*DeviceOrientation start.*/
    Bridge.define("DeviceOrientation", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                onPortraitMode: null,
                onLandscapeMode: null
            }
        },
        methods: {
            /*DeviceOrientation.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "DeviceOrientation#Update", this ); }

                if (UnityEngine.Screen.width > UnityEngine.Screen.height) {
                    !Bridge.staticEquals(DeviceOrientation.onLandscapeMode, null) ? DeviceOrientation.onLandscapeMode() : null;
                } else {
                    !Bridge.staticEquals(DeviceOrientation.onPortraitMode, null) ? DeviceOrientation.onPortraitMode() : null;
                }
            },
            /*DeviceOrientation.Update end.*/


        }
    });
    /*DeviceOrientation end.*/

    /*Hand start.*/
    Bridge.define("Hand", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            source: null,
            anim: null
        },
        methods: {
            /*Hand.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Hand#Start", this ); }

                this.SetUp();
            },
            /*Hand.Start end.*/

            /*Hand.SetUp start.*/
            SetUp: function () {
if ( TRACE ) { TRACE( "Hand#SetUp", this ); }

                if (this.gameObject.activeSelf) {
                    this.StartCoroutine$1(this.Click());
                }
            },
            /*Hand.SetUp end.*/

            /*Hand.Click start.*/
            Click: function () {
if ( TRACE ) { TRACE( "Hand#Click", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (!this.gameObject.activeSelf) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 2;
                                        continue;
                                }
                                case 1: {
                                    return false;
                                }
                                case 2: {
                                    this.source.Play();
                                        this.anim.ResetTrigger$1("click");
                                        this.anim.SetTrigger$1("click");
                                        $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    if (!this.gameObject.activeSelf) {
                                            $step = 4;
                                            continue;
                                        } 
                                        $step = 5;
                                        continue;
                                }
                                case 4: {
                                    return false;
                                }
                                case 5: {
                                    this.StartCoroutine$1(this.Click());

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*Hand.Click end.*/


        }
    });
    /*Hand end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*UIManager start.*/
    Bridge.define("UIManager", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*UIManager.TriggerCTA start.*/
            TriggerCTA: function () {
if ( TRACE ) { TRACE( "UIManager#TriggerCTA", this ); }

                UnityEngine.Debug.Log$1("triggerCTA");
                Luna.Unity.Playable.InstallFullGame("https://play.google.com/store/apps/details?id=com.gamee.dragon.kingdom.castle.match.story.puzzle");
                Luna.Unity.LifeCycle.GameEnded();
            },
            /*UIManager.TriggerCTA end.*/


        }
    });
    /*UIManager end.*/

    /*VideoManager start.*/
    Bridge.define("VideoManager", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            fullVidHorizon: null,
            fullVidVertical: null,
            ScreenHorizon: null,
            ScreenVertical: null,
            audioBG: null
        },
        methods: {
            /*VideoManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "VideoManager#Start", this ); }

                DeviceOrientation.onLandscapeMode = Bridge.fn.cacheBind(this, this.OnHorizontal);
                DeviceOrientation.onPortraitMode = Bridge.fn.cacheBind(this, this.OnVertical);
                this.audioBG.Play();
                this.fullVidHorizon.Play();
                this.fullVidVertical.Play();

            },
            /*VideoManager.Start end.*/

            /*VideoManager.OnHorizontal start.*/
            OnHorizontal: function () {
if ( TRACE ) { TRACE( "VideoManager#OnHorizontal", this ); }

                // fullVidHorizon.gameObject.SetActive(true);
                // fullVidVertical.gameObject.SetActive(false);
                this.ScreenHorizon.SetActive(true);
                this.ScreenVertical.SetActive(false);
            },
            /*VideoManager.OnHorizontal end.*/

            /*VideoManager.OnVertical start.*/
            OnVertical: function () {
if ( TRACE ) { TRACE( "VideoManager#OnVertical", this ); }

                // fullVidVertical.gameObject.SetActive(true);
                // fullVidHorizon.gameObject.SetActive(false);
                this.ScreenVertical.SetActive(true);
                this.ScreenHorizon.SetActive(false);
            },
            /*VideoManager.OnVertical end.*/


        }
    });
    /*VideoManager end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","System.Collections","UnityEngine","UnityEngine.Video"];

    /*DeviceOrientation start.*/
    $m("DeviceOrientation", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":4,"n":"onLandscapeMode","is":true,"t":4,"rt":Function,"sn":"onLandscapeMode"},{"a":4,"n":"onPortraitMode","is":true,"t":4,"rt":Function,"sn":"onPortraitMode"}]}; }, $n);
    /*DeviceOrientation end.*/

    /*Hand start.*/
    $m("Hand", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Click","t":8,"sn":"Click","rt":$n[1].IEnumerator},{"a":2,"n":"SetUp","t":8,"sn":"SetUp","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"anim","t":4,"rt":$n[2].Animator,"sn":"anim"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"source","t":4,"rt":$n[2].AudioSource,"sn":"source"}]}; }, $n);
    /*Hand end.*/

    /*UIManager start.*/
    $m("UIManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"TriggerCTA","t":8,"sn":"TriggerCTA","rt":$n[0].Void}]}; }, $n);
    /*UIManager end.*/

    /*VideoManager start.*/
    $m("VideoManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnHorizontal","t":8,"sn":"OnHorizontal","rt":$n[0].Void},{"a":1,"n":"OnVertical","t":8,"sn":"OnVertical","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ScreenHorizon","t":4,"rt":$n[2].GameObject,"sn":"ScreenHorizon"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"ScreenVertical","t":4,"rt":$n[2].GameObject,"sn":"ScreenVertical"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"audioBG","t":4,"rt":$n[2].AudioSource,"sn":"audioBG"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fullVidHorizon","t":4,"rt":$n[3].VideoPlayer,"sn":"fullVidHorizon"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fullVidVertical","t":4,"rt":$n[3].VideoPlayer,"sn":"fullVidVertical"}]}; }, $n);
    /*VideoManager end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    }});
