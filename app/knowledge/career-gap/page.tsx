import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "経歴の空白期間（ブランク）の説明方法【エンジニア転職】";
const DESCRIPTION =
  "エンジニア転職で経歴のブランク（空白期間）をどう説明するか、理由別の伝え方・職務経歴書での書き方・面接での回答の型を実践的に解説。30代・40代が空白を不利にしないための準備をまとめます。";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/career-gap/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：ブランク説明の基本方針" },
  { id: "what-matters", label: "企業がブランクで見ている3点" },
  { id: "by-reason", label: "理由別の説明の型" },
  { id: "resume", label: "職務経歴書での書き方" },
  { id: "interview", label: "面接での回答テンプレート" },
  { id: "ng", label: "やってはいけないNG行動" },
  { id: "midlife", label: "30代・40代で特に注意する点" },
  { id: "faq", label: "よくある質問" },
];

const whatMatters = [
  {
    title: "空白期間に何をしていたか",
    desc: "ブランクそのものより、その間の過ごし方が見られます。学習・療養・育児・介護など、事実を簡潔に言語化できることが重要です。",
  },
  {
    title: "技術的なブランクの有無",
    desc: "離れていた期間に技術が陳腐化していないか、復帰できる状態かを確認されます。直近のキャッチアップ状況を示せると安心感につながります。",
  },
  {
    title: "再現性・継続性の懸念",
    desc: "同じ理由で再びブランクが生じないか、長期就業できるかという懸念に、事実ベースで答えられるかが評価されます。",
  },
];

const byReason = [
  {
    scene: "学習・スキルアップに充てた",
    text: "「前職退職後の○か月は、○○（言語・領域）を集中的に学習する期間にあてました。具体的には△△を作り、GitHubで公開しています。実務にすぐ活かせる状態まで仕上げました。」",
  },
  {
    scene: "療養・体調回復のため",
    text: "「体調を崩し、○か月療養に専念しました。現在は完全に回復しており、就業に支障はありません。再発防止のため生活リズムも整えています。」",
  },
  {
    scene: "育児・介護のため",
    text: "「家庭の事情で育児（介護）に専念する期間が必要でした。現在は体制が整い、フルタイムで就業できる環境です。ブランク中も○○でスキルの維持に努めました。」",
  },
  {
    scene: "転職活動が長引いた",
    text: "「自分のキャリアの方向性を見直し、納得できる環境を慎重に探していました。その間に○○の学習を進め、応募先の選定軸も明確になりました。」",
  },
  {
    scene: "前職を早期に離職した",
    text: "「前職は○○という事情で短期間での退職となりましたが、そこから○○を整理し、次は腰を据えて長く貢献できる環境を選んでいます。」",
  },
];

const ngActions = [
  {
    title: "ブランクを隠す・ごまかす",
    desc: "職歴の空白は職務経歴書や社会保険の記録から把握されます。隠そうとすると、発覚時に信頼を大きく損ないます。事実は正直に伝えましょう。",
  },
  {
    title: "前職や他人のせいにする",
    desc: "「会社が悪かった」「上司のせいで」といった他責の説明は、再現性の懸念を強めます。事実を述べつつ、自分が学んだ点に焦点を当てます。",
  },
  {
    title: "空白期間を過度に正当化する",
    desc: "長い言い訳は逆効果です。理由を簡潔に述べ、「今は就業できる状態」という現在地を明確に伝えるほうが好印象です。",
  },
  {
    title: "技術キャッチアップを放置する",
    desc: "ブランク中に何も学ばず、復帰の準備を示せないと不安を与えます。短期間でも直近の学習や手を動かした実績を用意しましょう。",
  },
];

const faqs = [
  {
    q: "ブランクは何か月から不利になりますか？",
    a: "明確な基準はありませんが、一般的に3か月を超えると面接で理由を聞かれやすくなります。ただし、期間の長さそのものより「空白中に何をしていたか」「現在就業できる状態か」が重視されます。半年や1年でも、理由が明確で技術的なキャッチアップを示せれば過度に不利にはなりません。",
  },
  {
    q: "病気や療養のブランクは正直に話すべきですか？",
    a: "完治していて就業に支障がないなら、簡潔に正直に話すのが基本です。詳細な病名まで開示する義務はなく、「体調を崩し療養していたが、現在は回復済みで就業に問題ない」と伝えれば十分です。再発防止の取り組みを一言添えると、継続就業への懸念を和らげられます。",
  },
  {
    q: "ブランク中に何もしていなかった場合はどう答えますか？",
    a: "「何もしていなかった」とそのまま伝えるのは避け、今からでも準備を始めましょう。短期間でもオンライン教材で学習する、簡単なアプリを作る、技術記事を読むなど、復帰意欲を示せる行動を起こし、それを語れるようにします。空白を埋める姿勢そのものが評価されます。",
  },
  {
    q: "職務経歴書にブランクは書く必要がありますか？",
    a: "職歴の在籍期間は正確に書く必要があり、結果として空白期間は見えてしまいます。空白に明確な理由がある場合は、職務経歴書の備考欄や自己PR欄で「○○のため○か月の充電期間」と一行添えると、面接前に誤解を防げます。隠したり期間を偽ったりするのは厳禁です。",
  },
  {
    q: "ブランク中の学習はどの程度アピールできますか？",
    a: "成果物が伴うと強いアピールになります。学んだだけでなく、GitHubで公開したコード、作ったアプリ、技術ブログなど、形に残るものがあると説得力が増します。資格取得や写経レベルの学習でも、継続性と意欲の証明になります。",
  },
  {
    q: "30代・40代のブランクは若手より不利ですか？",
    a: "年齢が上がるほど、ブランクの理由と現在の就業可能性に対する説明の納得感が問われます。一方で、ブランク前の実務経験が厚ければ、その実績がブランクの不安を上回る材料になります。即戦力性と継続就業の意思を、具体的な事実で示すことが重要です。",
  },
  {
    q: "ブランクがあるとエージェントに断られますか？",
    a: "理由を正直に伝えれば、断られることはまれです。むしろエージェントは空白の説明の仕方や、ブランクに寛容な求人の紹介で力になってくれます。事情を隠すと適切なサポートが受けられないため、最初に共有しておくのが得策です。",
  },
];

export default function CareerGapPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/career-gap/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "ブランクの説明方法" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          経歴の空白期間（ブランク）の説明方法
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 空白を不利にしないための準備と説明の型
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          経歴にブランク（空白期間）があると、「転職で不利になるのでは」と不安になる人は多いはずです。しかし企業が本当に見ているのは、空白の長さそのものではなく「その間に何をしていたか」「今、就業できる状態か」です。本記事では、企業が見ているポイント、理由別の説明の型、職務経歴書での書き方、面接での回答テンプレートまで、ブランクを不利にしないための準備を実践的に解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省 job tag（職業情報提供サイト）",
            "各IT転職エージェント公表の選考実務情報（2025年）",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：ブランク説明の基本方針</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              ブランク説明の基本は、<strong>「理由を簡潔・正直に述べ」「空白中の過ごし方を具体的に語り」「今は就業できる状態だと明確に示す」</strong>こと。隠したりごまかしたりせず、事実をベースに前向きな現在地を伝えるのが鉄則です。
            </p>
            <p className="text-slate-700 leading-relaxed">
              空白期間そのものを問題視されることは、実はそれほど多くありません。懸念されるのは「同じ理由で再びブランクが生じないか」「技術的に復帰できるか」という再現性と継続性です。理由ごとに説明の型を用意し、直近のキャッチアップ状況を添えれば、ブランクは十分に乗り越えられます。
            </p>
          </div>
        </section>

        {/* 企業が見る3点 */}
        <section id="what-matters" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">企業がブランクで見ている3点</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            採用側は、空白期間そのものを減点材料にしているわけではありません。次の3つの観点で「採用しても問題ないか」を確認しています。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {whatMatters.map((m, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{m.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 理由別 */}
        <section id="by-reason" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">理由別の説明の型</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ブランクの理由ごとに、伝え方の例文を用意しました。自分の状況に合わせて言い回しを調整してください（○○は記入例）。
          </p>
          <div className="space-y-4">
            {byReason.map((b, i) => (
              <div key={i} className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-100 px-5 py-2 text-sm font-bold text-slate-700">{b.scene}</div>
                <p className="px-5 py-4 text-sm text-slate-700 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            ブランク中の学習成果を見せたい場合は、
            <Link href="/knowledge/github-showcase/" className="text-petrol hover:underline">GitHubでの見せ方</Link>
            も参考にしてください。
          </p>
        </section>

        {/* 職務経歴書 */}
        <section id="resume" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">職務経歴書での書き方</h2>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">○ 在籍期間は正確に書く</h3>
              <p className="text-sm text-slate-600">入退社の年月は事実通りに記載します。期間を偽ると、社会保険記録などとの矛盾で発覚するリスクがあります。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">○ 明確な理由は一行で添える</h3>
              <p className="text-sm text-slate-600">「○○のため○か月の充電期間（学習に専念）」のように備考や自己PR欄で簡潔に触れると、面接前の誤解を防げます。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">○ 空白中の活動を実績欄に書く</h3>
              <p className="text-sm text-slate-600">学習・個人開発・資格取得など、形に残る活動があれば「個人での取り組み」として記載すると空白の印象が和らぎます。</p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            書類全体の作り方は
            <Link href="/knowledge/resume/" className="text-petrol hover:underline">職務経歴書の書き方</Link>
            を参照してください。
          </p>
        </section>

        {/* 面接 */}
        <section id="interview" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接での回答テンプレート</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            面接でブランクを聞かれたら、次の3ステップで答えると過不足なく伝わります。
          </p>
          <div className="space-y-4">
            {[
              { num: "1", title: "理由を簡潔に述べる", desc: "「○○のため○か月の空白がありました」と、長い言い訳をせず事実を端的に伝えます。" },
              { num: "2", title: "空白中の過ごし方を語る", desc: "学習・療養・家庭の事情など、その間の具体的な行動や状況を補足します。成果物があれば提示します。" },
              { num: "3", title: "現在の就業可能性を示す", desc: "「現在は問題なく就業できる状態です」と締め、再現性・継続性への懸念を払拭します。" },
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

        {/* NG */}
        <section id="ng" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">やってはいけないNG行動</h2>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代で特に注意する点</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：実績でブランクの不安を上回る</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                30代はブランク前の実務経験が厚い分、即戦力性で空白の不安を相殺できます。ブランクの理由を簡潔に説明したうえで、過去の成果と直近の学習をセットで示し、「すぐ戦力になる」という印象を残しましょう。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：継続就業の意思を具体的に示す</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                40代は年齢が上がるほど、ブランクの理由と長期就業の見通しに対する説明の納得感が問われます。家庭やキャリアの状況が安定したこと、長く貢献したい意思を、事実ベースで具体的に伝えることが信頼につながります。
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
          <h2 className="text-xl font-bold mb-3">ブランクの説明はプロに相談しよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントは、空白期間に寛容な求人の紹介や説明の仕方のアドバイスで力になってくれます。
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
              { name: "転職回数が多い場合の対策", href: "/knowledge/job-change-count/" },
              { name: "転職を繰り返す人の判断軸", href: "/knowledge/job-hopping/" },
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
              { name: "GitHubでの見せ方", href: "/knowledge/github-showcase/" },
              { name: "転職への不安との向き合い方", href: "/knowledge/anxiety/" },
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
