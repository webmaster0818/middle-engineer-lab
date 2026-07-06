import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "データアナリストの転職完全ガイド｜年収・スキル・データサイエンティストとの違い";
const PAGE_DESC =
  "データアナリストの転職を2026年最新データで解説。データサイエンティストとの違い（SQL/BIで示唆を出す職 vs モデル構築・研究の職）、必須スキル（SQL・統計・BI）、30代未経験の可否と難易度、ポートフォリオ、キャリアパスを30代・40代向けにまとめました。";

export const metadata: Metadata = {
  alternates: { canonical: "/skill/data-analyst/" },
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "diff", label: "結論：データサイエンティストとの違い" },
  { id: "market", label: "市場・年収データ" },
  { id: "skill", label: "必須スキル（SQL・統計・BI）" },
  { id: "inexperienced", label: "30代未経験の可否と難易度" },
  { id: "portfolio", label: "ポートフォリオの作り方" },
  { id: "level", label: "求められる経験レベル" },
  { id: "path", label: "キャリアパスの選択肢" },
  { id: "middle", label: "30代・40代の視点とデメリット" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "データアナリストとデータサイエンティストの違いは何ですか？",
    a: "ここが最も重要な違いです。データアナリストは、SQLやBIツールを使って既存データから『示唆（インサイト）』を出し、ビジネスの意思決定を支える職です。一方データサイエンティストは、機械学習モデルの構築や統計的な研究・予測に踏み込む、より高度で参入ハードルの高い職です。ざっくり言えば、アナリストは『データから何が言えるかを示す人』、サイエンティストは『モデルを作って予測する人』です。アナリストの方が参入しやすく、未経験からのキャリアチェンジでも現実的な選択肢になります。モデル構築側を目指すなら",
    aLink: { href: "/skill/data-scientist/", label: "データサイエンティスト転職ガイド" },
    aTail: "をご覧ください。",
  },
  {
    q: "データアナリストの平均年収はどのくらいですか？",
    a: "媒体によって数値の幅が大きい点に注意が必要です。求人ボックス給料ナビの「データアナリスト」平均は約725万円（おおむね446〜1,245万円のレンジ）です（2026年6月時点・動的に変動する集計値で、高めに出やすい）。一方、別の調査では転職者の平均が約504万円という値もあり、媒体間で差が大きいのが実情です（媒体により幅あり）。単一の数値を『相場』と断定せず、複数の値を踏まえて目安としてご覧ください。",
  },
  {
    q: "30代・未経験からデータアナリストになれますか？",
    a: "正直に言うと、ハードルはあります。データアナリスト求人の多くは『即戦力』を求めており、30代未経験者にとってはこの即戦力要求が最大の壁です。ただしdodaやムービンなどには未経験歓迎の特集もあり、前職の業務知識（営業・マーケ・経理など）×データ分析という掛け算なら、若手にはない強みになります。SQLとBIの基礎を固め、自分でデータを分析した成果物を見せられる状態を作るのが現実的な入口です。",
  },
  {
    q: "データアナリストにSQLは必須ですか？",
    a: "実質的に必須です。データアナリストの日常業務はデータベースからデータを抽出・集計することが中心で、その大半をSQLで行います。加えて、統計の基礎知識（平均・分散・相関・検定など）と、Tableau/LookerなどのBIツールでの可視化、そしてビジネス理解（数字を施策につなげる力）が三本柱です。SQLの市場価値は",
    aLink: { href: "/skill/sql/", label: "SQLエンジニア転職ガイド" },
    aTail: "も参考になります。",
  },
  {
    q: "データアナリストにプログラミングは必要ですか？",
    a: "必須ではありませんが、Pythonができると分析の幅が広がり評価も上がります。SQL+BIで基本業務は回りますが、Pythonでのデータ加工・可視化・簡単な統計分析ができると、データサイエンティストへのキャリア拡張も視野に入ります。まずはSQL/BIを固め、余力でPythonを足すのが現実的です。Pythonは",
    aLink: { href: "/skill/python/", label: "Pythonエンジニア転職ガイド" },
    aTail: "を参考にしてください。",
  },
  {
    q: "40代でもデータアナリストへ転職できますか？",
    a: "前職の業務ドメイン経験を活かせれば可能性があります。データアナリストは『データから示唆を出してビジネスを動かす』職なので、特定業界の深い理解はむしろ武器になります。レバテック公表の正社員SE年代別平均は40代約618万円で、ミドルでも高年収帯が一定数あります。ただし即戦力要求が強い領域なので、SQL/BIの実務レベルのスキルと分析の成果物をセットで示すことが前提です。",
  },
];

const skills = [
  { t: "SQL（必須）", d: "データの抽出・集計の中核。JOINや集計関数、ウィンドウ関数まで使えると実務で困らない。" },
  { t: "統計の基礎", d: "平均・分散・相関・基本的な検定など。数字を正しく解釈し、誤った断定を避けるために不可欠。" },
  { t: "BIツール（Tableau / Looker など）", d: "分析結果をダッシュボードで可視化し、関係者に伝える。意思決定を動かす『見せ方』のスキル。" },
  { t: "ビジネス理解", d: "数字を施策・改善につなげる力。アナリストとサイエンティストを分ける、最も評価される要素。" },
];

export default function DataAnalystSkillPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a + (faq.aLink ? `（${faq.aLink.label}）${faq.aTail ?? ""}` : ""),
      },
    })),
  };

  return (
    <>
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/skill/data-analyst/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "データアナリスト" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          データアナリストの転職完全ガイド｜年収・スキル・データサイエンティストとの違い
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | データアナリストへの転職を30代・40代向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          データアナリストへの転職を考えるとき、最初に押さえるべきは<strong>「データサイエンティストとの違い」</strong>です。一言でいえば、データアナリストは<strong>SQLとBIで既存データから示唆を出す職</strong>、データサイエンティストは<strong>機械学習モデルを構築・研究する職</strong>です。アナリストの方が参入しやすく、未経験からのキャリアチェンジでも現実的な選択肢になります。本記事は、すでに公開している
          <Link href="/skill/data-scientist/" className="text-petrol hover:underline">データサイエンティスト転職ガイド</Link>
          と検索意図を明確に分け、「<strong>示唆を出すデータアナリスト</strong>」に焦点を当てて整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "求人ボックス 給料ナビ データアナリスト（2026年6月時点・動的・参考区分）",
            "転職者平均の別調査（媒体二次・幅あり）",
            "doda・ムービン 未経験歓迎特集（2026年6月時点）",
            "レバテック公表 年代別平均年収（2025年）",
          ]}
        />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="diff" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：データサイエンティストとの違い</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              先に結論です。データアナリスト転職の核心は、<strong>「モデルを作る競争」ではなく「データから示唆を出してビジネスを動かす力」で勝つこと</strong>です。攻め方は次の3点です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>SQL＋BI（Tableau/Looker）</strong>を実務レベルにし、参入しやすい強みを活かす</li>
              <li>② <strong>前職の業務ドメイン知識</strong>を掛け合わせ、未経験でも差別化する</li>
              <li>③ 即戦力要求の壁を、<strong>自分で分析した成果物（ポートフォリオ）</strong>で越える</li>
            </ul>
            <p className="text-xs text-slate-600 mt-3">
              モデル構築・研究に踏み込みたい方は
              <Link href="/skill/data-scientist/" className="text-petrol-deep underline">データサイエンティスト</Link>、
              30代未経験の進め方は
              <Link href="/knowledge/inexperienced-30s/" className="text-petrol-deep underline ml-0">30代未経験からのエンジニア転職</Link>
              が参考になります。
            </p>
          </div>
        </section>

        <section id="market" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">市場・年収データ</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            データアナリストの年収は、<strong>媒体によって数値の幅が非常に大きい</strong>点に注意が必要です。求人ボックス給料ナビの「データアナリスト」平均は<strong>約725万円（おおむね446〜1,245万円のレンジ）</strong>です（2026年6月時点・動的に変動する集計値で、高めに出やすい）。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            一方、別の調査では転職者の平均が約504万円という値もあり、同じ「データアナリスト」でも媒体間で200万円以上の差が出ています（媒体により幅あり）。これは集計対象（募集条件の整った求人か／実際の転職者か）の違いによるもので、<strong>単一の数値を『相場』と断定するのは避けるべき</strong>です。
          </p>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: 求人ボックス給料ナビ「データアナリスト」（2026年6月時点・動的・参考区分・高めに出やすい）、転職者平均の別調査（媒体二次・約504万円・幅あり）、レバテック公表の年代別平均年収（2025年／30代約499万円・40代約618万円、年収1,000万円以上の割合は40代で12.67%）。
          </p>
        </section>

        <section id="skill" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">必須スキル（SQL・統計・BI）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            データアナリストの土台は、SQL・統計・BIツール・ビジネス理解の4つです。特にSQLは必須で、これが入口の壁にも武器にもなります。
          </p>
          <div className="space-y-3">
            {skills.map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            SQLの深掘りは
            <Link href="/skill/sql/" className="text-petrol hover:underline">SQLエンジニア転職ガイド</Link>、
            分析の幅を広げるPythonは
            <Link href="/skill/python/" className="text-petrol hover:underline">Pythonエンジニア転職ガイド</Link>
            が接続先です。
          </p>
        </section>

        <section id="inexperienced" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代未経験の可否と難易度</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              正直にお伝えします。<strong>データアナリスト求人の多くは即戦力を求めており、30代未経験者にとってはこの即戦力要求が最大の壁</strong>です。「SQLが書ける」だけでなく「データを使って実際に意思決定を動かした経験」が問われる求人が中心です。
            </p>
            <p>
              一方で、dodaやムービンなどには未経験歓迎の特集もあり、道が閉ざされているわけではありません（2026年6月時点・媒体特集）。鍵は<strong>前職の業務ドメイン知識との掛け算</strong>です。営業・マーケ・経理・製造など、特定業界の数字を理解している人は、データ分析のスキルを足すことで若手にはない価値を出せます。
            </p>
            <p>
              現実的な進め方は、SQL/BIの基礎を固め、公開データを使って自分で分析した成果物を作ること。未経験からの転職全般は
              <Link href="/knowledge/inexperienced-30s/" className="text-petrol hover:underline">30代未経験からのエンジニア転職</Link>
              も合わせてご覧ください。
            </p>
          </div>
        </section>

        <section id="portfolio" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ポートフォリオの作り方</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            未経験・経験浅めなら、ポートフォリオが即戦力要求を越える鍵になります。「分析して、示唆を出して、見せる」までを一気通貫で示しましょう。
          </p>
          <div className="space-y-3">
            {[
              { n: "STEP 1", t: "公開データを選ぶ", d: "政府統計（e-Stat）やKaggleなどの公開データから、自分が興味を持てるテーマを選ぶ。" },
              { n: "STEP 2", t: "SQL/BIで分析", d: "データを集計・加工し、Tableau/Looker StudioなどのBIで可視化する。" },
              { n: "STEP 3", t: "示唆を言語化", d: "『このデータから何が言えるか』『どんな施策につながるか』を文章で説明する。ここが最重要。" },
              { n: "STEP 4", t: "成果物として公開", d: "ダッシュボードと考察をまとめ、誰でも見られる形で公開する。職務経歴書に紐づける。" },
            ].map((x, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="text-xs font-bold text-petrol shrink-0 w-14 pt-1">{x.n}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                  <p className="text-sm text-slate-600">{x.d}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            ポートフォリオ全般のコツは
            <Link href="/knowledge/portfolio/" className="text-petrol hover:underline">エンジニアのポートフォリオの作り方</Link>
            が参考になります。
          </p>
        </section>

        <section id="level" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベル</h2>
          <div className="space-y-3">
            {[
              { t: "入口層（集計・レポーティング）", d: "SQLでのデータ抽出・集計、BIでの定型レポート作成。基礎が問われるゾーン。" },
              { t: "中核層（分析・示唆出し）", d: "仮説を立て、データで検証し、施策提案まで行う。ビジネス理解が評価される中核ゾーン。" },
              { t: "上級層（データ戦略・組織化）", d: "データ活用の仕組みづくり、KPI設計、チームのデータリテラシー向上。マネジメント要素も問われる。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="path" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キャリアパスの選択肢</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">データサイエンティスト路線</h3>
              <p className="text-sm text-petrol-deep">
                Python・機械学習を足し、モデル構築・予測へ踏み込む方向。
                <Link href="/skill/data-scientist/" className="text-petrol-deep underline ml-1">データサイエンティスト転職ガイド</Link>
                が次の目標になります。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">データ基盤エンジニア路線</h3>
              <p className="text-sm text-petrol-deep">
                分析だけでなくデータ基盤の構築・運用へ広げる方向。SQLとクラウドの知識が活きます。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">データ戦略・マネージャー路線</h3>
              <p className="text-sm text-petrol-deep">
                組織のデータ活用を牽引する方向。ビジネス理解とマネジメント経験のあるミドルに向きます。
              </p>
            </div>
          </div>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の視点とデメリット</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              ミドル層がデータアナリストを目指す最大の武器は、<strong>業務ドメインの深い理解</strong>です。「この数字が現場で何を意味するか」を肌でわかっている人は、技術だけの若手より説得力のある示唆を出せます。これはアナリストという『ビジネスとデータの橋渡し』職で特に効きます。
            </p>
            <p>
              <strong>デメリット・注意点も正直に書きます。</strong>第一に、即戦力要求が強く、30代未経験は壁が高いこと。第二に、年収が媒体間で大きくぶれ、高い数値（約725万円）を鵜呑みにすると期待値を誤ること。第三に、アナリスト止まりだと年収の伸びに限界を感じる場面があり、データサイエンティストやデータ戦略へのステップアップを視野に入れる必要があることです。
            </p>
            <p>
              年代別の市場感は
              <Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職</Link>・
              <Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>、
              年収交渉は
              <Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉のコツ</Link>
              も合わせてご覧ください。
            </p>
          </div>
        </section>

        <section id="faq" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800">
                  <span>Q. {faq.q}</span>
                  <span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span>
                </summary>
                <div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">
                  A. {faq.a}
                  {faq.aLink && (
                    <>
                      <Link href={faq.aLink.href} className="text-petrol hover:underline">{faq.aLink.label}</Link>
                      {faq.aTail}
                    </>
                  )}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">データアナリストへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            データ分析職に強いIT特化型エージェントで、あなたの強みの活かし方を確認しましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "データサイエンティスト転職ガイド", href: "/skill/data-scientist/" },
              { name: "SQLエンジニア転職ガイド", href: "/skill/sql/" },
              { name: "Pythonエンジニア転職ガイド", href: "/skill/python/" },
              { name: "30代未経験からのエンジニア転職", href: "/knowledge/inexperienced-30s/" },
              { name: "エンジニアのポートフォリオの作り方", href: "/knowledge/portfolio/" },
              { name: "スキル別転職ガイド一覧", href: "/skill/" },
            ].map((item, i) => (
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
