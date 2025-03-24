using Luna.Unity;
using UnityEngine;

public class UIManager : MonoBehaviour
{
	public void TriggerCTA()
	{
		Debug.Log("triggerCTA");
		Playable.InstallFullGame("https://play.google.com/store/apps/details?id=com.gamee.dragon.kingdom.castle.match.story.puzzle");
		LifeCycle.GameEnded();
	}
}
