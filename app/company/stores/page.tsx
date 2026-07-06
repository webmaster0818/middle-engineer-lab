import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/stores/" },
  title: "STORESへのエンジニア転職｜年収・技術スタック・選考の現実",
  description:
    "STORES（旧hey）のエンジニア中途採用を公式採用・技術発信の一次情報で解説。非上場のため公式平均年収はなく集計は参考値。Ruby/Go・店舗DXマルチプロダクト、30代40代の現実を中立にまとめました。",
};

const toc = [
  { id: "conclusion", label: "結論：転職難易度と向くエンジニア" },
  { id: "basic", label: "基本データ（出典付き）" },
  { id: "feature", label: "エンジニア採用の特徴" },
  { id: "stack", label: "技術スタック（公開情報）" },
  { id: "salary", label: "年収データ（参考値）" },
  { id: "flow", label: "選考フロー" },
  { id: "interview", label: "面接で重視される点" },
  { id: "review", label: "社員口コミの傾向" },
  { id: "middle", label: "30代・40代から見たSTORES" },
  { id: "agent", label: "おすすめエージェント3社" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basicData: [string, string][] = [
  ["企業名", "STORES株式会社（旧:ヘイ株式会社／hey・非上場）"],
  ["業種", "店舗・お店のためのDXプラットフォーム（EC／POS／決済／予約）"],
  ["平均年収", "公式の全社員平均は非公開（非上場）。集計サイトの値は参考値"],
  ["主要プロダクト", "STORES（ネットショップ）／STORES レジ（POS）／STORES 決済／STORES 予約 等のマルチプロダクト"],
  ["技術スタック", "Ruby/Rails・Java/Spring Boot・Go／AWS・GCP・Terraform／フロントReact・Vue・Next.js・Nuxt（Rubyコミッター在籍）"],
];

const salaryRows: [string, string][] = [
  ["公式の全社員平均年収", "非公開（非上場のため有報なし）"],
  ["集計サイトの平均（参考値）", "約695万円・中央値約635万円とする集計あり（公式値ではない）"],
  ["ITエンジニアの集計値（参考値）", "約796万円とする集計あり（公式値ではない）"],
  ["求人レンジ例（参考値）", "400〜600万円といった求人提示例（職種・時期で変動）"],
];

const faqs = [
  { q: "STORESはエンジニアの中途採用を行っている？", a: "はい。STORES（旧hey）はネットショップ・POS・決済・予約など複数プロダクトを展開しており、サーバーサイド・フロントエンド・モバイル・SRE・データなど幅広い職種でエンジニアの中途採用を行っています。募集職種は時期により変動するため、最新は公式採用ページをご確認ください。" },
  { q: "STORESの平均年収はいくら？", a: "STORESは非上場のため有価証券報告書がなく、公式の全社員平均年収は公開されていません。転職集計サイトでは平均約695万円・中央値約635万円、ITエンジニア約796万円といった値が見られますが、これらはいずれも公式値ではない参考値です。求人では400〜600万円といったレンジ提示例も見られますが、職種・経験により大きく異なります。" },
  { q: "STORESのエンジニア職の提示年収レンジは？", a: "求人サイトでは400〜600万円といったレンジ提示例が見られますが、これは職種・等級・時期により変動する参考値です。STORESは非上場で公式の職種別年収表を常時開示しているわけではないため、当ガイドでは推測の等級別年収表は掲載していません。実際の提示は応募職種・経験に応じて個別に確認することが重要です。" },
  { q: "STORESで使われている技術スタックは？", a: "STORESはマルチプロダクト構成で、プロダクトによりRuby/Rails、Java/Spring Boot、Goなどが使われています。インフラはAWS・GCPを併用し、Terraformでの構成管理が行われています。フロントエンドはReact・Vue・Next.js・Nuxtなどが採用され、Rubyコミッターが在籍するなどRubyへの貢献も知られています（採用情報・技術発信ベース）。" },
  { q: "STORESの選考フローは？", a: "STORESは選考フローの詳細な回数・内容を公式に網羅的には公開していません。一般的なWeb企業と同様、書類選考→複数回の面接（技術面接・カルチャーフィット面接を含む）→内定という流れが想定されますが、回数・形式は職種・時期により異なります。創作した固定フローは掲載していないため、最新は公式採用ページや担当エージェントでご確認ください。" },
  { q: "STORESのマルチプロダクトとはどういう環境？", a: "STORESはネットショップ作成、POSレジ、キャッシュレス決済、予約管理など、お店のDXに関わる複数プロダクトを一つの会社で展開しています。プロダクトごとに技術スタックやドメインが異なり、店舗・決済・予約といった実店舗のオペレーションに直結する領域を横断的に扱えるのが特徴です。自分の経験に合うプロダクトを選びやすい一方、プロダクト間連携の難しさもあります。" },
  { q: "STORESへの転職で有利な経験は？", a: "公開情報からは、Ruby/Railsによる大規模Webサービス開発、Goでのバックエンド開発、決済・POS・予約など店舗系ドメインの開発経験、AWS/GCPでのインフラ・SRE経験が親和性が高いと考えられます。マルチプロダクト環境で自律的に課題を見つけ動ける自走力も評価されやすい傾向があります。" },
  { q: "STORESは非上場だが転職して大丈夫？", a: "STORESは非上場のため、上場企業のように有報で財務・平均年収を確認することはできません。その分、事業の安定性や処遇は公開情報が限られます。応募時には、プロダクトの市場ポジション、資金調達状況、提示条件などを担当エージェントや面談を通じて確認し、納得したうえで判断することが大切です。集計サイトの年収は参考値である点にも留意してください。" },
];

export default function StoresCompanyPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="STORES エンジニア転職ガイド" description="STORES（旧hey）へのエンジニア転職を公式採用・技術発信の一次情報で解説。非上場のため公式平均年収はなく集計は参考値。Ruby/Go・店舗DXマルチプロダクトをまとめました。" url="/company/stores/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "STORES" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">STORES（ストアーズ／旧hey）へのエンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-600 text-sm leading-relaxed mb-2">
          STORES株式会社（旧ヘイ株式会社／hey）へのエンジニア中途採用について、公式採用ページと技術発信の一次情報をもとに、転職難易度・年収・技術スタック・選考の実態を中立にまとめました。ネットショップ・POSレジ・決済・予約と、お店のDXに関わるプロダクト群を一社で展開するマルチプロダクト企業です。非上場のため公式の平均年収は存在せず、集計値は参考値である点を明示しながら、30代・40代が押さえるべき現実を解説します。
        </p>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ 出典は各データの直後に明記しています。</p>

        <DataNote surveyedAt="2026年6月" sources={["STORES 公式採用サイト・技術発信", "転職クチコミ・集計サイト（参考値）", "OpenWork（口コミ傾向）"]} />

        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：転職難易度と向くエンジニア</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-sm text-blue-900 font-bold mb-3">転職難易度：中〜高（Ruby/Goの経験者・店舗ドメイン志向に向く）</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>・EC・POS・決済・予約の<strong>マルチプロダクト</strong>。Ruby/Rails・Go・Javaなどプロダクトごとにスタックが異なり、経験に合う領域を選びやすい。</li>
              <li>・<strong>非上場のため公式の平均年収はなし</strong>。集計サイトの平均約695万円・中央値約635万円・IT職約796万円はいずれも参考値で、求人は400〜600万円のレンジ例もある。</li>
              <li>・Rubyコミッターが在籍する技術文化があり、<strong>実店舗のオペレーションに直結するドメイン</strong>に関われるのが魅力。</li>
            </ul>
            <p className="text-xs text-blue-800 mt-3">逆に、上場企業の財務透明性や安定した処遇を最優先する人は、非上場ゆえに公開情報が限られる点を踏まえ、面談で条件・事業状況を確認することをおすすめします。</p>
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
          <p className="text-xs text-slate-500">出典：STORES公式採用サイト・技術発信、転職クチコミ・集計サイト（年収は公式値ではない参考値）。非上場のため有価証券報告書はなく、公式の全社員平均年収は存在しません。最新は公式採用ページをご確認ください。</p>
        </section>

        <section id="feature" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">お店のDXを支えるマルチプロダクト</h3><p className="text-sm text-petrol-deep">ネットショップ作成、POSレジ、キャッシュレス決済、予約管理など、実店舗のDXに関わる複数プロダクトを一社で展開しています。プロダクトごとに技術スタックやドメインが異なるため、自分の経験に合う領域を選びやすく、横断的なキャリアも描ける環境です。</p></div>
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">Rubyを中心とした技術文化</h3><p className="text-sm text-petrol-deep">Ruby/Railsを軸に、Go・Javaなどを適材適所で採用しています。Rubyコミッターが在籍するなどRubyへの貢献が知られており、Web系の技術カルチャーを重視するエンジニアに親和性があります。フロントエンドはReact・Vue・Next.js・Nuxtなど幅広く使われています。</p></div>
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">実店舗オペレーションに直結するドメイン</h3><p className="text-sm text-petrol-deep">決済・POS・予約といった、実際のお店の現場オペレーションに直結する領域を扱います。お金や在庫、来店予約など、間違いが許されないドメインに向き合う堅実さが求められる一方、ユーザーの事業を支える実感を得やすいのが魅力です。</p></div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公式採用・技術発信の公開情報）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">以下はSTORESの公式採用ページ・技術発信で確認できる範囲の情報です。マルチプロダクトのため、プロダクトによってスタックが異なります。</p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>Ruby / Rails</strong>：主要プロダクトのサーバーサイド。Rubyコミッターが在籍</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>Java / Spring Boot・Go</strong>：プロダクトに応じたバックエンド</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>React / Vue / Next.js / Nuxt</strong>：フロントエンド</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>AWS・GCP・Terraform</strong>：クラウド基盤とInfrastructure as Code</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：STORES 公式採用サイト・技術発信の公開情報。各言語の市場感は<Link href="/skill/ruby/" className="text-petrol hover:underline">Ruby/Railsエンジニアの転職市場</Link>・<Link href="/skill/go/" className="text-petrol hover:underline">Goエンジニアの転職市場</Link>もあわせてご覧ください。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（参考値）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-100"><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">項目</th><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">内容</th></tr></thead>
              <tbody>{salaryRows.map(([k, v], i) => (<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{k}</td><td className="px-4 py-3 text-slate-700 border-b border-slate-200 font-medium">{v}</td></tr>))}</tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-2">
            STORESは<strong>非上場のため有価証券報告書がなく、公式の全社員平均年収は存在しません</strong>。上表の数値は転職クチコミ・集計サイトによる<strong>参考値</strong>であり、公式に確認された値ではありません。集計では平均約695万円・中央値約635万円、ITエンジニア約796万円といった値が見られ、求人では400〜600万円のレンジ提示例もありますが、職種・等級・経験により大きく異なります。当ガイドでは推測の等級別年収表は掲載していません。
          </p>
          <p className="text-xs text-slate-500">出典：転職クチコミ・集計サイト（いずれも公式値ではない参考値）。実際の提示は応募職種・経験に応じて個別に確認してください。年代別の相場感は<Link href="/knowledge/salary-30s/" className="text-petrol hover:underline">30代の年収相場</Link>・<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収相場</Link>を参照してください。</p>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公開情報の範囲）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">STORESは選考フローの詳細な回数・内容を公式に網羅的には公開していません。創作した固定フローは掲載せず、一般的なWeb企業の中途採用で想定される大枠のみを示します。</p>
          <ol className="space-y-3">
            {[
              ["STEP 1", "書類選考", "公式採用ページまたはエージェント経由で応募。職務経歴・実績を確認。"],
              ["STEP 2", "面接（複数回）", "技術面接・カルチャーフィット面接を含む複数回が想定される。回数・形式は職種・時期で変動。"],
              ["STEP 3", "内定", "条件提示。具体的な選考期間は公式に明示されていない。"],
            ].map(([step, title, desc], i) => (
              <li key={i} className="flex gap-4 border border-slate-200 rounded-lg p-4">
                <span className="shrink-0 text-xs font-bold text-petrol-deep bg-petrol-soft rounded px-2 py-1 h-fit">{step}</span>
                <div><p className="font-bold text-slate-800 text-sm mb-1">{title}</p><p className="text-sm text-slate-600">{desc}</p></div>
              </li>
            ))}
          </ol>
          <p className="text-xs text-slate-500 mt-2">注：上記は一般的な想定であり、STORES固有の確定フローではありません。最新は公式採用ページ・担当エージェントでご確認ください。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">具体的な面接質問リストは公式に公開されておらず、断定はできません。公開情報と口コミプラットフォームの傾向から、評価されやすいと考えられるポイントを一般化して挙げます。</p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>Ruby/RailsまたはGoによるWebサービスの開発運用経験と設計力</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>決済・POS・予約など店舗系ドメインへの理解と堅実さ</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>マルチプロダクト環境での自律的な課題発見・解決</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>ユーザー（お店）の事業に寄り添うプロダクト志向</li>
          </ul>
        </section>

        <section id="review" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">社員口コミの傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            OpenWork等の口コミプラットフォームでは、STORESについて<strong>「お店を支えるプロダクトのやりがい」「フラットで自律的な開発文化」「技術カルチャーが良い」</strong>といった声が見られる一方、<strong>「非上場・成長フェーズ企業として組織や事業の変化がある」「マルチプロダクトゆえの優先順位調整の難しさ」</strong>といった指摘も見られます。プロダクトへの共感とスタートアップ的な変化への適応力が定着の鍵になる傾向がうかがえます。
          </p>
          <p className="text-xs text-slate-500">出典：OpenWork掲載の社員クチコミの傾向を要約（個別スコア・原文の転載はしていません）。評価は部署・時期・職種により大きく異なります。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見たSTORES</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>30代・40代のエンジニアにとって、STORESの「マルチプロダクトを横断し、店舗ドメインの堅実なシステムを作る」役割は、経験が活きるフィールドです。決済・POS・予約といった間違いの許されない領域では、慎重な設計判断と運用経験を持つミドル層の価値が高くなります。Rubyを中心とした技術文化のなかで、複数プロダクトの全体を見渡す視点を持てるのもミドルの強みです。</p>
            <p>一方で、非上場企業である点はミドル層こそ慎重に評価すべきポイントです。上場企業のように有報で財務・平均年収を確認できないため、事業の安定性・資金状況・提示条件は面談やエージェントを通じて確認し、納得したうえで判断することが重要です。年収は集計サイトの約695万円・IT職約796万円といった値があくまで参考値である点を踏まえ、自分の経験に対する提示を個別に確認してください。生活基盤が固まった40代では、成長フェーズ企業特有の変化への許容度も見極めたいところです。</p>
            <p>転職活動では、ミドル層の市場価値・年収交渉の観点も押さえておきたいところです。<Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の把握</Link>や<Link href="/knowledge/startup-vs-enterprise/" className="text-petrol hover:underline">スタートアップと大企業の比較</Link>、<Link href="/knowledge/40s-reality/" className="text-petrol hover:underline">40代エンジニア転職の現実</Link>もあわせて確認してください。</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人・向いていない人</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <p className="font-bold text-green-800 text-sm mb-3">向いている人</p>
              <ul className="space-y-2 text-sm text-green-900">
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>Ruby/RailsまたはGoでのWebサービス開発経験者</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>決済・POS・予約など店舗系ドメインに興味がある</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>マルチプロダクトを横断的に見たい・自走したい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>Rubyの技術カルチャー・お店を支える事業に共感する</li>
              </ul>
            </div>
            <div className="border border-rose-200 bg-rose-50 rounded-lg p-5">
              <p className="font-bold text-rose-800 text-sm mb-3">向いていない人</p>
              <ul className="space-y-2 text-sm text-rose-900">
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>上場企業の財務透明性・安定処遇を最優先したい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>成長フェーズ企業の変化・優先順位調整を避けたい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>単一の大規模プロダクトに専念したい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>公式の確定年収レンジがないと判断できない</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="agent" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">STORES転職におすすめのエージェント3社</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[{ name: "レバテックキャリア", href: "/review/levtech/", desc: "IT特化で高年収・Web系求人に強い。技術面接対策のサポートが受けられる。" }, { name: "Green", href: "/review/green/", desc: "Web系・自社開発企業の求人が豊富。Ruby・スタートアップ系に強み。" }, { name: "paiza転職", href: "/review/paiza/", desc: "コーディングスキルで評価される仕組み。技術力で勝負したい人向け。" }].map((agent, i) => (<Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors"><h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3><p className="text-xs text-slate-500">{agent.desc}</p></Link>))}
          </div>
          <p className="text-xs text-slate-500 mt-3">特定企業の求人保有状況は時期により変動します。複数社の併用で求人の取りこぼしを防ぐのが定石です。詳しくは<Link href="/compare/agents/" className="text-petrol hover:underline">エージェント比較</Link>を参照してください。</p>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">STORESへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">Web系・Ruby求人に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="faq" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq, i) => (<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[{ name: "Ruby/Railsエンジニアの転職市場", href: "/skill/ruby/" }, { name: "Goエンジニアの転職市場", href: "/skill/go/" }, { name: "BASEの転職ガイド", href: "/company/base/" }, { name: "クックパッドの転職ガイド", href: "/company/cookpad/" }, { name: "スタートアップと大企業の比較", href: "/knowledge/startup-vs-enterprise/" }, { name: "40代エンジニアの転職の現実", href: "/knowledge/40s-reality/" }].map((item, i) => (<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
