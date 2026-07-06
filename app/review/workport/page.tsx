import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/review/workport/" },
  title: "ワークポートの評判は？30代40代エンジニア向け徹底レビュー",
  description:
    "ワークポートの評判をエンジニア目線で検証。求人数・対応スピード・口コミの傾向、未経験DX転職の実態、30代40代の活用戦略までデータと出典付きで解説します。",
};

const toc = [
  { id: "summary", label: "結論：ワークポートはこんな人向け" },
  { id: "basic", label: "基本データ（2026年6月時点）" },
  { id: "strength", label: "ワークポートの特徴・強み" },
  { id: "good", label: "良い評判の傾向" },
  { id: "bad", label: "悪い評判の傾向" },
  { id: "measure", label: "デメリットへの対処法" },
  { id: "strategy", label: "30代・40代エンジニアの活用戦略" },
  { id: "fit", label: "向いている人／向いていない人" },
  { id: "flow", label: "登録から内定までの5ステップ" },
  { id: "compare", label: "他社との比較・使い分け" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basicData: [string, string][] = [
  ["運営会社", "株式会社ワークポート（2003年3月設立／従業員1,335名・2025年4月現在）"],
  ["拠点", "全国47都道府県・57拠点"],
  ["公開求人数", "11万件以上（うちIT関連3万件以上）※公式LP・転職メディア集計値・2026年6月時点"],
  ["対応エリア", "全国（地方求人も取り扱い）"],
  ["得意領域", "IT・ゲーム業界、未経験歓迎求人、異業種からのキャリアチェンジ"],
  ["年収アップ実績", "統一された公式アップ率は確認できず（本記事では断定しない）"],
  ["サポート", "コンシェルジュ（担当者）型。スピード重視の求人提案"],
  ["料金", "求職者完全無料（公式）"],
];

const strengths = [
  {
    title: "総合型でありながらIT・ゲーム領域が最も強い",
    body: "ワークポートは総合型エージェントに分類されますが、創業以来IT・ゲーム業界に最も注力してきた歴史があります。公開求人11万件以上のうちIT関連が3万件以上（公式LP・転職メディア集計値・2026年6月時点）を占め、Web系・SIer・ゲーム・インフラまで幅広い職種をカバーします。総合型の求人量とIT特化型の専門性を併せ持つ点が、純粋なIT特化エージェントとの違いです。",
  },
  {
    title: "未経験歓迎・異業種チャレンジ求人が豊富",
    body: "未経験歓迎求人やポテンシャル採用の枠を多く保有しているのが特徴です。製造業・金融・営業など他業種で培った業務知識を活かせるDX系ポジションの提案にも対応しており、IT業界への入口として選ばれやすい傾向があります。ただし未経験での転職は年齢が上がるほど難度が上がるため、30代後半以降は経験職種との接続を意識した応募設計が重要になります。",
  },
  {
    title: "全国47都道府県57拠点のネットワーク",
    body: "首都圏中心のIT特化エージェントが多い中、ワークポートは全国47都道府県に57拠点を構えています。地方在住のエンジニアや、UターンIターンを検討する人にとって、地域求人へのアクセスや対面相談のしやすさは実利的なメリットです。リモート求人と地方拠点求人を組み合わせて探せる点も強みといえます。",
  },
  {
    title: "対応スピード・提案数の多さ",
    body: "口コミの傾向として、レスポンスの速さと紹介求人の量が評価されています（後述）。短期間で多くの選択肢を比較したい人や、転職活動を早く前に進めたい人と相性が良い設計です。一方で提案量が多いことは、後述の「連絡が多い」という不満の裏返しでもあるため、希望条件の事前すり合わせが満足度を左右します。",
  },
];

const goodReviews = [
  {
    point: "紹介求人の量が多い",
    detail:
      "保有求人の多さを背景に、一度の面談で複数の選択肢を提示してもらえたという声が見られます。比較検討の材料を多く得たい人に向く傾向です。",
  },
  {
    point: "レスポンスが早い",
    detail:
      "連絡や求人紹介のスピードを評価する声が目立ちます。転職活動を停滞させたくない人にとって、対応の速さは実利的なメリットとして挙げられています。",
  },
  {
    point: "未経験歓迎求人が豊富",
    detail:
      "IT未経験・異業種からの挑戦を後押しする求人の多さを評価する声があります。IT業界への入口として利用したという傾向が読み取れます。",
  },
];

const badReviews = [
  {
    point: "連絡が多すぎる",
    detail:
      "提案量の多さの裏返しとして、連絡頻度が高いと感じる声が見られます。希望条件を最初に明確化し、連絡手段・頻度の希望を伝えることで軽減しやすい不満です。",
  },
  {
    point: "希望と異なる求人を紹介されることがある",
    detail:
      "保有求人が幅広いぶん、希望と方向性の違う提案が混じるケースが指摘されています。NG条件（年収下限・職種・勤務地など）を具体的に共有することが対策になります。",
  },
  {
    point: "担当の専門性にばらつきがある",
    detail:
      "総合型ゆえに担当者のIT専門知識に差があるという声が見られます。技術的に踏み込んだ相談をしたい場合は、IT特化エージェントとの併用が現実的です。",
  },
];

const faqs = [
  {
    q: "ワークポートの登録・利用は無料ですか？",
    a: "はい、求職者は完全無料で利用できます（公式）。報酬は採用企業側が支払うビジネスモデルのため、利用者に費用は発生しません。",
  },
  {
    q: "ワークポートはIT未経験でも使えますか？",
    a: "未経験歓迎求人やポテンシャル採用の枠を多く保有しており、IT未経験者の利用にも対応しています。ただし未経験転職は年齢が上がるほど難度が上がるため、30代後半以降は前職の業務知識とITを接続できるDX系などのポジションを狙うのが現実的です。",
  },
  {
    q: "ワークポートの求人数はどれくらいですか？",
    a: "公開求人11万件以上、うちIT関連3万件以上とされています（公式LP・転職メディア集計値・2026年6月時点）。求人数は時期により変動するため、最新値は公式サイトでご確認ください。",
  },
  {
    q: "連絡がしつこいという評判は本当ですか？",
    a: "口コミプラットフォーム（Qiita Job Change・morejob等）では「連絡が多い」という傾向の声が一定数見られます。提案量の多さの裏返しですが、初回面談で連絡手段・頻度・希望条件を明確に伝えることで軽減しやすい不満です。",
  },
  {
    q: "地方在住でも利用できますか？",
    a: "全国47都道府県・57拠点を展開しており、地方求人も取り扱っています。リモート求人と地方拠点求人を組み合わせて探せる点も利点です。",
  },
  {
    q: "ハイクラス・高年収転職には向いていますか？",
    a: "ワークポートは未経験〜中堅層の求人層が厚い総合型です。年収750万円以上のハイクラス求人を軸に探すなら、ビズリーチやレバテックキャリアなどハイクラス・IT特化に強いサービスとの併用が現実的です。",
  },
  {
    q: "担当者と合わない場合はどうすればいいですか？",
    a: "多くのエージェントと同様に、担当者の変更を申し出ることが可能です。専門性や相性に不満がある場合は、遠慮せず変更を依頼するか、他社と併用して比較する方法があります。",
  },
  {
    q: "退会・利用停止はできますか？",
    a: "利用者の意思で退会できます。担当者へ退会の旨を伝えるか、公式の問い合わせ窓口から手続きを行います。連絡頻度だけが問題であれば、退会前に連絡停止・頻度調整を依頼する方法もあります。",
  },
  {
    q: "他のエージェントと併用してもよいですか？",
    a: "問題ありません。複数のエージェントを併用し、求人の幅とサポートの質を比較するのは一般的な進め方です。ワークポートで求人量を確保しつつ、IT特化エージェントで専門的な選考対策を受ける組み合わせが有効です。",
  },
];

const relatedArticles = [
  { name: "ワークポート vs マイナビIT AGENT 比較", href: "/compare/workport-vs-mynavi/" },
  { name: "Geekly vs ワークポート 比較", href: "/compare/geekly-vs-workport/" },
  { name: "30代エンジニアにおすすめのエージェント", href: "/compare/30s-agents/" },
  { name: "未経験から30代でIT転職する現実", href: "/knowledge/inexperienced-30s/" },
  { name: "エージェントの上手な選び方", href: "/knowledge/how-to-choose/" },
  { name: "複数エージェント併用のコツ", href: "/knowledge/multiple-agents/" },
];

export default function WorkportReview() {
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
      <ArticleJsonLd
        title="ワークポートの評判は？30代40代エンジニア向け徹底レビュー"
        description="ワークポートの評判をエンジニア目線で検証。求人数・対応スピード・口コミの傾向、未経験DX転職の実態、30代40代の活用戦略までデータと出典付きで解説します。"
        url="/review/workport/"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "レビュー", href: "/#ranking" }, { name: "ワークポート" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          ワークポートの評判は？30代・40代エンジニア向け徹底レビュー
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ 求人量・対応スピード・口コミの傾向を出典付きで検証</p>

        <p className="text-slate-700 leading-relaxed mb-6">
          ワークポートは、IT・ゲーム領域に最も強い「総合型」転職エージェントです。求人量の多さと対応スピード、全国57拠点のネットワークが特徴で、未経験・異業種からのIT転職の入口としても選ばれています。本記事では、株式会社ワークポートの公式情報と口コミプラットフォームの傾向をもとに、30代・40代エンジニアが使う場合の実態と戦略を、出典を明示しながら検証します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={["株式会社ワークポート公式", "Qiita Job Change", "morejob", "イーデス", "axxis"]}
        />

        {/* 結論サマリ */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-xl font-bold text-blue-900 mb-3">結論：ワークポートはこんな人向け</h2>
            <p className="text-sm text-blue-900 mb-4 leading-relaxed">
              <span className="font-bold">総合評価：求人量とスピードで「選択肢を広げたい人」に強い総合型エージェント。</span>
              一言でいえば、<span className="font-bold">「とにかく多くの求人を比較したい人」「未経験・異業種からIT転職を狙う30代」「地方やリモートも含めて探したい人」</span>に向いています。
            </p>
            <ul className="text-sm text-blue-900 space-y-2">
              <li className="flex gap-2"><span className="shrink-0 font-bold">①</span>公開求人11万件以上・IT3万件以上（公式LP・集計値・2026年6月）で選択肢が豊富</li>
              <li className="flex gap-2"><span className="shrink-0 font-bold">②</span>レスポンスが早く、活動を早く前に進めたい人と相性が良い</li>
              <li className="flex gap-2"><span className="shrink-0 font-bold">③</span>一方で「連絡が多い」「専門性にばらつき」の声もあり、IT特化エージェントとの併用が前提に向く</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav aria-label="目次" className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {toc.map((item, i) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-petrol hover:underline">
                  {i + 1}. {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 基本データ */}
        <section id="basic" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ（2026年6月時点）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {basicData.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            ※求人数は時期により変動が大きく、媒体経由の二次集計値を含みます。最新値は公式サイトでご確認ください。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ワークポートの特徴・強み</h2>
          <div className="space-y-4">
            {strengths.map((s, i) => (
              <div key={i} className="bg-petrol-soft rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-2">{i + 1}. {s.title}</h3>
                <p className="text-sm text-blue-900 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 良い評判 */}
        <section id="good" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">良い評判の傾向</h2>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            Qiita Job Change・morejob等の口コミプラットフォームでは、主に次のような傾向の声が見られます（個別の体験談ではなく傾向の要約です）。
          </p>
          <div className="space-y-4">
            {goodReviews.map((r, i) => (
              <div key={i} className="border border-green-200 rounded-lg p-5">
                <h3 className="font-bold text-green-700 mb-2 flex items-center gap-2"><span className="text-green-600">+</span>{r.point}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{r.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 悪い評判 */}
        <section id="bad" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">悪い評判の傾向</h2>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            一方で、axxis・イーデス等の口コミプラットフォームでは次のような不満の傾向も見られます。公平性のため、デメリットも具体的に確認しておきましょう。
          </p>
          <div className="space-y-4">
            {badReviews.map((r, i) => (
              <div key={i} className="border border-red-200 rounded-lg p-5">
                <h3 className="font-bold text-red-700 mb-2 flex items-center gap-2"><span className="text-red-500">-</span>{r.point}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{r.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 対処法 */}
        <section id="measure" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">デメリットへの対処法</h2>
          <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
            <div className="border-l-4 border-petrol pl-4">
              <p className="font-bold text-slate-800 mb-1">「連絡が多い」への対処</p>
              <p>初回面談で連絡手段（メール・電話・LINE等）と希望頻度をはっきり伝えましょう。「平日夜のみ」「週1回まとめて」など具体的に指定すると、提案量の多さがストレスになりにくくなります。</p>
            </div>
            <div className="border-l-4 border-petrol pl-4">
              <p className="font-bold text-slate-800 mb-1">「希望と異なる求人」への対処</p>
              <p>年収下限・職種・勤務地・避けたい業態などのNG条件を最初に言語化して共有します。条件を具体化するほど、ミスマッチな提案は減ります。</p>
            </div>
            <div className="border-l-4 border-petrol pl-4">
              <p className="font-bold text-slate-800 mb-1">「担当の専門性のばらつき」への対処</p>
              <p>技術的に踏み込んだ相談やハイクラス案件は、<Link href="/review/levtech/" className="text-petrol hover:underline">レバテックキャリア</Link>などIT特化エージェントと併用してカバーするのが現実的です。ワークポートは求人量、IT特化は選考の深さ、と役割分担すると効率的です。</p>
            </div>
          </div>
        </section>

        {/* 30代40代戦略 */}
        <section id="strategy" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの活用戦略</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mb-4">
            <p className="text-sm text-amber-900 leading-relaxed">
              当サイト（ミドルエンジニア転職ラボ）は30代・40代エンジニアの読者を想定しています。年代別の現実を踏まえると、ワークポートの「使いどころ」は若手とは異なります。
            </p>
          </div>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <div>
              <h3 className="font-bold text-slate-800 mb-1">30代：求人量で「土俵」を広げる使い方</h3>
              <p>
                30代は実務経験を武器にしつつ、まだ職種転換やキャリアの軌道修正が利く年代です。ワークポートの求人量を使って選択肢を広げ、Web系・SIer・ゲーム・社内SEなど複数方向を同時に比較するのに向きます。参考までに、レバテック公表の年代別平均年収（2025年）では正社員SEの30代は約499万円、年収1,000万円以上の割合は30代で8.01%とされています。求人量で母数を確保しつつ、年収条件は妥協せずフィルタリングしましょう。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-800 mb-1">40代：未経験狙いより「経験の横展開」</h3>
              <p>
                40代では未経験職種への転換は難度が上がります。レバテック公表値（2025年）では正社員SEの40代平均年収は約618万円、1,000万円以上の割合は12.67%とされ、経験者市場としての厚みがあります。ワークポートを使うなら、未経験歓迎枠よりも、前職の専門知識（業務ドメイン・マネジメント・特定技術）を横展開できる求人を中心に絞り込むのが得策です。求人量の多さは、ニッチな経験にマッチする企業を見つける確率を上げます。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-800 mb-1">市場背景：IT人材不足という追い風</h3>
              <p>
                経済産業省「IT人材需給に関する調査」（2019年公表の試算）では、2030年に最大約79万人のIT人材不足が見込まれています。ミドル層にとっても経験者需要は底堅く、求人量を確保できるワークポートは、この需要に幅広くアクセスする入口として機能します。詳しくは<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>もあわせてご覧ください。
              </p>
            </div>
          </div>
        </section>

        {/* 向いている人 */}
        <section id="fit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人／向いていない人</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-3">向いている人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  "とにかく多くの求人を比較したい",
                  "未経験・異業種からIT転職を狙う30代",
                  "地方・リモートも含めて幅広く探したい",
                  "転職活動を早く前に進めたい",
                  "前職の業務知識を活かせるDX系を探したい",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-green-600 shrink-0">✓</span>{t}</li>
                ))}
              </ul>
            </div>
            <div className="border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-700 mb-3">向いていない人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  "年収750万円以上のハイクラスのみを狙う",
                  "連絡頻度は最小限に抑えたい",
                  "技術的に深い選考対策を最優先したい",
                  "厳選した少数の求人だけを見たい",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="text-red-500 shrink-0">✗</span>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 流れ */}
        <section id="flow" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">登録から内定までの5ステップ</h2>
          <ol className="space-y-3">
            {[
              ["無料登録", "公式サイトからプロフィールを入力して登録します。完全無料で、登録後に担当コンシェルジュがつきます。"],
              ["面談・ヒアリング", "希望条件・経歴・キャリアの方向性をすり合わせます。ここで連絡頻度やNG条件を明確に伝えるのが満足度の分かれ目です。"],
              ["求人紹介・応募", "条件に合う求人を提案してもらい、応募先を絞り込みます。求人量が多いぶん、優先順位づけを意識しましょう。"],
              ["選考・面接対策", "書類添削・面接対策のサポートを受けつつ選考を進めます。専門的な対策はIT特化エージェントと併用するのも有効です。"],
              ["内定・条件交渉・入社", "内定後は年収・条件の交渉をコンシェルジュ経由で行い、入社日を調整します。"],
            ].map(([title, body], i) => (
              <li key={i} className="flex gap-4 border border-slate-200 rounded-lg p-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-petrol text-white font-bold flex items-center justify-center text-sm">{i + 1}</span>
                <div>
                  <p className="font-bold text-slate-800 text-sm mb-1">{title}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* 比較 */}
        <section id="compare" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">他社との比較・使い分け</h2>
          <div className="space-y-3 text-sm text-slate-700 leading-relaxed mb-4">
            <p><span className="font-bold">ワークポートが向くケース：</span>求人量を最大化したい、未経験・地方も含めて広く探したい、スピード重視で進めたい。</p>
            <p><span className="font-bold">IT特化エージェントが向くケース：</span>技術的に深い選考対策、ハイクラス・高年収を軸に厳選したい。</p>
            <p><span className="font-bold">併用パターン：</span>ワークポートで母数を確保しつつ、<Link href="/review/levtech/" className="text-petrol hover:underline">レバテックキャリア</Link>や<Link href="/review/geekly/" className="text-petrol hover:underline">Geekly</Link>で専門的な提案・対策を受ける二刀流が、ミドル層には効率的です。</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "ワークポート vs マイナビIT AGENT", href: "/compare/workport-vs-mynavi/" },
              { name: "Geekly vs ワークポート", href: "/compare/geekly-vs-workport/" },
              { name: "30代向けエージェント比較", href: "/compare/30s-agents/" },
              { name: "未経験向けエージェント比較", href: "/compare/inexperienced/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
                {item.name} →
              </Link>
            ))}
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
          <h2 className="text-xl font-bold mb-3">ワークポートに無料相談する</h2>
          <p className="text-blue-100 text-sm mb-4">求人量とスピードで選択肢を広げたい方へ。まずは無料相談から始めてみませんか？</p>
          <a href="#" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">無料カウンセリングを予約する</a>
        </section>

        {/* 関連記事 */}
        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedArticles.map((item, i) => (
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
