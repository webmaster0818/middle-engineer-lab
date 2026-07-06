import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "エージェントを使わない転職｜自力運用の進め方と管理術";
const PAGE_DESC =
  "30代・40代エンジニア向けに、転職エージェントを使わず自力で進める方法を解説。直接応募・リファラル・ダイレクト・SNSの使い分け、メリットとデメリット、応募管理表・日程調整・年収交渉・内定後手続きまでの実務をまとめました。";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/no-agent/" },
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：本命は自力、多忙なら併用が無難" },
  { id: "channels", label: "エージェントを使わない4つの手段" },
  { id: "pros-cons", label: "メリットとデメリット" },
  { id: "ops", label: "自力運用の実務4ステップ" },
  { id: "negotiation", label: "年収交渉を自力で進める" },
  { id: "after-offer", label: "内定後の手続きを自分で管理する" },
  { id: "middle", label: "30代・40代の使い分け" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const channels = [
  {
    name: "直接応募（採用サイト・求人媒体）",
    desc: "企業の採用ページや求人媒体から直接応募する方法。志望度が伝わりやすく、仲介手数料が発生しないため企業側のコスト負担が軽い分、条件交渉で有利に働く場合があります。",
  },
  {
    name: "リファラル（社員紹介）",
    desc: "知人やコミュニティのつながりを通じた紹介。内部の一次情報を得やすく、選考がスムーズに進む傾向があります。一方で、合わなかった場合に断りづらい点には注意が必要です。",
  },
  {
    name: "ダイレクトリクルーティング",
    desc: "企業やヘッドハンターから直接スカウトが届くサービス。エージェントの仲介なしに企業とやり取りします。届いたスカウトへの返信の組み立ては別記事で解説しています。",
  },
  {
    name: "SNS・技術発信経由",
    desc: "技術ブログやGitHub、登壇などの発信を見た企業から声がかかるルート。実力が可視化されている人ほど有効ですが、成果が出るまで時間がかかります。",
  },
];

const faqs = [
  {
    q: "エージェントを使わない方が受かりやすいのですか？",
    a: "一概には言えません。直接応募は志望度が伝わり、企業側の採用コストが下がる分だけ前向きに検討されることもあります。一方で、エージェントが行う書類添削・面接対策・推薦による後押しを自分で補う必要があり、客観的なフィードバックも得にくくなります。受かりやすさは応募者のスキルや準備度に左右されます。",
  },
  {
    q: "自力だと年収交渉で損をしませんか？",
    a: "交渉を自分で行う負担はありますが、仲介手数料が発生しない分、企業が提示額を上げやすいケースもあります。事前に市場相場を把握し、現職年収と希望額を根拠とともに伝えれば、自力でも適正な交渉は可能です。ただし相場観や交渉に不安があるなら、エージェント併用も選択肢です。",
  },
  {
    q: "応募の管理はどうすればいいですか？",
    a: "スプレッドシートで応募管理表を作るのが基本です。企業名・応募日・選考ステータス・面接日程・連絡先・メモを一覧化すると、複数社を並行しても抜け漏れを防げます。エージェントがいない分、進捗管理はすべて自分の責任になるため、最初に仕組みを作っておくことが重要です。",
  },
  {
    q: "不採用の理由が分からないのが不安です。",
    a: "自力応募の弱点の一つです。エージェント経由なら不採用理由のフィードバックを得られることがありますが、直接応募では理由が開示されないことがほとんどです。職務経歴書や面接の振り返りを自分で行い、応募ごとに改善する姿勢が求められます。",
  },
  {
    q: "エージェントと自力は併用できますか？",
    a: "併用できます。本命企業は直接応募やリファラルで志望度を示し、幅を広げる目的でエージェントも使う、といった使い分けが現実的です。ただし、同じ企業に両方のルートで応募すると混乱を招くため、応募経路は企業ごとに一本化しましょう。",
  },
];

export default function NoAgentPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/knowledge/no-agent/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "エージェントを使わない転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エージェントを使わない転職｜自力運用の進め方と管理術
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 30代・40代エンジニアのための自力転職ガイド
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          転職エージェントを一切使わず、直接応募やリファラルで自力で進めたいエンジニアは少なくありません。本記事は「自力運用」に主軸を置き、エージェントを使わない4つの手段、メリットとデメリット、応募管理・日程調整・年収交渉・内定後手続きまでの実務を整理します。どの直接応募サービスを使うかの比較は<Link href="/knowledge/direct-apply/" className="text-petrol hover:underline">直接応募とエージェントの使い分け</Link>を参照してください。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={["各採用手法の一般的な運用", "編集部による転職実務の整理"]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-12 scroll-mt-20">
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：本命は自力、多忙なら併用が無難</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              強い志望企業がある、相場観があり交渉に自信がある人には、直接応募やリファラルでの<strong>自力運用</strong>が向きます。一方、在職中で時間が取れない、客観的な助言が欲しい人は、<strong>エージェント併用</strong>が無難です。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>・本命は直接応募やリファラルで志望度を示す</li>
              <li>・自己管理（応募・日程・交渉）はすべて自分の責任になる</li>
              <li>・受かりやすさは一概に言えない。準備度とスキル次第</li>
            </ul>
          </div>
        </section>

        <section id="channels" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エージェントを使わない4つの手段</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            「使わない」といっても手段は一つではありません。それぞれ性質が異なるため、組み合わせて使うのが現実的です。
          </p>
          <div className="space-y-4">
            {channels.map((c) => (
              <div key={c.name} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{c.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            リファラルの具体的な進め方は<Link href="/knowledge/referral/" className="text-petrol hover:underline">リファラル転職</Link>、ダイレクトのスカウト返信は<Link href="/knowledge/scout-reply/" className="text-petrol hover:underline">スカウト返信の例文</Link>、SNS発信のためのポートフォリオは<Link href="/knowledge/portfolio/" className="text-petrol hover:underline">ポートフォリオの作り方</Link>で詳しく扱っています。
          </p>
        </section>

        <section id="pros-cons" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">メリットとデメリット</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            自力運用には明確な長所と短所があります。両面を理解したうえで選びましょう。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-2">メリット</h3>
              <ul className="text-sm text-green-700 space-y-1.5">
                <li>・志望度がダイレクトに伝わる</li>
                <li>・仲介を挟まず選考が速く進みやすい</li>
                <li>・仲介手数料がない分、条件交渉で有利な場合がある</li>
                <li>・自分のペースで進められる</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-5">
              <h3 className="font-bold text-red-800 mb-2">デメリット</h3>
              <ul className="text-sm text-red-700 space-y-1.5">
                <li>・不採用理由が分からないことが多い</li>
                <li>・応募・日程・交渉の自己管理がすべて自分に集中する</li>
                <li>・書類添削や模擬面接など客観的な助言が得にくい</li>
                <li>・年収交渉を自力で行う負担がある</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="ops" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">自力運用の実務4ステップ</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            エージェントがいない分、進行管理の仕組みを最初に作ることが成否を分けます。
          </p>
          <div className="space-y-3">
            {[
              { step: "応募管理表を作る", desc: "スプレッドシートに「企業名・応募日・応募経路・選考ステータス・次回日程・連絡先・メモ」を列で用意。複数社を並行しても抜け漏れを防げます。" },
              { step: "書類を自分で磨く", desc: "職務経歴書は応募先ごとに要点を調整。客観視点が得にくいため、第三者やコミュニティにレビューを依頼すると精度が上がります。" },
              { step: "日程調整を自分で行う", desc: "面接日程は企業と直接やり取り。候補日を複数提示し、リマインドを自分で設定。在職中は現職の予定との衝突に注意します。" },
              { step: "選考の振り返りを記録する", desc: "面接後に質問内容と手応えをメモ。フィードバックがもらえない分、自分で振り返って次の応募に活かします。" },
            ].map((s, i) => (
              <div key={s.step} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{s.step}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            活動全体のスケジュール感は<Link href="/knowledge/timeline/" className="text-petrol hover:underline">転職活動のタイムライン</Link>、職務経歴書の書き方は<Link href="/knowledge/resume/" className="text-petrol hover:underline">エンジニア向け職務経歴書</Link>を参考にしてください。
          </p>
        </section>

        <section id="negotiation" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収交渉を自力で進める</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              エージェントがいないと、年収交渉も自分で行う必要があります。難しく感じますが、手順を踏めば自力でも適正な交渉は可能です。
            </p>
            <ul className="space-y-2">
              {[
                "市場相場を事前に把握する（同職種・同年代のレンジを調べる）",
                "現職年収と希望額を、根拠（実績・スキル）とともに伝える",
                "提示額を即承諾せず、検討の時間をもらう",
                "金額だけでなく、裁量労働・リモート・等級など総合で判断する",
              ].map((c) => (
                <li key={c} className="flex items-start gap-2 text-slate-700">
                  <span className="text-petrol font-bold shrink-0">✓</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <p>
              交渉の進め方は<Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉の進め方</Link>、相場の調べ方は<Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の調べ方</Link>で詳しく解説しています。仲介手数料がない分、企業が提示額を上げやすいケースもあります。
            </p>
          </div>
        </section>

        <section id="after-offer" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">内定後の手続きを自分で管理する</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              エージェント経由なら入社日調整や条件確認をサポートしてもらえますが、自力では内定後の手続きも自分で進めます。
            </p>
            <ul className="space-y-2">
              {[
                "オファー内容（年収・等級・勤務条件）を書面で確認する",
                "複数内定がある場合は条件を比較して回答期限を管理する",
                "入社日を現職の退職スケジュールと擦り合わせる",
                "退職交渉・引き継ぎを並行して進める",
              ].map((c) => (
                <li key={c} className="flex items-start gap-2 text-slate-700">
                  <span className="text-petrol font-bold shrink-0">✓</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <p>
              内定の比較は<Link href="/knowledge/offer-compare/" className="text-petrol hover:underline">内定の比較・見極め方</Link>、退職の進め方は<Link href="/knowledge/resignation/" className="text-petrol hover:underline">退職の伝え方</Link>を参照してください。
            </p>
          </div>
        </section>

        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の使い分け</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              30代・40代は在職中の多忙さと、実績による発信力の両方を抱えます。自力か併用かは、その兼ね合いで決めるのが現実的です。
            </p>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">時間が取れないなら併用が無難</h3>
              <p>
                マネジメントや家庭で多忙な世代は、応募管理・日程調整・交渉をすべて自力でこなすのが負担になりがちです。本命だけ自力で攻め、幅出しはエージェントに任せる併用が現実的です。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">実績がある人ほど自力が効く</h3>
              <p>
                技術発信や明確な実績がある人は、リファラルやダイレクト、SNS経由で本命に直接アプローチできます。ミドルの強みは「実績で語れること」。客観的フィードバックが得にくい弱点だけ、コミュニティや知人で補いましょう。
              </p>
            </div>
            <p>
              年代別の実情は<Link href="/age/30s/" className="text-petrol hover:underline">30代の転職</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職</Link>も参考になります。
            </p>
          </div>
        </section>

        <section id="faq" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border border-slate-200 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800">
                  <span>Q. {faq.q}</span>
                  <span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span>
                </summary>
                <div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">直接応募サービスを比較する</h2>
          <p className="text-blue-100 text-sm mb-4">
            自力運用の起点になる直接応募サービスと、エージェントとの使い分けを整理しました。どのルートで動くか迷ったらこちら。
          </p>
          <Link
            href="/knowledge/direct-apply/"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            直接応募とエージェントの使い分けを見る
          </Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "直接応募とエージェントの使い分け", href: "/knowledge/direct-apply/" },
              { name: "リファラル転職", href: "/knowledge/referral/" },
              { name: "スカウト返信の例文", href: "/knowledge/scout-reply/" },
              { name: "年収交渉の進め方", href: "/knowledge/salary-negotiation/" },
              { name: "転職活動のタイムライン", href: "/knowledge/timeline/" },
              { name: "エンジニア向け職務経歴書", href: "/knowledge/resume/" },
            ].map((item) => (
              <Link
                key={item.href}
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
