import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "UI/UXデザイナーからエンジニア転職 | ミドルエンジニア転職ラボ",
  description:
    "UI/UXデザイナーからエンジニアに転職する方法を解説。デザインスキルを活かしたフロントエンドエンジニアへのキャリアチェンジのロードマップを紹介します。",
};

const faqs = [
  { q: "デザイナーからエンジニアへの転職は難しいですか？", a: "フロントエンド領域であれば比較的転職しやすいです。HTML/CSSの知識があるデザイナーは多く、そこにJavaScript/TypeScriptのスキルを加えるだけでフロントエンドエンジニアとして活躍できます。デザインとコーディングの両方ができる人材は市場でも希少です。" },
  { q: "どのプログラミング言語を学ぶべきですか？", a: "まずJavaScript/TypeScriptを学びましょう。ReactやVue.jsなどのフロントエンドフレームワークを習得すれば、UIの実装からインタラクション設計まで一気通貫で対応できるエンジニアになれます。" },
  { q: "年収はデザイナー時代より上がりますか？", a: "フロントエンドエンジニアの年収はUIデザイナーより高い傾向にあります。デザイナー経験3〜5年で年収400〜550万円の方が、フロントエンドエンジニアに転職すると500〜700万円を目指せます。" },
  { q: "Figmaの経験はエンジニアとして評価されますか？", a: "はい。Figmaのデザインからコードへの変換能力は高く評価されます。デザイナーとの協業が円滑にできるエンジニアとして重宝されます。Design Tokenやデザインシステムの構築経験があるとさらに有利です。" },
  { q: "デザイナーとエンジニアの両方のスキルを持つメリットは？", a: "「デザインエンジニア」は市場で非常に希少な人材です。UIの設計からフロントエンド実装まで一人でできるため、スタートアップやプロダクトチームで特に重宝されます。" },
  { q: "転職活動のポートフォリオはどう作るべきですか？", a: "自分でデザインし、自分でコーディングしたWebアプリケーションを2〜3つ用意しましょう。Figmaのデザインファイルと実装コード（GitHub）を両方見せられると、両方のスキルを一度にアピールできます。" },
];

export default function UIUXPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="UI/UXデザイナーからエンジニア転職 | ミドルエンジニア転職ラボ" description="UI/UXデザイナーからエンジニアに転職する方法を解説。デザインスキルを活かしたフロントエンドエンジニアへのキャリアチェンジのロードマップを紹介します。" url="/knowledge/uiux/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "転職ガイド" }, { name: "UI/UXデザイナーからエンジニア" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">UI/UXデザイナーからエンジニア転職</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | デザインスキルを活かすキャリアチェンジ</p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">UI/UXデザイナーからフロントエンドエンジニアへの転職は、最も自然なキャリアチェンジの一つです。デザインの知識と実装力を兼ね備えた人材は市場で非常に希少であり、高い市場価値を持ちます。</p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キャリアチェンジのロードマップ</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "HTML/CSS/JavaScriptの基礎固め（1〜2ヶ月）", desc: "デザイナー経験者ならHTML/CSSは短期間で習得可能。JavaScriptの基礎をしっかり学びましょう。" },
              { num: "2", title: "React/TypeScriptの習得（2〜3ヶ月）", desc: "Reactのコンポーネント設計はUI設計と親和性が高い。デザインシステムの構築を学ぶと強みになります。" },
              { num: "3", title: "ポートフォリオ作成（1ヶ月）", desc: "FigmaデザインからReactで実装したWebアプリを2〜3つ作成。デザインファイルとコードの両方をGitHubで公開。" },
              { num: "4", title: "転職活動（1〜2ヶ月）", desc: "「デザインエンジニア」「フロントエンドエンジニア（デザイン知見あり）」のポジションに応募。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{item.num}</span>
                <div><h3 className="font-bold text-slate-800 mb-1">{item.title}</h3><p className="text-sm text-slate-600">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">デザイナー出身エンジニアの強み</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. UIの品質が高いコードを書ける</h3>
              <p className="text-sm text-blue-700">ピクセルパーフェクトな実装ができるエンジニアは希少。デザイナーとの認識のずれがなく、手戻りが少ないです。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. アクセシビリティへの意識が高い</h3>
              <p className="text-sm text-blue-700">UXの知識があるため、ユーザビリティやアクセシビリティを考慮した実装ができます。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. デザインシステムの構築・運用ができる</h3>
              <p className="text-sm text-blue-700">コンポーネントライブラリやDesign Tokenの設計・実装を一人で担当できるため、チーム全体の開発効率を向上させられます。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. プロトタイプから実装まで一気通貫</h3>
              <p className="text-sm text-blue-700">アイデアの検証速度が格段に上がるため、スタートアップやプロダクトチームで非常に重宝されます。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">5. CSSアニメーション・インタラクション設計</h3>
              <p className="text-sm text-blue-700">モーションデザインの知識を活かした、印象的なUIアニメーションを実装できます。</p>
            </div>
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
          <h2 className="text-xl font-bold mb-3">キャリアチェンジの相談はプロに</h2>
          <p className="text-blue-100 text-sm mb-4">IT特化型エージェントなら、デザイナー出身のエンジニア求人を紹介してもらえます。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "セカンドキャリアとしてのエンジニア転職", href: "/knowledge/second-career/" },
              { name: "ポートフォリオ作成ガイド", href: "/knowledge/portfolio/" },
              { name: "キャリアプラン設計", href: "/knowledge/career-plan/" },
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
