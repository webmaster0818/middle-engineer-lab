import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/age/45/" },
  title: "45歳エンジニアの転職｜「45歳の壁」を統計で検証する現実",
  description:
    "「45歳の壁」「転職は45歳まで」は本当か。45歳以上ITエンジニアの転職決定者数が直近5年で約10倍というリクルートの実績や、賃金が下がらない割合などの公的・実績データで検証。年齢制限の法律と45歳の現実的な戦略を解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：「45歳の壁」は統計で否定できる" },
  { id: "wall", label: "「45歳まで説」を統計で検証する" },
  { id: "law", label: "年齢制限は原則禁止（法律の根拠）" },
  { id: "salary", label: "45歳の転職で年収は下がるのか" },
  { id: "line", label: "メンバー採用 vs マネジメント採用の線引き" },
  { id: "skill", label: "45歳に求められるスキルの更新" },
  { id: "process", label: "45歳の転職活動の進め方" },
  { id: "faq", label: "よくある質問" },
];

const wallData: [string, string][] = [
  ["45歳以上ITエンジニアの転職決定者数", "直近5年で約10倍に増加（リクルート プレスリリース2023/8/31・リクルートエージェント実績）"],
  ["ミドルシニアITエンジニアの賃金上昇", "約3割が転職時に10%以上の賃金上昇（同・2023年1〜3月期）"],
  ["45〜49歳転職者の収入変化", "収入増加 34.2%／変わらない 36.5%（=7割超が減らない／厚労省 令和4年 雇用動向調査・JAC経由）"],
];

const faqs = [
  {
    q: "「45歳の壁」「転職は45歳まで」は本当ですか？",
    a: "統計を見る限り、額面どおりには当てはまりません。リクルートのプレスリリース（2023年8月31日）では、リクルートエージェントにおける45歳以上ITエンジニアの転職決定者数が直近5年で約10倍に増加したと公表されています。45歳を境に転職できなくなるわけではなく、むしろ45歳以上の転職決定が大きく伸びているのが実態です。「45歳まで」という言説は、要件に合わないポジションまで含めた古い印象論である面が大きいといえます。",
  },
  {
    q: "45歳で転職すると年収は下がりますか？",
    a: "必ずしも下がりません。厚生労働省の令和4年 雇用動向調査（JAC経由の整理）では、45〜49歳の転職者のうち収入増加が34.2%、変わらないが36.5%で、合わせて7割超が『減らない』結果でした。さらにリクルートの公表では、ミドルシニアITエンジニアの約3割が転職時に10%以上の賃金上昇を実現しています（2023年1〜3月期）。下がりやすいのはマネジメントからプレイヤーへの転向など大きな方向転換を伴う場合で、同職種・同レベルなら維持〜アップが十分にあり得ます。",
  },
  {
    q: "年齢を理由に不採用にされるのは違法ではないのですか？",
    a: "募集・採用において年齢を理由に応募を制限することは、労働施策総合推進法により原則禁止されています（平成19年に義務化）。一部に例外規定はありますが、『年齢不問』とされた求人で実質的に年齢のみを理由に落とすことは、法の趣旨に反します。経験年数やスキル要件は問われても、年齢そのものを唯一の理由とした排除は原則認められない、という前提を持って臨んでよい領域です。",
  },
  {
    q: "45歳はメンバー採用とマネジメント採用、どちらを狙うべきですか？",
    a: "45歳の転職では、若手と同じプレイヤー（メンバー）枠で競うより、PM・PL・テックリード・アーキテクトなど経験が活きるポジションを狙うのが定石です。メンバー採用では年齢相応の単価と若手の伸びしろを比較されがちですが、マネジメント・上流・高度専門のポジションでは経験そのものが要件になり、45歳が有利に働きます。自分の強みがマネジメント寄りか専門性寄りかを見極めて狙いを定めましょう。",
  },
  {
    q: "45歳でスキルが古いと感じています。転職できますか？",
    a: "スキルの更新を続けている姿勢を示せれば可能性は十分あります。45歳特有の懸念は『新しい技術についていけないのでは』という見られ方ですが、直近で学んだ技術や適応した事例を具体的に語ることで払拭できます。長年の設計力・基盤技術の理解は経験年数がそのまま価値になる領域でもあり、最新技術の継続学習と組み合わせれば強力な武器になります。",
  },
  {
    q: "45歳の転職活動はどのくらいの期間を見ておくべきですか？",
    a: "個人差はありますが、要件に合うポジションが出るタイミングも影響するため、在職中に活動を始め、数か月単位の長期戦を前提にするのが安全です。母数を闇雲に追うより、経験が活きる質の高いポジションに的確に応募することが成功率を高めます。焦って条件を妥協しないことが大切です。",
  },
  {
    q: "45歳と40代前半で、転職の考え方は変わりますか？",
    a: "基本的な戦略（経験が活きるポジションを狙う）は共通ですが、45歳前後はマネジメントか高度専門かの軸をより明確にすることが重要になります。40代全般の考え方は40代エンジニアの転職ガイド、50代固有の論点は50代エンジニアの転職を参照すると、年代ごとの違いを立体的に把握できます。",
  },
];

export default function Age45Page() {
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
        title="45歳エンジニアの転職｜「45歳の壁」を統計で検証する現実"
        description="「45歳の壁」は本当か。45歳以上ITエンジニアの転職決定者数が約10倍というリクルートの実績や、賃金が下がらない割合などの公的・実績データで検証し、戦略を解説。"
        url="/age/45/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "年代別ガイド" },
          { name: "45歳エンジニアの転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          45歳エンジニアの転職｜「45歳の壁」を統計で検証する
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 「45歳まで説」を実データで検証
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          「転職は45歳まで」「45歳の壁」——この言説を、一度も耳にしたことのないエンジニアは少ないでしょう。しかし、それは本当に統計に裏付けられた事実なのでしょうか。本記事では、リクルートが公表した実績データや厚生労働省の調査をもとに、「45歳の壁」を正面から検証します。結論から言えば、45歳以上の転職市場は印象よりはるかに開かれています。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "リクルート プレスリリース（2023年8月31日・リクルートエージェント実績）",
            "厚生労働省 令和4年 雇用動向調査",
            "労働施策総合推進法（年齢制限禁止）",
          ]}
        />

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：「45歳の壁」は統計で否定できる</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              リクルートの公表によれば、45歳以上ITエンジニアの転職決定者数は直近5年で<strong>約10倍</strong>に増えています。さらに45〜49歳の転職者は7割超が収入を減らしていません。「45歳まで」という言説は、要件に合わないポジションまで含めた古い印象論である面が大きく、経験が活きるポジションへ的確にアプローチすれば、45歳は十分に戦える年代です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><span className="text-petrol font-bold shrink-0">1.</span>45歳以上ITエンジニアの転職決定者数は直近5年で約10倍（リクルート2023/8/31公表）。</li>
              <li className="flex gap-2"><span className="text-petrol font-bold shrink-0">2.</span>45〜49歳転職者は収入増34.2%・変わらない36.5%＝7割超が減らない（厚労省 令和4年）。</li>
              <li className="flex gap-2"><span className="text-petrol font-bold shrink-0">3.</span>年齢を理由とした応募制限は法律上 原則禁止。年齢不問求人で年齢のみを理由に落とすのは法の趣旨に反する。</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-petrol hover:underline">{item.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 壁の検証 */}
        <section id="wall" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">「45歳まで説」を統計で検証する</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            印象ではなく数字で見ましょう。45歳前後の転職に関する、出典の明確なデータを並べます。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <tbody>
                {wallData.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-2/5 border-b border-slate-200 align-top">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-5">
            出典: リクルート プレスリリース（2023年8月31日・リクルートエージェント実績）、厚生労働省 令和4年 雇用動向調査（JAC経由の整理）。実績値は調査・母集団により変動します。
          </p>
          <p className="text-slate-600 leading-relaxed">
            「45歳以上ITエンジニアの転職決定者数が直近5年で約10倍」という数字は、リクルートエージェントという特定サービスの実績値ではありますが、国内最大級のエージェントで45歳以上の決定が急増している事実は、市場の方向性を強く示唆します。少子高齢化とIT人材不足が同時進行するなか、企業は経験豊富なミドルシニアを採らざるを得なくなっている——これが「45歳の壁」が崩れつつある背景です。
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            ここで大切なのは、データの「母集団」を正しく理解することです。「約10倍」はリクルートエージェント利用者という特定母集団での実績値であり、日本全体の45歳以上ITエンジニアがすべて10倍転職しやすくなった、という意味ではありません。とはいえ、最大手エージェントでこれだけ決定が伸びているという事実は、「45歳は転職できない」という言説が現実と乖離していることを十分に示します。重要なのは、「壁があるかないか」の二択ではなく、<strong>「経験が要件になるポジションを狙えば、45歳でも決定は十分に起きている」</strong>という現実を踏まえて動くことです。印象論で諦めるのは、最ももったいない選択です。
          </p>
        </section>

        {/* 法律 */}
        <section id="law" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年齢制限は原則禁止（法律の根拠）</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-5">
            <p className="text-amber-900 leading-relaxed text-sm">
              募集・採用において、年齢を理由に応募を制限することは<strong>労働施策総合推進法により原則禁止</strong>されています（平成19年に義務化）。一部に例外規定はありますが、「年齢不問」とされた求人で実質的に年齢のみを理由に不採用とすることは、法の趣旨に反します。
            </p>
          </div>
          <p className="text-slate-600 leading-relaxed">
            この事実は、45歳の求職者にとって心理的な後押しになります。「年齢で落とされるのが当たり前」という思い込みは、法的には正しくありません。もちろん、経験年数やマネジメント経験といった「要件」は問われますが、それは年齢とは別の話です。要件を満たしているなら、年齢を理由に応募をためらう必要はない——この前提を持って臨むことが大切です。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">45歳の転職で年収は下がるのか</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            「45歳で転職すると年収が下がる」というのも、よく聞く懸念です。しかしデータは別の事実を示します。
          </p>
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="bg-petrol-soft rounded-lg p-4 text-center">
              <p className="text-xs text-petrol mb-1">45〜49歳 収入増加</p>
              <p className="text-xl font-bold text-petrol-deep">34.2%</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-4 text-center">
              <p className="text-xs text-petrol mb-1">45〜49歳 変わらない</p>
              <p className="text-xl font-bold text-petrol-deep">36.5%</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mb-3">
            厚生労働省の令和4年 雇用動向調査（JAC経由の整理）では、45〜49歳の転職者のうち収入増加が34.2%、変わらないが36.5%で、<strong>合わせて7割超が「減らない」</strong>結果でした。加えてリクルートの公表では、ミドルシニアITエンジニアの約3割が転職時に10%以上の賃金上昇を実現しています（2023年1〜3月期）。
          </p>
          <p className="text-slate-600 leading-relaxed text-sm">
            下がりやすいのは、マネジメントからプレイヤーへの転向や、異業種・異職種への大きな方向転換を伴う場合です。同職種・同レベルでの移動なら、45歳でも維持〜アップが十分に狙えます。年収戦略の詳細は<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代エンジニアの年収戦略</Link>も参考になります。
          </p>
        </section>

        {/* メンバー vs マネジメント */}
        <section id="line" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">メンバー採用 vs マネジメント採用の線引き</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            45歳の転職を成功させる最大の分岐点は、「どの土俵で勝負するか」です。若手と同じメンバー（プレイヤー）枠で競うのか、経験が要件になるマネジメント・上流・高度専門のポジションを狙うのか。ここを誤ると、強みが活きません。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-700 mb-2">メンバー採用（避けたい土俵）</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                純粋なプレイヤー枠では、年齢相応の単価と若手のポテンシャル・伸びしろが比較されがちです。45歳がここで戦うと、強みが価格競争に埋もれてしまいます。
              </p>
              <p className="text-xs text-red-600">ここで競うと「45歳の壁」を自ら作ってしまう</p>
            </div>
            <div className="border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-2">マネジメント・高度専門採用（狙う土俵）</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                PM・PL・テックリード・EM・アーキテクトなど、経験そのものが要件になるポジション。45歳の経験・マネジメント力・専門性が、年齢を補って余りある価値として評価されます。
              </p>
              <p className="text-xs text-green-600">経験が活きる土俵では45歳が有利に働く</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            マネジメントとスペシャリストの選び方は<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職ガイド</Link>でも詳しく扱っています。
          </p>
        </section>

        {/* スキル更新 */}
        <section id="skill" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">45歳に求められるスキルの更新</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            45歳が持たれやすい懸念は「新しい技術についていけないのでは」という見られ方です。これは、継続学習の姿勢を具体的に示すことで払拭できます。
          </p>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">直近の学習・適応事例を語れるようにする</h3>
              <p className="text-sm text-petrol-deep">「最近◯◯を学び、◯◯のプロジェクトで適用した」という具体例が、年齢の懸念を打ち消します。抽象的な「勉強しています」では不十分で、実務に結びついた事例が効きます。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">経験年数が価値になる領域を強みにする</h3>
              <p className="text-sm text-petrol-deep">設計力・基盤技術（DB・インフラ・セキュリティ）・大規模システムの理解は、経験年数がそのまま価値になります。最新技術の継続学習と組み合わせると、45歳ならではの厚みが生まれます。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">マネジメント経験を数値で語る</h3>
              <p className="text-sm text-petrol-deep">「◯名のチームを率いた」「◯%の改善を主導した」など、貢献を数値化することで、マネジメント採用での評価が高まります。</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            継続学習の進め方は<Link href="/knowledge/continuous-learning/" className="text-petrol hover:underline">エンジニアの継続学習</Link>、実績の言語化は<Link href="/knowledge/resume/" className="text-petrol hover:underline">職務経歴書の書き方</Link>を参考にしてください。
          </p>
        </section>

        {/* 進め方 */}
        <section id="process" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">45歳の転職活動の進め方（5ステップ）</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            「45歳の壁」が統計で否定できるとはいえ、何も準備せずに成功するわけではありません。経験が活きる土俵を選び、的確に進めることが成功率を左右します。
          </p>
          <div className="space-y-4">
            {[
              { step: "STEP 1", title: "強みの軸を定める（マネジメント or 高度専門）", desc: "自分の核がマネジメント（PM・PL・EM）か高度専門（アーキテクト・SRE・セキュリティ等）かを定め、その軸が要件になるポジションに狙いを絞ります。メンバー枠で若手と競う土俵を避けることが第一歩です。" },
              { step: "STEP 2", title: "実績を数値化する", desc: "「◯名のチームを率いた」「処理時間を◯%短縮した」「◯億円規模のシステムを統括した」など、貢献を数値で語れるよう棚卸しします。45歳の説得力は具体的な数値から生まれます。" },
              { step: "STEP 3", title: "直近の学習・適応事例を用意する", desc: "「最近◯◯を学び、◯◯に適用した」という直近の事例を準備し、技術への適応力の懸念を先回りで払拭します。" },
              { step: "STEP 4", title: "エージェントを複数活用する", desc: "45歳向けの経験者ポジションは母数が絞られるため、IT特化型・総合型・ハイクラス型を併用して網を広げます。在職中に活動し、長期戦のスケジュールを共有します。" },
              { step: "STEP 5", title: "内定比較・条件交渉", desc: "複数内定を年収・役割・働き方で比較し、必要なら条件交渉をエージェント経由で行います。短期の年収だけでなく、中期のキャリア価値で判断します。" },
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
            スケジュール感は<Link href="/knowledge/timeline/" className="text-petrol hover:underline">転職活動のスケジュール</Link>、複数エージェントの使い分けは<Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">複数エージェントの活用法</Link>を参照してください。
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
          <h2 className="text-xl font-bold mb-3">「45歳の壁」に怯まず、経験が活きる企業へ</h2>
          <p className="text-blue-100 text-sm mb-4">
            45歳以上の転職決定は5年で約10倍。あなたの経験を要件とする企業は確実に存在します。まずはエージェントで市場価値を確認しましょう。
          </p>
          <Link href="/compare/40s-agents/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            40代向けエージェント比較を見る
          </Link>
        </section>

        {/* 関連 */}
        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "40代エンジニアの転職ガイド", href: "/age/40s/" },
              { name: "50代エンジニアの転職", href: "/age/50s/" },
              { name: "40代エンジニア転職の現実", href: "/knowledge/40s-reality/" },
              { name: "40代エンジニアの年収戦略", href: "/knowledge/salary-40s/" },
              { name: "年齢と転職（年齢差別）", href: "/knowledge/age-discrimination/" },
              { name: "40代向けエージェント比較", href: "/compare/40s-agents/" },
            ].map((item, i) => (
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
