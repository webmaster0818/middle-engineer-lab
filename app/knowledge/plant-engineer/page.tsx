import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "プラントエンジニアとは｜職業分類での位置・仕事の段階・技術士の部門【2026年】";
const DESCRIPTION =
  "プラントエンジニアとは、化学・発電・水処理などのプラントの設計・建設・運転・保全に関わる技術者の総称です。職業分類での位置、欧州ESCO・米国O*NETでの扱い、関連職種の賃金、技術士の関連科目の合格者数（当サイト集計）を整理します。";
const URL = "/knowledge/plant-engineer/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "プラントエンジニアの定義（公的資料での扱い）" },
  { id: "classification", label: "厚生労働省編職業分類での位置（照合表）" },
  { id: "phases", label: "仕事の段階と対応する職業" },
  { id: "esco", label: "ESCOのスキル比較（当サイト集計）" },
  { id: "control", label: "制御システムとITとの関わり" },
  { id: "wage", label: "関連職種の賃金（賃金構造基本統計調査）" },
  { id: "pe", label: "技術士の関連部門と合格者数（当サイト集計）" },
  { id: "related", label: "転職・キャリアの詳しい情報" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "プラントエンジニアとは簡単に言うと何ですか？",
    a: "化学工場・発電所・水処理施設などのプラント（大規模な生産設備）について、設計・建設・試運転・運転・保全のいずれかの段階を技術面で担う技術者の総称です。日本の公的な職業分類には「プラントエンジニア」という職業名がないため、本記事では関連する職業分類の項目と海外の職業分類をもとに、当サイトで範囲を整理しています。",
  },
  {
    q: "プラントエンジニアは職業分類ではどこに入りますか？",
    a: "厚生労働省編職業分類（2022年改定）に「プラントエンジニア」という職業名はありません（当サイトで本文を検索して0件）。「プラント」を含む職業名は4件あり、化学プラント設計技術者（006-03 機械開発技術者）、プラント建設工事施工管理技術者（008-02 建築施工管理技術者）、プラント保全工とプラント修理工（石油精製）（いずれも075-01）に分かれています。担う段階によって分類項目が異なります。",
  },
  {
    q: "海外の職業分類ではプラントエンジニアはどう扱われていますか？",
    a: "欧州委員会のESCOでは、「plant engineer」は保全・修理エンジニア（maintenance and repair engineer、コード2141.7）の別名として登録されています。米国のO*NETでは、Industrial Engineers（17-2112.00）とManufacturing Engineers（17-2112.03）の報告された職名の例に「Plant Engineer」が含まれています。いずれも独立した職業としては設けられていません。",
  },
  {
    q: "プラントエンジニアの年収はどのくらいですか？",
    a: "公的統計に「プラントエンジニア」の区分はないため、プラントエンジニアだけの年収は示せません。令和7年賃金構造基本統計調査の関連職種（一般労働者・企業規模10人以上）で、きまって支給する現金給与額の12か月分と年間賞与を足した値を当サイトで算出すると、機械技術者が約659万円、化学技術者が約642万円、電気・電子・電気通信技術者が約704万円です。プラント以外の仕事をする技術者も含む目安です。",
  },
  {
    q: "プラントエンジニアとITエンジニアの仕事は関係がありますか？",
    a: "プラントの運転を支える制御システムで接点があります。IPAの「制御システムのセキュリティリスク分析ガイド」は、プロセス値を連続的に制御するDCSと、シーケンス制御などに用いるPLCを制御機器の例として説明し、汎用OSやネットワークの利用が進んだことでセキュリティ対応の重要性が高まっているとしています。機器に組み込む制御ソフトウェアの開発は、職業分類では「009-02 ソフトウェア開発技術者（組込・制御系）」に分類されます。",
  },
  {
    q: "プラントエンジニアに関係する資格はありますか？",
    a: "技術分野の専門性を示す国家資格として技術士があり、機械・電気電子・化学・原子力・放射線などの部門があります。令和7年度の第二次試験で、当サイトがプラントに関係が深いと判断した10の選択科目の合格者は115人、対受験者合格率は10.7％でした（日本技術士会の統計から当サイト集計）。担当する設備や業務によって必要な資格は異なるため、求人の応募条件をご確認ください。",
  },
];

const definitionRows = [
  { src: "厚生労働省編職業分類（2022年改定・JILPT）", name: "職業名として収録なし", note: "「プラント」を含む職業名は4件（3つの小分類項目に分散）" },
  { src: "ESCO（欧州委員会）", name: "maintenance and repair engineer（2141.7）の別名", note: "別名15件の1つとして「plant engineer」を登録" },
  { src: "O*NET（米国労働省の職業情報）", name: "独立した職業なし", note: "Industrial Engineers（17-2112.00）とManufacturing Engineers（17-2112.03）の職名例に「Plant Engineer」" },
];

const classificationRows = [
  { code: "006-03 機械開発技術者", major: "02 研究・技術の職業", example: "化学プラント設計技術者", def: "各種の機械器具・機械設備の設計・開発に関する技術的な仕事。例示にボイラー設計技術者なども含まれる" },
  { code: "008-02 建築施工管理技術者", major: "02 研究・技術の職業", example: "プラント建設工事施工管理技術者", def: "施工計画・工程表の作成、作業の指導・監督、工程・品質・安全管理など。007-04の注記で「石油化学・発電・水処理・廃棄物処理などのプラント建設工事における施工管理」はここに分類すると記載" },
  { code: "075-01 はん用・生産用・業務用機械器具整備・修理工", major: "12 製造・修理・塗装・製図等の職業", example: "プラント保全工、プラント修理工（石油精製）", def: "機械器具の点検・部品交換・修理と、工場などの生産現場における各種の生産設備の保全・整備の仕事" },
];

const nearRows = [
  { code: "007-08 化学製品製造技術者", major: "02 研究・技術の職業", def: "石油製品・基礎化学品・化学製品などを製造するため、生産工程の設計、各工程で使用する機械・設備の管理、技術指導、品質管理などを行う" },
  { code: "007-99 その他の製造技術者", major: "02 研究・技術の職業", def: "例示に「原子力技術者（開発技術者を除く）」" },
  { code: "009-02 ソフトウェア開発技術者（組込・制御系）", major: "02 研究・技術の職業", def: "機械器具に組み込まれ、その動作を制御するマイクロコントローラのソフトウェアの要件定義・設計などを行う" },
  { code: "089-02 発電員、変電員", major: "13 配送・輸送・機械運転の職業", def: "発電所・変電所などで発電・送電・変電・配電装置の操作・監視・点検・保守を行う。例示に発電所運転管理員など" },
];

const phaseRows = [
  { phase: "設計", jp: "006-03（化学プラント設計技術者）", esco: "chemical engineer（2145.1）、process engineer（2141.9）" },
  { phase: "建設（施工管理）", jp: "008-02（プラント建設工事施工管理技術者）", esco: "—（本記事では対応づけていません）" },
  { phase: "試運転・引き渡し", jp: "該当する例示は確認できませんでした", esco: "commissioning engineer（2149.5）" },
  { phase: "運転・生産技術", jp: "007-08 化学製品製造技術者、089-02 発電所運転管理員など", esco: "process engineer（2141.9）" },
  { phase: "保全", jp: "075-01（プラント保全工、プラント修理工（石油精製））", esco: "maintenance and repair engineer（2141.7、別名 plant engineer）" },
];

const escoRows = [
  { name: "maintenance and repair engineer（保全・修理エンジニア）", code: "2141.7", ess: "21", opt: "26" },
  { name: "chemical engineer（化学エンジニア）", code: "2145.1", ess: "13", opt: "85" },
  { name: "process engineer（プロセスエンジニア）", code: "2141.9", ess: "13", opt: "18" },
  { name: "commissioning engineer（試運転エンジニア）", code: "2149.5", ess: "20", opt: "13" },
];

const sharedSkills = [
  { skill: "トラブルの原因究明・対処（troubleshoot）", occ: "保全・修理、プロセス、試運転（3職業）" },
  { skill: "工学の原理（engineering principles）", occ: "保全・修理、化学、プロセス（3職業）" },
  { skill: "工学のプロセス（engineering processes）", occ: "保全・修理、化学、プロセス（3職業）" },
  { skill: "品質管理の分析の実施（conduct quality control analysis）", occ: "保全・修理、試運転（2職業）" },
  { skill: "品質保証の手順（quality assurance procedures）", occ: "保全・修理、試運転（2職業）" },
  { skill: "試験機器の使用（use testing equipment）", occ: "保全・修理、試運転（2職業）" },
  { skill: "科学的調査の実施（perform scientific research）", occ: "化学、プロセス（2職業）" },
];

const itSkillRows = [
  { occ: "保全・修理エンジニア", skills: "automation technology（自動化技術）、use computerised maintenance management systems（コンピュータ化された保全管理システムの使用）、use a computer（コンピュータの使用）" },
  { occ: "化学エンジニア", skills: "industrial software（産業用ソフトウェア）、computer engineering（コンピュータ工学）、electrical instrumentation engineering（電気計装工学）、use CAD software（CADソフトウェアの使用）" },
  { occ: "試運転エンジニア", skills: "power plant instrumentation（発電所の計装）、test sensors（センサーの試験）" },
];

const wageRows = [
  { job: "機械技術者", age: "42.3歳", monthly: "421.4千円", bonus: "1,533.6千円", annual: "約659.0万円", n: "39,582" },
  { job: "化学技術者", age: "41.5歳", monthly: "412.7千円", bonus: "1,464.9千円", annual: "約641.7万円", n: "7,111" },
  { job: "電気・電子・電気通信技術者（通信ネットワーク技術者を除く）", age: "42.1歳", monthly: "448.6千円", bonus: "1,656.2千円", annual: "約703.9万円", n: "33,468" },
];

const peDeptRows = [
  { dept: "機械", examinees: "884", passed: "143", rate: "16.2％" },
  { dept: "電気電子", examinees: "1,027", passed: "104", rate: "10.1％" },
  { dept: "化学", examinees: "153", passed: "21", rate: "13.7％" },
  { dept: "上下水道", examinees: "1,605", passed: "174", rate: "10.8％" },
  { dept: "原子力・放射線", examinees: "61", passed: "9", rate: "14.8％" },
  { dept: "（参考）情報工学", examinees: "430", passed: "18", rate: "4.2％" },
];

const peSubjectRows = [
  { dept: "機械", subject: "機構ダイナミクス・制御", examinees: "96", passed: "17" },
  { dept: "機械", subject: "熱・動力エネルギー機器", examinees: "97", passed: "10" },
  { dept: "機械", subject: "流体機器", examinees: "75", passed: "10" },
  { dept: "機械", subject: "加工・生産システム・産業機械", examinees: "105", passed: "14" },
  { dept: "電気電子", subject: "電力・エネルギーシステム", examinees: "196", passed: "32" },
  { dept: "電気電子", subject: "電気設備", examinees: "413", passed: "17" },
  { dept: "化学", subject: "化学プロセス", examinees: "35", passed: "6" },
  { dept: "原子力・放射線", subject: "原子炉システム・施設", examinees: "22", passed: "4" },
  { dept: "原子力・放射線", subject: "核燃料サイクル及び放射性廃棄物の処理・処分", examinees: "18", passed: "2" },
  { dept: "原子力・放射線", subject: "放射線防護及び利用", examinees: "21", passed: "3" },
];

const th = "border border-slate-200 px-3 py-2 text-left";
const td = "border border-slate-200 px-3 py-2";

export default function PlantEngineerKnowledgePage() {
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
          { name: "プラントエンジニアとは" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          プラントエンジニアとは｜職業分類での位置・仕事の段階・技術士の部門
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月28日 | 公式資料の確認日: 2026年11月28日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】プラントエンジニアとは</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>プラントエンジニアとは、化学工場・発電所・水処理施設などのプラント（大規模な生産設備）について、設計・建設・試運転・運転・保全のいずれかの段階を技術面で担う技術者の総称です。公的な定義はなく、本記事では職業分類の関連項目をもとに当サイトで範囲を整理しています。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・厚生労働省編職業分類に「プラントエンジニア」という職業名はなく、「プラント」を含む職業名4件が3つの分類項目に分かれています（当サイトで確認）</li>
              <li>・欧州のESCOでは「plant engineer」は保全・修理エンジニア（2141.7）の別名として登録されています</li>
              <li>・技術士第二次試験（令和7年度）で、プラントに関係が深い10科目の合格者は115人でした（当サイト集計）</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          「プラントエンジニア」は求人で広く使われている職種名ですが、担う段階が設計なのか、建設工事の施工管理なのか、稼働後の保全なのかによって、仕事の内容は大きく異なります。本記事では、厚生労働省編職業分類、欧州委員会のESCO、米国のO*NETを当サイトで確認し、プラントエンジニアに当たる仕事がどの職業として扱われているかを整理しました。あわせて、ESCOのスキル一覧を4職業で照合した結果、IPAの資料にもとづく制御システムとITとの関わり、賃金構造基本統計調査の関連職種の賃金、技術士第二次試験の関連科目の合格者数を当サイトで集計した結果を掲載しています。
        </p>

        <DataNote
          surveyedAt="2026年11月28日"
          sources={["JILPT「第5回改定 厚生労働省編職業分類」", "欧州委員会 ESCO API", "O*NET OnLine", "IPA「制御システムのセキュリティリスク分析ガイド 第2版」", "厚生労働省「令和7年賃金構造基本統計調査」（e-Stat）", "日本技術士会「令和7年度技術士第二次試験統計」"]}
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">プラントエンジニアの定義（公的資料での扱い）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            日本と欧米の公的な職業分類で、「プラントエンジニア（plant engineer）」がどのように扱われているかを当サイトで確認しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>資料</th>
                  <th className={th}>「プラントエンジニア」の扱い</th>
                  <th className={th}>補足</th>
                </tr>
              </thead>
              <tbody>
                {definitionRows.map((r) => (
                  <tr key={r.src}>
                    <td className={td}>{r.src}</td>
                    <td className={td}>{r.name}</td>
                    <td className={td}>{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">確認方法：職業分類はPDFをテキストに変換して「プラントエンジニア」「プラント」を検索しました。ESCOはAPIで「plant engineer」を検索し、上位20職業の別名を取得して照合しました。O*NETは職業検索と各職業の紹介ページで確認しました（2026年11月28日）。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-4">
            確認した範囲では、「プラントエンジニア」を独立した職業として定義している公的資料はありませんでした。ESCOで「plant engineer」とそのまま一致する別名を持つのは保全・修理エンジニアだけで、その説明は次のとおりです（当サイト訳）。
          </p>
          <blockquote className="border-l-4 border-slate-300 pl-4 text-slate-600 leading-relaxed text-sm">
            保全・修理エンジニアは、設備・手順・機械・インフラの最適化に取り組む。最小のコストで、それらを最大限に稼働できる状態に保つ。
          </blockquote>
          <p className="text-slate-600 leading-relaxed mt-4">
            このほかESCOには、発電エンジニア（electric power generation engineer）の別名に「power plant engineer」、水処理施設の管理者の別名に「water plant engineer」など、対象の施設名を冠した名称も登録されています。米国のO*NETでは、Industrial Engineers（産業の生産工程を管理する統合的なシステムを設計・開発・試験・評価する職業）とManufacturing Engineers（製造システムや関連する工程を設計・統合・改善する職業）の職名例に「Plant Engineer」が含まれています。海外では、稼働中の設備を維持・改善する技術者を指す用例が目立つ点が、日本の求人で設計や建設まで含めて使われる場合と異なります（当サイトの整理です）。
          </p>
        </section>

        <section id="classification" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">厚生労働省編職業分類での位置（照合表）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            厚生労働省編職業分類（2022年改定）の職業名索引で「プラント」を含む職業名を当サイトで数えたところ、4件ありました。4件は3つの小分類項目に分かれ、大分類も「研究・技術の職業」と「製造・修理・塗装・製図等の職業」の2つにまたがっています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>分類項目</th>
                  <th className={th}>大分類</th>
                  <th className={th}>「プラント」を含む職業名</th>
                  <th className={th}>項目の説明（要約）</th>
                </tr>
              </thead>
              <tbody>
                {classificationRows.map((r) => (
                  <tr key={r.code}>
                    <td className={td}>{r.code}</td>
                    <td className={td}>{r.major}</td>
                    <td className={td}>{r.example}</td>
                    <td className={td}>{r.def}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：JILPT「第5回改定 厚生労働省編職業分類 職業分類表 改定の経緯とその内容」の職業分類表・職業名索引。数え方：職業名索引の部分をテキストに変換し、「プラント」を含む職業名を重複なしで数えました（2026年11月28日）。</p>
          <p className="text-slate-600 leading-relaxed mt-6 mb-4">
            職業名に「プラント」が入っていなくても、プラントの運転や生産技術に関わる項目があります。主なものを当サイトで抜き出しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>分類項目</th>
                  <th className={th}>大分類</th>
                  <th className={th}>項目の説明（要約）</th>
                </tr>
              </thead>
              <tbody>
                {nearRows.map((r) => (
                  <tr key={r.code}>
                    <td className={td}>{r.code}</td>
                    <td className={td}>{r.major}</td>
                    <td className={td}>{r.def}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：同上。どの項目を「関わる項目」とするかは当サイトの判断です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            この分類に当てはめると、プラントエンジニアは、設計を担う場合は「機械開発技術者」、建設工事の施工管理を担う場合は「建築施工管理技術者」、化学工場の生産工程を担う場合は「化学製品製造技術者」、設備の保全を担う場合は「はん用・生産用・業務用機械器具整備・修理工」に分類されると考えられます（当サイトの整理です）。同じ「プラントエンジニア」の求人でも、職業分類上は別の職業に当たることがあるため、求人票では担当する段階と対象設備をご確認いただくことをおすすめします。
          </p>
        </section>

        <section id="phases" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">仕事の段階と対応する職業</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            プラントの仕事を、設計から保全までの段階に分け、日本の職業分類とESCOの職業を当サイトで対応づけました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>段階</th>
                  <th className={th}>厚生労働省編職業分類</th>
                  <th className={th}>ESCOの職業（コード）</th>
                </tr>
              </thead>
              <tbody>
                {phaseRows.map((r) => (
                  <tr key={r.phase}>
                    <td className={td}>{r.phase}</td>
                    <td className={td}>{r.jp}</td>
                    <td className={td}>{r.esco}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：JILPT、ESCO。段階の区切り方と対応づけは当サイトによるものです。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            ESCOは、それぞれの職業を次のように説明しています（当サイト訳）。化学エンジニアは「大規模な化学的・物理的な生産プロセスを設計・開発し、原料を製品に変える工業プロセス全体に関わる」職業です。プロセスエンジニアは「生産・製造のプロセスの効率と生産性を高めるために工学の考え方を適用し、プロセスの変数と制約を評価して最適化の方法を示す」職業です。試運転エンジニアは「システムの据付と試験が行われるプロジェクトの最終段階を監督し、設備・施設・プラントが要件と仕様を満たして正しく機能するかを点検し、検証を経てプロジェクトの完了を承認する」職業とされています。
          </p>
        </section>

        <section id="esco" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ESCOのスキル比較（当サイト集計）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            前の表でプラントの段階に対応づけたESCOの4職業について、登録されているスキルをAPIで2026年11月28日に取得し、当サイトで件数を数えました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>職業</th>
                  <th className={th}>ESCOコード</th>
                  <th className={`${th} text-right`}>必須スキル</th>
                  <th className={`${th} text-right`}>任意スキル</th>
                </tr>
              </thead>
              <tbody>
                {escoRows.map((r) => (
                  <tr key={r.code}>
                    <td className={td}>{r.name}</td>
                    <td className={td}>{r.code}</td>
                    <td className={`${td} text-right`}>{r.ess}項目</td>
                    <td className={`${td} text-right`}>{r.opt}項目</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：欧州委員会 ESCO API（resource/occupation）。必須スキルはhasEssentialSkill、任意スキルはhasOptionalSkillの件数です。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-4">
            4職業の必須スキルは延べ67項目、重複を除くと57項目でした。4職業すべてに共通する必須スキルはなく、2職業以上に共通するものは次の7項目です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>必須スキル（当サイト訳）</th>
                  <th className={th}>必須として登録している職業</th>
                </tr>
              </thead>
              <tbody>
                {sharedSkills.map((r) => (
                  <tr key={r.skill}>
                    <td className={td}>{r.skill}</td>
                    <td className={td}>{r.occ}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">数え方：4職業の必須スキルの名称（英語）を当サイトで照合し、2職業以上に登録されているものを抜き出しました。日本語名は当サイト訳です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            段階をまたいで共通するのは、トラブルの原因究明・対処や工学の基礎、品質の確保といった内容でした。設計に近い化学エンジニアは任意スキルが85項目と多く、医薬品・材料・環境規制など対象分野ごとの知識が並んでいます。保全・修理エンジニアと試運転エンジニアは、機械の点検、試験機器の使用、試験データの記録など、現場で設備を確かめる内容が必須スキルの中心です。
          </p>
        </section>

        <section id="control" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">制御システムとITとの関わり</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            プラントは制御システムによって運転されており、IT系の技術とも接点があります。IPAの「制御システムのセキュリティリスク分析ガイド 第2版」（2026年4月版）は、制御機器について次のように説明しています（要約）。
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-7 mb-4">
            <li>DCS（Distributed Control System）は、主にPA（プロセスオートメーション）で、プロセス値を連続的に変化させる複雑な制御に用いられ、制御周期は0.5〜1秒程度です。</li>
            <li>PLC（Programmable Logic Controller）は、FA（ファクトリーオートメーション）で、スイッチや機器のロジック制御・シーケンス制御に用いられ、制御周期は1ミリ秒程度です。</li>
            <li>両者とも適用範囲が広がっており、機能上の区別は難しくなってきているとしています。</li>
          </ul>
          <p className="text-xs text-slate-500 mb-4">出典：IPA「制御システムのセキュリティリスク分析ガイド 第2版」（2026年4月版）本文p.53のコラム「制御システムの構成要素（コントローラ、DCS、PLC、SCADA）の名称と定義」。</p>
          <p className="text-slate-600 leading-relaxed mb-4">
            同ガイドの公開ページでは、制御システムは従来は外部のネットワークや情報系システムと接続されていなかったものの、近年はWindowsやUNIXなどの汎用プラットフォームや通信プロトコル、ネットワーク・外部メディアの利用が進み、セキュリティ脅威の増大と実際のサイバー攻撃事案が増えていると説明しています。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            ESCOの4職業の任意スキルにも、ITや計装に関わる項目が登録されています。当サイトで抜き出したものは次のとおりです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>職業</th>
                  <th className={th}>ITや計装に関わる任意スキル（当サイトの抽出・訳）</th>
                </tr>
              </thead>
              <tbody>
                {itSkillRows.map((r) => (
                  <tr key={r.occ}>
                    <td className={td}>{r.occ}</td>
                    <td className={td}>{r.skills}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：欧州委員会 ESCO API。プロセスエンジニアの任意スキルでは、CADソフトウェアの使用が該当しました。どの項目をITや計装に関わるものとするかは当サイトの判断です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            なお、機器に組み込んで動作を制御するソフトウェアの開発は、厚生労働省編職業分類では「009-02 ソフトウェア開発技術者（組込・制御系）」に分類され、プラントエンジニアとは別の職業として扱われています。制御やIoTに関わる経験は、プラント側からIT側へ、またはIT側からプラント側へ移る際の接点になりうると考えられます（当サイトの整理です）。IoTの仕組みは<Link href="/knowledge/iot/" className="text-blue-600 hover:underline">IoTとは</Link>でご説明しています。
          </p>
        </section>

        <section id="wage" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">関連職種の賃金（賃金構造基本統計調査）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            賃金構造基本統計調査には「プラントエンジニア」の区分がありません。参考として、プラントの設計・生産技術に関わる職業分類の項目に近い3職種の公表値を掲載します。年収の目安は、きまって支給する現金給与額を12倍し、年間賞与その他特別給与額を足して当サイトで算出したものです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>職種（小分類）</th>
                  <th className={`${th} text-right`}>平均年齢</th>
                  <th className={`${th} text-right`}>きまって支給する現金給与額（月）</th>
                  <th className={`${th} text-right`}>年間賞与その他特別給与額</th>
                  <th className={`${th} text-right`}>年収の目安（当サイト算出）</th>
                  <th className={`${th} text-right`}>労働者数（十人）</th>
                </tr>
              </thead>
              <tbody>
                {wageRows.map((r) => (
                  <tr key={r.job}>
                    <td className={td}>{r.job}</td>
                    <td className={`${td} text-right`}>{r.age}</td>
                    <td className={`${td} text-right`}>{r.monthly}</td>
                    <td className={`${td} text-right`}>{r.bonus}</td>
                    <td className={`${td} text-right`}>{r.annual}</td>
                    <td className={`${td} text-right`}>{r.n}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：厚生労働省「令和7年賃金構造基本統計調査」一般労働者 職種 第1表（職種（小分類）、性別きまって支給する現金給与額、所定内給与額及び年間賞与その他特別給与額（産業計））、男女計・企業規模計（10人以上）。e-Stat 2026年3月24日公開。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            これらの職種には、プラント以外の機械・化学製品・電気機器の開発や製造に携わる技術者も含まれます。プラントエンジニアの賃金を直接示すものではなく、近い職種の水準を知るための目安としてご覧ください。また、建設工事の施工管理や設備の保全を担う場合は、それぞれ別の職種に当たるため、この表の水準とは異なる可能性があります。業界ごとの転職の状況は、<Link href="/industry/energy/" className="text-blue-600 hover:underline">エネルギー業界からエネテック転職</Link>や<Link href="/industry/manufacturing/" className="text-blue-600 hover:underline">製造業からのIT転職</Link>でご説明しています。
          </p>
        </section>

        <section id="pe" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術士の関連部門と合格者数（当サイト集計）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            技術士は、技術士法にもとづく国家資格で、日本技術士会は「豊富な実務経験、科学技術に関する高度な応用能力と高い技術者倫理を備えている」技術者と説明しています。第二次試験は技術部門ごとに実施されます。令和7年度の統計から、プラントに関係する部門を抜き出しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>技術部門</th>
                  <th className={`${th} text-right`}>受験者数</th>
                  <th className={`${th} text-right`}>合格者数</th>
                  <th className={`${th} text-right`}>対受験者合格率</th>
                </tr>
              </thead>
              <tbody>
                {peDeptRows.map((r) => (
                  <tr key={r.dept}>
                    <td className={td}>{r.dept}</td>
                    <td className={`${td} text-right`}>{r.examinees}人</td>
                    <td className={`${td} text-right`}>{r.passed}人</td>
                    <td className={`${td} text-right`}>{r.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：日本技術士会「令和7年度技術士第二次試験統計」1．技術部門別試験結果。情報工学部門はIT系との比較のための参考です。</p>

          <p className="text-slate-600 leading-relaxed mt-6 mb-4">
            部門の中には、プラントとの関係が薄い選択科目も含まれます。そこで、選択科目の名称からプラントの設備・プロセスに関係が深いと当サイトが判断した10科目を抜き出し、受験者数と合格者数を合計しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>技術部門</th>
                  <th className={th}>選択科目</th>
                  <th className={`${th} text-right`}>受験者数</th>
                  <th className={`${th} text-right`}>合格者数</th>
                </tr>
              </thead>
              <tbody>
                {peSubjectRows.map((r) => (
                  <tr key={r.subject}>
                    <td className={td}>{r.dept}</td>
                    <td className={td}>{r.subject}</td>
                    <td className={`${td} text-right`}>{r.examinees}人</td>
                    <td className={`${td} text-right`}>{r.passed}人</td>
                  </tr>
                ))}
                <tr className="bg-slate-50 font-medium">
                  <td className={td} colSpan={2}>合計（10科目）</td>
                  <td className={`${td} text-right`}>1,078人</td>
                  <td className={`${td} text-right`}>115人</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：日本技術士会「令和7年度技術士第二次試験統計」2．選択科目別試験結果（総合技術監理部門以外）。科目の選び方と合計は当サイトによるものです。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            10科目の対受験者合格率は10.7％（115÷1,078）でした。総合技術監理部門を除く20部門の合計（受験者21,560人・合格者2,168人）に占める割合は、受験者で約5.0％、合格者で約5.3％です。最も受験者が多い科目は電気電子部門の「電気設備」（413人）でしたが、合格率は4.1％と10科目の中で最も低い値でした。年度による変動があるため、単年度の値として参考にしてください。
          </p>
        </section>

        <section id="related" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職・キャリアの詳しい情報</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            本記事はプラントエンジニアという職種の定義と公的資料での扱いに絞ってご説明しました。業界ごとの転職の進め方や、制御・組込みの経験の活かし方は次の記事で扱っています。
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-7">
            <li>製造業の経験を活かした転職：<Link href="/industry/manufacturing/" className="text-blue-600 hover:underline">製造業からIT転職はできる？</Link></li>
            <li>電力・ガスなどエネルギー分野：<Link href="/industry/energy/" className="text-blue-600 hover:underline">エネルギー業界からエネテック転職</Link></li>
            <li>建設工事の施工管理からの転職：<Link href="/industry/construction-dx/" className="text-blue-600 hover:underline">建設DX業界へのエンジニア転職ガイド</Link></li>
            <li>制御・組込みの経験の活かし方：<Link href="/skill/embedded/" className="text-blue-600 hover:underline">組込みエンジニアの転職市場ガイド</Link></li>
            <li>ITエンジニアの職種の全体像：<Link href="/knowledge/it-engineer-types/" className="text-blue-600 hover:underline">ITエンジニアの種類一覧</Link></li>
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
            <li>JILPT「第5回改定 厚生労働省編職業分類」（006-03・007-04・007-08・007-99・008-02・009-02・075-01・089-02、職業名索引）：https://www.jil.go.jp/institute/seika/shokugyo/bunrui/documents/shokugyo05.pdf</li>
            <li>ESCO maintenance and repair engineer：http://data.europa.eu/esco/occupation/615920c5-4f63-4eb3-8b60-afaaed3ab1ff</li>
            <li>ESCO chemical engineer：http://data.europa.eu/esco/occupation/ec21ce88-ce14-49b6-be0a-cc53cf5a3a67</li>
            <li>ESCO process engineer：http://data.europa.eu/esco/occupation/b5eaf231-77ad-4a86-8e54-15cc4398aad2</li>
            <li>ESCO commissioning engineer：http://data.europa.eu/esco/occupation/76abbb82-c103-4d7a-a4c0-14dba4d6199a</li>
            <li>ESCO electric power generation engineer：http://data.europa.eu/esco/occupation/58db3ac6-5217-4d46-8a4c-126598be1d13</li>
            <li>ESCO API（取得に使用）：https://ec.europa.eu/esco/api/search?text=plant+engineer&amp;type=occupation&amp;language=en</li>
            <li>O*NET OnLine Industrial Engineers（17-2112.00）：https://www.onetonline.org/link/summary/17-2112.00</li>
            <li>O*NET OnLine Manufacturing Engineers（17-2112.03）：https://www.onetonline.org/link/summary/17-2112.03</li>
            <li>IPA「制御システムのセキュリティリスク分析ガイド 第2版」：https://www.ipa.go.jp/security/controlsystem/riskanalysis.html</li>
            <li>厚生労働省「令和7年賃金構造基本統計調査」一般労働者 職種 第1表（e-Stat）：https://www.e-stat.go.jp/stat-search/files?stat_infid=000040421116</li>
            <li>日本技術士会「技術士第二次試験 統計情報」（令和7年度）：https://www.engineer.or.jp/c_topics/010/010868.html</li>
            <li>日本技術士会「技術士制度について（令和8年度版）」：http://www.engineer.or.jp/c_topics/001/attached/attach_1680_2.pdf</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "ITエンジニアの種類一覧", href: "/knowledge/it-engineer-types/" },
              { name: "IoTとは", href: "/knowledge/iot/" },
              { name: "製造業からIT転職はできる？", href: "/industry/manufacturing/" },
              { name: "エネルギー業界からエネテック転職", href: "/industry/energy/" },
              { name: "建設DX業界へのエンジニア転職ガイド", href: "/industry/construction-dx/" },
              { name: "組込みエンジニアの転職市場ガイド", href: "/skill/embedded/" },
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
