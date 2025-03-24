using System;
using UnityEngine;

public class DeviceOrientation : MonoBehaviour
{
	internal static Action onPortraitMode;

	internal static Action onLandscapeMode;

	private bool isVertical = true;

	private void Start()
	{
		if (Screen.width > Screen.height)
		{
			isVertical = false;
			onLandscapeMode?.Invoke();
		}
		else
		{
			isVertical = true;
			onPortraitMode?.Invoke();
		}
	}

	public void CheckOrientation()
	{
		if (Screen.width > Screen.height)
		{
			if (isVertical)
			{
				isVertical = false;
				onLandscapeMode?.Invoke();
			}
		}
		else if (!isVertical)
		{
			isVertical = true;
			onPortraitMode?.Invoke();
		}
	}

	private void Update()
	{
		CheckOrientation();
	}
}
