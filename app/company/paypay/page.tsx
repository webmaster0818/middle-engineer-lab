import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "PayPayへのエンジニア転職｜年収・技術スタック・選考の現実【2026年版】",
  description:
    "PayPayのエンジニア中途採用を公式技術ブログ等の一次情報で解説。大規模決済基盤のJava/Kubernetes、英語環境、年収の考え方、30代40代の現実を中立にまとめました。",
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
  { id: "middle", label: "30代・40代から見たPayPay" },
  { id: "agent", label: "おすすめエージェント3社" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basicData: [string, string][] = [
  ["企業名", "PayPay株式会社（非上場・ソフトバンクグループ系フィンテック）"],
  ["業種", "キャッシュレス決済／フィンテック（QRコード決済「PayPay」運営）"],
  ["平均年収", "公式の全社員平均は非公開（上場企業のような有報がなく確認不可）"],
  ["技術スタック", "Java（11/17）＋Spring Boot 中心、一部 Kotlin／Scala／Node.js、AWS＋Kubernetes のマイクロサービス"],
  ["特徴", "大規模決済トランザクションを支えるバックエンド／英語を使う多国籍な開発環境"],
  ["採用形態", "中途（キャリア採用）を通年で積極実施（採用管理に Greenhouse を利用）"],
];

const faqs = [
  { q: "PayPayの平均年収はいくら？", a: "PayPayは非上場企業のため、上場企業のように有価証券報告書で開示される「全従業員平均年収」が存在せず、当ガイドの調査時点では公式の平均年収は確認できませんでした。転職クチコミサイト等に集計値が掲載される場合がありますが、それらは公式値ではない参考値であり、母数や算定方法が不明なため、当ガイドでは具体的な平均額の断定は控えています。実際の提示額は職種・等級・経験により個人差が大きいため、エージェントや選考過程で確認することをおすすめします。" },
  { q: "PayPayで使われている技術スタックは？", a: "PayPayの公式技術ブログ（blog.paypay.ne.jp）で公開されている「PayPay Stack」によると、バックエンドはJava（11/17）とSpring Bootが中心で、一部にKotlin・Scala・Node.jsが使われています。インフラはAWS上のKubernetesによるマイクロサービス構成で、データベースはRDS（Oracle/MySQL）・DynamoDB・S3・Lambdaなどが用いられています。大規模な決済トランザクションを高い可用性で支える構成です。" },
  { q: "PayPayのエンジニアは英語が必要？", a: "PayPayは多国籍なメンバーが在籍する開発環境で、ドキュメントやコミュニケーションで英語が使われる場面があると公式に発信されています。職種・チームによって英語の比重は異なりますが、グローバルな開発組織で働くうえで英語力があると活躍の幅が広がります。具体的な要件は各募集要項で確認してください。" },
  { q: "PayPayは未経験から転職できる？", a: "PayPayのキャリア採用は即戦力の経験者採用が基本です。大規模決済基盤という性質上、バックエンド（Java/Spring Boot）やマイクロサービス、クラウド（AWS/Kubernetes）の実務経験が求められる募集が中心で、完全未経験からの中途採用は現実的ではありません。まずは別のWeb/フィンテック企業で実務経験を積むのが一般的な道筋です。" },
  { q: "PayPayの選考フローは？", a: "PayPayは採用管理システムにGreenhouseを利用し、通年でキャリア採用を行っていますが、職種ごとの具体的な選考ステップ（面接回数・コーディングテストの有無など）の詳細は公式に網羅的には公開されていません。一般的にはカジュアル面談・複数回の面接・技術評価などが想定されますが、当ガイドでは公式に確認できない選考詳細は記載していません。最新かつ正確な流れは公式採用ページや担当エージェントでご確認ください。" },
  { q: "PayPayの面接で聞かれる質問は？", a: "PayPayは具体的な面接質問リストを公式に公開していないため、当ガイドでは創作した質問例の掲載は行いません。公開されている技術スタックや事業特性から、大規模トランザクション・可用性設計・マイクロサービスの運用経験などが評価されやすいと一般的に考えられますが、これは推測であり保証された情報ではありません。" },
  { q: "PayPayはリモートワークできる？", a: "リモートワークの可否・出社頻度は職種や時期、組織方針により変動します。当ガイドの調査時点では制度の詳細を公式の一次情報として確定できなかったため、最新の勤務条件は各募集要項や選考過程で必ず確認してください。" },
  { q: "PayPayへの転職で有利な経験は？", a: "公式に公開されている技術スタックから読み取れる範囲では、Java/Spring Bootでのバックエンド開発、AWS上のKubernetes・マイクロサービスの設計運用、決済・金融など高い可用性が求められるドメインの経験が親和性が高いと考えられます。あわせて英語でのコミュニケーション経験があると、多国籍な開発環境で強みになります。" },
];

export default function PayPayCompanyPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="PayPay エンジニア転職ガイド" description="PayPayへのエンジニア転職を公式技術ブログ等の一次情報で解説。大規模決済基盤のJava/Kubernetes、英語環境、選考の考え方をまとめました。" url="/company/paypay/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "PayPay" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">PayPayへのエンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-600 text-sm leading-relaxed mb-2">
          PayPay株式会社へのエンジニア中途採用（キャリア採用）について、公式技術ブログ「PayPay Inside-Out」等の一次情報をもとに、転職難易度・技術スタック・年収の考え方・働き方を中立にまとめました。国内最大級のQRコード決済を支える、大規模分散システムを開発できる数少ない企業です。
        </p>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ 出典は各データの直後に明記しています。</p>

        <DataNote surveyedAt="2026年6月" sources={["PayPay 公式技術ブログ（PayPay Inside-Out / blog.paypay.ne.jp）", "PayPay 公式採用ページ", "OpenWork（口コミ傾向）"]} />

        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：転職難易度と向くエンジニア</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-sm text-blue-900 font-bold mb-3">転職難易度：高い（大規模決済基盤の経験者・グローバル志向）</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>・中核は<strong>Java／Spring Boot＋AWS／Kubernetes</strong>による大規模決済基盤のマイクロサービス開発。高トラフィック・高可用性の設計運用経験者に向く。</li>
              <li>・多国籍な開発組織で<strong>英語が使われる場面</strong>があり、グローバルな環境で働きたいミドルエンジニアと相性が良い。</li>
              <li>・<strong>非上場のため公式の平均年収は非公開</strong>。集計サイトの数値は公式値ではない参考値として扱い、実額は選考過程で確認するのが現実的。</li>
            </ul>
            <p className="text-xs text-blue-800 mt-3">逆に、特定フレームワークのフロント専業で大規模バックエンドの経験が薄い人や、決済・金融ドメインの厳格さ（可用性・コンプライアンス）に抵抗がある人はミスマッチが起きやすい点に注意が必要です。</p>
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
          <p className="text-xs text-slate-500">出典：PayPay公式技術ブログ「PayPay Inside-Out」内の技術スタック解説（PayPay Stack）、PayPay公式採用ページ。PayPayは非上場のため、上場企業の有価証券報告書のような公式の全従業員平均年収は公表されていません。</p>
        </section>

        <section id="feature" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">国内最大級の決済トラフィックを支える基盤開発</h3><p className="text-sm text-blue-700">PayPayはQRコード決済として国内有数の利用規模を持ち、その裏側では膨大な決済トランザクションを高い可用性で処理する分散システムが動いています。バックエンドエンジニアは、スケーラビリティ・冪等性・障害耐性といった大規模システム特有の課題に向き合うことになります。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">多国籍・英語を使う開発組織</h3><p className="text-sm text-blue-700">公式の発信では、PayPayの開発組織には多様な国籍のメンバーが在籍し、ドキュメントやコミュニケーションで英語が使われる場面があるとされています。グローバルな開発文化のなかで、技術力に加えて英語でのコラボレーション力が活きる環境です。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">通年でのキャリア採用</h3><p className="text-sm text-blue-700">PayPayは採用管理システムにGreenhouseを利用し、中途（キャリア採用）を通年で積極的に行っています。バックエンド・SRE・モバイル・データなど幅広い職種が継続的に募集されますが、募集内容は時期により変動するため最新は公式採用ページで確認が必要です。</p></div>
          </div>
        </section>

        <section id="stack" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック（公式技術ブログの公開情報）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">以下はPayPay公式技術ブログ「PayPay Inside-Out」で公開されている「PayPay Stack」に基づきます。公式に明記された範囲のみを掲載し、推測でのスタック追加は行っていません。</p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>Java（11／17）＋Spring Boot</strong>：バックエンドの主力。決済処理の中核を担う</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>Kotlin／Scala／Node.js</strong>：一部のサービス・用途で使用</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>AWS＋Kubernetes</strong>：マイクロサービスの実行基盤</span></li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span><span><strong>RDS（Oracle／MySQL）／DynamoDB／S3／Lambda</strong>：データストアとサーバーレス</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：PayPay公式技術ブログ「PayPay Inside-Out」内の技術スタック解説（PayPay Stack / blog.paypay.ne.jp）。バージョンや構成は時期・サービスにより変化する場合があります。スキル別の解説は<Link href="/skill/java/" className="text-blue-600 hover:underline">Javaエンジニア</Link>・<Link href="/skill/kubernetes/" className="text-blue-600 hover:underline">Kubernetes</Link>・<Link href="/skill/aws/" className="text-blue-600 hover:underline">AWS</Link>のページも参照してください。</p>
        </section>

        <section id="salary" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データの考え方</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-2">
            PayPayは<strong>非上場企業</strong>のため、上場企業の有価証券報告書で開示される「全従業員平均年収」のような公式の平均値は公表されていません。転職クチコミ・年収集計サイトに数値が掲載されることがありますが、これらは<strong>公式値ではない参考値</strong>であり、母数・算定方法・対象職種が不明なため、当ガイドでは具体的な平均額や等級別年収表の掲載は行いません（数値の創作も行いません）。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mb-2">
            ミドル層が年収を見極める際は、提示額の内訳（基本給・賞与・各種手当・ストック等の有無）と、自分の経験（大規模バックエンド・決済ドメイン）の希少性を踏まえて、選考過程やエージェントを通じて確認するのが現実的です。年代別の相場感は<Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代の年収相場</Link>もあわせてご覧ください。
          </p>
          <p className="text-xs text-slate-500">出典に関する注記：当ガイドは公式の一次情報を優先します。公式の平均年収が存在しないため、ここでは断定的な金額は記載していません。</p>
        </section>

        <section id="flow" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式に詳細は非公開）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            PayPayは採用管理にGreenhouseを利用し通年でキャリア採用を行っていますが、<strong>職種ごとの具体的な選考ステップ（面接回数・技術試験の有無など）は公式に網羅的には公開されていません</strong>。当ガイドでは、公式に確認できない選考詳細を創作して掲載することはしません。一般的なIT企業の中途採用ではカジュアル面談・複数回の面接・技術評価などが行われることが多いですが、PayPayの正確なフローは公式採用ページや担当エージェントでご確認ください。
          </p>
          <p className="text-xs text-slate-500">出典：PayPay公式採用ページ（応募導線はGreenhouseを利用）。フローは職種・時期により変動します。</p>
        </section>

        <section id="interview" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点（公開情報ベースの一般化）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">具体的な面接質問リストは公式に公開されておらず、断定はできません。創作した質問例は掲載せず、公開されている技術スタック・事業特性から評価されやすいと一般に考えられるポイントのみを挙げます。</p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">✓</span>Java／Spring Boot を中心としたバックエンド設計・実装力</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">✓</span>大規模トラフィック下でのスケーラビリティ・可用性・冪等性への理解</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">✓</span>AWS／Kubernetes でのマイクロサービス運用経験</li>
            <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">✓</span>決済・金融ドメインの厳格さ（正確性・コンプライアンス）への適応力と、英語でのコラボレーション</li>
          </ul>
        </section>

        <section id="review" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">社員口コミの傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            OpenWork等の口コミプラットフォームでは、PayPayについて<strong>「裁量が大きくスピード感がある」「グローバルで多様なメンバーと働ける」「事業の成長スピードを実感できる」</strong>といった声が見られる一方、<strong>「変化が速く、組織体制やプロセスが流動的」「成長フェーズゆえに負荷が高い時期がある」</strong>といった指摘も見られます。スピードと変化を楽しめるかどうかが定着の分かれ目になる傾向がうかがえます。
          </p>
          <p className="text-xs text-slate-500">出典：OpenWork掲載の社員クチコミの傾向を要約（個別スコア・原文の転載はしていません）。評価は部署・時期・職種により大きく異なります。</p>
        </section>

        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見たPayPay</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>30代・40代のミドルエンジニアにとって、PayPayは<strong>「大規模決済基盤というスケールの大きさ」「Java／Kubernetesという王道スタックの経験を活かせる」</strong>という点で魅力的な選択肢です。これまで金融・EC・大規模Webなどで高トラフィックなバックエンドを支えてきた経験は、そのまま強みとして評価されやすいドメインです。</p>
            <p>一方で、成長フェーズの企業ゆえに組織やプロセスが流動的な面もあり、安定・固定的な環境を求めるキャリア観とは相性が分かれます。英語が使われる場面があることも、ミドル層にとっては強みにも壁にもなり得ます。年収面では公式の平均値が存在しないため、提示の内訳と自分の経験の希少性を冷静に見極めることが重要です。</p>
            <p>転職活動では、ミドル層の年収交渉・市場価値の整理が鍵になります。<Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代の年収相場</Link>や<Link href="/knowledge/market-value/" className="text-blue-600 hover:underline">市場価値の把握</Link>、<Link href="/age/40s/" className="text-blue-600 hover:underline">40代エンジニアの転職</Link>もあわせて確認してください。</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人・向いていない人</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <p className="font-bold text-green-800 text-sm mb-3">向いている人</p>
              <ul className="space-y-2 text-sm text-green-900">
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>Java／Spring Bootで大規模バックエンドを支えてきた経験者</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>AWS／Kubernetes でのマイクロサービス運用に強みがある</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>決済・金融など高可用性が求められるドメインに挑戦したい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">✓</span>多国籍・英語のあるグローバルな開発環境を楽しめる</li>
              </ul>
            </div>
            <div className="border border-rose-200 bg-rose-50 rounded-lg p-5">
              <p className="font-bold text-rose-800 text-sm mb-3">向いていない人</p>
              <ul className="space-y-2 text-sm text-rose-900">
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>フロント専業で大規模バックエンドの経験が薄い</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>組織・プロセスが固定された安定環境を最優先したい</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>変化のスピードや成長フェーズ特有の負荷が苦手</li>
                <li className="flex items-start gap-2"><span className="shrink-0">×</span>英語に強い苦手意識があり、グローバル環境を避けたい</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フィンテック転職市場とPayPayの位置づけ</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>経済産業省「IT人材需給に関する調査」（2019年公表の試算）では、2030年に最大約79万人のIT人材不足が見込まれています。なかでも決済・金融基盤を支える大規模分散システムの経験者は希少性が高く、PayPayのように国内最大級のトラフィックを扱う環境は限られた選択肢です。</p>
            <p>年代別の年収水準の目安として、レバテックが公表する正社員SEの平均年収（2025年）は30代約499万円・40代約618万円とされています。これはIT職全般の平均で、フィンテックの大規模基盤を担うバックエンドエンジニアはこれを上回る提示となるケースもありますが、PayPayは非上場で公式平均が存在しないため、ここでは断定を避けます。</p>
            <p>つまりPayPayは「希少な大規模決済基盤の経験を活かせる、グローバルな成長企業」といえます。一方で公式の年収情報が限られるため、提示内容の見極めと複数社比較が転職成功の鍵になります。</p>
          </div>
        </section>

        <section id="agent" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">PayPay転職におすすめのエージェント3社</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[{ name: "レバテックキャリア", href: "/review/levtech/", desc: "IT特化で高年収・モダン技術の求人比率が高く、技術面接対策のサポートが受けられる。" }, { name: "ビズリーチ（IT）", href: "/review/bizreach-it/", desc: "ハイクラス・スカウト型。フィンテック大手のポジションに出会いやすい。" }, { name: "doda（IT）", href: "/review/doda-it/", desc: "国内最大級の求人数。大手・グローバル企業の求人を幅広くカバー。" }].map((agent, i) => (<Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors"><h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3><p className="text-xs text-slate-500">{agent.desc}</p></Link>))}
          </div>
          <p className="text-xs text-slate-500 mt-3">特定企業の求人保有状況は時期により変動します。複数社の併用で求人の取りこぼしを防ぐのが定石です。詳しくは<Link href="/compare/agents/" className="text-blue-600 hover:underline">エージェント比較</Link>を参照してください。</p>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">PayPayへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">フィンテック・大規模Webに強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="faq" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq, i) => (<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section id="related">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[{ name: "Javaエンジニアの転職ガイド", href: "/skill/java/" }, { name: "Kubernetesエンジニアの転職", href: "/skill/kubernetes/" }, { name: "AWSエンジニアの転職", href: "/skill/aws/" }, { name: "ソフトバンクの転職ガイド", href: "/company/softbank/" }, { name: "40代の年収相場", href: "/knowledge/salary-40s/" }, { name: "コーディングテスト対策", href: "/knowledge/coding-test/" }].map((item, i) => (<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
