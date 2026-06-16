import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "転職サイトとエージェントの違い【使い分け・比較表】";
const DESCRIPTION =
  "転職サイトと転職エージェントの違いを、仕組み・メリット/デメリット・比較表・状況別の使い分けまで実践的に解説。30代40代エンジニアがスカウト型も含めて最適な使い方を選ぶための判断軸をまとめます。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "conclusion", label: "結論：違いと使い分けの基本" },
  { id: "what", label: "それぞれの仕組み" },
  { id: "compare", label: "比較表で見る違い" },
  { id: "site", label: "転職サイト（求人サイト）の特徴" },
  { id: "agent", label: "転職エージェントの特徴" },
  { id: "scout", label: "スカウト型サービスという第3の選択肢" },
  { id: "usecase", label: "状況別の使い分け" },
  { id: "notes", label: "併用するときの注意点" },
  { id: "faq", label: "よくある質問" },
];

const compareRows = [
  { aspect: "求人の探し方", site: "自分で検索して応募", agent: "担当者が求人を紹介", scout: "企業・担当者からスカウトが届く" },
  { aspect: "サポート", site: "基本は自分で完結", agent: "書類添削・面接対策・日程調整あり", scout: "サービスにより差がある" },
  { aspect: "年収交渉", site: "自分で行う", agent: "代行してもらえる", scout: "担当が付けば代行も" },
  { aspect: "進めるペース", site: "自分のペースで自由", agent: "担当者と二人三脚", scout: "オファー次第" },
  { aspect: "非公開求人", site: "基本は公開求人のみ", agent: "非公開求人にアクセス可", scout: "企業からの直接打診あり" },
  { aspect: "向いている人", site: "主体的に動ける人", agent: "サポートを受けたい人", scout: "効率よく機会を集めたい人" },
];

const sitePros = ["自分のペースで自由に求人を探して応募できる", "気になる求人を幅広く比較・検討できる", "担当者とのやり取りが不要で気楽", "応募の主導権を自分で握れる"];
const siteCons = ["書類添削や面接対策のサポートがない", "年収交渉や日程調整をすべて自分で行う", "非公開求人にはアクセスしにくい", "情報収集と選考管理の手間がかかる"];

const agentPros = ["書類添削・面接対策など手厚いサポート", "非公開求人を紹介してもらえる", "年収交渉や日程調整を代行してもらえる", "業界・企業の内部情報を得られる"];
const agentCons = ["担当者との相性に左右されることがある", "紹介求人が担当者の判断に依存する", "自分のペースで進めにくいこともある", "連絡対応など一定のやり取りが必要"];

const useCases = [
  { title: "じっくり情報収集したい・在職中で急がない", rec: "転職サイト＋スカウト型を併用", desc: "自分のペースで求人を眺めつつ、スカウトで思わぬ機会を拾えます。応募は急がず比較検討に時間をかけられます。" },
  { title: "書類・面接に不安がある／効率よく進めたい", rec: "転職エージェントを軸にする", desc: "添削・対策・日程調整・年収交渉まで任せられ、選考の通過率を高めやすくなります。初めての転職にも向いています。" },
  { title: "市場価値を知りたい・受け身で機会を集めたい", rec: "スカウト型サービスを活用", desc: "経歴を登録しておくだけで、企業や担当者からの打診が届きます。自分の市場価値を測る手段としても有効です。" },
  { title: "確実に決めたい・選択肢を最大化したい", rec: "3種類を併用する", desc: "サイトで自走しつつ、エージェントで非公開求人とサポートを得て、スカウトで機会を広げる。併用が最も機会損失を防げます。" },
];

const cautionNotes = [
  { title: "応募経路の重複を避ける", desc: "同じ求人に転職サイトとエージェントの両方から応募すると、企業側で応募情報が重複し、選考が混乱します。エージェントを複数使う場合も同様です。どの求人にどの経路で応募したかを、自分でリスト管理しておきましょう。" },
  { title: "選考スケジュールを一元管理する", desc: "複数のサービスを併用すると、面接日程や選考状況の把握が煩雑になります。スプレッドシートなどで応募先・進捗・次のアクションをまとめておくと、対応漏れや日程のバッティングを防げます。" },
  { title: "エージェントへの志望度・状況は正直に伝える", desc: "他社の選考状況や志望度を正直に共有することで、エージェントは交渉やスケジュール調整を適切に進められます。情報を伏せると、かえって自分に不利なタイミングで話が進むことがあります。" },
  { title: "サービスごとの得意領域を理解して使う", desc: "総合型・IT特化型・ハイクラス型など、サービスによって保有求人や強みが異なります。1社に固執せず、得意領域の異なるサービスを組み合わせると、求人の幅と質の両方を確保できます。" },
];

const faqs = [
  {
    q: "転職サイトと転職エージェントはどちらを使うべきですか？",
    a: "目的によります。自分のペースで幅広く求人を比較したいなら転職サイト、書類添削・面接対策・年収交渉などのサポートを受けたいなら転職エージェントが向いています。多くの人は両方を併用し、サイトで情報収集しながらエージェントでサポートと非公開求人を得る形が効率的です。どちらか一方に絞る必要はありません。",
  },
  {
    q: "転職サイトと転職エージェントは併用してもいいですか？",
    a: "併用は問題なく、むしろ推奨されます。サイトで自分のペースに求人を探しつつ、エージェントで非公開求人やサポートを得れば、機会損失を防げます。ただし同じ求人に複数経路から応募すると企業側が混乱するため、応募状況は自分で整理しておきましょう。エージェントを複数使う場合も同様の注意が必要です。",
  },
  {
    q: "エージェント経由の方が転職サイトより有利ですか？",
    a: "一概には言えません。エージェントは非公開求人やサポート、年収交渉の代行といった強みがありますが、紹介求人は担当者の判断に左右されます。一方、サイトは自分で幅広く探せる自由度があります。それぞれ得意な領域が異なるため、有利・不利ではなく目的に合わせて使い分けるのが正解です。",
  },
  {
    q: "スカウト型サービスはサイトやエージェントと何が違いますか？",
    a: "スカウト型は、経歴を登録しておくと企業や担当者から打診が届く『受け身』の仕組みです。自分で探すサイト、紹介を受けるエージェントに対し、待っていれば機会が来るのが特徴です。自分の市場価値を測る手段としても有効で、サイトやエージェントと併用すると選択肢が広がります。",
  },
  {
    q: "30代・40代はどの使い方が向いていますか？",
    a: "ミドル層は、経験を評価してくれる非公開求人やハイクラス求人にアクセスできるエージェントの活用が効果的です。同時に、スカウト型で市場価値を測りつつ、サイトで自分でも求人を確認する併用がおすすめです。年代が上がるほど求人の質や条件交渉が重要になるため、サポートを得られるエージェントの価値が高まります。",
  },
  {
    q: "エージェントは複数登録した方がいいですか？",
    a: "複数登録が基本とされています。エージェントごとに保有求人や得意領域、担当者の質が異なるため、2〜3社併用することで紹介の幅が広がり、相性の良い担当者にも出会いやすくなります。ただし管理が煩雑にならないよう、応募状況やスケジュールは自分で一元管理しておくことが大切です。",
  },
  {
    q: "サイトやエージェントの利用に費用はかかりますか？",
    a: "求職者側は、転職サイト・エージェント・スカウト型のいずれも基本的に無料で利用できます。エージェントは採用が決まった企業から成功報酬を受け取る仕組みのため、求職者が費用を負担することはありません。安心して複数のサービスを併用し、自分に合う使い方を見つけましょう。",
  },
];

export default function SiteVsAgentPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/knowledge/site-vs-agent/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "転職サイトとエージェントの違い" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          転職サイトとエージェントの違い【使い分け・比較表】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 仕組みの違いと状況別の使い分けを解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          「転職サイトと転職エージェントはどう違うのか」「どちらを使えばいいのか」は、転職活動を始める多くの人が抱く疑問です。両者は仕組みもサポート内容も異なり、向き不向きがあります。違いを理解せずに片方だけを使うと、本来出会えたはずの求人やサポートを逃してしまうこともあります。本記事では、それぞれの仕組み、メリット・デメリット、比較表、スカウト型も含めた状況別の使い分け、併用時の注意点まで、実践的に解説します。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：違いと使い分けの基本</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              最大の違いは、<strong>転職サイトは「自分で探して応募する」、転職エージェントは「担当者が紹介し、選考をサポートする」</strong>という点です。自由度を取るならサイト、サポートと非公開求人を取るならエージェントが向いています。
            </p>
            <p className="text-slate-700 leading-relaxed">
              そして実際には、どちらか一方ではなく併用が最も効率的です。サイトで幅広く情報収集しつつ、エージェントでサポートと非公開求人を得て、スカウト型で受け身の機会も拾う。どれも求職者は無料で使えるため、目的に応じて組み合わせ、機会損失を防ぐのが賢い使い方です。
            </p>
          </div>
        </section>

        {/* 仕組み */}
        <section id="what" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">それぞれの仕組み</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "転職サイト", desc: "掲載された求人を自分で検索し、直接応募する仕組み。応募から選考まで基本は自分で進めます。" },
              { title: "転職エージェント", desc: "担当者が求人を紹介し、書類添削・面接対策・日程調整・年収交渉まで支援する仕組みです。" },
              { title: "スカウト型サービス", desc: "経歴を登録しておくと、企業や担当者から打診が届く受け身の仕組み。市場価値の把握にも役立ちます。" },
            ].map((r, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{r.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 比較表 */}
        <section id="compare" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">比較表で見る違い</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="px-4 py-3 text-left font-bold">観点</th>
                  <th className="px-4 py-3 text-left font-bold">転職サイト</th>
                  <th className="px-4 py-3 text-left font-bold">エージェント</th>
                  <th className="px-4 py-3 text-left font-bold">スカウト型</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-700">{row.aspect}</td>
                    <td className="px-4 py-3 text-slate-600">{row.site}</td>
                    <td className="px-4 py-3 text-slate-600">{row.agent}</td>
                    <td className="px-4 py-3 text-slate-600">{row.scout}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* サイト */}
        <section id="site" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職サイト（求人サイト）の特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-2">メリット</h3>
              <ul className="space-y-2">
                {sitePros.map((p, i) => (
                  <li key={i} className="text-sm text-green-800 leading-relaxed flex gap-2"><span className="shrink-0">○</span><span>{p}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-5">
              <h3 className="font-bold text-red-800 mb-2">デメリット</h3>
              <ul className="space-y-2">
                {siteCons.map((c, i) => (
                  <li key={i} className="text-sm text-red-700 leading-relaxed flex gap-2"><span className="shrink-0">×</span><span>{c}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* エージェント */}
        <section id="agent" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職エージェントの特徴</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-2">メリット</h3>
              <ul className="space-y-2">
                {agentPros.map((p, i) => (
                  <li key={i} className="text-sm text-green-800 leading-relaxed flex gap-2"><span className="shrink-0">○</span><span>{p}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-5">
              <h3 className="font-bold text-red-800 mb-2">デメリット</h3>
              <ul className="space-y-2">
                {agentCons.map((c, i) => (
                  <li key={i} className="text-sm text-red-700 leading-relaxed flex gap-2"><span className="shrink-0">×</span><span>{c}</span></li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            エージェント選びで迷ったら
            <Link href="/knowledge/how-to-choose/" className="text-petrol hover:underline">IT転職エージェントの選び方</Link>
            ・
            <Link href="/compare/agents/" className="text-petrol hover:underline">エージェント比較</Link>
            が参考になります。
          </p>
        </section>

        {/* スカウト */}
        <section id="scout" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スカウト型サービスという第3の選択肢</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            近年は、経歴を登録しておくと企業や担当者から打診が届くスカウト型サービスも一般的になっています。自分から探す転職サイト、紹介を受けるエージェントに対し、スカウト型は「待っていれば機会が来る」第3の選択肢です。サイト・エージェントと併用することで、受け身でも機会を集められ、在職中で活動に時間を割きにくい人にも向いています。
          </p>
          <div className="bg-petrol-soft rounded-lg p-5">
            <p className="text-sm text-petrol-deep leading-relaxed">
              スカウト型は、登録しておくだけで思わぬ企業からの打診が届くため、在職中で忙しい人や、自分の市場価値を測りたい人に適しています。どんな企業から、どんな条件で声がかかるかを見れば、現在の市場での評価が把握できます。サイトやエージェントと組み合わせれば、攻め（自分で探す）と受け（待つ）の両面で機会を最大化できます。
            </p>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            使い方の詳細は
            <Link href="/knowledge/scout/" className="text-petrol hover:underline">スカウトサービスの使い方</Link>
            で解説しています。
          </p>
        </section>

        {/* 使い分け */}
        <section id="usecase" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">状況別の使い分け</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            自分の状況に合わせて、最適な組み合わせを選びましょう。
          </p>
          <div className="space-y-4">
            {useCases.map((u, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{u.title}</h3>
                <p className="text-sm font-medium text-petrol-deep mb-1">おすすめ：{u.rec}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            複数のエージェント併用のコツは
            <Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">エージェントは複数登録すべき？</Link>
            をご覧ください。
          </p>
        </section>

        {/* 併用注意点 */}
        <section id="notes" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">併用するときの注意点</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            サイト・エージェント・スカウトを併用すると機会は広がりますが、管理を怠るとトラブルのもとになります。次の点に注意しましょう。
          </p>
          <div className="space-y-4">
            {cautionNotes.map((n, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{n.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{n.desc}</p>
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
          <h2 className="text-xl font-bold mb-3">まずはIT特化型エージェントに登録しよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            サポートと非公開求人を得つつ、サイトやスカウトと併用するのが効率的な進め方です。
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
              { name: "IT転職エージェントの選び方", href: "/knowledge/how-to-choose/" },
              { name: "エージェントは複数登録すべき？", href: "/knowledge/multiple-agents/" },
              { name: "スカウトサービスの使い方", href: "/knowledge/scout/" },
              { name: "直接応募という選択肢", href: "/knowledge/direct-apply/" },
              { name: "IT転職エージェント比較", href: "/compare/agents/" },
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
