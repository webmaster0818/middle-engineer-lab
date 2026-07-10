import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "面接の逆質問【エンジニア向け例文集・避けるべき質問】";
const DESCRIPTION =
  "エンジニア転職の面接で「何か質問はありますか」と聞かれたときの逆質問を、評価される具体例・場面別の例文・避けるべきNG質問まで実践的に解説。30代40代がマネジメント・技術選定・裁量を見極めるための質問もまとめます。";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/reverse-questions/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：逆質問の基本方針" },
  { id: "why", label: "逆質問が評価される理由" },
  { id: "good", label: "おすすめの逆質問（場面別例文）" },
  { id: "midlife", label: "30代・40代ならではの逆質問" },
  { id: "ng", label: "避けるべき逆質問" },
  { id: "stage", label: "選考フェーズ別の質問の使い分け" },
  { id: "tips", label: "逆質問を活かすコツ" },
  { id: "faq", label: "よくある質問" },
];

const goodQuestions = [
  {
    scene: "仕事内容・役割を深掘りする",
    items: [
      "入社後、最初の3カ月で期待される役割や成果について、具体的に教えていただけますか。",
      "このポジションで活躍されている方には、どのような共通点がありますか。",
      "チームが今、最も課題に感じていることは何でしょうか。私の経験で貢献できる部分があれば知りたいです。",
    ],
  },
  {
    scene: "技術・開発環境を確認する",
    items: [
      "技術選定はどのように意思決定されていますか。現場のエンジニアの意見はどの程度反映されますか。",
      "技術的負債への取り組みや、リファクタリングに割く時間は確保されていますか。",
      "コードレビューやテスト、CI/CDの運用について、現在の体制を教えていただけますか。",
    ],
  },
  {
    scene: "チーム・働き方を知る",
    items: [
      "チームの構成（人数・職種・経験年数の分布）はどのようになっていますか。",
      "リモートと出社の比率や、コミュニケーションの取り方について教えてください。",
      "学習やキャッチアップのための制度（書籍購入、カンファレンス参加など）はありますか。",
    ],
  },
  {
    scene: "意欲・志望度を示す",
    items: [
      "御社の○○というプロダクトに魅力を感じています。今後の開発ロードマップで注力される領域はどこでしょうか。",
      "面接を通じて御社への志望度がさらに高まりました。入社までに準備しておくと良いことがあれば教えてください。",
    ],
  },
];

const midlifeQuestions = [
  {
    title: "マネジメントと現場のバランス",
    desc: "「このポジションは、マネジメントと実装のどちらに比重がありますか。将来的にどちらの方向に進むキャリアパスが想定されていますか」。プレイングマネージャーを求められているのか、純粋なマネジメントなのかを早めに確認できます。",
  },
  {
    title: "裁量と意思決定の範囲",
    desc: "「技術選定や設計方針について、どこまで現場に裁量がありますか。意思決定のプロセスを教えてください」。ミドル層は裁量の有無が定着に直結するため、入社前に確認しておくと入社後のギャップを防げます。",
  },
  {
    title: "チームの成熟度と組織課題",
    desc: "「開発組織として、今後1〜2年で解決したい課題は何でしょうか」。経験者として課題解決にどう貢献できるかを見極められ、同時に貢献意欲を示せます。",
  },
  {
    title: "評価と年齢構成",
    desc: "「評価制度はどのような軸で運用されていますか」「チームの年齢層やマネージャーの年代を教えてください」。年上の部下・年下の上司といった構図への不安を、誠実な聞き方で解消できます。",
  },
];

const ngQuestions = [
  {
    title: "調べればわかることを聞く",
    desc: "「御社はどんな事業をしていますか」など、公式サイトや求人票に書かれている内容を質問するのはNGです。準備不足の印象を与えます。",
  },
  {
    title: "「特にありません」と答える",
    desc: "逆質問がないのは、志望度が低い・関心が薄いと受け取られがちです。最低でも2〜3個は用意しておきましょう。",
  },
  {
    title: "待遇・条件ばかりを序盤で聞く",
    desc: "一次面接の早い段階で残業・有給・年収の話を前面に出すと、条件しか見ていない印象になります。条件確認は最終面接やオファー面談が適切です。",
  },
  {
    title: "Yes/Noで終わる質問だけにする",
    desc: "「残業はありますか」より「繁忙期はいつ頃で、どの程度の稼働になりますか」のように、会話が広がるオープンな聞き方を意識します。",
  },
  {
    title: "面接官が答えにくい質問をする",
    desc: "現場面接官に経営戦略の詳細を聞く、人事に技術選定の細部を聞くなど、相手の立場に合わない質問は避けます。質問は相手の役割に合わせます。",
  },
  {
    title: "ネガティブ・詰問調になる",
    desc: "「離職率が高いと聞きましたが本当ですか」のような切り口は印象を損ねます。「定着率を高めるために取り組んでいることはありますか」と前向きに言い換えます。",
  },
];

const faqs = [
  {
    q: "逆質問は何個くらい用意すればいいですか？",
    a: "面接1回あたり、実際に使うのは2〜3個が目安ですが、準備としては5〜8個用意しておくと安心です。面接の中で疑問が解消されてしまうこともあるため、複数のテーマ（仕事内容・技術・チーム・キャリア）からストックしておくと、その場で柔軟に選べます。",
  },
  {
    q: "「特に質問はありません」と答えても大丈夫ですか？",
    a: "避けた方が無難です。逆質問がないと、志望度が低い・自社への関心が薄いと受け取られるリスクがあります。面接で疑問がすべて解消された場合でも、「お話を伺ってますます志望度が高まりました。入社までに準備しておくと良いことはありますか」のように、意欲を示す質問につなげましょう。",
  },
  {
    q: "年収や残業について逆質問で聞いてもいいですか？",
    a: "聞いても問題ありませんが、タイミングが重要です。一次面接の早い段階で待遇面を前面に出すと、条件しか見ていない印象を与えかねません。年収や働き方の詳細は、最終面接やオファー面談で確認するのが適切です。聞く場合も「繁忙期の稼働状況」のように、業務理解を深める文脈で尋ねると自然です。",
  },
  {
    q: "面接官によって逆質問を変えるべきですか？",
    a: "変えるべきです。現場のエンジニアには技術スタックや開発フローを、マネージャーにはチーム運営や評価制度を、人事には制度やキャリアパスを聞くなど、相手の役割に合った質問をすると会話が深まり、準備の丁寧さも伝わります。誰に何を聞くか、面接前に役割を想定して整理しておきましょう。",
  },
  {
    q: "30代・40代の逆質問で意識すべきことは？",
    a: "ミドル層は「裁量」「マネジメントの比重」「組織課題」を確認できる質問が有効です。経験者として何を任され、どこまで意思決定に関われるかは入社後の満足度に直結します。また、課題を尋ねて「自分ならこう貢献できる」と示せる質問は、即戦力としての評価にもつながります。",
  },
  {
    q: "逆質問でメモを取ってもいいですか？",
    a: "問題ありません。むしろ熱心に話を聞いている姿勢として好印象になることが多いです。事前にノートやスマートフォンのメモに質問リストを用意しておき、回答を書き留めながら進めると、入社後のミスマッチ防止にも役立ちます。オンライン面接の場合は、メモを取る旨を一言添えると丁寧です。",
  },
  {
    q: "逆質問で内定が左右されることはありますか？",
    a: "逆質問だけで合否が決まることは多くありませんが、評価の材料にはなります。的確な質問は「自社をよく理解している」「課題意識が高い」と好印象を与え、逆に準備不足の質問はマイナスに働きます。最後の印象を左右する場面でもあるため、軽視せず準備しておく価値があります。",
  },
];

export default function ReverseQuestionsPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/reverse-questions/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "面接の逆質問" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          面接の逆質問【エンジニア向け例文集・避けるべき質問】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 評価される逆質問とNG例を実例で解説
        </p>

        {/* 直答box (P6-C2) */}
        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】面接の逆質問は何をどう聞けばいい？</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: 「仕事内容・技術・チーム・キャリア」の4テーマから、相手の役割に合った質問を2〜3個用意するのが基本です。調べればわかることや待遇の詰問は避けます。</strong></p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・課題を尋ねて「自分ならどう貢献できるか」を示せる質問が高評価につながる</li><li>・「特にありません」は志望度が低いと受け取られかねないため避ける</li><li>・30代・40代は裁量・マネジメントの比重・組織課題を確認できる質問が有効</li></ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          面接終盤の「何か質問はありますか」は、単なる確認ではなく評価の一部です。逆質問は志望度・理解度・課題意識を示す絶好の機会であり、準備の差がはっきり出る場面でもあります。本記事では、そのまま使える逆質問の例文を場面別に紹介し、ミドル層ならではの質問、避けるべきNG質問、選考フェーズごとの使い分けまで実践的に解説します。
        </p>

        <DataNote surveyedAt="2026年6月" />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：逆質問の基本方針</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              逆質問の基本は、<strong>「仕事内容・技術・チーム・キャリア」の4テーマから、相手の役割に合った質問を2〜3個」</strong>用意すること。調べればわかることや待遇の詰問は避け、課題を尋ねて「自分ならどう貢献できるか」を示せる質問が高評価につながります。
            </p>
            <p className="text-slate-700 leading-relaxed">
              「特にありません」は志望度が低いと受け取られかねないため避けましょう。逆質問は、入社後のミスマッチを防ぐための情報収集の場でもあります。聞きたいことを誠実に、前向きな言い回しで尋ねるのが鉄則です。
            </p>
          </div>
        </section>

        {/* 評価される理由 */}
        <section id="why" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">逆質問が評価される理由</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            面接官は逆質問から、次のようなポイントを見ています。質問の中身そのものが、あなたの姿勢を映す鏡になります。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "志望度の高さ", desc: "事業や開発体制に踏み込んだ質問は、本気で入社を検討している証として伝わります。" },
              { title: "理解度・準備力", desc: "企業研究を踏まえた質問は、丁寧に準備してきた候補者という印象を与えます。" },
              { title: "課題意識・貢献意欲", desc: "チームの課題を尋ね、解決にどう関われるかを示す質問は、即戦力としての評価につながります。" },
            ].map((r, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{r.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* おすすめ逆質問 */}
        <section id="good" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">おすすめの逆質問（場面別例文）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            テーマ別の例文です。自分の関心や応募先に合わせて言い回しを調整してください。複数のテーマからストックしておくと、面接の流れに応じて柔軟に選べます。
          </p>
          <div className="space-y-4">
            {goodQuestions.map((g, i) => (
              <div key={i} className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-100 px-5 py-2 text-sm font-bold text-slate-700">{g.scene}</div>
                <ul className="px-5 py-4 space-y-2">
                  {g.items.map((q, j) => (
                    <li key={j} className="text-sm text-slate-700 leading-relaxed flex gap-2">
                      <span className="text-petrol shrink-0">・</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ミドルの逆質問 */}
        <section id="midlife" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代ならではの逆質問</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ミドル層は「裁量」「マネジメントの比重」「組織課題」を確認できる質問が特に有効です。入社後の満足度や定着に直結するポイントを、誠実な聞き方で押さえましょう。
          </p>
          <div className="space-y-4">
            {midlifeQuestions.map((m, i) => (
              <div key={i} className="bg-petrol-soft rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-2">{m.title}</h3>
                <p className="text-sm text-petrol-deep leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            マネジメント職への転換を考えている場合は
            <Link href="/knowledge/management/" className="text-petrol hover:underline">マネジメント転身ガイド</Link>
            も参考になります。
          </p>
        </section>

        {/* NG */}
        <section id="ng" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">避けるべき逆質問</h2>
          <div className="space-y-4">
            {ngQuestions.map((n, i) => (
              <div key={i} className="bg-red-50 rounded-lg p-5">
                <h3 className="font-bold text-red-800 mb-2">{n.title}</h3>
                <p className="text-sm text-red-700 leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* フェーズ別 */}
        <section id="stage" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フェーズ別の質問の使い分け</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            同じ逆質問でも、面接の段階によって適切なテーマは変わります。相手の立場に合わせて質問を選びましょう。
          </p>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">一次面接（現場エンジニア・リーダー）</h3>
              <p className="text-sm text-slate-600">技術スタック、開発フロー、チーム構成、日々の業務の進め方など、現場目線の具体的な質問が向いています。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">二次面接（マネージャー・部門長）</h3>
              <p className="text-sm text-slate-600">チーム運営、評価制度、期待される役割、組織の課題やロードマップなど、一段上の視点の質問が適しています。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">最終面接（役員・経営層）</h3>
              <p className="text-sm text-slate-600">事業の方向性、今後注力する領域、組織文化など、経営視点の質問を。待遇の詳細確認はオファー面談に回します。</p>
            </div>
          </div>
        </section>

        {/* コツ */}
        <section id="tips" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">逆質問を活かすコツ</h2>
          <ul className="space-y-3">
            {[
              "面接の会話で出た話題に関連づけて質問すると、「ちゃんと聞いていた」という印象を与えられる。",
              "質問の前に「先ほど○○とお話しされていましたが」と一言添えると、自然で深い対話になる。",
              "質問しっぱなしにせず、回答に対して「ありがとうございます。それなら○○の経験が活かせそうです」と自分の話につなげる。",
              "事前に役割別の質問リストを用意し、面接官の肩書きが分かったら最適な質問を選ぶ。",
              "メモを取りながら聞くと、熱心さが伝わり、入社後の判断材料にもなる。",
            ].map((tip, i) => (
              <li key={i} className="flex gap-3 items-start border border-slate-200 rounded-lg p-4">
                <span className="text-petrol font-bold shrink-0">✓</span>
                <span className="text-sm text-slate-600 leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12 scroll-mt-20">
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
          <h2 className="text-xl font-bold mb-3">面接対策はエージェントと進めよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントなら、企業ごとの面接傾向や逆質問のヒントも共有してくれます。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "技術面接対策ガイド", href: "/knowledge/tech-interview/" },
              { name: "行動面接（ビヘイビア）対策", href: "/knowledge/behavioral/" },
              { name: "カジュアル面談の進め方", href: "/knowledge/casual-interview/" },
              { name: "自己PRの書き方・例文", href: "/knowledge/self-pr/" },
              { name: "30代エンジニアの転職", href: "/age/30s/" },
              { name: "転職ナレッジ一覧", href: "/knowledge/" },
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
