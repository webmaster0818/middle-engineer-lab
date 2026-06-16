import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "GreenとWantedly比較｜ベンチャー転職はどっちがおすすめ【2026年6月】",
  description:
    "GreenとWantedlyをどっちがおすすめか即答。ダイレクトリクルーティング型2社を、給与表示・求人数・使い方・対象層で時点付き実データで徹底比較。30代40代エンジニアのベンチャー・スタートアップ転職の選び方を解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：どっちがおすすめか" },
  { id: "basic", label: "基本データ比較表（2026年6月時点）" },
  { id: "salary", label: "給与・条件表示で比較（最大の違い）" },
  { id: "jobs", label: "求人数・企業数で比較" },
  { id: "usage", label: "使い方・選考フローで比較" },
  { id: "target", label: "対象層・得意領域で比較" },
  { id: "reviews", label: "口コミ傾向（出典付き）" },
  { id: "checklist", label: "向いている人チェックリスト" },
  { id: "combo", label: "併用ガイド" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const comparison = [
  { item: "運営会社", green: "株式会社アトラエ（東証プライム上場・2003年10月設立／二次情報）", wantedly: "ウォンテッドリー株式会社（東証グロース上場）" },
  { item: "サービス形態", green: "成功報酬型の転職サイト（ダイレクトリクルーティング）。エージェントの仲介サポートはなし", wantedly: "共感軸の直接応募／ビジネスSNS（カジュアル面談前提）" },
  { item: "給与・条件表示", green: "求人に給与・条件が記載される（通常の転職サイト型）", wantedly: "原則非記載（最大の特徴であり注意点）" },
  { item: "規模", green: "掲載企業9,000社以上／求人15,000件以上（媒体により30,000件以上とも・幅あり）", wantedly: "ユーザー400万人以上／利用企業4万社以上（二次情報）" },
  { item: "登録者", green: "120万人超（二次情報・幅あり）", wantedly: "400万人以上（二次情報）" },
  { item: "対応エリア", green: "全国（東京中心）", wantedly: "全国（東京中心）" },
  { item: "得意領域", green: "IT/Webベンチャー・スタートアップ・メガベンチャー", wantedly: "スタートアップ・ベンチャー、専門職（エンジニア含む）" },
  { item: "主な使い方", green: "「気になる」機能・スカウト・企業と直接やり取り", wantedly: "カジュアル面談で社風・ビジョンを知ってから検討" },
  { item: "料金", green: "求職者完全無料（企業側が掲載・成功報酬を負担）", wantedly: "求職者無料" },
];

const faqs = [
  { q: "GreenとWantedlyはどっちがおすすめ？", a: "給与・条件を見ながらベンチャー求人に直接応募・スカウトで進めたいならGreen、まずカジュアル面談で社風やビジョンへの共感から入りたいならWantedlyがおすすめです。どちらも求職者無料の直接型サービスのため、両方登録して気になる企業にアプローチするのが効率的です。" },
  { q: "給与が見られないって本当？", a: "Wantedlyは給与・待遇が原則非記載で、これが最大の特徴であり注意点です。共感軸でカジュアル面談に進み、条件は面談で確認する設計になっています。Greenは通常の転職サイトと同様に求人へ給与・条件が記載されるため、条件を見て検討したい人はGreenが向きます。" },
  { q: "どちらもエージェントが付く？", a: "いずれもダイレクトリクルーティング型で、担当アドバイザーによる仲介サポートはありません。求人探し・企業とのやり取り・条件交渉は自分で行います。担当者の伴走が欲しい場合は、レバテックキャリアなどのエージェント型を併用するとよいでしょう。" },
  { q: "求人数・企業数が多いのはどっち？", a: "Greenは掲載企業9,000社以上・求人15,000件以上（媒体により30,000件以上とも・幅あり）。Wantedlyは利用企業4万社以上・ユーザー400万人以上（二次情報）です。集計基準が異なるため単純比較はできませんが、いずれもIT/Webベンチャー・スタートアップの母数が豊富です。" },
  { q: "30代エンジニアにはどっち？", a: "条件を見て効率的に応募したい30代はGreen、社風・ビジョンへの共感を重視してじっくり入りたい30代はWantedlyが向きます。どちらもベンチャー・スタートアップ志向と相性が良く、両方登録して気になる企業の温度感を比較するのが現実的です。" },
  { q: "40代エンジニアにはどっち？", a: "両社ともベンチャー・スタートアップ中心のため、40代はマネジメント・技術リードなどの専門性を打ち出せると有利です。給与・条件を見て選びたい40代はGreenを軸に、共感重視で社風を確かめたいならWantedlyを併用する形が現実的です。" },
  { q: "カジュアル面談とは？", a: "選考とは別に、企業と気軽に話して相互理解を深める面談です。Wantedlyはこのカジュアル面談を前提とした設計で、いきなり選考ではなく「まず話してみる」から入れます。Greenでも「気になる」機能から企業と直接やり取りでき、温度感を確かめてから応募に進めます。" },
  { q: "両方登録しても大丈夫？", a: "問題なく、むしろベンチャー求人の母数と企業との接点が広がるため推奨されます。両方無料です。条件重視ならGreen、共感重視ならWantedly、と入口を使い分けるのが効果的です。" },
];

const greenReviews = {
  good: ["給与・条件を見て応募できる", "「気になる」機能で企業と直接つながれる", "IT/Webベンチャーの求人が豊富"],
  bad: ["エージェントの仲介サポートがない", "条件交渉は自分で行う必要がある", "応募管理を自分で行う手間がある"],
};
const wantedlyReviews = {
  good: ["カジュアル面談で社風を知れる", "共感軸でマッチしやすい", "スタートアップとの接点が多い"],
  bad: ["給与・待遇が原則非記載", "条件は面談で確認する必要がある", "自分で動く前提のサービス"],
};

const relatedLinks = [
  { name: "Greenの詳細レビュー", href: "/review/green/" },
  { name: "Wantedlyの詳細レビュー", href: "/review/wantedly/" },
  { name: "IT転職エージェント比較", href: "/compare/agents/" },
  { name: "Geekly vs Green", href: "/compare/geekly-vs-green/" },
  { name: "メガベンチャー向けエージェント比較", href: "/compare/megaventure-agents/" },
  { name: "30代におすすめのエージェント", href: "/compare/30s-agents/" },
];

export default function GreenVsWantedlyPage() {
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
        title="GreenとWantedly比較｜ベンチャー転職はどっちがおすすめ【2026年6月】"
        description="GreenとWantedlyをどっちがおすすめか即答。給与表示・求人数・使い方・対象層を時点付き実データで徹底比較します。"
        url="/compare/green-vs-wantedly/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "比較" },
          { name: "Green vs Wantedly" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          GreenとWantedly比較｜ベンチャー転職はどっちがおすすめ？
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ ダイレクトリクルーティング型2社を実データで徹底比較
        </p>

        <p className="text-slate-600 leading-relaxed mb-2">
          IT/Webベンチャー・スタートアップ転職の定番、GreenとWantedly。どちらも担当エージェントが付かない直接型のサービスですが、「給与・条件を見て応募する」Greenと「共感軸でカジュアル面談から入る」Wantedlyでは、アプローチの設計が大きく異なります。本記事では公開されている実データと口コミ傾向をもとに、30代・40代エンジニア視点で「どっちを選ぶべきか」を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "株式会社アトラエ（Green）公式・二次情報",
            "ウォンテッドリー株式会社公式・二次情報",
            "みん評・axxis・HonNe等の口コミプラットフォーム（傾向要約）",
          ]}
        />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm text-petrol-deep">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="hover:underline">{t.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：どっちがおすすめか</h2>
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-lg p-6">
            <p className="font-bold text-blue-900 mb-3">
              給与・条件を見てベンチャー求人に直接応募するなら「Green」、共感軸でカジュアル面談から入るなら「Wantedly」。
            </p>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>① GreenはIT/Webベンチャーに強い成功報酬型の転職サイト。求人に給与・条件が記載され、「気になる」機能で企業と直接やり取りできる。</li>
              <li>② Wantedlyは共感軸のビジネスSNS。給与は原則非記載で、カジュアル面談で社風・ビジョンを知ってから検討する設計。利用企業4万社以上（二次情報）。</li>
              <li>③ どちらも担当エージェントが付かない直接型のため、条件重視ならGreen・共感重視ならWantedlyと入口を使い分け、両方無料で併用するのが最も損のない選び方。</li>
            </ul>
          </div>
        </section>

        <section id="basic" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ比較表（2026年6月時点）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">比較項目</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">Green</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">Wantedly</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 align-top">
                    <td className="px-3 py-3 border border-slate-200 font-medium whitespace-nowrap">{row.item}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.green}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.wantedly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            ※ 企業数・求人数・登録者は時期により変動が大きく、媒体経由の二次集計値です。取得時点と出典が異なるため、件数の単純比較は推奨しません。
          </p>
        </section>

        <section id="salary" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">給与・条件表示で比較（最大の違い）</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Green：給与・条件が記載される</h3>
              <p className="text-sm text-petrol-deep">
                Greenは通常の転職サイトと同様に、求人に給与・条件が記載されます。条件を見て効率的に応募先を絞りたい人に向いており、ミスマッチが起きにくいのが利点です。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Wantedly：給与は原則非記載</h3>
              <p className="text-sm text-slate-600">
                Wantedlyは給与・待遇が原則非記載で、これが最大の特徴であり注意点です。共感軸でカジュアル面談に進み、条件は面談で確認する設計です。条件を最初から見たい人には不向きな場合があります。
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            「条件を見て判断したい」ならGreen、「まず社風・ビジョンに共感できるかから入りたい」ならWantedly、という整理が実務的です。Wantedlyを使う場合は、面談で年収・待遇を必ず確認することが重要です。
          </p>
        </section>

        <section id="jobs" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人数・企業数で比較</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Green</h3>
              <p className="text-sm text-petrol-deep">
                掲載企業9,000社以上・求人15,000件以上（媒体により30,000件以上とも・幅あり）。登録者は120万人超（二次情報・幅あり）。IT/Webベンチャー・スタートアップ・メガベンチャーの求人が豊富です。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Wantedly</h3>
              <p className="text-sm text-slate-600">
                ユーザー400万人以上・利用企業4万社以上（二次情報）。ビジネスSNSとしての規模が大きく、スタートアップ・ベンチャーとの接点が多いのが特徴です。
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500">
            ※ 集計時点・基準が各社で異なるため、数値の単純な大小比較はできません。あくまで各社の公表系の傾向として参照してください。
          </p>
        </section>

        <section id="usage" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">使い方・選考フローで比較</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Greenは「気になる」機能で企業に興味を伝え、企業からのスカウトや直接のやり取りを通じて応募に進みます。求人探し・応募管理・条件交渉は自分で行うため、能動的に動ける人ほど成果を出しやすい設計です。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Wantedlyはカジュアル面談を前提とし、いきなり選考ではなく「まず話してみる」から入れます。社風やビジョンへの共感を確かめてから選考に進めるため、ミスマッチを避けやすい一方、条件面は面談で自分から確認する必要があります。どちらもエージェントの仲介がないため、伴走が欲しい場合はエージェント型の併用が有効です。
          </p>
        </section>

        <section id="target" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">対象層・得意領域で比較</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3">Greenが強い領域</h3>
              <div className="flex flex-wrap gap-2">
                {["IT/Webベンチャー", "スタートアップ", "メガベンチャー", "給与・条件が見える", "「気になる」機能"].map((tag, i) => (
                  <span key={i} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-petrol-soft text-petrol-deep">{tag}</span>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">※ 成功報酬型の転職サイト。条件を見て直接応募・スカウトで進められる。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3">Wantedlyが強い領域</h3>
              <div className="flex flex-wrap gap-2">
                {["スタートアップ", "共感軸マッチング", "カジュアル面談", "ビジネスSNS", "専門職"].map((tag, i) => (
                  <span key={i} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">{tag}</span>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">※ 共感軸の直接応募。給与は原則非記載で、面談で確認する設計。</p>
            </div>
          </div>
        </section>

        <section id="reviews" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミ傾向（出典付き）</h2>
          <p className="text-sm text-slate-500 mb-4">
            以下は、みん評・axxis・HonNe・各種転職口コミメディアに見られる傾向を要約したものです（原文転載ではありません）。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">Greenの口コミ傾向</h3>
              <p className="text-xs font-medium text-slate-500 mb-1">良い評判</p>
              <ul className="space-y-1 text-sm text-slate-700 mb-3">
                {greenReviews.good.map((r, i) => <li key={i}>＋ {r}</li>)}
              </ul>
              <p className="text-xs font-medium text-slate-500 mb-1">気になる評判</p>
              <ul className="space-y-1 text-sm text-slate-600">
                {greenReviews.bad.map((r, i) => <li key={i}>− {r}</li>)}
              </ul>
              <p className="text-xs text-slate-400 mt-3">出典: みん評／axxis／HonNe 等の傾向</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">Wantedlyの口コミ傾向</h3>
              <p className="text-xs font-medium text-slate-500 mb-1">良い評判</p>
              <ul className="space-y-1 text-sm text-slate-700 mb-3">
                {wantedlyReviews.good.map((r, i) => <li key={i}>＋ {r}</li>)}
              </ul>
              <p className="text-xs font-medium text-slate-500 mb-1">気になる評判</p>
              <ul className="space-y-1 text-sm text-slate-600">
                {wantedlyReviews.bad.map((r, i) => <li key={i}>− {r}</li>)}
              </ul>
              <p className="text-xs text-slate-400 mt-3">出典: みん評／各種転職メディア 等の傾向</p>
            </div>
          </div>
        </section>

        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人チェックリスト</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">Greenが向く人</h3>
              <ul className="space-y-2 text-sm text-petrol-deep">
                <li>✓ 給与・条件を見て応募先を絞りたい</li>
                <li>✓ IT/Webベンチャーに転職したい</li>
                <li>✓ 企業と直接やり取りして進めたい</li>
                <li>✓ 自分のペースで能動的に動ける</li>
                <li>✓ ミスマッチを条件面から避けたい</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">Wantedlyが向く人</h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li>✓ 社風・ビジョンへの共感を重視する</li>
                <li>✓ カジュアル面談から気軽に入りたい</li>
                <li>✓ スタートアップとの接点を増やしたい</li>
                <li>✓ まず話してから選考を判断したい</li>
                <li>✓ 条件は面談で確認できる</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="combo" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">併用ガイド</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "Greenで条件から絞る", desc: "給与・条件が見えるGreenで、IT/Webベンチャー求人を条件面から絞り込み、「気になる」機能で接点を作ります。" },
                { num: "2", title: "Wantedlyで共感から接点を作る", desc: "Wantedlyではカジュアル面談で社風・ビジョンを確かめ、求人票だけでは分からない企業の温度感を知ります。" },
                { num: "3", title: "エージェント型で伴走を補う", desc: "どちらも担当エージェントが付かないため、書類添削や条件交渉の伴走が欲しい場合はレバテックキャリア等のエージェント型を併用すると安心です。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.num}</span>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-4">
              ベンチャー・メガベンチャー志向の人は
              <Link href="/compare/megaventure-agents/" className="text-petrol hover:underline">メガベンチャー向けエージェント比較</Link>
              も参照してください。
            </p>
          </div>
        </section>

        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
            <p className="text-slate-600 leading-relaxed text-sm">
              ベンチャー・スタートアップ転職では、30代・40代は「技術リード」「マネジメント」「特定ドメインの知見」といった専門性が評価軸になります。Greenは条件を見ながら自分の市場価値に合う求人を選べるため、年収を落とさずベンチャーに移りたいミドル層と相性が良いサービスです。
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              Wantedlyは給与が原則非記載のぶん、共感・カルチャーフィットを重視する企業との出会いに向きます。ただし条件面は面談で必ず確認し、ミドル層として年収・裁量・役割が現職以上になるかを見極めることが重要です。
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              背景として、経済産業省「IT人材需給に関する調査」（2019年3月公表の試算）では2030年に最大約79万人のIT人材不足が見込まれており、ベンチャーでも経験豊富なミドルエンジニアの需要は構造的に存在します。条件重視のGreenと共感重視のWantedlyを併用し、求人の母数と企業の温度感の両方を取りに行くのが、ミドルのベンチャー転職を成功させる近道です。
            </p>
            <p className="text-xs text-slate-500">
              ※ 厚労省 job tag「システムエンジニア（受託開発）」の平均年収は578.5万円・平均年齢37.1歳（令和7年賃金構造基本統計調査ベース）。年収交渉時の相場感の参考になります。
            </p>
          </div>
        </section>

        <section id="faq" className="mb-12 scroll-mt-20">
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
          <h2 className="text-xl font-bold mb-3">迷ったら両方登録がおすすめ</h2>
          <p className="text-blue-100 text-sm mb-4">
            GreenとWantedlyは両方無料。条件重視ならGreen・共感重視ならWantedlyと入口を使い分け、ベンチャー求人の接点を最大化しましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedLinks.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors"
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
