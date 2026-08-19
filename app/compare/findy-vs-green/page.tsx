import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BusySeasonNote from "@/components/BusySeasonNote";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/compare/findy-vs-green/" },
  title: "FindyとGreenの比較｜違いとどっちがおすすめ？【2026年8月】",
  description:
    "Findy（GitHub技術力評価型のスカウト）とGreen（国内最大級のIT求人×多職種の直接応募/スカウト）を、サービス形態・評価軸・対象・マッチ方式で比較。技術力で評価されたいか、職種の広さから直接応募したいか、選び方と併用術を出典付きで解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：どっちがおすすめか" },
  { id: "naming", label: "立ち位置整理：FindyとGreenの性格の違い" },
  { id: "basic", label: "基本データ比較表（2026年6月時点）" },
  { id: "type", label: "項目別比較①：サービス形態（スカウト vs 直接応募）" },
  { id: "axis", label: "項目別比較②：評価軸・求人の広さ" },
  { id: "match", label: "項目別比較③：マッチ方式" },
  { id: "target", label: "項目別比較④：対象層・職種の広さ" },
  { id: "review", label: "口コミ・評判の傾向" },
  { id: "checklist", label: "向いている人チェックリスト" },
  { id: "heiyo", label: "併用ガイド" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const comparison = [
  { item: "サービス名", a: "Findy", b: "Green（グリーン）" },
  { item: "サービス形態", a: "スカウト型（GitHub連携のスキル偏差値でマッチング）", b: "IT・IT関連の求人サイト（直接応募＋企業からのスカウト）" },
  { item: "評価軸", a: "GitHub解析による技術力（スキル偏差値）＋想定年収予測", b: "求人条件・職種の広さ（技術力に限定しない）" },
  { item: "対象", a: "経験者エンジニア中心（正社員＋副業）", b: "エンジニアに加え、マーケ・営業・人事・経理・法務など多職種も掲載" },
  { item: "マッチ方式", a: "企業「いいかも」→求職者の応答でスカウト成立の相互マッチ／独自AIマッチング", b: "求職者からの直接応募、または企業からの直接メッセージ・スカウト・「気になる」機能" },
  { item: "掲載・規模", a: "導入企業800社以上（公式・確認時点）。求人数は非明示", b: "IT/IT関連求人が国内最大級（公式）。大手掲載例：サイバーエージェント・PayPay・楽天等" },
  { item: "サポート", a: "無料のキャリア相談あり。基本はプロフィール整備とスカウト対応の自走", b: "エージェント型の伴走ではなく、求職者が主体的に応募・やり取りする求人サイト型" },
  { item: "料金", a: "求職者は無料", b: "求職者は全機能無料" },
];

const faqs = [
  { q: "FindyとGreenの最大の違いは何ですか？", a: "サービスの性格が異なります。FindyはGitHub連携で技術力を「スキル偏差値」として可視化し、企業からのスカウトを待つスカウト型です。GreenはIT・IT関連求人を国内最大級（公式）に掲載する求人サイトで、求職者が自分から直接応募でき、企業からのスカウトや「気になる」機能も使えます。技術力で評価されたいならFindy、職種や条件の広さから直接応募したいならGreen、という住み分けです。" },
  { q: "どちらが技術力で評価されやすいですか？", a: "技術力を軸にするならFindyです。FindyはGitHubの公開活動を解析してスキル偏差値と想定年収予測を出し、独自のAIマッチングで企業とつなぐ設計です。GitHubに公開活動があるエンジニアほど有利になります。Greenは技術力に限定せず求人条件や職種の広さで探す設計のため、評価軸が異なります。" },
  { q: "GitHubの活動が少ないのですが、どちらが向いていますか？", a: "GitHubの公開活動が少ない場合は、技術力を偏差値化するFindyではスカウトが届きにくい傾向があります。その場合は、自分から直接応募でき、求人条件で幅広く探せるGreenの方が動きやすいでしょう。公開リポジトリを整えてからFindyを使う、という順番も選択肢です。" },
  { q: "エンジニア以外の職種も探せますか？", a: "Greenが向いています。Greenはエンジニアだけでなく、マーケティング・営業・人事・経理・法務など多職種の求人も掲載しています。エンジニアから他職種への越境や、IT企業のビジネス職を検討する場合はGreenの選択肢が広がります。FindyはGitHub技術力を軸とするため、経験者エンジニア向けの色が濃いサービスです。" },
  { q: "自分から応募したいのですが、どちらがよいですか？", a: "自分から動きたいならGreenです。Greenは求職者が求人に直接応募でき、企業と直接メッセージでやり取りできます。スカウトや「気になる」機能もあり、能動・受動を両方使えます。Findyはプロフィールとコードを整えてスカウトを待つスタイルが基本で、企業の「いいかも」に応答して成立する相互マッチ方式です。" },
  { q: "副業も探せますか？", a: "Findyは対象に正社員に加えて副業も含み、プログラミング経験者を中心とした設計です。技術力を軸に副業の機会も視野に入れたいならFindyが候補になります。Greenは求人サイトとして幅広い雇用形態・職種を扱いますが、具体的な条件は各求人の掲載内容をご確認ください。" },
  { q: "FindyとGreenは併用できますか？", a: "併用は有効です。Findyで技術力を偏差値化して市場価値を測りつつ、Greenで職種や条件の広い求人に自分から応募する、という組み合わせができます。技術力での評価はFindy、選択肢の広さと直接応募はGreen、と役割を分けると、受動と能動の両輪で選択肢を広げられます。どちらも求職者は無料です。" },
];

const goodFindy = [
  "GitHubに公開活動があり、技術力で評価されたい",
  "スキル偏差値や想定年収予測で市場価値を測りたい",
  "独自AIマッチングでのスカウトを待つスタイルが合う",
  "経験者エンジニアで、正社員に加え副業も視野に入れたい",
  "無料のキャリア相談を受けたい",
];
const goodGreen = [
  "職種や条件の広さから求人を選びたい",
  "エンジニアに限らずマーケ・営業などIT企業のビジネス職も見たい",
  "自分から直接応募したい",
  "大手企業（サイバーエージェント・PayPay・楽天等）の掲載も見たい",
  "全機能無料で企業と直接メッセージをやり取りしたい",
];

export default function FindyVsGreenPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="FindyとGreenの比較｜違いとどっちがおすすめか" description="Findy（GitHub技術力評価型のスカウト）とGreen（国内最大級のIT求人×多職種の直接応募/スカウト）を、サービス形態・評価軸・対象・マッチ方式で比較。選び方を出典付きで解説します。" url="/compare/findy-vs-green/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "Findy vs Green" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">FindyとGreenを比較｜違いとどっちがおすすめ？</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ GitHub技術力評価型のスカウト（Findy） と 国内最大級のIT求人×多職種の直接応募/スカウト（Green） を比較</p>

        <p className="text-slate-600 leading-relaxed mb-4">「Findy Green 比較」「Findy Green 違い」で検索する方の多くは、GitHubの技術力でスカウトを待つべきか、職種や条件の広さから自分で直接応募すべきかで迷っています。本記事は30代・40代のITエンジニア向けに、両サービスを「サービス形態」「評価軸」「マッチ方式」「対象層」で比較し、口コミ傾向と併用術まで整理しました。どちらも求職者は無料です。</p>

        <DataNote surveyedAt="2026年6月" sources={["Findy公式（findy-code.io・導入企業数ほか）", "Green公式（green-japan.com・国内最大級／掲載企業ほか）", "各転職メディアの集計値", "Qiita・みん評等の口コミメディア集計"]} />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}><a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a></li>
            ))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：どっちがおすすめか</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6 mb-4">
            <p className="font-bold text-blue-900 mb-3">先に結論をお伝えします。</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li><strong>・GitHubの技術力で評価されたいなら「Findy」</strong>。スキル偏差値と想定年収予測で実力を可視化し、独自AIマッチングで企業からスカウトが届きます。</li>
              <li><strong>・職種の広さから自分で直接応募したいなら「Green」</strong>。IT・IT関連求人が国内最大級（公式）で、多職種の求人に直接応募でき、スカウトも使えます。</li>
              <li><strong>・迷うなら両方登録</strong>。Findyで技術力の市場価値を測り、Greenで選択肢の広い求人に直接応募する「受動×能動」が、30代・40代には合理的です。どちらも求職者は無料です。</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">両者は「エージェント型の伴走」ではなく、いずれも求職者が主体的に動くタイプです。性格の違いは次の立ち位置整理をご覧ください。</p>
        </section>

        <section id="naming" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">立ち位置整理：FindyとGreenの性格の違い</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-sm text-slate-700">
            <p className="mb-2"><strong>両サービスは、どちらも「専任アドバイザーが伴走するエージェント」とは異なります。</strong>混同しないよう、性格を整理します。</p>
            <ul className="space-y-2 list-disc pl-5">
              <li><strong>Findy</strong>＝GitHub連携でスキル偏差値を出す、技術力評価型のスカウトサービス。プロフィールとコードを整えてスカウトを待つのが基本です。</li>
              <li><strong>Green</strong>＝IT・IT関連求人が国内最大級（公式）の求人サイト。求職者が自分から直接応募でき、企業からのスカウトや「気になる」機能も使えます。</li>
              <li><strong>共通点</strong>＝いずれも求職者は無料で、能動的に動くほど選択肢が広がります。書類添削や年収交渉までを一貫して任せたい場合は、別途エージェント型の併用も検討しましょう。</li>
            </ul>
          </div>
        </section>

        <section id="basic" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ比較表（2026年6月時点）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead><tr className="bg-slate-100"><th className="text-left px-3 py-3 border border-slate-200 font-medium w-32">比較項目</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">Findy</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">Green</th></tr></thead>
              <tbody>{comparison.map((row, i) => (<tr key={i} className="hover:bg-slate-50 align-top"><td className="px-3 py-3 border border-slate-200 font-medium">{row.item}</td><td className="px-3 py-3 border border-slate-200">{row.a}</td><td className="px-3 py-3 border border-slate-200">{row.b}</td></tr>))}</tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 各項目は2026年6月時点の各社公式サイトの記載に基づきます。Findyの導入企業数は公式の記載値（確認時点）、Greenの求人規模は公式が「国内最大級」と定性表現しており、具体的な求人数はトップに明示されていません。掲載企業・機能は変動する場合があります。</p>
        </section>

        <section id="type" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較①：サービス形態（スカウト vs 直接応募）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">FindyとGreenは、転職の進み方が根本的に違います。Findyはスカウト型です。GitHubアカウントを連携し、公開リポジトリの活動を解析した「スキル偏差値」と想定年収予測をもとに、独自のAIマッチングで企業からスカウトが届きます。プロフィールとコードを整えて待つスタイルで、コードで実力を示せる人ほど有利です。</p>
          <p className="text-slate-600 leading-relaxed mb-4">Greenは求人サイト型です。IT・IT関連の求人が国内最大級（公式）に掲載され、求職者は気になる求人に自分から直接応募できます。加えて、企業からの直接メッセージやスカウト、興味を伝える「気になる」機能もあり、能動と受動の両方で動けます。自分のペースで幅広く探したい人に向きます。</p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-sm text-slate-700">
            <p className="mb-2"><strong>まとめ：</strong>技術力を示して「待つ」ならFindy、条件の広さから「自分で応募する」ならGreen。スカウト型全体の位置づけは<Link href="/compare/scout-agents/" className="text-petrol hover:underline">スカウト型サービスのタイプ別マップ</Link>を、GitHub軸の比較は<Link href="/compare/findy-vs-forkwell/" className="text-petrol hover:underline">Findy vs Forkwell</Link>も参考にしてください。</p>
          </div>
        </section>

        <section id="axis" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較②：評価軸・求人の広さ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">FindyはGitHubの公開活動を解析し、技術力を「スキル偏差値」として可視化します。想定年収の予測も提示され、モダンな技術スタックで書き続けているエンジニアほど、その実力が評価につながります。技術力を軸に市場価値を測りたい人に向いた設計です。</p>
          <p className="text-slate-600 leading-relaxed mb-4">Greenは技術力に限定せず、求人の条件や職種の広さから探す設計です。IT・IT関連求人が国内最大級（公式）で、サイバーエージェント・PayPay・楽天など大手の掲載例もあります。エンジニアだけでなくマーケティング・営業・人事・経理・法務といった多職種の求人も掲載されており、選択肢の幅が強みです。</p>
          <p className="text-slate-600 leading-relaxed text-sm">「技術力で一点突破するか、条件と職種の広さで選ぶか」で使い分けるのが基本です。Green側の比較としては<Link href="/compare/green-vs-wantedly/" className="text-petrol hover:underline">Green vs Wantedly</Link>、<Link href="/compare/geekly-vs-green/" className="text-petrol hover:underline">Geekly vs Green</Link>も参考になります。</p>
        </section>

        <section id="match" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較③：マッチ方式</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Findy</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">企業からの「いいかも」に対して求職者が応答することでスカウトが成立する、相互マッチ方式です。独自のAIマッチングがスキル偏差値をもとに企業と求職者をつなぎます。無料のキャリア相談もありますが、選考自体は自分で進めるセルフドリブンな動き方が中心です。</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-2">Green</h3>
              <p className="text-sm text-green-700 leading-relaxed">求職者が求人に直接応募する形が基本で、企業と直接メッセージでやり取りできます。企業からの直接スカウトや、興味を伝える「気になる」機能もあり、双方向のアクションが用意されています。全機能を無料で使える点も特徴です。</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">相互マッチで待つならFindy、直接応募と直接メッセージで動くならGreen。複数サービスの使い分けは<Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">エージェント複数利用のコツ</Link>も参考にしてください。</p>
        </section>

        <section id="target" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較④：対象層・職種の広さ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">Findyはプログラミング経験者を中心としたエンジニア向けで、対象には正社員に加えて副業も含みます。GitHubの活動が評価軸のため、コードを書き続けているエンジニアほど効果が出ます。技術力で勝負したい経験者に最適化されています。</p>
          <p className="text-slate-600 leading-relaxed mb-4">Greenは対象の職種が広く、エンジニアに加えてマーケティング・営業・人事・経理・法務などの求人も掲載しています。エンジニアからIT企業のビジネス職への越境を考える場合や、職種を横断して検討したい場合はGreenの選択肢が広がります。経験の浅い方は<Link href="/compare/inexperienced/" className="text-petrol hover:underline">未経験向けの選択肢</Link>もあわせて検討しましょう。</p>
        </section>

        <section id="review" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミ・評判の傾向</h2>
          <p className="text-slate-600 leading-relaxed mb-4">以下はQiita・みん評・各種転職メディア等の口コミプラットフォームで見られる傾向を要約したものです（原文転載ではありません）。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Findyの口コミ傾向</h3>
              <p className="text-xs font-medium text-green-700 mb-1">良い評判</p>
              <ul className="text-sm text-slate-600 space-y-1 mb-3 list-disc pl-5"><li>GitHub実績で技術力を客観評価される</li><li>スキル偏差値で市場価値がわかる</li><li>掲載企業の質が一定に保たれている</li></ul>
              <p className="text-xs font-medium text-rose-700 mb-1">気になる評判</p>
              <ul className="text-sm text-slate-600 space-y-1 list-disc pl-5"><li>GitHub活動が少ないとスカウトが来にくい</li><li>伴走型のサポートは薄め</li><li>経験者エンジニア向けの色が濃い</li></ul>
              <p className="text-[11px] text-slate-400 mt-2">出典：Qiita／みん評／各転職メディア集計</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Greenの口コミ傾向</h3>
              <p className="text-xs font-medium text-green-700 mb-1">良い評判</p>
              <ul className="text-sm text-slate-600 space-y-1 mb-3 list-disc pl-5"><li>求人・職種の選択肢が広い</li><li>企業と直接メッセージでやり取りできる</li><li>全機能が無料で使える</li></ul>
              <p className="text-xs font-medium text-rose-700 mb-1">気になる評判</p>
              <ul className="text-sm text-slate-600 space-y-1 list-disc pl-5"><li>応募・やり取りは自分で進める必要がある</li><li>年収交渉などの伴走はない</li><li>求人が多く絞り込みに手間がかかる場合がある</li></ul>
              <p className="text-[11px] text-slate-400 mt-2">出典：みん評／Qiita／各転職メディア集計</p>
            </div>
          </div>
        </section>

        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人チェックリスト</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">Findyが向いている人</h3>
              <ul className="space-y-2 text-sm text-petrol-deep">{goodFindy.map((t, i) => (<li key={i}>✓ {t}</li>))}</ul>
            </div>
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">Greenが向いている人</h3>
              <ul className="space-y-2 text-sm text-green-700">{goodGreen.map((t, i) => (<li key={i}>✓ {t}</li>))}</ul>
            </div>
          </div>
        </section>

        <section id="heiyo" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">併用ガイド</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "Findyが向くケース", desc: "現役でコードを書き、GitHubに公開活動がある場合。スキル偏差値で技術力を可視化し、届いたスカウトの質で立ち位置を確認します。" },
                { num: "2", title: "Greenが向くケース", desc: "職種や条件の広さから探したい、自分から直接応募したい場合。国内最大級（公式）のIT・IT関連求人から、大手の掲載例も含めて幅広く候補を集めます。" },
                { num: "3", title: "併用パターン（推奨）", desc: "Findyで技術力の市場価値を測りつつ、Greenで選択肢の広い求人に直接応募する。技術力での評価と選択肢の広さを組み合わせ、受動と能動の両輪で意思決定します。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.num}</span>
                  <div><h3 className="font-bold text-slate-800 mb-1">{item.title}</h3><p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p></div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-4">複数登録の進め方は<Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">エージェント複数利用のコツ</Link>も参考にしてください。</p>
          </div>
        </section>

        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <p className="text-slate-600 leading-relaxed mb-4">経験を積んだ30代・40代エンジニアにとって、FindyとGreenは市場価値を活かす手段として性格が異なります。技術力を武器にするか、職種・条件の広さを武器にするかで、使うべきサービスが変わります。</p>
          <p className="text-slate-600 leading-relaxed mb-4"><strong>30代エンジニアの場合：</strong>現役でコードを書いているなら、FindyのGitHub技術力評価が強い武器になります。同時に、Greenで職種や条件の広い求人に直接応募すれば、選択肢を横に広げられます。市場価値の確認をFindy、幅広い応募をGreen、と二段構えにすると視野が広がります。</p>
          <p className="text-slate-600 leading-relaxed mb-4"><strong>40代エンジニアの場合：</strong>40代でもGitHubが活発であれば、Findyは年齢より技術で評価してくれます。一方、マネジメントや専門領域など職種の幅を活かしたい場合は、多職種を掲載するGreenで直接応募する動きが有効です。<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職事情</Link>もあわせてご覧ください。</p>
        </section>

        <BusySeasonNote />

        <section id="faq" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary>
                <div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">「技術力の評価×直接応募」の両輪でIT転職を有利に</h2>
          <p className="text-blue-100 text-sm mb-4">Findyで技術力の市場価値を測り、Greenで選択肢の広い求人に直接応募する。30代・40代エンジニアが選択肢を広げる合理的なルートです。どちらも求職者は無料です。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめサービスランキングを見る</Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Findyの評判・口コミ", href: "/review/findy/" },
              { name: "Greenの評判・口コミ", href: "/review/green/" },
              { name: "Findy vs レバテック 比較", href: "/compare/findy-vs-levtech/" },
              { name: "Findy vs Forkwell 比較", href: "/compare/findy-vs-forkwell/" },
              { name: "Green vs Wantedly 比較", href: "/compare/green-vs-wantedly/" },
              { name: "スカウト型サービス徹底比較", href: "/compare/scout-agents/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
