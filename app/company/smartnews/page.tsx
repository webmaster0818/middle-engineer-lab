import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "SmartNewsへのエンジニア転職｜年収・技術スタック・難易度【2026年版】",
  description:
    "SmartNewsのエンジニア中途採用を公式Engineering Blog等の一次情報で解説。Java中心＋Scala/Sparkの配信・ML基盤、少数精鋭の難易度、30代40代の現実を中立にまとめました。",
};

const toc = [
  { id: "conclusion", label: "結論：転職難易度と向くエンジニア" },
  { id: "basic", label: "基本データ（出典付き）" },
  { id: "feature", label: "エンジニア採用の特徴" },
  { id: "stack", label: "技術スタック（公式情報）" },
  { id: "salary", label: "年収データの考え方" },
  { id: "flow", label: "選考フロー" },
  { id: "interview", label: "面接で重視される点" },
  { id: "review", label: "社員口コミの傾向" },
  { id: "middle", label: "30代・40代から見たSmartNews" },
  { id: "agent", label: "おすすめエージェント3社" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basicData: [string, string][] = [
  ["企業名", "株式会社SmartNews（スマートニュース・非上場）"],
  ["業種", "ニュース配信プラットフォーム／メディアテック（アルゴリズム配信・機械学習）"],
  ["平均年収", "公式の全社員平均は非公開。集計サイトに約1,300万円台の記載があるが、これは公式値ではない参考値"],
  ["技術スタック", "Java（8／11）が約9割＋Ruby／Go／Scala／Kotlin、Spark処理はScala、インフラはほぼAWS（Amazon Linux）、CDNはAkamai中心"],
  ["特徴", "大量のニュース配信・機械学習を支える少数精鋭の開発組織。難易度は高い"],
  ["採用形態", "中途（キャリア採用）中心。即戦力の経験者採用"],
];

const faqs = [
  { q: "SmartNewsの平均年収はいくら？", a: "SmartNewsは非上場企業のため、上場企業のように有価証券報告書で開示される公式の全従業員平均年収は公表されていません。転職クチコミ・年収集計サイトに約1,300万円台といった数値が掲載されることがありますが、これらは公式値ではない参考値であり、母数や算定方法が不明です。当ガイドでは具体額の断定は控えています。少数精鋭で技術難易度が高い組織のため、実額は職種・経験により個人差が大きく、選考過程で確認するのが確実です。" },
  { q: "SmartNewsで使われている技術スタックは？", a: "SmartNewsの公式Engineering Blogによると、バックエンドはJava（8/11）が約9割を占め、加えてRuby・Go・Scala・Kotlinが使われています。大規模データ処理基盤のSparkはScalaで記述され、インフラはほぼAWS（Amazon Linux）上に構築、コンテンツ配信はAkamaiを中心としたCDNが使われています。大量のニュース配信と機械学習を支える構成です。" },
  { q: "SmartNewsの転職難易度は高い？", a: "高い部類に入ります。SmartNewsは少数精鋭の開発組織で、大量配信・機械学習・大規模データ処理といった技術的難易度の高い領域を扱います。Java中心のバックエンド、ScalaでのSpark処理、AWS上の大規模インフラなど、専門性と実務経験が問われる募集が中心で、即戦力としての技術力が重視されます。" },
  { q: "SmartNewsはScalaの経験が必要？", a: "SmartNewsはJavaが約9割を占める一方、大規模データ処理基盤のSparkはScalaで書かれていると公式Engineering Blogで説明されています。配信ロジックやデータ処理に関わる職種ではScalaの経験が活きる場面があると考えられますが、必須かどうかは募集ごとに異なります。具体的な要件は各募集要項で確認してください。" },
  { q: "SmartNewsの選考フローは？", a: "SmartNewsは職種ごとの具体的な選考ステップ（面接回数・コーディングテストの有無など）の詳細を公式に網羅的には公開していません。当ガイドでは公式に確認できない選考詳細を創作して掲載することはしません。技術難易度の高い組織のため技術評価が行われることが想定されますが、正確な流れは公式採用ページや担当エージェントでご確認ください。" },
  { q: "SmartNewsの面接で聞かれることは？", a: "SmartNewsは具体的な面接質問リストを公式に公開していないため、当ガイドでは創作した質問例の掲載は行いません。公開されている技術スタックや事業特性から、大規模配信・データ処理・機械学習基盤の設計運用経験が評価されやすいと一般的に考えられますが、これは推測です。" },
  { q: "SmartNewsへの転職で有利な経験は？", a: "公式に公開されている技術スタックから読み取れる範囲では、Javaでのバックエンド開発、ScalaでのSpark・大規模データ処理、AWS上の大規模インフラ運用、機械学習を用いた配信・レコメンドの経験が親和性が高いと考えられます。大量トラフィックを高い品質で配信する経験を持つミドルは評価されやすいでしょう。" },
  { q: "SmartNewsはリモートワークできる？", a: "勤務形態は職種・時期・組織方針により異なります。当ガイドの調査時点では制度の詳細を公式の一次情報として確定できなかったため、最新の勤務条件は各募集要項や選考過程で必ず確認してください。" },
];

export default function SmartNewsCompanyPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="SmartNews エンジニア転職ガイド" description="SmartNewsへのエンジニア転職を公式Engineering Blog等の一次情報で解説。Java中心＋Scala/Sparkの配信・ML基盤、少数精鋭の難易度をまとめました。" url="/company/smartnews/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "SmartNews" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">SmartNewsへのエンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-600 text-sm leading-relaxed mb-2">
          株式会社SmartNewsへのエンジニア中途採用について、公式Engineering Blog等の一次情報をもとに、転職難易度・技術スタック・年収の考え方・働き方を中立にまとめました。大量のニュース配信と機械学習を、少数精鋭で支えるメディアテックの代表格です。
        </p>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ 出典は各データの直後に明記しています。</p>

        <DataNote surveyedAt="2026年6月" sources={["SmartNews 公式 Engineering Blog", "SmartNews 公式採用ページ", "OpenWork（口コミ傾向）"]} />

        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：転職難易度と向くエンジニア</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-sm text-blue-900 font-bold mb-3">転職難易度：高い（少数精鋭・大規模配信／ML基盤の経験者）</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>・中核は<strong>Java中心のバックエンド＋ScalaによるSpark処理</strong>で、大規模ニュース配信・機械学習の基盤を支える。専門性の高い経験者に向く。</li>
              <li>・<strong>少数精鋭の組織</strong>で、即戦力としての技術力と自走力が強く問われる。大量トラフィック・データ処理の実務経験が活きる。</li>
              <li>・<strong>非上場のため公式の平均年収は非公開</strong>。集計値（約1,300万円台）は公式値ではない参考値として扱い、実額は選考過程で確認するのが現実的。</li>
            </ul>
            <p className="text-xs text-blue-800 mt-3">逆に、大規模配信・データ処理の経験が薄い人や、手厚いオンボーディング前提で受け身に進めたい人は、少数精鋭ゆえの自走文化とミスマッチが起きやすい点に注意が必要です。</p>
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
          <p className="text-xs text-slate-500">出典：SmartNews公式Engineering Blogの技術スタック解説、SmartNews公式採用ページ。平均年収は年収集計サイトの記載（約1,300万円台）に基づきますが、これは公式値ではない参考値です。SmartNewsは非上場のため、上場企業の有価証券報告書のような公式の全従業員平均年収は公表されていません。</p>
        </section>

        <section id="feature" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">大規模配信×機械学習</h3><p className="text-sm text-blue-700">SmartNewsは膨大なニュースを収集・解析し、ユーザーごとに最適化して配信するプラットフォームです。アルゴリズム配信・レコメンド・大規模データ処理といった、機械学習とバックエンドが密接に絡む領域が中核に置かれています。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">少数精鋭の開発組織</h3><p className="text-sm text-blue-700">SmartNewsは少数精鋭で大規模サービスを支える組織文化が知られています。一人ひとりの裁量と責任が大きく、即戦力としての技術力・自走力が強く求められる一方、高難度の課題に深く関われる環境です。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">Java中心＋データ処理のScala</h3><p className="text-sm text-blue-700">公式Engineering Blogによると、バックエンドはJavaが約9割を占めつつ、Ruby・Go・Scala・Kotlinが用途に応じて使われています。大規模データ処理のSparkはScalaで記述されており、配信・データ領域では関数型のパラダイムにも触れることになります。</p></div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公式Engineering Blogの公開情報）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">以下はSmartNews公式Engineering Blogで公開されている情報に基づきます。公式に明記された範囲のみを掲載し、推測でのスタック追加は行っていません。</p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>Java（8／11）</strong>：バックエンドの約9割を占める主力言語</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>Ruby／Go／Scala／Kotlin</strong>：用途に応じて使用</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>Scala（Spark）</strong>：大規模データ処理基盤の記述に使用</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>AWS（Amazon Linux）／Akamai</strong>：インフラはほぼAWS、配信はAkamai中心のCDN</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：SmartNews公式Engineering Blogの技術スタック解説。構成は時期・サービスにより変化する場合があります。関連するスキル解説は<Link href="/skill/java/" className="text-blue-600 hover:underline">Java</Link>・<Link href="/skill/go/" className="text-blue-600 hover:underline">Go</Link>・<Link href="/skill/ai-ml/" className="text-blue-600 hover:underline">AI／機械学習</Link>・<Link href="/skill/aws/" className="text-blue-600 hover:underline">AWS</Link>のページも参照してください（Scala単独の解説ページは現在準備中です）。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データの考え方</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-2">
            SmartNewsは<strong>非上場企業</strong>のため、上場企業の有価証券報告書で開示される「全従業員平均年収」のような公式の平均値は公表されていません。年収集計サイトに<strong>約1,300万円台</strong>という記載が見られますが、これは<strong>公式値ではない参考値</strong>であり、母数・算定方法・対象職種が不明です。少数精鋭で技術難易度が高い組織という性質上、集計値が高めに出る可能性もあり、当ガイドでは具体額の断定や等級別年収表（創作）は行いません。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mb-2">
            ミドル層が年収を見極める際は、提示額の内訳と、大規模配信・ML基盤という自分の経験の希少性を踏まえて、選考過程やエージェントを通じて確認するのが現実的です。年代別の相場感は<Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代の年収相場</Link>もあわせてご覧ください。
          </p>
          <p className="text-xs text-slate-500">出典：年収集計サイト（参考値）。公式の平均年収が存在しないため、ここでは断定的な金額は記載していません。</p>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式に詳細は非公開）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            SmartNewsは<strong>職種ごとの具体的な選考ステップ（面接回数・技術試験の有無など）を公式に網羅的には公開していません</strong>。当ガイドでは、公式に確認できない選考詳細を創作して掲載することはしません。技術難易度の高い少数精鋭の組織であることから技術評価が行われることが想定されますが、SmartNewsの正確なフローは公式採用ページや担当エージェントでご確認ください。
          </p>
          <p className="text-xs text-slate-500">出典：SmartNews公式採用ページ。フローは職種・時期により変動します。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報ベースの一般化）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">具体的な面接質問リストは公式に公開されておらず、断定はできません。創作した質問例は掲載せず、公開されている技術スタック・事業特性から評価されやすいと一般に考えられるポイントのみを挙げます。</p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">✓</span>Javaを中心としたバックエンド設計・実装力</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">✓</span>大規模データ処理（Scala／Spark）・配信基盤の運用経験</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">✓</span>機械学習を用いたレコメンド・配信最適化への理解</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">✓</span>少数精鋭ゆえの自走力と、AWS上の大規模インフラへの適応</li>
          </ul>
        </section>

        <section id="review" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">社員口コミの傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            OpenWork等の口コミプラットフォームでは、SmartNewsについて<strong>「技術力の高いメンバーと働ける」「裁量が大きく難度の高い課題に挑める」「待遇水準が高い」</strong>といった声が見られる一方、<strong>「少数精鋭ゆえに一人あたりの責任が重い」「事業・組織のフェーズによる変動がある」</strong>といった指摘も見られます。高難度の課題を自律的に進められる人ほど活躍しやすい傾向がうかがえます。
          </p>
          <p className="text-xs text-slate-500">出典：OpenWork掲載の社員クチコミの傾向を要約（個別スコア・原文の転載はしていません）。評価は部署・時期・職種により大きく異なります。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見たSmartNews</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>30代・40代のミドルエンジニアにとって、SmartNewsは<strong>「大規模配信・機械学習という難度の高い領域」「Java中心＋Scala/Sparkの経験を活かせる」</strong>という点で挑戦しがいのある選択肢です。これまで大規模Web・データ基盤・配信システムを支えてきた経験は、そのまま強みとして評価されやすいドメインです。</p>
            <p>一方で、少数精鋭ゆえに一人あたりの責任が重く、自走力が前提となる文化があります。手厚いサポートのもとで進めたい志向や、安定・固定的な環境を求めるキャリア観とは相性が分かれます。年収は公式平均が存在せず、集計値も参考値にとどまるため、提示の内訳と自分の経験の希少性を冷静に見極めることが重要です。</p>
            <p>転職活動では、ミドル層の市場価値整理と技術の言語化が鍵になります。<Link href="/knowledge/market-value/" className="text-blue-600 hover:underline">市場価値の把握</Link>や<Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代の年収相場</Link>、<Link href="/age/40s/" className="text-blue-600 hover:underline">40代エンジニアの転職</Link>もあわせて確認してください。</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人・向いていない人</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <p className="font-bold text-green-800 text-sm mb-3">向いている人</p>
              <ul className="space-y-2 text-sm text-green-900">
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>Javaで大規模バックエンドを支えてきた経験者</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>Scala／Sparkでの大規模データ処理に強みがある</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>機械学習を用いた配信・レコメンドに挑戦したい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>少数精鋭の自走文化のなかで裁量を持って働きたい</li>
              </ul>
            </div>
            <div className="border border-rose-200 bg-rose-50 rounded-lg p-5">
              <p className="font-bold text-rose-800 text-sm mb-3">向いていない人</p>
              <ul className="space-y-2 text-sm text-rose-900">
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>大規模配信・データ処理の経験が薄い</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>手厚いオンボーディング・サポート前提で進めたい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>一人あたりの責任が重い環境を避けたい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>安定・固定的な環境を最優先したい</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">メディアテック転職市場とSmartNewsの位置づけ</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>経済産業省「IT人材需給に関する調査」（2019年公表の試算）では、2030年に最大約79万人のIT人材不足が見込まれています。特に大規模配信・機械学習・データ基盤を担える人材の需要は構造的に高く、SmartNewsのように高難度の領域を扱う企業は、専門性を磨きたいミドルにとって希少な選択肢です。</p>
            <p>年代別の年収水準の目安として、レバテックが公表する正社員SEの平均年収（2025年）は30代約499万円・40代約618万円とされています。これはIT職全般の平均で、大規模配信・ML基盤を担う専門職はこれを上回るケースもありますが、SmartNewsは非上場で公式平均が存在しないため、ここでは断定を避けます。</p>
            <p>つまりSmartNewsは「希少な大規模配信・ML基盤の経験を、少数精鋭の環境で深められる」企業といえます。一方で公式の年収情報が限られるため、提示内容の見極めと複数社比較が転職成功の鍵になります。</p>
          </div>
        </section>

        <section id="agent" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SmartNews転職におすすめのエージェント3社</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[{ name: "レバテックキャリア", href: "/review/levtech/", desc: "IT特化で高年収・モダン技術の求人比率が高く、技術面接対策のサポートが受けられる。" }, { name: "ビズリーチ（IT）", href: "/review/bizreach-it/", desc: "ハイクラス・スカウト型。メガベンチャー・テック企業の上位ポジションに強い。" }, { name: "doda（IT）", href: "/review/doda-it/", desc: "国内最大級の求人数。Web・データ領域の求人を幅広くカバー。" }].map((agent, i) => (<Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors"><h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3><p className="text-xs text-slate-500">{agent.desc}</p></Link>))}
          </div>
          <p className="text-xs text-slate-500 mt-3">特定企業の求人保有状況は時期により変動します。複数社の併用で求人の取りこぼしを防ぐのが定石です。詳しくは<Link href="/compare/agents/" className="text-blue-600 hover:underline">エージェント比較</Link>を参照してください。</p>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">SmartNewsへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">メガベンチャー・テック企業に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="faq" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq, i) => (<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[{ name: "Javaエンジニアの転職ガイド", href: "/skill/java/" }, { name: "Goエンジニアの転職", href: "/skill/go/" }, { name: "AI／機械学習エンジニアの転職", href: "/skill/ai-ml/" }, { name: "メルカリの転職ガイド", href: "/company/mercari/" }, { name: "40代の年収相場", href: "/knowledge/salary-40s/" }, { name: "コーディングテスト対策", href: "/knowledge/coding-test/" }].map((item, i) => (<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
