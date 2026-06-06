import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "エンジニア転職の自己分析ガイド【強み発見法】| ミドルエンジニア転職ラボ",
  description:
    "エンジニア転職に必要な自己分析の方法を徹底解説。30代・40代エンジニアが自分の強みを明確にし、キャリアの方向性を定めるためのフレームワークを紹介します。",
};

const faqs = [
  {
    q: "自己分析にはどのくらいの時間をかけるべきですか？",
    a: "最低でも1週間は確保しましょう。1日30分〜1時間、過去のプロジェクトを振り返りながらノートに書き出す作業を繰り返します。急いで済ませると表面的な分析になり、面接での深掘り質問に対応できなくなります。",
  },
  {
    q: "技術力以外にアピールできる強みが見つかりません",
    a: "エンジニアの強みは技術力だけではありません。「複雑な要件を整理する力」「非エンジニアへの説明力」「障害発生時の冷静な対応力」なども立派な強みです。過去に周囲から感謝された場面を思い出すと発見しやすいです。",
  },
  {
    q: "キャリアの棚卸しで最初にやるべきことは？",
    a: "まず全プロジェクトを時系列で書き出しましょう。各プロジェクトについて「使用技術・役割・チーム規模・成果・学び」を記録します。スプレッドシートで一覧化すると、自分のスキルの変遷やパターンが見えてきます。",
  },
  {
    q: "Will-Can-Mustフレームワークの使い方は？",
    a: "Will（やりたいこと）・Can（できること）・Must（市場から求められること）の3つの円の重なりがキャリアの最適解です。Will=技術的興味、Can=実務経験のあるスキル、Must=求人市場でニーズが高い技術、として書き出しましょう。",
  },
  {
    q: "自分の市場価値が分からず不安です",
    a: "転職エージェントに登録して市場価値診断を受けるのが最も確実です。レバテックキャリアでは無料のスキルシート診断があり、現在のスキルセットで目指せる年収レンジを教えてもらえます。複数エージェントの意見を比較するとより正確になります。",
  },
  {
    q: "自己分析の結果を転職活動にどう活かせばいですか？",
    a: "自己分析で明確になった「強み・実績・価値観」を、職務経歴書の自己PR・志望動機・面接回答の軸にします。一貫したストーリーを持つことで、面接官に「この人は自分のキャリアを真剣に考えている」と伝わります。",
  },
];

export default function SelfAnalysisPage() {
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
        title="エンジニア転職の自己分析ガイド【強み発見法】| ミドルエンジニア転職ラボ"
        description="エンジニア転職に必要な自己分析の方法を徹底解説。30代・40代エンジニアが自分の強みを明確にし、キャリアの方向性を定めるためのフレームワークを紹介します。"
        url="/knowledge/self-analysis/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ガイド" },
          { name: "自己分析ガイド" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エンジニア転職の自己分析ガイド【強み発見法】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 自分の強みを明確にするフレームワーク
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            エンジニア転職の成功は自己分析から始まります。「何ができるか」「何がしたいか」「市場は何を求めているか」を明確にすることで、書類選考から面接まで一貫した軸で転職活動を進められます。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、30代・40代エンジニアが効率的に自己分析を行うための具体的なフレームワークとステップを解説します。
          </p>
        </section>

        {/* 自己分析のステップ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">自己分析の5ステップ</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "キャリアの棚卸し", desc: "全プロジェクトを時系列で書き出し、使用技術・役割・成果・学びを記録する。スプレッドシートで一覧化すると全体像が見える。" },
              { num: "2", title: "スキルマップの作成", desc: "技術スキル（言語・FW・インフラ）と非技術スキル（設計力・マネジメント・コミュニケーション）を分けて可視化する。" },
              { num: "3", title: "Will-Can-Must分析", desc: "やりたいこと（Will）、できること（Can）、市場が求めていること（Must）を書き出し、重なる領域を特定する。" },
              { num: "4", title: "価値観の明確化", desc: "「技術的チャレンジ」「安定性」「ワークライフバランス」「年収」など、自分が仕事に何を求めるかを優先順位付けする。" },
              { num: "5", title: "キャリアストーリーの言語化", desc: "分析結果を「過去→現在→未来」のストーリーとしてまとめる。志望動機や面接回答の軸になる。" },
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

        {/* スキルマップ例 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルマップの作り方</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">カテゴリ</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">スキル</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">経験年数</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">習熟度</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">バックエンド</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">Java / Spring Boot</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">5年</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">設計・レビュー可能</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">フロントエンド</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">React / TypeScript</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">3年</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">実装可能</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">インフラ</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">AWS (EC2, RDS, S3)</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">4年</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">構築・運用可能</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">マネジメント</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">チームリード（3〜5名）</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">2年</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">1on1・評価経験あり</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Will-Can-Must分析 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Will-Can-Must分析の実践例</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 className="font-bold text-green-800 mb-3">Will（やりたいこと）</h3>
              <ul className="text-sm text-green-700 space-y-2">
                <li>・大規模トラフィックの技術課題に挑戦</li>
                <li>・チームの技術力向上に貢献</li>
                <li>・プロダクトの成長を実感できる環境</li>
                <li>・リモートワーク中心の働き方</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-bold text-blue-800 mb-3">Can（できること）</h3>
              <ul className="text-sm text-blue-700 space-y-2">
                <li>・TypeScript/Go でのAPI設計・実装</li>
                <li>・AWS上のインフラ設計・構築</li>
                <li>・5名チームのテックリード</li>
                <li>・パフォーマンス改善・コスト最適化</li>
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <h3 className="font-bold text-orange-800 mb-3">Must（求められていること）</h3>
              <ul className="text-sm text-orange-700 space-y-2">
                <li>・クラウドネイティブ技術の経験</li>
                <li>・マイクロサービス設計力</li>
                <li>・CI/CD パイプライン構築</li>
                <li>・若手エンジニアの育成力</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 陥りやすい失敗 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">自己分析で陥りやすい5つの失敗</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 技術スキルだけに偏る</h3>
              <p className="text-sm text-blue-700">
                30代以上のエンジニアは技術力に加え、「プロジェクト推進力」「チームマネジメント」「ビジネス理解」も重要な強みです。非技術スキルも必ず棚卸ししましょう。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 他人と比較して自信を失う</h3>
              <p className="text-sm text-blue-700">
                SNSで見かける優秀なエンジニアと自分を比較する必要はありません。自分独自の経験の組み合わせこそが市場価値です。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 成果を過小評価する</h3>
              <p className="text-sm text-blue-700">
                「当たり前にやっていたこと」が実は高いスキルである場合が多いです。日常的にやっている業務でも、言語化してみると立派な実績になります。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 一人で完結させようとする</h3>
              <p className="text-sm text-blue-700">
                同僚や上司に「自分の強みは何だと思うか」聞いてみましょう。転職エージェントの客観的な評価も非常に参考になります。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">5. 分析で終わり行動に移さない</h3>
              <p className="text-sm text-blue-700">
                自己分析は手段であり目的ではありません。分析結果を職務経歴書・志望動機・面接対策に具体的に反映させましょう。
              </p>
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
          <h2 className="text-xl font-bold mb-3">プロに自己分析をサポートしてもらおう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントのキャリアアドバイザーが、あなたの強みを客観的に分析し、最適なキャリアプランを提案してくれます。
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
              { name: "志望動機の作り方", href: "/knowledge/motivation/" },
              { name: "市場価値の調べ方", href: "/knowledge/market-value/" },
              { name: "キャリアプラン設計", href: "/knowledge/career-plan/" },
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
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
