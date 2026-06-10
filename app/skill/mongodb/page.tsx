import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "MongoDBスキルで転職｜年収・求人・将来性【2026年】";
const PAGE_DESC =
  "MongoDB（NoSQL）スキルを軸にした転職市場を出典付きで解説。MongoDBは単体スキルではなくDB設計・運用やバックエンド開発の実務基盤として評価される点を整理。求人ボックス公表のデータベースエンジニア年収、求人傾向、30代・40代の戦い方をミドルエンジニア向けにまとめます。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "1. 結論：MongoDBスキルの転職での活かし方" },
  { id: "market", label: "2. 関連職種の市場・年収データ（出典付き）" },
  { id: "level", label: "3. 求められる経験レベルと求人要件の傾向" },
  { id: "career", label: "4. MongoDBスキルが効くキャリアパス" },
  { id: "find", label: "5. 求人の探し方・強いエージェント" },
  { id: "entry", label: "6. 経験浅めからNoSQL実務に入るルート" },
  { id: "age", label: "7. 30代・40代エンジニアの視点" },
  { id: "learn", label: "8. スキルアップ・学習戦略" },
  { id: "faq", label: "9. よくある質問" },
];

const faqs = [
  {
    q: "MongoDBスキルだけで年収はどのくらい上がりますか？",
    a: "MongoDBは「MongoDBエンジニア」という独立職種として年収が単体公表されているわけではなく、求人ボックスの職種別データにも単体集計はありません。実態としてはデータベースエンジニア／バックエンドエンジニアのスキルの一部として評価されます。求人ボックス「給料ナビ」では、データベースエンジニア関連の平均年収が約453万円（2026年5月時点・掲載求人ベース）と公表されています。MongoDBはこの職種で年収を底上げする要素と捉えるのが正確です。",
  },
  {
    q: "MongoDBは単体のスキルとして転職市場で評価されますか？",
    a: "MongoDB単体を必須にする求人は限定的で、多くは「NoSQLでのデータ設計経験」「スキーマレス／ドキュメント指向の設計」「バックエンド開発でのDB選定」という文脈で問われます。RDBとの使い分けを説明でき、なぜMongoDBを選んだかを語れることが評価につながります。RDBの基礎があったうえでNoSQLも扱える、という組み合わせが特に強みになります。",
  },
  {
    q: "RDB（MySQL/PostgreSQL）の経験はMongoDBに活かせますか？",
    a: "活かせます。データモデリングの考え方、インデックス設計、クエリ最適化といった基礎はRDBと共通する部分があります。一方でMongoDBはドキュメント指向で、正規化より「アクセスパターンに合わせた埋め込み設計」が重要になるなど発想の転換が必要です。RDB経験者がMongoDBにキャッチアップするのは現実的で、両方扱えると設計の引き出しが増えます。",
  },
  {
    q: "MongoDBの求人はどんな企業に多いですか？",
    a: "スキーマが変化しやすいサービス、ログ・イベント・カタログなど柔軟なデータ構造を扱うWeb系・SaaS・スタートアップに多く見られます。Node.js系のスタックと組み合わせて採用されるケースも多いです。具体的な求人数や社名は時期で変動するため、エージェントで最新の保有求人を確認してください。",
  },
  {
    q: "MongoDB未経験でもNoSQL寄りのポジションに転職できますか？",
    a: "バックエンド開発やRDBの実務経験があれば、MongoDB未経験でもポテンシャル採用の対象になり得ます。個人開発でMongoDBを使い、ドキュメント設計・インデックス・集計（aggregation）まで触った経験を語れる状態にしておくと基礎力を示せます。ただし即戦力求人では本番運用やレプリカセット・シャーディングの経験を求めるものもあります。",
  },
  {
    q: "MongoDBとRDB、どちらを学ぶべきですか？",
    a: "まずRDBの基礎を固めるのが定石です。多くのシステムは依然としてRDBが主役で、RDBの設計力は転用性が高いためです。そのうえでMongoDBを学ぶと、「RDBとNoSQLを使い分けられる」希少性が出ます。MongoDB単体より、RDBとの併用・使い分けを語れることが市場価値につながります。",
  },
  {
    q: "MongoDBスキルを証明する手段はありますか？",
    a: "MongoDB社が提供する開発者・DBA向けの認定プログラムがあり、学習の指針になります。ただし転職市場では資格より、実際にMongoDBで設計・運用した実績や、RDBとの使い分けの判断を語れることのほうが重視される傾向があります。個人開発でも本番に近い構成を作っておくと評価につながります。",
  },
  {
    q: "MongoDBスキルを活かす転職におすすめのエージェントは？",
    a: "IT・Web特化で高年収求人比率が高いレバテックキャリア、ハイクラス・スカウト型でデータ基盤級の求人に出会いやすいビズリーチ、Web系スタートアップの提案に強いGeeklyの併用が選択肢です。NoSQL系は求人母数がRDBより限られるため、複数登録して保有求人を横断比較するのが現実的です。",
  },
];

const salaryTable: [string, string, string][] = [
  ["データベースエンジニア関連（近接職種）", "平均約453万円", "求人ボックス 給料ナビ（2026年5月時点・掲載求人ベース）"],
  ["ソフトウェアエンジニア（開発側）", "平均約511万円", "求人ボックス 給料ナビ（2026年5月時点・掲載求人ベース）"],
  ["インフラエンジニア（基盤側）", "平均約475万円", "求人ボックス 給料ナビ（2026年5月時点・掲載求人ベース）"],
  ["正社員SEの平均年収・30代", "約499万円", "レバテック公表（2025年・年代別平均）"],
  ["正社員SEの平均年収・40代", "約618万円", "レバテック公表（2025年・年代別平均）"],
];

export default function MongodbSkillPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/skill/mongodb/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "MongoDB" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          MongoDBスキルで転職｜年収・求人・将来性【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | MongoDBスキルの転職市場をミドル層向けに分析
        </p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            MongoDBはドキュメント指向のNoSQLデータベースで、スキーマレスな柔軟性とスケールアウトのしやすさが特徴です。ログ・イベント・カタログなど構造が変化しやすいデータを扱うWeb系・SaaS・スタートアップで採用されています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            重要なのは、MongoDBが<strong>単体の独立職種ではなく、DB設計・運用やバックエンド開発の実務基盤として、特にRDBとの使い分けの文脈で評価される</strong>点です。本記事では、近接職種の公表年収・求められる経験レベル・求人の探し方・経験浅めからの参入ルートを、30代・40代の視点を交えて整理します。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "求人ボックス「給料ナビ」データベース／ソフトウェア／インフラエンジニア（2026年5月時点・掲載求人ベース）",
            "レバテック公表 年代別平均年収（2025年）",
            "経済産業省「IT人材需給に関する調査」（2019年3月公表）",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：MongoDBスキルの転職での活かし方</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>MongoDBは「これ単体で転職する」スキルではなく、RDBと使い分けられるDB設計力としてバックエンド職の市場価値を底上げする実務基盤です。</strong>NoSQLのデータモデリングを掛け合わせることで、応募の幅と希少性が広がります。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・MongoDB単体の職種別年収は公表が乏しく、<strong>データベースエンジニア約453万円</strong>（求人ボックス2026年5月）など近接職種で代替して把握する</li>
              <li>・求人では「NoSQLでのデータ設計」「RDBとの使い分け」「DB選定を伴うバックエンド開発」の文脈で問われる</li>
              <li>・RDB＋MongoDBの両刀使いは、設計の引き出しの多さとして評価されやすい</li>
            </ul>
          </div>
        </section>

        {/* 市場・年収データ */}
        <section id="market" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">関連職種の市場・年収データ（出典付き）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            「MongoDBエンジニア」という職種で年収が単体公表されているわけではないため、ここではMongoDBスキルが評価される近接職種の公表値を、出典と時点を明示して掲載します。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {salaryTable.map(([label, value, src], i) => (
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
            ※ MongoDBは独立職種としての年収公表が乏しいため、データベース／ソフトウェア／インフラエンジニアなどの職種年収で代替して示しています。求人ボックスの平均年収は掲載求人の記載額の集計であり、個人の支給額とは異なります。レバテックの年代別平均はSE全般の値です。実際のレンジは担当領域で幅が大きいため、エージェントで最新の保有求人を確認してください。
          </p>
        </section>

        {/* 求められる経験レベル */}
        <section id="level" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベルと求人要件の傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            MongoDBに関する要件は「アプリからクエリを書ける」レベルから「大規模NoSQL基盤を設計・運用できる」レベルまで幅があります。求人票によく登場する要件を傾向としてまとめると次の通りです。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { tier: "入口（ポテンシャル）", req: "開発の実務2〜3年／基本的なドキュメント操作／RDBの基礎理解（使い分けの前提）", note: "MongoDB実務未経験でも応募余地あり" },
              { tier: "即戦力（ミドル）", req: "アクセスパターンに基づくドキュメント設計／インデックス・集計（aggregation）／RDBとの使い分けの判断", note: "求人の中心ゾーン" },
              { tier: "ハイクラス", req: "レプリカセット・シャーディングの設計運用／大規模NoSQL基盤のパフォーマンス改善・技術選定", note: "データ基盤の高年収層" },
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">MongoDBスキルが効くキャリアパス</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            MongoDBは開発からデータ基盤領域へ橋渡しするスキルです。掛け合わせる技術によって到達できるレンジが変わります。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "バックエンドエンジニア（DB選定込み）", note: "アプリ開発＋RDB/NoSQLの選定・設計を担当" },
              { role: "データベースエンジニア（NoSQL）", note: "NoSQLの設計・運用・スケール設計が中心" },
              { role: "データ基盤エンジニア", note: "MongoDBを起点にイベント・ログ基盤、データ分析へ広げる" },
              { role: "SRE（DB信頼性）", note: "レプリカセット・シャーディングの可用性をソフトウェア工学で支える" },
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
            NoSQL系はRDBより求人母数が限られるため、複数のチャネルを横断するのが効率的です。タイプ別に向くサービスを整理します。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア（IT・Web特化）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT・Web特化で高年収求人の比率が高く、技術に踏み込んで話せるアドバイザーが在籍。NoSQL・データ基盤系の専門求人の提案に向きます。
              </p>
              <Link href="/review/levtech/" className="text-sm text-blue-600 hover:underline">レバテックキャリアの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ（ハイクラス・スカウト型）</h3>
              <p className="text-sm text-slate-600 mb-2">
                ハイクラス・スカウト型で、データ基盤エンジニアやアーキテクト級の求人・スカウトに出会いやすいのが特徴です。
              </p>
              <Link href="/review/bizreach-it/" className="text-sm text-blue-600 hover:underline">ビズリーチの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Geekly（Web系・スタートアップに強い）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT・Web・ゲーム業界専門で、提案スピードが強み。MongoDBを採用するWeb系スタートアップの求人を探したい場合の選択肢です。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験浅めからNoSQL実務に入るルート</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "RDB・開発経験を土台にする", desc: "バックエンド開発やRDBの実務経験があれば、それを土台に「NoSQLも設計から扱える」ことを示せます。RDBとの使い分けを語れると、設計力の広さとして評価されます。" },
              { num: "2", title: "個人開発でMongoDBを設計から触る", desc: "アクセスパターンに合わせたドキュメント設計、インデックス、aggregationによる集計までを個人開発で経験し、「なぜRDBではなくMongoDBにしたか」を語れる状態にしておきます。" },
              { num: "3", title: "DB選定を伴うバックエンド求人を狙う", desc: "NoSQL専任よりも「RDB/NoSQLの選定込みのバックエンド」のほうが入口は広い傾向です。エージェントに「NoSQLの設計経験を伸ばしたい」と伝え、そうした要素を含む求人を紹介してもらうのが近道です。" },
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
              <strong>使い分けの判断力が武器になる。</strong>「RDBとNoSQLのどちらを、なぜ選ぶか」を実プロジェクトの経験から語れることは、30代・40代ならではの強みです。技術の流行に飛びつくのではなく、要件に応じて選定できる姿勢が評価されます。
            </p>
            <p>
              <strong>掛け算で差別化する。</strong>MongoDB単体より「MongoDB＋RDB」「MongoDB＋ドメイン知識」の掛け合わせが強みです。柔軟なデータ構造が必要な業務（カタログ、IoT、ログ分析など）の知見があると、設計の説得力が増します。
            </p>
            <p>
              <strong>運用・スケールの経験は希少。</strong>レプリカセットやシャーディングを伴う本番運用の経験は、求人市場で高く評価されます。障害対応やデータ移行の具体的なエピソードを用意しておきましょう。
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
              <strong>① まずRDBの基礎を固める。</strong>正規化やトランザクションなど<Link href="/skill/sql/" className="text-blue-600 hover:underline">SQL／データベース</Link>の基礎を理解しておくと、MongoDBの「あえて非正規化する」設計判断の意味が分かります。RDBとの対比でNoSQLを学ぶのが効率的です。
            </p>
            <p>
              <strong>② アクセスパターン起点で設計する。</strong>MongoDBはクエリのされ方を前提にドキュメント構造を決めます。埋め込みと参照の使い分け、インデックス設計、aggregationパイプラインを個人開発で試すと、面接で語れる経験になります。
            </p>
            <p>
              <strong>③ 運用・周辺領域へ広げる。</strong>コンテナでのDB運用（<Link href="/skill/docker/" className="text-blue-600 hover:underline">Docker</Link>）、クラウドのマネージドサービス（<Link href="/skill/aws/" className="text-blue-600 hover:underline">AWS</Link>等）まで広げると、基盤側の求人にも手が届きます。RDBの<Link href="/cert/database-specialist/" className="text-blue-600 hover:underline">データベーススペシャリスト</Link>で設計の基礎を固めるのも有効です。
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
          <h2 className="text-xl font-bold mb-3">MongoDBスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            NoSQL系は求人母数が限られるからこそ、複数のIT特化型エージェントで保有求人を横断比較するのが近道です。
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
              { name: "SQL／データベースエンジニアの転職ガイド", href: "/skill/sql/" },
              { name: "PostgreSQLスキルの転職ガイド", href: "/skill/postgresql/" },
              { name: "Redisスキルの転職ガイド", href: "/skill/redis/" },
              { name: "Apache Kafkaスキルの転職ガイド", href: "/skill/kafka/" },
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
