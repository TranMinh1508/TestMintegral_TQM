using System;
using System.Collections;
using System.IO;
using UnityEngine;
using UnityEngine.Networking;
using UnityEngine.Video;

public class VideoConverter : MonoBehaviour
{
	public string videoPathOriginal;

	public new string name;

	public VideoPlayer videoPlayer;

	private void Start()
	{
		string base64String = EncodeVideoToBase64(videoPathOriginal);
		string videoPath = DecodeBase64ToVideo(base64String);
		if (videoPath != null)
		{
			PlayVideo(videoPath);
		}
		StartCoroutine(LoadVideo());
	}

	private IEnumerator LoadVideo()
	{
		string videoPath = Path.Combine(Application.streamingAssetsPath, name);
		using (UnityWebRequest request = UnityWebRequest.Get(videoPath))
		{
			yield return request.SendWebRequest();
			if (request.result != UnityWebRequest.Result.Success)
			{
				Debug.LogError("Lỗi tải video: " + request.error);
				yield break;
			}
			string url = videoPath;
			videoPlayer.url = url;
			videoPlayer.Play();
		}
	}

	private string EncodeVideoToBase64(string path)
	{
		if (!File.Exists(path))
		{
			Debug.LogError("File không tồn tại: " + path);
			return null;
		}
		byte[] videoBytes = File.ReadAllBytes(path);
		return Convert.ToBase64String(videoBytes);
	}

	private string DecodeBase64ToVideo(string base64)
	{
		if (string.IsNullOrEmpty(base64))
		{
			Debug.LogError("Chuỗi Base64 rỗng hoặc null!");
			return null;
		}
		byte[] videoBytes = Convert.FromBase64String(base64);
		string tempPath = Path.Combine(Application.persistentDataPath, "decodedVideo_" + base.gameObject.GetInstanceID() + ".mp4");
		File.WriteAllBytes(tempPath, videoBytes);
		Debug.Log("Đã lưu video tại: " + tempPath);
		return tempPath;
	}

	private void PlayVideo(string path)
	{
		videoPlayer.url = "file://" + path;
		videoPlayer.Play();
	}
}
