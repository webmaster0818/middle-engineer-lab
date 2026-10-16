import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import BusySeasonNote from "@/components/BusySeasonNote";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/compare/wantedly-vs-findy/" },
  title: "WantedlyとFindyの比較｜どっちがおすすめ？【2026年9月】",
  description:
    "Wantedly(共感軸・カジュアル面談・給与非記載)とFindy(GitHub偏差値のスカウト型)を、評価軸・給与情報の透明性・使い方・対象層で比較します。社風から入りたい人と技術評価で条件から入りたい人の分岐点、30代40代エンジニアの選び方を解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：どちらがおすすめか" },
  { id: "basic", label: "基本データ比較表" },
  { id: "axis", label: "項目別比較①：評価軸（共感・ビジョン vs GitHub偏差値）" },
  { id: "salary", label: "項目別比較②：給与情報の透明性" },
  { id: "usage", label: "項目別比較③：使い方と対象層" },
  { id: "checklist", label: "向いている人チェックリスト" },
  { id: "heiyo", label: "併用のすすめ" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const comparison = [
  { item: "運営会社", a: "ウォンテッドリー株式会社（東証グロース上場）", b: "ファインディ株式会社（2016年創業）" },
  { item: "サービス形態", a: "共感軸の直接応募／ビジネスSNS（カジュアル面談前提）", b: "スカウト型（GitHub連携のスキル偏差値でマッチング）" },
  { item: "評価のものさし", a: "プロフィール・ストーリーへの共感（ビジョン・社風とのフィット）", b: "GitHubの活動を解析した「スキル偏差値」" },
  { item: "給与・条件表示", a: "原則非記載（最大の特徴であり注意点）", b: "求人・スカウトの過程で条件を確認（GitHub実績ベースの高年収帯が中心）" },
  { item: "規模感", a: "ユーザー400万人以上／利用企業4万社以上（二次情報）", b: "掲載企業800社以上を厳選します（公式・2024年7月時点）。求人数は非明示" },
  { item: "得意領域", a: "スタートアップ・ベンチャー、専門職（エンジニア含む）", b: "モダン言語（Go/TypeScript/Python/Ruby等）のWeb自社開発" },
  { item: "対応エリア", a: "全国（東京中心）", b: "首都圏中心（地方求人は少なめ）" },
  { item: "料金", a: "求職者無料", b: "求職者は完全無料" },
];

const faqs = [
  { q: "WantedlyとFindyの最大の違いは何ですか？", a: "入口が「共感」か「技術」かの違いです。Wantedlyは企業のストーリーやビジョンに共感してカジュアル面談から入る設計で、求人に給与が原則記載されません。FindyはGitHubの活動を解析したスキル偏差値で企業とマッチングするスカウト型で、技術力がそのまま入口になります。社風から知りたいならWantedly、技術評価で条件面から詰めたいならFindyです。" },
  { q: "Wantedlyに給与が書いていないのはなぜですか？", a: "Wantedlyは「条件より共感でのマッチング」を掲げるサービス設計のため、求人票に給与・条件を原則記載しない方針です。カジュアル面談や選考の過程で確認することになります。条件を先に知りたい方には最大の注意点で、この点が合わない場合は給与レンジが見えるサービス(Green等)やスカウト型(Findy等)が向きます。" },
  { q: "カジュアル面談だけでも使えますか？", a: "使えます。Wantedlyは「話を聞きに行きたい」ボタンでの気軽な訪問がサービスの中心で、応募前提でない面談が文化として定着しています。転職意欲が固まる前の情報収集フェーズに最も向いたサービスです。ただしカジュアル面談でも事実上の選考が始まっている企業もあるため、志望度が高い企業には準備をして臨むのが安全です。" },
  { q: "Findyのスカウトが来ない場合はどうすればよいですか？", a: "FindyはGitHubの公開活動が評価の源泉です。公開リポジトリを整える・READMEに技術選定の意図を残す・継続的にコミットする、が基本の改善策です。業務がプライベートリポジトリ中心で公開実績を作りにくい方は、共感軸のWantedlyやポートフォリオ軸のForkwellの方が実力を見せやすいことがあります。" },
  { q: "30代・40代でも使えますか？", a: "どちらも使えますが性格が出ます。Findyは年齢よりGitHub実績が前面に出るため、コードを書き続けているミドル層に強い味方です。Wantedlyはスタートアップ・ベンチャー文化が中心で若手系の募集も多いものの、EM・テックリード・第二創業期の即戦力募集も流れており、ミドルは「何を任せられる人か」をプロフィールで明確にするほど機能します。" },
  { q: "両方登録するメリットはありますか？", a: "あります。Findyで技術評価ベースのスカウトを受けつつ、Wantedlyで気になる企業にカジュアル面談へ行くと、「技術の市場価値」と「カルチャーフィット」を並行して確かめられます。共感軸と技術軸は補完関係にあり、どちらも無料のため併用のコストはありません。" },
];

const goodA = [
  "社風・ビジョンへの共感を重視して会社を選びたい",
  "転職意欲が固まる前にカジュアル面談で情報収集したい",
  "スタートアップ・ベンチャーの空気を直接確かめたい",
  "ストーリーや人柄も含めて自分を見てほしい",
  "給与は選考過程で確認できれば良い",
];
const goodB = [
  "GitHubの実績で評価されたい",
  "モダン言語(Go/TypeScript/Python/Ruby等)の即戦力",
  "Web自社開発企業を条件面から詰めたい",
  "客観的なスキル可視化で市場価値を測りたい",
  "首都圏(またはフルリモート)で活動できる",
];

export default function WantedlyVsFindyPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="WantedlyとFindyの比較｜どっちがおすすめか" description="Wantedly(共感軸・給与非記載)とFindy(GitHub偏差値スカウト)を評価軸・透明性・使い方で比較します。30代40代エンジニアの選び方を解説します。" url="/compare/wantedly-vs-findy/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "Wantedly vs Findy" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">WantedlyとFindyを比較｜どっちがおすすめ？</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年9月 ｜ 共感軸のビジネスSNS と GitHub偏差値スカウト を比較</p>

        <p className="text-slate-600 leading-relaxed mb-4">WantedlyとFindyはどちらもエンジニアの利用者が多い自走型サービスですが、マッチングの思想が対照的です。Wantedlyは企業のストーリーへの「共感」から入り、給与は原則非記載でカジュアル面談が中心です。Findyは「GitHub偏差値」という技術評価から入り、実力の可視化がスカウトに直結します。本記事は30代・40代のITエンジニア向けに、評価軸・給与情報の透明性・使い方・対象層で両者を比較します。どちらも求職者は無料です。</p>

        <DataNote surveyedAt="2026年9月8日" sources={["Wantedly公式", "Findy公式（掲載企業数・2024年7月）", "各転職メディアの集計値（ユーザー数等は二次情報と明記）"]} />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}><a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a></li>
            ))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：どちらがおすすめか</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6 mb-4">
            <p className="font-bold text-blue-900 mb-3">要点は以下のとおりです。</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li><strong>・社風・ビジョンから入りたいなら「Wantedly」</strong>。カジュアル面談で応募前に空気を確かめられます。ただし給与は原則非記載です。</li>
              <li><strong>・技術評価から入りたいなら「Findy」</strong>。GitHub実績がスキル偏差値として可視化され、厳選されたWeb自社開発企業とマッチします。</li>
              <li><strong>・迷うなら併用です</strong>。「カルチャーフィット(Wantedly)」と「技術の市場価値(Findy)」を同時に確かめられます。どちらも無料です。</li>
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
                  <th className="p-2 border-b-2 border-slate-300">Wantedly</th>
                  <th className="p-2 border-b-2 border-slate-300">Findy</th>
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
          <p className="text-xs text-slate-500 mt-2">※ユーザー数・企業数は二次情報を含みます。最新は各公式サイトでご確認ください。</p>
        </section>

        <section id="axis" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較①：評価軸（共感・ビジョン vs GitHub偏差値）</h2>
          <p className="text-slate-600 leading-relaxed mb-3">Wantedlyのマッチングは「この会社のやっていることに共感できるか」が起点です。企業側はストーリー記事でビジョンやチームの空気を発信し、求職者は「話を聞きに行きたい」で応募前の接点を持ちます。技術力は面談の中で伝える形になり、プロフィールの人柄・キャリアの文脈が効きます。</p>
          <p className="text-slate-600 leading-relaxed mb-3">Findyの起点はGitHubです。公開リポジトリやコミット履歴からスキル偏差値が算出され、それを見た厳選企業(800社以上・公式2024年7月時点)からスカウトが届きます。共感より先に「コードが語る」設計で、実績が公開されている人ほど有利です。</p>
        </section>

        <section id="salary" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較②：給与情報の透明性</h2>
          <p className="text-slate-600 leading-relaxed mb-3">実務上いちばん差が出るのはここです。Wantedlyは求人票に給与・条件を原則記載しない方針のため、条件は面談・選考の過程で確認することになります。「条件から入らない」文化の裏返しであり、年収を軸に比較検討したいミドル層には回り道に感じられる場面があります。</p>
          <p className="text-slate-600 leading-relaxed mb-3">Findyはスカウトからのやり取りで条件を確認でき、モダン言語の即戦力・Web自社開発という構成上、高年収帯の話が早い段階で出やすい傾向です。現年収からの上げ幅を意識した転職ならFindyの方が話が速く、まず会社を知りたい探索フェーズならWantedlyが向きます。</p>
        </section>

        <section id="usage" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">項目別比較③：使い方と対象層</h2>
          <p className="text-slate-600 leading-relaxed mb-3">Wantedlyはユーザー400万人以上・利用企業4万社以上(二次情報)と分母が大きく、スタートアップからメガベンチャーまで幅広い接点が作れます。転職潜在層の情報収集ツールとしての性格が強く、「いますぐ転職ではないが良い会社があれば」という温度感に合います。</p>
          <p className="text-slate-600 leading-relaxed mb-3">Findyは分母より精度のサービスです。掲載企業を厳選し、GitHub実績のあるエンジニアとマッチングさせるため、対象はモダン言語の即戦力に絞られます。首都圏中心(地方求人は少なめ)という地域特性も、利用前に押さえておきたいポイントです。</p>
        </section>

        <BusySeasonNote />

        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人チェックリスト</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-xl p-5">
              <p className="font-bold text-slate-800 mb-3">Wantedlyが向いている人</p>
              <ul className="space-y-2 text-sm text-slate-600">
                {goodA.map((g, i) => (<li key={i}>✓ {g}</li>))}
              </ul>
            </div>
            <div className="border border-slate-200 rounded-xl p-5">
              <p className="font-bold text-slate-800 mb-3">Findyが向いている人</p>
              <ul className="space-y-2 text-sm text-slate-600">
                {goodB.map((g, i) => (<li key={i}>✓ {g}</li>))}
              </ul>
            </div>
          </div>
        </section>

        <section id="heiyo" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">併用のすすめ</h2>
          <p className="text-slate-600 leading-relaxed mb-3">共感軸と技術軸は排他ではありません。Findyでスキル偏差値を可視化して技術面の市場価値を測りつつ、Wantedlyで気になる会社へカジュアル面談に行けば、条件とカルチャーの両面から意思決定できます。Findyのスカウト企業をWantedlyのストーリーで下調べする、という逆引きの使い方も有効です。</p>
        </section>

        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <p className="text-slate-600 leading-relaxed mb-3">ミドル層の転職は「givenの条件が多い」のが現実です。年収レンジ・リモート可否・裁量——これらを早く確かめたい方には、給与非記載のWantedlyは探索コストが高く感じられるかもしれません。その場合はFindyや条件が見えるサービスを主軸に、Wantedlyは志望度の高い会社の下調べ・カジュアル面談用と割り切るのが効率的です。逆に、次の10年を懸ける会社を文化から選びたい方には、Wantedlyの共感マッチングは他にない価値があります。</p>
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
          <h2 className="text-xl font-bold mb-3">カルチャーと市場価値、両方確かめよう</h2>
          <p className="text-blue-100 text-sm mb-4">FindyでGitHub実績を可視化し、Wantedlyで会社の空気を確かめます。共感軸と技術軸の併用が、後悔しない意思決定への最短ルートです。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめサービスランキングを見る</Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Wantedlyの評判・口コミ", href: "/review/wantedly/" },
              { name: "Findyの評判・口コミ", href: "/review/findy/" },
              { name: "Green vs Wantedly 比較", href: "/compare/green-vs-wantedly/" },
              { name: "Findy vs Forkwell 比較", href: "/compare/findy-vs-forkwell/" },
              { name: "paiza vs Findy 比較", href: "/compare/paiza-vs-findy/" },
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
