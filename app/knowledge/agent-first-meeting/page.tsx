import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "転職エージェント初回面談の準備と流れ【聞かれること・伝えること】";
const DESCRIPTION =
  "転職エージェント初回面談の準備リスト、聞かれること、伝えるべきこと、面談後の動きを徹底解説。30代・40代エンジニアが良い求人を引き出すコツを紹介します。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

const faqs = [
  {
    q: "初回面談は対面とオンラインどちらが良いですか？",
    a: "どちらでも構いません。近年はIT特化型エージェントの多くがオンライン面談に対応しており、移動時間を節約できる点で効率的です。一方、対面の方が雰囲気や熱意が伝わりやすいと感じる人もいます。働きながら活動するならオンライン中心が現実的です。",
  },
  {
    q: "初回面談に職務経歴書は必要ですか？",
    a: "完成版でなくても、簡単な経歴メモは用意しましょう。使用技術・経験年数・直近のプロジェクト内容を整理しておくと、アドバイザーが市場価値を正確に判断でき、より合う求人を紹介してもらえます。面談を通じて職務経歴書を一緒にブラッシュアップしてくれるエージェントもあります。",
  },
  {
    q: "面談でうまく話せるか不安です",
    a: "面談は面接ではないので、ざっくばらんに話して大丈夫です。むしろ本音で話す方が、あなたに合った求人を紹介してもらえます。『まだ転職を決めていない』『年収は〜万円以上が希望』など、正直な状況と希望を伝えるのが良い面談のコツです。",
  },
  {
    q: "面談後にすぐ求人が紹介されますか？",
    a: "多くの場合、面談後の数日以内に最初の求人が紹介されます。ただし希望条件が厳しい場合は、マッチする求人が出るまで時間がかかることもあります。条件に優先順位をつけておくと、紹介がスムーズになります。",
  },
  {
    q: "複数のエージェントに登録しても大丈夫ですか？",
    a: "むしろ推奨です。エージェントごとに扱う求人や得意領域が異なるため、2〜3社に登録して比較するのがベストです。ただし、同じ求人に複数のエージェント経由で応募すると企業側で重複が発生するため、応募経路は1社に絞るよう注意しましょう。",
  },
  {
    q: "初回面談で断られることはありますか？",
    a: "稀にあります。希望条件と扱う求人が合わない場合などです。その場合も別のエージェントでは対応してもらえるケースが多いので、1社の結果で諦める必要はありません。対処法は別記事「エージェントに断られた時の対処法」で解説しています。",
  },
  {
    q: "今すぐ転職する気がなくても面談を受けていいですか？",
    a: "問題ありません。『情報収集の段階』と正直に伝えれば、市場感や自分の市場価値を知る相談として活用できます。良い求人があれば動く、というスタンスでも面談を受ける価値は十分あります。むしろ早めに接点を持っておくと、好条件の求人が出たときに動きやすくなります。",
  },
  {
    q: "30代・40代だと紹介求人が少なくなりませんか？",
    a: "未経験分野では絞られることもありますが、経験を活かせる領域では年齢だけで大きく不利になるとは限りません。IT人材は中長期的に不足が見込まれており、経験者の需要は底堅い状況です。むしろ希望が漠然としていると紹介が絞れないため、条件の優先順位を明確にすることが重要です。",
  },
];

const sections = [
  { id: "conclusion", label: "結論：準備の質が紹介の質を決める" },
  { id: "flow", label: "初回面談の流れ" },
  { id: "prepare", label: "準備リスト（チェックリスト）" },
  { id: "asked", label: "聞かれることと回答のコツ" },
  { id: "tell", label: "伝えるべきこと" },
  { id: "after", label: "面談後の動き" },
  { id: "age", label: "30代・40代の初回面談視点" },
  { id: "faq", label: "よくある質問" },
];

const flow = [
  { num: "1", title: "自己紹介・アイスブレイク（約5分）", desc: "アドバイザーの自己紹介と、あなたの簡単な自己紹介。リラックスした雰囲気で始まります。" },
  { num: "2", title: "経歴・スキルのヒアリング（約20分）", desc: "職務経歴・使用技術・担当プロジェクトの詳細を聞かれます。事前メモがあるとスムーズです。" },
  { num: "3", title: "転職理由・希望条件の確認（約15分）", desc: "なぜ転職したいのか、年収・勤務地・リモートの希望、企業規模の好みなどを確認されます。" },
  { num: "4", title: "市場価値のフィードバック（約10分）", desc: "あなたのスキルセットに基づく市場価値と、目指せる年収レンジの見立てを共有してもらえます。" },
  { num: "5", title: "求人の紹介・今後の進め方（約15分）", desc: "条件に合う求人の概要が紹介され、今後のスケジュールや進め方を確認します。" },
];

const prepare = [
  { item: "職務経歴の整理", detail: "使用技術・役割・成果をメモ。年表形式で1枚にまとめる", level: "必須", color: "text-red-600" },
  { item: "転職理由の言語化", detail: "ネガティブ要因も前向きな表現に変換しておく", level: "必須", color: "text-red-600" },
  { item: "希望条件の優先順位", detail: "年収・勤務地・技術スタック・働き方を『絶対／希望』に仕分け", level: "必須", color: "text-red-600" },
  { item: "職務経歴書", detail: "完成版でなくてもOK。叩き台があると話が早い", level: "推奨", color: "text-orange-600" },
  { item: "質問リスト", detail: "市場感・自分の課題など聞きたいこと3〜5個", level: "推奨", color: "text-orange-600" },
  { item: "オンライン環境の確認", detail: "回線・カメラ・マイク・静かな場所を事前テスト", level: "推奨", color: "text-orange-600" },
];

const asked = [
  { q: "これまでの経歴と得意な技術領域は？", tip: "年表＋得意領域1〜2点を結論から。深掘りされる前提で代表案件を1つ準備しておく。" },
  { q: "なぜ転職を考えているのですか？", tip: "不満そのものではなく『何を実現したいか』に変換して話す。志望条件と一貫させる。" },
  { q: "希望年収・勤務地・働き方は？", tip: "現年収と希望年収を具体的に。譲れない条件と妥協できる条件を分けて伝える。" },
  { q: "転職の時期感・本気度は？", tip: "『良い求人があれば〜ヶ月以内に』など時期を示すと、優先的に動いてもらいやすい。" },
  { q: "他社エージェントも使っていますか？", tip: "正直に伝えてOK。併用は一般的。隠す必要はない。" },
];

const tell = [
  { t: "希望条件の優先順位を明確に伝える", d: "『絶対条件』と『あれば嬉しい条件』を分けて伝える。全条件を満たす求人は稀なので、優先順位が明確だと紹介しやすい。" },
  { t: "現年収と希望年収を具体的に伝える", d: "曖昧だと適切なレンジの求人を出せない。現年収・希望年収・最低ライン（妥協点）まで言えると精度が上がる。" },
  { t: "苦手・不安な点も正直に伝える", d: "ブランク・転職回数・スキル不足の分野なども共有する。隠すとミスマッチが起き、結果的に不利になる。" },
  { t: "転職の時期感と本気度を伝える", d: "具体的な時期を示すと、アドバイザーの優先度が上がり、良い求人を先に回してもらいやすい。" },
  { t: "逆に質問もする", d: "『今の市場でどの経験が評価されますか？』『自分の経歴で注意点は？』など聞くと、深いアドバイスを引き出せる。" },
];

const after = [
  { num: "1", title: "紹介求人にはなるべく早く反応する", desc: "返信が早い人ほど良い求人を優先的に回してもらいやすい。可否は24時間以内を目安に返すのが理想。" },
  { num: "2", title: "見送る場合は理由を添える", desc: "『〜の条件が合わない』と理由を伝えると、次の紹介精度が上がる。無言スルーは避ける。" },
  { num: "3", title: "複数社の紹介を比較する", desc: "2〜3社のエージェントから出た求人を見比べ、得意領域や提案の質を確認する。" },
  { num: "4", title: "応募経路を1社に統一する", desc: "同じ求人に複数経由で応募しない。どのエージェント経由で応募するかを決めておく。" },
  { num: "5", title: "相性が悪ければ担当変更を依頼する", desc: "提案が的外れ・連絡が雑などの場合、担当変更を申し出るか他社に切り替えてよい。" },
];

export default function AgentFirstMeetingPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/agent-first-meeting/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ" },
          { name: "エージェント初回面談" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          転職エージェント初回面談の準備と流れ【聞かれること・伝えること】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 準備リスト・聞かれること・伝えること・面談後の動き
        </p>

        <DataNote surveyedAt="2026年6月" sources={["各社公式サイト", "経済産業省 IT人材需給調査（2019年公表）"]} />

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed mb-4">
            転職エージェントの初回面談は、その後の転職活動の方向性と紹介求人の質を左右する重要な機会です。面談は面接ではなく、あなたに合う求人を引き出すための『すり合わせの場』。準備の質がそのまま紹介の質に直結します。本記事では、準備リスト・聞かれること・伝えるべきこと・面談後の動きを、30代・40代の視点を交えて解説します。
          </p>
        </section>

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-lg p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：準備の質が紹介の質を決める</h2>
            <ul className="space-y-2 text-sm text-blue-900 leading-relaxed">
              <li>・事前に<strong>経歴・転職理由・希望条件の優先順位</strong>の3点を整理しておく。これが紹介精度を決める。</li>
              <li>・面談は面接ではない。<strong>本音と希望を正直に伝える</strong>ほど合う求人が出る。</li>
              <li>・面談後は<strong>早いレスポンスと比較</strong>。2〜3社を併用し、応募経路は1社に絞る。</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-lg p-5">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-sm text-petrol hover:underline">{s.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 流れ */}
        <section id="flow" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">初回面談の流れ（所要時間: 60〜90分）</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">
            会社により多少前後しますが、初回面談はおおむね次の流れで進みます。各パートで何が起きるかを把握しておくと、落ち着いて臨めます。
          </p>
          <div className="space-y-4">
            {flow.map((item) => (
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

        {/* 準備リスト */}
        <section id="prepare" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">準備リスト（チェックリスト）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">準備項目</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">詳細</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">重要度</th>
                </tr>
              </thead>
              <tbody>
                {prepare.map((p, i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-slate-50" : ""}>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{p.item}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{p.detail}</td>
                    <td className={`border border-slate-200 px-4 py-3 font-bold ${p.color}`}>{p.level}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 聞かれること */}
        <section id="asked" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">聞かれることと回答のコツ</h2>
          <div className="space-y-4">
            {asked.map((a, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">Q. {a.q}</h3>
                <p className="text-sm text-slate-600"><span className="font-bold text-slate-700">コツ: </span>{a.tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 伝えるべきこと */}
        <section id="tell" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">伝えるべきこと</h2>
          <div className="space-y-4">
            {tell.map((t, i) => (
              <div key={i} className="bg-petrol-soft rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-2">{i + 1}. {t.t}</h3>
                <p className="text-sm text-petrol-deep">{t.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 面談後 */}
        <section id="after" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面談後の動き</h2>
          <div className="space-y-4">
            {after.map((item) => (
              <div key={item.num} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.num}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">
            複数社の使い分けは<Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">複数エージェントの活用法</Link>も参考にしてください。
          </p>
        </section>

        {/* 30代40代視点 */}
        <section id="age" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の初回面談視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              30代・40代の初回面談で最も重要なのは、<strong>希望条件の優先順位を明確にする</strong>ことです。経験が豊富なぶん選択肢の幅も広く、希望が漠然としていると紹介を絞れず、ミスマッチな求人ばかり届くことになります。年収・働き方・技術領域・役割（マネジメント志向かスペシャリスト志向か）を整理しておきましょう。
            </p>
            <p>
              市場全体としては、経済産業省が2019年に公表した試算で2030年に最大約79万人のIT人材不足が見込まれており、経験者の需要は底堅い状況です。年齢だけで過度に悲観する必要はありませんが、『何ができるか』を具体的に語れることが前提になります。実務での判断や成果を棚卸ししておくと、市場価値のフィードバックも精度が上がります。
            </p>
            <p>
              また、ミドル世代こそ<strong>担当者との相性</strong>を見極めましょう。提案が的外れだったり、年収交渉に消極的だったりする場合は、担当変更や他社併用を遠慮なく検討してよい場面です。自分の市場価値の把握には<Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の調べ方</Link>も合わせて活用してください。
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
          <h2 className="text-xl font-bold mb-3">まずは初回面談で相談してみよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントなら、エンジニアの転職に精通したアドバイザーが無料で相談に乗ってくれます。
          </p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "エージェントに断られた時の対処法", href: "/knowledge/agent-rejection/" },
              { name: "直接応募vsエージェント", href: "/knowledge/direct-apply/" },
              { name: "複数エージェントの活用法", href: "/knowledge/multiple-agents/" },
              { name: "転職のタイムライン", href: "/knowledge/timeline/" },
              { name: "市場価値の調べ方", href: "/knowledge/market-value/" },
              { name: "エージェントの選び方", href: "/knowledge/how-to-choose/" },
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
