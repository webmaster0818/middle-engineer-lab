import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "リクルートエージェントITの評判・口コミ｜30代40代エンジニア徹底レビュー",
  description:
    "リクルートエージェントITの評判を30代・40代エンジニア目線で徹底解説。IT公開求人11万件超という圧倒的な求人数と、対応が事務的・サポート期間が短いといったデメリットを口コミ傾向と実データで検証します。",
};

const PAGE_TITLE = "リクルートエージェントITの評判・口コミ｜30代40代エンジニア徹底レビュー";
const PAGE_DESC =
  "リクルートエージェントITの評判を30代・40代エンジニア目線で徹底解説。IT公開求人11万件超という圧倒的な求人数と、対応が事務的・サポート期間が短いといったデメリットを口コミ傾向と実データで検証します。";

const toc = [
  { id: "summary", label: "結論：リクルートエージェントITはこんな人向け" },
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
  ["運営会社", "株式会社リクルート"],
  ["IT公開求人数", "110,840件（2026年5月22日時点・転職メディア集計）"],
  ["IT非公開求人数", "101,680件（同・二次集計）"],
  ["対応エリア", "全国（47都道府県）"],
  ["得意領域", "国内最大級の求人数／大手〜スタートアップまで網羅"],
  ["年収アップ実績", "統一された公式アップ率は未確認（断定せず）"],
  ["サポート期間", "原則3か月程度（口コミによる）"],
  ["料金", "求職者は完全無料"],
];

const goodPoints = [
  "圧倒的な求人数で選択肢が広いという声",
  "非公開求人が充実しているという声",
  "書類添削・面接対策が丁寧で実用的だったという声",
];

const badPoints = [
  "対応が事務的に感じられる場合があるという声",
  "連絡頻度が高いと感じる声",
  "サポート期間が3か月程度と短く感じるという声",
];

const suitedFor = [
  "とにかく多くの求人を比較してから決めたいエンジニア",
  "非IT企業のDX・社内SEなど業種横断で探したい人",
  "地方在住で全国の求人にアクセスしたい人",
  "短期集中で効率的に転職活動を終えたい人",
];

const notSuitedFor = [
  "じっくり時間をかけて伴走サポートを受けたい人",
  "事務的な対応が苦手で、密な関係性を重視する人",
  "年収1,000万超のハイクラス専任支援を最優先したい人",
  "Web系スタートアップ特化の濃い情報だけが欲しい人",
];

const steps = [
  {
    title: "1. 無料登録（所要5〜10分）",
    body: "公式サイトから経歴・希望条件を登録します。求人数が膨大なため、希望条件を具体的に入力しておくと紹介の精度が上がります。",
  },
  {
    title: "2. キャリアアドバイザーとの面談",
    body: "電話・オンラインで経験や希望をすり合わせます。求人量が多いぶん、譲れない条件と優先順位を最初に明確化しておくのが重要です。",
  },
  {
    title: "3. 求人紹介・応募",
    body: "大量の求人から条件に合うものを紹介してもらい、職務経歴書を整えて応募します。AIによる求人提案など独自ツールも活用できます。",
  },
  {
    title: "4. 書類添削・面接対策・選考",
    body: "豊富な選考データを踏まえた書類添削・面接対策を受けられます。サポート期間が限られるため、対策は早めに依頼しましょう。",
  },
  {
    title: "5. 内定・条件交渉・入社",
    body: "内定後は年収・入社日などの条件交渉を代行してもらえます。大手企業からスタートアップまで幅広い選択肢の中で決定できます。",
  },
];

const compareLinks = [
  { name: "リクルートIT と doda の比較", href: "/compare/recruit-vs-doda/" },
  { name: "30代におすすめのエージェント比較", href: "/compare/30s-agents/" },
  { name: "40代向けエージェント比較", href: "/compare/40s-agents/" },
  { name: "求人数・スピード重視で選ぶなら", href: "/compare/speed/" },
  { name: "年収アップ実績ランキング", href: "/compare/salary-ranking/" },
];

const relatedLinks = [
  { name: "doda(IT特化)の評判レビュー", href: "/review/doda-it/" },
  { name: "マイナビIT AGENTの評判レビュー", href: "/review/mynavi-it/" },
  { name: "レバテックキャリアの評判レビュー", href: "/review/levtech/" },
  { name: "エージェントは複数併用すべきか", href: "/knowledge/multiple-agents/" },
  { name: "サポート期間内に転職を決めるコツ", href: "/knowledge/timeline/" },
  { name: "40代エンジニア転職のリアル", href: "/knowledge/40s-reality/" },
];

const faqs = [
  {
    q: "リクルートエージェントITの登録・利用は無料ですか？",
    a: "はい、求職者は完全無料です。求人紹介、書類添削、面接対策、年収交渉まですべて無料で利用できます。費用は採用企業側が負担します。",
  },
  {
    q: "IT求人数はどのくらいですか？",
    a: "転職メディアの集計によると、2026年5月22日時点でIT公開求人110,840件・IT非公開求人101,680件とされ、国内最大級の規模です。求人数は時期により変動するため、最新値は公式サイトでご確認ください。",
  },
  {
    q: "40代エンジニアでも利用できますか？",
    a: "はい。求人数が非常に多いため、40代でもPM・PL経験や特定業界の知見があれば紹介につながりやすい傾向があります。ハイクラス帯を厚く狙う場合はビズリーチとの併用も有効です。",
  },
  {
    q: "サポート期間が短いと聞きましたが本当ですか？",
    a: "口コミプラットフォームでは「サポート期間が3か月程度で短い」という声が見られます。期間内に集中して動けるよう、初回面談で活動スケジュールを共有し、書類添削・面接対策を早めに依頼するのがおすすめです。",
  },
  {
    q: "対応が事務的という評判は本当ですか？",
    a: "利用者数が多いぶん、対応が事務的に感じられる場合があるという声があります。担当との相性が合わない場合は、担当変更を申し出ることが可能です。",
  },
  {
    q: "連絡がしつこい・多いと感じたときは？",
    a: "連絡頻度が高いという声があります。希望する連絡手段（メール中心など）と頻度を初回に伝えておくと、過度な連絡を抑えられます。",
  },
  {
    q: "他のエージェントと併用できますか？",
    a: "可能です。求人数の多いリクルートエージェントITで母数を確保しつつ、IT特化のレバテックキャリアやハイクラスのビズリーチを併用すると、求人の網と専門性を両立できます。",
  },
  {
    q: "退会・利用停止はできますか？",
    a: "担当者への連絡、または公式サイトの退会フォームから手続きできます。活動を一時休止したい場合も、その旨を伝えれば連絡頻度の調整に応じてもらえます。",
  },
  {
    q: "地方在住でも利用できますか？",
    a: "全国47都道府県の求人を扱っており、地方在住でもオンライン面談で利用できます。リモートワーク求人も多数あります。",
  },
];

export default function RecruitItReview() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/review/recruit-it/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "レビュー", href: "/#ranking" },
          { name: "リクルートエージェントIT" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          リクルートエージェントITの評判・口コミ【30代・40代エンジニア向け徹底レビュー】
        </h1>
        <p className="text-slate-500 text-sm mb-2">最終更新: 2026年6月 | 国内最大級の求人数をエンジニア視点で実データ検証</p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          リクルートエージェントITは、株式会社リクルートが運営する総合型転職エージェントのIT領域支援です。本記事では「圧倒的な求人数」という評判の実態と、30代・40代のミドルエンジニアが使う場合の戦略を、口コミの傾向と公開データから整理します。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={["リクルート関連の公開情報", "Qiita Job Change等の口コミメディア集計（求人数は2026年5月22日時点の二次集計）"]}
        />

        {/* 結論サマリ */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-blue-900 mb-3">結論：リクルートエージェントITはこんな人向け</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              総合評価は <span className="font-bold">★★★★☆（4.2 / 5.0・当サイト編集部の総合判断）</span>。
              <span className="font-bold">「まず多くの求人を比較したい／業種横断で探したい、短期集中型のエンジニア」</span>に向いています。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・IT公開求人110,840件（2026年5月22日時点・二次集計）と国内最大級の母数が最大の武器</li>
              <li>・非IT企業のDX・社内SEなど、IT特化エージェントでは出会いにくい求人にもアクセスできる</li>
              <li>・一方で対応が事務的に感じる声や、サポート期間が約3か月と短いという声もある</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav aria-label="目次" className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-blue-700">
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
            ※求人数は2026年5月22日時点の転職メディア集計（二次情報）で、時期により変動します。年収アップ率の統一された公式値は未確認のため本記事では断定していません。
          </p>
        </section>

        {/* 強み */}
        <section id="strengths" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">リクルートエージェントITの特徴・強み</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 国内最大級の求人数</h3>
              <p className="text-sm text-blue-700 leading-relaxed">
                転職メディアの集計では、2026年5月22日時点でIT公開求人110,840件・IT非公開求人101,680件とされ、母数の大きさが最大の強みです。求人数が多いほど比較材料が増え、希望に合う一社に出会える確率も高まります。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 非公開求人が豊富</h3>
              <p className="text-sm text-blue-700 leading-relaxed">
                公開求人とほぼ同規模の非公開求人を保有しており、一般には出回らない好条件のポジションにアクセスできる可能性があります。口コミでも「非公開求人が充実している」という声が見られます。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 大手〜スタートアップまで業種横断で網羅</h3>
              <p className="text-sm text-blue-700 leading-relaxed">
                純粋なIT企業だけでなく、製造業・金融・商社などの社内SE・DX推進ポジションまで幅広くカバーします。IT特化エージェントでは見つからない非IT企業のIT求人にアクセスできるのは、総合型ならではの強みです。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 書類添削・面接対策が丁寧</h3>
              <p className="text-sm text-blue-700 leading-relaxed">
                長年蓄積された選考データを背景に、書類添削や面接対策が実用的だと評価される傾向があります。豊富な企業データを踏まえた対策を受けられる点は、選考通過率を高める助けになります。
              </p>
            </div>
          </div>
        </section>

        {/* 良い評判 */}
        <section id="good" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">良い評判の傾向</h2>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            Qiita Job Change等の口コミプラットフォームでは、次のような評価の声が見られます（個別の口コミ原文ではなく傾向の要約です）。
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
              <h3 className="font-bold text-slate-800 mb-2">対応が事務的 → 担当変更も選択肢に</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                対応が事務的に感じる場合は、遠慮なく担当変更を申し出ましょう。利用者数が多い大手だからこそ担当の幅も広く、相性の良いアドバイザーに当たる確率を上げられます。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">サポート期間が短い → 初動を早く設計する</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                サポート期間が約3か月とされるため、登録直後に活動スケジュールを共有し、書類添削・面接対策を早めに依頼するのが鍵です。
                <Link href="/knowledge/timeline/" className="text-blue-600 hover:underline">転職スケジュールの組み方</Link>
                も参考にしてください。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">求人が多すぎて選べない → IT特化を併用して絞る</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                母数が多すぎて選びにくい場合は、専門性の高い
                <Link href="/review/levtech/" className="text-blue-600 hover:underline">レバテックキャリア</Link>
                を併用し、技術領域に合った求人を厳選する視点を補うと判断しやすくなります。
              </p>
            </div>
          </div>
        </section>

        {/* 30代40代戦略 */}
        <section id="midcareer" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの活用戦略（当サイト独自視点）</h2>
          <div className="text-sm text-slate-600 leading-relaxed space-y-4">
            <p>
              当サイト「ミドルエンジニア転職ラボ」は30代・40代エンジニアの読者を想定しています。その視点でリクルートエージェントITの位置づけを整理します。
            </p>
            <p>
              <span className="font-bold text-slate-800">30代は「求人母数の起点」として最有力。</span>
              IT公開求人だけで11万件超という規模は、年収・働き方・技術領域の選択肢を一気に広げます。レバテックの公表値（2025年）では正社員SEの30代平均年収は約499万円とされ、現年収との差を踏まえて応募先の年収レンジを設計する起点に使えます。
            </p>
            <p>
              <span className="font-bold text-slate-800">40代は「業種横断の網」として有効。</span>
              IT特化エージェントは30代までが中心になりがちですが、総合型のリクルートは非IT企業の社内SE・DX推進ポジションまで広く扱うため、40代の経験者が応募先を見つけやすくなります。同公表値では40代の正社員SE平均年収は約618万円とされ、マネジメントや特定業界の知見を強みに条件交渉する価値があります。
            </p>
            <p>
              経済産業省が2019年に公表した試算では2030年に最大約79万人のIT人材不足が見込まれており、経験豊富なミドル層への需要は底堅いと考えられます。求人数の多いリクルートを主軸に、IT特化やハイクラス特化を併用して「網の広さ」と「専門性」を両立させるのが効率的です。
              <Link href="/knowledge/multiple-agents/" className="text-blue-600 hover:underline">複数エージェント併用のコツ</Link>
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
            リクルートエージェントITは「求人数」が圧倒的な強みですが、専門性の深さやハイクラス特化では他社が優れる場面もあります。目的別の比較記事も参考にしてください。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {compareLinks.map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                {item.name} →
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">リクルートエージェントITに無料相談する</h2>
          <p className="text-blue-100 text-sm mb-4">国内最大級の求人から、あなたに合うIT求人を探してみませんか？</p>
          <a href="#" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">無料カウンセリングを予約する</a>
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
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
