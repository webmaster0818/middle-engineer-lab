import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "直接応募とエージェント経由の違い｜Greenの使い方と使い分け";
const PAGE_DESC =
  "転職の直接応募とエージェント経由の違いを徹底比較。Green等のダイレクト型の使い方、メリット・デメリット、30代・40代エンジニアの使い分け方を例文とともに解説します。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：状況で使い分け、多くは併用" },
  { id: "difference", label: "直接応募とエージェント経由の違い" },
  { id: "green", label: "Greenなど直接応募型の使い方" },
  { id: "fit", label: "どちらが向いているか" },
  { id: "combine", label: "併用する場合のコツと例文" },
  { id: "middle", label: "30代・40代の使い分け" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const compareRows = [
  { item: "応募の主体", direct: "自分で企業に応募", agent: "エージェントが推薦・仲介" },
  { item: "年収交渉", direct: "自分で交渉", agent: "エージェントが代行" },
  { item: "非公開求人", direct: "アクセス不可", agent: "アクセス可能" },
  { item: "面接対策", direct: "自分で準備", agent: "企業別の対策あり" },
  { item: "スピード", direct: "自分のペース", agent: "担当と連携して進む" },
  { item: "企業の内部情報", direct: "口コミサイト・面談で収集", agent: "担当から詳細情報を得やすい" },
  { item: "求職者の費用", direct: "無料", agent: "無料（企業が成功報酬を負担）" },
  { item: "向く企業", direct: "ベンチャー・採用ページ整備企業", agent: "大手・非公開募集の企業" },
];

const combineTips = [
  { title: "1. 応募先の管理表を作る", desc: "どの企業にどのルートで応募したかをスプレッドシートで管理し、重複応募を防ぎます。管理表の作り方は複数併用の記事を参照してください。" },
  { title: "2. エージェントには直接応募の存在を伝える", desc: "直接応募している企業があることをエージェントに共有しておくと、同じ企業を重複して進めるトラブルを防げます。隠す方がリスクです。" },
  { title: "3. 大手・非公開求人はエージェント経由", desc: "大手IT企業は推薦付きの応募を好む傾向があり、非公開求人はエージェント経由でしかアクセスできません。ここは仲介の強みが出ます。" },
  { title: "4. ベンチャー・スタートアップは直接応募", desc: "採用予算が限られるベンチャーはGreen等からの直接応募やカジュアル面談を歓迎する傾向があります。社風を確かめてから選考に進めます。" },
  { title: "5. 内定比較・最終交渉はエージェントを活用", desc: "複数内定が出た際の条件比較や年収交渉は、エージェントの力を借りると有利に進めやすくなります。" },
];

const declineExample = {
  label: "直接応募で進む企業をエージェントに伝える例文",
  body:
    "お世話になっております。1点共有です。◯◯社につきましては、企業の採用ページから直接応募して選考が進んでおります。重複を避けるため、貴社経由でのご紹介は不要です。他の求人は引き続きよろしくお願いいたします。",
};

const faqs = [
  {
    q: "直接応募とエージェント経由、どちらが内定しやすい？",
    a: "一概には言えません。エージェント経由は推薦・事前の情報共有・面接対策のサポートがあり、特に大手や非公開求人で力を発揮します。一方、ベンチャーやスタートアップではGreen等からの直接応募・カジュアル面談が歓迎されることもあります。志望企業のタイプで向き不向きが変わります。",
  },
  {
    q: "直接応募だと年収交渉は自分でやる？",
    a: "はい、自分で交渉するか、提示条件を承認するかになります。交渉に不安があればエージェント経由が安心です。エージェントは年収交渉を代行してくれるため、候補者が直接言いにくい条件も伝えやすくなります。",
  },
  {
    q: "エージェント経由は採用コストが高いから不利になる？",
    a: "IT業界はエンジニア採用難が続いており、成功報酬を払ってでも採用したい企業がほとんどです（経産省の2019年公表の試算では2030年に最大約79万人のIT人材不足）。手数料を理由に不採用になることは基本的に想定しなくて構いません。ただし採用予算が限られるベンチャーは直接応募を好む傾向があります。",
  },
  {
    q: "Greenはエージェントとどう違う？",
    a: "Greenはエージェントではなく成功報酬型の転職サイト（ダイレクトリクルーティング）です。掲載企業9,000社以上・求人15,000件以上（媒体により30,000件以上とも・二次、幅あり）で、企業と直接やり取りし、カジュアル面談で社風を把握してから選考に進めます。仲介サポートはないため、年収交渉や日程調整は自分で行います。",
  },
  {
    q: "直接応募とエージェント経由は併用していい？",
    a: "併用が最も効果的です。ただし同じ企業に両方のルートから応募するのは避けてください。企業側で情報が重複し印象が悪くなります。どの企業をどのルートで受けるかを事前に整理しておきましょう。",
  },
  {
    q: "スタートアップは直接応募の方がいい？",
    a: "Greenや企業の採用ページからの直接応募が効果的なことが多いです。採用予算が限られるスタートアップは成功報酬を避ける傾向があり、直接応募やカジュアル面談を歓迎するケースが目立ちます。",
  },
  {
    q: "結局どちらを選べばいい？",
    a: "初めての転職や年収交渉に不安がある方はエージェント経由、志望企業が明確で自分で動ける方は直接応募が向きます。多くの方にはIT特化型エージェントと直接応募（Green等）の併用がおすすめです。",
  },
];

export default function DirectApplyPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/knowledge/direct-apply/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "直接応募とエージェントの使い分け" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          直接応募とエージェント経由の違い｜Greenの使い方と使い分け
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | どちらが有利？使い分け方を解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          転職活動を始めるとき、「エージェントに登録すべきか」「企業に直接応募すべきか」で迷う方は多いはずです。結論から言えば、両者にメリット・デメリットがあり、状況に応じた使い分け、あるいは併用が最も効果的です。本記事では、直接応募とエージェント経由の違い、Greenなどダイレクト型の使い方、向き不向き、併用のコツと例文まで解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={["各社公式サイト・公式ガイド", "経済産業省 IT人材需給に関する調査（2019年公表）", "転職メディア集計値（時点付き）"]}
        />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-blue-600 hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：状況で使い分け、多くは併用</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              「大手・非公開求人はエージェント経由」「ベンチャー・志望が明確な企業は直接応募」が基本の使い分けです。多くの30代・40代エンジニアには、<strong>IT特化型エージェント＋Green等の直接応募の併用</strong>が現実的です。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>・直接応募の代表：<Link href="/review/green/" className="font-semibold underline">Green</Link>（カジュアル面談中心のダイレクト型）</li>
              <li>・非公開求人・推薦が欲しいなら：<Link href="/review/levtech/" className="font-semibold underline">レバテックキャリア</Link>等のIT特化型</li>
              <li>・同じ企業に両ルートで応募しないことが鉄則</li>
            </ul>
          </div>
        </section>

        {/* 違い・比較表 */}
        <section id="difference" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">直接応募とエージェント経由の違い</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            両者は「自分で動くか、プロに仲介してもらうか」の違いです。下表で要点を整理します。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">比較項目</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">直接応募</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">エージェント経由</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr key={row.item} className={i % 2 === 1 ? "bg-slate-50" : ""}>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600 font-medium">{row.item}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{row.direct}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{row.agent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Greenの使い方 */}
        <section id="green" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Greenなど直接応募型の使い方</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            <Link href="/review/green/" className="text-blue-600 hover:underline">Green</Link>はエージェントではなく成功報酬型の転職サイト（ダイレクトリクルーティング）です。掲載企業9,000社以上・求人15,000件以上（媒体により30,000件以上とも・二次、幅あり）で、IT/Webベンチャー・スタートアップに強いのが特徴です。使い方の流れは次のとおりです。
          </p>
          <div className="space-y-4">
            {[
              { num: "1", title: "プロフィールを作り込む", desc: "技術スタックを具体名で、実績は数値で記載します。企業は検索で候補者を探すため、使った技術名を網羅するほど見つかりやすくなります。" },
              { num: "2", title: "「気になる」やカジュアル面談を活用する", desc: "Greenでは企業と直接やり取りでき、選考前のカジュアル面談で社風や開発体制を把握できます。気軽に複数社と話して比較しましょう。" },
              { num: "3", title: "自分で日程調整・条件確認を行う", desc: "仲介サポートがないため、面接日程や年収・条件の確認は自分で進めます。年収交渉に不安があればエージェント経由の企業と併用してバランスを取ります。" },
              { num: "4", title: "企業の採用ページも併せてチェック", desc: "志望が固まっている企業は、採用ページから直接応募する手もあります。エージェント経由と重複しないよう管理表で整理しておきましょう。" },
            ].map((item) => (
              <div key={item.num} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            実力で評価されたい場合は、スキルチェックのランクでスカウトが届く<Link href="/review/paiza/" className="text-blue-600 hover:underline">paiza転職</Link>もダイレクト型の選択肢です。スカウトの使い方は<Link href="/knowledge/scout/" className="text-blue-600 hover:underline">スカウトの活用法</Link>を参照してください。
          </p>
        </section>

        {/* 向き不向き */}
        <section id="fit" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">どちらが向いているか</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 className="font-bold text-green-800 mb-3">直接応募が向いている人</h3>
              <ul className="text-sm text-green-700 space-y-2">
                <li className="flex gap-2"><span className="font-bold shrink-0">✓</span><span>志望企業が明確に決まっている</span></li>
                <li className="flex gap-2"><span className="font-bold shrink-0">✓</span><span>年収交渉や条件確認を自分でできる</span></li>
                <li className="flex gap-2"><span className="font-bold shrink-0">✓</span><span>ベンチャー・スタートアップを志望している</span></li>
                <li className="flex gap-2"><span className="font-bold shrink-0">✓</span><span>自分のペースで活動したい</span></li>
                <li className="flex gap-2"><span className="font-bold shrink-0">✓</span><span>カジュアル面談で社風を確かめたい</span></li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-bold text-blue-800 mb-3">エージェント経由が向いている人</h3>
              <ul className="text-sm text-blue-700 space-y-2">
                <li className="flex gap-2"><span className="font-bold shrink-0">✓</span><span>初めての転職で不安がある</span></li>
                <li className="flex gap-2"><span className="font-bold shrink-0">✓</span><span>年収交渉を代行してほしい</span></li>
                <li className="flex gap-2"><span className="font-bold shrink-0">✓</span><span>非公開求人にアクセスしたい</span></li>
                <li className="flex gap-2"><span className="font-bold shrink-0">✓</span><span>面接対策のサポートが欲しい</span></li>
                <li className="flex gap-2"><span className="font-bold shrink-0">✓</span><span>市場価値を客観的に知りたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* 併用のコツ */}
        <section id="combine" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">併用する場合のコツと例文</h2>
          <div className="space-y-4 mb-6">
            {combineTips.map((t) => (
              <div key={t.title} className="bg-blue-50 rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-1">{t.title}</h3>
                <p className="text-sm text-blue-700 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <div className="bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700">{declineExample.label}</div>
            <p className="px-4 py-3 text-sm text-slate-600 leading-relaxed">{declineExample.body}</p>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            併用時の管理表の作り方や断り方の例文は<Link href="/knowledge/multiple-agents/" className="text-blue-600 hover:underline">複数併用と管理術</Link>でまとめています。
          </p>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の使い分け</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>
              30代・40代は在職中の活動が多く、限られた時間で効率を上げる必要があります。志望が明確な企業はGreen等で直接応募し、情報が読みにくい大手や非公開求人はエージェントに任せる、と役割分担すると無駄が減ります。
            </p>
            <p>
              40代は年収交渉の比重が大きくなります。年収レンジの参考として、レバテック公表値では正社員SE 40代の平均年収は約618万円・年収1,000万円以上の割合は12.67%（2025年・ガイド記事）です。直接応募で自分の希望を伝えつつ、最終交渉や条件比較はエージェントの力を借りると有利に進められます。なお背景として、経産省の2019年公表の試算では2030年に最大約79万人のIT人材不足とされ、経験者の採用ニーズは依然高い状況です。
            </p>
            <p>
              年代別の実態は<Link href="/age/30s/" className="text-blue-600 hover:underline">30代の転職</Link>・<Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職</Link>も参考にしてください。
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border border-slate-200 rounded-lg overflow-hidden">
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
          <h2 className="text-xl font-bold mb-3">直接応募と並行してエージェントも活用しよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            エージェントは完全無料。登録しておけば、直接応募ではアクセスできない非公開求人も紹介してもらえます。
          </p>
          <Link
            href="/compare/agents/"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            IT転職エージェント10社比較を見る
          </Link>
        </section>

        {/* 関連記事 */}
        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "スカウトの活用法", href: "/knowledge/scout/" },
              { name: "複数エージェントの併用と管理", href: "/knowledge/multiple-agents/" },
              { name: "Greenの評判", href: "/review/green/" },
              { name: "リファラル転職のメリット・デメリット", href: "/knowledge/referral/" },
              { name: "LinkedInを使った転職術", href: "/knowledge/linkedin/" },
              { name: "エージェントの選び方", href: "/knowledge/how-to-choose/" },
            ].map((item) => (
              <Link
                key={item.href}
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
