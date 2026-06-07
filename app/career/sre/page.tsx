import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "SRE転職ガイド｜インフラ・バックエンドからの移行ステップと職務経歴書",
  description:
    "インフラ／バックエンドエンジニアからSRE（Site Reliability Engineer）へ転職する方法を、スキルギャップ比較・在職中の移行ステップ・職務経歴書のBefore/After例文つきで解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：SRE転職の現実性" },
  { id: "gap", label: "現職とのスキルギャップ比較表" },
  { id: "build", label: "必要スキルの身につけ方" },
  { id: "steps", label: "移行ステップ（在職中の準備）" },
  { id: "resume", label: "職務経歴書での見せ方（Before/After）" },
  { id: "salary", label: "年収の考え方" },
  { id: "agents", label: "おすすめの転職エージェント" },
  { id: "middle", label: "30代・40代がSREを目指すなら" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const gapRows = [
  {
    skill: "サーバー・ネットワーク運用",
    infra: "◎ 構築・運用が主業務",
    backend: "△ 利用者側として一定の理解",
    sre: "○ 前提知識として必要（深さより信頼性視点）",
  },
  {
    skill: "クラウド（AWS/GCP）",
    infra: "○ マネージドサービスの構築経験",
    backend: "○ アプリのデプロイ先として利用",
    sre: "◎ マルチAZ・オートスケール・障害設計まで",
  },
  {
    skill: "プログラミング（Go/Python）",
    infra: "△ シェル中心、本格的な開発は少なめ",
    backend: "◎ アプリ開発で日常的に使用",
    sre: "◎ 自動化ツール・運用基盤をコードで実装",
  },
  {
    skill: "IaC（Terraform等）",
    infra: "○ 導入が進む現場では経験あり",
    backend: "△ 触れる機会が限定的",
    sre: "◎ インフラ全体をコード管理する前提",
  },
  {
    skill: "監視・SLI/SLO設計",
    infra: "○ 死活監視・アラート運用の経験",
    backend: "△ アプリメトリクスの計装程度",
    sre: "◎ SLO設計とエラーバジェット運用が中核",
  },
  {
    skill: "ソフトウェアエンジニアリング思考",
    infra: "△ 手順書・手作業文化が残る場合も",
    backend: "◎ 設計・テスト・レビューの習慣",
    sre: "◎ トイル削減を開発として進める姿勢",
  },
];

const buildSteps = [
  {
    title: "クラウドを「信頼性視点」で学び直す",
    desc: "すでにAWS/GCPの構築経験があっても、SREでは可用性・耐障害性・コスト最適化の観点が問われます。マルチAZ構成、オートスケーリング、障害注入（カオスエンジニアリングの初歩）を、設計意図を説明できるレベルまで言語化しておきます。",
  },
  {
    title: "コンテナ・Kubernetesの運用経験を積む",
    desc: "Docker／Kubernetes（EKS・GKE）の運用は多くのSRE求人で前提になります。個人環境でクラスタを立て、Helmでのデプロイ、ローリングアップデート、リソース制限の設計までを一通り経験しておくと、面接での具体性が増します。",
  },
  {
    title: "IaCとCI/CDを自分の手で組む",
    desc: "Terraformでインフラをコード化し、GitHub Actions等でplan/applyを自動化するワークフローを作ります。手作業を一つずつコードに置き換えた経験は、SREの本質である『トイル削減』の実績として語れます。",
  },
  {
    title: "Go/Pythonで運用自動化ツールを作る",
    desc: "SREはソフトウェアエンジニアリングで運用課題を解く職種です。アラート集約、定期バッチ、簡易な内製ツールなどをGoやPythonで実装し、コードを公開できる形（GitHub）にしておくと評価されやすくなります。",
  },
  {
    title: "監視基盤とSLO設計に触れる",
    desc: "Prometheus＋Grafana、Datadog、OpenTelemetryなどでメトリクス・ログ・トレースを統合し、SLI/SLOを定義する一連の流れを経験します。『どの指標を、なぜそのしきい値にしたか』を説明できると、SREとしての思考が伝わります。",
  },
];

const transitionSteps = [
  {
    phase: "現職での準備（〜3ヶ月）",
    items: [
      "今の運用業務の中で『手作業で繰り返しているもの＝トイル』を洗い出し、1つでもスクリプト／IaCで自動化する",
      "障害対応・改善の記録を、課題→対応→再発防止の構造でメモに残す（職務経歴書の素材になる）",
      "監視・アラートの改善提案を1件起案し、SLI/SLOの考え方を実務に持ち込む",
    ],
  },
  {
    phase: "スキル証明づくり（3〜6ヶ月）",
    items: [
      "Terraform＋CI/CDの個人プロジェクトをGitHubで公開する",
      "Go/Pythonで作った運用自動化ツールをポートフォリオ化する",
      "AWS SAP・GCP Professional Cloud Architect・CKAなど、強みを補強する資格を1つ選んで取得を進める",
    ],
  },
  {
    phase: "応募・面接フェーズ（6ヶ月〜）",
    items: [
      "IT特化型エージェントに登録し、SRE求人の要件レベル感をすり合わせる",
      "職務経歴書を『運用実績』から『信頼性をどう改善したか』の表現に書き換える",
      "技術面談に向け、過去の障害対応をSLO・エラーバジェットの言葉で説明できるよう整理する",
    ],
  },
];

const faqs = [
  {
    q: "SREとインフラエンジニアの違いは？",
    a: "インフラエンジニアはサーバー・ネットワークの構築運用が中心ですが、SREはソフトウェアエンジニアリングのアプローチでシステムの信頼性を高めます。SLI/SLOの設定、トイル（手作業の繰り返し）の削減、自動化が主要業務で、運用課題をコードで解く点が大きな違いです。",
  },
  {
    q: "SREに必要なプログラミングスキルはどれくらい？",
    a: "Go・Python・Bashでの自動化スクリプト作成が最低限で、加えてTerraformなどのIaCツール、CI/CDパイプラインの構築経験が求められます。アプリ機能の開発ほど高度でなくても、運用基盤を自分で書ける水準は必要です。",
  },
  {
    q: "インフラエンジニアからSREへの転職は可能？",
    a: "インフラ運用の経験があれば有力な出発点です。不足しがちなのはプログラミングとIaC、SLO設計の経験なので、在職中に手作業を自動化した実績を作り、Go/Pythonでのツール開発をポートフォリオ化すると移行しやすくなります。",
  },
  {
    q: "SRE未経験・完全異職種からでも狙える？",
    a: "完全未経験からの直接転職は難しめです。一般的にはインフラエンジニアやバックエンドエンジニアを経由し、運用と開発の両方の素地を作ってからSREポジションに挑むルートが現実的です。",
  },
  {
    q: "SREに必要な資格は？",
    a: "AWS SAP（ソリューションアーキテクト プロフェッショナル）、GCP Professional Cloud Architect、CKA（Certified Kubernetes Administrator）が代表的です。資格は必須ではありませんが、独学スキルの客観的な証明として書類選考で有効に働きます。",
  },
  {
    q: "SREのオンコール対応は大変？",
    a: "オンコールは多くのSREチームで必要ですが、ローテーション制で運用されるのが一般的です。SLOベースの運用で不要なアラートを減らす取り組みが進んでおり、面接時に運用負荷やオンコール体制を確認しておくと入社後のミスマッチを防げます。",
  },
  {
    q: "30代・40代からのSRE転職は遅い？",
    a: "SREは運用経験と設計判断の蓄積が活きる職種で、ミドル層の知見が評価されやすい領域です。年齢より、信頼性を改善した具体的な実績と、それをSLOの言葉で語れるかが重視されます。",
  },
  {
    q: "SREの求人はどのエージェントで探せばいい？",
    a: "IT/Web特化型のレバテックキャリアは技術理解のあるアドバイザーが在籍しSRE系求人を扱っています。スカウト型のサービスを併用すると、自分の市場価値を客観的に把握しながら進められます。",
  },
];

const related = [
  { name: "CRE転職ガイド", href: "/career/cre/" },
  { name: "DevSecOps転職ガイド", href: "/career/devsecops/" },
  { name: "AWSスキルと転職ガイド", href: "/skill/aws/" },
  { name: "Kubernetesスキルと転職ガイド", href: "/skill/kubernetes/" },
  { name: "Terraformスキルと転職ガイド", href: "/skill/terraform/" },
  { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
];

export default function SrePage() {
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
        title="SRE転職ガイド｜インフラ・バックエンドからの移行ステップと職務経歴書"
        description="インフラ／バックエンドエンジニアからSRE（Site Reliability Engineer）へ転職する方法を、スキルギャップ比較・在職中の移行ステップ・職務経歴書のBefore/After例文つきで解説します。"
        url="/career/sre/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "SRE転職ガイド" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          SRE転職ガイド｜インフラ・バックエンドからの移行ステップ
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 運用経験を「信頼性を改善する力」に翻訳して転職する
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          SRE（Site Reliability Engineering）は、Googleが提唱した「ソフトウェアエンジニアリングで運用課題を解く」専門職です。インフラ運用とコーディングの両方を扱うため、すでに運用経験のあるミドルエンジニアにとっては、現職の蓄積を活かしやすいキャリアパスです。このページでは、現職とのスキルギャップ、在職中にできる移行ステップ、職務経歴書での見せ方までを具体的に解説します。
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
                <a href={`#${item.id}`} className="text-blue-600 hover:underline text-sm">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：SRE転職の現実性</h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>インフラエンジニア・バックエンドエンジニアからのSRE転職は十分に現実的です。</strong>
              鍵になるのは、運用経験を「信頼性をどう改善したか」という言葉に翻訳できるかどうかです。
            </p>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li>① インフラ出身なら<strong>プログラミングとIaC</strong>、バックエンド出身なら<strong>運用・監視設計</strong>がギャップになりやすい</li>
              <li>② 在職中に「手作業の自動化（トイル削減）」を1つ実現し、コードを公開できる形にする</li>
              <li>③ クラウドとコーディングを両方扱える人材は需要が高く、ミドル層の運用知見も評価されやすい</li>
            </ul>
          </div>
        </section>

        <section id="gap" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">現職とのスキルギャップ比較表</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            SREに求められるスキルを、インフラエンジニア・バックエンドエンジニアの典型的な経験と比較しました。◎＝十分／○＝経験あり／△＝補強が必要、の目安です。自分がどの列に近いかで、埋めるべきギャップが見えてきます。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">必要スキル</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">インフラEng</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">バックエンドEng</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">SREで求められる水準</th>
                </tr>
              </thead>
              <tbody>
                {gapRows.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200 align-top">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.skill}</td>
                    <td className="px-4 py-3 text-slate-600">{row.infra}</td>
                    <td className="px-4 py-3 text-slate-600">{row.backend}</td>
                    <td className="px-4 py-3 text-slate-600">{row.sre}</td>
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
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
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
            SREへの移行は、今の運用業務の中で実績を作りながら進めるのが効率的です。退職してから学ぶより、現職の課題を題材に「信頼性を改善した経験」を積み上げるほうが、職務経歴書にも書ける材料が増えます。
          </p>
          <div className="space-y-5">
            {transitionSteps.map((step, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <span className="text-blue-600">STEP {i + 1}</span>
                  {step.phase}
                </h3>
                <ul className="space-y-2">
                  {step.items.map((it, j) => (
                    <li key={j} className="flex gap-2 text-sm text-slate-600">
                      <span className="text-blue-500 shrink-0">✓</span>
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
            インフラ運用の経歴は、書き方次第でSRE適性が大きく伝わります。ポイントは「やったこと」ではなく「信頼性をどう改善したか／何を自動化したか」を、定量と再発防止の視点で書くことです。
          </p>

          <div className="space-y-5">
            <div className="border border-rose-200 bg-rose-50 rounded-lg p-5">
              <p className="font-bold text-rose-700 text-sm mb-2">Before（運用作業の羅列になっている例）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                AWS上のWebシステムの運用保守を担当。サーバーの監視、障害発生時の対応、定期的なバックアップ作業、ミドルウェアのバージョンアップを実施。手順書に沿ってメンテナンス作業を行った。
              </p>
            </div>
            <div className="border border-emerald-200 bg-emerald-50 rounded-lg p-5">
              <p className="font-bold text-emerald-700 text-sm mb-2">After（信頼性改善と自動化を主語にした例）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                AWS上のWebシステム（月間ピーク〇〇万リクエスト）の信頼性向上を担当。頻発していた手動のデプロイ・バックアップ作業をTerraformとシェル／Pythonでコード化し、定常作業の工数を削減。主要APIにSLI/SLOを定義してダッシュボードを整備し、アラートの優先度を見直したことで、夜間の不要アラートと対応負荷を低減。障害対応では原因分析と再発防止策の自動化までを担当した。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-sm text-slate-600 leading-relaxed">
              <p className="font-bold text-slate-700 mb-2">改善のポイント</p>
              <ul className="space-y-1">
                <li>・「監視した／対応した」→「SLI/SLOを定義し改善した」と信頼性の言葉に変換</li>
                <li>・手作業を「コード化して削減した（トイル削減）」とSREの中核価値で表現</li>
                <li>・規模感や工数・アラート件数など、出せる範囲で定量を添える（数値は実績に合わせて記載）</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            SRE単独の公的な平均年収統計は確認できないため、ここではミドル層全体の客観データを基準に考えます。レバテックが公表した正社員SEの年代別平均年収（2025年）は、30代で約499万円、40代で約618万円です。クラウドとコーディングを両立できるSRE人材は希少性が高く、これより上のレンジを狙える可能性があります。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            また、doda（パーソルキャリア）の「決定年収レポート」（2025年5月公表）では、IT・通信エンジニアの平均決定年収は2023年度の469万円から2024年度の486万円へと上昇しており、転職者の約6割が年収アップを実現しています。具体的な提示レンジは企業・経験により幅が大きいため、複数社のオファーを比較して市場感をつかむことをおすすめします。
          </p>
          <p className="text-slate-500 text-xs leading-relaxed">
            出典: レバテック公表 年代別平均年収（2025年・career.levtech.jp/freelance.levtech.jpガイド記事）／doda「決定年収レポート」（2025年5月公表）。
          </p>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">おすすめの転職エージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            SRE求人は技術要件が細かいため、技術理解のあるアドバイザーがいるIT特化型サービスが向いています。求人を紹介してもらうエージェント型と、自分の市場価値を測れるスカウト型を併用すると進めやすくなります。
          </p>
          <div className="space-y-3">
            {[
              {
                name: "レバテックキャリア",
                point:
                  "IT/Web特化で技術に詳しいアドバイザーが在籍。利用者の約8割が20〜30代で、高年収求人の比率が高いと公表されており、SRE系ポジションの相談に向きます。",
              },
              {
                name: "ビズリーチ",
                point:
                  "ハイクラス・スカウト型。年収750万円以上の定義でハイレンジ求人が中心。経験を登録するとSRE求人のスカウトで市場価値を客観的に把握できます。",
              },
              {
                name: "doda ITエンジニア",
                point:
                  "国内最大級の求人数で、検索・エージェント・スカウトのハイブリッド型。幅広い企業のSRE/インフラ求人を比較検討したい場合に有効です。",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代がSREを目指すなら</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>
              SREは、障害を経験し、運用の難所を知っているほど判断の質が上がる職種です。ミドル層が積み重ねてきた「落とさない設計」「復旧の段取り」「チームでの運用回し」は、そのままSREの強みになります。年齢を理由に諦める必要はありません。
            </p>
            <p>
              一方で、若手と差がつきやすいのが「手作業をコードに置き換える習慣」です。30代・40代で運用文化が手作業中心だった場合は、IaCと自動化スクリプトの実績を在職中に1つでも作り、職務経歴書で見せられるようにしておきましょう。
            </p>
            <p>
              年収交渉の前提として、
              <Link href="/knowledge/salary-30s/" className="text-blue-600 hover:underline">30代の年収相場</Link>
              ・
              <Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代の年収相場</Link>
              を把握しておくと、提示レンジが妥当かを判断しやすくなります。
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
          <h2 className="text-xl font-bold mb-3">SRE転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            SREポジションに強いIT特化型エージェントが、あなたの運用経験に合う求人を提案します。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
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
