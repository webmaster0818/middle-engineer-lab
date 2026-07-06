import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "英語面接の準備【エンジニア転職／フレーズ例・想定問答】";
const DESCRIPTION =
  "エンジニア転職の英語面接を、準備の手順・自己紹介の型・頻出質問の回答フレーズ・コーディング面接で使う英語・聞き返し表現まで実践的に解説。30代40代が英語に自信がなくても乗り切るための準備をまとめます。";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/english-interview/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：英語面接の準備方針" },
  { id: "steps", label: "英語面接の準備ステップ" },
  { id: "intro", label: "自己紹介（Tell me about yourself）の型" },
  { id: "phrases", label: "頻出質問の回答フレーズ" },
  { id: "coding", label: "コーディング面接で使う英語" },
  { id: "recover", label: "聞き取れないとき・詰まったときの表現" },
  { id: "midlife", label: "30代・40代が押さえるべき点" },
  { id: "faq", label: "よくある質問" },
];

const steps = [
  { num: "1", title: "面接の言語と形式を確認する", desc: "すべて英語か、一部だけ英語か、技術面接も英語かを事前に確認します。リクルーターやエージェントに聞けば教えてもらえます。" },
  { num: "2", title: "自己紹介と頻出質問を英語で用意する", desc: "丸暗記ではなく、要点をキーフレーズで覚えます。日本語で内容を固めてから英語化すると詰まりにくくなります。" },
  { num: "3", title: "声に出して反復練習する", desc: "黙読では本番で言葉が出ません。録音して聞き返す、模擬面接を受けるなど、実際に話す練習を重ねます。" },
  { num: "4", title: "技術用語の英語読みを慣らす", desc: "普段カタカナで使う技術用語（database, deploy, latency など）の発音と言い回しに慣れておくと、技術面接で詰まりません。" },
];

const phrases = [
  {
    q: "Why are you looking for a new opportunity?（転職理由）",
    a: "I'm looking for an environment where I can take on more ownership of system design and work with a global team. （より裁量を持ち、グローバルなチームで働ける環境を求めています）",
  },
  {
    q: "What are your strengths?（強み）",
    a: "My strength is improving reliability through automation. For example, I reduced manual deployment work by introducing CI/CD. （自動化で信頼性を高めることが強みです。例えばCI/CD導入で手動デプロイ作業を削減しました）",
  },
  {
    q: "Tell me about a challenging project.（困難だったプロジェクト）",
    a: "In my previous role, we faced performance issues during peak traffic. I led the redesign of the caching layer, which improved response time significantly. （前職でピーク時の性能問題に直面し、キャッシュ層の再設計を主導して応答時間を大きく改善しました）",
  },
  {
    q: "Why do you want to join us?（志望動機）",
    a: "I'm impressed by your product and engineering culture. I believe my experience in scalable backend systems can contribute to your team. （プロダクトと技術文化に魅力を感じています。スケーラブルなバックエンドの経験で貢献できると考えています）",
  },
  {
    q: "Do you have any questions for us?（逆質問）",
    a: "Yes. Could you tell me how technical decisions are made within the team? （はい。チーム内で技術的な意思決定がどのように行われるか教えていただけますか）",
  },
];

const codingPhrases = [
  { en: "Let me make sure I understand the problem correctly.", ja: "問題を正しく理解できているか確認させてください。" },
  { en: "Can I clarify a few assumptions before I start?", ja: "始める前にいくつか前提を確認してもいいですか。" },
  { en: "I'll start with a brute-force approach, then optimize.", ja: "まず素朴な解法から始めて、その後最適化します。" },
  { en: "The time complexity of this approach is O(n log n).", ja: "この解法の計算量は O(n log n) です。" },
  { en: "Let me walk through an example to test my logic.", ja: "例を使ってロジックを確認してみます。" },
  { en: "I think there's an edge case here we should handle.", ja: "ここに対応すべきエッジケースがあると思います。" },
];

const recoverPhrases = [
  { en: "Sorry, could you repeat the question, please?", ja: "すみません、質問をもう一度お願いできますか。" },
  { en: "Just to make sure I understood — you're asking about ...?", ja: "確認ですが、〜について聞かれていますか。" },
  { en: "Let me take a moment to organize my thoughts.", ja: "少し考えをまとめる時間をください。" },
  { en: "That's a good question. Let me think about it for a second.", ja: "良い質問ですね。少し考えさせてください。" },
  { en: "Could you give me a bit more context on that?", ja: "もう少し背景を教えていただけますか。" },
];

const faqs = [
  {
    q: "英語に自信がなくても英語面接は乗り切れますか？",
    a: "完璧な英語より、内容が伝わることが重要です。技術力と論理的な説明力があれば、多少の文法ミスや発音の癖は大きな問題になりません。頻出質問の回答を準備し、聞き返しや言い直しの表現を覚えておけば、詰まっても落ち着いて対応できます。準備量が自信に直結するため、声に出した反復練習が最も効果的です。",
  },
  {
    q: "自己紹介はどのくらいの長さが適切ですか？",
    a: "1〜2分が目安です。現在の役割、得意な技術領域、直近の代表的な成果を簡潔にまとめます。職歴を時系列で全部話すのではなく、応募ポジションに関連する経験を選んで構成しましょう。丸暗記すると不自然になりやすいため、キーフレーズを覚えて自分の言葉で話す形が自然です。",
  },
  {
    q: "技術面接も英語の場合、どう準備すればいいですか？",
    a: "普段カタカナで使う技術用語の英語での読み方・言い回しに慣れておくことが重要です。コーディング面接では、前提確認・方針説明・計算量の説明などを英語で言えるよう、定型フレーズを準備します。考える過程を声に出す（think aloud）文化なので、黙り込まず英語で実況できると評価されます。",
  },
  {
    q: "質問が聞き取れなかったらどうすればいいですか？",
    a: "遠慮せず聞き返して問題ありません。『Sorry, could you repeat that?』や『Just to make sure I understood...』と確認するのは、むしろ丁寧でプロフェッショナルな対応です。聞き取れないまま的外れな回答をする方がマイナスです。聞き返しと言い換えのフレーズをいくつか用意しておきましょう。",
  },
  {
    q: "オンライン英語面接で気をつけることは？",
    a: "音声と通信環境の安定が最優先です。マイク付きイヤホンを使い、静かな場所で受けます。回線が不安定だと聞き取りづらく、互いの負担になります。また、画面越しは表情や反応が伝わりにくいため、相づちやうなずきを意識し、ゆっくりはっきり話すと意思疎通がスムーズになります。",
  },
  {
    q: "TOEICのスコアは英語面接で必要ですか？",
    a: "スコアは英語力の目安として書類段階で参考にされることはありますが、面接で重要なのは実際に話せるかどうかです。スコアが高くても会話で詰まれば評価は上がりません。逆にスコアがそこまで高くなくても、頻出質問にしっかり答えられれば十分に通用します。実践的な会話練習に時間を割きましょう。",
  },
  {
    q: "30代・40代で英語面接に臨むときの注意点は？",
    a: "ミドル層は技術力・経験で勝負できるため、英語は『伝われば十分』と割り切って準備するのが現実的です。完璧を目指して萎縮するより、自分の実績を具体的に語ることに集中しましょう。設計判断やリーダーシップの経験は、多少シンプルな英語でも十分に評価されます。想定問答を声に出して練習し、本番で落ち着いて話せる状態を作ることが鍵です。",
  },
];

export default function EnglishInterviewPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/english-interview/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "英語面接の準備" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          英語面接の準備【エンジニア転職／フレーズ例・想定問答】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 自信がなくても乗り切る準備とフレーズ集
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          外資系やグローバルポジションでは、英語面接が避けられないこともあります。とはいえ、英語面接で問われるのは完璧な語学力ではなく「内容が伝わるか」です。本記事では、準備のステップ、自己紹介の型、頻出質問の回答フレーズ、コーディング面接で使う英語、聞き返しの表現まで、そのまま使える形でまとめます。
        </p>

        <DataNote surveyedAt="2026年6月" />

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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：英語面接の準備方針</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              英語面接で評価されるのは、<strong>完璧な英語ではなく「技術と経験が論理的に伝わるか」</strong>です。頻出質問の回答をキーフレーズで準備し、声に出して反復練習することが、最も効果の高い対策です。
            </p>
            <p className="text-slate-700 leading-relaxed">
              丸暗記より要点を押さえて自分の言葉で話せる状態を目指し、聞き返しや言い直しの表現も用意しておきましょう。詰まっても落ち着いて対応できれば、多少の文法ミスや発音の癖は問題になりません。特にミドル層は、技術力と実績という土台があるため、英語は「伝われば十分」と割り切って臨むのが現実的です。
            </p>
          </div>
        </section>

        {/* 準備ステップ */}
        <section id="steps" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">英語面接の準備ステップ</h2>
          <div className="space-y-4">
            {steps.map((item, i) => (
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

        {/* 自己紹介 */}
        <section id="intro" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">自己紹介（Tell me about yourself）の型</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            自己紹介は「現在の役割 → 得意領域 → 直近の成果 → 志望の接続」の順で1〜2分にまとめます。テンプレートの一例です。
          </p>
          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <div className="bg-slate-100 px-5 py-2 text-sm font-bold text-slate-700">自己紹介テンプレート（記入例）</div>
            <p className="px-5 py-4 text-sm text-slate-700 leading-relaxed">
              I'm a backend engineer with about ten years of experience, mainly in Java and AWS. Currently, I lead a small team building scalable web services. Recently, I redesigned our core API to improve performance and reliability. I'm now looking for an opportunity to work in a more global environment, which is why I'm excited about this role.
            </p>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            内容の作り方は
            <Link href="/knowledge/self-pr/" className="text-petrol hover:underline">自己PRの書き方</Link>
            の4ステップを英語化すると整理しやすくなります。
          </p>
        </section>

        {/* 頻出質問フレーズ */}
        <section id="phrases" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">頻出質問の回答フレーズ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            英語面接でよく問われる質問と、回答に使えるフレーズ例です。数値や経験は自分のものに差し替えてください。
          </p>
          <div className="space-y-4">
            {phrases.map((p, i) => (
              <div key={i} className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-100 px-5 py-2 text-sm font-bold text-slate-700">{p.q}</div>
                <p className="px-5 py-4 text-sm text-slate-700 leading-relaxed">{p.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* コーディング面接英語 */}
        <section id="coding" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">コーディング面接で使う英語</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            技術面接では、考える過程を英語で実況できると評価されます。よく使う定型フレーズを覚えておきましょう。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="px-4 py-3 text-left font-bold">English</th>
                  <th className="px-4 py-3 text-left font-bold">意味</th>
                </tr>
              </thead>
              <tbody>
                {codingPhrases.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 text-slate-700">{row.en}</td>
                    <td className="px-4 py-3 text-slate-600">{row.ja}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 聞き返し */}
        <section id="recover" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">聞き取れないとき・詰まったときの表現</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            聞き返しや時間稼ぎのフレーズを用意しておくと、本番で詰まっても落ち着いて立て直せます。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="px-4 py-3 text-left font-bold">English</th>
                  <th className="px-4 py-3 text-left font-bold">意味</th>
                </tr>
              </thead>
              <tbody>
                {recoverPhrases.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 text-slate-700">{row.en}</td>
                    <td className="px-4 py-3 text-slate-600">{row.ja}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ミドル */}
        <section id="midlife" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代が押さえるべき点</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">英語は「伝われば十分」と割り切る</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                ミドル層は技術力と経験という強い土台があります。完璧な英語を目指して萎縮するより、自分の実績を具体的に語ることに集中しましょう。設計判断やリーダーシップの経験は、シンプルな英語でも十分に評価されます。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">想定問答を声に出して仕上げる</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">
                準備量が自信に直結します。自己紹介・頻出質問・逆質問を声に出して反復し、本番で落ち着いて話せる状態を作っておくことが、最大の対策です。可能なら模擬面接やオンライン英会話で実戦感覚を養いましょう。
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            外資系の選考全体の流れは
            <Link href="/knowledge/foreign-interview/" className="text-petrol hover:underline">外資系IT企業の面接対策</Link>
            で解説しています。
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
          <h2 className="text-xl font-bold mb-3">グローバル求人はエージェントと進めよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            外資・グローバルに強いエージェントなら、英語面接の傾向や準備のアドバイスも受けられます。
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
              { name: "外資系IT企業の面接対策", href: "/knowledge/foreign-interview/" },
              { name: "海外で働くエンジニア転職", href: "/knowledge/overseas/" },
              { name: "技術面接対策ガイド", href: "/knowledge/tech-interview/" },
              { name: "自己PRの書き方・例文", href: "/knowledge/self-pr/" },
              { name: "面接の逆質問", href: "/knowledge/reverse-questions/" },
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
