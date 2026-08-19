import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/compare/doda-vs-mynavi/" },
  title: "dodaとマイナビITの比較｜IT転職どっちがおすすめ【2026年8月】",
  description:
    "doda ITとマイナビIT AGENTを求人数・年収・サポート・スピード・対象層で徹底比較。総合型と IT特化型の違い、30代40代エンジニアの選び方、口コミ傾向、併用術まで実データで解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：どっちがおすすめか" },
  { id: "basic", label: "基本データ比較表（2026年6月時点）" },
  { id: "kyujin", label: "項目別比較①：求人数・求人の傾向" },
  { id: "salary", label: "項目別比較②：年収アップ実績" },
  { id: "support", label: "項目別比較③：サポート体制" },
  { id: "speed", label: "項目別比較④：スピード・連絡頻度" },
  { id: "target", label: "項目別比較⑤：対象層・年代適性" },
  { id: "review", label: "口コミ・評判の傾向" },
  { id: "checklist", label: "向いている人チェックリスト" },
  { id: "heiyo", label: "併用ガイド" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const comparison = [
  { item: "運営会社", a: "パーソルキャリア株式会社（1989年設立・従業員7,048名）", b: "株式会社マイナビ" },
  { item: "サービス形態", a: "総合型。検索＋エージェント＋スカウトのハイブリッド", b: "IT特化型エージェント（紹介型）" },
  { item: "IT求人数", a: "IT・通信エンジニア求人5万件超（2026年2月時点・二次経由）", b: "総数の公式値は確認不可（断定なし）" },
  { item: "対応エリア", a: "全国", b: "全国（主要都市に拠点・二次）" },
  { item: "得意領域", a: "IT含む全業種を幅広くカバー。好条件求人が多い", b: "20〜30代若手層に強い。書類添削・面接対策が手厚い" },
  { item: "年収・定着実績", a: "転職者の約6割が年収アップ。IT・通信の平均決定年収469万→486万円（2024年度・公表値）", b: "転職後定着率97.5%・年収アップ率73.7%（二次情報・転職メディア集計）" },
  { item: "サポート", a: "2名体制でのサポートになる場合あり。コンテンツが充実", b: "IT業界に詳しい担当による手厚い個別サポート" },
  { item: "料金", a: "完全無料", b: "完全無料" },
];

const faqs = [
  { q: "doda ITとマイナビIT AGENTの最大の違いは何ですか？", a: "dodaは総合型で、検索＋エージェント＋スカウトのハイブリッド型。IT・通信エンジニア求人5万件超（2026年2月時点・二次経由）と求人量が豊富です。マイナビIT AGENTはIT特化型の紹介型エージェントで、20〜30代の若手層に強く、書類添削・面接対策などの個別サポートが手厚いのが特徴です。求人量のdoda、伴走サポートのマイナビという整理ができます。" },
  { q: "求人数が多いのはどちらですか？", a: "公開されている数値ではdodaが多く、IT・通信エンジニア求人5万件超（2026年2月時点・二次経由）です。マイナビIT AGENTは総数の公式値が確認できないため断定はできませんが、IT業界に特化しているため、ITに絞れば質の高い求人が揃っています。数を重視するならdoda、特化した提案を受けたいならマイナビです。" },
  { q: "サポートが手厚いのはどちらですか？", a: "個別サポートの手厚さではマイナビIT AGENTに分があります。IT業界に詳しい担当による書類添削・面接対策が丁寧で、初めての転職でも安心という評判が見られます（Qiita Job Change／OUTSIDEMAGAZINE）。dodaは2名体制でサポートされる場合があり、自己分析ツールなどコンテンツが充実していますが、求人量が多いぶん1人あたりのサポート密度は担当により差があります。" },
  { q: "年収アップを狙うならどちらがおすすめですか？", a: "dodaは運営元パーソルキャリアの『2024年度 決定年収レポート』（2025年5月公表）で、転職者の約6割が年収アップ、IT・通信の平均決定年収が469万円（2023年度）から486万円（2024年度）に上昇したと公表しています。マイナビIT AGENTは年収アップ率73.7%（二次情報・転職メディア集計）とされます。出典の性質が異なるため単純比較はできませんが、いずれも年収アップの実績が示されています。" },
  { q: "連絡が多い・しつこいという口コミは本当ですか？", a: "dodaは求人・連絡が多すぎるという声（freeconsul／HonNe等）、マイナビIT AGENTも連絡が多いという声（axxis等）がそれぞれ見られます。求人提案が活発な裏返しでもあります。連絡手段・頻度の希望を最初に伝えることで配信量を調整できます。" },
  { q: "30代・40代のエンジニアにはどちらが向いていますか？", a: "dodaは全年代対応で求人量が多く、30代のキャリアアップから40代の選択肢確保まで幅広く対応します。マイナビIT AGENTは20〜30代の若手層に強い一方、ハイクラス・地方求人が手薄という指摘があります（axxis等）。40代やハイクラス志向の場合はdodaを軸に据えるのが無難です。詳しくは記事内の「30代・40代の視点」をご覧ください。" },
  { q: "退会や連絡停止は簡単にできますか？", a: "両サービスとも会員ページや担当者への連絡で退会・配信停止が可能です。連絡が多いと感じる場合は、退会する前に連絡頻度や希望条件の見直しを依頼すると、必要な求人だけを受け取れるようになります。" },
  { q: "両方登録するメリットはありますか？", a: "あります。dodaの豊富な求人量で選択肢を広げつつ、マイナビIT AGENTの手厚いサポートで書類・面接の質を高める組み合わせが効果的です。dodaで自分でも検索しながら、マイナビのアドバイザーに伴走してもらうことで、見落としを防ぎつつ選考通過率も高められます。" },
];

const goodDoda = [
  "とにかく多くのIT求人から自分で選びたい",
  "検索・エージェント・スカウトを使い分けたい",
  "年収アップの公表実績を重視したい",
  "ハイクラスや地方求人も視野に入れている",
  "40代でも幅広い選択肢を確保したい",
];
const goodMynavi = [
  "書類添削・面接対策を丁寧に受けたい",
  "IT業界に詳しい担当に伴走してほしい",
  "初めての転職で不安が大きい",
  "20代〜30代でIT内のキャリアアップを目指す",
  "求人量より提案の質を重視したい",
];

export default function DodaVsMynaviPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="dodaとマイナビITの比較｜IT転職はどっちがおすすめ" description="doda ITとマイナビIT AGENTを求人数・年収・サポート・スピード・対象層で徹底比較。30代40代エンジニアの選び方を解説します。" url="/compare/doda-vs-mynavi/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "doda IT vs マイナビIT AGENT" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">dodaとマイナビIT AGENTを徹底比較｜どっちがおすすめ？</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ 総合型ハイブリッド と IT特化型エージェントを比較</p>

        <p className="text-slate-600 leading-relaxed mb-4">「doda マイナビIT 比較」で検索する方は、求人量の総合型を取るか、サポートの手厚いIT特化型を取るかで迷っているはずです。本記事は30代・40代のITエンジニア向けに、両サービスを求人数・年収・サポート・スピード・対象層の5項目で比較し、口コミ傾向と併用術まで実データで整理しました。</p>

        <DataNote surveyedAt="2026年6月" sources={["doda公式・パーソルキャリア決定年収レポート（2025年5月公表）", "マイナビIT AGENT 実績の転職メディア集計", "Qiita Job Change", "OUTSIDEMAGAZINE", "axxis等の口コミメディア集計"]} />

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
              <li><strong>・求人量と選択肢の広さ、ハイクラス・地方求人も狙うなら「doda」</strong>。IT・通信エンジニア求人5万件超（2026年2月時点・二次経由）の総合型です。</li>
              <li><strong>・書類添削・面接対策など手厚いサポートを求めるなら「マイナビIT AGENT」</strong>。20〜30代の若手層に特に強いIT特化型です。</li>
              <li><strong>・迷うなら両方登録</strong>。dodaで求人量を確保し、マイナビで選考の質を高める「量×サポートの質」の組み合わせが効果的です。</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">両社とも完全無料です。理由は次の比較表と項目別解説で詳しく見ていきましょう。</p>
        </section>

        <section id="basic" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ比較表（2026年6月時点）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead><tr className="bg-slate-100"><th className="text-left px-3 py-3 border border-slate-200 font-medium w-32">比較項目</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">doda IT</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">マイナビIT AGENT</th></tr></thead>
              <tbody>{comparison.map((row, i) => (<tr key={i} className="hover:bg-slate-50 align-top"><td className="px-3 py-3 border border-slate-200 font-medium">{row.item}</td><td className="px-3 py-3 border border-slate-200">{row.a}</td><td className="px-3 py-3 border border-slate-200">{row.b}</td></tr>))}</tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ dodaの求人数は2026年2月時点の転職メディア集計（二次経由）です。マイナビは総数の公式値が確認できないため記載していません。年収・定着の数値はdoda＝パーソルキャリア公表値（2025年5月公表）、マイナビ＝転職メディア集計（二次情報）に基づきます。</p>
        </section>

        <section id="kyujin" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較①：求人数・求人の傾向</h2>
          <p className="text-slate-600 leading-relaxed mb-4">dodaは総合型ならではの求人量が強みで、IT・通信エンジニア求人5万件超（2026年2月時点・二次経由）を保有します。検索＋エージェント＋スカウトのハイブリッド型で、自分で求人を探すこともアドバイザーに提案してもらうこともできます。好条件求人が多いという評判があり、ハイクラスや地方の求人まで幅広くカバーします。</p>
          <p className="text-slate-600 leading-relaxed mb-4">マイナビIT AGENTは総数の公式値が確認できないため断定は避けますが、IT特化型として20〜30代の若手層向け求人に強みがあります。Web系・SIer・社内SEなどの求人を、IT業界に詳しい担当が選定して提案する設計です。求人の「量」より「マッチングの精度」で勝負するタイプといえます。</p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-sm text-slate-700">
            <p><strong>まとめ：</strong>選択肢の広さならdoda、特化した提案の精度ならマイナビIT AGENT。ハイクラスや地方求人も視野に入れるなら、求人量の多いdodaを軸に据えるのが安全です。<Link href="/compare/agents/" className="text-petrol hover:underline">10社比較</Link>もあわせてご確認ください。</p>
          </div>
        </section>

        <section id="salary" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較②：年収アップ実績</h2>
          <p className="text-slate-600 leading-relaxed mb-4">dodaは運営元パーソルキャリアの『2024年度 決定年収レポート』（2025年5月公表）で、転職者の約6割が年収アップしたこと、IT・通信の平均決定年収が469万円（2023年度）から486万円（2024年度）へ上昇したことを公表しています。公的なレポートとして年収アップ実績が示されている点は、判断材料としての信頼性が高いといえます。</p>
          <p className="text-slate-600 leading-relaxed mb-4">マイナビIT AGENTは、転職後定着率97.5%・年収アップ率73.7%（いずれも二次情報・転職メディア集計）とされています。定着率の高さは、ミスマッチの少ない丁寧なマッチングの裏付けとも読めます。ただし出典の性質がdodaの公表値とは異なるため、数値の単純比較は避けるのが適切です。</p>
          <p className="text-slate-600 leading-relaxed text-sm">年代別の年収相場は<Link href="/compare/salary-ranking/" className="text-petrol hover:underline">年収ランキング</Link>、交渉の具体策は<Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉のコツ</Link>もあわせてご覧ください。</p>
        </section>

        <section id="support" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較③：サポート体制</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">doda</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">2名体制でサポートされる場合があり、求人紹介とサポートが分業されることがあります。自己分析ツールやコンテンツが充実しており、自分で考えながら進めたい人に向きます。一方でIT専門性がやや低い、アドバイザーの質にばらつきがあるという声も見られます（freeconsul／HonNe等）。</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">マイナビIT AGENT</h3>
              <p className="text-sm text-slate-600 leading-relaxed">IT業界に詳しい担当による手厚い個別サポートが強みです。書類添削・面接対策が丁寧で、初めての転職でも安心という評判が見られます（Qiita Job Change／OUTSIDEMAGAZINE）。伴走型のサポートを重視する人に向きます。</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">手厚い伴走を求めるならマイナビ、自分で進めつつコンテンツも活用したいならdoda。<Link href="/knowledge/agent-first-meeting/" className="text-petrol hover:underline">初回面談の進め方</Link>も参考にしてください。</p>
        </section>

        <section id="speed" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較④：スピード・連絡頻度</h2>
          <p className="text-slate-600 leading-relaxed mb-4">dodaは自分で検索して直接応募できるため、エージェントの提案を待たずに自分のペースで動ける点でスピードを自分でコントロールしやすい設計です。一方で求人・連絡が多すぎるという声があり（freeconsul／HonNe等）、配信量の調整が必要になる場合があります。</p>
          <p className="text-slate-600 leading-relaxed mb-4">マイナビIT AGENTは担当による提案が中心で、丁寧なぶん提案のテンポは担当との連携次第です。連絡が多いという声も見られるため（axxis等）、希望する連絡頻度を最初に伝えておくと、ストレスなく進められます。</p>
        </section>

        <section id="target" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較⑤：対象層・年代適性</h2>
          <p className="text-slate-600 leading-relaxed mb-4">dodaは全年代・全業種をカバーし、ハイクラスや地方求人も含めて選択肢を広く確保できます。求人量を活かして幅広く比較したい層に向きます。</p>
          <p className="text-slate-600 leading-relaxed mb-4">マイナビIT AGENTは20〜30代の若手層に強い一方、ハイクラス・地方求人が手薄、紹介求人数が少ない場合があるという指摘があります（axxis等）。若手で初めての転職、または手厚いサポートを重視する層に最適です。40代やハイクラス志向の場合は、dodaを軸にマイナビをサポート補強として併用するのが現実的です。</p>
        </section>

        <section id="review" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミ・評判の傾向</h2>
          <p className="text-slate-600 leading-relaxed mb-4">以下はQiita Job Change・OUTSIDEMAGAZINE・studio-tale・freeconsul・HonNe・axxis等の口コミプラットフォームで見られる傾向を要約したものです（原文転載ではありません）。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">dodaの口コミ傾向</h3>
              <p className="text-xs font-medium text-green-700 mb-1">良い評判</p>
              <ul className="text-sm text-slate-600 space-y-1 mb-3 list-disc pl-5"><li>求人量が多い</li><li>好条件求人が多い</li><li>2名体制サポートの場合あり</li></ul>
              <p className="text-xs font-medium text-rose-700 mb-1">気になる評判</p>
              <ul className="text-sm text-slate-600 space-y-1 list-disc pl-5"><li>求人・連絡が多すぎる</li><li>アドバイザーの質にばらつき</li><li>IT専門性がやや低いとの声</li></ul>
              <p className="text-[11px] text-slate-400 mt-2">出典：studio-tale／best-w／freeconsul／HonNe等</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">マイナビIT AGENTの口コミ傾向</h3>
              <p className="text-xs font-medium text-green-700 mb-1">良い評判</p>
              <ul className="text-sm text-slate-600 space-y-1 mb-3 list-disc pl-5"><li>サポートが手厚い</li><li>担当がIT業界に詳しい</li><li>初めての転職でも安心</li></ul>
              <p className="text-xs font-medium text-rose-700 mb-1">気になる評判</p>
              <ul className="text-sm text-slate-600 space-y-1 list-disc pl-5"><li>連絡が多い</li><li>紹介求人数が少ない場合</li><li>ハイクラス・地方求人が手薄</li></ul>
              <p className="text-[11px] text-slate-400 mt-2">出典：Qiita Job Change／OUTSIDEMAGAZINE／axxis等</p>
            </div>
          </div>
        </section>

        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人チェックリスト</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">dodaが向いている人</h3>
              <ul className="space-y-2 text-sm text-petrol-deep">{goodDoda.map((t, i) => (<li key={i}>✓ {t}</li>))}</ul>
            </div>
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">マイナビIT AGENTが向いている人</h3>
              <ul className="space-y-2 text-sm text-green-700">{goodMynavi.map((t, i) => (<li key={i}>✓ {t}</li>))}</ul>
            </div>
          </div>
        </section>

        <section id="heiyo" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">併用ガイド</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "dodaが向くケース", desc: "求人量を最大化したい、ハイクラスや地方求人も比較したい、自分でも検索しながら進めたい場合。求人の幅を軸に据えます。" },
                { num: "2", title: "マイナビが向くケース", desc: "書類添削・面接対策を丁寧に受けたい、初めての転職で不安が大きい、20〜30代でIT内のキャリアアップを目指す場合。" },
                { num: "3", title: "併用パターン（推奨）", desc: "dodaで求人量と選択肢を確保しつつ、マイナビIT AGENTのアドバイザーに書類・面接の質を高めてもらう。量とサポートの質を両立できます。" },
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
          <p className="text-slate-600 leading-relaxed mb-4">経済産業省「IT人材需給に関する調査」（2019年3月公表の試算）では、2030年に最大約79万人のIT人材不足が見込まれています。経験のある30代・40代エンジニアには追い風ですが、この2社は年代によって向き不向きがはっきり分かれます。</p>
          <p className="text-slate-600 leading-relaxed mb-4"><strong>30代エンジニアの場合：</strong>30代前半までであれば、マイナビIT AGENTの手厚いサポートが活きます。IT業界に詳しい担当が書類添削・面接対策まで伴走し、定着率97.5%（二次情報）という数字はミスマッチの少なさを示します。一方、年収アップを定量的に重視するなら、IT・通信の平均決定年収が486万円（2024年度・doda公表値）まで上昇しているdodaの求人量も併用すると、相場観を持ちながら交渉できます。</p>
          <p className="text-slate-600 leading-relaxed mb-4"><strong>40代エンジニアの場合：</strong>マイナビIT AGENTは20〜30代の若手層に強く、ハイクラス・地方求人が手薄という指摘があるため（axxis等）、40代は注意が必要です。40代はdodaを主軸に据え、求人の母数とハイクラス・地方求人の選択肢を確保するのが現実的です。マイナビは書類・面接のサポート補強として併用すると、強みだけを取り込めます。<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職事情</Link>もあわせてご覧ください。</p>
          <p className="text-slate-600 leading-relaxed text-sm">年代でサービスの主従を入れ替えるのが、ミドルエンジニアがこの2社を使いこなすコツです。</p>
        </section>

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
          <h2 className="text-xl font-bold mb-3">求人量のdoda×サポートのマイナビ</h2>
          <p className="text-blue-100 text-sm mb-4">dodaで選択肢を広げ、マイナビIT AGENTで選考の質を高める。両方無料で、効率的な転職活動を実現しましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "レバテック vs doda 比較", href: "/compare/levtech-vs-doda/" },
              { name: "レバテック vs マイナビIT 比較", href: "/compare/levtech-vs-mynavi/" },
              { name: "リクルートエージェント vs doda 比較", href: "/compare/recruit-vs-doda/" },
              { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
              { name: "30代におすすめエージェント", href: "/compare/30s-agents/" },
              { name: "マイナビIT AGENTの評判・口コミ", href: "/review/mynavi-it/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
