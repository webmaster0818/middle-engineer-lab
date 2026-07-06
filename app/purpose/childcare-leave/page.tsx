import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/purpose/childcare-leave/" },
  title: "育休取得実績が豊富な企業へ転職【くるみん認定の見極め】",
  description:
    "育休取得実績が豊富なIT企業への転職を解説。くるみん認定など公的な指標の読み方、男性育休取得率の見極め方、制度と実態の差、注意点を30-40代エンジニア向けに整理します。",
};

const faqs = [
  {
    q: "「くるみん認定」とは何ですか？",
    a: "次世代育成支援対策推進法に基づき、子育てサポートに積極的で一定基準を満たした企業を厚生労働大臣が認定する制度です。認定を受けた企業は『くるみんマーク』を使用できます。より高い水準を満たすと『プラチナくるみん』、不妊治療と仕事の両立支援に取り組む企業には『トモニン』など関連の認定もあります。育休取得率などの基準が定められており、公的な裏付けのある指標として企業選びの参考になります。",
  },
  {
    q: "くるみん認定があれば育休は確実に取れる？",
    a: "認定は子育て支援に取り組む企業である客観的な証ですが、『誰でも必ず希望どおり育休を取れる』ことを保証するものではありません。制度が整っていても、職場の雰囲気や上司の理解、人員体制によって取得しやすさには差が出ます。認定の有無は重要な一次フィルターとして使いつつ、実際の取得率や復帰後の働き方を面接やエージェント経由で確認するのが確実です。",
  },
  {
    q: "男性の育休取得率はどう確認できる？",
    a: "常時雇用労働者301人以上の企業には、男性の育児休業等の取得状況の公表が義務づけられています（育児・介護休業法）。各企業の公式サイトや採用ページ、厚生労働省の関連サイトで取得率を確認できる場合があります。数値が公表されていれば、制度の実効性を測る具体的な手がかりになります。公表がない中小企業では、面接で直接『直近の男性育休の取得実績』を尋ねるとよいでしょう。",
  },
  {
    q: "育休制度と実態の差はどう見極める？",
    a: "求人票や会社説明では『育休制度あり』と書かれていても、実際の取得率・取得期間・復帰率は別問題です。見極めには、(1)くるみん等の公的認定の有無、(2)男性を含む取得率の数値、(3)復帰後の時短・リモートの選択肢、(4)直近で実際に取得した社員の事例、の4点を確認するのが有効です。制度の存在ではなく『使われているか』に注目しましょう。",
  },
  {
    q: "30-40代エンジニアが育休実績を重視する理由は？",
    a: "30-40代は結婚・出産・育児というライフイベントが集中する年代だからです。男性エンジニアの育休取得も一般化しつつあり、パートナーと協力して子育てするうえで、育休が取りやすい職場かどうかは生活設計に直結します。長く働き続けることを前提に転職するミドルにとって、育休実績は給与や技術と並ぶ重要な判断軸になります。",
  },
  {
    q: "育休実績が豊富な企業はどう探せばいい？",
    a: "まずくるみん・プラチナくるみん認定企業を起点に探すのが効率的です。あわせて、男性育休取得率を公表している企業、両立支援制度を採用ページで具体的に説明している企業は実績がある傾向です。IT特化型エージェントに『育休取得実績が豊富で復帰後も働きやすい企業』を希望と伝えれば、内情を踏まえた紹介を受けられます。",
  },
];

export default function ChildcareLeavePage() {
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
        title="育休取得実績が豊富な企業へ転職【くるみん認定の見極め】"
        description="育休取得実績が豊富なIT企業への転職を解説。くるみん認定など公的な指標の読み方、男性育休取得率の見極め方、制度と実態の差、注意点を30-40代エンジニア向けに整理します。"
        url="/purpose/childcare-leave/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "目的別ガイド", href: "/purpose/" },
          { name: "育休取得実績が豊富な企業へ転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          育休取得実績が豊富な企業へ転職
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | 公的な指標で育休のしやすさを見極めるガイド</p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省 くるみん認定・プラチナくるみん認定について（次世代育成支援対策推進法）",
            "厚生労働省 育児・介護休業法（男性の育児休業等取得状況の公表義務）",
          ]}
        />

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：「制度あり」ではなく“公的認定＋取得率の数値”で実態を見る</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            育休は法律で定められた制度のため、ほとんどの企業に「育休制度あり」と書かれています。<strong>しかし重要なのは制度の有無ではなく、実際に取得されているかどうか</strong>です。見極めの軸になるのが、厚生労働省の「くるみん認定」など公的な裏付けのある指標と、企業が公表する男性を含む育休取得率の数値です。くるみん認定は子育て支援に取り組む企業の客観的な証であり、取得率の数値は制度の実効性を測る具体的な手がかりになります。本記事では、これらの公的指標の読み方と、制度と実態の差を見抜く方法を整理します。
          </p>
          <div className="bg-petrol-soft border border-slate-200 rounded-lg p-6">
            <p className="text-sm font-medium text-slate-700 mb-2">こんな人におすすめ</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>- 育休を取りやすい職場に転職したい</li>
              <li>- 男性でも育休を取得できる企業を探している</li>
              <li>- 「制度あり」と実態の差を見極めたい</li>
              <li>- 子育てと両立しながら長く働きたい</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">目次</h2>
          <ol className="list-decimal list-inside space-y-1 text-sm text-petrol-deep">
            <li>くるみん認定など公的指標の読み方</li>
            <li>男性育休取得率の確認方法</li>
            <li>制度と実態の差を見抜く</li>
            <li>見極めチェックリスト</li>
            <li>30-40代の視点</li>
            <li>よくある質問</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">1. くるみん認定など公的指標の読み方</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-petrol-soft">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">指標・認定</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">意味と読み方</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "くるみん認定", desc: "次世代育成支援対策推進法に基づく厚生労働大臣の認定。子育て支援の一定基準を満たした企業の証" },
                  { type: "プラチナくるみん認定", desc: "くるみんより高い水準の取り組みを継続している企業向けの認定。実績がさらに手厚い目安" },
                  { type: "トモニン", desc: "仕事と不妊治療の両立支援に取り組む企業のシンボルマーク。両立支援の姿勢を示す" },
                  { type: "えるぼし認定", desc: "女性活躍推進法に基づく認定。女性の働きやすさの参考指標として併せて見ると有効" },
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
            これらは<strong>公的な裏付けのある指標</strong>であり、企業の自己申告だけに頼らずに子育て支援への取り組みを判断できる点で信頼性が高いものです。まずはくるみん・プラチナくるみん認定の有無を一次フィルターとして使うのが効率的です。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">2. 男性育休取得率の確認方法</h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              育児・介護休業法により、<strong>常時雇用する労働者が301人以上の企業には、男性労働者の育児休業等の取得状況の公表が義務づけられています。</strong>該当する企業は、公式サイトや採用ページ、厚生労働省の関連サイトで取得率を公表していることがあり、これは制度の実効性を測る具体的な数値になります。
            </p>
            <p>
              男性の育休取得率が公表され、かつ高い水準にある企業は、男女問わず育休を取りやすい文化が根づいている可能性が高いといえます。一方、公表義務のない中小企業では数値が見えにくいため、<strong>面接やエージェント経由で「直近の男性育休の取得実績はあるか」を直接確認する</strong>のが現実的です。数値が出てくるか、言葉を濁すかでも実態が透けて見えます。
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">3. 制度と実態の差を見抜く（正直な話）</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            正直に言えば、<strong>「育休制度あり」と「育休が取りやすい」はまったく別物</strong>です。育休は法定の制度なので、ほぼすべての企業に制度自体は存在します。問題は、制度が実際に使われているか、取得後に不利益な扱いを受けないか、復帰後も働き続けられるかです。認定や数値が整っていても、配属される部署や上司次第で取得しやすさに差が出るのが現実です。
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            だからこそ、<strong>「制度の存在」ではなく「使われている実績」に注目する</strong>のが見極めの本質です。取得率の数値、直近の取得事例、復帰後の時短・リモートの選択肢——この3つが揃っている企業は信頼度が高いといえます。家庭との両立全般は
            <Link href="/knowledge/family/" className="text-petrol hover:underline">家庭と両立するエンジニア転職</Link>
            、女性エンジニアの視点は
            <Link href="/knowledge/woman-engineer/" className="text-petrol hover:underline">女性エンジニアの転職</Link>
            も参考にしてください。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">4. 見極めチェックリスト</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "くるみん・プラチナくるみん認定の有無を確認", desc: "公的認定は子育て支援への取り組みの客観的な証。一次フィルターとして使います。" },
              { num: "2", title: "男性を含む育休取得率の数値を確認", desc: "301人以上の企業は公表義務があります。数値が高ければ実効性が高い目安になります。" },
              { num: "3", title: "直近の取得事例を確認", desc: "面接で『直近で育休を取った社員はいるか』を聞きます。具体的な事例が出るかが実態を映します。" },
              { num: "4", title: "復帰後の働き方の選択肢を確認", desc: "時短勤務・リモート・段階的復帰など、復帰後も続けられる制度があるかを確認します。" },
              { num: "5", title: "取得後の不利益取扱いがないか確認", desc: "育休取得が評価や配置で不利にならない文化か。エージェント経由で内情を確認します。" },
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">5. 30-40代の視点</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            30-40代は、結婚・出産・育児というライフイベントが集中する年代です。近年は男性エンジニアの育休取得も一般化しつつあり、パートナーと協力して子育てを担ううえで、育休が取りやすい職場かどうかは生活設計そのものに関わります。長く働き続けることを前提に転職するミドルにとって、育休実績は給与や技術と並ぶ重要な判断軸です。
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            育休を取りやすい企業は、往々にしてリモートや時短など他の両立支援も充実している傾向があります。働き方全体の柔軟性という観点で見ると、
            <Link href="/purpose/wlb/" className="text-petrol hover:underline">ワークライフバランス重視の転職</Link>
            や
            <Link href="/purpose/flextime/" className="text-petrol hover:underline">フレックスタイム制の企業</Link>
            も併せて検討する価値があります。
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
          <h2 className="text-xl font-bold mb-3">育休実績が豊富な企業を無料で紹介</h2>
          <p className="text-blue-100 text-sm mb-4">くるみん認定や両立支援に取り組む企業を、IT特化型エージェントが内情を踏まえて提案します。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "家庭と両立するエンジニア転職", href: "/knowledge/family/" },
              { name: "女性エンジニアの転職", href: "/knowledge/woman-engineer/" },
              { name: "ワークライフバランス重視の転職", href: "/purpose/wlb/" },
              { name: "フレックスタイム制の企業", href: "/purpose/flextime/" },
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
