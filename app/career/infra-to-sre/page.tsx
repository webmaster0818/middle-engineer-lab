import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "インフラエンジニアからSREへの転職｜移行ステップとスキルギャップ";
const DESC =
  "インフラエンジニアからSRE（Site Reliability Engineer）へ転職する進め方を、スキルギャップ比較表・在職中の移行ステップ・職務経歴書のBefore/After例文付きで解説。30代40代の現実も正直に紹介します。";
const URL = "/career/infra-to-sre/";

export const metadata: Metadata = { title: TITLE, description: DESC };

const toc = [
  { id: "conclusion", label: "結論：現実性と攻め方" },
  { id: "gap", label: "スキルギャップ比較表" },
  { id: "build", label: "必要スキルの身につけ方" },
  { id: "steps", label: "移行ステップ（在職中の準備）" },
  { id: "resume", label: "職務経歴書での見せ方（Before/After）" },
  { id: "salary", label: "年収の考え方" },
  { id: "agents", label: "活動で使うエージェント" },
  { id: "midage", label: "30代・40代の進め方" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const gapRows = [
  { axis: "サーバー・ネットワーク運用", infra: "◎ 構築・運用が主業務", sre: "○ 前提知識として活きる（信頼性視点が加わる）", gap: "活用" },
  { axis: "プログラミング（Go/Python）", infra: "△ シェル中心で本格開発は少なめ", sre: "◎ 運用自動化をコードで実装する", gap: "大" },
  { axis: "IaC（Terraform等）", infra: "○ 導入現場では経験あり", sre: "◎ インフラ全体をコード管理する前提", gap: "中" },
  { axis: "監視・SLI/SLO設計", infra: "○ 死活監視・アラート運用の経験", sre: "◎ SLO設計とエラーバジェット運用が中核", gap: "中" },
  { axis: "ソフトウェアエンジニアリング思考", infra: "△ 手順書・手作業文化が残る場合も", sre: "◎ トイル削減を開発として進める姿勢", gap: "大" },
  { axis: "障害対応・復旧設計", infra: "◎ 一次対応・復旧の実務経験", sre: "◎ ポストモーテムと再発防止の自動化まで", gap: "活用" },
];

const buildSteps = [
  { title: "Go/Pythonで運用自動化ツールを作る", desc: "SREはソフトウェアエンジニアリングで運用課題を解く職種です。アラート集約や定期バッチ、簡易な内製ツールをGoやPythonで実装し、GitHubで公開できる形にしておくと、インフラ出身で不足しがちな『開発で解決する力』を示せます。" },
  { title: "IaCとCI/CDを自分の手で組む", desc: "Terraformでインフラをコード化し、GitHub Actions等でplan/applyを自動化するワークフローを作ります。手作業を一つずつコードへ置き換えた経験は、SREの本質である『トイル削減』の実績として語れます。" },
  { title: "コンテナ・Kubernetesの運用経験を積む", desc: "Docker／Kubernetes（EKS・GKE）の運用は多くのSRE求人で前提です。個人環境でクラスタを立て、デプロイ・ローリングアップデート・リソース制限の設計までを一通り経験しておくと、面接での具体性が増します。" },
  { title: "監視基盤とSLO設計に触れる", desc: "Prometheus＋Grafana、Datadog、OpenTelemetryなどでメトリクス・ログ・トレースを統合し、SLI/SLOを定義する流れを経験します。『どの指標を、なぜそのしきい値にしたか』を説明できると、SREとしての思考が伝わります。" },
];

const migrationSteps = [
  { phase: "0〜3ヶ月", title: "現職でトイルを1つ自動化する", desc: "今の運用で繰り返している手作業（トイル）を洗い出し、1つでもスクリプト／IaCで自動化します。障害対応・改善の記録を課題→対応→再発防止の構造で残すと、職務経歴書の素材になります。" },
  { phase: "3〜6ヶ月", title: "スキル証明づくり", desc: "Terraform＋CI/CDの個人プロジェクトをGitHubで公開し、Go/Pythonの運用自動化ツールをポートフォリオ化します。AWS SAP・GCP Professional Cloud Architect・CKAなど強みを補強する資格を1つ選んで取得を進めます。" },
  { phase: "6ヶ月〜", title: "応募・面接フェーズ", desc: "IT特化型エージェントでSRE求人の要件レベルをすり合わせ、職務経歴書を『運用実績』から『信頼性をどう改善したか』へ書き換えます。過去の障害対応をSLO・エラーバジェットの言葉で説明できるよう整理します。" },
];

const agents = [
  { name: "レバテックキャリア", point: "IT/Web特化で技術に詳しいアドバイザーが在籍。SRE系ポジションの要件をすり合わせやすく、インフラ出身者の強みを活かす求人提案に向きます。", href: "/review/levtech/" },
  { name: "ビズリーチ", point: "ハイクラス・スカウト型。SRE求人のスカウトを受けることで、自分の運用経験が市場でどう評価されるかを客観的に把握できます。", href: "/review/bizreach-it/" },
  { name: "リクルートエージェント（IT）", point: "国内最大級の求人数。大手からスタートアップまでSRE/インフラ求人を幅広く比較でき、選択肢を確保しやすい。", href: "/review/recruit-it/" },
];

const faqs = [
  { q: "インフラエンジニアからSREへの転職は可能？", a: "インフラ運用の経験は有力な出発点です。不足しがちなのはプログラミングとIaC、SLO設計の経験なので、在職中に手作業を自動化した実績を作り、Go/Pythonでのツール開発をポートフォリオ化すると移行しやすくなります。" },
  { q: "SREとインフラエンジニアの違いは？", a: "インフラエンジニアはサーバー・ネットワークの構築運用が中心ですが、SREはソフトウェアエンジニアリングのアプローチで信頼性を高めます。SLI/SLOの設定、トイル削減、自動化が主要業務で、運用課題をコードで解く点が大きな違いです。" },
  { q: "プログラミングはどれくらいできれば応募できる？", a: "Go・Python・Bashでの自動化スクリプト作成が最低限で、加えてTerraform等のIaC、CI/CDパイプライン構築の経験が求められます。アプリ機能開発ほど高度でなくても、運用基盤を自分で書ける水準は必要です。" },
  { q: "資格は必要？", a: "必須ではありませんが、AWS SAP・GCP Professional Cloud Architect・CKA（Certified Kubernetes Administrator）が代表的で、独学スキルの客観的証明として書類選考で有効に働きます。" },
  { q: "オンコール対応は大変？", a: "オンコールは多くのSREチームで必要ですが、ローテーション制が一般的です。SLOベースで不要アラートを減らす取り組みも進んでいるため、面接時に運用負荷やオンコール体制を確認しておくとミスマッチを防げます。" },
  { q: "30代・40代からのSRE転職は遅い？", a: "SREは運用経験と障害対応の蓄積が活きる職種で、ミドル層の知見が評価されやすい領域です。一方で『手作業をコードに置き換える習慣』が若手と差がつきやすい点なので、IaCと自動化の実績を在職中に作っておくことが重要です。" },
  { q: "在職中と退職後、どちらで活動すべき？", a: "在職中を推奨します。現職の運用課題を題材に『信頼性を改善した経験』を積み上げるほうが、退職して学ぶより職務経歴書に書ける材料が増え、収入を確保しながら進められます。" },
];

const related = [
  { name: "SRE転職ガイド（総合）", href: "/career/sre/" },
  { name: "ヘルプデスク→インフラエンジニア", href: "/career/support-to-infra/" },
  { name: "DevSecOps転職ガイド", href: "/career/devsecops/" },
  { name: "Terraformスキルと転職ガイド", href: "/skill/terraform/" },
  { name: "Kubernetesスキルと転職ガイド", href: "/skill/kubernetes/" },
  { name: "職務経歴書の書き方ガイド", href: "/knowledge/resume/" },
];

export default function InfraToSrePage() {
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
      <ArticleJsonLd title={TITLE} description={DESC} url={URL} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "インフラ→SRE転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          インフラエンジニアからSREへの転職｜移行ステップ
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 運用経験を「信頼性を改善する力」に翻訳して転職する
        </p>

        <p className="text-slate-600 leading-relaxed mb-2">
          SRE（Site Reliability Engineering）は、Googleが提唱した「ソフトウェアエンジニアリングで運用課題を解く」専門職です。サーバー・ネットワークの運用経験を持つインフラエンジニアにとっては、現職の蓄積を活かしやすいキャリアパスです。本記事は「どう転職活動を進めるか」に特化し、スキルギャップの可視化・在職中の移行ステップ・職務経歴書の書き換え例を具体的に解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省 job tag（システムエンジニア・基盤）",
            "レバテック公表 年代別平均年収（2025年）",
            "doda 2024年度決定年収レポート（パーソルキャリア）",
          ]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：運用経験は土台になる。鍵は「コードで解く力」</h2>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・サーバー運用・障害対応の経験はそのまま活きる。SREは運用知見のあるミドル層が評価されやすい。</li>
              <li>・ギャップが大きいのは「プログラミング」と「SLO設計」。手作業をコード化した実績が決め手になる。</li>
              <li>・職務経歴書は『監視した・対応した』から『信頼性をどう改善し、何を自動化したか』へ書き換える。</li>
            </ul>
          </div>
        </section>

        <section id="gap" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルギャップ比較表（インフラエンジニア vs SRE）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            現職とのギャップを可視化し、「そのまま活きる力」と「埋めるべき力」を切り分けます。◎＝十分／○＝経験あり／△＝補強が必要、の目安です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-petrol-soft">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">比較軸</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">インフラEng（現職）</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">SRE（転職先）</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">ギャップ</th>
                </tr>
              </thead>
              <tbody>
                {gapRows.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200 align-top">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.axis}</td>
                    <td className="px-4 py-3 text-slate-600">{row.infra}</td>
                    <td className="px-4 py-3 text-slate-600">{row.sre}</td>
                    <td className="px-4 py-3 text-slate-600">{row.gap}</td>
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
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{i + 1}</span>
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
            SREへの移行は、今の運用業務の中で実績を作りながら進めるのが効率的です。退職してから学ぶより、現職の課題を題材に「信頼性を改善した経験」を積み上げるほうが説得力が増します。
          </p>
          <div className="space-y-4">
            {migrationSteps.map((s, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-bold text-white bg-slate-700 rounded px-2 py-1">{s.phase}</span>
                  <h3 className="font-bold text-slate-800">{s.title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="resume" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">職務経歴書での見せ方（Before/After例文）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            インフラ運用の経歴は、書き方次第でSRE適性が大きく伝わります。ポイントは「やったこと」ではなく「信頼性をどう改善したか／何を自動化したか」を、定量と再発防止の視点で書くことです。
          </p>
          <div className="space-y-4">
            <div className="border border-red-200 rounded-lg p-5 bg-red-50/40">
              <p className="font-bold text-red-700 text-sm mb-2">Before（運用作業の羅列）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                AWS上のWebシステムの運用保守を担当。サーバーの監視、障害発生時の対応、定期的なバックアップ、ミドルウェアのバージョンアップを実施。手順書に沿ってメンテナンス作業を行った。
              </p>
            </div>
            <div className="border border-emerald-200 rounded-lg p-5 bg-emerald-50/40">
              <p className="font-bold text-emerald-700 text-sm mb-2">After（信頼性改善と自動化を主語に）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                AWS上のWebシステムの信頼性向上を担当。手動のデプロイ・バックアップ作業をTerraformとPythonでコード化し定常作業の工数を削減。主要APIにSLI/SLOを定義してダッシュボードを整備し、アラート優先度を見直したことで夜間の不要アラートと対応負荷を低減。障害対応では原因分析と再発防止策の自動化まで担当した。
              </p>
            </div>
          </div>
          <p className="text-slate-500 text-xs mt-3">
            ※数値・規模感は実績に置き換えてください。型は<Link href="/knowledge/resume/" className="text-petrol hover:underline">職務経歴書の書き方ガイド</Link>を参照。
          </p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            SRE単独の公的な平均年収統計は確認できないため、ここではミドル層全体の客観データを基準に考えます。レバテックが公表した正社員SEの年代別平均年収（2025年）は30代で約499万円、40代で約618万円です。クラウドとコーディングを両立できるSRE人材は希少性が高く、このレンジの上側を狙える可能性があります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            転職者全体の傾向では、doda（パーソルキャリア）の2024年度決定年収レポート（2025年5月公表）で、IT・通信の平均決定年収が469万円（2023年度）→486万円（2024年度）と推移し、転職者の約6割が年収アップを実現しています。具体的な提示レンジは企業・経験で幅が大きいため、複数社のオファーを比較して市場感をつかみましょう。
          </p>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">活動で使うエージェント</h2>
          <div className="space-y-3">
            {agents.map((agent, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">
                  <Link href={agent.href} className="text-petrol-deep hover:underline">{agent.name}</Link>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{agent.point}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="midage" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の進め方</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            SREは、障害を経験し運用の難所を知っているほど判断の質が上がる職種です。ミドル層が積み重ねた「落とさない設計」「復旧の段取り」「チームでの運用回し」はそのままSREの強みになり、年齢を理由に諦める必要はありません。
          </p>
          <p className="text-slate-600 leading-relaxed">
            一方で、若手と差がつきやすいのが「手作業をコードに置き換える習慣」です。運用文化が手作業中心だった場合は、IaCと自動化スクリプトの実績を在職中に1つでも作り、職務経歴書で見せられるようにしておきましょう。年収交渉の前提として、<Link href="/knowledge/salary-30s/" className="text-petrol hover:underline">30代の年収相場</Link>・<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収相場</Link>も把握しておくと判断しやすくなります。
          </p>
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
          <p className="text-blue-100 text-sm mb-4">あなたの運用経験に合うSREポジションをプロが提案します。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
