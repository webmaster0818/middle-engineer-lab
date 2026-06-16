import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "失業保険（雇用保険）の受給と転職【給付制限・受給期間】";
const DESCRIPTION =
  "失業保険（雇用保険の基本手当）の受給を、自己都合と会社都合の給付制限の違い、待期7日間、受給期間1年、転職活動との関係まで厚生労働省・ハローワークの情報に基づいて解説。30代・40代が損なく受給するための実務ガイドです。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：受給の基本方針" },
  { id: "basic", label: "失業保険（基本手当）とは" },
  { id: "reason", label: "自己都合と会社都合の違い" },
  { id: "period", label: "受給期間と給付制限" },
  { id: "flow", label: "受給手続きの流れ" },
  { id: "notes", label: "転職活動との関係・注意点" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "自己都合退職と会社都合退職で何が違いますか？",
    a: "主な違いは給付制限の有無と、所定給付日数です。会社都合（特定受給資格者など）は7日間の待期後すぐに受給が始まることが多く、所定給付日数も長くなる傾向があります。自己都合の場合は待期に加えて給付制限期間があります。詳しくはハローワークで自分の離職区分を確認してください。",
  },
  {
    q: "自己都合退職だと給付制限はどのくらいですか？",
    a: "2025年4月の雇用保険法改正により、自己都合退職の給付制限期間は原則1か月に短縮されました（それ以前は原則2か月）。ただし、5年以内に3回以上自己都合で離職している場合は3か月となります。いずれも7日間の待期期間を経過した後の取り扱いです。最新の運用はハローワークで確認してください。",
  },
  {
    q: "待期期間とは何ですか？",
    a: "離職理由を問わず、受給資格決定日から通算7日間は基本手当が支給されない「待期期間」があります。この7日間は、失業の状態にあることを確認するための期間です。会社都合の場合はこの待期7日間の経過後から、自己都合の場合は待期に加えて給付制限期間の経過後から支給が始まります。",
  },
  {
    q: "受給期間（受け取れる期限）はどれくらいですか？",
    a: "基本手当を受けられる「受給期間」は、原則として離職日の翌日から1年間です。この1年を過ぎると、所定給付日数が残っていても受け取れなくなることがあります。病気・出産・育児などで働けない場合は、受給期間の延長を申請できる制度があります。",
  },
  {
    q: "受給するための条件は何ですか？",
    a: "基本手当を受けるには、原則として離職日以前の一定期間に被保険者期間が通算して所定の月数以上あること、そして働く意思と能力があり積極的に求職活動をしているのに就職できない『失業の状態』にあることが必要です。具体的な被保険者期間の要件は離職理由により異なるため、ハローワークで確認してください。",
  },
  {
    q: "転職活動中でも失業保険はもらえますか？",
    a: "受給の前提は『就職しようとする積極的な意思があり、いつでも就職できる能力があるのに職業に就けない失業の状態』であることです。求職活動として転職活動を行うことはむしろ受給要件に沿った行動です。ただし、すでに次の就職先が内定・確定している、開業して自営業を始めた、といった場合は失業状態とみなされず受給対象外になります。",
  },
  {
    q: "転職先が決まっている場合はどうなりますか？",
    a: "受給資格決定前にすでに就職が決まっている場合は、失業状態に当たらないため基本手当は受けられません。一方、受給期間中に早期に再就職できた場合は、要件を満たせば『再就職手当』を受けられることがあります。早く決まると損というわけではないので、ハローワークで該当制度を確認しましょう。",
  },
  {
    q: "教育訓練を受けると給付制限が解除されると聞きました。",
    a: "2025年4月以降、自己都合で離職した人が離職期間中や離職前1年以内に、自身の再就職に資する教育訓練等を受けた場合に、給付制限が解除される取り扱いが設けられています（厚生労働省）。対象や要件には条件があるため、利用を検討する場合はハローワークに確認してください。",
  },
];

export default function UnemploymentInsurancePage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/unemployment-insurance/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "失業保険の受給と転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          失業保険（雇用保険）の受給と転職【給付制限・受給期間】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 損なく受給するための基礎
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          退職して次の仕事を探す間、生活を支えてくれるのが失業保険（雇用保険の基本手当）です。ただし、自己都合か会社都合かで受給開始のタイミングが変わり、受給には期限もあります。本記事では、給付制限の違い、待期7日間、受給期間、手続きの流れを、厚生労働省・ハローワークの情報に基づいて整理します。なお、個別の支給可否や金額はハローワークの判断によります。本記事は一般的な情報提供である点をご了承ください。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省 雇用保険制度（基本手当）",
            "ハローワーク インターネットサービス",
            "厚生労働省「雇用保険法等の一部を改正する法律」関連資料（2025年4月施行）",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：受給の基本方針</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              失業保険（基本手当）は、<strong>離職理由を問わず7日間の待期</strong>があり、<strong>自己都合の場合は2025年4月から原則1か月の給付制限</strong>が加わります（5年以内3回以上の自己都合離職は3か月、厚生労働省）。会社都合は待期後すぐに受給が始まることが多く、給付日数も手厚い傾向です。
            </p>
            <p className="text-slate-700 leading-relaxed">
              受給できる期限は<strong>原則として離職日の翌日から1年間</strong>です。離職票が届いたら早めにハローワークで手続きしましょう。なお、すでに転職先が確定している場合や開業した場合は『失業の状態』に当たらず受給できません。最終的な可否はハローワークの判断によります。
            </p>
          </div>
        </section>

        {/* 基本 */}
        <section id="basic" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">失業保険（基本手当）とは</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            一般に「失業保険」と呼ばれるのは、雇用保険の「基本手当」です。働く意思と能力があるのに就職できない『失業の状態』にある人が、再就職までの生活を支えるために受け取れる給付です。
          </p>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">『失業の状態』であることが前提</h3>
              <p className="text-sm text-slate-600">就職しようとする積極的な意思と能力があり、求職活動をしているのに就職できない状態が条件です。すでに就職先が決まっている、自営を始めた場合は対象外です。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">被保険者期間の要件がある</h3>
              <p className="text-sm text-slate-600">離職日以前の一定期間に、被保険者期間が通算して所定の月数以上あることが必要です。要件は離職理由により異なります。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">手続きはハローワークで行う</h3>
              <p className="text-sm text-slate-600">受給の手続きは、住所地を管轄するハローワークで行います。離職票や本人確認書類などが必要です。</p>
            </div>
          </div>
        </section>

        {/* 自己都合と会社都合 */}
        <section id="reason" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">自己都合と会社都合の違い</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            離職理由によって、受給開始のタイミングや所定給付日数が変わります。
          </p>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">自己都合退職（一般の離職）</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                自分の意思で退職した場合です。7日間の待期に加えて給付制限期間があり、2025年4月の改正で原則1か月に短縮されました（従来は原則2か月）。ただし5年以内に3回以上自己都合で離職している場合は3か月です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">会社都合退職（特定受給資格者など）</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                倒産・解雇など会社側の事情による離職や、やむを得ない理由による離職は、給付制限なく待期7日間の経過後から受給が始まることが多く、所定給付日数も長くなる傾向があります。離職区分はハローワークが判断します。
              </p>
            </div>
          </div>
        </section>

        {/* 受給期間と給付制限 */}
        <section id="period" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">受給期間と給付制限</h2>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">待期期間：通算7日間</h3>
              <p className="text-sm text-slate-600">離職理由を問わず、受給資格決定日から通算7日間は支給されません。失業状態を確認するための期間です。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">給付制限：自己都合は原則1か月（2025年4月〜）</h3>
              <p className="text-sm text-slate-600">自己都合離職は待期後にさらに給付制限期間があり、原則1か月に短縮されました。5年以内3回以上の自己都合離職は3か月です。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">受給期間：原則 離職日の翌日から1年間</h3>
              <p className="text-sm text-slate-600">この期間を過ぎると、所定給付日数が残っていても受け取れなくなることがあります。病気・出産・育児等で働けない場合は延長申請の制度があります。</p>
            </div>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed mt-4">
            ※ 期間・要件は調査時点（2026年6月）の公開情報に基づきます。所定給付日数や金額は年齢・被保険者期間・賃金により異なり、制度は改正されることがあります。個別の取り扱いは必ずハローワークでご確認ください。
          </p>
        </section>

        {/* 流れ */}
        <section id="flow" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">受給手続きの流れ</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "離職票を受け取る", desc: "退職後、勤務先から離職票が交付されます。届かない場合は前職に確認します。" },
              { num: "2", title: "ハローワークで求職申込み・受給資格決定", desc: "住所地を管轄するハローワークで求職の申込みを行い、離職票などを提出して受給資格の決定を受けます。" },
              { num: "3", title: "雇用保険説明会に参加する", desc: "受給の仕組みや今後の流れについての説明会に参加します。受給資格者証などが交付されます。" },
              { num: "4", title: "失業認定を受けて受給する", desc: "原則4週間ごとの失業認定日にハローワークへ行き、求職活動の状況を申告します。認定されると基本手当が支給されます。" },
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
            ハローワークの使い方や転職活動との併用については、
            <Link href="/knowledge/hello-work/" className="text-petrol hover:underline">ハローワークの活用ガイド</Link>
            もあわせて確認してください。
          </p>
        </section>

        {/* 注意点 */}
        <section id="notes" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職活動との関係・注意点</h2>
          <div className="space-y-4">
            <div className="bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 mb-2">転職活動は求職活動として要件に沿う</h3>
              <p className="text-sm text-amber-700 leading-relaxed">エージェント経由の応募や面接などの転職活動は、受給に必要な求職活動として認められる場合があります。何が求職活動実績になるかはハローワークで確認しましょう。</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 mb-2">早期再就職なら再就職手当の可能性</h3>
              <p className="text-sm text-amber-700 leading-relaxed">受給期間中に早く再就職できた場合、要件を満たせば再就職手当を受けられることがあります。早く決まっても損とは限りません。</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 mb-2">開業すると受給対象から外れる</h3>
              <p className="text-sm text-amber-700 leading-relaxed">フリーランスとして開業すると原則『失業の状態』に当たらなくなります。受給を検討している場合は、開業のタイミングをハローワークに相談してください。</p>
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
          <h2 className="text-xl font-bold mb-3">再就職はIT特化エージェントで効率化</h2>
          <p className="text-blue-100 text-sm mb-4">
            求職活動を進めながら、エンジニア向けの求人を効率よく探しましょう。
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
              { name: "ハローワークの活用ガイド", href: "/knowledge/hello-work/" },
              { name: "健康保険の任意継続vs国保", href: "/knowledge/health-insurance/" },
              { name: "住民税と転職", href: "/knowledge/residence-tax/" },
              { name: "iDeCo・企業型DCと転職", href: "/knowledge/ideco/" },
              { name: "退職の進め方ガイド", href: "/knowledge/resignation/" },
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
