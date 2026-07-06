import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/industry/retail/" },
  title: "小売・流通からECテック転職【30代40代DXガイド】",
  description:
    "小売・流通業界エンジニアからECテック・リテールテック・OMO領域への転職方法を解説。活かせるスキルと埋めるギャップ、年収の考え方、進め方を30代40代視点で紹介。",
};

const TITLE = "小売・流通からECテック転職【30代40代DXガイド】";
const DESC =
  "小売・流通業界エンジニアからECテック・リテールテック・OMO領域への転職方法を解説。活かせるスキルと埋めるギャップ、年収の考え方、進め方を30代40代視点で紹介。";

const toc = [
  { id: "conclusion", label: "結論：店舗・流通の業務知識が武器になる" },
  { id: "trend", label: "ECテック・リテールテックの採用動向" },
  { id: "skills", label: "活かせるスキル／埋めるギャップ" },
  { id: "patterns", label: "転職パターン（職種×企業タイプ）" },
  { id: "fit", label: "向いている人／向いていない人" },
  { id: "resume", label: "職務経歴書での見せ方（Before/After）" },
  { id: "salary", label: "年収の考え方（公的データ）" },
  { id: "companies", label: "主な企業タイプと例" },
  { id: "howto", label: "転職の進め方" },
  { id: "routes", label: "経験浅めからの参入ルート" },
  { id: "pitfalls", label: "よくあるつまずきと対策" },
  { id: "midcareer", label: "30代・40代の視点" },
  { id: "faq", label: "よくある質問" },
];

const skillTable = [
  ["POS・基幹システムの業務知識", "そのまま活きる", "店舗運営・販売管理の理解はリテールテックで希少"],
  ["在庫管理・サプライチェーンの理解", "そのまま活きる", "需要予測・自動発注・WMS連携の要件定義で活きる"],
  ["顧客データ・購買行動の理解", "そのまま活きる", "レコメンド・CRM・リテールメディアの設計に直結"],
  ["Web開発（React・Python等）", "要習得", "ECプラットフォーム開発はモダンスタックが前提"],
  ["データ分析（SQL / Python）", "要習得", "購買データ分析・需要予測のポジションで求められる"],
  ["クラウド（AWS / GCP）", "要習得", "クラウド型ECやマイクロサービス運用で必要になる"],
];

const patternTable = [
  ["ECプラットフォームエンジニア", "ECサイト・モール型基盤の開発", "Web開発＋商流の理解"],
  ["リテールテックエンジニア", "店舗DX・POS連携・無人店舗", "業務知識＋システム連携設計"],
  ["データアナリスト", "購買データ分析・需要予測・レコメンド", "データ分析＋小売KPIの理解"],
  ["OMOエンジニア／PdM", "オンラインとオフラインの統合設計", "店舗運営理解＋要件定義・調整力"],
];

const faqs = [
  {
    q: "小売・流通業界の経験はECテック転職で評価されますか？",
    a: "評価されやすい傾向があります。POS連携、在庫管理、物流最適化、顧客データ分析など、小売の業務プロセスを理解しているエンジニアはECテック・リテールテック企業で希少です。特にOMO（Online Merges with Offline）の推進には、実店舗運営の知識が要件定義で役立ちます。",
  },
  {
    q: "小売業界からECテック転職で年収は上がりますか？",
    a: "職種・企業フェーズ・現年収によって変わるため一概には言えません。業界平均の信頼できる公開統計は限られるため、本ページでは特定の業界平均値は断定しません。目安として、レバテックが公表する正社員SEの年代別平均年収（30代約499万円・40代約618万円／2025年）や、doda公表のIT・通信の平均決定年収（2024年度486万円）を参考に、複数のエージェントで求人レンジを確認するのが確実です。",
  },
  {
    q: "ECサイトの開発経験がなくても転職できますか？",
    a: "可能性はあります。小売のPOSシステム、在庫管理、基幹システムの開発・運用経験は、リテールテック企業で評価されやすい経験です。並行してPython・SQL・Webフレームワーク（React/Next.js）の基礎を学ぶと、応募できるポジションの幅が広がります。",
  },
  {
    q: "小売業界からECテック転職で有利な資格はありますか？",
    a: "データ分析系の資格（統計検定など）やクラウド資格（AWS/GCP）は、EC運営やプラットフォーム開発に関連するスキルの説明材料になります。ただし資格より、店舗・商流の実務理解と開発スキルの掛け合わせが重視される傾向があります。",
  },
  {
    q: "小売業界から転職しやすいIT職種は何ですか？",
    a: "ECプラットフォームエンジニア、リテールテックエンジニア、購買データを扱うデータアナリストなどが入りやすいポジションです。EC構築サービスやOMOソリューションを提供する企業は、小売の業務理解を持つエンジニアを求めることがあります。",
  },
  {
    q: "小売業界からECテック転職に強いエージェントは？",
    a: "IT/Web/ゲーム特化で提案スピードに定評のあるGeekly、異業種からIT業界への転職支援実績が豊富なワークポートが基本の選択肢です。IT特化で高年収求人の多いレバテックキャリアも併用候補になります。2社以上に登録して比較検討するのがおすすめです。",
  },
  {
    q: "プログラミング経験が浅くても入れますか？",
    a: "可能性はあります。プロダクトマネージャーやEC運用、カスタマーサクセスなど、商流・店舗運営の理解が重視されるポジションがあります。Python・SQLの基礎を並行して習得すると、エンジニア寄りのポジションにも挑戦しやすくなります。",
  },
  {
    q: "在職中でも転職活動は進められますか？",
    a: "可能です。多くのエージェントはオンライン面談や夜間・休日対応に対応しています。スキルの棚卸しと求人レンジの確認から始め、応募は条件に合うものに絞ると在職中でも無理なく進められます。",
  },
];

export default function RetailPage() {
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
      <ArticleJsonLd title={TITLE} description={DESC} url="/industry/retail/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "業界別ガイド" },
          { name: "小売・流通業界からECテック転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">{TITLE}</h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 小売・流通の知識をECテック・リテールテックで活かす方法
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          ECの普及とOMO（Online Merges with Offline）戦略の広がりにより、小売・流通業界のDXが進んでいます。POSシステム、在庫管理、サプライチェーンの知識を持つエンジニアは、ECテック・リテールテック領域では純粋なIT人材が持ちにくい武器を備えています。本記事では、小売・流通業界エンジニアがECテック・リテールテック領域へ転職するための考え方と進め方を、30代・40代のミドルエンジニア視点で整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表 年代別平均年収（2025年）",
            "経済産業省『IT人材需給に関する調査』（2019年3月公表）",
            "パーソルキャリア doda 決定年収レポート（2025年5月公表）",
          ]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：店舗・流通の業務知識が武器になる</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-5">
            <p className="text-slate-700 leading-relaxed mb-3">
              小売・流通の業務知識を持つエンジニアのECテック転職は、<strong>十分に現実的</strong>です。OMOやリテールテックでは「店舗の現場で何が起きるか」「商流・在庫がどう動くか」を理解していることが価値になり、これは後から参入する純粋なIT人材が短期間で身につけにくい領域だからです。
            </p>
            <ul className="text-sm text-slate-700 space-y-1.5">
              <li>・<strong>強み</strong>：POS・在庫・顧客データの理解はそのまま活きる希少資産</li>
              <li>・<strong>埋めるべきギャップ</strong>：Web開発・データ分析・クラウドの基礎</li>
              <li>・<strong>進め方</strong>：経験の棚卸し → スキル補強 → IT特化エージェントで求人レンジ確認</li>
            </ul>
          </div>
        </section>

        <section id="trend" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ECテック・リテールテックの採用動向</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            市場規模やEC化率の具体的な数値は出典・時点で幅があるため本記事では断定しませんが、採用の背景として次のような動きが公開情報として語られています。
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">OMO・店舗DXの広がり</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                オンラインとオフラインの融合は小売の重要テーマとして語られ続けています。店舗のデジタル化、モバイルオーダー、ダイナミックプライシングなど、実店舗運営を理解したうえでシステム設計できるエンジニアが関心を集めやすい傾向があります。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">サプライチェーンDXの需要</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                需要予測、自動発注、倉庫管理（WMS）など、サプライチェーンのデジタル化が進んでいます。在庫管理・物流の実務を理解するエンジニアは、これらの領域で要件定義の実効性を示しやすい立場にあります。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">IT人材不足という追い風</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                経済産業省『IT人材需給に関する調査』（2019年3月公表）の試算では、2030年に最大約79万人のIT人材が不足するとされています。特定業界に限った数字ではありませんが、ドメイン知識を持つエンジニアが希少という全体傾向の背景として参考になります。
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">活かせるスキル／埋めるべきギャップ</h2>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="px-4 py-3 text-left font-semibold">スキル／知識</th>
                  <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">扱い</th>
                  <th className="px-4 py-3 text-left font-semibold">ECテックでの位置づけ</th>
                </tr>
              </thead>
              <tbody>
                {skillTable.map(([skill, status, note], i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <th className="px-4 py-3 text-left font-medium text-slate-700 align-top">{skill}</th>
                    <td
                      className={`px-4 py-3 font-medium whitespace-nowrap align-top ${
                        status === "そのまま活きる" ? "text-petrol" : "text-amber-600"
                      }`}
                    >
                      {status}
                    </td>
                    <td className="px-4 py-3 text-slate-600 align-top">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500">
            「要習得」は転職前後で補強する想定の領域です。志望職種により優先度は変わります。
          </p>
        </section>

        <section id="patterns" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職パターン（職種×企業タイプ）</h2>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="px-4 py-3 text-left font-semibold">職種</th>
                  <th className="px-4 py-3 text-left font-semibold">主な仕事</th>
                  <th className="px-4 py-3 text-left font-semibold">求められる軸</th>
                </tr>
              </thead>
              <tbody>
                {patternTable.map(([role, work, axis], i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <th className="px-4 py-3 text-left font-medium text-slate-700 align-top whitespace-nowrap">{role}</th>
                    <td className="px-4 py-3 text-slate-600 align-top">{work}</td>
                    <td className="px-4 py-3 text-slate-600 align-top">{axis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            開発比重を高めたいならエンジニア職、店舗・商流との橋渡しを強みにしたいならOMO・PdMが向きます。どのパターンでも「売上・在庫・顧客のKPIをどう改善したか」を具体的に語れるかが差別化の核になります。
          </p>
        </section>

        <section id="fit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人／向いていない人</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-emerald-200 bg-emerald-50 rounded-xl p-5">
              <h3 className="font-bold text-emerald-800 mb-3 text-sm">こんな人は向いている</h3>
              <ul className="text-sm text-slate-700 space-y-2">
                {[
                  "POS・在庫・基幹システムの実務経験がある",
                  "店舗運営や商流の制約を具体的に語れる",
                  "Web開発やデータ分析の学習を継続できる",
                  "店舗・本部・物流など部署間の調整を厭わない",
                  "顧客体験をプロダクトで良くすることに関心がある",
                ].map((t, i) => (
                  <li key={i} className="flex gap-2"><span className="text-emerald-600 shrink-0">✓</span><span>{t}</span></li>
                ))}
              </ul>
            </div>
            <div className="border border-slate-200 bg-slate-50 rounded-xl p-5">
              <h3 className="font-bold text-slate-700 mb-3 text-sm">慎重に検討したい人</h3>
              <ul className="text-sm text-slate-700 space-y-2">
                {[
                  "小売・商流の経験がなく、技術力だけで勝負したい",
                  "店舗運営や在庫・物流の実務に関心が薄い",
                  "学習に時間を割けず、即戦力の技術力も足りない",
                  "短期間での大幅な年収アップだけを目的にしている",
                ].map((t, i) => (
                  <li key={i} className="flex gap-2"><span className="text-slate-400 shrink-0">▲</span><span>{t}</span></li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            「慎重に検討したい人」に当てはまっても、ドメイン理解を現職で積み増す・技術を学習で補うなど、ギャップを埋める順番を決めれば道筋は描けます。
          </p>
        </section>

        <section id="resume" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">職務経歴書での見せ方（Before/After）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            小売・流通の経験は「何を作ったか」だけでなく「店舗・商流のどんな課題を解決し、売上や在庫がどう改善したか」まで書くと、ECテック企業に伝わりやすくなります。以下は一般化した記入例です（個人の実績に置き換えて使ってください）。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <div className="bg-slate-100 px-4 py-2 text-xs font-bold text-slate-500">Before（伝わりにくい例）</div>
              <p className="px-4 py-3 text-sm text-slate-600">POS・在庫管理システムの保守を担当。基幹システムの改修にも携わった。</p>
            </div>
            <div className="border border-[var(--line)] rounded-lg overflow-hidden">
              <div className="bg-petrol-soft px-4 py-2 text-xs font-bold text-petrol-deep">After（小売×ITが伝わる例）</div>
              <p className="px-4 py-3 text-sm text-slate-700">
                多店舗のPOS・在庫管理システムの運用と改修を担当。店舗オペレーションと欠品・過剰在庫の発生要因を踏まえた在庫データ連携を設計し、発注精度の改善に貢献。オンラインとオフラインの在庫を統合するOMOの要件定義に参画。店舗運営と商流の両面を理解している点を強みとする。
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            数値はご自身が実際に計測した範囲のみを記載してください。書き方の基本は
            <Link href="/knowledge/resume/" className="text-petrol hover:underline">職務経歴書の書き方</Link>
            もあわせて参考にしてください。
          </p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方（公的・公表データ）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ECテック特有の業界平均年収を示す信頼できる公開統計は限られるため、ここでは出典の明確なIT職全体のデータを目安として示します。実際の提示額は個社・職種・フェーズで大きく変わります。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-4">
            <ul className="text-sm text-slate-700 space-y-2 leading-relaxed">
              <li>
                ・<strong>正社員SEの年代別平均年収（レバテック公表・2025年）</strong>：20代 約378万円／30代 約499万円／40代 約618万円／50代 約685万円。年収1,000万円以上の割合は30代8.01%・40代12.67%。
              </li>
              <li>
                ・<strong>IT・通信の平均決定年収（doda／パーソルキャリア「決定年収レポート」2025年5月公表）</strong>：2023年度469万円→2024年度486万円。doda公表では転職者の約6割が年収アップとされています。
              </li>
            </ul>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            これらは目安です。正確な相場感はエージェントが提示する個別求人レンジで把握しましょう。年代別の考え方は
            <Link href="/knowledge/salary-30s/" className="text-petrol hover:underline">30代エンジニアの年収</Link>・
            <Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代エンジニアの年収</Link>
            も参考にしてください。
          </p>
        </section>

        <section id="companies" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">主な企業タイプと例</h2>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">ECプラットフォーム・モール運営</h3>
              <p className="text-sm text-slate-600">EC基盤やモール型サービスを開発・運営する企業。商品・注文・決済の業務知識が活きやすい。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">リテールテック・店舗DXソリューション</h3>
              <p className="text-sm text-slate-600">POS連携、無人店舗、店舗アプリなどを提供する企業。実店舗運営の理解が要件定義で評価される。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">購買データ分析・OMOソリューション</h3>
              <p className="text-sm text-slate-600">レコメンド・CRM・リテールメディアやOMO統合を手がける企業。データ分析＋顧客理解が差別化要素になる。</p>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            個別企業名は採用状況により変動するため、最新の求人はエージェント経由で確認してください。
          </p>
        </section>

        <section id="howto" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職の進め方</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "小売・流通の経験を棚卸しする", desc: "POS連携、在庫管理、物流システム、顧客管理（CRM）など携わった案件を整理。売上改善率やコスト削減額など定量的な成果を準備する。" },
              { step: "2", title: "Web開発・データ分析を補強する", desc: "Python・SQL・JavaScript（React/Next.js）の基礎を学ぶ。EC構築ならShopifyなどの知識も有効。" },
              { step: "3", title: "ECテック・リテールテック領域をリサーチ", desc: "OMO、ライブコマース、ダイナミックプライシング、リテールメディアなどのうち、自分の経験が最も活きる領域を見極める。" },
              { step: "4", title: "IT特化エージェントで求人レンジを確認", desc: "Geekly・ワークポート・レバテックキャリアなどに登録し、実際のECテック求人と提示年収レンジを比較する。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="routes" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験浅めからの参入ルート</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「小売の実務経験はあるが開発が浅い」「開発はできるが商流の理解が弱い」など、出発点によって最適な入り口は変わります。自分の現在地に近いルートから検討してください。
          </p>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">ルートA：商流知見を軸にOMO・PdMへ</h3>
              <p className="text-sm text-slate-600">店舗運営や在庫の理解を武器に、リテールテックのPdMやOMO推進から入り、技術理解を業務の中で深める。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">ルートB：既存の開発スキルにモダンスタックを足す</h3>
              <p className="text-sm text-slate-600">基幹・POS開発の経験者がReact・Python・SQLを補強してECテックのエンジニア職へ。学習成果を小さな制作物で示すと伝わりやすい。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">ルートC：購買データ分析へ寄せる</h3>
              <p className="text-sm text-slate-600">顧客・購買データに強みがあるなら、SQL・Pythonを軸にデータアナリストやレコメンド・需要予測の周辺ポジションを狙う。</p>
            </div>
          </div>
        </section>

        <section id="pitfalls" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくあるつまずきと対策</h2>
          <div className="space-y-3">
            {[
              { p: "「POS・在庫システムの経験」だけを書いて商流理解が伝わらない", s: "店舗・物流の課題と、それをどう解決し売上・在庫が改善したかを職務経歴書に具体的に書く。" },
              { p: "求人が見つからず1社のエージェントで止まってしまう", s: "IT特化と総合型を2社以上併用し、提案されるECテック求人の傾向を比較する。" },
              { p: "最新技術力で若手と比較され不利になる", s: "技術の最先端で勝負するより、小売ドメイン×ITの掛け合わせで応募ポジションを選ぶ。" },
              { p: "学習が手段化して目的を見失う", s: "志望職種の求人要件から逆算し、必要な技術だけに絞って学習する。" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <p className="text-sm font-bold text-slate-800 mb-1">つまずき：{item.p}</p>
                <p className="text-sm text-slate-600">対策：{item.s}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="midcareer" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              ミドル層の小売・流通系エンジニアにとって、ECテック転職は「最新技術力で若手と競う」より「店舗・商流の蓄積で勝負する」戦い方ができる点が利点です。30代・40代は店舗運営や物流の現場経験、関係部署との調整経験が豊富で、OMOの要件定義や現場導入の推進で評価されやすくなります。
            </p>
            <p className="text-slate-700 leading-relaxed mb-3">
              一方、コーディング比重の高いポジションだけに絞ると20代と競合しがちです。OMO・リテールテックのPdMやデータ活用など、商流の知見が強みに転じる職種を視野に入れると選択肢が広がります。
            </p>
            <p className="text-slate-700 leading-relaxed">
              年齢面の不安がある場合は
              <Link href="/age/40s/" className="text-petrol hover:underline">40代の転職</Link>や
              <Link href="/compare/40s-agents/" className="text-petrol hover:underline">40代向けエージェント比較</Link>
              も確認しておくと戦略を立てやすくなります。
            </p>
          </div>
        </section>

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

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">小売・流通の知識をECテックで活かそう</h2>
          <p className="text-blue-100 text-sm mb-4">
            まずはIT特化型エージェントに相談し、ECテック求人の実際のレンジと自分の市場価値を確認しましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "SIerからWeb系に転職するには", href: "/industry/sier-to-web/" },
              { name: "物流からLogiTech転職", href: "/industry/logistics/" },
              { name: "データサイエンティスト転職", href: "/skill/data-scientist/" },
              { name: "Geeklyの評判", href: "/review/geekly/" },
              { name: "エンジニア転職で年収は上がる？", href: "/knowledge/salary-change/" },
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
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
