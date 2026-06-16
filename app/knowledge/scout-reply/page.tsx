import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "スカウト返信の例文｜状況別5パターンとそのまま使える型";
const PAGE_DESC =
  "30代・40代エンジニア向けにスカウト返信の例文を網羅。興味あり・条件確認・丁寧な辞退・他社選考中・条件交渉打診の5パターンを、好印象の型と件名・返信速度のコツとともに紹介。コピペで使える文例集です。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：型に沿えば返信は迷わない" },
  { id: "type", label: "スカウトの種別と本気度" },
  { id: "should-reply", label: "返信すべきかの判断基準" },
  { id: "format", label: "好印象の返信の型" },
  { id: "examples", label: "状況別の返信例文5パターン" },
  { id: "agent-vs-company", label: "エージェントと企業ダイレクトのトーン差" },
  { id: "middle", label: "30代・40代の返信の注意点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const examples = [
  {
    label: "① 興味あり・面談を希望する",
    subject: "件名：スカウトのお礼と面談のお願い（氏名）",
    body: `〇〇株式会社 採用ご担当 △△様

このたびはスカウトをお送りいただき、ありがとうございます。
〇〇（氏名）と申します。

ご紹介いただいた△△ポジションについて、〇〇（技術領域）の経験を活かせる点に強く関心を持ちました。
ぜひ一度、カジュアル面談で詳しいお話を伺えればと考えております。

下記の日程で調整可能です。ご都合のよい時間帯をお知らせください。
・〇月〇日（〇）終日
・〇月〇日（〇）午後

何卒よろしくお願いいたします。`,
    note: "お礼→関心点→希望アクション→日程提示の順。日程を先に出すと調整が速く進みます。",
  },
  {
    label: "② 条件を確認してから判断したい（保留）",
    subject: "件名：スカウトのお礼とご質問（氏名）",
    body: `〇〇株式会社 採用ご担当 △△様

スカウトをお送りいただきありがとうございます。〇〇（氏名）と申します。

△△ポジションに関心がありますが、判断のため数点確認させていただけますでしょうか。
・想定している年収レンジ
・勤務形態（リモート／出社の比率）
・主な技術スタックと、配属予定チームの規模

お手数ですがご回答いただけますと幸いです。内容を踏まえ、面談をお願いできればと考えております。

よろしくお願いいたします。`,
    note: "辞退ではなく前向きな保留。確認したい点を箇条書きで簡潔に。給与だけに偏らせないのがコツ。",
  },
  {
    label: "③ 興味がなく丁寧に辞退する",
    subject: "件名：スカウトのお礼（氏名）",
    body: `〇〇株式会社 採用ご担当 △△様

このたびはスカウトをお送りいただき、ありがとうございます。〇〇（氏名）と申します。

ご紹介いただいたポジションについて拝見しましたが、現在は〇〇（領域・働き方など）を軸に検討しているため、今回は見送らせていただきたく存じます。

ご丁寧にお声がけいただいたにもかかわらず、申し訳ございません。
貴社の今後のご発展をお祈り申し上げます。`,
    note: "無視せず一言返すと印象が良く、将来の縁も残ります。理由は具体的に書きすぎず端的に。",
  },
  {
    label: "④ 他社の選考が進んでいる",
    subject: "件名：スカウトのお礼と現状のご連絡（氏名）",
    body: `〇〇株式会社 採用ご担当 △△様

スカウトをありがとうございます。〇〇（氏名）と申します。

率直に申し上げますと、現在他社の選考が最終段階にあり、近く結論が出る見込みです。
そのため、すぐに選考へ進むことは難しい状況です。

もし御社でもスケジュールにご配慮いただけるようでしたら、改めてお話を伺いたく存じます。可能な範囲で結構ですので、選考の流れと想定期間をお知らせいただけますと幸いです。`,
    note: "状況を正直に伝えつつ関心は残す。スピード感を企業側に委ねることで、無理のない調整ができます。",
  },
  {
    label: "⑤ 条件交渉を打診する",
    subject: "件名：スカウトのお礼とご相談（氏名）",
    body: `〇〇株式会社 採用ご担当 △△様

スカウトをお送りいただきありがとうございます。〇〇（氏名）と申します。

△△ポジションに関心を持っております。一点ご相談で、現職の年収が〇〇万円のため、できれば同水準以上での検討をお願いしたく考えております。

経験としては〇〇（実績・スキル）でお役に立てると考えております。
ご検討が可能か、面談の中で擦り合わせさせていただければ幸いです。`,
    note: "返信段階での交渉は「打診」にとどめ、断定しない。実績を添えて根拠を示すと話が進みやすくなります。本格的な交渉は内定前後で。",
  },
];

const faqs = [
  {
    q: "スカウトには必ず返信すべきですか？",
    a: "興味がなくても一言返すのが望ましいです。無視しても問題はありませんが、丁寧な辞退を返しておくと印象が良く、将来別のポジションで再び縁ができることもあります。ただし、明らかにばら撒き型の定型文スカウトであれば、無理に返信する必要はありません。",
  },
  {
    q: "返信はどのくらいの速さが理想ですか？",
    a: "24〜48時間以内が目安です。早すぎる即レスは「待っていた」と取られて交渉上不利になることもあるため、内容を吟味したうえで1〜2日内に返すのが落ち着いた印象を与えます。土日を挟む場合は翌営業日でも問題ありません。",
  },
  {
    q: "プラチナスカウトと通常スカウトは何が違いますか？",
    a: "サービスにより呼称は異なりますが、一般に企業やヘッドハンターが個別に内容を作り込んで送る上位スカウトは、本気度が高い傾向があります。一斉送信の通常スカウトより返信を優先する価値があります。スカウトの仕組み全体は別記事で解説しています。",
  },
  {
    q: "条件交渉は返信の段階でしてよいですか？",
    a: "打診程度なら問題ありません。ただし返信段階で強く条件を主張すると、選考前から印象を損ねるおそれがあります。「同水準以上を希望」と意向を伝える程度にとどめ、具体的な金額交渉は内定前後のフェーズで行うのが定石です。",
  },
  {
    q: "複数社から同時にスカウトが来たらどうすればいいですか？",
    a: "それぞれに状況を正直に伝えて構いません。「他社の選考も進めている」と伝えること自体はマイナスになりません。むしろ需要のある人材と受け取られます。スケジュールを揃えて比較できるよう、各社の選考期間を確認しておきましょう。",
  },
  {
    q: "件名はどう書けばいいですか？",
    a: "「スカウトのお礼と〇〇（用件）（氏名）」のように、用途と氏名が一目で分かる件名が親切です。担当者は多くのやり取りを抱えているため、用件が明確だと返信が早まります。",
  },
];

export default function ScoutReplyPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/knowledge/scout-reply/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "スカウト返信の例文" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          スカウト返信の例文｜状況別5パターンとそのまま使える型
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 30代・40代エンジニアのためのスカウト返信ガイド
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          スカウトが届いても、どう返信すればよいか迷う方は多いはずです。本記事は返信の例文に特化し、興味あり・条件確認・丁寧な辞退・他社選考中・条件交渉打診の5パターンを、そのまま使える文例として網羅します。好印象を与える返信の型、件名の付け方、返信速度の目安、エージェントと企業ダイレクトのトーン差まで整理しました。スカウトの仕組みそのものは<Link href="/knowledge/scout/" className="text-petrol hover:underline">スカウトの活用法</Link>で解説しています。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={["各スカウトサービスの一般的な運用", "編集部によるエンジニア採用実務の整理"]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-12 scroll-mt-20">
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：型に沿えば返信は迷わない</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              スカウト返信は「<strong>お礼 → 魅力に感じた点 → 自己アピール → 希望アクション</strong>」の型に沿えば、どの状況でも数分で書けます。興味がなくても一言返しておくと印象が良く、将来の縁にもつながります。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>・返信は24〜48時間以内。即レスは交渉上不利になることもある</li>
              <li>・件名は「用件＋氏名」で一目で分かるように</li>
              <li>・条件交渉は返信段階では「打診」にとどめる</li>
            </ul>
          </div>
        </section>

        <section id="type" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スカウトの種別と本気度</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            スカウトは大きく、企業やヘッドハンターが個別に作り込んで送る「上位スカウト」と、条件に合う人へ一斉送信される「通常スカウト」に分かれます。呼称はサービスにより異なります。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">種別</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">特徴</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">返信優先度</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { t: "上位（プラチナ等）", f: "個別に内容を作り込み、経歴に触れている。本気度が高い傾向", p: "高い" },
                  { t: "通常", f: "条件マッチで一斉送信。定型文が中心", p: "中〜低（内容次第）" },
                  { t: "ばら撒き型", f: "経歴に触れず誰にでも送られる定型文", p: "低い" },
                ].map((row) => (
                  <tr key={row.t} className="hover:bg-slate-50">
                    <td className="px-4 py-3 border border-slate-200 font-medium">{row.t}</td>
                    <td className="px-4 py-3 border border-slate-200">{row.f}</td>
                    <td className="px-4 py-3 border border-slate-200">{row.p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            自分の経歴に具体的に触れているスカウトほど、丁寧に返す価値があります。スカウトを増やすコツや見分け方は<Link href="/knowledge/scout/" className="text-petrol hover:underline">スカウトの活用法</Link>を参照してください。
          </p>
        </section>

        <section id="should-reply" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">返信すべきかの判断基準</h2>
          <ul className="space-y-2">
            {[
              "経歴に具体的に触れているか（あなた宛に作られたスカウトか）",
              "提示された領域・技術が自分の関心と重なるか",
              "年収レンジや勤務形態が大きく外れていないか",
              "企業・サービスの信頼性に不審な点がないか",
            ].map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="text-petrol font-bold shrink-0">✓</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            上記に当てはまるなら、たとえ今すぐ転職する気がなくても返信する価値があります。興味がない場合でも、丁寧な辞退（例文③）を返しておくと印象が残ります。
          </p>
        </section>

        <section id="format" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">好印象の返信の型</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            どの状況でも、次の4ステップに沿えば失礼のない返信になります。
          </p>
          <div className="space-y-3">
            {[
              { step: "お礼", desc: "スカウトへの感謝を一言。「お送りいただきありがとうございます」" },
              { step: "魅力に感じた点", desc: "なぜ関心を持ったかを具体的に。技術領域や事業など、相手の文面に触れると効果的" },
              { step: "自己アピール", desc: "活かせる経験・スキルを簡潔に。盛りすぎず実績ベースで" },
              { step: "希望アクション", desc: "面談希望・質問・日程提示など、次に取ってほしい行動を明示" },
            ].map((s, i) => (
              <div key={s.step} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{s.step}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="examples" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">状況別の返信例文5パターン</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            〇〇・△△の箇所をご自身の情報に置き換えてお使いください。いずれも丁寧すぎず、要点が伝わる長さに調整しています。
          </p>
          <div className="space-y-6">
            {examples.map((ex) => (
              <div key={ex.label} className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-100 px-5 py-3">
                  <h3 className="font-bold text-slate-800">{ex.label}</h3>
                </div>
                <div className="p-5">
                  <p className="text-sm font-semibold text-slate-700 mb-2">{ex.subject}</p>
                  <pre className="whitespace-pre-wrap text-sm text-slate-600 leading-relaxed bg-slate-50 rounded p-4 font-sans">{ex.body}</pre>
                  <p className="text-xs text-slate-500 leading-relaxed mt-3">
                    <span className="font-semibold text-slate-600">ポイント：</span>{ex.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="agent-vs-company" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エージェントと企業ダイレクトのトーン差</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            スカウトの送り手によって、返信のトーンを少し変えると自然です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">送り手</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">トーン・伝え方</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { who: "ヘッドハンター／エージェント", how: "希望条件や転職の温度感を率直に共有してよい。複数案件の中から提案してもらえるため、軸を伝えると精度が上がる" },
                  { who: "企業の採用担当（ダイレクト）", how: "その企業への関心を具体的に示す。担当者＝将来の同僚や上司の可能性があるため、やや丁寧めに" },
                ].map((row) => (
                  <tr key={row.who} className="hover:bg-slate-50">
                    <td className="px-4 py-3 border border-slate-200 font-medium">{row.who}</td>
                    <td className="px-4 py-3 border border-slate-200">{row.how}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            企業ダイレクトのスカウトからカジュアル面談に進む場合は、<Link href="/knowledge/casual-interview/" className="text-petrol hover:underline">カジュアル面談の進め方</Link>もあわせて確認しておくと安心です。
          </p>
        </section>

        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の返信の注意点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              30代・40代は、スカウトを「自分の市場価値を測る材料」として活用できます。どんな企業から、どんな年収レンジで声がかかるかは、現在地を知る手がかりです。
            </p>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">即返信より内容を吟味する</h3>
              <p>
                ミドル世代は実績で語れる分、即レスより「経験のどこが評価されたか」を読み解いてから返すのが得策です。落ち着いた返信が、交渉局面での主導権にもつながります。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">市場価値の確認に使う</h3>
              <p>
                すぐ転職する気がなくても、保留・条件確認の返信（例文②）で年収レンジを聞いておくと、自分の市場価値の把握に役立ちます。詳しくは<Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の調べ方</Link>を参照してください。
              </p>
            </div>
          </div>
        </section>

        <section id="faq" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border border-slate-200 rounded-lg overflow-hidden">
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
          <h2 className="text-xl font-bold mb-3">スカウトの仕組みから理解する</h2>
          <p className="text-blue-100 text-sm mb-4">
            返信の質を高めるには、スカウトが届く仕組みと増やし方を知るのが近道です。種類別の特徴と活用法をまとめました。
          </p>
          <Link
            href="/knowledge/scout/"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            スカウトの活用法を見る
          </Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "スカウトの活用法", href: "/knowledge/scout/" },
              { name: "カジュアル面談の進め方", href: "/knowledge/casual-interview/" },
              { name: "市場価値の調べ方", href: "/knowledge/market-value/" },
              { name: "年収交渉の進め方", href: "/knowledge/salary-negotiation/" },
              { name: "内定の比較・見極め方", href: "/knowledge/offer-compare/" },
              { name: "IT転職エージェントの選び方", href: "/knowledge/how-to-choose/" },
            ].map((item) => (
              <Link
                key={item.href}
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
