import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "LinkedInを使ったエンジニア転職術 | ミドルエンジニア転職ラボ",
  description:
    "LinkedInを活用したエンジニア転職の方法を解説。プロフィールの書き方、スカウトを増やすコツ、外資系IT企業への転職に活用する方法を30代・40代向けに紹介します。",
};

const faqs = [
  {
    q: "LinkedInは日本でも転職に使えますか？",
    a: "はい。2026年現在、日本のLinkedInユーザーは400万人を超え、IT業界での利用率は特に高いです。外資系IT企業だけでなく、メガベンチャーや日系大手もLinkedIn経由で採用活動を行っています。",
  },
  {
    q: "プロフィールは英語と日本語どちらで書くべきですか？",
    a: "両方書くのがベストです。LinkedInは複数言語でプロフィールを作成できます。外資系を狙うなら英語は必須、日系企業も視野に入れるなら日本語プロフィールも追加しましょう。",
  },
  {
    q: "現職の同僚にLinkedInの活動がバレませんか？",
    a: "設定で「転職活動中」のシグナルをリクルーターのみに表示できます。また、自社の社員にはプロフィール更新の通知を非表示にする設定も可能です。プライバシー設定を事前に確認しましょう。",
  },
  {
    q: "コネクションはどのくらい増やすべきですか？",
    a: "最低でも500コネクション以上を目指しましょう。コネクション数が多いほどプロフィールの表示回数が増え、スカウトが届きやすくなります。同業のエンジニアやリクルーターとつながるのが効果的です。",
  },
  {
    q: "LinkedIn Premiumは必要ですか？",
    a: "必須ではありませんが、InMailの送信やプロフィール閲覧者の詳細確認ができるため、積極的に転職活動する場合は有用です。無料プランでも十分スカウトは届きます。",
  },
  {
    q: "LinkedInと転職エージェントは併用すべきですか？",
    a: "はい、併用がおすすめです。LinkedInでスカウトを受けつつ、IT特化型エージェントで非公開求人にもアクセスすることで、最大限の選択肢を確保できます。",
  },
];

export default function LinkedInPage() {
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
        title="LinkedInを使ったエンジニア転職術 | ミドルエンジニア転職ラボ"
        description="LinkedInを活用したエンジニア転職の方法を解説。プロフィールの書き方、スカウトを増やすコツ、外資系IT企業への転職に活用する方法を30代・40代向けに紹介します。"
        url="/knowledge/linkedin/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ガイド" },
          { name: "LinkedIn転職術" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          LinkedInを使ったエンジニア転職術
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | プロフィール最適化とスカウト獲得のコツ
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            LinkedInはエンジニア転職において強力な武器になります。特に外資系IT企業やメガベンチャーへの転職を考えている30代・40代エンジニアにとって、LinkedInのプロフィール最適化は必須です。
          </p>
        </section>

        {/* プロフィール最適化 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スカウトが届くプロフィールの書き方</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "ヘッドラインに専門分野を明記", desc: "「Software Engineer」ではなく「Senior Backend Engineer | Go / Kubernetes / AWS | 10+ years」のように具体的に。リクルーターはヘッドラインで検索します。" },
              { num: "2", title: "Aboutセクションを充実させる", desc: "自己紹介文を300〜500字で記載。専門分野、得意技術、キャリアのハイライト、今後の方向性を盛り込みましょう。" },
              { num: "3", title: "Experience（職歴）に成果を数値で記載", desc: "各社での役割と成果を箇条書きで。「Improved API response time by 75%」のように数値を含めると注目されやすいです。" },
              { num: "4", title: "Skills & Endorsementsを充実させる", desc: "関連スキルを50個以上登録し、同僚にEndorsementを依頼しましょう。スキル検索でのヒット率が上がります。" },
              { num: "5", title: "プロフィール写真を設定する", desc: "写真なしのプロフィールは信頼性が低く見られます。清潔感のあるビジネスカジュアルの写真を使いましょう。" },
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

        {/* スカウトを増やすコツ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スカウトを増やす5つの行動</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 週1回以上投稿する</h3>
              <p className="text-sm text-blue-700">技術記事のシェア、業界ニュースへのコメント、学びの共有など。アクティブなユーザーほどプロフィールが表示されやすくなります。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. リクルーターからのコネクションを承認する</h3>
              <p className="text-sm text-blue-700">IT企業のリクルーターからのリクエストは積極的に承認しましょう。直接スカウトが届くきっかけになります。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 「Open to Work」を設定する</h3>
              <p className="text-sm text-blue-700">リクルーターのみに表示する設定にすれば、現職にバレずに転職意思を示せます。スカウト率が大幅に上がります。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. 英語プロフィールを作成する</h3>
              <p className="text-sm text-blue-700">外資系IT企業のリクルーターは英語で検索します。英語プロフィールを追加するだけでスカウトの質と量が変わります。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">5. 推薦（Recommendation）をもらう</h3>
              <p className="text-sm text-blue-700">元同僚や上司から推薦文を書いてもらいましょう。第三者からの評価はプロフィールの信頼性を大きく高めます。</p>
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
          <h2 className="text-xl font-bold mb-3">LinkedInと併用してエージェントも活用しよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            LinkedInのスカウトに加え、IT特化型エージェントの非公開求人も活用すれば、転職の選択肢を最大化できます。
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
              { name: "スカウト型転職サービスの活用法", href: "/knowledge/scout/" },
              { name: "海外IT企業への転職ガイド", href: "/knowledge/overseas/" },
              { name: "直接応募vsエージェント", href: "/knowledge/direct-apply/" },
              { name: "リファラル転職のメリット・デメリット", href: "/knowledge/referral/" },
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
