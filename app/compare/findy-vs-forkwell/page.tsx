import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BusySeasonNote from "@/components/BusySeasonNote";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/compare/findy-vs-forkwell/" },
  title: "FindyとForkwellの比較｜どっちがおすすめ？【2026年8月】",
  description:
    "FindyとForkwellをスカウト型サービスの評価軸・スカウトの質・コミュニティ・対象層で比較。GitHub実績で評価されたいか発信の質で評価されたいか、30代40代エンジニアの選び方とスカウトが来ない時の対処を解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：どっちがおすすめか" },
  { id: "basic", label: "基本データ比較表（2026年6月時点）" },
  { id: "axis", label: "項目別比較①：評価軸の違い（GitHub偏差値 vs ポートフォリオ＋コミュニティ）" },
  { id: "scout", label: "項目別比較②：スカウトの質と量" },
  { id: "community", label: "項目別比較③：コミュニティ・学習文化" },
  { id: "area", label: "項目別比較④：求人エリア・対象層" },
  { id: "noscout", label: "スカウトが来ない時の対処" },
  { id: "review", label: "口コミ・評判の傾向" },
  { id: "checklist", label: "向いている人チェックリスト" },
  { id: "heiyo", label: "両方登録のすすめ" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const comparison = [
  { item: "運営会社", a: "ファインディ株式会社（2016年創業）", b: "株式会社grooves" },
  { item: "サービス形態", a: "スカウト型（GitHub連携のスキル偏差値でマッチング）", b: "スカウト型＋求人掲載（Forkwell Jobs）＋ポートフォリオ＋コミュニティ" },
  { item: "評価のものさし", a: "GitHubの活動を解析した「スキル偏差値」", b: "ポートフォリオと技術発信・コミュニティでの活動" },
  { item: "規模感", a: "掲載企業800社以上を厳選（公式・2024年7月時点）", b: "登録者 約59,000〜60,000人（二次情報・時点要確認）" },
  { item: "求人数", a: "非明示（確認不可）", b: "媒体間で数値が割れ確認不可・質重視の方針" },
  { item: "対象", a: "モダン言語（Go/TypeScript/Python/Ruby等）のハイスキル即戦力・Web自社開発志向", b: "中〜上級・Web自社開発志向・発信や学習に積極的な層" },
  { item: "対応エリア", a: "首都圏中心（地方求人は少なめ）", b: "首都圏集中" },
  { item: "料金", a: "求職者は完全無料", b: "求職者は完全無料" },
];

const faqs = [
  { q: "FindyとForkwellの最大の違いは何ですか？", a: "評価のものさしが違います。FindyはGitHubの活動を解析した「スキル偏差値」で実力を可視化し、コードでの実績がそのまま評価につながります。Forkwellはポートフォリオや技術発信、コミュニティ（勉強会200本超）での活動を軸に評価する設計です。GitHubで実力を示したいならFindy、ポートフォリオや発信の質で見てほしいならForkwellが向きます。" },
  { q: "FindyとForkwellはどちらもスカウト型ですが、スカウトの数は多いですか？", a: "Findyは掲載企業を800社以上に厳選（公式・2024年7月時点）しており、GitHub活動が活発なほどスカウトが届きやすい設計です。Forkwellはスカウト文面の質を重視する方針で、量より質の傾向があります。どちらもばら撒き型ではないため、プロフィールとGitHub/ポートフォリオの充実度がスカウト数を大きく左右します。" },
  { q: "スカウトが全く来ないのですが、どうすればよいですか？", a: "FindyはGitHubの公開リポジトリやコミット履歴が評価対象のため、公開リポジトリを整える・READMEや技術選定の意図を残すと改善することがあります。Forkwellはポートフォリオの作り込みと技術発信が効きます。それでも来ない場合は、両サービスとも首都圏中心という地域特性や、扱う技術スタックとのミスマッチが原因のこともあります。記事内の「スカウトが来ない時の対処」をご覧ください。" },
  { q: "地方在住でも使えますか？", a: "使えますが、FindyもForkwellも首都圏中心で地方求人は少なめです。フルリモート求人を狙うか、地方求人を扱う総合型サービスとの併用が現実的です。リモート前提の求人探しは関連記事のリモート向けエージェント比較もあわせてご確認ください。" },
  { q: "30代・40代でも使えますか？年齢で不利になりませんか？", a: "どちらも年齢より技術評価が前面に出るサービスです。Findyは40代でもGitHubが活発であれば年齢より技術で評価されやすく、Forkwellも発信や学習文化に合う人なら年代を問わず機能します。ただしマネジメント専業でコードを書かない方には実力が伝わりにくいため、その場合はハイクラススカウト型の併用が無難です。" },
  { q: "両方登録するメリットはありますか？", a: "あります。評価軸が違うため、FindyでGitHub実績を可視化しつつ、Forkwellでポートフォリオと発信の質を見てもらうと、異なる切り口の企業からスカウトが届きます。どちらも完全無料なので、迷うなら両方登録してスカウトの傾向を比較するのが合理的です。" },
  { q: "Findy・Forkwellと、paizaやLAPRASは何が違いますか？", a: "評価軸が異なります。Findyは『GitHub偏差値』、Forkwellは『ポートフォリオ＋コミュニティ』、LAPRASはGitHubだけでなくQiita・note・X・connpassまで含めたWeb全体の発信をAI解析、paizaはスキルチェック（コーディングテスト）の結果で評価します。GitHub中心ならFindy、Web全体の発信ならLAPRAS、テストで実力を示すならpaiza、という整理です。" },
];

const goodFindy = [
  "GitHubに公開リポジトリやコミット履歴があり、コードで実力を示せる",
  "Go/TypeScript/Python/Rubyなどモダン言語を扱う即戦力エンジニア",
  "Web自社開発企業を志向している",
  "客観的なスキル可視化で自分の市場価値を測りたい",
  "現役でコードを書き続けている30〜40代",
];
const goodForkwell = [
  "ポートフォリオや技術発信で評価されたい",
  "勉強会・コミュニティなど学習文化に共感する",
  "スカウト数より文面の質を重視したい",
  "Web自社開発の中〜上級ポジションを狙う",
  "首都圏で腰を据えて活動できる",
];

export default function FindyVsForkwellPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="FindyとForkwellの比較｜どっちがおすすめか" description="FindyとForkwellをスカウトの評価軸・質・コミュニティ・対象層で比較。30代40代エンジニアの選び方とスカウトが来ない時の対処を解説します。" url="/compare/findy-vs-forkwell/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "Findy vs Forkwell" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">FindyとForkwellを徹底比較｜どっちがおすすめ？</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ GitHub偏差値型 と ポートフォリオ＋コミュニティ型 を比較</p>

        <p className="text-slate-600 leading-relaxed mb-4">「Findy Forkwell 比較」で検索する方の多くは、エンジニア向けスカウトサービスのどちらに登録すべきか、あるいは両方使うべきか迷っています。本記事は30代・40代のITエンジニア向けに、両サービスを「評価軸」「スカウトの質と量」「コミュニティ」「エリア・対象層」で比較し、スカウトが来ない時の対処と口コミ傾向まで整理しました。どちらも求職者は完全無料です。</p>

        <DataNote surveyedAt="2026年6月" sources={["Findy公式（掲載企業数・2024年7月）", "Forkwell公式", "各転職メディアの集計値", "Qiita・みん評等の口コミメディア集計"]} />

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
              <li><strong>・GitHubの実績で評価されたいなら「Findy」</strong>。公開リポジトリやコミット履歴を解析したスキル偏差値で実力を可視化します。</li>
              <li><strong>・ポートフォリオや技術発信の質で見てほしいなら「Forkwell」</strong>。勉強会200本超のコミュニティと学習文化が特徴です。</li>
              <li><strong>・迷うなら両方無料登録</strong>。評価軸が違うため、異なる切り口の企業からスカウトが届きます。どちらも求職者は完全無料です。</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">両サービスとも首都圏中心・Web自社開発志向という共通点があります。理由は次の比較表と項目別解説で詳しく見ていきましょう。</p>
        </section>

        <section id="basic" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ比較表（2026年6月時点）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead><tr className="bg-slate-100"><th className="text-left px-3 py-3 border border-slate-200 font-medium w-32">比較項目</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">Findy</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">Forkwell</th></tr></thead>
              <tbody>{comparison.map((row, i) => (<tr key={i} className="hover:bg-slate-50 align-top"><td className="px-3 py-3 border border-slate-200 font-medium">{row.item}</td><td className="px-3 py-3 border border-slate-200">{row.a}</td><td className="px-3 py-3 border border-slate-200">{row.b}</td></tr>))}</tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 規模・登録者数・求人数は2026年6月時点の公式または転職メディア集計値に基づきます。求人数・登録者数は変動が大きく、多くが二次情報です。Findyの掲載企業数は公式の2024年7月時点の数値です。</p>
        </section>

        <section id="axis" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較①：評価軸の違い（GitHub偏差値 vs ポートフォリオ＋コミュニティ）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">FindyとForkwellの本質的な違いは、「何を見て実力を判断するか」にあります。Findyは登録時にGitHubアカウントを連携し、公開リポジトリの言語・コミット・スター等の活動を解析して「スキル偏差値」を算出します。つまり、日々書いているコードがそのまま評価のものさしになります。普段からGitHubで手を動かしている人ほど有利です。</p>
          <p className="text-slate-600 leading-relaxed mb-4">Forkwellはポートフォリオの作り込みと技術発信、そしてコミュニティ（勉強会200本超）での活動を軸に評価します。GitHubの数値だけでなく、何を考えてどう作ったかという文脈や、技術への向き合い方が伝わりやすい設計です。コードの量より、ポートフォリオで示せる設計力や発信の質で勝負したい人に向きます。</p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-sm text-slate-700">
            <p className="mb-2"><strong>まとめ：</strong>GitHubの活動量・コードで評価されたいならFindy、ポートフォリオと発信・学習姿勢で評価されたいならForkwell。なお、Web全体の発信（Qiita・note・X・connpass）まで含めてAI解析するLAPRASや、コーディングテストで評価する<Link href="/review/paiza/" className="text-petrol hover:underline">paiza</Link>とも評価軸が異なります。<Link href="/compare/scout-agents/" className="text-petrol hover:underline">スカウト型サービスのタイプ別マップ</Link>で全体像を確認すると選びやすくなります。</p>
          </div>
        </section>

        <section id="scout" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較②：スカウトの質と量</h2>
          <p className="text-slate-600 leading-relaxed mb-4">Findyは掲載企業を800社以上に厳選（公式・2024年7月時点）しており、企業の質が一定に保たれている点が評価されています。GitHubの活動が活発なほどスカウトが届きやすく、スキル偏差値が高いと声がかかりやすい構造です。求人数自体は非明示で確認できません。</p>
          <p className="text-slate-600 leading-relaxed mb-4">Forkwellはスカウト文面の質を重視する方針で、量より質の傾向があります。求人数は媒体間で数値が割れており確認できませんが、ばら撒きではなく、ポートフォリオを読んだ上で送られる丁寧なスカウトが評価されています。どちらも「数で押す」タイプではないため、プロフィールの充実度が結果を左右します。</p>
          <p className="text-slate-600 leading-relaxed text-sm">スカウトの仕組みと付き合い方は<Link href="/knowledge/scout/" className="text-petrol hover:underline">スカウトの仕組み解説</Link>も参考になります。</p>
        </section>

        <section id="community" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較③：コミュニティ・学習文化</h2>
          <p className="text-slate-600 leading-relaxed mb-4">Forkwellの強みのひとつがコミュニティです。勉強会200本超という蓄積があり、技術発信や学習に積極的な層が集まる文化があります。スカウトを待つだけでなく、技術コミュニティの一員として情報収集や学びの場として使える点が、単なる転職サービスとの違いです。</p>
          <p className="text-slate-600 leading-relaxed mb-4">Findyはコミュニティ機能というより、GitHub連携による客観的なスキル可視化に振り切ったサービスです。アメリカ式のサポートで自己アピールの壁打ちができるという声もあります。学習文化に身を置きたいならForkwell、可視化された実力で勝負したいならFindyという棲み分けです。</p>
        </section>

        <section id="area" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較④：求人エリア・対象層</h2>
          <p className="text-slate-600 leading-relaxed mb-4">正直にお伝えすると、FindyもForkwellも首都圏中心です。Findyは地方求人が少なめ、Forkwellも首都圏集中の傾向があります。地方在住の場合はフルリモート求人を狙うか、地方求人を扱うサービスとの併用が現実的です。フルリモート前提の求人探しは<Link href="/compare/remote-agents/" className="text-petrol hover:underline">リモート向けエージェント比較</Link>もあわせてご確認ください。</p>
          <p className="text-slate-600 leading-relaxed mb-4">対象層は、Findyがモダン言語のハイスキル即戦力、Forkwellが中〜上級でWeb自社開発志向の発信好きな層です。どちらも実務経験のあるエンジニア向けで、未経験者には不向きです。</p>
        </section>

        <section id="noscout" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スカウトが来ない時の対処</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <ul className="space-y-3 text-sm text-slate-700">
              <li><strong>① 公開リポジトリ・ポートフォリオを整える：</strong>FindyはGitHubの公開活動が評価対象です。privateばかりだと実力が伝わりません。公開できるリポジトリを用意し、READMEや技術選定の意図を残しましょう。Forkwellはポートフォリオの作り込みが効きます。</li>
              <li><strong>② 技術発信を増やす：</strong>Forkwellは発信の質が評価軸です。課題→試行→解決の思考過程が伝わる記事を投稿しておくと、スカウト文面の精度が上がります。</li>
              <li><strong>③ 技術スタックのミスマッチを疑う：</strong>Findyはモダン言語の即戦力に強い設計です。扱う言語が合っていないとスカウトが伸びにくいことがあります。</li>
              <li><strong>④ エリアの問題を切り分ける：</strong>両サービスとも首都圏中心です。地方在住ならフルリモート可の希望を明記し、地方求人を扱うサービスを併用しましょう。</li>
              <li><strong>⑤ 評価軸の違うサービスを併用する：</strong>GitHubに活動が少ない人は、Web全体の発信を見るLAPRASやコーディングテストの<Link href="/review/paiza/" className="text-petrol hover:underline">paiza</Link>の方が刺さることもあります。</li>
            </ul>
          </div>
        </section>

        <section id="review" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミ・評判の傾向</h2>
          <p className="text-slate-600 leading-relaxed mb-4">以下はQiita・みん評・各種転職メディア等の口コミプラットフォームで見られる傾向を要約したものです（原文転載ではありません）。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Findyの口コミ傾向</h3>
              <p className="text-xs font-medium text-green-700 mb-1">良い評判</p>
              <ul className="text-sm text-slate-600 space-y-1 mb-3 list-disc pl-5"><li>GitHub実績で客観的に評価される</li><li>掲載企業の質が高い</li><li>自己アピールの壁打ちができる</li></ul>
              <p className="text-xs font-medium text-rose-700 mb-1">気になる評判</p>
              <ul className="text-sm text-slate-600 space-y-1 list-disc pl-5"><li>GitHub活動が少ないとスカウトが来ない</li><li>地方求人が少ない</li><li>マネジメント専業には不向き</li></ul>
              <p className="text-[11px] text-slate-400 mt-2">出典：Qiita／みん評／各転職メディア集計</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Forkwellの口コミ傾向</h3>
              <p className="text-xs font-medium text-green-700 mb-1">良い評判</p>
              <ul className="text-sm text-slate-600 space-y-1 mb-3 list-disc pl-5"><li>スカウト文面の質が高い</li><li>コミュニティ・勉強会が充実</li><li>発信・学習文化が合う人に快適</li></ul>
              <p className="text-xs font-medium text-rose-700 mb-1">気になる評判</p>
              <ul className="text-sm text-slate-600 space-y-1 list-disc pl-5"><li>求人数が少なめ</li><li>スカウトが来ない場合がある</li><li>首都圏集中</li></ul>
              <p className="text-[11px] text-slate-400 mt-2">出典：Qiita／みん評／各転職メディア集計</p>
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
              <h3 className="font-bold text-green-800 mb-3">Forkwellが向いている人</h3>
              <ul className="space-y-2 text-sm text-green-700">{goodForkwell.map((t, i) => (<li key={i}>✓ {t}</li>))}</ul>
            </div>
          </div>
        </section>

        <section id="heiyo" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">両方登録のすすめ</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <p className="text-sm text-slate-600 leading-relaxed mb-4">FindyとForkwellは評価軸が違うため、競合というより補完関係です。どちらも完全無料なので、両方登録してスカウトの傾向を比較するのが合理的です。</p>
            <div className="space-y-4">
              {[
                { num: "1", title: "Findyでコードを可視化", desc: "GitHubを連携してスキル偏差値を出し、客観的な実力で声をかけてくる企業を見ます。コードを書く現役エンジニアの自己評価にも使えます。" },
                { num: "2", title: "Forkwellで発信とポートフォリオを見せる", desc: "ポートフォリオを作り込み、技術発信を蓄積。コミュニティで情報収集しながら、文脈を読んだ質の高いスカウトを待ちます。" },
                { num: "3", title: "両方のスカウトを比較（推奨）", desc: "切り口の違う企業から届くスカウトを比較し、自分がどの軸で評価されやすいかを把握。スカウトが偏る場合は、評価軸の違うLAPRASやpaizaの併用も検討します。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.num}</span>
                  <div><h3 className="font-bold text-slate-800 mb-1">{item.title}</h3><p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <p className="text-slate-600 leading-relaxed mb-4">経済産業省「IT人材需給に関する調査」（2019年3月公表の試算）では、2030年に最大約79万人のIT人材不足が見込まれています。経験を積んだ30代・40代エンジニアの市場価値は高いものの、FindyとForkwellは「コードや発信で実力を示せる人」に最適化されている点を理解しておくことが大切です。</p>
          <p className="text-slate-600 leading-relaxed mb-4"><strong>30代エンジニアの場合：</strong>現役でコードを書き続けているなら、FindyのGitHub偏差値は強力な武器になります。年齢ではなく技術で評価されるため、転職市場での自分の立ち位置を客観視できます。発信や学習が好きなタイプはForkwellのコミュニティとも相性が良く、両方使って市場価値を測るのがおすすめです。</p>
          <p className="text-slate-600 leading-relaxed mb-4"><strong>40代エンジニアの場合：</strong>40代でもGitHubが活発であれば、Findyは年齢より技術を評価してくれます。一方で、マネジメント中心でコードを書かなくなった方は、これらのサービスでは実力が伝わりにくいのが正直なところです。その場合は、マネジメント経験を評価するハイクラススカウト型（<Link href="/compare/scout-agents/" className="text-petrol hover:underline">スカウト型サービス一覧</Link>のハイクラス型）の併用を検討してください。現役で手を動かす40代には、FindyとForkwellは年齢の壁を越える有効な手段です。</p>
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
          <h2 className="text-xl font-bold mb-3">コードと発信、両方の軸で評価されよう</h2>
          <p className="text-blue-100 text-sm mb-4">FindyでGitHub実績を可視化し、Forkwellでポートフォリオと発信を見せる。どちらも無料の今、両方登録してスカウトの傾向を比較するのが最短です。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめサービスランキングを見る</Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Findyの評判・口コミ", href: "/review/findy/" },
              { name: "Forkwellの評判・口コミ", href: "/review/forkwell/" },
              { name: "Findy vs レバテック 比較", href: "/compare/findy-vs-levtech/" },
              { name: "スカウト型サービス徹底比較", href: "/compare/scout-agents/" },
              { name: "LAPRASの評判・口コミ", href: "/review/lapras/" },
              { name: "paizaの評判・口コミ", href: "/review/paiza/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
