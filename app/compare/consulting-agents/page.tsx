import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/compare/consulting-agents/" },
  title: "ITコンサル転職に強いエージェントおすすめ｜選び方【2026年6月】",
  description:
    "ITコンサル・DXコンサル転職に強い転職エージェントを、当サイトに実在するサービスから根拠付きで厳選。コンサル業界特化のアクシスコンサルティング、ハイクラス両面型のJAC、スカウトのビズリーチ、母数のレバテックキャリアまで、30代40代エンジニア向けに選び方を整理します。",
};

const toc = [
  { id: "conclusion", label: "結論：ITコンサル転職はどう選ぶか" },
  { id: "point", label: "選定のポイント" },
  { id: "ranking", label: "ITコンサル転職に強いサービス" },
  { id: "from-engineer", label: "エンジニアからITコンサルへ移るには" },
  { id: "combo", label: "併用の考え方" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const services = [
  {
    rank: "本命",
    name: "アクシスコンサルティング（AXIS Agent）",
    href: "/review/axis-consulting/",
    tag: "コンサル業界特化・CxO層ネットワーク",
    reason: "コンサル業界に特化した転職エージェント（サービス名はAXIS Agent／旧称アクシスコンサルティング）。運営は2002年設立・2023年東証グロース上場。非公開求人比率は約77%（公開総数は確認不可）で、コンサルファーム転職・ポストコンサル・IT/DXコンサル・CxOを対象とする。コンサル業界の知識・選考対策に強く、IT/DXコンサルを狙うエンジニアの本命になりやすい。",
    fit: "ITコンサル・DXコンサルへ、業界特化の選考対策を受けて移りたい人",
  },
  {
    rank: "ハイクラス",
    name: "JACリクルートメント",
    href: "/review/jac-recruitment/",
    tag: "両面型・上場/外資/専門職",
    reason: "両面型（1人のコンサルが企業・求職者双方を担当）のハイクラス／ミドル特化。主に30〜50代が対象で年収500万円以上が目安、上場・外資系・管理職/専門職を得意領域とする。ITコンサル・DX推進ポジションの企業情報を深く把握しやすく、利用者満足度93%（二次情報）。アクシスと並べて母数と交渉力を確保したいときに有効。",
    fit: "ITコンサル・DX系の上位ポジションを交渉力込みで狙う30〜50代",
  },
  {
    rank: "スカウト",
    name: "ビズリーチ（IT）",
    href: "/review/bizreach-it/",
    tag: "ハイクラス・スカウト型",
    reason: "ハイクラス・スカウト型で、年収750万円以上をハイクラスと定義（二次情報）。年収1,000万円以上求人が全体の約4割（二次）とされ、コンサルファーム・事業会社のDXポジションからのスカウトを受けやすい。登録者282万人・登録ヘッドハンター9,700人以上（2025年4月時点・二次）で、市場価値の把握にも向く。無料会員あり。",
    fit: "ITコンサル・DXポジションをスカウト経由で広く受けたい人",
  },
  {
    rank: "母数",
    name: "レバテックキャリア",
    href: "/review/levtech/",
    tag: "IT/Web全般・高年収",
    reason: "IT・Web系全般を扱う大手の正社員転職エージェント。約5万件超（2026年6月時点・複数転職メディア集計）の求人数で、ITコンサル・SIerの上流・PM/PMOなどコンサル隣接の求人も拾える。コンサル特化ではないが、技術文脈を理解した提案で「エンジニア寄りのコンサル」を比較したいときの母数になる。",
    fit: "技術寄りのITコンサル・上流ポジションも含め母数広く比較したい人",
  },
];

const faqs = [
  { q: "ITコンサル転職に強いエージェントはどれですか？", a: "当サイトに実在するサービスでは、コンサル業界に特化したアクシスコンサルティング（AXIS Agent）が本命です。これに、上場・外資・専門職に強いハイクラス両面型のJACリクルートメント、DXポジションのスカウトが届きやすいビズリーチ、技術寄りのコンサル・上流求人の母数を確保できるレバテックキャリアを組み合わせると、ITコンサル・DXコンサルの求人を幅広く比較できます。" },
  { q: "なぜアクシスコンサルティングを本命にしているのですか？", a: "アクシスコンサルティングはコンサル業界に特化した数少ないエージェントで、コンサルファーム転職・ポストコンサル・IT/DXコンサル・CxOを対象とし、非公開求人比率は約77%（公開総数は確認不可）と業界特化の非公開求人を多く持つためです。コンサル特有の選考（ケース面接など）への対策知見があり、エンジニアからITコンサルへ移る際の伴走に向いています。運営は2002年設立・2023年東証グロース上場です。" },
  { q: "エンジニアからITコンサルへ転職できますか？", a: "可能です。SIerの上流工程・PM/PMO経験や、特定技術領域の深い専門性は、IT/DXコンサルで評価されます。コンサル特有のケース面接・論理的思考の選考対策が必要なため、業界特化のアクシスコンサルティングで対策を受けつつ、JACやビズリーチで求人の母数を広げるのが現実的です。技術職とコンサル職では評価軸が変わる点を理解して臨みましょう。" },
  { q: "ITコンサルとSIerの上流は何が違いますか？", a: "ざっくり言えば、ITコンサルは経営・業務課題の解決を起点にIT戦略・DXを設計する役割、SIerの上流はシステムの要件定義・設計・PMが中心です。境界は企業により曖昧で、レバテックキャリアやJACでは両方の求人を扱います。自分が「経営・業務課題の解決」と「システム構築の上流」のどちらに軸足を置きたいかで、狙うポジションとエージェントを選ぶのが現実的です。SIer全般の選び方はSIer転職エージェントの記事も参考にしてください。" },
  { q: "未経験からITコンサルは難しいですか？", a: "コンサルは論理的思考・課題解決力を重視し、ケース面接など独特の選考があります。IT実務経験があれば「ITに強いコンサル候補」として評価されえますが、コンサル職そのものは未経験となるため、選考対策が鍵です。業界特化のアクシスコンサルティングで対策を受けるのが近道です。創作の体験談ではなく、自分の実績に基づく相談が重要です。" },
  { q: "40代でもITコンサルに転職できますか？", a: "40代では、特定業界のドメイン知識・大規模プロジェクトのマネジメント・PMO経験などが強みとして評価されやすいです。JACリクルートメント（主に30〜50代対象）やビズリーチのハイクラス求人で上位ポジションを狙いつつ、業界特化のアクシスコンサルティングで選考対策を受けるのが現実的です。年齢より、コンサルで活かせる実績の言語化が重要です。" },
  { q: "複数登録した方がいいですか？", a: "はい。コンサル特化のアクシスコンサルティングを軸に、ハイクラスのJAC・ビズリーチ、母数のレバテックキャリアを組み合わせると、業界特化の選考対策と求人の母数・交渉力を両取りできます。いずれも無料です。同じ企業への重複応募は避け、応募状況を自分で管理しましょう。" },
];

const relatedLinks = [
  { name: "アクシスコンサルティング（コンサル特化）の評判", href: "/review/axis-consulting/" },
  { name: "JACリクルートメント（ハイクラス両面型）の評判", href: "/review/jac-recruitment/" },
  { name: "ビズリーチ（ITハイクラススカウト）の評判", href: "/review/bizreach-it/" },
  { name: "ハイクラスIT転職エージェント比較", href: "/compare/highclass/" },
  { name: "SIer転職エージェント（転職と脱出）", href: "/compare/sier-agents/" },
  { name: "IT転職エージェント比較", href: "/compare/agents/" },
];

export default function ConsultingAgentsPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="ITコンサル転職に強いエージェントおすすめ｜選び方" description="ITコンサル・DXコンサル転職に強い転職エージェントを実在サービスから根拠付きで厳選し、選び方を整理します。" url="/compare/consulting-agents/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "ITコンサル転職に強いエージェント" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">ITコンサル転職に強いエージェントおすすめ｜実在サービスから根拠付きで選ぶ</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ コンサル特化×ハイクラス×母数を組み合わせて選ぶ</p>

        <p className="text-slate-600 leading-relaxed mb-4">ITコンサル・DXコンサルへの転職は、<strong>コンサル業界に特化して選考対策ができるエージェント</strong>を軸に、ハイクラス特化で上位ポジションと交渉力を確保し、母数を総合大手で補う、という組み合わせが現実的です。コンサルはケース面接など独特の選考があり、業界知見のあるエージェントの伴走が効きます。本記事は当サイトに実在するサービスの中から、各社の公式・公表情報に基づいてITコンサルと相性の良いものを根拠付きで選定しています。架空のサービスや順位の捏造はしていません。</p>

        <DataNote surveyedAt="2026年6月" sources={["アクシスコンサルティング（AXIS Agent）公式・二次情報", "JACリクルートメント公式", "ビズリーチ二次情報", "レバテックキャリア公式系ガイド", "口コミの傾向要約"]} />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (<li key={t.id}><a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a></li>))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：ITコンサル転職はどう選ぶか</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6 mb-4">
            <p className="font-bold text-blue-900 mb-3">先に結論をお伝えします。</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li><strong>・本命は「アクシスコンサルティング」</strong>。コンサル業界特化で、ケース面接など独特の選考対策に強い。非公開求人比率約77%。</li>
              <li><strong>・ハイクラスは「JAC」「ビズリーチ」</strong>。上場・外資・DXポジションの上位求人と交渉力・スカウトを確保。</li>
              <li><strong>・母数は「レバテックキャリア」</strong>。技術寄りのITコンサル・上流（PM/PMO）も含め幅広く比較できる。</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">いずれも無料です。コンサルは選考対策の質が結果を左右するため、業界特化を軸に据え、ハイクラス・母数を併用するのが効率的です。</p>
        </section>

        <section id="point" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選定のポイント</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { t: "コンサル選考に対応できるか", d: "ケース面接・論理思考など独特の選考対策の知見があるか。業界特化のアクシスが該当。" },
              { t: "上位ポジションに届くか", d: "ITコンサル・DX系は年収帯が高い。ハイクラス特化・スカウト型で上位求人と交渉力を確保できるか。" },
              { t: "母数と技術文脈を補えるか", d: "技術寄りのコンサル・上流（PM/PMO）も視野に入れるなら、IT特化の大手で母数を補えるか。" },
            ].map((c, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2 text-sm">{c.t}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="ranking" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ITコンサル転職に強いサービス（根拠付き）</h2>
          <p className="text-slate-600 leading-relaxed text-sm mb-6">順位は「ITコンサル転職との相性」を基準に、各社の公式・公表情報に基づいて整理しています。数値はすべて出典・時点付きの公開情報です。</p>
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

        <section id="from-engineer" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニアからITコンサルへ移るには</h2>
          <p className="text-slate-600 leading-relaxed text-sm mb-3">エンジニアからITコンサル・DXコンサルへの転職では、技術力に加えて「課題解決・論理的思考・対人折衝」が評価軸に加わります。SIerの上流工程・PM/PMO経験や、特定業界のドメイン知識は強力な武器になります。一方、コンサル特有のケース面接や、成果主義・稼働の前提は技術職と異なるため、選考対策と働き方の理解が欠かせません。</p>
          <p className="text-slate-600 leading-relaxed text-sm mb-3">業界特化のアクシスコンサルティングで選考対策を受けつつ、JAC・ビズリーチで母数と交渉力を確保し、技術寄りのコンサル・上流はレバテックキャリアで比較する、という多段構えが現実的です。「IT/DXコンサル」と「SIerの上流」は境界が曖昧なため、SIer全般の選び方を扱う<Link href="/compare/sier-agents/" className="text-petrol hover:underline">SIer転職エージェントの記事</Link>もあわせて参照すると、自分の軸足を整理しやすくなります。</p>
        </section>

        <section id="combo" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">併用の考え方</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "アクシスコンサルティングを軸に据える", desc: "コンサル業界特化の非公開求人と、ケース面接など独特の選考対策を受ける。" },
                { num: "2", title: "JAC／ビズリーチでハイクラスを確保", desc: "上場・外資・DXポジションの上位求人と交渉力・スカウトを広げる。" },
                { num: "3", title: "レバテックキャリアで母数と技術文脈を補う", desc: "技術寄りのITコンサル・上流（PM/PMO）も比較し、エンジニア寄りの選択肢を確保する。" },
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
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">DX推進の需要を背景に、技術が分かるコンサル人材の価値は高まっています。30代・40代のエンジニアは、実装経験に加えて上流・マネジメント・ドメイン知識を武器に、ITコンサル・DXコンサルへ移る選択肢を取りやすい立場です。ただしコンサルは評価軸と働き方が技術職と異なるため、選考対策と前提の理解が成功の鍵になります。</p>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm"><strong>30代の場合：</strong>上流工程・PM経験を起点に、課題解決力を言語化してコンサルへ移りやすい年代です。アクシスコンサルティングで選考対策を受け、JAC・ビズリーチで母数を広げましょう。レバテック公表（2025年）では正社員SEで30代約499万円が一つの目安で、ITコンサルはこれを上回るレンジも狙えます。</p>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm"><strong>40代の場合：</strong>特定業界のドメイン知識・大規模PJのマネジメント・PMO経験が強く評価されます。JACリクルートメント（主に30〜50代対象）やビズリーチで上位ポジションを狙いつつ、業界特化の選考対策で通過率を高めるのが現実的です。レバテック公表（2025年）では40代の年収1,000万円以上の割合は12.67%とされ、上流・コンサルで上限を狙える層です。経済産業省「IT人材需給に関する調査」（2019年3月公表の試算）では2030年に最大約79万人のIT人材不足が見込まれ、DX人材の需要は構造的に強いと考えられます。</p>
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
          <h2 className="text-xl font-bold mb-3">ITコンサルは「コンサル特化×ハイクラス×母数」で選ぶ</h2>
          <p className="text-blue-100 text-sm mb-4">アクシスコンサルティングを軸に、JAC/ビズリーチで上位ポジション、レバテックキャリアで母数。いずれも無料です。</p>
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
