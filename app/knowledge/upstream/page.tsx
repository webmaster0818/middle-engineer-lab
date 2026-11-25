import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "上流工程とは｜共通フレームの範囲・工数と工期の比率・要件定義の責任をIPA資料で整理【2026年】";
const DESCRIPTION =
  "上流工程とは、システム開発のうち企画・要件定義・設計など、作るものを決める前半の工程です。IPAの共通フレーム2013のプロセス体系、ソフトウェア開発データ白書の工程別の工数・工期の比率、要件定義の責任の考え方、上流を担う職種の賃金を整理します。";
const URL = "/knowledge/upstream/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "scope", label: "上流工程の範囲（共通フレーム2013）" },
  { id: "ratio", label: "工程別の工数と工期の比率（IPA白書）" },
  { id: "requirement", label: "要件定義は誰の責任か" },
  { id: "wage", label: "上流を担う職種の賃金" },
  { id: "career", label: "上流工程の経験を積むには" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "上流工程とはどこからどこまでですか？",
    a: "法令などで決まった定義はありませんが、一般に、システム化の企画・要件定義・基本設計など、作るものを決める前半の工程を指します。IPAの共通フレーム2013では、企画プロセスと要件定義プロセスが、システム開発プロセスに先立って行う作業として位置づけられています。",
  },
  {
    q: "上流工程は全体の作業量のどのくらいを占めますか？",
    a: "IPA「ソフトウェア開発データ白書2018-2019」の新規開発プロジェクトでは、要件定義を含む6工程の工数のうち要件定義は中央値で約9％、工期（月数）では約15％でした。基本設計は5工程の工数の中央値で15.5％です。",
  },
  {
    q: "要件定義は発注者と開発会社のどちらが行うものですか？",
    a: "IPAの「ユーザのための要件定義ガイド 第2版」は、システムの要件を定義する責任は、システムを利用してビジネスに貢献する役目を負うユーザ（発注者）にあると言われていると説明しています。実際には、開発会社のSEやコンサルタントが支援しながら一緒に進めることが一般的です。",
  },
  {
    q: "上流工程に関係する資格はありますか？",
    a: "IPAのシステムアーキテクト試験は、対象者像を「情報システムを利用したシステムの開発に必要となる要件を定義し、それを実現するためのアーキテクチャを設計し、開発を主導する者」としており、上流工程に直接関係する国家試験です。",
  },
];

const ratioRows = [
  { phase: "要件定義", effort: "8.9％", period: "15.5％", note: "6工程中（工数N=177・工期N=120）" },
  { phase: "基本設計", effort: "15.5％", period: "19.8％", note: "5工程中（工数N=304・工期N=193）" },
  { phase: "詳細設計", effort: "16.7％", period: "17.5％", note: "同上" },
  { phase: "製作", effort: "32.6％", period: "23.3％", note: "同上" },
  { phase: "結合テスト", effort: "19.9％", period: "18.4％", note: "同上" },
  { phase: "総合テスト", effort: "11.6％", period: "17.6％", note: "同上" },
];

export default function UpstreamPage() {
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
          { name: "上流工程とは" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          上流工程とは｜共通フレームの範囲・工数と工期の比率・要件定義の責任をIPA資料で整理
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月25日 | 公的資料の確認日: 2026年11月25日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】上流工程とは</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>上流工程とは、システム開発のうち、企画・要件定義・基本設計など「何を作るか」を決める前半の工程を指す言葉です。法令で決まった定義はなく、職場によって範囲が少し異なります。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・IPAの共通フレーム2013では、企画プロセスと要件定義プロセスを、開発に先立って行う作業と位置づけています</li>
              <li>・IPAの白書では、要件定義は6工程の工数の約9％ですが、工期（月数）では約15％を占めます</li>
              <li>・上流を担うシステムコンサルタント・設計者の年収目安は約889万円で、ソフトウェア作成者より約311万円高い水準です（当サイト算出）</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、IPAの「共通フレーム2013」「ソフトウェア開発データ白書2018-2019」「ユーザのための要件定義ガイド 第2版」、令和7年賃金構造基本統計調査、IPA試験の対象者像をもとに、上流工程の範囲と特徴を整理します。求人票に「上流工程の経験」と書かれているときの読み方の参考にもお使いください。
        </p>

        <DataNote
          surveyedAt="2026年11月25日"
          sources={["IPA「共通フレーム2013」", "IPA「ソフトウェア開発データ白書2018-2019」", "IPA「ユーザのための要件定義ガイド 第2版」", "厚生労働省「令和7年賃金構造基本統計調査」", "IPA「システムアーキテクト試験」試験区分"]}
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

        <section id="scope" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">上流工程の範囲（共通フレーム2013）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            IPAの共通フレーム2013（2013年3月発行）は、「ソフトウェア、システム、サービスの構想から開発、運用、保守、廃棄に至るまでのライフサイクルを通じて必要な作業項目、役割等を包括的に規定した共通の枠組み」です。そのうちテクニカルプロセスの構成を、一般に上流・下流と呼ばれる区分とあわせて整理しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">共通フレーム2013のプロセス</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">主な内容</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">一般的な呼び方</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">企画プロセス</td><td className="border border-slate-200 px-3 py-2">システム化構想の立案、システム化計画の立案</td><td className="border border-slate-200 px-3 py-2">上流工程</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">要件定義プロセス</td><td className="border border-slate-200 px-3 py-2">利害関係者の要件の定義</td><td className="border border-slate-200 px-3 py-2">上流工程</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">システム開発プロセス</td><td className="border border-slate-200 px-3 py-2">システム要件定義、システム方式設計、実装、システム結合、システム適格性確認テスト、導入、受入れ支援</td><td className="border border-slate-200 px-3 py-2">前半（要件定義・方式設計）は上流、後半は下流と呼ばれることが多い</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">ソフトウェア実装プロセス</td><td className="border border-slate-200 px-3 py-2">ソフトウェア要件定義、方式設計、詳細設計、構築、結合、適格性確認テスト</td><td className="border border-slate-200 px-3 py-2">主に下流工程</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">保守プロセス／運用・サービスプロセス</td><td className="border border-slate-200 px-3 py-2">保守、運用、廃棄、サービスマネジメント</td><td className="border border-slate-200 px-3 py-2">運用・保守</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：IPA「共通フレーム2013」第3部（プロセス体系）。「一般的な呼び方」の列は、共通フレームの規定ではなく当サイトによる整理です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            共通フレーム2013は、企画プロセスを「要件定義プロセスや開発プロセスに先立ち実施することを想定している」とし、要件定義プロセスを「システム開発プロジェクトを開始する前の作業」と位置づけています。上流工程は、開発が始まる前の「決める」段階を中心とした仕事といえます。
          </p>
        </section>

        <section id="ratio" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">工程別の工数と工期の比率（IPA白書）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            IPA「ソフトウェア開発データ白書2018-2019」の新規開発プロジェクトについて、工程ごとの工数（作業量）と工期（月数）の比率の中央値を並べました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">工程</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">工数比率（中央値）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">工期比率（中央値）</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">母数</th>
                </tr>
              </thead>
              <tbody>
                {ratioRows.map((r) => (
                  <tr key={r.phase}>
                    <td className="border border-slate-200 px-3 py-2">{r.phase}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.effort}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.period}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：IPA「ソフトウェア開発データ白書2018-2019」図表7-1-3・7-1-5（工期）、7-1-16・7-1-18（工数）。要件定義は要件定義を含む6工程に対する比率、ほかは基本設計〜総合テストの5工程に対する比率です。中央値は工程ごとに求めた値のため、合計は100％になりません。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            工期の比率から工数の比率を引くと、要件定義は＋6.6ポイント、基本設計は＋4.3ポイントで、作業量に比べて期間が長くかかる傾向が見られます。製作は−9.3ポイントで、短い期間に作業が集中しています（いずれも当サイト算出）。上流工程では、関係者との合意形成や確認の待ち時間が期間を延ばす要因になると考えられ、技術力に加えて調整の力が求められる工程です。
          </p>
        </section>

        <section id="requirement" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">要件定義は誰の責任か</h2>
          <p className="text-slate-600 leading-relaxed">
            IPAの「ユーザのための要件定義ガイド 第2版」（2019年）は、「システムの要件を定義する責任は、構築されたシステムを利用してビジネスに貢献する役目を負うユーザにあると言われています」とし、「システム開発の遅延の過半は要件定義の失敗にあると言われる」と指摘しています。そのうえで、ITベンダやシステム部門が中心になって要件定義を進めるスタイルから、業務部門のユーザが主体的に関与するスタイルへの変革が必要だとしています。開発会社のSEにとっての上流工程は、発注者の業務を理解し、要件を言葉にする支援を行う仕事でもあります。
          </p>
        </section>

        <section id="wage" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">上流を担う職種の賃金</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            総務省の日本標準職業分類は、システムコンサルタントを「顧客の業務内容を分析し、問題に合わせた情報システムを策定し、提言を行なう仕事」、システム設計者を「必要なシステム全体の構成を企画する仕事」と定義しています。令和7年賃金構造基本統計調査（産業計・企業規模10人以上・男女計）の値は次のとおりです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">職種</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">平均年齢</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">所定内給与額</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">年収目安</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">システムコンサルタント・設計者</td><td className="border border-slate-200 px-3 py-2 text-right">38.3歳</td><td className="border border-slate-200 px-3 py-2 text-right">50.68万円</td><td className="border border-slate-200 px-3 py-2 text-right">約889万円</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">ソフトウェア作成者</td><td className="border border-slate-200 px-3 py-2 text-right">37.1歳</td><td className="border border-slate-200 px-3 py-2 text-right">35.68万円</td><td className="border border-slate-200 px-3 py-2 text-right">約578万円</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：厚生労働省「令和7年賃金構造基本統計調査」（職種）第1表（e-Stat）。年収目安は「きまって支給する現金給与額×12＋年間賞与その他特別給与額」で当サイトが算出した概算です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            平均年齢の差は1.2歳ですが、残業代を含まない所定内給与額でも月15万円の差があります（当サイト算出）。統計は職種全体の平均で、上流工程の経験だけで年収が決まるわけではありませんが、担う工程が賃金の差と結びついていることがうかがえます。
          </p>
        </section>

        <section id="career" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">上流工程の経験を積むには</h2>
          <p className="text-slate-600 leading-relaxed">
            IPAのシステムアーキテクト試験は、対象者像を「ITストラテジストによる提案を受けて、情報システムを利用したシステムの開発に必要となる要件を定義し、それを実現するためのアーキテクチャを設計し、開発を主導する者」としています。現職で設計書のレビューや顧客との打ち合わせへの同席から関わり、担った範囲を職務経歴書に具体的に書くことが、上流工程への移行の第一歩になります。試験の詳細は<Link href="/cert/system-architect/" className="text-blue-600 hover:underline">システムアーキテクト試験は転職に効くか</Link>、SEの仕事全体は<Link href="/knowledge/se/" className="text-blue-600 hover:underline">SEの仕事内容</Link>、コンサルタントへの移行は<Link href="/career/engineer-to-consultant/" className="text-blue-600 hover:underline">エンジニアからITコンサルタントへの転職</Link>でご説明しています。
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
            <li>IPA「共通フレーム2013」：https://www.ipa.go.jp/publish/secbooks20130304.html</li>
            <li>IPA「共通フレーム2013」第3部 抜粋：https://www.ipa.go.jp/publish/qv6pgp000000107j-att/000062659.pdf</li>
            <li>IPA「ソフトウェア開発データ白書2018-2019」：https://www.ipa.go.jp/archive/publish/wp-sd/qv6pgp0000000vv2-att/000069381.pdf</li>
            <li>IPA「ユーザのための要件定義ガイド 第2版」：https://www.ipa.go.jp/archive/digital/iot-en-ci/jyouryuu/youkenteigi20190912.html</li>
            <li>総務省「日本標準職業分類（平成21年12月統計基準設定）分類項目名、説明及び内容例示」：https://www.soumu.go.jp/main_content/000661290.pdf</li>
            <li>厚生労働省「令和7年賃金構造基本統計調査」（職種）第1表：https://www.e-stat.go.jp/stat-search/files?stat_infid=000040421116</li>
            <li>IPA「システムアーキテクト試験」：https://www.ipa.go.jp/shiken/kubun/sa.html</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "SE（システムエンジニア）の仕事内容", href: "/knowledge/se/" },
              { name: "システムアーキテクト試験は転職に効くか", href: "/cert/system-architect/" },
              { name: "ITコンサルタントとは", href: "/knowledge/it-consultant/" },
              { name: "PMOとは", href: "/knowledge/pmo/" },
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
