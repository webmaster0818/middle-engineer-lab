import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "Figmaスキルの転職ガイド｜年収・求人・将来性【2026年】",
  description:
    "Figmaスキルを軸にした転職市場を出典付きで解説。UIデザイン・フロントエンド連携での用途、UIデザイナー職種としての年収相場、エンジニアより設計寄りである点も正直に整理。求人の探し方と30代・40代の戦い方をミドル向けにまとめます。",
};

const toc = [
  { id: "conclusion", label: "1. 結論：Figmaスキルの転職市場の攻め方" },
  { id: "market", label: "2. 年収・市場データ（出典付き）" },
  { id: "use", label: "3. Figmaの用途と求人傾向" },
  { id: "level", label: "4. 求められる経験レベルと求人要件" },
  { id: "career", label: "5. キャリアパスと関連技術" },
  { id: "find", label: "6. 求人の探し方・強いエージェント" },
  { id: "entry", label: "7. 経験浅めから参入するルート" },
  { id: "age", label: "8. 30代・40代の視点" },
  { id: "learn", label: "9. スキルアップ・学習戦略" },
  { id: "faq", label: "10. よくある質問" },
];

const faqs = [
  {
    q: "Figmaを扱う人の年収相場はどのくらいですか？",
    a: "Figma単体での平均年収を集計した公的な公表値は乏しいため、本記事では職種年収で代替します。求人ボックス「給料ナビ」（2026年6月時点）では、UIデザイナーの平均年収は約648万円（給与幅350〜1,057万円）です。FigmaはUIデザインのツールであるため、UIデザイナー／UI・UXデザイナーの年収レンジで評価されるのが実態です。エンジニア職としての年収とは前提が異なる点に注意してください。",
  },
  {
    q: "Figmaはエンジニアのスキルですか、デザイナーのスキルですか？",
    a: "Figmaは主にUIデザイナー・UI/UXデザイナーが使うデザインツールで、職種としてはエンジニアよりデザイナー寄りです。エンジニアにとっては「デザインを実装する際にデザインデータを読み取り、開発モードで仕様を確認する」という連携の文脈で使うのが一般的です。フロントエンドエンジニアがデザインの基礎としてFigmaを扱えると価値が上がりますが、Figmaを主軸にするキャリアはデザイナー職になる点を正直に押さえておくことが重要です。",
  },
  {
    q: "Figmaはどんな場面で使われていますか？",
    a: "WebサイトやアプリのUIデザイン、ワイヤーフレーム、プロトタイプ作成、デザインシステムの構築に使われます。複数人が同時編集できるクラウドベースのツールで、デザイナーとエンジニアの協業（ハンドオフ）の標準になっています。エンジニア側はFigmaの開発者向けモード（旧称インスペクト）で余白・色・コンポーネント仕様を確認しながら実装します。",
  },
  {
    q: "エンジニアがFigmaを学ぶ意味はありますか？",
    a: "あります。特にフロントエンドエンジニアにとっては、デザインの意図を正確に読み取り、デザイナーと共通言語で会話できることが実装品質とスピードに直結します。デザインシステムやコンポーネント設計の考え方はフロントエンド開発とも親和性が高く、UI実装の文脈で評価されます。ただし、Figmaそのものを主軸の専門スキルとして転職するならデザイナー職に寄る点は理解しておきましょう。",
  },
  {
    q: "Figmaと一緒に求められるスキルは何ですか？",
    a: "デザイナー職ではUI/UX設計、デザインシステム、プロトタイピング、ユーザビリティの知識が中心です。エンジニア側でFigma連携を強みにするなら、HTML/CSS、React・Vueなどのフロントエンド技術、コンポーネント設計、レスポンシブ実装が掛け合わせになります。デザインとフロントの両方を理解する人材は、両職種の橋渡し役として重宝されます。",
  },
  {
    q: "Figmaスキルの将来性はどうですか？",
    a: "Figmaはデザインツールのデファクトスタンダードとなっており、UIデザイン・プロトタイピングの需要は底堅いと考えられます。一方で生成AIによるUI生成やデザインの自動化が進んでおり、ツール操作そのものより「ユーザー体験を設計する力」「デザインとエンジニアリングをつなぐ力」が問われる方向に進んでいます。エンジニアにとっては、Figmaを軸にするより、フロントエンド実装力にデザイン理解を掛け合わせる立ち位置が現実的です。",
  },
  {
    q: "Figmaを活かした転職におすすめのエージェントは？",
    a: "デザイナー職を目指すなら、IT・Web・クリエイティブ職に強いエージェントが選択肢です。フロントエンドエンジニアとしてデザイン理解を強みにするなら、IT・Web特化で高年収求人比率が高いレバテックキャリア、ハイクラス・スカウト型のビズリーチ、Web系に強いGeeklyの併用が現実的です。複数登録して、デザイナー職とエンジニア職のどちらの軸で進めるかを相談しながら保有求人を比較するのがおすすめです。",
  },
];

export default function FigmaSkillPage() {
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
        title="Figmaスキルの転職ガイド｜年収・求人・将来性【2026年】"
        description="Figmaスキルを軸にした転職市場を出典付きで解説。UIデザイン・フロントエンド連携での用途、UIデザイナー職種としての年収相場、エンジニアより設計寄りである点も正直に整理。求人の探し方と30代・40代の戦い方をミドル向けにまとめます。"
        url="/skill/figma/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Figmaスキル" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Figmaスキルの転職ガイド｜年収・求人・将来性【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | Figmaスキルの転職市場をミドル層向けに分析
        </p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            Figmaは、Web・アプリのUIデザインやプロトタイプを作成するクラウドベースのデザインツールです。複数人が同時編集でき、デザイナーとエンジニアの協業の標準になっています。重要なのは、<strong>Figmaは職種としてはエンジニアよりデザイナー寄りのスキル</strong>だという点です。エンジニアにとっては「デザインを実装する際の連携ツール」として位置づくのが一般的です。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、Figmaスキルを軸にした転職の「攻め方」を、<strong>公表年収データ・用途と求人傾向・エンジニアとデザイナーの境界・関連技術・経験浅めからの参入ルート</strong>に分けて、30代・40代の視点を交えて正直に整理します。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "求人ボックス「給料ナビ」（UIデザイナー）",
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
                <a href={`#${t.id}`} className="text-sm text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：Figmaスキルの転職市場の攻め方</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>Figmaは「デザイナー職の主軸スキル」であり、エンジニアにとっては「フロントエンドに掛け合わせる強み」です。</strong>どちらの軸でキャリアを描くかを最初に決めるのが攻め方の起点になります。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・Figma単体の公表年収は乏しいため、<strong>UIデザイナー等の職種年収で代替</strong>して捉えるのが実態（UIデザイナー平均約648万円）</li>
              <li>・職種としては<strong>エンジニアよりデザイナー寄り</strong>。Figmaを主軸にするならデザイナー職になる点を正直に押さえる</li>
              <li>・エンジニアは<strong>フロントエンド実装＋デザイン理解</strong>の掛け合わせで、両職種の橋渡し役として価値が上がる</li>
            </ul>
          </div>
        </section>

        {/* 市場・年収データ */}
        <section id="market" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収・市場データ（出典付き）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Figma単体の平均年収を集計した公表値は乏しいため、ここではUIデザイナーなど関連職種の公表年収で代替します。いずれも出典と時点を明示できる公開データのみを使用します。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["UIデザイナーの平均年収", "約648万円（給与幅350〜1,057万円）", "求人ボックス 給料ナビ（2026年6月時点）"],
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
            ※ 上記はFigma特化の数値ではなく、関連する職種（主にUIデザイナー）の代替値です。求人ボックスの値は求人票の記載額を集計したもので、実際の支給額や個人の年収とは異なります。レバテックの年代別平均はSE全般の値で、デザイナー職とは前提が異なります。Figmaを活かす求人はデザイナー職かエンジニア職かで年収の前提が変わるため、エージェントで最新の保有求人を確認することをおすすめします。
          </p>
        </section>

        {/* 用途と求人傾向 */}
        <section id="use" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Figmaの用途と求人傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Figmaは「UIデザイン」を軸に複数の用途を持ち、求人は主にデザイナー職、一部はフロントエンドとの連携文脈で出ます。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { use: "UIデザイン・ワイヤーフレーム", note: "Web・アプリの画面設計。デザイナー職の中核業務" },
              { use: "プロトタイピング", note: "画面遷移やインタラクションの試作。ユーザビリティ検証" },
              { use: "デザインシステム構築", note: "コンポーネント・トークンの体系化。フロントと親和性が高い" },
              { use: "デザインハンドオフ（開発連携）", note: "開発者向けモードで仕様確認。エンジニアが使う主な場面" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{item.use}</h3>
                <p className="text-xs text-slate-500">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 求められる経験レベル */}
        <section id="level" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベルと求人要件</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Figmaを活かす求人は「デザイナー職」と「フロントエンドエンジニア（デザイン理解あり）」に大別され、求める要件が異なります。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { tier: "入口（デザイン未経験のエンジニア）", req: "フロントエンド実務／Figmaの開発者向けモードでデザインを読み取り実装できる／UIの基礎理解", note: "エンジニア側でFigma連携を強みにする層" },
              { tier: "即戦力（UIデザイナー）", req: "FigmaでのUIデザイン・プロトタイピング実務／デザインシステムの理解／ユーザビリティの基礎", note: "デザイナー職の中心ゾーン" },
              { tier: "ハイクラス（デザインエンジニア等）", req: "UI/UX設計＋フロントエンド実装の両立／デザインシステムの設計・運用／チームの橋渡し", note: "デザインとエンジニアを横断する希少層" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2 text-sm">{item.tier}</h3>
                <p className="text-xs text-slate-600 mb-2 leading-relaxed">{item.req}</p>
                <p className="text-xs text-petrol">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* キャリアパスと関連技術 */}
        <section id="career" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キャリアパスと関連技術</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Figmaを軸にする場合はデザイナー職、フロントエンドに掛け合わせる場合はデザインエンジニア的な立ち位置になります。どちらを選ぶかでキャリアの方向が分かれます。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "UIデザイナー／UI・UXデザイナー", note: "Figmaを主軸にした画面設計・体験設計。デザイナー職の王道" },
              { role: "デザインエンジニア", note: "UI/UX設計＋フロントエンド実装。デザインとコードを横断する希少職" },
              { role: "フロントエンドエンジニア（デザイン理解あり）", note: "Figmaを読み取り高品質に実装。デザイナーとの協業が円滑" },
              { role: "デザインシステムエンジニア", note: "Figmaのコンポーネントとコードのデザインシステムを整備・運用" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 mb-1">{item.role}</h3>
                <p className="text-xs text-slate-500">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">
            関連スキルは<Link href="/skill/frontend/" className="text-petrol hover:underline">フロントエンド</Link>のガイドや、UI/UXのキャリアを扱う<Link href="/knowledge/uiux/" className="text-petrol hover:underline">UI/UXデザイナーへのキャリア</Link>もあわせてご覧ください。
          </p>
        </section>

        {/* 求人の探し方 */}
        <section id="find" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の探し方・強いエージェント</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            デザイナー職とエンジニア職のどちらの軸で進めるかによって向くサービスが変わります。両にらみで複数チャネルを横断するのが効率的です。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア（IT・Web特化）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT・Web特化で高年収求人の比率が高く、フロントエンドやデザイン領域に踏み込んで話せるアドバイザーが在籍。エンジニア×デザインの求人の提案に向きます。
              </p>
              <Link href="/review/levtech/" className="text-sm text-petrol hover:underline">レバテックキャリアの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ（ハイクラス・スカウト型）</h3>
              <p className="text-sm text-slate-600 mb-2">
                年収750万円以上を中心としたハイクラス・スカウト型。デザインエンジニアやリードデザイナー級の求人・スカウトに出会いやすいのが特徴です。
              </p>
              <Link href="/review/bizreach-it/" className="text-sm text-petrol hover:underline">ビズリーチの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Geekly（Web系・スタートアップに強い）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT・Web・ゲーム業界専門で、提案スピードが強み。FigmaやデザインシステムにこだわるWeb系・スタートアップの求人を探したい場合の選択肢になります。
              </p>
              <Link href="/review/geekly/" className="text-sm text-petrol hover:underline">Geeklyの詳細レビュー →</Link>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            エージェント各社の比較は<Link href="/compare/agents/" className="text-petrol hover:underline">転職エージェント比較</Link>も参照してください。
          </p>
        </section>

        {/* 経験浅めからの参入ルート */}
        <section id="entry" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験浅めからFigmaを活かすルート</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "まずエンジニア軸かデザイナー軸かを決める", desc: "Figmaは職種としてデザイナー寄りのため、最初に『フロントエンドエンジニアとしてデザイン理解を強みにする』のか『UIデザイナーに転身する』のかを決めます。年収の前提や求める経験が変わるため、ここを曖昧にしないことが大切です。" },
              { num: "2", title: "フロントエンド経験を土台にデザイン理解を足す", desc: "エンジニア軸なら、フロントエンドの実務を土台に、Figmaの開発者向けモードでのデザイン読み取り、デザインシステムの考え方を身につけます。デザインとコードの両方を語れると、協業がスムーズな人材として評価されます。" },
              { num: "3", title: "Figmaで作品・デザインシステムを公開する", desc: "デザイナー軸を目指すなら、FigmaでUIデザインやプロトタイプ、小さなデザインシステムを作って公開します。なぜその設計にしたかという意図を言語化すると、ツール操作以上の力を提示できます。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>
              <strong>「橋渡し役」は年齢の不利を相殺しやすい。</strong>デザインとエンジニアリングの両方を理解し、チームの協業を円滑にできる人材は希少です。30代・40代でフロントエンド実装とデザイン理解の両方を積んでいるなら、それが強い差別化になります。
            </p>
            <p>
              <strong>軸の選択は正直に。</strong>Figmaを主軸に未経験からUIデザイナーへ転身する場合、デザインの実績やポートフォリオが必須で、年齢に対して相応の完成度が求められます。一方、フロントエンドエンジニアとしてデザイン理解を加える道なら、これまでの実務を活かしやすく現実的です。
            </p>
            <p>
              <strong>体験設計の視点は資産になる。</strong>ユーザー体験や事業課題を理解したうえでUIを設計・実装できる視点は、年齢を重ねたミドル層の強みになります。デザインの良し悪しを事業価値と結びつけて語れると説得力が増します。
            </p>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            年代別の戦略は<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>・<Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職</Link>も参考にしてください。
          </p>
        </section>

        {/* 学習戦略 */}
        <section id="learn" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルアップ・学習戦略</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>
              <strong>① Figmaの基本操作と開発者向けモードを学ぶ。</strong>エンジニアならまず、デザインを正確に読み取れる開発者向けモードの使い方、コンポーネント・オートレイアウト・バリアントといった基礎を押さえるのが近道です。
            </p>
            <p>
              <strong>② デザインシステムの考え方を学ぶ。</strong>Figmaのコンポーネントとコード（React・Vue）のコンポーネントは設計思想が近いため、デザインシステムを学ぶとデザインとフロントの両方に効きます。フロントエンド実装と結びつけると強みになります。
            </p>
            <p>
              <strong>③ UI/UXとユーザー体験を理解する。</strong>ツール操作よりも、なぜそのUIにするのかという体験設計の視点が長期的に通用します。生成AIによるUI生成が進むほど、設計判断ができる人材の価値が高まります。
            </p>
            <p>
              学習と転職活動の進め方は<Link href="/knowledge/continuous-learning/" className="text-petrol hover:underline">継続的な学習の習慣化</Link>・<Link href="/knowledge/portfolio/" className="text-petrol hover:underline">ポートフォリオの作り方</Link>もあわせてご覧ください。
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
          <h2 className="text-xl font-bold mb-3">Figmaを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            デザイナー軸かエンジニア軸かで進め方が変わるからこそ、複数のIT・Web特化型エージェントで保有求人を横断比較するのが近道です。
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
              { name: "フロントエンドエンジニアの転職ガイド", href: "/skill/frontend/" },
              { name: "Reactエンジニアの転職ガイド", href: "/skill/react/" },
              { name: "Vueエンジニアの転職ガイド", href: "/skill/vue/" },
              { name: "UI/UXデザイナーへのキャリア", href: "/knowledge/uiux/" },
              { name: "スキル別転職ガイド一覧", href: "/skill/" },
              { name: "ミドルエンジニア転職ラボTOP", href: "/" },
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
