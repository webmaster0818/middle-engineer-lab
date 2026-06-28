import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "オービックの年収は平均1,129万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "株式会社オービック（4684）へのエンジニア転職を有報・公式採用ページの一次情報で解説。平均年収1,129万円(2026年3月期・全社員平均)、統合基幹業務システム「OBIC7」を支える技術、選考フロー・面接観点、30代40代の戦い方まで。確認できない数値は記載していません。",
};

const salaryTrend: [string, string, string][] = [
  ["2022年3月期", "959万円", "—"],
  ["2023年3月期", "1,005万円", "—"],
  ["2024年3月期", "1,078万円", "—"],
  ["2025年3月期", "1,103万円", "35.9歳"],
  ["2026年3月期", "1,129万円", "35.8歳"],
];

const basicData: [string, string][] = [
  ["企業名", "株式会社オービック（証券コード4684・東証プライム）"],
  ["事業領域", "統合基幹業務システム（ERP）「OBIC7」シリーズの開発・販売・導入・運用、システムインテグレーション、アウトソーシング"],
  ["平均年間給与", "1,129万円（2026年3月期 有価証券報告書・全社員平均）"],
  ["平均年齢", "35.8歳（2026年3月期 有価証券報告書）"],
  ["平均勤続年数", "約12.9年（2026年3月期 有価証券報告書）"],
  ["本社所在地", "東京都中央区"],
  ["技術スタック（公開情報）", "ERP「OBIC7」の開発・導入。基幹システムの設計・構築（具体的な使用言語・基盤は公式で網羅的に公表されておらず要確認）"],
  ["採用ページ", "obic.co.jp（採用情報）"],
];

const toc = [
  { id: "conclusion", label: "結論：転職難易度とどんなエンジニア向きか" },
  { id: "basic", label: "基本データ（企業概要・出典付き）" },
  { id: "features", label: "エンジニア採用の特徴" },
  { id: "stack", label: "技術スタック（公開情報）" },
  { id: "salary", label: "年収データ（有報）" },
  { id: "flow", label: "選考フロー" },
  { id: "interview", label: "面接で重視される点" },
  { id: "review", label: "口コミ・評判の傾向" },
  { id: "middle", label: "30代・40代から見たオービック" },
  { id: "agents", label: "オービック転職におすすめのエージェント" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const faqs = [
  {
    q: "オービックのエンジニア転職の難易度は高い？",
    a: "高収益・高年収で人気が高く、選考難易度は中〜やや高とされます。ERP「OBIC7」を中核としたソリューション営業・システム開発・導入の体制が特徴で、基幹システムの開発・導入経験や、業務（会計・人事・販売管理等）への理解があると評価されやすい傾向です。新卒採用の比率が高い企業でもあるため、中途では即戦力性が重視されます。",
  },
  {
    q: "オービックのエンジニアの平均年収はいくら？",
    a: "株式会社オービックの有価証券報告書（2026年3月期）に記載された全社員の平均年間給与は1,129万円、平均年齢は35.8歳です（エンジニア職に限った数値ではなく全社員平均）。IT・SaaS/ERP企業の中でもトップクラスの水準で、近年は1,000万円台で推移しています。職種・等級別の正式な年収表は公開されていないため、個別の提示額は求人ごと・スキル評価ごとに決定されます。",
  },
  {
    q: "オービックの技術スタックは？",
    a: "オービックは統合基幹業務システム（ERP）「OBIC7」シリーズの開発・導入を中核とする企業です。基幹システムの設計・構築が中心ですが、使用言語・基盤などの具体的な技術スタックは公式に網羅的には公表されていないため、断定は避けています。詳細は公式採用ページや面談でご確認ください。",
  },
  {
    q: "オービックの選考フローは？",
    a: "オービック公式採用情報によると、エントリー（書類選考）→ 面接（複数回）→ 内定が基本的な流れです。中途採用では職務経歴・担当領域や業務知識が確認されます。最新の内容は公式採用ページでご確認ください。",
  },
  {
    q: "オービックはどんな事業をしている会社ですか？",
    a: "オービックは、統合基幹業務システム（ERP）「OBIC7」シリーズの開発・販売・導入・運用を中核に、システムインテグレーションやアウトソーシングを展開する東証プライム上場企業（証券コード4684）です。コンサルティングから開発・導入・運用までを一貫して自社で手がける「ワンストップ・ソリューション」が特徴で、高い利益率で知られています。",
  },
  {
    q: "オービックの年収が高いのはなぜ？",
    a: "オービックは営業利益率が極めて高い高収益企業として知られ、その収益性が全社員平均年収の高さ（2026年3月期 有報で1,129万円）につながっていると見られます。ただし有報の数値は営業職等も含む全社員平均であり、エンジニア職や個人の等級により実際のレンジは上下します。提示額は求人ごとに個別決定されます。",
  },
  {
    q: "オービックへの転職で有利な経験は？",
    a: "ERP・基幹システムの開発・導入経験、会計・人事・販売管理など業務領域の知見、要件定義から導入・運用までを担える上流〜推進の経験などが評価されやすい傾向です。30代・40代では、技術力に加えて顧客・業務に踏み込んだソリューション提案の経験が強みになります。",
  },
];

export default function ObicCompanyPage() {
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
        title="オービック エンジニア転職ガイド"
        description="オービックへのエンジニア転職を有報・公式採用ページの一次情報で解説。平均年収1,129万円(2026年3月期)、ERP「OBIC7」を支える開発、選考フロー、口コミ傾向まで。"
        url="/company/obic/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "IT企業平均年収ランキング【有報準拠】", href: "/salary/company-ranking/" }, { name: "SCSK の転職ガイド", href: "/company/scsk/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "オービック" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">オービック エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 ｜ 統合ERP「OBIC7」を一貫提供する高収益・高年収のIT企業</p>

        <p className="text-slate-700 leading-relaxed mb-6">
          株式会社オービック（証券コード4684・東証プライム）は、統合基幹業務システム（ERP）「OBIC7」シリーズの開発・販売・導入・運用をワンストップで手がける高収益IT企業です。
          このページでは、有価証券報告書・公式採用ページといった一次情報をもとに、オービックへのエンジニア転職の難易度・年収・技術スタック・選考フロー・口コミ傾向を、
          30代・40代のミドルエンジニア視点で整理します。確認できない数値・技術情報は記載せず、出典を明示しています。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "株式会社オービック 有価証券報告書（2026年3月期）",
            "オービック公式採用情報（obic.co.jp）",
            "IRBANK（オービック 平均年収推移・4684）",
            "OpenWork（オービック 社員クチコミ）",
          ]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：転職難易度とどんなエンジニア向きか</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="font-bold text-blue-900 mb-3">結論：ERP・基幹システムを一貫して担い、高年収を狙いたいエンジニア向き。難易度は中〜やや高。</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li className="flex gap-2"><span className="shrink-0">1.</span>統合ERP「OBIC7」の開発・導入を一貫して手がける。基幹システム経験・業務知識が活きる。</li>
              <li className="flex gap-2"><span className="shrink-0">2.</span>全社員平均年収は1,129万円（2026年3月期 有報）。IT/ERP企業でもトップクラスの水準。</li>
              <li className="flex gap-2"><span className="shrink-0">3.</span>高利益率の安定経営。コンサルから運用までワンストップで担う体制で、上流・推進の経験が評価されやすい。</li>
            </ul>
          </div>
        </section>

        <section id="basic" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ（企業概要・出典付き）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {basicData.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            出典: 株式会社オービック 有価証券報告書（2026年3月期）／オービック公式採用情報／IRBANK（4684）。平均年間給与は全社員平均でありエンジニア職に限った値ではありません。
          </p>
        </section>

        <section id="features" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ERP「OBIC7」を一貫して担うワンストップ体制</h3>
              <p className="text-sm text-petrol-deep">オービックはコンサルティングから開発・導入・運用までを自社で一貫して手がけるのが特徴です。統合ERP「OBIC7」を軸に、要件定義から運用まで幅広い工程に関われるため、基幹システムを通じて顧客の経営に踏み込みたいエンジニアに向いています。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">高収益を背景にした高水準の待遇</h3>
              <p className="text-sm text-petrol-deep">高い営業利益率で知られ、全社員平均年収はIT/ERP企業でもトップクラスです（2026年3月期 有報1,129万円）。安定した高収益基盤の上で長く働きたいミドル層にとって、待遇面の魅力は大きい選択肢です。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">業務知識×システムの両面が活きる</h3>
              <p className="text-sm text-petrol-deep">会計・人事・販売管理など企業の基幹業務を扱うため、技術力だけでなく業務領域の理解が重要になります。業務知識とシステム開発の両面を伸ばしたいエンジニアに適した環境です。</p>
            </div>
          </div>
        </section>

        <section id="stack" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公開情報）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            オービックは統合ERP「OBIC7」の開発・導入を中核とする企業です。<strong>具体的な使用言語・基盤などの技術スタックは公式に網羅的には公表されていないため、本ページでは断定を避けています。</strong>最新の詳細は公式採用ページ・面談でご確認ください。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["主力プロダクト", "統合基幹業務システム（ERP）「OBIC7」シリーズ"],
                  ["担当領域", "ERP・基幹システムの設計・開発・導入・運用（コンサルから運用までワンストップ）"],
                  ["使用言語・基盤", "公式で網羅的に公表されておらず要確認（面談・求人票で確認推奨）"],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: オービック公式情報。一次情報で確認できない具体的言語・基盤の断定は避けています。</p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（有報）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            オービックは上場企業のため、有価証券報告書に全社員の平均年間給与が記載されています。<strong>これは全社員平均であり、エンジニア職に限った数値ではありません。</strong>
            職種・等級別の公式な年収表は公開されていないため、ここでは有報の推移のみを掲載します。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">決算期</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">平均年間給与（全社員平均）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">平均年齢</th>
                </tr>
              </thead>
              <tbody>
                {salaryTrend.map(([y, s, age], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{y}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{s}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mb-4">出典: 株式会社オービック 有価証券報告書（各期）／IRBANK（4684）。平均年齢35.8歳と若めの組織でこの水準は突出して高めです。</p>
          <p className="text-slate-700 text-sm leading-relaxed">
            参考として、IT・通信業界の転職者の平均決定年収は486万円（パーソルキャリア「decision年収レポート」2024年度・2025年5月公表）であり、オービックの全社員平均はこれを大きく上回ります。
            ただし高い全社員平均には高収益・高生産性の事業特性が反映されており、エンジニア職個人の提示額はスキル評価で個別決定されます。本ページでは確認できる出典のない等級別レンジは掲載していません。
          </p>
        </section>

        <section id="flow" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            オービック公式採用情報に基づく標準的な流れです。最新の内容は<a href="https://www.obic.co.jp/" className="text-petrol hover:underline" target="_blank" rel="noopener noreferrer">公式サイト・採用情報</a>でご確認ください。
          </p>
          <ol className="space-y-3">
            {[
              ["エントリー（書類選考）", "募集ポジションから応募し書類を提出。職務経歴・担当領域・業務知識が確認される。"],
              ["面接（複数回）", "現場・人事等との面接。ERP/基幹システムの経験や業務理解、推進力が問われる。"],
              ["適性確認等", "ポジションにより適性検査やスキル確認が行われる場合がある。"],
              ["内定（オファー）", "条件・配属の説明。担当領域・ミッションのすり合わせが行われる。"],
            ].map(([title, desc], i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 w-7 h-7 rounded-full bg-petrol text-white text-sm font-bold flex items-center justify-center">{i + 1}</span>
                <div>
                  <p className="font-bold text-slate-800 text-sm">{title}</p>
                  <p className="text-sm text-slate-600">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-xs text-slate-400 mt-3">出典: オービック公式採用情報の要約。具体的な回数・内容はポジションにより異なります。</p>
        </section>

        <section id="interview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            公式採用情報などの公開情報から読み取れる傾向です。特定の質問文の再現や断定は避け、評価観点として整理します。
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>ERP・基幹システムの開発・導入経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>会計・人事・販売管理など業務領域の知見</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>要件定義から導入・運用までを担える上流〜推進の経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>顧客・業務に踏み込んだソリューション提案の姿勢</li>
          </ul>
          <p className="text-sm text-slate-600 mt-4">
            面接全般の準備は<Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接の対策ガイド</Link>、コーディングテスト対策は<Link href="/knowledge/coding-test/" className="text-petrol hover:underline">コーディングテスト攻略</Link>を参考にしてください。
          </p>
        </section>

        <section id="review" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミ・評判の傾向</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            OpenWork等の口コミプラットフォームに投稿された傾向を、出典を挙げて要約します（原文転載はしていません）。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-2 text-sm">ポジティブな傾向</h3>
              <ul className="space-y-1.5 text-sm text-green-900">
                <li>高収益を背景にした高い年収水準への評価（OpenWork）</li>
                <li>安定した経営基盤・財務体質を評価する声（OpenWork）</li>
                <li>ワンストップで上流から運用まで関われる点への評価（OpenWork）</li>
              </ul>
            </div>
            <div className="border border-amber-200 bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 mb-2 text-sm">ネガティブ・注意したい傾向</h3>
              <ul className="space-y-1.5 text-sm text-amber-900">
                <li>顧客対応・導入プロジェクトの繁忙によって負荷が高まる場面がある</li>
                <li>新卒文化が強く、中途は組織への適応が前提となる面がある</li>
                <li>口コミは個人の主観であり、部署・時期で実態は異なる点に注意</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典: OpenWork（オービック 社員クチコミ）。傾向の要約であり、評価は時期・部署により変動します。</p>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見たオービック</h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              オービックは平均年齢35.8歳（2026年3月期）と比較的若めの組織ながら、全社員平均年収はIT/ERP企業でもトップクラスです。30代・40代のミドルエンジニアにとっては、「安定した高収益基盤の上で、基幹システムを通じて顧客の経営に踏み込みたい」というニーズに合致しやすい選択肢です。
            </p>
            <p>
              ERP・基幹システムの開発・導入経験、会計・人事・販売管理などの業務知識、上流から運用までを担った経験は、年齢に見合った価値として評価されやすいでしょう。一方で、新卒中心の文化が強い企業でもあるため、中途入社では組織への適応や即戦力性が求められる点を理解しておくとよいでしょう。
            </p>
            <p>
              年収面では、現職が頭打ちになっている30代・40代にとって、オービックの全社員平均1,129万円（有報）は大きな魅力です。ただし提示額はスキル評価で個別決定されるため、現年収・市場価値の把握が重要です。<Link href="/knowledge/market-value/" className="text-petrol hover:underline">自分の市場価値の調べ方</Link>や<Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉の進め方</Link>もあわせて確認してください。
            </p>
            <p>
              年代別の転職実態は<Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>も参考になります。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">オービック転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "JACリクルートメント", href: "/review/jac-recruitment/", desc: "ハイクラスに強く、年収帯の高い大手・専門職の求人に対応。高年収企業に強み。" },
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT/Web特化で高年収求人比率が高い。書類添削・面接対策に定評。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム特化。提案スピードが強みで、SI・ERP領域にも実績。" },
            ].map((agent, i) => (
              <Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3>
                <p className="text-xs text-slate-500">{agent.desc}</p>
              </Link>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-3">各社の特徴は<Link href="/review/jac-recruitment/" className="text-petrol hover:underline">JACリクルートメントの評判</Link>などの個別レビューも参考にしてください。</p>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">オービックへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">高年収のIT/ERP企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/jac-recruitment/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
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

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "TIS の転職ガイド", href: "/company/tis/" },
              { name: "SCSK の転職ガイド", href: "/company/scsk/" },
              { name: "野村総合研究所（NRI） の転職ガイド", href: "/company/nri/" },
              { name: "IT企業平均年収ランキング【有報準拠】", href: "/salary/company-ranking/" },
              { name: "技術面接の対策ガイド", href: "/knowledge/tech-interview/" },
              { name: "40代エンジニアの転職", href: "/age/40s/" },
            ].map((item, i) => (
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
