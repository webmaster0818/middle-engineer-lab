import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "レバテックキャリア vs マイナビIT AGENT【徹底比較】どっちを選ぶべき？ | ミドルエンジニア転職ラボ",
  description:
    "レバテックキャリアとマイナビIT AGENTを8項目で徹底比較。求人数、年収UP実績、得意分野、サポート体制の違いを解説し、30代・40代エンジニアに最適なエージェント選びを支援します。",
};

const faqs = [
  {
    q: "レバテックキャリアとマイナビIT AGENTの最大の違いは？",
    a: "最大の違いは対象年代と得意領域です。レバテックキャリアは30代〜40代のミドル・シニア層に強く高年収求人が豊富。マイナビIT AGENTは20代〜30代前半の若手に強く、丁寧なサポートが特徴です。",
  },
  {
    q: "年収UPしやすいのはどっち？",
    a: "年収UP率はレバテックキャリアが80%と高い実績があります。マイナビIT AGENTは年収UP率は非公開ですが、未経験〜若手層の年収UPに強い傾向があります。年収600万円以上を目指すならレバテックキャリアが有利です。",
  },
  {
    q: "30代におすすめなのはどっち？",
    a: "30代前半ならマイナビIT AGENTの丁寧なサポートも魅力的ですが、30代中盤以降はレバテックキャリアがおすすめです。IT業界に精通したアドバイザーの質と、高年収求人の豊富さが決め手です。",
  },
  {
    q: "40代におすすめなのはどっち？",
    a: "40代には圧倒的にレバテックキャリアがおすすめです。マイナビIT AGENTは若手〜30代前半がメインターゲットのため、40代向けの求人は限定的です。",
  },
  {
    q: "未経験からのIT転職にはどっち？",
    a: "未経験からのIT転職にはマイナビIT AGENTがおすすめです。未経験者向けの研修付き求人や、ポテンシャル採用の求人が充実しています。レバテックキャリアは経験者向けの求人がメインです。",
  },
  {
    q: "両方登録しても大丈夫？",
    a: "もちろん大丈夫です。2社に登録することで非公開求人の幅が広がります。レバテックキャリアで高年収求人を、マイナビIT AGENTで手厚いサポートを受けるという使い分けが効果的です。",
  },
];

const comparison = [
  { item: "求人数", a: "約25,000件", b: "約18,000件" },
  { item: "年収UP実績", a: "年収UP率80%", b: "丁寧なサポートで着実にUP" },
  { item: "得意分野", a: "IT全般（Web、SIer、インフラ、社内SE）", b: "Web系、SIer、社内SE" },
  { item: "対象年代", a: "30代〜40代全般", b: "20代〜30代前半" },
  { item: "アドバイザーの質", a: "IT業界出身者が多い", b: "丁寧・親身なサポート" },
  { item: "対応エリア", a: "全国（東京・大阪・名古屋・福岡拠点）", b: "全国（主要都市に拠点）" },
  { item: "内定までの期間", a: "平均3〜4週間", b: "平均4〜6週間" },
  { item: "料金", a: "完全無料", b: "完全無料" },
];

export default function LevtechVsMynaviPage() {
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
        title="レバテックキャリア vs マイナビIT AGENT【徹底比較】どっちを選ぶべき？"
        description="レバテックキャリアとマイナビIT AGENTを8項目で徹底比較。求人数、年収UP実績、得意分野の違いを解説します。"
        url="/compare/levtech-vs-mynavi/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "比較" },
          { name: "レバテックキャリア vs マイナビIT AGENT" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          レバテックキャリア vs マイナビIT AGENT【徹底比較】どっちを選ぶべき？
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | IT特化型エージェント2社を徹底比較
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            レバテックキャリアとマイナビIT AGENTはどちらもIT特化型エージェントとして高い人気を誇りますが、ターゲット層やサポートスタイルに明確な違いがあります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、8つの比較項目を通じて両社の違いを明らかにし、あなたに最適なエージェントの選び方を解説します。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">総合比較テーブル（8項目）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">比較項目</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">レバテックキャリア</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">マイナビIT AGENT</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-3 py-3 border border-slate-200 font-medium">{row.item}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.a}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 求人数・実績は2026年6月時点の情報。非公開求人を含む場合があります。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">各社の強み</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">レバテックキャリアの強み</h3>
              <p className="text-sm text-blue-700">
                IT業界出身のアドバイザーによる深い技術理解。年収UP率80%の実績。30代〜40代のミドル・シニア層に特に強く、EM/CTOなどの管理職求人も豊富。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">マイナビIT AGENTの強み</h3>
              <p className="text-sm text-slate-600">
                業界トップクラスの丁寧なサポート。書類添削・面接対策が手厚く、転職初心者に最適。20代〜30代前半の若手IT人材の転職に圧倒的な実績。
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">こんな人にはレバテックキャリア</h2>
          <div className="bg-blue-50 rounded-lg p-5 mb-4">
            <ul className="space-y-2 text-sm text-blue-700">
              <li>- IT経験3年以上のミドルエンジニア</li>
              <li>- 年収600万円以上を目指す30代・40代</li>
              <li>- EM/CTO/VPoEなどの管理職を目指す人</li>
              <li>- 技術面での深い理解があるアドバイザーを求める人</li>
              <li>- スピード感を持って転職活動を進めたい人</li>
            </ul>
          </div>

          <h2 className="text-xl font-bold text-slate-800 mb-4">こんな人にはマイナビIT AGENT</h2>
          <div className="bg-green-50 rounded-lg p-5 mb-4">
            <ul className="space-y-2 text-sm text-green-700">
              <li>- IT経験1〜3年の若手エンジニア</li>
              <li>- 転職活動が初めてで手厚いサポートが欲しい人</li>
              <li>- 書類添削・面接対策をしっかり受けたい人</li>
              <li>- 20代〜30代前半でキャリアの方向性に迷っている人</li>
              <li>- 未経験からIT業界にキャリアチェンジしたい人</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">両方使うのがおすすめな理由</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "非公開求人が異なる", desc: "各社が持つ非公開求人は重複しないことが多いため、2社に登録するだけで選択肢が大幅に広がります。" },
                { num: "2", title: "サポートスタイルを比較", desc: "レバテックの技術理解力とマイナビの丁寧さ、両方体験して自分に合う方をメインに据えると効果的です。" },
                { num: "3", title: "年収交渉の材料になる", desc: "2社からのオファーを比較することで、年収交渉で有利なポジションを取れます。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
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
          </div>
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
          <h2 className="text-xl font-bold mb-3">迷ったら両方登録がおすすめ</h2>
          <p className="text-blue-100 text-sm mb-4">
            レバテックキャリアとマイナビIT AGENTは両方無料。2社に登録して非公開求人の幅を広げましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "レバテック vs Geekly比較", href: "/compare/levtech-vs-geekly/" },
              { name: "レバテック vs doda比較", href: "/compare/levtech-vs-doda/" },
              { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
              { name: "30代におすすめエージェント", href: "/compare/30s-agents/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors"
              >
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
