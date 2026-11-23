import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "ユニゾンキャリアの評判・口コミは？特徴・料金・対応【2026年】";
const DESCRIPTION =
  "ユニゾンキャリア（株式会社ユニゾン・テクノロジー）の評判・特徴を30代40代ミドルエンジニア目線で検証します。IT/Web専門の転職支援の強み、料金、向く人・向かない人、利用の流れ、FAQを出典を明記して解説します。";
const URL = "/review/unison-career/";
const OFFICIAL_URL = "https://unison-career.jp/";

export const metadata: Metadata = {
  alternates: { canonical: "/review/unison-career/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "要点（どんな人向けか）" },
  { id: "basic", label: "基本データ表（2026年6月時点）" },
  { id: "strength", label: "特徴・強み" },
  { id: "reputation", label: "口コミ・評判の掲載状況" },
  { id: "caution", label: "注意点と対処法" },
  { id: "middle", label: "30代・40代エンジニアの活用視点" },
  { id: "fit", label: "向いている人／向いていない人" },
  { id: "flow", label: "利用の流れ" },
  { id: "faq", label: "よくある質問" },
];

const basicData: [string, string][] = [
  ["サービス名", "ユニゾンキャリア"],
  ["運営会社", "株式会社ユニゾン・テクノロジー（2021年設立／東京都渋谷区）"],
  ["許可番号", "有料職業紹介 13-ユ-313348（公式・会社情報）"],
  ["サービス種別", "IT/Web業界専門の転職エージェント（担当が求人を提案する伴走型）"],
  ["得意領域", "IT/Web系エンジニア・Web業界職種（公式）"],
  ["対象者", "未経験〜経験者まで幅広く対応（公式記載）"],
  ["対応エリア", "要確認（運営は東京。具体的な対応エリアは公式に明記なし）"],
  ["サポート", "キャリア相談・求人紹介・選考対策（求職者無料）"],
  ["料金", "相談・登録は無料（費用は採用企業側が負担）"],
];

const interviewTally: [string, string][] = [
  ["掲載件数（転職の成功者インタビュー）", "21件（4ページ）"],
  ["公式のタグ「年収アップ」", "17件"],
  ["公式のタグ「キャリアアップ」", "2件"],
  ["公式のタグ「キャリアチェンジ」", "2件"],
  ["タイトルに30代・31歳と明記", "2件（Salesforce運用からの転職／31歳で転職4社目）"],
  ["「不満」「失敗」を扱う回", "0件（すべて転職成功の事例）"],
];

const cautions = [
  {
    title: "ミドル・ハイクラス特化ではない",
    body: "公式は「エンジニア経験者・未経験者どちらも支援可能」と案内しており、30代後半〜40代のハイクラス求人に特化したサービスではありません。公式の成功者インタビュー21件のうち、タイトルで30代以上と分かる回は2件です。",
    cope: "管理職・高年収レンジを狙う場合は、ハイクラス向けのビズリーチやJACリクルートメントを軸に据え、ユニゾンキャリアは選択肢を広げる併用先として使うのが現実的です。",
  },
  {
    title: "対応エリアが公式に明記されていない",
    body: "公式サイト上で具体的な対応エリアの明示は確認できませんでした（運営所在地は東京）。地方在住者は対応可否の確認が必要です。",
    cope: "面談前に居住地・希望勤務地（リモート希望含む）を伝え、紹介可能な求人があるか確認しておくと行き違いを防げます。",
  },
  {
    title: "公式の実績値は自社集計",
    body: "公式トップの実績の注記は「Googleとコエテコキャリアの口コミ数と評価をもとに算出」（2025年11月18日時点・自社調べ）、年収アップ率は「2025年1月〜2025年8月の内定承諾者」（エンジニア実務経験者のみ）、定着率は「2025年1月〜8月の間に入社した方の3ヶ月以上継続率」です。いずれも運営会社による集計です。",
    cope: "数値は対象期間・対象者を確認したうえで参考にし、面談で自分の経験年数に近い事例を具体的に聞くと判断しやすくなります。",
  },
];

const fitYes = [
  "IT/Web業界に絞ってキャリア相談をしたい",
  "業界理解のある担当者と会話しながら進めたい",
  "経験が浅い時期から相談できる入口を探している",
  "複数エージェントを併用して比較したい",
];

const fitNo = [
  "40代の管理職・高年収求人だけに絞りたい",
  "第三者サイトの評点・件数を見比べてから決めたい",
  "IT以外の職種を探している",
  "対面の地方サポートを最優先したい（対応エリア要確認）",
];

const flow = [
  {
    step: "STEP1",
    title: "無料相談・登録",
    body: "公式サイトの相談フォームから申し込みます。在職中でも登録でき、情報収集目的の相談も可能です。",
  },
  {
    step: "STEP2",
    title: "キャリアカウンセリング",
    body: "担当者と面談し、これまでの経験・希望条件・NG条件をすり合わせます。条件を具体的に伝えるほど後の提案精度が上がります。",
  },
  {
    step: "STEP3",
    title: "求人紹介・選考対策",
    body: "条件に合う求人の紹介を受け、書類添削・面接対策のサポートを受けながら応募します。",
  },
  {
    step: "STEP4",
    title: "内定・入社",
    body: "選考・日程調整を経て内定します。条件確認や入社日調整のサポートを受けて完了します。",
  },
];

const faqs = [
  {
    q: "ユニゾンキャリアの料金はかかりますか？",
    a: "求職者は無料です。相談・求人紹介・選考対策まで費用はかかりません。費用は採用企業側が負担する一般的なエージェントの仕組みです。",
  },
  {
    q: "未経験でも利用できますか？",
    a: "公式は未経験から経験者まで幅広く対応すると明記しています。IT/Web業界へのキャリア相談の入口として利用できます。ただし30代・40代でハイクラスを狙う場合は、ハイクラス特化サービスとの併用を検討してください。",
  },
  {
    q: "30代・40代のミドルエンジニアでも使えますか？",
    a: "IT/Web専門のため業界理解のある相談は可能です。一方でミドル・ハイクラス特化サービスではないため、年収や役職を重視する場合はビズリーチやJACリクルートメントなどを併用するのが現実的です。",
  },
  {
    q: "対応エリアはどこですか？地方でも使えますか？",
    a: "運営会社の所在地は東京です。公式サイト上で具体的な対応エリアの明記は確認できなかったため、地方在住の方は面談前に対応可否（リモート求人を含む）を確認することをおすすめします。",
  },
  {
    q: "他社と併用してもいいですか？",
    a: "併用は可能です。一般に2〜3社の併用が推奨されており、IT特化のレバテックキャリアや総合型のdodaなどと組み合わせると求人の幅と比較材料が増えます。",
  },
];

const related = [
  { name: "レバテックキャリアの評判（IT特化）", href: "/review/levtech/" },
  { name: "ワークポートの評判（未経験も）", href: "/review/workport/" },
  { name: "マイナビIT AGENTの評判", href: "/review/mynavi-it/" },
  { name: "EDBエージェントの評判（IT特化）", href: "/review/edb-agent/" },
  { name: "転職サービス評判一覧（ハブ）", href: "/review/" },
  { name: "30代・40代の年収相場データ", href: "/salary/age-salary/" },
];

export default function UnisonCareerReview() {
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
          { name: "ユニゾンキャリア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          ユニゾンキャリアの評判・口コミは？特徴・料金・対応【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年11月23日 ｜ IT/Web専門エージェントを公式情報で検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          ユニゾンキャリアは、株式会社ユニゾン・テクノロジーが運営するIT/Web業界専門の転職エージェントです。本記事では公式情報をもとに、30代・40代ミドルエンジニアの視点で特徴・料金・向き不向きを整理します。架空の体験談や星評価は掲載せず、出典のある情報のみを扱います。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "ユニゾンキャリア公式サイト",
            "株式会社ユニゾン・テクノロジー 会社情報",
            "公式 転職成功者インタビュー（2026年11月23日確認）",
          ]}
        />

        {/* 要点 */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">このような方におすすめ</h2>
            <p className="text-sm text-blue-900 mb-3">
              <span className="font-bold">総合評価：IT/Web業界に絞って業界理解のある相談がしたい人向けです</span>。要約すると「IT/Web専門の担当者と、キャリア相談から選考対策まで伴走してほしい人」向けのエージェントです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・IT/Web業界専門で、未経験〜経験者まで幅広く対応しています（公式）。</li>
              <li>・相談・登録・選考対策は無料です。費用は採用企業側が負担します。</li>
              <li>・一方で、ミドル・ハイクラス特化のサービスではありません。年収・役職を重視する場合はハイクラス系との併用をおすすめします。</li>
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
            ※会社情報・許可番号は公式の会社情報に基づきます。対応エリアなど一部は公式に明記がなく「要確認」としています。最新情報は公式サイトをご確認ください。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ユニゾンキャリアの特徴・強み</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. IT/Web業界専門の特化型</h3>
              <p className="text-sm text-petrol-deep">
                公式はIT/Web業界専門を掲げており、業界・職種の事情を踏まえた相談がしやすいのが特徴です。技術・職種理解のある担当者と進めたい人に向いています。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 未経験〜経験者まで幅広く対応</h3>
              <p className="text-sm text-petrol-deep">
                公式は未経験から経験者まで対応すると明記しています。IT/Web業界へのキャリア相談の入口として使いやすく、経験が浅い時期からの相談も可能です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 相談から選考対策まで伴走</h3>
              <p className="text-sm text-petrol-deep">
                キャリア相談・求人紹介・選考対策まで担当が伴走する一般的なエージェント型です。求職者は無料で利用できます。
              </p>
            </div>
          </div>
        </section>

        {/* 口コミ・評判の掲載状況 */}
        <section id="reputation" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ユニゾンキャリアの口コミ・評判の掲載状況（2026年11月23日確認）</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed mb-4">
            <p>
              <span className="font-bold text-slate-700">第三者サイトの評点：</span>
              当サイトで評点と件数を確認できた第三者サイトはありません（2026年11月23日時点）。App Store にユニゾンキャリアのアプリはありません（App Store 検索で0件）。公式トップは実績の算出に「Googleとコエテコキャリアの口コミ数と評価」を使ったと注記していますが、コエテコキャリアの掲載ページは当サイトの取得環境からアクセスが遮断され、評点・件数を確認できなかったため掲載していません。
            </p>
            <p>
              <span className="font-bold text-slate-700">公式に掲載された利用者の声：</span>
              公式サイトの「転職 成功者インタビュー」には21件が掲載されています。運営会社が選んで掲載している事例であり、利用者全体の評価を表すものではありません。当サイトでタイトルと公式のタグを数えた内訳は次のとおりです。
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <tbody>
                {interviewTally.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/2 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400">
            出典：
            <a href="https://unison-career.jp/job-change/interview/" rel="nofollow noopener" target="_blank" className="underline">ユニゾンキャリア公式「転職成功者インタビュー」</a>
            （2026年11月23日に1〜4ページを確認・集計は当サイト）。口コミの本文は転載していません。
          </p>
        </section>

        {/* 注意点 */}
        <section id="caution" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">注意点と対処法</h2>
          <div className="space-y-4">
            {cautions.map((r, i) => (
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
              当サイトはミドルエンジニアの転職を扱う立場から、使い方を整理します。ユニゾンキャリアはIT/Web専門で未経験層まで広く対応するサービス設計です。30代・40代の経験者にとっては、業界理解のある相談先のひとつとして使える一方、ハイクラス特化ではない点を踏まえる必要があります。
            </p>
            <p>
              <span className="font-bold text-slate-700">30代の場合：</span>
              経験を年収に反映させやすい年代です。中心となるエージェントはIT特化のレバテックキャリアなどにしつつ、ユニゾンキャリアは選択肢を広げる併用先として使うと比較材料が増えます。
            </p>
            <p>
              <span className="font-bold text-slate-700">40代の場合：</span>
              年収・役職を重視するなら、ハイクラス特化のビズリーチやJACリクルートメントを軸に据えるのが堅実です。ユニゾンキャリアは併用先として活用し、自分の市場価値を複数の視点で確認するとよいでしょう。
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
          <h2 className="text-xl font-bold mb-3">ユニゾンキャリアに無料相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            まずは無料相談で、IT/Web業界での選択肢を確認してみませんか？
          </p>
          <a
            href={OFFICIAL_URL}
            rel="nofollow noopener"
            target="_blank"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            公式サイトで無料相談する
          </a>
        </section>

        {/* 評判・口コミの参照元 */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-slate-800 mb-3">評判・口コミの参照元</h2>
          <p className="text-xs text-slate-500 leading-relaxed mb-3">
            第三者サイトの評点は、2026年11月23日時点で当サイトが確認できたものがないため掲載していません。利用者の声は公式の成功者インタビュー（運営会社が選んだ事例）の件数とタグの内訳のみを掲載し、本文は転載していません。最終確認日：2026年11月23日。
          </p>
          <ul className="text-sm space-y-2 text-slate-600 list-disc pl-5">
            <li>
              <a href="https://unison-career.jp/" rel="nofollow noopener" target="_blank" className="text-petrol underline hover:no-underline">
                ユニゾンキャリア公式サイト（サービス概要・実績の注記）
              </a>
            </li>
            <li>
              <a href="https://unison-career.jp/job-change/interview/" rel="nofollow noopener" target="_blank" className="text-petrol underline hover:no-underline">
                ユニゾンキャリア公式「転職成功者インタビュー」（21件）
              </a>
            </li>
          </ul>
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
