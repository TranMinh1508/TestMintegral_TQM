using System;
using System.Collections;
using UnityEngine;
using UnityEngine.UIElements;
using UnityEngine.Video;

public class VideoManager : MonoBehaviour
{
    [SerializeField] private VideoPlayer fullVidHorizon;
    [SerializeField] private VideoPlayer fullVidVertical;
    [SerializeField] private GameObject ScreenHorizon; 
    [SerializeField] private GameObject ScreenVertical; 
    [SerializeField] private AudioSource audioBG;
    private void Start()
    {
        DeviceOrientation.onLandscapeMode = OnHorizontal;
        DeviceOrientation.onPortraitMode = OnVertical;
        audioBG.Play();
        fullVidHorizon.Play();
        fullVidVertical.Play();
        
    }

    private void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            TriggerCTA();
        }
    }

    private void OnHorizontal()
    {
        // fullVidHorizon.gameObject.SetActive(true);
        // fullVidVertical.gameObject.SetActive(false);
        ScreenHorizon.SetActive(true);
        ScreenVertical.SetActive(false);
    }
    private void OnVertical()
    {
        // fullVidVertical.gameObject.SetActive(true);
        // fullVidHorizon.gameObject.SetActive(false);
        ScreenVertical.SetActive(true);
        ScreenHorizon.SetActive(false);
    }
    public void TriggerCTA()
    {
        Debug.Log("triggerCTA");
        Luna.Unity.Playable.InstallFullGame("https://play.google.com/store/apps/details?id=com.gamee.dragon.kingdom.castle.match.story.puzzle");
        Luna.Unity.LifeCycle.GameEnded();
    }
}
