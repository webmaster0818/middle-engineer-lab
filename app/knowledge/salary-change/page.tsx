import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "エンジニア転職で年収は上がる？下がる？【2026年データ】";
const DESCRIPTION =
  "エンジニアの転職で年収はどう変わるのか。dodaの決定年収レポート（約6割が年収アップ・IT通信469→486万円）などの出典付きデータで解説し、年収アップする人の特徴と下がるケースの対策をまとめます。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：転職で年収は上がるのか" },
  { id: "data", label: "転職と年収のデータ（出典付き）" },
  { id: "up", label: "年収アップを実現する人の特徴" },
  { id: "down", label: "年収が下がるケースと対策" },
  { id: "checklist", label: "年収アップ転職の準備チェックリスト" },
  { id: "midlife", label: "30代・40代の年収変動の考え方" },
  { id: "faq", label: "よくある質問" },
];

const upFeatures = [
  {
    title: "市場価値の高いスキルを持っている",
    desc: "クラウド（AWS/GCP）、コンテナ（Docker/Kubernetes）、需要の伸びている言語・領域のスキルは、転職市場で評価されやすく、年収交渉の材料になります。",
  },
  {
    title: "複数のエージェント・求人を比較している",
    desc: "複数社の選考を並行し、提示を比較する人ほど、結果的に良い条件を引き出しやすい傾向があります。1社のみだと相場が分からず、交渉の材料も不足します。",
  },
  {
    title: "実績を数値で説明できる",
    desc: "「改善した」ではなく「レスポンスタイムを40%短縮した」のように定量的に語れると、適正な評価を受けやすくなります。",
  },
  {
    title: "年収だけでなく総合パッケージで判断する",
    desc: "基本給・賞与・ストックオプション・福利厚生・リモート可否・残業時間まで含めて判断する人は、満足度の高い転職を実現しやすくなります。",
  },
  {
    title: "年収交渉をエージェントに任せている",
    desc: "エージェントは企業の予算感を把握しており、候補者本人より交渉を進めやすい立場にあります。直接言いにくい条件のすり合わせも代行してもらえます。",
  },
];

const downCases = [
  {
    case_name: "SIer → アーリーステージのスタートアップ",
    desc: "安定企業から立ち上げ期のスタートアップへ移ると、基本給が下がることがあります。ストックオプションなどで長期リターンを狙う設計の場合もあります。",
    advice: "ストックオプションの条件（行使価格・付与数・ベスティング）を詳細に確認し、現金部分の減少を許容できるか判断する。",
  },
  {
    case_name: "マネジメント → プレイヤー",
    desc: "管理職から現場エンジニアに戻ると、役職手当の分だけ年収が下がることがあります。",
    advice: "テックリードなど技術とマネジメントのハイブリッド職を狙うと、年収を維持しやすい。",
  },
  {
    case_name: "異業種 → IT業界（未経験要素が大きい）",
    desc: "前職の経験がそのまま評価されにくい移り方をすると、一時的に年収が下がる傾向があります。",
    advice: "前職の業界知識が活きるDX推進ポジションなどを選ぶと、年収ダウンを抑えやすい。",
  },
];

const checklist = [
  "現在の市場価値（想定年収レンジ）をエージェントで確認した",
  "希望年収の下限ラインを事前に決めている",
  "需要の高いスキルや実績を数値で整理できている",
  "年収以外の条件（リモート・賞与・SO等）の優先順位を決めている",
  "複数社の選考を並行できる準備をしている",
  "年収交渉をエージェントに任せる体制を整えている",
];

const faqs = [
  {
    q: "エンジニア転職で年収が上がる人はどのくらいいますか？",
    a: "パーソルキャリア（doda）の2024年度「決定年収レポート」（2025年5月公表）によると、転職者の約6割が年収アップを実現しています。IT・通信の平均決定年収は469万円（2023年度）から486万円（2024年度）へ上昇しました。ただし全員が上がるわけではなく、スキルや転職先の選び方によって結果は変わります。",
  },
  {
    q: "年収が下がるのはどんなケースですか？",
    a: "主に(1)安定企業からアーリーステージのスタートアップへの転職、(2)マネジメントからプレイヤーへの転向、(3)前職の経験が評価されにくい異業種からの転職、の3パターンです。いずれも事前に条件を確認し、年収以外のリターンや中長期の見込みを踏まえて判断することが大切です。",
  },
  {
    q: "年収交渉はどうすればいいですか？",
    a: "エージェント経由なら年収交渉を任せるのが効果的です。エージェントは企業の予算感や他候補の状況を把握しており、個人で交渉するより進めやすい立場にあります。希望年収は正直に伝え、下限ラインも事前に決めておきましょう。詳しくは年収交渉の記事を参照してください。",
  },
  {
    q: "30代の転職で年収はどのくらい変わりますか？",
    a: "個人差が大きく一概には言えませんが、レバテック公表（2025年）の年代別平均では30代約499万円、40代約618万円と、年代が上がるほど平均が上昇します。30代は需要が高い年代であり、需要の高いスキルと実績がそろえば年収アップを狙いやすい時期です。",
  },
  {
    q: "フリーランスと正社員、どちらが年収が高いですか？",
    a: "額面ではフリーランスが高くなる傾向がありますが、社会保険料の自己負担、有給・退職金がないこと、案件途切れのリスクなどを考慮すると、実質的な差は縮まります。安定性と収入のバランスで判断しましょう。フリーランスと正社員の比較記事も参考にしてください。",
  },
  {
    q: "年収を上げるには転職と昇給どちらが有効ですか？",
    a: "社内昇給は年率数%にとどまることが多い一方、転職では条件次第でより大きく動くことがあります。dodaのデータでも転職者の約6割が年収アップを実現しています。まず市場価値を把握し、現職に残った場合の昇給見込みと比較して判断するのがおすすめです。",
  },
  {
    q: "IT人材の需要は今後も続きますか？",
    a: "経済産業省「IT人材需給に関する調査」（2019年3月公表）の試算では、2030年に最大約79万人のIT人材不足が見込まれています。あくまで2019年公表の試算ですが、中長期的にエンジニア需要が底堅いことを示す材料として参照されています。",
  },
];

export default function SalaryChangePage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/salary-change/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "転職と年収の関係" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エンジニア転職で年収は上がる？下がる？【2026年データ】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 出典付きデータでみる転職と年収の関係
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          エンジニアの転職で最も気になるのが年収の変動です。「転職すれば上がる」と言われる一方で「下がった」という声もあります。本記事では、dodaの決定年収レポートなど出典のあるデータをもとに、転職で年収がどう変わるのか、上がる人・下がる人の違いと対策を解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "パーソルキャリア（doda）2024年度 決定年収レポート（2025年5月公表）",
            "レバテック公表の年代別平均年収（2025年）",
            "経済産業省 IT人材需給に関する調査（2019年3月公表）",
          ]}
        />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-blue-600 hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：転職で年収は上がるのか</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              パーソルキャリア（doda）の2024年度「決定年収レポート」（2025年5月公表）によると、<strong>転職者の約6割が年収アップ</strong>を実現しています。IT・通信の平均決定年収は<strong>469万円（2023年度）→486万円（2024年度）</strong>へ上昇しました。データ上、転職は年収アップの有力な手段といえます。
            </p>
            <p className="text-slate-700 leading-relaxed">
              ただし全員が上がるわけではありません。年収アップを実現する人は、(1) 市場価値の高いスキルを持つ、(2) 複数社を比較する、(3) 実績を数値で語れる、(4) 年収交渉をエージェントに任せる、という共通点があります。一方、安定企業からアーリーステージのスタートアップへの移動など、年収が下がりやすいケースもあるため、事前の確認が重要です。
            </p>
          </div>
        </section>

        {/* データ */}
        <section id="data" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職と年収のデータ（出典付き）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            出典が明確なデータで、転職と年収の実態を確認します。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">指標</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">数値</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">出典・時点</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["転職者で年収アップした割合", "約6割", "doda 決定年収レポート（2024年度・2025年5月公表）"],
                  ["IT・通信の平均決定年収", "469万円 → 486万円", "doda（2023年度→2024年度）"],
                  ["正社員エンジニア 30代平均年収", "約499万円", "レバテック公表（2025年）"],
                  ["正社員エンジニア 40代平均年収", "約618万円", "レバテック公表（2025年）"],
                  ["システムエンジニア（受託開発）平均年収", "578.5万円（平均37.1歳）", "厚労省 job tag（令和7年賃金構造基本統計調査ベース）"],
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-4 py-3 border border-slate-200 font-medium text-slate-700">{row[0]}</td>
                    <td className="px-4 py-3 border border-slate-200 font-bold text-blue-600">{row[1]}</td>
                    <td className="px-4 py-3 border border-slate-200 text-xs text-slate-500">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500">
            ※ dodaの決定年収レポートはパーソルキャリアの公表値。レバテックの年代別平均はcareer.levtech.jp / freelance.levtech.jpガイド記事（2025年）。数値は時期により変動します。
          </p>
        </section>

        {/* 上がる人 */}
        <section id="up" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収アップを実現する人の特徴</h2>
          <div className="space-y-4">
            {upFeatures.map((f, i) => (
              <div key={i} className="bg-blue-50 rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-2">{i + 1}. {f.title}</h3>
                <p className="text-sm text-blue-700 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            自分の市場価値を把握するには
            <Link href="/knowledge/market-value/" className="text-blue-600 hover:underline">市場価値の調べ方</Link>
            、複数社を比較するには
            <Link href="/knowledge/multiple-agents/" className="text-blue-600 hover:underline">複数エージェントの併用</Link>
            が参考になります。
          </p>
        </section>

        {/* 下がる人 */}
        <section id="down" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収が下がるケースと対策</h2>
          <div className="space-y-4">
            {downCases.map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{item.case_name}</h3>
                <p className="text-sm text-slate-600 mb-2 leading-relaxed">{item.desc}</p>
                <p className="text-xs text-blue-600 font-medium">対策: {item.advice}</p>
              </div>
            ))}
          </div>
        </section>

        {/* チェックリスト */}
        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収アップ転職の準備チェックリスト</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            年収アップを実現する人ほど、事前準備が整っています。以下を一つずつ確認しましょう。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <ul className="space-y-3">
              {checklist.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-slate-700">
                  <span className="text-blue-600 font-bold shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 30代40代視点 */}
        <section id="midlife" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の年収変動の考え方</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：伸びしろを最大化する</h3>
              <p className="text-sm text-blue-700 leading-relaxed">
                レバテック公表値で30代平均約499万円→40代約618万円と、平均が大きく伸びる年代です。30代の転職は『次の10年の年収カーブを決める』意味を持ちます。需要の高いスキルと数値で語れる実績をそろえ、年収アップの確度を高めましょう。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：維持も成功と捉える</h3>
              <p className="text-sm text-blue-700 leading-relaxed">
                40代は専門性や役職の有無で個人差が大きく開きます（年収1,000万円以上が40代で12.67%）。年収を大きく上げることだけが成功ではなく、『下げずに維持しつつ、より良い環境に移る』ことも現実的な目標です。役職に依存しない実力ベースの市場価値を把握することが重要になります。
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
          <h2 className="text-xl font-bold mb-3">あなたの市場価値を無料で診断</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントに登録すれば、あなたのスキルセットに基づく適正年収を教えてもらえます。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "30代エンジニアの年収相場", href: "/knowledge/salary-30s/" },
              { name: "40代エンジニアの年収相場", href: "/knowledge/salary-40s/" },
              { name: "年収交渉テクニック", href: "/knowledge/salary-negotiation/" },
              { name: "複数内定の比較方法", href: "/knowledge/offer-compare/" },
              { name: "フリーランスvs正社員", href: "/knowledge/freelance-vs-fulltime/" },
              { name: "市場価値の調べ方", href: "/knowledge/market-value/" },
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
