import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "SAPエンジニア転職ガイド｜年収・資格・S/4HANA求人";
const PAGE_DESC =
  "SAPエンジニア・コンサルタントの転職を年収データ・SAP認定資格・S/4HANA求人の探し方まで解説。求人ボックスの公表年収やレバテック年代別データを出典付きで掲載。30代・40代の参入ルートとおすすめエージェントも紹介します。";

const toc = [
  { id: "conclusion", label: "結論：SAP転職の攻め方" },
  { id: "market", label: "市場・年収データ" },
  { id: "level", label: "求められる経験レベル" },
  { id: "career", label: "キャリアパスの選択肢" },
  { id: "find", label: "求人の探し方・強いエージェント" },
  { id: "entry", label: "経験浅めからの参入ルート" },
  { id: "mid", label: "30代・40代視点" },
  { id: "study", label: "スキルアップ・学習戦略" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const careerPaths = [
  {
    role: "SAP ABAP開発者",
    note: "ABAP・Fioriでのアドオン開発・カスタマイズ。業務系開発経験から移行しやすい技術寄りの入口。",
    cert: "デベロップメント系認定",
  },
  {
    role: "モジュールコンサルタント",
    note: "FI（財務会計）・CO（管理会計）・MM（在庫購買）・SD（販売）など、特定業務領域の導入・設定を担う。",
    cert: "アプリケーション系認定（モジュール別）",
  },
  {
    role: "テクノロジーコンサルタント",
    note: "Basis・インフラ・移行基盤など技術基盤領域。S/4HANA移行の土台を支える。",
    cert: "テクノロジー系認定",
  },
  {
    role: "プロジェクトマネージャー／アーキテクト",
    note: "S/4HANA移行プロジェクトの全体設計・統括。複数モジュールと移行方式の理解が求められる。",
    cert: "上位資格＋PM経験",
  },
];

const certGenres = [
  {
    name: "アプリケーションコンサルタント系",
    desc: "FI/CO/MM/SD等、業務モジュールの知見を証明する資格。コンサル職で重視される。",
  },
  {
    name: "デベロップメントコンサルタント系",
    desc: "ABAP開発など、プログラマー向けの資格。開発職の応募で評価されやすい。",
  },
  {
    name: "テクノロジーコンサルタント系",
    desc: "Basisやインフラなど、技術基盤を担うエンジニア向けの資格。",
  },
];

const faqs = [
  {
    q: "SAPエンジニア・コンサルタントの年収はどれくらい？",
    a: "求人ボックスの給料ナビでは、SAP関連職の平均年収は約594万円（公表値）とされています。これは募集中の求人票を集計した値で、ABAP開発者かモジュールコンサルタントか、担当モジュールやS/4HANA移行経験の有無によって提示額は大きく変わります。年代別の目安としては、レバテックが公表する正社員SEの平均年収（2025年）で30代約499万円・40代約618万円が参考になりますが、SAP領域は専門性の高さから上振れしやすい傾向が指摘されています。",
  },
  {
    q: "SAP認定資格は転職に有利？",
    a: "スキルを客観的に示せるため評価されます。SAP認定資格は大きく、業務モジュール向けの『アプリケーションコンサルタント系』、ABAP開発などの『デベロップメントコンサルタント系』、インフラ・基盤向けの『テクノロジーコンサルタント系』の3ジャンルに分かれます。なお、SAP社の発表により認定資格の有効期限が見直された（2024年度）との情報もあり、最新の制度は必ずSAP公式で確認してください。資格に加え、実際の導入・移行プロジェクト経験を職務経歴書で示せるかが選考を左右します。",
  },
  {
    q: "SAP未経験でも転職できる？",
    a: "完全未経験からは難易度が高めですが、会計・在庫管理・販売管理などの業務系システム開発経験があれば、SAPコンサルティング会社のポテンシャル採用枠を狙えます。ABAP開発の経験があれば開発職の入口になりやすく、業務知識（経理・購買・生産管理など）を持つ人はモジュールコンサルへの転身ルートが現実的です。",
  },
  {
    q: "SAPの求人はどんな企業に多い？",
    a: "大手コンサルティングファーム、SAPパートナー企業、大手SIer、グローバル製造業のIT部門などで募集が見られます。基幹システムを扱う性質上、安定した大企業・コンサル系が中心です。S/4HANA移行に関連したポジションの募集が目立ちます。",
  },
  {
    q: "S/4HANA移行需要はいつまで続く？",
    a: "SAPの旧基幹製品（SAP ECC）の保守期限に向けてS/4HANAへの移行プロジェクトが各社で進行しており、当面は移行・運用の人材ニーズが続くと見られています。ただし具体的な期限や市場規模の断定は避けるべきで、最新の保守ロードマップはSAP公式の発表を確認してください。求人動向は時期により変動します。",
  },
  {
    q: "SAPエンジニアにおすすめの転職エージェントは？",
    a: "ハイクラス・スカウト型で高年収帯のSAP案件に出会いやすいビズリーチ、IT特化で専門アドバイザーが在籍するレバテックキャリア、年収交渉力のあるエージェントの併用がおすすめです。SAP領域は年収レンジが広いため、複数登録して提示条件を比較するのが基本です。",
  },
  {
    q: "SAPコンサルタントはきつい・激務？",
    a: "大規模な移行プロジェクトでは繁忙期に負荷が高まる場面があり、出張や長時間労働を伴うケースもあります。一方で運用・保守フェーズ中心のポジションや、リモート可の案件も増えています。働き方は企業・フェーズで差が大きいため、面談で体制・残業・稼働率を具体的に確認しましょう。",
  },
];

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

export default function SapSkillPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/skill/sap/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "SAPエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          SAPエンジニア転職ガイド｜年収・資格・S/4HANA求人
        </h1>
        <p className="text-slate-500 text-sm mb-4">
          最終更新: 2026年6月 | SAPスキルを軸にした転職市場の攻め方を解説
        </p>
        <p className="text-slate-600 leading-relaxed mb-2">
          SAPは大手企業の基幹システムとして広く使われており、S/4HANAへの移行需要を背景に、開発・コンサル・基盤の各領域でSAP人材の需要が続いています。本記事は求人数を競うのではなく、「年収相場の捉え方」「SAP認定資格の活かし方」「求人の探し方」という転職判断に必要な情報に絞って整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "求人ボックス 給料ナビ（SAP関連・公表値）",
            "SAP公式 認定制度",
            "レバテック 年代別平均年収（2025年）",
            "経済産業省 IT人材需給に関する調査（2019年3月公表）",
          ]}
        />

        {/* 目次 */}
        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-blue-700">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：SAP転職の攻め方</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              SAP転職は<strong>「特定モジュールまたはABAP開発の専門性を軸に、S/4HANA移行の文脈で売り込む」</strong>のが基本戦略です。年収レンジが広い領域のため、ハイクラス系エージェントを含めて複数比較するのが重要です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① ABAP開発か、FI/CO/MM/SD等のモジュールか、自分の軸を決める</li>
              <li>② 導入・移行プロジェクトの経験を職務経歴書で具体的に書く</li>
              <li>③ SAP認定資格でスキルを可視化しつつ、ハイクラス系で年収帯を比較する</li>
            </ul>
          </div>
        </section>

        {/* 市場・年収データ */}
        <section id="market" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">市場・年収データ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            SAP関連職の平均年収は、求人ボックスの給料ナビで<strong>約594万円（公表値）</strong>とされています。これは募集中の求人票を集計した値で、開発職・コンサル職の別、担当モジュール、S/4HANA移行経験の有無で実際の提示額は大きく振れます。IT職全体の年代別データと併用して相場感を掴むのが現実的です。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-slate-200">
              <thead>
                <tr className="bg-slate-50 text-slate-700">
                  <th className="border border-slate-200 px-3 py-2 text-left">区分</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">金額</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">出典・時点</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr>
                  <td className="border border-slate-200 px-3 py-2">SAP関連職 平均</td>
                  <td className="border border-slate-200 px-3 py-2">約594万円</td>
                  <td className="border border-slate-200 px-3 py-2">求人ボックス給料ナビ（公表値）</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">正社員SE 30代（参考）</td>
                  <td className="border border-slate-200 px-3 py-2">約499万円</td>
                  <td className="border border-slate-200 px-3 py-2">レバテック 年代別平均年収（2025年）</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">正社員SE 40代（参考）</td>
                  <td className="border border-slate-200 px-3 py-2">約618万円</td>
                  <td className="border border-slate-200 px-3 py-2">レバテック 年代別平均年収（2025年）</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">IT・通信の平均決定年収</td>
                  <td className="border border-slate-200 px-3 py-2">486万円</td>
                  <td className="border border-slate-200 px-3 py-2">doda 2024年度決定年収レポート（2025年5月公表）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed">
            SAPは基幹システム領域であり、専門人材の供給が限られることから年収が上振れしやすいと指摘されます。背景には、経済産業省「IT人材需給に関する調査」（2019年3月公表）が試算する2030年に最大約79万人のIT人材不足があります（同調査の試算値）。一方で具体的な求人倍率や成長率の断定は避け、最新の求人数は各エージェントで確認してください。
          </p>
        </section>

        {/* 経験レベル */}
        <section id="level" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベル（求人要件の傾向）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            求人票に見られる要件の傾向を整理すると、おおむね次のように分かれます。実際の要件は企業・ポジションで異なるため目安として捉えてください。
          </p>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">ジュニア／ポテンシャル枠</h3>
              <p className="text-sm text-slate-600">業務系システム開発の経験、または経理・購買など業務知識。SAP実務は浅くても育成前提で採用されるケース。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">ミドル（実務3〜7年）</h3>
              <p className="text-sm text-slate-600">特定モジュールの導入・設定経験、またはABAP開発の実務。30代の中心レンジ。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">シニア／リード</h3>
              <p className="text-sm text-slate-600">複数モジュール横断の設計、S/4HANA移行プロジェクトのリード、PM経験。アーキテクト・PM層。</p>
            </div>
          </div>
        </section>

        {/* キャリアパス */}
        <section id="career" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キャリアパスの選択肢</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            SAP人材のキャリアは「ABAP開発」「モジュールコンサル」「テクノロジー（基盤）」「PM/アーキテクト」に大別できます。SAP認定資格の3ジャンルと対応づけて考えると整理しやすいです。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {careerPaths.map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{item.role}</h3>
                <p className="text-xs text-blue-600 font-medium mb-2">関連資格: {item.cert}</p>
                <p className="text-sm text-slate-600">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 求人の探し方 */}
        <section id="find" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の探し方・強いエージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            SAP求人は年収レンジが広く、ハイクラス帯はスカウト型で出会えるケースが多いのが特徴です。タイプの異なるエージェントを併用しましょう。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">
                <Link href="/review/bizreach-it/" className="text-blue-700 hover:underline">ビズリーチ</Link>
              </h3>
              <p className="text-sm text-slate-600">ハイクラス・スカウト型。年収750万円以上をハイクラス層とし、年収1,000万円以上求人の比率が高いとされる（二次情報）。SAPコンサル/PM案件に強い。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">
                <Link href="/review/levtech/" className="text-blue-700 hover:underline">レバテックキャリア</Link>
              </h3>
              <p className="text-sm text-slate-600">IT/Web特化で専門アドバイザーが在籍。高年収求人の比率が高いとされる（同社ガイド記事）。ABAP開発寄りのSAP求人も探しやすい。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">
                <Link href="/review/doda-it/" className="text-blue-700 hover:underline">doda ITエンジニア</Link>
              </h3>
              <p className="text-sm text-slate-600">国内最大級の求人数で、検索＋エージェント＋スカウトのハイブリッド型。幅広いSAP求人を比較しやすい。</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4 text-sm">
            ハイクラス向けの選び方は<Link href="/compare/highclass/" className="text-blue-600 hover:underline">ハイクラス向けエージェント比較</Link>、複数登録の使い分けは<Link href="/compare/agents/" className="text-blue-600 hover:underline">エージェント比較</Link>も参考にしてください。
          </p>
        </section>

        {/* 参入ルート */}
        <section id="entry" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験浅めからの参入ルート</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            SAPは完全未経験からの参入は難しめですが、隣接スキルを足がかりにできます。次のルートを検討しましょう。
          </p>
          <ol className="space-y-3">
            {[
              { t: "業務知識を棚卸しする", d: "経理・購買・生産管理・販売など、前職の業務領域を整理し、対応モジュール（FI/CO/MM/SD等）に紐づける。" },
              { t: "ABAPまたは業務系開発の経験を示す", d: "開発志向ならABAPや業務系システム開発の実績を、コンサル志向なら業務改善の実績を訴求する。" },
              { t: "パートナー企業の育成枠を狙う", d: "SAPパートナー企業は研修・育成体制が整っていることが多く、ポテンシャル採用の入口になりやすい。" },
              { t: "認定資格で学習成果を可視化する", d: "対応ジャンルの認定を取得し、書類段階でスキルの裏付けを示す。最新の制度はSAP公式で確認する。" },
            ].map((s, i) => (
              <li key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{i + 1}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{s.t}</h3>
                  <p className="text-sm text-slate-600">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* 30代40代視点 */}
        <section id="mid" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              SAP領域は、30代・40代のミドル層にとって<strong>業務経験とマネジメント経験が直接評価される</strong>数少ない分野です。基幹システムは企業の業務そのものを扱うため、経理・購買・生産管理などの実務理解や、プロジェクトを回した経験が大きな武器になります。若手のコーディング速度勝負ではなく、業務×プロジェクト遂行力で勝負できる領域です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・前職の業務ドメインを担当モジュールに対応づけて明文化する</li>
              <li>・PM/PL経験があれば移行プロジェクトのリード職が視野に入る</li>
              <li>・年収レンジが広いため、ハイクラス系エージェントで上振れを狙う価値がある</li>
            </ul>
            <p className="text-slate-600 text-sm mt-3">
              年代別の相場感は<Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職事情</Link>、市場価値の整理は<Link href="/knowledge/market-value/" className="text-blue-600 hover:underline">自分の市場価値の調べ方</Link>もあわせてどうぞ。
            </p>
          </div>
        </section>

        {/* 学習戦略 */}
        <section id="study" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルアップ・学習戦略</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            SAP認定資格は3ジャンルに分かれており、自分のキャリア軸に合わせて選ぶのが基本です。各ジャンルの位置づけを押さえておきましょう。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {certGenres.map((c, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{c.name}</h3>
                <p className="text-sm text-slate-600">{c.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            SAP認定資格は有効期限が見直された（2024年度・SAP社発表との情報）ため、取得後の更新要否を含め最新制度はSAP公式で確認してください。資格に加え、S/4HANA移行プロジェクトの経験を語れることが選考での決め手になります。継続学習の習慣化は<Link href="/knowledge/continuous-learning/" className="text-blue-600 hover:underline">エンジニアの学習を続けるコツ</Link>も参考にどうぞ。
          </p>
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
          <h2 className="text-xl font-bold mb-3">SAPのスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            SAP求人に精通したIT特化型・ハイクラスエージェントに登録して、年収アップの可能性を探りましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Salesforce転職ガイド", href: "/skill/salesforce/" },
              { name: "Java転職ガイド", href: "/skill/java/" },
              { name: "ビズリーチの評判", href: "/review/bizreach-it/" },
              { name: "ハイクラス向けエージェント比較", href: "/compare/highclass/" },
              { name: "スキル別転職ガイド一覧", href: "/skill/" },
              { name: "ミドルエンジニア転職ラボTOP", href: "/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors"
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
