import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "PE-BANKの評判・口コミ｜30代40代フリーランスエンジニア";
const DESCRIPTION =
  "PE-BANK（株式会社PE-BANK運営）の評判・口コミを30代40代エンジニア目線で検証。マージン完全公開（8〜12%）、共済会の保障、全国12拠点、向き不向きを公式情報と出典付きで解説します。";
const URL = "/review/pe-bank/";

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
  { id: "margin", label: "マージン公開と共済会の考え方" },
  { id: "middle", label: "30代・40代エンジニアの活用戦略" },
  { id: "fit", label: "向いている人／向いていない人" },
  { id: "flow", label: "登録から参画までの5ステップ" },
  { id: "compare", label: "フリーランス各社の使い分け" },
  { id: "faq", label: "よくある質問" },
];

const basicData: [string, string][] = [
  ["運営会社", "株式会社PE-BANK（前身は1989年設立の首都圏コンピュータ技術者協同組合）"],
  ["サービス種別", "フリーランス（業務委託）向け案件紹介エージェント"],
  ["対象", "ITフリーランスエンジニア（実務経験者）"],
  ["マージン（手数料）", "完全公開。契約月数に応じ12%（1〜12ヶ月）→10%（13〜24ヶ月）→8%（25ヶ月以上）"],
  ["特徴", "共同受注の仕組みで発注金額・手数料を公開。30年以上のIT技術者支援"],
  ["福利厚生", "共済会（月2,500〜12,850円）：所得補償・生命/がん共済・連鎖倒産防止・資格取得支援等"],
  ["対応エリア", "全国12拠点（東京・大阪・愛知・北海道・東北・岡山・広島・九州 等）"],
  ["料金", "フリーランス側は無料（手数料は上記のとおり公開）"],
];

const goodReviews = [
  {
    title: "マージン（手数料）が完全公開で手取りが読める",
    body: "フリーランススタートやイーデス等の口コミ系では、PE-BANKが手数料を公開している点を評価する傾向の声が見られる。発注金額と手数料が見える共同受注の仕組みのため、自分の取り分を把握しやすいという感想が多い。",
  },
  {
    title: "長く働くほど手数料が下がる",
    body: "手数料は契約の合計月数に応じて12%→10%→8%と下がる仕組みが公式に公開されている。長期で同一エージェントを使うほど取り分が増える設計で、腰を据えて活動したい人に向くという傾向の声がある。",
  },
  {
    title: "共済会の保障と全国拠点で安心感がある",
    body: "公式・二次情報では、共済会による所得補償・生命/がん共済・連鎖倒産防止制度などが利用でき、独立後の保障面を補えるという評価がある。全国12拠点で地方でも案件を探しやすい点も強みとされる。",
  },
];

const badReviews = [
  {
    title: "最新技術・Web系の高単価案件は他社が強いことがある",
    body: "歴史が長くSIer系・常駐系の案件に強い一方、モダンなWeb系や最先端技術の案件量では他社（レバテックフリーランス等）に見劣りすると感じたという傾向の声がある。",
    cope: "モダンな技術・高単価を狙う場合は、案件量の多いレバテックフリーランスを併用する。PE-BANKは透明性と保障、長期安定の軸として使い分けると効果的。",
  },
  {
    title: "共済会は任意だが費用がかかる",
    body: "共済会は月2,500〜12,850円の費用がかかるため、必要性を感じない人にはコストに見えるという声がある。",
    cope: "共済会は加入内容を選べる。所得補償や連鎖倒産防止など、自分に必要な保障だけを見極めて加入を判断する。家計と照らして要否を決めるとよい。",
  },
  {
    title: "実務経験が前提で未経験には案件が出にくい",
    body: "業務委託案件のため即戦力前提で、実務経験が浅い場合は紹介される案件が限られたという傾向の声がある。",
    cope: "経験が浅いうちは無理に独立せず、まず正社員で経験を積むのが現実的。安定雇用で経験を積みたい場合は正社員転職のレバテックキャリア（/review/levtech-career/）を検討するとよい。",
  },
];

const fitYes = [
  "IT実務経験のある30代・40代フリーランスエンジニア",
  "手数料（マージン）の透明性を最重視したい",
  "長期で腰を据えて活動し、手数料の逓減メリットを得たい",
  "共済会の保障で独立後の不安を補いたい",
  "地方在住で全国拠点のサポートを受けたい",
];

const fitNo = [
  "IT実務未経験・経験が浅く即戦力アピールが難しい",
  "モダンなWeb系・最先端技術の案件量を最優先したい",
  "短期で単価を最大化することだけを狙いたい",
  "正社員並みの報酬保障を最優先したい（→Midworks）",
];

const flow = [
  {
    step: "STEP1",
    title: "無料登録・面談予約",
    body: "公式サイトから経歴・希望単価・稼働条件を入力。在職中・現案件参画中でも次の案件探しとして登録できる。",
  },
  {
    step: "STEP2",
    title: "面談・条件すり合わせ",
    body: "担当と面談。技術スタック・希望単価・エリア・稼働条件をすり合わせる。手数料が公開されているため、手取りベースの試算をしやすい。",
  },
  {
    step: "STEP3",
    title: "案件紹介・エントリー",
    body: "条件に合う案件の紹介を受け、応募する案件を決定。発注金額・手数料が見える共同受注の仕組みで比較できる。",
  },
  {
    step: "STEP4",
    title: "商談（クライアント面談）",
    body: "クライアントとの商談に臨む。担当が事前準備・同席をサポートする場合がある。技術要件のすり合わせを行う。",
  },
  {
    step: "STEP5",
    title: "契約・参画・共済会の検討",
    body: "条件合意後に業務委託契約を締結し参画。必要に応じて共済会への加入を検討し、長期継続による手数料の逓減も意識して活動する。",
  },
];

const faqs = [
  {
    q: "PE-BANKの運営会社はどこですか？",
    a: "株式会社PE-BANKが運営しています。前身は1989年設立の首都圏コンピュータ技術者協同組合で、30年以上にわたりIT技術者を支援してきた歴史あるサービスです。",
  },
  {
    q: "マージン（手数料）は何%ですか？",
    a: "PE-BANKは手数料を完全公開しています。契約の合計月数に応じて、12%（1〜12ヶ月）、10%（13〜24ヶ月）、8%（25ヶ月以上）と、長く働くほど手数料が下がる仕組みです。多くのフリーランスエージェントがマージン非公表の中で、透明性が大きな特徴です。",
  },
  {
    q: "共済会とは何ですか？費用はかかりますか？",
    a: "共済会は月2,500〜12,850円で加入できる保障制度で、所得補償手当て、生命共済、がん共済、入院日額手当て、連鎖倒産防止制度、事業資金・起業支援貸付、資格取得支援、慶弔金制度などが含まれます。任意加入のため、自分に必要な保障を見極めて判断できます。",
  },
  {
    q: "地方在住でも使えますか？",
    a: "全国12拠点（東京・大阪・愛知・北海道・東北・岡山・広島・九州 等）があり、地方在住でも地元で案件を探しやすいのが強みです。多くのフリーランスエージェントが首都圏中心の中で、全国対応は差別化要素です。",
  },
  {
    q: "未経験でも案件を紹介してもらえますか？",
    a: "業務委託案件は即戦力前提のため、IT実務経験が浅い場合は紹介できる案件が限られます。経験が浅い方は、まず正社員で実務経験を積んでから独立する方が現実的です。安定雇用での経験積みは正社員転職のレバテックキャリア（/review/levtech-career/）が向いています。",
  },
  {
    q: "登録は無料ですか？",
    a: "フリーランス側の登録・利用は無料です。費用にあたる手数料は上記のとおり公開されており（8〜12%）、共済会のみ任意で別途費用がかかります。",
  },
  {
    q: "30代・40代でも使えますか？",
    a: "歴史が長く常駐系・SIer系に強いため、実務経験のある30代・40代と相性が良いサービスです。手数料の逓減と共済会の保障は、腰を据えて長く活動したいミドル層に向いています。モダンな技術・高単価を狙う場合はレバテックフリーランスの併用も検討してください。",
  },
];

const related = [
  { name: "ギークスジョブの評判（リモート・福利厚生）", href: "/review/geechs/" },
  { name: "レバテックフリーランスの評判（高単価）", href: "/review/levtech-freelance/" },
  { name: "Midworksの評判（正社員並み保障）", href: "/review/midworks/" },
  { name: "フリーランスエージェント比較", href: "/compare/freelance-agents/" },
  { name: "業務委託という働き方の基礎", href: "/employment/contractor/" },
  { name: "フリーランスという働き方の基礎", href: "/employment/freelance/" },
];

export default function PeBankReview() {
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
          { name: "PE-BANK" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          PE-BANKの評判・口コミ【30代・40代エンジニア向け】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ マージン完全公開のフリーランスエージェントの実力を口コミの傾向と公開情報で検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          PE-BANKは、株式会社PE-BANK（前身は1989年設立の協同組合）が運営する、ITフリーランスエンジニア向けの<span className="font-bold">業務委託（フリーランス）案件</span>紹介エージェントです。<span className="font-bold">手数料（マージン）を完全公開</span>している点と、共済会の保障、全国12拠点が特徴です。本記事では評判・口コミを口コミプラットフォームの傾向と公表情報に基づき、30代・40代エンジニアの視点で整理します。架空の体験談は掲載せず、出典のある情報のみを扱います。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "株式会社PE-BANK公式（契約と手数料ページ等）",
            "フリーランススタート",
            "イーデス転職",
            "複数フリーランス系メディア集計値",
          ]}
        />

        {/* 結論サマリ */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：こんな人におすすめ</h2>
            <p className="text-sm text-blue-900 mb-3">
              <span className="font-bold">総合評価：手数料の透明性と保障・全国対応で、腰を据えて長く独立したい経験者向け</span>。一言でいえば「手取りの見える化と安定を重視するIT実務経験者」向けのフリーランスエージェントです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・手数料を完全公開（12%→10%→8%）。長く働くほど取り分が増える設計。</li>
              <li>・共済会の保障と全国12拠点で、独立後・地方在住の不安を補える。</li>
              <li>・一方でモダンなWeb系・高単価の案件量は他社が強いことも。レバテックフリーランス併用が現実的。</li>
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
            ※運営会社・手数料率・共済会・拠点数は公式情報に基づきます。手数料率・共済会費用は最新の公式情報で確認してください。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">PE-BANKの特徴・強み</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 手数料（マージン）を完全公開</h3>
              <p className="text-sm text-petrol-deep">
                多くのフリーランスエージェントがマージン非公表の中、PE-BANKは手数料を公開しています。共同受注の仕組みで発注金額・手数料が見えるため、自分の取り分（手取り）を把握しやすいのが最大の特徴です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 長く働くほど手数料が下がる</h3>
              <p className="text-sm text-petrol-deep">
                手数料は契約の合計月数に応じて12%（1〜12ヶ月）→10%（13〜24ヶ月）→8%（25ヶ月以上）と逓減します。長期で活動するほど取り分が増える設計で、腰を据えて続けたい人に有利です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 共済会の保障</h3>
              <p className="text-sm text-petrol-deep">
                共済会（月2,500〜12,850円）で、所得補償・生命/がん共済・入院日額手当て・連鎖倒産防止制度・事業資金/起業支援貸付・資格取得支援・慶弔金制度などが利用できます。独立後に手薄になりがちな保障面を補えます。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 全国12拠点・30年以上の実績</h3>
              <p className="text-sm text-petrol-deep">
                東京・大阪・愛知だけでなく北海道・東北・岡山・広島・九州など全国12拠点があり、地方在住でも案件を探しやすいのが強みです。30年以上のIT技術者支援という歴史も安心材料です。
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

        {/* マージン・共済会 */}
        <section id="margin" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">マージン公開と共済会の考え方</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              フリーランス案件選びで最も気になる「マージン（手数料）」を、PE-BANKは<span className="font-bold">完全公開</span>しています。12%→10%→8%と長期で逓減する仕組みのため、提示単価から自分の取り分を試算しやすいのが大きな利点です。マージン非公表が一般的な業界の中で、これは判断材料としてわかりやすい強みといえます。
            </p>
            <p>
              一方で、手数料の低さだけで損得は決まりません。実務上は①公開手数料を踏まえた手取り②案件の単価水準（モダンな高単価案件は他社が強いことも）③共済会の保障価値、を総合的に見るのが妥当です。マージン非公表の
              <Link href="/review/geechs/" className="text-petrol hover:underline">ギークスジョブ</Link>
              や
              <Link href="/review/levtech-freelance/" className="text-petrol hover:underline">レバテックフリーランス</Link>
              の提示単価と並べて比較すると、PE-BANKの透明性のメリットが判断しやすくなります。
            </p>
            <p>
              30代・40代で家族やローンがある場合、共済会の所得補償・連鎖倒産防止などは<span className="font-bold">案件が途切れたときの備え</span>として検討価値があります。ただし任意加入で費用がかかるため、必要な保障だけを見極めて加入を判断しましょう。報酬保障型の
              <Link href="/review/midworks/" className="text-petrol hover:underline">Midworks</Link>
              と比較し、自分のリスク許容度に合う形を選ぶとよいでしょう。
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
              当サイトはミドルエンジニアのキャリアを扱う立場から、年代別の使い方を整理します。PE-BANKは透明性・保障・全国対応・長期逓減が武器のため、腰を据えて長く独立を続けたい30代・40代と相性が良いサービスです。
            </p>
            <p>
              <span className="font-bold text-slate-700">30代の場合：</span>
              独立による単価アップの効果が大きい年代です。手数料が見えるため手取りの計画を立てやすく、長期継続で手数料が下がるメリットも享受できます。最新技術・高単価を狙う案件はレバテックフリーランスを併用し、安定軸としてPE-BANKを使うのが堅実です。
            </p>
            <p>
              <span className="font-bold text-slate-700">40代の場合：</span>
              常駐系・SIer系に強い特性は、SES・受託で実績を積んだミドルと相性が良いです。共済会の保障や全国拠点は、家族構成や地方在住の事情がある層に向きます。単価最大化より<span className="font-bold">収入の安定と保障</span>を優先する判断も合理的です。
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
            フリーランスエージェントは「何を重視するか」で選ぶと失敗しにくいです。PE-BANKは「透明性・保障・全国対応」が強みで、単価最大化や案件量を重視するなら他社との併用が有効です。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {([
                  ["", "強み・向く人"],
                  ["PE-BANK（本記事）", "手数料公開・共済会・全国対応。透明性と安定を重視する人。"],
                  ["レバテックフリーランス", "単価・案件量を最大化したい経験者。"],
                  ["ギークスジョブ", "リモート中心＋福利厚生で柔軟に働きたい人。"],
                  ["Midworks", "正社員並みの報酬保障で安定したい慎重派。"],
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
              レバテックフリーランス（高単価）の評判 →
            </Link>
            <Link href="/review/geechs/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              ギークスジョブ（リモート）の評判 →
            </Link>
            <Link href="/review/midworks/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              Midworks（保障で安定）の評判 →
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
          <h2 className="text-xl font-bold mb-3">PE-BANKに無料相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            手数料の透明性と保障を重視する方は、PE-BANKに相談してみませんか？
          </p>
          <a href="#" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            無料で相談する
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
