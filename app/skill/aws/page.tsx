import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "AWSエンジニアの転職完全ガイド｜年収・資格・求人の攻め方【2026年】";
const PAGE_DESC =
  "AWSエンジニアの転職市場を2026年最新の公表データで解説。レバテック公表の平均年収、AWS認定資格の活かし方、求人の探し方、経験浅めからの参入ルートを30代・40代エンジニア向けにまとめました。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：AWS転職市場の攻め方" },
  { id: "market", label: "市場・年収データ" },
  { id: "cert", label: "AWS認定資格の活かし方" },
  { id: "level", label: "求められる経験レベル" },
  { id: "path", label: "キャリアパスの選択肢" },
  { id: "find", label: "求人の探し方" },
  { id: "entry", label: "経験浅めからの参入ルート" },
  { id: "middle", label: "30代・40代の視点" },
  { id: "learn", label: "スキルアップ・学習戦略" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "AWSエンジニアの平均年収はどのくらいですか？",
    a: "レバテックキャリアの公表統計では、AWSに関わるエンジニアの平均年収は約509万円・中央値550万円です（2025年1月時点・career.levtech.jp保有求人ベース）。一方、レバテック公表の正社員SE全体の年代別平均は30代約499万円・40代約618万円（2025年）で、AWS領域は全体よりやや高い水準にあります。役職や担当領域（SRE・アーキテクト等）により幅が大きいため、これらは目安としてご覧ください。",
  },
  {
    q: "AWS認定資格は転職に有利ですか？",
    a: "AWS認定は基礎・アソシエイト・プロフェッショナル・専門知識の4区分で構成され、Solutions Architect ProfessionalやDevOps Engineer Professionalは上位資格として認知されています（AWS公式）。資格そのものより、資格学習で得た設計知識を実務でどう使ったかを語れるかが評価の分かれ目です。書類段階でのスクリーニング通過には一定の効果があります。",
  },
  {
    q: "AWS認定資格を取れば未経験でも転職できますか？",
    a: "資格だけで実務未経験を補うのは難しいのが実情です。ただしオンプレやネットワーク・Linuxの実務経験がある方が、AWS Solutions Architect Associate（SAA）を取得し個人でハンズオン環境を作る、というルートは現実的です。「資格＋小さくても手を動かした成果物」をセットで示すのが鍵です。",
  },
  {
    q: "AWSエンジニアの求人はどの転職サービスが強いですか？",
    a: "IT/Web特化で高年収求人比率が高いレバテックキャリア、年収750万円以上のハイクラス層を狙えるビズリーチ、求人数が国内最大級のリクルートエージェントITの併用が定番です。レバテックは利用者の約8割が20〜30代で、ミドル層も対象に含まれます（2026年6月時点・各社公表/二次情報）。",
  },
  {
    q: "オンプレミスからAWSへキャリアチェンジできますか？",
    a: "可能です。ネットワーク・OS・セキュリティの基礎はクラウドでもそのまま活きます。SAAなどのアソシエイト資格取得と、VPC/EC2/S3/IAMを使った小規模構成のハンズオンから始めるのが王道です。前職のオンプレ運用経験は「移行プロジェクトで活きる経験」として語れます。",
  },
  {
    q: "40代でもAWSエンジニアへ転職できますか？",
    a: "上流の設計・運用経験があれば十分に可能です。レバテック公表の正社員SE年代別平均は40代約618万円、年収1,000万円以上の割合は40代で12.67%（2025年）と、ミドル層でも高年収帯が一定数存在します。大規模インフラの設計・移行経験はマネジメント要素も含めて評価されやすい領域です。",
  },
  {
    q: "AWS以外のクラウドも学ぶべきですか？",
    a: "まずAWSを深めるのが効率的です。日本国内の求人数はAWSが最多で、設計思想を一つ深く理解すればAzure/GCPへの横展開も容易になります。マルチクラウド経験はプラス評価になりますが、優先順位としては「AWSを軸に、必要に応じて2つ目」が現実的です。",
  },
];

const salaryByAge = [
  ["20代", "約378万円", "クラウド運用・構築の経験を積む時期"],
  ["30代", "約499万円", "設計・自動化を任される中核層"],
  ["40代", "約618万円", "アーキテクト・リードへの分岐点"],
  ["50代", "約685万円", "部門設計・ガバナンス領域"],
];

const certTable = [
  ["基礎（Foundational）", "Cloud Practitioner（CLF）", "クラウド全体像の理解。学習の入口"],
  ["アソシエイト（Associate）", "Solutions Architect Associate（SAA）など", "実務1年程度を想定。転職でまず狙う層"],
  ["プロフェッショナル（Professional）", "Solutions Architect Professional / DevOps Engineer Professional", "AWS公式は2年以上の経験を推奨。上流案件で評価"],
  ["専門知識（Specialty）", "Security / Advanced Networking など", "特定領域の深い専門性を示す"],
];

export default function AwsSkillPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/skill/aws/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "AWSエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          AWSエンジニアの転職完全ガイド｜年収・資格・求人の攻め方【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | AWSスキルを活かした転職を30代・40代エンジニア向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          AWSは国内クラウド市場で広く採用され、企業のクラウド移行・DX推進に伴いAWSを扱えるエンジニアの需要が続いています。本記事は求人数だけを追う比較ではなく、「AWSスキルを転職市場でどう価値化するか」という情報意図に絞り、公表データと公式情報をもとに30代・40代エンジニアの戦略を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテックキャリア 職種別平均年収統計（2025年1月時点）",
            "レバテック公表 年代別平均年収（2025年）",
            "AWS Certification 公式",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：AWS転職市場の攻め方</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              AWSエンジニアの転職は、<strong>「単なる構築・運用」から「設計・自動化・信頼性」へ役割を上げて見せられるか</strong>で年収が大きく変わります。攻め方は次の3点です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① 求人DBの数比較より、<strong>SRE・アーキテクト等の上流役割の実績</strong>を言語化する</li>
              <li>② AWS認定（SAA→Professional）は<strong>学習で得た設計知識を実務に紐づけて</strong>語る</li>
              <li>③ IaC（Terraform/CDK）・コンテナ・CI/CDを<strong>掛け合わせて</strong>市場価値を上げる</li>
            </ul>
          </div>
        </section>

        {/* 市場・年収データ */}
        <section id="market" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">市場・年収データ</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            レバテックキャリアの公表統計では、AWSに関わるエンジニアの平均年収は<strong>約509万円・中央値550万円</strong>です（2025年1月時点・career.levtech.jp保有求人ベース）。これはエンジニア全体の平均（同統計で約504万円）と同程度〜やや上で、AWSスキル単体より「どの役割で使うか」で水準が決まることを示します。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            年代別の水準感は、レバテックが公表する正社員SEの年代別平均年収が参考になります。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年代</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">正社員SE平均年収</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">この年代の位置づけ</th>
                </tr>
              </thead>
              <tbody>
                {salaryByAge.map(([age, salary, note], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{age}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{salary}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: レバテック公表の年代別平均年収（2025年）。年収1,000万円以上の割合は30代で8.01%、40代で12.67%（同）。職種・統計により数値は異なるため目安としてご覧ください。市場全体の中長期トレンドは、経済産業省「IT人材需給に関する調査」（2019年3月公表）が2030年に最大約79万人のIT人材不足を試算しており、クラウド人材の需給逼迫が続く前提として参照されています。
          </p>
        </section>

        {/* 資格 */}
        <section id="cert" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">AWS認定資格の活かし方</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            AWS認定は公式に4区分で整理されています。転職でまず狙うのはアソシエイト、上流案件を狙うならプロフェッショナルです。AWS公式はProfessional受験前に「2年以上のAWS実務経験」を推奨しています。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">区分</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">代表的な資格</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">転職での位置づけ</th>
                </tr>
              </thead>
              <tbody>
                {certTable.map(([cat, name, note], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{cat}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{name}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-3">出典: AWS Certification 公式（aws.amazon.com/certification、2026年6月時点）</p>
          <p className="text-sm text-slate-600 leading-relaxed">
            資格は「持っているか」より「学習内容を実務で使えるか」で評価されます。たとえばSAAの学習で得たマルチAZ設計の知識を、実際の冗長化やコスト最適化にどう適用したかを語れると、書類・面接の両方で効きます。
          </p>
        </section>

        {/* 経験レベル */}
        <section id="level" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベル</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            求人要件の傾向を整理すると、AWS求人はおおむね次の3層に分かれます（求人票の頻出要件をもとにした傾向）。
          </p>
          <div className="space-y-3">
            {[
              { t: "実務1〜3年層（構築・運用）", d: "EC2/VPC/S3/IAMの基本構成、CloudWatchでの監視、簡単な障害対応。SAA保有が歓迎要件になりやすい。" },
              { t: "実務3〜6年層（設計・自動化）", d: "マルチアカウント設計、IaC（Terraform/CDK）、CI/CD、コンテナ（ECS/EKS）。年収帯が一段上がる中核ゾーン。" },
              { t: "実務6年以上層（アーキテクト・SRE）", d: "全体アーキテクチャ設計、SLI/SLO、コスト最適化（FinOps）、セキュリティガバナンス。Professional認定が後押しになる。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* キャリアパス */}
        <section id="path" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キャリアパスの選択肢</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">クラウドアーキテクト路線</h3>
              <p className="text-sm text-petrol-deep">
                AWS上のシステム全体設計を担う方向。マルチアカウント戦略、セキュリティ設計、コスト最適化など上流の設計力が問われます。Professional認定と大規模設計経験が武器になります。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">SRE / プラットフォームエンジニア路線</h3>
              <p className="text-sm text-petrol-deep">
                サービスの信頼性とスケーラビリティを担保する方向。Kubernetes運用、オブザーバビリティ、SLI/SLO設計などモダンな運用スキルが身につきます。
                <Link href="/career/sre/" className="text-petrol-deep underline ml-1">SREへの転向ガイド</Link>も参考になります。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">セキュリティ・ガバナンス特化路線</h3>
              <p className="text-sm text-petrol-deep">
                クラウドセキュリティのスペシャリスト方向。IAM設計、コンプライアンス対応などを担い、金融・ヘルスケア業界で特に需要があります。
                <Link href="/career/devsecops/" className="text-petrol-deep underline ml-1">DevSecOpsキャリア</Link>も関連します。
              </p>
            </div>
          </div>
        </section>

        {/* 求人の探し方 */}
        <section id="find" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の探し方</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            AWS求人は「どこに強い求人が集まるか」を押さえて使い分けるのが効率的です。以下は当サイトのデータシート（2026年6月時点・各社公表/二次情報）に基づく整理です。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア</h3>
              <p className="text-sm text-slate-600 mb-2">IT/Web特化。利用者の約8割が20〜30代で、高年収求人比率が高いとされます。クラウド・SRE求人を技術に明るいアドバイザー経由で探せます。</p>
              <Link href="/review/levtech/" className="text-sm text-petrol hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ</h3>
              <p className="text-sm text-slate-600 mb-2">ハイクラス（年収750万円以上が一つの目安）・スカウト型。クラウドアーキテクト/SREマネージャー層を狙う場合に有効です。</p>
              <Link href="/review/bizreach-it/" className="text-sm text-petrol hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">リクルートエージェントIT</h3>
              <p className="text-sm text-slate-600 mb-2">国内最大級の求人数（IT公開求人110,840件・2026年5月22日時点・二次集計）。大手のクラウド移行案件まで幅広く見たい場合の併用先です。</p>
              <Link href="/review/recruit-it/" className="text-sm text-petrol hover:underline">詳細レビューを見る →</Link>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            複数併用の進め方は<Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">エージェント複数利用のコツ</Link>、選び方の軸は<Link href="/knowledge/how-to-choose/" className="text-petrol hover:underline">転職エージェントの選び方</Link>を参考にしてください。
          </p>
        </section>

        {/* 参入ルート */}
        <section id="entry" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験浅めからの参入ルート</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            AWS実務が浅い、あるいはオンプレ中心だった方の現実的な道筋です。
          </p>
          <div className="space-y-3">
            {[
              { n: "STEP 1", t: "土台の棚卸し", d: "ネットワーク・Linux・OSの基礎経験を整理。これらはクラウドでもそのまま価値になる。" },
              { n: "STEP 2", t: "SAA取得＋ハンズオン", d: "Solutions Architect Associateを取得し、無料利用枠でVPC/EC2/S3/IAMの小構成を自作する。" },
              { n: "STEP 3", t: "IaC化で成果物にする", d: "作った構成をTerraform/CDKでコード化し、GitHubに公開。設計意図をREADMEで説明できる状態にする。" },
              { n: "STEP 4", t: "移行ストーリーで応募", d: "前職のオンプレ運用経験を『移行プロジェクトで活きる経験』として職務経歴書に落とし込む。" },
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

        {/* 30代・40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              ミドル層のAWS転職では、<strong>「自分で全部作れる」より「他者を巻き込んで設計・移行を進められる」</strong>ことが評価軸になります。手を動かす力に加え、要件整理・コスト判断・チームへの展開といった上流要素が差を生みます。
            </p>
            <p>
              年収面では、レバテック公表の正社員SE平均が40代で約618万円、年収1,000万円以上の割合が40代で12.67%（2025年）と、ミドルでも高年収帯は一定数存在します。一方で「特定企業のレガシー運用に最適化されすぎた経験」は横展開しにくいため、クラウド・IaCという汎用スキルへ寄せておくのが転職市場での保険になります。
            </p>
            <p>
              年代別の市場感は<Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>、年収交渉は<Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉のコツ</Link>も合わせてご覧ください。
            </p>
          </div>
        </section>

        {/* 学習戦略 */}
        <section id="learn" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルアップ・学習戦略</h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>✓ <strong>SAA → 実務 → Professional</strong> の順で、資格と実務を交互に積む</li>
            <li>✓ IaC（Terraform/CDK）を早期に習得し、手作業からコード管理へ移行する</li>
            <li>✓ コンテナ（ECS/EKS）とCI/CDを一通り触り、SRE/プラットフォーム領域に接続する</li>
            <li>✓ オブザーバビリティ（メトリクス・ログ・トレース）とコスト最適化（FinOps）を意識する</li>
            <li>✓ 学んだことは小さな成果物（個人プロジェクト）にして可視化する</li>
          </ul>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            学習の習慣化は<Link href="/knowledge/continuous-learning/" className="text-petrol hover:underline">エンジニアの継続的な学習</Link>、市場価値の測り方は<Link href="/knowledge/market-value/" className="text-petrol hover:underline">自分の市場価値の調べ方</Link>が参考になります。
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
          <h2 className="text-xl font-bold mb-3">AWSスキルを活かした転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            クラウド・SRE求人に強いIT特化型エージェントで、あなたのAWSスキルの市場価値を確認しましょう。
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
          <p className="text-sm mb-3"><Link href="/company/aws-japan/" className="text-petrol-deep font-medium hover:underline">▶ AWSジャパン（企業）への転職・年収・評判を見る（クラウド職種特化ページ）</Link></p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "AWS認定SAA（ソリューションアーキテクト）の活かし方", href: "/cert/aws-saa/" },
              { name: "AWS認定DVA（デベロッパー）の活かし方", href: "/cert/aws-dva/" },
              { name: "AWS認定SAP（プロフェッショナル）の活かし方", href: "/cert/aws-sap/" },
              { name: "AWS認定SOA（SysOps）の活かし方", href: "/cert/aws-soa/" },
              { name: "Kubernetes/コンテナ転職ガイド", href: "/skill/kubernetes/" },
              { name: "Terraform/IaC転職ガイド", href: "/skill/terraform/" },
              { name: "インフラエンジニア転職ガイド", href: "/skill/infrastructure/" },
              { name: "セキュリティエンジニア転職ガイド", href: "/skill/security/" },
              { name: "SREへの転向ガイド", href: "/career/sre/" },
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
    
      <section className="mx-auto max-w-3xl px-4 pb-10">
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
          <h2 className="font-bold text-slate-900 mb-2">この技術と関連の深い掲載企業</h2>
          <p className="text-xs text-slate-500 mb-2">各社の公開技術情報でこの技術への言及が確認できた掲載企業です。年収・選考は各社ページをご覧ください。</p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-sm"><li><a href="/company/amazon/" className="text-petrol-deep hover:underline">Amazon／AWS Japan</a></li><li><a href="/company/classmethod/" className="text-petrol-deep hover:underline">クラスメソッド</a></li><li><a href="/company/colopl/" className="text-petrol-deep hover:underline">コロプラ</a></li><li><a href="/company/dena/" className="text-petrol-deep hover:underline">DeNA</a></li><li><a href="/company/dmm/" className="text-petrol-deep hover:underline">DMM.com</a></li><li><a href="/company/fujitsu/" className="text-petrol-deep hover:underline">富士通</a></li><li><a href="/company/future/" className="text-petrol-deep hover:underline">フューチャー（Future）</a></li><li><a href="/company/gmo-internet/" className="text-petrol-deep hover:underline">GMOインターネットグループ</a></li></ul>
          <p className="mt-3 text-sm"><a href="/skill/" className="text-petrol-deep hover:underline">スキル別ガイド一覧</a> ／ <a href="/salary/company-ranking/" className="text-petrol-deep hover:underline">企業年収ランキング</a></p>
        </div>
      </section>
      </>
  );
}
