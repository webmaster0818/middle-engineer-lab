import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "転職エージェントの断り方・退会方法【メール例文付き】";
const DESCRIPTION =
  "転職エージェントの上手な断り方と退会方法を解説。求人紹介を断る・連絡を控えてもらう・担当変更を依頼する・退会するの4つの場面別にメール例文を用意。30代・40代が角を立てずに付き合い方を整理するための実務をまとめます。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：率直に・簡潔に伝えてよい" },
  { id: "scenes", label: "断り方は場面で使い分ける" },
  { id: "decline-job", label: "求人紹介を断る例文" },
  { id: "pause", label: "連絡を控えてもらう例文" },
  { id: "change", label: "担当変更を依頼する例文" },
  { id: "withdraw", label: "退会する例文と注意点" },
  { id: "ng", label: "やってはいけないNG行動" },
  { id: "faq", label: "よくある質問" },
];

const declineExamples = [
  {
    scene: "紹介された求人を断る",
    text: "「ご紹介いただきありがとうございます。○○の求人を拝見しましたが、今回は○○（勤務地・技術領域・働き方など）の条件が希望と合わないため、応募は見送らせていただきます。引き続き、○○の条件に合う求人がございましたらご紹介いただけると幸いです。」",
  },
  {
    scene: "選考途中で辞退する",
    text: "「ご支援いただきありがとうございます。○○社の選考について、慎重に検討した結果、辞退させていただきたく存じます。お手数をおかけしますが、企業様へのご連絡をお願いできますでしょうか。」",
  },
];

const pauseExample = {
  text: "「いつもお世話になっております。現在、現職の業務状況により転職活動を一時的に見合わせたいと考えております。誠に恐れ入りますが、しばらくの間は新規の求人紹介やお電話を控えていただけますでしょうか。再開する際は、こちらから改めてご連絡いたします。」",
};

const changeExample = {
  text: "「いつもお世話になっております。担当者の変更についてご相談です。希望する○○領域により詳しい方からご支援いただけると心強いため、可能であれば担当の変更をご検討いただけますでしょうか。○○様にはこれまで丁寧にご対応いただき感謝しております。」",
};

const withdrawExample = {
  text: "件名：退会のお願い（氏名）｜本文：「お世話になっております、○○○○です。この度、転職活動を終了することとなりましたので、退会の手続きをお願いしたく存じます。在職中・転職活動中は丁寧にご支援いただき、誠にありがとうございました。登録情報の削除についても、あわせてご対応いただけますと幸いです。」",
};

const ngActions = [
  {
    title: "連絡を無視して放置する",
    desc: "気まずさから返信しないのは、かえって連絡を増やす原因になります。「今は不要」と一言伝えるだけで、配慮ある対応をしてもらえます。",
  },
  {
    title: "他社で進めていることを隠し続ける",
    desc: "他社経由で内定が出たのに伝えないと、エージェントが無駄な調整を続けてしまいます。状況を共有すれば、円満に区切りをつけられます。",
  },
  {
    title: "感情的・高圧的に断る",
    desc: "対応に不満があっても、感情的な断り方は不要です。担当変更や退会といった手段で、冷静に距離を取れば十分です。",
  },
  {
    title: "退会時に進行中の選考を放置する",
    desc: "退会する前に、選考中の企業がないか確認しましょう。進行中の応募がある状態で連絡を絶つと、企業に迷惑がかかります。",
  },
];

const faqs = [
  {
    q: "転職エージェントの求人紹介はどう断ればいいですか？",
    a: "理由を簡潔に添えて、率直に断って問題ありません。『勤務地が希望と合わない』『使用技術が希望と異なる』など、見送る理由を一言伝えると、エージェントは次の紹介の精度を上げられます。むしろ曖昧に保留するより、はっきり断る方がお互いにとって効率的です。希望条件をあわせて伝えれば、より合った求人を紹介してもらいやすくなります。",
  },
  {
    q: "エージェントからの連絡が多すぎるときはどうすればいいですか？",
    a: "連絡頻度や手段の希望を率直に伝えましょう。『電話ではなくメールで』『週に一度まとめて』『しばらく新規紹介は控えてほしい』など、具体的に依頼すれば配慮してもらえます。転職活動を一時休止したい場合も、その旨を伝えればいったん連絡を止めてくれます。我慢して放置するより、希望を伝える方が良い関係を保てます。",
  },
  {
    q: "担当者と合わない場合、変更してもらえますか？",
    a: "担当変更は可能です。多くのエージェントが変更に対応しており、申し出ても失礼にはあたりません。エージェントの問い合わせ窓口や、担当者の上長宛てに『希望領域に詳しい方に変更したい』『相性の面で変更を希望する』と丁寧に伝えれば対応してもらえます。サービス自体は活用したいが担当者だけ変えたい、というケースに有効です。",
  },
  {
    q: "転職エージェントを退会するにはどうすればいいですか？",
    a: "担当者へ退会の意思を伝えるか、各サービスの問い合わせ窓口・マイページの退会手続きから申請します。あわせて『登録情報（個人情報）の削除』を依頼するとより確実です。個人情報保護法では、本人は自己の個人情報の利用停止や削除を求めることができ、エージェントは正当な理由なくこれを拒めません。進行中の選考がある場合は、先に整理してから退会しましょう。",
  },
  {
    q: "エージェントを断ったり退会したりすると不利になりますか？",
    a: "なりません。エージェントの利用は無料で、断ることや退会することにペナルティはありません。求職者には、どのサービスを使うか、いつ辞めるかを自由に決める権利があります。将来また同じエージェントを利用する可能性もあるため、辞める際も感謝を伝えて円満に区切りをつけておくと、再登録時もスムーズです。",
  },
  {
    q: "複数のエージェントを併用していて、一部だけ断っても大丈夫ですか？",
    a: "問題ありません。複数のエージェントを併用するのは一般的で、合わないところを断り、相性の良いところに絞るのは賢い使い方です。断る際は『他社経由で活動を進めることにした』『今回は条件が合わなかった』など簡潔に伝えれば十分です。併用のコツは複数エージェントの使い分けの記事も参考にしてください。",
  },
  {
    q: "退会後も登録した個人情報は残りますか？",
    a: "退会手続きをしても、自動的に全データが即削除されるとは限りません。確実に削除したい場合は、退会と同時に『登録情報の削除』を明確に依頼しましょう。個人情報保護法に基づき、本人は個人データの利用停止・消去を請求でき、事業者は法令上の保存義務がある場合などを除き、これに応じる必要があります。削除完了の確認まで取れるとより安心です。",
  },
];

export default function AgentDeclinePage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/agent-decline/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "エージェントの断り方・退会方法" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          転職エージェントの断り方・退会方法【メール例文付き】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 角を立てずに付き合い方を整理する
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          転職エージェントは心強い味方ですが、「連絡が多い」「紹介が合わない」「担当者と相性が良くない」と感じることもあります。利用は無料で、断ることにも退会することにもペナルティはありません。本記事では、求人を断る・連絡を控えてもらう・担当を変更する・退会するという4つの場面ごとに、そのまま使えるメール例文と注意点を解説します。我慢せず、自分に合った付き合い方を整えましょう。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "個人情報の保護に関する法律（利用停止・消去の請求）",
            "厚生労働省「職業紹介事業の運営に関するルール」",
          ]}
        />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-blue-600 hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：率直に・簡潔に伝えてよい</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              エージェントへの断りや退会は、<strong>率直に・簡潔に伝えて構いません</strong>。利用は無料で、断ることにも退会することにもペナルティはなく、どのサービスをいつ辞めるかは求職者の自由です。
            </p>
            <p className="text-slate-700 leading-relaxed">
              最も避けるべきは「気まずさから連絡を放置すること」。一言伝えるだけで、無駄な紹介や電話が止まり、お互いに効率的です。退会時は、進行中の選考を整理し、必要に応じて登録情報の削除も依頼しましょう。個人情報保護法では、本人が個人データの利用停止・消去を請求できます。
            </p>
          </div>
        </section>

        {/* 場面 */}
        <section id="scenes" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">断り方は場面で使い分ける</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「断る」と言っても、状況によって最適な対応は異なります。退会する前に、より軽い対応で解決できないかを考えるとよいでしょう。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">サービスは使いたい場合</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                「この求人だけ断る」「連絡頻度を調整する」「担当を変更する」で対応できます。エージェント自体は活用し続けたいなら、まずこれらの軽い手段を検討しましょう。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">利用を終える場合</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                転職活動が終わった、または合わないと感じたら「退会」します。進行中の選考を整理し、登録情報の削除も依頼すると確実です。
              </p>
            </div>
          </div>
        </section>

        {/* 求人を断る */}
        <section id="decline-job" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人紹介を断る例文</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            見送る理由を簡潔に添えると、次の紹介の精度が上がります。希望条件もあわせて伝えましょう。
          </p>
          <div className="space-y-4">
            {declineExamples.map((e, i) => (
              <div key={i} className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-100 px-5 py-2 text-sm font-bold text-slate-700">{e.scene}</div>
                <p className="px-5 py-4 text-sm text-slate-700 leading-relaxed">{e.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 連絡を控える */}
        <section id="pause" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">連絡を控えてもらう例文</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            連絡が多いと感じたら、頻度や手段の希望を具体的に伝えます。一時休止したい場合の例文です。
          </p>
          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <div className="bg-slate-100 px-5 py-2 text-sm font-bold text-slate-700">活動を一時休止したいとき</div>
            <p className="px-5 py-4 text-sm text-slate-700 leading-relaxed">{pauseExample.text}</p>
          </div>
        </section>

        {/* 担当変更 */}
        <section id="change" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">担当変更を依頼する例文</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            サービスは使い続けたいが担当者だけ変えたい場合は、問い合わせ窓口や担当者の上長宛てに依頼します。
          </p>
          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <div className="bg-slate-100 px-5 py-2 text-sm font-bold text-slate-700">担当変更を依頼するとき</div>
            <p className="px-5 py-4 text-sm text-slate-700 leading-relaxed">{changeExample.text}</p>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">
            担当変更は、サービスそのものに不満があるわけではないが、提案の質や連絡の取り方、専門領域の理解度が自分と噛み合わない、というときに有効な選択肢です。担当者本人に直接言いにくい場合は、公式サイトの問い合わせフォームや代表窓口、または担当者の上長宛てに連絡すると、角を立てずに依頼できます。変更を申し出ても、それまでに紹介された求人の選考状況が不利になることは基本的にありません。担当者は会社として割り当てられているだけで、あなたの評価は選考そのもので決まるためです。我慢して合わない担当者と進めるより、早めに相性の良い担当に変えてもらう方が、転職活動全体の質が上がります。
          </p>
        </section>

        {/* 退会 */}
        <section id="withdraw" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">退会する例文と注意点</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            退会は、担当者への連絡か、各サービスの問い合わせ窓口・マイページから手続きします。退会前に、進行中の選考がないかを必ず確認しましょう。
          </p>
          <div className="border border-slate-200 rounded-lg overflow-hidden mb-4">
            <div className="bg-slate-100 px-5 py-2 text-sm font-bold text-slate-700">退会を依頼するとき</div>
            <p className="px-5 py-4 text-sm text-slate-700 leading-relaxed">{withdrawExample.text}</p>
          </div>
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed">
              登録した個人情報を確実に消したい場合は、退会と同時に「登録情報の削除」を明確に依頼しましょう。個人情報保護法に基づき、本人は個人データの利用停止・消去を請求でき、事業者は法令上の保存義務がある場合などを除き、これに応じる必要があります。将来また利用する可能性もあるため、感謝を伝えて円満に区切りをつけておくと安心です。
            </p>
          </div>
        </section>

        {/* NG */}
        <section id="ng" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">やってはいけないNG行動</h2>
          <div className="space-y-4">
            {ngActions.map((n, i) => (
              <div key={i} className="bg-red-50 rounded-lg p-5">
                <h3 className="font-bold text-red-800 mb-2">{n.title}</h3>
                <p className="text-sm text-red-700 leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>
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
          <h2 className="text-xl font-bold mb-3">自分に合うエージェントを選び直す</h2>
          <p className="text-blue-100 text-sm mb-4">
            合わないと感じたら、相性の良いIT特化型エージェントに乗り換えるのも一つの手です。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "複数エージェントの使い分け", href: "/knowledge/multiple-agents/" },
              { name: "エージェントの選び方", href: "/knowledge/how-to-choose/" },
              { name: "エージェントとの初回面談", href: "/knowledge/agent-first-meeting/" },
              { name: "内定辞退の伝え方", href: "/knowledge/offer-decline/" },
              { name: "退職の進め方ガイド", href: "/knowledge/resignation/" },
              { name: "30代の転職", href: "/age/30s/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors"
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
