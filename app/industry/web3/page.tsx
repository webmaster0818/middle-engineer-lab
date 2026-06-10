import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "Web3・ブロックチェーン業界へのエンジニア転職ガイド｜30代40代";
const DESC =
  "Web3・ブロックチェーン業界（暗号資産・NFT・スマートコントラクト）へエンジニア転職する現実的な方法を解説。求められる技術とスキル、参入ルート、年収の考え方、30代40代の進め方を公的データで整理します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
};

const toc = [
  { id: "conclusion", label: "結論：Web3転職は現実的か" },
  { id: "overview", label: "Web3・ブロックチェーン業界の概要" },
  { id: "trend", label: "技術トレンドと採用動向" },
  { id: "skills", label: "求められる技術・スキル" },
  { id: "routes", label: "参入ルート（職種×企業タイプ）" },
  { id: "salary", label: "年収傾向" },
  { id: "company-types", label: "代表的な企業タイプと例" },
  { id: "steps", label: "参入の進め方" },
  { id: "midlife", label: "30代・40代の視点" },
  { id: "agents", label: "相談先エージェント" },
  { id: "faq", label: "よくある質問" },
];

const skills = [
  ["バックエンド開発（Go/Rust/TypeScript/Node.js）", "中核スキル", "ブロックチェーン基盤やバックエンドAPIの開発で使われる言語。Web開発経験が土台になる"],
  ["スマートコントラクト（Solidity等）", "専門スキル", "EthereumなどEVM系チェーンの中核。専門性が高く、習得すると希少価値が出る"],
  ["暗号・セキュリティ・鍵管理", "中核スキル", "資産を直接扱うため、署名・暗号・ウォレットのセキュア設計が極めて重要"],
  ["分散システム・コンセンサスの理解", "差別化要素", "P2Pネットワークや合意形成アルゴリズムの理解が基盤開発で問われる"],
  ["金融・規制ドメイン知識（資金決済法等）", "差別化要素", "暗号資産交換業など規制対応が必要な領域で、コンプライアンス理解が武器になる"],
  ["フロントエンド・ウォレット連携（React等）", "中核スキル", "dAppのUIや既存ウォレットとの接続を担う。Web系フロント経験が活きる"],
];

const routes = [
  ["バックエンド／基盤エンジニア", "暗号資産交換所・基盤開発企業", "Go/Rust等で取引・基盤を担う。分散システムやセキュリティ志向の人に向く"],
  ["スマートコントラクトエンジニア", "DeFi・NFT・dApp開発企業", "Solidity等で契約ロジックを実装。専門性が高く未経験からは学習投資が必要"],
  ["フロントエンド／dAppエンジニア", "ウォレット・NFTマーケット", "ウォレット連携やUIを担当。Web系フロント経験者の入り口になりやすい"],
  ["セキュリティ・監査エンジニア", "監査会社・取引所", "コントラクト監査や鍵管理。セキュリティ経験者が専門性を掛け合わせやすい"],
];

const companyTypes = [
  ["暗号資産交換業者（取引所）", "暗号資産の売買・カストディ。金融商品取引法や資金決済法などの規制対応が前提で、可用性とセキュリティが厳しく問われる", "金融グレードの堅牢性に関心がある人"],
  ["ブロックチェーン基盤・インフラ企業", "独自チェーンやノード、開発者向けツールの開発。分散システムやコンセンサスの深い理解が求められる", "低レイヤや分散システムが好きな人"],
  ["DeFi・NFT・dApp開発企業", "分散型金融、NFTマーケット、ゲームなどの自社サービス。スマートコントラクトとフロントの両面が必要", "新領域でプロダクトを作りたい人"],
  ["大企業・金融機関のWeb3部門", "既存企業がブロックチェーンを活用する実証・新規事業。安定基盤で新技術に関われる", "大組織で新規事業を進めたい人"],
];

const faqs = [
  {
    q: "未経験からWeb3・ブロックチェーン業界に転職できますか？",
    a: "Web開発の基礎（バックエンドやフロントエンド）がある人なら、入り口は存在します。バックエンドやウォレット連携のフロントなど、既存スキルが活きるポジションから入る道があります。一方でスマートコントラクトや基盤開発は専門性が高く、SolidityやRustなどWeb3特有の技術を学習する投資が必要です。資産を扱う領域のため、セキュリティ意識を語れることも重要です。",
  },
  {
    q: "Web3とフィンテックはどう違いますか？",
    a: "フィンテックは既存の金融サービスをテクノロジーで再構築する幅広い領域で、Web3・ブロックチェーンはそのうち分散台帳技術を中核に据えた領域です。暗号資産交換業などは両方の性質を持ちます。フィンテック全般については別記事で整理しています。",
  },
  {
    q: "どんなプログラミング言語が求められますか？",
    a: "基盤・バックエンドではGoやRust、TypeScript/Node.jsが使われやすく、スマートコントラクトではSolidityなどEVM系の言語が中心です。フロントではReactなどでウォレット連携を実装します。具体的な要件は企業ごとに異なるため、求人票で確認してください。",
  },
  {
    q: "Web3業界の安定性が不安ですが大丈夫でしょうか？",
    a: "市況の影響を受けやすい側面があるのは事実です。本記事では将来予測や市場規模の数値は記載しません。リスクを抑えたい場合は、規制対応が進んだ暗号資産交換業者や、大企業のWeb3部門など、相対的に基盤が安定した選択肢から検討するのも一つの考え方です。複数社で比較し、事業の継続性や資金状況も確認することをおすすめします。",
  },
  {
    q: "セキュリティの経験はWeb3で評価されますか？",
    a: "高く評価されやすい領域です。資産を直接扱うため、暗号・鍵管理・コントラクト監査などのセキュリティ知見は希少で、取引所や監査会社などで強い武器になります。セキュリティエンジニアのキャリアも参考にしてください。",
  },
  {
    q: "30代・40代でもWeb3に転職できますか？",
    a: "新しい技術領域のため学習意欲は問われますが、年齢だけが理由で不利になるとは限りません。30代はWeb3特有技術の習得、40代は金融・セキュリティ・規制対応など既存の専門性との掛け合わせを打ち出すと、ミドル層ならではの強みを示しやすくなります。",
  },
  {
    q: "未出典の市場規模や成長率は記載していますか？",
    a: "本記事では確認できない市場規模・成長率の数値は記載していません。年収などは出典と時点を明記した公開データのみを用い、業界動向は公開情報に基づく傾向として記述しています。",
  },
];

const related = [
  { name: "フィンテック業界への転職", href: "/industry/fintech/" },
  { name: "金融業界からフィンテック転職", href: "/industry/finance/" },
  { name: "Rustエンジニアの転職", href: "/skill/rust/" },
  { name: "Goエンジニアの転職", href: "/skill/go/" },
  { name: "セキュリティエンジニア転職ガイド", href: "/skill/security/" },
  { name: "30代エンジニアの年収相場", href: "/knowledge/salary-30s/" },
];

export default function Web3Page() {
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
      <ArticleJsonLd title={TITLE} description={DESC} url="/industry/web3/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "業界別ガイド" },
          { name: "Web3・ブロックチェーン業界への転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Web3・ブロックチェーン業界へのエンジニア転職ガイド｜30代・40代の現実的な戦略
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 暗号資産・スマートコントラクト・dApp領域で技術を活かす方法
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          Web3・ブロックチェーンは、分散台帳技術を中核に据えた領域で、暗号資産（仮想通貨）、NFT、スマートコントラクト、分散型金融（DeFi）、分散型アプリケーション（dApp）などを含みます。中央集権的なサーバーに依存しないアーキテクチャが特徴で、金融・ゲーム・コンテンツなど多様な分野と結びついています。本記事では、エンジニアがWeb3・ブロックチェーン業界へ転職する現実的な道筋を、求められる技術・スキル・参入ルート・年収傾向の観点から、公開データと公的統計をもとに整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表 年代別平均年収（2025年）",
            "doda 決定年収レポート（2025年5月公表）",
            "経済産業省 IT人材需給に関する調査（2019年公表）",
          ]}
        />

        {/* 目次 */}
        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3">目次</p>
          <ul className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-blue-600 hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：Web3転職は現実的か</h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-5 mb-4">
            <p className="text-slate-700 leading-relaxed mb-3">
              <span className="font-bold text-blue-800">結論：Web開発の基礎がある人にとって、入り口のあるルートは存在します。</span>
              ただしスマートコントラクトや基盤開発は専門性が高く、Web3特有の技術を学ぶ投資が前提になります。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・バックエンド・フロントの実務経験は入り口として活かしやすい</li>
              <li>・Solidity・Rust・分散システムなど専門技術の学習が差を生む</li>
              <li>・資産を扱うためセキュリティ意識を語れることが重要</li>
              <li>・市況の影響を受けやすい点を理解し、企業の継続性も見極めたい</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            まずは「基盤・バックエンド・スマートコントラクト・フロント」のどこで自分の経験が活きるかを見極め、必要な専門技術を補う計画を立てるのが近道です。
          </p>
        </section>

        {/* 業界概要 */}
        <section id="overview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Web3・ブロックチェーン業界の概要</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            Web3は単一の業種ではなく、分散台帳技術を活用する横断的な領域です。代表的なサービス・技術領域には次のようなものがあります。市場規模や成長率の具体値は出典が確認できないため、本記事では記載しません。
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">暗号資産・取引所</h3>
              <p className="text-sm text-slate-600">
                暗号資産の売買やカストディ（保管）を担う領域。日本では暗号資産交換業として規制があり、可用性とセキュリティが極めて重要です。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">スマートコントラクト・DeFi</h3>
              <p className="text-sm text-slate-600">
                ブロックチェーン上で自動実行される契約ロジックや分散型金融サービス。Solidityなどでの実装と、厳格な監査が求められます。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">NFT・dApp・基盤開発</h3>
              <p className="text-sm text-slate-600">
                NFTマーケット、ゲーム、分散型アプリ、独自チェーンの基盤開発など。フロントエンドからインフラまで幅広い職種があります。
              </p>
            </div>
          </div>
        </section>

        {/* 技術トレンド・採用動向 */}
        <section id="trend" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術トレンドと採用動向</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            ブロックチェーン技術の社会実装や、大企業による実証実験などを背景に、専門エンジニアの採用ニーズが見られます（公開情報に基づく傾向）。技術面では次のようなトレンドが挙げられます。
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">セキュリティ・監査の重要性</h3>
              <p className="text-sm text-slate-600">
                スマートコントラクトの脆弱性は直接的な資産流出につながるため、コントラクト監査や鍵管理の専門性が高く評価されます。セキュリティ人材の希少性が際立つ領域です。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">規制対応と既存金融との融合</h3>
              <p className="text-sm text-slate-600">
                暗号資産交換業をはじめ、規制を踏まえた設計が求められます。金融ドメインや規制対応の経験を持つエンジニアは差別化しやすい立場にあります。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">IT人材不足という背景</h3>
              <p className="text-sm text-slate-600">
                経済産業省「IT人材需給に関する調査」（2019年公表）では、2030年に最大約79万人のIT人材不足が試算されています（2019年公表の試算）。専門性の高い領域では、希少な技術を掛け合わせられる人材ほど動きやすい傾向があります。
              </p>
            </div>
          </div>
        </section>

        {/* 求められるスキル */}
        <section id="skills" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる技術・スキル</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700">スキル・経験</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 whitespace-nowrap">位置づけ</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">補足</th>
                </tr>
              </thead>
              <tbody>
                {skills.map(([s, j, d], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 border-t border-slate-200 align-top">{s}</th>
                    <td className="px-4 py-3 text-blue-600 font-medium border-t border-slate-200 align-top whitespace-nowrap">{j}</td>
                    <td className="px-4 py-3 text-slate-600 border-t border-slate-200">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            ポイントは「中核スキル（バックエンド・フロント・セキュリティ）で土俵に立ち、専門スキル（スマートコントラクト・分散システム）で抜きん出る」という見せ方です。学習段階でも、テストネットで動くdAppやコントラクトを公開すると説得力が増します。関連スキルは
            <Link href="/skill/rust/" className="text-blue-600 hover:underline">Rust</Link>・
            <Link href="/skill/go/" className="text-blue-600 hover:underline">Go</Link>・
            <Link href="/skill/security/" className="text-blue-600 hover:underline">セキュリティ</Link>
            のページも参考にしてください。
          </p>
        </section>

        {/* 参入ルート */}
        <section id="routes" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">参入ルート（職種×企業タイプ）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700">職種</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">主な企業タイプ</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">向いている人・特徴</th>
                </tr>
              </thead>
              <tbody>
                {routes.map(([r, c, d], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 border-t border-slate-200 align-top whitespace-nowrap">{r}</th>
                    <td className="px-4 py-3 text-slate-600 border-t border-slate-200 align-top">{c}</td>
                    <td className="px-4 py-3 text-slate-600 border-t border-slate-200">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            未経験技術が多い場合は、いきなりスマートコントラクトの中核を狙うより、既存スキルが活きるバックエンドやフロントから入り、Web3特有の知識を業務で身につけてからステップアップする道もあります。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収傾向</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            Web3・ブロックチェーン企業の年収はレンジが広く、確認可能な一律の平均値はありません。判断材料として、公的・公表データを目安に使うのが現実的です。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700">データ</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">数値</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700">出典・時点</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["正社員SE 30代 平均年収", "約499万円", "レバテック公表（2025年）"],
                  ["正社員SE 40代 平均年収", "約618万円", "レバテック公表（2025年）"],
                  ["年収1,000万円以上の割合（30代）", "8.01%", "レバテック公表（2025年）"],
                  ["年収1,000万円以上の割合（40代）", "12.67%", "レバテック公表（2025年）"],
                  ["IT・通信の平均決定年収", "486万円（2024年度）", "doda 決定年収レポート（2025年5月公表）"],
                ].map(([k, v, src], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 border-t border-slate-200 align-top">{k}</th>
                    <td className="px-4 py-3 text-blue-600 font-medium border-t border-slate-200 align-top whitespace-nowrap">{v}</td>
                    <td className="px-4 py-3 text-slate-500 border-t border-slate-200 text-xs align-top">{src}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            年収を上げる現実的な手段は、(1) スマートコントラクトやセキュリティなど専門性で希少性を高める、(2) 中核スキルで応募できる幅を広げる、(3) 複数エージェントで提示額を比較し交渉材料にする、の3点です。詳しくは
            <Link href="/knowledge/salary-change/" className="text-blue-600 hover:underline">エンジニア転職で年収は上がるか</Link>
            も参考にしてください。
          </p>
        </section>

        {/* 企業タイプ */}
        <section id="company-types" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">代表的な企業タイプと例</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            以下は代表的な企業タイプの整理です。日本では暗号資産交換業者のほか、大手IT・ゲーム企業がWeb3関連の事業に取り組む例もあります。各社の採用状況を保証するものではありません。
          </p>
          <div className="space-y-4">
            {companyTypes.map(([name, desc, fit], i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{name}</h3>
                <p className="text-sm text-slate-600 mb-2">{desc}</p>
                <p className="text-xs text-blue-700">向いている人：{fit}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-500 leading-relaxed text-xs mt-4">
            関連する事業会社としては
            <Link href="/company/dena/" className="text-blue-600 hover:underline">DeNA</Link>・
            <Link href="/company/mercari/" className="text-blue-600 hover:underline">メルカリ</Link>・
            <Link href="/company/cyberagent/" className="text-blue-600 hover:underline">サイバーエージェント</Link>・
            <Link href="/company/gmo-internet/" className="text-blue-600 hover:underline">GMOインターネット</Link>
            などの各ページも参考にしてください（Web3事業の有無・規模は各社で異なります）。
          </p>
        </section>

        {/* 進め方 */}
        <section id="steps" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">参入の進め方</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "経験を棚卸しする", desc: "バックエンド・フロント・インフラ・セキュリティのうち、自分の強みを整理する。資産やセキュリティに関わる実績は特に洗い出す。" },
              { step: "2", title: "Web3特有の技術を学ぶ", desc: "Solidityでのコントラクト実装、ウォレット連携、分散システムの基礎などを学習。テストネットで動くものを作り、GitHubで公開すると説得力が増す。" },
              { step: "3", title: "入り口を見極める", desc: "基盤・スマートコントラクト・フロント・セキュリティのうち、自分の経験が最も活きる領域に絞ってターゲット企業を選定する。" },
              { step: "4", title: "企業の継続性も確認する", desc: "市況の影響を受けやすい領域のため、事業の継続性や資金状況も確認。エージェント2社以上に登録し、求人と担当者を比較する。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{item.step}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 30代40代視点 */}
        <section id="midlife" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の視点</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：専門技術の習得に投資する</h3>
              <p className="text-sm text-blue-700">
                Web3は比較的新しい領域で、専門技術を持つ人材が限られています。SolidityやRust、分散システムの習得に投資できれば、希少性の高いポジションを狙いやすくなります。
                <Link href="/age/30s/" className="text-blue-700 underline">30代の転職事情</Link>
                も参考にしてください。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：既存の専門性との掛け合わせ</h3>
              <p className="text-sm text-blue-700">
                金融・セキュリティ・大規模システムの経験は、規制対応や堅牢性が問われるWeb3領域で評価されやすい強みです。新技術の習得と既存の専門性を組み合わせて打ち出すのが現実的です。
                <Link href="/age/40s/" className="text-blue-700 underline">40代の転職事情</Link>
                も確認しておきましょう。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ミドル層こそ「希少性」で戦う</h3>
              <p className="text-sm text-blue-700">
                若手と同じ土俵で最新トレンドだけを競うのではなく、セキュリティや規制対応といった希少性で差別化するのがミドル層の定石です。
                <Link href="/knowledge/market-value/" className="text-blue-700 underline">自分の市場価値の測り方</Link>
                も参考にしてください。
              </p>
            </div>
          </div>
        </section>

        {/* エージェント */}
        <section id="agents" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">相談先エージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            Web3転職では、IT専門性の高いエージェントと、ハイクラス求人に強いサービスを併用するのが定石です。
          </p>
          <div className="space-y-3">
            {[
              { name: "レバテックキャリア", desc: "IT/Web特化で技術的なマッチングに強み。利用者の多くが20〜30代という公表もあり、ミドルは経歴を丁寧に伝えたい。", href: "/review/levtech/" },
              { name: "ビズリーチ", desc: "ハイクラス・スカウト型。年収750万円以上の求人や専門ポジションを狙う際の選択肢。", href: "/review/bizreach-it/" },
              { name: "リクルートエージェントIT", desc: "国内最大級の求人数。Web3関連から事業会社まで幅広く比較したい場合に有効。", href: "/review/recruit-it/" },
            ].map((a, i) => (
              <Link key={i} href={a.href} className="block border border-slate-200 rounded-lg p-5 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                <h3 className="font-bold text-slate-800 mb-1">{a.name} →</h3>
                <p className="text-sm text-slate-600">{a.desc}</p>
              </Link>
            ))}
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
          <h2 className="text-xl font-bold mb-3">あなたの技術をWeb3で活かそう</h2>
          <p className="text-blue-100 text-sm mb-4">
            まずはIT特化型エージェントに相談して、あなたの市場価値を客観的に確認しましょう。
          </p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
