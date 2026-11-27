import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "セールスエンジニアとは｜職業分類での位置・欧州と米国の定義比較・賃金【2026年】";
const DESCRIPTION =
  "セールスエンジニアとは、製品やシステムの技術的な知識を生かして提案・説明を行い、販売を支える職種です。日本と欧州・米国の職業分類での位置づけ、ESCO・O*NETの職務の照合（当サイト集計）、IPAのスキル標準での扱い、関連職種の賃金を整理します。";
const URL = "/knowledge/sales-engineer/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "セールスエンジニアの定義（公的資料での扱い）" },
  { id: "classification", label: "日本の職業分類での位置" },
  { id: "international", label: "国際分類・欧州ESCOでの位置（当サイト集計）" },
  { id: "onet", label: "米国O*NETの職務の内訳（当サイト集計）" },
  { id: "skill-standard", label: "ITスキル標準・デジタルスキル標準での扱い" },
  { id: "wage", label: "関連する職種の賃金" },
  { id: "compare", label: "ITコンサルタント・SEとの違い" },
  { id: "related", label: "転職・キャリアの詳しい情報" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "セールスエンジニアとは簡単に言うと何ですか？",
    a: "製品やシステムの技術的な知識を生かして、顧客の要件の確認、製品構成の提案、技術的な説明やデモンストレーションなどを行い、販売を支える職種です。米国労働省のO*NETは、「販売に工学の学士号と同等の技術的な素養を必要とする、企業向けの商品やサービスを販売する」職業と定義しています。",
  },
  {
    q: "セールスエンジニアは営業職ですか、技術職ですか？",
    a: "日本の公的な職業分類では営業職に分類されます。厚生労働省編職業分類では「07 販売・営業の職業」の「048-04 機械器具営業員」に、総務省の日本標準職業分類では「34 営業職業従事者」の小分類344と345に、セールスエンジニアが例示されています。一方、国際標準職業分類（ISCO-08）では、技術・ICTの販売を担う職業は大分類「2 専門職」に置かれています。",
  },
  {
    q: "技術営業・プリセールスエンジニアとの違いは何ですか？",
    a: "公的な線引きはありません。厚生労働省編職業分類の職業名索引では、セールスエンジニア3件と技術営業員3件が同じ「048-04 機械器具営業員」に収録され、プリセールスエンジニアは「技術営業：パッケージソフトウェア販売」として「048-99 その他の営業の職業」に収録されています。扱う商品によって分類が分かれており、職種名そのものによる区別はされていません（当サイトの整理です）。",
  },
  {
    q: "セールスエンジニアの年収はどのくらいですか？",
    a: "公的統計にセールスエンジニアだけの区分はありません。近い区分である「機械器具・通信・システム営業職業従事者（自動車を除く）」の令和7年賃金構造基本統計調査の値から、当サイトで年収目安を約659万円（企業規模10人以上・男女計）と算出しました。技術的な素養を必要としない営業職も含む値であるため、目安としてご覧ください。",
  },
  {
    q: "セールスエンジニアに必要な資格はありますか？",
    a: "必須の資格や公的な認定資格はありません。IPAのITスキル標準V3 2011では、セールス職種のレベル3について、応用情報技術者試験に合格していれば当該レベルで期待される必要最低限の能力に到達しているとみなせる、と注記しています。",
  },
];

const definitionRows = [
  { src: "厚生労働省編職業分類（2022年改定・JILPT）", pos: "07 販売・営業の職業 ＞ 048 営業の職業", item: "048-04 機械器具営業員、048-99 その他の営業の職業", name: "索引にセールスエンジニア3件、プリセールスエンジニア1件、技術営業員4件" },
  { src: "日本標準職業分類（総務省・2009年告示）", pos: "D 販売従事者 ＞ 34 営業職業従事者", item: "344 機械器具営業職業従事者（通信機械器具を除く）、345 通信・システム営業職業従事者", name: "例示にセールスエンジニア2件" },
  { src: "国際標準職業分類ISCO-08（総務省仮訳）", pos: "2 専門職 ＞ 24 経営管理専門職 ＞ 243", item: "2433 技術医療販売専門家（情報通信を除く）、2434 情報通信技術販売専門職", name: "例示に技術関係販売外交員、営業担当者（コンピュータ）など" },
  { src: "ESCO（欧州委員会）", pos: "ISCO-08の2433・2434の下位", item: "sales engineer（2433.4）、technical sales representative（2433.6）、ICT presales engineer（2434.3）", name: "職業として定義あり（説明文・スキル一覧つき）" },
  { src: "O*NET（米国労働省の職業情報）", pos: "41 Sales and Related（販売関連）", item: "Sales Engineers（41-9031.00）", name: "職業として定義あり（職務25件）" },
];

const jilptRows = [
  { code: "048-04 機械器具営業員", names: "セールスエンジニア（電気機器）、セールスエンジニア（電子計算機）、セールスエンジニア（はん用・生産用・業務用機械器具）、技術営業員（電気機器）、技術営業員（半導体、電子部品）、技術営業員（はん用・生産用・業務用機械器具）", n: "6件" },
  { code: "048-99 その他の営業の職業", names: "プリセールスエンジニア（技術営業：パッケージソフトウェア販売）", n: "1件" },
  { code: "048-02 化学製品営業員", names: "技術営業員（化学品）", n: "1件" },
];

const escoRows = [
  { title: "sales engineer", code: "2433.4", desc: "顧客の要望に応じて製品（主に建設機械などの大型機器）の技術的なカスタマイズを行い、企業間の取引の窓口となる。複雑な修理・保守の工程にも責任を持つ", ess: "23", opt: "19" },
  { title: "technical sales representative", code: "2433.6", desc: "顧客に技術的な知見を提供しながら、企業の商品を販売する", ess: "28", opt: "27" },
  { title: "ICT presales engineer", code: "2434.3", desc: "営業チームと連携して販売プロセスのうちICTの評価段階を主導・管理する。製品のICT構成を顧客の要件に合わせて計画・変更する", ess: "12", opt: "22" },
  { title: "ICT account manager（比較用）", code: "2434.1", desc: "顧客との取引関係を築き、ハードウェア・ソフトウェア・通信・ICTサービスの販売を進める。売上目標の達成と収益性の維持を担う", ess: "21", opt: "18" },
];

const presalesSkills = [
  "製品知識を最新に保つ（keep up to date on product knowledge）",
  "製品の理解（product comprehension）",
  "技術要件の定義（define technical requirements）",
  "技術報告書の作成（prepare technical reports）",
  "顧客ニーズの特定（identify customer's needs）",
  "顧客の区分（customer segmentation）",
  "市場調査の実施（perform market research）",
  "ビジネスインテリジェンス（business intelligence）",
  "ICTの販売手法（ICT sales methodologies）",
  "収益創出の戦略の策定（develop revenue generation strategies）",
  "対立の管理（apply conflict management）",
  "法規制の遵守（comply with legal regulations）",
];

const onetRows = [
  { cat: "技術的な提案・検証", n: 7, ex: "提案書の作成・提案依頼書（RFP）への回答、顧客や技術者との協議によるシステム要件の決定、顧客に合わせた製品構成の計画・変更、技術プレゼンテーション、デモンストレーション・試験導入の手配など" },
  { cat: "営業活動・契約・顧客管理", n: 11, ex: "営業チームとの連携、見込み客の訪問、販売・サービス契約書の作成、受注・更新と納品の手配、販売予測レポートの管理、新市場向けの販売計画の策定など" },
  { cat: "導入後の支援・社内教育", n: 4, ex: "機器の使用・運用・保守に関する支援、導入済み機器の問題の診断、製品の技術文書の作成、チームメンバーへの技術の応用に関する教育" },
  { cat: "情報収集・学習", n: 3, ex: "業界動向・競合・新技術の情報収集、展示会・セミナーへの参加、社内の製品研修への参加" },
];

const itssRows = [
  { field: "訪問型コンサルティングセールス", desc: "特定顧客に対して良好なリレーションを開拓、維持、向上し、継続的に販売活動を行う", lv: "レベル3〜7" },
  { field: "訪問型製品セールス", desc: "特定の製品、サービス、あるいはソリューションに精通し、幅広く顧客に対してその販売活動を行う", lv: "レベル3〜6" },
  { field: "メディア利用型セールス", desc: "各種のメディアを利用して不特定多数の顧客へアプローチし、主に製品を中心とした販売活動を行う", lv: "レベル3〜5" },
];

const wageRows = [
  { size: "企業規模計（10人以上）", sales: "約659万円", soft: "約578万円" },
  { size: "1,000人以上", sales: "約745万円", soft: "約641万円" },
  { size: "100〜999人", sales: "約640万円", soft: "約555万円" },
  { size: "10〜99人", sales: "約556万円", soft: "約518万円" },
];

const th = "border border-slate-200 px-3 py-2 text-left";
const td = "border border-slate-200 px-3 py-2";

export default function SalesEngineerKnowledgePage() {
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
          { name: "セールスエンジニアとは" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          セールスエンジニアとは｜職業分類での位置・欧州と米国の定義比較・賃金
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月28日 | 公式資料の確認日: 2026年11月28日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】セールスエンジニアとは</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>セールスエンジニアとは、製品やシステムの技術的な知識を生かして、顧客の要件の確認、製品構成の提案、技術的な説明やデモンストレーションなどを行い、販売を支える職種です。日本の公的な職業分類では「営業の職業」に含まれます。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・厚生労働省編職業分類では、セールスエンジニアは「048-04 機械器具営業員」の職業名として収録されています</li>
              <li>・国際標準職業分類（ISCO-08）では、技術・ICTの販売職は大分類「専門職」に置かれており、日本の分類とは位置づけが異なります</li>
              <li>・米国O*NETの職務25件を当サイトで分類すると、技術的な提案・検証が7件、営業活動・契約・顧客管理が11件でした</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          「セールスエンジニア」は、技術営業やプリセールスと並んで求人で使われている職種名です。本記事では、厚生労働省編職業分類、総務省の日本標準職業分類と国際標準職業分類（ISCO-08）仮訳、欧州委員会のESCO、米国のO*NET、IPAのITスキル標準とデジタルスキル標準を当サイトで確認し、セールスエンジニアがどのように位置づけられているかを整理しました。あわせて、ESCOのスキル一覧とO*NETの職務一覧を当サイトで数えた結果と、令和7年賃金構造基本統計調査から算出した関連職種の年収目安を掲載しています。
        </p>

        <DataNote
          surveyedAt="2026年11月28日"
          sources={["JILPT「第5回改定 厚生労働省編職業分類」", "総務省「日本標準職業分類」「国際標準職業分類2008年改定版（仮訳）」", "欧州委員会 ESCO API", "O*NET OnLine", "IPA「ITスキル標準V3 2011」「デジタルスキル標準ver.2.0」", "厚生労働省「令和7年賃金構造基本統計調査」（職種）第1表"]}
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">セールスエンジニアの定義（公的資料での扱い）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            日本と欧米の公的な職業分類で、セールスエンジニアと近い職業がどの区分に置かれているかを当サイトで比較しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>資料</th>
                  <th className={th}>大きな区分</th>
                  <th className={th}>該当する項目</th>
                  <th className={th}>職業名の扱い</th>
                </tr>
              </thead>
              <tbody>
                {definitionRows.map((r) => (
                  <tr key={r.src}>
                    <td className={td}>{r.src}</td>
                    <td className={td}>{r.pos}</td>
                    <td className={td}>{r.item}</td>
                    <td className={td}>{r.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">確認方法：各資料のPDFをテキストに変換して「セールスエンジニア」「技術営業」「プリセールス」を検索し、件数を数えました。ESCOはAPI、O*NETは職業ページで確認しました（2026年11月28日）。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-4">
            職業そのものの定義文があるのは、確認した範囲では米国のO*NETと欧州のESCOでした。O*NETはSales Engineersを次のように定義しています（当サイト訳）。
          </p>
          <blockquote className="border-l-4 border-slate-300 pl-4 text-slate-600 leading-relaxed text-sm">
            企業向けの商品やサービスを販売する。その販売には、工学の学士号と同等の技術的な素養が必要である。
          </blockquote>
          <p className="text-slate-600 leading-relaxed mt-4">
            O*NETは、この職業で報告された職名の例として Business Development Engineer、Inside Sales Engineer、Product Sales Engineer、Sales Applications Engineer、Sales Engineer、Technical Marketing Engineer、Technical Sales Engineer の7件を挙げています。日本の分類はいずれも「営業」の区分に置いているのに対し、国際標準職業分類は「専門職」に置いている点が大きな違いです。
          </p>
        </section>

        <section id="classification" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">日本の職業分類での位置</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            厚生労働省編職業分類（2022年改定）の職業名索引から、「セールスエンジニア」「プリセールスエンジニア」「技術営業員」を含む職業名を当サイトで抜き出しました。該当は8件で、すべて中分類「048 営業の職業」に含まれていました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>分類項目</th>
                  <th className={th}>収録されている職業名</th>
                  <th className={`${th} text-right`}>件数</th>
                </tr>
              </thead>
              <tbody>
                {jilptRows.map((r) => (
                  <tr key={r.code}>
                    <td className={td}>{r.code}</td>
                    <td className={td}>{r.names}</td>
                    <td className={`${td} text-right`}>{r.n}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：JILPT「第5回改定 厚生労働省編職業分類 職業分類表 改定の経緯とその内容」（2022年12月）の職業名索引。件数は当サイトが数えたものです。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            「048-04 機械器具営業員」は、「他人を訪問する等し、はん用機械器具、生産用機械器具、業務用機械器具、電気機械器具、輸送用機械器具（自動車を除く）などの機械器具の販売に関する取引上の勧誘・交渉・受注・契約締結などを行う仕事」と説明されています。ただし、情報システムの構築に必要な機器・サービスの販売・提供に関する営業は「048-06 通信・情報システム営業員」に分類すると記載されています。048-06の例示にはIT営業員、システム営業部員、システム開発営業員があり、「セールスエンジニア」という職業名はありません。
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            このため、同じ「セールスエンジニア」という職種名でも、機器単体の技術営業であれば048-04、情報システムの提案と販売であれば048-06、パッケージソフトウェアの技術営業であれば048-99と、扱う商品によって分類が分かれると考えられます（当サイトの整理です）。
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            総務省の日本標準職業分類（2009年告示）では、大分類「D 販売従事者」の中分類「34 営業職業従事者」に、次の2か所でセールスエンジニアが例示されています。
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-7 text-sm">
            <li>344 機械器具営業職業従事者（通信機械器具を除く）：「セールスエンジニア（機械器具にかかるもの（通信・システムを除く））」</li>
            <li>345 通信・システム営業職業従事者：「セールスエンジニア（通信・システムにかかるもの）」。業務上の問題点の解決や要求の実現のための情報処理・通信技術のシステムを提案し、必要なハードウェア・ソフトウェア・通信回線・サポート人員などを販売する仕事と説明されています</li>
          </ul>
        </section>

        <section id="international" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">国際分類・欧州ESCOでの位置（当サイト集計）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            総務省が掲載している国際標準職業分類ISCO-08の仮訳では、技術・ICTの販売職は大分類「2 専門職」の小分類「243 販売・マーケティング・広報の専門職」に置かれています。2433（技術医療販売専門家）の職務には12項目が挙げられ、「顧客のニーズとリソースの判断、顧客に合った商品やサービスの勧め」「商品やサービスを顧客のニーズに合わせて変更する必要がある場合の製品設計に関わる情報提供」「設備あるいはサービスの設置及び保守コストの見積もり」などが含まれます。2434（情報通信技術販売専門職）は、卸売レベルでコンピュータのハードウェア・ソフトウェアなどの商品とサービスを販売し、必要に応じて専門的情報を提供する職業と説明されています。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            このISCOの区分の下に職業を細かく定めている欧州委員会のESCOから、関連する4職業の情報を2026年11月28日にAPIで取得し、登録されているスキルの件数を当サイトで数えました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>ESCOの職業（コード）</th>
                  <th className={th}>ESCOの説明（当サイト訳・要約）</th>
                  <th className={`${th} text-right`}>必須スキル</th>
                  <th className={`${th} text-right`}>任意スキル</th>
                </tr>
              </thead>
              <tbody>
                {escoRows.map((r) => (
                  <tr key={r.code}>
                    <td className={td}>{r.title}（{r.code}）</td>
                    <td className={td}>{r.desc}</td>
                    <td className={`${td} text-right`}>{r.ess}項目</td>
                    <td className={`${td} text-right`}>{r.opt}項目</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：欧州委員会 ESCO API（occupation）。件数は必須スキル（hasEssentialSkill）・任意スキル（hasOptionalSkill）の登録数を当サイトが数えたものです。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            ESCOで「sales engineer」という名前の職業は、別名14件がすべてバス・大型車両・小型車両などの車両に関する名称で、必須スキルにも車両記録の管理や修理費の見積もりが含まれていました。日本の求人でいうIT分野のセールスエンジニアに最も近いのは「ICT presales engineer」（ICTプリセールスエンジニア）と考えられます（当サイトの整理です）。
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            必須スキルの名称を職業間で照合したところ、ICTプリセールスエンジニアの必須スキル12項目のうち、ICTアカウントマネージャー（営業担当）と共通するのは「製品の理解」の1項目だけでした。technical sales representative とも共通は同じ1項目で、sales engineer（車両）とは0項目でした。一方、ICTアカウントマネージャーと technical sales representative の間では9項目が共通しており、ESCOではプリセールスを営業担当とは異なるスキル構成の職業として登録していることがわかります。
          </p>
          <div className="border border-slate-200 rounded-lg p-5 mt-6">
            <h3 className="font-bold text-slate-800 mb-2 text-sm">ICTプリセールスエンジニアの必須スキル（12項目）</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 leading-7">
              {presalesSkills.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <p className="text-xs text-slate-500 mt-2">日本語名は当サイト訳です。括弧内がESCOの英語名です。</p>
        </section>

        <section id="onet" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">米国O*NETの職務の内訳（当サイト集計）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            O*NETのSales Engineers（41-9031.00）には、職務（Tasks）が25件登録されています。当サイトで各職務の内容を読み、4つのまとまりに分類しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>まとまり（当サイトの分類）</th>
                  <th className={`${th} text-right`}>件数</th>
                  <th className={th}>主な職務（当サイト訳・要約）</th>
                </tr>
              </thead>
              <tbody>
                {onetRows.map((r) => (
                  <tr key={r.cat}>
                    <td className={td}>{r.cat}</td>
                    <td className={`${td} text-right`}>{r.n}件</td>
                    <td className={td}>{r.ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：O*NET OnLine「Sales Engineers（41-9031.00）」Tasks（全25件）。分類と件数は当サイトによるもので、1つの職務を1つのまとまりに割り当てています。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            件数では営業活動・契約・顧客管理が11件と最も多く、技術的な提案・検証の7件と合わせると、全体の7割強（18件）を占めます。導入後の問題の診断や技術文書の作成も職務に含まれており、販売前だけでなく販売後の技術支援まで担う職業として整理されています。分類の境目には判断の幅があるため、件数は目安としてご覧ください。
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            O*NETに掲載されている米国の賃金の中央値（2025年）は年124,900ドル、雇用者数（2025年）は51,600人です。米国の通貨・雇用制度での値であり、日本の水準を示すものではありません。O*NETは準備の度合いを「Job Zone Four」（多くは4年制大学の学位が必要で、数年の実務経験が求められる）としています。
          </p>
        </section>

        <section id="skill-standard" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ITスキル標準・デジタルスキル標準での扱い</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            IPAと経済産業省のITスキル標準V3 2011は、11職種（マーケティング、セールス、コンサルタント、ITアーキテクト、プロジェクトマネジメント、ITスペシャリスト、アプリケーションスペシャリスト、ソフトウェアデベロップメント、カスタマサービス、ITサービスマネジメント、エデュケーション）を定めています。このうち「セールス」職種は、「顧客における経営方針を確認し、その実現のための課題解決策の提案、ビジネスプロセス改善支援及びソリューション、製品、サービスの提案を実施し成約する。顧客との良好なリレーションを確立し顧客満足度を高める」職種と説明されています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>専門分野</th>
                  <th className={th}>IPAの説明</th>
                  <th className={th}>達成度指標のあるレベル</th>
                </tr>
              </thead>
              <tbody>
                {itssRows.map((r) => (
                  <tr key={r.field}>
                    <td className={td}>{r.field}</td>
                    <td className={td}>{r.desc}</td>
                    <td className={td}>{r.lv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：IPA「ITスキル標準V3 2011 第2部 キャリア編 職種の概要と達成度指標（2）セールス」（2012年3月26日付、全16ページ）。レベルの範囲は、同資料の達成度指標のページ（計12ページ）を当サイトが数えたものです。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            特定の製品やソリューションに精通して販売する「訪問型製品セールス」は、セールスエンジニアの仕事に最も近い専門分野と考えられます（当サイトの整理です）。達成度指標は、担当した顧客の規模や案件の要員数・契約金額によってレベルを区切っており、たとえば訪問型コンサルティングセールスのレベル3は「要員数がピーク時10人未満または年間契約金額1億円未満」の案件の提案と成約を経験していることを条件の一つとしています。
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            一方、IPAと経済産業省のデジタルスキル標準ver.2.0（147ページ）を当サイトで検索したところ、「セールス」という語は0件でした。同標準は、「事業、製品・サービスの営業・販売」を、ロールや身につけるべきスキルとしては明確に定義せず、DXの段階やプロジェクトによって対象とする機能に位置づけています（第Ⅲ部 第1章「DX推進スキル標準の類型の範囲」）。
          </p>
        </section>

        <section id="wage" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">関連する職種の賃金</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            賃金構造基本統計調査にはセールスエンジニアだけの区分はありません。最も近い区分は「機械器具・通信・システム営業職業従事者（自動車を除く）」で、区分名から、日本標準職業分類の344と345にあたる職業のうち自動車の営業を除いたものと考えられます（当サイトの整理です）。令和7年調査（産業計・男女計）の値から、年収目安を「きまって支給する現金給与額×12＋年間賞与その他特別給与額」で当サイトが算出しました。比較として、プログラマー・SEを含む「ソフトウェア作成者」の値も並べています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>企業規模</th>
                  <th className={`${th} text-right`}>機械器具・通信・システム営業職業従事者（自動車を除く）</th>
                  <th className={`${th} text-right`}>ソフトウェア作成者（比較）</th>
                </tr>
              </thead>
              <tbody>
                {wageRows.map((r) => (
                  <tr key={r.size}>
                    <td className={td}>{r.size}</td>
                    <td className={`${td} text-right`}>{r.sales}</td>
                    <td className={`${td} text-right`}>{r.soft}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：厚生労働省「令和7年賃金構造基本統計調査」（職種）第1表（e-Stat、xlsx）。千円単位の値から当サイトが算出し、万円単位に四捨五入しています。残業代を含む月額をもとにした概算です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            企業規模計の内訳は、平均年齢42.2歳、平均勤続年数13.7年、きまって支給する現金給与額425.6千円（うち所定内給与額387.9千円）、年間賞与その他特別給与額1,486.8千円です。この区分には、技術的な素養を必要としない機械器具やシステムの営業職も含まれます。セールスエンジニアの賃金そのものではなく、近い職業全体の目安としてご覧ください。
          </p>
        </section>

        <section id="compare" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ITコンサルタント・SEとの違い</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            厚生労働省編職業分類の説明をもとに、IT分野で仕事が重なりやすい職種との違いを当サイトで整理しました。実際の求人では担当範囲が異なる場合があるため、職務内容をご確認ください。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>観点</th>
                  <th className={th}>セールスエンジニア（IT分野）</th>
                  <th className={th}>ITコンサルタント</th>
                  <th className={th}>SE（システムエンジニア）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={td}>厚生労働省編職業分類の大分類</td><td className={td}>07 販売・営業の職業</td><td className={td}>02 研究・技術の職業</td><td className={td}>02 研究・技術の職業</td></tr>
                <tr><td className={td}>仕事の中心</td><td className={td}>システムや製品を提案し、販売・提供の取引（勧誘・交渉・契約締結）を進める</td><td className={td}>経営・業務環境の分析にもとづいて、ITを活用した業務改善などを提案する</td><td className={td}>システムの設計・開発を担う</td></tr>
                <tr><td className={td}>成果の測り方（ITスキル標準の例）</td><td className={td}>提案・成約した案件の規模や複雑性</td><td className={td}>―</td><td className={td}>―</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：JILPT「第5回改定 厚生労働省編職業分類」048-06・010-01、IPA「ITスキル標準V3 2011」。表のまとめ方は当サイトによるものです。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            厚生労働省編職業分類は、048-06（通信・情報システム営業員）の説明の中で、「企業・組織の経営・業務環境の分析などにもとづいて、情報処理・通信技術を活用した業務改善の提案などを行う仕事」は「010-01 システムコンサルタント」に分類すると明記しています。提案をする点は共通していますが、製品やサービスの販売・提供の取引を担うかどうかが分類上の分かれ目です。ITコンサルタントの詳しい説明は<Link href="/knowledge/it-consultant/" className="text-blue-600 hover:underline">ITコンサルタントとは</Link>、SEの工程ごとの作業は<Link href="/knowledge/se/" className="text-blue-600 hover:underline">SE（システムエンジニア）の仕事内容</Link>でご説明しています。
          </p>
        </section>

        <section id="related" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職・キャリアの詳しい情報</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            本記事はセールスエンジニアという職種の定義と公的資料での扱いに絞ってご説明しました。転職の進め方や近い職種の情報は、次の記事で扱っています。
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-7">
            <li>営業経験を生かした技術職への移行：<Link href="/career/sales-to-engineer/" className="text-blue-600 hover:underline">営業からエンジニアへの転職</Link></li>
            <li>提案・上流工程への移行：<Link href="/career/engineer-to-consultant/" className="text-blue-600 hover:underline">エンジニアからITコンサルへの転職</Link></li>
            <li>職業分類にもとづくIT職種の全体像：<Link href="/knowledge/it-engineer-types/" className="text-blue-600 hover:underline">ITエンジニアの種類一覧</Link></li>
            <li>ITコンサルタントの人材像と賃金：<Link href="/knowledge/it-consultant/" className="text-blue-600 hover:underline">ITコンサルタントとは</Link></li>
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
            <li>JILPT「第5回改定 厚生労働省編職業分類」（048営業の職業・010-01、職業名索引）：https://www.jil.go.jp/institute/seika/shokugyo/bunrui/documents/shokugyo05.pdf</li>
            <li>総務省「日本標準職業分類」（平成21年12月告示、中分類34）：https://www.soumu.go.jp/main_content/000661290.pdf</li>
            <li>総務省「国際標準職業分類2008年改定版（仮訳）グループ定義」（2433・2434）：https://www.soumu.go.jp/main_content/000397967.pdf</li>
            <li>ESCO sales engineer：http://data.europa.eu/esco/occupation/8529edc5-96ad-4cde-b34a-f86ad3753e4d</li>
            <li>ESCO technical sales representative：http://data.europa.eu/esco/occupation/c956be07-53a3-4b01-b8f8-f0c5a428eaa8</li>
            <li>ESCO ICT presales engineer：http://data.europa.eu/esco/occupation/16605833-c196-48d7-a6f5-bbdebdc353df</li>
            <li>ESCO ICT account manager：http://data.europa.eu/esco/occupation/89b85c45-ddc7-4fe1-be5a-d3db2be11f3b</li>
            <li>ESCO API（取得に使用）：https://ec.europa.eu/esco/api/resource/occupation</li>
            <li>O*NET OnLine Sales Engineers（41-9031.00）：https://www.onetonline.org/link/summary/41-9031.00</li>
            <li>IPA「ITスキル標準V3 2011」ダウンロード：https://www.ipa.go.jp/jinzai/skill-standard/plus-it-ui/itss/download_v3_2011.html</li>
            <li>IPA「ITスキル標準V3 2011 職種の概要と達成度指標（2）セールス」：https://www.ipa.go.jp/jinzai/skill-standard/plus-it-ui/itss/ps6vr70000004x60-att/000024868.pdf</li>
            <li>IPA「デジタルスキル標準ver.2.0」：https://www.ipa.go.jp/jinzai/skill-standard/dss/rcu1hd000000j76k-att/dss_ver2.0.pdf</li>
            <li>厚生労働省「令和7年賃金構造基本統計調査」（職種）第1表：https://www.e-stat.go.jp/stat-search/files?stat_infid=000040421116</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "ITコンサルタントとは", href: "/knowledge/it-consultant/" },
              { name: "SE（システムエンジニア）の仕事内容", href: "/knowledge/se/" },
              { name: "ITエンジニアの種類一覧", href: "/knowledge/it-engineer-types/" },
              { name: "営業からエンジニアへの転職", href: "/career/sales-to-engineer/" },
              { name: "エンジニアからITコンサルへの転職", href: "/career/engineer-to-consultant/" },
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
