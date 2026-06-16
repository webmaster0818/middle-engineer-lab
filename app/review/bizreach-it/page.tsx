import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "ビズリーチのエンジニア評判・口コミ｜有料プランと無料の使い方",
  description:
    "ビズリーチのエンジニア向け評判を30代・40代目線で徹底解説。有料プラン（Web決済5,478円/月・2022年11月改定）の要否と、無料会員でできる範囲を正直に整理。ハイクラス・スカウト型の実態を口コミ傾向と実データで検証します。",
};

const PAGE_TITLE = "ビズリーチのエンジニア評判・口コミ｜有料プランと無料の使い方";
const PAGE_DESC =
  "ビズリーチのエンジニア向け評判を30代・40代目線で徹底解説。有料プラン（Web決済5,478円/月・2022年11月改定）の要否と、無料会員でできる範囲を正直に整理。ハイクラス・スカウト型の実態を口コミ傾向と実データで検証します。";

const toc = [
  { id: "summary", label: "結論：ビズリーチ（エンジニア）はこんな人向け" },
  { id: "basic", label: "基本データ表（2026年6月時点）" },
  { id: "pricing", label: "有料プランと無料会員の違い（正直版）" },
  { id: "strengths", label: "特徴・強み" },
  { id: "good", label: "良い評判の傾向" },
  { id: "bad", label: "悪い評判の傾向" },
  { id: "countermeasure", label: "デメリットへの対処法" },
  { id: "midcareer", label: "30代・40代エンジニアの活用戦略" },
  { id: "checklist", label: "向いている人／向いていない人" },
  { id: "flow", label: "登録から内定までの5ステップ" },
  { id: "compare", label: "他社との比較・使い分け" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basicData: [string, string][] = [
  ["運営会社", "株式会社ビズリーチ（ビジョナル株式会社グループ・東証プライム上場）"],
  ["サービス開始", "2009年4月（二次情報）"],
  ["規模", "累計導入企業41,800社以上・登録ヘッドハンター9,700人以上・登録者282万人（2025年4月時点・二次）"],
  ["形態", "ハイクラス・スカウト型（ヘッドハンター／企業から直接スカウト）"],
  ["ハイクラス定義", "年収750万円以上（二次情報）"],
  ["得意領域", "ハイクラスIT・外資・管理職／年収1,000万円以上求人が全体の約4割（二次）"],
  ["料金", "無料会員あり／有料プランはWeb決済5,478円/月（2022年11月改定・二次）"],
];

const goodPoints = [
  "高年収・ハイクラス求人が豊富だという声",
  "スカウト経由でキャリアアップにつながったという声",
  "市場価値を客観的に把握できるという声",
];

const badPoints = [
  "スカウトの質にばらつきがあるという声",
  "経歴次第ではスカウトが届きにくいという声",
  "有料プラン前提に感じる、という不満の声",
];

const suitedFor = [
  "現年収750万円以上、またはそれに近いミドル〜ハイクラス層",
  "CTO/VPoE/テックリードなど技術マネジメントを志向する人",
  "外資・管理職・上流ポジションを視野に入れている人",
  "今すぐ転職しなくても自分の市場価値を把握しておきたい人",
];

const notSuitedFor = [
  "現年収が低めで、まず求人母数を確保したい若手・中堅層",
  "手厚い伴走サポートで受け身に進めたい人（基本は自走型）",
  "地方求人を中心に探したい人（ハイクラスは都市圏・リモート中心）",
  "月額の費用負担を一切したくないが、有料機能まで使いたい人",
];

const steps = [
  {
    title: "1. 無料会員登録・職務経歴の入力",
    body: "まず無料会員として登録し、職務経歴書を充実させます。使用技術・マネジメント経験・プロジェクト規模を具体的に書くほどスカウトの質が上がります。",
  },
  {
    title: "2. 審査・公開設定",
    body: "登録情報をもとに審査があり、通過後にスカウトを受け取れる状態になります。現職企業などに見られたくない場合はブロック設定も可能です。",
  },
  {
    title: "3. スカウトの受信・選別",
    body: "企業やヘッドハンターからスカウトが届きます。企業発の本気度が高いスカウトは書類選考免除で面談に進めるケースもあります。スカウト元の実績を見て選別しましょう。",
  },
  {
    title: "4. ヘッドハンター面談・応募",
    body: "ヘッドハンター経由の場合は面談でキャリアの棚卸しをし、マッチする求人へ応募します。IT領域に強いヘッドハンターを選ぶのがポイントです。",
  },
  {
    title: "5. 選考・内定・条件交渉",
    body: "選考を経て内定後、年収などの条件交渉に進みます。ハイクラス帯のため、現年収を起点にした交渉余地が大きいのも特徴です。",
  },
];

const compareLinks = [
  { name: "ビズリーチ と レバテック の比較", href: "/compare/bizreach-vs-levtech/" },
  { name: "ハイクラス向けエージェント比較", href: "/compare/highclass/" },
  { name: "40代向けエージェント比較", href: "/compare/40s-agents/" },
  { name: "年収アップ実績ランキング", href: "/compare/salary-ranking/" },
  { name: "30代におすすめのエージェント比較", href: "/compare/30s-agents/" },
];

const relatedLinks = [
  { name: "レバテックキャリアの評判レビュー", href: "/review/levtech/" },
  { name: "リクルートエージェントITの評判レビュー", href: "/review/recruit-it/" },
  { name: "スカウト型サービスの活用法", href: "/knowledge/scout/" },
  { name: "自分の市場価値の調べ方", href: "/knowledge/market-value/" },
  { name: "40代エンジニアの年収相場", href: "/knowledge/salary-40s/" },
  { name: "PMからCTOへのキャリアパス", href: "/career/pm-to-cto/" },
];

const faqs = [
  {
    q: "ビズリーチは無料で使えますか？",
    a: "無料会員として登録でき、スカウトの受信などは無料の範囲でも利用できます。ただし、すべてのスカウトの閲覧・返信や一部の求人検索機能は有料プランの対象となる場合があります。まずは無料会員で登録し、自分宛のスカウト状況を見てから有料プランの要否を判断するのがおすすめです。",
  },
  {
    q: "有料プランの料金はいくらですか？",
    a: "有料プランはWeb決済で月額5,478円（税込）です（2022年11月改定・二次情報）。プラン内容や金額は変更される場合があるため、最新の料金は公式サイトでご確認ください。費用負担が発生するサービスのため、無料の範囲で十分かをまず見極めることをおすすめします。",
  },
  {
    q: "無料のままでも転職できますか？",
    a: "無料会員でもスカウトの受信は可能なため、届いたスカウトに対応する形で転職活動を進めることはできます。受け取るスカウトの量や、自分から積極的に求人検索・応募したいかによって、有料プランの価値が変わります。まず無料で運用し、必要に応じて短期間だけ有料を使う、という使い方も現実的です。",
  },
  {
    q: "年収いくらからビズリーチを使うべきですか？",
    a: "二次情報ではハイクラスの定義が年収750万円以上とされています。現年収がこのライン以上、あるいは近い水準であればスカウトが届きやすく、強みを活かしやすい傾向です。年収が低めの場合はスカウトが限られることがあるため、求人数の多い他社の併用が現実的です。",
  },
  {
    q: "エンジニア向けの求人は多いですか？",
    a: "ハイクラスIT領域に強く、年収1,000万円以上の求人が全体の約4割を占めるとの二次情報があります。CTO・VPoE・テックリードなどの技術マネジメント職や、外資・管理職ポジションが充実しているとされています。",
  },
  {
    q: "スカウトが来ないときはどうすればいい？",
    a: "経歴次第ではスカウトが届きにくいという声があります。職務経歴書に使用技術・マネジメント経験・プロジェクト規模・成果を具体的に追記すると改善が期待できます。それでも届きにくい場合は、現時点ではエージェント型サービスの併用が向いている可能性があります。",
  },
  {
    q: "ヘッドハンターとは何ですか？",
    a: "ビズリーチに登録している転職エージェント（コンサルタント）のことです。あなたの経歴を見てスカウトを送り、マッチする求人を紹介します。スカウト元の実績やIT領域での強みを確認して選ぶのがポイントです。",
  },
  {
    q: "他のエージェントと併用できますか？",
    a: "可能です。スカウト型のビズリーチで市場価値とハイクラス求人を探りつつ、IT特化のレバテックキャリアや求人数の多いリクルートエージェントITを併用すると、攻め方の幅が広がります。",
  },
  {
    q: "退会・有料プランの解約はできますか？",
    a: "退会・有料プランの解約はいずれもマイページの設定から手続きできます。有料プランは自動更新となる場合があるため、利用を続けない場合は更新日前に解約手続きを行いましょう。",
  },
];

export default function BizreachItReview() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/review/bizreach-it/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "レビュー", href: "/#ranking" },
          { name: "ビズリーチ(IT)" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          ビズリーチのエンジニア評判・口コミ【有料プランと無料の使い方を正直に解説】
        </h1>
        <p className="text-slate-500 text-sm mb-2">最終更新: 2026年6月 | ハイクラス・スカウト型の実態と料金を30代40代視点で検証</p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          ビズリーチは、株式会社ビズリーチ（ビジョナルグループ・東証プライム上場）が運営するハイクラス向けスカウト型転職サービスです。本記事では「有料プラン前提では？」という疑問に正直に答えつつ、無料会員でできる範囲と、30代・40代エンジニアにとっての向き不向きを口コミの傾向と公開データから整理します。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={["ビズリーチ公式会社概要", "ミライトーチ・morejob等の口コミメディア集計（規模・料金は二次情報、2025年4月／2022年11月時点）"]}
        />

        {/* 結論サマリ */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-xl font-bold text-blue-900 mb-3">結論：ビズリーチ（エンジニア）はこんな人向け</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              総合評価は <span className="font-bold">★★★★☆（4.0 / 5.0・当サイト編集部の総合判断）</span>。
              <span className="font-bold">「現年収750万円前後以上で、ハイクラス・技術マネジメント職や市場価値の把握を狙うミドルエンジニア」</span>に向いています。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・年収1,000万円以上の求人が全体の約4割（二次情報）というハイクラス特化が最大の強み</li>
              <li>・スカウト型なので、まず無料会員で登録して自分宛のスカウト状況を見るのが正しい入口</li>
              <li>・有料プランはWeb決済5,478円/月（2022年11月改定・二次）。無料で足りるかをまず見極めるのが大切</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav aria-label="目次" className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-petrol-deep">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 基本データ表 */}
        <section id="basic" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ表（2026年6月時点）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {basicData.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            ※規模・ハイクラス比率・料金は二次情報（規模は2025年4月時点、料金改定は2022年11月）です。料金・プラン内容は変更される場合があるため、最新情報は公式サイトでご確認ください。
          </p>
        </section>

        {/* 料金（正直版） */}
        <section id="pricing" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">有料プランと無料会員の違い（正直版）</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-4">
            <p className="text-sm text-amber-900 leading-relaxed">
              ビズリーチは口コミで「有料プラン前提では」という不満も見られるサービスです。費用が発生する点を踏まえ、当サイトとしては
              <span className="font-bold">「まず無料会員で登録し、自分宛のスカウト状況を見てから有料の要否を判断する」</span>
              ことを正直におすすめします。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3">無料会員でできること</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">✓</span>会員登録・職務経歴の登録</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">✓</span>スカウトの受信</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">✓</span>市場価値の体感（どんな企業から声がかかるか）</li>
              </ul>
              <p className="text-xs text-slate-400 mt-3">
                ※スカウトの種類によって閲覧・返信できる範囲が異なる場合があります。詳細は公式の最新情報をご確認ください。
              </p>
            </div>
            <div className="border border-[var(--line)] rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">有料プラン（Web決済5,478円/月）</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="text-petrol shrink-0">＋</span>すべてのスカウトの閲覧・返信（範囲拡大）</li>
                <li className="flex items-start gap-2"><span className="text-petrol shrink-0">＋</span>求人検索からの自主応募などの機能</li>
                <li className="flex items-start gap-2"><span className="text-petrol shrink-0">＋</span>積極的に攻めたい人向け</li>
              </ul>
              <p className="text-xs text-slate-400 mt-3">
                ※2022年11月改定・税込5,478円/月（二次情報）。自動更新の場合があるため不要時は更新前に解約を。
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            おすすめの使い方は、<span className="font-bold">「無料で運用してスカウト量を確認し、応募を一気に進めたい時期だけ短期で有料に切り替える」</span>という運用です。費用対効果を見極めてから課金すれば、ムダな出費を抑えられます。
          </p>
        </section>

        {/* 強み */}
        <section id="strengths" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ビズリーチのIT転職における特徴・強み</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. ハイクラスIT求人に特化</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                二次情報ではハイクラスの定義が年収750万円以上とされ、年収1,000万円以上の求人が全体の約4割を占めるとされています。CTO・VPoE・テックリード・アーキテクトなどの上流ポジションが充実しており、年収アップを狙うミドルエンジニアに適しています。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. スカウト型で効率的</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                職務経歴を登録しておくだけで、企業やヘッドハンターからスカウトが届きます。忙しいエンジニアでも、待ちながら市場の反応を確認できるのが利点です。企業発の本気度が高いスカウトでは、書類選考免除で面談に進めるケースもあります。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 外資・管理職・経営層ポジションに強い</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                外資系や管理職、技術経営層のポジションに強いとされ、マネジメント経験のある40代エンジニアがキャリアの次のステージを探すのに向いています。スタートアップのCTOから大企業のIT責任職まで、幅広いハイレイヤー求人にアクセスできます。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 市場価値を客観把握できる</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                どんな企業から、どの年収帯でスカウトが届くかを通じて、自分の市場価値を客観的に把握できます。今すぐの転職予定がなくても、登録しておくことでキャリアの選択肢を可視化できる点が評価されています。
              </p>
            </div>
          </div>
        </section>

        {/* 良い評判 */}
        <section id="good" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">良い評判の傾向</h2>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            ミライトーチ・morejob等の口コミプラットフォームでは、次のような評価の声が見られます（個別の口コミ原文ではなく傾向の要約です）。
          </p>
          <ul className="space-y-2">
            {goodPoints.map((p, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-700 border border-green-200 rounded-lg px-4 py-3">
                <span className="text-green-600 shrink-0 font-bold">良</span>
                {p}
              </li>
            ))}
          </ul>
        </section>

        {/* 悪い評判 */}
        <section id="bad" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">悪い評判の傾向</h2>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            一方で、口コミメディアでは以下のような注意点も指摘されています。公平性のため、デメリットも具体的に整理します。
          </p>
          <ul className="space-y-2">
            {badPoints.map((p, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-700 border border-red-200 rounded-lg px-4 py-3">
                <span className="text-red-500 shrink-0 font-bold">注</span>
                {p}
              </li>
            ))}
          </ul>
        </section>

        {/* 対処法 */}
        <section id="countermeasure" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">デメリットへの対処法</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">スカウトの質にばらつき → スカウト元を見極める</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                ヘッドハンター経由のスカウトは、送り主の実績やIT領域での強みを確認してから返信しましょう。企業発の本気度が高いスカウトを優先することで、ミスマッチを減らせます。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">スカウトが来にくい → 職務経歴を具体化する</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                使用技術・マネジメント経験・プロジェクト規模・成果を具体的に書くとスカウト率が上がります。
                <Link href="/knowledge/scout/" className="text-petrol hover:underline">スカウトを増やす書き方</Link>
                も参考にしてください。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">有料前提に感じる → 無料運用＋他社併用</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                費用負担を抑えたい場合は無料会員で運用し、求人母数は無料で使える
                <Link href="/review/recruit-it/" className="text-petrol hover:underline">リクルートエージェントIT</Link>
                や<Link href="/review/levtech/" className="text-petrol hover:underline">レバテックキャリア</Link>
                で補完するのが効率的です。
              </p>
            </div>
          </div>
        </section>

        {/* 30代40代戦略 */}
        <section id="midcareer" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの活用戦略（当サイト独自視点）</h2>
          <div className="text-sm text-slate-600 leading-relaxed space-y-4">
            <p>
              当サイト「ミドルエンジニア転職ラボ」は30代・40代エンジニアの読者を想定しています。その視点でビズリーチの位置づけを整理します。
            </p>
            <p>
              <span className="font-bold text-slate-800">30代は「市場価値の物差し」として無料活用が基本。</span>
              レバテックの公表値（2025年）では正社員SEの30代平均年収は約499万円、年収1,000万円以上の割合は30代で8.01%とされています。現年収がハイクラス基準（年収750万円・二次情報）に届いていない場合、まずは無料会員でどんなスカウトが届くかを見て、自分の市場価値を測る使い方が現実的です。有料課金は、応募を一気に進めたい局面に絞るのが堅実です。
            </p>
            <p>
              <span className="font-bold text-slate-800">40代は「ハイクラス・管理職の主戦場」になり得る。</span>
              同公表値では40代の正社員SE平均年収は約618万円、年収1,000万円以上の割合は40代で12.67%とされ、30代より高ハイクラス層が厚いことがわかります。マネジメント経験や特定領域の専門性がある40代は、CTO/VPoEや管理職スカウトの対象になりやすく、ビズリーチを主戦場にできる可能性があります。
            </p>
            <p>
              経済産業省が2019年に公表した試算では2030年に最大約79万人のIT人材不足が見込まれており、経験豊富なミドル層の希少性は今後も高いと考えられます。ビズリーチは「待ちながら市場価値を測る」用途と相性が良いため、エージェント型の
              <Link href="/review/levtech/" className="text-petrol hover:underline">レバテックキャリア</Link>
              などと併用し、攻め（自主応募）と受け（スカウト）を両立させるのがおすすめです。
              <Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の調べ方</Link>
              も参考にしてください。
            </p>
          </div>
        </section>

        {/* チェックリスト */}
        <section id="checklist" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人／向いていない人チェックリスト</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-3">向いている人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {suitedFor.map((s, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-green-600 shrink-0">✓</span>{s}</li>
                ))}
              </ul>
            </div>
            <div className="border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-700 mb-3">向いていない人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {notSuitedFor.map((s, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-red-500 shrink-0">✕</span>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 5ステップ */}
        <section id="flow" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">登録から内定までの5ステップ</h2>
          <ol className="space-y-3">
            {steps.map((s, i) => (
              <li key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* 他社比較 */}
        <section id="compare" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">他社との比較・使い分け</h2>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            ビズリーチは「ハイクラス・スカウト型」が強みですが、求人母数やIT専門の伴走支援では他社が優れる場面もあります。目的別の比較記事も参考にしてください。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {compareLinks.map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
                {item.name} →
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">ビズリーチに無料登録する</h2>
          <p className="text-blue-100 text-sm mb-4">まずは無料会員で、どんなスカウトが届くか市場価値を確かめてみませんか？</p>
          <a href="#" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">無料登録してスカウトを受ける</a>
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

        {/* 関連記事 */}
        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedLinks.map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
