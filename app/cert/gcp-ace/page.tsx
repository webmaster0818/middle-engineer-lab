import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "Google Cloud Associate Cloud Engineer（ACE）は転職に効くか｜GCP実務の入口証明【2026年】";
const PAGE_DESC =
  "Google CloudのAssociate Cloud Engineer（ACE）を、30代・40代の経験者向けに解説。受験料125 USD・試験形式・有効期限3年、GCP運用／基盤職での評価、年収の考え方を公式情報をもとに限界も含めて整理します。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：ACEはどんな人に効く資格か" },
  { id: "overview", label: "試験概要（受験料・形式・有効期限）" },
  { id: "salary", label: "保有者の年収の考え方と注意点" },
  { id: "scenes", label: "転職で評価される具体場面" },
  { id: "jobs", label: "活きるポジション" },
  { id: "position", label: "アソシエイト資格としての活用戦略" },
  { id: "middle", label: "30代・40代の価値＝GCP実務の起点" },
  { id: "steps", label: "取得3ステップ／次に狙う資格" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "ACEは40代の転職で意味がありますか？",
    a: "意味があります。Associate Cloud Engineer（ACE）はGoogle Cloudのアソシエイト認定で、GCPのデプロイ・運用・監視といった実務スキルを問います。すでにインフラやクラウドの実務がある30〜40代にとって、GCPを扱える証明として書類段階で加点されやすい資格です。ただしアソシエイト（中位の入口寄り）という位置づけのため、上流設計まで示したい場合は上位のProfessional Cloud Architect（PCA）が適しています。",
  },
  {
    q: "ACEの受験料と試験形式を教えてください。",
    a: "Google Cloud公式によると、ACEの受験料は125 USD（税別、2026年6月時点）です。試験時間は2時間、出題は50〜60問の選択式・複数選択式です。日本語にも対応しており、オンライン監督またはテストセンターで受験できます。前提資格はありませんが、GCPの実務経験6か月以上が推奨されています（Google Cloud、2026年6月時点）。",
  },
  {
    q: "ACEに有効期限はありますか？",
    a: "あります。Google Cloudのアソシエイト認定は認定日から3年間有効です。更新は通常の試験を再受験するか、より短い更新試験（1時間・20問・75 USD、2026年6月時点）で行えます。更新は有効期限の180日前から可能です（Google Cloud、2026年6月時点）。",
  },
  {
    q: "ACEの合格率はどのくらいですか？",
    a: "Google Cloudは合格率を公表していません。当サイトでは創作した数値を載せず、非公表である事実をそのままお伝えします。合格基準点も非公開で、対策は公式の模擬試験や実機での演習が中心になります（Google Cloud、2026年6月時点）。",
  },
  {
    q: "ACEとPCAはどちらを取るべきですか？",
    a: "現在地と目的で決めます。GCPの実務がこれからの人、まず扱える証明がほしい人はACE（アソシエイト）から。すでに設計・基盤の経験があり上流アーキテクトを目指す人はPCA（プロフェッショナル）が適しています。ACEで土台を作りPCAへ進むのが王道のステップアップです。PCA側は当サイトのPCAガイドも参照してください。",
  },
  {
    q: "AWSやAzureを使っていてもGCPの資格は役立ちますか？",
    a: "役立ちます。クラウドの基本概念は共通点が多く、AWS・Azure経験者がGCPを学ぶハードルは未経験者より低い傾向です。マルチクラウド対応を求める現場や、GCPを採用するWeb系・データ基盤の企業では、ACEがGCPも扱える裏づけになります。ただし実プロジェクトでの利用経験とセットで効く点は他クラウドと同じです。",
  },
];

const overviewTable = [
  ["主催", "Google Cloud"],
  ["認定名", "Associate Cloud Engineer（ACE）"],
  ["レベル", "Associate（アソシエイト）"],
  ["前提資格", "なし（GCP実務6か月以上を推奨）"],
  ["受験料", "125 USD（税別／2026年6月時点）"],
  ["試験時間", "2時間"],
  ["出題", "50〜60問（選択式・複数選択式）"],
  ["対応言語", "英語・日本語ほか"],
  ["合格率", "非公表（Google Cloudは公表していない）"],
  ["有効期限", "3年（更新試験75 USD・20問で更新可）"],
];

export default function GcpAceCertPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/cert/gcp-ace/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "資格で選ぶ転職", href: "/cert/" },
          { name: "Google Cloud Associate Cloud Engineer" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Google Cloud Associate Cloud Engineer（ACE）は転職に効くか｜GCP実務の入口証明【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | Google Cloudのアソシエイト認定の転職価値を30代・40代向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          Associate Cloud Engineer（ACE）は、Google Cloudの<strong>アソシエイト認定で、GCPのデプロイ・運用・監視という実務スキルを証明</strong>する試験です。本記事は「ACEを取れば転職で有利になるか」という疑問に対し、<strong>GCPを扱える実務の証明</strong>という観点から、運用・基盤職での評価、有効期限や更新の仕組みを公式情報とともに整理します。資格単体では年収は跳ねないという限界も正直にお伝えします。
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
                <a href={`#${t.id}`} className="text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：ACEはどんな人に効く資格か</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              ACEは<strong>「GCPを扱える実務の証明」</strong>です。アソシエイト（入口寄り）の位置づけで、すでにインフラ・クラウドの経験があるミドルが<strong>GCPへ守備範囲を広げる起点</strong>として効きます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>インフラ・クラウド実務のある30〜40代</strong>：GCPを扱える証明として書類段階で加点される</li>
              <li>② <strong>GCP採用のWeb系・データ基盤志望</strong>：GCPスキルの裏づけになる</li>
              <li>③ <strong>上流アーキを目指す人</strong>：ACEで土台を作り、上位のPCAへ進む起点になる</li>
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
            出典: Google Cloud 公式（cloud.google.com/learn/certification/cloud-engineer、2026年6月時点）。受験料は125 USD（税別）、試験時間2時間、出題50〜60問の選択式です。日本語に対応します。合格率・合格基準点はGoogle Cloudが公表しておらず、当サイトでは創作しません。有効期限は3年で、75 USD・20問・1時間の更新試験、または通常試験の再受験で更新できます。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">保有者の年収の考え方と注意点</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            ACE保有者そのものの公的な平均年収統計はなく、当サイトでは<strong>断定的な年収額を提示しません</strong>。クラウド人材は需要が高い領域とされますが、年収を決めるのは資格ではなく<strong>実務経験と担う役割</strong>です。ACEはあくまでGCPを扱える入口の証明と捉えるのが現実的です。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-3">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・クラウド人材は需要が高い傾向（<strong>実務・役割が主因</strong>）</li>
              <li>・ACEは<strong>GCPを扱える入口の証明</strong>として書類通過に効く加点材</li>
              <li>・実態：<strong>年収はGCP実務経験 × 資格の掛け算</strong>で決まる</li>
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
              { t: "GCPを採用する現場への応募", d: "Web系・データ基盤・スタートアップなどGCP採用企業で、扱える前提のスキル証明として書類段階で効く。" },
              { t: "マルチクラウド対応の証明", d: "AWS・Azure経験に加えGCPも扱えることを示し、対応できるクラウドの幅を広げられる。" },
              { t: "運用・デプロイ業務の担当", d: "GCPのデプロイ・監視・運用の実務スキルを問う試験のため、運用ポジションへの適性を裏づける。" },
              { t: "上位資格・上流への布石", d: "ACEで土台を作り、上位のProfessional Cloud Architectで設計力まで示す段階的なキャリア設計に使える。" },
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
            ACEが土台として活きる代表的な進路です（一般的な整理。具体的な求人件数はリアルタイムで変動するため、最新は各エージェントでご確認ください）。
          </p>
          <div className="space-y-3">
            {[
              { t: "クラウドエンジニア（GCP運用）", d: "GCP上のデプロイ・運用・監視を担う役割。ACEがそのまま職務スキルの裏づけになる。" },
              { t: "インフラエンジニア（クラウド移行寄り）", d: "オンプレ経験を活かしつつGCPへ守備範囲を広げる際の起点になる。" },
              { t: "データ基盤・SRE寄り", d: "GCPのデータ／運用基盤に関わる職種で、扱える前提スキルとして評価される。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            GCPそのものの市場感は<Link href="/skill/gcp/" className="text-petrol hover:underline">GCPエンジニア転職ガイド</Link>、インフラ全般は<Link href="/skill/infrastructure/" className="text-petrol hover:underline">インフラエンジニア転職ガイド</Link>を参考にしてください。
          </p>
        </section>

        {/* 活用戦略 */}
        <section id="position" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">アソシエイト資格としての活用戦略</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            ACEは「アソシエイト（入口寄り）の証明資格」です。上位のProfessional Cloud Architect（PCA）とは狙いが異なり、段階的に使い分けるのがコツです。
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
            活用戦略は3つに整理できます。第一に<strong>GCP案件への足がかり</strong>。GCPを扱える前提スキルを示し、書類選考の通過率を上げられます。第二に<strong>マルチクラウドの幅</strong>。AWS・Azure経験に積み増すことで、対応できるクラウドの幅をアピールできます。第三に<strong>上位資格への布石</strong>。ACEで土台を作ってからPCAへ進めば、運用から設計まで一貫したキャリアストーリーになります。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            正直なデメリットも押さえておきましょう。ACEは<strong>アソシエイトという位置づけのため、これ単体で上流設計まで保証する資格ではありません</strong>。効果が出るのは「GCP実務 × 資格」が成立したときです。また有効期限が3年あり、取りっぱなしでは失効します。逆に言えば、GCPに守備範囲を広げたい30〜40代の起点としては、費用対効果の高い資格です。上流まで示したいなら<Link href="/cert/gcp-pca/" className="text-petrol hover:underline">Professional Cloud Architect</Link>へ進みましょう。
          </p>
        </section>

        {/* 30-40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の価値＝GCP実務の起点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              ACEは、未経験がゼロからIT職に入るための入口資格とは少し違います。すでにインフラ・クラウドの土台がある経験者が<strong>「GCPという新しい守備範囲を扱える」と示すための起点</strong>として最も効きます。AWS・Azure経験のある30〜40代がマルチクラウド対応を広げる一手として、費用対効果は高めです。
            </p>
            <p>
              一方で過度な期待は禁物です。ACEを取っても、それ単体で年収が跳ねるわけではありません。価値が出るのは<strong>「実務経験 × 資格」の掛け算</strong>のとき。GCPの運用・構築の実績と組み合わせて初めて、案件の幅や上位資格への道が開けます。上流の設計力まで示したい場合は、ACEを起点にPCAへ進むのが王道です。
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
              { n: "STEP 1", t: "GCPの基礎を実機で触る", d: "Compute Engine・Cloud Storage・IAMなど主要サービスを実際のコンソールやコマンドで操作し、感覚を掴む。" },
              { n: "STEP 2", t: "出題範囲を演習で網羅", d: "デプロイ・運用・監視・アクセス管理を、公式模擬試験と実機演習で固める。50〜60問の選択式に慣れる。" },
              { n: "STEP 3", t: "合格→PCAで上流へ", d: "合格後はGCP実務に関わりつつ、有効期限内に更新。設計力まで示すなら上位のPCAに挑戦する。" },
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
            上位を狙うなら<Link href="/cert/gcp-pca/" className="text-petrol hover:underline">Professional Cloud Architect</Link>、他クラウドと比較するなら<Link href="/cert/aws/" className="text-petrol hover:underline">AWS認定</Link>・<Link href="/cert/azure-solutions-architect/" className="text-petrol hover:underline">Azure Solutions Architect Expert</Link>も有効です。資格全体の位置づけは<Link href="/cert/" className="text-petrol hover:underline">資格で選ぶ転職ハブ</Link>で確認できます。
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
          <h2 className="text-xl font-bold mb-3">クラウド・GCP案件への転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            ACEを活かせるGCP運用・基盤求人を、IT特化型エージェントであなたの市場価値とともに確認しましょう。
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
              { name: "GCPエンジニア転職ガイド", href: "/skill/gcp/" },
              { name: "GCP Professional Cloud Architect", href: "/cert/gcp-pca/" },
              { name: "AWS認定資格の活かし方", href: "/cert/aws/" },
              { name: "Azure Solutions Architect Expert", href: "/cert/azure-solutions-architect/" },
              { name: "インフラエンジニア転職ガイド", href: "/skill/infrastructure/" },
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
