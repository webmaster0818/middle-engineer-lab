import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "DevOpsエンジニアの転職完全ガイド｜年収・必須スキル・SREとの違い【2026年】";
const PAGE_DESC =
  "DevOpsエンジニアの転職を2026年最新データで解説。SRE・インフラとの違い（開発と運用の橋渡し vs 信頼性のエンジニアリング）、CI/CD・IaC・コンテナ・監視の必須スキル、年収1,000万円超の現実性、未経験歓迎と即戦力高報酬の二極化を30代・40代向けにまとめました。";

export const metadata: Metadata = {
  alternates: { canonical: "/skill/devops/" },
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "diff", label: "結論：SRE・インフラとの違い" },
  { id: "market", label: "市場・年収データ" },
  { id: "cicd", label: "CI/CDが必須である理由" },
  { id: "skill", label: "横断スキル（IaC・コンテナ・監視）" },
  { id: "polar", label: "未経験歓迎と高報酬の二極化" },
  { id: "level", label: "求められる経験レベル" },
  { id: "path", label: "キャリアパスの選択肢" },
  { id: "entry", label: "未経験・経験浅めからのロードマップ" },
  { id: "middle", label: "30代・40代の視点とデメリット" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "DevOpsエンジニアとSREの違いは何ですか？",
    a: "重なる部分は多いですが、重心が違います。DevOpsは「開発（Dev）と運用（Ops）の橋渡し」を文化と自動化で実現する考え方・役割で、リリースを速く・安全に回すことが軸です。一方SRE（Site Reliability Engineering）は「サービスの信頼性をエンジニアリングで担保する」職で、SLI/SLO・エラーバジェットなど信頼性の数値設計が軸です。ざっくり言えば、DevOpsは『速く届ける文化と仕組み』、SREは『止まらない仕組み』に寄ります。SREの詳細は",
    aLink: { href: "/career/sre/", label: "SREへの転向ガイド" },
    aTail: "をご覧ください。",
  },
  {
    q: "DevOpsエンジニアとインフラエンジニアの違いは？",
    a: "インフラエンジニアはサーバー・ネットワーク・OSなど基盤の構築・運用が中心ですが、DevOpsエンジニアはそこにCI/CD・自動化・開発プロセス改善を加え、開発チームと一体で素早いリリースを実現する役割です。インフラの土台がある人がCI/CDやIaC、コンテナを身につけてDevOps領域へ広げる、というキャリアが王道です。基盤側は",
    aLink: { href: "/skill/infrastructure/", label: "インフラエンジニア転職ガイド" },
    aTail: "が参考になります。",
  },
  {
    q: "DevOpsエンジニアの平均年収はどのくらいですか？",
    a: "DevOps専用の公的統計は確認しにくいため、近接区分の参考値を示します。求人ボックス給料ナビではソフトウェアエンジニア約511万円、システムエンジニア約516万円です（2026年6月時点・動的に変動）。DevOps領域は自動化スキルが評価され、これらより上振れしやすい傾向です。媒体推定では500〜800万円が中心で、高スキル層は初年度から1,000万円超の求人も見られます（各社推定・幅あり）。求人サービスのGreenには「DevOps 950万円以上」のカテゴリも実在します（2026年6月時点）。単一の数値で断定せず、スキルで変わる前提でご覧ください。",
  },
  {
    q: "DevOpsエンジニアにCI/CDは必須ですか？",
    a: "実質的に必須です。Jenkins、GitHub Actions、GitLab CI、AWS CodePipeline、Google Cloud Buildなどを使い、ビルド・テスト・デプロイを自動化するのがDevOpsの中核業務だからです。どれか一つを深く理解すれば、他のツールへの応用も効きます。CI/CDを語れるかどうかが、書類・面接の評価を大きく左右します。",
  },
  {
    q: "DevOpsエンジニアは未経験でもなれますか？",
    a: "求人は『未経験歓迎』と『即戦力で高報酬』に二極化しています。未経験歓迎枠は、インフラや開発の基礎経験がある人がCI/CD・IaCを学んで入るルートが現実的です。一方で高報酬枠はKubernetes運用やマルチクラウド、自動化の実績が前提になります。まずは小さくてもCI/CDパイプラインを自作した成果物を作るのが入口です。",
  },
  {
    q: "40代でもDevOpsエンジニアへ転職できますか？",
    a: "可能です。DevOpsはツールだけでなく『開発と運用の文化を橋渡しする』調整力が問われるため、チームをまとめてきたミドルの経験が活きます。レバテック公表の正社員SE年代別平均は40代約618万円、年収1,000万円以上の割合は40代で12.67%（2025年）と、ミドルでも高年収帯が一定数あります。自動化の実績と組織改善の経験をセットで示すのが鍵です。",
  },
];

const salaryRef = [
  ["ソフトウェアエンジニア", "約511万円", "DevOps領域はここから上振れしやすい"],
  ["システムエンジニア（SE）", "約516万円", "自動化スキルで一段上を狙える"],
];

const cicdTools = [
  ["Jenkins", "歴史が長くオンプレ・受託で根強い。柔軟だが運用知識が要る"],
  ["GitHub Actions", "GitHubと統合され導入が容易。近年採用が広い"],
  ["GitLab CI", "GitLab一体型。セルフホスト・エンタープライズで使われる"],
  ["AWS CodePipeline", "AWS環境での標準的な選択肢の一つ"],
  ["Google Cloud Build", "GCP環境でのビルド・デプロイ自動化"],
];

export default function DevopsSkillPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a + (faq.aLink ? `（${faq.aLink.label}）${faq.aTail ?? ""}` : ""),
      },
    })),
  };

  return (
    <>
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/skill/devops/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "DevOpsエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          DevOpsエンジニアの転職完全ガイド｜年収・必須スキル・SREとの違い【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | DevOpsスキルを活かした転職を30代・40代向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          「DevOps」「SRE」「インフラ」は混同されがちですが、転職市場では明確に役割が分かれます。DevOpsは<strong>開発と運用の橋渡しを文化と自動化で実現する役割</strong>、SREは<strong>信頼性をエンジニアリングで担保する役割</strong>です。本記事は、すでに公開している
          <Link href="/career/sre/" className="text-petrol hover:underline">SREへの転向ガイド</Link>
          と検索意図を分け、「<strong>CI/CDと自動化で開発を速くするDevOpsエンジニア</strong>」に焦点を当てて整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "求人ボックス 給料ナビ（2026年6月時点・動的・近接区分）",
            "Green DevOpsカテゴリ（2026年6月時点）",
            "レバテック「DevOpsエンジニアとは」解説（一次解説）",
            "レバテック公表 年代別平均年収（2025年）",
          ]}
        />

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

        <section id="diff" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：SRE・インフラとの違い</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              先に結論です。DevOps転職を成功させる軸は、<strong>「自動化で開発を速く・安全に回せること」を実績で示すこと</strong>です。攻め方は次の3点です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>CI/CD（Jenkins / GitHub Actions / GitLab CI 等）</strong>のパイプライン構築を中核実績にする</li>
              <li>② <strong>IaC・コンテナ・監視</strong>を横断的に押さえ、「開発と運用をつなぐ」ことを語れるようにする</li>
              <li>③ 信頼性に寄せるなら<strong>SRE</strong>、基盤に寄せるなら<strong>インフラ</strong>へ、自分の重心を明確にする</li>
            </ul>
            <p className="text-xs text-slate-600 mt-3">
              信頼性の数値設計を極めるなら
              <Link href="/career/sre/" className="text-petrol-deep underline">SRE</Link>、
              基盤構築なら
              <Link href="/skill/infrastructure/" className="text-petrol-deep underline ml-0">インフラ</Link>
              が隣接領域です。
            </p>
          </div>
        </section>

        <section id="market" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">市場・年収データ</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            DevOps専用の公的統計は確認しにくいため、近接区分の参考値を示します。求人ボックス給料ナビの値は次のとおりです（2026年6月時点・動的に変動する集計値）。DevOps領域は自動化スキルが評価され、これらより<strong>上振れしやすい</strong>傾向です。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">近接区分</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">平均年収（参考）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">DevOps転職での見方</th>
                </tr>
              </thead>
              <tbody>
                {salaryRef.map(([k, v, note], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{k}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{v}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            媒体推定では500〜800万円が中心で、高スキル層は初年度から1,000万円超の求人も見られます（各社推定・幅あり）。求人サービスのGreenには「DevOps 950万円以上」のカテゴリも実在します（2026年6月時点）。<strong>年収1,000万円超は実在しますが、Kubernetes運用・マルチクラウド・高度な自動化の実績が前提</strong>で、誰でも到達する水準ではない点に注意してください。
          </p>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: 求人ボックス給料ナビ（2026年6月時点・動的・近接区分）、Green DevOpsカテゴリ（2026年6月時点・実在カテゴリ）、レバテック「DevOpsエンジニアとは」解説、レバテック公表の年代別平均年収（2025年／40代約618万円、年収1,000万円以上の割合は40代で12.67%）。
          </p>
        </section>

        <section id="cicd" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">CI/CDが必須である理由</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            DevOpsの中核はCI/CD（継続的インテグレーション／継続的デリバリー）です。ビルド・テスト・デプロイを自動化し、リリースを速く安全に回す仕組みを作るのが主業務です。代表的なツールを押さえておきましょう。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">CI/CDツール</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">特徴・使われ方</th>
                </tr>
              </thead>
              <tbody>
                {cicdTools.map(([k, v], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{k}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            すべてを使える必要はありません。どれか一つを深く理解すれば、他のツールへの応用が効きます。
          </p>
        </section>

        <section id="skill" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">横断スキル（IaC・コンテナ・監視）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            DevOpsはCI/CDだけでなく、インフラ・運用を横断するスキルが求められます。
          </p>
          <div className="space-y-3">
            {[
              { t: "IaC（Infrastructure as Code）", d: "Terraform等でインフラをコード管理。手作業を排し、再現性とレビュー可能性を高める。" },
              { t: "コンテナ（Docker / Kubernetes）", d: "アプリをコンテナ化し、Kubernetesでオーケストレーション。スケーラブルな運用の土台。" },
              { t: "監視・オブザーバビリティ", d: "メトリクス・ログ・トレースを集約し、問題を早期検知。Prometheus/Grafana等が代表。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            コンテナは
            <Link href="/skill/kubernetes/" className="text-petrol hover:underline">Kubernetes転職ガイド</Link>、
            IaCは
            <Link href="/skill/terraform/" className="text-petrol hover:underline">Terraform転職ガイド</Link>、
            クラウド基盤は
            <Link href="/skill/aws/" className="text-petrol hover:underline">AWSエンジニア転職ガイド</Link>
            が接続先です。
          </p>
        </section>

        <section id="polar" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">未経験歓迎と高報酬の二極化</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            DevOps求人は大きく二極化しています。この構造を理解すると、自分がどちらを狙うべきか整理できます。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">未経験歓迎枠</h3>
              <p className="text-sm text-slate-600">インフラ・開発の基礎がある人が、CI/CD・IaCを学んで入るルート。年収は標準的だが入口として現実的。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">即戦力・高報酬枠</h3>
              <p className="text-sm text-slate-600">Kubernetes運用・マルチクラウド・高度な自動化の実績が前提。年収1,000万円超も視野に入る。</p>
            </div>
          </div>
        </section>

        <section id="level" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベル</h2>
          <div className="space-y-3">
            {[
              { t: "入口層（CI/CD導入）", d: "GitHub Actions等でビルド・テスト・デプロイを自動化。Docker基礎とスクリプティングが問われる。" },
              { t: "中核層（IaC・コンテナ運用）", d: "Terraformでの構成管理、Kubernetes運用、監視の整備。年収帯が一段上がるゾーン。" },
              { t: "上級層（プラットフォーム・組織改善）", d: "開発生産性を高める内部基盤づくり、組織横断のDevOps文化推進。マネジメント要素も評価される。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="path" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キャリアパスの選択肢</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">プラットフォームエンジニア路線</h3>
              <p className="text-sm text-petrol-deep">
                社内開発者向けの基盤（内部開発者プラットフォーム）を整える方向。開発生産性の向上が成果指標になります。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">SRE路線</h3>
              <p className="text-sm text-petrol-deep">
                信頼性の数値設計（SLI/SLO）に重心を移す方向。
                <Link href="/career/sre/" className="text-petrol-deep underline ml-1">SREへの転向ガイド</Link>
                が参考になります。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">クラウド/セキュリティ特化路線</h3>
              <p className="text-sm text-petrol-deep">
                自動化にセキュリティを組み込む方向。
                <Link href="/career/devsecops/" className="text-petrol-deep underline ml-1">DevSecOpsキャリア</Link>
                へ接続します。
              </p>
            </div>
          </div>
        </section>

        <section id="entry" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">未経験・経験浅めからのロードマップ</h2>
          <div className="space-y-3">
            {[
              { n: "STEP 1", t: "土台の棚卸し", d: "Linux・ネットワーク・開発（いずれか）の基礎を整理。DevOpsの土台になる。" },
              { n: "STEP 2", t: "CI/CDを自作", d: "GitHub Actionsで小さなアプリのビルド・テスト・デプロイを自動化する。" },
              { n: "STEP 3", t: "IaC・コンテナ化", d: "Dockerでコンテナ化し、Terraformでインフラをコード管理。GitHubに公開する。" },
              { n: "STEP 4", t: "自動化ストーリーで応募", d: "『手作業をどれだけ自動化し、リリースをどう速くしたか』を職務経歴書に落とし込む。" },
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
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            関連: <Link href="/career/support-to-infra/" className="text-petrol hover:underline">運用保守からインフラ・クラウドへの転向</Link>、<Link href="/knowledge/portfolio/" className="text-petrol hover:underline">エンジニアのポートフォリオの作り方</Link>。
          </p>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の視点とデメリット</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              DevOpsは「ツール」だけの仕事ではありません。<strong>開発チームと運用チームの間に立ち、文化と仕組みの両方を変える調整力</strong>が問われます。チームをまとめ、組織を動かしてきたミドルの経験は、ここで強みになります。
            </p>
            <p>
              <strong>デメリット・注意点も正直に書きます。</strong>DevOpsは扱う技術の幅が広く、CI/CD・IaC・コンテナ・クラウド・監視を横断的にキャッチアップし続ける負荷があります。また「DevOpsエンジニア」という求人名でも、実態はただのインフラ運用や雑務対応の場合があるため、求人の中身（自動化をどこまで任されるか）を見極める必要があります。年収1,000万円超は実在しますが、高スキルが前提で、誰でも到達する水準ではありません。
            </p>
            <p>
              年代別の市場感は
              <Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職</Link>・
              <Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>、
              年収交渉は
              <Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉のコツ</Link>
              も合わせてご覧ください。
            </p>
          </div>
        </section>

        <section id="faq" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800">
                  <span>Q. {faq.q}</span>
                  <span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span>
                </summary>
                <div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">
                  A. {faq.a}
                  {faq.aLink && (
                    <>
                      <Link href={faq.aLink.href} className="text-petrol hover:underline">{faq.aLink.label}</Link>
                      {faq.aTail}
                    </>
                  )}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">DevOpsスキルを活かした転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            CI/CD・自動化案件に強いIT特化型エージェントで、あなたのDevOpsスキルの市場価値を確認しましょう。
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
              { name: "SREへの転向ガイド", href: "/career/sre/" },
              { name: "Kubernetes/コンテナ転職ガイド", href: "/skill/kubernetes/" },
              { name: "Terraform/IaC転職ガイド", href: "/skill/terraform/" },
              { name: "AWSエンジニア転職ガイド", href: "/skill/aws/" },
              { name: "インフラエンジニア転職ガイド", href: "/skill/infrastructure/" },
              { name: "スキル別転職ガイド一覧", href: "/skill/" },
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
