import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "DevOpsとは｜AWSの定義・DORAの5つの指標・SREとの関係を一次情報で整理【2026年】";
const DESCRIPTION =
  "DevOps（デブオプス）とは、アプリケーションやサービスを高速に届ける組織の能力を高める、文化・実践・ツールの組み合わせです。AWSの定義、開発と運用の分断をなくす仕組み、GoogleのDORAが示すソフトウェアデリバリーの5つの指標、SREとの関係を公式資料にもとづいて整理します。";
const URL = "/knowledge/devops/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "DevOpsの定義" },
  { id: "how", label: "DevOpsの仕組み（開発と運用の分断をなくす）" },
  { id: "dora", label: "成果の測り方：DORAの5つの指標" },
  { id: "sre", label: "SREとの関係" },
  { id: "career", label: "DevOpsに関わる職種" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "DevOpsとは簡単に言うと何ですか？",
    a: "開発（Development）と運用（Operations）を分けずに、一つのチームまたは密に連携したチームでアプリケーションの開発から運用までを担い、変更を速く安全に届けるための考え方・やり方・ツールの総称です。AWSは「文化的な哲学、実践、ツールの組み合わせ」と定義しています。",
  },
  {
    q: "DevOpsの成果はどう測りますか？",
    a: "GoogleのDORA（DevOps Research and Assessment）は、変更のリードタイム、デプロイ頻度、失敗したデプロイからの復旧時間、変更失敗率、デプロイの手戻り率の5つの指標を示しています。前の3つがスループット（速さ）、後の2つが不安定さ（安定性）を表します。",
  },
  {
    q: "DevOpsでは速さと安定性はトレードオフですか？",
    a: "DORAは、速さと安定性はトレードオフではなく、多くのチームで5つの指標は相関しており、上位のチームはすべての指標で良い結果を出していると説明しています。",
  },
  {
    q: "DevOpsとSREの違いは何ですか？",
    a: "GoogleのSREの書籍は、DevOpsを「SREの中核となる原則を幅広い組織に一般化したもの」、SREを「独自の拡張を加えたDevOpsの具体的な実装」と見ることもできると説明しています。DevOpsは文化と実践の総称、SREはSLOやエラーバジェットを使う具体的な運用方法と職種、と整理すると分かりやすくなります。",
  },
  {
    q: "DevOpsエンジニアになるにはどのようなスキルが必要ですか？",
    a: "CI/CD（継続的インテグレーション・継続的デリバリー）の構築、クラウドとIaC（Infrastructure as Code）、コンテナ、監視の知識がよく求められます。年収や求人の見方は「DevOpsエンジニアの転職ガイド」でご説明しています。",
  },
];

const doraRows = [
  { group: "スループット", name: "変更のリードタイム（Change lead time）", desc: "変更がバージョン管理にコミットされてから本番環境にデプロイされるまでの時間" },
  { group: "スループット", name: "デプロイ頻度（Deployment frequency）", desc: "一定期間のデプロイ回数、またはデプロイの間隔" },
  { group: "スループット", name: "失敗したデプロイからの復旧時間（Failed deployment recovery time）", desc: "失敗して即時の対応が必要になったデプロイから復旧するまでの時間" },
  { group: "不安定さ", name: "変更失敗率（Change fail rate）", desc: "デプロイ後に即時の対応（ロールバックやホットフィックス）が必要になったデプロイの割合" },
  { group: "不安定さ", name: "デプロイの手戻り率（Deployment rework rate）", desc: "本番環境のインシデントの結果として行われた、計画外のデプロイの割合" },
];

export default function DevopsPage() {
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
          { name: "DevOpsとは" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          DevOpsとは｜AWSの定義・DORAの5つの指標・SREとの関係を一次情報で整理
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月25日 | 公式資料の確認日: 2026年11月25日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】DevOpsとは</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>DevOps（デブオプス）とは、開発（Development）と運用（Operations）の分断をなくし、アプリケーションやサービスを高速に届ける組織の能力を高める、文化・実践・ツールの組み合わせです。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・AWSは「文化的な哲学、実践、ツールの組み合わせ」と定義しています</li>
              <li>・成果は、GoogleのDORAが示す5つの指標（リードタイム・デプロイ頻度・復旧時間・変更失敗率・手戻り率）で測れます</li>
              <li>・DORAの研究では、速さと安定性はトレードオフではなく、上位のチームは5つの指標すべてで良い結果を出しています</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、AWSの解説ページとGoogleのDORA（DevOps Research and Assessment）のガイド、Googleの書籍『Site Reliability Engineering』をもとに、DevOpsの定義、仕組み、成果の測り方、SREとの関係を整理します。求人票や面接でDevOpsという言葉が出てきたときに、何を指しているかを判断する材料としてお使いください。
        </p>

        <DataNote
          surveyedAt="2026年11月25日"
          sources={["AWS「What is DevOps?」", "DORA「DORA's software delivery performance metrics」", "Google『Site Reliability Engineering』Introduction"]}
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">DevOpsの定義</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            AWSはDevOpsを「the combination of cultural philosophies, practices, and tools that increases an organization’s ability to deliver applications and services at high velocity」（アプリケーションやサービスを高速に届ける組織の能力を高める、文化的な哲学・実践・ツールの組み合わせ）と定義しています。従来のソフトウェア開発・インフラ管理のやり方よりも速いペースで製品を進化・改善し、顧客により良く応え、市場で競争できるようにすることが目的だと説明されています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            Googleの書籍『Site Reliability Engineering』によると、DevOpsという言葉は2008年の終わりごろに業界で使われ始めました。同書は、DevOpsの中核となる原則として、システムの設計・開発の各段階へのIT部門の関与、人手よりも自動化への依存、運用へのエンジニアリングの手法・ツールの適用を挙げています。
          </p>
        </section>

        <section id="how" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">DevOpsの仕組み（開発と運用の分断をなくす）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            AWSは、DevOpsモデルでは開発チームと運用チームが「サイロ化」されなくなると説明しています。二つのチームが一つに統合され、エンジニアが開発・テスト・デプロイ・運用までアプリケーションのライフサイクル全体にわたって働き、一つの機能に限らない幅広いスキルを身につける形もあります。品質保証やセキュリティのチームが開発・運用と密に連携するモデルもあります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">観点</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">開発と運用が分かれた体制</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">DevOpsの体制</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">チーム</td><td className="border border-slate-200 px-3 py-2">開発と運用が別組織で、引き継ぎで分担する</td><td className="border border-slate-200 px-3 py-2">一つのチーム、または密に連携したチームで担う</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">リリース</td><td className="border border-slate-200 px-3 py-2">変更をまとめて、頻度を抑えて出す</td><td className="border border-slate-200 px-3 py-2">小さな変更を自動化された仕組みで頻繁に出す</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">運用作業</td><td className="border border-slate-200 px-3 py-2">手順書にもとづく手作業が中心</td><td className="border border-slate-200 px-3 py-2">CI/CD・IaC・監視などで自動化する</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ AWSの説明をもとに、当サイトが二つの体制の違いを整理したものです。実際の体制は組織ごとに異なります。</p>
        </section>

        <section id="dora" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">成果の測り方：DORAの5つの指標</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            DORAは、ソフトウェアデリバリーの成果を測る指標として5つを示しています。当初の「Four Keys」（4つの指標）から、現在は5つの指標のモデルに見直されています。DORAによると、これらの指標は組織のパフォーマンスとチームメンバーのウェルビーイングを予測するものです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">区分</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">指標</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">定義（当サイト訳）</th>
                </tr>
              </thead>
              <tbody>
                {doraRows.map((r) => (
                  <tr key={r.name}>
                    <td className="border border-slate-200 px-3 py-2">{r.group}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.name}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：DORA「DORA&apos;s software delivery performance metrics」。日本語訳は当サイトによるものです。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            DORAは、これらの指標は一度に一つのアプリケーションやサービスを測るのに最も適していると説明しています。転職の面接で「デプロイ頻度」や「変更失敗率」を聞かれた場合は、担当したサービスでどの程度だったか、改善のために何をしたかを数値とあわせて説明できると、DevOpsの実務経験を伝えやすくなります。
          </p>
        </section>

        <section id="sre" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SREとの関係</h2>
          <p className="text-slate-600 leading-relaxed">
            Googleの書籍は、DevOpsを「SREの中核となる原則のいくつかを、より幅広い組織・管理体制・人員に一般化したもの」、SREを「独自の拡張を加えたDevOpsの具体的な実装」と見ることもできると説明しています。SREの定義、SLO、エラーバジェットの許容停止時間は<Link href="/knowledge/sre/" className="text-blue-600 hover:underline">SREとは</Link>で整理しています。
          </p>
        </section>

        <section id="career" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">DevOpsに関わる職種</h2>
          <p className="text-slate-600 leading-relaxed">
            求人票では「DevOpsエンジニア」「SRE」「プラットフォームエンジニア」などの名称で募集されることがあります。年収・必須スキル・SREとの違いは<Link href="/skill/devops/" className="text-blue-600 hover:underline">DevOpsエンジニアの転職ガイド</Link>、CI/CDの経験の生かし方は<Link href="/skill/ci-cd/" className="text-blue-600 hover:underline">CI/CDスキルで転職</Link>、セキュリティを組み込む職種は<Link href="/career/devsecops/" className="text-blue-600 hover:underline">DevSecOps転職ガイド</Link>でご説明しています。
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
            <li>AWS「What is DevOps?」：https://aws.amazon.com/devops/what-is-devops/</li>
            <li>DORA「DORA&apos;s software delivery performance metrics」：https://dora.dev/guides/dora-metrics-four-keys/</li>
            <li>Google『Site Reliability Engineering』Introduction：https://sre.google/sre-book/introduction/</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "DevOpsエンジニアの転職ガイド", href: "/skill/devops/" },
              { name: "SREとは", href: "/knowledge/sre/" },
              { name: "CI/CDスキルで転職", href: "/skill/ci-cd/" },
              { name: "アジャイル開発とは", href: "/knowledge/agile/" },
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
