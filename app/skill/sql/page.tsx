import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "データベースエンジニア転職の攻め方｜年収・将来性【2026年】",
  description:
    "データベースエンジニア（DBA／SQL）の転職市場を2026年6月時点の公的データで整理。job tag・レバテック年代別年収、求められる経験レベル、求人の探し方、アプリ開発からの転向ルートまで実務目線で解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：DBエンジニア転職の攻め方" },
  { id: "market", label: "市場・年収データ" },
  { id: "demand", label: "需要が続く背景" },
  { id: "level", label: "求められる経験レベル" },
  { id: "career", label: "キャリアパスの選択肢" },
  { id: "find", label: "求人の探し方（強いサービス）" },
  { id: "entry", label: "アプリ開発からの転向ルート" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "study", label: "スキルアップ・学習戦略" },
  { id: "faq", label: "よくある質問" },
];

const careerPaths = [
  { role: "DBA（データベース管理者）", note: "DB設計・運用・パフォーマンスチューニング・バックアップ/リカバリ" },
  { role: "データエンジニア", note: "データパイプライン構築、ETL/ELT設計、データ基盤の運用" },
  { role: "データアーキテクト", note: "データ基盤全体の設計、データガバナンス、技術選定" },
];

const faqs = [
  {
    q: "データベースエンジニアの平均年収は？",
    a: "厚生労働省 job tagには『データベースエンジニア』単独の区分はありませんが、近接する『データエンジニア』区分では平均年収約609.8万円・平均年齢42.2歳（令和7年賃金構造基本統計調査の結果を加工）と公表されています。ただしこれは情報処理・通信技術者を広くまとめた区分の参考値です。年代別の目安としては、レバテック公表の正社員SE年収（2025年）で20代約378万円・30代約499万円・40代約618万円が参考になります。Oracle/SQL Serverの大規模運用やクラウドDBの経験があると上振れしやすい傾向です。",
  },
  {
    q: "データベースエンジニアの需要は今後も続く？",
    a: "データ量の増加とクラウド移行、データ基盤構築の流れを背景に、DBの設計・運用・最適化ができる人材の需要は底堅いと考えられます。経済産業省「IT人材需給に関する調査」（2019年3月公表）でも2030年に最大約79万人のIT人材不足が試算されており、データ系はその中でも需要の高い領域とされています。ただし具体的な不足人数や倍率の断定は避けるのが無難です。",
  },
  {
    q: "RDBとNoSQLのどちらを学ぶべき？",
    a: "まずRDB（PostgreSQL/MySQL）の基礎を固めるのが王道です。SQL、正規化、インデックス設計、トランザクション管理、実行計画の読み解きは全てのDB技術の土台になります。その上で、用途に応じてNoSQL（MongoDB・Redis・DynamoDB等）やデータウェアハウス（BigQuery・Snowflake）を広げていくと無理がありません。",
  },
  {
    q: "DBAの求人はどんな企業が多い？",
    a: "金融機関、大手SIer、ECサイト運営企業、SaaS企業に多く見られます。Oracle/SQL ServerのDBAは金融・製造業で安定した需要があり、PostgreSQL/MySQLはWeb系企業での需要が高い傾向です。近年はクラウドDB（Aurora・Cloud SQL等）の運用・移行を担える人材の募集が増えています。",
  },
  {
    q: "アプリケーションエンジニアからDBAに転向できる？",
    a: "転向しやすい職種です。アプリ開発でSQLやDB設計に触れた経験があれば土台があり、そこにパフォーマンスチューニング、バックアップ/リカバリ、レプリケーション・冗長構成、監視といった運用面の知識を足していく形になります。まずは現職でDB起因の課題解決を担当して実績を作るのが近道です。",
  },
  {
    q: "データベースエンジニアにおすすめの転職エージェントは？",
    a: "IT特化でインフラ・DB案件に強いレバテックキャリア、SIer系企業のDBA求人を扱うマイナビIT AGENT、ハイクラスのデータエンジニア案件が集まるビズリーチが候補です。Oracle Master等の資格は書類選考での目印になり、金融系の転職では特に評価されやすい傾向です。",
  },
  {
    q: "DBエンジニアからデータエンジニアへキャリアを広げられる？",
    a: "広げやすい流れです。BigQuery・Snowflake・Redshift等のデータウェアハウスや、dbt・Airflowを使ったパイプライン構築の経験を積むと、データエンジニアやデータアーキテクトへの道が開けます。SQLとDB設計の土台がある人ほど移行コストが低く、年収レンジも広がりやすくなります。",
  },
];

export default function SqlSkillPage() {
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
        title="データベースエンジニア転職の攻め方｜年収・将来性【2026年】"
        description="データベースエンジニア（DBA／SQL）の転職市場を2026年6月時点の公的データで整理。job tag・レバテック年代別年収、求められる経験レベル、求人の探し方、アプリ開発からの転向ルートまで実務目線で解説します。"
        url="/skill/sql/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "データベースエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          データベースエンジニア転職の攻め方｜年収・将来性【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | データベースエンジニア（DBA／SQL）の転職市場を公的データと年代別データで整理
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省 job tag「データエンジニア」（令和7年賃金構造基本統計調査の結果を加工）",
            "レバテック公表 年代別平均年収（2025年）",
            "経済産業省「IT人材需給に関する調査」（2019年3月公表）",
          ]}
        />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2 text-sm">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-blue-600 hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：DBエンジニア転職の攻め方</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-5 mb-4">
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              データベース領域は流行り廃りが少なく、<strong>経験の積み上げが評価されやすい</strong>安定職種です。だからこそ、トレンド追いより「自分が担保できる信頼性のレベル（障害対応・チューニング・移行）」を具体的に示すのが攻め方の軸になります。要点は3つです。
            </p>
            <ul className="text-sm text-blue-900 space-y-2">
              <li>① <strong>SQLの実践力＋運用の修羅場経験</strong>を具体的な事例で見せる（遅いクエリを速くした、障害から復旧した等）。</li>
              <li>② <strong>クラウドDB（Aurora/BigQuery等）＋IaC</strong>を掛け合わせ、オンプレ専任で止まらない見せ方をする。</li>
              <li>③ DBエンジニアに留まらず、<strong>データエンジニア／データアーキテクトへの拡張</strong>を視野に入れて年収レンジを広げる。</li>
            </ul>
          </div>
        </section>

        {/* 市場・年収データ */}
        <section id="market" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">市場・年収データ</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            厚生労働省 job tagには「データベースエンジニア」単独の職業区分はありません。近接する<strong>「データエンジニア」区分では平均年収約609.8万円・平均年齢42.2歳</strong>（令和7年賃金構造基本統計調査の結果を加工）と公表されていますが、これは情報処理・通信技術者を広くまとめた区分の参考値として捉えるのが安全です。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            年代別の実感に近い目安としては、レバテックが公表する正社員SEの年代別平均年収（2025年）が参考になります。大規模DBの運用やクラウドDBの移行経験があると、これより上振れしやすい傾向です。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年代</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">正社員SE平均年収（参考）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">この年代でのDB領域の役割イメージ</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["20代", "約378万円", "DB運用・監視・基本的なチューニングの担当"],
                  ["30代", "約499万円", "DB設計〜運用を一人称で回すDBA"],
                  ["40代", "約618万円", "DB基盤の設計・移行案件のリード"],
                  ["50代", "約685万円", "データ基盤全体の設計・技術選定"],
                ].map(([age, salary, role], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{age}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{salary}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            ※出典：厚生労働省 job tag「データエンジニア」（令和7年賃金構造基本統計調査の結果を加工）、レバテック公表 年代別平均年収（2025年）。役割イメージは求人要件の一般的傾向に基づく目安で、個別企業の提示額を保証するものではありません。
          </p>
        </section>

        {/* 需要が続く背景 */}
        <section id="demand" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">需要が続く背景</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">データ量の増加</h3>
              <p className="text-sm text-blue-700">
                IoT・EC・SaaSの普及で企業が扱うデータ量は増え続けています。大規模データを安定して管理・活用するためのDB設計・運用スキルは、地味ながら需要が途切れにくい領域です。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">クラウドDBへの移行需要</h3>
              <p className="text-sm text-blue-700">
                オンプレミスからAurora、Cloud SQL、Azure SQL Database等への移行プロジェクトが各社で進行しています。移行の設計・実行・性能検証を担える人材は引く手あまたです。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">データ基盤の構築</h3>
              <p className="text-sm text-blue-700">
                BigQuery・Snowflake・Redshift等を使った分析基盤の構築需要が拡大しています。DBエンジニアからデータエンジニアへのキャリアパスも広がっており、年収レンジの上限を押し上げます。
              </p>
            </div>
          </div>
        </section>

        {/* 求められる経験レベル */}
        <section id="level" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベル（求人要件の傾向）</h2>
          <div className="space-y-3">
            {[
              { t: "土台として求められやすい", d: "SQL（複雑なJOIN・Window関数・CTE）、正規化とインデックス設計、トランザクション・ロックの理解、実行計画の読み解き。" },
              { t: "DBAの中核として見られる", d: "バックアップ/リカバリ設計、レプリケーション・冗長構成、パフォーマンスチューニング、監視・キャパシティ管理の運用経験。" },
              { t: "差別化になる", d: "クラウドDB（Aurora/BigQuery/DynamoDB等）の運用・移行、TerraformでのDB環境のIaC化、データ基盤（dbt・Airflow・DWH）の経験。" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{item.t}</h3>
                <p className="text-sm text-slate-600">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* キャリアパス */}
        <section id="career" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キャリアパスの選択肢</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {careerPaths.map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 mb-1">{item.role}</h3>
                <p className="text-xs text-slate-500">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            運用の安定を担うDBAから、データ活用基盤を設計するデータエンジニア／データアーキテクトへ広げる流れが、年収レンジを伸ばしやすい王道です。
          </p>
        </section>

        {/* 求人の探し方 */}
        <section id="find" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の探し方（どのサービスが強いか）</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア（IT特化エージェント）</h3>
              <p className="text-sm text-slate-600 mb-2">IT/Web特化でインフラ・DB案件に強く、高年収求人比率が高い。クラウドDBやデータ基盤のポジションを扱い、技術理解のあるアドバイザーに相談しやすいのが利点です。</p>
              <Link href="/review/levtech/" className="text-sm text-blue-600 hover:underline">レバテックキャリアの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">マイナビIT AGENT</h3>
              <p className="text-sm text-slate-600 mb-2">SIer系企業のDBA求人を扱い、書類添削・面接対策が手厚いとの評判。20〜30代の若手〜中堅層のサポートに強みがあります。</p>
              <Link href="/review/mynavi-it/" className="text-sm text-blue-600 hover:underline">マイナビIT AGENTの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ（ハイクラス・スカウト型）</h3>
              <p className="text-sm text-slate-600 mb-2">年収750万円以上のハイクラス帯に強く、データアーキテクトやデータエンジニアのスカウトが届きやすい。市場価値を測る用途でも有効です。</p>
              <Link href="/review/bizreach-it/" className="text-sm text-blue-600 hover:underline">ビズリーチの詳細レビュー →</Link>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            複数併用の進め方は<Link href="/knowledge/multiple-agents/" className="text-blue-600 hover:underline">転職エージェントの複数併用ガイド</Link>、各社比較は<Link href="/compare/agents/" className="text-blue-600 hover:underline">IT転職エージェント比較</Link>もどうぞ。
          </p>
        </section>

        {/* アプリ開発からの転向ルート */}
        <section id="entry" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">アプリ開発からの転向ルート</h2>
          <div className="space-y-3">
            {[
              { n: "1", t: "現職でDB課題を取りに行く", d: "スロークエリの改善、インデックス設計の見直し、DB起因の障害対応など、アプリ開発の中でDBに踏み込んだ実績を作る。これが転向時の核になります。" },
              { n: "2", t: "運用面の知識を足す", d: "バックアップ/リカバリ、レプリケーション、監視、キャパシティ管理など、開発では触れにくい運用領域を学習・実践で補います。" },
              { n: "3", t: "クラウドDBで幅を出す", d: "Aurora・BigQuery等のクラウドDBを個人でも触り、IaCでの構築を経験する。オンプレ前提で止まらない見せ方が現代の求人に刺さります。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{item.n}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.t}</h3>
                  <p className="text-sm text-slate-600">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 30代・40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              データベースは<strong>障害対応・性能改善・移行の修羅場をくぐった経験</strong>がそのまま価値になる、30代・40代に向いた領域です。新しい言語やフレームワークの習得速度では若手に分があっても、止められないシステムのデータを守り抜いた経験は、年齢を重ねた人ほど厚みが出ます。レバテック公表（2025年）でも年収は年代とともに上がる傾向で、積み上げが効く職種といえます。
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              注意点は、オンプレDB専任のまま止まると求人の幅が狭まりやすいこと。<strong>クラウドDBとデータ基盤に一歩踏み出しておく</strong>ことで、DBA→データエンジニア→データアーキテクトと年収レンジを伸ばす道が開けます。
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              年代別の市場感は<Link href="/age/40s/" className="text-blue-600 hover:underline">40代エンジニアの転職事情</Link>、年収の考え方は<Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代エンジニアの年収相場</Link>もどうぞ。
            </p>
          </div>
        </section>

        {/* 学習戦略 */}
        <section id="study" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルアップ・学習戦略</h2>
          <div className="space-y-3">
            {[
              { t: "土台：SQLと内部構造の理解", d: "Window関数・CTE・実行計画の読み解きを手に馴染ませ、インデックスやロックの内部挙動まで理解する。これが他職種との差になります。" },
              { t: "運用：止めない設計の経験", d: "バックアップ/リカバリ、レプリケーション、監視を実際に組む。可用性・整合性をどう担保するかを語れる状態を目指します。" },
              { t: "拡張：クラウドDB＋データ基盤", d: "Aurora・BigQuery等とdbt・Airflowを触り、データエンジニアリングへ橋を架ける。求人の幅と年収上限が広がります。" },
              { t: "証明：資格は金融系で効きやすい", d: "Oracle Master、AWS/GCPのDB・データ系認定は書類選考の目印に。とくに金融系の転職で評価されやすい傾向です。" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{item.t}</h3>
                <p className="text-sm text-slate-600">{item.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            学び続ける習慣は<Link href="/knowledge/continuous-learning/" className="text-blue-600 hover:underline">エンジニアの継続学習</Link>、成果物の見せ方は<Link href="/knowledge/portfolio/" className="text-blue-600 hover:underline">ポートフォリオの作り方</Link>も参考になります。
          </p>
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
          <h2 className="text-xl font-bold mb-3">データベースのスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            DB/データエンジニアの求人に精通したIT特化型エージェントに登録して、年収アップの可能性を探りましょう。
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
              { name: "データサイエンティスト転職ガイド", href: "/skill/data-scientist/" },
              { name: "インフラエンジニア転職ガイド", href: "/skill/infrastructure/" },
              { name: "AWSエンジニア転職ガイド", href: "/skill/aws/" },
              { name: "AI・機械学習エンジニア転職ガイド", href: "/skill/ai-ml/" },
              { name: "40代エンジニアの転職事情", href: "/age/40s/" },
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
    </>
  );
}
