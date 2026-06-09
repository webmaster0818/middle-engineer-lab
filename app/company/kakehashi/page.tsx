import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "カケハシへのエンジニア転職｜年収・技術・選考【2026】",
  description:
    "カケハシ（薬局DX・非上場）のエンジニア中途採用を公式採用・技術発信の一次情報で解説。TypeScript一貫のサーバーレス技術スタック、公式の選考フロー、年収の考え方、30代40代の転職可否を中立にまとめました。",
};

const toc = [
  { id: "conclusion", label: "結論：転職難易度と向くエンジニア" },
  { id: "basic", label: "基本データ（出典付き）" },
  { id: "feature", label: "エンジニア採用の特徴" },
  { id: "stack", label: "技術スタック（公式確認範囲）" },
  { id: "salary", label: "年収データ" },
  { id: "flow", label: "選考フロー（公式確認済み）" },
  { id: "interview", label: "面接で重視される点" },
  { id: "review", label: "社員口コミの傾向" },
  { id: "middle", label: "30代・40代から見たカケハシ" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "agent", label: "おすすめエージェント3社" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basicData: [string, string][] = [
  ["企業名", "株式会社カケハシ（非上場）"],
  ["設立", "2016年"],
  ["事業内容", "薬局DXプラットフォーム（電子薬歴「Musubi」など）の開発・提供"],
  ["開発組織規模", "開発に携わるメンバーは約180名規模（公式発信ベース）"],
  ["平均年収", "非上場のため有価証券報告書による全社員平均は存在しない（参考値は「年収データ」章を参照）"],
  ["技術スタック", "フロント：React＋TypeScript（Amplify）／バック：Node.js＋TypeScript・サーバーレス（Lambda・API Gateway・DynamoDB・Step Functions・CDK）／Swift・Dart・Python・Kotlinも横断利用／AWS中心"],
];

const salaryRows: [string, string, string][] = [
  ["集計サイトの参考レンジ（全体）", "456〜1,000万円程度", "公式値ではない参考値"],
  ["20代の参考値", "約550万円", "集計サイトの参考値"],
  ["30代の参考値", "約770万円", "集計サイトの参考値"],
  ["40代の参考値", "約830万円", "集計サイトの参考値"],
];

const flowSteps: [string, string, string][] = [
  ["STEP 1", "書類選考", "公式採用ページから応募。職務経歴・スキルをもとに選考。"],
  ["STEP 2", "カジュアル面談", "相互理解を目的とした面談。事業・チーム・働き方の擦り合わせ。"],
  ["STEP 3", "一次面接（開発ディレクター）", "開発ディレクターによる面接。経験・志向の確認。"],
  ["STEP 4", "二次面接（エンジニア）", "現場エンジニアによる技術面接。実務スキル・設計観点の確認。"],
  ["STEP 5", "最終面接（CTO／PdM）", "CTOまたはPdMによる最終面接。カルチャーフィット・プロダクト志向の確認。"],
];

const faqs = [
  { q: "カケハシはエンジニアの中途採用を行っている？", a: "はい。カケハシは公式採用ページでソフトウェアエンジニア（フロント・バックエンド・モバイル等）を継続的に募集しています。薬局DXプラットフォーム「Musubi」をはじめとするプロダクト群の開発を担うポジションが中心です。募集職種は時期により変動するため、最新は公式採用ページをご確認ください。" },
  { q: "カケハシの平均年収はいくら？", a: "カケハシは非上場企業のため、有価証券報告書による全社員平均年収は公開されていません。集計サイトでは全体で456〜1,000万円程度、年代別で20代約550万円・30代約770万円・40代約830万円といった参考値が見られますが、これらは公式値ではない参考値です。正確な提示額は応募・面談で確認してください。" },
  { q: "カケハシの技術スタックは？", a: "公式の採用情報・技術発信によると、フロントエンドはReact＋TypeScript（Amplifyを活用）、バックエンドはNode.js＋TypeScriptのサーバーレス構成（Lambda・API Gateway・DynamoDB・Step Functions・CDK）で、AWSが中心です。加えてモバイル等でSwift・Dart、用途に応じてPython・Kotlinも横断的に利用されています。TypeScriptで一貫した開発ができる点が特徴です。" },
  { q: "カケハシの選考フローは？", a: "カケハシは選考フローを公式に公開しており、(1)書類選考 →(2)カジュアル面談 →(3)一次面接（開発ディレクター）→(4)二次面接（エンジニア）→(5)最終面接（CTO／PdM）という流れです。各ステップの担当が明確で、技術面・カルチャー面の双方を多面的に確認する構成になっています。最新の詳細は公式採用ページでご確認ください。" },
  { q: "カケハシのエンジニア職の提示年収レンジは公開されている？", a: "カケハシは職種別・等級別の年収レンジを固定で公式開示しているわけではありません。集計サイトの数値は公式値ではない参考値です。そのため当ガイドでは創作した等級別年収表は掲載しておらず、正確な提示額は応募・面談で確認することをおすすめします。" },
  { q: "カケハシは薬局・医療の知識がないと転職できない？", a: "募集要項によりますが、エンジニア職ではまずTypeScript／React／Node.js・サーバーレス等の実務スキルが重視される傾向があります。薬局・医療ドメインの知識は入社後にキャッチアップする前提のポジションも多いと考えられます。具体的な必須要件は各募集要項で確認してください。" },
  { q: "30代・40代でもカケハシに転職できる？", a: "カケハシはTypeScript一貫のモダンなサーバーレス開発を行っており、React／Node.js／TypeScriptでのSaaS開発経験、AWSサーバーレスの設計・運用経験を持つミドル層には親和性が高い環境です。年代別の集計参考値でも30〜40代のレンジが提示されており、ミドルの採用実績がうかがえます。" },
  { q: "カケハシの働き方・リモートワークは？", a: "カケハシはプロダクト開発を行うスタートアップで、リモートを活用した柔軟な働き方を取り入れているとされますが、職種・チームにより方針が異なります。可否・頻度は募集要項・面談で確認するのが確実です。当ガイドでは公式に確認できない勤務条件の断定は避けています。" },
];

export default function KakehashiCompanyPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="カケハシ エンジニア転職ガイド" description="カケハシ（薬局DX・非上場）へのエンジニア転職を公式採用・技術発信の一次情報で解説。TypeScript一貫のサーバーレス技術、公式の選考フロー、年収の考え方をまとめました。" url="/company/kakehashi/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "カケハシ" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">カケハシへのエンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-600 text-sm leading-relaxed mb-2">
          株式会社カケハシへのエンジニア中途採用について、公式採用ページと技術発信の一次情報をもとに、転職難易度・年収・技術スタック・選考フローを中立にまとめました。電子薬歴「Musubi」など、薬局DXのプラットフォームをTypeScript一貫のサーバーレス構成で開発する、医療×SaaSのスタートアップです。
        </p>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ 出典は各データの直後に明記しています。</p>

        <DataNote surveyedAt="2026年6月" sources={["カケハシ 公式採用サイト（選考フロー・技術情報）", "カケハシ 技術発信（Engineering）", "集計サイトの年収参考値（公式値ではない）", "OpenWork（口コミ傾向）"]} />

        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：転職難易度と向くエンジニア</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-sm text-blue-900 font-bold mb-3">転職難易度：高め（TypeScript一貫・サーバーレスの即戦力志向）</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>・フロント<strong>React＋TypeScript</strong>、バック<strong>Node.js＋TypeScript・AWSサーバーレス</strong>。TypeScriptで一気通貫の開発経験を持つエンジニアに向く。</li>
              <li>・<strong>選考フローが公式に公開</strong>されており、書類→カジュアル面談→一次（開発ディレクター）→二次（エンジニア）→最終（CTO／PdM）と各ステップの担当が明確。</li>
              <li>・薬局DXという<strong>医療×社会課題</strong>のドメイン。プロダクトの社会的意義に共感できる人に合う。</li>
            </ul>
            <p className="text-xs text-blue-800 mt-3">非上場のため全社平均年収の公式値はありません。集計サイトの年代別参考値（30代約770万円・40代約830万円など）は公式値ではない目安です。逆に、複数言語を自由に選びたい人や、確立された大企業の安定を最優先する人にはミスマッチが起こり得ます。</p>
          </div>
        </section>

        <nav aria-label="目次" className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-700 text-sm mb-3">目次</p>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {toc.map((t) => (<li key={t.id}><a href={`#${t.id}`} className="text-blue-600 hover:underline">{t.label}</a></li>))}
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
          <p className="text-xs text-slate-500">出典：カケハシ公式採用サイト、カケハシ技術発信。カケハシは非上場のため、上場企業のような有価証券報告書ベースの全社員平均年収は存在しません。集計サイトの年収値は公式値ではない参考値です。</p>
        </section>

        <section id="feature" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">薬局DXのプラットフォーム開発</h3><p className="text-sm text-blue-700">カケハシは2016年設立で、電子薬歴「Musubi」をはじめとする薬局DXのプラットフォームを開発しています。アナログな業務が多い薬局・調剤の現場を、ソフトウェアで効率化・高度化していく社会性の高いドメインが特徴です。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">TypeScript一貫のモダン開発</h3><p className="text-sm text-blue-700">フロントエンドのReactからバックエンドのNode.jsまでTypeScriptで一貫して開発でき、AWSサーバーレス（Lambda・API Gateway・DynamoDB・Step Functions・CDK）を中心としたモダンな構成です。言語をまたぐ認知コストが小さく、フルスタックに動きやすい環境といえます。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">選考プロセスの透明性</h3><p className="text-sm text-blue-700">カケハシは選考フローを公式に公開しており、各ステップの担当（開発ディレクター・現場エンジニア・CTO／PdM）が明確です。応募者にとって選考の見通しが立てやすく、準備しやすい点はミドル層にとってメリットになります。</p></div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公式確認範囲）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">以下はカケハシの公式採用情報・技術発信で公開されている範囲の情報です。プロダクトの拡大に伴い構成は変化するため、最新は公式発信・募集要項でご確認ください。</p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>フロントエンド</strong>：React＋TypeScript（Amplifyを活用）</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>バックエンド</strong>：Node.js＋TypeScript・サーバーレス（Lambda／API Gateway／DynamoDB／Step Functions／CDK）</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>モバイル・横断</strong>：Swift／Dart／Python／Kotlin を用途に応じて横断利用</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>クラウド</strong>：AWS が中心。サーバーレス・IaC（CDK）で運用</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：カケハシ 公式採用情報・技術発信。各言語の市場動向は<Link href="/skill/typescript/" className="text-blue-600 hover:underline">TypeScript</Link>・<Link href="/skill/nodejs/" className="text-blue-600 hover:underline">Node.js</Link>・<Link href="/skill/react/" className="text-blue-600 hover:underline">React</Link>・<Link href="/skill/aws/" className="text-blue-600 hover:underline">AWS</Link>の各ガイドも参照してください。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-4 text-sm text-amber-900">
            カケハシは<strong>非上場のため、有価証券報告書による全社員平均年収は存在しません</strong>。以下は<strong>集計サイトの参考値（公式値ではない）</strong>です。実際の提示額は職種・等級・スキルにより幅があり、応募・面談で確認するのが確実です。
          </div>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-100"><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">区分</th><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">参考値</th><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">注記</th></tr></thead>
              <tbody>{salaryRows.map(([k, v, n], i) => (<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{k}</td><td className="px-4 py-3 text-slate-700 border-b border-slate-200 font-medium">{v}</td><td className="px-4 py-3 text-slate-500 border-b border-slate-200 text-xs">{n}</td></tr>))}</tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-2">
            上表は<strong>集計サイトの参考値（2026年6月時点）</strong>であり、カケハシ公式が開示した値ではありません。年代別の数値（30代約770万円・40代約830万円など）はあくまで目安で、職種・等級・個人のスキルによって差があります。等級別の細かい年収表は公式に開示されていないため、当ガイドでは創作した数値表は掲載していません。
          </p>
          <p className="text-xs text-slate-500">出典：集計サイトの年収参考値（公式値ではない参考値・2026年6月時点）。正確な提示額は公式募集要項・面談でご確認ください。</p>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式確認済み）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">カケハシは選考フローを公式に公開しています。各ステップの担当が明確で、技術面・カルチャー面の双方を多面的に確認する構成です。</p>
          <ol className="space-y-3">
            {flowSteps.map(([step, title, desc], i) => (
              <li key={i} className="flex gap-4 border border-slate-200 rounded-lg p-4">
                <span className="shrink-0 text-xs font-bold text-blue-700 bg-blue-50 rounded px-2 py-1 h-fit">{step}</span>
                <div><p className="font-bold text-slate-800 text-sm mb-1">{title}</p><p className="text-sm text-slate-600">{desc}</p></div>
              </li>
            ))}
          </ol>
          <p className="text-xs text-slate-500 mt-2">出典：カケハシ 公式採用サイト（選考フロー）。フローは職種・時期により変動する場合があります。なお具体的な面接質問は公式に公開されていないため、当ガイドでは創作した質問リストは掲載していません。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・選考構成ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">具体的な面接質問リストは公式に公開されておらず、断定はできません。公開されている選考フロー（担当別の面接）と技術スタックから、評価されやすいと考えられるポイントを一般化して挙げます。</p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">✓</span>TypeScript（React／Node.js）での設計・実装力（二次のエンジニア面接で確認されやすい）</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">✓</span>AWSサーバーレス（Lambda・DynamoDB・Step Functions・CDK等）の設計・運用経験</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">✓</span>薬局DX・医療という社会的意義の高いドメインへの共感（最終のCTO／PdM面接）</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">✓</span>プロダクト志向・チームでの協働・カルチャーフィット</li>
          </ul>
        </section>

        <section id="review" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">社員口コミの傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            OpenWork等の口コミプラットフォームでは、カケハシについて<strong>「事業の社会的意義への共感が高い」「モダンな技術環境で開発できる」</strong>といった声が見られる一方、<strong>「成長スタートアップ特有の変化の速さや、組織・プロセスが整備途上の部分がある」</strong>といった指摘も見られます。プロダクトのミッションへの共感が定着の鍵になる傾向がうかがえます。
          </p>
          <p className="text-xs text-slate-500">出典：OpenWork掲載の社員クチコミの傾向を要約（個別スコア・原文の転載はしていません）。評価は部署・時期・職種により大きく異なります。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見たカケハシ</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>カケハシは<strong>TypeScript一貫・AWSサーバーレス</strong>というモダンかつ習得対象が明確な技術構成のため、React／Node.js／TypeScriptでのSaaS開発経験を持つミドル層にとって、これまでの経験を活かしやすい環境です。集計参考値でも30代約770万円・40代約830万円といった年代別の目安が示されており、ミドルの採用が一定数行われていることがうかがえます（いずれも公式値ではない参考値）。</p>
            <p>選考フローが公式に公開されているのも、30代・40代にとっては大きな利点です。各ステップで誰が何を見るのかが事前にわかるため、準備の精度を上げやすく、転職活動のストレスを下げられます。一方で、成長スタートアップ特有の変化の速さ・制度の整備途上は、安定した大企業からの転職では事前に許容度を確認しておきたい部分です。非上場のため将来のIPOやストックオプションの扱いは公式の確定情報がなく、年収は提示額ベースで判断するのが現実的です。</p>
            <p>医療ドメインに関心がある方は<Link href="/industry/healthcare/" className="text-blue-600 hover:underline">ヘルステック転職の全体像</Link>もあわせて確認すると業界の立ち位置が掴みやすくなります。年収交渉やキャリア整理の観点では<Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代の年収相場</Link>や<Link href="/knowledge/market-value/" className="text-blue-600 hover:underline">市場価値の把握</Link>も参考にしてください。</p>
          </div>
        </section>

        <section id="fit" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人・向いていない人</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <p className="font-bold text-green-800 text-sm mb-3">向いている人</p>
              <ul className="space-y-2 text-sm text-green-900">
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>TypeScript（React／Node.js）一貫でのSaaS開発経験を持つミドル</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>AWSサーバーレスの設計・運用が得意</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>薬局DX・医療の社会的意義に共感できる</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>選考の見通しが立つ透明なプロセスを重視する</li>
              </ul>
            </div>
            <div className="border border-rose-200 bg-rose-50 rounded-lg p-5">
              <p className="font-bold text-rose-800 text-sm mb-3">向いていない人</p>
              <ul className="space-y-2 text-sm text-rose-900">
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>使用言語・技術を自由に選びたい（TypeScript中心との相性）</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>確立された大企業の安定・明確な等級制度を最優先したい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>整備された制度・手厚い既存ドキュメントを前提に働きたい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>年収の絶対額の最大化のみを判断軸にしている</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ヘルステック転職市場とカケハシの位置づけ</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>経済産業省「IT人材需給に関する調査」（2019年公表の試算）では、2030年に最大約79万人のIT人材不足が見込まれています。薬局・調剤を含む医療領域はDXの余地が大きく、カケハシはその中でも先行する薬局DXのスタートアップです。</p>
            <p>年代別の年収水準の目安として、レバテックが公表する正社員SEの平均年収（2025年）は30代約499万円・40代約618万円とされています。これはIT職全般の平均で、カケハシの集計参考値（30代約770万円・40代約830万円）はこれを上回りますが、後者は公式値ではない参考値である点に留意が必要です。</p>
            <p>SIerやSESから自社プロダクト開発へ移りたいミドルにとって、TypeScript一貫のカケハシは選択肢になり得ます。背景知識として<Link href="/industry/sier-to-web/" className="text-blue-600 hover:underline">SIerからWEB系への転職</Link>も参考になります。</p>
          </div>
        </section>

        <section id="agent" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">カケハシ転職におすすめのエージェント3社</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[{ name: "レバテックキャリア", href: "/review/levtech/", desc: "IT特化で自社開発・SaaS求人に強い。技術面接対策のサポートも受けられる。" }, { name: "ビズリーチ", href: "/review/bizreach-it/", desc: "ハイクラス・スタートアップのスカウトが届きやすい。ミドル層の選択肢を広げやすい。" }, { name: "Green", href: "/review/green/", desc: "IT/Web・スタートアップ求人に強い。カジュアル面談につながりやすい。" }].map((agent, i) => (<Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors"><h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3><p className="text-xs text-slate-500">{agent.desc}</p></Link>))}
          </div>
          <p className="text-xs text-slate-500 mt-3">特定企業の求人保有状況は時期により変動します。複数社の併用で求人の取りこぼしを防ぐのが定石です。詳しくは<Link href="/compare/agents/" className="text-blue-600 hover:underline">エージェント比較</Link>を参照してください。</p>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">カケハシへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">ヘルステック・SaaS企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="faq" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq, i) => (<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[{ name: "Ubieの転職ガイド", href: "/company/ubie/" }, { name: "10Xの転職ガイド", href: "/company/10x/" }, { name: "ヘルステック業界への転職", href: "/industry/healthcare/" }, { name: "TypeScriptエンジニアの転職", href: "/skill/typescript/" }, { name: "Node.jsエンジニアの転職", href: "/skill/nodejs/" }, { name: "40代エンジニアの転職の現実", href: "/knowledge/40s-reality/" }].map((item, i) => (<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
