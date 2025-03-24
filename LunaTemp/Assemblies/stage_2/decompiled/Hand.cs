using System.Collections;
using DG.Tweening;
using UnityEngine;

public class Hand : MonoBehaviour
{
	[SerializeField]
	private AudioSource source;

	[SerializeField]
	private Animator anim;

	[SerializeField]
	private Transform point1;

	[SerializeField]
	private Transform point2;

	private void Start()
	{
		StartCoroutine(Loop());
	}

	private IEnumerator Loop()
	{
		yield return new WaitForSeconds(1f);
		base.transform.DOMove(point1.position, 0.5f).SetEase(Ease.Linear).OnComplete(Click);
		yield return new WaitForSeconds(1f);
		base.transform.DOMove(point2.position, 0.5f).SetEase(Ease.Linear).OnComplete(Click);
		StartCoroutine(Loop());
	}

	private void Click()
	{
		source.Play();
		anim.ResetTrigger("click");
		anim.SetTrigger("click");
	}
}
