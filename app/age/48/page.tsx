import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "48歳エンジニアの転職｜管理職・高度専門で勝つ40代後半の現実【2026年6月】",
  description:
    "48歳エンジニアの転職市場を正直に解説。レバテック公表の40代平均年収約618万円・1,000万円以上12.67%などの公表値をもとに、管理職・高度専門でないと難度が上がる40代後半の現実、それでも通る戦い方、狙うべき求人、年収の考え方、おすすめエージェント、FAQまで網羅します。",
};

const toc = [
  { id: "conclusion", label: "結論：48歳は管理職・高度専門で勝負する" },
  { id: "reality", label: "48歳の転職の現実（正直に）" },
  { id: "market", label: "48歳エンジニアの市場データ" },
  { id: "strength", label: "48歳の強みと弱み" },
  { id: "jobs", label: "48歳が狙うべき求人" },
  { id: "salary", label: "48歳の年収の考え方" },
  { id: "strategy", label: "キャリア戦略（管理職 vs 高度専門）" },
  { id: "agents", label: "48歳におすすめのエージェント" },
  { id: "process", label: "転職活動の進め方" },
  { id: "faq", label: "よくある質問" },
];

const reality = [
  {
    claim: "「プレイヤー枠での転職は難しくなる」",
    answer:
      "事実として、48歳が純粋なプログラマー（プレイヤー）枠で応募すると、若手やコストの面で比較され不利になります。48歳の転職は、マネジメントか高度専門という「経験そのものが要件になる役割」を前提に設計する必要があります。これは制約であると同時に、戦う土俵を明確にしてくれる前提でもあります。",
  },
  {
    claim: "「求人の母数がさらに絞られる」",
    answer:
      "40代後半は、前半の42歳前後と比べても応募できる求人の母数が一段絞られます。だからこそ、数を追うのではなく、要件に合うポジションへ的確に当てる戦い方が不可欠です。エージェントを複数併用し、非公開求人を含めて母数を確保することが、48歳では特に重要になります。",
  },
  {
    claim: "「年齢でフィルターされるのでは」",
    answer:
      "募集要項に経験年数やマネジメント要件が含まれることはありますが、年齢のみを理由とした採用拒否は法律上認められていません。48歳でも、VPoE・EM・シニアアーキテクト・技術顧問など、年齢に見合う役割の需要は存在します。重要なのは、年齢を補って余りある「替えの利かない価値」を示せるかです。",
  },
  {
    claim: "「新しい技術についていけないと見られる」",
    answer:
      "懸念を持たれやすいのは事実です。直近で学んだ技術や、新しい環境へ適応した具体的な事例を示すことで払拭できます。20年以上の経験から得た設計力・基盤技術の理解、組織を動かしてきた実績は、48歳ならではの価値であり、若手には簡単に真似できない領域です。",
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

const strengths = [
  "20年以上の経験から得た設計力・基盤技術の理解が、シニアアーキテクト・技術顧問として評価される",
  "組織マネジメントやプロジェクト管理を率いた実績は、VPoE・EMなど経営に近い役割に直結する",
  "特定業界での長年の知見が「技術 × ドメイン × 組織」の掛け算となり、替えの利かない希少性を生む",
  "人脈・信頼の蓄積があり、リファラルや技術顧問など正規の公募以外の経路も活かせる",
];

const weaknesses = [
  "プレイヤー（プログラマー）枠での転職はほぼ通らず、役割での勝負が必須になる",
  "求人の母数が40代前半よりさらに絞られ、要件に合うポジションを待つ姿勢も必要になる",
  "完全未経験分野へのキャリアチェンジは現実的に難しく、既存の強みを軸にした移行が前提",
  "実績が抽象的だと評価が伸びず、組織・事業へのインパクトを具体的に語る力が一層問われる",
];

const jobs = [
  {
    title: "VPoE・エンジニアリングマネージャー（EM）・開発部長",
    desc: "組織と事業の成果に責任を持つ経営に近い役割。採用・育成・予算・技術戦略を率いた経験が直接要件になります。48歳のマネジメント実績が最も活きる本命の狙い目です。",
  },
  {
    title: "シニアアーキテクト・技術顧問・フェロー",
    desc: "20年以上の経験から得た設計力・基盤技術の深さで勝負する高度専門の道。特定領域の第一人者として、技術選定や全社的な技術課題の解決を担います。常勤に限らず、技術顧問など柔軟な関わり方もあります。",
  },
  {
    title: "DX推進責任者・テクニカルコンサル",
    desc: "業界ドメイン知識とITと組織を動かす力の掛け算が求められる役割。48歳が培った業界理解と推進力は、事業会社のDX部門やコンサル領域で替えが利きにくい価値を生みます。",
  },
];

const agents = [
  {
    name: "ビズリーチ",
    href: "/review/bizreach-it/",
    fit: "管理職・経営に近い役割を狙う48歳",
    reason:
      "ハイクラス・スカウト型で、年収1,000万円以上の求人が全体の約4割との二次情報も。外資・管理職に強く、VPoE・EM・技術顧問など48歳の経験が要件になる役割と出会いやすい。市場価値を客観的に把握でき、無料会員でも利用可能。",
  },
  {
    name: "JACリクルートメント",
    href: "/review/jac-recruitment/",
    fit: "ハイクラス・管理職・専門職をじっくり狙う48歳",
    reason:
      "管理職・専門職・ハイクラス層に強い両面型エージェント。コンサルタントが企業と直接やり取りするため、48歳の経験に見合う役割をピンポイントで提案しやすい。要件の厳しいポジションでも丁寧に伴走してくれる。",
  },
  {
    name: "レバテックキャリア",
    href: "/review/levtech/",
    fit: "技術顧問・シニアアーキテクトなど高度専門を狙う48歳",
    reason:
      "IT/Web特化で高年収求人の比率が高く、二次情報では600万円以上が公開求人の約8割。技術に精通したアドバイザーが、48歳の深い専門性に合うアーキテクト・顧問ポジションを提案してくれる。",
  },
];

const faqs = [
  {
    q: "48歳エンジニアの転職は正直に言って厳しいですか？",
    a: "正直に言えば、プレイヤー（プログラマー）枠での転職は難しく、40代前半よりも求人の母数は絞られます。一方で、マネジメント経験や高度な専門性があれば、VPoE・EM・シニアアーキテクト・技術顧問など、48歳の経験が要件になる役割の需要は確かに存在します。レバテック公表では40代平均年収は約618万円、1,000万円以上も12.67%。役割で勝負できるかが分かれ目です。",
  },
  {
    q: "48歳と45歳で、転職市場の扱いは変わりますか？",
    a: "40代後半に進むほど、プレイヤー枠は通りにくくなり、管理職・高度専門の要件が一層強く問われます。45歳でも傾向は同じですが、48歳ではマネジメントか高度専門のどちらかを明確に持っていることが、ほぼ前提条件になります。その分、要件を満たせば年齢が強みに転じる役割（経営に近いポジション・技術顧問など）が狙えます。",
  },
  {
    q: "48歳でマネジメント経験がないと転職できませんか？",
    a: "マネジメント経験がなくても、高度な専門性があれば道はあります。特定領域の第一人者として、シニアアーキテクト・技術顧問・フェローなどを狙えます。ただし、マネジメントも高度専門もどちらも持たない状態でのプレイヤー転職は、48歳では現実的に厳しいのが実情です。自分の「替えの利かない強み」がどこにあるかを明確にすることが出発点になります。",
  },
  {
    q: "48歳で転職すると年収は下がりますか？",
    a: "役割次第です。doda「2024年度 決定年収レポート」（2025年5月公表）では転職者の約6割が年収アップとされ、管理職・高度専門の役割で移れば維持〜アップも十分に可能です。一方、役割を下げる転向や母数の少ない中での妥協では下がることもあります。48歳は短期の年収だけでなく、役割・裁量・働き方を含めた総合的な条件で判断するのが賢明です。",
  },
  {
    q: "48歳で未経験からエンジニアになれますか？",
    a: "正直に言えば、48歳で完全未経験からのエンジニア転職は現実的に非常に難しいです。これまでのキャリアで培ったIT関連経験や、業界ドメイン知識、マネジメント経験を軸にした転職であれば道はあります。48歳の転職は「ゼロから挑戦する」より「既にある強みを最大限に活かす」設計が前提になります。",
  },
  {
    q: "48歳の転職活動はどのくらいかかりますか？",
    a: "個人差は大きいですが、40代後半は求人の母数が絞られるぶん、要件に合うポジションが出るタイミング待ちも含めて、半年前後の長期戦を見込んでおくと安心です。在職中に活動を始め、エージェントやリファラルなど複数の経路で求人にアンテナを張り続けることが成功率を高めます。焦って条件を妥協しないことが何より大切です。",
  },
  {
    q: "48歳でもエージェントは使えますか？複数併用すべき？",
    a: "使えます。むしろ48歳は求人の母数が限られるため、ハイクラス型・IT特化型を2〜3社併用して網を広げることが効果的です。ハイクラス・スカウト型では、企業側から役割に見合うオファーが届くこともあります。ただし同じ求人に複数経由で応募すると企業側で重複し心証を損なうため、応募先が重複しないよう自分で管理しましょう。",
  },
];

export default function Age48Page() {
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
        title="48歳エンジニアの転職｜管理職・高度専門で勝つ40代後半の現実【2026年6月】"
        description="48歳エンジニアの転職を正直に解説。管理職・高度専門でないと難度が上がる40代後半の現実、それでも通る戦い方、狙うべき求人、年収の考え方、おすすめエージェントまで。"
        url="/age/48/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "年代別ガイド" },
          { name: "48歳エンジニアの転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          48歳エンジニアの転職｜管理職・高度専門で勝つ40代後半の現実
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 40代後半の現実を正直に整理し、それでも通る戦い方を示す
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          48歳の転職は、これまでの年代と同じ前提では語れません。プレイヤー（プログラマー）枠での転職は難しく、求人の母数も40代前半よりさらに絞られます。本記事ではその現実を率直に整理したうえで、マネジメントか高度専門という「経験そのものが要件になる役割」で勝負するための戦略を、実データとともに具体的に解説します。誠実に現実を伝えることが、48歳の転職を成功に近づける第一歩だと考えています。
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
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：48歳は「管理職・高度専門」で勝負する</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              48歳の転職は、プレイヤー枠では現実的に厳しく、マネジメントか高度専門のどちらかを武器に役割で勝負することが前提です。逆に言えば、VPoE・EM・シニアアーキテクト・技術顧問など、20年以上の経験が要件になる役割であれば、年齢はむしろ強みになります。母数が限られるぶん、要件に合うポジションへ的確に当てる戦い方が成否を分けます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><span className="text-blue-600 font-bold shrink-0">1.</span>レバテック公表では40代平均年収は約618万円で、1,000万円以上も12.67%（30代の8.01%より高い・2025年）。</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold shrink-0">2.</span>dodaの2024年度決定年収レポートでは転職者の約6割が年収アップ（2025年5月公表）。役割次第で48歳も維持〜アップは可能。</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold shrink-0">3.</span>経産省試算では2030年に最大約79万人のIT人材不足（2019年公表）で、経験者・高度人材の需要は続く。</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-blue-600 hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 現実 */}
        <section id="reality" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">48歳の転職の現実（正直に）</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            48歳の転職には、楽観だけでは乗り切れない現実があります。ここでは耳に痛い点も含めて正直に整理します。現実を直視することが、勝てる土俵を選ぶための前提になります。
          </p>
          <div className="space-y-4">
            {reality.map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{item.claim}について</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            40代後半のリアルは<Link href="/knowledge/40s-reality/" className="text-blue-600 hover:underline">40代エンジニア転職の現実</Link>、年齢の壁については<Link href="/knowledge/age-discrimination/" className="text-blue-600 hover:underline">年齢と転職</Link>でも掘り下げています。
          </p>
        </section>

        {/* 市場データ */}
        <section id="market" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">48歳エンジニアの市場データ</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            印象論ではなく、公的統計とエージェント公表値で48歳の現実を確認します。出典と時点を明記しています。
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
            データが示すのは、40代の年収レンジが30代より高く、1,000万円以上の割合も増えるという事実です（レバテック公表で40代12.67%）。これは「役割に見合う経験を持つ人材は40代で高く評価される」ことを意味します。母数が絞られる48歳でも、要件を満たせば高水準で評価される余地は確かにあります。なお、48歳「ピンポイント」の平均年収を断定する公的データは存在しないため、ここでは40代単位の公表値を傾向として参照しています。
          </p>
        </section>

        {/* 強みと弱み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">48歳の強みと弱み</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-3">48歳の強み</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {strengths.map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-600 shrink-0">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-amber-200 rounded-lg p-5">
              <h3 className="font-bold text-amber-700 mb-3">48歳が直視すべき弱み</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {weaknesses.map((t, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-600 shrink-0">!</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            実績の語り方は<Link href="/knowledge/resume/" className="text-blue-600 hover:underline">職務経歴書の書き方</Link>、市場価値の確認は<Link href="/knowledge/market-value/" className="text-blue-600 hover:underline">自分の市場価値を知る方法</Link>を参考にしてください。
          </p>
        </section>

        {/* 狙うべき求人 */}
        <section id="jobs" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">48歳が狙うべき求人</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            48歳は、プレイヤー枠ではなく、経験が要件になる役割に絞って狙うのが鉄則です。代表的な狙い目は次の3つです。
          </p>
          <div className="space-y-4">
            {jobs.map((item, i) => (
              <div key={i} className="bg-blue-50 rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-2">{item.title}</h3>
                <p className="text-sm text-blue-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 年収の考え方 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">48歳の年収の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            48歳の年収は、役割によって大きく分かれます。レバテック公表の40代平均約618万円を基準に、VPoE・EM・シニアアーキテクト・技術顧問といった役割に就ければ、40代の12.67%が到達する1,000万円超のレンジも視野に入ります。逆に、役割を下げての転職や母数の少ない中での妥協では、年収が下がることもあります。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            doda「2024年度 決定年収レポート」（2025年5月公表）では転職者の約6割が年収アップとされますが、これは全年代の傾向であり、48歳「ピンポイント」の平均年収を断定する公的データは存在しません。48歳では年収の数字だけでなく、役割・裁量・働き方・契約形態（常勤か技術顧問かなど）を含めた総合的な条件で判断するのが現実的です。
          </p>
          <p className="text-slate-600 leading-relaxed text-sm">
            40代の年収は<Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代の年収のリアル</Link>、年収交渉は<Link href="/knowledge/salary-negotiation/" className="text-blue-600 hover:underline">年収交渉の進め方</Link>もあわせてご覧ください。
          </p>
        </section>

        {/* キャリア戦略 */}
        <section id="strategy" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キャリア戦略：管理職 vs 高度専門</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            48歳の転職は、「管理職（マネジメント）」か「高度専門（スペシャリスト）」のどちらかを明確な武器として持つことが前提です。両方を備えていれば理想的ですが、どちらか一方でも突き抜けていれば、年齢に見合う役割を狙えます。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">管理職パス（VPoE・EM・開発部長）</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                組織と事業の成果に責任を持つ道。採用・育成・予算・技術戦略を率いた実績が、48歳の最大の武器として評価されます。経営に近いポジションでは、技術と組織の両方を理解した人材が求められます。
              </p>
              <p className="text-xs text-blue-600">向いている人: 組織・事業の成果に責任を持ちたい／人と組織を動かしてきた</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">高度専門パス（アーキテクト・技術顧問）</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                特定領域の第一人者として技術で勝負する道。シニアアーキテクト、技術顧問、フェローなどが該当します。20年以上の経験から得た基盤技術の深さが価値になり、常勤に限らず柔軟な関わり方も選べます。
              </p>
              <p className="text-xs text-blue-600">向いている人: 技術の深さで勝負したい／第一人者としての専門性がある</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            キャリア設計の考え方は<Link href="/knowledge/career-plan/" className="text-blue-600 hover:underline">エンジニアのキャリアプラン</Link>を参考にしてください。
          </p>
        </section>

        {/* おすすめエージェント */}
        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">48歳エンジニアにおすすめの転職エージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            48歳は求人の母数が限られるため、ハイクラス型を軸に、IT特化型を併用して網を広げるのが効果的です。各社の公表値・特徴は下記の通りで、いずれも基本的に無料で利用できます。
          </p>
          <div className="space-y-4">
            {agents.map((agent, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <h3 className="font-bold text-slate-800">{agent.name}</h3>
                  <Link href={agent.href} className="text-xs text-blue-600 hover:underline shrink-0">
                    詳しいレビューを見る →
                  </Link>
                </div>
                <p className="text-sm text-slate-600 mb-2 leading-relaxed">{agent.reason}</p>
                <p className="text-xs text-blue-600 font-medium">こんな48歳向き: {agent.fit}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            40代向けの比較は<Link href="/compare/40s-agents/" className="text-blue-600 hover:underline">40代エージェント比較</Link>、ハイクラス志向なら<Link href="/compare/highclass/" className="text-blue-600 hover:underline">ハイクラス向けエージェント比較</Link>も参考になります。
          </p>
        </section>

        {/* 進め方 */}
        <section id="process" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職活動の進め方（5ステップ）</h2>
          <div className="space-y-4">
            {[
              { step: "STEP 1", title: "替えの利かない強みの特定", desc: "管理職としての実績か、高度専門としての深さか、自分の「替えの利かない価値」を明確にします。これが48歳の転職の出発点であり、土俵選びの基準になります。" },
              { step: "STEP 2", title: "実績の徹底的な数値化", desc: "「50名規模の開発組織を統括」「全社基盤を刷新しコストを30%削減」など、組織・事業へのインパクトを数値で語れるよう棚卸しします。48歳では抽象的な実績は評価されません。" },
              { step: "STEP 3", title: "ハイクラス型を中心に2〜3社登録", desc: "ビズリーチ・JACなどハイクラス型を軸に、IT特化型を併用。リファラルや技術顧問など公募以外の経路も視野に入れ、母数を確保します。" },
              { step: "STEP 4", title: "書類添削・面接対策", desc: "組織・事業を動かした貢献が伝わる職務経歴書に磨き、面接では意思決定の背景・直近の学習・新環境への適応事例を語れるよう準備します。" },
              { step: "STEP 5", title: "条件の総合判断・退職", desc: "年収だけでなく役割・裁量・働き方・契約形態を含めて総合的に判断します。要件に合うポジションを焦らず待つ姿勢も大切です。承諾後は円満退職を進めます。" },
            ].map((s, i) => (
              <div key={i} className="flex gap-4 border border-slate-200 rounded-lg p-5">
                <div className="text-blue-600 font-bold text-sm shrink-0 w-16">{s.step}</div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{s.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            スケジュール感は<Link href="/knowledge/timeline/" className="text-blue-600 hover:underline">転職活動のスケジュール</Link>、面接対策は<Link href="/knowledge/tech-interview/" className="text-blue-600 hover:underline">技術面接対策ガイド</Link>を参照してください。
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
          <h2 className="text-xl font-bold mb-3">48歳の経験を「役割」として評価する企業を見つけよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            ハイクラス型エージェントなら、あなたのマネジメント実績・高度な専門性に見合う役割を紹介してくれます。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        {/* 関連リンク */}
        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "45歳エンジニアの転職", href: "/age/45/" },
              { name: "50代エンジニアの転職", href: "/age/50s/" },
              { name: "40代エンジニア転職の現実", href: "/knowledge/40s-reality/" },
              { name: "40代の年収のリアル", href: "/knowledge/salary-40s/" },
              { name: "40代エージェント比較", href: "/compare/40s-agents/" },
              { name: "ハイクラス向けエージェント比較", href: "/compare/highclass/" },
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
