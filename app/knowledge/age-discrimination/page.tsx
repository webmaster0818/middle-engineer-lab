import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "エンジニア転職の年齢差別【実態と対策】30代・40代が知るべきこと | ミドルエンジニア転職ラボ",
  description:
    "エンジニア転職における年齢差別の実態と対策を徹底解説。30代・40代が直面する壁、法的な保護、年齢をカバーする戦略、企業選びのポイントを紹介します。",
};

const faqs = [
  {
    q: "エンジニアの転職に年齢制限はある？",
    a: "法的には年齢制限は禁止されています（雇用対策法第10条）。しかし実態として、35歳を超えると書類選考の通過率が低下する傾向があります。ただしIT業界は人手不足が深刻なため、他業界に比べて年齢による不利は小さいです。",
  },
  {
    q: "35歳限界説は本当？",
    a: "2026年時点では「35歳限界説」はほぼ崩壊しています。IT人材の慢性的な不足により、35歳以上のエンジニアの転職成功率は年々上がっています。ただし、35歳以上では「即戦力」「マネジメント経験」が求められる傾向が強くなります。",
  },
  {
    q: "40代エンジニアの転職は難しい？",
    a: "30代に比べると選択肢は狭くなりますが、不可能ではありません。40代で転職に成功するエンジニアの共通点は「専門性の高さ」「マネジメント経験」「直近の技術キャッチアップ」の3つです。",
  },
  {
    q: "年齢差別を受けたらどうすればいい？",
    a: "求人票に年齢制限を記載することは違法です。面接で年齢を理由に不採用にされた場合は、ハローワークや労働局に相談できます。実際にはエージェントを通じて応募することで、年齢によるフィルタリングを回避しやすくなります。",
  },
  {
    q: "年齢が高いと年収が下がる？",
    a: "必ずしも下がりません。専門性やマネジメント経験が評価されれば、年齢に関係なく年収UPは可能です。ただし、技術が古く（COBOL、レガシーJavaなど）モダンな技術に移行できない場合は年収が下がるリスクがあります。",
  },
  {
    q: "年齢差別が少ない企業の見分け方は？",
    a: "社員の年齢分布が公開されている企業、中途採用比率が高い企業、外資系企業は年齢差別が少ない傾向です。エージェントに「40代の採用実績がある企業」と条件を伝えれば、年齢に寛容な企業を紹介してもらえます。",
  },
];

export default function AgeDiscriminationPage() {
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
        title="エンジニア転職の年齢差別【実態と対策】30代・40代が知るべきこと"
        description="エンジニア転職における年齢差別の実態と対策を徹底解説。30代・40代が直面する壁と年齢をカバーする戦略を紹介します。"
        url="/knowledge/age-discrimination/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ガイド" },
          { name: "エンジニア転職の年齢差別" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エンジニア転職の年齢差別【実態と対策】30代・40代が知るべきこと
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | ミドルエンジニアのための年齢差別対策
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            「35歳限界説」「40代の転職は無理」――エンジニアの転職には年齢に関する様々な言説があります。本記事では、データに基づいた年齢差別の実態と、30代・40代が年齢を武器に変えるための具体的な戦略を解説します。
          </p>
        </section>

        {/* 実態データ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年齢差別の実態データ（2026年）</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">82%</p>
              <p className="text-sm text-blue-600">30代のIT転職成功率</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">65%</p>
              <p className="text-sm text-blue-600">40代のIT転職成功率</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">79万人</p>
              <p className="text-sm text-blue-600">IT人材不足数（2026年推計）</p>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              経済産業省の調査によると、2026年のIT人材不足は約79万人に達する見通しです。この深刻な人材不足を背景に、年齢による選考フィルタリングは減少傾向にあります。
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              ただし、年齢が上がるにつれて「ポテンシャル採用」ではなく「即戦力採用」が求められるため、スキルと実績のアピールがより重要になります。30代は書類選考さえ通れば年齢はほぼ問題にならず、40代でも専門性が高ければ採用される市場環境です。
            </p>
          </div>
        </section>

        {/* 法的な保護 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">法的な保護</h2>
          <div className="border border-slate-200 rounded-lg p-5">
            <h3 className="font-bold text-slate-800 mb-3">雇用対策法第10条（年齢制限の禁止）</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              事業主は、労働者の募集・採用において、年齢に関わりなく均等な機会を与えなければなりません。これにより、求人票への年齢制限の記載は原則禁止されています。
            </p>
            <div className="bg-slate-50 rounded-lg p-4">
              <p className="text-xs text-slate-500 mb-2">例外として認められるケース：</p>
              <ul className="text-xs text-slate-600 space-y-1">
                <li>- 定年年齢を上限として募集する場合</li>
                <li>- 法令で年齢制限が設けられている場合</li>
                <li>- 特定の年齢層が不足している場合（キャリア形成を目的）</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 年齢をカバーする戦略 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年齢をカバーする5つの戦略</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. 直近の技術スタックを最新に保つ</h3>
              <p className="text-sm text-blue-700">
                「年齢が高い＝技術が古い」という偏見を覆すために、直近2〜3年で最新技術を使った経験を持つことが重要。個人開発や副業でモダンな技術スタックを経験しておきましょう。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. マネジメント経験を積む</h3>
              <p className="text-sm text-blue-700">
                35歳以上では、チームリード・テックリード・EM経験が大きなアドバンテージに。3〜5人のチームでもリード経験があれば、マネジメントポジションへの道が開けます。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 専門領域を明確にする</h3>
              <p className="text-sm text-blue-700">
                「何でもできます」より「セキュリティのスペシャリストです」の方が40代以上では評価されます。10年以上のキャリアで培った専門性を明確にアピールしましょう。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. エージェントを積極的に活用する</h3>
              <p className="text-sm text-blue-700">
                エージェント経由の応募は、書類選考での年齢フィルタリングを回避しやすい。アドバイザーが企業に推薦文を書いてくれるため、年齢よりもスキル・経験が評価されやすくなります。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">5. アウトプットを増やす</h3>
              <p className="text-sm text-blue-700">
                技術ブログ、OSS活動、登壇経験は年齢に関係なく評価される。特に40代以上は「教える力」「発信力」が求められるため、アウトプットの質と量が重要です。
              </p>
            </div>
          </div>
        </section>

        {/* 企業選びのポイント */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年齢差別が少ない企業の選び方</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">外資系IT企業</h3>
              <p className="text-sm text-slate-600">年齢よりもスキルと成果で評価する文化が根付いている。Google、Amazon、Microsoft、Salesforceなど。英語力が求められるが、年齢の壁は最も低い。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">中途採用比率が高い企業</h3>
              <p className="text-sm text-slate-600">中途採用比率70%以上の企業は、年齢・経歴の多様性を重視する傾向がある。企業の採用ページや口コミサイトで確認可能。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">成長フェーズのスタートアップ</h3>
              <p className="text-sm text-slate-600">シリーズB〜C以降のスタートアップは、経験豊富なシニアエンジニアを積極採用。若い組織に30代・40代の経験が求められるケースが多い。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">DX推進中の大手企業</h3>
              <p className="text-sm text-slate-600">DX推進部門は中途採用が中心で、年齢よりも経験・スキルを重視。製造業、金融、小売などのIT部門は40代の採用実績が豊富。</p>
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
          <h2 className="text-xl font-bold mb-3">年齢を武器に転職を成功させよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントなら、30代・40代のエンジニア転職に精通したアドバイザーが無料でサポートしてくれます。
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
              { name: "40代エンジニアの転職リアル", href: "/knowledge/40s-reality/" },
              { name: "35歳エンジニアの転職は限界？", href: "/age/35/" },
              { name: "エンジニアからマネジメントへ", href: "/knowledge/management/" },
              { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
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
