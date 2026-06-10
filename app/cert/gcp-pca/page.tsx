import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "Google Cloud Professional Cloud Architect（PCA）は転職に効くか｜GCP上流設計の証明【2026年】";
const PAGE_DESC =
  "Google CloudのProfessional Cloud Architect（PCA）を、30代・40代の経験者向けに解説。受験料200 USD・ケーススタディ形式・有効期限2年、上流設計／基盤アーキ職での評価、年収の考え方を公式情報をもとに限界も含めて整理します。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：PCAはどんな経験者に効くか" },
  { id: "overview", label: "試験概要（受験料・形式・有効期限）" },
  { id: "salary", label: "保有者の年収の考え方と注意点" },
  { id: "scenes", label: "転職で評価される具体場面" },
  { id: "jobs", label: "活きるポジション" },
  { id: "position", label: "上流資格としての活用戦略" },
  { id: "middle", label: "30代・40代の価値＝設計経験の客観証明" },
  { id: "steps", label: "取得3ステップ／次に狙う資格" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "PCAは40代の転職で意味がありますか？",
    a: "意味があります。Professional Cloud Architect（PCA）はGoogle Cloudのプロフェッショナル認定で、ビジネス要件をGCPのアーキテクチャに落とし込む上流設計力を問います。すでに基盤・移行・設計の実務がある30〜40代にとって、その設計経験を客観的に裏づける上位資格として機能します。ただし資格単体で評価が決まるわけではなく、GCPの実プロジェクト経験とセットで効く点が前提です。",
  },
  {
    q: "PCAの受験料と試験形式を教えてください。",
    a: "Google Cloud公式によると、PCAの受験料は200 USD（税別、2026年6月時点）です。試験時間は2時間、出題は50〜60問の選択式・複数選択式で、ケーススタディが2件（出題の20〜30%）含まれます。日本語に対応しています。前提資格はありませんが、業界経験3年以上・GCP経験1年以上が推奨されています（Google Cloud、2026年6月時点）。",
  },
  {
    q: "PCAに有効期限はありますか？",
    a: "あります。Google Cloudのプロフェッショナル認定は認定日から2年間有効です。更新は通常の試験を再受験するか、より短い更新試験（1時間・25問・100 USD、2026年6月時点）で行えます。更新は有効期限の60日前から可能です（Google Cloud、2026年6月時点）。",
  },
  {
    q: "PCAの合格率はどのくらいですか？",
    a: "Google Cloudは合格率を公表していません。当サイトでは創作した数値を載せず、非公表である事実をそのままお伝えします。ケーススタディを含む設計判断が問われる難度の高い試験で、対策は実機演習とケース読解が中心になります（Google Cloud、2026年6月時点）。",
  },
  {
    q: "ACEとPCAはどちらを取るべきですか？",
    a: "現在地と目的で決めます。GCPの実務がこれからの人はACE（アソシエイト）から。すでに設計・基盤の経験があり上流アーキテクトを目指す人はPCA（プロフェッショナル）が適しています。ACEで土台を作りPCAへ進むのが王道のステップアップです。ACE側は当サイトのACEガイドも参照してください。",
  },
  {
    q: "AWSやAzureのアーキ資格とどう使い分けますか？",
    a: "応募先で使われているクラウドに合わせるのが効率的です。GCPはデータ分析基盤・Web系・AI/ML領域で採用が多く、PCAはそうした環境の上流設計に効きます。AWSのSAP（Solutions Architect Professional）、AzureのAZ-305と並ぶ上位アーキ資格で、複数クラウドの設計力を示せばマルチクラウド対応の幅が広がります。いずれも実務経験とセットで効く点は共通です。",
  },
];

const overviewTable = [
  ["主催", "Google Cloud"],
  ["認定名", "Professional Cloud Architect（PCA）"],
  ["レベル", "Professional（プロフェッショナル・上位）"],
  ["前提資格", "なし（業界3年以上・GCP1年以上を推奨）"],
  ["受験料", "200 USD（税別／2026年6月時点）"],
  ["試験時間", "2時間"],
  ["出題", "50〜60問（選択式・複数選択式／ケーススタディ2件含む）"],
  ["対応言語", "英語・日本語"],
  ["合格率", "非公表（Google Cloudは公表していない）"],
  ["有効期限", "2年（更新試験100 USD・25問で更新可）"],
];

export default function GcpPcaCertPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/cert/gcp-pca/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "資格で選ぶ転職", href: "/cert/" },
          { name: "Google Cloud Professional Cloud Architect" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Google Cloud Professional Cloud Architect（PCA）は転職に効くか｜GCP上流設計の証明【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | Google Cloudのプロフェッショナル認定の転職価値を30代・40代向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          Professional Cloud Architect（PCA）は、Google Cloudの<strong>プロフェッショナル認定で、ビジネス要件をGCPのアーキテクチャへ落とし込む上流設計力を証明</strong>する試験です。本記事は「PCAを取れば転職で有利になるか」という疑問に対し、<strong>未経験の入口資格ではなく『経験者の上位資格』</strong>という観点から、上流・基盤アーキ職での評価、有効期限や更新の仕組みを公式情報とともに整理します。資格単体では年収は跳ねないという限界も正直にお伝えします。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "Google Cloud 公式（cloud.google.com/learn/certification）",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：PCAはどんな経験者に効くか</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              PCAは<strong>「クラウド設計経験者の上位資格」</strong>です。入口資格とは性格が異なり、すでに基盤・移行・設計の実務があるミドルが<strong>上流（GCPアーキテクチャ設計）の実力を客観証明</strong>する手段として最も効きます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>GCP・基盤設計の実務がある30〜40代</strong>：設計力を客観証明し、上流職で加点される</li>
              <li>② <strong>クラウド未経験のミドル</strong>：難度が高く入口には不向き。まずACEなど基礎から</li>
              <li>③ <strong>データ基盤・Web系・AI/ML現場志望</strong>：GCP採用が多く、設計力の証明が効きやすい</li>
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
            出典: Google Cloud 公式（cloud.google.com/learn/certification/cloud-architect、2026年6月時点）。受験料は200 USD（税別）、試験時間2時間、出題50〜60問でケーススタディを含みます。日本語に対応します。合格率・合格基準点はGoogle Cloudが公表しておらず、当サイトでは創作しません。有効期限は2年で、100 USD・25問・1時間の更新試験、または通常試験の再受験で更新できます。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">保有者の年収の考え方と注意点</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            PCA保有者そのものの公的な平均年収統計はなく、当サイトでは<strong>断定的な年収額を提示しません</strong>。一般にクラウドアーキテクト・基盤設計職は単価が高い領域とされますが、それは資格ではなく<strong>設計・移行の実務経験と役割</strong>によって決まります。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-3">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・クラウドアーキテクト職は高単価傾向（<strong>実務・役割が主因</strong>）</li>
              <li>・PCAは<strong>GCP設計力の客観的な裏づけ</strong>として機能する上位資格</li>
              <li>・実態：<strong>年収はGCPプロジェクト経験 × 資格の掛け算</strong>で決まる</li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            注記: 資格保有を理由とする年収アップを当サイトは保証しません。公的な水準感の目安として、国税庁「民間給与実態統計調査」の給与所得者平均461万円（令和6年分）も併せてご覧ください。クラウド単価はプロジェクト・役割で大きく変動します。
          </p>
        </section>

        {/* 評価される場面 */}
        <section id="scenes" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職で評価される具体場面</h2>
          <div className="space-y-3">
            {[
              { t: "GCPでのアーキテクチャ設計案件", d: "ビジネス要件をGCP構成へ翻訳する上流設計の素養を、プロフェッショナル認定が客観的に裏づける。" },
              { t: "クラウド移行・基盤刷新の上流", d: "移行設計やマルチサービス構成の判断力を、ケーススタディ合格という形で示せる。" },
              { t: "データ基盤・AI/ML案件", d: "GCPが強みを持つデータ分析・機械学習基盤の設計で、GCP設計力の証明として効く。" },
              { t: "提案・要件定義フェーズの担当", d: "ステークホルダーの要件を技術設計へ落とし込む、上流の役割への適性を示す。" },
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
            PCAが土台として活きる代表的な進路です（一般的な整理。具体的な求人件数はリアルタイムで変動するため、最新は各エージェントでご確認ください）。
          </p>
          <div className="space-y-3">
            {[
              { t: "クラウドアーキテクト（GCP）", d: "GCP上のアーキテクチャ設計を担う上流職。PCAがそのまま職務に直結する。" },
              { t: "データ基盤エンジニア／アーキテクト", d: "BigQueryなどGCPのデータ基盤設計に関わる職種で、設計力の裏づけになる。" },
              { t: "プリセールス・ITコンサル寄り", d: "要件をGCP設計へ翻訳する力が、提案・コンサル領域で評価される。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            GCPそのものの市場感は<Link href="/skill/gcp/" className="text-blue-600 hover:underline">GCPエンジニア転職ガイド</Link>、インフラ全般は<Link href="/skill/infrastructure/" className="text-blue-600 hover:underline">インフラエンジニア転職ガイド</Link>を参考にしてください。
          </p>
        </section>

        {/* 活用戦略 */}
        <section id="position" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">上流資格としての活用戦略</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            PCAは「入口資格」ではなく「上流の設計証明資格」です。アソシエイトのACEとは狙いが異なり、段階的に使い分けるのがコツです。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">観点</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">ACE（アソシエイト）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">PCA（プロフェッショナル）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["主な対象", "GCP実務これから〜運用担当", "設計・基盤経験のある中堅"],
                  ["狙い", "GCPを扱える実務の証明", "アーキテクチャ設計力の証明"],
                  ["効き方", "書類通過・運用職への入口", "上流（設計・アーキ）への配置"],
                  ["受験料の目安", "125 USD", "200 USD"],
                  ["有効期限", "3年", "2年"],
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
            活用戦略は3つに整理できます。第一に<strong>上流への足がかり</strong>。運用・構築の経験者が、設計・アーキテクトへ役割を広げたい局面で説得力を持ちます。第二に<strong>GCP強み領域での差別化</strong>。データ分析・AI/MLなどGCPが強い領域の設計案件で、専門性の裏づけになります。第三に<strong>マルチクラウド設計力の証明</strong>。AWSのSAPやAzureのAZ-305と並べることで、複数クラウドの設計力をアピールできます。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            正直なデメリットも押さえておきましょう。PCAはケーススタディを含む<strong>難度の高い試験で、実務がないと取得後も活かしきれません</strong>。効果が出るのは「GCPプロジェクト経験 × 資格」が成立したときです。また有効期限が2年と短めで、更新を怠ると失効します。逆に言えば、すでにクラウド・基盤の現場経験があり上流を目指す30〜40代にとっては、投資する価値が明確な資格です。基礎が不安なら、まず<Link href="/cert/gcp-ace/" className="text-blue-600 hover:underline">Associate Cloud Engineer</Link>から段階的に進むのが堅実です。
          </p>
        </section>

        {/* 30-40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の価値＝設計経験の客観証明</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              PCAは、入口資格とは立ち位置が逆です。入口資格が「クラウドに入るための入口」なのに対し、PCAは<strong>「すでに現場にいる経験者が、上流の設計へ役割を上げるための加点装置」</strong>として最も効きます。基盤・移行・設計の実務がある30〜40代にとって、これは時間を投資する価値のある資格です。
            </p>
            <p>
              一方で過度な期待は禁物です。PCAを取っても、それ単体で年収が跳ねるわけではありません。価値が出るのは<strong>「実務経験 × 資格」の掛け算</strong>のとき。GCPでの設計・移行の実績と組み合わせて初めて、アーキテクト職や高単価案件という形で結実します。難度の高い試験のため、ACEで土台を作ってから挑むのが現実的です。
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
              { n: "STEP 1", t: "ACEまたは実務で土台を作る", d: "Associate Cloud Engineerや実プロジェクトで、GCP主要サービスと運用の感覚を固める。" },
              { n: "STEP 2", t: "設計領域とケーススタディ対策", d: "ビジネス要件→アーキテクチャの落とし込みを、公式のケーススタディと実機演習で繰り返す。" },
              { n: "STEP 3", t: "合格→実務で設計に関与し更新", d: "合格後は実プロジェクトで設計に関与し、有効期限（2年）前に更新試験で資格を維持する。" },
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
            前段の基礎が不安なら<Link href="/cert/gcp-ace/" className="text-blue-600 hover:underline">Associate Cloud Engineer</Link>から、他クラウドと比較するなら<Link href="/cert/aws/" className="text-blue-600 hover:underline">AWS認定</Link>・<Link href="/cert/azure-solutions-architect/" className="text-blue-600 hover:underline">Azure Solutions Architect Expert</Link>も有効です。資格全体の位置づけは<Link href="/cert/" className="text-blue-600 hover:underline">資格で選ぶ転職ハブ</Link>で確認できます。
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
          <h2 className="text-xl font-bold mb-3">クラウド上流・設計職への転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            PCAを活かせるGCPアーキテクト・基盤設計求人を、IT特化型エージェントであなたの市場価値とともに確認しましょう。
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
              { name: "GCPエンジニア転職ガイド", href: "/skill/gcp/" },
              { name: "GCP Associate Cloud Engineer", href: "/cert/gcp-ace/" },
              { name: "AWS認定資格の活かし方", href: "/cert/aws/" },
              { name: "Azure Solutions Architect Expert", href: "/cert/azure-solutions-architect/" },
              { name: "インフラエンジニア転職ガイド", href: "/skill/infrastructure/" },
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
