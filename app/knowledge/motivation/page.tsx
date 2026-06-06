import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "転職の志望動機の作り方【エンジニア例文付き】| ミドルエンジニア転職ラボ",
  description:
    "エンジニア転職で面接官に刺さる志望動機の書き方を例文付きで解説。30代・40代ミドルエンジニアが説得力ある志望動機を作るコツを紹介します。",
};

const faqs = [
  {
    q: "志望動機はどのくらいの長さが適切ですか？",
    a: "面接では1〜2分で話せる長さ（300〜400字程度）が適切です。職務経歴書に記載する場合は200〜300字にまとめましょう。長すぎると要点がぼやけ、短すぎると熱意が伝わりません。",
  },
  {
    q: "未経験の技術スタックの企業に応募する場合の志望動機は？",
    a: "「なぜその技術に興味があるのか」「自主学習の内容」「これまでの経験がどう活きるか」の3点を盛り込みましょう。例：『Go言語での大規模システム開発に携わりたく、個人でGo製のCLIツールを開発しています。Java8年の経験で培った設計力を活かせると考えています。』",
  },
  {
    q: "「御社の成長性に魅力を感じました」は良い志望動機ですか？",
    a: "抽象的すぎるため避けましょう。具体的に「御社のプロダクト○○が△△の課題を解決している点に共感し、自分の□□の経験を活かして貢献したい」のように、具体的なプロダクトや技術と自身の経験を結びつけることが重要です。",
  },
  {
    q: "前職の不満を志望動機に含めても良いですか？",
    a: "ネガティブな理由はそのまま伝えず、ポジティブに変換しましょう。例：「残業が多い」→「より効率的な開発プロセスの環境で技術力を高めたい」、「技術が古い」→「モダンな技術スタックで最新の開発手法を実践したい」と表現します。",
  },
  {
    q: "複数社に応募する場合、志望動機は使い回しても大丈夫ですか？",
    a: "絶対に避けましょう。企業ごとにカスタマイズが必須です。企業の技術ブログ、プロダクト、開発文化を調査し、「なぜこの会社でなければならないのか」を具体的に語れるようにしましょう。テンプレートの使い回しは面接官に必ず見抜かれます。",
  },
  {
    q: "志望動機の添削はどこで受けられますか？",
    a: "IT特化型の転職エージェントに登録すれば、志望動機の添削を無料で受けられます。レバテックキャリアやGeeklyのキャリアアドバイザーは企業ごとの選考傾向を把握しており、通過率を高める具体的なアドバイスをもらえます。",
  },
];

export default function MotivationPage() {
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
        title="転職の志望動機の作り方【エンジニア例文付き】| ミドルエンジニア転職ラボ"
        description="エンジニア転職で面接官に刺さる志望動機の書き方を例文付きで解説。30代・40代ミドルエンジニアが説得力ある志望動機を作るコツを紹介します。"
        url="/knowledge/motivation/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ガイド" },
          { name: "志望動機の作り方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          転職の志望動機の作り方【エンジニア例文付き】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 面接官に刺さる志望動機のコツ
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            エンジニア転職において、志望動機は「なぜこの会社で働きたいのか」を伝える最も重要な要素です。技術力があっても志望動機が弱いと選考を通過できません。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、30代・40代エンジニアが説得力のある志望動機を作成するための具体的な方法と例文を紹介します。
          </p>
        </section>

        {/* 志望動機の基本構成 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">志望動機の基本構成（PREP法）</h2>
          <div className="space-y-4">
            {[
              { num: "P", title: "Point（結論）", desc: "「御社で○○を実現したい」と結論から述べる。面接官が最初に知りたいのは結論です。" },
              { num: "R", title: "Reason（理由）", desc: "なぜその企業なのかを具体的に。プロダクト、技術スタック、開発文化など具体的な要素を挙げる。" },
              { num: "E", title: "Example（具体例）", desc: "自身の経験やスキルとの接点を示す。「前職での○○の経験が御社の△△に活かせる」と橋渡しする。" },
              { num: "P", title: "Point（再結論）", desc: "入社後のビジョンを語り、貢献意欲を示す。「○○の実現に貢献したい」で締める。" },
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

        {/* 例文セクション */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア志望動機の例文</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-4">
            <h3 className="font-bold text-slate-700 mb-3 text-sm">良い例（35歳・バックエンドエンジニア → SaaS企業）</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              御社のプロダクト「○○」が中小企業のDX推進という社会課題を解決している点に強く共感しています。私は過去8年間、ECサイトのバックエンド開発に従事し、TypeScript/Node.jsを用いたAPI設計やマイクロサービスアーキテクチャの導入を推進してきました。直近のプロジェクトではAPIレスポンスタイムを60%改善し、チームのデプロイ頻度を月1回から週2回に向上させた実績があります。この経験を活かし、御社プロダクトのスケーラビリティ向上と、中小企業がより使いやすいサービスの実現に貢献したいと考えております。
            </p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 className="font-bold text-red-700 mb-3 text-sm">悪い例（避けるべき書き方）</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              御社の成長性に魅力を感じ応募しました。前職では残業が多く、もっとワークライフバランスの良い環境で働きたいと思いました。技術力を高められる環境だと聞いたので応募しました。
            </p>
            <p className="text-xs text-red-600 mt-2">
              → 企業固有の理由がなく、ネガティブな転職理由がそのまま出ている。どの会社にも使い回せる内容で熱意が伝わらない。
            </p>
          </div>
        </section>

        {/* パターン別例文 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">パターン別・志望動機の書き方</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">転職パターン</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">アピールポイント</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">注意点</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">SIer → Web系</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">大規模システムの設計力、品質管理の経験</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">モダン技術への学習意欲を示す</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">Web系 → メガベンチャー</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">アジャイル経験、プロダクト改善の実績</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">大規模トラフィック対応への意欲</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">事業会社 → スタートアップ</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">ビジネス理解力、事業視点での開発</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">不確実性への耐性をアピール</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">開発 → マネジメント</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">チーム育成、プロジェクト管理の経験</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">技術力も保持していることを示す</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 差がつくポイント */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">志望動機で差がつく5つのポイント</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 企業の技術ブログを事前に読む</h3>
              <p className="text-sm text-blue-700">
                企業の技術ブログやエンジニアの登壇資料を読み、具体的な技術課題や取り組みに触れることで「この会社を深く理解している」と伝わります。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 数値で実績を語る</h3>
              <p className="text-sm text-blue-700">
                「パフォーマンス改善の経験あり」ではなく「レスポンスタイムを200ms→50msに改善」。数値があると説得力が格段に上がります。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 入社後のビジョンを具体的に語る</h3>
              <p className="text-sm text-blue-700">
                「スキルアップしたい」ではなく「御社の○○プロダクトのAPI基盤をマイクロサービス化し、開発速度の向上に貢献したい」と具体的に。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 転職理由と志望動機に一貫性を持たせる</h3>
              <p className="text-sm text-blue-700">
                転職理由が「技術の幅を広げたい」なら、志望動機も「御社のマルチクラウド環境でインフラからアプリまで一気通貫で経験したい」と繋げましょう。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">5. プロダクトへの共感を示す</h3>
              <p className="text-sm text-blue-700">
                実際にプロダクトを使った感想や改善アイデアを伝えると、入社後の活躍イメージが面接官に伝わります。
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
          <h2 className="text-xl font-bold mb-3">志望動機のプロ添削を無料で受けよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントに登録すれば、企業ごとの選考傾向を把握したアドバイザーが志望動機を無料で添削してくれます。
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
              { name: "自己分析ガイド", href: "/knowledge/self-analysis/" },
              { name: "技術面接対策ガイド", href: "/knowledge/tech-interview/" },
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
              { name: "行動面接（STAR法）完全ガイド", href: "/knowledge/behavioral/" },
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
