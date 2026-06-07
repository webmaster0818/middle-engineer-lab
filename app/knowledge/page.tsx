import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "エンジニア転職お役立ちガイド一覧【50記事】テーマ別",
  description:
    "書類・面接・年収・エージェント活用・転職プロセス・働き方・悩み・属性別まで、30代40代エンジニアの転職に役立つ全50記事をテーマ別に整理。転職ステージ別の読む順番も解説します。",
};

const knowledgeCategories = [
  {
    category: "書類・自己PR",
    intro: "選考突破の起点となる書類づくり。経歴の棚卸しから見せ方まで。",
    items: [
      { name: "職務経歴書の書き方", href: "/knowledge/resume/", desc: "テンプレート付き完全ガイド。Before/After例文あり。" },
      { name: "ポートフォリオ作成ガイド", href: "/knowledge/portfolio/", desc: "書類選考を突破するための見せ方のコツ。" },
      { name: "自己分析のやり方", href: "/knowledge/self-analysis/", desc: "強み・志向を言語化してPR軸を固める。" },
      { name: "市場価値の調べ方", href: "/knowledge/market-value/", desc: "自分の経歴が今いくらで評価されるかを把握。" },
      { name: "LinkedIn活用術", href: "/knowledge/linkedin/", desc: "スカウトを呼び込むプロフィールの整え方。" },
      { name: "サイドプロジェクトの活かし方", href: "/knowledge/side-project/", desc: "個人開発を職務経歴で武器に変える。" },
    ],
  },
  {
    category: "面接対策",
    intro: "技術・行動・実技まで、面接形式ごとの準備ポイント。",
    items: [
      { name: "技術面接対策ガイド", href: "/knowledge/tech-interview/", desc: "よく聞かれる質問と回答の組み立て方。" },
      { name: "行動面接（ビヘイビア）対策", href: "/knowledge/behavioral/", desc: "STARフレームワークでエピソードを構造化。" },
      { name: "コーディングテスト対策", href: "/knowledge/coding-test/", desc: "出題傾向と当日までの準備計画。" },
      { name: "システムデザイン面接", href: "/knowledge/system-design/", desc: "設計力を問う面接の進め方と頻出論点。" },
    ],
  },
  {
    category: "年収・条件交渉",
    intro: "年代別の相場観と、年収を最大化するための交渉知識。",
    items: [
      { name: "30代エンジニアの年収相場", href: "/knowledge/salary-30s/", desc: "言語・職種・経験年数別に相場を分析。" },
      { name: "40代エンジニアの年収戦略", href: "/knowledge/salary-40s/", desc: "年収維持・アップを実現する考え方。" },
      { name: "転職で年収は上がる？", href: "/knowledge/salary-change/", desc: "年収アップの実態を公的データで確認。" },
      { name: "年収交渉テクニック", href: "/knowledge/salary-negotiation/", desc: "オファー後に条件を引き上げる進め方。" },
      { name: "複数オファーの比較方法", href: "/knowledge/offer-compare/", desc: "年収だけで決めないための比較軸。" },
      { name: "カウンターオファーへの対応", href: "/knowledge/counter-offer/", desc: "現職からの引き止めにどう向き合うか。" },
    ],
  },
  {
    category: "エージェント・求人探し",
    intro: "エージェントの選び方・使い方から、直接応募・スカウトまで。",
    items: [
      { name: "IT転職エージェントの選び方", href: "/knowledge/how-to-choose/", desc: "失敗しない5つのチェックポイント。" },
      { name: "エージェントは複数登録すべき？", href: "/knowledge/multiple-agents/", desc: "3社併用が基本とされる理由。" },
      { name: "エージェント初回面談の準備", href: "/knowledge/agent-first-meeting/", desc: "初回で伝えるべきこと・聞くべきこと。" },
      { name: "エージェントに断られたら", href: "/knowledge/agent-rejection/", desc: "登録を断られたときの原因と対処。" },
      { name: "スカウトサービスの使い方", href: "/knowledge/scout/", desc: "スカウト型で効率的に求人を集める。" },
      { name: "直接応募という選択肢", href: "/knowledge/direct-apply/", desc: "エージェントを使わない応募の是非。" },
      { name: "リファラル採用の活かし方", href: "/knowledge/referral/", desc: "知人経由の転職のメリットと注意点。" },
    ],
  },
  {
    category: "転職プロセス・スケジュール",
    intro: "計画立案から退職・入社後の立ち上がりまでの全工程。",
    items: [
      { name: "転職スケジュール", href: "/knowledge/timeline/", desc: "3ヶ月で内定を取るための計画表。" },
      { name: "キャリアプランの立て方", href: "/knowledge/career-plan/", desc: "中長期の目標から逆算する設計法。" },
      { name: "退職の進め方", href: "/knowledge/resignation/", desc: "引き止め対策・引き継ぎの実務ガイド。" },
      { name: "入社後の立ち上がり方", href: "/knowledge/onboarding/", desc: "新環境でスムーズに馴染むコツ。" },
      { name: "入社後90日プラン", href: "/knowledge/first-90days/", desc: "最初の90日で信頼を築く動き方。" },
      { name: "試用期間の注意点", href: "/knowledge/probation/", desc: "試用期間で評価される行動と落とし穴。" },
    ],
  },
  {
    category: "働き方・キャリア観",
    intro: "雇用形態・働く場所・ワークライフバランスの選択肢。",
    items: [
      { name: "フリーランスvs正社員", href: "/knowledge/freelance-vs-fulltime/", desc: "ミドルはどちらが得かを比較。" },
      { name: "リモートワーク転職", href: "/knowledge/remote-work/", desc: "フルリモート求人の探し方と現実。" },
      { name: "ワークライフバランス", href: "/knowledge/work-life-balance/", desc: "働き方を軸にした転職先の選び方。" },
      { name: "スタートアップvs大企業", href: "/knowledge/startup-vs-enterprise/", desc: "規模で変わる働き方とリスク。" },
      { name: "マネジメントへの道", href: "/knowledge/management/", desc: "プレイヤーから管理職への移行。" },
      { name: "継続的な学習戦略", href: "/knowledge/continuous-learning/", desc: "働きながらスキルを伸ばす方法。" },
    ],
  },
  {
    category: "悩み・メンタル",
    intro: "転職にまつわる不安・後悔・燃え尽きとの向き合い方。",
    items: [
      { name: "転職のモチベーション維持", href: "/knowledge/motivation/", desc: "活動を続ける気持ちの保ち方。" },
      { name: "転職の後悔を防ぐには", href: "/knowledge/regret/", desc: "後悔しがちなパターンと回避策。" },
      { name: "バーンアウト（燃え尽き）対策", href: "/knowledge/burnout/", desc: "消耗した状態からの立て直し。" },
      { name: "インポスター症候群", href: "/knowledge/imposter-syndrome/", desc: "「自分なんて」と感じる心理への対処。" },
      { name: "転職回数は多いと不利？", href: "/knowledge/job-hopping/", desc: "回数が多くても評価されるための見せ方。" },
    ],
  },
  {
    category: "属性・ライフステージ別",
    intro: "年代・家庭・海外経験など、立場ごとの転職事情。",
    items: [
      { name: "30代未経験からの転職", href: "/knowledge/inexperienced-30s/", desc: "成功パターンと現実的な注意点。" },
      { name: "40代エンジニア転職の現実", href: "/knowledge/40s-reality/", desc: "データで見る実態と成功戦略。" },
      { name: "年齢による不利は本当か", href: "/knowledge/age-discrimination/", desc: "年齢ハードルの実態と乗り越え方。" },
      { name: "セカンドキャリアの設計", href: "/knowledge/second-career/", desc: "ミドル以降の新たなキャリアの作り方。" },
      { name: "家庭と両立する転職", href: "/knowledge/family/", desc: "家族がいる人の意思決定と進め方。" },
      { name: "女性エンジニアの転職", href: "/knowledge/woman-engineer/", desc: "女性ならではの観点とキャリア設計。" },
      { name: "障害のある人の転職", href: "/knowledge/disability/", desc: "配慮事項と働きやすい環境の探し方。" },
      { name: "海外で働くという選択", href: "/knowledge/overseas/", desc: "海外エンジニア就労の現実と準備。" },
      { name: "日本へ帰国してのキャリア", href: "/knowledge/return-japan/", desc: "海外経験を活かした帰国後の転職。" },
      { name: "UI/UXキャリアの考え方", href: "/knowledge/uiux/", desc: "デザイン領域への関わり方とキャリア。" },
    ],
  },
];

const allKnowledge = knowledgeCategories.flatMap((c) => c.items);

const toc = [
  { id: "guide", label: "転職ステージ別の読む順番" },
  ...knowledgeCategories.map((c, i) => ({ id: `cat-${i}`, label: c.category })),
];

export default function KnowledgeIndexPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "エンジニア転職お役立ちガイド一覧",
    description:
      "書類・面接・年収・エージェント活用・プロセス・働き方・悩み・属性別まで、30代40代エンジニアの転職に役立つ全50記事をテーマ別に整理した一覧。",
    url: "https://middle-engineer.com/knowledge/",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: allKnowledge.length,
      itemListElement: allKnowledge.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://middle-engineer.com${item.href}`,
        name: item.name,
      })),
    },
  };

  return (
    <>
      <ArticleJsonLd
        title="エンジニア転職お役立ちガイド一覧【50記事】テーマ別"
        description="書類・面接・年収・エージェント活用・プロセス・働き方・悩み・属性別まで、全50記事をテーマ別に整理した一覧。"
        url="/knowledge/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "お役立ちガイド" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エンジニア転職お役立ちガイド一覧【50記事】
        </h1>
        <p className="text-slate-600 leading-relaxed mb-4">
          30代・40代エンジニアの転職活動に必要な知識を、全{allKnowledge.length}記事・8テーマに整理しました。書類づくりや面接対策といった実務から、年収交渉、エージェント活用、転職後の立ち上がり、悩みやライフステージ別の事情まで、転職の全工程をカバーしています。今のフェーズに合うテーマから読み進めてください。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={["厚生労働省 job tag", "doda・レバテック公表値", "各サービス公式サイト"]}
        />

        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月</p>

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2 text-sm grid grid-cols-1 sm:grid-cols-2">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-blue-600 hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ガイド: 転職ステージ別の読む順番 */}
        <section id="guide" className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            転職ステージ別の読む順番
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            記事は数が多いため、今いるステージに合わせて読むと迷いません。転職活動は大きく4つの段階に分かれます。
          </p>
          <ol className="space-y-4 text-slate-600 leading-relaxed list-decimal pl-5">
            <li>
              <span className="font-medium text-slate-700">準備期（情報収集・自己整理）</span>
              <br />
              まずは
              <Link href="/knowledge/market-value/" className="text-blue-600 hover:underline">市場価値の調べ方</Link>
              と
              <Link href="/knowledge/self-analysis/" className="text-blue-600 hover:underline">自己分析</Link>
              で現在地を把握し、
              <Link href="/knowledge/career-plan/" className="text-blue-600 hover:underline">キャリアプラン</Link>
              で方向性を決めます。年代に不安がある人は
              <Link href="/knowledge/age-discrimination/" className="text-blue-600 hover:underline">年齢による不利</Link>
              の記事も先に。
            </li>
            <li>
              <span className="font-medium text-slate-700">応募準備期（書類・エージェント）</span>
              <br />
              <Link href="/knowledge/resume/" className="text-blue-600 hover:underline">職務経歴書</Link>
              と
              <Link href="/knowledge/portfolio/" className="text-blue-600 hover:underline">ポートフォリオ</Link>
              を整え、
              <Link href="/knowledge/how-to-choose/" className="text-blue-600 hover:underline">エージェントの選び方</Link>
              ・
              <Link href="/knowledge/multiple-agents/" className="text-blue-600 hover:underline">複数登録</Link>
              で求人ルートを確保します。
            </li>
            <li>
              <span className="font-medium text-slate-700">選考期（面接・交渉）</span>
              <br />
              <Link href="/knowledge/tech-interview/" className="text-blue-600 hover:underline">技術面接</Link>
              ・
              <Link href="/knowledge/behavioral/" className="text-blue-600 hover:underline">行動面接</Link>
              の対策を進め、内定が出たら
              <Link href="/knowledge/salary-negotiation/" className="text-blue-600 hover:underline">年収交渉</Link>
              と
              <Link href="/knowledge/offer-compare/" className="text-blue-600 hover:underline">オファー比較</Link>
              で条件を確定します。
            </li>
            <li>
              <span className="font-medium text-slate-700">移行期（退職・入社後）</span>
              <br />
              <Link href="/knowledge/resignation/" className="text-blue-600 hover:underline">退職の進め方</Link>
              で円満に引き継ぎ、
              <Link href="/knowledge/first-90days/" className="text-blue-600 hover:underline">入社後90日プラン</Link>
              で新環境に早く馴染みます。
            </li>
          </ol>
        </section>

        {/* カテゴリ別 */}
        {knowledgeCategories.map((group, gi) => (
          <section key={gi} id={`cat-${gi}`} className="mb-10">
            <h2 className="text-xl font-bold text-slate-800 mb-2 pb-2 border-b border-slate-200">
              {group.category}
            </h2>
            <p className="text-sm text-slate-600 mb-4">{group.intro}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {group.items.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors group"
                >
                  <h3 className="font-bold text-slate-800 text-sm group-hover:text-blue-600 transition-colors">{item.name}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">転職活動を始める準備はできましたか？</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントに登録して、プロのサポートを受けながら転職活動を進めましょう。全て無料です。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連コンテンツ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "スキル別転職ガイド一覧", href: "/skill/" },
              { name: "キャリアパス別転職ガイド一覧", href: "/career/" },
              { name: "企業別エンジニア転職ガイド一覧", href: "/company/" },
              { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
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
