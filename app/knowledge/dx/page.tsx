import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "DXとは｜経産省の定義・企業の取組率・DX認定2,419件の集計とエンジニアのキャリア【2026年】";
const DESCRIPTION =
  "DX（デジタルトランスフォーメーション）とは、データとデジタル技術を活用して製品・サービス・ビジネスモデルと業務・組織・企業文化を変革し、競争上の優位性を確立することです。経産省の定義、IPA「DX動向2026」の取組率・人材不足、DX認定事業者一覧を当サイトで集計した結果、デジタルスキル標準の人材類型を整理します。";
const URL = "/knowledge/dx/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "DXの定義" },
  { id: "status", label: "日本企業のDXの取組状況" },
  { id: "nintei", label: "DX認定事業者の集計" },
  { id: "talent", label: "DX人材の不足と人材類型" },
  { id: "career", label: "30代・40代エンジニアのキャリアとDX" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const sizes = [
  { size: "中小企業", count: 1198 },
  { size: "大企業～中堅企業", count: 881 },
  { size: "小規模企業", count: 303 },
  { size: "個人事業主", count: 37 },
];

const years = [
  { y: "2020年", n: 2 },
  { y: "2021年", n: 219 },
  { y: "2022年", n: 327 },
  { y: "2023年", n: 339 },
  { y: "2024年", n: 430 },
  { y: "2025年", n: 500 },
  { y: "2026年（11月まで）", n: 767 },
];

const faqs = [
  {
    q: "DXとは簡単に言うと何ですか？",
    a: "データとデジタル技術を使って、製品・サービスやビジネスモデルに加え、業務・組織・企業文化まで変革し、競争上の優位性を確立することです。経済産業省の「デジタルガバナンス・コード3.0」で定義されています。既存業務を電子化するだけの取り組み（デジタル化）とは区別されます。",
  },
  {
    q: "日本企業はどのくらいDXに取り組んでいますか？",
    a: "IPA「DX動向2026」（2025年度調査・有効回答1,799社）では、何らかの形でDXに取り組んでいる企業は75.7％でした。従業員1,001人以上では98.7％に達する一方、100人以下では41.6％にとどまっています。",
  },
  {
    q: "DX人材はどのくらい不足していますか？",
    a: "同じ調査で、DXを推進する人材の「量」が「やや不足」「大幅に不足」と答えた企業の合計は85.5％でした。IPA「DX動向2025」の日米独比較では、人材の量について不足を感じているのは日本だけと分析されています。",
  },
  {
    q: "DX認定とは何ですか？何社が認定されていますか？",
    a: "DX認定は、デジタルガバナンス・コードの基本的事項に対応し、DX推進の準備が整っている事業者を国が認定する制度で、有効期間は2年です。IPAが公開する認定事業者一覧の全件データを当サイトで集計したところ、2026年11月24日時点で認定期間中のものは2,419件でした（IPAの公表値ではありません）。",
  },
  {
    q: "エンジニアがDX関連の仕事に就くには何が必要ですか？",
    a: "IPAのデジタルスキル標準（DX推進スキル標準 ver.2.0）は、DX推進人材をビジネスアーキテクト、デザイナー、データサイエンティスト、データマネジメント、ソフトウェアエンジニア、サイバーセキュリティの6類型に分けています。自分の経験がどの類型・ロールに近いかを確認し、不足するスキルを補う方法が有効です。",
  },
];

export default function DxPage() {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "DXとは" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          DXとは｜経産省の定義・企業の取組率・DX認定の集計とエンジニアのキャリア
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月24日 | 公的資料の確認日: 2026年11月24日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】DXとは</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>DX（デジタルトランスフォーメーション）とは、企業がデータとデジタル技術を活用して、製品・サービス・ビジネスモデルを変革するとともに、業務・組織・プロセス・企業文化を変革し、競争上の優位性を確立することです（経済産業省「デジタルガバナンス・コード3.0」）。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・何らかの形でDXに取り組む企業は75.7％、DX推進人材の量が不足している企業は85.5％です（IPA「DX動向2026」）</li>
              <li>・国のDX認定を受け、認定期間中の事業者は2,419件です（IPAの全件データを当サイトで集計・2026年11月24日時点）</li>
              <li>・IPAのデジタルスキル標準は、DX推進人材を6つの類型に分けています</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、DXの定義を経済産業省の資料にもとづいて説明し、IPAの調査から日本企業の取組状況と人材不足の現状を整理します。あわせて、IPAが公開するDX認定事業者一覧の全件データを当サイトで集計し、規模別・年別の内訳を掲載します。最後に、30代・40代のエンジニアがDX関連の求人を検討する際の考え方をご説明します。
        </p>

        <DataNote
          surveyedAt="2026年11月24日"
          sources={["経済産業省「デジタルガバナンス・コード3.0」", "IPA「DX動向2026」「DX動向2025」", "IPA DX認定 認定事業者一覧（全件CSV）", "IPA「デジタルスキル標準 ver.2.0」"]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="definition" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">DXの定義</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            経済産業省の「デジタルガバナンス・コード3.0」（2020年11月策定・2024年9月改訂）は、DXを次のように定義しています。
          </p>
          <blockquote className="border-l-4 border-slate-300 pl-4 text-slate-700 leading-relaxed mb-4">
            「企業がビジネス環境の激しい変化に対応し、データとデジタル技術を活用して、顧客や社会のニーズを基に、製品やサービス、ビジネスモデルを変革するとともに、業務そのものや、組織、プロセス、企業文化・風土を変革し、競争上の優位性を確立すること。」
          </blockquote>
          <p className="text-slate-600 leading-relaxed">
            この定義のとおり、DXは紙の書類を電子化する、既存の業務をシステムに置き換えるといったデジタル化にとどまらず、ビジネスモデルや組織・企業文化の変革までを含む概念です。IPA「DX動向2025」は、2025年が経済産業省の「DXレポート」（2018年9月）で示された「2025年の崖」の年に当たると述べています。
          </p>
        </section>

        <section id="status" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">日本企業のDXの取組状況</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">項目</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">値</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">何らかの形でDXに取り組んでいる企業</td><td className="border border-slate-200 px-3 py-2 text-right">75.7％</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">同（従業員1,001人以上）</td><td className="border border-slate-200 px-3 py-2 text-right">98.7％</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">同（従業員100人以下）</td><td className="border border-slate-200 px-3 py-2 text-right">41.6％</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">DXの取り組みで「成果が出ている」</td><td className="border border-slate-200 px-3 py-2 text-right">60.8％</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">DX推進人材の「量」が不足（やや＋大幅）</td><td className="border border-slate-200 px-3 py-2 text-right">85.5％</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">DX推進人材の「質」が不足（やや＋大幅）</td><td className="border border-slate-200 px-3 py-2 text-right">88.8％</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：IPA「DX動向2026」（2026年7月30日公開・2025年度調査・調査期間2026年4〜6月・有効回答1,799社）</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            取組率は横ばいで推移しており、大企業ではほぼすべてが取り組む一方、従業員100人以下の企業では半数に届いていません。人材の「量」の不足について「大幅に不足」と答えた割合は2023年度62.1％、2024年度58.5％、2025年度50.1％と下がっていますが、「質」の不足の合計は増えています。
          </p>
        </section>

        <section id="nintei" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">DX認定事業者の集計</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            DX認定は、デジタルガバナンス・コードに対応し、DX推進の準備が整っている事業者を国が認定する制度です（有効期間2年）。IPAが公開している認定事業者一覧の全件データ（AllData.csv）を当サイトで集計した結果は次のとおりです。IPAが公表した集計値ではない点にご留意ください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border border-slate-200 px-3 py-2 text-left">規模（認定期間中）</th>
                    <th className="border border-slate-200 px-3 py-2 text-right">件数</th>
                  </tr>
                </thead>
                <tbody>
                  {sizes.map((s) => (
                    <tr key={s.size}>
                      <td className="border border-slate-200 px-3 py-2">{s.size}</td>
                      <td className="border border-slate-200 px-3 py-2 text-right">{s.count.toLocaleString()}</td>
                    </tr>
                  ))}
                  <tr className="font-bold">
                    <td className="border border-slate-200 px-3 py-2">合計</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">2,419</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border border-slate-200 px-3 py-2 text-left">初回認定の年</th>
                    <th className="border border-slate-200 px-3 py-2 text-right">件数</th>
                  </tr>
                </thead>
                <tbody>
                  {years.map((y) => (
                    <tr key={y.y}>
                      <td className="border border-slate-200 px-3 py-2">{y.y}</td>
                      <td className="border border-slate-200 px-3 py-2 text-right">{y.n}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            集計方法：2026年11月24日にIPAの認定事業者一覧（2026年11月1日適用分まで）の全件CSVを取得し、認定の適用開始日が当日以前・適用終了日が当日以降・取消日の記載がない行を「認定期間中」として数えました（2,419件・法人番号等の重複を除くと2,383事業者）。初回認定は手続き番号の末尾が「-01」の行を適用開始日の年で数えています。
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            認定期間中の事業者の業種（大分類①）は、製造業558件、情報通信業537件、卸売業・小売業254件、建設業253件の順に多く、IT企業以外にも広がっています。新規の認定は年々増えており、2026年は11月までで767件と過去最多です。事業会社の情報システム部門やDX推進部門の求人を検討する際は、応募先がDX認定を受けているかを一覧で確認すると、DXへの取り組み方を知る手がかりになります。
          </p>
        </section>

        <section id="talent" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">DX人材の不足と人材類型</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            IPA「DX動向2025」の日本・米国・ドイツの比較では、日本はDX推進人材の量が不足していると答えた企業が85.1％だったのに対し、米国・ドイツは「やや過剰」「過不足はない」の合計がそれぞれ73.6％、52.5％で、同調査は人材不足を感じているのは日本だけと分析しています。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            経済産業省の委託調査「IT人材需給に関する調査」（2019年3月）は、2030年のIT人材の需給ギャップを、生産性上昇率0.7％の場合で16.4万人（低位）〜78.7万人（高位）と試算しています。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            IPAの「デジタルスキル標準 ver.2.0」（2026年4月）では、DX推進スキル標準の人材類型が次の6つに整理されています（ver.1.2までは5類型で、データマネジメントが新設されました）。
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-7 mb-4">
            <li>ビジネスアーキテクト</li>
            <li>デザイナー</li>
            <li>データサイエンティスト</li>
            <li>データマネジメント</li>
            <li>ソフトウェアエンジニア（フロントエンド、バックエンド、クラウドエンジニア/SRE、フィジカルコンピューティングの各ロール）</li>
            <li>サイバーセキュリティ</li>
          </ul>
        </section>

        <section id="career" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアのキャリアとDX</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            DX関連の求人は、IT企業だけでなく、製造業・建設業・小売業など事業会社のDX推進部門や情報システム部門にも広がっています。ミドル層のエンジニアが応募する際は、技術力に加えて、業務を理解したうえで変革を進めた経験が評価の対象になりやすいとされています。
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-7 mb-4">
            <li>自分の経験をデジタルスキル標準の類型・ロールに当てはめ、不足するスキルを明確にする</li>
            <li>システム導入だけでなく、業務の見直しや利用部門との調整まで担った実績を整理する</li>
            <li>応募先のDXへの取り組み（DX認定の有無、公開している戦略や体制）を事前に確認する</li>
          </ul>
          <p className="text-slate-600 leading-relaxed">
            業界別の動向は<Link href="/industry/construction-dx/" className="text-blue-600 hover:underline">建設DX業界への転職</Link>や<Link href="/industry/manufacturing/" className="text-blue-600 hover:underline">製造業へのエンジニア転職</Link>、事業会社のポジションは<Link href="/purpose/daikigyo/" className="text-blue-600 hover:underline">大企業ITエンジニアポジションガイド</Link>をご覧ください。
          </p>
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

        <section id="sources" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">出典一覧（確認日：2026年11月24日）</h2>
          <ul className="text-xs text-slate-600 leading-6 space-y-1 break-all">
            <li>経済産業省「デジタルガバナンス・コード3.0」：https://www.meti.go.jp/policy/it_policy/investment/dgc/dgc3.0.pdf</li>
            <li>IPA「DX動向2026」：https://www.ipa.go.jp/digital/chousa/dx-trend/rcu1hd0000017uk8-att/dx-trend-2026.pdf</li>
            <li>IPA「DX動向2025」：https://www.ipa.go.jp/digital/chousa/dx-trend/tbl5kb0000001mn2-att/dx-trend-2025.pdf</li>
            <li>IPA DX認定制度：https://www.ipa.go.jp/digital/dx-nintei/about.html</li>
            <li>IPA DX認定 認定事業者一覧：https://disclosure.dx-portal.ipa.go.jp/p/dxcp/top</li>
            <li>経済産業省「IT人材需給に関する調査」報告書（2019年3月）：https://www.meti.go.jp/policy/it_policy/jinzai/houkokusyo.pdf</li>
            <li>IPA「デジタルスキル標準 ver.2.0」：https://www.ipa.go.jp/jinzai/skill-standard/dss/rcu1hd000000j76k-att/dss_ver2.0.pdf</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "RPAとは", href: "/knowledge/rpa/" },
              { name: "IoTとは", href: "/knowledge/iot/" },
              { name: "リスキリングの進め方", href: "/knowledge/reskilling/" },
              { name: "転職ナレッジ一覧", href: "/knowledge/" },
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
