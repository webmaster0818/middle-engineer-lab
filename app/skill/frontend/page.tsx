import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "フロントエンドエンジニア転職完全ガイド【2026年】年収・求人の探し方";
const DESCRIPTION =
  "フロントエンドエンジニアの転職市場を公表データで解説。求人ボックス・レバテックの年収傾向、React/Vueの求人状況、30代・40代の市場価値、おすすめエージェントを実用的にまとめました。";

export const metadata: Metadata = {
  alternates: { canonical: "/skill/frontend/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：フロントエンド転職の攻め方" },
  { id: "market", label: "市場・年収データ（公表値）" },
  { id: "level", label: "求められる経験レベル" },
  { id: "career", label: "キャリアパスの選択肢" },
  { id: "find", label: "求人の探し方・強いエージェント" },
  { id: "entry", label: "他職種からの参入ルート" },
  { id: "middle", label: "30代・40代の視点" },
  { id: "study", label: "スキルアップ・学習戦略" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "voice", label: "転職活動の口コミ傾向" },
  { id: "faq", label: "よくある質問" },
];

const salaryRows = [
  ["求人ボックス（正社員・給料ナビ）", "フロントエンドエンジニア 平均約549万円（幅326〜997万円）", "2025年時点・求人ボックス"],
  ["求人ボックス（給料ナビ・別集計）", "フロントエンドエンジニア 平均約460万円", "2025年時点・求人ボックス"],
  ["レバテック 年代別（正社員SE参考値）", "30代約499万円／40代約618万円", "2025年・レバテック公表値"],
  ["フリーランスボード（フリーランス・参考）", "フロントエンド案件 平均年収約946万円・月単価約78.8万円", "2025年12月時点・INSTANTROOM調査"],
];

const careerPaths = [
  {
    title: "フロントエンドアーキテクト",
    body: "デザインシステム設計、フロントアーキテクチャ策定、パフォーマンス最適化を担当。大規模SPAの設計経験、アクセシビリティ、テスト戦略の知識が求められ、技術的意思決定を主導する役割です。",
  },
  {
    title: "フルスタックエンジニア",
    body: "Next.js/Nuxtを軸にフロントとバックエンドの両方をカバー。API設計・DB設計・インフラまで一貫して対応できるスキルセットが、特にスタートアップで重宝されます。",
  },
  {
    title: "フリーランス独立",
    body: "React/Next.jsのフリーランス案件は単価が高めの傾向（フリーランスボード調査ではフロントエンド案件の月単価約78.8万円・2025年12月）。収入は上がりやすい一方、案件の安定性や福利厚生は自己管理が必要です。",
  },
];

const faqs = [
  {
    q: "フロントエンドエンジニアの平均年収はどのくらいですか？",
    a: "求人ボックスの給料ナビ（2025年時点）では、正社員フロントエンドエンジニアの平均年収は約549万円（年収幅326〜997万円）とされ、別集計では約460万円という数値もあります。集計母体や対象範囲で差が出るため、複数の数値を幅として捉えるのが安全です。",
  },
  {
    q: "ReactとVue、どちらを学ぶべきですか？",
    a: "2026年現在、求人数ではReact（Next.js含む）が多い傾向です。Vueも国内企業で一定の需要があります。転職市場での選択肢を広げる観点ではReact/Next.jsの習得が有利ですが、現職でVueを使っているなら無理に乗り換えず、TypeScriptと設計力を磨く方が効率的な場合もあります。",
  },
  {
    q: "30代のフロントエンドエンジニアの市場価値は？",
    a: "React/Vue + TypeScript + テスト設計の経験がある30代は市場価値が高い傾向です。レバテックの年代別公表値（2025年）でも正社員SEの30代平均は約499万円で、Next.js/Nuxtでのフルスタック開発やデザインシステム構築経験があるとさらに評価されます。",
  },
  {
    q: "フリーランスと正社員、どちらがよいですか？",
    a: "収入面ではフリーランスが高めに出る傾向（フリーランスボード調査でフロントエンド案件の月単価約78.8万円・2025年12月）ですが、安定性・福利厚生は正社員が優位です。30代前半で正社員としてスキルを磨き、その後に独立を検討するパターンが多く見られます。",
  },
  {
    q: "バックエンドからフロントエンドに転向できますか？",
    a: "可能です。TypeScript経験のあるバックエンドエンジニアはReact/Next.jsへの転向がスムーズです。API設計の知識はフルスタック開発で強みになり、移行の足がかりになります。",
  },
  {
    q: "フロントエンドエンジニアにおすすめの転職エージェントは？",
    a: "React/Vue求人が豊富で技術トレンドに詳しいレバテックキャリア、Web系スタートアップに強いGreen、IT/Web特化のGeeklyが定番です。求人母数を確保したい場合はリクルートエージェントITやdoda ITも併用候補です。",
  },
  {
    q: "実務経験浅めでもフロントエンドで転職できますか？",
    a: "HTML/CSS/JavaScriptの基礎とReact/Vueの公開ポートフォリオがあれば、中小プロダクトやWeb制作会社のモダン化案件から実務年数を作るのが現実的です。状態管理・テスト・パフォーマンス配慮を見せられる成果物を用意して臨みましょう。",
  },
];

export default function FrontendSkillPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/skill/frontend/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "フロントエンドエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          フロントエンドエンジニア転職完全ガイド【2026年】年収・求人の探し方
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | React/Vue/Next.js時代のフロントエンド転職を30代・40代向けに解説
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "求人ボックス 給料ナビ（2025年時点）",
            "レバテック 年代別平均年収（2025年）",
            "フリーランスボード調査（INSTANTROOM・2025年12月）",
          ]}
        />

        {/* 結論 */}
        <section id="conclusion" className="mb-10">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：フロントエンド転職の攻め方</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              フロントエンドは求人数が多い一方で年収の幅も広い領域です（求人ボックス2025年で平均約549万円・幅326〜997万円）。<strong>「React/Next.js × TypeScript × テスト・設計」を軸に、どの年収帯・どの企業タイプを狙うかを先に決める</strong>のが攻略の前提。求人サイトの件数だけで判断せず、IT特化エージェントで企業の技術文化まで確認するのが効率的です。
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>・年収重視なら自社開発・メガベンチャー、裁量重視ならスタートアップ。</li>
              <li>・30代・40代は「スペシャリスト or フルスタック/リード」の軸を明確に。</li>
              <li>・エージェントはレバテックキャリア／Green／Geeklyの併用が定番。</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-petrol hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 市場・年収データ */}
        <section id="market" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フロントエンドの市場・年収データ（公表値）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            フロントエンドエンジニアの需要は2026年も高水準を維持し、React/Next.jsを使ったモダン開発の求人が中心です。TypeScriptの必須化が進み、Server ComponentsやEdge Runtimeなど新パラダイムの理解が市場価値を左右します。年収は出典により集計対象が異なるため、幅で捉えてください。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">出典</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年収の目安</th>
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
            ※ 求人ボックスの数値は集計時期や対象範囲で変動します。フリーランスの単価・年収は正社員より高めに出る傾向があり、雇用形態が違う前提で読む必要があります。エンジニア全体では経産省「IT人材需給に関する調査」（2019年公表の試算）で2030年に最大約79万人のIT人材不足が見込まれており、フロントエンド人材の需要も底堅いと考えられます。
          </p>
        </section>

        {/* 経験レベル */}
        <section id="level" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベル（求人要件の傾向）</h2>
          <div className="space-y-3">
            {[
              ["ジュニア〜ミドル（実務2〜4年）", "HTML/CSS/JS基礎、React/Vueでのコンポーネント実装、API連携。Web制作会社や中小自社開発のモダン化案件で募集が見られる層。"],
              ["ミドル〜シニア（実務4〜8年）", "TypeScript、状態管理、テスト、パフォーマンス最適化。設計レビューや若手育成も担う、求人母数が最も多い層。"],
              ["シニア・リード（実務8年〜）", "デザインシステム設計、フロントアーキテクチャ策定、技術選定。アーキテクト・テックリード求人の中心。"],
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
              <div key={i} className="bg-petrol-soft rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-2">{p.title}</h3>
                <p className="text-sm text-petrol-deep">{p.body}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">
            フリーランスと正社員の比較は<Link href="/knowledge/freelance-vs-fulltime/" className="text-petrol hover:underline">フリーランスvs正社員ガイド</Link>も参照してください。
          </p>
        </section>

        {/* 求人の探し方 */}
        <section id="find" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の探し方・強いエージェント</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            フロントエンド求人は数が多く、技術スタックや開発文化のミスマッチが起きやすい領域です。企業の内情を引き出せるエージェントを使い分けるのが効率的です。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア</h3>
              <p className="text-sm text-slate-600 mb-2">IT/Web特化でReact/Vue求人が豊富。技術トレンドに詳しいアドバイザーが在籍し、高年収帯のマッチングに強み。</p>
              <Link href="/review/levtech/" className="text-sm text-petrol hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Green</h3>
              <p className="text-sm text-slate-600 mb-2">成功報酬型の転職サイト。Web系スタートアップのフロント求人が多く、カジュアル面談で技術文化を事前に確認できる。</p>
              <Link href="/review/green/" className="text-sm text-petrol hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Geekly</h3>
              <p className="text-sm text-slate-600 mb-2">IT/Web/ゲーム業界特化。メガベンチャーの非公開求人にもアクセスでき、提案スピードが強み。</p>
              <Link href="/review/geekly/" className="text-sm text-petrol hover:underline">詳細レビューを見る →</Link>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            求人母数を最大化したい場合は<Link href="/review/recruit-it/" className="text-petrol hover:underline">リクルートエージェントIT</Link>や<Link href="/review/doda-it/" className="text-petrol hover:underline">doda ITエンジニア</Link>も併用候補。比較は<Link href="/compare/levtech-vs-geekly/" className="text-petrol hover:underline">レバテック vs Geekly</Link>を参照してください。
          </p>
        </section>

        {/* 参入ルート */}
        <section id="entry" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">他職種からの参入ルート</h2>
          <ul className="space-y-2 text-sm text-slate-600">
            {[
              "バックエンド経験者はTypeScript・API設計の強みを活かし、フルスタック前提で参入する。",
              "Web制作・コーダー出身者は、React/Vueと状態管理・テストを足してアプリ開発側へ移行する。",
              "公開ポートフォリオ（Next.js/Nuxt）で、設計・パフォーマンス・アクセシビリティ配慮を見せる。",
              "いきなり大規模を狙わず、モダン化フェーズの中小プロダクトで実務年数を積む。",
            ].map((t, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-petrol font-bold shrink-0">✓</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-slate-500 mt-3">
            関連: <Link href="/knowledge/portfolio/" className="text-petrol hover:underline">ポートフォリオの作り方</Link> / <Link href="/skill/react/" className="text-petrol hover:underline">Reactエンジニア転職ガイド</Link>
          </p>
        </section>

        {/* 30代・40代視点 */}
        <section id="middle" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            ミドル層の強みは「設計とレビューで品質を担保した経験」「複数案件で再現性を示せること」です。レバテックの年代別公表値（2025年）でも正社員SEの平均は30代で約499万円、40代で約618万円と、年代が上がるほど水準が上がる傾向があり、フロントの即戦力性を示せれば交渉余地は十分にあります。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            40代では「最新トレンドへの追従力」を懸念されることがあるため、直近のキャッチアップ実績（App Router移行、デザインシステム導入など）を具体的に語れると安心感につながります。年代別の市場感は<Link href="/age/30s/" className="text-petrol hover:underline">30代の転職ガイド</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職ガイド</Link>も参照してください。
          </p>
        </section>

        {/* 学習戦略 */}
        <section id="study" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルアップ・学習戦略</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            {[
              ["コア技術を深める", "React/Vueの内部挙動、レンダリング最適化、状態管理の設計判断を語れるレベルを目指す。"],
              ["TypeScriptを前提に", "型安全なコンポーネント設計はモダンフロントの標準。型の引き出しを増やす。"],
              ["品質と速度で差をつける", "テスト（Playwright等）、Core Web Vitals改善、アクセシビリティ対応は具体的な強みになる。"],
              ["アウトプットを残す", "UIライブラリ公開、技術記事、設計の意思決定ログなど、思考が見える成果物を蓄積する。"],
            ].map(([t, d], i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 mb-1">{t}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">
            学び続ける習慣づくりは<Link href="/knowledge/continuous-learning/" className="text-petrol hover:underline">継続的な学習の進め方</Link>も参考になります。
          </p>
        </section>

        {/* 向き不向き */}
        <section id="fit" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フロントエンド転職が向いている人・向いていない人</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3 text-sm">向いている人</h3>
              <ul className="space-y-2 text-sm text-green-900">
                {[
                  "ユーザーに近い領域で、見た目と使い心地を作り込みたい",
                  "求人数が多く選択肢の広い領域で動きたい",
                  "React/Vue + TypeScriptでモダン開発をしたい",
                  "将来的にフリーランスや独立も視野に入れている",
                ].map((t, i) => (
                  <li key={i} className="flex gap-2"><span className="font-bold shrink-0">✓</span><span>{t}</span></li>
                ))}
              </ul>
            </div>
            <div className="border border-slate-200 bg-slate-50 rounded-lg p-5">
              <h3 className="font-bold text-slate-700 mb-3 text-sm">向いていないかもしれない人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  "技術トレンドの移り変わりの速さが負担に感じる",
                  "UIより、データ基盤・インフラを主戦場にしたい",
                  "デザインやブラウザ差異の細かい調整が苦手",
                  "学習時間が取れず、現スタックから動く気がない",
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
            Qiita Job Change・みん評などの口コミプラットフォームでは、フロントエンドエンジニアの転職に関して「公開ポートフォリオで設計・パフォーマンス配慮を見せると評価された」「Web系自社開発はTypeScriptとテストの実務を重視する傾向だった」といった声が見られます。エージェント利用については、IT/Web特化型に対して「フロントの技術文化まで把握していて話が早い」という肯定的な傾向がある一方、総合型では「フロントの専門性が弱い担当に当たることがある」という指摘も見られます。あくまで傾向であり、担当者やタイミングによって体験は異なります。
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
          <h2 className="text-xl font-bold mb-3">フロントエンドのスキルを活かした転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントに登録して、あなたのスキルの市場価値と非公開求人を確認しましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Reactエンジニア転職ガイド", href: "/skill/react/" },
              { name: "TypeScriptエンジニア転職ガイド", href: "/skill/typescript/" },
              { name: "フリーランスvs正社員ガイド", href: "/knowledge/freelance-vs-fulltime/" },
              { name: "30代の転職ガイド", href: "/age/30s/" },
              { name: "レバテックキャリアの評判", href: "/review/levtech/" },
              { name: "スキル別転職ガイド一覧", href: "/skill/" },
            ].map((item, i) => (
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
