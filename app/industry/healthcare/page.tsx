import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "医療・製薬業界からヘルステック転職【30代40代ガイド】",
  description:
    "医療系SE・製薬エンジニアからヘルステック・医療AI・遠隔医療への転職方法を解説。活かせるスキルと埋めるギャップ、年収の考え方、進め方を30代40代視点で紹介。",
};

const TITLE = "医療・製薬業界からヘルステック転職【30代40代ガイド】";
const DESC =
  "医療系SE・製薬エンジニアからヘルステック・医療AI・遠隔医療への転職方法を解説。活かせるスキルと埋めるギャップ、年収の考え方、進め方を30代40代視点で紹介。";

const toc = [
  { id: "conclusion", label: "結論：医療×ITは転職市場で希少" },
  { id: "trend", label: "ヘルステックのIT化・採用動向" },
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
  ["電子カルテ・医事会計の業務知識", "そのまま活きる", "医療現場のワークフロー理解はヘルステックPdM・SaaS開発で希少"],
  ["HL7 FHIR / DICOM など医療情報標準", "そのまま活きる", "データ連携・相互運用性の設計で直接評価される"],
  ["医療法・個人情報保護・薬機法の理解", "そのまま活きる", "SaMDや医療データ事業のコンプライアンス設計に必須"],
  ["モダンな言語（Python / TypeScript）", "要習得", "Web系・スタートアップの開発はモダンスタックが前提"],
  ["クラウド（AWS / GCP）", "要習得", "クラウド型電子カルテ・医療SaaSはクラウド運用が中心"],
  ["機械学習の基礎（医療AI志望）", "要習得", "画像診断支援・自然言語処理の開発で求められる"],
];

const patternTable = [
  ["ヘルステックエンジニア", "医療系Webサービス・アプリ開発", "Web開発スキル＋医療業務知識"],
  ["医療AIエンジニア", "画像診断・問診支援などのAI開発", "Python・ML＋臨床/規制の理解"],
  ["医療SaaSプロダクト開発", "クラウド型電子カルテ・医事会計", "業務知識＋クラウド開発"],
  ["医療DX・PdM／コンサル", "医療機関のデジタル化推進", "現場理解・要件定義・調整力"],
];

const faqs = [
  {
    q: "医療系SEの経験はヘルステック転職で評価されますか？",
    a: "評価されやすい傾向があります。電子カルテ、医事会計、DICOM、HL7 FHIRといった医療情報システムの知識を持つエンジニアは、医療ドメインを理解した人材として希少です。医療現場のワークフローや医療法・個人情報保護法の理解は、純粋なIT人材にはない強みとして打ち出せます。",
  },
  {
    q: "医療系からヘルステック転職で年収は上がりますか？",
    a: "一概には言えません。職種・企業フェーズ・現年収によって変わります。年収の絶対水準は個社の提示によるため、本ページでは特定の業界平均値は断定しません。判断材料として、レバテックが公表する正社員SEの年代別平均年収（30代約499万円・40代約618万円／2025年）や、doda公表のIT・通信の平均決定年収（2024年度486万円）を目安に、複数のエージェントで実際の求人レンジを確認することをおすすめします。",
  },
  {
    q: "プログラミング経験が浅くてもヘルステックに転職できますか？",
    a: "可能性はあります。医療SaaSのプロダクトマネージャーやカスタマーサクセス、医療DX推進といったポジションは、コードを書く比重より医療ドメイン知識・現場調整力が重視される傾向があります。並行してPythonやSQLの基礎を習得すると、応募できるポジションの幅が広がります。",
  },
  {
    q: "医療系からヘルステック転職で有利な資格はありますか？",
    a: "医療情報技師は医療×ITの業界理解を示す資格として知られています。加えてAWS認定やPython関連の資格があると技術面の説明材料になります。薬剤師・看護師などの医療系国家資格があれば、プロダクト開発での差別化につながる場合があります。資格は必須ではなく、実務経験の裏づけとして使うのが現実的です。",
  },
  {
    q: "電子カルテベンダーからの転職先はどこが考えられますか？",
    a: "クラウド型電子カルテや遠隔医療プラットフォームを開発するスタートアップ、医療AI企業、医療データ分析企業などが選択肢になります。電子カルテの構造や医療現場の運用を理解している点は、これらの企業で即戦力として説明しやすい経験です。",
  },
  {
    q: "医療系からヘルステック転職に強いエージェントは？",
    a: "IT・Web特化で求人提案が早いレバテックキャリア、求人量が豊富で全国対応のdoda ITエンジニアが基本の選択肢です。IT/Web/ゲーム特化で提案スピードに定評のあるGeeklyも併用候補になります。1社に絞らず2社以上に登録し、提案される医療IT求人の傾向を比較するのがおすすめです。",
  },
  {
    q: "エージェントに登録すると断られることはありますか？",
    a: "希望条件と求人がかみ合わない場合、紹介が少なくなることはあります。レバテックなど一部のIT特化エージェントは実務経験者向けの傾向があるため、経験が浅い場合は未経験歓迎求人も扱うワークポートなどを併用すると選択肢を確保しやすくなります。",
  },
  {
    q: "在職中でも転職活動は進められますか？",
    a: "可能です。多くのエージェントはオンライン面談や夜間・休日対応に対応しています。まずはスキルの棚卸しと求人レンジの確認から始め、応募は条件に合うものに絞ると在職中でも無理なく進められます。",
  },
];

export default function HealthcarePage() {
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
      <ArticleJsonLd title={TITLE} description={DESC} url="/industry/healthcare/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "業界別ガイド" },
          { name: "医療・製薬業界からヘルステック転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">{TITLE}</h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 医療の専門知識をヘルステック業界で活かす方法
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          医療DXの推進、遠隔医療の普及、医療AIの実用化が進むなかで、医療業界の業務知識とITスキルの両方を持つ人材への関心が高まっています。電子カルテ、医事会計、臨床データの知識は、ヘルステック領域では純粋なIT人材が持ちにくい武器になります。本記事では、医療系SE・製薬業界エンジニアがヘルステック・医療AI領域へ転職するための考え方と進め方を、30代・40代のミドルエンジニア視点で整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表 年代別平均年収（2025年）",
            "経済産業省『IT人材需給に関する調査』（2019年3月公表）",
            "パーソルキャリア doda 決定年収レポート（2025年5月公表）",
          ]}
        />

        {/* 目次 */}
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

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：医療×ITの掛け合わせは転職市場で希少</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-5">
            <p className="text-slate-700 leading-relaxed mb-3">
              医療系の業務知識を持つエンジニアのヘルステック転職は、<strong>十分に現実的</strong>です。ヘルステックでは医療現場のワークフロー、医療情報標準（HL7 FHIR／DICOM）、医療関連法規の理解が直接価値になり、これらは後から参入する純粋なIT人材が短期間で身につけにくい領域だからです。
            </p>
            <ul className="text-sm text-slate-700 space-y-1.5">
              <li>・<strong>強み</strong>：医療業務知識・規制理解はそのまま活きる希少資産</li>
              <li>・<strong>埋めるべきギャップ</strong>：モダンな言語とクラウド、（AI志望なら）機械学習の基礎</li>
              <li>・<strong>進め方</strong>：経験の棚卸し → スキル補強 → IT特化エージェントで求人レンジ確認</li>
            </ul>
          </div>
        </section>

        {/* 業界動向 */}
        <section id="trend" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ヘルステックのIT化・採用動向</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            遠隔医療、医療AI、PHR（パーソナルヘルスレコード）など、医療とITが交わる領域では新しいサービスが継続的に登場しています。市場規模や成長率の具体的な数値は出典・時点によって幅があるため本記事では断定しませんが、採用動向の背景として次のような構造的な動きが公開情報として語られています。
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">医療データ連携の標準化</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                電子カルテ情報の標準化やHL7 FHIRの普及、次世代医療基盤法に基づく医療データの二次利用など、医療データを扱う制度・規格の整備が進んでいます。データの構造や法規制を理解したうえで安全に扱えるエンジニアは、この文脈で評価されやすい立場にあります。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">医療AI・SaMDの実用化</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                画像診断支援やAI問診、SaMD（Software as a Medical Device＝プログラム医療機器）の薬事承認事例が増えています。医療機器規制やPMDA対応の知識は、医療AIを手がける企業にとって採用上の関心事になりやすい領域です。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">IT人材不足という追い風</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                経済産業省『IT人材需給に関する調査』（2019年3月公表）の試算では、2030年に最大約79万人のIT人材が不足するとされています。これは特定業界に限った数字ではありませんが、ドメイン知識を持つエンジニアが希少であるという全体傾向の背景として参考になります。
              </p>
            </div>
          </div>
        </section>

        {/* スキル表 */}
        <section id="skills" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">活かせるスキル／埋めるべきギャップ</h2>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="px-4 py-3 text-left font-semibold">スキル／知識</th>
                  <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">扱い</th>
                  <th className="px-4 py-3 text-left font-semibold">ヘルステックでの位置づけ</th>
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

        {/* 転職パターン */}
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
            コードを書く比重を高めたいならエンジニア職、医療現場との橋渡しを強みにしたいならPdM・医療DX推進が向きます。どのパターンでも「医療業務をどれだけ具体的に語れるか」が差別化の核になります。
          </p>
        </section>

        {/* 向き不向き */}
        <section id="fit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人／向いていない人</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-emerald-200 bg-emerald-50 rounded-xl p-5">
              <h3 className="font-bold text-emerald-800 mb-3 text-sm">こんな人は向いている</h3>
              <ul className="text-sm text-slate-700 space-y-2">
                {[
                  "電子カルテ・医事会計など医療システムの実務経験がある",
                  "医療現場のワークフローや法規制を具体的に語れる",
                  "新しい言語やクラウドの学習を継続できる",
                  "現場と開発をつなぐ要件定義・調整を厭わない",
                  "プロダクトで医療課題を解決することに関心がある",
                ].map((t, i) => (
                  <li key={i} className="flex gap-2"><span className="text-emerald-600 shrink-0">✓</span><span>{t}</span></li>
                ))}
              </ul>
            </div>
            <div className="border border-slate-200 bg-slate-50 rounded-xl p-5">
              <h3 className="font-bold text-slate-700 mb-3 text-sm">慎重に検討したい人</h3>
              <ul className="text-sm text-slate-700 space-y-2">
                {[
                  "医療ドメインの経験がなく、技術力だけで勝負したい",
                  "規制や医療現場の制約に向き合う仕事を避けたい",
                  "学習に時間を割けず、即戦力の技術力も足りない",
                  "短期間での大幅な年収アップだけを目的にしている",
                ].map((t, i) => (
                  <li key={i} className="flex gap-2"><span className="text-slate-400 shrink-0">▲</span><span>{t}</span></li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            「慎重に検討したい人」に当てはまっても諦める必要はありません。ドメイン理解が弱いなら現職で医療システムの経験を積み増す、技術力が不足するなら学習で補うなど、ギャップを埋める順番を決めれば道筋は描けます。
          </p>
        </section>

        {/* 職務経歴書 */}
        <section id="resume" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">職務経歴書での見せ方（Before/After）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            医療系の経験は「何を作ったか」だけでなく「医療現場のどんな制約をどう解決し、どんな成果につながったか」まで書くと、ヘルステック企業に伝わりやすくなります。以下は一般化した記入例です（個人の実績に置き換えて使ってください）。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <div className="bg-slate-100 px-4 py-2 text-xs font-bold text-slate-500">Before（伝わりにくい例）</div>
              <p className="px-4 py-3 text-sm text-slate-600">電子カルテシステムの保守・運用を担当。要件定義から携わった。</p>
            </div>
            <div className="border border-[var(--line)] rounded-lg overflow-hidden">
              <div className="bg-petrol-soft px-4 py-2 text-xs font-bold text-petrol-deep">After（医療×ITが伝わる例）</div>
              <p className="px-4 py-3 text-sm text-slate-700">
                病院向け電子カルテの導入・運用を担当。HL7に基づく外部システム連携の要件定義を主導し、医師・看護師の運用負荷を踏まえた画面設計を提案。個人情報保護・医療法の制約を満たす運用フローを整備し、現場の入力工数削減に貢献。医療標準規格と現場ワークフローの両面を理解している点を強みとする。
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            数値はご自身が実際に計測した範囲のみを記載してください。書き方の基本は
            <Link href="/knowledge/resume/" className="text-petrol hover:underline">職務経歴書の書き方</Link>
            もあわせて参考にしてください。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方（公的・公表データ）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ヘルステック特有の業界平均年収を示す信頼できる公開統計は限られるため、ここでは出典の明確なIT職全体のデータを目安として示します。実際の提示額は個社・職種・フェーズで大きく変わる点に注意してください。
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
            これらはあくまで目安です。正確な相場感はエージェントが提示する個別求人レンジで把握するのが確実です。年代別の詳しい考え方は
            <Link href="/knowledge/salary-30s/" className="text-petrol hover:underline">30代エンジニアの年収</Link>・
            <Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代エンジニアの年収</Link>
            も参考にしてください。
          </p>
        </section>

        {/* 企業タイプ */}
        <section id="companies" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">主な企業タイプと例</h2>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">クラウド型電子カルテ・医療SaaS</h3>
              <p className="text-sm text-slate-600">医療機関向けの基幹システムをクラウドで提供する企業。電子カルテ・医事会計の業務知識がそのまま活きやすい。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">遠隔医療・オンライン診療プラットフォーム</h3>
              <p className="text-sm text-slate-600">予約・問診・決済・服薬指導までをオンラインでつなぐサービス。現場運用の理解が要件定義で評価される。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">医療AI・医療データ分析</h3>
              <p className="text-sm text-slate-600">画像診断支援や臨床データ解析を手がける企業。Python・MLに加え、規制や臨床現場の理解が差別化要素になる。</p>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            個別企業名は採用状況により変動するため、最新の求人はエージェント経由で確認してください。
          </p>
        </section>

        {/* 進め方 */}
        <section id="howto" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職の進め方</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "医療業界の経験を棚卸しする", desc: "電子カルテ導入、医事会計開発、院内ネットワーク構築など携わった案件と成果を具体的に整理。HL7・DICOM・医療法対応の経験も明記する。" },
              { step: "2", title: "モダン開発スキルを補強する", desc: "Python・TypeScript・クラウド（AWS/GCP）の基礎を学ぶ。医療AI志望ならscikit-learnやTensorFlowなど機械学習ライブラリにも触れておく。" },
              { step: "3", title: "ヘルステック領域をリサーチする", desc: "遠隔医療・医療AI・PHR・デジタル治療（DTx）などのうち、自分の医療知識が最も活きる領域を見極める。" },
              { step: "4", title: "IT特化エージェントで求人レンジを確認", desc: "レバテックキャリア・doda ITエンジニアなどに登録し、実際の医療IT求人と提示年収レンジを比較する。" },
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

        {/* 参入ルート */}
        <section id="routes" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験浅めからの参入ルート</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「医療の業務経験はあるが開発経験が浅い」「開発はできるが医療ドメインが弱い」など、出発点によって最適な入り口は変わります。自分の現在地に近いルートから検討してください。
          </p>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">ルートA：医療業務知識を軸にPdM・DX推進へ</h3>
              <p className="text-sm text-slate-600">コードを書く比重が低めの医療SaaSのPdMや医療DX推進から入り、技術理解を業務の中で深める。医療ドメインの厚みが武器になる。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">ルートB：既存の開発スキルにモダンスタックを足す</h3>
              <p className="text-sm text-slate-600">医療システム開発の経験者が、Python・TypeScript・クラウドを補強してヘルステックのエンジニア職へ。学習成果を小さな制作物で示すと伝わりやすい。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">ルートC：データ・AI領域へ寄せる</h3>
              <p className="text-sm text-slate-600">臨床データや医事データの扱いに強みがあるなら、SQL・Pythonを軸に医療データ分析・医療AIの周辺ポジションを狙う。</p>
            </div>
          </div>
        </section>

        {/* つまずき */}
        <section id="pitfalls" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくあるつまずきと対策</h2>
          <div className="space-y-3">
            {[
              { p: "「医療システムの経験」だけを書いて医療知識が伝わらない", s: "現場の制約・規制対応・ワークフロー理解を職務経歴書に具体的に書き、ドメインの厚みを言語化する。" },
              { p: "求人が見つからず1社のエージェントで止まってしまう", s: "IT特化と総合型を2社以上併用し、提案される医療IT求人の傾向を比較する。求人が少ない時期は条件を緩めて市場感をつかむ。" },
              { p: "最新技術力で若手と比較され不利になる", s: "技術の最先端で勝負するより、医療ドメイン×ITの掛け合わせで応募ポジションを選ぶ。" },
              { p: "学習が手段化して目的を見失う", s: "志望職種の求人要件から逆算し、必要な技術だけに絞って学習する。" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <p className="text-sm font-bold text-slate-800 mb-1">つまずき：{item.p}</p>
                <p className="text-sm text-slate-600">対策：{item.s}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 30代40代視点 */}
        <section id="midcareer" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              ミドル層の医療系エンジニアにとって、ヘルステック転職は「未経験の若手と競う」のではなく「医療ドメインの蓄積で勝負する」戦い方ができる点が大きな利点です。30代・40代は現場での失敗・調整経験が豊富で、医療現場の制約を踏まえた要件定義や、多職種をまたぐプロジェクト推進で評価されやすくなります。
            </p>
            <p className="text-slate-700 leading-relaxed mb-3">
              一方で、純粋な最新技術力だけで20代と競うと不利になりがちです。コーディング比重の高いポジションに固執するより、医療知識を軸にしたPdM・医療DX推進・規制対応など、年齢が強みに転じる職種を視野に入れると選択肢が広がります。
            </p>
            <p className="text-slate-700 leading-relaxed">
              年齢に関する不安がある場合は
              <Link href="/age/40s/" className="text-petrol hover:underline">40代の転職</Link>や
              <Link href="/compare/40s-agents/" className="text-petrol hover:underline">40代向けエージェント比較</Link>
              もあわせて確認しておくと、現実的な戦略を立てやすくなります。
            </p>
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
          <h2 className="text-xl font-bold mb-3">医療の専門知識をヘルステックで活かそう</h2>
          <p className="text-blue-100 text-sm mb-4">
            まずはIT特化型エージェントに相談し、医療IT求人の実際のレンジと自分の市場価値を確認しましょう。
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
              { name: "製造業エンジニアからIT転職", href: "/industry/manufacturing/" },
              { name: "AI/ML転職ガイド", href: "/skill/ai-ml/" },
              { name: "レバテックキャリアの評判", href: "/review/levtech/" },
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
