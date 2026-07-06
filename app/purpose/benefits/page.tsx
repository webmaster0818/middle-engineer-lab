import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/purpose/benefits/" },
  title: "福利厚生が充実した企業へ転職【法定外福利の見極め方2026】",
  description:
    "法定福利と法定外福利の違いを公的情報ベースで整理し、求人での福利厚生の見極め方を解説。実質価値・課税の落とし穴、該当しやすい企業タイプ、30-40代の選び方まで。",
};

const faqs = [
  {
    q: "「法定福利」と「法定外福利」は何が違いますか？",
    a: "法定福利（法定福利厚生）は、法律で会社に義務づけられた制度で、健康保険・厚生年金・雇用保険・労災保険・介護保険などの社会保険にかかる会社負担分を指します。これはどの会社でも受けられるものです。一方、法定外福利（法定外福利厚生）は、会社が任意で提供する制度で、住宅手当・退職金・社員食堂・カフェテリアプラン・各種補助・自己啓発支援などが該当します。求人で『福利厚生が充実』と訴求されるのは主にこの法定外福利の手厚さです（出典：厚生労働省）。",
  },
  {
    q: "求人票の「福利厚生充実」はどこまで信用できますか？",
    a: "『各種社会保険完備』は法律上当然のことで、それ自体は充実の指標になりません。本当に見るべきは法定外福利の中身です。具体的な制度名（住宅手当・退職金・企業型DC・カフェテリアプラン・資格取得支援・育児/介護支援・健康支援など）が列挙されているか、金額・条件が明確かを確認しましょう。抽象的に『福利厚生充実』とだけ書かれている場合は、面接で具体的な制度と利用条件を確認するのが確実です。",
  },
  {
    q: "福利厚生にも税金がかかることがありますか？",
    a: "あります。現金で支給される手当（住宅手当・家族手当など）は原則として給与所得として課税されます。一方、一定の要件を満たす現物支給（借り上げ社宅、社員食堂の食事補助、健康診断など）は非課税または一部非課税となる場合があります。つまり同じ『福利厚生』でも、現金か現物か、要件を満たすかで手取りメリットが変わります。額面の手厚さだけでなく、実質的にどれだけ手取り・支出減につながるかで評価しましょう（出典：国税庁 タックスアンサー）。",
  },
  {
    q: "福利厚生で特に重視すべき項目は何ですか？",
    a: "ライフステージによって異なります。30-40代では、（1）住宅補助（固定費に直結）、（2）退職金・企業型DC（老後資産）、（3）育児・介護支援（育休取得実績・時短・看護休暇）、（4）健康支援（人間ドック補助など）、（5）自己啓発・資格取得支援（市場価値の維持）が実利の大きい項目です。福利厚生の数の多さより、自分の生活設計に効く制度が揃っているかを基準に選びましょう。",
  },
  {
    q: "福利厚生が手厚い会社はどんなタイプですか？",
    a: "一般論として、福利厚生に継続的に投資できる体力のある大手・上場企業、歴史のある日系メーカー・インフラ系は法定外福利が手厚い傾向があります。一方、Web系・スタートアップは制度の数より給与・裁量・柔軟な働き方で報いる設計が多く、福利厚生をあえて絞る企業もあります。どちらが良いかは価値観次第で、当サイトでは特定企業名や金額は変動するため、各社の最新の募集要項での確認を推奨します。",
  },
  {
    q: "福利厚生と年収、どちらを優先すべきですか？",
    a: "『総報酬（年収＋福利厚生の実質価値）』で比較するのが基本です。福利厚生が手厚くても基本給が市場相場より低ければ、住宅ローン審査や転職時の年収交渉で不利になることがあります。逆に年収が高くても、住宅補助・退職金がなければ手元に残りにくいことも。現金で受け取る分と、非課税で恩恵を受けられる福利厚生分を分けて、自分の生活設計に最も効く配分を選ぶのが賢明です。",
  },
];

export default function BenefitsPage() {
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
        title="福利厚生が充実した企業へ転職【法定外福利の見極め方2026】"
        description="法定福利と法定外福利の違いを公的情報ベースで整理し、求人での福利厚生の見極め方を解説。実質価値・課税の落とし穴、該当しやすい企業タイプまで。"
        url="/purpose/benefits/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "目的別ガイド", href: "/purpose/" },
          { name: "福利厚生が充実した企業へ転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          福利厚生が充実した企業へ転職
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | 「法定外福利」の中身と実質価値で選ぶ完全ガイド</p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省（法定福利・法定外福利の区分）",
            "国税庁 タックスアンサー（福利厚生費・現物給与の課税）",
          ]}
        />

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：「福利厚生充実」は法定外福利の中身で判断する</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            求人でよく見る「福利厚生充実」「各種社会保険完備」という表記。しかし社会保険（法定福利）はどの会社でも受けられる当然のもので、充実の指標にはなりません。本当に差がつくのは、会社が任意で提供する<strong>法定外福利</strong>——住宅補助・退職金・育児支援・健康支援・自己啓発支援などの中身です。さらに、現金支給か現物支給かで課税が変わり、実質的な手取りメリットも異なります。本記事では、福利厚生を法定／法定外で整理し、求人での見極め方を30-40代の生活設計に効く実利の観点で解説します。
          </p>
          <div className="bg-petrol-soft border border-slate-200 rounded-lg p-6">
            <p className="text-sm font-medium text-slate-700 mb-2">こんな人におすすめ</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>- 「福利厚生充実」求人の中身を具体的に見極めたい30-40代</li>
              <li>- 住宅・退職金・育児支援など生活に効く制度で会社を選びたい</li>
              <li>- 福利厚生の課税・実質価値まで含めて比較したい</li>
              <li>- 年収と福利厚生のバランスで総報酬を判断したい</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">目次</h2>
          <ol className="list-decimal list-inside space-y-1 text-sm text-petrol-deep">
            <li>法定福利と法定外福利</li>
            <li>求人での見極めポイント</li>
            <li>該当しやすい企業タイプ</li>
            <li>注意点（実質価値・課税・総報酬）</li>
            <li>よくある質問</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">1. 法定福利と法定外福利</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-petrol-soft">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">区分</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">内容</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">ポイント</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "法定福利", desc: "健康保険・厚生年金・雇用保険・労災・介護保険の会社負担", note: "法律上の義務。どの会社でも受けられ、充実の指標にならない" },
                  { type: "法定外福利（現金系）", desc: "住宅手当・家族手当・退職金など", note: "現金支給は原則 給与課税。額面ほど手取りは増えない" },
                  { type: "法定外福利（現物・支援系）", desc: "社宅・食事補助・健診・資格支援・カフェテリアプラン等", note: "要件を満たせば非課税のものも。実質価値が高い場合がある" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.type}</td>
                    <td className="px-4 py-3 text-slate-600">{row.desc}</td>
                    <td className="px-4 py-3 text-slate-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            ※ 現物給与・福利厚生費の課税要件は国税庁タックスアンサーに基づきます。要件を満たさない場合は課税対象となることがあります。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">2. 求人での見極めポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "法定外福利の具体的な制度名を確認する", desc: "『各種社会保険完備』は当然のこと。住宅補助・退職金・DC・育児/介護支援・健康支援・資格支援など、具体的な制度が挙がっているかを見ます。" },
              { num: "2", title: "金額・条件・対象を確認する", desc: "『住宅手当あり』だけでなく、金額・支給条件・対象者まで。条件次第で自分が対象外になることもあります。" },
              { num: "3", title: "現金か現物かを確認する", desc: "現金手当は課税され手取りが目減りします。借り上げ社宅・食事補助など非課税性のある現物支給は実質価値が高いことがあります。" },
              { num: "4", title: "自分のライフステージに効く制度を優先する", desc: "30-40代なら住宅・退職金/DC・育児/介護支援・健康支援が実利大。制度の数より、生活設計に効くかで選びます。" },
              { num: "5", title: "制度の利用実績を確認する", desc: "育休・時短・資格支援などは『制度はあるが利用者ゼロ』のことも。面接や口コミで実際に使われているかを確認します。" },
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
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            法定外福利の手厚さは、企業の規模・出自・経営方針で傾向が分かれます（制度・金額は変動するため傾向のみ示します）。
          </p>
          <div className="space-y-3">
            {[
              { type: "大手・上場企業／日系メーカー", point: "住宅補助・退職金・各種支援を幅広く備える傾向。福利厚生に投資できる体力がある。" },
              { type: "インフラ・金融・伝統的大企業", point: "安定志向で法定外福利が手厚い企業が多い。家族手当・社宅などが残ることも。" },
              { type: "従業員支援を重視するメガベンチャー", point: "カフェテリアプラン・健康/学習支援など現代的な福利厚生を整備する例がある。" },
              { type: "スタートアップ・小規模Web系", point: "制度の数より給与・裁量・柔軟な働き方で報いる設計が多い。福利厚生は絞る企業も。" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{item.type}</h3>
                <p className="text-sm text-slate-600">{item.point}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">4. 注意点（実質価値・課税・総報酬）</h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              <strong>『社会保険完備』は充実ではない：</strong>法定福利は義務であり、どの会社でも受けられます。これを充実の根拠にしている求人は、法定外福利が手薄な可能性もあるため中身を確認しましょう。
            </p>
            <p>
              <strong>現金手当は課税される：</strong>住宅手当・家族手当などの現金支給は給与課税の対象です。額面の手厚さに惑わされず、手取り・支出減につながる実質価値で評価しましょう。
            </p>
            <p>
              <strong>制度の有無＝利用できる、ではない：</strong>育休・時短・資格支援などは利用実績で実態が分かります。制度の数を競う求人より、使われている制度がある会社を選ぶのが安全です。
            </p>
            <p>
              <strong>総報酬で判断する：</strong>年収と福利厚生は分けて考え、合算した総報酬で比較します。個別制度の詳細は
              <Link href="/purpose/housing-allowance/" className="text-petrol hover:underline">住宅手当</Link>
              ・
              <Link href="/purpose/taishokukin/" className="text-petrol hover:underline">退職金制度</Link>
              の各ガイドも合わせてご確認ください。
            </p>
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
          <h2 className="text-xl font-bold mb-3">福利厚生の手厚い企業を無料で紹介</h2>
          <p className="text-blue-100 text-sm mb-4">制度の中身まで把握したIT特化型エージェントが、あなたの条件に合う企業を提案します。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "住宅手当・家賃補助がある企業へ転職", href: "/purpose/housing-allowance/" },
              { name: "退職金制度がある企業へ転職", href: "/purpose/taishokukin/" },
              { name: "男性育休が取りやすい企業へ転職", href: "/purpose/mens-childcare/" },
              { name: "時短勤務ができる企業へ転職", href: "/purpose/short-hours/" },
              { name: "安定した企業への転職", href: "/purpose/stable/" },
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
