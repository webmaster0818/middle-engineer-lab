import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "組み込みエンジニアの仕事内容｜職業分類の定義・開発工程・ES試験データ【2026年】";
const DESCRIPTION =
  "組み込みエンジニアの仕事内容は、機器に組み込まれて動作を制御するソフトウェアの要件定義・設計・開発・テストです。職業分類の定義、欧州ESCOのスキル照合、IPA試験の応募者の業務別内訳（当サイト集計）、C言語で実行したビット操作とvolatileの例を整理します。";
const URL = "/knowledge/embedded-engineer/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "組み込みエンジニアの定義（厚生労働省編職業分類）" },
  { id: "boundary", label: "隣接する職業との境目" },
  { id: "process", label: "開発工程と各工程の仕事内容" },
  { id: "esco", label: "ESCOのスキル照合（当サイト集計）" },
  { id: "es-data", label: "エンベデッドシステムスペシャリスト試験のデータ（当サイト集計）" },
  { id: "code", label: "組み込み開発で使うCの書き方（当サイト実行）" },
  { id: "related", label: "転職・資格の詳しい情報" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "組み込みエンジニアの仕事内容を簡単に言うと何ですか？",
    a: "家電・自動車・産業機器などの機器に組み込まれ、その動作を制御するソフトウェアを作る仕事です。厚生労働省編職業分類では「009-02 ソフトウェア開発技術者（組込・制御系）」に当たり、マイクロコントローラのソフトウェアを作成するための要件定義、基本設計書・詳細設計書の作成、仕様書の作成などの開発の仕事と定義されています。",
  },
  {
    q: "組み込みエンジニアとプログラマーの違いは何ですか？",
    a: "厚生労働省編職業分類では、組込・制御系のソフトウェア開発技術者（009-02）は要件定義や設計書・仕様書の作成を担う職業とされ、プログラミング言語でソースコードを記述する仕事にもっぱら従事する場合は「009-03 プログラマー」に分類すると記載されています。実際の職場では両方を兼ねることも多く、求人票の職務内容で確認する必要があります。",
  },
  {
    q: "組み込みエンジニアの開発工程はどのようなものですか？",
    a: "職業分類の説明では、要件定義、基本設計書・詳細設計書・仕様書の作成、プログラムの開発、作成したソフトウェアのテストが挙げられています。IPAのエンベデッドシステムスペシャリスト試験の業務と役割には、これに加えてハードウェアとソフトウェアへの機能分担の検討や、リアルタイム性を踏まえた設計、開発環境の整備が含まれています。",
  },
  {
    q: "組み込み開発はウォーターフォール型が多いのですか？",
    a: "IPA「2022年度組込み/IoT産業の動向把握等に関する調査」（2023年6月発行）では、現在の開発がウォーターフォール開発/V字開発で「ほぼすべて」または「どちらかというと多い」と回答した企業は合計34％、アジャイル開発では合計12％でした。いずれも「わからない」が27％あり、企業の回答である点に留意が必要です。",
  },
  {
    q: "組み込みエンジニアに関係する国家試験はありますか？",
    a: "IPAの情報処理技術者試験に、高度試験のエンベデッドシステムスペシャリスト試験があります。令和7年度秋期は応募者1,696人、受験者1,156人、合格者177人で、合格率は15.3％でした。応募者を業務別に見ると、「エンベデッドシステム開発」と回答した人が23.9％で、「その他・無記入」を除く業務の中で最も多くなっています（当サイト集計）。",
  },
  {
    q: "なぜ組み込み開発ではvolatileやビット演算を使うのですか？",
    a: "機器の動作は、レジスタと呼ばれる番地の各ビットで制御・監視することが多いためです。当サイトのPCで、volatileを付けない変数と付けた変数をそれぞれ待ち合わせるC関数をコンパイルしたところ、付けない場合は値を1回だけ読んで同じ場所を回り続け、付けた場合はループのたびに値を読み直す機械語が出力されました。",
  },
];

const classificationRows = [
  { code: "009-02 ソフトウェア開発技術者（組込・制御系）", def: "各種の機械器具に組み込まれ、その動作を制御するマイクロコントローラのソフトウェアを作成するため、要件定義、基本設計書・詳細設計書の作成、仕様書の作成などの開発の仕事に従事するもの", ex: "組込系ソフトウェア開発技術者、システムエンジニア（組込、IoT）、制御系ソフトウェア開発技術者、ファームウェア開発技術者" },
  { code: "009-01 ソフトウェア開発技術者（WEB・オープン系）", def: "ウェブ系・オープン系のソフトウェアを作成するため、要件定義、基本設計書・詳細設計書の作成、仕様書の作成などの開発の仕事に従事するもの", ex: "Web系ソフトウェア開発技術者、システムエンジニア（業務用システム）、モバイルアプリケーション開発技術者など" },
  { code: "009-03 プログラマー", def: "ソフトウェアの設計書にもとづくプログラムの作成、作成したプログラムのテスト、プログラムの保守に必要な文書の作成などの仕事に従事するもの", ex: "ソフトウェアプログラマー、産業用ロボットティーチング技術者、NC工作機械プログラマーなど" },
];

const boundaryRows = [
  { work: "電気機械器具・情報通信機械器具の動作を制御するために組み込まれるマイクロコンピュータのソフトウェアを作成する", to: "009-02（制御系ソフトウェア開発技術者）", note: "電気・電子機器の開発技術者（006-02）からは除かれる" },
  { work: "生産設備の動作を制御するために組み込まれるマイクロコンピュータのソフトウェアを作成する", to: "009-02（制御系ソフトウェア開発技術者）", note: "製造技術者（007）からは除かれる" },
  { work: "回路・電子機器・半導体製品などの設計・開発", to: "006-02 電気・電子・電気通信開発技術者", note: "例示に回路設計技術者、電子機器設計技術者、LSI設計技術者など" },
  { work: "プログラミング言語でソースコードを記述する仕事にもっぱら従事する", to: "009-03 プログラマー", note: "009-02の説明に「プログラマー［009-03］」への振り分けが明記されている" },
  { work: "プログラムの誤り・欠陥などのバグを修正する、ソフトウェアのテスト", to: "009-99 その他の情報処理・通信技術者", note: "例示にソフトウェアテスト技術者、テストエンジニア、デバッガーなど" },
];

const processRows = [
  { step: "要件の調査・機能仕様の決定", jilpt: "要件定義", ipa: "対象とするシステムの機能要件、技術的要件、環境条件、品質要件を調査・分析し、機能仕様を決定する" },
  { step: "ハードウェアとソフトウェアの機能分担・アーキテクチャ設計", jilpt: "基本設計書の作成", ipa: "機能仕様を実現するハードウェアとソフトウェアへの機能分担を検討して、最適なシステムアーキテクチャを設計し、各要求仕様を策定する" },
  { step: "詳細設計・仕様書の作成", jilpt: "詳細設計書・仕様書の作成", ipa: "機能仕様とリアルタイム性を最適に実現するハードウェアとソフトウェアのトレードオフに基づく機能分担を図り、設計書・仕様書の作成を行う" },
  { step: "プログラムの開発", jilpt: "プログラムの開発", ipa: "適切なソフトウェア開発モデルを選択し、各工程の作業を主導的に実施する" },
  { step: "テスト", jilpt: "作成したソフトウェアのテスト", ipa: "（同上。各工程の作業に含まれる）" },
  { step: "開発環境の整備", jilpt: "（記載なし）", ipa: "開発を遂行する上での開発環境を整備し、改善する" },
];

const styleRows = [
  { style: "ウォーターフォール開発/V字開発（n=1,020）", all: "14％", many: "20％", sum: "34％", unknown: "27％" },
  { style: "アジャイル開発（n=1,014）", all: "5％", many: "7％", sum: "12％", unknown: "27％" },
];

const talentRows = [
  { role: "設計技術者（n=976）", top: "18％", want: "51％", sum: "69％" },
  { role: "実装技術者（n=954）", top: "11％", want: "44％", sum: "55％" },
  { role: "セーフティ／セキュリティ技術者（n=931）", top: "8％", want: "42％", sum: "50％" },
  { role: "検証技術者（n=935）", top: "6％", want: "36％", sum: "42％" },
];

const escoRows = [
  { item: "ESCOコード", esd: "2514.2.1", sd: "2512.3", des: "2511.4" },
  { item: "上位の区分", esd: "ICT application developer（職業）", sd: "ISCO-08 2512 Software developers", des: "ISCO-08 2511 Systems analysts" },
  { item: "必須スキル（essential）", esd: "16項目", sd: "23項目", des: "15項目" },
  { item: "任意スキル（optional）", esd: "58項目", sd: "63項目", des: "59項目" },
  { item: "embedded systems software developer と共通の必須スキル", esd: "―", sd: "12項目", des: "4項目" },
];

const esdOnly = [
  "組込みシステム（embedded systems）",
  "ICTデバイスドライバの開発（develop ICT device driver）",
  "モノのインターネット（Internet of Things）",
  "技術文書の読解（interpret technical texts）",
];

const desOnly = [
  "リアルタイムコンピューティング（real-time computing）",
  "信号処理（signal processing）",
  "制御工学の理論（engineering control theory）",
  "ICT通信プロトコル（ICT communications protocols）",
  "電子設計仕様の読解（interpret electronic design specifications）",
  "技術要件の定義（define technical requirements）",
  "ソフトウェア設計の作成（create software design）",
  "システム開発ライフサイクル（systems development life-cycle）",
  "処理手順のアルゴリズム化（task algorithmisation）",
  "ICTコンサルティングの提供（provide ICT consulting advice）",
  "創造的なアイデアの考案（develop creative ideas）",
];

const gyomuRows = [
  { work: "エンベデッドシステム開発", ap: "396人", share: "23.9％" },
  { work: "プログラム開発", ap: "237人", share: "14.3％" },
  { work: "システム設計", ap: "173人", share: "10.4％" },
  { work: "研究・開発", ap: "118人", share: "7.1％" },
  { work: "プロジェクト管理", ap: "71人", share: "4.3％" },
  { work: "システム化戦略・企画・計画", ap: "40人", share: "2.4％" },
  { work: "その他・無記入", ap: "488人", share: "29.5％" },
  { work: "上記以外の業務（合計）", ap: "134人", share: "8.1％" },
];

const esSeries = [
  { term: "平成21年度春期", ap: "5,875", ex: "4,080", ps: "689", rate: "16.9％" },
  { term: "平成26年度春期", ap: "4,874", ex: "3,506", ps: "601", rate: "17.1％" },
  { term: "平成31年度春期", ap: "4,858", ex: "3,653", ps: "585", rate: "16.0％" },
  { term: "令和2年度10月", ap: "2,504", ex: "1,962", ps: "321", rate: "16.4％" },
  { term: "令和3年度秋期", ap: "2,798", ex: "2,185", ps: "400", rate: "18.3％" },
  { term: "令和4年度秋期", ap: "3,136", ex: "2,415", ps: "476", rate: "19.7％" },
  { term: "令和5年度秋期", ap: "2,547", ex: "1,841", ps: "305", rate: "16.6％" },
  { term: "令和6年度秋期", ap: "1,949", ex: "1,365", ps: "231", rate: "16.9％" },
  { term: "令和7年度秋期", ap: "1,696", ex: "1,156", ps: "177", rate: "15.3％" },
];

const th = "border border-slate-200 px-3 py-2 text-left";
const td = "border border-slate-200 px-3 py-2";

export default function EmbeddedEngineerKnowledgePage() {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "組み込みエンジニアの仕事内容" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          組み込みエンジニアの仕事内容｜職業分類の定義・開発工程・ES試験データ
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月28日 | 公式資料の確認日: 2026年11月28日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】組み込みエンジニアの仕事内容</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>組み込みエンジニアの仕事内容は、家電・自動車・産業機器などの機器に組み込まれ、その動作を制御するソフトウェアについて、要件定義・設計書や仕様書の作成・プログラムの開発・テストを行うことです。厚生労働省編職業分類では「009-02 ソフトウェア開発技術者（組込・制御系）」に分類されています。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・IPAの試験が示す「業務と役割」には、ハードウェアとソフトウェアへの機能分担や、リアルタイム性を踏まえた設計が含まれています</li>
              <li>・欧州ESCOの必須スキルを照合すると、一般のソフトウェア開発者と共通の項目が16項目中12項目、組み込み固有の項目はデバイスドライバの開発など4項目でした（当サイト集計）</li>
              <li>・IPAのエンベデッドシステムスペシャリスト試験（令和7年度秋期）の応募者のうち、業務が「エンベデッドシステム開発」の人は23.9％でした（当サイト集計）</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          「組み込みエンジニア」は求人で広く使われている職種名ですが、担当する範囲は企業や製品によって異なります。本記事では、厚生労働省編職業分類の定義、IPA（情報処理推進機構）のエンベデッドシステムスペシャリスト試験が示す業務と役割、IPAの組込み/IoT産業の調査、欧州委員会の職業分類ESCOを当サイトで確認し、組み込みエンジニアの仕事内容と開発工程を整理しました。あわせて、IPAの試験統計を当サイトで集計した結果と、当サイトのPCで実行したC言語の例を掲載しています。転職の進め方や年収は<Link href="/skill/embedded/" className="text-blue-600 hover:underline">組込みエンジニアの転職ガイド</Link>で扱っています。
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          なお、公的資料では「組込み」と表記されることが多く、本記事では資料名・分類名は原文の表記のまま、本文では「組み込み」と表記しています。
        </p>

        <DataNote
          surveyedAt="2026年11月28日"
          sources={["JILPT「第5回改定 厚生労働省編職業分類」", "IPA「エンベデッドシステムスペシャリスト試験」", "IPA 情報処理技術者試験「統計情報」（令和7年度）", "IPA「2022年度組込み/IoT産業の動向把握等に関する調査」", "欧州委員会 ESCO API", "当サイトでのC言語の実行例（macOS・Apple clang 17.0.0）"]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="definition" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">組み込みエンジニアの定義（厚生労働省編職業分類）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            厚生労働省編職業分類（2022年改定）では、ソフトウェア開発の職業（中分類009）を3つの小分類とその他に分けています。組み込みエンジニアに当たるのは「009-02 ソフトウェア開発技術者（組込・制御系）」です。2022年の改定では、旧小分類と旧細分類を統合して新たな分類項目を設けた例として、ソフトウェア開発技術者（WEB・オープン系）、ソフトウェア開発技術者（組込・制御系）、プログラマーが挙げられています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>分類項目</th>
                  <th className={th}>定義（原文）</th>
                  <th className={th}>職業名の例示</th>
                </tr>
              </thead>
              <tbody>
                {classificationRows.map((r) => (
                  <tr key={r.code}>
                    <td className={td}>{r.code}</td>
                    <td className={td}>{r.def}</td>
                    <td className={td}>{r.ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：JILPT「第5回改定 厚生労働省編職業分類 職業分類表 改定の経緯とその内容」中分類009（PDF本文の89〜90ページ）。009-01と009-03の例示は一部を抜粋しています。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            中分類009の説明では、この仕事を遂行するには「通例、大学などの専門課程を修了したか又はこれと同程度以上の専門的知識と実務的経験を必要とする」とされています。組込・制御系とWEB・オープン系の違いは、作るソフトウェアが動く場所にあります。組込・制御系は、機械器具に組み込まれたマイクロコントローラ（マイコン）上で動作し、その機器の動作を制御するソフトウェアを対象としています。
          </p>
        </section>

        <section id="boundary" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">隣接する職業との境目</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            同じ職業分類には、回路などのハードウェアを開発する職業や、生産設備の技術者の項目もあります。それぞれの項目に書かれた「以下のものは、それぞれの分類項目に分類する」という振り分けの記載を、当サイトで次のとおり整理しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>仕事の内容</th>
                  <th className={th}>分類される項目</th>
                  <th className={th}>補足</th>
                </tr>
              </thead>
              <tbody>
                {boundaryRows.map((r) => (
                  <tr key={r.work}>
                    <td className={td}>{r.work}</td>
                    <td className={td}>{r.to}</td>
                    <td className={td}>{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：JILPT「第5回改定 厚生労働省編職業分類」006-02、007、009-02、009-03、009-99の説明。表のまとめ方は当サイトによるものです。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            職業分類では、家電などの電気機器に組み込むソフトウェアも、工場の生産設備に組み込むソフトウェアも、同じ009-02に分類されています。一方で、回路や電子機器そのものの設計は006-02、テストやバグ修正を専門とする仕事は009-99に分かれています。実際の職場では、1人がこれらの複数を担当することもあるため、求人票の「組み込みエンジニア」がどこまでを指すかは、職務内容の記載で確認する必要があります（当サイトの整理です）。
          </p>
        </section>

        <section id="process" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">開発工程と各工程の仕事内容</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            職業分類の中分類009は、仕事の内容として「要件定義、基本設計書・詳細設計書・仕様書の作成、プログラムの開発、作成したソフトウェアのテスト」を挙げています。IPAのエンベデッドシステムスペシャリスト試験は、組み込みシステム開発の上位者の「業務と役割」を示しています。両者を工程ごとに並べると、次のとおりです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>工程（当サイトの整理）</th>
                  <th className={th}>職業分類（中分類009）の記載</th>
                  <th className={th}>IPA試験の「業務と役割」の記載（原文）</th>
                </tr>
              </thead>
              <tbody>
                {processRows.map((r) => (
                  <tr key={r.step}>
                    <td className={td}>{r.step}</td>
                    <td className={td}>{r.jilpt}</td>
                    <td className={td}>{r.ipa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：JILPT「第5回改定 厚生労働省編職業分類」中分類009、IPA「エンベデッドシステムスペシャリスト試験」の「2．業務と役割」。工程への対応づけは当サイトによるものです。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-6">
            IPAの記載で特徴的なのは、「ハードウェアとソフトウェアへの機能分担」と「リアルタイム性」が設計の工程に含まれている点です。同じ機能をハードウェアで実現するかソフトウェアで実現するかを決め、決められた時間内に処理を終える設計を行うことが、組み込み開発の工程に組み込まれていると読み取れます。なお、IPAの記載は高度試験の対象者（下位者を指導する立場）の役割であり、経験の浅い担当者がすべての工程を受け持つという意味ではありません。
          </p>

          <h3 className="font-bold text-slate-800 mb-2">企業が回答した開発スタイルの状況</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            IPAの「2022年度組込み/IoT産業の動向把握等に関する調査」（組込み/IoT関連の企業を対象、有効回答数1,214件）では、開発スタイルごとに、現在の開発でどの程度用いているかを尋ねています。代表的な2つの回答は次のとおりです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>開発スタイル（現在）</th>
                  <th className={`${th} text-right`}>ほぼすべて（9割以上）</th>
                  <th className={`${th} text-right`}>どちらかというと多い（6割以上9割未満）</th>
                  <th className={`${th} text-right`}>左2つの合計</th>
                  <th className={`${th} text-right`}>わからない</th>
                </tr>
              </thead>
              <tbody>
                {styleRows.map((r) => (
                  <tr key={r.style}>
                    <td className={td}>{r.style}</td>
                    <td className={`${td} text-right`}>{r.all}</td>
                    <td className={`${td} text-right`}>{r.many}</td>
                    <td className={`${td} text-right`}>{r.sum}</td>
                    <td className={`${td} text-right`}>{r.unknown}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：IPA「2022年度組込み/IoT産業の動向把握等に関する調査」調査結果（2023年6月12日発行）Q20「開発スタイル【現在】」。合計の列は当サイトが足し合わせた値です。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-6">
            回答企業の約3分の1がウォーターフォール開発/V字開発を開発の大半で用いていると回答しており、アジャイル開発の12％を上回っています。ただし「わからない」がいずれも27％あり、調査は2022年度の企業単位の回答です。個々の職場の開発スタイルを示すものではない点にご注意ください。
          </p>

          <h3 className="font-bold text-slate-800 mb-2">企業が確保・強化したい技術者</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            同じ調査では、確保・強化したい人材を職種ごとに尋ねています。開発工程に対応する職種の回答は次のとおりです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>人材</th>
                  <th className={`${th} text-right`}>最優先で確保・強化したい</th>
                  <th className={`${th} text-right`}>確保・強化したい</th>
                  <th className={`${th} text-right`}>左2つの合計</th>
                </tr>
              </thead>
              <tbody>
                {talentRows.map((r) => (
                  <tr key={r.role}>
                    <td className={td}>{r.role}</td>
                    <td className={`${td} text-right`}>{r.top}</td>
                    <td className={`${td} text-right`}>{r.want}</td>
                    <td className={`${td} text-right`}>{r.sum}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：IPA「2022年度組込み/IoT産業の動向把握等に関する調査」Q23「確保・強化したい人材」（N=1,059）。合計の列は当サイトが足し合わせた値です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            設計技術者を確保・強化したいとする回答が69％で、実装技術者（55％）や検証技術者（42％）を上回りました。組み込み開発の仕事のうち、設計の工程を担える人材を求める企業が多いことがうかがえます。
          </p>
        </section>

        <section id="esco" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ESCOのスキル照合（当サイト集計）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            欧州委員会の職業分類ESCOは、組み込みソフトウェアの開発者を「embedded systems software developer」として収録し、「組込みシステム上で動作するソフトウェアのプログラミング、実装、文書化、保守を行う」と説明しています（当サイト訳）。また、組み込みの制御システムの要件や全体計画を技術仕様に沿って設計に落とし込む職業として「embedded system designer」も別に収録しています。2026年11月28日にESCOのAPIから3つの職業を取得し、必須スキルの名称を照合しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>項目</th>
                  <th className={th}>embedded systems software developer</th>
                  <th className={th}>software developer</th>
                  <th className={th}>embedded system designer</th>
                </tr>
              </thead>
              <tbody>
                {escoRows.map((r) => (
                  <tr key={r.item}>
                    <td className={td}>{r.item}</td>
                    <td className={td}>{r.esd}</td>
                    <td className={td}>{r.sd}</td>
                    <td className={td}>{r.des}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：欧州委員会 ESCO API（occupation：embedded systems software developer／software developer／embedded system designer）。共通の件数は、必須スキル（hasEssentialSkill）の名称を当サイトが照合して数えたものです。</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">組み込みソフトウェア開発者だけの必須スキル（software developer と比べて4項目）</h3>
              <ul className="list-disc pl-5 text-sm text-slate-600 leading-7">
                {esdOnly.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">組み込みシステム設計者だけの必須スキル（組み込みソフトウェア開発者と比べて11項目）</h3>
              <ul className="list-disc pl-5 text-sm text-slate-600 leading-7">
                {desOnly.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-2">日本語名は当サイト訳です。括弧内がESCOの英語名です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            組み込みソフトウェア開発者の必須スキル16項目のうち12項目は、デバッグ、ソフトウェア仕様の分析、統合開発環境、構成管理ツール、設計パターン、技術文書の作成など、一般のソフトウェア開発者と共通でした。固有の項目は、組込みシステムの知識、デバイスドライバの開発、IoTなど、ハードウェアに近い内容です。一方、組み込みシステム設計者にはリアルタイムコンピューティング、信号処理、制御工学の理論、通信プロトコル、電子設計仕様の読解が必須スキルとして登録されており、前の章でご説明したIPAの「機能分担」「リアルタイム性」の記載と重なります。ソフトウェア開発の基本は共通で、ハードウェアと時間の制約をどこまで扱うかによって仕事の範囲が広がると整理できます（当サイトの整理です）。
          </p>
        </section>

        <section id="es-data" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンベデッドシステムスペシャリスト試験のデータ（当サイト集計）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            IPAが公表している令和7年度の統計情報（業務別一覧表・推移表）を2026年11月28日に取得し、組み込み分野の高度試験であるエンベデッドシステムスペシャリスト試験（ES）の数値を当サイトで集計しました。受験料や試験方式の詳細は<Link href="/cert/embedded-systems/" className="text-blue-600 hover:underline">エンベデッドシステムスペシャリストの解説ページ</Link>をご覧ください。
          </p>

          <h3 className="font-bold text-slate-800 mb-2">応募者の業務別の内訳（令和7年度秋期）</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>応募者が回答した業務</th>
                  <th className={`${th} text-right`}>応募者数</th>
                  <th className={`${th} text-right`}>構成比</th>
                </tr>
              </thead>
              <tbody>
                {gyomuRows.map((r) => (
                  <tr key={r.work}>
                    <td className={td}>{r.work}</td>
                    <td className={`${td} text-right`}>{r.ap}</td>
                    <td className={`${td} text-right`}>{r.share}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">元データ：IPA「業務別 一覧表」（令和7年度・秋期 全国）のエンベデッドシステムスペシャリスト欄。構成比は、同表の合計1,657人を分母に当サイトが算出しました。「上記以外の業務」は、ネットワーク技術支援、データベース技術支援、情報セキュリティ、ITサービスマネジメント、システム監査、調査・企画、総務・人事、営業・販売、製造、教育・研修の合計です。なお、推移表の応募者数（1,696人）とは合計が一致しません。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-6">
            業務が「エンベデッドシステム開発」の応募者は396人（23.9％）で、「その他・無記入」を除く業務の中で最も多くなっています。続いてプログラム開発（14.3％）、システム設計（10.4％）、研究・開発（7.1％）でした。受験者に対する合格者の割合は、エンベデッドシステム開発の業務の人が19.6％（受験者275人・合格者54人）で、全体の15.1％（受験者1,126人・合格者170人）を上回りました。
          </p>

          <h3 className="font-bold text-slate-800 mb-2">応募者数と合格率の推移</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>実施回</th>
                  <th className={`${th} text-right`}>応募者数</th>
                  <th className={`${th} text-right`}>受験者数</th>
                  <th className={`${th} text-right`}>合格者数</th>
                  <th className={`${th} text-right`}>合格率</th>
                </tr>
              </thead>
              <tbody>
                {esSeries.map((r) => (
                  <tr key={r.term}>
                    <td className={td}>{r.term}</td>
                    <td className={`${td} text-right`}>{r.ap}</td>
                    <td className={`${td} text-right`}>{r.ex}</td>
                    <td className={`${td} text-right`}>{r.ps}</td>
                    <td className={`${td} text-right`}>{r.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">元データ：IPA「推移表」（令和7年度）の秋期 全国シートのエンベデッドシステムスペシャリスト欄。平成31年度までは春期、令和2年度は10月、令和3年度以降は秋期に実施された回です。平成21〜31年度は5年おきと最終回を抜粋しています。合格率は合格者数÷受験者数（IPA公表値）です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            平成21年度から令和7年度までの17回の合格率は、平均17.05％、中央値16.9％、最低15.3％（令和7年度）、最高19.7％（令和4年度）でした（当サイト集計）。応募者数は平成21年度の5,875人から令和7年度の1,696人へ71.1％減少しており、令和5年度から3回続けて前回を下回っています。IPAの平均年齢の資料では、令和7年度秋期の応募者の平均年齢は39.0歳、合格者は36.0歳でした。応募者数の減少の理由はIPAの資料には示されておらず、本記事でも理由は断定しません。
          </p>
        </section>

        <section id="code" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">組み込み開発で使うCの書き方（当サイト実行）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            組み込み開発では、機器の状態や出力をレジスタのビット単位で扱う場面があります。マイコンの実機ではなく通常のPCで、組み込み開発で用いられるC言語の書き方を試しました。実行環境は当サイトのPC（macOS・Apple Silicon、Apple clang 17.0.0、オプション -std=c11 -O2）です。レジスタの代わりに通常の変数を使っているため、実機の動作を再現するものではありません。
          </p>

          <h3 className="font-bold text-slate-800 mb-2">ビット演算と固定小数点の例</h3>
          <pre className="bg-slate-900 text-slate-100 text-xs rounded-lg p-4 overflow-x-auto leading-6">
{`static volatile uint32_t GPIO_OUT = 0x00000000u;  /* レジスタの代わりの変数 */
#define BIT(n) (1u << (n))

GPIO_OUT |= BIT(5);            /* 5番ビットを立てる */
GPIO_OUT ^= BIT(5) | BIT(0);   /* 5番と0番を反転する */
GPIO_OUT &= ~BIT(0);           /* 0番ビットを下ろす */
(status >> 2) & 0x7u;          /* 2〜4番ビットを取り出す（status = 0xA4） */

typedef int16_t q8_8_t;        /* 1/256 単位の固定小数点（Q8.8） */
q8_8_t q_mul(q8_8_t a, q8_8_t b) { return (q8_8_t)(((int32_t)a * b) >> 8); }
/* 25.5 × 1.5 を整数演算だけで計算する */

$ clang -std=c11 -Wall -Wextra -O2 -o reg reg.c && ./reg
set   : 0x00000020
toggle: 0x00000001
clear : 0x00000000
bits 2..4 of 0xA4 = 1
Q8.8: t=6528 k=384 t*k=9792 (= 38.2500)
sizeof(q8_8_t)=2 bytes, sizeof(float)=4 bytes`}
          </pre>
          <p className="text-xs text-slate-500 mt-2">当サイトのPCで2026年11月28日に実行した結果です。コードは主要部分の抜粋です。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-6">
            OR（|=）で特定のビットを立て、XOR（^=）で反転し、ANDとNOT（&= ~）で下ろすことで、他のビットを変えずに1つのビットだけを操作できます。固定小数点は、小数を一定の倍率の整数として扱う方法で、この例では25.5を6528（25.5×256）、1.5を384として掛け算し、結果の9792を256で割ると38.25になりました。一般に、浮動小数点演算の処理が重い環境などで用いられる方法です。この例では値を2バイトで保持しており、float（4バイト）の半分の大きさでした。
          </p>

          <h3 className="font-bold text-slate-800 mb-2">volatile の有無でコンパイル結果がどう変わるか</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            レジスタの値は、プログラムの外（ハードウェア）から変わることがあります。ある変数のビット0が1になるまで待つ関数を、volatile を付けない変数と付けた変数で書き、同じ条件（-O2）でアセンブリ（機械語に近い表現）を出力しました。
          </p>
          <pre className="bg-slate-900 text-slate-100 text-xs rounded-lg p-4 overflow-x-auto leading-6">
{`uint32_t          STATUS_PLAIN;
volatile uint32_t STATUS_VOL;
void wait_plain(void) { while ((STATUS_PLAIN & 1u) == 0) { } }
void wait_vol(void)   { while ((STATUS_VOL   & 1u) == 0) { } }

$ clang -std=c11 -O2 -S poll.c   （出力の抜粋・arm64）
_wait_plain:
        ldrb  w8, [x8]          ; 値を読むのはループの前の1回だけ
        tbnz  w8, #0, LBB0_2
LBB0_1:
        b     LBB0_1            ; 値を読み直さずに同じ場所を回り続ける
_wait_vol:
LBB1_1:
        ldr   w9, [x8]          ; ループのたびに値を読み直す
        tbz   w9, #0, LBB1_1`}
          </pre>
          <p className="text-xs text-slate-500 mt-2">当サイトのPCで2026年11月28日に出力した結果です。アドレスの準備などの命令は省略しています。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            volatile を付けない場合、コンパイラは値が途中で変わらないものとして扱い、最初に1回だけ読んだ後は読み直さないループを出力しました。volatile を付けると、ループのたびに値を読み直す命令が出力されました。実機のレジスタを読むコードで volatile が使われるのは、このような最適化を避けるためです。C言語そのものの成り立ちや規格の版は<Link href="/knowledge/c-language/" className="text-blue-600 hover:underline">C言語とは</Link>でご説明しています。
          </p>
        </section>

        <section id="related" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職・資格の詳しい情報</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            本記事は組み込みエンジニアの定義と仕事内容、開発工程に絞ってご説明しました。転職の進め方、年収、キャリアの選び方は、次の記事で扱っています。
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-7">
            <li>転職の進め方・年収・求人の探し方：<Link href="/skill/embedded/" className="text-blue-600 hover:underline">組込みエンジニアの転職ガイド</Link></li>
            <li>高度試験の受験方式・免除制度：<Link href="/cert/embedded-systems/" className="text-blue-600 hover:underline">エンベデッドシステムスペシャリスト</Link></li>
            <li>Web系への職種転換：<Link href="/career/embedded-to-web/" className="text-blue-600 hover:underline">組込みエンジニアからWeb系エンジニアへの転職ガイド</Link></li>
            <li>組み込み機器がつながる仕組み：<Link href="/knowledge/iot/" className="text-blue-600 hover:underline">IoTとは</Link></li>
            <li>製造業の企業で働く場合：<Link href="/industry/manufacturing/" className="text-blue-600 hover:underline">製造業のIT転職ガイド</Link></li>
            <li>プログラマー（009-03）の定義：<Link href="/knowledge/programmer/" className="text-blue-600 hover:underline">プログラマーとは</Link></li>
          </ul>
        </section>

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

        <section id="sources" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">出典一覧（確認日：2026年11月28日）</h2>
          <ul className="text-xs text-slate-600 leading-6 space-y-1 break-all">
            <li>JILPT「第5回改定 厚生労働省編職業分類」（006-02・007・009・009-02・009-03・009-99、改定の経緯）：https://www.jil.go.jp/institute/seika/shokugyo/bunrui/documents/shokugyo05.pdf</li>
            <li>IPA「エンベデッドシステムスペシャリスト試験」（対象者像・業務と役割）：https://www.ipa.go.jp/shiken/kubun/es.html</li>
            <li>IPA 情報処理技術者試験「統計情報」：https://www.ipa.go.jp/shiken/reports/toukei.html</li>
            <li>IPA「推移表」（令和7年度）：https://www.ipa.go.jp/shiken/reports/h5f8pg00000037bj-att/01_suiihyo_r07.xlsx</li>
            <li>IPA「業務別 一覧表」（令和7年度）：https://www.ipa.go.jp/shiken/reports/h5f8pg00000037eq-att/04_gyomubetsu_r07.xlsx</li>
            <li>IPA「平均年齢」：https://www.ipa.go.jp/shiken/reports/hjuojm000000lkls-att/heikin_nenrei.pdf</li>
            <li>IPA「2022年度組込み/IoT産業の動向把握等に関する調査」：https://www.ipa.go.jp/digital/software-survey/kumikomi/kumikomi-iot2022.html</li>
            <li>同 調査結果（PDF）：https://www.ipa.go.jp/digital/software-survey/kumikomi/ps6vr7000001tewn-att/kumikomi-iot2022.pdf</li>
            <li>ESCO embedded systems software developer：http://data.europa.eu/esco/occupation/57af9090-55b4-4911-b2d0-86db01c00b02</li>
            <li>ESCO embedded system designer：http://data.europa.eu/esco/occupation/10469d70-78a3-4650-9e29-d04de13c62c1</li>
            <li>ESCO software developer：http://data.europa.eu/esco/occupation/f2b15a0e-e65a-438a-affb-29b9d50b77d1</li>
            <li>ESCO API（取得に使用）：https://ec.europa.eu/esco/api/resource/occupation</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "組込みエンジニアの転職ガイド", href: "/skill/embedded/" },
              { name: "エンベデッドシステムスペシャリスト", href: "/cert/embedded-systems/" },
              { name: "組込みからWeb系への転職ガイド", href: "/career/embedded-to-web/" },
              { name: "C言語とは", href: "/knowledge/c-language/" },
              { name: "IoTとは", href: "/knowledge/iot/" },
              { name: "製造業のIT転職ガイド", href: "/industry/manufacturing/" },
            ].map((item, i) => (
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
