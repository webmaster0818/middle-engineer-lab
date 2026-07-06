import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "Kotlinエンジニア転職ガイド｜年収・資格・求人の探し方";
const PAGE_DESC =
  "Kotlinエンジニアの転職を年収データ・関連資格・求人の探し方まで解説。スタンバイやフリーランスボードの公表年収、レバテック年代別データを出典付きで掲載。30代・40代の参入ルートとおすすめエージェントも紹介します。";

const toc = [
  { id: "conclusion", label: "結論：Kotlin転職の攻め方" },
  { id: "market", label: "市場・年収データ" },
  { id: "level", label: "求められる経験レベル" },
  { id: "career", label: "キャリアパスの選択肢" },
  { id: "find", label: "求人の探し方・強いエージェント" },
  { id: "entry", label: "経験浅めからの参入ルート" },
  { id: "mid", label: "30代・40代視点" },
  { id: "study", label: "スキルアップ・学習戦略" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const careerPaths = [
  {
    role: "Androidエンジニア",
    note: "Jetpack Compose＋KotlinでのモダンアプリUI開発。GoogleがKotlinをAndroid推奨言語に指定しており、需要の中心。",
    cert: "Associate Android Developer等",
  },
  {
    role: "サーバーサイドエンジニア",
    note: "Spring Boot＋KotlinでのAPI・マイクロサービス開発。Javaの冗長さを減らせる点が評価される。",
    cert: "—（実務経験重視）",
  },
  {
    role: "マルチプラットフォーム開発",
    note: "Kotlin Multiplatformで iOS/Android/Web 間のロジック共通化。新しい選択肢として注目。",
    cert: "—（ポートフォリオ重視）",
  },
  {
    role: "テックリード／アーキテクト",
    note: "Kotlin基盤のシステム設計・技術選定・チームリード。Android＋サーバーの両方を見られると強い。",
    cert: "—（設計・マネジメント経験）",
  },
];

const faqs = [
  {
    q: "Kotlinエンジニアの年収はどれくらい？",
    a: "求人検索エンジン スタンバイの集計では、Kotlinエンジニア（プログラマー）の平均年収は約577万円とされています（公表値）。フリーランス領域では、フリーランスボード調べでKotlin案件の平均年収が約938万円（2025年10月時点・公表値）と報告されており、雇用形態で大きく差が出ます。年代別の目安としては、レバテックが公表する正社員SEの平均年収（2025年）で30代約499万円・40代約618万円が参考になります。",
  },
  {
    q: "KotlinはAndroid以外でも需要がある？",
    a: "あります。サーバーサイドKotlin（Spring Boot＋Kotlin）の採用企業が増えており、Webバックエンド領域でも需要が見られます。さらにKotlin Multiplatformによるクロスプラットフォーム開発も新しい選択肢として注目されています。Android開発が中心ではあるものの、活躍領域は広がっています。",
  },
  {
    q: "JavaからKotlinへの転向は難しい？",
    a: "Java経験者にとってKotlinの習得は比較的容易とされます。KotlinはJVMベースでJavaとの互換性が高く、基礎は短期間で押さえられます。null安全、拡張関数、コルーチン（Coroutine/Flow）などKotlin固有の機能に慣れることがポイントです。Java実務経験はそのまま強みとしてアピールできます。",
  },
  {
    q: "Kotlinの求人はどんな企業に多い？",
    a: "メガベンチャー、モバイルアプリ開発会社、SaaS企業などで募集が見られます。GoogleがAndroidの推奨言語としてKotlinを採用したことで、Android開発を行う企業の多くがKotlinエンジニアを求めています。サーバーサイド採用の企業も増えています。",
  },
  {
    q: "Kotlin未経験でも転職は可能？",
    a: "Java、Scalaなど他のJVM言語の実務経験があれば、Kotlin未経験でも採用されるケースは見られます。個人でKotlinのアプリやAPIサーバーを作りGitHubに公開しておくと、選考で有利になりやすいです。Coroutine/Flowの活用度や、Jetpack Composeの習得状況も見られます。",
  },
  {
    q: "Kotlin・Android関連の資格は転職に有利？",
    a: "資格よりも実務・ポートフォリオが重視される領域ですが、学習成果の可視化には役立ちます。代表的なものに、Googleが運営していたAssociate Android Developer試験や、Android技術者認定試験などがあります（各認定の最新の実施状況は公式で確認してください）。資格単体より、動くアプリを見せられることの方が選考では効きやすい傾向です。",
  },
  {
    q: "Kotlinエンジニアにおすすめの転職エージェントは？",
    a: "モバイル案件に強いとされるレバテックキャリア、Web系スタートアップのKotlin求人を扱うGeekly、ハイクラス案件のビズリーチが候補です。Android開発経験を軸に、サーバーサイドや上位ポジションへ広げたい場合は複数登録して比較するのが基本です。",
  },
];

export const metadata: Metadata = {
  alternates: { canonical: "/skill/kotlin/" },
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

export default function KotlinSkillPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/skill/kotlin/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Kotlinエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Kotlinエンジニア転職ガイド｜年収・資格・求人の探し方
        </h1>
        <p className="text-slate-500 text-sm mb-4">
          最終更新: 2026年6月 | Kotlinスキルを軸にした転職市場の攻め方を解説
        </p>
        <p className="text-slate-600 leading-relaxed mb-2">
          KotlinはGoogleがAndroid開発の推奨言語として採用した言語で、モダンな文法・null安全性・Javaとの互換性から、モバイルアプリからサーバーサイドまで採用が広がっています。本記事は求人数を競うのではなく、「年収相場の捉え方」「関連資格の活かし方」「求人の探し方」という転職判断に必要な情報に絞って整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "スタンバイ プログラマー年収集計（公表値）",
            "フリーランスボード Kotlin案件調査（2025年10月時点・公表値）",
            "レバテック 年代別平均年収（2025年）",
            "doda 2024年度決定年収レポート（2025年5月公表）",
          ]}
        />

        {/* 目次 */}
        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-petrol-deep">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：Kotlin転職の攻め方</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              Kotlin転職は<strong>「Android開発を軸に、サーバーサイドへ領域を広げて市場価値を上げる」</strong>のが基本戦略です。Java経験者なら短期間で参入でき、両方をKotlinで扱えると希少性が増します。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① Java経験はそのまま強みになる。Coroutine/Flowなどに慣れる</li>
              <li>② Jetpack Composeの習得でモダンAndroid開発をアピールする</li>
              <li>③ サーバーサイドKotlinまで広げ、フルスタックで希少性を出す</li>
            </ul>
          </div>
        </section>

        {/* 市場・年収データ */}
        <section id="market" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">市場・年収データ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Kotlinエンジニア（プログラマー）の平均年収は、求人検索エンジン スタンバイの集計で<strong>約577万円（公表値）</strong>とされています。フリーランス領域では、フリーランスボード調べでKotlin案件の平均年収が<strong>約938万円（2025年10月時点・公表値）</strong>と報告されており、雇用形態で差が大きい点に注意が必要です。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-slate-200">
              <thead>
                <tr className="bg-slate-50 text-slate-700">
                  <th className="border border-slate-200 px-3 py-2 text-left">区分</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">金額</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">出典・時点</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr>
                  <td className="border border-slate-200 px-3 py-2">Kotlinエンジニア平均（正社員）</td>
                  <td className="border border-slate-200 px-3 py-2">約577万円</td>
                  <td className="border border-slate-200 px-3 py-2">スタンバイ プログラマー年収集計（公表値）</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">Kotlinフリーランス案件平均</td>
                  <td className="border border-slate-200 px-3 py-2">約938万円</td>
                  <td className="border border-slate-200 px-3 py-2">フリーランスボード調べ（2025年10月時点・公表値）</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">正社員SE 30代（参考）</td>
                  <td className="border border-slate-200 px-3 py-2">約499万円</td>
                  <td className="border border-slate-200 px-3 py-2">レバテック 年代別平均年収（2025年）</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">正社員SE 40代（参考）</td>
                  <td className="border border-slate-200 px-3 py-2">約618万円</td>
                  <td className="border border-slate-200 px-3 py-2">レバテック 年代別平均年収（2025年）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed">
            参考として、doda「2024年度決定年収レポート」（2025年5月公表）では、IT・通信の平均決定年収は486万円とされています。Kotlinは需要が拡大している言語ですが、求人数そのものは時期変動が大きいため、最新値は各エージェントで確認してください。
          </p>
        </section>

        {/* 経験レベル */}
        <section id="level" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベル（求人要件の傾向）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            求人票に見られる要件の傾向を整理すると、おおむね次のように分かれます。実際の要件は企業・ポジションで異なるため目安として捉えてください。
          </p>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">ジュニア（実務〜2年程度）</h3>
              <p className="text-sm text-slate-600">Kotlin/Javaの基本、簡単なAndroidアプリやAPIの開発経験。個人開発の公開実績があると有利。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">ミドル（実務3〜7年）</h3>
              <p className="text-sm text-slate-600">Jetpack Composeでの実装、Coroutine/Flowの活用、設計・テスト経験。30代の中心レンジ。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">シニア／リード</h3>
              <p className="text-sm text-slate-600">アーキテクチャ設計、Android＋サーバーサイドの横断対応、技術選定・チームリード。</p>
            </div>
          </div>
        </section>

        {/* キャリアパス */}
        <section id="career" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キャリアパスの選択肢</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Kotlinのキャリアは「Android」「サーバーサイド」「マルチプラットフォーム」「テックリード」に大別できます。Android単独より、サーバーサイドまで広げると希少性が上がります。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {careerPaths.map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{item.role}</h3>
                <p className="text-xs text-petrol font-medium mb-2">関連資格: {item.cert}</p>
                <p className="text-sm text-slate-600">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 求人の探し方 */}
        <section id="find" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の探し方・強いエージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Kotlin求人はモバイル・Web系スタートアップに多く、担当者の業界理解で提案の質が変わります。タイプの異なる3社を併用しましょう。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">
                <Link href="/review/levtech/" className="text-petrol-deep hover:underline">レバテックキャリア</Link>
              </h3>
              <p className="text-sm text-slate-600">IT/Web特化でモバイル案件に強いとされる。高年収求人の比率が高いとされ（同社ガイド記事）、Android寄りの求人を探しやすい。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">
                <Link href="/review/geekly/" className="text-petrol-deep hover:underline">Geekly（ギークリー）</Link>
              </h3>
              <p className="text-sm text-slate-600">IT/Web/ゲーム特化で提案スピードに定評。Web系スタートアップのサーバーサイドKotlin求人と相性が良い。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">
                <Link href="/review/bizreach-it/" className="text-petrol-deep hover:underline">ビズリーチ</Link>
              </h3>
              <p className="text-sm text-slate-600">ハイクラス・スカウト型。テックリード/アーキテクトなど高年収帯のKotlin案件に出会いやすい。</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4 text-sm">
            複数登録の使い分けは<Link href="/compare/agents/" className="text-petrol hover:underline">エージェント比較</Link>、JVM言語の比較は<Link href="/skill/java/" className="text-petrol hover:underline">Java転職ガイド</Link>も参考にしてください。
          </p>
        </section>

        {/* 参入ルート */}
        <section id="entry" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験浅めからの参入ルート</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Kotlinは特にJava経験者にとって参入しやすいスキルです。次のステップで実務への橋渡しを設計しましょう。
          </p>
          <ol className="space-y-3">
            {[
              { t: "Java経験を土台にする", d: "Javaの実務経験があれば、Kotlin固有の機能（null安全・拡張関数・Coroutine）に絞って学習すれば短期間で戦力になれる。" },
              { t: "GitHubに動くものを公開する", d: "Androidアプリ、またはSpring Bootで作ったAPIサーバーを公開。Coroutine/Flowの活用が見られる。" },
              { t: "Jetpack Composeを習得する", d: "モダンAndroid開発の主流。宣言的UIで実践的なアプリを作れることがアドバンテージになる。" },
              { t: "サーバーサイドへ広げる", d: "Android＋サーバーサイドの両対応は希少性が高く、年収交渉でも有利に働く。" },
            ].map((s, i) => (
              <li key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{i + 1}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{s.t}</h3>
                  <p className="text-sm text-slate-600">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* 30代40代視点 */}
        <section id="mid" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              30代・40代でJavaの実務経験を積んできた人にとって、Kotlinは<strong>これまでの資産をそのまま活かせる</strong>移行先です。JVMの知識・設計経験・運用経験がそのまま通用し、Kotlin固有の機能を上乗せするだけで市場価値を高められます。若手が多いモバイル領域でも、設計力やプロジェクト経験で差別化できます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・Javaの実務経験は「移行できる即戦力」として強く訴求できる</li>
              <li>・Android＋サーバーサイドの両対応で希少性を出し、年収帯を上げる</li>
              <li>・レバテック公表値で40代SE平均は約618万円（2025年）。設計・リード経験で上振れを狙う</li>
            </ul>
            <p className="text-slate-600 text-sm mt-3">
              年代別の相場感は<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職事情</Link>、市場価値の整理は<Link href="/knowledge/market-value/" className="text-petrol hover:underline">自分の市場価値の調べ方</Link>もあわせてどうぞ。
            </p>
          </div>
        </section>

        {/* 学習戦略 */}
        <section id="study" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルアップ・学習戦略</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Kotlinの学習は、言語固有機能の習得とモダンAndroid・サーバーサイドの実践を軸に組み立てると効率的です。
          </p>
          <ul className="space-y-3 mb-4">
            {[
              { t: "Kotlin固有の機能を押さえる", d: "null安全、拡張関数、データクラス、Coroutine/Flowなど、Javaにない機能を理解して実務で使えるようにする。" },
              { t: "Jetpack Composeを習得する", d: "宣言的UIの設計パターンを学び、実践的なAndroidアプリを作れる状態にする。" },
              { t: "サーバーサイドKotlinを試す", d: "Spring Boot＋KotlinでAPIを構築し、フルスタック対応力をポートフォリオで示す。" },
            ].map((c, i) => (
              <li key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{c.t}</h3>
                <p className="text-sm text-slate-600">{c.d}</p>
              </li>
            ))}
          </ul>
          <p className="text-slate-600 leading-relaxed text-sm">
            資格より実務・ポートフォリオが重視される領域のため、動く成果物を見せられる状態を優先しましょう。成果物の見せ方は<Link href="/knowledge/portfolio/" className="text-petrol hover:underline">ポートフォリオの作り方</Link>、継続学習の習慣化は<Link href="/knowledge/continuous-learning/" className="text-petrol hover:underline">エンジニアの学習を続けるコツ</Link>も参考にどうぞ。
          </p>
        </section>

        {/* FAQ */}
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

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">Kotlinのスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            Kotlinの求人に精通したIT特化型エージェントに登録して、年収アップの可能性を探りましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Java転職ガイド", href: "/skill/java/" },
              { name: "Swift/iOS転職ガイド", href: "/skill/swift/" },
              { name: "レバテックキャリアの評判", href: "/review/levtech/" },
              { name: "ポートフォリオの作り方", href: "/knowledge/portfolio/" },
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
    
      <section className="mx-auto max-w-3xl px-4 pb-10">
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
          <h2 className="font-bold text-slate-900 mb-2">この技術と関連の深い掲載企業</h2>
          <p className="text-xs text-slate-500 mb-2">各社の公開技術情報でこの技術への言及が確認できた掲載企業です。年収・選考は各社ページをご覧ください。</p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-sm"><li><a href="/company/gree/" className="text-petrol-deep hover:underline">グリー（GREE）</a></li><li><a href="/company/line-yahoo/" className="text-petrol-deep hover:underline">LINEヤフー</a></li><li><a href="/company/moneyforward/" className="text-petrol-deep hover:underline">マネーフォワード</a></li><li><a href="/company/nintendo/" className="text-petrol-deep hover:underline">任天堂</a></li><li><a href="/company/rakuten/" className="text-petrol-deep hover:underline">楽天グループ</a></li><li><a href="/company/sansan/" className="text-petrol-deep hover:underline">Sansan</a></li><li><a href="/company/zozo/" className="text-petrol-deep hover:underline">ZOZO</a></li></ul>
          <p className="mt-3 text-sm"><a href="/skill/" className="text-petrol-deep hover:underline">スキル別ガイド一覧</a> ／ <a href="/salary/company-ranking/" className="text-petrol-deep hover:underline">企業年収ランキング</a></p>
        </div>
      </section>
      </>
  );
}
