import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "Microsoft Azure Administrator(AZ-104)は転職に効くか【2026年】";
const PAGE_DESC =
  "Microsoft Azure Administrator Associate（AZ-104）を、経験者の加点資格という観点から30代・40代向けに解説。受験料・試験形式・合格スコア・更新要件・出題範囲を公式情報で整理し、Azure運用実務とセットで効く理由と限界をまとめます。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：AZ-104は誰に効く資格か" },
  { id: "overview", label: "試験概要（受験料・形式・合格基準）" },
  { id: "scope", label: "出題範囲（5分野）" },
  { id: "value", label: "30代・40代経験者にとっての価値" },
  { id: "scenes", label: "転職で評価される具体場面" },
  { id: "jobs", label: "活きるポジション" },
  { id: "steps", label: "取得3ステップ／前提と次の資格" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "AZ-104は40代の転職で意味がありますか？",
    a: "意味があります。AZ-104（Azure管理者アソシエイト）はMicrosoft公式で『中級』に位置づけられるロールベース認定で、Azure環境の実装・管理・監視の実務スキルを示します。入門のAZ-900と違い、PowerShellやAzure CLI、ガバナンスなど実装寄りの知識が問われるため、インフラ運用の実務を持つ30〜40代が『Azureを運用できる』ことを証明する加点資格として機能します。実務との掛け算が前提です。",
  },
  {
    q: "AZ-104の受験料はいくらですか？",
    a: "AZ-104の受験料は、多くの国で165 USDが目安です（受験国・地域や為替で変動し、国によってはこれを上回る場合があります、2026年6月時点）。入門のAZ-900（99 USD）より高い設定です。正確な金額は、Pearson VUEでのスケジュール時にMicrosoft Learnでご確認ください。",
  },
  {
    q: "AZ-104の試験形式と合格スコアを教えてください。",
    a: "AZ-104は監督付き試験で、試験時間は100分です。出題数は回により変動しますが、おおむね40〜60問程度で、実技的な対話型コンポーネント（ケース・操作問題）を含む場合があります。合格スコアはMicrosoftの認定試験共通で1,000点満点中700点以上です。スコアはスケールスコアのため単純な正答率とは一致しません（Microsoft Learn、2026年6月時点）。",
  },
  {
    q: "AZ-104の合格率はどのくらいですか？",
    a: "Microsoftは合格率を公表していません。各社とも合格率は非公表が通例で、当サイトでは創作した数値は掲載しません。AZ-104は中級レベルで、AZ-900より実装寄り・難度が高く、PowerShellやARM/Bicepなどの実務的な理解が問われます（Microsoft Learn、2026年6月時点）。",
  },
  {
    q: "AZ-104に有効期限・更新はありますか？",
    a: "あります。AZ-104はロールベース認定のため、原則として12か月ごとの更新が必要です。更新はMicrosoft Learn上の無料のオンライン評価に合格することで行え、再受験は不要です。最新の更新ポリシーはMicrosoft Learnでご確認ください（2026年6月時点）。",
  },
  {
    q: "AZ-900を取らずに直接AZ-104を受けられますか？",
    a: "受けられます。AZ-900はAZ-104の前提条件ではありません。すでにインフラ運用・仮想化・ネットワークの実務経験があるミドルは、AZ-900を飛ばしてAZ-104を直接狙うのが効率的です。一方、Azure・クラウドが初めてで全体像が不安な場合は、AZ-900で基礎を素早く押さえてからAZ-104へ進むと学習がスムーズです。",
  },
];

const overviewTable = [
  ["主催", "Microsoft"],
  ["試験コード", "AZ-104"],
  ["レベル", "中級（アソシエイト／ロールベース）"],
  ["受験料", "165 USDが目安（受験国・為替で変動）"],
  ["試験時間", "100分"],
  ["合格基準", "1,000点満点中700点以上"],
  ["合格率", "Microsoftは合格率を公表していない"],
  ["更新", "原則12か月ごと（無料のオンライン評価で更新）"],
];

export default function CertAzureAdministratorPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/cert/azure-administrator/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "資格で選ぶ転職", href: "/cert/" },
          { name: "Azure Administrator（AZ-104）" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Microsoft Azure Administrator（AZ-104）は転職に効くか
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | Azure Administrator（AZ-104）の転職価値を30代・40代向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          Microsoft Azure Administrator Associate（AZ-104）は、Azure環境の実装・管理・監視・セキュリティ・ガバナンスを担う力を問う、Microsoft公式で<strong>『中級』</strong>に位置づけられるロールベース認定です。本記事は「AZ-104を取れば転職で有利になるか」という疑問に対し、<strong>『経験者の加点資格』</strong>という性格を軸に、公式情報（受験料・形式・合格基準・更新要件・出題範囲）をもとに整理します。資格単体では年収が跳ねないという限界も正直にお伝えします。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "Microsoft Learn 公式（learn.microsoft.com・AZ-104 認定情報）",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：AZ-104は誰に効く資格か</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              AZ-104は<strong>「経験者の加点資格」</strong>です。最も効くのは<strong>「インフラ運用・仮想化の実務 × Azure運用の証明」</strong>という掛け算で、Azure環境を任される運用・基盤ポジションで価値が出ます。入門のAZ-900と違い実装寄りで、実務とセットで評価されます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>インフラ運用の実務がある30〜40代</strong>：Azureを運用できることを証明し、運用・基盤職で加点される</li>
              <li>② <strong>クラウド完全未経験のミドル</strong>：まずAZ-900で全体像を掴むとAZ-104の学習がスムーズ</li>
              <li>③ <strong>更新は12か月ごと</strong>：無料のオンライン評価で更新でき、知識の鮮度を保てる</li>
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
            出典: Microsoft Learn 公式（learn.microsoft.com、2026年6月時点）。受験料は165 USDが目安（受験国・為替で変動）、試験時間100分、合格は1,000点満点中700点以上、更新は原則12か月ごと（無料のオンライン評価）。Microsoftは合格率を公表していません。正確な料金・条件はMicrosoft Learnでご確認ください。
          </p>
        </section>

        {/* 出題範囲 */}
        <section id="scope" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">出題範囲（5分野）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            AZ-104は、Microsoft公式の試験ページで次の5分野が評価対象とされています。概念の理解にとどまらず、PowerShell・Azure CLI・ARM/Bicepなどを用いた実装・運用が問われます。
          </p>
          <div className="space-y-3">
            {[
              { t: "Azure IDとガバナンスを管理する", d: "Microsoft Entra ID、ロール（RBAC）、サブスクリプション・ガバナンスの管理。" },
              { t: "ストレージの実装と管理", d: "ストレージアカウント、Blob・ファイル共有、アクセス制御とデータ保護。" },
              { t: "Azureの計算リソースを展開および管理する", d: "仮想マシン、コンテナ、App Serviceなどのコンピューティングの展開・運用。" },
              { t: "仮想ネットワークの実装と管理", d: "VNet、ロードバランサー、名前解決、ネットワークセキュリティの構成。" },
              { t: "Azureリソースの監視と保守", d: "Azure Monitor・バックアップ・復旧による、リソースの監視と継続性の確保。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 leading-relaxed mt-3">
            出典: Microsoft Learn 公式 試験ページ（AZ-104、2026年6月時点）。各分野の詳細なトピック・配点は公式の学習ガイドをご確認ください。
          </p>
        </section>

        {/* 30-40代の価値 */}
        <section id="value" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代経験者にとっての価値</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              Azureは官公庁・大企業を中心に採用が根強く、Microsoft 365との親和性からエンタープライズでの需要が安定しています。AZ-104は、<strong>オンプレや仮想化、ネットワークで培った運用経験を「Azure運用の実装スキル」に翻訳して示す</strong>道具になります。サーバー・仮想化・ネットワークの土台がある30〜40代にとって、AZ-104の出題内容は自分の経験と地続きで理解しやすいはずです。
            </p>
            <p>
              一方で過度な期待は禁物です。AZ-104は<strong>『Azure運用の実装スキルを体系的に持つ』ことの証明</strong>であって、それ単体で年収が跳ねる資格ではありません。価値が出るのは<strong>「インフラ運用実務 × 資格」の掛け算</strong>のとき。実際にAzure環境を構築・運用した経験と組み合わせて初めて、運用・基盤ポジションで結実します。なお更新が12か月ごとに必要な点も、取りっぱなしにできない要素として押さえておきましょう。
            </p>
            <p>
              さらに、AZ-104が扱うアイデンティティ管理（Microsoft Entra ID）やガバナンス、ネットワーク構成は、AWSの同等領域とも考え方が通じます。片方のクラウドで運用設計の勘所を身につけていれば、もう一方の理解は格段に速くなります。AWSの実務経験を持つミドルがAZ-104を取得すると、「どちらのクラウドでも基盤を任せられる人材」という希少なポジションに立てます。マルチクラウドや移行・統合の案件が増えるなか、この横断性は明確な差別化要因になります。
            </p>
            <p>
              年代別の市場感は<Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>、職種としての全体像は<Link href="/skill/azure/" className="text-petrol hover:underline">Azureエンジニア転職ガイド</Link>も合わせてご覧ください。
            </p>
          </div>
        </section>

        {/* 評価される場面 */}
        <section id="scenes" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職で評価される具体場面</h2>
          <div className="space-y-3">
            {[
              { t: "Azure基盤の運用・構築への配置", d: "VM・ネットワーク・ストレージの実装知識を示し、Azure環境の運用担当として加点される。" },
              { t: "Azure運用スキルの客観証明", d: "PowerShell・CLI・ARM/Bicepによる運用実装の知識を、応募時に客観的に示せる。" },
              { t: "資格手当・評価制度の対象", d: "Microsoft認定を手当・評価の対象とする企業が多く、社内評価の根拠になりやすい。" },
              { t: "マルチクラウド人材としての強み", d: "AWS×Azureの両方を扱える人材として、移行・統合案件で評価されやすい。" },
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
            AZ-104が土台として活きる代表的な進路です（一般的な整理。求人件数はリアルタイムで変動するため、最新は各エージェントでご確認ください）。
          </p>
          <div className="space-y-3">
            {[
              { t: "Azureインフラ／運用エンジニア", d: "Azure環境の構築・運用・監視を担う。実装寄りのAZ-104の知識が直接活きる。" },
              { t: "クラウドインフラエンジニア（マルチクラウド）", d: "AWSとAzureを横断する基盤人材として、統合・移行案件で評価される。" },
              { t: "社内SE・情シス（クラウド基盤担当）", d: "Microsoft 365と親和性の高いAzure基盤を、社内インフラとして運用する。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            インフラの土台は<Link href="/skill/infrastructure/" className="text-petrol hover:underline">インフラエンジニア転職ガイド</Link>、自動化方向は<Link href="/skill/devops/" className="text-petrol hover:underline">DevOpsエンジニア転職ガイド</Link>も参考にしてください。
          </p>
        </section>

        {/* 取得3ステップ */}
        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">取得3ステップ／前提と次の資格</h2>
          <div className="space-y-3 mb-6">
            {[
              { n: "STEP 1", t: "前提知識を確認（任意でAZ-900）", d: "クラウドが初めてならAZ-900で全体像を先に把握。実務経験者はそのままAZ-104へ。" },
              { n: "STEP 2", t: "Microsoft Learn＋ハンズオン", d: "公式の無料教材で5分野を学び、Azureポータル・PowerShell・CLIで実際に手を動かす。" },
              { n: "STEP 3", t: "合格→運用実務／上位資格へ", d: "合格後はAzure運用の実務で深め、AZ-305（ソリューションアーキテクト）など上位へ進む。" },
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
            前段の基礎は<Link href="/cert/azure-fundamentals/" className="text-petrol hover:underline">Azure Fundamentals（AZ-900）</Link>から。AWSと比較検討するなら<Link href="/cert/aws-saa/" className="text-petrol hover:underline">AWS認定SAA</Link>も併せてご覧ください。
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
          <h2 className="text-xl font-bold mb-3">Azure基盤・運用職への転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            AZ-104を活かせるAzure運用・基盤求人を、IT特化型エージェントであなたの市場価値とともに確認しましょう。
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
              { name: "Azure Fundamentals（AZ-900）", href: "/cert/azure-fundamentals/" },
              { name: "Azureエンジニア転職ガイド", href: "/skill/azure/" },
              { name: "AWS認定SAA（アソシエイト）", href: "/cert/aws-saa/" },
              { name: "インフラエンジニア転職ガイド", href: "/skill/infrastructure/" },
              { name: "DevOpsエンジニア転職ガイド", href: "/skill/devops/" },
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
