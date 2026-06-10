import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "Microsoft Azure Fundamentals(AZ-900)は転職に効くか【2026年】";
const PAGE_DESC =
  "Microsoft Azure Fundamentals（AZ-900）を、入門レベルの資格という観点から30代・40代向けに正直に解説。受験料・試験形式・合格スコア・出題範囲を公式情報で整理し、Azure学習の出発点としての価値と、それ単体では弱いという限界をまとめます。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：AZ-900は誰に効く資格か" },
  { id: "overview", label: "試験概要（受験料・形式・合格基準）" },
  { id: "scope", label: "出題範囲（3分野）" },
  { id: "value", label: "30代・40代経験者にとっての価値（正直な評価）" },
  { id: "scenes", label: "転職で評価される具体場面" },
  { id: "jobs", label: "次に目指すポジション" },
  { id: "steps", label: "取得3ステップ／次に狙う資格" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "AZ-900は40代の転職で意味がありますか？",
    a: "限定的ですが意味はあります。AZ-900（Azure Fundamentals）はMicrosoft公式で『初級』に位置づけられる入門資格で、クラウドの概念とAzureの基礎を示すものです。Azureキャリアの一般的な出発点とされており、転職で直接的な決め手になるというより、これからAzureを学ぶ姿勢や基礎理解の証明として機能します。経験者にとっては、上位のAZ-104などへ進む前段として位置づけるのが現実的です。",
  },
  {
    q: "AZ-900の受験料はいくらですか？",
    a: "Microsoft公式によると、AZ-900の受験料は米国で監督付き受験の場合99 USDです（日本円では概ね1万円台前半が目安。価格は受験国・地域や為替で変動します、2026年6月時点）。最新の正確な金額は、Pearson VUEでのスケジュール時にMicrosoft Learnでご確認ください。",
  },
  {
    q: "AZ-900の試験形式と合格スコアを教えてください。",
    a: "AZ-900は監督付き試験で、試験時間は45分です。出題数は回によって変動しますが、おおむね40〜60問程度です。合格スコアはMicrosoftの認定試験共通で1,000点満点中700点以上が必要です。スコアはスケールスコアのため、単純な正答率とは一致しません（Microsoft Learn、2026年6月時点）。",
  },
  {
    q: "AZ-900の合格率はどのくらいですか？",
    a: "Microsoftは合格率を公表していません。各社とも合格率は非公表が通例で、当サイトでは創作した数値は掲載しません。AZ-900は入門レベルのため、Microsoft Learnの無料教材と公式の練習評価で体系的に学べば、IT実務経験のある人には取り組みやすい難度とされています（Microsoft Learn、2026年6月時点）。",
  },
  {
    q: "AZ-900に有効期限はありますか？",
    a: "Microsoftの『Fundamentals（基礎）』レベルの認定には、ロールベース認定のような毎年の更新は求められません。AZ-104などのロールベース認定が原則1年ごとの更新（無料のオンライン評価）を要するのとは扱いが異なります。最新の更新ポリシーはMicrosoft Learnでご確認ください（2026年6月時点）。",
  },
  {
    q: "AZ-900とAZ-104はどちらを取るべきですか？",
    a: "実務でAzureを扱う経験があるなら、AZ-104（Azure管理者アソシエイト）の方が転職での評価につながりやすいです。AZ-900はあくまで入門で、クラウド・Azureの全体像を初めて押さえる人向け。すでにインフラ運用の経験があるミドルは、AZ-900を飛ばしてAZ-104を直接狙う、あるいはAZ-900で全体像を素早く掴んでからAZ-104へ進む、のいずれかが効率的です。",
  },
];

const overviewTable = [
  ["主催", "Microsoft"],
  ["試験コード", "AZ-900"],
  ["レベル", "初級（Fundamentals／入門）"],
  ["受験料", "99 USD（米国・監督付き受験。受験国・為替で変動）"],
  ["試験時間", "45分"],
  ["合格基準", "1,000点満点中700点以上"],
  ["合格率", "Microsoftは合格率を公表していない"],
  ["更新", "Fundamentalsは毎年の更新義務なし（ポリシーは要確認）"],
];

export default function CertAzureFundamentalsPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/cert/azure-fundamentals/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "資格で選ぶ転職", href: "/cert/" },
          { name: "Azure Fundamentals（AZ-900）" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Microsoft Azure Fundamentals（AZ-900）は転職に効くか
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | Azure Fundamentals（AZ-900）の転職価値を30代・40代向けに正直に解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          Microsoft Azure Fundamentals（AZ-900）は、クラウドの概念とAzureのコアサービス、管理・ガバナンスの基礎知識を示す、Microsoft公式で<strong>『初級（入門）』</strong>に位置づけられる認定です。本記事は「AZ-900を取れば転職で有利になるか」という疑問に対し、<strong>Azure学習の出発点としての価値</strong>と、<strong>それ単体では転職の決め手になりにくいという限界</strong>を、公式情報をもとに正直に整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "Microsoft Learn 公式（learn.microsoft.com・AZ-900 認定情報）",
            "本サイト データシート（2026年6月）",
          ]}
        />

        {/* 目次 */}
        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
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
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：AZ-900は誰に効く資格か</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              AZ-900は<strong>入門資格</strong>です。Microsoft自身が『Azureキャリアの一般的な出発点』と位置づけており、転職の決め手というより<strong>「これからAzureを学ぶための土台と姿勢の証明」</strong>として捉えるのが正直なところです。経験者は上位資格の前段として活用するのが現実的です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>これからAzureを学ぶ人</strong>：全体像を短期間で体系的に押さえる入口として有効</li>
              <li>② <strong>インフラ実務のあるミドル</strong>：AZ-900は基礎的すぎる場合あり。AZ-104を直接狙う選択も</li>
              <li>③ <strong>転職の決め手としては弱い</strong>：単体ではなく、上位資格・実務とセットで意味を持つ</li>
            </ul>
          </div>
        </section>

        {/* 試験概要 */}
        <section id="overview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">試験概要（受験料・形式・合格基準）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <tbody>
                {overviewTable.map(([k, v], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200 w-1/3 align-top">{k}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: Microsoft Learn 公式（learn.microsoft.com、2026年6月時点）。受験料99 USD（米国・監督付き受験。日本円では1万円台前半が目安、受験国・為替で変動）、試験時間45分、合格は1,000点満点中700点以上。Microsoftは合格率を公表していません。正確な料金・条件はMicrosoft Learnでご確認ください。
          </p>
        </section>

        {/* 出題範囲 */}
        <section id="scope" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">出題範囲（3分野）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            AZ-900は、Microsoft公式の試験ページで次の3分野が評価対象とされています。実装よりも「概念の理解と説明ができること」に重点が置かれています。
          </p>
          <div className="space-y-3">
            {[
              { t: "クラウドの概念について説明する", d: "クラウドコンピューティングの基礎、サービスモデル（IaaS/PaaS/SaaS）やメリットの理解。" },
              { t: "Azureのアーキテクチャとサービスについて説明する", d: "Compute・ネットワーク・Storageなど、Azureのコアサービスと構成要素の理解。" },
              { t: "Azureの管理とガバナンスについて説明する", d: "コスト管理、セキュリティ・コンプライアンス、ガバナンスのツールと機能の理解。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 leading-relaxed mt-3">
            出典: Microsoft Learn 公式 試験ページ（AZ-900、2026年6月時点）。各分野の詳細なトピックは公式の学習ガイドをご確認ください。
          </p>
        </section>

        {/* 30-40代の価値 */}
        <section id="value" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代経験者にとっての価値（正直な評価）</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              正直に言えば、AZ-900は<strong>それ単体で転職を後押しする力は強くありません</strong>。Microsoft自身が『初級』『Azureキャリアの出発点』と位置づける入門資格であり、実装スキルを問うものではないためです。すでにインフラ運用などの実務経験があるミドルにとっては、内容が基礎的すぎると感じる場面もあるでしょう。
            </p>
            <p>
              それでも価値はあります。Azureを扱う案件は官公庁・大企業を中心に根強く、<strong>クラウド全体像を短期間で体系化し、上位資格（AZ-104など）へ進む土台を作る</strong>には効率的です。学習意欲の客観的な証明にもなり、AWSしか触れてこなかった人がAzureへ間口を広げる第一歩としても機能します。重要なのは、AZ-900を「ゴール」ではなく「通過点」と位置づけることです。
            </p>
            <p>
              もう一つ正直に補足すると、転職市場でAZ-900そのものが応募要件に挙がることは多くありません。求人で求められるのは多くの場合、AZ-104以上のロールベース認定や実務経験です。だからこそAZ-900は「履歴書を飾る一行」ではなく、「これから本格的に学ぶための地図」として使うのが賢明です。クラウドの料金モデルやガバナンス、共有責任モデルといった概念を先に押さえておけば、その後のAZ-104の学習や、実際のクラウド移行プロジェクトでの会話が一段スムーズになります。入門資格の価値は、合格そのものより、その先の学習を加速させる点にあります。
            </p>
            <p>
              年代別の市場感は<Link href="/age/30s/" className="text-blue-600 hover:underline">30代エンジニアの転職</Link>・<Link href="/age/40s/" className="text-blue-600 hover:underline">40代エンジニアの転職</Link>、職種としての全体像は<Link href="/skill/azure/" className="text-blue-600 hover:underline">Azureエンジニア転職ガイド</Link>も合わせてご覧ください。
            </p>
          </div>
        </section>

        {/* 評価される場面 */}
        <section id="scenes" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職で評価される具体場面</h2>
          <div className="space-y-3">
            {[
              { t: "Azure未経験からの学習スタートの証明", d: "AWS経験者などがAzureへ間口を広げる際、基礎理解と学習姿勢の客観的な証明になる。" },
              { t: "クラウド全体像の理解の土台", d: "サービスモデルやガバナンスの基礎を押さえ、上位資格・実務の理解を加速させる。" },
              { t: "資格手当・社内評価の対象", d: "入門資格でも手当・評価の対象とする企業があり、社内での学習評価の入口になる。" },
              { t: "AZ-104など上位資格への布石", d: "Azureの全体像を先に掴むことで、ロールベース認定の学習効率が上がる。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 次に目指すポジション */}
        <section id="jobs" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">次に目指すポジション</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            AZ-900は入門のため、それ自体が特定ポジションの要件になることは多くありません。むしろ、ここを起点に上位資格・実務へ進んだ先のポジションを見据えるのが現実的です。
          </p>
          <div className="space-y-3">
            {[
              { t: "Azureインフラエンジニア（AZ-104の先）", d: "全体像を押さえたうえでAZ-104へ進み、Azure環境の構築・運用を担う。" },
              { t: "クラウドインフラエンジニア（マルチクラウド）", d: "AWS×Azureの両方を理解する人材として、マルチクラウド案件で評価される。" },
              { t: "社内SE・情シス（クラウド移行担当）", d: "クラウド基礎の共通言語として、移行プロジェクトの初期検討で役立つ。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            インフラの土台は<Link href="/skill/infrastructure/" className="text-blue-600 hover:underline">インフラエンジニア転職ガイド</Link>、クラウド職種は<Link href="/skill/azure/" className="text-blue-600 hover:underline">Azureエンジニア転職ガイド</Link>も参考にしてください。
          </p>
        </section>

        {/* 取得3ステップ */}
        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">取得3ステップ／次に狙う資格</h2>
          <div className="space-y-3 mb-6">
            {[
              { n: "STEP 1", t: "Microsoft Learnの無料教材で学ぶ", d: "公式の無料ラーニングパスで、クラウド概念・Azureサービス・ガバナンスの3分野を押さえる。" },
              { n: "STEP 2", t: "公式の練習評価で確認", d: "Microsoft Learnの練習評価（プラクティス）で出題スタイルと理解度を確認する。" },
              { n: "STEP 3", t: "合格→AZ-104など上位へ", d: "全体像を掴んだら、ロールベース認定のAZ-104（Azure管理者）へ進み実装力を示す。" },
            ].map((x, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="text-xs font-bold text-blue-600 shrink-0 w-14 pt-1">{x.n}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                  <p className="text-sm text-slate-600">{x.d}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            次の一手は<Link href="/cert/azure-administrator/" className="text-blue-600 hover:underline">Azure Administrator（AZ-104）</Link>。AWSと比較検討するなら<Link href="/cert/aws-saa/" className="text-blue-600 hover:underline">AWS認定SAA</Link>も併せてご覧ください。
          </p>
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
          <h2 className="text-xl font-bold mb-3">クラウド領域への転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            Azure・クラウド領域で活かせる求人を、IT特化型エージェントであなたの市場価値とともに確認しましょう。
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
              { name: "Azure Administrator（AZ-104）", href: "/cert/azure-administrator/" },
              { name: "Azureエンジニア転職ガイド", href: "/skill/azure/" },
              { name: "AWS認定SAA（アソシエイト）", href: "/cert/aws-saa/" },
              { name: "インフラエンジニア転職ガイド", href: "/skill/infrastructure/" },
              { name: "AWS認定資格の活かし方", href: "/cert/aws/" },
              { name: "資格で選ぶ転職トップ", href: "/cert/" },
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
