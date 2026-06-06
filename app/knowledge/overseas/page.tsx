import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "海外IT企業への転職ガイド【日本から応募】| ミドルエンジニア転職ラボ",
  description:
    "日本から海外IT企業に転職する方法を徹底解説。GAFAM等の外資系IT企業への応募方法、ビザ取得、英語面接対策を30代・40代エンジニア向けに紹介します。",
};

const faqs = [
  { q: "海外IT企業に転職するには英語力はどのくらい必要ですか？", a: "TOEIC800点以上、またはIELTS 6.5以上が目安です。技術面接では専門用語を英語で説明できるレベルが求められます。ただし完璧な英語力は不要で、技術力が高ければ多少の英語の不完全さは許容されます。" },
  { q: "日本にいながら海外企業で働けますか？", a: "リモートワークを採用している海外企業も増えています。特にヨーロッパのIT企業はリモートフレンドリーな傾向があります。ただし時差やビザの問題があるため、事前に確認が必要です。" },
  { q: "年収はどのくらい上がりますか？", a: "米国のIT企業では日本の2〜3倍の年収が一般的です。シニアエンジニアで年収$150,000〜$250,000（約2,200万〜3,700万円）、GAFAMでは$200,000〜$400,000+も珍しくありません。" },
  { q: "ビザの取得は難しいですか？", a: "米国のH-1Bビザは抽選があり取得が難しいですが、企業がスポンサーになってくれれば可能です。カナダやオーストラリアはスキルベースのビザが取りやすく、IT人材の移民に積極的です。" },
  { q: "海外転職にエージェントは使えますか？", a: "Robert Half、Michael Page、Haysなど外資系に強いエージェントが利用できます。日本のIT特化型エージェントでも外資系日本法人の求人を扱っている場合があります。" },
  { q: "40代でも海外転職は可能ですか？", a: "はい。海外では年齢よりもスキルと経験が重視されます。特にシニアエンジニアやアーキテクトのポジションは経験豊富な40代に適しています。" },
];

export default function OverseasPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="海外IT企業への転職ガイド【日本から応募】| ミドルエンジニア転職ラボ" description="日本から海外IT企業に転職する方法を徹底解説。GAFAM等の外資系IT企業への応募方法、ビザ取得、英語面接対策を30代・40代エンジニア向けに紹介します。" url="/knowledge/overseas/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "転職ガイド" }, { name: "海外IT企業への転職" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">海外IT企業への転職ガイド【日本から応募】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | 外資系IT企業への転職ロードマップ</p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">海外IT企業でのキャリアは、年収の大幅アップとグローバルな経験を得られる魅力的な選択肢です。日本にいながら応募・選考を進められるケースも増えています。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">海外IT企業への転職ステップ</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "英語力の強化（3〜6ヶ月）", desc: "技術英語のリーディング・ライティングから始め、スピーキング力を強化。LeetCodeを英語で解く習慣をつけましょう。" },
              { num: "2", title: "LinkedInプロフィールの英語化", desc: "英語プロフィールを作成し、職歴・スキル・成果を英語で記載。Open to Workをリクルーターのみに設定。" },
              { num: "3", title: "コーディングテスト対策（1〜2ヶ月）", desc: "LeetCode Medium〜Hard問題を200問以上練習。GAFAM系は特にアルゴリズムの出題が多いです。" },
              { num: "4", title: "システム設計面接対策", desc: "System Design Interviewの定番書を読み、大規模システムの設計を英語で説明できるよう練習。" },
              { num: "5", title: "応募・選考（2〜3ヶ月）", desc: "企業の採用ページ、LinkedIn、リファラル経由で応募。面接はオンラインで4〜6回が一般的です。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{item.num}</span>
                <div><h3 className="font-bold text-slate-800 mb-1">{item.title}</h3><p className="text-sm text-slate-600">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">国別・IT転職の特徴</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">国</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">年収相場（シニア）</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">ビザ難易度</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">特徴</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-4 py-3 text-slate-600">米国</td><td className="border border-slate-200 px-4 py-3 text-slate-600">$150K〜$400K</td><td className="border border-slate-200 px-4 py-3 text-slate-600">高い</td><td className="border border-slate-200 px-4 py-3 text-slate-600">最高年収、GAFAM本社</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 px-4 py-3 text-slate-600">カナダ</td><td className="border border-slate-200 px-4 py-3 text-slate-600">C$100K〜C$200K</td><td className="border border-slate-200 px-4 py-3 text-slate-600">中程度</td><td className="border border-slate-200 px-4 py-3 text-slate-600">移民しやすい、IT需要大</td></tr>
                <tr><td className="border border-slate-200 px-4 py-3 text-slate-600">シンガポール</td><td className="border border-slate-200 px-4 py-3 text-slate-600">S$100K〜S$200K</td><td className="border border-slate-200 px-4 py-3 text-slate-600">中程度</td><td className="border border-slate-200 px-4 py-3 text-slate-600">アジア拠点、英語環境</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 px-4 py-3 text-slate-600">ドイツ</td><td className="border border-slate-200 px-4 py-3 text-slate-600">€70K〜€120K</td><td className="border border-slate-200 px-4 py-3 text-slate-600">低い</td><td className="border border-slate-200 px-4 py-3 text-slate-600">WLB重視、IT人材歓迎</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">海外転職を成功させるポイント</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">1. まず外資系日本法人から始める</h3><p className="text-sm text-blue-700">いきなり海外オフィスが不安なら、Google日本法人やAmazon Japan等の外資系日本法人から始めるのも良い戦略です。社内異動で海外に行ける可能性もあります。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">2. OSSやテックブログで国際的な実績を作る</h3><p className="text-sm text-blue-700">英語でのOSS貢献やテックブログは海外企業へのアピールになります。GitHubの活動は言語の壁を超えたポートフォリオです。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">3. 生活コストも含めた総合判断</h3><p className="text-sm text-blue-700">米国は年収が高い反面、住居費・医療費・税金も高額です。手取りと生活水準を総合的に比較しましょう。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">4. ネットワーキングを活用する</h3><p className="text-sm text-blue-700">海外IT企業はリファラルでの採用が多いです。LinkedInで海外のエンジニアとつながり、社内紹介を依頼する方法も有効です。</p></div>
            <div className="bg-blue-50 rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-2">5. 家族の理解を得る</h3><p className="text-sm text-blue-700">海外転職は家族の生活にも大きな影響があります。事前に十分な話し合いを行い、家族全員が納得した上で決断しましょう。</p></div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
                <div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">外資系IT企業への転職をサポート</h2>
          <p className="text-blue-100 text-sm mb-4">IT特化型エージェントなら、外資系日本法人の求人を多数紹介。まずは国内から外資系キャリアを始めましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "LinkedInを使った転職術", href: "/knowledge/linkedin/" },
              { name: "海外から日本に帰国転職", href: "/knowledge/return-japan/" },
              { name: "コーディングテスト対策", href: "/knowledge/coding-test/" },
              { name: "システム設計面接の対策", href: "/knowledge/system-design/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
