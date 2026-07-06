import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "クラウドリンク(現AIdea Career)の評判｜30代40代エンジニアの本音";
const DESCRIPTION =
  "クラウドリンク（2026年4月よりAIdea Career／アイデアキャリアに社名変更）の評判・口コミを30代40代エンジニア目線で検証。自社内開発100%によるSES脱出、年収アップ実績、連絡しつこい等の評判を出典付きで解説します。";
const URL = "/review/cloudlink/";

export const metadata: Metadata = {
  alternates: { canonical: "/review/cloudlink/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "結論サマリ（どんな人向けか）" },
  { id: "rename", label: "社名変更について（クラウドリンク→AIdea Career）" },
  { id: "basic", label: "基本データ表（2026年6月時点）" },
  { id: "strength", label: "特徴・強み（自社内開発100%）" },
  { id: "good", label: "良い評判の傾向" },
  { id: "bad", label: "悪い評判の傾向と対処法" },
  { id: "sesexit", label: "SES・客先常駐からの脱出という観点" },
  { id: "middle", label: "30代・40代エンジニアの活用戦略" },
  { id: "fit", label: "向いている人／向いていない人" },
  { id: "flow", label: "登録から内定までの5ステップ" },
  { id: "compare", label: "他社との比較・使い分け" },
  { id: "faq", label: "よくある質問" },
];

const basicData: [string, string][] = [
  ["運営会社", "株式会社Cloud Link（2017年設立）"],
  ["サービス名", "クラウドリンク ※2026年4月より「AIdea Career（アイデアキャリア）」へ社名変更"],
  ["サービス種別", "IT・Web特化の正社員転職エージェント"],
  ["最大の特徴", "自社内開発求人100%（SES・客先常駐からの脱却に特化）"],
  ["総求人数", "確認不可（公式LP未確認）"],
  ["年収アップ実績", "利用者の66.7%が平均58.3万円の年収アップ（二次・自社系データ）"],
  ["対象", "SES・客先常駐から社内SE・自社開発へ移りたいエンジニア"],
  ["料金", "求職者無料"],
];

const goodReviews = [
  {
    title: "自社内開発100%でSESから脱却できた",
    body: "IT・Web系の口コミプラットフォームでは、紹介求人が自社内開発に絞られているため、客先常駐（SES）から社内SE・自社開発へ働き方を変えられたという傾向の声が見られる。求人の方向性が明確で「SES脱出」という目的に合っていたという感想が複数確認できる。",
  },
  {
    title: "面接手配が迅速で在職中でも進めやすい",
    body: "面接の日程調整や手配が早く、在職中でもテンポよく選考を進められたという傾向の声がエンジニア向け口コミで見られる。",
  },
  {
    title: "IT専門コンサルが親身",
    body: "IT専門のコンサルタントが技術的な経歴の見せ方まで親身に相談に乗ってくれたという傾向の声が見られる。自社開発への転換という目的を共有しやすい点が評価されている。",
  },
];

const badReviews = [
  {
    title: "連絡がしつこいと感じる場合がある",
    body: "連絡の頻度が多く、しつこいと感じたという傾向の声が一部のエンジニア向け口コミで見られる。熱心さの裏返しでもあるが、ペースが合わないと負担に感じることがある。",
    cope: "初回の面談時に、希望する連絡手段・頻度・時間帯を具体的に伝えておくと調整してもらえる。返信が難しい時期はその旨を共有しておくと行き違いを防げる。",
  },
  {
    title: "中小規模で求人の網羅性は大手に劣る",
    body: "自社内開発に特化している分、求人の総数・網羅性は大手総合エージェントに劣るという傾向の声が見られる。総求人数は公式LPで未確認（確認不可）。",
    cope: "「自社開発への転換」という目的に絞って使い、求人の幅は大手と併用して補うのが現実的。年収を一段上げたい場合は、高年収IT求人を扱う正社員転職のレバテックキャリア（/review/levtech/）との併用が有効。",
  },
  {
    title: "年収アップ実績は自社系データである点に注意",
    body: "「利用者の66.7%が平均58.3万円の年収アップ」という数値は二次・自社系のデータで、第三者の公的統計ではない。あくまで参考値として捉える必要がある。",
    cope: "数値は参考値と理解し、実際の上がり幅は自分の経験・スキル・応募ポジションで個別に確認する。年収相場は当サイトの年収関連記事も参照する。",
  },
];

const fitYes = [
  "SES・客先常駐で疲弊し、社内SE・自社開発へ移りたい30代・40代",
  "年収最大化より労働環境・働き方の改善を主目的にしている",
  "自社内開発に絞った求人だけを効率的に見たい",
  "IT専門のコンサルに技術経歴を相談したい",
  "大手と併用して目的特化で使える",
];

const fitNo = [
  "とにかく求人の網羅性・数を最優先したい（→大手併用）",
  "年収を大きく上げることが最優先（→レバテックキャリア併用）",
  "フリーランス・業務委託で働きたい（→フリーランス系）",
  "連絡頻度が多いのが苦手で調整も避けたい",
];

const flow = [
  {
    step: "STEP1",
    title: "無料登録（数分）",
    body: "公式サイトから氏名・経歴・希望条件を入力。在職中でも登録でき、SES脱出・自社開発への転換という目的を明記しておくと話が早い。",
  },
  {
    step: "STEP2",
    title: "キャリアカウンセリング",
    body: "IT専門コンサルと面談（オンライン可）。現職（SES・客先常駐）の状況、希望する働き方、技術スタック、NG条件をすり合わせる。連絡手段・頻度の希望もここで伝える。",
  },
  {
    step: "STEP3",
    title: "自社内開発求人の紹介・応募",
    body: "自社内開発に絞った求人の紹介を受け、応募先を決定。職務経歴書の添削を受けてから応募するとよい。",
  },
  {
    step: "STEP4",
    title: "面接対策・選考",
    body: "面接対策を受けて選考に臨む。面接手配が迅速なため、在職中でもテンポよく進めやすい。",
  },
  {
    step: "STEP5",
    title: "内定・条件確認・入社",
    body: "内定後は条件を確認し、現職の退職交渉の相談も可能。自社開発環境への入社で働き方の転換を完了する。",
  },
];

const faqs = [
  {
    q: "クラウドリンクとAIdea Career（アイデアキャリア）は同じですか？",
    a: "同じサービスです。株式会社Cloud Linkが運営するIT・Web特化の転職エージェントで、2026年4月より「AIdea Career（アイデアキャリア）」へ社名変更されました。旧名「クラウドリンク」で検索される方も多いため、本記事では新旧を併記しています。サービスの中身（自社内開発100%の求人紹介）は継続しています。",
  },
  {
    q: "本当に自社内開発の求人だけですか？",
    a: "自社内開発求人100%を最大の特徴として掲げているのが、このサービスの方向性です。客先常駐（SES）から社内SE・自社開発へ移りたいエンジニアに特化しています。具体的な求人内容は、面談で自分の希望（技術・年収・勤務地）と照らして確認してください。",
  },
  {
    q: "SESから抜け出したいのですが使えますか？",
    a: "SES・客先常駐からの脱却を主目的とする方に特化したサービスです。自社内開発に絞った求人を紹介してもらえるため、働き方の転換（社内SE化）を目指す30代・40代に向いています。SES脱出の考え方は当サイトの/industry/ses-exit/もあわせてご覧ください。",
  },
  {
    q: "連絡がしつこいという評判は本当ですか？",
    a: "連絡頻度が多くしつこいと感じたという傾向の声が一部にあります。熱心さの裏返しでもありますが、ペースが合わない場合は初回面談で希望の連絡手段・頻度・時間帯を伝えておくと調整してもらえます。",
  },
  {
    q: "年収はどのくらい上がりますか？",
    a: "「利用者の66.7%が平均58.3万円の年収アップ」という二次・自社系のデータがあります。ただし第三者の公的統計ではないため参考値として捉えてください。このサービスは年収最大化より労働環境の改善が主目的の層に向いており、年収を大きく上げたい場合は高年収IT求人を扱うレバテックキャリア（/review/levtech/）の併用が有効です。",
  },
  {
    q: "求人数は多いですか？",
    a: "総求人数は公式LPで未確認のため確認不可です。自社内開発に特化している分、求人の網羅性は大手総合エージェントに劣る傾向があります。目的特化で使い、求人の幅は大手と併用して補うのが現実的です。",
  },
  {
    q: "登録は無料ですか？",
    a: "求職者は無料です。求人紹介・書類添削・面接対策まで費用はかかりません。費用は採用企業側が負担する仕組みです。",
  },
];

const related = [
  { name: "高年収を狙うならレバテックキャリア", href: "/review/levtech/" },
  { name: "SES・客先常駐から抜け出す方法", href: "/industry/ses-exit/" },
  { name: "エージェント10社の比較", href: "/compare/agents/" },
  { name: "40代エンジニアの転職リアル", href: "/knowledge/40s-reality/" },
  { name: "複数エージェント併用のコツ", href: "/knowledge/multiple-agents/" },
  { name: "後悔しないエージェントの選び方", href: "/knowledge/how-to-choose/" },
];

export default function CloudLinkReview() {
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
          { name: "クラウドリンク（現AIdea Career）" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          クラウドリンク（現AIdea Career）の評判・口コミ【30代・40代エンジニア向け】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ 自社内開発100%・SES脱出特化の実力を口コミの傾向と公開データで検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          クラウドリンク（株式会社Cloud Link運営）は、<span className="font-bold">自社内開発求人100%</span>を最大の特徴とするIT・Web特化の転職エージェントです。<span className="font-bold">2026年4月より「AIdea Career（アイデアキャリア）」へ社名変更</span>されました。本記事では評判・口コミを実際の口コミプラットフォームの傾向と公開データに基づいて、30代・40代エンジニアの視点で整理します。架空の体験談は掲載せず、出典のある情報のみを扱います。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "クラウドリンク／AIdea Career公式系の公表値",
            "IT・Web系口コミプラットフォーム",
            "複数転職メディア集計値",
          ]}
        />

        {/* 結論サマリ */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：こんな人におすすめ</h2>
            <p className="text-sm text-blue-900 mb-3">
              <span className="font-bold">総合評価：SES・客先常駐から自社開発へ働き方を変えたいミドルに特化</span>。一言でいえば「年収最大化より、SESを抜けて社内SE・自社開発で働きたい経験者」向けのエージェントです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・自社内開発求人100%で、SES・客先常駐からの脱却という目的に特化。</li>
              <li>・利用者の66.7%が平均58.3万円の年収アップ（二次・自社系データ＝参考値）。</li>
              <li>・一方で求人の網羅性は大手に劣る。年収最大化なら高年収IT求人のレバテックキャリア併用が有効。</li>
            </ul>
          </div>
        </section>

        {/* 社名変更 */}
        <section id="rename" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            社名変更について（クラウドリンク → AIdea Career）
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="text-sm text-amber-900 leading-relaxed mb-2">
              本サービスは、<span className="font-bold">2026年4月より「クラウドリンク」から「AIdea Career（アイデアキャリア）」へ社名（サービス名）変更</span>されました。運営は株式会社Cloud Link（2017年設立）です。
            </p>
            <p className="text-sm text-amber-900 leading-relaxed">
              旧名「クラウドリンク」での検索・認知が依然として多いため、本記事では<span className="font-bold">新旧を併記</span>しています。社名変更後もサービスの根幹である「自社内開発求人100%」「SES・客先常駐からの脱却支援」という方向性は継続しています。検索の際は新旧どちらの名称でも同じサービスを指す点にご注意ください。
            </p>
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
            ※総求人数は公式LP未確認（確認不可）。年収アップ実績（66.7%が平均58.3万円UP）は二次・自社系データで参考値です。サービス名は2026年4月よりAIdea Careerに変更されています。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">特徴・強み（自社内開発100%）</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 自社内開発求人100%でSES脱却に特化</h3>
              <p className="text-sm text-petrol-deep">
                紹介求人を自社内開発に絞っているのが最大の特徴です。客先常駐（SES）から社内SE・自社開発へ働き方を変えたいエンジニアにとって、求人の方向性が最初から明確で、ミスマッチが起きにくい設計です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 面接手配が迅速</h3>
              <p className="text-sm text-petrol-deep">
                面接の日程調整・手配が早く、在職中でもテンポよく選考を進めやすいという傾向の声があります。働きながらSES脱出を目指す層に向いています。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. IT専門コンサルが親身</h3>
              <p className="text-sm text-petrol-deep">
                IT専門のコンサルタントが、技術的な経歴の見せ方や自社開発への転換という目的を共有しながら親身に相談に乗ってくれる点が評価されています。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 労働環境改善という明確な目的に合う</h3>
              <p className="text-sm text-petrol-deep">
                年収最大化より「労働環境を変える」ことを主目的とする層に最適化されています。利用者の66.7%が平均58.3万円の年収アップ（二次・自社系＝参考値）という数値もあり、働き方の改善と一定の年収アップを両立しやすい設計です。
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

        {/* SES脱出 */}
        <section id="sesexit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SES・客先常駐からの脱出という観点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              このサービスの本質的な価値は、「SES・客先常駐からの脱却」という<span className="font-bold">目的に求人を絞り込んでいる</span>ことにあります。一般的な総合エージェントでは自社開発もSESも混在しますが、自社内開発100%を掲げることで、SESを抜けたい人が遠回りせずに済みます。
            </p>
            <p>
              SES・客先常駐で疲弊する典型的な理由は、案件ごとに環境が変わる・自社に居場所を感じにくい・技術選定に関われない、といった構造的なものです。社内SEや自社開発へ移ることで、これらの不満が解消されやすくなります。一方で、自社開発にも残業や開発文化の差はあるため、「自社開発＝必ず楽」ではない点は冷静に見る必要があります。
            </p>
            <p>
              SES脱出の進め方や注意点は、当サイトの
              <Link href="/industry/ses-exit/" className="text-petrol hover:underline">SES・客先常駐から抜け出す方法</Link>
              で体系的に整理しています。あわせて読むと、エージェント選びの判断がしやすくなります。
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
              当サイトはミドルエンジニアのキャリアを扱う立場から、クラウドリンク（現AIdea Career）を「SES・客先常駐で疲弊したミドルの働き方転換」に特化したサービスと位置づけています。
            </p>
            <p>
              <span className="font-bold text-slate-700">30代の場合：</span>
              SESでの経験を活かしつつ、自社開発でスキルを深めるラストチャンスになりやすい年代です。年齢が上がるほど自社開発への未経験転換は難しくなる傾向があるため、社内SE・自社開発への移行を考えているなら早めに動くのが有利です。年収も一段上げたい場合は、高年収IT求人を扱う正社員転職のレバテックキャリアを併用すると選択肢が広がります。
            </p>
            <p>
              <span className="font-bold text-slate-700">40代の場合：</span>
              客先常駐の負担（移動・環境変化）が体力的にこたえる年代でもあり、社内SE化による労働環境の安定は大きな価値になります。マネジメントや特定領域の専門性を武器に、自社開発の中核ポジションを狙う戦略が現実的です。求人の網羅性は中小規模ゆえ大手に劣るため、大手との併用を前提にすると失敗しにくくなります。
            </p>
            <p>
              年収を大きく上げることが最優先なら、高年収レンジに強い
              <Link href="/review/levtech/" className="text-petrol hover:underline">レバテックキャリア</Link>
              を主軸にし、本サービスは「自社開発求人の補完」として併用するのがおすすめです。エージェントの選び方や併用のコツは
              <Link href="/knowledge/how-to-choose/" className="text-petrol hover:underline">後悔しないエージェントの選び方</Link>
              、
              <Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">複数エージェント併用のコツ</Link>
              も参考にしてください。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">登録から内定までの流れ（5ステップ）</h2>
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

        {/* 比較 */}
        <section id="compare" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">他社との比較・使い分け</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            クラウドリンク（現AIdea Career）は「自社内開発100%・SES脱出特化」が強みですが、求人の網羅性は中小規模ゆえ大手に劣ります。目的特化で使い、求人の幅や年収レンジは大手との併用で補うのが定石です。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/review/levtech/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              高年収IT求人のレバテックキャリア →
            </Link>
            <Link href="/compare/agents/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              エージェント10社の比較 →
            </Link>
            <Link href="/industry/ses-exit/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              SES・客先常駐から抜け出す方法 →
            </Link>
            <Link href="/knowledge/multiple-agents/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              複数エージェント併用のコツ →
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
          <h2 className="text-xl font-bold mb-3">クラウドリンク（現AIdea Career）に無料相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            まずは無料カウンセリングで、自社内開発への転換が可能か確認してみませんか？
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
