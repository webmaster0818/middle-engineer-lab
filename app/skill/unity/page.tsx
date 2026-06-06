import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "Unityエンジニアの転職ガイド【ゲーム/XR】年収・求人・将来性",
  description:
    "Unityエンジニアの転職市場を徹底解説。平均年収450〜750万円、ゲーム・XR開発需要の背景、Unityエンジニアのキャリアパスとおすすめ転職エージェントを紹介します。",
};

const faqs = [
  {
    q: "Unityエンジニアの平均年収は？",
    a: "30代で450万〜750万円が相場です。大手ゲーム会社のシニアUnityエンジニアは700万〜950万円、XR/メタバース領域のリードエンジニアでは800万〜1,000万円の求人もあります。ソーシャルゲーム系よりコンシューマー系の方が年収が高い傾向です。",
  },
  {
    q: "Unityの需要は今後も続く？",
    a: "続きます。モバイルゲームでのUnityシェアは圧倒的であり、さらにVR/AR、メタバース、デジタルツイン、建築・製造業のビジュアライゼーションなど、ゲーム以外の産業用途でも採用が拡大しています。",
  },
  {
    q: "UnityとUnreal Engineのどちらが有利？",
    a: "モバイルゲーム・インディーゲーム・XRアプリではUnityが主流です。AAAゲームや映像制作ではUnreal Engineが強いです。求人数はUnityの方が多いですが、Unreal Engineのスキルも併せ持つと市場価値が上がります。",
  },
  {
    q: "Unityの求人はどんな企業が多い？",
    a: "ゲーム会社（Cygames、DeNA等）、XR開発企業、メタバース関連スタートアップ、建築・製造業のDX部門に多いです。エンターテインメント以外の産業向けUnity開発の需要も増加しています。",
  },
  {
    q: "Web系エンジニアからUnityに転向できる？",
    a: "C#の知識があれば転向しやすいです。Unity独自のコンポーネントシステム、物理エンジン、シェーダー、アセット管理などを学ぶ必要がありますが、プログラミングの基礎があれば3〜6ヶ月で基本的な開発ができるようになります。",
  },
  {
    q: "Unityエンジニアにおすすめの転職エージェントは？",
    a: "Geekly（ゲーム・エンタメ業界の求人が豊富）、レバテックキャリア（IT全般+ゲーム案件）、シリコンスタジオエージェント（ゲーム業界特化）の3社がおすすめです。ポートフォリオ作品を必ず準備しましょう。",
  },
];

export default function UnitySkillPage() {
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
        title="Unityエンジニアの転職ガイド【ゲーム/XR】年収・求人・将来性"
        description="Unityエンジニアの転職市場を徹底解説。平均年収450〜750万円、ゲーム・XR開発需要の背景、Unityエンジニアのキャリアパスとおすすめ転職エージェントを紹介します。"
        url="/skill/unity/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Unityエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Unityエンジニアの転職ガイド【ゲーム/XR】年収・求人・将来性
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | Unityエンジニアの転職市場を徹底分析
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            Unityは世界で最も広く使われているゲームエンジンであり、モバイルゲームの約70%がUnityで開発されています。さらにVR/AR、メタバース、デジタルツインなど、ゲーム以外の領域でも活用が広がっています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、Unityエンジニアの年収、求人動向、将来性、転職で成功するためのポイントを解説します。
          </p>
        </section>

        {/* 市場データ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Unityエンジニアの市場データ</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">450〜750万</p>
                <p className="text-sm text-slate-600 mt-1">30代Unityエンジニアの年収相場</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">+22%</p>
                <p className="text-sm text-slate-600 mt-1">Unity求人の前年比増加率</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">2.3倍</p>
                <p className="text-sm text-slate-600 mt-1">Unity求人の求人倍率（1人あたり）</p>
              </div>
            </div>
          </div>
        </section>

        {/* Unityが求められる理由 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Unityエンジニアの需要が高い理由</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">モバイルゲーム市場の継続的成長</h3>
              <p className="text-sm text-blue-700">
                日本のモバイルゲーム市場は1兆円超の規模を維持しており、新規タイトルの開発でUnityは最も多く採用されています。ハイパーカジュアルからRPGまで幅広いジャンルでUnityが使われています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">XR/メタバース市場の拡大</h3>
              <p className="text-sm text-blue-700">
                Meta Quest、Apple Vision ProなどのXRデバイスの普及により、VR/ARコンテンツの開発需要が拡大しています。UnityはXR開発のデファクトスタンダードとして、産業用途も含めた幅広い領域で活用されています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">非ゲーム領域での採用拡大</h3>
              <p className="text-sm text-blue-700">
                建築ビジュアライゼーション、自動車シミュレーション、医療トレーニング、デジタルツインなど、ゲーム以外の産業でもUnityの採用が増えています。エンターテインメント以外のキャリアパスが広がっています。
              </p>
            </div>
          </div>
        </section>

        {/* キャリアパス */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Unityエンジニアのキャリアパス</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "ゲームプログラマー", range: "450万〜750万円", note: "モバイル/コンシューマーゲーム開発" },
              { role: "XR/メタバースエンジニア", range: "550万〜850万円", note: "VR/AR/MRコンテンツ開発" },
              { role: "テクニカルアーティスト", range: "500万〜800万円", note: "シェーダー、エフェクト、パフォーマンス最適化" },
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">Unityエンジニア転職の成功ポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "ポートフォリオ作品を準備する", desc: "Unityで開発したゲームやアプリを実際にプレイできる形で公開しましょう。Google Play/App Storeへのリリースやitch.ioでの公開が有効です。ソースコードもGitHubで公開するとさらに評価されます。" },
              { num: "2", title: "パフォーマンス最適化の知識を持つ", desc: "Draw Call削減、LOD設定、オブジェクトプーリング、メモリ管理など、Unityアプリのパフォーマンス最適化スキルは面接で高く評価されます。特にモバイル向けの最適化経験は重要です。" },
              { num: "3", title: "専門領域を持つ", desc: "ネットワーク対戦（Netcode）、3Dグラフィックス（シェーダー）、XR開発（XR Interaction Toolkit）など、Unityの中でも特定の専門領域を持つことで、シニアポジションへの応募が有利になります。" },
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
          <h2 className="text-xl font-bold mb-3">Unityのスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            ゲーム・XR求人に精通したIT特化型エージェントに登録して、年収アップの可能性を探りましょう。
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
              { name: "C#/.NET転職ガイド", href: "/skill/csharp/" },
              { name: "ゲーム業界転職ガイド", href: "/industry/gaming/" },
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
