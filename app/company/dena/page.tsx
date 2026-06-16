import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "DeNAへのエンジニア転職｜年収・技術スタック・選考フロー【2026年版】",
  description:
    "DeNAのエンジニア中途採用を有価証券報告書・公式採用ページ・技術ブログの一次情報で解説。提出会社平均年収882.9万円(2025年3月期)、コーディングテスト、Go/AWS等の技術を中立にまとめました。",
};

const toc = [
  { id: "conclusion", label: "結論：転職難易度と向くエンジニア" },
  { id: "basic", label: "基本データ（出典付き）" },
  { id: "feature", label: "エンジニア採用の特徴" },
  { id: "stack", label: "技術スタック（公開情報）" },
  { id: "salary", label: "年収データ" },
  { id: "flow", label: "選考フロー" },
  { id: "interview", label: "面接で重視される点" },
  { id: "review", label: "社員口コミの傾向" },
  { id: "middle", label: "30代・40代から見たDeNA" },
  { id: "agent", label: "おすすめエージェント3社" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basicData: [string, string][] = [
  ["企業名", "株式会社ディー・エヌ・エー（証券コード2432・東証プライム）"],
  ["業種", "ゲーム・スポーツ・ヘルスケア・ライブストリーミング・AI 等"],
  ["平均年収", "882.9万円（2025年3月期・提出会社単体／全従業員平均・賞与含む）"],
  ["平均年齢", "37.9歳（2025年3月期・提出会社単体）"],
  ["従業員数", "1,448名（2025年3月期・提出会社単体）／連結 2,572名"],
  ["本社所在地", "東京都渋谷区"],
  ["技術スタック", "Go ／ Python ／ TypeScript ／ AWS ／ Kubernetes（EKS）／ Unity（ゲーム）等"],
];

const salaryRows: [string, string][] = [
  ["平均年収（提出会社単体・全従業員）", "882.9万円"],
  ["平均年齢", "37.9歳"],
  ["従業員数（提出会社単体／連結）", "1,448名／2,572名"],
];

const faqs = [
  { q: "DeNAはエンジニアの中途採用を行っている？", a: "はい。ゲーム、ライブストリーミング（Pococha）、ヘルスケア、スポーツDX、AIなど各事業でエンジニアの中途採用を継続的に行っています。サーバーサイド、フロントエンド、SRE／インフラ、機械学習エンジニアなど幅広い職種があります。" },
  { q: "DeNAの平均年収はいくら？", a: "2025年3月期の有価証券報告書によると、提出会社（株式会社ディー・エヌ・エー単体）の平均年間給与は882.9万円、平均年齢37.9歳です。これは賞与・基準外賃金を含む全従業員（エンジニア以外も含む）の平均で、職種別・等級別の内訳は公式には開示されていません。" },
  { q: "DeNAのエンジニア職の提示年収レンジは公開されている？", a: "DeNAは職種別・等級別の年収レンジを公式に常時開示しているわけではありません。求人サイトでも提示レンジが常に公開されているとは限らないため、当ガイドでは推測の数値表は掲載していません。基準値としては有価証券報告書の平均882.9万円（2025年3月期）が参考になります。" },
  { q: "DeNAの選考にはコーディングテストがある？", a: "エンジニア職では一般的に、書類選考の後にコーディングテスト（オンラインで自宅受験可・所要約2時間とされる）を実施し、その後に技術面接（複数回）という流れが知られています。アルゴリズム・データ構造・数学的思考が問われ、難易度は極端に高くはなく、ポテンシャルも見る傾向があると複数の受験記で語られています。" },
  { q: "DeNAの技術スタックは？", a: "公式技術ブログ「DeNA Engineering」では、Go（サーバーサイド）、AWS、Kubernetes（EKS）、GitOps／ArgoCD、TypeScript、Pythonなどに関する記事が継続的に公開されています。ゲーム事業ではUnityやサーバーサイド、AI事業では機械学習関連の技術が用いられます。" },
  { q: "DeNAの開発文化の特徴は？", a: "全エンジニア向けの「TechTalk」や、iOS／Androidなど領域別の勉強会、年次の技術カンファレンス「DeNA TechCon」など、社内外への技術発信・学習機会が整備されています。口コミでも若手の成長環境やフラットな技術文化への言及が見られます。" },
  { q: "DeNAへの転職で有利な経験は？", a: "Go／Python／TypeScriptなどでのWebアプリケーションの設計・開発・運用経験、AWS／GCP・Kubernetesでのインフラ／SRE経験、大規模サービスの開発経験が評価されやすい傾向です。ゲーム事業ではUnity・サーバーサイド、AI事業では機械学習・データ分析の実務経験が求められます。" },
  { q: "DeNAのコーディングテスト対策は？", a: "アルゴリズムとデータ構造の基礎を押さえ、競技プログラミング（AtCoder等）の基本問題に慣れておくのが定番です。難易度は中程度とされるため、数週間〜数か月の準備で対応できたという受験記も見られます。詳しくはコーディングテスト対策の記事も参照してください。" },
];

export default function DenaCompanyPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="DeNA エンジニア転職ガイド" description="DeNAへのエンジニア転職を有価証券報告書・公式採用ページ・技術ブログの一次情報で解説。提出会社平均年収882.9万円(2025年3月期)、コーディングテスト、Go/AWS等の技術をまとめました。" url="/company/dena/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "DeNA" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">DeNAへのエンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-600 text-sm leading-relaxed mb-2">
          株式会社ディー・エヌ・エー（DeNA）へのエンジニア中途採用について、有価証券報告書・公式採用ページ・技術ブログの一次情報をもとに、転職難易度・年収・技術スタック・選考フローを中立にまとめました。ゲーム、Pococha（ライブ配信）、ヘルスケア、スポーツDX、AIと事業領域が広く、Go・AWS・Kubernetesを軸にしたモダンな開発環境が特徴のメガベンチャーです。
        </p>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ 出典は各データの直後に明記しています。</p>

        <DataNote surveyedAt="2026年6月" sources={["DeNA 有価証券報告書（2025年3月期）", "DeNA 公式採用サイト", "DeNA Engineering（技術ブログ）", "OpenWork・受験記（口コミ／選考傾向）"]} />

        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：転職難易度と向くエンジニア</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-sm text-blue-900 font-bold mb-3">転職難易度：やや高い〜高い（コーディングテスト＋技術面接）</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>・選考で<strong>コーディングテスト（アルゴリズム）</strong>があり、Web系の基礎力が問われる。難易度は中程度とされ、対策すれば対応可能。</li>
              <li>・<strong>Go・AWS・Kubernetes</strong>を軸にしたモダンな開発環境。サーバーサイド／SRE／ML／ゲームと事業が広く、Web系・大規模サービス経験者に向く。</li>
              <li>・提出会社単体の平均年収は<strong>882.9万円（2025年3月期・有報）</strong>、平均年齢37.9歳と比較的若い組織。</li>
            </ul>
          </div>
        </section>

        <nav aria-label="目次" className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-700 text-sm mb-3">目次</p>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {toc.map((t) => (<li key={t.id}><a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a></li>))}
          </ol>
        </nav>

        <section id="basic" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ（出典付き）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm"><tbody>
              {basicData.map(([label, value], i) => (<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}><th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{label}</th><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td></tr>))}
            </tbody></table>
          </div>
          <p className="text-xs text-slate-500">出典：DeNA「有価証券報告書」2025年3月期（提出会社＝株式会社ディー・エヌ・エー単体の従業員データ／賞与・基準外賃金を含む）、DeNA公式採用サイト、技術ブログ「DeNA Engineering」。平均年収は全従業員平均で、職種別の内訳ではありません。</p>
        </section>

        <section id="feature" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">多角的な事業で幅広い技術経験</h3><p className="text-sm text-petrol-deep">ゲーム、Pococha（ライブ配信）、ヘルスケア、スポーツDX、AIなど多様な事業を持ち、異なる技術ドメインを経験できます。事業横断での異動の機会もあり、キャリアの幅を広げやすい環境です。</p></div>
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">技術発信・学習文化が活発</h3><p className="text-sm text-petrol-deep">公式技術ブログ「DeNA Engineering」や、全エンジニア向けの「TechTalk」、領域別勉強会、年次カンファレンス「DeNA TechCon」など、技術発信・学習の機会が整備されています。OSS活動や技術書執筆の支援も行われています。</p></div>
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">コーディングテストで地力を評価</h3><p className="text-sm text-petrol-deep">エンジニア採用ではコーディングテスト（アルゴリズム）を実施し、現時点のスキルだけでなくポテンシャルも見る傾向があるとされます。経験だけでなく基礎的な問題解決力が評価される選考設計です。</p></div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公式技術ブログの公開情報）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">以下は公式技術ブログ「DeNA Engineering」で公開されている記事タグ・内容に基づく代表的な技術です。事業・チームにより使用技術は異なります。</p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>Go（Golang）</strong>：サーバーサイド開発の主力。新卒研修でもGoでサーバーサイドを学ぶ記事が公開されている</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>AWS</strong>：CloudWatch、EKS など。インフラ／SREチームによる記事が多数</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>Kubernetes（EKS）／ GitOps・ArgoCD</strong>：コンテナ基盤・継続的デリバリの実践記事</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>TypeScript ／ Python</strong>：フロントエンド・データ／ML領域で使用</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>Unity</strong>：ゲーム事業のクライアント開発</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：DeNA公式技術ブログ「DeNA Engineering」（engineering.dena.com）の各タグ・記事。チーム・事業により使用技術は異なります。</p>
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
            上表はDeNAの<strong>有価証券報告書（2025年3月期）</strong>に記載された提出会社（株式会社ディー・エヌ・エー単体）の数値です。賞与・基準外賃金を含む<strong>エンジニア以外も含む全従業員の平均</strong>であり、職種別・等級別の年収は公式に開示されていません。そのため、当ガイドでは出典のない等級別年収表は掲載していません。
          </p>
          <p className="text-xs text-slate-500">出典：DeNA「有価証券報告書」2025年3月期。エンジニア職の提示年収レンジは継続的に確認できる公式・求人公開値がないため記載を控えています。</p>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公開情報ベース）</h2>
          <ol className="space-y-3">
            {[
              ["STEP 1", "応募・書類選考", "公式採用サイトまたはエージェント経由で応募。職務経歴書で経験を確認。"],
              ["STEP 2", "コーディングテスト", "オンラインで自宅受験（所要約2時間とされる）。アルゴリズム・データ構造・数学的思考を評価。"],
              ["STEP 3", "技術面接（複数回）", "技術面接（1回あたり約1時間とされる）。実務経験・設計力を深掘り。"],
              ["STEP 4", "カルチャーフィット・内定", "価値観・カルチャーのフィットを確認のうえ条件提示。"],
            ].map(([step, title, desc], i) => (
              <li key={i} className="flex gap-4 border border-slate-200 rounded-lg p-4">
                <span className="shrink-0 text-xs font-bold text-petrol-deep bg-petrol-soft rounded px-2 py-1 h-fit">{step}</span>
                <div><p className="font-bold text-slate-800 text-sm mb-1">{title}</p><p className="text-sm text-slate-600">{desc}</p></div>
              </li>
            ))}
          </ol>
          <p className="text-xs text-slate-500 mt-2">出典：DeNA公式採用情報、および複数の受験記・選考解説（コーディングテストの所要時間・面接の進め方）。具体的な回数・内容は職種・時期により異なります。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">具体的な質問リストは公式に公開されておらず、断定はできません。公開された選考傾向と口コミから、評価されやすいと考えられる観点を一般化して挙げます。</p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>アルゴリズム・データ構造の基礎力（コーディングテストで問われる）</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>Go・AWS・Kubernetes等を用いた大規模サービスの設計・運用経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>「こと」に向かう議論ができる、技術的な意思決定の根拠の説明力</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>事業ドメイン（ゲーム／ライブ配信／ヘルスケア／AI等）への関心とフィット</li>
          </ul>
        </section>

        <section id="review" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">社員口コミの傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            OpenWork等の口コミプラットフォームでは、DeNAについて<strong>「優秀なエンジニアが多い」「若手の成長環境が整っている」「働き方の自由度が高い」</strong>といった肯定的な声が見られます。エンジニアの労働条件については「以前より残業時間が減り改善傾向にある」という趣旨の言及もあります。一方で<strong>「評価は厳しく、高いパフォーマンス期待がある」「部署により労働環境に差がある」</strong>という指摘も見られ、実力主義の側面が強い傾向がうかがえます。
          </p>
          <p className="text-xs text-slate-500">出典：OpenWork掲載の社員クチコミの傾向を要約（個別スコア・原文の転載はしていません）。評価は部署・時期・職種により異なります。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見たDeNA</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>提出会社単体の<strong>平均年齢は37.9歳</strong>（2025年3月期・有報）で、メガベンチャーらしく比較的若い組織です。とはいえ事業領域が広く、大規模サービスの設計・SRE・MLなど高度な専門性を要するポジションが多いため、<strong>30代・40代の経験豊富なエンジニアが技術リードやスペシャリストとして活躍できる余地</strong>があります。</p>
            <p>注意したいのは選考のコーディングテストです。実務から離れてアルゴリズムに触れていないミドル層は、AtCoderの基本問題などで事前に感覚を取り戻しておくと安心です。年収は提出会社平均882.9万円が基準で、実力主義の評価ゆえにパフォーマンス次第で処遇が動く点も踏まえ、入社後の評価制度を面接で確認しておくとよいでしょう。Web系・モダン技術志向のミドルエンジニアにとっては、技術的にも事業的にも刺激の多い選択肢です。</p>
            <p>選考準備として、<Link href="/knowledge/coding-test/" className="text-petrol hover:underline">コーディングテスト対策</Link>と<Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接の進め方</Link>もあわせて確認してください。</p>
          </div>
        </section>

        <section id="agent" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">DeNA転職におすすめのエージェント3社</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[{ name: "レバテックキャリア", href: "/review/levtech/", desc: "IT特化でメガベンチャー求人に強い。技術面接対策のサポートあり。" }, { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム業界特化。Web系・ゲーム系企業への提案が豊富。" }, { name: "Green", href: "/review/green/", desc: "IT/Webベンチャーに強い成功報酬型サイト。カジュアル面談で社風を把握しやすい。" }].map((agent, i) => (<Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors"><h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3><p className="text-xs text-slate-500">{agent.desc}</p></Link>))}
          </div>
          <p className="text-xs text-slate-500 mt-3">求人保有状況は時期により変動します。<Link href="/compare/agents/" className="text-petrol hover:underline">エージェント比較</Link>もあわせて参照してください。</p>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">DeNAへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">メガベンチャーへの転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="faq" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq, i) => (<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[{ name: "AWSの転職ガイド", href: "/skill/aws/" }, { name: "フルスタックの転職ガイド", href: "/skill/typescript/" }, { name: "Pythonの転職ガイド", href: "/skill/python/" }, { name: "Unityの転職ガイド", href: "/skill/unity/" }, { name: "Kubernetesの転職ガイド", href: "/skill/kubernetes/" }, { name: "サイバーエージェントの転職ガイド", href: "/company/cyberagent/" }, { name: "メルカリの転職ガイド", href: "/company/mercari/" }, { name: "任天堂の転職ガイド", href: "/company/nintendo/" }, { name: "バンダイナムコの転職ガイド", href: "/company/bandai-namco/" }, { name: "コーディングテスト対策", href: "/knowledge/coding-test/" }, { name: "技術面接の進め方", href: "/knowledge/tech-interview/" }].map((item, i) => (<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
