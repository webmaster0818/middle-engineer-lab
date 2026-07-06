import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "Oracle認定Javaプログラマ Silverは転職に効くか｜Java実務の体系証明【2026年】";
const PAGE_DESC =
  "Oracle認定JavaプログラマSilver（OCJP Silver SE）を、30代・40代向けに解説。受験料・試験形式・有効期限なし、Java実務の体系的理解の証明としての価値、年収の考え方を公式情報をもとに限界も含めて整理します。";

export const metadata: Metadata = {
  alternates: { canonical: "/cert/oracle-java-silver/" },
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：Java Silverは誰に効く資格か" },
  { id: "overview", label: "試験概要（受験料・形式・有効期限）" },
  { id: "salary", label: "保有者の年収の考え方と注意点" },
  { id: "scenes", label: "転職で評価される具体場面" },
  { id: "jobs", label: "活きるポジション" },
  { id: "position", label: "体系証明としての活用戦略" },
  { id: "middle", label: "30代・40代の価値＝独学の体系化と土台証明" },
  { id: "steps", label: "取得3ステップ／次に狙う資格" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "Java Silverは40代の転職で意味がありますか？",
    a: "意味があります。Oracle認定Javaプログラマ Silver（OCJP Silver SE）は、Javaの文法・オブジェクト指向・例外処理など基本構文の体系的な理解を証明する資格です。すでにJavaの実務経験がある30〜40代にとっては、独学で身につけた知識の抜けを埋め、体系的に理解していることを客観的に示せます。ただしSilverは基礎レベルの位置づけのため、中級以上を示したい場合は上位のGoldが適しています。資格単体ではなく実務とセットで効く点が前提です。",
  },
  {
    q: "Java Silverの受験料と試験形式を教えてください。",
    a: "Oracle University（日本）によると、Java SE 11のSilver（試験番号1Z0-815-JPN）は出題80問・試験時間180分・合格ライン63%の選択式試験です。受験料は2024年9月の価格改定により41,773円（税込）です（Oracle、2026年6月時点）。なお現在はJava SE 17の認定が最新シリーズで、SE 11も引き続き受験可能な状況が続いています。最新の試験番号・料金は必ずOracle公式とPearson VUEでご確認ください。",
  },
  {
    q: "Java Silverに有効期限はありますか？",
    a: "ありません。Oracle認定Javaプログラマの認定資格に有効期限はなく、一度取得すれば失効しません。AWS・Cisco・Google CloudなどのITベンダー資格の多くが有効期限を持つのに対し、更新の手間や費用がかからない点は特徴です（Oracle、2026年6月時点）。",
  },
  {
    q: "Java Silverの合格率はどのくらいですか？",
    a: "Oracleは合格率を公表していません。当サイトでは創作した数値を載せず、非公表である事実をそのままお伝えします。合格ラインは63%と公開されており、出題80問・180分の選択式です。Javaの細かな文法・挙動を正確に問う設問が多く、実務経験者でも対策が必要とされます（Oracle、2026年6月時点）。",
  },
  {
    q: "SilverとGoldはどちらを取るべきですか？",
    a: "現在地と目的で決めます。Java実務がこれから／基礎を体系化したい人はSilverから。すでにJavaで一定の開発経験があり、中級以上の実装力を示したい人はGoldが適しています。GoldはSilverの認定が前提条件となるため、Silver→Goldの順で進むのが王道です。Gold側は当サイトのGoldガイドも参照してください。",
  },
  {
    q: "Java SilverとJava実務経験はどちらが評価されますか？",
    a: "中途採用では実務経験が優先されます。30〜40代の選考で最も見られるのはJavaでの開発実績・担当範囲であり、資格は必須要件でないことがほとんどです。ただしSilverは『独学の知識に抜けがない』『基礎を体系的に理解している』ことの客観証明になり、実務経験と組み合わせると説得力が増します。資格は実務を補強する位置づけと捉えるのが現実的です。",
  },
];

const overviewTable = [
  ["主催", "日本オラクル（Oracle University）"],
  ["認定名", "Oracle認定Javaプログラマ Silver（OCJP Silver SE）"],
  ["レベル", "Silver（基礎〜初級／体系的理解の証明）"],
  ["試験番号の例", "Java SE 11：1Z0-815-JPN（最新はSE 17シリーズ）"],
  ["前提資格", "なし"],
  ["受験料", "41,773円（税込／2024年9月改定後・2026年6月時点）"],
  ["試験時間", "180分（SE 11）"],
  ["出題", "80問・選択式（SE 11）"],
  ["合格ライン", "63%（SE 11）"],
  ["合格率", "非公表（Oracleは公表していない）"],
  ["有効期限", "なし（一度取得すれば失効しない）"],
];

export default function OracleJavaSilverCertPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/cert/oracle-java-silver/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "資格で選ぶ転職", href: "/cert/" },
          { name: "Oracle認定Javaプログラマ Silver" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Oracle認定Javaプログラマ Silverは転職に効くか｜Java実務の体系証明【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | Java Silver（OCJP Silver SE）の転職価値を30代・40代向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          Oracle認定Javaプログラマ Silver（OCJP Silver SE）は、Javaの<strong>文法・オブジェクト指向・例外処理といった基本構文の体系的な理解を証明する</strong>資格です。本記事は「Java Silverを取れば転職で有利になるか」という疑問に対し、<strong>独学で得た知識の抜けを埋め、体系的に理解していることを示す</strong>という観点から、実務での評価や有効期限なしという特徴を公式情報とともに整理します。資格単体では年収は跳ねないという限界も正直にお伝えします。
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
                <a href={`#${t.id}`} className="text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：Java Silverは誰に効く資格か</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              Java Silverは<strong>「Java基礎の体系証明」</strong>です。実務でJavaを書いてきた人が<strong>独学の抜けを埋め、基礎を体系的に理解していることを客観的に示す</strong>用途で効きます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>Java実務のある30〜40代</strong>：独学知識の抜けを補い、体系的理解の証明として加点される</li>
              <li>② <strong>Javaへ移行・再入門するミドル</strong>：基礎の土台づくりと学習の到達点の証明になる</li>
              <li>③ <strong>中級以上を示したい人</strong>：Silverで土台を作り、上位のGoldへ進む起点になる</li>
            </ul>
          </div>
        </section>

        {/* 試験概要 */}
        <section id="overview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">試験概要（受験料・形式・有効期限）</h2>
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
            出典: Oracle University 公式（oracle.com/jp/education/certification、2026年6月時点）。表の試験形式はJava SE 11 Silver（1Z0-815-JPN・80問・180分・合格ライン63%）の値です。受験料は2024年9月の改定後で41,773円（税込）。現在はJava SE 17が最新シリーズで、SE 11も受験可能な状況が続いています。合格率はOracleが公表しておらず、当サイトでは創作しません。有効期限はなく、一度取得すれば失効しません。最新の試験番号・料金はOracle公式とPearson VUEで必ずご確認ください。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">保有者の年収の考え方と注意点</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Java Silver保有者そのものの公的な平均年収統計はなく、当サイトでは<strong>断定的な年収額を提示しません</strong>。Javaは国内の業務システム・基幹系で広く使われる主要言語ですが、年収を決めるのは資格ではなく<strong>Java開発の実務経験と担う役割</strong>です。Silverはあくまで基礎の体系証明と捉えるのが現実的です。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-3">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・Javaは国内で需要の大きい主要言語（<strong>実務・役割が年収の主因</strong>）</li>
              <li>・Silverは<strong>基礎の体系的理解の証明</strong>として書類通過に効く加点材</li>
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
              { t: "独学Javaの体系的理解の証明", d: "現場で書いてきたJavaの知識に抜けがないこと、文法・OOPを体系的に理解していることを客観的に示せる。" },
              { t: "Java案件・SES／受託への応募", d: "Javaを主力とする業務システム・受託開発で、基礎スキルの裏づけとして書類段階で効く。" },
              { t: "他言語からJavaへの転向", d: "別言語の経験者がJavaへ移る際に、基礎を一通り押さえた到達点として示せる。" },
              { t: "上位資格・上流への布石", d: "Silverで土台を作り、上位のGoldで中級以上の実装力を示す段階的なキャリア設計に使える。" },
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
            Java Silverが土台として活きる代表的な進路です（一般的な整理。具体的な求人件数はリアルタイムで変動するため、最新は各エージェントでご確認ください）。
          </p>
          <div className="space-y-3">
            {[
              { t: "Javaアプリケーションエンジニア", d: "業務システム・基幹系のJava開発を担う役割。Silverが基礎スキルの裏づけになる。" },
              { t: "SES・受託開発のJava案件", d: "Javaを主力とする現場で、基礎を体系的に理解している証明として書類段階で効く。" },
              { t: "他言語からの転向組", d: "別言語経験者がJavaへ移る際の、基礎到達点の客観証明になる。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            Javaそのものの市場感は<Link href="/skill/java/" className="text-petrol hover:underline">Javaエンジニア転職ガイド</Link>を参考にしてください。
          </p>
        </section>

        {/* 活用戦略 */}
        <section id="position" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">体系証明としての活用戦略</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Java Silverは「基礎の体系証明資格」です。中級以上を問う上位のGoldとは狙いが異なり、段階的に使い分けるのがコツです。
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
                  ["有効期限", "なし", "なし"],
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
            活用戦略は3つに整理できます。第一に<strong>独学の体系化</strong>。現場で覚えたJavaの知識の抜けを試験対策で埋め、基礎を整理できます。第二に<strong>書類段階の裏づけ</strong>。Javaを扱える基礎スキルの客観証明として、選考の通過に寄与します。第三に<strong>上位資格への布石</strong>。SilverはGoldの前提資格でもあり、Silver→Goldで中級以上の実装力まで示せます。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            正直なデメリットも押さえておきましょう。Silverは<strong>基礎レベルの位置づけのため、これ単体で高い実装力まで保証する資格ではありません</strong>。効果が出るのは「Java実務 × 資格」が成立したときです。また受験料が約4万円（税込）と国家資格に比べ高めで、費用対効果は目的次第です。逆に言えば、独学のJava知識を体系化し基礎を固めたい30〜40代にとっては、明確な到達点になる資格です。中級以上を示したいなら<Link href="/cert/oracle-java-gold/" className="text-petrol hover:underline">Gold</Link>へ進みましょう。
          </p>
        </section>

        {/* 30-40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の価値＝独学の体系化と土台証明</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              Java Silverは、30〜40代の経験者にとって<strong>「現場で覚えた我流のJavaを、体系的な知識として整える装置」</strong>として効きます。実務では使う範囲しか触れないため知識に偏りが生まれがちですが、Silverの学習で文法・OOP・例外処理を一通り押さえ直すことで、基礎の抜けを補えます。その到達点を客観的に示せるのが資格の価値です。
            </p>
            <p>
              一方で過度な期待は禁物です。Silverを取っても、それ単体で年収が跳ねるわけではありません。価値が出るのは<strong>「実務経験 × 資格」の掛け算</strong>のとき。Javaの開発実績と組み合わせて初めて、基礎の信頼性という形で評価されます。中級以上の実装力まで示したい場合は、Silverを起点にGoldへ進むのが王道です。
            </p>
            <p>
              年代別の市場感は<Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>、職務経歴書の作り方は<Link href="/knowledge/resume/" className="text-petrol hover:underline">エンジニアの職務経歴書</Link>も合わせてご覧ください。
            </p>
          </div>
        </section>

        {/* 取得3ステップ */}
        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">取得3ステップ／次に狙う資格</h2>
          <div className="space-y-3 mb-6">
            {[
              { n: "STEP 1", t: "文法・OOPを体系的に学び直す", d: "変数・制御構文・クラス・継承・例外処理など、基礎を網羅的に整理する。実務経験者は抜けの確認が中心。" },
              { n: "STEP 2", t: "細かな挙動を問題演習で固める", d: "Java特有の文法・コンパイルエラー・実行結果を問う設問に慣れる。合格ライン63%を超える精度を作る。" },
              { n: "STEP 3", t: "合格→Goldで中級へ", d: "合格後はJava実務に活かしつつ、中級以上の実装力を示すならSilverを前提とする上位のGoldに挑戦する。" },
            ].map((x, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="text-xs font-bold text-petrol shrink-0 w-14 pt-1">{x.n}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                  <p className="text-sm text-slate-600">{x.d}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            上位を狙うなら<Link href="/cert/oracle-java-gold/" className="text-petrol hover:underline">Oracle認定Javaプログラマ Gold</Link>、上流・設計の素養を広げるなら国家資格の<Link href="/cert/applied-info/" className="text-petrol hover:underline">応用情報技術者</Link>との組み合わせも有効です。資格全体の位置づけは<Link href="/cert/" className="text-petrol hover:underline">資格で選ぶ転職ハブ</Link>で確認できます。
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
            Java Silverを活かせる開発求人を、IT特化型エージェントであなたの市場価値とともに確認しましょう。
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
              { name: "Javaエンジニア転職ガイド", href: "/skill/java/" },
              { name: "Oracle認定Javaプログラマ Gold", href: "/cert/oracle-java-gold/" },
              { name: "応用情報技術者の転職価値", href: "/cert/applied-info/" },
              { name: "基本情報技術者の転職価値", href: "/cert/basic-info/" },
              { name: "エンジニアの職務経歴書", href: "/knowledge/resume/" },
              { name: "資格で選ぶ転職ハブ", href: "/cert/" },
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
