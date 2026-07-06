import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/purpose/no-degree/" },
  title: "学歴不問でエンジニア転職【30-40代の実態と見極め方】",
  description:
    "「学歴不問」のエンジニア求人の建前と実態を正直に解説。30-40代が学歴より問われる実力・実務経験、求人票の見極め方、該当する企業タイプ、注意点を整理します。",
};

const faqs = [
  {
    q: "「学歴不問」と書いてあれば本当に学歴は関係ない？",
    a: "応募の足切りとして学歴を使わないという意味では本当です。新卒採用と違い、中途のIT求人では「学歴不問」が一般的で、職務経歴やスキルで評価する企業が多数を占めます。ただし「学歴不問＝誰でも受かる」ではありません。学歴のフィルターがない分、実務経験・成果物・技術力でシビアに見られると理解しておくのが正解です。",
  },
  {
    q: "30-40代の未経験でも学歴不問なら転職できる？",
    a: "可能性はありますが、20代の未経験とは前提が異なります。30-40代の未経験者には、ポテンシャルだけでなく『なぜこの年齢でエンジニアを目指すのか』という納得感のある動機と、独学・スクールでの学習実績、簡単でも自作のポートフォリオが求められます。学歴不問であっても、年齢に見合う準備と覚悟は必要だと考えてください。",
  },
  {
    q: "高卒・専門卒だと不利になる場面はある？",
    a: "中途のIT転職では、実務経験があれば学歴で不利になる場面はほとんどありません。実際にエンジニアには高卒・専門卒・大学中退から活躍している人が多数います。例外は、一部の外資系コンサルや大企業の応募要件に『大卒以上』が明記されているケース、また就労ビザ取得で学歴要件が関わる海外勤務などです。これらは『学歴不問求人』ではないため、応募前に要件を確認しましょう。",
  },
  {
    q: "学歴の代わりに何を準備すればいい？",
    a: "実務経験がある人は職務経歴書で『何を作り、どんな課題をどう解決したか』を具体的に書くこと。未経験の人は、独学やスクールでの学習内容、GitHubに公開した成果物、技術ブログなど『手を動かした証拠』を用意することです。資格（基本情報技術者など）も学習意欲の客観的な証明になります。",
  },
  {
    q: "学歴不問の求人はどこで探せばいい？",
    a: "中途のIT求人は基本的に学歴不問が主流のため、IT特化型の転職エージェントや求人サイトで広く見つかります。求人票の応募要件に『大卒以上』『学歴不問』のどちらが書かれているかを確認し、不問の求人に絞って応募するのが効率的です。エージェントに『学歴で足切りしない企業を紹介してほしい』と伝えるのも有効です。",
  },
  {
    q: "面接で学歴について聞かれたらどう答える？",
    a: "学歴そのものを深掘りされることは中途では稀ですが、聞かれた場合は卑下も誇張もせず事実を述べ、すぐに『その後どう実力をつけてきたか』へ話を移すのが鉄則です。学歴は変えられない過去ですが、入社後に何ができるかは現在の実力で示せます。面接官が本当に知りたいのは学歴ではなく『活躍できるか』です。",
  },
];

export default function NoDegreePage() {
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
        title="学歴不問でエンジニア転職【30-40代の実態と見極め方】"
        description="「学歴不問」のエンジニア求人の建前と実態を正直に解説。30-40代が学歴より問われる実力・実務経験、求人票の見極め方、該当する企業タイプ、注意点を整理します。"
        url="/purpose/no-degree/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "目的別ガイド", href: "/purpose/" },
          { name: "学歴不問でエンジニア転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          学歴不問でエンジニア転職
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | 学歴より実力で評価されたいミドルのための実態ガイド</p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省 職業情報提供サイト（job tag）",
            "独立行政法人 情報処理推進機構（IPA）IT人材白書・基本情報技術者試験案内",
          ]}
        />

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：「学歴不問」は“学歴で足切りしない”という意味。問われるのは実力</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            中途のIT転職において「学歴不問」は珍しいものではなく、むしろ主流です。新卒採用と違い、中途では職務経歴・スキル・成果物で評価する企業が多数を占めるため、高卒・専門卒・大学中退からエンジニアとして活躍している人は数多くいます。<strong>ただし「学歴不問」は「誰でも受かる」ではありません。</strong>学歴というフィルターがない分、実務経験や技術力でシビアに見られます。とりわけ30-40代は、年齢に見合う実力と納得感のある動機が問われます。本記事では建前と実態の差を正直に整理し、学歴に左右されずに評価されるための見極め方を解説します。
          </p>
          <div className="bg-petrol-soft border border-slate-200 rounded-lg p-6">
            <p className="text-sm font-medium text-slate-700 mb-2">こんな人におすすめ</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>- 高卒・専門卒・大学中退で学歴に不安がある</li>
              <li>- 学歴ではなく実務スキルで評価されたい</li>
              <li>- 30-40代で未経験からエンジニアを目指している</li>
              <li>- 「学歴不問」求人の実態を正しく知りたい</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">目次</h2>
          <ol className="list-decimal list-inside space-y-1 text-sm text-petrol-deep">
            <li>「学歴不問」の建前と実態</li>
            <li>学歴の代わりに評価される4つの要素</li>
            <li>該当しやすい企業タイプ</li>
            <li>30-40代が押さえる注意点</li>
            <li>見極めチェックリスト</li>
            <li>よくある質問</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">1. 「学歴不問」の建前と実態</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-petrol-soft">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">求人票の表現</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">実態として何を意味するか</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "学歴不問", desc: "応募の足切りに学歴を使わない。職務経歴・スキルで評価する。中途IT求人では一般的" },
                  { type: "大卒以上", desc: "学歴がそのまま応募要件。一部の大企業・外資コンサルに残る。この場合は学歴不問ではない" },
                  { type: "実務経験◯年以上", desc: "学歴の代わりに実務経験で足切り。経験者には学歴の壁はほぼない" },
                  { type: "未経験歓迎×学歴不問", desc: "ポテンシャル採用。ただし30-40代は学習実績・動機・成果物の準備が前提" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.type}</td>
                    <td className="px-4 py-3 text-slate-600">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed mt-4">
            ポイントは、<strong>「学歴不問」と「未経験歓迎」は別物</strong>だということです。学歴不問は学歴で切らないだけで、実務経験を求める求人も多くあります。学歴も経験もない状態から目指すなら「学歴不問×未経験歓迎」の求人を軸にしつつ、未経験を補う準備が必要です。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">2. 学歴の代わりに評価される4つの要素</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "実務経験と成果", desc: "「何を作り、どんな課題をどう解決したか」を具体的に語れることが最大の武器です。経験者は職務経歴書でこれを言語化できれば学歴の差は埋まります。" },
              { num: "2", title: "成果物（ポートフォリオ）", desc: "GitHubに公開したコード、自作のアプリやサービスは『手を動かせる証拠』です。未経験者にとって学歴に代わる客観的な実力証明になります。" },
              { num: "3", title: "資格・学習実績", desc: "基本情報技術者試験などの資格は、学歴がなくても学習意欲と基礎知識を客観的に示せます。スクール修了やオンライン学習の積み上げも評価対象です。" },
              { num: "4", title: "動機とキャリアの一貫性", desc: "とくに30-40代は『なぜ今エンジニアなのか』に納得感が求められます。前職の経験とどう接続するかを語れると説得力が増します。" },
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

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">3. 該当しやすい企業タイプ</h2>
          <div className="space-y-3">
            {[
              { type: "自社開発・Web系企業", point: "技術力と成果物を重視する文化が根づいており、学歴より『何が作れるか』で評価する傾向が強い。" },
              { type: "成長中のベンチャー・スタートアップ", point: "即戦力と意欲を重視。学歴フィルターをかける余裕がなく、実力ベースの採用が中心。" },
              { type: "SES・受託開発企業", point: "未経験・学歴不問の入口が比較的広い。ただし配属先や案件の質を見極める必要がある。" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{item.type}</h3>
                <p className="text-sm text-slate-600">{item.point}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-700 leading-relaxed mt-4">
            逆に、応募要件に「大卒以上」が明記されている一部の大企業・外資系コンサルは、学歴不問ではありません。これらに固執するより、実力で評価される企業群を狙うほうが30-40代には合理的です。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">4. 30-40代が押さえる注意点（正直な話）</h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              <strong>「学歴不問＝年齢不問」ではありません。</strong>学歴の壁がなくても、30-40代の未経験者は20代と同じようには評価されません。企業側は『この年齢で採用して育成コストに見合うか』を慎重に見ます。だからこそ、独学やスクールでの学習実績、簡単でも動く成果物、前職経験との接続という『年齢を納得感に変える材料』を用意することが欠かせません。
            </p>
            <p>
              <strong>未経験入口の求人は質の見極めが重要です。</strong>学歴不問・未経験歓迎の間口が広い求人ほど、配属や案件の質に差が出やすい面があります。入社後にどんな技術・案件に関われるか、スキルが伸びる環境かを面接で確認しましょう。30代未経験の現実的な進め方は
              <Link href="/knowledge/inexperienced-30s/" className="text-petrol hover:underline">30代未経験からのエンジニア転職</Link>
              、学び直しの設計は
              <Link href="/knowledge/reskilling/" className="text-petrol hover:underline">リスキリングの進め方</Link>
              も参考にしてください。
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">5. 見極めチェックリスト</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "応募要件が「学歴不問」か「大卒以上」かを確認", desc: "求人票の応募資格欄を必ずチェック。大卒以上の求人に学歴がなくても応募すると足切りされます。" },
              { num: "2", title: "「学歴不問」と「未経験歓迎」を切り分ける", desc: "経験者向けか未経験者向けかで準備が変わります。自分の現状に合う求人群を選びましょう。" },
              { num: "3", title: "学歴に代わる実力証明を用意したか確認", desc: "職務経歴書の成果記述、ポートフォリオ、資格など、評価軸となる材料を揃えます。" },
              { num: "4", title: "配属先・案件の質を面接で確認", desc: "間口の広い求人ほど入社後の環境差が大きい。スキルが伸びる配属かを確認します。" },
              { num: "5", title: "年齢に見合う動機を言語化したか確認", desc: "30-40代は『なぜ今か』への納得感が合否を分けます。前職との接続を語れる状態にします。" },
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

        <section className="mb-10">
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
          <h2 className="text-xl font-bold mb-3">学歴に左右されない求人を無料で紹介</h2>
          <p className="text-blue-100 text-sm mb-4">実力ベースで評価する企業を、IT特化型エージェントがあなたの経歴に合わせて提案します。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "30代未経験からのエンジニア転職", href: "/knowledge/inexperienced-30s/" },
              { name: "リスキリングの進め方", href: "/knowledge/reskilling/" },
              { name: "年齢不問の求人を狙う転職", href: "/purpose/no-age-limit/" },
              { name: "第二新卒のIT転職", href: "/purpose/second-new-grad/" },
              { name: "目的別ガイド一覧", href: "/purpose/" },
              { name: "ミドルエンジニア転職ラボTOP", href: "/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
