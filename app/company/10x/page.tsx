import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/10x/" },
  title: "10Xの年収・給与とエンジニア転職【2026年】フルDartの技術環境",
  description:
    "10X（テンエックス・非上場）のエンジニア中途採用を公式Product Blog等の一次情報で解説。クライアントからサーバーまで100% Dartという珍しい技術スタック、Stailerの開発、年収の考え方、30代40代の転職可否を中立にまとめました。",
};

const toc = [
  { id: "conclusion", label: "結論：転職難易度と向くエンジニア" },
  { id: "basic", label: "基本データ（出典付き）" },
  { id: "feature", label: "エンジニア採用の特徴" },
  { id: "stack", label: "技術スタック（フルDart・公式確認範囲）" },
  { id: "salary", label: "年収データ" },
  { id: "flow", label: "選考フロー" },
  { id: "interview", label: "面接で重視される点" },
  { id: "review", label: "社員口コミの傾向" },
  { id: "middle", label: "30代・40代から見た10X" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "agent", label: "おすすめエージェント3社" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basicData: [string, string][] = [
  ["企業名", "株式会社10X（テンエックス・非上場）"],
  ["設立", "2017年"],
  ["事業内容", "ネットスーパー／ネットドラッグストアのプラットフォーム「Stailer」の開発・提供（EC／SCM領域）"],
  ["平均年収", "非上場のため有価証券報告書による全社員平均は存在しない（集計値も公式値ではない参考値）"],
  ["技術スタック", "フルDart（クライアントはFlutter／サーバーも100% Dart）／GCP（GKE）／Firebase・Firestore／gRPC／Elasticsearch／Datadog＋PagerDuty"],
  ["特徴", "クライアントからサーバーまでDartで統一する珍しい構成。Flutter未経験からの採用事例もあり"],
];

const faqs = [
  { q: "10Xはエンジニアの中途採用を行っている？", a: "はい。10Xは公式採用ページ・技術発信（Product Blog）でソフトウェアエンジニアを継続的に募集しています。ネットスーパー／ネットドラッグストアのプラットフォーム「Stailer」の開発を担うポジションが中心です。募集職種は時期により変動するため、最新は公式採用ページをご確認ください。" },
  { q: "10Xの平均年収はいくら？", a: "10Xは非上場企業のため、有価証券報告書による全社員平均年収は公開されていません。集計サイトの数値も公式値ではない参考値です。正確な提示額は職種・等級・スキルにより幅があるため、応募・面談で確認するのが確実です。当ガイドでは創作した等級別年収表は掲載していません。" },
  { q: "10Xの技術スタックは？フルDartとはどういうこと？", a: "公式のProduct Blogによると、10Xはクライアント（モバイルアプリ）をFlutterで開発するだけでなく、サーバーサイドも100% Dartで構築している珍しい「フルDart」の構成です。インフラはGCP（GKE）、Firebase・Firestore、サービス間通信にgRPC、検索にElasticsearch、監視にDatadog＋PagerDutyを利用しています。言語をDartに統一することでクライアント／サーバー間のコード共有や認知コスト低減を図っています。" },
  { q: "10Xの選考フローは？", a: "10Xは選考フローの詳細を固定で公式公開しているわけではありません。一般的にスタートアップでは書類選考・カジュアル面談・複数回の面接・課題などで構成されますが、職種・時期により異なります。当ガイドでは公開されていない具体的な選考ステップや面接質問の断定は避けています。最新は公式採用ページ・面談でご確認ください。" },
  { q: "Flutter／Dartの実務経験がないと10Xには転職できない？", a: "10XはFlutter未経験からの採用事例もあるとされています。サーバーサイドも含めDartに統一されているため、他言語でのバックエンド・モバイル開発の実務経験があれば、Dart／Flutterは入社後にキャッチアップする前提のポジションもあると考えられます。具体的な必須要件は各募集要項で確認してください。" },
  { q: "30代・40代でも10Xに転職できる？", a: "10XはEC／SCMという業務ドメインの理解と、堅牢なシステムを設計・運用する力が問われる領域です。Flutter／Dartの経験があれば直接活き、なくても他言語でのバックエンド・モバイル開発やGCP／Kubernetesの運用経験を持つミドルには親和性があります。年代別の公式データはありませんが、即戦力性が評価される土俵です。" },
  { q: "Stailerとはどんなプロダクト？", a: "Stailerは、小売事業者がネットスーパー／ネットドラッグストアを立ち上げ・運営するためのプラットフォームです。ECのフロントだけでなく、在庫・物流・店舗オペレーション（SCM）まで関わる複雑なドメインで、堅牢性とスケーラビリティが求められる技術的チャレンジがあります（出典：10X公式）。" },
  { q: "10Xの働き方・リモートワークは？", a: "10Xはプロダクト開発を行うスタートアップで、リモートを活用した柔軟な働き方を取り入れているとされますが、職種・チームにより方針が異なります。可否・頻度は募集要項・面談で確認するのが確実です。当ガイドでは公式に確認できない勤務条件の断定は避けています。" },
];

export default function TenXCompanyPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="10X（テンエックス）エンジニア転職ガイド" description="10Xへのエンジニア転職を公式Product Blog等の一次情報で解説。クライアントからサーバーまで100% Dartという珍しい技術、Stailerの開発、年収の考え方をまとめました。" url="/company/10x/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "10X" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">10X（テンエックス）へのエンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-600 text-sm leading-relaxed mb-2">
          株式会社10Xへのエンジニア中途採用について、公式採用ページとProduct Blogの一次情報をもとに、転職難易度・年収・技術スタック・選考の考え方を中立にまとめました。ネットスーパー／ネットドラッグストアのプラットフォーム「Stailer」を、クライアントからサーバーまで100% Dartで開発する、技術選定が極めて特徴的なスタートアップです。
        </p>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ 出典は各データの直後に明記しています。</p>

        {/* 直答box (P0/company年収) */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】10X（テンエックス）の年収は？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: 株式会社10Xは非上場のため、有価証券報告書による全社員平均年収は公表されていません。集計サイトの数値も公式値ではない参考値です。</strong></p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・非上場ゆえ公式の平均年収は存在せず（有報なし）、集計サイトの値も公式値ではない参考値です。</li><li>・当ガイドでは創作した等級別年収表は掲載していません。提示額は職種・等級・スキルにより幅があります。</li><li>・フルDartという希少スキルは中長期の市場価値につながり得ます。正確な提示額は応募・面談でご確認ください。</li></ul>
        </div>

        <DataNote surveyedAt="2026年6月" sources={["10X 公式採用サイト", "10X Product Blog（技術発信）", "集計サイトの年収参考値（公式値ではない）", "OpenWork（口コミ傾向）"]} />

        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：転職難易度と向くエンジニア</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-sm text-blue-900 font-bold mb-3">転職難易度：高め（フルDart・EC/SCMドメインの即戦力志向）</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>・クライアント<strong>Flutter</strong>、サーバーも<strong>100% Dart</strong>という珍しい構成。Dart／Flutter経験者は直接活き、他言語経験者もキャッチアップ前提で対象になり得る。</li>
              <li>・<strong>EC／SCM（在庫・物流・店舗オペレーション）</strong>という複雑なドメイン。堅牢性・スケーラビリティを設計できる力が問われる。</li>
              <li>・<strong>GCP（GKE）／Firestore／gRPC</strong>などモダンなクラウドネイティブ構成。インフラ・分散システムの経験が活きる。</li>
            </ul>
            <p className="text-xs text-blue-800 mt-3">非上場のため全社平均年収の公式値はありません。集計値も公式値ではない参考値です。フルDartは他社で経験を積みにくい一方、希少なスキルとして専門性を高められます。複数言語を自由に選びたい人や大企業の安定を最優先する人にはミスマッチが起こり得ます。</p>
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
              {basicData.map(([label, value], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}><th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{label}</th><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td></tr>
              ))}
            </tbody></table>
          </div>
          <p className="text-xs text-slate-500">出典：10X公式採用サイト、10X Product Blog。10Xは非上場のため、上場企業のような有価証券報告書ベースの全社員平均年収は存在しません。集計サイトの年収値は公式値ではない参考値です。</p>
        </section>

        <section id="feature" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">ネットスーパーDXのプラットフォーム「Stailer」</h3><p className="text-sm text-petrol-deep">10Xは2017年設立で、小売事業者がネットスーパー／ネットドラッグストアを立ち上げ・運営できるプラットフォーム「Stailer」を提供しています。ECのフロントに留まらず、在庫・物流・店舗オペレーション（SCM）まで関わる複雑で社会的意義の大きいドメインが特徴です。</p></div>
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">クライアントからサーバーまでフルDart</h3><p className="text-sm text-petrol-deep">10X最大の特徴は、クライアント（モバイルアプリ）をFlutterで開発するだけでなく、サーバーサイドも100% Dartで構築している点です。言語を統一することでコード共有・認知コスト低減・チーム間の流動性を高める狙いがあり、業界的にも珍しい技術選定として知られています。</p></div>
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">Flutter未経験からの採用事例も</h3><p className="text-sm text-petrol-deep">10XではFlutter／Dart未経験から入社した事例もあるとされています。言語そのものよりも、複雑なドメインを設計する力・他言語での実務経験・学習意欲が重視される傾向があり、Dart縛りが必ずしも参入障壁にならない点はミドルにとって重要です。</p></div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（フルDart・公式確認範囲）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">以下は10XのProduct Blog・公式採用情報で公開されている範囲の情報です。プロダクトの拡大に伴い構成は変化するため、最新は公式発信・募集要項でご確認ください。</p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>クライアント</strong>：Flutter（Dart）でのモバイルアプリ開発</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>サーバー</strong>：100% Dart。クライアントとサーバーを同一言語で統一</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>クラウド</strong>：GCP（GKE＝Google Kubernetes Engine）</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>データ</strong>：Firebase／Firestore、検索にElasticsearch</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>通信</strong>：gRPC によるサービス間通信</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>監視・運用</strong>：Datadog＋PagerDuty</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：10X Product Blog・公式採用情報。<Link href="/skill/flutter/" className="text-petrol hover:underline">Flutter／Dart</Link>・<Link href="/skill/gcp/" className="text-petrol hover:underline">GCP</Link>・<Link href="/skill/kubernetes/" className="text-petrol hover:underline">Kubernetes</Link>の各ガイドも市場動向の参考になります。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-4 text-sm text-amber-900">
            10Xは<strong>非上場のため、有価証券報告書による全社員平均年収は存在しません</strong>。集計サイトの数値も<strong>公式値ではない参考値</strong>です。実際の提示額は職種・等級・スキルにより幅があり、応募・面談で確認するのが確実です。
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-2">
            10Xは職種別・等級別の年収レンジを固定で公式開示しているわけではなく、信頼できる公式の年収一次情報は限られます。そのため当ガイドでは、<strong>創作した等級別年収表や根拠の薄い断定的な数値は掲載していません</strong>。年収はスタートアップとして市場水準を踏まえた提示が行われると考えられますが、正確な金額は応募・面談で確認してください。フルDartという希少スキルは、専門性として中長期の市場価値につながり得る点も判断材料になります。
          </p>
          <p className="text-xs text-slate-500">出典：年収に関する公式の一次情報は限定的。集計サイトの値は公式値ではない参考値です。正確な提示額は公式募集要項・面談でご確認ください。</p>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式に詳細は非公開）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            10Xは選考フローの詳細を固定で公式公開しているわけではありません。一般的なスタートアップでは「書類選考 → カジュアル面談 → 複数回の面接 →（職種により課題）→ オファー」という流れが多いですが、職種・時期によって異なります。当ガイドでは<strong>公開されていない具体的な選考ステップや面接質問の断定は避けています</strong>。
          </p>
          <p className="text-xs text-slate-500">出典：上記は一般的なスタートアップ採用の傾向であり、10X固有の確定フローではありません。正確な選考プロセスは公式採用ページ・カジュアル面談でご確認ください。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・技術ドメインベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">具体的な面接質問リストは公式に公開されておらず、断定はできません。公開されている技術スタック・事業ドメインから、評価されやすいと考えられるポイントを一般化して挙げます。</p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>複雑なドメイン（EC／SCM・在庫・物流）を抽象化し堅牢に設計する力</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>Dart／Flutter経験（なくても他言語でのバックエンド・モバイル開発の実務）</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>GCP（GKE）・gRPC・分散システムの設計・運用経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>新しい技術（フルDart）を前向きに学ぶ姿勢・カルチャーフィット</li>
          </ul>
        </section>

        <section id="review" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">社員口コミの傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            OpenWork等の口コミプラットフォームでは、10Xについて<strong>「技術的な挑戦（フルDart）が面白い」「事業ドメインが社会的に意義深い」</strong>といった声が見られる一方、<strong>「スタートアップ特有の変化の速さや、技術選定が独特ゆえの学習コストがある」</strong>といった指摘も見られます。技術選定と事業ミッションへの共感が定着の鍵になる傾向がうかがえます。
          </p>
          <p className="text-xs text-slate-500">出典：OpenWork掲載の社員クチコミの傾向を要約（個別スコア・原文の転載はしていません）。評価は部署・時期・職種により大きく異なります。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見た10X</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>10Xの<strong>フルDart</strong>は、他社ではまず経験できない希少な技術選定です。30代・40代のミドルにとっては、すでに持っている設計力・ドメイン理解を土台に、Dart／Flutterという専門性を上乗せできる機会になります。Flutter未経験からの採用事例もあるとされるため、言語そのものより「複雑なドメインを堅牢に設計できるか」が問われる土俵です。</p>
            <p>EC／SCM（在庫・物流・店舗オペレーション）は業務理解が成果に直結する領域で、これまで小売・物流・基幹システムに関わってきたミドルの知見が活きやすい点も特徴です。一方で、フルDartは転職市場での横展開（他社での再利用）がしにくい側面があり、キャリアの可搬性を重視する場合は事前に整理しておきたいところです。非上場のため将来のIPOやストックオプションの扱いは公式の確定情報がなく、年収は提示額ベースで判断するのが現実的です。</p>
            <p>SIerやSESから自社プロダクト開発へ移りたいミドルには<Link href="/industry/sier-to-web/" className="text-petrol hover:underline">SIerからWEB系への転職</Link>が、年収交渉・キャリア整理には<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収相場</Link>や<Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の把握</Link>が参考になります。</p>
          </div>
        </section>

        <section id="fit" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人・向いていない人</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <p className="font-bold text-green-800 text-sm mb-3">向いている人</p>
              <ul className="space-y-2 text-sm text-green-900">
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>Flutter／Dart経験者、または新技術を前向きに学べるミドル</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>EC／SCM・小売・物流などのドメイン知見を持つ</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>GCP（GKE）・分散システムの設計・運用が得意</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>希少な技術選定で専門性を高めたい</li>
              </ul>
            </div>
            <div className="border border-rose-200 bg-rose-50 rounded-lg p-5">
              <p className="font-bold text-rose-800 text-sm mb-3">向いていない人</p>
              <ul className="space-y-2 text-sm text-rose-900">
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>使用言語を自由に選びたい（フルDart統一との相性）</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>スキルの横展開（汎用性）を最優先したい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>確立された大企業の安定・明確な等級制度を最優先したい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>整備された制度・手厚い既存ドキュメントを前提に働きたい</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">EC／SCM・スタートアップ転職市場と10Xの位置づけ</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>経済産業省「IT人材需給に関する調査」（2019年公表の試算）では、2030年に最大約79万人のIT人材不足が見込まれています。小売のネットスーパー化・SCMのデジタル化は需要が拡大する領域で、10XはそのプラットフォーマーとしてStailerを展開しています。</p>
            <p>年代別の年収水準の目安として、レバテックが公表する正社員SEの平均年収（2025年）は30代約499万円・40代約618万円とされています。これはIT職全般の平均であり、10Xの実際の提示額は職種・等級で異なります（公式の年収一次情報は限定的）。</p>
            <p>フルDartという独自性は、技術的好奇心の強いミドルにとって魅力ですが、キャリアの可搬性とのバランスは個々の価値観で判断するのが現実的です。<Link href="/skill/flutter/" className="text-petrol hover:underline">Flutterエンジニアの転職市場</Link>もあわせて確認してください。</p>
          </div>
        </section>

        <section id="agent" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">10X転職におすすめのエージェント3社</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[{ name: "レバテックキャリア", href: "/review/levtech/", desc: "IT特化で自社開発・SaaS求人に強い。技術面接対策のサポートも受けられる。" }, { name: "ビズリーチ", href: "/review/bizreach-it/", desc: "ハイクラス・スタートアップのスカウトが届きやすい。ミドル層の選択肢を広げやすい。" }, { name: "Green", href: "/review/green/", desc: "IT/Web・スタートアップ求人に強い。カジュアル面談につながりやすい。" }].map((agent, i) => (<Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors"><h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3><p className="text-xs text-slate-500">{agent.desc}</p></Link>))}
          </div>
          <p className="text-xs text-slate-500 mt-3">特定企業の求人保有状況は時期により変動します。複数社の併用で求人の取りこぼしを防ぐのが定石です。詳しくは<Link href="/compare/agents/" className="text-petrol hover:underline">エージェント比較</Link>を参照してください。</p>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">10Xへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">スタートアップ・自社開発企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="faq" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq, i) => (<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[{ name: "Ubieの転職ガイド", href: "/company/ubie/" }, { name: "カケハシの転職ガイド", href: "/company/kakehashi/" }, { name: "Flutterエンジニアの転職", href: "/skill/flutter/" }, { name: "GCPエンジニアの転職", href: "/skill/gcp/" }, { name: "SIerからWEB系への転職", href: "/industry/sier-to-web/" }, { name: "40代エンジニアの転職の現実", href: "/knowledge/40s-reality/" }].map((item, i) => (<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
