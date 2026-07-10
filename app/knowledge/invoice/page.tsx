import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "インボイス制度とフリーランスエンジニア【免税・2割特例】";
const DESCRIPTION =
  "インボイス制度がフリーランスエンジニアに与える影響を、免税事業者と課税事業者の選択、2割特例、経過措置、登録手続きまで国税庁の公式情報をもとに解説。会社員から独立する30代・40代が判断を誤らないための実務ガイドです。";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/invoice/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：エンジニアが押さえる要点" },
  { id: "basic", label: "インボイス制度とは（基本）" },
  { id: "impact", label: "フリーランスエンジニアへの影響" },
  { id: "choice", label: "免税事業者か課税事業者かの選択" },
  { id: "special", label: "2割特例と経過措置" },
  { id: "register", label: "登録の流れと実務" },
  { id: "faq", label: "よくある質問" },
];

const impacts = [
  {
    title: "取引先が課税事業者の場合",
    desc: "取引先（クライアント企業やエージェント）が課税事業者の場合、あなたがインボイス（適格請求書）を発行できないと、取引先は支払った消費税分の仕入税額控除を原則受けられなくなります。これが報酬や取引継続の交渉材料にされるケースがあります。",
  },
  {
    title: "報酬の実質的な目減りの懸念",
    desc: "登録しない場合に取引先から消費税相当分の値引きを求められたり、登録する場合に自分が消費税を納める負担が生じたりと、いずれの選択でも手取りに影響し得ます。どちらが有利かは取引相手と売上規模によって変わります。",
  },
  {
    title: "取引先が免税事業者・一般消費者の場合",
    desc: "取引先が免税事業者や一般消費者の場合、相手は仕入税額控除を行わないため、インボイス発行を求められないことが多く、影響は限定的です。自分の主要な取引先がどちらかをまず確認しましょう。",
  },
];

const faqs = [
  {
    q: "フリーランスエンジニアは必ずインボイス登録しなければいけませんか？",
    a: "登録は任意です。取引先が課税事業者でインボイスを求める場合は登録を検討する価値がありますが、取引先が免税事業者や一般消費者中心なら登録しない選択も合理的です。年間売上1,000万円以下なら登録しなければ消費税の納税義務がない免税事業者のままでいられます。自分の取引構造に合わせて判断し、迷う場合は税務署や税理士に確認してください。",
  },
  {
    q: "年間売上1,000万円以下なら消費税を納めなくてよいのですか？",
    a: "基準期間（原則2年前）の課税売上高が1,000万円以下であれば、消費税の納税義務が免除される免税事業者になります。ただし、インボイス発行のために自ら課税事業者を選択して登録した場合は、売上規模にかかわらず消費税の申告・納税が必要になります。",
  },
  {
    q: "2割特例とは何ですか？",
    a: "インボイス制度を機に免税事業者から課税事業者になった人が、納める消費税額を「売上にかかる消費税額の2割」に軽減できる特例です。国税庁によると、令和5年10月1日から令和8年（2026年）9月30日までの日の属する各課税期間に適用できます。仕入れの記録を細かく集計しなくても計算でき、事前の届出も不要で、申告時に選択できます。",
  },
  {
    q: "登録しないと取引が切られてしまいますか？",
    a: "必ずしもそうとは限りません。取引先の方針次第ですが、国は急な取引停止を避けるよう求めており、買い手側には経過措置（後述）もあります。一方で、課税事業者から値引きやインボイス発行を求められる可能性はあります。取引先と早めに方針を確認し、報酬条件とあわせて話し合うのが現実的です。",
  },
  {
    q: "登録はどこで行いますか？",
    a: "納税地を所轄する税務署に「適格請求書発行事業者の登録申請書」を提出します。e-Tax（電子申請）でも書面でも可能です。登録が完了すると「T」から始まる13桁の登録番号が通知され、その番号を請求書に記載することでインボイスを発行できるようになります。最新の手続きは国税庁の特設サイトで確認してください。",
  },
  {
    q: "免税事業者からの登録は経過措置でいつまで簡便にできますか？",
    a: "免税事業者が課税期間の途中から登録を受ける経過措置や、買い手側が免税事業者からの仕入れについて一定割合を控除できる経過措置が設けられています。買い手側の控除割合は、2023年10月から2026年9月までが80%、2026年10月から2029年9月までが50%とされています(国税庁)。制度は改正の可能性があるため、必ず最新の公式情報を確認してください。",
  },
  {
    q: "課税事業者になると事務負担はどれくらい増えますか？",
    a: "消費税の申告書作成、適格請求書の発行・保存、帳簿の記帳といった事務が増えます。2割特例を使えば納税額の計算は簡便になりますが、申告自体は必要です。会計ソフトの活用や税理士への依頼で負担を抑える人も多く、独立前に事務コストも含めて試算しておくと安心です。",
  },
];

export default function InvoicePage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/invoice/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "インボイス制度とフリーランス" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          インボイス制度とフリーランスエンジニア【免税・2割特例】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 独立前に押さえる消費税の基礎
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          会社員エンジニアからフリーランスへの転向を考えるとき、避けて通れないのがインボイス制度（適格請求書等保存方式）です。免税事業者のままでいるべきか、課税事業者として登録すべきか。本記事では、制度の基本、フリーランスエンジニアへの具体的な影響、2割特例や経過措置、登録の流れまでを、国税庁の公式情報に基づいて整理します。なお本記事は一般的な情報提供であり、個別の税務判断については税務署や税理士などの専門家にご確認ください。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "国税庁 インボイス制度特設サイト",
            "国税庁「2割特例（負担軽減措置）の概要」",
            "財務省 インボイス制度の負担軽減措置に関する資料",
          ]}
        />

        {/* 直答box (P6-C2) */}
        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】フリーランスエンジニアはインボイス登録すべき？</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: 登録は任意で、「自分の取引先が課税事業者かどうか」を起点に、免税事業者のままでいるか課税事業者として登録するかを判断します。</strong></p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・取引先が課税事業者でインボイスを求める場合、未登録が値引き交渉や取引見直しの材料にされることがある</li><li>・取引先が免税事業者・一般消費者中心なら影響は限定的で、登録しない選択も合理的</li><li>・登録して課税事業者になる場合も、2割特例（国税庁）を使えば納税負担と計算の手間を抑えられる</li><li>・最終的な判断は国税庁の最新情報や税務署・税理士への相談で確定させる</li></ul>
          </div>
        </section>

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：エンジニアが押さえる要点</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              フリーランスエンジニアにとっての要点は、<strong>「自分の取引先が課税事業者かどうか」を起点に、免税事業者のままでいるか、課税事業者として登録するかを判断する</strong>ことです。登録は任意ですが、取引先が課税事業者でインボイスを求める場合は、登録しないことが値引き交渉や取引見直しの材料にされることがあります。
            </p>
            <p className="text-slate-700 leading-relaxed">
              登録して課税事業者になる場合でも、<strong>2割特例</strong>（令和8年=2026年9月30日までの日の属する各課税期間が対象、国税庁）を使えば納税負担と計算の手間を抑えられます。制度は経過措置や改正が多いため、最終的な判断は必ず国税庁の最新情報や税務署・税理士への相談で確定させましょう。
            </p>
          </div>
        </section>

        {/* 基本 */}
        <section id="basic" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">インボイス制度とは（基本）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            インボイス制度は、2023年10月1日から始まった消費税の仕入税額控除の方式です。買い手（課税事業者）が消費税の仕入税額控除を受けるには、原則として売り手が発行する「適格請求書（インボイス）」の保存が必要になりました。
          </p>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">適格請求書発行事業者の登録番号が必要</h3>
              <p className="text-sm text-slate-600">インボイスを発行できるのは、税務署に登録した「適格請求書発行事業者」だけです。登録すると「T」から始まる13桁の登録番号が付与され、請求書に記載します。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">登録には課税事業者になることが前提</h3>
              <p className="text-sm text-slate-600">適格請求書発行事業者になると、売上規模にかかわらず消費税の申告・納税義務が生じます。つまり、免税事業者が登録する＝課税事業者を選択することを意味します。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">免税事業者は登録しない自由がある</h3>
              <p className="text-sm text-slate-600">登録は義務ではありません。基準期間の課税売上高が1,000万円以下の免税事業者は、登録せず消費税の納税義務がないままでいる選択も可能です。</p>
            </div>
          </div>
        </section>

        {/* 影響 */}
        <section id="impact" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フリーランスエンジニアへの影響</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            影響の大きさは、あなたの取引先がどんな事業者かによって変わります。まずは主要な取引先の区分を確認しましょう。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {impacts.map((r, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{r.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            業務委託やエージェント経由で働く形態については、
            <Link href="/employment/gyomu-itaku/" className="text-petrol hover:underline">業務委託の働き方</Link>
            や
            <Link href="/employment/freelance/" className="text-petrol hover:underline">フリーランスの働き方</Link>
            もあわせて確認してください。
          </p>
        </section>

        {/* 選択 */}
        <section id="choice" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">免税事業者か課税事業者かの選択</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            それぞれにメリット・デメリットがあります。取引先の区分と売上規模をふまえて判断しましょう。
          </p>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">免税事業者のままでいる場合</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                消費税の納税義務がなく、申告の事務負担も生じません。取引先が免税事業者や一般消費者中心ならデメリットは小さい一方、課税事業者の取引先からインボイス発行を求められたり、消費税相当分の値引き交渉をされたりする可能性があります。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">課税事業者として登録する場合</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                インボイスを発行でき、課税事業者の取引先との関係を維持しやすくなります。その代わり消費税の申告・納税義務が生じます。ただし2割特例（後述）を使えば、当面は納税負担と計算の手間を大きく抑えられます。
              </p>
            </div>
          </div>
        </section>

        {/* 2割特例 */}
        <section id="special" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">2割特例と経過措置</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">2割特例（負担軽減措置）</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                インボイス制度を機に免税事業者から課税事業者になった人は、納める消費税額を「売上にかかる消費税額の2割」とすることができます。国税庁によると、対象は令和5年（2023年）10月1日から令和8年（2026年）9月30日までの日の属する各課税期間です。事前の届出は不要で、確定申告のときに選択できます。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">買い手側の経過措置（仕入税額控除）</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                買い手（課税事業者）が免税事業者からの仕入れについて一定割合を控除できる経過措置もあります。国税庁の資料では、控除割合は2023年10月から2026年9月までが80%、2026年10月から2029年9月までが50%とされています。これにより、免税事業者と取引する際の買い手の負担が段階的に調整されます。
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed mt-4">
            ※ 数値・期間は調査時点（2026年6月）の国税庁公開情報に基づきます。制度は改正されることがあるため、適用にあたっては必ず国税庁の最新情報および税務署・税理士にご確認ください。
          </p>
        </section>

        {/* 登録 */}
        <section id="register" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">登録の流れと実務</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "取引先の区分を確認する", desc: "主要な取引先が課税事業者か免税事業者・一般消費者かを確認します。インボイスを求められるかどうかが判断の出発点です。" },
              { num: "2", title: "登録するか方針を決める", desc: "売上規模、取引先の方針、2割特例の効果を踏まえ、免税のままか課税事業者になるかを決めます。迷う場合は税務署や税理士に相談します。" },
              { num: "3", title: "登録申請書を提出する", desc: "登録する場合、所轄の税務署に「適格請求書発行事業者の登録申請書」をe-Taxまたは書面で提出します。" },
              { num: "4", title: "登録番号を請求書に記載する", desc: "通知された13桁の登録番号と、適用税率・税率ごとの消費税額などを請求書に記載してインボイスを発行します。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
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
            独立にあたっては
            <Link href="/knowledge/kaigyo/" className="text-petrol hover:underline">開業届の出し方</Link>
            や
            <Link href="/knowledge/side-job-tax/" className="text-petrol hover:underline">副業の確定申告</Link>
            もあわせて確認しておくとスムーズです。
          </p>
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
          <h2 className="text-xl font-bold mb-3">フリーランスエンジニアの案件を探す</h2>
          <p className="text-blue-100 text-sm mb-4">
            フリーランス特化のエージェントなら、報酬水準や契約条件の相談もしながら案件を選べます。
          </p>
          <Link
            href="/review/levtech-freelance/"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            フリーランス向けサービスを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "フリーランスvs正社員の比較", href: "/knowledge/freelance-vs-fulltime/" },
              { name: "開業届の出し方", href: "/knowledge/kaigyo/" },
              { name: "副業の確定申告", href: "/knowledge/side-job-tax/" },
              { name: "フリーランスの働き方", href: "/employment/freelance/" },
              { name: "業務委託の働き方", href: "/employment/gyomu-itaku/" },
              { name: "転職ナレッジ一覧", href: "/knowledge/" },
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
