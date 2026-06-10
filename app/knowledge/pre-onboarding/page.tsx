import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "入社前の準備チェックリスト【提出書類・手続き・心構え】";
const DESCRIPTION =
  "転職の入社前にやるべき準備を、提出書類・年金や保険の手続き・税金・入社初日の準備・心構えまでチェックリストで網羅。30代・40代エンジニアが退職から入社までの空白なく、スムーズに新天地へ移るための実務をまとめます。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：書類・手続き・心構えの3軸" },
  { id: "documents", label: "会社へ提出する書類" },
  { id: "procedures", label: "公的手続き（年金・保険・税金）" },
  { id: "first-day", label: "入社初日に向けた準備" },
  { id: "mindset", label: "30代・40代の入社前の心構え" },
  { id: "ng", label: "やってはいけないNG行動" },
  { id: "faq", label: "よくある質問" },
];

const documents = [
  {
    cat: "退職前に現職から受け取るもの",
    items: ["離職票（失業給付に必要な場合）", "雇用保険被保険者証", "源泉徴収票（年内転職なら年末調整に必要）", "年金手帳または基礎年金番号がわかる書類", "退職証明書（必要に応じて）"],
  },
  {
    cat: "入社先へ提出する主な書類",
    items: ["雇用保険被保険者証", "源泉徴収票（同年内の転職の場合）", "マイナンバー（番号確認書類）", "給与振込口座の情報", "扶養控除等申告書など各種申告書"],
  },
  {
    cat: "求められることがある書類",
    items: ["健康診断書", "資格・免許の証明書", "卒業証明書", "身元保証書"],
  },
];

const firstDay = [
  {
    title: "通勤ルートと所要時間の確認",
    desc: "初日に遅刻しないよう、通勤経路・所要時間・乗り換えを事前に確認します。リモート併用の場合は初日の出社可否も確認しておきます。",
  },
  {
    title: "服装・身だしなみの確認",
    desc: "オフィスのドレスコードを事前に把握します。エンジニア職でもオフィスにより差があるため、不明なら少しきれいめで臨むのが無難です。",
  },
  {
    title: "開発環境・PCの事前情報",
    desc: "貸与PCの有無、初期セットアップの流れ、利用ツール（Slack、リポジトリ等）のアカウント準備があるか、人事に確認しておくと初日が円滑です。",
  },
  {
    title: "自己紹介の準備",
    desc: "簡潔な自己紹介（これまでの経歴・得意領域・意気込み）を用意しておくと、初日のチーム挨拶で好印象を残せます。",
  },
];

const ngActions = [
  {
    title: "退職時の書類を受け取り忘れる",
    desc: "源泉徴収票や雇用保険被保険者証は、入社後の手続きに必要です。退職時にもらえる書類を確認し、後日郵送になるものは到着時期も把握しておきましょう。",
  },
  {
    title: "ブランク期間の手続きを放置する",
    desc: "退職日と入社日に空白がある場合、その間の健康保険・年金は自分で手続きが必要です。無保険・未納の期間を作らないよう、期限内に対応します。",
  },
  {
    title: "前職の私物・データの扱いを誤る",
    desc: "業務で扱ったソースコードや顧客情報は会社の資産です。私的に持ち出すと守秘義務・競業避止に抵触する恐れがあります。私物のみ整理して持ち帰りましょう。",
  },
  {
    title: "入社日や条件の認識をすり合わせない",
    desc: "入社日・初日の集合場所・時間・持ち物は、人事と事前に必ず確認します。思い込みで動くと初日にトラブルになりがちです。",
  },
];

const faqs = [
  {
    q: "入社前に会社へ提出する書類は何ですか？",
    a: "一般的には、雇用保険被保険者証、同じ年に転職する場合は前職の源泉徴収票、マイナンバーの確認書類、給与振込口座の情報、扶養控除等申告書などです。企業によっては健康診断書、資格証明書、卒業証明書、身元保証書を求められることもあります。提出書類は内定先から案内されるので、リストを受け取ったら早めに準備し、不足があれば前職へ請求しましょう。",
  },
  {
    q: "退職日と入社日に空白がある場合、保険や年金はどうなりますか？",
    a: "離職期間中は、自分で公的手続きを行う必要があります。健康保険は、前職の健康保険を任意継続するか、お住まいの市区町村で国民健康保険に加入します。年金は国民年金（第1号被保険者）への切り替えが必要です。いずれも原則として退職日の翌日から14日以内などの期限があります。手続きを怠ると無保険・未納期間が生じるため、退職前に段取りを確認しておきましょう。詳しくは退職後の手続きの記事も参照してください。",
  },
  {
    q: "退職日の翌日に入社する場合も手続きは必要ですか？",
    a: "空白期間がなく、退職翌日に新しい会社へ入社する場合は、健康保険・厚生年金は新しい会社で切れ目なく加入手続きが行われるため、自分で国民健康保険や国民年金に切り替える必要は基本的にありません。新しい会社に必要書類（雇用保険被保険者証や年金番号がわかる書類など）を提出すれば、会社側が手続きします。空白が1日でもある場合は、その期間の対応が必要になることがあるため、入社日を確認しておきましょう。",
  },
  {
    q: "源泉徴収票はなぜ必要なのですか？",
    a: "同じ年（1月〜12月）の途中で転職した場合、新しい会社が前職分とあわせて年末調整を行うために、前職の源泉徴収票が必要になります。提出しないと年末調整ができず、自分で確定申告をすることになります。源泉徴収票は退職後しばらくして郵送されることが多いので、届いたら新しい会社へ提出しましょう。",
  },
  {
    q: "前職で使っていた資料やコードを持ち出してもいいですか？",
    a: "いけません。業務で作成・取得したソースコード、設計書、顧客情報などは会社の資産・機密情報であり、私的に持ち出すと守秘義務違反や競業避止義務の問題になり得ます。転職先で前職のコードを流用するのも厳禁です。持ち帰るのは私物のみとし、業務データは適切に返却・削除しましょう。競業避止義務の考え方は別記事で解説しています。",
  },
  {
    q: "入社前に勉強しておいた方がいいことはありますか？",
    a: "入社先で使う主要技術やドメイン知識を、無理のない範囲で予習しておくと初日からの立ち上がりが楽になります。ただし、入社前に過度に詰め込む必要はありません。多くの企業はオンボーディング（受け入れ研修）を用意しています。それより、生活リズムを整え、心身を良い状態にして初日を迎えることの方が大切です。入社後の立ち上がり方は、入社後最初の90日の記事も参考にしてください。",
  },
  {
    q: "有給休暇が残っている場合、入社前にどう扱えばいいですか？",
    a: "退職時に残っている有給休暇は、退職日までの間に消化するのが基本です。引き継ぎのスケジュールと調整しながら、退職日を有給消化分も含めて設定します。会社によっては未消化分の買い取りに応じる場合もありますが、買い取りは義務ではありません。有給消化と入社日が重ならないよう、退職交渉の段階で全体の日程を組みましょう。",
  },
];

export default function PreOnboardingPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/pre-onboarding/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "入社前の準備チェックリスト" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          入社前の準備チェックリスト【提出書類・手続き・心構え】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 退職から入社まで空白なくスムーズに
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          内定承諾から入社までの期間は、書類の準備や公的手続きでやるべきことが意外と多いものです。特に退職日と入社日に空白がある場合は、保険や年金の手続きを自分で行う必要があります。本記事では、会社へ提出する書類、年金・保険・税金の手続き、入社初日に向けた準備、そして30代・40代ならではの心構えまでを、チェックリスト形式で整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "日本年金機構「国民年金に加入するための手続き」",
            "厚生労働省・全国健康保険協会（協会けんぽ）「任意継続被保険者制度」",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：書類・手続き・心構えの3軸</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              入社前の準備は、<strong>「会社へ提出する書類」「公的手続き（年金・保険・税金）」「入社初日の準備と心構え」</strong>の3軸で整理すると漏れがありません。特に退職日と入社日の間に空白がある場合は、健康保険・年金の手続きを自分で行う必要があります。
            </p>
            <p className="text-slate-700 leading-relaxed">
              退職翌日にそのまま入社するなら、保険・年金は新しい会社が切れ目なく手続きします。一方、空白がある場合は期限（退職翌日から14日以内など）内の手続きが必要です。書類の受け取り漏れと手続きの放置が最大のリスクなので、退職前から段取りを確認しておきましょう。
            </p>
          </div>
        </section>

        {/* 書類 */}
        <section id="documents" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">会社へ提出する書類</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            提出書類は内定先から案内されます。前職から受け取るものと、入社先へ提出するものを混同しないよう、次の3区分で確認しましょう。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {documents.map((d, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2 text-sm">{d.cat}</h3>
                <ul className="space-y-1.5">
                  {d.items.map((item, j) => (
                    <li key={j} className="text-sm text-slate-600 leading-relaxed flex gap-2">
                      <span className="text-blue-500 shrink-0">・</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            退職時に受け取る書類の詳細は
            <Link href="/knowledge/after-resignation-procedures/" className="text-blue-600 hover:underline">退職後の手続き</Link>
            で解説しています。
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            注意したいのは、これらの書類の多くが退職後しばらくしてから郵送される点です。源泉徴収票や離職票は、退職日当日には受け取れず、後日送られてくるのが一般的です。退職時には「どの書類を」「いつ頃」「どの方法で」受け取れるのかを人事に確認し、転居予定がある場合は送付先も伝えておきましょう。受け取り漏れがあると、入社先での年末調整や、離職期間中の公的手続きに支障が出ます。届いた書類はその都度ファイリングし、入社先へ提出するものと自分で保管するものを分けて管理しておくと安心です。
          </p>
        </section>

        {/* 手続き */}
        <section id="procedures" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">公的手続き（年金・保険・税金）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            退職日と入社日のつながり方で、必要な手続きが変わります。
          </p>
          <div className="space-y-3">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">退職翌日に入社（空白なし）</h3>
              <p className="text-sm text-slate-600">健康保険・厚生年金は新しい会社が切れ目なく手続きします。必要書類を提出すれば自分での切り替えは原則不要です。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">空白がある（離職期間あり）</h3>
              <p className="text-sm text-slate-600">健康保険は「任意継続」か「国民健康保険」へ、年金は「国民年金（第1号）」へ自分で切り替えます。原則として退職翌日から14日以内などの期限があります。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">税金（住民税・所得税）</h3>
              <p className="text-sm text-slate-600">住民税は退職時期により納付方法が変わります。所得税は、同年内の転職なら源泉徴収票を新しい会社へ提出し年末調整を受けます。</p>
            </div>
          </div>
        </section>

        {/* 初日 */}
        <section id="first-day" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">入社初日に向けた準備</h2>
          <div className="space-y-4">
            {firstDay.map((f, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{f.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            入社後の立ち上がり方は
            <Link href="/knowledge/onboarding/" className="text-blue-600 hover:underline">入社後のオンボーディング</Link>
            と
            <Link href="/knowledge/first-90days/" className="text-blue-600 hover:underline">入社後最初の90日</Link>
            で詳しく解説しています。
          </p>
        </section>

        {/* 心構え */}
        <section id="mindset" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の入社前の心構え</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：謙虚さと素早いキャッチアップの両立</h3>
              <p className="text-sm text-blue-700 leading-relaxed">
                即戦力として期待される一方、新しい環境のやり方を学ぶ謙虚さも必要です。前職の進め方に固執せず、まずはチームの開発フローやコード規約を観察して合わせることが、早期の信頼獲得につながります。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：年下の上司・同僚への接し方</h3>
              <p className="text-sm text-blue-700 leading-relaxed">
                チームに年下のメンバーや上司がいることも珍しくありません。経験を押し付けず、敬意を持ってフラットに接する姿勢が大切です。これまでの経験は、求められた場面で具体的に役立てる形で還元しましょう。
              </p>
            </div>
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
          <h2 className="text-xl font-bold mb-3">入社までの段取りもエージェントに相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントなら、入社日の調整から必要書類の確認まで、入社までの不安を一緒に解消してくれます。
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
              { name: "退職後の手続き", href: "/knowledge/after-resignation-procedures/" },
              { name: "入社後のオンボーディング", href: "/knowledge/onboarding/" },
              { name: "入社後最初の90日", href: "/knowledge/first-90days/" },
              { name: "引き継ぎの進め方", href: "/knowledge/handover/" },
              { name: "退職の進め方ガイド", href: "/knowledge/resignation/" },
              { name: "40代の転職", href: "/age/40s/" },
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
