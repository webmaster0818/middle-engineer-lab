import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "地方移住×IT転職ガイド【2026年】移住支援・コスパ・おすすめ地域",
  description:
    "地方移住×IT転職を徹底解説。移住支援制度、生活コスパ、おすすめ移住先ランキング、フルリモート求人の探し方、成功のコツを30代・40代エンジニア向けに紹介します。",
};

const faqs = [
  {
    q: "ITエンジニアが地方移住するメリットは？",
    a: "最大のメリットは生活コストの削減です。東京比で家賃50〜70%安、食費も安くなります。フルリモートなら東京水準の年収を維持しながら地方の低コスト生活が可能。自然環境、通勤ストレスの解消、子育て環境の改善も大きなメリットです。",
  },
  {
    q: "地方移住で年収は下がる？",
    a: "地元企業に転職する場合は年収が下がる傾向にありますが、フルリモートで東京の企業に勤務すれば東京水準の年収を維持できます。生活コストの差を考慮すると、実質的な可処分所得は増える場合が多いです。",
  },
  {
    q: "移住支援制度はある？",
    a: "多くの自治体が移住支援金を用意しています。国の制度では最大100万円（単身60万円）の支援金があり、IT関連のテレワーク移住では追加支援がある自治体も。各自治体の移住ポータルサイトで最新情報を確認しましょう。",
  },
  {
    q: "ITエンジニアにおすすめの移住先は？",
    a: "札幌（都市機能充実×低コスト）、福岡（IT産業が活発×食事が旨い）、仙台（東京アクセス良好×東北の拠点）、長野（自然環境×東京近い）、沖縄（温暖×リモートワーカー向け施設充実）が人気です。",
  },
  {
    q: "移住前にやるべきことは？",
    a: "1.フルリモート求人を先に確保、2.移住先の下見（2〜3回）、3.移住支援制度の申請、4.住居の確保、5.インターネット環境の確認、の順番で進めるのがおすすめです。特に転職を先に決めてから移住するのが安全です。",
  },
  {
    q: "地方移住×IT転職におすすめのエージェントは？",
    a: "レバテックキャリア（フルリモート求人が最も豊富）、ビズリーチ（ハイクラスリモート求人）、doda（全国の求人をカバー）の3社がおすすめです。「地方移住予定・フルリモート希望」と明確に伝えましょう。",
  },
];

const areas = [
  { name: "札幌", companies: "ニアショア開発、SIer支社", salary: "430万円", feature: "190万都市の利便性。家賃東京比50%以下。食事の美味しさ。冬の寒さがネック。", remote: "フルリモート率 高" },
  { name: "福岡", companies: "スタートアップ、IT企業誘致", salary: "480万円", feature: "福岡市のIT企業支援が手厚い。空港が近く東京出張も便利。食のクオリティが高い。", remote: "フルリモート率 高" },
  { name: "仙台", companies: "SIer支社、復興DX", salary: "450万円", feature: "東北新幹線で東京1.5時間。杜の都の生活環境。復興DX需要で求人増加中。", remote: "ハイブリッド対応" },
  { name: "長野・松本", companies: "リモートワーカー、小規模IT", salary: "東京リモート想定", feature: "東京まで新幹線1.5時間。自然環境が抜群。ITワーカー向けコワーキングが充実。", remote: "フルリモート前提" },
  { name: "沖縄", companies: "コールセンター、Web制作", salary: "380万円", feature: "温暖な気候。リモートワーカー向けの施設・コミュニティが充実。生活コストは本土並み。", remote: "フルリモート前提" },
];

export default function IijuAreaPage() {
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
        title="地方移住×IT転職ガイド【2026年】移住支援・コスパ・おすすめ地域"
        description="地方移住×IT転職を徹底解説。移住支援制度、おすすめ移住先、フルリモート求人の探し方、おすすめエージェントを紹介します。"
        url="/area/iiju/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エリア別ガイド" },
          { name: "地方移住×IT転職ガイド" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          地方移住×IT転職ガイド【2026年】移住支援・コスパ・おすすめ地域
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 地方移住×IT転職完全ガイド
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            フルリモートの普及により、ITエンジニアの地方移住が現実的な選択肢になりました。東京の年収を維持しながら、生活コストを大幅に削減し、自然豊かな環境で暮らす——そんなライフスタイルを実現するエンジニアが急増しています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、ITエンジニアにおすすめの移住先、移住支援制度、フルリモート求人の探し方、成功のコツを30代・40代向けに詳しく解説します。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">地方移住×IT転職の市場概要</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">年30%増</p>
              <p className="text-sm text-blue-600">ITエンジニアの移住者数</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">最大100万円</p>
              <p className="text-sm text-blue-600">移住支援金（国の制度）</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <p className="text-3xl font-bold text-blue-700 mb-1">50〜70%減</p>
              <p className="text-sm text-blue-600">家賃削減率（東京比）</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">おすすめ移住先と特徴</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">エリア</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">主な企業タイプ</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">地元平均年収</th>
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
          <p className="text-xs text-slate-500 mt-2">※ 年収は地元企業の目安。フルリモートなら東京水準（580万円〜）も可能です。</p>
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
                  <span>地元平均年収: {area.salary}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">移住成功の5ステップ</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">1</span>
                <p className="text-sm text-slate-600"><strong>フルリモート求人を確保:</strong> 移住前に転職を決めるのが最も安全。IT特化型エージェントで「フルリモート×地方移住OK」を条件に求人を探す。</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">2</span>
                <p className="text-sm text-slate-600"><strong>移住先の下見:</strong> 2〜3回は現地訪問。季節ごとの気候、スーパーや病院へのアクセス、インターネット環境を確認。</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">3</span>
                <p className="text-sm text-slate-600"><strong>移住支援制度を活用:</strong> 国の移住支援金（最大100万円）、自治体独自の支援金、テレワーク移住支援など。申請期限に注意。</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">4</span>
                <p className="text-sm text-slate-600"><strong>住居とネット環境を確保:</strong> 光回線の有無は必須確認事項。コワーキングスペースの有無も重要ポイント。</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">5</span>
                <p className="text-sm text-slate-600"><strong>地域コミュニティに参加:</strong> 地方のIT勉強会やコワーキングで人脈を構築。孤独感の解消にも繋がる。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">地方移住×IT転職におすすめのエージェント3社</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. レバテックキャリア</h3>
              <p className="text-sm text-blue-700">
                フルリモート求人数No.1。地方移住を前提とした転職パターンに最も経験豊富。年収UP率80%で、移住しても年収ダウンさせない交渉力。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. ビズリーチ</h3>
              <p className="text-sm text-blue-700">
                ハイクラスリモート求人が豊富。年収600万円以上で地方移住したいシニアエンジニア・管理職向け。スカウト型で効率的。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. doda（IT特化）</h3>
              <p className="text-sm text-blue-700">
                全国の求人をカバー。移住先の地元企業の求人も確認できる。フルリモートと地元勤務の両方の選択肢を比較検討可能。
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
          <h2 className="text-xl font-bold mb-3">地方移住×IT転職で理想のライフスタイルを</h2>
          <p className="text-blue-100 text-sm mb-4">
            東京の年収×地方の生活コスト。フルリモート求人に強いエージェントで、移住前に転職を決めましょう。
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
              { name: "フルリモートIT転職ガイド", href: "/area/remote/" },
              { name: "札幌のIT転職事情", href: "/area/sapporo/" },
              { name: "福岡のIT転職事情", href: "/area/fukuoka/" },
              { name: "リモートワーク求人に強いエージェント比較", href: "/compare/remote-agents/" },
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
