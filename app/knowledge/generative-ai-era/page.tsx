import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/generative-ai-era/" },
  title: "生成AI時代に生き残るエンジニアのスキル【30-40代の戦い方】",
  description:
    "生成AIで奪われる仕事・残る仕事の切り分けから、求められる3要素、伸ばすべきスキルまで30-40代エンジニア向けに解説。経験・要件定義・マネジメントがAI時代にむしろ価値を増す理由を、誇張せず整理します。",
};

const toc = [
  { id: "conclusion", label: "1. 結論：奪われるのは『作業』、残るのは『判断』" },
  { id: "split", label: "2. AIに奪われる仕事・残る仕事の切り分け" },
  { id: "three", label: "3. これから求められる3要素" },
  { id: "polarize", label: "4. 二極化：『叩くだけ』か『組み立てる側』か" },
  { id: "skills", label: "5. 伸ばすと効くスキル" },
  { id: "nontech", label: "6. AIに代替されにくい非技術スキル" },
  { id: "middle", label: "7. なぜミドルの経験はAI時代に価値が上がるのか" },
  { id: "faq", label: "8. よくある質問" },
];

const faqs = [
  {
    q: "生成AIでエンジニアの仕事はなくなりますか？",
    a: "「すべてなくなる」という見方は単純化しすぎです。生成AIが得意なのは定型的なコード生成・補完・調査の効率化で、これらの作業の比重は下がっていく傾向があります。一方で、要件定義・設計・技術選定・チーム間の合意形成といった『判断』や『課題設定』は人間の役割として残りやすい領域です。仕事が消えるというより、仕事の中身がAIを前提に再編される、と捉えるのが現実的です。",
  },
  {
    q: "30-40代はAIに詳しい若手に負けてしまいませんか？",
    a: "ツールの操作習熟だけで比べれば差は出にくくなります。しかし生成AIを実務で価値に変えるには、解くべき課題を定義し、出力の妥当性を判断し、ドメイン知識で補正する力が必要です。これらは経験の蓄積がものを言う領域で、むしろ30-40代の強みが活きます。AIを使いこなす前提で、自分の経験を掛け合わせる姿勢が鍵になります。",
  },
  {
    q: "生成AIエンジニアの年収はどのくらい上がりますか？",
    a: "生成AI領域の年収や市場規模については、信頼できる一次統計が乏しく、広告的・誇張的な数字も出回っているため、本記事では具体的な金額予測は掲載しません。確実に言えるのは、AIを前提とした開発力に加えて課題設定・設計まで担える人材の需要が高まる傾向がある、という点までです。最新の市場感は、実際の求人やエージェントを通じて確認することをおすすめします。",
  },
  {
    q: "まず何から学べばいいですか？",
    a: "いきなり高度なモデル開発に進む必要はありません。まずは生成AIを日々の開発に組み込んで『AIに任せる作業／自分が判断する部分』の感覚を掴むこと、次にRAGやLLMアプリの基本構成、プロンプト設計、ハルシネーション（誤った生成）への対処といった実務寄りの知識へ広げるのが現実的です。学習の進め方そのものは継続的な学習の記事も参考になります。",
  },
  {
    q: "AIに仕事を奪われないために資格を取るべきですか？",
    a: "資格そのものより、AIを前提に『何を解けるか』を示せることの方が重要です。資格はきっかけや体系的な学習の足がかりとしては有効ですが、資格コレクターになって目的を見失うと効果が薄れます。学んだことを実際のアウトプット（個人開発・記事・OSS）に結びつけると、AI時代でも評価されやすくなります。",
  },
  {
    q: "学び直しや職種転換も視野に入れるべきですか？",
    a: "AIで作業の比重が変わる中、新しい領域への学び直しを検討する人も増えています。公的補助金を使ったリスキリングや職種転換については",
    aLink: { text: "リスキリングの進め方", href: "/knowledge/reskilling/" },
    aAfter: "を、日々の学習戦略は継続的な学習の記事を参照してください。",
  },
];

export default function GenerativeAiEraPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a + (faq.aLink ? faq.aLink.text + (faq.aAfter ?? "") : ""),
      },
    })),
  };

  return (
    <>
      <ArticleJsonLd
        title="生成AI時代に生き残るエンジニアのスキル【30-40代の戦い方】"
        description="生成AIで奪われる仕事・残る仕事の切り分けから、求められる3要素、伸ばすべきスキルまで30-40代エンジニア向けに解説。経験・要件定義・マネジメントがAI時代にむしろ価値を増す理由を、誇張せず整理します。"
        url="/knowledge/generative-ai-era/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ" },
          { name: "生成AI時代の生き残りスキル" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          生成AI時代に生き残るエンジニアのスキル【30-40代の戦い方】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 経験を武器にAI時代を生き抜くミドルの戦略
        </p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            「生成AIにエンジニアの仕事が奪われる」という言説が広がる一方、現場の感覚はもう少し冷静です。奪われていくのは<strong>定型的な『作業』</strong>であり、残り、むしろ重みを増すのは<strong>課題を定義し出力を判断する『判断』</strong>です。この切り分けを理解すると、30-40代が取るべき戦略が見えてきます。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事は<strong>生成AI時代の生き残りスキル</strong>に特化します。日々の学習戦略全般は<Link href="/knowledge/continuous-learning/" className="text-petrol underline">継続的な学習の進め方</Link>を、補助金を使った学び直し・職種転換は<Link href="/knowledge/reskilling/" className="text-petrol underline">リスキリングの進め方</Link>をあわせてご覧ください。
          </p>
        </section>

        <DataNote surveyedAt="2026年6月" sources={["各IT転職エージェント公開情報"]} />

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

        {/* 1. 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">1. 結論：奪われるのは『作業』、残るのは『判断』</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            生成AIが得意なのは、過去のパターンに基づくコード生成・補完・調査の効率化です。これらは「作業」であり、比重は下がっていく傾向があります。一方で<strong>「何を作るべきか」「この出力は正しいか」「どの技術を選ぶか」「関係者をどう動かすか」</strong>という判断は、人間の役割として残りやすい領域です。
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="text-sm text-amber-800">
              <strong>ミドルへの示唆：</strong>30-40代が積み上げてきたドメイン知識・要件定義・マネジメントの経験は、まさにこの「判断」の領域に直結します。AIを脅威ではなく<strong>自分の判断力を増幅する道具</strong>として使えるかが分かれ目です。なお、生成AI領域の年収・市場規模については信頼できる一次統計が乏しく、本記事では具体的な数値予測は掲載しません。
            </p>
          </div>
        </section>

        {/* 2. 切り分け */}
        <section id="split" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">2. AIに奪われる仕事・残る仕事の切り分け</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="border border-slate-200 px-3 py-2 text-left w-1/2">AIに置き換わりやすい『作業』</th>
                  <th className="border border-slate-200 px-3 py-2 text-left w-1/2">人間に残りやすい『判断』</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                {[
                  ["定型的なコード・ボイラープレートの生成", "そもそも何を作るべきかの要件定義"],
                  ["既知パターンの実装・補完", "制約の中での技術選定・アーキテクチャ判断"],
                  ["ドキュメント・コメントの下書き", "出力の妥当性・リスクの最終判断"],
                  ["単純なバグの調査・候補提示", "原因の切り分けと恒久対策の意思決定"],
                  ["テストコードのたたき台生成", "品質基準・受け入れ基準の設定"],
                  ["仕様や仕様書の要約・翻訳", "関係者間の合意形成・交渉"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 ? "bg-slate-50" : ""}>
                    <td className="border border-slate-200 px-3 py-2">{row[0]}</td>
                    <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-3">※ あくまで傾向の整理です。AIの進化により境界は変わり続けます。固定的な線引きではなく「どちら寄りの仕事に時間を使うか」の指針として捉えてください。</p>
        </section>

        {/* 3. 3要素 */}
        <section id="three" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">3. これから求められる3要素</h2>
          <p className="text-slate-600 leading-relaxed mb-4">生成AIを前提とした現場で評価されるのは、次の3つを掛け合わせられる人材です。</p>
          <div className="space-y-4">
            {[
              { num: "1", title: "AI実装力", desc: "生成AIを道具として実務に組み込む力。プロンプト設計、RAGやエージェントの構築、AIを前提とした開発フローを回せること。" },
              { num: "2", title: "エンジニアリング力", desc: "AIの出力を鵜呑みにせず、設計・品質・セキュリティの観点でレビューし、システムとして成立させる力。土台の技術力は引き続き必須。" },
              { num: "3", title: "ビジネス課題設定力", desc: "「何を解けば価値が出るか」を定義する力。AIは答えを出すのは得意でも、問いを立てるのは人間の仕事。ミドルの経験が最も活きる部分。" },
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

        {/* 4. 二極化 */}
        <section id="polarize" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">4. 二極化：『叩くだけ』か『組み立てる側』か</h2>
          <p className="text-slate-600 leading-relaxed mb-4">生成AIの普及は、エンジニアを二つの方向に分けていく傾向があります。どちらに進むかで、AI時代の立ち位置が大きく変わります。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-700 mb-2">プロンプトを叩くだけ</h3>
              <p className="text-sm text-slate-600">AIに指示を出して出力を貼るだけで、出力の妥当性を判断できない状態。代替されやすく、付加価値を出しにくい。</p>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-5">
              <h3 className="font-bold text-emerald-800 mb-2">AIを組み込む側に回る</h3>
              <p className="text-sm text-slate-600">RAGやエージェントを設計・構築し、AIの出力を品質・セキュリティの観点で管理する。需要が高まりやすい立ち位置。</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-5">
            重要なのは、ミドルが「組み立てる側」に回るのに必要な土台——設計・品質管理・要件定義——をすでに持っていることです。AIツールへのキャッチアップを足せば、十分に「組み立てる側」に立てます。
          </p>
        </section>

        {/* 5. 伸びるスキル */}
        <section id="skills" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">5. 伸ばすと効くスキル</h2>
          <p className="text-slate-600 leading-relaxed mb-4">AIを前提にした実務で、伸ばしておくと効くスキルを整理しました。いきなり全部ではなく、業務に近いものから一つずつで構いません。</p>
          <ul className="space-y-2 mb-5">
            {[
              "RAG（検索拡張生成）を使ったアプリケーションの設計・構築",
              "LLMアプリ全般の構成（API連携・コスト・レイテンシ設計）",
              "プロンプト設計と評価（再現性のある指示づくり）",
              "ハルシネーション（誤った生成）への対処・検証の仕組み化",
              "AIレビューを前提とした品質管理・テスト設計",
              "AIエージェント／ツール連携の設計",
              "セキュリティ・情報漏えいリスクへの配慮（入力データの扱い）",
            ].map((t, i) => (
              <li key={i} className="flex gap-2 text-sm text-slate-600">
                <span className="text-petrol font-bold shrink-0">✓</span>{t}
              </li>
            ))}
          </ul>
          <div className="bg-petrol-soft rounded-lg p-5">
            <p className="text-sm text-petrol-deep">体系的に学ぶなら、関連スキルの解説も参考になります。関連: <Link href="/skill/generative-ai/" className="text-petrol-deep underline">生成AIスキル</Link>、<Link href="/skill/ai-ml/" className="text-petrol-deep underline">AI・機械学習スキル</Link>。</p>
          </div>
        </section>

        {/* 6. 非技術 */}
        <section id="nontech" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">6. AIに代替されにくい非技術スキル</h2>
          <p className="text-slate-600 leading-relaxed mb-4">純粋な実装力以上に、AIで代替しにくいのが次の非技術スキルです。これらは経験を積んだミドルの得意分野でもあります。</p>
          <div className="space-y-4">
            {[
              { t: "課題発見・要件定義", d: "曖昧なビジネス要求を、解くべき技術課題に翻訳する力。AIは与えられた問いには答えるが、問いを立てるのは人間。" },
              { t: "技術選定・トレードオフ判断", d: "正解が一つでない状況で、制約とリスクを踏まえて選ぶ力。文脈の理解が必要で代替しにくい。" },
              { t: "合意形成・交渉", d: "関係者の利害を調整し、意思決定に導く力。対人の信頼関係が前提になる。" },
              { t: "マネジメント・育成", d: "チームを動かし、人を育てる力。AI時代でも組織を成果に結びつけるのは人間の役割。" },
            ].map((n, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{n.t}</h3>
                <p className="text-sm text-slate-600">{n.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. ミドル視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">7. なぜミドルの経験はAI時代に価値が上がるのか</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            これが本記事の核心です。生成AIによって「コードを書く作業」のコストが下がるほど、相対的に価値が上がるのは<strong>「何を作るべきか」「この出力は正しいか」を判断する力</strong>です。そしてその判断力は、年数を重ねたミドルが最も蓄積してきたものです。
          </p>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ドメイン知識が出力の良し悪しを判断する</h3>
              <p className="text-sm text-petrol-deep">AIが生成したコードや仕様が「業務的に妥当か」を見抜けるのは、業界・業務を知る人です。30-40代が積んだドメイン知識は、AI出力の検証者として価値を持ちます。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">要件定義の経験が『問い』を立てる</h3>
              <p className="text-sm text-petrol-deep">AIに何を解かせるかを決めるのは人間です。曖昧な要求を整理し、解くべき課題に落とす経験は、AI時代に希少性が増します。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">マネジメントがAI活用の現場を成果に変える</h3>
              <p className="text-sm text-petrol-deep">AIを使う人・チームをどう動かし、成果に結びつけるか。組織を回す力は代替されにくく、ミドルの強みが活きます。関連: <Link href="/knowledge/management/" className="text-petrol-deep underline">マネジメントキャリア</Link>。</p>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mt-5">
            <p className="text-sm text-amber-800"><strong>戦い方の結論：</strong>30-40代は「若手とAIツールの操作習熟を競う」のではなく、「自分の経験 × AI」で<strong>判断と課題設定の領域で勝負する</strong>のが王道です。AIを取り入れる柔軟さと、これまでの経験の掛け算が、最も再現性のある生存戦略になります。</p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">8. よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800">
                  <span>Q. {faq.q}</span>
                  <span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span>
                </summary>
                <div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">
                  A. {faq.a}
                  {faq.aLink && (
                    <>
                      <Link href={faq.aLink.href} className="text-petrol underline">{faq.aLink.text}</Link>
                      {faq.aAfter}
                    </>
                  )}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">AI時代のキャリアをプロに相談しよう</h2>
          <p className="text-blue-100 text-sm mb-4">IT特化型エージェントなら、生成AIを前提とした求人動向や、あなたの経験の活かし方を具体的にアドバイスしてくれます。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "継続的な学習の進め方", href: "/knowledge/continuous-learning/" },
              { name: "リスキリング・補助金と職種転換", href: "/knowledge/reskilling/" },
              { name: "生成AIスキルの市場価値", href: "/skill/generative-ai/" },
              { name: "AI・機械学習スキル", href: "/skill/ai-ml/" },
              { name: "市場価値の調べ方", href: "/knowledge/market-value/" },
              { name: "40代エンジニア転職のリアル", href: "/knowledge/40s-reality/" },
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
