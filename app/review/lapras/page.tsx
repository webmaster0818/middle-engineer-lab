import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "LAPRASの評判・口コミ｜30代40代エンジニアの本音と使い方";
const DESCRIPTION =
  "LAPRASはGitHubやQiita・X・connpassなどWeb全体の発信をAIが解析するスカウト型です。30代40代目線で評判・口コミ、スコアの仕組み、発信がない時の対処、Findyとの違いを出典を明記して解説します。";
const URL = "/review/lapras/";

export const metadata: Metadata = {
  alternates: { canonical: "/review/lapras/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "要点（どんな人向けか）" },
  { id: "type", label: "LAPRASの仕組みと他サービスとの違い" },
  { id: "basic", label: "基本データ表（2026年6月時点）" },
  { id: "strength", label: "特徴・強み" },
  { id: "reputation", label: "口コミ・評判の掲載状況" },
  { id: "caution", label: "注意点と対処法" },
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

const ratingRows: { source: string; detail: string; result: string; url: string }[] = [
  {
    source: "App Store（日本）",
    detail: "アプリ「LAPRAS」／開発元 LAPRAS株式会社（2026年1月14日公開）",
    result: "4.9（9件）※件数が少ないため参考値",
    url: "https://apps.apple.com/jp/app/lapras/id6756289434",
  },
  {
    source: "Google Play（日本）",
    detail: "アプリ「LAPRAS」／提供元 LAPRAS Inc.",
    result: "評点・件数の表示なし（ダウンロード数は「100+」と表示）",
    url: "https://play.google.com/store/apps/details?id=com.lapras.user&hl=ja&gl=JP",
  },
  {
    source: "みん評",
    detail: "LAPRASの掲載ページ",
    result: "確認できず（当サイトの取得環境からのアクセスが403で遮断）",
    url: "https://minhyo.jp/lapras",
  },
  {
    source: "Qiita Job Change",
    detail: "転職サービスの口コミ（Qiita会員アンケート）を掲載するメディア",
    result: "LAPRASの口コミページなし（サイトマップに該当URLなし）",
    url: "https://jobs.qiita.com/",
  },
];

const interviewTally: [string, string][] = [
  ["公式トップの「ユーザーインタビュー」掲載件数", "9件（いずれもLAPRAS NOTEの記事へリンク）"],
  ["うち「LAPRASポートフォリオの活用について」", "3件"],
  ["うち「LAPRASポートフォリオを活用してアウトプットされているユーザー」", "3件"],
  ["うち「LAPRASでの転職・副業事例」", "3件"],
  ["インタビューとは別に掲載された短い利用者の声", "3件（氏名・出典の記載なし）"],
  ["不満・改善要望を主題とする回", "0件（いずれも活用事例）"],
];

const cautions = [
  {
    title: "技術力スコアは公開されているアウトプットで算出される",
    body: "公式は、技術力スコアを「インターネット上で公開されているアウトプットに基づいて」算出し、GitHub・技術記事・技術イベント・スキルタグの4項目で評価すると説明しています。公開の発信が少ない場合、スコアに反映される材料も少なくなります。",
    cope: "職歴や経験技術を入力すると算出される「市場価値スコア」も用意されているため、まずは職歴を入力します。そのうえでQiita・Zenn・noteでの記事やOSS活動、connpassでのイベント参加など、公開できる発信を少しずつ蓄積します。発信の時間が取れない場合は、担当が求人を提案するエージェント型のレバテックキャリアを併用するのが現実的です。",
  },
  {
    title: "連携したサービスから自動で情報が集められる",
    body: "公式は、GitHub・X・Qiita・note・teratail・connpass・Speaker Deck・Doorkeeper・Zennを連携すると活動を自動収集すると案内しています。古いアカウントや意図しない情報が反映される可能性があるため、公開内容の確認が必要です。",
    cope: "登録後にプロフィールの連携先と公開範囲を確認し、最新の実績が反映されるよう手動で補足します。公式サイトには「オプトアウト申請」の窓口も設けられています。",
  },
  {
    title: "公式に例示された求人は事業会社が中心",
    body: "2026年11月25日時点で公式トップに例示されていた求人7件は、SmartHR・ウェルスナビ・朝日新聞社・LINE Digital Frontier（2件）・カウシェ・アスエネで、いずれも事業会社です。SIer・受託開発・組み込み系の求人を探す場合は、選択肢が限られる可能性があります。",
    cope: "地方・SIer・組み込みの求人も扱う総合型エージェントを併用し、LAPRASはモダン技術・発信重視の企業との接点として使い分けます。",
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
  "発信を増やす時間が取れません",
  "地方の対面サポートやSIer・非Web求人を最優先したい",
  "担当者がすべて求人提案してくれるエージェント型を希望する",
];

const flow = [
  {
    step: "STEP1",
    title: "無料登録・各サービス連携",
    body: "公式サイトから登録し、GitHub・Qiita・note・X・connpass等を連携します。AIがWeb上の発信を自動でクロールしてポートフォリオを生成します。",
  },
  {
    step: "STEP2",
    title: "ポートフォリオ・スコアの確認",
    body: "自動生成されたポートフォリオとスコア（技術・影響力など）を確認します。内容にズレがあれば公開範囲や連携を調整します。",
  },
  {
    step: "STEP3",
    title: "企業からのスカウト受信",
    body: "職務経歴やアウトプットに関心を持った企業から、転職や副業のスカウトが直接届きます（公式）。企業が興味を持ったことを知らせる「興味通知」や、ポートフォリオを閲覧した企業名を確認できる「足跡機能」も用意されています。",
  },
  {
    step: "STEP4",
    title: "カジュアル面談・選考",
    body: "興味のあるスカウトはカジュアル面談で社風・技術スタックを確認してから選考に進みます。公開している記事や登壇内容を、面談で話題にすることもできます。",
  },
  {
    step: "STEP5",
    title: "内定・条件確認・入社",
    body: "内定後は条件を確認して入社します。年収交渉は自分主導になりやすいため、相場を把握しておくとよいでしょう。",
  },
];

const faqs = [
  {
    q: "LAPRASはFindyと何が違いますか？",
    a: "FindyはGitHub連携によるスキル偏差値が中心ですが、LAPRASはGitHubに加えQiita・note・X・connpassなどWeb全体の発信をAIが解析する点が差別化要素です。GitHubの活動が中心なら Findy、技術記事や登壇など発信が幅広いなら LAPRAS が向きます。両者の併用で評価軸を広げる使い方も有効です。",
  },
  {
    q: "発信をしていなくても使えますか？",
    a: "登録は可能です。公式によると、職歴や経験技術を入力すると算出される「市場価値スコア」があり、企業は職務経歴も見てスカウトを送ります。一方、技術力スコアはGitHub・技術記事・技術イベント・スキルタグの公開アウトプットで算出されるため、発信が少ないとこのスコアに反映される材料は少なくなります。発信を少しずつ蓄積するか、発信に依存しないエージェント型（レバテックキャリアなど）の併用を検討してください。",
  },
  {
    q: "スコアはどのくらいが目安ですか？",
    a: "二次情報では平均3.0、上位約4%が3.5以上とされています。ただしこれは参考値であり、スコアそのものより、発信内容に合った企業と出会えるかが重要です。スコアは市場での立ち位置を把握する目安として捉えるとよいでしょう。",
  },
  {
    q: "40代でもスカウトは来ますか？",
    a: "公式が示す技術力スコアの評価項目はGitHub・技術記事・技術イベント・スキルタグの4つで、年齢は項目に挙げられていません。ただし、スカウトを送るかどうかは企業の判断であり、年代別のスカウト件数は公表されていないため、届く件数は保証できません。公式トップに例示された求人は事業会社が中心のため、求人の幅を確保するには総合型エージェントの併用が堅実です。",
  },
  {
    q: "登録は無料ですか？",
    a: "求職者は無料です。費用は採用企業側が負担する仕組みです（確認できた範囲）。",
  },
  {
    q: "導入企業数や求人数はどのくらいですか？",
    a: "導入企業は700社以上とされますが二次情報です。求人数は公式LPで非明示のため確認できませんでした。なお、公式トップは登録ユーザーを「約4万人」と記載しています（2026年11月25日確認）。数値より、自分の発信領域に合った企業からスカウトが届くかどうかで判断するのが適しています。",
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url={URL} dateModified="2026-11-25" />
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
          最終更新: 2026年11月25日 ｜ Web全体の発信をAI解析するスカウト型サービスを公式情報と第三者の評点の掲載状況で検証
        </p>
        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          LAPRAS（ラプラス）は、LAPRAS株式会社が運営する、GitHub・Qiita・note・X（旧Twitter）・connpassなどWeb上の発信をAIが自動でクロール・解析し、ポートフォリオを自動生成するスカウト型のサービスです。本記事では「評判・口コミ」について、当サイトが評点と件数を確認できた第三者の情報（App Store など）と公式情報に基づき、30代・40代エンジニアの視点で整理します。架空の体験談や出典のない評点は掲載せず、出典のある情報のみを扱います。
        </p>
        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "LAPRAS公式サイト（2026年11月25日確認）",
            "App Store・Google Play（2026年11月25日確認）",
            "複数転職メディア集計値（導入企業数・スコアの目安）",
          ]}
        />

        {/* 要点 */}
        <section id="summary" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">このような方におすすめ</h2>
            <p className="text-sm text-blue-900 mb-3">
              <span className="font-bold">総合評価：技術記事・OSS・登壇など『発信』が多い人の実力可視化に強みがあります</span>。要約すると「Web全体にアウトプットがあり、GitHubだけでなく発信全体で評価されたいエンジニア」向けのスカウト型サービスです。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・GitHub・Qiita・note・X・connpassをAIが解析し、ポートフォリオを自動生成します。</li>
              <li>・FindyがGitHub中心なのに対し、LAPRASはWeb全体の発信を評価する点で差別化されています。</li>
              <li>・発信が少ない方や、地方・非Web志向の方には適していません。Findyとの併用が有効です。</li>
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
              LAPRASは、担当アドバイザーが求人を提案するエージェント型ではなく、AIが解析したご自身の発信を見た企業からスカウトが届くスカウト型です。担当が提案する
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
              <h3 className="font-bold text-blue-800 mb-2">3. アウトプットを見たスカウトと立ち位置の可視化</h3>
              <p className="text-sm text-petrol-deep">
                企業は職務経歴に加えて普段のアウトプットやスキルを見てスカウトを送る仕組みです（公式）。ポートフォリオを閲覧した企業名を確認できる足跡機能もあります。スコア（平均3.0・上位約4%が3.5以上とされる二次情報）で市場での立ち位置を把握でき、定点観測にも使えます。
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

        {/* 口コミ・評判の掲載状況 */}
        <section id="reputation" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">LAPRASの口コミ・評判の掲載状況（2026年11月25日確認）</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed mb-4">
            <p>
              <span className="font-bold text-slate-700">第三者の評点：</span>
              当サイトで評点と件数を確認できたのは、App Store の公式アプリ（開発元 LAPRAS株式会社）の4.9（9件）のみです。件数が9件と少ないため参考値として扱ってください。また、アプリの評価は使い勝手を含む点数であり、スカウトサービスとしての評価とは一致しない場合があります。Google Play の公式アプリには評点・件数が表示されていませんでした。口コミサイトのみん評は当サイトの取得環境からのアクセスが遮断され、確認できませんでした。
            </p>
          </div>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-3 py-2 text-left font-medium text-slate-700 border-b border-slate-200">確認先</th>
                  <th className="px-3 py-2 text-left font-medium text-slate-700 border-b border-slate-200">対象</th>
                  <th className="px-3 py-2 text-left font-medium text-slate-700 border-b border-slate-200">結果（2026年11月25日）</th>
                </tr>
              </thead>
              <tbody>
                {ratingRows.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-3 py-2 text-slate-700 border-b border-slate-200 align-top">
                      <a href={r.url} rel="nofollow noopener" target="_blank" className="text-petrol underline hover:no-underline">
                        {r.source}
                      </a>
                    </td>
                    <td className="px-3 py-2 text-slate-600 border-b border-slate-200 align-top">{r.detail}</td>
                    <td className="px-3 py-2 text-slate-600 border-b border-slate-200 align-top">{r.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mb-6">
            App Store の値は2026年11月25日に Apple の検索API（日本のストア）で取得し、開発元が運営会社（LAPRAS株式会社）と一致するアプリであることを確認しています。Google Play は同日に公式アプリのページを確認しました。口コミの本文は転載していません。
          </p>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed mb-4">
            <p>
              <span className="font-bold text-slate-700">運営会社が掲載した声：</span>
              公式サイトのトップには「ユーザーインタビュー」として9件の記事が掲載されています。運営会社が選んで掲載している事例であり、利用者全体の評価を表すものではありません。当サイトで見出しごとに数えた内訳は次のとおりです。
            </p>
          </div>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <tbody>
                {interviewTally.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/2 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400">
            出典：
            <a href="https://lapras.com/" rel="nofollow noopener" target="_blank" className="underline">LAPRAS公式サイト トップ「ユーザーインタビュー」</a>
            （2026年11月25日確認・集計は当サイト）。各記事は
            <a href="https://note.lapras.com/" rel="nofollow noopener" target="_blank" className="underline">LAPRAS NOTE</a>
            に掲載されています。
          </p>
        </section>

        {/* 注意点 */}
        <section id="caution" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">注意点と対処法</h2>
          <p className="text-sm text-slate-600 mb-4">
            公式の説明から分かるサービスの仕組みをもとに、利用前に確認しておきたい点と対処法をまとめます。
          </p>
          <div className="space-y-4">
            {cautions.map((r, i) => (
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
            30代・40代エンジニアがLAPRASを使う場合の戦略
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              当サイトはミドルエンジニアの転職を扱う立場から、年代別に使い方を整理します。LAPRASの評価軸は「Web全体の発信の蓄積」です。これまでに書いた記事や登壇、OSS活動がそのまま資産になる点が、キャリアの長いミドル層にとっての強みになります。
            </p>
            <p>
              <span className="font-bold text-slate-700">30代の場合：</span>
              技術記事や個人開発、登壇を続けている人なら、発信がそのままポートフォリオ化され、企業がスカウトを検討する際の材料になります。GitHub中心の
              <Link href="/review/findy/" className="text-petrol hover:underline">Findy</Link>
              と併用すると、評価軸を広げられます。
            </p>
            <p>
              <span className="font-bold text-slate-700">40代の場合：</span>
              公式が示す技術力スコアの評価項目はGitHub・技術記事・技術イベント・スキルタグの4つで、年齢は項目に挙げられていません。長年のアウトプット（技術ブログ・登壇・OSS）が蓄積している人ほど、スコアに反映される材料が多くなります。一方、公式トップに例示された求人は事業会社が中心のため、求人の幅は
              <Link href="/compare/40s-agents/" className="text-petrol hover:underline">40代向けエージェント</Link>
              で補完するのが堅実です。マネジメント軸で上を狙うなら
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
          <h2 className="text-xl font-bold mb-3">LAPRASでご自身の発信を可視化する</h2>
          <p className="text-blue-100 text-sm mb-4">
            これまでの発信が自動でポートフォリオになります。市場での立ち位置を確かめてみませんか？
          </p>
          <a href="https://lapras.com/" target="_blank" rel="nofollow noopener" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            無料で登録する
          </a>
        </section>

        {/* 評判・口コミの参照元 */}
        <section id="sources" className="mb-10 scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-3">評判・口コミの参照元</h2>
          <p className="text-xs text-slate-500 leading-relaxed mb-3">
            第三者の評点は、2026年11月25日時点で当サイトが評点と件数を確認できたもの（App Store）のみを掲載しています。利用者の声は公式トップの「ユーザーインタビュー」（運営会社が選んだ事例）の件数と内訳のみを掲載し、本文は転載していません。最終確認日：2026年11月25日。
          </p>
          <ul className="text-sm space-y-2 text-slate-600 list-disc pl-5">
            <li>
              <a href="https://lapras.com/" rel="nofollow noopener" target="_blank" className="text-petrol underline hover:no-underline">
                LAPRAS公式サイト（サービス概要・スコアの評価項目・ユーザーインタビュー・例示求人）
              </a>
            </li>
            <li>
              <a href="https://apps.apple.com/jp/app/lapras/id6756289434" rel="nofollow noopener" target="_blank" className="text-petrol underline hover:no-underline">
                App Store「LAPRAS」（開発元 LAPRAS株式会社・4.9／9件）
              </a>
            </li>
            <li>
              <a href="https://play.google.com/store/apps/details?id=com.lapras.user&hl=ja&gl=JP" rel="nofollow noopener" target="_blank" className="text-petrol underline hover:no-underline">
                Google Play「LAPRAS」（提供元 LAPRAS Inc.・評点の表示なし）
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
