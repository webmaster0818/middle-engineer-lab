import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "転職ドラフトの評判・口コミ｜30代40代エンジニアの本音レビュー";
const DESCRIPTION =
  "転職ドラフト（リブセンス運営）の評判・口コミを30代40代エンジニア目線で検証。年収提示つき競争入札の仕組み、提示年収90%ルール、レジュメ審査、向き不向きを公式情報と出典付きで解説します。";
const URL = "/review/tenshoku-draft/";

export const metadata: Metadata = {
  alternates: { canonical: "/review/tenshoku-draft/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "結論サマリ（どんな人向けか）" },
  { id: "basic", label: "基本データ表（2026年6月時点）" },
  { id: "strength", label: "特徴・強み" },
  { id: "good", label: "良い評判の傾向" },
  { id: "bad", label: "悪い評判の傾向と対処法" },
  { id: "salary", label: "30代・40代の年収相場データ" },
  { id: "middle", label: "30代・40代エンジニアの活用戦略" },
  { id: "fit", label: "向いている人／向いていない人" },
  { id: "flow", label: "登録から内定までの流れ" },
  { id: "compare", label: "他サービスとの使い分け" },
  { id: "faq", label: "よくある質問" },
];

const basicData: [string, string][] = [
  ["運営会社", "株式会社リブセンス（東証プライム上場）"],
  ["サービス種別", "競争入札型ダイレクトリクルーティング（年収提示つきスカウト）"],
  ["対象", "ITエンジニア（正社員転職／実務経験者中心）"],
  ["仕組み", "企業がレジュメを見て「提示年収＋期待役割」を明示して指名（入札）する"],
  ["提示年収の中央値", "概ね750〜800万円台（2024〜2025年開催回・運営公表系の二次情報）"],
  ["特徴的ルール", "内定年収が提示年収の90%を下回ることを禁止（提示年収90%ルール）"],
  ["レジュメ", "運営審査あり（通過後に企業へ公開。平均文字数が多いのが特徴）"],
  ["料金", "エンジニア（求職者）は無料"],
];

const goodReviews = [
  {
    title: "提示年収を見てから動けるので市場価値が分かる",
    body: "口コミ系メディアやエンジニアの体験記（note等）では、企業が最初に「提示年収」を明示するため、自分の市場価値を金額で把握できたという傾向の声が見られる。一般的なスカウトと違い、年収レンジを見てから話を進められる点が評価されている。",
  },
  {
    title: "高年収・好条件の指名が届くことがある",
    body: "リブセンスの公表系・転職ドラフトREPORT等では、即戦力エンジニアに対して高い提示年収の指名が届いた事例が紹介されている。提示年収の中央値は750〜800万円台（2024〜2025年・二次情報）とされ、年収アップを狙える水準感が示されている。",
  },
  {
    title: "レジュメ前提で技術的なマッチングがしやすい",
    body: "レジュメ（職務経歴）を読み込んだ上で企業が指名する仕組みのため、技術スタックや経験にマッチした提案を受けやすかったという傾向の声が見られる。書き込んだ分だけ評価されやすいという感想もある。",
  },
];

const badReviews = [
  {
    title: "イベント形式で常時応募できるわけではない",
    body: "転職ドラフトは月1回程度の「指名期間」と「返答期間」に分かれたイベント形式で運用される点が公式に説明されている。今すぐ大量に応募したい人にはペースが合わないという声がある。",
    cope: "急いで動きたい場合は、常時応募できるエージェント（レバテックキャリア等）と並行して使う。転職ドラフトは「市場価値の確認＋高年収狙い」の軸として、開催サイクルに合わせて活用するのが現実的。",
  },
  {
    title: "レジュメ審査があり通過しないと使えない",
    body: "登録レジュメには運営審査があり、二次情報では通過率は約50%程度とされる。実務経験やレジュメの書き込みが不足していると、審査を通過しづらいという指摘がある。",
    cope: "技術スタック・担当領域・成果（数値）を具体的に書き込む。審査落ちした場合は、まず実務経験を積めるエージェントを使い、経験を整理してから再挑戦する。",
  },
  {
    title: "実務経験が浅い・非エンジニア職には向きにくい",
    body: "登録者は20代後半〜30代の即戦力層が中心という二次情報があり、実務経験が浅い場合は指名が届きにくいという傾向の声がある。",
    cope: "経験が浅いうちは、未経験・若手も扱う総合型エージェントで土台を作るのが先決。実務経験を積んでから転職ドラフトで年収を最大化する流れが堅実。",
  },
];

const fitYes = [
  "IT実務経験のある30代エンジニアで年収を上げたい",
  "自分の市場価値を「金額」で客観的に知りたい",
  "提示年収を見てから選考に進みたい",
  "レジュメ（経歴）を書き込むのが苦でない",
  "複数企業の提示を比較して交渉したい",
];

const fitNo = [
  "実務経験が浅く即戦力アピールが難しい",
  "今すぐ大量に応募して短期で決めたい",
  "手厚い対面サポートを最優先したい",
  "非エンジニア職・異業種への転職を探している",
];

const flow = [
  {
    step: "STEP1",
    title: "無料登録・レジュメ作成",
    body: "公式サイトから登録し、職務経歴（技術スタック・担当領域・成果）を入力。書き込み量が評価に影響するため、具体的に記載する。",
  },
  {
    step: "STEP2",
    title: "レジュメ審査",
    body: "運営によるレジュメ審査を通過すると、企業へレジュメが公開される。落ちた場合は内容を見直して再挑戦できる。",
  },
  {
    step: "STEP3",
    title: "指名期間（企業からの提示）",
    body: "開催回の指名期間に、企業が「提示年収＋期待役割」を明示して指名（入札）する。複数社から届くこともある。",
  },
  {
    step: "STEP4",
    title: "返答・面談・選考",
    body: "気になる指名に返答し、面談・選考へ進む。提示年収を起点に話せるため、年収交渉の出発点が明確。",
  },
  {
    step: "STEP5",
    title: "内定・入社",
    body: "内定年収は提示年収の90%を下回らないルールがある。複数の提示を比較し、条件を確認して入社を決める。",
  },
];

const faqs = [
  {
    q: "転職ドラフトの運営会社はどこですか？",
    a: "東証プライム上場の株式会社リブセンスが運営しています。2016年にサービスを開始したITエンジニア向けの競争入札型ダイレクトリクルーティング（年収提示つきスカウト）です。",
  },
  {
    q: "提示年収90%ルールとは何ですか？",
    a: "企業が提示した年収（提示年収）に対し、内定時の年収がその90%を下回ることを禁止するルールです。最初に示された金額が大きく目減りしにくい仕組みで、年収交渉の起点として分かりやすいのが特徴です。最新の運用は公式サイトでご確認ください。",
  },
  {
    q: "誰でも登録・利用できますか？レジュメ審査はありますか？",
    a: "登録レジュメには運営審査があり、二次情報では通過率は約50%程度とされています。実務経験者向けの色が強く、技術スタックや成果を具体的に書き込むほど通過・指名につながりやすい傾向です。",
  },
  {
    q: "常にいつでも応募できますか？",
    a: "月1回程度の「指名期間」「返答期間」に分かれたイベント形式で運用されます。常時大量に応募したい場合は、レバテックキャリアなど常時応募できるエージェントと併用するのが現実的です。",
  },
  {
    q: "提示年収の相場はどのくらいですか？",
    a: "提示年収の中央値は概ね750〜800万円台（2024〜2025年開催回・運営公表系の二次情報）とされています。実際の提示は個人のスキル・経験・需給で変動するため、自分の指名内容で確認するのが確実です。",
  },
  {
    q: "登録は無料ですか？",
    a: "エンジニア（求職者）側の登録・利用は無料です。費用は採用する企業側が負担する仕組みです。",
  },
  {
    q: "30代・40代でも使えますか？",
    a: "登録者は20代後半〜30代の即戦力層が中心という二次情報があります。30代は最も恩恵を受けやすく、40代もマネジメント・アーキテクト経験など強みを書き込めば高年収の指名につながる可能性があります。",
  },
];

const related = [
  { name: "レバテックキャリアの評判（正社員IT特化）", href: "/review/levtech/" },
  { name: "ビズリーチ（ITハイクラス）の評判", href: "/review/bizreach-it/" },
  { name: "リクルートダイレクトスカウトの評判", href: "/review/recruit-direct-scout/" },
  { name: "スカウト型エージェントの比較", href: "/compare/scout-agents/" },
  { name: "IT転職エージェントの比較", href: "/compare/agents/" },
  { name: "口コミ・評判レビュー一覧", href: "/review/" },
];

export default function TenshokuDraftReview() {
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
          { name: "転職ドラフト" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          転職ドラフトの評判・口コミ【30代・40代エンジニア向け】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ 年収提示つき競争入札の実力を口コミの傾向と公開情報で検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          転職ドラフトは、株式会社リブセンス（東証プライム上場）が運営する、ITエンジニア向けの<span className="font-bold">競争入札型ダイレクトリクルーティング</span>です。企業がレジュメを見て「提示年収＋期待役割」を明示して指名する独特の仕組みが特徴です。本記事では評判・口コミを口コミプラットフォームの傾向と公表情報に基づき、30代・40代エンジニアの視点で整理します。架空の体験談は掲載せず、出典のある情報のみを扱います。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "株式会社リブセンス公式・転職ドラフト公式",
            "転職ドラフトREPORT（運営公表系）",
            "エンジニアの体験記（note等）",
            "複数転職系メディア集計値",
          ]}
        />

        {/* 結論サマリ */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：こんな人におすすめ</h2>
            <p className="text-sm text-blue-900 mb-3">
              <span className="font-bold">総合評価：市場価値を「金額」で確認しながら高年収を狙える実務経験者向け</span>。一言でいえば「自分の値段を客観的に知り、年収を上げたいIT実務経験者」向けのサービスです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・企業が提示年収を明示して指名。提示年収の中央値は750〜800万円台（二次情報）。</li>
              <li>・提示年収90%ルールで、内定年収が大きく目減りしにくい設計。</li>
              <li>・一方で月1回程度のイベント形式・レジュメ審査あり。常時応募はエージェント併用が現実的。</li>
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
            ※運営会社・仕組み・90%ルールは公式情報、提示年収の中央値・審査通過率は二次情報（時点併記）です。提示額は時期・需給により変動します。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職ドラフトの特徴・強み</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 年収を提示してから指名が届く競争入札型</h3>
              <p className="text-sm text-petrol-deep">
                企業が「提示年収＋期待役割」を明示して指名する仕組みで、年収レンジを見てから選考に進めます。複数社の提示を並べて比較できるため、自分の市場価値を金額で把握しやすいのが最大の特徴です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 提示年収90%ルールで目減りしにくい</h3>
              <p className="text-sm text-petrol-deep">
                内定年収が提示年収の90%を下回ることを禁止するルールがあり、最初に示された金額が選考の中で大きく削られにくい設計です。年収交渉の起点が明確になります。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. レジュメ前提で技術マッチングしやすい</h3>
              <p className="text-sm text-petrol-deep">
                企業はレジュメを読み込んだ上で指名するため、技術スタックや経験に合った提案を受けやすい構造です。書き込んだ分だけ評価されやすく、経験が厚いミドル層と相性が良い指標です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 高年収水準の提示が見込める</h3>
              <p className="text-sm text-petrol-deep">
                提示年収の中央値は750〜800万円台（2024〜2025年・二次情報）とされ、即戦力エンジニアが年収アップを狙える水準感が示されています。運営公表系では高額提示の事例も紹介されています。
              </p>
            </div>
          </div>
        </section>

        {/* 良い評判 */}
        <section id="good" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">良い評判の傾向（出典付き）</h2>
          <p className="text-sm text-slate-600 mb-4">
            以下は口コミプラットフォーム・体験記・運営公表系の声を傾向としてまとめたものです（原文転載・スコア転載ではありません）。
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

        {/* 年収相場データ */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            30代・40代エンジニアの年収相場データ
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            転職ドラフトの提示年収（中央値750〜800万円台・二次情報）が高いか妥当かを判断するには、自分の年代の相場を知っておくことが大切です。以下はレバテックが公表する年代別平均年収（2025年・正社員SE）です。届いた提示の妥当性を判断する目安にしてください。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {([
                  ["20代", "約378万円"],
                  ["30代", "約499万円"],
                  ["40代", "約618万円"],
                  ["50代", "約685万円"],
                ] as [string, string][]).map(([a, b], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200">
                      {a}
                    </th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            年収1,000万円以上の割合は30代で8.01%、40代で12.67%（レバテック公表・2025年）。厚労省 job tag「システムエンジニア（受託開発）」の平均年収は578.5万円・平均年齢37.1歳で、ミドル層が市場のボリュームゾーンです。提示年収の中央値750〜800万円台は、相場の1〜2段階上に位置する水準の参考になります。
          </p>
          <p className="text-xs text-slate-400">
            ※出典：レバテック公表の年代別平均年収（2025年）、厚生労働省 job tag、転職ドラフトの提示年収（運営公表系・二次）。年収は職種・地域・経験により大きく異なります。
          </p>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            30代・40代エンジニアが使う場合の戦略
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              当サイトはミドルエンジニアの転職を扱う立場から、年代別の使い方を整理します。転職ドラフトは即戦力の経験者が金額ベースで評価される構造のため、経験が厚くなる30代・40代と相性の良いサービスです。
            </p>
            <p>
              <span className="font-bold text-slate-700">30代の場合：</span>
              登録者の中心層で、最も恩恵を受けやすい年代です。技術スタック・担当領域・定量成果をレジュメに具体的に書き込むほど、高い提示年収の指名が届きやすくなります。提示を比較して市場価値を確認しつつ、本命はエージェントと併用して選択肢を広げると堅実です。
            </p>
            <p>
              <span className="font-bold text-slate-700">40代の場合：</span>
              即戦力層中心という点は踏まえつつ、マネジメント・アーキテクト・技術選定などミドルならではの実績を金額で訴求できる場として活用できます。ハイクラス求人の幅を確保するため、ビズリーチやリクルートダイレクトスカウトのスカウト型と併用するのが現実的です。
            </p>
            <p>
              経産省「IT人材需給に関する調査」（2019年公表の試算）では2030年に最大約79万人のIT人材不足が見込まれており、経験あるミドル層への需要は底堅いと考えられます。提示年収を起点に、市場価値を冷静に確認しながら交渉に臨むことが大切です。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">登録から内定までの流れ</h2>
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

        {/* 他社比較 */}
        <section id="compare" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">他サービスとの使い分け</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            転職ドラフトは「市場価値を金額で確認＋高年収狙い」が強みですが、イベント形式のため常時応募には向きません。常時応募できるエージェントや、他のスカウト型と組み合わせると選択肢を確保しやすくなります。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/review/levtech/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              レバテックキャリア（IT特化・常時応募）の評判 →
            </Link>
            <Link href="/review/bizreach-it/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              ビズリーチ（ITハイクラス）の評判 →
            </Link>
            <Link href="/review/recruit-direct-scout/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              リクルートダイレクトスカウトの評判 →
            </Link>
            <Link href="/compare/scout-agents/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              スカウト型エージェントの比較 →
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
          <h2 className="text-xl font-bold mb-3">転職ドラフトで市場価値を確認する</h2>
          <p className="text-blue-100 text-sm mb-4">
            企業からの提示年収で、あなたのいまの市場価値を金額で確かめてみませんか？
          </p>
          <a href="#" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            無料で登録する
          </a>
        </section>

        {/* 評判・口コミの参照元 */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-slate-800 mb-3">評判・口コミの参照元</h2>
          <p className="text-xs text-slate-500 leading-relaxed mb-3">
            本記事の「評判・口コミの傾向」および提示年収の水準感は、運営元リブセンスの公表系情報と、以下のエンジニアの体験・分析記事を参照し、傾向として要約したものです（原文・スコアの転載ではありません）。各リンク先の内容は各運営者に帰属します。最終確認日：2026年7月17日。
          </p>
          <ul className="text-sm space-y-2 text-slate-600 list-disc pl-5">
            <li>
              <a href="https://job-draft.jp/articles/191" rel="nofollow noopener" target="_blank" className="text-petrol underline hover:no-underline">
                転職ドラフトReport（運営リブセンスによる提示年収データ分析記事）
              </a>
            </li>
            <li>
              <a href="https://note.com/uroshi/n/n301ba8f9fa00" rel="nofollow noopener" target="_blank" className="text-petrol underline hover:no-underline">
                note：エンジニアによる転職ドラフト利用の考察記事
              </a>
            </li>
          </ul>
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
