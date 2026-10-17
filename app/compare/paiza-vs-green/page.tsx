import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BusySeasonNote from "@/components/BusySeasonNote";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/compare/paiza-vs-green/" },
  title: "paiza転職とGreenの比較｜どっちがおすすめ？",
  description:
    "paiza転職(コーディングテスト型・書類選考免除)とGreen(IT/Web特化の成功報酬型転職サイト)を、応募の仕組み・評価軸・求人規模・使い方で比較します。テストで実力を示したい人とカジュアルに接点を増やしたい人の分岐点、30代40代エンジニアの選び方を解説します。",
};

const toc = [
  { id: "conclusion", label: "どちらがおすすめか" },
  { id: "basic", label: "基本データ比較表" },
  { id: "system", label: "項目別比較①：応募の仕組み（テストランク vs 気になる・スカウト）" },
  { id: "axis", label: "項目別比較②：評価のされ方" },
  { id: "volume", label: "項目別比較③：求人規模と得意領域" },
  { id: "checklist", label: "向いている人チェックリスト" },
  { id: "heiyo", label: "併用のすすめ" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const comparison = [
  { item: "運営会社", a: "paiza株式会社（2013年設立・二次情報）", b: "株式会社アトラエ（東証プライム上場・2003年10月設立／二次情報）" },
  { item: "サービス形態", a: "コーディングテスト型（スキルチェックのランクで応募・書類選考免除）", b: "成功報酬型の転職サイト（ダイレクトリクルーティング）。エージェントの仲介サポートはなし" },
  { item: "評価のものさし", a: "プログラミングスキルチェック（S〜Eランク）", b: "職務経歴プロフィール（企業が直接閲覧しスカウト）" },
  { item: "規模感", a: "求人約5,100件（2026年4月更新・二次情報）／掲載1,600社以上", b: "掲載企業9,000社以上／求人15,000件以上（媒体により30,000件以上とも・幅あり）" },
  { item: "使い方", a: "スキルチェック受験→ランクで応募（Bランク以上で選択肢拡大の傾向）", b: "「気になる」機能・スカウト・企業と直接やり取り" },
  { item: "得意領域", a: "Web系・自社開発・スタートアップ／プログラミング職", b: "IT/Webベンチャー・スタートアップ・メガベンチャー" },
  { item: "対応エリア", a: "全国（首都圏中心）", b: "全国（東京中心）" },
  { item: "料金", a: "求職者完全無料", b: "求職者完全無料（企業側が掲載・成功報酬を負担）" },
];

const faqs = [
  { q: "paiza転職とGreenの最大の違いは何ですか？", a: "実力の示し方が違います。paizaはコーディングテスト（スキルチェック）のS〜Eランクがそのまま評価になり、ランクに応じて書類選考免除で応募できるのが最大の特徴です。Greenはテストがなく、職務経歴プロフィールを企業が直接見てスカウトする成功報酬型の転職サイトです。テストで実力を示すならpaiza、経歴と接点の数を強みにするならGreenが適しています。" },
  { q: "求人数はどちらが多いですか？", a: "公開情報の範囲ではGreenが上回ります（掲載企業9,000社以上・求人15,000件以上、媒体により30,000件以上とも）。paizaは約5,100件（2026年4月更新・二次情報）ですが、応募時にランクで書類選考が免除される分、1件あたりの選考到達率で補う設計です。数を広く見たいならGreen、少数でも選考を確実に進めたいならpaizaという整理になります。" },
  { q: "paizaのスキルチェックはどのくらいのランクが必要ですか？", a: "求人ごとに応募可能ランクが設定されており、一般にBランク以上で選択肢が広がる傾向があります（求人の要求ランクは時期・企業により変わるため、最新はpaiza内の求人詳細でご確認ください）。ランクは何度でも上げられるので、まず現在地を測る目的で受験する使い方も有効です。" },
  { q: "Greenにはエージェントのサポートはありますか？", a: "ありません。Greenは成功報酬型の転職サイトで、書類添削や面接対策・年収交渉の代行といったエージェント機能は提供されず、企業と直接やり取りします。サポートが欲しい場合は、IT特化エージェント（レバテックキャリア・Geekly等）を併用するのが一般的な組み合わせです。" },
  { q: "30代・40代でも使えますか？", a: "どちらも使えます。paizaはテストランクが年齢の先入観を打ち消してくれるため、コードを書き続けているミドル層と相性が良いサービスです。Greenはベンチャー・スタートアップ求人が中心のため、若手向けポジションも多い一方、リードエンジニアやEM級の募集も掲載されます。プロフィールで経験の深さを具体的に書くことがスカウトの質を左右します。" },
  { q: "両方登録するメリットはありますか？", a: "あります。paizaでランクを取得して「実力の客観証明」を持ちつつ、Greenで「気になる」やスカウト経由の接点を広げると、テスト評価とプロフィール評価の両輪で市場にアプローチできます。どちらも完全無料で、評価軸が重ならないため併用の相性は良好です。" },
];

const goodA = [
  "コーディングテストで実力を客観的に示したい",
  "書類選考をスキップして選考を確実に進めたい",
  "学歴・職歴より現在のコーディング力を強みにしたい",
  "Web系・自社開発・スタートアップのプログラミング職を志望している",
  "自分の市場価値(ランク)をまず測ってみたい",
];
const goodB = [
  "求人の選択肢を広く見たい(9,000社以上・二次情報)",
  "テストを受けずにカジュアルに接点を増やしたい",
  "IT/Webベンチャー・メガベンチャーに興味がある",
  "企業と直接やり取りしながらテンポよく進めたい",
  "「気になる」で軽く意思表示しながら様子を見たい",
];

export default function PaizaVsGreenPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="paiza転職とGreenの比較｜どっちがおすすめか" description="paiza(テストランク型)とGreen(成功報酬型転職サイト)を応募の仕組み・評価軸・求人規模で比較します。30代40代エンジニアの選び方を解説します。" url="/compare/paiza-vs-green/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "paiza vs Green" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">paiza転職とGreenを比較｜どっちがおすすめ？</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年9月 ｜ コーディングテスト型 と 成功報酬型転職サイト を比較</p>

        <p className="text-slate-600 leading-relaxed mb-4">paiza転職とGreenはどちらもIT/Web系に強い自走型サービスですが、実力の示し方がまったく違います。paizaはスキルチェック(コーディングテスト)のランクで応募し書類選考が免除される仕組み、Greenはテストなしで職務経歴プロフィールを企業が直接見てスカウトする成功報酬型サイトです。本記事は30代・40代のITエンジニア向けに、応募の仕組み・評価軸・求人規模・得意領域で両者を比較します。どちらも求職者は完全無料です。</p>

        <DataNote surveyedAt="2026年9月8日" sources={["paiza公式", "Green公式", "各転職メディアの集計値（求人数・企業数は二次情報と明記）"]} />

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
              <li><strong>・テストで実力を証明したいなら「paiza転職」</strong>。スキルチェックのランクで応募でき、書類選考免除が最大の強みです。</li>
              <li><strong>・接点の数を増やしたいなら「Green」</strong>。掲載9,000社以上(二次情報)の規模と「気になる」機能で、テストを受けずに気軽に企業との接点を持てます。</li>
              <li><strong>・迷う場合は併用をおすすめします</strong>。テスト評価(paiza)とプロフィール評価(Green)は重ならないため、両輪で市場にアプローチできます。</li>
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
                  <th className="p-2 border-b-2 border-slate-300">paiza転職</th>
                  <th className="p-2 border-b-2 border-slate-300">Green</th>
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
          <p className="text-xs text-slate-500 mt-2">※求人数・企業数は二次情報を含み、媒体により幅があります。最新は各公式サイトでご確認ください。</p>
        </section>

        <section id="system" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較①：応募の仕組み（テストランク vs 気になる・スカウト）</h2>
          <p className="text-slate-600 leading-relaxed mb-3">paizaの入口はスキルチェックです。オンラインのコーディングテストでS〜Eのランクが付き、求人ごとに設定された応募可能ランクを満たせば書類選考免除で応募できます。書類選考の段階を仕組みとして省略できる点が独自の特徴で、学歴・職歴に自信がなくてもコーディング力で評価を得られます。</p>
          <p className="text-slate-600 leading-relaxed mb-3">Greenにはテストがありません。プロフィールを見た企業からのスカウトと、求職者側の「気になる」ボタンで相互に意思表示し、マッチしたら直接やり取りへ進みます。応募前にカジュアルな接点を作れるため、心理的ハードルが低いのが特徴です。</p>
        </section>

        <section id="axis" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較②：評価のされ方</h2>
          <p className="text-slate-600 leading-relaxed mb-3">paizaの評価は「いま解けるか」です。ランクは現在のコーディング力の証明であり、ブランクや経歴のばらつきを補えます。逆にアルゴリズム系のテストが苦手な方や、マネジメント・上流が中心的な活躍領域の方には実力が反映されにくい設計です。</p>
          <p className="text-slate-600 leading-relaxed mb-3">Greenの評価は職務経歴プロフィールそのものです。何をどの規模でやってきたかを具体的に書くほどスカウトの質が上がります。テストがない分、プロフィールの作り込みがそのまま成果に直結します。</p>
        </section>

        <section id="volume" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較③：求人規模と得意領域</h2>
          <p className="text-slate-600 leading-relaxed mb-3">規模はGreenが上です（掲載企業9,000社以上／求人15,000件以上・媒体により30,000件以上とも）。IT/Webベンチャーからメガベンチャーまでの直接採用が中心で、東京圏の選択肢が多い傾向にあります。paizaは約5,100件（2026年4月更新・二次情報）とコンパクトですが、Web系・自社開発・スタートアップのプログラミング職に絞り込んだ構成です。</p>
          <p className="text-slate-600 leading-relaxed mb-3">どちらもエージェントの仲介がない自走型であるため、書類添削や年収交渉の支援が欲しい場合は紹介型エージェントの併用が前提になります。</p>
        </section>

        <BusySeasonNote />

        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人チェックリスト</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-xl p-5">
              <p className="font-bold text-slate-800 mb-3">paiza転職が向いている人</p>
              <ul className="space-y-2 text-sm text-slate-600">
                {goodA.map((g, i) => (<li key={i}>✓ {g}</li>))}
              </ul>
            </div>
            <div className="border border-slate-200 rounded-xl p-5">
              <p className="font-bold text-slate-800 mb-3">Greenが向いている人</p>
              <ul className="space-y-2 text-sm text-slate-600">
                {goodB.map((g, i) => (<li key={i}>✓ {g}</li>))}
              </ul>
            </div>
          </div>
        </section>

        <section id="heiyo" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">併用のすすめ</h2>
          <p className="text-slate-600 leading-relaxed mb-3">paizaのランクは「客観的な実力証明」、Greenの接点は「機会の分母」となります。評価軸が重ならないため、併用しても活動が二重になりません。paizaでBランク以上を取ってからGreenのプロフィールに実績として書く、という掛け合わせも実務的です。どちらも無料であるため、まず両方に登録して反応の差を確認する方法が効率的です。</p>
        </section>

        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <p className="text-slate-600 leading-relaxed mb-3">ミドル層にとって、paizaのテストランクは年齢による先入観を受けにくい評価手段になり得ます。コーディングを続けている40代であれば、ランクが若手と同じ基準で実力を証明する手段になるためです。一方、Greenのベンチャー求人はカルチャーフィットも重視されるため、プロフィールでは技術に加えて「チームをどう動かしたか」を書くとミドルの強みが伝わります。マネジメント専業の方はどちらも実力が反映されにくいため、ハイクラススカウト型の併用が無難です。</p>
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
          <h2 className="text-xl font-bold mb-3">テストによる実力証明と接点の数を両立する</h2>
          <p className="text-blue-100 text-sm mb-4">paizaでランクを取り、Greenで接点を広げます。評価軸が重ならない2つを無料で併用して、反応の差から自分に有効な方法を見つけてください。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめサービスランキングを見る</Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "paizaの評判・口コミ", href: "/review/paiza/" },
              { name: "Greenの評判・口コミ", href: "/review/green/" },
              { name: "paiza vs Findy 比較", href: "/compare/paiza-vs-findy/" },
              { name: "Green vs Wantedly 比較", href: "/compare/green-vs-wantedly/" },
              { name: "Findy vs Green 比較", href: "/compare/findy-vs-green/" },
              { name: "スカウト型サービス比較", href: "/compare/scout-agents/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
