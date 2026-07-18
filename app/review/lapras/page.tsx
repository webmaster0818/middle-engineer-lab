import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "LAPRASの評判・口コミ｜30代40代エンジニアの本音と使い方";
const DESCRIPTION =
  "LAPRASはGitHubやQiita・X・connpassなどWeb全体の発信をAIが解析するスカウト型。30代40代目線で評判・口コミ、スコアの仕組み、発信がない時の対処、Findyとの違いを出典付きで解説します。";
const URL = "/review/lapras/";

export const metadata: Metadata = {
  alternates: { canonical: "/review/lapras/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "結論サマリ（どんな人向けか）" },
  { id: "type", label: "LAPRASの仕組みと他サービスとの違い" },
  { id: "basic", label: "基本データ表（2026年6月時点）" },
  { id: "strength", label: "特徴・強み" },
  { id: "good", label: "良い評判の傾向" },
  { id: "bad", label: "悪い評判の傾向と対処法" },
  { id: "middle", label: "30代・40代エンジニアの活用戦略" },
  { id: "fit", label: "向いている人／向いていない人" },
  { id: "flow", label: "登録からスカウト・内定までの流れ" },
  { id: "compare", label: "Findy・Forkwellとの使い分け" },
  { id: "faq", label: "よくある質問" },
];

const basicData: [string, string][] = [
  ["運営会社", "LAPRAS株式会社（2019年）"],
  ["サービス種別", "AI解析×ポートフォリオ自動生成のスカウト型"],
  ["解析対象", "GitHub・Qiita・note・X（旧Twitter）・connpass等を自動クロール"],
  ["導入企業数", "700社以上（二次情報）"],
  ["求人数", "公式LPで非明示＝確認不可"],
  ["スコアの目安", "平均3.0／上位約4%が3.5以上（二次情報）"],
  ["対応エリア", "首都圏中心"],
  ["料金", "求職者無料"],
];

const goodReviews = [
  {
    title: "発信が自動でポートフォリオ化される",
    body: "X（旧Twitter）やエンジニアブログ等では、GitHubだけでなくQiitaやnote、登壇（connpass）などWeb上の発信をAIが自動でクロールしてポートフォリオ化してくれるため、手間をかけずに実績がまとまったという傾向の声が見られる。自分で職務経歴を整理する負担が軽いという感想がある。",
  },
  {
    title: "マッチ精度が高いと感じる",
    body: "はてなブックマーク等では、Web全体の発信内容を踏まえたスカウトが届くため、技術領域や興味関心に合った企業からの打診が多くミスマッチが少なかったという傾向の感想が確認できる。",
  },
  {
    title: "スコアで自分の立ち位置がわかる",
    body: "技術・ビジネス・影響力などをスコア化する仕組みがあり、自分の市場での立ち位置を客観的に把握できたという傾向の声がある（平均3.0・上位約4%が3.5以上とされる二次情報）。すぐ転職しなくても定点観測に使えるという感想がある。",
  },
];

const badReviews = [
  {
    title: "発信が少ないとスコアが伸びない",
    body: "LAPRASはWeb上の発信を解析する性質のため、GitHub活動・技術記事・登壇などのアウトプットが少ない人はスコアが伸びず、スカウトも届きにくかったという傾向の声がX等で見られる。",
    cope: "QiitaやnoteでのアウトプットやOSS活動、connpassでの登壇など、公開できる発信を少しずつ蓄積する。発信の時間が取れない場合は、担当が提案するエージェント型のレバテックキャリアを併用するのが現実的。",
  },
  {
    title: "地方・非Web系の求人が少ない",
    body: "導入企業は首都圏のWeb自社開発が中心の傾向で、地方在住者やSIer・組み込みなど非Web志向の人には選択肢が少なかったという傾向の声がある。",
    cope: "フルリモート可の求人に絞るか、地方・SIer求人も扱う総合型エージェントを併用する。LAPRASはモダン技術・発信重視の枠と割り切る。",
  },
  {
    title: "自動クロールの内容にズレを感じることがある",
    body: "自動でWeb上の情報を集める仕組み上、意図と異なるアカウントや古い情報が反映されたと感じたという傾向の声が一部見られる。",
    cope: "プロフィール上で連携する情報や公開範囲を確認・調整し、最新の実績が反映されるよう手動で補足する。誤った紐付けがあれば設定から修正するとよい。",
  },
];

const fitYes = [
  "技術記事・OSS・登壇など発信のアウトプットがあるエンジニア",
  "GitHub以外（Qiita・note・X・connpass等）の発信も評価されたい",
  "手間をかけずに実績をポートフォリオ化したい",
  "Web自社開発・モダン技術の企業に行きたい",
  "市場での自分の立ち位置を客観的に把握したい",
];

const fitNo = [
  "Web上の発信・アウトプットがほとんどない",
  "発信を増やす時間が取れない",
  "地方の対面サポートやSIer・非Web求人を最優先したい",
  "担当者がすべて求人提案してくれるエージェント型を希望する",
];

const flow = [
  {
    step: "STEP1",
    title: "無料登録・各サービス連携",
    body: "公式サイトから登録し、GitHub・Qiita・note・X・connpass等を連携。AIがWeb上の発信を自動でクロールしてポートフォリオを生成する。",
  },
  {
    step: "STEP2",
    title: "ポートフォリオ・スコアの確認",
    body: "自動生成されたポートフォリオとスコア（技術・影響力など）を確認。内容にズレがあれば公開範囲や連携を調整する。",
  },
  {
    step: "STEP3",
    title: "企業からのスカウト受信",
    body: "発信内容を踏まえた企業からスカウトが届く。Web全体の活動を反映するため、技術領域や関心に合った打診が来やすい傾向がある。",
  },
  {
    step: "STEP4",
    title: "カジュアル面談・選考",
    body: "興味のあるスカウトはカジュアル面談で社風・技術スタックを確認してから選考へ。発信内容が会話のきっかけになりやすい。",
  },
  {
    step: "STEP5",
    title: "内定・条件確認・入社",
    body: "内定後は条件を確認して入社。年収交渉は自分主導になりやすいため、相場を把握しておくとよい。",
  },
];

const faqs = [
  {
    q: "LAPRASはFindyと何が違いますか？",
    a: "FindyはGitHub連携によるスキル偏差値が中心ですが、LAPRASはGitHubに加えQiita・note・X・connpassなどWeb全体の発信をAIが解析する点が差別化要素です。GitHubの活動が中心なら Findy、技術記事や登壇など発信が幅広いなら LAPRAS が向きます。両者の併用で評価軸を広げる使い方も有効です。",
  },
  {
    q: "発信をしていなくても使えますか？",
    a: "Web上の発信を解析する仕組みのため、アウトプットが少ないとスコアが伸びにくくスカウトも届きにくくなります。発信を少しずつ蓄積するか、発信に依存しないエージェント型（レバテックキャリアなど）の併用を検討してください。",
  },
  {
    q: "スコアはどのくらいが目安ですか？",
    a: "二次情報では平均3.0、上位約4%が3.5以上とされています。ただしこれは参考値であり、スコアそのものより、発信内容に合った企業と出会えるかが重要です。スコアは市場での立ち位置を把握する目安として捉えるとよいでしょう。",
  },
  {
    q: "40代でもスカウトは来ますか？",
    a: "技術記事・OSS・登壇などの実績がある方であれば、年齢より発信内容が評価されやすい傾向があります。一方で求人が首都圏のWeb自社開発に偏るため、求人の幅を確保するには総合型エージェントの併用が堅実です。",
  },
  {
    q: "登録は無料ですか？",
    a: "求職者は無料です。費用は採用企業側が負担する仕組みです（確認できた範囲）。",
  },
  {
    q: "導入企業数や求人数はどのくらいですか？",
    a: "導入企業は700社以上とされますが二次情報です。求人数は公式LPで非明示のため確認できませんでした。数値より、自分の発信領域に合った企業からスカウトが届くかどうかで判断するのが適しています。",
  },
];

const related = [
  { name: "Findy（ファインディ）の評判・口コミ", href: "/review/findy/" },
  { name: "Forkwellの評判・口コミ", href: "/review/forkwell/" },
  { name: "スカウト型サービスの使い方", href: "/knowledge/scout/" },
  { name: "ポートフォリオの作り方", href: "/knowledge/portfolio/" },
  { name: "副業・サイドプロジェクトの活かし方", href: "/knowledge/side-project/" },
  { name: "30代エンジニア向けエージェント比較", href: "/compare/30s-agents/" },
];

export default function LaprasReview() {
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
          { name: "LAPRAS" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          LAPRASの評判・口コミ【30代・40代エンジニア向け】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ Web全体の発信をAI解析するスカウト型サービスの実力を口コミの傾向と公開データで検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          LAPRAS（ラプラス）は、LAPRAS株式会社が運営する、GitHub・Qiita・note・X（旧Twitter）・connpassなどWeb上の発信をAIが自動でクロール・解析し、ポートフォリオを自動生成するスカウト型のサービスです。本記事では「評判・口コミ」を実際の口コミプラットフォームの傾向と公開データに基づいて、30代・40代エンジニアの視点で整理します。架空の体験談やスコアの転載は行わず、出典のある情報のみを扱います。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "LAPRAS公式サイト",
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
              <span className="font-bold">総合評価：技術記事・OSS・登壇など『発信』が多い人の実力可視化に強い</span>。一言でいえば「Web全体にアウトプットがあり、GitHubだけでなく発信全体で評価されたいエンジニア」向けのスカウト型サービスです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・GitHub・Qiita・note・X・connpassをAIが解析し、ポートフォリオを自動生成。</li>
              <li>・FindyがGitHub中心なのに対し、LAPRASはWeb全体の発信を評価する点が差別化。</li>
              <li>・発信が少ない人・地方非Web志向には不向き。Findy併用が有効。</li>
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
            LAPRASの仕組みと他サービスとの違い
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              LAPRASは、担当アドバイザーが求人を提案するエージェント型ではなく、AIが解析したあなたの発信を見た企業からスカウトが届くスカウト型です。担当が提案する
              <Link href="/review/levtech/" className="text-petrol hover:underline">レバテックキャリア</Link>
              のようなエージェント型とは、求人にたどり着く経路が根本的に異なります。
            </p>
            <p>
              同じスカウト・可視化系でも評価軸が違う点が重要です。<span className="font-bold text-slate-700">LAPRASはWeb全体の発信（GitHub・Qiita・note・X・connpass）をAI解析</span>するのに対し、
              <Link href="/review/findy/" className="text-petrol hover:underline">Findy</Link>
              はGitHub中心のスキル偏差値、
              <Link href="/review/forkwell/" className="text-petrol hover:underline">Forkwell</Link>
              はポートフォリオ＋コミュニティが軸です。FindyがGitHubに閉じるのに対し、LAPRASは記事・登壇まで含めて評価する点が最大の差別化です。さらにスキルチェックの解答で評価する
              <Link href="/review/paiza/" className="text-petrol hover:underline">paiza</Link>
              とも入り口が異なります。
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
            ※導入企業数・スコアの目安は二次情報です。求人数は公式LPで非明示のため確認不可とし、断定を避けています。
          </p>
        </section>

        {/* 強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">LAPRASの特徴・強み</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. Web全体の発信をAIが自動解析</h3>
              <p className="text-sm text-petrol-deep">
                GitHubだけでなくQiita・note・X・connpassなどWeb上の発信をAIが自動でクロールし、ポートフォリオを生成します。GitHub中心のFindyと違い、技術記事や登壇など幅広いアウトプットを評価に乗せられるのが最大の強みです。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 手間をかけずに実績がまとまる</h3>
              <p className="text-sm text-petrol-deep">
                自動クロールにより、自分で職務経歴やポートフォリオを一から作らなくても実績が整理されます。在職中で時間が限られるミドル層にとって、負担が軽い点は実用的です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. マッチ精度と立ち位置の可視化</h3>
              <p className="text-sm text-petrol-deep">
                発信内容を踏まえたスカウトが届くため、技術領域や関心に合った打診が来やすい傾向があります。スコア（平均3.0・上位約4%が3.5以上とされる二次情報）で市場での立ち位置を把握でき、定点観測にも使えます。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 求職者は無料</h3>
              <p className="text-sm text-petrol-deep">
                求職者の利用は無料です（確認できた範囲）。費用は採用企業側が負担します。発信がある人ほどリスクなく市場評価を試せます。
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

        {/* 評判・口コミの参照元 */}
        <section id="sources" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">評判・口コミの参照元</h2>
          <p className="text-sm text-slate-600 mb-4">
            LAPRASの口コミは、特定の口コミ専用ページではなく、X（旧Twitter）やはてなブックマーク等のエンジニア個人発信を横断的に参照し、傾向として要約したものです（原文転載・スコア転載は行っていません）。参照した主なプラットフォームと公式情報は以下のとおりです。最終確認日：2026年7月。
          </p>
          <ul className="border border-slate-200 rounded-lg divide-y divide-slate-200 overflow-hidden">
            <li className="px-4 py-3 text-sm">
              <a href="https://lapras.com/" rel="nofollow noopener" target="_blank" className="text-petrol font-medium hover:underline">
                LAPRAS 公式サイト
              </a>
            </li>
            <li className="px-4 py-3 text-sm">
              <a href="https://b.hatena.ne.jp/" rel="nofollow noopener" target="_blank" className="text-petrol font-medium hover:underline">
                はてなブックマーク（エンジニアの発信・ブックマーク）
              </a>
            </li>
            <li className="px-4 py-3 text-sm">
              <a href="https://x.com/" rel="nofollow noopener" target="_blank" className="text-petrol font-medium hover:underline">
                X（旧Twitter）（エンジニアの個人発信）
              </a>
            </li>
          </ul>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            30代・40代エンジニアがLAPRASを使う場合の戦略
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              当サイトはミドルエンジニアの転職を扱う立場から、年代別に使い方を整理します。LAPRASの評価軸は「Web全体の発信の蓄積」です。これまでに書いた記事や登壇、OSS活動がそのまま資産になる点が、キャリアの長いミドル層にとっての強みになります。
            </p>
            <p>
              <span className="font-bold text-slate-700">30代の場合：</span>
              技術記事や個人開発、登壇を続けている人なら、発信がそのままポートフォリオ化され、関心領域に合った企業から声がかかりやすい年代です。GitHub中心の
              <Link href="/review/findy/" className="text-petrol hover:underline">Findy</Link>
              と併用すると、評価軸を広げられます。
            </p>
            <p>
              <span className="font-bold text-slate-700">40代の場合：</span>
              長年のアウトプット（技術ブログ・登壇・OSS）が蓄積している人ほど、年齢より発信内容で評価されやすいのが利点です。書類選考での年齢ハンデを、発信の実績で補えるのは40代にとって心強い面です。一方、求人が首都圏のWeb自社開発に偏るため、求人の幅は
              <Link href="/compare/40s-agents/" className="text-petrol hover:underline">40代向けエージェント</Link>
              で補完するのが堅実。マネジメント軸で上を狙うなら
              <Link href="/compare/highclass/" className="text-petrol hover:underline">ハイクラス向けサービス</Link>
              も検討してください。
            </p>
            <p>
              いずれの年代でも、LAPRAS単独に依存せず、
              <Link href="/knowledge/scout/" className="text-petrol hover:underline">スカウト型サービスの使い方</Link>
              や
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">Findy・Forkwellとの使い分け</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            LAPRASと近い領域のサービスは、評価軸の違いを押さえて使い分けると効果的です。LAPRASは<span className="font-bold">Web全体の発信のAI解析</span>、Findyは<span className="font-bold">GitHubのスキル偏差値</span>、Forkwellは<span className="font-bold">ポートフォリオ＋コミュニティ</span>が軸です。技術記事や登壇など発信が幅広いならLAPRAS、GitHub活動が豊富ならFindy、コミュニティとの接点を重視するならForkwell、という整理が目安になります。LAPRASとFindyは評価する発信の範囲が異なるため、併用すると機会を広げられます。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/review/findy/" className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
              Findyの評判・口コミ →
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
          <h2 className="text-xl font-bold mb-3">LAPRASであなたの発信を可視化する</h2>
          <p className="text-blue-100 text-sm mb-4">
            これまでの発信が自動でポートフォリオに。市場での立ち位置を確かめてみませんか？
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
