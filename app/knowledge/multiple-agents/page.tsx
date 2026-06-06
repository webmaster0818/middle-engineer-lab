import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "転職エージェントは複数登録すべき？【3社がベストな理由】",
  description:
    "転職エージェントは何社に登録すべきか？複数登録のメリット・デメリット、3社がベストバランスな理由、おすすめの組み合わせパターンをエンジニア転職の観点から解説します。",
};

const faqs = [
  {
    q: "何社くらい登録するのがベスト？",
    a: "3社がベストです。IT特化型2社+総合型1社の組み合わせが最も効率的です。2社以下だと求人の幅が狭くなり、4社以上だと面談や連絡の管理が煩雑になります。",
  },
  {
    q: "同じ求人を複数のエージェントから紹介されたら？",
    a: "どちらか1社を通じて応募しましょう。同じ企業に複数のエージェントから応募すると、企業側に管理能力を疑われる可能性があります。先に紹介してくれたエージェントを優先するか、より詳しい情報を持っているエージェントを選びましょう。",
  },
  {
    q: "複数登録していることは伝えるべき？",
    a: "正直に伝えましょう。「他にも2社登録しています」と伝えることで、エージェントの対応が丁寧になる傾向があります。他社との競争意識が働き、より質の高い求人を紹介してもらえることもあります。",
  },
  {
    q: "登録後に使わなくなったエージェントは退会すべき？",
    a: "転職活動が終了したら退会しましょう。放置すると不要な連絡が続きます。退会手続きは各社のマイページまたはメール1通で完了します。",
  },
  {
    q: "エージェントの担当者の質にバラつきがある場合は？",
    a: "担当変更を依頼しましょう。同じエージェント内でも担当者によって質は大きく異なります。「技術に詳しい方に変更してほしい」と具体的にリクエストすると、適切な担当者に変更してもらえます。",
  },
  {
    q: "複数エージェントを使い分けるコツは？",
    a: "各社の強みに応じて使い分けましょう。IT特化型は技術面接対策や年収交渉、総合型は求人の幅広さやスカウト機能を活用します。メインで使うエージェントを1社決め、残りの2社はサブとして活用するのが効率的です。",
  },
];

export default function MultipleAgentsPage() {
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
        title="転職エージェントは複数登録すべき？【3社がベストな理由】"
        description="転職エージェントは何社に登録すべきか？複数登録のメリット・デメリット、3社がベストバランスな理由、おすすめの組み合わせパターンをエンジニア転職の観点から解説します。"
        url="/knowledge/multiple-agents/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "転職エージェントは複数登録すべき？" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          転職エージェントは複数登録すべき？【3社がベストな理由】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年4月 | エージェント複数登録の活用術
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            転職エージェントは1社だけに絞るべきか、それとも複数に登録すべきか。結論から言えば、3社の複数登録がベストです。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、なぜ3社がベストなのか、複数登録のメリット・デメリット、おすすめの組み合わせパターンを解説します。
          </p>
        </section>

        {/* なぜ3社 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">3社がベストバランスな理由</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-red-500">1社</p>
                <p className="text-sm text-slate-600 mt-1">求人の幅が狭い。比較対象がなく判断しにくい。</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">3社</p>
                <p className="text-sm text-slate-600 mt-1">求人の幅が広く、担当者の質も比較できる。管理も可能。</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-red-500">5社以上</p>
                <p className="text-sm text-slate-600 mt-1">面談・連絡の管理が煩雑。同一求人の重複リスクも高まる。</p>
              </div>
            </div>
          </div>
        </section>

        {/* メリット */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">複数登録の3つのメリット</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 非公開求人のカバー率が上がる</h3>
              <p className="text-sm text-blue-700">
                各エージェントが持つ非公開求人は異なります。1社だけではアクセスできない求人が、複数登録することで見えてきます。特にIT特化型エージェントはそれぞれ独自の非公開求人を保有しています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 担当者の質を比較できる</h3>
              <p className="text-sm text-blue-700">
                エージェントの質は担当者次第です。複数登録することで、技術理解度、レスポンスの速さ、提案の的確さを比較でき、信頼できるメイン担当者を見つけやすくなります。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 年収交渉の材料が増える</h3>
              <p className="text-sm text-blue-700">
                複数のオファーを持つことで、年収交渉がしやすくなります。「A社からは○○万円のオファーをいただいています」と伝えることで、B社の年収提示額が上がることもあります。
              </p>
            </div>
          </div>
        </section>

        {/* おすすめの組み合わせ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">おすすめの3社組み合わせパターン</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">30代バックエンドエンジニア向け</h3>
              <p className="text-sm text-slate-600">
                レバテックキャリア（メイン / IT特化） + Geekly（サブ / Web・ゲーム特化） + doda（補完 / 総合型で求人幅を確保）
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">40代マネジメント志向向け</h3>
              <p className="text-sm text-slate-600">
                ビズリーチ（メイン / ハイクラス） + レバテックキャリア（サブ / IT特化） + JACリクルートメント（補完 / 外資・管理職）
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">30代フロントエンドエンジニア向け</h3>
              <p className="text-sm text-slate-600">
                Geekly（メイン / Web系に強い） + レバテックキャリア（サブ / IT特化） + ワークポート（補完 / 若手〜ミドル）
              </p>
            </div>
          </div>
        </section>

        {/* 管理のコツ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">複数エージェントの管理テクニック</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">スプレッドシートで一元管理する</h3>
              <p className="text-sm text-slate-600">
                紹介された求人、応募状況、面接日程をスプレッドシートで管理しましょう。エージェント名、企業名、ポジション、年収レンジ、選考ステータスの列を作り、重複応募を防ぎます。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">メインとサブを明確に決める</h3>
              <p className="text-sm text-slate-600">
                3社のうち1社をメインと決め、密にコミュニケーションを取りましょう。残り2社はサブとして、メインではカバーできない求人や情報を補完する位置づけで活用します。
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
          <h2 className="text-xl font-bold mb-3">まずはIT特化型エージェントから登録しよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            エンジニア転職の成功には、IT特化型エージェントへの登録が第一歩。無料で市場価値の診断も受けられます。
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
              { name: "IT転職エージェントの選び方", href: "/knowledge/how-to-choose/" },
              { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
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
