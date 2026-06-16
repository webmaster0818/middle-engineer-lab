import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "製造業からIT転職する方法｜組み込み経験を活かす戦略";
const DESCRIPTION =
  "製造業エンジニア・組み込みエンジニアからIT業界への転職を徹底解説。製造DX・IoT・組み込み経験の活かし方、活かせるスキルと埋めるべきギャップ、年収の考え方、おすすめエージェントをガイドします。";

const toc = [
  { id: "conclusion", label: "結論：製造業・組み込み経験はIT転職で武器になる" },
  { id: "trend", label: "製造業のIT化・採用動向" },
  { id: "gap", label: "活かせるスキル / 埋めるべきギャップ" },
  { id: "embedded", label: "組み込みエンジニアの強みの活かし方" },
  { id: "patterns", label: "転職パターン（職種×企業タイプ）" },
  { id: "salary", label: "年収の考え方（公表データ）" },
  { id: "company-types", label: "主な企業タイプと具体例" },
  { id: "steps", label: "転職の進め方" },
  { id: "middle", label: "30代・40代の視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const activeRows: [string, string][] = [
  ["生産管理・品質管理の業務知識", "製造業向けSaaSやDX推進で、現場課題を理解した提案・設計ができる希少人材になる"],
  ["組み込み・制御の実装経験", "C/C++・RTOS・ハードウェア理解は、IoTやエッジ、車載・FA領域でそのまま活きる"],
  ["設備保全・工程改善の経験", "予知保全・スマートファクトリーの要件定義で現場目線が武器になる"],
  ["品質・安全への高い意識", "ミスが許されない環境で培った検証・テストの徹底は、信頼性の高い開発で評価される"],
  ["データに基づく改善（QC的思考）", "生産データの分析・改善サイクルは、データ活用やDXの素地として通用する"],
];

const fillRows: [string, string][] = [
  ["Web・クラウドの基礎", "AWS/Azure/GCPの基礎、Webアプリやネットワークの仕組みを理解する"],
  ["モダンな言語・開発環境", "PythonやSQL、Git/GitHubの実務運用に慣れる。組み込み経験者はC系の素地が活きる"],
  ["アジャイル・チーム開発", "ウォーターフォール中心の現場が多いため、反復的な開発文化への適応が必要"],
  ["IoT/クラウド連携の知識", "センサーデータの収集・蓄積・可視化までのデータパイプラインを理解する"],
  ["公開できる成果物", "個人開発やデータ分析の成果をGitHub等で示せると、IT適性の証明になる"],
];

const companyTypes: { title: string; desc: string; links: { name: string; href: string }[] }[] = [
  {
    title: "総合電機・大手メーカーのDX/IT部門",
    desc: "製造業のドメインを持つ大手で、社内DXや制御・組み込みからソフトウェアへ軸足を移す道。これまでの業界知識を最大限に活かせる。",
    links: [
      { name: "日立製作所", href: "/company/hitachi/" },
      { name: "パナソニック", href: "/company/panasonic/" },
      { name: "ソニー", href: "/company/sony/" },
    ],
  },
  {
    title: "SIer・大手ITベンダー",
    desc: "製造業向けの基幹システムやDX案件を多く扱う。業界知識を持つエンジニアは、要件定義やプリセールスで重宝される。",
    links: [
      { name: "富士通", href: "/company/fujitsu/" },
      { name: "NTTデータ", href: "/company/ntt-data/" },
      { name: "NRI（野村総研）", href: "/company/nri/" },
    ],
  },
  {
    title: "製造業向けSaaS・スタートアップ",
    desc: "生産管理・品質管理・サプライチェーン最適化などのプロダクトを提供する企業。現場を知るエンジニアの採用に積極的。",
    links: [
      { name: "組み込みエンジニアの転職", href: "/skill/embedded/" },
      { name: "Python転職ガイド", href: "/skill/python/" },
    ],
  },
];

const faqs = [
  {
    q: "製造業エンジニアの経験はIT転職で評価されますか？",
    a: "評価されます。特に製造DX・IoT・スマートファクトリー領域では、生産管理や品質管理、設備保全といった現場の業務知識を持つエンジニアは希少です。業務知識とITスキルの掛け合わせは、純粋なIT人材にはない強みになります。",
  },
  {
    q: "組み込みエンジニアからIT（Web/クラウド）に移れますか？",
    a: "移れます。C/C++・RTOS・ハードウェア制御の経験は、IoTやエッジコンピューティング、車載・FA領域で直接活きます。Web/クラウドに軸足を移す場合も、低レイヤーの理解は性能最適化や信頼性設計で強みになります。組み込みのキャリアは別記事でも解説しています。",
  },
  {
    q: "プログラミング未経験でもIT転職できますか？",
    a: "現場の制御・生産技術の経験があれば、製造DXやIoT領域を中心に可能性があります。ただしWeb/クラウドが未経験の場合は、PythonやSQL、クラウドの基礎を独学で身につけてから活動を始めるのが現実的です。年齢が上がるほど学習の前倒しが効いてきます。",
  },
  {
    q: "製造業からIT転職すると年収はどうなりますか？",
    a: "移行先の職種と企業タイプ次第です。参考としてレバテック公表の年代別平均年収（2025年）では正社員SEの30代が約499万円、40代が約618万円です。doda（パーソルキャリア）の2024年度決定年収レポート（2025年5月公表）では転職者の約6割が年収アップ、IT・通信の平均決定年収は2024年度486万円とされています。製造DXやIoTの専門ポジションでは高めのレンジも狙えますが、保証されるものではありません。",
  },
  {
    q: "製造業からIT転職で有利な資格はありますか？",
    a: "基本情報技術者試験やAWS認定資格（クラウドプラクティショナー等）は基礎力の証明になります。加えて品質管理検定や生産管理系の資格を持っていると、製造DX領域で差別化ポイントになります。資格より実際に手を動かした成果物の方が評価されやすい点は意識しましょう。",
  },
  {
    q: "製造業から転職しやすいIT職種は何ですか？",
    a: "製造DXエンジニア、IoTエンジニア、生産管理系業務システムのSE、DXコンサルタントが移行しやすい職種です。組み込み経験者は車載・FA・エッジ系、製造業向けSaaSのプリセールスやカスタマーサクセスも業務知識が直接活きます。",
  },
  {
    q: "製造業からIT転職に強いエージェントは？",
    a: "異業種・未経験寄りからのIT転職に対応するワークポートや、求人数が多くDX・IoT求人も扱うdoda（IT特化）が候補です。組み込み・制御系を狙うなら、専門職に強いIT特化型エージェントを併用するとよいでしょう。複数社を比較するのが基本です。",
  },
  {
    q: "40代でも製造業からIT転職できますか？",
    a: "可能ですが、未経験のWeb開発職をゼロから狙うより、業界知識を活かせるDX推進・要件定義・プリセールス・PMなどを軸にする方が現実的です。求人は絞られるため、非公開求人を持つエージェントの活用が鍵になります。",
  },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

export default function ManufacturingPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/industry/manufacturing/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "業界別ガイド" },
          { name: "製造業からIT転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          製造業からIT転職する方法｜組み込み経験を活かす戦略
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | 製造業・組み込みの知識を武器にIT業界で活躍する方法</p>

        <p className="text-slate-600 leading-relaxed mb-2">
          製造業のDXが進む中で、生産管理・品質管理・設備保全といった現場の業務知識や、組み込み・制御の実装経験を持つエンジニアの価値が高まっています。これらは純粋なIT人材にはない希少な強みであり、IT業界で十分に通用します。
        </p>
        <p className="text-slate-600 leading-relaxed mb-6">
          本記事では、製造業エンジニア・組み込みエンジニアがIT業界へ転職するための現実的な進め方、活かせるスキルと埋めるべきギャップ、狙い目の職種までを解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表の年代別平均年収（2025年）",
            "doda（パーソルキャリア）2024年度決定年収レポート（2025年5月公表）",
            "経済産業省 IT人材需給に関する調査（2019年3月公表）",
          ]}
        />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2 text-sm">
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
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：製造業・組み込み経験はIT転職で武器になる</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3 font-medium">
              製造業からのIT転職は現実的です。鍵は「現場の業務知識」と「低レイヤーの実装経験」を、IT側の文脈に翻訳して示せるかどうかにあります。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① 狙い目は製造DX・IoT・組み込み（車載/FA/エッジ）・製造業向けSaaSなど、業界知識が直接活きる領域。</li>
              <li>② Web/クラウドの基礎は学習で補える。組み込み経験者はC系の素地が強み。</li>
              <li>③ 年代が上がるほど「未経験Web職」より「業界知識×IT」のポジションが現実的。</li>
            </ul>
          </div>
        </section>

        {/* 採用動向 */}
        <section id="trend" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">製造業のIT化・採用動向</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            スマートファクトリー、予知保全、デジタルツインなど、製造業ではデジタル技術の活用が広がっています。こうした取り組みでは、ITだけでなく「現場の業務と設備を理解した人材」が不可欠です。製造業の現場を知るエンジニアがIT側に回ることで、要件定義の精度や導入の現実性が大きく高まります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            IT人材の不足も追い風です。経済産業省の「IT人材需給に関する調査」（2019年3月公表）では、2030年に最大約79万人のIT人材不足が試算されています。製造業向けSaaSやDX推進の現場では、業界知識を持つエンジニアの採用ニーズが続いており、異業種からの転職組も含めて受け入れが進んでいます。
          </p>
        </section>

        {/* ギャップ */}
        <section id="gap" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">活かせるスキル / 埋めるべきギャップ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            自分の経験のどこが武器になり、どこを補えばよいかを整理しましょう。製造業・組み込みの経験は「捨てる」のではなく「翻訳して活かす」のが基本戦略です。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
              <p className="font-bold text-emerald-800 mb-3 text-sm">活かせるスキル</p>
              <ul className="space-y-3">
                {activeRows.map(([k, v], i) => (
                  <li key={i} className="text-sm text-slate-700">
                    <span className="font-medium text-slate-800">{k}</span>
                    <br />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="font-bold text-amber-800 mb-3 text-sm">埋めるべきギャップ</p>
              <ul className="space-y-3">
                {fillRows.map(([k, v], i) => (
                  <li key={i} className="text-sm text-slate-700">
                    <span className="font-medium text-slate-800">{k}</span>
                    <br />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 組み込み */}
        <section id="embedded" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">組み込みエンジニアの強みの活かし方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            組み込み・制御の経験は、IT転職において「捨てる経歴」ではなく「希少な専門性」です。活かし方は大きく分けて2方向あります。
          </p>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">方向①：専門性を深める（車載・FA・IoT・エッジ）</h3>
              <p className="text-sm text-petrol-deep">C/C++、RTOS、ハードウェア制御の経験をそのまま活かし、車載ソフトウェア、ファクトリーオートメーション、IoT/エッジ機器の開発へ。低レイヤーを扱える人材は慢性的に不足しており、専門性で勝負できる。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">方向②：上位レイヤーへ広げる（クラウド・データ）</h3>
              <p className="text-sm text-petrol-deep">デバイスから上がってくるデータを収集・蓄積・可視化するクラウド側へ。組み込みで培ったハードウェア理解は、IoTシステム全体の設計やパフォーマンス最適化で強みになる。PythonやクラウドのキャッチアップでWeb/データ領域にも広げられる。</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">
            組み込み軸でのキャリアは
            <Link href="/skill/embedded/" className="text-petrol hover:underline">組み込みエンジニアの転職ガイド</Link>
            、データ・クラウド側へ広げるなら
            <Link href="/skill/python/" className="text-petrol hover:underline">Python転職ガイド</Link>
            ・
            <Link href="/skill/aws/" className="text-petrol hover:underline">AWS転職ガイド</Link>
            も参考にしてください。
          </p>
        </section>

        {/* 転職パターン */}
        <section id="patterns" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職パターン（職種×企業タイプ）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            製造業経験が活きる代表的な職種を整理します。年収は企業・経験により幅があるため、ここでは仕事内容を中心に示します（具体的な相場は次章の公表データを参照）。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["製造DXエンジニア", "工場・生産プロセスのデジタル化を技術面で推進"],
                  ["IoT／エッジエンジニア", "センサー・デバイスとクラウドの連携、データ収集基盤の開発"],
                  ["組み込み（車載・FA）エンジニア", "制御・低レイヤーの専門性を活かした機器・システム開発"],
                  ["製造業向けSaaSの開発・SE", "生産管理・品質管理プロダクトの開発、業務要件の設計"],
                  ["DXコンサルタント／プリセールス・CS", "製造業向けITソリューションの戦略策定・提案・導入支援"],
                ].map(([title, desc], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200 whitespace-nowrap align-top">{title}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方（公表データ）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「製造業からITに移ると年収が上がる／下がる」と一律には言えません。移行先の職種・企業タイプと、自分の市場価値で変わります。IT職全般の公表データを基準に、現実的な期待値を持ちましょう。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">データ</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">数値</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["正社員SE 30代の平均年収（レバテック公表・2025年）", "約499万円"],
                  ["正社員SE 40代の平均年収（同）", "約618万円"],
                  ["転職者の年収アップ割合（doda・2025年5月公表）", "約6割"],
                  ["IT・通信の平均決定年収 2024年度（同）", "486万円（前年度469万円）"],
                ].map(([label, val], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{label}</td>
                    <td className="px-4 py-3 text-petrol font-medium border-b border-slate-200 whitespace-nowrap">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-xs leading-relaxed mb-4">
            ※出典：レバテック公表の年代別平均年収（2025年）、doda（パーソルキャリア）2024年度決定年収レポート（2025年5月公表）。数値は調査時点の公表値で、個別企業の提示額を保証するものではありません。
          </p>
          <p className="text-slate-600 leading-relaxed">
            年収の詳しい考え方は
            <Link href="/knowledge/salary-change/" className="text-petrol hover:underline">エンジニア転職で年収は上がる？</Link>
            を参考にしてください。
          </p>
        </section>

        {/* 企業タイプ */}
        <section id="company-types" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">主な企業タイプと具体例</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            製造業の経験が活きる受け皿は、大手メーカーのDX部門・SIer・製造業向けSaaSなど多様です。各社の採用情報や技術スタックは個別ページ（公開情報ベース）も参考にしてください。
          </p>
          <div className="space-y-4">
            {companyTypes.map((c, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{c.title}</h3>
                <p className="text-sm text-slate-600 mb-3">{c.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {c.links.map((l, j) => (
                    <Link
                      key={j}
                      href={l.href}
                      className="text-xs font-medium text-petrol border border-[var(--line)] rounded-full px-3 py-1 hover:bg-petrol-soft"
                    >
                      {l.name} →
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ステップ */}
        <section id="steps" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職の進め方</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "ITの基礎知識を身につける", desc: "Python・SQL・クラウド（AWS/Azure）の基礎を学ぶ。Git/GitHubの操作にも慣れる。組み込み経験者はC系の素地を活かして低レイヤー系へ進む選択肢もある。" },
              { step: "2", title: "製造業・組み込みの経験を棚卸しする", desc: "生産管理・品質管理・設備保全・制御開発の経験を具体的に整理。可能なら数値で成果を表現する。" },
              { step: "3", title: "製造DX・IoTのトレンドをキャッチアップ", desc: "スマートファクトリー、予知保全、IoT/エッジ、デジタルツインなどを把握し、自分の経験を「製造業×IT」の文脈で語れるようにする。" },
              { step: "4", title: "転職エージェントに登録", desc: "異業種転職に対応するワークポート、求人数が多いdoda（IT特化）などに登録。組み込み・制御系は専門に強いエージェントを併用し、市場価値を確認する。" },
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
        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の視点</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ミドル層の製造業出身者は、若手と同じ「未経験Web職」を狙うより、これまでの業界知識・専門性を活かせるポジションを選ぶ方が成功率が高まります。
          </p>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：専門性×ITで選択肢を広げる</h3>
              <p className="text-sm text-petrol-deep">組み込み・制御の専門性を深める道と、製造DX・IoTでIT側に広げる道の両方が現実的。基礎学習を前倒しすれば、ポテンシャルと専門性の両面で評価されやすい。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：業界知識とリーダー経験で勝負</h3>
              <p className="text-sm text-petrol-deep">DX推進・要件定義・プリセールス・PMなど、現場理解とマネジメントが活きる領域が中心。求人は絞られるため、非公開求人を持つエージェントの活用が鍵になる。</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">
            年代別の戦略は
            <Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職ガイド</Link>
            ・
            <Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職ガイド</Link>
            を参考にしてください。
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
          <h2 className="text-xl font-bold mb-3">製造業・組み込みの経験をIT業界で活かそう</h2>
          <p className="text-blue-100 text-sm mb-4">まずはIT特化型エージェントに相談して、あなたの市場価値と狙える求人を確認しましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "組み込みエンジニアの転職ガイド", href: "/skill/embedded/" },
              { name: "SIerからWeb系に転職するには", href: "/industry/sier-to-web/" },
              { name: "30代エンジニアの転職ガイド", href: "/age/30s/" },
              { name: "エンジニア転職で年収は上がる？", href: "/knowledge/salary-change/" },
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
              { name: "日立製作所の転職難易度・年収", href: "/company/hitachi/" },
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
