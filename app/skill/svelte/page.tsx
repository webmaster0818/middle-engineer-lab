import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "Svelteエンジニアの転職ガイド｜年収・求人・将来性【2026年】",
  description:
    "Svelte（SvelteKit）エンジニアの転職市場を出典付きで解説。求人ボックスの公表値をもとに、新興フロントエンドフレームワークの市場価値、求人傾向、他技術からの参入ルート、30代・40代の戦い方をミドルエンジニア向けに整理します。",
};

const toc = [
  { id: "conclusion", label: "1. 結論：Svelteエンジニアの転職市場の攻め方" },
  { id: "market", label: "2. Svelteの市場・年収データ（出典付き）" },
  { id: "level", label: "3. 求められる経験レベルと求人要件の傾向" },
  { id: "career", label: "4. Svelteエンジニアのキャリアパス" },
  { id: "find", label: "5. 求人の探し方・強いエージェント" },
  { id: "entry", label: "6. 経験浅めからSvelteに参入するルート" },
  { id: "age", label: "7. 30代・40代エンジニアの視点" },
  { id: "learn", label: "8. スキルアップ・学習戦略" },
  { id: "faq", label: "9. よくある質問" },
];

const faqs = [
  {
    q: "Svelteエンジニアの平均年収はどのくらいですか？",
    a: "Svelteは新興フレームワークで求人数が限られ、Svelte単体の公表平均年収は乏しいため、関連職種のデータで代替します。求人ボックス給料ナビ（2026年6月時点）ではフロントエンドエンジニアの平均年収が約460万円、Webエンジニアが約462万円です。実務ではSvelte単体ではなくJavaScript/TypeScriptの言語力とフロント全般の実務力で評価されるため、これらが現実的な目安になります。Svelte特化の求人は少数のため、年収は求人ごとの幅が大きい点に注意してください。いずれも調査時点の公開値です。",
  },
  {
    q: "Svelteはどんな特徴のフレームワークですか？",
    a: "Svelteはコンパイル時に最適化を行い、仮想DOMを使わずに軽量なコードを生成するフロントエンドフレームワークです。記述量が少なく、ランタイムが軽いためパフォーマンス面で評価されています。アプリケーションフレームワークのSvelteKitを使うと、ルーティングやSSR/SSGも扱えます。React/Vueに比べると新興で、開発者からの満足度は高い一方、日本での求人母数はまだ限られます。",
  },
  {
    q: "Svelteの求人はどんな企業に多いですか？",
    a: "技術選定に積極的なWeb系スタートアップや、パフォーマンスを重視する自社サービス、社内ツール・管理画面などで採用例が見られます。ただし日本ではReact/Vue系が主流で、Svelteを主軸に据える求人はまだ少数です。「Svelteも使える」という形でReact/Vue求人の中に含まれることも多く、Svelte限定で探すより周辺技術と合わせて探すのが現実的です。",
  },
  {
    q: "Svelte未経験でも転職は可能ですか？",
    a: "Svelte単体の即戦力求人は少ないため、現実的にはReact/Vueなどモダンフロントの実務経験を主軸にしつつ、Svelteは「触れる・学習中」という形でアピールするのが有効です。GitHubにSvelte/SvelteKitで作ったアプリを公開しておくと、新技術へのキャッチアップ力を示せます。Svelteを必須とする求人は限られるため、関連技術での実務が転職の土台になります。",
  },
  {
    q: "Svelteの将来性はどうですか？",
    a: "Svelteは開発者満足度の調査で高い評価を継続しており、技術的な支持は厚いフレームワークです。一方で、日本の求人市場における採用比率はReact/Vueに比べてまだ小さいのが実情です。「将来有望だが現時点の求人母数は限られる」という性格を理解し、メインスキル（React/Vue/TypeScript等）の補強材料として位置づけるのが現実的な戦略です。",
  },
  {
    q: "フレームワーク単体より何が評価されますか？",
    a: "実務では「Svelteが書ける」こと自体より、JavaScript/TypeScriptの言語力、コンポーネント設計、状態管理、パフォーマンス最適化といったフロント全般の総合力が評価されます。Svelteのように新興で求人が限られる技術は特に、単体スキルではなく「フロント技術を素早く習得し最適なものを選べる力」の証明として活かすのが効果的です。",
  },
  {
    q: "Svelteエンジニアにおすすめの転職エージェントは？",
    a: "IT・Web特化で高年収求人比率が高いレバテックキャリア、ハイクラス・スカウト型のビズリーチ、Web系スタートアップの提案に強いGeeklyの併用が選択肢です。Svelte限定の求人は少ないため、フロントエンド全般で登録し、Svelteを扱う企業の求人を横断的に探すのが現実的です。",
  },
  {
    q: "Svelteエンジニアはしつこく営業されたり断られたりしますか？",
    a: "エージェントの連絡頻度は担当者により差があり、希望すればメール中心・LINE中心など連絡手段を調整できます。Svelte単体では紹介求人が絞られることもありますが、これは「断られた」のではなくSvelte求人の母数が少ないという市場の問題です。React/Vue等の実務やSvelteの個人開発を材料に、フロント全般で相談する余地があります。",
  },
];

export default function SvelteSkillPage() {
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
        title="Svelteエンジニアの転職ガイド｜年収・求人・将来性【2026年】"
        description="Svelte（SvelteKit）エンジニアの転職市場を出典付きで解説。新興フロントエンドフレームワークの市場価値、求人傾向、他技術からの参入ルート、30代・40代の戦い方をミドルエンジニア向けに整理します。"
        url="/skill/svelte/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Svelteエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Svelteエンジニアの転職ガイド｜年収・求人・将来性【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | Svelteエンジニアの転職市場をミドル層向けに分析
        </p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            Svelteはコンパイル時に最適化を行い、仮想DOMを使わず軽量なコードを生成する新興のフロントエンドフレームワークです。記述量の少なさとパフォーマンスの高さから開発者満足度の調査で高く評価されています。アプリケーションフレームワークのSvelteKitを使えばSSR/SSGも可能です。技術的な支持は厚い一方、日本の求人母数はReact/Vueに比べてまだ限られます。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、Svelteエンジニア転職の現実的な「攻め方」を、<strong>公表年収データ・求められる経験レベル・求人の探し方・経験浅めからの参入ルート</strong>に分けて、30代・40代の視点を交えて整理します。Svelteは新興技術ゆえ、フレームワーク単体ではなく「JavaScript／TypeScriptの言語力＋フロント全般の実務」で評価される点を誠実にお伝えします。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "求人ボックス 給料ナビ（フロントエンド／Webエンジニア・2026年6月閲覧）",
            "レバテック公表の年代別平均年収（2025年）",
            "経済産業省 IT人材需給に関する調査（2019年公表）",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：Svelteエンジニアの転職市場の攻め方</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>Svelteは「将来有望だが求人母数はまだ少ない新興スキル」です。</strong>Svelte単体で転職を狙うより、React/Vue/TypeScriptなどメインスキルを土台にし、Svelteを「新技術を素早く習得できる証明」として添えるのが現実的な戦い方です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・関連職種のフロントエンドエンジニア平均年収は<strong>約460万円</strong>（求人ボックス・2026年6月）。Svelte特化求人は少数</li>
              <li>・React/Vueの実務があれば、Svelteは学習材料として加点要素になりやすい</li>
              <li>・Svelteは<strong>パフォーマンス意識・技術選定力</strong>の文脈で語ると市場価値につながる</li>
            </ul>
          </div>
        </section>

        {/* 市場・年収データ */}
        <section id="market" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Svelteの市場・年収データ（出典付き）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Svelteは新興技術で求人母数が限られ、Svelte特化の公表平均年収は乏しいため、ここでは関連職種（フロントエンド職）の公表値で代替し、出典と時点を明示します。創作した数値は使用していません。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["フロントエンドエンジニアの平均年収（関連職種で代替）", "約460万円", "求人ボックス 給料ナビ（2026年6月閲覧）"],
                  ["Webエンジニアの平均年収（関連職種で代替）", "約462万円", "求人ボックス 給料ナビ（2026年6月閲覧）"],
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
            ※ Svelteは新興フレームワークで求人数が少なく、Svelte特化の公表平均年収は確認できないため、フロントエンド職の平均を代替指標として用いています。Svelteを扱う求人の年収は個別の幅が大きいため、最新の実勢はエージェントで保有求人を確認することをおすすめします。
          </p>
        </section>

        {/* 求められる経験レベル */}
        <section id="level" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベルと求人要件の傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Svelte求人は数が限られ、多くは「フロントエンド実務＋Svelteも歓迎」という形です。Svelte限定の即戦力要件は少なく、土台となるフロント全般の経験が問われます。求人票の傾向を整理すると次の通りです。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { tier: "入口（ポテンシャル）", req: "JavaScriptでのWeb開発1〜3年／HTML・CSS／Svelteは個人開発レベル", note: "フロント未経験可求人に付随することが多い" },
              { tier: "即戦力（ミドル）", req: "React/Vue等でのフロント開発実務／TypeScript／コンポーネント設計／Svelteは歓迎要件", note: "求人の中心ゾーン（Svelteは加点）" },
              { tier: "ハイクラス", req: "フロントの設計・テックリード／パフォーマンス最適化／技術選定（Svelte採用判断を含む）", note: "年収700万円以上が狙える層" },
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">Svelteエンジニアのキャリアパス</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Svelteは単独のキャリアというより、フロントエンド全般のキャリアの中で「引き出しの一つ」として活きる技術です。掛け合わせるスキルによって到達できるレンジが変わります。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "フロントエンドエンジニア", note: "React/Vueを主軸にSvelteも扱う。求人の最も多いゾーン" },
              { role: "フルスタックエンジニア", note: "SvelteKit＋バックエンドまで担当。スタートアップで需要" },
              { role: "テックリード／フロントアーキテクト", note: "フロントの設計＋技術選定（Svelte採用の是非を含む）" },
              { role: "フリーランス（フロント案件）", note: "モダンフロント案件全般。Svelteは差別化要素として活用" },
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
            Svelteは求人母数が少ないため、Svelte限定で探すより、フロントエンド全般で登録しSvelteを扱う企業を横断的に探すのが効率的です。タイプ別に向くサービスを整理します。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア（IT・Web特化）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT・Web特化で高年収求人の比率が高く、技術に踏み込んで話せるアドバイザーが在籍。新興技術を扱う企業の提案にも対応しやすいのが利点です。
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
                IT・Web・ゲーム業界専門で、提案スピードが強み。新技術に積極的なWeb系スタートアップの求人を探したい場合の選択肢になります。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験浅めからSvelteに参入するルート</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "React/Vueの実務経験を主軸にする", desc: "Svelte単体では求人が限られるため、まずReact/Vueなど主流フレームワークの実務を土台にします。フロントの基礎ができていれば、Svelteは学習コストが低く、追加スキルとして無理なく身につけられます。" },
              { num: "2", title: "GitHubにSvelte/SvelteKitアプリを公開する", desc: "SvelteKitでSSR/SSG構成のアプリを作って公開します。仮想DOMを使わないSvelteの設計思想を理解して実装した経験は、新技術へのキャッチアップ力の証明になり、面接で語れる材料になります。" },
              { num: "3", title: "技術選定に積極的な企業を狙う", desc: "Svelteを採用する企業は技術選定に前向きなことが多く、特定フレームワーク経験より『最適な技術を選び使える力』を評価する傾向があります。エージェントに志向を伝え、そうした企業を紹介してもらうのが近道です。" },
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
              <strong>新技術は「学び続ける姿勢」の証明になる。</strong>30代・40代で懸念されがちなのが技術の陳腐化です。Svelteのような新興技術を自ら学び個人開発で試している事実は、年齢を重ねても学習意欲が衰えていないことの具体的な証拠になります。
            </p>
            <p>
              <strong>軸はメインスキル、Svelteは加点。</strong>Svelte単体で年収を狙うのは現実的ではありません。React/Vue/TypeScriptなど実務の主軸を持ちつつ、Svelteを「技術トレンドを追える人材」の補強材料として位置づけると、ミドル層の強みになります。
            </p>
            <p>
              <strong>技術選定力を語れると強い。</strong>テックリードやアーキテクトの求人では、「なぜその技術を選ぶ／選ばないか」を判断できる力が評価されます。Svelteを含む複数フレームワークの長短を理解し選定理由を語れると、40代の設計・判断力の証明になります。
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
              <strong>① 公式チュートリアルで設計思想を理解する。</strong>Svelteは公式のインタラクティブチュートリアルが充実しています。仮想DOMを使わずコンパイルで最適化するという他フレームワークと異なる発想を理解すると、なぜSvelteがパフォーマンスやDXで評価されるかが腑に落ちます。
            </p>
            <p>
              <strong>② TypeScriptとSvelteKitを組み合わせる。</strong>実務水準を意識するなら、SvelteKitでSSR/SSG・ルーティングを扱い、TypeScriptで型安全に書く構成を経験しておきます。主流フレームワークと共通する設計知識が、そのままSvelteでも活きます。
            </p>
            <p>
              <strong>③ メインスキルの補強として位置づける。</strong>Svelteは「これ一本」で食べていく技術というより、フロント技術の引き出しを増やし、技術選定の視野を広げる学習として有効です。主軸のReact/Vue/TypeScriptを深めつつ、Svelteで比較の視点を持つのがミドル層に向いた使い方です。
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
          <h2 className="text-xl font-bold mb-3">フロントエンドのスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            Svelteは求人母数が少ないからこそ、フロント全般で複数のIT特化型エージェントに登録し、保有求人を横断比較するのが近道です。
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
              { name: "Reactエンジニアの転職ガイド", href: "/skill/react/" },
              { name: "Vueエンジニアの転職ガイド", href: "/skill/vue/" },
              { name: "TypeScriptエンジニアの転職ガイド", href: "/skill/typescript/" },
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
    </>
  );
}
