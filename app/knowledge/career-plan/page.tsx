import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "エンジニアのキャリアプラン設計【選択肢の整理】",
  description:
    "30代・40代エンジニアのキャリアプラン設計を解説。マネジメントvsスペシャリスト、CTO・独立を含む4つのパスを比較し、適性診断・5年/10年計画の立て方・後悔しない選び方を実用的に紹介します。",
};

const toc = [
  { id: "paths", label: "1. エンジニアの4つのキャリアパス" },
  { id: "vs", label: "2. マネジメント vs スペシャリスト 徹底比較" },
  { id: "diagnosis", label: "3. どちらが向いているか適性診断" },
  { id: "plan", label: "4. 5年/10年計画の立て方" },
  { id: "worksheet", label: "5. キャリアプラン設計ワークシート" },
  { id: "regret", label: "6. 後悔しないための注意点" },
  { id: "age", label: "7. 30代・40代の選択のポイント" },
  { id: "faq", label: "8. よくある質問" },
];

const faqs = [
  {
    q: "30代後半からキャリアプランを見直すのは遅いですか？",
    a: "遅くありません。30代後半は実務経験が豊富で、方向転換もしやすい時期です。経験に基づいた現実的なプランを立てられる最適なタイミングとも言えます。40代前半までに新しい方向で実績を積めば、選択肢は十分確保できます。",
  },
  {
    q: "スペシャリストとマネジメント、どちらが年収が高いですか？",
    a: "一概には言えません。一般にマネジメント職は年収が上がりやすい傾向がありますが、技術力が突出したスペシャリストも上級職で高年収を得られます。メガベンチャーや外資系ITではIC（Individual Contributor）の上位職が用意されており、マネジメントと遜色ない処遇のケースもあります。実際の年収レンジはエージェントで確認しましょう。",
  },
  {
    q: "キャリアプランは面接でどう答えればいいですか？",
    a: "『3年後にテックリード、5年後にEM』のように具体的なマイルストーンを示しましょう。その上で『御社の○○の環境でそれが実現できる』と志望動機につなげると説得力が増します。抽象的な回答は避けてください。",
  },
  {
    q: "技術の変化が速くて長期計画が立てられません",
    a: "技術は変わっても『設計力』『問題解決力』『チーム開発力』などの基盤スキルは不変です。具体的な技術名ではなく『大規模分散システムの設計』のようにカテゴリで計画を立てると、技術変化にも対応できます。",
  },
  {
    q: "フリーランスへの転向はキャリアプランとして有効ですか？",
    a: "経験10年以上で得意分野が明確なエンジニアにとっては有効な選択肢です。ただし安定性やキャリアの継続性も考慮し、十分な準備期間（半年〜1年）を設けることをおすすめします。単価や実態は、正社員との違いも含めて検討しましょう。詳しくはフリーランスvs正社員の比較記事を参照してください。",
  },
  {
    q: "マネジメントに興味が持てない場合、キャリアは頭打ちですか？",
    a: "いいえ。スペシャリスト（IC）路線でも上位職・高年収を目指せます。アーキテクト、SRE、AI/MLエンジニアなど専門性の高い領域では、技術を極めることがそのまま市場価値につながります。マネジメントを避けたい志向は、それ自体がキャリアの軸になります。",
  },
  {
    q: "キャリアプランの相談は誰にすべきですか？",
    a: "IT特化型の転職エージェントが適しています。業界動向や年収相場を踏まえた客観的なアドバイスを受けられます。『今すぐ転職しない』中長期のキャリア相談に対応するエージェントもあるので、情報収集目的でも面談を活用できます。",
  },
];

const compareRows = [
  ["評価される力", "技術選定・実装・問題解決の深さ", "目標設定・育成・評価・調整"],
  ["主な役割例", "アーキテクト / SRE / AI・MLエンジニア / IC上級職", "EM / テックリード / 開発部長 / VPoE"],
  ["年収の傾向", "上級ICは管理職と遜色ない例もある", "一般に上がりやすいが、組織規模に依存"],
  ["やりがいの源泉", "技術的な探究・難問の解決", "チームの成長・事業へのレバレッジ"],
  ["きつい点", "技術の陳腐化リスク・専門の狭さ", "板挟み・採用や評価の負荷・実装から離れる"],
  ["向いている人", "手を動かし続けたい / 一点突破型", "人と事業を動かしたい / 全体最適型"],
];

export default function CareerPlanPage() {
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
        title="エンジニアのキャリアプラン設計【選択肢の整理】"
        description="30代・40代エンジニアのキャリアプラン設計を解説。マネジメントvsスペシャリスト、CTO・独立を含む4つのパスを比較し、適性診断・5年/10年計画の立て方・後悔しない選び方を実用的に紹介します。"
        url="/knowledge/career-plan/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ" },
          { name: "キャリアプラン設計" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エンジニアのキャリアプラン設計【選択肢の整理】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 4つのキャリアパスと計画の立て方
        </p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            30代・40代のエンジニアにとって、キャリアプランの設計は避けて通れない課題です。「このまま開発を続けるか」「マネジメントに進むか」「専門を極めるか」「独立するか」――選択肢は多く、迷うのが普通です。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、<strong>4つの主要キャリアパスの比較、マネジメントvsスペシャリストの適性診断、5年/10年計画の立て方、後悔しないための注意点</strong>を、ワークシート付きで整理します。
          </p>
        </section>

        <DataNote surveyedAt="2026年6月" sources={["各IT転職エージェント公開情報", "厚生労働省 job tag"]} />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-sm text-blue-600 hover:underline">{t.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 1. 4パス */}
        <section id="paths" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">1. エンジニアの4つのキャリアパス</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ミドルエンジニアの主なキャリアは、大きく次の4方向に整理できます。どれが上というものではなく、自分の志向と市場のニーズの重なりで選びます。
          </p>
          <div className="space-y-4">
            {[
              { num: "1", title: "スペシャリスト（IC）", desc: "技術を極める道。アーキテクト・SRE・AI/MLエンジニアなど。手を動かし続けたい人向け。上級ICは管理職に近い処遇のケースもある。" },
              { num: "2", title: "マネジメント", desc: "人と事業を動かす道。EM・テックリード・開発部長・VPoE。チームや組織の成果でレバレッジを効かせたい人向け。" },
              { num: "3", title: "CTO・技術経営", desc: "技術と経営をつなぐ道。スタートアップのCTOや技術責任者。技術判断と事業判断の両方に踏み込む。" },
              { num: "4", title: "独立・フリーランス", desc: "得意領域で独立する道。経験10年以上で専門が明確な人向け。自由度が高い反面、安定や継続性は自分で設計する必要がある。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{item.num}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 mt-4">
            それぞれ深掘りした記事もあります: <Link href="/knowledge/management/" className="text-blue-600 underline">マネジメントキャリア</Link>、<Link href="/knowledge/freelance-vs-fulltime/" className="text-blue-600 underline">フリーランスvs正社員</Link>。
          </p>
        </section>

        {/* 2. 比較 */}
        <section id="vs" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">2. マネジメント vs スペシャリスト 徹底比較</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ミドル層が最も悩むのがこの2択です。違いを一覧で整理します。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">観点</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">スペシャリスト</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">マネジメント</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((r, i) => (
                  <tr key={i} className={i % 2 ? "bg-slate-50" : ""}>
                    <td className="border border-slate-200 px-4 py-3 font-medium text-slate-700">{r[0]}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{r[1]}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">※ 年収は企業規模・職位・技術領域で大きく変動します。具体的なレンジは<Link href="/knowledge/market-value/" className="text-blue-600 underline">市場価値の測り方</Link>を参照。</p>
        </section>

        {/* 3. 診断 */}
        <section id="diagnosis" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">3. どちらが向いているか適性診断</h2>
          <p className="text-slate-600 leading-relaxed mb-4">各項目で当てはまる方を選び、多かった側が現時点の適性の目安です。</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="border border-emerald-200 bg-emerald-50 rounded-xl p-5">
              <h3 className="font-bold text-emerald-800 mb-3 text-sm">スペシャリスト寄り</h3>
              <ul className="space-y-2">
                {[
                  "難しい技術課題を解いている時が一番楽しい",
                  "自分で手を動かし続けたい",
                  "1つの領域を深く極めたい",
                  "会議や調整より実装に集中したい",
                  "最新技術のキャッチアップが苦にならない",
                ].map((t, i) => (
                  <li key={i} className="flex gap-2 text-sm text-emerald-900"><span className="font-bold shrink-0">✓</span>{t}</li>
                ))}
              </ul>
            </div>
            <div className="border border-blue-200 bg-blue-50 rounded-xl p-5">
              <h3 className="font-bold text-blue-800 mb-3 text-sm">マネジメント寄り</h3>
              <ul className="space-y-2">
                {[
                  "チームの成果が上がると自分のこと以上に嬉しい",
                  "人の成長を支援するのが好き",
                  "技術だけでなく事業全体に関心がある",
                  "調整や交渉が苦にならない",
                  "全体最適のために動くのが得意",
                ].map((t, i) => (
                  <li key={i} className="flex gap-2 text-sm text-blue-900"><span className="font-bold shrink-0">✓</span>{t}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-sm text-slate-600 mt-4">どちらとも言い切れない場合は、まず<Link href="/knowledge/self-analysis/" className="text-blue-600 underline">自己分析（棚卸し・モチベーショングラフ）</Link>で過去の手応えを振り返るのがおすすめです。</p>
        </section>

        {/* 4. 計画 */}
        <section id="plan" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">4. 5年/10年計画の立て方</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ゴールから逆算する</h3>
              <p className="text-sm text-blue-700">10年後の理想像（役割・年収・働き方）を先に置き、そこから5年・3年・1年のマイルストーンに分解します。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">技術名でなくカテゴリで立てる</h3>
              <p className="text-sm text-blue-700">『○○というFW』ではなく『大規模分散システムの設計力』のようにカテゴリで計画すると、技術変化に強くなります。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">基盤スキルに投資する</h3>
              <p className="text-sm text-blue-700">設計力・問題解決力・チーム開発力は陳腐化しません。流行の技術と並行して、不変の力にも時間を割きましょう。関連: <Link href="/knowledge/continuous-learning/" className="text-blue-700 underline">継続的な学習</Link>。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">年1回は見直す</h3>
              <p className="text-sm text-blue-700">市場も自分も変わります。年1回プランを点検し、ズレていたら軌道修正します。固定ではなく『更新前提』で運用しましょう。</p>
            </div>
          </div>
        </section>

        {/* 5. ワークシート */}
        <section id="worksheet" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">5. キャリアプラン設計ワークシート</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-3 text-sm">
              {[
                ["10年後の理想像", "役割・年収・働き方・どんな技術を扱っているか"],
                ["選ぶ方向性", "スペシャリスト / マネジメント / 技術経営 / 独立"],
                ["5年後のマイルストーン", "（例）テックリードとして大規模設計をリード"],
                ["3年後のマイルストーン", "（例）小規模チームのリードを経験"],
                ["1年後のアクション", "今年学ぶ技術・取る役割・作るアウトプット"],
                ["不足スキル", "理想像に対して今足りない力"],
                ["埋める手段", "現職での挑戦 / 転職 / 学習 / 副業 のどれで補うか"],
              ].map(([k, v], i) => (
                <div key={i} className="grid grid-cols-[150px_1fr] gap-2">
                  <span className="font-medium text-slate-700">{k}</span>
                  <span className="text-slate-600">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. 後悔しない */}
        <section id="regret" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">6. 後悔しないための注意点</h2>
          <div className="space-y-4">
            {[
              { t: "周りに流されて方向を決めない", d: "『年上だからマネジメント』『同期が独立したから自分も』と周囲に合わせると後悔しがち。自分の手応えと価値観を軸にする。" },
              { t: "一度の選択を不可逆だと思い込まない", d: "マネジメントからICへ戻る人も、ICからマネジメントへ進む人もいます。1回の選択で人生が固定されるわけではありません。" },
              { t: "年収だけで決めない", d: "目先の年収だけで選ぶと、やりがいや継続性を失うことがあります。価値観の優先順位とセットで判断しましょう。" },
            ].map((n, i) => (
              <div key={i} className="bg-amber-50 border border-amber-200 rounded-lg p-5">
                <h3 className="font-bold text-amber-800 mb-1">{n.t}</h3>
                <p className="text-sm text-slate-600">{n.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. 年代別 */}
        <section id="age" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">7. 30代・40代の選択のポイント</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：方向を『仮決め』して実績を積む</h3>
              <p className="text-sm text-blue-700">30代は専門を深めるか、マネジメントへ広げるかの分岐点。完璧に決めきれなくても、仮の方向で小さくリード経験や専門の実績を積むと、次の判断材料になります。関連: <Link href="/age/30s/" className="text-blue-700 underline">30代の転職</Link>。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：強みを軸に『深さ』か『広さ』を選ぶ</h3>
              <p className="text-sm text-blue-700">40代は積み上げた強みを軸に、専門を極める（深さ）か、組織・事業へ広げる（広さ）かを選ぶ局面です。再現性のある実績を前提に、譲れない価値観に沿った道を選びましょう。関連: <Link href="/age/40s/" className="text-blue-700 underline">40代の転職</Link>、<Link href="/knowledge/40s-reality/" className="text-blue-700 underline">40代転職のリアル</Link>。</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">8. よくある質問</h2>
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
          <h2 className="text-xl font-bold mb-3">キャリアの方向性をプロに相談しよう</h2>
          <p className="text-blue-100 text-sm mb-4">IT特化型エージェントなら、業界動向や年収相場を踏まえて中長期のキャリアプランを一緒に整理してくれます。今すぐの転職を前提としない相談も可能です。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "マネジメントキャリアの進み方", href: "/knowledge/management/" },
              { name: "フリーランスvs正社員", href: "/knowledge/freelance-vs-fulltime/" },
              { name: "自己分析ガイド", href: "/knowledge/self-analysis/" },
              { name: "市場価値の測り方", href: "/knowledge/market-value/" },
              { name: "継続的な学習の進め方", href: "/knowledge/continuous-learning/" },
              { name: "40代エンジニア転職のリアル", href: "/knowledge/40s-reality/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
