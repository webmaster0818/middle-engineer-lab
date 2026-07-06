import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "エンジニア転職の年収交渉ガイド【タイミング・例文】";
const DESCRIPTION =
  "エンジニア転職の年収交渉を、ベストなタイミング・伝え方の例文・エージェント経由の交渉・NG行動まで実践的に解説。30代・40代が市場相場と実績を根拠に損せず交渉するための手順をまとめます。";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/salary-negotiation/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：年収交渉の基本方針" },
  { id: "timing", label: "交渉のベストタイミング" },
  { id: "framework", label: "交渉を組み立てる3つの根拠" },
  { id: "examples", label: "伝え方の例文テンプレート" },
  { id: "agent", label: "エージェント経由の交渉の進め方" },
  { id: "ng", label: "やってはいけないNG行動" },
  { id: "midlife", label: "30代・40代の交渉の注意点" },
  { id: "faq", label: "よくある質問" },
];

const reasons = [
  {
    title: "市場相場",
    desc: "同等のスキル・経験を持つエンジニアの市場相場を、エージェントに確認してそろえます。客観的な数値が交渉の土台になります。",
  },
  {
    title: "スキルの希少性",
    desc: "需要が高く供給が少ないスキル・領域（クラウド基盤、SRE、セキュリティ等）を持つ場合、その希少性が交渉材料になります。",
  },
  {
    title: "他社のオファー",
    desc: "他社からの提示額は最も強い材料です。ただし嘘は厳禁。実際のオファーがある場合に限り、誠実に提示します。",
  },
];

const examples = [
  {
    scene: "希望額をレンジで伝える",
    text: "「ご提示ありがとうございます。これまでの○○（領域）の経験と市場相場を踏まえ、年収は650万〜700万円を希望しております。ご検討いただけますと幸いです。」",
  },
  {
    scene: "市場相場を根拠にする",
    text: "「同等のスキル・経験を持つエンジニアの市場相場は○○万円前後と伺っており、その水準でご検討いただけないでしょうか。」",
  },
  {
    scene: "他社オファーを材料にする",
    text: "「実は他社より年収○○万円のオファーをいただいております。御社を第一志望に考えておりますので、近い水準でご検討いただけると大変ありがたいです。」",
  },
  {
    scene: "成果を根拠にする",
    text: "「前職ではレスポンスタイムを○○%改善し、運用コストを削減しました。こうした実績を踏まえ、○○万円を希望いたします。」",
  },
  {
    scene: "年収以外で補完する",
    text: "「年収面でのご調整が難しい場合、入社時の一時金やリモートワークの日数など、別の条件でご相談させていただくことは可能でしょうか。」",
  },
];

const ngActions = [
  {
    title: "個人的な事情を根拠にする",
    desc: "「生活が苦しいので上げてほしい」は交渉の根拠になりません。企業が見るのは市場価値に見合った報酬です。",
  },
  {
    title: "前職年収だけを根拠にする",
    desc: "「前職では○○万円もらっていたので」は弱い根拠です。市場相場と自分のスキル・実績に基づいて交渉しましょう。",
  },
  {
    title: "否定的・高圧的な表現を使う",
    desc: "「御社の提示額では低すぎます」は印象を損ねます。「ありがたいオファーですが、市場相場を踏まえ○○万円を希望します」とポジティブに伝えます。",
  },
  {
    title: "現実離れした金額を要求する",
    desc: "現年収の2倍など根拠のない高額要求は、印象を悪くします。常識的な範囲（目安として10〜20%程度のアップ）で根拠とともに伝えましょう。",
  },
  {
    title: "前職年収について嘘をつく",
    desc: "源泉徴収票の提出でバレるリスクがあります。前職年収が低い場合も、市場相場に話をずらして誠実に交渉するのが得策です。",
  },
];

const faqs = [
  {
    q: "年収交渉はいつ切り出すべきですか？",
    a: "最終面接後〜内定提示の前後がベストタイミングです。企業が『この人を採用したい』と判断した段階での交渉が最も通りやすくなります。一次面接の段階で年収の話を前面に出すと、条件ばかり気にしている印象を与えるリスクがあるため避けましょう。",
  },
  {
    q: "年収交渉で伝えるべき根拠は何ですか？",
    a: "「市場相場」「スキルの希少性」「他社のオファー」の3つが有効です。エージェントに市場相場を確認し、客観的なデータと自分の実績をそろえて交渉しましょう。前職年収や個人的事情だけを根拠にするのは避けます。",
  },
  {
    q: "年収交渉はエージェントに任せた方がいいですか？",
    a: "エージェント経由の転職なら、任せるのが現実的です。エージェントは企業の予算感や年収テーブルを把握しており、候補者が直接言いにくい条件のすり合わせも代行してくれます。直接応募の場合は自分で交渉する必要があります。",
  },
  {
    q: "年収交渉で内定が取り消されることはありますか？",
    a: "常識的な範囲・誠実な伝え方であれば、交渉だけで内定が取り消されることはまずありません。ただし、現実離れした金額の要求や高圧的な態度は印象を損ねます。根拠とともにレンジで伝え、合意できない場合の落としどころも考えておきましょう。",
  },
  {
    q: "前職の年収を聞かれたらどう答えるべきですか？",
    a: "正直に答えましょう。嘘は源泉徴収票の提出時にバレるリスクがあります。前職年収が低い場合は、『前職では○○の事情で抑えられていましたが、市場相場では○○万円が妥当と考えています』のように、市場相場へ話を展開するのがポイントです。",
  },
  {
    q: "年収以外に交渉できることはありますか？",
    a: "あります。入社時の一時金（サインオンボーナス）、リモートワークの日数、フレックス、副業可否、ストックオプション、書籍購入費やカンファレンス参加費などが対象になり得ます。年収の上乗せが難しい場合、これらの条件で総合的な待遇を改善できます。",
  },
  {
    q: "30代・40代の年収交渉で特に気をつけることは？",
    a: "30代は積み上げた実績を数値で語れる強みがあります。40代は役職手当を前提にした希望ではなく、役職に依存しない実力ベースの市場価値を根拠にすることが重要です。いずれもエージェントで現在の相場を確認してから臨みましょう。",
  },
];

export default function SalaryNegotiationPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/salary-negotiation/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "年収交渉ガイド" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エンジニア転職の年収交渉ガイド【タイミング・例文】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 損しないための実践的な交渉手順
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          エンジニア転職で年収交渉をしないのは、もったいない選択です。とはいえ「どう切り出せばいいか分からない」「印象を損ねたくない」と感じる人も多いはず。本記事では、交渉のベストタイミング、根拠の作り方、そのまま使える例文、エージェント経由の進め方、避けるべきNG行動まで、実践的に解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "パーソルキャリア（doda）2024年度 決定年収レポート（2025年5月公表）",
            "レバテック公表の年代別平均年収（2025年）",
          ]}
        />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：年収交渉の基本方針</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              年収交渉の基本は、<strong>「内定提示前後のタイミング」で「市場相場・スキルの希少性・他社オファー」を根拠に「レンジで」伝える</strong>こと。そして、エージェント経由なら交渉をプロに任せるのが効率的です。
            </p>
            <p className="text-slate-700 leading-relaxed">
              参考として、dodaの2024年度「決定年収レポート」（2025年5月公表）では転職者の約6割が年収アップを実現しています。適切な準備をすれば、年収アップは決して特別なことではありません。個人的な事情や前職年収だけを根拠にせず、客観的なデータと実績で交渉に臨みましょう。
            </p>
          </div>
        </section>

        {/* タイミング */}
        <section id="timing" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">交渉のベストタイミング</h2>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">○ ベスト：最終面接後〜内定提示の前後</h3>
              <p className="text-sm text-slate-600">企業が『採用したい』と判断した段階。交渉が最も通りやすく、印象も損ねにくいタイミングです。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">△ 注意：オファー面談での確認</h3>
              <p className="text-sm text-slate-600">提示後のオファー面談は条件をすり合わせる場です。即答せず、内訳（基本給・賞与・各種手当）を確認してから交渉します。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">× 避ける：一次面接など選考の早い段階</h3>
              <p className="text-sm text-slate-600">早すぎる段階で年収の話を前面に出すと、条件だけを気にしている印象を与えるリスクがあります。</p>
            </div>
          </div>
        </section>

        {/* フレームワーク */}
        <section id="framework" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">交渉を組み立てる3つの根拠</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            説得力のある交渉は、次の3つの根拠を組み合わせて作ります。最低でも「市場相場」は必ず押さえましょう。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reasons.map((r, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{r.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            市場相場は
            <Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の調べ方</Link>
            の手順でエージェントに確認できます。
          </p>
        </section>

        {/* 例文 */}
        <section id="examples" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">伝え方の例文テンプレート</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            場面別の例文です。自分の状況に合わせて言い回しを調整してください（数値はあくまで記入例）。
          </p>
          <div className="space-y-4">
            {examples.map((e, i) => (
              <div key={i} className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-100 px-5 py-2 text-sm font-bold text-slate-700">{e.scene}</div>
                <p className="px-5 py-4 text-sm text-slate-700 leading-relaxed">{e.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* エージェント経由 */}
        <section id="agent" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エージェント経由の交渉の進め方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            エージェント経由の転職では、交渉をプロに任せるのが効果的です。進め方の流れは次の通りです。
          </p>
          <div className="space-y-4">
            {[
              { num: "1", title: "希望年収と下限ラインを共有する", desc: "「希望は○○万円、最低でも○○万円」と、希望額と譲れない下限をエージェントに事前に伝えます。" },
              { num: "2", title: "根拠となる実績・スキルを渡す", desc: "数値で語れる成果や保有スキルを整理して共有すると、エージェントが企業に説明しやすくなります。" },
              { num: "3", title: "他社の選考状況を正直に伝える", desc: "他社オファーや選考状況は重要な交渉材料です。エージェントが全体を見て交渉のタイミングを計ってくれます。" },
              { num: "4", title: "交渉は基本的にエージェントに任せる", desc: "候補者が直接言いにくい金額の話も、エージェントが企業との関係を保ちながら進めてくれます。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            複数社のオファーを比較しながら交渉したい場合は、
            <Link href="/knowledge/offer-compare/" className="text-petrol hover:underline">複数内定の比較方法</Link>
            も参考にしてください。
          </p>
        </section>

        {/* NG */}
        <section id="ng" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">やってはいけないNG行動</h2>
          <div className="space-y-4">
            {ngActions.map((n, i) => (
              <div key={i} className="bg-red-50 rounded-lg p-5">
                <h3 className="font-bold text-red-800 mb-2">{n.title}</h3>
                <p className="text-sm text-red-700 leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 30代40代 */}
        <section id="midlife" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の交渉の注意点</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：実績を数値で語れる強みを活かす</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                30代は実務経験が厚くなり、定量的な成果を交渉材料にしやすい年代です。レバテック公表（2025年）の30代平均約499万円を一つの目安に、自分のスキルが相場のどこに位置するかをエージェントに確認したうえで臨みましょう。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：役職手当に依存しない根拠を用意する</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                40代は現職の役職手当を前提に高い希望を出すと、役職なしの提示で折り合わないことがあります。役職に依存しない実力ベースの市場価値（レバテック公表の40代平均は約618万円）を根拠に、専門性やマネジメント力を具体的に示すことが大切です。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12 scroll-mt-20">
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

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">年収交渉のプロに無料で任せよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントの年収交渉力を活用して、納得のいく条件を引き出しましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "複数内定の比較方法", href: "/knowledge/offer-compare/" },
              { name: "転職で年収は上がる？下がる？", href: "/knowledge/salary-change/" },
              { name: "30代エンジニアの年収相場", href: "/knowledge/salary-30s/" },
              { name: "40代エンジニアの年収相場", href: "/knowledge/salary-40s/" },
              { name: "市場価値の調べ方", href: "/knowledge/market-value/" },
              { name: "退職の進め方ガイド", href: "/knowledge/resignation/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors"
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
