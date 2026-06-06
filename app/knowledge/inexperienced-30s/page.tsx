import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "30代未経験からのIT転職【現実的な入り口と学習ロードマップ】",
  description:
    "30代未経験からのIT転職を現実目線で解説。テスター・サポート・SESなど現実的な入り口、6か月学習ロードマップ、paizaスキルチェックの活用、年収の現実と注意点を実践的にまとめました。",
};

const TITLE = "30代未経験からのIT転職【現実的な入り口と学習ロードマップ】";
const DESC =
  "30代未経験からのIT転職を現実目線で解説。テスター・サポート・SESなど現実的な入り口、6か月学習ロードマップ、paizaスキルチェックの活用、年収の現実と注意点を実践的にまとめました。";

const toc = [
  { id: "conclusion", label: "結論：30代未経験の現実的な戦い方" },
  { id: "market", label: "市場の前提：人材不足という追い風" },
  { id: "entry", label: "現実的な入り口（テスター/サポート/SES）" },
  { id: "roadmap", label: "6か月学習ロードマップ" },
  { id: "paiza", label: "paizaスキルチェックの活用" },
  { id: "portfolio", label: "ポートフォリオの最低ライン" },
  { id: "salary", label: "年収の現実と『投資期間』の考え方" },
  { id: "mistakes", label: "避けるべき3つの失敗" },
  { id: "mid", label: "30代前半と後半で戦略は変わる" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "30代未経験からIT転職は本当に可能ですか？",
    a: "可能です。経済産業省「IT人材需給に関する調査」（2019年公表の試算）では2030年に最大約79万人のIT人材不足が見込まれており、人材を確保したい企業は未経験層にも門戸を開いています。ただし20代と同じ戦い方では難しく、現実的な入り口（テスター・サポート・SES等）から実務経験を作る戦略が必要です。",
  },
  {
    q: "未経験だとまずどんな職種に入るのが現実的ですか？",
    a: "テスター（QA）、テクニカルサポート／ヘルプデスク、SES（客先常駐の開発・運用）が現実的な入り口です。いずれも未経験採用枠が比較的多く、実務経験を積む足場になります。ここで1〜2年の経験を作り、自社開発や希望領域へステップアップするのが王道ルートです。",
  },
  {
    q: "paizaのスキルチェックは未経験でも役立ちますか？",
    a: "役立ちます。paiza転職はプログラミングのスキルチェック（テスト）でランクを判定し、その実力評価をもとにスカウトが届く仕組みで、書類選考免除のケースもあります（2026年時点の二次情報）。学歴・経歴の壁が低く、高ランクなら年齢を問わずスカウトが来るという評判もあり、コードで実力を示したい未経験者の選択肢になります。",
  },
  {
    q: "30代未経験の初年度年収はどのくらいですか？",
    a: "前職より下がるケースが多いのが現実です。未経験スタートでは『最初の1〜2年は投資期間』と割り切り、実務経験を最優先するのが堅実です。参考までに、職種全体では厚生労働省 job tag の『システムエンジニア（受託開発）』で平均年収約578.5万円・平均年齢37.1歳（令和7年賃金構造基本統計調査ベース）という水準があり、経験を積めば到達は十分視野に入ります。",
  },
  {
    q: "プログラミングスクールには通うべきですか？",
    a: "独学でポートフォリオまで作り切る自信がなければ有効です。ただし高額スクールに通えば必ず転職できるわけではありません。『転職保証の条件』『ポートフォリオ制作サポート』『企業紹介の実績』を必ず確認し、最終的に自分でコードを書ける状態を作ることがゴールです。",
  },
  {
    q: "どの言語から学ぶべきですか？",
    a: "Web系を目指すならJavaScript／TypeScript、業務系ならJava、インフラ系ならLinux＋クラウド（AWS等）の基礎がおすすめです。複数に手を広げず、まず1つの言語でポートフォリオを作れるレベルまで深めましょう。paizaのスキルチェックは対応言語が幅広いため、学んだ言語で実力を可視化できます。",
  },
  {
    q: "SES企業に入るのはありですか？",
    a: "最初の足場としてはありです。SESは未経験採用枠が多く、実務経験を積む場として機能します。ただし配属案件によって経験の質に差が出る（いわゆる案件ガチャ）ため、1〜2年で実務経験を作ったら、自社開発や希望領域への転職を計画的に検討しましょう。",
  },
];

export default function Inexperienced30sPage() {
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
      <ArticleJsonLd title={TITLE} description={DESC} url="/knowledge/inexperienced-30s/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "30代未経験からのIT転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">{TITLE}</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | 30代未経験からのIT転職ロードマップ</p>

        <p className="text-slate-600 leading-relaxed mb-2">
          「30代・未経験からITエンジニアは無理なのでは」と不安に思う方は多いですが、結論から言えば可能です。ただし大切なのは『いきなり花形の自社開発を狙う』のではなく、テスター・サポート・SESといった現実的な入り口から実務経験を作ることです。本記事では、入り口の選び方・6か月の学習ロードマップ・paizaスキルチェックの活用まで、30代に最適化した道筋を解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "経済産業省「IT人材需給に関する調査」（2019年公表）",
            "厚生労働省 job tag",
            "paiza転職（2026年時点・二次情報）",
          ]}
        />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-blue-600 hover:underline">{t.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <div className="border-l-4 border-blue-600 bg-blue-50 rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：30代未経験の現実的な戦い方</h2>
            <p className="text-slate-700 leading-relaxed mb-3">
              30代未経験のIT転職は「<strong>現実的な入り口で実務経験を作り、2ステップでキャリアアップする</strong>」のが成功率の高い王道です。最初から理想の職種を狙うより、足場を固める方が結果的に早く到達できます。
            </p>
            <ul className="text-sm text-slate-700 space-y-1.5">
              <li>・入り口はテスター（QA）／サポート／SESが現実的（未経験枠が多い）</li>
              <li>・学習は『1言語をポートフォリオまで』＋paizaスキルチェックで実力を可視化</li>
              <li>・最初の1〜2年は『投資期間』。年収より実務経験を優先する</li>
            </ul>
          </div>
        </section>

        {/* 市場 */}
        <section id="market" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">市場の前提：人材不足という追い風</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            未経験者にとっての最大の追い風は、IT人材の構造的な不足です。経済産業省「IT人材需給に関する調査」（2019年公表の試算）では、2030年に最大約79万人のIT人材が不足すると見込まれています。人手が足りない市場では、企業は未経験層も育成して確保しようとします。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <p className="text-sm text-slate-600 leading-relaxed">
              一方で「未経験歓迎」と書かれていても、企業は『最低限のコードが書けるか』『学び続けられるか』を見ています。追い風はあくまで土台で、内定の決め手になるのは事前の準備（学習・ポートフォリオ・スキル可視化）です。職種全体の到達水準としては、厚生労働省 job tag のシステムエンジニア（受託開発）で平均年収約578.5万円・平均年齢37.1歳（令和7年賃金構造基本統計調査ベース）という数字があり、経験を積めば射程に入ります。
            </p>
          </div>
        </section>

        {/* 入り口 */}
        <section id="entry" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">現実的な入り口（テスター/サポート/SES）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            30代未経験が最短で「IT実務経験あり」のステータスを得るには、入り口の選び方が重要です。代表的な3つの入り口を、メリット・注意点とともに整理します。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">入り口</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">向いている人</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">次のステップ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-700 font-medium">テスター／QA</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">丁寧さ・観察力が強み。まず開発現場の進め方を知りたい人</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">テスト自動化エンジニア → 開発</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-700 font-medium">テクニカルサポート／ヘルプデスク</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">前職が接客・営業など対人系。製品理解と切り分け力を活かせる人</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">社内SE・インフラ・カスタマーサクセス</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-700 font-medium">SES（客先常駐）</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">まず開発・運用の実務経験を作りたい人。採用枠が多い</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">自社開発・受託（1〜2年後）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-1.5">テスター／QAの注意点</h3>
              <p className="text-sm text-blue-700 leading-relaxed">手動テスト中心の現場に長居すると開発スキルが伸びにくい。テスト自動化（コードを書く領域）や開発へ移る計画を最初から持つこと。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-1.5">SESの注意点</h3>
              <p className="text-sm text-blue-700 leading-relaxed">配属案件によって経験の質に差が出る（案件ガチャ）。面談で『どんな案件に入れるか』『開発に携われるか』を必ず確認し、運用監視だけで終わらない環境を選ぶ。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-1.5">前職の掛け算を忘れない</h3>
              <p className="text-sm text-blue-700 leading-relaxed">営業出身ならカスタマーサクセス、金融出身ならFinTechの社内SEなど、前職のドメイン知識が活きるポジションは未経験でも通りやすい。</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm mt-4">
            未経験向けの求人に強いエージェントの比較は<Link href="/compare/inexperienced/" className="text-blue-600 hover:underline">未経験向けエージェント比較</Link>を参照してください。
          </p>
        </section>

        {/* ロードマップ */}
        <section id="roadmap" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">6か月学習ロードマップ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            働きながらでも進められる現実的な6か月プランです。ポイントは「1言語をポートフォリオまで深める」「途中でpaizaスキルチェックを挟んで実力を測る」の2点です。
          </p>
          <div className="space-y-4">
            {[
              { period: "1〜2か月目", title: "基礎学習", desc: "HTML/CSS/JavaScript（または学びたい1言語）の基礎。ProgateやドットインストールなどでOK。1日1〜2時間を習慣化する。" },
              { period: "2か月目末", title: "paizaスキルチェック（初回）", desc: "まず1度受けて現在地を把握。Dランクからでも問題ない。継続学習の指標として使う。" },
              { period: "3〜4か月目", title: "フレームワーク／実践", desc: "React・Vue、またはサーバーサイド（Rails・Laravel等）を学習。小さなアプリを写経ではなく自分で組む。" },
              { period: "5か月目", title: "ポートフォリオ制作", desc: "オリジナルWebアプリを1つ企画・設計・開発。GitHub公開＋READMEで設計意図を説明する。" },
              { period: "5か月目末", title: "paizaスキルチェック（再挑戦）", desc: "ランクアップを狙う。B以上だとスカウトが届きやすくなる（二次情報）。スコアを職務経歴書の補強材料にする。" },
              { period: "6か月目", title: "転職活動開始", desc: "職務経歴書作成、エージェント登録、現実的な入り口の求人へ応募。学習は継続したまま進める。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center min-w-[88px] h-8 rounded-full bg-blue-600 text-white font-bold text-xs shrink-0 px-2">{item.period}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* paiza */}
        <section id="paiza" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">paizaスキルチェックの活用</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            30代未経験の弱点は「実務実績がない」ことです。これを補えるのがpaiza転職のスキルチェックです。プログラミングのテストでランク（S〜D）が判定され、その実力評価をもとにスカウトが届く仕組みで、書類選考免除のケースもあります（2026年時点の二次情報）。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-4">
            <p className="text-sm font-bold text-slate-700 mb-3">未経験者がpaizaを使うメリット</p>
            <ul className="text-sm text-slate-600 space-y-2">
              <li className="flex gap-2.5 items-start"><span className="text-blue-600 font-bold shrink-0">✓</span><span>スキルが数値（ランク）で可視化され、『実績がない』弱点を客観指標で補える</span></li>
              <li className="flex gap-2.5 items-start"><span className="text-blue-600 font-bold shrink-0">✓</span><span>学歴・経歴の壁が低く、コードで評価される（二次情報の評判）</span></li>
              <li className="flex gap-2.5 items-start"><span className="text-blue-600 font-bold shrink-0">✓</span><span>高ランクなら年齢を問わずスカウトが届くという声がある</span></li>
              <li className="flex gap-2.5 items-start"><span className="text-blue-600 font-bold shrink-0">✓</span><span>書類選考免除のケースがあり、職歴で弾かれにくい</span></li>
            </ul>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="text-sm font-bold text-amber-800 mb-2">注意点（二次情報の評判より）</p>
            <ul className="text-sm text-amber-700 space-y-1.5">
              <li>・希望条件と合わないスカウトが届くことがある</li>
              <li>・ランクB以上でないとスカウトが届きにくいという声がある</li>
              <li>・総求人数は大手エージェントより少ないため、他サービスとの併用が前提</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm mt-4">
            使い方は<Link href="/review/paiza/" className="text-blue-600 hover:underline">paiza転職の評判・使い方</Link>、コーディングテスト全般の対策は<Link href="/knowledge/coding-test/" className="text-blue-600 hover:underline">コーディングテスト対策</Link>で詳しく解説しています。
          </p>
        </section>

        {/* ポートフォリオ */}
        <section id="portfolio" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ポートフォリオの最低ライン</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「未経験です」だけでは企業は判断できません。最低限、次を満たすオリジナルアプリを1つ用意しましょう。チュートリアルの写経のままでは評価されにくい点に注意します。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <ul className="space-y-2.5 text-sm text-slate-700">
              {[
                "自分で企画したオリジナルのテーマである（チュートリアルの丸写しでない）",
                "CRUD（作成・閲覧・更新・削除）など基本機能が一通り動く",
                "GitHubで公開され、READMEに『何を・なぜ・どう作ったか』が書いてある",
                "可能ならデプロイ済みで、実際に触れるURLがある",
                "工夫した点・つまずいた点・改善案を言語化できる",
              ].map((c, i) => (
                <li key={i} className="flex gap-2.5 items-start">
                  <span className="text-blue-600 font-bold shrink-0">✓</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm mt-4">
            作り込み方は<Link href="/knowledge/portfolio/" className="text-blue-600 hover:underline">ポートフォリオ作成ガイド</Link>を参照してください。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の現実と『投資期間』の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            未経験スタートでは、前職より年収が下がるのが一般的です。ここで重要なのは、最初の1〜2年を『投資期間』と捉え、年収より実務経験を優先する割り切りです。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              職種全体で見れば、システムエンジニア（受託開発）の平均年収は約578.5万円・平均年齢37.1歳（厚生労働省 job tag／令和7年賃金構造基本統計調査ベース）という水準です。未経験で入った直後はこの平均を下回ることが多いですが、実務経験を積みスキルを伸ばせば、平均水準への到達は現実的な目標になります。
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              30代の年収相場やキャリア設計は<Link href="/knowledge/salary-30s/" className="text-blue-600 hover:underline">30代エンジニアの年収相場</Link>、長期のキャリア設計は<Link href="/knowledge/career-plan/" className="text-blue-600 hover:underline">キャリアプラン設計</Link>で扱っています。
            </p>
          </div>
        </section>

        {/* 失敗 */}
        <section id="mistakes" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">避けるべき3つの失敗</h2>
          <div className="space-y-4">
            {[
              { t: "高額スクールに頼り切る", d: "数十万円のスクールに通えば自動で転職できるわけではない。スクールは学習のペースメーカー。最終的に自分でコードを書ける状態を作らないと面接で見抜かれる。" },
              { t: "最初から年収・職種を絞りすぎる", d: "『自社開発しか受けない』『年収は下げたくない』と最初から絞ると、実務経験を作る機会を逃す。まずは足場を作り、経験を武器に次で狙う。" },
              { t: "学習だけで応募しない", d: "完璧を目指して学習を続け、いつまでも応募しないのは機会損失。ポートフォリオが最低ラインに達したら、学習を続けながら応募を始める。" },
            ].map((x, i) => (
              <div key={i} className="bg-red-50 rounded-lg p-5">
                <h3 className="font-bold text-red-800 mb-1.5">{x.t}</h3>
                <p className="text-sm text-red-700 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 30代視点 */}
        <section id="mid" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代前半と後半で戦略は変わる</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">30代前半：純粋な未経験ルートが効く</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                30代前半は未経験歓迎の開発・SES求人がまだ一定数あります。学習→ポートフォリオ→paizaで実力を示す王道が通用しやすい年代。早めに動くほど選択肢が広がります。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">30代後半：前職の掛け算で勝負する</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                30代後半は『純粋未経験』より、前職のドメイン知識×ITを掛け合わせたポジション（社内SE・DX推進・業界特化のサポート等）が現実的です。40代に向けた動き方は<Link href="/knowledge/40s-reality/" className="text-blue-600 hover:underline">40代エンジニア転職のリアル</Link>も参考になります。
              </p>
            </div>
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
          <h2 className="text-xl font-bold mb-3">未経験からの第一歩を、無料で相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            未経験向け求人に強いエージェントなら、現実的な入り口の求人紹介から職務経歴書の添削まで無料でサポートしてくれます。
          </p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "30代エンジニアの年収相場", href: "/knowledge/salary-30s/" },
              { name: "ポートフォリオ作成ガイド", href: "/knowledge/portfolio/" },
              { name: "paiza転職の評判・使い方", href: "/review/paiza/" },
              { name: "未経験向けエージェント比較", href: "/compare/inexperienced/" },
              { name: "エンジニアのセカンドキャリア", href: "/knowledge/second-career/" },
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors"
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
