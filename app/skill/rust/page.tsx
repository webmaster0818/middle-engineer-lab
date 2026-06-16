import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "Rustエンジニアの転職市場ガイド｜年収・求人の探し方",
  description:
    "Rustエンジニアの転職市場を30代・40代視点で解説。求人提示年収のレンジ、求められる経験レベル、求人の探し方、C/C++・Goからの参入ルート、学習戦略、FAQまで実用情報を網羅します。",
};

const toc = [
  { id: "conclusion", label: "結論：Rust転職の攻め方" },
  { id: "market", label: "市場・年収データ" },
  { id: "level", label: "求められる経験レベル" },
  { id: "career", label: "キャリアパスの選択肢" },
  { id: "find", label: "求人の探し方" },
  { id: "entry", label: "経験浅めからの参入ルート" },
  { id: "middle", label: "30代・40代視点" },
  { id: "learning", label: "スキルアップ・学習戦略" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "voice", label: "求人・転職支援の口コミ傾向" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const careerPaths = [
  {
    role: "システムプログラマー",
    note: "OS・ミドルウェア・ランタイム・CLIツールなど低レイヤー開発。C/C++からの置き換え案件が中心。",
    demand: "高",
  },
  {
    role: "インフラ/クラウド基盤エンジニア",
    note: "プロキシ・ネットワークデーモン・クラウドネイティブツール（CNCFプロジェクト等）の開発。",
    demand: "高",
  },
  {
    role: "ブロックチェーン/Web3エンジニア",
    note: "Solana・Polkadot・NEAR等のプロトコル／スマートコントラクト開発。母数は少ないが高単価。",
    demand: "中（景況に左右）",
  },
  {
    role: "バックエンドエンジニア（Rust採用企業）",
    note: "actix-web・axum等を使ったAPIサーバー。Goの代替としてRustを選ぶ企業で募集。",
    demand: "中",
  },
];

const faqs = [
  {
    q: "Rustエンジニアの求人は実際どれくらいある？",
    a: "Rustに特化した求人媒体「Forkwell Jobs」のRustタグ求人は73件（2026年6月時点）でした。求人総数で見ればJava・Python・TypeScript等の主要言語と比べて1〜2桁少ないニッチ市場です。Rust「だけ」を条件にすると選択肢が狭まるため、C/C++やGoなど近接言語の経験と組み合わせて探すのが現実的です。",
  },
  {
    q: "Rust求人の提示年収はどのくらい？",
    a: "Forkwell JobsのRust求人では、提示レンジが400万〜800万円台のものから1,200万〜1,800万円台のものまで幅広く、上限が2,000万円を超える案件も確認できました（2026年6月時点）。高レンジに寄りやすい一方、企業ごとの差が大きいため「Rust=必ず高年収」と断定はできません。実際の提示は経験ドメインと企業の資金力で決まります。",
  },
  {
    q: "C/C++からRustへの転向は難しい？",
    a: "メモリ管理の基礎がある分、まったくの未経験者よりは入りやすいとされます。一方で所有権・借用・ライフタイムというRust固有の概念に慣れるには学習時間が必要で、コンパイラの厳格なチェックに最初は戸惑う人が多いです。既存のC/C++の実務経験は面接で強い裏付けになります。",
  },
  {
    q: "Rustの求人はどんな企業が多い？",
    a: "クラウドインフラ・ネットワーク基盤を持つ企業、セキュリティ製品ベンダー、ブロックチェーン／Web3スタートアップ、一部のゲームエンジン・高頻度処理系の企業に分布する傾向があります。日本では母数自体が限られるため、特定領域に強いエージェントやRust特化媒体を併用するのが効率的です。",
  },
  {
    q: "Rust未経験でも転職は可能？",
    a: "C/C++・Go・Haskellなどメモリ管理や型システムに明るい言語の実務経験があれば、ポテンシャル採用の対象になり得ます。その場合、GitHubで動くRustプロジェクト（CLIツールやcrate）を公開し、所有権の理解を可視化しておくと説得力が増します。",
  },
  {
    q: "Rust案件はフリーランスでも取れる？",
    a: "案件母数は正社員より少なめですが、低レイヤーやブロックチェーン領域では高単価のフリーランス案件も存在します。まずは正社員で実務年数を積み、その後フリーランスを検討する順序が現実的です。詳しくはフリーランスと正社員の比較ガイドも参考にしてください。",
  },
  {
    q: "Rustエンジニアにおすすめの転職エージェントは？",
    a: "IT・Web特化で高年収帯に強いレバテックキャリア、ハイクラス・スカウト型のビズリーチ、スタートアップやゲーム領域に強いGeeklyの併用が現実的です。Rust求人は数が限られるため、複数の窓口を持つほど候補に出会える確率が上がります。",
  },
];

export default function RustSkillPage() {
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
        title="Rustエンジニアの転職市場ガイド｜年収・求人の探し方"
        description="Rustエンジニアの転職市場を30代・40代視点で解説。求人提示年収のレンジ、求められる経験レベル、求人の探し方、参入ルート、学習戦略、FAQまでを網羅します。"
        url="/skill/rust/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Rustエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Rustエンジニアの転職市場ガイド｜年収・求人の探し方
        </h1>
        <p className="text-slate-500 text-sm mb-4">
          最終更新: 2026年6月 | Rustエンジニアの転職市場を30代・40代視点で分析
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          Rustはメモリ安全性と高パフォーマンスを両立する言語として、クラウド基盤・セキュリティ・ブロックチェーンなど高信頼性が求められる領域で採用が広がっています。一方で日本の転職市場ではまだ求人の母数が限られる「ニッチ高単価」型のスキルです。本記事は求人DBサイトと正面から張り合うのではなく、ミドル層が「どう攻めれば成果を出せるか」という情報意図に絞って解説します。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "Forkwell Jobs（Rust求人）",
            "Offers Magazine",
            "レバテック公表の年代別平均年収（2025年）",
            "経済産業省 IT人材需給に関する調査（2019年公表）",
          ]}
        />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ul className="space-y-1.5">
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
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：Rust転職の攻め方</h2>
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3 font-medium">
              Rust「単独」で求人を探すと選択肢が一気に狭まります。30代・40代が成果を出す攻め方は、<strong>近接スキル（C/C++・Go・低レイヤー・インフラ）×Rust</strong>の掛け算で「希少人材」として見せること。これに尽きます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① Rust求人は母数が少ないニッチ市場（Forkwell JobsのRust求人73件・2026年6月時点）。だからこそ近接領域の実務経験が武器になる。</li>
              <li>② 提示年収のレンジは広く、上限が高い案件もある一方で企業差が大きい。「Rust=高年収」と決めつけず案件ごとに見る。</li>
              <li>③ 探し方は「Rust特化媒体（Forkwell等）＋IT特化エージェント数社」の併用が最短。1社だけだと候補が枯れる。</li>
            </ul>
          </div>
        </section>

        {/* 市場・年収データ */}
        <section id="market" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">市場・年収データ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Rustの年収について「平均◯◯万円」と断定する公的統計は確認できませんでした。確実なのは「求人母数は少ないが、提示年収レンジは高い側に寄りやすい」という求人媒体上の傾向です。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Rust求人の母数", "Forkwell JobsのRustタグ求人73件（2026年6月時点）。主要言語より1〜2桁少ないニッチ市場"],
                  ["求人提示年収レンジ", "400万〜800万円台から1,200万〜1,800万円台まで幅広く、上限2,000万円超の案件も（Forkwell Jobs・2026年6月時点）"],
                  ["参考：市場記事の年収観", "「2024年の調査では平均700万〜1,000万円」とする解説記事もあるが、調査主体・時点の明示がないため参考値（Offers Magazine）"],
                  ["分布する領域", "クラウド基盤・ネットワーク・セキュリティ・ブロックチェーン・一部ゲーム/高頻度処理系"],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">
                      {label}
                    </th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed mb-4">
            言語別ではなく「ITエンジニア全体の年代別」で年収観を持っておくと、提示額の妥当性を判断しやすくなります。参考として、レバテックが公表する正社員SEの年代別平均年収は、20代約378万円／30代約499万円／40代約618万円／50代約685万円（2025年）です。Rustのように希少性の高いスキルは、この同年代平均を上回る提示が出やすい一方、企業の資金力やドメインによって大きくぶれます。
          </p>
          <p className="text-slate-600 leading-relaxed">
            背景として、経済産業省「IT人材需給に関する調査」（2019年公表）では2030年に最大約79万人のIT人材不足が試算されています。Rust採用が進む低レイヤー・基盤領域はとくに人材が薄く、需給面で求職者に有利な構造が続くと考えられます。
          </p>
        </section>

        {/* 求められる経験レベル */}
        <section id="level" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベル（求人要件の傾向）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Rust求人の要件は、Web系言語の求人と比べて「言語そのもの」より「対象ドメインの設計経験」を重視する傾向があります。求人票で頻出する要件を整理すると次の通りです。
          </p>
          <div className="space-y-3">
            {[
              { lv: "歓迎されやすい人", body: "C/C++・Goなど低レイヤー/システム系言語の実務経験。マルチスレッド・非同期処理・メモリ管理の理解。Linux環境での開発経験。" },
              { lv: "ミドル〜シニア要件", body: "所有権・ライフタイムを踏まえた設計、unsafeの適切な扱い、トレイト設計、パフォーマンスチューニング。OSSコントリビューションがあると強い。" },
              { lv: "ドメイン別の上乗せ要件", body: "インフラ系ならネットワーク/分散システム、ブロックチェーン系なら暗号・コンセンサスの知識、組込み系ならno_std環境の経験など。" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{item.lv}</h3>
                <p className="text-sm text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* キャリアパス */}
        <section id="career" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キャリアパスの選択肢</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Rustは「言語」であって「職種」ではありません。どのドメインでRustを使うかでキャリアの方向性が変わります。代表的な選択肢と、市場での求人の出やすさの目安は次の通りです（年収は前述の求人レンジの幅が大きいため、ここでは需要感のみ記載）。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">方向性</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">内容</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200 w-24">求人の出やすさ</th>
                </tr>
              </thead>
              <tbody>
                {careerPaths.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-700 border-b border-slate-200 font-medium align-top">{item.role}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{item.note}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 align-top">{item.demand}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 求人の探し方 */}
        <section id="find" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の探し方（どの窓口が強いか）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Rustは母数が少ないため、1つの窓口だけでは候補がすぐ枯れます。性質の異なる窓口を3つ前後組み合わせるのが定石です。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア（IT/Web特化・高年収帯）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT/Web専門で高年収求人比率が高く、内定承諾者のうち応募時年収との差が70万円以上が「3人に2人」という実績（2023年1月〜2024年3月）が公表されています。低レイヤー・インフラ寄りのRust案件を持つ窓口として有力です。
              </p>
              <Link href="/review/levtech/" className="text-sm text-petrol hover:underline">レバテックキャリアの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ（ハイクラス・スカウト型）</h3>
              <p className="text-sm text-slate-600 mb-2">
                年収750万円以上をハイクラスと定義するスカウト型サービス。Rustのような希少スキルは、職務経歴を登録しておくと企業側から声がかかる「待ち」のチャネルとして機能します。
              </p>
              <Link href="/review/bizreach-it/" className="text-sm text-petrol hover:underline">ビズリーチの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Geekly（IT/Web/ゲーム特化・スピード重視）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT/Web/ゲーム業界に特化し提案スピードが強み。スタートアップやゲーム/高頻度処理系でRustを採用する企業の求人に出会いやすい窓口です。
              </p>
              <Link href="/review/geekly/" className="text-sm text-petrol hover:underline">Geeklyの詳細レビュー →</Link>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Rust特化媒体も併用する</h3>
              <p className="text-sm text-slate-600">
                エージェント経由に加え、Forkwell Jobsのような言語/スキル特化の求人媒体を直接見ると、エージェント非公開の技術志向な企業に出会えることがあります。「エージェント＋特化媒体」の二段構えが効率的です。
              </p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4 text-sm">
            複数登録の進め方は<Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">転職エージェントの併用ガイド</Link>、ハイクラス向けの比較は<Link href="/compare/highclass/" className="text-petrol hover:underline">ハイクラス向けエージェント比較</Link>も参考にしてください。
          </p>
        </section>

        {/* 参入ルート */}
        <section id="entry" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験浅めからの参入ルート</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「Rust実務未経験だが触れる仕事に就きたい」という30代・40代に現実的なルートは次の3つです。
          </p>
          <div className="space-y-4">
            {[
              { num: "1", title: "現職の近接領域からRustのOSS実績をつくる", desc: "C/C++・Goの実務がある人は、まず個人でCLIツールやライブラリをRustで書きcrates.ioやGitHubに公開。所有権を理解している証拠を可視化すると、ポテンシャル採用の土俵に乗れます。" },
              { num: "2", title: "Rustを一部採用している企業に入り社内で広げる", desc: "全面Rustの求人は少なくても、既存システムにRustを部分導入している企業は増えています。主言語の実務で入り、社内のRust比率が高い領域へ異動するルートは現実的です。" },
              { num: "3", title: "ドメイン専門性を先に固める", desc: "ブロックチェーン・インフラ・セキュリティなど、Rustが使われる領域の知識を先に固めると「Rustは後から覚えられる人」として評価されます。言語より先にドメインで勝負する発想です。" },
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
        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代視点：Rustはミドルに有利か</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            結論として、Rustはむしろミドル層と相性の良いスキルです。理由は、Rustが評価される文脈が「言語の流行り」ではなく「メモリ安全性・信頼性が要る基盤領域」であり、そこでは過去のC/C++や分散システムの泥臭い経験がそのまま価値になるためです。
          </p>
          <div className="space-y-3">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">過去の低レイヤー経験が「掛け算の片側」になる</h3>
              <p className="text-sm text-petrol-deep">
                若手の「Rustが書ける」だけでは差がつきにくい一方、ミドルは「障害対応・性能要件・大規模運用」の経験を持っています。これにRustを足すと、若手には出せない希少性になります。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">求人母数の少なさはエージェント併用で補う</h3>
              <p className="text-sm text-petrol-deep">
                ミドルの転職は「数撃つ」より「合う企業に確実に届ける」ことが重要。母数が薄いRustでは、特化媒体とエージェント複数社で網を広げる戦略がそのまま効きます。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">年収は「同年代平均＋希少性」で考える</h3>
              <p className="text-sm text-petrol-deep">
                40代の正社員SE平均が約618万円（レバテック・2025年）であることを基準に、希少スキルの上乗せをどこまで引き出せるかが交渉の焦点になります。年収交渉の進め方は関連記事を参照してください。
              </p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4 text-sm">
            40代の転職市場全体の現実は<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>、年収交渉は<Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉の進め方</Link>で詳しく解説しています。
          </p>
        </section>

        {/* 学習戦略 */}
        <section id="learning" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルアップ・学習戦略</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            転職で評価されるのは「Rustを学んだ」ことではなく「Rustで何を作り、どんな問題を解いたか」です。アウトプット前提の学習が近道です。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 mb-4">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>公式ドキュメント「The Rust Programming Language」で所有権・借用・ライフタイムを体系的に押さえる</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>小さなCLIツールやWeb API（axum等）を1本完成させ、GitHubで公開する</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>既存OSSのIssueに小さなPRを送り、コードレビューを通す経験を積む</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>自分のドメイン（インフラ/セキュリティ等）の課題をRustで解いて差別化する</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>unsafeや非同期ランタイムの挙動を説明できるようにし、面接の深掘りに備える</li>
          </ul>
          <p className="text-slate-600 leading-relaxed text-sm">
            学習を継続する仕組みづくりは<Link href="/knowledge/continuous-learning/" className="text-petrol hover:underline">働きながら学び続ける方法</Link>、成果物の見せ方は<Link href="/knowledge/portfolio/" className="text-petrol hover:underline">ポートフォリオの作り方</Link>を参考にしてください。
          </p>
        </section>

        {/* 向いている人 */}
        <section id="fit" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人・向いていない人</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Rustでの転職は誰にとっても最適というわけではありません。母数の少ない市場で成果を出しやすい人と、そうでない人の傾向を整理します。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3 text-sm">Rust転職が向いている人</h3>
              <ul className="space-y-2 text-sm text-green-800">
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>C/C++・Go等の低レイヤー/システム系の実務経験がある</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>インフラ・セキュリティ・ブロックチェーンなど明確なドメインを持つ</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>OSSへの貢献や個人開発でアウトプットを出せる</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>母数の少なさを許容し、複数窓口で根気よく探せる</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>技術の深掘り面接で言語仕様を語れる</li>
              </ul>
            </div>
            <div className="border border-amber-200 bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 mb-3 text-sm">向いていない可能性が高い人</h3>
              <ul className="space-y-2 text-sm text-amber-800">
                <li className="flex items-start gap-2"><span className="shrink-0">!</span>「Rustだけ」を条件に短期で多数の求人に応募したい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">!</span>近接スキルもドメイン専門性も特にない</li>
                <li className="flex items-start gap-2"><span className="shrink-0">!</span>地方で求人量を最優先したい（母数が都市部に偏りがち）</li>
                <li className="flex items-start gap-2"><span className="shrink-0">!</span>言語学習のアウトプットを残す時間が取れない</li>
                <li className="flex items-start gap-2"><span className="shrink-0">!</span>年収より求人の選択肢の多さを重視する</li>
              </ul>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4 text-sm">
            この場合、Rust単独にこだわらず<Link href="/skill/go/" className="text-petrol hover:underline">Go</Link>や<Link href="/skill/infrastructure/" className="text-petrol hover:underline">インフラ</Link>と並行して検討すると、選択肢を確保しつつRust案件にも出会えます。
          </p>
        </section>

        {/* 口コミ傾向 */}
        <section id="voice" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人・転職支援の口コミ傾向</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Rust案件を扱うエージェントについて、Qiita Job Change・みん評・イーデス等の口コミプラットフォームで見られる傾向を、出典名を挙げて要約します（原文転載は行いません）。
          </p>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">レバテックキャリアに見られる傾向</h3>
              <p className="text-sm text-slate-600">
                OUTSIDEMAGAZINEやQiita Job Change等の口コミでは「書類添削・面接対策が丁寧」「高年収求人が多い」という声がある一方、「未経験者は紹介されにくい」という指摘も見られます。Rustのような専門領域では実務経験の裏付けがある人ほど提案を受けやすい傾向です。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">ビズリーチに見られる傾向</h3>
              <p className="text-sm text-slate-600">
                ミライトーチ等の口コミでは「高年収求人が豊富」「市場価値を客観的に把握できる」という評価がある一方、「経歴次第でスカウトが来ない」という声も。希少スキルのRustでも、職務経歴の書き込み量がスカウト数を左右します。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">Geeklyに見られる傾向</h3>
              <p className="text-sm text-slate-600">
                転職アンテナ等の口コミでは「レスポンスが早い」「実務経験者への提案数が多い」という声がある一方、「連絡がしつこい」という指摘も見られます。スピード感を活かしつつ、連絡頻度は最初にすり合わせると良いでしょう。
              </p>
            </div>
          </div>
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
          <h2 className="text-xl font-bold mb-3">Rustのスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            Rust求人は母数が限られます。IT特化型エージェントを複数登録し、非公開求人も含めて探すのが近道です。
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
              { name: "Go言語エンジニアの転職ガイド", href: "/skill/go/" },
              { name: "インフラエンジニアの転職ガイド", href: "/skill/infrastructure/" },
              { name: "セキュリティエンジニアの転職ガイド", href: "/skill/security/" },
              { name: "ハイクラス向けエージェント比較", href: "/compare/highclass/" },
              { name: "40代エンジニアの転職", href: "/age/40s/" },
              { name: "スキル別転職ガイド一覧", href: "/skill/" },
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
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-sm"><li><a href="/company/toyota/" className="text-petrol-deep hover:underline">トヨタ自動車</a></li></ul>
          <p className="mt-3 text-sm"><a href="/skill/" className="text-petrol-deep hover:underline">スキル別ガイド一覧</a> ／ <a href="/salary/company-ranking/" className="text-petrol-deep hover:underline">企業年収ランキング</a></p>
        </div>
      </section>
      </>
  );
}
