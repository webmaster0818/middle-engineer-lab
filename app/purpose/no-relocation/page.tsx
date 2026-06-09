import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "転勤なしのエンジニア求人の見極め方【2026年版】",
  description:
    "「転勤なし」のエンジニア求人を勤務地限定の観点で解説。原則・当面・選択制の罠、SES客先常駐・出向で崩れる落とし穴、年収とのトレードオフまで30-40代向けに正直に整理。",
};

const faqs = [
  {
    q: "「転勤なし」とフルリモートは何が違う？",
    a: "「転勤なし」は勤務地（事業所）が変わらないことを保証する条件で、出社自体はあるのが前提です。つまり「毎日その事業所に通う」働き方であり、住む地域は固定できますが在宅勤務が保証されるわけではありません。一方フルリモートは出社そのものをほぼ不要にする働き方です。『今の家から通い続けたい・引っ越したくない』なら転勤なし、『通勤自体をなくしたい』ならフルリモートが軸になります。在宅で働きたい場合はフルリモート勤務ガイドを、移住・二拠点を考えるなら移住・地方移住OKの求人ガイドを合わせてご覧ください。",
  },
  {
    q: "「転勤なし」と書いてあれば絶対に転勤しない？",
    a: "必ずしもそうとは限りません。求人票の「転勤なし」が『当面なし』『原則なし』のニュアンスで、将来的な事業所異動・出向・グループ会社への配置転換の可能性が残るケースがあります。確実に勤務地を固定したい場合は、雇用契約書に勤務地を限定する条項（勤務地限定正社員・地域限定職など）があるか、また会社都合での異動命令が及ぶ範囲を書面で確認することが重要です。",
  },
  {
    q: "SESや客先常駐でも「転勤なし」はあてになる？",
    a: "注意が必要です。SES・客先常駐では、雇用元の事業所は変わらなくても、常駐先（プロジェクト）が変わるたびに通勤先が大きく変わることがあります。これは形式上「転勤」ではないため『転勤なし』と表記されますが、実質的な勤務地は安定しません。常駐先の範囲（エリア・通勤時間の上限）を面接で確認しましょう。SES起点のキャリアを見直したい場合はSESから自社開発への転職も参考になります。",
  },
  {
    q: "転勤なしを選ぶと年収は下がる？",
    a: "一概には言えませんが、勤務地限定正社員（地域限定職）は全国転勤型の総合職に比べて、昇給上限や賞与・手当でやや差がつく制度設計の企業もあります。これは『転勤という会社都合への柔軟性』の対価という位置づけです。ただしIT業界では職種・スキルで給与が決まる比重が大きく、勤務地限定でも高待遇の求人は存在します。年収を落とさず勤務地を固定したいなら、職種別の市場価値を高めることが近道です。",
  },
  {
    q: "30-40代が転勤なしを重視する理由は？",
    a: "持ち家の購入、子どもの就学・転校回避、配偶者の仕事、親の介護など、生活基盤が地域に固定される年代だからです。20代なら転勤を経験値と捉えられても、家族を持つミドルにとって転勤は世帯全体に影響する重大事です。だからこそ求人票の表現を鵜呑みにせず、契約レベルで勤務地が固定されるかを確認する価値があります。",
  },
  {
    q: "転勤なしのエンジニア求人はどのくらいある？",
    a: "マイナビ転職で「ITエンジニア×転勤なし」の求人を確認したところ13,561件でした（2026年6月閲覧時点・件数は変動します）。比較的母数は多いものの、前述のとおり『転勤なし』の中身は企業ごとに差があるため、件数の多さだけで安心せず一社ずつ実態を確認することをおすすめします。",
  },
];

export default function NoRelocationPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <ArticleJsonLd
        title="転勤なしのエンジニア求人の見極め方【2026年版】"
        description="「転勤なし」のエンジニア求人を勤務地限定の観点で解説。原則・当面・選択制の罠、SES客先常駐で崩れる落とし穴、年収とのトレードオフまで正直に整理。"
        url="/purpose/no-relocation/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "目的別ガイド", href: "/purpose/" },
          { name: "転勤なし求人の見極め方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          転勤なしのエンジニア求人の見極め方
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | 勤務地を固定したいミドルのための完全ガイド</p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "マイナビ転職（求人件数・閲覧時点）",
            "厚生労働省 モデル就業規則・労働契約関係資料",
          ]}
        />

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：「転勤なし」は“勤務地が固定される”ことの確認が全て</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            「転勤なし」は、在宅勤務を約束するフルリモートとは別の軸です。<strong>出社はあるが、住む地域を変えなくてよい</strong>——これが転勤なしの本質です。引っ越したくない、子どもを転校させたくない、持ち家から通い続けたいという30-40代にとって、最も重要なのは求人票の文言ではなく「契約レベルで勤務地が固定されるか」です。本記事は『原則なし・当面なし・選択制』の落とし穴を整理し、入社後に勤務地が崩れる事態を防ぐ見極め方を解説します。
          </p>
          <div className="bg-blue-50 border border-slate-200 rounded-lg p-6">
            <p className="text-sm font-medium text-slate-700 mb-2">こんな人におすすめ</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>- 持ち家・子どもの学校があり引っ越せない</li>
              <li>- 出社はしてもよいが、住む地域は固定したい</li>
              <li>- 配偶者の仕事・親の介護で地域を離れられない</li>
              <li>- 「転勤なし」の求人を契約レベルで見極めたい</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">目次</h2>
          <ol className="list-decimal list-inside space-y-1 text-sm text-blue-700">
            <li>「転勤なし」が崩れる4つの落とし穴</li>
            <li>勤務地を固定する制度の確認方法</li>
            <li>見極めチェックリスト</li>
            <li>年収とのトレードオフ</li>
            <li>30-40代ミドルの視点</li>
            <li>よくある質問</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">1. 「転勤なし」が崩れる4つの落とし穴</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">落とし穴</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">何が起きるか</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "「原則」「当面」なし", desc: "求人票は「原則転勤なし」。事業拡大や本人都合で将来の異動余地が残る" },
                  { type: "選択制の罠", desc: "総合職／地域限定職の選択制で、転勤なしは地域限定職を選んだ場合のみ。総合職だと転勤あり" },
                  { type: "事業所異動・出向", desc: "形式上は転勤でなくても、同一エリア内の別拠点異動やグループ会社への出向で通勤先が変わる" },
                  { type: "SES客先常駐", desc: "雇用元は固定でも、常駐プロジェクトが変わるたび通勤先が変動。実質勤務地は安定しない" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.type}</td>
                    <td className="px-4 py-3 text-slate-600">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">2. 勤務地を固定する制度の確認方法</h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              <strong>勤務地限定正社員（地域限定職）：</strong>労働契約で勤務地を特定の事業所・エリアに限定する制度です。会社都合の転勤命令の対象外になるため、勤務地固定の確実性が最も高い選択肢です。求人票に「地域限定正社員制度あり」「勤務地限定可」と明記されているかを確認しましょう。
            </p>
            <p>
              <strong>雇用契約の勤務地条項：</strong>内定後に提示される労働条件通知書・雇用契約書で、勤務地がどう書かれているかを確認します。「就業の場所：◯◯事業所（変更の範囲：◯◯事業所に限る）」のように変更範囲が限定されていれば安心材料です。逆に「会社の定める事業所」と包括的に書かれている場合は、会社都合での異動が及び得ます。
            </p>
            <p>
              <strong>支社・拠点数：</strong>そもそも拠点が1〜2か所しかない企業や、リモート前提で全社員が分散している企業は、構造的に転勤が発生しにくい傾向があります。
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">3. 見極めチェックリスト</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "「転勤なし」が原則・当面・確定のどれか確認", desc: "面接で『例外的に異動になるケースはありますか』と聞き、回答の歯切れで実態を読みます。" },
              { num: "2", title: "勤務地限定正社員制度の有無を確認", desc: "制度として勤務地を固定できるなら、最も確実です。総合職との待遇差も合わせて確認します。" },
              { num: "3", title: "雇用契約書の勤務地条項（変更の範囲）を確認", desc: "労働条件通知書の『就業の場所の変更の範囲』欄を必ずチェック。包括的記載は要注意です。" },
              { num: "4", title: "出向・グループ間配置の可能性を確認", desc: "親会社・子会社が多いグループ企業では、出向で実質的な勤務地変更が起きることがあります。" },
              { num: "5", title: "（SESの場合）常駐先エリアの範囲を確認", desc: "『通勤90分以内のプロジェクトに限る』など、常駐先の地理的範囲が決まっているかを確認します。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">4. 年収とのトレードオフ（正直な話）</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            勤務地限定を選ぶことには、知っておくべきトレードオフがあります。一部の企業では、地域限定職は全国転勤型の総合職に比べて昇給上限・賞与・各種手当でやや差がつく制度設計になっています。これは「転勤という会社都合への柔軟性を提供しない対価」という位置づけです。
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            ただしIT業界は、勤務地よりも<strong>職種・スキル・実績で給与が決まる比重が大きい</strong>のが特徴です。勤務地限定でも高待遇の求人は確実に存在します。「勤務地を固定したいが年収も落としたくない」なら、市場価値の高いスキルを磨くことが本質的な打ち手になります。年代別の年収水準は
            <Link href="/knowledge/salary-30s/" className="text-blue-600 hover:underline">30代エンジニアの年収</Link>
            ・
            <Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代エンジニアの年収</Link>
            も参考にしてください。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">5. 30-40代ミドルの視点</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            転勤は本人だけの問題ではありません。持ち家のローン、子どもの転校による学習・友人関係への影響、配偶者のキャリア、親の介護——これらは世帯全体に波及します。20代では「転勤＝経験」と前向きに捉えられても、生活基盤が地域に根を張ったミドルにとって、転勤回避は譲れない条件になりがちです。
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            だからこそ、求人票の「転勤なし」という4文字を信じて入社し、数年後に異動を打診される事態は避けたいところ。<strong>口頭の安心よりも、雇用契約書の勤務地条項という“書面の事実”で確認する</strong>のが、家族を守るミドルの賢い動き方です。住む場所を起点に働き方を設計したい場合は、
            <Link href="/purpose/remote-full/" className="text-blue-600 hover:underline">フルリモート勤務ガイド</Link>
            や
            <Link href="/purpose/uturnable/" className="text-blue-600 hover:underline">Uターン・Iターン×IT転職</Link>
            も選択肢になります。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800">
                  <span>Q. {faq.q}</span>
                  <span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span>
                </summary>
                <div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">転勤なしの求人を無料で紹介</h2>
          <p className="text-blue-100 text-sm mb-4">勤務地条件の実態まで確認できるIT特化型エージェントが、あなたに合う企業を提案します。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "フルリモート勤務ガイド", href: "/purpose/remote-full/" },
              { name: "Uターン・Iターン×IT転職", href: "/purpose/uturnable/" },
              { name: "移住・地方移住OKの求人ガイド", href: "/purpose/relocation-friendly/" },
              { name: "東京のITエンジニア求人", href: "/area/tokyo/" },
              { name: "SESから自社開発への転職", href: "/industry/ses-exit/" },
              { name: "ミドルエンジニア転職ラボTOP", href: "/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
