import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/compare/type-vs-mynavi/" },
  title: "type転職エージェントITとマイナビIT AGENT比較｜どっちがおすすめ【2026年6月】",
  description:
    "type転職エージェントITとマイナビIT AGENTをどっちがおすすめか即答。年収交渉に強いtypeと若手サポートが手厚いマイナビを、実績・対象層・サポートで時点付き実データで徹底比較。30代40代エンジニアの選び方を解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：どっちがおすすめか" },
  { id: "basic", label: "基本データ比較表（2026年6月時点）" },
  { id: "salary", label: "年収アップ実績で比較" },
  { id: "support", label: "サポート体制で比較" },
  { id: "area", label: "対応エリア・対象層で比較" },
  { id: "reviews", label: "口コミ傾向（出典付き）" },
  { id: "checklist", label: "向いている人チェックリスト" },
  { id: "combo", label: "併用ガイド" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const comparison = [
  { item: "運営会社", type: "株式会社キャリアデザインセンター（1993年設立・二次情報／公式）", mynavi: "株式会社マイナビ" },
  { item: "サービス形態", type: "IT/Web特化型エージェント（首都圏中心）", mynavi: "IT特化型エージェント（マイナビIT AGENT）" },
  { item: "公開求人数", type: "総数の公式値は確認範囲で非明示", mynavi: "総数の公式値は非公表（断定不可）" },
  { item: "得意領域", type: "首都圏のIT/Web業界。年収交渉・面接対策に注力", mynavi: "20〜30代若手層／書類添削・面接対策の手厚さ" },
  { item: "年収アップ実績", type: "年収アップ希望者の約71%が増収・平均増額92万円／ITエンジニアは124万円（2021年10月〜2022年9月の自社調査）", mynavi: "転職後定着率97.5%・年収アップ率73.7%（転職メディア集計値・二次情報）" },
  { item: "対応エリア", type: "首都圏中心", mynavi: "全国（首都圏・関西・名古屋・福岡が中心）" },
  { item: "サポート", type: "年収交渉・面接対策に強み", mynavi: "IT専門のキャリアアドバイザーによる個別支援・書類添削が手厚い" },
  { item: "料金", type: "求職者完全無料", mynavi: "求職者は完全無料" },
];

const faqs = [
  { q: "type転職エージェントITとマイナビIT AGENTはどっちがおすすめ？", a: "首都圏で年収交渉・面接対策に力を入れて年収アップを狙うならtype転職エージェントIT、全国対応で書類添削・面接対策の手厚いサポートを受けたいならマイナビIT AGENTがおすすめです。どちらもIT特化型で求職者無料のため、両方登録して提案とサポートの質を比較するのが効率的です。" },
  { q: "年収アップ実績が公表されているのはどっち？", a: "type転職エージェントITは年収アップ希望者の約71%が増収・平均増額92万円、ITエンジニアに限ると124万円（いずれも2021年10月〜2022年9月の自社調査）という具体的な実績を公表しています。マイナビIT AGENTは転職後定着率97.5%・年収アップ率73.7%（転職メディア集計値・二次情報）が知られています。集計基準が異なるため単純比較はできませんが、typeは年収交渉に強い実績を打ち出しています。" },
  { q: "全国対応なのはどっち？", a: "マイナビIT AGENTです。全国（首都圏・関西・名古屋・福岡が中心）に対応しています。type転職エージェントITは首都圏中心のため、首都圏外で転職を考える場合はマイナビが軸になります。首都圏でじっくり年収交渉まで進めたい場合はtypeが向きます。" },
  { q: "サポートが手厚いのはどっち？", a: "どちらも手厚いですが、方向性が異なります。type転職エージェントITは年収交渉・面接対策に注力し、年収を引き上げる支援に強みがあります。マイナビIT AGENTは書類添削・面接対策の丁寧さと、IT専門アドバイザーによる個別支援が評価されており、定着率97.5%（二次情報）という実績にも表れています。" },
  { q: "30代エンジニアにはどっち？", a: "首都圏で年収アップを狙う30代はtype転職エージェントIT、丁寧なサポートで着実に進めたい30代やマイナビの求人網を使いたい30代はマイナビIT AGENTが向きます。マイナビは20〜30代の若手層支援に定評があり、30代の利用とも相性が良いサービスです。" },
  { q: "40代エンジニアにはどっち？", a: "マイナビIT AGENTは20〜30代若手層を得意とするため、40代は求人が絞られやすい点に注意が必要です。type転職エージェントITは年収交渉に強いものの首都圏中心です。40代は両社だけに頼らず、求人母数の多い総合型（リクルートエージェントIT）やハイクラス（ビズリーチ）を併用して母数を確保するのが現実的です。" },
  { q: "年収交渉を任せたいならどっち？", a: "type転職エージェントITです。年収アップ希望者の約71%が増収・平均増額92万円（ITエンジニアは124万円／2021年10月〜2022年9月の自社調査）という実績があり、年収交渉・面接対策に注力しています。現年収より上を狙いたい場合はtypeを軸にするとよいでしょう。" },
  { q: "両方登録しても大丈夫？", a: "問題なく、むしろ首都圏の年収交渉（type）と全国対応の手厚いサポート（マイナビ）を両取りできるため推奨されます。両方無料です。同じ企業へ重複応募しないよう、応募状況は自分で管理しておきましょう。" },
];

const typeReviews = {
  good: ["年収交渉に強く増収につながった", "面接対策が具体的で実践的", "首都圏のIT/Web求人に詳しい"],
  bad: ["対応エリアが首都圏中心", "求人総数が公式非明示で全体像が掴みにくい", "首都圏外では使いにくい場合がある"],
};
const mynaviReviews = {
  good: ["書類添削・面接対策が丁寧", "IT専門アドバイザーの個別支援が手厚い", "全国対応で求人網が広い"],
  bad: ["20〜30代向けで40代は求人が絞られやすい", "連絡頻度が多いと感じる場合がある", "担当者の質にばらつき"],
};

const relatedLinks = [
  { name: "type転職エージェントITの詳細レビュー", href: "/review/type-agent/" },
  { name: "マイナビIT AGENTの詳細レビュー", href: "/review/mynavi-it/" },
  { name: "IT転職エージェント比較", href: "/compare/agents/" },
  { name: "レバテックキャリア vs マイナビIT AGENT", href: "/compare/levtech-vs-mynavi/" },
  { name: "doda vs マイナビIT AGENT", href: "/compare/doda-vs-mynavi/" },
  { name: "30代におすすめのエージェント", href: "/compare/30s-agents/" },
];

export default function TypeVsMynaviPage() {
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
        title="type転職エージェントITとマイナビIT AGENT比較｜どっちがおすすめ【2026年6月】"
        description="type転職エージェントITとマイナビIT AGENTをどっちがおすすめか即答。年収アップ実績・サポート・対応エリア・対象層を時点付き実データで徹底比較します。"
        url="/compare/type-vs-mynavi/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "比較" },
          { name: "type転職エージェントIT vs マイナビIT AGENT" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          type転職エージェントITとマイナビIT AGENT比較｜どっちがおすすめ？
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ IT特化型エージェント2社を実データで徹底比較
        </p>

        <p className="text-slate-600 leading-relaxed mb-2">
          IT特化型エージェントのtype転職エージェントITとマイナビIT AGENT。どちらも書類添削・面接対策に定評がありますが、「首都圏で年収交渉に強い」typeと「全国対応で若手サポートが手厚い」マイナビでは、強みの方向性が異なります。本記事では公開されている実データと口コミ傾向をもとに、30代・40代エンジニア視点で「どっちを選ぶべきか」を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "株式会社キャリアデザインセンター（type）公式・自社調査（2021年10月〜2022年9月）",
            "マイナビ公式・転職メディア集計値（二次情報）",
            "Qiita Job Change・OUTSIDEMAGAZINE等の口コミメディア（傾向要約）",
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
              首都圏で年収交渉に強い支援を受けるなら「type転職エージェントIT」、全国対応で書類添削・面接対策の手厚いサポートなら「マイナビIT AGENT」。
            </p>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>① type転職エージェントITは年収交渉・面接対策に注力。年収アップ希望者の約71%が増収・平均増額92万円、ITエンジニアは124万円（2021年10月〜2022年9月の自社調査）。首都圏中心。</li>
              <li>② マイナビIT AGENTは全国対応で書類添削・面接対策が手厚い。転職後定着率97.5%・年収アップ率73.7%（転職メディア集計値・二次情報）。20〜30代若手層に強い。</li>
              <li>③ 「年収交渉のtype」「手厚いサポートと全国網のマイナビ」と強みが分かれるため、両方無料で登録し提案を比較するのが最も損のない選び方。</li>
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
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">type転職エージェントIT</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">マイナビIT AGENT</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 align-top">
                    <td className="px-3 py-3 border border-slate-200 font-medium whitespace-nowrap">{row.item}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.type}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.mynavi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            ※ 実績値は集計期間・調査主体が異なります（typeは自社調査、マイナビは転職メディア集計の二次情報）。数値の単純比較は推奨しません。
          </p>
        </section>

        <section id="salary" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収アップ実績で比較</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">type転職エージェントIT</h3>
              <p className="text-sm text-petrol-deep">
                年収アップ希望者の約71%が増収、平均増額92万円。ITエンジニアに限ると平均増額124万円（いずれも2021年10月〜2022年9月の自社調査）。年収交渉・面接対策への注力が、具体的な増収実績に表れています。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">マイナビIT AGENT</h3>
              <p className="text-sm text-slate-600">
                転職後定着率97.5%・年収アップ率73.7%（転職メディア集計値・二次情報）。ミスマッチの少なさと着実な年収改善を打ち出しており、丁寧なサポートが定着率の高さにつながっています。
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500">
            ※ 集計期間・基準・調査主体が異なるため、数値の単純な大小比較はできません。typeは自社調査、マイナビは二次集計値です。
          </p>
        </section>

        <section id="support" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">サポート体制で比較</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            type転職エージェントITは年収交渉・面接対策に注力しており、内定後の条件交渉まで踏み込んだ支援が強みです。現年収より上を狙いたい人にとって、交渉の後ろ盾になりやすいサービスです。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            マイナビIT AGENTはIT専門のキャリアアドバイザーによる個別支援と、書類添削・面接対策の丁寧さが評価されています。定着率97.5%（二次情報）という実績にも、ミスマッチを抑える手厚いサポートが表れています。どちらも担当者との相性が満足度を左右するため、合わない場合は担当変更や併用先の活用が有効です。
          </p>
        </section>

        <section id="area" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">対応エリア・対象層で比較</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3">type転職エージェントITが強い領域</h3>
              <div className="flex flex-wrap gap-2">
                {["首都圏のIT/Web", "年収交渉", "面接対策", "増収実績", "ITエンジニア平均増額124万円"].map((tag, i) => (
                  <span key={i} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-petrol-soft text-petrol-deep">{tag}</span>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">※ 首都圏中心。年収交渉・面接対策への注力が特徴。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3">マイナビIT AGENTが強い領域</h3>
              <div className="flex flex-wrap gap-2">
                {["全国対応", "20〜30代若手", "書類添削", "面接対策", "定着率97.5%（二次）"].map((tag, i) => (
                  <span key={i} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">{tag}</span>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">※ 全国（首都圏・関西・名古屋・福岡が中心）。若手サポートの手厚さが特徴。</p>
            </div>
          </div>
        </section>

        <section id="reviews" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミ傾向（出典付き）</h2>
          <p className="text-sm text-slate-500 mb-4">
            以下は、Qiita Job Change・OUTSIDEMAGAZINE・各種転職口コミメディアに見られる傾向を要約したものです（原文転載ではありません）。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">type転職エージェントITの口コミ傾向</h3>
              <p className="text-xs font-medium text-slate-500 mb-1">良い評判</p>
              <ul className="space-y-1 text-sm text-slate-700 mb-3">
                {typeReviews.good.map((r, i) => <li key={i}>＋ {r}</li>)}
              </ul>
              <p className="text-xs font-medium text-slate-500 mb-1">気になる評判</p>
              <ul className="space-y-1 text-sm text-slate-600">
                {typeReviews.bad.map((r, i) => <li key={i}>− {r}</li>)}
              </ul>
              <p className="text-xs text-slate-400 mt-3">出典: Qiita Job Change／各種転職メディア 等の傾向</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">マイナビIT AGENTの口コミ傾向</h3>
              <p className="text-xs font-medium text-slate-500 mb-1">良い評判</p>
              <ul className="space-y-1 text-sm text-slate-700 mb-3">
                {mynaviReviews.good.map((r, i) => <li key={i}>＋ {r}</li>)}
              </ul>
              <p className="text-xs font-medium text-slate-500 mb-1">気になる評判</p>
              <ul className="space-y-1 text-sm text-slate-600">
                {mynaviReviews.bad.map((r, i) => <li key={i}>− {r}</li>)}
              </ul>
              <p className="text-xs text-slate-400 mt-3">出典: Qiita Job Change／OUTSIDEMAGAZINE 等の傾向</p>
            </div>
          </div>
        </section>

        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人チェックリスト</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">type転職エージェントITが向く人</h3>
              <ul className="space-y-2 text-sm text-petrol-deep">
                <li>✓ 首都圏で転職を考えている</li>
                <li>✓ 年収交渉を任せて増収を狙いたい</li>
                <li>✓ 実践的な面接対策を受けたい</li>
                <li>✓ IT/Web業界に絞って探したい</li>
                <li>✓ 現年収より上のオファーが欲しい</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">マイナビIT AGENTが向く人</h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li>✓ 全国・地方で求人を探したい</li>
                <li>✓ 書類添削・面接対策を丁寧に受けたい</li>
                <li>✓ 20〜30代でサポートを重視する</li>
                <li>✓ ミスマッチの少ない転職をしたい</li>
                <li>✓ IT専門アドバイザーの個別支援が欲しい</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="combo" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">併用ガイド</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "首都圏×年収交渉ならtypeを軸に", desc: "首都圏で現年収より上を狙うなら、年収交渉に強いtype転職エージェントITを軸にし、面接対策まで踏み込んだ支援を受けます。" },
                { num: "2", title: "全国×手厚いサポートならマイナビを軸に", desc: "地方も含めて探す、または書類添削・面接対策を丁寧に受けたいなら、全国対応のマイナビIT AGENTを軸にします。" },
                { num: "3", title: "母数を補うなら総合型・ハイクラスを追加", desc: "40代や求人母数を増やしたい場合は、リクルートエージェントITやビズリーチを併用し、選択肢と交渉材料を最大化します。" },
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
              他のIT特化型との比較は
              <Link href="/compare/levtech-vs-mynavi/" className="text-petrol hover:underline">レバテックキャリア vs マイナビIT AGENT</Link>
              も参照してください。
            </p>
          </div>
        </section>

        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
            <p className="text-slate-600 leading-relaxed text-sm">
              30代・40代の転職では、年収を落とさず、できれば上げて移れるかが重要になります。type転職エージェントITは年収交渉に強く、ITエンジニアの平均増額124万円（2021年10月〜2022年9月の自社調査）という実績があり、首都圏で年収アップを狙うミドル層の後ろ盾になります。
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              マイナビIT AGENTは20〜30代若手層を得意とするため、40代では求人が絞られやすい点に注意が必要です。一方で全国対応と丁寧なサポートは、地方在住や初めての転職活動で着実に進めたいミドル層に向きます。40代は両社に加え、求人母数の多い総合型やハイクラス型を併用して母数を確保するのが現実的です。
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              背景として、経済産業省「IT人材需給に関する調査」（2019年3月公表の試算）では2030年に最大約79万人のIT人材不足が見込まれており、経験を積んだミドルエンジニアの需要は構造的に存在します。年収交渉のtypeと全国網のマイナビを使い分け、自分の状況に合った支援を選ぶことが成功の近道です。
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
            type転職エージェントITとマイナビIT AGENTは両方無料。年収交渉と全国対応の手厚いサポートという強みが異なるため、2社で提案を比較しましょう。
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
