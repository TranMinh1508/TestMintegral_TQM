using System.Collections;
using UnityEngine;
using UnityEngine.Video;
using DG.Tweening;

public class VideoManager : MonoBehaviour
{
    public int indexEC;
    [SerializeField] private VideoPlayer fullVidHorizon;
    [SerializeField] private VideoPlayer fullVidVertical;
    [SerializeField] private GameObject ScreenHorizon; 
    [SerializeField] private GameObject ScreenVertical; 
    [SerializeField] private AudioSource audioBG;
    [SerializeField] private Hand hand;
    [SerializeField] private GameObject image;

    [SerializeField] private VideoPlayer videoHorizon_1;
    [SerializeField] private VideoPlayer videoHorizon_2;
    
    [SerializeField] private VideoPlayer videoVertical_1;
    [SerializeField] private VideoPlayer videoVertical_2;

    [SerializeField] private GameObject BG_V;
    
    private bool isVertical = true;

    private void Awake()
    {
        DeviceOrientation.onLandscapeMode = OnHorizontal;
        DeviceOrientation.onPortraitMode = OnVertical;
        audioBG.Play();
        if (indexEC == 1)
        {
            videoVertical_1.gameObject.SetActive(true);
            videoHorizon_1.gameObject.SetActive(true);
            hand.gameObject.SetActive(false);
            StartCoroutine(DeplayVideo2());
        }
        else
        {
            fullVidHorizon.Play();
            fullVidVertical.Play();
        }
    }

    private void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            TriggerCTA();
        }
    }

    IEnumerator DeplayVideo2()
    {
        yield return new WaitForSeconds(2);
        hand.gameObject.SetActive(true);
        if (isVertical)
        {
            hand.gameObject.SetActive(true);
            videoVertical_1.gameObject.SetActive(false);
            videoVertical_2.gameObject.SetActive(true);
            videoVertical_2.Play();
        }
        else
        {
            videoHorizon_1.gameObject.SetActive(false);
            videoHorizon_2.gameObject.SetActive(true);
            videoHorizon_2.Play();
        }
    }
    private void OnHorizontal()
    {
        BG_V.SetActive(false);
        if (indexEC == 1)
        {
            isVertical = false;
            if (videoVertical_1.gameObject.activeSelf)
            {
                TurnOffAll();
                videoHorizon_1.gameObject.SetActive(true);
                videoHorizon_1.Play();
            }
            else
            {
                TurnOffAll();
                videoHorizon_2.gameObject.SetActive(true);
                videoHorizon_2.Play();
            }
        }
        ScreenHorizon.SetActive(true);
        ScreenVertical.SetActive(false);
    }
    private void OnVertical()
    {
        BG_V.SetActive(true);

        if (indexEC == 1)
        {
            isVertical = true;
            if (videoHorizon_1.gameObject.activeSelf)
            {
                TurnOffAll();
                videoVertical_1.gameObject.SetActive(true);
                videoVertical_1.Play();
            }
            else
            {
                TurnOffAll();
                videoVertical_2.gameObject.SetActive(true);
                videoVertical_2.Play();
            }
        }
        ScreenVertical.SetActive(true);
        ScreenHorizon.SetActive(false);
    }
    public void TriggerCTA()
    {
        Debug.Log("triggerCTA");
        Luna.Unity.Playable.InstallFullGame("https://play.google.com/store/apps/details?id=com.gamee.dragon.kingdom.castle.match.story.puzzle");
        Luna.Unity.LifeCycle.GameEnded();
    }

    void TurnOffAll()
    {
        videoVertical_1.gameObject.SetActive(false);
        videoVertical_2.gameObject.SetActive(false);
        videoHorizon_1.gameObject.SetActive(false);
        videoHorizon_2.gameObject.SetActive(false);
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
