import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/microsoft/" },
  title: "日本マイクロソフト エンジニア転職ガイド｜年収・選考【2026年版】",
  description:
    "日本マイクロソフトへのエンジニア転職を、公式キャリア情報とlevels.fyi・OpenWork集計値で解説。Growth Mindset文化、Azure中心の技術、年収レンジ、選考、30代40代の現実までまとめました。",
};

const toc = [
  { id: "conclusion", label: "結論：難易度と向くエンジニア" },
  { id: "basic", label: "基本データ" },
  { id: "hiring", label: "エンジニア採用の特徴" },
  { id: "stack", label: "技術スタック・開発文化" },
  { id: "salary", label: "年収データ（出典付き）" },
  { id: "flow", label: "選考フロー" },
  { id: "interview", label: "面接で重視される点" },
  { id: "review", label: "口コミ傾向" },
  { id: "midage", label: "30代・40代から見たMicrosoft" },
  { id: "agents", label: "おすすめエージェント" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basicData: [string, string][] = [
  ["企業名", "日本マイクロソフト株式会社（Microsoft Japan）"],
  ["業種", "ソフトウェア・クラウドサービス"],
  ["本社所在地", "東京都港区（品川）"],
  ["ミッション", "地球上のすべての個人と組織が、より多くを達成できるようにする"],
  ["文化", "Growth Mindset（成長マインドセット）を全社方針に掲げる"],
  ["技術スタック", "C# / .NET / TypeScript / Python / Azure / React 等（開発系ポジション）"],
];

const salaryRows: [string, string][] = [
  ["SDE（若手〜中堅）", "総報酬 約1,300万円前後（$80K台〜）"],
  ["Level 62 前後", "総報酬 約1,800万円前後（$119K前後）"],
  ["Senior 以上", "より上位レンジ（公開レポート少・変動大）"],
];

const faqs = [
  {
    q: "日本マイクロソフトの中途採用の難易度は？",
    a: "外資ITの中でも難関とされます。一方で、日本マイクロソフトの公式情報では中途採用比率が非常に高く（2025年度は99%との公表値）、中途人材を主力に据えている企業です。技術力に加え、Growth Mindset（学び続ける姿勢）が重視されます。",
  },
  {
    q: "面接は英語必須ですか？",
    a: "ポジション・チームによります。グローバル組織や開発系では英語を使う場面が多い一方、日本市場向けの職種では日本語中心のこともあります。英語力があるほど選べるポジションが広がる、というのが一般的な理解です。",
  },
  {
    q: "エンジニアの年収はどのくらい？",
    a: "日本マイクロソフトは有価証券報告書を公表しておらず公式平均年収はありません。levels.fyi（2026年6月時点・日本拠点ソフトウェアエンジニア集計）では総報酬の中央値が約1,874万円、レンジは約1,266万円〜約2,607万円。RSU（株式報酬・複数年ベスティング）とボーナスを含む値で、変動が大きい点に注意してください。",
  },
  {
    q: "Growth Mindset とは何ですか？",
    a: "サティア・ナデラCEO就任以降に組織文化の中心に据えられた考え方で、日本マイクロソフトの公式キャリアページでも「可能性を育み、変化を受け入れ、学び続けることの価値を信じている」と明記されています。面接でも学習姿勢・変化への適応が評価されると一般に知られています。",
  },
  {
    q: "Azureの経験は必須ですか？",
    a: "必須とは限りませんが、Azure関連のポジションが多く、クラウド経験があると有利です。AWSなど他クラウドの経験者も歓迎される傾向があります。応募ポジションの要件は公式の募集要項で確認してください。",
  },
  {
    q: "選考フローはどうなっていますか？",
    a: "一般的には、書類選考／リクルーター面談→技術面接（複数回）→最終面接という流れが知られています。コーディング、設計、行動面接がバランスよく問われる傾向があります。詳細はポジションごとに異なるため、公式の応募プロセスを確認してください。",
  },
  {
    q: "ワークライフバランスはどうですか？",
    a: "OpenWorkの集計では月間平均残業が約28時間、有休消化率が約72%（SIer・ソフト開発・システム運用業界平均より高め）と公開されています。在宅・フレックスが整う一方、繁忙期や部署で負荷が変わるという声もあります。",
  },
  {
    q: "応募ルートは何が一般的ですか？",
    a: "公式キャリアサイトからの直接応募、LinkedIn、リファラル（社員紹介）、エージェント経由が主要ルートです。リファラルは通過率が高いと一般に言われますが、複数ルートで接点を作るのが現実的です。",
  },
];

const sources = [
  "日本マイクロソフト キャリア採用情報（公式）",
  "levels.fyi（2026年6月時点・ユーザー投稿集計）",
  "OpenWork 日本マイクロソフト（社員クチコミ集計）",
];

export default function MicrosoftCompanyPage() {
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
        title="日本マイクロソフト エンジニア転職ガイド【2026年版】"
        description="日本マイクロソフトへのエンジニア転職を、公式キャリア情報とlevels.fyi・OpenWork集計値で解説。Growth Mindset文化・Azure中心の技術・年収レンジ・選考・30代40代の現実までまとめました。"
        url="/company/microsoft/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "企業別ガイド", href: "/company/" },
          { name: "Microsoft Japan" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          日本マイクロソフト エンジニア転職ガイド【2026年版】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ Growth Mindset・Azure・年収を公式情報＋集計値で読み解く
        </p>

        <p className="text-slate-700 leading-relaxed mb-6">
          日本マイクロソフト株式会社は、AzureやCopilotをはじめとするクラウド／AI領域を牽引する外資ITです。
          公式キャリア情報では中途採用比率が非常に高く、中途人材を主力に据えている点が特徴です。
          本ページは、公式のキャリア採用情報、報酬集計サイトlevels.fyi、社員クチコミサイトOpenWorkを出典として明示し、
          30代・40代のミドルエンジニアが現実的に判断できるよう整理しました。年収は一次情報が存在しないため、出典・時点・変動の大きさを必ず添えています。
        </p>

        <DataNote surveyedAt="2026年6月" sources={sources} />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 text-sm mb-3">目次</p>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
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
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-xl p-6">
            <h2 className="text-xl font-bold text-blue-900 mb-3">結論：難易度と向くエンジニア</h2>
            <p className="text-blue-900 text-sm leading-relaxed mb-3">
              日本マイクロソフトは外資ITの中でも難関ですが、<strong>中途比率が高く（公式公表値で2025年度99%）</strong>、
              30代・40代の中途人材にとって門戸が比較的現実的な企業です。次の3点が揃う人に向きます。
            </p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>① <strong>クラウド（Azure／AWS等）や分散システム</strong>の設計・開発経験がある</li>
              <li>② <strong>学び続ける姿勢（Growth Mindset）</strong>を実績で示せる</li>
              <li>③ コーディング・設計面接の基礎と、必要に応じた英語コミュニケーション</li>
            </ul>
            <p className="text-blue-900 text-sm leading-relaxed mt-3">
              準備は
              <Link href="/knowledge/coding-test/" className="text-petrol-deep underline font-medium">コーディングテスト対策</Link>
              と
              <Link href="/knowledge/tech-interview/" className="text-petrol-deep underline font-medium">技術面接の進め方</Link>
              から着手するのが王道です。
            </p>
          </div>
        </section>

        {/* 基本データ */}
        <section id="basic" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {basicData.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">
                      {label}
                    </th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            ※ミッション・文化・職種は公式キャリアページの記載に基づきます。技術スタックは開発系ポジションで一般に知られている範囲で、担当領域は職種により異なります。
          </p>
        </section>

        {/* 採用の特徴 */}
        <section id="hiring" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">中途採用比率が高い</h3>
              <p className="text-sm text-petrol-deep">
                公式キャリアページの公表値では中途採用比率が2023年度86%・2024年度84%・2025年度99%と高く、中途人材を主力に据えています。30代・40代の経験者にとって現実的な選択肢になり得ます。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Growth Mindset 重視の文化</h3>
              <p className="text-sm text-petrol-deep">
                公式に「可能性を育み、変化を受け入れ、学び続けることの価値を信じている」と明記。技術力だけでなく、学習姿勢・変化への適応・協働が評価される文化が知られています。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">クラウド・AI領域の採用拡大</h3>
              <p className="text-sm text-petrol-deep">
                Azure・Copilotなどクラウド／AI関連サービスの拡大に伴い、クラウドアーキテクトやML/AI関連の人材ニーズが高い傾向です。応募要件は公式募集要項で確認してください。
              </p>
            </div>
          </div>
        </section>

        {/* 技術スタック */}
        <section id="stack" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック・開発文化</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-3">
            Microsoftは自社言語・基盤としてC#／.NETを中心に、TypeScript・Python・Azureなどを用いてプロダクトを構築していることが、公式の技術ドキュメントやOSS活動（.NET・TypeScript・VS
            Code等の公開）から広く知られています。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>Azure（クラウド）を軸にしたサービス開発・運用</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>.NET・TypeScript・VS CodeなどOSSへの積極的な貢献を公開</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><Link href="/skill/csharp/" className="text-petrol hover:underline">C#</Link>・<Link href="/skill/typescript/" className="text-petrol hover:underline">TypeScript</Link>・<Link href="/skill/python/" className="text-petrol hover:underline">Python</Link>の実務経験が活きる</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>AI領域はCopilot等の拡大で関連スキルの評価が高まる傾向</li>
          </ul>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（出典付き）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            日本マイクロソフトは<strong>有価証券報告書を公表しておらず、公式の平均年収はありません</strong>。
            以下は報酬集計サイトの数値で、<strong>ユーザー投稿ベースで変動が大きい</strong>点に留意してください。
          </p>
          <ul className="space-y-2 text-sm text-slate-700 mb-5">
            <li>
              ・<strong>levels.fyi（2026年6月時点・日本拠点ソフトウェアエンジニア集計）</strong>：総報酬の中央値 約1,874万円、レンジは約1,266万円〜約2,607万円。基本給＋RSU＋ボーナス換算。
            </li>
            <li>
              ・<strong>RSUの特徴</strong>：複数年（おおむね4〜5年）でベスティングされる株式報酬が含まれ、株価・付与額・入社時期で実受取額が変動します。
            </li>
          </ul>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">レベル（参考）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">総報酬の目安</th>
                </tr>
              </thead>
              <tbody>
                {salaryRows.map(([level, range], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{level}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            出典：levels.fyi（2026年6月時点・ユーザー投稿集計）。円換算は概算で為替・株価で変動します。等級の呼称・境界は目安です。
          </p>
          <p className="text-slate-600 text-sm mt-4">
            年収交渉の考え方は
            <Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉のやり方</Link>
            、外資の総報酬比較は
            <Link href="/knowledge/offer-compare/" className="text-petrol hover:underline">オファー比較の考え方</Link>
            も参考にしてください。
          </p>
        </section>

        {/* 選考フロー */}
        <section id="flow" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-3">
            公式に詳細な全ステップは公開されていないため、一般に知られている範囲で整理します。最終的な流れはポジション・チームで異なります。
          </p>
          <ol className="space-y-3 text-sm text-slate-700">
            {[
              ["応募 / リクルーター面談", "公式キャリアサイト・LinkedIn・リファラル経由で応募。経歴と志向を確認します。"],
              ["技術面接（複数回）", "コーディング、設計、行動面接がバランスよく問われる傾向があります。"],
              ["最終面接", "上位の面接官との面接で、技術・カルチャーフィットを総合的に確認します。"],
              ["オファー", "条件提示。内容はポジション・等級で異なります。"],
            ].map(([title, desc], i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 w-7 h-7 rounded-full bg-petrol text-white font-bold flex items-center justify-center text-xs">{i + 1}</span>
                <div>
                  <p className="font-bold text-slate-800">{title}</p>
                  <p className="text-slate-600">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-xs text-slate-400 mt-3">
            ※選考フローは公式に全工程が公開されているわけではなく、一般に知られている範囲の整理です。詳細は応募ポジションの案内を確認してください。
          </p>
        </section>

        {/* 面接で重視される点 */}
        <section id="interview" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-3">
            具体的な質問リストは公式には公開されていません。公開情報と一般に知られている範囲に留めて整理します。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><strong>技術力</strong>：コーディング、<Link href="/knowledge/system-design/" className="text-petrol hover:underline">システムデザイン</Link>の基礎</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><strong>Growth Mindset</strong>：失敗から学び、変化に適応してきた経験を語れること</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><strong>協働・影響力</strong>：チームや組織を巻き込んで成果を出した経験（<Link href="/knowledge/behavioral/" className="text-petrol hover:underline">行動面接の準備</Link>）</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><strong>クラウド経験</strong>：Azure／AWS等の設計・運用知見（ポジションにより必須度が異なる）</li>
          </ul>
        </section>

        {/* 口コミ */}
        <section id="review" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミサイトでの評判傾向</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-3">
            OpenWork（日本マイクロソフト）の社員クチコミ集計では、次の傾向が見られます（出典に基づく傾向要約です）。
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-emerald-200 bg-emerald-50 rounded-lg p-5">
              <h3 className="font-bold text-emerald-800 text-sm mb-2">良い評判の傾向</h3>
              <ul className="space-y-1 text-sm text-emerald-900">
                <li>・在宅・フレックスなど柔軟な働き方が整っている</li>
                <li>・有休消化率が業界平均より高め（集計値で約72%）</li>
                <li>・高い給与水準と評価の透明性を評価する声</li>
              </ul>
            </div>
            <div className="border border-amber-200 bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 text-sm mb-2">気になる点の傾向</h3>
              <ul className="space-y-1 text-sm text-amber-900">
                <li>・月間平均残業は約28時間と、部署により負荷差がある</li>
                <li>・繁忙期は忙しくなるという声</li>
                <li>・働き方が個人の裁量に委ねられ自己管理が必要</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典：OpenWork 日本マイクロソフト（社員クチコミ集計・2026年6月時点参照）。</p>
        </section>

        {/* 30-40代視点 */}
        <section id="midage" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見た日本マイクロソフト</h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              日本マイクロソフトは<strong>中途採用比率が非常に高い</strong>ため、30代・40代の経験者にとって、GAFAMの中でも比較的現実的に狙いやすい企業です。
              純粋なアルゴリズム偏重というより、クラウド・プロダクトでの実務実績と学習姿勢のバランスが見られます。
            </p>
            <p>
              強みになるのは、Azure／AWS等での設計・運用経験や、チームを巻き込んで変化を起こした経験です。
              「Growth Mindset」は抽象的に語ると弱いので、失敗→学習→改善の具体的なストーリーを用意しておくと面接で効きます。
            </p>
            <p>
              準備は
              <Link href="/career/domestic-to-foreign/" className="text-petrol hover:underline">国内企業から外資系への転職</Link>
              、クラウドの伸ばし方は
              <Link href="/skill/csharp/" className="text-petrol hover:underline">C#エンジニアの転職市場</Link>
              、英語面は
              <Link href="/purpose/english/" className="text-petrol hover:underline">英語を使う仕事への転職</Link>
              を参考にしてください。
            </p>
          </div>
        </section>

        {/* エージェント */}
        <section id="agents" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">日本マイクロソフト転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "ビズリーチ", href: "/review/bizreach-it/", desc: "ハイクラス・スカウト型。外資ITを扱うヘッドハンターと接点を作りやすい。" },
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT/Web特化。技術職の選考対策・キャリアの棚卸しに強い。" },
              { name: "doda ITエンジニア", href: "/review/doda-it/", desc: "国内最大級の総合型。外資・大手の選択肢を幅広く比較したい人向け。" },
            ].map((agent, i) => (
              <Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3>
                <p className="text-xs text-slate-500">{agent.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12 scroll-mt-20">
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
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-12 text-center">
          <h2 className="text-xl font-bold mb-3">外資IT転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            選考対策と非公開求人の把握から始めたい方は、ハイクラス・IT特化エージェントへの無料相談が出発点です。
          </p>
          <Link
            href="/review/bizreach-it/"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントを見る
          </Link>
        </section>

        {/* 関連記事 */}
        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "技術面接の進め方", href: "/knowledge/tech-interview/" },
              { name: "コーディングテスト対策", href: "/knowledge/coding-test/" },
              { name: "国内企業から外資系への転職", href: "/career/domestic-to-foreign/" },
              { name: "C#エンジニアの転職市場", href: "/skill/csharp/" },
              { name: "Google Japan 転職ガイド", href: "/company/google/" },
              { name: "Amazon／AWS Japan 転職ガイド", href: "/company/amazon/" },
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
