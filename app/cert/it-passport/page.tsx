import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "ITパスポートは転職に効くか｜基礎の入口資格と限界を正直に解説【2026年】";
const PAGE_DESC =
  "IPAの国家試験・ITパスポート（iパス）を、ITの基礎証明という観点から30代・40代向けに正直に解説。受験料・合格率（IPA公表値）・通年CBTを整理し、エンジニア転職での加点は限定的という現実と、非IT職・管理職に効く場面を誠実にまとめます。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：ITパスポートは誰に効くか" },
  { id: "overview", label: "試験概要（受験料・形式・合格率）" },
  { id: "limit", label: "エンジニア転職での加点は限定的という現実" },
  { id: "scenes", label: "それでも効く具体場面（非IT職・管理職）" },
  { id: "next", label: "ITエンジニアを目指すなら次に何を狙うか" },
  { id: "middle", label: "30代・40代の価値＝基礎の共通言語" },
  { id: "steps", label: "取得3ステップ／上位資格への道" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "ITパスポートは40代のエンジニア転職で有利になりますか？",
    a: "正直に言うと、エンジニア職の転職での加点は限定的です。ITパスポートはIPAの国家試験の中で最も基礎レベル（スキルレベル1）に位置づけられ、ITの基礎用語・経営・セキュリティの常識を広く浅く問う試験です。実務経験のあるエンジニアにとっては内容が基礎的すぎるため、技術力の証明にはなりにくいのが実態です。エンジニアとしての評価を上げたいなら、応用情報技術者や各専門資格を狙うほうが費用対効果は高くなります。",
  },
  {
    q: "ITパスポートの合格率はどのくらいですか？",
    a: "IPA公表（令和7年度）では年間の合格率は48.6%です（応募者307,266人・合格者132,012人）。通年CBT方式で、47都道府県すべてに会場があり、都合に合わせて受験日を選べます。出題は100問・120分の多肢選択（四肢択一）で、基礎を押さえれば合格しやすい入口資格です（IPA、調査時点2026年6月）。",
  },
  {
    q: "ITパスポートはどんな人に向いていますか？",
    a: "非IT職からITを扱う部署・職種に異動する人、ITベンダーの営業・事務・管理部門、ITを発注・活用する立場の管理職、これからエンジニアを目指す入口に立つ人などに向いています。『ITの共通言語を身につけ、エンジニアや取引先と話が通じるようにする』という目的なら有効です。逆に、すでにエンジニアとして実務がある人の技術証明には向きません。",
  },
  {
    q: "ITパスポートの受験料はいくらですか？",
    a: "7,500円（消費税込）です。情報処理技術者試験は2024年4月に受験手数料が改定され、現在は全区分で7,500円となっています。通年CBTのため、申込みから受験までの自由度が高いのも特徴です（IPA、調査時点2026年6月）。",
  },
  {
    q: "ITパスポートと基本情報技術者はどちらを取るべきですか？",
    a: "目的次第です。ITの基礎常識を広く身につけたい非IT職・管理職ならITパスポート、エンジニアとして手を動かす素養（アルゴリズム・プログラミング・データ構造など）を示したいなら基本情報技術者です。エンジニア転職を本気で目指すなら、ITパスポートで止まらず基本情報、さらに応用情報へとステップアップするのが王道です。",
  },
  {
    q: "ITパスポートに有効期限はありますか？",
    a: "ありません。国家資格として合格は生涯有効で、更新や維持費は不要です。ただし出題範囲はAI・ビッグデータ・IoTなど最新動向も含むため、合格後も知識のアップデートは続けることが望ましいです。",
  },
];

const overviewTable = [
  ["主催", "IPA（独立行政法人 情報処理推進機構）"],
  ["区分・レベル", "情報処理技術者試験（スキルレベル1・最も基礎）"],
  ["受験料", "7,500円（消費税込）"],
  ["試験方式", "CBT方式・通年実施（47都道府県に会場）"],
  ["構成", "多肢選択式（四肢択一）100問・120分"],
  ["合格基準", "総合評価点600点以上かつ分野別基準を満たす"],
  ["合格率", "令和7年度 48.6%（IPA公表）"],
  ["有効期限", "なし（国家資格・普遍的）"],
];

export default function ITPassportCertPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/cert/it-passport/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "資格で選ぶ転職", href: "/cert/" },
          { name: "ITパスポート" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          ITパスポートは転職に効くか｜基礎の入口資格と限界を正直に解説【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | IPA国家試験・iパスの転職価値を30代・40代向けに正直に解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          ITパスポート試験（iパス）は、IPAが主催する情報処理技術者試験の中で<strong>最も基礎レベル（スキルレベル1）の国家試験</strong>で、ITの基礎用語・経営・セキュリティの常識を広く問う、社会人の「ITリテラシーの入口」です。本記事は「ITパスポートを取れば転職で有利になるか」という疑問に、誠実に答えます。結論を先に言うと、<strong>エンジニア職の転職での加点は限定的</strong>です。一方で、非IT職・管理職・これからIT分野に入る人には意味のある資格でもあります。その両面を正直に整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "IPA 公式（ipa.go.jp／iパス年間応募者数・試験区分ページ）",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：ITパスポートは誰に効くか</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              ITパスポートは<strong>「ITの共通言語を身につける入口資格」</strong>です。エンジニアの技術証明には向きませんが、<strong>ITを扱う立場・発注する立場の人がITリテラシーを示す</strong>のには有効です。誰に効くかをはっきり分けると次のとおりです。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>非IT職・管理職</strong>：ITを活用・発注する立場の基礎証明として効く</li>
              <li>② <strong>これからエンジニアを目指す人</strong>：入口の足がかり。ただし基本情報→応用情報へ進むのが本道</li>
              <li>③ <strong>実務経験のあるエンジニア</strong>：内容が基礎的すぎて加点は限定的。上位資格を狙うべき</li>
            </ul>
          </div>
        </section>

        {/* 試験概要 */}
        <section id="overview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">試験概要（受験料・形式・合格率）</h2>
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
            出典: IPA 公式（ipa.go.jp、調査時点2026年6月）。合格率は令和7年度48.6%（IPA「令和7年度 iパス年間応募者数等」、応募者307,266人・合格者132,012人）。受験料は全試験区分共通で7,500円（消費税込）。通年CBTで47都道府県に会場があり、受験のハードルが低いのが特徴です。有効期限はなく、合格すれば資格は生涯有効です。
          </p>
        </section>

        {/* 限界 */}
        <section id="limit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア転職での加点は限定的という現実</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            まず誠実にお伝えすべき点です。30〜40代のエンジニア転職において、ITパスポート単体での加点はあまり期待できません。理由は明確で、<strong>この試験はITの基礎用語・常識を広く浅く問うレベル1の入口資格</strong>であり、実務経験のあるエンジニアにとっては「すでに知っていて当然」の範囲が中心だからです。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-3">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・技術力（設計・実装・運用）の証明にはならない</li>
              <li>・中途のエンジニア採用で最重視されるのは実務経験・実績</li>
              <li>・エンジニア評価を上げたいなら、より上位の資格・専門資格が効率的</li>
            </ul>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            ですから、すでにエンジニアとして手を動かしている人が「転職を有利にするため」だけにITパスポートを取るのは、費用対効果の面でおすすめしません。エンジニアとしての評価を上げたいなら、まず<Link href="/cert/basic-info/" className="text-blue-600 hover:underline">基本情報技術者</Link>、さらに<Link href="/cert/applied-info/" className="text-blue-600 hover:underline">応用情報技術者</Link>へ進むのが本道です。資格全体の位置づけは<Link href="/cert/" className="text-blue-600 hover:underline">エンジニアの資格比較</Link>でご確認ください。
          </p>
        </section>

        {/* それでも効く場面 */}
        <section id="scenes" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">それでも効く具体場面（非IT職・管理職）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            一方で、ITパスポートが意味を持つ場面もはっきりあります。「エンジニアの技術証明」ではなく「ITを扱う立場のリテラシー証明」という文脈です。
          </p>
          <div className="space-y-3">
            {[
              { t: "非IT職からIT関連部署への異動・転職", d: "IT用語や仕組みの基礎を身につけ、エンジニアや取引先と会話が成立する状態を示せる。" },
              { t: "ITを発注・活用する管理職", d: "DX推進や情報システムの意思決定に関わる立場で、基礎的なIT理解の客観証明になる。" },
              { t: "ITベンダーの営業・事務・管理部門", d: "技術職でなくても、自社サービスの前提知識やセキュリティ常識を備えていることを示せる。" },
              { t: "これからITエンジニアを目指す最初の一歩", d: "学習の入口として全体像をつかむのに役立つ。ただしここで止まらず上位資格へ進むのが前提。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            異業種からIT分野への挑戦を考えている方は<Link href="/knowledge/inexperienced-30s/" className="text-blue-600 hover:underline">30代未経験からのIT転職</Link>、学び直しの全体像は<Link href="/knowledge/reskilling/" className="text-blue-600 hover:underline">学び直し・リスキリング</Link>も参考にしてください。
          </p>
        </section>

        {/* 次に狙う */}
        <section id="next" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ITエンジニアを目指すなら次に何を狙うか</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            ITパスポートを入口にエンジニアを目指すなら、ここで止まらないことが重要です。レベル1のITパスポートから、実務寄りの上位資格へステップアップしていくのが、転職市場で評価されるルートです。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">段階</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">資格</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">狙い</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["レベル1", "ITパスポート", "ITの共通言語・基礎常識の入口"],
                  ["レベル2", "基本情報技術者", "実装・アルゴリズムなど手を動かす素養の証明"],
                  ["レベル3", "応用情報技術者", "上流・設計へ進む経験者の加点資格"],
                  ["レベル4", "高度試験（ES・ST・SM等）", "専門領域・戦略・運用管理の高度な専門証明"],
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
          <p className="text-sm text-slate-600 leading-relaxed">
            次の一歩は<Link href="/cert/basic-info/" className="text-blue-600 hover:underline">基本情報技術者</Link>です。そこから<Link href="/cert/applied-info/" className="text-blue-600 hover:underline">応用情報技術者</Link>、さらに目的に応じて高度試験へ進みます。クラウドやインフラ志向なら<Link href="/cert/aws/" className="text-blue-600 hover:underline">AWS認定</Link>・<Link href="/cert/ccna/" className="text-blue-600 hover:underline">CCNA</Link>などベンダー資格との組み合わせも有効です。
          </p>
        </section>

        {/* 30-40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の価値＝基礎の共通言語</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              ITパスポートの30〜40代における価値は、<strong>「IT職に転職するための武器」ではなく「ITを扱う立場としての共通言語」</strong>にあります。すでにエンジニアの人にとっては基礎的すぎますが、管理職・非IT職・発注側の立場であれば、エンジニアや取引先と話が通じる土台を客観的に示せます。
            </p>
            <p>
              逆に、エンジニアとしてのキャリアを真剣に伸ばしたい30〜40代であれば、ITパスポートは<strong>通過点に過ぎない</strong>と割り切るべきです。基本情報、応用情報、そして高度試験や専門資格へと進むことで初めて、転職市場で評価される「実務 × 資格」のストーリーが完成します。資格に時間を使うなら、自分の立場と目的に合った段階を選ぶことが何より大切です。
            </p>
            <p>
              年代別の市場感は<Link href="/age/30s/" className="text-blue-600 hover:underline">30代エンジニアの転職</Link>・<Link href="/age/40s/" className="text-blue-600 hover:underline">40代エンジニアの転職</Link>、職務経歴書の作り方は<Link href="/knowledge/resume/" className="text-blue-600 hover:underline">エンジニアの職務経歴書</Link>も合わせてご覧ください。
            </p>
          </div>
        </section>

        {/* 取得3ステップ */}
        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">取得3ステップ／上位資格への道</h2>
          <div className="space-y-3 mb-6">
            {[
              { n: "STEP 1", t: "出題3分野を過去問で網羅", d: "ストラテジ系・マネジメント系・テクノロジ系を、公式過去問で繰り返し演習する。" },
              { n: "STEP 2", t: "通年CBTで都合に合わせ受験", d: "47都道府県の会場から日時を選んで申込み。短期集中で合格を狙いやすい。" },
              { n: "STEP 3", t: "止まらず上位資格へ", d: "エンジニア志望なら基本情報→応用情報へ。立場により高度試験・専門資格へ展開する。" },
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
            次に狙うべきは<Link href="/cert/basic-info/" className="text-blue-600 hover:underline">基本情報技術者</Link>、その先は<Link href="/cert/applied-info/" className="text-blue-600 hover:underline">応用情報技術者</Link>です。資格全体の比較は<Link href="/cert/" className="text-blue-600 hover:underline">エンジニアの資格比較</Link>、学び直しの進め方は<Link href="/knowledge/reskilling/" className="text-blue-600 hover:underline">学び直し・リスキリング</Link>をご覧ください。
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
          <h2 className="text-xl font-bold mb-3">IT・エンジニア転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            あなたの経験と目的に合ったキャリアの方向性を、IT特化型エージェントで市場価値とともに確認しましょう。
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
              { name: "基本情報技術者の転職価値", href: "/cert/basic-info/" },
              { name: "応用情報技術者の転職価値", href: "/cert/applied-info/" },
              { name: "エンジニアの資格比較", href: "/cert/" },
              { name: "30代未経験からのIT転職", href: "/knowledge/inexperienced-30s/" },
              { name: "学び直し・リスキリング", href: "/knowledge/reskilling/" },
              { name: "エンジニアの職務経歴書", href: "/knowledge/resume/" },
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
