import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "フリーランスエンジニアのエージェント比較【2026年6月】",
  description:
    "フリーランスエンジニア向けエージェントの選び方を、正社員転職との比較視点で解説。レバテックの年代別年収データを基に、独立すべきか正社員のままかを30代・40代目線で整理します。",
};

const toc = [
  { id: "conclusion", label: "結論：実力が固まった人はフリーランス検討の価値あり" },
  { id: "vs", label: "フリーランスと正社員、どちらが得か" },
  { id: "salary", label: "レバテックの年代別年収データで見る相場" },
  { id: "select", label: "フリーランスエージェントの選び方" },
  { id: "table", label: "代表的なエージェント・媒体の比較表" },
  { id: "reviews", label: "口コミの傾向（出典付き）" },
  { id: "checklist", label: "フリーランスに向いている人・向いていない人" },
  { id: "age", label: "30代・40代でフリーランス独立は遅い？" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

type Service = {
  name: string;
  type: string;
  company: string;
  field: string;
  note: string;
  href?: string;
};

const services: Service[] = [
  {
    name: "レバテックフリーランス",
    type: "フリーランス専門エージェント",
    company: "レバテック株式会社（レバレジーズグループ）",
    field: "IT/Web特化。フリーランス案件の紹介・契約サポート",
    note: "レバテックは年代別の正社員SE平均年収など年収データを公表しており、相場の目安をつかみやすい。",
    href: "/review/levtech/",
  },
  {
    name: "ビズリーチ",
    type: "ハイクラス転職（参考比較）",
    company: "株式会社ビズリーチ（ビジョナル株式会社グループ・東証プライム）",
    field: "年収750万円以上のハイクラス・スカウト型。外資・管理職に強い",
    note: "「フリーランスより高年収の正社員」を探す比較対象として。年収1,000万円以上求人が全体の約4割（二次）。",
    href: "/review/bizreach-it/",
  },
  {
    name: "Green",
    type: "成功報酬型転職サイト（参考比較）",
    company: "株式会社アトラエ（東証プライム）",
    field: "IT/Webベンチャー・スタートアップ。直接応募・カジュアル面談中心",
    note: "業務委託・副業ポジションを掲載企業と直接やり取りできる場合がある。エージェント仲介サポートはなし。",
    href: "/review/green/",
  },
];

const goodPoints = [
  { agent: "レバテックキャリア（正社員）", text: "「高年収求人が多い」「書類添削・面接対策が丁寧」「LINEで連絡が完結」という声", src: "OUTSIDEMAGAZINE・Qiita Job Change・イーデス等" },
  { agent: "ビズリーチ", text: "「高年収求人が豊富」「市場価値を客観的に把握できる」という声", src: "ミライトーチ・morejob等" },
  { agent: "Green", text: "「企業と直接やり取りでき速い」「ベンチャー求人が豊富」「カジュアル面談が好評」という声", src: "みん評等" },
];

const badPoints = [
  { agent: "レバテックキャリア（正社員）", text: "「未経験者は紹介されにくい」「初回面談後の連絡が遅い場合がある」という指摘", src: "OUTSIDEMAGAZINE・Qiita Job Change等" },
  { agent: "ビズリーチ", text: "「経歴次第でスカウトが来ない」「有料プラン前提という不満」という声", src: "talentsquare等" },
  { agent: "Green", text: "「地方求人が少ない」「エージェント支援がない」という指摘", src: "axxis・HonNe等" },
];

const fitYes = [
  "正社員として一定の実務経験があり、得意領域が固まっている",
  "案件探し・契約・単価交渉の手間をエージェントに任せたい",
  "収入の上限を自分のスキル次第で引き上げたい",
  "働く時間・場所の自由度を高めたい",
  "確定申告や社会保険の自己管理を許容できる",
];

const fitNo = [
  "未経験・経験が浅く、これから実務スキルを固める段階",
  "収入の安定・福利厚生・社会保険の会社負担を重視する",
  "住宅ローンなど審査で安定収入の証明が必要な予定がある",
  "案件の空白期間リスクを精神的に受け入れにくい",
];

const faqs = [
  { q: "フリーランスエンジニアと正社員、どちらが良い？", a: "収入の上限を自分のスキルで引き上げたいならフリーランス、安定性・福利厚生・社会保険の会社負担を重視するなら正社員が向きます。一般的には正社員で実務経験を積みスキルが固まった段階で独立を検討する流れが多く、当サイトは『まず正社員で土台を作る』ことを基本に置いています。" },
  { q: "フリーランスの年収はどのくらいが目安？", a: "案件の単価・稼働日数・領域で大きく変わるため一概には言えません。参考として、レバテックが公表する正社員SEの年代別平均年収（2025年）は30代約499万円・40代約618万円です。フリーランスはこれを上回るケースもありますが、空白期間や経費・税負担を差し引いた手取りで比較する必要があります。" },
  { q: "フリーランスエージェントは何社登録すべき？", a: "2〜3社が目安です。案件の選択肢を広げつつ、連絡や面談の管理が破綻しない社数に抑えましょう。IT/Web特化のレバテックフリーランスのような専門エージェントを軸に検討するのが一般的です。" },
  { q: "フリーランスのデメリットは？", a: "案件の空白期間リスク、確定申告・経理の手間、社会保険・年金の自己負担、ローン審査のハードルが代表的です。会社員のような有給・賞与・退職金もありません。これらを踏まえて手取りベースで正社員と比較することが大切です。" },
  { q: "30代・40代からフリーランスになるのは遅い？", a: "遅すぎることはありませんが、年齢が上がるほど『専門性』と『過去の実績』が問われやすくなります。30代・40代は得意領域が明確なほど有利で、逆に強みが曖昧なまま独立すると単価が伸びにくい傾向があります。正社員転職とフリーランス、両方の選択肢を並行して検討するのが安全です。" },
  { q: "フリーランスから正社員に戻れる？", a: "戻ることは可能です。ハイクラス採用のビズリーチや、IT特化のレバテックキャリアなど、実務経験を評価する正社員エージェントがあります。フリーランス期間の実績を職務経歴として整理しておくと、正社員転職時の交渉材料になります。" },
  { q: "エージェントを使わず直接契約はできる？", a: "GreenのようなダイレクトリクルーティングやSNS経由で企業と直接やり取りする方法もあります。ただし単価交渉・契約・支払い管理を自分で行う必要があり、初めての独立ではエージェント経由の方が手間を抑えられます。" },
  { q: "フリーランスエージェントの料金は？", a: "求職者（エンジニア側）は無料で利用できるのが一般的です。エージェントはエンド企業から受け取る金額の一部をマージンとして得る仕組みです。マージン率の扱いはサービスにより異なるため、契約前に条件を確認しましょう。" },
];

const related = [
  { name: "レバテックキャリアの評判・口コミ", href: "/review/levtech/" },
  { name: "ハイクラスIT転職エージェント比較", href: "/compare/highclass/" },
  { name: "ビズリーチの評判・口コミ", href: "/review/bizreach-it/" },
  { name: "フルリモートIT転職ガイド", href: "/area/remote/" },
  { name: "40代におすすめエージェント", href: "/compare/40s-agents/" },
  { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
];

export default function FreelanceAgentsPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="フリーランスエンジニアのエージェント比較【2026年6月】" description="フリーランスエンジニア向けエージェントの選び方を、正社員転職との比較視点でレバテックの年収データを基に解説します。" url="/compare/freelance-agents/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "フリーランスエージェント比較" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">フリーランスエンジニアのエージェント比較【2026年6月】</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | 正社員転職との比較視点で「独立すべきか」を考える</p>

        <p className="text-slate-600 leading-relaxed mb-4">「フリーランスエンジニアのエージェントを比較したい」という人の多くは、本当のところ<strong>「正社員のまま転職するか、独立するか」</strong>で迷っています。この記事は、フリーランスエージェントの選び方だけでなく、レバテックが公表する年代別年収データを使って正社員との損得を整理し、30代・40代が後悔しない判断をできるようにまとめたものです。</p>

        <DataNote surveyedAt="2026年6月" sources={["レバテック公表 年代別平均年収（2025年）", "各サービス公式サイト・会社概要", "Qiita Job Change・みん評等の口コミプラットフォーム"]} />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}><a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a></li>
            ))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-4">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：実力が固まった人はフリーランス検討の価値あり</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3 font-medium">正社員として実務経験を積み、得意領域が固まっている人は、フリーランス専門エージェント（IT/Web特化の<strong>レバテックフリーランス</strong>など）で単価を確認する価値があります。一方、経験が浅い・安定を重視する人は正社員転職が無難です。</p>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>① 収入の上限を引き上げたい・自由度を高めたい → フリーランス専門エージェントで案件と単価を確認</li>
              <li>② 安定・福利厚生・社会保険の会社負担を重視 → 正社員転職（ハイクラスはビズリーチ等）</li>
              <li>③ 迷うなら両方を並行検討し、手取りベースで比較する</li>
            </ul>
          </div>
        </section>

        <section id="vs" className="mb-10 scroll-mt-4">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フリーランスと正社員、どちらが得か</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">観点</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">フリーランス</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">正社員</th>
                </tr>
              </thead>
              <tbody className="align-top">
                <tr><td className="px-3 py-3 border border-slate-200 font-medium">収入の上限</td><td className="px-3 py-3 border border-slate-200">スキル・単価次第で伸ばしやすい</td><td className="px-3 py-3 border border-slate-200">等級・評価制度の範囲に収まりやすい</td></tr>
                <tr><td className="px-3 py-3 border border-slate-200 font-medium">安定性</td><td className="px-3 py-3 border border-slate-200">案件の空白期間リスクあり</td><td className="px-3 py-3 border border-slate-200">毎月の固定給で安定</td></tr>
                <tr><td className="px-3 py-3 border border-slate-200 font-medium">社会保険・税</td><td className="px-3 py-3 border border-slate-200">自己負担・確定申告が必要</td><td className="px-3 py-3 border border-slate-200">会社が一部負担・年末調整</td></tr>
                <tr><td className="px-3 py-3 border border-slate-200 font-medium">福利厚生・賞与</td><td className="px-3 py-3 border border-slate-200">基本なし（自分で備える）</td><td className="px-3 py-3 border border-slate-200">賞与・有給・各種手当あり</td></tr>
                <tr><td className="px-3 py-3 border border-slate-200 font-medium">ローン審査</td><td className="px-3 py-3 border border-slate-200">不利になりやすい</td><td className="px-3 py-3 border border-slate-200">通りやすい</td></tr>
                <tr><td className="px-3 py-3 border border-slate-200 font-medium">支援する窓口</td><td className="px-3 py-3 border border-slate-200">フリーランス専門エージェント</td><td className="px-3 py-3 border border-slate-200">転職エージェント（<Link href="/compare/agents/" className="text-petrol hover:underline">10社比較</Link>）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">額面の単価だけを見ると独立が有利に見えますが、経費・税・社会保険・空白期間・福利厚生の差を引いた「手取り」で比べると差は縮まります。判断は必ず手取りベースで行いましょう。</p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-4">
          <h2 className="text-xl font-bold text-slate-800 mb-4">レバテックの年代別年収データで見る相場</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">独立すべきかの判断材料として、まず正社員SEの年代別の相場を押さえます。以下はレバテックが公表する正社員SEの平均年収（2025年）です。フリーランスの単価を、この相場を「超えられるか」で評価すると判断しやすくなります。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[520px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">年代</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">正社員SE平均年収（2025年・レバテック公表）</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">年収1,000万円以上の割合</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="px-3 py-3 border border-slate-200 font-medium">20代</td><td className="px-3 py-3 border border-slate-200">約378万円</td><td className="px-3 py-3 border border-slate-200">—</td></tr>
                <tr><td className="px-3 py-3 border border-slate-200 font-medium">30代</td><td className="px-3 py-3 border border-slate-200 font-bold text-petrol">約499万円</td><td className="px-3 py-3 border border-slate-200">8.01%</td></tr>
                <tr><td className="px-3 py-3 border border-slate-200 font-medium">40代</td><td className="px-3 py-3 border border-slate-200 font-bold text-petrol">約618万円</td><td className="px-3 py-3 border border-slate-200">12.67%</td></tr>
                <tr><td className="px-3 py-3 border border-slate-200 font-medium">50代</td><td className="px-3 py-3 border border-slate-200">約685万円</td><td className="px-3 py-3 border border-slate-200">—</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: レバテック公表の年代別平均年収（2025年）。フリーランスの手取りがこの正社員相場を継続的に上回れるかが、独立判断の一つの目安になります。</p>
        </section>

        <section id="select" className="mb-10 scroll-mt-4">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フリーランスエージェントの選び方</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">1. 自分の得意領域の案件を多く扱うか</h3>
              <p>IT/Web特化のフリーランスエージェントは、得意領域（バックエンド、フロントエンド、インフラ等）の案件が集まりやすい傾向です。まずは自分のスキルと合う領域に強いサービスを選びましょう。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">2. 契約・単価交渉のサポートがあるか</h3>
              <p>初めての独立では、契約条件の確認や単価交渉を代行してもらえると安心です。サポート範囲（契約・支払い管理・福利厚生的な制度の有無）を比較しましょう。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">3. 正社員の選択肢も同時に確認する</h3>
              <p>独立か正社員かで迷う段階では、ハイクラス正社員（ビズリーチ）やIT特化の正社員エージェント（レバテックキャリア）も並行して見て、両方のオファー水準を比べるのが合理的です。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">4. 直接契約型の媒体も知っておく</h3>
              <p>Greenのような成功報酬型サイトでは企業と直接やり取りできますが、契約や支払い管理は自分で行う必要があります。仲介の手厚さと自由度のバランスで選びましょう。</p>
            </div>
          </div>
        </section>

        <section id="table" className="mb-10 scroll-mt-4">
          <h2 className="text-xl font-bold text-slate-800 mb-4">代表的なエージェント・媒体の比較表（2026年6月時点）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse min-w-[760px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">サービス</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">種別</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">運営会社</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">得意領域</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">備考</th>
                </tr>
              </thead>
              <tbody className="align-top">
                {services.map((s, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-3 py-3 border border-slate-200 font-medium">{s.href ? <Link href={s.href} className="text-petrol hover:underline">{s.name}</Link> : s.name}</td>
                    <td className="px-3 py-3 border border-slate-200">{s.type}</td>
                    <td className="px-3 py-3 border border-slate-200">{s.company}</td>
                    <td className="px-3 py-3 border border-slate-200">{s.field}</td>
                    <td className="px-3 py-3 border border-slate-200">{s.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">※ビズリーチ・Greenは「フリーランスより高年収の正社員」を比較するための参考として掲載しています。料金は求職者側は無料が一般的です。</p>
        </section>

        <section id="reviews" className="mb-10 scroll-mt-4">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミの傾向（出典付き）</h2>
          <p className="text-sm text-slate-500 mb-4">※口コミプラットフォームに見られる傾向の要約です。原文転載ではありません。</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold text-slate-700 mb-2 text-sm">良い評判の傾向</h3>
              <div className="space-y-3">
                {goodPoints.map((p, i) => (
                  <div key={i} className="border border-emerald-200 bg-emerald-50 rounded-lg p-4 text-sm">
                    <p className="font-medium text-slate-700">{p.agent}</p>
                    <p className="text-slate-600 mt-1">{p.text}</p>
                    <p className="text-xs text-slate-400 mt-1">出典: {p.src}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-slate-700 mb-2 text-sm">気になる評判の傾向</h3>
              <div className="space-y-3">
                {badPoints.map((p, i) => (
                  <div key={i} className="border border-amber-200 bg-amber-50 rounded-lg p-4 text-sm">
                    <p className="font-medium text-slate-700">{p.agent}</p>
                    <p className="text-slate-600 mt-1">{p.text}</p>
                    <p className="text-xs text-slate-400 mt-1">出典: {p.src}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="checklist" className="mb-10 scroll-mt-4">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フリーランスに向いている人・向いていない人</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-emerald-700 mb-3">向いている人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {fitYes.map((t, i) => (<li key={i} className="flex gap-2"><span className="text-emerald-500 font-bold">✓</span><span>{t}</span></li>))}
              </ul>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-500 mb-3">向いていない人（正社員が無難）</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {fitNo.map((t, i) => (<li key={i} className="flex gap-2"><span className="text-slate-400 font-bold">×</span><span>{t}</span></li>))}
              </ul>
            </div>
          </div>
        </section>

        <section id="age" className="mb-10 scroll-mt-4">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代でフリーランス独立は遅い？</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>当サイトの読者は30代・40代のミドルエンジニアが中心です。この年代の独立は「遅い」のではなく、「専門性と実績がはっきりしているほど有利」というのが実情です。レバテック公表（2025年）では40代の正社員SE平均年収が約618万円、年収1,000万円以上の割合は12.67%と、30代（8.01%）より高くなっています。つまり年齢を重ねること自体が不利なのではなく、強みが明確かどうかが分かれ目になります。</p>
            <p>一方で注意したいのは、フリーランスは正社員のような賞与・退職金・社会保険の会社負担がなく、案件の空白期間リスクも自分で背負う点です。30代・40代は住宅ローンや家族の状況など、安定が効いてくるライフイベントも多いため、額面の単価ではなく「手取り＋備え」で正社員と比較するのが安全です。</p>
            <p>現実的なおすすめは、独立を決め打ちせず、フリーランス専門エージェントと正社員エージェントの両方に相談し、提示される単価・年収を並べて判断することです。正社員側の相場感は<Link href="/compare/highclass/" className="text-petrol hover:underline">ハイクラス比較</Link>や<Link href="/compare/40s-agents/" className="text-petrol hover:underline">40代向け比較</Link>も参考になります。「いつでも正社員に戻れる実績の作り方」を意識しておくと、独立後のリスクも下げられます。</p>
          </div>
        </section>

        <section id="faq" className="mb-10 scroll-mt-4">
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
          <h2 className="text-xl font-bold mb-3">独立か正社員か、両方の数字を見て決めよう</h2>
          <p className="text-blue-100 text-sm mb-4">フリーランスの単価と正社員のオファーを並べて、手取りベースで比較するのが後悔しない近道です。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section id="related" className="scroll-mt-4">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
