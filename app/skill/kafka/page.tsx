import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "Apache Kafkaスキルで転職｜年収・求人・将来性【2026年】";
const PAGE_DESC =
  "Apache Kafka（分散ストリーミング基盤）スキルを軸にした転職市場を出典付きで解説。Kafkaは単体スキルではなく大規模データ基盤・バックエンドの実務基盤として評価される点を整理。求人ボックス公表のデータ／インフラエンジニア年収、求人傾向、30代・40代の戦い方をミドルエンジニア向けにまとめます。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "1. 結論：Kafkaスキルの転職での活かし方" },
  { id: "market", label: "2. 関連職種の市場・年収データ（出典付き）" },
  { id: "level", label: "3. 求められる経験レベルと求人要件の傾向" },
  { id: "career", label: "4. Kafkaスキルが効くキャリアパス" },
  { id: "find", label: "5. 求人の探し方・強いエージェント" },
  { id: "entry", label: "6. 経験浅めからKafka実務に入るルート" },
  { id: "age", label: "7. 30代・40代エンジニアの視点" },
  { id: "learn", label: "8. スキルアップ・学習戦略" },
  { id: "faq", label: "9. よくある質問" },
];

const faqs = [
  {
    q: "Kafkaスキルだけで年収はどのくらい上がりますか？",
    a: "Kafkaは「Kafkaエンジニア」という独立職種として年収が単体公表されているわけではなく、求人ボックスの職種別データにも単体集計はありません。実態としてはデータエンジニア／バックエンドエンジニア／インフラエンジニアのスキルの一部として評価されます。求人ボックス「給料ナビ」では、近い職種としてデータベースエンジニア関連が約453万円、インフラエンジニアが約475万円（いずれも2026年5月時点・掲載求人ベース）と公表されています。Kafkaは大規模データ基盤を扱える希少性として、これらの職種で年収を押し上げる要素になります。",
  },
  {
    q: "Kafkaは単体のスキルとして転職市場で評価されますか？",
    a: "Kafka単体を必須にする求人は限定的ですが、登場する求人は「大規模データ基盤」「リアルタイムストリーミング」「マイクロサービス間の非同期連携」といった高度な文脈であることが多く、扱える人材が少ないため希少性が高い領域です。トピック設計、パーティション・コンシューマグループの設計、配信保証（at-least-once等）を理解して語れることが評価につながります。",
  },
  {
    q: "Kafkaはどんな用途で使われますか？",
    a: "代表的な用途は、サービス間の非同期メッセージング、イベント駆動アーキテクチャ、ログ・イベントの収集と配信、リアルタイムのストリーム処理、データ基盤へのデータ取り込み（CDC等）です。大量のイベントを高スループットで扱えるため、マイクロサービスや大規模データ基盤の中核として採用されています。",
  },
  {
    q: "Kafkaの求人はどんな企業に多いですか？",
    a: "大量のデータをリアルタイムに扱うWeb系・SaaS・フィンテック・広告・物流などの事業会社や、データ基盤を内製する企業に多く見られます。多くはデータエンジニア、プラットフォーム、バックエンドアーキテクトの求人要件の一部としてKafkaが登場します。具体的な求人数や社名は時期で変動するため、エージェントで最新の保有求人を確認してください。",
  },
  {
    q: "Kafka未経験でもデータ基盤系のポジションに転職できますか？",
    a: "バックエンド開発やインフラ／データ処理の実務経験があれば、Kafka未経験でもポテンシャル採用の対象になり得ます。個人開発やローカル環境でKafkaのProducer/Consumerを実装し、トピック・パーティションの設計を語れる状態にしておくと基礎力を示せます。ただしKafka求人は高度な文脈が多く、即戦力では本番運用やストリーム処理の経験を求めるものもあります。",
  },
  {
    q: "Kafkaとメッセージキュー（RabbitMQ等）の違いは何ですか？",
    a: "従来のメッセージキューはメッセージを消費したら削除する「キュー」が基本で、タスク分散などに向きます。Kafkaはログを保持し続け、複数のコンシューマが好きな位置から読める「分散ログ」モデルで、高スループットなイベントストリーミングやデータ基盤への取り込みに強いのが特徴です。用途に応じた使い分けを説明できると、設計力として評価されます。",
  },
  {
    q: "Kafkaスキルを伸ばすには何から学べばいいですか？",
    a: "まずトピック・パーティション・オフセット・コンシューマグループといった基本概念を押さえ、ローカルでProducer/Consumerを動かすのが入口です。その上で配信保証、リバランス、スキーマ管理、Kafka Connect／Streamsなどの周辺エコシステム、運用面（監視・スケール）へ進むと、データ基盤・プラットフォーム求人で語れる経験になります。",
  },
  {
    q: "Kafkaスキルを活かす転職におすすめのエージェントは？",
    a: "IT・Web特化で高年収求人比率が高いレバテックキャリア、ハイクラス・スカウト型でデータ基盤・アーキテクト級の求人に出会いやすいビズリーチ、Web系スタートアップの提案に強いGeeklyの併用が選択肢です。Kafkaは求人母数が限られる希少領域のため、複数登録して保有求人を横断比較するのが現実的です。",
  },
];

const salaryTable: [string, string, string][] = [
  ["データベース／データエンジニア関連（近接職種）", "平均約453万円", "求人ボックス 給料ナビ「データベースエンジニア」（2026年5月時点・掲載求人ベース）"],
  ["インフラエンジニア（基盤側）", "平均約475万円", "求人ボックス 給料ナビ（2026年5月時点・掲載求人ベース）"],
  ["ソフトウェアエンジニア（開発側）", "平均約511万円", "求人ボックス 給料ナビ（2026年5月時点・掲載求人ベース）"],
  ["正社員SEの平均年収・30代", "約499万円", "レバテック公表（2025年・年代別平均）"],
  ["正社員SEの平均年収・40代", "約618万円", "レバテック公表（2025年・年代別平均）"],
];

export default function KafkaSkillPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/skill/kafka/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Apache Kafka" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Apache Kafkaスキルで転職｜年収・求人・将来性【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | Apache Kafkaスキルの転職市場をミドル層向けに分析
        </p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            Apache Kafkaは大量のイベントを高スループットで扱う分散ストリーミング基盤です。サービス間の非同期連携、イベント駆動アーキテクチャ、ログ・イベントの収集、リアルタイムのストリーム処理、データ基盤へのデータ取り込みなど、大規模システムの中核として採用されています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            重要なのは、Kafkaが<strong>単体の独立職種ではなく、大規模データ基盤やバックエンドアーキテクチャの実務基盤として、希少性の高い文脈で評価される</strong>点です。本記事では、近接職種の公表年収・求められる経験レベル・求人の探し方・経験浅めからの参入ルートを、30代・40代の視点を交えて整理します。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "求人ボックス「給料ナビ」データベース／インフラ／ソフトウェアエンジニア（2026年5月時点・掲載求人ベース）",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：Kafkaスキルの転職での活かし方</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>Kafkaは「これ単体で転職する」スキルではありませんが、大規模データ基盤を扱える希少人材としてデータ／バックエンド職の市場価値を大きく押し上げる実務基盤です。</strong>扱える人が少ないため、関連実務とセットで強い差別化になります。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・Kafka単体の職種別年収は公表が乏しく、<strong>データベース約453万円・インフラ約475万円</strong>（求人ボックス2026年5月）など近接職種で代替して把握する</li>
              <li>・求人は「大規模データ基盤」「リアルタイムストリーミング」「イベント駆動アーキテクチャ」など高度な文脈が多い</li>
              <li>・Kafka＋データ基盤、＋マイクロサービスの掛け合わせで、希少性の高い高年収ポジションに手が届く</li>
            </ul>
          </div>
        </section>

        {/* 市場・年収データ */}
        <section id="market" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">関連職種の市場・年収データ（出典付き）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            「Kafkaエンジニア」という職種で年収が単体公表されているわけではないため、ここではKafkaスキルが評価される近接職種の公表値を、出典と時点を明示して掲載します。
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
            ※ Kafkaは独立職種としての年収公表が乏しいため、データベース／インフラ／ソフトウェアエンジニアなどの職種年収で代替して示しています。Kafkaを扱う大規模データ基盤・アーキテクト級のポジションはこれらの平均を上回るレンジになることもありますが、特化した公表値が乏しいため断定は避けています。求人ボックスの平均年収は掲載求人の記載額の集計で、個人の支給額とは異なります。実際のレンジはエージェントで最新の保有求人を確認してください。
          </p>
        </section>

        {/* 求められる経験レベル */}
        <section id="level" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベルと求人要件の傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Kafkaに関する要件は「Producer/Consumerを実装したことがある」レベルから「大規模ストリーミング基盤を設計・運用できる」レベルまで幅があります。求人票によく登場する要件を傾向としてまとめると次の通りです。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { tier: "入口（ポテンシャル）", req: "開発／インフラ／データ処理の実務2〜3年／Producer・Consumerの実装経験／基本概念（トピック・パーティション）の理解", note: "Kafka実務未経験でも応募余地あり" },
              { tier: "即戦力（ミドル）", req: "トピック・パーティション・コンシューマグループの設計／配信保証の理解／イベント駆動の設計／スキーマ管理", note: "求人の中心ゾーン" },
              { tier: "ハイクラス", req: "大規模ストリーミング基盤の設計運用／スループット・可用性のチューニング／データ基盤アーキテクチャの技術選定", note: "データ基盤・アーキテクトの高年収層" },
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">Kafkaスキルが効くキャリアパス</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Kafkaは開発からデータ基盤・アーキテクト領域へ橋渡しするスキルです。掛け合わせる技術によって到達できるレンジが変わります。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "データエンジニア／データ基盤エンジニア", note: "Kafkaを中核にイベント収集・ストリーム処理・データ基盤を構築" },
              { role: "バックエンドアーキテクト", note: "イベント駆動・マイクロサービス間連携の設計を担う" },
              { role: "プラットフォーム／SREエンジニア", note: "Kafkaクラスタの可用性・スケール・監視を支える" },
              { role: "リアルタイム処理エンジニア", note: "ストリーム処理でリアルタイム分析・検知の仕組みを構築" },
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
            Kafkaは求人母数が限られる希少領域のため、特定の1社に絞るより複数のチャネルを横断するのが効率的です。タイプ別に向くサービスを整理します。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア（IT・Web特化）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT・Web特化で高年収求人の比率が高く、技術に踏み込んで話せるアドバイザーが在籍。データ基盤・ストリーミング系の専門求人の提案に向きます。
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
                IT・Web・ゲーム業界専門で、提案スピードが強み。大規模データを扱うWeb系企業の求人を探したい場合の選択肢です。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験浅めからKafka実務に入るルート</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "開発／データ処理の経験を土台にする", desc: "バックエンド開発やバッチ・データ処理の経験があれば、それを土台に「イベント駆動・ストリーミングの設計に進める」ことを示せます。Kafkaは高度な文脈が多いため、関連実務との接続を語ることが重要です。" },
              { num: "2", title: "ローカル環境でProducer/Consumerを実装する", desc: "ローカルやコンテナでKafkaを立て、Producer/Consumerを実装し、トピック・パーティション・コンシューマグループの挙動を確かめます。配信保証やリバランスをどう扱ったかを語れる状態にしておくと評価につながります。" },
              { num: "3", title: "データ基盤・プラットフォームのポテンシャル枠を狙う", desc: "データ基盤を構築・刷新する企業では、Kafka経験者の母数不足から入社後キャッチアップ前提の採用を行うことがあります。エージェントに「ストリーミング・データ基盤を伸ばしたい」と伝え、Kafkaを要件に含む求人を紹介してもらうのが近道です。" },
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
              <strong>希少スキルは年齢の不利を相殺しやすい。</strong>Kafkaのように扱える人が少ない領域では、「若くて安い人材」ではなく「大規模データ基盤を設計できる希少人材」が求められます。30代・40代でシステム設計の経験を積んでいるなら、その設計力こそが武器になります。
            </p>
            <p>
              <strong>アーキテクチャの判断力が評価される。</strong>「なぜイベント駆動にするか」「どこにKafkaを置くか」という設計判断は、実プロジェクトの経験から生まれます。同期・非同期のトレードオフや障害時の挙動まで語れると、ミドル層ならではの説得力が出ます。
            </p>
            <p>
              <strong>ドメイン知識との掛け合わせが強い。</strong>金融の取引イベント、物流の在庫イベント、広告の配信ログなど、これまでのドメイン知識を大規模イベント処理の設計に結びつけて語れると、希少性がさらに高まります。
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
              <strong>① 基本概念を手を動かして理解する。</strong>トピック・パーティション・オフセット・コンシューマグループといった概念は、実際にProducer/Consumerを動かすと腹落ちします。<Link href="/skill/docker/" className="text-blue-600 hover:underline">Docker</Link>でローカルにKafkaを立てると学習を始めやすいです。
            </p>
            <p>
              <strong>② 配信保証とデータ設計を押さえる。</strong>at-least-once／exactly-onceの違い、リバランス、スキーマ管理など、本番で問われる論点を理解します。データの<Link href="/skill/sql/" className="text-blue-600 hover:underline">データベース</Link>側との連携（CDCでのデータ取り込みなど）も合わせて学ぶと実務に近づきます。
            </p>
            <p>
              <strong>③ 運用・基盤領域へ広げる。</strong>クラスタの可用性・スケール、監視、クラウドのマネージドサービス（<Link href="/skill/aws/" className="text-blue-600 hover:underline">AWS</Link>のマネージドKafka等）まで広げると、データ基盤・プラットフォーム求人で語れる経験になります。IaC（<Link href="/skill/terraform/" className="text-blue-600 hover:underline">Terraform</Link>）での基盤管理も親和性が高い領域です。
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
          <h2 className="text-xl font-bold mb-3">Kafkaスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            Kafkaは求人母数が限られる希少領域だからこそ、複数のIT特化型エージェントで保有求人を横断比較するのが近道です。
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
              { name: "MongoDBスキルの転職ガイド", href: "/skill/mongodb/" },
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
