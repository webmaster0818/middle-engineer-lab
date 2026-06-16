import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "フィンテック業界へのエンジニア転職ガイド｜30代40代の戦略";
const DESC =
  "フィンテック（決済・融資・資産運用・暗号資産）へエンジニア転職する現実的な方法を解説。求められる技術とスキル、参入ルート、年収の考え方、30代40代の進め方を公的データで整理します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
};

const toc = [
  { id: "conclusion", label: "結論：フィンテック転職は現実的か" },
  { id: "overview", label: "フィンテック業界の概要" },
  { id: "trend", label: "技術トレンドと採用動向" },
  { id: "skills", label: "求められる技術・スキル" },
  { id: "routes", label: "参入ルート（職種×企業タイプ）" },
  { id: "salary", label: "年収傾向" },
  { id: "company-types", label: "代表的な企業タイプと例" },
  { id: "steps", label: "参入の進め方" },
  { id: "midlife", label: "30代・40代の視点" },
  { id: "agents", label: "相談先エージェント" },
  { id: "faq", label: "よくある質問" },
];

const skills = [
  ["バックエンド開発（Java/Kotlin/Go/Python）", "中核スキル", "決済・口座・取引などミッションクリティカルな処理を担う中心言語。求人で問われやすい"],
  ["API設計・マイクロサービス", "中核スキル", "オープンAPI連携や外部金融機関との接続が多く、堅牢なAPI設計力が重視される"],
  ["クラウド（AWS/GCP）・コンテナ", "中核スキル", "可用性とスケーラビリティが前提のため、インフラ・SRE的素養が評価されやすい"],
  ["セキュリティ・認証（OAuth/OIDC・暗号）", "差別化要素", "金融データを扱う以上、セキュア設計の知見は強い武器になる"],
  ["金融ドメイン知識（資金決済法・割販法など）", "差別化要素", "規制を踏まえた要件定義ができる人材は希少で、社内に不足しがち"],
  ["データ分析・ML（与信・不正検知）", "差別化要素", "SQL/Pythonでの与信モデルや不正検知はプロダクト価値に直結する"],
];

const routes = [
  ["バックエンドエンジニア", "決済・融資・資産運用SaaS", "API・トランザクション処理の堅牢性を担う中核。Web系経験者の王道ルート"],
  ["SRE・インフラエンジニア", "決済基盤・取引基盤", "高可用性が前提の領域。クラウド・監視・セキュリティ運用の経験が活きる"],
  ["データ／MLエンジニア", "与信・不正検知・スコアリング", "SQL・Pythonでのモデル開発。データ分析経験者に向く"],
  ["金融DX・社内SE／PM", "メガバンク・地銀・生損保のDX部門", "レガシー刷新やクラウド移行のPM。大規模PJ経験が活きる"],
];

const companyTypes = [
  ["フィンテックスタートアップ・上場企業", "決済・BNPL・家計簿・資産運用・法人向けSaaSなどの自社プロダクト。モダンな技術と裁量が魅力。マネーフォワード、freee、Plaid、LayerXなどが代表例", "スピード感・少人数開発に適応できる人"],
  ["決済・QRコード決済事業者", "コード決済や送金などのインフラ。トランザクション量が多く、可用性とスケーラビリティの設計力が問われる。PayPayなどが代表例", "高トラフィックの基盤開発に関心がある人"],
  ["ネット銀行・ネット証券・SBI系", "口座・取引・資産運用システム。金融商品取引法などの規制対応とシステム両面が求められる。SBIグループなどが代表例", "金融商品の知識を活かしたい人"],
  ["カード・決済ネットワーク", "クレジットカードの審査・決済・与信。大規模かつミッションクリティカル。JCBなどが代表例", "ミッションクリティカルな品質を志向する人"],
];

const faqs = [
  {
    q: "Web系の開発経験しかなくてもフィンテックに転職できますか？",
    a: "可能性は十分あります。バックエンド（Java/Kotlin/Go/Python）、API設計、クラウドといったWeb系で培う技術はフィンテックの中核とも重なります。金融ドメイン知識は入社後にキャッチアップする前提で採用されるケースもあります。一方で、決済や口座を扱う領域はトランザクションの整合性やセキュリティが厳しく問われるため、堅牢性を意識した設計経験を語れると有利です。",
  },
  {
    q: "金融業界の経験はフィンテック転職で評価されますか？",
    a: "高く評価されやすい領域です。資金決済法・割販法などの規制知識やリスク管理の実務は、フィンテック企業がプロダクト開発で必要としながら社内に不足しがちなスキルです。詳しくは金融業界からの転職を扱った別記事も参考にしてください。",
  },
  {
    q: "フィンテック転職で年収はどう変わりますか？",
    a: "断定はできませんが、レバテックが公表する正社員SEの年代別平均年収は30代約499万円・40代約618万円（2025年）で、これが一つの目安になります。フィンテックでは年収レンジに幅があり、モダンスキルとドメイン知識を兼ね備えるほど高い水準を狙いやすくなります。実際の提示額は企業・ポジション・スキルで大きく異なるため、複数社で比較することをおすすめします。",
  },
  {
    q: "フィンテックではどんな技術が求められますか？",
    a: "求人傾向としてはバックエンド（Java/Kotlin/Go/Python）、API設計、クラウド（AWS/GCP）、セキュリティが基本になりやすいです。データ分析（SQL/Python）やML（与信・不正検知）の知識があると差別化につながります。具体的な要件は企業ごとに異なるため、求人票で確認してください。",
  },
  {
    q: "暗号資産・ブロックチェーン領域もフィンテックに含まれますか？",
    a: "広義には含まれますが、暗号資産交換業やブロックチェーン基盤の開発はより専門性が高く、求められる技術スタックも異なります。Web3・ブロックチェーン業界を扱った別記事で詳しく整理しています。",
  },
  {
    q: "30代・40代でもフィンテックに転職できますか？",
    a: "ドメイン知識やマネジメント経験が武器になりやすい領域のため、年齢だけが理由で不利になるとは限りません。30代はモダン技術の習得、40代は規制対応や大規模PJのマネジメントなど「組み合わせの価値」を打ち出すと、ミドル層ならではの強みを示しやすくなります。",
  },
  {
    q: "未出典の市場規模や成長率は記載していますか？",
    a: "本記事では確認できない市場規模・成長率の数値は記載していません。年収などは出典と時点を明記した公開データのみを用い、業界動向は公開情報に基づく傾向として記述しています。",
  },
];

const related = [
  { name: "金融業界からフィンテック転職", href: "/industry/finance/" },
  { name: "Web3・ブロックチェーン業界への転職", href: "/industry/web3/" },
  { name: "保険業界からインシュアテック転職", href: "/industry/insurance/" },
  { name: "セキュリティエンジニア転職ガイド", href: "/skill/security/" },
  { name: "AWSエンジニアの転職", href: "/skill/aws/" },
  { name: "30代エンジニアの年収相場", href: "/knowledge/salary-30s/" },
];

export default function FintechPage() {
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
      <ArticleJsonLd title={TITLE} description={DESC} url="/industry/fintech/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "業界別ガイド" },
          { name: "フィンテック業界への転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          フィンテック業界へのエンジニア転職ガイド｜30代・40代の現実的な戦略
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 決済・融資・資産運用・暗号資産領域で技術を活かす方法
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          フィンテックは、金融（Finance）とテクノロジー（Technology）を掛け合わせた領域で、キャッシュレス決済、オンライン融資、資産運用、家計管理、法人向けバックオフィスSaaSなど、幅広いサービスを含みます。スマートフォン決済やオープンAPIの普及を背景に、金融とITの境界は溶けつつあり、エンジニアの活躍の場が広がっています。本記事では、エンジニアがフィンテック業界へ転職する現実的な道筋を、求められる技術・スキル・参入ルート・年収傾向の観点から、公開データと公的統計をもとに整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表 年代別平均年収（2025年）",
            "doda 決定年収レポート（2025年5月公表）",
            "経済産業省 IT人材需給に関する調査（2019年公表）",
          ]}
        />

        {/* 目次 */}
        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3">目次</p>
          <ul className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：フィンテック転職は現実的か</h2>
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-lg p-5 mb-4">
            <p className="text-slate-700 leading-relaxed mb-3">
              <span className="font-bold text-blue-800">結論：Web系・バックエンドの経験者にとって、フィンテック転職は十分現実的です。</span>
              使う技術スタックがWeb開発と重なる一方、決済・口座といった領域では堅牢性やセキュリティがより厳しく問われます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・バックエンド・API・クラウドの実務経験はそのまま活かしやすい</li>
              <li>・トランザクション整合性とセキュア設計を意識できると評価が上がる</li>
              <li>・金融ドメイン知識や規制対応の経験は希少価値が高く差別化になる</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            まずは「決済・融資・資産運用・法人SaaS」のどの領域で自分の経験が活きるかを見極め、不足する技術や知識を補う計画を立てるのが近道です。
          </p>
        </section>

        {/* 業界概要 */}
        <section id="overview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フィンテック業界の概要</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            フィンテックは単一の業種ではなく、金融サービスをテクノロジーで再構築する横断的な領域です。代表的なサービス領域には次のようなものがあります。市場規模や成長率の具体値は出典が確認できないため、本記事では記載しません。
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">決済・送金</h3>
              <p className="text-sm text-slate-600">
                QRコード決済、オンライン決済、送金サービスなど。トランザクション量が多く、高い可用性とスケーラビリティが求められる領域です。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">融資・与信・スコアリング</h3>
              <p className="text-sm text-slate-600">
                オンライン融資やBNPL（後払い）などで、与信モデルや不正検知が重要になります。データ分析やMLの素養が活きやすい領域です。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">資産運用・家計・法人SaaS</h3>
              <p className="text-sm text-slate-600">
                ロボアドバイザー、家計簿アプリ、会計・経費精算などのバックオフィスSaaS。金融データをAPIで連携する設計力が問われます。
              </p>
            </div>
          </div>
        </section>

        {/* 技術トレンド・採用動向 */}
        <section id="trend" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術トレンドと採用動向</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            キャッシュレス決済の普及、オープンAPIの進展、銀行・証券のシステム刷新などを背景に、金融×ITの採用ニーズが見られます（公開情報に基づく傾向）。技術面では次のようなトレンドが挙げられます。
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">クラウドネイティブ・マイクロサービス</h3>
              <p className="text-sm text-slate-600">
                スケーラビリティと可用性を確保するため、クラウド上でのマイクロサービス構成やコンテナ運用が一般的になっています。SREやインフラ寄りのスキルが評価される場面が増えています。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">セキュリティと規制対応の両立</h3>
              <p className="text-sm text-slate-600">
                金融データを扱う以上、認証・暗号・不正検知などのセキュリティ設計が前提になります。資金決済法などの規制を踏まえた設計ができる人材は希少です。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">IT人材不足という追い風</h3>
              <p className="text-sm text-slate-600">
                経済産業省「IT人材需給に関する調査」（2019年公表）では、2030年に最大約79万人のIT人材不足が試算されています（2019年公表の試算）。金融×ITのように専門性を掛け合わせられる人材は、こうした需給環境のなかで相対的に動きやすい立場にあります。
              </p>
            </div>
          </div>
        </section>

        {/* 求められるスキル */}
        <section id="skills" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる技術・スキル</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700">スキル・経験</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 whitespace-nowrap">位置づけ</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">補足</th>
                </tr>
              </thead>
              <tbody>
                {skills.map(([s, j, d], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 border-t border-slate-200 align-top">{s}</th>
                    <td className="px-4 py-3 text-petrol font-medium border-t border-slate-200 align-top whitespace-nowrap">{j}</td>
                    <td className="px-4 py-3 text-slate-600 border-t border-slate-200">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            ポイントは「中核スキル（バックエンド・API・クラウド）で土俵に立ち、差別化要素（セキュリティ・規制知識・ML）で抜きん出る」という見せ方です。職務経歴書では、扱ったデータの重要度や可用性要件、セキュリティ対応の実績を具体化すると説得力が増します。関連スキルは
            <Link href="/skill/security/" className="text-petrol hover:underline">セキュリティ</Link>・
            <Link href="/skill/aws/" className="text-petrol hover:underline">AWS</Link>・
            <Link href="/skill/go/" className="text-petrol hover:underline">Go</Link>
            のページも参考にしてください。
          </p>
        </section>

        {/* 参入ルート */}
        <section id="routes" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">参入ルート（職種×企業タイプ）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700">職種</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">主な企業タイプ</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">向いている人・特徴</th>
                </tr>
              </thead>
              <tbody>
                {routes.map(([r, c, d], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 border-t border-slate-200 align-top whitespace-nowrap">{r}</th>
                    <td className="px-4 py-3 text-slate-600 border-t border-slate-200 align-top">{c}</td>
                    <td className="px-4 py-3 text-slate-600 border-t border-slate-200">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            異業種からの参入では、いきなり決済基盤の中核を狙うより、自分の技術が活きる領域（バックエンド全般・データ・インフラ）から入り、金融特有の要件に慣れてからステップアップする道もあります。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収傾向</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            フィンテック企業の年収はレンジが広く、確認可能な一律の平均値はありません。判断材料として、公的・公表データを目安に使うのが現実的です。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700">データ</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">数値</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">出典・時点</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["正社員SE 30代 平均年収", "約499万円", "レバテック公表（2025年）"],
                  ["正社員SE 40代 平均年収", "約618万円", "レバテック公表（2025年）"],
                  ["年収1,000万円以上の割合（30代）", "8.01%", "レバテック公表（2025年）"],
                  ["年収1,000万円以上の割合（40代）", "12.67%", "レバテック公表（2025年）"],
                  ["IT・通信の平均決定年収", "486万円（2024年度）", "doda 決定年収レポート（2025年5月公表）"],
                ].map(([k, v, src], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 border-t border-slate-200 align-top">{k}</th>
                    <td className="px-4 py-3 text-petrol font-medium border-t border-slate-200 align-top whitespace-nowrap">{v}</td>
                    <td className="px-4 py-3 text-slate-500 border-t border-slate-200 text-xs align-top">{src}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            年収を上げる現実的な手段は、(1) 中核スキルで応募できる幅を広げる、(2) セキュリティや規制対応など差別化要素を積み上げる、(3) 複数エージェントで提示額を比較し交渉材料にする、の3点です。詳しくは
            <Link href="/knowledge/salary-change/" className="text-petrol hover:underline">エンジニア転職で年収は上がるか</Link>
            も参考にしてください。
          </p>
        </section>

        {/* 企業タイプ */}
        <section id="company-types" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">代表的な企業タイプと例</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            以下は代表的な企業タイプの整理です。挙げた企業名は実在する有名企業をタイプの例として示したもので、各社の採用状況を保証するものではありません。
          </p>
          <div className="space-y-4">
            {companyTypes.map(([name, desc, fit], i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{name}</h3>
                <p className="text-sm text-slate-600 mb-2">{desc}</p>
                <p className="text-xs text-petrol-deep">向いている人：{fit}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-500 leading-relaxed text-xs mt-4">
            個社の特徴は
            <Link href="/company/moneyforward/" className="text-petrol hover:underline">マネーフォワード</Link>・
            <Link href="/company/freee/" className="text-petrol hover:underline">freee</Link>・
            <Link href="/company/plaid/" className="text-petrol hover:underline">Plaid</Link>・
            <Link href="/company/layerx/" className="text-petrol hover:underline">LayerX</Link>・
            <Link href="/company/paypay/" className="text-petrol hover:underline">PayPay</Link>・
            <Link href="/company/sbi/" className="text-petrol hover:underline">SBI</Link>・
            <Link href="/company/jcb/" className="text-petrol hover:underline">JCB</Link>
            の各ページも参考にしてください。
          </p>
        </section>

        {/* 進め方 */}
        <section id="steps" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">参入の進め方</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "経験を棚卸しする", desc: "携わったシステムの規模、トランザクション量、可用性・セキュリティ要件、扱ったデータの重要度を具体的に整理する。数値化できる成果は必ず洗い出す。" },
              { step: "2", title: "不足スキルを補う計画を立てる", desc: "クラウド（AWS/GCP）・API設計・セキュリティなど、求人で問われやすい技術を3〜6ヶ月で学習。小さくても動くものを作ると説得力が増す。" },
              { step: "3", title: "活きる領域を見極める", desc: "決済・融資・資産運用・法人SaaSのうち、自分の経験が最も活きる領域に絞ってターゲット企業を選定する。" },
              { step: "4", title: "エージェント2社以上に登録する", desc: "IT特化のレバテックキャリアと、ハイクラス志向ならビズリーチなどに登録。求人と担当者を比較し、市場価値を客観的に把握する。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.step}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 30代40代視点 */}
        <section id="midlife" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の視点</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：技術の深さと幅を作る</h3>
              <p className="text-sm text-petrol-deep">
                バックエンドやインフラの実装力を磨きつつ、セキュリティや金融ドメインに踏み込めると、純粋なWebエンジニアにも代えがたい価値になります。技術への投資効果が最も高い年代です。
                <Link href="/age/30s/" className="text-petrol-deep underline">30代の転職事情</Link>
                も参考にしてください。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：規制対応とマネジメントを軸に</h3>
              <p className="text-sm text-petrol-deep">
                大規模PJのマネジメントや規制対応の実績は、フィンテック企業や金融DX支援で評価されやすい強みです。実装だけで勝負するより、組み合わせの価値を打ち出すのが現実的です。
                <Link href="/age/40s/" className="text-petrol-deep underline">40代の転職事情</Link>
                も確認しておきましょう。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ミドル層こそ「希少性」で戦う</h3>
              <p className="text-sm text-petrol-deep">
                若手と同じ土俵で最新技術だけを競うのではなく、金融×ITという希少性で差別化するのがミドル層の定石です。
                <Link href="/knowledge/market-value/" className="text-petrol-deep underline">自分の市場価値の測り方</Link>
                も参考にしてください。
              </p>
            </div>
          </div>
        </section>

        {/* エージェント */}
        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">相談先エージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            フィンテック転職では、IT専門性の高いエージェントと、ハイクラス求人に強いサービスを併用するのが定石です。
          </p>
          <div className="space-y-3">
            {[
              { name: "レバテックキャリア", desc: "IT/Web特化で技術的なマッチングに強み。利用者の多くが20〜30代という公表もあり、ミドルは経歴を丁寧に伝えたい。", href: "/review/levtech/" },
              { name: "ビズリーチ", desc: "ハイクラス・スカウト型。年収750万円以上の求人や管理職ポジションを狙う際の選択肢。", href: "/review/bizreach-it/" },
              { name: "リクルートエージェントIT", desc: "国内最大級の求人数。フィンテックから事業会社まで幅広く比較したい場合に有効。", href: "/review/recruit-it/" },
            ].map((a, i) => (
              <Link key={i} href={a.href} className="block border border-slate-200 rounded-lg p-5 hover:bg-slate-50 hover:border-petrol transition-colors">
                <h3 className="font-bold text-slate-800 mb-1">{a.name} →</h3>
                <p className="text-sm text-slate-600">{a.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10">
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
          <h2 className="text-xl font-bold mb-3">あなたの技術をフィンテックで活かそう</h2>
          <p className="text-blue-100 text-sm mb-4">
            まずはIT特化型エージェントに相談して、あなたの市場価値を客観的に確認しましょう。
          </p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((item, i) => (
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
