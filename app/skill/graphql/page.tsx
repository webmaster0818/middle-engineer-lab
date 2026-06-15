import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "GraphQLエンジニアの転職ガイド｜年収・求人・将来性【2026年】",
  description:
    "GraphQLエンジニアの転職市場を出典付きで解説。求人媒体・求人ボックスの公表値をもとに、API設計スキルとしてのGraphQLの市場価値、求人傾向、他技術からの参入ルート、30代・40代の戦い方をミドルエンジニア向けに整理します。",
};

const toc = [
  { id: "conclusion", label: "1. 結論：GraphQLエンジニアの転職市場の攻め方" },
  { id: "market", label: "2. GraphQLの市場・年収データ（出典付き）" },
  { id: "level", label: "3. 求められる経験レベルと求人要件の傾向" },
  { id: "career", label: "4. GraphQLエンジニアのキャリアパス" },
  { id: "find", label: "5. 求人の探し方・強いエージェント" },
  { id: "entry", label: "6. 経験浅めからGraphQLに参入するルート" },
  { id: "age", label: "7. 30代・40代エンジニアの視点" },
  { id: "learn", label: "8. スキルアップ・学習戦略" },
  { id: "faq", label: "9. よくある質問" },
];

const faqs = [
  {
    q: "GraphQLエンジニアの平均年収はどのくらいですか？",
    a: "GraphQLはAPI設計のための技術で、単体職種としての公表平均年収は乏しいため、関連職種・求人媒体のデータで代替します。求人ボックス給料ナビ（2026年6月時点）ではWebエンジニアの平均年収が約462万円、ソフトウェアエンジニアが約511万円です。求人媒体（Forkwell等）のGraphQL求人では上限年収2000万円・下限年収の最高値1000万円といった例も掲載されています。GraphQLはバックエンド・API設計の付加スキルとして評価され、扱える企業・人材が限られるため高めの求人に紐づく傾向があります。いずれも調査時点の公開値で、個人の年収を保証するものではありません。",
  },
  {
    q: "GraphQLはどんな技術ですか？",
    a: "GraphQLはAPIのためのクエリ言語およびランタイムで、クライアントが必要なデータだけを指定して取得できるのが特徴です。RESTのように複数のエンドポイントを叩く代わりに、単一のエンドポイントで柔軟にデータを取得・更新できます。フロントとバックの間のデータ取得を効率化するため、複雑なUIや複数クライアントを抱えるサービスで採用が広がっています。",
  },
  {
    q: "GraphQLの求人はどんな企業に多いですか？",
    a: "複数のクライアント（Web・モバイル）を持つWeb系・SaaS企業、マイクロサービス化を進める企業、複雑なデータ取得を効率化したいプロダクトに多く見られます。GraphQLは「GraphQLだけ」の求人より、フロントエンドやバックエンドの求人の中で必須・歓迎スキルとして登場することが多いのが実情です。具体的な社名や求人数は時期で変動するため、エージェントで最新の保有求人を確認してください。",
  },
  {
    q: "GraphQL未経験でも転職は可能ですか？",
    a: "フロントエンドまたはバックエンドのAPI開発の実務経験があれば、GraphQL未経験でもポテンシャル採用の対象になり得ます。GraphQLは既存のWeb開発スキルの延長で学べるため、REST APIの設計経験があると理解が進みます。GitHubにGraphQLのスキーマ設計・リゾルバ実装やクライアント側のクエリを含むアプリを公開しておくと、学習意欲と基礎力を示せます。",
  },
  {
    q: "GraphQLは単体スキルで転職できますか？",
    a: "GraphQLは単体で完結する職種というより、フロントエンドやバックエンドのスキルセットの一部として評価されるのが一般的です。「GraphQLが使える」だけでなく、API設計全体（REST含む）、スキーマ設計、パフォーマンス、認証・認可までを語れることが重要です。メインスキル（バックエンド言語やフロント技術）にGraphQLを掛け合わせることで、API設計に強い人材として差別化できます。",
  },
  {
    q: "フレームワーク・単体技術より何が評価されますか？",
    a: "実務では「GraphQLが書ける」こと自体より、API設計力、スキーマ設計、データ取得の効率化、パフォーマンスやセキュリティへの配慮といった総合的な設計力が評価されます。GraphQLは設計思想を理解して使うことが肝心で、面接ではどんなデータ課題をどう解決したかが軸になります。RESTとの使い分けを語れると、設計判断力の証明になります。",
  },
  {
    q: "GraphQLエンジニアにおすすめの転職エージェントは？",
    a: "IT・Web特化で高年収求人比率が高いレバテックキャリア、ハイクラス・スカウト型でアーキテクト級の求人に出会いやすいビズリーチ、Web系スタートアップの提案に強いGeeklyの併用が選択肢です。GraphQLは付加スキルとして扱われることが多いため、フロント／バックの軸を明確にしたうえで複数登録し、保有求人を横断的に比較するのが現実的です。",
  },
  {
    q: "GraphQLエンジニアはしつこく営業されたり断られたりしますか？",
    a: "エージェントの連絡頻度は担当者により差があり、希望すればメール中心・LINE中心など連絡手段を調整できます。GraphQL単体では紹介求人が絞られることもありますが、これは「断られた」のではなく、GraphQLが付加スキルとして扱われやすいという市場の特性によるものです。フロント／バックの実務やGraphQLの個人開発を材料に、軸を明確にして再相談する余地があります。",
  },
];

export default function GraphqlSkillPage() {
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
        title="GraphQLエンジニアの転職ガイド｜年収・求人・将来性【2026年】"
        description="GraphQLエンジニアの転職市場を出典付きで解説。API設計スキルとしてのGraphQLの市場価値、求人傾向、他技術からの参入ルート、30代・40代の戦い方をミドルエンジニア向けに整理します。"
        url="/skill/graphql/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "GraphQLエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          GraphQLエンジニアの転職ガイド｜年収・求人・将来性【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | GraphQLエンジニアの転職市場をミドル層向けに分析
        </p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            GraphQLはAPIのためのクエリ言語およびランタイムで、クライアントが必要なデータだけを単一エンドポイントから柔軟に取得できるのが特徴です。RESTの課題を補う選択肢として、複数クライアントを持つWeb系・SaaS、マイクロサービス化を進める企業で採用が広がっています。API設計の付加スキルとして評価され、扱える人材が限られるぶん市場価値につながりやすい技術です。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、GraphQLエンジニア転職の現実的な「攻め方」を、<strong>公表年収データ・求められる経験レベル・求人の探し方・経験浅めからの参入ルート</strong>に分けて、30代・40代の視点を交えて整理します。GraphQLは単体技術ゆえ、フロント／バックの軸＋API設計の実務で評価される点を誠実にお伝えします。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "求人ボックス 給料ナビ（Web／ソフトウェアエンジニア・2026年6月閲覧）",
            "Forkwell Jobs等の求人媒体（GraphQL求人の提示年収・2026年6月閲覧）",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：GraphQLエンジニアの転職市場の攻め方</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>GraphQLは「API設計に強いことを示す付加スキル」です。</strong>GraphQL単体で転職を狙うより、フロント／バックのメインスキルを土台に、GraphQLを「API設計力の証明」として掛け合わせるのが現実的な戦い方です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・関連職種のWebエンジニア平均年収は<strong>約462万円</strong>・ソフトウェアエンジニア約511万円（求人ボックス・2026年6月）</li>
              <li>・求人媒体のGraphQL求人では上限年収2000万円の例も。設計力の高い人材ほど高額求人に紐づく</li>
              <li>・GraphQLは<strong>API設計・スキーマ設計・マイクロサービス</strong>の文脈で語ると市場価値が上がる</li>
            </ul>
          </div>
        </section>

        {/* 市場・年収データ */}
        <section id="market" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">GraphQLの市場・年収データ（出典付き）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            GraphQLはAPI設計の技術で、単体職種としての公表平均年収は乏しいため、ここでは関連職種（Web／ソフトウェアエンジニア）の公表値と求人媒体の提示年収で代替し、出典と時点を明示します。創作した数値は使用していません。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Webエンジニアの平均年収（関連職種で代替）", "約462万円", "求人ボックス 給料ナビ（2026年6月閲覧）"],
                  ["ソフトウェアエンジニアの平均年収（関連職種で代替）", "約511万円", "求人ボックス 給料ナビ（2026年6月閲覧）"],
                  ["GraphQL求人の提示年収（上限の最高値）", "上限2000万円・下限の最高値1000万円", "Forkwell Jobs等の求人媒体（2026年6月閲覧）"],
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
            ※ GraphQL特化の公表平均年収は乏しいため、Web／ソフトウェアエンジニア職の平均と求人媒体の提示年収を代替指標として用いています。求人媒体の上限年収は一部の高額求人の値で平均ではありません。GraphQLは付加スキルとして扱われることが多く、年収は本人のメインスキル次第で幅が大きいため、最新の実勢はエージェントで保有求人を確認することをおすすめします。
          </p>
        </section>

        {/* 求められる経験レベル */}
        <section id="level" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベルと求人要件の傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            GraphQL求人の多くは「フロント／バック実務＋GraphQLの設計・実装経験」を要件にします。GraphQL単体の即戦力要件は少なく、API設計全体の中でGraphQLを扱える力が問われます。求人票の傾向を整理すると次の通りです。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { tier: "入口（ポテンシャル）", req: "フロント／バックでのWeb開発1〜3年／REST API・HTTPの基礎／GraphQLは個人開発レベル", note: "GraphQL歓迎要件の求人に付随" },
              { tier: "即戦力（ミドル）", req: "GraphQLでのスキーマ設計・リゾルバ実装またはクライアント実装／API設計／認証・認可／パフォーマンス配慮", note: "求人の中心ゾーン" },
              { tier: "ハイクラス", req: "GraphQLを含むAPIアーキテクチャ設計・テックリード／マイクロサービス統合／技術選定", note: "年収800万円以上が狙える層" },
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">GraphQLエンジニアのキャリアパス</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            GraphQLは単独のキャリアというより、フロント／バックのキャリアの中で「API設計の強み」として活きる技術です。掛け合わせるスキルによって到達できるレンジが変わります。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "バックエンドエンジニア", note: "GraphQLサーバー・スキーマ設計・リゾルバ実装が中心。API設計に強み" },
              { role: "フロントエンドエンジニア", note: "GraphQLクライアント（Apollo等）でのデータ取得設計。複雑なUIで需要" },
              { role: "APIアーキテクト／テックリード", note: "GraphQLを含むAPI全体の設計＋技術選定＋チームリード" },
              { role: "フリーランス（API設計案件）", note: "GraphQL/REST設計を含む案件。設計力の高さで単価が上がりやすい" },
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
            GraphQLは付加スキルとして扱われることが多いため、GraphQL限定で探すより、フロント／バックの軸を明確にしたうえで複数のチャネルを横断するのが効率的です。タイプ別に向くサービスを整理します。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア（IT・Web特化）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT・Web特化で高年収求人の比率が高く、技術に踏み込んで話せるアドバイザーが在籍。GraphQLを含むAPI設計求人の提案に向きます。
              </p>
              <Link href="/review/levtech/" className="text-sm text-blue-600 hover:underline">レバテックキャリアの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ（ハイクラス・スカウト型）</h3>
              <p className="text-sm text-slate-600 mb-2">
                年収750万円以上を中心としたハイクラス・スカウト型。APIアーキテクトやテックリード級の求人・スカウトに出会いやすいのが特徴です。
              </p>
              <Link href="/review/bizreach-it/" className="text-sm text-blue-600 hover:underline">ビズリーチの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Geekly（Web系・スタートアップに強い）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT・Web・ゲーム業界専門で、提案スピードが強み。GraphQLを採用するWeb系・SaaS企業の求人を探したい場合の選択肢になります。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験浅めからGraphQLに参入するルート</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "フロント／バックのAPI開発経験を主軸にする", desc: "GraphQLは単体では求人が限られるため、まずフロントまたはバックのWeb/API開発の実務を土台にします。REST APIの設計経験があれば、GraphQLはその延長で理解でき、追加スキルとして無理なく身につけられます。" },
              { num: "2", title: "GitHubにGraphQLを使ったアプリを公開する", desc: "スキーマ設計・リゾルバ実装（サーバー側）や、Apollo等を使ったクライアント側のクエリを含むアプリを作って公開します。RESTとの使い分けや、N+1問題への対処まで示せると、API設計力の証明になり面接で語れる材料になります。" },
              { num: "3", title: "GraphQLを採用する企業のスキルセット要件に合わせる", desc: "GraphQL求人は「フロント／バック＋GraphQL歓迎」という形が多いため、自分のメインスキルとGraphQLをセットでアピールします。エージェントに軸とGraphQLの学習状況を伝え、マッチする求人を紹介してもらうのが近道です。" },
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
              <strong>設計力は年齢の不利を相殺しやすい。</strong>GraphQLが評価されるのは、実装の速さより「データ取得をどう設計するか」という設計判断です。30代・40代で複数のシステムのAPI設計を経験しているなら、その設計力こそがGraphQL人材としての武器になります。
            </p>
            <p>
              <strong>軸はメインスキル、GraphQLは掛け算。</strong>GraphQL単体で年収を狙うのは現実的ではありません。バックエンド言語やフロント技術といった実務の主軸を持ちつつ、GraphQLを「API設計に強い人材」の証明として掛け合わせると、ミドル層の強みになります。
            </p>
            <p>
              <strong>RESTとの使い分けを語れると強い。</strong>テックリードやアーキテクトの求人では、「なぜGraphQLを選ぶ／選ばないか」を判断できる力が評価されます。RESTとGraphQLの長短を理解し選定理由を語れると、40代の設計・判断力の証明になります。
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
              <strong>① 公式ドキュメントで設計思想を理解する。</strong>GraphQLは公式ドキュメントが充実しています。クエリ・ミューテーション・サブスクリプション、スキーマ設計の考え方を押さえると、RESTとの違いとGraphQLが解決する課題が明確になります。
            </p>
            <p>
              <strong>② サーバー・クライアント両面を実装する。</strong>スキーマ設計とリゾルバ実装（サーバー側）に加え、Apollo等でのクライアント実装まで経験すると、データ取得の全体像を語れます。N+1問題やキャッシュ、認証・認可といった実務上の課題への対処は、面接で差がつくポイントです。
            </p>
            <p>
              <strong>③ メインスキルにAPI設計力として上乗せする。</strong>GraphQLは「これ一本」の技術ではなく、バックエンド／フロントの実務にAPI設計の強みを加えるものとして位置づけるのが有効です。RESTとの使い分けまで理解すると、設計判断のできる人材として市場価値が上がります。
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
          <h2 className="text-xl font-bold mb-3">GraphQLのスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            GraphQLは付加スキルだからこそ、メインの軸を明確にして複数のIT特化型エージェントで保有求人を横断比較するのが近道です。
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
              { name: "Node.jsエンジニアの転職ガイド", href: "/skill/nodejs/" },
              { name: "TypeScriptエンジニアの転職ガイド", href: "/skill/typescript/" },
              { name: "Reactエンジニアの転職ガイド", href: "/skill/react/" },
              { name: "Goエンジニアの転職ガイド", href: "/skill/go/" },
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
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-sm"><li><a href="/company/meta/" className="text-blue-700 hover:underline">Meta Japan</a></li></ul>
          <p className="mt-3 text-sm"><a href="/skill/" className="text-blue-700 hover:underline">スキル別ガイド一覧</a> ／ <a href="/salary/company-ranking/" className="text-blue-700 hover:underline">企業年収ランキング</a></p>
        </div>
      </section>
      </>
  );
}
