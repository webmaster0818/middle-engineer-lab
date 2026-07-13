import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/ubie/" },
  title: "Ubieの年収・給与とエンジニア転職【2026年】技術スタック・選考",
  description:
    "Ubie（ユビー）のエンジニア中途採用を公式採用ページ・技術発信の一次情報で解説。非上場のため全社平均年収はなく、職種別レンジ・Go/Node.js/GCPの技術スタック・30代40代の転職可否を中立にまとめました。",
};

const toc = [
  { id: "conclusion", label: "結論：転職難易度と向くエンジニア" },
  { id: "basic", label: "基本データ（出典付き）" },
  { id: "feature", label: "エンジニア採用の特徴" },
  { id: "stack", label: "技術スタック（公式確認範囲）" },
  { id: "salary", label: "年収データ（職種別レンジ）" },
  { id: "flow", label: "選考フロー" },
  { id: "interview", label: "面接で重視される点" },
  { id: "review", label: "社員口コミの傾向" },
  { id: "middle", label: "30代・40代から見たUbie" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "agent", label: "おすすめエージェント3社" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basicData: [string, string][] = [
  ["企業名", "Ubie株式会社（ユビー・非上場）"],
  ["設立", "2017年（医師とエンジニアが共同創業）"],
  ["事業内容", "症状検索エンジン「ユビー」など、生活者・医療機関向けヘルステックSaaSの開発・提供"],
  ["平均年収", "非上場のため有価証券報告書による全社員平均は存在しない（公式の職種別レンジは「年収データ」章を参照）"],
  ["技術スタック", "Go／Node.js（全社で標準化）／TypeScript・Next.js（フロント）／gRPC（サービス間）／GraphQL（外向け）／GCP"],
  ["特徴", "年齢不問・要件主義の採用方針。医療ドメイン×SaaSの社会性の高い領域"],
];

const salaryRows: [string, string][] = [
  ["プロダクトマネージャー（PdM）", "800〜1,200万円（公式採用ページの提示レンジ例）"],
  ["QA・事業開発などの職種", "600〜1,200万円（公式採用ページの提示レンジ例）"],
  ["エンジニア職", "公式採用ページで職種・等級別レンジが提示される場合あり（時期により変動。応募・面談で要確認）"],
];

const faqs = [
  { q: "Ubieはエンジニアの中途採用を行っている？", a: "はい。Ubieは公式採用ページでソフトウェアエンジニアを含む幅広い職種を継続的に募集しています。年齢を問わず、求める要件（スキル・経験）を満たすかを重視する「要件主義」の採用方針を掲げているのが特徴です。募集職種・要件は時期により変動するため、最新は公式採用ページをご確認ください。" },
  { q: "Ubieの平均年収はいくら？", a: "Ubieは非上場企業のため、有価証券報告書による「全社員平均年収」は公開されていません。集計サイトの数値も公式値ではない参考値です。一方でUbieは公式採用ページで職種別の年収レンジを提示しており（例：PdM 800〜1,200万円、QA・事業開発 600〜1,200万円）、これが最も信頼できる一次情報になります。" },
  { q: "Ubieの技術スタックは？", a: "公式の技術発信（Zenn等）によると、Ubieは全社でNode.jsとGoに技術を標準化しています（以前のKotlin等から移行）。フロントエンドはTypeScript＋Next.js、サービス間通信はgRPC、外部向けAPIはGraphQL、インフラはGCPが中心です。技術選定を全社で揃えることで開発・運用効率を高めている点が特徴です。" },
  { q: "Ubieの選考フローは？", a: "Ubieは選考フローの詳細を公式に固定で公開しているわけではありません。一般的にスタートアップでは書類選考・カジュアル面談・複数回の面接・課題などで構成されますが、職種・時期により異なります。当ガイドでは公開されていない選考フローや面接質問の断定は避けています。最新は公式採用ページ・面談でご確認ください。" },
  { q: "Ubieは未経験のヘルステック領域でも転職できる？", a: "Ubieは年齢不問・要件主義を掲げており、医療業界の経験そのものよりも、求めるエンジニアリング要件（Go/Node.js/TypeScript等の実務経験、課題解決力など）を満たすかが重視される傾向があります。医療ドメインは入社後にキャッチアップする前提のポジションも多いと考えられますが、具体的な要件は各募集要項で確認してください。" },
  { q: "Ubieの働き方・リモートワークは？", a: "Ubieはプロダクト開発を中心とするスタートアップで、リモートを活用した柔軟な働き方を取り入れているとされますが、職種・チームにより方針が異なります。可否や頻度は募集要項・面談で確認するのが確実です。当ガイドでは公式に確認できない勤務条件の断定は避けています。" },
  { q: "30代・40代でもUbieに転職できる？", a: "Ubieは「年齢不問・要件主義」を明示しているため、30代・40代であっても求める要件を満たせば十分に対象になります。GoやNode.jsでのバックエンド開発経験、TypeScript／Next.jsでのフロント経験、SaaSの設計・運用経験を持つミドル層には親和性が高い環境といえます。" },
];

export default function UbieCompanyPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="Ubie（ユビー）エンジニア転職ガイド" description="Ubieへのエンジニア転職を公式採用ページ・技術発信の一次情報で解説。非上場のため全社平均はなく、職種別レンジ・Go/Node.js/GCPの技術スタック・選考の考え方をまとめました。" url="/company/ubie/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "Ubie" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Ubie（ユビー）へのエンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-600 text-sm leading-relaxed mb-2">
          Ubie株式会社へのエンジニア中途採用について、公式採用ページと技術発信（Zenn等）の一次情報をもとに、転職難易度・年収・技術スタック・選考の考え方を中立にまとめました。医師とエンジニアが共同創業した、症状検索エンジン「ユビー」を中核とする社会性の高いヘルステックスタートアップです。
        </p>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ 出典は各データの直後に明記しています。</p>

        {/* 直答box (P0/company年収) */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】Ubieの年収は？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: Ubieは非上場のため公式の全社員平均年収は公表されていません。公式採用ページ提示の職種別レンジが最も信頼できる一次情報です（例: プロダクトマネージャー 800〜1,200万円）。</strong></p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・全社員平均年収は非公表（非上場・有価証券報告書なし）。集計サイトの数値は公式値ではない参考値です。</li><li>・公式採用ページの職種別レンジ例: プロダクトマネージャー 800〜1,200万円、QA・事業開発など 600〜1,200万円。</li><li>・エンジニア職の等級別レンジは時期により変動。具体的な提示額は応募・面談で確認が必要です。</li></ul>
        </div>

        <DataNote surveyedAt="2026年6月" sources={["Ubie 公式採用サイト（職種別年収レンジ）", "Ubie 技術発信（Zenn等のEngineering記事）", "OpenWork（口コミ傾向）"]} />

        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：転職難易度と向くエンジニア</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-sm text-blue-900 font-bold mb-3">転職難易度：高め（要件主義・即戦力志向のスタートアップ）</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>・全社で<strong>Go・Node.js に技術を標準化</strong>。GoまたはNode.js／TypeScriptでのバックエンド・フロント実務経験を持つエンジニアに向く。</li>
              <li>・<strong>年齢不問・要件主義</strong>を明示。年齢ではなく「求める要件を満たすか」で判断されるため、30代・40代でも要件が合えば十分対象になる。</li>
              <li>・医療ドメイン×SaaSという<strong>社会性の高い領域</strong>。プロダクトの社会的インパクトに共感できる人に合う。</li>
            </ul>
            <p className="text-xs text-blue-800 mt-3">非上場のため全社平均年収の公式値はありません。公式採用ページの職種別レンジ（例：PdM 800〜1,200万円）が最も信頼できる目安です。逆に、確立された大企業の安定や明確な等級制度を最優先する人にはスタートアップ特有の変化の速さがミスマッチになり得ます。</p>
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
          <p className="text-xs text-slate-500">出典：Ubie公式採用サイト、Ubie技術発信（Zenn等）。Ubieは非上場のため、上場企業のような有価証券報告書ベースの全社員平均年収は存在しません。集計サイトの年収値は公式値ではない参考値である点にご留意ください。</p>
        </section>

        <section id="feature" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">医師×エンジニアの共同創業ヘルステック</h3><p className="text-sm text-petrol-deep">Ubieは2017年に医師とエンジニアが共同創業した企業で、症状検索エンジン「ユビー」など生活者・医療機関の双方に向けたプロダクトを展開しています。医療という規制と専門性の高い領域に、ソフトウェアで切り込む社会性の高い事業ドメインが特徴です。</p></div>
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">年齢不問・要件主義の採用</h3><p className="text-sm text-petrol-deep">Ubieは年齢を採用基準にせず、求める要件（スキル・経験・カルチャーフィット）を満たすかを重視する方針を掲げています。これは30代・40代のミドルエンジニアにとって、年齢で足切りされにくいという点で重要なポイントです。</p></div>
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">技術スタックの全社標準化</h3><p className="text-sm text-petrol-deep">Ubieは公式の技術発信で、全社の技術スタックをGoとNode.jsに標準化したことを明らかにしています（以前のKotlin等からの移行）。技術を揃えることでチーム間の異動・コードの共有・採用要件の明確化を進めており、入社後に習得すべき技術が読みやすい環境といえます。</p></div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公式確認範囲）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">以下はUbieの公式採用ページ・技術発信（Zenn等のEngineering記事）で公開されている範囲の情報です。組織・プロダクトの拡大に伴い構成は変化するため、最新は公式発信・募集要項でご確認ください。</p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>Go / Node.js</strong>：全社で標準化されたバックエンドの主力。以前はKotlin等も使われていたが移行を進めた</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>TypeScript / Next.js</strong>：フロントエンド開発の中心</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>gRPC</strong>：マイクロサービス間の通信に利用</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>GraphQL</strong>：外部・クライアント向けのAPIに利用</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>GCP</strong>：クラウドインフラの基盤</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：Ubie 技術発信（Zenn等）・公式採用ページ。具体的なミドルウェア構成・バージョンはチーム・時期で異なります。各言語の市場動向は<Link href="/skill/go/" className="text-petrol hover:underline">Go</Link>・<Link href="/skill/nodejs/" className="text-petrol hover:underline">Node.js</Link>・<Link href="/skill/typescript/" className="text-petrol hover:underline">TypeScript</Link>・<Link href="/skill/gcp/" className="text-petrol hover:underline">GCP</Link>の各ガイドも参照してください。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（職種別レンジ）</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-4 text-sm text-amber-900">
            Ubieは<strong>非上場のため、有価証券報告書による全社員平均年収は存在しません</strong>。集計サイトの数値も公式値ではない参考値です。一方でUbieは<strong>公式採用ページで職種別の年収レンジを提示</strong>しており、これが最も信頼できる一次情報になります。
          </div>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-100"><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">職種</th><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年収レンジ（公式採用ページの提示例）</th></tr></thead>
              <tbody>{salaryRows.map(([k, v], i) => (<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{k}</td><td className="px-4 py-3 text-slate-700 border-b border-slate-200 font-medium">{v}</td></tr>))}</tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-2">
            上表はUbieの<strong>公式採用ページに掲載された職種別レンジの例</strong>です。レンジは職種・等級・スキルにより幅があり、時期によって変動します。エンジニア職の具体的な提示額は、応募・面談時に確認するのが確実です。等級別の細かい年収表は公式に開示されていないため、当ガイドでは創作した数値表は掲載していません。
          </p>
          <p className="text-xs text-slate-500">出典：Ubie 公式採用サイト（職種別年収レンジ）。掲載値は調査時点の参考であり、最新は公式募集要項をご確認ください。</p>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式に詳細は非公開）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            Ubieは選考フローの詳細を固定で公式公開しているわけではありません。一般的なスタートアップでは「書類選考 → カジュアル面談 → 複数回の面接 → （職種により課題） → オファー」という流れが多いですが、職種・時期によって異なります。当ガイドでは<strong>公開されていない具体的な選考ステップや面接質問の断定は避けています</strong>。
          </p>
          <p className="text-xs text-slate-500">出典：上記は一般的なスタートアップ採用の傾向であり、Ubie固有の確定フローではありません。正確な選考プロセスは公式採用ページ・カジュアル面談でご確認ください。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・要件主義ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">具体的な面接質問リストは公式に公開されておらず、断定はできません。公開されている採用方針（要件主義）と募集要項から、評価されやすいと考えられるポイントを一般化して挙げます。</p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>Go／Node.js／TypeScriptでのバックエンド・フロントの実務的な設計・実装力</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>マイクロサービス（gRPC）・API（GraphQL）・GCP上での開発・運用経験</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>医療という社会的意義の高いドメインへの共感と、課題を技術で解く姿勢</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>変化の速い環境で自律的に動ける主体性・カルチャーフィット</li>
          </ul>
        </section>

        <section id="review" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">社員口コミの傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            OpenWork等の口コミプラットフォームでは、Ubieについて<strong>「事業の社会的意義への共感が高い」「裁量が大きく自律的に働ける」</strong>といった声が見られる一方、<strong>「スタートアップ特有の変化の速さや、組織・プロセスが整備途上の部分がある」</strong>といった指摘も見られます。プロダクトのミッションに共感できるかが定着の鍵になる傾向がうかがえます。
          </p>
          <p className="text-xs text-slate-500">出典：OpenWork掲載の社員クチコミの傾向を要約（個別スコア・原文の転載はしていません）。評価は部署・時期・職種により大きく異なります。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見たUbie</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>Ubie最大のポイントは<strong>「年齢不問・要件主義」を明示している</strong>ことです。30代・40代のミドルエンジニアにとって、年齢で足切りされにくいというのは大きな安心材料です。GoやNode.js、TypeScript／Next.jsでのSaaS開発経験、GCP上での設計・運用経験を持つ人であれば、年齢よりもスキルで評価される土俵に立てます。</p>
            <p>技術が全社でGo・Node.jsに標準化されているため、入社後に習得すべき技術が読みやすく、これまでのバックエンド・フロント経験を活かしやすい点もミドル向きです。一方で、スタートアップ特有の変化の速さ・組織の流動性は、安定した大企業からの転職では事前に許容度を確認しておきたい部分です。非上場のため将来のIPOやストックオプションの扱いは公式の確定情報がなく、年収は公式の職種別レンジを基準に考えるのが現実的です。</p>
            <p>医療ドメインに関心がある方は<Link href="/industry/healthcare/" className="text-petrol hover:underline">ヘルステック転職の全体像</Link>もあわせて確認すると、業界としての立ち位置が掴みやすくなります。年収交渉やキャリア整理の観点では<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収相場</Link>や<Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の把握</Link>も参考にしてください。</p>
          </div>
        </section>

        <section id="fit" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人・向いていない人</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <p className="font-bold text-green-800 text-sm mb-3">向いている人</p>
              <ul className="space-y-2 text-sm text-green-900">
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>Go／Node.js／TypeScriptでのSaaS開発経験を持つミドルエンジニア</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>医療・ヘルスケアの社会的意義に共感できる</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>年齢ではなくスキルで評価される環境を求めている</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>変化の速い環境で自律的に動くのが得意</li>
              </ul>
            </div>
            <div className="border border-rose-200 bg-rose-50 rounded-lg p-5">
              <p className="font-bold text-rose-800 text-sm mb-3">向いていない人</p>
              <ul className="space-y-2 text-sm text-rose-900">
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>確立された大企業の安定・明確な等級制度を最優先したい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>使用技術を自由に選びたい（全社標準化との相性）</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>整備された制度・手厚い既存ドキュメントを前提に働きたい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>年収の絶対額の最大化のみを判断軸にしている</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ヘルステック転職市場とUbieの位置づけ</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>経済産業省「IT人材需給に関する調査」（2019年公表の試算）では、2030年に最大約79万人のIT人材不足が見込まれています。医療×ITは規制・専門性が高く参入障壁がある一方、社会課題の大きさから成長が期待される領域で、Ubieはその代表的なスタートアップの一つです。</p>
            <p>年代別の年収水準の目安として、レバテックが公表する正社員SEの平均年収（2025年）は30代約499万円・40代約618万円とされています。これはIT職全般の平均であり、Ubieの公式職種別レンジ（例：PdM 800〜1,200万円）は職種によってこれを上回り得ますが、レンジには幅がある点に留意が必要です。</p>
            <p>SIerやSESから自社プロダクト開発へ移りたいミドルにとって、Ubieのような技術標準化の進んだヘルステックは選択肢になり得ます。背景知識として<Link href="/industry/sier-to-web/" className="text-petrol hover:underline">SIerからWEB系への転職</Link>も参考になります。</p>
          </div>
        </section>

        <section id="agent" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Ubie転職におすすめのエージェント3社</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[{ name: "レバテックキャリア", href: "/review/levtech/", desc: "IT特化で自社開発・SaaS求人に強い。技術面接対策のサポートも受けられる。" }, { name: "ビズリーチ", href: "/review/bizreach-it/", desc: "ハイクラス・スタートアップのスカウトが届きやすい。ミドル層の選択肢を広げやすい。" }, { name: "Green", href: "/review/green/", desc: "IT/Web・スタートアップ求人に強い。カジュアル面談につながりやすい。" }].map((agent, i) => (<Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors"><h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3><p className="text-xs text-slate-500">{agent.desc}</p></Link>))}
          </div>
          <p className="text-xs text-slate-500 mt-3">特定企業の求人保有状況は時期により変動します。複数社の併用で求人の取りこぼしを防ぐのが定石です。詳しくは<Link href="/compare/agents/" className="text-petrol hover:underline">エージェント比較</Link>を参照してください。</p>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">Ubieへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">ヘルステック・SaaS企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="faq" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq, i) => (<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[{ name: "カケハシの転職ガイド", href: "/company/kakehashi/" }, { name: "10Xの転職ガイド", href: "/company/10x/" }, { name: "ヘルステック業界への転職", href: "/industry/healthcare/" }, { name: "Goエンジニアの転職", href: "/skill/go/" }, { name: "Node.jsエンジニアの転職", href: "/skill/nodejs/" }, { name: "40代エンジニアの転職の現実", href: "/knowledge/40s-reality/" }].map((item, i) => (<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
