import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/skill/scala/" },
  title: "Scalaエンジニアの転職ガイド｜年収・求人・将来性【2026年】",
  description:
    "Scalaエンジニアの転職市場を出典付きで解説。求人ボックス集計で言語別年収トップ級のScalaの市場価値、関数型・データ基盤での需要、Javaからの参入ルート、30代・40代の戦い方をミドルエンジニア向けに整理します。",
};

const toc = [
  { id: "conclusion", label: "1. 結論：Scalaエンジニアの転職市場の攻め方" },
  { id: "market", label: "2. Scalaの市場・年収データ（出典付き）" },
  { id: "level", label: "3. 求められる経験レベルと求人要件の傾向" },
  { id: "career", label: "4. Scalaエンジニアのキャリアパス" },
  { id: "find", label: "5. 求人の探し方・強いエージェント" },
  { id: "entry", label: "6. Javaなどから Scalaに参入するルート" },
  { id: "age", label: "7. 30代・40代エンジニアの視点" },
  { id: "learn", label: "8. スキルアップ・学習戦略" },
  { id: "faq", label: "9. よくある質問" },
];

const faqs = [
  {
    q: "Scalaエンジニアの平均年収はどのくらいですか？",
    a: "求人ボックス「給料ナビ」系の言語別集計（求人ボックスジャーナル 2025年1月公表）では、調査対象20言語のうちScalaが平均約1,101万円で最も高い水準と報告されています。これは掲載求人からの独自集計値で、個人の実支給額ではありません。また、paiza「プログラミング言語に関する調査（2024年版）」では提示年収でScalaが3位（約680万円）に入っていました。媒体により定義が異なるため、年代別ではレバテック公表の正社員SE平均年収（30代約499万円・40代約618万円／2025年）も参考になります。",
  },
  {
    q: "Scalaはなぜ年収が高いと言われるのですか？",
    a: "Scalaは関数型とオブジェクト指向を併せ持つJVM言語で、Sparkなどのビッグデータ基盤や金融系のミッションクリティカルな領域で採用されます。扱えるエンジニアの母数が少ない一方、データ基盤・大規模分散処理という付加価値の高い領域で使われるため、求人提示額が高めに出やすいのが特徴です。求人数自体は多くないため、希少性を年収に変える戦い方が向いています。",
  },
  {
    q: "JavaからScalaへ転向するのは難しいですか？",
    a: "ScalaはJVM上で動作しJavaの資産を活用できるため、Javaの実務経験はそのまま土台になります。ただしimmutableなデータ設計、高階関数、パターンマッチ、型クラスなど関数型の発想に慣れるには実プロジェクトでの経験が必要です。まずはJavaプロジェクトの一部をScalaで書く、個人でSpark処理を組むなど、関数型スタイルを手に馴染ませると評価につながります。",
  },
  {
    q: "Scalaの求人はどんな企業に多いですか？",
    a: "大規模データを扱うWeb系・広告・フィンテック企業、Sparkを使うデータ基盤・データプラットフォーム部門、トレーディングや決済など金融系のバックエンドに多く見られます。求人の絶対数は他言語より少ないため、Scalaを採用している企業に的を絞り、データ基盤の文脈で探すのが効率的です。具体的な社名や求人数は時期で変動するため、エージェントで最新の保有求人を確認してください。",
  },
  {
    q: "Scala未経験でも転職は可能ですか？",
    a: "Java・Kotlinなど静的型付け言語の実務経験があれば、Scala未経験でもポテンシャル採用の対象になり得ます。GitHubにScalaで書いたAPIやSparkジョブのサンプルをテストとともに公開しておくと、関数型の理解と学習意欲を示せます。ただし「Scala経験3年以上」を必須とする即戦力求人もあるため、入口の幅は求人により差があります。",
  },
  {
    q: "Scalaエンジニアにおすすめの転職エージェントは？",
    a: "IT・Web特化で高年収求人比率が高いレバテックキャリア、ハイクラス・スカウト型でデータ基盤アーキテクト級のScala案件に出会いやすいビズリーチ、Web系・データ系スタートアップの提案に強いGeeklyの併用が選択肢です。Scalaは求人母数が限られるため、複数登録して保有求人を横断的に比較するのが現実的です。",
  },
  {
    q: "Scalaは将来性がありますか？",
    a: "Scala 3でのモダン化が進み、データエンジニアリングやストリーム処理の領域で定着しています。一方、Web開発の新規採用ではKotlinやGoが選ばれる場面も増えています。Scala単体に固執せず「Scala＋Spark／データ基盤」「Scala＋金融ドメイン」の掛け合わせで価値を高めるのが、ミドル層にとって現実的な将来戦略です。",
  },
];

export default function ScalaSkillPage() {
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
      <ArticleJsonLd
        title="Scalaエンジニアの転職ガイド｜年収・求人・将来性【2026年】"
        description="Scalaエンジニアの転職市場を出典付きで解説。求人ボックス集計で言語別年収トップ級のScalaの市場価値、関数型・データ基盤での需要、Javaからの参入ルート、30代・40代の戦い方をミドルエンジニア向けに整理します。"
        url="/skill/scala/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Scalaエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Scalaエンジニアの転職ガイド｜年収・求人・将来性【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | Scalaエンジニアの転職市場をミドル層向けに分析
        </p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            Scalaは関数型とオブジェクト指向を併せ持つJVM言語で、Apache Sparkを中心としたビッグデータ基盤や、金融系のミッションクリティカルなバックエンドで採用されています。求人の絶対数は多くないものの、扱えるエンジニアが少ない希少スキルとして、公表データ上では言語別年収のトップ級に位置します。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、求人数では計れないScalaエンジニア転職の「攻め方」を、<strong>公表年収データ・求められる経験レベル・求人の探し方・Javaなどからの参入ルート</strong>に分けて、30代・40代の視点を交えて整理します。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "求人ボックスジャーナル（2025年1月公表の言語別平均年収）",
            "paiza「プログラミング言語に関する調査（2024年版）」",
            "レバテック公表の年代別平均年収（2025年）",
          ]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-sm text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：Scalaエンジニアの転職市場の攻め方</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>Scalaは「求人数は少ないが年収水準は高い」希少スキル型の言語です。</strong>数で勝負するのではなく、Scalaを採用しているデータ基盤・金融系の企業に的を絞り、希少性を年収に変える戦い方が向いています。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・求人ボックス系の言語別集計（2025年1月公表）で<strong>平均約1,101万円・調査20言語中トップ</strong>。一方で求人母数は限られる</li>
              <li>・Java／Kotlinなど静的型付け言語の経験があれば、Scala未経験でもポテンシャル採用の余地がある</li>
              <li>・Scalaは<strong>Spark・データ基盤の知識との掛け合わせ</strong>で市場価値が跳ね上がる（データプラットフォーム領域）</li>
            </ul>
          </div>
        </section>

        <section id="market" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Scalaの市場・年収データ（出典付き）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            言語別の年収は媒体によって定義が異なります。ここでは出典と時点を明示できる公表データのみを使用します。Scalaは求人母数が小さく、集計値が高めに振れやすい点に注意してください。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Scalaの言語別平均年収", "平均約1,101万円・調査20言語中トップ", "求人ボックスジャーナル（2025年1月公表・掲載求人からの独自集計）"],
                  ["Scalaの提示年収（言語別）", "3位 約680万円", "paiza 2024年版調査（求人票の提示年収集計）"],
                  ["正社員SEの平均年収・30代", "約499万円", "レバテック公表（2025年）"],
                  ["正社員SEの平均年収・40代", "約618万円", "レバテック公表（2025年）"],
                  ["IT人材不足の試算", "2030年に最大約79万人不足", "経産省 IT人材需給調査（2019年公表の試算）"],
                ].map(([label, value, src], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">
                      {label}
                    </th>
                    <td className="px-4 py-3 text-slate-700 border-b border-slate-200 align-top">
                      <span className="font-medium">{value}</span>
                      <br />
                      <span className="text-xs text-slate-500">{src}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            ※ 求人ボックスの値は掲載求人からの独自集計で、母数の小さい言語は平均が高く振れやすいため、Scala専任者の実年収を保証する値ではありません。paizaの提示年収も求人票の記載額の集計です。レバテックの年代別平均はSE全般の値でScala特化ではありません。具体的なレンジはエージェントで最新の保有求人を確認してください。
          </p>
        </section>

        <section id="level" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベルと求人要件の傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Scala求人は「Scala経験そのもの」を必須にするものと、「JVM言語の経験＋Scalaは入社後キャッチアップ可」とするものに分かれます。求人票によく登場する要件を傾向としてまとめると次の通りです。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { tier: "入口（ポテンシャル）", req: "Java／Kotlin等JVM言語のバックエンド実務2〜3年／関数型の基礎／ScalaはGitHub等での自習レベル", note: "Scala未経験OK求人がここに該当" },
              { tier: "即戦力（ミドル）", req: "ScalaでのAPI・バッチ・データ処理の実務／immutable設計／Spark等の経験", note: "求人の中心ゾーン" },
              { tier: "ハイクラス", req: "Spark基盤・データプラットフォームの設計／テックリード／技術選定", note: "年収800万円以上が狙える層" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2 text-sm">{item.tier}</h3>
                <p className="text-xs text-slate-600 mb-2 leading-relaxed">{item.req}</p>
                <p className="text-xs text-petrol">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="career" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Scalaエンジニアのキャリアパス</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Scalaはバックエンドからデータ基盤・データプラットフォーム領域へ橋渡ししやすい言語です。掛け合わせるスキルによって到達レンジが変わります。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "バックエンドエンジニア", note: "ScalaでのAPI・バッチ開発。Web系・金融系で需要" },
              { role: "データエンジニア／基盤", note: "Spark＋Scalaで大規模データ処理基盤を構築。最も希少性が高いゾーン" },
              { role: "テックリード／アーキテクト", note: "Scala基盤の設計＋技術選定＋チームリード" },
              { role: "フリーランス（Scala案件）", note: "データ基盤・金融系案件。希少性から単価が高い傾向" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 mb-1">{item.role}</h3>
                <p className="text-xs text-slate-500">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">
            ※ 各ポジションの具体的な年収レンジは企業・時期で変動するため断定を避けています。レンジは面談時にエージェントへ確認してください。
          </p>
        </section>

        <section id="find" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の探し方・強いエージェント</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Scalaは求人母数が限られるため、特定の1社に絞るより複数のチャネルを横断するのが効率的です。タイプ別に向くサービスを整理します。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア（IT・Web特化）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT・Web特化で高年収求人の比率が高く、技術に踏み込んで話せるアドバイザーが在籍。Scalaのような専門求人の提案に向きます。
              </p>
              <Link href="/review/levtech/" className="text-sm text-petrol hover:underline">レバテックキャリアの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ（ハイクラス・スカウト型）</h3>
              <p className="text-sm text-slate-600 mb-2">
                ハイクラス・スカウト型で、データ基盤アーキテクトやテックリード級のScala案件・スカウトに出会いやすいのが特徴です。
              </p>
              <Link href="/review/bizreach-it/" className="text-sm text-petrol hover:underline">ビズリーチの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Geekly（Web系・スタートアップに強い）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT・Web・ゲーム業界専門で提案スピードが強み。Scalaを採用するWeb系・データ系スタートアップの求人を探したい場合の選択肢になります。
              </p>
              <Link href="/review/geekly/" className="text-sm text-petrol hover:underline">Geeklyの詳細レビュー →</Link>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            エージェント各社の比較は<Link href="/compare/agents/" className="text-petrol hover:underline">転職エージェント比較</Link>も参照してください。
          </p>
        </section>

        <section id="entry" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Javaなどから Scalaに参入するルート</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "JVM言語の実務経験を土台にする", desc: "Java・Kotlinなど静的型付けJVM言語のバックエンド経験があれば、それを土台に「Scalaは未経験だがキャッチアップ可」とアピールできます。完全未経験よりポテンシャル採用の対象になりやすくなります。" },
              { num: "2", title: "関数型・Sparkの実績をGitHubに公開する", desc: "Scalaで書いたAPIサーバーや、Sparkを使った集計バッチを公開します。immutableなデータ設計、パターンマッチ、テストの充実度まで見られるため、関数型の理解が伝わる状態にしましょう。" },
              { num: "3", title: "データ基盤を持つ企業のポテンシャル枠を狙う", desc: "Sparkでデータ基盤を運用する企業はScala経験者の母数不足から、入社後キャッチアップ前提の採用を行うことがあります。エージェントに「Scalaは学習中、データ処理に興味がある」と伝え、そうした求人を紹介してもらうのが近道です。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="age" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>
              <strong>希少スキルは年齢の不利を相殺しやすい。</strong>Scalaのように扱える人が少ない言語では、「若くて安い人材」ではなく「すぐ戦力になる希少人材」が求められます。30代・40代でJavaなどの設計経験を積んでいるなら、その経験こそが武器になります。
            </p>
            <p>
              <strong>掛け算で差別化する。</strong>Scala単体より「Scala＋データ基盤」「Scala＋金融・広告などのドメイン知識」の掛け合わせが、ミドル層の強みです。年齢を重ねた分の業務知識を、Scalaという実装手段と結びつけて語れると説得力が増します。
            </p>
            <p>
              <strong>マネジメント経験も資産になる。</strong>テックリードやアーキテクトのScala求人では、コードを書く力に加えてチームの技術選定・育成の経験が評価されます。40代でPL／PM経験があるなら、それを技術力とセットで提示しましょう。
            </p>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            年代別の戦略は<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>・<Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職</Link>も参考にしてください。
          </p>
        </section>

        <section id="learn" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルアップ・学習戦略</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>
              <strong>① 関数型の基礎を固める。</strong>immutableなデータ、高階関数、パターンマッチ、Option／Eitherによるエラー表現など、Scalaの核心は関数型の発想です。小さな題材から関数型スタイルで書く習慣をつけると、設計力として面接で語れます。
            </p>
            <p>
              <strong>② Sparkで実データを扱う。</strong>Scalaの強みが最も出るのは大規模データ処理です。公開データセットを使ったSpark集計バッチを作ると、データエンジニアリングの実績として希少性の高い領域に踏み込めます。
            </p>
            <p>
              <strong>③ Javaの資産を活かす。</strong>ScalaはJVM上でJavaライブラリを利用できます。これまでのJava経験を捨てるのではなく、Scalaの上に積み増す形で学ぶと習得が速く、移行のリスクも下げられます。
            </p>
            <p>
              学習と転職活動の進め方は<Link href="/knowledge/continuous-learning/" className="text-petrol hover:underline">継続的な学習の習慣化</Link>・<Link href="/knowledge/portfolio/" className="text-petrol hover:underline">ポートフォリオの作り方</Link>もあわせてご覧ください。
            </p>
          </div>
        </section>

        <section id="faq" className="mb-10">
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

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">Scalaのスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            Scalaは求人母数が限られるからこそ、複数のIT特化型エージェントで保有求人を横断比較するのが近道です。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Javaエンジニアの転職ガイド", href: "/skill/java/" },
              { name: "Goエンジニアの転職ガイド", href: "/skill/go/" },
              { name: "Pythonエンジニアの転職ガイド", href: "/skill/python/" },
              { name: "データサイエンティストの転職ガイド", href: "/skill/data-scientist/" },
              { name: "スキル別転職ガイド一覧", href: "/skill/" },
              { name: "ミドルエンジニア転職ラボTOP", href: "/" },
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
