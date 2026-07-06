import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/compare/ai-agents/" },
  title: "AI・機械学習エンジニアの転職エージェントおすすめ｜選び方【2026年6月】",
  description:
    "AI・機械学習（ML／生成AI／データサイエンス）エンジニアに強い転職エージェントを、当サイトに実在するサービスから根拠付きで厳選。GitHub評価のFindy、IT/Web全般のレバテックキャリア、ハイクラスのビズリーチ、Web発信評価のLAPRASまで、30代40代向けに選び方を整理します。",
};

const toc = [
  { id: "conclusion", label: "結論：AI・機械学習はどう選ぶか" },
  { id: "point", label: "選定のポイント" },
  { id: "ranking", label: "AI・機械学習に強いサービス" },
  { id: "skill", label: "領域・スキル別の探し方" },
  { id: "combo", label: "併用の考え方" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const services = [
  {
    rank: "技術評価",
    name: "Findy",
    href: "/review/findy/",
    tag: "GitHubスキル偏差値・自社開発",
    reason: "GitHub連携でスキル偏差値を算出するスカウト型。得意領域はモダン言語（Go／TypeScript／Python／Ruby等）・Web自社開発で、PythonはAI・機械学習の主要言語。掲載企業は厳選800社以上（公式・2024年7月時点）で、機械学習・データ基盤を持つモダンな自社開発企業とコードで評価されてマッチしたい人に向く。",
    fit: "Python等でコードを書く現役MLエンジニアで、技術力で評価されたい人",
  },
  {
    rank: "網羅",
    name: "レバテックキャリア",
    href: "/review/levtech/",
    tag: "IT/Web全般・高年収",
    reason: "IT・Web系全般を扱う大手の正社員転職エージェント。約5万件超（2026年6月時点・複数転職メディア集計）の求人数で、機械学習エンジニア・データサイエンティスト・MLOpsなどAI関連職も幅広く拾える。高年収求人に強く、IT特化のため技術文脈を理解した提案を受けやすい。書類添削・面接対策のサポートも充実。",
    fit: "AI関連求人をIT特化の理解のもと幅広く比較し、選考支援も受けたい人",
  },
  {
    rank: "ハイクラス",
    name: "ビズリーチ（IT）",
    href: "/review/bizreach-it/",
    tag: "ハイクラス・スカウト型",
    reason: "ハイクラス・スカウト型で、年収750万円以上をハイクラスと定義（二次情報）。年収1,000万円以上求人が全体の約4割（二次）とされ、AI/MLのリード・研究開発・データサイエンス責任者など上位ポジションのスカウトを受けやすい。市場価値を客観的に把握する用途にも向く。無料会員あり。",
    fit: "AI/MLのリード・上位ポジションをスカウトで狙いたい人",
  },
  {
    rank: "発信評価",
    name: "LAPRAS",
    href: "/review/lapras/",
    tag: "Web発信を自動解析・スカウト",
    reason: "GitHub・Qiita・note・X（旧Twitter）・connpass等をAIが自動クロールしてポートフォリオ化するスカウト型。導入企業700社以上（二次情報）。論文・登壇・技術ブログなどコード以外の発信も評価対象になるため、研究・発信実績のあるAI人材と相性が良い。GitHub中心のFindyとは評価軸が異なる。",
    fit: "技術ブログ・登壇・OSSなど発信実績のあるAI/ML人材",
  },
];

const faqs = [
  { q: "AI・機械学習エンジニアに強い転職エージェントはどれですか？", a: "当サイトに実在するサービスでは、Pythonなどモダン技術をGitHubで評価するFindy、AI関連職を幅広く網羅するレバテックキャリアを軸に、上位ポジションはビズリーチ、研究・発信実績はLAPRASで評価される、という組み合わせが現実的です。AI・機械学習は専門性が高い一方で求人が分散しているため、技術評価型・網羅型・ハイクラス型・発信評価型を併用して母数と質を確保するのが効率的です。" },
  { q: "Findyをはじめに挙げているのはなぜですか？", a: "Findyの得意領域がモダン言語（Go／TypeScript／Python／Ruby等）で、PythonはAI・機械学習の主要言語だからです。GitHub連携のスキル偏差値で技術力を客観的に可視化でき、厳選800社以上（公式・2024年7月時点）の機械学習・データ基盤を持つモダンな自社開発企業とマッチしやすい設計です。ただしGitHubの公開活動が少ないとスカウトが届きにくいため、網羅型のレバテックキャリアと併用してください。" },
  { q: "生成AI・LLM関連の求人はありますか？", a: "生成AI・LLM領域は需要が伸びており、当サイトの生成AI・AI/MLスキルガイドで市場や求人の探し方を整理しています。エージェントはレバテックキャリアを軸に、扱ったモデル・フレームワーク・データ規模などの実績を具体的に伝えると提案精度が上がります。技術トレンドの変化が速いため、最新の求人状況は面談で確認してください。" },
  { q: "データサイエンティストとして転職したいです。", a: "データサイエンス職もレバテックキャリアやビズリーチで扱われます。当サイトのデータサイエンティスト向けスキルガイドで探し方を整理しています。分析だけでなく、機械学習の実装・MLOps・ビジネス成果への貢献を言語化すると、より上位の求人につながりやすくなります。" },
  { q: "研究・論文・登壇の実績を評価してほしいです。", a: "コード以外の発信（論文・技術ブログ・登壇・OSS）を評価対象にするLAPRASが向きます。GitHub・Qiita・note・X・connpass等を自動クロールしてポートフォリオ化するため、研究・発信実績のあるAI人材と相性が良いです。GitHub中心のFindyとは評価軸が異なるので、両方併用すると複数の軸で評価されます。" },
  { q: "40代のAIエンジニアでも転職できますか？", a: "AI・機械学習は専門性が高く、特定領域の深い経験や研究・リード実績があれば40代でも評価されやすい領域です。FindyやLAPRASは年齢より技術活動・発信が重視されやすく、上位ポジションはビズリーチでスカウトを狙えます。母数はレバテックキャリアで確保しつつ、専門性を明確に言語化することが重要です。" },
  { q: "複数登録した方がいいですか？", a: "はい。技術評価のFindy、網羅のレバテックキャリア、ハイクラスのビズリーチ、発信評価のLAPRASは評価軸が異なるため、併用で複数ルートから機会を得られます。いずれも無料です。同じ企業への重複応募は避け、応募状況を自分で管理しましょう。" },
];

const relatedLinks = [
  { name: "Findy（GitHubスキル偏差値）の評判", href: "/review/findy/" },
  { name: "LAPRAS（Web発信を自動解析）の評判", href: "/review/lapras/" },
  { name: "AI・機械学習エンジニア転職の攻め方", href: "/skill/ai-ml/" },
  { name: "生成AIエンジニアの転職市場ガイド", href: "/skill/generative-ai/" },
  { name: "データサイエンティストの転職市場ガイド", href: "/skill/data-scientist/" },
  { name: "IT転職エージェント比較", href: "/compare/agents/" },
];

export default function AiAgentsPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="AI・機械学習エンジニアの転職エージェントおすすめ｜選び方" description="AI・機械学習（ML／生成AI／データサイエンス）に強い転職エージェントを実在サービスから根拠付きで厳選し、選び方を整理します。" url="/compare/ai-agents/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "AI・機械学習エンジニアのエージェント" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">AI・機械学習エンジニアの転職エージェントおすすめ｜実在サービスから根拠付きで選ぶ</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ 技術評価×網羅×ハイクラス×発信評価を組み合わせて選ぶ</p>

        <p className="text-slate-600 leading-relaxed mb-4">AI・機械学習（ML／生成AI／データサイエンス）エンジニアの転職は、<strong>技術力を客観的に評価してくれるサービス</strong>を軸に、求人の母数を網羅型で補い、上位ポジションはハイクラス型で狙う、という組み合わせが現実的です。本記事は当サイトに実在するサービスの中から、各社の公式・公表情報に基づいてAI・機械学習と相性の良いものを根拠付きで選定しています。架空のサービスや順位の捏造はしていません。</p>

        <p className="text-slate-600 leading-relaxed mb-4">AI・機械学習と一括りにしても、職種は大きく分かれます。研究寄りのリサーチャー、モデルを実サービスに組み込む機械学習エンジニア、データ基盤や学習パイプラインを支えるMLOps、分析と意思決定支援を担うデータサイエンティスト、そして近年急拡大している生成AI・LLMの応用開発まで、評価される実績は職種ごとに異なります。求人もまだ大手の総合エージェントに分散しており、「AI特化」を名乗る一社にすべてが集約されているわけではありません。だからこそ、GitHubや技術発信で実力を可視化できるサービスを軸に据えつつ、網羅型・ハイクラス型を併用して母数と上位求人を確保する戦略が効きます。本記事の数値はすべて出典・時点付きの公開情報で、技術トレンドの変化が速い領域のため最新は各公式サイトでご確認ください。</p>

        <DataNote surveyedAt="2026年6月" sources={["Findy公式（掲載企業数 2024年7月時点）", "レバテックキャリア公式系ガイド", "ビズリーチ二次情報", "LAPRAS公式・二次情報", "口コミの傾向要約"]} />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (<li key={t.id}><a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a></li>))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：AI・機械学習はどう選ぶか</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6 mb-4">
            <p className="font-bold text-blue-900 mb-3">先に結論をお伝えします。</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li><strong>・技術評価は「Findy」</strong>。Python等モダン技術をGitHubで可視化し、機械学習・データ基盤の自社開発企業とマッチ。</li>
              <li><strong>・母数は「レバテックキャリア」</strong>。ML・データサイエンス・MLOpsなどAI関連職を幅広く網羅し、選考支援も受けられる。</li>
              <li><strong>・上位ポジションは「ビズリーチ」、発信実績は「LAPRAS」</strong>。リード・研究開発、論文・登壇など強みに応じて使い分ける。</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">いずれも無料です。AI・機械学習は専門性が高く求人が分散しているため、評価軸の異なる複数サービスを併用して母数と質を確保するのが効率的です。</p>
        </section>

        <section id="point" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選定のポイント</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { t: "技術力を客観評価できるか", d: "AI/MLは技術力の差が大きい領域。GitHubや発信から実力を可視化できるサービスか。Findy・LAPRASが該当。" },
              { t: "AI関連職の母数を確保できるか", d: "ML・データサイエンス・MLOps・生成AI等は求人が分散。網羅型の大手で母数を補えるか。" },
              { t: "上位ポジションに届くか", d: "リード・研究開発・責任者級は、ハイクラス・スカウト型の方が届きやすい。" },
            ].map((c, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2 text-sm">{c.t}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="ranking" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">AI・機械学習に強いサービス（根拠付き）</h2>
          <p className="text-slate-600 leading-relaxed text-sm mb-6">順位は「AI・機械学習との相性」を基準に、各社の公式・公表情報に基づいて整理しています。数値はすべて出典・時点付きの公開情報です。</p>
          <div className="space-y-5">
            {services.map((s, i) => (
              <div key={i} className="border border-slate-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-petrol text-white">{s.rank}</span>
                  <Link href={s.href} className="text-lg font-bold text-petrol-deep hover:underline">{s.name}</Link>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">{s.tag}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">{s.reason}</p>
                <p className="text-sm text-slate-700"><span className="font-bold">向いている人：</span>{s.fit}</p>
                <Link href={s.href} className="inline-block mt-3 text-sm font-medium text-petrol hover:underline">{s.name}の詳細レビューを見る →</Link>
              </div>
            ))}
          </div>
        </section>

        <section id="skill" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">領域・スキル別の探し方</h2>
          <p className="text-slate-600 leading-relaxed text-sm mb-3">AI・機械学習は領域によって相性の良い探し方が変わります。当サイトでは<Link href="/skill/ai-ml/" className="text-petrol hover:underline">AI・機械学習</Link>、<Link href="/skill/generative-ai/" className="text-petrol hover:underline">生成AI</Link>、<Link href="/skill/data-scientist/" className="text-petrol hover:underline">データサイエンティスト</Link>、<Link href="/skill/python/" className="text-petrol hover:underline">Python</Link>のスキルガイドで市場・年収・求人の探し方を整理しています。扱ったモデル・データ規模・ビジネス成果を言語化したうえでFindyやレバテックキャリアに相談すると、提案精度が上がります。</p>
          <p className="text-slate-600 leading-relaxed text-sm mb-3">転職市場でAI人材の評価を左右するのは、論文や肩書きそのものよりも「実サービスにどう機械学習を組み込み、どんなビジネス成果や精度改善につなげたか」という具体性です。研究職を目指す場合は発信や論文が、エンジニア職を目指す場合は本番運用・パイプライン構築・MLOpsの経験が、それぞれ強い武器になります。生成AI・LLM領域は特に動きが速く、扱ったフレームワークや評価手法、プロンプト設計・RAG・ファインチューニングなどの実務経験を整理しておくと、面談での説得力が増します。自分の強みが「研究・発信」か「実装・運用」かを見極め、それに合うサービス（発信評価のLAPRAS、技術評価のFindy、母数のレバテックキャリア、上位求人のビズリーチ）を軸にするのが、限られた時間で動くミドルにとって効率的です。</p>
        </section>

        <section id="combo" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">併用の考え方</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "Findyで技術力を可視化", desc: "Python等のGitHub活動でスキル偏差値を出し、機械学習・データ基盤の自社開発企業とマッチする。" },
                { num: "2", title: "レバテックキャリアで母数を確保", desc: "ML・データサイエンス・MLOps・生成AIなどAI関連職を幅広く拾い、選考支援も受ける。" },
                { num: "3", title: "上位はビズリーチ、発信実績はLAPRAS", desc: "リード・研究開発の上位求人はビズリーチ、論文・登壇・OSSの実績はLAPRASで評価される。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.num}</span>
                  <div><h3 className="font-bold text-slate-800 mb-1">{item.title}</h3><p className="text-sm text-slate-600">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">AI・機械学習は技術の進歩が速く、継続的な学習と専門性の深掘りが評価に直結する領域です。30代・40代は、これまでの実装・研究・データ基盤の経験を軸に、生成AI等の新領域へ専門性を拡張する戦略が現実的です。技術活動・発信が評価されやすいFindyやLAPRASは、年齢より実力で見られたいミドルと相性が良いです。</p>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm"><strong>30代の場合：</strong>実装力とドメイン知識を武器に、Findyで技術評価を受けつつレバテックキャリアで母数を広げましょう。レバテック公表（2025年）では正社員SEで30代約499万円が一つの目安で、専門性の高いAI/ML職はこれを上回る求人も少なくありません。</p>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm"><strong>40代の場合：</strong>研究・リード・データ基盤設計の経験は、ビズリーチのハイクラス求人やLAPRASの発信評価で強く評価されます。レバテック公表（2025年）では40代の年収1,000万円以上の割合は12.67%とされ、専門領域で上限を狙える層です。背景として、経済産業省「IT人材需給に関する調査」（2019年3月公表の試算）では2030年に最大約79万人のIT人材不足が見込まれ、先端領域の人材需要は構造的に強いと考えられます。</p>
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
          <h2 className="text-xl font-bold mb-3">AI・機械学習は「技術評価×網羅×ハイクラス」で選ぶ</h2>
          <p className="text-blue-100 text-sm mb-4">Findyで技術評価、レバテックキャリアで母数、ビズリーチ/LAPRASで上位・発信評価。いずれも無料です。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedLinks.map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
