import Link from "next/link";

/*
 * 繁忙期(9-10月)仕込み用の共通ノート(2026-08-20設置)。
 * 勝ち面の比較ページに挿入し、/knowledge/best-timing/ へ内部リンクを供給する。
 * 「求人が増える」の根拠はbest-timing側の出典(公的統計・各社公表)に依拠し、ここでは断定的な数値を書かない。
 */
export default function BusySeasonNote() {
  return (
    <section className="mb-10 rounded-xl border border-amber-200 bg-amber-50/60 p-5">
      <h2 className="text-base font-bold text-slate-800 mb-2">転職繁忙期に向けた準備時期の目安</h2>
      <p className="text-sm leading-7 text-slate-700">
        IT転職市場では、10月入社に向けた9〜10月と、4月入社に向けた1〜3月に、求人の動きが活発になる傾向があります。
        書類選考から内定までは通常1〜2か月かかるため、
        <strong>繁忙期の1〜2か月前までに職務経歴書の整備とエージェントへの登録を済ませておく</strong>ことが目安です。
        月別の求人動向と逆算スケジュールは
        <Link href="/knowledge/best-timing/" className="text-petrol underline">転職に有利な時期はいつ？（ベストタイミング解説）</Link>
        で詳しく解説しています。
      </p>
    </section>
  );
}
