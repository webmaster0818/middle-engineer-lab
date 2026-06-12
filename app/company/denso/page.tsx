import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "デンソーの年収は平均863万円【2026年・有報】エンジニア転職と車載・SDV開発",
  description:
    "デンソーのソフトウェアエンジニア中途採用を有価証券報告書・公式採用情報の一次情報で解説。平均年収863万円(2025年3月期・全従業員平均)、車載ソフト・SDV・ADASの開発、30代40代の現実を中立にまとめました。",
};

const toc = [
  { id: "conclusion", label: "結論：転職難易度と向くエンジニア" },
  { id: "basic", label: "基本データ（出典付き）" },
  { id: "feature", label: "エンジニア採用の特徴" },
  { id: "stack", label: "技術領域（公開情報の範囲）" },
  { id: "salary", label: "年収データ" },
  { id: "flow", label: "選考フローについて" },
  { id: "review", label: "社員口コミの傾向" },
  { id: "middle", label: "30代・40代から見たデンソー" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "agent", label: "おすすめエージェント3社" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basicData: [string, string][] = [
  ["企業名", "株式会社デンソー（証券コード6902・東証プライム）"],
  ["業種", "輸送用機器（自動車部品大手・車載システム／ソフトウェア）"],
  ["平均年収", "約863万円（2025年3月期・提出会社単体／正社員平均・賞与含む）※エンジニア単独でない全社員平均"],
  ["平均年齢", "44.8歳（2025年3月期・提出会社単体）"],
  ["平均勤続年数", "23.1年（2025年3月期・提出会社単体）"],
  ["本社所在地", "愛知県刈谷市"],
  ["技術領域", "車載ソフトウェア／SOA／ADAS・自動運転／車載AI（専用採用サイト careers.denso.com/software を運営）"],
];

const salaryRows: [string, string][] = [
  ["平均年収（提出会社単体・正社員平均）", "約863万円"],
  ["平均年齢", "44.8歳"],
  ["平均勤続年数", "23.1年"],
];

const faqs = [
  { q: "デンソーの平均年収はいくら？", a: "2025年3月期の有価証券報告書によると、提出会社（株式会社デンソー単体）の正社員平均年間給与は約863万円、平均年齢44.8歳、平均勤続年数23.1年です。これは賞与を含む全従業員（エンジニア以外も含む）の平均で、ソフトウェアエンジニア職単独・等級別の内訳は公式には開示されていません。" },
  { q: "デンソーはソフトウェアエンジニアの中途採用を行っている？", a: "はい。デンソーはソフトウェア人材向けの専用採用サイト（careers.denso.com/software）を運営しており、車載ソフトウェア・SDV・自動運転・車載AIなどの領域でキャリア採用を積極的に行っています。SDV（Software Defined Vehicle）化に伴うソフトウェア人材の登用を強化している点が特徴です。募集職種は時期により変動するため、最新は公式採用サイトをご確認ください。" },
  { q: "デンソーではどんなソフトウェア開発をしている？", a: "車載ソフトウェア全般、SOA（サービス指向アーキテクチャ）、ADAS・自動運転、車載AIなどが中核領域です。クルマがソフトウェアで価値を定義されるSDV化の流れの中で、組込ソフトウェアからクラウド連携まで幅広いレイヤーの開発が行われています。具体的な使用言語・ツールは募集職種により異なるため、各求人で確認が必要です。" },
  { q: "デンソーの開発言語は？", a: "車載・組込領域では一般にC/C++やモデルベース開発（MBD）が想定されますが、デンソーは統一された技術スタック一覧を社外に体系公開していません。SDV・クラウド連携領域ではモダンな言語が使われる募集もあるため、具体的な言語・フレームワークは各募集要項で確認する必要があります。当ガイドでは推測の言語一覧表は掲載していません。" },
  { q: "デンソーへの転職難易度は？", a: "自動車部品の世界的大手であり、車載ソフト・SDV領域の経験者は高く評価される一方、即戦力としての専門性が問われます。組込・車載ソフト・ADAS・モデルベース開発などの実務経験があると親和性が高いと考えられます。Web系のみの経験からの転身は、ドメイン知識の習得が前提になります。" },
  { q: "デンソーの選考フローは？", a: "デンソーは中途採用の詳細な選考フローを体系的に公式公開しているわけではありません。一般に書類選考と複数回の面接が想定されますが、回数・内容は募集職種により変わります。当ガイドでは出典のない面接質問リストや等級別年収表は掲載していません。最新の選考内容は応募時に確認してください。" },
  { q: "デンソーは40代エンジニアでも転職できる？", a: "提出会社単体の平均年齢は44.8歳、平均勤続年数23.1年（2025年3月期・有報）と、ミドル〜シニア層が中核の組織です。車載ソフト・SDV・自動運転などの専門性を持つ40代エンジニアにとっては、経験が直接活きるポジションが想定されます。年齢よりも、SDV化を支える専門スキルと実績が評価の鍵になります。" },
];

export default function DensoCompanyPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="デンソー エンジニア転職ガイド" description="デンソーへのソフトウェアエンジニア転職を有価証券報告書・公式採用情報の一次情報で解説。平均年収863万円(2025年3月期)、車載ソフト・SDV・ADAS、30代40代の現実をまとめました。" url="/company/denso/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "デンソー" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">デンソーへのエンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-600 text-sm leading-relaxed mb-2">
          株式会社デンソーへのソフトウェアエンジニア中途採用について、有価証券報告書と公式採用情報の一次情報をもとに、転職難易度・年収・技術領域・選考を中立にまとめました。自動車部品の世界的大手が、クルマの価値をソフトウェアで定義する<strong>SDV（Software Defined Vehicle）</strong>化に向けてソフトウェア人材の登用を強化している点を、ミドル層の視点で整理します。
        </p>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ 出典は各データの直後に明記しています。</p>

        <DataNote surveyedAt="2026年6月" sources={["デンソー 有価証券報告書（2025年3月期）", "デンソー ソフトウェア採用サイト（careers.denso.com/software）", "IRBANK", "OpenWork（口コミ傾向）"]} />

        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：転職難易度と向くエンジニア</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-sm text-blue-900 font-bold mb-3">転職難易度：中〜高（車載ソフト・SDV経験者を積極登用）</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>・<strong>車載ソフトウェア・SDV・ADAS・自動運転・車載AI</strong>が中核領域。ソフトウェア専用採用サイトを運営し、人材登用を強化中。</li>
              <li>・年収は<strong>正社員平均約863万円（2025年3月期・有報）</strong>。これはエンジニア単独でなく全社員平均。</li>
              <li>・平均勤続年数23.1年と定着率が高く、組込・車載ソフトの専門性を持つ即戦力に向く。</li>
            </ul>
            <p className="text-xs text-blue-800 mt-3">クルマのソフトウェア化という巨大な変革をリードできる一方、ドメイン知識（車載・安全規格）の習得が前提になる点に留意が必要です。</p>
          </div>
        </section>

        <nav aria-label="目次" className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-700 text-sm mb-3">目次</p>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}><a href={`#${t.id}`} className="text-blue-600 hover:underline">{t.label}</a></li>
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
          <p className="text-xs text-slate-500">出典：デンソー「有価証券報告書」2025年3月期（提出会社＝株式会社デンソー単体の従業員データ）、IRBANK集計、デンソー ソフトウェア採用サイト。平均年収は正社員（全従業員）平均で、職種別の内訳は非開示です。</p>
        </section>

        <section id="feature" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">SDV化を支えるソフトウェア専用採用</h3><p className="text-sm text-blue-700">デンソーはソフトウェア人材向けの専用採用サイト（careers.denso.com/software）を運営しています。クルマの価値をソフトウェアが定義するSDV化の流れの中で、車載ソフト・SOA・自動運転・車載AIといった領域のエンジニアを積極的に登用しています。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">組込からクラウドまで幅広いレイヤー</h3><p className="text-sm text-blue-700">マイコン上で動く制御ソフトの組込領域から、SOA（サービス指向アーキテクチャ）、クラウド連携まで、車載ソフトウェアは幅広いレイヤーをカバーします。担当領域により求められるスキルセットが異なるのが特徴です。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">高い定着率とミドル中核の組織</h3><p className="text-sm text-blue-700">提出会社単体の平均勤続年数は23.1年、平均年齢44.8歳（2025年3月期・有報）。長期就業者が中核を占める安定した組織で、腰を据えて専門性を磨く環境といえます。</p></div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術領域（公開情報の範囲）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">デンソーは社外向けに統一された技術スタック一覧を体系公開していないため、当ガイドでは<strong>具体的な使用言語・フレームワークの一覧表は作成しません</strong>（推測での創作を避けるため）。公開情報・採用情報から確認できる技術領域は以下の通りです。</p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>車載ソフトウェア</strong>：ECU・車載制御ソフトの開発領域</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>SOA（サービス指向アーキテクチャ）</strong>：SDV化を支えるソフトウェアアーキテクチャ領域</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>ADAS・自動運転</strong>：先進運転支援・自動運転システムの開発領域</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>車載AI</strong>：認識・判断などのAI関連領域</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span>組込・車載領域では一般にC/C++やモデルベース開発が想定されますが、<strong>公式の統一情報がないため断定はしません</strong>。具体的言語は各募集要項で確認してください。</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：デンソー ソフトウェア採用サイト（careers.denso.com/software）で確認できる技術領域に基づく記述。具体的な開発言語・内製ツールの統一一覧は公開されていないため、推測の言語表は掲載していません。</p>
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
            上表はデンソーの<strong>有価証券報告書（2025年3月期）</strong>に記載された提出会社（株式会社デンソー単体）の数値です。これは<strong>エンジニア以外も含む全従業員（正社員）の平均</strong>であり、職種別・等級別の年収は公式に開示されていません。そのため、当ガイドでは出典のない等級別年収表は掲載していません。
          </p>
          <p className="text-xs text-slate-500">出典：デンソー「有価証券報告書」2025年3月期、IRBANK集計。ソフトウェアエンジニア職の提示年収レンジは、公式・求人サイトで継続的に確認できる公開値がないため記載を控えています。</p>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フローについて</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>デンソーは中途採用の詳細な選考フローを体系的に公式公開しているわけではありません。一般に書類選考と複数回の面接が想定されますが、回数・内容・所要期間は募集職種や時期により変動します。</p>
            <p>具体的な面接質問リストも公式には公開されておらず、当ガイドでは<strong>出典のない面接質問や等級別年収表は掲載していません</strong>。応募時には、各募集要項で求められるスキル要件・選考プロセスを直接確認することをおすすめします。</p>
          </div>
        </section>

        <section id="review" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">社員口コミの傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            OpenWork等の口コミプラットフォームでは、デンソーについて<strong>「大手メーカーとしての安定性・福利厚生への評価が高い」「技術的な裾野が広く、車載という巨大ドメインに関われる」</strong>といった傾向の声が見られます。一方で、<strong>「大企業ゆえの意思決定の速度感」「部署により働き方・文化に差がある」</strong>といった指摘も見られます。評価は部署・職種・時期により大きく異なります。
          </p>
          <p className="text-xs text-slate-500">出典：OpenWork掲載の社員クチコミの傾向を要約（個別スコア・原文の転載はしていません）。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見たデンソー</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>提出会社単体の<strong>平均年齢は44.8歳、平均勤続年数23.1年</strong>（2025年3月期・有報）。ミドル〜シニア層が中核を占める組織で、30代・40代で中途入社しても年齢構成的に浮きにくい環境といえます。中途では即戦力としての専門性が問われる一方、長期就業を前提とした腰を据えたキャリア形成がしやすい点が特徴です。</p>
            <p>30代・40代の車載ソフト・組込・ADAS経験者にとって、デンソーは「<strong>SDV化という巨大変革をリードできる</strong>」希少なフィールドです。クルマのソフトウェア定義化は今後も需要が拡大する領域であり、専門性が長く活きる可能性があります。一方、Web系のみの経験からの転身は車載ドメイン・機能安全などの知識習得が前提になる点に注意が必要です。</p>
            <p>転職活動では、ミドル層の年収交渉・市場価値の整理も押さえておきたいところです。<Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代の年収相場</Link>や<Link href="/skill/embedded/" className="text-blue-600 hover:underline">組込エンジニアの転職</Link>、<Link href="/industry/manufacturing/" className="text-blue-600 hover:underline">製造業エンジニアの転職</Link>もあわせて確認してください。</p>
          </div>
        </section>

        <section id="fit" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人・向いていない人</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <p className="font-bold text-green-800 text-sm mb-3">向いている人</p>
              <ul className="space-y-2 text-sm text-green-900">
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>車載ソフト・組込・ADASの専門性を持つ即戦力</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>SDV・自動運転という大きなテーマに長期で関わりたい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>大手メーカーの安定性と腰を据えたキャリア形成を重視</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>SOA・クラウド連携など新しいアーキテクチャに挑戦したい</li>
              </ul>
            </div>
            <div className="border border-rose-200 bg-rose-50 rounded-lg p-5">
              <p className="font-bold text-rose-800 text-sm mb-3">向いていない人</p>
              <ul className="space-y-2 text-sm text-rose-900">
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>車載・組込ドメインの習得に関心が持てない</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>スタートアップ的な意思決定スピードを最優先したい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>短期間での昇給・等級ジャンプを第一に考えている</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>ソフトウェアの実務経験がなく未経験参入を狙う</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="agent" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">デンソー転職におすすめのエージェント3社</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[{ name: "レバテックキャリア", href: "/review/levtech/", desc: "IT・組込・車載領域に強く、技術面接対策のサポートも受けられる。" }, { name: "ビズリーチ（IT）", href: "/review/bizreach-it/", desc: "ハイクラス特化。大手メーカーの専門職・高年収ポジションのスカウトが届きやすい。" }, { name: "doda（IT）", href: "/review/doda-it/", desc: "国内最大級の求人数。メーカー・大手の求人を幅広くカバー。" }].map((agent, i) => (<Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors"><h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3><p className="text-xs text-slate-500">{agent.desc}</p></Link>))}
          </div>
          <p className="text-xs text-slate-500 mt-3">特定企業の求人保有状況は時期により変動します。複数社の併用で求人の取りこぼしを防ぐのが定石です。詳しくは<Link href="/compare/agents/" className="text-blue-600 hover:underline">エージェント比較</Link>を参照してください。</p>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">デンソーへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">車載ソフト・SDV領域の求人に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="faq" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq, i) => (<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[{ name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "トヨタ自動車の転職ガイド", href: "/company/toyota/" }, { name: "キーエンスの転職ガイド", href: "/company/keyence/" }, { name: "パナソニックの転職ガイド", href: "/company/panasonic/" }, { name: "組込エンジニアの転職", href: "/skill/embedded/" }, { name: "製造業エンジニアの転職", href: "/industry/manufacturing/" }, { name: "40代エンジニアの転職の現実", href: "/knowledge/40s-reality/" }].map((item, i) => (<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
