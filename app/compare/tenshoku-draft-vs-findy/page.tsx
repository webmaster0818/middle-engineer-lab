import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/compare/tenshoku-draft-vs-findy/" },
  title: "転職ドラフトとFindy比較｜どっちがおすすめ【2026年6月】",
  description:
    "転職ドラフト（リブセンス）とFindy（ファインディ）をどっちがおすすめか即答。評価軸（年収提示の入札 vs GitHubスキル偏差値）・対象スキル・年収の見え方・向き不向きを時点付き実データで徹底比較し、30代40代エンジニアの選び方を解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：どっちがおすすめか" },
  { id: "basic", label: "基本データ比較表（2026年6月時点）" },
  { id: "axis", label: "評価される軸の違い" },
  { id: "salary", label: "年収の見え方で比較" },
  { id: "skill", label: "対象スキル・領域で比較" },
  { id: "entry", label: "登録のハードルで比較" },
  { id: "reviews", label: "口コミ傾向（出典付き）" },
  { id: "checklist", label: "向いている人チェックリスト" },
  { id: "combo", label: "併用ガイド" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const comparison = [
  { item: "運営会社", draft: "株式会社リブセンス（東証プライム上場）", findy: "ファインディ株式会社（2016年創業）" },
  { item: "サービス種別", draft: "競争入札型ダイレクトリクルーティング（年収提示つきスカウト）", findy: "スカウト型（GitHub連携によるスキル偏差値算出）" },
  { item: "評価される軸", draft: "レジュメ（職務経歴・成果の書き込み）", findy: "GitHubの公開活動（スキル偏差値）" },
  { item: "年収の見え方", draft: "企業が最初に「提示年収＋期待役割」を明示。中央値は概ね750〜800万円台（2024〜2025年・運営公表系の二次情報）", findy: "スカウト時点で年収が明示されるとは限らず、面談・交渉で確定。年収交渉は基本自分主導" },
  { item: "特徴的ルール", draft: "内定年収が提示年収の90%を下回ることを禁止（提示年収90%ルール）", findy: "GitHub連携で技術力を客観的に可視化（職歴の見栄えに左右されにくい）" },
  { item: "得意領域", draft: "ITエンジニア全般（実務経験者中心）", findy: "モダン言語（Go／TypeScript／Python／Ruby等）・Web自社開発" },
  { item: "登録のハードル", draft: "レジュメ運営審査あり（二次情報で通過率約50%程度）／月1回程度のイベント形式", findy: "GitHubの公開活動が少ないとスカウトが届きにくい" },
  { item: "料金", draft: "エンジニア（求職者）は無料", findy: "求職者無料" },
];

const faqs = [
  { q: "転職ドラフトとFindyはどっちがおすすめ？", a: "「年収を金額で見てから動きたい・レジュメで勝負したい」なら転職ドラフト、「GitHubの公開活動・コードで客観評価されたい」ならFindyです。転職ドラフトは企業が最初に提示年収を明示する競争入札型で年収交渉の起点が明確、FindyはGitHub連携のスキル偏差値で技術力を可視化しモダン技術の自社開発企業とマッチしやすい設計です。評価される軸が『経歴・年収』か『コード』かが最大の違いで、両方無料のため併用して評価軸の異なる機会を得るのも有効です。" },
  { q: "年収を最初に知りたいならどっち？", a: "転職ドラフトです。企業が最初に「提示年収＋期待役割」を明示して指名（入札）するため、自分の市場価値を金額で把握でき、年収レンジを見てから話を進められます。さらに内定年収が提示年収の90%を下回ることを禁止する『提示年収90%ルール』があり、最初に示された金額が大きく目減りしにくいのが特徴です。Findyはスカウト時点で年収が明示されるとは限らず、年収交渉は基本的に自分主導になります。" },
  { q: "GitHubの活動が少なくても使えますか？", a: "Findyは評価軸がGitHub連携中心のため、公開できる活動が少ないとスカウトが届きにくくなります。一方、転職ドラフトはレジュメ（職務経歴・成果の書き込み）で評価されるため、業務でコードを公開できない人でも経歴を具体的に書き込めば指名につながりえます。GitHubに公開活動が少ない場合は転職ドラフトの方が機会を得やすい傾向です。" },
  { q: "モダン技術のWeb自社開発に行きたいならどっち？", a: "Findyが向きます。Go／TypeScript／Python／Ruby等のモダン言語・Web自社開発を得意領域とし、掲載企業が厳選されている（公式で800社以上・2024年7月時点）ため、届くスカウトがモダン技術の自社開発企業中心になりやすい傾向です。転職ドラフトもWeb系企業の指名はありますが、領域特化という点ではFindyが明確です。" },
  { q: "登録のハードルが低いのはどっち？", a: "一概には言えません。転職ドラフトはレジュメの運営審査があり（二次情報で通過率約50%程度）、月1回程度のイベント形式で運用されます。FindyはGitHubの公開活動が少ないとスカウトが届きにくいという別種のハードルがあります。経歴を書き込むのが得意なら転職ドラフト、公開コードがあるならFindy、と自分の強みで選ぶのが現実的です。" },
  { q: "40代エンジニアにはどっち？", a: "FindyはGitHubの活動内容で評価される性質があり、40代でも現役でモダン技術を使い公開活動があればスカウトが届く傾向で、年齢より技術活動が重視されやすい面があります。転職ドラフトは登録者が20代後半〜30代の即戦力層中心という二次情報がありますが、40代もマネジメント・アーキテクト経験などをレジュメに書き込めば高年収の指名につながる可能性があります。コードを書く現役ならFindy、経歴で勝負するなら転職ドラフトが軸になります。" },
  { q: "30代エンジニアにはどっち？", a: "30代はどちらも恩恵を受けやすい層です。転職ドラフトは20代後半〜30代の即戦力が中心とされ年収最大化に向き、FindyもモダンスタックでGitHub活動があればマッチしやすいです。年収を金額で確認したいなら転職ドラフト、コードで評価されてモダン自社開発に行きたいならFindy、と目的で使い分けるか、両方登録して評価軸の異なるルートを確保するのがおすすめです。" },
  { q: "両方登録しても大丈夫？", a: "問題ありません。評価軸が『経歴・年収（転職ドラフト）』と『コード（Findy）』で異なるため、併用すると複数ルートから機会を得られます。さらにWeb全体の発信を評価するLAPRASや、求人数の多いレバテックキャリアを組み合わせると、評価軸の異なる複数ルートを確保できます。同じ企業への重複応募は避け、応募状況を自分で管理しておきましょう。" },
];

const draftReviews = {
  good: ["提示年収を見てから動けるので市場価値が分かる", "高年収・好条件の指名が届くことがある", "レジュメ前提で技術的なマッチングがしやすい"],
  bad: ["イベント形式で常時応募できるわけではない", "レジュメ審査があり通過しないと使えない", "実務経験が浅い・非エンジニア職には向きにくい"],
};
const findyReviews = {
  good: ["GitHubの実績で客観的に評価される", "スカウトしてくる企業の質が高い（厳選800社以上）", "カジュアル面談・壁打ちサポートがある"],
  bad: ["GitHubの活動が少ないとスカウトが来ない", "地方・非Web系の求人が少ない", "スキル偏差値が上がらないと焦る"],
};

const relatedLinks = [
  { name: "転職ドラフト（年収提示入札）の詳細レビュー", href: "/review/tenshoku-draft/" },
  { name: "Findy（GitHubスキル偏差値）の詳細レビュー", href: "/review/findy/" },
  { name: "LAPRAS（Web発信を自動解析）の評判", href: "/review/lapras/" },
  { name: "Forkwell（質重視のスカウト）の評判", href: "/review/forkwell/" },
  { name: "スカウト型エージェントの比較", href: "/compare/scout-agents/" },
  { name: "IT転職エージェント比較", href: "/compare/agents/" },
];

export default function TenshokuDraftVsFindyPage() {
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
        title="転職ドラフトとFindy比較｜どっちがおすすめ【2026年6月】"
        description="転職ドラフトとFindyをどっちがおすすめか即答。評価軸・対象スキル・年収の見え方・向き不向きを時点付き実データで徹底比較します。"
        url="/compare/tenshoku-draft-vs-findy/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "比較" },
          { name: "転職ドラフト vs Findy" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          転職ドラフトとFindy（ファインディ）比較｜どっちがおすすめ？
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ 「年収提示の入札」と「GitHubスキル偏差値」、評価軸の違いで選ぶ
        </p>

        <p className="text-slate-600 leading-relaxed mb-2">
          企業が最初に提示年収を明示して指名する競争入札型の転職ドラフト（リブセンス運営）と、GitHub連携でスキル偏差値を算出するスカウト型のFindy（ファインディ）。どちらもエンジニアの「実力」で勝負する新しいタイプのサービスですが、評価される軸は「経歴・年収」と「コード」で対照的です。本記事では各社の公式情報と公表値、口コミ傾向をもとに、30代・40代エンジニア視点で「どっちを選ぶべきか」を整理します。架空の体験談や数値は扱わず、出典のある情報のみに基づきます。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "転職ドラフト（リブセンス）公式・運営公表系の二次情報",
            "Findy公式（掲載企業数 2024年7月時点）",
            "エンジニアの体験記（note等）・口コミプラットフォーム（傾向要約）",
          ]}
        />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm text-petrol-deep">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="hover:underline">{t.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：どっちがおすすめか</h2>
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-lg p-6">
            <p className="font-bold text-blue-900 mb-3">
              年収を金額で見てから動きたい・レジュメで勝負するなら「転職ドラフト」、GitHubの公開活動・コードで評価されモダン自社開発を狙うなら「Findy」。
            </p>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>① 転職ドラフトは企業が最初に「提示年収＋期待役割」を明示する競争入札型。提示年収90%ルールで年収交渉の起点が明確。中央値は概ね750〜800万円台（2024〜2025年・運営公表系の二次情報）。</li>
              <li>② FindyはGitHub連携のスキル偏差値で技術力を可視化。厳選800社以上（2024年7月時点・公式）のモダン技術の自社開発企業とマッチしやすい。</li>
              <li>③ 評価軸が『経歴・年収』か『コード』かが核。両方無料のため、評価軸の異なる機会を得るため併用するのも合理的。</li>
            </ul>
          </div>
        </section>

        <section id="basic" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ比較表（2026年6月時点）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">比較項目</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">転職ドラフト</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">Findy</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 align-top">
                    <td className="px-3 py-3 border border-slate-200 font-medium whitespace-nowrap">{row.item}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.draft}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.findy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            ※ 提示年収の中央値・レジュメ審査通過率は運営公表系・二次情報で、開催回・時期により変動します。Findyの掲載企業数は公式・2024年7月時点です。最新値は各公式サイトをご確認ください。
          </p>
        </section>

        <section id="axis" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">評価される軸の違い（最重要）</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">転職ドラフト：レジュメ（経歴・成果）</h3>
              <p className="text-sm text-petrol-deep">
                職務経歴（技術スタック・担当領域・成果）を読み込んだ上で企業が「提示年収＋期待役割」を明示して指名します。書き込んだ分だけ評価されやすく、マネジメントや設計などコード以外の実績も伝えられるのが特徴です。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Findy：GitHubの公開活動（コード）</h3>
              <p className="text-sm text-slate-600">
                GitHubの活動を連携してスキル偏差値という形で実力を可視化します。職務経歴書では伝わりにくい技術力を客観的に示せる反面、公開できる活動が少ないとスカウトが届きにくくなります。
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            この「経歴・年収で評価されるか、コードで評価されるか」が両者の最大の違いです。自分の強みが職務経歴・成果の言語化にあるなら転職ドラフト、公開できるコードやOSS活動にあるならFindyが噛み合います。
          </p>
        </section>

        <section id="salary" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の見え方で比較</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">転職ドラフト：最初に金額が見える</h3>
              <p className="text-sm text-petrol-deep">
                企業が最初に提示年収を明示するため、市場価値を金額で把握できます。提示年収の中央値は概ね750〜800万円台（2024〜2025年・運営公表系の二次情報）。内定年収が提示年収の90%を下回ることを禁止する『提示年収90%ルール』で、最初の金額が大きく目減りしにくいのも特徴です。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Findy：交渉は基本自分主導</h3>
              <p className="text-sm text-slate-600">
                スカウト時点で年収が明示されるとは限らず、カジュアル面談・選考を経て条件が確定します。年収交渉は基本的に自分主導になるため、相場を把握したうえで臨むとよいでしょう。年収の透明性という点では転職ドラフトが明確です。
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500">
            ※ 提示年収・スコアは個人のスキル・経験・需給で変動します。数値の単純比較ではなく、自分に届く指名・スカウトの内容で確認してください。
          </p>
        </section>

        <section id="skill" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">対象スキル・領域で比較</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3">転職ドラフトが向く領域</h3>
              <div className="flex flex-wrap gap-2">
                {["ITエンジニア全般", "実務経験者", "年収最大化", "レジュメで勝負", "マネジメント・設計も可", "20代後半〜30代中心"].map((tag, i) => (
                  <span key={i} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-petrol-soft text-petrol-deep">{tag}</span>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">※ 登録者は20代後半〜30代の即戦力層が中心という二次情報。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3">Findyが向く領域</h3>
              <div className="flex flex-wrap gap-2">
                {["Go", "TypeScript", "Python", "Ruby", "Web自社開発", "GitHub公開活動あり", "首都圏・フルリモート"].map((tag, i) => (
                  <span key={i} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">{tag}</span>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">※ 地方・非Web系（SIer・組み込み等）の求人は少なめという傾向。</p>
            </div>
          </div>
        </section>

        <section id="entry" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">登録のハードルで比較</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            転職ドラフトはレジュメの運営審査があり（二次情報で通過率約50%程度）、月1回程度の「指名期間」「返答期間」に分かれたイベント形式で運用されます。今すぐ大量に応募したい人にはペースが合わない一方、審査を通過する書き込みができれば高年収の指名につながりやすい設計です。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            FindyはGitHubの公開活動が少ないとスカウトが届きにくいという別種のハードルがあります。業務でプライベートリポジトリしか触らない場合は、公開できる範囲でサンプルコードや個人開発を置いて活動量を増やすか、Web全体の発信を評価する
            <Link href="/review/lapras/" className="text-petrol hover:underline">LAPRAS</Link>
            の併用が現実的です。
          </p>
        </section>

        <section id="reviews" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミ傾向（出典付き）</h2>
          <p className="text-sm text-slate-500 mb-4">
            以下は、エンジニアの体験記（note等）・各種口コミプラットフォーム・X（旧Twitter）等に見られる傾向を要約したものです（原文・スコア転載ではありません）。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">転職ドラフトの口コミ傾向</h3>
              <p className="text-xs font-medium text-slate-500 mb-1">良い評判</p>
              <ul className="space-y-1 text-sm text-slate-700 mb-3">
                {draftReviews.good.map((r, i) => <li key={i}>＋ {r}</li>)}
              </ul>
              <p className="text-xs font-medium text-slate-500 mb-1">気になる評判</p>
              <ul className="space-y-1 text-sm text-slate-600">
                {draftReviews.bad.map((r, i) => <li key={i}>− {r}</li>)}
              </ul>
              <p className="text-xs text-slate-400 mt-3">出典: 転職ドラフトREPORT／エンジニアの体験記（note等）／口コミメディア の傾向</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">Findyの口コミ傾向</h3>
              <p className="text-xs font-medium text-slate-500 mb-1">良い評判</p>
              <ul className="space-y-1 text-sm text-slate-700 mb-3">
                {findyReviews.good.map((r, i) => <li key={i}>＋ {r}</li>)}
              </ul>
              <p className="text-xs font-medium text-slate-500 mb-1">気になる評判</p>
              <ul className="space-y-1 text-sm text-slate-600">
                {findyReviews.bad.map((r, i) => <li key={i}>− {r}</li>)}
              </ul>
              <p className="text-xs text-slate-400 mt-3">出典: X（旧Twitter）／はてなブックマーク／エンジニアブログ の傾向</p>
            </div>
          </div>
        </section>

        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人チェックリスト</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">転職ドラフトが向く人</h3>
              <ul className="space-y-2 text-sm text-petrol-deep">
                <li>✓ IT実務経験があり年収を上げたい</li>
                <li>✓ 自分の市場価値を「金額」で知りたい</li>
                <li>✓ 提示年収を見てから選考に進みたい</li>
                <li>✓ レジュメ（経歴）を書き込むのが苦でない</li>
                <li>✓ 複数企業の提示を比較して交渉したい</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">Findyが向く人</h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li>✓ モダン技術（Go/TS/Python/Ruby等）の現役</li>
                <li>✓ GitHubで公開できるコード・OSS活動がある</li>
                <li>✓ Web系自社開発企業に転職したい</li>
                <li>✓ コードや技術力で客観的に評価されたい</li>
                <li>✓ 首都圏勤務またはフルリモートを希望</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="combo" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">併用ガイド</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "転職ドラフトが向くケース", desc: "年収を金額で確認したい、レジュメで成果を語れる、年収最大化を狙う場合は転職ドラフトを軸に。開催サイクルに合わせて活用する。" },
                { num: "2", title: "Findyが向くケース", desc: "モダン技術の現役でGitHub公開活動があり、Web系自社開発を狙う場合はFindyを軸に。コードで客観評価を受けたい人向け。" },
                { num: "3", title: "併用＋LAPRAS／レバテックキャリア", desc: "評価軸が異なるため併用で機会が増える。Web全体の発信を評価するLAPRAS、求人数の多いレバテックキャリアを足すと、評価軸の違う複数ルートを確保できる。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.num}</span>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-4">
              スカウト型サービスの比較は
              <Link href="/compare/scout-agents/" className="text-petrol hover:underline">スカウト型エージェントの比較</Link>
              で詳しく扱っています。
            </p>
          </div>
        </section>

        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
            <p className="text-slate-600 leading-relaxed text-sm">
              30代・40代の転職は「これまでの実績と専門性」で評価されます。転職ドラフトは年収を金額で可視化できるため、現年収が相場より低い人ほど市場価値とのギャップに気づきやすく、年収交渉の起点を作れます。Findyは年齢より技術活動が重視されやすく、現役でコードを書き続けるミドルにとって有利な面があります。
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              <span className="font-bold text-slate-700">30代の場合：</span>転職ドラフトの登録者は20代後半〜30代の即戦力が中心とされ、最も恩恵を受けやすい層です。年収を金額で確認しつつ、モダンスタックでGitHub活動があればFindyも併用し、評価軸の異なる機会を確保するのが堅実です。レバテック公表（2025年）では正社員SEで30代約499万円が一つの目安で、現年収との差が交渉材料になります。
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              <span className="font-bold text-slate-700">40代の場合：</span>コードを書き続ける現役ならFindyで技術活動を評価され、マネジメント・アーキテクト経験が強みなら転職ドラフトでレジュメに書き込み高年収の指名を狙えます。レバテック公表（2025年）では40代の年収1,000万円以上の割合は12.67%とされ、上流・専門領域で上限を狙える層です。年齢で諦めず、自分の強み（コードか経歴か）に合うサービスを軸にしましょう。
            </p>
            <p className="text-xs text-slate-500">
              ※ 厚労省 job tag「システムエンジニア（受託開発）」の平均年収は578.5万円・平均年齢37.1歳（令和7年賃金構造基本統計調査ベース）。年収交渉時の相場感の参考になります。
            </p>
          </div>
        </section>

        <section id="faq" className="mb-12 scroll-mt-20">
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

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">迷ったら「経歴・年収」か「コード」かで選ぶ</h2>
          <p className="text-blue-100 text-sm mb-4">
            転職ドラフトとFindyは両方無料。年収を金額で見たいなら転職ドラフト、コードで評価されたいならFindy。評価軸が違うので併用も有効です。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedLinks.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors"
              >
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
