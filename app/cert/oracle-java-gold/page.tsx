import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "Oracle認定Javaプログラマ Goldは転職に効くか｜中級Java実装力の証明【2026年】";
const PAGE_DESC =
  "Oracle認定JavaプログラマGold（OCJP Gold SE）を、30代・40代向けに解説。受験料・試験形式・Silver前提・有効期限なし、中級以上のJava実装力の証明としての価値、年収の考え方を公式情報をもとに限界も含めて整理します。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：Java Goldは誰に効く資格か" },
  { id: "overview", label: "試験概要（受験料・形式・前提・有効期限）" },
  { id: "salary", label: "保有者の年収の考え方と注意点" },
  { id: "scenes", label: "転職で評価される具体場面" },
  { id: "jobs", label: "活きるポジション" },
  { id: "position", label: "中級証明としての活用戦略" },
  { id: "middle", label: "30代・40代の価値＝実装力の上積み証明" },
  { id: "steps", label: "取得3ステップ／次に狙う資格" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "Java Goldは40代の転職で意味がありますか？",
    a: "意味があります。Oracle認定Javaプログラマ Gold（OCJP Gold SE）は、設計者の意図を理解して独力で機能を実装できる中上級者向けの資格です。ジェネリクス・関数型・並行処理・モジュールなど応用領域まで問われ、すでにJavaで開発してきた30〜40代が中級以上の実装力を客観的に示せます。ただし資格単体で評価が決まるわけではなく、Javaの実プロジェクト経験とセットで効く点が前提です。",
  },
  {
    q: "Java Goldを受けるのに前提資格は必要ですか？",
    a: "必要です。Goldの認定を得るには、前提としてOracle認定Javaプログラマ Silver（Silver SE 11／SE 8／SE 7のいずれか）の認定が求められます。つまり基礎（Silver）を押さえたうえで、中級以上（Gold）に進む二段構えです。Silver→Goldの順で取得するのが王道です（Oracle、2026年6月時点）。",
  },
  {
    q: "Java Goldの受験料と試験形式を教えてください。",
    a: "Oracle University（日本）によると、Java SE 11のGold（試験番号1Z0-816-JPN）は出題80問・試験時間180分・合格ライン63%の選択／複数選択式試験です。受験料は2024年9月の価格改定により41,773円（税込）です（Oracle、2026年6月時点）。なお現在はJava SE 17の認定が最新シリーズで、SE 11も引き続き受験可能な状況が続いています。最新の試験番号・料金は必ずOracle公式とPearson VUEでご確認ください。",
  },
  {
    q: "Java Goldに有効期限はありますか？",
    a: "ありません。Oracle認定Javaプログラマの認定資格に有効期限はなく、一度取得すれば失効しません。クラウド系ベンダー資格の多くが2〜3年で更新を要するのに対し、更新の手間や費用がかからない点は特徴です（Oracle、2026年6月時点）。",
  },
  {
    q: "Java Goldの合格率はどのくらいですか？",
    a: "Oracleは合格率を公表していません。当サイトでは創作した数値を載せず、非公表である事実をそのままお伝えします。合格ラインは63%と公開されており、Silverより応用領域が広く難度が高い試験です。実務経験者でも相応の対策が必要とされます（Oracle、2026年6月時点）。",
  },
  {
    q: "SilverとGoldはどちらを取るべきですか？",
    a: "現在地と目的で決めます。Java基礎を体系化したい人はSilverから。すでにJavaで一定の開発経験があり、中級以上の実装力を示したい人はGoldが適しています。GoldはSilverの認定が前提条件のため、いずれにせよSilver→Goldの順で進みます。Silver側は当サイトのSilverガイドも参照してください。",
  },
];

const overviewTable = [
  ["主催", "日本オラクル（Oracle University）"],
  ["認定名", "Oracle認定Javaプログラマ Gold（OCJP Gold SE）"],
  ["レベル", "Gold（中上級／独力での実装力の証明）"],
  ["試験番号の例", "Java SE 11：1Z0-816-JPN（最新はSE 17シリーズ）"],
  ["前提資格", "Silver（SE 11／SE 8／SE 7のいずれか）の認定が必要"],
  ["受験料", "41,773円（税込／2024年9月改定後・2026年6月時点）"],
  ["試験時間", "180分（SE 11）"],
  ["出題", "80問・選択／複数選択式（SE 11）"],
  ["合格ライン", "63%（SE 11）"],
  ["合格率", "非公表（Oracleは公表していない）"],
  ["有効期限", "なし（一度取得すれば失効しない）"],
];

export default function OracleJavaGoldCertPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/cert/oracle-java-gold/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "資格で選ぶ転職", href: "/cert/" },
          { name: "Oracle認定Javaプログラマ Gold" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Oracle認定Javaプログラマ Goldは転職に効くか｜中級Java実装力の証明【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | Java Gold（OCJP Gold SE）の転職価値を30代・40代向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          Oracle認定Javaプログラマ Gold（OCJP Gold SE）は、<strong>設計者の意図を理解して独力で機能を実装できる中上級者向けの資格</strong>です。本記事は「Java Goldを取れば転職で有利になるか」という疑問に対し、<strong>基礎（Silver）を超えた中級以上の実装力を示す</strong>という観点から、実務での評価、Silver前提・有効期限なしという特徴を公式情報とともに整理します。資格単体では年収は跳ねないという限界も正直にお伝えします。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "Oracle University 公式（oracle.com/jp/education/certification）",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：Java Goldは誰に効く資格か</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              Java Goldは<strong>「中級以上のJava実装力の証明」</strong>です。基礎を示すSilverの一段上で、すでにJavaで開発してきた経験者が<strong>応用領域まで含めて独力で実装できることを客観証明</strong>する用途で効きます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>Java開発経験のある30〜40代</strong>：中級以上の実装力を客観証明し、選考で加点される</li>
              <li>② <strong>Java基礎だけのミドル</strong>：難度が高くSilver前提のため、まずSilverで土台を固める</li>
              <li>③ <strong>Java主力の現場で上を目指す人</strong>：応用領域の理解の証明として効きやすい</li>
            </ul>
          </div>
        </section>

        {/* 試験概要 */}
        <section id="overview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">試験概要（受験料・形式・前提・有効期限）</h2>
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
            出典: Oracle University 公式（oracle.com/jp/education/certification、2026年6月時点）。表の試験形式はJava SE 11 Gold（1Z0-816-JPN・80問・180分・合格ライン63%）の値です。受験料は2024年9月の改定後で41,773円（税込）。GoldはSilverの認定が前提です。現在はJava SE 17が最新シリーズで、SE 11も受験可能な状況が続いています。合格率はOracleが公表しておらず、当サイトでは創作しません。有効期限はなく、一度取得すれば失効しません。最新の試験番号・料金はOracle公式とPearson VUEで必ずご確認ください。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">保有者の年収の考え方と注意点</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Java Gold保有者そのものの公的な平均年収統計はなく、当サイトでは<strong>断定的な年収額を提示しません</strong>。Javaは国内の業務システム・基幹系で広く使われる主要言語ですが、年収を決めるのは資格ではなく<strong>Java開発の実務経験と担う役割</strong>です。Goldは中級以上の実装力の証明と捉えるのが現実的です。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-3">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・Javaは国内で需要の大きい主要言語（<strong>実務・役割が年収の主因</strong>）</li>
              <li>・Goldは<strong>中級以上の実装力の証明</strong>として書類・面接で効く加点材</li>
              <li>・実態：<strong>年収はJava実務経験 × 資格の掛け算</strong>で決まる</li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            注記: 資格保有を理由とする年収アップを当サイトは保証しません。公的な水準感の目安として、国税庁「民間給与実態統計調査」の給与所得者平均461万円（令和6年分）も併せてご覧ください。年収はスキル・経験・役割で大きく変動します。
          </p>
        </section>

        {/* 評価される場面 */}
        <section id="scenes" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職で評価される具体場面</h2>
          <div className="space-y-3">
            {[
              { t: "中級以上のJava実装力の証明", d: "ジェネリクス・関数型・並行処理・モジュールなど応用領域まで理解していることを客観的に示せる。" },
              { t: "Java主力の開発・受託案件", d: "難度の高い実装を任される現場で、独力での機能実装力の裏づけとして効く。" },
              { t: "リーダー・設計寄りへの足がかり", d: "設計者の意図を理解して実装できる中上級者の素養が、上のポジションへの移行を後押しする。" },
              { t: "Silver保有者の上積み", d: "Silverで基礎を示した人が、その上にGoldを重ねて実装力の一段の証明にできる。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 活きるポジション */}
        <section id="jobs" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">活きるポジション</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Java Goldが土台として活きる代表的な進路です（一般的な整理。具体的な求人件数はリアルタイムで変動するため、最新は各エージェントでご確認ください）。
          </p>
          <div className="space-y-3">
            {[
              { t: "Javaアプリケーションエンジニア（中級〜）", d: "業務システム・基幹系の中核実装を担う役割。Goldが中級以上の実装力の裏づけになる。" },
              { t: "Javaテックリード候補", d: "設計者の意図を理解して実装できる中上級者として、チームの技術リードへの足がかりになる。" },
              { t: "難度の高い受託・自社開発", d: "応用領域を含むJava実装が求められる現場で、実装力の証明として書類・面接で効く。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            Javaそのものの市場感は<Link href="/skill/java/" className="text-blue-600 hover:underline">Javaエンジニア転職ガイド</Link>を参考にしてください。
          </p>
        </section>

        {/* 活用戦略 */}
        <section id="position" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">中級証明としての活用戦略</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Java Goldは「中級以上の実装力を示す資格」です。基礎を示すSilverとは狙いが異なり、Silver→Goldの段階で使い分けるのがコツです。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">観点</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">Silver（基礎の体系証明）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">Gold（中級以上の実装力）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["主な対象", "Java基礎を体系化したい人", "一定の開発経験がある中堅"],
                  ["狙い", "文法・OOPの体系的理解の証明", "独力での機能実装力の証明"],
                  ["効き方", "書類通過・基礎スキルの裏づけ", "中級以上の実装力のアピール"],
                  ["前提資格", "なし", "Silverの認定が必要"],
                  ["難度", "基礎〜初級", "中上級（応用領域が広い）"],
                ].map(([k, a, b], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{k}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{a}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            活用戦略は3つに整理できます。第一に<strong>中級以上の実装力の証明</strong>。応用領域まで含めた理解を客観的に示し、難度の高い案件への適性をアピールできます。第二に<strong>リーダー・設計寄りへの足がかり</strong>。設計者の意図を理解して実装できる中上級者の素養を示せます。第三に<strong>Silverからの上積み</strong>。Silverで基礎、Goldで実装力という一貫したキャリアストーリーを作れます。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            正直なデメリットも押さえておきましょう。Goldは<strong>Silver前提で難度が高く、学習コストが大きい</strong>資格です。効果が出るのは「Java実務 × 資格」が成立したときで、実務がないと取得後も活かしきれません。また受験料が約4万円（税込）と高めです。逆に言えば、Javaで開発してきた30〜40代が中級以上の実装力を客観的に示したい場合には、明確な裏づけになる資格です。基礎が不安なら、まず<Link href="/cert/oracle-java-silver/" className="text-blue-600 hover:underline">Silver</Link>から進みましょう。
          </p>
        </section>

        {/* 30-40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の価値＝実装力の上積み証明</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              Java Goldは、30〜40代の経験者にとって<strong>「Javaで開発してきた実装力を、中級以上として客観的に裏づける装置」</strong>として効きます。基礎を示すSilverの一段上で、ジェネリクス・並行処理・モジュールなど応用領域まで理解していることを示せます。設計者の意図を理解して独力で実装できる中上級者という位置づけは、難度の高い案件やリーダー候補で評価されやすい強みです。
            </p>
            <p>
              一方で過度な期待は禁物です。Goldを取っても、それ単体で年収が跳ねるわけではありません。価値が出るのは<strong>「実務経験 × 資格」の掛け算</strong>のとき。Javaの開発実績と組み合わせて初めて、実装力の信頼性という形で結実します。難度が高くSilverが前提のため、Silver→Goldの順で計画的に進むのが現実的です。
            </p>
            <p>
              年代別の市場感は<Link href="/age/30s/" className="text-blue-600 hover:underline">30代エンジニアの転職</Link>・<Link href="/age/40s/" className="text-blue-600 hover:underline">40代エンジニアの転職</Link>、職務経歴書の作り方は<Link href="/knowledge/resume/" className="text-blue-600 hover:underline">エンジニアの職務経歴書</Link>も合わせてご覧ください。
            </p>
          </div>
        </section>

        {/* 取得3ステップ */}
        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">取得3ステップ／次に狙う資格</h2>
          <div className="space-y-3 mb-6">
            {[
              { n: "STEP 1", t: "前提のSilverを取得する", d: "GoldはSilverの認定が前提条件。まずSilverで基礎の体系的理解を固める。" },
              { n: "STEP 2", t: "応用領域を深掘りする", d: "ジェネリクス・関数型・並行処理・モジュール・例外設計など、Goldで広がる応用領域を重点的に学ぶ。" },
              { n: "STEP 3", t: "合格→実務とフレームワークへ", d: "合格後はJava実務に活かしつつ、SpringなどフレームワークやSQL・設計力へ守備範囲を広げる。" },
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
            前段の基礎は<Link href="/cert/oracle-java-silver/" className="text-blue-600 hover:underline">Oracle認定Javaプログラマ Silver</Link>、上流・設計の素養を広げるなら国家資格の<Link href="/cert/applied-info/" className="text-blue-600 hover:underline">応用情報技術者</Link>との組み合わせも有効です。資格全体の位置づけは<Link href="/cert/" className="text-blue-600 hover:underline">資格で選ぶ転職ハブ</Link>で確認できます。
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
          <h2 className="text-xl font-bold mb-3">Java案件への転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            Java Goldを活かせる中級以上の開発求人を、IT特化型エージェントであなたの市場価値とともに確認しましょう。
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
              { name: "Javaエンジニア転職ガイド", href: "/skill/java/" },
              { name: "Oracle認定Javaプログラマ Silver", href: "/cert/oracle-java-silver/" },
              { name: "応用情報技術者の転職価値", href: "/cert/applied-info/" },
              { name: "基本情報技術者の転職価値", href: "/cert/basic-info/" },
              { name: "エンジニアの職務経歴書", href: "/knowledge/resume/" },
              { name: "資格で選ぶ転職ハブ", href: "/cert/" },
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
