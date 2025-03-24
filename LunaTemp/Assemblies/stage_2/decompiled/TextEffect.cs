using System.Collections;
using DG.Tweening;
using UnityEngine;

public class TextEffect : MonoBehaviour
{
	[SerializeField]
	private Transform txt1;

	[SerializeField]
	private Transform txt2;

	[SerializeField]
	private SpriteRenderer spriteRenderer1;

	[SerializeField]
	private SpriteRenderer spriteRenderer2;

	[SerializeField]
	private float timeDelay1;

	[SerializeField]
	private float timeDelay2;

	private Sequence sequence;

	private float deltaTime;

	private void Start()
	{
		spriteRenderer1.enabled = false;
		spriteRenderer2.enabled = false;
		deltaTime = timeDelay2 - timeDelay1;
		StartCoroutine(OnEffect1());
		StartCoroutine(OnEffect2());
	}

	private IEnumerator OnEffect1()
	{
		yield return new WaitForSeconds(timeDelay1);
		spriteRenderer1.enabled = true;
		Vector3 scale = txt1.localScale;
		txt1.DOScale(scale + new Vector3(0.02f, 0.02f, 0.02f), 0.2f).SetEase(Ease.Linear);
		txt1.DOMove(txt1.position + new Vector3(0f, 0.15f, 0f), 0.2f).SetEase(Ease.Linear).OnComplete(delegate
		{
			txt1.DOMove(txt1.position - new Vector3(0f, 0.13f, 0f), 0.2f).SetEase(Ease.Linear);
			txt1.DOScale(scale, 0.2f).SetEase(Ease.Linear);
		});
		yield return new WaitForSeconds((deltaTime > 0f) ? 2f : (2f + deltaTime));
		spriteRenderer1.enabled = false;
		StartCoroutine(OnEffect1());
	}

	private IEnumerator OnEffect2()
	{
		yield return new WaitForSeconds(timeDelay2);
		spriteRenderer2.enabled = true;
		Vector3 scale = txt2.localScale;
		txt2.DOScale(scale + new Vector3(0.02f, 0.02f, 0.02f), 0.2f).SetEase(Ease.Linear);
		txt2.DOMove(txt2.position + new Vector3(0f, 0.15f, 0f), 0.2f).SetEase(Ease.Linear).OnComplete(delegate
		{
			txt2.DOMove(txt2.position - new Vector3(0f, 0.13f, 0f), 0.2f).SetEase(Ease.Linear);
			txt2.DOScale(scale, 0.2f).SetEase(Ease.Linear);
		});
		yield return new WaitForSeconds((deltaTime > 0f) ? (2f - deltaTime) : 2f);
		spriteRenderer2.enabled = false;
		StartCoroutine(OnEffect2());
	}
}
