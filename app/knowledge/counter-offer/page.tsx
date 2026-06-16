import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "カウンターオファー対応【受けるべきか・断り方例文】",
  description:
    "退職を申し出た際のカウンターオファー（引き留め）への対応を解説。受けるべきかの判断軸、断り方の例文、30代・40代エンジニアが後悔しない選び方を紹介します。",
};

const toc = [
  { id: "conclusion", label: "結論：原則は断る、ただし例外もある" },
  { id: "what", label: "カウンターオファーとは" },
  { id: "types", label: "よくあるカウンターオファーの種類" },
  { id: "judge", label: "受けるべきか判断する5つの軸" },
  { id: "risk", label: "残留した場合に起こりうること" },
  { id: "decline", label: "断り方の例文集" },
  { id: "accept", label: "それでも受ける場合の確認事項" },
  { id: "middle", label: "30代・40代視点：年収だけで判断しない" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const types = [
  { type: "年収アップ", ex: "現年収からの引き上げ提示", note: "なぜ申し出るまで上げなかったのかを考える。次回昇給に織り込まれ実質据え置きになる例も" },
  { type: "昇進・役職変更", ex: "マネージャー昇進などの約束", note: "口頭の約束は実現時期と内容を書面で確認しないと流れることがある" },
  { type: "部署・チーム異動", ex: "希望の技術チームへの移動", note: "異動先の状況・人間関係は事前に把握できないことが多い" },
  { type: "働き方の変更", ex: "リモート・フレックスの個別適用", note: "あなた限定の特例は制度として定着せず、後で撤回されるリスク" },
];

const judge = [
  { num: "1", title: "転職理由の根本が解決されるか", desc: "年収不満が理由で年収提示なら検討余地あり。技術的停滞・人間関係・評価制度への不満が理由なら、年収アップでは根本解決になりません。" },
  { num: "2", title: "条件を書面で確認できるか", desc: "口頭の約束は守られない可能性があります。年収は給与改定の通知、昇進は時期と要件を、必ず文書で確認しましょう。" },
  { num: "3", title: "社内評価への影響を見込めるか", desc: "退職を申し出た事実は社内に伝わることがあります。重要プロジェクトのアサインや昇進候補に影響しないか冷静に見積もります。" },
  { num: "4", title: "転職先オファーと総合比較したか", desc: "年収・技術・成長機会・働き方・通勤など全項目でスコアリングし、カウンターオファーと並べて比較します。年収だけの比較は危険です。" },
  { num: "5", title: "決意がぶれない理由があるか", desc: "退職を決めた時点で不満は相当なものだったはず。条件提示で気持ちが完全に変わるのでなければ、初志を貫くほうが後悔は少ない傾向です。" },
];

const declines = [
  { title: "基本形（理由を語りすぎない）", body: "「ご評価いただき本当にありがとうございます。検討しましたが、今回の転職は自分のキャリアプランに基づいた決断です。予定通り進めさせてください。」" },
  { title: "年収アップを提示されたとき", body: "「条件を見直していただき感謝しています。ただ今回は年収だけが理由ではなく、◯◯に取り組める環境を選んだ決断です。気持ちは変わりませんので、退職の方向で進めさせてください。」" },
  { title: "昇進・異動を提示されたとき", body: "「ご提案ありがとうございます。魅力的なお話ですが、私が実現したい◯◯は次の環境のほうが近いと判断しました。ご期待に応えられず申し訳ありませんが、決断は変わりません。」" },
  { title: "情に訴えられたとき", body: "「これまで支えていただき、本当に感謝しています。だからこそ中途半端にせず、残りの期間は引き継ぎを最優先で進めて恩返しさせてください。」" },
  { title: "回答を保留して揺さぶられたとき", body: "「一度持ち帰って考えますとは申し上げにくく、すでに固めた決断です。次の会社とも入社日を合意済みのため、◯月◯日を最終出社とさせてください。」" },
];

const faqs = [
  {
    q: "カウンターオファーとは何ですか？",
    a: "退職を申し出た際に、現職の上司や人事から提示される引き留めのための条件のことです。年収アップ、昇進、希望部署への異動、リモートワークの個別適用など、退職を思いとどまらせる目的で出されます。あくまで『退職を撤回してもらうための提案』である点を踏まえて受け止めることが大切です。",
  },
  {
    q: "カウンターオファーは受けるべきですか、断るべきですか？",
    a: "一般論としては『原則は断り、明確な例外条件を満たすときだけ慎重に検討する』のが無難とされます。退職を決意した時点で根本的な不満があったはずで、条件提示だけでそれが解消されるとは限らないためです。年収だけが理由で、その提示で完全に納得でき、かつ書面で確約されるなら検討余地はあります。最終的には本記事の判断軸で自分の状況を点検し、エージェントにも相談して決めましょう。",
  },
  {
    q: "年収が大幅に上がる提示でも断るべきですか？",
    a: "年収アップだけが転職理由なら検討の余地はあります。ただし『なぜ退職を申し出るまで上げてくれなかったのか』『次回以降も継続的に上がるのか』を考えてください。今回の昇給が次回の定期昇給に織り込まれて実質据え置きになる、というケースも指摘されています。提示額そのものより、その後の処遇の見通しと、退職を考えた根本原因が解決するかで判断しましょう。",
  },
  {
    q: "カウンターオファーを受けると社内での評価は変わりますか？",
    a: "『一度辞めようとした人』という見方をされ、重要なプロジェクトのアサインや昇進候補から外れる可能性がある、と一般に指摘されています。もちろん会社や上司によって対応はさまざまで、必ずそうなるわけではありません。ただしリスクとして想定しておくのは妥当で、残留を選ぶ場合は、その後の関係づくりを意識的に行う必要があります。",
  },
  {
    q: "カウンターオファーの上手な断り方は？",
    a: "『検討しましたが、今回はキャリアプランに基づいた決断です』と、感謝を述べたうえで理由を語りすぎずに伝えるのが基本です。具体的な不満を持ち出すと反論や条件の上乗せを招きやすいため避けます。『次の会社と入社日を合意済み』という事実を添えると、引き留めが収まりやすくなります。本記事の『断り方の例文集』を状況に合わせて活用してください。",
  },
  {
    q: "カウンターオファーについてエージェントに相談できますか？",
    a: "できます。転職エージェントは引き留め対応の事例を多く扱っており、客観的な立場から『受けるべきか・断るべきか』の視点を提供してくれます。感情に流されて判断しそうなときほど、第三者に整理を手伝ってもらう価値があります。担当者には、提示された条件と自分が転職を決めた理由の両方を正直に共有しましょう。",
  },
  {
    q: "残留を一度受け入れた後で、やはり転職したくなったらどうなりますか？",
    a: "再び退職を申し出ること自体は可能ですが、短期間で二度目の退職表明をすると、社内の信頼回復が難しくなることがあります。また転職先の内定を断った後では、同じ条件で戻れるとは限りません。だからこそ最初の判断時に『本当に残って後悔しないか』を十分に検討することが重要です。迷いが残るなら、無理に残留を選ばないほうが安全な場合が多いとされます。",
  },
  {
    q: "そもそもカウンターオファーを出されないようにできますか？",
    a: "完全には防げませんが、退職の意思が固いことを明確に示すと引き留めの余地が減ります。具体的には、最初の切り出しの段階で『すでに次の会社と入社日を合意している』『退職の方向で進めたい』と前提を共有しておくことです。退職の切り出し方そのものは退職の伝え方ガイドにまとめています。条件交渉を期待していると受け取られない伝え方が、結果的にスムーズな退職につながります。",
  },
];

export default function CounterOfferPage() {
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
        title="カウンターオファー対応【受けるべきか・断り方例文】"
        description="退職を申し出た際のカウンターオファー（引き留め）への対応を解説。受けるべきかの判断軸、断り方の例文、30代・40代エンジニアが後悔しない選び方を紹介します。"
        url="/knowledge/counter-offer/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "カウンターオファー対応" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          カウンターオファー対応【受けるべきか・断り方例文】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 引き留めの判断軸と断り方の例文
        </p>

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed mb-4">
            退職を申し出たら、上司から「年収を上げるから残ってくれ」と言われた——こうした引き留め（カウンターオファー）を経験する30代・40代エンジニアは少なくありません。対応を誤ると、その後のキャリアに長く影響します。本記事では、受けるべきかの判断軸、残留のリスク、そして角を立てない断り方の例文を整理します。
          </p>
        </section>

        <DataNote surveyedAt="2026年6月" />

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-sm text-petrol hover:underline">{t.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：原則は断る。受けるなら条件を満たすときだけ</h2>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>・退職を決めた根本理由が<strong>年収以外</strong>なら、年収アップでは解決しないため断るのが基本。</li>
              <li>・受けるなら<strong>(1)理由が年収のみ (2)提示に完全納得 (3)書面で確約</strong>の3条件が揃うときに限る。</li>
              <li>・断るときは<strong>理由を語りすぎず</strong>、「入社日を合意済み」を添えるとスムーズ。</li>
            </ul>
          </div>
        </section>

        {/* とは */}
        <section id="what" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">カウンターオファーとは</h2>
          <p className="text-slate-600 leading-relaxed">
            カウンターオファーとは、退職を申し出た社員に対して会社側が提示する引き留め条件のことです。優秀な人材の流出は採用コストや事業への影響が大きいため、年収・役職・働き方などの条件を見直して残留を促します。重要なのは、これが「あなたのため」というより「会社が退職を回避するため」の提案でもある、という点を冷静に踏まえることです。
          </p>
        </section>

        {/* 種類 */}
        <section id="types" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくあるカウンターオファーの種類</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">種類</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">具体例</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">注意点</th>
                </tr>
              </thead>
              <tbody>
                {types.map((t, i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-slate-50" : ""}>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{t.type}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{t.ex}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{t.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 判断軸 */}
        <section id="judge" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">受けるべきか判断する5つの軸</h2>
          <div className="space-y-4">
            {judge.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.num}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 mt-4">
            軸4の「総合比較」では、転職先オファーとの並列スコアリングが有効です。比較の方法は
            <Link href="/knowledge/offer-compare/" className="text-petrol hover:underline">複数内定の比較方法</Link>
            を参考にしてください。
          </p>
        </section>

        {/* リスク */}
        <section id="risk" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">残留した場合に起こりうること</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            カウンターオファーを受けて残留する選択には、次のようなリスクが一般に指摘されています。必ず起こるわけではありませんが、判断材料として把握しておきましょう。
          </p>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-4">
              <p className="text-sm text-slate-600"><strong className="text-slate-800">根本不満の再燃：</strong>年収以外の不満（技術・評価・人間関係）が理由だった場合、待遇が変わっても根本原因が残り、再び転職を考えやすい。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <p className="text-sm text-slate-600"><strong className="text-slate-800">社内での見られ方の変化：</strong>「一度辞めようとした人」という見方をされ、重要案件のアサインや昇進候補から外れる可能性。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <p className="text-sm text-slate-600"><strong className="text-slate-800">条件が口約束に終わる：</strong>昇進・異動の約束が書面化されず、時期が来ても実現しない例。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-4">
              <p className="text-sm text-slate-600"><strong className="text-slate-800">転職先を失う：</strong>内定を辞退した後に残留を後悔しても、同じ条件で戻れるとは限らない。</p>
            </div>
          </div>
        </section>

        {/* 断り方 */}
        <section id="decline" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">断り方の例文集</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            断るときの鉄則は「感謝を示す・理由を語りすぎない・決断は変わらないと明言する」の3点です。具体的な不満を持ち出すと、条件の上乗せや反論を招きます。状況に合わせて以下を使い分けてください。
          </p>
          <div className="space-y-4">
            {declines.map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-700 bg-petrol-soft rounded p-3">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* それでも受ける場合 */}
        <section id="accept" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">それでも受ける場合の確認事項</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            判断軸を点検した結果「受ける」と決めた場合は、後でこじれないよう次を必ず確認しておきましょう。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol font-bold mt-0.5">✓</span><span>年収・等級の変更は給与改定通知など書面で確認したか</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol font-bold mt-0.5">✓</span><span>昇進・異動の約束は「時期」と「要件」を明文化したか</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol font-bold mt-0.5">✓</span><span>転職を決めた根本の不満が、本当にこの条件で解消されるか</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol font-bold mt-0.5">✓</span><span>内定先への辞退連絡を、誠実かつ早めに行ったか</span></li>
              <li className="flex items-start gap-2"><span className="text-petrol font-bold mt-0.5">✓</span><span>残留後の社内コミュニケーションを立て直す心づもりがあるか</span></li>
            </ul>
          </div>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代視点：年収だけで判断しない</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            30代・40代は住宅ローンや教育費など固定支出が大きく、目先の年収アップ提示に心が動きやすい時期です。だからこそ、目先の金額ではなく「数年後のキャリアと処遇」で判断する視点が欠かせません。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">「今いくら上がるか」より「この先どう上がるか」</h3>
              <p className="text-sm text-slate-600">引き留めの年収アップが、次回以降の昇給枠を先食いしているだけだと、中長期では伸び悩みます。自分の市場価値の伸びしろは<Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の測り方</Link>で確認しておきましょう。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">技術的キャリアの停滞は年収では埋まらない</h3>
              <p className="text-sm text-slate-600">レガシー環境からの脱出や新領域への挑戦が動機なら、待遇改善では解決しません。ミドル層は「あと何年、どの技術で戦うか」を年収より優先して考えると後悔が減ります。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">そもそも引き留めさせない伝え方を</h3>
              <p className="text-sm text-slate-600">迷いを残さないためには、退職の切り出し時点で意思を明確にしておくのが有効です。切り出し方は<Link href="/knowledge/resignation/" className="text-petrol hover:underline">退職の伝え方ガイド</Link>を参照してください。</p>
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
          <h2 className="text-xl font-bold mb-3">引き留めの判断に迷ったら相談を</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントは引き留め対応の事例が豊富。客観的な視点で判断をサポートします。
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
              { name: "退職の伝え方ガイド", href: "/knowledge/resignation/" },
              { name: "複数内定の比較方法", href: "/knowledge/offer-compare/" },
              { name: "年収交渉のコツ", href: "/knowledge/salary-negotiation/" },
              { name: "市場価値の測り方", href: "/knowledge/market-value/" },
              { name: "転職を後悔しないチェックリスト", href: "/knowledge/regret/" },
              { name: "転職スケジュール（在職中の進め方）", href: "/knowledge/timeline/" },
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
