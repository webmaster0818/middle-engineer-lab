import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "40代エンジニア転職は厳しい？理由と現実的な戦略【2026年6月】",
  description:
    "「40代エンジニアの転職は厳しい」と言われる理由に正面から回答。レバテック公表の40代平均年収約618万円や経産省のIT人材不足試算など実データで現実を整理し、強みの活かし方、おすすめエージェント、進め方、FAQまで解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：厳しい面はあるが、戦い方次第で十分可能" },
  { id: "why-hard", label: "「40代は厳しい」と言われる理由への回答" },
  { id: "market", label: "40代エンジニアの市場データ" },
  { id: "company-needs", label: "企業が40代に求めるもの" },
  { id: "patterns", label: "成功パターンと失敗パターン" },
  { id: "strategy", label: "キャリア戦略（マネジメント vs スペシャリスト）" },
  { id: "agents", label: "40代におすすめのエージェント" },
  { id: "process", label: "転職活動の進め方" },
  { id: "faq", label: "よくある質問" },
];

const whyHard = [
  {
    claim: "「求人の絶対数が減る」",
    answer:
      "事実として、20〜30代向けの即戦力・ポテンシャル求人と比べると、40代が応募できる求人の母数は絞られます。ただし母数が減るぶん、対象は「経験・マネジメント・専門性が要件のポジション」に寄ります。数を追うのではなく、要件に合うポジションへ的確にアプローチすることが前提になります。",
  },
  {
    claim: "「年収が下がりそう」",
    answer:
      "doda「2024年度 決定年収レポート」（2025年5月公表）では転職者の約6割が年収アップとされ、同職種・同レベルなら維持〜アップが一般的です。下がりやすいのはマネジメント→プレイヤーや異業種への転向など大きな方向転換を伴う場合で、40代だから一律に下がるわけではありません。",
  },
  {
    claim: "「年齢でフィルターされる」",
    answer:
      "募集要項に経験年数やマネジメント要件が含まれることはありますが、年齢のみを理由とした採用拒否は法律上認められていません。実際にはSEの平均年齢が37.1歳（厚労省 job tag）で、40代は職種としてそれほど外れた年代ではありません。重要なのは、年齢を補って余りある価値を示せるかです。",
  },
  {
    claim: "「新しい技術についていけないと見られる」",
    answer:
      "懸念を持たれやすいのは事実なので、直近で学んだ技術や適応した事例を具体的に示すことで払拭できます。15年以上の経験から得た設計力・基盤技術の理解は、経験年数がそのまま価値になる領域でもあります。",
  },
];

const marketRows: [string, string][] = [
  ["40代エンジニア平均年収", "約618万円（レバテック公表の年代別平均年収・2025年）"],
  ["年収1,000万円以上の割合", "40代で12.67%（レバテック公表・2025年。30代の8.01%より高い）"],
  ["SE平均年収（全年代）", "578.5万円（厚労省 job tag「システムエンジニア（受託開発）」令和7年賃金構造基本統計調査ベース）"],
  ["SE平均年齢", "37.1歳（同上）"],
  ["転職者の年収アップ率", "約6割が年収アップ（doda「2024年度 決定年収レポート」2025年5月公表）"],
  ["IT人材不足の見通し", "2030年に最大約79万人不足の試算（経産省「IT人材需給に関する調査」2019年公表）"],
];

const companyNeeds = [
  {
    title: "マネジメント・リーダーシップ",
    desc: "チームビルディング、ピープルマネジメント、プロジェクト管理の実績は40代固有の強みです。EM・VPoEなど、まさにこの経験が活きるポジションが狙い目です。",
  },
  {
    title: "深い技術的専門性",
    desc: "15年以上の実務から得た技術の深い理解は、シニアアーキテクトやテクニカルフェローとして評価されます。セキュリティ・データベース・インフラ設計などの基盤技術は経験年数が価値になります。",
  },
  {
    title: "ドメイン知識と業界理解",
    desc: "特定業界での長年の経験は、DX推進やテクニカルコンサルの分野で価値を生みます。業界知識とIT技術の掛け算ができる人材は年齢に関わらず需要があります。",
  },
  {
    title: "学習姿勢と適応力",
    desc: "「過去の実績」だけでなく、直近で何を学び新しい環境にどう適応したかを示せることが、40代特有の懸念を払拭する決め手になります。",
  },
];

const successPatterns = [
  "プログラマー枠ではなく、テックリード・EM・アーキテクト・PMなど経験が活きるポジションを狙っている",
  "「30名のチームをマネジメント」「レスポンスを60%改善」など実績を数値で語れる",
  "在職中に活動を始め、長期戦を前提に焦らず条件を比較している",
  "IT特化型・総合型・ハイクラス型を併用し、40代向け求人の網を広げている",
];

const failurePatterns = [
  "40代でプレイヤー（プログラマー）枠に応募し、若手と同じ土俵で比較されてしまう",
  "短期間で決めようとして焦り、条件を妥協して後悔する",
  "実績が抽象的で、マネジメントや専門性の貢献が伝わらない",
  "1社のエージェントだけに依存し、限られた求人で判断してしまう",
];

const agents = [
  {
    name: "doda（IT・通信エンジニア）",
    href: "/review/doda-it/",
    fit: "幅広い選択肢からじっくり選びたい40代",
    reason:
      "国内最大級の求人数で、検索・エージェント・スカウトを併用できるハイブリッド型。母数が確保しやすく、40代向けポジションを探しやすい。転職者の約6割が年収アップ、IT・通信の平均決定年収は486万円（2024年度・doda公表値）。",
  },
  {
    name: "レバテックキャリア",
    href: "/review/levtech/",
    fit: "年収800万円台を狙うマネージャー・アーキテクト志向の40代",
    reason:
      "IT/Web特化で高年収求人の比率が高く、二次情報では600万円以上が公開求人の約8割。技術に精通したアドバイザーが、40代の経験に合うリード・設計ポジションを提案してくれる。",
  },
  {
    name: "ビズリーチ",
    href: "/review/bizreach-it/",
    fit: "ハイクラス・管理職ポジションを狙う40代",
    reason:
      "ハイクラス・スカウト型で、年収1,000万円以上の求人が全体の約4割との二次情報も。外資・管理職に強く、レバテック公表で40代の12.67%が到達する1,000万円超のレンジを狙う際に相性が良い。無料会員でも利用可能。",
  },
];

const faqs = [
  {
    q: "40代エンジニアの転職は本当に厳しいですか？",
    a: "30代と比べると応募できる求人の母数は減るため「厳しい」と言われますが、それは要件に合わないポジションまで含めた話です。マネジメント経験・アーキテクト経験・特定ドメインの専門性がある40代は希少人材として評価され、レバテック公表では40代平均年収は約618万円、1,000万円以上も12.67%が到達しています。強みが活きるポジションへ的確にアプローチできるかが分かれ目です。",
  },
  {
    q: "40代で転職すると年収は下がりますか？",
    a: "必ずしも下がりません。doda「2024年度 決定年収レポート」（2025年5月公表）では転職者の約6割が年収アップで、同職種・同レベルなら維持〜アップが一般的です。下がりやすいのはマネジメント→プレイヤーや異業種への転向など大きな方向転換を伴う場合です。短期の年収だけでなく中期のキャリア価値で判断しましょう。",
  },
  {
    q: "40代エンジニアは何社くらい応募すべき？",
    a: "母数が絞られるぶん、闇雲な数より「要件に合う質の高い応募」が重要です。本命を含めて10〜15社程度に絞り、エージェントと優先順位を決めて並行で進めるのが現実的です。40代は転職活動が長期化しやすいため、在職中に活動し、複数内定を比較できる状態を目指しましょう。",
  },
  {
    q: "40代の転職活動はどのくらいかかりますか？",
    a: "個人差はありますが、40代は30代より長期化しやすく、準備から内定承諾まで数か月単位を見込んでおくと安心です。要件に合うポジションが出るタイミングも重要なので、在職中に活動を始め、求人にアンテナを張り続けることが成功率を高めます。焦って条件を妥協しないことが何より大切です。",
  },
  {
    q: "40代で未経験からエンジニアになれますか？",
    a: "正直に言えば、40代で完全未経験からのエンジニア転職は難度が高いです。ただし前職でのIT関連経験（社内SE、VBA開発、データ分析など）があれば、それを足がかりにIT企業へ移ることは可能です。業界知識とIT知識の両方が求められるDX推進ポジションなどが狙い目になります。",
  },
  {
    q: "40代のエンジニア転職で有利になるスキルは？",
    a: "技術面ではクラウドアーキテクチャ設計、セキュリティ、データ基盤構築などの上流スキルが有利です。加えてプロジェクトマネジメント経験、チームビルディング実績、技術戦略の策定経験があると、テックリード・EM・VPoEなどのハイクラスポジションを狙えます。15年以上の経験が価値になる基盤技術領域は特に強みになります。",
  },
  {
    q: "エージェントは複数使っても大丈夫ですか？",
    a: "問題ありません。40代向け求人は母数が限られるため、IT特化型・総合型・ハイクラス型を2〜3社併用して網を広げるのが効果的です。ただし同じ求人に複数経由で応募すると企業側で重複し心証を損なうため、応募先が重複しないよう自分で管理しましょう。",
  },
  {
    q: "40代でマネジメント経験がなくても転職できますか？",
    a: "可能です。マネジメントがなくても、特定領域を深く突き詰めたスペシャリスト（アーキテクト、SRE、セキュリティ、データエンジニアなど）の道があります。ICパスを整備する企業も増えており、プレイヤーとして高い専門性で勝負するポジションも存在します。自分の強みがどちらの軸かを見極めることが重要です。",
  },
];

export default function Age40sPage() {
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
        title="40代エンジニア転職は厳しい？理由と現実的な戦略【2026年6月】"
        description="40代エンジニアの転職が厳しいと言われる理由に正面から回答。市場データ・40代の強み・おすすめエージェント・進め方を現実的に解説。"
        url="/age/40s/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "年代別ガイド" },
          { name: "40代エンジニアの転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          40代エンジニア転職は厳しい？理由と現実的な戦略
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 「厳しい」と言われる理由への正面回答と成功戦略
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          「40代エンジニアの転職は厳しい」という声は確かに存在します。本記事ではその「厳しい」と言われる理由のひとつひとつに正面から向き合い、公的統計とエージェント公表値で現実を整理します。そのうえで、40代だからこそ通用する現実的な戦略を解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省 job tag",
            "経済産業省「IT人材需給に関する調査」（2019年公表）",
            "doda「2024年度 決定年収レポート」（2025年5月公表）",
            "レバテック公表の年代別平均年収（2025年）",
          ]}
        />

        {/* 結論ファースト */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：厳しい面はあるが、戦い方次第で十分に可能</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              40代は求人の母数こそ絞られますが、マネジメント・専門性・ドメイン知識という40代固有の武器を活かせるポジションを狙えば、年収を維持・アップする転職も現実的です。「数を追う」のではなく「要件に合うポジションへ的確に当てる」ことが成功の前提です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><span className="text-petrol font-bold shrink-0">1.</span>レバテック公表では40代平均年収は約618万円で、1,000万円以上も12.67%（30代の8.01%より高い・2025年）。</li>
              <li className="flex gap-2"><span className="text-petrol font-bold shrink-0">2.</span>dodaの2024年度決定年収レポートでは転職者の約6割が年収アップ（2025年5月公表）。</li>
              <li className="flex gap-2"><span className="text-petrol font-bold shrink-0">3.</span>経産省試算では2030年に最大約79万人のIT人材不足（2019年公表）で、経験者需要が続く。</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-petrol hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 厳しいと言われる理由への回答 */}
        <section id="why-hard" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">「40代は厳しい」と言われる理由への正面回答</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            「厳しい」という言葉は、複数の異なる懸念がひとまとめにされています。ひとつずつ分解すると、避けられる誤解と、戦略で対処すべき現実が見えてきます。
          </p>
          <div className="space-y-4">
            {whyHard.map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{item.claim}への回答</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            40代のリアルをさらに掘り下げた<Link href="/knowledge/40s-reality/" className="text-petrol hover:underline">40代エンジニア転職の現実</Link>や、<Link href="/knowledge/age-discrimination/" className="text-petrol hover:underline">年齢と転職</Link>もあわせてご覧ください。
          </p>
        </section>

        {/* 市場データ */}
        <section id="market" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">40代エンジニアの市場データ</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            印象論ではなく、公的統計とエージェント公表値で40代の現実を確認します。出典と時点を明記しています。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-5">
            <table className="w-full text-sm">
              <tbody>
                {marketRows.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-2/5 border-b border-slate-200 align-top">
                      {label}
                    </th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed">
            注目すべきは、年収のピークが40代に向けて上がっている点です。レバテック公表では30代平均約499万円に対し40代は約618万円、1,000万円以上の割合も30代8.01%から40代12.67%へと増えます。これは「経験が正当に評価されれば40代でむしろ年収が上がる」ことを示しています。求人の母数は絞られても、要件に合致すれば高い水準で評価される——これが40代市場の実像です。
          </p>
        </section>

        {/* 企業が求めるもの */}
        <section id="company-needs" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">企業が40代エンジニアに求めるもの（4つの武器）</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            40代に期待されるのは若手と同じプレイヤー力ではなく、経験から生まれる「替えの利かない価値」です。次の4点が評価の軸になります。
          </p>
          <div className="space-y-4">
            {companyNeeds.map((item, i) => (
              <div key={i} className="bg-petrol-soft rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-2">{item.title}</h3>
                <p className="text-sm text-petrol-deep leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 成功・失敗パターン */}
        <section id="patterns" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">成功パターンと失敗パターン</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-3">うまくいく人の共通点</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {successPatterns.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-600 shrink-0">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-700 mb-3">つまずきやすいパターン</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {failurePatterns.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-500 shrink-0">×</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            実績の数値化は<Link href="/knowledge/resume/" className="text-petrol hover:underline">職務経歴書の書き方</Link>、市場価値の確認は<Link href="/knowledge/market-value/" className="text-petrol hover:underline">自分の市場価値を知る方法</Link>を参考にしてください。
          </p>
        </section>

        {/* キャリア戦略 */}
        <section id="strategy" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キャリア戦略：マネジメント vs スペシャリスト</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            40代の転職は、自分の軸を「マネジメント」か「スペシャリスト」のどちらに置くかでアプローチ先が大きく変わります。プレイヤー枠で若手と競うのではなく、経験が活きる土俵を選ぶことが成功の鍵です。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">マネジメントパス</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                チームと組織の成果にコミットする道。エンジニアリングマネージャー（EM）、VPoE、テクニカルPMなどが該当します。ピープルマネジメント・採用・プロジェクト管理の実績が、40代の最大の武器として評価されます。
              </p>
              <p className="text-xs text-petrol">向いている人: 組織やチームの成果に責任を持ちたい／調整・育成が得意</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">スペシャリストパス（IC）</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                技術を突き詰める道。シニアアーキテクト、SRE、セキュリティ、データエンジニア、テクニカルフェローなどが該当します。15年以上の経験から得た基盤技術の深さが、そのまま価値になります。
              </p>
              <p className="text-xs text-petrol">向いている人: 技術の深さで勝負したい／マネジメントより手を動かしたい</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            キャリア設計の考え方は<Link href="/knowledge/career-plan/" className="text-petrol hover:underline">エンジニアのキャリアプラン</Link>、年収の動きは<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収のリアル</Link>も参考になります。
          </p>
        </section>

        {/* おすすめエージェント */}
        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">40代エンジニアにおすすめの転職エージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            40代は求人の母数が限られるため、求人量を確保できる総合型を軸に、IT特化型・ハイクラス型を併用して網を広げるのが効果的です。各社の公表値・特徴は下記の通りで、いずれも基本的に無料で利用できます。
          </p>
          <div className="space-y-4">
            {agents.map((agent, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <h3 className="font-bold text-slate-800">{agent.name}</h3>
                  <Link href={agent.href} className="text-xs text-petrol hover:underline shrink-0">
                    詳しいレビューを見る →
                  </Link>
                </div>
                <p className="text-sm text-slate-600 mb-2 leading-relaxed">{agent.reason}</p>
                <p className="text-xs text-petrol font-medium">こんな40代向き: {agent.fit}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            40代向けの比較は<Link href="/compare/40s-agents/" className="text-petrol hover:underline">40代エンジニアにおすすめのエージェント比較</Link>、ハイクラス志向なら<Link href="/compare/highclass/" className="text-petrol hover:underline">ハイクラス向けエージェント比較</Link>も参考になります。
          </p>
        </section>

        {/* 進め方 */}
        <section id="process" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職活動の進め方（5ステップ）</h2>
          <div className="space-y-4">
            {[
              { step: "STEP 1", title: "強みとポジションの定義", desc: "マネジメント・専門性・ドメイン知識のうち、自分の核となる武器を特定し、それが活きるポジション（EM・アーキテクト・PM等）を定義します。プレイヤー枠に流れないことが重要です。" },
              { step: "STEP 2", title: "実績の数値化", desc: "「30名のチームをマネジメント」「売上20%向上のシステムを設計」など、貢献を数値で語れるよう棚卸しします。これが40代転職の必須条件です。" },
              { step: "STEP 3", title: "エージェント2〜3社に登録", desc: "総合型（doda等）で母数を確保しつつ、IT特化型・ハイクラス型を併用。在職中である旨を伝え、長期戦のスケジュールを共有します。" },
              { step: "STEP 4", title: "書類添削・面接対策", desc: "マネジメント・設計の貢献が伝わる職務経歴書に磨き、面接では意思決定の背景や直近の学習を語れるよう準備します。" },
              { step: "STEP 5", title: "内定比較・条件交渉・退職", desc: "複数内定を年収・役割・働き方で比較し、必要なら条件交渉をエージェント経由で行います。焦って妥協せず、中期のキャリア価値で判断します。" },
            ].map((s, i) => (
              <div key={i} className="flex gap-4 border border-slate-200 rounded-lg p-5">
                <div className="text-petrol font-bold text-sm shrink-0 w-16">{s.step}</div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{s.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            スケジュール感は<Link href="/knowledge/timeline/" className="text-petrol hover:underline">転職活動のスケジュール</Link>、面接対策は<Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接対策ガイド</Link>を参照してください。
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
          <h2 className="text-xl font-bold mb-3">40代の経験を正当に評価する企業を見つけよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型・ハイクラス型エージェントなら、あなたのマネジメント経験・技術力を正しく評価する企業を紹介してくれます。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        {/* 関連リンク */}
        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "30代エンジニアの転職ガイド", href: "/age/30s/" },
              { name: "35歳エンジニアの転職は限界？", href: "/age/35/" },
              { name: "40代エンジニア転職の現実", href: "/knowledge/40s-reality/" },
              { name: "40代の年収のリアル", href: "/knowledge/salary-40s/" },
              { name: "40代エージェント比較", href: "/compare/40s-agents/" },
              { name: "技術面接対策ガイド", href: "/knowledge/tech-interview/" },
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
