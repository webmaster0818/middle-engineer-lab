import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "Vue.jsエンジニアの転職ガイド｜年収・求人・Reactとの違い【2026年】";
const PAGE_DESC =
  "Vue.jsエンジニアの転職市場を2026年最新の公表データで解説。Reactとの求人数の差、Vue3・Nuxt・Piniaのエコシステム、年収を上げる方法、React/TypeScriptを併用する価値を30代・40代エンジニア向けに正直にまとめました。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "diff", label: "まず：ReactとVueの違い・求人数の差（正直に）" },
  { id: "conclusion", label: "結論：Vue転職市場の攻め方" },
  { id: "market", label: "市場・年収データ" },
  { id: "eco", label: "Vueエコシステム（Vue3 / Nuxt / Pinia）" },
  { id: "level", label: "求められる経験レベル" },
  { id: "salary-up", label: "年収を上げる方法" },
  { id: "find", label: "求人の探し方" },
  { id: "entry", label: "学習コストと参入のしやすさ" },
  { id: "middle", label: "30代・40代の視点" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "ReactとVue.jsはどちらが転職に有利ですか？",
    a: "国内の求人数では現状Reactが多数派で、選択肢の広さではReactが有利です。一方Vueは、Nuxtを採用する自社開発・受託や、学習コストの低さから一定の企業に根強い需要があり、Vueが得意なら十分に戦えます。最も市場価値が高いのは「Vueを軸にしつつReact・TypeScriptも触れる」状態です。どちらか一方に固執せず、フレームワークの考え方を移植できることを示すのが現実解です。",
  },
  {
    q: "Vue.jsエンジニアの年収はどのくらいですか？",
    a: "Vue専用の公的な平均年収統計は確認できていないため、フロントエンドエンジニア区分の参考値で見ると、求人ボックスのフロントエンド平均は約460万円・平均時給1,850円です（2026年6月時点・動的に変動する値のため参考）。媒体調査では、Vueを扱う案件の相場としてWebサービス系約424万円、システム系約472万円、アプリ系約461万円、SE・PG系約422万円といった数値も示されています（各社調査・幅あり）。役割やフレームワーク併用で上下します。",
  },
  {
    q: "Vue.jsとReactの違いは技術的に何ですか？",
    a: "Vueはテンプレート構文と単一ファイルコンポーネント（SFC）で学習しやすく、段階的に導入しやすいのが特徴です。Vue3ではComposition APIによりロジックの再利用や型との相性が改善しました。ReactはJSXと関数コンポーネント・フックが中心で、エコシステムが巨大です。どちらも宣言的UI・コンポーネント指向という根本は共通で、一方を深く理解すればもう一方の習得は速くなります。",
  },
  {
    q: "Vue.jsの求人は減っていますか？",
    a: "国内ではReact求人の方が多く伸びている一方、Vueの求人がなくなるわけではありません。Forkwell等の求人サービスではVue案件の年収上限に最高2,000万円クラスの提示も見られ（2026年6月時点）、案件数自体はReactより小さいものの高単価の上振れも存在します。Vue採用企業を狙い撃ちしつつ、Reactも選択肢に入れておくのが安全です。",
  },
  {
    q: "Vueに加えて何を学ぶと市場価値が上がりますか？",
    a: "第一にTypeScriptです。Vue3はTypeScriptとの親和性が向上しており、型安全なコンポーネント設計は評価されます。第二にReactの基礎で、両フレームワークを語れると応募できる求人が広がります。さらにNuxtでのSSR/SSG、状態管理（Pinia）、テスト、パフォーマンス最適化まで踏み込むと、シニアフロントエンドとしての評価につながります。",
  },
  {
    q: "Vue.jsは未経験から学びやすいですか？",
    a: "フロントエンドの中では学習コストが低い部類とされ、HTML/CSS/JavaScriptの基礎があれば段階的に習得しやすいのが利点です。公式ドキュメントが充実しており、小さなSPAから作り始められます。ただし「学びやすい＝求人が多い」ではない点に注意し、ポートフォリオでVue3＋TypeScriptの実装力を示すことが転職では重要になります。",
  },
  {
    q: "40代でもVue.jsエンジニアへ転職できますか？",
    a: "フロントエンドの設計力・チームをまとめる力があれば可能です。ミドル層では、コンポーネント設計・状態管理の方針決め・パフォーマンス改善・若手レビューといった上流要素が評価されます。特定フレームワークの細かな記法より、UI設計の判断とチームへの展開力を示すことが、年代を問わず通用する武器になります。",
  },
];

const salaryByCategory = [
  ["Webサービス系", "約424万円", "自社サービスのフロント実装"],
  ["システム系", "約472万円", "業務システムのフロント開発"],
  ["アプリ系", "約461万円", "Webアプリ・SPAの開発"],
  ["SE・PG系", "約422万円", "受託・SIerでのフロント担当"],
];

export default function VueSkillPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/skill/vue/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Vue.jsエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Vue.jsエンジニアの転職ガイド｜年収・求人・Reactとの違い【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | Vue.jsスキルを活かした転職を30代・40代エンジニア向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          Vue.jsは学習しやすさと段階的な導入のしやすさから、自社開発・受託の現場で根強く使われるフロントエンドフレームワークです。本記事はReactとの求人数の差を正直に踏まえたうえで、「Vueスキルを転職市場でどう価値化するか」に絞り、公表データをもとに30代・40代エンジニアの戦略を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "求人ボックス 給料ナビ フロントエンドエンジニア（2026年6月時点・動的値）",
            "hipro 等 媒体調査（各社調査・幅あり）",
            "Forkwell 求人情報（2026年6月時点）",
            "本サイト データシート（2026年6月）",
          ]}
        />

        {/* 目次 */}
        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
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

        {/* 違い（冒頭差別化） */}
        <section id="diff" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">まず：ReactとVueの違い・求人数の差（正直に）</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              Vueの転職を考えるなら、Reactとの位置づけを正直に把握しておくことが最初の一歩です。本ページは<strong>Vue固有</strong>の戦略に絞り、フロントエンド全般や React は送客先として扱います。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li><strong>求人数</strong>：国内ではReactが多数派。選択肢の広さはReactが優位。</li>
              <li><strong>Vueの強み</strong>：学習コストが低く、Nuxt採用の自社/受託に根強い需要。高単価案件も一部に存在。</li>
              <li><strong>最適解</strong>：Vueを軸に<strong>React・TypeScriptも触れる</strong>と市場価値が最大化。</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-3 text-sm">
              React中心の戦略は<Link href="/skill/react/" className="text-blue-600 hover:underline">React転職ガイド</Link>、フロントエンド全体像は<Link href="/skill/frontend/" className="text-blue-600 hover:underline">フロントエンド転職ガイド</Link>を参照してください。本ページはVueで戦う人向けです。
            </p>
          </div>
        </section>

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：Vue転職市場の攻め方</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              Vueエンジニアの転職は、<strong>「Vueが書ける」から「フロント全体を設計でき、ReactもTSも扱える」へ広げて見せられるか</strong>で評価が変わります。攻め方は次の3点です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>Vue採用企業を狙い撃ち</strong>しつつ、Reactも候補に入れて母数を確保する</li>
              <li>② <strong>Vue3 Composition API＋TypeScript</strong>で型安全な設計力を示す</li>
              <li>③ <strong>Nuxt・Pinia・テスト・パフォーマンス</strong>まで踏み込みシニア評価を狙う</li>
            </ul>
          </div>
        </section>

        {/* 市場・年収 */}
        <section id="market" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">市場・年収データ</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Vue専用の年収統計は確認できていないため、フロントエンドエンジニア区分の参考値で見ます。求人ボックスのフロントエンド平均は<strong>約460万円・平均時給1,850円</strong>です（2026年6月時点・動的に変動する値のため参考としてご覧ください。Vue専用ではなくフロントエンド区分の代用です）。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            媒体調査では、Vueを扱う案件の相場として次のような数値も示されています（各社調査・幅あり・単一の断定値ではありません）。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">案件区分</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年収相場（目安）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">主な内容</th>
                </tr>
              </thead>
              <tbody>
                {salaryByCategory.map(([cat, salary, note], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{cat}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{salary}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: フロントエンド平均は求人ボックス給料ナビ（2026年6月時点・動的値・参考）。案件区分別はhipro等の媒体調査（各社調査・幅あり）。Forkwellの求人ではVue案件の年収上限に最高2,000万円クラスの提示も見られますが（2026年6月時点）、案件数自体はReactより小さく、高単価は一部の上振れです。これらは単一の確定値ではなく、役割・併用スキルで上下する目安です。
          </p>
        </section>

        {/* エコシステム */}
        <section id="eco" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Vueエコシステム（Vue3 / Nuxt / Pinia）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Vueで戦うなら、フレームワーク本体だけでなく周辺エコシステムまで一通り触れておくと評価が上がります。
          </p>
          <div className="space-y-3">
            {[
              { t: "Vue3 / Composition API", d: "ロジックの再利用と型との相性が向上した現行主流。Options APIだけでなくComposition APIで書けることが前提になりつつある。" },
              { t: "Nuxt", d: "VueベースのSSR/SSGフレームワーク。SEOやパフォーマンスが要件のプロジェクトで採用され、Vue求人の主要な受け皿の一つ。" },
              { t: "Pinia", d: "Vue公式推奨の状態管理ライブラリ（Vuexの後継的位置づけ）。中〜大規模アプリの状態設計で必須級。" },
              { t: "TypeScript連携", d: "Vue3はTSとの親和性が改善。型安全なコンポーネント・コンポーザブル設計は市場価値を押し上げる。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            型の習得は<Link href="/skill/typescript/" className="text-blue-600 hover:underline">TypeScript転職ガイド</Link>が直接の続きになります。
          </p>
        </section>

        {/* 経験レベル */}
        <section id="level" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベル</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Vue求人はおおむね次の3層に分かれます（求人票の頻出要件をもとにした傾向）。
          </p>
          <div className="space-y-3">
            {[
              { t: "実務1〜3年層（コンポーネント実装）", d: "Vue3の基本、SFC、Vue Router、API連携、基礎的なPinia。チームの一員として画面を作れる層。" },
              { t: "実務3〜6年層（設計・状態管理）", d: "状態設計、Nuxtでのレンダリング戦略、TypeScript連携、コンポーネント設計の方針決め。年収帯が一段上がる中核ゾーン。" },
              { t: "実務6年以上層（リード・アーキテクト）", d: "フロント全体設計、パフォーマンス最適化、設計レビュー、React等との技術選定。マネジメント要素も評価される。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 年収を上げる方法 */}
        <section id="salary-up" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収を上げる方法</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">TypeScriptで型安全な設計力を示す</h3>
              <p className="text-sm text-blue-700">
                Vue3＋TypeScriptは年収を押し上げる王道。型でバグを防ぐ設計、コンポーザブルの型定義などを語れると評価が上がります。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Reactも扱えるようにして母数を広げる</h3>
              <p className="text-sm text-blue-700">
                VueとReactの両方を語れると応募できる求人が一気に広がります。フレームワークの考え方を移植できることが、技術選定を任される立場への近道です。
                <Link href="/skill/react/" className="text-blue-700 underline ml-1">React転職ガイド</Link>を参照。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Nuxt・パフォーマンス・テストで上流へ</h3>
              <p className="text-sm text-blue-700">
                SSR/SSG、レンダリング最適化、Core Web Vitals改善、コンポーネントテストまで踏み込むと、シニアフロントエンドとして高年収帯に届きやすくなります。
              </p>
            </div>
          </div>
        </section>

        {/* 求人の探し方 */}
        <section id="find" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の探し方</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Vue求人は数が限られる分、IT/Web特化サービスで効率よく探すのが有効です。以下は当サイトのデータシート（2026年6月時点・各社公表/二次情報）に基づく整理です。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア</h3>
              <p className="text-sm text-slate-600 mb-2">IT/Web特化。Vue/Nuxtの自社開発求人を技術に明るいアドバイザー経由で探せます。高年収求人比率が高いとされます。</p>
              <Link href="/review/levtech/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Geekly（ギークリー）</h3>
              <p className="text-sm text-slate-600 mb-2">IT/Web/ゲーム特化。Vueを使う自社サービス企業の求人に出会いやすいのが特徴です。</p>
              <Link href="/review/geekly/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">リクルートエージェントIT</h3>
              <p className="text-sm text-slate-600 mb-2">国内最大級の求人数。Vueに限らず幅広く比較し、母数を確保したい場合の併用先です。</p>
              <Link href="/review/recruit-it/" className="text-sm text-blue-600 hover:underline">詳細レビューを見る →</Link>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            複数併用の進め方は<Link href="/knowledge/multiple-agents/" className="text-blue-600 hover:underline">エージェント複数利用のコツ</Link>、選び方の軸は<Link href="/knowledge/how-to-choose/" className="text-blue-600 hover:underline">転職エージェントの選び方</Link>を参考にしてください。
          </p>
        </section>

        {/* 参入 */}
        <section id="entry" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">学習コストと参入のしやすさ</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Vueはフロントエンドの中では学習コストが低い部類とされ、参入しやすいのが利点です。ただし「学びやすい＝求人が多い」ではない点は正直にお伝えします。
          </p>
          <div className="space-y-3">
            {[
              { n: "STEP 1", t: "Vue3の基礎を固める", d: "公式ドキュメントでSFC・Composition API・Vue Routerを学び、小さなSPAを作る。" },
              { n: "STEP 2", t: "TypeScript＋Pinia/Nuxt", d: "型安全な実装と状態管理、SSR/SSGまで触れ、実務水準のアプリを1つ完成させる。" },
              { n: "STEP 3", t: "ポートフォリオ＋Reactの素振り", d: "成果物をGitHubに公開。設計意図をREADMEで説明し、Reactの基礎も触って応募の母数を広げる。" },
            ].map((x, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="text-xs font-bold text-blue-600 shrink-0 w-14 pt-1">{x.n}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                  <p className="text-sm text-slate-600">{x.d}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            成果物づくりは<Link href="/knowledge/portfolio/" className="text-blue-600 hover:underline">エンジニアのポートフォリオの作り方</Link>が参考になります。
          </p>
        </section>

        {/* 30代・40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              ミドル層のVue転職では、<strong>「Vueの記法に詳しい」より「UI設計の判断とチームへの展開ができる」</strong>ことが評価軸になります。コンポーネント設計の方針、状態管理の選択、パフォーマンス改善、若手レビューといった上流要素が差を生みます。
            </p>
            <p>
              一方で注意点として、Vue単一スキルに固執すると求人の母数が頭打ちになりやすい点があります。<strong>React・TypeScriptを併せて扱える</strong>状態にしておくことが、年代を問わず市場価値を保つ保険になります。特定フレームワークに依存しない設計思想を持つことが、ミドルの強みです。
            </p>
            <p>
              年代別の市場感は<Link href="/age/30s/" className="text-blue-600 hover:underline">30代エンジニアの転職</Link>・<Link href="/age/40s/" className="text-blue-600 hover:underline">40代エンジニアの転職</Link>、年収交渉は<Link href="/knowledge/salary-negotiation/" className="text-blue-600 hover:underline">年収交渉のコツ</Link>も合わせてご覧ください。
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
          <h2 className="text-xl font-bold mb-3">Vueスキルを活かした転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            Vue/Nuxtの自社開発求人に強いIT特化型エージェントで、あなたのフロントエンドスキルの市場価値を確認しましょう。
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
              { name: "React転職ガイド", href: "/skill/react/" },
              { name: "フロントエンド転職ガイド", href: "/skill/frontend/" },
              { name: "TypeScript転職ガイド", href: "/skill/typescript/" },
              { name: "エンジニアのポートフォリオの作り方", href: "/knowledge/portfolio/" },
              { name: "40代エンジニアの転職", href: "/age/40s/" },
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
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-sm"><li><a href="/company/dmm/" className="text-blue-700 hover:underline">DMM.com</a></li><li><a href="/company/mercari/" className="text-blue-700 hover:underline">メルカリ</a></li><li><a href="/company/plaid/" className="text-blue-700 hover:underline">プレイド</a></li><li><a href="/company/raksul/" className="text-blue-700 hover:underline">ラクスル（RAKSUL）</a></li><li><a href="/company/visional/" className="text-blue-700 hover:underline">ビジョナル/ビズリーチ</a></li></ul>
          <p className="mt-3 text-sm"><a href="/skill/" className="text-blue-700 hover:underline">スキル別ガイド一覧</a> ／ <a href="/salary/company-ranking/" className="text-blue-700 hover:underline">企業年収ランキング</a></p>
        </div>
      </section>
      </>
  );
}
