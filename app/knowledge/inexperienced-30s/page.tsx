import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "30代未経験からエンジニア転職は可能？【成功パターンと注意点】",
  description:
    "30代未経験からITエンジニアへの転職は可能なのか？成功する人の共通パターン、年収の現実、おすすめの学習ルート、転職エージェント活用法を実データとともに解説します。",
};

const faqs = [
  {
    q: "30代未経験からエンジニア転職は本当に可能ですか？",
    a: "可能です。ただし20代と比べてハードルが上がるのは事実です。30代前半であれば未経験OKの求人は一定数あり、30代後半になると前職の業界知識を武器にできるポジション（社内SE、DX推進など）が現実的な選択肢です。",
  },
  {
    q: "30代未経験エンジニアの初年度年収はどのくらい？",
    a: "初年度の年収は300万〜400万円が相場です。前職の年収より下がるケースが多いですが、2〜3年の実務経験を積めば500万円以上に到達する人も少なくありません。スキルアップのスピードが年収上昇に直結します。",
  },
  {
    q: "プログラミングスクールに通うべき？",
    a: "独学に自信がない場合は有効です。ただし高額なスクールに通えば必ず転職できるわけではありません。スクール選びでは「転職保証の条件」「ポートフォリオ制作サポート」「企業紹介の実績」を必ず確認しましょう。",
  },
  {
    q: "どの言語から学ぶべきですか？",
    a: "Web系を目指すならJavaScriptとTypeScript、業務系ならJava、インフラ系ならLinuxとAWSの基礎がおすすめです。まずは1つの言語を深く学び、ポートフォリオを作れるレベルを目指しましょう。",
  },
  {
    q: "SES企業に入るのはありですか？",
    a: "最初のキャリアとしてはありです。SES企業は未経験者の採用枠が多く、実務経験を積む場として有効です。ただし案件ガチャのリスクがあるため、1〜2年の実務経験を積んだら自社開発企業への転職を検討しましょう。",
  },
  {
    q: "未経験エンジニア転職に強いエージェントは？",
    a: "ワークポート（未経験IT転職に強み）、doda（求人数が多く未経験枠も豊富）、マイナビIT AGENT（20代〜30代前半向け）の3社がおすすめです。複数登録して求人の幅を広げるのが成功の秘訣です。",
  },
];

export default function Inexperienced30sPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "30代未経験からエンジニア転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          30代未経験からエンジニア転職は可能？【成功パターンと注意点】
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年4月 | 30代未経験からのエンジニア転職ロードマップ
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            「30代からエンジニアに転職したいけど、未経験では無理なのでは」と不安を感じている方は少なくありません。結論から言えば、30代未経験からのエンジニア転職は可能です。ただし、闇雲に挑戦しても成功率は低く、戦略的な準備が必要です。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、30代未経験からエンジニア転職に成功した人の共通パターン、避けるべき失敗例、具体的な学習ロードマップを解説します。
          </p>
        </section>

        {/* 現実のデータ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代未経験エンジニア転職の現実をデータで見る</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">約28%</p>
                <p className="text-sm text-slate-600 mt-1">IT業界の中途入社者のうち異業種出身者の割合</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">300〜400万</p>
                <p className="text-sm text-slate-600 mt-1">未経験エンジニアの初年度年収相場</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">3〜6ヶ月</p>
                <p className="text-sm text-slate-600 mt-1">転職活動にかかる平均期間</p>
              </div>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            IT業界は慢性的な人材不足が続いており、経済産業省の調査では2030年に最大79万人のIT人材が不足すると予測されています。この状況が30代未経験者にもチャンスを生んでいます。
          </p>
        </section>

        {/* 成功パターン */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">成功する人の3つの共通パターン</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 前職の業界知識を武器にする</h3>
              <p className="text-sm text-blue-700">
                「営業経験者がSaaS企業のカスタマーサクセスエンジニアへ」「金融業界出身者がフィンテック企業の社内SEへ」など、前職の業界知識とITスキルを掛け合わせたポジションを狙う人は成功率が高いです。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. ポートフォリオで実力を証明する</h3>
              <p className="text-sm text-blue-700">
                「未経験です」だけでは企業は採用できません。オリジナルのWebアプリケーションを1つ以上開発し、GitHubで公開しましょう。設計意図やこだわった点をREADMEに書くことで、技術への意欲と学習力をアピールできます。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 現実的な目標設定をする</h3>
              <p className="text-sm text-blue-700">
                いきなりGAFAMを目指すのではなく、まずは実務経験を積める環境を選ぶことが重要です。SES企業や受託開発企業で1〜2年の実務経験を積み、その後に自社開発企業へステップアップするキャリアパスが現実的です。
              </p>
            </div>
          </div>
        </section>

        {/* 学習ロードマップ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">未経験からの学習ロードマップ（6ヶ月計画）</h2>
          <div className="space-y-4">
            {[
              { period: "1〜2ヶ月目", title: "基礎学習", desc: "HTML/CSS/JavaScriptの基礎を習得。Progateやドットインストールなどの学習サービスを活用。1日2〜3時間の学習を習慣化する。" },
              { period: "3〜4ヶ月目", title: "フレームワーク学習", desc: "ReactやVue.jsなどのフレームワーク、またはRuby on RailsやLaravelなどのサーバーサイドを学習。Udemyの講座がコスパ良好。" },
              { period: "5ヶ月目", title: "ポートフォリオ制作", desc: "オリジナルのWebアプリケーションを企画・設計・開発。GitHubに公開し、READMEも整備する。" },
              { period: "6ヶ月目", title: "転職活動開始", desc: "職務経歴書の作成、転職エージェントへの登録、企業への応募を開始。同時並行で学習も継続する。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center min-w-[80px] h-8 rounded-full bg-blue-600 text-white font-bold text-xs shrink-0">
                  {item.period}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 注意点 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代未経験転職で避けるべき3つの失敗</h2>
          <div className="space-y-4">
            <div className="bg-red-50 rounded-lg p-5">
              <h3 className="font-bold text-red-800 mb-2">1. 高額スクールに頼りすぎる</h3>
              <p className="text-sm text-red-700">
                50万〜80万円のスクールに通えば自動的に転職できるわけではありません。スクールはあくまで学習のペースメーカーです。自分で考えてコードを書く力を養わなければ、面接で見抜かれます。
              </p>
            </div>
            <div className="bg-red-50 rounded-lg p-5">
              <h3 className="font-bold text-red-800 mb-2">2. 年収にこだわりすぎる</h3>
              <p className="text-sm text-red-700">
                未経験からの転職では、前職より年収が下がることがほとんどです。最初の1〜2年は「投資期間」と割り切り、スキルアップに集中する覚悟が必要です。経験を積めば年収は確実に上がります。
              </p>
            </div>
            <div className="bg-red-50 rounded-lg p-5">
              <h3 className="font-bold text-red-800 mb-2">3. 応募先を絞りすぎる</h3>
              <p className="text-sm text-red-700">
                「自社開発しか受けない」「Web系しか興味ない」と最初から絞りすぎると、選択肢が極端に狭まります。まずは実務経験を積める環境を幅広く探し、経験を武器に次のステップを狙いましょう。
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
          <h2 className="text-xl font-bold mb-3">未経験からのエンジニア転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントなら、未経験者向けの求人紹介から職務経歴書の添削まで無料でサポートしてくれます。
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
              { name: "30代エンジニアの年収相場", href: "/knowledge/salary-30s/" },
              { name: "エンジニアの転職回数と影響", href: "/knowledge/job-hopping/" },
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
