import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "転職エージェントに断られた時の対処法｜理由と代替手段";
const PAGE_DESC =
  "転職エージェントに断られた・登録を断られた時の理由と代替手段を解説。30代・40代エンジニアが別ルートで転職を成功させる具体策とチェックリストを紹介します。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：断られても転職はできる" },
  { id: "reasons", label: "断られる5つの理由" },
  { id: "service", label: "サービスにより断られやすさが違う" },
  { id: "actions", label: "断られた時の対処法" },
  { id: "alternatives", label: "エージェント以外の代替手段" },
  { id: "checklist", label: "再挑戦前のチェックリスト" },
  { id: "middle", label: "30代・40代が断られた時の視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const reasons = [
  { num: "1", title: "そのエージェントの得意分野と合っていない", desc: "総合型のなかにはIT職の評価が手薄なサービスもあります。エンジニアの市場価値を正しく評価できず「紹介できる求人がない」となるケースです。IT特化型に切り替えると対応されることが多くあります。" },
  { num: "2", title: "実務経験が浅い／未経験寄り", desc: "サービスにより未経験者の扱いは大きく異なります。レバテックキャリアは「未経験者は紹介されにくい」との口コミ傾向があります（Qiita Job Change等）。経験が浅い場合は間口の広い総合型から始めるのが無難です。" },
  { num: "3", title: "希望条件が市場とかけ離れている", desc: "「年収大幅アップ＋フルリモート＋残業ゼロ」など条件が厳しすぎると、紹介できる求人が極端に減ります。条件に優先順位をつけ、譲れる点を明確にしましょう。" },
  { num: "4", title: "短期離職の繰り返しなど経歴上の懸念", desc: "在職期間が短い転職を繰り返していると慎重に判断される場合があります。一貫したキャリアテーマがあれば説明可能なので、経歴の意味づけを準備しましょう。" },
  { num: "5", title: "登録者が多くサポート枠が埋まっている", desc: "人気サービスは時期により新規受付を制限することがあります。タイミングを変えて再登録すると対応されることもあります。" },
];

const checklist = [
  "IT特化型エージェントに登録し直したか（総合型だけで判断していないか）",
  "希望条件に優先順位をつけ、譲れる点を整理したか",
  "職務経歴書で技術スタックと実績を数値化して書けているか",
  "対応エリアの広いサービス（全国対応/拠点多数）を試したか",
  "スカウト型・ダイレクト型など別ルートを併用したか",
  "経歴の懸念点（短期離職等）に一貫した説明を用意したか",
];

const faqs = [
  {
    q: "エージェントに断られる主な理由は？",
    a: "主に「そのエージェントの得意分野と合わない」「実務経験が浅い」「希望条件が市場とかけ離れている」「経歴上の懸念」「登録者過多でサポート枠が埋まっている」です。特に総合型はIT職の評価が手薄な場合があり、IT特化型に切り替えると対応されることが多くあります。",
  },
  {
    q: "断られたらすぐ別のエージェントに登録すべき？",
    a: "はい。エージェントごとに得意分野やサポート対象が異なるため、1社に断られても他社では歓迎されるケースが多くあります。IT特化型を中心に2〜3社へ登録し直すのがおすすめです。地方在住なら全国対応の総合型も併用しましょう。",
  },
  {
    q: "未経験寄りだと断られやすい？",
    a: "サービスにより差があります。レバテックキャリアは未経験者が紹介されにくいとの口コミ傾向があります（Qiita Job Change等）。一方ワークポートは未経験歓迎求人も豊富とされ（公式/二次）、全国47都道府県57拠点を持ちます。経験が浅い場合は間口の広い総合型から始めるのが無難です。",
  },
  {
    q: "40代だと年齢で断られやすい？",
    a: "年齢だけを理由に断られるケースは減っています。40代はマネジメント経験や専門領域の有無が評価軸です。ビズリーチはハイクラス・スカウト型で年収1,000万円以上求人が全体の約4割（二次）と、40代の市場価値把握に向きます。レバテック公表値では正社員SE 40代の平均年収は約618万円（2025年・ガイド記事）です。",
  },
  {
    q: "断られた理由は教えてもらえる？",
    a: "多くのエージェントは「ご紹介できる求人がない」という婉曲的な説明にとどまります。より具体的なフィードバックが欲しい場合は、別のエージェントの初回面談で率直に聞いてみる、職務経歴書を見直すといった方法があります。理由が分かれば対策が立てられます。",
  },
  {
    q: "エージェントなしでも転職できる？",
    a: "できます。スカウト型（ビズリーチ・paiza転職）、ダイレクトリクルーティング（Green）、企業の採用ページからの直接応募、リファラル（社員紹介）など選択肢は多数あります。paizaはスキルチェックのランクで評価されるため、経歴より実力で勝負したい人に向きます。",
  },
  {
    q: "スキルを上げてから再登録してもいい？",
    a: "問題ありません。職務経歴書の改善やポートフォリオの充実、資格取得などで市場価値を高めてから再登録すれば、対応される可能性が上がります。その間にスカウト型でプロフィールを公開し、市場の反応を見ておくのも有効です。",
  },
];

export default function AgentRejectionPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/knowledge/agent-rejection/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "エージェントに断られた時" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          転職エージェントに断られた時の対処法｜理由と代替手段
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 断られても転職を成功させる方法
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          転職エージェントに登録したのに「現在ご紹介できる求人がございません」と断られた——ショックを受けるかもしれませんが、これは珍しいことではありません。多くの場合、あなたの市場価値の問題ではなく「そのエージェントとの相性」の問題です。本記事では、断られる理由をサービスの特性から整理し、別ルートで転職を成功させる具体的な手段とチェックリストを解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={["各社公式サイト・公式ガイド", "Qiita Job Change等の口コミプラットフォーム傾向", "転職メディア集計値（時点付き）"]}
        />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：断られても転職はできる</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              1社に断られても、それは「あなたが転職できない」ことを意味しません。エージェントごとに得意分野が違うため、<strong>IT特化型へ登録し直す＋スカウト型や直接応募を併用する</strong>のが基本の立て直し方です。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>・総合型で断られたら<Link href="/review/levtech/" className="font-semibold underline">レバテックキャリア</Link>等のIT特化型へ</li>
              <li>・未経験寄りなら間口の広い<Link href="/review/workport/" className="font-semibold underline">ワークポート</Link>を検討</li>
              <li>・経歴より実力で勝負したいなら<Link href="/review/paiza/" className="font-semibold underline">paiza転職</Link>のスカウト</li>
            </ul>
          </div>
        </section>

        {/* 理由 */}
        <section id="reasons" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">断られる5つの理由</h2>
          <div className="space-y-4">
            {reasons.map((item) => (
              <div key={item.num} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* サービスによる違い */}
        <section id="service" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">サービスにより断られやすさが違う</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            「断られやすさ」はサービスの設計に左右されます。各社の特性を知れば、自分に合う登録先を選び直せます。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">サービス</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">特性（出典付き）</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">向く人</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-3 border border-slate-200 font-medium">
                    <Link href="/review/levtech/" className="text-petrol hover:underline">レバテックキャリア</Link>
                  </td>
                  <td className="px-4 py-3 border border-slate-200">IT特化。利用者の約80%が20〜30代（公式ガイド）。未経験者は紹介されにくいとの口コミ傾向（Qiita Job Change等）。</td>
                  <td className="px-4 py-3 border border-slate-200">実務経験のある30代</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-3 border border-slate-200 font-medium">
                    <Link href="/review/workport/" className="text-petrol hover:underline">ワークポート</Link>
                  </td>
                  <td className="px-4 py-3 border border-slate-200">全国47都道府県57拠点。未経験歓迎求人も豊富（公式/二次）。求職者完全無料。</td>
                  <td className="px-4 py-3 border border-slate-200">未経験寄り・地方在住</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-3 border border-slate-200 font-medium">
                    <Link href="/review/bizreach-it/" className="text-petrol hover:underline">ビズリーチ</Link>
                  </td>
                  <td className="px-4 py-3 border border-slate-200">ハイクラス・スカウト型。年収1,000万円以上求人が全体の約4割（二次）。経歴次第でスカウトが来ない場合も（二次）。</td>
                  <td className="px-4 py-3 border border-slate-200">経験豊富な40代</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-3 border border-slate-200 font-medium">
                    <Link href="/review/paiza/" className="text-petrol hover:underline">paiza転職</Link>
                  </td>
                  <td className="px-4 py-3 border border-slate-200">スキルチェックのランクで実力評価→スカウト。書類選考免除あり。ランクB以上でないと届きにくいとの声（二次）。</td>
                  <td className="px-4 py-3 border border-slate-200">コードで評価されたい人</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 py-3 border border-slate-200 font-medium">
                    <Link href="/review/green/" className="text-petrol hover:underline">Green</Link>
                  </td>
                  <td className="px-4 py-3 border border-slate-200">エージェントではなくダイレクトリクルーティング。直接応募・カジュアル面談中心で仲介の合否判断がない。</td>
                  <td className="px-4 py-3 border border-slate-200">自分で動けるベンチャー志望</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            未経験・経験浅めの方の比較は<Link href="/compare/inexperienced/" className="text-petrol hover:underline">未経験向けエージェント比較</Link>、ハイクラス層は<Link href="/compare/highclass/" className="text-petrol hover:underline">ハイクラス向け比較</Link>も参考になります。
          </p>
        </section>

        {/* 対処法 */}
        <section id="actions" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">断られた時の対処法</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">対処法</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">具体的アクション</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">期待できる効果</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">IT特化型へ登録し直す</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">レバテック・Geekly等を2〜3社</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">技術を正しく評価され紹介されやすい</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">スカウト型に登録</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">ビズリーチ・paiza転職</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">企業から直接オファーが届く</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">直接応募・ダイレクト型</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">Green・企業の採用ページ</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">仲介の合否判断を経ず応募できる</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">希望条件を見直す</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">優先順位の整理と妥協点の明確化</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">マッチする求人が増える</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">職務経歴書を改善して再挑戦</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">技術スタック・実績の数値化</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">市場価値が伝わり選択肢が広がる</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 代替手段 */}
        <section id="alternatives" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エージェント以外の代替手段</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. スカウト型サービス</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">ビズリーチやpaiza転職にプロフィールを登録すると、企業やヘッドハンターから直接オファーが届きます。詳しくは<Link href="/knowledge/scout/" className="underline">スカウトの活用法</Link>を参照してください。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. ダイレクトリクルーティング・直接応募</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">Greenや企業の採用ページから直接応募する方法。仲介の合否判断を経ずに応募できます。<Link href="/knowledge/direct-apply/" className="underline">直接応募とエージェントの使い分け</Link>もご覧ください。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. リファラル（社員紹介）</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">知人の紹介で応募する方法。内部情報を事前に得やすいのが利点です。<Link href="/knowledge/referral/" className="underline">リファラル転職のメリット・デメリット</Link>で詳しく解説しています。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. LinkedIn・技術コミュニティ経由</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">プロフィールを充実させると採用担当やリクルーターからスカウトが届きます。勉強会・OSS活動・技術ブログが目に留まることもあります。<Link href="/knowledge/linkedin/" className="underline">LinkedInを使った転職術</Link>を参照。</p>
            </div>
          </div>
        </section>

        {/* チェックリスト */}
        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">再挑戦前のチェックリスト</h2>
          <ul className="space-y-2">
            {checklist.map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="text-petrol font-bold shrink-0">✓</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            職務経歴書の改善は<Link href="/knowledge/resume/" className="text-petrol hover:underline">職務経歴書の書き方</Link>、自分の市場価値の確認は<Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の調べ方</Link>が役立ちます。
          </p>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代が断られた時の視点</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>
              30代・40代で断られると「年齢のせいか」と落ち込みがちですが、実際は「そのエージェントの得意層と合っていない」だけのことが多いです。若手向けに最適化されたサービスで断られても、ハイクラスや専門領域に強いサービスでは歓迎されることがあります。
            </p>
            <p>
              40代はマネジメント経験や専門性が評価軸になります。ビズリーチは年収1,000万円以上求人が全体の約4割（二次）で、レバテック公表値では正社員SE 40代の平均年収は約618万円・年収1,000万円以上の割合は12.67%（2025年・ガイド記事）です。年齢ではなく「何ができるか」を職務経歴書で言語化し直すことが、再挑戦の最短ルートです。
            </p>
            <p>
              年代別の実態は<Link href="/age/30s/" className="text-petrol hover:underline">30代の転職</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職</Link>も参考にしてください。
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
          <h2 className="text-xl font-bold mb-3">IT特化型エージェントに登録し直そう</h2>
          <p className="text-blue-100 text-sm mb-4">
            総合型で断られた方も、IT特化型ならエンジニアの市場価値を正しく評価してくれます。10社の比較から選び直しましょう。
          </p>
          <Link
            href="/compare/agents/"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            IT転職エージェント10社比較を見る
          </Link>
        </section>

        {/* 関連記事 */}
        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "未経験向けエージェント比較", href: "/compare/inexperienced/" },
              { name: "直接応募とエージェントの使い分け", href: "/knowledge/direct-apply/" },
              { name: "スカウトの活用法", href: "/knowledge/scout/" },
              { name: "エージェントの選び方", href: "/knowledge/how-to-choose/" },
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
              { name: "LinkedInを使った転職術", href: "/knowledge/linkedin/" },
            ].map((item) => (
              <Link
                key={item.href}
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
