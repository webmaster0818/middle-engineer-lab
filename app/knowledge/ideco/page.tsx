import type { Metadata } from "next";
import Link from "next/link";
import TechgoCta from "@/components/TechgoCta";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "iDeCo・企業型DCと転職【資産の移換手続き】";
const DESCRIPTION =
  "転職時のiDeCo・企業型DC（確定拠出年金）の移換手続きを、6か月放置による自動移換のリスク、企業型DCからiDeCoへの移換、転職先に制度がある場合の対応まで解説。30代・40代が老後資産を守るための実務ガイドです。";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/ideco/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：転職時の確定拠出年金" },
  { id: "basic", label: "iDeCoと企業型DCの基本" },
  { id: "risk", label: "6か月放置で起きる自動移換のリスク" },
  { id: "patterns", label: "転職パターン別の移換手続き" },
  { id: "howto", label: "移換手続きの流れ" },
  { id: "notes", label: "注意したいポイント" },
  { id: "faq", label: "よくある質問" },
];

const patterns = [
  {
    title: "転職先に企業型DCがある場合",
    desc: "前職の企業型DCの資産を、転職先の企業型DCへ移換するのが基本です。転職先の担当部署（人事・総務）に申し出て、所定の手続きを行います。",
  },
  {
    title: "転職先に企業型DCがない場合",
    desc: "前職の企業型DCの資産をiDeCo（個人型確定拠出年金）へ移換します。自分で金融機関（運営管理機関）を選び、移換手続きを行う必要があります。",
  },
  {
    title: "フリーランス・自営業になる場合",
    desc: "企業型DCの資産はiDeCoへ移換します。国民年金の第1号被保険者として、拠出限度額の範囲でiDeCoの掛金を続けることも検討できます。",
  },
];

const faqs = [
  {
    q: "転職したら確定拠出年金の手続きは必ず必要ですか？",
    a: "企業型DC（確定拠出年金）に加入していた人が転職・退職する場合、資産を移す手続きが必要です。手続きをしないまま放置すると、加入者資格の喪失日の属する月の翌月から6か月以内に移換等を行わなければ、資産が国民年金基金連合会へ自動移換されてしまいます。退職したら早めに着手しましょう。",
  },
  {
    q: "6か月放置するとどうなりますか？",
    a: "企業型DCの加入者資格喪失日の翌月から6か月以内に移換手続きをしないと、資産が国民年金基金連合会（特定運営管理機関）へ自動移換されます。自動移換されると、資産が運用されず増えない、手数料が差し引かれる、その期間が加入者等期間に算入されず受給開始が遅れる可能性があるなどの不利があります。心当たりがある場合は早急に確認してください。",
  },
  {
    q: "企業型DCの資産はiDeCoに移せますか？",
    a: "はい。転職先に企業型DCがない場合などは、前職の企業型DCの資産をiDeCo（個人型確定拠出年金）へ移換できます。自分で運営管理機関（金融機関）を選び、移換の申込みを行います。手続きには一般に1〜2か月程度かかることがあるため、6か月の期限に余裕をもって進めましょう。",
  },
  {
    q: "移換すると現金化されてしまいますか？",
    a: "確定拠出年金の移換では、原則として保有している運用商品はいったん売却され、現金（移換金）の形で移換先へ移ります。移換先で改めて運用商品を選び直す必要があります。相場のタイミングが気になる場合もありますが、期限内の手続きを優先するのが基本です。",
  },
  {
    q: "iDeCoに加入したまま転職した場合はどうなりますか？",
    a: "もともとiDeCoに加入していた場合、転職後も継続できますが、被保険者区分（会社員・自営業など）が変わると、登録情報の変更手続きや掛金上限の見直しが必要になることがあります。転職先で企業型DCに加入する場合は、iDeCoとの併用可否や上限も確認しましょう。手続きの詳細は運営管理機関に確認してください。",
  },
  {
    q: "移換手続きはどこで行いますか？",
    a: "企業型DCからiDeCoへ移す場合は、自分が選んだiDeCoの運営管理機関（証券会社や銀行など）に申し込みます。転職先の企業型DCへ移す場合は、転職先の人事・総務など担当部署を通じて手続きします。前職の記録関連運営管理機関から届く案内も確認しましょう。",
  },
  {
    q: "移換に手数料はかかりますか？",
    a: "移換時や運用期間中に、運営管理機関や事務委託先金融機関に支払う所定の手数料が生じることがあります。とくに自動移換された場合は手数料負担が大きくなりやすいため、正規の手続きで早めに移換するほうが結果的に有利になりやすいです。具体的な金額は各機関にご確認ください。",
  },
];

export default function IdecoPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/ideco/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "iDeCo・企業型DCと転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          iDeCo・企業型DCと転職【資産の移換手続き】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 放置厳禁の老後資産を守る
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          転職でうっかり後回しにしがちなのが、確定拠出年金（iDeCo・企業型DC）の移換手続きです。とくに企業型DCは、退職後に手続きせず放置すると資産が自動移換され、運用が止まったうえに手数料を取られる不利が生じます。本記事では、転職パターン別の移換手続きと、6か月という期限の意味を、日本年金機構・国民年金基金連合会などの公的情報をもとに整理します。なお本記事は一般的な情報であり、個別の手続きは各運営管理機関にご確認ください。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "国民年金基金連合会（iDeCo公式）",
            "厚生労働省 確定拠出年金制度の概要",
            "各運営管理機関の確定拠出年金 移換手続き案内",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：転職時の確定拠出年金</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              企業型DCに加入していた人が転職・退職したら、<strong>資格喪失日の属する月の翌月から6か月以内に移換手続きを行う</strong>のが鉄則です。期限を過ぎると資産が国民年金基金連合会へ自動移換され、運用が止まり手数料も差し引かれます。
            </p>
            <p className="text-slate-700 leading-relaxed">
              手続きは転職先の制度によって異なります。<strong>転職先に企業型DCがあればそこへ、なければiDeCoへ移換</strong>します。フリーランスになる場合もiDeCoへ移すのが基本です。退職後の手続きの中でも優先度が高いため、後回しにせず早めに着手しましょう。
            </p>
          </div>
        </section>

        {/* 基本 */}
        <section id="basic" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">iDeCoと企業型DCの基本</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            どちらも「確定拠出年金（DC）」という、自分で運用して老後資産を作る私的年金制度です。掛金の出し手が異なります。
          </p>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">企業型DC（企業型確定拠出年金）</h3>
              <p className="text-sm text-slate-600">勤務先が掛金を拠出する制度です。退職するとその企業の加入者資格を失うため、資産を移す手続きが必要になります。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">iDeCo（個人型確定拠出年金）</h3>
              <p className="text-sm text-slate-600">自分で掛金を拠出する制度です。自分で金融機関（運営管理機関）を選んで加入し、転職してもポータブルに持ち運べます。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">どちらも持ち運び（ポータビリティ）可能</h3>
              <p className="text-sm text-slate-600">確定拠出年金は、転職・退職時に資産を別の制度へ移換できる「ポータビリティ」が制度の特徴です。手続きをすれば資産を引き継げます。</p>
            </div>
          </div>
        </section>

        {/* リスク */}
        <section id="risk" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">6か月放置で起きる自動移換のリスク</h2>
          <div className="bg-red-50 border-l-4 border-red-400 rounded-r-lg p-6 mb-4">
            <p className="text-slate-700 leading-relaxed">
              企業型DCの加入者資格を失った後、<strong>資格喪失日の属する月の翌月から6か月以内に移換等の手続きをしないと、資産が国民年金基金連合会（特定運営管理機関）へ自動移換</strong>されます。これは退職時に見落とされやすい、最も注意すべきポイントです。
            </p>
          </div>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">資産が運用されず増えない</h3>
              <p className="text-sm text-slate-600">自動移換された資産は運用商品で運用されず、現金のまま管理されます。長期間放置すると、本来得られたはずの運用機会を失います。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">手数料が差し引かれる</h3>
              <p className="text-sm text-slate-600">自動移換の際の手数料や、管理に伴う手数料が資産から差し引かれます。運用益がない中で手数料だけが減っていくため、資産が目減りします。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">受給開始が遅れる可能性</h3>
              <p className="text-sm text-slate-600">自動移換されている期間は加入者等期間に算入されないため、老齢給付金の受給開始時期に影響することがあります。</p>
            </div>
          </div>
        </section>

        {/* パターン */}
        <section id="patterns" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職パターン別の移換手続き</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            移換先は、転職後の状況によって変わります。自分のケースを確認しましょう。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {patterns.map((r, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{r.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            フリーランスへ転向する場合は、
            <Link href="/knowledge/freelance-vs-fulltime/" className="text-petrol hover:underline">フリーランスvs正社員の比較</Link>
            もあわせて検討してください。
          </p>
        </section>

        {/* 流れ */}
        <section id="howto" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">移換手続きの流れ</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "退職後すぐに移換先を決める", desc: "転職先の企業型DCへ移すのか、iDeCoへ移すのかを早めに決めます。iDeCoの場合は運営管理機関（金融機関）を選びます。" },
              { num: "2", title: "iDeCoの場合は運営管理機関に申し込む", desc: "選んだ金融機関に資料請求し、加入・移換の申込書を提出します。手数料や運用商品のラインアップも比較しましょう。" },
              { num: "3", title: "必要書類を提出する", desc: "前職の企業型DCの情報を記載した書類などを提出します。記録関連運営管理機関から届く案内も確認します。" },
              { num: "4", title: "移換完了後に運用商品を選ぶ", desc: "移換金は現金で移るため、移換先で改めて運用商品を選び直します。完了まで1〜2か月程度かかることがあります。" },
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">注意したいポイント</h2>
          <div className="space-y-4">
            <div className="bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 mb-2">手続きには時間がかかる</h3>
              <p className="text-sm text-amber-700 leading-relaxed">移換手続きは申込みから完了まで1〜2か月程度かかることがあります。6か月の期限ぎりぎりではなく、退職後すぐに動き出すのが安全です。</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 mb-2">掛金上限・併用可否を確認する</h3>
              <p className="text-sm text-amber-700 leading-relaxed">転職先で企業型DCに加入する場合、iDeCoとの併用可否や掛金の上限が変わることがあります。被保険者区分が変わると登録情報の変更も必要です。</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 mb-2">既に自動移換されている場合も移換できる</h3>
              <p className="text-sm text-amber-700 leading-relaxed">すでに自動移換されてしまった資産も、iDeCoや企業型DCへ移換する手続きは可能です。放置するほど不利になるため、心当たりがあれば早めに確認しましょう。</p>
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
          <h2 className="text-xl font-bold mb-3">転職の相談はIT特化エージェントへ</h2>
          <p className="text-blue-100 text-sm mb-4">
            福利厚生や確定拠出年金制度の有無も含め、転職先の条件を整理しながら進められます。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
      <TechgoCta
        heading="DC・iDeCoの移換とあわせて「年収の見直し」も"
        note="運用資産を守る次の一手は年収アップ。テックゴーは年収アップ平均138万円（2025年6〜7月内定者平均・公式公表）のIT特化エージェントです。"
        buttonText="無料キャリア面談を予約する（公式）"
      />

          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <p className="text-sm mb-3"><Link href="/knowledge/retirement-allowance/" className="text-petrol-deep font-medium hover:underline">▶ 転職すると退職金・企業型DCはどうなる？（移換・脱退一時金の手続き）</Link></p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "フリーランスvs正社員の比較", href: "/knowledge/freelance-vs-fulltime/" },
              { name: "健康保険の任意継続vs国保", href: "/knowledge/health-insurance/" },
              { name: "失業保険の受給と転職", href: "/knowledge/unemployment-insurance/" },
              { name: "住民税と転職", href: "/knowledge/residence-tax/" },
              { name: "年収交渉ガイド", href: "/knowledge/salary-negotiation/" },
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
