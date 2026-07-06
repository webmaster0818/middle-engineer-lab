import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "年収ダウン転職の判断軸【下げてでも取るべき時】";
const DESCRIPTION =
  "年収が下がる転職を受け入れるべきか迷う人へ、判断軸・許容できるケースとNGケース・生涯年収で考えるフレームを実践的に解説。30代・40代が目先の年収だけで損をしないための考え方をまとめます。";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/salary-down/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：年収ダウンを判断する基本軸" },
  { id: "axes", label: "下げてでも取るべきかの判断軸" },
  { id: "ok", label: "年収ダウンを許容してよいケース" },
  { id: "ng", label: "年収ダウンを避けるべきケース" },
  { id: "lifetime", label: "生涯年収で考えるフレーム" },
  { id: "checklist", label: "決断前のチェックリスト" },
  { id: "midlife", label: "30代・40代での判断の注意点" },
  { id: "faq", label: "よくある質問" },
];

const axes = [
  {
    title: "将来性（年収の回復・上昇余地）",
    desc: "一時的に下がっても、その先で伸びる見込みがあるか。成長領域や昇給制度、評価の透明性を確認します。下げ幅より回復のシナリオが描けるかが重要です。",
  },
  {
    title: "裁量・成長機会",
    desc: "任される範囲が広がるか、市場価値の高いスキルを得られるか。年収以外で得られる資産が、下げ幅に見合うかを見ます。",
  },
  {
    title: "生活への影響",
    desc: "下がった年収で生活が成り立つか。固定費・家族構成・貯蓄を踏まえ、許容できる下限を数字で把握しておくことが前提です。",
  },
];

const okCases = [
  {
    title: "成長領域・将来性の高い環境に移る",
    desc: "市場価値の高いスキルが身につく、または伸びる事業に当事者として関われる場合。短期の下げを将来の上げで回収できる見込みがあるなら合理的です。",
  },
  {
    title: "未経験領域へのキャリアチェンジ",
    desc: "新しい職種・技術に挑戦する際、一時的に年収が下がることがあります。中長期で年収レンジが上がる職種への移行なら、投資と捉えられます。",
  },
  {
    title: "労働環境・健康を守るため",
    desc: "過重労働や心身の不調が続いている場合、年収を多少下げてでも持続可能な環境に移ることは、長期の生涯年収を守る選択になり得ます。",
  },
  {
    title: "裁量・経験が大きく広がる",
    desc: "上流工程やマネジメント、責任範囲の拡大など、次のキャリアにつながる経験が得られる場合、その経験価値が下げ幅を上回ることがあります。",
  },
];

const ngCases = [
  {
    title: "下がる理由が説明できない",
    desc: "なぜ下がるのか、いつ回復するのかが不明なまま受け入れるのは危険です。回復シナリオが描けない年収ダウンは、慎重に見送るべきです。",
  },
  {
    title: "生活が成り立たなくなる",
    desc: "固定費や家族の生活を圧迫する水準まで下がるなら、他がどれだけ魅力的でも見送りが基本です。生活の最低ラインは死守します。",
  },
  {
    title: "現職への不満から逃げるだけ",
    desc: "今がつらいという理由だけで、条件を十分確認せず下げて移ると、後悔につながりやすいです。逃げではなく前進になる選択かを問い直します。",
  },
  {
    title: "回復の根拠が曖昧",
    desc: "「いずれ上がる」と口頭で言われるだけで、評価制度や昇給実績の裏付けがない場合は要注意です。回復の根拠を具体的に確認しましょう。",
  },
];

const checklist = [
  "下がる理由と、年収が回復・上昇するシナリオを説明できるか",
  "下がった年収で生活が成り立つか（固定費・貯蓄を数字で確認）",
  "年収以外に得られるもの（スキル・裁量・経験）を具体化したか",
  "昇給制度・評価基準・過去の昇給実績を確認したか",
  "目先の差額だけでなく、数年単位の生涯年収で比較したか",
  "現職への不満から逃げるだけの選択になっていないか",
];

const faqs = [
  {
    q: "年収が下がる転職は基本的に避けるべきですか？",
    a: "一律に避けるべきではありません。重要なのは、下げ幅そのものより「なぜ下がるのか」「いつ・どう回復するのか」「年収以外に何を得られるのか」です。成長領域への移行やキャリアチェンジなど、将来の上昇につながる下げなら合理的な投資になり得ます。一方、回復の根拠が曖昧な下げは慎重に判断すべきです。",
  },
  {
    q: "どのくらいの年収ダウンまで許容していいですか？",
    a: "一律の目安はなく、生活の最低ラインと回復シナリオで決まります。まず固定費・家族構成・貯蓄から「これ以下は無理」という下限を数字で出し、その範囲内かを確認します。そのうえで、下げ幅を何年で回収できそうかを見積もり、許容できるかを判断しましょう。",
  },
  {
    q: "年収ダウンを受け入れて後悔しないためには？",
    a: "回復の根拠を具体的に確認することが鍵です。「いずれ上がる」という口約束ではなく、評価制度・昇給実績・事業の成長性といった裏付けを確かめましょう。加えて、年収以外に得られるスキルや経験を言語化し、それが下げ幅に見合うかを冷静に判断すれば、後悔は減らせます。",
  },
  {
    q: "キャリアチェンジで一時的に年収が下がるのは普通ですか？",
    a: "未経験領域への移行では起こり得ます。新しい職種では実績がリセットされるため、一時的に下がることがあります。重要なのは、移行先の職種の年収レンジが現職より高い、または将来性があることです。中長期で回収できる見込みがあれば、下げは投資と捉えられます。",
  },
  {
    q: "生活が苦しくならないか不安です。",
    a: "決断前に、下がった年収での家計をシミュレーションしましょう。毎月の固定費、貯蓄の取り崩しペース、家族の生活費を数字で把握すれば、許容できるかが明確になります。生活が成り立たない水準なら、他がどれだけ魅力的でも見送るのが賢明です。生活の安定は判断の前提条件です。",
  },
  {
    q: "年収を下げてでも労働環境を優先すべきですか？",
    a: "心身の健康や持続可能性が脅かされている場合は、優先する価値があります。過重労働で体を壊せば、結果的に生涯年収を大きく損ないます。ただし、感情だけで決めず、下がった年収で生活が成り立つか、回復の見込みがあるかも併せて確認したうえで判断しましょう。",
  },
  {
    q: "30代・40代で年収ダウンを受け入れるのはリスクが高いですか？",
    a: "家庭や固定費の負担が大きい年代のため、生活への影響はより慎重に見る必要があります。一方で、年収ダウンを伴っても将来性や裁量を取りに行く判断が、生涯年収では有利になることもあります。目先の差額に縛られず、数年単位の生涯年収と生活の両面で総合的に判断することが重要です。",
  },
];

export default function SalaryDownPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/salary-down/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "年収ダウン転職の判断軸" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          年収ダウン転職の判断軸
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 下げてでも取るべき時、見送るべき時
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          魅力的な求人だけれど年収が下がる。そんなとき「受け入れるべきか」と悩むのは当然です。年収ダウンは避けたいものですが、一律に「下がる転職はダメ」と切り捨てると、将来につながる機会を逃すこともあります。本記事では、下げてでも取るべきかを見極める判断軸、許容してよいケースと避けるべきケース、生涯年収で考えるフレームまで、目先の年収だけで損をしないための考え方を実践的に解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省 賃金構造基本統計調査（2024年）",
            "各IT転職エージェント公表の年収動向情報（2025年）",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：年収ダウンを判断する基本軸</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              年収ダウンを判断する基本は、<strong>「下がる理由と回復シナリオが説明でき」「生活が成り立つ範囲で」「年収以外に得られる将来価値が下げ幅に見合う」</strong>かどうか。目先の差額ではなく、生涯年収と生活の両面で考えるのが鉄則です。
            </p>
            <p className="text-slate-700 leading-relaxed">
              下げてでも取るべきなのは、将来性・裁量・成長機会という資産が下げ幅を上回るときです。逆に、回復の根拠が曖昧だったり、生活が成り立たない水準だったり、現職から逃げるだけの選択なら見送るべきです。感情ではなく、回復シナリオと家計の数字で判断しましょう。
            </p>
          </div>
        </section>

        {/* 判断軸 */}
        <section id="axes" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">下げてでも取るべきかの判断軸</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            年収ダウンを受け入れるかは、次の3つの軸で検討します。すべてを満たす必要はありませんが、特に「生活への影響」は前提条件です。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {axes.map((a, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{a.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OKケース */}
        <section id="ok" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収ダウンを許容してよいケース</h2>
          <div className="space-y-4">
            {okCases.map((c, i) => (
              <div key={i} className="bg-green-50 rounded-lg p-5">
                <h3 className="font-bold text-green-800 mb-2">{c.title}</h3>
                <p className="text-sm text-green-700 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* NGケース */}
        <section id="ng" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収ダウンを避けるべきケース</h2>
          <div className="space-y-4">
            {ngCases.map((c, i) => (
              <div key={i} className="bg-red-50 rounded-lg p-5">
                <h3 className="font-bold text-red-800 mb-2">{c.title}</h3>
                <p className="text-sm text-red-700 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 生涯年収 */}
        <section id="lifetime" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">生涯年収で考えるフレーム</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            目先の差額に惑わされないために、数年単位で年収の推移を比較します。次の手順で考えると、下げが投資か損失かが見えてきます。
          </p>
          <div className="space-y-4">
            {[
              { num: "1", title: "現職に留まった場合の年収推移を描く", desc: "今の会社にいた場合、5年後・10年後の年収がどう変わるかを現実的に見積もります。" },
              { num: "2", title: "転職先での回復シナリオを描く", desc: "下がった年収が、昇給制度や成長機会を踏まえて何年で回復・逆転しそうかを見積もります。" },
              { num: "3", title: "2つの累積年収を比較する", desc: "数年分の累積で比べると、一時的な下げが将来の上げで回収できるかが見えます。" },
              { num: "4", title: "年収以外の資産も加味する", desc: "得られるスキル・経験・健康・裁量など、金額に表れない価値も判断材料に加えます。" },
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
            年収の上下の全体像は
            <Link href="/knowledge/salary-change/" className="text-petrol hover:underline">転職で年収は上がる？下がる？</Link>
            、相場の確認は
            <Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の調べ方</Link>
            を参照してください。
          </p>
        </section>

        {/* チェックリスト */}
        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">決断前のチェックリスト</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
            <ul className="space-y-3">
              {checklist.map((item, i) => (
                <li key={i} className="flex gap-3 items-start text-sm text-slate-700">
                  <span className="text-petrol font-bold shrink-0">☐</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 30代40代 */}
        <section id="midlife" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代での判断の注意点</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：将来性への投資として捉えやすい</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                30代はまだ年収の伸びしろが大きく、一時的なダウンを将来の上げで回収しやすい年代です。成長領域への移行やキャリアチェンジなら、下げを投資と捉える判断が生涯年収で有利に働くことがあります。ただし回復シナリオの根拠は必ず確認しましょう。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：生活基盤への影響を最優先で見る</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                40代は住宅ローンや教育費など固定費の負担が大きく、年収ダウンの生活への影響をより慎重に見る必要があります。回復までの期間が長くなりがちな点も踏まえ、生活の最低ラインを死守しつつ、裁量や将来性が下げ幅に見合うかを冷静に判断しましょう。
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
          <h2 className="text-xl font-bold mb-3">回復シナリオはプロと一緒に検証しよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントなら、その年収ダウンが妥当か、回復の見込みがあるかを客観的に相談できます。
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
              { name: "転職で年収は上がる？下がる？", href: "/knowledge/salary-change/" },
              { name: "市場価値の調べ方", href: "/knowledge/market-value/" },
              { name: "年収交渉ガイド", href: "/knowledge/salary-negotiation/" },
              { name: "転職の後悔を防ぐ方法", href: "/knowledge/regret/" },
              { name: "キャリアプランの立て方", href: "/knowledge/career-plan/" },
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
