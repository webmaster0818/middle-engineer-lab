import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "システムアーキテクトは転職に効くか｜上流設計の証明と年収【2026年】";
const PAGE_DESC =
  "IPAの高度試験・システムアーキテクト試験（SA）を、設計実務者の上流（要件定義・アーキテクチャ設計）証明という観点から30代・40代向けに解説。合格率、午前Ⅰ免除、論述試験、年収の考え方まで限界も含めて整理します。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：システムアーキテクトは誰に効く資格か" },
  { id: "overview", label: "試験概要（受験料・形式・合格率）" },
  { id: "menjo", label: "午前Ⅰ免除制度のメリット" },
  { id: "salary", label: "保有者の年収の考え方と注意点" },
  { id: "scenes", label: "転職で評価される具体場面" },
  { id: "jobs", label: "活きるポジション" },
  { id: "middle", label: "30代・40代の価値＝上流設計の客観証明" },
  { id: "steps", label: "取得3ステップ／次に狙う資格" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "システムアーキテクトは40代の転職で意味がありますか？",
    a: "要件定義・基本設計・アーキテクチャ設計の実務がある経験者には意味があります。システムアーキテクト試験はIPAの高度試験で、情報システムの上流設計を主導する素養を国家資格として客観的に示せます。午後Ⅱの論述で自身の設計経験を論じる必要があるため、構造的にミドル向けの試験です。すでに上流設計に携わる30〜40代が、設計責任者やアーキテクトへ役割を広げる加点材料になります。ただし資格単体で年収が跳ねるわけではなく、設計実務との掛け算が前提です。",
  },
  {
    q: "システムアーキテクトの合格率はどのくらいですか？",
    a: "IPA公表（令和7年度春期）では、受験者3,963人・合格者616人で合格率15.5%でした。午前Ⅰ・午前Ⅱの多肢選択、午後Ⅰの記述に加え、午後Ⅱは『論述（小論文）』で、自身が関わったシステム設計を題意に沿って論じる形式が合否を分けます（IPA、2026年6月時点）。",
  },
  {
    q: "システムアーキテクトに合格すると何か免除がありますか？",
    a: "高度試験の合格者は、その後2年間、ほかの高度試験および情報処理安全確保支援士試験の『午前Ⅰ』が免除されます。応用情報技術者の合格でも同様に午前Ⅰが2年間免除されます。複数の高度資格を狙う場合、この免除は学習・受験の負担を大きく減らすメリットになります（IPA、2026年6月時点）。",
  },
  {
    q: "システムアーキテクトとプロジェクトマネージャ試験はどう違いますか？",
    a: "対象とする領域が異なります。システムアーキテクトは『何を・どう作るか』という情報システムの上流設計（要件定義・アーキテクチャ設計）の専門区分です。一方プロジェクトマネージャ試験は『どう進めるか』というプロジェクト管理の区分です。設計を主導したい人はSA、計画・進行を統括したい人はPMと、自分の役割に近いほうを選ぶのが基本です。",
  },
  {
    q: "システムアーキテクトを取れば年収は上がりますか？",
    a: "資格単体での即時の年収アップは限定的です。IPA高度試験の保有者に限定した公的な年収統計は乏しく、当サイトでは具体的な平均額を断定しません。年収は実務経験・役割・案件規模で決まり、SAはそれを補強する位置づけと捉えるのが現実的です。参考として、給与所得者全体の平均は国税庁『民間給与実態統計調査』で461万円（令和6年分）です。",
  },
  {
    q: "受験料はいくらですか？CBTになりますか？",
    a: "受験料は7,500円（税込）です。システムアーキテクト試験は春期（4月）に実施されてきましたが、令和8年度（2026年度）からCBT方式への移行が予定されています。出題形式（多肢選択・記述・論述）や出題範囲そのものに大きな変更はない見込みですが、最新の実施方式は受験前にIPA公式でご確認ください（IPA、2026年6月時点）。",
  },
];

const overviewTable = [
  ["主催", "IPA（独立行政法人 情報処理推進機構）"],
  ["区分", "高度試験（上流設計・アーキテクチャ領域の区分）"],
  ["受験料", "7,500円（税込）"],
  ["構成", "午前Ⅰ・午前Ⅱ（多肢選択）＋午後Ⅰ（記述）＋午後Ⅱ（論述）"],
  ["合格基準", "各区分で60点以上（午後Ⅱは論述評価）"],
  ["合格率", "令和7年度春期 15.5%（受験3,963人・合格616人／IPA）"],
  ["実施時期", "春期（4月）。令和8年度よりCBT移行予定"],
  ["免除特典", "合格後、他の高度試験・支援士の午前Ⅰを2年間免除"],
  ["有効期限", "なし（国家資格・普遍的）"],
];

export default function SystemArchitectCertPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/cert/system-architect/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "資格で選ぶ転職", href: "/cert/" },
          { name: "システムアーキテクト" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          システムアーキテクトは転職に効くか｜上流設計の証明と年収【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | IPA高度試験・システムアーキテクトの転職価値を30代・40代向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          システムアーキテクト試験（SA）は、IPAが主催する高度試験のうち情報システムの上流設計・アーキテクチャ領域に位置づけられる国家資格です。本記事は「システムアーキテクトを取れば転職で有利になるか」という疑問に対し、<strong>設計実務者が上流（要件定義・アーキテクチャ設計）の素養を客観的に証明する『経験者の加点資格』</strong>という性格を軸に、論述試験の特徴や午前Ⅰ免除のメリットを含め、IPA公式情報をもとに整理します。資格単体では年収は跳ねないという限界も正直にお伝えします。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "IPA 公式（ipa.go.jp）令和7年度実施結果",
            "国税庁 民間給与実態統計調査（令和6年分）",
            "本サイト データシート（2026年6月）",
          ]}
        />

        {/* 目次 */}
        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
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
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：システムアーキテクトは誰に効く資格か</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              システムアーキテクトは<strong>「設計実務者の上流（要件定義・アーキテクチャ設計）を証明する加点資格」</strong>です。午後Ⅱの論述で自身の設計経験を論じる必要があるため、<strong>構造的に実務経験のあるミドルを想定した試験</strong>です。すでに要件定義・基本設計に携わる30〜40代が、設計責任者・アーキテクトへ役割を広げる土台として最も効きます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>上流設計の実務がある30〜40代</strong>：設計力の客観証明・アーキテクトへの土台として加点される</li>
              <li>② <strong>未経験のミドル</strong>：論述で設計の実体験が問われ、入口には不向き。まず応用情報や設計実務を積むべき</li>
              <li>③ <strong>高度資格・上流志向</strong>：合格すれば午前Ⅰ免除でPM試験など他区分への近道になる</li>
            </ul>
          </div>
        </section>

        {/* 試験概要 */}
        <section id="overview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">試験概要（受験料・形式・合格率）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <tbody>
                {overviewTable.map(([k, v], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200 w-1/3 align-top">{k}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: IPA 公式（ipa.go.jp、令和7年度春期実施結果、2026年6月時点）。合格率15.5%は受験者3,963人・合格者616人に基づく公表値。午後Ⅱの論述（小論文）が最大の関門で、自身が関わったシステム設計を題意に沿って論じる必要があります。令和8年度（2026年度）からCBT方式への移行が予定されています。有効期限はなく、合格すれば資格は生涯有効です。
          </p>
        </section>

        {/* 午前I免除 */}
        <section id="menjo" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">午前Ⅰ免除制度のメリット</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            高度試験には共通の「午前Ⅰ免除制度」があり、これを理解すると学習計画が立てやすくなります。次のいずれかを満たすと、その後<strong>2年間、高度試験・情報処理安全確保支援士試験の午前Ⅰが免除</strong>されます。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-3">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・<strong>応用情報技術者試験</strong>に合格する</li>
              <li>・いずれかの<strong>高度試験または支援士試験に合格</strong>する</li>
              <li>・高度試験・支援士試験の<strong>午前Ⅰで基準点以上</strong>を取る</li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: IPA「午前Ⅰ試験免除」（ipa.go.jp、2026年6月時点）。免除期間は合格・基準点取得から2年間です。SAは午後Ⅱの論述対策に時間がかかるため、午前Ⅰ免除で午前の負担を減らせる意義は大きいといえます。SA合格後はこの免除でプロジェクトマネージャ試験など他区分にも挑みやすくなります。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">保有者の年収の考え方と注意点</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            システムアーキテクト合格者に限定した公的な年収統計は乏しく、当サイトでは<strong>具体的な平均額を断定しません</strong>。民間メディアには年収目安を示すものもありますが、母集団や因果が明示されない参考値であり、資格が年収を押し上げたとは断定できません。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-3">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・IPA高度試験の保有者別年収：<strong>公的統計が乏しく公表値は限定的</strong></li>
              <li>・実態：<strong>年収は設計実務経験・役割・案件規模で決まり、資格は補強材</strong></li>
              <li>・参考：給与所得者全体の平均は<strong>461万円</strong>（国税庁・令和6年分）</li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: 国税庁「民間給与実態統計調査」（令和6年分・給与所得者平均461万円）。SA単独の年収は信頼できる公的データが乏しいため、当サイトでは断定を避け、設計実務経験との掛け算で評価する立場を取ります。
          </p>
        </section>

        {/* 評価される場面 */}
        <section id="scenes" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職で評価される具体場面</h2>
          <div className="space-y-3">
            {[
              { t: "上流設計・アーキテクト職への応募", d: "要件定義・基本設計・アーキテクチャ設計の素養を国家資格で裏づけ、設計責任者の求人で加点される。" },
              { t: "設計力の客観証明", d: "論述で問われる試験性質上、設計の実体験の裏づけとなり、属人的な設計経験を伝わる形にできる。" },
              { t: "資格手当・評価制度の対象", d: "高度試験を資格手当・報奨金や昇進要件に設定する企業があり、社内評価の根拠になりやすい。" },
              { t: "PM・コンサルへの布石", d: "午前Ⅰ免除を使えば、プロジェクトマネージャ試験など上流マネジメント区分にも挑みやすくなる。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 活きるポジション */}
        <section id="jobs" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">活きるポジション</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            システムアーキテクトが設計力の証明として活きる代表的な進路です（一般的な整理。具体的な求人件数はリアルタイムで変動するため、最新は各エージェントでご確認ください）。
          </p>
          <div className="space-y-3">
            {[
              { t: "システムアーキテクト／設計責任者", d: "要件定義からアーキテクチャ設計までを主導する役割。論述で問われた設計素養がそのまま実務に直結する。" },
              { t: "上流SE・ITコンサル", d: "顧客の課題から解決策を設計する上流職。国家資格の裏づけが提案の信頼性を高める。" },
              { t: "テックリード／設計レビュー担当", d: "チームの設計品質を担保する立場。体系的な設計知識が判断の土台になる。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            設計・上流方向は<Link href="/knowledge/system-design/" className="text-blue-600 hover:underline">システム設計の考え方</Link>、マネジメント方向は<Link href="/skill/pm/" className="text-blue-600 hover:underline">PM（プロジェクトマネージャー）転職ガイド</Link>を参考にしてください。
          </p>
        </section>

        {/* 30-40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の価値＝上流設計の客観証明</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              システムアーキテクトは、<strong>構造的にミドル向け</strong>の資格です。午後Ⅱの論述で自身が関わったシステム設計を論じる必要があるため、実体験のない人には突破が難しく、<strong>「すでに上流設計を経験した人が、その設計力を国家資格で客観化するための装置」</strong>として最も効きます。要件定義・基本設計に携わる30〜40代にとって、これは時間を投資する価値のある資格です。
            </p>
            <p>
              一方で過度な期待は禁物です。SAを取っても、それ単体で年収が跳ねるわけではありません。価値が出るのは<strong>「設計実務経験 × 資格」の掛け算</strong>のとき。担当したシステムの規模・役割と組み合わせて初めて、アーキテクトや設計責任者のポジション、資格手当という形で結実します。さらに、午前Ⅰ免除を使ってプロジェクトマネージャ試験など他の高度区分へ進めば、上流での評価軸をもう一段広げられます。
            </p>
            <p>
              年代別の市場感は<Link href="/age/30s/" className="text-blue-600 hover:underline">30代エンジニアの転職</Link>・<Link href="/age/40s/" className="text-blue-600 hover:underline">40代エンジニアの転職</Link>、職務経歴書の作り方は<Link href="/knowledge/resume/" className="text-blue-600 hover:underline">エンジニアの職務経歴書</Link>も合わせてご覧ください。
            </p>
          </div>
        </section>

        {/* 取得3ステップ */}
        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">取得3ステップ／次に狙う資格</h2>
          <div className="space-y-3 mb-6">
            {[
              { n: "STEP 1", t: "午前Ⅱで設計知識を網羅", d: "システム開発・アーキテクチャ分野の用語・体系を過去問演習で固める。応用情報合格者は午前Ⅰ免除を活用できる。" },
              { n: "STEP 2", t: "午後Ⅱの論述対策が本丸", d: "自身の設計経験を題意に沿って論じる練習を反復。論述ネタとなる設計事例を事前に整理しておくのが鍵。" },
              { n: "STEP 3", t: "合格→午前Ⅰ免除で上位へ", d: "合格後2年間の午前Ⅰ免除を活かし、プロジェクトマネージャ試験など他の高度区分に挑戦する。" },
            ].map((x, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="text-xs font-bold text-blue-600 shrink-0 w-14 pt-1">{x.n}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                  <p className="text-sm text-slate-600">{x.d}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            前段の基礎が不安なら<Link href="/cert/applied-info/" className="text-blue-600 hover:underline">応用情報技術者</Link>から、マネジメントを深めるなら<Link href="/cert/project-manager/" className="text-blue-600 hover:underline">プロジェクトマネージャ試験</Link>、設計と組み合わせるなら<Link href="/cert/database-specialist/" className="text-blue-600 hover:underline">データベーススペシャリスト</Link>との取得も有効です。
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
          <h2 className="text-xl font-bold mb-3">上流設計・アーキテクト職への転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            システムアーキテクトを活かせる上流設計・アーキテクト求人を、IT特化型エージェントであなたの市場価値とともに確認しましょう。
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
              { name: "応用情報技術者の転職価値", href: "/cert/applied-info/" },
              { name: "プロジェクトマネージャ試験(IPA)と転職", href: "/cert/project-manager/" },
              { name: "データベーススペシャリストの転職価値", href: "/cert/database-specialist/" },
              { name: "システム設計の考え方", href: "/knowledge/system-design/" },
              { name: "PM（プロジェクトマネージャー）転職ガイド", href: "/skill/pm/" },
              { name: "資格で選ぶ転職（資格ハブ）", href: "/cert/" },
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
