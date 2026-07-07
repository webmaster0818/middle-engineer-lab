import type { Metadata } from "next";
import Link from "next/link";
import TechgoCta from "@/components/TechgoCta";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE =
  "転職すると退職金はどうなる？【2026年】退職所得控除・企業型DC移換・脱退一時金の手続き";
const PAGE_DESC =
  "転職時に退職金はどうなる？退職所得控除の計算（勤続年数別）、企業型確定拠出年金（DC）の移換手続き、6ヶ月放置で自動移換されるリスク、脱退一時金が原則受け取れない理由を、国税庁・厚労省・iDeCo公式の情報にもとづいて解説。ミドルエンジニアの転職前に押さえるべきお金の知識です。";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/retirement-allowance/" },
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const taxRows = [
  { years: "勤続10年", deduction: "40万円 × 10 = 400万円" },
  { years: "勤続20年", deduction: "40万円 × 20 = 800万円" },
  { years: "勤続25年", deduction: "800万円 + 70万円 × 5 = 1,150万円" },
  { years: "勤続30年", deduction: "800万円 + 70万円 × 10 = 1,500万円" },
];

const faqs = [
  {
    q: "転職すると退職金はどうなりますか？",
    a: "勤続年数に応じた退職一時金を受け取るのが一般的ですが、退職金制度は法律上の義務ではなく企業の任意制度です。企業型確定拠出年金（DC）の場合は、現金で受け取るのではなく、転職先のDCやiDeCoへ「移換」して運用を続けるのが原則です。退職金制度がない企業（特にIT・ベンチャー）も珍しくありません。",
  },
  {
    q: "退職金にはどれくらい税金がかかりますか？",
    a: "退職一時金は『退職所得』として、給与などと分けて課税される（分離課税）優遇があります。退職所得＝(退職金−退職所得控除)×1/2 で計算され、退職所得控除は勤続20年以下で40万円×勤続年数（最低80万円）、20年超で800万円＋70万円×(勤続年数−20年)です。勤続年数が長いほど控除が大きく、税負担が軽くなります（国税庁No.1420）。",
  },
  {
    q: "企業型DCは転職時に何をすればいいですか？",
    a: "転職先に企業型DCがあれば転職先のDCへ、なければiDeCoへ移換します。重要なのは、退職後6ヶ月以内に手続きをしないと国民年金基金連合会へ『自動移換』されてしまう点です。自動移換されると、資産が運用されないまま管理手数料だけがかかり、その期間は通算加入者等期間にも算入されません。必ず期限内に手続きしましょう。",
  },
  {
    q: "確定拠出年金を脱退一時金として受け取れますか？",
    a: "原則として受け取れません。確定拠出年金は原則60歳まで引き出せず、脱退一時金は法令の要件（通算拠出期間が短い・資産額が25万円以下 など）をすべて満たす限られた場合のみです。『転職するから受け取る』は基本的にできません。仮に受け取れても老後資産を取り崩すことになり、税制上も優遇が小さいため、移換して運用を続けるのが原則です。",
  },
];

export default function RetirementAllowancePage() {
  return (
    <>
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/knowledge/retirement-allowance/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "転職ノウハウ", href: "/knowledge/" }, { name: "退職金と転職" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">転職と退職金・確定拠出年金の手続き【2026年】</h1>
        <p className="text-slate-600 leading-relaxed mb-4">
          転職を考えるとき、見落とされがちなのが<strong>退職金と確定拠出年金（DC）のお金</strong>です。「退職金にかかる税金」「企業型DCの移し方」「脱退一時金は受け取れるのか」を、<strong>国税庁・厚生労働省・iDeCo公式</strong>の情報にもとづいて、ミドルエンジニア向けに整理しました。手続きを誤ると手数料の無駄や税負担増につながるため、転職前に押さえておきましょう。
        </p>
        <DataNote surveyedAt="2026年6月" sources={["国税庁 No.1420 退職所得", "厚生労働省 年金資産の持ち運び（ポータビリティ）", "iDeCo公式（国民年金基金連合会）"]} />

      {/* 直答: 脱退一時金 受け取るべき？(P6-C1) */}
      <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】転職時、確定拠出年金の脱退一時金は受け取るべき？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3">
            <strong>結論: そもそも原則「受け取れません」。受け取れる例外に該当しても、移換して運用を続ける方が有利なケースが大半です。</strong>
          </p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
            <li>・確定拠出年金（企業型DC・iDeCo）は<strong>原則60歳まで引き出せない</strong>制度です。転職は引き出し理由になりません</li>
            <li>・脱退一時金は、通算の拠出期間が短い・資産額が少額（25万円以下等）・iDeCoに加入できない事情がある——といった<strong>法令の要件をすべて満たす例外的な場合のみ</strong></li>
            <li>・例外に該当しても、受け取ると<strong>老後資金の取り崩し＋退職所得控除等の税優遇の放棄</strong>になります。原則は転職先の企業型DCまたはiDeCoへの<strong>移換</strong>です</li>
            <li>・注意すべきはむしろ<strong>「6か月放置による自動移換」</strong>——運用が止まり手数料だけ引かれ続けます（下で詳述）</li>
          </ul>
          <p className="text-xs text-slate-400 mt-3">出典: 厚生労働省・iDeCo公式サイトの制度情報にもとづく解説（個別の要件判定は運営管理機関にご確認ください）</p>
        </div>
      </section>

        <section className="mb-12 mt-6">
          <h2 className="text-xl font-bold text-slate-800 mb-3">① 退職金にかかる税金（退職所得控除）</h2>
          <p className="text-slate-600 text-sm mb-4">
            退職一時金は<strong>「退職所得」</strong>として、給与などとは分けて課税されます（分離課税）。計算式は次のとおりです。
          </p>
          <div className="rounded-lg bg-slate-50 border border-slate-200 p-4 mb-4 text-sm text-slate-700">
            <p className="mb-2"><strong>退職所得 ＝ （退職金 − 退職所得控除額）× 1/2</strong></p>
            <p>退職所得控除額：</p>
            <ul className="list-disc pl-5 mt-1">
              <li>勤続20年以下 … <strong>40万円 × 勤続年数</strong>（80万円に満たない場合は80万円）</li>
              <li>勤続20年超 … <strong>800万円 ＋ 70万円 ×（勤続年数 − 20年）</strong></li>
            </ul>
            <p className="text-xs text-slate-500 mt-2">※勤続年数に1年未満の端数があるときは1年に切り上げ。</p>
          </div>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="p-2 border-b-2 border-slate-300">勤続年数</th>
                  <th className="p-2 border-b-2 border-slate-300">退職所得控除額</th>
                </tr>
              </thead>
              <tbody>
                {taxRows.map((r) => (
                  <tr key={r.years} className="border-b border-slate-200">
                    <td className="p-2 font-medium">{r.years}</td>
                    <td className="p-2 text-slate-700">{r.deduction}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 text-sm">
            勤続年数が長いほど控除が大きくなり、税負担が軽くなります。なお、<strong>役員等としての勤続5年以下</strong>の退職金や、<strong>勤続5年以下（役員等以外）で控除後300万円を超える部分</strong>は「1/2」計算が使えないなどの例外があります。
          </p>
          <p className="text-xs text-slate-500 mt-2">出典：国税庁 タックスアンサー No.1420「退職金を受け取ったとき（退職所得）」（2026年6月確認）。具体的な税額は個別事情で変わるため、正確な計算は税務署・税理士にご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-3">② 企業型確定拠出年金（DC）の移換</h2>
          <p className="text-slate-600 text-sm mb-3">
            企業型DCに加入していた人が転職・退職すると、年金資産を<strong>移換（持ち運び）</strong>する手続きが必要です。
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600 text-sm mb-4">
            <li><strong>転職先に企業型DCがある</strong> → 転職先の企業型DCへ移換</li>
            <li><strong>転職先に企業型DCがない／自営・専業になる</strong> → <strong>iDeCo（個人型）へ移換</strong></li>
          </ul>
          <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm text-slate-700">
            <p className="font-bold mb-1">⚠ 6ヶ月放置すると「自動移換」のデメリット</p>
            <p>退職後<strong>6ヶ月以内</strong>に移換などの手続きをしないと、資産が<strong>国民年金基金連合会へ自動移換</strong>されます。自動移換されると、(1) 資産が<strong>運用されない</strong>（現金のまま）、(2) <strong>管理手数料がかかる</strong>、(3) その期間は<strong>通算加入者等期間に算入されず</strong>、受給開始年齢が遅れる可能性がある、というデメリットがあります。転職時は早めに手続きしましょう。</p>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：厚生労働省「離職・転職時等の年金資産の持ち運び（ポータビリティ）」、iDeCo公式（2026年6月確認）。自動移換時や移換時の手数料額は改定されることがあるため、最新額は運営管理機関でご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-3">③ 脱退一時金は原則受け取れない</h2>
          <p className="text-slate-600 text-sm mb-3">
            「転職するから確定拠出年金を現金で受け取りたい」という相談は多いですが、<strong>確定拠出年金は原則60歳まで引き出せません</strong>。脱退一時金として受け取れるのは、法令の要件（おもに次）を<strong>すべて満たす</strong>限られた場合だけです。
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600 text-sm mb-3">
            <li>企業型DCの加入者でない／iDeCoに加入できない者であること</li>
            <li>通算拠出期間が短い（5年以下）、または<strong>資産額が25万円以下</strong>であること</li>
            <li>最後に加入者資格を失った日から2年以内 など</li>
          </ul>
          <p className="text-slate-600 text-sm">
            通常の転職では要件を満たさず、<strong>「転職を理由に受け取る」ことは基本的にできません</strong>。仮に受け取れる場合でも老後資産を取り崩すことになり、税制上の優遇も小さいため、<strong>移換して運用を続けるのが原則</strong>です。
          </p>
          <p className="text-xs text-slate-500 mt-2">出典：iDeCo公式「給付の種類」（2026年6月確認）。要件の詳細は運営管理機関にご確認ください。</p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-3">④ そもそも退職金制度は「ある会社・ない会社」がある</h2>
          <p className="text-slate-600 text-sm">
            退職金の支給は<strong>法律上の義務ではなく、企業の任意制度</strong>です（ただし就業規則などで支給基準を定めている場合は支払義務が生じます）。IT・ベンチャー企業では、退職金がない代わりに<strong>給与・賞与に上乗せする「前払い制度」</strong>や、退職金の代わりに<strong>企業型DCのみ</strong>という会社もあります。転職先を選ぶ際は、額面年収だけでなく<strong>退職給付の有無・形態（一時金／DB／DC／前払い）</strong>も確認しましょう。確定拠出年金（DC・iDeCo）は持ち運びしやすいため、転職回数が多くなりがちなエンジニアほど、その仕組みを理解しておくことが大切です。
          </p>
          <p className="text-xs text-slate-500 mt-2">参考：労働基準法（退職手当の定めがある場合の明示・就業規則）。2026年1月以後はDC一時金と退職金の受給時期に関する税制（いわゆる「10年ルール」）の改正も施行されています。受給の順序・時期は、額が大きい場合は専門家へご相談ください。</p>
        </section>

        <section className="mb-12">
      <TechgoCta
        heading="退職金・DCの次は「年収」の話——交渉に強いエージェント"
        note="テックゴーは年収交渉成功率100%（2025年9月時点・公式公表）・年収アップ平均138万円（2025年6〜7月内定者平均・公式公表）。退職金の目減り分は次の年収で取り返せます。"
        buttonText="無料キャリア面談で年収交渉の相談をする（公式）"
      />

          <h2 className="text-lg font-bold text-slate-800 mb-4">関連ガイド</h2>
          <div className="flex flex-wrap gap-2 text-sm">
            <Link href="/knowledge/ideco/" className="px-3 py-1.5 rounded border border-slate-200 text-petrol hover:bg-slate-50">iDeCoとエンジニアの資産形成</Link>
            <Link href="/knowledge/salary-change/" className="px-3 py-1.5 rounded border border-slate-200 text-petrol hover:bg-slate-50">転職で年収はどう変わる</Link>
            <Link href="/knowledge/bonus-timing/" className="px-3 py-1.5 rounded border border-slate-200 text-petrol hover:bg-slate-50">ボーナスと転職のタイミング</Link>
            <Link href="/salary/company-ranking/" className="px-3 py-1.5 rounded border border-slate-200 text-petrol hover:bg-slate-50">企業別 年収ランキング</Link>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="border border-slate-200 rounded-lg p-4">
                <summary className="font-medium text-slate-800 cursor-pointer">{f.q}</summary>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">退職給付も含めて転職先を見極めよう</h2>
          <p className="text-blue-100 text-sm mb-4">額面年収だけでなく、退職金・企業型DC・各種手当まで含めた「実質的な条件」で比較するのが失敗しない転職のコツです。IT特化エージェントに相談して条件を引き出しましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>
        {/* 一次データ相互リンク（2026-07-04 リンク完全性の是正） */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-slate-800 mb-3">当サイトの一次データ集（あわせて読む）</h2>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm list-disc pl-5">
            <li><Link href="/salary/tech-stack-salary/" className="text-petrol-deep hover:underline">技術スタック×企業年収の相関データ【有報43社】</Link></li>
            <li><Link href="/cert/compare/" className="text-petrol-deep hover:underline">IT資格の受験料・合格率 比較一覧【32資格】</Link></li>
            <li><Link href="/salary/age-salary/" className="text-petrol-deep hover:underline">年代別エンジニア年収・転職難易度 早見表</Link></li>
            <li><Link href="/salary/job-type-salary/" className="text-petrol-deep hover:underline">職種別エンジニア年収ランキング</Link></li>
            <li><Link href="/cert/salary/" className="text-petrol-deep hover:underline">資格別の想定年収・資格手当データ</Link></li>
            <li><Link href="/salary/industry-salary/" className="text-petrol-deep hover:underline">業界別エンジニア年収ランキング【有報】</Link></li>
          </ul>
        </section>

      </article>
    </>
  );
}
