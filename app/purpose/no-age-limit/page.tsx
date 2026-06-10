import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "年齢不問のエンジニア求人の狙い方【30-40代の実態】",
  description:
    "「年齢不問」のエンジニア求人の建前と実態を正直に解説。法律上の年齢制限禁止の背景、30-40代に本当に問われる実力と納得感、求人の見極め方、注意点を整理します。",
};

const faqs = [
  {
    q: "なぜ求人に「年齢不問」と書かれているの？",
    a: "雇用対策法により、募集・採用で年齢を理由に制限することは原則禁止されているためです。そのため求人票には年齢制限を書けず、結果として『年齢不問』『年齢不問（例外事由あり）』と表記されます。つまり『年齢不問』は企業の方針というより、法律上の建前として書かれている面が大きいと理解しておくと実態を読み違えません。",
  },
  {
    q: "年齢不問なら30-40代でも本当に評価される？",
    a: "応募はできますが、評価は年齢相応に行われます。年齢不問は『年齢で門前払いしない』という意味であって、『年齢を考慮しない』ではありません。30-40代には、その年齢に見合う実務スキル、マネジメントや専門性、即戦力性が期待されます。年齢の壁がない代わりに、実力と納得感のある志望理由が一層問われると考えるのが正解です。",
  },
  {
    q: "年齢不問でも実際は若手を求めているのでは？",
    a: "そうしたケースは正直あります。法律上は年齢制限を書けないため『年齢不問』と表記しつつ、内心では若手を想定している求人も存在します。これは求人票だけでは見抜きにくいため、エージェント経由で『この年代の採用実績はあるか』『直近の入社者の年齢層は』を確認するのが有効です。年齢層の実態を知ることで、ミスマッチな応募を減らせます。",
  },
  {
    q: "年齢を強みに変える方法は？",
    a: "30-40代の強みは、若手にはない実務経験・専門性・課題解決の引き出し・チームでの立ち回りです。職務経歴書と面接で『この経験は若手では代替できない』と示せれば、年齢はマイナスではなくプラスに転じます。逆に経験を棚卸しせず若手と同じ土俵で勝負すると、年齢が不利に働きます。",
  },
  {
    q: "未経験の30-40代でも年齢不問求人で受かる？",
    a: "ハードルは上がりますが不可能ではありません。未経験かつミドル層の場合、企業は育成コストと回収期間を慎重に見ます。独学・スクールでの学習実績、成果物、前職経験の活かし方を示し、『この年齢で採用する合理性』を相手に納得させることが鍵です。年齢不問求人であっても、準備の質が結果を大きく左右します。",
  },
  {
    q: "年齢不問の求人はどう探すのが効率的？",
    a: "中途のIT求人は法律上ほぼすべて年齢不問の表記になるため、表記だけで絞っても実態は分かりません。むしろIT特化型エージェントに『30-40代の採用実績が豊富な企業』を紹介してもらうほうが効率的です。実際にその年代を採用している企業を狙うことで、書面と内心のギャップによる不採用を避けられます。",
  },
];

export default function NoAgeLimitPage() {
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
        title="年齢不問のエンジニア求人の狙い方【30-40代の実態】"
        description="「年齢不問」のエンジニア求人の建前と実態を正直に解説。法律上の年齢制限禁止の背景、30-40代に本当に問われる実力と納得感、求人の見極め方、注意点を整理します。"
        url="/purpose/no-age-limit/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "目的別ガイド", href: "/purpose/" },
          { name: "年齢不問の求人を狙う転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          年齢不問のエンジニア求人の狙い方
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | 「年齢不問」の建前を読み解くミドルのための実態ガイド</p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省 募集・採用における年齢制限禁止について（雇用対策法第10条）",
            "厚生労働省 職業情報提供サイト（job tag）",
          ]}
        />

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：「年齢不問」は法律上の建前。実態は“年齢相応の実力”が問われる</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            日本では雇用対策法により、募集・採用で年齢を理由に制限することが原則禁止されています。そのため求人票には年齢制限を書けず、ほぼすべての中途求人が「年齢不問」と表記されます。<strong>つまり「年齢不問」は企業の積極的な方針というより、法律上の建前として書かれている面が大きい</strong>のです。実態としては、30-40代には年齢に見合った実務スキル・専門性・即戦力性が期待されます。年齢不問は「年齢で門前払いしない」という意味であって、「年齢を考慮しない」ではありません。本記事では、この建前と実態のギャップを正直に整理し、年齢を強みに変えて狙う方法を解説します。
          </p>
          <div className="bg-blue-50 border border-slate-200 rounded-lg p-6">
            <p className="text-sm font-medium text-slate-700 mb-2">こんな人におすすめ</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>- 30-40代で年齢を理由に転職をためらっている</li>
              <li>- 「年齢不問」求人の実態を正しく知りたい</li>
              <li>- 年齢を不利ではなく強みに変えたい</li>
              <li>- 自分の年代を採用している企業を効率よく探したい</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">目次</h2>
          <ol className="list-decimal list-inside space-y-1 text-sm text-blue-700">
            <li>なぜ求人は「年齢不問」になるのか</li>
            <li>「年齢不問」の建前と実態</li>
            <li>年齢を強みに変える4つの打ち手</li>
            <li>該当しやすい企業タイプと注意点</li>
            <li>見極めチェックリスト</li>
            <li>よくある質問</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">1. なぜ求人は「年齢不問」になるのか</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            雇用対策法（労働施策総合推進法）第10条により、事業主は労働者の募集・採用にあたって年齢にかかわりなく均等な機会を与えなければならず、年齢制限を設けることは原則禁止されています。長期勤続によるキャリア形成を目的とした新卒採用など、認められる例外事由はありますが、一般的な中途採用では年齢を要件にできません。
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            この結果、求人票は基本的に「年齢不問」と表記されます。<strong>重要なのは、この表記は法律の要請であって、企業が積極的に幅広い年齢層を歓迎していることの証明ではない</strong>という点です。表記を額面どおりに受け取らず、実態を確認する姿勢が欠かせません。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">2. 「年齢不問」の建前と実態</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">建前（表記）</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">実態として起こりがちなこと</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "年齢不問", desc: "法律上の標準表記。年齢で書類を即落とさないが、評価は年齢相応に行われる" },
                  { type: "年齢不問・経験者優遇", desc: "実質は実務経験での選抜。30-40代には専門性・即戦力が期待される" },
                  { type: "年齢不問・若手活躍中", desc: "内心は若手想定の場合がある。職場の年齢層を確認しないとミスマッチに" },
                  { type: "年齢不問・未経験歓迎", desc: "ミドル未経験はハードルが高い。学習実績・成果物・動機で合理性を示す必要がある" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.type}</td>
                    <td className="px-4 py-3 text-slate-600">{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">3. 年齢を強みに変える4つの打ち手</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "経験の棚卸しで“若手にない価値”を言語化", desc: "実務経験・専門性・課題解決の引き出し・チームでの立ち回りは、年数を重ねたミドルの武器です。これを具体的に示せれば年齢はプラスに転じます。" },
              { num: "2", title: "即戦力性を職務経歴書で前面に出す", desc: "入社後すぐに貢献できることを成果ベースで記述します。育成不要・即戦力という訴求は、年齢への懸念を打ち消します。" },
              { num: "3", title: "マネジメント／専門特化の方向を明確にする", desc: "人を率いる役割か、技術で深く貢献する役割か。自分の強みの方向をはっきりさせると、年齢が活きるポジションを狙えます。" },
              { num: "4", title: "年代を採用している企業に絞る", desc: "実際に30-40代を採用している企業を狙えば、年齢への懸念は最初から小さくなります。エージェント経由で採用実績を確認しましょう。" },
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

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">4. 該当しやすい企業タイプと注意点（正直な話）</h2>
          <div className="space-y-3 mb-4">
            {[
              { type: "人手不足の自社開発・受託企業", point: "経験者を年齢問わず求める傾向。ミドルの即戦力が歓迎されやすい。" },
              { type: "専門性・マネジメントを求める企業", point: "リーダー・スペシャリスト枠では、むしろ経験豊富なミドルが有利になりやすい。" },
              { type: "成熟したメガベンチャー・大企業", point: "年齢層が幅広く、ミドルの採用実績も多い。組織として年齢の多様性を許容しやすい。" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{item.type}</h3>
                <p className="text-sm text-slate-600">{item.point}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">
            注意点は、<strong>「年齢不問」の表記だけで応募先を選ばない</strong>ことです。表記と内心にギャップがある求人に応募すると、書類段階で見送られて消耗します。年代別の市場の実情は
            <Link href="/age/30s/" className="text-blue-600 hover:underline">30代のエンジニア転職</Link>
            ・
            <Link href="/age/40s/" className="text-blue-600 hover:underline">40代のエンジニア転職</Link>
            も合わせて確認してください。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">5. 見極めチェックリスト</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "「年齢不問」を額面どおり受け取らない", desc: "ほぼ全求人が年齢不問表記です。表記ではなく実態で応募先を選びましょう。" },
              { num: "2", title: "直近入社者の年齢層を確認", desc: "エージェント経由で『この年代の採用実績はあるか』を聞き、内心とのギャップを潰します。" },
              { num: "3", title: "経験の棚卸しを終えたか確認", desc: "若手にない価値を言語化できているか。これが年齢を強みに変える前提です。" },
              { num: "4", title: "即戦力性を示す材料を準備したか確認", desc: "入社後すぐ貢献できることを成果ベースで語れる状態にします。" },
              { num: "5", title: "（未経験の場合）採用の合理性を語れるか確認", desc: "学習実績・成果物・前職との接続で『この年齢で採る理由』を相手に納得させます。" },
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
          <h2 className="text-xl font-bold mb-3">年代を歓迎する求人を無料で紹介</h2>
          <p className="text-blue-100 text-sm mb-4">30-40代の採用実績が豊富な企業を、IT特化型エージェントが厳選して提案します。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "30代のエンジニア転職", href: "/age/30s/" },
              { name: "40代のエンジニア転職", href: "/age/40s/" },
              { name: "学歴不問でエンジニア転職", href: "/purpose/no-degree/" },
              { name: "30代未経験からのエンジニア転職", href: "/knowledge/inexperienced-30s/" },
              { name: "目的別ガイド一覧", href: "/purpose/" },
              { name: "ミドルエンジニア転職ラボTOP", href: "/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
