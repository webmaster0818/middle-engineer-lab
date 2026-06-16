import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "G検定は転職に効くか｜AIジェネラリストの加点資格と年収【2026年】";
const PAGE_DESC =
  "JDLAのG検定（ジェネラリスト検定）を、AI・ディープラーニングのビジネス活用力を示す加点資格という観点から30代・40代向けに解説。受験料13,200円、合格率（JDLA公表値）、E資格との違い、実務とセットで効く理由を限界も含めて整理します。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：G検定は誰に効く資格か" },
  { id: "overview", label: "試験概要（受験料・形式・合格率）" },
  { id: "difference", label: "G検定とE資格の違い（重要）" },
  { id: "salary", label: "保有者の年収相場と注意点" },
  { id: "scenes", label: "転職で評価される具体場面" },
  { id: "jobs", label: "活きるポジション" },
  { id: "position", label: "ジェネラリスト資格としての活用戦略" },
  { id: "middle", label: "30代・40代の価値＝経験者の加点装置" },
  { id: "steps", label: "取得3ステップ／次に狙う資格" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "G検定は40代の転職で意味がありますか？",
    a: "意味があります。G検定はAI開発者ではなく『AIを事業に活かす立場（ジェネラリスト）』向けの資格で、AIの能力と限界を理解し、ビジネスに適用する基礎知識を証明します。すでにIT・企画・マネジメント経験のある30〜40代が、AI活用プロジェクトの旗振り役や橋渡し役としての素養を示す加点材料になります。ただしエンジニアとしてAIモデルを実装する力を直接保証する資格ではない点に注意が必要です。",
  },
  {
    q: "G検定の受験料はいくらですか？",
    a: "一般13,200円（税込）、学生5,500円（税込）です（JDLA公式、2026年6月時点）。『AI For Everyone』修了者向けの30%割引や、2年以内の再受験者向け50%割引などの割引制度もあります。比較的手頃な受験料で、AI・ディープラーニングの体系知識を客観的に示せる点が特徴です。",
  },
  {
    q: "G検定とE資格は何が違いますか？",
    a: "G検定は『ジェネラリスト検定』で、AIを事業に活かすビジネス層・企画層向けです。一方、E資格は『エンジニア資格』で、ディープラーニングを実装する開発者向けの別物です。さらにE資格はJDLA認定プログラムの修了が受験要件となるなど、ハードルが異なります。AIで手を動かして開発したいならE資格、AIを理解して事業に活かしたいならG検定、と役割で選び分けます（JDLA公式、2026年6月時点）。",
  },
  {
    q: "G検定の合格率はどのくらいですか？",
    a: "JDLAが公表しています。直近の2026年 第3回（2026年5月実施）では、8,305名が受験し6,843名が合格、合格率は82.40%でした（JDLA公式、2026年6月時点）。比較的高い合格率ですが、出題範囲は広く、約145問を100分（オンライン）で解く必要があるため、相応の対策は欠かせません。",
  },
  {
    q: "G検定の試験形式と受験資格は？",
    a: "受験資格に制限はなく、誰でも受験できます。試験は多肢選択式の知識問題で、オンライン（自宅）は100分・約145問、会場試験は120分・約145問です。年に複数回開催されており、申し込みから受験までのスケジュールはJDLA公式で確認できます（JDLA公式、2026年6月時点）。",
  },
  {
    q: "G検定に有効期限はありますか？",
    a: "合格そのものに失効期限はありません。ただしAI分野は技術進化が非常に速いため、合格後も継続的な学習で知識を更新することが実務上は重要です。なお、購入した受験チケットには購入から1年の有効期間がある点には注意してください（JDLA公式、2026年6月時点）。",
  },
];

const overviewTable = [
  ["主催", "JDLA（一般社団法人 日本ディープラーニング協会）"],
  ["位置づけ", "AIジェネラリスト（事業活用）向けの検定"],
  ["受験料", "一般13,200円／学生5,500円（税込・割引制度あり）"],
  ["試験形式", "多肢選択式の知識問題（オンライン／会場）"],
  ["問題数・時間", "約145問／オンライン100分・会場120分"],
  ["受験資格", "制限なし（誰でも受験可）"],
  ["合格率", "82.40%（2026年第3回・JDLA公表）"],
  ["有効期限", "合格に失効なし（チケットは購入後1年）"],
];

export default function GKenteiCertPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/cert/g-kentei/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "資格で選ぶ転職", href: "/cert/" },
          { name: "G検定" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          G検定は転職に効くか｜AIジェネラリストの加点資格と年収【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | JDLA認定G検定（ジェネラリスト検定）の転職価値を30代・40代向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          G検定（ジェネラリスト検定）は、JDLAが認定する<strong>「AIを事業に活かす立場」向けの検定資格</strong>です。本記事は「G検定を取れば転職で有利になるか」という疑問に対し、<strong>AIを実装するエンジニア向けのE資格とは別物の『AIビジネス活用の加点資格』</strong>という性格を軸に、その価値を公式情報をもとに整理します。AIモデルを実装する力を直接保証するものではないという限界も正直にお伝えします。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "JDLA 公式（jdla.org）",
            "本サイト データシート（2026年6月）",
          ]}
        />

        {/* 目次 */}
        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：G検定は誰に効く資格か</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              G検定は<strong>「AIビジネス活用の加点資格」</strong>です。AIを実装するエンジニア向けのE資格とは性格が異なり、すでにIT・企画・マネジメント経験のあるミドルが<strong>AI活用の旗振り役・橋渡し役の素養</strong>を示すのに最も効きます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>IT・企画・マネジメント経験のある30〜40代</strong>：AI活用プロジェクトの推進素養として加点される</li>
              <li>② <strong>AIを実装したいエンジニア</strong>：G検定ではなくE資格が適切（別物）</li>
              <li>③ <strong>AIの全体像を体系的に押さえたい人</strong>：能力と限界を理解する基礎づくりに最適</li>
            </ul>
          </div>
        </section>

        {/* 試験概要 */}
        <section id="overview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">試験概要（受験料・形式・合格率）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <tbody>
                {overviewTable.map(([k, v], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200 w-1/3 align-top">{k}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: JDLA 公式（jdla.org、2026年6月時点）。受験料は一般13,200円・学生5,500円（税込）で割引制度もあります。試験は多肢選択式の知識問題で、オンライン100分・会場120分、いずれも約145問。受験資格に制限はありません。合格率はJDLAが公表しており、直近の2026年 第3回（2026年5月実施）は8,305名が受験し6,843名が合格、合格率82.40%でした。合格そのものに失効期限はありません。
          </p>
        </section>

        {/* G検定とE資格の違い */}
        <section id="difference" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">G検定とE資格の違い（重要）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            JDLAには「G検定」と「E資格」という別々の検定があり、対象が明確に異なります。混同しやすいため、転職の文脈で必ず押さえておきたいポイントです。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">観点</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">G検定（ジェネラリスト）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">E資格（エンジニア）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["対象者", "AIを事業に活かす企画・マネジメント層", "ディープラーニングを実装する開発者"],
                  ["証明する力", "AIの能力と限界の理解・活用判断", "モデルの実装・開発の技術力"],
                  ["受験要件", "制限なし（誰でも受験可）", "JDLA認定プログラムの修了が前提"],
                  ["立ち位置", "AI活用の旗振り・橋渡し役", "AIエンジニアとしての専門実装"],
                ].map(([k, a, b], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{k}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{a}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: JDLA 公式（jdla.org、2026年6月時点）。AIで手を動かして開発したいならE資格、AIを理解して事業に活かしたいならG検定、と役割で選び分けるのが基本です。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">保有者の年収相場と注意点</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            G検定保有者に限定した日本国内の公的な年収統計は存在しません。したがって当サイトでは<strong>G検定単独の年収数値は提示しません</strong>。年収はAI活用・企画・マネジメント実務の深さや役割で決まり、G検定はそれを補強する位置づけと捉えるのが現実的です。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-3">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・G検定保有者限定の国内公的年収統計は<strong>存在しない（創作しない）</strong></li>
              <li>・評価される領域：<strong>AI活用企画・DX推進・データ関連の橋渡し役</strong></li>
              <li>・実態：<strong>年収は実務経験・役割で決まり、G検定はAI理解の補強材</strong></li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: 公的な水準感は国税庁「民間給与実態統計調査」の給与所得者平均461万円（令和6年分）を参考にしてください。G検定はAI活用領域で評価される検定ですが、保有者平均年収の公開データは乏しいため、当サイトでは断定を避け、実務経験との掛け算で評価することを推奨します。
          </p>
        </section>

        {/* 評価される場面 */}
        <section id="scenes" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職で評価される具体場面</h2>
          <div className="space-y-3">
            {[
              { t: "AI活用・DX推進プロジェクトへの参画", d: "AIの能力と限界を理解している証明として、活用企画やPoCの旗振り役に向く素養を示せる。" },
              { t: "技術者とビジネス側の橋渡し", d: "データサイエンティストや開発者と事業部門をつなぐ翻訳役として、共通言語の理解が評価される。" },
              { t: "AIリテラシーの客観証明", d: "用語や手法の基礎を体系的に押さえている事実が、AI関連の議論への参加力を裏付ける。" },
              { t: "学習意欲・最新技術への対応力", d: "AI分野の検定を取得した事実が、変化の速い領域へのキャッチアップ姿勢を示す。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 活きるポジション */}
        <section id="jobs" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">活きるポジション</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            G検定が土台として活きる代表的な進路です（一般的な整理。具体的な求人件数はリアルタイムで変動するため、最新は各エージェントでご確認ください）。
          </p>
          <div className="space-y-3">
            {[
              { t: "AI／DX推進・企画担当", d: "AI活用の企画・PoC推進を担う立場。AIの能力と限界の理解が、現実的な企画判断を支える。" },
              { t: "プロダクトマネージャー／PM", d: "AI機能を含むプロダクトを統括する立場。技術者と事業をつなぐ橋渡しに基礎知識が活きる。" },
              { t: "データ関連職への入口", d: "データ活用・分析チームへ関わる第一歩として、AI・機械学習の全体像の理解が役立つ。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            AI・機械学習方向のキャリアは<Link href="/skill/ai-ml/" className="text-petrol hover:underline">AI・機械学習エンジニア転職ガイド</Link>、生成AI領域は<Link href="/skill/generative-ai/" className="text-petrol hover:underline">生成AI関連の転職ガイド</Link>、マネジメント方向は<Link href="/skill/pm/" className="text-petrol hover:underline">PM・マネジメント転職ガイド</Link>を参考にしてください。
          </p>
        </section>

        {/* ジェネラリスト資格としての活用戦略 */}
        <section id="position" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ジェネラリスト資格としての活用戦略</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            G検定は「AIを実装する技術資格」ではなく「AIを事業に活かすジェネラリスト向けの加点資格」です。この前提を理解すると、エンジニア向けのE資格とは取得の狙いがまったく異なることが見えてきます。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">観点</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">E資格（エンジニア向け）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">G検定（ジェネラリスト向け）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["主な対象", "AIモデルを実装する開発者", "AIを事業に活かす企画・マネジメント層"],
                  ["狙い", "実装技術力の証明", "AI活用の判断力・橋渡し力の証明"],
                  ["受験のしやすさ", "認定プログラム修了が前提", "受験資格に制限なし・手頃な受験料"],
                  ["効き方", "AIエンジニア職での専門性", "DX推進・企画・PMでの加点"],
                ].map(([k, a, b], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{k}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{a}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            活用戦略は3つに整理できます。第一に<strong>AI活用の旗振り役としての素養証明</strong>。AIの能力と限界を理解していることを示し、DX推進やPoCの企画ポジションで評価されます。第二に<strong>技術者と事業の橋渡し</strong>。データサイエンティストや開発者と事業部門をつなぐ翻訳役として、共通言語の理解が役立ちます。第三に<strong>手頃な受験料での第一歩</strong>。受験資格に制限がなく費用も抑えめで、AIリテラシーを客観的に示す入口として取り組みやすい点が利点です。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            正直なデメリットも押さえておきましょう。G検定は<strong>AIモデルを実装する技術力を直接保証する資格ではありません</strong>。あくまでAI活用の素養を補強する位置づけで、効果が出るのは「IT・企画・マネジメント実務 × 資格」の掛け算が成立したときです。AIエンジニアとして手を動かす職を目指すなら、G検定ではなくE資格や実装経験が必要です。逆に言えば、すでに実務経験があり、AI活用の推進役へ役割を広げたい30〜40代にとっては、低コストで取り組める実利的な検定です。生成AIの実務的な活用は<Link href="/skill/generative-ai/" className="text-petrol hover:underline">生成AI関連の転職ガイド</Link>も参考になります。
          </p>
        </section>

        {/* 30-40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の価値＝経験者の加点装置</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              G検定は、AIエンジニアになるための実装資格とは<strong>立ち位置が異なります</strong>。G検定は<strong>「すでにIT・企画・マネジメントの実務がある経験者が、AI活用の推進役へ役割を広げるための加点装置」</strong>として最も効きます。AIの能力と限界を理解していることを示せるため、DX推進や企画の旗振り役を目指す30〜40代にとって価値があります。
            </p>
            <p>
              一方で過度な期待は禁物です。G検定を取っても、それ単体で年収が跳ねるわけではありません。価値が出るのは<strong>「実務経験 × 資格」の掛け算</strong>のとき。事業理解やマネジメント経験と組み合わせて初めて、AI活用企画・PMという形で結実します。また、AIエンジニアとして実装する力を保証する資格ではない点も理解しておく必要があります。
            </p>
            <p>
              年代別の市場感は<Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>、職務経歴書の作り方は<Link href="/knowledge/resume/" className="text-petrol hover:underline">エンジニアの職務経歴書</Link>も合わせてご覧ください。
            </p>
          </div>
        </section>

        {/* 取得3ステップ */}
        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">取得3ステップ／次に狙う資格</h2>
          <div className="space-y-3 mb-6">
            {[
              { n: "STEP 1", t: "AI・ディープラーニングの全体像を学ぶ", d: "機械学習の基礎・代表的な手法・AIの歴史と動向を、公式シラバスに沿って体系的に押さえる。" },
              { n: "STEP 2", t: "法規・倫理・社会実装も網羅", d: "G検定は技術だけでなくAIの社会実装・法規・倫理も出題範囲。約145問の選択式に向け過去問演習を反復する。" },
              { n: "STEP 3", t: "合格→実務やE資格で専門化", d: "合格後はAI活用企画の実務で活かすか、実装を目指すならE資格・実装学習へ進む。" },
            ].map((x, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="text-xs font-bold text-petrol shrink-0 w-14 pt-1">{x.n}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                  <p className="text-sm text-slate-600">{x.d}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            AI・機械学習の実装を深めるなら<Link href="/skill/ai-ml/" className="text-petrol hover:underline">AI・機械学習エンジニア</Link>や<Link href="/skill/python/" className="text-petrol hover:underline">Python</Link>、生成AIの活用なら<Link href="/skill/generative-ai/" className="text-petrol hover:underline">生成AI関連の転職ガイド</Link>、IT全般の土台づくりなら<Link href="/cert/applied-info/" className="text-petrol hover:underline">応用情報技術者</Link>との組み合わせも有効です。
          </p>
        </section>

        {/* FAQ */}
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

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">AI活用・DX推進職への転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            G検定で示せるAIリテラシーを活かせる企画・推進求人を、IT特化型エージェントであなたの市場価値とともに確認しましょう。
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
              { name: "AI・機械学習エンジニア転職ガイド", href: "/skill/ai-ml/" },
              { name: "生成AI関連の転職ガイド", href: "/skill/generative-ai/" },
              { name: "Pythonエンジニア転職ガイド", href: "/skill/python/" },
              { name: "PM・マネジメント転職ガイド", href: "/skill/pm/" },
              { name: "応用情報技術者の転職価値", href: "/cert/applied-info/" },
              { name: "資格で選ぶ転職トップ", href: "/cert/" },
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
    </>
  );
}
