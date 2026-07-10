import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/referral/" },
  title: "リファラル転職の実態と注意点【例文・断り方付き】",
  description:
    "リファラル（社員紹介）転職の声のかけ方・かけられ方、選考の実態、断りにくさへの対処を例文付きで解説。30代・40代エンジニアが人脈を活かして転職するための実践ガイド。",
};

const toc = [
  { id: "conclusion", label: "結論" },
  { id: "what", label: "リファラル転職とは・通常選考との違い" },
  { id: "ask", label: "声のかけ方【依頼の例文】" },
  { id: "asked", label: "声をかけられたときの対応【返信例文】" },
  { id: "flow", label: "選考の実態（流れと面接）" },
  { id: "merit", label: "メリット・デメリット" },
  { id: "decline", label: "注意点：断りにくさへの対処【断り方例文】" },
  { id: "middle", label: "30代・40代のリファラル活用視点" },
  { id: "checklist", label: "向いている人／慎重になるべき人" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "リファラル転職は通常の選考と何が違いますか？",
    a: "大きな違いは「入社前に内部情報を得られること」と「紹介者の推薦が選考に添えられること」です。多くの企業ではカジュアル面談を挟みやすく、技術スタックやチームの雰囲気を事前に確認できます。ただし面接自体は通常どおり行われ、書類が必ず通過する保証はありません。技術力やカルチャーフィットは通常選考と同じく評価されます。",
  },
  {
    q: "知り合いに転職先の社員がいない場合はどうすればいいですか？",
    a: "リファラルは人脈が前提のため、知り合いがいなければ使えません。中長期的には勉強会・カンファレンス・OSS活動・技術コミュニティで横のつながりを作っておくと、将来の選択肢が広がります。LinkedInで志望企業の社員とつながる方法もあります。今すぐ転職したい場合は、エージェントや求人サイトを主軸にするのが現実的です。",
  },
  {
    q: "紹介してくれた人に迷惑をかけませんか？",
    a: "早期離職や選考途中の音信不通は、紹介者の社内的な信用に影響する可能性があります。逆に言えば、入社前に仕事内容・文化を十分に確認してミスマッチを防ぎ、選考中の連絡を丁寧に保てば、迷惑をかけるリスクは大きく下げられます。紹介者には希望条件を正直に伝えておくことが、結果的にお互いを守ります。",
  },
  {
    q: "リファラルだと年収交渉は不利になりますか？",
    a: "必ずしも不利にはなりません。ただし「知り合いだから言い出しにくい」という心理的なやりにくさは生じがちです。交渉は紹介者ではなく人事・採用担当と行うのが基本で、市場相場を把握したうえで希望を伝えれば問題ありません。相場感は転職エージェントに確認しておくと、根拠を持って交渉できます。",
  },
  {
    q: "不採用になった場合、紹介者との関係は悪くなりますか？",
    a: "通常は問題ありません。企業側もリファラルが必ず採用に至るとは考えていません。不採用でも、紹介してくれたこと自体にお礼を伝え、選考の感想を簡単に共有すれば、良い関係を維持できます。気まずさを避けようと連絡を絶つ方が、かえって関係を損ないます。",
  },
  {
    q: "紹介された会社が合わなそうなとき、どう断ればいいですか？",
    a: "早い段階で、紹介者と企業の両方に率直かつ丁寧に伝えるのが最善です。「声をかけてもらって感謝している」「検討した結果、今回は自分の希望と方向性が合わないと判断した」と理由を簡潔に添えれば角が立ちません。曖昧に引き延ばす方が、紹介者の社内対応を難しくします。本文の断り方例文も参考にしてください。",
  },
  {
    q: "リファラルと転職エージェントは併用できますか？",
    a: "併用できます。リファラルで数社、エージェント経由で数社に応募すれば、比較対象が増えて判断しやすくなります。特に年収の相場感や条件面の妥当性はエージェントに確認すると、リファラル先の条件が適正かどうかを客観的に判断できます。",
  },
  {
    q: "リファラルは選考が早いと聞きますが本当ですか？",
    a: "紹介者が社内で直接つないでくれるぶん、応募から面談までが早く進むことはあります。ただしスピードは企業の採用体制次第で、必ず早いとは限りません。早さよりも「内部情報を得てミスマッチを防げる」点をリファラルの本質的なメリットととらえる方が実態に合っています。",
  },
];

export default function ReferralPage() {
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
        title="リファラル転職の実態と注意点【例文・断り方付き】"
        description="リファラル（社員紹介）転職の声のかけ方・かけられ方、選考の実態、断りにくさへの対処を例文付きで解説。30代・40代エンジニアが人脈を活かして転職するための実践ガイド。"
        url="/knowledge/referral/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ガイド" },
          { name: "リファラル転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          リファラル転職の実態と注意点【例文・断り方付き】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 声のかけ方・選考の実態・断りにくさへの対処
        </p>

        {/* 直答box (P6-C2) */}
        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】リファラル転職の本質と注意点は？</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: 最大のメリットは「速さ」より、入社前に内部情報を得てミスマッチを防げること。面接自体は通常どおりで、必ず受かるわけではありません。</strong></p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・最大の注意点は断りにくさ。合わないと感じたら早く・丁寧に伝える</li><li>・年収相場は紹介者ではなくエージェントで確認し、条件が適正か客観的に判断する</li><li>・リファラルとエージェントは併用が安全</li></ul>
          </div>
        </section>

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed">
            リファラル転職（社員紹介）は、知り合いの社員を通じて応募する転職方法です。IT業界では一般的なチャネルの一つで、内部情報を得てミスマッチを防げる点が大きな魅力です。一方で「知り合い経由だからこそ断りにくい」「紹介者に気を遣う」といった、通常の転職にはない難しさもあります。本記事では、声のかけ方・かけられ方、選考の実態、そして断りにくさへの具体的な対処を、例文付きで整理します。
          </p>
        </section>

        <DataNote surveyedAt="2026年6月" sources={["一般的なIT企業のリファラル採用の運用に基づく整理"]} />

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4 text-sm text-petrol-deep">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="hover:underline">{t.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：リファラルの本質は「速さ」より「事前に中が見えること」</h2>
            <ul className="text-sm text-blue-900 space-y-2 leading-relaxed">
              <li>・最大のメリットは<strong>入社前に内部情報を得てミスマッチを防げる</strong>こと。面接自体は通常どおりで、必ず受かるわけではない。</li>
              <li>・最大の注意点は<strong>断りにくさ</strong>。曖昧にするほど紹介者の社内対応が難しくなるため、合わないと感じたら早く・丁寧に伝える。</li>
              <li>・年収相場は紹介者でなく<strong>エージェントで確認</strong>し、条件が適正か客観的に判断する。リファラルとエージェントは併用が安全。</li>
            </ul>
          </div>
        </section>

        {/* リファラルとは */}
        <section id="what" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">リファラル転職とは・通常選考との違い</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            リファラル転職は、その企業で働く知人の紹介を通じて選考に進む方法です。求人サイトやエージェント経由の応募と比べ、次の点が異なります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">観点</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">リファラル</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">通常の応募</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["入口", "知人社員の紹介・推薦", "求人サイト／エージェント"],
                  ["内部情報", "事前にヒアリングしやすい", "公開情報・面接で確認"],
                  ["選考", "面接は通常どおり実施", "面接は通常どおり実施"],
                  ["条件交渉", "人事・採用担当と行う", "本人またはエージェントが行う"],
                  ["心理的負担", "紹介者への気遣いがある", "比較的少ない"],
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-3 py-3 border border-slate-200 font-medium text-slate-800">{row[0]}</td>
                    <td className="px-3 py-3 border border-slate-200 text-slate-600">{row[1]}</td>
                    <td className="px-3 py-3 border border-slate-200 text-slate-600">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 text-sm mt-3">
            ポイントは、<strong>「紹介された＝合格」ではない</strong>こと。推薦は選考に添えられますが、技術面接やカルチャーフィットは通常どおり評価されます。
          </p>
        </section>

        {/* 声のかけ方 */}
        <section id="ask" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">声のかけ方【依頼の例文】</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            いきなり「紹介して」と頼むと、相手も社内で動きにくくなります。まずは<strong>情報交換から入り、相手に判断の余地を残す</strong>のがマナーです。以下は段階別の例文です。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <p className="text-xs font-bold text-slate-500 mb-2">STEP1：情報交換から入る</p>
              <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 rounded p-3">
                「最近、次のキャリアを考えていて。◯◯さんの会社、開発の進め方やチームの雰囲気ってどんな感じですか？もしよかったら一度お話を聞かせてもらえると嬉しいです。」
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <p className="text-xs font-bold text-slate-500 mb-2">STEP2：関心が固まったら依頼する</p>
              <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 rounded p-3">
                「お話を聞いて、◯◯さんの会社に興味が出てきました。もしリファラルの制度があれば、推薦をお願いできますか？難しければ通常応募でも大丈夫なので、無理のない範囲で教えてください。」
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-sm mt-4">
            「無理なら通常応募で構わない」と添えると、相手が断りやすくなり、関係を保ったまま依頼できます。人脈づくり自体は
            <Link href="/knowledge/side-project/" className="text-petrol hover:underline">副業・個人開発でスキルを伸ばす</Link>
            やコミュニティ活動と並行して進めるのが効果的です。
          </p>
        </section>

        {/* 声をかけられたとき */}
        <section id="asked" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">声をかけられたときの対応【返信例文】</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            逆に、知人から「うちに来ない？」と誘われる立場になることもあります。即答を避け、<strong>まずは情報を得てから判断する</strong>のが安全です。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <p className="text-xs font-bold text-slate-500 mb-2">前向きに検討したいとき</p>
              <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 rounded p-3">
                「お声がけありがとうございます。興味があります。技術スタックやチーム構成、働き方など、もう少し詳しく教えてもらえますか？一度カジュアルにお話しできると嬉しいです。」
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <p className="text-xs font-bold text-slate-500 mb-2">今は動けないが関係は保ちたいとき</p>
              <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 rounded p-3">
                「ありがとうございます。今すぐの転職は考えていないのですが、◯◯さんの会社には関心があります。タイミングが合えば、その時はぜひ相談させてください。」
              </p>
            </div>
          </div>
        </section>

        {/* 選考の実態 */}
        <section id="flow" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考の実態（流れと面接）</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "紹介者にヒアリング", desc: "技術スタック・開発文化・チームの雰囲気・働き方など、公開情報では分からない内容を聞く。ここがリファラル最大の価値。" },
              { num: "2", title: "カジュアル面談（あれば）", desc: "選考前に現場メンバーと話す機会が設けられることがある。相互理解とミスマッチ防止が目的で、合否を決める場ではない。" },
              { num: "3", title: "紹介者経由で正式応募", desc: "紹介者が社内で推薦し、書類選考に進む。推薦コメントが添えられるが、通過を保証するものではない。" },
              { num: "4", title: "通常の面接プロセス", desc: "技術面接・カルチャーフィット面接は通常選考と同じ。技術力は通常どおり問われる。コーディングテストがある場合もある。" },
              { num: "5", title: "内定・条件交渉", desc: "条件交渉は人事・採用担当と行う。市場相場をエージェントで把握しておくと、根拠を持って交渉できる。" },
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
          <p className="text-slate-600 text-sm mt-4">
            技術面接やコーディングテストの対策は
            <Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接の対策ガイド</Link>
            、<Link href="/knowledge/coding-test/" className="text-petrol hover:underline">コーディングテスト対策</Link>を参照してください。
          </p>
        </section>

        {/* メリット・デメリット */}
        <section id="merit" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">メリット・デメリット</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <h3 className="font-bold text-green-800 mb-3">メリット</h3>
              <ul className="text-sm text-green-700 space-y-2">
                <li>・入社前に内部情報を得られ、ミスマッチを防ぎやすい</li>
                <li>・推薦コメントが選考に添えられる</li>
                <li>・応募から面談までが早く進むことがある</li>
                <li>・入社後に知り合いがいて立ち上がりやすい</li>
                <li>・カジュアル面談で相互理解を深めやすい</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <h3 className="font-bold text-red-800 mb-3">デメリット</h3>
              <ul className="text-sm text-red-700 space-y-2">
                <li>・紹介者への気遣いが常につきまとう</li>
                <li>・合わないと感じても断りにくい</li>
                <li>・不採用・早期離職が紹介者の信用に影響しうる</li>
                <li>・人脈がないと使えず、選択肢が限られる</li>
                <li>・年収交渉を切り出しにくい心理が働く</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 断り方 */}
        <section id="decline" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">注意点：断りにくさへの対処【断り方例文】</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            リファラル最大の落とし穴が<strong>「断りにくさ」</strong>です。知り合い経由だからと無理に進めると、入社後のミスマッチで結局お互いが困ります。合わないと感じたら、<strong>早く・丁寧に・理由を簡潔に</strong>伝えるのが、紹介者を守る最善策です。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <p className="text-xs font-bold text-slate-500 mb-2">検討の結果、辞退するとき（紹介者へ）</p>
              <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 rounded p-3">
                「声をかけてもらって本当にありがとうございました。じっくり検討したのですが、今回は自分の希望する方向性と少し違うと感じたため、応募は見送らせてください。貴重な機会をいただいたこと、感謝しています。」
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <p className="text-xs font-bold text-slate-500 mb-2">選考途中で辞退するとき（人事担当へ）</p>
              <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 rounded p-3">
                「選考の機会をいただきありがとうございます。検討を重ねた結果、誠に勝手ながら今回は辞退させていただきたくご連絡しました。ご対応いただいたことに御礼申し上げます。」
              </p>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <p className="text-sm text-amber-800">
              <strong>避けたい対応：</strong>返信を引き延ばす／音信不通になる。これは紹介者の社内対応を最も難しくし、関係を損ないます。気まずくても、早めの一報が誠実です。
            </p>
          </div>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代のリファラル活用視点</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
            <p>
              30代・40代は、これまでの職歴で築いた<strong>「元同僚」というリファラルの母集団</strong>が最大の資産です。過去に一緒に働いた人が各社に散らばっているため、若手よりリファラルのチャンスは多い世代といえます。前職の人間関係を良好に保っておくことが、将来の選択肢になります。
            </p>
            <p>
              一方で、ミドル層は採用側の期待値も高く、<strong>「知り合いだから通る」わけではない</strong>点に注意が必要です。推薦があっても、相応のポジションでは技術力・リード経験がしっかり問われます。リファラルだからと準備を軽くせず、職務経歴書や面接対策は通常どおり丁寧に行いましょう（<Link href="/knowledge/resume/" className="text-petrol hover:underline">職務経歴書の書き方</Link>）。
            </p>
            <p>
              年収面では、知り合い経由ゆえに交渉を切り出しにくい心理が働きがちです。相場をエージェントで把握し、感情と切り離して人事と交渉しましょう。年代別の年収感は
              <Link href="/knowledge/salary-30s/" className="text-petrol hover:underline">30代エンジニアの年収</Link>
              ・<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代エンジニアの年収</Link>を参考にしてください。
            </p>
          </div>
        </section>

        {/* チェックリスト */}
        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人／慎重になるべき人</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-800 mb-3">リファラルが向いている人</h3>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>✓ 信頼できる元同僚・知人が志望企業にいる</li>
                <li>✓ 入社前にじっくり内部情報を確認したい</li>
                <li>✓ ミスマッチを何より避けたい</li>
                <li>✓ 断るときも誠実に対応できる</li>
              </ul>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-800 mb-3">慎重になるべき人</h3>
              <ul className="text-sm text-slate-700 space-y-2">
                <li>✓ 紹介者に気を遣いすぎて断れない自覚がある</li>
                <li>✓ 短期で再転職する可能性が高い</li>
                <li>✓ 幅広く比較してから決めたい（選択肢が狭まる）</li>
                <li>✓ 条件交渉を切り出すのが極端に苦手</li>
              </ul>
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
          <h2 className="text-xl font-bold mb-3">リファラルと併用してエージェントも活用しよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            リファラル先の条件が適正か判断するには、市場相場を知ることが欠かせません。IT特化型エージェントで相場を確認し、交渉を有利に進めましょう。
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
              { name: "直接応募vsエージェント", href: "/knowledge/direct-apply/" },
              { name: "エンジニアのLinkedIn活用術", href: "/knowledge/linkedin/" },
              { name: "スカウト型転職サービスの活用法", href: "/knowledge/scout/" },
              { name: "複数内定の比較方法", href: "/knowledge/offer-compare/" },
              { name: "年収交渉の完全ガイド", href: "/knowledge/salary-negotiation/" },
              { name: "技術面接の対策ガイド", href: "/knowledge/tech-interview/" },
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
