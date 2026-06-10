import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "CKAは転職に効くか｜Kubernetes実務の加点資格と年収【2026年】";
const PAGE_DESC =
  "CNCF／Linux FoundationのCKA（Certified Kubernetes Administrator）を、コンテナ基盤の実務スキルを証明する加点資格という観点から30代・40代向けに解説。受験料445 USD、実技（CLI）形式、2年の有効期限、実務とセットで効く理由を限界も含めて整理します。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：CKAは誰に効く資格か" },
  { id: "overview", label: "試験概要（受験料・形式・有効期限）" },
  { id: "salary", label: "保有者の年収相場と注意点" },
  { id: "scenes", label: "転職で評価される具体場面" },
  { id: "jobs", label: "活きるポジション" },
  { id: "position", label: "実技資格としての活用戦略" },
  { id: "middle", label: "30代・40代の価値＝経験者の加点装置" },
  { id: "steps", label: "取得3ステップ／次に狙う資格" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "CKAは40代の転職で意味がありますか？",
    a: "意味があります。CKAは知識穴埋めではなく、実際にコマンドラインでKubernetesクラスタを操作する実技試験です。そのため『コンテナ基盤を実務で扱える』ことを直接的に証明でき、すでにインフラ・DevOps経験のある30〜40代がコンテナ基盤の専門性を示す加点材料として機能します。ただし資格単体ではなく、実際の運用経験とセットで効く点が前提です。",
  },
  {
    q: "CKAの受験料はいくらですか？",
    a: "CKAの受験料は445 USD（試験のみ・標準価格）です（Linux Foundation公式、2026年6月時点）。日本円の支払額は為替で変動します。受験パッケージには再試験（1回）と、Killer.shの試験シミュレータ（各36時間アクセス）が含まれます。学習教材を含むバンドル価格も別途用意されています。",
  },
  {
    q: "CKAに有効期限はありますか？",
    a: "あります。CKA認定の有効期限は取得から2年です。維持するには、有効期限内に当時の最新バージョンの試験に再度合格する必要があります（Linux Foundation公式、2026年6月時点）。Kubernetesはバージョンの進化が速いため、2年ごとの再認定は最新仕様へのキャッチアップという意味でも実務的な意義があります。",
  },
  {
    q: "CKAの試験形式は知識問題ですか？",
    a: "いいえ。CKAは選択式の知識問題ではなく、Kubernetesが動作するコマンドライン環境で複数の課題を実際に解く実技（パフォーマンスベース）試験です。試験時間は2時間で、オンラインのリモート監督（プロクタリング）方式です。暗記ではなく、実際にクラスタを操作・トラブルシュートできるかが問われるため、ハンズオンの準備が不可欠です。",
  },
  {
    q: "CKAの合格率はどのくらいですか？",
    a: "CNCF／Linux Foundationは試験ごとの合格率を公表していません。したがって当サイトでは具体的な合格率の数値は提示しません（創作を避けるため）。実技試験のため、ドキュメント参照に慣れ、kubectl操作を体に覚えさせるハンズオン中心の対策が有効とされます。",
  },
  {
    q: "CKADやCKSとは何が違いますか？",
    a: "CKAはクラスタの構築・運用・トラブルシュートを担う『管理者』向けです。CKAD（Certified Kubernetes Application Developer）はコンテナアプリの開発・デプロイに焦点を当てた『開発者』向け、CKS（Certified Kubernetes Security Specialist）はセキュリティ特化で、受験にCKA合格が前提となります。インフラ・基盤運用を担うならまずCKA、その後の専門化としてCKSという順序が一般的です。",
  },
];

const overviewTable = [
  ["主催", "CNCF／The Linux Foundation"],
  ["位置づけ", "Kubernetes管理者の実技認定"],
  ["受験料", "445 USD（試験のみ・標準価格／バンドルは別途）"],
  ["試験形式", "実技（CLIでの課題解決）・オンライン監督"],
  ["試験時間", "2時間"],
  ["再試験", "受験パッケージに1回分の再受験を含む"],
  ["有効期限", "2年（最新版試験への再合格で更新）"],
  ["合格率", "CNCF非公表（当サイトは創作しません）"],
];

export default function CkaCertPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/cert/cka/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "資格で選ぶ転職", href: "/cert/" },
          { name: "CKA" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          CKAは転職に効くか｜Kubernetes実務の加点資格と年収【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | CNCF認定CKAの転職価値を30代・40代向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          CKA（Certified Kubernetes Administrator）は、CNCF／Linux Foundationが認定する<strong>Kubernetes管理者向けの実技試験</strong>です。本記事は「CKAを取れば転職で有利になるか」という疑問に対し、<strong>知識の暗記ではなく『コンテナ基盤を実務で扱える』ことを直接証明する加点資格</strong>という性格を軸に、その価値を公式情報をもとに整理します。資格単体では年収は跳ねないという限界も正直にお伝えします。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "CNCF 公式（cncf.io）",
            "Linux Foundation 公式（training.linuxfoundation.org）",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：CKAは誰に効く資格か</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              CKAは<strong>「コンテナ基盤実務の加点資格」</strong>です。暗記型の知識資格とは性格が異なり、実際にクラスタを操作する実技試験であるため、すでにインフラ・DevOps経験のあるミドルが<strong>コンテナ基盤の専門性を直接証明する</strong>のに最も効きます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>インフラ・DevOps経験のある30〜40代</strong>：コンテナ基盤を扱える実技力の証明として加点される</li>
              <li>② <strong>未経験のミドル</strong>：実技難度が高く入口には不向き。まずLinux・コンテナ基礎を固めるべき</li>
              <li>③ <strong>クラウドネイティブを深めたい人</strong>：CKAD・CKSへの土台として体系化できる</li>
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
            出典: CNCF 公式（cncf.io）／Linux Foundation 公式（training.linuxfoundation.org、2026年6月時点）。受験料は試験のみで445 USD（標準価格）。試験はコマンドライン上で課題を解く実技（パフォーマンスベース）方式で、試験時間は2時間、オンラインのリモート監督で実施されます。受験パッケージには再試験1回とKiller.shのシミュレータ（各36時間）が含まれます。認定の有効期限は2年で、最新版試験への再合格で更新します。合格率はCNCFが公表していないため、当サイトでは数値を創作していません。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">保有者の年収相場と注意点</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            CKA保有者に限定した日本国内の公的な年収統計は存在しません。したがって当サイトでは<strong>CKA単独の年収数値は提示しません</strong>。年収はコンテナ基盤・クラウドネイティブ運用の実務の深さ・役割・担当規模で決まり、CKAはそれを補強する位置づけと捉えるのが現実的です。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-3">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・CKA保有者限定の国内公的年収統計は<strong>存在しない（創作しない）</strong></li>
              <li>・評価される領域：<strong>SRE・プラットフォームエンジニア・DevOpsなど需要の高い職種</strong></li>
              <li>・実態：<strong>年収は実務経験・役割で決まり、CKAは実技力の補強材</strong></li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: 公的な水準感は国税庁「民間給与実態統計調査」の給与所得者平均461万円（令和6年分）を参考にしてください。CKAはクラウドネイティブ領域で評価される実技資格ですが、保有者平均年収の公開データは乏しいため、当サイトでは断定を避け、実務経験との掛け算で評価することを推奨します。
          </p>
        </section>

        {/* 評価される場面 */}
        <section id="scenes" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職で評価される具体場面</h2>
          <div className="space-y-3">
            {[
              { t: "コンテナ基盤の運用・構築ポジション", d: "実技試験を通過した事実が、クラスタの構築・運用・トラブルシュートを任せられる根拠になる。" },
              { t: "DevOps・SREへの役割転換", d: "Kubernetesは現代の基盤運用の中核。CKAが基盤自動化・信頼性領域への移行を後押しする。" },
              { t: "実技力の客観証明", d: "暗記ではなく実際の操作を問う試験のため、『手を動かせる』ことの信頼性が高い。" },
              { t: "クラウドネイティブ案件への参画", d: "コンテナ前提のモダンな案件・チームで、共通言語としての認定が評価される。" },
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
            CKAが土台として活きる代表的な進路です（一般的な整理。具体的な求人件数はリアルタイムで変動するため、最新は各エージェントでご確認ください）。
          </p>
          <div className="space-y-3">
            {[
              { t: "プラットフォームエンジニア", d: "社内の基盤プラットフォームをKubernetesで構築・運用する立場。CKAの実技力が信頼の裏付けになる。" },
              { t: "SRE（サイト信頼性エンジニア）", d: "サービスの信頼性・運用自動化を担う立場。コンテナオーケストレーションの深い理解が活きる。" },
              { t: "DevOps／インフラエンジニア", d: "CI/CDと基盤運用を横断する立場。コンテナ基盤の管理スキルが幅を広げる。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            コンテナ基盤のキャリアは<Link href="/skill/kubernetes/" className="text-blue-600 hover:underline">Kubernetesエンジニア転職ガイド</Link>、DevOps全般は<Link href="/skill/devops/" className="text-blue-600 hover:underline">DevOpsエンジニア転職ガイド</Link>を参考にしてください。
          </p>
        </section>

        {/* 実技資格としての活用戦略 */}
        <section id="position" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">実技資格としての活用戦略</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            CKAは「暗記型の知識資格」ではなく「実技で実務力を示す加点資格」です。この前提を理解すると、選択式の知識資格とは取得の狙いが異なることが見えてきます。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">観点</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">暗記型の知識資格</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">CKA（実技の加点資格）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["試験形式", "選択式の知識問題が中心", "CLIで課題を解く実技（実機操作）"],
                  ["証明できること", "知識を理解していること", "実際にクラスタを操作・運用できること"],
                  ["主な対象", "基礎知識の証明をしたい人", "コンテナ基盤の実務経験者・志望者"],
                  ["有効期限", "資格により様々", "2年（最新版試験への再合格で更新）"],
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
            活用戦略は3つに整理できます。第一に<strong>実技力の客観証明</strong>。実機操作を問う試験のため、「手を動かせる」ことを採用側に直接示せます。第二に<strong>クラウドネイティブ職への足がかり</strong>。SRE・プラットフォームエンジニアなど需要の高い職種への移行を後押しします。第三に<strong>CKAD・CKSへの土台</strong>。特にCKSはCKA合格が前提のため、セキュリティ特化へ進む布石になります。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            正直なデメリットも押さえておきましょう。CKAは<strong>取得しても単体で年収が跳ねる資格ではありません</strong>。あくまで実際の運用経験を補強する位置づけで、効果が出るのは「経験 × 資格」の掛け算が成立したときです。また有効期限が2年と短く、Kubernetesのバージョン進化に合わせた再認定が必要です。逆に言えば、すでにインフラ・コンテナの現場経験があり基盤領域を深めたい30〜40代にとっては、投資する価値が明確な実技資格です。基礎が不安な場合は、まず<Link href="/skill/linux/" className="text-blue-600 hover:underline">Linux</Link>や<Link href="/cert/lpic/" className="text-blue-600 hover:underline">LPIC／LinuC</Link>でOS・基盤の土台を固めてから臨むのが堅実です。
          </p>
        </section>

        {/* 30-40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の価値＝経験者の加点装置</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              CKAは、暗記型の入口資格とは<strong>立ち位置が異なります</strong>。CKAは<strong>「すでに現場にいる経験者が、コンテナ基盤の実務力を客観的に証明するための加点装置」</strong>として最も効きます。実技試験であるため、インフラ・DevOps経験のある30〜40代にとって、自分のスキルを採用側に示しやすい資格です。
            </p>
            <p>
              一方で過度な期待は禁物です。CKAを取っても、それ単体で年収が跳ねるわけではありません。価値が出るのは<strong>「実務経験 × 資格」の掛け算</strong>のとき。実際の運用・トラブルシュート経験と組み合わせて初めて、SRE・プラットフォーム職という形で結実します。さらに有効期限が2年と短いため、再認定の手間も前提に計画する必要があります。
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
              { n: "STEP 1", t: "Linux・コンテナの基礎を固める", d: "kubectlの前提となるLinux操作・Docker等のコンテナ基礎を押さえる。基盤経験者は短縮可能。" },
              { n: "STEP 2", t: "実技演習を徹底反復", d: "Killer.shのシミュレータや実クラスタで課題を反復。公式ドキュメント参照に慣れることが鍵。" },
              { n: "STEP 3", t: "合格→CKAD／CKSで専門化→2年更新", d: "合格後はCKAD・CKSへ専門化。有効期限2年を見据え、再認定の計画も立てる。" },
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
            前段の基礎が不安なら<Link href="/skill/linux/" className="text-blue-600 hover:underline">Linux</Link>や<Link href="/cert/lpic/" className="text-blue-600 hover:underline">LPIC／LinuC</Link>から、クラウド連携を見据えるなら<Link href="/skill/aws/" className="text-blue-600 hover:underline">AWS認定</Link>、IaC側を補強するなら<Link href="/cert/terraform-associate/" className="text-blue-600 hover:underline">Terraform Associate</Link>との組み合わせも有効です。
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
          <h2 className="text-xl font-bold mb-3">コンテナ基盤・SRE職への転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            CKAを活かせるプラットフォーム・SRE求人を、IT特化型エージェントであなたの市場価値とともに確認しましょう。
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
              { name: "Kubernetesエンジニア転職ガイド", href: "/skill/kubernetes/" },
              { name: "DevOpsエンジニア転職ガイド", href: "/skill/devops/" },
              { name: "Linuxスキルの転職価値", href: "/skill/linux/" },
              { name: "Terraform Associateの転職価値", href: "/cert/terraform-associate/" },
              { name: "LPIC／LinuCの転職価値", href: "/cert/lpic/" },
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
