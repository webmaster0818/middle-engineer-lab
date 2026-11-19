import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import TechgoCta from "@/components/TechgoCta";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "テックゴーの評判・口コミは？評判記事10本と公開求人6,195件の内訳で検証【2026年11月】";
const DESCRIPTION =
  "テックゴー（TechGo）の評判・口コミを、評判記事10本の集計と公式サイトの公開求人6,195件の当サイト集計で検証します。面接対策・年収アップは10本すべてで高評価、未経験は対象外も10本すべてが指摘です。公開求人の約7割が東京都、公式の転職成功事例12件はすべて20〜30代です。厚生労働省の許可情報、退会方法、30代・40代の向き不向きまで出典を明記して解説します。";
const URL = "/review/techgo/";
const OFFICIAL_URL = "https://tech-go.jp/";

export const metadata: Metadata = {
  alternates: { canonical: "/review/techgo/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "テックゴーの評判の要点" },
  { id: "basic", label: "基本データ表（2026年11月19日時点）" },
  { id: "strength", label: "特徴・強み" },
  { id: "numbers", label: "実績数値の正確な読み方（注記条件）" },
  { id: "jobs", label: "公開求人6,195件の内訳（当サイト集計）" },
  { id: "cases", label: "公式の転職成功事例12件の内訳" },
  { id: "company", label: "運営会社MyVisionの信頼性（厚生労働省の許可情報）" },
  { id: "myvision", label: "テックゴーとMyVision（コンサル転職）の違い" },
  { id: "compare", label: "IT特化エージェント比較（レバテック・Geekly）" },
  { id: "good", label: "良い評判の傾向" },
  { id: "bad", label: "気になる評判の傾向と対処法" },
  { id: "tally", label: "評判記事10本の集計" },
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
  [
    "許可番号",
    "有料職業紹介 13-ユ-314719（許可年月日 2022年11月1日／厚生労働省 人材サービス総合サイトで確認）",
  ],
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
    "10,000件以上（公式。2026年8月時点の公開求人・非公開求人の合計）。うち公式サイトの求人検索で見られる公開求人は6,195件（2026年11月19日 当サイト確認）",
  ],
  [
    "対応エリア",
    "全国の勤務地で検索可能。ただし公開求人の約71%（4,391件）が東京都を勤務地に含みます（2026年11月19日 当サイト集計）",
  ],
  [
    "面談",
    "オンライン中心（Zoom・Google Meet等）。平日夜間・土曜も実施（公式FAQ）",
  ],
  ["料金", "完全無料（登録〜面談〜選考対策〜入社後フォローまで、公式FAQ明記）"],
  [
    "転職期間の目安",
    "登録から内定まで平均1〜3ヶ月程度（公式FAQ。早期希望は1〜2ヵ月、じっくり比較する場合は3〜6ヵ月程度）",
  ],
];

const goodReviews = [
  {
    title: "面談・選考対策が手厚い",
    body: "公式は選考対策として「模擬面接を何度も実施」すると明記しており、各転職メディアでも面談の丁寧さ・回数の多さが一貫して強みとして紹介されています。面接に不安がある人ほど恩恵が大きいという文脈で評価される傾向があります。",
  },
  {
    title: "平日夜間・土曜も面談でき、在職中でも動きやすい",
    body: "公式FAQに「平日夜間や土曜日も面談を実施」と明記しています。面談はオンライン（Zoom・Google Meet等）中心のため、在職中のエンジニアが業務後や週末に進めやすいという評価が複数メディアで見られます。",
  },
  {
    title: "年収アップの公表実績が具体的",
    body: "公式サイトは年収アップ金額平均144万円（2026年3月に内定承諾し年収アップを実現した人の平均）、年収アップ成功率86%（同期間の内定承諾者のうち年収アップを実現した割合）と、条件付きながら具体的な数値を公表しています。数値の読み方は次項の注記解説をご参照ください。",
  },
];

const badReviews = [
  {
    title: "2025年開始の新しいサービスで、口コミの蓄積が少ない",
    body: "テックゴーは運営会社の採用情報によれば2025年に立ち上げられました。独立系口コミプラットフォーム上の利用者の声は、レバテックキャリアなど運営歴の長い大手と比べるとまだ限定的です。",
    cope: "判断材料が少ないぶん、無料キャリア面談で紹介求人の傾向・担当者の業界理解を直接確かめるのが確実です。IT特化大手（レバテックキャリアなど）と併用して提案内容を比較すると判断しやすくなります。",
  },
  {
    title: "経験者向けの訴求が中心で、未経験からの利用は要確認",
    body: "公式サイトは「これまでのエンジニア経験がきっと活きる企業へ」と経験者向けの訴求が中心です。公式の求人検索には「職種未経験歓迎」の条件がありますが、該当する公開求人は86件で、公開求人6,195件の約1.4%です（2026年11月19日 当サイト確認）。",
    cope: "実務未経験・経験が浅い場合は、面談前に支援可否を問い合わせるか、未経験対応を明記するサービス（ワークポートなど）を併用するとミスマッチを防げます。",
  },
  {
    title: "日曜面談・対面面談の可否は公式に明言がない",
    body: "公式FAQが明言しているのは「平日夜間・土曜の実施」と「オンライン中心」までです。日曜の面談や対面での面談を希望する場合の可否は記載がありません。",
    cope: "日曜・対面を希望する場合は、申し込み時の日程調整でその旨を伝えて対応可否を確認するとよいでしょう。オンライン面談なら自宅から参加でき、地方在住でも利用しやすくなります。",
  },
];

const fitYes = [
  "エンジニア経験を活かして年収を上げたい（公式のサービス紹介ページでは30代の平均+160万円と公表）",
  "模擬面接など選考対策に何度も付き合ってほしい",
  "在職中のため平日夜間・土曜のオンライン面談で進めたい",
  "メガベンチャー・大手事業会社・ITコンサル系の求人も見たい",
];

const fitNo = [
  "運営歴の長さ・口コミの蓄積量を最重視したい",
  "実務未経験からのIT就職を目指しています（職種未経験歓迎の公開求人は86件）",
  "首都圏以外での勤務を前提に探したい（公開求人の約71%が東京都を勤務地に含みます）",
  "対面でじっくり面談したい（公式はオンライン中心）",
  "エージェントを介さず自分のペースで応募したい（スカウト型が向く）",
];

const flow = [
  {
    step: "STEP1",
    title: "無料キャリア相談（面談）",
    body: "公式サイトから登録し、キャリアアドバイザーと面談します。公式FAQによれば、登録フォームで日程を入力した場合はその日程で面談が確定し、入力がない場合は担当者から電話またはメールで日程と面談形式の連絡があります。転職意向が固まっていない段階の相談も可能と明記されています。",
  },
  {
    step: "STEP2",
    title: "求人紹介・応募先選定",
    body: "非公開求人を含む求人の紹介を受け、応募先を選定します。応募手続きはエージェントが代行します。",
  },
  {
    step: "STEP3",
    title: "選考対策",
    body: "書類・面接の対策を受けます。公式は「模擬面接を何度も実施」と明記しており、応募先に合わせた対策を受けられます。",
  },
  {
    step: "STEP4",
    title: "内定獲得・条件交渉",
    body: "内定後はオファー年収の交渉をエージェントが代行します。公式が公表している成功率は交渉単体ではなく「年収アップ成功率86%」（2026年3月の内定承諾者）。",
  },
  {
    step: "STEP5",
    title: "入社・入社後フォロー",
    body: "入社日調整などのサポートを受けて入社します。公式は入社後の長期キャリア支援もうたっています。転職期間の目安は平均1〜3ヶ月です（公式FAQ）。",
  },
];

const faqs = [
  {
    q: "テックゴーの利用に料金はかかりますか？",
    a: "かかりません。公式FAQに「サービスは、完全無料でご利用いただけます。ご登録から、キャリアカウンセリング、求人紹介、面接対策、条件交渉、入社までのフォローアップまで」と明記されています。費用は採用企業側が負担する一般的なエージェントの仕組みです。",
  },
  {
    q: "テックゴーの運営会社はどこですか？",
    a: "株式会社MyVisionです（東京都港区虎ノ門・有料職業紹介 13-ユ-314719）。ITコンサル転職エージェント「MyVision」を運営する会社が、ITエンジニア向けに2025年に立ち上げたのがテックゴーです。許可番号は厚生労働省の人材サービス総合サイトで検索でき、許可年月日は2022年11月1日と表示されています（2026年11月19日確認）。",
  },
  {
    q: "テックゴーの評判は良いですか？悪い評判はありますか？",
    a: "当サイトが評判記事10本を集計した結果（2026年10月15日）、面接対策の手厚さと年収交渉は10本すべてで良い評価として挙がっていました。一方、未経験者は求人が限られる点も10本すべてが指摘し、担当者による差（5本）や地方求人の少なさ（4本）も挙がっています。紹介報酬を受け取る形式の記事が多く、好意的に偏っている可能性がある点にご注意ください。",
  },
  {
    q: "面談は土日や夜間でもできますか？オンラインで完結しますか？",
    a: "公式FAQは「平日夜間や土曜日も面談を実施」「面談形式はオンライン（ZoomやGoogle Meetなど）が中心」と明記しています。日曜の可否は記載がないため、希望する場合は日程調整時に確認してください。詳細は無料キャリア面談の解説記事にまとめています。",
  },
  {
    q: "未経験でも利用できますか？",
    a: "公式サイトはエンジニア経験者向けの訴求が中心です。公式の求人検索で「職種未経験歓迎」に該当する公開求人は86件、「業界未経験歓迎」は157件でした（公開求人6,195件中・2026年11月19日 当サイト確認）。実務未経験の場合は事前に支援可否を確認するか、未経験対応を明記する他サービスとの併用をおすすめします。",
  },
  {
    q: "年収アップ平均144万円というのは本当ですか？",
    a: "公式サイトが公表している数値ですが、「2026年3月に内定承諾をし、年収アップを実現された方の平均実績」という条件付きです。全利用者の平均ではない点に注意してください。同じ期間に内定を承諾した人のうち年収が上がった人の割合（年収アップ成功率）は86%と公表されています。年代別では、公式トップページが「20代・30代ともに平均100万円以上」、サービス紹介ページが「20代平均120万円、30代平均160万円」と記載しています（いずれも2026年11月19日確認）。",
  },
  {
    q: "テックゴーを退会するにはどうすればよいですか？",
    a: "公式サイトに退会専用の手続きページは見当たりません（2026年11月19日確認）。利用をやめる場合は、担当アドバイザーに利用停止の意思を連絡するのが一般的な方法です。登録情報の削除を求める場合は、運営会社MyVisionのプライバシーポリシー（第9条・第10条）に訂正・削除と利用停止の手続きが定められており、同ポリシー末尾のお問い合わせ窓口が案内先です。伝え方の例は無料キャリア面談の解説記事の「断り方」にまとめています。",
  },
  {
    q: "他のエージェントと併用してもいいですか？",
    a: "併用は可能です。テックゴーは2025年開始の新しいサービスのため、IT特化大手のレバテックキャリアや求人量の多いdoda ITエンジニアなどと併用し、提案の質と求人の幅を比較しながら進めるのが現実的です。",
  },
  {
    q: "どんな企業の求人がありますか？",
    a: "公式サイトによれば求人は10,000件以上（2026年8月時点の公開・非公開の合計）で、メガベンチャー・大手事業会社・ITコンサルなどをカバーしています。非公開求人のほか、独占選考ルートや面接確約求人があると公表されています。具体的にどの企業を紹介できるかは経歴によるため、面談で確認するのが確実です。",
  },
  {
    q: "地方在住でも利用できますか？リモート求人はありますか？",
    a: "面談はオンライン中心（Zoom・Google Meet等）のため地方からでも利用できます。公式の求人検索は47都道府県で検索できますが、公開求人6,195件のうち東京都を勤務地に含む求人が4,391件（約71%）、大阪府は766件、愛知県は510件、福岡県は370件でした。働き方の条件では「リモート可」が3,048件、「フルリモート（出社なし）」が115件です（2026年11月19日 当サイト確認）。フルリモートを希望する場合は、面談時に条件として明確に伝えてください。",
  },
  {
    q: "転職までどのくらいの期間がかかりますか？",
    a: "公式FAQによれば、登録から内定獲得までの期間は平均1〜3ヶ月程度です。早期の転職を希望する場合は1〜2ヵ月程度、じっくり比較検討する場合は3〜6ヵ月程度、退職交渉に時間がかかる場合はスケジュールに合わせて調整するとされています。",
  },
];

const related = [
  {
    name: "テックゴーの無料キャリア面談を解説",
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
          テックゴーの評判・口コミは？年収アップ実績と求人の内訳を検証【2026年11月】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年11月19日（公式の実績値・求人数・会社概要を再確認し、公開求人と転職成功事例を集計） ｜ MyVision運営のITエンジニア特化エージェントを公式情報と二次情報で検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          テックゴー（TechGo）は、株式会社MyVisionが運営するITエンジニア特化の転職エージェントです。本記事では公式サイトの公表情報（実績数値は注記条件まで確認）、厚生労働省 人材サービス総合サイトの許可情報、当サイトが集計した公開求人の内訳と評判記事10本の評価をもとに、30代・40代ミドルエンジニアの視点で特徴・評判・向き不向きを整理します。架空の体験談や星評価は掲載せず、出典のある情報のみを扱います。
        </p>
        <DataNote
          surveyedAt="2026年11月"
          sources={[
            "テックゴー公式サイト（トップ・サービスのご紹介・FAQ・ご利用の流れ・会社概要・転職成功事例・求人検索）",
            "厚生労働省 人材サービス総合サイト（職業紹介事業所検索）",
            "株式会社MyVision 会社情報・プライバシーポリシー",
            "「テックゴー 評判」上位の評判記事10本（2026年10月15日集計）",
          ]}
        />

        {/* 評判の要点 */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">テックゴーの評判の要点</h2>
            <p className="text-sm text-blue-900 mb-3">
              テックゴーの評判は、
              <span className="font-bold">
                面接対策と年収交渉への評価が高い一方、未経験者と首都圏以外での転職には向きにくい
              </span>
              という内容に集約されます。当サイトが集計した評判記事10本では、面接対策・年収交渉は10本すべてで良い評価、未経験は対象外という指摘も10本すべてに見られました。
            </p>
            <ul className="text-sm text-blue-900 space-y-1 mb-4">
              <li>
                ・公式公表の年収アップは平均144万円（2026年3月に内定承諾し年収アップした人の平均）、年収アップ成功率は86%（同期間の内定承諾者）です。
              </li>
              <li>
                ・公開求人は6,195件で、約71%が東京都を勤務地に含みます。フルリモートは115件です（2026年11月19日 当サイト集計）。
              </li>
              <li>
                ・公式の転職成功事例12件はすべて28〜35歳で、40代以上の事例は掲載されていません。
              </li>
              <li>・登録から入社後フォローまで完全無料です（公式FAQ明記）。面談はオンライン中心です。</li>
            </ul>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              <div className="bg-white rounded-lg p-3 border border-green-200">
                <p className="font-bold text-green-700 mb-1">向いている人</p>
                <p className="text-slate-600 leading-relaxed">
                  開発・インフラ・PM等の実務経験があり、模擬面接と年収交渉の支援を受けながら首都圏の求人を中心に探したい20〜30代のエンジニア
                </p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-red-200">
                <p className="font-bold text-red-700 mb-1">向いていない人</p>
                <p className="text-slate-600 leading-relaxed">
                  実務未経験の方、首都圏以外やフルリモートに限定して探したい方、40代以上で同年代の支援実績を重視する方（公式の事例掲載なし）
                </p>
              </div>
            </div>
          </div>
        </section>

        <TechgoCta />

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
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ表（2026年11月19日時点）</h2>
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
                公式は選考対策ステップで「模擬面接を何度も実施」と明記しています。応募手続きの代行、内定後のオファー年収交渉（公表の年収アップ成功率86%・2026年3月の内定承諾者）まで一気通貫で伴走する設計です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">
                3. 求人1万件以上・独占選考ルート・面接確約求人
              </h3>
              <p className="text-sm text-petrol-deep">
                公式によれば求人は10,000件以上（2026年8月時点の公開求人・非公開求人の合計）で、メガベンチャー・大手事業会社・ITコンサルなどをカバーします。非公開求人に加え、独占選考ルートや面接確約求人があると公表されています。公式サイトでは企業ごとの1day選考会も告知されており、2026年11月19日時点のトップページには受付中の選考会が6件表示されていました。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">
                4. 平日夜間・土曜対応のオンライン無料キャリア面談
              </h3>
              <p className="text-sm text-petrol-deep">
                面談はZoom・Google Meetなどのオンラインが中心で、平日夜間・土曜も実施します（公式FAQ）。転職意向が固まっていない段階の相談も可能と明記されており、在職中でも動きやすいのが特徴です。面談の流れ・準備は
                <Link href="/review/techgo-consultation/" className="underline hover:no-underline">
                  無料キャリア面談の解説
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
            紹介記事では数値だけが独り歩きしがちなため、公式サイトの注記条件まで含めて正確に整理します（2026年11月19日時点の公式サイト記載。2026年7月時点の「平均138万円・年収交渉成功率100%」から更新されています）。
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
                    年収アップ金額 平均144万円
                  </td>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">
                    「2026年3月に内定承諾をし、年収アップを実現された方の平均実績」＝特定の1ヶ月間の、かつ年収が上がった人に限った平均です。全利用者平均ではありません。同期間の内定承諾者のうち年収が上がったのは86%（公式）で、残り14%は上がっていません。
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-bold">
                    20代・30代ともに平均100万円以上の年収アップ
                  </td>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">
                    公式トップページの記載で、注記は※1（2026年3月の内定承諾者）と同じです。サービス紹介ページには「20代平均120万円、30代平均160万円」との記載があり、こちらには集計期間の注記がありません。
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-bold">
                    入社半年後の定着率 約97%
                  </td>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">
                    「2025年5月〜2026年3月に入社された方を対象に、入社6か月時点の在籍状況を集計」。11ヶ月間の入社者に限った値です。
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-bold">
                    8割以上が在職中に転職を決定／約半数が複数内定
                  </td>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">
                    「2025年6月〜2026年7月に内定を承諾された方を対象に集計」。いずれも内定承諾者を母数とした割合で、登録者全体の割合ではありません。
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-bold">
                    求人10,000件以上
                  </td>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">
                    「2026年8月時点の公開求人・非公開求人の合計件数」。公式サイトの求人検索で閲覧できる公開求人は6,195件でした（2026年11月19日 当サイト確認）。差分は非公開求人と時点の違いによるものと考えられますが、内訳は公表されていません。
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-bold">
                    年収交渉成功率 100%（旧表記）
                  </td>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">
                    2026年7月時点の公式トップには「2025年9月時点実績」として記載がありましたが、2026年11月19日時点の公式トップ・サービス紹介ページには記載がありません。現行の公表値は上記の「年収アップ成功率86%」です。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            なお、一部の紹介記事に見られる「年収アップ率92%」「95%」などの数値は、当サイト調査時点（2026年11月19日）で公式サイトに記載を確認できませんでした。本記事では公式サイトで確認できた数値のみを扱います。
          </p>
        </section>

        {/* 公開求人の内訳 */}
        <section id="jobs" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            公開求人6,195件の内訳（2026年11月19日 当サイト集計）
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            評判記事では「地方の求人が少ない」「未経験は対象外」という指摘が多いため、当サイトが公式サイトの求人検索（tech-go.jp/jobs）で条件ごとの「募集中の求人」件数を確認しました。1件の求人が複数の勤務地を持つ場合があるため、勤務地別の件数の合計は総数と一致しません。
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-3 py-2 text-left border-b border-slate-200">勤務地</th>
                    <th className="px-3 py-2 text-right border-b border-slate-200">公開求人</th>
                    <th className="px-3 py-2 text-right border-b border-slate-200">総数比</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["全体", "6,195件", "100%"],
                    ["東京都", "4,391件", "70.9%"],
                    ["大阪府", "766件", "12.4%"],
                    ["神奈川県", "694件", "11.2%"],
                    ["愛知県", "510件", "8.2%"],
                    ["埼玉県", "390件", "6.3%"],
                    ["福岡県", "370件", "6.0%"],
                    ["千葉県", "312件", "5.0%"],
                    ["広島県", "235件", "3.8%"],
                    ["兵庫県", "233件", "3.8%"],
                    ["静岡県", "211件", "3.4%"],
                    ["宮城県", "207件", "3.3%"],
                    ["北海道", "206件", "3.3%"],
                    ["京都府", "193件", "3.1%"],
                    ["沖縄県", "144件", "2.3%"],
                  ].map(([k, v, r], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="px-3 py-2 border-b border-slate-200">{k}</td>
                      <td className="px-3 py-2 border-b border-slate-200 text-right whitespace-nowrap">{v}</td>
                      <td className="px-3 py-2 border-b border-slate-200 text-right whitespace-nowrap">{r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-3 py-2 text-left border-b border-slate-200">条件（公式の検索条件名）</th>
                    <th className="px-3 py-2 text-right border-b border-slate-200">公開求人</th>
                    <th className="px-3 py-2 text-right border-b border-slate-200">総数比</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["リモート可", "3,048件", "49.2%"],
                    ["管理職・マネージャー候補", "529件", "8.5%"],
                    ["業界未経験歓迎", "157件", "2.5%"],
                    ["フルリモート（出社なし）", "115件", "1.9%"],
                    ["土日・夜間面接対応", "107件", "1.7%"],
                    ["オンライン面接完結", "97件", "1.6%"],
                    ["職種未経験歓迎", "86件", "1.4%"],
                  ].map(([k, v, r], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                      <td className="px-3 py-2 border-b border-slate-200">{k}</td>
                      <td className="px-3 py-2 border-b border-slate-200 text-right whitespace-nowrap">{v}</td>
                      <td className="px-3 py-2 border-b border-slate-200 text-right whitespace-nowrap">{r}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="text-sm text-slate-600 leading-relaxed space-y-2">
            <p>
              集計結果から、評判記事の「地方の求人が少ない」という指摘は公開求人の分布とも一致します。東京都を勤務地に含む求人が約7割を占め、東京都以外で最も多い大阪府でも766件です。一方「リモート可」は約半数あり、首都圏外に住みながらリモート中心で働く選択肢は一定数あります。出社なしの「フルリモート」に限ると115件まで絞られます。
            </p>
            <p>
              未経験向けの条件（職種未経験歓迎86件・業界未経験歓迎157件）は合わせても公開求人の数%にとどまり、「経験者向け」という評判と整合します。40代以降の方に関係する「管理職・マネージャー候補」は529件でした。
            </p>
            <p className="text-xs text-slate-500">
              ※件数は公式サイトの各検索結果ページに表示される「募集中の求人」の数です（2026年11月19日確認）。非公開求人は含みません。求人の入れ替わりにより日々変動するため、目安としてご覧ください。
            </p>
          </div>
        </section>

        {/* 公式の転職成功事例 */}
        <section id="cases" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            公式の転職成功事例12件の内訳（2026年11月19日 当サイト集計）
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            公式サイトの「転職成功事例」ページ（tech-go.jp/success-stories）に掲載されている12件について、年齢と転職前後の年収を当サイトで整理しました。運営会社が選んで掲載している事例のため、利用者全体の傾向を示すものではありません。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-3 py-2 text-left border-b border-slate-200">項目</th>
                  <th className="px-3 py-2 text-left border-b border-slate-200">集計結果</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["掲載件数", "12件（すべて男性）"],
                  ["年齢", "28〜35歳（20代4件・30代8件）。40代以上の事例は掲載なし"],
                  ["転職前の年収", "450万〜850万円"],
                  ["年収の増加額", "50万〜200万円（中央値145万円）"],
                  ["年収1,000万円に到達した事例", "2件（いずれも850万円から）"],
                ].map(([k, v], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                    <td className="px-3 py-2 border-b border-slate-200 whitespace-nowrap">{k}</td>
                    <td className="px-3 py-2 border-b border-slate-200">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            掲載事例は30代前半までに集中しており、40代以上の方が同年代の支援実績を確かめたい場合は、公式サイトから判断できる材料がありません。面談時に「40代の支援実績と紹介可能な求人の年収帯」を具体的に確認することをおすすめします。
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
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">資本金1億円・従業員446名（公式会社概要・2026年11月19日確認。従業員数の時点注記なし）</td>
                </tr>
                <tr className="bg-white">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200 align-top">許可番号</th>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">有料職業紹介事業 13-ユ-314719（厚生労働省許可・許可年月日 2022年11月1日）</td>
                </tr>
                <tr className="bg-slate-50">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200 align-top">厚生労働省の掲載情報</th>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">就職者数（4ヶ月以上の有期・無期）1,931人、うち無期1,931人／無期雇用のうち就職後6ヶ月以内の離職者数 0人／手数料返戻金制度 有（人材サービス総合サイト・令和8年11月1日現在の一覧表示）</td>
                </tr>
                <tr className="bg-slate-50">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200 align-top">グループサービス</th>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">MyVision（ITコンサル転職）／ビルドジョブ（建設・2024年6月開始）／ツインプロ（会計士・税理士・2024年5月開始）／メーカーズジョブ（製造）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            厚生労働省の人材サービス総合サイトでは、許可番号13-ユ-314719で株式会社ＭｙＶｉｓｉｏｎが有効な有料職業紹介事業者として表示されます（2026年11月19日 当サイト検索）。上表の就職者数は事業主単位の数字で、コンサル転職のMyVisionなどグループの他サービス経由の就職者を含むため、テックゴー単独の実績ではありません。対象年度は一覧画面に明記されていません。また、同サイトの事業所所在地は東京都千代田区内幸町の住所で、公式会社概要の港区虎ノ門の住所とは異なります（届出情報の更新時期の違いによるものと考えられます）。
          </p>
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
                （開発・インフラ・データ/AI・PM等）→ テックゴーです。SE・PG・社内SE・Web系・インフラ・データ/AI・PM/PL・QAといった職種を対象としています。
              </li>
              <li>
                <span className="font-bold text-slate-700">エンジニアからITコンサルタントへ転身したい</span>
                → 本体のMyVisionが専門領域です。コンサルファームの選考（ケース面接など）に特化した対策が受けられます。
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
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">模擬面接を何度も実施・年収アップ成功率86%（2026年3月の内定承諾者）・独占/面接確約求人</td>
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
            使い分けの目安：口コミの蓄積・求人量の実績を重視するならレバテックキャリアが軸です。そのうえで、模擬面接の回数や年収交渉の伴走を重視する人、ITコンサルへの転身も視野に入れる人は、テックゴーを併用して提案を比較する形が相性のよい組み合わせです。一般に転職エージェントは2〜3社の併用が推奨されており、担当者との相性を比較できること自体に価値があります。
          </p>
        </section>

        {/* 良い評判 */}
        <section id="good" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">良い評判の傾向（出典明記）</h2>
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


        {/* 評判記事10本の集計 */}
        <section id="tally" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">評判記事10本では何が挙がっている？（2026年10月15日 集計）</h2>
          <p className="text-sm text-slate-600 mb-4">
            「テックゴー 評判」で上位に出る評判記事10本を当サイトが読み、良い評価・悪い評価が何本の記事で挙がっているかを数えました。口コミの出所は記事によって異なり、Googleマップ（BLITZキャリア・ご自身の転職エージェント）、クラウドソーシングのアンケートと担当者取材（キャリアアップステージ）、自社アンケート（トレオンメディア）のほかは出所の記載がありません。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr><th className="px-3 py-2 text-left border-b border-slate-200">評価</th><th className="px-3 py-2 text-left border-b border-slate-200">挙げた記事</th></tr>
              </thead>
              <tbody>
                {[
                  ["◎ 面接対策・模擬面接が手厚い", "10本／10本"],
                  ["◎ 年収交渉・年収アップ", "10本／10本"],
                  ["◎ 求人の質（メガベンチャー・大手・独占選考ルート）", "9本／10本"],
                  ["◎ アドバイザーがIT業界に詳しい", "8本／10本"],
                  ["◎ 1Day選考会がある", "7本／10本"],
                  ["◎ 対応が早い・連絡手段が柔軟", "6本／10本"],
                  ["△ 未経験は求人が限られる・対象外", "10本／10本"],
                  ["△ 大手より求人数が少ない", "7本／10本"],
                  ["△ 担当者による差・相性", "5本／10本"],
                  ["△ 地方の求人が少ない", "4本／10本"],
                  ["△ 連絡が多い・押しが強い", "4本／10本"],
                  ["△ 連絡が遅い・放置された", "4本／10本"],
                ].map(([k, v], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}><td className="px-3 py-2 border-b border-slate-200">{k}</td><td className="px-3 py-2 border-b border-slate-200 whitespace-nowrap">{v}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
            <p className="text-sm font-bold text-amber-900 mb-2">記事で出回っている数字と、公式の現行表記（2026年10月15日 tech-go.jp で確認・11月19日に再確認し変更なし）</p>
            <ul className="text-sm text-amber-900 space-y-1 leading-relaxed">
              <li>・<strong>年収アップ金額</strong>：公式は平均144万円です（2026年3月に内定承諾し年収アップした人の平均）。記事では138万・145万・156万円など、時期や集計範囲の違う数字が混在しています（156万円は運営会社MyVision全体の数字と注記した記事あり）</li>
              <li>・<strong>「年収交渉成功率100%」</strong>：4本の記事が記載していますが、公式トップの現行表記は<strong>「年収アップ成功率86%」</strong>（同期間の内定承諾者のうち年収アップした人の割合）で、100%の表記はありません</li>
              <li>・<strong>「年収アップ率95%」</strong>：3本の記事が記載していますが、公式の表記には見当たりません</li>
              <li>・<strong>求人数</strong>：公式は「ITエンジニア向け求人が10,000件以上」（2026年8月時点の公開・非公開の合計）。記事では約5,800件・6,354件など別の数字もあり、これらは公式サイトの公開求人の件数を数えたものとみられます（当サイトの11月19日の確認では6,195件）</li>
              <li>・<strong>Googleマップの評価</strong>：一部の記事が星4.7〜4.8、口コミ「600件以上」「764件」などと紹介していますが、BLITZキャリアやOUTSIDEMAGAZINEの注記では株式会社MyVisionとしての評価とされています。同社はコンサル転職のMyVisionも運営しているため、テックゴー利用者だけの評価とは限りません。当サイトでは件数・評価を独自に確認できていないため、数値は掲載していません</li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            集計した記事：
            <a href="https://exidea.co.jp/blog/job/job-change/tech-go/" target="_blank" rel="nofollow noopener" className="underline">HonNe（EXIDEA）</a>・
            <a href="https://blitzcareer.jp/tech-go-review/" target="_blank" rel="nofollow noopener" className="underline">BLITZキャリア</a>・
            <a href="https://tenshoku.asiro.co.jp/engineer/181324/" target="_blank" rel="nofollow noopener" className="underline">キャリアアップステージ（アシロ）</a>・
            <a href="https://tleon.co.jp/media/techgo-review/" target="_blank" rel="nofollow noopener" className="underline">トレオンメディア</a>・
            <a href="https://cb-tokyo.co.jp/career/1559" target="_blank" rel="nofollow noopener" className="underline">キャリア・ブレーン</a>・
            <a href="https://sakufuri.jp/media/tech-go/" target="_blank" rel="nofollow noopener" className="underline">サクフリ</a>・
            <a href="https://your-tenshoku.com/article/tech-go/" target="_blank" rel="nofollow noopener" className="underline">ご自身の転職エージェント</a>・
            <a href="https://talentsquare.co.jp/career/techgo-reputation/" target="_blank" rel="nofollow noopener" className="underline">タレントスクエア</a>・
            <a href="https://freedash.jp/tech-go/" target="_blank" rel="nofollow noopener" className="underline">フリーダッシュ</a>・
            <a href="https://yield-marketing.co.jp/blog/tech-go/" target="_blank" rel="nofollow noopener" className="underline">イールドマーケティング</a>
            （2026年10月15日閲覧）。多くは紹介報酬を受け取る形式の記事で、評価が好意的に偏っている可能性があります。分類は当サイトの判断で、サービス紹介の文だけで評価になっていない記述は数えていません。
          </p>
        </section>

        {/* ミドル視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            30代・40代エンジニアが使う場合の視点
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              当サイトはミドルエンジニアの転職を扱う立場から、使い方を整理します。テックゴーの公表実績は20代+120万円・30代+160万円（サービス紹介ページ）と、経験を年収に反映させたい20〜30代への訴求が中心です。公式の転職成功事例12件も28〜35歳に限られ、40代向けの実績数値や事例は公表されていないため、その点は面談で直接確かめる必要があります。
            </p>
            <p>
              <span className="font-bold text-slate-700">30代の場合：</span>
              公表されている年代別実績（平均+160万円）のボリュームゾーンに当たります。模擬面接を何度も実施する選考対策と年収交渉の代行は、久しぶりの転職で面接勘が鈍っている30代には実利が大きいポイントです。IT特化大手のレバテックキャリアと併用し、提案求人と担当者の質を比較するのが堅実です。
            </p>
            <p>
              <span className="font-bold text-slate-700">40代の場合：</span>
              40代の実績数値は公表がなく、口コミの蓄積も少ないため、まず無料キャリア面談で「40代の支援実績と紹介可能な求人レンジ」を具体的に確認するのが先決です。公開求人のうち「管理職・マネージャー候補」の条件に該当するのは529件（2026年11月19日 当サイト確認）で、マネジメント経験を活かす求人も一定数あります。管理職・高年収レンジを狙うならJACリクルートメントやビズリーチを軸に据え、テックゴーはITコンサル系を含む選択肢を広げる併用先として使うのが現実的です。
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
              テックゴーの無料キャリア面談 解説
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
            登録から入社後フォローまで完全無料です。平日夜間・土曜のオンライン面談で、まずは市場価値と選択肢を確認してみませんか？
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
        <TechgoCta heading="まずは無料キャリア面談で相性を確かめる" buttonText="テックゴーの無料キャリア面談を予約する（公式）" />

        {/* 評判・口コミの参照元 */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-slate-800 mb-3">評判・口コミの参照元</h2>
          <p className="text-xs text-slate-500 leading-relaxed mb-3">
            テックゴーは2025年開始の新しいサービスで、みん評などの独立系口コミサイトでの蓄積は限定的なため、本記事は個別スコアを引用していません。評判の傾向は、公式サイトの公表情報と、上の「評判記事10本の集計」に挙げた各記事を参照して要約したものです。公式の実績値・求人件数・会社概要・許可情報の最終確認日：2026年11月19日。
          </p>
          <ul className="text-sm space-y-2 text-slate-600 list-disc pl-5">
            {[
              ["https://tech-go.jp/", "テックゴー公式サイト トップ（年収アップ実績・定着率・求人数の注記）"],
              ["https://tech-go.jp/service", "テックゴー公式 サービスのご紹介（年代別の年収アップ・よくあるご質問）"],
              ["https://tech-go.jp/service/flow", "テックゴー公式 ご利用の流れ"],
              ["https://tech-go.jp/success-stories", "テックゴー公式 転職成功事例"],
              ["https://tech-go.jp/jobs/search", "テックゴー公式 求人検索（公開求人の件数）"],
              ["https://tech-go.jp/about", "テックゴー公式 会社概要"],
              ["https://my-vision.co.jp/terms/privacy", "株式会社MyVision プライバシーポリシー"],
              ["https://jinzai.hellowork.mhlw.go.jp/JinzaiWeb/GICB101010.do?action=initDisp&screenId=GICB101010", "厚生労働省 人材サービス総合サイト（職業紹介事業所検索で許可番号13-ユ-314719を検索）"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} rel="nofollow noopener" target="_blank" className="text-petrol underline hover:no-underline">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </section>

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
