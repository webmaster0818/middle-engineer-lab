import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "Findy（ファインディ）の評判・口コミ｜30代40代エンジニアの本音";
const DESCRIPTION =
  "FindyはGitHub連携でスキル偏差値を出すスカウト型サービス。30代40代エンジニア目線で評判・口コミ、掲載企業の質、スカウトが来ない原因、年齢とコード評価の関係を出典付きで検証します。";
const URL = "/review/findy/";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "結論サマリ（どんな人向けか）" },
  { id: "type", label: "Findyの仕組み（スカウト型）と他サービスとの違い" },
  { id: "basic", label: "基本データ表（2026年6月時点）" },
  { id: "strength", label: "特徴・強み" },
  { id: "good", label: "良い評判の傾向" },
  { id: "bad", label: "悪い評判の傾向と対処法" },
  { id: "middle", label: "30代・40代エンジニアの活用戦略" },
  { id: "fit", label: "向いている人／向いていない人" },
  { id: "flow", label: "登録からスカウト・内定までの流れ" },
  { id: "compare", label: "LAPRAS・Forkwellとの使い分け" },
  { id: "faq", label: "よくある質問" },
];

const basicData: [string, string][] = [
  ["運営会社", "ファインディ株式会社（2016年創業）"],
  ["サービス種別", "スカウト型（GitHub連携によるスキル偏差値算出）"],
  ["掲載企業数", "800社以上（厳選・公式 2024年7月時点）"],
  ["登録者数", "二次情報で幅があり公式値は確認不可"],
  ["求人数", "公式LPで非明示＝確認不可"],
  ["得意領域", "モダン言語（Go／TypeScript／Python／Ruby等）・Web自社開発"],
  ["対応エリア", "首都圏中心（地方求人は少なめという傾向）"],
  ["料金", "求職者無料"],
];

const goodReviews = [
  {
    title: "GitHubの実績で客観的に評価される",
    body: "X（旧Twitter）や各種エンジニア向け口コミでは、GitHubの活動を連携することでスキル偏差値という形で実力が可視化され、職務経歴書では伝わりにくい技術力を客観的に示せたという傾向の声が見られる。書類選考で経歴の見栄えに左右されがちな従来型と異なる点を評価する声がある。",
  },
  {
    title: "スカウトしてくる企業の質が高い",
    body: "はてなブックマークやエンジニアブログ等では、掲載企業が厳選されている（公式で800社以上・2024年7月）ためか、届くスカウトがモダンな技術スタックの自社開発企業中心で、ミスマッチが少なかったという傾向の感想が確認できる。",
  },
  {
    title: "アメリカ式のカジュアル面談・壁打ちサポート",
    body: "Findyはユーザーサポートやキャリアの壁打ちに力を入れているとされ、口コミでも担当との面談で自分の市場価値や次のキャリアを整理できたという傾向の声が見られる。すぐ転職しない情報収集目的でも使えたという感想がある。",
  },
];

const badReviews = [
  {
    title: "GitHubの活動が少ないとスカウトが来ない",
    body: "Findyの評価軸はGitHub連携が中心のため、業務でプライベートリポジトリしか触っていない・OSS活動やパブリックなコードが少ない人には、スカウトがほとんど来なかったという傾向の声がX等で見られる。",
    cope: "公開できる範囲でサンプルコードや個人開発のリポジトリをGitHubに置き、活動量を増やしておく。業務都合でコードを公開できない場合は、GitHub中心でないLAPRASや、エージェント型のレバテックキャリアを併用するのが現実的。",
  },
  {
    title: "地方・非Web系の求人が少ない",
    body: "掲載企業が首都圏のWeb自社開発企業に偏る傾向があり、地方在住者やSIer・組み込みなど非Web領域を志向する人には選択肢が少なかったという傾向の声が見られる。",
    cope: "フルリモート可の求人に絞って探すか、地方・SIer求人も扱う総合型エージェントを併用する。Findyはあくまでモダン技術の即戦力枠と割り切る。",
  },
  {
    title: "スキル偏差値が上がらないと焦る",
    body: "スキル偏差値という数値が出る性質上、想定より低く出て落ち込んだ、数値に一喜一憂してしまうという傾向の声がある。",
    cope: "偏差値はGitHubの公開活動を元にした一指標に過ぎず、実務での設計・マネジメント経験は反映されにくい。数値は参考程度に捉え、面談で実務経験を直接アピールするとよい。",
  },
];

const fitYes = [
  "Go／TypeScript／Python／Ruby等のモダン技術で開発している現役エンジニア",
  "GitHubで公開できるコードやOSS活動がある",
  "Web系自社開発企業に転職したい",
  "コードや技術力で客観的に評価されたい",
  "首都圏勤務またはフルリモートを希望している",
];

const fitNo = [
  "GitHubに公開できる活動がほとんどない",
  "マネジメント専業でコードをほぼ書いていない",
  "地方の対面サポートやSIer・非Web求人を最優先したい",
  "担当者がすべて求人提案してくれるエージェント型を希望する",
];

const flow = [
  {
    step: "STEP1",
    title: "無料登録・GitHub連携",
    body: "公式サイトから登録し、GitHubアカウントを連携。連携した公開活動をもとにスキル偏差値が算出される。在職中・情報収集目的の登録も可能。",
  },
  {
    step: "STEP2",
    title: "プロフィール・希望条件の入力",
    body: "経験技術・希望年収・勤務地・働き方（リモート可否など）を入力。情報を充実させるほどマッチ精度が上がる。",
  },
  {
    step: "STEP3",
    title: "企業からのスカウト受信",
    body: "条件に合う企業からスカウトが届く。掲載企業は厳選されているため、モダン技術の自社開発企業からのスカウトが中心になる傾向がある。",
  },
  {
    step: "STEP4",
    title: "カジュアル面談・選考",
    body: "興味のあるスカウトにはカジュアル面談で社風や技術スタックを確認してから選考に進める。Findy側のキャリア壁打ちサポートを受けられる場合がある。",
  },
  {
    step: "STEP5",
    title: "内定・条件確認・入社",
    body: "内定後は条件を確認し入社。年収交渉は基本的に自分主導になるため、相場を把握したうえで臨むとよい。",
  },
];

const faqs = [
  {
    q: "FindyはGitHubがないと使えませんか？",
    a: "GitHub連携によるスキル偏差値がFindyの中核機能のため、公開活動が少ないとスカウトが届きにくくなります。業務でコードを公開できない場合は、Web全体の発信を評価するLAPRASや、担当が提案するエージェント型のレバテックキャリアの併用が現実的です。",
  },
  {
    q: "リクルートダイレクトスカウトのようなハイクラススカウトと何が違いますか？",
    a: "リクルートダイレクトスカウトはヘッドハンターや企業がレジュメを見て年収帯でスカウトする総合ハイクラス型です。FindyはGitHubの技術活動を偏差値化してエンジニアの実力を可視化する点が異なり、IT・Web自社開発に特化しています。評価される軸が『経歴・年収』か『コード』かが最大の違いです。",
  },
  {
    q: "40代でもスカウトは来ますか？",
    a: "FindyはGitHubの活動内容で評価される性質があるため、40代でも現役でモダン技術を使い公開活動がある方にはスカウトが届く傾向があります。年齢より技術活動が重視されやすい点はミドル層の現役エンジニアにとって有利な面です。一方、コードを書かないマネジメント専業の方には不向きです。",
  },
  {
    q: "スカウトが全然来ません。原因は？",
    a: "GitHubの公開活動が少ない、希望条件が狭すぎる、プロフィールが未記入、地方・非Web志向で対象求人が少ない、などが考えられます。公開リポジトリの充実とプロフィール記入を見直し、それでも届かない場合は他サービスとの併用を検討してください。",
  },
  {
    q: "登録は無料ですか？",
    a: "求職者は無料です。費用は採用企業側が負担する仕組みです。",
  },
  {
    q: "他社と併用してもいいですか？",
    a: "併用は可能です。GitHub中心のFindyと、Web全体の発信を評価するLAPRAS、求人数の多いレバテックキャリアを組み合わせると、評価軸の異なる複数ルートから機会を得られます。",
  },
];

const related = [
  { name: "LAPRASの評判・口コミ", href: "/review/lapras/" },
  { name: "Forkwellの評判・口コミ", href: "/review/forkwell/" },
  { name: "スカウト型サービスの使い方", href: "/knowledge/scout/" },
  { name: "ポートフォリオの作り方", href: "/knowledge/portfolio/" },
  { name: "Go言語エンジニアの転職", href: "/skill/go/" },
  { name: "30代エンジニア向けエージェント比較", href: "/compare/30s-agents/" },
];

export default function FindyReview() {
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
          { name: "Findy（ファインディ）" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Findy（ファインディ）の評判・口コミ【30代・40代エンジニア向け】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ GitHub連携スカウト型サービスの実力を口コミの傾向と公開データで検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          Findy（ファインディ）は、GitHubを連携してスキル偏差値を算出し、企業からスカウトを受け取るスカウト型のサービスです。本記事では「評判・口コミ」を実際のエンジニア向け口コミプラットフォームの傾向と、公式が公表する数値に基づいて、30代・40代エンジニアの視点で整理します。架空の体験談やスコアの転載は行わず、出典のある情報のみを扱います。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "Findy（ファインディ）公式サイト",
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
              <span className="font-bold">総合評価：モダン技術を使う現役エンジニアの『実力評価』に強い</span>。一言でいえば「GitHubで公開できる活動があり、コードで評価されてWeb自社開発企業に行きたいハイスキル層」向けのスカウト型サービスです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・GitHub連携でスキル偏差値を可視化。掲載企業は800社以上に厳選（公式・2024年7月）。</li>
              <li>・40代でもGitHubが活発なら、年齢より技術活動が評価されやすい。</li>
              <li>・一方でGitHub活動が乏しい人・マネジメント専業・地方非Web志向には不向き。</li>
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
            Findyの仕組み（スカウト型）と他サービスとの違い
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              Findyは、担当アドバイザーが求人を提案する「エージェント型」ではなく、登録者のプロフィールやGitHub活動を見た企業からスカウトが届く「スカウト型」です。エージェント型の
              <Link href="/review/recruit-it/" className="text-petrol hover:underline">リクルートエージェント</Link>
              などとは、求人にたどり着く経路が根本的に異なります。
            </p>
            <p>
              また同じスカウト・可視化系でも、評価の軸はサービスごとに違います。<span className="font-bold text-slate-700">FindyはGitHub中心でスキル偏差値を算出</span>するのに対し、
              <Link href="/review/lapras/" className="text-petrol hover:underline">LAPRAS</Link>
              はGitHubに加えQiita・note・X・connpassなどWeb全体の発信をAIが解析します。
              <Link href="/review/forkwell/" className="text-petrol hover:underline">Forkwell</Link>
              はポートフォリオとコミュニティ（勉強会）に強みがあります。さらにスキルチェックの解答で評価する
              <Link href="/review/paiza/" className="text-petrol hover:underline">paiza</Link>
              とも評価軸が異なります。「自分の強みがどの軸で最も光るか」で選ぶのが要点です。
            </p>
            <p>
              なお、年収帯で企業・ヘッドハンターがスカウトする総合ハイクラス型の
              <Link href="/review/recruit-it/" className="text-petrol hover:underline">リクルート系のスカウトサービス</Link>
              とも仕組みが異なります。Findyはあくまでエンジニアの技術活動を可視化する点に特化しています。
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
            ※掲載企業数は公式公表値（2024年7月時点）です。登録者数は二次情報で幅があり公式値は確認できませんでした。求人数は公式LPで非明示のため確認不可とし、断定を避けています。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Findyの特徴・強み</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. GitHub連携でスキルを偏差値化</h3>
              <p className="text-sm text-petrol-deep">
                FindyはGitHubの公開活動を解析し、スキルを偏差値という形で可視化します。職務経歴書の書き方や面接の話し方に左右されず、コードという客観的な成果物で評価される点が最大の特徴です。技術力に自信があるが書類の見栄えで損をしがちな人に向いています。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 掲載企業が厳選されている</h3>
              <p className="text-sm text-petrol-deep">
                公式によると掲載企業は800社以上に厳選されています（2024年7月時点）。Go・TypeScript・Python・Rubyなどモダンな技術を扱うWeb自社開発企業が中心で、届くスカウトの質が高いという傾向の声が見られます。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. キャリアの壁打ちサポート</h3>
              <p className="text-sm text-petrol-deep">
                スカウトを待つだけでなく、Findy側のサポートで自分の市場価値や次のキャリアを整理できるという声があります。すぐに転職しない情報収集目的でも、市場での立ち位置を確認する用途で使えます。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 求職者は完全無料</h3>
              <p className="text-sm text-petrol-deep">
                求職者の利用は無料です。費用は採用企業側が負担します（確認できた範囲）。リスクなく自分の技術力の市場評価を試せる点はミドル層にも使いやすいポイントです。
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
            30代・40代エンジニアがFindyを使う場合の戦略
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              当サイトはミドルエンジニアの転職を扱う立場から、年代別に使い方を整理します。Findyの評価軸は「現在のコード活動」であり、経歴の長さや年齢そのものより、いま手を動かしているかが効いてくる点がミドル層にとって重要です。
            </p>
            <p>
              <span className="font-bold text-slate-700">30代の場合：</span>
              モダン技術で開発している現役層には最も相性が良い年代です。GitHubの公開活動を整え、スキル偏差値という客観指標を武器に、書類選考のハンデなしで自社開発企業の選考に進めます。すぐ転職しなくても、市場価値の定点観測として登録しておく価値があります。
            </p>
            <p>
              <span className="font-bold text-slate-700">40代の場合：</span>
              「40代は書類で落とされやすい」という不安がある人ほど、コードで評価されるFindyの仕組みは追い風になり得ます。現役でモダン技術を触り、GitHubで活動があるなら、年齢より技術が評価されやすいのが強みです。逆に、近年はマネジメント中心でコードをほぼ書いていない場合は、スカウトが届きにくく不向きです。その場合はマネジメント経験を評価する
              <Link href="/compare/highclass/" className="text-petrol hover:underline">ハイクラス向けサービス</Link>
              や、担当が提案する
              <Link href="/review/levtech/" className="text-petrol hover:underline">レバテックキャリア</Link>
              の併用が現実的です。
            </p>
            <p>
              いずれの年代でも、Findy単独に依存せず、評価軸の異なるサービスと組み合わせるのが堅実です。
              <Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">複数エージェント併用のコツ</Link>
              や
              <Link href="/knowledge/scout/" className="text-petrol hover:underline">スカウト型サービスの使い方</Link>
              もあわせて参考にしてください。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">LAPRAS・Forkwellとの使い分け</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Findyと評価軸が近いサービスは、混同せず違いを押さえて使い分けると効果的です。Findyは<span className="font-bold">GitHub中心</span>、LAPRASは<span className="font-bold">Web全体の発信をAI解析</span>、Forkwellは<span className="font-bold">ポートフォリオ＋コミュニティ</span>が軸です。GitHubの活動が豊富ならFindy、技術記事や登壇など発信が多いならLAPRAS、学習文化やコミュニティとの接点を重視するならForkwell、という整理が目安になります。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/review/lapras/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              LAPRASの評判・口コミ →
            </Link>
            <Link href="/review/forkwell/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              Forkwellの評判・口コミ →
            </Link>
            <Link href="/review/levtech/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              レバテックキャリアの評判・口コミ →
            </Link>
            <Link href="/compare/30s-agents/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              30代エンジニア向けエージェント比較 →
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
          <h2 className="text-xl font-bold mb-3">Findyで市場価値を確認する</h2>
          <p className="text-blue-100 text-sm mb-4">
            GitHubを連携して、あなたの技術力がどう評価されるか確かめてみませんか？
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
