import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "情報セキュリティマネジメント試験は転職に効くか｜利用者側の管理者向けに正直解説【2026年】";
const PAGE_DESC =
  "IPAの国家試験・情報セキュリティマネジメント試験（SG）を、利用部門のセキュリティ管理者という観点から30代・40代向けに正直に解説。受験料・合格率（IPA公表値）・通年CBTを整理し、専門エンジニアの加点との違いと効く場面を誠実にまとめます。";

export const metadata: Metadata = {
  alternates: { canonical: "/cert/info-sec-management/" },
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：SGは誰に効く資格か" },
  { id: "overview", label: "試験概要（受験料・形式・合格率）" },
  { id: "vs-specialist", label: "支援士（守る側）との性格の違い" },
  { id: "scenes", label: "効く具体場面（利用部門の管理者）" },
  { id: "limit", label: "専門エンジニア転職での加点は限定的" },
  { id: "next", label: "セキュリティ専門職を目指すなら次に狙う資格" },
  { id: "middle", label: "30代・40代の価値＝現場の管理者として効く" },
  { id: "steps", label: "取得3ステップ／上位への道" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "情報セキュリティマネジメント試験は40代の転職で意味がありますか？",
    a: "立場によります。SGはIPAの基礎レベル（スキルレベル2）の国家試験で、情報システムを『利用する側』の部門で情報セキュリティリーダーを務める人を対象にしています。部門のセキュリティ管理・社内ルールの運用・委託先管理などを担う管理職・非専門職には意味があります。一方、セキュリティの専門エンジニアとして守る側を志すなら、より上位の情報処理安全確保支援士などを狙うべきで、SG単体での加点は限定的です。",
  },
  {
    q: "SGの合格率はどのくらいですか？",
    a: "IPAの統計では合格率は高めで、近年は7割前後で推移しています（例として令和5年度72.6%、令和6年度69.0%。2025年4〜7月の月次も概ね70%台）。通年CBT方式で、科目A・科目Bあわせて60問・120分の多肢選択式です。基礎レベルのため、入口資格としては取りやすい部類です（IPA等、調査時点2026年6月）。",
  },
  {
    q: "SGと情報処理安全確保支援士は何が違いますか？",
    a: "対象とする立場が違います。SGは情報システムを『利用する側』の部門でセキュリティを管理・統制する人（利用者側のリーダー）向けの基礎資格です。一方、情報処理安全確保支援士はセキュリティを『守る側』として設計・対策・監査を担う専門職向けの高度資格です。利用部門の管理者ならSG、専門エンジニアとして守る側に立つなら支援士、という棲み分けになります。",
  },
  {
    q: "SGの受験料はいくらですか？",
    a: "7,500円（消費税込）です。情報処理技術者試験は2024年4月に受験手数料が改定され、現在は全区分で7,500円となっています。SGは通年CBT方式のため、申込みから受験までの自由度が高いのも特徴です（IPA、調査時点2026年6月）。",
  },
  {
    q: "セキュリティエンジニアを目指すならSGで十分ですか？",
    a: "十分とは言えません。SGはあくまで利用者側の管理者向けの基礎資格です。守る側の専門エンジニアを志すなら、応用情報技術者で土台を固めたうえで、情報処理安全確保支援士（登録セキスペ）など上位の資格・専門スキルへ進むのが本道です。SGはその前段の基礎固めや、非専門職がセキュリティ素養を示す用途で活きます。",
  },
  {
    q: "SGに有効期限はありますか？",
    a: "ありません。国家試験として合格は生涯有効で、更新や維持費は不要です（登録制度のある情報処理安全確保支援士とは異なります）。ただしセキュリティ分野は脅威も対策も変化が速いため、合格後も知識の更新は続けることが望ましいです。",
  },
];

const overviewTable = [
  ["主催", "IPA（独立行政法人 情報処理推進機構）"],
  ["区分・レベル", "情報処理技術者試験（スキルレベル2・基礎）"],
  ["対象者像", "情報システムの利用部門の情報セキュリティリーダー"],
  ["受験料", "7,500円（消費税込）"],
  ["試験方式", "CBT方式・通年実施"],
  ["構成", "科目A＋科目B（多肢選択式）合計60問・120分"],
  ["合格率", "近年7割前後（令和5年度72.6%・令和6年度69.0% 等）"],
  ["有効期限", "なし（国家資格・普遍的）"],
];

export default function InfoSecManagementCertPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/cert/info-sec-management/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "資格で選ぶ転職", href: "/cert/" },
          { name: "情報セキュリティマネジメント試験" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          情報セキュリティマネジメント試験は転職に効くか｜利用者側の管理者向けに正直解説【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | IPA国家試験・SGの転職価値を30代・40代向けに正直に解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          情報セキュリティマネジメント試験（SG）は、IPAが主催する<strong>基礎レベル（スキルレベル2）の国家試験</strong>で、情報システムを「利用する側」の部門でセキュリティを管理・統制するリーダーを対象とした試験です。本記事は「SGを取れば転職で有利になるか」という疑問に誠実に答えます。結論を先に言うと、<strong>SGは『守る側の専門エンジニア』ではなく『利用部門のセキュリティ管理者』向けの資格</strong>であり、立場によって価値が大きく変わります。その性格を正確に整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "IPA 公式（ipa.go.jp／試験区分・統計ページ）",
            "TAC 等メディアの合格率集計（参考値）",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：SGは誰に効く資格か</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              情報セキュリティマネジメント試験は<strong>「利用部門のセキュリティ管理者向けの基礎資格」</strong>です。セキュリティエンジニア（守る側）の技術証明ではなく、<strong>ITを使う側の部門でルールを運用し、リスクを管理する立場</strong>に効きます。誰に効くかをはっきり分けると次のとおりです。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>利用部門のセキュリティリーダー・管理職</strong>：社内ルール運用・委託先管理の基礎証明として効く</li>
              <li>② <strong>非専門職でセキュリティ素養を示したい人</strong>：情報の安全な取扱いの理解を客観的に示せる</li>
              <li>③ <strong>守る側の専門エンジニア志望</strong>：基礎の前段としては有効だが、上位は支援士を狙うべき</li>
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
            出典: IPA 公式（ipa.go.jp、調査時点2026年6月）。受験料は全試験区分共通で7,500円（消費税込）。通年CBT方式で科目A・科目B合計60問・120分。合格率はIPA統計で令和5年度72.6%・令和6年度69.0%、2025年4〜7月の月次も概ね70%台で推移（メディア集計含む参考値）。基礎レベルのため取りやすい入口資格です。有効期限はなく、合格すれば資格は生涯有効です。
          </p>
        </section>

        {/* 支援士との違い */}
        <section id="vs-specialist" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">支援士（守る側）との性格の違い</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            SGを理解する最大のポイントは、<strong>「守る側」ではなく「使う側」の資格</strong>だということです。同じセキュリティでも、情報処理安全確保支援士とは対象とする立場が根本的に異なります。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">観点</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">情報セキュリティマネジメント（SG）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">情報処理安全確保支援士</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["立場", "情報システムを利用する側の管理者", "セキュリティを守る側の専門家"],
                  ["役割", "社内ルール運用・リスク管理・委託先管理", "設計・対策・監査・インシデント対応"],
                  ["レベル", "基礎（スキルレベル2）", "高度（スキルレベル4）"],
                  ["登録・維持", "なし（合格は生涯有効）", "登録制度・年次講習など維持要件あり"],
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
            つまりSGは、「自部門の情報を安全に扱い、ルールを守らせ、委託先を管理する」という<strong>マネジメント寄りの基礎資格</strong>です。守る側の技術者として転職市場で評価されたいなら、<Link href="/cert/security-specialist/" className="text-petrol hover:underline">情報処理安全確保支援士</Link>を目指すのが本道になります。
          </p>
        </section>

        {/* 効く場面 */}
        <section id="scenes" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">効く具体場面（利用部門の管理者）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            SGが意味を持つのは、「セキュリティを技術で守る」場面ではなく「組織でセキュリティを管理・運用する」場面です。代表的なケースを挙げます。
          </p>
          <div className="space-y-3">
            {[
              { t: "利用部門の情報セキュリティリーダー", d: "部門の情報資産管理・リスクアセスメント・教育訓練を担う立場で、基礎の体系を客観証明できる。" },
              { t: "委託先・外部サービスの管理担当", d: "委託先管理やクラウド利用時のセキュリティ確保など、利用者側の統制知識を示せる。" },
              { t: "情シス・総務でのルール運用担当", d: "社内規程の目的・内容を理解し、運用・周知する役割の裏づけになる。" },
              { t: "非専門職のセキュリティ素養の証明", d: "技術職でなくても、情報を安全に扱う基礎知識を備えていることを示せる。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            セキュリティ職全体の市場感は<Link href="/skill/security/" className="text-petrol hover:underline">セキュリティエンジニア転職ガイド</Link>も参考にしてください。
          </p>
        </section>

        {/* 限界 */}
        <section id="limit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">専門エンジニア転職での加点は限定的</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            誠実にお伝えすべき点です。セキュリティの専門エンジニア（守る側）として転職する場面では、SG単体での加点は限定的です。理由は、SGが<strong>利用者側の管理を扱う基礎レベルの資格</strong>であり、設計・対策・監査といった専門技術を証明するものではないからです。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-3">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・脆弱性診断・対策設計・監査などの専門スキルの証明にはならない</li>
              <li>・守る側の専門職採用で重視されるのは実務経験と高度資格</li>
              <li>・専門性を示すなら支援士など上位資格へ進むのが効率的</li>
            </ul>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            したがって、すでにセキュリティの専門性で勝負する30〜40代がSG取得だけを狙うのは費用対効果が高いとは言えません。専門職を目指すなら、<Link href="/cert/applied-info/" className="text-petrol hover:underline">応用情報技術者</Link>で土台を固め、<Link href="/cert/security-specialist/" className="text-petrol hover:underline">情報処理安全確保支援士</Link>へ進むのが本道です。資格全体の位置づけは<Link href="/cert/" className="text-petrol hover:underline">エンジニアの資格比較</Link>でご確認ください。
          </p>
        </section>

        {/* 次に狙う */}
        <section id="next" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">セキュリティ専門職を目指すなら次に狙う資格</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            SGを入口にセキュリティの専門職を目指すなら、ここで止まらず守る側の上位資格へステップアップするのが、転職市場で評価されるルートです。
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
                  ["レベル2", "情報セキュリティマネジメント（SG）", "利用者側のセキュリティ管理の基礎"],
                  ["レベル3", "応用情報技術者", "上流・設計へ進む経験者の加点・土台"],
                  ["レベル4", "情報処理安全確保支援士", "守る側の専門性を証明する高度資格"],
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
            次の一歩は<Link href="/cert/applied-info/" className="text-petrol hover:underline">応用情報技術者</Link>です。応用情報に合格すれば支援士試験の午前Ⅰが2年間免除されるため、<Link href="/cert/security-specialist/" className="text-petrol hover:underline">情報処理安全確保支援士</Link>への近道になります。
          </p>
        </section>

        {/* 30-40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の価値＝現場の管理者として効く</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              SGの30〜40代における価値は、<strong>「守る側の専門資格」ではなく「使う側のセキュリティ管理者としての基礎証明」</strong>にあります。情シス・総務・利用部門でルールを運用し、委託先やクラウド利用のリスクを管理する立場であれば、SGは実務と結びつく意味のある資格です。
            </p>
            <p>
              一方で、セキュリティの専門エンジニアとして守る側でキャリアを伸ばしたい30〜40代であれば、SGは<strong>前段の基礎固め</strong>と割り切るべきです。応用情報で土台を作り、情報処理安全確保支援士へ進むことで初めて、専門職として評価される「実務 × 高度資格」のストーリーが完成します。自分の立場が「管理する側」か「守る側」かを見極めて、進む方向を選ぶことが大切です。
            </p>
            <p>
              年代別の市場感は<Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>、職務経歴書の作り方は<Link href="/knowledge/resume/" className="text-petrol hover:underline">エンジニアの職務経歴書</Link>も合わせてご覧ください。
            </p>
          </div>
        </section>

        {/* 取得3ステップ */}
        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">取得3ステップ／上位への道</h2>
          <div className="space-y-3 mb-6">
            {[
              { n: "STEP 1", t: "科目A・科目Bを過去問で固める", d: "情報資産管理・リスクアセスメント・委託先管理など管理系の頻出を繰り返し演習する。" },
              { n: "STEP 2", t: "通年CBTで都合に合わせ受験", d: "随時実施のCBTで日時を選んで申込み。基礎レベルのため短期集中で合格を狙いやすい。" },
              { n: "STEP 3", t: "守る側へ進むなら上位資格へ", d: "専門職志望なら応用情報→情報処理安全確保支援士へ。管理職志望ならそのまま実務で活かす。" },
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
            次に狙うべきは<Link href="/cert/applied-info/" className="text-petrol hover:underline">応用情報技術者</Link>、守る側の専門職なら<Link href="/cert/security-specialist/" className="text-petrol hover:underline">情報処理安全確保支援士</Link>です。資格全体の比較は<Link href="/cert/" className="text-petrol hover:underline">エンジニアの資格比較</Link>、セキュリティ職の市場感は<Link href="/skill/security/" className="text-petrol hover:underline">セキュリティエンジニア転職ガイド</Link>をご覧ください。
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
          <h2 className="text-xl font-bold mb-3">セキュリティ・IT管理職への転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            あなたの立場（管理する側／守る側）に合ったキャリアの方向性を、IT特化型エージェントで市場価値とともに確認しましょう。
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
              { name: "情報処理安全確保支援士の転職価値", href: "/cert/security-specialist/" },
              { name: "応用情報技術者の転職価値", href: "/cert/applied-info/" },
              { name: "エンジニアの資格比較", href: "/cert/" },
              { name: "セキュリティエンジニア転職ガイド", href: "/skill/security/" },
              { name: "学び直し・リスキリング", href: "/knowledge/reskilling/" },
              { name: "エンジニアの職務経歴書", href: "/knowledge/resume/" },
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
