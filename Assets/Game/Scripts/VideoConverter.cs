using System;
using System.Collections;
using UnityEngine;
using System.IO;
using UnityEngine.Networking;
using UnityEngine.Video;

public class VideoConverter : MonoBehaviour
{
    public string videoPathOriginal;
    public string name;
    public VideoPlayer videoPlayer;
    void Start()
    {
        string base64String = EncodeVideoToBase64(videoPathOriginal);
        string videoPath = DecodeBase64ToVideo(base64String);
        if (videoPath != null)
        {
            PlayVideo(videoPath);
        }
        StartCoroutine(LoadVideo());
    }


    IEnumerator LoadVideo()
    {
        string videoPath = System.IO.Path.Combine(Application.streamingAssetsPath, name);

#if UNITY_WEBGL
        videoPath = Application.streamingAssetsPath + "/" + videoFileName; // Đường dẫn đặc biệt cho WebGL
#endif

        using (UnityWebRequest request = UnityWebRequest.Get(videoPath))
        {
            yield return request.SendWebRequest();

            if (request.result != UnityWebRequest.Result.Success)
            {
                Debug.LogError("Lỗi tải video: " + request.error);
            }
            else
            {
                string url = videoPath;
#if UNITY_WEBGL
                url = videoPath; // Trực tiếp link đến StreamingAssets trong WebGL
#endif

                videoPlayer.url = url;
                videoPlayer.Play();
            }
        }
    }
    string EncodeVideoToBase64(string path)
    {
        if (!File.Exists(path))
        {
            Debug.LogError("File không tồn tại: " + path);
            return null;
        }

        byte[] videoBytes = File.ReadAllBytes(path);
        string base64String = Convert.ToBase64String(videoBytes);
        return base64String;
    }
    string DecodeBase64ToVideo(string base64)
    {
        if (string.IsNullOrEmpty(base64))
        {
            Debug.LogError("Chuỗi Base64 rỗng hoặc null!");
            return null;
        }

        byte[] videoBytes = Convert.FromBase64String(base64);
        string tempPath = Path.Combine(Application.persistentDataPath,"decodedVideo_" + gameObject.GetInstanceID() + ".mp4");

        File.WriteAllBytes(tempPath, videoBytes);
        Debug.Log("Đã lưu video tại: " + tempPath);

        return tempPath;
    }

    void PlayVideo(string path)
    {
        videoPlayer.url = "file://" + path;
        videoPlayer.Play();
    }
}
