import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "京都のIT転職事情【2026年】任天堂・研究機関・年収相場 | ミドルエンジニア転職ラボ",
  description:
    "京都のIT・Webエンジニア転職市場を徹底解説。任天堂・京セラなどの大手企業、京大発スタートアップ、研究機関連携のIT求人、年収相場、おすすめエージェントを30代・40代向けに紹介します。",
};

const faqs = [
  {
    q: "京都のITエンジニアの平均年収は？",
    a: "2026年時点で京都のITエンジニアの平均年収は約520万円です。任天堂・京セラなどの大手企業では700万円以上、30代で480〜650万円、40代で580〜800万円が目安です。",
  },
  {
    q: "京都で求人が多いエリアはどこ？",
    a: "京都駅周辺（SIer・大手企業）、四条烏丸（Web系・スタートアップ）、南区・伏見区（任天堂・製造業DX）が主要エリアです。京大周辺には研究機関発のAIスタートアップも集積しています。",
  },
  {
    q: "京都の任天堂関連のIT求人は？",
    a: "任天堂本社は京都市南区にあり、ゲーム開発エンジニア、サーバーインフラ、AI/ML、UIデザインなどのポジションがあります。ただし中途採用の門戸は狭く、関連会社やパートナー企業経由の求人が現実的です。",
  },
  {
    q: "大阪と京都、どちらがIT転職に有利？",
    a: "求人数は大阪の方が圧倒的に多いですが、京都は研究機関×AI、ゲーム、精密機器など独自の強みがあります。両方に通勤可能なエリアに住み、幅広く求人を探すのがおすすめです。",
  },
  {
    q: "京都のリモートワーク事情は？",
    a: "フルリモート率は約15%とまだ低めですが、大阪の企業にリモート勤務するパターンが増えています。京都のQOLを維持しながら大阪水準の年収を得られる選択肢として人気です。",
  },
  {
    q: "京都のIT転職におすすめのエージェントは？",
    a: "レバテックキャリア（関西のIT求人が豊富）、Geekly（ゲーム業界に強い）、doda（京都の大手企業求人に強い）の3社がおすすめです。大阪の求人も合わせて探すと選択肢が広がります。",
  },
];

const areas = [
  { name: "京都駅周辺", companies: "SIer、大手企業IT部門、通信", salary: "480〜700万円", feature: "交通の要所。大手SIerやIT企業の京都拠点が集中。新幹線で東京・大阪へのアクセス良好。", remote: "ハイブリッド中心" },
  { name: "四条烏丸", companies: "Web系、スタートアップ、EC", salary: "450〜650万円", feature: "京都のビジネス街。Web系スタートアップやEC企業が増加中。オシャレなオフィス環境。", remote: "フルリモート率 中" },
  { name: "南区・伏見区", companies: "ゲーム、精密機器、製造業DX", salary: "520〜800万円", feature: "任天堂本社エリア。ゲーム開発や精密機器のDX関連求人。年収水準が高い。", remote: "出社中心" },
  { name: "左京区（京大周辺）", companies: "AI、研究機関、アカデミア発SU", salary: "500〜750万円", feature: "京都大学発のAIスタートアップが集積。研究機関との連携案件が豊富。", remote: "ハイブリッド中心" },
  { name: "桂・長岡京", companies: "電子部品、半導体関連IT", salary: "500〜720万円", feature: "村田製作所、ロームなど電子部品大手の開発拠点。組込み・IoT求人が多い。", remote: "出社中心" },
];

export default function KyotoAreaPage() {
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
        title="京都のIT転職事情【2026年】任天堂・研究機関・年収相場"
        description="京都のIT・Webエンジニア転職市場を徹底解説。任天堂・京大発スタートアップなどの求人特徴、年収相場、おすすめエージェントを紹介します。"
        url="/area/kyoto/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エリア別ガイド" },
          { name: "京都のIT転職事情" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          京都のIT転職事情【2026年】任天堂・研究機関・年収相場
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 京都エリアのIT転職完全ガイド
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            京都は任天堂・京セラ・村田製作所などの世界的企業と、京都大学を中心とした研究機関が融合する独自のIT転職市場を形成しています。ゲーム、AI、電子部品という3つの柱が特徴です。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、京都のエリア別の求人特徴、年収相場、リモートワーク事情、おすすめエージェントを30代・40代エンジニア向けに詳しく解説します。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">京都IT転職市場の概要</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">約6,200件</p>
              <p className="text-sm text-blue-600">IT求人数（2026年6月）</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">520万円</p>
              <p className="text-sm text-blue-600">ITエンジニア平均年収</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">約35%</p>
              <p className="text-sm text-blue-600">リモート対応求人率</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エリア別 求人特徴と年収相場</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">エリア</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">主な企業タイプ</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">年収レンジ</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">リモート</th>
                </tr>
              </thead>
              <tbody>
                {areas.map((area, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-3 py-3 border border-slate-200 font-medium">{area.name}</td>
                    <td className="px-3 py-3 border border-slate-200">{area.companies}</td>
                    <td className="px-3 py-3 border border-slate-200 font-bold text-blue-600">{area.salary}</td>
                    <td className="px-3 py-3 border border-slate-200">{area.remote}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 年収レンジは2026年6月時点の概算。スキル・経験・ポジションにより異なります。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">各エリアの詳細</h2>
          <div className="space-y-4">
            {areas.map((area, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{area.name}</h3>
                <p className="text-sm text-slate-600 mb-2">{area.feature}</p>
                <div className="flex gap-4 text-xs text-slate-500">
                  <span>企業タイプ: {area.companies}</span>
                  <span>年収: {area.salary}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">京都のリモートワーク事情</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              京都のIT企業ではリモートワークの導入が進みつつあります。大阪の企業にリモート勤務するパターンも増え、京都の生活環境を維持しながらキャリアアップを目指すエンジニアが増加しています。
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">1</span>
                <p className="text-sm text-slate-600"><strong>フルリモート（約15%）:</strong> Web系スタートアップ中心。大阪・東京の企業にリモート勤務するケースも。</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">2</span>
                <p className="text-sm text-slate-600"><strong>ハイブリッド（約20%）:</strong> 大手企業を中心に週2〜3日出社。大阪への通勤を含むケースも。</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">3</span>
                <p className="text-sm text-slate-600"><strong>フル出社（約65%）:</strong> 製造業系IT、ゲーム開発、研究機関。機密性の高い開発環境。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">京都のIT転職におすすめのエージェント3社</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. レバテックキャリア</h3>
              <p className="text-sm text-blue-700">
                関西エリアのIT求人が豊富。京都の大手企業からスタートアップまで幅広くカバー。年収UP率80%の交渉力で、京都でも高年収を実現。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. Geekly</h3>
              <p className="text-sm text-blue-700">
                ゲーム業界に強く、任天堂関連企業や京都のゲーム開発会社の求人が充実。Web系スタートアップの求人も多い。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. doda（IT特化）</h3>
              <p className="text-sm text-blue-700">
                京都の大手製造業（京セラ、村田製作所等）のDX求人が充実。安定志向のエンジニアにおすすめ。大阪の求人も同時に探せる。
              </p>
            </div>
          </div>
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
          <h2 className="text-xl font-bold mb-3">京都のIT転職を成功させよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            ゲーム・AI・電子部品と独自の強みを持つ京都。IT特化型エージェントで非公開求人にもアクセスしましょう。
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
              { name: "大阪のIT転職事情", href: "/area/osaka/" },
              { name: "神戸のIT転職事情", href: "/area/kobe/" },
              { name: "Geekly vs Green比較", href: "/compare/geekly-vs-green/" },
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
