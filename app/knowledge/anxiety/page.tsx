import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "転職への不安との向き合い方【エンジニア転職】";
const DESCRIPTION =
  "転職への不安を整理し、行動に変えるための向き合い方を、不安の種類別の対処法・思考の整理フレーム・準備のステップまで実践的に解説。30代・40代が漠然とした不安に振り回されないための考え方をまとめます。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：不安との向き合い方の基本" },
  { id: "types", label: "転職の不安を5つに分解する" },
  { id: "framework", label: "不安を行動に変える整理フレーム" },
  { id: "by-type", label: "不安の種類別の対処法" },
  { id: "steps", label: "不安を減らす準備のステップ" },
  { id: "ng", label: "やってはいけないNG思考" },
  { id: "midlife", label: "30代・40代特有の不安への向き合い方" },
  { id: "faq", label: "よくある質問" },
];

const types = [
  {
    title: "金銭面の不安",
    desc: "年収が下がらないか、転職活動中の収入はどうなるか。お金の不安は具体的な数字で見える化すると和らぎます。",
  },
  {
    title: "スキル・市場価値の不安",
    desc: "自分は通用するのか、今のスキルで転職できるのか。市場価値を客観的に把握すれば、過剰な不安は減ります。",
  },
  {
    title: "失敗・後悔への不安",
    desc: "転職して後悔しないか、ブラック企業を引かないか。情報収集と判断軸の明確化で対処できます。",
  },
  {
    title: "環境変化への不安",
    desc: "新しい人間関係、慣れない業務に適応できるか。これは誰もが抱く自然な不安で、準備で軽減できます。",
  },
  {
    title: "現状を変えること自体の不安",
    desc: "今のままでいいのでは、という現状維持バイアス。動かないリスクと比較して捉え直すことが大切です。",
  },
];

const byType = [
  {
    scene: "金銭面の不安への対処",
    text: "生活費の最低ライン、転職活動中の貯蓄余力、希望年収の下限を数字で書き出します。漠然とした不安を金額に落とすと、対処可能な課題に変わります。",
  },
  {
    scene: "スキルの不安への対処",
    text: "エージェントに市場価値を聞く、求人票の必須要件と自分のスキルを照合する、という客観視で「通用するか」の不安を事実で確かめます。",
  },
  {
    scene: "失敗への不安への対処",
    text: "後悔の典型パターン（情報不足・条件未確認）を知り、口コミ・面談・条件書面の確認で潰します。判断軸を先に決めておくのが有効です。",
  },
  {
    scene: "環境変化への不安への対処",
    text: "入社後90日の立ち上がり計画を持つと、未知への不安が「やることリスト」に変わります。最初の不安は誰にでもあると理解することも大切です。",
  },
];

const ngActions = [
  {
    title: "不安を理由に行動を止め続ける",
    desc: "不安だから動かない、を続けると現状の課題も解決しません。不安は「準備すべきこと」のサインと捉え、調べる・相談する行動に変えましょう。",
  },
  {
    title: "漠然としたまま悩み続ける",
    desc: "「なんとなく不安」のまま抱えると膨らみます。何が不安なのかを書き出して分解すると、多くは対処可能な具体的課題に変わります。",
  },
  {
    title: "他人の失敗談だけで判断する",
    desc: "ネットの失敗談は印象に残りやすいですが、自分の状況とは前提が異なります。一般論として参考にしつつ、自分の判断軸で考えましょう。",
  },
  {
    title: "現状維持のリスクを無視する",
    desc: "「動かないほうが安全」とは限りません。スキルの陳腐化や市場価値の低下など、動かないことのリスクも天秤にかけて判断します。",
  },
];

const faqs = [
  {
    q: "転職に不安を感じるのは普通ですか？",
    a: "ごく普通です。転職は環境が大きく変わる選択であり、不安を感じない人のほうが少数です。大切なのは不安をゼロにすることではなく、不安の正体を具体的に把握し、対処可能な課題に分解することです。漠然とした不安のまま悩み続けるより、書き出して整理するだけで気持ちは軽くなります。",
  },
  {
    q: "不安で転職活動の一歩が踏み出せません。",
    a: "いきなり退職する必要はありません。在職しながら情報収集する、エージェントに登録して市場価値を聞く、求人を眺めるなど、リスクの低い一歩から始めましょう。情報が増えると不安の多くは「分からないことへの恐れ」だったと気づきます。行動が不安を小さくします。",
  },
  {
    q: "年収が下がる不安が大きいです。",
    a: "まず生活に必要な最低年収を数字で出し、希望年収の下限を決めましょう。そのうえで、目先の年収だけでなく裁量・将来性・スキルの伸びも含めて判断すると、不安が整理されます。どうしても年収を下げたくないなら、その軸を明確にして条件交渉やエージェント選びに反映できます。",
  },
  {
    q: "今のスキルで通用するか不安です。",
    a: "自己評価だけで判断せず、客観的な物差しを使いましょう。エージェントに市場価値を聞く、求人票の必須要件と照合する、スカウトの反応を見るといった方法で、「通用するか」を事実で確認できます。不足が見つかっても、学習計画を立てれば前進できます。",
  },
  {
    q: "転職して後悔しないか怖いです。",
    a: "後悔の多くは情報不足や条件の確認漏れから生まれます。口コミの確認、面談での質問、オファー条件の書面確認といった準備で、防げる後悔はかなり減らせます。完璧な選択を目指すより、判断軸を先に決めておき、その軸に沿って選ぶことが後悔を減らすコツです。",
  },
  {
    q: "不安で眠れないほど追い込まれています。",
    a: "強い不安が続き心身に支障が出ている場合は、転職の判断を急がず、まず休息と相談を優先してください。信頼できる人やエージェントに話すだけでも整理が進みます。心身の不調が深刻なときは医療機関への相談も選択肢です。健康を最優先にしたうえで、落ち着いてから判断しましょう。",
  },
  {
    q: "30代・40代の転職は不安が大きくて当然ですか？",
    a: "年齢が上がるほど守るものが増え、不安が大きくなるのは自然です。一方で、これまで積んだ実務経験は若手にない強みです。漠然と年齢を不安視するより、自分の市場価値を客観的に把握することが大切です。現実を知れば、不安の多くは思い込みだったと分かることも多いです。",
  },
];

export default function AnxietyPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/anxiety/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "転職への不安との向き合い方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          転職への不安との向き合い方
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 漠然とした不安を行動に変える整理術
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          転職を考えると、年収・スキル・失敗・環境変化など、さまざまな不安が押し寄せます。不安そのものは自然な感情で、なくす必要はありません。重要なのは、漠然とした不安を具体的な課題に分解し、対処可能なものに変えていくことです。本記事では、不安を5つに分解する方法、行動に変える整理フレーム、種類別の対処法、準備のステップまで、不安に振り回されないための向き合い方を実践的に解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省 job tag（職業情報提供サイト）",
            "各IT転職エージェント公表のキャリア相談実務（2025年）",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：不安との向き合い方の基本</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              不安との向き合い方の基本は、<strong>「不安の正体を書き出して分解し」「対処可能な課題に変え」「小さな行動で一つずつ潰していく」</strong>こと。不安をゼロにしようとするのではなく、コントロールできる形にすることが目標です。
            </p>
            <p className="text-slate-700 leading-relaxed">
              「なんとなく不安」のまま抱え込むと、不安は実体以上に膨らみます。逆に、何が不安なのかを言語化すると、その多くは「情報を集めれば解決すること」「準備すれば軽減できること」だと分かります。不安は止まる理由ではなく、準備すべきことを教えてくれるサインだと捉え直しましょう。
            </p>
          </div>
        </section>

        {/* 5つに分解 */}
        <section id="types" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職の不安を5つに分解する</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            漠然とした不安は、まず種類に分けると扱いやすくなります。多くの転職の不安は次の5つに整理できます。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {types.map((t, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{t.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 整理フレーム */}
        <section id="framework" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">不安を行動に変える整理フレーム</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            不安を抱えたら、次の3列で書き出すと、悩みが具体的なアクションに変わります。
          </p>
          <div className="space-y-4">
            {[
              { num: "1", title: "何が不安かを書き出す", desc: "「年収が下がるかも」「スキルが通用しないかも」など、頭の中の不安を全て言葉にします。" },
              { num: "2", title: "コントロールできるか分類する", desc: "自分の準備で対処できる不安と、相手次第で変えられない不安に分けます。多くは前者です。" },
              { num: "3", title: "次の一手を決める", desc: "対処できる不安には「エージェントに相談する」「求人を10件見る」など、具体的な行動を1つ割り当てます。" },
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
            自分の軸の整理には
            <Link href="/knowledge/self-analysis/" className="text-petrol hover:underline">自己分析の進め方</Link>
            も役立ちます。
          </p>
        </section>

        {/* 種類別 */}
        <section id="by-type" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">不安の種類別の対処法</h2>
          <div className="space-y-4">
            {byType.map((b, i) => (
              <div key={i} className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-100 px-5 py-2 text-sm font-bold text-slate-700">{b.scene}</div>
                <p className="px-5 py-4 text-sm text-slate-700 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            市場価値の確かめ方は
            <Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の調べ方</Link>
            、後悔を防ぐ視点は
            <Link href="/knowledge/regret/" className="text-petrol hover:underline">転職の後悔を防ぐ方法</Link>
            を参照してください。
          </p>
        </section>

        {/* 準備のステップ */}
        <section id="steps" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">不安を減らす準備のステップ</h2>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">① 在職しながら情報を集める</h3>
              <p className="text-sm text-slate-600">退職を決める前に求人・相場・口コミを調べます。情報が増えると「分からない不安」が減ります。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">② エージェントに市場価値を聞く</h3>
              <p className="text-sm text-slate-600">客観的な物差しで自分の立ち位置を知ると、過剰な不安も根拠なき楽観も是正できます。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">③ 判断軸を先に決めておく</h3>
              <p className="text-sm text-slate-600">譲れない条件を事前に決めると、迷ったときの拠り所になり、後悔への不安が減ります。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">④ 動かないリスクも書き出す</h3>
              <p className="text-sm text-slate-600">現状維持のリスク（スキル陳腐化など）も並べると、転職の不安を相対的に捉えられます。</p>
            </div>
          </div>
        </section>

        {/* NG */}
        <section id="ng" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">やってはいけないNG思考</h2>
          <div className="space-y-4">
            {ngActions.map((n, i) => (
              <div key={i} className="bg-red-50 rounded-lg p-5">
                <h3 className="font-bold text-red-800 mb-2">{n.title}</h3>
                <p className="text-sm text-red-700 leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 30代40代 */}
        <section id="midlife" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代特有の不安への向き合い方</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：年齢への不安は実績で打ち消す</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                30代は「もう遅いのでは」という不安を抱きがちですが、実務経験が厚く市場価値が高まる年代でもあります。漠然と年齢を不安視するより、積んできた実績を棚卸しし、市場価値を客観的に確認することで不安は和らぎます。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：守るものと挑戦のバランスを取る</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                40代は家庭やローンなど守るものが増え、不安が大きくなるのは自然です。だからこそ、生活の最低ラインを数字で固め、判断軸を明確にすることが安心につながります。在職しながらの情報収集など、リスクの低い進め方を選びましょう。
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
          <h2 className="text-xl font-bold mb-3">まずは相談から始めよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントへの相談は無料です。市場価値を聞くだけでも、漠然とした不安はぐっと小さくなります。
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
              { name: "転職の後悔を防ぐ方法", href: "/knowledge/regret/" },
              { name: "市場価値の調べ方", href: "/knowledge/market-value/" },
              { name: "自己分析の進め方", href: "/knowledge/self-analysis/" },
              { name: "キャリアプランの立て方", href: "/knowledge/career-plan/" },
              { name: "30代エンジニアの転職事情", href: "/age/30s/" },
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
