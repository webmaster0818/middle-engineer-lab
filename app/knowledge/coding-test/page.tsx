import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "コーディングテスト対策【頻出領域とLeetCode・AtCoder活用法】";
const DESCRIPTION =
  "エンジニア転職のコーディングテスト対策を徹底解説。頻出アルゴリズム領域、LeetCode・AtCoder・paizaの使い分け、当日の進め方を30代・40代向けにまとめました。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

const faqs = [
  {
    q: "コーディングテストの準備にどのくらいの時間が必要ですか？",
    a: "経験やブランクによりますが、毎日1〜2問を解く前提で2〜4週間が一つの目安です。アルゴリズムから離れて長い場合は1〜2ヶ月確保すると安心です。短期間で詰め込むより、毎日少しずつパターンに触れる方が定着します。",
  },
  {
    q: "どの言語で解くのが有利ですか？",
    a: "最も使い慣れた言語が有利です。そのうえでPythonは記述量が少なく標準ライブラリが充実しているため、コーディングテストで人気があります。Java・Go・TypeScriptなども問題なく使えます。企業が言語を指定する場合もあるので事前に確認しましょう。",
  },
  {
    q: "LeetCode・AtCoder・paizaはどう使い分ければいいですか？",
    a: "面接型のコーディングテスト対策ならLeetCodeが定番で、企業の出題に近い問題が揃います。AtCoderは競技プログラミングで、実装速度とアルゴリズム地力を鍛えるのに向きます。paizaはスキルチェックのランクが転職スカウトに直結するため、日本のIT転職では実利が大きいのが特徴です。",
  },
  {
    q: "30代・40代でもコーディングテストは避けられませんか？",
    a: "メガベンチャーや外資系IT企業では年齢に関係なく課されることが多いです。一方、日系企業の経験者採用ではコーディングテストを省略する求人もあります。選考フローは企業ごとに異なるため、エージェントに事前確認するのが確実です。",
  },
  {
    q: "実務経験が長いのにアルゴリズム問題が苦手です",
    a: "実務とコーディングテストは別スキルなので珍しくありません。日常業務でアルゴリズムを意識する機会は少ないからです。基本的なデータ構造（配列・ハッシュ・木・グラフ）と探索・ソートを復習し、典型パターンを20〜30問なぞるだけでも多くの問題に対応できるようになります。",
  },
  {
    q: "オンラインテストとライブコーディングの違いは？",
    a: "オンラインテストは制限時間内に自力で解く形式で、正確さと効率が重視されます。ライブコーディングは面接官の前で思考を説明しながら解く形式で、コミュニケーション力も評価されます。後者では『今〜を考えています』と声に出す練習が有効です。",
  },
  {
    q: "コーディングテストが苦手な場合の転職戦略は？",
    a: "コーディングテストを課さない企業も多くあります。IT特化型エージェントに『コーディングテストなしの求人を優先したい』と伝えると、選考フローに含まない求人を中心に紹介してもらえます。スカウト型のpaizaで高ランクを取り、書類選考免除を狙う方法もあります。",
  },
  {
    q: "paizaのランクはどのくらいを目指せばいいですか？",
    a: "一般にB以上でスカウトが届きやすくなり、A以上だとより好条件の企業からの反応が増える傾向があります（口コミプラットフォーム上の傾向）。まずはBを安定して取れる状態を目標にし、頻出のシミュレーション問題に慣れるのが現実的です。",
  },
];

const sections = [
  { id: "conclusion", label: "結論：頻出領域を絞って毎日少しずつ" },
  { id: "areas", label: "頻出アルゴリズム領域" },
  { id: "platforms", label: "LeetCode・AtCoder・paizaの使い分け" },
  { id: "method", label: "練習方法（4週間プラン）" },
  { id: "tips", label: "当日の進め方と差がつくコツ" },
  { id: "age", label: "30代・40代のコーディングテスト視点" },
  { id: "faq", label: "よくある質問" },
];

const areas = [
  { name: "配列・文字列操作", freq: "非常に高い", ex: "Two Sum、回文判定、スライディングウィンドウ", lvl: "Easy〜Medium" },
  { name: "ハッシュマップ", freq: "非常に高い", ex: "頻度カウント、重複検出、グルーピング", lvl: "Easy〜Medium" },
  { name: "二分探索", freq: "高い", ex: "ソート済み配列の探索、境界探索", lvl: "Medium" },
  { name: "スタック・キュー", freq: "中程度", ex: "括弧の整合性、単調スタック", lvl: "Easy〜Medium" },
  { name: "BFS / DFS", freq: "高い", ex: "木の走査、グラフ探索、連結成分", lvl: "Medium〜Hard" },
  { name: "動的計画法（DP）", freq: "中程度", ex: "最長部分列、ナップサック、階段登り", lvl: "Medium〜Hard" },
  { name: "ソート・貪欲法", freq: "中程度", ex: "区間スケジューリング、k番目の要素", lvl: "Medium" },
];

const platforms = [
  {
    name: "LeetCode",
    color: "blue",
    purpose: "面接型コーディングテスト対策の定番",
    detail: "企業の出題に近い問題が体系的に揃う。Top Interview 150 などのコース機能で頻出問題を効率よく回せる。英語UIだが解説が豊富。まずEasy→Mediumの順で頻出パターンを潰すのが王道。",
    fit: "外資・メガベンチャー志望、面接でのライブコーディング対策",
  },
  {
    name: "AtCoder",
    color: "blue",
    purpose: "アルゴリズム地力と実装速度を鍛える",
    detail: "日本語の競技プログラミングサイト。毎週コンテストが開催され、過去問（AtCoder Problems）で段階的に練習できる。実装速度と計算量感覚が自然に身につく。茶〜緑色レートが取れれば多くの転職向けテストに対応しやすい。",
    fit: "アルゴリズムを基礎から鍛え直したい人、地力を底上げしたい人",
  },
  {
    name: "paiza",
    color: "blue",
    purpose: "スキルチェックのランクが転職スカウトに直結",
    detail: "スキルチェック問題を解いてS〜Eのランクを取得し、そのランクで企業からスカウトを受ける仕組み。書類選考免除が用意される求人もある。日本語・日本企業向けで実利が大きい。スカウト型のため個別の仲介サポートは手薄な点に注意。",
    fit: "学歴・経歴の壁を実力で越えたい人、日系IT企業を効率よく狙いたい人",
  },
];

const plan = [
  { num: "Week1", title: "基礎固め", desc: "配列・文字列・ハッシュマップの基本問題を毎日2問。計算量（Big O）の復習も行い、自分の解法が何オーダーか言えるようにする。" },
  { num: "Week2", title: "中級パターン", desc: "二分探索・スタック/キュー・リンクリストのMedium問題へ。解法パターンを自分の言葉でノート化し、再現できる状態にする。" },
  { num: "Week3", title: "グラフ・木・DP", desc: "BFS/DFS・動的計画法のMedium問題を練習。解けなくても解説を読み、パターンを理解して翌日に解き直すのが重要。" },
  { num: "Week4", title: "模擬テスト", desc: "制限時間を設けて本番形式で。60分で2問を目標に。ライブコーディング想定なら声に出して思考を説明する練習も入れる。" },
];

const tips = [
  { t: "まずブルートフォースで動かす", d: "最適解にこだわる前に、まず正しく動くコードを書く。動いてから計算量を改善する方が、白紙より圧倒的に評価される。" },
  { t: "エッジケースを先に洗い出す", d: "空配列・単一要素・最大最小値・負数・重複などを最初に確認し、自分でテストケースを追加する習慣をつける。" },
  { t: "思考プロセスを言語化する", d: "ライブコーディングでは『今〜を考えています』『このアプローチを選んだ理由は〜』と説明することで、詰まっても評価が残る。" },
  { t: "時間配分を意識する", d: "複数問なら簡単な問題から確実に得点する。1問に固執しすぎず、解けそうな問題を先に片付ける。" },
  { t: "部分点を狙いにいく", d: "完答できなくても、擬似コード・部分実装・アプローチ説明で評価される場合がある。最悪なのは何も出さないこと。" },
];

export default function CodingTestPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/coding-test/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ" },
          { name: "コーディングテスト対策" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          コーディングテスト対策【頻出領域とLeetCode・AtCoder活用法】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 頻出領域・練習方法・当日の進め方
        </p>

        <DataNote surveyedAt="2026年6月" sources={["paiza公式・転職メディア集計", "Qiita Job Change 等の口コミ"]} />

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed mb-4">
            コーディングテストは、特にメガベンチャーや外資系IT企業でほぼ確実に通る関門です。実務経験が長くても、アルゴリズム問題は別スキルなので対策は必須。本記事では、頻出アルゴリズム領域、LeetCode・AtCoder・paizaの使い分け、当日の進め方を、30代・40代の視点を交えて解説します。
          </p>
        </section>

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-lg p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：領域を絞り、毎日少量を継続する</h2>
            <ul className="space-y-2 text-sm text-blue-900 leading-relaxed">
              <li>・頻出は<strong>配列・文字列・ハッシュマップ・探索・BFS/DFS</strong>に集中。まずここを固める。</li>
              <li>・面接対策は<strong>LeetCode</strong>、地力強化は<strong>AtCoder</strong>、日系スカウト狙いは<strong>paiza</strong>と目的で使い分ける。</li>
              <li>・苦手なら「コーディングテストなしの求人」を選ぶ戦略も有効。エージェントに選考フローを確認する。</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-lg p-5">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-sm text-petrol hover:underline">{s.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 頻出領域 */}
        <section id="areas" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">頻出アルゴリズム領域</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            出題範囲は広く見えますが、転職向けコーディングテストで実際によく出る領域は限られています。下表の上位（出題頻度が高いもの）から優先的に固めるのが効率的です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">領域</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">出題頻度</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">代表的な問題</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">難易度</th>
                </tr>
              </thead>
              <tbody>
                {areas.map((a, i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-slate-50" : ""}>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{a.name}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{a.freq}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{a.ex}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{a.lvl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-3">※出題頻度は一般的な傾向であり、企業・職種により変動します。</p>
        </section>

        {/* プラットフォーム */}
        <section id="platforms" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">LeetCode・AtCoder・paizaの使い分け</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            3つの主要プラットフォームは目的が異なります。1つに絞る必要はなく、目的に応じて組み合わせるのが効果的です。
          </p>
          <div className="space-y-4">
            {platforms.map((p, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-blue-800 text-lg">{p.name}</h3>
                  <span className="bg-petrol-soft text-blue-800 text-xs font-medium px-3 py-1 rounded-full">{p.purpose}</span>
                </div>
                <p className="text-sm text-slate-600 mb-3">{p.detail}</p>
                <p className="text-xs text-slate-500"><span className="font-bold text-slate-600">向いている人: </span>{p.fit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 練習方法 */}
        <section id="method" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">練習方法（4週間プラン）</h2>
          <div className="space-y-4">
            {plan.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-14 h-8 rounded-full bg-petrol text-white font-bold text-xs shrink-0">{item.num}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 当日のコツ */}
        <section id="tips" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">当日の進め方と差がつくコツ</h2>
          <div className="space-y-4">
            {tips.map((t, i) => (
              <div key={i} className="bg-petrol-soft rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-2">{i + 1}. {t.t}</h3>
                <p className="text-sm text-petrol-deep">{t.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 30代40代視点 */}
        <section id="age" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代のコーディングテスト視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              30代・40代がコーディングテストでつまずきやすいのは、<strong>アルゴリズムから離れていた期間が長い</strong>ことが原因であって、地頭の問題ではありません。基本パターンを20〜30問なぞり直せば、勘は比較的早く戻ります。短期間に詰め込むより、通勤時間などに毎日1問を継続する方が現実的です。
            </p>
            <p>
              戦略面では、<strong>志望先の選考フローを見極める</strong>ことが重要です。経済産業省が2019年に公表した試算では2030年に最大約79万人のIT人材不足が見込まれており、経験者の需要は底堅い状況です。だからこそ、コーディングテストが苦手なら無理に外資の難問型を狙わず、テストなし・経験重視の日系求人や、paizaのランクで書類免除を得る道を選ぶ柔軟さが、ミドル世代には有効です。
            </p>
            <p>
              エージェントに「コーディングテストの有無・難易度」を事前に聞けば、対策コストを無駄にせず受験先を絞れます。
            </p>
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
          <h2 className="text-xl font-bold mb-3">選考フローの事前確認はエージェントに相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントなら、各企業のコーディングテストの有無や難易度を事前に教えてもらえます。
          </p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "技術面接対策ガイド", href: "/knowledge/tech-interview/" },
              { name: "システム設計面接の対策", href: "/knowledge/system-design/" },
              { name: "行動面接（STAR法）完全ガイド", href: "/knowledge/behavioral/" },
              { name: "ポートフォリオ作成ガイド", href: "/knowledge/portfolio/" },
              { name: "スカウトサービスの活用法", href: "/knowledge/scout/" },
              { name: "30代エンジニアの転職ガイド", href: "/age/30s/" },
            ].map((item, i) => (
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
