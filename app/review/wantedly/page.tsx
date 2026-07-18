import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "Wantedlyの評判｜30代40代エンジニアの使い方と注意点";
const DESCRIPTION =
  "Wantedlyの評判・口コミを30代40代エンジニア目線で検証。共感軸・カジュアル面談の仕組み、スタートアップ求人の豊富さ、給与待遇が事前に分からない最大の注意点と対処法までデータと出典付きで解説します。";
const URL = "/review/wantedly/";

export const metadata: Metadata = {
  alternates: { canonical: "/review/wantedly/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "結論サマリ（どんな人向けか）" },
  { id: "basic", label: "基本データ表（2026年6月時点）" },
  { id: "scope", label: "転職サイトとは違う点（給与非開示）" },
  { id: "strength", label: "特徴・強み" },
  { id: "good", label: "良い評判の傾向" },
  { id: "bad", label: "悪い評判の傾向と対処法" },
  { id: "salary", label: "30代・40代の年収相場データ" },
  { id: "middle", label: "30代・40代エンジニアの活用戦略" },
  { id: "fit", label: "向いている人／向いていない人" },
  { id: "flow", label: "登録からカジュアル面談までの流れ" },
  { id: "compare", label: "他社との比較・使い分け" },
  { id: "faq", label: "よくある質問" },
];

const basicData: [string, string][] = [
  ["運営会社", "ウォンテッドリー株式会社（東証グロース上場）"],
  ["サービス類型", "共感軸の直接応募／ビジネスSNS（カジュアル面談前提）"],
  ["ユーザー数", "400万人以上（二次情報）"],
  ["利用企業数", "4万社以上（二次情報）"],
  ["給与・待遇の表示", "原則非記載（最大の特徴であり注意点）"],
  ["得意領域", "スタートアップ・ベンチャー、専門職（エンジニア含む）"],
  ["主な使い方", "カジュアル面談で社風・ビジョンを知ってから検討"],
  ["料金", "求職者無料"],
];

const goodReviews = [
  {
    title: "カジュアル面談で社風・ビジョンが分かる",
    body: "イーデスやみん評等の口コミプラットフォームでは、選考前のカジュアル面談を通じて、会社のビジョンや事業フェーズ、チームの雰囲気を知ったうえで応募判断ができたという傾向の声が見られる。求人票だけでは分からない『共感できるか』を確かめられる点が評価されている。",
  },
  {
    title: "スタートアップ・ベンチャー求人が豊富",
    body: "OpenWork等では、大手転職サイトでは出会いにくいスタートアップや成長企業の募集に出会えたという傾向の声が見られる。事業の立ち上げ期に近いポジションを探す層と相性が良いという感想が確認できる。",
  },
  {
    title: "気軽に『話を聞きに行く』ところから始められる",
    body: "イーデス等では、いきなり応募ではなく『話を聞きに行きたい』というアクションから接点を持てるため、転職を決めきっていない段階でも情報収集しやすかったという傾向の声が見られる。",
  },
];

const badReviews = [
  {
    title: "給与・待遇が事前に分からない（最大のデメリット）",
    body: "募集で給与・待遇が原則非記載のため、条件面が応募前に把握しづらいという傾向の声がみん評等で多く見られる。年収を最優先したい転職活動には根本的に向きづらい、という構造的な注意点である。",
    cope: "カジュアル面談の場で年収レンジ・待遇を必ず確認すること。年収を重視するなら、Wantedlyを情報収集・接点づくりに使い、条件交渉や本命の応募は年収交渉に強いエージェント型（doda・レバテックキャリア）で進めるのが現実的。",
  },
  {
    title: "条件の低い求人や玉石混交の募集が混じる",
    body: "間口が広いぶん、条件が見合わない募集や、フェーズが極めて早い不確実な求人も混じると感じたという傾向の声がOpenWork等で見られる。",
    cope: "企業の事業内容・資金調達状況・チーム体制をカジュアル面談で具体的に確認する。気になる点は遠慮せず質問し、共感だけで判断しないこと。",
  },
  {
    title: "年収交渉には不向き",
    body: "そもそも給与非開示・共感軸の文化のため、年収交渉を主目的にすると進めづらいと感じたという傾向の声がイーデス等で見られる。",
    cope: "年収交渉は伴走型エージェントの得意分野。Wantedlyで興味を持った企業でも、内定・条件交渉のフェーズではエージェント経由や直接交渉でしっかり詰める姿勢が必要。",
  },
];

const fitYes = [
  "事業フェーズやカルチャーを重視してスタートアップに参画したい",
  "年収より『何をやるか・誰とやるか』を優先したい30〜40代",
  "いきなり応募ではなく、まず話を聞いて情報収集したい",
  "自分の専門性を活かせる成長企業の募集を探したい",
  "副業・複業や、将来の独立を見据えて接点を広げたい",
];

const fitNo = [
  "年収を最優先したい（給与非開示のためメイン利用は非推奨）",
  "安定した大手・上場企業中心に探したい",
  "条件をきっちり比較してから応募したい",
  "年収交渉をエージェントに任せて進めたい",
];

const flow = [
  {
    step: "STEP1",
    title: "プロフィール登録",
    body: "ビジネスSNS的にプロフィール（経歴・スキル・関心）を登録。共感軸のサービスのため、何に興味があり何をやりたいかが伝わるよう書くとマッチしやすい。",
  },
  {
    step: "STEP2",
    title: "募集を探す・『話を聞きに行きたい』",
    body: "気になる企業の募集に対して、いきなり応募ではなく『話を聞きに行きたい』というアクションから接点を持てる。スタートアップ・ベンチャーの募集が豊富。",
  },
  {
    step: "STEP3",
    title: "カジュアル面談",
    body: "選考前提でないカジュアル面談で、事業ビジョン・フェーズ・チームの雰囲気を確認。ここで給与レンジ・待遇を必ず質問しておくのが重要（原則非記載のため）。",
  },
  {
    step: "STEP4",
    title: "応募・選考",
    body: "共感できれば正式に応募・選考へ。条件面はこの段階以降で詰めていくことになるため、年収・働き方の希望を明確に伝える。",
  },
  {
    step: "STEP5",
    title: "内定・条件確認・入社",
    body: "内定後に給与・待遇・働き方の最終確認を行う。年収交渉が必要な場合は、別途エージェントの併用や直接交渉でしっかり詰める。",
  },
];

const faqs = [
  {
    q: "Wantedlyは普通の転職サイトと何が違いますか？",
    a: "Wantedlyは「共感軸」のビジネスSNS／直接応募サービスで、給与・待遇が原則非記載なのが最大の違いです。求人票で条件を比較してから応募する一般的な転職サイトと異なり、まずカジュアル面談で会社のビジョンや事業フェーズ、チームの雰囲気を知り、共感できるかで判断する文化です。年収条件を最初に比較したい人には不向きですが、何をやるか・誰とやるかを重視する人には向いています。",
  },
  {
    q: "給与が書かれていないのですが、どう確認すればいいですか？",
    a: "Wantedlyでは給与・待遇が原則非記載のため、カジュアル面談の場で年収レンジ・待遇を必ず確認してください。これが最大の注意点です。年収を重視する場合は、Wantedlyを情報収集・接点づくりに使い、条件交渉や本命の応募は年収交渉に強いエージェント型（doda・レバテックキャリア）で進めるのが現実的です。",
  },
  {
    q: "30代・40代エンジニアが使う意味はありますか？",
    a: "あります。ただし使い方を選びます。年収を最優先するならメイン利用は非推奨です。一方で、事業フェーズやカルチャーを重視してスタートアップ・ベンチャーへの参画を狙う層には、求人票に出てこない成長企業との接点を作れる補助的なツールとして有効です。ミドルの専門性を活かせる立ち上げ期ポジションに出会える可能性があります。",
  },
  {
    q: "スタートアップの求人は本当に多いですか？",
    a: "口コミの傾向として、大手転職サイトでは出会いにくいスタートアップ・ベンチャーの募集が豊富という声が多く見られます。利用企業は4万社以上（二次情報）とされ、成長企業を探す層と相性が良いサービスです。ただしフェーズの早い不確実な求人も混じるため、事業内容や資金状況をカジュアル面談で確認することが大切です。",
  },
  {
    q: "登録は無料ですか？",
    a: "求職者は無料です。プロフィール登録・募集の閲覧・カジュアル面談まで費用はかかりません。",
  },
  {
    q: "年収交渉はできますか？",
    a: "Wantedlyは共感軸・給与非開示の文化のため、年収交渉を主目的にするには不向きです。年収交渉は伴走型エージェントの得意分野なので、Wantedlyで興味を持った企業でも、内定・条件交渉のフェーズではエージェント経由や直接交渉でしっかり詰める姿勢が必要です。",
  },
];

const related = [
  { name: "スタートアップ転職のキャリア（企業からスタートアップへ）", href: "/career/corporate-to-startup/" },
  { name: "Green（ダイレクトリクルーティング）の評判", href: "/review/green/" },
  { name: "Green vs Wantedly 比較（どちらを使うべきか）", href: "/compare/green-vs-wantedly/" },
  { name: "30代エンジニア向けエージェント比較", href: "/compare/30s-agents/" },
  { name: "40代エンジニアの転職リアル", href: "/age/40s/" },
  { name: "副業・サイドプロジェクトの始め方", href: "/knowledge/side-project/" },
  { name: "複数エージェント併用のコツ", href: "/knowledge/multiple-agents/" },
];

export default function WantedlyReview() {
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
          { name: "Wantedly" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Wantedlyの評判・口コミ【30代・40代エンジニア向け】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ 共感軸のビジネスSNS／カジュアル面談サービスの実力を口コミの傾向と公開データで検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          Wantedlyは、ウォンテッドリー株式会社が運営する「共感軸」のビジネスSNS／直接応募サービスです。カジュアル面談を前提とし、給与・待遇が原則非記載という独特の仕組みを持ちます。本記事では「評判・口コミ」を口コミプラットフォームの傾向と公開データに基づき、30代・40代エンジニア視点で整理します。架空の体験談は掲載せず、出典のある情報のみを扱います。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "Wantedly 公式",
            "イーデス",
            "OpenWork",
            "みん評",
            "厚生労働省 job tag",
            "複数転職メディア集計値",
          ]}
        />

        {/* 結論サマリ */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：こんな人におすすめ</h2>
            <p className="text-sm text-blue-900 mb-3">
              <span className="font-bold">総合評価：年収より事業フェーズ・カルチャー重視で、スタートアップ参画を狙う層に補助的に有効</span>。一言でいえば「条件比較より共感を優先し、まず話を聞いてみたい」エンジニア向けのサービスです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・ユーザー400万人以上・利用企業4万社以上（二次情報）。スタートアップ・ベンチャー求人が豊富。</li>
              <li>・カジュアル面談で社風・ビジョンを知ってから検討できるのが強み。</li>
              <li>・<span className="font-bold">給与・待遇が原則非記載が最大の注意点。年収重視のメイン利用は非推奨</span>。条件はエージェントで補う。</li>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            基本データ表（2026年6月時点）
          </h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {basicData.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">
                      {label}
                    </th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">
                      {value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            ※ユーザー数・利用企業数は二次情報で変動します。給与・待遇が原則非記載という仕様が、他サービスとの最大の違いです。
          </p>
        </section>

        {/* 転職サイトと違う点（給与非開示） */}
        <section id="scope" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            一般的な転職サイトと違う点（給与非開示を理解する）
          </h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-4">
            <p className="text-sm text-amber-900 leading-relaxed">
              Wantedlyを使ううえで<span className="font-bold">最初に理解すべき最大の特徴が「給与・待遇が原則非記載」</span>であることです。求人票で年収を比較してから応募する一般的な転職サイトとは、根本的に発想が異なります。
            </p>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            Wantedlyは「共感軸」を掲げ、給与や福利厚生といった条件ではなく、<span className="font-bold text-slate-700">事業のビジョンや『何をやるか・誰とやるか』を起点に接点を作る</span>サービスです。だからこそカジュアル面談（選考前提でない面談）が前提になっています。これは年収を最優先する人には大きなデメリットですが、逆に「条件より中身で会社を選びたい」人には合理的な仕組みです。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            実務的な結論として、<span className="font-bold text-slate-700">年収を重視するならメイン利用は非推奨</span>です。Wantedlyは情報収集・接点づくりに使い、条件交渉や本命の応募は年収交渉に強いエージェント型（doda・レバテックキャリア）で進める——という併用が、ミドルエンジニアにとって現実的な使い方になります。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Wantedlyの特徴・強み</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. カジュアル面談で社風・ビジョンを確認できる</h3>
              <p className="text-sm text-petrol-deep">
                選考前提でないカジュアル面談を通じて、事業フェーズ・チームの雰囲気・経営ビジョンを知ってから応募判断ができます。求人票では分からない「共感できるか」を確かめられる点が最大の強みです。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. スタートアップ・ベンチャー求人が豊富</h3>
              <p className="text-sm text-petrol-deep">
                利用企業4万社以上（二次情報）。大手転職サイトでは出会いにくいスタートアップや成長企業の募集が豊富で、立ち上げ期に近いポジションを探す層と相性が良いサービスです。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 『話を聞きに行く』気軽さ</h3>
              <p className="text-sm text-petrol-deep">
                ユーザー400万人以上（二次情報）のビジネスSNSとして、いきなり応募ではなく「話を聞きに行きたい」というアクションから接点を持てます。転職を決めきっていない段階でも情報収集しやすいのが特徴です。
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

        {/* 悪い評判と対処法 */}
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
            Wantedlyは給与非開示のため、自分の年代の相場を頭に入れておくことが特に重要です。カジュアル面談で提示された条件が妥当かを判断する物差しになります。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {([
                  ["システムエンジニア（受託開発）平均年収", "約578.5万円"],
                  ["同・平均年齢", "約37.1歳"],
                  ["Wantedlyの給与表示", "原則非記載（面談で要確認）"],
                ] as [string, string][]).map(([a, b], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/2 border-b border-slate-200 align-top">
                      {a}
                    </th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            厚労省 job tag「システムエンジニア（受託開発）」の平均年収は578.5万円・平均年齢37.1歳（権威データ）。スタートアップは年収レンジの幅が大きく、ストックオプション等の非金銭的報酬が絡むこともあります。だからこそ、相場を物差しにカジュアル面談で具体的な金額レンジを必ず確認することが、ミドルの転職では欠かせません。
          </p>
          <p className="text-xs text-slate-400">
            ※出典：厚生労働省 job tag。年収は職種・地域・経験・企業フェーズにより大きく異なります。
          </p>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            30代・40代エンジニアが使う場合の戦略
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              当サイトはミドルエンジニアの転職を扱う立場から、Wantedlyを「メインではなく、スタートアップとの接点を広げる補助ツール」と位置づけます。給与非開示という特性上、年収を主軸にするミドルの転職活動では中心に据えるべきではありません。
            </p>
            <p>
              <span className="font-bold text-slate-700">30代の場合：</span>
              年収より「成長環境・裁量・事業フェーズ」を取りに行く時期と相性が良いツールです。スタートアップやベンチャーへの参画を考えるなら、カジュアル面談で複数社の中身を比較する使い方が向いています。ただし家計やローンの状況を踏まえ、条件面はエージェントで必ず詰める前提で。
            </p>
            <p>
              <span className="font-bold text-slate-700">40代の場合：</span>
              ミドルの専門性（特定ドメイン・マネジメント・立ち上げ経験）を活かせる成長企業のポジションに出会える可能性があります。一方で、家族・住宅ローンなど守るべきものが増える年代でもあり、給与非開示のリスクはより重く受け止めるべきです。年収・待遇の安定を重視するなら、JACリクルートメントなどハイクラス・ミドル特化エージェントを本命に据え、Wantedlyは情報収集に限定するのが堅実です。
            </p>
            <p>
              経産省「IT人材需給に関する調査」（2019年公表の試算）では2030年に最大約79万人のIT人材不足が見込まれており、スタートアップを含めミドル層への需要は底堅いと考えられます。共感で動ける一方、条件はシビアに確認する——この両立がWantedly活用の鍵です。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">登録からカジュアル面談までの流れ</h2>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">他社との比較・使い分け</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Wantedlyは共感軸・カジュアル面談・スタートアップに強い一方、給与非開示が弱点。年収・条件はエージェント型（doda・レバテックキャリア）で補い、スタートアップ志向ならGreenのようなダイレクトリクルーティングと併用するのが定石です。スタートアップへのキャリアチェンジ全体像は専用記事も参考にしてください。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/review/green/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              Green の評判 →
            </Link>
            <Link href="/career/corporate-to-startup/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              企業からスタートアップへの転職 →
            </Link>
            <Link href="/compare/30s-agents/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              30代エンジニア向けエージェント比較 →
            </Link>
            <Link href="/knowledge/side-project/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              副業・サイドプロジェクトの始め方 →
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
            本記事の「良い評判／悪い評判」の傾向は、以下の口コミ・評判メディアで公開されている情報を参照し、傾向として要約したものです（原文・スコアの転載ではありません）。各ページは2026年7月に確認しています。
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://www.a-tm.co.jp/top/job-change/best-job-change-site/wantedly/" rel="nofollow noopener" target="_blank" className="text-petrol hover:underline font-medium">イーデス</a>
              <span className="text-slate-500"> ：Wantedly（ウォンテッドリー）の評判・口コミレビュー</span>
            </li>
            <li>
              <a href="https://minhyo.jp/wantedly" rel="nofollow noopener" target="_blank" className="text-petrol hover:underline font-medium">みん評</a>
              <span className="text-slate-500"> ：Wantedly（ウォンテッドリー）利用者の口コミ</span>
            </li>
            <li>
              <a href="https://www.openwork.jp/company.php?m_id=a0C1000000tgYLO" rel="nofollow noopener" target="_blank" className="text-petrol hover:underline font-medium">OpenWork</a>
              <span className="text-slate-500"> ：ウォンテッドリー株式会社の社員クチコミ</span>
            </li>
          </ul>
          <p className="text-xs text-slate-400 mt-3">※外部サイトの内容・URLは変更される場合があります（最終確認：2026年7月）。数値は各サイトの記載時点のものです。</p>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">Wantedlyに無料登録する</h2>
          <p className="text-blue-100 text-sm mb-4">
            まずは気になる企業に「話を聞きに行く」ところから。条件はカジュアル面談で必ず確認を。
          </p>
          <a href="#" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            無料で登録する
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
