import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "スキル別エンジニア転職ガイド一覧【52スキル】言語・職種別",
  description:
    "プログラミング言語・クラウド・職種別に全52スキルのエンジニア転職ガイドを分類。フロント・バックエンド・インフラ・データAI・業務システム別に、30代40代に合った転職戦略の入口をまとめました。",
};

const skillCategories = [
  {
    category: "フロントエンド",
    intro: "UI/UX・モダンJSが軸。Web系自社開発やSaaSで需要が高く、設計力で差がつく領域です。",
    items: [
      { name: "React", href: "/skill/react/", desc: "Web系自社開発の主力。求人数が多く、設計経験があればミドルでも有利。" },
      { name: "TypeScript", href: "/skill/typescript/", desc: "フロント・バックエンド双方で標準化が進む。型設計の経験は高評価。" },
      { name: "フロントエンドエンジニア", href: "/skill/frontend/", desc: "React/Next.js需要が中心。UI/UX理解が差別化のポイント。" },
      { name: "Flutter", href: "/skill/flutter/", desc: "クロスプラットフォームのモバイル開発。スタートアップで採用が拡大。" },
      { name: "Swift（iOS）", href: "/skill/swift/", desc: "iOSネイティブの定番。事業会社のアプリチームで安定需要。" },
      { name: "Kotlin（Android）", href: "/skill/kotlin/", desc: "Androidの主流言語かつサーバーサイドでも採用増。応用範囲が広い。" },
      { name: "Next.js", href: "/skill/nextjs/", desc: "Reactベースのモダンフロント。SSR/SSGで自社開発の標準に。" },
      { name: "Nuxt", href: "/skill/nuxt/", desc: "Vueベースのモダンフロント。国内Vue現場で需要あり。" },
      { name: "Angular", href: "/skill/angular/", desc: "Google製・TypeScript前提のエンタープライズSPA向け。" },
      { name: "Svelte", href: "/skill/svelte/", desc: "コンパイル型の新興フロント。加点スキル・技術選定力の証明に。" },
      { name: "Dart（Flutter）", href: "/skill/dart/", desc: "Flutterによるクロスプラットフォームモバイル開発の記述言語。" },
    ],
  },
  {
    category: "バックエンド",
    intro: "サーバーサイド・API開発の中核。言語ごとに強い業界が分かれるため、得意領域の見極めが重要です。",
    items: [
      { name: "Java", href: "/skill/java/", desc: "安定した需要と幅広い求人。業務系から大規模システムまで対応。" },
      { name: "Python", href: "/skill/python/", desc: "AI/データ分析で需要急増。バックエンド兼データ領域への展開も。" },
      { name: "Go", href: "/skill/go/", desc: "マイクロサービス需要で年収トップクラス。Web系で評価が高い。" },
      { name: "Ruby", href: "/skill/ruby/", desc: "Rails採用のWeb系・SaaSで根強い需要。スピード開発が強み。" },
      { name: "PHP", href: "/skill/php/", desc: "Web制作・自社サービスで求人が豊富。参入しやすく案件量が多い。" },
      { name: "C#", href: "/skill/csharp/", desc: ".NET業務システム・ゲーム双方で活躍。Microsoft系企業と相性良。" },
      { name: "Rust", href: "/skill/rust/", desc: "高性能・低レイヤー領域で注目。希少性が高く年収レンジも上振れ。" },
      { name: "Scala", href: "/skill/scala/", desc: "関数型・データ基盤（Spark）。求人少だが年収トップ級の希少スキル。" },
      { name: "C++", href: "/skill/cpp/", desc: "組込・ゲーム・低レイヤ。速度とハード制御が要る領域の定番。" },
      { name: "Ruby on Rails", href: "/skill/rails/", desc: "MVP高速開発。スタートアップ・自社開発Webの主力フレームワーク。" },
      { name: "Django", href: "/skill/django/", desc: "PythonのフルスタックWeb。データ・AI連携に強い。" },
      { name: "Spring（Java）", href: "/skill/spring/", desc: "金融・エンタープライズの定番。求人母数が大きく安定需要。" },
      { name: "Laravel", href: "/skill/laravel/", desc: "PHP主流のWebフレームワーク。求人母数が多く案件が安定。" },
      { name: "GraphQL", href: "/skill/graphql/", desc: "API設計の付加スキル。RESTとの使い分けと設計力で市場価値。" },
    ],
  },
  {
    category: "インフラ・クラウド",
    intro: "クラウド移行とSRE需要で市場拡大中。資格と運用実績が年収アップに直結しやすい領域です。",
    items: [
      { name: "インフラエンジニア", href: "/skill/infrastructure/", desc: "クラウド・SRE需要拡大。AWS/GCP資格で年収アップを狙える。" },
      { name: "AWS", href: "/skill/aws/", desc: "クラウド求人で最多シェア。資格＋構築実績の組み合わせが強い。" },
      { name: "Kubernetes", href: "/skill/kubernetes/", desc: "コンテナ基盤の中核スキル。SRE・プラットフォーム職で高評価。" },
      { name: "Terraform（IaC）", href: "/skill/terraform/", desc: "インフラのコード化需要が急増。クラウド運用職の必須スキルに。" },
      { name: "ネットワーク", href: "/skill/network/", desc: "オンプレ＋クラウド両対応の知見は希少。基盤系で安定した需要。" },
      { name: "セキュリティ", href: "/skill/security/", desc: "人材不足が深刻な領域。経験者は年収・選択肢ともに有利。" },
      { name: "Docker", href: "/skill/docker/", desc: "コンテナの実務スキル。DevOps/SRE・クラウド基盤として評価。" },
      { name: "CI/CD", href: "/skill/ci-cd/", desc: "継続的インテグレーション/デリバリー。DevOps/SREの中核。" },
    ],
  },
  {
    category: "データベース・データ基盤",
    intro: "DB設計運用とデータ基盤の領域。単体スキルというより実務とセットで評価され、データ量の増大で需要が伸びています。",
    items: [
      { name: "PostgreSQL", href: "/skill/postgresql/", desc: "OSS RDBの設計・運用。DB設計とバックエンド基盤で評価。" },
      { name: "MySQL", href: "/skill/mysql/", desc: "Web定番RDBの設計・運用。求人母数の大きいDB系スキル。" },
      { name: "MongoDB", href: "/skill/mongodb/", desc: "NoSQL（ドキュメント指向）の設計。RDBとの使い分けが鍵。" },
      { name: "Redis", href: "/skill/redis/", desc: "インメモリKVS/キャッシュ設計。性能設計・高負荷基盤で需要。" },
      { name: "Apache Kafka", href: "/skill/kafka/", desc: "分散ストリーミング基盤。大規模データ基盤の希少領域。" },
      { name: "Elasticsearch", href: "/skill/elasticsearch/", desc: "検索・ログ分析基盤の構築運用。データエンジニア/SRE文脈。" },
      { name: "Apache Spark", href: "/skill/spark/", desc: "大規模分散処理・ETL。データエンジニア職の中核。" },
      { name: "BigQuery", href: "/skill/bigquery/", desc: "クラウドDWH。SQLが書ければデータ職の入口に立てる。" },
    ],
  },
  {
    category: "BI・デザイン",
    intro: "データ可視化とUIデザインの領域。エンジニア職と隣接し、職種（BI・データアナリスト・デザイナー）の文脈で評価されます。",
    items: [
      { name: "Tableau", href: "/skill/tableau/", desc: "BIダッシュボード。BIエンジニア/データアナリスト職で需要。" },
      { name: "Power BI", href: "/skill/powerbi/", desc: "MicrosoftのBIツール。Excel延長から入れるBI職向け。" },
      { name: "Figma", href: "/skill/figma/", desc: "UIデザインツール。エンジニアよりデザイナー寄りと正直に整理。" },
    ],
  },
  {
    category: "データ・AI",
    intro: "AI/ML投資の拡大で求人が伸びる成長領域。実務での分析・モデリング経験が問われます。",
    items: [
      { name: "データサイエンティスト", href: "/skill/data-scientist/", desc: "AI/ML領域で最注目のキャリア。未経験からの道筋も解説。" },
      { name: "AI・機械学習エンジニア", href: "/skill/ai-ml/", desc: "生成AI需要で求人増。研究寄り〜実装寄りまで幅広いポジション。" },
      { name: "SQL・データベース", href: "/skill/sql/", desc: "あらゆる職種で土台となるスキル。データ基盤職への足がかりにも。" },
    ],
  },
  {
    category: "業務システム・パッケージ",
    intro: "エンタープライズ向けの安定領域。専門知識を持つ経験者は転職市場で希少価値が高めです。",
    items: [
      { name: "SAP", href: "/skill/sap/", desc: "ERP導入需要が継続。コンサル・大手SIerで高年収が狙える。" },
      { name: "Salesforce", href: "/skill/salesforce/", desc: "認定資格が評価される領域。SaaS導入・運用で需要が安定。" },
    ],
  },
  {
    category: "その他（組込み・ゲーム・マネジメント）",
    intro: "専門分野やマネジメント志向のキャリア。技術＋ドメイン知識が武器になります。",
    items: [
      { name: "組込みエンジニア", href: "/skill/embedded/", desc: "製造業・IoTで根強い需要。ハードと近い領域で経験者が貴重。" },
      { name: "Unity（ゲーム）", href: "/skill/unity/", desc: "ゲーム・XR開発の主力エンジン。事業会社・受託双方で求人あり。" },
      { name: "プロジェクトマネージャー", href: "/skill/pm/", desc: "開発経験を持つPMは希少。マネジメント志向のキャリアの軸に。" },
    ],
  },
];

const allSkills = skillCategories.flatMap((c) => c.items);

const toc = [
  { id: "guide", label: "スキル軸で転職を考える方法" },
  ...skillCategories.map((c, i) => ({ id: `cat-${i}`, label: c.category })),
  { id: "how-to-use", label: "ガイドの使い方と次のアクション" },
];

export default function SkillIndexPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "スキル別エンジニア転職ガイド一覧",
    description:
      "言語・クラウド・職種別に全52スキルのエンジニア転職ガイドを分類した一覧ページ。",
    url: "https://middle-engineer.com/skill/",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: allSkills.length,
      itemListElement: allSkills.map((skill, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://middle-engineer.com${skill.href}`,
        name: skill.name,
      })),
    },
  };

  return (
    <>
      <ArticleJsonLd
        title="スキル別エンジニア転職ガイド一覧【52スキル】"
        description="言語・クラウド・職種別に全52スキルのエンジニア転職ガイドを分類した一覧ページ。"
        url="/skill/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          スキル別エンジニア転職ガイド一覧【52スキル】
        </h1>
        <p className="text-slate-600 leading-relaxed mb-4">
          エンジニアの転職は、持っているスキルによって戦う市場も年収レンジも大きく変わります。本ページでは、言語・クラウド・職種など全{allSkills.length}スキルを6カテゴリに分類し、それぞれのガイドへの入口をまとめました。自分の主軸スキルから読み進めることで、転職市場での立ち位置と狙うべき方向性が見えてきます。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={["厚生労働省 job tag", "doda・レバテック公表値", "各サービス公式サイト"]}
        />

        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月</p>

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-blue-600 hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ガイド: スキル軸で転職を考える方法 */}
        <section id="guide" className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            スキル軸で転職を考える方法
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「自分のスキルでどこまで通用するのか」は、ミドル層が転職前に最も気にする論点です。スキル軸でキャリアを考えるときは、次の3つの視点で整理すると判断しやすくなります。
          </p>
          <ol className="space-y-3 text-slate-600 leading-relaxed list-decimal pl-5 mb-4">
            <li>
              <span className="font-medium text-slate-700">市場の厚み</span>
              ：求人数が多い言語・スキルほど選択肢が広く、年代がネックになりにくい傾向があります。JavaやPHP、AWSなどは求人母数が大きく、ミドルでも案件にたどり着きやすい領域です。
            </li>
            <li>
              <span className="font-medium text-slate-700">希少性と単価</span>
              ：Go・Rust・セキュリティ・データ/AIのように担い手が少ない領域は、年収レンジが上振れしやすい一方、求められる経験レベルも高くなります。
            </li>
            <li>
              <span className="font-medium text-slate-700">掛け算で価値を出す</span>
              ：30代・40代は1スキルの深さだけでなく「言語×ドメイン」「開発×マネジメント」のように複数軸の掛け算で差別化するのが現実的です。たとえば「Java×金融業務」「Python×データ基盤」のように、現職の業務知識とスキルを束ねると希少性が上がります。
            </li>
          </ol>
          <p className="text-slate-600 leading-relaxed">
            まずは現在の主軸スキルのガイドで市場観を掴み、そのうえで「伸ばす方向」をデータ・AIやインフラなど成長領域へ広げるか、現職ドメインを深掘りするかを決めるのがおすすめです。各ガイドでは、求められる経験レベル・キャリアパス・求人の探し方・学習戦略まで具体的に解説しています。
          </p>
        </section>

        {/* カテゴリ別リンク */}
        {skillCategories.map((group, gi) => (
          <section key={gi} id={`cat-${gi}`} className="mb-10">
            <h2 className="text-xl font-bold text-slate-800 mb-2 pb-2 border-b border-slate-200">
              {group.category}
            </h2>
            <p className="text-sm text-slate-600 mb-4">{group.intro}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {group.items.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="block border border-slate-200 rounded-lg p-5 hover:bg-slate-50 hover:border-blue-300 transition-colors group"
                >
                  <h3 className="font-bold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* ガイドの使い方 */}
        <section id="how-to-use" className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            ガイドの使い方と次のアクション
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            各スキルガイドを読んだら、次は「自分の市場価値を具体的な求人で確かめる」段階です。スキル別の求人はIT特化型の転職エージェントが豊富に保有しており、職務経歴を伝えるだけで、自分のスキルが今いくらで評価されるのかの目安が分かります。複数社に登録して比較するのが、ミドル層が後悔しない進め方です。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <Link href="/knowledge/market-value/" className="text-blue-600 hover:underline">→ 自分の市場価値の調べ方</Link>
            <Link href="/knowledge/multiple-agents/" className="text-blue-600 hover:underline">→ エージェントは複数登録すべき？</Link>
            <Link href="/knowledge/continuous-learning/" className="text-blue-600 hover:underline">→ 働きながらのスキルアップ戦略</Link>
            <Link href="/career/" className="text-blue-600 hover:underline">→ キャリアパス別の転職ルート</Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">あなたのスキルに合った求人を探そう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントに登録すれば、あなたのスキルセットに最適な求人を無料で紹介してもらえます。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連コンテンツ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "キャリアパス別転職ガイド一覧", href: "/career/" },
              { name: "企業別エンジニア転職ガイド一覧", href: "/company/" },
              { name: "お役立ちガイド一覧", href: "/knowledge/" },
              { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors"
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
