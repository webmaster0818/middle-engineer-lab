import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "フレックスタイム制のエンジニア求人の見極め方【2026年版】",
  description:
    "フレックス・フルフレックス・裁量労働・時差出勤の違いを制度比較表で整理。コアタイム・清算期間の確認ポイント、残業は減らない正直な注意点、30-40代の活用法まで解説。",
};

const faqs = [
  {
    q: "フレックスタイム制と残業少なめ（no-overtime）は何が違う？",
    a: "フレックスタイム制は労働時間の『配置の自由』であり、『総量の削減』ではありません。始業・終業を自分で決められる制度であって、月の総労働時間が短くなるわけではなく、清算期間内の総枠を超えれば時間外労働（残業）も発生します。つまり『早く帰れる制度』ではなく『時間を自分で組める制度』です。残業そのものを減らしたいなら、残業少なめIT企業の見極め方や、ワークライフバランス重視の転職を軸にするのが適切です。",
  },
  {
    q: "フレックスとフルフレックス（スーパーフレックス）の違いは？",
    a: "フレックスタイム制には『必ず勤務すべき時間帯＝コアタイム』が設定されているのが一般的です（例：11時〜15時）。これに対しフルフレックス（スーパーフレックス）はコアタイムがなく、清算期間内の総労働時間さえ満たせば、何時に働いても自由です。フルフレックスは自由度が高い反面、日中に連絡が取れない・チームと時間が合わないといった信頼面のリスクもあり、自己管理力が問われます。",
  },
  {
    q: "裁量労働制とフレックスタイム制はどう違う？",
    a: "フレックスタイム制は実労働時間を把握し、清算期間の総枠を超えれば残業代が発生します。一方、裁量労働制は『実際に働いた時間に関わらず、あらかじめ定めた時間働いたとみなす』制度で、原則として時間配分も成果も本人裁量に委ねられます。混同されがちですが、残業代の扱いが根本的に異なるため、求人票でどちらの制度かを必ず確認しましょう。",
  },
  {
    q: "フレックスでも残業や深夜・休日の割増は出る？",
    a: "出ます。フレックスタイム制でも、清算期間における法定労働時間の総枠を超えた部分は時間外労働として割増賃金の対象です。また、午後10時〜午前5時の深夜労働、法定休日の労働には、フレックスであっても深夜割増・休日割増が適用されます。『フレックスだから残業代が出ない』というのは誤解です。",
  },
  {
    q: "フレックス制はどんな企業・規模に多い？",
    a: "厚生労働省「令和6年就労条件総合調査」によると、フレックスタイム制を採用している企業は全体で7.2%（適用労働者は11.5%）にとどまります。ただし企業規模で大きな差があり、1,000人以上で34.9%、300〜999人で19.6%、100〜299人で9.2%、30〜99人で4.4%と、大企業ほど採用率が高い傾向です。IT業界・大企業に偏って広がっている点が、全産業平均との大きなギャップです。",
  },
  {
    q: "フレックスのエンジニア求人はどのくらいある？",
    a: "マイナビ転職で「ITエンジニア×フレックス」の求人を確認したところ16,825件でした（2026年6月閲覧時点・件数は変動します）。当サイトで件数を確認できた目的別6条件の中では最も多い数字でした。母数は多いものの、コアタイムの有無や清算期間など制度の中身は企業差が大きいため、件数の多さに安心せず一社ずつ確認しましょう。",
  },
];

export default function FlextimePage() {
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
        title="フレックスタイム制のエンジニア求人の見極め方【2026年版】"
        description="フレックス・フルフレックス・裁量労働・時差出勤の違いを比較表で整理。コアタイム・清算期間の確認、残業は減らない注意点、30-40代の活用法まで解説。"
        url="/purpose/flextime/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "目的別ガイド", href: "/purpose/" },
          { name: "フレックスタイム求人の見極め方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          フレックスタイム制のエンジニア求人の見極め方
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | 制度の違いを正しく理解して選ぶ完全ガイド</p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "マイナビ転職（求人件数・閲覧時点）",
            "厚生労働省 令和6年就労条件総合調査",
          ]}
        />

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：フレックスは“時間の配置の自由”であって“残業削減”ではない</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            多くの比較サイトは、フレックス・フルフレックス・裁量労働・時差出勤を混同したまま「自由な働き方」と一括りにしています。しかしこれらは制度として全く別物で、<strong>残業代の扱いも自由度も異なります</strong>。本記事は4制度を比較表で明確に区別し、求人票の確認ポイント（コアタイムの有無・清算期間・対象範囲）を整理します。フレックスは「労働時間をいつ配置するか」の自由であり、「総労働時間を減らす」制度ではない——この前提を押さえることが、入社後のミスマッチを防ぐ第一歩です。
          </p>
          <div className="bg-blue-50 border border-slate-200 rounded-lg p-6">
            <p className="text-sm font-medium text-slate-700 mb-2">こんな人におすすめ</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>- 子どもの送り迎えに合わせて始業・終業を調整したい</li>
              <li>- 通勤ラッシュを避けて時差で働きたい</li>
              <li>- 集中できる時間帯に合わせて作業したい</li>
              <li>- 「フレックス」と書かれた求人の中身を見極めたい</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">目次</h2>
          <ol className="list-decimal list-inside space-y-1 text-sm text-blue-700">
            <li>4つの制度を比較表で区別</li>
            <li>採用企業の実態（公的データ）</li>
            <li>求人の見極めポイント</li>
            <li>フルフレックスの注意点</li>
            <li>30-40代ミドルの活用法</li>
            <li>よくある質問</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">1. 4つの制度を比較表で区別</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">制度</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">時間配置の自由</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">残業代</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">特徴</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "フレックスタイム制", flex: "コアタイム内は固定", ot: "総枠超で発生", note: "コアタイム（必須勤務帯）あり。前後を自由に調整" },
                  { type: "フルフレックス", flex: "完全自由", ot: "総枠超で発生", note: "コアタイムなし。何時に働いてもよい" },
                  { type: "裁量労働制", flex: "本人裁量", ot: "原則みなし", note: "実時間に関わらず一定時間働いたとみなす" },
                  { type: "時差出勤", flex: "始業をずらすのみ", ot: "通常どおり", note: "所定労働時間は固定。始業・終業を一定パターンでずらす" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.type}</td>
                    <td className="px-4 py-3 text-slate-600">{row.flex}</td>
                    <td className="px-4 py-3 text-slate-600">{row.ot}</td>
                    <td className="px-4 py-3 text-slate-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            ※ 裁量労働制の「みなし」でも、深夜・休日労働の割増は別途発生します。求人票で制度名を必ず確認してください。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">2. 採用企業の実態（公的データ）</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            厚生労働省「令和6年就労条件総合調査」によると、フレックスタイム制を採用している企業は全体でわずか<strong>7.2%</strong>（適用される労働者は11.5%）です。つまり全産業で見ればフレックスは1割に満たない少数派です。
          </p>
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            一方、企業規模別では明確な差があります。<strong>1,000人以上で34.9%、300〜999人で19.6%、100〜299人で9.2%、30〜99人で4.4%</strong>。大企業ほど採用率が高く、規模が小さくなるほど急減します。
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong>独自考察：</strong>全産業平均は1割未満でも、IT業界・大企業に偏ってフレックスが広がっているのが実態です。だからこそ「ITエンジニア×フレックス」の求人件数（16,825件・2026年6月閲覧時点）が比較的多く見えるのは、この“偏在”の表れと読むのが妥当です。逆に言えば、中小・地方の企業ではフレックスがまだ一般的でなく、求人選びで条件を満たす母数が限られる点には注意が必要です。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">3. 求人の見極めポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "コアタイムの有無と時間帯を確認", desc: "コアタイムが11〜15時なのか、そもそもフルフレックスでコアタイムなしなのか。送り迎えの時間と重ならないかを確認します。" },
              { num: "2", title: "清算期間を確認", desc: "労働時間を清算する期間（1か月・最大3か月など）。期間が長いほど月をまたいだ調整がしやすく、繁閑に合わせやすくなります。" },
              { num: "3", title: "対象範囲を確認", desc: "全社員が対象か、特定職種・等級のみか。『制度はあるが自分の職種は対象外』というケースを避けます。" },
              { num: "4", title: "実際の運用・利用実態を確認", desc: "制度として存在しても、暗黙の出社時刻が決まっている職場もあります。社員口コミや面接で『実際に何時に来る人が多いか』を聞きます。" },
              { num: "5", title: "残業の扱いを確認", desc: "フレックスでも総枠超は残業です。みなし残業（固定残業代）と併用されている場合は、その時間数と超過時の扱いを確認します。" },
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">4. フルフレックスの注意点（正直な話）</h2>
          <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>
              コアタイムのないフルフレックスは魅力的ですが、自由度が高いぶん落とし穴もあります。
            </p>
            <p>
              <strong>連絡不在による信頼リスク：</strong>日中に席を外していると、チームから「いつ連絡が取れるか分からない人」と見られることがあります。非同期コミュニケーションが定着していない職場では、自由に働いているつもりが評価を下げる原因になりかねません。
            </p>
            <p>
              <strong>法定総枠を超えれば時間外：</strong>フルフレックスでも、清算期間の法定労働時間の総枠を超えた分は時間外労働です。自由に組めるからこそ、気づかないうちに総労働時間が膨らむこともあります。
            </p>
            <p>
              <strong>自己管理が前提：</strong>始業・終業の縛りがないぶん、オンオフの切り替えや生活リズムの維持は自分次第です。家庭を持つミドルは、家族の生活リズムとの調整も含めて運用設計が必要です。
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">5. 30-40代ミドルの活用法</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            30-40代にとってフレックスの最大の価値は「育児・介護と仕事の時間をかみ合わせられること」です。保育園の送り迎え、子どもの行事、親の通院付き添いなど、ミドルには平日日中に動かざるを得ない用事が増えます。フレックスは、こうした用事に合わせて始業・終業を前後にずらせる点で実用的です。
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            ただし繰り返しの通り、フレックスは残業を減らす制度ではありません。<strong>「時間を組み替えたい」のか「総労働時間を減らしたい」のか</strong>を自分の中で切り分けることが重要です。後者なら
            <Link href="/purpose/no-overtime/" className="text-blue-600 hover:underline">残業少なめIT企業の見極め方</Link>
            や
            <Link href="/knowledge/work-life-balance/" className="text-blue-600 hover:underline">ワークライフバランスの考え方</Link>
            、さらに労働日数自体を減らす
            <Link href="/purpose/four-day-week/" className="text-blue-600 hover:underline">週休3日制の求人ガイド</Link>
            を軸にしたほうが目的に合致します。
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
          <h2 className="text-xl font-bold mb-3">フレックス制の求人を無料で紹介</h2>
          <p className="text-blue-100 text-sm mb-4">制度の中身まで把握したIT特化型エージェントが、あなたの生活に合う企業を提案します。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "残業少なめIT企業の見極め方", href: "/purpose/no-overtime/" },
              { name: "ワークライフバランス重視の転職", href: "/purpose/wlb/" },
              { name: "ワークライフバランスの考え方", href: "/knowledge/work-life-balance/" },
              { name: "週休3日制の求人ガイド", href: "/purpose/four-day-week/" },
              { name: "転勤なし求人の見極め方", href: "/purpose/no-relocation/" },
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
