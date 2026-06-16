import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "システム設計面接の対策【進め方フレームワークと頻出テーマ】";
const DESCRIPTION =
  "システム設計面接の進め方フレームワーク、頻出テーマ、評価ポイントを徹底解説。30代・40代エンジニアが実務経験を武器に合格するための実践ガイドです。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

const faqs = [
  {
    q: "システム設計面接はどのような企業で課されますか？",
    a: "主にメガベンチャーや外資系IT企業で、シニアエンジニア以上のポジションを中心に課されます。30代・40代の転職では重要な選考ステップになりやすい一方、日系の経験者採用では実務経験のヒアリングで代替されることもあります。選考フローは企業ごとに異なるため事前確認が有効です。",
  },
  {
    q: "コーディングテストとシステム設計面接の違いは？",
    a: "コーディングテストはアルゴリズムの実装力を測るのに対し、システム設計面接は大規模システムの設計力を測ります。正解は一つではなく、トレードオフを理解し、要件に応じた妥当な設計判断ができるかが問われます。実務経験が豊富なミドル世代が強みを発揮しやすい面接です。",
  },
  {
    q: "準備にどのくらいの時間が必要ですか？",
    a: "2〜4週間が目安です。頻出テーマ（URL短縮・SNSフィード・チャット等）を8〜10個、それぞれ30分で要件確認から設計まで説明できるよう練習します。実務で設計経験がある場合は、自分の経験を頻出テーマに当てはめて整理すると短期間で仕上がります。",
  },
  {
    q: "実務経験がないテーマが出たらどうすればいいですか？",
    a: "基本フレームワーク（要件確認→概算→ハイレベル設計→詳細設計→ボトルネック対策）に沿えば、初見テーマでも進められます。『このパターンは未経験ですが、〜の経験を応用して考えます』と前置きし、論理的に組み立てる姿勢を見せれば評価されます。",
  },
  {
    q: "図は描くべきですか？",
    a: "必ず描きましょう。ホワイトボードやオンラインツール（Excalidraw等）でアーキテクチャ図を描きながら説明すると、面接官の理解が深まり評価も上がります。コンポーネント間のデータフローを視覚化することが、口頭説明よりはるかに伝わります。",
  },
  {
    q: "どこまで詳細に設計すればいいですか？",
    a: "最初から細部に入らず、まずハイレベル設計で全体像を示し、面接官が深掘りしたい箇所を聞いてから詳細化するのが定石です。限られた時間で全要素を詰めるのは不可能なので、面接官の関心に合わせて深さを調整しましょう。",
  },
  {
    q: "システム設計面接の対策におすすめのリソースは？",
    a: "「System Design Interview」（Alex Xu著）や、GitHubの「system-design-primer」が定番です。日本語では大規模サービスの技術解説書も参考になります。加えて、自分の実務経験を頻出テーマに紐付けて言語化しておくことが最も効果的な準備です。",
  },
  {
    q: "30代・40代がシステム設計面接で有利になる点は？",
    a: "実際の障害対応・スケーリング・技術選定の経験を、設計判断の根拠として語れる点です。机上の知識だけの若手と差別化でき、『なぜそう設計するか』に説得力が出ます。経験を抽象化して再利用できる形で整理しておくことが鍵です。",
  },
];

const sections = [
  { id: "conclusion", label: "結論：フレームワークと経験の言語化" },
  { id: "framework", label: "進め方フレームワーク（45分）" },
  { id: "themes", label: "頻出テーマと重要ポイント" },
  { id: "evaluation", label: "評価される5つのポイント" },
  { id: "example", label: "回答の進め方サンプル（URL短縮）" },
  { id: "age", label: "30代・40代の設計面接視点" },
  { id: "faq", label: "よくある質問" },
];

const framework = [
  { num: "1", title: "要件の明確化（5分）", desc: "機能要件と非機能要件を確認。『1日のアクティブユーザー数は？』『読み書きの比率は？』『可用性の要件は？』など質問し、曖昧さを解消してから設計に入る。" },
  { num: "2", title: "概算の見積もり（5分）", desc: "トラフィック・データ量・帯域を概算。『1日1億リクエスト → 約1,200 RPS』のように数字で設計の前提を置く。" },
  { num: "3", title: "ハイレベル設計（15分）", desc: "API Gateway・サービス・DB・キャッシュ・メッセージキューなど主要コンポーネントを並べた全体アーキテクチャ図を描く。" },
  { num: "4", title: "詳細設計（15分）", desc: "面接官が深掘りしたい部分を重点的に。DBスキーマ・API設計・スケーリング戦略などを具体化する。" },
  { num: "5", title: "ボトルネック対策（5分）", desc: "単一障害点の除去、キャッシュ戦略、シャーディング、CDNなどスケーラビリティと信頼性の対策を議論する。" },
];

const themes = [
  { name: "URL短縮サービス", point: "ハッシュ生成、衝突回避、リダイレクト、アクセス分析", freq: "非常に高い" },
  { name: "SNSフィード", point: "Fan-out（push/pull）、タイムライン生成、キャッシュ戦略", freq: "高い" },
  { name: "チャットシステム", point: "WebSocket、メッセージ配信、既読管理、オフライン対応", freq: "高い" },
  { name: "通知システム", point: "キュー、配信保証、レート制限、複数チャネル", freq: "中程度" },
  { name: "ECサイト", point: "在庫管理、決済、整合性、検索", freq: "中程度" },
  { name: "分散キャッシュ", point: "Consistent Hashing、TTL、Eviction、キャッシュ整合性", freq: "中程度" },
];

const evaluation = [
  { t: "トレードオフを議論できる", d: "『SQLかNoSQLか』『一貫性か可用性か（CAP）』など、選択の根拠を要件に紐づけて説明できることが最重要。" },
  { t: "スケーラビリティを意識する", d: "現在の規模だけでなく、10倍・100倍になった時のボトルネックと対策を先回りして考える。" },
  { t: "実務経験を絡める", d: "『前職で同様のシステムを運用した経験から〜が重要』と語れると説得力が増す。ミドル世代の強み。" },
  { t: "質問して曖昧さを解消する", d: "要件を勝手に仮定せず、面接官に確認する。実務での要件定義力が見られている。" },
  { t: "図を描いて説明する", d: "アーキテクチャ図・シーケンス図・データフロー図を描きながら話すと理解度が格段に上がる。" },
];

const exampleSteps = [
  { label: "要件確認", text: "「想定する1日のURL生成数と、生成に対する読み取り（リダイレクト）の比率を教えてください。短縮URLの有効期限やカスタムエイリアスは必要ですか？」と確認する。" },
  { label: "概算", text: "「1日1,000万生成・読み取りは100倍と仮定すると、読み取りは1日10億 ≒ 約12,000 RPS。書き込み主体ではなく読み取り主体の設計が要点になります」と前提を置く。" },
  { label: "ハイレベル設計", text: "クライアント → ロードバランサ → 短縮サービス（採番/ハッシュ）→ KVストア（id→URL）→ リダイレクト。読み取りはキャッシュ（Redis等）で吸収する構成を図示する。" },
  { label: "詳細設計", text: "短縮キーはbase62エンコードした採番ID、または衝突検出付きハッシュ。KVストアのキー設計とTTL、分析イベントは非同期キューで別系統に流す、と具体化する。" },
  { label: "ボトルネック対策", text: "ホットキー対策のキャッシュ多層化、KVストアのシャーディング、CDNでのリダイレクト配信、採番の単一障害点回避（採番レンジ払い出し）を議論する。" },
];

export default function SystemDesignPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/system-design/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ" },
          { name: "システム設計面接" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          システム設計面接の対策【進め方フレームワークと頻出テーマ】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 進め方の型・頻出テーマ・評価ポイント
        </p>

        <DataNote surveyedAt="2026年6月" sources={["レバテック公表データ", "経済産業省 IT人材需給調査（2019年公表）"]} />

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed mb-4">
            システム設計面接は、シニアエンジニア以上のポジションで重視される選考ステップです。正解が一つではなく、要件に対して妥当な設計判断とトレードオフの説明ができるかが問われます。30代・40代にとっては、実務経験をそのまま武器にできる面接でもあります。本記事では、進め方のフレームワーク・頻出テーマ・評価ポイントを、回答サンプル付きで解説します。
          </p>
        </section>

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-lg p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：型に沿って進め、判断の根拠を語る</h2>
            <ul className="space-y-2 text-sm text-blue-900 leading-relaxed">
              <li>・<strong>要件確認 → 概算 → ハイレベル設計 → 詳細設計 → ボトルネック対策</strong>の型に沿えば、初見テーマでも進められる。</li>
              <li>・評価されるのは正解ではなく<strong>トレードオフの説明</strong>。なぜそう設計したかを要件に紐づけて語る。</li>
              <li>・実務経験を設計判断の根拠にできるのがミドル世代の強み。経験を抽象化して整理しておく。</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-lg p-5">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-sm text-petrol hover:underline">{s.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* フレームワーク */}
        <section id="framework" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">進め方フレームワーク（45分の場合）</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            いきなり設計を描き始めるのは悪手です。次の5ステップに沿って進めると、抜け漏れなく論理的に設計を組み立てられます。時間配分は目安として頭に入れておきましょう。
          </p>
          <div className="space-y-4">
            {framework.map((item) => (
              <div key={item.num} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.num}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 頻出テーマ */}
        <section id="themes" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">頻出テーマと重要ポイント</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">テーマ</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">重要ポイント</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">出題頻度</th>
                </tr>
              </thead>
              <tbody>
                {themes.map((t, i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-slate-50" : ""}>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{t.name}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{t.point}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{t.freq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-3">※出題頻度は一般的な傾向であり、企業・職種により変動します。</p>
        </section>

        {/* 評価ポイント */}
        <section id="evaluation" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">評価される5つのポイント</h2>
          <div className="space-y-4">
            {evaluation.map((e, i) => (
              <div key={i} className="bg-petrol-soft rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-2">{i + 1}. {e.t}</h3>
                <p className="text-sm text-petrol-deep">{e.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 回答サンプル */}
        <section id="example" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">回答の進め方サンプル（URL短縮サービス）</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            フレームワークを実際のテーマに当てはめた進め方の例です（一般化したサンプルです）。数字や構成は要件次第で変わるため、考え方の流れとして参考にしてください。
          </p>
          <div className="space-y-3">
            {exampleSteps.map((s, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <span className="inline-block bg-petrol-soft text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-2">{s.label}</span>
                <p className="text-sm text-slate-600">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 30代40代視点 */}
        <section id="age" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の設計面接視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              システム設計面接は、ミドル世代にとって最も実力を発揮しやすい面接です。若手が書籍知識で答えるところを、あなたは<strong>実際の障害対応・スケーリング・技術選定の経験</strong>を設計判断の根拠にできます。『前職で〜という負荷課題に直面し、〜という方針で解決した』という一文が、机上の答案と決定的な差を生みます。
            </p>
            <p>
              注意点は、自社の慣れた構成を一般解として押し付けないこと。要件を確認せずに『うちでは〜でした』と決め打ちすると、要件定義力が低いと見なされます。<strong>まず要件を聞き、そのうえで経験を引用する</strong>順序を守りましょう。
            </p>
            <p>
              レバテックの公表データでは正社員SEの平均年収は40代で約618万円（2025年）とされ、設計力を示せるシニア層は高い処遇が期待できます。経験を抽象化し、頻出テーマに紐付けて言語化しておくことが、最も費用対効果の高い準備です。
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10 scroll-mt-20">
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
          <h2 className="text-xl font-bold mb-3">企業ごとの面接対策はエージェントに相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントなら、企業ごとの面接出題傾向や対策のポイントを事前に教えてもらえます。
          </p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "技術面接対策ガイド", href: "/knowledge/tech-interview/" },
              { name: "コーディングテスト対策", href: "/knowledge/coding-test/" },
              { name: "行動面接（STAR法）完全ガイド", href: "/knowledge/behavioral/" },
              { name: "複数内定の比較方法", href: "/knowledge/offer-compare/" },
              { name: "自己分析の進め方", href: "/knowledge/self-analysis/" },
              { name: "40代エンジニアの転職ガイド", href: "/age/40s/" },
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
