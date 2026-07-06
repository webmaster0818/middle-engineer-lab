import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/skill/go/" },
  title: "Go言語エンジニアの転職ガイド｜年収・求人・将来性【2026年】",
  description:
    "Go言語エンジニアの転職市場を出典付きで解説。paiza調査で提示年収3年連続1位のGoの市場価値、求人の探し方、他言語からの参入ルート、30代・40代の戦い方をミドルエンジニア向けに整理します。",
};

const toc = [
  { id: "conclusion", label: "1. 結論：Goエンジニアの転職市場の攻め方" },
  { id: "market", label: "2. Goの市場・年収データ（出典付き）" },
  { id: "level", label: "3. 求められる経験レベルと求人要件の傾向" },
  { id: "career", label: "4. Goエンジニアのキャリアパス" },
  { id: "find", label: "5. 求人の探し方・強いエージェント" },
  { id: "entry", label: "6. 経験浅めからGoに参入するルート" },
  { id: "age", label: "7. 30代・40代エンジニアの視点" },
  { id: "learn", label: "8. スキルアップ・学習戦略" },
  { id: "faq", label: "9. よくある質問" },
];

const faqs = [
  {
    q: "Go言語エンジニアの平均年収はどのくらいですか？",
    a: "paiza株式会社「プログラミング言語に関する調査（2025年版）」では、求人票に記載された提示年収を言語別に集計した結果、Goが平均723万円で3年連続1位でした（2025年に掲載された求人票9,280件ベース）。これは特定個人の年収ではなく求人提示額の集計値である点に注意してください。年代別の相場は、レバテック公表の正社員SE平均年収（30代約499万円・40代約618万円／2025年）も参考になります。",
  },
  {
    q: "Goは求人数が少ないと聞きますが、転職で不利になりませんか？",
    a: "同じpaiza調査では、企業ニーズ（求人数比率）ランキングでGoはトップ10圏外でした（1位JavaScript14.4%・2位Java13.9%・3位PHP11.0%）。求人の絶対数は多くありませんが、扱えるエンジニアが少ないスペシャリスト人材として高く評価されやすいのが特徴です。数で勝負するより、Goを採用する企業（後述）に的を絞る戦い方が向いています。",
  },
  {
    q: "Java・PHPなど他言語からGoへ転向するのは難しいですか？",
    a: "Goは言語仕様がシンプルで、静的型付け言語の実務経験があれば文法習得自体は短期間で進められます。ただしgoroutineとchannelを使った並行処理、interfaceの設計、明示的なエラーハンドリングなどGo特有の設計思想に慣れるには実プロジェクトでの経験が必要です。個人開発でも実務に近い構成を作っておくと評価につながります。",
  },
  {
    q: "Go言語の求人はどんな企業に多いですか？",
    a: "マイクロサービス化を進めるWeb系・SaaS・フィンテック企業や、クラウドインフラを内製する企業に多く見られます。Kubernetes・Docker・TerraformなどクラウドネイティブのコアツールがGoで実装されているため、SRE／プラットフォーム領域でもGo人材の需要があります。具体的な社名や求人数は時期で変動するため、エージェントで最新の保有求人を確認してください。",
  },
  {
    q: "Go未経験でも転職は可能ですか？",
    a: "Java・Python・C++など静的型付け言語の実務経験があれば、Go未経験でもポテンシャル採用の対象になり得ます。GitHubにGoで書いたAPIサーバーやCLIツールを公開し、テストやドキュメントを整えておくと、学習意欲と基礎力を示せます。ただし「Go経験3年以上」を必須とする即戦力求人もあるため、入口の幅は求人によって差があります。",
  },
  {
    q: "Goエンジニアにおすすめの転職エージェントは？",
    a: "IT・Web特化で高年収求人比率が高いレバテックキャリア、ハイクラス・スカウト型でアーキテクト級のGo案件に出会いやすいビズリーチ、Web系スタートアップの提案に強いGeeklyの併用が選択肢です。Goは求人母数が限られるため、複数登録して保有求人を横断的に比較するのが現実的です。",
  },
  {
    q: "Goエンジニアはしつこく営業されたり断られたりしますか？",
    a: "エージェントの連絡頻度は担当者により差があり、希望すればメール中心・LINE中心など連絡手段を調整できます。経歴とGoの実績が薄い段階では紹介求人が絞られることもありますが、これは「断られた」のではなく要件とのマッチングの問題です。経験を補う材料（個人開発・関連言語の実務）を用意して再相談する余地があります。",
  },
];

export default function GoSkillPage() {
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
        title="Go言語エンジニアの転職ガイド｜年収・求人・将来性【2026年】"
        description="Go言語エンジニアの転職市場を出典付きで解説。paiza調査で提示年収3年連続1位のGoの市場価値、求人の探し方、他言語からの参入ルート、30代・40代の戦い方をミドルエンジニア向けに整理します。"
        url="/skill/go/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Go言語エンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Go言語エンジニアの転職ガイド｜年収・求人・将来性【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | Goエンジニアの転職市場をミドル層向けに分析
        </p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            Go言語はGoogleが開発した言語で、シンプルな文法、高いパフォーマンス、優れた並行処理機能から、マイクロサービスやクラウドインフラ領域で採用が広がっています。求人の絶対数は多くないものの、提示年収の高さでは公表データ上トップクラスに位置します。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、求人DBの数では計れないGoエンジニア転職の「攻め方」を、<strong>公表年収データ・求められる経験レベル・求人の探し方・経験浅めからの参入ルート</strong>に分けて、30代・40代の視点を交えて整理します。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "paiza「プログラミング言語に関する調査（2025年版）」",
            "レバテック公表の年代別平均年収（2025年）",
            "経済産業省 IT人材需給に関する調査（2019年公表）",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：Goエンジニアの転職市場の攻め方</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>Goは「求人数は少ないが提示年収は高い」希少スキル型の言語です。</strong>数で勝負するのではなく、Goを採用している企業に的を絞り、希少性を年収に変える戦い方が向いています。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・paiza 2025年調査で提示年収<strong>3年連続1位（平均723万円）</strong>。一方で求人数ランキングはトップ10圏外</li>
              <li>・Java／C++など静的型付け言語の経験があれば、Go未経験でもポテンシャル採用の余地がある</li>
              <li>・Goは<strong>クラウドインフラ知識との掛け合わせ</strong>で市場価値が跳ね上がる（SRE／プラットフォーム領域）</li>
            </ul>
          </div>
        </section>

        {/* 市場・年収データ */}
        <section id="market" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Goの市場・年収データ（出典付き）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            言語別の年収は媒体によって定義が異なります。ここでは出典と時点を明示できる公表データのみを使用します。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Goの提示年収（言語別）", "平均723万円・3年連続1位", "paiza 2025年版調査（求人票9,280件・中央値ベース）"],
                  ["Goの求人数ランキング", "トップ10圏外", "同調査（1位JavaScript14.4%／2位Java13.9%）"],
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
            ※ paizaの提示年収は求人票の記載額を言語別に集計した値で、実際の支給額や個人の年収とは異なります。レバテックの年代別平均はSE全般の値で、Go特化の数値ではありません。Go特化の年収は求人によって幅が大きいため、エージェントで最新の保有求人を確認することをおすすめします。
          </p>
        </section>

        {/* 求められる経験レベル */}
        <section id="level" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベルと求人要件の傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Go求人は「Go経験そのもの」を必須にするものと、「サーバーサイド経験＋Goは入社後キャッチアップ可」とするものに分かれます。求人票によく登場する要件を傾向としてまとめると次の通りです。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { tier: "入口（ポテンシャル）", req: "他言語でのバックエンド実務2〜3年／HTTP・DBの基礎／GoはGitHub等での自習レベル", note: "Go未経験OK求人がここに該当" },
              { tier: "即戦力（ミドル）", req: "GoでのAPI・マイクロサービス開発の実務／goroutine等の並行処理／テスト実装", note: "求人の中心ゾーン" },
              { tier: "ハイクラス", req: "Go基盤の設計・テックリード／Kubernetes等インフラ／チームの技術選定", note: "年収800万円以上が狙える層" },
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">Goエンジニアのキャリアパス</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Goはバックエンドからインフラ／プラットフォーム領域へ橋渡ししやすい言語です。掛け合わせるスキルによって到達できるレンジが変わります。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "バックエンドエンジニア", note: "GoでのAPI開発・マイクロサービス構築が中心。求人の最も多いゾーン" },
              { role: "SRE／プラットフォームエンジニア", note: "Go＋Kubernetes＋Terraformの組み合わせ。インフラ内製企業で需要" },
              { role: "テックリード／アーキテクト", note: "Go基盤のシステム設計＋技術選定＋チームリード" },
              { role: "フリーランス（Go案件）", note: "マイクロサービス・API開発案件。希少性から単価が高い傾向" },
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

        {/* 求人の探し方 */}
        <section id="find" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の探し方・強いエージェント</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Goは求人母数が限られるため、特定の1社に絞るより複数のチャネルを横断するのが効率的です。タイプ別に向くサービスを整理します。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア（IT・Web特化）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT・Web特化で高年収求人の比率が高く、技術に踏み込んで話せるアドバイザーが在籍。Goのような専門求人の提案に向きます。
              </p>
              <Link href="/review/levtech/" className="text-sm text-petrol hover:underline">レバテックキャリアの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ（ハイクラス・スカウト型）</h3>
              <p className="text-sm text-slate-600 mb-2">
                年収750万円以上を中心としたハイクラス・スカウト型。Goアーキテクトやテックリード級の求人・スカウトに出会いやすいのが特徴です。
              </p>
              <Link href="/review/bizreach-it/" className="text-sm text-petrol hover:underline">ビズリーチの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Geekly（Web系・スタートアップに強い）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT・Web・ゲーム業界専門で、提案スピードが強み。Goを採用するWeb系スタートアップの求人を探したい場合の選択肢になります。
              </p>
              <Link href="/review/geekly/" className="text-sm text-petrol hover:underline">Geeklyの詳細レビュー →</Link>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            エージェント各社の比較は<Link href="/compare/agents/" className="text-petrol hover:underline">転職エージェント比較</Link>も参照してください。
          </p>
        </section>

        {/* 経験浅めからの参入ルート */}
        <section id="entry" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験浅めからGoに参入するルート</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "関連言語の実務経験を土台にする", desc: "Java・C++・TypeScriptなど静的型付け言語のバックエンド経験があれば、それを土台に「Goは未経験だがキャッチアップ可」とアピールできます。完全未経験よりポテンシャル採用の対象になりやすくなります。" },
              { num: "2", title: "GitHubに実務に近いGoプロジェクトを公開する", desc: "REST APIサーバー、CLIツール、KubernetesオペレーターなどをGoで書いて公開します。テストの充実度・ドキュメント・パッケージ構成も見られるため、動くだけでなく設計の意図が伝わる状態にしましょう。" },
              { num: "3", title: "Go採用企業のポテンシャル枠を狙う", desc: "マイクロサービス移行中の企業はGo経験者の母数不足から、入社後キャッチアップ前提の採用を行うことがあります。エージェントに「Goは未経験だが学習中」と伝え、そうした求人を紹介してもらうのが近道です。" },
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
              <strong>希少スキルは年齢の不利を相殺しやすい。</strong>Goのように扱える人が少ない言語では、「若くて安い人材」ではなく「すぐ戦力になる希少人材」が求められます。30代・40代で他言語の実務を積んでいるなら、その設計経験こそが武器になります。
            </p>
            <p>
              <strong>掛け算で差別化する。</strong>Go単体より「Go＋クラウドインフラ」「Go＋過去のドメイン知識（金融・物流など）」の掛け合わせが、ミドル層の強みです。年齢を重ねた分の業務知識を、Goという実装手段と結びつけて語れると説得力が増します。
            </p>
            <p>
              <strong>マネジメント経験も資産になる。</strong>テックリードやアーキテクトのGo求人では、コードを書く力に加えてチームの技術選定・育成の経験が評価されます。40代でPL／PM経験があるなら、それを技術力とセットで提示しましょう。
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
              <strong>① 公式ドキュメントと標準ライブラリから学ぶ。</strong>Goは標準ライブラリが充実しており、A Tour of Goと公式ドキュメントで言語仕様の全体像をつかめます。フレームワーク依存になりすぎず、net/httpなど標準パッケージで基礎を固めるのがGo流です。
            </p>
            <p>
              <strong>② 並行処理を実プロジェクトで使う。</strong>goroutineとchannelによる並行処理はGoの核心です。Webクローラーや並列バッチなど、並行処理が必要な題材を選んで実装すると、面接で語れる経験になります。
            </p>
            <p>
              <strong>③ クラウドネイティブを掛け合わせる。</strong>Docker・Kubernetes・TerraformはいずれもGo製で、Goエンジニアと親和性が高い領域です。コンテナ化・IaCの経験を積むと、SRE／プラットフォーム領域の高年収求人に手が届きます。
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
          <h2 className="text-xl font-bold mb-3">Goのスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            Goは求人母数が限られるからこそ、複数のIT特化型エージェントで保有求人を横断比較するのが近道です。
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
              { name: "Pythonエンジニアの転職ガイド", href: "/skill/python/" },
              { name: "Rustエンジニアの転職ガイド", href: "/skill/rust/" },
              { name: "Kubernetesエンジニアの転職ガイド", href: "/skill/kubernetes/" },
              { name: "インフラエンジニアの転職ガイド", href: "/skill/infrastructure/" },
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
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-sm"><li><a href="/company/andpad/" className="text-petrol-deep hover:underline">ANDPAD</a></li><li><a href="/company/base/" className="text-petrol-deep hover:underline">BASE</a></li><li><a href="/company/cybozu/" className="text-petrol-deep hover:underline">サイボウズ</a></li><li><a href="/company/google/" className="text-petrol-deep hover:underline">Google Japan</a></li><li><a href="/company/smartnews/" className="text-petrol-deep hover:underline">SmartNews</a></li><li><a href="/company/stores/" className="text-petrol-deep hover:underline">STORES</a></li><li><a href="/company/ubie/" className="text-petrol-deep hover:underline">Ubie</a></li></ul>
          <p className="mt-3 text-sm"><a href="/skill/" className="text-petrol-deep hover:underline">スキル別ガイド一覧</a> ／ <a href="/salary/company-ranking/" className="text-petrol-deep hover:underline">企業年収ランキング</a></p>
        </div>
      </section>
      </>
  );
}
