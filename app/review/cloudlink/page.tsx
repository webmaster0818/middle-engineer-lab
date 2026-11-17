import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "クラウドリンク(現AIdea Career)の評判｜30代40代エンジニアの本音";
const DESCRIPTION =
  "クラウドリンク（2026年4月1日にAIdea Career株式会社へ社名変更）の評判・口コミを30代40代エンジニア目線で検証します。公式の公表値（平均年収 前職比 約126%など）、求人審査の仕組み、連絡がしつこい等の評判を出典を明記して解説します。";
const URL = "/review/cloudlink/";

export const metadata: Metadata = {
  alternates: { canonical: "/review/cloudlink/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "要点（どんな人向けか）" },
  { id: "rename", label: "社名変更について（クラウドリンク→AIdea Career）" },
  { id: "basic", label: "基本データ表（2026年11月17日確認）" },
  { id: "strength", label: "特徴・強み（審査を通過した求人のみ紹介）" },
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
  ["運営会社", "AIdea Career株式会社（旧：株式会社Cloud Link。2017年8月に大阪で設立し、2026年4月1日に社名変更）"],
  ["所在地", "東京本社：東京都港区六本木6-10-1 六本木ヒルズ森タワー37F（大阪・名古屋・福岡に支社）"],
  ["許可番号", "有料職業紹介事業 27-ユ-302290"],
  ["サービス名", "AIdea Career（アイデアキャリア）※旧称「クラウドリンク」"],
  ["サービス種別", "AI・IT/機電エンジニア専門の転職エージェント"],
  ["最大の特徴", "年収・休日数・労働環境等の審査を通過した求人のみを紹介（公式の案内）。以前紹介されていた「自社内開発求人100%」の表記は、2026年11月17日時点の公式サイトでは確認できませんでした"],
  ["総求人数", "総数は公式で明示されていません（サービスページの記載は「10,000社以上の企業ネットワーク」）"],
  ["公式の実績値", "平均年収 前職比 約126%（2019年9月〜2026年8月に同社経由で転職し、年収が上がった方の増加額から算出）／入社後定着率 約96%／内定まで平均約20日（いずれも同社公表値）"],
  ["対象", "AI・IT/機電系のエンジニア（対象年齢・年収帯の条件は公式で確認できず）"],
  ["料金", "求職者は無料（企業からの成功報酬で運営していると公式FAQに記載）"],
];

const goodReviews = [
  {
    title: "自社開発の求人でSESから脱却できた",
    body: "IT・Web系の口コミメディアでは、自社内開発の求人を紹介してもらい、客先常駐（SES）から社内SE・自社開発へ働き方を変えられたという傾向の声が見られます。「SES脱出」という目的に合っていたという感想が確認できます。",
  },
  {
    title: "面接手配が迅速で在職中でも進めやすい",
    body: "面接の日程調整や手配が早く、在職中でもテンポよく選考を進められたという傾向の声がエンジニア向け口コミで見られます。",
  },
  {
    title: "IT専門コンサルが親身",
    body: "IT専門のコンサルタントが技術的な経歴の見せ方まで親身に相談に乗ってくれたという傾向の声が見られます。自社開発への転換という目的を共有しやすい点が評価されています。",
  },
];

const badReviews = [
  {
    title: "連絡がしつこいと感じる場合がある",
    body: "連絡の頻度が多く、しつこいと感じたという傾向の声が一部のエンジニア向け口コミで見られます。熱心さの裏返しでもありますが、ペースが合わないと負担に感じることがあります。",
    cope: "初回の面談時に、希望する連絡手段・頻度・時間帯を具体的に伝えておくと調整してもらえます。返信が難しい時期はその旨を共有しておくと行き違いを防げます。",
  },
  {
    title: "求人の網羅性は大手に劣るという声がある",
    body: "求人の総数・網羅性は大手総合エージェントに劣るという傾向の声が見られます。公式も「求人数で勝負しない」として審査を通過した求人のみを掲載する方針を示しており、総求人数は公式で明示されていません。",
    cope: "「自社開発への転換」という目的に絞って使い、求人の幅は大手と併用して補うのが現実的です。年収を一段上げたい場合は、高年収IT求人を扱う正社員転職のレバテックキャリア（/review/levtech/）との併用が有効です。",
  },
  {
    title: "年収アップ実績は自社公表値である点に注意",
    body: "公式サイトでは「平均年収 前職比 約126%」と公表されています（2019年9月〜2026年8月に同社経由で転職し、年収が上がった方の増加額をもとに算出）。年収が上がらなかった方は集計に含まれず、第三者の統計でもないため、参考値として捉える必要があります。",
    cope: "数値は参考値と理解し、実際の上がり幅は自分の経験・スキル・応募ポジションで個別に確認します。年収相場は当サイトの年収関連記事も参照します。",
  },
];

const fitYes = [
  "SES・客先常駐で疲弊し、社内SE・自社開発へ移りたい30代・40代",
  "年収最大化より労働環境・働き方の改善を主目的にしている",
  "審査を通過した求人に絞って紹介を受けたい",
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
    body: "公式サイトのフォームから経歴・希望条件を入力します（公式の案内では所要時間は約3分）。在職中でも登録でき、SES脱出・自社開発への転換という目的を明記しておくと話が早い点が特徴です。",
  },
  {
    step: "STEP2",
    title: "キャリアカウンセリング",
    body: "専任のアドバイザーと面談します（公式の案内ではオンラインまたは電話で30〜60分）。現職（SES・客先常駐）の状況、希望する働き方、技術スタック、NG条件をすり合わせます。連絡手段・頻度の希望もここで伝えます。",
  },
  {
    step: "STEP3",
    title: "求人の紹介・応募",
    body: "希望に合う求人の紹介を受け、応募先を決定します（公式の案内では紹介数は平均5〜10社）。自社内開発かどうかは求人ごとに記載が異なるため、SES脱出が目的の場合は常駐の有無を必ず確認します。",
  },
  {
    step: "STEP4",
    title: "面接対策・選考",
    body: "面接対策を受けて選考に臨みます。面接手配が迅速なため、在職中でもテンポよく進めやすくなります。",
  },
  {
    step: "STEP5",
    title: "内定・条件確認・入社",
    body: "内定後は条件を確認し、現職の退職交渉の相談も可能です。自社開発環境への入社で働き方の転換を完了します。",
  },
];

const faqs = [
  {
    q: "クラウドリンクとAIdea Career（アイデアキャリア）は同じですか？",
    a: "同じ会社のサービスです。運営会社の株式会社Cloud Linkは、2026年4月1日にAIdea Career株式会社へ社名を変更しました（公式ニュースで確認）。旧名「クラウドリンク」で検索される方も多いため、本記事では新旧を併記しています。",
  },
  {
    q: "本当に自社内開発の求人だけですか？",
    a: "以前は「自社内開発求人100%」と紹介されることがありましたが、2026年11月17日時点の公式サイトではこの表記を確認できませんでした。公式は「年収、休日数、労働環境等から審査し、通過した優良求人のみを掲載」と案内しています。公開求人には「自社内開発100%」「常駐無」と明記されたものもあれば、そうした記載のないものもあるため、求人ごとに勤務形態を面談で確認してください。",
  },
  {
    q: "SESから抜け出したいのですが使えますか？",
    a: "SES・客先常駐からの脱却を目的とする方も利用できます。自社内開発と明記された求人もあるため、面談で「客先常駐なし」を条件として伝え、紹介求人の勤務形態を一件ずつ確認するのが確実です。SES脱出の考え方は当サイトの/industry/ses-exit/もあわせてご覧ください。",
  },
  {
    q: "連絡がしつこいという評判は本当ですか？",
    a: "連絡頻度が多くしつこいと感じたという傾向の声が一部にあります。熱心さの裏返しでもありますが、ペースが合わない場合は初回面談で希望の連絡手段・頻度・時間帯を伝えておくと調整してもらえます。",
  },
  {
    q: "年収はどのくらい上がりますか？",
    a: "公式サイトでは「平均年収 前職比 約126%」と公表されています（2019年9月〜2026年8月に同社経由で転職し、年収が上がった方の増加額をもとに算出）。年収が上がらなかった方を含む数値ではなく、第三者の統計でもないため参考値として捉えてください。年収を大きく上げたい場合は高年収IT求人を扱うレバテックキャリア（/review/levtech/）の併用が有効です。",
  },
  {
    q: "求人数は多いですか？",
    a: "総求人数は公式で明示されていません。公式は「求人数で勝負しない」として審査を通過した求人のみを掲載する方針を示しており、サービスページでは「10,000社以上の企業ネットワーク」と記載しています。求人の幅を広げたい場合は大手との併用が現実的です。",
  },
  {
    q: "登録は無料ですか？",
    a: "求職者は無料です。公式FAQでは、企業からの成功報酬で運営しているため求職者からは一切費用を受け取らないと案内しています。",
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
          { name: "評判・口コミ一覧", href: "/review/" },
          { name: "クラウドリンク（現AIdea Career）" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          クラウドリンク（現AIdea Career）の評判・口コミ【30代・40代エンジニア向け】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年11月17日 ｜ 公式の公表値と口コミの傾向から、SES脱出・自社開発転職での使い方を検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          クラウドリンクは、AI・IT/機電エンジニア専門の転職エージェントです。運営会社の株式会社Cloud Linkは<span className="font-bold">2026年4月1日に「AIdea Career株式会社」へ社名変更</span>しました。本記事では評判・口コミを実際の口コミプラットフォームの傾向と公開データに基づいて、30代・40代エンジニアの視点で整理します。架空の体験談は掲載せず、出典のある情報のみを扱います。
        </p>
        <DataNote
          surveyedAt="2026年11月17日"
          sources={[
            "AIdea Career公式サイト（aidea-career.co.jp／jobs.aidea-career.co.jp）の公表値",
            "IT・Web系口コミプラットフォーム",
            "複数転職メディア集計値",
          ]}
        />

        {/* 要点 */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">このような方におすすめ</h2>
            <p className="text-sm text-blue-900 mb-3">
              <span className="font-bold">総合評価：AI・IT/機電エンジニア専門で、審査を通過した求人に絞って紹介を受けたい方に向いています</span>。SES・客先常駐から社内SE・自社開発へ移りたい場合は、求人ごとに勤務形態を確認しながら使うのが前提です。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・年収・休日数・労働環境等の審査を通過した求人のみを掲載する方針です（公式）。</li>
              <li>・公式の公表値は平均年収 前職比 約126%、入社後定着率 約96%です（自社集計＝参考値）。</li>
              <li>・一方で求人の網羅性は大手に劣ります。年収最大化なら高年収IT求人のレバテックキャリア併用が有効です。</li>
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
              運営会社の株式会社Cloud Linkは、<span className="font-bold">2026年4月1日に「AIdea Career株式会社」へ社名変更</span>しました（2017年8月に大阪で設立）。サービス名も「AIdea Career（アイデアキャリア）」です。
            </p>
            <p className="text-sm text-amber-900 leading-relaxed">
              旧名「クラウドリンク」での検索・認知が依然として多いため、本記事では<span className="font-bold">新旧を併記</span>しています。なお、旧来の紹介文で見られた「自社内開発求人100%」の表記は、2026年11月17日時点の公式サイトでは確認できませんでした。検索の際は新旧どちらの名称でも同じサービスを指す点にご注意ください。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ表（2026年11月17日確認）</h2>
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
            ※出典（確認日 2026年11月17日）：会社名・所在地・沿革は<a href="https://aidea-career.co.jp/about-us/" target="_blank" rel="noopener" className="underline">公式 About Us</a>、社名変更は<a href="https://aidea-career.co.jp/269/" target="_blank" rel="noopener" className="underline">公式ニュース</a>、実績値・料金・企業ネットワーク数は<a href="https://aidea-career.co.jp/service/" target="_blank" rel="noopener" className="underline">公式 Service</a>、許可番号は<a href="https://jobs.aidea-career.co.jp/occupations" target="_blank" rel="noopener" className="underline">取扱規定の範囲等の明示</a>。実績値はいずれも同社の自社集計です。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">特徴・強み（審査を通過した求人のみ紹介）</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 審査を通過した求人のみを紹介</h3>
              <p className="text-sm text-petrol-deep">
                公式は「年収、休日数、労働環境等から審査し、通過した優良求人のみが掲載」と案内しています。公開求人には「自社内開発100%」「常駐無」と明記されたものもあるため、客先常駐（SES）から抜けたい場合は、その条件を伝えて求人を絞り込むと効率的です。
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
                年収・休日数・労働環境を審査項目に含めているため、「労働環境を変える」ことを主目的とする層と相性が良いサービスです。公式の公表値は平均年収 前職比 約126%（年収が上がった方の増加額から算出した自社集計＝参考値）です。
              </p>
            </div>
          </div>
        </section>

        {/* 良い評判 */}
        <section id="good" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">良い評判の傾向（出典明記）</h2>
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
              SES・客先常駐からの脱却を目指す場合、このサービスでは<span className="font-bold">審査を通過した求人の中から、常駐なしの求人に絞り込んで紹介を受けられるか</span>が重要になります。ただし、2026年11月17日時点の公式サイトでは「自社内開発求人100%」の表記は確認できず、求人ごとに勤務形態の記載が異なります。SESを抜けたい場合は、常駐の有無を条件として伝えたうえで利用することをおすすめします。
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
              SESでの経験を活かしつつ、自社開発でスキルを深める重要な時期になりやすい年代です。年齢が上がるほど自社開発への未経験転換は難しくなる傾向があるため、社内SE・自社開発への移行を考えているなら早めに動くのが有利です。年収も一段上げたい場合は、高年収IT求人を扱う正社員転職のレバテックキャリアを併用すると選択肢が広がります。
            </p>
            <p>
              <span className="font-bold text-slate-700">40代の場合：</span>
              客先常駐の負担（移動・環境変化）が体力的にこたえる年代でもあり、社内SE化による労働環境の安定は大きな価値になります。マネジメントや特定領域の専門性を強みに、自社開発の中核ポジションを狙う戦略が現実的です。求人の網羅性は大手に劣るという声があるため、大手との併用を前提にすると失敗しにくくなります。
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
            クラウドリンク（現AIdea Career）は審査を通過した求人に絞って紹介する方針が特徴ですが、求人の網羅性は大手に劣るという声があります。目的特化で使い、求人の幅や年収レンジは大手との併用で補うのが基本です。
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

        {/* 評判・口コミの参照元 */}
        <section id="sources" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">評判・口コミの参照元</h2>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            本記事の「良い評判／悪い評判の傾向」は、以下のIT・Web系の口コミ・評判メディアで公開されているクラウドリンク（現AIdea Career）の情報を参照し、傾向として要約したものです（原文・スコアの転載ではありません）。各リンクは2026年11月17日時点で実在を確認しています。
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>
              <a href="https://studio-tale.co.jp/career-stories/guide/crowd-link-review-and-features/" target="_blank" rel="nofollow noopener" className="text-petrol hover:underline">studio-tale（クラウドリンクの評判・特徴の解説ページ）</a>
            </li>
            <li>
              <a href="https://tenshoku.asiro.co.jp/engineer/166229/" target="_blank" rel="nofollow noopener" className="text-petrol hover:underline">キャリアアップステージ（クラウドリンク／現AIdea Careerの評判・口コミページ）</a>
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">クラウドリンク（現AIdea Career）への相談をご検討の方へ</h2>
          <p className="text-blue-100 text-sm">
            旧サイト（cloud-link.co.jp）は2026年11月17日時点でも接続できません。社名変更後の公式サイトは aidea-career.co.jp です。無料相談は公式サイトからお申し込みください。
          </p>
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
