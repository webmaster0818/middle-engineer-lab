import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BusySeasonNote from "@/components/BusySeasonNote";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/compare/findy-vs-levtech/" },
  title: "Findyとレバテックの比較｜どっちがおすすめ？【2026年8月】",
  description:
    "Findy（GitHub連携スカウト型）とレバテックキャリア（IT特化エージェント型）を評価軸・年収・サポート・対象層で比較。スカウトで待つか伴走してもらうか、30代40代エンジニアの選び方と併用術を解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：どっちがおすすめか" },
  { id: "naming", label: "用語整理：この記事の「レバテック」とは" },
  { id: "basic", label: "基本データ比較表（2026年6月時点）" },
  { id: "type", label: "項目別比較①：仕組みの違い（スカウト型 vs エージェント型）" },
  { id: "salary", label: "項目別比較②：年収・求人の質" },
  { id: "support", label: "項目別比較③：サポート体制" },
  { id: "target", label: "項目別比較④：対象層・年代適性" },
  { id: "review", label: "口コミ・評判の傾向" },
  { id: "checklist", label: "向いている人チェックリスト" },
  { id: "heiyo", label: "併用ガイド" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const comparison = [
  { item: "サービス名", a: "Findy", b: "レバテックキャリア（正社員転職エージェント）" },
  { item: "運営会社", a: "ファインディ株式会社（2016年創業）", b: "レバテック株式会社（レバレジーズグループ）" },
  { item: "サービス形態", a: "スカウト型（GitHub連携のスキル偏差値でマッチング）", b: "IT/Web特化の紹介型エージェント（専任アドバイザーが伴走）" },
  { item: "動き方", a: "プロフィール・GitHubを整えてスカウトを待つ", b: "アドバイザーに希望を伝え、求人提案を受ける" },
  { item: "求人・規模", a: "掲載企業800社以上を厳選（公式・2024年7月時点）。求人数は非明示", b: "公開求人 約5万件超（2026年5〜6月時点・複数転職メディア集計）" },
  { item: "年収の傾向", a: "モダン言語の即戦力・Web自社開発の高年収帯", b: "公開求人の約8割が年収600万円以上（二次情報）" },
  { item: "サポート", a: "USスタイルの壁打ち等。基本は自走", b: "IT業界に精通した専任アドバイザーが書類添削・面接対策・年収交渉まで伴走" },
  { item: "料金", a: "求職者は完全無料", b: "求職者は完全無料" },
];

const faqs = [
  { q: "この記事の「レバテック」とは具体的に何を指しますか？", a: "本記事の「レバテック」は、正社員転職を支援する『レバテックキャリア』を指します。業務委託案件を扱う『レバテックフリーランス』とは別サービスなので混同にご注意ください。なお、レバテックにはスカウト型の『レバテックダイレクト』もありますが、この記事で比較しているのは専任アドバイザーが伴走する『レバテックキャリア』です。" },
  { q: "Findyとレバテックキャリアの最大の違いは何ですか？", a: "仕組みが違います。FindyはGitHub連携のスキル偏差値で実力を可視化し、企業からのスカウトを待つ『スカウト型』です。レバテックキャリアはIT業界に精通した専任アドバイザーが求人提案から書類添削・面接対策・年収交渉まで伴走する『エージェント型』です。コードで実力を示して待つか、プロに伴走してもらうかが最大の違いです。" },
  { q: "年収アップを狙うならどちらがおすすめですか？", a: "レバテックキャリアは、内定承諾者のうち応募時年収との差が70万円以上だった人が『3人に2人』（2023年1月〜2024年3月実績の公式系数値）と公表し、公開求人の約8割が年収600万円以上（二次情報）です。年収交渉を任せたいならレバテックキャリアが堅実です。FindyはGitHub偏差値で高年収の自社開発企業からスカウトが届く可能性がありますが、交渉は自走が基本です。" },
  { q: "サポートを受けたいのですが、Findyでも相談できますか？", a: "Findyはエージェント型の伴走支援ではなく、USスタイルの自己アピールの壁打ち等が中心で、基本は自走です。書類添削・面接対策・年収交渉までしっかり任せたいならレバテックキャリアが向いています。スカウトの客観評価はFindy、選考の伴走はレバテックキャリア、と役割を分けて併用するのがおすすめです。" },
  { q: "GitHubの活動が少ないのですが、Findyでも使えますか？", a: "FindyはGitHubの公開活動を解析してスキル偏差値を出すため、活動が少ないとスカウトが届きにくい傾向があります。その場合は、求人提案を受けられるレバテックキャリアの方が動きやすいでしょう。公開リポジトリを整えるか、レバテックキャリアを主軸にする選択が現実的です。" },
  { q: "30代・40代のエンジニアにはどちらが向いていますか？", a: "どちらも有効です。現役でコードを書く30〜40代はFindyのGitHub偏差値が武器になり、年齢より技術で評価されます。一方、書類添削や年収交渉をプロに任せたい、現場志向のキャリア相談をしたい場合はレバテックキャリアが向きます。レバテックキャリアは利用者の約80%が20〜30代（二次情報）とされ、30代と特に相性が良い設計です。" },
  { q: "レバテックキャリアとレバテックフリーランスはどう違いますか？", a: "レバテックキャリアは正社員としての転職を支援するエージェントです。レバテックフリーランスは業務委託（フリーランス）案件を紹介するサービスで、対象も契約形態も異なります。本記事はFindy（スカウト型）と『レバテックキャリア（正社員エージェント）』の比較です。フリーランス志向の方は、フリーランス向けサービスの比較記事をご覧ください。" },
];

const goodFindy = [
  "GitHubに公開活動があり、コードで実力を示せる",
  "Go/TypeScript/Python/Rubyなどモダン言語の即戦力",
  "スカウトを待つ受け身のスタイルが合う",
  "客観的なスキル可視化で市場価値を測りたい",
  "Web自社開発企業を志向している",
];
const goodLev = [
  "書類添削・面接対策・年収交渉をプロに任せたい",
  "技術スタックを理解したアドバイザーに相談したい",
  "能動的にIT特化の求人を提案してほしい",
  "GitHub活動が少なく、伴走してもらいたい",
  "現場志向のキャリア相談がしたい30代",
];

export default function FindyVsLevtechPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="Findyとレバテックの比較｜どっちがおすすめか" description="Findy（GitHub連携スカウト型）とレバテックキャリア（IT特化エージェント型）を評価軸・年収・サポート・対象層で比較。30代40代エンジニアの選び方を解説します。" url="/compare/findy-vs-levtech/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "Findy vs レバテックキャリア" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Findyとレバテックを徹底比較｜どっちがおすすめ？</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ GitHub連携スカウト型 と IT特化エージェント型 を比較</p>

        <p className="text-slate-600 leading-relaxed mb-4">「Findy レバテック 比較」で検索する方の多くは、GitHub実績でスカウトを待つべきか、専任アドバイザーに伴走してもらうべきかで迷っています。本記事は30代・40代のITエンジニア向けに、両サービスを「仕組み」「年収・求人の質」「サポート」「対象層」で比較し、口コミ傾向と併用術まで整理しました。どちらも求職者は完全無料です。</p>

        <DataNote surveyedAt="2026年6月" sources={["Findy公式（掲載企業数・2024年7月）", "レバテックキャリア公式ガイド記事", "各転職メディアの集計値", "Qiita・みん評等の口コミメディア集計"]} />

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
              <li><strong>・GitHubの実績でスカウトを待ちたいなら「Findy」</strong>。スキル偏差値で実力を可視化し、企業から直接声がかかります。</li>
              <li><strong>・書類添削や年収交渉をプロに任せたいなら「レバテックキャリア」</strong>。IT特化の専任アドバイザーが伴走します。</li>
              <li><strong>・迷うなら両方登録</strong>。Findyで市場価値を測り、レバテックキャリアで選考を伴走してもらう「受動×能動」が、30代・40代には合理的です。どちらも完全無料です。</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">なお本記事の「レバテック」は正社員転職の『レバテックキャリア』を指します。詳しくは次の用語整理をご覧ください。</p>
        </section>

        <section id="naming" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">用語整理：この記事の「レバテック」とは</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-sm text-slate-700">
            <p className="mb-2"><strong>レバテックには複数のサービスがあり、混同に注意が必要です。</strong></p>
            <ul className="space-y-2 list-disc pl-5">
              <li><strong>レバテックキャリア</strong>＝正社員としての転職を支援するエージェント。<u>本記事で比較しているのはこれ</u>です。</li>
              <li><strong>レバテックフリーランス</strong>＝業務委託（フリーランス）案件を紹介するサービス。契約形態が異なります。</li>
              <li><strong>レバテックダイレクト</strong>＝企業から直接スカウトが届くスカウト型サービス（一般に未掲載求人を含む）。Findyと同じスカウト型ですが、本記事の比較対象はあくまで伴走型の『レバテックキャリア』です。</li>
            </ul>
          </div>
        </section>

        <section id="basic" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ比較表（2026年6月時点）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead><tr className="bg-slate-100"><th className="text-left px-3 py-3 border border-slate-200 font-medium w-32">比較項目</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">Findy</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">レバテックキャリア</th></tr></thead>
              <tbody>{comparison.map((row, i) => (<tr key={i} className="hover:bg-slate-50 align-top"><td className="px-3 py-3 border border-slate-200 font-medium">{row.item}</td><td className="px-3 py-3 border border-slate-200">{row.a}</td><td className="px-3 py-3 border border-slate-200">{row.b}</td></tr>))}</tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 規模・求人数は2026年6月時点の公式または転職メディア集計値に基づきます。求人数は変動が大きく、レバテックの公開求人数は二次情報です。Findyの掲載企業数は公式の2024年7月時点の数値です。</p>
        </section>

        <section id="type" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較①：仕組みの違い（スカウト型 vs エージェント型）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">FindyとレバテックキャリアはともにIT/Webエンジニアを対象としますが、転職の進み方が根本的に違います。Findyはスカウト型です。GitHubアカウントを連携し、公開リポジトリの活動を解析した「スキル偏差値」をもとに、企業から直接スカウトが届きます。プロフィールとコードを整えて待つスタイルで、コードで実力を示せる人ほど有利です。</p>
          <p className="text-slate-600 leading-relaxed mb-4">レバテックキャリアはエージェント型です。IT業界に精通した専任アドバイザーに希望を伝えると、求人を提案してもらえます。書類添削・面接対策・年収交渉まで一貫して伴走してくれるため、自分で動くのが苦手な人や、選考対策をプロに任せたい人に向きます。</p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-sm text-slate-700">
            <p className="mb-2"><strong>まとめ：</strong>コードで実力を示して「待つ」ならFindy、プロに「伴走してもらう」ならレバテックキャリア。スカウト型全体の位置づけは<Link href="/compare/scout-agents/" className="text-petrol hover:underline">スカウト型サービスのタイプ別マップ</Link>を、GitHub軸の比較は<Link href="/compare/findy-vs-forkwell/" className="text-petrol hover:underline">Findy vs Forkwell</Link>も参考にしてください。</p>
          </div>
        </section>

        <section id="salary" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較②：年収・求人の質</h2>
          <p className="text-slate-600 leading-relaxed mb-4">レバテックキャリアは、内定承諾者のうち応募時年収との差が70万円以上だった人が「3人に2人」（2023年1月〜2024年3月実績の公式系数値）と公表しています。公開求人は約5万件超（2026年5〜6月時点・複数転職メディア集計）で、その約8割が年収600万円以上（二次情報）と、ボリュームゾーンが高めです。年収交渉を任せられる点が、堅実に年収を上げたい人に響きます。</p>
          <p className="text-slate-600 leading-relaxed mb-4">FindyはモダンWeb自社開発企業を中心に、GitHub偏差値が高いエンジニアに高年収のスカウトが届く設計です。求人数は非明示で確認できませんが、掲載企業を800社以上に厳選（公式・2024年7月時点）しており、企業の質が一定に保たれています。ただし交渉は自走が基本です。</p>
          <p className="text-slate-600 leading-relaxed text-sm">参考として、レバテック公表の年代別平均年収（2025年）では正社員SEで30代約499万円・40代約618万円、年収1,000万円以上の割合は30代8.01%・40代12.67%とされています。年収帯ごとの相場は<Link href="/compare/salary-ranking/" className="text-petrol hover:underline">年収ランキング</Link>もご確認ください。</p>
        </section>

        <section id="support" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較③：サポート体制</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Findy</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">専任の伴走支援というより、USスタイルの自己アピールの壁打ち等が中心で、基本は自走です。スカウトに自分で対応し、選考を進めていくセルフドリブンな動き方が合う人に向きます。</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア</h3>
              <p className="text-sm text-slate-600 leading-relaxed">IT業界に精通した専任アドバイザーが書類添削・面接対策・年収交渉まで伴走します。LINEで連絡が完結する手軽さや、丁寧な選考対策が評価される一方、初回面談後の連絡が遅い場合があるという声も見られます（Qiita等）。</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">自走できるならFindy、伴走重視ならレバテックキャリア。<Link href="/knowledge/agent-first-meeting/" className="text-petrol hover:underline">エージェントとの初回面談の進め方</Link>も参考にしてください。</p>
        </section>

        <section id="target" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較④：対象層・年代適性</h2>
          <p className="text-slate-600 leading-relaxed mb-4">Findyはモダン言語のハイスキル即戦力・Web自社開発志向の層に最適化されています。GitHubの活動が評価軸のため、コードを書き続けている人ほど効果が出ます。地方求人は少なめで首都圏中心です。</p>
          <p className="text-slate-600 leading-relaxed mb-4">レバテックキャリアは利用者の約80%が20〜30代（二次情報）とされ、IT実務経験のある現場志向のエンジニアと相性が良い設計です。未経験者は紹介されにくいという評判があるため、経験の浅い方は<Link href="/compare/inexperienced/" className="text-petrol hover:underline">未経験向けの選択肢</Link>も検討しましょう。</p>
        </section>

        <section id="review" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミ・評判の傾向</h2>
          <p className="text-slate-600 leading-relaxed mb-4">以下はQiita・みん評・各種転職メディア等の口コミプラットフォームで見られる傾向を要約したものです（原文転載ではありません）。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Findyの口コミ傾向</h3>
              <p className="text-xs font-medium text-green-700 mb-1">良い評判</p>
              <ul className="text-sm text-slate-600 space-y-1 mb-3 list-disc pl-5"><li>GitHub実績で客観評価される</li><li>掲載企業の質が高い</li><li>自己アピールの壁打ちができる</li></ul>
              <p className="text-xs font-medium text-rose-700 mb-1">気になる評判</p>
              <ul className="text-sm text-slate-600 space-y-1 list-disc pl-5"><li>GitHub活動が少ないとスカウトが来ない</li><li>地方求人が少ない</li><li>伴走サポートは薄め</li></ul>
              <p className="text-[11px] text-slate-400 mt-2">出典：Qiita／みん評／各転職メディア集計</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリアの口コミ傾向</h3>
              <p className="text-xs font-medium text-green-700 mb-1">良い評判</p>
              <ul className="text-sm text-slate-600 space-y-1 mb-3 list-disc pl-5"><li>書類添削・面接対策が丁寧</li><li>LINEで連絡が完結して手軽</li><li>高年収求人が多い</li></ul>
              <p className="text-xs font-medium text-rose-700 mb-1">気になる評判</p>
              <ul className="text-sm text-slate-600 space-y-1 list-disc pl-5"><li>未経験者は紹介されにくい</li><li>初回面談後の連絡が遅い場合がある</li><li>首都圏中心</li></ul>
              <p className="text-[11px] text-slate-400 mt-2">出典：OUTSIDEMAGAZINE／Qiita／イーデス等</p>
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
              <h3 className="font-bold text-green-800 mb-3">レバテックキャリアが向いている人</h3>
              <ul className="space-y-2 text-sm text-green-700">{goodLev.map((t, i) => (<li key={i}>✓ {t}</li>))}</ul>
            </div>
          </div>
        </section>

        <section id="heiyo" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">併用ガイド</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "Findyが向くケース", desc: "現役でコードを書き、GitHubに公開活動がある場合。スキル偏差値で市場価値を測り、届いたスカウトの質で立ち位置を確認します。" },
                { num: "2", title: "レバテックキャリアが向くケース", desc: "書類添削や年収交渉をプロに任せたい、GitHub活動が少なく求人提案を受けたい場合。専任アドバイザーに伴走してもらいます。" },
                { num: "3", title: "併用パターン（推奨）", desc: "Findyでスカウトを受けて市場価値を把握しつつ、レバテックキャリアで選考を伴走してもらう。客観評価と伴走支援を組み合わせ、最も有利な条件で意思決定します。" },
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
          <p className="text-slate-600 leading-relaxed mb-4">経済産業省「IT人材需給に関する調査」（2019年3月公表の試算）では、2030年に最大約79万人のIT人材不足が見込まれています。経験を積んだ30代・40代エンジニアの市場価値は高く、Findyとレバテックキャリアはその価値を活かす手段として性格が異なります。</p>
          <p className="text-slate-600 leading-relaxed mb-4"><strong>30代エンジニアの場合：</strong>現役でコードを書いているなら、FindyのGitHub偏差値が強い武器になります。同時に、レバテックキャリアは利用者の約80%が20〜30代（二次情報）で、技術スタックを理解したアドバイザーが現場志向のキャリア相談に乗ってくれます。市場価値の確認をFindy、選考対策をレバテックキャリア、と二段構えにすると視野が広がります。レバテック公表の年代別平均年収（2025年）では30代のSEは約499万円が一つの目安です。</p>
          <p className="text-slate-600 leading-relaxed mb-4"><strong>40代エンジニアの場合：</strong>40代でもGitHubが活発であれば、Findyは年齢より技術で評価してくれます。一方、書類段階で年齢を理由に苦戦することもあるため、推薦状を書いて伴走してくれるレバテックキャリアのアドバイザー支援を併せて確保しておくと安心です。年収1,000万円以上の割合は40代で12.67%（レバテック公表・2025年）とされ、上限を狙える層でもあります。<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職事情</Link>もあわせてご覧ください。</p>
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
          <h2 className="text-xl font-bold mb-3">「スカウト×伴走」の両輪でIT転職を有利に</h2>
          <p className="text-blue-100 text-sm mb-4">Findyで市場価値を測り、レバテックキャリアで選考を伴走してもらう。30代・40代エンジニアの年収アップに合理的なルートです。どちらも無料です。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめサービスランキングを見る</Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Findyの評判・口コミ", href: "/review/findy/" },
              { name: "Findy vs Forkwell 比較", href: "/compare/findy-vs-forkwell/" },
              { name: "レバテックキャリア vs Geekly比較", href: "/compare/levtech-vs-geekly/" },
              { name: "スカウト型サービス徹底比較", href: "/compare/scout-agents/" },
              { name: "レバテック vs doda 比較", href: "/compare/levtech-vs-doda/" },
              { name: "ビズリーチ vs レバテック 比較", href: "/compare/bizreach-vs-levtech/" },
              { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
              { name: "テックゴー（TechGo）の評判・特徴", href: "/review/techgo/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
