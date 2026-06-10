import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "MySQLスキルで転職｜年収・求人・将来性【2026年】";
const PAGE_DESC =
  "MySQLスキルを軸にした転職市場を出典付きで解説。MySQLは単体スキルではなくDB設計・運用やバックエンド開発の実務基盤として評価される点を整理。求人ボックス公表のデータベースエンジニア年収、求人傾向、30代・40代の戦い方をミドルエンジニア向けにまとめます。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "1. 結論：MySQLスキルの転職での活かし方" },
  { id: "market", label: "2. 関連職種の市場・年収データ（出典付き）" },
  { id: "level", label: "3. 求められる経験レベルと求人要件の傾向" },
  { id: "career", label: "4. MySQLスキルが効くキャリアパス" },
  { id: "find", label: "5. 求人の探し方・強いエージェント" },
  { id: "entry", label: "6. 経験浅めからDB実務に入るルート" },
  { id: "age", label: "7. 30代・40代エンジニアの視点" },
  { id: "learn", label: "8. スキルアップ・学習戦略" },
  { id: "faq", label: "9. よくある質問" },
];

const faqs = [
  {
    q: "MySQLスキルだけで年収はどのくらい上がりますか？",
    a: "MySQLは「MySQLエンジニア」という独立職種として年収が単体公表されているわけではなく、求人ボックスの職種別データにも単体集計はありません。実態としてはデータベースエンジニア／バックエンドエンジニア／インフラエンジニアのスキルの一部として評価されます。求人ボックス「給料ナビ」では、データベースエンジニア関連の平均年収が約453万円（2026年5月時点・掲載求人ベース）と公表されています。MySQLはこの職種で年収を底上げする要素と捉えるのが正確です。",
  },
  {
    q: "MySQLは単体のスキルとして転職市場で評価されますか？",
    a: "MySQL単体を必須にする求人もありますが、多くは「RDBの設計・運用経験」「SQLチューニング」「WebアプリのバックエンドでのDB設計」という文脈で問われます。MySQLはWeb系・LAMP/LEMP構成での採用が非常に多く、求人母数が大きいのが特徴です。テーブル設計・インデックス・実行計画といったRDBの基礎とセットで評価されます。",
  },
  {
    q: "PostgreSQLの経験はMySQLに活かせますか？",
    a: "大きく活かせます。RDBの基本概念（正規化、インデックス、トランザクション、実行計画）は共通で、SQLも大部分が共通です。差分はストレージエンジン（InnoDB）の挙動、レプリケーションの方式、データ型や関数の細部などに表れます。どちらか一方の実務経験があれば、もう一方へのキャッチアップは短期間で進められます。",
  },
  {
    q: "MySQLの求人はどんな企業に多いですか？",
    a: "Web系・EC・ゲーム・SaaSなど、WebアプリのバックエンドでRDBを使う事業会社に幅広く見られます。歴史的にWeb開発の定番として採用が多く、求人の絶対数が大きいのが特徴です。大規模サービスではレプリケーションやシャーディング込みの運用経験が問われます。具体的な求人数や社名は時期で変動するため、エージェントで最新の保有求人を確認してください。",
  },
  {
    q: "MySQL未経験でもDB寄りのポジションに転職できますか？",
    a: "他のRDB（PostgreSQL・Oracle等）やバックエンド開発の実務経験があれば、MySQL未経験でもポテンシャル採用の対象になり得ます。個人開発でMySQLを使い、テーブル設計・インデックス・実行計画の確認まで行った経験を語れる状態にしておくと基礎力を示せます。求人母数が大きい分、入口は比較的広い領域です。",
  },
  {
    q: "MySQLスキルを証明する資格はありますか？",
    a: "ベンダー資格としてMySQL関連の認定が存在します。また情報処理技術者試験のデータベーススペシャリストは、特定製品に依存しないRDBの設計・運用知識を証明でき、転職市場でも評価されます。資格は学習内容を実務に紐づけて語れることが重要で、資格単体より実務経験との組み合わせで効きます。",
  },
  {
    q: "MySQLとバックエンド開発、どちらを軸にすべきですか？",
    a: "二者択一ではなく掛け合わせが現実的です。バックエンド開発者がMySQLの設計・チューニングを深めると、N+1問題やスロークエリを上流で解決できる希少人材になります。30代・40代では「開発もDBも分かる」掛け合わせが強みになり、年収レンジの上振れにつながります。",
  },
  {
    q: "MySQLスキルを活かす転職におすすめのエージェントは？",
    a: "IT・Web特化で高年収求人比率が高いレバテックキャリア、ハイクラス・スカウト型でDBA／データ基盤級の求人に出会いやすいビズリーチ、Web系スタートアップの提案に強いGeeklyの併用が選択肢です。MySQLは求人母数が大きいので、希望（DB設計・DBA・バックエンド）を明確にして絞り込むのが効率的です。",
  },
];

const salaryTable: [string, string, string][] = [
  ["データベースエンジニア関連（近接職種）", "平均約453万円", "求人ボックス 給料ナビ（2026年5月時点・掲載求人ベース）"],
  ["ソフトウェアエンジニア（開発側）", "平均約511万円", "求人ボックス 給料ナビ（2026年5月時点・掲載求人ベース）"],
  ["インフラエンジニア（基盤側）", "平均約475万円", "求人ボックス 給料ナビ（2026年5月時点・掲載求人ベース）"],
  ["正社員SEの平均年収・30代", "約499万円", "レバテック公表（2025年・年代別平均）"],
  ["正社員SEの平均年収・40代", "約618万円", "レバテック公表（2025年・年代別平均）"],
];

export default function MysqlSkillPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/skill/mysql/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "MySQL" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          MySQLスキルで転職｜年収・求人・将来性【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | MySQLスキルの転職市場をミドル層向けに分析
        </p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            MySQLはWeb開発の定番として長く使われてきたオープンソースのリレーショナルデータベースです。EC・ゲーム・SaaSなど幅広いWebサービスのバックエンドで採用され、RDBの中でも求人母数が大きいのが特徴です。
          </p>
          <p className="text-slate-600 leading-relaxed">
            重要なのは、MySQLが<strong>単体の独立職種ではなく、DB設計・運用やバックエンド開発の実務基盤として評価される</strong>点です。本記事では、近接職種の公表年収・求められる経験レベル・求人の探し方・経験浅めからの参入ルートを、30代・40代の視点を交えて整理します。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：MySQLスキルの転職での活かし方</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>MySQLは「これ単体で転職する」スキルではなく、DB設計・運用やバックエンド職の市場価値を底上げする実務基盤です。</strong>求人母数が大きい分、RDBの設計・チューニングを掛け合わせることで応募の幅が広がります。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・MySQL単体の職種別年収は公表が乏しく、<strong>データベースエンジニア約453万円</strong>（求人ボックス2026年5月）など近接職種で代替して把握する</li>
              <li>・求人では「RDBの設計・運用」「SQLチューニング」「DB設計を伴うバックエンド開発」の文脈で問われる</li>
              <li>・MySQL＋アプリ開発、＋大規模運用（レプリケーション等）の掛け合わせで年収レンジが上がる</li>
            </ul>
          </div>
        </section>

        {/* 市場・年収データ */}
        <section id="market" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">関連職種の市場・年収データ（出典付き）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            「MySQLエンジニア」という職種で年収が単体公表されているわけではないため、ここではMySQLスキルが評価される近接職種の公表値を、出典と時点を明示して掲載します。
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
            ※ MySQLは独立職種としての年収公表が乏しいため、データベース／ソフトウェア／インフラエンジニアなどの職種年収で代替して示しています。求人ボックスの平均年収は掲載求人の記載額の集計であり、個人の支給額とは異なります。レバテックの年代別平均はSE全般の値です。実際のレンジは担当領域で幅が大きいため、エージェントで最新の保有求人を確認してください。
          </p>
        </section>

        {/* 求められる経験レベル */}
        <section id="level" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベルと求人要件の傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            MySQLに関する要件は「アプリからSQLを書ける」レベルから「大規模サービスのDBを設計・運用できる」レベルまで幅があります。求人票によく登場する要件を傾向としてまとめると次の通りです。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { tier: "入口（ポテンシャル）", req: "開発の実務2〜3年／基本的なSQLとテーブル設計／インデックスの基礎理解", note: "MySQL実務未経験でも応募余地あり" },
              { tier: "即戦力（ミドル）", req: "RDBの設計・運用／実行計画を読んだSQLチューニング／InnoDBのトランザクション・ロック理解／バックアップ", note: "求人の中心ゾーン" },
              { tier: "ハイクラス", req: "大規模DBのレプリケーション・シャーディング設計／パフォーマンス改善／可用性設計・技術選定", note: "DBA／データ基盤の高年収層" },
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">MySQLスキルが効くキャリアパス</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            MySQLは開発からデータ基盤・インフラ領域へ橋渡しするスキルです。掛け合わせる技術によって到達できるレンジが変わります。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "バックエンドエンジニア（DB設計込み）", note: "Webアプリ開発＋テーブル・SQL設計を一気通貫で担当" },
              { role: "データベースエンジニア／DBA", note: "RDBの設計・運用・チューニング・可用性設計が中心" },
              { role: "データ基盤エンジニア", note: "MySQLを起点にデータ分析基盤・ETLへ広げる" },
              { role: "SRE（DB信頼性）", note: "大規模DBのパフォーマンス・可用性をソフトウェア工学で支える" },
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
            MySQLは求人母数が大きいので、希望（DB設計・DBA・バックエンド）を明確にして絞り込むのが効率的です。タイプ別に向くサービスを整理します。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア（IT・Web特化）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT・Web特化で高年収求人の比率が高く、技術に踏み込んで話せるアドバイザーが在籍。DB設計・データ基盤系の専門求人の提案に向きます。
              </p>
              <Link href="/review/levtech/" className="text-sm text-blue-600 hover:underline">レバテックキャリアの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ（ハイクラス・スカウト型）</h3>
              <p className="text-sm text-slate-600 mb-2">
                ハイクラス・スカウト型で、DBAやデータ基盤エンジニア級の求人・スカウトに出会いやすいのが特徴です。
              </p>
              <Link href="/review/bizreach-it/" className="text-sm text-blue-600 hover:underline">ビズリーチの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Geekly（Web系・スタートアップに強い）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT・Web・ゲーム業界専門で、提案スピードが強み。MySQLを採用するWeb系・ゲーム企業の求人を探したい場合の選択肢です。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験浅めからDB実務に入るルート</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "既存の開発／他RDB経験を土台にする", desc: "Webアプリ開発やPostgreSQL・Oracle等の経験があれば、それを土台に「MySQLでもRDBの設計・運用ができる」ことを示せます。RDBの基礎は共通なので、製品差分のキャッチアップで応募余地が生まれます。" },
              { num: "2", title: "個人開発でMySQLを設計から触る", desc: "テーブル設計・インデックス設計・EXPLAINでの実行計画確認・スロークエリの改善までを個人開発で経験し、その判断を語れる状態にしておきます。設計の意図が伝わると評価につながります。" },
              { num: "3", title: "DB設計を伴うバックエンド求人を狙う", desc: "MySQLは求人母数が大きく、DB設計込みのバックエンド求人が豊富です。エージェントに「DB設計・チューニングを伸ばしたい」と伝え、そうした要素を含む求人を紹介してもらうのが近道です。" },
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
              <strong>DB設計は経験がものを言う領域。</strong>テーブル設計やパフォーマンス改善は、実プロジェクトでの試行錯誤の蓄積が効きます。30代・40代でMySQLの実務を積んでいるなら、その設計判断の引き出しの多さが、若手にはない武器になります。
            </p>
            <p>
              <strong>大規模運用の経験は希少。</strong>レプリケーション、スロークエリ対応、データ移行、無停止メンテナンスといった大規模サービスの運用経験は、求人市場で高く評価されます。修羅場をくぐった具体的なエピソードを用意しておきましょう。
            </p>
            <p>
              <strong>掛け算で差別化する。</strong>MySQL単体より「MySQL＋アプリ開発」「MySQL＋ドメイン知識」の掛け合わせが強みです。40代でリード経験があれば、それを技術力とセットで提示しましょう。
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
              <strong>① RDBの基礎を製品横断で固める。</strong>正規化、インデックス、トランザクション、実行計画といった基礎は<Link href="/skill/sql/" className="text-blue-600 hover:underline">SQL／データベース</Link>の共通言語です。ここを固めると、MySQL固有の挙動（InnoDB等）の理解も速くなります。
            </p>
            <p>
              <strong>② 実行計画とインデックスを掘り下げる。</strong>EXPLAINでスロークエリの原因を特定し、インデックス設計やクエリ書き換えで改善する経験を積みます。N+1問題やロック競合の解消は、面接で語りやすい実務スキルです。
            </p>
            <p>
              <strong>③ 周辺領域へ広げる。</strong>コンテナでのDB運用（<Link href="/skill/docker/" className="text-blue-600 hover:underline">Docker</Link>）、クラウドのマネージドDB（<Link href="/skill/aws/" className="text-blue-600 hover:underline">AWS</Link> RDS/Aurora等）まで広げると、運用・基盤側の求人にも手が届きます。資格では<Link href="/cert/database-specialist/" className="text-blue-600 hover:underline">データベーススペシャリスト</Link>が指針になります。
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
          <h2 className="text-xl font-bold mb-3">MySQLスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            DB系は職種の表現が企業ごとに異なるからこそ、複数のIT特化型エージェントで保有求人を横断比較するのが近道です。
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
              { name: "インフラエンジニアの転職ガイド", href: "/skill/infrastructure/" },
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
