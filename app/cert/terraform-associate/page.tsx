import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "Terraform Associateは転職に効くか｜IaC実務の加点資格と年収【2026年】";
const PAGE_DESC =
  "HashiCorp Certified: Terraform Associateを、Infrastructure as Code（IaC）の実務を補強する加点資格という観点から30代・40代向けに解説。受験料70.50 USD、選択式・1時間、2年の有効期限、実務とセットで効く理由を限界も含めて整理します。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：Terraform Associateは誰に効く資格か" },
  { id: "overview", label: "試験概要（受験料・形式・有効期限）" },
  { id: "salary", label: "保有者の年収相場と注意点" },
  { id: "scenes", label: "転職で評価される具体場面" },
  { id: "jobs", label: "活きるポジション" },
  { id: "position", label: "入門認定としての活用戦略" },
  { id: "middle", label: "30代・40代の価値＝経験者の加点装置" },
  { id: "steps", label: "取得3ステップ／次に狙う資格" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "Terraform Associateは40代の転職で意味がありますか？",
    a: "意味があります。Terraform AssociateはIaC（Infrastructure as Code）の基礎を体系的に証明する資格で、すでにインフラ・クラウド・DevOps経験のある30〜40代が『コードでインフラを管理できる』ことを示す加点材料として機能します。クラウド構築をTerraformで自動化する現場が増えているため、実務とセットで評価されます。ただし入門〜アソシエイトレベルの位置づけで、資格単体ではなく実務との掛け算で効く点が前提です。",
  },
  {
    q: "Terraform Associateの受験料はいくらですか？",
    a: "受験料は70.50 USD（別途、地域ごとの税・手数料）です（HashiCorp公式、2026年6月時点）。日本円の支払額は為替で変動します。他のベンダー資格と比べて受験料が手頃なため、IaCスキルを客観的に示す第一歩として挑戦しやすい資格です。",
  },
  {
    q: "Terraform Associateの現行バージョンはどれですか？",
    a: "2026年6月時点の現行版は004（Terraform Associate 004）です。前バージョンの003は2026年1月に提供終了しました。受験を申し込む際は、HashiCorp公式で最新の試験バージョンと出題範囲を必ず確認してください（HashiCorp公式、2026年6月時点）。",
  },
  {
    q: "Terraform Associateに有効期限はありますか？",
    a: "あります。認定の有効期限は取得から2年です（HashiCorp公式、2026年6月時点）。Terraformはバージョンの進化が速いため、2年ごとの再取得は最新仕様へのキャッチアップという意味でも実務的な意義があります。転職や更新のタイミングと合わせて管理しておくと安心です。",
  },
  {
    q: "Terraform Associateの試験形式と難度は？",
    a: "試験はオンライン監督下の選択式（合否判定）で、試験時間は1時間です。前提として基本的なターミナル操作と、オンプレ・クラウドのアーキテクチャ理解が想定されています。Terraformのコアワークフロー・state管理・モジュールなど実務直結の範囲が問われるため、実際にコードを書いた経験があると有利です。",
  },
  {
    q: "Terraform Associateの合格率はどのくらいですか？",
    a: "HashiCorpは試験ごとの合格率を公表していません。したがって当サイトでは具体的な合格率の数値は提示しません（創作を避けるため）。アソシエイトレベルの位置づけですが、state管理やモジュールなど実務的な理解が問われるため、ハンズオン中心の対策が有効とされます。",
  },
];

const overviewTable = [
  ["主催", "HashiCorp"],
  ["位置づけ", "IaC（Terraform）の入門〜アソシエイト認定"],
  ["現行バージョン", "004（003は2026年1月に提供終了）"],
  ["受験料", "70.50 USD（別途、地域の税・手数料）"],
  ["試験形式", "選択式（合否判定）・オンライン監督"],
  ["試験時間", "1時間"],
  ["前提知識", "基本的なターミナル操作／オンプレ・クラウド構成の理解"],
  ["有効期限", "2年"],
  ["合格率", "HashiCorp非公表（当サイトは創作しません）"],
];

export default function TerraformAssociateCertPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/cert/terraform-associate/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "資格で選ぶ転職", href: "/cert/" },
          { name: "Terraform Associate" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Terraform Associateは転職に効くか｜IaC実務の加点資格と年収【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | HashiCorp認定Terraform Associateの転職価値を30代・40代向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          HashiCorp Certified: Terraform Associateは、<strong>Infrastructure as Code（IaC）の基礎を体系的に証明する認定資格</strong>です。本記事は「Terraform Associateを取れば転職で有利になるか」という疑問に対し、<strong>未経験の入口というより『インフラ・クラウド経験者がIaCスキルを補強する加点資格』</strong>という性格を軸に、その価値を公式情報をもとに整理します。アソシエイトレベルゆえに資格単体では効きにくいという限界も正直にお伝えします。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "HashiCorp 公式（hashicorp.com／developer.hashicorp.com）",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：Terraform Associateは誰に効く資格か</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              Terraform Associateは<strong>「IaC実務の加点資格」</strong>です。アソシエイトレベルのため未経験を一気に押し上げるものではなく、すでにインフラ・クラウド経験のあるミドルが<strong>『コードでインフラを管理できる』ことを補強する</strong>のに最も効きます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>インフラ・クラウド経験のある30〜40代</strong>：IaCスキルの体系的な証明として加点される</li>
              <li>② <strong>DevOps・自動化を進めたい人</strong>：手作業からコード管理への移行を裏付ける</li>
              <li>③ <strong>受験料が手頃</strong>：IaCスキルを客観的に示す第一歩として挑戦しやすい</li>
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
            出典: HashiCorp 公式（developer.hashicorp.com、2026年6月時点）。受験料は70.50 USD（別途、地域ごとの税・手数料）。試験はオンライン監督下の選択式（合否判定）で、試験時間は1時間です。前提として基本的なターミナル操作とオンプレ・クラウド構成の理解が想定されています。現行バージョンは004で、前バージョン003は2026年1月に提供終了しました。認定の有効期限は2年です。合格率はHashiCorpが公表していないため、当サイトでは数値を創作していません。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">保有者の年収相場と注意点</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Terraform Associate保有者に限定した日本国内の公的な年収統計は存在しません。したがって当サイトでは<strong>本資格単独の年収数値は提示しません</strong>。年収はインフラ・クラウド・DevOps実務の深さ・役割・担当規模で決まり、Terraform Associateはそれを補強する位置づけと捉えるのが現実的です。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-3">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・保有者限定の国内公的年収統計は<strong>存在しない（創作しない）</strong></li>
              <li>・評価される領域：<strong>DevOps・クラウドインフラ・SREなど自動化を担う職種</strong></li>
              <li>・実態：<strong>年収は実務経験・役割で決まり、本資格はIaCスキルの補強材</strong></li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: 公的な水準感は国税庁「民間給与実態統計調査」の給与所得者平均461万円（令和6年分）を参考にしてください。Terraform AssociateはIaC領域で評価される認定ですが、保有者平均年収の公開データは乏しいため、当サイトでは断定を避け、実務経験との掛け算で評価することを推奨します。
          </p>
        </section>

        {/* 評価される場面 */}
        <section id="scenes" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職で評価される具体場面</h2>
          <div className="space-y-3">
            {[
              { t: "IaC・自動化案件への参画", d: "Terraformでインフラをコード管理する案件で、基礎が体系化できている証明として加点される。" },
              { t: "DevOps・クラウド職への役割転換", d: "手作業の構築からコードによる管理へ移行する流れの中で、IaCスキルの裏付けになる。" },
              { t: "マルチクラウド構成の素養", d: "TerraformはAWS・Azure・GCPを横断して使える。特定クラウドに依存しない構築力を示せる。" },
              { t: "学習意欲・最新技術への対応力", d: "現行版を取得した事実が、モダンなインフラ手法へのキャッチアップ姿勢を裏付ける。" },
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
            Terraform Associateが土台として活きる代表的な進路です（一般的な整理。具体的な求人件数はリアルタイムで変動するため、最新は各エージェントでご確認ください）。
          </p>
          <div className="space-y-3">
            {[
              { t: "DevOps／クラウドインフラエンジニア", d: "クラウド基盤をコードで構築・運用する立場。Terraformは現場の標準ツールの一つとして広く使われる。" },
              { t: "プラットフォームエンジニア", d: "社内の基盤を再現性高く整備する立場。IaCの体系知識が信頼性のあるプロビジョニングを支える。" },
              { t: "SRE（サイト信頼性エンジニア）", d: "インフラの自動化・標準化を担う立場。state管理やモジュール設計の理解が活きる。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            IaC・自動化のキャリアは<Link href="/skill/terraform/" className="text-petrol hover:underline">Terraformエンジニア転職ガイド</Link>、DevOps全般は<Link href="/skill/devops/" className="text-petrol hover:underline">DevOpsエンジニア転職ガイド</Link>を参考にしてください。
          </p>
        </section>

        {/* 入門認定としての活用戦略 */}
        <section id="position" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">入門認定としての活用戦略</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Terraform Associateは「上位の専門資格」ではなく「IaCの基礎を示すアソシエイト認定」です。この前提を理解すると、上位資格とは取得の狙いが異なることが見えてきます。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">観点</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">上位の専門資格（例: CKA等）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">Terraform Associate（IaC入門認定）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["位置づけ", "専門領域の中〜上級", "IaCの基礎・アソシエイト"],
                  ["受験負荷", "実技や広範な範囲で高め", "選択式1時間・手頃な受験料で挑戦しやすい"],
                  ["狙い", "専門性の深さの証明", "IaCスキルの体系的な証明・自動化への足がかり"],
                  ["有効期限", "資格により様々", "2年"],
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
            活用戦略は3つに整理できます。第一に<strong>IaCスキルの可視化</strong>。手作業中心だった経歴に、コードでインフラを管理できる客観的な裏付けを加えられます。第二に<strong>マルチクラウド対応の素養</strong>。TerraformはAWS・Azure・GCPを横断して使えるため、特定クラウドに依存しない構築力を示せます。第三に<strong>手頃な受験料での第一歩</strong>。他資格より負荷が軽く、DevOps領域への入口として取り組みやすい点が利点です。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            正直なデメリットも押さえておきましょう。Terraform Associateは<strong>アソシエイトレベルのため、これ単体で年収が跳ねる資格ではありません</strong>。あくまで実務を補強する位置づけで、効果が出るのは「経験 × 資格」の掛け算が成立したときです。また有効期限が2年で、Terraformのバージョン進化に合わせた再取得が必要です。逆に言えば、すでにインフラ・クラウドの現場経験があり自動化を進めたい30〜40代にとっては、低コストで取り組める実利的な認定です。クラウド側の理解が不安な場合は、まず<Link href="/skill/aws/" className="text-petrol hover:underline">AWS認定</Link>などで基盤の土台を固めるのも有効です。
          </p>
        </section>

        {/* 30-40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の価値＝経験者の加点装置</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              Terraform Associateは、アソシエイトレベルとはいえ、<strong>すでにインフラ・クラウド経験のある経験者が、IaCスキルを補強するための加点装置</strong>として効きます。手作業での構築経験はあってもコード管理の証明がなかった、という30〜40代にとって、自分のスキルセットをモダンな方向にアップデートする手頃な手段です。
            </p>
            <p>
              一方で過度な期待は禁物です。Terraform Associateを取っても、それ単体で年収が跳ねるわけではありません。価値が出るのは<strong>「インフラ・クラウド実務 × 資格」の掛け算</strong>のとき。実際の構築・運用経験と組み合わせて初めて、DevOps・SREという形で結実します。さらに有効期限が2年のため、再取得の手間も前提に計画する必要があります。
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
              { n: "STEP 1", t: "Terraformの基礎ワークフローを習得", d: "init・plan・applyのコアワークフローと基本構文を、公式チュートリアルで手を動かして覚える。" },
              { n: "STEP 2", t: "state・モジュール・プロバイダを理解", d: "state管理やモジュール設計など実務直結の論点を、実際にコードを書いて理解する。" },
              { n: "STEP 3", t: "現行版004で合格→2年更新を計画", d: "最新の出題範囲を確認して受験。有効期限2年を見据え、再取得の計画も立てる。" },
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
            クラウド基盤を補強するなら<Link href="/skill/aws/" className="text-petrol hover:underline">AWS認定</Link>、コンテナ基盤へ広げるなら<Link href="/cert/cka/" className="text-petrol hover:underline">CKA</Link>、OS・サーバー側を固めるなら<Link href="/cert/lpic/" className="text-petrol hover:underline">LPIC／LinuC</Link>との組み合わせも有効です。
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
          <h2 className="text-xl font-bold mb-3">DevOps・クラウドインフラ職への転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            Terraform AssociateとIaCスキルを活かせる求人を、IT特化型エージェントであなたの市場価値とともに確認しましょう。
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
              { name: "Terraformエンジニア転職ガイド", href: "/skill/terraform/" },
              { name: "DevOpsエンジニア転職ガイド", href: "/skill/devops/" },
              { name: "AWS認定資格の活かし方", href: "/skill/aws/" },
              { name: "CKAの転職価値", href: "/cert/cka/" },
              { name: "LPIC／LinuCの転職価値", href: "/cert/lpic/" },
              { name: "資格で選ぶ転職トップ", href: "/cert/" },
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
