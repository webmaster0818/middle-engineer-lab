import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "PM→CTO/VPoEへのキャリアパス｜必要スキルと移行ステップ",
  description:
    "プロジェクトマネージャーからCTO・VPoEへ移行するためのスキルギャップ、在職中にできる準備、職務経歴書の書き方、年収の考え方を30代・40代視点で解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：PMからの現実的な到達点はVPoE" },
  { id: "difference", label: "CTOとVPoEとEMの違い" },
  { id: "gap", label: "現職PMとのスキルギャップ比較表" },
  { id: "fit", label: "CTO/VPoEに向いているPM・向いていないPM" },
  { id: "build", label: "必要スキルの身につけ方" },
  { id: "steps", label: "移行ステップ（在職中にできる準備）" },
  { id: "resume", label: "職務経歴書での見せ方（Before/After）" },
  { id: "salary", label: "年収の考え方" },
  { id: "agent", label: "活用したい転職サービス" },
  { id: "middle", label: "30代・40代がCTO/VPoEを目指すなら" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const gapRows = [
  {
    area: "事業・技術戦略",
    pm: "プロジェクト単位の計画・進捗管理",
    target: "事業フェーズに沿った技術ロードマップ策定",
    gap: "大",
  },
  {
    area: "技術的意思決定",
    pm: "技術者に判断を委ねることが多い",
    target: "アーキテクチャ方針・技術選定の最終責任",
    gap: "大",
  },
  {
    area: "組織マネジメント",
    pm: "プロジェクトメンバーの調整・管理",
    target: "採用・評価制度・組織設計（特にVPoE）",
    gap: "中",
  },
  {
    area: "ピープルマネジメント",
    pm: "ステークホルダー間の合意形成",
    target: "1on1・育成・エンジニアのキャリア設計",
    gap: "中",
  },
  {
    area: "経営との接続",
    pm: "予算・スコープ・納期の交渉",
    target: "技術を経営課題として言語化し意思決定に関与",
    gap: "小（PM経験が活きる）",
  },
  {
    area: "採用ブランディング",
    pm: "原則として関与しない",
    target: "技術広報・登壇・採用設計の推進",
    gap: "中",
  },
];

const positionRows = [
  { pos: "スタートアップCTO", role: "技術選定・アーキテクチャ・採用まで一人で担う", path: "少人数フェーズで裁量を得て技術全体を統括" },
  { pos: "VPoE", role: "エンジニア組織の設計・採用・評価・育成", path: "PMのマネジメント経験を最も活かしやすい" },
  { pos: "EM（エンジニアリングマネージャー）", role: "1チームの技術力向上・メンタリング・進行", path: "VPoE/CTOへの中間ステップになりやすい" },
  { pos: "プロダクト責任者寄りCTO", role: "プロダクト戦略と技術意思決定の接続", path: "PM/PdM経験との親和性が高い" },
  { pos: "技術顧問・社外CTO", role: "技術戦略のアドバイザリー（副業・業務委託）", path: "実績を積みながら段階的に挑戦できる" },
];

const skills = [
  { num: "1", title: "技術理解の底上げ", desc: "コードを書く必要はなくても、アーキテクチャの選択肢（モノリス／マイクロサービス、同期／非同期、SQL／NoSQL等）の長短を自分の言葉で説明できる水準を目指します。技術ブログや設計ドキュメントを読み込み、現職のエンジニアに設計判断の理由を質問して言語化する習慣が近道です。" },
  { num: "2", title: "技術を経営言語に翻訳する力", desc: "PMが日々行っている『スコープ・コスト・納期の調整』は、CTO/VPoEの中核業務とほぼ同じ構造です。技術負債の返済を投資対効果で説明する、採用計画を事業計画と紐づける、といった翻訳力はPM経験者の強みです。" },
  { num: "3", title: "エンジニア組織マネジメント", desc: "評価制度の設計、グレード定義、1on1の運用、オンボーディング設計など。現職でメンバーの育成や評価に関わる機会があれば積極的に手を挙げ、再現可能な仕組みとして整理しておきます。" },
  { num: "4", title: "採用・技術広報", desc: "エンジニア採用は売り手市場が続いており、採用力そのものが技術組織の競争力になります。スカウト文面の改善、面接設計、技術広報（登壇・発信）への関与経験は、VPoE/CTO選考での評価材料になります。" },
  { num: "5", title: "技術トレンドの定点観測", desc: "全領域を深く追う必要はありませんが、生成AI活用、クラウドコスト最適化、セキュリティなど経営判断に直結するテーマは継続的に把握しておきます。" },
];

const steps = [
  { num: "1", title: "現職でEM/技術PM領域に踏み込む", desc: "いきなりCTOを狙うより、現職で『チームの技術力向上』『採用面接への参加』『評価への関与』など、組織マネジメント領域に意図的に関わって実績を作ります。これが最短の助走です。" },
  { num: "2", title: "意思決定への関与実績を残す", desc: "技術選定やアーキテクチャ見直しの議論に参加し、『どの判断に、どんな観点で関与したか』を記録します。CTO/VPoE選考では『何を決めたか』が問われます。" },
  { num: "3", title: "副業・技術顧問で経営に近い経験を積む", desc: "スタートアップの技術顧問や副業EMは、少人数組織で経営に近い意思決定を経験できる機会です。本業を続けながら『CxO的な動き方』を試せます。" },
  { num: "4", title: "市場価値の棚卸しとネットワーキング", desc: "CxO求人は公募より人づて・スカウト経由が多いのが実情です。スカウト型サービスへの登録とヘッドハンターとの関係構築を、在職中から進めておきます。" },
  { num: "5", title: "ポジションを絞って応募設計", desc: "CTO／VPoE／EMのどれを狙うかで、見せるべき実績が変わります。PM経験を活かすならVPoE／EMから入り、技術裁量を求めるなら少人数スタートアップCTOを狙う、と設計します。" },
];

const faqs = [
  {
    q: "PMからCTOになるにはコーディングスキルは必須？",
    a: "現役レベルの実装力は必須ではありませんが、技術的な意思決定の最終責任を負う以上、アーキテクチャや設計トレードオフを理解し、エンジニアと対等に議論できる技術理解は求められます。コードが読め、設計の妥当性を評価できる水準が一つの目安です。",
  },
  {
    q: "CTOとVPoEの違いは？",
    a: "CTOは技術戦略・技術選定・アーキテクチャ方針の責任者、VPoEはエンジニア組織のマネジメント（採用・評価・育成・組織設計）の責任者という整理が一般的です。両者の境界は企業によって異なり、スタートアップでは一人が兼ねることもあります。PMの延長線上ではVPoEの方が経験を活かしやすい傾向です。",
  },
  {
    q: "PMからCTO/VPoEになるまでの期間は？",
    a: "個人差が大きく一概には言えません。現職で組織・技術マネジメント領域の実績を作りながら、まずEM、次にVPoE/CTOと段階を踏むのが現実的です。少人数スタートアップでは、技術理解と推進力が評価されれば比較的短期で到達するケースもあります。",
  },
  {
    q: "CTO/VPoEの年収相場は？",
    a: "ポジションや企業フェーズ、ストックオプションの有無で大きく変動するため、固定の相場として断定はできません。一般にハイクラス・管理職レンジに入り、上場企業の管理職や年収750万円以上のハイクラス求人帯（ビズリーチのハイクラス定義）が一つの目安になります。スタートアップではストックオプションが報酬の重要な構成要素になります。",
  },
  {
    q: "PMからCTO/VPoEへの転職でおすすめのサービスは？",
    a: "CxO・ハイクラス求人はスカウト型が中心です。ビズリーチのようなハイクラス特化のスカウトサービスでヘッドハンターと接点を持ち、IT/Web特化のレバテックキャリアで技術マネジメント求人を探す併用が現実的です。求人は時期で変動するため各公式サイトで最新を確認してください。",
  },
  {
    q: "スタートアップと大企業、どちらのCTO/VPoEを目指すべき？",
    a: "初挑戦なら少人数スタートアップの方が、技術選定から組織づくりまで幅広く経験でき、PMの推進力が活きやすい傾向です。大企業のVPoE/CTOは既存組織の運営力・調整力の比重が高くなります。どちらが向くかは、裁量を取りたいか・安定した組織で運営したいかで判断します。",
  },
  {
    q: "技術力に自信がなくてもVPoEは目指せる？",
    a: "VPoEは技術そのものより組織マネジメントが主領域のため、PM経験者が挑戦しやすいポジションです。ただし技術者の判断を評価し信頼を得るための技術理解は必要で、技術力の不足を組織設計力・採用力・育成力で補える構図を作ることが鍵になります。",
  },
];

export default function PmToCtoPage() {
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
        title="PM→CTO/VPoEへのキャリアパス｜必要スキルと移行ステップ"
        description="プロジェクトマネージャーからCTO・VPoEへ移行するためのスキルギャップ、在職中にできる準備、職務経歴書の書き方、年収の考え方を30代・40代視点で解説します。"
        url="/career/pm-to-cto/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "PM→CTO/VPoEキャリアパス" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          PM→CTO/VPoEへのキャリアパス
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 技術マネジメント最上位ポジションを目指す
        </p>

        <p className="text-slate-600 leading-relaxed mb-6">
          プロジェクトマネージャー（PM）としてスコープ・コスト・納期を調整し、ステークホルダーをまとめてきた経験は、CTO・VPoEへの移行において大きな土台になります。本記事では、現職PMとのスキルギャップ、在職中にできる準備、職務経歴書での見せ方を、30代・40代のミドルエンジニア視点で整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "ビズリーチ公式（ハイクラス定義 年収750万円以上）",
            "レバテック公表の年代別平均年収（2025年）",
          ]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-blue-600 hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：PMからの現実的な到達点はVPoE</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-5 mb-4">
            <p className="text-slate-700 leading-relaxed mb-2">
              PM経験者がまず狙うべきは、組織マネジメントが主領域の<strong>VPoE（または前段のEM）</strong>です。PMの調整力・推進力・経営との折衝経験がそのまま武器になります。
            </p>
            <ul className="text-slate-700 text-sm space-y-1 list-disc list-inside">
              <li>VPoEは「エンジニア組織のPM」とも言える役割で、PM経験が直接活きる</li>
              <li>技術裁量を求めるなら、少人数スタートアップのCTOで幅広く経験を積むルートも有効</li>
              <li>埋めるべきギャップは「技術的意思決定」と「組織設計（採用・評価）」の2領域に集約される</li>
            </ul>
          </div>
        </section>

        <section id="difference" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">CTOとVPoEとEMの違い</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            役割の境界は企業によって異なりますが、おおまかには以下のように整理できます。狙うポジションによって、職務経歴書で強調すべき実績が変わります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">ポジション</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">主な役割</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">PMからの入りやすさ</th>
                </tr>
              </thead>
              <tbody>
                {positionRows.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.pos}</td>
                    <td className="px-4 py-3 text-slate-600">{row.role}</td>
                    <td className="px-4 py-3 text-slate-600">{row.path}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="gap" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">現職PMとのスキルギャップ比較表</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            現職PMの業務とCTO/VPoEに求められる役割を並べると、埋めるべきギャップが明確になります。経営との接続はPM経験が活きる一方、技術的意思決定と組織設計が主な伸びしろです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">領域</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">現職PMの業務</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">CTO/VPoEに必要なこと</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">ギャップ</th>
                </tr>
              </thead>
              <tbody>
                {gapRows.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.area}</td>
                    <td className="px-4 py-3 text-slate-600">{row.pm}</td>
                    <td className="px-4 py-3 text-slate-600">{row.target}</td>
                    <td className="px-4 py-3 text-slate-600">{row.gap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="fit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">CTO/VPoEに向いているPM・向いていないPM</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <p className="font-bold text-green-700 text-sm mb-3">向いているPM</p>
              <ul className="space-y-2 text-sm text-slate-700">
                {[
                  "技術選定の議論に踏み込み、判断の理由を理解しようとする",
                  "メンバーの育成・評価・チームづくりにやりがいを感じる",
                  "技術課題を経営課題として翻訳し、投資判断に落とせる",
                  "採用や技術広報など組織を強くする活動に前向き",
                ].map((t, i) => (
                  <li key={i} className="flex gap-2"><span className="text-green-600 font-bold shrink-0">✓</span><span>{t}</span></li>
                ))}
              </ul>
            </div>
            <div className="border border-slate-200 bg-slate-50 rounded-lg p-5">
              <p className="font-bold text-slate-700 text-sm mb-3">慎重に検討したいPM</p>
              <ul className="space-y-2 text-sm text-slate-700">
                {[
                  "技術判断を完全に他者に委ねたい・関与したくない",
                  "個別プロジェクトの進行管理に専念したい",
                  "採用・評価・組織設計といった人と組織の業務に関心が薄い",
                  "経営層との折衝や数値責任を負うことに強い抵抗がある",
                ].map((t, i) => (
                  <li key={i} className="flex gap-2"><span className="text-slate-400 font-bold shrink-0">−</span><span>{t}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="build" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">必要スキルの身につけ方</h2>
          <div className="space-y-4">
            {skills.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-sm mt-4 leading-relaxed">
            PMとしての土台に加え、純粋なマネジメント力の整理は
            <Link href="/skill/pm/" className="text-blue-600 hover:underline">PMスキルガイド</Link>や
            <Link href="/knowledge/management/" className="text-blue-600 hover:underline">エンジニアのマネジメント転身</Link>も参考になります。
          </p>
        </section>

        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">移行ステップ（在職中にできる準備）</h2>
          <div className="space-y-4">
            {steps.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-700 text-white font-bold text-sm shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="resume" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">職務経歴書での見せ方（Before/After）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            CTO/VPoE選考では「何を管理したか」ではなく「何を決め、組織や技術にどんな変化を起こしたか」が問われます。PMの実績を意思決定・組織貢献の文脈に翻訳するのがポイントです。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-red-200 bg-red-50 rounded-lg p-5">
              <p className="font-bold text-red-700 text-sm mb-2">Before（伝わりにくい例）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                「10名規模の開発プロジェクトのPMとして、要件定義から納品まで進行管理を担当。スケジュール遅延なくリリースした。」
              </p>
            </div>
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <p className="font-bold text-green-700 text-sm mb-2">After（意思決定・組織で語る例）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                「10名の開発組織で、技術選定（モノリスからの段階的分割）の意思決定をエンジニアと協働で主導。並行して評価グレードと1on1運用を整備し、半年で離職を抑制。技術負債の返済を投資対効果として経営に提案し、予算化を実現。」
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-sm mt-4 leading-relaxed">
            数値は実績に基づき正確に。誇張せず、関与した意思決定の粒度を具体的に書くことが信頼につながります。書類全体の構成は
            <Link href="/knowledge/resume/" className="text-blue-600 hover:underline">エンジニア職務経歴書の書き方</Link>を参照してください。
          </p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            CTO/VPoEは管理職・ハイクラスのレンジに入ります。ビズリーチではハイクラスの定義を年収750万円以上としており（2026年6月時点・二次情報）、CxO候補はこの帯以上が一つの目安になります。スタートアップではストックオプションが報酬の重要な構成要素となるため、基本給だけでなく株式報酬の条件まで含めて評価する必要があります。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            ミドル層の市場水準の参考として、レバテック公表の正社員SEの年代別平均年収は30代約499万円・40代約618万円、年収1,000万円以上の割合は30代8.01%・40代12.67%です（2025年・career.levtech.jp/freelance.levtech.jpガイド記事）。CTO/VPoEはこの分布の上位に位置づけられるポジションと言えます。
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            年収レンジの詳細は
            <Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代エンジニアの年収</Link>、
            交渉の進め方は
            <Link href="/knowledge/salary-negotiation/" className="text-blue-600 hover:underline">年収交渉のコツ</Link>も参考になります。
          </p>
        </section>

        <section id="agent" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">活用したい転職サービス</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            CxO・ハイクラス求人はスカウト型・人づてが中心です。スカウトサービスとIT特化エージェントの併用が現実的です。
          </p>
          <div className="space-y-3">
            {[
              { name: "ビズリーチ", point: "ハイクラス・スカウト型。年収1,000万円以上求人が全体の約4割との二次情報があり、外資・管理職に強い。ヘッドハンター経由でCxO案件に接点を持ちやすい（2026年6月時点）。" },
              { name: "レバテックキャリア", point: "IT/Web特化。高年収求人比率が高く（600万円以上が公開求人の約8割との二次情報）、技術マネジメント系のハイクラス求人を探しやすい（2026年6月時点）。" },
              { name: "リクルートエージェントIT", point: "国内最大級の求人数で非公開求人も豊富。幅広い企業フェーズの管理職求人を比較したい場合に併用先として有効（2026年6月時点）。" },
            ].map((agent, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{agent.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{agent.point}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代がCTO/VPoEを目指すなら</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ミドル層はCTO/VPoE選考において、年齢ではなく「組織と事業に与えた影響の実績」で評価されます。むしろ複数プロジェクトの修羅場経験や、経営層との折衝経験は若手にはない強みです。
          </p>
          <ul className="space-y-2 text-sm text-slate-700">
            {[
              "30代は「EM→VPoE」の階段を、40代は「即戦力のVPoE/CTO候補」として実績ベースで勝負するのが現実的",
              "技術の最前線を全て追う必要はないが、生成AI活用・クラウドコストなど経営判断に関わる論点は押さえておく",
              "公募よりスカウト・リファラルが多い領域。在職中からヘッドハンターとの関係を築いておくと選択肢が広がる",
              "副業・技術顧問で「経営に近い意思決定」を先に経験しておくと、選考での説得力が増す",
            ].map((t, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-blue-600 font-bold shrink-0">✓</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
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
          <h2 className="text-xl font-bold mb-3">CTO/VPoEポジションを無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            ハイクラス転職に強いサービスが、PM経験を活かせるポジションを提案します。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "テックリードキャリアガイド", href: "/career/tech-lead/" },
              { name: "PMスキルガイド", href: "/skill/pm/" },
              { name: "エンジニアのマネジメント転身", href: "/knowledge/management/" },
              { name: "大企業→スタートアップ転職", href: "/career/corporate-to-startup/" },
              { name: "40代エンジニアの年収", href: "/knowledge/salary-40s/" },
              { name: "ミドルエンジニア転職ラボTOP", href: "/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors"
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
