import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "転職理由の整理と伝え方｜ネガポジ変換の例文集とNG理由";
const DESCRIPTION =
  "エンジニア転職の転職理由を整理し、面接で伝わる形にする方法を解説。ネガティブ→ポジティブ変換の例文集、避けるべきNG理由、志望動機との一貫性の作り方を30代・40代向けに紹介します。";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/motivation/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "why-asked", label: "なぜ転職理由を聞かれるのか" },
  { id: "organize", label: "転職理由を整理する3ステップ" },
  { id: "convert", label: "ネガポジ変換 例文集" },
  { id: "ng", label: "避けるべきNG転職理由" },
  { id: "template", label: "伝え方テンプレート（PREP）" },
  { id: "consistency", label: "志望動機との一貫性" },
  { id: "midlife", label: "30代・40代の視点" },
  { id: "faq", label: "よくある質問" },
];

const organizeSteps = [
  { num: "1", title: "本音をすべて書き出す（人に見せない前提）", desc: "「残業がきつい」「評価されない」「上司と合わない」など、まずは整えずに本音を全部書き出します。ここで取り繕う必要はありません。原因の解像度を上げるのが目的です。" },
  { num: "2", title: "「現職では解決できない」かを切り分ける", desc: "書き出した不満のうち、異動や相談で解決し得るものと、構造的に変えられないものを分けます。転職で本当に解決するのはどれかを見極めます。" },
  { num: "3", title: "「避けたいこと」を「実現したいこと」に翻訳する", desc: "不満は『次に何を求めるか』の裏返しです。「裁量がない」→「設計から関わりたい」のように、向かいたい方向へ言い換えます。これが面接で語る転職理由の核になります。" },
];

const convertExamples = [
  { neg: "残業が多くて限界", pos: "持続可能なペースで開発し、長期的に技術を磨ける環境で働きたい" },
  { neg: "給与が上がらない", pos: "成果が正当に評価され、貢献に応じた報酬で報われる環境を求めている" },
  { neg: "技術が古い・レガシーばかり", pos: "モダンな技術スタックで開発手法をアップデートし、市場価値を高めたい" },
  { neg: "上司・チームと合わない", pos: "フィードバックし合える、心理的安全性の高いチームで成果を出したい" },
  { neg: "評価制度が不透明", pos: "目標と評価が明確な環境で、納得感を持って成長したい" },
  { neg: "裁量がなく言われた通り作るだけ", pos: "設計や意思決定から関わり、プロダクトに当事者として貢献したい" },
  { neg: "会社の将来性が不安", pos: "成長フェーズの事業で、自分の技術が事業インパクトに直結する経験を積みたい" },
  { neg: "雑用ばかりで開発できない", pos: "コア開発に集中できる体制で、エンジニアとしての専門性を深めたい" },
];

const ngReasons = [
  { ng: "前職の悪口・批判に終始する", why: "「環境のせい」と捉える人に見え、入社後も同じ不満を言うのではと懸念される。" },
  { ng: "「なんとなく」「雰囲気で」", why: "転職理由が曖昧だと、すぐ辞めるリスクが高いと判断されやすい。" },
  { ng: "「年収を上げたい」だけを前面に出す", why: "条件面のみだと、より高い条件があれば離れる人と見られる。動機の一つに留める。" },
  { ng: "「人間関係が嫌で」とだけ伝える", why: "対人で問題を抱えやすい人という印象を与えかねない。前向きな表現に変換する。" },
  { ng: "嘘・話を盛る", why: "深掘り質問で矛盾が出る。一貫性が崩れると信頼を一気に失う。" },
  { ng: "志望動機と矛盾する転職理由", why: "「WLB重視」と言いながら激務歓迎の志望動機など、整合しないと不信を招く。" },
];

const faqs = [
  {
    q: "転職理由と志望動機の違いは何ですか？",
    a: "転職理由は『なぜ今の会社を離れるのか（過去・現在）』、志望動機は『なぜこの会社に入りたいのか（未来）』です。面接では両者の一貫性が見られます。転職理由で『設計から関わりたい』と言うなら、志望動機も『御社では上流から携われる点に惹かれた』と地続きにすると説得力が出ます。",
  },
  {
    q: "前職の不満をそのまま伝えてはいけませんか？",
    a: "不満を『事実』として簡潔に触れるのは問題ありませんが、批判で終わらせず必ずポジティブな方向へ変換しましょう。『残業が多い』→『持続可能なペースで長く技術を磨ける環境で働きたい』のように、避けたいことを実現したいことへ翻訳するのがコツです。",
  },
  {
    q: "「年収を上げたい」は転職理由として言ってもいいですか？",
    a: "動機の一つとして伝えるのは問題ありません。ただしそれ『だけ』を前面に出すと、より良い条件があれば離れる人と見られがちです。『正当に評価される環境で成長したい。その結果として報酬にも反映されることを期待している』のように、成長や貢献と結びつけると印象が良くなります。",
  },
  {
    q: "短期間での転職や転職回数が多い場合、理由はどう伝えますか？",
    a: "回数や期間を隠すより、各転職に一貫した『軸』があることを示すのが有効です。『一貫して◯◯の領域で専門性を深めるために選択してきた』と説明できれば、ジョブホッピングではなくキャリア戦略として受け取られます。詳しくは転職回数に関する記事も参考にしてください。",
  },
  {
    q: "面接で転職理由はどのくらいの長さで話せばいいですか？",
    a: "1分前後（200〜300字程度）で簡潔にまとめ、深掘り質問に答える余地を残すのが理想です。長く語りすぎると言い訳がましく聞こえます。結論（何を求めて転職するか）を先に述べ、補足は問われてから足す構成が話しやすいです。",
  },
  {
    q: "本音と建前が乖離していて、伝え方に迷います",
    a: "建前で固めるのではなく、本音を『前向きな表現に翻訳する』のが正攻法です。嘘は深掘りで崩れますが、本音を実現したいことへ言い換えるのは嘘ではありません。整理に迷う場合は、転職エージェントに壁打ちしてもらうと客観的な言語化ができます。",
  },
  {
    q: "転職理由の添削はどこで受けられますか？",
    a: "IT特化型の転職エージェントに登録すれば、転職理由や志望動機の添削を無料で受けられます。レバテックキャリアやGeeklyのアドバイザーは企業ごとの選考傾向を把握しており、伝わりやすい表現に整える支援が受けられます。",
  },
];

export default function MotivationPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/motivation/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ガイド" },
          { name: "転職理由の整理と伝え方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          転職理由の整理と伝え方｜ネガポジ変換の例文集とNG理由
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | 本音を前向きに翻訳して伝える</p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            転職理由は、面接でほぼ必ず聞かれ、合否を左右する重要な要素です。本音がネガティブでも、それを正直に「実現したいこと」へ翻訳できれば、説得力のある転職理由になります。本記事では、転職理由の整理手順、<strong>ネガティブ→ポジティブ変換の例文集</strong>、避けるべきNG理由、志望動機との一貫性の作り方を、30代・40代の視点で解説します。
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
              <li key={t.id}><a href={`#${t.id}`} className="text-sm text-petrol hover:underline">{t.label}</a></li>
            ))}
          </ul>
        </nav>

        {/* 結論 */}
        <section className="mb-10">
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：本音は隠さず「実現したいこと」に翻訳する</h2>
            <p className="text-sm text-blue-800 leading-relaxed">
              良い転職理由は、嘘でも建前でもありません。<strong>「避けたいこと（本音）」を「次に実現したいこと」へ言い換える</strong>だけです。前職批判で終わらせず、未来志向にすること。そして<strong>転職理由と志望動機を地続きにする</strong>こと。この2点を押さえれば、深掘り質問にも一貫して答えられます。
            </p>
          </div>
        </section>

        {/* why asked */}
        <section id="why-asked" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">なぜ面接官は転職理由を聞くのか</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>面接官が転職理由を尋ねるのは、あなたを否定するためではなく、次の3点を確かめるためです。</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>定着するか</strong>：同じ不満で早期に辞めないか。原因が自社で解決できるか。</li>
              <li><strong>当事者意識があるか</strong>：問題を環境のせいだけにせず、自分で動こうとする人か。</li>
              <li><strong>志望動機と整合するか</strong>：転職理由と「うちに入りたい理由」が地続きか。</li>
            </ul>
            <p>つまり、転職理由は「過去の説明」であると同時に「未来への橋渡し」です。前向きに語れるかどうかで印象が大きく変わります。</p>
          </div>
        </section>

        {/* organize */}
        <section id="organize" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職理由を整理する3ステップ</h2>
          <div className="space-y-4">
            {organizeSteps.map((item) => (
              <div key={item.num} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.num}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* convert */}
        <section id="convert" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ネガポジ変換 例文集</h2>
          <p className="text-sm text-slate-600 mb-4">よくあるネガティブな本音を、面接で使えるポジティブな表現に変換した一覧です。自分の状況に近いものをベースに調整してください。</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">本音（ネガティブ）</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">伝え方（ポジティブ変換）</th>
                </tr>
              </thead>
              <tbody>
                {convertExamples.map((c, i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-slate-50" : ""}>
                    <td className="border border-slate-200 px-4 py-3 text-red-600">{c.neg}</td>
                    <td className="border border-slate-200 px-4 py-3 text-green-700">{c.pos}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mt-6">
            <h3 className="font-bold text-slate-700 mb-3 text-sm">面接での回答例（35歳・バックエンドエンジニア）</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              現職では運用保守が中心で、新機能の設計に関わる機会が限られていました。これまで培ったAPI設計やパフォーマンス改善の経験を、より上流から活かしたいと考えています。御社のように設計段階からエンジニアが意思決定に関われる環境で、プロダクトに当事者として貢献したいというのが転職の理由です。
            </p>
            <p className="text-xs text-slate-500 mt-2">→ 本音（「保守ばかりでつまらない」）を、批判ではなく「実現したいこと」に変換している。</p>
          </div>
        </section>

        {/* NG */}
        <section id="ng" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">避けるべきNG転職理由</h2>
          <div className="space-y-3">
            {ngReasons.map((n, i) => (
              <div key={i} className="bg-red-50 border border-red-200 rounded-lg p-5">
                <p className="text-sm font-bold text-red-700 mb-1">✕ {n.ng}</p>
                <p className="text-sm text-slate-600">{n.why}</p>
              </div>
            ))}
          </div>
        </section>

        {/* template */}
        <section id="template" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">伝え方テンプレート（PREP法）</h2>
          <div className="space-y-4">
            {[
              { num: "P", title: "Point（結論）", desc: "「◯◯を実現したくて転職を考えています」と、求めるものを先に述べる。" },
              { num: "R", title: "Reason（理由）", desc: "現職では構造的に難しい点を、批判ではなく事実として簡潔に。" },
              { num: "E", title: "Example（具体）", desc: "これまでの経験やスキルが、その実現にどうつながるかを示す。" },
              { num: "P", title: "Point（再結論）", desc: "「だからこそ◯◯な環境で貢献したい」と志望動機へ橋渡しする。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.num}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* consistency */}
        <section id="consistency" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職理由と志望動機の一貫性を作る</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            転職理由（なぜ辞めるか）と志望動機（なぜこの会社か）がつながっていないと、面接官は不信感を抱きます。下のように「軸」を1本通すのがコツです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">軸</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">転職理由</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">つながる志望動機</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-4 py-3 text-slate-600 font-medium">上流から関わりたい</td><td className="border border-slate-200 px-4 py-3 text-slate-600">保守中心で設計に関われない</td><td className="border border-slate-200 px-4 py-3 text-slate-600">企画段階からエンジニアが関与する開発体制に惹かれた</td></tr>
                <tr className="bg-slate-50"><td className="border border-slate-200 px-4 py-3 text-slate-600 font-medium">技術を更新したい</td><td className="border border-slate-200 px-4 py-3 text-slate-600">レガシー保守が中心</td><td className="border border-slate-200 px-4 py-3 text-slate-600">モダンな技術スタックと技術投資に魅力を感じた</td></tr>
                <tr><td className="border border-slate-200 px-4 py-3 text-slate-600 font-medium">持続可能に働きたい</td><td className="border border-slate-200 px-4 py-3 text-slate-600">長時間労働が常態化</td><td className="border border-slate-200 px-4 py-3 text-slate-600">健全な開発プロセスと働き方の透明性に共感した</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 mt-4">
            志望動機そのものの作り込みは<Link href="/knowledge/self-analysis/" className="text-petrol hover:underline">自己分析ガイド</Link>や<Link href="/knowledge/behavioral/" className="text-petrol hover:underline">行動面接（STAR法）ガイド</Link>も参考になります。
          </p>
        </section>

        {/* midlife */}
        <section id="midlife" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアならではの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              30代・40代は「なぜこの年齢で転職するのか」という観点も見られます。だからこそ、転職理由を<strong>キャリアの一貫性</strong>として語れると強い。これまでの選択に共通する軸（例：一貫して◯◯領域の専門性を深めてきた）を示せると、衝動的な転職ではなく戦略的な意思決定として受け取られます。
            </p>
            <p>
              年収を理由の一つに挙げること自体は自然です。doda（パーソルキャリア）の2024年度「決定年収レポート」（2025年5月公表）では、転職者の約6割が年収アップを実現したと公表されています。ただし面接では、報酬は「正当な評価の結果」として位置づけ、成長や貢献と結びつけて語る方が好印象です。
            </p>
            <p>
              本音の言語化に迷う場合は、エージェントへの壁打ちが有効です。<Link href="/knowledge/job-hopping/" className="text-petrol hover:underline">転職回数が多い場合の伝え方</Link>や<Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の調べ方</Link>もあわせて確認してみてください。
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
          <h2 className="text-xl font-bold mb-3">転職理由のプロ添削を無料で受けよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントなら、企業ごとの選考傾向を把握したアドバイザーが、転職理由と志望動機を伝わる形に整えてくれます。
          </p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "自己分析ガイド", href: "/knowledge/self-analysis/" },
              { name: "行動面接（STAR法）ガイド", href: "/knowledge/behavioral/" },
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
              { name: "技術面接対策ガイド", href: "/knowledge/tech-interview/" },
              { name: "転職回数が多い場合の伝え方", href: "/knowledge/job-hopping/" },
              { name: "市場価値の調べ方", href: "/knowledge/market-value/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
