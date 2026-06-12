import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "夏ボーナス後に転職するベストタイミング【2026年】エンジニアの賞与と退職時期";
const DESCRIPTION =
  "ボーナス（賞与）を取り逃さない転職タイミングを、支給日と退職日の関係・逆算スケジュール・損得の考え方まで実践的に解説。30代・40代が賞与を踏まえて損なく転職するための判断軸をまとめます。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：賞与を踏まえたタイミングの考え方" },
  { id: "rule", label: "賞与支給の基本ルール" },
  { id: "schedule", label: "支給日から逆算するスケジュール" },
  { id: "tradeoff", label: "賞与待ちと早期転職のトレードオフ" },
  { id: "checklist", label: "判断前に確認するチェックリスト" },
  { id: "ng", label: "やってはいけないNG行動" },
  { id: "midlife", label: "30代・40代で特に意識する点" },
  { id: "faq", label: "よくある質問" },
];

const rules = [
  {
    title: "支給日在籍が条件のことが多い",
    desc: "多くの企業は「支給日に在籍していること」を賞与支給の条件にしています。支給日前に退職すると受け取れない可能性があるため、就業規則の確認が必須です。",
  },
  {
    title: "算定期間と評価対象期間",
    desc: "賞与は過去の一定期間（算定期間）の勤務・評価に対して支払われます。退職予定を伝えた後の評価が下がるケースもあるため、伝達のタイミングも考慮します。",
  },
  {
    title: "規定は会社ごとに異なる",
    desc: "支給条件・支給日・減額規定は就業規則で会社ごとに違います。一般論で判断せず、必ず自社の規定を確認することが大前提です。",
  },
];

const checklist = [
  "就業規則で賞与の支給条件（支給日在籍要件など）を確認したか",
  "賞与の支給日と算定期間を正確に把握しているか",
  "退職予定の申し出が評価・支給に影響する規定はないか",
  "賞与を待つことで失う機会（内定の保留期間など）を見積もったか",
  "次の会社の入社時期と現職の支給日が両立できるか",
  "賞与額と、待つことの損得を金額ベースで比較したか",
];

const ngActions = [
  {
    title: "就業規則を確認せず憶測で動く",
    desc: "「支給日まで在籍すればもらえるはず」と思い込むのは危険です。減額規定や在籍要件は会社ごとに異なります。必ず就業規則の原文を確認しましょう。",
  },
  {
    title: "賞与だけで転職時期を決める",
    desc: "賞与の数十万円のために、好条件の内定を逃すこともあります。賞与額と機会損失を金額で比較し、総合的に判断することが重要です。",
  },
  {
    title: "賞与目当てを露骨に伝える",
    desc: "現職にも転職先にも、「賞与をもらってから辞めたい」を前面に出すと印象を損ねます。退職交渉は引き継ぎや円満退職を軸に進めます。",
  },
  {
    title: "入社時期を曖昧にして調整する",
    desc: "賞与を待つために入社を引き延ばしすぎると、転職先の心証を悪くします。事情は正直に伝え、現実的な入社日で合意しましょう。",
  },
];

const faqs = [
  {
    q: "ボーナスをもらってから転職するべきですか？",
    a: "賞与額が大きく、待つことで失う機会が小さいなら、もらってから動くのが合理的です。ただし、好条件の内定が先に出た場合は、賞与の数十万円より将来の年収アップや裁量を優先したほうが得なこともあります。賞与額と機会損失を金額で比較して判断しましょう。",
  },
  {
    q: "支給日前に退職するとボーナスはもらえませんか？",
    a: "多くの企業が「支給日に在籍していること」を条件にしているため、支給日前の退職だと受け取れない可能性が高いです。ただし規定は会社ごとに異なり、支給日後でも退職予定者は減額される規定がある場合もあります。必ず自社の就業規則を確認してください。",
  },
  {
    q: "退職を伝えるのは賞与支給の前後どちらがいいですか？",
    a: "支給後に伝えるのが無難です。支給前に退職意思を伝えると、評価や支給額に影響する規定がある会社も存在します。ただし、引き継ぎ期間を十分に確保する観点も大切なので、支給日と退職希望日のバランスを見て、就業規則を確認したうえで決めましょう。",
  },
  {
    q: "夏と冬、どちらのボーナス後がいいですか？",
    a: "金額が大きいほうの賞与後を狙うのが基本ですが、求人が増える時期との兼ね合いも重要です。一般に年度初め（4月）や下期初め（10月）に向けて求人が動きやすいため、賞与額と求人タイミングの両方を見て判断します。賞与だけに固執しないことがポイントです。",
  },
  {
    q: "転職先の入社時期は賞与に合わせて調整できますか？",
    a: "ある程度は調整可能ですが、引き延ばしすぎると転職先の心証を損ねます。「現職の引き継ぎと賞与支給の都合で○月入社を希望」と正直に相談すれば、多くの企業は現実的な範囲で配慮してくれます。エージェント経由なら入社時期の交渉も任せられます。",
  },
  {
    q: "ボーナス算定期間の途中で辞めると損ですか？",
    a: "算定期間の途中退職は、その期間分の賞与を取り逃す可能性があります。一方で、次の会社で早く実績を積めば、トータルの生涯年収では有利になることもあります。目先の賞与だけでなく、転職後の年収や成長機会を含めて考えることが大切です。",
  },
  {
    q: "30代・40代は賞与待ちを優先すべきですか？",
    a: "30代・40代は賞与額も大きくなりがちですが、年齢が上がるほど好条件の求人との出会いの価値も高まります。賞与の取り逃しは一時的な損失ですが、キャリアの選択は生涯年収に長く影響します。賞与額と機会の価値を天秤にかけ、機会のほうが大きければ賞与を見送る判断も合理的です。",
  },
];

export default function BonusTimingPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/bonus-timing/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "ボーナス時期と転職タイミング" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          ボーナス時期を踏まえた転職タイミング
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 賞与を取り逃さないための逆算と判断軸
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          転職を考えるとき、「ボーナスをもらってから辞めたほうが得では」と迷う人は多いはずです。確かに賞与の取り逃しは惜しいですが、賞与に固執して好条件の内定を逃すのも本末転倒です。本記事では、賞与支給の基本ルール、支給日から逆算するスケジュール、賞与待ちと早期転職のトレードオフ、判断前のチェックリストまで、損なく転職するための考え方を実践的に解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省 毎月勤労統計調査（賞与関連、2025年）",
            "一般的な就業規則・賞与規定の実務（労務情報）",
          ]}
        />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-blue-600 hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：賞与を踏まえたタイミングの考え方</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              基本方針は、<strong>「就業規則で支給条件を確認し」「支給日から逆算してスケジュールを組み」「賞与額と機会損失を金額で比較する」</strong>こと。賞与は取れるなら取るに越したことはありませんが、それだけで転職時期を決めるのは危険です。
            </p>
            <p className="text-slate-700 leading-relaxed">
              賞与の数十万円は一時的な金額ですが、転職先の選択は生涯年収やキャリアに長く影響します。好条件の内定が先に出たなら、賞与を見送ってでも動いたほうが得なこともあります。賞与・求人タイミング・内定状況を総合し、感情ではなく数字で判断しましょう。
            </p>
          </div>
        </section>

        {/* ルール */}
        <section id="rule" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">賞与支給の基本ルール</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            賞与は会社ごとに規定が異なりますが、共通して押さえるべき基本ルールがあります。判断の前提として理解しておきましょう。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {rules.map((r, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{r.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* スケジュール */}
        <section id="schedule" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">支給日から逆算するスケジュール</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            賞与を確実に受け取りつつ円満に退職するには、支給日を起点に逆算します。一般的な流れは次の通りです（規定により前後します）。
          </p>
          <div className="space-y-4">
            {[
              { num: "1", title: "支給日と支給条件を確認する", desc: "就業規則で支給日・在籍要件・退職予定者の減額規定を確認します。ここが全ての起点です。" },
              { num: "2", title: "退職意思の伝達時期を決める", desc: "支給に影響する規定がなければ、支給日後に退職を申し出るのが無難です。引き継ぎ期間も考慮します。" },
              { num: "3", title: "転職活動を並行で進める", desc: "賞与を待つ間に選考を進め、支給日前後に内定が出るよう逆算します。活動は早めに始めます。" },
              { num: "4", title: "入社時期をすり合わせる", desc: "支給日と引き継ぎを踏まえ、転職先と現実的な入社日を合意します。事情は正直に相談します。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            退職の進め方全般は
            <Link href="/knowledge/resignation/" className="text-blue-600 hover:underline">退職の進め方ガイド</Link>
            、活動全体の流れは
            <Link href="/knowledge/timeline/" className="text-blue-600 hover:underline">転職スケジュールの立て方</Link>
            を参照してください。
          </p>
        </section>

        {/* トレードオフ */}
        <section id="tradeoff" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">賞与待ちと早期転職のトレードオフ</h2>
          <div className="space-y-4">
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-2">賞与を待つメリット</h3>
              <p className="text-sm text-green-700 leading-relaxed">
                確実に賞与を受け取れること、現職を辞める前に資金的な余裕を確保できることが利点です。次の収入までの空白に備えやすくなります。
              </p>
            </div>
            <div className="bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 mb-2">早期に動くメリット</h3>
              <p className="text-sm text-amber-700 leading-relaxed">
                好条件の求人を逃さず、年収アップや裁量の大きいポジションを早く掴めること。転職後の年収増が、待った賞与額を上回ることも珍しくありません。賞与額と機会の価値を金額で比較しましょう。
              </p>
            </div>
          </div>
        </section>

        {/* チェックリスト */}
        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">判断前に確認するチェックリスト</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
            <ul className="space-y-3">
              {checklist.map((item, i) => (
                <li key={i} className="flex gap-3 items-start text-sm text-slate-700">
                  <span className="text-blue-600 font-bold shrink-0">☐</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* NG */}
        <section id="ng" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">やってはいけないNG行動</h2>
          <div className="space-y-4">
            {ngActions.map((n, i) => (
              <div key={i} className="bg-red-50 rounded-lg p-5">
                <h3 className="font-bold text-red-800 mb-2">{n.title}</h3>
                <p className="text-sm text-red-700 leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 30代40代 */}
        <section id="midlife" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代で特に意識する点</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：機会の価値を優先しやすい</h3>
              <p className="text-sm text-blue-700 leading-relaxed">
                30代は年収が伸びる重要な時期です。賞与の取り逃しは一時的でも、転職での年収アップは長く効きます。好条件の内定が出たなら、賞与を待たずに動くほうが生涯年収で有利になることが多いと考えましょう。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：賞与額と求人の希少性を天秤に</h3>
              <p className="text-sm text-blue-700 leading-relaxed">
                40代は賞与額も大きくなりがちですが、年齢が上がるほど好条件の求人との出会いの希少性も高まります。賞与を待つ間に機会を逃すリスクと、確実に取れる賞与額を金額ベースで比較し、感情ではなく数字で判断しましょう。
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
          <h2 className="text-xl font-bold mb-3">入社時期の調整はプロに任せよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントなら、賞与や引き継ぎを踏まえた入社時期の交渉も代行してくれます。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "転職スケジュールの立て方", href: "/knowledge/timeline/" },
              { name: "退職の進め方ガイド", href: "/knowledge/resignation/" },
              { name: "年収ダウン転職の判断軸", href: "/knowledge/salary-down/" },
              { name: "転職で年収は上がる？下がる？", href: "/knowledge/salary-change/" },
              { name: "年収交渉ガイド", href: "/knowledge/salary-negotiation/" },
              { name: "転職ナレッジ一覧", href: "/knowledge/" },
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
