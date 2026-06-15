import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

const TITLE = "スキル・言語別 エンジニア転職ガイド一覧【2026年】年収・資格・求人の攻め方";
const DESCRIPTION =
  "プログラミング言語・クラウド・データ/AIなど領域別に、エンジニア転職ガイドをまとめた一覧です。各スキルの公表年収データ・資格・求人の探し方・30〜40代の参入ルートを個別ページで解説しています。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

export default function SkillIndexPage() {
  return (
    <>
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/skill/" datePublished="2026-06-13" dateModified="2026-06-13" />
      <Breadcrumb items={[{ name: "スキル別転職ガイド一覧" }]} />
      <main className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">スキル・言語別 エンジニア転職ガイド一覧</h1>
        <p className="text-slate-600 mb-8 leading-relaxed">
          言語・クラウド・データ/AI・データベース・専門領域ごとに、エンジニア転職ガイドを整理しました。各ページでは公表年収データ・関連資格・求人の探し方・経験年数別の攻め方を、30〜40代のミドル層向けに解説しています。気になるスキルから選んでください。
        </p>
        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-3">プログラミング言語</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <Link key="java" href="/skill/java/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">Java</Link>
              <Link key="python" href="/skill/python/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">Python</Link>
              <Link key="go" href="/skill/go/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">Go言語</Link>
              <Link key="ruby" href="/skill/ruby/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">Ruby</Link>
              <Link key="php" href="/skill/php/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">PHP</Link>
              <Link key="cpp" href="/skill/cpp/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">C++</Link>
              <Link key="csharp" href="/skill/csharp/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">C#/.NET</Link>
              <Link key="kotlin" href="/skill/kotlin/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">Kotlin</Link>
              <Link key="swift" href="/skill/swift/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">App Storeにアプリを公開する</Link>
              <Link key="rust" href="/skill/rust/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">Rust</Link>
              <Link key="scala" href="/skill/scala/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">Scala</Link>
              <Link key="dart" href="/skill/dart/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">Dart</Link>
              <Link key="typescript" href="/skill/typescript/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">フルスタック</Link>
              <Link key="sql" href="/skill/sql/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">データベース</Link>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-3">フロントエンド</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <Link key="react" href="/skill/react/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">フロントエンドスペシャリスト路線</Link>
              <Link key="vue" href="/skill/vue/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">Vue.js</Link>
              <Link key="angular" href="/skill/angular/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">Angular</Link>
              <Link key="nextjs" href="/skill/nextjs/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">Next.js</Link>
              <Link key="nuxt" href="/skill/nuxt/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">Nuxt</Link>
              <Link key="svelte" href="/skill/svelte/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">Svelte</Link>
              <Link key="frontend" href="/skill/frontend/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">フロントエンドアーキテクト</Link>
              <Link key="figma" href="/skill/figma/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">Figma</Link>
              <Link key="graphql" href="/skill/graphql/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">GraphQL</Link>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-3">バックエンド/フレームワーク</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <Link key="nodejs" href="/skill/nodejs/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">Node.js</Link>
              <Link key="django" href="/skill/django/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">Django</Link>
              <Link key="rails" href="/skill/rails/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">Ruby on Rails</Link>
              <Link key="laravel" href="/skill/laravel/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">Laravel</Link>
              <Link key="spring" href="/skill/spring/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">Spring（Java）</Link>
              <Link key="unity" href="/skill/unity/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">Unity</Link>
              <Link key="flutter" href="/skill/flutter/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">FlutterアプリをApp Store/Google Playに公開する</Link>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-3">クラウド/インフラ</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <Link key="aws" href="/skill/aws/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">AWS</Link>
              <Link key="azure" href="/skill/azure/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">Azure</Link>
              <Link key="gcp" href="/skill/gcp/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">GCP</Link>
              <Link key="docker" href="/skill/docker/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">Docker</Link>
              <Link key="kubernetes" href="/skill/kubernetes/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">Kubernetes</Link>
              <Link key="terraform" href="/skill/terraform/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">Terraform/IaC</Link>
              <Link key="linux" href="/skill/linux/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">Linux</Link>
              <Link key="network" href="/skill/network/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">ネットワーク</Link>
              <Link key="infrastructure" href="/skill/infrastructure/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">インフラ</Link>
              <Link key="ci-cd" href="/skill/ci-cd/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">CI/CD</Link>
              <Link key="devops" href="/skill/devops/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">DevOps</Link>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-3">データ/AI</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <Link key="ai-ml" href="/skill/ai-ml/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">AI・機械学習</Link>
              <Link key="generative-ai" href="/skill/generative-ai/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">生成AI</Link>
              <Link key="data-analyst" href="/skill/data-analyst/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">データアナリスト</Link>
              <Link key="data-scientist" href="/skill/data-scientist/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">データサイエンティスト転職の攻め方</Link>
              <Link key="bigquery" href="/skill/bigquery/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">BigQuery</Link>
              <Link key="spark" href="/skill/spark/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">Apache Spark</Link>
              <Link key="kafka" href="/skill/kafka/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">Apache Kafka</Link>
              <Link key="tableau" href="/skill/tableau/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">Tableau</Link>
              <Link key="powerbi" href="/skill/powerbi/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">Power BI</Link>
              <Link key="elasticsearch" href="/skill/elasticsearch/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">Elasticsearch</Link>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-3">データベース</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <Link key="mysql" href="/skill/mysql/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">MySQL</Link>
              <Link key="postgresql" href="/skill/postgresql/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">PostgreSQL</Link>
              <Link key="mongodb" href="/skill/mongodb/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">MongoDB</Link>
              <Link key="redis" href="/skill/redis/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">Redis</Link>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-3">専門領域</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <Link key="security" href="/skill/security/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">セキュリティ</Link>
              <Link key="embedded" href="/skill/embedded/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">組込み</Link>
              <Link key="salesforce" href="/skill/salesforce/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">salesforce</Link>
              <Link key="sap" href="/skill/sap/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">SAP</Link>
              <Link key="qa" href="/skill/qa/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">QA</Link>
              <Link key="pm" href="/skill/pm/" className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">PM</Link>
          </div>
        </section>

        <div className="rounded-xl bg-slate-50 border border-slate-200 p-5 mt-6">
          <h2 className="font-bold text-slate-900 mb-2">あわせて読みたい</h2>
          <ul className="space-y-1 text-sm">
            <li><Link href="/salary/skill-ranking/" className="text-blue-700 hover:underline">プログラミング言語別の平均年収ランキング【出典付き】</Link></li>
            <li><Link href="/salary/company-ranking/" className="text-blue-700 hover:underline">IT企業の平均年収ランキング43社【有報準拠】</Link></li>
            <li><Link href="/salary/" className="text-blue-700 hover:underline">エンジニアが年収を上げる転職｜ITSSレベル×年収の地図</Link></li>
            <li><Link href="/company/" className="text-blue-700 hover:underline">企業別エンジニア転職ガイド一覧</Link></li>
          </ul>
        </div>
      </main>
    </>
  );
}
