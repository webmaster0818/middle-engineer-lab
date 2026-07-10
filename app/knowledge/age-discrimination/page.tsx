import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/age-discrimination/" },
  title: "エンジニア転職の年齢の壁【実態と突破法】30代・40代向け",
  description:
    "エンジニア転職の年齢の壁を実務目線で解説。年齢制限禁止のルール（一般的説明）、実務上の現実、書類で落ちる仕組み、35歳・40代が壁を突破する具体パターンを年収データとともにまとめました。",
};

const TITLE = "エンジニア転職の年齢の壁【実態と突破法】30代・40代向け";
const DESC =
  "エンジニア転職の年齢の壁を実務目線で解説。年齢制限禁止のルール、実務上の現実、書類で落ちる仕組み、35歳・40代が壁を突破する具体パターンを年収データとともにまとめました。";

const toc = [
  { id: "conclusion", label: "結論：年齢の壁の正体" },
  { id: "law", label: "年齢制限禁止のルール（一般的な説明）" },
  { id: "reality", label: "ルールと実務のギャップ" },
  { id: "data", label: "データで見る年齢と年収" },
  { id: "filter", label: "なぜ書類で落ちるのか（仕組み）" },
  { id: "break", label: "年齢の壁を突破する5パターン" },
  { id: "company", label: "年齢に寛容な企業の見分け方" },
  { id: "phrases", label: "面接での年齢懸念への返し方（例文）" },
  { id: "mid", label: "30代・40代視点：壁の高さは年代で違う" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "エンジニア採用に年齢制限はありますか？",
    a: "労働施策総合推進法（旧・雇用対策法）により、労働者の募集・採用では原則として年齢にかかわりなく均等な機会を与えることが事業主に義務づけられており、求人票への年齢制限の記載は原則禁止です。ただし長期勤続によるキャリア形成を図る目的（若年層対象）など、法令上認められた例外もあります。これは一般的な制度の説明であり、個別の適否は管轄のハローワーク・労働局にご確認ください。",
  },
  {
    q: "求人票に年齢制限がないのに、実際は年齢で落とされている気がします。",
    a: "求人票への記載が原則禁止であることと、選考過程で年齢が考慮されないことは別問題です。実務では『即戦力性が見えにくい』『技術が古い』『希望年収が高い』といった要素が年齢と結びついて見送りにつながることがあります。年齢そのものより、これらの言語化不足を改善する方が現実的な打ち手になります。",
  },
  {
    q: "35歳限界説は今も本当ですか？",
    a: "「35歳で求人がなくなる」という意味での限界説は実態と合いません。レバテックの公表値（2025年）では40代の正社員SE平均年収は約618万円と30代の約499万円を上回り、年収1,000万円以上の割合も40代で12.67%と30代の8.01%より高くなっています。ただし35歳前後を境に『ポテンシャル採用』から『即戦力採用』へ評価軸が移るのは事実で、その意味での節目は存在します。",
  },
  {
    q: "年齢を理由に不採用にされた場合、相談先はありますか？",
    a: "募集・採用での年齢を理由とした取り扱いについては、ハローワークや都道府県労働局が相談窓口になります。ただし採用は企業の裁量も大きく、年齢『だけ』が理由と立証するのは容易ではありません。実務的には、年齢フィルタを受けにくいエージェント経由の応募や、即戦力性の言語化で通過率を上げるアプローチが現実的です。",
  },
  {
    q: "エージェント経由だと年齢の壁は下がりますか？",
    a: "下がりやすくなります。エージェントはアドバイザーが推薦文を添えて企業に紹介するため、書類だけの一次フィルタを通り越して『スキル・経験』を見てもらいやすくなります。年齢に寛容な求人を持つエージェントを選び、複数併用するのが有効です。",
  },
  {
    q: "技術が古いと年齢の壁は高くなりますか？",
    a: "高くなりやすいです。レガシー領域（COBOL・古いJavaなど）の経験自体は価値がありますが、それだけだと『年齢が高く技術も古い』と二重に見られがちです。直近2〜3年でクラウドやモダン開発に触れた実績を1つでも示せると、陳腐化への懸念を打ち消せます。",
  },
  {
    q: "年齢に寛容な企業を効率よく探すには？",
    a: "中途採用比率が高い企業、社員の年齢分布が公開されている企業、外資系、DX推進中の事業会社は年齢に寛容な傾向があります。エージェントに『◯代の採用実績がある求人』と条件を伝えて絞り込むのが最短ルートです。",
  },
];

export default function AgeDiscriminationPage() {
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
      <ArticleJsonLd title={TITLE} description={DESC} url="/knowledge/age-discrimination/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "エンジニア転職の年齢の壁" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">{TITLE}</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | ミドルエンジニアのための年齢の壁・突破法</p>

        {/* 直答box (P6-C2) */}
        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】エンジニア転職に年齢の壁は本当にある？</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: 壁の正体は「年齢そのもの」ではなく、年齢が上がるほど『即戦力性の証明』を強く求められるという評価軸の変化です。門前払いではありません。</strong></p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・募集・採用での年齢制限は原則禁止（一般的な制度説明。詳細は労働局へ）</li><li>・40代の平均年収は約618万円（レバテック公表値・2025年）と30代を上回る</li><li>・突破の鍵は「即戦力性の言語化」「直近のモダン経験」「エージェント経由応募」</li></ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-2">
          「35歳限界説」「40代は無理」――エンジニア転職の年齢に関する言説は多いものの、ルール（年齢制限の禁止）と実務上の現実は分けて理解する必要があります。本記事では、制度の一般的な説明、実務で年齢が効いてしまう仕組み、そして30代・40代が壁を突破するための具体パターンを、公表データに基づいて解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表の年代別平均年収（2025年）",
            "経済産業省「IT人材需給に関する調査」（2019年公表）",
            "厚生労働省 job tag",
          ]}
        />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <div className="border-l-4 border-petrol bg-petrol-soft rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：年齢の壁の正体</h2>
            <p className="text-slate-700 leading-relaxed mb-3">
              年齢の壁の正体は「年齢そのもの」ではなく、<strong>年齢が上がるほど『即戦力性の証明』を強く求められる</strong>という評価軸の変化です。求人票への年齢制限は原則禁止であり、IT人材は構造的に不足しています。壁は「数の減少＋証明ハードルの上昇」であって「門前払い」ではありません。
            </p>
            <ul className="text-sm text-slate-700 space-y-1.5">
              <li>・募集・採用での年齢制限は原則禁止（一般的な制度説明。詳細は労働局へ）</li>
              <li>・40代の平均年収は約618万円（レバテック公表値・2025年）と30代を上回る</li>
              <li>・突破の鍵は「即戦力性の言語化」「直近のモダン経験」「エージェント経由応募」</li>
            </ul>
          </div>
        </section>

        {/* 法 */}
        <section id="law" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年齢制限禁止のルール（一般的な説明）</h2>
          <div className="border border-slate-200 rounded-lg p-5">
            <h3 className="font-bold text-slate-800 mb-3">募集・採用における年齢制限の禁止</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              事業主は、労働者の募集および採用について、原則として年齢にかかわりなく均等な機会を与えなければならないとされています（労働施策総合推進法。旧・雇用対策法の規定を引き継ぐもの）。これにより、求人票へ「◯歳以下」などの年齢制限を記載することは原則として認められていません。
            </p>
            <div className="bg-slate-50 rounded-lg p-4">
              <p className="text-xs text-slate-500 mb-2">法令上、例外として年齢制限が認められうる主なケース：</p>
              <ul className="text-xs text-slate-600 space-y-1">
                <li>・定年年齢を上限として、期間の定めのない労働契約で募集・採用する場合</li>
                <li>・長期勤続によるキャリア形成を図る目的で、若年層を対象に募集する場合</li>
                <li>・特定の年齢層が著しく少なく、その層を対象に募集する場合（技能・ノウハウ継承等）</li>
                <li>・法令により年齢制限が設けられている場合</li>
              </ul>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed mt-3">
              ※上記は制度の一般的な説明です。具体的な求人が違法かどうか、自分のケースが該当するかは、管轄のハローワークまたは都道府県労働局へご確認ください。本記事は法的助言ではありません。
            </p>
          </div>
        </section>

        {/* ギャップ */}
        <section id="reality" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ルールと実務のギャップ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「求人票に年齢を書けない」ことと「選考で年齢が一切考慮されない」ことは別です。実務では、年齢は次のような形で間接的に効いてきます。ここを理解すると、対策の方向が見えてきます。
          </p>
          <div className="space-y-4">
            {[
              { t: "求人の母数が年代で変わる", d: "年齢制限の記載はなくても、ポジションの想定年齢層は存在する。結果として、応募できる求人の絶対数は年代が上がるほど絞られる傾向がある。" },
              { t: "『即戦力前提』への切り替わり", d: "30代後半以降は『入ってすぐ戦力になるか』が前提条件になりやすい。ポテンシャル評価が薄れるぶん、実績の証明ハードルが上がる。" },
              { t: "年収レンジと役割のミスマッチ", d: "年齢相応の年収を希望すると、その額に見合う役割（リード・専門職）を求められる。額と役割が噛み合わないと見送られやすい。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1.5">{x.t}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* データ */}
        <section id="data" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">データで見る年齢と年収</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「年齢が上がると不利」という感覚に反して、年収データは年齢とともに上昇します。下表はレバテックが公表する正社員SEの年代別平均年収（2025年）です。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">年代</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">正社員SE平均年収</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">年収1,000万円以上の割合</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { age: "20代", salary: "約378万円", over: "—" },
                  { age: "30代", salary: "約499万円", over: "8.01%" },
                  { age: "40代", salary: "約618万円", over: "12.67%" },
                  { age: "50代", salary: "約685万円", over: "—" },
                ].map((r, i) => (
                  <tr key={r.age} className={i % 2 === 1 ? "bg-slate-50" : ""}>
                    <td className="border border-slate-200 px-4 py-3 text-slate-700 font-medium">{r.age}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{r.salary}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{r.over}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-6">
            出典：レバテック公表の年代別平均年収（2025年）。「—」は公表値が確認できない項目。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <p className="text-sm text-slate-600 leading-relaxed">
              背景として、経済産業省「IT人材需給に関する調査」（2019年公表の試算）では2030年に最大約79万人のIT人材不足が見込まれています。人材が足りない市場では、企業は年齢でフィルタするより『使える人を採る』方向に動かざるを得ません。年齢の壁が「以前ほど高くない」と言われる根拠の一つです。
            </p>
          </div>
        </section>

        {/* フィルタの仕組み */}
        <section id="filter" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">なぜ書類で落ちるのか（仕組み）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            書類選考で落ちる流れを分解すると、年齢が直接の理由になっているケースは意外と少なく、次の連鎖で見送られていることが多いです。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3">
            {[
              "① 書類で『何ができるか』が役割名止まりで、再現可能なスキルが見えない",
              "② 直近の経歴がレガシー中心で、求めるモダン技術と噛み合わない",
              "③ 希望年収が、提示できる即戦力性の根拠に対して高く見える",
              "④ 結果『この年齢でこの内容なら、別の候補者で』と相対比較で落ちる",
            ].map((s, i) => (
              <p key={i} className="text-sm text-slate-600 leading-relaxed">{s}</p>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed text-sm mt-4">
            つまり改善ポイントは「年齢」ではなく①〜③です。書類の書き方は<Link href="/knowledge/resume/" className="text-petrol hover:underline">職務経歴書の書き方</Link>、エージェントに見送られた場合の対処は<Link href="/knowledge/agent-rejection/" className="text-petrol hover:underline">エージェントに断られたとき</Link>で詳しく扱っています。
          </p>
        </section>

        {/* 突破パターン */}
        <section id="break" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年齢の壁を突破する5パターン</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "専門性を一点突破にする", desc: "『何でもできます』は年齢が上がるほど不利。セキュリティ・SRE・DB・クラウド基盤など、一領域の深さで勝負すると年齢が問題になりにくい。" },
              { num: "2", title: "直近のモダン経験を作る", desc: "個人開発・副業・社内の小さなPoCでも良いので、直近2〜3年でクラウド/コンテナ/CI-CD等に触れた事実を1つ用意し、陳腐化懸念を消す。" },
              { num: "3", title: "エージェント経由で一次フィルタを越える", desc: "推薦文付きで紹介されると、書類だけの機械的フィルタを越えてスキルを見てもらいやすい。年齢に寛容な求人を持つ複数社を併用する。" },
              { num: "4", title: "役割を明確にしたポジションを狙う", desc: "社内SE・DX推進・EM・テックリードなど役割が明確な求人は、年齢より『その役割を担えるか』で判断される。ドメイン知識が活きる。" },
              { num: "5", title: "スカウト型で市場価値を可視化する", desc: "スカウト型サービスに登録し、どんな年収・ポジションの声がかかるかを観測。壁の高さを感覚でなくデータで把握し、戦略を調整する。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.num}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed text-sm mt-4">
            スカウト型の使い方は<Link href="/knowledge/scout/" className="text-petrol hover:underline">スカウトサービス活用法</Link>を参照してください。
          </p>
        </section>

        {/* 企業選び */}
        <section id="company" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年齢に寛容な企業の見分け方</h2>
          <div className="space-y-4">
            {[
              { t: "外資系IT企業", d: "年齢よりスキルと成果で評価する文化が強い。英語力が求められる場合が多いが、年齢の壁は相対的に低い。" },
              { t: "中途採用比率が高い企業", d: "中途比率が高い企業は経歴の多様性を前提に組織が回っている。採用ページや口コミサイトで中途比率を確認できる。" },
              { t: "DX推進中の事業会社", d: "製造・金融・小売などのDX部門は中途採用が中心で、年齢より業界知識＋技術を重視する傾向がある。" },
              { t: "成長フェーズのスタートアップ", d: "シリーズB〜C以降は経験豊富なシニアを求める。若い組織に40代の判断力が必要とされるケースが多い。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1.5">{x.t}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed text-sm mt-4">
            自社開発・受託・SESや大手とスタートアップの違いは<Link href="/knowledge/startup-vs-enterprise/" className="text-petrol hover:underline">スタートアップvs大手</Link>でも整理しています。
          </p>
        </section>

        {/* 面接の返し方 */}
        <section id="phrases" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接での年齢懸念への返し方（例文）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            面接官が直接「年齢」を聞かなくても、「柔軟性は？」「年下のメンバーと働けるか？」という質問の裏に年齢への懸念があることがあります。事実ベースで前向きに返す例文を用意しておきましょう。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <div className="bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700">「年下のメンバーやマネージャーと働くことに抵抗はありませんか？」</div>
              <p className="px-4 py-3 text-sm text-slate-600 leading-relaxed">
                「役割と年齢は別だと考えています。前職でも自分より若いリードのもとでメンバーとして動いた経験があり、決定には素直に従い、必要なら自分の経験を判断材料として提供する立場で貢献してきました。フラットに動けることは自分の強みだと思っています。」
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <div className="bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700">「新しい技術へのキャッチアップは大丈夫ですか？」</div>
              <p className="px-4 py-3 text-sm text-slate-600 leading-relaxed">
                「直近では業務外でも◯◯（例：Go＋コンテナ）を使って個人開発を続けており、手を動かす習慣を切らさないようにしています。長く現場にいるぶん、新しい技術を既存の知識と接続して学べるのは年齢を重ねた強みだと感じています。」
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <div className="bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700">「これまでのやり方にこだわりすぎませんか？」</div>
              <p className="px-4 py-3 text-sm text-slate-600 leading-relaxed">
                「自分のやり方を持ちつつ、チームの方針が優先だと考えています。前職でも、自分が慣れた方法より、チームの標準に合わせて切り替えた経験があります。判断基準は『チームとプロダクトにとって良いか』に置いています。」
              </p>
            </div>
          </div>
        </section>

        {/* 30代40代視点 */}
        <section id="mid" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代視点：壁の高さは年代で違う</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">30代：壁は「ほぼ通過後に問題にならない」</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                30代は書類さえ通れば年齢が決定打になることは少なく、スキルと意欲で十分戦えます。むしろ求人母数が多いため、応募の質を上げれば年収アップを狙いやすい年代です。35歳前後で評価軸が即戦力寄りに移る点だけ意識しましょう。詳細は<Link href="/age/35/" className="text-petrol hover:underline">35歳の壁</Link>を参照。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">40代：壁は「数の減少」として現れる</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                40代の壁は門前払いではなく、応募できる求人の数が絞られる形で現れます。専門性の明確化・複数エージェント併用・役割の明確なポジション狙いで母数不足をカバーするのが基本。40代特化の動き方は<Link href="/knowledge/40s-reality/" className="text-petrol hover:underline">40代エンジニア転職のリアル</Link>でさらに深掘りしています。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12 scroll-mt-20">
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
          <h2 className="text-xl font-bold mb-3">年齢の壁は、味方を選べば低くなる</h2>
          <p className="text-blue-100 text-sm mb-4">
            年齢に寛容な求人を持つIT特化型エージェントなら、推薦文付きで紹介してもらえ、書類フィルタを越えやすくなります。
          </p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "40代エンジニア転職のリアル", href: "/knowledge/40s-reality/" },
              { name: "35歳エンジニアの転職は限界？", href: "/age/35/" },
              { name: "エンジニアからマネジメントへ", href: "/knowledge/management/" },
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
              { name: "スカウトサービス活用法", href: "/knowledge/scout/" },
              { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
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
