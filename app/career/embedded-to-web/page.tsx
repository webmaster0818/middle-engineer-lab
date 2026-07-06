import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/career/embedded-to-web/" },
  title: "組込みエンジニア→Web系エンジニアへの転職ガイド【2026年版】",
  description:
    "組込み・ファームウェアエンジニアからWeb系エンジニアへ転職するための現実性、スキルギャップ比較、在職中の準備ステップ、職務経歴書のBefore/After例文を公的データに基づき解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：基礎力は活きるが文化差は大きい" },
  { id: "gap", label: "組込みとWeb系のスキルギャップ比較表" },
  { id: "build", label: "埋めるべきスキルの身につけ方" },
  { id: "steps", label: "移行ステップ（在職中の準備）" },
  { id: "resume", label: "職務経歴書での見せ方（Before/After）" },
  { id: "salary", label: "年収の考え方" },
  { id: "agents", label: "おすすめの転職エージェント" },
  { id: "middle", label: "30代・40代が組込み→Web系を目指すなら" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const gapRows = [
  {
    skill: "低レイヤ・ハードウェア理解",
    emb: "◎ メモリ・割込み・リアルタイム制御に精通",
    web: "△ 直接は使わないが、性能設計で土台として活きる",
  },
  {
    skill: "Web開発言語・フレームワーク",
    emb: "△ C/C++中心、Web系言語は経験が限定的",
    web: "◎ TypeScript/Go/Python等とWebフレームワークが前提",
  },
  {
    skill: "クラウド・デプロイ",
    emb: "△ オンプレ・組込み環境が中心",
    web: "◎ AWS/GCPでの構築・デプロイが日常",
  },
  {
    skill: "開発プロセス・ツール",
    emb: "○ Git導入は現場差。ウォーターフォール寄りも多い",
    web: "◎ Git/PRレビュー・CI/CD・アジャイルが標準",
  },
  {
    skill: "品質・テストへの厳密さ",
    emb: "◎ 安全性要求が高くテスト・検証文化が強い",
    web: "○ 強みとして活きる。テスト設計力は評価される",
  },
  {
    skill: "パフォーマンス・最適化思考",
    emb: "◎ リソース制約下での最適化に習熟",
    web: "○ バックエンド・基盤の性能改善で武器になる",
  },
];

const buildSteps = [
  {
    title: "Web系言語を1つ深く習得する",
    desc: "C/C++の経験があれば、型システムやメモリの感覚は土台として活きます。TypeScriptやGoはC系の素養がある人と相性がよく、文法だけでなく標準的なプロジェクト構成まで踏み込んで習得します。低レイヤを理解している分、内部挙動の理解が速いのは強みです。",
  },
  {
    title: "Webの仕組みとフレームワークを学ぶ",
    desc: "HTTP、REST API、データベース、認証など、Web開発の基本構造を体系的に押さえます。選んだ言語のメジャーフレームワーク（Next.js・Gin・Django等）でCRUDとAPIを一通り実装できる状態を目指します。",
  },
  {
    title: "クラウドとデプロイを経験する",
    desc: "組込みではオンプレ・専用環境が中心のため、AWS/GCPの基本サービスを理解し、自作アプリを実際にデプロイして公開URLを持つところまで到達します。Docker・コンテナの概念も合わせて押さえます。",
  },
  {
    title: "モダンな開発フローに慣れる",
    desc: "Git/PRレビュー、CI/CD、アジャイルなどWeb系で標準とされるフローに慣れます。組込みの現場がウォーターフォール寄りだった場合は、個人開発で現行フローを自分の手で再現しておきます。",
  },
  {
    title: "組込みの強みをWeb系に翻訳する",
    desc: "リソース制約下での最適化、厳密なテスト・検証文化、リアルタイム性への感覚は、Web系のバックエンド・基盤・性能改善で武器になります。この強みを言語化し、単なる『未経験のWeb志望者』ではない立ち位置を作ります。",
  },
];

const transitionSteps = [
  {
    phase: "現職での準備（〜3ヶ月）",
    items: [
      "TypeScriptまたはGoを選び、文法とプロジェクト構成を習得する",
      "HTTP・REST API・DB・認証などWebの基本構造を体系的に押さえる",
      "組込みで培った最適化・テスト・性能設計の経験を棚卸しする",
    ],
  },
  {
    phase: "ポートフォリオづくり（3〜6ヶ月）",
    items: [
      "フロント・バック・デプロイまで一気通貫で動くWebアプリをGitHubで公開する",
      "AWS/GCPへの実デプロイとDocker・CI/CDを個人開発で経験する",
      "組込みの強み（最適化・品質）をWeb系の文脈に翻訳して整理する",
    ],
  },
  {
    phase: "応募・面接フェーズ（6ヶ月〜）",
    items: [
      "IT特化型エージェントに登録し、Web系求人の要件レベルをすり合わせる",
      "ポートフォリオを軸に、未経験領域でも自走できる根拠を準備する",
      "面接では低レイヤ理解・性能設計・品質文化を強みとして説明する",
    ],
  },
];

const faqs = [
  {
    q: "組込みエンジニアからWeb系への転職は可能？",
    a: "可能です。C/C++で培った型・メモリ・性能の感覚や、厳密なテスト・検証文化は、Web系でも土台として活きます。ただしWeb系言語・フレームワーク、クラウド、モダンな開発フローは新たに習得が必要で、文化差も大きいため、在職中にポートフォリオを用意して自走力を示すことが鍵になります。",
  },
  {
    q: "組込みの経験はWeb系で評価される？",
    a: "評価される要素があります。リソース制約下での最適化思考、リアルタイム性への感覚、安全性要求が高い現場で培った厳密なテスト文化は、Web系のバックエンドや基盤・性能改善で武器になります。低レイヤを理解している人は、内部挙動の理解が速いという強みもあります。",
  },
  {
    q: "なぜ組込みからWeb系に移りたい人がいる？",
    a: "モダンな技術スタックに触れたい、求人数や働き方の選択肢を広げたい、自社サービスやプロダクト開発に関わりたい、リモートワークの選択肢を増やしたい、といった動機がよく見られます。Web系は求人の母数が大きく、キャリアの幅を広げやすい領域です。",
  },
  {
    q: "Web系転職に最低限必要なスキルは？",
    a: "Git操作、Web系言語1つ（TypeScript/Go/Python等）、HTTP・REST APIの理解、SQL、Webフレームワークでの実装経験が目安です。加えてDocker・クラウドへのデプロイ経験があると、書類段階での評価が上がりやすくなります。",
  },
  {
    q: "ポートフォリオは必須？",
    a: "実質的に必須に近いです。組込みの業務成果はWeb系の選考では実力が伝わりにくいため、個人開発のWebアプリをGitHubで公開し、READMEに設計意図を書いておくことで、Web系でも自走できる技術力を客観的に示せます。",
  },
  {
    q: "組込みからWeb系に移ると年収は下がる？",
    a: "一概には言えません。dodaの決定年収レポート（2025年5月公表）ではIT・通信の転職者の約6割が年収アップとされますが、未経験に近いWeb領域へ移る初年度は横ばい〜一時的な減少もあり得ます。スキルの市場性次第で回復・上昇の余地は大きく、複数社で確認するのが安全です。",
  },
  {
    q: "Web系求人はどのエージェントで探せばいい？",
    a: "IT/Web特化型のレバテックキャリアは技術理解のあるアドバイザーが在籍し、Web系・モダン技術の求人に強みがあります。カジュアル面談から始められるサービスを併用すると、在職中に開発文化や技術スタックの相性を確認しながら進められます。",
  },
];

const related = [
  { name: "組込みスキルガイド", href: "/skill/embedded/" },
  { name: "SIer SE→Web系開発者転職", href: "/career/se-to-web/" },
  { name: "Reactスキルガイド", href: "/skill/react/" },
  { name: "Goスキルガイド", href: "/skill/go/" },
  { name: "エンジニア職務経歴書の書き方", href: "/knowledge/resume/" },
  { name: "30代の転職事情", href: "/age/30s/" },
];

export default function EmbeddedToWebPage() {
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
        title="組込みエンジニア→Web系エンジニアへの転職ガイド【2026年版】"
        description="組込み・ファームウェアエンジニアからWeb系エンジニアへ転職するための現実性、スキルギャップ比較、在職中の準備ステップ、職務経歴書のBefore/After例文を公的データに基づき解説します。"
        url="/career/embedded-to-web/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "組込み→Web系転職ガイド" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          組込みエンジニア→Web系エンジニアへの転職ガイド
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 低レイヤの基礎力と品質文化をWeb系の武器に変える
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          組込み・ファームウェアエンジニアからWeb系エンジニアへのキャリアチェンジは、モダンな技術スタックや求人数・働き方の選択肢を広げたいという動機から、根強い人気があります。C/C++で培った低レイヤの理解や厳密な品質文化は、Web系でも土台として活きます。一方で、言語・フレームワーク・クラウド・開発文化の差は大きく、相応の学習が必要です。このページでは、この職種転換の現実性、スキルギャップ、在職中の準備、職務経歴書の書き方までを具体的に解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省 job tag",
            "レバテック公表 年代別平均年収（2025年）",
            "doda 決定年収レポート（2025年5月公表）",
          ]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-petrol hover:underline text-sm">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：基礎力は活きるが文化差は大きい</h2>
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>組込みからWeb系への転職は可能ですが、言語・クラウド・開発文化の差を埋める学習が前提になります。</strong>
              鍵になるのは、低レイヤの基礎力と品質文化をWeb系の武器に翻訳できるかどうかです。
            </p>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li>① ギャップになりやすいのは<strong>Web系言語・フレームワーク・クラウド・モダンな開発フロー</strong></li>
              <li>② 一方で<strong>型・メモリ・性能の感覚と厳密なテスト文化</strong>は、バックエンドや基盤で強みになる</li>
              <li>③ 個人開発のWebアプリをGitHubで公開し、Web系でも自走できる根拠を示すことが成否を分ける</li>
            </ul>
          </div>
        </section>

        <section id="gap" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">組込みとWeb系のスキルギャップ比較表</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Web系で求められるスキルを、組込みエンジニアの典型的な経験と比較しました。◎＝十分／○＝経験あり／△＝補強が必要、の目安です。組込みで強い行と、新たに学ぶ行の両方が見えてきます。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-petrol-soft">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">必要スキル</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">組込みEng（現職）</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">Web系で求められる水準</th>
                </tr>
              </thead>
              <tbody>
                {gapRows.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200 align-top">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.skill}</td>
                    <td className="px-4 py-3 text-slate-600">{row.emb}</td>
                    <td className="px-4 py-3 text-slate-600">{row.web}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="build" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">埋めるべきスキルの身につけ方</h2>
          <div className="space-y-4">
            {buildSteps.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            言語選びには
            <Link href="/skill/go/" className="text-petrol hover:underline">Goスキルガイド</Link>
            や
            <Link href="/skill/react/" className="text-petrol hover:underline">Reactスキルガイド</Link>
            、組込みの強みの棚卸しには
            <Link href="/skill/embedded/" className="text-petrol hover:underline">組込みスキルガイド</Link>
            も参考にしてください。
          </p>
        </section>

        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">移行ステップ（在職中にできる準備）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            組込みからWeb系への移行は、文化差が大きい分、在職中にWebの基本構造とポートフォリオを着実に積み上げてから動くのが安全です。退職してから学ぶより、現職の安定の中で実物を作る方が、選考での説得力が増します。
          </p>
          <div className="space-y-5">
            {transitionSteps.map((step, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <span className="text-petrol">STEP {i + 1}</span>
                  {step.phase}
                </h3>
                <ul className="space-y-2">
                  {step.items.map((it, j) => (
                    <li key={j} className="flex gap-2 text-sm text-slate-600">
                      <span className="text-petrol shrink-0">✓</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="resume" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">職務経歴書での見せ方（Before/After例文）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            組込みの職務経歴書は、そのままだとWeb系の採用担当に実力が伝わりにくいことがあります。ポイントは、低レイヤの強みをWeb系の価値に翻訳し、Web系での自走の根拠（ポートフォリオ）をセットで示すことです。
          </p>

          <div className="space-y-5">
            <div className="border border-rose-200 bg-rose-50 rounded-lg p-5">
              <p className="font-bold text-rose-700 text-sm mb-2">Before（組込み用語の羅列になっている例）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                車載機器のファームウェア開発をC言語で担当。RTOS上での割込み処理、ドライバ実装、単体テストを行った。
              </p>
            </div>
            <div className="border border-emerald-200 bg-emerald-50 rounded-lg p-5">
              <p className="font-bold text-emerald-700 text-sm mb-2">After（Web系の価値に翻訳した例）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                車載機器のファームウェアをC言語で開発。限られたメモリ・CPU制約下で処理を最適化し、応答時間を◯%改善。安全性要求の高い現場で、テスト設計と検証を徹底する品質文化を経験。直近は個人開発でTypeScript＋Next.jsのWebアプリを構築し、AWSへのデプロイ・CI/CDまで自走で実装（GitHubで公開）。低レイヤの理解と品質志向を、バックエンド・基盤の性能改善に活かすことを志向。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-sm text-slate-600 leading-relaxed">
              <p className="font-bold text-slate-700 mb-2">改善のポイント</p>
              <ul className="space-y-1">
                <li>・組込み固有の用語を、Web系で評価される「最適化・品質・性能設計」の言葉に翻訳する</li>
                <li>・個人開発のWebアプリで、Web系でも自走できる根拠を示す</li>
                <li>・処理時間の改善など、出せる範囲で定量を添える（数値は実績に合わせて記載）</li>
              </ul>
            </div>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            より詳しい書き方は
            <Link href="/knowledge/resume/" className="text-petrol hover:underline">エンジニア職務経歴書の書き方</Link>
            を参照してください。
          </p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            年収の見通しは、公的・公表データを起点に考えると過度な期待・不安を避けられます。基準として、レバテックが公表した正社員SEの年代別平均年収（2025年）は、30代で約499万円、40代で約618万円です。組込み・Web系それぞれの待遇は企業やスキルで幅が大きいため、あくまで目安として捉えてください。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            また、doda（パーソルキャリア）の「決定年収レポート」（2025年5月公表）では、IT・通信エンジニアの平均決定年収は2023年度の469万円から2024年度の486万円へと上昇しており、転職者の約6割が年収アップを実現しています。未経験に近いWeb領域へ移る初年度は横ばい〜一時的な減少もあり得ますが、スキルを積めば回復・上昇の余地は大きい領域です。
          </p>
          <p className="text-slate-500 text-xs leading-relaxed">
            出典: 厚生労働省 job tag／レバテック公表 年代別平均年収（2025年）／doda「決定年収レポート」（2025年5月公表）。年収はスキルや企業により幅が大きいため、複数社での確認を推奨します。
          </p>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">おすすめの転職エージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            未経験に近い領域への移行では、技術理解のあるアドバイザーがいるIT特化型サービスが向いています。カジュアル面談から始められるサービスを併用すると、在職中に相性を確認しながら進められます。
          </p>
          <div className="space-y-3">
            {[
              {
                name: "レバテックキャリア",
                point:
                  "IT/Web特化で技術に詳しいアドバイザーが在籍。Web系・モダン技術の求人に強みがあり、異領域からの移行相談がしやすいサービスです。",
              },
              {
                name: "Green",
                point:
                  "成功報酬型の転職サイトで、IT/Webベンチャー・自社開発企業に強み。カジュアル面談から始められるため、在職中の情報収集に向きます。",
              },
              {
                name: "doda ITエンジニア",
                point:
                  "国内最大級の求人数で、検索・エージェント・スカウトのハイブリッド型。幅広いWeb系企業を比較検討したい場合に有効です。",
              },
            ].map((agent, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{agent.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{agent.point}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代が組込み→Web系を目指すなら</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>
              ミドル層がこのルートで成功する鍵は、「未経験のWeb志望者」ではなく「低レイヤと品質を理解した即戦力候補」として立つことです。Web系企業が組込み出身のミドルに期待し得るのは、純粋なWeb実装の速度ではなく、性能設計やテスト・検証文化、複雑な制約下での問題解決力です。これらは組込みで磨かれた強みです。
            </p>
            <p>
              一方で、Web系言語・クラウド・開発文化にまったく触れていないと、適応への懸念を持たれやすくなります。だからこそ、年代が上がるほど「小さくても動くWebアプリを自分で作り、デプロイまでやった」という事実が効きます。文化差を埋める学習意欲を、実物で示すことが重要です。
            </p>
            <p>
              年代別の市場感は
              <Link href="/age/30s/" className="text-petrol hover:underline">30代の転職事情</Link>
              、年収の見通しは
              <Link href="/knowledge/salary-30s/" className="text-petrol hover:underline">30代の年収相場</Link>
              も合わせて確認してください。
            </p>
          </div>
        </section>

        <section id="faq" className="mb-10 scroll-mt-20">
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
          <h2 className="text-xl font-bold mb-3">Web系転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントが、あなたの組込み経験を活かせるWeb系企業を提案します。
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
            {related.map((item, i) => (
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
