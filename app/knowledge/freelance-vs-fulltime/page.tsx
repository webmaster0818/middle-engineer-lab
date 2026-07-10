import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/freelance-vs-fulltime/" },
  title: "フリーランスvs正社員｜エンジニアの税・保険・信用の違いと判断軸",
  description:
    "エンジニアのフリーランスと正社員を比較。税金・社会保険・社会的信用の違い、年収データ、判断フレームワークを30代・40代向けに解説。後悔しない働き方選びの軸を整理します。",
};

const faqs = [
  {
    q: "フリーランスの方が手取りは増える？",
    a: "額面の単価が上がっても、社会保険料や税金、経費を自己負担するため、手取りが必ず増えるとは限りません。正社員は社会保険料の半分を会社が負担し、福利厚生も額面に表れない価値があります。額面だけでなく「手取り」と「会社負担分・福利厚生」を合わせて比較することが重要です。",
  },
  {
    q: "正社員エンジニアの平均年収はどのくらい？",
    a: "レバテック公表の2025年データでは、正社員SEの平均年収は20代約378万円・30代約499万円・40代約618万円・50代約685万円です。年収1,000万円以上の割合は30代で約8.0%、40代で約12.7%とされています（時点により変動）。フリーランスの報酬は案件・稼働・スキルで大きく変わるため、一律の平均では表しにくい点に注意が必要です。",
  },
  {
    q: "フリーランスは社会保険や年金で不利になる？",
    a: "会社員の厚生年金・健康保険に対し、フリーランスは国民年金・国民健康保険が基本となり、保険料が全額自己負担になります。将来の年金額や保障の手厚さで差が出るため、iDeCoや国民年金基金、小規模企業共済などで補う設計を検討する人もいます。",
  },
  {
    q: "フリーランスになると住宅ローンや賃貸は不利？",
    a: "一般に、フリーランスは収入の安定性の証明が難しく、住宅ローン審査では開業後の実績年数を求められる傾向があります。賃貸契約でも審査が慎重になることがあります。住宅購入や引っ越しの予定がある場合は、正社員のうちに済ませておくという選択肢もあります。",
  },
  {
    q: "40代からフリーランスに転向しても仕事はある？",
    a: "経験を要する設計・テックリード・大規模改修などでは、シニアの経験が評価される傾向があります。ただし案件の波や契約の途切れリスクはゼロではないため、複数のエージェントに登録し、早めに次の案件を探す動きが安全です。経産省が2019年に公表した試算では2030年に最大約79万人のIT人材不足とされ、需要面の追い風はあります。",
  },
  {
    q: "正社員に戻ることはできる？",
    a: "可能です。フリーランス期間の経験は実務経験として評価されることが多く、スキルの幅が広がった状態で正社員に復帰する人もいます。戻る前提があるなら、ブランクを作らず実績を言語化しておくと選考で有利です。",
  },
  {
    q: "迷ったらまず何をすべき？",
    a: "まず転職エージェントで「正社員としての市場価値（提示年収レンジ）」を把握し、その上でフリーランスの想定単価と手取り・保障の差を比較するのがおすすめです。判断材料を揃えてから決めることで、感情ではなく条件で選べます。",
  },
  {
    q: "フリーランス向けのエージェントはある？",
    a: "あります。当サイトではフリーランス向けエージェントの比較記事も用意しています。正社員からの転向を迷う段階なら、まず正社員向けエージェントで市場価値を確認してから判断するのが安全です。",
  },
];

const compareRows = [
  { item: "報酬の決まり方", free: "案件単価×稼働。スキル・実績で変動", full: "給与テーブル・等級で安定" },
  { item: "社会保険", free: "国民年金・国保が基本。全額自己負担", full: "厚生年金・健保。会社が半額負担" },
  { item: "税金", free: "確定申告が必要。経費計上が可能", full: "源泉徴収・年末調整が基本" },
  { item: "退職金・賞与", free: "なし（共済等で自助）", full: "あり（企業による）" },
  { item: "有給・休暇", free: "休み=収入減になりやすい", full: "有給制度あり" },
  { item: "社会的信用", free: "ローン・賃貸審査で実績年数を要する傾向", full: "比較的通りやすい" },
  { item: "案件・仕事の選択", free: "自分で選べる（自由度高い）", full: "配属・異動の影響を受ける" },
  { item: "収入の安定性", free: "案件状況により変動", full: "毎月安定" },
  { item: "スキルアップ", free: "自己責任・自己投資", full: "研修・OJT等の機会がある場合も" },
];

const taxPoints = [
  { title: "社会保険（厚生年金・健保 vs 国民年金・国保）", desc: "正社員は厚生年金・健康保険で保険料を労使折半。フリーランスは国民年金・国民健康保険が基本で全額自己負担。将来の年金額や傷病時の保障にも差が出るため、iDeCo・付加年金・国民年金基金などで補う検討が必要。" },
  { title: "税金（年末調整 vs 確定申告）", desc: "正社員は会社が源泉徴収・年末調整を行う。フリーランスは自分で確定申告し、経費を計上できる一方、帳簿付け・納税の管理は自己責任。税の取り扱いは状況で異なるため、税理士・税務署への確認が安全。" },
  { title: "信用（ローン・賃貸・カード）", desc: "フリーランスは収入の安定性の証明が難しく、住宅ローンでは開業後の実績年数を求められる傾向。住宅購入・引っ越し・大型ローンの予定がある場合は、正社員のうちに済ませる選択も。" },
];

export default function FreelanceVsFulltimePage() {
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
        title="フリーランスvs正社員｜エンジニアの税・保険・信用の違いと判断軸"
        description="エンジニアのフリーランスと正社員を比較。税金・社会保険・社会的信用の違い、年収データ、判断フレームワークを30代・40代向けに解説します。"
        url="/knowledge/freelance-vs-fulltime/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "フリーランスvs正社員" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          フリーランスvs正社員｜エンジニアの税・保険・信用の違いと判断軸
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | エンジニアの働き方比較ガイド
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表の年代別平均年収（2025年）",
            "経済産業省 IT人材需給に関する調査（2019年公表）",
          ]}
        />

        {/* 直答box (P6-C2) */}
        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】エンジニアはフリーランスと正社員のどちらを選ぶべき？</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: 額面の単価だけで比べず、「手取り・保障・信用」の合計で比較するのが後悔しない判断の近道です。</strong></p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・フリーランスは社会保険料・税金・経費が自己負担で、退職金や有給もない</li><li>・正社員は社会保険の会社負担や福利厚生など、額面に表れない価値がある</li><li>・レバテック公表の2025年データでは正社員SEの平均年収は30代約499万円・40代約618万円</li><li>・まず正社員としての市場価値を把握し、フリーランスの想定単価と手取り・保障・信用の差を並べて比較する</li></ul>
          </div>
        </section>

        {/* 結論ファースト */}
        <section className="mb-10">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：額面ではなく「手取り・保障・信用」の合計で比べる</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-2">
              フリーランスと正社員は、<strong>額面の単価だけで比べると判断を誤ります</strong>。フリーランスは社会保険料・税金・経費が自己負担で、退職金や有給もありません。正社員は社会保険の会社負担や福利厚生など、額面に表れない価値があります。
            </p>
            <p className="text-sm text-blue-900 leading-relaxed">
              レバテック公表の2025年データでは正社員SEの平均年収は30代約499万円・40代約618万円。<strong>まずは正社員としての市場価値を把握し、フリーランスの想定単価と手取り・保障・信用の差を並べて比較</strong>するのが、後悔しない判断の近道です。
            </p>
          </div>
        </section>

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ul className="space-y-2 text-sm text-petrol-deep">
            <li><a href="#salary" className="hover:underline">年収データで見る前提知識</a></li>
            <li><a href="#compare" className="hover:underline">フリーランスvs正社員 比較表</a></li>
            <li><a href="#tax" className="hover:underline">税・社会保険・信用の違い</a></li>
            <li><a href="#framework" className="hover:underline">判断フレームワーク</a></li>
            <li><a href="#fit" className="hover:underline">向いている人・向いていない人</a></li>
            <li><a href="#middle" className="hover:underline">30代・40代視点での判断</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問</a></li>
          </ul>
        </nav>

        {/* 年収データ */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データで見る前提知識</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            判断の出発点として、正社員エンジニアの年収水準を押さえておきましょう。フリーランスの報酬は案件・稼働・スキルで大きく変わるため一律の平均では表しにくく、まずは正社員の客観データを基準にするのが現実的です。
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
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <p className="text-sm text-slate-600 leading-relaxed">
              レバテック公表の2025年データによる正社員SEの平均年収です。年収1,000万円以上の割合は30代で約8.0%、40代で約12.7%とされています。フリーランスに転向する場合、これらの正社員水準と、想定される単価から社会保険料・税・経費を差し引いた「実質的な手取り」を比較するのが妥当です。
            </p>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典: レバテック公表の年代別平均年収（2025年・正社員SE）。数値は時点により変動します。フリーランス単価の断定値は本記事では用いていません。</p>
        </section>

        {/* 比較表 */}
        <section id="compare" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フリーランスvs正社員 比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">項目</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">フリーランス</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">正社員</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-4 py-3 border border-slate-200 font-medium">{row.item}</td>
                    <td className="px-4 py-3 border border-slate-200">{row.free}</td>
                    <td className="px-4 py-3 border border-slate-200">{row.full}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 一般的な傾向であり、契約形態・企業・個人の状況により異なります。</p>
        </section>

        {/* 税・保険・信用 */}
        <section id="tax" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">税・社会保険・信用の違い</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            額面に現れない3つの違いが、フリーランスと正社員の実質的な差を生みます。順に整理しましょう。
          </p>
          <div className="space-y-4">
            {taxPoints.map((p, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{p.title}</h3>
                <p className="text-sm text-slate-600">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">※ 税・社会保険の具体的な計算や手続きは個別の状況で異なります。正確な判断は税理士・社会保険労務士・各窓口にご確認ください。</p>
        </section>

        {/* 判断フレームワーク */}
        <section id="framework" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">判断フレームワーク</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            感覚ではなく条件で決めるために、次の手順で比較しましょう。
          </p>
          <div className="space-y-4">
            {[
              { num: "1", title: "正社員としての市場価値を把握する", desc: "転職エージェントに登録し、現在のスキルで提示される年収レンジを確認する。これが比較の基準になる。" },
              { num: "2", title: "フリーランスの想定手取りを試算する", desc: "想定単価から社会保険料・税・経費・稼働できない期間を差し引いた『実質手取り』を見積もる。額面ではなく手取りで比べる。" },
              { num: "3", title: "ライフイベントの予定を確認する", desc: "住宅購入・ローン・引っ越し・教育費など、社会的信用や安定収入が必要なイベントの予定を洗い出す。" },
              { num: "4", title: "リスク許容度を整理する", desc: "案件が途切れた場合に何か月持ちこたえられるか、貯蓄・家族構成から逆算する。" },
              { num: "5", title: "戻れる前提を確保する", desc: "正社員に戻る選択肢を残すなら、実績の言語化とスキルの陳腐化対策をしておく。" },
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
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            まず市場価値を測るなら<Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の調べ方</Link>、正社員側の年収戦略は<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代エンジニアの年収戦略</Link>も参考にしてください。
          </p>
        </section>

        {/* 向き不向き */}
        <section id="fit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人・向いていない人</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-[var(--line)] rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">フリーランス向き</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><span className="text-petrol">✓</span>特定技術に深い専門性がある</li>
                <li className="flex gap-2"><span className="text-petrol">✓</span>自己管理・自己投資ができる</li>
                <li className="flex gap-2"><span className="text-petrol">✓</span>住宅ローン等は既に組み終えている</li>
                <li className="flex gap-2"><span className="text-petrol">✓</span>収入変動に耐える貯蓄・余裕がある</li>
                <li className="flex gap-2"><span className="text-petrol">✓</span>技術に集中したい・社内政治を避けたい</li>
              </ul>
            </div>
            <div className="border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">正社員向き</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex gap-2"><span className="text-green-600">✓</span>安定収入が必要な家族構成</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span>住宅ローン・大型ローンの予定がある</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span>マネジメント・組織づくりに携わりたい</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span>福利厚生・保障を重視する</li>
                <li className="flex gap-2"><span className="text-green-600">✓</span>CTO/VPoEなど社内キャリアを目指す</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 30代・40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代視点での判断</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：ライフイベントとの兼ね合いを最優先に</h3>
              <p className="text-sm text-petrol-deep">結婚・出産・住宅購入が重なりやすい時期。社会的信用が必要なイベントの予定があるなら、正社員のうちに済ませてからフリーランスを検討する人が多い。需要面では経産省が2019年に公表した試算で2030年に最大約79万人のIT人材不足とされ、転向の選択肢自体は取りやすい環境。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：経験の市場性とリスク許容度の見極め</h3>
              <p className="text-sm text-petrol-deep">設計・テックリード・大規模改修などシニアの経験が評価されやすい一方、案件の波や契約途切れのリスクへの備えも重要。複数エージェントへの登録と、早めの次案件探しで安定性を補える。正社員に戻る道も残しておくと安心。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">年金・保障の長期設計</h3>
              <p className="text-sm text-petrol-deep">フリーランスは厚生年金がなく将来の年金額に差が出やすい。iDeCo・国民年金基金・小規模企業共済などで長期の保障を自分で設計する視点が、30代・40代では特に重要になる。</p>
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
          <h2 className="text-xl font-bold mb-3">まずは市場価値の把握から始めよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            フリーランスと正社員、どちらが自分に合うか迷ったら、まず転職エージェントで正社員としての市場価値を確認しましょう。
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
              { name: "フリーランス向けエージェント比較", href: "/compare/freelance-agents/" },
              { name: "40代エンジニア転職の現実", href: "/knowledge/40s-reality/" },
              { name: "40代エンジニアの年収戦略", href: "/knowledge/salary-40s/" },
              { name: "市場価値の調べ方", href: "/knowledge/market-value/" },
              { name: "年収交渉テクニック", href: "/knowledge/salary-negotiation/" },
              { name: "副業しながら転職活動", href: "/knowledge/side-project/" },
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
