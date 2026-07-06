import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "レバテックダイレクトの評判・口コミは？特徴・料金・対応【2026年】";
const DESCRIPTION =
  "レバテックダイレクト（レバレジーズ）の評判・特徴を30代40代ミドルエンジニア目線で検証。スカウト型の仕組み、エージェント型のレバテックキャリアとの違い、料金、向く人・向かない人、利用の流れ、FAQを出典付きで解説します。";
const URL = "/review/levtech-direct/";
const OFFICIAL_URL = "https://levtech-direct.jp/";

export const metadata: Metadata = {
  alternates: { canonical: "/review/levtech-direct/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "結論サマリ（どんな人向けか）" },
  { id: "basic", label: "基本データ表（2026年6月時点）" },
  { id: "diff", label: "レバテックキャリア（エージェント型）との違い" },
  { id: "strength", label: "特徴・強み" },
  { id: "good", label: "良い評判の傾向" },
  { id: "bad", label: "気になる評判の傾向と対処法" },
  { id: "middle", label: "30代・40代エンジニアの活用視点" },
  { id: "fit", label: "向いている人／向いていない人" },
  { id: "flow", label: "利用の流れ" },
  { id: "faq", label: "よくある質問" },
];

const basicData: [string, string][] = [
  ["サービス名", "レバテックダイレクト"],
  ["運営会社", "レバテック株式会社（レバレジーズグループ）"],
  ["サービス種別", "IT/Web特化のスカウト型転職サービス（登録して待つタイプ）"],
  ["得意領域", "IT/Webエンジニア・Webデザイナー等のIT専門職"],
  ["対象者", "実務経験のあるエンジニア向け（実務1〜2年以上が目安・二次情報）"],
  ["対応エリア", "要確認（レバテック系は首都圏中心の傾向。リモート求人あり）"],
  ["仕組み", "登録後、企業から直接スカウトが届く。マイページで企業と直接やり取り（二次情報）"],
  ["サポート", "スカウト受信・直接応募。エージェント型の書類添削等は限定的（二次情報）"],
  ["料金", "求職者は無料（費用は採用企業側が負担）"],
];

const goodReviews = [
  {
    title: "自分から応募しなくても活動が進む",
    body: "各転職メディアでは、登録後に企業から直接スカウトが届くため、自分で大量に応募しなくても効率的に活動を進められるという傾向の声が見られる。在職中でも進めやすい。",
  },
  {
    title: "選考がスピーディーに進みやすい",
    body: "スカウト型ゆえに、企業側の関心が前提でやり取りが始まるため、選考がスピーディーに進みやすいという傾向の声が各転職メディアで紹介されている。面接確約型のスカウトに言及する二次情報もある（条件・割合は時期により変動）。",
  },
  {
    title: "IT/Web特化で幅広い企業のスカウトが届く",
    body: "レバテックブランドのIT/Web特化の企業ネットワークを背景に、幅広い企業からのスカウトが届くという傾向の声が見られる。",
  },
];

const badReviews = [
  {
    title: "希望に合わないスカウトも届く",
    body: "各転職メディアでは、希望条件に合わないスカウトや、SES企業からのスカウトが目立つことがあるという傾向の声が見られる。スカウト型に共通する留意点。",
    cope: "プロフィールに希望条件・NG条件を具体的に書き込むとミスマッチが減る。気になるスカウトのみ返信し、合わないものはスルーすればよい。",
  },
  {
    title: "エージェント型ほどの伴走サポートはない",
    body: "スカウト型のため、応募書類の添削や面接対策といった手厚い伴走サポートは限定的という指摘が各転職メディアで見られる。",
    cope: "手厚いサポートが欲しい場合は、エージェント型のレバテックキャリアを併用する。スカウトで市場の反応を見つつ、選考対策はエージェントで補うと効率的。",
  },
  {
    title: "実務経験が前提になりやすい",
    body: "実務経験のあるエンジニア向けの設計のため、未経験・経験が浅い段階ではスカウトが届きにくい傾向がある（二次情報）。",
    cope: "経験が浅い場合は、伴走型で未経験歓迎求人も扱うサービスを併用する。経験を積んでからスカウト型を本格活用する選択肢もある。",
  },
];

const fitYes = [
  "IT/Webの実務経験があり、市場の反応を見たい",
  "自分から大量に応募せず、待ちながら進めたい",
  "在職中で効率よく活動したい",
  "企業と直接やり取りして自分のペースで選考を進めたい",
];

const fitNo = [
  "書類添削・面接対策など手厚い伴走を最優先したい",
  "IT実務未経験・経験が浅い",
  "対面の地方サポートを最優先したい（対応エリア要確認）",
  "ヘッドハンター経由の高年収スカウトだけを狙いたい（その場合はビズリーチ等）",
];

const flow = [
  {
    step: "STEP1",
    title: "無料登録・プロフィール作成",
    body: "公式サイトから登録し、経歴・スキル・希望条件を入力。プロフィールを充実させるほど質の高いスカウトが届きやすい。",
  },
  {
    step: "STEP2",
    title: "スカウト受信",
    body: "登録後、関心を持った企業から直接スカウトが届く。気になるスカウトを選んでやり取りを開始する。",
  },
  {
    step: "STEP3",
    title: "企業と直接やり取り・面接",
    body: "マイページ上で企業と直接やり取りし、面接・面談に進む。スカウト経由のためスピーディーに進みやすい。自分から直接応募することも可能。",
  },
  {
    step: "STEP4",
    title: "内定・入社",
    body: "選考を経て内定。条件確認・入社日調整を行って完了。手厚い交渉サポートが欲しい場合はエージェント型の併用が有効。",
  },
];

const faqs = [
  {
    q: "レバテックダイレクトの料金はかかりますか？",
    a: "求職者は無料です。スカウトの受信・企業とのやり取り・選考まで費用はかかりません。費用は採用企業側が負担する仕組みです。",
  },
  {
    q: "レバテックキャリアとレバテックダイレクトの違いは何ですか？",
    a: "レバテックキャリアはアドバイザーが求人提案・書類添削・面接対策・年収交渉まで伴走する「エージェント型」、レバテックダイレクトは登録後に企業から直接スカウトが届きエージェントを介さずに進める「スカウト型」です。手厚いサポートを求めるならキャリア、自分のペースで待ちながら進めたいならダイレクトが向きます。",
  },
  {
    q: "未経験でも利用できますか？",
    a: "実務経験のあるエンジニア向けのサービスで、未経験・経験が浅い段階ではスカウトが届きにくい傾向があります（二次情報）。経験が浅い場合は伴走型のサービスを併用するのが現実的です。",
  },
  {
    q: "希望に合わないスカウトが多いと聞きますが？",
    a: "スカウト型に共通する留意点で、希望に合わないスカウトやSES企業からのスカウトが目立つことがあるという声があります。プロフィールに希望条件・NG条件を具体的に書くとミスマッチが減ります。合わないスカウトはスルーして問題ありません。",
  },
  {
    q: "対応エリアはどこですか？地方でも使えますか？",
    a: "レバテック系は首都圏中心の傾向があります（リモート求人あり）。具体的な対応エリアは時期により変わるため、地方在住の方は公式サイトでリモート求人を含めて確認することをおすすめします。",
  },
  {
    q: "他社と併用してもいいですか？",
    a: "併用は可能です。スカウト型のレバテックダイレクトで市場の反応を見つつ、エージェント型のレバテックキャリアで選考対策・年収交渉を補う使い分けが効率的です。高年収のヘッドハンター型を狙うならビズリーチの併用も有効です。",
  },
];

const related = [
  { name: "レバテックキャリアの評判（エージェント型・相互補完）", href: "/review/levtech/" },
  { name: "レバテックフリーランスの評判（独立向け）", href: "/review/levtech-freelance/" },
  { name: "ビズリーチの評判（ハイクラススカウト）", href: "/review/bizreach-it/" },
  { name: "Findyの評判（スキル可視化スカウト）", href: "/review/findy/" },
  { name: "転職サービス評判一覧（ハブ）", href: "/review/" },
  { name: "30代・40代の年収相場データ", href: "/salary/age-salary/" },
];

export default function LevtechDirectReview() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url={URL} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "評判・口コミ一覧", href: "/review/" },
          { name: "レバテックダイレクト" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          レバテックダイレクトの評判・口コミは？特徴・料金・対応【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ IT/Web特化スカウト型サービスの実力を公式情報と二次情報で検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          レバテックダイレクトは、レバレジーズグループが運営するIT/Web特化のスカウト型転職サービスです。同じレバテックブランドでもエージェント型の
          <Link href="/review/levtech/" className="text-blue-600 hover:underline">レバテックキャリア</Link>
          とは別商品で、登録後に企業から直接スカウトが届く「待ち」のタイプです。本記事では公式情報と各転職メディアの傾向をもとに、30代・40代ミドルエンジニアの視点で違い・特徴・向き不向きを整理します。架空の体験談や星評価は掲載せず、出典のある情報のみを扱います。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテックダイレクト公式サイト",
            "Qiita Job Change",
            "OUTSIDEMAGAZINE",
            "複数転職メディアの紹介記事",
          ]}
        />

        {/* 結論サマリ */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：こんな人におすすめ</h2>
            <p className="text-sm text-blue-900 mb-3">
              <span className="font-bold">総合評価：実務経験のあるエンジニアが、待ちながら効率的に活動したい場合に向くスカウト型</span>。一言でいえば「IT/Webの経験者が、自分から大量応募せずに企業からのスカウトで選考を進めたい」場合のサービスです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・IT/Web特化のスカウト型。登録後、企業から直接スカウトが届く。</li>
              <li>・求職者は無料。在職中でも効率的に活動しやすい。</li>
              <li>・伴走サポートは限定的。手厚さが欲しいならエージェント型のレバテックキャリアと併用が前提。</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav aria-label="目次" className="mb-10 border border-slate-200 rounded-xl p-5 bg-white">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-petrol-deep">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 基本データ */}
        <section id="basic" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ表（2026年6月時点）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {basicData.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">
                      {label}
                    </th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            ※サービス種別・運営会社は公式に基づきます。対象者の目安や対応エリア、スカウトの仕組みの詳細は二次情報・時期により変動するため「要確認」としています。最新情報は公式サイトをご確認ください。
          </p>
        </section>

        {/* 違い */}
        <section id="diff" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            レバテックキャリア（エージェント型）との違い
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            同じレバテックブランドでも、レバテックダイレクトとレバテックキャリアはサービスの「型」が異なります。自分に合う型を選ぶことが第一歩です。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <tbody>
                {([
                  ["型", "スカウト型（登録して待つ）", "エージェント型（担当が伴走）"],
                  ["進め方", "企業から直接スカウト→直接やり取り", "アドバイザーが求人提案・調整"],
                  ["サポート", "限定的（自分主導）", "書類添削・面接対策・年収交渉まで"],
                  ["向く人", "経験者・自分のペースで進めたい", "手厚いサポートが欲しい"],
                ] as [string, string, string][]).map(([label, a, b], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-3 py-3 text-left font-medium text-slate-700 w-1/5 border-b border-slate-200 align-top">
                      {label}
                    </th>
                    <td className="px-3 py-3 text-slate-600 border-b border-slate-200 align-top">
                      <span className="font-medium text-slate-700">ダイレクト：</span>
                      {a}
                    </td>
                    <td className="px-3 py-3 text-slate-600 border-b border-slate-200 align-top">
                      <span className="font-medium text-slate-700">キャリア：</span>
                      {b}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            両者は併用も可能です。詳しくは
            <Link href="/review/levtech/" className="text-blue-600 hover:underline">レバテックキャリアの評判</Link>
            もあわせてご確認ください。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">レバテックダイレクトの特徴・強み</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 登録して待つスカウト型</h3>
              <p className="text-sm text-petrol-deep">
                登録後、関心を持った企業から直接スカウトが届きます。自分から大量に応募しなくても活動が進むため、在職中の経験者でも効率的に動けるのが特徴です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 企業と直接やり取りでスピーディー</h3>
              <p className="text-sm text-petrol-deep">
                企業側の関心が前提でやり取りが始まるため、選考がスピーディーに進みやすい傾向があります。マイページ上で企業と直接コミュニケーションを取れます。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. レバテックのIT/Web特化ネットワーク</h3>
              <p className="text-sm text-petrol-deep">
                レバテックブランドのIT/Web特化の企業ネットワークを背景に、幅広い企業からのスカウトが届きやすい点が強みです。エージェント型のレバテックキャリアやフリーランス向けのレバテックフリーランスと使い分けられます。
              </p>
            </div>
          </div>
        </section>

        {/* 良い評判 */}
        <section id="good" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">良い評判の傾向（出典付き）</h2>
          <p className="text-sm text-slate-600 mb-4">
            以下は公式情報および口コミプラットフォーム・各転職メディアの傾向をまとめたものです（原文転載ではありません）。
          </p>
          <div className="space-y-4">
            {goodReviews.map((r, i) => (
              <div key={i} className="border border-green-200 rounded-lg p-5">
                <h3 className="font-bold text-green-700 mb-2 text-sm">◎ {r.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 気になる評判 */}
        <section id="bad" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">気になる評判の傾向と対処法</h2>
          <p className="text-sm text-slate-600 mb-4">
            公平性のため、留意点と現実的な対処法もまとめます。
          </p>
          <div className="space-y-4">
            {badReviews.map((r, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-red-600 mb-2 text-sm">△ {r.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">{r.body}</p>
                <div className="bg-amber-50 border border-amber-200 rounded p-3">
                  <p className="text-xs text-amber-800 leading-relaxed">
                    <span className="font-bold">対処法：</span>
                    {r.cope}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ミドル視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            30代・40代エンジニアが使う場合の視点
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              当サイトはミドルエンジニアの転職を扱う立場から、使い方を整理します。レバテックダイレクトはスカウト型のため、まずは登録して市場の反応（どんな企業から、どんな条件のスカウトが届くか）を確認する「市場価値チェック」の入口として使いやすいサービスです。
            </p>
            <p>
              <span className="font-bold text-slate-700">30代の場合：</span>
              実務経験を武器にスカウトを受けやすい年代です。ダイレクトで反応を見つつ、選考対策や年収交渉はエージェント型のレバテックキャリアで補う併用が効率的です。
            </p>
            <p>
              <span className="font-bold text-slate-700">40代の場合：</span>
              スカウト型は届く量が経歴に左右されやすいため、ダイレクト単独に頼りすぎず、ハイクラス特化のビズリーチや両面型のJACリクルートメントを併用して求人の幅と交渉力を確保するのが堅実です。マネジメント・アーキテクト経験はプロフィールで明確に打ち出しましょう。
            </p>
          </div>
        </section>

        {/* 向き不向き */}
        <section id="fit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            向いている人／向いていない人チェックリスト
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-3 text-sm">向いている人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {fitYes.map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-600 shrink-0">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-700 mb-3 text-sm">向いていない人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {fitNo.map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-500 shrink-0">×</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 流れ */}
        <section id="flow" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">利用の流れ</h2>
          <div className="space-y-3">
            {flow.map((f, i) => (
              <div key={i} className="flex gap-4 border border-slate-200 rounded-lg p-4">
                <div className="shrink-0 text-petrol-deep font-bold text-sm w-16">{f.step}</div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1">{f.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
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

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">レバテックダイレクトに無料登録する</h2>
          <p className="text-blue-100 text-sm mb-4">
            まずは登録して、どんな企業からスカウトが届くか市場の反応を確認してみませんか？
          </p>
          <a
            href={OFFICIAL_URL}
            rel="nofollow noopener"
            target="_blank"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            公式サイトで無料登録する
          </a>
        </section>

        {/* 関連記事 */}
        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((item, i) => (
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
