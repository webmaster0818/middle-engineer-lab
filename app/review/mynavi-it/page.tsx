import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "マイナビIT AGENTの評判・口コミ｜30代40代エンジニア徹底レビュー",
  description:
    "マイナビIT AGENTの評判を30代・40代エンジニア目線で徹底解説。手厚いサポート、IT業界に詳しい担当者という強みと、ハイクラス・地方求人が手薄なデメリットを口コミ傾向と実データで検証します。",
};

const PAGE_TITLE = "マイナビIT AGENTの評判・口コミ｜30代40代エンジニア徹底レビュー";
const PAGE_DESC =
  "マイナビIT AGENTの評判を30代・40代エンジニア目線で徹底解説。手厚いサポート、IT業界に詳しい担当者という強みと、ハイクラス・地方求人が手薄なデメリットを口コミ傾向と実データで検証します。";

const toc = [
  { id: "summary", label: "結論：マイナビIT AGENTはこんな人向け" },
  { id: "basic", label: "基本データ表（2026年6月時点）" },
  { id: "strengths", label: "特徴・強み" },
  { id: "good", label: "良い評判の傾向" },
  { id: "bad", label: "悪い評判の傾向" },
  { id: "countermeasure", label: "デメリットへの対処法" },
  { id: "midcareer", label: "30代・40代エンジニアの活用戦略" },
  { id: "checklist", label: "向いている人／向いていない人" },
  { id: "flow", label: "登録から内定までの5ステップ" },
  { id: "compare", label: "他社との比較・使い分け" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basicData: [string, string][] = [
  ["運営会社", "株式会社マイナビ"],
  ["公開求人数", "総数の公式値は非公表（断定不可）"],
  ["対応エリア", "全国（首都圏・関西・名古屋・福岡が中心）"],
  ["得意領域", "20〜30代若手層／書類添削・面接対策の手厚さ"],
  ["実績（二次情報）", "転職後定着率97.5%・年収アップ率73.7%（転職メディア集計値）"],
  ["サポート体制", "IT専門のキャリアアドバイザーによる個別支援"],
  ["料金", "求職者は完全無料"],
];

const goodPoints = [
  "サポートが手厚く、初めての転職でも安心して進められたという声",
  "担当者がIT業界の事情に詳しく、職種理解のうえで提案してくれるという声",
  "書類添削・面接対策が丁寧で選考通過につながったという声",
];

const badPoints = [
  "連絡（電話・メール）の頻度が多いと感じる声",
  "経歴や希望によっては紹介求人数が少ない場合があるという声",
  "ハイクラス求人や地方求人が手薄で、選択肢が限られたという声",
];

const suitedFor = [
  "20代後半〜30代で、初めて／2回目の転職に不安があるエンジニア",
  "書類添削・面接対策など手厚い伴走サポートを受けたい人",
  "首都圏・関西・名古屋・福岡など主要都市圏で働きたい人",
  "客先常駐(SES)から自社開発・社内SEなど安定環境へ移りたい若手層",
];

const notSuitedFor = [
  "年収800万円超のハイクラス・管理職ポジションを軸に探したい人",
  "主要都市圏以外の地方求人を中心に探したい人",
  "連絡頻度を最小限にして自分のペースで進めたい人",
  "とにかく求人母数を最大化したい人（総合型大手の方が有利な場合）",
];

const steps = [
  {
    title: "1. 無料登録（所要5〜10分）",
    body: "公式サイトから氏名・経歴・希望条件を入力して登録します。職務経歴の入力が詳しいほど、初回面談での提案精度が上がります。",
  },
  {
    title: "2. キャリアアドバイザーとの初回面談",
    body: "オンラインまたは電話で、これまでの経験・転職理由・希望（年収/働き方/技術領域）をすり合わせます。譲れない条件を最初に明確化しておくとミスマッチを減らせます。",
  },
  {
    title: "3. 求人紹介・応募書類の作成",
    body: "条件に合う求人の紹介を受け、職務経歴書を添削してもらいながら応募準備を進めます。マイナビは書類添削の丁寧さが評価される傾向があります。",
  },
  {
    title: "4. 面接対策・選考",
    body: "企業ごとの傾向を踏まえた面接対策を受けて選考に進みます。技術面接・人物面接の両面で準備できるよう相談しておきましょう。",
  },
  {
    title: "5. 内定・条件交渉・入社",
    body: "内定後は年収や入社日などの条件交渉をアドバイザー経由で進められます。入社後の定着率の高さもマイナビの特徴とされています。",
  },
];

const compareLinks = [
  { name: "30代におすすめのエージェント比較", href: "/compare/30s-agents/" },
  { name: "40代向けエージェント比較", href: "/compare/40s-agents/" },
  { name: "doda(IT) と マイナビIT の比較", href: "/compare/doda-vs-mynavi/" },
  { name: "ワークポート と マイナビIT の比較", href: "/compare/workport-vs-mynavi/" },
  { name: "レバテック と マイナビIT の比較", href: "/compare/levtech-vs-mynavi/" },
];

const relatedLinks = [
  { name: "レバテックキャリアの評判レビュー", href: "/review/levtech/" },
  { name: "ワークポートの評判レビュー", href: "/review/workport/" },
  { name: "doda(IT特化)の評判レビュー", href: "/review/doda-it/" },
  { name: "エージェントは複数併用すべきか", href: "/knowledge/multiple-agents/" },
  { name: "エージェント初回面談の準備", href: "/knowledge/agent-first-meeting/" },
  { name: "30代エンジニアの年収相場", href: "/knowledge/salary-30s/" },
];

const faqs = [
  {
    q: "マイナビIT AGENTの登録・利用は無料ですか？",
    a: "はい、求職者は完全無料です。求人紹介、書類添削、面接対策、条件交渉まですべて無料で利用できます。費用は採用企業側が負担する仕組みです。",
  },
  {
    q: "マイナビIT AGENTとマイナビ転職の違いは何ですか？",
    a: "マイナビ転職は自分で求人を検索して応募する転職サイト、マイナビIT AGENTはIT専門のキャリアアドバイザーが個別に伴走する転職エージェントです。書類添削や面接対策などの個別支援を受けたい場合はIT AGENTが向いています。",
  },
  {
    q: "40代でも利用できますか？",
    a: "登録自体は可能ですが、マイナビIT AGENTは20〜30代の若手層に強みがあるとされ、口コミでもハイクラス・地方求人が手薄という声が見られます。40代の方はリクルートエージェントIT（求人数）やビズリーチ（ハイクラス）など他社との併用を検討すると選択肢が広がります。",
  },
  {
    q: "連絡がしつこいと聞きましたが本当ですか？",
    a: "口コミプラットフォームでは「連絡の頻度が多い」という声が見られます。希望する連絡手段（メール中心など）と頻度を初回面談で明確に伝えておくと、ストレスを減らせます。",
  },
  {
    q: "紹介求人が少ないことはありますか？",
    a: "経歴や希望条件によっては紹介求人数が少ない場合があるという声があります。希望条件を一部緩める、または求人数の多い総合型エージェントを併用することで対処できます。",
  },
  {
    q: "対応エリアはどこですか？",
    a: "全国対応ですが、首都圏・関西・名古屋・福岡といった主要都市圏の求人が中心とされています。地方求人を重視する場合は全国対応の総合型エージェントの併用が安心です。",
  },
  {
    q: "退会・利用停止はできますか？",
    a: "担当アドバイザーへの連絡、または公式サイトの問い合わせ窓口から退会手続きが可能です。転職活動を一時休止したい場合は、その旨を伝えれば連絡頻度の調整にも応じてもらえます。",
  },
  {
    q: "面接対策はどの程度受けられますか？",
    a: "企業ごとの選考傾向を踏まえた面接準備や、書類添削を受けられます。マイナビIT AGENTは書類添削・面接対策の手厚さが評価される傾向があり、初めての転職でも準備を整えやすいのが特徴です。",
  },
];

export default function MynaviItReview() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/review/mynavi-it/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "レビュー", href: "/#ranking" }, { name: "マイナビIT AGENT" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          マイナビIT AGENTの評判・口コミ【30代・40代エンジニア向け徹底レビュー】
        </h1>
        <p className="text-slate-500 text-sm mb-2">最終更新: 2026年6月 | 手厚いサポートと若手層への強みを実データで検証</p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          マイナビIT AGENTは、株式会社マイナビが運営するIT・Webエンジニア専門の転職エージェントです。本記事では「手厚いサポート」という評判の実態と、30代・40代のミドルエンジニアが使う場合の向き不向きを、口コミの傾向と公開データから整理します。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={["マイナビ公式", "Qiita Job Change", "OUTSIDEMAGAZINE等の口コミメディア集計"]}
        />

        {/* 結論サマリ */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-xl font-bold text-blue-900 mb-3">結論：マイナビIT AGENTはこんな人向け</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              総合評価は <span className="font-bold">★★★★☆（4.0 / 5.0・当サイト編集部の総合判断）</span>。
              <span className="font-bold">「20代後半〜30代で、丁寧な伴走サポートを受けながら初めて／久しぶりの転職をしたいエンジニア」</span>に向いています。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・書類添削・面接対策の手厚さが強み。初めての転職でも準備を整えやすい</li>
              <li>・担当者がIT業界に詳しく、職種理解のうえで提案してくれる傾向</li>
              <li>・一方でハイクラス求人・地方求人は手薄。40代や年収800万円超狙いは他社併用が前提</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav aria-label="目次" className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-petrol-deep">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 基本データ表 */}
        <section id="basic" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ表（2026年6月時点）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {basicData.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            ※実績値（定着率・年収アップ率）は転職メディアの集計による二次情報です。公開求人総数の公式値は非公表のため、本記事では断定していません。
          </p>
        </section>

        {/* 強み */}
        <section id="strengths" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">マイナビIT AGENTの特徴・強み</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 書類添削・面接対策の手厚さ</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                マイナビIT AGENTは、職務経歴書の添削や企業ごとの面接対策など、選考通過に直結する伴走サポートが手厚いと評価される傾向があります。Qiita Job ChangeやOUTSIDEMAGAZINE等の口コミメディアでも「初めての転職でも安心だった」という声が見られ、転職活動の進め方そのものに不安がある層にとって心強い存在です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 担当者がIT業界に詳しい</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                IT専門のキャリアアドバイザーが担当につくため、使用技術や職種（社内SE・インフラ・Webなど）への理解を前提に話が進みやすいとされています。技術スタックの説明が通じやすいことは、エンジニアにとって面談のストレスを減らす重要なポイントです。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 20〜30代若手層への強み</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                マイナビは新卒・若手領域で長年の実績を持つブランドで、IT AGENTでも20〜30代の若手エンジニアの転職支援に強みがあるとされています。転職メディアの集計では転職後定着率97.5%・年収アップ率73.7%という二次情報もあり、ミスマッチの少ない提案が期待できます。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 大手ブランドの安心感</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                株式会社マイナビが運営する大手サービスである点も、初めての転職での安心材料です。サポート体制が標準化されており、はじめてエージェントを使う人でも進め方に迷いにくいのが利点です。
              </p>
            </div>
          </div>
        </section>

        {/* 良い評判 */}
        <section id="good" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">良い評判の傾向</h2>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            Qiita Job Change・OUTSIDEMAGAZINE等の口コミプラットフォームでは、次のような評価の声が見られます（個別の口コミ原文ではなく傾向の要約です）。
          </p>
          <ul className="space-y-2">
            {goodPoints.map((p, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-700 border border-green-200 rounded-lg px-4 py-3">
                <span className="text-green-600 shrink-0 font-bold">良</span>
                {p}
              </li>
            ))}
          </ul>
        </section>

        {/* 悪い評判 */}
        <section id="bad" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">悪い評判の傾向</h2>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            一方で、口コミメディアでは以下のような注意点も指摘されています。公平性のため、デメリットも具体的に整理します。
          </p>
          <ul className="space-y-2">
            {badPoints.map((p, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-700 border border-red-200 rounded-lg px-4 py-3">
                <span className="text-red-500 shrink-0 font-bold">注</span>
                {p}
              </li>
            ))}
          </ul>
        </section>

        {/* 対処法 */}
        <section id="countermeasure" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">デメリットへの対処法</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">連絡頻度が多い → 連絡ルールを最初に握る</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                初回面談で「連絡はメール中心」「電話は平日19時以降」など希望を明確に伝えましょう。連絡手段と頻度を最初に合意しておくことで、しつこさのストレスは大きく軽減できます。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">紹介求人が少ない → 総合型を併用する</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                求人数を最大化したい場合は、求人母数の大きい
                <Link href="/review/recruit-it/" className="text-petrol hover:underline">リクルートエージェントIT</Link>
                や<Link href="/review/doda-it/" className="text-petrol hover:underline">doda(IT特化)</Link>
                を併用すると、紹介の幅を補完できます。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ハイクラス・地方求人が手薄 → 用途で使い分ける</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                年収800万円超やマネジメント職を狙うなら
                <Link href="/review/bizreach-it/" className="text-petrol hover:underline">ビズリーチ</Link>
                を、地方求人なら全国対応の総合型エージェントを軸にし、マイナビは「丁寧なサポート枠」として併用するのが効率的です。
              </p>
            </div>
          </div>
        </section>

        {/* 30代40代戦略 */}
        <section id="midcareer" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの活用戦略（当サイト独自視点）</h2>
          <div className="prose-sm text-sm text-slate-600 leading-relaxed space-y-4">
            <p>
              当サイト「ミドルエンジニア転職ラボ」は30代・40代エンジニアの読者を想定しています。その視点でマイナビIT AGENTの位置づけを整理します。
            </p>
            <p>
              <span className="font-bold text-slate-800">30代前半は「主軸」として有力。</span>
              この層はマイナビの最も得意とするゾーンで、書類添削・面接対策の手厚さがそのまま選考通過率に効きます。客先常駐(SES)から自社開発・社内SEへ移りたいケースとも相性が良いでしょう。レバテックの公表値（2025年）では正社員SEの30代平均年収は約499万円とされ、現年収がこれを下回るなら年収アップの余地を相談する価値があります。
            </p>
            <p>
              <span className="font-bold text-slate-800">30代後半〜40代は「併用前提」が現実的。</span>
              口コミでもハイクラス・地方求人の手薄さが指摘されており、この層が単独で使うと選択肢が物足りなくなる可能性があります。同公表値では40代の正社員SE平均年収は約618万円、年収1,000万円以上の割合は40代で12.67%とされ、ハイクラス帯を狙うなら
              <Link href="/review/bizreach-it/" className="text-petrol hover:underline">ビズリーチ</Link>
              や求人数の多い
              <Link href="/review/recruit-it/" className="text-petrol hover:underline">リクルートエージェントIT</Link>
              を主軸に、マイナビは選考対策の補助として併用するのが堅実です。
            </p>
            <p>
              なお経済産業省が2019年に公表した試算では、2030年に最大約79万人のIT人材不足が見込まれており、ミドル層の経験者需要そのものは底堅いと考えられます。だからこそ「複数エージェントで求人の網を広げ、選考対策はマイナビで磨く」という分業が機能します。詳しくは
              <Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代エンジニアの年収相場</Link>
              も参考にしてください。
            </p>
          </div>
        </section>

        {/* チェックリスト */}
        <section id="checklist" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人／向いていない人チェックリスト</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-3">向いている人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {suitedFor.map((s, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-green-600 shrink-0">✓</span>{s}</li>
                ))}
              </ul>
            </div>
            <div className="border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-700 mb-3">向いていない人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {notSuitedFor.map((s, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-red-500 shrink-0">✕</span>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 5ステップ */}
        <section id="flow" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">登録から内定までの5ステップ</h2>
          <ol className="space-y-3">
            {steps.map((s, i) => (
              <li key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* 他社比較 */}
        <section id="compare" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">他社との比較・使い分け</h2>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            マイナビIT AGENTは「サポートの手厚さ」が強みですが、求人数やハイクラス領域では他社が優れる場面があります。目的別の比較記事も参考にしてください。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {compareLinks.map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
                {item.name} →
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">マイナビIT AGENTに無料相談する</h2>
          <p className="text-blue-100 text-sm mb-4">手厚いサポートを受けたいなら、まずは無料カウンセリングから。</p>
          <a href="#" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">無料カウンセリングを予約する</a>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10 scroll-mt-20">
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

        {/* 関連記事 */}
        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedLinks.map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
