import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "テックゴーの評判は？年収アップ実績と特徴を検証【2026年】";
const DESCRIPTION =
  "テックゴー（TechGo・株式会社MyVision運営）の評判・特徴を30代40代ミドルエンジニア目線で検証。公式公表の年収アップ平均138万円の注記条件、無料キャリア面談、向く人・向かない人、利用の流れを出典付きで解説します。";
const URL = "/review/techgo/";
const OFFICIAL_URL = "https://tech-go.jp/";

export const metadata: Metadata = {
  alternates: { canonical: "/review/techgo/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "結論サマリ（どんな人向けか）" },
  { id: "basic", label: "基本データ表（2026年7月時点）" },
  { id: "strength", label: "特徴・強み" },
  { id: "numbers", label: "実績数値の正確な読み方（注記条件）" },
  { id: "company", label: "運営会社MyVisionの信頼性" },
  { id: "myvision", label: "テックゴーとMyVision（コンサル転職）の違い" },
  { id: "compare", label: "IT特化エージェント比較（レバテック・Geekly）" },
  { id: "good", label: "良い評判の傾向" },
  { id: "bad", label: "気になる評判の傾向と対処法" },
  { id: "middle", label: "30代・40代エンジニアの活用視点" },
  { id: "fit", label: "向いている人／向いていない人" },
  { id: "flow", label: "利用の流れ（公式5ステップ）" },
  { id: "faq", label: "よくある質問" },
];

const basicData: [string, string][] = [
  ["サービス名", "テックゴー（TechGo）"],
  [
    "運営会社",
    "株式会社MyVision（登記上の設立2022年6月・2022年11月事業開始／東京都港区虎ノ門）",
  ],
  ["許可番号", "有料職業紹介 13-ユ-314719（公式・会社概要）"],
  [
    "サービス種別",
    "ITエンジニア特化の転職エージェント（担当が求人を提案する伴走型）",
  ],
  [
    "サービス開始",
    "2025年立ち上げ（運営会社の採用情報での表現。正確なローンチ月は公表なし）",
  ],
  [
    "対象者",
    "ITエンジニア経験者が中心（SE・PG・社内SE・Web系・インフラ・データ/AI・PM/PL・QA）",
  ],
  [
    "求人",
    "1万件以上（公式）。非公開求人・独占選考ルート・面接確約求人あり（メガベンチャー・大手事業会社・ITコンサル等）",
  ],
  [
    "面談",
    "オンライン中心（Zoom・Google Meet等）。平日夜間・土曜も実施（公式FAQ）",
  ],
  ["料金", "完全無料（登録〜面談〜選考対策〜入社後フォローまで。公式FAQ明記）"],
];

const goodReviews = [
  {
    title: "面談・選考対策が手厚い",
    body: "公式は選考対策として「模擬面接を何度も実施」すると明記しており、各転職メディアでも面談の丁寧さ・回数の多さが一貫して強みとして紹介されている。面接に不安がある人ほど恩恵が大きいという文脈で評価される傾向がある。",
  },
  {
    title: "平日夜間・土曜も面談でき、在職中でも動きやすい",
    body: "公式FAQに「平日夜間や土曜日も面談を実施」と明記。面談はオンライン（Zoom・Google Meet等）中心のため、在職中のエンジニアが業務後や週末に進めやすいという評価が複数メディアで見られる。",
  },
  {
    title: "年収アップの公表実績が具体的",
    body: "公式サイトは年収アップ金額平均138万円（2025年6〜7月に内定承諾し年収アップを実現した人の平均）、年収交渉成功率100%（2025年9月時点）と、条件付きながら具体的な数値を公表している。数値の読み方は次項の注記解説を参照。",
  },
];

const badReviews = [
  {
    title: "2025年開始の新しいサービスで、口コミの蓄積が少ない",
    body: "テックゴーは運営会社の採用情報によれば2025年立ち上げ。独立系口コミプラットフォーム上の利用者の声は、レバテックキャリアなど運営歴の長い大手と比べるとまだ限定的。",
    cope: "判断材料が少ないぶん、無料キャリア面談で紹介求人の傾向・担当者の業界理解を直接確かめるのが確実。IT特化大手（レバテックキャリアなど）と併用して提案内容を比較すると判断しやすい。",
  },
  {
    title: "経験者向けの訴求が中心で、未経験からの利用は要確認",
    body: "公式サイトは「これまでのエンジニア経験がきっと活きる企業へ」と経験者向けの訴求が中心。運営会社の発信では未経験層への言及もあるが、本体サイトに未経験可の明記はない。",
    cope: "実務未経験・経験が浅い場合は、面談前に支援可否を問い合わせるか、未経験対応を明記するサービス（ワークポートなど）を併用するとミスマッチを防げる。",
  },
  {
    title: "日曜面談・対面面談の可否は公式に明言がない",
    body: "公式FAQが明言しているのは「平日夜間・土曜の実施」と「オンライン中心」まで。日曜の面談や対面での面談を希望する場合の可否は記載がない。",
    cope: "日曜・対面を希望する場合は、申し込み時の日程調整でその旨を伝えて対応可否を確認するとよい。オンライン面談なら自宅から参加でき、地方在住でも利用しやすい。",
  },
];

const fitYes = [
  "エンジニア経験を活かして年収を上げたい（30代の公表平均は+160万円）",
  "模擬面接など選考対策に何度も付き合ってほしい",
  "在職中のため平日夜間・土曜のオンライン面談で進めたい",
  "メガベンチャー・大手事業会社・ITコンサル系の求人も見たい",
];

const fitNo = [
  "運営歴の長さ・口コミの蓄積量を最重視したい",
  "実務未経験からのIT就職を目指している（対応可否は要確認）",
  "対面でじっくり面談したい（公式はオンライン中心）",
  "エージェントを介さず自分のペースで応募したい（スカウト型が向く）",
];

const flow = [
  {
    step: "STEP1",
    title: "無料キャリア相談（面談）",
    body: "公式サイトから登録し、キャリアアドバイザーと面談。経歴・希望条件・転職希望時期をすり合わせる。転職意向が固まっていない段階の相談も可能と公式FAQに明記されている。",
  },
  {
    step: "STEP2",
    title: "求人紹介・応募先選定",
    body: "非公開求人を含む求人の紹介を受け、応募先を選定。応募手続きはエージェントが代行する。",
  },
  {
    step: "STEP3",
    title: "選考対策",
    body: "書類・面接の対策。公式は「模擬面接を何度も実施」と明記しており、応募先に合わせた対策を受けられる。",
  },
  {
    step: "STEP4",
    title: "内定獲得・条件交渉",
    body: "内定後はオファー年収の交渉をエージェントが代行。公式公表では年収交渉成功率100%（2025年9月時点）。",
  },
  {
    step: "STEP5",
    title: "入社・入社後フォロー",
    body: "入社日調整などのサポートを受けて入社。公式は入社後の長期キャリア支援もうたっている。転職期間の目安は平均1〜3ヶ月（公式FAQ）。",
  },
];

const faqs = [
  {
    q: "テックゴーの利用に料金はかかりますか？",
    a: "かかりません。公式FAQに「サービスは、完全無料でご利用いただけます。ご登録から、キャリアカウンセリング、求人紹介、面接対策、条件交渉、入社までのフォローアップまで」と明記されています。費用は採用企業側が負担する一般的なエージェントの仕組みです。",
  },
  {
    q: "テックゴーの運営会社はどこですか？",
    a: "株式会社MyVisionです（東京都港区虎ノ門・有料職業紹介 13-ユ-314719）。ITコンサル転職エージェント「MyVision」を運営する会社が、ITエンジニア向けに2025年に立ち上げたのがテックゴーです。建設・会計士・製造領域の転職支援も展開するグループです。",
  },
  {
    q: "面談は土日や夜間でもできますか？オンラインで完結しますか？",
    a: "公式FAQは「平日夜間や土曜日も面談を実施」「面談形式はオンライン（ZoomやGoogle Meetなど）が中心」と明記しています。日曜の可否は記載がないため、希望する場合は日程調整時に確認してください。詳細は無料キャリア面談の解説記事にまとめています。",
  },
  {
    q: "未経験でも利用できますか？",
    a: "公式サイトはエンジニア経験者向けの訴求が中心で、未経験可の明記はありません。実務未経験の場合は事前に支援可否を確認するか、未経験対応を明記する他サービスとの併用をおすすめします。",
  },
  {
    q: "年収アップ平均138万円というのは本当ですか？",
    a: "公式サイトが公表している数値ですが、「2025年6〜7月において内定承諾をし、年収アップを実現された方の平均実績」という条件付きです。全利用者の平均ではない点に注意してください。年代別では20代平均+120万円、30代平均+160万円と公表されています。",
  },
  {
    q: "他のエージェントと併用してもいいですか？",
    a: "併用は可能です。テックゴーは2025年開始の新しいサービスのため、IT特化大手のレバテックキャリアや求人量の多いdoda ITエンジニアなどと併用し、提案の質と求人の幅を比較しながら進めるのが現実的です。",
  },
  {
    q: "どんな企業の求人がありますか？",
    a: "公式サイトによれば求人は1万件以上で、メガベンチャー・大手事業会社・ITコンサルなどをカバーしています。非公開求人のほか、独占選考ルートや面接確約求人があると公表されています。具体的にどの企業を紹介できるかは経歴によるため、面談で確認するのが確実です。",
  },
  {
    q: "地方在住でも利用できますか？リモート求人はありますか？",
    a: "面談はオンライン中心（Zoom・Google Meet等）のため地方からでも利用できます。公式の求人検索は47都道府県すべての勤務地で検索できる作りになっています。一方「リモート求人多数」といった公式の明言は確認できなかったため、リモート希望の場合は面談時に希望として明確に伝えてください。",
  },
  {
    q: "転職までどのくらいの期間がかかりますか？",
    a: "公式FAQによれば、転職期間の目安は平均1〜3ヶ月程度です。在職中の場合は引き継ぎ期間も含めて逆算し、面談時に希望時期を伝えるとスケジュールを設計してもらえます。",
  },
];

const related = [
  {
    name: "テックゴーの無料キャリア面談を徹底解説",
    href: "/review/techgo-consultation/",
  },
  { name: "レバテックキャリアの評判（IT特化大手）", href: "/review/levtech/" },
  { name: "Geeklyの評判（IT/Web/ゲーム特化）", href: "/review/geekly/" },
  { name: "ウィルオブテックの評判（年収アップ特化）", href: "/review/willof-tech/" },
  { name: "転職サービス評判一覧（ハブ）", href: "/review/" },
  { name: "30代・40代の年収相場データ", href: "/salary/age-salary/" },
];

export default function TechgoReview() {
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
          { name: "テックゴー" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          テックゴーの評判は？年収アップ実績と特徴を検証【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年7月 ｜ MyVision運営のITエンジニア特化エージェントを公式情報と二次情報で検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          テックゴー（TechGo）は、株式会社MyVisionが運営するITエンジニア特化の転職エージェントです。本記事では公式サイトの公表情報（実績数値は注記条件まで確認）と各転職メディアの紹介をもとに、30代・40代ミドルエンジニアの視点で特徴・評判・向き不向きを整理します。架空の体験談や星評価は掲載せず、出典のある情報のみを扱います。
        </p>
        <DataNote
          surveyedAt="2026年7月"
          sources={[
            "テックゴー公式サイト（サービス概要・FAQ・会社概要）",
            "株式会社MyVision 会社情報・プレスリリース",
            "複数転職メディアの紹介記事",
          ]}
        />

        {/* 結論サマリ */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：こんな人におすすめ</h2>
            <p className="text-sm text-blue-900 mb-3">
              <span className="font-bold">
                総合評価：経験を年収に変えたい20〜30代中心のITエンジニア向け
              </span>
              。一言でいえば「模擬面接まで含めた手厚い伴走と年収交渉を、平日夜間・土曜のオンライン面談で受けたい人」向けのエージェントです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>
                ・公式公表の年収アップは平均138万円（2025年6〜7月の内定承諾者平均）、30代は平均+160万円。
              </li>
              <li>・登録から入社後フォローまで完全無料（公式FAQ明記）。面談はオンライン中心。</li>
              <li>
                ・一方で2025年開始の新しいサービスのため口コミ蓄積は少ない。大手IT特化との併用が前提。
              </li>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ表（2026年7月時点）</h2>
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
            ※会社情報・許可番号は公式の会社概要、実績数値は公式サイトの注記条件に基づきます。設立年月は登記上2022年6月・事業開始2022年11月と公表資料で表記が分かれるため併記しています。最新情報は公式サイトをご確認ください。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">テックゴーの特徴・強み</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">
                1. コンサル転職大手MyVisionグループのIT特化サービス
              </h3>
              <p className="text-sm text-petrol-deep">
                運営の株式会社MyVisionは、ITコンサル転職エージェント「MyVision」で支援実績を持つ会社です（厚生労働省 人材サービス総合サイトの2025年度支援実績数比較でコンサル領域No.1を公式が明示）。そのグループがITエンジニア向けに2025年に立ち上げたのがテックゴーで、ITコンサル案件を含む求人ルートと選考対策ノウハウが土台にあります。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">
                2. 模擬面接を何度も実施する手厚い選考対策
              </h3>
              <p className="text-sm text-petrol-deep">
                公式は選考対策ステップで「模擬面接を何度も実施」と明記。応募手続きの代行、内定後のオファー年収交渉（公表成功率100%・2025年9月時点）まで一気通貫で伴走する設計です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">
                3. 求人1万件以上・独占選考ルート・面接確約求人
              </h3>
              <p className="text-sm text-petrol-deep">
                公式によれば求人は1万件以上で、メガベンチャー・大手事業会社・ITコンサルなどをカバー。非公開求人に加え、独占選考ルートや面接確約求人があると公表されています。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">
                4. 平日夜間・土曜対応のオンライン無料キャリア面談
              </h3>
              <p className="text-sm text-petrol-deep">
                面談はZoom・Google Meetなどのオンラインが中心で、平日夜間・土曜も実施（公式FAQ）。転職意向が固まっていない段階の相談も可能と明記されており、在職中でも動きやすいのが特徴です。面談の流れ・準備は
                <Link href="/review/techgo-consultation/" className="underline hover:no-underline">
                  無料キャリア面談の徹底解説
                </Link>
                にまとめました。
              </p>
            </div>
          </div>
        </section>

        {/* 実績数値の読み方 */}
        <section id="numbers" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            実績数値の正確な読み方（注記条件まで確認）
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            紹介記事では数値だけが独り歩きしがちなので、公式サイトの注記条件まで含めて正確に整理します（2026年7月2日時点の公式サイト記載）。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">
                    公表数値
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">
                    公式の注記・条件
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-bold">
                    年収アップ金額 平均138万円
                  </td>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">
                    「2025年6〜7月において内定承諾をし、年収アップを実現された方の平均実績」＝特定2ヶ月間の、かつ年収が上がった人に限った平均。全利用者平均ではない。
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-bold">
                    年収交渉成功率 100%
                  </td>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">
                    「2025年9月時点実績」。交渉した案件での成功率であり、時点が明記された数値。
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-bold">
                    20代平均+120万円／30代平均+160万円
                  </td>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">
                    公式サイトに記載があるが、集計期間などの個別注記は付されていない。
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-bold">
                    求人1万件以上
                  </td>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">
                    公式サイト記載（時点注記なし）。非公開求人・独占選考ルート・面接確約求人を含むとされる。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            なお、一部の紹介記事に見られる「年収アップ率92%」などの数値は、当サイト調査時点（2026年7月）で公式サイトに記載を確認できませんでした。本記事では公式サイトで確認できた数値のみを扱います。
          </p>
        </section>

        {/* 運営会社 */}
        <section id="company" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            運営会社・株式会社MyVisionの信頼性
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            2025年開始の新しいサービスを検討するうえで重要なのが運営会社の実体です。テックゴーを運営する株式会社MyVisionの公表情報を整理します。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                <tr className="bg-white">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">会社名</th>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">株式会社MyVision</td>
                </tr>
                <tr className="bg-slate-50">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200 align-top">設立</th>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">登記上2022年6月（2022年11月に事業開始。公表資料で表記が分かれるため併記）</td>
                </tr>
                <tr className="bg-white">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200 align-top">所在地</th>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">東京都港区虎ノ門4-1-1 神谷町トラストタワー24階</td>
                </tr>
                <tr className="bg-slate-50">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200 align-top">資本金・従業員数</th>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">資本金1億円・従業員388名（公式会社概要。従業員数の時点注記なし）</td>
                </tr>
                <tr className="bg-white">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200 align-top">許可番号</th>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">有料職業紹介事業 13-ユ-314719（厚生労働省許可）</td>
                </tr>
                <tr className="bg-slate-50">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200 align-top">グループサービス</th>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">MyVision（ITコンサル転職）／ビルドジョブ（建設・2024年6月開始）／ツインプロ（会計士・税理士・2024年5月開始）／メーカーズジョブ（製造）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            本体のコンサル転職エージェント「MyVision」は、厚生労働省の人材サービス総合サイトに基づく2025年度支援実績数の比較でコンサル領域No.1を公式に掲げています。設立から短期間で建設・会計・製造・ITエンジニアへと領域特化型エージェントを横展開しており、テックゴーはその「エンジニア版」という位置づけです。サービス自体は新しくても、母体は複数領域で職業紹介を運営する事業会社である、というのが実体です。
          </p>
        </section>

        {/* MyVisionとの違い */}
        <section id="myvision" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            テックゴーとMyVision（コンサル転職）の違い
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              同じ株式会社MyVisionが運営するため混同しやすいのですが、
              <span className="font-bold text-slate-700">
                「MyVision」はITコンサルタント転職に特化したエージェント、「テックゴー」はITエンジニア転職に特化したエージェント
              </span>
              で、別サービスです。どちらに登録すべきかは、目指すキャリアで判断します。
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-bold text-slate-700">エンジニアとして技術キャリアを続ける</span>
                （開発・インフラ・データ/AI・PM等）→ テックゴー。SE・PG・社内SE・Web系・インフラ・データ/AI・PM/PL・QAといった職種を対象としています。
              </li>
              <li>
                <span className="font-bold text-slate-700">エンジニアからITコンサルタントへ転身したい</span>
                → 本体のMyVisionが専門領域。コンサルファームの選考（ケース面接など）に特化した対策が受けられます。
              </li>
              <li>
                <span className="font-bold text-slate-700">どちらか迷っている</span>
                → テックゴーの求人にはITコンサル系も含まれる（公式）ため、まずテックゴーの無料キャリア面談で両方の可能性を相談し、コンサルに軸足を置くと決めた段階で本体MyVisionを使う、という順序が動きやすいでしょう。
              </li>
            </ul>
            <p>
              グループとしてコンサル転職で蓄積した選考対策ノウハウ（面接対策・年収交渉）をエンジニア領域に持ち込んでいるのがテックゴーの設計思想で、「模擬面接を何度も実施」という公式記載にもそれが表れています。
            </p>
          </div>
        </section>

        {/* 比較 */}
        <section id="compare" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            IT特化エージェント比較（テックゴー／レバテックキャリア／Geekly）
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            IT特化エージェントの代表格と比べたときの位置づけを整理します（各サービスの詳細は個別記事参照）。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4 overflow-x-auto">
            <table className="w-full text-sm min-w-[560px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">項目</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">テックゴー</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">レバテックキャリア</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">Geekly</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200 align-top">特化領域</th>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">ITエンジニア（ITコンサル案件も）</td>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">IT/Web（高年収求人が中心）</td>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">IT/Web/ゲーム</td>
                </tr>
                <tr className="bg-slate-50">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200 align-top">立ち位置</th>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">2025年開始の新興。コンサル転職大手MyVisionグループ</td>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">IT特化の最大手クラスで運営歴が長い</td>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">提案スピードに定評のある老舗特化型</td>
                </tr>
                <tr className="bg-white">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200 align-top">特徴</th>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">模擬面接を何度も実施・年収交渉成功率100%（2025年9月時点）・独占/面接確約求人</td>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">求人量・企業情報の蓄積・口コミの多さ</td>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">マッチング精度と速さ。ゲーム業界に強い</td>
                </tr>
                <tr className="bg-slate-50">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200 align-top">詳細記事</th>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">本記事</td>
                  <td className="px-4 py-3 text-petrol-deep border-b border-slate-200"><Link href="/review/levtech/" className="underline hover:no-underline">評判を見る</Link></td>
                  <td className="px-4 py-3 text-petrol-deep border-b border-slate-200"><Link href="/review/geekly/" className="underline hover:no-underline">評判を見る</Link></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            使い分けの目安：口コミの蓄積・求人量の実績を重視するならレバテックキャリアが軸。そのうえで、模擬面接の回数や年収交渉の伴走を重視する人、ITコンサルへの転身も視野に入れる人は、テックゴーを併用して提案を比較する形が相性のよい組み合わせです。一般に転職エージェントは2〜3社の併用が推奨されており、担当者との相性を比較できること自体に価値があります。
          </p>
        </section>

        {/* 良い評判 */}
        <section id="good" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">良い評判の傾向（出典付き）</h2>
          <p className="text-sm text-slate-600 mb-4">
            以下は公式情報および各転職メディアの紹介を傾向としてまとめたものです（原文転載ではありません）。
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
          <p className="text-sm text-slate-600 mb-4">公平性のため、留意点と現実的な対処法もまとめます。</p>
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
              当サイトはミドルエンジニアの転職を扱う立場から、使い方を整理します。テックゴーの公表実績は20代+120万円・30代+160万円と、経験を年収に反映させたい20〜30代への訴求が中心です。40代向けの実績数値は公表されていないため、その点は面談で直接確かめる必要があります。
            </p>
            <p>
              <span className="font-bold text-slate-700">30代の場合：</span>
              公表されている年代別実績（平均+160万円）のボリュームゾーンに当たります。模擬面接を何度も実施する選考対策と年収交渉の代行は、久しぶりの転職で面接勘が鈍っている30代には実利が大きいポイントです。IT特化大手のレバテックキャリアと併用し、提案求人と担当者の質を比較するのが堅実です。
            </p>
            <p>
              <span className="font-bold text-slate-700">40代の場合：</span>
              40代の実績数値は公表がなく、口コミの蓄積も少ないため、まず無料キャリア面談で「40代の支援実績と紹介可能な求人レンジ」を具体的に確認するのが先決です。管理職・高年収レンジを狙うならJACリクルートメントやビズリーチを軸に据え、テックゴーはITコンサル系を含む選択肢を広げる併用先として使うのが現実的です。
            </p>
            <p>
              なお運営のMyVisionグループはITコンサル転職に強みを持つため、「エンジニアからITコンサルへの転身」も視野に入れるミドル層には、キャリアの選択肢を広げる相談先になり得ます。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">利用の流れ（公式5ステップ）</h2>
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
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            最初の関門であるSTEP1の面談については、所要時間の目安・事前準備・断り方まで含めて
            <Link href="/review/techgo-consultation/" className="text-petrol-deep underline hover:no-underline">
              テックゴーの無料キャリア面談 徹底解説
            </Link>
            で詳しく扱っています。
          </p>
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
          <h2 className="text-xl font-bold mb-3">テックゴーに無料キャリア相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            登録から入社後フォローまで完全無料。平日夜間・土曜のオンライン面談で、まずは市場価値と選択肢を確認してみませんか？
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
