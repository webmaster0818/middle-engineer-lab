import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "開業届の出し方【フリーランスエンジニア転向】";
const DESCRIPTION =
  "会社員エンジニアからフリーランスへ転向する際の開業届の出し方を、提出期限・提出先・青色申告承認申請との同時提出・必要書類まで国税庁の公式情報に基づいて解説。30代・40代が独立初期につまずかないための実務ガイドです。";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/kaigyo/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：開業届の基本" },
  { id: "what", label: "開業届とは" },
  { id: "deadline", label: "提出期限と提出先" },
  { id: "aoiro", label: "青色申告承認申請は同時提出が得策" },
  { id: "howto", label: "提出の流れ" },
  { id: "notes", label: "提出前に確認したい注意点" },
  { id: "faq", label: "よくある質問" },
];

const aoiroMerits = [
  {
    title: "青色申告特別控除",
    desc: "正規の簿記（複式簿記）で記帳し、e-Taxでの申告などの要件を満たすと、最大65万円の青色申告特別控除を受けられます。要件を満たさない場合は控除額が下がります。",
  },
  {
    title: "赤字の繰越し",
    desc: "事業が赤字になった年の損失を、翌年以降の一定期間にわたり繰り越して所得と相殺できます。独立初期で収支が不安定な時期に役立ちます。",
  },
  {
    title: "家族への給与の経費算入",
    desc: "一定の届出のもと、生計を同じくする家族に支払う給与を必要経費にできる青色事業専従者給与の制度を利用できます。",
  },
];

const faqs = [
  {
    q: "開業届はいつまでに出せばいいですか？",
    a: "国税庁の案内では、開業届（個人事業の開業・廃業等届出書）は事業の開始等の事実があった日から1か月以内に、納税地を所轄する税務署へ提出することとされています。期限を過ぎても受理されますが、青色申告の承認には別途の期限があるため、独立したら早めに提出するのが安心です。",
  },
  {
    q: "開業届を出さないとどうなりますか？",
    a: "罰則が直ちに科されるわけではありませんが、青色申告の承認を受けられず青色申告特別控除などのメリットを使えない、屋号付きの事業用口座を作りにくい、といった不利が生じます。事業として継続的に収入を得るなら、提出しておくのが基本です。",
  },
  {
    q: "青色申告承認申請書も一緒に出すべきですか？",
    a: "青色申告のメリット（最大65万円の特別控除や赤字の繰越しなど）を受けたい場合は、開業届とあわせて「所得税の青色申告承認申請書」を提出するのが効率的です。国税庁によると、原則としてその年の3月15日まで、その年の1月16日以後に開業した場合は開業日から2か月以内に提出する必要があります。期限を過ぎると、その年は白色申告になります。",
  },
  {
    q: "会社員を続けながら開業届を出してもいいですか？",
    a: "副業として継続的・反復的に事業所得を得ている場合は、会社員のまま開業届を出すことも可能です。ただし、勤務先の副業規定や、雑所得・事業所得の区分など確認すべき点があります。判断に迷う場合は税務署や税理士に相談してください。",
  },
  {
    q: "提出にお金はかかりますか？",
    a: "開業届・青色申告承認申請書の提出自体に手数料はかかりません。e-Tax（電子申請）、郵送、税務署窓口のいずれでも提出でき、いずれも無料です。",
  },
  {
    q: "屋号は決めておく必要がありますか？",
    a: "屋号は任意です。決まっていなければ空欄でも提出できます。後から屋号を付けたり変更したりすることも可能です。屋号付きの事業用口座を作りたい場合は、開業届の控えが必要になることがあります。",
  },
  {
    q: "開業届の控えは保管しておくべきですか？",
    a: "はい。事業用の銀行口座開設、小規模企業共済の申込み、各種補助金の申請などで開業届の控え（収受印のあるもの、またはe-Taxの受信通知）の提示を求められることがあります。提出後は必ず控えを保管しておきましょう。",
  },
];

export default function KaigyoPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/kaigyo/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "開業届の出し方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          開業届の出し方【フリーランスエンジニア転向】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 独立初期の手続きを最短で
        </p>

        {/* 直答box (P6-C2) */}
        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】開業届はどう出せばいい？</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: 開業届（個人事業の開業・廃業等届出書）は事業開始から1か月以内に、納税地を所轄する税務署へ提出します。提出は無料で、「所得税の青色申告承認申請書」を同時に出すのが得策です（国税庁）。</strong></p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・提出はe-Tax・郵送・税務署窓口のいずれでも可能で、手数料はかからない</li><li>・青色申告なら最大65万円の特別控除や赤字の繰越しが使える</li><li>・青色申告承認申請の期限は原則その年の3月15日、1月16日以後の開業はその日から2か月以内</li></ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          会社員エンジニアからフリーランスに転向したら、最初に行いたい手続きが開業届の提出です。難しい書類ではありませんが、青色申告承認申請書を同時に出すかどうかで、初年度の税金が大きく変わることがあります。本記事では、提出期限・提出先・青色申告との関係・提出の流れを、国税庁の公式情報に基づいて整理します。なお本記事は一般的な情報であり、個別の判断は税務署や税理士にご確認ください。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "国税庁「個人事業の開業届出・廃業届出等手続」",
            "国税庁「所得税の青色申告承認申請手続」",
          ]}
        />

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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：開業届の基本</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              開業届（個人事業の開業・廃業等届出書）は、<strong>事業開始から1か月以内に、納税地を所轄する税務署へ提出</strong>します（国税庁）。提出自体は無料で、e-Tax・郵送・窓口のいずれでも可能です。
            </p>
            <p className="text-slate-700 leading-relaxed">
              ポイントは、<strong>「所得税の青色申告承認申請書」を同時に提出すること</strong>。青色申告なら最大65万円の特別控除や赤字の繰越しが使えます。承認申請には期限（原則その年の3月15日、1月16日以後の開業はその日から2か月以内）があるため、独立したらまとめて手続きするのが得策です。
            </p>
          </div>
        </section>

        {/* 開業届とは */}
        <section id="what" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">開業届とは</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            開業届の正式名称は「個人事業の開業・廃業等届出書」です。個人が新たに事業を始めたことを税務署に知らせるための届出で、フリーランスエンジニアとして継続的に収入を得る場合に提出します。
          </p>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">提出は事業開始の届け出</h3>
              <p className="text-sm text-slate-600">開業届は「事業を始めました」という届け出であり、提出によって税金が直ちに発生するものではありません。所得税は確定申告で計算します。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">青色申告の前提になる</h3>
              <p className="text-sm text-slate-600">青色申告の承認を受けるには、開業届の提出が前提になります。節税メリットの大きい青色申告を使うためにも、開業届は早めに出しておきましょう。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">事業用口座や共済の申込みに使える</h3>
              <p className="text-sm text-slate-600">屋号付きの事業用口座開設、小規模企業共済の申込みなどで、開業届の控えの提示を求められることがあります。</p>
            </div>
          </div>
        </section>

        {/* 期限 */}
        <section id="deadline" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">提出期限と提出先</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">提出期限：事業開始から1か月以内</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                国税庁の案内では、開業届は事業の開始等の事実があった日から1か月以内に提出することとされています。期限を過ぎても受理はされますが、青色申告の承認期限と関係するため、独立後は速やかに提出しましょう。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">提出先：納税地を所轄する税務署</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                原則として、自宅（住所地）を納税地として、その地域を所轄する税務署に提出します。提出方法はe-Tax（電子申請）、郵送、税務署窓口のいずれも可能です。所轄税務署は国税庁サイトで検索できます。
              </p>
            </div>
          </div>
        </section>

        {/* 青色申告 */}
        <section id="aoiro" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">青色申告承認申請は同時提出が得策</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            開業届とあわせて「所得税の青色申告承認申請書」を出すと、次のようなメリットがあります。承認申請には期限があるため、開業届と同時に提出するのが効率的です。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {aoiroMerits.map((r, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{r.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-5 mt-4">
            <p className="text-sm text-amber-800 leading-relaxed">
              <strong>承認申請の期限：</strong>国税庁によると、青色申告の承認を受けようとする年の3月15日まで、その年の1月16日以後に開業した場合は開業日から2か月以内に提出する必要があります。期限を過ぎると、その年分は白色申告になります。
            </p>
          </div>
        </section>

        {/* 流れ */}
        <section id="howto" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">提出の流れ</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "書類を入手する", desc: "開業届と青色申告承認申請書は、国税庁サイトからダウンロードするか、税務署窓口で入手できます。会計ソフトの作成機能を使う方法もあります。" },
              { num: "2", title: "必要事項を記入する", desc: "氏名・住所・納税地・事業の概要・開業日などを記入します。屋号は任意で、空欄でも提出できます。" },
              { num: "3", title: "提出する", desc: "e-Tax、郵送、税務署窓口のいずれかで提出します。マイナンバーカードがあればe-Taxが手軽です。" },
              { num: "4", title: "控えを保管する", desc: "収受印のある控え、またはe-Taxの受信通知を保管します。口座開設や共済申込みで必要になります。" },
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
        </section>

        {/* 注意点 */}
        <section id="notes" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">提出前に確認したい注意点</h2>
          <div className="space-y-4">
            <div className="bg-red-50 rounded-lg p-5">
              <h3 className="font-bold text-red-800 mb-2">社会保険・年金の切り替えを忘れない</h3>
              <p className="text-sm text-red-700 leading-relaxed">退職して独立する場合、健康保険と年金の切り替え手続きが別途必要です。健康保険は任意継続か国民健康保険かの選択があります。詳しくは関連記事を確認してください。</p>
            </div>
            <div className="bg-red-50 rounded-lg p-5">
              <h3 className="font-bold text-red-800 mb-2">インボイス登録は別の判断</h3>
              <p className="text-sm text-red-700 leading-relaxed">開業届とインボイス（適格請求書発行事業者）の登録は別の手続きです。取引先や売上規模をふまえて、登録するかどうかを検討しましょう。</p>
            </div>
            <div className="bg-red-50 rounded-lg p-5">
              <h3 className="font-bold text-red-800 mb-2">失業保険との関係に注意</h3>
              <p className="text-sm text-red-700 leading-relaxed">開業すると原則として失業保険（基本手当）の受給対象から外れます。受給を検討している場合は、開業のタイミングをハローワークに確認しましょう。</p>
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
          <h2 className="text-xl font-bold mb-3">独立後の案件探しを始めよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            フリーランス特化のエージェントなら、案件紹介から契約条件の相談までサポートを受けられます。
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
              { name: "インボイス制度とフリーランス", href: "/knowledge/invoice/" },
              { name: "副業の確定申告", href: "/knowledge/side-job-tax/" },
              { name: "健康保険の任意継続vs国保", href: "/knowledge/health-insurance/" },
              { name: "フリーランスの働き方", href: "/employment/freelance/" },
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
