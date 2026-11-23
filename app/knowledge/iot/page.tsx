import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "IoTとは｜仕組み・分野別デバイス数の推移とエンジニアに求められる知識【2026年】";
const DESCRIPTION =
  "IoT（Internet of Things）とは、さまざまなモノがセンサーと通信を介してインターネットにつながり、データの活用で新たな価値を生み出す仕組みです。法律上の定義、情報通信白書の分野別デバイス数（2024年420.4億台）を当サイトで構成比に集計した結果、IPAの関連資料を整理します。";
const URL = "/knowledge/iot/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "IoTの定義" },
  { id: "structure", label: "IoTシステムの構成要素" },
  { id: "devices", label: "世界のIoTデバイス数（分野別）" },
  { id: "security", label: "IoTとセキュリティ" },
  { id: "career", label: "エンジニアのキャリアとIoT" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const devices = [
  { cat: "コンシューマ", y2019: 50.4, y2024: 142.2, y2027: 216.2, share: 33.8, ratio: 2.82, cagr: "14.8％" },
  { cat: "産業用途", y2019: 55.7, y2024: 124.0, y2027: 191.0, share: 29.5, ratio: 2.23, cagr: "16.0％" },
  { cat: "通信", y2019: 88.1, y2024: 99.0, y2027: 105.7, share: 23.5, ratio: 1.12, cagr: "2.2％" },
  { cat: "コンピュータ", y2019: 21.6, y2024: 20.3, y2027: 19.8, share: 4.8, ratio: 0.94, cagr: "−0.8％" },
  { cat: "医療", y2019: 5.1, y2024: 17.5, y2027: 28.6, share: 4.2, ratio: 3.43, cagr: "18.6％" },
  { cat: "自動車・宇宙航空", y2019: 9.8, y2024: 17.3, y2027: 22.7, share: 4.1, ratio: 1.77, cagr: "9.9％" },
];

const faqs = [
  {
    q: "IoTとは簡単に言うと何ですか？",
    a: "家電・自動車・工場の設備・センサーなど、パソコンやスマートフォン以外のさまざまなモノがインターネットにつながり、データをやり取りする仕組みです。総務省の情報通信白書（平成27年版）は、モノのデータ化やそれに基づく自動化が進み、新たな付加価値を生み出すことをIoTのコンセプトとして説明しています。",
  },
  {
    q: "IoTに法律上の定義はありますか？",
    a: "官民データ活用推進基本法（平成28年法律第103号）第2条第3項に「インターネット・オブ・シングス活用関連技術」の定義があります。インターネットに多様かつ多数の物が接続され、それらの物とやり取りされる大量の情報の活用に関する技術として定められています。",
  },
  {
    q: "IoTデバイスはどの分野で増えていますか？",
    a: "令和7年版情報通信白書（出典：Omdia）では、2024年の世界のIoTデバイス数は420.4億台で、最も多い分野はコンシューマ（142.2億台）です。2023年から2026年の年平均成長率の予測は、医療18.6％、産業用途16.0％、コンシューマ14.8％の順に高くなっています。",
  },
  {
    q: "IoTエンジニアに役立つ資格はありますか？",
    a: "IPAのエンベデッドシステムスペシャリスト試験は「IoT時代に欠かせない組込みシステムの腕利きエンジニア」を対象とする高度試験です。ただし、現行の試験制度は2026年度の実施をもって終了し、2027年度から新試験制度に移行する予定とされています。受験を検討する際はIPAの最新情報をご確認ください。",
  },
  {
    q: "IoT機器はなぜサイバー攻撃に狙われやすいのですか？",
    a: "総務省とNICTは、IoT機器は性能が限定されている、管理が行き届きにくい、ライフサイクルが長いといった特徴から、サイバー攻撃に狙われやすいと説明しています。令和7年版情報通信白書では、NICTERの観測でIoT機器を狙った通信がサイバー攻撃関連通信全体の約3割を占めたとされています。",
  },
];

export default function IotPage() {
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
          { name: "IoTとは" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          IoTとは｜仕組み・分野別デバイス数の推移とエンジニアに求められる知識
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月24日 | 公式資料の確認日: 2026年11月24日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】IoTとは</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>IoT（Internet of Things／モノのインターネット）とは、さまざまなモノがセンサーと通信を介してインターネットにつながり、そのデータを活用して新たな価値を生み出す仕組みです。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・世界のIoTデバイス数は2024年に420.4億台で、2019年（230.7億台）の約1.8倍です（令和7年版情報通信白書）</li>
              <li>・2024年の構成比はコンシューマ33.8％、産業用途29.5％、通信23.5％です（当サイト集計）</li>
              <li>・開発には組込み・通信・クラウド・セキュリティにまたがる知識が求められます</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、IoTの定義を法律と総務省の資料にもとづいて説明し、情報通信白書に掲載された分野別のIoTデバイス数を当サイトで構成比・増加倍率に集計して整理します。あわせて、IoT開発で求められるセキュリティの考え方と、30代・40代のエンジニアがキャリアを考える際の関連資格・職種をご説明します。
        </p>

        <DataNote
          surveyedAt="2026年11月24日"
          sources={["総務省「令和7年版 情報通信白書」（出典：Omdia）", "官民データ活用推進基本法（e-Gov法令検索）", "IPA エンベデッドシステムスペシャリスト試験・IoTセキュリティ資料"]}
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">IoTの定義</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            総務省の情報通信白書（平成27年版）は、さまざまな「モノ」がセンサーと無線通信を介してインターネットの一部を構成することを「モノのインターネット」（IoT）と表現しています。そのうえで、自動車・家電・ロボット・施設などあらゆるモノがインターネットにつながって情報をやり取りし、モノのデータ化やそれに基づく自動化が進むことで新たな付加価値を生み出す、という考え方をIoTのコンセプトとして説明しています。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <h3 className="font-bold text-slate-800 mb-2">法律上の定義（官民データ活用推進基本法 第2条第3項）</h3>
            <p className="text-sm text-slate-600 leading-7">
              「インターネット・オブ・シングス活用関連技術」は、インターネットに多様かつ多数の物が接続されて、それらの物から送信され、またはそれらの物に送信される大量の情報の活用に関する技術であって、付加価値の創出により事業者の経営の能率・生産性の向上、新たな事業の創出、就業機会の増大をもたらすもの、と定められています。
            </p>
          </div>
        </section>

        <section id="structure" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">IoTシステムの構成要素</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            IPAの「IoT開発におけるセキュリティ設計の手引き」は、IoTの構成要素を次の5つに分類しています。エンジニアの担当領域は、この構成要素のどこを受け持つかで大きく変わります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">構成要素（IPAの分類）</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">主に関わる技術領域</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">サービス提供サーバ・クラウド</td><td className="border border-slate-200 px-3 py-2">クラウド基盤、データ基盤、Webアプリケーション</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">中継機器</td><td className="border border-slate-200 px-3 py-2">ゲートウェイ、ネットワーク</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">システム</td><td className="border border-slate-200 px-3 py-2">複数の機器をまとめた制御・管理の仕組み</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">デバイス</td><td className="border border-slate-200 px-3 py-2">組込みソフトウェア、センサー、通信モジュール</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">直接相互通信するデバイス</td><td className="border border-slate-200 px-3 py-2">機器間の近距離通信</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 構成要素の名称はIPAの手引きによります。「主に関わる技術領域」は当サイトの整理です。</p>
        </section>

        <section id="devices" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">世界のIoTデバイス数（分野別）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            令和7年版情報通信白書のデータ集（出典：Omdia）に掲載された分野別のIoTデバイス数をもとに、当サイトで2024年の構成比と2019年からの増加倍率を算出しました。2027年は予測値です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">分野</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">2019年</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">2024年</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">2027年（予測）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">2024年の構成比</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">2019→2024年の倍率</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">年平均成長率（2023→2026年予測）</th>
                </tr>
              </thead>
              <tbody>
                {devices.map((d) => (
                  <tr key={d.cat}>
                    <td className="border border-slate-200 px-3 py-2">{d.cat}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{d.y2019}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{d.y2024}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{d.y2027}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{d.share}％</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{d.ratio.toFixed(2)}倍</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{d.cagr}</td>
                  </tr>
                ))}
                <tr className="font-bold">
                  <td className="border border-slate-200 px-3 py-2">合計</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">230.7</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">420.4</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">583.9</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">100％</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">1.82倍</td>
                  <td className="border border-slate-200 px-3 py-2 text-right">－</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            単位：億台。台数・年平均成長率は総務省「令和7年版 情報通信白書」データ集（図表「世界のIoTデバイス数の推移及び予測」「分野・産業別の世界のIoTデバイス数及び成長率予測」、出典：Omdia）。構成比・倍率は当サイトの計算で、小数第2位（構成比は第1位）までの四捨五入です。
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            2019年に最も多かった通信分野（スマートフォンなど）は2024年までに1.12倍にとどまる一方、医療は3.43倍、コンシューマは2.82倍、産業用途は2.23倍に増えています。2023年以降はコンシューマが最大の分野で、成長率の予測は医療と産業用途が高い水準です。工場・設備・医療機器など、業務用途の機器に関わる開発の比重が高まっていることが読み取れます。
          </p>
        </section>

        <section id="security" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">IoTとセキュリティ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            総務省とNICTは、センサーやウェブカメラなどのIoT機器について、性能が限定されている、管理が行き届きにくい、ライフサイクルが長いといった特徴から、サイバー攻撃に狙われやすいと説明しています。令和7年版情報通信白書によると、NICTの観測網（NICTER）ではIoT機器を狙った通信が最も多く観測され、サイバー攻撃関連通信全体の約3割を占めました。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            このため総務省・NICT・インターネット・サービス・プロバイダは、2019年2月から「NOTICE」として、容易に推測されるパスワードを設定したIoT機器を調査し、利用者に注意喚起を行っています。2024年度からは、脆弱性のある機器やマルウェアに感染した端末の調査にも対象が広げられています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            開発側の資料としては、IPAが「IoT開発におけるセキュリティ設計の手引き」（2023年3月改訂）を公開しており、デジタルテレビ、ヘルスケア機器とクラウドサービス、スマートハウス、コネクテッドカーの脅威分析の例が掲載されています。
          </p>
        </section>

        <section id="career" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニアのキャリアとIoT</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            IoTの開発は、デバイス側の組込みソフトウェアから、通信・ゲートウェイ、クラウド上のデータ基盤やアプリケーションまで範囲が広く、1人ですべてを担うことはまれです。転職市場では、これまでの経験がどの構成要素に当たるかを明確にし、隣接する領域へ広げる形でキャリアを組み立てる方法が現実的です。
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-7 mb-4">
            <li>組込みエンジニア：デバイスの知見に、クラウド連携やセキュリティ設計の経験を加える</li>
            <li>Web・クラウドエンジニア：データ収集基盤や機器管理の仕組みなど、サーバ・クラウド側から関わる</li>
            <li>インフラ・ネットワークエンジニア：中継機器やネットワークの設計・運用の経験を生かす</li>
          </ul>
          <p className="text-slate-600 leading-relaxed mb-4">
            IPAのエンベデッドシステムスペシャリスト試験は「IoT時代に欠かせない組込みシステムの腕利きエンジニア」を対象とし、IoTを含む組込みシステムの開発に関する知識・技能を問う高度試験です。現行の試験制度は2026年度の実施をもって終了し、2027年度から新試験制度に移行する予定とされています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            組込みからWeb系へ移る場合の進め方は<Link href="/career/embedded-to-web/" className="text-blue-600 hover:underline">組込みからWebエンジニアへの転職</Link>、組込み領域の求人動向は<Link href="/skill/embedded/" className="text-blue-600 hover:underline">組込みエンジニアの転職ガイド</Link>をご覧ください。
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
            <li>総務省「令和7年版 情報通信白書」データ集：https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/r07/html/datashu.html</li>
            <li>総務省「令和7年版 情報通信白書」総合的なIoTボットネット対策の推進：https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/r07/html/nd225210.html</li>
            <li>総務省「令和7年版 情報通信白書」サイバーセキュリティの現状：https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/r07/html/nd21a210.html</li>
            <li>総務省「平成27年版 情報通信白書」ユビキタスからIoTへ：https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/h27/html/nc254110.html</li>
            <li>総務省・NICT 報道資料（2019年2月1日）：https://www.soumu.go.jp/menu_news/s-news/01cyber01_02000001_00011.html</li>
            <li>官民データ活用推進基本法（e-Gov法令検索）：https://laws.e-gov.go.jp/law/428AC1000000103</li>
            <li>IPA エンベデッドシステムスペシャリスト試験：https://www.ipa.go.jp/shiken/kubun/es.html</li>
            <li>IPA「IoT開発におけるセキュリティ設計の手引き」：https://www.ipa.go.jp/security/iot/iotguide.html</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "組込みエンジニアの転職ガイド", href: "/skill/embedded/" },
              { name: "組込みからWebエンジニアへの転職", href: "/career/embedded-to-web/" },
              { name: "DXとは", href: "/knowledge/dx/" },
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
