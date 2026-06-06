import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "行動面接（STAR法）の完全ガイド | ミドルエンジニア転職ラボ",
  description:
    "行動面接（Behavioral Interview）の対策をSTAR法で徹底解説。30代・40代エンジニアが過去の経験を効果的に伝えるための頻出質問と回答例を紹介します。",
};

const faqs = [
  {
    q: "STAR法とは何ですか？",
    a: "Situation（状況）、Task（課題）、Action（行動）、Result（結果）の頭文字を取ったフレームワークです。過去の経験を構造的に伝えることで、面接官に分かりやすく、かつ説得力のある回答ができます。",
  },
  {
    q: "行動面接はどのような企業で行われますか？",
    a: "外資系IT企業（Amazon、Google、Meta等）では必ず行われます。日系企業でもメガベンチャーを中心に導入が進んでいます。特にAmazonはLeadership Principlesに基づいた行動面接が有名です。",
  },
  {
    q: "エピソードは何個くらい用意すべきですか？",
    a: "8〜10個のエピソードを用意しておけば、ほとんどの質問に対応できます。「困難を乗り越えた経験」「チームを率いた経験」「失敗から学んだ経験」「対立を解消した経験」など、異なるテーマのエピソードをバランスよく準備しましょう。",
  },
  {
    q: "失敗体験を正直に話しても大丈夫ですか？",
    a: "むしろ正直に話すべきです。面接官が知りたいのは「失敗からどう学び、どう改善したか」です。失敗を隠したり、責任を他人に転嫁する回答は大きなマイナスになります。",
  },
  {
    q: "技術面接と行動面接の比率はどのくらいですか？",
    a: "企業によりますが、外資系IT企業ではおおよそ技術面接60〜70%、行動面接30〜40%です。日系企業は行動面接の比率が高い傾向があります。どちらも対策が必要です。",
  },
  {
    q: "行動面接の練習方法はありますか？",
    a: "STAR法で回答を書き出した後、鏡の前や友人相手に練習するのが効果的です。また、転職エージェントのキャリアアドバイザーに模擬面接を依頼すると、プロからのフィードバックがもらえます。",
  },
];

export default function BehavioralPage() {
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
        title="行動面接（STAR法）の完全ガイド | ミドルエンジニア転職ラボ"
        description="行動面接（Behavioral Interview）の対策をSTAR法で徹底解説。30代・40代エンジニアが過去の経験を効果的に伝えるための頻出質問と回答例を紹介します。"
        url="/knowledge/behavioral/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ガイド" },
          { name: "行動面接（STAR法）" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          行動面接（STAR法）の完全ガイド
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 頻出質問と効果的な回答フレームワーク
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            行動面接（Behavioral Interview）は、過去の行動から将来のパフォーマンスを予測する面接手法です。30代・40代のエンジニアにとっては、豊富な実務経験をアピールできるチャンスです。
          </p>
        </section>

        {/* STAR法 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">STAR法の使い方</h2>
          <div className="space-y-4">
            {[
              { num: "S", title: "Situation（状況）", desc: "いつ、どこで、どのような状況だったかを簡潔に説明。「前職で月間1000万PVのECサイトを運用していた際、ブラックフライデーに向けてパフォーマンス改善が急務でした。」" },
              { num: "T", title: "Task（課題）", desc: "自分に課された役割や目標を明確に。「テックリードとして、2週間以内にページ表示速度を50%改善するという目標が設定されました。」" },
              { num: "A", title: "Action（行動）", desc: "自分が取った具体的な行動を詳細に。チームの行動ではなく「自分が」何をしたかを語る。「私はまずパフォーマンスプロファイリングを実施し、ボトルネックがDBクエリにあることを特定しました。」" },
              { num: "R", title: "Result（結果）", desc: "行動の結果を数値で示す。「APIレスポンスタイムが200ms→50msに改善し、ブラックフライデーの売上は前年比150%を達成しました。」" },
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

        {/* 頻出質問 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">頻出質問と回答のポイント</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">質問テーマ</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">質問例</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">評価ポイント</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">リーダーシップ</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">チームを率いて困難を乗り越えた経験は？</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">主体性、巻き込み力</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">困難の克服</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">最も困難だったプロジェクトは？</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">問題解決力、粘り強さ</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">対立の解消</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">チーム内で意見が対立した時どうしたか？</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">コミュニケーション力</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">失敗からの学び</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">大きな失敗をした経験と、そこから何を学んだか？</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">自己認識、成長性</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">技術的判断</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">データ不足の中で重要な技術決定をした経験は？</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">判断力、リスク管理</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 注意点 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">行動面接で避けるべき5つのNG</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 「私たちは〜しました」と主語をぼかす</h3>
              <p className="text-sm text-blue-700">面接官はあなた個人の行動を知りたいです。「チームで」ではなく「私がリードして」「私が提案して」と自分の行動を明確にしましょう。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 結果を数値で示さない</h3>
              <p className="text-sm text-blue-700">「改善しました」ではなく「レスポンスタイムを75%改善しました」。数値がない回答は説得力に欠けます。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 仮定の話をする</h3>
              <p className="text-sm text-blue-700">「もし○○なら〜する」は行動面接の回答としてNGです。過去に実際に起きた具体的なエピソードで回答しましょう。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 失敗を他人のせいにする</h3>
              <p className="text-sm text-blue-700">「PMの要件定義が甘かったので」のように他人に責任を転嫁すると、面接官に大きなマイナス印象を与えます。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">5. 回答が長すぎる</h3>
              <p className="text-sm text-blue-700">1つのエピソードは2〜3分で完結させましょう。要点を絞り、面接官が深掘りする余地を残すのが理想です。</p>
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
          <h2 className="text-xl font-bold mb-3">面接対策のプロに相談しよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントなら、企業ごとの面接傾向に合わせた行動面接の対策をサポートしてくれます。
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
              { name: "技術面接対策ガイド", href: "/knowledge/tech-interview/" },
              { name: "志望動機の作り方", href: "/knowledge/motivation/" },
              { name: "コーディングテスト対策", href: "/knowledge/coding-test/" },
              { name: "システム設計面接の対策", href: "/knowledge/system-design/" },
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
