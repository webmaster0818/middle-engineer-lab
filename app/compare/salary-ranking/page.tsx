import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/compare/salary-ranking/" },
  title: "転職エージェント年収アップ実績の公表値一覧と読み方【2026年】",
  description:
    "転職エージェント各社の年収アップ実績は計測時期も定義もバラバラで横並び比較はできません。本記事は公表値を取得時点付きで一覧化し、数値の読み方と30代・40代の年収アップ戦略を誠実に解説します。",
};

const faqs = [
  {
    q: "結局どのエージェントが一番年収アップしますか？",
    a: "数値だけで『一番』を決めることはできません。各社の年収アップ実績は計測期間も定義（対象者・年収アップの基準）もバラバラで、横並びでランキング化できないためです。本記事は順位付けではなく、公表値を取得時点付きで並べ、読み方を示す構成にしています。あなたの領域・年代に強い社を軸に選ぶのが現実的です。",
  },
  {
    q: "公表されている年収アップ率はそのまま信じていいですか？",
    a: "参考値として扱ってください。『内定承諾者のうち』『年収アップ希望者のうち』など母集団が異なり、計測時期も2023年〜2025年とばらつきます。type転職のように2021〜2022年と古いデータもあります。同じ条件で集計された数値ではないため、社同士の優劣を断定する材料にはなりません。",
  },
  {
    q: "なぜ各社の数値を横並びで比較できないのですか？",
    a: "(1)計測期間が違う（2021年〜2025年と幅がある）、(2)対象者の定義が違う（全利用者か希望者か内定者か）、(3)『年収アップ』の基準が違う（応募時比か前職比か）、(4)一次情報か二次集計かが混在している、という4点が主な理由です。単位や条件が揃っていない数値を並べてランキング化すると誤解を招きます。",
  },
  {
    q: "転職で年収アップしやすいエンジニアの特徴は？",
    a: "現職の年収が市場相場より低い人、モダンな技術スタックを持つ人、チームリードなどマネジメント経験がある人は年収が上がりやすい傾向があります。複数オファーを比較できる状態を作ることも、交渉上の有利材料になります。",
  },
  {
    q: "転職で年収が下がることもありますか？",
    a: "あります。未経験分野への転向、規模の小さい企業への移籍、レガシー技術中心の経歴などでは下がる場合があります。IT特化型エージェントを使うと、想定年収レンジを事前に把握しやすく、下振れリスクを見極められます。",
  },
  {
    q: "年収交渉はエージェントに任せられますか？",
    a: "はい。年収交渉はエージェントの主要な役割の一つです。求職者が直接交渉するのは気まずいものですが、エージェントが間に入ることで進めやすくなります。複数オファーがあると交渉材料になります。",
  },
  {
    q: "年収アップのために何社くらい登録すべきですか？",
    a: "2〜3社が目安です。複数のオファーを比較できると交渉が有利になります。IT特化型（レバテックキャリア・Geekly等）を軸に、ハイクラス向けのビズリーチや求人量の多い総合型を併用する構成が効果的です。",
  },
  {
    q: "古いデータ（type転職など）はどう扱えばいいですか？",
    a: "計測時期を確認し、現在の数値ではない前提で参考にしてください。type転職の年収アップ実績は2021年10月〜2022年9月の自社調査で、市場環境が変わった現在にそのまま当てはめることはできません。本記事では古いデータにはその旨を明記しています。",
  },
];

type Row = {
  slug: string;
  name: string;
  type: "IT特化型" | "ハイクラス" | "総合型" | "転職サイト";
  value: string;
  period: string;
  basis: string;
  note: string;
  review: string;
  stale?: boolean;
};

// 各社の「年収アップに関する公表値」。横並び比較不可のため順位はつけない。
const rows: Row[] = [
  {
    slug: "levtech",
    name: "レバテックキャリア",
    type: "IT特化型",
    value: "応募時年収との差が70万円以上＝内定承諾者の3人に2人",
    period: "2023年1月〜2024年3月実績",
    basis: "公式系。母集団は『内定承諾者』",
    note: "高年収求人比率が高く、年収レンジの引き上げを狙いやすい。",
    review: "/review/levtech/",
  },
  {
    slug: "geekly",
    name: "Geekly（ギークリー）",
    type: "IT特化型",
    value: "年収アップ率 約81%／平均上昇額 約76万円",
    period: "2025年9月時点",
    basis: "二次情報。母集団の定義は明示されていない",
    note: "Web/ゲーム領域に強く提案スピードが速い。",
    review: "/review/geekly/",
  },
  {
    slug: "doda-it",
    name: "doda ITエンジニア",
    type: "総合型",
    value: "転職者の約6割が年収アップ／IT・通信の平均決定年収 469万円→486万円",
    period: "2024年度（2025年5月公表）",
    basis: "パーソルキャリア『決定年収レポート』。対象は転職者全体",
    note: "求人数が国内最大級。母数で年収アップ機会を確保しやすい。",
    review: "/review/doda-it/",
  },
  {
    slug: "mynavi-it",
    name: "マイナビIT AGENT",
    type: "IT特化型",
    value: "年収アップ率 73.7%（定着率97.5%）",
    period: "計測時期は明示されていない",
    basis: "転職メディア集計の二次情報",
    note: "20〜30代の若手層に強く、サポートが手厚い。",
    review: "/review/mynavi-it/",
  },
  {
    slug: "type-agent",
    name: "type転職エージェントIT",
    type: "IT特化型",
    value: "年収アップ希望者の約71%が増収／平均増額92万円（ITエンジニアは124万円）",
    period: "2021年10月〜2022年9月の自社調査（古い）",
    basis: "自社調査。母集団は『年収アップ希望者』",
    note: "首都圏IT/Webに強く年収交渉に注力。ただしデータが古い点に注意。",
    review: "/review/type-agent/",
    stale: true,
  },
  {
    slug: "bizreach-it",
    name: "ビズリーチ",
    type: "ハイクラス",
    value: "年収アップ率の統一公表値はなし（年収1,000万円以上求人が全体の約4割）",
    period: "求人割合は二次情報",
    basis: "ハイクラス定義は年収750万円以上（二次）",
    note: "スカウト型で市場価値を測れる。高年収帯のオファーが届きやすい。",
    review: "/review/bizreach-it/",
  },
  {
    slug: "recruit-it",
    name: "リクルートエージェントIT",
    type: "総合型",
    value: "統一された公式の年収アップ率は未確認",
    period: "—",
    basis: "断定できる公表値なし",
    note: "求人数が国内最大級。非公開求人が豊富で母数を確保できる。",
    review: "/review/recruit-it/",
  },
  {
    slug: "workport",
    name: "ワークポート",
    type: "総合型",
    value: "年収アップ実績の公表値は確認不可",
    period: "—",
    basis: "断定できる公表値なし",
    note: "全国47都道府県57拠点。未経験歓迎求人も多くスピード重視。",
    review: "/review/workport/",
  },
  {
    slug: "green",
    name: "Green",
    type: "転職サイト",
    value: "エージェント型の年収交渉サポートはなし（直接応募中心）",
    period: "—",
    basis: "成功報酬型の転職サイト形態のため該当データなし",
    note: "カジュアル面談・直接応募が中心。自分で動ける人向け。",
    review: "/review/green/",
  },
  {
    slug: "paiza",
    name: "paiza転職",
    type: "転職サイト",
    value: "年収アップの統一公表値はなし（スキルランクでスカウト）",
    period: "—",
    basis: "スカウト型の転職サイト形態のため該当データなし",
    note: "スキルチェックのランクで実力評価。書類選考免除あり。",
    review: "/review/paiza/",
  },
];

const typeBadge = (type: Row["type"]) =>
  type === "IT特化型"
    ? "bg-petrol-soft text-petrol-deep"
    : type === "ハイクラス"
    ? "bg-purple-100 text-purple-700"
    : type === "転職サイト"
    ? "bg-amber-100 text-amber-700"
    : "bg-green-100 text-green-700";

const toc = [
  { id: "conclusion", label: "結論：横並びランキングはできない理由" },
  { id: "table", label: "年収アップ公表値の一覧（取得時点付き）" },
  { id: "howto-read", label: "数値の読み方ガイド（4つの注意点）" },
  { id: "details", label: "主要社の公表値詳細" },
  { id: "easy", label: "年収アップしやすい人の5つの特徴" },
  { id: "nego", label: "年収交渉の4つのポイント" },
  { id: "mid-view", label: "30代・40代の年収アップ戦略" },
  { id: "faq", label: "よくある質問" },
];

export default function SalaryRankingPage() {
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
        title="転職エージェント年収アップ実績の公表値一覧と読み方【2026年】"
        description="転職エージェント各社の年収アップ実績は計測時期も定義もバラバラで横並び比較はできません。公表値を取得時点付きで一覧化し、数値の読み方と30代・40代の年収アップ戦略を誠実に解説します。"
        url="/compare/salary-ranking/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エージェント比較", href: "/compare/agents/" },
          { name: "年収アップ実績の公表値一覧" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          転職エージェント 年収アップ実績の公表値一覧と読み方【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-4">
          最終更新: 2026年6月 | 各社の公表値を取得時点付きで一覧化
        </p>
        <p className="text-slate-600 leading-relaxed mb-2">
          「転職エージェントの年収アップランキング」を探している方へ。先に結論をお伝えすると、各社が公表する年収アップ実績は<strong>計測時期も定義もバラバラで、横並びのランキングにはできません</strong>。本記事は順位付けではなく、各社の公表値を取得時点付きで一覧化し、その数値をどう読むべきかを誠実に解説する「公表値の一覧＋読み方ガイド」です。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "各社公式・公式系発表",
            "パーソルキャリア『決定年収レポート』(2025年5月公表)",
            "転職メディア集計の二次情報",
          ]}
        />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-10" aria-label="目次">
          <p className="font-bold text-slate-700 mb-3">目次</p>
          <ol className="space-y-2 text-sm text-petrol">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論ファースト */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：横並びランキングはできない理由</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-4">
            <p className="font-bold text-amber-900 mb-3">
              「年収アップ率No.1」を数値で決めることはできません。各社の数値は前提が揃っていないからです。
            </p>
            <ul className="space-y-2 text-sm text-amber-900">
              <li>・計測期間がバラバラ（2021年〜2025年と幅があり、type転職は2021〜2022年と古い）</li>
              <li>・母集団の定義が違う（全利用者／年収アップ希望者／内定承諾者）</li>
              <li>・一次情報と二次集計が混在している</li>
            </ul>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            そのため本記事ではあえて順位をつけず、各社の公表値を「取得時点」と「母集団の定義」付きで並べます。年収アップを狙うなら、数値のランキングを追うより、<strong>自分の領域・年代に強いIT特化型を軸に2〜3社を併用し、複数オファーで交渉する</strong>のが現実的です。順位付けをしない方針の背景は
            <Link href="/editorial/" className="text-petrol hover:underline">
              記事制作ポリシー
            </Link>
            に基づいています。
          </p>
        </section>

        {/* 公表値一覧テーブル */}
        <section id="table" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収アップ公表値の一覧（取得時点付き）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[760px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">サービス名</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">タイプ</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">公表値</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">計測期間・時点</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">母集団・出典の別</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.slug} className="hover:bg-slate-50 align-top">
                    <td className="px-3 py-3 border border-slate-200 font-medium">
                      <Link href={r.review} className="text-petrol hover:underline">
                        {r.name}
                      </Link>
                    </td>
                    <td className="px-3 py-3 border border-slate-200">
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${typeBadge(r.type)}`}>
                        {r.type}
                      </span>
                    </td>
                    <td className="px-3 py-3 border border-slate-200 text-xs">{r.value}</td>
                    <td className="px-3 py-3 border border-slate-200 text-xs">
                      {r.stale ? (
                        <span className="inline-block px-1.5 py-0.5 rounded bg-rose-100 text-rose-700 text-[11px] font-medium">
                          {r.period}
                        </span>
                      ) : (
                        r.period
                      )}
                    </td>
                    <td className="px-3 py-3 border border-slate-200 text-xs">{r.basis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            ※ 上記は各社が公表・発表している数値を取得時点付きで並べたものです。計測期間・母集団・出典の別が揃っていないため、数値の大小で社の優劣を判断することはできません。「—」は断定できる公表値がないことを示します。赤色の時点表記は計測が古いデータです。
          </p>
        </section>

        {/* 読み方ガイド */}
        <section id="howto-read" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">数値の読み方ガイド（4つの注意点）</h2>
          <div className="space-y-4">
            {[
              {
                t: "1. 計測期間を必ず確認する",
                d: "年収アップ率は集計した時期の市場環境に左右されます。本一覧でも2023年〜2025年のものが混在し、type転職に至っては2021年10月〜2022年9月と古い自社調査です。期間が違う数値を同じ土俵で比べることはできません。",
              },
              {
                t: "2. 母集団（誰を対象にしたか）を見る",
                d: "『内定承諾者のうち』『年収アップ希望者のうち』『転職者全体の約6割』では、分母がまったく異なります。希望者だけを母集団にすれば率は高く出やすく、全利用者を母集団にすれば率は控えめに出ます。率の数字だけを比べても意味がありません。",
              },
              {
                t: "3. 一次情報か二次集計かを区別する",
                d: "公式・公式系の発表（例：doda『決定年収レポート』、レバテックの公式系データ）と、転職メディアが集計した二次情報では信頼度が異なります。本一覧では出典の別を明記しています。二次情報は参考度を下げて読みましょう。",
              },
              {
                t: "4. 『率』と『額』の両方を見る",
                d: "アップ率が高くても1人あたりの上昇額が小さい場合や、逆に額が大きくても一部のハイクラス転職に偏っている場合があります。率と額は別物として、両面から眺めるのが安全です。",
              },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{item.t}</h3>
                <p className="text-sm text-slate-600">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 主要社の詳細 */}
        <section id="details" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-6">主要社の公表値詳細</h2>
          <div className="space-y-4">
            {rows
              .filter((r) => ["levtech", "geekly", "doda-it", "mynavi-it", "type-agent"].includes(r.slug))
              .map((r) => (
                <div key={r.slug} className="border border-slate-200 rounded-lg p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-slate-800">{r.name}</h3>
                    <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${typeBadge(r.type)}`}>
                      {r.type}
                    </span>
                  </div>
                  <p className="text-sm text-slate-700 mb-2">
                    <span className="font-medium text-slate-500">公表値：</span>
                    {r.value}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500 mb-2">
                    <span>計測期間・時点：{r.period}</span>
                    <span>母集団・出典：{r.basis}</span>
                  </div>
                  {r.stale && (
                    <p className="text-xs text-rose-600 mb-2">
                      ※ このデータは2021〜2022年の調査で古いため、現在の実績としては扱えません。
                    </p>
                  )}
                  <p className="text-sm text-slate-600">{r.note}</p>
                  <Link href={r.review} className="inline-block mt-2 text-xs text-petrol hover:underline">
                    {r.name}の詳細レビューを見る →
                  </Link>
                </div>
              ))}
          </div>
          <p className="text-xs text-slate-500 mt-4">
            ※ ビズリーチ・リクルートエージェントIT・ワークポート・Green・paiza転職は、統一された年収アップ率の公表値が確認できないか、エージェント型の年収交渉サポートを持たない形態のため、上の一覧表に概要のみ記載しています。
          </p>
        </section>

        {/* 年収UPしやすい人 */}
        <section id="easy" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収アップしやすい人の5つの特徴</h2>
          <div className="space-y-4">
            {[
              {
                t: "1. 現職の年収が市場相場より低い",
                d: "長く同じ会社にいると市場の年収上昇に追いつかないことがあります。転職で『適正年収』に修正されるだけで上がるケースもあります。レバテック公表値では正社員SEの平均年収は30代約499万円・40代約618万円（2025年）です。",
              },
              {
                t: "2. モダンな技術スタックを持っている",
                d: "クラウドインフラとバックエンドの掛け合わせなど、需要の高い技術スキルは交渉で有利に働きやすい傾向があります。",
              },
              {
                t: "3. マネジメント経験がある",
                d: "チームリードや採用面接の経験があると、EM（エンジニアリングマネージャー）など上位ポジションの選択肢が広がります。技術力＋マネジメントの掛け合わせは評価されやすい組み合わせです。",
              },
              {
                t: "4. 複数のオファーを比較できる",
                d: "複数エージェントから複数オファーを得ると、交渉材料になります。『他社からこの条件で内定が出ている』は強い交渉カードです。",
              },
              {
                t: "5. IT特化型エージェントを利用している",
                d: "IT特化型は業界の年収相場に精通しているため、適切な交渉がしやすい傾向があります。総合型を併用して求人の母数も確保しましょう。",
              },
            ].map((item, i) => (
              <div key={i} className="bg-petrol-soft rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-2">{item.t}</h3>
                <p className="text-sm text-petrol-deep">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 年収交渉のポイント */}
        <section id="nego" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収交渉の4つのポイント</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "希望年収は「レンジ」で伝える", desc: "「700万円希望」ではなく「700〜800万円」と幅で伝えます。下限が希望額、上限がストレッチ目標。エージェントが交渉の余地を持てます。" },
                { num: "2", title: "現年収を正直に伝える", desc: "現年収を盛ると入社後のギャップやトラブルの原因になります。正直に伝え、市場価値に基づく適正年収を算出してもらいましょう。" },
                { num: "3", title: "年収以外の条件も交渉する", desc: "基本給だけでなく、賞与・ストックオプション・リモート・フレックス・副業可否なども交渉対象。総合的な待遇で判断します。" },
                { num: "4", title: "内定後に交渉する", desc: "交渉は内定後が最も効果的です。企業が『採りたい』と決めた後なら余地が生まれやすく、気まずい交渉はエージェントに代行してもらえます。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-slate-600 mt-4">
            交渉の進め方は
            <Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">
              年収交渉の完全ガイド
            </Link>
            で詳しく解説しています。
          </p>
        </section>

        {/* 30代・40代視点 */}
        <section id="mid-view" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の年収アップ戦略</h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              30代・40代の年収アップは、ランキング上位のエージェントを選ぶことよりも、<strong>自分の市場価値を正しく把握し、複数オファーで交渉できる状態を作ること</strong>に懸かっています。レバテックの公表値では正社員SEの平均年収は30代約499万円・40代約618万円（2025年）、年収1,000万円以上の割合は30代8.01%・40代12.67%（同年）とされ、上位レンジは管理職や高度専門職に偏っています。
            </p>
            <p>
              つまりミドル世代の年収アップは、単なる転職ではなく「役割を一段上げる転職」になりやすいということです。ビズリーチのようなスカウト型で届くオファーの年収帯を見れば、現職に残るべきか動くべきかの客観的な判断材料になります。
            </p>
            <p>
              一方で、公表されている年収アップ率を鵜呑みにして「この社なら必ず上がる」と考えるのは危険です。前述のとおり各社の数値は前提が揃わず、最終的に年収を決めるのは本人のスキル・経験・交渉です。数値は目安として眺めつつ、自分の領域に強い特化型を軸に、求人量を補う総合型を併用するのが堅実です。
            </p>
            <p>
              年代別の年収相場は
              <Link href="/knowledge/salary-30s/" className="text-petrol hover:underline">
                30代の年収相場
              </Link>
              ・
              <Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">
                40代の年収相場
              </Link>
              、転職で年収が上がるかは
              <Link href="/knowledge/salary-change/" className="text-petrol hover:underline">
                エンジニア転職で年収は上がる？
              </Link>
              で解説しています。
            </p>
          </div>
        </section>

        {/* FAQ */}
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

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">数値より「自分の市場価値」を確かめよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            年収アップ率の数字は前提がバラバラで比較できません。まずはIT特化型に登録し、実際に届く求人・オファーの年収帯であなたの市場価値を確認しましょう。登録・利用は無料です。
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
              { name: "エンジニア転職エージェント10社比較", href: "/compare/agents/" },
              { name: "レバテックキャリア vs Geekly比較", href: "/compare/levtech-vs-geekly/" },
              { name: "年収交渉の完全ガイド", href: "/knowledge/salary-negotiation/" },
              { name: "エンジニア転職で年収は上がる？", href: "/knowledge/salary-change/" },
              { name: "30代エンジニアの年収相場", href: "/knowledge/salary-30s/" },
              { name: "40代エンジニアの年収相場", href: "/knowledge/salary-40s/" },
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
