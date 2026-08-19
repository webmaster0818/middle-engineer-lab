import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/compare/sier-agents/" },
  title: "SIer転職エージェントおすすめ｜転職と脱出で選び方が違う【2026年8月】",
  description:
    "SIerへの転職とSIerからの脱出は、選ぶエージェントが異なります。SIerの4分類、35歳・客先常駐脱出の現実、SES脱却に強いサービスまで、2つの意図を切り分けて30代40代エンジニア向けにエージェント選びを整理します。",
};

const toc = [
  { id: "conclusion", label: "結論：意図で選ぶエージェントが変わる" },
  { id: "intent", label: "2つの意図を切り分ける" },
  { id: "classification", label: "SIerの4分類" },
  { id: "to-sier", label: "意図①：SIerへ転職する場合" },
  { id: "from-sier", label: "意図②：SIerから脱出する場合" },
  { id: "ses-exit", label: "SES・客先常駐から脱出するなら" },
  { id: "confusion", label: "混同しやすいサービスの整理" },
  { id: "age35", label: "35歳の節目と客先常駐脱出の現実" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const sierTypes = [
  { type: "メーカー系SIer", desc: "メーカーの情報システム部門が独立・系列化したSIer。親会社グループの案件に安定して関われる一方、使用技術が親会社寄りになる傾向があります。" },
  { type: "ユーザー系SIer", desc: "金融・商社・流通などのユーザー企業が設立した情報子会社。業界ドメインに深く、特定業種の基幹システムに強みがあります。" },
  { type: "独立系SIer", desc: "特定の親会社を持たない独立資本のSIer。案件の幅は広い一方、客先常駐・二次請け以降の構造に巻き込まれやすいケースもあります。" },
  { type: "外資系SIer", desc: "外資コンサル・ITベンダー系。グローバル案件や先端技術に関われる一方、成果主義・英語環境など働き方の前提が異なります。" },
];

const faqs = [
  { q: "SIer転職に強いエージェントはどれですか？", a: "「SIerへ転職するのか、SIerから脱出するのか」で答えが変わります。SIerへ転職するなら、上場・大手の求人に強い総合大手やハイクラス特化が有効です。SIerから自社開発・社内SEへ脱出するなら、IT特化エージェントや自社内開発に強いサービスが向きます。本記事はエージェント選びに軸足を置き、意図別の使い分けを整理しています。職種転換そのものの方法は、当サイトの業界・キャリア記事へ案内します。" },
  { q: "SIerへの転職にエージェントを使うメリットは何ですか？", a: "SIerは4分類（メーカー系・ユーザー系・独立系・外資系）で働き方や技術が大きく異なり、求人票だけでは見分けにくいためです。両面型やハイクラス特化のエージェントは、案件の実態や元請け/下請けの位置づけといった情報を持つことがあり、ミスマッチを避けやすくなります。なおJAC公式は「SIerからの転職」に関する記事を公開しており、ハイクラス・ミドル層の転職に知見があります。" },
  { q: "SES・客先常駐から抜け出したいです。どのエージェントが良いですか？", a: "自社内開発・社内SEへの脱却を狙うなら、自社内開発求人に強いサービスが選択肢になります。クラウドリンク（2026年4月に「アイデアキャリア／AIdea Career」へ社名変更・新旧併記）は、自社内開発求人100%を最大の特徴とし、SES・客先常駐から社内SE・自社開発へ働き方を転換したい層に特化しています。網羅性では大手に劣るため、IT特化の大手と併用するのが現実的です。" },
  { q: "SIerへの転職とSIerからの脱出で、なぜエージェント選びが違うのですか？", a: "狙う求人の性質が逆だからです。SIerへ転職する場合は、上場・大手・ハイクラス求人の母数と交渉力が重要で、総合大手やハイクラス特化が効きます。SIerから脱出する場合は、自社開発・社内SE・Web系といった求人にアクセスでき、技術面の準備を支援してくれるIT特化や自社内開発特化が効きます。同じ『SIer』というキーワードでも、入口と出口で最適なエージェントは変わります。" },
  { q: "35歳を過ぎるとSIerからの脱出は難しいですか？", a: "「35歳の節目」「客先常駐脱出は30代が現実的」とよく語られますが、年齢で一律に不可能になるわけではありません。実務経験と専門性があれば30代後半でも十分に可能です。ただし、未経験領域への大幅な職種転換は若いほど通りやすい傾向があるのは事実です。客先常駐から社内SE・自社開発への転換は、30代のうちに動くほど選択肢が広い、という現実的な目安として捉えてください。" },
  { q: "自社開発に移ればすべて良くなりますか？", a: "そうとは限りません。自社開発は技術的な裁量や腰を据えた開発がしやすい一方、特定プロダクトに技術が固定されやすい、事業フェーズによっては不安定、といったトレードオフもあります。SIerには多様な業界・大規模案件に関われる強みがあります。『SIer＝悪、自社開発＝善』という単純化は避け、自分が何を優先するか（技術領域・安定・年収・働き方）で判断するのが大切です。" },
  { q: "クラウドリンクとレバテックキャリアの違いは何ですか？", a: "クラウドリンク（現：アイデアキャリア／AIdea Career・2026年4月社名変更）は自社内開発求人100%を特徴とし、SES・客先常駐からの脱却に特化した中小規模のIT特化エージェントです。レバテックキャリアはIT/Web全般を扱う大手の正社員転職エージェントで、網羅性が高いのが強みです。なおレバテックキャリアは業務委託のレバテックフリーランスとは別物です。SES脱却を主目的にするならクラウドリンク、幅広く求人を見るならレバテックキャリア、と使い分け、併用も有効です。" },
];

export default function SierAgentsPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="SIer転職エージェントおすすめ｜転職と脱出で選び方が違う" description="SIerへの転職とSIerからの脱出で異なるエージェント選びを、SIerの4分類・2つの意図の切り分けとともに解説します。" url="/compare/sier-agents/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "SIer転職エージェント" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">SIer転職エージェントおすすめ｜「転職」と「脱出」で選び方が違う</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ SIerへ入る／SIerから抜ける、2つの意図を切り分けて選ぶ</p>

        <p className="text-slate-600 leading-relaxed mb-4">「SIer 転職 エージェント」で検索する方には、実は<strong>真逆の2つの意図</strong>が混在しています。「SIerへ転職したい」人と、「SIer（特にSES・客先常駐）から脱出したい」人です。この2つでは最適なエージェントが変わります。本記事はエージェント選びに軸足を置き、30代・40代のITエンジニア向けに意図別の使い分けを整理します。職種転換そのものの方法は、当サイトの業界・キャリア記事へ案内します。</p>

        <DataNote surveyedAt="2026年6月" sources={["JAC公式「SIerからの転職」記事", "クラウドリンク（現アイデアキャリア）公式", "各社採用ページ", "口コミメディアの傾向要約（参考値）"]} />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}><a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a></li>
            ))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：意図で選ぶエージェントが変わる</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6 mb-4">
            <p className="font-bold text-blue-900 mb-3">先に結論をお伝えします。</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li><strong>・SIerへ転職するなら「総合大手＋ハイクラス特化」</strong>。上場・大手SIerの求人母数と交渉力が効きます。JAC公式の「SIerからの転職」記事も参考になります。</li>
              <li><strong>・SIerから自社開発・社内SEへ脱出するなら「IT特化＋自社内開発特化」</strong>。クラウドリンク（現アイデアキャリア）は自社内開発100%でSES脱却に強みです。</li>
              <li><strong>・まず自分の意図を確定する</strong>。入口と出口でエージェントが逆になるため、ここを曖昧にすると遠回りになります。</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">どのエージェントも無料で利用できます。本記事はエージェント選びが主題です。職種転換の具体的な進め方は、業界・キャリア記事へ案内します。</p>
        </section>

        <section id="intent" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">2つの意図を切り分ける</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">意図① SIerへ転職したい</h3>
              <p className="text-sm text-slate-600 leading-relaxed">大規模案件・上流工程・安定したグループ案件に関わりたい。年収やポジションを引き上げたい。この場合は、上場・大手SIerの求人に強い総合大手やハイクラス特化が向きます。</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">意図② SIer（SES・客先常駐）から脱出したい</h3>
              <p className="text-sm text-slate-600 leading-relaxed">多重下請け・客先常駐の働き方を変えたい。自社開発・社内SE・Web系へ移りたい。この場合は、IT特化や自社内開発に強いエージェントが向きます。職種転換の方法は専用記事へ。</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm mt-4">この切り分けが本記事の核です。同じ「SIer」でも、入る側と抜ける側で最適なエージェントが逆になります。脱出側の具体策は<Link href="/industry/ses-exit/" className="text-petrol hover:underline">SES脱出の進め方</Link>や<Link href="/industry/sier-to-web/" className="text-petrol hover:underline">SIerからWeb系への転職</Link>、<Link href="/career/se-to-web/" className="text-petrol hover:underline">SEからWebエンジニアへ</Link>で詳しく扱っています。</p>
        </section>

        <section id="classification" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SIerの4分類</h2>
          <p className="text-slate-600 leading-relaxed mb-4">「SIer」と一括りにせず、4つの分類で性質を理解すると、エージェント選びと求人の見極めが正確になります。</p>
          <div className="space-y-3">
            {sierTypes.map((s, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{s.type}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">※ 各分類の働き方や技術は企業ごとに差があります。求人票だけでは判断しづらいため、エージェント経由で実態を確認するのが安全です。</p>
        </section>

        <section id="to-sier" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">意図①：SIerへ転職する場合</h2>
          <p className="text-slate-600 leading-relaxed mb-4">大規模システムの上流工程やプロジェクトマネジメントに関わりたい、グループ案件で安定して働きたい、という場合はSIerへの転職が選択肢になります。この場合に効くのは、<strong>上場・大手SIerの求人に強い総合大手エージェントと、ハイクラス・ミドル特化のエージェント</strong>です。</p>
          <p className="text-slate-600 leading-relaxed mb-4">特にハイクラス・ミドル特化の両面型エージェントは、SIerの元請け/下請けの位置づけや案件の実態といった情報を持つことがあり、4分類のどこに当たるかを見極めやすくなります。なおJAC公式は「SIerからの転職」に関する記事を公開しており、ハイクラス・ミドル層の転職に知見があります。求人の母数を広げつつ、質と交渉をエージェントに任せる二段構えが有効です。ハイクラス系の比較は<Link href="/compare/highclass/" className="text-petrol hover:underline">ハイクラスIT転職エージェント比較</Link>をご覧ください。</p>
        </section>

        <section id="from-sier" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">意図②：SIerから脱出する場合</h2>
          <p className="text-slate-600 leading-relaxed mb-4">多重下請けや客先常駐の働き方を変えたい、自社開発・社内SE・Web系へ移りたい、という場合は脱出側の意図です。この場合に効くのは、<strong>IT/Web特化エージェントと、自社内開発に強いエージェント</strong>です。技術スタックや開発文化の一次情報を持ち、職種転換の選考準備を支援してくれるかどうかが選定基準になります。</p>
          <p className="text-slate-600 leading-relaxed mb-4">ただし「自社開発に移ればすべて良くなる」という単純化は避けてください。自社開発は腰を据えた開発がしやすい反面、技術が特定プロダクトに固定されやすい、事業フェーズによっては不安定、といったトレードオフがあります。SIerにも大規模案件・多様な業界に関われる強みがあります。<strong>自分が優先するもの（技術領域・安定・年収・働き方）で判断する</strong>のが大切です。脱出ルートの具体策は<Link href="/industry/sier-to-web/" className="text-petrol hover:underline">SIerからWeb系への転職</Link>と<Link href="/career/se-to-web/" className="text-petrol hover:underline">SEからWebエンジニアへ</Link>で扱っています。</p>
        </section>

        <section id="ses-exit" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SES・客先常駐から脱出するなら</h2>
          <p className="text-slate-600 leading-relaxed mb-4">脱出側のなかでも、特にSES・客先常駐から社内SE・自社開発へ働き方を転換したい場合は、<strong>自社内開発求人に強いサービス</strong>が選択肢になります。クラウドリンク（2026年4月に「アイデアキャリア／AIdea Career」へ社名変更・新旧併記）は、<strong>自社内開発求人100%</strong>を最大の特徴とし、SES・客先常駐から脱却したいエンジニアに特化したIT特化エージェントです。面接手配が迅速、IT専門コンサルが親身といった評価がある一方、連絡が多いという声や、中小規模のため大手より網羅性に劣るという指摘もあります（口コミの傾向要約）。</p>
          <p className="text-slate-600 leading-relaxed mb-4">そのため、年収最大化より労働環境の改善が主目的の層に向き、IT特化の大手と併用するのが現実的です。詳しい評判は<Link href="/review/cloudlink/" className="text-petrol hover:underline">クラウドリンク（現アイデアキャリア）の評判・口コミ</Link>を、SES脱出全体の進め方は<Link href="/industry/ses-exit/" className="text-petrol hover:underline">SES脱出の進め方</Link>をご覧ください。</p>
        </section>

        <section id="confusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">混同しやすいサービスの整理</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 text-sm text-slate-700">
            <p className="mb-2">エージェント選びで名前が似たサービスを混同しないよう、整理しておきます。</p>
            <ul className="space-y-1.5 list-disc pl-5">
              <li><strong>クラウドリンク ＝ 現「アイデアキャリア／AIdea Career」</strong>（2026年4月社名変更）。新旧の名前が併存するため注意してください。自社内開発求人100%が特徴です。</li>
              <li><strong>レバテックキャリア（IT特化の正社員転職エージェント）≠ レバテックフリーランス（業務委託案件の紹介）</strong>。SIer脱出で正社員転職を狙うなら前者です。</li>
              <li><strong>リクルートエージェント（担当が提案するエージェント型）≠ リクルートダイレクトスカウト（スカウトを待つハイクラス型）</strong>。役割が異なります。</li>
            </ul>
          </div>
        </section>

        <section id="age35" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">35歳の節目と客先常駐脱出の現実</h2>
          <p className="text-slate-600 leading-relaxed mb-4">「35歳の節目」「客先常駐脱出は30代が現実的」という言葉をよく目にします。これは年齢で一律に不可能になるという意味ではありません。実務経験と専門性があれば30代後半でも脱出は十分に可能です。</p>
          <p className="text-slate-600 leading-relaxed mb-4">ただし、未経験領域への大幅な職種転換は若いほど通りやすい傾向があるのは事実です。客先常駐から社内SE・自社開発への転換は、<strong>30代のうちに動くほど選択肢が広い</strong>、という現実的な目安として受け止めるのが妥当です。40代でも、これまでの業界ドメイン知識やマネジメント経験を武器にすれば、脱出ルートは描けます。年齢を理由に諦めるのではなく、自分の強みを言語化してエージェントに伝えることが重要です。</p>
        </section>

        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <p className="text-slate-600 leading-relaxed mb-4">経済産業省「IT人材需給に関する調査」（2019年3月公表の試算）では、2030年に最大約79万人のIT人材不足が見込まれています。SIerで経験を積んだ30代・40代は、入口（SIerへ）でも出口（脱出）でも価値を発揮できる立場です。</p>
          <p className="text-slate-600 leading-relaxed mb-4"><strong>30代エンジニアの場合：</strong>客先常駐・SESから自社開発へ脱出するなら、選択肢が広い30代のうちに動くのが現実的です。技術力の言語化とポートフォリオの整備を進め、IT特化や自社内開発特化のエージェントで脱出ルートを固めましょう。レバテック公表（2025年）では正社員SEで30代約499万円が一つの目安で、働き方の改善と年収のバランスをどう取るかが判断材料になります。<Link href="/industry/ses-exit/" className="text-petrol hover:underline">SES脱出の進め方</Link>もあわせてご覧ください。</p>
          <p className="text-slate-600 leading-relaxed mb-4"><strong>40代エンジニアの場合：</strong>大規模案件のマネジメントや業界ドメインの知見は、上場・大手SIerへの転職で強く評価されます。レバテック公表（2025年）では40代の年収1,000万円以上の割合は12.67%とされ、上流・マネジメント級で上限を狙える層です。SIerへ入るならハイクラス特化で交渉を任せ、脱出するなら強みを武器にIT特化で職種転換を狙う——どちらの意図でも、まず自分の方向を確定することが先決です。<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職事情</Link>もご覧ください。</p>
          <p className="text-slate-600 leading-relaxed text-sm">いずれの年代でも、本記事はエージェント選びが主題です。職種転換そのものの設計は、リンク先の業界・キャリア記事で具体的に確認してください。</p>
        </section>

        <section id="faq" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
                <div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">SIerは「入口」か「出口」かで選ぶ</h2>
          <p className="text-blue-100 text-sm mb-4">SIerへ転職するなら総合大手＋ハイクラス、脱出するならIT特化＋自社内開発特化。まず自分の意図を確定し、合うエージェントを選びましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "SES脱出の進め方", href: "/industry/ses-exit/" },
              { name: "SIerからWeb系への転職", href: "/industry/sier-to-web/" },
              { name: "SEからWebエンジニアへ", href: "/career/se-to-web/" },
              { name: "クラウドリンク（現アイデアキャリア）の評判", href: "/review/cloudlink/" },
              { name: "ハイクラスIT転職エージェント比較", href: "/compare/highclass/" },
              { name: "IT転職エージェント比較", href: "/compare/agents/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
