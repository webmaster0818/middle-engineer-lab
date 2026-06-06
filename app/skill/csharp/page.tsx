import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "C#/.NETエンジニアの転職ガイド【業務系/Unity】年収・求人・将来性",
  description:
    "C#/.NETエンジニアの転職市場を徹底解説。平均年収500〜800万円、業務系システムからUnityゲーム開発まで、C#エンジニアのキャリアパスとおすすめ転職エージェントを紹介します。",
};

const faqs = [
  {
    q: "C#/.NETエンジニアの平均年収は？",
    a: "30代で500万〜800万円が相場です。業務系システム開発では500万〜700万円、Unityゲーム開発では450万〜700万円、Azure/.NETのクラウドアーキテクトでは800万〜1,100万円が目安です。",
  },
  {
    q: "C#/.NETの需要は今後も続く？",
    a: "続きます。.NET 8/9のクロスプラットフォーム対応、Azure上でのクラウドネイティブ開発、Unityでのゲーム/XR開発など、C#の活躍領域は拡大しています。特にエンタープライズ領域での需要は非常に安定しています。",
  },
  {
    q: "C#はWeb開発にも使える？",
    a: "はい。ASP.NET Core+Blazorにより、サーバーサイドからフロントエンドまでC#で統一的に開発できます。.NETのクロスプラットフォーム対応でLinux/macOS上でも動作し、コンテナ化も容易です。",
  },
  {
    q: "C#の求人はどんな企業が多い？",
    a: "SIer、金融系企業、製造業のDX部門、ゲーム会社（Unity案件）、Microsoft系パートナー企業に多いです。Azure導入企業の増加に伴い、C#+Azureのスキルセットを求める求人が急増しています。",
  },
  {
    q: "レガシー.NET Framework経験しかなくても転職できる？",
    a: "転職可能ですが、.NET 8以降（旧.NET Core）への移行スキルを身につけることが重要です。ASP.NET Core、Entity Framework Core、Minimal APIなどモダンな.NETの知識を学びましょう。",
  },
  {
    q: "C#エンジニアにおすすめの転職エージェントは？",
    a: "レバテックキャリア（業務系C#求人が豊富）、マイナビIT AGENT（SIer系企業に強い）、Geekly（Unity/ゲーム系求人）の3社がおすすめです。C#のスキルレベルに応じた求人を紹介してくれます。",
  },
];

export default function CsharpSkillPage() {
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
        title="C#/.NETエンジニアの転職ガイド【業務系/Unity】年収・求人・将来性"
        description="C#/.NETエンジニアの転職市場を徹底解説。平均年収500〜800万円、業務系システムからUnityゲーム開発まで、C#エンジニアのキャリアパスとおすすめ転職エージェントを紹介します。"
        url="/skill/csharp/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "C#/.NETエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          C#/.NETエンジニアの転職ガイド【業務系/Unity】年収・求人・将来性
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | C#/.NETエンジニアの転職市場を徹底分析
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            C#はMicrosoftが開発した言語で、業務系システム開発、Webアプリケーション（ASP.NET）、ゲーム開発（Unity）、クラウド（Azure）と幅広い領域で使われています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、C#/.NETエンジニアの年収、求人動向、将来性、転職で成功するためのポイントを解説します。
          </p>
        </section>

        {/* 市場データ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">C#/.NETエンジニアの市場データ</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">500〜800万</p>
                <p className="text-sm text-slate-600 mt-1">30代C#エンジニアの年収相場</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">+18%</p>
                <p className="text-sm text-slate-600 mt-1">.NET求人の前年比増加率</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">2.4倍</p>
                <p className="text-sm text-slate-600 mt-1">C#求人の求人倍率（1人あたり）</p>
              </div>
            </div>
          </div>
        </section>

        {/* C#が求められる理由 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">C#/.NETの需要が拡大している理由</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Azure連携でクラウドネイティブ化が加速</h3>
              <p className="text-sm text-blue-700">
                Azureの市場シェア拡大に伴い、C#+Azureでのクラウドネイティブアプリケーションやマイクロサービスの開発需要が急増しています。Azure FunctionsやAzure Container Appsとの親和性が高く、クラウドスキルを持つC#エンジニアの市場価値が上昇しています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Unity/XR領域での安定需要</h3>
              <p className="text-sm text-blue-700">
                Unityはゲーム開発だけでなく、VR/AR、メタバース、デジタルツイン、建築ビジュアライゼーションなど産業用途でも広く使われています。C#はUnityの標準言語であり、XR領域の成長とともに需要が拡大しています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">.NETのクロスプラットフォーム化</h3>
              <p className="text-sm text-blue-700">
                .NET 8/9によりWindows、Linux、macOS、モバイル（MAUI）まで一つの言語でカバーできるようになりました。従来のWindows限定のイメージが払拭され、Web系企業でも.NETの採用が増えています。
              </p>
            </div>
          </div>
        </section>

        {/* キャリアパス */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">C#/.NETエンジニアのキャリアパス</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "業務系アプリエンジニア", range: "500万〜750万円", note: "ASP.NET Core+Entity FrameworkでのWebアプリ開発" },
              { role: "Azureクラウドアーキテクト", range: "700万〜1,100万円", note: "C#+Azureでのクラウドネイティブ設計" },
              { role: "Unityエンジニア", range: "450万〜750万円", note: "ゲーム開発、XR/メタバースアプリケーション開発" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 mb-1">{item.role}</h3>
                <p className="text-blue-600 font-bold mb-1">{item.range}</p>
                <p className="text-xs text-slate-500">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 転職のポイント */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">C#/.NETエンジニア転職の成功ポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "モダン.NETの知識を身につける", desc: "ASP.NET Core、Minimal API、Blazor、Entity Framework Core、.NET 8/9の新機能など、モダンな.NET開発のスキルをアピールしましょう。レガシー.NET Frameworkとの違いを説明できることも重要です。" },
              { num: "2", title: "Azure認定資格を取得する", desc: "Azure Developer Associate（AZ-204）やAzure Solutions Architect（AZ-305）の取得は、C#+Azureのスキルを証明する最も効果的な方法です。年収100万円以上のアップにつながるケースもあります。" },
              { num: "3", title: "専門領域を明確にする", desc: "業務系（金融・製造）、ゲーム（Unity）、クラウド（Azure）など、C#を使うドメインを明確にし、その領域の深い知識をアピールすることで面接での評価が上がります。" },
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
          <h2 className="text-xl font-bold mb-3">C#/.NETのスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            C#の求人に精通したIT特化型エージェントに登録して、年収アップの可能性を探りましょう。
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
              { name: "Java転職ガイド", href: "/skill/java/" },
              { name: "Unity転職ガイド", href: "/skill/unity/" },
              { name: "スキル別転職ガイド一覧", href: "/skill/" },
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
