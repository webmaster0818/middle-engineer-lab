import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "Reactエンジニアの転職完全ガイド【2026年】年収・求人の探し方";
const DESCRIPTION =
  "Reactエンジニアの転職市場を公表データで解説。レバテック・求人ボックスの年収傾向、求人の探し方、30代・40代の参入ルート、おすすめエージェントまで実用的にまとめました。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：React転職の攻め方" },
  { id: "market", label: "市場・年収データ（公表値）" },
  { id: "level", label: "求められる経験レベル" },
  { id: "career", label: "キャリアパスの選択肢" },
  { id: "find", label: "求人の探し方・強いエージェント" },
  { id: "entry", label: "経験浅め・他FWからの参入ルート" },
  { id: "middle", label: "30代・40代の視点" },
  { id: "study", label: "スキルアップ・学習戦略" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "voice", label: "転職活動の口コミ傾向" },
  { id: "faq", label: "よくある質問" },
];

const salaryRows = [
  ["レバテック 職種別（Reactを扱う職種の参考値）", "Webサービス系で約424〜472万円帯の集計値", "レバテック ガイド記事（職種別集計）"],
  ["求人ボックス（TypeScript正社員 参考）", "Reactと併用されるTypeScript正社員は約696万円", "2025年時点・求人ボックス"],
  ["レバテック 年代別（正社員SE参考値）", "30代約499万円／40代約618万円", "2025年・レバテック公表値"],
  ["paiza 言語別 提示年収（参考）", "JavaScript系の需要は高水準（求人件数1位）", "2025年版・2025年12月発表"],
];

const careerPaths = [
  {
    title: "フロントエンドスペシャリスト路線",
    body: "React/Next.jsを極め、デザインシステム構築・パフォーマンス最適化・アクセシビリティ対応のスペシャリストへ。大規模プロダクトのフロント品質を担保する役割で、設計とレビューの力が問われます。",
  },
  {
    title: "UI/UX・デザインエンジニア路線",
    body: "Reactの技術力にUI/UXの知見を組み合わせる道。Figma連携、プロトタイピング、ユーザビリティ改善などデザインと開発の橋渡し役として、プロダクト志向の企業で需要が高まっています。",
  },
  {
    title: "フルスタック / テックリード路線",
    body: "ReactにNode.js/Next.jsのバックエンド開発力を加え、プロダクト全体の技術選定とアーキテクチャ設計を主導。30代後半〜40代でテックリード・EMへ進むパスです。",
  },
];

const faqs = [
  {
    q: "Reactエンジニアの平均年収はどのくらいですか？",
    a: "出典によって集計対象が異なります。レバテックのガイド記事ではReactを扱う職種（Webサービス系など）の集計値が示され、Reactと併用されることの多いTypeScriptは求人ボックスの給料ナビ（2025年時点）で正社員平均約696万円とされています。実際の金額は経験・役割・企業フェーズで大きく変わります。",
  },
  {
    q: "Reactの将来性はどう見ればよいですか？",
    a: "ReactはフロントエンドフレームワークとしてシェアNo.1を維持し、React Server ComponentsやNext.js App Routerなど進化が続いています。paizaの言語別調査（2025年版）でもJavaScript系は求人件数で最多であり、当面は安定需要が見込まれます。ただし将来予測は断定できないため、複数の公表データで傾向を確認するのが安全です。",
  },
  {
    q: "React転職で評価されやすいスキルは？",
    a: "Next.js（App Router）、TypeScript、状態管理（Zustand/Jotai）、テスト（Testing Library/Playwright）、パフォーマンス最適化の経験が求人要件で頻出します。UI/UXやアクセシビリティの知見、デザインシステム構築経験があると差別化できます。",
  },
  {
    q: "Vue.jsからReactへの移行は難しいですか？",
    a: "コンポーネントベースの設計思想は共通するため、JSX記法とHooksの概念を理解すれば移行できます。1〜2か月のキャッチアップで実務レベルに近づくケースが多く、両方の経験は「FWに依存しない設計力」としてアピールできます。",
  },
  {
    q: "Reactエンジニアにおすすめの転職エージェントは？",
    a: "Web・ゲーム業界に強くReact/Next.js求人が充実したGeekly、IT特化で高年収帯に強いレバテックキャリア、スタートアップ求人とカジュアル面談に強いGreenの併用が定番です。求人母数を確保したい場合はリクルートエージェントITやdoda ITも候補です。",
  },
  {
    q: "40代のReactエンジニアでも転職できますか？",
    a: "可能です。デザインシステム構築やパフォーマンス最適化の経験がある層は需要があります。レバテックの年代別公表値（2025年）でも40代正社員SEの平均は約618万円と、年代が上がるほど水準が上がる傾向です。テックリード・アーキテクトとしてチームの技術力向上を牽引できる点を示すと有利です。",
  },
  {
    q: "経験浅めからReact案件に入れますか？",
    a: "JavaScript/HTML/CSSの基礎とReactの公開ポートフォリオがあれば、中小プロダクトから実務年数を作るのが現実的です。Hooks・状態管理・APIフェッチの基本を押さえ、設計意図を説明できる成果物を用意して臨むと通りやすくなります。",
  },
];

export default function ReactSkillPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/skill/react/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Reactエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Reactエンジニアの転職完全ガイド【2026年】年収・求人の探し方
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | React転職市場の動向を30代・40代エンジニア向けに解説
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック 職種別・年代別平均年収（2025年）",
            "求人ボックス 給料ナビ（2025年時点）",
            "paiza プログラミング言語に関する調査（2025年版）",
          ]}
        />

        {/* 結論 */}
        <section id="conclusion" className="mb-10">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：React転職の攻め方</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              Reactは求人母数が多く、JavaScript系の需要も高水準（paiza 2025年版で求人件数1位）の「安定スキル」です。求人DBの件数を眺めるだけでなく、<strong>「React/Next.js × TypeScript × テスト」をセットで実績化</strong>し、IT特化エージェントで非公開求人にアクセスするのが効率的です。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・年収重視なら自社開発・メガベンチャー、技術裁量重視ならスタートアップ。</li>
              <li>・30代・40代はスペシャリスト or テックリードの軸を決めて職務経歴書を整理。</li>
              <li>・エージェントはGeekly／レバテックキャリア／Greenの併用が定番。</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-blue-600 hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 市場・年収データ */}
        <section id="market" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Reactの市場・年収データ（公表値）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Reactは2026年もWeb系自社開発企業の標準技術として広く採用されています。Reactは「ライブラリ」のため言語別年収統計に単独で現れにくく、TypeScriptやJavaScriptの統計と職種別データを合わせて読むのが実態に近くなります。出典ごとに集計対象が異なる点に注意してください。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">出典</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年収・需要の目安</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">時点・備考</th>
                </tr>
              </thead>
              <tbody>
                {salaryRows.map(([src, val, note], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{src}</td>
                    <td className="px-4 py-3 text-slate-700 border-b border-slate-200 font-medium">{val}</td>
                    <td className="px-4 py-3 text-slate-500 border-b border-slate-200 text-xs">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            ※ 職種別集計は集計母体（求人票か在籍者か）によって幅が出ます。フリーランス調査（フリーランスボード等）の単価・年収は正社員より高めに出る傾向があり、雇用形態が違う前提で読む必要があります。エンジニア全体の市場感は経産省「IT人材需給に関する調査」（2019年公表の試算）で、2030年に最大約79万人のIT人材不足が見込まれている点も背景として押さえておくとよいでしょう。
          </p>
        </section>

        {/* 経験レベル */}
        <section id="level" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベル（求人要件の傾向）</h2>
          <div className="space-y-3">
            {[
              ["ジュニア〜ミドル（実務2〜4年）", "Hooks・コンポーネント設計・状態管理・APIフェッチの実務。中小自社開発やWeb制作会社のモダン化案件で募集が見られる層。"],
              ["ミドル〜シニア（実務4〜8年）", "Next.js（App Router）・TypeScript・テスト・パフォーマンス最適化。設計レビューや若手育成も担う、求人母数が最も多い層。"],
              ["シニア・リード（実務8年〜）", "デザインシステム設計、フロントアーキテクチャ策定、技術選定。テックリード・フロントエンドアーキテクト求人の中心。"],
            ].map(([level, body], i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{level}</h3>
                <p className="text-sm text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* キャリアパス */}
        <section id="career" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キャリアパスの選択肢</h2>
          <div className="space-y-4">
            {careerPaths.map((p, i) => (
              <div key={i} className="bg-blue-50 rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-2">{p.title}</h3>
                <p className="text-sm text-blue-700">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 求人の探し方 */}
        <section id="find" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の探し方・強いエージェント</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            React求人は数が多い分、開発文化や技術スタックのミスマッチが起きやすい領域です。企業の内情を引き出せるエージェントを使い分け、求人サイトの件数だけで判断しないのがコツです。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Geekly</h3>
              <p className="text-sm text-slate-600 mb-2">IT/Web/ゲーム業界に特化。React/Next.js求人が充実し、提案スピードが強み。企業の技術スタックや開発文化の情報提供が手厚い。</p>
              <Link href="/review/geekly/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア</h3>
              <p className="text-sm text-slate-600 mb-2">IT/Web特化で高年収帯に強み。技術に明るいアドバイザーが在籍し、フロントエンド案件のマッチング精度が高いとの評判。</p>
              <Link href="/review/levtech/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Green</h3>
              <p className="text-sm text-slate-600 mb-2">成功報酬型の転職サイト（ダイレクトリクルーティング）。カジュアル面談で技術文化を確かめてから進めたいスタートアップ志向の人向け。</p>
              <Link href="/review/green/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            求人母数を最大化したい場合は<Link href="/review/recruit-it/" className="text-blue-600 hover:underline">リクルートエージェントIT</Link>や<Link href="/review/doda-it/" className="text-blue-600 hover:underline">doda ITエンジニア</Link>も併用候補。比較は<Link href="/compare/levtech-vs-geekly/" className="text-blue-600 hover:underline">レバテック vs Geekly</Link>も参考になります。
          </p>
        </section>

        {/* 参入ルート */}
        <section id="entry" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験浅め・他FWからの参入ルート</h2>
          <ul className="space-y-2 text-sm text-slate-600">
            {[
              "Vue/Angular経験者は「設計思想は共通」と捉え、JSX・Hooksに絞ってキャッチアップする。",
              "バックエンド経験者はAPI設計の強みを活かし、フルスタック前提でReactを学ぶと差別化しやすい。",
              "公開ポートフォリオ（Next.js + TypeScript）で、状態管理・テスト・パフォーマンス配慮を見せる。",
              "いきなり大規模を狙わず、React採用の中小プロダクトで実務年数を積む。",
            ].map((t, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-blue-600 font-bold shrink-0">✓</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-slate-500 mt-3">
            関連: <Link href="/knowledge/portfolio/" className="text-blue-600 hover:underline">ポートフォリオの作り方</Link> / <Link href="/skill/frontend/" className="text-blue-600 hover:underline">フロントエンドエンジニア転職ガイド</Link>
          </p>
        </section>

        {/* 30代・40代視点 */}
        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            ミドル層の武器は「設計とレビューで品質を担保した経験」「チームを前に進めた実績」です。レバテックの年代別公表値（2025年）でも、正社員SEの平均は30代で約499万円、40代で約618万円と年代が上がるほど水準が上がる傾向があり、Reactのモダンスタックで即戦力性を示せれば交渉余地は十分にあります。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            40代では「スペシャリストとして突き抜けるか」「リード／EMで組織貢献するか」の軸を明確にすると評価されやすくなります。年代別の市場感は<Link href="/age/30s/" className="text-blue-600 hover:underline">30代の転職ガイド</Link>・<Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職ガイド</Link>も参照してください。
          </p>
        </section>

        {/* 学習戦略 */}
        <section id="study" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルアップ・学習戦略</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            {[
              ["最新のReactを追う", "Server Components、Suspense、Actionsなど新パラダイムを実プロジェクトで試し、設計判断を語れるようにする。"],
              ["TypeScriptと一体で習熟", "Reactは型と組み合わせて評価される。Propsの型設計やジェネリックコンポーネントを使いこなす。"],
              ["品質で差をつける", "Testing Library/Playwrightでのテスト、レンダリング最適化、アクセシビリティ対応は具体的な強みになる。"],
              ["アウトプットを残す", "OSSへのPR、UIライブラリの公開、技術記事など、思考が見える成果物を蓄積する。"],
            ].map(([t, d], i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 mb-1">{t}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">
            学び続ける習慣づくりは<Link href="/knowledge/continuous-learning/" className="text-blue-600 hover:underline">継続的な学習の進め方</Link>も参考になります。
          </p>
        </section>

        {/* 向き不向き */}
        <section id="fit" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">React転職が向いている人・向いていない人</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3 text-sm">向いている人</h3>
              <ul className="space-y-2 text-sm text-green-900">
                {[
                  "UI/UXや見た目の品質にこだわって作り込みたい",
                  "求人数が多く選択肢の広いスキルで動きたい",
                  "Web系自社開発・SaaSでモダンな開発をしたい",
                  "TypeScriptと組み合わせて設計力を高めたい",
                ].map((t, i) => (
                  <li key={i} className="flex gap-2"><span className="font-bold shrink-0">✓</span><span>{t}</span></li>
                ))}
              </ul>
            </div>
            <div className="border border-slate-200 bg-slate-50 rounded-lg p-5">
              <h3 className="font-bold text-slate-700 mb-3 text-sm">向いていないかもしれない人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  "頻繁なバージョン・パラダイム更新の追従が負担に感じる",
                  "フロントよりインフラ・データ基盤を主戦場にしたい",
                  "UI以外（純粋なロジック/低レイヤ）に専念したい",
                  "レガシー環境から動く気がなく学習時間も取れない",
                ].map((t, i) => (
                  <li key={i} className="flex gap-2"><span className="font-bold shrink-0">･</span><span>{t}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 口コミ傾向 */}
        <section id="voice" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職活動の口コミ傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Qiita Job Change・みん評などの口コミプラットフォームでは、Reactエンジニアの転職に関して「公開ポートフォリオと状態管理・テストの実装を見せると書類が通りやすかった」「自社開発企業ではパフォーマンス最適化やアクセシビリティの工夫を深掘りされた」といった声が見られます。エージェント利用については、IT/Web特化型に対して「Web系の開発文化まで把握していて提案が的確」という肯定的な傾向がある一方、総合型では「希望と異なる求人提案が混じることがある」という指摘も見られます。あくまで傾向であり、担当者やタイミングによって体験は異なります。
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10">
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
          <h2 className="text-xl font-bold mb-3">Reactのスキルを活かした転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントに登録して、あなたのReactスキルの市場価値と非公開求人を確認しましょう。
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
              { name: "TypeScriptエンジニア転職ガイド", href: "/skill/typescript/" },
              { name: "フロントエンドエンジニア転職ガイド", href: "/skill/frontend/" },
              { name: "AI・機械学習エンジニア転職ガイド", href: "/skill/ai-ml/" },
              { name: "30代の転職ガイド", href: "/age/30s/" },
              { name: "Geeklyの評判", href: "/review/geekly/" },
              { name: "スキル別転職ガイド一覧", href: "/skill/" },
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
    
      <section className="mx-auto max-w-3xl px-4 pb-10">
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
          <h2 className="font-bold text-slate-900 mb-2">この技術と関連の深い掲載企業</h2>
          <p className="text-xs text-slate-500 mb-2">各社の公開技術情報でこの技術への言及が確認できた掲載企業です。年収・選考は各社ページをご覧ください。</p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-sm"><li><a href="/company/cyberagent/" className="text-blue-700 hover:underline">サイバーエージェント</a></li><li><a href="/company/dmm/" className="text-blue-700 hover:underline">DMM.com</a></li><li><a href="/company/freee/" className="text-blue-700 hover:underline">freee</a></li><li><a href="/company/gmo-internet/" className="text-blue-700 hover:underline">GMOインターネットグループ</a></li><li><a href="/company/kakehashi/" className="text-blue-700 hover:underline">カケハシ</a></li><li><a href="/company/kaonavi/" className="text-blue-700 hover:underline">カオナビ</a></li><li><a href="/company/layerx/" className="text-blue-700 hover:underline">LayerX</a></li><li><a href="/company/line-yahoo/" className="text-blue-700 hover:underline">LINEヤフー</a></li></ul>
          <p className="mt-3 text-sm"><a href="/skill/" className="text-blue-700 hover:underline">スキル別ガイド一覧</a> ／ <a href="/salary/company-ranking/" className="text-blue-700 hover:underline">企業年収ランキング</a></p>
        </div>
      </section>
      </>
  );
}
