import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "セカンドキャリアとしてのエンジニア転職 | ミドルエンジニア転職ラボ",
  description:
    "異業種からエンジニアへのセカンドキャリア転職を徹底解説。30代・40代が未経験からエンジニアになるためのロードマップと成功事例を紹介します。",
};

const faqs = [
  {
    q: "30代後半からエンジニアに転職するのは遅いですか？",
    a: "遅くありません。ただし20代と同じ戦略では難しいため、前職の業界知識やビジネススキルを武器にする戦略が必要です。例えば金融業界出身ならFinTech企業、医療業界出身ならヘルスケアIT企業など、ドメイン知識が活きる企業を狙いましょう。",
  },
  {
    q: "未経験からエンジニアになるまでの期間は？",
    a: "フルタイムで学習する場合は3〜6ヶ月、働きながらの場合は6〜12ヶ月が目安です。プログラミングスクールを活用すれば効率的に学べますが、独学でも十分可能です。重要なのはポートフォリオを作成し、実践力を示すことです。",
  },
  {
    q: "どのプログラミング言語から始めるべきですか？",
    a: "Web開発を目指すならJavaScript（React）またはPython、業務システム系ならJavaがおすすめです。最初から複数言語を学ぶのではなく、1つの言語で実用的なアプリを作れるレベルを目指しましょう。",
  },
  {
    q: "年収は大幅に下がりますか？",
    a: "未経験でのエンジニア転職では、一時的に年収が下がるケースが多いです。目安として前職の70〜80%程度になることが多いですが、2〜3年の経験を積めば前職以上の年収に到達できる可能性があります。",
  },
  {
    q: "プログラミングスクールに通うべきですか？",
    a: "独学でポートフォリオを作れる自信がなければ通うことをおすすめします。ただしスクール選びは慎重に。転職保証付きのスクールや、実務に近いカリキュラムを提供しているスクールを選びましょう。",
  },
  {
    q: "セカンドキャリア転職でエージェントは使えますか？",
    a: "経験者向けのIT特化型エージェントは未経験では利用しにくいですが、ポートフォリオや資格を持っていれば対応してもらえるケースもあります。未経験特化のエージェントと併用するのがベストです。",
  },
];

export default function SecondCareerPage() {
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
        title="セカンドキャリアとしてのエンジニア転職 | ミドルエンジニア転職ラボ"
        description="異業種からエンジニアへのセカンドキャリア転職を徹底解説。30代・40代が未経験からエンジニアになるためのロードマップと成功事例を紹介します。"
        url="/knowledge/second-career/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ガイド" },
          { name: "セカンドキャリア転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          セカンドキャリアとしてのエンジニア転職
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 異業種からエンジニアへのロードマップ
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            「IT業界に興味がある」「手に職をつけたい」「将来性のある仕事がしたい」。異業種からエンジニアへの転職を考える30代・40代は増えています。前職の経験は決して無駄にはなりません。
          </p>
        </section>

        {/* ロードマップ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">未経験からエンジニアへの6ステップ</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "目指す方向を決める（2週間）", desc: "Web開発、インフラ、データ分析など方向性を決定。IT業界に詳しい人に話を聞いたり、IT特化型エージェントに相談するのが効果的です。" },
              { num: "2", title: "基礎学習（1〜3ヶ月）", desc: "HTML/CSS/JavaScriptの基礎、またはPythonの基礎を学習。Progateやドットインストールで基礎を固めましょう。" },
              { num: "3", title: "実践学習（2〜3ヶ月）", desc: "Webアプリケーションを1つ作り上げる。React + Node.jsやDjango等のフレームワークを使い、実用的なアプリを開発します。" },
              { num: "4", title: "ポートフォリオ作成（1ヶ月）", desc: "作成したアプリをポートフォリオとしてGitHubに公開。README、デプロイ済みURLを整備します。" },
              { num: "5", title: "求人応募・面接準備（1〜2ヶ月）", desc: "前職の経験とIT技術を掛け合わせた志望動機を作成。未経験歓迎の求人に応募しつつ、スキルマッチする企業も狙います。" },
              { num: "6", title: "入社・キャッチアップ（3〜6ヶ月）", desc: "入社後は積極的に質問し、コードレビューを活用してスキルアップ。半年で独り立ちを目指します。" },
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

        {/* 前職の強み */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">前職の経験が活きるIT職種</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">前職</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">おすすめIT職種</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">活かせるスキル</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">営業・マーケティング</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">セールスエンジニア、Growth Engineer</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">顧客理解力、数値分析力</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">金融・会計</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">FinTechエンジニア、データエンジニア</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">ドメイン知識、論理的思考力</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">医療・製薬</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">ヘルスケアIT、医療情報システム</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">業界知識、規制への理解</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">製造・物流</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">IoTエンジニア、SCMシステム開発</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">業務プロセス理解、品質管理</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 成功のコツ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">セカンドキャリア転職を成功させる5つのコツ</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 前職の経験を「掛け算」で活かす</h3>
              <p className="text-sm text-blue-700">「エンジニアスキル x 前職のドメイン知識」は強力な武器。純粋なエンジニアにはない付加価値になります。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 完璧を目指さず「作って見せる」</h3>
              <p className="text-sm text-blue-700">完璧なコードより動くアプリを作ることが重要。ポートフォリオがあるだけで書類選考の通過率が大幅に上がります。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 年収ダウンを一時的な投資と捉える</h3>
              <p className="text-sm text-blue-700">最初の1〜2年は年収が下がる可能性がありますが、3年後には前職以上の年収に到達できる見込みがあります。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. コミュニティに参加する</h3>
              <p className="text-sm text-blue-700">勉強会やもくもく会に参加して仲間を作りましょう。同じ境遇の仲間がいるとモチベーションが維持しやすいです。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">5. 長期的な視点を持つ</h3>
              <p className="text-sm text-blue-700">エンジニアのキャリアは5年、10年かけて構築するもの。焦らず着実にスキルを積み上げましょう。</p>
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

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">キャリアチェンジの相談はプロに</h2>
          <p className="text-blue-100 text-sm mb-4">IT特化型エージェントに相談すれば、あなたの前職の経験を活かせる求人を紹介してもらえます。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "30代未経験からのエンジニア転職", href: "/knowledge/inexperienced-30s/" },
              { name: "キャリアプラン設計", href: "/knowledge/career-plan/" },
              { name: "ポートフォリオ作成ガイド", href: "/knowledge/portfolio/" },
              { name: "市場価値の調べ方", href: "/knowledge/market-value/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
