using System.Collections;
using UnityEngine;
using UnityEngine.Video;
using DG.Tweening;

public class VideoManager : MonoBehaviour
{
    [SerializeField] private VideoPlayer fullVidHorizon;
    [SerializeField] private VideoPlayer fullVidVertical;
    [SerializeField] private GameObject ScreenHorizon; 
    [SerializeField] private GameObject ScreenVertical; 
    [SerializeField] private AudioSource audioBG;
    [SerializeField] private Hand hand;
    [SerializeField] private GameObject image;

    [SerializeField] private GameObject BG_V;
    
    [SerializeField] private Canvas canvasHorizon;
    [SerializeField] private Canvas canvasVertical;
    private bool isVertical = true;

    private int highCanvas = 0;
    private int lowCanvas = -100;

    private void Awake()
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
        canvasHorizon.sortingOrder = highCanvas;
        canvasVertical.sortingOrder = lowCanvas;
        
    }
    private void OnVertical()
    {
        canvasHorizon.sortingOrder = lowCanvas;
        canvasVertical.sortingOrder = highCanvas;
        
    }
    public void TriggerCTA()
    {
        Debug.Log("triggerCTA");
        Luna.Unity.Playable.InstallFullGame("https://play.google.com/store/apps/details?id=com.gamee.dragon.kingdom.castle.match.story.puzzle");
        Luna.Unity.LifeCycle.GameEnded();
    }
    public void Button()
    {
        Vector3 scale = image.transform.localScale;
        scale = image.transform.localScale - new Vector3(0.1f, 0.1f, 0.1f);
        image.transform.DOScale(scale, 0.5f)
            .SetEase(Ease.Linear)
            .SetLoops(-1, LoopType.Yoyo);
    }
}
