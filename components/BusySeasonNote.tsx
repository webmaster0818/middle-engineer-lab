import Link from "next/link";

/*
 * 繁忙期(9-10月)仕込み用の共通ノート(2026-08-20設置)。
 * 勝ち面の比較ページに挿入し、/knowledge/best-timing/ へ内部リンクを供給する。
 * 「求人が増える」の根拠はbest-timing側の出典(公的統計・各社公表)に依拠し、ここでは断定的な数値を書かない。
 */
export default function BusySeasonNote() {
  return (
    <section className="mb-10 rounded-xl border border-amber-200 bg-amber-50/60 p-5">
      <h2 className="text-base font-bold text-slate-800 mb-2">9〜10月の転職繁忙期を狙うなら、動き出しは8月が目安</h2>
      <p className="text-sm leading-7 text-slate-700">
        IT転職市場は、下期スタート（10月入社）に向けて9〜10月に求人の動きが活発になる傾向があります。
        書類選考〜面接〜内定までは通常1〜2ヶ月かかるため、繁忙期の求人増を狙うなら
        <strong>8月中に職務経歴書の整備とエージェント登録を済ませておく</strong>のが逆算上の目安です。
        月別の求人動向と逆算スケジュールは
        <Link href="/knowledge/best-timing/" className="text-petrol underline">転職に有利な時期はいつ？（ベストタイミング解説）</Link>
        で詳しく解説しています。
      </p>
    </section>
  );
}
