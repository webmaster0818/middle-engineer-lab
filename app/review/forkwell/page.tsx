import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "Forkwellの評判・口コミ｜30代40代エンジニアの本音と使い方";
const DESCRIPTION =
  "Forkwellはスカウト・求人掲載・ポートフォリオ・コミュニティを備えたエンジニア向けサービス。30代40代目線で評判・口コミ、求人の質、スカウトが来ない時の対処、併用前提の使い方を出典付きで解説します。";
const URL = "/review/forkwell/";

export const metadata: Metadata = {
  alternates: { canonical: "/review/forkwell/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "結論サマリ（どんな人向けか）" },
  { id: "type", label: "Forkwellの仕組みと他サービスとの違い" },
  { id: "basic", label: "基本データ表（2026年6月時点）" },
  { id: "strength", label: "特徴・強み" },
  { id: "good", label: "良い評判の傾向" },
  { id: "bad", label: "悪い評判の傾向と対処法" },
  { id: "middle", label: "30代・40代エンジニアの活用戦略" },
  { id: "fit", label: "向いている人／向いていない人" },
  { id: "flow", label: "登録からスカウト・内定までの流れ" },
  { id: "compare", label: "Findy・LAPRASとの使い分け" },
  { id: "faq", label: "よくある質問" },
];

const basicData: [string, string][] = [
  ["運営会社", "株式会社grooves"],
  ["サービス種別", "スカウト＋求人掲載（Forkwell Jobs）＋ポートフォリオ＋コミュニティ"],
  ["登録者数", "約59,000〜60,000人（二次情報・時点要確認）"],
  ["求人数", "媒体間で数値が割れ確認不可（質重視の方針）"],
  ["コミュニティ", "勉強会・イベントを200本超開催（コミュニティ運営に強み）"],
  ["得意領域", "中〜上級エンジニア・Web自社開発"],
  ["対応エリア", "首都圏中心"],
  ["料金", "求職者無料"],
];

const goodReviews = [
  {
    title: "スカウト文面の質が高い",
    body: "X（旧Twitter）やエンジニアブログ等では、Forkwell経由で届くスカウトはテンプレートの一斉送信ではなく、プロフィールやポートフォリオを読み込んだ個別性の高い文面が多いという傾向の声が見られる。やり取りの初手で温度感が伝わりやすいという感想がある。",
  },
  {
    title: "コミュニティ・勉強会との接点",
    body: "Forkwellは技術勉強会やイベントを多数（200本超とされる）運営しており、学習や情報交換の場として価値を感じたという傾向の声が確認できる。転職活動と並行して技術コミュニティに触れられる点を評価する声がある。",
  },
  {
    title: "ポートフォリオで実績を整理できる",
    body: "はてなブックマーク等では、ポートフォリオ機能で自分の経歴やスキルを整理でき、そのまま企業に見てもらえる導線が便利だったという傾向の感想が見られる。発信や学習を継続している人ほど相性が良いという声がある。",
  },
];

const badReviews = [
  {
    title: "求人数が大手より少ない",
    body: "質を重視する方針もあり、求人の絶対数は大手総合サービスより少ないという傾向の声が見られる。希望条件によっては選択肢が限られたという感想がある。",
    cope: "Forkwell単独ではなく、求人数の多いレバテックキャリアやGitHub中心のFindyと併用し、母数を補うのが現実的。Forkwellは質の高いスカウトと出会う枠として割り切る。",
  },
  {
    title: "スカウトが来ないことがある",
    body: "プロフィールやポートフォリオの充実度が低いと、スカウトがほとんど届かなかったという傾向の声がX等で見られる。発信や実績の蓄積が前提になりやすい。",
    cope: "ポートフォリオを具体的に作り込み、使用技術・成果物・関わったプロジェクトを明記する。コミュニティへの参加で接点を増やすのも有効。届かない場合は他サービスを並走させる。",
  },
  {
    title: "首都圏に求人が集中している",
    body: "Web自社開発・首都圏の求人が中心で、地方在住者やリモート以外を希望する人には選択肢が少なかったという傾向の声がある。",
    cope: "フルリモート可の求人に絞るか、地方求人も扱う総合型エージェントを併用する。地域を最優先する場合はForkwellをサブに据える。",
  },
];

const fitYes = [
  "技術発信や学習を継続している中〜上級エンジニア",
  "テンプレでない質の高いスカウトを受け取りたい",
  "コミュニティ・勉強会を通じて情報交換したい",
  "ポートフォリオで実績を整理してアピールしたい",
  "Web自社開発・首都圏勤務またはリモートを希望",
];

const fitNo = [
  "とにかく求人数の多さを最優先したい",
  "発信やポートフォリオを作る時間が取れない",
  "地方の対面サポートや非Web求人を最優先したい",
  "1社だけで完結させたい（単独利用は非推奨）",
];

const flow = [
  {
    step: "STEP1",
    title: "無料登録・プロフィール作成",
    body: "公式サイトから登録し、経験技術や希望条件を入力。在職中・情報収集目的の登録も可能。",
  },
  {
    step: "STEP2",
    title: "ポートフォリオの整備",
    body: "成果物・使用技術・関わったプロジェクトをポートフォリオに整理。ここを充実させるほどスカウトの質と量が変わる。",
  },
  {
    step: "STEP3",
    title: "スカウト受信／求人検索",
    body: "企業からのスカウトを受け取るほか、Forkwell Jobsで自分から求人を探して応募することもできる。スカウト文面の個別性が高い傾向がある。",
  },
  {
    step: "STEP4",
    title: "カジュアル面談・選考",
    body: "興味のある企業とはカジュアル面談で技術スタックや社風を確認してから選考へ。コミュニティ経由で企業文化を事前に把握できる場合もある。",
  },
  {
    step: "STEP5",
    title: "内定・条件確認・入社",
    body: "内定後は条件を確認して入社。年収交渉は自分主導になりやすいため、相場を把握しておくとよい。",
  },
];

const faqs = [
  {
    q: "Forkwellは1社だけで使っても十分ですか？",
    a: "求人数が大手より少なく質重視の方針のため、単独利用より併用が推奨されます。求人数の多いレバテックキャリアや、GitHub中心のFindyと組み合わせ、Forkwellは質の高いスカウトと出会う枠として使うのが現実的です。",
  },
  {
    q: "FindyやLAPRASと何が違いますか？",
    a: "FindyはGitHubのスキル偏差値、LAPRASはWeb全体の発信のAI解析が軸です。Forkwellはポートフォリオとコミュニティ（勉強会）に強みがあり、スカウト文面の質も評価されています。GitHub活動が豊富ならFindy、発信が多いならLAPRAS、学習文化・コミュニティとの接点を重視するならForkwellという整理が目安です。",
  },
  {
    q: "スカウトが来ません。どうすればいいですか？",
    a: "ポートフォリオの充実度がスカウト数に直結しやすいため、成果物・使用技術・実績を具体的に記載してください。コミュニティへの参加も接点を増やします。それでも届きにくい場合は、評価軸の異なる他サービスを並走させましょう。",
  },
  {
    q: "40代でも使えますか？",
    a: "技術発信や学習を継続している中〜上級層であれば、年齢より中身が評価されやすい傾向があります。ただし求人が首都圏のWeb自社開発に偏るため、求人の幅を確保するには総合型エージェントの併用が堅実です。",
  },
  {
    q: "登録は無料ですか？",
    a: "求職者は無料です。費用は採用企業側が負担する仕組みです（確認できた範囲）。",
  },
  {
    q: "登録者数や求人数はどのくらいですか？",
    a: "登録者数は約59,000〜60,000人とされますが二次情報で時点の確認が必要です。求人数は媒体間で数値が割れており確認できませんでした。質を重視する方針のため、数の多さより求人の中身で判断するのが適しています。",
  },
];

const related = [
  { name: "Findy（ファインディ）の評判・口コミ", href: "/review/findy/" },
  { name: "LAPRASの評判・口コミ", href: "/review/lapras/" },
  { name: "スカウト型サービスの使い方", href: "/knowledge/scout/" },
  { name: "ポートフォリオの作り方", href: "/knowledge/portfolio/" },
  { name: "副業・サイドプロジェクトの活かし方", href: "/knowledge/side-project/" },
  { name: "複数エージェント併用のコツ", href: "/knowledge/multiple-agents/" },
];

export default function ForkwellReview() {
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
          { name: "Forkwell" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Forkwellの評判・口コミ【30代・40代エンジニア向け】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ スカウト＋ポートフォリオ＋コミュニティ型サービスの実力を口コミの傾向と公開データで検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          Forkwell（フォークウェル）は、株式会社groovesが運営する、スカウト・求人掲載（Forkwell Jobs）・ポートフォリオ・技術コミュニティを併せ持つエンジニア向けサービスです。本記事では「評判・口コミ」を実際の口コミプラットフォームの傾向と公開データに基づいて、30代・40代エンジニアの視点で整理します。架空の体験談やスコアの転載は行わず、出典のある情報のみを扱います。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "Forkwell（grooves）公式サイト",
            "X（旧Twitter）等のエンジニア投稿",
            "はてなブックマーク／エンジニアブログ",
            "複数転職メディア集計値",
          ]}
        />

        {/* 結論サマリ */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：こんな人におすすめ</h2>
            <p className="text-sm text-blue-900 mb-3">
              <span className="font-bold">総合評価：発信・学習文化に合う中〜上級層の『質重視』の転職に向く</span>。一言でいえば「ポートフォリオやコミュニティを活かして、質の高いスカウトと出会いたい中〜上級エンジニア」向けのサービスです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・スカウト文面の質とコミュニティ（勉強会200本超）が強み。量より質。</li>
              <li>・登録者は約59,000〜60,000人とされる（二次情報・時点要確認）。求人数は確認不可。</li>
              <li>・求人数の多さを最優先する人・地方非Web志向には不向き。単独利用は非推奨。</li>
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

        {/* 仕組みと違い */}
        <section id="type" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            Forkwellの仕組みと他サービスとの違い
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              Forkwellは、スカウトを受け取れるだけでなく、Forkwell Jobsで自分から求人を探したり、ポートフォリオで実績を整理したり、勉強会などのコミュニティに参加したりできる複合型のサービスです。担当アドバイザーが求人を提案する
              <Link href="/review/levtech/" className="text-petrol hover:underline">レバテックキャリア</Link>
              のようなエージェント型とは性質が異なります。
            </p>
            <p>
              同じスカウト・可視化系でも評価軸が違う点に注意が必要です。<span className="font-bold text-slate-700">Forkwellはポートフォリオ＋コミュニティ</span>が軸であるのに対し、
              <Link href="/review/findy/" className="text-petrol hover:underline">Findy</Link>
              はGitHubのスキル偏差値、
              <Link href="/review/lapras/" className="text-petrol hover:underline">LAPRAS</Link>
              はWeb全体の発信をAI解析します。さらにスキルチェックの解答で評価する
              <Link href="/review/paiza/" className="text-petrol hover:underline">paiza</Link>
              とも評価の入り口が異なります。「自分の強みがどの軸で最も伝わるか」で選ぶのが要点です。
            </p>
          </div>
        </section>

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
            ※登録者数は二次情報で幅があり時点の確認が必要です。求人数は媒体間で数値が割れており確認できなかったため、断定を避けています。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Forkwellの特徴・強み</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. スカウト文面の質</h3>
              <p className="text-sm text-petrol-deep">
                プロフィールやポートフォリオを読み込んだ個別性の高いスカウトが届く傾向があり、一斉送信のテンプレに疲れた人から評価されています。最初のやり取りで企業の本気度が伝わりやすいのが特徴です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. コミュニティ・勉強会の運営</h3>
              <p className="text-sm text-petrol-deep">
                Forkwellは技術勉強会やイベントを多数（200本超とされる）運営しており、学習・情報交換の場としての価値があります。転職活動と並行して技術コミュニティに触れられる点は、継続学習を重視するミドル層と相性が良いといえます。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. ポートフォリオで実績を整理</h3>
              <p className="text-sm text-petrol-deep">
                ポートフォリオ機能で経歴・スキル・成果物を整理し、そのまま企業に見てもらえる導線があります。発信や学習を継続している人ほど、強みが伝わりやすい設計です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 求職者は無料</h3>
              <p className="text-sm text-petrol-deep">
                求職者の利用は無料です（確認できた範囲）。費用は採用企業側が負担します。質の高いスカウトと出会う枠として、リスクなく試せます。
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

        {/* 30代40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            30代・40代エンジニアがForkwellを使う場合の戦略
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              当サイトはミドルエンジニアの転職を扱う立場から、年代別に使い方を整理します。Forkwellは発信・学習・コミュニティとの相性が良いサービスで、量より質を求める人に向きます。単独で完結させるより、求人数を補う併用前提で使うのが現実的です。
            </p>
            <p>
              <span className="font-bold text-slate-700">30代の場合：</span>
              技術発信や個人開発を続けている人なら、ポートフォリオを起点に質の高いスカウトを受けやすい年代です。コミュニティ参加で企業文化を事前に知れるのも利点。求人の母数は
              <Link href="/review/levtech/" className="text-petrol hover:underline">レバテックキャリア</Link>
              などで補うとバランスが取れます。
            </p>
            <p>
              <span className="font-bold text-slate-700">40代の場合：</span>
              継続学習や発信を続けている中〜上級層であれば、年齢より中身で評価されやすいのが強みです。ただし求人が首都圏のWeb自社開発に偏るため、選択肢の幅は
              <Link href="/compare/40s-agents/" className="text-petrol hover:underline">40代向けエージェント</Link>
              で補完するのが堅実。マネジメント経験を前面に出したい場合は
              <Link href="/compare/highclass/" className="text-petrol hover:underline">ハイクラス向けサービス</Link>
              も検討してください。
            </p>
            <p>
              いずれの年代でも、Forkwellは「質の高い出会いの枠」と位置づけ、
              <Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">複数エージェント併用のコツ</Link>
              を踏まえて使うのがおすすめです。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">登録からスカウト・内定までの流れ</h2>
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

        {/* 比較・使い分け */}
        <section id="compare" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Findy・LAPRASとの使い分け</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Forkwellと近い領域のサービスは、評価軸の違いを押さえて使い分けると効果的です。Forkwellは<span className="font-bold">ポートフォリオ＋コミュニティ</span>、Findyは<span className="font-bold">GitHubのスキル偏差値</span>、LAPRASは<span className="font-bold">Web全体の発信のAI解析</span>が軸です。GitHub活動が豊富ならFindy、技術記事や登壇など発信が多いならLAPRAS、学習文化・コミュニティとの接点や質の高いスカウトを重視するならForkwell、という整理が目安になります。いずれも単独より併用が前提です。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/review/findy/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              Findyの評判・口コミ →
            </Link>
            <Link href="/review/lapras/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              LAPRASの評判・口コミ →
            </Link>
            <Link href="/review/levtech/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              レバテックキャリアの評判・口コミ →
            </Link>
            <Link href="/compare/40s-agents/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              40代エンジニア向けエージェント比較 →
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
          <h2 className="text-xl font-bold mb-3">Forkwellで質の高いスカウトを受け取る</h2>
          <p className="text-blue-100 text-sm mb-4">
            ポートフォリオを整えて、あなたに合った企業からのスカウトを待ってみませんか？
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
