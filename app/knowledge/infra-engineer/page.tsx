import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "インフラエンジニアの仕事内容｜構築と運用の違い・職業分類の定義・NW試験の受験者データ・賃金【2026年】";
const DESCRIPTION =
  "インフラエンジニアは、サーバーやネットワークなどシステムの基盤を設計・構築・運用する技術職です。厚生労働省編職業分類の定義、IPAネットワークスペシャリスト試験の対象者像と業務別の応募者数、令和7年賃金構造基本統計調査の賃金を公的資料で整理します。";
const URL = "/knowledge/infra-engineer/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "職業分類での位置づけ（構築と運用）" },
  { id: "tasks", label: "工程ごとの仕事内容" },
  { id: "exam", label: "IPA試験の対象者像と受験者のデータ" },
  { id: "wage", label: "賃金（賃金構造基本統計調査）" },
  { id: "career", label: "転職での見られ方" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "インフラエンジニアの仕事内容を一言でいうと何ですか？",
    a: "サーバーやネットワークなど、システムを動かす基盤を設計・構築し、安定して動き続けるよう運用・保守する仕事です。厚生労働省編職業分類には「インフラエンジニア」という職業名はなく、構築を担う場合は「通信ネットワーク技術者」、運用・保守を担う場合は「ITシステム運用管理者」に分類されます。",
  },
  {
    q: "構築と運用では仕事がどう違いますか？",
    a: "職業分類の定義では、通信ネットワーク技術者は要件定義、設計書の作成、ネットワーク機器・サーバーの設置・設定、ネットワークの試験を行います。ITシステム運用管理者は、構築されたシステムとネットワークの運用・監視・維持・管理・安全性確保・保守を行います。求人票では両方をまとめて「インフラエンジニア」と呼ぶことが多くあります。",
  },
  {
    q: "インフラエンジニアに役立つ国家試験はありますか？",
    a: "IPAのネットワークスペシャリスト試験が代表的です。令和7年度春期は受験者11,948人に対して合格者2,126人、合格率17.8％でした。セキュリティを担う場合は情報処理安全確保支援士試験（同期の合格率19.0％）も対象になります。",
  },
  {
    q: "インフラエンジニアの年収はどのくらいですか？",
    a: "インフラエンジニアだけの公的統計はありません。令和7年賃金構造基本統計調査で運用・ネットワーク系の職種を含む「その他の情報処理・通信技術者」の年収目安は約610万円（平均42.2歳、当サイト算出）です。",
  },
  {
    q: "ネットワークスペシャリスト試験の受験者は、どんな業務の人が多いですか？",
    a: "IPAの業務別統計（令和7年度春期）では、応募者のうち業務を回答したIT関連業務の9,466人のうち、ネットワーク技術支援が1,997人で最も多く、システム設計1,800人、プログラム開発1,776人が続きました。開発職の応募者も多いことが分かります。",
  },
];

const nwRows = [
  { y: "令和4年度", apply: "13,832", take: "9,495", pass: "1,649", rate: "17.4％" },
  { y: "令和5年度", apply: "15,239", take: "10,395", pass: "1,482", rate: "14.3％" },
  { y: "令和6年度", apply: "16,085", take: "11,089", pass: "1,704", rate: "15.4％" },
  { y: "令和7年度", apply: "17,297", take: "11,948", pass: "2,126", rate: "17.8％" },
];

const gyomuRows = [
  { g: "ネットワーク技術支援", n: "1,997", s: "21.1％" },
  { g: "システム設計", n: "1,800", s: "19.0％" },
  { g: "プログラム開発", n: "1,776", s: "18.8％" },
  { g: "プロジェクト管理", n: "1,113", s: "11.8％" },
  { g: "ITサービスマネジメント（システム管理・運用）", n: "966", s: "10.2％" },
  { g: "情報セキュリティ技術支援・管理・運用", n: "922", s: "9.7％" },
  { g: "システム化戦略・企画・計画", n: "631", s: "6.7％" },
  { g: "その他のIT関連業務（エンベデッド・DB・監査）", n: "261", s: "2.8％" },
];

export default function InfraEngineerPage() {
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
          { name: "インフラエンジニアの仕事内容" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          インフラエンジニアの仕事内容｜構築と運用の違い・職業分類の定義・NW試験の受験者データ・賃金
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月26日 | 公的資料の確認日: 2026年11月26日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】インフラエンジニアの仕事内容</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>インフラエンジニアは、サーバー・ネットワークなどシステムの基盤を設計・構築し、運用・監視・保守する技術職です。職業分類では、構築は「通信ネットワーク技術者」、運用・保守は「ITシステム運用管理者」にあたります。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・構築：要件定義、設計書の作成、ネットワーク機器・サーバーの設置・設定、試験</li>
              <li>・運用：システムとネットワークの運用・監視・維持・管理・安全性確保・保守</li>
              <li>・IPAネットワークスペシャリスト試験の応募者は令和4〜7年度で4年連続増加（令和7年度春期 17,297人）</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          「インフラエンジニア」は求人票で広く使われる呼び方ですが、公的な職業分類に同じ名前の職種はありません。本記事では、厚生労働省編職業分類の定義をもとに仕事内容を整理し、IPAのネットワークスペシャリスト試験の対象者像、応募者数の推移と業務別の内訳、令和7年賃金構造基本統計調査の賃金を掲載します。業務別の構成比は、IPAの統計表から当サイトが算出しました。
        </p>

        <DataNote
          surveyedAt="2026年11月26日"
          sources={["労働政策研究・研修機構「厚生労働省編職業分類 職業分類表 改定の経緯とその内容」（2022年）", "IPA「ネットワークスペシャリスト試験」「情報処理安全確保支援士試験」試験区分ページ", "IPA「統計情報」推移表・業務別（令和7年度）", "厚生労働省「令和7年賃金構造基本統計調査」"]}
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">職業分類での位置づけ（構築と運用）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">項目</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">010-06 通信ネットワーク技術者（構築）</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">010-04 ITシステム運用管理者（運用）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">定義（要約）</td><td className="border border-slate-200 px-3 py-2">有線・無線のデータ通信ネットワークシステムを構築するため、要件定義、基本設計書・詳細設計書の作成、ネットワーク機器・サーバーの設置・設定、ネットワークの試験を行う</td><td className="border border-slate-200 px-3 py-2">構築されたシステム及びネットワークの運用・監視・維持・管理・安全性確保・保守を行う</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">含まれるもの</td><td className="border border-slate-200 px-3 py-2">LAN設備の企画・設計、設備工事の施工管理、通信規約（プロトコル）などの通信技術の仕事</td><td className="border border-slate-200 px-3 py-2">情報セキュリティ技術者、セキュリティアナリストなど運用面のセキュリティの仕事</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">職業名の例示（抜粋）</td><td className="border border-slate-200 px-3 py-2">ネットワークエンジニア、サーバーエンジニア（構築・設定を行うもの）、サーバー構築技術者、伝送プロトコル技術者</td><td className="border border-slate-200 px-3 py-2">サーバー管理者、ネットワーク管理者、システム運用管理者、運用監視オペレーター、システム保守員</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">別の分類になるもの</td><td className="border border-slate-200 px-3 py-2">システム全体の構成の企画・設計（010-02 システムアーキテクト）</td><td className="border border-slate-200 px-3 py-2">社員からの問い合わせ対応（010-05 社内ヘルプデスク）、コンピュータ機器の保守作業（075-02 カスタマーエンジニア）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：労働政策研究・研修機構「厚生労働省編職業分類 職業分類表 改定の経緯とその内容」（2022年 第5回改定）。要約は当サイトによるものです。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            同じ「サーバー」の仕事でも、構築・設定を行う人は通信ネットワーク技術者、管理を行う人はITシステム運用管理者と、担う工程によって分類が分かれています。ITエンジニア全体の職種の違いは<Link href="/knowledge/it-engineer-types/" className="text-blue-600 hover:underline">ITエンジニアの種類一覧</Link>をご覧ください。
          </p>
        </section>

        <section id="tasks" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">工程ごとの仕事内容</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            職業分類の定義と、IPAネットワークスペシャリスト試験の「業務と役割」に挙げられた工程（企画・要件定義・設計・構築・運用・保守）にそって、当サイトが仕事内容を整理しました。
          </p>
          <ol className="space-y-3 text-sm text-slate-700 leading-7 list-decimal pl-5">
            <li><strong>企画・要件定義</strong>：システムに求められる性能・信頼性・安全性を整理し、ネットワークシステムの要求仕様を作成します。</li>
            <li><strong>設計</strong>：基本設計書・詳細設計書を作成します。IPAは、プロトコル技術、信頼性設計、セキュリティ技術、ネットワークサービス、コストを評価して論理設計・物理設計を行う力を求めています。</li>
            <li><strong>構築</strong>：ネットワーク機器・サーバーを設置・設定します。通信事業者・ベンダー・工事業者など社外の企業を活用して進めることもあります。</li>
            <li><strong>試験</strong>：設定どおりに通信できるか、障害時に切り替わるかなどを試験します。</li>
            <li><strong>運用・監視</strong>：稼働状況を監視し、障害が起きたときは原因を調べて復旧します。</li>
            <li><strong>保守・安全性確保</strong>：機器やソフトウェアの更新、脆弱性への対応、容量の見直しなどを行います。</li>
          </ol>
          <p className="text-slate-600 leading-relaxed mt-4">
            クラウドの普及により、機器の設置の代わりにクラウドサービスの設定やコードによる構築を行う職場も増えています。運用の考え方は<Link href="/knowledge/sre/" className="text-blue-600 hover:underline">SREとは</Link>、開発と運用の連携は<Link href="/knowledge/devops/" className="text-blue-600 hover:underline">DevOpsとは</Link>でご説明しています。
          </p>
        </section>

        <section id="exam" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">IPA試験の対象者像と受験者のデータ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            IPAはネットワークスペシャリスト試験の対象者像を「高度IT人材として確立した専門分野をもち、ネットワークに関係する固有技術を活用し、最適な情報システム基盤の企画・要件定義・開発・運用・保守において中心的な役割を果たすとともに、固有技術の専門家として、情報セキュリティを含む情報システムの企画・要件定義・開発・運用・保守への技術支援を行う者」と定めています。同試験（春期）の令和4〜7年度の推移です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">年度（春期）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">応募者数</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">受験者数</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">合格者数</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">合格率</th>
                </tr>
              </thead>
              <tbody>
                {nwRows.map((r) => (
                  <tr key={r.y}>
                    <td className="border border-slate-200 px-3 py-2">{r.y}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.apply}人</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.take}人</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.pass}人</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：IPA「統計情報（応用情報技術者試験、高度試験、情報処理安全確保支援士試験）」推移表（令和7年度・春期 全国）。合格率は合格者数÷受験者数（IPA記載値）。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-4">
            応募者数は令和4年度から令和7年度にかけて3,465人（約25％）増えました（当サイト算出）。次の表は、令和7年度春期の応募者を業務別に集計したIPAの統計から、IT関連業務と回答した9,466人の内訳を当サイトが構成比にしたものです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">応募者の業務</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">応募者数</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">構成比（当サイト算出）</th>
                </tr>
              </thead>
              <tbody>
                {gyomuRows.map((r) => (
                  <tr key={r.g}>
                    <td className="border border-slate-200 px-3 py-2">{r.g}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.n}人</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.s}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：IPA「統計情報」業務別（令和7年度・春期 全国）のネットワークスペシャリスト試験の応募者数。IT関連業務の小計9,466人に対する構成比です。研究・開発、営業などIT関連以外の業務、「その他・無記入」（6,062人）は含みません。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            ネットワークの専門業務の人は約2割にとどまり、システム設計やプログラム開発の人も同程度応募しています。開発職からインフラ領域へ知識を広げる手段としても使われている試験だといえます。セキュリティを担う場合は情報処理安全確保支援士試験も対象で、令和7年度春期は受験者16,526人・合格者3,134人・合格率19.0％でした。資格の評価は<Link href="/cert/network-specialist/" className="text-blue-600 hover:underline">ネットワークスペシャリストの解説</Link>・<Link href="/cert/security-specialist/" className="text-blue-600 hover:underline">情報処理安全確保支援士の解説</Link>をご覧ください。
          </p>
        </section>

        <section id="wage" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">賃金（賃金構造基本統計調査）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            賃金構造基本統計調査には「インフラエンジニア」の区分がないため、運用・ネットワーク系の職種を含む「その他の情報処理・通信技術者」と、比較のためにIT系の他の2職種を掲載します（令和7年・産業計・企業規模10人以上・男女計）。年収目安は「きまって支給する現金給与額×12＋年間賞与その他特別給与額」で当サイトが算出しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">職種</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">平均年齢</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">きまって支給する現金給与額</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">年間賞与等</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">年収目安</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2 font-medium">その他の情報処理・通信技術者</td><td className="border border-slate-200 px-3 py-2 text-right">42.2歳</td><td className="border border-slate-200 px-3 py-2 text-right">41.58万円</td><td className="border border-slate-200 px-3 py-2 text-right">110.80万円</td><td className="border border-slate-200 px-3 py-2 text-right font-medium">約610万円</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">システムコンサルタント・設計者</td><td className="border border-slate-200 px-3 py-2 text-right">38.3歳</td><td className="border border-slate-200 px-3 py-2 text-right">54.21万円</td><td className="border border-slate-200 px-3 py-2 text-right">238.52万円</td><td className="border border-slate-200 px-3 py-2 text-right">約889万円</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">ソフトウェア作成者</td><td className="border border-slate-200 px-3 py-2 text-right">37.1歳</td><td className="border border-slate-200 px-3 py-2 text-right">39.08万円</td><td className="border border-slate-200 px-3 py-2 text-right">109.51万円</td><td className="border border-slate-200 px-3 py-2 text-right">約578万円</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：厚生労働省「令和7年賃金構造基本統計調査」（職種）第1表（e-Stat）。年収目安は残業代を含む月額をもとにした当サイトの概算です。「その他の情報処理・通信技術者」にはインフラ以外の職種も含まれます。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            システム全体の構成を設計する仕事は職業分類上「ITシステム設計技術者」にあたり、統計ではシステムコンサルタント・設計者に近い区分です。インフラの経験を活かして設計・アーキテクトの役割へ進むことは、年収を上げる道筋の一つと考えられます。
          </p>
        </section>

        <section id="career" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職での見られ方</h2>
          <p className="text-slate-600 leading-relaxed">
            インフラエンジニアの求人は、構築中心か運用中心かで求められる経験が大きく異なります。職務経歴書には、担当した工程（設計・構築・運用・保守）、扱った機器やクラウドサービス、システムの規模（台数・拠点数・利用者数）、障害対応の経験を具体的に書くと伝わりやすくなります。転職市場での進め方は<Link href="/skill/infrastructure/" className="text-blue-600 hover:underline">インフラエンジニアの転職ガイド</Link>、ネットワークの専門職は<Link href="/skill/network/" className="text-blue-600 hover:underline">ネットワークエンジニアの転職ガイド</Link>でご説明しています。
          </p>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">出典一覧（確認日：2026年11月26日）</h2>
          <ul className="text-xs text-slate-600 leading-6 space-y-1 break-all">
            <li>労働政策研究・研修機構「厚生労働省編職業分類 職業分類表 改定の経緯とその内容」：https://www.jil.go.jp/institute/seika/shokugyo/bunrui/documents/shokugyo05.pdf</li>
            <li>IPA「ネットワークスペシャリスト試験」：https://www.ipa.go.jp/shiken/kubun/nw.html</li>
            <li>IPA「情報処理安全確保支援士試験」：https://www.ipa.go.jp/shiken/kubun/sc.html</li>
            <li>IPA「統計情報（応用情報技術者試験、高度試験、情報処理安全確保支援士試験）」推移表・業務別（令和7年度）：https://www.ipa.go.jp/shiken/reports/toukei.html</li>
            <li>厚生労働省「令和7年賃金構造基本統計調査」（職種）第1表：https://www.e-stat.go.jp/stat-search/files?stat_infid=000040421116</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "インフラエンジニアの転職ガイド", href: "/skill/infrastructure/" },
              { name: "ITエンジニアの種類一覧", href: "/knowledge/it-engineer-types/" },
              { name: "SREとは", href: "/knowledge/sre/" },
              { name: "ネットワークエンジニアの転職ガイド", href: "/skill/network/" },
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
