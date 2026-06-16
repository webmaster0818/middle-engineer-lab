import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "エンジニアの市場価値の測り方【年代別年収データ】",
  description:
    "30代・40代エンジニアが自分の市場価値を測る方法を解説。レバテック公表の年代別平均年収、市場価値を測る4つの方法、価値を高める戦略、判断チェックリストを出典付きで紹介します。",
};

const toc = [
  { id: "what", label: "1. 市場価値とは何で決まるか" },
  { id: "data", label: "2. 年代別・エンジニアの年収データ" },
  { id: "how", label: "3. 市場価値を測る4つの方法" },
  { id: "raise", label: "4. 市場価値を高める5つの戦略" },
  { id: "check", label: "5. 転職すべきか判断チェックリスト" },
  { id: "age", label: "6. 30代・40代の市場価値の考え方" },
  { id: "faq", label: "7. よくある質問" },
];

const faqs = [
  {
    q: "市場価値と現在の年収が乖離している場合、転職すべきですか？",
    a: "市場価値が現年収を大きく上回る場合は、転職で年収アップできる可能性があります。ただし現職の福利厚生・退職金・ストックオプションなども含めた総合的な待遇で比較しましょう。転職エージェントに相談して具体的な求人の年収レンジを確認するのが確実です。",
  },
  {
    q: "年収診断ツールの結果はどの程度信頼できますか？",
    a: "あくまで目安です。同じスキルセットでも企業規模や地域で年収が変わります。より正確に知るには、複数の転職エージェントに登録してアドバイザーの意見を比較するのがおすすめです。提示される求人の実際の年収レンジが最も信頼できる指標になります。",
  },
  {
    q: "マネジメント経験がないと市場価値は下がりますか？",
    a: "技術的な専門性が高ければ、スペシャリストとして高い市場価値を維持できます。一方でマネジメント経験があると、選択肢（EM・テックリードなど）が広がるのも事実です。どちらの軸で価値を高めるかは、自己分析で見極めましょう。",
  },
  {
    q: "市場価値を上げるために効果的なスキルは何ですか？",
    a: "クラウド（AWS/GCP）、Kubernetes、Go/Rust、AI/ML関連は需要が高い領域として挙げられます。ただし流行を追うより、自分の強みの延長線上にあるスキルを深掘りする方が市場価値は安定します。市場のニーズ（Must）はエージェント面談で確認しましょう。",
  },
  {
    q: "IT人材の需要は今後どうなりますか？",
    a: "経済産業省『IT人材需給に関する調査』（2019年3月公表）の試算では、2030年に最大約79万人のIT人材不足が見込まれています。あくまで2019年公表時点の試算ですが、エンジニアの需要が中長期的に高い水準で推移する見方の根拠とされています。",
  },
  {
    q: "市場価値診断を無料で受けられるサービスはありますか？",
    a: "レバテックキャリア、Geekly、ビズリーチなどで無料の市場価値診断・スキルシート診断を受けられます。特にレバテックキャリアはIT特化型で、具体的な求人の年収レンジと合わせて教えてもらえます。複数併用するとより正確です。",
  },
];

export default function MarketValuePage() {
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
        title="エンジニアの市場価値の測り方【年代別年収データ】"
        description="30代・40代エンジニアが自分の市場価値を測る方法を解説。レバテック公表の年代別平均年収、市場価値を測る4つの方法、価値を高める戦略、判断チェックリストを出典付きで紹介します。"
        url="/knowledge/market-value/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ" },
          { name: "市場価値の測り方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エンジニアの市場価値の測り方【年代別年収データ】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 年代別年収データと測定方法
        </p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            「自分の年収は適正なのか」「転職したらいくら稼げるのか」。エンジニアとして働くなかで、一度は気になるテーマです。市場価値は感覚で語られがちですが、年代別の年収データと客観的な測定方法を使えば、かなり具体的に把握できます。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、<strong>出典のある年代別年収データ</strong>をもとに、30代・40代エンジニアが自分の市場価値を測り、高めるための実践的な方法を解説します。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={["レバテック公表 年代別平均年収（2025年）", "経済産業省 IT人材需給に関する調査（2019年3月）", "厚生労働省 job tag"]}
        />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-sm text-petrol hover:underline">{t.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 1. 何で決まるか */}
        <section id="what" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">1. 市場価値とは何で決まるか</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            エンジニアの市場価値は、ざっくり次の4要素の掛け算で決まります。年齢そのものより『何を・どの規模で・どんな再現性で出せるか』が問われます。
          </p>
          <div className="space-y-4">
            {[
              { num: "1", title: "技術スキルの深さと幅", desc: "得意領域の専門性と、周辺技術への理解。需要の高い技術を持つほど評価されやすい。" },
              { num: "2", title: "成果・再現性", desc: "どんな成果を出してきたか、それが他社でも再現できそうか。数値で語れるほど強い。" },
              { num: "3", title: "役割・影響範囲", desc: "個人の実装か、チームリードか、技術選定や組織課題まで踏み込んだか。" },
              { num: "4", title: "市場の需給", desc: "その時点でどの技術・役割の求人が多いか。需要が多いほど価値は上がる。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.num}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mt-5">
            <p className="text-sm text-amber-800">
              <strong>需給の背景：</strong>経済産業省『IT人材需給に関する調査』（2019年3月公表）では、2030年に最大約79万人のIT人材不足が試算されています。2019年公表時点の試算ではありますが、エンジニアの需要が中長期で高水準に推移する根拠とされています。
            </p>
          </div>
        </section>

        {/* 2. 年代別データ */}
        <section id="data" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">2. 年代別・エンジニアの年収データ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            自分の市場価値を測る出発点として、まず年代別の平均水準を押さえましょう。下表はレバテックが公表する正社員SEの年代別平均年収（2025年）です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">年代</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">正社員SE 平均年収</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">年収1,000万円以上の割合</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">20代</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">約378万円</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-400">—</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">30代</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">約499万円</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">8.01%</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">40代</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">約618万円</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">12.67%</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">50代</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">約685万円</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-400">—</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典：レバテック公表の年代別平均年収・年収1,000万円以上の割合（2025年）。あくまで平均値であり、企業規模・技術領域・地域により上下します。</p>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mt-5">
            <p className="text-sm text-slate-600 mb-2">
              <strong>参考：職種の平均値</strong>
            </p>
            <p className="text-sm text-slate-600">
              厚生労働省 job tag では「システムエンジニア（受託開発）」の平均年収は578.5万円・平均年齢37.1歳（令和7年賃金構造基本統計調査ベース）とされています。転職全体の動向としては、パーソルキャリア「2024年度 決定年収レポート」（2025年5月公表）で、転職者の約6割が年収アップ、IT・通信の平均決定年収は469万円（2023年度）→486万円（2024年度）と公表されています。
            </p>
          </div>
          <p className="text-sm text-slate-600 mt-4">
            年代別の詳しい相場は<Link href="/knowledge/salary-30s/" className="text-petrol underline">30代の年収相場</Link>・<Link href="/knowledge/salary-40s/" className="text-petrol underline">40代の年収相場</Link>でも解説しています。
          </p>
        </section>

        {/* 3. 測る方法 */}
        <section id="how" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">3. 市場価値を測る4つの方法</h2>
          <p className="text-slate-600 leading-relaxed mb-4">平均値はあくまで出発点です。自分の市場価値を具体的に知るには、次の方法を組み合わせます。</p>
          <div className="space-y-4">
            {[
              { num: "1", title: "転職エージェントの面談を受ける", desc: "最も確実。IT特化型エージェントに登録し、自分のスキルセットでどの年収帯の求人を紹介してもらえるか確認する。複数を比較するとより正確。" },
              { num: "2", title: "スカウトの提示年収を見る", desc: "ビズリーチ等に経歴を登録し、届くスカウトの提示年収を集計する。高い／低いの中央値が現実的な目安になる。" },
              { num: "3", title: "求人の年収レンジを調査する", desc: "自分のスキルに合う求人を20〜30件ピックアップし、年収レンジの中央値を計算する。市場全体の相場感がつかめる。" },
              { num: "4", title: "年収診断ツールを使う", desc: "各社の年収診断ツールで概算を把握する。最初の目安として有効だが、あくまで参考値。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.num}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. 高める戦略 */}
        <section id="raise" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">4. 市場価値を高める5つの戦略</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. T字型スキルを目指す</h3>
              <p className="text-sm text-petrol-deep">1つの深い専門性＋幅広い周辺知識。バックエンドが専門でも、インフラやフロントの基礎を理解していると価値が上がります。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. ビジネスインパクトを語れるようにする</h3>
              <p className="text-sm text-petrol-deep">技術だけでなく『その技術でどれだけの事業成果を生んだか』を数値で語れるエンジニアは高く評価されます。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. アウトプットを増やす</h3>
              <p className="text-sm text-petrol-deep">技術ブログ・OSS・登壇は市場価値を可視化します。スカウトの数と質が変わります。関連: <Link href="/knowledge/portfolio/" className="text-petrol-deep underline">ポートフォリオの見せ方</Link>。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. リード・マネジメント経験を積む</h3>
              <p className="text-sm text-petrol-deep">技術力に加えてチームを率いた経験があると、選択肢が広がります。関連: <Link href="/knowledge/management/" className="text-petrol-deep underline">マネジメントキャリア</Link>。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">5. 需要の高い技術を取り入れる</h3>
              <p className="text-sm text-petrol-deep">クラウド・Kubernetes・Go/Rust・AI/ML関連は需要が高い領域です。自分の軸を保ちつつ取り入れましょう。関連: <Link href="/knowledge/continuous-learning/" className="text-petrol-deep underline">継続的な学習</Link>。</p>
            </div>
          </div>
        </section>

        {/* 5. チェックリスト */}
        <section id="check" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">5. 転職すべきか判断チェックリスト</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <p className="text-sm text-slate-600 mb-3">3つ以上当てはまるなら、一度エージェント面談で市場価値を確かめる価値があります。</p>
            <ul className="space-y-2">
              {[
                "同年代の平均年収（上表）より自分の年収が明らかに低い",
                "ここ2〜3年、年収がほとんど上がっていない",
                "新しい技術を学ぶ機会が職場でほとんどない",
                "スカウトの提示年収が現年収を上回っている",
                "求人を見ると、自分のスキルでより良い条件の枠が多くある",
                "評価制度が不透明で、頑張りが年収に反映されない",
              ].map((c, i) => (
                <li key={i} className="flex gap-2 text-sm text-slate-700">
                  <span className="text-petrol font-bold shrink-0">□</span>{c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 6. 年代別 */}
        <section id="age" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">6. 30代・40代の市場価値の考え方</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：伸びしろと専門性の両方が評価される</h3>
              <p className="text-sm text-petrol-deep">レバテック公表値では30代の正社員SE平均は約499万円、年収1,000万円以上は8.01%。専門性を深めつつリード経験を積むと、上位レンジに入りやすくなります。関連: <Link href="/age/30s/" className="text-petrol-deep underline">30代の転職</Link>。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：再現性とマネジメントで上位レンジへ</h3>
              <p className="text-sm text-petrol-deep">40代の正社員SE平均は約618万円、年収1,000万円以上は12.67%と30代より高い水準です（レバテック公表・2025年）。成果の再現性とマネジメント／高度な専門性が、上位レンジへの鍵になります。関連: <Link href="/age/40s/" className="text-petrol-deep underline">40代の転職</Link>。</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">7. よくある質問</h2>
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
          <h2 className="text-xl font-bold mb-3">無料で市場価値診断を受けよう</h2>
          <p className="text-blue-100 text-sm mb-4">IT特化型エージェントに登録すれば、あなたのスキルセットに基づいた市場価値と具体的な求人の年収レンジを教えてもらえます。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "30代エンジニアの年収相場", href: "/knowledge/salary-30s/" },
              { name: "40代エンジニアの年収相場", href: "/knowledge/salary-40s/" },
              { name: "年収交渉のコツ", href: "/knowledge/salary-negotiation/" },
              { name: "自己分析ガイド", href: "/knowledge/self-analysis/" },
              { name: "キャリアプラン設計", href: "/knowledge/career-plan/" },
              { name: "ハイクラス向けエージェント比較", href: "/compare/highclass/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
