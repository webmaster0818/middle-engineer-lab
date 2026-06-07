import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "教育業界からEdTech転職【30代40代エンジニアガイド】",
  description:
    "教育業界エンジニアからEdTech領域への転職方法を解説。活かせるスキルと埋めるギャップ、転職パターン、年収の考え方、進め方を30代40代視点で紹介します。",
};

const TITLE = "教育業界からEdTech転職【30代40代エンジニアガイド】";
const DESC =
  "教育業界エンジニアからEdTech領域への転職方法を解説。活かせるスキルと埋めるギャップ、転職パターン、年収の考え方、進め方を30代40代視点で紹介します。";

const toc = [
  { id: "conclusion", label: "結論：教育ドメイン×ITは差別化しやすい" },
  { id: "trend", label: "EdTechのIT化・採用動向" },
  { id: "skills", label: "活かせるスキル／埋めるギャップ" },
  { id: "patterns", label: "転職パターン（職種×企業タイプ）" },
  { id: "fit", label: "向いている人／向いていない人" },
  { id: "resume", label: "職務経歴書での見せ方（Before/After）" },
  { id: "salary", label: "年収の考え方（公的データ）" },
  { id: "companies", label: "主な企業タイプと例" },
  { id: "howto", label: "転職の進め方" },
  { id: "routes", label: "経験浅めからの参入ルート" },
  { id: "pitfalls", label: "よくあるつまずきと対策" },
  { id: "midcareer", label: "30代・40代の視点" },
  { id: "faq", label: "よくある質問" },
];

const skillTable = [
  ["LMS・学習管理システムの業務知識", "そのまま活きる", "EdTechプロダクトの設計・要件定義で直接活きる"],
  ["カリキュラム設計・教材コンテンツ制作", "そのまま活きる", "学習体験（UX）の設計やコンテンツ開発で評価される"],
  ["学習データの扱い・教育評価の理解", "そのまま活きる", "アダプティブラーニングや効果測定の土台になる"],
  ["フロント／バックエンド開発（React・Python等）", "要習得", "Web系プロダクト開発はモダンスタックが前提"],
  ["データ分析（SQL / Python）", "要習得", "学習ログ分析・個別最適化のポジションで求められる"],
  ["AI/ML・動画配信・LTI連携の知識", "要習得", "AIチューターや学習ツール連携で差別化要素になる"],
];

const patternTable = [
  ["EdTechプロダクトエンジニア", "学習プラットフォーム・LMS開発", "Web開発＋教育ドメイン理解"],
  ["学習データアナリスト", "学習ログ分析・効果測定・個別最適化", "データ分析＋教育評価の知識"],
  ["AIチューター開発エンジニア", "生成AIを使った学習支援システム", "Python・ML＋学習設計の理解"],
  ["コンテンツテクノロジスト／PdM", "動画・インタラクティブ教材の企画開発", "教材設計・現場理解・調整力"],
];

const faqs = [
  {
    q: "教育業界の経験はEdTech転職で評価されますか？",
    a: "評価されやすい傾向があります。学習管理システム（LMS）、教材コンテンツ開発、学習データの扱いなど、教育現場の課題を理解しているエンジニアはEdTech企業で希少です。カリキュラム設計やアダプティブラーニングの知識は、純粋なIT人材が持ちにくいアドバンテージになります。",
  },
  {
    q: "教育業界からEdTech転職で年収は上がりますか？",
    a: "職種・企業フェーズ・現年収によって異なるため一概には言えません。業界平均の信頼できる公開統計は限られるため、本ページでは特定の業界平均値は断定しません。目安として、レバテックが公表する正社員SEの年代別平均年収（30代約499万円・40代約618万円／2025年）や、doda公表のIT・通信の平均決定年収（2024年度486万円）を参考に、複数のエージェントで求人レンジを確認するのが確実です。",
  },
  {
    q: "EdTech企業ではどんな技術が求められますか？",
    a: "フロントエンド（React/Next.js）、バックエンド（Python/Node.js）、データ分析（Python/SQL）が基本になることが多いです。加えてAI/ML（アダプティブラーニング・AIチューター）、動画配信技術、LTI規格（学習ツール連携）の知識があると差別化しやすくなります。求められる技術は企業のプロダクトによって変わります。",
  },
  {
    q: "教育業界からEdTech転職で有利な資格はありますか？",
    a: "AWS認定などのクラウド資格、統計検定などのデータ分析系資格が技術面の説明材料になります。ただしEdTechでは資格そのものより、教育ドメインの深い理解と実務経験が重視される傾向があります。資格は実務を補強する位置づけで考えるのが現実的です。",
  },
  {
    q: "教育業界から転職しやすいIT職種は何ですか？",
    a: "EdTechプロダクトエンジニア、学習データアナリスト、LMSエンジニア、コンテンツテクノロジストなどが入りやすいポジションです。いずれも教育現場の知見をプロダクトに反映できる点をアピールしやすい職種です。",
  },
  {
    q: "教育業界からEdTech転職に強いエージェントは？",
    a: "IT/Web/ゲーム特化で提案スピードに定評のあるGeekly、異業種からIT業界への転職支援実績が豊富なワークポート、IT特化で幅広い求人を扱うレバテックキャリアが基本の選択肢です。1社に絞らず2社以上に登録して比較検討するのがおすすめです。",
  },
  {
    q: "プログラミング経験が浅くてもEdTechに入れますか？",
    a: "可能性はあります。プロダクトマネージャーやコンテンツ企画、カスタマーサクセスなど、教育ドメインの理解が重視されるポジションがあります。並行してPython・SQLの基礎を習得すると、エンジニア寄りのポジションにも応募できるようになります。",
  },
  {
    q: "未経験領域だと断られることはありますか？",
    a: "希望と求人がかみ合わないと紹介が少なくなることはあります。レバテックなど実務経験者向けの傾向が強いエージェントだけでなく、未経験歓迎求人も扱うワークポートを併用すると選択肢を確保しやすくなります。",
  },
];

export default function EdtechPage() {
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
      <ArticleJsonLd title={TITLE} description={DESC} url="/industry/edtech/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "業界別ガイド" },
          { name: "教育業界からEdTech転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">{TITLE}</h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 教育の知識をEdTech領域で活かす方法
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          GIGAスクール構想やリスキリング需要を背景に、EdTech（教育テクノロジー）への関心が高まっています。LMS、オンライン学習プラットフォーム、アダプティブラーニングなど、教育の知識を持つエンジニアが活躍できる余地は広がりつつあります。本記事では、教育業界エンジニアがEdTech領域へ転職するための考え方と進め方を、30代・40代のミドルエンジニア視点で整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表 年代別平均年収（2025年）",
            "経済産業省『IT人材需給に関する調査』（2019年3月公表）",
            "パーソルキャリア doda 決定年収レポート（2025年5月公表）",
          ]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-blue-600 hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：教育ドメイン×ITは差別化しやすい</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-5">
            <p className="text-slate-700 leading-relaxed mb-3">
              教育の業務知識を持つエンジニアのEdTech転職は、<strong>十分に現実的</strong>です。EdTechでは「どんな学習が成果につながるか」「教育現場で何が運用上の壁になるか」を理解していることが価値になり、これは後から参入する純粋なIT人材が短期間で身につけにくい領域だからです。
            </p>
            <ul className="text-sm text-slate-700 space-y-1.5">
              <li>・<strong>強み</strong>：LMS・カリキュラム設計・学習評価の理解はそのまま活きる</li>
              <li>・<strong>埋めるべきギャップ</strong>：Web開発とデータ分析、（AI志望なら）機械学習の基礎</li>
              <li>・<strong>進め方</strong>：経験の棚卸し → スキル補強 → IT特化エージェントで求人レンジ確認</li>
            </ul>
          </div>
        </section>

        <section id="trend" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">EdTechのIT化・採用動向</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            市場規模や成長率の具体的な数値は出典・時点で幅があるため本記事では断定しませんが、採用の背景として次のような動きが公開情報として語られています。
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">学校・企業の双方でデジタル化が進行</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                GIGAスクール構想による1人1台端末の整備や、企業のリスキリング投資を背景に、学校向け・社会人向けの双方でオンライン学習サービスの開発・運用ニーズが語られています。教育現場の運用を理解したエンジニアは、この文脈で評価されやすい立場にあります。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">AI×教育の広がり</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                生成AIの普及により、パーソナライズド学習、自動問題生成、学習データ分析による個別最適化などの取り組みが増えています。教育の文脈を踏まえてAIを活用できるエンジニアは、技術と教育の両方を語れる人材として関心を集めやすい傾向があります。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">IT人材不足という追い風</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                経済産業省『IT人材需給に関する調査』（2019年3月公表）の試算では、2030年に最大約79万人のIT人材が不足するとされています。特定業界に限った数字ではありませんが、ドメイン知識を持つエンジニアが希少という全体傾向の背景として参考になります。
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">活かせるスキル／埋めるべきギャップ</h2>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="px-4 py-3 text-left font-semibold">スキル／知識</th>
                  <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">扱い</th>
                  <th className="px-4 py-3 text-left font-semibold">EdTechでの位置づけ</th>
                </tr>
              </thead>
              <tbody>
                {skillTable.map(([skill, status, note], i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <th className="px-4 py-3 text-left font-medium text-slate-700 align-top">{skill}</th>
                    <td
                      className={`px-4 py-3 font-medium whitespace-nowrap align-top ${
                        status === "そのまま活きる" ? "text-blue-600" : "text-amber-600"
                      }`}
                    >
                      {status}
                    </td>
                    <td className="px-4 py-3 text-slate-600 align-top">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500">
            「要習得」は転職前後で補強する想定の領域です。志望職種により優先度は変わります。
          </p>
        </section>

        <section id="patterns" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職パターン（職種×企業タイプ）</h2>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="px-4 py-3 text-left font-semibold">職種</th>
                  <th className="px-4 py-3 text-left font-semibold">主な仕事</th>
                  <th className="px-4 py-3 text-left font-semibold">求められる軸</th>
                </tr>
              </thead>
              <tbody>
                {patternTable.map(([role, work, axis], i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <th className="px-4 py-3 text-left font-medium text-slate-700 align-top whitespace-nowrap">{role}</th>
                    <td className="px-4 py-3 text-slate-600 align-top">{work}</td>
                    <td className="px-4 py-3 text-slate-600 align-top">{axis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            開発比重を高めたいならエンジニア職、学習設計や現場との橋渡しを強みにしたいならPdM・コンテンツ企画が向きます。どのパターンでも「学習成果をどう改善したか」を具体的に語れるかが差別化の核になります。
          </p>
        </section>

        <section id="fit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人／向いていない人</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-emerald-200 bg-emerald-50 rounded-xl p-5">
              <h3 className="font-bold text-emerald-800 mb-3 text-sm">こんな人は向いている</h3>
              <ul className="text-sm text-slate-700 space-y-2">
                {[
                  "LMS運用・教材制作など教育現場の実務経験がある",
                  "学習成果を改善した経験を具体的に語れる",
                  "Web開発やデータ分析の学習を継続できる",
                  "教員・学習者など複数の立場を踏まえた調整ができる",
                  "学習体験をプロダクトで良くすることに関心がある",
                ].map((t, i) => (
                  <li key={i} className="flex gap-2"><span className="text-emerald-600 shrink-0">✓</span><span>{t}</span></li>
                ))}
              </ul>
            </div>
            <div className="border border-slate-200 bg-slate-50 rounded-xl p-5">
              <h3 className="font-bold text-slate-700 mb-3 text-sm">慎重に検討したい人</h3>
              <ul className="text-sm text-slate-700 space-y-2">
                {[
                  "教育ドメインの経験がなく、技術力だけで勝負したい",
                  "学習設計や現場運用に関心が薄い",
                  "学習に時間を割けず、即戦力の技術力も足りない",
                  "短期間での大幅な年収アップだけを目的にしている",
                ].map((t, i) => (
                  <li key={i} className="flex gap-2"><span className="text-slate-400 shrink-0">▲</span><span>{t}</span></li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            「慎重に検討したい人」に当てはまっても、ドメイン理解を現職で積み増す・技術を学習で補うなど、ギャップを埋める順番を決めれば道筋は描けます。
          </p>
        </section>

        <section id="resume" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">職務経歴書での見せ方（Before/After）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            教育の経験は「何を導入したか」だけでなく「学習者や教員のどんな課題を解決し、学習成果がどう変わったか」まで書くと、EdTech企業に伝わりやすくなります。以下は一般化した記入例です（個人の実績に置き換えて使ってください）。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <div className="bg-slate-100 px-4 py-2 text-xs font-bold text-slate-500">Before（伝わりにくい例）</div>
              <p className="px-4 py-3 text-sm text-slate-600">学習管理システムの導入・運用を担当。教材のデジタル化を進めた。</p>
            </div>
            <div className="border border-blue-200 rounded-lg overflow-hidden">
              <div className="bg-blue-100 px-4 py-2 text-xs font-bold text-blue-700">After（教育×ITが伝わる例）</div>
              <p className="px-4 py-3 text-sm text-slate-700">
                LMSの導入・運用を担当し、教員の運用負荷と学習者のつまずき箇所を踏まえた教材配信フローを設計。学習ログを分析して理解度の低い単元を可視化し、復習コンテンツの追加を提案。カリキュラム設計と学習データ活用の両面を理解している点を強みとする。
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            数値はご自身が実際に計測した範囲のみを記載してください。書き方の基本は
            <Link href="/knowledge/resume/" className="text-blue-600 hover:underline">職務経歴書の書き方</Link>
            もあわせて参考にしてください。
          </p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方（公的・公表データ）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            EdTech特有の業界平均年収を示す信頼できる公開統計は限られるため、ここでは出典の明確なIT職全体のデータを目安として示します。実際の提示額は個社・職種・フェーズで大きく変わります。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-4">
            <ul className="text-sm text-slate-700 space-y-2 leading-relaxed">
              <li>
                ・<strong>正社員SEの年代別平均年収（レバテック公表・2025年）</strong>：20代 約378万円／30代 約499万円／40代 約618万円／50代 約685万円。年収1,000万円以上の割合は30代8.01%・40代12.67%。
              </li>
              <li>
                ・<strong>IT・通信の平均決定年収（doda／パーソルキャリア「決定年収レポート」2025年5月公表）</strong>：2023年度469万円→2024年度486万円。doda公表では転職者の約6割が年収アップとされています。
              </li>
            </ul>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            これらは目安です。正確な相場感はエージェントが提示する個別求人レンジで把握しましょう。年代別の考え方は
            <Link href="/knowledge/salary-30s/" className="text-blue-600 hover:underline">30代エンジニアの年収</Link>・
            <Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代エンジニアの年収</Link>
            も参考にしてください。
          </p>
        </section>

        <section id="companies" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">主な企業タイプと例</h2>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">学校向けEdTech・LMSベンダー</h3>
              <p className="text-sm text-slate-600">学校や教育機関に学習管理システムや教材配信基盤を提供する企業。LMS運用やカリキュラム設計の知見が活きやすい。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">社会人向けオンライン学習プラットフォーム</h3>
              <p className="text-sm text-slate-600">リスキリング・スキルアップ向けの動画・実践型学習サービス。学習体験の設計力が評価される。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">学習データ分析・AIチューター</h3>
              <p className="text-sm text-slate-600">学習ログ分析や生成AIを使った個別最適化を手がける企業。データ分析・ML＋学習設計の理解が差別化要素になる。</p>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            個別企業名は採用状況により変動するため、最新の求人はエージェント経由で確認してください。
          </p>
        </section>

        <section id="howto" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職の進め方</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "教育業界の経験を棚卸しする", desc: "LMS導入・運用、教材デジタル化、学習データ分析など携わった案件を整理。学習成果の改善率など定量的な実績を準備する。" },
              { step: "2", title: "Web開発・データ分析を補強する", desc: "Python・JavaScript（React/Next.js）・SQLの基礎を学ぶ。LMS関連ならLTI規格やSCORMの知識も有効。" },
              { step: "3", title: "EdTech領域をリサーチする", desc: "アダプティブラーニング、マイクロラーニング、AIチューターなどのうち、自分の教育知見が最も活きる領域を見極める。" },
              { step: "4", title: "IT特化エージェントで求人レンジを確認", desc: "Geekly・ワークポート・レバテックキャリアなどに登録し、実際のEdTech求人と提示年収レンジを比較する。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="routes" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験浅めからの参入ルート</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「教育の実務経験はあるが開発が浅い」「開発はできるが教育ドメインが弱い」など、出発点によって最適な入り口は変わります。自分の現在地に近いルートから検討してください。
          </p>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">ルートA：教育知見を軸にPdM・コンテンツ企画へ</h3>
              <p className="text-sm text-slate-600">学習設計やカリキュラムの理解を武器に、EdTechのPdM・コンテンツ企画から入り、技術理解を業務の中で深める。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">ルートB：既存の開発スキルにモダンスタックを足す</h3>
              <p className="text-sm text-slate-600">開発経験者がReact・Python・SQLを補強してEdTechのエンジニア職へ。学習成果を小さな制作物で示すと伝わりやすい。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">ルートC：学習データ分析へ寄せる</h3>
              <p className="text-sm text-slate-600">学習評価やデータに強みがあるなら、SQL・Pythonを軸に学習データアナリストや個別最適化の周辺ポジションを狙う。</p>
            </div>
          </div>
        </section>

        <section id="pitfalls" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくあるつまずきと対策</h2>
          <div className="space-y-3">
            {[
              { p: "「LMS導入の経験」だけを書いて教育知見が伝わらない", s: "学習者・教員の課題と、それをどう解決し成果が変わったかを職務経歴書に具体的に書く。" },
              { p: "求人が見つからず1社のエージェントで止まってしまう", s: "IT特化と総合型を2社以上併用し、提案されるEdTech求人の傾向を比較する。" },
              { p: "最新技術力で若手と比較され不利になる", s: "技術の最先端で勝負するより、教育ドメイン×ITの掛け合わせで応募ポジションを選ぶ。" },
              { p: "学習が手段化して目的を見失う", s: "志望職種の求人要件から逆算し、必要な技術だけに絞って学習する。" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <p className="text-sm font-bold text-slate-800 mb-1">つまずき：{item.p}</p>
                <p className="text-sm text-slate-600">対策：{item.s}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="midcareer" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              ミドル層の教育系エンジニアにとって、EdTech転職は「最新技術力で若手と競う」より「教育ドメインの蓄積で勝負する」戦い方ができる点が利点です。30代・40代は教育現場での運用経験や、学習者・教員・保護者など複数の立場を踏まえた調整経験が豊富で、プロダクトの要件定義や現場導入の推進で評価されやすくなります。
            </p>
            <p className="text-slate-700 leading-relaxed mb-3">
              一方、コーディング比重の高いポジションだけに絞ると20代と競合しがちです。学習設計・PdM・コンテンツ企画など、教育の知見と調整力が強みに転じる職種を視野に入れると選択肢が広がります。
            </p>
            <p className="text-slate-700 leading-relaxed">
              年齢面の不安がある場合は
              <Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職</Link>や
              <Link href="/compare/40s-agents/" className="text-blue-600 hover:underline">40代向けエージェント比較</Link>
              も確認しておくと戦略を立てやすくなります。
            </p>
          </div>
        </section>

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

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">教育の知識をEdTechで活かそう</h2>
          <p className="text-blue-100 text-sm mb-4">
            まずはIT特化型エージェントに相談し、EdTech求人の実際のレンジと自分の市場価値を確認しましょう。
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
              { name: "SIerからWeb系に転職するには", href: "/industry/sier-to-web/" },
              { name: "AI/ML転職ガイド", href: "/skill/ai-ml/" },
              { name: "データサイエンティスト転職", href: "/skill/data-scientist/" },
              { name: "Geeklyの評判", href: "/review/geekly/" },
              { name: "エンジニア転職で年収は上がる？", href: "/knowledge/salary-change/" },
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
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
