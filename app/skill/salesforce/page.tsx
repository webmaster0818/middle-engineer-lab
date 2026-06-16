import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE =
  "Salesforceエンジニア転職ガイド｜年収・資格・求人の探し方";
const PAGE_DESC =
  "Salesforceエンジニアの転職を年収データ・認定資格・求人の探し方まで解説。求人ボックスの公表年収やレバテック年代別データを出典付きで掲載。30代・40代の参入ルートとおすすめエージェントも紹介します。";

const toc = [
  { id: "conclusion", label: "結論：Salesforce転職の攻め方" },
  { id: "market", label: "市場・年収データ" },
  { id: "level", label: "求められる経験レベル" },
  { id: "career", label: "キャリアパスの選択肢" },
  { id: "find", label: "求人の探し方・強いエージェント" },
  { id: "entry", label: "経験浅めからの参入ルート" },
  { id: "mid", label: "30代・40代視点" },
  { id: "study", label: "スキルアップ・学習戦略" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const careerPaths = [
  {
    role: "Salesforce開発者（Developer）",
    note: "Apex・LWC（Lightning Web Components）・APIでのカスタマイズ開発。Java等の開発経験から移行しやすい入口。",
    cert: "Platform Developer I / II",
  },
  {
    role: "Salesforce管理者（Administrator）",
    note: "オブジェクト設計・権限・フロー・レポート構築など運用設計。業務側との橋渡し役。",
    cert: "認定アドミニストレーター",
  },
  {
    role: "導入コンサルタント",
    note: "要件定義・業務設計・プロジェクト推進。営業/CS/マーケの業務知識を掛け合わせると強い。",
    cert: "Sales Cloud / Service Cloud コンサルタント",
  },
  {
    role: "アーキテクト",
    note: "マルチクラウド連携・大規模設計・技術リード。Salesforce資格体系の最上位に位置づく領域。",
    cert: "認定アーキテクト（上位資格）",
  },
];

const certs = [
  {
    name: "Salesforce認定アドミニストレーター",
    desc: "設定・運用の基礎を証明する登竜門。開発職・コンサル職問わず最初に狙われることが多い。",
  },
  {
    name: "Platform Developer I / II",
    desc: "Apex・LWCを中心とした開発スキルの証明。開発者ポジションの応募で評価されやすい。",
  },
  {
    name: "Sales Cloud / Service Cloud コンサルタント",
    desc: "各クラウド製品の業務設計・導入スキル。コンサル職への移行で武器になる。",
  },
  {
    name: "認定アーキテクト系",
    desc: "資格体系の上位に位置づけられる難関領域。設計・技術リードを担うシニア層向け。",
  },
];

const faqs = [
  {
    q: "Salesforceエンジニアの年収はどれくらい？",
    a: "求人ボックスの給料ナビでは、Salesforceエンジニアの平均年収は約472万円（2025年1月時点・公表値）とされています。これは募集中の求人票を集計した値で、経験年数や認定資格の保有数、開発職かコンサル職かによって幅が大きい点に注意が必要です。年代別の目安としては、レバテックが公表する正社員SEの平均年収（2025年）で30代約499万円・40代約618万円というデータが参考になります。",
  },
  {
    q: "Salesforce認定資格は転職に有利？",
    a: "スキルを客観的に示せるため評価されやすい資格です。Salesforce認定資格は複数種類が体系化されており、上位資格も用意されています（Salesforce公式の認定制度より）。認定アドミニストレーターやPlatform Developer I/IIは、未経験寄りの応募でも学習意欲とスキルの裏付けとして見られやすい資格です。ただし資格だけでなく、実際の構築・運用経験を職務経歴書で具体的に示せるかが選考を左右します。",
  },
  {
    q: "Salesforce未経験でも転職できる？",
    a: "可能性はあります。SalesforceはTrailhead（公式の無料学習プラットフォーム）で体系的に学べるため、Java/Apex等の開発経験や、営業・カスタマーサポートなどの業務経験があれば、開発職・管理者職・コンサル職のいずれかの入口を狙えます。完全未経験よりは、既存スキルを掛け合わせて参入する方が現実的です。",
  },
  {
    q: "Salesforceの求人はどんな企業に多い？",
    a: "Salesforceの導入支援を手がけるパートナー企業（コンサルティング会社）、SaaS企業、金融機関や大手事業会社のDX部門などで募集が見られます。導入コンサルから開発・運用保守まで幅広いポジションがあり、業務知識と組み合わせると選択肢が広がります。",
  },
  {
    q: "Salesforceエンジニアの将来性は？",
    a: "CRM/SFA領域はDX推進の中核であり、導入企業の運用・改善ニーズは継続的に発生します。AI機能やSlack連携などエコシステムも拡大しています。一方で具体的な市場規模や成長率の断定は避けるべきで、求人動向は時期により変動します。最新の求人数は各エージェント・求人サイトで確認してください。",
  },
  {
    q: "Salesforceエンジニアにおすすめの転職エージェントは？",
    a: "IT/Web特化で高年収求人比率が高いとされるレバテックキャリア、提案スピードに定評があるGeekly、ハイクラス・スカウト型のビズリーチが候補です。専門性の高い求人は複数登録して比較するのが基本です。各社の評判や強みは当サイトのレビュー記事も参考にしてください。",
  },
  {
    q: "Salesforceエンジニアはしんどい・きつい？",
    a: "導入プロジェクトでは要件変更や納期に追われる場面もあり、業務理解と技術の両方を求められる点を負担に感じる人もいます。一方で運用・改善フェーズが中心のポジションは比較的安定しています。働き方は企業・案件で差が大きいため、面談で残業・体制・フェーズを具体的に確認しましょう。",
  },
];

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

export default function SalesforceSkillPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/skill/salesforce/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Salesforceエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Salesforceエンジニア転職ガイド｜年収・資格・求人の探し方
        </h1>
        <p className="text-slate-500 text-sm mb-4">
          最終更新: 2026年6月 | Salesforceスキルを軸にした転職市場の攻め方を解説
        </p>
        <p className="text-slate-600 leading-relaxed mb-2">
          SalesforceはCRM/SFA領域で広く使われるプラットフォームで、導入後のカスタマイズ・運用・改善を担えるエンジニアの需要が継続しています。求人DBサイトと同じ土俵で求人数を競うのではなく、本記事は「年収相場の捉え方」「認定資格の活かし方」「求人の探し方」という転職判断に必要な情報に絞って整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "求人ボックス 給料ナビ（2025年1月時点・公表値）",
            "Salesforce公式 認定制度",
            "レバテック 年代別平均年収（2025年）",
            "経済産業省 IT人材需給に関する調査（2019年3月公表）",
          ]}
        />

        {/* 目次 */}
        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-petrol-deep">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：Salesforce転職の攻め方</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              Salesforce転職は<strong>「認定資格でスキルを可視化しつつ、業務知識を掛け合わせる」</strong>のが基本戦略です。Java等の開発経験があれば開発者（Apex/LWC）、営業・CSなどの業務経験があれば管理者・コンサル職と、入口が複数あるのが特徴です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① 認定アドミニストレーターやPlatform Developer I/IIで学習意欲とスキルを示す</li>
              <li>② 開発・運用の実務経験を職務経歴書で具体的に書く（資格だけでは弱い）</li>
              <li>③ IT特化エージェントとハイクラス系を併用し、ポジションの種類を比較する</li>
            </ul>
          </div>
        </section>

        {/* 市場・年収データ */}
        <section id="market" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">市場・年収データ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Salesforceエンジニアの平均年収は、求人ボックスの給料ナビで<strong>約472万円（2025年1月時点・公表値）</strong>とされています。これは募集中の求人票を集計した値で、開発職・コンサル職の別、認定資格の保有数、経験年数によって実際の提示額は大きく振れます。年代別のレンジ感を掴むには、IT職全体の年代別データを併用するのが現実的です。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-slate-200">
              <thead>
                <tr className="bg-slate-50 text-slate-700">
                  <th className="border border-slate-200 px-3 py-2 text-left">区分</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">金額</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">出典・時点</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr>
                  <td className="border border-slate-200 px-3 py-2">Salesforceエンジニア平均</td>
                  <td className="border border-slate-200 px-3 py-2">約472万円</td>
                  <td className="border border-slate-200 px-3 py-2">求人ボックス給料ナビ（2025年1月時点・公表値）</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">正社員SE 30代（参考）</td>
                  <td className="border border-slate-200 px-3 py-2">約499万円</td>
                  <td className="border border-slate-200 px-3 py-2">レバテック 年代別平均年収（2025年）</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">正社員SE 40代（参考）</td>
                  <td className="border border-slate-200 px-3 py-2">約618万円</td>
                  <td className="border border-slate-200 px-3 py-2">レバテック 年代別平均年収（2025年）</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">IT・通信の平均決定年収</td>
                  <td className="border border-slate-200 px-3 py-2">486万円</td>
                  <td className="border border-slate-200 px-3 py-2">doda 2024年度決定年収レポート（2025年5月公表）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed">
            背景として、経済産業省「IT人材需給に関する調査」（2019年3月公表）では、2030年に最大約79万人のIT人材不足が試算されています（同調査の試算値）。CRM/SFAのようなDX中核領域は、こうした人材不足の影響を受けやすい分野です。求人数そのものは時期変動が大きいため、最新値は各エージェントで確認してください。
          </p>
        </section>

        {/* 経験レベル */}
        <section id="level" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベル（求人要件の傾向）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            求人票に共通して見られる要件の傾向を整理すると、おおむね次のように分かれます。実際の要件は企業・ポジションで異なるため、目安として捉えてください。
          </p>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">ジュニア／第二新卒〜実務2年程度</h3>
              <p className="text-sm text-slate-600">認定アドミニストレーターやTrailheadの学習実績、簡単な設定・カスタマイズ経験。ポテンシャル採用枠で評価されやすい。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">ミドル（実務3〜7年）</h3>
              <p className="text-sm text-slate-600">Apex/LWC開発の実務、複数オブジェクトの設計、外部システム連携の経験。30代の中心レンジ。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">シニア／リード</h3>
              <p className="text-sm text-slate-600">マルチクラウド設計、導入コンサルや要件定義のリード、チームマネジメント。アーキテクト系資格があると強い。</p>
            </div>
          </div>
        </section>

        {/* キャリアパス */}
        <section id="career" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キャリアパスの選択肢</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Salesforce人材のキャリアは「開発」「管理（運用設計）」「コンサル」「アーキテクト」に大別できます。どの入口から入っても、後から隣接領域に広げられるのが強みです。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {careerPaths.map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{item.role}</h3>
                <p className="text-xs text-petrol font-medium mb-2">関連資格: {item.cert}</p>
                <p className="text-sm text-slate-600">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 求人の探し方 */}
        <section id="find" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の探し方・強いエージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Salesforce求人は専門性が高く、担当者の業界理解で提案の質が変わります。タイプの異なる3社を併用し、開発職・コンサル職・ハイクラスのそれぞれを比較するのがおすすめです。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">
                <Link href="/review/levtech/" className="text-petrol-deep hover:underline">レバテックキャリア</Link>
              </h3>
              <p className="text-sm text-slate-600">IT/Web特化。利用者の多くが20〜30代で、高年収求人の比率が高いとされる（同社ガイド記事）。開発寄りのSalesforce求人を探しやすい。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">
                <Link href="/review/geekly/" className="text-petrol-deep hover:underline">Geekly（ギークリー）</Link>
              </h3>
              <p className="text-sm text-slate-600">IT/Web/ゲーム特化で提案スピードに定評。年収アップ率約81%・平均上昇額約76万円（2025年9月時点・公表値）との二次情報がある。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">
                <Link href="/review/bizreach-it/" className="text-petrol-deep hover:underline">ビズリーチ</Link>
              </h3>
              <p className="text-sm text-slate-600">ハイクラス・スカウト型。コンサル/アーキテクトなど高年収帯のSalesforce案件に出会いやすい。市場価値の客観把握にも使える。</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4 text-sm">
            複数登録の使い分けは<Link href="/compare/agents/" className="text-petrol hover:underline">エージェント比較</Link>、年収アップを狙う併用法は<Link href="/compare/salary-ranking/" className="text-petrol hover:underline">年収アップ実績で選ぶ</Link>も参考にしてください。
          </p>
        </section>

        {/* 参入ルート */}
        <section id="entry" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験浅めからの参入ルート</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Salesforceは未経験寄りでも入口を作りやすいスキルです。次のステップで「学習→可視化→実務」の橋渡しを設計しましょう。
          </p>
          <ol className="space-y-3">
            {[
              { t: "Trailheadで基礎を学ぶ", d: "公式の無料学習プラットフォームでバッジ・スーパーバッジを取得し、Trailblazerプロフィールを育てる。" },
              { t: "認定アドミニストレーターを取得", d: "まずは運用設計の基礎資格を取り、書類で学習成果を示せる状態にする。" },
              { t: "既存スキルを掛け合わせる", d: "開発経験ならApex/LWC、営業・CS経験なら業務設計と組み合わせて訴求する。" },
              { t: "パートナー企業の育成枠を狙う", d: "導入支援企業は研修体制が整っていることが多く、実務経験を積む入口になりやすい。" },
            ].map((s, i) => (
              <li key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{i + 1}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{s.t}</h3>
                  <p className="text-sm text-slate-600">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* 30代40代視点 */}
        <section id="mid" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              30代・40代のミドル層にとってSalesforceは、<strong>これまでの業務知識を技術と接続できる</strong>点で相性が良いスキルです。営業・経理・カスタマーサポートなどの実務を理解していること自体が、要件定義・運用設計で武器になります。若手との純粋なコーディング速度勝負ではなく、業務×技術の総合力で評価される領域です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・前職の業務ドメイン（金融・製造・小売など）を「活かせる強み」として明文化する</li>
              <li>・マネジメント経験があれば導入PM/コンサルのポジションも視野に入る</li>
              <li>・レバテック公表値で40代SE平均は約618万円（2025年）。資格＋実務で上振れを狙える</li>
            </ul>
            <p className="text-slate-600 text-sm mt-3">
              年代別の相場感は<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職事情</Link>、市場価値の整理は<Link href="/knowledge/market-value/" className="text-petrol hover:underline">自分の市場価値の調べ方</Link>もあわせてどうぞ。
            </p>
          </div>
        </section>

        {/* 学習戦略 */}
        <section id="study" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルアップ・学習戦略</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Salesforceの学習は資格体系が明確なので、ロードマップを描きやすいのが利点です。主な認定資格の位置づけを押さえておきましょう。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {certs.map((c, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{c.name}</h3>
                <p className="text-sm text-slate-600">{c.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            Salesforce認定資格は複数種類が体系化され、上位資格も用意されています（Salesforce公式の認定制度より）。資格の有無だけでなく、Trailheadの実績や個人で構築したデモ環境を見せられると、学習の継続性を示せます。継続学習の習慣化は<Link href="/knowledge/continuous-learning/" className="text-petrol hover:underline">エンジニアの学習を続けるコツ</Link>も参考にしてください。
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12 scroll-mt-20">
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
          <h2 className="text-xl font-bold mb-3">Salesforceのスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            Salesforce求人に精通したIT特化型エージェントに登録して、年収アップの可能性を探りましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "SAPエンジニア転職ガイド", href: "/skill/sap/" },
              { name: "Java転職ガイド", href: "/skill/java/" },
              { name: "レバテックキャリアの評判", href: "/review/levtech/" },
              { name: "自分の市場価値の調べ方", href: "/knowledge/market-value/" },
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
    
      <section className="mx-auto max-w-3xl px-4 pb-10">
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
          <h2 className="font-bold text-slate-900 mb-2">この技術と関連の深い掲載企業</h2>
          <p className="text-xs text-slate-500 mb-2">各社の公開技術情報でこの技術への言及が確認できた掲載企業です。年収・選考は各社ページをご覧ください。</p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-sm"><li><a href="/company/accenture/" className="text-petrol-deep hover:underline">アクセンチュア</a></li></ul>
          <p className="mt-3 text-sm"><a href="/skill/" className="text-petrol-deep hover:underline">スキル別ガイド一覧</a> ／ <a href="/salary/company-ranking/" className="text-petrol-deep hover:underline">企業年収ランキング</a></p>
        </div>
      </section>
      </>
  );
}
