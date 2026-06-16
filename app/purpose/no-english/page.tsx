import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "英語不要のIT企業へ転職【国内向け開発の見極め方】",
  description:
    "英語を使わずに働けるエンジニア転職先を正直に解説。英語不要な企業・職種の実態、求人での見極め方、将来も英語が発生しにくい領域、注意点を30-40代向けに整理します。",
};

const faqs = [
  {
    q: "本当に英語をまったく使わないエンジニアの仕事はある？",
    a: "あります。国内顧客向けの業務システム開発、官公庁・自治体向けシステム、国内SaaSの保守・運用、社内システム部門などは、業務上ほぼ英語を使わずに働けます。ただし『公式ドキュメントやエラーメッセージが英語』という場面は職種を問わず発生します。ここでいう英語不要は『会話・メール・会議で英語を使わない』という意味で、技術情報の英語読解まで完全にゼロにできるわけではない点は理解しておきましょう。",
  },
  {
    q: "英語のドキュメントが読めなくても大丈夫？",
    a: "翻訳ツールや日本語の技術記事が充実しているため、英語が苦手でも実務は回せます。ただし最新技術や込み入ったエラーは英語の一次情報にあたるのが最短のことが多く、『簡単な英語ドキュメントを翻訳ツール併用で読める』程度の力があると効率が大きく変わります。会話・会議の英語は不要でも、読む英語は少し慣れておくと得です。",
  },
  {
    q: "英語不要の企業は将来も英語が発生しない？",
    a: "完全には保証できません。国内向けの企業でも、事業のグローバル展開、外資による買収、海外オフショア開発との連携などで、後から英語が発生することはあります。とはいえ、顧客も社員も国内中心で事業ドメインが国内に閉じている企業は、構造的に英語が発生しにくい傾向です。求人の見極めでは『事業の市場が国内か海外か』を確認すると将来の見通しが立てやすくなります。",
  },
  {
    q: "英語不要を優先すると年収やキャリアで不利になる？",
    a: "一概には言えませんが、英語ができるエンジニアは外資系や海外案件で年収プレミアムを得やすいのは事実です。英語不要にこだわると、その上振れの選択肢は狭まります。一方で、国内向けの業務系・公共系は需要が安定しており、英語なしでも十分なキャリアを築けます。『英語を避ける』ことと『英語をやらない』ことは別で、将来の選択肢を残したいなら少しずつ読む英語に慣れておくのが無難です。",
  },
  {
    q: "英語不要の求人はどう探せばいい？",
    a: "求人票に『英語不要』と明記されることは少ないため、事業内容で見極めるのが実践的です。国内顧客向け・社内システム・官公庁案件などは英語使用が少ない傾向です。IT特化型エージェントに『業務で英語を使わない環境を希望』と伝えれば、該当しやすい求人を絞り込んでもらえます。面接で『日常業務で英語を使う場面はあるか』を直接確認するのが確実です。",
  },
  {
    q: "英語ができないと面接で不利になる？",
    a: "英語不要の求人であれば、英語力を理由に不利になることはほぼありません。むしろ国内向け開発では、日本語での要件定義・顧客折衝・ドキュメント作成といったコミュニケーション力のほうが重視されます。英語を聞かれた場合も、避ける姿勢ではなく『業務に必要な技術ドキュメントは翻訳ツール併用で読んでいる』と前向きに答えれば十分です。",
  },
];

export default function NoEnglishPage() {
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
        title="英語不要のIT企業へ転職【国内向け開発の見極め方】"
        description="英語を使わずに働けるエンジニア転職先を正直に解説。英語不要な企業・職種の実態、求人での見極め方、将来も英語が発生しにくい領域、注意点を30-40代向けに整理します。"
        url="/purpose/no-english/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "目的別ガイド", href: "/purpose/" },
          { name: "英語不要のIT企業へ転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          英語不要のIT企業へ転職
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | 英語を使わずに働きたいエンジニアのための実態ガイド</p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省 職業情報提供サイト（job tag）",
            "独立行政法人 情報処理推進機構（IPA）IT人材白書",
          ]}
        />

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：英語不要は“会話・会議で英語を使わない”環境。技術情報の英語はゼロにできない</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            英語を使わずに働けるエンジニアの仕事は確かに存在します。国内顧客向けの業務システム、官公庁・自治体案件、国内SaaSの運用、社内システム部門などは、<strong>会話・メール・会議で英語を使わずに働ける</strong>領域です。ただし正直に言えば、エンジニアである以上『公式ドキュメントやエラーメッセージが英語』という場面は職種を問わず発生します。ここでいう英語不要とは『コミュニケーションで英語を使わない』という意味であって、技術情報の英語読解まで完全にゼロにできるわけではありません。本記事では、この区別を踏まえて英語不要の環境を見極める方法と、将来も英語が発生しにくい領域を解説します。
          </p>
          <div className="bg-petrol-soft border border-slate-200 rounded-lg p-6">
            <p className="text-sm font-medium text-slate-700 mb-2">こんな人におすすめ</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>- 英語での会話・会議・メールを避けたい</li>
              <li>- 国内向けの開発に腰を据えて取り組みたい</li>
              <li>- 英語を理由に転職をためらっている</li>
              <li>- 将来も英語が発生しにくい領域を知りたい</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">目次</h2>
          <ol className="list-decimal list-inside space-y-1 text-sm text-petrol-deep">
            <li>「英語不要」の実態と区別</li>
            <li>英語が発生しにくい職種・領域</li>
            <li>見極めのポイント</li>
            <li>注意点とキャリアのトレードオフ</li>
            <li>30-40代の視点</li>
            <li>よくある質問</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">1. 「英語不要」の実態と区別</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-petrol-soft">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">英語の種類</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">英語不要環境での実態</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "会話・会議の英語", desc: "国内向け企業ならほぼ不要。顧客も社員も日本語で完結する" },
                  { type: "英語メール・チャット", desc: "海外取引先・海外チームがなければ発生しない" },
                  { type: "技術ドキュメント読解", desc: "職種を問わず一定発生。翻訳ツール・日本語記事で大半は補える" },
                  { type: "エラーメッセージ・ログ", desc: "英語表記が基本。読む英語に少し慣れておくと効率が上がる" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.type}</td>
                    <td className="px-4 py-3 text-slate-600">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed mt-4">
            つまり、<strong>避けられる英語（会話・会議・メール）と、避けにくい英語（技術情報の読解）を分けて考える</strong>のが現実的です。前者を不要にできる環境は多く存在します。後者は翻訳ツールでカバーできるため、英語が苦手でも実務は十分に回せます。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">2. 英語が発生しにくい職種・領域</h2>
          <div className="space-y-3">
            {[
              { type: "国内顧客向けの業務系SIer・受託開発", point: "顧客・要件・ドキュメントがすべて日本語。英語コミュニケーションはほぼ発生しない。" },
              { type: "官公庁・自治体・公共系システム", point: "国内に閉じた事業ドメインで、英語が構造的に発生しにくい。需要も安定。" },
              { type: "社内システム・情報システム部門", point: "自社内の業務システムが対象。社員向けで英語折衝の必要が少ない。" },
              { type: "国内向けSaaSの保守・運用", point: "ユーザーもサポートも国内中心。日本語での運用が基本になる。" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{item.type}</h3>
                <p className="text-sm text-slate-600">{item.point}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">3. 見極めのポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "事業の市場が国内か海外かを確認", desc: "顧客・売上が国内中心の企業は英語が発生しにくい。グローバル展開中の企業は将来英語が発生する余地があります。" },
              { num: "2", title: "海外拠点・オフショア連携の有無を確認", desc: "海外オフショア開発と連携する体制があると、英語でのやり取りが発生することがあります。" },
              { num: "3", title: "「日常業務で英語を使う場面はあるか」を面接で直接聞く", desc: "求人票に英語不要と書かれることは少ないため、面接での直接確認が最も確実です。" },
              { num: "4", title: "外資による買収・資本関係を確認", desc: "外資系の親会社を持つ企業は、社内公用語や報告で英語が求められるケースがあります。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
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

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">4. 注意点とキャリアのトレードオフ（正直な話）</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            英語不要を最優先にすると、知っておくべきトレードオフがあります。英語ができるエンジニアは外資系IT・海外案件で年収プレミアムを得やすく、その選択肢は英語不要にこだわると狭まります。また、国内向けの業務系・公共系は安定している一方、最新技術の一次情報は英語で出ることが多く、読む英語を完全に避けると技術習得の効率が落ちる面があります。
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            おすすめは、<strong>会話・会議の英語は避けつつ、読む英語だけは少しずつ慣れておく</strong>折衷案です。これなら英語ストレスを避けながら将来の選択肢も残せます。英語を活かす方向に興味が出たら
            <Link href="/purpose/english/" className="text-petrol hover:underline">英語を活かすエンジニア転職</Link>
            も比較してみてください。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">5. 30-40代の視点</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            30-40代にとって、今から英語のコミュニケーション力を一から鍛えるのは負担が大きく、現実的でないこともあります。その場合、英語不要の国内向け領域に軸足を置き、これまでの業務知識・ドメイン知識を活かすほうが転職を成功させやすくなります。業務系SIerや公共系では、技術力に加えて顧客折衝・要件定義といった日本語ベースの経験が高く評価されます。
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            一方で、英語不要にこだわりすぎて応募先を狭めすぎないことも大切です。継続的な学習で読む英語に少し慣れておくことは、将来の選択肢を広げます。学び直しの進め方は
            <Link href="/knowledge/continuous-learning/" className="text-petrol hover:underline">エンジニアの継続学習</Link>
            も参考になります。
          </p>
        </section>

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
          <h2 className="text-xl font-bold mb-3">英語を使わない環境の求人を無料で紹介</h2>
          <p className="text-blue-100 text-sm mb-4">国内向け開発に強いIT特化型エージェントが、英語不要な職場を厳選して提案します。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "英語を活かすエンジニア転職", href: "/purpose/english/" },
              { name: "エンジニアの継続学習", href: "/knowledge/continuous-learning/" },
              { name: "学歴不問でエンジニア転職", href: "/purpose/no-degree/" },
              { name: "安定したIT企業への転職", href: "/purpose/stable/" },
              { name: "目的別ガイド一覧", href: "/purpose/" },
              { name: "ミドルエンジニア転職ラボTOP", href: "/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
