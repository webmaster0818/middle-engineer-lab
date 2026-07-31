import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/nec/" },
  title: "NECの転職難易度と年収は？平均963万円【2026年・有報】ジョブ型のエンジニア転職",
  description:
    "NEC（日本電気）のエンジニア中途採用を有価証券報告書の一次情報で解説。平均年収963万円(2025年3月期・単体全従業員)、ジョブ型移行、社会インフラ/AIの事業、30代40代の現実を中立にまとめました。",
};

const toc = [
  { id: "conclusion", label: "結論：転職難易度と向くエンジニア" },
  { id: "basic", label: "基本データ（出典付き）" },
  { id: "feature", label: "エンジニア採用の特徴" },
  { id: "stack", label: "技術・事業領域（公開情報）" },
  { id: "salary", label: "年収データ" },
  { id: "flow", label: "選考フロー" },
  { id: "interview", label: "面接で重視される点" },
  { id: "review", label: "社員口コミの傾向" },
  { id: "middle", label: "30代・40代から見たNEC" },
  { id: "agent", label: "おすすめエージェント3社" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basicData: [string, string][] = [
  ["企業名", "日本電気株式会社（NEC・証券コード6701・東証プライム）"],
  ["業種", "社会インフラ／IT・ネットワーク（生体認証等のAI、クラウド、セキュリティ）"],
  ["平均年収", "963万円（2025年3月期・提出会社単体／全従業員平均・賞与含む）"],
  ["平均年齢", "42.6歳（2025年3月期・提出会社単体）"],
  ["平均勤続年数", "16.6年（2025年3月期・提出会社単体）"],
  ["従業員数", "約22,271名（2025年3月期・提出会社単体）"],
  ["人事制度", "ジョブ型人材マネジメントへ移行（職務・専門性に応じた処遇）"],
];

const salaryRows: [string, string][] = [
  ["平均年収（提出会社単体・全従業員）", "963万円"],
  ["平均年齢", "42.6歳"],
  ["平均勤続年数", "16.6年"],
  ["提出会社単体の従業員数", "約22,271名"],
];

const faqs = [
  { q: "NECの平均年収はいくら？", a: "2025年3月期の有価証券報告書（IRBANK集計）によると、提出会社（日本電気株式会社単体）の平均年間給与は963万円、平均年齢42.6歳、平均勤続年数16.6年です。これは賞与を含む全従業員（エンジニア以外も含む）の平均で、職種別・等級別の内訳は公式には開示されていません。提出会社単体の従業員数は約22,271名です。" },
  { q: "NECのエンジニア職の提示年収レンジは公開されている？", a: "NECは職種別・等級別の年収レンジを公式に網羅的には開示していません。求人サイトでも具体的な提示レンジが常時公開されているわけではないため、当ガイドでは推測の数値表（等級別年収表）は掲載していません。目安としては有価証券報告書の全従業員平均963万円（2025年3月期・単体）が参考値になります。なお2021年以降ジョブ型人材マネジメントへ移行しており、職務・専門性に応じた処遇が進められています。" },
  { q: "NECはジョブ型を導入している？ミドルの評価はどうなる？", a: "NECはジョブ型人材マネジメントへの移行を進めています。職務（ジョブ）の難易度・専門性に応じて処遇が決まる方向のため、専門性の高い経験を持つ30代・40代のミドル層にとっては、年功よりも職務・スキルが評価されやすくなる側面があります。ただし具体的な等級別の年収表は公式に確認できないため、当ガイドでは創作した数値の掲載は行いません。" },
  { q: "NECで使われている技術スタックは？", a: "NECは社会インフラ・AI（生体認証など）・クラウド・セキュリティと事業領域が非常に広く、全社で統一された開発言語・技術スタックの一覧を公式に断定的に示しているわけではありません。当ガイドでは、公式に確認できない言語一覧を創作して掲載することはしません。具体的に使う技術は配属される事業・プロジェクトにより異なるため、各募集要項で確認することをおすすめします。" },
  { q: "NECの選考フローは？", a: "NECは職種・部門が非常に多岐にわたり、職種ごとの具体的な選考ステップ（面接回数・課題の有無など）の詳細を公式に網羅的には公開していません。当ガイドでは公式に確認できない選考詳細を創作して掲載することはしません。一般的な中途採用では書類選考・複数回の面接などが想定されますが、正確な流れは公式採用ページや担当エージェントでご確認ください。" },
  { q: "NECの面接で聞かれることは？", a: "NECは具体的な面接質問リストを公式に公開していないため、当ガイドでは創作した質問例の掲載は行いません。社会インフラ・AI・セキュリティといった事業特性から、対象領域の専門性や、大規模・社会的影響の大きいシステムに向き合う姿勢が評価されやすいと一般的に考えられますが、これは推測です。" },
  { q: "NECは40代でも転職できる？", a: "NECは平均年齢42.6歳・平均勤続年数16.6年（2025年3月期・単体）と、ミドル層が厚い組織です。ジョブ型への移行が進むなかで、専門性やマネジメント経験を持つ40代は経験を評価されやすい環境といえます。ただし求められる役割・職務は募集により異なるため、自分の経験がどのポジションに合うかの見極めが重要です。" },
  { q: "NECはリモートワークできる？", a: "勤務形態は職種・事業・時期により異なります。当ガイドの調査時点では制度の詳細を公式の一次情報として確定できなかったため、最新の勤務条件は各募集要項や選考過程で必ず確認してください。" },
];

export default function NecCompanyPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="NEC エンジニア転職ガイド" description="NECへのエンジニア転職を有価証券報告書の一次情報で解説。平均年収963万円(2025年3月期・単体全従業員)、ジョブ型移行、社会インフラ/AIの事業をまとめました。" url="/company/nec/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "NEC" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">NEC（日本電気）へのエンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-600 text-sm leading-relaxed mb-2">
          日本電気株式会社（NEC）へのエンジニア中途採用について、有価証券報告書と公式・公開情報をもとに、転職難易度・年収・事業領域・人事制度を中立にまとめました。生体認証などのAI、社会インフラ、クラウド、セキュリティを軸に、社会的影響の大きいシステムを手がける大手電機メーカーです。
        </p>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ 出典は各データの直後に明記しています。</p>

        {/* 直答box (P0/company年収) */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】NECの年収は？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: 提出会社（日本電気株式会社単体）の平均年間給与は963万円です（2025年3月期 有価証券報告書・全従業員平均・賞与含む、平均年齢42.6歳）。</strong></p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・平均年収 963万円（2025年3月期 有報・提出会社単体／全従業員平均・賞与含む）。エンジニアに限定した値ではありません。</li><li>・平均年齢42.6歳・平均勤続年数16.6年（同 有報）とミドル層が中核。提出会社単体の従業員数は約22,271名。</li><li>・2021年以降ジョブ型人材マネジメントへ移行。職種別・等級別レンジは非公表で、提示額は求人・面談での確認が必要です。</li></ul>
        </div>

        <DataNote surveyedAt="2026年6月" sources={["NEC 有価証券報告書（2025年3月期・提出会社単体）", "IRBANK", "NEC 公式採用ページ", "OpenWork（口コミ傾向）"]} />

        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：転職難易度と向くエンジニア</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-sm text-blue-900 font-bold mb-3">転職難易度：中〜高（社会インフラ・AI・セキュリティの専門性）</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>・中核は<strong>社会インフラ／AI（生体認証）／クラウド／セキュリティ</strong>。社会的影響の大きい大規模システムに、専門性を持って関わりたい人に向く。</li>
              <li>・<strong>ジョブ型人材マネジメントへ移行</strong>しており、職務・専門性に応じた評価が進む。年功より職務で評価されたいミドルに追い風。</li>
              <li>・年収は提出会社単体の全従業員平均で<strong>963万円（2025年3月期・有報）</strong>。安定した大手の処遇水準が魅力。</li>
            </ul>
            <p className="text-xs text-blue-800 mt-3">逆に、特定のモダンWeb技術を最優先したい人や、スタートアップ的なスピード・裁量を求める人は、大企業・社会インフラ特有の進め方とミスマッチが起きやすい点に注意が必要です。</p>
          </div>
        </section>

        <nav aria-label="目次" className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-700 text-sm mb-3">目次</p>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}><a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a></li>
            ))}
          </ol>
        </nav>

        <section id="basic" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ（出典付き）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm"><tbody>
              {basicData.map(([label, value], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}><th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{label}</th><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td></tr>
              ))}
            </tbody></table>
          </div>
          <p className="text-xs text-slate-500">出典：NEC「有価証券報告書」2025年3月期（提出会社＝日本電気株式会社単体の従業員データ）、IRBANK集計、NEC公式採用ページ。平均年収963万円は提出会社単体の全従業員（エンジニア以外も含む）平均で、賞与を含みます。</p>
        </section>

        <section id="feature" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">社会インフラ・AI・セキュリティの幅広い事業</h3><p className="text-sm text-petrol-deep">NECは生体認証などのAI、社会インフラ、クラウド、セキュリティと事業領域が非常に広く、社会的影響の大きいシステムを手がけています。担当する事業によって扱う技術やドメインが大きく異なるのが特徴で、自分の専門性を活かせる領域を選びやすい一方、配属事業の見極めが重要になります。</p></div>
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">ジョブ型人材マネジメントへの移行</h3><p className="text-sm text-petrol-deep">NECはジョブ型人材マネジメントへの移行を進めています。職務（ジョブ）の難易度・専門性に応じて処遇が決まる方向で、年功序列に依存しない評価が進みつつあります。専門性やマネジメント経験を持つミドル層にとっては、経験が処遇に反映されやすくなる側面があります。</p></div>
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">大手ならではの安定基盤</h3><p className="text-sm text-petrol-deep">提出会社単体で平均勤続年数16.6年・平均年齢42.6歳（2025年3月期・有報）と、長期勤続のミドル層が中核を占める組織です。安定した処遇（全従業員平均963万円）と幅広い事業ポートフォリオが、腰を据えて専門性を深めたい人にとっての魅力になります。</p></div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術・事業領域（公開情報の範囲）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">NECは事業領域が非常に広く、全社で統一された開発言語・技術スタックの一覧を公式に断定的に示しているわけではありません。そのため当ガイドでは、公式に確認できない言語表を創作して掲載することはしません。以下は公開情報から確認できる主な事業・技術領域です。具体的な使用技術は配属される事業・プロジェクトにより異なります。</p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>AI（生体認証等）</strong>：顔認証をはじめとする生体認証技術で世界的に知られる領域</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>社会インフラ</strong>：行政・通信・公共など、社会的影響の大きい大規模システム</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>クラウド</strong>：システム基盤・クラウドサービスの構築運用</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>セキュリティ</strong>：サイバーセキュリティを含む安全・安心の領域</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：NEC公式（事業領域の公開情報）。具体的な使用言語・スタックは案件・事業により異なるため、各募集要項でご確認ください。関連するスキル解説は<Link href="/skill/ai-ml/" className="text-petrol hover:underline">AI／機械学習</Link>・<Link href="/skill/security/" className="text-petrol hover:underline">セキュリティ</Link>・<Link href="/skill/infrastructure/" className="text-petrol hover:underline">インフラ</Link>のページも参照してください。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-100"><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">項目</th><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">数値（2025年3月期・提出会社単体）</th></tr></thead>
              <tbody>{salaryRows.map(([k, v], i) => (<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{k}</td><td className="px-4 py-3 text-slate-700 border-b border-slate-200 font-medium">{v}</td></tr>))}</tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-2">
            上表はNECの<strong>有価証券報告書（2025年3月期）</strong>に記載された提出会社（日本電気株式会社単体）の数値です。963万円は<strong>エンジニア以外も含む全従業員の平均（賞与含む）</strong>であり、職種別・等級別の年収は公式に開示されていません。そのため当ガイドでは出典のない等級別年収表は掲載していません。NECはジョブ型人材マネジメントへ移行しており、今後は職務・専門性に応じた処遇がより進むとされています。
          </p>
          <p className="text-xs text-slate-500">出典：NEC「有価証券報告書」2025年3月期、IRBANK集計。エンジニア職の提示年収レンジは公式・求人サイトで継続的に確認できる公開値がないため、推測値の掲載は控えています。</p>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式に詳細は非公開）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            NECは職種・部門が非常に多岐にわたり、<strong>職種ごとの具体的な選考ステップ（面接回数・課題の有無など）の詳細を公式に網羅的には公開していません</strong>。当ガイドでは、公式に確認できない選考詳細を創作して掲載することはしません。一般的な中途採用では書類選考・複数回の面接などが想定されますが、NECの正確なフローは公式採用ページや担当エージェントでご確認ください。
          </p>
          <p className="text-xs text-slate-500">出典：NEC公式採用ページ。フローは職種・事業・時期により変動します。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報ベースの一般化）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">具体的な面接質問リストは公式に公開されておらず、断定はできません。創作した質問例は掲載せず、社会インフラ・AI・セキュリティという事業特性から評価されやすいと一般に考えられるポイントのみを挙げます。</p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>担当領域（AI・インフラ・セキュリティ等）の専門性の深さ</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>社会的影響の大きい大規模システムに向き合う責任感・品質意識</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>顧客・関係者を巻き込むプロジェクト推進・上流の経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>ジョブ型の役割に対する適合（職務に対する明確な強み）</li>
          </ul>
        </section>

        <section id="review" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">社員口コミの傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            OpenWork等の口コミプラットフォームでは、NECについて<strong>「社会的影響の大きい事業に関われる」「大手ならではの安定・福利厚生」「ジョブ型移行で専門性が評価されやすくなった」</strong>といった声が見られる一方、<strong>「大企業ゆえに意思決定や調整に時間がかかる場面がある」「事業・部署による文化や働き方の差が大きい」</strong>といった指摘も見られます。配属される事業・部署によって体験が大きく異なる傾向がうかがえます。
          </p>
          <p className="text-xs text-slate-500">出典：OpenWork掲載の社員クチコミの傾向を要約（個別スコア・原文の転載はしていません）。評価は部署・時期・職種により大きく異なります。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見たNEC</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>提出会社単体の<strong>平均年齢は42.6歳、平均勤続年数16.6年</strong>（2025年3月期・有報）。ミドル層が中核を占める落ち着いた組織で、30代・40代が多数派です。中途で入る場合は、即戦力としての専門性に加え、大企業ならではの進め方や品質意識に馴染めるかが定着のポイントになります。</p>
            <p>NECは<strong>ジョブ型人材マネジメントへ移行</strong>しており、職務・専門性に応じた処遇が進む方向です。これは、年功に頼らず専門性で評価されたい30代・40代にとって追い風になり得ます。AI（生体認証）・セキュリティ・社会インフラといった領域で専門性を深めてきた人にとっては、経験が活きる希少なポジションが見つかる可能性があります。一方で、モダンWeb技術やスタートアップ的なスピードを最優先したい場合は、大企業・社会インフラ特有の進め方との相性を事前に見極めることをおすすめします。</p>
            <p>年収面では全従業員平均963万円（2025年3月期・単体）が一つの基準となり、前職年収・賞与比率との比較が重要です。転職活動では、ミドル層の年収交渉・キャリア整理の観点も押さえておきたいところです。<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収相場</Link>や<Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の把握</Link>、<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>もあわせて確認してください。</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人・向いていない人</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <p className="font-bold text-green-800 text-sm mb-3">向いている人</p>
              <ul className="space-y-2 text-sm text-green-900">
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>AI・セキュリティ・社会インフラの専門性を活かしたい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>社会的影響の大きい大規模システムに関わりたい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>ジョブ型で専門性・職務を評価されたいミドル</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>安定した大手の処遇・基盤のなかで腰を据えたい</li>
              </ul>
            </div>
            <div className="border border-rose-200 bg-rose-50 rounded-lg p-5">
              <p className="font-bold text-rose-800 text-sm mb-3">向いていない人</p>
              <ul className="space-y-2 text-sm text-rose-900">
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>最新のモダンWeb技術を常に最優先で追いたい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>スタートアップ的なスピード・裁量を最重視する</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>大企業特有の調整・意思決定プロセスが苦手</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>少人数で何でも自分で回す環境を好む</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">大手IT・社会インフラ転職市場とNECの位置づけ</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>経済産業省「IT人材需給に関する調査」（2019年公表の試算）では、2030年に最大約79万人のIT人材不足が見込まれています。特にAI・セキュリティ・社会インフラを担える人材の需要は構造的に高く、NECのように社会的影響の大きい領域を幅広く手がける大手は、専門性を社会実装したいミドルにとって有力な選択肢です。</p>
            <p>年代別の年収水準の目安として、レバテックが公表する正社員SEの平均年収（2025年）は30代約499万円・40代約618万円とされています。これはIT職全般の平均で、NECの提出会社単体の全従業員平均963万円（2025年3月期・有報）はこれを上回ります。ただし有報の値は全従業員平均であり、職種・等級・賞与により個人差が大きい点に留意が必要です。</p>
            <p>つまりNECは「社会インフラ・AI・セキュリティの専門性を、安定した大手の処遇で評価する」企業といえます。ジョブ型移行により専門性が処遇に反映されやすくなりつつある一方、配属事業によって体験が大きく異なるため、自分の経験がどの事業・職務に合うかの見極めが転職成功の鍵になります。</p>
          </div>
        </section>

        <section id="agent" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">NEC転職におすすめのエージェント3社</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[{ name: "doda（IT）", href: "/review/doda-it/", desc: "国内最大級の求人数。大手電機・メーカー・社会インフラ系の求人を幅広くカバー。" }, { name: "リクルートエージェント（IT）", href: "/review/recruit-it/", desc: "求人数・実績が豊富で、大手企業の中途採用に強い。" }, { name: "ビズリーチ（IT）", href: "/review/bizreach-it/", desc: "ハイクラス・スカウト型。専門性の高いミドルのポジションに出会いやすい。" }].map((agent, i) => (<Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors"><h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3><p className="text-xs text-slate-500">{agent.desc}</p></Link>))}
          </div>
          <p className="text-xs text-slate-500 mt-3">特定企業の求人保有状況は時期により変動します。複数社の併用で求人の取りこぼしを防ぐのが定石です。詳しくは<Link href="/compare/agents/" className="text-petrol hover:underline">エージェント比較</Link>を参照してください。</p>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">NECへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">大手IT・社会インフラに強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/doda-it/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="faq" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq, i) => (<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[{ name: "横浜・神奈川のIT・エンジニア転職", href: "/area/yokohama/" },
{ name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "富士通の転職ガイド", href: "/company/fujitsu/" }, { name: "日立製作所の転職ガイド", href: "/company/hitachi/" }, { name: "NTTデータの転職ガイド", href: "/company/ntt-data/" }, { name: "AI／機械学習エンジニアの転職", href: "/skill/ai-ml/" }, { name: "40代の年収相場", href: "/knowledge/salary-40s/" }, { name: "40代エンジニアの転職", href: "/age/40s/" }].map((item, i) => (<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
