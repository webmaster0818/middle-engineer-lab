import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/base/" },
  title: "BASEの年収は平均700万円【2026年・有報】エンジニア転職・技術スタック",
  description:
    "BASE（ベイス）のエンジニア中途採用を有価証券報告書・公式技術発信の一次情報で解説。平均年収700万円(2024年12月期)、PHP+Go・決済ドメイン、30代40代の現実を中立にまとめました。",
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
  { id: "middle", label: "30代・40代から見たBASE" },
  { id: "agent", label: "おすすめエージェント3社" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basicData: [string, string][] = [
  ["企業名", "BASE株式会社（証券コード4477・東証グロース）"],
  ["業種", "ネットショップ作成「BASE」、ID決済「Pay ID」、金融「YELL BANK」等（決済・EC／フィンテック）"],
  ["平均年収", "700万円（2024年12月期・提出会社単体／全従業員平均・賞与含む）"],
  ["主要プロダクト", "BASE（EC）／Pay ID（ID・決済）／PAY.JP（決済API）"],
  ["技術スタック", "本体PHP（CakePHP由来）＋Vue/React(TS)／新規はGo＋Next.js(App Router)／決済はGo・Python／AWS・GCP"],
];

const salaryRows: [string, string][] = [
  ["平均年収（提出会社単体・全従業員）", "700万円"],
  ["対象年度", "2024年12月期（有価証券報告書）"],
  ["集計範囲", "エンジニア以外も含む全従業員平均"],
  ["留意点", "転職集計サイトでは約758万円とする値もあるが、当ガイドは有報の数値を優先"],
];

const faqs = [
  { q: "BASEはエンジニアの中途採用を行っている？", a: "BASEは継続的にソフトウェアエンジニアの中途採用を行っています。ネットショップ作成サービス「BASE」、ID決済「Pay ID」、決済API「PAY.JP」、金融サービスなど複数プロダクトを展開しており、サーバーサイド・フロントエンド・SRE・決済基盤など幅広い職種で募集があります。最新は公式採用ページをご確認ください。" },
  { q: "BASEの平均年収はいくら？", a: "2024年12月期の有価証券報告書によると、提出会社（BASE株式会社単体）の平均年間給与は700万円です。これは賞与を含む全従業員（エンジニア以外も含む）の平均で、職種別・等級別の内訳は公式に開示されていません。なお転職集計サイトでは約758万円とする値も見られますが、当ガイドでは一次情報である有価証券報告書の数値を優先しています。" },
  { q: "BASEのエンジニア職の提示年収レンジは公開されている？", a: "BASEは職種別・等級別の年収レンジを公式に常時開示していません。求人サイトでも継続的に確認できる確定レンジがないため、当ガイドでは推測の数値表は掲載していません。目安として有価証券報告書の平均700万円（2024年12月期・全従業員平均）が参考値になります。" },
  { q: "BASEで使われている技術スタックは？", a: "BASEの主力サービス本体はPHP（CakePHP由来）で構築され、フロントエンドはVue・React（TypeScript）が使われています。一方、ID決済「Pay ID」などの新規プロダクトではGoとNext.js（App Router）が採用され、金融サービス「YELL BANK」はGo、決済API「PAY.JP」はPythonなどが用いられています。インフラはAWS・GCPを利用しています。既存のPHPからGoへ重心を移しつつある点が特徴です。" },
  { q: "BASEの選考フローは？", a: "BASEは選考フローの詳細な回数・内容を公式に網羅的には公開していません。一般的なWeb企業と同様、書類選考→複数回の面接（技術面接・カルチャーフィット面接を含む）→内定という流れが想定されますが、回数・形式は職種・時期により異なります。創作した固定フローは掲載していないため、最新は公式採用ページや担当エージェントでご確認ください。" },
  { q: "BASEはPHPとGoのどちらの経験が有利？", a: "BASEは既存の主力サービスがPHP（CakePHP由来）である一方、新規プロダクトや決済・金融領域ではGoの採用を進めています。そのため、PHPによる大規模Webサービスの開発運用経験も、Goによるマイクロサービス・決済基盤の経験も、いずれも活きる可能性があります。応募する職種・プロダクトによって求められる言語が異なるため、募集要項で確認することが重要です。" },
  { q: "BASEで決済・フィンテックの経験は評価される？", a: "BASEは決済（PAY.JP）・ID決済（Pay ID）・金融（YELL BANK）など金融ドメインのプロダクトを複数持つため、決済システムや金融領域の開発経験は親和性が高いと考えられます。可用性・セキュリティ・トランザクション整合性といった、決済特有の非機能要件への理解は評価されやすい傾向があります。" },
  { q: "BASEへの転職は未経験でも可能？", a: "BASEの中途採用は即戦力の経験者採用が基本です。各募集要項に必須スキル（PHPやGoでのWebサービス開発経験等）が明示されており、完全未経験からの参入は現実的ではありません。まずはWebサービス開発の実務経験を積むのが一般的な道筋です。" },
];

export default function BaseCompanyPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="BASE エンジニア転職ガイド" description="BASEへのエンジニア転職を有価証券報告書・公式技術発信の一次情報で解説。平均年収700万円(2024年12月期)、PHP+Go・決済ドメイン、技術スタックをまとめました。" url="/company/base/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "BASE" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">BASE（ベイス）へのエンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-600 text-sm leading-relaxed mb-2">
          BASE株式会社へのエンジニア中途採用について、有価証券報告書と公式の技術発信の一次情報をもとに、転職難易度・年収・技術スタック・選考の実態を中立にまとめました。ネットショップ作成「BASE」、ID決済「Pay ID」、決済API「PAY.JP」、金融「YELL BANK」と、ECと決済・金融が交わるドメインを持つのが大きな特徴です。既存のPHP資産とGoへの移行フェーズが共存する、技術選択の過渡期を体験できる企業として、30代・40代が押さえるべき現実を解説します。
        </p>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ 出典は各データの直後に明記しています。</p>

        {/* 直答box (P0/company年収) */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】BASE（ベイス）の年収は？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: BASE株式会社の平均年間給与は700万円です（2024年12月期 有価証券報告書・提出会社単体／全従業員平均・賞与含む）。</strong></p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・平均年収 700万円（2024年12月期 有報・単体全従業員平均）。エンジニア以外も含む平均で、職種別・等級別の内訳は非開示です。</li><li>・転職集計サイトでは約758万円とする値もありますが、当ガイドは一次情報である有報の700万円を優先しています。</li><li>・職種別の年収レンジは公式に常時開示されていないため、提示は自分の経験レンジに対し個別交渉・確認が必要です。</li></ul>
        </div>

        <DataNote surveyedAt="2026年6月" sources={["BASE 有価証券報告書（2024年12月期）", "BASE 公式採用サイト・技術ブログ", "IRBANK", "OpenWork（口コミ傾向）"]} />

        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：転職難易度と向くエンジニア</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-sm text-blue-900 font-bold mb-3">転職難易度：中〜高（PHP/Goの経験者・決済ドメイン志向に向く）</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>・主力サービスは<strong>PHP（CakePHP由来）</strong>、新規・決済領域は<strong>Go＋Next.js</strong>。既存資産の保守とモダン化の両方に関われる過渡期フェーズ。</li>
              <li>・EC×決済×金融の<strong>決済ドメイン</strong>を複数プロダクトで持つ。可用性・セキュリティへの理解が活きる。</li>
              <li>・有報の平均年収は<strong>700万円（2024年12月期・単体・全従業員平均）</strong>。グロース上場企業として事業フェーズに応じた評価。</li>
            </ul>
            <p className="text-xs text-blue-800 mt-3">逆に、レガシーに一切触れず最新スタックのみで開発したい人や、決済特有の厳格な品質要求を負担に感じる人は相性を見極める必要があります。</p>
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
          <p className="text-xs text-slate-500">出典：BASE「有価証券報告書」2024年12月期（提出会社＝BASE株式会社単体の従業員データ）、IRBANK集計、BASE公式採用サイト・技術ブログ。最新値は各IR資料・採用ページをご確認ください。</p>
        </section>

        <section id="feature" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">EC×決済×金融のマルチプロダクト</h3><p className="text-sm text-petrol-deep">ネットショップ作成「BASE」、ID決済「Pay ID」、決済API「PAY.JP」、金融「YELL BANK」と、ECを軸に決済・金融へ広がるプロダクト群を持ちます。プロダクトごとに技術スタックや求められるドメイン知識が異なるため、自分の経験に合った領域を選びやすいのが特徴です。</p></div>
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">PHPからGoへの移行フェーズ</h3><p className="text-sm text-petrol-deep">主力サービス本体はPHP（CakePHP由来）で構築されている一方、新規プロダクトや決済・金融領域ではGoの採用を進めています。既存の大規模資産を保守しながら、新領域をモダンなスタックで作るという、技術選択の過渡期に立ち会える点はエンジニアにとって学びの大きい環境です。</p></div>
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">決済ドメインならではの非機能要件</h3><p className="text-sm text-petrol-deep">決済・金融を扱うため、可用性・セキュリティ・トランザクション整合性といった非機能要件への要求が高い領域です。お金を扱うシステムの堅牢性に向き合った経験は強みになり、入社後もそうした品質感覚が求められます。</p></div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公式採用・技術発信の公開情報）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">以下はBASEの公式採用ページ・技術ブログで確認できる範囲の情報です。プロダクトによってスタックが異なります。</p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>PHP（CakePHP由来）</strong>：主力サービス「BASE」本体のサーバーサイド</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>Vue / React（TypeScript）</strong>：既存サービスのフロントエンド</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>Go ＋ Next.js（App Router）</strong>：ID決済「Pay ID」など新規プロダクト</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>Go</strong>：金融サービス「YELL BANK」／<strong>Python</strong>：決済API「PAY.JP」</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><span><strong>AWS・GCP</strong>：クラウド基盤</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：BASE 公式採用サイト・技術ブログの公開情報。各言語の市場感は<Link href="/skill/php/" className="text-petrol hover:underline">PHPエンジニアの転職市場</Link>・<Link href="/skill/go/" className="text-petrol hover:underline">Goエンジニアの転職市場</Link>もあわせてご覧ください。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-100"><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">項目</th><th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">内容（2024年12月期・提出会社単体）</th></tr></thead>
              <tbody>{salaryRows.map(([k, v], i) => (<tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}><td className="px-4 py-3 text-slate-600 border-b border-slate-200">{k}</td><td className="px-4 py-3 text-slate-700 border-b border-slate-200 font-medium">{v}</td></tr>))}</tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-2">
            上表はBASEの<strong>有価証券報告書（2024年12月期）</strong>に記載された提出会社（BASE株式会社単体）の数値です。これは<strong>エンジニア以外も含む全従業員の平均</strong>であり、職種別・等級別の年収は公式に開示されていません。転職集計サイトでは約758万円とする値も見られますが、当ガイドでは一次情報である<strong>有価証券報告書の700万円を優先</strong>しています。出典のない等級別年収表は掲載していません。
          </p>
          <p className="text-xs text-slate-500">出典：BASE「有価証券報告書」2024年12月期、IRBANK集計。年代別の相場感は<Link href="/knowledge/salary-30s/" className="text-petrol hover:underline">30代の年収相場</Link>・<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収相場</Link>を参照してください。</p>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公開情報の範囲）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">BASEは選考フローの詳細な回数・内容を公式に網羅的には公開していません。創作した固定フローは掲載せず、一般的なWeb企業の中途採用で想定される大枠のみを示します。</p>
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
          <p className="text-xs text-slate-500 mt-2">注：上記は一般的な想定であり、BASE固有の確定フローではありません。最新は公式採用ページ・担当エージェントでご確認ください。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報・口コミ傾向ベース）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">具体的な面接質問リストは公式に公開されておらず、断定はできません。公開情報と口コミプラットフォームの傾向から、評価されやすいと考えられるポイントを一般化して挙げます。</p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>PHPまたはGoによるWebサービスの開発運用経験と設計力</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>既存資産の保守とモダン化を両立する現実的なエンジニアリング感覚</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>決済・金融ドメインの非機能要件（可用性・セキュリティ）への理解</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">✓</span>マルチプロダクト環境での自律的な課題発見・解決</li>
          </ul>
        </section>

        <section id="review" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">社員口コミの傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            OpenWork等の口コミプラットフォームでは、BASEについて<strong>「決済・ECというドメインの面白さ」「フラットで自律的な開発文化」「技術選択に前向きな雰囲気」</strong>といった声が見られる一方、<strong>「グロース企業として事業フェーズの変化に伴う業務量の波がある」「既存サービスの技術的負債と向き合う場面がある」</strong>といった指摘も見られます。事業の成長性とレガシー対応の両面を踏まえた見極めが必要です。
          </p>
          <p className="text-xs text-slate-500">出典：OpenWork掲載の社員クチコミの傾向を要約（個別スコア・原文の転載はしていません）。評価は部署・時期・職種により大きく異なります。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見たBASE</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>30代・40代のエンジニアにとって、BASEの「PHPの大規模資産とGoへの移行が共存する過渡期」は、経験が最も活きるフェーズです。レガシーを否定せず現実的にモダン化を進める判断力は、若手にはまだ難しく、複数の技術世代を経験してきたミドル層の強みが直接価値になります。EC×決済×金融という、お金が絡む堅牢性を求められるドメインも、慎重さと経験がものを言う領域です。</p>
            <p>一方で、グロース上場企業として事業フェーズの変化が早く、業務量の波や優先順位の変化が起きやすい点は、生活基盤が固まった40代では事前に確認しておきたいポイントです。年収面では平均700万円が一つの基準ですが、これは全従業員平均であり、自分の経験レンジに対する提示は個別に交渉・確認することが重要です。</p>
            <p>転職活動では、ミドル層の市場価値・年収交渉の観点も押さえておきたいところです。<Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の把握</Link>や<Link href="/industry/finance/" className="text-petrol hover:underline">金融・フィンテック業界の転職</Link>、<Link href="/knowledge/40s-reality/" className="text-petrol hover:underline">40代エンジニア転職の現実</Link>もあわせて確認してください。</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人・向いていない人</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <p className="font-bold text-green-800 text-sm mb-3">向いている人</p>
              <ul className="space-y-2 text-sm text-green-900">
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>PHPまたはGoでのWebサービス開発経験者</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>既存資産の保守とモダン化の両立にやりがいを感じる</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>決済・金融・ECのドメインに興味がある</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>フラットで自律的な開発文化を好む</li>
              </ul>
            </div>
            <div className="border border-rose-200 bg-rose-50 rounded-lg p-5">
              <p className="font-bold text-rose-800 text-sm mb-3">向いていない人</p>
              <ul className="space-y-2 text-sm text-rose-900">
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>レガシーに一切触れず最新スタックのみで開発したい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>決済特有の厳格な品質要求を負担に感じる</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>事業フェーズの変化や業務量の波を避けたい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>大企業の安定した分業体制を最優先したい</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="agent" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">BASE転職におすすめのエージェント3社</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[{ name: "レバテックキャリア", href: "/review/levtech/", desc: "IT特化で高年収・Web系求人に強い。技術面接対策のサポートが受けられる。" }, { name: "Green", href: "/review/green/", desc: "Web系・自社開発企業の求人が豊富。スタートアップ・グロース企業に強み。" }, { name: "ビズリーチ", href: "/review/bizreach-it/", desc: "ハイクラス向けスカウト型。決済・フィンテックの上位ポジションに出会いやすい。" }].map((agent, i) => (<Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors"><h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3><p className="text-xs text-slate-500">{agent.desc}</p></Link>))}
          </div>
          <p className="text-xs text-slate-500 mt-3">特定企業の求人保有状況は時期により変動します。複数社の併用で求人の取りこぼしを防ぐのが定石です。詳しくは<Link href="/compare/agents/" className="text-petrol hover:underline">エージェント比較</Link>を参照してください。</p>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">BASEへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">Web系・決済ドメインに強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="faq" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq, i) => (<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[{ name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "PHPエンジニアの転職市場", href: "/skill/php/" }, { name: "Goエンジニアの転職市場", href: "/skill/go/" }, { name: "PLAIDの転職ガイド", href: "/company/plaid/" }, { name: "STORESの転職ガイド", href: "/company/stores/" }, { name: "クックパッドの転職ガイド", href: "/company/cookpad/" }, { name: "金融・フィンテック業界の転職", href: "/industry/finance/" }].map((item, i) => (<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
