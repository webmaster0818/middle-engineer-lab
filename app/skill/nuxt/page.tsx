import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "Nuxtエンジニアの転職ガイド｜年収・求人・将来性【2026年】",
  description:
    "Nuxt（Vue.js）エンジニアの転職市場を出典付きで解説。求人ボックス・レバテックの公表値をもとに、Vueを土台にしたモダンフロントエンドの市場価値、求人傾向、他技術からの参入ルート、30代・40代の戦い方をミドルエンジニア向けに整理します。",
};

const toc = [
  { id: "conclusion", label: "1. 結論：Nuxtエンジニアの転職市場の攻め方" },
  { id: "market", label: "2. Nuxtの市場・年収データ（出典付き）" },
  { id: "level", label: "3. 求められる経験レベルと求人要件の傾向" },
  { id: "career", label: "4. Nuxtエンジニアのキャリアパス" },
  { id: "find", label: "5. 求人の探し方・強いエージェント" },
  { id: "entry", label: "6. 経験浅めからNuxtに参入するルート" },
  { id: "age", label: "7. 30代・40代エンジニアの視点" },
  { id: "learn", label: "8. スキルアップ・学習戦略" },
  { id: "faq", label: "9. よくある質問" },
];

const faqs = [
  {
    q: "Nuxtエンジニアの平均年収はどのくらいですか？",
    a: "Nuxt単体の公表平均年収は乏しいため、関連職種・関連技術のデータで代替します。求人ボックス給料ナビ（2026年6月時点）ではフロントエンドエンジニアの平均年収が約460万円、Webエンジニアが約462万円です。土台となるVue.jsについては、媒体調査で年収相場が概ね420〜470万円台とされ、フリーランスでは月70万円前後（年収換算840万円相当）の高単価案件も見られます。NuxtはVueベースのため、これらが実勢に近い目安になります。いずれも調査時点の公開値で、個人の年収を保証するものではありません。",
  },
  {
    q: "NuxtはVueが使えれば転職できますか？",
    a: "NuxtはVue.jsのフレームワークなので、Vueの実務経験がそのまま土台になります。ただし求人で評価されるのは「Nuxt単体」ではなく、SSR/SSG、TypeScript、Composition API、状態管理（Pinia等）、API連携までを含む実務力です。Vueでの開発経験があれば、Nuxt固有のディレクトリ構成やレンダリング戦略をキャッチアップする形で十分参入できます。",
  },
  {
    q: "Nuxtの求人はどんな企業に多いですか？",
    a: "Vue.jsを採用してきた自社サービス企業、SaaS、メディア・ECサイト、受託開発企業に多く見られます。日本ではVueの導入実績が厚く、その延長でNuxtを使う現場が一定数あります。SEOやパフォーマンスが重視されるサービスでSSR/SSGの強みが評価されます。具体的な社名や求人数は時期で変動するため、エージェントで最新の保有求人を確認してください。",
  },
  {
    q: "Nuxt未経験でも転職は可能ですか？",
    a: "VueやReactなどモダンフロントエンドの実務経験があれば、Nuxt未経験でもポテンシャル採用の対象になり得ます。GitHubにNuxtで作ったSSR/SSG構成のアプリを公開し、ディレクトリ構成やデータフェッチの設計意図を説明できる状態にしておくと、学習意欲と基礎力を示せます。一方で「Nuxt実務2年以上」を求める即戦力求人もあり、入口の幅は求人によって差があります。",
  },
  {
    q: "NextとNuxtのどちらを学ぶべきですか？",
    a: "どちらも優劣ではなく、土台がReactかVueかの違いです。すでにVueの実務があるならNuxt、Reactの実務があるならNext.jsが移行しやすい選択です。求人の絶対数はReact/Next.js系のほうが多い傾向ですが、Vue/Nuxtを採用する企業も根強くあります。重要なのはフレームワーク名より、JavaScript/TypeScriptの言語力と設計力です。",
  },
  {
    q: "フレームワーク単体より何が評価されますか？",
    a: "実務では「Nuxtが書ける」こと自体より、JavaScript/TypeScriptの言語力、設計・テスト・パフォーマンスチューニング、バックエンドやインフラとの連携といった総合力が評価されます。フレームワークは実装手段であり、面接ではどんなプロダクト課題をどう解決したかが問われます。Nuxtはその文脈を示しやすい題材として活用するのが効果的です。",
  },
  {
    q: "Nuxtエンジニアにおすすめの転職エージェントは？",
    a: "IT・Web特化で高年収求人比率が高いレバテックキャリア、ハイクラス・スカウト型のビズリーチ、Web系スタートアップの提案に強いGeeklyの併用が選択肢です。Vue/Nuxtの求人は自社開発企業に集中するため、複数登録して保有求人を横断的に比較するのが現実的です。",
  },
  {
    q: "Nuxtエンジニアはしつこく営業されたり断られたりしますか？",
    a: "エージェントの連絡頻度は担当者により差があり、希望すればメール中心・LINE中心など連絡手段を調整できます。フロントエンドの実績が薄い段階では紹介求人が絞られることもありますが、これは「断られた」のではなく要件とのマッチングの問題です。個人開発やVueの実務など材料を補って再相談する余地があります。",
  },
];

export default function NuxtSkillPage() {
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
        title="Nuxtエンジニアの転職ガイド｜年収・求人・将来性【2026年】"
        description="Nuxt（Vue.js）エンジニアの転職市場を出典付きで解説。Vueを土台にしたモダンフロントエンドの市場価値、求人傾向、他技術からの参入ルート、30代・40代の戦い方をミドルエンジニア向けに整理します。"
        url="/skill/nuxt/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Nuxtエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Nuxtエンジニアの転職ガイド｜年収・求人・将来性【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | Nuxtエンジニアの転職市場をミドル層向けに分析
        </p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            NuxtはVue.jsをベースにしたフロントエンドフレームワークで、SSR（サーバーサイドレンダリング）・SSG（静的生成）・ファイルベースのルーティングなどを標準で備え、Vueでのアプリ開発を効率化します。日本ではVueの導入実績が厚く、その延長でNuxtを採用する現場が一定数あり、モダンフロントエンド人材の需要を支えています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、Nuxtエンジニア転職の「攻め方」を、<strong>公表年収データ・求められる経験レベル・求人の探し方・経験浅めからの参入ルート</strong>に分けて、30代・40代の視点を交えて整理します。フレームワーク単体ではなく「JavaScript／TypeScriptの言語力＋実務」で評価される点も誠実にお伝えします。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "求人ボックス 給料ナビ（フロントエンド／Webエンジニア・2026年6月閲覧）",
            "Vue.js年収相場に関する各種媒体調査（2025年）",
            "レバテック公表の年代別平均年収（2025年）",
          ]}
        />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-sm text-blue-600 hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：Nuxtエンジニアの転職市場の攻め方</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>Nuxtは「Vueの実務力＋モダンフロントの設計力」をセットで示せる人材が評価される分野です。</strong>フレームワーク名を掲げるより、言語力と実プロダクトでの課題解決を語れることが転職成功の軸になります。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・関連職種のフロントエンドエンジニア平均年収は<strong>約460万円</strong>（求人ボックス・2026年6月）。土台のVue.jsは相場420〜470万円台（媒体調査）</li>
              <li>・Vueなどモダンフロントの経験があれば、Nuxt未経験でもポテンシャル採用の余地がある</li>
              <li>・Nuxtは<strong>TypeScript・パフォーマンス最適化・バックエンド連携</strong>との掛け合わせで市場価値が上がる</li>
            </ul>
          </div>
        </section>

        {/* 市場・年収データ */}
        <section id="market" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Nuxtの市場・年収データ（出典付き）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Nuxt単体の公表平均年収は乏しいため、ここでは関連職種・関連技術（フロントエンド職／Vue.js）の公表値で代替し、出典と時点を明示します。創作した数値は使用していません。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["フロントエンドエンジニアの平均年収", "約460万円", "求人ボックス 給料ナビ（2026年6月閲覧）"],
                  ["Webエンジニアの平均年収", "約462万円", "求人ボックス 給料ナビ（2026年6月閲覧）"],
                  ["Vue.jsエンジニアの年収相場（関連技術で代替）", "概ね420〜470万円台", "Vue.js年収相場に関する媒体調査（2025年）"],
                  ["正社員SEの平均年収・30代", "約499万円", "レバテック公表（2025年）"],
                  ["正社員SEの平均年収・40代", "約618万円", "レバテック公表（2025年）"],
                  ["IT人材不足の試算", "2030年に最大約79万人不足", "経産省 IT人材需給調査（2019年公表の試算）"],
                ].map(([label, value, src], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">
                      {label}
                    </th>
                    <td className="px-4 py-3 text-slate-700 border-b border-slate-200 align-top">
                      <span className="font-medium">{value}</span>
                      <br />
                      <span className="text-xs text-slate-500">{src}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            ※ NuxtはVue.jsベースのフレームワークのため、ここではフロントエンド職とVue.jsのデータを代替指標として用いています。Nuxt特化の年収は求人によって幅が大きく、フリーランス案件では月70万円前後の高単価案件も見られます。最新の実勢はエージェントで保有求人を確認することをおすすめします。
          </p>
        </section>

        {/* 求められる経験レベル */}
        <section id="level" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベルと求人要件の傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Nuxt求人は「Vue/Nuxt実務そのもの」を必須にするものと、「フロントエンド実務＋Nuxtは入社後キャッチアップ可」とするものに分かれます。求人票によく登場する要件を傾向としてまとめると次の通りです。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { tier: "入口（ポテンシャル）", req: "JavaScriptでのWeb開発1〜3年／HTML・CSS・Vue基礎／NuxtはGitHub等での自習レベル", note: "Nuxt未経験OK求人がここに該当" },
              { tier: "即戦力（ミドル）", req: "Vue/Nuxtでの開発実務／TypeScript／Composition API／SSR・SSGの理解／状態管理・API連携", note: "求人の中心ゾーン" },
              { tier: "ハイクラス", req: "大規模フロント設計・テックリード／パフォーマンス最適化／フロントの技術選定・規約整備", note: "年収700万円以上が狙える層" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2 text-sm">{item.tier}</h3>
                <p className="text-xs text-slate-600 mb-2 leading-relaxed">{item.req}</p>
                <p className="text-xs text-blue-600">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* キャリアパス */}
        <section id="career" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Nuxtエンジニアのキャリアパス</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Nuxtはフロントエンドからフルスタック・プロダクト領域へ広げやすい技術です。掛け合わせるスキルによって到達できるレンジが変わります。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "フロントエンドエンジニア", note: "Vue/NuxtでのUI・画面実装が中心。求人の最も多いゾーン" },
              { role: "フルスタックエンジニア", note: "NuxtのサーバーサイドAPI＋バックエンドまで担当。スタートアップで需要" },
              { role: "テックリード／フロントアーキテクト", note: "大規模フロントの設計＋技術選定＋チームリード" },
              { role: "フリーランス（Nuxt案件）", note: "モダンフロント・自社サービス開発案件。単価が高い傾向" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 mb-1">{item.role}</h3>
                <p className="text-xs text-slate-500">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">
            ※ 各ポジションの具体的な年収レンジは企業・時期で変動するため断定を避けています。レンジは面談時にエージェントへ確認してください。
          </p>
        </section>

        {/* 求人の探し方 */}
        <section id="find" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の探し方・強いエージェント</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Nuxt求人は自社開発企業に集中するため、特定の1社に絞るより複数のチャネルを横断するのが効率的です。タイプ別に向くサービスを整理します。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア（IT・Web特化）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT・Web特化で高年収求人の比率が高く、技術に踏み込んで話せるアドバイザーが在籍。モダンフロントエンドの提案に向きます。
              </p>
              <Link href="/review/levtech/" className="text-sm text-blue-600 hover:underline">レバテックキャリアの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ（ハイクラス・スカウト型）</h3>
              <p className="text-sm text-slate-600 mb-2">
                年収750万円以上を中心としたハイクラス・スカウト型。フロントアーキテクトやテックリード級の求人・スカウトに出会いやすいのが特徴です。
              </p>
              <Link href="/review/bizreach-it/" className="text-sm text-blue-600 hover:underline">ビズリーチの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Geekly（Web系・スタートアップに強い）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT・Web・ゲーム業界専門で、提案スピードが強み。Vue/Nuxtを採用するWeb系企業の求人を探したい場合の選択肢になります。
              </p>
              <Link href="/review/geekly/" className="text-sm text-blue-600 hover:underline">Geeklyの詳細レビュー →</Link>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            エージェント各社の比較は<Link href="/compare/agents/" className="text-blue-600 hover:underline">転職エージェント比較</Link>も参照してください。
          </p>
        </section>

        {/* 経験浅めからの参入ルート */}
        <section id="entry" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験浅めからNuxtに参入するルート</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "Vueの実務経験を土台にする", desc: "Vue・Reactなどモダンフロントの経験があれば、それを土台に「Nuxtは未経験だがキャッチアップ可」とアピールできます。NuxtはVueのフレームワークなので、ディレクトリ構成とレンダリング戦略を学べば移行はスムーズです。" },
              { num: "2", title: "GitHubに実務に近いNuxtアプリを公開する", desc: "SSR/SSG構成のWebアプリ、ファイルベースルーティングを使ったプロジェクトをNuxtで作って公開します。TypeScript・テスト・パフォーマンス計測まで含めると、動くだけでなく設計の意図が伝わる状態になります。" },
              { num: "3", title: "Vue採用企業のポテンシャル枠を狙う", desc: "Vueを採用してきた企業はNuxtへの拡張に前向きで、フロントエンド経験者に入社後キャッチアップ前提の採用を行うことがあります。エージェントに「Nuxtは学習中」と伝え、そうした求人を紹介してもらうのが近道です。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 30代・40代視点 */}
        <section id="age" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>
              <strong>フレームワークより言語力と設計経験で勝負する。</strong>フロントエンドはトレンドの移り変わりが速い分野ですが、30代・40代の強みはJavaScript/TypeScriptの言語力と、過去のプロダクトで培った設計・要件定義の経験です。流行に追従するだけでなく、なぜその技術を選ぶかを語れることが評価されます。
            </p>
            <p>
              <strong>掛け算で差別化する。</strong>「Nuxt＋バックエンド」「Nuxt＋過去のドメイン知識（EC・メディアなど）」の掛け合わせが、ミドル層の強みです。年齢を重ねた分の業務知識を、モダンフロントという実装手段と結びつけて語れると説得力が増します。
            </p>
            <p>
              <strong>マネジメント経験も資産になる。</strong>テックリードやフロントアーキテクトの求人では、コードを書く力に加えてチームの技術選定・育成の経験が評価されます。40代でPL／PM経験があるなら、それを技術力とセットで提示しましょう。
            </p>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            年代別の戦略は<Link href="/age/40s/" className="text-blue-600 hover:underline">40代エンジニアの転職</Link>・<Link href="/age/30s/" className="text-blue-600 hover:underline">30代エンジニアの転職</Link>も参考にしてください。
          </p>
        </section>

        {/* 学習戦略 */}
        <section id="learn" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルアップ・学習戦略</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>
              <strong>① 公式ドキュメントとVueの基礎を固める。</strong>Nuxtは公式ドキュメントが充実しています。まずVueのComposition APIなど基礎を固めたうえで、ディレクトリ構成・データフェッチ・レンダリング戦略といったNuxt固有の概念を公式で押さえると、表面的な使い方で終わりません。
            </p>
            <p>
              <strong>② TypeScriptを前提に書く。</strong>実務のNuxt開発はTypeScriptが標準です。型を意識した設計に慣れておくと、即戦力ゾーンの求人に手が届きます。型安全なコンポーネント設計やAPIの型共有まで経験すると面接で語れる材料になります。
            </p>
            <p>
              <strong>③ パフォーマンスとバックエンド連携を掛け合わせる。</strong>SSR/SSGの使い分け、Core Web Vitalsの改善、API/データベースとの連携経験は、ミドル以上の求人で差がつくポイントです。実プロダクトに近い構成で課題解決まで経験すると、市場価値が上がります。
            </p>
            <p>
              学習と転職活動の進め方は<Link href="/knowledge/continuous-learning/" className="text-blue-600 hover:underline">継続的な学習の習慣化</Link>・<Link href="/knowledge/portfolio/" className="text-blue-600 hover:underline">ポートフォリオの作り方</Link>もあわせてご覧ください。
            </p>
          </div>
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
          <h2 className="text-xl font-bold mb-3">Nuxtのスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            Vue/Nuxtの求人は自社開発企業に集中するからこそ、複数のIT特化型エージェントで保有求人を横断比較するのが近道です。
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
              { name: "Vueエンジニアの転職ガイド", href: "/skill/vue/" },
              { name: "TypeScriptエンジニアの転職ガイド", href: "/skill/typescript/" },
              { name: "Reactエンジニアの転職ガイド", href: "/skill/react/" },
              { name: "フロントエンドエンジニアの転職ガイド", href: "/skill/frontend/" },
              { name: "スキル別転職ガイド一覧", href: "/skill/" },
              { name: "ミドルエンジニア転職ラボTOP", href: "/" },
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
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-sm"><li><a href="/company/note/" className="text-blue-700 hover:underline">note（ノート）</a></li><li><a href="/company/raksul/" className="text-blue-700 hover:underline">ラクスル（RAKSUL）</a></li></ul>
          <p className="mt-3 text-sm"><a href="/skill/" className="text-blue-700 hover:underline">スキル別ガイド一覧</a> ／ <a href="/salary/company-ranking/" className="text-blue-700 hover:underline">企業年収ランキング</a></p>
        </div>
      </section>
      </>
  );
}
