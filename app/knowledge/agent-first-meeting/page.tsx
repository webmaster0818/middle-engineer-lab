import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "転職エージェント初回面談の流れと準備 | ミドルエンジニア転職ラボ",
  description:
    "転職エージェントの初回面談の流れ、準備するもの、聞かれる質問を徹底解説。30代・40代エンジニアが初回面談で好印象を与え、良い求人を紹介してもらうコツを紹介します。",
};

const faqs = [
  {
    q: "初回面談は対面とオンラインどちらが良いですか？",
    a: "どちらでも構いません。2026年現在、大手IT特化型エージェントの90%以上がオンライン面談に対応しています。移動時間を節約できるオンラインが効率的ですが、対面の方が熱意が伝わりやすいメリットもあります。",
  },
  {
    q: "初回面談に職務経歴書は必要ですか？",
    a: "完成版でなくても、簡単な経歴メモは用意しましょう。使用技術、経験年数、直近のプロジェクト内容を整理しておくと、アドバイザーがより正確に市場価値を判断でき、良い求人を紹介してもらえます。",
  },
  {
    q: "面談でうまく話せるか不安です",
    a: "面談は面接ではないので、ざっくばらんに話して大丈夫です。むしろ本音で話した方が、あなたに合った求人を紹介してもらえます。「まだ転職を決めていない」「年収の希望は○○万円以上」など正直に伝えましょう。",
  },
  {
    q: "面談後にすぐ求人が紹介されますか？",
    a: "多くの場合、面談後1〜3日で最初の求人が紹介されます。ただし希望条件が厳しい場合はマッチする求人が出るまで時間がかかることもあります。条件に優先順位をつけておくとスムーズです。",
  },
  {
    q: "複数のエージェントに登録しても大丈夫ですか？",
    a: "むしろ推奨です。エージェントごとに扱う求人が異なるため、2〜3社に登録して比較するのがベストです。ただし同じ求人に複数エージェント経由で応募しないよう注意しましょう。",
  },
  {
    q: "初回面談で断られることはありますか？",
    a: "稀にありますが、別のエージェントでは対応してもらえるケースが多いです。断られた場合の対処法は別記事「エージェントに断られた時の対処法」で詳しく解説しています。",
  },
];

export default function AgentFirstMeetingPage() {
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
      <ArticleJsonLd
        title="転職エージェント初回面談の流れと準備 | ミドルエンジニア転職ラボ"
        description="転職エージェントの初回面談の流れ、準備するもの、聞かれる質問を徹底解説。30代・40代エンジニアが初回面談で好印象を与え、良い求人を紹介してもらうコツを紹介します。"
        url="/knowledge/agent-first-meeting/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ガイド" },
          { name: "エージェント初回面談" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          転職エージェント初回面談の流れと準備
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 初回面談を最大限活用するコツ
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            転職エージェントの初回面談は、あなたの転職活動の方向性を決める重要な機会です。事前準備をしっかり行うことで、より良い求人を紹介してもらえる確率が格段に上がります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、初回面談の流れと準備すべきこと、聞かれる質問への回答例を解説します。
          </p>
        </section>

        {/* 面談の流れ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">初回面談の流れ（所要時間: 60〜90分）</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "自己紹介・アイスブレイク（5分）", desc: "アドバイザーの自己紹介と、あなたの簡単な自己紹介。リラックスした雰囲気で始まります。" },
              { num: "2", title: "経歴・スキルのヒアリング（20分）", desc: "職務経歴、使用技術、担当プロジェクトの詳細を聞かれます。事前にメモを用意しておくとスムーズです。" },
              { num: "3", title: "転職理由・希望条件の確認（15分）", desc: "なぜ転職したいのか、年収・勤務地・リモートの希望、企業規模の好みなどを確認されます。" },
              { num: "4", title: "市場価値のフィードバック（10分）", desc: "あなたのスキルセットに基づいた市場価値と、目指せる年収レンジを教えてもらえます。" },
              { num: "5", title: "求人の紹介・今後の進め方（15分）", desc: "条件に合う求人の概要を紹介され、今後のスケジュールや進め方を確認します。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 準備チェックリスト */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">初回面談の準備チェックリスト</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">準備項目</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">詳細</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">重要度</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">職務経歴の整理</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">使用技術・役割・成果をメモ</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600 font-bold text-red-600">必須</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">転職理由の言語化</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">ポジティブな表現で準備</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600 font-bold text-red-600">必須</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">希望条件の優先順位</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">年収・勤務地・技術スタック等</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600 font-bold text-red-600">必須</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">職務経歴書</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">完成版でなくてもOK</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600 font-bold text-orange-600">推奨</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">質問リスト</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">聞きたいこと3〜5個</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600 font-bold text-orange-600">推奨</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 好印象を与えるコツ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">アドバイザーに好印象を与える5つのコツ</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 転職の本気度を示す</h3>
              <p className="text-sm text-blue-700">「良い求人があれば3ヶ月以内に転職したい」のように具体的な時期を伝えると、アドバイザーの優先度が上がります。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 希望条件に優先順位をつける</h3>
              <p className="text-sm text-blue-700">「絶対条件」と「あれば嬉しい条件」を分けて伝えましょう。全ての条件を満たす求人は稀なため、優先順位が明確だと紹介しやすくなります。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. レスポンスを早くする</h3>
              <p className="text-sm text-blue-700">求人紹介への返信が早い人ほど、良い求人を優先的に紹介してもらえます。24時間以内の返信を心がけましょう。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 正直に話す</h3>
              <p className="text-sm text-blue-700">転職回数の多さ、スキル不足な分野なども正直に伝えましょう。隠すとミスマッチが起き、結果的に不利になります。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">5. エージェントにも質問する</h3>
              <p className="text-sm text-blue-700">「今の転職市場でどの技術が求められていますか？」「自分の経歴で注意すべき点は？」など積極的に質問すると、より深いアドバイスをもらえます。</p>
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
          <h2 className="text-xl font-bold mb-3">まずは初回面談で相談してみよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントなら、エンジニアの転職に精通したアドバイザーが無料で相談に乗ってくれます。
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
              { name: "エージェントに断られた時の対処法", href: "/knowledge/agent-rejection/" },
              { name: "直接応募vsエージェント", href: "/knowledge/direct-apply/" },
              { name: "複数エージェントの活用法", href: "/knowledge/multiple-agents/" },
              { name: "転職のタイムライン", href: "/knowledge/timeline/" },
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
