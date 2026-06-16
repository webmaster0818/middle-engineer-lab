import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "家族持ちエンジニアの転職【相談・年収・転居の判断】",
  description:
    "家族を持つ30代・40代エンジニアの転職を解説。家族への相談タイミングと伝え方の例文、年収ダウンを許容する考え方、転居を伴う場合の判断チェックリストを紹介します。",
};

const toc = [
  { id: "conclusion", label: "結論：判断軸は「家族の合意」と「最低年収ライン」" },
  { id: "consult", label: "家族への相談タイミングと伝え方（例文付き）" },
  { id: "salary-down", label: "年収ダウンを許容してよい場合・避ける場合" },
  { id: "relocation", label: "転居を伴う転職の判断チェックリスト" },
  { id: "risk", label: "家族のリスクを最小化する進め方" },
  { id: "company", label: "家族持ちに配慮した企業の見極め方" },
  { id: "mid-career", label: "30代・40代の家族持ち独自視点" },
  { id: "faq", label: "よくある質問" },
];

const consultSteps = [
  { phase: "①検討段階（応募前）", timing: "転職を「考え始めた」時点で共有する", why: "事後報告は不信感のもと。方向性のすり合わせを先にする" },
  { phase: "②活動本格化（応募〜面接）", timing: "面接が入り始めた段階で進捗を共有", why: "面接日程・有給取得など家族の協力が必要になる" },
  { phase: "③内定・意思決定", timing: "オファー条件が出た段階で最終合意", why: "年収・勤務地・入社日など生活に直結する条件を一緒に判断する" },
];

const salaryAllowCases = [
  "年収は下がるが、固定残業の削減で時給換算・可処分時間が改善する",
  "リモート化で通勤コスト・単身赴任の解消など総支出が減る",
  "数年後の昇給・ストックオプションなど中期での回収見込みが具体的にある",
  "スキルの陳腐化を避け、長期の市場価値を維持・向上できる環境に移れる",
];
const salaryAvoidCases = [
  "住宅ローン・教育費など固定支出をカバーできなくなる水準まで下がる",
  "「とりあえず現職を辞めたい」という理由が先行し、回収見込みが曖昧",
  "下がった年収を取り戻す具体的なキャリアパスが描けない",
  "生活防衛資金が不足したまま、賭けのような転職になっている",
];

const faqs = [
  { q: "家族持ちの転職で最初に決めるべきことは何ですか？", a: "「絶対に下回れない最低年収ライン」「勤務地・リモートの希望」「転職活動に使える期間と生活費」の3点を先に固めることです。これを配偶者と共有してから動くと、後戻りや家庭内のすれ違いを防げます。" },
  { q: "家族への相談はいつ切り出すべきですか？", a: "「転職を考え始めた」検討段階で共有するのがおすすめです。内定が出てから初めて伝えると事後報告の印象になり、反対されやすくなります。方向性の段階で巻き込み、面接・内定の節目ごとに進捗を共有しましょう。" },
  { q: "年収が下がる転職は避けるべきですか？", a: "一概には言えません。残業削減やリモート化で可処分時間・可処分所得が改善する、中期で回収できる見込みがある、といった場合は年収ダウンが合理的なこともあります。逆に固定支出をカバーできない水準まで下がる場合や、回収の道筋が描けない場合は慎重に判断すべきです。" },
  { q: "住宅ローンがある場合、転職に影響しますか？", a: "転職直後は勤続年数が短くなるため、住宅ローンの新規審査では不利に働くことがあります。借入の予定があるなら先に済ませる、または既存ローンの返済に支障が出ない年収レンジで転職先を選ぶ、といった配慮が必要です。具体的な審査基準は金融機関にご確認ください。" },
  { q: "子どもの転校が心配です。転勤の少ない会社はどう探せばよいですか？", a: "「勤務地固定」「転勤なし」「フルリモート可」を条件にエージェントへ伝えましょう。IT企業は職種特性上、全国転勤が前提でない求人やフルリモート求人が比較的見つけやすい領域です。" },
  { q: "配偶者に転職を反対されたらどうすればよいですか？", a: "感情論ではなく、転職理由・期待できるメリット・想定リスクとその対策を具体的に説明します。複数のエージェントで把握した市場価値や、在職中に内定を確保する計画を示すと、不安が和らぎやすくなります。" },
  { q: "転居を伴う転職を判断する基準はありますか？", a: "年収の増加分が転居コスト・生活費の差・配偶者の収入変化を上回るか、子どもの就学・進学の節目と合うか、配偶者のキャリアやサポート体制が成り立つか、を総合で見ます。本ページのチェックリストを使って一つずつ確認してください。" },
  { q: "在職中と退職後、どちらで転職活動すべきですか？", a: "家族の生活基盤を守る観点では、在職中の活動が基本です。収入を維持したまま、内定を得てから現職を辞める流れにすれば、空白期間や焦りによる妥協を避けられます。" },
];

export default function FamilyPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="家族持ちエンジニアの転職【相談・年収・転居の判断】" description="家族を持つ30代・40代エンジニアの転職を解説。家族への相談タイミングと伝え方の例文、年収ダウンを許容する考え方、転居を伴う場合の判断チェックリストを紹介します。" url="/knowledge/family/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "転職ガイド" }, { name: "家族持ちの転職戦略" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">家族持ちエンジニアの転職【30代・40代】相談・年収・転居の判断</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | 家族を守りながらキャリアアップする</p>

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed mb-4">家族を持つ30代・40代エンジニアの転職は、自分一人の決断ではありません。配偶者・子どもの生活、住宅ローン、教育費、転居の有無まで含めて判断する必要があります。本記事では、家族への相談タイミングと伝え方の例文、年収ダウンを許容してよいかの判断軸、転居を伴う場合のチェックリストを、実務で使える形でまとめます。</p>
        </section>

        <DataNote surveyedAt="2026年6月" sources={["経済産業省「IT人材需給に関する調査」（2019年公表）", "厚生労働省 job tag"]} />

        <nav className="mb-10 border border-slate-200 rounded-lg p-5 bg-slate-50">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2 text-sm">
            {toc.map((t) => (<li key={t.id}><a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a></li>))}
          </ul>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：判断軸は「家族の合意」と「最低年収ライン」</h2>
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-lg p-5">
            <p className="text-slate-700 leading-relaxed mb-3">家族持ちの転職で失敗を避ける鍵は、活動を始める前に次の3点を固めることです。</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>1. <strong>家族の合意</strong>：検討段階から配偶者を巻き込み、方向性をすり合わせる</li>
              <li>2. <strong>最低年収ライン</strong>：固定支出から逆算した「下回れない金額」を明確にする</li>
              <li>3. <strong>在職中に動く</strong>：収入を維持したまま内定を取り、焦りによる妥協を避ける</li>
            </ul>
          </div>
        </section>

        <section id="consult" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">家族への相談タイミングと伝え方（例文付き）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">家族が転職に反対する多くの理由は「いきなり決まった話を聞かされた」という事後報告の不信感です。タイミングを分けて段階的に共有しましょう。</p>
          <div className="overflow-x-auto mb-5">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-slate-100"><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">段階</th><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">相談タイミング</th><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">理由</th></tr></thead>
              <tbody>
                {consultSteps.map((s, i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-slate-50" : ""}>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{s.phase}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{s.timing}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{s.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <p className="text-xs font-bold text-red-500 mb-1">✕ 伝わりにくい切り出し方</p>
              <p className="text-sm text-slate-600 mb-3">「もう今の会社は無理だから転職する。次の会社、内定もらったから。」</p>
              <p className="text-xs font-bold text-green-600 mb-1">✓ 伝わりやすい切り出し方（検討段階）</p>
              <p className="text-sm text-slate-700">「最近、今後のキャリアを考えていて、転職も選択肢に入れたいと思っている。年収やリモートの条件は事前にちゃんと確認するし、内定が出るまで今の会社は辞めないつもり。一度、家計や生活への影響を一緒に整理させてほしい。」</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <p className="text-xs font-bold text-green-600 mb-1">✓ 内定が出たときの伝え方</p>
              <p className="text-sm text-slate-700">「内定が出た。年収は今より◯万円◯◯（増/減）で、勤務地は◯◯、リモートは週◯日。住宅ローンと教育費を考えると□□は問題ない試算。入社日は調整できるから、子どもの学期の区切りに合わせることもできる。最終的にどうするか一緒に決めたい。」</p>
            </div>
          </div>
        </section>

        <section id="salary-down" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収ダウンを許容してよい場合・避ける場合</h2>
          <p className="text-slate-600 leading-relaxed mb-4">家族持ちの転職では「年収は絶対に下げない」と決めつける必要はありません。総合的な可処分所得・可処分時間・中期のキャリア価値で判断します。ただし固定支出をカバーできない水準は避けるのが原則です。</p>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">✓ 許容を検討してよいケース</h3>
              <ul className="space-y-2 text-sm text-green-900">{salaryAllowCases.map((c, i) => (<li key={i}>✓ {c}</li>))}</ul>
            </div>
            <div className="border border-red-200 bg-red-50 rounded-lg p-5">
              <h3 className="font-bold text-red-800 mb-3">✕ 避けたいケース</h3>
              <ul className="space-y-2 text-sm text-red-900">{salaryAvoidCases.map((c, i) => (<li key={i}>✕ {c}</li>))}</ul>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">判断の前提として、自分の市場価値を複数のエージェントで把握しておくことが重要です。詳しくは<Link href="/knowledge/salary-change/" className="text-petrol hover:underline">転職での年収の変動</Link>や<Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の把握</Link>を参考にしてください。</p>
        </section>

        <section id="relocation" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転居を伴う転職の判断チェックリスト</h2>
          <p className="text-slate-600 leading-relaxed mb-4">転居は家族全員に影響します。以下の項目をすべて確認し、一つでも大きな懸念が残る場合は、フルリモートや勤務地固定の選択肢も含めて再検討しましょう。</p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-3 text-sm text-slate-700">
              <li>☑ 年収の増加分が、転居費用・地域による生活費差・配偶者の収入変化を上回るか</li>
              <li>☑ 子どもの就学・進学・受験の節目と転居タイミングが大きくぶつからないか</li>
              <li>☑ 配偶者の仕事を続けられるか（転職・休職・リモート化の見込み）</li>
              <li>☑ 転居先で育児・介護のサポート体制（実家・保育園など）を確保できるか</li>
              <li>☑ 単身赴任にする場合、二重生活コストと家族の負担を許容できるか</li>
              <li>☑ 「数年後に再び転居が必要になる」可能性（全国転勤前提でないか）を確認したか</li>
              <li>☑ フルリモートで転居せずに同じ仕事ができる選択肢を検討したか</li>
            </ul>
          </div>
        </section>

        <section id="risk" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">家族のリスクを最小化する進め方</h2>
          <div className="space-y-3">
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-1">1. 生活防衛資金を確保してから動く</h3><p className="text-sm text-petrol-deep">想定外に備え、生活費の数か月分を確保したうえで活動を始めると、焦って条件の悪い内定を受けるリスクを避けられます。</p></div>
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-1">2. 在職中に内定を確保する</h3><p className="text-sm text-petrol-deep">収入を維持したまま選考を進めれば、納得いくまで複数社を比較できます。有給を使った面接日程の調整はエージェントに依頼可能です。</p></div>
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-1">3. 複数内定で総合待遇を比較する</h3><p className="text-sm text-petrol-deep">年収だけでなく、リモート可否・残業・退職金・入社日の柔軟性まで含めて比較します。<Link href="/knowledge/offer-compare/" className="text-petrol-deep underline">複数内定の比較方法</Link>が参考になります。</p></div>
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-1">4. 入社日を家族の都合に合わせる</h3><p className="text-sm text-petrol-deep">子どもの学期の区切りや家族の行事に合わせた入社日は、多くの企業が調整に応じます。遠慮せず相談しましょう。</p></div>
          </div>
        </section>

        <section id="company" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">家族持ちに配慮した企業の見極め方</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-slate-100"><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">条件</th><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">確認方法</th><th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">重要度</th></tr></thead>
              <tbody>
                <tr><td className="border border-slate-200 px-4 py-3 text-slate-600">リモートワーク制度</td><td className="border border-slate-200 px-4 py-3 text-slate-600">求人票・面接・口コミで運用実態を確認</td><td className="border border-slate-200 px-4 py-3 text-slate-600 font-bold text-red-600">必須</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 px-4 py-3 text-slate-600">フレックスタイム制</td><td className="border border-slate-200 px-4 py-3 text-slate-600">コアタイムの有無を確認</td><td className="border border-slate-200 px-4 py-3 text-slate-600 font-bold text-red-600">必須</td></tr>
                <tr><td className="border border-slate-200 px-4 py-3 text-slate-600">残業時間の実態</td><td className="border border-slate-200 px-4 py-3 text-slate-600">口コミ・エージェントの内部情報</td><td className="border border-slate-200 px-4 py-3 text-slate-600 font-bold text-red-600">必須</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 px-4 py-3 text-slate-600">転勤の有無</td><td className="border border-slate-200 px-4 py-3 text-slate-600">求人票・オファーレターで明文確認</td><td className="border border-slate-200 px-4 py-3 text-slate-600 font-bold text-red-600">必須</td></tr>
                <tr><td className="border border-slate-200 px-4 py-3 text-slate-600">育児・看護休暇</td><td className="border border-slate-200 px-4 py-3 text-slate-600">福利厚生ページ・取得実績</td><td className="border border-slate-200 px-4 py-3 text-slate-600 font-bold text-orange-600">推奨</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 px-4 py-3 text-slate-600">退職金・企業年金</td><td className="border border-slate-200 px-4 py-3 text-slate-600">オファーレターで確認</td><td className="border border-slate-200 px-4 py-3 text-slate-600 font-bold text-orange-600">推奨</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="mid-career" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の家族持ち独自視点</h2>
          <p className="text-slate-600 leading-relaxed mb-4">30代・40代のミドルエンジニアは、守るものがある分だけ慎重になりがちですが、市況自体は経験者に追い風です。経済産業省「IT人材需給に関する調査」（2019年公表の試算）では2030年に最大約79万人のIT人材不足が示されており、即戦力の需要は高い状態が続くと見込まれています。職種の参考値として、厚生労働省 job tagでは「システムエンジニア（受託開発）」の平均年収は578.5万円・平均年齢37.1歳（令和7年賃金構造基本統計調査ベース）とされています。</p>
          <p className="text-slate-600 leading-relaxed">大切なのは、こうした市況を「家族を説得する客観材料」として使うことです。感情ではなくデータと計画で示せば、配偶者の不安も和らぎます。40代特有の現実は<Link href="/knowledge/40s-reality/" className="text-petrol hover:underline">40代エンジニアの転職リアル</Link>、年齢の論点は<Link href="/knowledge/age-discrimination/" className="text-petrol hover:underline">年齢と転職</Link>も参考にしてください。</p>
        </section>

        <section id="faq" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq, i) => (<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">家族の事情に配慮した転職をサポート</h2>
          <p className="text-blue-100 text-sm mb-4">IT特化型エージェントなら、リモート可・残業少なめ・転勤なしの求人を条件に合わせて紹介してもらえます。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "ワークライフバランス重視の転職", href: "/knowledge/work-life-balance/" },
              { name: "女性エンジニアの転職ガイド", href: "/knowledge/woman-engineer/" },
              { name: "複数内定の比較方法", href: "/knowledge/offer-compare/" },
              { name: "年収交渉のコツ", href: "/knowledge/salary-negotiation/" },
              { name: "転職を後悔しないためのチェックリスト", href: "/knowledge/regret/" },
              { name: "リモートワーク転職ガイド", href: "/knowledge/remote-work/" },
            ].map((item, i) => (<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
