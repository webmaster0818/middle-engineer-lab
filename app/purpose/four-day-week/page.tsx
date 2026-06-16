import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "週休3日制のエンジニア求人の見極め方【2026年版】",
  description:
    "週休3日制を「給与維持型・給与減額型・総労働時間短縮型」の3類型で整理。求人がどの型か見極める方法、正社員週4の希少性、30-40代の世帯収入試算まで正直に解説。",
};

const faqs = [
  {
    q: "週休3日制とフレックス・残業少なめは何が違う？",
    a: "週休3日制は『働く日数そのものを減らす』制度です。一方フレックスタイム制は労働時間の配置を自由にする制度、残業少なめは日々の残業を抑える方向性で、いずれも“週5日勤務”が前提です。つまり週休3日は、時間の組み替えや残業削減とは次元の異なる、勤務日数の削減という最も大きな変化を伴います。日数は変えずに時間を柔軟にしたいならフレックスタイム制、残業を減らしたいなら残業少なめIT企業の見極め方が適切な軸になります。",
  },
  {
    q: "週休3日でも給与は維持される？",
    a: "型によって異なります。『給与維持型』なら週4勤務でも給与は据え置きですが、これは実質的に労働密度が上がるか、生産性向上を前提とした制度で、導入企業は限られます。『給与減額型』は勤務日数の減少に応じて給与も下がります（例：週4で給与8割）。『総労働時間短縮型』は1日の労働時間を延ばして週4にまとめるため、総労働時間と給与は維持される設計です。求人がどの型かで世帯収入への影響がまったく変わるため、必ず確認が必要です。",
  },
  {
    q: "週休3日制を導入している企業はどのくらいある？",
    a: "厚生労働省「令和6年就労条件総合調査」によると、週休3日（完全週休3日に限らず“何らかの形で”）を採用している企業は1.6%、完全週休3日に限ると0.3%にとどまります。つまり全産業で見れば2%に満たない極めて希少な制度です。求人を探す際は、この母数の少なさを前提に期待値を調整しておくことが大切です。",
  },
  {
    q: "正社員で週休3日（週4勤務）は現実的に可能？",
    a: "正社員での週休3日はまだレアで、実態としては派遣・業務委託・契約社員の働き方に多いのが正直なところです。正社員週4の事例がないわけではなく、たとえばGreenなどの求人媒体で週4正社員のWebエンジニア募集（アンドゲートなど）が掲載されている例もあります（2026年6月閲覧時点の一例）。ただし母数は限定的で、勤務地・職種の選択肢も狭まるため、条件を絞りすぎると応募先が極端に少なくなる点には注意が必要です。",
  },
  {
    q: "週休3日にすると社会保険や賞与・昇給はどうなる？",
    a: "給与減額型で所定労働時間・賃金が下がると、それに連動して社会保険料の算定基礎(標準報酬月額)や、将来の年金額、賞与・昇給の基準額にも影響し得ます。短時間勤務で社会保険の加入要件を下回ると、加入対象から外れるケースもあります。目先の休日増だけでなく、社会保険・賞与・昇給・退職金への中長期の影響まで含めて確認することが、家計を預かるミドルには不可欠です。",
  },
  {
    q: "週休3日のエンジニア求人はどう探せばいい？",
    a: "doda・マイナビなどの求人媒体に週休3日のカテゴリ・特集は存在しますが、件数は媒体により集計が異なり母数も限定的なため、当サイトでは具体的な件数を断定しません。探す際は『週休3日』『週4日勤務』『時短正社員』などのキーワードで複数媒体を横断し、見つかった求人が前述の3類型のどれに当たるかを一件ずつ確認するのが確実です。",
  },
];

export default function FourDayWeekPage() {
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
        title="週休3日制のエンジニア求人の見極め方【2026年版】"
        description="週休3日制を給与維持型・給与減額型・総労働時間短縮型の3類型で整理。求人がどの型か見極める方法、正社員週4の希少性、30-40代の世帯収入試算まで正直に解説。"
        url="/purpose/four-day-week/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "目的別ガイド", href: "/purpose/" },
          { name: "週休3日制求人の見極め方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          週休3日制のエンジニア求人の見極め方
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | 3類型を見分けて選ぶミドル向け完全ガイド</p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省 令和6年就労条件総合調査",
            "Green（求人事例・閲覧時点）",
          ]}
        />

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：週休3日は“どの型か”の見極めが全て</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            「週休3日」という言葉は同じでも、その中身は<strong>給与維持型・給与減額型・総労働時間短縮型</strong>の3類型に分かれ、世帯収入への影響がまったく異なります。多くの比較サイトはこの区別をせずに「週休3日求人」を紹介していますが、給与が据え置かれるのか8割に減るのかでは家計への意味が正反対です。本記事は3類型を明確に区別し、求人がどの型かを見極める方法、正社員週4の希少性、そして給与減額型を選ぶ場合の世帯収入試算まで、家計を預かる30-40代の視点で正直に解説します。
          </p>
          <div className="bg-petrol-soft border border-slate-200 rounded-lg p-6">
            <p className="text-sm font-medium text-slate-700 mb-2">こんな人におすすめ</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>- 育児・介護と仕事を両立するため勤務日数を減らしたい</li>
              <li>- リスキリング・学び直しの時間を確保したい</li>
              <li>- 週休3日求人の「給与の扱い」を正しく見極めたい</li>
              <li>- 世帯収入への影響まで試算して判断したい30-40代</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">目次</h2>
          <ol className="list-decimal list-inside space-y-1 text-sm text-petrol-deep">
            <li>週休3日の3類型を区別</li>
            <li>制度の希少性（公的データ）</li>
            <li>求人がどの型か見極める方法</li>
            <li>30-40代の世帯収入試算</li>
            <li>よくある質問</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">1. 週休3日の3類型を区別</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-petrol-soft">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">類型</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">給与</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">総労働時間</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">特徴・注意</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "給与維持型", pay: "維持", hours: "減る", note: "週4でも給与据え置き。生産性向上が前提で導入企業は限られる" },
                  { type: "給与減額型", pay: "減る", hours: "減る", note: "日数減に応じ給与も減（例：週4で8割）。世帯収入への影響大" },
                  { type: "総労働時間短縮型", pay: "維持", hours: "維持", note: "1日の労働時間を延ばし週4にまとめる。1日あたりの拘束は長くなる" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.type}</td>
                    <td className="px-4 py-3 text-slate-600">{row.pay}</td>
                    <td className="px-4 py-3 text-slate-600">{row.hours}</td>
                    <td className="px-4 py-3 text-slate-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            ※ 同じ「週休3日」でも、給与が据え置かれるのか減るのかで意味が正反対です。求人がどの型かの確認が最優先です。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">2. 制度の希少性（公的データ）</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            週休3日制は、世間で話題になる割に実際の導入はまだごく一部です。厚生労働省「令和6年就労条件総合調査」によると、<strong>何らかの形で週休3日を採用している企業は1.6%、完全週休3日に限ると0.3%</strong>にとどまります。つまり全産業で見れば、週休3日は2%に満たない極めて希少な制度です。
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            この数字が示すのは、「週休3日の求人を探すこと自体が、そもそも母数の少ない探索になる」という現実です。条件を週休3日に固定すると応募先が一気に絞られるため、期待値を調整し、他の働き方（フレックス・時短正社員・業務委託）も視野に入れて柔軟に検討するのが現実的です。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">3. 求人がどの型か見極める方法</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "給与が維持か減額か確認", desc: "求人票・面接で『週4勤務時の給与はどうなるか』を直接確認します。3類型のどれかを特定するのが最初のステップです。" },
              { num: "2", title: "完全週休3日か、隔週・選択制か確認", desc: "毎週3日休みなのか、隔週なのか、希望者のみの選択制なのか。実際に取得している社員がいるかも確認します。" },
              { num: "3", title: "1日の労働時間を確認", desc: "総労働時間短縮型では1日の勤務が長くなります（例：1日10時間×週4）。育児・介護と両立したい場合、1日の拘束時間が逆に負担にならないか要確認です。" },
              { num: "4", title: "雇用形態を確認", desc: "正社員での週休3日はレアで、派遣・業務委託・契約社員に多いのが実情です。正社員週4の事例（Greenでの週4正社員Webエンジニア募集など・2026年6月閲覧時点の一例）もありますが母数は限定的です。" },
              { num: "5", title: "社会保険・賞与・昇給への影響を確認", desc: "給与減額型では標準報酬月額が下がり、社会保険・将来年金・賞与・昇給基準に影響し得ます。中長期の家計への影響まで確認します。" },
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">4. 30-40代の世帯収入試算</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            週休3日は、育児・介護との両立やリスキリングの時間確保という点で、30-40代に魅力的な選択肢です。一方で「給与減額型」を選ぶ場合は、世帯収入への影響を冷静に試算しておく必要があります。
          </p>
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            たとえば勤務日数が週5から週4へ2割減り、給与も連動して2割減になるなら、年収はおおむね8割相当に下がる計算です。住宅ローン・教育費・保険料といった固定費が多いミドル世帯では、この差が家計に与える影響は小さくありません。減額型を選ぶなら、<strong>「増えた1日で何をするのか（副業・育児・学び直し）」と「減る収入をどう補うか」をセットで設計する</strong>ことが重要です。
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            なお、ここで示した割合はあくまで考え方の例であり、実際の減額幅・社会保険の扱いは企業の制度設計によります。具体的な金額は各求人の労働条件で必ず確認してください。働き方の他の選択肢として、勤務日数は変えずに時間を柔軟にする
            <Link href="/purpose/flextime/" className="text-petrol hover:underline">フレックスタイム求人の見極め方</Link>
            、残業を抑える
            <Link href="/purpose/no-overtime/" className="text-petrol hover:underline">残業少なめIT企業の見極め方</Link>
            、生活全体の設計を考える
            <Link href="/purpose/wlb/" className="text-petrol hover:underline">ワークライフバランス重視の転職</Link>
            も合わせてご検討ください。
          </p>
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
          <h2 className="text-xl font-bold mb-3">週休3日・時短の求人を無料で紹介</h2>
          <p className="text-blue-100 text-sm mb-4">制度の型まで把握したIT特化型エージェントが、あなたの働き方に合う企業を提案します。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "ワークライフバランス重視の転職", href: "/purpose/wlb/" },
              { name: "残業少なめIT企業の見極め方", href: "/purpose/no-overtime/" },
              { name: "フレックスタイム求人の見極め方", href: "/purpose/flextime/" },
              { name: "ワークライフバランスの考え方", href: "/knowledge/work-life-balance/" },
              { name: "副業OK求人の見極め方", href: "/purpose/side-job-ok/" },
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
