import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "PMPは転職に有利？30・40代の年収・受験資格・活かし方【2026年】";
const PAGE_DESC =
  "PMP（プロジェクトマネジメント・プロフェッショナル）は30代・40代の転職で有利か。PMI公式Salary Surveyの年収データ、受験資格・試験概要、評価される場面、実務×資格の活かし方とデメリットまで正直に解説します。";

export const metadata: Metadata = {
  alternates: { canonical: "/cert/pmp/" },
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：PMPは経験者加点資格、ミドルに効く" },
  { id: "overview", label: "試験概要・受験資格" },
  { id: "salary", label: "保有者の年収相場" },
  { id: "scene", label: "転職で評価される場面" },
  { id: "jobs", label: "求人で求められる要件" },
  { id: "kakezan", label: "30-40代の価値＝実務×資格" },
  { id: "steps", label: "取得3ステップ・併取得資格" },
  { id: "demerit", label: "デメリット・限界" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "PMPは30代・40代の転職で本当に有利ですか？",
    a: "経験者にとっては有利に働きやすい資格です。理由は受験資格自体がPM実務（大卒で36ヶ月以上、非大卒で60ヶ月以上）を求めるため、PMPを持っていること自体が一定のPM経験の客観的証明になるからです。PMI公式のSalary Survey 13th Edition（2023）では、日本のPMP保有者の年収中央値は891万円で、非保有者の817万円を上回ると報告されています。ただし資格単体ではなく、実際のプロジェクト実績とセットで語れることが前提です。",
  },
  {
    q: "PMPの受験資格を満たしているか分かりません。",
    a: "PMPの受験には学歴に応じた実務経験と研修が必要です。四年制大学卒業（学士相当）の場合はプロジェクトマネジメント実務36ヶ月以上＋35時間の公式研修、高卒など非大卒の場合は60ヶ月以上＋35時間の研修が目安です（PMI公式）。実務経験は「PMという肩書き」でなくてもプロジェクトを主導した経験が対象になり得ます。正確な要件・換算は必ずPMI公式（pmi-japan.org等）で最新条件をご確認ください。",
  },
  {
    q: "PMPの年収データの出典は信頼できますか？",
    a: "本記事で年収の中心に置いているのはPMI（Project Management Institute）公式のSalary Survey 13th Edition（2023）で、これは権威データとして扱っています。日本のPMP保有者中央値891万円・非保有817万円、年代別では30代949万円・40代1,212万円・50代1,217万円（平均・賞与含む）と報告されています。一方、転職メディアの集計値（例: Geekly 2025集計で取得者平均896万円）は参考値として併記し、断定は避けています。",
  },
  {
    q: "PMPの更新は大変ですか？",
    a: "PMPは取得後3年ごとに60PDU（Professional Development Units）の取得と更新手続きが必要です。PDUはセミナー受講・実務・学習などで積み上げます。継続学習を前提とする資格のため、取りっぱなしにはできません。これはデメリットでもありますが、知識を陳腐化させない仕組みとも言えます。最新の更新要件はPMI公式でご確認ください。",
  },
  {
    q: "PMPとIPAの応用情報、どちらを先に取るべきですか？",
    a: "目的次第です。マネジメント・PM職を明確に狙うならPMPが直接効きます。一方、上流・設計の土台を国家資格で固めたい、あるいはPMPの受験資格（実務36ヶ月）にまだ届かない場合は、先に応用情報技術者でIT全般の体系知識を固めるのが現実的です。PMPは実務経験が前提のため、経験が浅い段階では応用情報→経験を積む→PMPという順序が無理がありません。",
  },
];

const salaryByAge = [
  ["30代", "約949万円", "PM経験を積み高単価案件に乗る時期"],
  ["40代", "約1,212万円", "PMO・複数PJ統括など責任拡大層"],
  ["50代", "約1,217万円", "プログラム/ポートフォリオ管理層"],
];

export default function CertPmpPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/cert/pmp/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エンジニア資格と転職", href: "/cert/" },
          { name: "PMP" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          PMPは転職に有利？30・40代の年収・受験資格・活かし方【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | PMI公式データで30代・40代のPMP活用を解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          PMP（Project Management Professional）は、PMI（Project Management Institute）が認定する国際的なプロジェクトマネジメント資格です。本記事は「30代・40代の転職でPMPは効くのか」という情報意図に絞り、<strong>受験資格が構造的にミドル向け</strong>であること、PMI公式の年収データ、そして「実務×資格の掛け算」での活かし方を、デメリットも含めて整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "PMI Salary Survey 13th Edition（2023）【権威データ】",
            "PMI / PMI日本支部 公式（受験資格・更新要件）",
            "Geekly 2025集計（取得者数・平均年収の参考値）",
            "本サイト データシート（2026年6月）",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：PMPは経験者加点資格、ミドルに効く</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              PMPは当サイトの分類で<strong>「経験者加点資格」</strong>に位置づけられます。受験資格自体がPM実務36ヶ月以上（大卒）を求めるため、構造的に30代・40代のミドル層向けの資格です。資格を持つこと自体がPM経験の客観証明になり、高単価案件の書類フィルタを通過しやすくなります。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① 受験資格が<strong>PM実務前提</strong>＝持っているだけで経験の裏づけになる</li>
              <li>② PMI公式データで保有者中央値<strong>891万円</strong>（非保有817万円・2023）</li>
              <li>③ ただし<strong>3年ごと60PDU更新</strong>が必要で、取りっぱなしにはできない</li>
            </ul>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            PMPが他のIT資格と決定的に違うのは、<strong>「合格すること」より「受験資格を満たすこと」のハードルが高い</strong>点です。基本情報やCCNAは実務未経験でも挑戦できますが、PMPはそもそもプロジェクトマネジメントの実務経験がないとスタートラインに立てません。この構造が、結果としてPMPを「ミドル層の経験を裏づける資格」にしています。20代で取得している人が相対的に少ないのもこのためで、30-40代がキャリアの棚卸しと並行して狙うのに適した資格と言えます。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mt-3">
            一方で、PMPは「持っているだけで案件が降ってくる魔法の資格」ではありません。最終的に評価されるのは、担当したプロジェクトをどう成功（あるいは火消し）させたかという実績です。資格はその実績に「国際標準のPM知識を体系的に持っている」という保証を付ける役割だと理解しておくと、取得後の期待値のズレを防げます。
          </p>
        </section>

        {/* 試験概要 */}
        <section id="overview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">試験概要・受験資格</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["主催", "PMI（Project Management Institute）"],
                  ["受験資格", "大卒＝PM実務36ヶ月＋35時間研修 / 非大卒＝PM実務60ヶ月＋35時間研修"],
                  ["問題数・時間", "180問・3時間50分"],
                  ["受験料", "PMI会員 $405 / 非会員 $655"],
                  ["更新", "3年ごとに60PDU取得＋更新手続き"],
                  ["国内取得者数", "約48,811人（2025年1月時点・Geekly集計の参考値）"],
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
            出典: PMI / PMI日本支部 公式（受験資格・受験料・更新、2026年6月時点）。取得者数はGeekly集計の参考値。受験料は会員区分・為替・改定により変動します。受験前に必ずPMI公式で最新条件をご確認ください。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">保有者の年収相場</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            年収の中心データには<strong>PMI公式のSalary Survey 13th Edition（2023）</strong>を権威データとして用います。同調査では、日本のPMP保有者の年収中央値は<strong>891万円</strong>、非保有者は817万円と報告されています。年代別（平均・賞与含む）は以下のとおりです。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年代</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">PMP保有者の平均年収</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">この年代の位置づけ</th>
                </tr>
              </thead>
              <tbody>
                {salaryByAge.map(([age, salary, note], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{age}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{salary}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed mb-3">
            出典: PMI Salary Survey 13th Edition（2023）。年代別の平均・賞与含む。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            参考値として、転職メディアGeeklyの2025年集計では取得者平均896万円、年代別に20代483万円・30代721万円・40代947万円・50代1,000万円超とされています（参考値）。集計の母集団・定義が異なるため数値に幅があり、目安としてご覧ください。日経の「転職に役立つ資格」関連でもPMPは上位で言及されることがあります。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            注意したいのは、これらの数値は<strong>「PMP保有者は年収が高い」ことを示しても、「PMPを取れば年収が上がる」ことを直接証明するものではない</strong>点です。PMPを取得する人はもともとPM実務を相当積んでいる層であり、その経験自体が高年収の主因です。つまり高年収はPMPの効果と経験の効果が混ざった結果であり、資格単体の上乗せ分を切り出すのは困難です。とはいえ、同程度の経験を持つ人同士を比べたとき、PMP保有が書類選考や年収交渉で有利に働く場面があるのも事実です。「経験という土台に、資格という保証を足す」という読み方が現実に即しています。
          </p>
        </section>

        {/* 評価される場面 */}
        <section id="scene" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職で評価される場面</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            PMPが具体的にどんな場面で効くのかを、転職活動のシーン別に整理します。共通するのは「PM経験を客観的に証明する必要がある場面」で力を発揮するという点です。
          </p>
          <div className="space-y-3">
            {[
              { t: "高単価PM案件・SIerやコンサルの上流", d: "PMP保有が応募要件・歓迎要件になっている求人で、書類選考のフィルタを通過しやすい。" },
              { t: "PM経験の客観証明が必要な転職", d: "社内でPMをしてきたが肩書きが曖昧な人でも、PMPで『国際標準のPM知識を持つ』ことを示せる。" },
              { t: "外資・グローバルPJへの参画", d: "PMPは国際資格のため、海外拠点・多国籍チームのPMロールで共通言語として評価される。" },
              { t: "PMO・プログラム管理への昇格", d: "複数プロジェクトの統括ポジションで、体系的なマネジメント知識の裏づけになる。" },
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
            PM求人の頻出要件を傾向として整理すると、おおむね次の3層に分かれます（求人票の頻出要件をもとにした傾向で、特定企業の数値ではありません）。
          </p>
          <div className="space-y-3">
            {[
              { t: "PMジュニア〜ミドル層", d: "数百万〜数千万規模のPJ管理、進捗・課題・要員管理の実務。PMP歓迎要件になりやすい。" },
              { t: "シニアPM層", d: "大規模・複数ベンダー横断のPJ統括、予算・リスク管理。PMP保有が応募要件になることがある。" },
              { t: "PMO・プログラム管理層", d: "全社PJポートフォリオの標準化・ガバナンス。PMPに加えPgMP等の上位や実績が問われる。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 leading-relaxed mt-3">
            ※ リアルタイムの求人件数は変動が大きく当サイトでは断定しません。最新の件数・要件は各エージェントの保有求人でご確認ください。
          </p>
        </section>

        {/* 掛け算 */}
        <section id="kakezan" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30-40代の価値＝実務×資格</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              PMPは「実務×資格の掛け算」が最も自然に成立する資格です。<strong>そもそも実務（36ヶ月以上）がないと受験すらできない</strong>ため、保有＝経験の証明という構造になっています。
            </p>
            <p>
              ミドル層の活かし方は、職務経歴書に「PMP」と書くだけでなく、<strong>担当したPJの規模・体制・成果に、PMPで学んだ知識（リスク管理・スコープ管理・ステークホルダー対応）をどう適用したかを紐づける</strong>ことです。これで面接の深掘りに強くなります。
            </p>
            <p>
              もう一つ、ミドルのエンジニアがPMPを取る意義として「キャリアの方向転換の旗印になる」点があります。プレイヤーとして手を動かす働き方から、チームやプロジェクトをまとめる側へ重心を移したいとき、PMPは「マネジメントへ本気で軸足を移す意思」を採用側に示すシグナルになります。技術力で勝負してきたエンジニアが40代でマネジメント職を狙う際、技術の理解とPMの体系知識を両立している点は強い差別化要因です。
            </p>
            <p>
              職種側の市場感は<Link href="/skill/pm/" className="text-petrol hover:underline">PM（プロジェクトマネージャー）転職ガイド</Link>、マネジメントへの進み方は<Link href="/knowledge/management/" className="text-petrol hover:underline">マネジメントへのキャリア</Link>、年収交渉は<Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉のコツ</Link>も参考になります。
            </p>
          </div>
        </section>

        {/* ステップ */}
        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">取得3ステップ・併取得資格</h2>
          <div className="space-y-3 mb-4">
            {[
              { n: "STEP 1", t: "受験資格の棚卸し", d: "学歴に応じたPM実務（大卒36ヶ月／非大卒60ヶ月）と35時間研修の要件を満たすか確認する。" },
              { n: "STEP 2", t: "35時間研修＋PMBOK学習", d: "公式要件の研修を受け、最新版PMBOKガイドの考え方（予測型・アジャイル・ハイブリッド）を押さえる。" },
              { n: "STEP 3", t: "受験・取得後の更新計画", d: "受験して合格後は、3年ごと60PDUの更新計画をセットで立てる。" },
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
            併取得におすすめなのは、IT全般の体系を固める<Link href="/cert/" className="text-petrol hover:underline">応用情報技術者（資格一覧参照）</Link>や、PJで扱う技術領域の理解を深める<Link href="/cert/aws/" className="text-petrol hover:underline">AWS認定</Link>です。技術×マネジメントの両輪があると、PMとしての説得力が増します。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            学習面で押さえておきたいのは、近年のPMBOKガイドが「予測型（ウォーターフォール）」だけでなく「アジャイル」「ハイブリッド」まで含めた幅広いアプローチを扱うようになった点です。試験対策はもちろん、実務でもアジャイル開発のプロジェクトに携わる機会が増えているため、両方の進め方を理解しておくと現場での応用が利きます。エンジニア出身のPMにとっては、技術の実装イメージを持ちながらマネジメント手法を学べることが強みになり、開発チームとの対話でも信頼を得やすくなります。資格学習を「試験のため」で終わらせず、日々のプロジェクト運営に還元する姿勢が、結果的に転職時の語れる実績にもつながります。
          </p>
        </section>

        {/* デメリット */}
        <section id="demerit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">デメリット・限界</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>① <strong>受験のハードルが高い。</strong>そもそもPM実務36ヶ月以上が前提のため、経験が浅い人はすぐには受験できません。</p>
            <p>② <strong>更新コストがかかる。</strong>3年ごとに60PDUと更新手続きが必要で、継続学習・費用の負担があります。</p>
            <p>③ <strong>資格だけでは案件は取れない。</strong>PMPはあくまで知識・経験の証明であり、実際のPJ成果やコミュニケーション力が伴わないと評価されません。</p>
            <p>④ <strong>受験料が比較的高め。</strong>非会員$655と費用がかかるため、会員になって受験するなど計画的な準備が必要です。</p>
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
          <h2 className="text-xl font-bold mb-3">PMP×PM経験を活かした転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            あなたのPM実績がどの年収帯で評価されるか、IT特化型エージェントで確認しましょう。
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
              { name: "情報処理安全確保支援士と転職", href: "/cert/security-specialist/" },
              { name: "AWS認定資格と転職", href: "/cert/aws/" },
              { name: "PM（プロジェクトマネージャー）転職ガイド", href: "/skill/pm/" },
              { name: "マネジメントへのキャリア", href: "/knowledge/management/" },
              { name: "PM→CTOへのキャリアパス", href: "/career/pm-to-cto/" },
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
