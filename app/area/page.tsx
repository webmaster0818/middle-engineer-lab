import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "エリア別IT転職ガイド一覧【全14エリア】求人・年収",
  description:
    "東京・大阪・名古屋・福岡など全国14エリアのIT転職事情を、求人数の目安・平均年収とともに分類。エリアとフルリモートを組み合わせて考えるためのガイドもまとめました。",
};

const categories = [
  {
    name: "首都圏",
    intro: "求人量が圧倒的に多く、選択肢と年収レンジが広いエリア。出社・リモート双方の求人が揃います。",
    areas: [
      { slug: "tokyo", name: "東京", jobs: "約85,000件", salary: "550〜800万円", desc: "国内IT求人の中心。あらゆる業態・技術が揃う。" },
      { slug: "yokohama", name: "横浜・神奈川", jobs: "約12,000件", salary: "500〜750万円", desc: "都心通勤圏。生活環境と求人量のバランス良。" },
      { slug: "saitama", name: "さいたま・埼玉", jobs: "約5,000件", salary: "450〜700万円", desc: "都内アクセス良好。地元志向の転職にも。" },
      { slug: "chiba", name: "千葉", jobs: "約4,000件", salary: "450〜700万円", desc: "都心通勤＋地元勤務の選択肢がある。" },
    ],
  },
  {
    name: "関西",
    intro: "西日本最大のIT集積地。Web系から大手まで一定の求人があり、Uターンの受け皿にも。",
    areas: [
      { slug: "osaka", name: "大阪", jobs: "約18,000件", salary: "500〜750万円", desc: "関西の中心。求人量・年収ともに地方上位。" },
      { slug: "kyoto", name: "京都", jobs: "約3,500件", salary: "480〜720万円", desc: "メーカー・研究開発系に特色のあるエリア。" },
      { slug: "kobe", name: "神戸・兵庫", jobs: "約3,000件", salary: "470〜700万円", desc: "大阪通勤圏。製造業のIT求人も見られる。" },
    ],
  },
  {
    name: "その他主要都市",
    intro: "地方中核都市。求人量は首都圏に劣るものの、生活コストと暮らしやすさで人気のエリアです。",
    areas: [
      { slug: "nagoya", name: "名古屋・愛知", jobs: "約10,000件", salary: "480〜730万円", desc: "製造業DX需要が厚い中部の中心都市。" },
      { slug: "fukuoka", name: "福岡", jobs: "約5,500件", salary: "450〜700万円", desc: "スタートアップ集積で移住人気の高い都市。" },
      { slug: "sapporo", name: "札幌・北海道", jobs: "約3,000件", salary: "420〜650万円", desc: "受託・自社開発が一定数。移住先として人気。" },
      { slug: "sendai", name: "仙台・宮城", jobs: "約2,500件", salary: "420〜650万円", desc: "東北の中心。地元志向・Uターン需要に対応。" },
      { slug: "hiroshima", name: "広島", jobs: "約2,000件", salary: "430〜660万円", desc: "中国地方の拠点。製造業関連の求人が中心。" },
    ],
  },
  {
    name: "リモート・移住",
    intro: "勤務地に縛られない働き方の選択肢。エリアの制約を外して全国の求人を狙えます。",
    areas: [
      { slug: "remote", name: "フルリモート", jobs: "約20,000件", salary: "500〜800万円", desc: "居住地を問わず都市部水準の求人に応募可能。" },
      { slug: "iiju", name: "地方移住×IT転職", jobs: "約5,000件", salary: "400〜650万円", desc: "移住しながらITで働くための進め方を解説。" },
    ],
  },
];

const allAreas = categories.flatMap((c) => c.areas);

const toc = [
  { id: "guide", label: "エリア×リモートの考え方" },
  ...categories.map((c, i) => ({ id: `cat-${i}`, label: c.name })),
];

export default function AreaIndexPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "エリア別IT転職ガイド一覧",
    description:
      "東京・大阪・名古屋・福岡など全国14エリアのIT転職事情を分類した一覧ページ。",
    url: "https://middle-engineer.com/area/",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: allAreas.length,
      itemListElement: allAreas.map((area, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://middle-engineer.com/area/${area.slug}/`,
        name: `${area.name}のIT転職ガイド`,
      })),
    },
  };

  return (
    <>
      <ArticleJsonLd
        title="エリア別IT転職ガイド一覧【全14エリア】"
        description="東京・大阪・名古屋・福岡など全国14エリアのIT転職事情を分類した一覧ページ。"
        url="/area/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エリア別ガイド" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エリア別IT転職ガイド一覧【全14エリア】
        </h1>
        <p className="text-slate-600 leading-relaxed mb-4">
          IT転職は勤務地によって求人量も年収レンジも大きく変わります。本ページでは全国{allAreas.length}エリアを首都圏・関西・主要都市・リモートに分類し、求人数の目安と平均年収とともに各エリアのガイドへ案内します。さらに、エリアとフルリモートを組み合わせて考えるための視点もまとめました。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={["doda・レバテック公表の求人傾向", "厚生労働省 job tag", "各サービス公式サイト"]}
        />

        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月｜求人数は調査時点の各社公開情報に基づく概数で、集計条件により変動します。
        </p>

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-blue-600 hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ガイド: エリア×リモートの考え方 */}
        <section id="guide" className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エリア×リモートの考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「住みたい場所」と「働ける求人」は必ずしも一致しません。フルリモートが定着したいま、エリアは次の3パターンで考えると整理しやすくなります。
          </p>
          <ul className="space-y-3 text-slate-600 leading-relaxed list-disc pl-5 mb-4">
            <li>
              <span className="font-medium text-slate-700">出社前提でエリアを選ぶ</span>
              ：通勤圏内の求人に絞る代わりに、対面のコミュニケーションやオフィス環境を重視するパターン。求人量の多い
              <Link href="/area/tokyo/" className="text-blue-600 hover:underline">東京</Link>
              や
              <Link href="/area/osaka/" className="text-blue-600 hover:underline">大阪</Link>
              などの都市が中心になります。
            </li>
            <li>
              <span className="font-medium text-slate-700">フルリモートで居住地の制約を外す</span>
              ：地方や郊外に住みながら、都市部水準の年収の求人に応募する考え方です。求人の探し方は
              <Link href="/area/remote/" className="text-blue-600 hover:underline">フルリモート転職ガイド</Link>
              で解説しています。
            </li>
            <li>
              <span className="font-medium text-slate-700">移住とセットで考える</span>
              ：暮らしを変えるために地方へ移り、現地企業またはリモート求人で働くパターン。
              <Link href="/area/iiju/" className="text-blue-600 hover:underline">地方移住×IT転職</Link>
              で、移住前後の進め方を確認できます。
            </li>
          </ul>
          <p className="text-slate-600 leading-relaxed">
            ミドル層は家庭やライフプランの影響も大きいため、まず「出社の必要度」を決めてからエリアを選ぶと迷いません。働き方そのものを見直したい場合は、
            <Link href="/knowledge/remote-work/" className="text-blue-600 hover:underline">リモートワーク転職</Link>
            や
            <Link href="/knowledge/work-life-balance/" className="text-blue-600 hover:underline">ワークライフバランス</Link>
            の記事もあわせてご覧ください。
          </p>
        </section>

        {/* カテゴリ別 */}
        {categories.map((category, ci) => (
          <section key={category.name} id={`cat-${ci}`} className="mb-10">
            <h2 className="text-xl font-bold text-slate-800 mb-2 pb-2 border-b border-slate-200">
              {category.name}
            </h2>
            <p className="text-sm text-slate-600 mb-4">{category.intro}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {category.areas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/area/${area.slug}/`}
                  className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors group"
                >
                  <h3 className="font-bold text-slate-800 text-sm mb-1 group-hover:text-blue-600 transition-colors">
                    {area.name}
                  </h3>
                  <p className="text-xs text-slate-600 mb-2">{area.desc}</p>
                  <p className="text-xs text-slate-500 mb-1">
                    <span className="font-medium text-slate-600">IT求人数:</span> {area.jobs}
                  </p>
                  <p className="text-xs text-slate-500">
                    <span className="font-medium text-slate-600">平均年収:</span> {area.salary}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">希望エリアの求人を探す</h2>
          <p className="text-blue-100 text-sm mb-4">
            エリアに強いIT転職エージェントに相談して、あなたの希望勤務地の求人を紹介してもらいましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>
      </article>
    </>
  );
}
