import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "SE（システムエンジニア）の仕事内容｜職業分類の定義・工程ごとの作業・賃金を公的資料で整理【2026年】";
const DESCRIPTION =
  "SE（システムエンジニア）は、要件定義・設計・開発・テストなどを担う技術職です。厚生労働省編職業分類と日本標準職業分類の定義、工程ごとの作業内容、賃金構造基本統計調査の職種別賃金、IPA試験の対象者像を公的資料で整理します。";
const URL = "/knowledge/se/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "SEの定義（職業分類での位置づけ）" },
  { id: "tasks", label: "工程ごとの仕事内容" },
  { id: "wage", label: "SEに当たる職種の賃金と労働時間" },
  { id: "skill", label: "求められる知識（IPA試験の対象者像）" },
  { id: "career", label: "SEの経験を転職に活かすには" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "SE（システムエンジニア）とはどのような仕事ですか？",
    a: "情報システムやソフトウェアを作るために、要件定義・基本設計・詳細設計・開発・テストなどを担う技術職です。厚生労働省編職業分類（2022年改定）では、ソフトウェア開発技術者（WEB・オープン系）の例示に「システムエンジニア（業務用システム）」が、ITシステム設計技術者の例示に「システムエンジニア（基盤システム）」が挙げられています。",
  },
  {
    q: "SEとプログラマーの違いは何ですか？",
    a: "厚生労働省編職業分類では、プログラマーはSEを含むソフトウェア開発技術者とは別の小分類（009-03）です。一般にSEは要件定義や設計を含めて担い、プログラマーは設計にもとづくプログラムの作成を中心に担いますが、職場によって分担は異なります。移行の進め方は「プログラマーからSEへの転職ガイド」をご覧ください。",
  },
  {
    q: "SEの年収はどのくらいですか？",
    a: "公的統計に「SE」という職種区分はありませんが、令和7年賃金構造基本統計調査では、システムコンサルタント・設計者の年収目安が約889万円、ソフトウェア作成者が約578万円です（きまって支給する現金給与額×12＋年間賞与で当サイト算出）。担う工程によって差があります。",
  },
  {
    q: "SEになるのに資格は必要ですか？",
    a: "SEとして働くための必須の資格はありません。IPAの応用情報技術者試験は「ITを活用したサービス、製品、システム及びソフトウェアを作る人材」に必要な応用的知識・技能を問う国家試験で、知識の証明として使われています。",
  },
];

export default function SePage() {
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
          { name: "SE（システムエンジニア）の仕事内容" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          SE（システムエンジニア）の仕事内容｜職業分類の定義・工程ごとの作業・賃金を公的資料で整理
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月25日 | 公的資料の確認日: 2026年11月25日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】SEの仕事内容</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>SE（システムエンジニア）は、情報システムを作るために、要件定義・基本設計・詳細設計・開発・テストなどを担う技術職です。厚生労働省編職業分類では「要件定義、基本設計書・詳細設計書・仕様書の作成、プログラムの開発、作成したソフトウェアのテスト」などの仕事と説明されています。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・職業分類上は、ソフトウェア開発技術者（WEB・オープン系／組込・制御系）やITシステム設計技術者の例示に「システムエンジニア」が含まれます</li>
              <li>・IPAの調査では、新規開発の工数のうち製作工程が中央値で32.6％、要件定義は約9％です</li>
              <li>・賃金構造基本統計調査では、システムコンサルタント・設計者の年収目安が約889万円、ソフトウェア作成者が約578万円です（当サイト算出）</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          「SE」は求人票で広く使われる呼び方ですが、法令や統計で一つに定められた職種名ではありません。本記事では、厚生労働省編職業分類・総務省の日本標準職業分類の定義、IPAのソフトウェア開発データ白書、令和7年賃金構造基本統計調査、IPA試験の対象者像をもとに、SEの仕事内容を整理します。
        </p>

        <DataNote
          surveyedAt="2026年11月25日"
          sources={["厚生労働省編職業分類（2022年 第5回改定・JILPT）", "総務省「日本標準職業分類（平成21年12月告示）」", "IPA「ソフトウェア開発データ白書2018-2019」", "厚生労働省「令和7年賃金構造基本統計調査」", "IPA「応用情報技術者試験」試験区分"]}
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">SEの定義（職業分類での位置づけ）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ハローワークなどで使われる厚生労働省編職業分類（2022年 第5回改定）で、例示職業名に「システムエンジニア」が含まれる小分類を抜き出しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">小分類</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">例示職業名（SEに当たるもの）</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">仕事の説明（要旨）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">009-01 ソフトウェア開発技術者（WEB・オープン系）</td><td className="border border-slate-200 px-3 py-2">システムエンジニア（WEBサイト開発）、システムエンジニア（業務用システム）</td><td className="border border-slate-200 px-3 py-2">ウェブ系・オープン系のソフトウェアの要件定義、基本設計書・詳細設計書・仕様書の作成など</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">009-02 ソフトウェア開発技術者（組込・制御系）</td><td className="border border-slate-200 px-3 py-2">システムエンジニア（組込、IoT）</td><td className="border border-slate-200 px-3 py-2">機器に組み込むソフトウェアの開発</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">010-02 ITシステム設計技術者</td><td className="border border-slate-200 px-3 py-2">社内システムエンジニア（主にシステムの設計に従事するもの）、システムエンジニア（基盤システム）</td><td className="border border-slate-200 px-3 py-2">システム全体の基本構造の企画・設計。システム導入の企画・監督を含む</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：労働政策研究・研修機構「厚生労働省編職業分類 職業分類表 改定の経緯とその内容」（2022年）。要旨は当サイトによる要約です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            総務省の日本標準職業分類（平成21年12月告示）では、「システム設計者」を「必要なシステム全体の構成を企画する仕事」、「ソフトウェア作成者」を「ソフトウェア作成のための仕様決定、設計及びプログラミングの仕事」と定義しています。同じ「SE」という呼び方でも、システム全体の設計を担う場合と、個々のソフトウェアの設計・開発を担う場合があることが分かります。
          </p>
        </section>

        <section id="tasks" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">工程ごとの仕事内容</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            SEが担う代表的な工程と、IPA「ソフトウェア開発データ白書2018-2019」の新規開発プロジェクトにおける工数（作業量）の比率です。作業内容は職業分類の説明とIPAの工程区分をもとに当サイトが整理しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">工程</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">主な作業</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">工数比率（中央値）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">要件定義</td><td className="border border-slate-200 px-3 py-2">利用者の要求を聞き取り、システムに必要な機能・性能を決める</td><td className="border border-slate-200 px-3 py-2 text-right">8.9％（6工程中）</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">基本設計</td><td className="border border-slate-200 px-3 py-2">画面・帳票・データ・外部との連携など、システムの外から見える仕様を決める</td><td className="border border-slate-200 px-3 py-2 text-right">15.5％</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">詳細設計</td><td className="border border-slate-200 px-3 py-2">プログラムの内部の構造や処理を決め、設計書にまとめる</td><td className="border border-slate-200 px-3 py-2 text-right">16.7％</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">製作</td><td className="border border-slate-200 px-3 py-2">プログラムを作成し、単体で動作を確認する</td><td className="border border-slate-200 px-3 py-2 text-right">32.6％</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">結合テスト</td><td className="border border-slate-200 px-3 py-2">プログラム同士を組み合わせて動作を確認する</td><td className="border border-slate-200 px-3 py-2 text-right">19.9％</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">総合テスト</td><td className="border border-slate-200 px-3 py-2">システム全体が要件どおりに動くかを確認する</td><td className="border border-slate-200 px-3 py-2 text-right">11.6％</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：IPA「ソフトウェア開発データ白書2018-2019」図表7-1-16（基本設計〜総合テストの5工程・N=304）、図表7-1-18（要件定義を含む6工程・N=177）。中央値は工程ごとに求めた値のため、合計は100％になりません。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            白書は「新規開発では他の工程と比べて製作工程の工数の比率が高く、30％を超えている」としています。一方で、設計（基本設計・詳細設計）とテスト（結合・総合）をあわせると製作を上回り、SEの仕事はプログラムを書くことよりも、決めること・確かめることの比重が大きいことが分かります。要件定義と設計を中心とした仕事は<Link href="/knowledge/upstream/" className="text-blue-600 hover:underline">上流工程とは</Link>で詳しくご説明しています。
          </p>
        </section>

        <section id="wage" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SEに当たる職種の賃金と労働時間</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            令和7年賃金構造基本統計調査（産業計・企業規模10人以上・男女計）の職種別の値です。統計に「SE」という区分はないため、SEの仕事に近い2職種を掲載します。年収目安は「きまって支給する現金給与額×12＋年間賞与その他特別給与額」で当サイトが算出しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">項目</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">システムコンサルタント・設計者</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">ソフトウェア作成者</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">平均年齢</td><td className="border border-slate-200 px-3 py-2 text-right">38.3歳</td><td className="border border-slate-200 px-3 py-2 text-right">37.1歳</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">勤続年数</td><td className="border border-slate-200 px-3 py-2 text-right">11.9年</td><td className="border border-slate-200 px-3 py-2 text-right">9.9年</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">月の労働時間（所定内＋超過）</td><td className="border border-slate-200 px-3 py-2 text-right">173＋11時間</td><td className="border border-slate-200 px-3 py-2 text-right">159＋12時間</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">きまって支給する現金給与額</td><td className="border border-slate-200 px-3 py-2 text-right">54.21万円</td><td className="border border-slate-200 px-3 py-2 text-right">39.08万円</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">年間賞与その他特別給与額</td><td className="border border-slate-200 px-3 py-2 text-right">238.52万円</td><td className="border border-slate-200 px-3 py-2 text-right">109.51万円</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2 font-medium">年収目安（当サイト算出）</td><td className="border border-slate-200 px-3 py-2 text-right font-medium">約889万円</td><td className="border border-slate-200 px-3 py-2 text-right font-medium">約578万円</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">労働者数（推計）</td><td className="border border-slate-200 px-3 py-2 text-right">約17.4万人</td><td className="border border-slate-200 px-3 py-2 text-right">約81.8万人</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：厚生労働省「令和7年賃金構造基本統計調査」（職種）第1表（e-Stat、2026年3月24日公開）。年収目安は残業代を含む月額をもとにした概算です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            ソフトウェア作成者の労働者数はシステムコンサルタント・設計者の約4.7倍で、年収目安には約311万円の差があります（いずれも当サイト算出）。職種別の年収の比較は<Link href="/salary/job-type-salary/" className="text-blue-600 hover:underline">ITエンジニア職種別 年収ランキング</Link>をご覧ください。
          </p>
        </section>

        <section id="skill" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる知識（IPA試験の対象者像）</h2>
          <p className="text-slate-600 leading-relaxed">
            IPAの応用情報技術者試験は、対象者像を「ITを活用したサービス、製品、システム及びソフトウェアを作る人材に必要な応用的知識・技能をもち、高度IT人材としての方向性を確立した者」としています。業務と役割の一つに「システムの企画・要件定義を行う」ことが挙げられており、SEに求められる知識の範囲を確認する目安になります。資格の転職での評価は<Link href="/cert/" className="text-blue-600 hover:underline">資格ガイド一覧</Link>をご覧ください。
          </p>
        </section>

        <section id="career" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SEの経験を転職に活かすには</h2>
          <p className="text-slate-600 leading-relaxed">
            SEの仕事は職場によって担当する工程が大きく異なるため、職務経歴書では「SEとして○年」ではなく、担当した工程（要件定義・基本設計など）、システムの種類、規模、使った技術を具体的に書くと伝わりやすくなります。働く場所による違いは<Link href="/knowledge/sier/" className="text-blue-600 hover:underline">SIerとは</Link>・<Link href="/knowledge/shanai-se/" className="text-blue-600 hover:underline">社内SEとは</Link>、プログラマーからの移行は<Link href="/career/pg-to-se/" className="text-blue-600 hover:underline">プログラマーからSEへの転職ガイド</Link>でご説明しています。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">出典一覧（確認日：2026年11月25日）</h2>
          <ul className="text-xs text-slate-600 leading-6 space-y-1 break-all">
            <li>労働政策研究・研修機構「厚生労働省編職業分類 職業分類表 改定の経緯とその内容」：https://www.jil.go.jp/institute/seika/shokugyo/bunrui/documents/shokugyo05.pdf</li>
            <li>総務省「日本標準職業分類（平成21年12月統計基準設定）分類項目名、説明及び内容例示」：https://www.soumu.go.jp/main_content/000661290.pdf</li>
            <li>IPA「ソフトウェア開発データ白書2018-2019」：https://www.ipa.go.jp/archive/publish/wp-sd/sd2018.html</li>
            <li>厚生労働省「令和7年賃金構造基本統計調査」（職種）第1表：https://www.e-stat.go.jp/stat-search/files?stat_infid=000040421116</li>
            <li>IPA「応用情報技術者試験」：https://www.ipa.go.jp/shiken/kubun/ap.html</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "上流工程とは", href: "/knowledge/upstream/" },
              { name: "SIerとは", href: "/knowledge/sier/" },
              { name: "社内SEとは", href: "/knowledge/shanai-se/" },
              { name: "プログラマーからSEへの転職ガイド", href: "/career/pg-to-se/" },
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
