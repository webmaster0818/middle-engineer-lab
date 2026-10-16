import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BusySeasonNote from "@/components/BusySeasonNote";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/compare/forkwell-vs-levtech/" },
  title: "Forkwellとレバテックキャリアの比較｜どっちがおすすめ？【2026年9月】",
  description:
    "Forkwell(ポートフォリオ×コミュニティのスカウト型)とレバテックキャリア(IT特化の紹介型エージェント)を、動き方・評価軸・求人規模・サポートで比較します。自走で評価されたい人と伴走してほしい人の分岐点、30代40代エンジニアの選び方を解説します。",
};

const toc = [
  { id: "conclusion", label: "どちらがおすすめか" },
  { id: "basic", label: "基本データ比較表" },
  { id: "style", label: "項目別比較①：動き方（スカウトを待つ vs 伴走してもらう）" },
  { id: "axis", label: "項目別比較②：評価のされ方" },
  { id: "volume", label: "項目別比較③：求人規模とサポート" },
  { id: "checklist", label: "向いている人チェックリスト" },
  { id: "heiyo", label: "併用のすすめ" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const comparison = [
  { item: "運営会社", a: "株式会社grooves", b: "レバテック株式会社（レバレジーズグループ）" },
  { item: "サービス形態", a: "スカウト型＋求人掲載（Forkwell Jobs）＋ポートフォリオ＋コミュニティ", b: "IT/Web特化の紹介型エージェント（専任アドバイザーが伴走）" },
  { item: "動き方", a: "ポートフォリオを整えてスカウトを待つ・求人に自分で応募", b: "アドバイザーに希望を伝え、求人提案を受ける" },
  { item: "評価のものさし", a: "ポートフォリオと技術発信・コミュニティでの活動", b: "経歴書＋アドバイザーのヒアリング（企業への推薦文で補強）" },
  { item: "規模感", a: "登録者 約59,000〜60,000人（二次情報・時点要確認）。求人数は媒体間で数値が異なり確認不可", b: "公開求人 約5万件超（2026年5〜6月時点・複数転職メディア集計）" },
  { item: "年収の傾向", a: "Web自社開発の中〜上級ポジション中心", b: "公開求人の約8割が年収600万円以上（二次情報）" },
  { item: "サポート", a: "基本は自走。勉強会200本超のコミュニティ・学習文化", b: "書類添削・面接対策・年収交渉まで専任アドバイザーが伴走" },
  { item: "対応エリア", a: "首都圏集中", b: "首都圏中心（拠点都市の求人もあり）" },
  { item: "料金", a: "求職者は完全無料", b: "求職者は完全無料" },
];

const faqs = [
  { q: "Forkwellとレバテックキャリアの最大の違いは何ですか？", a: "「自走型か伴走型か」です。Forkwellはポートフォリオや技術発信を整えてスカウトを待つ・自分で応募するスカウト型サービスで、サポートは基本ありません。レバテックキャリアはIT特化の紹介型エージェントで、専任アドバイザーが求人提案から書類添削・面接対策・年収交渉まで伴走します。同じ「IT特化」でも動き方が正反対です。" },
  { q: "求人数はどちらが多いですか？", a: "公開されている情報の範囲では、レバテックキャリアが公開求人約5万件超（2026年5〜6月時点・複数転職メディア集計）と規模で上回ります。Forkwellは求人数の公式値が確認できず、量より質・マッチング精度を重視する設計です。選択肢の幅を最優先するならレバテック、厳選されたWeb自社開発の中〜上級ポジションを狙うならForkwellという整理になります。" },
  { q: "初めての転職ならどちらが安心ですか？", a: "初めての転職や書類・面接に不安がある方は、伴走型のレバテックキャリアの方が安心材料は多い傾向にあります。職務経歴書の添削や企業別の面接対策、年収交渉の代行はスカウト型にはない支援です。一方、転職活動の進め方が分かっていて自分のペースで動きたい方には、Forkwellの自走スタイルが適しています。" },
  { q: "Forkwellのスカウトが来ない場合はどうすればよいですか？", a: "Forkwellはポートフォリオの作り込みと技術発信が評価の軸であるため、まずポートフォリオの充実が先決です。それでも動きがない場合は、首都圏集中という地域特性や技術スタックのミスマッチが要因のこともあります。求人提案を受けられるレバテックキャリアを並行させると、市場の反応を能動的に確かめられます。" },
  { q: "30代・40代でも使えますか？", a: "どちらも使えます。Forkwellは年齢より発信と学習文化への適合が評価される設計で、年代を問わず機能します。レバテックキャリアはミドル層の実務経験を評価する求人が多く、マネジメント経験を年収交渉の材料にできる点が強みです。コードを書き続けている方はForkwell、経験の言語化やキャリア整理も含めて相談したい方はレバテックが向きます。" },
  { q: "両方登録するメリットはありますか？", a: "あります。Forkwellでポートフォリオ経由のスカウトを受けつつ、レバテックキャリアで求人提案と選考サポートを受けると、「待ちの接点」と「攻めの提案」を同時に持てます。どちらも完全無料のため、併用してから自分に合う動き方に比重を移すのが合理的です。" },
];

const goodA = [
  "ポートフォリオや技術発信で評価されたい",
  "自分のペースで転職活動を進めたい（伴走は不要）",
  "勉強会・コミュニティなど学習文化に共感する",
  "Web自社開発の中〜上級ポジションを狙っている",
  "首都圏で腰を据えて活動できる",
];
const goodB = [
  "書類添削・面接対策・年収交渉まで支援してほしい",
  "求人の選択肢をできるだけ広く見たい（公開約5万件超）",
  "初めての転職・久しぶりの転職で進め方に不安がある",
  "年収600万円以上のレンジを狙いたい",
  "SIer→Web系などキャリアの方向性も相談したい",
];

export default function ForkwellVsLevtechPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="Forkwellとレバテックキャリアの比較｜どっちがおすすめか" description="Forkwell(スカウト型)とレバテックキャリア(紹介型)を動き方・評価軸・求人規模・サポートで比較します。30代40代エンジニアの選び方を解説します。" url="/compare/forkwell-vs-levtech/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "Forkwell vs レバテックキャリア" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Forkwellとレバテックキャリアを比較｜どっちがおすすめ？</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年9月 ｜ ポートフォリオ×コミュニティ型 と IT特化エージェント型 を比較</p>

        <p className="text-slate-600 leading-relaxed mb-4">ForkwellとレバテックキャリアはどちらもITエンジニアに定番のサービスですが、性格は正反対です。Forkwellはポートフォリオと技術発信を軸に「スカウトを待つ・自分で動く」タイプ、レバテックキャリアは専任アドバイザーが「求人提案から交渉まで伴走する」タイプです。本記事は30代・40代のITエンジニア向けに、動き方・評価軸・求人規模・サポートの4軸で両者を比較します。どちらも求職者は完全無料です。</p>

        <DataNote surveyedAt="2026年9月8日" sources={["Forkwell公式", "レバテックキャリア公式", "各転職メディアの集計値（求人数・登録者数は二次情報と明記）"]} />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}><a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a></li>
            ))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">どちらがおすすめか</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6 mb-4">
            <p className="font-bold text-blue-900 mb-3">要点は以下のとおりです。</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li><strong>・自走で評価されたいなら「Forkwell」</strong>。ポートフォリオと技術発信を軸に、厳選されたWeb自社開発企業からのスカウトを狙います。</li>
              <li><strong>・伴走してほしいなら「レバテックキャリア」</strong>。公開求人約5万件超(二次情報)の規模と、書類添削〜年収交渉までの支援が強みです。</li>
              <li><strong>・迷う場合は併用をおすすめします</strong>。「待ちの接点(Forkwell)」と「攻めの提案(レバテック)」を同時に持てます。どちらも完全無料です。</li>
            </ul>
          </div>
        </section>

        <section id="basic" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ比較表</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="p-2 border-b-2 border-slate-300 w-28">項目</th>
                  <th className="p-2 border-b-2 border-slate-300">Forkwell</th>
                  <th className="p-2 border-b-2 border-slate-300">レバテックキャリア</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((c) => (
                  <tr key={c.item} className="border-b border-slate-200">
                    <td className="p-2 font-bold text-slate-600">{c.item}</td>
                    <td className="p-2 text-slate-700">{c.a}</td>
                    <td className="p-2 text-slate-700">{c.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※求人数・登録者数は二次情報を含みます（出典の性質を本文に明記）。最新は各公式サイトでご確認ください。</p>
        </section>

        <section id="style" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較①：動き方（スカウトを待つ vs 伴走してもらう）</h2>
          <p className="text-slate-600 leading-relaxed mb-3">Forkwellの基本的な流れは「ポートフォリオを作り込む→スカウトを待つ／気になる求人に自分で応募する」というものです。企業と直接やり取りするため、条件確認や日程調整も自分で行います。転職活動の主導権を握れる一方、書類や面接について相談できる担当者はいません（コミュニティや勉強会で知見を得る文化はあります）。</p>
          <p className="text-slate-600 leading-relaxed mb-3">レバテックキャリアは専任アドバイザーへの相談から始まります。希望条件のヒアリング→求人提案→書類添削→企業別の面接対策→年収交渉・条件調整まで一貫して支援を受けられます。担当者を介する分、テンポは担当者の質と相性に左右されます。</p>
        </section>

        <section id="axis" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較②：評価のされ方</h2>
          <p className="text-slate-600 leading-relaxed mb-3">Forkwellで企業に見られるのはポートフォリオと技術発信です。何を作ってきたか・どんな技術選定をしたか・コミュニティでどう活動しているかが、そのままスカウトの質につながります。逆に言えば、見せられる成果物がないと機能しにくいサービスです。</p>
          <p className="text-slate-600 leading-relaxed mb-3">レバテックキャリアの評価軸は職務経歴書とヒアリングです。アドバイザーが経歴を企業向けの推薦文にまとめてくれるため、「成果はあるが見せ方が苦手」なエンジニアでも実力が伝わりやすい仕組みです。SIerでの経験をWeb系向けに言語化し直す、といった変換も支援範囲です。</p>
        </section>

        <section id="volume" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較③：求人規模とサポート</h2>
          <p className="text-slate-600 leading-relaxed mb-3">規模はレバテックキャリアが明確に上です（公開求人約5万件超・2026年5〜6月時点の複数転職メディア集計）。公開求人の約8割が年収600万円以上という二次情報もあり、ミドル層の年収レンジと相性が良い構成です。Forkwellは求人数の公式値が確認できず、Web自社開発の中〜上級ポジションを質重視で扱う方針です。</p>
          <p className="text-slate-600 leading-relaxed mb-3">サポートは正反対で、Forkwellは基本自走（＋勉強会200本超のコミュニティ）、レバテックは書類添削から年収交渉まで一貫した伴走型です。「支援の厚さ」を取るか「自分のペース」を取るかが分岐点になります。</p>
        </section>

        <BusySeasonNote />

        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人チェックリスト</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-xl p-5">
              <p className="font-bold text-slate-800 mb-3">Forkwellが向いている人</p>
              <ul className="space-y-2 text-sm text-slate-600">
                {goodA.map((g, i) => (<li key={i}>✓ {g}</li>))}
              </ul>
            </div>
            <div className="border border-slate-200 rounded-xl p-5">
              <p className="font-bold text-slate-800 mb-3">レバテックキャリアが向いている人</p>
              <ul className="space-y-2 text-sm text-slate-600">
                {goodB.map((g, i) => (<li key={i}>✓ {g}</li>))}
              </ul>
            </div>
          </div>
        </section>

        <section id="heiyo" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">併用のすすめ</h2>
          <p className="text-slate-600 leading-relaxed mb-3">両者は競合ではなく補完関係です。Forkwellでポートフォリオを整えてスカウトの反応を見ながら、レバテックキャリアで求人提案と選考支援を受ける——「市場からの評価(受動型)」と「選択肢の拡張(能動型)」を並行できます。どちらも無料であるため、先に両方登録してから比重を決めるのが実務的です。</p>
        </section>

        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <p className="text-slate-600 leading-relaxed mb-3">30代後半〜40代は「実力の証明」と「経験の言語化」の両方が問われる年代です。コードや成果物で実力を示せる方は、Forkwellでは年齢よりも成果物が評価されやすくなります。一方、マネジメントや上流の経験が中心の方は、それを企業向けに言語化してくれるレバテックキャリアの伴走価値が高くなります。年収交渉を代行してもらえる点も、現年収が高いミドル層ほど大きな利点になります。</p>
        </section>

        <section id="faq" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="border border-slate-200 rounded-lg bg-white">
                <summary className="cursor-pointer px-4 py-3 text-sm font-bold text-slate-800">{faq.q}</summary>
                <p className="px-4 pb-4 text-sm leading-7 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">スカウト型とエージェント型を併用する進め方</h2>
          <p className="text-blue-100 text-sm mb-4">Forkwellでポートフォリオ経由のスカウトを受けつつ、レバテックキャリアで提案と交渉支援を受けます。どちらも無料のため、両方の反応を見て比重を決めるのが効率的です。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめサービスランキングを見る</Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Forkwellの評判・口コミ", href: "/review/forkwell/" },
              { name: "レバテックキャリアの評判・口コミ", href: "/review/levtech/" },
              { name: "Findy vs Forkwell 比較", href: "/compare/findy-vs-forkwell/" },
              { name: "Findy vs レバテック 比較", href: "/compare/findy-vs-levtech/" },
              { name: "スカウト型サービス比較", href: "/compare/scout-agents/" },
              { name: "レバテック vs Geekly 比較", href: "/compare/levtech-vs-geekly/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
