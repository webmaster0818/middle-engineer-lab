import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "TechReach（テックリーチ）の評判・口コミ｜30代40代フリーランス";
const DESCRIPTION =
  "TechReach（テックリーチ／株式会社アールストーン運営）の評判・口コミを30代40代エンジニア目線で検証。翌月15日の支払いサイト、エンド直の高単価案件、フルリモート案件、マージン非公開、向き不向きを公式情報と出典付きで解説します。";
const URL = "/review/techreach/";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "結論サマリ（どんな人向けか）" },
  { id: "basic", label: "基本データ表（2026年6月時点）" },
  { id: "strength", label: "特徴・強み" },
  { id: "good", label: "良い評判の傾向" },
  { id: "bad", label: "悪い評判の傾向と対処法" },
  { id: "margin", label: "単価・マージン・支払いサイトの考え方" },
  { id: "middle", label: "30代・40代エンジニアの活用戦略" },
  { id: "fit", label: "向いている人／向いていない人" },
  { id: "flow", label: "登録から参画までの5ステップ" },
  { id: "compare", label: "フリーランス各社の使い分け" },
  { id: "faq", label: "よくある質問" },
];

const basicData: [string, string][] = [
  ["運営会社", "株式会社アールストーン（親会社はOrchestra Holdings／東証プライム上場）"],
  ["サービス種別", "フリーランス（業務委託）向け案件紹介エージェント（IT・Web）"],
  ["対象", "ITエンジニア・クリエイター（実務経験者）"],
  ["案件の特徴", "大手・メガベンチャーからのエンド直（直契約）高単価案件が中心という公式説明"],
  ["公開案件数", "7,000件以上・フルリモート案件1,000件以上という二次情報（時点要確認）"],
  ["支払いサイト", "月末締め・翌月15日支払い（業界最速クラスという二次情報）"],
  ["マージン", "非公表（確認不可）"],
  ["対応エリア", "首都圏中心＋フルリモート案件あり（二次情報）"],
  ["料金", "フリーランス側は無料"],
];

const goodReviews = [
  {
    title: "支払いサイトが翌月15日で早い",
    body: "キャリアスイッチ通信やフリーランスの攻略本等の口コミ系では、月末締め・翌月15日支払いという支払いサイクルの速さを評価する傾向の声が見られる。資金繰りが読みやすく、独立直後でもキャッシュフローの不安を抑えやすいという感想がある。",
  },
  {
    title: "エンド直の高単価案件が多い",
    body: "公式・二次情報では、大手・メガベンチャーからのエンド直（直契約）案件が中心で、余分な中間マージンが抑えられ高単価という説明がある。月60万円以上の案件が多く、90万円超の高単価案件もあるという二次情報がある。",
  },
  {
    title: "フルリモート案件が豊富",
    body: "フルリモート案件1,000件以上という二次情報があり、通勤負担を抑えて参画したい人に向くという傾向の声が見られる。リモート前提で働き方を選びやすい点が評価されている。",
  },
];

const badReviews = [
  {
    title: "実務経験が前提で未経験には案件が出にくい",
    body: "業務委託案件のため即戦力前提で、実務経験が浅い場合は紹介される案件が限られたという傾向の声がある。高単価・エンド直ゆえに求められるスキル水準も高めとされる。",
    cope: "経験が浅いうちは無理に独立せず、まず正社員で経験を積むのが現実的。安定雇用で経験を積みたい場合は正社員転職のレバテックキャリア（/review/levtech-career/）を検討するとよい。",
  },
  {
    title: "案件量は最大手級ほどではない",
    body: "厳選案件を掲げる一方、案件数の総量ではレバテックフリーランス等の最大手に見劣りすると感じたという傾向の声がある。",
    cope: "案件量を最優先する場合は、案件数の多いレバテックフリーランスを併用する。TechReachは高単価・エンド直・支払いの速さの軸として使い分けると効果的。",
  },
  {
    title: "マージン非公表で手取り感が読みにくい",
    body: "マージン（手数料）が非公表のため、提示単価のうちどれだけが自分の取り分かが事前に分かりづらいという不安の声が見られる。",
    cope: "提示されるのは原則「自分が受け取る単価」であることが多いため、面談時に手取りベースの単価と契約形態（準委任／請負）を必ず確認する。マージンを公開するPE-BANKと比較すると相場感をつかみやすい。",
  },
];

const fitYes = [
  "IT・Web系の実務経験がある30代・40代エンジニア",
  "エンド直の高単価案件を狙いたい独立志向の経験者",
  "支払いサイトの速さ（翌月15日）を重視したい",
  "フルリモートで働きたい",
  "大手・メガベンチャー案件に関心がある",
];

const fitNo = [
  "IT実務未経験・経験が浅く即戦力アピールが難しい",
  "とにかく案件数の多さを最優先したい（→レバテックフリーランス）",
  "マージンが完全公開されたサービスで選びたい（→PE-BANK）",
  "地方の常駐案件中心で探している",
];

const flow = [
  {
    step: "STEP1",
    title: "無料登録・面談予約",
    body: "公式サイトから経歴・希望単価・稼働条件を入力。在職中・現案件参画中でも次の案件探しとして登録できる。",
  },
  {
    step: "STEP2",
    title: "キャリア面談",
    body: "担当と面談（オンライン可）。技術スタック・希望単価・リモート可否・NG条件をすり合わせる。手取りベースの希望単価をここで明確に伝える。",
  },
  {
    step: "STEP3",
    title: "案件紹介・エントリー",
    body: "条件に合うエンド直案件の紹介を受け、応募する案件を決定。高単価・フルリモート案件を比較しながら選べる。",
  },
  {
    step: "STEP4",
    title: "商談（クライアント面談）",
    body: "クライアントとの商談に臨む。担当が事前準備・同席をサポートする場合がある。技術要件のすり合わせを行う。",
  },
  {
    step: "STEP5",
    title: "契約・参画・支払い",
    body: "条件合意後に業務委託契約を締結し参画。支払いは月末締め・翌月15日のサイクル。参画後も単価交渉・次案件の相談を受けられる。",
  },
];

const faqs = [
  {
    q: "TechReachの運営会社はどこですか？",
    a: "IT・WEB業界専門で15年以上の実績がある株式会社アールストーンが運営しています。親会社のOrchestra Holdings（オーケストラホールディングス）は東証プライム上場企業です。",
  },
  {
    q: "支払いサイトはどれくらいですか？",
    a: "月末締め・翌月15日支払いとされ、業界最速クラスという二次情報があります。支払いサイクルが早いと資金繰りが読みやすく、独立直後のキャッシュフローの不安を抑えやすいのがメリットです。最新の条件は契約時に確認してください。",
  },
  {
    q: "高単価というのは本当ですか？",
    a: "大手・メガベンチャーからのエンド直（直契約）案件が中心で、余分な中間マージンが抑えられ高単価という公式説明があります。月60万円以上の案件が多く、90万円超の高単価案件もあるという二次情報がありますが、実際の単価は個人のスキル・経験で変動します。",
  },
  {
    q: "マージン（手数料）は何%ですか？",
    a: "マージンは非公表です（確認不可）。提示される単価が手取りベースか、契約形態が準委任か請負かを面談時に必ず確認してください。マージンを公開しているPE-BANKと比較すると、相場感をつかみやすくなります。",
  },
  {
    q: "フルリモート案件はありますか？",
    a: "フルリモート案件1,000件以上という二次情報があります（時点要確認）。リモートで働きたい人に向きますが、案件ごとに稼働条件は異なるため、リモート希望は面談で明示してください。",
  },
  {
    q: "未経験でも案件を紹介してもらえますか？",
    a: "業務委託案件は即戦力前提で、高単価・エンド直ゆえに求められるスキル水準も高めです。実務経験が浅い場合は、まず正社員で経験を積んでから独立する方が現実的です。安定雇用での経験積みは正社員転職のレバテックキャリア（/review/levtech-career/）が向いています。",
  },
  {
    q: "登録は無料ですか？",
    a: "フリーランス側の登録・利用は無料です。費用は案件を発注する企業側が負担する仕組みです。",
  },
];

const related = [
  { name: "レバテックフリーランスの評判（案件量）", href: "/review/levtech-freelance/" },
  { name: "PE-BANKの評判（マージン公開）", href: "/review/pe-bank/" },
  { name: "ITプロパートナーズの評判（週2-3日）", href: "/review/itpropartners/" },
  { name: "フリーランスエージェント比較", href: "/compare/freelance-agents/" },
  { name: "業務委託という働き方の基礎", href: "/employment/contractor/" },
  { name: "フリーランスという働き方の基礎", href: "/employment/freelance/" },
];

export default function TechReachReview() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url={URL} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "レビュー", href: "/#ranking" },
          { name: "TechReach" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          TechReach（テックリーチ）の評判・口コミ【30代・40代エンジニア向け】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ エンド直の高単価・支払いの速さを口コミの傾向と公開情報で検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          TechReach（テックリーチ）は、株式会社アールストーン（親会社は東証プライム上場のOrchestra Holdings）が運営する、IT・Web系エンジニア向けの<span className="font-bold">業務委託（フリーランス）案件</span>紹介エージェントです。大手・メガベンチャーからのエンド直（直契約）高単価案件と、翌月15日の支払いサイトが特徴です。本記事では評判・口コミを口コミプラットフォームの傾向と公表情報に基づき、30代・40代エンジニアの視点で整理します。架空の体験談は掲載せず、出典のある情報のみを扱います。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "TechReach公式（株式会社アールストーン）",
            "キャリアスイッチ通信",
            "フリーランスの攻略本",
            "複数フリーランス系メディア集計値",
          ]}
        />

        {/* 結論サマリ */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：こんな人におすすめ</h2>
            <p className="text-sm text-blue-900 mb-3">
              <span className="font-bold">総合評価：エンド直の高単価とキャッシュフローの良さを両取りしたい経験者向け</span>。一言でいえば「高単価案件を、支払いの速さとフルリモートで取りに行きたいIT実務経験者」向けのフリーランスエージェントです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・大手・メガベンチャーのエンド直案件中心で高単価を狙いやすい。</li>
              <li>・月末締め・翌月15日支払いと業界最速クラス（二次情報）。フルリモート案件も豊富。</li>
              <li>・一方で実務経験が前提・マージン非公表。案件量重視はレバテックフリーランス併用が現実的。</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav aria-label="目次" className="mb-10 border border-slate-200 rounded-xl p-5 bg-white">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-petrol-deep">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 基本データ */}
        <section id="basic" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ表（2026年6月時点）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {basicData.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">
                      {label}
                    </th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            ※運営会社・親会社の上場区分は公式情報、案件数・支払いサイト・単価水準は公式説明＋二次情報（時点要確認）です。マージンは非公表で確認不可です。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">TechReachの特徴・強み</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. エンド直の高単価案件</h3>
              <p className="text-sm text-petrol-deep">
                大手・メガベンチャーからのエンド直（直契約）案件が中心で、余分な中間マージンが抑えられ高単価になりやすいのが特徴です。月60万円以上の案件が多く、90万円超の高単価案件もあるという二次情報があります。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 支払いサイトが翌月15日で早い</h3>
              <p className="text-sm text-petrol-deep">
                月末締め・翌月15日支払いとされ、業界最速クラスという二次情報があります。支払いサイクルが早いと資金繰りが読みやすく、独立直後でもキャッシュフローの不安を抑えやすいのが利点です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. フルリモート案件が豊富</h3>
              <p className="text-sm text-petrol-deep">
                フルリモート案件1,000件以上という二次情報があり、通勤負担を抑えて参画しやすい構造です。リモート前提で働き方を選びたいミドル層に向きます。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 上場グループの安定基盤</h3>
              <p className="text-sm text-petrol-deep">
                運営の株式会社アールストーンはIT・WEB業界専門で15年以上の実績があり、親会社のOrchestra Holdingsは東証プライム上場です。大手・メガベンチャーとのパイプが案件の質につながっています。
              </p>
            </div>
          </div>
        </section>

        {/* 良い評判 */}
        <section id="good" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">良い評判の傾向（出典付き）</h2>
          <p className="text-sm text-slate-600 mb-4">
            以下は口コミプラットフォーム上の声を傾向としてまとめたものです（原文転載・スコア転載ではありません）。
          </p>
          <div className="space-y-4">
            {goodReviews.map((r, i) => (
              <div key={i} className="border border-green-200 rounded-lg p-5">
                <h3 className="font-bold text-green-700 mb-2 text-sm">◎ {r.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 悪い評判 */}
        <section id="bad" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">悪い評判の傾向と対処法</h2>
          <p className="text-sm text-slate-600 mb-4">
            公平性のため、ネガティブな傾向の声と、それぞれへの現実的な対処法もまとめます。
          </p>
          <div className="space-y-4">
            {badReviews.map((r, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-red-600 mb-2 text-sm">△ {r.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">{r.body}</p>
                <div className="bg-amber-50 border border-amber-200 rounded p-3">
                  <p className="text-xs text-amber-800 leading-relaxed">
                    <span className="font-bold">対処法：</span>
                    {r.cope}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 単価・マージン・支払い */}
        <section id="margin" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">単価・マージン・支払いサイトの考え方</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              TechReachの魅力は「エンド直の高単価」と「翌月15日という支払いの速さ」の両立です。一方で<span className="font-bold">マージン（手数料）は非公表</span>です（確認不可）。エンド直は中間マージンが抑えられる構造ですが、エージェントの手数料そのものが公開されているわけではない点には注意が必要です。
            </p>
            <p>
              実務上は、提示される単価が「自分が受け取る単価（手取りベース）」であることが多いため、面談時に①提示単価が手取りか②契約形態（準委任／請負）③支払いサイト・リモート可否、の3点を確認すれば判断できます。マージンを完全公開している
              <Link href="/review/pe-bank/" className="text-petrol hover:underline">PE-BANK</Link>
              の手数料（8〜12%）と提示単価を並べて比較すると、相場感をつかみやすくなります。
            </p>
            <p>
              支払いサイトの速さは、独立直後やキャッシュフローに余裕がない時期ほど効いてきます。30代・40代で家族やローンがある場合、単価の高さだけでなく<span className="font-bold">入金タイミング</span>と<span className="font-bold">案件が途切れたときの備え</span>も重要です。報酬保障型の
              <Link href="/review/midworks/" className="text-petrol hover:underline">Midworks</Link>
              などと比較し、自分のリスク許容度に合うサービスを選ぶとよいでしょう。
            </p>
          </div>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            30代・40代エンジニアが使う場合の戦略
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              当サイトはミドルエンジニアのキャリアを扱う立場から、年代別の使い方を整理します。TechReachはエンド直の高単価と支払いの速さが武器のため、即戦力の経験者が単価を取りに行く30代・40代と相性が良いサービスです。
            </p>
            <p>
              <span className="font-bold text-slate-700">30代の場合：</span>
              スキルが市場で評価されやすく、エンド直の高単価で独立効果を最大化しやすい年代です。支払いの速さでキャッシュフローを安定させつつ、最初の数案件は安全側に倒して実績を積むのが堅実です。案件量を補うため、レバテックフリーランスとの併用も有効です。
            </p>
            <p>
              <span className="font-bold text-slate-700">40代の場合：</span>
              技術力に加えてマネジメント・アーキテクト経験を高単価に反映させやすい年代です。フルリモート案件を軸にすれば、常駐型で年齢を気にされる懸念を避けつつ選択肢を確保できます。家族構成次第では、単価最大化と<span className="font-bold">入金の速さ・安定</span>のバランスを取る判断が合理的です。
            </p>
            <p>
              経産省「IT人材需給に関する調査」（2019年公表の試算）では2030年に最大約79万人のIT人材不足が見込まれており、経験あるミドル層への需要は底堅いと考えられます。「いつでも正社員に戻れる状態」を保っておくと安心です。安定雇用を希望する場合は、正社員転職の
              <Link href="/review/levtech-career/" className="text-petrol hover:underline">レバテックキャリア</Link>
              も検討してください。
            </p>
          </div>
        </section>

        {/* 向き不向き */}
        <section id="fit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            向いている人／向いていない人チェックリスト
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-3 text-sm">向いている人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {fitYes.map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-600 shrink-0">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-700 mb-3 text-sm">向いていない人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {fitNo.map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-500 shrink-0">×</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 流れ */}
        <section id="flow" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">登録から参画までの流れ（5ステップ）</h2>
          <div className="space-y-3">
            {flow.map((f, i) => (
              <div key={i} className="flex gap-4 border border-slate-200 rounded-lg p-4">
                <div className="shrink-0 text-petrol-deep font-bold text-sm w-16">{f.step}</div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1">{f.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* フリーランス比較 */}
        <section id="compare" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フリーランス各社の使い分け</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            フリーランスエージェントは「何を重視するか」で選ぶと失敗しにくいです。TechReachは「エンド直・高単価・支払いの速さ」が強みで、案件量や透明性を重視するなら他社との併用が有効です。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {([
                  ["", "強み・向く人"],
                  ["TechReach（本記事）", "エンド直の高単価＋支払いが早い。キャッシュフローも重視する人。"],
                  ["レバテックフリーランス", "単価・案件量を最大化したい経験者。"],
                  ["PE-BANK", "マージンを完全公開。透明性と全国対応を重視する人。"],
                  ["ITプロパートナーズ", "週2〜3日・副業から独立準備したい人。"],
                ] as string[][]).map((row, i) => (
                  <tr key={i} className={i === 0 ? "bg-slate-100" : i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-3 py-3 border-b border-slate-200 font-medium text-slate-700">
                      {row[0]}
                    </td>
                    <td className="px-3 py-3 border-b border-slate-200 text-slate-600">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/review/levtech-freelance/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              レバテックフリーランス（案件量）の評判 →
            </Link>
            <Link href="/review/pe-bank/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              PE-BANK（マージン公開）の評判 →
            </Link>
            <Link href="/review/itpropartners/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              ITプロパートナーズ（週2-3日）の評判 →
            </Link>
            <Link href="/compare/freelance-agents/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              フリーランスエージェント比較 →
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800">
                  <span>Q. {faq.q}</span>
                  <span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span>
                </summary>
                <div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">TechReachに無料相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            エンド直の高単価案件を、支払いの速さとフルリモートで取りに行きませんか？
          </p>
          <a href="#" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            無料カウンセリングを予約する
          </a>
        </section>

        {/* 関連記事 */}
        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
