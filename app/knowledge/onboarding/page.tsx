import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "転職先のオンボーディング攻略｜適応戦略と質問の仕方・リモート注意点";
const DESCRIPTION =
  "転職先での適応戦略、質問の仕方、リモートオンボーディングの注意点を解説。30代・40代エンジニアが新環境で早期に信頼を獲得し、無理なく立ち上がるための実践ガイドです。";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/onboarding/" },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "first-day", label: "適応戦略：30/60/90日プラン" },
  { id: "trust", label: "信頼を獲得する7つのコツ" },
  { id: "how-to-ask", label: "質問の仕方（テンプレ付き）" },
  { id: "remote", label: "リモートオンボーディングの注意点" },
  { id: "anti", label: "やりがちなNG行動" },
  { id: "midlife", label: "30代・40代の視点" },
  { id: "faq", label: "よくある質問" },
];

const plan = [
  { num: "〜30日", title: "理解に集中する", desc: "開発環境のセットアップ、社内ツール・権限の把握、チームメンバーへの挨拶。コードベースの全体像、アーキテクチャ、命名規則、テスト方針を読み込む。小さなバグ修正で開発フローを体験する。この時期は『成果』より『理解』が目標。" },
  { num: "〜60日", title: "小さな成果を出す", desc: "小〜中規模のタスクを担当し、最初のPRでレビュー文化を体感。Quick Win（CI改善・ドキュメント整備など）でチームに貢献。1on1で期待値とのズレを確認し、調整する。" },
  { num: "〜90日", title: "独り立ちに向かう", desc: "設計・実装・レビューを一人で回せる状態へ。技術的な提案も少しずつ始める。チーム内での自分の役割と強みを定着させ、次の四半期の目標をマネージャーとすり合わせる。" },
];

const tips = [
  { title: "「まず聞く → 理解する → 提案する」の順を守る", desc: "前職のやり方をいきなり持ち込まない。今の仕組みには背景や経緯がある。まず理解し、信頼を得てから段階的に提案すると受け入れられやすい。" },
  { title: "理解したことをドキュメント化する", desc: "セットアップ手順やアーキテクチャの理解メモを書くと、次の新メンバーの助けになり、早期の貢献として評価される。" },
  { title: "1on1を能動的に使う", desc: "上司との1on1で『今の自分の課題』『期待されている成果』を確認。認識のズレを早期に修正できる。受け身で臨まず、議題を用意していく。" },
  { title: "コードレビューで接点を作る", desc: "レビューを通じてチームのスタイルを学びつつ、建設的なフィードバックで信頼を獲得。質問も歓迎されやすい場。" },
  { title: "Quick Winを1つ見つける", desc: "チームが地味に困っている小さな問題（壊れかけのCI、古いREADME等）を解決すると、早期に存在感を示せる。" },
  { title: "謙虚さと存在感のバランスを取る", desc: "『前の会社では〜』を連発しない。一方で、経験を求められた場面では堂々と共有する。" },
  { title: "チームの文化を尊重する", desc: "スタンドアップの進め方、PRの粒度、コミュニケーションツールの使い方など、まずは郷に入っては郷に従う。" },
];

const askTemplates = [
  { situation: "用語・前提が分からない", bad: "「これ何ですか？」（丸投げ）", good: "「◯◯という用語が出てきたのですが、△△という理解で合っていますか？ 違っていれば補足いただけますか」" },
  { situation: "仕様の意図を知りたい", bad: "「なんでこうなってるんですか？」（詰問に聞こえる）", good: "「この実装は□□の事情があってこの形なのか、それとも改善余地があるのか、背景を教えていただけますか」" },
  { situation: "詰まって時間を溶かしそう", bad: "黙って何時間も抱え込む", good: "「◯◯まで調べて△△を試しましたが解決しませんでした。15分ほどお時間いただけますか」（調べた過程を添える）" },
  { situation: "レビュー指摘の意図確認", bad: "指摘を全否定された気分で黙る", good: "「ご指摘の△△は□□の理由という理解で合っていますか。今後同じ観点で気をつけます」" },
];

const ngActions = [
  "いきなり前職のやり方への変更を提案する",
  "分からないことを聞けず、長時間ひとりで抱え込む",
  "「即戦力」を意識しすぎて、理解より成果を焦る",
  "雑談やチームの場を避け、関係構築を後回しにする",
  "メモを取らず、同じ質問を繰り返す",
];

const remoteTips = [
  { title: "「分からない」が見えにくいことを前提に動く", desc: "対面なら表情で察してもらえる困りごとも、リモートでは伝わらない。テキストで早めに状況を共有する習慣をつける。" },
  { title: "雑談・関係構築を意図的に設計する", desc: "オフィスの自然な会話が起きないため、バーチャルコーヒーチャットや1on1を能動的にセットする。" },
  { title: "質問の心理的ハードルを下げる工夫をする", desc: "DMより、チームのチャンネルで質問する方が、他の人の知見も集まり記録にも残る。『初歩的ですが』と前置きしすぎない。" },
  { title: "非同期コミュニケーションの作法を学ぶ", desc: "相手の時間を奪わないよう、質問は背景・試したこと・聞きたいことをまとめて1メッセージに。即レスを前提にしない。" },
  { title: "オンボーディング資料の不足は自分で補完する", desc: "リモートは暗黙知が共有されにくい。詰まった点はメモし、改善版ドキュメントとして残すとチームへの貢献になる。" },
];

const faqs = [
  {
    q: "オンボーディング期間はどのくらいが目安ですか？",
    a: "一般的に、最初の1か月で環境理解、2〜3か月目で小さな成果を出し始め、独り立ちまでに3〜6か月程度を見込むのが現実的です。期間は企業規模やコードベースの複雑さで変わります。30/60/90日でゆるくマイルストーンを置くと、焦らず立ち上がれます。",
  },
  {
    q: "30代・40代でも分からないことを質問していいのですか？",
    a: "むしろ積極的に質問すべきです。新しい環境では経験年数に関係なく分からないことがあって当然で、早めに確認する人ほどスムーズに立ち上がります。『調べた過程を添えて聞く』と、質問の質も評価も上がります。質問できずに抱え込む方が、ミドル層にとって大きなリスクです。",
  },
  {
    q: "前職のやり方を新しい職場に持ち込んでも良いですか？",
    a: "最初の数か月は『まず理解する』姿勢が重要です。前職のやり方が優れていても、いきなり変革を提案すると反感を買いかねません。今の仕組みの背景を理解し、信頼を築いたうえで段階的に提案すると受け入れられやすくなります。",
  },
  {
    q: "リモート入社で気をつけることは何ですか？",
    a: "対面より『困っている状態』が伝わりにくいことを前提に動きましょう。テキストで早めに状況共有し、質問はDMよりチームのチャンネルで。雑談や関係構築は自然発生しないため、バーチャルコーヒーチャットや1on1を自分から設計するのがコツです。",
  },
  {
    q: "既存メンバーと良い関係を築くコツはありますか？",
    a: "まずコードレビューやペアプロなど技術的な接点を作り、そこから雑談やランチ（リモートならオンライン）に広げると自然です。相手の仕事に関心を持ち、感謝を言葉にすることが、信頼構築の基本になります。",
  },
  {
    q: "成果を出すまでの焦りにどう対処すればいいですか？",
    a: "最初の1か月は『成果』より『理解』に集中すると割り切りましょう。コードベース・開発フロー・チーム文化の把握が先で、それが中期的な成果の土台になります。30/60/90日プランで段階的な目標を置くと、焦りが和らぎます。",
  },
  {
    q: "オンボーディングがうまくいかないと感じたらどうすべきですか？",
    a: "まず上司や人事に正直に相談しましょう。オンボーディングの改善は企業側にもメリットがあるため、前向きに対応されるのが一般的です。役割やサポート体制の調整で解決することも多いです。それでも構造的なミスマッチが続く場合は、試用期間中の判断も含めて転職エージェントに相談する選択肢があります。",
  },
];

export default function OnboardingPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/onboarding/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ガイド" },
          { name: "オンボーディング攻略" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          転職先のオンボーディング攻略｜適応戦略と質問の仕方・リモート注意点
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | 新環境で無理なく立ち上がるための実践ガイド</p>

        {/* 直答box (P6-C2) */}
        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】転職先で早く立ち上がり信頼を得るには、最初の数か月をどう過ごす？</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: 最初の1か月は「成果」より「理解」に集中し、前職のやり方を急に持ち込まず、質問は「調べた過程」を添えて早めにするのが立ち上がりの鉄則です。</strong></p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・30/60/90日プランで、〜30日は理解、〜60日は小さな成果、〜90日は独り立ちを目安に置く</li><li>・前職のやり方は「まず聞く→理解する→提案する」の順で。いきなり変革を提案しない</li><li>・質問は丸投げでなく調べた過程＋仮説を添える。リモートは困っている状態が見えにくい前提でテキストで早めに共有する</li></ul>
          </div>
        </section>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            転職はゴールではなくスタートです。特に30代・40代のミドルエンジニアは「即戦力」を期待されるため、最初の数か月の過ごし方が、その後の評価と働きやすさを大きく左右します。本記事では、<strong>新環境への適応戦略</strong>、<strong>質問の仕方</strong>、<strong>リモートオンボーディングの注意点</strong>を、具体的なテンプレートとともに解説します。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={["転職後の立ち上げに関する一般的な実務知見（30/60/90日プラン）"]}
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
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：最初の1か月は「成果」より「理解」に振る</h2>
            <p className="text-sm text-blue-800 leading-relaxed">
              立ち上がりの鉄則は、<strong>(1)最初の1か月は理解に集中</strong>、<strong>(2)前職のやり方を急に持ち込まない</strong>、<strong>(3)質問は『調べた過程』を添えて早めにする</strong>こと。即戦力を焦って空回りするより、土台を固める方が中期的な成果につながります。リモート入社では「困っている状態が見えにくい」前提で、テキストでの早めの共有を心がけましょう。
            </p>
          </div>
        </section>

        {/* plan */}
        <section id="first-day" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">適応戦略：30/60/90日プラン</h2>
          <p className="text-sm text-slate-600 mb-4">外資系企業などでよく使われる「30/60/90日プラン」を、エンジニアの立ち上げ向けに整理しました。期間は目安で、コードベースの複雑さやチーム規模で前後します。</p>
          <div className="space-y-4">
            {plan.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center min-w-16 h-8 px-2 rounded-full bg-petrol text-white font-bold text-xs shrink-0">{item.num}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* trust */}
        <section id="trust" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">信頼を獲得する7つのコツ</h2>
          <div className="space-y-4">
            {tips.map((t, i) => (
              <div key={i} className="bg-petrol-soft rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-2">{i + 1}. {t.title}</h3>
                <p className="text-sm text-petrol-deep">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* how to ask */}
        <section id="how-to-ask" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">質問の仕方（テンプレート付き）</h2>
          <p className="text-sm text-slate-600 mb-4">
            ミドル層が立ち上がりでつまずく最大の原因は「質問できずに抱え込む」ことです。質問は『丸投げ』ではなく『調べた過程＋仮説』を添えると、相手の負担が減り、自分の理解度も伝わります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">場面</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">避けたい聞き方</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">おすすめの聞き方</th>
                </tr>
              </thead>
              <tbody>
                {askTemplates.map((a, i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-slate-50" : ""}>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600 font-medium whitespace-nowrap">{a.situation}</td>
                    <td className="border border-slate-200 px-4 py-3 text-red-600">{a.bad}</td>
                    <td className="border border-slate-200 px-4 py-3 text-green-700">{a.good}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
            <p className="text-sm text-green-800"><strong>15分ルール：</strong>一定時間（例: 15〜30分）調べても進まなければ、調べた内容を添えて質問する、とあらかじめ自分でルールを決めておくと、抱え込みを防げます。</p>
          </div>
        </section>

        {/* remote */}
        <section id="remote" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">リモートオンボーディングの注意点</h2>
          <p className="text-sm text-slate-600 mb-4">リモート入社は通勤がない一方で、暗黙知や雑談が共有されにくく、孤立しやすいという難しさがあります。次の点を意識すると立ち上がりがスムーズになります。</p>
          <div className="space-y-4">
            {remoteTips.map((t, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{i + 1}. {t.title}</h3>
                <p className="text-sm text-slate-600">{t.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 mt-4">
            リモートワークの働き方全般は<Link href="/knowledge/remote-work/" className="text-petrol hover:underline">リモートワーク転職ガイド</Link>も参考になります。
          </p>
        </section>

        {/* NG */}
        <section id="anti" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">やりがちなNG行動</h2>
          <div className="border border-slate-200 rounded-xl p-6 space-y-3">
            {ngActions.map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                <span className="text-red-500 font-bold shrink-0">✕</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* midlife */}
        <section id="midlife" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアならではの視点</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              ミドル層は「即戦力」「すぐに成果を出すはず」という周囲の期待と、新環境では誰もが初心者という現実のギャップに直面します。ここで成果を焦って前職のやり方を押し通すと、かえって信頼を損ないます。<strong>経験豊富な人ほど、最初は『理解』と『傾聴』に時間を使う</strong>ことが、長期的な立ち上がりの近道です。
            </p>
            <p>
              一方で、ミドル層の強みはチーム視点での貢献です。ドキュメント整備、レビュー文化への寄与、若手のサポート、Quick Winの発見など、コードを書く以外でも早期に価値を出せます。これらは年齢を重ねた経験があるからこそ自然にできることです。
            </p>
            <p>
              入社後のミスマッチを防ぐには、そもそもの企業選びも重要です。<Link href="/knowledge/regret/" className="text-petrol hover:underline">転職の後悔を防ぐチェックリスト</Link>や<Link href="/knowledge/first-90days/" className="text-petrol hover:underline">転職後90日間の過ごし方</Link>とあわせて、立ち上がりの設計をしておきましょう。試用期間中に強い違和感が続く場合は、<Link href="/knowledge/probation/" className="text-petrol hover:underline">試用期間中の転職</Link>も選択肢です。
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
          <h2 className="text-xl font-bold mb-3">転職後もキャリアの相談ができるエージェント</h2>
          <p className="text-blue-100 text-sm mb-4">IT特化型エージェントは転職後のフォローアップも充実。立ち上がりの悩みや、想定とのギャップも気軽に相談できます。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "転職後90日間の過ごし方", href: "/knowledge/first-90days/" },
              { name: "転職の後悔を防ぐチェックリスト", href: "/knowledge/regret/" },
              { name: "リモートワーク転職ガイド", href: "/knowledge/remote-work/" },
              { name: "試用期間中の転職", href: "/knowledge/probation/" },
              { name: "スキルアップ戦略", href: "/knowledge/continuous-learning/" },
              { name: "燃え尽き症候群と転職判断", href: "/knowledge/burnout/" },
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
