import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "海外で働くエンジニアの転職【ルート・英語・ビザ】",
  description:
    "海外で働くエンジニアの転職方法を解説。現地採用・駐在・リモートの3ルートの違い、英語要件の目安、ビザの一般知識を30代・40代向けに整理。制度は公式情報の確認を案内します。",
};

const toc = [
  { id: "conclusion", label: "結論：まず3つのルートから自分の現実解を選ぶ" },
  { id: "routes", label: "海外で働く3つのルート（現地採用/駐在/リモート）" },
  { id: "english", label: "英語要件の目安と準備" },
  { id: "visa", label: "ビザの一般知識（必ず公式確認）" },
  { id: "steps", label: "海外就職の進め方ステップ" },
  { id: "checklist", label: "向いている人・準備チェックリスト" },
  { id: "mid-career", label: "30代・40代で海外を目指す視点" },
  { id: "faq", label: "よくある質問" },
];

const routes = [
  { route: "現地採用", how: "海外企業に直接応募し、現地で雇用される", pros: "現地キャリアを本格的に積める／職務の幅が広い", cons: "ビザ・住居・生活立ち上げを自力で行う負担" },
  { route: "駐在（社内異動）", how: "日系・外資系企業の海外拠点へ異動", pros: "会社がビザ・住居・帯同を支援。リスクが低い", cons: "ポストの空き次第。希望地・タイミングを選びにくい" },
  { route: "リモート", how: "海外企業に在宅で雇用、または業務委託で働く", pros: "移住せず海外の仕事に関われる場合がある", cons: "時差・契約形態・税務・就労可否の確認が必須" },
];

const englishLevels = [
  { scene: "書類・コード・ドキュメント", level: "技術英語の読み書きが滞りなくできる", note: "まずここから固める。日常的にコメント・PRを英語で書く練習が有効" },
  { scene: "技術面接", level: "設計・実装を英語で説明できる", note: "専門用語を口頭で扱えるレベル。模擬面接で慣らす" },
  { scene: "日常業務・チーム会話", level: "会議・雑談に支障なく参加できる", note: "完璧でなくても、技術力が高ければ許容される場面は多い" },
];

const faqs = [
  { q: "海外で働くにはどのルートが現実的ですか？", a: "リスクの低さでは「駐在（社内異動）」、現地キャリアを積むなら「現地採用」、移住せず関わるなら「リモート」が目安です。今の勤務先に海外拠点があるなら、社内異動を狙うのが最も負担の少ない入り口になりやすいです。自分の事情に合うルートから逆算しましょう。" },
  { q: "海外就職に英語力はどのくらい必要ですか？", a: "職種・国・企業によりますが、最低限『技術英語の読み書き』と『技術面接で設計・実装を説明できる』レベルが土台になります。日常会話が完璧である必要は必ずしもなく、技術力が高ければ多少の不完全さが許容される場面もあります。求められる具体的な基準は各求人で確認してください。" },
  { q: "日本にいながら海外企業で働けますか？", a: "リモート雇用や業務委託で海外企業の仕事に関わる選択肢はあります。ただし、その国・企業がリモート就労を認めているか、契約形態、税務、就労資格の扱いなどを事前に確認する必要があります。ビザや税の扱いは複雑なため、公式情報や専門家への確認が前提です。" },
  { q: "ビザの取得は難しいですか？", a: "国・ビザ種別・タイミング・本人の経歴により大きく異なります。就労ビザは企業のスポンサーが必要なケースが一般的です。要件や制度は頻繁に変わるため、本記事は一般的な説明にとどめます。最新かつ正確な要件は、各国政府・大使館の公式情報や、移民・ビザの専門家に必ずご確認ください。" },
  { q: "海外転職にエージェントは使えますか？", a: "外資系・グローバル採用に対応したエージェントや、外資系日本法人の求人を扱う国内エージェントが利用できます。まずは外資系日本法人で英語環境に慣れ、社内異動で海外を目指す進め方も現実的です。" },
  { q: "40代でも海外で働けますか？", a: "海外では年齢よりスキルと経験が重視される傾向があるとされ、シニアエンジニアやアーキテクトのポジションは経験豊富な層に向きます。一方で、ビザ要件や家族の帯同など、ミドル世代特有の確認事項が増える点には注意が必要です。" },
  { q: "海外で働くと年収は上がりますか？", a: "国・企業・職位によって大きく異なり、一概には言えません。年収が高い国でも住居費・医療費・税金が高い場合があり、手取りと生活コストを総合して比較することが重要です。具体的な水準は各求人のオファー内容で確認してください。" },
  { q: "まず何から準備すればよいですか？", a: "①技術英語の読み書きを日常化する、②LinkedInプロフィールを英語化する、③コーディングテスト・システム設計の対策を進める、④今の勤務先の海外拠点・社内異動制度を調べる、の4つから始めるのが現実的です。" },
];

export default function OverseasPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="海外で働くエンジニアの転職【ルート・英語・ビザ】" description="海外で働くエンジニアの転職方法を解説。現地採用・駐在・リモートの3ルートの違い、英語要件の目安、ビザの一般知識を30代・40代向けに整理。制度は公式情報の確認を案内します。" url="/knowledge/overseas/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "転職ガイド" }, { name: "海外で働く" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">海外で働くエンジニアの転職【ルート・英語要件・ビザの基礎】</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | 現地採用・駐在・リモートの選び方</p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">「海外で働きたい」と一口に言っても、現地採用・駐在・リモートでは進め方も難易度もまったく異なります。本記事では、3つのルートの違い、英語要件の目安、ビザの一般知識を整理し、30代・40代のミドルエンジニアが自分の現実解を選べるようにまとめます。制度の詳細は公式情報での確認が前提です。</p>
        </section>

        <div className="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6 text-sm text-amber-900 leading-relaxed">
          <p className="font-bold mb-1">ビザ・税務・就労資格について</p>
          <p>本記事のビザ・制度に関する記述は<strong>一般的な説明</strong>です。要件は国・時期・経歴により変わります。最新かつ正確な情報は、各国政府・大使館の公式サイトや、移民・税務の専門家に必ずご確認ください。</p>
        </div>

        <DataNote surveyedAt="2026年6月" sources={["経済産業省「IT人材需給に関する調査」（2019年公表）"]} />

        <nav className="mb-10 border border-slate-200 rounded-lg p-5 bg-slate-50">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2 text-sm">
            {toc.map((t) => (<li key={t.id}><a href={`#${t.id}`} className="text-blue-600 hover:underline">{t.label}</a></li>))}
          </ul>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：まず3つのルートから自分の現実解を選ぶ</h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-5">
            <p className="text-slate-700 leading-relaxed mb-3">海外で働く道は一つではありません。リスクと得たいものから逆算して選びます。</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>1. <strong>リスクを抑えたい</strong> → 駐在（社内異動）。会社がビザ・住居を支援</li>
              <li>2. <strong>現地キャリアを積みたい</strong> → 現地採用。自力でビザ・生活を立ち上げる</li>
              <li>3. <strong>移住せず関わりたい</strong> → リモート。就労資格・税務の確認が必須</li>
            </ul>
          </div>
        </section>

        <section id="routes" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">海外で働く3つのルート（現地採用/駐在/リモート）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-slate-100"><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">ルート</th><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">仕組み</th><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">メリット</th><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">注意点</th></tr></thead>
              <tbody>
                {routes.map((r, i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-slate-50" : ""}>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600 font-medium">{r.route}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{r.how}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{r.pros}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{r.cons}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">今の勤務先に海外拠点があるなら、まず社内異動（駐在）の可能性を調べるのが最も負担の少ない入り口になりやすいです。外資系日本法人に転職して英語環境に慣れ、後から海外を目指す段階的なルートも有効です。</p>
        </section>

        <section id="english" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">英語要件の目安と準備</h2>
          <p className="text-slate-600 leading-relaxed mb-4">英語は「全部できないと無理」ではなく、場面ごとに必要なレベルが違います。優先順位をつけて固めると効率的です。求められる具体的な基準は国・企業・求人で異なるため、各求人で確認してください。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-slate-100"><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">場面</th><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">求められる目安</th><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">準備のヒント</th></tr></thead>
              <tbody>
                {englishLevels.map((e, i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-slate-50" : ""}>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600 font-medium">{e.scene}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{e.level}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{e.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">技術力が高ければ、英語の多少の不完全さは許容される場面があります。まずは技術英語の読み書きを日常化し、次に技術面接の英語に慣らすのが現実的な順序です。</p>
        </section>

        <section id="visa" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ビザの一般知識（必ず公式確認）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">就労ビザは、海外で働くうえで避けて通れない論点です。以下は一般的な傾向の整理であり、最新の要件は必ず公式情報で確認してください。</p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">スポンサーが必要なケースが多い</h3>
              <p className="text-sm text-slate-600 leading-relaxed">多くの就労ビザは、雇用する企業がスポンサーとなることを前提とします。つまり「内定」と「ビザ取得」はセットで考える必要があり、ビザ支援の有無は求人選びの重要な確認事項です。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">国・種別で難易度とプロセスが大きく異なる</h3>
              <p className="text-sm text-slate-600 leading-relaxed">抽選制のビザ、ポイント制・スキルベースのビザなど、制度は国により様々です。難易度・所要期間・必要書類も異なります。具体的な制度名や要件はここでは断定せず、各国政府・大使館の公式情報をご確認ください。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">家族の帯同・税務も併せて確認する</h3>
              <p className="text-sm text-slate-600 leading-relaxed">配偶者・子どもの帯同ビザ、現地での就学、二重課税の扱いなど、生活全体に関わる確認事項があります。専門家（移民弁護士・税理士など）への相談を前提にしましょう。</p>
            </div>
          </div>
        </section>

        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">海外就職の進め方ステップ</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "ルートを決める（現地採用/駐在/リモート）", desc: "自分の事情（家族・資金・キャリア希望）から、最初に狙うルートを一つ決めます。今の勤務先の海外拠点・社内異動制度も調べましょう。" },
              { num: "2", title: "英語の土台を作る", desc: "技術英語の読み書きを日常化し、次に技術面接で説明できるレベルへ。コードのコメントやPRを英語で書く習慣が近道です。" },
              { num: "3", title: "LinkedInプロフィールを英語化する", desc: "職歴・スキル・成果を英語で記載し、リクルーターから見つけてもらえる状態に整えます。" },
              { num: "4", title: "選考対策（コーディングテスト・システム設計）", desc: "アルゴリズムと大規模システム設計の対策を進めます。英語で説明できることが重要です。" },
              { num: "5", title: "応募・選考・ビザ確認", desc: "採用ページ・LinkedIn・リファラル経由で応募。オファー段階でビザ支援の有無と条件を必ず確認します。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{item.num}</span>
                <div><h3 className="font-bold text-slate-800 mb-1">{item.title}</h3><p className="text-sm text-slate-600">{item.desc}</p></div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">選考対策は<Link href="/knowledge/coding-test/" className="text-blue-600 hover:underline">コーディングテスト対策</Link>と<Link href="/knowledge/system-design/" className="text-blue-600 hover:underline">システム設計面接の対策</Link>、プロフィール整備は<Link href="/knowledge/linkedin/" className="text-blue-600 hover:underline">LinkedInを使った転職術</Link>が参考になります。</p>
        </section>

        <section id="checklist" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人・準備チェックリスト</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">✓ 海外就職に向いている人</h3>
              <ul className="space-y-2 text-sm text-green-900">
                <li>✓ 技術英語の読み書きに抵抗がない、または習慣化できる</li>
                <li>✓ 生活環境の変化や立ち上げの手間を許容できる</li>
                <li>✓ スキル・実績を客観的に示せる（GitHub・OSS等）</li>
                <li>✓ ビザ・税務など事務手続きを根気よく進められる</li>
              </ul>
            </div>
            <div className="border border-slate-200 bg-slate-50 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3">☑ 動き出す前の準備チェック</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>☑ 狙うルート（現地採用/駐在/リモート）を一つ決めた</li>
                <li>☑ 今の勤務先の海外拠点・社内異動制度を確認した</li>
                <li>☑ LinkedInを英語化した</li>
                <li>☑ ビザ支援の有無を求人選びの条件に入れた</li>
                <li>☑ 家族の帯同・就学・税務の確認先を把握した</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="mid-career" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代で海外を目指す視点</h2>
          <p className="text-slate-600 leading-relaxed mb-4">海外では年齢よりスキルと経験が重視される傾向があり、シニアエンジニアやアーキテクトのポジションは経験豊富なミドル世代に向きます。一方で、家族の帯同・子どもの就学・配偶者のキャリアなど、確認すべき事項は若手より増えます。</p>
          <p className="text-slate-600 leading-relaxed">日本国内でも経験者の需要は高く、経済産業省「IT人材需給に関する調査」（2019年公表の試算）では2030年に最大約79万人のIT人材不足が示されています。「海外」と「国内の外資系」を並行して検討し、外資系日本法人を経由して海外を目指す段階的なルートも、ミドル世代にはリスクの低い選択肢です。海外から日本に戻る場合は<Link href="/knowledge/return-japan/" className="text-blue-600 hover:underline">帰国転職ガイド</Link>も参考にしてください。</p>
        </section>

        <section id="faq" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
                <div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">外資系・グローバル転職をサポート</h2>
          <p className="text-blue-100 text-sm mb-4">IT特化型エージェントなら外資系日本法人の求人も紹介。まずは国内から英語環境のキャリアを始める手もあります。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "海外から日本に帰国転職", href: "/knowledge/return-japan/" },
              { name: "LinkedInを使った転職術", href: "/knowledge/linkedin/" },
              { name: "コーディングテスト対策", href: "/knowledge/coding-test/" },
              { name: "システム設計面接の対策", href: "/knowledge/system-design/" },
              { name: "リモートワーク転職ガイド", href: "/knowledge/remote-work/" },
              { name: "市場価値の把握", href: "/knowledge/market-value/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
