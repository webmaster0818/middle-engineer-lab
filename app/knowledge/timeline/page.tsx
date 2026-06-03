import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "エンジニア転職のスケジュール【3ヶ月で内定を取る計画表】",
  description:
    "エンジニア転職を3ヶ月で成功させるスケジュールを週単位で解説。準備期間、応募、面接、内定承諾、退職までの全工程を計画表で紹介します。",
};

const faqs = [
  {
    q: "転職活動にかかる期間の目安は？",
    a: "エンジニアの場合、準備開始から内定承諾まで2〜3ヶ月が平均です。30代は2〜3ヶ月、40代は3〜5ヶ月を見込んでおきましょう。在職中に進めるのが基本です。",
  },
  {
    q: "何社くらい応募すべき？",
    a: "10〜20社が目安です。書類選考通過率は30〜50%、一次面接通過率は50%程度なので、最終的に2〜3社から内定を得るには10社以上の応募が必要です。",
  },
  {
    q: "在職中と退職後、どちらが有利？",
    a: "在職中の方が有利です。現在の年収を基準に交渉できるため年収が下がりにくく、精神的にも経済的にも余裕を持って活動できます。退職後は時間に余裕がありますが、焦りが生まれやすいリスクがあります。",
  },
  {
    q: "面接は何回くらいある？",
    a: "一般的には2〜3回です。書類選考→一次面接（技術面接）→最終面接（役員面接）が典型的な流れです。企業によっては技術試験やコーディングテストが追加される場合もあります。",
  },
  {
    q: "内定を保留できる期間は？",
    a: "通常1〜2週間です。複数の企業を並行して選考している場合は、その旨を正直に伝えましょう。エージェントを通じて保留期間の延長を交渉することも可能です。",
  },
  {
    q: "転職のベストタイミングはいつ？",
    a: "求人が最も多いのは1〜3月と9〜11月です。4月入社と10月入社のタイミングに合わせて求人が増える傾向があります。ただしIT業界は通年で求人があるため、準備ができ次第始めるのがベストです。",
  },
];

export default function TimelinePage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "転職スケジュール" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エンジニア転職のスケジュール【3ヶ月で内定を取る計画表】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年4月 | 3ヶ月で内定を獲得するための転職計画表
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            転職活動は計画的に進めることで、短期間で効率的に内定を獲得できます。闇雲に応募を始めるのではなく、準備→応募→面接→内定の各フェーズにスケジュールを立てましょう。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、エンジニアが3ヶ月で内定を獲得するための週単位の計画表を紹介します。
          </p>
        </section>

        {/* 3ヶ月計画表 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">3ヶ月で内定を取る計画表</h2>

          {/* 1ヶ月目 */}
          <div className="mb-6">
            <h3 className="font-bold text-lg text-blue-700 mb-3 border-l-4 border-blue-600 pl-3">1ヶ月目: 準備フェーズ</h3>
            <div className="space-y-3">
              {[
                { week: "1週目", tasks: "キャリアの棚卸し。これまでの経験・スキル・成果を一覧化する。転職の軸（年収、技術、ポジション、勤務地）を明確にする。" },
                { week: "2週目", tasks: "職務経歴書・履歴書の作成。GitHubやポートフォリオの整理。転職エージェント3社に登録し、初回面談を予約する。" },
                { week: "3週目", tasks: "エージェントとの面談（3社）。市場価値の確認、希望条件の擦り合わせ。紹介求人の精査。" },
                { week: "4週目", tasks: "応募企業の選定。エージェントからの求人紹介に加え、自分でもリサーチ。10〜20社をリストアップ。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-4">
                  <span className="font-bold text-blue-600 text-sm min-w-[60px]">{item.week}</span>
                  <p className="text-sm text-slate-600">{item.tasks}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 2ヶ月目 */}
          <div className="mb-6">
            <h3 className="font-bold text-lg text-blue-700 mb-3 border-l-4 border-blue-600 pl-3">2ヶ月目: 応募・面接フェーズ</h3>
            <div className="space-y-3">
              {[
                { week: "5週目", tasks: "書類応募開始。10〜15社に一斉応募。書類選考の結果は1〜2週間で届く。" },
                { week: "6週目", tasks: "一次面接（技術面接）が始まる。技術面接対策を並行して実施。コーディングテスト対策も行う。" },
                { week: "7週目", tasks: "一次面接を複数社と実施。面接の振り返りをエージェントと行い、改善点を洗い出す。" },
                { week: "8週目", tasks: "二次面接・最終面接に進む企業が出てくる。追加応募も継続して行う。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-4">
                  <span className="font-bold text-blue-600 text-sm min-w-[60px]">{item.week}</span>
                  <p className="text-sm text-slate-600">{item.tasks}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3ヶ月目 */}
          <div className="mb-6">
            <h3 className="font-bold text-lg text-blue-700 mb-3 border-l-4 border-blue-600 pl-3">3ヶ月目: 内定・退職フェーズ</h3>
            <div className="space-y-3">
              {[
                { week: "9週目", tasks: "最終面接を実施。内定が出始める。条件面の確認と年収交渉。" },
                { week: "10週目", tasks: "内定承諾。入社日の調整。複数内定がある場合は比較検討の上、1社に決定。" },
                { week: "11週目", tasks: "現職に退職意思を伝える。引き継ぎ計画を作成。" },
                { week: "12週目", tasks: "引き継ぎ開始。退職届の提出。入社準備（必要書類の準備など）。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-4">
                  <span className="font-bold text-blue-600 text-sm min-w-[60px]">{item.week}</span>
                  <p className="text-sm text-slate-600">{item.tasks}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 効率化のコツ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職活動を効率化する5つのコツ</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 面接は同じ週にまとめる</h3>
              <p className="text-sm text-blue-700">面接をまとめて行うことで、比較検討がしやすくなります。また面接スキルが短期間で向上するメリットもあります。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. スプレッドシートで進捗管理</h3>
              <p className="text-sm text-blue-700">応募企業、選考ステータス、面接日程、年収提示額をスプレッドシートで一元管理しましょう。エージェント別の管理も重要です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 面接後は即日振り返り</h3>
              <p className="text-sm text-blue-700">面接後すぐに聞かれた質問、自分の回答、改善点をメモしましょう。次の面接に活かせるだけでなく、エージェントへのフィードバックにも使えます。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 内定のタイミングを揃える</h3>
              <p className="text-sm text-blue-700">複数社の内定を同じ時期に得られるよう、応募タイミングを調整しましょう。エージェントに相談すれば、選考スピードの調整に協力してもらえます。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">5. 平日夜・リモート面接を活用</h3>
              <p className="text-sm text-blue-700">在職中の転職活動では、平日19時以降のオンライン面接を積極的に活用しましょう。多くの企業が柔軟に対応してくれます。</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
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
          <h2 className="text-xl font-bold mb-3">3ヶ月で内定を取るための第一歩</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントに登録して、転職スケジュールの相談から始めましょう。全て無料です。
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
              { name: "退職の進め方ガイド", href: "/knowledge/resignation/" },
              { name: "年収交渉テクニック", href: "/knowledge/salary-negotiation/" },
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
              { name: "ミドルエンジニア転職ラボTOP", href: "/" },
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
