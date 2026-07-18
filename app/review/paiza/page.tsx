import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/review/paiza/" },
  title: "paiza転職の評判は？スキルチェックの仕組みを徹底解説",
  description:
    "paiza転職の評判をスキルチェック(コーディングテスト)のランク制度を軸に解説。書類選考免除の仕組み、良い評判・悪い評判の傾向、30代・40代エンジニアの使い方まで2026年6月時点で検証します。",
};

const TITLE = "paiza転職の評判は？スキルチェックの仕組みを徹底解説";
const DESCRIPTION =
  "paiza転職の評判をスキルチェック(コーディングテスト)のランク制度を軸に解説。書類選考免除の仕組み、良い評判・悪い評判の傾向、30代・40代エンジニアの使い方まで2026年6月時点で検証します。";

// H2見出しの目次（アンカー）
const toc = [
  { id: "summary", label: "結論サマリ：どんな人向けか" },
  { id: "basic", label: "基本データ（2026年6月時点）" },
  { id: "mechanism", label: "スキルチェックとランク制度の仕組み" },
  { id: "strength", label: "paiza転職の特徴・強み" },
  { id: "good", label: "良い評判の傾向" },
  { id: "bad", label: "悪い評判の傾向と対処法" },
  { id: "middle", label: "30代・40代エンジニアの使い方戦略" },
  { id: "checklist", label: "向いている人／向いていない人" },
  { id: "flow", label: "登録から内定までの5ステップ" },
  { id: "compare", label: "他サービスとの比較・併用" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

// 基本データ表（datasheet 2026年6月準拠）
const basicData: [string, string][] = [
  ["運営会社", "paiza株式会社（2013年設立・二次情報）"],
  ["公開求人数", "約5,100件（2026年4月更新・二次情報）／掲載1,600社以上"],
  ["会員規模", "全体会員85万人以上（2025年3月時点・二次情報）"],
  ["サービス形態", "スキルチェック（コーディングテスト）のランク評価→スカウト型。書類選考免除あり"],
  ["個別仲介サポート", "エージェント型の専任サポートは基本なし（求職者が主体的に動く形）"],
  ["対応エリア", "全国（Web系はリモート求人も一定数あり・公開求人ベース）"],
  ["得意領域", "Web系・自社開発・スタートアップ／プログラミング職"],
  ["料金", "求職者完全無料"],
];

// スキルランクの整理（paizaの公開仕様に基づく一般的な区分）
const ranks: { rank: string; level: string; note: string }[] = [
  { rank: "S", level: "最上位", note: "高難度のアルゴリズム問題を高速・正確に解ける水準。書類選考免除の対象企業が最も広がる" },
  { rank: "A", level: "上位", note: "実務上位層の目安。スカウトが届きやすく、選考免除の対象になる求人も多い" },
  { rank: "B", level: "中位", note: "一定の実装力がある水準。スカウトが届き始めるボーダーライン" },
  { rank: "C〜E", level: "基礎〜入門", note: "基礎レベル。スカウトは届きにくく、まずランクアップを目指す段階" },
];

// 良い評判（datasheet：jobs.qiita / asiro 等の傾向要約）
const goodReviews = [
  {
    head: "スキルが数値（ランク）で可視化される",
    body: "Qiita Job Change（jobs.qiita）やasiro等の口コミプラットフォームでは、職務経歴書では伝わりにくい技術力をランクという客観指標で示せる点を評価する声が見られる。",
  },
  {
    head: "学歴・経歴の壁が低い",
    body: "学歴や前職の知名度ではなくコーディングテストの結果で評価されるため、経歴に左右されにくいという傾向の声が同プラットフォームで見られる。",
  },
  {
    head: "高ランクなら年齢を問わずスカウトが届きやすい",
    body: "高ランク保持者には年齢に関わらずスカウトが届きやすいという傾向の声が見られる。実力で勝負したい層からの評価が中心。",
  },
];

// 悪い評判（datasheet：freeconsul 等の傾向要約）
const badReviews = [
  {
    head: "希望条件と合わないスカウトが届くことがある",
    body: "希望年収・勤務地・職種と必ずしも一致しないスカウトが届くという声が、freeconsul等の口コミプラットフォームで見られる。",
    cope: "受信設定や希望条件を細かく登録し、スカウトの「気になる」「興味なし」を丁寧に返すことでマッチング精度が上がりやすい。条件外スカウトは無理に対応しない。",
  },
  {
    head: "ランクB以上でないとスカウトが届きにくい",
    body: "ランクが一定水準（目安としてB以上）に届かないとスカウトの数が伸びにくいという傾向の声が見られる。",
    cope: "スキルチェックは何度も再挑戦できる。アルゴリズム・データ構造の基礎を固め、まずはランクアップに集中してから本格的な活動に移るのが現実的。",
  },
  {
    head: "総求人数は大手エージェントより少ない",
    body: "求人数そのものは大手総合エージェントに比べて少ないという声が見られる（公開求人 約5,100件・2026年4月更新の二次情報）。",
    cope: "paiza単体で完結させず、求人量の多いエージェントや他サービスと併用して母集団を確保するのが定石。",
  },
];

const faqs = [
  {
    q: "paiza転職の評判は実際どうですか？",
    a: "Qiita Job Change・asiro等の口コミプラットフォームでは「スキルが数値化される」「学歴・経歴の壁が低い」「高ランクなら年齢を問わずスカウトが届きやすい」といった良い評判の傾向が見られます。一方でfreeconsul等では「希望条件と合わないスカウトが届く」「ランクB以上でないと届きにくい」「総求人数は大手より少ない」といった声も見られます（2026年6月時点）。",
  },
  {
    q: "スキルチェック（コーディングテスト）とは何ですか？",
    a: "アルゴリズム・データ構造を中心としたプログラミング問題を、制限時間内に解いて正確性と速度で評価される仕組みです。結果はS／A／B／C／D／Eのランクとして可視化され、このランクが企業へのアピール材料やスカウト・書類選考免除の判断材料になります。複数言語に対応しています。",
  },
  {
    q: "スキルランクが高いと書類選考は免除されますか？",
    a: "一定以上のスキルランクを持っていると、書類選考をスキップして面接に進める「書類選考免除」の対象になる求人があります（免除に必要なランクは企業ごとに異なります）。職務経歴書だけでは伝わりにくい技術力を、テスト結果で先に示せる点がpaiza転職の核となる仕組みです。",
  },
  {
    q: "paiza転職の利用は無料ですか？",
    a: "はい、求職者は完全無料です。スキルチェックの受験、求人への応募、企業とのやりとりまで費用はかかりません。",
  },
  {
    q: "30代・40代でも使えますか？",
    a: "利用は可能です。datasheetの傾向として、高ランク保持者は年齢を問わずスカウトが届きやすいという声があります。ただしWeb系・自社開発の若手向け求人が中心で、PM・マネジメント職の母数は大手エージェントに比べて限られるため、ミドル層は年収交渉やマネジメント求人を扱うエージェントとの併用が現実的です。",
  },
  {
    q: "スキルチェックは何度も受けられますか？",
    a: "スキルチェックは繰り返し挑戦でき、より高いランクを目指せます。最初に低いランクでも、アルゴリズムの基礎を固めて再挑戦することでスカウトが届きやすくなる可能性があります。",
  },
  {
    q: "エージェントのような個別サポートはありますか？",
    a: "paiza転職はスカウト型が中心で、エージェント型の専任担当による求人紹介・面接同行といった手厚い個別仲介サポートは基本的にありません。書類添削や年収交渉の代行を求める場合は、レバテックキャリアなどのエージェントとの併用が向いています。",
  },
  {
    q: "どんな企業の求人が多いですか？",
    a: "Web系・自社開発・スタートアップが中心です。プログラミング職（バックエンド・フロントエンド等）の求人と相性が良く、技術力で評価されたいエンジニアに向いています。一方、SIerや大手の総合的な求人を広く見たい場合は他サービスの併用が有効です。",
  },
  {
    q: "退会方法は？しつこい連絡はありますか？",
    a: "退会・アカウント削除は会員ページの設定から手続きできます。スカウト型のため一斉のスカウトメールが届くことはありますが、希望条件や受信設定を調整することで通知量はコントロールできます。",
  },
  {
    q: "他の転職サービスと併用すべきですか？",
    a: "おすすめです。paiza転職（技術力で勝負・書類選考免除）と、エージェント型のレバテックキャリア（添削・年収交渉サポート）を組み合わせると、技術アピールと交渉サポートの両面をカバーできます。",
  },
];

const relatedPosts: { name: string; href: string }[] = [
  { name: "コーディングテスト対策の基本", href: "/knowledge/coding-test/" },
  { name: "スカウト型サービスの活用法", href: "/knowledge/scout/" },
  { name: "直接応募という選択肢", href: "/knowledge/direct-apply/" },
  { name: "複数エージェントの併用術", href: "/knowledge/multiple-agents/" },
  { name: "30代エンジニアの年収相場", href: "/knowledge/salary-30s/" },
  { name: "自分に合う転職サービスの選び方", href: "/knowledge/how-to-choose/" },
];

export default function PaizaReview() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/review/paiza/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "評判・口コミ一覧", href: "/review/" },
          { name: "paiza転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">{TITLE}</h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | スキルチェック（コーディングテスト）のランク制度を軸に、評判と仕組みを30代・40代目線で検証
        </p>
        <p className="text-slate-700 leading-relaxed mb-2">
          paiza転職は、職務経歴書ではなく「スキルチェック」と呼ばれるコーディングテストのランクで実力を可視化し、そのランクをもとにスカウトや書類選考免除へつなげる転職サービスです。
          本記事では「paiza転職 評判」の検索意図に答えるため、ランク制度と書類選考免除の仕組みを軸に、良い評判・悪い評判の傾向、そして30代・40代エンジニアが使う際の戦略までを整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "paiza転職に関する二次情報集計",
            "Qiita Job Change",
            "asiro",
            "freeconsul",
          ]}
        />

        {/* 目次 */}
        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3">目次</p>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-petrol-deep list-decimal list-inside">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論サマリ */}
        <section id="summary" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論サマリ：どんな人向けか</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="font-bold text-blue-900 mb-3 text-lg">
              結論：「コードで実力を証明したいエンジニア」に向くスカウト型サービス
            </p>
            <p className="text-sm text-blue-900 leading-relaxed mb-4">
              paiza転職は、スキルチェックのランクで技術力を客観的に示し、書類選考を飛ばして面接へ進みたい人に最適です。
              学歴や前職の知名度に左右されたくない、コードで勝負したいという志向のエンジニアと相性が良いサービスです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>・<span className="font-medium">向いている</span>：自走できるWeb系・自社開発志向の実務エンジニア、高ランクを取れる自信がある人</li>
              <li>・<span className="font-medium">注意</span>：求人数は大手より少なく、専任エージェントの手厚い個別サポートは基本なし</li>
              <li>・<span className="font-medium">おすすめの使い方</span>：エージェント型サービスと併用し、技術アピールと交渉サポートを両取りする</li>
            </ul>
          </div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
            {[
              ["総合評価", "★★★★☆", "技術力で勝負したい層に強い"],
              ["仕組みの独自性", "★★★★★", "ランク制＋書類選考免除"],
              ["サポートの手厚さ", "★★★☆☆", "スカウト型・自走前提"],
            ].map(([k, v, note], i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <p className="text-xs text-slate-500 mb-1">{k}</p>
                <p className="text-yellow-500 text-lg">{v}</p>
                <p className="text-xs text-slate-500 mt-1">{note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 基本データ */}
        <section id="basic" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ（2026年6月時点）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {basicData.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-2/5 border-b border-slate-200 align-top">
                      {label}
                    </th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-3">
            ※ 求人数・会員数は時期により変動が大きく、媒体経由の二次集計値です。最新値は公式サイトでご確認ください。
          </p>
        </section>

        {/* スキルチェックとランク制度 */}
        <section id="mechanism" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルチェックとランク制度の仕組み</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            paiza転職を理解する鍵は、「スキルチェック」と呼ばれるコーディングテストにあります。
            アルゴリズム・データ構造を中心としたプログラミング問題を制限時間内に解き、その正確性と速度に応じてスキルランクが付与されます。
            ランクはS／A／B／C／D／Eの6段階で、上位ほど技術力の高さを示す指標になります。複数のプログラミング言語に対応しており、自分の得意言語で挑戦できます。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-5">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="px-4 py-2 text-left font-medium w-16">ランク</th>
                  <th className="px-4 py-2 text-left font-medium w-28">水準の目安</th>
                  <th className="px-4 py-2 text-left font-medium">特徴</th>
                </tr>
              </thead>
              <tbody>
                {ranks.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 font-bold text-petrol-deep border-t border-slate-200">{r.rank}</td>
                    <td className="px-4 py-3 text-slate-600 border-t border-slate-200">{r.level}</td>
                    <td className="px-4 py-3 text-slate-600 border-t border-slate-200">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mb-5">
            ※ 各ランクの呼称はpaizaの公開仕様に基づく一般的な整理です。書類選考免除に必要なランクや対象求人は企業ごとに異なります。
          </p>
          <h3 className="font-bold text-slate-800 mb-2">書類選考免除という仕組みの意味</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            通常の転職活動では、まず職務経歴書で書類選考を通過しなければ面接にたどり着けません。
            ここで「経歴が地味」「自社開発の経験が浅い」といった理由で落とされてしまうエンジニアは少なくありません。
            paiza転職では、一定以上のスキルランクを持っていると書類選考をスキップして面接に進める「書類選考免除」の対象求人があり、
            技術力という最も本質的な部分を先に企業へ提示できます。これは「コードは書けるが書類アピールが苦手」という人にとって大きな意味を持つ仕組みです。
          </p>
          <p className="text-slate-700 leading-relaxed">
            また、スキルチェックの結果は応募ごとに作り直す必要がなく、一度取得したランクを複数企業へのアピールに使い回せます。
            技術力の証明を「資産」として持ち運べる点が、paiza転職のスカウト型サービスとしての効率の良さにつながっています。
          </p>
        </section>

        {/* 特徴・強み */}
        <section id="strength" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">paiza転職の特徴・強み</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. コーディングテストで実力を客観的に証明できる</h3>
              <p className="text-sm text-blue-900 leading-relaxed">
                スキルチェックのランクは、自己申告ではなく実際にコードを書いた結果に基づく客観指標です。
                面接でいちいち技術力を説明しなくても、ランクが「この人は実装力がある」という前提を作ってくれます。
                これにより面接が技術力の証明ではなく、カルチャーフィットや志向のすり合わせに集中しやすくなります。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. スキルランクで書類選考免除に進める</h3>
              <p className="text-sm text-blue-900 leading-relaxed">
                一定ランク以上で書類選考免除の対象になる求人があり、書類で落とされがちなケースでも技術力で突破口を開けます。
                学歴・前職の知名度・職歴の空白などに左右されにくい、実力本位の選考導線を持っているのが特徴です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. Web系・自社開発・スタートアップに強い</h3>
              <p className="text-sm text-blue-900 leading-relaxed">
                掲載企業1,600社以上（2026年4月更新の二次情報）の中心はWeb系・自社開発・スタートアップで、プログラミング職と相性の良い求人が揃います。
                技術で評価する文化のある企業が多く、コードで勝負したいエンジニアの志向と噛み合いやすい領域です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 完全無料で、テスト結果を使い回せる効率の良さ</h3>
              <p className="text-sm text-blue-900 leading-relaxed">
                求職者は完全無料で、一度取得したスキルランクは複数企業へのアピールに繰り返し使えます。
                応募のたびに技術力を説明し直す手間が省け、自走型のエンジニアにとって効率の良い活動ができます。
              </p>
            </div>
          </div>
        </section>

        {/* 良い評判 */}
        <section id="good" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">良い評判の傾向</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Qiita Job Change（jobs.qiita）やasiro等の口コミプラットフォームで見られる、paiza転職の良い評判の傾向を要約します（個別の口コミ原文ではなく傾向のまとめです）。
          </p>
          <div className="space-y-4">
            {goodReviews.map((r, i) => (
              <div key={i} className="border border-green-200 rounded-lg p-5">
                <h3 className="font-bold text-green-700 mb-2 flex items-start gap-2">
                  <span className="shrink-0">+</span>
                  {r.head}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 悪い評判と対処法 */}
        <section id="bad" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">悪い評判の傾向と対処法</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            公平性のため、freeconsul等の口コミプラットフォームで見られる悪い評判の傾向と、その具体的な対処法も整理します。
          </p>
          <div className="space-y-5">
            {badReviews.map((r, i) => (
              <div key={i} className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="border-l-4 border-red-300 p-5">
                  <h3 className="font-bold text-red-700 mb-2 flex items-start gap-2">
                    <span className="shrink-0">-</span>
                    {r.head}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">{r.body}</p>
                  <div className="bg-slate-50 rounded-lg p-3">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <span className="font-bold text-slate-800">対処法：</span>
                      {r.cope}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 30代・40代戦略 */}
        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            30代・40代エンジニアの使い方戦略
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            ミドルエンジニア転職ラボの視点で、30代・40代がpaiza転職をどう位置づけるべきかを整理します。
            paiza転職は技術力をランクで可視化するため、年齢よりスキルで評価されたいミドル層と相性が良い一方、求人の中心はWeb系の実装職であり使いどころを意識する必要があります。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">30代エンジニア：ランクで「年齢の壁」を回避する</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                30代は実務経験とスキルが噛み合いやすい年代です。datasheetの傾向として、高ランク保持者は年齢を問わずスカウトが届きやすいという声があり、
                スキルチェックで高ランクを取れれば「30代だから」と書類で外される展開を回避しやすくなります。
                現年収の相場感は<Link href="/knowledge/salary-30s/" className="text-petrol hover:underline">30代エンジニアの年収相場</Link>も参考に、ランクを武器に強気の応募が可能です。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">40代エンジニア：技術職で続けるなら有効、管理職志向なら併用必須</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                40代で技術職を続けたい人にとって、ランクで実力を示せるpaiza転職は数少ない実力本位の導線です。
                ただしPM・マネジメント・ハイクラス求人の母数は大手エージェントに比べ限られるため、管理職志向の場合は他サービスとの併用が前提になります。
                40代の現実的な選択肢は<Link href="/knowledge/40s-reality/" className="text-petrol hover:underline">40代エンジニア転職のリアル</Link>もあわせてご確認ください。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">市場全体の追い風を活かす</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                経済産業省「IT人材需給に関する調査」（2019年3月公表の試算）では、2030年に最大約79万人のIT人材不足が見込まれています。
                実装力のあるミドルエンジニアにとって追い風の市場であり、ランクで実力を可視化できるpaiza転職はこの流れに乗りやすいサービスです。
                自分の立ち位置の把握には<Link href="/knowledge/market-value/" className="text-petrol hover:underline">エンジニアの市場価値の測り方</Link>が役立ちます。
              </p>
            </div>
          </div>
        </section>

        {/* チェックリスト */}
        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人／向いていない人</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-3">向いている人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  "コーディングテストで実力を示すのが得意・好き",
                  "学歴や前職の知名度に頼らず技術で勝負したい",
                  "Web系・自社開発・スタートアップを志望している",
                  "書類選考で落とされがちで、面接で力を発揮できる",
                  "自走で転職活動を進められる（手厚いサポート不要）",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-600 shrink-0">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-700 mb-3">向いていない人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  "専任エージェントの手厚い個別サポートを求める",
                  "PM・マネジメント・ハイクラス求人を中心に探したい",
                  "求人数の多さ・選択肢の広さを最優先する",
                  "地方・全国の幅広い求人を網羅的に見たい",
                  "コーディングテストに苦手意識が強い",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-500 shrink-0">×</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 5ステップ */}
        <section id="flow" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">登録から内定までの5ステップ</h2>
          <ol className="space-y-4">
            {[
              ["無料会員登録・プロフィール入力", "メールアドレス等で無料登録し、経歴・希望条件・スキルを登録します。希望年収や勤務地は後のスカウト精度に影響するため丁寧に入力します。"],
              ["スキルチェック（コーディングテスト）に挑戦", "得意な言語でスキルチェックを受験し、ランクを取得します。納得のいくランクが出るまで繰り返し挑戦できます。"],
              ["スカウト受信・求人への応募", "ランクや経歴をもとに企業からスカウトが届きます。気になる求人には自分から応募も可能。書類選考免除の対象求人を中心に動くと効率的です。"],
              ["面接", "書類選考免除の場合は面接からスタート。ランクで技術力の前提ができているため、志向やカルチャーのすり合わせに集中できます。"],
              ["内定・年収交渉・入社", "内定後は条件を確認し、必要に応じて年収交渉を行います。交渉サポートが必要な場合はエージェント型サービスの併用が有効です。"],
            ].map(([head, body], i) => (
              <li key={i} className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-petrol text-white font-bold flex items-center justify-center text-sm">
                  {i + 1}
                </span>
                <div>
                  <p className="font-bold text-slate-800 mb-1">{head}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-sm text-slate-600 mt-4">
            面接対策は<Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接の準備</Link>、
            年収交渉は<Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉の進め方</Link>もあわせてご覧ください。
          </p>
        </section>

        {/* 比較・併用 */}
        <section id="compare" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">他サービスとの比較・併用</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            paiza転職はスカウト型・自走前提のため、エージェント型サービスとの併用で弱点を補えます。タイプ別の比較は以下が参考になります。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {[
              { name: "スカウト型・直接応募で速さ重視の比較", href: "/compare/speed/" },
              { name: "30代におすすめのエージェント比較", href: "/compare/30s-agents/" },
              { name: "40代におすすめのエージェント比較", href: "/compare/40s-agents/" },
              { name: "レバテック vs Geekly（IT特化比較）", href: "/compare/levtech-vs-geekly/" },
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
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="font-bold text-amber-900 mb-2">おすすめの併用パターン</p>
            <p className="text-sm text-amber-900 leading-relaxed">
              <span className="font-medium">paiza転職（技術力で勝負・書類選考免除）</span> +{" "}
              <Link href="/review/levtech/" className="text-petrol-deep underline">レバテックキャリア</Link>
              （添削・年収交渉などのエージェントサポート）の組み合わせが鉄板です。
              スカウト型と仲介型を併用することで、技術アピールと交渉サポートの両面をカバーできます。複数併用のコツは
              <Link href="/knowledge/multiple-agents/" className="text-petrol-deep underline">複数エージェントの併用術</Link>を参照してください。
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-12 text-center">
          <h2 className="text-xl font-bold mb-3">paiza転職に無料登録する</h2>
          <p className="text-blue-100 text-sm mb-4">
            スキルチェックであなたのランクを確認し、書類選考免除のスカウトを受け取ってみませんか？
          </p>
          <a
            href="#"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            無料登録してスキルチェックを受ける
          </a>
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

        {/* 評判・口コミの参照元 */}
        <section id="sources" className="mb-12 scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-3">評判・口コミの参照元</h2>
          <p className="text-sm text-slate-600 mb-3 leading-relaxed">
            本記事の評判・口コミは、以下の公式情報および口コミ・評判メディアで公開されている内容の傾向を参照し、当サイトが要約したものです（原文・スコアの転載ではありません）。各リンクは外部サイトへ移動します。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a href="https://paiza.jp/career" rel="nofollow noopener" target="_blank" className="text-petrol hover:underline">
                  paiza転職 公式（スキルチェック・書類選考免除の仕組み）
                </a>
              </li>
              <li>
                <a href="https://jobs.qiita.com/paiza/" rel="nofollow noopener" target="_blank" className="text-petrol hover:underline">
                  Qiita Job Change：paiza転職の評判・口コミ
                </a>
              </li>
              <li>
                <a href="https://asiro.co.jp/media-career/58765/" rel="nofollow noopener" target="_blank" className="text-petrol hover:underline">
                  キャリアアップステージ（asiro）：paiza転職の評判・口コミ
                </a>
              </li>
              <li>
                <a href="https://freeconsul.co.jp/" rel="nofollow noopener" target="_blank" className="text-petrol hover:underline">
                  フリーコンサル（口コミメディア・トップ）
                </a>
              </li>
            </ul>
            <p className="text-xs text-slate-400 mt-3">
              ※リンク先の内容・URLは変更される場合があります。参照確認日：2026年7月17日。
            </p>
          </div>
        </section>

        {/* 関連記事 */}
        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedPosts.map((item, i) => (
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
