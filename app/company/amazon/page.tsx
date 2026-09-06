import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/amazon/" },
  title: "Amazon／AWS Japanの転職難易度と年収【2026年】OLP面接対策・エンジニア転職ガイド",
  description:
    "アマゾンジャパン／AWSジャパンへのエンジニア転職を、公式採用情報とlevels.fyi・OpenWork集計値で解説。Our Leadership Principles面接、Bar Raiser、年収レンジ、30代40代の現実までまとめました。",
};

const toc = [
  { id: "conclusion", label: "結論：難易度と向くエンジニア" },
  { id: "basic", label: "基本データ" },
  { id: "hiring", label: "エンジニア採用の特徴" },
  { id: "stack", label: "技術スタック・開発文化" },
  { id: "salary", label: "年収データ（出典付き）" },
  { id: "flow", label: "選考フロー" },
  { id: "interview", label: "面接で重視される点（OLP）" },
  { id: "review", label: "口コミ傾向" },
  { id: "midage", label: "30代・40代から見たAmazon" },
  { id: "agents", label: "おすすめエージェント" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basicData: [string, string][] = [
  ["企業名", "アマゾンジャパン合同会社 / アマゾン ウェブ サービス ジャパン合同会社"],
  ["業種", "EC・クラウドコンピューティング（AWS）"],
  ["主な所在地", "東京（目黒・品川ほか）"],
  ["主な部門", "AWS（クラウド）／リテール・デバイス・広告などのプロダクト開発"],
  ["評価軸", "Our Leadership Principles（OLP・16項目）"],
  ["技術スタック", "Java / Python / TypeScript / AWS各種（Lambda・DynamoDB・ECS等）/ React 等"],
];

const salaryRows: [string, string][] = [
  ["L4（SDE I・若手）", "総報酬 中央値 約1,267万円（サンプル内訳の中央値: 基本給約1,027万・株式約180万・賞与約40万）"],
  ["L5（SDE II・中堅）", "総報酬 中央値 約1,939万円（サンプル内訳の中央値: 基本給約1,509万・株式約498万・賞与中央値0円）"],
  ["L6（SDE III・シニア）", "総報酬 中央値 約2,295万円（サンプル内訳の中央値: 基本給約1,741万・株式約314万・賞与中央値0円・サンプル4件）"],
  ["L7（Principal）", "上位レンジ（公開レポート少・変動大）"],
];

const faqs = [
  {
    q: "Amazon／AWSジャパンの面接で最も重視されるのは？",
    a: "Our Leadership Principles（OLP・16項目）への適合性です。AWS公式の採用案内でも、これまでどのリーダーシップ・プリンシプルをどう発揮したかを振り返り説明する準備が推奨されています。Customer Obsession、Ownership、Earn Trust などが軸になります。",
  },
  {
    q: "選考フローはどうなっていますか？",
    a: "AWS公式案内によると、書類選考→1次面接（1人・45〜60分、ポジションによりOnline Assessmentあり）→ループ面接（複数面接官・各60分）→内定、という流れです。応募から内定まで1〜1.5か月程度かかる方が多いと公式に記載されています。現在はほぼオンライン実施です。",
  },
  {
    q: "Bar Raiser（バーレイザー）とは？",
    a: "採用対象チーム外の訓練された面接官が面接に加わり、採用基準の一貫性と質を担保する仕組みとして広く知られています。短期の人手不足で基準を下げないための役割です。",
  },
  {
    q: "エンジニアの年収はどのくらい？",
    a: "アマゾンジャパン／AWSジャパンは有価証券報告書を公表しておらず公式平均年収はありません。levels.fyi（2026年9月6日時点・日本拠点SDE集計）では、SDE総報酬の中央値 約1,480万円、L4 約1,267万円、L5 約1,939万円、L6 約2,295万円。RSU（株式報酬）は1年目5%・2年目15%・3〜4年目40%ずつのバックロード型で、初年度は基本給＋サインオンボーナス中心になりやすい点が特徴です。",
  },
  {
    q: "AWS部門とリテール部門、どちらがおすすめ？",
    a: "クラウド技術を深めたいならAWS（詳しくは AWSジャパン特化ページ /company/aws-japan/ を参照）、ECやデバイス等のプロダクト志向ならリテール／デバイス部門が候補です。どちらもOLPベースの評価とオーナーシップ文化は共通です。希望は応募ポジションで明確にしておくとミスマッチが減ります。",
  },
  {
    q: "コーディング面接はありますか？",
    a: "ポジションによりますが、ソフトウェアエンジニア職ではコーディング／技術面接とOLPベースの行動面接が組み合わされるのが一般的に知られています。データ構造・アルゴリズムの基礎と、設計・トレードオフを説明できる準備が有効です。",
  },
  {
    q: "ワークライフバランスはどうですか？",
    a: "OpenWorkのクチコミでは「有給消化率が高い」「働きやすい」という声がある一方、職種・部署・時期（大型イベント前など）で負荷が変わるとの指摘もあります。配属チームの実態を面接の逆質問で確認するのがおすすめです。",
  },
  {
    q: "英語は必須ですか？",
    a: "AWS・グローバル組織を中心に英語を使う場面が多く、ポジションによっては必須です。ドキュメント文化が強く、文章で論理的に説明する力（Writing）も重視されると一般に言われています。",
  },
];

const sources = [
  "AWS 採用プロセスのサポート（公式）",
  "Amazon Our Leadership Principles（公式）",
  "levels.fyi（2026年9月6日時点・ユーザー投稿集計）",
  "OpenWork アマゾンジャパン／AWSジャパン（社員クチコミ集計）",
];

export default function AmazonCompanyPage() {
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
        title="Amazon／AWS Japan エンジニア転職ガイド【2026年版】"
        description="アマゾンジャパン／AWSジャパンへのエンジニア転職を、公式採用情報とlevels.fyi・OpenWork集計値で解説。OLP面接・Bar Raiser・年収レンジ・30代40代の現実までまとめました。"
        url="/company/amazon/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "企業別ガイド", href: "/company/" },
          { name: "Amazon Japan" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Amazon／AWS Japan エンジニア転職ガイド【2026年版】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年7月 ｜ OLP面接・Bar Raiser・年収を公式情報＋集計値で読み解く
        </p>

        {/* 直答box (P0/company年収) */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】Amazon／AWSジャパンのエンジニア年収は？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: アマゾンジャパン／AWSジャパンは有価証券報告書を公表しておらず公式の平均年収は非公表です。levels.fyi（2026年9月6日時点）ではSDE総報酬の中央値 約1,480万円が目安です。</strong></p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・ソフトウェアエンジニアの総報酬（levels.fyi・2026年9月6日時点、日本拠点SDE集計）：中央値 約1,480万円、L4 約1,267万円、L5 約1,939万円、L6 約2,295万円。中央値は7月約1,679万→8月約1,583万→9月約1,480万と3ヶ月連続で下方修正されており、投稿ベースの集計値は変動が大きい点に注意。</li><li>・RSU（株式報酬）は1年目5%／2年目15%／3〜4年目40%ずつのバックロード型。初年度は基本給＋サインオンボーナス中心になりやすい構造です。</li><li>・いずれもユーザー投稿ベースの集計値で、為替・株価により円換算額は変動します。</li></ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-6">
          アマゾンジャパン合同会社／アマゾン ウェブ サービス
          ジャパン合同会社（AWSジャパン）は、ECやデバイス、そして世界最大級のクラウドAWSを支えるソフトウェアエンジニアを中途採用しています。
          本ページは、AWS公式の採用プロセス案内とAmazonのOur Leadership
          Principles、報酬集計サイトlevels.fyi、社員クチコミサイトOpenWorkを出典として明示し、
          30代・40代のミドルエンジニアが現実的に判断できる形で整理しています。年収は一次情報が存在しないため、出典・時点・変動の大きさを必ず添えています。
        </p>

        <DataNote surveyedAt="2026年8月" sources={sources} />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 text-sm mb-3">目次</p>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
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
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-xl p-6">
            <h2 className="text-xl font-bold text-blue-900 mb-3">結論：難易度と向くエンジニア</h2>
            <p className="text-blue-900 text-sm leading-relaxed mb-3">
              Amazon／AWSジャパンのエンジニア中途採用は<strong>最難関クラス</strong>ですが、Googleと比べると
              <strong>OLP（行動・価値観）の比重が大きい</strong>のが特徴です。次の3点が揃う人に向きます。
            </p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>① <strong>オーナーシップ</strong>を持ってプロジェクトを完遂した具体的エピソードを語れる</li>
              <li>② <strong>AWS／分散システム</strong>の設計・運用に関わった経験がある</li>
              <li>③ コーディング／技術面接の基礎と、<strong>英語・文章での論理説明</strong>に抵抗がない</li>
            </ul>
            <p className="text-blue-900 text-sm leading-relaxed mt-3">
              OLP対策は
              <Link href="/knowledge/behavioral/" className="text-petrol-deep underline font-medium">行動面接（STAR法）の準備</Link>
              、技術面は
              <Link href="/knowledge/coding-test/" className="text-petrol-deep underline font-medium">コーディングテスト対策</Link>
              から着手するのが王道です。
            </p>
          </div>
        </section>

        {/* 基本データ */}
        <section id="basic" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ</h2>
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
            ※技術スタックは公式のAWS技術情報・採用要項から一般に知られている範囲。担当領域は組織・ポジションで異なります。
          </p>
        </section>

        {/* 採用の特徴 */}
        <section id="hiring" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">OLP（Our Leadership Principles）が評価の核</h3>
              <p className="text-sm text-petrol-deep">
                Amazonは全社員がリーダーという考えのもと、16項目のOLPに沿って行動することが期待されます。面接質問の多くが特定のOLPへの適合を見るために設計されている、と一般に知られています。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Bar Raiser 制度</h3>
              <p className="text-sm text-petrol-deep">
                対象チーム外の訓練された面接官（Bar
                Raiser）が面接に加わり、採用基準の一貫性と質を担保します。人手不足でも基準を下げない仕組みとして知られています。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">少人数・自律のチーム文化</h3>
              <p className="text-sm text-petrol-deep">
                小さなチームが設計・開発・運用までオーナーシップを持って担う文化（いわゆるTwo-Pizza
                Team）が知られ、サービスを一気通貫で見られる経験が積めます。
              </p>
            </div>
          </div>
        </section>

        {/* 技術スタック */}
        <section id="stack" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック・開発文化</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-3">
            Amazonは自社クラウドAWSをフル活用し、Java・Python・TypeScriptなどでサービスを構築・運用していることが、公式のAWS技術ドキュメントや採用要項から広く知られています。
            ドキュメント重視（PR/FAQやナラティブ文化）で、口頭プレゼンより文章で論点を整理する文化が知られています。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>サーバーレス／マネージドサービス（Lambda・DynamoDB・ECS等）を前提とした設計</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>運用・可用性・コストまで自チームで責任を持つオペレーション文化</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><Link href="/skill/aws/" className="text-petrol hover:underline">AWS</Link>・<Link href="/skill/java/" className="text-petrol hover:underline">Java</Link>・<Link href="/skill/python/" className="text-petrol hover:underline">Python</Link>の実務経験が評価されやすい</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>文章で設計判断を残す文化のため、ドキュメンテーション力が活きる</li>
          </ul>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（出典付き）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            アマゾンジャパン／AWSジャパンは<strong>有価証券報告書を公表しておらず、公式の平均年収はありません</strong>。
            以下は報酬集計サイトの数値で、<strong>ユーザー投稿ベースで変動が大きい</strong>点に留意してください。
          </p>
          <ul className="space-y-2 text-sm text-slate-700 mb-5">
            <li>
              ・<strong>levels.fyi（2026年9月6日時点・日本拠点SDE集計）</strong>：SDE総報酬の中央値 約1,480万円（L4 約1,267万円／L5 約1,939万円／L6 約2,295万円）。基本給＋RSU＋ボーナスの合計。
            </li>
            <li>
              ・<strong>RSUの特徴</strong>：Amazonの株式付与は1年目5%／2年目15%／3年目40%／4年目40%の<strong>バックロード型</strong>。初年度は基本給＋サインオンボーナス中心になりやすく、年次が進むほど総報酬が伸びる構造です。
            </li>
          </ul>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">レベル（参考）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">総報酬の目安</th>
                </tr>
              </thead>
              <tbody>
                {salaryRows.map(([level, range], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{level}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            出典：levels.fyi（2026年9月6日時点・ユーザー投稿集計・1ドル=157.03円換算）。円換算は概算で為替・株価で変動します。等級の呼称・境界は目安です。内訳のサンプル中央値は総報酬中央値と算出母集団が異なるため合計は一致しません。
          </p>
          <div id="bonus" className="mt-6 bg-slate-50 border border-slate-200 rounded-xl p-5">
            <h3 className="font-bold text-slate-800 mb-2">ボーナス・RSU（株式報酬）の仕組み</h3>
            <p className="text-sm leading-7 text-slate-700 mb-2">
              Amazon／AWSジャパンの報酬は「基本給＋RSU＋（入社時のみ）サインオンボーナス」の構成で、<strong>日本企業のような年2回の定期賞与はなく、現金ボーナスの比率は小さい</strong>のが特徴です。levels.fyi（2026年9月6日時点・日本拠点SDE集計）のサンプル内訳中央値では、現金賞与は0〜約40万円に対し、株式（RSU）はL4約180万円・L5約498万円と大きく、報酬に占める株式の比重が高い構造です。
            </p>
            <p className="text-sm leading-7 text-slate-700">
              RSUの権利確定は1年目5%／2年目15%／3〜4年目各40%のバックロード型のため、<strong>1〜2年目の現金収入はサインオンボーナスで補填される設計</strong>です。転職時のオファー比較では「4年トータルの総報酬」と「初年度の現金」を分けて見るのが失敗しないコツです。
            </p>
          </div>
          <p className="text-slate-600 text-sm mt-4">
            年収の考え方は
            <Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉のやり方</Link>
            、外資の総報酬構造は
            <Link href="/knowledge/offer-compare/" className="text-petrol hover:underline">オファー比較の考え方</Link>
            も参考にしてください。
          </p>
        </section>

        {/* 選考フロー */}
        <section id="flow" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式採用案内ベース）</h2>
          <ol className="space-y-3 text-sm text-slate-700">
            {[
              ["書類選考", "職務経歴をもとに選考。ポジションによりOnline Assessmentが課されることがあります。"],
              ["1次面接（Phone Screen）", "1人の面接官と45〜60分。技術とOLPの両面を確認します。"],
              ["ループ面接", "複数の面接官と各60分ずつ実施。コーディング／設計とOLPベースの行動面接の組み合わせ。Bar Raiserが加わります。"],
              ["内定", "条件提示。応募から内定まで1〜1.5か月程度かかる方が多いと公式に記載。現在はほぼオンライン実施。"],
            ].map(([title, desc], i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 w-7 h-7 rounded-full bg-petrol text-white font-bold flex items-center justify-center text-xs">{i + 1}</span>
                <div>
                  <p className="font-bold text-slate-800">{title}</p>
                  <p className="text-slate-600">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-xs text-slate-400 mt-3">出典：AWS「採用プロセスのサポート」（公式）。ポジションにより内容は異なります。</p>
        </section>

        {/* 面接で重視される点 */}
        <section id="interview" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（OLP）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-3">
            具体的な質問リストは公式には公開されていません。ここでは公式のOLPと、一般に知られている準備の方向性に留めて整理します。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><strong>Customer Obsession</strong>：顧客起点で考え行動した経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><strong>Ownership</strong>：担当範囲を超えて主体的に動いた経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><strong>Dive Deep / Earn Trust</strong>：データで深掘りし、信頼を築いた経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>各エピソードを<strong>STAR形式（状況・課題・行動・結果）</strong>で語れること（<Link href="/knowledge/behavioral/" className="text-petrol hover:underline">準備ガイド</Link>）</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>技術面はコーディング／<Link href="/knowledge/system-design/" className="text-petrol hover:underline">システムデザイン</Link>の基礎</li>
          </ul>
        </section>

        {/* 口コミ */}
        <section id="review" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミサイトでの評判傾向</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-3">
            OpenWork（アマゾンジャパン／AWSジャパン）の社員クチコミ集計では、次の傾向が見られます（出典に基づく傾向要約です）。
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-emerald-200 bg-emerald-50 rounded-lg p-5">
              <h3 className="font-bold text-emerald-800 text-sm mb-2">良い評判の傾向</h3>
              <ul className="space-y-1 text-sm text-emerald-900">
                <li>・有給消化率が高く福利厚生がしっかりという声</li>
                <li>・優秀な同僚と成長機会が多いという声</li>
                <li>・残業を強制されにくい部署もあるという声</li>
              </ul>
            </div>
            <div className="border border-amber-200 bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 text-sm mb-2">気になる点の傾向</h3>
              <ul className="space-y-1 text-sm text-amber-900">
                <li>・職種・部署で負荷の差が大きいとの指摘</li>
                <li>・成果・目標（クォータ等）へのプレッシャー</li>
                <li>・タスク管理次第で繁忙度が変わるという声</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典：OpenWork アマゾンジャパン合同会社／AWSジャパン合同会社（社員クチコミ集計・2026年7月25日時点参照）。</p>
        </section>

        {/* 30-40代視点 */}
        <section id="midage" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見たAmazon／AWS</h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              Amazonは<strong>OLPベースの行動面接の比重が大きい</strong>ため、30代・40代の「実務で何をどう判断し、やり切ったか」という蓄積がそのまま武器になりやすい企業です。
              GAFAの中では、純粋なアルゴリズム偏重というより「実績＋オーナーシップ」を語れる人にチャンスがあります。
            </p>
            <p>
              一方で、エピソードが抽象的だとOLP面接で評価されにくいのが落とし穴です。応募前に過去の主要プロジェクトを5〜8本、STAR形式で棚卸ししておくと安定します。
              AWS経験がある場合は、設計・運用・コスト最適化まで一気通貫で語れると強いです。
            </p>
            <p>
              準備は
              <Link href="/career/domestic-to-foreign/" className="text-petrol hover:underline">国内企業から外資系への転職</Link>
              、クラウド領域の伸ばし方は
              <Link href="/skill/aws/" className="text-petrol hover:underline">AWSスキルの転職市場</Link>
              、英語面は
              <Link href="/purpose/english/" className="text-petrol hover:underline">英語を使う仕事への転職</Link>
              を参考にしてください。
            </p>
          </div>
        </section>

        {/* エージェント */}
        <section id="agents" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Amazon／AWS転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "ビズリーチ", href: "/review/bizreach-it/", desc: "ハイクラス・スカウト型。外資ITを扱うヘッドハンターと接点を作りやすい。" },
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT/Web特化。技術職の選考対策・キャリアの棚卸しに強い。" },
              { name: "Geekly（ギークリー）", href: "/review/geekly/", desc: "IT/Web/ゲーム特化。提案スピードが速く、選択肢を素早く広げたい人向け。" },
            ].map((agent, i) => (
              <Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3>
                <p className="text-xs text-slate-500">{agent.desc}</p>
              </Link>
            ))}
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
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-12 text-center">
          <h2 className="text-xl font-bold mb-3">外資IT転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            OLP面接対策と非公開求人の把握から始めたい方は、ハイクラス・IT特化エージェントへの無料相談が出発点です。
          </p>
          <Link
            href="/review/bizreach-it/"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントを見る
          </Link>
        </section>

        {/* 関連記事 */}
        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "ITハイクラス転職の比較（年収750万円以上）", href: "/compare/highclass/" },
              { name: "IT企業の平均年収ランキング（有報57社）", href: "/salary/company-ranking/" },
              { name: "行動面接（STAR法）の準備", href: "/knowledge/behavioral/" },
              { name: "コーディングテスト対策", href: "/knowledge/coding-test/" },
              { name: "AWSスキルの転職市場", href: "/skill/aws/" },
              { name: "国内企業から外資系への転職", href: "/career/domestic-to-foreign/" },
              { name: "Google Japan 転職ガイド", href: "/company/google/" },
              { name: "Microsoft Japan 転職ガイド", href: "/company/microsoft/" },
              { name: "外資ITエンジニア年収ランキング【levels.fyi実測】", href: "/salary/gaishi-ranking/" },
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
