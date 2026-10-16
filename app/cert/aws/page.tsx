import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "AWS認定資格は転職に有利？SAAの年収・難易度・活かし方【2026年】";
const PAGE_DESC =
  "AWS認定資格（SAA中心）は30代・40代の転職で有利か。受験料・有効期限、保有者の年収相場、実務2-3年と組み合わせることで評価される理由、オンプレ実務とAWSを組み合わせた活かし方を、資格だけでは上がりにくい現実も含めて解説します。";

export const metadata: Metadata = {
  alternates: { canonical: "/cert/aws/" },
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "実務2-3年と組み合わせて評価される経験者加点資格" },
  { id: "scope", label: "この記事の対象（資格×転職）" },
  { id: "overview", label: "試験概要・有効期限" },
  { id: "salary", label: "保有者の年収相場" },
  { id: "scene", label: "転職で評価される場面" },
  { id: "jobs", label: "求人で求められる要件" },
  { id: "kakezan", label: "30-40代の価値：オンプレ経験とAWSの組み合わせ" },
  { id: "steps", label: "取得3ステップ・併取得資格" },
  { id: "demerit", label: "デメリット・留意点" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "AWS認定資格を取れば年収は上がりますか？",
    a: "よく指摘される点ですが、資格だけで年収が上がることは稀です。AWS認定（SAAなど）は実務2〜3年と組み合わせて初めて評価されると考えてください。technolog集計の参考値ではSAA保有者平均572万円・SAP保有者745万円とされますが、これは保有者の経験差を含んだ数値です。レバテック（2026年4月）ではAWSエンジニアの平均約509万円・中央値約550万円です。資格は書類通過や手当の後押しにはなりますが、年収は主に実務の深さで決まります。",
  },
  {
    q: "未経験でもAWS認定を取れば転職できますか？",
    a: "資格だけで実務未経験を補うのは難しいのが実情です。ただし、オンプレ・ネットワーク・Linuxの実務がある人が、AWS Solutions Architect Associate（SAA）を取得し、無料利用枠で小さなハンズオン環境を作る、というルートは現実的です。『資格＋手を動かした成果物』をあわせて示すことが、未経験領域を補ううえで重要です。完全未経験から資格単体での転職は期待しすぎないほうが安全です。",
  },
  {
    q: "AWS認定に有効期限はありますか？",
    a: "あります。AWS認定は3年間の有効期限があり、再認定（更新）が必要です。技術の更新が速いクラウド領域では知識の鮮度を保つ仕組みとも言えますが、取りっぱなしにはできない点はデメリットでもあります。SAA-C03は65問・130分、1000点満点中720点で合格、日本でのアソシエイト受験料は20,000円（2024年4月1日改定）です。最新の料金・条件はAWS公式でご確認ください。",
  },
  {
    q: "cert/awsとskill/awsの記事は何が違いますか？",
    a: "この記事（cert/aws）は『AWS認定資格を転職でどう活かすか』という資格起点の解説です。一方、AWSエンジニアという職種そのものの市場・キャリアパス・求人の探し方は『AWSエンジニア転職ガイド』で詳しく扱っています。資格の活かし方を知りたい方はこのページ、職種としての全体像を知りたい方は職種ガイドをご覧ください。",
  },
  {
    q: "AWS認定とLPIC、どちらを先に取るべきですか？",
    a: "クラウドへ軸足を移したいならAWS認定（SAA）が直接評価につながります。一方、Linuxの基礎がまだ固まっていない場合は、先にLPIC/LinuCでOS・インフラの土台を作ると、AWS学習の理解が深まります。オンプレ・インフラ運用の経験がすでにある人は、SAAから入ってクラウド移行ストーリーを作るのが効率的です。",
  },
];

const salaryRows = [
  ["AWSエンジニア平均（レバテック2026年4月）", "平均 約509万円 / 中央値 約550万円"],
  ["SAA保有者（technolog集計・参考値）", "平均 約572万円"],
  ["SAP保有者（technolog集計・参考値）", "平均 約745万円"],
  ["経験3〜5年", "約450〜700万円"],
  ["経験5〜10年", "約700〜1,000万円"],
  ["経験10年以上", "約900〜1,500万円"],
];

export default function CertAwsPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/cert/aws/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エンジニア資格と転職", href: "/cert/" },
          { name: "AWS認定資格" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          AWS認定資格は転職に有利？SAAの年収・難易度・活かし方【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | AWS認定（SAA中心）を30代・40代の転職視点で解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          AWS認定資格（中でもSolutions Architect Associate＝SAA）は、クラウド人材の入口として人気の高い資格です。本記事は「<strong>AWS認定資格を転職でどう活かすか</strong>」という資格起点の情報意図に絞り、受験料・有効期限・年収相場と、実務と資格を組み合わせた活かし方を、<strong>資格だけでは年収が上がりにくいという現実</strong>も含めて解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "AWS Certification 公式（SAA-C03 試験概要・受験料）",
            "レバテック AWSエンジニア年収（2026年4月）",
            "technolog 集計（SAA/SAP保有者平均・参考値）",
            "当サイト データシート（2026年6月）",
          ]}
        />

        {/* 目次 */}
        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">実務2-3年と組み合わせて評価される経験者加点資格</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              AWS認定は当サイトの分類で<strong>「経験者加点資格」</strong>に位置づけられます。最も効果を発揮するのは<strong>オンプレ・インフラの実務とAWS認定を組み合わせた場合</strong>で、特に2〜3年の実務とあわせて示すことで価値が生まれます。資格単体で年収が上がると考えるのは避けるべきであり、この点は本記事でも繰り返しご説明します。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① 資格だけでは年収は上がりにくい傾向があります。<strong>実務2-3年との組み合わせ</strong>が前提です</li>
              <li>② オンプレ／インフラ実務とAWSを組み合わせることで<strong>クラウド移行案件</strong>に参画しやすくなります</li>
              <li>③ 有効期限は<strong>3年</strong>です。再認定が必要で、取りっぱなしにはできません</li>
            </ul>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            AWS認定が人気を集める理由は明確で、国内のクラウド求人でAWSのシェアが大きく、設計思想を一つ深く理解すればAzureやGCPへ横展開しやすいからです。SAAは数あるAWS認定の中でも「実務1年程度を想定したアソシエイト」に位置づけられ、転職でまず取得を検討する資格として広く選ばれています。ただし繰り返しになりますが、<strong>SAAは『クラウドの基礎を体系的に理解している』ことの証明であって、現場で使える即戦力性そのものを保証するものではありません</strong>。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-3">
            そのため、ミドル層にとって有効なのは資格と実務を組み合わせる方法です。これまでオンプレやインフラ、ネットワーク、Linuxといった領域で積み上げてきた経験は、クラウドでもそのまま価値になります。むしろ、オンプレの事情を理解したうえでクラウドへ移行できる人材は、クラウドしか知らない若手にはない強みを持っています。SAAはその橋渡しを目に見える形で示す手段です。
          </p>
        </section>

        {/* スコープ（検索意図の分離） */}
        <section id="scope" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">この記事の対象（資格×転職）</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-sm text-slate-700 space-y-3">
            <p>
              このページは「<strong>AWS認定資格を転職でどう活かすか</strong>」という資格起点の解説です。AWSエンジニアという<strong>職種そのもの</strong>の市場・キャリアパス・求人の探し方・参入ルートを知りたい方は、別記事で詳しく扱っています。
            </p>
            <p>
              職種としての全体像は<Link href="/skill/aws/" className="text-petrol hover:underline font-medium">AWSエンジニア転職ガイド</Link>をご覧ください。隣接スキルは<Link href="/skill/infrastructure/" className="text-petrol hover:underline">インフラエンジニア転職ガイド</Link>・<Link href="/skill/terraform/" className="text-petrol hover:underline">Terraform/IaC転職ガイド</Link>も参考になります。
            </p>
          </div>
        </section>

        {/* 試験概要 */}
        <section id="overview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">試験概要・有効期限</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["主催", "AWS（Amazon Web Services）"],
                  ["代表的な資格", "Solutions Architect Associate（SAA-C03）"],
                  ["問題数・時間", "65問・130分"],
                  ["合格点", "1000点満点中720点"],
                  ["受験料", "日本のアソシエイト 20,000円（2024年4月1日改定）"],
                  ["有効期限", "3年（再認定が必要）"],
                ].map(([k, v], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-700 border-b border-slate-200 font-medium w-40 align-top">{k}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: AWS Certification 公式（aws.amazon.com/certification、2026年6月時点）。合格率はAWSが非公表のため記載していません。受験料・試験範囲は改定され得るため、受験前に必ず公式でご確認ください。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">保有者の年収相場</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            AWS領域の年収は「資格の有無」より「経験年数・役割」で決まります。以下は権威データ（レバテック明示集計）と参考値を分けて整理したものです。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <tbody>
                {salaryRows.map(([k, v], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-700 border-b border-slate-200 font-medium align-top">{k}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed mb-3">
            出典: AWSエンジニア平均はレバテック（2026年4月）。SAA/SAP保有者平均・経験年数別レンジはtechnolog等の集計による参考値で、母集団・定義により幅があります。資格保有者の数値は経験差を含むため、資格単体の効果として読むことはできません。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            この表で注目していただきたいのは、SAA保有者平均（約572万円）とSAP（Solutions Architect Professional）保有者平均（約745万円）の差です。一見すると「上位資格を取れば年収が約170万円上がる」ように見えますが、実態はそうではありません。SAPは上位資格ゆえに、もともと設計・運用の経験が豊富な人が取得しているケースが多く、年収差の大部分は<strong>資格そのものではなく経験の差</strong>です。経験年数別のレンジ（3〜5年で450〜700万円、10年以上で900〜1,500万円）を見ても、年収を左右する最大の要因が経験であることが分かります。資格は次の経験を積める案件に参画するための手段と捉えるのが、実態に近いといえます。
          </p>
        </section>

        {/* 評価される場面 */}
        <section id="scene" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職で評価される場面</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            AWS認定が具体的に評価につながるのは、次のような場面です。いずれも「資格が単独で評価される」のではなく、「実務や成果物と組み合わさったときに後押しになる」点が共通しています。
          </p>
          <div className="space-y-3">
            {[
              { t: "クラウド移行プロジェクト", d: "オンプレからAWSへの移行案件で、SAAの設計知識と前職のオンプレ運用経験が直接活きます。" },
              { t: "書類選考でのスクリーニング通過", d: "AWS歓迎要件の求人で、最低限のクラウド知識を持つ証明として書類通過の後押しになります。" },
              { t: "資格手当・報奨金の対象", d: "企業によってはAWS認定が手当・合格報奨金の対象になります（金額は各社制度次第・要確認）。" },
              { t: "スカウト経由のオファー", d: "スカウト型サービスで、AWS認定の記載がクラウド人材としての検索ヒット率を上げる声があります。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 求人要件 */}
        <section id="jobs" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人で求められる要件</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            AWS求人の頻出要件を傾向として整理すると、おおむね次の3層に分かれます（求人票の傾向に基づく整理）。
          </p>
          <div className="space-y-3">
            {[
              { t: "構築・運用層（実務1〜3年）", d: "主な要件はEC2/VPC/S3/IAMの基本構成、監視・障害対応です。SAA保有が歓迎要件になりやすい傾向があります。" },
              { t: "設計・自動化層（実務3〜6年）", d: "主な要件はマルチアカウント設計、IaC、CI/CD、コンテナです。年収帯が一段上がる中心的な層にあたります。" },
              { t: "アーキテクト/SRE層（実務6年以上）", d: "主な要件は全体設計、コスト最適化、ガバナンスです。Professional認定が評価の後押しになります。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 leading-relaxed mt-3">
            ※ リアルタイムの求人件数は変動が大きいため当サイトでは断定しません。詳細な求人傾向は<Link href="/skill/aws/" className="text-petrol hover:underline">AWSエンジニア転職ガイド</Link>を参照してください。
          </p>
        </section>

        {/* 掛け算 */}
        <section id="kakezan" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30-40代の価値：オンプレ経験とAWSの組み合わせ</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              ミドル層がAWS認定で最も価値を出せるのは、<strong>これまでのオンプレ・インフラ・ネットワーク・Linuxの実務に、AWSを組み合わせる</strong>パターンです。クラウド移行案件では「オンプレの事情を分かったうえでAWSへ移せる人」が重宝され、ミドル層の強みが活きます。
            </p>
            <p>
              一方、若手と同じ条件で「AWSの新しさ」だけを強調すると差別化しづらくなります。<strong>前職の運用経験を『移行で活きる経験』として言語化</strong>し、SAAで得た設計知識を紐づけるのがミドルに有効な方法です。
            </p>
            <p>
              具体的な見せ方の例を挙げます。「データセンターの物理サーバー運用を10年担当」という経歴は、それだけだと『レガシー寄り』に見られかねません。しかし「その運用知見をもとに、SAAで学んだVPC設計・IAM権限設計を用いて、検証環境をAWS上に再構築した（GitHubにIaCコードを公開）」と添えれば、<strong>オンプレの実務とクラウドの学習が一貫したものとして示され、移行案件で即戦力になれる人材像</strong>が伝わります。資格・実務・成果物の3点をそろえることで、ミドル層の説得力が高まります。
            </p>
            <p>
              職種としての全体像は<Link href="/skill/aws/" className="text-petrol hover:underline">AWSエンジニア転職ガイド</Link>、転向ルートは<Link href="/career/support-to-infra/" className="text-petrol hover:underline">運用保守からインフラ・クラウドへの転向</Link>、成果物の作り方は<Link href="/knowledge/portfolio/" className="text-petrol hover:underline">エンジニアのポートフォリオの作り方</Link>が参考になります。
            </p>
          </div>
        </section>

        {/* ステップ */}
        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">取得3ステップ・併取得資格</h2>
          <div className="space-y-3 mb-4">
            {[
              { n: "STEP 1", t: "土台の確認＋CLF（任意）", d: "ネットワーク・Linux・OSの基礎を整理します。入口としてCloud Practitioner（CLF）で全体像を掴むのも有効です。" },
              { n: "STEP 2", t: "SAA取得＋ハンズオン", d: "SAAを取得し、無料利用枠でVPC/EC2/S3/IAMの小構成を自作します。" },
              { n: "STEP 3", t: "成果物化＋移行ストーリー", d: "構成をIaC（Terraform/CDK）でコード化し公開します。前職経験は移行のストーリーとしてまとめます。" },
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
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            併取得におすすめなのは、Linuxの土台を固める<Link href="/cert/" className="text-petrol hover:underline">LPIC/LinuC（資格一覧参照）</Link>や、クラウドセキュリティに広げる<Link href="/cert/security-specialist/" className="text-petrol hover:underline">情報処理安全確保支援士</Link>です。IaCスキルは<Link href="/skill/terraform/" className="text-petrol hover:underline">Terraform転職ガイド</Link>も合わせてご覧ください。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            取得後のステップとしては、SAAの次に上位のSolutions Architect Professionalや、運用自動化を扱うDevOps Engineer Professionalを目指す道があります。ただし、ここでも順序が大切です。資格を続けて取ることより、SAAで得た知識を実務で使い、その経験を踏まえて上位資格に挑むほうが、知識が定着し面接でも語れる状態になります。AWS公式もProfessional受験前に2年以上の実務経験を推奨しており、これは「資格は実務と組み合わせることで価値が生まれる」という本記事の主張とも一致します。クラウドは技術の更新が速いため、有効期限3年という再認定の仕組みも、知識の鮮度を保つ良い機会と前向きに捉えるとよいでしょう。学んだ内容を小さな個人プロジェクトやIaCコードとして残し続けることが、長期的な市場価値の維持につながります。
          </p>
        </section>

        {/* デメリット */}
        <section id="demerit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">デメリット・留意点</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>① <strong>資格だけでは年収は上がりにくい傾向があります。</strong>実務2〜3年と組み合わせて初めて評価されます。</p>
            <p>② <strong>有効期限は3年です。</strong>再認定が必要で、更新の手間・費用がかかります。</p>
            <p>③ <strong>未経験単体では評価されにくい傾向があります。</strong>完全未経験から資格だけで転職するのは難しく、ハンズオン成果物が要ります。</p>
            <p>④ <strong>合格率は公表されていません。</strong>難易度の客観指標が乏しいため、模試・公式問題で実力を測る必要があります。</p>
          </div>
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
          <h2 className="text-xl font-bold mb-3">AWS認定と実務を活かした転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            ご自身の実務とAWS認定がどう評価されるか、クラウドに強いIT特化型エージェントで確認しましょう。
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
              { name: "エンジニア資格と転職（資格一覧）", href: "/cert/" },
              { name: "PMP資格と転職", href: "/cert/pmp/" },
              { name: "情報処理安全確保支援士と転職", href: "/cert/security-specialist/" },
              { name: "AWSエンジニア転職ガイド（職種）", href: "/skill/aws/" },
              { name: "インフラエンジニア転職ガイド", href: "/skill/infrastructure/" },
              { name: "Terraform/IaC転職ガイド", href: "/skill/terraform/" },
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
