import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "転職の後悔を防ぐ｜よくある後悔パターンと入社前チェックリスト";
const DESCRIPTION =
  "エンジニア転職でよくある後悔パターンと、入社前に確認すべきチェックリスト、オファー面談で聞くべき質問例を解説。30代・40代がミスマッチを防ぎ、納得して入社するための実践ガイドです。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "patterns", label: "よくある後悔パターン" },
  { id: "checklist", label: "入社前チェックリスト" },
  { id: "offer-questions", label: "オファー面談での質問例" },
  { id: "offer-letter", label: "オファーレターの確認ポイント" },
  { id: "mindset", label: "後悔しない判断の心構え" },
  { id: "after", label: "入社後に違和感を覚えたら" },
  { id: "midlife", label: "30代・40代の視点" },
  { id: "faq", label: "よくある質問" },
];

const patterns = [
  { title: "年収だけで決めてしまった", desc: "提示年収の高さに飛びついたが、WLBや技術内容が合わず後悔。年収は基本給・賞与・手当の総額と、働き方のバランスで見るべきだった。" },
  { title: "仕事内容を具体的に確認しなかった", desc: "「設計に関われる」と聞いていたが、実際は保守が中心。担当業務の比率を面接で踏み込んで確認していなかった。" },
  { title: "企業文化・開発文化を確認しなかった", desc: "技術スタックは魅力的だったが、レビュー文化や意思決定の進め方が合わなかった。カジュアル面談や口コミで掴めたはずの情報。" },
  { title: "残業・リモートの「実態」を聞かなかった", desc: "求人票の平均残業時間や「リモート可」を鵜呑みにし、配属チームの実態を確認しなかった。" },
  { title: "面接官の印象を軽視した", desc: "条件で決め、面接で感じた違和感を無視した。面接官の雰囲気は入社後の職場をよく反映する。" },
  { title: "現職の不満が転職先でも解決しなかった", desc: "「評価されない」が理由だったのに、評価制度を確認せず転職。同じ不満を繰り返した。" },
];

const checklist = [
  { num: "1", title: "年収は「総額」で確認したか", desc: "月給だけでなく、賞与実績・残業手当・家賃補助・退職金・ストックオプションを含めた総額で比較。見せかけの高年収に注意。" },
  { num: "2", title: "技術スタックと開発環境を具体的に確認したか", desc: "「モダン」の一言で済まさず、使用言語・FW・インフラ・CI/CD・テスト方針まで面接で確認。" },
  { num: "3", title: "担当業務の比率を確認したか", desc: "設計／実装／保守／会議の割合、入社直後に任される範囲を具体的に質問したか。" },
  { num: "4", title: "残業・有給取得率を裏取りしたか", desc: "求人票の平均値ではなく、配属予定チームの実態を口コミやエージェント経由で確認。" },
  { num: "5", title: "リモートワークの実態を確認したか", desc: "「リモート可」でも出社頻度・入社直後の運用・将来の方針まで確認したか。" },
  { num: "6", title: "評価・昇進の仕組みを確認したか", desc: "評価基準・昇給/昇格の流れ・3年後に目指せるポジションを質問したか。" },
  { num: "7", title: "現職の不満が解決する環境か検証したか", desc: "退職理由の核が、転職先で構造的に解決されるかを冷静に確認したか。" },
];

const offerQuestions = [
  { cat: "業務内容", q: "入社後3〜6か月で、具体的にどのような業務を任される想定ですか？" },
  { cat: "業務内容", q: "チームの開発フロー（要件定義〜リリース）はどのような流れですか？" },
  { cat: "働き方", q: "配属予定チームの直近の平均的な残業時間と、繁忙期の傾向を教えてください。" },
  { cat: "働き方", q: "リモートと出社の比率、入社直後の運用ルールはどうなっていますか？" },
  { cat: "評価・処遇", q: "提示いただいた年収の内訳（基本給・賞与・手当）と昇給の考え方を教えてください。" },
  { cat: "評価・処遇", q: "評価制度の基準と、昇格・等級が上がる典型的なステップを教えてください。" },
  { cat: "技術・チーム", q: "技術選定はどのように行われ、現場のエンジニアはどこまで関与できますか？" },
  { cat: "技術・チーム", q: "直近で最も苦労したプロジェクトと、その乗り越え方を教えていただけますか？" },
  { cat: "ミスマッチ防止", q: "このポジションで早期に活躍する人／苦戦する人の傾向はありますか？" },
  { cat: "ミスマッチ防止", q: "入社後のオンボーディングはどのように設計されていますか？" },
];

const mindset = [
  { title: "「完璧な会社」は存在しない", desc: "全条件が100点の企業はありません。自分にとって最も重要な条件が満たされるかを軸に判断します。" },
  { title: "焦って決めない", desc: "「早く決めたい」という焦りが最大の敵。内定の回答期限は、理由を添えて延長を相談できる場合があります。" },
  { title: "優先順位を事前に決めておく", desc: "年収・技術・WLB・成長機会などを順位付けしておくと、複数オファーで迷ったときの判断軸になります。" },
  { title: "第三者の視点を入れる", desc: "エージェント・信頼できる友人・家族の意見で、自分では気づけない盲点を補えます。" },
  { title: "入社後に「正解にしていく」姿勢を持つ", desc: "事前に100%は見極められません。入社後の行動で正解に近づける、という構えも大切です。" },
];

const faqs = [
  {
    q: "転職先の企業文化を入社前に確認する方法はありますか？",
    a: "OpenWork等の口コミサイト、企業の技術ブログ、エンジニアの登壇資料、カジュアル面談が有効です。とくにカジュアル面談は、選考前に現場の雰囲気や開発文化を直接確かめられます。転職エージェント経由なら、面接官の人柄や離職傾向など、公開情報では分かりにくい内部情報を補える場合があります。",
  },
  {
    q: "オファー面談（条件面談）では何を聞けばいいですか？",
    a: "業務内容の比率、配属チームの残業・リモートの実態、年収の内訳と昇給の考え方、評価制度、技術選定への関与度などを具体的に聞きましょう。『早く活躍する人/苦戦する人の傾向』を尋ねると、ミスマッチを事前に察知しやすくなります。条件面の確認は失礼ではなく、入社後のすれ違いを防ぐ正当なプロセスです。",
  },
  {
    q: "年収が上がっても後悔することはありますか？",
    a: "あります。年収が上がっても、働き方の悪化・技術的チャレンジの不足・人間関係の不一致などで後悔するケースは珍しくありません。年収は『基本給・賞与・手当の総額』で見つつ、WLBや業務内容とのバランスで総合判断することが大切です。",
  },
  {
    q: "求人票の『平均残業20時間』は信用していいですか？",
    a: "あくまで全社平均で、配属チームの実態とは異なることがあります。オファー面談で『配属予定チームの直近の残業傾向』を直接確認し、可能なら口コミやエージェント経由でも裏取りしましょう。一次情報を複数突き合わせるのが安全です。",
  },
  {
    q: "内定の回答期限が短く、じっくり検討できません",
    a: "回答期限は交渉可能なことが多いです。『他社選考の結果を待ちたい』『家族と相談したい』など理由を添えて、数日の延長を打診できます。エージェント経由なら延長交渉を代行してもらえる場合もあります。焦って即決するより、確認すべき点を潰してから回答しましょう。",
  },
  {
    q: "入社後に『思っていたのと違う』と感じたらどうすべきですか？",
    a: "まずは数か月、環境に慣れる時間を取りましょう。初期の違和感は、業務理解や人間関係が進むと解消されることが少なくありません。それでも構造的なミスマッチが続く場合は、上司や人事に率直に相談を。改善が見込めないと判断したら、試用期間中の対応も含めてエージェントに相談する選択肢もあります。",
  },
  {
    q: "後悔しない転職のために最も重要なことは何ですか？",
    a: "『自分が転職で何を実現したいか』を明確にし、優先順位を決めておくことです。年収・技術・働き方・成長機会のどれを最優先にするかが定まっていれば、迷ったときの判断軸になり、後から『なぜこの選択をしたか』に納得できます。",
  },
];

export default function RegretPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/regret/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ガイド" },
          { name: "転職の後悔を防ぐ" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          転職の後悔を防ぐ｜よくある後悔パターンと入社前チェックリスト
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | ミスマッチを防ぐ事前確認とオファー面談の質問</p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            「こんなはずじゃなかった」。転職後にそう感じないために、本記事では<strong>よくある後悔パターン</strong>、<strong>入社前チェックリスト</strong>、そして<strong>オファー面談で聞くべき質問例</strong>を具体的にまとめます。特に30代・40代は家庭やキャリアへの影響が大きいため、納得して入社するための確認が欠かせません。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={["doda（パーソルキャリア）2024年度 決定年収レポート（2025年5月公表）"]}
        />

        {/* 目次 */}
        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2">
            {toc.map((t) => (
              <li key={t.id}><a href={`#${t.id}`} className="text-sm text-blue-600 hover:underline">{t.label}</a></li>
            ))}
          </ul>
        </nav>

        {/* 結論 */}
        <section className="mb-10">
          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：後悔の多くは「事前確認」で防げる</h2>
            <p className="text-sm text-blue-800 leading-relaxed">
              転職の後悔は、<strong>年収だけで決める／業務や働き方の実態を確認しない／現職の不満が解決するか検証しない</strong>ことから生まれがちです。逆に言えば、<strong>入社前チェックリストとオファー面談での質問</strong>で、多くは防げます。条件面の確認は失礼ではなく、入社後のすれ違いを避ける正当なプロセスです。
            </p>
          </div>
        </section>

        {/* patterns */}
        <section id="patterns" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある後悔パターン</h2>
          <p className="text-sm text-slate-600 mb-4">転職後に「後悔した」と語られやすい、代表的なパターンを整理しました。自分が陥りやすいものを把握しておくと、確認漏れを防げます。</p>
          <div className="space-y-4">
            {patterns.map((p, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">✕ {p.title}</h3>
                <p className="text-sm text-slate-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* checklist */}
        <section id="checklist" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">入社前チェックリスト（7項目）</h2>
          <div className="space-y-4">
            {checklist.map((item) => (
              <div key={item.num} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{item.num}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* offer questions */}
        <section id="offer-questions" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">オファー面談での質問例</h2>
          <p className="text-sm text-slate-600 mb-4">
            内定後のオファー面談（条件面談）は、ミスマッチを最後に潰せる貴重な場です。下の質問をベースに、自分の優先順位に合わせて選んで聞きましょう。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">カテゴリ</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">質問例</th>
                </tr>
              </thead>
              <tbody>
                {offerQuestions.map((o, i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-slate-50" : ""}>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600 font-medium whitespace-nowrap">{o.cat}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{o.q}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 mt-4">
            複数の内定を比較する場合は<Link href="/knowledge/offer-compare/" className="text-blue-600 hover:underline">複数内定の比較方法</Link>も参考になります。
          </p>
        </section>

        {/* offer letter */}
        <section id="offer-letter" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">オファーレター（労働条件）の確認ポイント</h2>
          <div className="border border-slate-200 rounded-xl p-6 space-y-3">
            {[
              "基本給と賞与（固定／業績連動の別、過去の支給実績）",
              "みなし残業（固定残業）の有無と時間数・超過分の扱い",
              "想定年収の内訳と、昇給・昇格の考え方",
              "勤務地・転勤の可能性・リモートの運用ルール",
              "試用期間の長さと、期間中の条件（待遇が異なる場合）",
              "役職・等級・職務内容（口頭の説明と書面が一致しているか）",
              "入社日・有給付与のタイミング・各種手当",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                <span className="text-green-600 font-bold shrink-0">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">※ 口頭で聞いた条件と書面が食い違う場合は、入社前に必ず確認・修正を依頼しましょう。</p>
        </section>

        {/* mindset */}
        <section id="mindset" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">後悔しない判断の心構え</h2>
          <div className="space-y-4">
            {mindset.map((m, i) => (
              <div key={i} className="bg-blue-50 rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-2">{i + 1}. {m.title}</h3>
                <p className="text-sm text-blue-700">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* after */}
        <section id="after" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">入社後に違和感を覚えたら</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>入社直後の違和感は珍しいことではありません。次の順で対処すると、感情的な判断を避けられます。</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>まず数か月は様子を見る</strong>：業務理解や人間関係が進むと、初期の違和感が解消されることが多い。</li>
              <li><strong>違和感を具体化する</strong>：「何が」「どの程度」合わないのかを言語化し、改善可能か構造的かを切り分ける。</li>
              <li><strong>上司・人事に相談する</strong>：オンボーディングの調整や役割の見直しで解決することもある。</li>
              <li><strong>改善が見込めない場合</strong>：試用期間中の対応も含め、エージェントに相談して選択肢を整理する。</li>
            </ul>
            <p>適応のコツは<Link href="/knowledge/onboarding/" className="text-blue-600 hover:underline">オンボーディング成功法</Link>や<Link href="/knowledge/first-90days/" className="text-blue-600 hover:underline">転職後90日間の過ごし方</Link>も参考にしてください。</p>
          </div>
        </section>

        {/* midlife */}
        <section id="midlife" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアならではの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              30代・40代の転職は、住宅ローン・家族・キャリアの方向性など、後悔の影響が大きくなりがちです。だからこそ「年収が上がるか」だけでなく、<strong>働き方の持続可能性</strong>と<strong>数年後のキャリアにつながるか</strong>を同じ比重で見るべきです。
            </p>
            <p>
              年収面では、doda（パーソルキャリア）の2024年度「決定年収レポート」（2025年5月公表）で転職者の約6割が年収アップを実現したとされ、IT・通信の平均決定年収も2023年度の469万円から2024年度は486万円へと上昇したと公表されています。条件の見通しは立てやすい環境ですが、数字だけで飛びつくと後悔の典型例に陥ります。
            </p>
            <p>
              ミドル層は「即戦力」を期待される分、業務内容の認識ズレが後で響きます。オファー面談で担当範囲を具体的に確認し、<Link href="/knowledge/market-value/" className="text-blue-600 hover:underline">市場価値</Link>を踏まえて条件の妥当性を判断しましょう。判断に迷う段階ではエージェントの内部情報も有効です。
            </p>
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
          <h2 className="text-xl font-bold mb-3">ミスマッチを防ぐ企業情報をエージェントに聞こう</h2>
          <p className="text-blue-100 text-sm mb-4">IT特化型エージェントなら、企業の内部情報やオファー面談での確認ポイントについて助言を受けられ、入社後のミスマッチを抑えやすくなります。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "複数内定の比較方法", href: "/knowledge/offer-compare/" },
              { name: "オンボーディング成功法", href: "/knowledge/onboarding/" },
              { name: "転職後90日間の過ごし方", href: "/knowledge/first-90days/" },
              { name: "試用期間中の転職", href: "/knowledge/probation/" },
              { name: "年収交渉の進め方", href: "/knowledge/salary-negotiation/" },
              { name: "燃え尽き症候群と転職判断", href: "/knowledge/burnout/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
