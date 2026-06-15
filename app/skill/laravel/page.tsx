import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "Laravelエンジニアの転職ガイド｜年収・求人・将来性【2026年】",
  description:
    "Laravel（PHP）エンジニアの転職市場を出典付きで解説。レバテック・求人ボックスの公表値をもとに、PHP Web開発フレームワークの市場価値、求人傾向、未経験からの参入ルート、30代・40代の戦い方をミドルエンジニア向けに整理します。",
};

const toc = [
  { id: "conclusion", label: "1. 結論：Laravelエンジニアの転職市場の攻め方" },
  { id: "market", label: "2. Laravelの市場・年収データ（出典付き）" },
  { id: "level", label: "3. 求められる経験レベルと求人要件の傾向" },
  { id: "career", label: "4. Laravelエンジニアのキャリアパス" },
  { id: "find", label: "5. 求人の探し方・強いエージェント" },
  { id: "entry", label: "6. 経験浅めからLaravelに参入するルート" },
  { id: "age", label: "7. 30代・40代エンジニアの視点" },
  { id: "learn", label: "8. スキルアップ・学習戦略" },
  { id: "faq", label: "9. よくある質問" },
];

const faqs = [
  {
    q: "Laravelエンジニアの平均年収はどのくらいですか？",
    a: "レバテック公表のフレームワーク別統計（2025年）では、Laravelに関わるエンジニアの平均年収は500万円、中央値550万円、月収換算で約31万円とされています。求人ボックス給料ナビ（2026年6月時点）ではWebエンジニアの平均年収が約462万円です。Laravelはこれら関連データから見ても市場平均より高めの水準にあります。経験年数による幅は大きく、未経験〜1年では350万円程度、5年以上のシニアでは800万円超の例もあります。いずれも調査時点の公開値で、個人の年収を保証するものではありません。",
  },
  {
    q: "LaravelはPHPが使えれば転職できますか？",
    a: "LaravelはPHPのフレームワークなので、PHPの実務経験がそのまま土台になります。ただし求人で評価されるのは「Laravel単体」ではなく、PHPの言語力に加え、Eloquent ORM、MVC設計、認証、テスト、DB設計、API開発までを含む実務力です。PHPでのWeb開発経験があれば、Laravel特有の作法をキャッチアップする形で十分参入できます。",
  },
  {
    q: "Laravelの求人はどんな企業に多いですか？",
    a: "自社サービスを持つWeb系企業、SaaS、ECサイト、受託開発・制作会社などに広く見られます。PHPは国内のWeb開発で長年使われてきた実績があり、その中でLaravelは現在の主流フレームワークとして求人数が多いのが特徴です。スタートアップから中小・中堅企業まで採用層が広く、求人の母数が確保しやすい言語です。具体的な社名や求人数は時期で変動するため、エージェントで最新の保有求人を確認してください。",
  },
  {
    q: "Laravel未経験でも転職は可能ですか？",
    a: "PHPでのWeb開発経験があれば、Laravel未経験でもポテンシャル採用の対象になりやすいです。他言語のWebフレームワーク（Ruby on Rails、Django等）の経験も、MVCやORMの考え方が共通するため土台になります。GitHubにLaravelで作ったWebアプリやAPIを公開し、設計・テスト・DB周りまで示せると基礎力が伝わります。求人母数が多いぶん、未経験可・ポテンシャル枠も比較的見つけやすい言語です。",
  },
  {
    q: "Laravelの将来性はどうですか？",
    a: "PHPは「オワコン」と言われることもありますが、実際にはWebの広範なシステムで使われ続けており、Laravelはそのモダンな開発を支える主流フレームワークです。求人数の多さと案件の安定性は大きな強みで、当面は需要が急減する見込みは小さいといえます。一方で年収を伸ばすには、Laravel単体に留まらずフロント・インフラ・設計など領域を広げることが重要です。",
  },
  {
    q: "フレームワーク単体より何が評価されますか？",
    a: "実務では「Laravelが書ける」こと自体より、PHPの言語力、DB設計、テスト、API設計、パフォーマンスやセキュリティへの配慮といった総合力が評価されます。フレームワークは実装手段であり、面接ではどんなWebサービスの課題をどう設計・実装したかが軸になります。Laravelはその文脈を示しやすい題材として活用するのが効果的です。",
  },
  {
    q: "Laravelエンジニアにおすすめの転職エージェントは？",
    a: "IT・Web特化で高年収求人比率が高いレバテックキャリア、ハイクラス・スカウト型のビズリーチ、Web系の提案に強いGeeklyの併用が選択肢です。Laravelは求人母数が多いため、複数登録して条件のよい求人を横断的に比較すると、年収やマッチ度の高い案件に出会いやすくなります。",
  },
  {
    q: "Laravelエンジニアはしつこく営業されたり断られたりしますか？",
    a: "エージェントの連絡頻度は担当者により差があり、希望すればメール中心・LINE中心など連絡手段を調整できます。Laravelは求人母数が多いため、紹介が途切れにくい一方、希望条件が高いと提案が絞られることもあります。これは「断られた」のではなく条件とのマッチングの問題で、実績や希望条件を調整して再相談する余地があります。",
  },
];

export default function LaravelSkillPage() {
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
        title="Laravelエンジニアの転職ガイド｜年収・求人・将来性【2026年】"
        description="Laravel（PHP）エンジニアの転職市場を出典付きで解説。PHP Web開発フレームワークの市場価値、求人傾向、未経験からの参入ルート、30代・40代の戦い方をミドルエンジニア向けに整理します。"
        url="/skill/laravel/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Laravelエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Laravelエンジニアの転職ガイド｜年収・求人・将来性【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | Laravelエンジニアの転職市場をミドル層向けに分析
        </p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            LaravelはPHPの主流Webアプリケーションフレームワークで、MVC設計・Eloquent ORM・認証・ルーティングなどを標準で備え、Webサービスやシステムを効率的に開発できます。PHPは国内のWeb開発で長年使われてきた実績があり、Laravelは現在のPHP開発の中心的な選択肢です。求人母数が多く、スタートアップから中小・中堅企業まで採用層が広いのが特徴です。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、Laravelエンジニア転職の「攻め方」を、<strong>公表年収データ・求められる経験レベル・求人の探し方・経験浅めからの参入ルート</strong>に分けて、30代・40代の視点を交えて整理します。フレームワーク単体ではなく「PHPの言語力＋Web開発の実務」で評価される点も誠実にお伝えします。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表のフレームワーク別年収統計（Laravel・2025年）",
            "求人ボックス 給料ナビ（Webエンジニア・2026年6月閲覧）",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：Laravelエンジニアの転職市場の攻め方</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>Laravelは「求人母数が多く、案件が安定している実用スキル」です。</strong>希少性より安定性が強みなので、母数の多さを活かして条件のよい求人を比較しつつ、PHPの言語力と設計力で年収を伸ばすのが転職成功の軸になります。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・Laravelエンジニアの平均年収は<strong>500万円・中央値550万円</strong>（レバテック公表・2025年）。Webエンジニア平均（約462万円）より高め</li>
              <li>・PHPや他のWebフレームワークの経験があれば、Laravel未経験でもポテンシャル採用に乗りやすい</li>
              <li>・Laravelは<strong>フロント・インフラ・設計</strong>との掛け合わせで年収レンジが上がる</li>
            </ul>
          </div>
        </section>

        {/* 市場・年収データ */}
        <section id="market" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Laravelの市場・年収データ（出典付き）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            言語・フレームワーク別の年収は媒体によって定義が異なります。ここでは出典と時点を明示できる公表データのみを使用します。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Laravelエンジニアの平均年収", "平均500万円・中央値550万円", "レバテック公表のフレームワーク別統計（2025年）"],
                  ["Webエンジニアの平均年収", "約462万円", "求人ボックス 給料ナビ（2026年6月閲覧）"],
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
            ※ レバテックのLaravel平均年収はフレームワーク別の集計値で、個人の年収を保証するものではありません。経験年数による幅が大きく、未経験〜1年では350万円程度、5年以上のシニアでは800万円超の求人例もあります。最新の実勢はエージェントで保有求人を確認することをおすすめします。
          </p>
        </section>

        {/* 求められる経験レベル */}
        <section id="level" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベルと求人要件の傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Laravel求人は「Laravel実務そのもの」を必須にするものと、「PHP/Web開発実務＋Laravelは入社後キャッチアップ可」とするものに分かれます。求人票によく登場する要件を傾向としてまとめると次の通りです。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { tier: "入口（ポテンシャル）", req: "PHPまたは他言語でのWeb開発1〜2年／HTML・CSS・SQL基礎／LaravelはGitHub等での自習レベル", note: "Laravel未経験OK求人がここに該当" },
              { tier: "即戦力（ミドル）", req: "LaravelでのWebアプリ・API開発実務／Eloquent・MVC・認証／DB設計／テスト実装", note: "求人の中心ゾーン" },
              { tier: "ハイクラス", req: "Laravel基盤の設計・テックリード／パフォーマンス・セキュリティ／インフラ／技術選定", note: "年収700万円以上が狙える層" },
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">Laravelエンジニアのキャリアパス</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            LaravelはWebバックエンドからフルスタック・アーキテクト領域へ広げやすい技術です。掛け合わせるスキルによって到達できるレンジが変わります。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "Webバックエンドエンジニア", note: "LaravelでのWebアプリ・API開発が中心。求人の最も多いゾーン" },
              { role: "フルスタックエンジニア", note: "Laravel＋フロント（React/Vue）まで担当。スタートアップで需要" },
              { role: "テックリード／アーキテクト", note: "Laravel基盤のシステム設計＋技術選定＋チームリード" },
              { role: "フリーランス（Laravel案件）", note: "Webサービス・受託開発案件。求人母数が多く案件が見つかりやすい" },
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
            Laravelは求人母数が多いため、複数のチャネルを横断して条件のよい求人を比較するのが効率的です。タイプ別に向くサービスを整理します。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア（IT・Web特化）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT・Web特化で高年収求人の比率が高く、技術に踏み込んで話せるアドバイザーが在籍。Laravel/PHPのWeb求人の提案に向きます。
              </p>
              <Link href="/review/levtech/" className="text-sm text-blue-600 hover:underline">レバテックキャリアの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ（ハイクラス・スカウト型）</h3>
              <p className="text-sm text-slate-600 mb-2">
                年収750万円以上を中心としたハイクラス・スカウト型。Laravel基盤のテックリードやアーキテクト級の求人・スカウトに出会いやすいのが特徴です。
              </p>
              <Link href="/review/bizreach-it/" className="text-sm text-blue-600 hover:underline">ビズリーチの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Geekly（Web系・スタートアップに強い）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT・Web・ゲーム業界専門で、提案スピードが強み。Laravelを採用するWeb系・スタートアップの求人を探したい場合の選択肢になります。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験浅めからLaravelに参入するルート</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "PHPまたはWebフレームワークの経験を土台にする", desc: "PHPでのWeb開発経験はもちろん、Ruby on RailsやDjangoなど他言語のWebフレームワーク経験も、MVCやORMの考え方が共通するため土台になります。「Laravelは未経験だがWeb開発の基礎はある」とアピールできます。" },
              { num: "2", title: "GitHubに実務に近いLaravelアプリを公開する", desc: "認証・CRUD・API・DB設計を含むWebアプリをLaravelで作って公開します。Eloquentの使い方、テスト、バリデーション、セキュリティ配慮まで示せると、動くだけでなく設計の意図が伝わる状態になります。" },
              { num: "3", title: "求人母数の多さを活かしてポテンシャル枠を狙う", desc: "Laravelは求人が多く、未経験可・ポテンシャル枠も比較的見つかります。エージェントに「Laravelは学習中、PHP/Web開発の基礎はある」と伝え、入社後キャッチアップ前提の求人を紹介してもらうのが近道です。" },
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
              <strong>求人母数の多さは年齢のハードルを下げる。</strong>Laravelは求人が多いぶん、年齢や経歴の条件が幅広い案件が存在します。30代・40代でPHP/Web開発の実務を積んでいるなら、即戦力として受け入れられる求人を見つけやすいのが強みです。
            </p>
            <p>
              <strong>掛け算で年収を伸ばす。</strong>Laravel単体では年収の上限が見えやすいため、「Laravel＋フロント（React/Vue）」「Laravel＋インフラ・設計」「Laravel＋過去のドメイン知識（EC・業務系など）」の掛け合わせがミドル層の強みになります。年齢を重ねた分の業務知識を実装力と結びつけて語りましょう。
            </p>
            <p>
              <strong>マネジメント経験も資産になる。</strong>テックリードやアーキテクトのLaravel求人では、コードを書く力に加えてチームの技術選定・育成の経験が評価されます。40代でPL／PM経験があるなら、それを技術力とセットで提示しましょう。
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
              <strong>① 公式ドキュメントとPHPの基礎を固める。</strong>Laravelは公式ドキュメントが充実しています。まずPHPの言語仕様を固めたうえで、ルーティング・Eloquent・認証・バリデーションといったLaravelの中核機能を公式で押さえると、フレームワークの作法を体系的に理解できます。
            </p>
            <p>
              <strong>② テストとDB設計を実務水準で経験する。</strong>即戦力ゾーンの求人ではテストコードとDB設計が重視されます。マイグレーション、リレーション設計、自動テストを実プロジェクトで使うと、面接で語れる経験になります。
            </p>
            <p>
              <strong>③ フロント・インフラを掛け合わせる。</strong>年収を伸ばすには、Laravelに加えてReact/Vueなどフロント、Docker・クラウドなどインフラの経験を積むのが効果的です。フルスタックに動ける人材は、ミドル以上の求人で差がつきます。
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
          <h2 className="text-xl font-bold mb-3">Laravelのスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            Laravelは求人母数が多いからこそ、複数のIT特化型エージェントで条件のよい求人を横断比較するのが近道です。
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
              { name: "PHPエンジニアの転職ガイド", href: "/skill/php/" },
              { name: "Rubyエンジニアの転職ガイド", href: "/skill/ruby/" },
              { name: "Node.jsエンジニアの転職ガイド", href: "/skill/nodejs/" },
              { name: "SQLエンジニアの転職ガイド", href: "/skill/sql/" },
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
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-sm"><li><a href="/company/colopl/" className="text-blue-700 hover:underline">コロプラ</a></li><li><a href="/company/kaonavi/" className="text-blue-700 hover:underline">カオナビ</a></li></ul>
          <p className="mt-3 text-sm"><a href="/skill/" className="text-blue-700 hover:underline">スキル別ガイド一覧</a> ／ <a href="/salary/company-ranking/" className="text-blue-700 hover:underline">企業年収ランキング</a></p>
        </div>
      </section>
      </>
  );
}
