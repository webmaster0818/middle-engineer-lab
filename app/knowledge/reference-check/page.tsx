import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "リファレンスチェックの対策【聞かれる質問と推薦者選び】";
const DESCRIPTION =
  "転職のリファレンスチェックとは何か、同意は必要か、何を聞かれるのか、推薦者は誰に頼むべきかを解説。個人情報保護法に基づく同意原則や、推薦者への依頼マナー、当日の流れまで、30代・40代エンジニアが落ち着いて対応するための実務をまとめます。";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/reference-check/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：同意が前提・準備で十分対応可" },
  { id: "what", label: "リファレンスチェックとは" },
  { id: "consent", label: "同意は必要か（法的な前提）" },
  { id: "questions", label: "実際に聞かれる質問" },
  { id: "referee", label: "推薦者の選び方と依頼のマナー" },
  { id: "prepare", label: "事前準備チェックリスト" },
  { id: "ng", label: "やってはいけないNG行動" },
  { id: "faq", label: "よくある質問" },
];

const questions = [
  {
    cat: "在籍・職務の事実確認",
    items: ["在籍期間・役職・担当業務", "退職理由（事実関係）", "勤怠の状況"],
  },
  {
    cat: "業務遂行・成果",
    items: ["担当プロジェクトでの役割と貢献", "技術力・問題解決力の実際", "成果やアウトプットの具体例"],
  },
  {
    cat: "人物・協働",
    items: ["チーム内でのコミュニケーション", "ストレス耐性・課題への向き合い方", "リーダーシップ・マネジメント面"],
  },
];

const checklist = [
  "推薦者に事前に依頼し、内諾を得ておく",
  "推薦者へ応募企業名・ポジション・想定される質問を共有する",
  "職務経歴書の記載内容と齟齬がないか自分でも再確認する",
  "在籍期間や役職など、事実情報を正確に申告しておく",
  "推薦者の連絡先（氏名・関係・連絡手段）を整理しておく",
  "実施サービス名や所要時間など、企業に確認できることは聞いておく",
];

const ngActions = [
  {
    title: "推薦者に無断で連絡先を提出する",
    desc: "事前の依頼なしに第三者の連絡先を企業に渡すのは、相手にも失礼で、個人情報の扱いとしても不適切です。必ず内諾を得てから提出します。",
  },
  {
    title: "経歴を盛る・偽る",
    desc: "リファレンスチェックは経歴の裏取りでもあります。職務経歴書と推薦者の証言が食い違うと、内定に影響します。事実を正確に申告しましょう。",
  },
  {
    title: "実施への同意を求められて安易に流す",
    desc: "同意は本来あなたの権利に関わるものです。誰に・何を・どの範囲で照会するのかを確認したうえで同意するのが望ましいです。",
  },
  {
    title: "推薦者に情報共有せず丸投げする",
    desc: "応募先や想定質問を共有していないと、推薦者がうまく答えられません。協力してもらう以上、必要な情報は丁寧に伝えましょう。",
  },
];

const faqs = [
  {
    q: "リファレンスチェックとは何ですか？",
    a: "応募者の前職の上司や同僚など、第三者に対して、応募者の在籍事実・職務内容・働きぶりなどを照会する選考プロセスです。外資系企業やマネジメント層の採用で多く用いられ、近年は国内企業でも増えています。目的は経歴の真偽確認と、書類・面接では見えにくい実際の働きぶりの把握です。合否を左右する場合もありますが、応募者を落とすためではなく、相互理解を深める目的で行う企業も多くあります。",
  },
  {
    q: "リファレンスチェックに本人の同意は必要ですか？",
    a: "必要です。リファレンスチェックでは、応募者本人や推薦者の個人情報を取得・第三者から取得することになるため、個人情報保護法の趣旨に照らし、本人の同意を得て行うのが原則です。実務上も、企業は応募者の同意（推薦者の連絡先の提供を含む）を前提に実施します。同意なく無断で前職へ照会することは適切ではありません。誰に何を照会するのか不明確な場合は、企業に確認したうえで同意しましょう。",
  },
  {
    q: "推薦者は誰に頼むのが良いですか？",
    a: "あなたの働きぶりを具体的に語れる、現職または前職の直属の上司や、同じプロジェクトの先輩・同僚が適任です。応募ポジションに近い業務を一緒にした人ほど説得力が増します。役職の高さより、実際の協働経験と関係性の良さを重視しましょう。なお、現職にまだ転職を知られたくない場合は、前職の関係者に依頼するのが安全です。",
  },
  {
    q: "在職中で現職にバレたくない場合はどうすればいいですか？",
    a: "推薦者は現職ではなく前職の関係者に依頼するのが基本です。企業側もこの事情は理解しており、現職への照会は本人の同意なしには行いません。同意を求められた際に『現職への照会は控えてほしい』と伝えれば、前職や前々職の推薦者で対応してもらえるのが一般的です。在職中の転職活動の進め方は別記事も参考にしてください。",
  },
  {
    q: "ネガティブなことを言われたら落ちますか？",
    a: "一つのネガティブな証言だけで即不合格になるとは限りません。企業は複数の情報を総合して判断します。重要なのは、職務経歴書・面接での自己申告と、推薦者の証言の方向性が一致していることです。弱みを正直に伝えたうえで改善努力を示していれば、多少の指摘はむしろ信頼につながります。経歴を盛って証言と食い違う方が、はるかにマイナスです。",
  },
  {
    q: "リファレンスチェックを断ることはできますか？",
    a: "同意しない自由はありますが、選考プロセスに組み込まれている場合、辞退すると選考が進まないことがあります。チェック自体を拒むより、『現職への照会は避けてほしい』『推薦者は前職から選びたい』など、範囲や対象を調整する形で折り合いをつけるのが現実的です。納得できない照会内容であれば、何を懸念しているかを企業に率直に伝えましょう。",
  },
  {
    q: "リファレンスチェックはいつ行われますか？",
    a: "最終面接の前後から内定前後にかけて実施されることが多いです。つまり、企業がほぼ採用に前向きになった段階で行われるため、過度に身構える必要はありません。ただし、推薦者への依頼には時間がかかるため、選考が進んできたら早めに候補者へ打診しておくと、いざというとき慌てずに済みます。",
  },
];

export default function ReferenceCheckPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/reference-check/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "リファレンスチェックの対策" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          リファレンスチェックの対策【聞かれる質問と推薦者選び】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 同意を前提に、落ち着いて対応するために
        </p>

        {/* 直答box (P6-C2) */}
        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】リファレンスチェックは何を準備すればいい？</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: 本人の同意を前提に行われる選考プロセスで、経歴を正確に申告し推薦者に事前依頼しておけば十分に対応できます。</strong></p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・個人情報保護法の趣旨から、企業は本人の同意なしに無断で照会することはできない</li><li>・最も避けるべきは「経歴を盛ること」と「推薦者への無断依頼」</li><li>・実施は最終面接前後〜内定前後が多く、過度に身構える必要はない</li></ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          リファレンスチェックと聞くと「前職に何を言われるのか」と不安になる人も多いはずです。しかし、これは本人の同意を前提に行われる選考プロセスであり、事前に準備すれば過度に恐れる必要はありません。本記事では、リファレンスチェックの仕組み、同意の法的な前提、実際に聞かれる質問、推薦者の選び方と依頼のマナー、事前準備のチェックリストまでを解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "個人情報の保護に関する法律（個人情報保護法）",
            "個人情報保護委員会 公表資料",
          ]}
        />

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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：同意が前提・準備で十分対応可</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              リファレンスチェックは、<strong>本人の同意を前提に</strong>、前職などの第三者へ働きぶりを照会する選考プロセスです。<strong>経歴を正確に申告し、信頼できる推薦者に事前依頼しておけば、十分に対応できます</strong>。
            </p>
            <p className="text-slate-700 leading-relaxed">
              個人情報保護法の趣旨から、企業は本人の同意なしに無断で照会することはできません。最も避けるべきは「経歴を盛ること」と「推薦者への無断依頼」です。事実に基づいた自己申告と、推薦者への丁寧な情報共有をしておけば、ネガティブな結果を過度に恐れる必要はありません。
            </p>
          </div>
        </section>

        {/* とは */}
        <section id="what" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">リファレンスチェックとは</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            リファレンスチェック（前職照会）とは、応募者の前職の上司・同僚など第三者に、在籍事実や働きぶりを確認する選考プロセスです。外資系やマネジメント層の採用で多く、近年は国内企業でも広がっています。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            目的は大きく二つ。一つは経歴の真偽確認、もう一つは書類・面接では見えにくい実際の働きぶりの把握です。応募者を落とすためというより、相互理解を深め、入社後のミスマッチを防ぐ目的で行う企業も多くあります。最終面接前後から内定前後にかけて実施されるのが一般的です。
          </p>
          <p className="text-slate-600 leading-relaxed">
            実施形式は大きく分けて、企業の採用担当者が直接推薦者に連絡する方法と、専用のリファレンスチェックサービスを通じてオンラインのアンケート形式で回答を集める方法があります。後者は推薦者の負担が比較的軽く、近年広く使われています。いずれの場合も、回答内容そのものが応募者に開示されるとは限らず、推薦者が率直に答えやすい設計になっていることが多いです。だからこそ、推薦者には事前に応募の事実と背景を共有し、気持ちよく協力してもらえる関係を保っておくことが、結果的に良い評価につながります。
          </p>
        </section>

        {/* 同意 */}
        <section id="consent" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">同意は必要か（法的な前提）</h2>
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              リファレンスチェックは、応募者本人や推薦者の個人情報を扱うため、<strong>本人の同意を得て行うのが原則</strong>です。個人情報保護法の趣旨に照らし、企業は応募者の同意（推薦者の連絡先提供を含む）を前提に実施します。
            </p>
            <p className="text-slate-700 leading-relaxed">
              つまり、あなたの知らないところで勝手に前職へ照会されることは、本来あってはなりません。同意を求められた際は、「誰に」「何を」「どの範囲で」照会するのかを確認できます。現職への照会を避けたい場合は、その旨を伝えて対象を調整しましょう。
            </p>
          </div>
        </section>

        {/* 質問 */}
        <section id="questions" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">実際に聞かれる質問</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            推薦者に向けられる質問は、おおむね次の3カテゴリに整理できます。自分の経歴申告と矛盾しないかを、この観点で点検しておきましょう。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {questions.map((q, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{q.cat}</h3>
                <ul className="space-y-1.5">
                  {q.items.map((item, j) => (
                    <li key={j} className="text-sm text-slate-600 leading-relaxed flex gap-2">
                      <span className="text-petrol shrink-0">・</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 推薦者 */}
        <section id="referee" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">推薦者の選び方と依頼のマナー</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            推薦者選びは、リファレンスチェック対策の要です。次のポイントを押さえましょう。
          </p>
          <div className="space-y-4">
            {[
              { num: "1", title: "働きぶりを具体的に語れる人を選ぶ", desc: "直属の上司や、同じプロジェクトの先輩・同僚が適任です。応募ポジションに近い業務を共にした人ほど説得力があります。役職の高さより協働経験を重視します。" },
              { num: "2", title: "在職中は前職の関係者に頼む", desc: "現職に転職を知られたくない場合は、前職や前々職の関係者に依頼します。企業も現職への照会は同意なしには行いません。" },
              { num: "3", title: "必ず事前に内諾を得る", desc: "無断で連絡先を提出するのは厳禁です。協力をお願いし、引き受けてもらえるか確認してから提出します。" },
              { num: "4", title: "応募先と想定質問を共有する", desc: "応募企業名・ポジション・聞かれそうな内容を伝えておくと、推薦者が的確に答えられ、あなたの強みも伝わりやすくなります。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 準備 */}
        <section id="prepare" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">事前準備チェックリスト</h2>
          <div className="border border-slate-200 rounded-lg p-6">
            <ul className="space-y-3">
              {checklist.map((item, i) => (
                <li key={i} className="flex gap-3 items-start text-sm text-slate-700 leading-relaxed">
                  <span className="flex items-center justify-center w-5 h-5 rounded border border-blue-400 text-petrol text-xs shrink-0 mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            職務経歴書の内容と齟齬が出ないよう、提出書類は
            <Link href="/knowledge/resume/" className="text-petrol hover:underline">職務経歴書の書き方</Link>
            も参考に整えておきましょう。
          </p>
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
          <h2 className="text-xl font-bold mb-3">選考対策はエージェントに相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントなら、リファレンスチェックを含む選考の流れを事前に教えてくれます。
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
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
              { name: "複数内定の比較方法", href: "/knowledge/offer-compare/" },
              { name: "内定承諾の期限と延長", href: "/knowledge/offer-deadline/" },
              { name: "入社前の準備チェックリスト", href: "/knowledge/pre-onboarding/" },
              { name: "退職の進め方ガイド", href: "/knowledge/resignation/" },
              { name: "40代の転職", href: "/age/40s/" },
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
