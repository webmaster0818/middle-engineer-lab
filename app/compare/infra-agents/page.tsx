import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/compare/infra-agents/" },
  title: "インフラ・クラウド特化の転職エージェントおすすめ｜選び方【2026年8月】",
  description:
    "インフラ・クラウド（SRE／AWS・GCP・Azure）エンジニアに強い転職エージェントを、当サイトに実在するサービスから根拠付きで厳選。IT/Web全般のレバテックキャリア、最大級の求人数のリクルート/doda、ハイクラスのJAC・ビズリーチまで、30代40代向けに選び方を整理します。",
};

const toc = [
  { id: "conclusion", label: "結論：インフラ・クラウドはどう選ぶか" },
  { id: "point", label: "選定のポイント" },
  { id: "ranking", label: "インフラ・クラウドに強いサービス" },
  { id: "freelance", label: "フリーランス・高単価で関わるなら" },
  { id: "skill", label: "クラウド・スキル別の探し方" },
  { id: "combo", label: "併用の考え方" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const services = [
  {
    rank: "本命",
    name: "レバテックキャリア",
    href: "/review/levtech/",
    tag: "IT/Web全般・高年収",
    reason: "IT・Web系全般を扱う大手の正社員転職エージェント。約5万件超（2026年6月時点・複数転職メディア集計）の求人数を持ち、インフラ・SRE・クラウド（AWS/GCP/Azure）の求人も幅広くカバー。高年収求人に強く、IT特化のため技術的な文脈を理解した提案を受けやすい。利用者の約80%が20〜30代（公式ガイド記事）。",
    fit: "インフラ・クラウド求人をIT特化の理解のもと幅広く比較したい人",
  },
  {
    rank: "最大級",
    name: "リクルートエージェント（IT）",
    href: "/review/recruit-it/",
    tag: "求人数No.1級・全国",
    reason: "国内最大級の求人数。IT公開求人110,840件＋IT非公開求人101,680件（2026年5月22日時点・転職メディア集計）と母数が圧倒的で、全国47都道府県をカバー。インフラ・クラウド職の母数を最大化したいときの土台になる。大手〜スタートアップまで網羅。",
    fit: "求人の母数を最大化し、地方も含めて幅広く探したい人",
  },
  {
    rank: "ハイブリッド",
    name: "doda（IT）",
    href: "/review/doda-it/",
    tag: "検索＋エージェント＋スカウト",
    reason: "総合型でIT・通信エンジニア求人5万件超（2026年2月時点・二次経由）。自分で検索しつつエージェント提案・スカウトも受けられるハイブリッド型。IT・通信の平均決定年収は469万円(2023年度)→486万円(2024年度)（2025年5月公表）で、転職者の約6割が年収アップ。インフラ・クラウド職を自分のペースでも探せる。",
    fit: "自分で探しつつ提案も受けたい、年収相場も把握したい人",
  },
  {
    rank: "ハイクラス",
    name: "JACリクルートメント",
    href: "/review/jac-recruitment/",
    tag: "両面型・30〜50代",
    reason: "両面型（1人のコンサルが企業・求職者双方を担当）のハイクラス／ミドル特化。主に30〜50代が対象で年収500万円以上が目安。クラウドアーキテクト・SREリード・インフラマネージャーなど上流・管理職の求人で交渉力を発揮しやすい。利用者満足度93%（二次情報）。",
    fit: "クラウドアーキテクト・SREリードなど上流で年収を上げたい30〜50代",
  },
  {
    rank: "スカウト",
    name: "ビズリーチ（IT）",
    href: "/review/bizreach-it/",
    tag: "ハイクラス・スカウト型",
    reason: "ハイクラス・スカウト型で、年収750万円以上をハイクラスと定義（二次情報）。年収1,000万円以上求人が全体の約4割（二次）とされ、クラウド・インフラの上位ポジションのスカウトを受けやすい。市場価値を客観的に把握する用途にも向く。無料会員あり。",
    fit: "クラウド・インフラの上位ポジションをスカウトで狙いたい人",
  },
];

const faqs = [
  { q: "インフラ・クラウドに強い転職エージェントはどれですか？", a: "当サイトに実在するサービスの中では、IT特化で技術文脈を理解した提案を受けやすいレバテックキャリアを軸に、求人数最大級のリクルートエージェントやdodaで母数を広げ、上流・管理職はJACリクルートメントやビズリーチでハイクラス求人を狙う、という組み合わせが現実的です。インフラ・SRE・クラウド（AWS/GCP/Azure）はIT全般を扱う大手で十分に拾えるため、特化を名乗る一社に絞るより複数併用で母数を確保するのが効率的です。" },
  { q: "なぜレバテックキャリアを本命にしているのですか？", a: "レバテックキャリアはIT・Web系全般を扱う大手で、IT特化ゆえにインフラ・SRE・クラウドの技術的な文脈を理解した提案を受けやすいためです。約5万件超（2026年6月時点・複数転職メディア集計）の求人数で母数も大きく、高年収求人に強いため、専門性を持つインフラ・クラウドエンジニアの年収交渉の土台になりやすいです。" },
  { q: "AWS・GCP・Azureのスキルを活かせる求人はありますか？", a: "主要クラウドのスキルは需要が高く、当サイトのスキルガイド（AWS・GCP・Azure・Terraform・Kubernetes等）で市場や求人の探し方を整理しています。エージェントはレバテックキャリアを軸に、保有資格（各クラウドの認定資格など）と運用・構築の実績を具体的に伝えると提案精度が上がります。" },
  { q: "SRE・クラウドアーキテクトで年収を上げたいです。", a: "上流・管理職レンジで年収を上げたいなら、ハイクラス・ミドル特化のJACリクルートメント（両面型・年収500万円以上が目安）や、スカウト型のビズリーチ（年収1,000万円以上求人が約4割・二次）が向きます。アーキテクト・リードの実績を言語化し、母数はレバテックキャリアやリクルートで確保するのが現実的です。" },
  { q: "フリーランス・高単価でインフラ案件に関わりたいです。", a: "フリーランス（業務委託）でインフラ・クラウド案件に関わりたい場合は、案件紹介エージェントが選択肢です。当サイトでレビューしているrelance（スリーシェイク運営・SRE領域のテックカンパニー）は自社開発・プライム案件中心でフルリモート案件70%以上（公式表記）とされ、SRE・クラウド領域と相性があります。geechsもリモート案件比率が高い二次情報があります。面談で対象領域を必ず確認してください。" },
  { q: "40代のインフラエンジニアでも転職できますか？", a: "インフラ・クラウドは運用設計・大規模構築・マネジメントの経験が評価されやすく、40代の強みを活かしやすい領域です。JACリクルートメント（主に30〜50代対象）やビズリーチでハイクラス求人を狙いつつ、母数はレバテックキャリアやリクルートで確保するのが現実的です。" },
  { q: "複数登録した方がいいですか？", a: "はい。IT特化のレバテックキャリアを軸に、求人数最大級のリクルート/doda、ハイクラスのJAC/ビズリーチを組み合わせると、母数と上位ポジションの両面を確保できます。いずれも無料です。同じ企業への重複応募は避け、応募状況を自分で管理しましょう。" },
];

const relatedLinks = [
  { name: "レバテックキャリア（IT/Web全般）の評判", href: "/review/levtech/" },
  { name: "リクルートエージェント（IT）の評判", href: "/review/recruit-it/" },
  { name: "JACリクルートメント（ハイクラス両面型）の評判", href: "/review/jac-recruitment/" },
  { name: "インフラエンジニアの転職市場ガイド", href: "/skill/infrastructure/" },
  { name: "ハイクラスIT転職エージェント比較", href: "/compare/highclass/" },
  { name: "IT転職エージェント比較", href: "/compare/agents/" },
];

export default function InfraAgentsPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="インフラ・クラウド特化の転職エージェントおすすめ｜選び方" description="インフラ・クラウド（SRE／AWS・GCP・Azure）に強い転職エージェントを実在サービスから根拠付きで厳選し、選び方を整理します。" url="/compare/infra-agents/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "インフラ・クラウド特化エージェント" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">インフラ・クラウド特化の転職エージェントおすすめ｜実在サービスから根拠付きで選ぶ</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ IT特化×最大級の母数×ハイクラスを組み合わせて選ぶ</p>

        <p className="text-slate-600 leading-relaxed mb-4">インフラ・クラウド（SRE／AWS・GCP・Azure）エンジニアの転職は、<strong>IT特化で技術文脈を理解できるエージェント</strong>を軸に、求人数最大級の総合大手で母数を補い、上流・管理職はハイクラス特化で狙う、という組み合わせが現実的です。本記事は当サイトに実在するサービスの中から、各社の公式・公表情報に基づいてインフラ・クラウドと相性の良いものを根拠付きで選定しています。架空のサービスや順位の捏造はしていません。</p>

        <DataNote surveyedAt="2026年6月" sources={["レバテックキャリア公式系ガイド", "リクルート（IT求人数・転職メディア集計）", "doda（パーソルキャリア）公表値", "JACリクルートメント公式", "ビズリーチ二次情報・口コミの傾向要約"]} />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (<li key={t.id}><a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a></li>))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：インフラ・クラウドはどう選ぶか</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6 mb-4">
            <p className="font-bold text-blue-900 mb-3">先に結論をお伝えします。</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li><strong>・本命は「レバテックキャリア」</strong>。IT特化でインフラ・SRE・クラウドの技術文脈を理解した提案を受けやすい。</li>
              <li><strong>・母数は「リクルート／doda」で最大化</strong>。求人数最大級で、全国・地方も含め幅広く拾える。</li>
              <li><strong>・上流・管理職は「JAC／ビズリーチ」</strong>。クラウドアーキテクト・SREリードなどハイクラス求人と交渉力。</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">いずれも無料です。「特化を名乗る一社」に絞るより、IT特化×最大級の母数×ハイクラスを併用して母数と質を両取りするのが、専門性を持つインフラ・クラウド人材にとって効率的です。</p>
        </section>

        <section id="point" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選定のポイント</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { t: "技術文脈を理解できるか", d: "インフラ・SRE・クラウドの用語や役割を理解した提案ができるIT特化型か。レバテックキャリアが該当します。" },
              { t: "求人の母数を確保できるか", d: "クラウド需要は高い一方、地域・条件で絞られる。求人数最大級の総合大手で母数を補えるか。" },
              { t: "上流・ハイクラスに届くか", d: "アーキテクト・リード・マネージャー級は、ハイクラス特化やスカウト型の方が届きやすい。" },
            ].map((c, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2 text-sm">{c.t}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="ranking" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">インフラ・クラウドに強いサービス（根拠付き）</h2>
          <p className="text-slate-600 leading-relaxed text-sm mb-6">順位は「インフラ・クラウドとの相性」を基準に、各社の公式・公表情報に基づいて整理しています。数値はすべて出典・時点付きの公開情報です。</p>
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

        <section id="freelance" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フリーランス・高単価で関わるなら</h2>
          <p className="text-slate-600 leading-relaxed text-sm mb-3">フリーランス（業務委託）でインフラ・クラウド案件に関わりたい場合は、案件紹介エージェントが選択肢です。当サイトでレビューしている<Link href="/review/relance/" className="text-petrol hover:underline">relance</Link>はSRE領域のテックカンパニー（スリーシェイク）が運営し、自社開発・プライム案件中心でフルリモート案件70%以上（公式表記）とされ、SRE・クラウド領域と相性があります。<Link href="/review/geechs/" className="text-petrol hover:underline">geechs</Link>もリモート案件比率が高い二次情報があります。いずれも面談で対象領域を必ず確認してください。フリーランス全体の選び方は<Link href="/compare/freelance-agents/" className="text-petrol hover:underline">フリーランスエージェント比較</Link>を参照してください。</p>
        </section>

        <section id="skill" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">クラウド・スキル別の探し方</h2>
          <p className="text-slate-600 leading-relaxed text-sm mb-3">インフラ・クラウドは扱う技術によって相性の良い探し方が変わります。当サイトでは<Link href="/skill/infrastructure/" className="text-petrol hover:underline">インフラ</Link>、<Link href="/skill/aws/" className="text-petrol hover:underline">AWS</Link>、<Link href="/skill/gcp/" className="text-petrol hover:underline">GCP</Link>、<Link href="/skill/azure/" className="text-petrol hover:underline">Azure</Link>、<Link href="/skill/terraform/" className="text-petrol hover:underline">Terraform</Link>、<Link href="/skill/kubernetes/" className="text-petrol hover:underline">Kubernetes</Link>のスキルガイドで市場・年収・求人の探し方を整理しています。保有資格と構築・運用の実績を言語化したうえでレバテックキャリアに相談すると、提案精度が上がります。</p>
        </section>

        <section id="combo" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">併用の考え方</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "レバテックキャリアを軸に据える", desc: "IT特化で技術文脈を理解した提案を受け、インフラ・クラウド求人と高年収帯を確保する。" },
                { num: "2", title: "リクルート／dodaで母数を最大化", desc: "求人数最大級の総合大手で、地方も含め母数を広げる。dodaは自分でも検索できる。" },
                { num: "3", title: "上流はJAC／ビズリーチ", desc: "アーキテクト・SREリード・マネージャー級は、ハイクラス特化・スカウト型で交渉力と上位求人を確保する。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.num}</span>
                  <div><h3 className="font-bold text-slate-800 mb-1">{item.title}</h3><p className="text-sm text-slate-600">{item.desc}</p></div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-4">ハイクラス系の比較は<Link href="/compare/highclass/" className="text-petrol hover:underline">ハイクラスIT転職エージェント比較</Link>もご覧ください。</p>
          </div>
        </section>

        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">クラウド移行・SRE・基盤運用の需要は構造的に高く、インフラ・クラウドは経験を積んだミドルが価値を発揮しやすい領域です。経済産業省「IT人材需給に関する調査」（2019年3月公表の試算）では2030年に最大約79万人のIT人材不足が見込まれ、信頼性・スケーラビリティを担える人材の需要は続くと考えられます。</p>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm"><strong>30代の場合：</strong>主要クラウドの設計・運用経験と資格を武器に、レバテックキャリアを軸に母数を広げましょう。レバテック公表（2025年）では正社員SEで30代約499万円が一つの目安で、現年収との差が交渉材料になります。</p>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm"><strong>40代の場合：</strong>大規模基盤の設計・運用やマネジメント経験は、JACリクルートメント（主に30〜50代対象）やビズリーチのハイクラス求人で強く評価されます。レバテック公表（2025年）では40代の年収1,000万円以上の割合は12.67%とされ、上流・専門領域で上限を狙える層です。上位ポジションを狙いつつ、母数はレバテック/リクルートで確保してください。</p>
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
          <h2 className="text-xl font-bold mb-3">インフラ・クラウドは「IT特化×母数×ハイクラス」で選ぶ</h2>
          <p className="text-blue-100 text-sm mb-4">レバテックキャリアを軸に、リクルート/dodaで母数、JAC/ビズリーチで上位ポジション。いずれも無料です。</p>
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
