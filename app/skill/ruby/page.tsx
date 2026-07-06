import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/skill/ruby/" },
  title: "Rubyエンジニアの転職ガイド｜言語の年収・求人・将来性【2026年】",
  description:
    "プログラミング言語Rubyエンジニアの転職市場を出典付きで解説。paiza調査で提示年収3位のRubyの市場価値、スタートアップ・自社開発での需要、求人の探し方、30代・40代の戦い方を整理します。フレームワークの詳細はRuby on Railsガイドも参照。",
};

const toc = [
  { id: "conclusion", label: "1. 結論：Railsエンジニアの転職市場の攻め方" },
  { id: "market", label: "2. Rubyの市場・年収データ（出典付き）" },
  { id: "level", label: "3. 求められる経験レベルと求人要件の傾向" },
  { id: "career", label: "4. Railsエンジニアのキャリアパス" },
  { id: "find", label: "5. 求人の探し方・強いエージェント" },
  { id: "entry", label: "6. 他フレームワークからRailsへ参入するルート" },
  { id: "age", label: "7. 30代・40代エンジニアの視点" },
  { id: "learn", label: "8. スキルアップ・学習戦略" },
  { id: "faq", label: "9. よくある質問" },
];

const faqs = [
  {
    q: "Ruby on Railsエンジニアの平均年収はどのくらいですか？",
    a: "paiza株式会社「プログラミング言語に関する調査（2025年版）」では、求人票の提示年収を言語別に集計した結果、Rubyが平均689万円で3位でした（2025年に掲載された求人票9,280件ベース、Goが1位723万円・TypeScriptが2位714万円）。これは求人提示額の集計値であり個人の年収ではありません。年代別の相場は、レバテック公表の正社員SE平均年収（30代約499万円・40代約618万円／2025年）も参考になります。",
  },
  {
    q: "Ruby on Railsの需要は今後も続きますか？",
    a: "スタートアップやWebサービス企業では引き続き需要があります。プロトタイプの高速開発やMVP構築にRailsは適しており、国内外の多くのサービスが稼働しています。paiza 2025年調査では提示年収3位と高水準でした。一方で新規採用の選択肢としてはPython/Go/TypeScriptと比較されることも増えており、Rails単体より掛け合わせが重要です。",
  },
  {
    q: "Railsから他の言語に転向すべきですか？",
    a: "Rails自体の需要は安定しているため、必ずしも転向は必要ありません。ただしGoやTypeScriptを掛け合わせるとキャリアの選択肢が広がります。Railsで培ったWeb開発の設計力は他言語でも活きるため、完全転向よりスキルの幅を広げる戦略が現実的です。",
  },
  {
    q: "Railsの求人はどんな企業に多いですか？",
    a: "シード〜シリーズBのスタートアップ、自社サービス企業、メガベンチャー、BtoB SaaS企業に多く見られます。少人数で素早くプロダクトを作る文化の企業と相性が良いのが特徴です。具体的な社名や求人数は時期で変動するため、エージェントで最新の保有求人を確認してください。",
  },
  {
    q: "Rails未経験でも転職は可能ですか？",
    a: "PHP（Laravel）やPython（Django）などWeb系フレームワークの実務経験があれば、Rails未経験でも転職できる余地があります。Railsの思想（Convention over Configuration）を理解し、個人でRailsアプリを作ってデプロイしておくと評価につながります。",
  },
  {
    q: "Railsエンジニアにおすすめの転職エージェントは？",
    a: "スタートアップ・Web系のRails求人に強いGeekly、IT・Web特化で求人の質が高いレバテックキャリア、自社サービス企業と直接やり取りできる成功報酬型サイトのGreenが選択肢です。Railsはスタートアップ求人が中心なので、ダイレクト型と仲介型を併用すると間口が広がります。",
  },
  {
    q: "Railsエンジニアの求人は減っていますか？",
    a: "新規採用の主役がPython/Go/TypeScriptに移っているという声はありますが、既存のRailsサービスの保守・改善需要は根強く、提示年収も高水準を保っています。求人数の絶対量は言語によって変動するため、複数エージェントで最新の保有求人を確認するのが確実です。",
  },
];

export default function RubySkillPage() {
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
        title="Ruby on Railsエンジニアの転職ガイド｜年収・求人・将来性"
        description="Ruby on Railsエンジニアの転職市場を出典付きで解説。paiza調査で提示年収3位のRubyの市場価値、スタートアップ・自社開発での需要、求人の探し方、30代・40代の戦い方を整理します。"
        url="/skill/ruby/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Ruby on Railsエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Rubyエンジニアの転職ガイド｜言語の年収・求人・将来性
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | Railsエンジニアの転職市場をミドル層向けに分析
        </p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            Ruby on Railsは「設定より規約」の思想で高速なWebアプリ開発を可能にするフレームワークとして、スタートアップや自社サービス企業で広く採用されています。求人の主戦場はスタートアップ・自社開発であり、提示年収の水準は公表データ上も高めです。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、<strong>公表年収データ・求められる経験レベル・求人の探し方・他フレームワークからの参入ルート</strong>を、30代・40代の視点を交えて整理します。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "paiza「プログラミング言語に関する調査（2025年版）」",
            "レバテック公表の年代別平均年収（2025年）",
          ]}
        />

        {/* 目次 */}
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

        {/* 結論 */}
        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：Railsエンジニアの転職市場の攻め方</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>Railsは提示年収が高水準で、スタートアップ・自社開発が主戦場です。</strong>大手求人DBで数を当たるより、スタートアップに強いエージェントとダイレクト型サイトを併用し、フロントや設計力を掛け合わせて勝負するのが攻め方です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・paiza 2025年調査で提示年収<strong>3位（平均689万円）</strong>。GoやTypeScriptに次ぐ高水準</li>
              <li>・求人の中心は<strong>スタートアップ・自社サービス企業</strong>。ダイレクト型サイトの併用が有効</li>
              <li>・Rails＋フロント（React/Vue・Hotwire）の<strong>フルスタック</strong>で市場価値が上がる</li>
            </ul>
          </div>
        </section>

        {/* 市場・年収データ */}
        <section id="market" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Rubyの市場・年収データ（出典付き）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            言語別年収は媒体により定義が異なります。ここでは出典と時点を明示できる公表データのみを使用します。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Rubyの提示年収（言語別）", "平均689万円・3位", "paiza 2025年版調査（求人票9,280件・中央値ベース）"],
                  ["参考：1位・2位の言語", "Go 723万円／TypeScript 714万円", "同調査"],
                  ["正社員SEの平均年収・30代", "約499万円", "レバテック公表（2025年）"],
                  ["正社員SEの平均年収・40代", "約618万円", "レバテック公表（2025年）"],
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
            ※ paizaの提示年収は求人票の記載額を言語別に集計した値で、実際の支給額や個人の年収とは異なります。レバテックの年代別平均はSE全般の値で、Rails特化ではありません。スタートアップではストックオプション等の要素もあるため、総合的な条件はエージェントや企業に確認してください。
          </p>
        </section>

        {/* 求められる経験レベル */}
        <section id="level" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベルと求人要件の傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Rails求人はスタートアップが中心のため、「自走力」と「フルスタック性」が問われやすい傾向があります。代表的な3層の要件を整理します。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { tier: "ミドル（実装中心）", req: "Rails実務2〜4年／Active Record・RSpec／API設計／Git・チーム開発", note: "求人の中心ゾーン" },
              { tier: "フルスタック", req: "Rails＋React/Vue/Hotwire／パフォーマンス改善／設計提案", note: "スタートアップで重宝される" },
              { tier: "リード／CTO候補", req: "技術選定・アーキテクチャ／採用・育成／プロダクト視点", note: "少人数組織の中核を担う層" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2 text-sm">{item.tier}</h3>
                <p className="text-xs text-slate-600 mb-2 leading-relaxed">{item.req}</p>
                <p className="text-xs text-petrol">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* キャリアパス */}
        <section id="career" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Railsエンジニアのキャリアパス</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "バックエンドエンジニア", note: "Rails API開発・DB設計・パフォーマンス最適化が中心" },
              { role: "フルスタックエンジニア", note: "Rails＋React/Vue/Hotwireでフロントまで担当" },
              { role: "テックリード", note: "技術選定・設計レビュー・チームの技術的牽引" },
              { role: "CTO／VPoE（スタートアップ）", note: "技術戦略策定・採用・チームビルディング" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 mb-1">{item.role}</h3>
                <p className="text-xs text-slate-500">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">
            ※ 各ポジションの年収レンジは企業・時期で変動するため断定を避けています。面談時にエージェントへ確認してください。
          </p>
        </section>

        {/* 求人の探し方 */}
        <section id="find" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の探し方・強いエージェント</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Geekly（Web系・スタートアップに強い）</h3>
              <p className="text-sm text-slate-600 mb-2">IT・Web・ゲーム業界専門で提案スピードが強み。スタートアップのRails求人を探したい場合の主力候補です。</p>
              <Link href="/review/geekly/" className="text-sm text-petrol hover:underline">Geeklyの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア（IT・Web特化）</h3>
              <p className="text-sm text-slate-600 mb-2">IT・Web特化で求人の質が高く、技術に踏み込んで話せるアドバイザーが在籍。自社開発のRails求人に向きます。</p>
              <Link href="/review/levtech/" className="text-sm text-petrol hover:underline">レバテックキャリアの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Green（ダイレクト型・自社サービス中心）</h3>
              <p className="text-sm text-slate-600 mb-2">エージェントを介さず企業と直接やり取りできる成功報酬型サイト。カジュアル面談で社風を把握しやすく、ベンチャー求人が豊富です。</p>
              <Link href="/review/green/" className="text-sm text-petrol hover:underline">Greenの詳細レビュー →</Link>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            エージェント各社の比較は<Link href="/compare/agents/" className="text-petrol hover:underline">転職エージェント比較</Link>も参照してください。
          </p>
        </section>

        {/* 参入ルート */}
        <section id="entry" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">他フレームワークからRailsへ参入するルート</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "Web系の実務経験を土台にする", desc: "PHP（Laravel）やPython（Django）でのWeb開発経験は、Railsへの橋渡しになります。MVC・ORM・ルーティングといった共通概念を持っていれば、Rails特有の規約を学ぶだけで実戦に近づけます。" },
              { num: "2", title: "RailsアプリをHeroku/Renderにデプロイする", desc: "認証・CRUD・API連携を含むRailsアプリを作り、実際にデプロイします。RSpecでテストを書き、CI/CDも構築すると、自走できるエンジニアとして評価されます。" },
              { num: "3", title: "“Railsらしさ”を理解していると示す", desc: "Convention over Configuration、Active Recordの使い方、Fat Modelの回避など、Rails流の設計判断を語れると差別化できます。スタートアップは即戦力性を重視するため、規約への理解は強い武器です。" },
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

        {/* 30代・40代視点 */}
        <section id="age" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>
              <strong>スタートアップは「即戦力＋幅広さ」を求める。</strong>Railsの主戦場であるスタートアップは少人数のため、コードを書く力に加えて設計判断やフロント対応まで幅広く担える人を求めます。30代・40代でフルスタックの経験があるなら、それがそのまま強みになります。
            </p>
            <p>
              <strong>CTO／リード候補としての需要がある。</strong>技術選定・採用・チームビルディングを担えるシニアは、スタートアップで重宝されます。マネジメントやプロダクト視点の経験があるなら、Railsの実装力とセットで打ち出しましょう。
            </p>
            <p>
              <strong>カルチャーフィットの確認を怠らない。</strong>スタートアップは事業フェーズや働き方の幅が大きいため、年齢を重ねた分だけ条件・カルチャーの見極めが重要です。Greenのカジュアル面談などを活用し、入社前に社風を確認しておきましょう。
            </p>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            年代別の戦略は<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>・<Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職</Link>も参考にしてください。
          </p>
        </section>

        {/* 学習戦略 */}
        <section id="learn" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルアップ・学習戦略</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>
              <strong>① パフォーマンスチューニングを理解する。</strong>N+1問題の解決、クエリ最適化、キャッシュ戦略、Sidekiqによる非同期処理など、Railsアプリのパフォーマンス改善は面接で高く評価されます。
            </p>
            <p>
              <strong>② フロント技術を掛け合わせる。</strong>Rails＋Hotwire/Turboによるモダンなフロント、またはRails API＋React/Vueのフルスタック構成を経験すると、市場価値が上がります。
            </p>
            <p>
              <strong>③ Go・TypeScriptで選択肢を広げる。</strong>Rails単体に依存せず、GoやTypeScriptを掛け合わせると、新規開発の主流言語にも対応でき、キャリアの幅が広がります。
            </p>
            <p>
              学習と転職活動の進め方は<Link href="/knowledge/continuous-learning/" className="text-petrol hover:underline">継続的な学習の習慣化</Link>・<Link href="/knowledge/portfolio/" className="text-petrol hover:underline">ポートフォリオの作り方</Link>もあわせてご覧ください。
            </p>
          </div>
        </section>

        {/* FAQ */}
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

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">Railsのスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            Railsはスタートアップ求人が中心だからこそ、仲介型エージェントとダイレクト型サイトの併用で間口を広げましょう。
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
              { name: "PHPエンジニアの転職ガイド", href: "/skill/php/" },
              { name: "Pythonエンジニアの転職ガイド", href: "/skill/python/" },
              { name: "Goエンジニアの転職ガイド", href: "/skill/go/" },
              { name: "スタートアップvs大手企業の選び方", href: "/knowledge/startup-vs-enterprise/" },
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
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-sm"><li><a href="/company/andpad/" className="text-petrol-deep hover:underline">ANDPAD</a></li><li><a href="/company/cookpad/" className="text-petrol-deep hover:underline">クックパッド</a></li><li><a href="/company/freee/" className="text-petrol-deep hover:underline">freee</a></li><li><a href="/company/gmo-pepabo/" className="text-petrol-deep hover:underline">GMOペパボ</a></li><li><a href="/company/gree/" className="text-petrol-deep hover:underline">グリー（GREE）</a></li><li><a href="/company/kadokawa/" className="text-petrol-deep hover:underline">KADOKAWA</a></li><li><a href="/company/moneyforward/" className="text-petrol-deep hover:underline">マネーフォワード</a></li><li><a href="/company/nintendo/" className="text-petrol-deep hover:underline">任天堂</a></li></ul>
          <p className="mt-3 text-sm"><a href="/skill/" className="text-petrol-deep hover:underline">スキル別ガイド一覧</a> ／ <a href="/salary/company-ranking/" className="text-petrol-deep hover:underline">企業年収ランキング</a></p>
        </div>
      </section>
      </>
  );
}
