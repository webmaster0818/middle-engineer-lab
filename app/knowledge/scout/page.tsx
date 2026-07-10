import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "スカウトの活用法｜ビズリーチ・Green・paizaの仕組みと返信例文";
const PAGE_DESC =
  "スカウト型転職サービスの仕組みと活用法を解説。ビズリーチ・Green・paiza転職の違い、スカウトを増やすプロフィール、返信例文、良いスカウトの見極め方を30代・40代向けに紹介します。";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/scout/" },
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：仕組みを理解して使い分ける" },
  { id: "mechanism", label: "3サービスのスカウトの仕組み" },
  { id: "compare", label: "サービス比較（出典付き）" },
  { id: "profile", label: "スカウトを増やすプロフィール" },
  { id: "reply", label: "返信例文テンプレ" },
  { id: "judge", label: "良いスカウトの見極め方" },
  { id: "middle", label: "30代・40代のスカウト活用" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const mechanisms = [
  {
    name: "ビズリーチ",
    href: "/review/bizreach-it/",
    body:
      "登録者の職務経歴を見たヘッドハンターや企業から直接スカウトが届く、ハイクラス・スカウト型。登録ヘッドハンター9,700人以上・登録者282万人（2025年4月時点・二次）。年収1,000万円以上求人が全体の約4割（二次）。無料会員でもスカウトは受け取れるが、一部機能は有料プラン（Web決済5,478円/月・2022年11月改定・二次）が前提。通常スカウトに加え、企業の本気度が高い「プラチナスカウト」がある。",
  },
  {
    name: "Green",
    href: "/review/green/",
    body:
      "エージェントを介さない成功報酬型の転職サイト（ダイレクトリクルーティング）。掲載企業9,000社以上・求人15,000件以上（媒体により30,000件以上とも・二次、幅あり）。企業の人事から直接「気になる」やスカウトが届き、カジュアル面談で社風を把握してから選考に進める。IT/Webベンチャー・スタートアップに強い。仲介サポートはない。",
  },
  {
    name: "paiza転職",
    href: "/review/paiza/",
    body:
      "スキルチェック（プログラミングテスト）のランクで実力を評価し、それを見た企業からスカウトが届く。公開求人5,100件（2026年4月更新・二次）、掲載1,600社以上、全体会員85万人以上（2025年3月時点・二次）。書類選考免除のスカウトもあり、学歴・経歴より実力で評価されたい人向け。ランクB以上でないと届きにくいとの声（二次）。個別仲介サポートはない。",
  },
];

const profileTips = [
  { num: "1", title: "技術スタックを具体的に書く", desc: "「Webエンジニア」ではなく「Go / gRPC / Kubernetes / AWS / Terraform」のように具体的に。企業はキーワード検索でスカウト対象を探すため、使った技術名を網羅的に書くほど見つかりやすくなります。" },
  { num: "2", title: "成果を数値で書く", desc: "「パフォーマンス改善」ではなく「API応答時間200ms→50msに改善」「月間1,000万PVのサービスを運用」のように数値化します。実績の解像度がスカウトの質を左右します。" },
  { num: "3", title: "希望条件を明確に設定する", desc: "年収・勤務地・リモート可否・企業規模の希望を明示すると、マッチ精度が上がり的外れなスカウトが減ります。" },
  { num: "4", title: "プロフィールを定期的に更新する", desc: "最終更新が古いとスカウトは減りがちです。月1回は見直し、新しいスキルや実績を追加しましょう。paizaはスキルチェックのランクを上げ直すのも有効です。" },
  { num: "5", title: "ログイン頻度を保つ", desc: "多くのサービスで最近ログインしたユーザーが優先表示される傾向があります。週2〜3回のログインを目安にしましょう。" },
];

const replyTemplates = [
  {
    label: "興味あり・カジュアル面談を希望する返信",
    body:
      "ご連絡ありがとうございます。◯◯（ポジション名）に興味があります。まずは選考前にカジュアル面談で、チーム構成や開発体制、技術スタックについてお話を伺えればと思います。今週後半か来週で、平日19時以降またはオンラインで調整可能です。よろしくお願いいたします。",
  },
  {
    label: "条件を確認したうえで検討する返信",
    body:
      "スカウトいただきありがとうございます。前向きに検討したく、いくつか確認させてください。（1）想定年収レンジ （2）リモートの可否と出社頻度 （3）募集背景。差し支えない範囲で教えていただけますと幸いです。",
  },
  {
    label: "今回は見送るが関係を残す返信",
    body:
      "ご連絡ありがとうございます。魅力的なお話ですが、現在は◯◯（技術領域/勤務地）を軸に検討しており、今回は見送らせていただきます。条件に合う別ポジションがございましたら、改めてご連絡いただけますと幸いです。",
  },
];

const faqs = [
  {
    q: "スカウト型サービスと転職エージェントの違いは？",
    a: "エージェントはアドバイザーが求人を紹介し選考を仲介します。一方スカウト型は企業やヘッドハンターが直接あなたにアプローチする仕組みです。自分から探さなくても求人が届くため、在職中で忙しいエンジニアに向きます。ビズリーチはスカウト型、Greenはダイレクトリクルーティング、paizaはスキル評価＋スカウトと、仕組みが異なります。",
  },
  {
    q: "スカウトメールは全部返信すべき？",
    a: "興味のあるものだけ返信すれば十分です。ただしビズリーチの「プラチナスカウト」のように企業の本気度が高いものは、条件が完全に合わなくてもカジュアル面談を受けると良い出会いにつながることがあります。テンプレートの一斉送信は優先度を下げて構いません。",
  },
  {
    q: "スカウトの年収提示額は信頼できる？",
    a: "スカウト段階の提示はあくまで想定レンジで、実際の年収は面接と条件交渉で確定します。提示額が希望を大きく下回るスカウトは、最終的にも低い傾向があるため見送っても良いでしょう。提示が曖昧な場合は返信時に年収レンジを確認しましょう。",
  },
  {
    q: "現職にバレずにスカウト型を使える？",
    a: "多くのサービスに現職をブロックする機能があります。ビズリーチでは現職や関連企業を非表示にできる機能があります（公式）。登録直後に必ず設定しておきましょう。",
  },
  {
    q: "どのスカウト型サービスに登録すべき？",
    a: "経験豊富でハイクラス志向なら年収1,000万円以上求人が全体の約4割（二次）のビズリーチ、ベンチャー・直接やり取り志向ならGreen、コードの実力で評価されたいならpaiza転職が向きます。特性が異なるため、複数併用して反応を見るのがおすすめです。",
  },
  {
    q: "スカウトとエージェントは併用すべき？",
    a: "併用がおすすめです。スカウト型で市場の反応を見つつ、IT特化型エージェント経由で非公開求人にもアクセスすれば選択肢を最大化できます。併用時の管理は複数併用の記事を参考にしてください。",
  },
  {
    q: "paizaのスキルチェックでランクが低いとスカウトは来ない？",
    a: "ランクB以上でないと届きにくいとの声があります（二次情報）。逆に高ランクを取れば学歴・経歴の壁を越えてスカウトが届きやすくなるのが特徴です。腕に自信がある人ほど有利に働くサービスです。",
  },
];

export default function ScoutPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/knowledge/scout/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "スカウトの活用法" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          スカウトの活用法｜ビズリーチ・Green・paizaの仕組みと返信例文
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | スカウトを増やし、見極めて使いこなす
        </p>

        {/* 直答box (P6-C2) */}
        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】スカウト型サービスはどう使い分ける？</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: プロフィールを技術名と数値で作り込み、届いたスカウトを見極めて返信することで価値が出ます。サービスごとに仕組みが違うため、使い分けが鍵です。</strong></p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・ハイクラス志向はビズリーチ（年収1,000万円以上求人が全体の約4割・二次）</li><li>・ベンチャー・直接やり取り志向はGreen（カジュアル面談中心）</li><li>・実力で評価されたいならpaiza転職（スキルチェックのランク）</li></ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          スカウト型サービスは、プロフィールを登録しておくだけで企業やヘッドハンターからオファーが届く仕組みです。在職中で忙しいエンジニアでも効率的に転職活動を進められます。ただしサービスごとに「仕組み」が違うため、それを理解しないと届くスカウトの質も活かし方も変わります。本記事ではビズリーチ・Green・paiza転職の仕組みを整理し、スカウトを増やすプロフィール、返信例文、良いスカウトの見極め方まで解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={["各社公式サイト・公式ガイド", "転職メディア集計値（時点付き）", "Qiita Job Change等の口コミ傾向"]}
        />

        {/* 目次 */}
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

        {/* 結論 */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：仕組みを理解して使い分ける</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              スカウトは「届くのを待つ」だけでなく、<strong>プロフィールを技術名と数値で作り込み、届いたスカウトを見極めて返信する</strong>ことで価値が出ます。サービスごとに仕組みが違うので使い分けが鍵です。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>・ハイクラス志向：<Link href="/review/bizreach-it/" className="font-semibold underline">ビズリーチ</Link>（年収1,000万以上求人が約4割・二次）</li>
              <li>・ベンチャー・直接やり取り：<Link href="/review/green/" className="font-semibold underline">Green</Link>（カジュアル面談中心）</li>
              <li>・実力で評価されたい：<Link href="/review/paiza/" className="font-semibold underline">paiza転職</Link>（スキルチェックのランク）</li>
            </ul>
          </div>
        </section>

        {/* 仕組み */}
        <section id="mechanism" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">3サービスのスカウトの仕組み</h2>
          <div className="space-y-4">
            {mechanisms.map((m) => (
              <div key={m.name} className="border border-slate-200 rounded-lg p-5">
                <Link href={m.href} className="font-bold text-slate-800 hover:text-petrol-deep hover:underline">
                  {m.name}
                </Link>
                <p className="text-sm text-slate-600 leading-relaxed mt-2">{m.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 比較表 */}
        <section id="compare" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">サービス比較（出典付き）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">サービス</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">形態</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">特徴（出典付き）</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">向く人</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600 font-medium">
                    <Link href="/review/bizreach-it/" className="text-petrol hover:underline">ビズリーチ</Link>
                  </td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">ハイクラス・スカウト型</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">年収1,000万円以上求人が全体の約4割（二次）。一部機能は有料プラン前提（5,478円/月・二次）。</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">経験豊富な40代</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600 font-medium">
                    <Link href="/review/green/" className="text-petrol hover:underline">Green</Link>
                  </td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">ダイレクトリクルーティング</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">掲載企業9,000社以上（二次）。カジュアル面談で社風を把握。仲介サポートなし。</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">ベンチャー志望</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600 font-medium">
                    <Link href="/review/paiza/" className="text-petrol hover:underline">paiza転職</Link>
                  </td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">スキル評価＋スカウト</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">スキルチェックのランクで評価。書類選考免除あり。ランクB以上で届きやすい（二次）。</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">実力で勝負したい人</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* プロフィール */}
        <section id="profile" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スカウトを増やすプロフィールの5つのポイント</h2>
          <div className="space-y-4">
            {profileTips.map((item) => (
              <div key={item.num} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
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
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            プロフィールの土台になる職務経歴書は<Link href="/knowledge/resume/" className="text-petrol hover:underline">職務経歴書の書き方</Link>、自分の相場感は<Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の調べ方</Link>を参考にしてください。
          </p>
        </section>

        {/* 返信例文 */}
        <section id="reply" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">返信例文テンプレ</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            ◯◯部分を自分の状況に置き換えて使ってください。最初からフルの選考に入るより、カジュアル面談を挟むと情報を得やすくなります。
          </p>
          <div className="space-y-4">
            {replyTemplates.map((t) => (
              <div key={t.label} className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700">{t.label}</div>
                <p className="px-4 py-3 text-sm text-slate-600 leading-relaxed whitespace-pre-line">{t.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 見極め */}
        <section id="judge" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">良いスカウトの見極め方</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">1. パーソナライズされているか</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">あなたの経歴や技術に具体的に触れているスカウトは本気度が高いです。テンプレート一斉送信は優先度を下げて構いません。ビズリーチの「プラチナスカウト」は企業の本気度の目安になります。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">2. 提示年収レンジを確認する</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">希望を大きく下回るスカウトは見送り、逆に相場より高いものは条件や募集背景をよく確認しましょう。提示が曖昧なら返信時に質問します。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">3. 送信者を確認する</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">採用担当やCTOから直接届いたスカウトは本気度が高い傾向です。ヘッドハンター経由の場合は企業名と募集ポジションを確認しましょう。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">4. まずカジュアル面談を活用する</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">気になるスカウトは選考前にカジュアル面談を申し込みましょう。Greenはこの形式が中心で、社風や開発体制を把握してから選考に進めます。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">5. 市場の反応として活用する</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">届くスカウトの数と質は、自分の市場価値の客観指標になります。プロフィール変更で反応がどう変わるかも参考になります。</p>
            </div>
          </div>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代のスカウト活用</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>
              30代・40代は在職中の活動が多く、自分から大量応募する時間が取りにくいため、スカウト型は相性が良い手段です。プロフィールを作り込んでおけば、本業をこなしながら市場の反応を受け取れます。
            </p>
            <p>
              40代はマネジメント経験や専門領域が評価軸になります。ビズリーチは年収1,000万円以上求人が全体の約4割（二次）で、レバテック公表値では正社員SE 40代の平均年収は約618万円・年収1,000万円以上の割合は12.67%（2025年・ガイド記事）です。スカウトで複数の打診を受けておくと、年収交渉の材料にもなります。なお経歴次第ではスカウトが来ない場合もある（二次）ため、エージェントとの併用で死角を埋めるのが安全です。
            </p>
            <p>
              年代別の実態は<Link href="/age/30s/" className="text-petrol hover:underline">30代の転職</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職</Link>も参考にしてください。
            </p>
          </div>
        </section>

        {/* FAQ */}
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

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">スカウトとエージェントを併用しよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            スカウト型で市場の反応を見つつ、IT特化型エージェントの非公開求人にもアクセスして選択肢を最大化しましょう。
          </p>
          <Link
            href="/compare/agents/"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            IT転職エージェント10社比較を見る
          </Link>
        </section>

        {/* 関連記事 */}
        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "ハイクラス向けエージェント比較", href: "/compare/highclass/" },
              { name: "直接応募とエージェントの使い分け", href: "/knowledge/direct-apply/" },
              { name: "複数エージェントの併用と管理", href: "/knowledge/multiple-agents/" },
              { name: "市場価値の調べ方", href: "/knowledge/market-value/" },
              { name: "ビズリーチの評判", href: "/review/bizreach-it/" },
              { name: "LinkedInを使った転職術", href: "/knowledge/linkedin/" },
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
