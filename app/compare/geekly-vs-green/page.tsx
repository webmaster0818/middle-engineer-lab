import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/compare/geekly-vs-green/" },
  title: "Geekly Green 比較｜エージェント型と直接応募型の違い",
  description:
    "Geekly（ギークリー）とGreen（グリーン）を徹底比較。最大の違いは「専任エージェント型」と「企業へ直接応募する転職サイト型」という仕組みの差。30代40代エンジニア視点で使い分けと併用法を解説します。",
};

const faqs = [
  {
    q: "GeeklyとGreenの最大の違いは？",
    a: "サービスの仕組みそのものが違います。Geeklyは専任アドバイザーが求人紹介・書類添削・年収交渉まで代行する「転職エージェント」です。一方のGreenはエージェントではなく、求職者が自分で求人を探して企業へ直接応募・カジュアル面談を申し込む「成功報酬型の転職サイト（ダイレクトリクルーティング）」で、間に立つアドバイザーは付きません。サポートが欲しいならGeekly、自分のペースで企業と直接やり取りしたいならGreenです。",
  },
  {
    q: "Greenはエージェントですか？",
    a: "いいえ、Greenはエージェントではありません。運営は株式会社アトラエで、Greenは企業と求職者が直接つながるダイレクトリクルーティング型のサービスです。応募・スカウト返信・カジュアル面談の日程調整・年収交渉まで、すべて自分で企業とやり取りします。「担当者に任せたい」という人はGreenの仕組みが合わない可能性があります。",
  },
  {
    q: "年収交渉はどっちがやりやすい？",
    a: "交渉を代行してほしいならGeeklyです。Geeklyは年収アップ率約81%・平均上昇額約76万円（2025年9月時点・二次情報の公表値）を掲げており、アドバイザーがオファー金額の調整を代行します。Greenは自分で企業と交渉する必要がありますが、選考前のカジュアル面談で年収レンジを事前に確認できるため、ミスマッチを避けやすい利点があります。",
  },
  {
    q: "Web系・スタートアップに強いのはどっち？",
    a: "どちらもIT・Web系に強みがありますが、Greenは特にIT/Webベンチャー・スタートアップ領域の掲載企業が多いのが特徴です。Geeklyはゲーム業界を含むIT/Web全般に強く、メガベンチャーや事業会社の非公開求人も扱います。スタートアップで社風重視ならGreen、提案数とサポートを取るならGeeklyという住み分けです。",
  },
  {
    q: "カジュアル面談とは何ですか？",
    a: "正式な選考前に、企業と合否を気にせず話せる場のことです。Greenはこのカジュアル面談を中心に設計されており、求職者が企業に直接申し込めます。チーム体制や開発環境、社風を選考前に確認でき、ミスマッチを防げます。Geeklyでもアドバイザー経由で面談を調整できますが、Greenほど気軽に申し込む文化ではありません。",
  },
  {
    q: "転職活動にかかる期間の目安は？",
    a: "一般的にエージェント型のGeeklyは求人提案から選考までの伴走があるぶん短くなりやすく、求人サイト型のGreenは自分のペースで進めるため長くなりがちです。ただし期間は応募状況や本人の動き方に大きく左右されるため、断定はできません。急ぐならGeekly、じっくり比較したいならGreenが向きます。",
  },
  {
    q: "Greenのデメリットは？",
    a: "口コミプラットフォーム（みん評・axxis・HonNe等）では、(1)エージェントの支援がないぶん自走力が必要、(2)地方求人が首都圏に比べ少ない、(3)応募しても内定に繋がりにくいと感じたという声が見られます。逆に「企業と直接やり取りできてスピーディ」「ベンチャー求人が豊富」という評価もあり、自分で動ける人ほど相性が良い傾向です。",
  },
  {
    q: "両方使っても大丈夫？",
    a: "問題ありません。むしろ併用が効率的です。Geeklyで非公開求人の提案と年収交渉をプロに任せつつ、Greenで気になるベンチャーへ自分から直接アプローチする、という分担が王道です。両方とも求職者は無料で使えます。",
  },
];

const comparison = [
  { item: "サービス形態", a: "転職エージェント（専任アドバイザーが仲介）", b: "成功報酬型転職サイト（企業へ直接応募・スカウト型）" },
  { item: "運営会社", a: "株式会社Geekly（2011年8月設立・渋谷区）", b: "株式会社アトラエ（東証プライム上場）" },
  { item: "アドバイザー", a: "専任が付き求人紹介〜交渉まで代行", b: "なし（自分で企業とやり取り）" },
  { item: "求人数", a: "公開37,000件以上（2026年1月時点・二次集計）/非公開含め46,000件以上（2026年5月時点・二次）", b: "求人15,000件以上（媒体により30,000件以上とも・二次/幅あり）、掲載9,000社以上" },
  { item: "年収アップ実績", a: "年収アップ率約81%・平均上昇額約76万円（2025年9月時点・二次情報の公表値）", b: "公表値なし（自分で交渉）" },
  { item: "得意領域", a: "IT/Web/ゲーム業界特化。提案スピードが強み", b: "IT/Webベンチャー・スタートアップ。カジュアル面談で社風把握" },
  { item: "カジュアル面談", a: "アドバイザー経由で調整", b: "企業へ直接申し込み可能（サービスの中心機能）" },
  { item: "年収交渉", a: "アドバイザーが代行", b: "自分で企業と交渉" },
  { item: "対応エリア", a: "首都圏中心（二次情報）", b: "首都圏中心。地方求人は少なめ（二次情報）" },
  { item: "料金", a: "求職者無料", b: "求職者無料" },
];

const geeklyReviews = [
  { type: "good", text: "レスポンスが早く、選考までスムーズに進んだという声" },
  { type: "good", text: "実務経験者への提案数が多いという評価" },
  { type: "bad", text: "連絡がしつこいと感じた、担当者の質にばらつきがあるという声" },
  { type: "bad", text: "勝手に応募されたとの報告例も一部にある" },
];

const greenReviews = [
  { type: "good", text: "企業と直接やり取りでき、話が速いという声" },
  { type: "good", text: "ベンチャー求人が豊富で、カジュアル面談が好評" },
  { type: "bad", text: "地方求人が少ない、内定に繋がりにくいと感じたという声" },
  { type: "bad", text: "エージェントの支援がないため自分で動く必要がある" },
];

const geeklyFor = [
  "求人紹介から年収交渉まで専任アドバイザーに任せたい人",
  "自分で企業を探す時間が取りにくい多忙な在職エンジニア",
  "ゲーム業界・メガベンチャー・事業会社の非公開求人を見たい人",
  "書類添削・面接対策のサポートを受けたい人",
  "提案スピードを重視し、効率的に転職を進めたい人",
];

const greenFor = [
  "気になる企業へ自分から直接アプローチしたい人",
  "選考前のカジュアル面談で社風・開発環境を確かめたい人",
  "IT/Webスタートアップ・ベンチャーで働きたい人",
  "エージェントに急かされず自分のペースで進めたい人",
  "複数の企業とカジュアルに並行して話したい自走型の人",
];

const relatedArticles = [
  { name: "Geekly（ギークリー）の評判・口コミ", href: "/review/geekly/" },
  { name: "Green（グリーン）の評判・口コミ", href: "/review/green/" },
  { name: "レバテックキャリア vs Geekly比較", href: "/compare/levtech-vs-geekly/" },
  { name: "Geekly vs ワークポート比較", href: "/compare/geekly-vs-workport/" },
  { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
  { name: "30代におすすめエージェント", href: "/compare/30s-agents/" },
  { name: "テックゴー（TechGo）の評判・特徴", href: "/review/techgo/" },
];

const toc = [
  { id: "conclusion", label: "結論：どっちがおすすめか" },
  { id: "basic", label: "基本データ比較表（2026年6月時点）" },
  { id: "type-diff", label: "最大の論点：エージェント型 vs 直接応募型" },
  { id: "detail", label: "項目別の徹底比較" },
  { id: "reviews", label: "口コミ・評判の傾向" },
  { id: "checklist", label: "向いている人チェックリスト" },
  { id: "combine", label: "併用ガイド" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
];

export default function GeeklyVsGreenPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="Geekly Green 比較｜エージェント型と直接応募型の違い" description="GeeklyとGreenを徹底比較。専任エージェント型と企業へ直接応募する転職サイト型という仕組みの違いを軸に、30代40代エンジニア視点で解説します。" url="/compare/geekly-vs-green/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "Geekly vs Green" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Geekly（ギークリー）Green（グリーン）比較｜エージェント型と直接応募型、どっちを選ぶ？</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ 転職エージェント vs 直接応募型転職サイトを比較</p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">「Geekly Green 比較」を調べている人が最初に押さえるべき最大のポイントは、<strong>この2つは同じ土俵の競合ではない</strong>ということです。Geeklyは専任アドバイザーが付く「転職エージェント」ですが、<strong>Greenはエージェントではなく、求職者が企業へ直接応募する成功報酬型の転職サイト（ダイレクトリクルーティング）</strong>です。仕組みが根本的に異なるため、「どちらが優れているか」ではなく「自分の動き方にどちらが合うか」で選ぶのが正解です。</p>
        </section>

        <DataNote surveyedAt="2026年6月" sources={["株式会社Geekly 公式会社概要", "Green（株式会社アトラエ）公開情報", "Qiita Job Change", "みん評", "axxis", "HonNe"]} />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm text-petrol-deep">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="hover:underline">{t.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：どっちがおすすめか</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6 mb-4">
            <p className="text-slate-700 leading-relaxed mb-3"><strong className="text-blue-800">サポートを受けながら効率よく転職したいならGeekly。</strong>求人紹介・書類添削・年収交渉まで専任アドバイザーが代行してくれるため、在職中で時間がないエンジニアでも転職活動を進めやすいのが強みです。</p>
            <p className="text-slate-700 leading-relaxed mb-3"><strong className="text-green-800">気になる企業へ自分から直接アプローチしたいならGreen。</strong>エージェントを挟まず、カジュアル面談で社風や開発環境を確かめてから応募できるため、スタートアップ・ベンチャー志望の自走型エンジニアに向いています。</p>
            <p className="text-slate-700 leading-relaxed"><strong>迷うなら併用が最適解。</strong>Geeklyに交渉と非公開求人を任せつつ、Greenで自分から狙いの企業へ動く——役割が被らないため両方無料で使い分ける価値があります。</p>
          </div>
        </section>

        <section id="basic" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ比較表（2026年6月時点）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead><tr className="bg-slate-100"><th className="text-left px-3 py-3 border border-slate-200 font-medium w-32">比較項目</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">Geekly（エージェント型）</th><th className="text-left px-3 py-3 border border-slate-200 font-medium">Green（直接応募型）</th></tr></thead>
              <tbody>{comparison.map((row, i) => (<tr key={i} className="hover:bg-slate-50 align-top"><td className="px-3 py-3 border border-slate-200 font-medium">{row.item}</td><td className="px-3 py-3 border border-slate-200">{row.a}</td><td className="px-3 py-3 border border-slate-200">{row.b}</td></tr>))}</tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 求人数は時期により変動が大きく、媒体経由の二次集計値を含みます。取得時点を併記しています。最新値は各公式サイトでご確認ください。</p>
        </section>

        <section id="type-diff" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">最大の論点：エージェント型（Geekly）vs 直接応募型（Green）</h2>
          <p className="text-slate-600 leading-relaxed mb-5">「Geekly Green 比較」で最も重要なのは、求人数や実績の数字よりも前に、<strong>サービスの仕組みの違い</strong>を理解することです。ここを取り違えると「思っていたサポートが受けられない」というミスマッチが起こります。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Geekly＝転職エージェント</h3>
              <p className="text-sm text-petrol-deep leading-relaxed">専任アドバイザーが求人を提案し、応募・日程調整・書類添削・面接対策・年収交渉まで代行します。IT/Web/ゲーム業界に特化し、提案スピードが強み。「プロに任せたい」「非公開求人を見たい」人に向く一方、口コミでは連絡頻度の多さを指摘する声もあります。</p>
            </div>
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-2">Green＝直接応募型の転職サイト</h3>
              <p className="text-sm text-green-700 leading-relaxed">運営は株式会社アトラエ。<strong>エージェントは介在せず</strong>、求職者が企業へ直接応募・スカウト返信・カジュアル面談を行います。IT/Webベンチャー・スタートアップに強く、選考前に社風を確かめられるのが魅力。交渉や対策はすべて自分で行う前提です。</p>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="text-sm text-amber-800 leading-relaxed"><strong>注意：</strong>「Greenにも担当者が付いて求人を紹介してくれる」と誤解したまま登録すると、想定したサポートが受けられず戸惑うことがあります。Greenは"自分で動く"サービスである点を理解したうえで使うのが前提です。手厚い仲介を期待するならGeekly側に寄せましょう。</p>
          </div>
        </section>

        <section id="detail" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別の徹底比較</h2>

          <h3 className="text-lg font-bold text-slate-800 mb-2 mt-6">求人数・求人の幅</h3>
          <p className="text-slate-600 leading-relaxed mb-4">Geeklyは公開37,000件以上（2026年1月時点・二次集計）、非公開を含めると46,000件以上（2026年5月時点・二次）とされ、IT/Web/ゲーム領域に厚みがあります。Greenは掲載企業9,000社以上・求人15,000件以上（媒体により30,000件以上との集計もあり・幅あり）で、スタートアップ〜メガベンチャーまでのWeb系事業会社が中心です。数の比較より「自社に合う企業層がいるか」で見るのが実態に近い選び方です。</p>

          <h3 className="text-lg font-bold text-slate-800 mb-2 mt-6">年収・交渉</h3>
          <p className="text-slate-600 leading-relaxed mb-4">Geeklyは年収アップ率約81%・平均上昇額約76万円（2025年9月時点・二次情報の公表値）を掲げ、アドバイザーが交渉を代行します。Greenは公表のアップ実績はなく、年収は自分で交渉します。ただしカジュアル面談で事前に年収レンジを確認できるため、「交渉が苦手だが入社後のギャップは避けたい」人には別の安心材料になります。</p>

          <h3 className="text-lg font-bold text-slate-800 mb-2 mt-6">サポート体制</h3>
          <p className="text-slate-600 leading-relaxed mb-4">ここが両者の決定的な差です。Geeklyは書類添削・面接対策・日程調整まで伴走しますが、Greenにはこうした個別仲介サポートがありません。応募書類の作成も面接準備も自力で行う前提のため、転職に慣れていない人ほどGeeklyの支援が効いてきます。</p>

          <h3 className="text-lg font-bold text-slate-800 mb-2 mt-6">スピード</h3>
          <p className="text-slate-600 leading-relaxed mb-4">Geeklyは提案スピードが強みとされ、アドバイザーが選考を前に進めてくれます。Greenは自分のペースで動けるぶん、本人が積極的に応募・返信すれば速く、放置すれば止まります。「背中を押してほしい」ならGeekly、「自分のリズムを守りたい」ならGreenです。</p>

          <h3 className="text-lg font-bold text-slate-800 mb-2 mt-6">対象層・エリア</h3>
          <p className="text-slate-600 leading-relaxed">どちらも首都圏が中心です。Greenは地方求人が少ないという二次情報があり、地方在住のミドル層は選択肢が限られる可能性があります。広く全国・幅広い職種を見たい場合は、後述の<Link href="/compare/geekly-vs-workport/" className="text-petrol hover:underline">ワークポートとの比較</Link>もあわせて検討すると視野が広がります。</p>
        </section>

        <section id="reviews" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミ・評判の傾向</h2>
          <p className="text-slate-600 leading-relaxed mb-5">Qiita Job Change・みん評・axxis・HonNe等の口コミプラットフォームで見られる傾向を、出典名を挙げて要約します（原文転載はしていません）。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">Geeklyの口コミ傾向</h3>
              <ul className="space-y-2 text-sm">
                {geeklyReviews.map((r, i) => (
                  <li key={i} className={r.type === "good" ? "text-slate-600" : "text-slate-500"}><span className={r.type === "good" ? "text-petrol font-bold" : "text-rose-500 font-bold"}>{r.type === "good" ? "良い: " : "気になる: "}</span>{r.text}</li>
                ))}
              </ul>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">Greenの口コミ傾向</h3>
              <ul className="space-y-2 text-sm">
                {greenReviews.map((r, i) => (
                  <li key={i} className={r.type === "good" ? "text-slate-600" : "text-slate-500"}><span className={r.type === "good" ? "text-green-600 font-bold" : "text-rose-500 font-bold"}>{r.type === "good" ? "良い: " : "気になる: "}</span>{r.text}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">※ 口コミは個人の主観を含むため、傾向の参考として捉えてください。出典: Qiita Job Change・みん評・axxis・HonNe・2b-connect・転職アンテナ等。</p>
        </section>

        <section id="checklist" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人チェックリスト</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">Geeklyが向く人</h3>
              <ul className="space-y-2 text-sm text-petrol-deep">
                {geeklyFor.map((t, i) => (<li key={i}>✓ {t}</li>))}
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">Greenが向く人</h3>
              <ul className="space-y-2 text-sm text-green-700">
                {greenFor.map((t, i) => (<li key={i}>✓ {t}</li>))}
              </ul>
            </div>
          </div>
        </section>

        <section id="combine" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">併用ガイド：Aが向くケース / Bが向くケース / 併用パターン</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "Geekly中心が向くケース", desc: "在職中で時間がなく、求人提案・書類・交渉をプロに任せたい人。非公開のゲーム/メガベンチャー求人を逃したくない人はGeeklyを軸にします。" },
                { num: "2", title: "Green中心が向くケース", desc: "狙いの企業が明確で、カジュアル面談で社風を見てから応募したい自走型の人。スタートアップ志望ならGreenを軸にします。" },
                { num: "3", title: "併用パターン（最も効率的）", desc: "Geeklyに交渉・非公開求人・選考管理を任せつつ、Greenで気になる企業へ自分から直接アプローチ。役割が被らず、求人の重複も少ないため選択肢が一気に広がります。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.num}</span>
                  <div><h3 className="font-bold text-slate-800 mb-1">{item.title}</h3><p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点：このペアをどう使い分けるか</h2>
          <p className="text-slate-600 leading-relaxed mb-4">当サイトの読者である30代・40代のミドルエンジニアにとって、GeeklyとGreenの使い分けには年代特有の論点があります。</p>
          <p className="text-slate-600 leading-relaxed mb-4">まず年収の現実です。レバテック公表の年代別平均年収（2025年）では、正社員SEは30代で約499万円、40代で約618万円。年収1,000万円以上の割合は30代8.01%・40代12.67%とされています。ミドル層は若手より交渉のレンジが大きく、<strong>交渉を代行してくれるGeeklyの価値が相対的に高まります</strong>。「現年収を正しく評価してもらい、適正なオファーを引き出す」局面で専任アドバイザーは効いてきます。</p>
          <p className="text-slate-600 leading-relaxed mb-4">一方で40代になると、求人票だけでは分からない「マネジメント比率」「チームの年齢構成」「裁量の大きさ」が転職満足度を左右します。ここで<strong>Greenのカジュアル面談</strong>が独自の意味を持ちます。選考前に現場と直接話し、入社後のギャップを潰せるのは、失敗のコストが大きいミドル層ほど効果的です。</p>
          <p className="text-slate-600 leading-relaxed mb-4">市場環境も追い風です。経産省「IT人材需給に関する調査」（2019年公表の試算）では、2030年に最大約79万人のIT人材不足が見込まれています。実務経験の厚いミドルエンジニアの需要は中長期で底堅く、経験者向け提案が多いGeeklyと、即戦力を直接探すGreenの双方で評価されやすい立ち位置です。</p>
          <p className="text-slate-600 leading-relaxed">結論として、30代・40代には<strong>「交渉と非公開求人はGeeklyに任せ、社風確認と直接アプローチはGreenで行う」併用</strong>が、年収最大化とミスマッチ回避を両立する現実的な戦略です。年代別の動き方は<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>や<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収相場</Link>もあわせてご覧ください。</p>
        </section>

        <section id="faq" className="mb-10 scroll-mt-20">
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
          <h2 className="text-xl font-bold mb-3">仕組みが違うから、併用に価値がある</h2>
          <p className="text-blue-100 text-sm mb-4">Geeklyのプロサポート×Greenの直接アプローチ。役割が被らない2サービスを無料で使い分けましょう。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedArticles.map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
