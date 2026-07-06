import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/startup-vs-enterprise/" },
  title: "スタートアップvs大企業｜エンジニアの評価軸比較とフェーズ別の違い",
  description:
    "スタートアップと大企業のエンジニア転職を評価軸で比較。フェーズ別の働き方の違い、年収データ、30代・40代の選び方を解説。後悔しないキャリア選択の判断軸を整理します。",
};

const faqs = [
  {
    q: "スタートアップの年収は大企業より低い？",
    a: "基本給は大企業が安定している一方、スタートアップはストックオプションを含めると将来的に逆転する可能性もあります。ただしストックオプションは上場や買収などの条件が満たされて初めて価値が出るもので、確実な報酬ではありません。レバテック公表の2025年データでは正社員SEの平均年収は30代約499万円・40代約618万円で、これは形態を問わない全体の水準です。基本給と将来価値を分けて評価しましょう。",
  },
  {
    q: "30代でスタートアップに転職するのは遅い？",
    a: "遅くありません。30代の実務経験はシニアエンジニアやテックリードとして即戦力に直結します。若い組織に経験をもたらす存在として歓迎される傾向があります。",
  },
  {
    q: "スタートアップのリスクはどう考えればいい？",
    a: "事業の継続性や資金調達の状況に左右されるため、安定性は大企業より低くなりがちです。一方でエンジニアは転職市場での需要が高く、経産省が2019年に公表した試算でも2030年に最大約79万人のIT人材不足とされています。資金調達フェーズ（シリーズB以降など）を確認し、リスクを抑える選び方が現実的です。",
  },
  {
    q: "大企業のエンジニアはスキルが伸びない？",
    a: "一概には言えません。大企業でもモダンな技術を扱う部署や、大規模・高トラフィックなシステムでしか得られない経験があります。逆にレガシー保守中心の部署では技術的な幅が限定されることもあるため、配属先の技術スタックと役割を事前に確認することが重要です。",
  },
  {
    q: "40代でスタートアップに転職するのは現実的？",
    a: "CTO・VPoE・テックリードなどのシニアポジションであれば十分現実的です。組織構築・技術戦略・メンタリングといった経験が求められ、これらの実績がある方は歓迎されます。",
  },
  {
    q: "ストックオプションはどう評価すべき？",
    a: "ストックオプションは上場・売却などの出口（イグジット）が実現して初めて価値になります。行使価格・付与数・ベスティング（権利確定）期間・希薄化の可能性を確認し、確実な現金報酬とは分けて評価しましょう。基本給だけで生活が成り立つかを先に確認するのが安全です。",
  },
  {
    q: "両方を経験するのは有利？",
    a: "キャリア全体で見ると、大企業で大規模システムを、スタートアップで0→1の立ち上げを経験したエンジニアは対応力の幅が広がる傾向があります。順番に正解はなく、その時点のライフステージとリスク許容度で選ぶのが現実的です。",
  },
];

const axisRows = [
  { axis: "裁量・意思決定", startup: "大きい。少人数で決定が速い", enterprise: "役割・階層により異なる。調整が多い" },
  { axis: "技術選定の自由", startup: "新しい技術を採用しやすい", enterprise: "全社標準・既存資産の制約を受けやすい" },
  { axis: "扱うシステム規模", startup: "0→1や小〜中規模が中心", enterprise: "大規模・高トラフィックを経験しやすい" },
  { axis: "成長スピード", startup: "速い。守備範囲が広がりやすい", enterprise: "体系的だが緩やかなことも" },
  { axis: "安定性", startup: "資金調達・事業状況に左右される", enterprise: "相対的に安定" },
  { axis: "報酬の構成", startup: "基本給＋ストックオプション等", enterprise: "基本給・賞与・福利厚生が中心" },
  { axis: "福利厚生・制度", startup: "整備途上のことがある", enterprise: "充実している傾向" },
  { axis: "社会的信用", startup: "ローン審査等で慎重に見られることも", enterprise: "比較的通りやすい" },
];

const phases = [
  { phase: "シード／アーリー期", desc: "プロダクト検証段階。少人数で1人の裁量が非常に大きい。事業の不確実性が高く、報酬は基本給が抑えめでストックオプション比率が高めになりがち。0→1経験を積みたい人向け。" },
  { phase: "シリーズA〜B（拡大初期）", desc: "プロダクトに手応えが出て組織が拡大する段階。採用・体制づくりが活発で、テックリードや基盤づくりの役割が増える。リスクとリターンのバランスを取りたい人が狙いやすいフェーズ。" },
  { phase: "シリーズC以降／上場準備期", desc: "事業が成長し体制が整い始める。大企業に近い安定感が出る一方、立ち上げ初期ほどの裁量は薄れることも。安定とスタートアップらしさの両取りを狙う層に向く。" },
  { phase: "大企業（成熟期）", desc: "事業・組織が確立。大規模システム、体系的な制度、福利厚生が強み。レガシー保守か先進部署かで経験の質が大きく変わるため、配属先の見極めが重要。" },
];

export default function StartupVsEnterprisePage() {
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
        title="スタートアップvs大企業｜エンジニアの評価軸比較とフェーズ別の違い"
        description="スタートアップと大企業のエンジニア転職を評価軸で比較。フェーズ別の違い、年収データ、30代・40代の選び方を解説します。"
        url="/knowledge/startup-vs-enterprise/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "スタートアップvs大企業" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          スタートアップvs大企業｜エンジニアの評価軸比較とフェーズ別の違い
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | エンジニアのキャリア選択ガイド
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表の年代別平均年収（2025年）",
            "経済産業省 IT人材需給に関する調査（2019年公表）",
          ]}
        />

        {/* 結論ファースト */}
        <section className="mb-10">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：年収の額面ではなく「裁量・経験・安定性」の優先順位で選ぶ</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-2">
              スタートアップと大企業は優劣ではなく相性です。<strong>裁量・0→1経験・成長スピードを求めるならスタートアップ、大規模システム経験・安定・福利厚生を求めるなら大企業</strong>が基本軸です。スタートアップの報酬はストックオプションを含むことがありますが、これは出口が実現して初めて価値になる不確実なものなので、基本給と分けて評価します。
            </p>
            <p className="text-sm text-blue-900 leading-relaxed">
              30代・40代では、ライフイベントとリスク許容度を踏まえ、スタートアップなら資金調達フェーズ（シリーズB以降など）を確認して選ぶと、リスクを抑えつつチャレンジできます。
            </p>
          </div>
        </section>

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ul className="space-y-2 text-sm text-petrol-deep">
            <li><a href="#axis" className="hover:underline">評価軸で見る比較表</a></li>
            <li><a href="#salary" className="hover:underline">年収・報酬の考え方</a></li>
            <li><a href="#phase" className="hover:underline">フェーズ別の違い（シード〜大企業）</a></li>
            <li><a href="#fit" className="hover:underline">向いている人・向いていない人</a></li>
            <li><a href="#middle" className="hover:underline">30代・40代の選び方</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問</a></li>
          </ul>
        </nav>

        {/* 評価軸比較表 */}
        <section id="axis" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">評価軸で見る比較表</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「どっちが良いか」ではなく「自分が何を重視するか」で見ると判断しやすくなります。主要な評価軸ごとの傾向を整理しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">評価軸</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">スタートアップ</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">大企業</th>
                </tr>
              </thead>
              <tbody>
                {axisRows.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-3 py-3 border border-slate-200 font-medium">{row.axis}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.startup}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 一般的な傾向であり、同じ区分でも企業・フェーズ・部署により大きく異なります。</p>
        </section>

        {/* 年収・報酬の考え方 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収・報酬の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            年収はスタートアップか大企業かという区分よりも、企業の給与テーブルとポジションで決まります。客観的な基準として、まず全体の年収水準を押さえておきましょう。
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            {[
              { age: "20代", v: "約378万円" },
              { age: "30代", v: "約499万円" },
              { age: "40代", v: "約618万円" },
              { age: "50代", v: "約685万円" },
            ].map((d, i) => (
              <div key={i} className="bg-petrol-soft rounded-lg p-4 text-center">
                <p className="text-xs text-petrol mb-1">{d.age} 正社員SE</p>
                <p className="text-lg font-bold text-petrol-deep">{d.v}</p>
              </div>
            ))}
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-4">
            <p className="text-sm text-slate-600 leading-relaxed">
              レバテック公表の2025年データによる正社員SEの平均年収です（形態を問わない全体値）。スタートアップではこれに加えてストックオプションが提示されることがありますが、出口が実現するまでは現金にならない不確実な報酬です。<strong>基本給で生活が成り立つかをまず確認し、ストックオプションは「上振れの可能性」として別枠で評価</strong>するのが安全です。
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <h3 className="font-bold text-amber-900 mb-2">ストックオプションで確認すべき点</h3>
            <ul className="space-y-2 text-sm text-amber-900">
              <li>- 付与数・行使価格・想定される株価</li>
              <li>- ベスティング（権利確定）期間と退職時の扱い</li>
              <li>- 今後の資金調達による希薄化の可能性</li>
              <li>- 出口（上場・売却）の現実性</li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 mt-3">出典: レバテック公表の年代別平均年収（2025年・正社員SE）。数値は時点により変動します。</p>
        </section>

        {/* フェーズ別 */}
        <section id="phase" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フェーズ別の違い（シード〜大企業）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「スタートアップ」とひとくくりにせず、資金調達フェーズで見ると裁量・安定性・報酬構成の違いが見えてきます。
          </p>
          <div className="space-y-4">
            {phases.map((p, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{p.phase}</h3>
                <p className="text-sm text-slate-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 向き不向き */}
        <section id="fit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人・向いていない人</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-[var(--line)] rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">スタートアップ向き</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  "新しい技術に積極的にチャレンジしたい",
                  "裁量を持って自分で意思決定したい",
                  "プロダクトの0→1を経験したい",
                  "成果がビジネスに直結する環境が好き",
                  "収入変動のリスクを受け入れられる",
                  "将来CTOや起業を視野に入れている",
                ].map((t, i) => (
                  <li key={i} className="flex gap-2"><span className="text-petrol">✓</span>{t}</li>
                ))}
              </ul>
            </div>
            <div className="border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">大企業向き</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  "安定した収入と福利厚生を重視する",
                  "大規模・高トラフィックなシステムを扱いたい",
                  "体系的な制度・研修を活用したい",
                  "住宅ローン等で社会的信用が必要",
                  "ワークライフバランスを重視する",
                  "専門分野を腰を据えて深めたい",
                ].map((t, i) => (
                  <li key={i} className="flex gap-2"><span className="text-green-600">✓</span>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 30代・40代の選び方 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の選び方</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代前半：チャレンジしやすいタイミング</h3>
              <p className="text-sm text-petrol-deep">学習意欲が高く家族の状況も比較的柔軟な時期。スタートアップで0→1や裁量の大きい役割に挑戦しやすい。仮にうまくいかなくても、エンジニアの需要は高く（経産省2019年公表の試算では2030年に最大約79万人不足）リカバリーの選択肢が多い。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代後半：リスクとリターンの見極め</h3>
              <p className="text-sm text-petrol-deep">住宅ローンや子育てなどライフイベントが重なりやすい時期。スタートアップを選ぶならシリーズB以降など資金的に安定したフェーズを選ぶと、リスクを抑えつつチャレンジできる。基本給で生活が成り立つかを必ず確認する。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：経験を活かせるポジションで選ぶ</h3>
              <p className="text-sm text-petrol-deep">スタートアップならCTO・VPoE・テックリード、大企業ならDX推進・アーキテクトなど、これまでの経験を最大限活かせる役割かが判断軸。組織構築・技術戦略・メンタリングの実績を言語化しておくと選考で評価されやすい。年収戦略は<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代エンジニアの年収戦略</Link>も参照。</p>
            </div>
          </div>
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
          <h2 className="text-xl font-bold mb-3">あなたに合った転職先を見つけよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントなら、スタートアップも大企業も幅広く紹介。キャリアプランに合った企業を一緒に見つけましょう。
          </p>
          <Link
            href="/compare/agents/"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            IT転職エージェント比較を見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "30代向けエージェント比較", href: "/compare/30s-agents/" },
              { name: "40代向けエージェント比較", href: "/compare/40s-agents/" },
              { name: "エンジニアからマネジメントへ", href: "/knowledge/management/" },
              { name: "市場価値の調べ方", href: "/knowledge/market-value/" },
              { name: "副業しながら転職活動", href: "/knowledge/side-project/" },
              { name: "フリーランスvs正社員", href: "/knowledge/freelance-vs-fulltime/" },
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
