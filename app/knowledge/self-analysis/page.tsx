import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/self-analysis/" },
  title: "エンジニアの自己分析【キャリア棚卸しワークシート】",
  description:
    "30代・40代エンジニア向けの自己分析ガイド。キャリアの棚卸しワークシート、Will-Can-Must・モチベーショングラフ・価値観リストなど、書き込むだけで強みと方向性が見える実践フレームワークを紹介します。",
};

const toc = [
  { id: "why", label: "1. なぜミドル層に自己分析が必要か" },
  { id: "step", label: "2. 自己分析の進め方（4ステップ）" },
  { id: "inventory", label: "3. キャリア棚卸しワークシート" },
  { id: "wcm", label: "4. Will-Can-Mustワークシート" },
  { id: "motivation", label: "5. モチベーショングラフ" },
  { id: "values", label: "6. 価値観の言語化リスト" },
  { id: "strength", label: "7. 隠れた強みの発見ワーク" },
  { id: "apply", label: "8. 分析結果を転職活動に活かす" },
  { id: "age", label: "9. 30代・40代の自己分析の勘所" },
  { id: "faq", label: "10. よくある質問" },
];

const faqs = [
  {
    q: "自己分析にはどのくらいの時間をかけるべきですか？",
    a: "最低でも1週間は確保しましょう。1日30分〜1時間、過去のプロジェクトを振り返りながら書き出す作業を繰り返します。急いで済ませると表面的な分析になり、面接での深掘り質問に答えられなくなります。",
  },
  {
    q: "技術力以外にアピールできる強みが見つかりません",
    a: "エンジニアの強みは技術力だけではありません。『複雑な要件を整理する力』『非エンジニアへの説明力』『障害発生時の冷静な対応力』なども立派な強みです。過去に周囲から感謝された場面を思い出すと発見しやすいです。",
  },
  {
    q: "キャリアの棚卸しで最初にやるべきことは？",
    a: "まず全プロジェクトを時系列で書き出しましょう。各プロジェクトについて『使用技術・役割・チーム規模・成果・学び』を記録します。スプレッドシートで一覧化すると、自分のスキルの変遷やパターンが見えてきます。",
  },
  {
    q: "Will-Can-Mustフレームワークの使い方は？",
    a: "Will（やりたいこと）・Can（できること）・Must（市場から求められること）の3つの円の重なりがキャリアの最適解です。Will＝技術的興味、Can＝実務経験のあるスキル、Must＝求人市場でニーズが高い技術、として書き出しましょう。",
  },
  {
    q: "自分の市場価値が分からず不安です",
    a: "市場から求められること（Must）を客観的に知るには、転職エージェントの面談を受けるのが確実です。複数のエージェントに登録して意見を比較すると、より正確に把握できます。詳しくは市場価値の調べ方を参照してください。",
  },
  {
    q: "モチベーショングラフは何のために書くのですか？",
    a: "過去のやりがい・落ち込みの波を可視化すると、自分が『どんな状況で力を発揮するか／消耗するか』が見えてきます。例えば『裁量がある時に伸びる』『無理な納期で疲弊する』といった傾向は、次の職場選びの判断軸になります。",
  },
  {
    q: "自己分析の結果を転職活動にどう活かせばいいですか？",
    a: "自己分析で明確になった『強み・実績・価値観』を、職務経歴書の自己PR・志望動機・面接回答の軸にします。一貫したストーリーを持つことで、面接官に『この人は自分のキャリアを真剣に考えている』と伝わります。",
  },
];

export default function SelfAnalysisPage() {
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
        title="エンジニアの自己分析【キャリア棚卸しワークシート】"
        description="30代・40代エンジニア向けの自己分析ガイド。キャリアの棚卸しワークシート、Will-Can-Must・モチベーショングラフ・価値観リストなど、書き込むだけで強みと方向性が見える実践フレームワークを紹介します。"
        url="/knowledge/self-analysis/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ" },
          { name: "自己分析ガイド" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エンジニアの自己分析【キャリア棚卸しワークシート】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 書き込むだけで強みと方向性が見える
        </p>

        {/* 直答box (P6-C2) */}
        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】エンジニアの自己分析は何をすればいい？</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: キャリアの棚卸し・Will-Can-Must・モチベーショングラフ・価値観リストの順に手を動かせば、自分の強みと方向性が自然に見えてきます。</strong></p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・30代・40代は経験が長い分、棚卸しをすると強みが埋もれていることが多い</li><li>・Will（やりたい）・Can（できる）・Must（求められる）の3つが重なる領域が、長く伸ばせるキャリアの軸</li><li>・分析結果は職務経歴書の自己PR・志望動機・面接回答の一貫した軸にする</li></ul>
          </div>
        </section>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            自己分析は『自分の言葉でキャリアを語れる状態』を作る作業です。30代・40代は経験が長い分、棚卸しをすると強みが埋もれていることが少なくありません。逆に言えば、整理するだけで職務経歴書も面接も一気に通りやすくなります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事は<strong>書き込み式のワークシート集</strong>です。キャリアの棚卸し・Will-Can-Must・モチベーショングラフ・価値観リストの順に手を動かせば、強みと方向性が自然に見えてきます。
          </p>
        </section>

        <DataNote surveyedAt="2026年6月" sources={["各IT転職エージェント公開情報"]} />

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

        {/* 1. なぜ */}
        <section id="why" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">1. なぜミドル層に自己分析が必要か</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ミドル層が自己分析を飛ばすと、よくあるパターンとして次の落とし穴にはまります。
          </p>
          <ul className="space-y-2">
            {[
              "経験が長い分、何でも『できます』と書いてしまい、結局強みが伝わらない",
              "目の前の求人に流されて応募し、入社後にミスマッチで後悔する",
              "面接で『なぜ転職するのか』『今後どうなりたいか』に一貫して答えられない",
              "市場が求めること（Must）を知らず、自分の希望（Will）だけで動いてしまう",
            ].map((t, i) => (
              <li key={i} className="flex gap-2 text-sm text-slate-600">
                <span className="text-red-500 font-bold shrink-0">✕</span>{t}
              </li>
            ))}
          </ul>
          <p className="text-slate-600 leading-relaxed mt-4">
            自己分析の目的は『強み・実績・価値観・方向性』を一貫したストーリーにすることです。これが固まると、書類・面接・エージェントとの面談すべての軸になります。
          </p>
        </section>

        {/* 2. 進め方 */}
        <section id="step" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">2. 自己分析の進め方（4ステップ）</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "事実を棚卸しする", desc: "全プロジェクトを書き出し、使用技術・役割・成果・学びを記録（→ ワークシート3）。" },
              { num: "2", title: "感情を振り返る", desc: "モチベーションの波を可視化し、力を発揮する／消耗する条件を把握（→ ワークシート5）。" },
              { num: "3", title: "軸を言語化する", desc: "Will-Can-Mustと価値観リストで、やりたいこと・できること・大切にしたいことを明文化（→ ワークシート4・6）。" },
              { num: "4", title: "ストーリーに統合する", desc: "強み・実績・価値観・方向性を1本の物語にまとめ、書類と面接の回答に落とし込む（→ セクション8）。" },
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

        {/* 3. 棚卸し */}
        <section id="inventory" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">3. キャリア棚卸しワークシート</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            全プロジェクトを下の項目で1枚ずつ書き出します。スプレッドシートで一覧化すると、技術の変遷や得意パターンが見えてきます。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-3 text-sm">
              {[
                ["プロジェクト名／時期", "（例）ECサイト基盤刷新 / 2024.04〜2025.12"],
                ["事業・課題の背景", "何のための開発だったか。何が問題だったか"],
                ["自分の役割", "実装担当 / 設計リード / PM補佐 など"],
                ["チーム規模", "人数と職種構成"],
                ["使用技術", "言語・FW・インフラ・ツール"],
                ["具体的な行動", "自分が主体で取り組んだことを動詞で書く"],
                ["成果（数値）", "改善前後の数値か改善率で（→ STARのR）"],
                ["学び・身についた力", "技術面と非技術面の両方"],
                ["やりがい／しんどさ", "どこに手応え・消耗を感じたか"],
              ].map(([k, v], i) => (
                <div key={i} className="grid grid-cols-[140px_1fr] gap-2">
                  <span className="font-medium text-slate-700">{k}</span>
                  <span className="text-slate-600">{v}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-3">※ 成果の数値化の具体例は<Link href="/knowledge/resume/" className="text-petrol underline">職務経歴書の書き方</Link>のフレーズ集が使えます。</p>
        </section>

        {/* 4. WCM */}
        <section id="wcm" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">4. Will-Can-Mustワークシート</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            3つの円の重なりがキャリアの最適解です。各欄を10個ずつ書き出してみましょう。
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { t: "Will（やりたい）", d: "技術的な興味・挑戦したい領域・なりたい姿。例：『大規模分散システムの設計に深く関わりたい』", c: "bg-petrol-soft text-blue-800" },
              { t: "Can（できる）", d: "実務経験のあるスキル・実績・周囲に頼られること。棚卸しワークシートから抽出する。", c: "bg-emerald-50 text-emerald-800" },
              { t: "Must（求められる）", d: "求人市場でニーズが高い技術・役割。エージェント面談で客観的に把握する。", c: "bg-amber-50 text-amber-800" },
            ].map((w, i) => (
              <div key={i} className={`rounded-xl p-5 ${w.c}`}>
                <h3 className="font-bold mb-2">{w.t}</h3>
                <p className="text-sm opacity-90">{w.d}</p>
              </div>
            ))}
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mt-4">
            <p className="text-sm text-slate-600"><strong>重なりの読み解き方：</strong>Will×Canだけで動くと『やりたいけど需要がない』、Can×Mustだけだと『できるけど情熱が続かない』。3つが重なる領域こそ、長く伸ばせるキャリアの軸です。Mustはひとりではわかりにくいので<Link href="/knowledge/market-value/" className="text-petrol underline">市場価値の調べ方</Link>も併用しましょう。</p>
          </div>
        </section>

        {/* 5. モチベ */}
        <section id="motivation" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">5. モチベーショングラフ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            横軸に時間（社会人〜現在）、縦軸にモチベーションの高低を取り、出来事をプロットします。波の山と谷から自分の傾向を読み取ります。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <p className="font-bold text-slate-700 text-sm mb-3">書き出す質問</p>
            <ul className="space-y-2">
              {[
                "最もやりがいを感じた時期は？そのとき何が揃っていたか（裁量・技術・仲間・評価…）",
                "最も落ち込んだ時期は？何が原因だったか（人間関係・無理な納期・成長停滞…）",
                "山に共通する条件は何か → 次の職場で再現したいもの",
                "谷に共通する条件は何か → 次の職場で避けたいもの",
              ].map((t, i) => (
                <li key={i} className="flex gap-2 text-sm text-slate-600">
                  <span className="text-petrol font-bold shrink-0">Q{i + 1}.</span>{t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 6. 価値観 */}
        <section id="values" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">6. 価値観の言語化リスト</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            下の候補から『これは譲れない』を5つ選び、優先順位をつけます。職場選びの判断軸になります。
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "裁量・自律", "技術的な成長", "安定・継続性", "年収", "ワークライフバランス",
              "リモートワーク", "チームの雰囲気", "事業への共感", "社会的意義", "最新技術への挑戦",
              "マネジメント機会", "専門性の深化", "評価の透明性", "グローバル環境", "プロダクトへの愛着",
            ].map((v, i) => (
              <span key={i} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full text-sm">{v}</span>
            ))}
          </div>
          <p className="text-sm text-slate-600 mt-4">
            選んだ価値観は、求人を比較する際のスコアリング基準にもなります。例えば『裁量＞年収＞WLB』の人と『年収＞安定＞WLB』の人では、同じ求人でも最適解が変わります。関連: <Link href="/knowledge/work-life-balance/" className="text-petrol underline">ワークライフバランス</Link>。
          </p>
        </section>

        {/* 7. 隠れた強み */}
        <section id="strength" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">7. 隠れた強みの発見ワーク</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            技術力以外の強みは自分では気づきにくいものです。次の問いで掘り起こします。
          </p>
          <div className="space-y-3">
            {[
              { q: "周囲から『助かった』『さすが』と言われた場面は？", a: "→ 言語化力・調整力・トラブル対応力など、無自覚の強みのヒント" },
              { q: "自分にとっては当たり前だが、周りは苦労していることは？", a: "→ それがあなたの相対的な強み" },
              { q: "頼られて回ってくる仕事は？", a: "→ 周囲が認めている得意領域" },
              { q: "非エンジニアに説明して感謝された経験は？", a: "→ 翻訳力・ドキュメント力という希少スキル" },
            ].map((s, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <p className="font-bold text-slate-800 text-sm mb-1">Q. {s.q}</p>
                <p className="text-sm text-slate-600">{s.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 8. 活かす */}
        <section id="apply" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">8. 分析結果を転職活動に活かす</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">職務経歴書の自己PRに反映</h3>
              <p className="text-sm text-petrol-deep">棚卸しで出た『強み＋数値実績』をそのまま自己PRの軸にします。書き方は<Link href="/knowledge/resume/" className="text-petrol-deep underline">職務経歴書の書き方</Link>へ。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">志望動機・面接回答の一貫性に反映</h3>
              <p className="text-sm text-petrol-deep">Will-Can-Mustと価値観を使い、『なぜ転職するか・なぜこの会社か・今後どうなりたいか』を一本の線でつなぎます。関連: <Link href="/knowledge/motivation/" className="text-petrol-deep underline">志望動機の作り方</Link>。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">エージェント面談で軸を共有</h3>
              <p className="text-sm text-petrol-deep">価値観の優先順位を伝えると、ミスマッチの少ない求人を紹介してもらえます。関連: <Link href="/knowledge/agent-first-meeting/" className="text-petrol-deep underline">初回面談の準備</Link>。</p>
            </div>
          </div>
        </section>

        {/* 9. 年代別 */}
        <section id="age" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">9. 30代・40代の自己分析の勘所</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：方向性の『選択』を意識する</h3>
              <p className="text-sm text-petrol-deep">30代は専門を深めるか、マネジメントへ広げるかの分岐点です。棚卸しで『どちらに手応えを感じたか』を見極めると判断しやすくなります。関連: <Link href="/knowledge/career-plan/" className="text-petrol-deep underline">キャリアプラン設計</Link>。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：『再現性』と『譲れない価値観』を明確に</h3>
              <p className="text-sm text-petrol-deep">40代は成果の再現性（どんな状況でも価値を出せること）が問われます。同時に、長く働くために譲れない価値観をはっきりさせると、後悔の少ない選択ができます。関連: <Link href="/knowledge/40s-reality/" className="text-petrol-deep underline">40代転職のリアル</Link>。</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">10. よくある質問</h2>
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
          <h2 className="text-xl font-bold mb-3">自己分析の『Must』をプロに確かめよう</h2>
          <p className="text-blue-100 text-sm mb-4">市場が求めること（Must）は自分では把握しにくいもの。IT特化型エージェントの面談で、客観的な市場価値とニーズを確認できます。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "市場価値の調べ方", href: "/knowledge/market-value/" },
              { name: "キャリアプラン設計", href: "/knowledge/career-plan/" },
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
              { name: "志望動機の作り方", href: "/knowledge/motivation/" },
              { name: "エージェントとの初回面談", href: "/knowledge/agent-first-meeting/" },
              { name: "ワークライフバランス", href: "/knowledge/work-life-balance/" },
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
