import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "DevSecOps転職ガイド｜DevOps・インフラからの移行ステップと職務経歴書",
  description:
    "DevOps／インフラ／セキュリティ担当からDevSecOpsエンジニアへ転職する方法を、スキルギャップ比較・在職中の移行ステップ・職務経歴書のBefore/After例文つきで解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：DevSecOps転職の現実性" },
  { id: "gap", label: "現職とのスキルギャップ比較表" },
  { id: "build", label: "必要スキルの身につけ方" },
  { id: "steps", label: "移行ステップ（在職中の準備）" },
  { id: "resume", label: "職務経歴書での見せ方（Before/After）" },
  { id: "salary", label: "年収の考え方" },
  { id: "agents", label: "おすすめの転職エージェント" },
  { id: "middle", label: "30代・40代がDevSecOpsを目指すなら" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const gapRows = [
  {
    skill: "CI/CDパイプライン構築",
    devops: "◎ 構築・運用が主業務",
    security: "△ 利用者として一部理解",
    devsecops: "◎ セキュリティスキャンを組み込む前提",
  },
  {
    skill: "脆弱性診断・セキュリティ知識",
    devops: "△ 基礎レベル",
    security: "◎ 診断・対策の専門知識",
    devsecops: "○ 実装に落とせる実務レベルが必要",
  },
  {
    skill: "SAST/DAST・スキャンツール",
    devops: "△ 導入経験は限定的",
    security: "○ ツールの知識はある",
    devsecops: "◎ パイプラインへの統合・運用まで",
  },
  {
    skill: "コンテナ・IaCセキュリティ",
    devops: "○ コンテナ/IaCの運用経験",
    security: "△ 構成面の知識は限定的",
    devsecops: "◎ Trivy/tfsec等で構成を継続検査",
  },
  {
    skill: "シークレット管理",
    devops: "○ Vault等の利用経験",
    security: "○ 管理ポリシーの知見",
    devsecops: "◎ ライフサイクル設計と漏洩検知まで",
  },
  {
    skill: "脅威モデリング・設計",
    devops: "△ 経験は少なめ",
    security: "◎ STRIDE等での脅威分析",
    devsecops: "◎ 設計段階での前倒し（Shift Left）",
  },
];

const buildSteps = [
  {
    title: "既存のCI/CDにセキュリティを「組み込む」経験を作る",
    desc: "GitHub Actions/GitLab CIにSAST（Snyk、SonarQube）やDAST（OWASP ZAP）を統合する実装を経験します。DevSecOpsの核心はセキュリティの前倒し（Shift Left）なので、後付けの検査ではなくパイプラインの一部として動かせることが重要です。",
  },
  {
    title: "コンテナ・IaCのセキュリティ検査を自動化する",
    desc: "Dockerイメージスキャン（Trivy）、Terraform/CloudFormationの設定スキャン（tfsec、Checkov）、Kubernetesのポリシー制御（OPA/Gatekeeper）を導入し、構成の逸脱を継続的に検知する仕組みを作ります。",
  },
  {
    title: "シークレット管理の運用を整える",
    desc: "Vault、AWS Secrets Manager、SOPSなどでシークレットのライフサイクルを設計し、Git履歴からの漏洩検知も組み込みます。『鍵が漏れない仕組み』を語れることはDevSecOps面接で強い武器になります。",
  },
  {
    title: "脅威モデリングで設計に踏み込む",
    desc: "STRIDEフレームワークでシステムの脅威を洗い出し、アーキテクチャ段階でリスクを下げる提案ができるようにします。実装だけでなく設計レビューに関与できると、シニア要件の求人に届きやすくなります。",
  },
  {
    title: "セキュリティ資格で独学を客観化する",
    desc: "AWS Security Specialty、CompTIA Security+、コンテナ領域ならCKS（Certified Kubernetes Security Specialist）などで、独学した知識を第三者に証明できる形にします。上級者向けにはCISSPもあります。",
  },
];

const transitionSteps = [
  {
    phase: "現職での準備（〜3ヶ月）",
    items: [
      "今のCI/CDに脆弱性スキャンを1つ追加し、検知→修正のフローを実務に持ち込む",
      "コンテナイメージやIaCのスキャンを試験導入し、検出した問題と対応を記録する",
      "セキュリティ観点のコードレビュー・改善提案を起案し、Shift Leftの実績を作る",
    ],
  },
  {
    phase: "スキル証明づくり（3〜6ヶ月）",
    items: [
      "SAST/DASTを統合したCI/CDのサンプルプロジェクトをGitHubで公開する",
      "AWS Security Specialtyなど、強みを補強する資格を1つ選んで取得を進める",
      "脅威モデリングのドキュメント（設計レビュー資料）をポートフォリオ化する",
    ],
  },
  {
    phase: "応募・面接フェーズ（6ヶ月〜）",
    items: [
      "IT特化型・ハイクラス系エージェントに登録し、DevSecOps求人の要件をすり合わせる",
      "職務経歴書を『運用・開発実績』から『セキュリティをどう前倒しで仕込んだか』に書き換える",
      "面接に向け、検知した脆弱性とその対応・再発防止を具体的に説明できるよう整理する",
    ],
  },
];

const faqs = [
  {
    q: "DevSecOpsとDevOpsの違いは？",
    a: "DevOpsに「Security」を統合したのがDevSecOpsです。開発・運用のパイプラインにセキュリティチェックを組み込み、セキュリティを開発プロセスの一部として自動化します。セキュリティを後工程ではなく前倒しで仕込むShift Leftが核心の概念です。",
  },
  {
    q: "DevOpsエンジニアからDevSecOpsへの転身は容易？",
    a: "DevOpsの基盤がある人は移行しやすい部類です。不足しがちなのは脆弱性診断・セキュリティ設計の知識なので、既存のCI/CDにSAST/DASTやコンテナスキャンを組み込んだ実績を作ると、書類・面接で説得力が出ます。",
  },
  {
    q: "セキュリティ担当からDevSecOpsへは行ける？",
    a: "可能です。診断・対策の知識はそのまま活きるため、不足しがちなCI/CD構築・IaC・コンテナ運用の実装力を補えば移行できます。『検査する側』から『仕組みに組み込む側』へ視点を広げるのがポイントです。",
  },
  {
    q: "DevSecOpsに必要な資格は？",
    a: "AWS Security Specialty、CompTIA Security+、上級者向けのCISSPが代表的です。コンテナ領域ではCKS（Certified Kubernetes Security Specialist）がコンテナセキュリティの証明として評価されます。資格は必須ではありませんが書類選考で有効です。",
  },
  {
    q: "DevSecOps導入企業はどんな業界に多い？",
    a: "金融、医療、EC、SaaSなどコンプライアンス要件が厳しい業界に多い傾向です。クラウドネイティブ化が進んだ企業ほど、セキュリティを開発プロセスに組み込む専門人材の需要が高まっています。",
  },
  {
    q: "DevSecOpsの将来性は？",
    a: "サイバー攻撃の増加とクラウドネイティブ化の進展により、需要は今後も拡大が見込まれます。特にサプライチェーンセキュリティの重要性が高まっており、開発・運用とセキュリティを両立できる人材は希少です。",
  },
  {
    q: "30代・40代からのDevSecOps転職は不利？",
    a: "セキュリティは経験と判断の蓄積が活きる領域で、ミドル層の知見が評価されやすい職種です。年齢より、セキュリティをパイプラインに組み込んだ具体的な実績と、リスクを言語化して提案できる力が重視されます。",
  },
  {
    q: "DevSecOpsの求人はどのエージェントで探せばいい？",
    a: "IT特化型のレバテックキャリアはセキュリティエンジニア求人を扱い、技術面談の対策も得られます。年収帯の高い専門ポジションを狙う場合はビズリーチなどハイクラス系の併用が有効です。",
  },
];

const related = [
  { name: "SRE転職ガイド", href: "/career/sre/" },
  { name: "CRE転職ガイド", href: "/career/cre/" },
  { name: "セキュリティスキルと転職ガイド", href: "/skill/security/" },
  { name: "Kubernetesスキルと転職ガイド", href: "/skill/kubernetes/" },
  { name: "ハイクラス向けエージェント比較", href: "/compare/highclass/" },
  { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
];

export default function DevsecopsPage() {
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
      <ArticleJsonLd
        title="DevSecOps転職ガイド｜DevOps・インフラからの移行ステップと職務経歴書"
        description="DevOps／インフラ／セキュリティ担当からDevSecOpsエンジニアへ転職する方法を、スキルギャップ比較・在職中の移行ステップ・職務経歴書のBefore/After例文つきで解説します。"
        url="/career/devsecops/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "DevSecOps転職ガイド" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          DevSecOps転職ガイド｜DevOps・インフラからの移行ステップ
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | セキュリティを「開発に組み込む力」に翻訳して転職する
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          DevSecOpsは、開発・セキュリティ・運用を統合し、セキュリティを開発プロセスの前段から仕込む（Shift Left）アプローチです。DevOps／インフラの基盤がある人や、セキュリティ専門の知見を持つ人にとって、現職の蓄積を活かしやすいキャリアパスです。このページでは、現職とのスキルギャップ、在職中の移行ステップ、職務経歴書での見せ方までを具体的に解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表 年代別平均年収（2025年）",
            "doda 決定年収レポート（2025年5月公表）",
            "経済産業省 IT人材需給に関する調査（2019年公表）",
          ]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-petrol hover:underline text-sm">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：DevSecOps転職の現実性</h2>
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>DevOps・インフラ・セキュリティのいずれかの基盤があれば、DevSecOps転職は十分に現実的です。</strong>
              ただし「セキュリティを開発に組み込んだ実績」を示せるかが分かれ目になります。
            </p>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li>① DevOps出身なら<strong>セキュリティ知識</strong>、セキュリティ出身なら<strong>CI/CD・IaC実装</strong>がギャップになりやすい</li>
              <li>② 既存のパイプラインにSAST/DASTやコンテナスキャンを組み込んだ実績を1つ作る</li>
              <li>③ セキュリティ人材は慢性的に不足しており、両立人材はミドル層でも需要が高い</li>
            </ul>
          </div>
        </section>

        <section id="gap" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">現職とのスキルギャップ比較表</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            DevSecOpsに求められるスキルを、DevOpsエンジニア・セキュリティ担当の典型的な経験と比較しました。◎＝十分／○＝経験あり／△＝補強が必要、の目安です。出発点によって埋めるべきギャップが異なります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-petrol-soft">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">必要スキル</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">DevOps出身</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">セキュリティ出身</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">DevSecOpsで求められる水準</th>
                </tr>
              </thead>
              <tbody>
                {gapRows.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200 align-top">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.skill}</td>
                    <td className="px-4 py-3 text-slate-600">{row.devops}</td>
                    <td className="px-4 py-3 text-slate-600">{row.security}</td>
                    <td className="px-4 py-3 text-slate-600">{row.devsecops}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="build" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">必要スキルの身につけ方</h2>
          <div className="space-y-4">
            {buildSteps.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">移行ステップ（在職中にできる準備）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            DevSecOpsへの移行は、今のCI/CDやインフラにセキュリティを少しずつ組み込みながら進めるのが効率的です。「検知して終わり」ではなく「修正・再発防止までやり切った」経験が、職務経歴書の核になります。
          </p>
          <div className="space-y-5">
            {transitionSteps.map((step, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <span className="text-petrol">STEP {i + 1}</span>
                  {step.phase}
                </h3>
                <ul className="space-y-2">
                  {step.items.map((it, j) => (
                    <li key={j} className="flex gap-2 text-sm text-slate-600">
                      <span className="text-petrol shrink-0">✓</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="resume" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">職務経歴書での見せ方（Before/After例文）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            DevOpsやインフラの経歴は、書き方次第でDevSecOps適性が伝わります。ポイントは「セキュリティをどこで・どう前倒しで仕込んだか」を、検知件数や再発防止の視点で書くことです。
          </p>

          <div className="space-y-5">
            <div className="border border-rose-200 bg-rose-50 rounded-lg p-5">
              <p className="font-bold text-rose-700 text-sm mb-2">Before（CI/CD構築の事実だけの例）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                GitHub ActionsでCI/CDパイプラインを構築。自動テストとデプロイを整備し、コンテナでアプリをデプロイ。脆弱性対応はセキュリティ担当からの指摘を受けて随時修正した。
              </p>
            </div>
            <div className="border border-emerald-200 bg-emerald-50 rounded-lg p-5">
              <p className="font-bold text-emerald-700 text-sm mb-2">After（セキュリティの前倒しを主語にした例）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                GitHub ActionsのCI/CDに、SAST（Snyk）とコンテナイメージスキャン（Trivy）、IaCスキャン（tfsec）を統合し、プルリクエスト段階で脆弱性を検出・ブロックする仕組みを構築（Shift Left）。リリース後に発覚していた指摘をパイプラインで前倒し検知できるようにし、手戻りを削減。シークレットはVaultで集中管理し、Git履歴からの漏洩検知を導入。検出した重大度の高い脆弱性については、修正と再発防止のルール化までを主導した。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-sm text-slate-600 leading-relaxed">
              <p className="font-bold text-slate-700 mb-2">改善のポイント</p>
              <ul className="space-y-1">
                <li>・「指摘を受けて修正」→「パイプラインで前倒し検知（Shift Left）」と能動的な表現に変換</li>
                <li>・SAST/DAST・コンテナ/IaCスキャン・シークレット管理を具体ツール名で示す</li>
                <li>・検知件数・手戻り削減・再発防止のルール化など、出せる範囲で成果を添える</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            DevSecOps単独の公的な平均年収統計は確認できないため、ミドル層全体の客観データを基準に考えます。レバテックが公表した正社員SEの年代別平均年収（2025年）は、30代で約499万円、40代で約618万円です。セキュリティ人材は慢性的に不足しており、DevOpsとセキュリティを両立できる人材は希少性が高いため、これより上のレンジを狙える可能性があります。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            doda（パーソルキャリア）の「決定年収レポート」（2025年5月公表）では、IT・通信エンジニアの平均決定年収は2023年度の469万円から2024年度の486万円へ上昇し、転職者の約6割が年収アップを実現しています。専門性の高いポジションは企業による幅が大きいため、ハイクラス系も含め複数社で比較するとレンジ感をつかめます。
          </p>
          <p className="text-slate-500 text-xs leading-relaxed">
            出典: レバテック公表 年代別平均年収（2025年・career.levtech.jp/freelance.levtech.jpガイド記事）／doda「決定年収レポート」（2025年5月公表）。
          </p>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">おすすめの転職エージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            DevSecOps求人は要件が専門的なため、技術理解のあるアドバイザーがいるサービスと、ハイクラス求人を扱うスカウト型を併用すると進めやすくなります。
          </p>
          <div className="space-y-3">
            {[
              {
                name: "レバテックキャリア",
                point:
                  "IT/Web特化でセキュリティエンジニア求人を扱い、技術に詳しいアドバイザーが在籍。書類添削・技術面談対策のサポートが受けられます。",
              },
              {
                name: "ビズリーチ",
                point:
                  "ハイクラス・スカウト型。年収750万円以上の定義でハイレンジ求人が中心。専門性の高いセキュリティポジションのスカウトで市場価値を測れます。",
              },
              {
                name: "マイナビIT AGENT",
                point:
                  "大手企業のセキュリティ部門求人を扱い、書類添削・面接対策が手厚いと評判。コンプライアンス要件の厳しい業界への応募で頼りになります。",
              },
            ].map((agent, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{agent.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{agent.point}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代がDevSecOpsを目指すなら</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>
              DevSecOpsは、システムを長く運用し、トラブルやインシデントの怖さを知っているほど判断の質が上がる職種です。ミドル層が積み重ねた「事故を起こさない設計」「組織を巻き込んだルール化」の経験は、そのままセキュリティの前倒し（Shift Left）を進める強みになります。
            </p>
            <p>
              一方で差がつきやすいのは「セキュリティを自動化として実装する力」です。検査を人手で回してきた場合は、CI/CDにスキャンを組み込んだ実績を在職中に1つ作り、職務経歴書で示せるようにしておきましょう。
            </p>
            <p>
              専門性の高いポジションは年収交渉の余地も大きいため、
              <Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収相場</Link>
              や
              <Link href="/compare/highclass/" className="text-petrol hover:underline">ハイクラス向けエージェントの比較</Link>
              を押さえてから臨むと、提示レンジの妥当性を判断しやすくなります。
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
                <div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">DevSecOps転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            セキュリティ×開発のキャリアを、IT特化型エージェントがサポートします。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((item, i) => (
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
