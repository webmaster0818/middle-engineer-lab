import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "基本情報技術者は転職に効くか｜年代別の価値と年収【2026年】";
const PAGE_DESC =
  "IPAの国家資格・基本情報技術者試験（FE）が転職で評価される場面を、未経験入口資格としての位置づけから30代・40代向けに整理。CBT通年化後の合格率、年収相場（出典明記）、限界も正直に解説します。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：基本情報は誰に効く資格か" },
  { id: "overview", label: "試験概要（受験料・形式・合格率）" },
  { id: "salary", label: "保有者の年収相場と注意点" },
  { id: "scenes", label: "転職で評価される具体場面" },
  { id: "jobs", label: "活きるポジション" },
  { id: "position", label: "IPA体系の中での位置づけ" },
  { id: "middle", label: "30代・40代の価値＝対象読者で分かれる" },
  { id: "steps", label: "取得3ステップ／併取得すべき資格" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "基本情報技術者は40代の転職で意味がありますか？",
    a: "対象読者によって評価が分かれます。すでにIT実務経験のあるエンジニアにとっては基礎的すぎ、単体の武器性は低いのが正直なところです。一方で、異業種からIT職へ移ろうとする30〜40代にとっては、ITの基礎知識を網羅的に学んだ最低限の証明として有効です。つまり『誰が取るか』で価値が変わる資格です。",
  },
  {
    q: "基本情報を取れば未経験でもIT転職できますか？",
    a: "資格だけで内定が確約されるわけではありませんが、異業種からの未経験転職では『IT基礎を体系的に理解している』ことの証明になり、書類段階の説得力が増します。基本情報はIPA（独立行政法人 情報処理推進機構）が主催する国家資格で、特定企業に依存しない普遍的な基礎を示せる点が強みです。ポートフォリオや志望動機と組み合わせて使うのが前提です。",
  },
  {
    q: "基本情報を取れば年収は上がりますか？",
    a: "『基本情報単体で年収が一気に上がることは稀』というのが共通見解です。取得者の年収を600万円前後とする集計もありますが、母集団が不明な参考値であり、資格の効果と断定はできません。比較対象として、国税庁の給与所得者平均は461万円（令和6年分）です。基本情報はあくまで土台で、年収は実務経験や役割で決まります。",
  },
  {
    q: "基本情報はいつでも受験できますか？",
    a: "はい。基本情報技術者試験（FE）はCBT方式で通年実施されており、随時受験が可能です。科目A（90分）と科目B（100分）で構成され、各1000点満点中600点以上（IRTスコア）が合格基準です（IPA、2026年6月時点）。",
  },
  {
    q: "基本情報と応用情報、どちらを取るべきですか？",
    a: "IT未経験・経験浅めなら基本情報から、すでに実務経験がありステップアップしたいなら応用情報がおすすめです。基本情報は未経験の入口資格、応用情報は経験者の加点資格という位置づけで、性格が異なります。応用情報に合格すると高度試験・情報処理安全確保支援士の午前Ⅰが2年間免除される利点もあります。",
  },
];

const overviewTable = [
  ["主催", "IPA（独立行政法人 情報処理推進機構）"],
  ["受験料", "7,500円"],
  ["試験方式", "CBT方式・通年実施"],
  ["構成", "科目A（90分）＋科目B（100分）"],
  ["合格基準", "各1000点満点中600点以上（IRTスコア）"],
  ["合格率", "新制度平均 約47.1%（おおむね42〜47%）"],
  ["有効期限", "なし（国家資格・普遍的）"],
];

export default function BasicInfoCertPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/cert/basic-info/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "資格で選ぶ転職", href: "/cert/" },
          { name: "基本情報技術者" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          基本情報技術者は転職に効くか｜年代別の価値と年収【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | IPA国家資格・基本情報技術者の転職価値を30代・40代向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          基本情報技術者試験（FE）は、IPAが主催するIT国家資格の入門に位置づけられる試験です。本記事は「基本情報を取れば転職で有利になるか」という疑問に対し、未経験の入口資格という性格を踏まえ、<strong>『誰が取るか』で評価がまったく変わる</strong>点を中心に、公開データと公式情報をもとに整理します。経験者には基礎的すぎるという限界も正直にお伝えします。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "IPA 公式（ipa.go.jp）",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：基本情報は誰に効く資格か</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              基本情報技術者は<strong>「IT未経験者の入口」</strong>として効き、<strong>「経験者には基礎すぎて単体の武器性が低い」</strong>資格です。同じ資格でも対象読者で評価が真逆になります。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>異業種→IT転職の30〜40代</strong>：IT基礎を網羅した最低限の証明として有効</li>
              <li>② <strong>IT実務経験のあるミドル</strong>：基礎すぎて加点は限定的。上位試験（応用情報）へ進むべき</li>
              <li>③ <strong>共通</strong>：国家資格で有効期限がなく、特定企業に依存しない普遍的な基礎を示せる</li>
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
            出典: IPA 公式（ipa.go.jp/shiken、2026年6月時点）。新制度（CBT通年化）後の合格率はおおむね42〜47%で、平均は約47.1%です。有効期限はなく、一度合格すれば資格は生涯有効です。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">保有者の年収相場と注意点</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            基本情報取得者の年収を「600万円前後」とする集計も見られますが、これは<strong>母集団が不明な参考値</strong>であり、資格の効果と断定することはできません。実際には実務経験・職種・年齢の影響が大きく、資格単体での年収押し上げは限定的です。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-3">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・取得者の年収を600万円前後とする集計あり（<strong>母集団不明・参考値</strong>）</li>
              <li>・比較対象：給与所得者平均461万円（<strong>国税庁 令和6年分・権威データ</strong>）</li>
              <li>・共通見解：<strong>「基本情報単体で年収が一気に上がることは稀」</strong></li>
            </ul>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: 年収集計は各種転職メディア（参考値・母集団不明のため断定回避）、給与所得者平均は国税庁「民間給与実態統計調査」（令和6年分）。当サイトでは公的統計を権威データ、メディア集計を参考値として明確に区別しています。
          </p>
        </section>

        {/* 評価される場面 */}
        <section id="scenes" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職で評価される具体場面</h2>
          <div className="space-y-3">
            {[
              { t: "異業種→IT未経験転職の書類", d: "IT基礎を体系的に学んだ証明として、未経験応募の書類段階で学習意欲・基礎理解を裏付ける。" },
              { t: "SES・受託の入社時要件", d: "企業によっては入社時・配属時に基本情報の取得を推奨・必須とする場合があり、そこを満たせる。" },
              { t: "資格手当・社内評価の対象", d: "基本情報を資格手当や昇給評価の対象に設定している企業があり、社内での評価根拠になる。" },
              { t: "上位試験への基礎固め", d: "応用情報・高度試験へ進む前提として、共通の基礎用語・知識の土台を作れる。" },
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
            基本情報が土台として活きる代表的な進路です（一般的な整理。具体的な求人件数はリアルタイムで変動するため、最新は各エージェントでご確認ください）。
          </p>
          <div className="space-y-3">
            {[
              { t: "未経験からのプログラマ・SE", d: "異業種出身者がIT職に入る最初のステップ。基礎知識の証明として書類で機能する。" },
              { t: "IT運用・保守・ヘルプデスク", d: "ITの幅広い基礎が問われる運用系職種で、知識の網羅性が活きる。" },
              { t: "社内SE・情シス（IT基礎重視）", d: "特定技術の深さより幅広いIT理解が求められる職種で、基礎資格が評価されやすい。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            未経験からの進路は<Link href="/knowledge/inexperienced-30s/" className="text-blue-600 hover:underline">30代未経験からのITエンジニア転職</Link>、インフラ方向なら<Link href="/skill/infrastructure/" className="text-blue-600 hover:underline">インフラエンジニア転職ガイド</Link>を参考にしてください。
          </p>
        </section>

        {/* IPA体系の位置づけ */}
        <section id="position" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">IPA体系の中での位置づけ</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            基本情報技術者は、IPAの情報処理技術者試験という体系の中で「入門〜基礎レベル」に位置します。全体像を理解しておくと、自分が次にどこを目指すべきかが見えやすくなります。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">区分</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">主な試験</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">想定する層</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["入門", "ITパスポート", "IT利用者・社会人全般"],
                  ["基礎", "基本情報技術者（FE）", "IT職に就く・就いたばかりの層"],
                  ["応用", "応用情報技術者（AP）", "実務経験を積んだ中堅層"],
                  ["高度", "情報処理安全確保支援士 ほか各高度試験", "専門領域のスペシャリスト"],
                ].map(([k, a, b], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{k}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{a}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            この体系を踏まえると、基本情報の役割がはっきりします。<strong>IT職に入る・入ったばかりの人が、共通言語としての基礎を固める</strong>ための試験です。ベンダー資格のCCNAやLPIC/LinuCが「ネットワーク」「Linux」といった特定領域に直結するのに対し、基本情報は<strong>特定領域に偏らないIT全般の土台</strong>を示します。だからこそ、どの専門に進むか未定の未経験者にとって、最初の一歩として選びやすいのです。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            正直なデメリットも明確です。基礎レベルである以上、<strong>すでに実務経験のあるエンジニアには物足りず、書類での加点効果も限定的</strong>です。経験者がこの体系で価値を出すなら、一段上の<Link href="/cert/applied-info/" className="text-blue-600 hover:underline">応用情報技術者</Link>へ進むべきです。応用情報に合格すれば高度試験・情報処理安全確保支援士の午前Ⅰが2年間免除され、専門資格への近道にもなります。
          </p>
        </section>

        {/* 30-40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の価値＝対象読者で分かれる</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              この資格の評価は、ミドル層の中でもくっきり二分されます。<strong>すでにIT実務経験のある30〜40代</strong>にとって、基本情報は正直なところ「基礎すぎる」資格です。書類で加点される効果は薄く、この層が時間を投資するなら、経験者の加点資格である応用情報や、専門領域の資格に進むべきです。
            </p>
            <p>
              一方、<strong>異業種からIT職へ移る30〜40代</strong>にとっては話が変わります。年齢が上がるほど「本当にITを続ける覚悟があるのか」を問われやすく、基本情報は『IT基礎を体系的に学び切った』という最低限の証明として、志望動機の本気度を裏付けます。同じ資格でも、誰が・どんな文脈で示すかで価値が真逆になる——ここを取り違えないことが重要です。
            </p>
            <p>
              異業種出身ミドルが基本情報を活かすコツは、<strong>資格を「ゴール」ではなく「スタートの証明」として見せる</strong>ことです。採用側が異業種からの転職者に最も懸念するのは、入社後にギャップで離脱しないかという点です。基本情報の学習を通じてアルゴリズムやネットワーク、セキュリティの基礎を一通り理解していれば、「ITの全体像をわかったうえで覚悟して飛び込んでいる」という説得力が生まれます。さらに、前職で培ったコミュニケーション力や業務改善の経験、ドメイン知識（医療・金融・製造などの業界知識）と組み合わせれば、若手にはない強みとして差別化できます。基本情報単体ではなく、こうした掛け算で勝負するのがミドルの異業種転職の定石です。
            </p>
            <p>
              年代別の市場感は<Link href="/age/30s/" className="text-blue-600 hover:underline">30代エンジニアの転職</Link>・<Link href="/age/40s/" className="text-blue-600 hover:underline">40代エンジニアの転職</Link>、職務経歴書の作り方は<Link href="/knowledge/resume/" className="text-blue-600 hover:underline">エンジニアの職務経歴書</Link>も合わせてご覧ください。
            </p>
          </div>
        </section>

        {/* 取得3ステップ */}
        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">取得3ステップ／併取得すべき資格</h2>
          <div className="space-y-3 mb-6">
            {[
              { n: "STEP 1", t: "科目Aの基礎知識を固める", d: "テクノロジ・マネジメント・ストラテジの基礎を市販テキストで網羅。用語の理解を優先する。" },
              { n: "STEP 2", t: "科目B（アルゴリズム・情報セキュリティ）対策", d: "擬似言語の読解とトレースを反復。科目Bが合否を分けやすいため重点的に。" },
              { n: "STEP 3", t: "CBTで随時受験→次の目標へ", d: "通年受験できるため準備が整い次第予約。合格後は応用情報や専門資格へ進む。" },
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
            併取得・次のステップ：上流・経験者の加点なら<Link href="/cert/applied-info/" className="text-blue-600 hover:underline">応用情報技術者</Link>、インフラ実務なら<Link href="/cert/ccna/" className="text-blue-600 hover:underline">CCNA</Link>や<Link href="/cert/lpic/" className="text-blue-600 hover:underline">LPIC／LinuC</Link>、クラウドなら<Link href="/skill/aws/" className="text-blue-600 hover:underline">AWS認定</Link>が定番です。
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
          <h2 className="text-xl font-bold mb-3">IT職への転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            基本情報を活かせる求人や、未経験からの現実的なルートをIT特化型エージェントで確認しましょう。
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
              { name: "CCNAの転職価値", href: "/cert/ccna/" },
              { name: "LPIC／LinuCの転職価値", href: "/cert/lpic/" },
              { name: "30代未経験からのITエンジニア転職", href: "/knowledge/inexperienced-30s/" },
              { name: "インフラエンジニア転職ガイド", href: "/skill/infrastructure/" },
              { name: "エンジニアの職務経歴書", href: "/knowledge/resume/" },
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
