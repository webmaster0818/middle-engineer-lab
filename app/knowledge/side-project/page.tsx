import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "副業しながら転職活動｜就業規則の確認・実績の活かし方・時間管理",
  description:
    "副業しながら転職活動するエンジニア向けガイド。就業規則の確認方法、副業実績を職務経歴書・面接でアピールする方法、両立のための時間管理を30代・40代向けに解説します。",
};

const faqs = [
  {
    q: "副業しながら転職活動はできる？",
    a: "可能です。副業で得たスキルや実績は転職活動の強いアピール材料になります。ただし、まず現職の就業規則で副業が認められているか、競業避止や利益相反の規定に抵触しないかを確認することが前提です。確認を飛ばして始めると、現職とのトラブルにつながる可能性があります。",
  },
  {
    q: "現職の就業規則はどこを確認すればいい？",
    a: "「副業・兼業の可否」「許可制か届出制か」「競業避止義務」「秘密保持」の4点を確認します。社内ポータルの就業規則や、人事に問い合わせて確認しましょう。許可制の場合は、無断で始めず所定の手続きを取ることが重要です。",
  },
  {
    q: "副業で得た経験は職務経歴書に書ける？",
    a: "書けます。副業でのプロジェクト経験・使用技術・役割・成果は本業と同様に記載できます。特に本業で使わない技術スタックの経験は、スキルの幅広さを示す材料になります。守秘義務に触れる固有名詞や数値は伏せ、一般化して書くのがポイントです。",
  },
  {
    q: "副業の実績はどうアピールすると効果的？",
    a: "「課題→自分の役割→とった行動→結果」の順で、本業の経験と同じ粒度で具体的に語るのが効果的です。GitHubのリポジトリや公開記事など、確認できる成果物があれば説得力が増します。誇張せず、再現性のある形で語ることが信頼につながります。",
  },
  {
    q: "副業と転職活動の時間管理のコツは？",
    a: "面接は日程が固定されるため最優先で押さえ、副業は自分のペースで調整できるものを選ぶのが基本です。平日夜と週末で「本業・副業・転職活動」のブロックを分け、無理のない範囲で回しましょう。体調を崩すと全てが止まるため、休む時間も計画に入れることが重要です。",
  },
  {
    q: "副業がきっかけで転職先が見つかることはある？",
    a: "あります。副業で関わった企業から正社員の打診を受けるケースや、副業を通じて築いた人脈から紹介を受けるケースがあります。リファラル（紹介）経由の転職については別記事も参考にしてください。",
  },
  {
    q: "転職後も副業を続けられる？",
    a: "転職先の就業規則によります。副業を認める企業もあれば、許可制や一部禁止の企業もあります。面接時や内定後に「入社後も副業を続けたい」旨を伝え、条件を書面で確認しておくと安心です。競合での副業は禁止されているケースが一般的です。",
  },
];

const sideProjects = [
  { type: "技術ブログ・登壇", merit: "技術力のアウトプット、説明力・言語化力の証明、検索やSNSで成果が可視化される" },
  { type: "OSS活動・個人開発", merit: "GitHubでの実績可視化、設計・実装の質を直接見せられる、コミュニティでの評価" },
  { type: "受託開発（個人）", merit: "実務に近い経験、要件定義からデリバリーまでの一連の経験、クライアントワーク力" },
  { type: "技術顧問・スポット支援", merit: "マネジメント・技術選定の経験、短時間で価値を出す力の証明" },
  { type: "教材作成・メンタリング", merit: "教える力・ドキュメント化力、知識を体系化する力" },
];

const checkRules = [
  "就業規則で副業の可否（禁止／許可制／届出制／自由）を確認した",
  "競業避止義務・秘密保持義務の規定を確認した",
  "許可制の場合、所定の手続き（申請・届出）を済ませた",
  "現職の機密情報・成果物を副業に流用していない",
  "競合他社・利益相反になる相手との副業を避けている",
  "副業収入が年20万円を超える場合の確定申告を把握している",
];

const beforeAfter = [
  {
    label: "Before（漠然とした書き方）",
    bad: true,
    text: "副業で個人開発を行い、Webアプリを作成しました。",
  },
  {
    label: "After（成果と役割を具体化）",
    bad: false,
    text: "副業として個人でSaaS型の業務管理ツールを設計・開発・運用（フロントReact/TypeScript、バックエンドNode.js、AWS）。要件定義からリリース、運用改善まで一人で担当し、継続的にユーザーからのフィードバックを反映。ソースの一部はGitHubで公開。",
  },
];

const schedule = [
  { time: "平日（日中）", task: "本業に集中。昼休みにエージェントとのメッセージ確認・返信のみ行う。" },
  { time: "平日（夜）", task: "副業作業のブロックを設定（例：20:00〜22:00を週数日）。無理のないペースで。" },
  { time: "土曜", task: "午前は職務経歴書の更新・面接対策、午後は企業研究・カジュアル面談に充てる。" },
  { time: "日曜", task: "完全オフ、または副業のまとまった作業。休息も計画に含める。" },
];

export default function SideProjectPage() {
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
        title="副業しながら転職活動｜就業規則の確認・実績の活かし方・時間管理"
        description="副業しながら転職活動するエンジニア向けに、就業規則の確認方法、副業実績のアピール方法、時間管理を解説します。"
        url="/knowledge/side-project/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "副業しながら転職活動" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          副業しながら転職活動｜就業規則の確認・実績の活かし方・時間管理
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 副業×転職活動の両立ガイド
        </p>

        <DataNote surveyedAt="2026年6月" />

        {/* 結論ファースト */}
        <section className="mb-10">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：①就業規則を確認 → ②実績を職務経歴書・面接で具体化 → ③面接を最優先に時間配分</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-2">
              副業は転職活動の強い武器になります。ただし進め方には順序があります。<strong>まず現職の就業規則で副業の可否・競業避止・秘密保持を確認</strong>し、問題なければ<strong>副業の成果を本業と同じ粒度で具体的にアピール</strong>します。両立中は<strong>日程が固定される面接を最優先</strong>に時間を配分しましょう。
            </p>
            <p className="text-sm text-blue-900 leading-relaxed">
              副業収入の金額は案件内容や稼働量で大きく異なるため、本記事では具体的な金額の断定は避け、進め方と注意点に絞って解説します。
            </p>
          </div>
        </section>

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ul className="space-y-2 text-sm text-petrol-deep">
            <li><a href="#rule" className="hover:underline">まず確認：現職の就業規則と注意点</a></li>
            <li><a href="#merit" className="hover:underline">副業が転職活動に効く理由</a></li>
            <li><a href="#appeal" className="hover:underline">副業実績のアピール方法（記入見本）</a></li>
            <li><a href="#schedule" className="hover:underline">両立のための時間管理</a></li>
            <li><a href="#after" className="hover:underline">転職後の副業継続と確認事項</a></li>
            <li><a href="#middle" className="hover:underline">30代・40代視点での副業×転職</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問</a></li>
          </ul>
        </nav>

        {/* 就業規則 */}
        <section id="rule" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">まず確認：現職の就業規則と注意点</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            副業を始める前に必ず確認したいのが現職の就業規則です。トラブルを避けるため、以下の4点を確認しましょう。
          </p>
          <div className="space-y-4 mb-6">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">1. 副業の可否（禁止／許可制／届出制／自由）</h3>
              <p className="text-sm text-slate-600">許可制なら、無断で始めず所定の申請手続きを取る。届出制なら届け出を忘れない。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">2. 競業避止義務</h3>
              <p className="text-sm text-slate-600">競合他社や同種事業での副業が制限されていないか確認する。利益相反になる相手は避ける。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">3. 秘密保持義務</h3>
              <p className="text-sm text-slate-600">本業の機密情報・ソースコード・顧客情報を副業に流用しない。これは規則の有無に関わらず厳守。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">4. 確定申告・住民税</h3>
              <p className="text-sm text-slate-600">副業所得が年20万円を超える場合は確定申告が必要。税の取り扱いは状況により異なるため、不安な場合は税務署や税理士に確認する。</p>
            </div>
          </div>
          <h3 className="font-bold text-slate-800 mb-3">就業規則チェックリスト</h3>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <ul className="space-y-3">
              {checkRules.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="text-petrol font-bold shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* メリット */}
        <section id="merit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">副業が転職活動に効く理由</h2>
          <div className="space-y-4 mb-6">
            {[
              { num: "1", title: "スキルの幅が広がる", desc: "本業で使わない技術を副業で経験できる。例：本業はJava、副業はReact/TypeScript。スキルの掛け合わせで市場価値が上がる。" },
              { num: "2", title: "確認できる実績が増える", desc: "副業の成果物やGitHub実績は、書類選考・面接で差別化材料になる。第三者が確認できる形の実績は説得力が高い。" },
              { num: "3", title: "焦らず判断できる", desc: "副業収入があると、転職活動中も精神的な余裕を持てる。妥協した転職を避け、納得感のある意思決定につながる。" },
              { num: "4", title: "企業文化を体験できる", desc: "副業先での働き方を通じて、その企業の文化を事前に体験できる。そのまま正社員転職につながるケースもある。" },
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
          <h3 className="font-bold text-slate-800 mb-3">転職に活きやすい副業タイプ</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">副業タイプ</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">転職活動でのメリット</th>
                </tr>
              </thead>
              <tbody>
                {sideProjects.map((p, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-3 py-3 border border-slate-200 font-medium">{p.type}</td>
                    <td className="px-3 py-3 border border-slate-200">{p.merit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 報酬額は案件内容・稼働量・契約形態で大きく異なります。金額は個別に確認してください。</p>
        </section>

        {/* アピール方法（記入見本） */}
        <section id="appeal" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">副業実績のアピール方法（記入見本）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            副業実績は「書き方」で印象が大きく変わります。漠然とした記述ではなく、課題・役割・行動・成果を本業と同じ粒度で具体化しましょう。守秘義務に触れる固有名詞・数値は一般化して書きます。
          </p>
          <div className="space-y-4 mb-6">
            {beforeAfter.map((ex, i) => (
              <div
                key={i}
                className={`rounded-lg p-5 border ${ex.bad ? "bg-red-50 border-red-200" : "bg-green-50 border-green-200"}`}
              >
                <p className={`font-bold mb-2 ${ex.bad ? "text-red-800" : "text-green-800"}`}>{ex.label}</p>
                <p className={`text-sm ${ex.bad ? "text-red-700" : "text-green-700"}`}>{ex.text}</p>
              </div>
            ))}
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="font-bold text-slate-800 mb-3">面接で副業を語るときの型（STAR法）</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><strong>S（状況）</strong>：どんな依頼・課題だったか</li>
              <li><strong>T（役割）</strong>：自分が担った役割・責任範囲</li>
              <li><strong>A（行動）</strong>：技術選定・設計・実装など具体的にとった行動</li>
              <li><strong>R（結果）</strong>：リリース・改善・継続利用など得られた成果</li>
            </ul>
            <p className="text-xs text-slate-500 mt-3">※ 守秘義務のある内容は「業務管理SaaS」など一般化した表現に置き換えて語る。</p>
          </div>
        </section>

        {/* 時間管理 */}
        <section id="schedule" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">両立のための時間管理</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            本業・副業・転職活動を同時に回すには、優先順位の固定と時間ブロックの分割がカギです。以下は一例で、自分の生活リズムに合わせて調整しましょう。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-4">
            <div className="space-y-3 text-sm">
              {schedule.map((row, i) => (
                <div key={i} className="grid grid-cols-[110px_1fr] gap-2">
                  <span className="font-medium text-slate-700">{row.time}</span>
                  <span className="text-slate-600">{row.task}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-4">※ 面接日程が入ったら副業を調整し、面接を最優先にしましょう。</p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <h3 className="font-bold text-amber-900 mb-2">時間管理で崩れやすいポイント</h3>
            <ul className="space-y-2 text-sm text-amber-900">
              <li>- 副業を詰め込みすぎて面接準備の時間が取れなくなる</li>
              <li>- 睡眠を削って体調を崩し、全ての活動が止まる</li>
              <li>- 副業の納期と面接が重なりパフォーマンスが落ちる</li>
              <li>- 休息日を確保せず、判断力が鈍る</li>
            </ul>
          </div>
        </section>

        {/* 転職後の副業継続 */}
        <section id="after" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職後の副業継続と確認事項</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">面接・内定後に条件を確認する</h3>
              <p className="text-sm text-petrol-deep">入社後も副業を続けたい場合は、面接や内定承諾前に「副業の可否」「許可制か」「競業の範囲」を確認し、可能なら書面で残しておきましょう。条件比較は<Link href="/knowledge/offer-compare/" className="text-petrol hover:underline">オファー比較ガイド</Link>も参考に。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">転職先には正直に伝える</h3>
              <p className="text-sm text-petrol-deep">副業の有無は隠さず伝え、得たスキルを前向きに説明するのが基本。隠して後から発覚するより、最初に共有して条件をすり合わせる方が信頼につながります。</p>
            </div>
          </div>
        </section>

        {/* 30代・40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代視点での副業×転職</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：スキルの掛け算で市場価値を上げる</h3>
              <p className="text-sm text-petrol-deep">本業の専門性に、副業で別領域の経験を掛け合わせることで差別化できる世代。育児等で時間に制約がある場合は、短時間で成果が見える技術ブログやOSSから始めるのも手。市場価値の測り方は<Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の調べ方</Link>を参照。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：マネジメント・技術顧問の経験を実績化</h3>
              <p className="text-sm text-petrol-deep">技術顧問やスポット支援など、これまでの経験を活かせる副業は40代と相性が良い。組織づくり・技術選定の経験を実績として言語化すると、シニアポジションの選考で評価されやすい。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">健康と家庭への配慮を忘れない</h3>
              <p className="text-sm text-petrol-deep">30代・40代は体力・家庭の負荷が増える時期。副業・転職活動を詰め込みすぎると本業にも支障が出る。優先順位を決め、休息を計画に入れることが長期的な成功につながる。</p>
            </div>
          </div>
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
          <h2 className="text-xl font-bold mb-3">副業の実績を活かして転職しよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントに登録すれば、副業経験を評価してくれる企業を紹介してもらえます。
          </p>
          <Link
            href="/compare/agents/"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            IT転職エージェント比較を見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "ポートフォリオ作成ガイド", href: "/knowledge/portfolio/" },
              { name: "フリーランスvs正社員", href: "/knowledge/freelance-vs-fulltime/" },
              { name: "リファラル（紹介）転職の進め方", href: "/knowledge/referral/" },
              { name: "市場価値の調べ方", href: "/knowledge/market-value/" },
              { name: "リモートワーク求人の探し方", href: "/knowledge/remote-work/" },
              { name: "ワークライフバランス重視のIT転職", href: "/knowledge/work-life-balance/" },
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
