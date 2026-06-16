import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "PostgreSQLスキルで転職｜年収・求人・将来性【2026年】";
const PAGE_DESC =
  "PostgreSQLスキルを軸にした転職市場を出典付きで解説。PostgreSQLは単体スキルではなくDB設計・運用の実務基盤として評価される点を整理。求人ボックス公表のデータベースエンジニア年収、求人傾向、30代・40代の戦い方をミドルエンジニア向けにまとめます。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "1. 結論：PostgreSQLスキルの転職での活かし方" },
  { id: "market", label: "2. 関連職種の市場・年収データ（出典付き）" },
  { id: "level", label: "3. 求められる経験レベルと求人要件の傾向" },
  { id: "career", label: "4. PostgreSQLスキルが効くキャリアパス" },
  { id: "find", label: "5. 求人の探し方・強いエージェント" },
  { id: "entry", label: "6. 経験浅めからDB実務に入るルート" },
  { id: "age", label: "7. 30代・40代エンジニアの視点" },
  { id: "learn", label: "8. スキルアップ・学習戦略" },
  { id: "faq", label: "9. よくある質問" },
];

const faqs = [
  {
    q: "PostgreSQLスキルだけで年収はどのくらい上がりますか？",
    a: "PostgreSQLは「PostgreSQLエンジニア」という独立職種として年収が単体公表されているわけではなく、求人ボックスの職種別データにも単体集計はありません。実態としてはデータベースエンジニア／バックエンドエンジニア／インフラエンジニアのスキルの一部として評価されます。求人ボックス「給料ナビ」では、データベースエンジニア関連の平均年収が約453万円（2026年5月時点・掲載求人ベース）と公表されています。PostgreSQLはこの職種で年収を底上げする要素と捉えるのが正確です。",
  },
  {
    q: "PostgreSQLは単体のスキルとして転職市場で評価されますか？",
    a: "PostgreSQL単体を必須にする求人もありますが、多くは「RDBの設計・運用経験」「SQLチューニング」「バックエンド開発でのDB設計」という文脈で問われます。テーブル設計、インデックス設計、実行計画の読み解き、トランザクション設計といった、製品をまたいで通用するRDBの基礎力とセットで評価されるのが実態です。PostgreSQLは特にWeb系・スタートアップで採用が多く、その経験は転用性が高いです。",
  },
  {
    q: "MySQLの経験はPostgreSQLに活かせますか？",
    a: "大きく活かせます。RDBとしての基本概念（正規化、インデックス、トランザクション、実行計画）は共通で、SQLも大部分が共通です。差分はデータ型の扱い、ウィンドウ関数やJSONB等の機能、MVCCの実装、レプリケーションの方式などに表れます。MySQL経験者がPostgreSQLにキャッチアップするのは比較的短期間で進められます。",
  },
  {
    q: "PostgreSQLの求人はどんな企業に多いですか？",
    a: "Web系・SaaS・フィンテックなど、オープンソースのRDBを採用する事業会社に多く見られます。標準SQLへの準拠度が高く拡張性に優れるため、複雑なデータ要件を扱う企業や、地理空間データ（PostGIS）・JSONを扱うサービスでも採用されます。具体的な求人数や社名は時期で変動するため、エージェントで最新の保有求人を確認してください。",
  },
  {
    q: "PostgreSQL未経験でもDB寄りのポジションに転職できますか？",
    a: "他のRDB（MySQL・Oracle等）やバックエンド開発の実務経験があれば、PostgreSQL未経験でもポテンシャル採用の対象になり得ます。個人開発でPostgreSQLを使い、テーブル設計・インデックス・実行計画の確認まで行った経験を語れる状態にしておくと基礎力を示せます。ただし即戦力のDBA求人では運用・チューニングの実務経験を求めるものもあります。",
  },
  {
    q: "PostgreSQLスキルを証明する資格はありますか？",
    a: "OSS-DB技術者認定（Silver／Gold）はPostgreSQLを題材としたデータベース技術の資格で、学習の指針になります。また情報処理技術者試験のデータベーススペシャリストは、特定製品に依存しないRDBの設計・運用の知識を証明でき、転職市場でも評価されます。資格は学習内容を実務に紐づけて語れることが重要です。",
  },
  {
    q: "PostgreSQLとバックエンド開発、どちらを軸にすべきですか？",
    a: "二者択一ではなく掛け合わせが現実的です。バックエンド開発者がPostgreSQLの設計・チューニングを深めると、パフォーマンス問題を上流で解決できる希少人材になります。逆にDB専任を目指す場合も、アプリ側の事情を理解していると設計の精度が上がります。30代・40代では「開発もDBも分かる」掛け合わせが強みになります。",
  },
  {
    q: "PostgreSQLスキルを活かす転職におすすめのエージェントは？",
    a: "IT・Web特化で高年収求人比率が高いレバテックキャリア、ハイクラス・スカウト型でDBA／データ基盤級の求人に出会いやすいビズリーチ、Web系スタートアップの提案に強いGeeklyの併用が選択肢です。DB系は職種の表現が企業によって異なるため、複数登録して保有求人を横断比較するのが現実的です。",
  },
];

const salaryTable: [string, string, string][] = [
  ["データベースエンジニア関連（近接職種）", "平均約453万円", "求人ボックス 給料ナビ（2026年5月時点・掲載求人ベース）"],
  ["ソフトウェアエンジニア（開発側）", "平均約511万円", "求人ボックス 給料ナビ（2026年5月時点・掲載求人ベース）"],
  ["インフラエンジニア（基盤側）", "平均約475万円", "求人ボックス 給料ナビ（2026年5月時点・掲載求人ベース）"],
  ["正社員SEの平均年収・30代", "約499万円", "レバテック公表（2025年・年代別平均）"],
  ["正社員SEの平均年収・40代", "約618万円", "レバテック公表（2025年・年代別平均）"],
];

export default function PostgresqlSkillPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/skill/postgresql/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "PostgreSQL" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          PostgreSQLスキルで転職｜年収・求人・将来性【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | PostgreSQLスキルの転職市場をミドル層向けに分析
        </p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            PostgreSQLは標準SQLへの準拠度が高く、拡張性・信頼性に優れたオープンソースのリレーショナルデータベースです。Web系・SaaS・フィンテックを中心に採用が広がり、複雑なデータ要件やJSON・地理空間データを扱うサービスの基盤として定着しています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            重要なのは、PostgreSQLが<strong>単体の独立職種ではなく、DB設計・運用やバックエンド開発の実務基盤として評価される</strong>点です。本記事では、近接職種の公表年収・求められる経験レベル・求人の探し方・経験浅めからの参入ルートを、30代・40代の視点を交えて整理します。
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
                <a href={`#${t.id}`} className="text-sm text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：PostgreSQLスキルの転職での活かし方</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>PostgreSQLは「これ単体で転職する」スキルではなく、DB設計・運用やバックエンド職の市場価値を底上げする実務基盤です。</strong>RDBの設計・チューニングを掛け合わせることで、応募できる求人の幅と年収レンジが広がります。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・PostgreSQL単体の職種別年収は公表が乏しく、<strong>データベースエンジニア約453万円</strong>（求人ボックス2026年5月）など近接職種で代替して把握する</li>
              <li>・求人では「RDBの設計・運用」「SQLチューニング」「DB設計を伴うバックエンド開発」の文脈で問われる</li>
              <li>・PostgreSQL＋アプリ開発、＋データ基盤の掛け合わせで、希少性の高いポジションに手が届く</li>
            </ul>
          </div>
        </section>

        {/* 市場・年収データ */}
        <section id="market" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">関連職種の市場・年収データ（出典付き）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            「PostgreSQLエンジニア」という職種で年収が単体公表されているわけではないため、ここではPostgreSQLスキルが評価される近接職種の公表値を、出典と時点を明示して掲載します。
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
            ※ PostgreSQLは独立職種としての年収公表が乏しいため、データベース／ソフトウェア／インフラエンジニアなどの職種年収で代替して示しています。求人ボックスの平均年収は掲載求人の記載額の集計であり、個人の支給額とは異なります。レバテックの年代別平均はSE全般の値です。実際のレンジは担当領域で幅が大きいため、エージェントで最新の保有求人を確認してください。
          </p>
        </section>

        {/* 求められる経験レベル */}
        <section id="level" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベルと求人要件の傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            PostgreSQLに関する要件は「アプリからSQLを書ける」レベルから「大規模DBの設計・運用・チューニングができる」レベルまで幅があります。求人票によく登場する要件を傾向としてまとめると次の通りです。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { tier: "入口（ポテンシャル）", req: "開発の実務2〜3年／基本的なSQLとテーブル設計／インデックスの基礎理解", note: "PostgreSQL実務未経験でも応募余地あり" },
              { tier: "即戦力（ミドル）", req: "RDBの設計・運用／実行計画を読んだSQLチューニング／トランザクション設計／バックアップ・リストア", note: "求人の中心ゾーン" },
              { tier: "ハイクラス", req: "大規模DBの設計・パフォーマンス改善／レプリケーション・可用性設計／データ基盤の技術選定", note: "DBA／データ基盤の高年収層" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2 text-sm">{item.tier}</h3>
                <p className="text-xs text-slate-600 mb-2 leading-relaxed">{item.req}</p>
                <p className="text-xs text-petrol">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* キャリアパス */}
        <section id="career" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">PostgreSQLスキルが効くキャリアパス</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            PostgreSQLは開発からデータ基盤・インフラ領域へ橋渡しするスキルです。掛け合わせる技術によって到達できるレンジが変わります。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "バックエンドエンジニア（DB設計込み）", note: "アプリ開発＋テーブル・SQL設計を一気通貫で担当" },
              { role: "データベースエンジニア／DBA", note: "RDBの設計・運用・チューニング・可用性設計が中心" },
              { role: "データ基盤エンジニア", note: "PostgreSQLを起点にデータ分析基盤・ETLへ広げる" },
              { role: "SRE（DB信頼性）", note: "DBのパフォーマンス・可用性をソフトウェア工学で支える" },
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
            DB系は職種の表現が企業ごとに異なるため、希望（DB設計・DBA・データ基盤）を明確にして求人を引き出すのが効率的です。タイプ別に向くサービスを整理します。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア（IT・Web特化）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT・Web特化で高年収求人の比率が高く、技術に踏み込んで話せるアドバイザーが在籍。DB設計・データ基盤系の専門求人の提案に向きます。
              </p>
              <Link href="/review/levtech/" className="text-sm text-petrol hover:underline">レバテックキャリアの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ（ハイクラス・スカウト型）</h3>
              <p className="text-sm text-slate-600 mb-2">
                ハイクラス・スカウト型で、DBAやデータ基盤エンジニア級の求人・スカウトに出会いやすいのが特徴です。
              </p>
              <Link href="/review/bizreach-it/" className="text-sm text-petrol hover:underline">ビズリーチの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Geekly（Web系・スタートアップに強い）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT・Web・ゲーム業界専門で、提案スピードが強み。PostgreSQLを採用するWeb系企業の求人を探したい場合の選択肢です。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験浅めからDB実務に入るルート</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "既存の開発／他RDB経験を土台にする", desc: "アプリ開発やMySQL・Oracle等の経験があれば、それを土台に「PostgreSQLでもRDBの設計・運用ができる」ことを示せます。RDBの基礎は共通なので、製品差分のキャッチアップで応募余地が生まれます。" },
              { num: "2", title: "個人開発でPostgreSQLを設計から触る", desc: "テーブル設計・インデックス設計・実行計画（EXPLAIN）の確認・遅いクエリの改善までを個人開発で経験し、その判断を語れる状態にしておきます。設計の意図が伝わると評価につながります。" },
              { num: "3", title: "DB設計を伴うバックエンド求人を狙う", desc: "DB専任よりも「DB設計込みのバックエンド」のほうが入口は広い傾向です。エージェントに「DB設計・チューニングを伸ばしたい」と伝え、そうした要素を含む求人を紹介してもらうのが近道です。" },
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>
              <strong>DB設計は経験がものを言う領域。</strong>テーブル設計やパフォーマンス改善は、実プロジェクトでの試行錯誤の蓄積が効きます。30代・40代でRDBの実務を積んでいるなら、その設計判断の引き出しの多さが、若手にはない武器になります。
            </p>
            <p>
              <strong>掛け算で差別化する。</strong>PostgreSQL単体より「PostgreSQL＋アプリ開発」「PostgreSQL＋ドメイン知識（金融・物流など）」の掛け合わせが強みです。業務の文脈を理解したデータモデリングは、ミドル層ならではの説得力があります。
            </p>
            <p>
              <strong>トラブル対応の経験が資産になる。</strong>本番DBのスロークエリ、ロック競合、データ移行といった修羅場をくぐった経験は、面接で具体的に語れる強力な材料です。40代のリード経験があれば、それを技術力とセットで提示しましょう。
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
              <strong>① RDBの基礎を製品横断で固める。</strong>正規化、インデックス、トランザクション、実行計画といった基礎は<Link href="/skill/sql/" className="text-petrol hover:underline">SQL／データベース</Link>の共通言語です。ここを固めると、PostgreSQL固有の機能の理解も速くなります。
            </p>
            <p>
              <strong>② 実行計画を読む習慣をつける。</strong>EXPLAIN/EXPLAIN ANALYZEで遅いクエリの原因を特定し、インデックスや書き換えで改善する経験を積みます。チューニングは面接で最も語りやすい実務スキルの一つです。
            </p>
            <p>
              <strong>③ 周辺領域へ広げる。</strong>コンテナでのDB運用（<Link href="/skill/docker/" className="text-petrol hover:underline">Docker</Link>）、クラウドのマネージドDB（<Link href="/skill/aws/" className="text-petrol hover:underline">AWS</Link> RDS/Aurora等）まで広げると、運用・基盤側の求人にも手が届きます。資格では<Link href="/cert/database-specialist/" className="text-petrol hover:underline">データベーススペシャリスト</Link>が指針になります。
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
          <h2 className="text-xl font-bold mb-3">PostgreSQLスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            DB系は職種の表現が企業ごとに異なるからこそ、複数のIT特化型エージェントで保有求人を横断比較するのが近道です。
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
              { name: "SQL／データベースエンジニアの転職ガイド", href: "/skill/sql/" },
              { name: "MySQLスキルの転職ガイド", href: "/skill/mysql/" },
              { name: "Redisスキルの転職ガイド", href: "/skill/redis/" },
              { name: "インフラエンジニアの転職ガイド", href: "/skill/infrastructure/" },
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
