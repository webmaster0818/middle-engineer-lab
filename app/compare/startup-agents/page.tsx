import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "スタートアップ転職に強いエージェント・サービスおすすめ｜選び方【2026年6月】",
  description:
    "スタートアップ・ベンチャー転職に強い転職サービスを、当サイトに実在するサービスから根拠付きで厳選。直接やり取りのGreen、共感軸のWantedly、GitHub評価のFindy、IT特化のレバテックキャリアまで、30代40代エンジニア向けに選び方とリスクの見極めを整理します。",
};

const toc = [
  { id: "conclusion", label: "結論：スタートアップはどう選ぶか" },
  { id: "point", label: "選定のポイント" },
  { id: "ranking", label: "スタートアップに強いサービス" },
  { id: "risk", label: "スタートアップ転職のリスクと見極め" },
  { id: "combo", label: "併用の考え方" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const services = [
  {
    rank: "直応募",
    name: "Green",
    href: "/review/green/",
    tag: "直接やり取り・ベンチャー",
    reason: "エージェントを介さず企業と直接やり取りする成功報酬型の転職サイト。IT/Webベンチャー・スタートアップ・メガベンチャーを得意領域とし、掲載企業9,000社以上・求人15,000件以上（媒体により幅あり）。「気になる」機能やカジュアル面談で、企業の温度感をダイレクトに把握できる。仲介サポートは付かないため自分で進める前提。",
    fit: "スタートアップと直接カジュアルにやり取りし、自分のペースで進めたい人",
  },
  {
    rank: "共感軸",
    name: "Wantedly",
    href: "/review/wantedly/",
    tag: "カジュアル面談・社風重視",
    reason: "共感軸の直接応募／ビジネスSNS。スタートアップ・ベンチャーに強く、ユーザー400万人以上・利用企業4万社以上（二次情報）。カジュアル面談で社風・ビジョン・事業フェーズを知ってから検討できる。給与・待遇は原則非記載が最大の特徴であり注意点で、年収条件は別途確認が必要。",
    fit: "スタートアップのビジョン・カルチャーに共感して入りたい人",
  },
  {
    rank: "技術評価",
    name: "Findy",
    href: "/review/findy/",
    tag: "GitHubスキル偏差値・自社開発",
    reason: "GitHub連携でスキル偏差値を算出するスカウト型。掲載企業は厳選800社以上（公式・2024年7月時点）で、モダン技術（Go／TypeScript／Python／Ruby等）のWeb自社開発企業が中心。スタートアップ・ベンチャーのモダン開発組織と、コードで評価されてマッチしたい人に向く。",
    fit: "モダン技術の現役で、コードで評価されてスタートアップに行きたい人",
  },
  {
    rank: "網羅",
    name: "レバテックキャリア",
    href: "/review/levtech/",
    tag: "IT/Web全般・高年収",
    reason: "IT・Web系全般を扱う大手の正社員転職エージェント。約5万件超（2026年6月時点・複数転職メディア集計）の求人数で、スタートアップからメガベンチャー、大手まで母数が大きい。書類添削・面接対策・年収交渉のサポートがあり、直接応募型で不足しがちな選考支援を補える。",
    fit: "選考サポートを受けつつ、スタートアップも含め母数広く比較したい人",
  },
];

const faqs = [
  { q: "スタートアップ転職に強いサービスはどれですか？", a: "当サイトに実在するサービスでは、企業と直接やり取りできるGreen、共感軸でカジュアル面談から始められるWantedlyが、スタートアップ・ベンチャーを明確に得意領域としています。モダン技術の開発組織にコードで評価されて入りたいならFindy、選考サポートを受けつつ母数を広げたいならレバテックキャリアを組み合わせると、直接応募と仲介支援の両面からスタートアップ求人を比較できます。" },
  { q: "なぜGreenとWantedlyを上位にしているのですか？", a: "両社とも公式にIT/Webベンチャー・スタートアップを得意領域としており、企業と直接・カジュアルにやり取りできる点がスタートアップ転職と噛み合うためです。Greenは掲載企業9,000社以上・求人15,000件以上（媒体により幅あり）、Wantedlyはユーザー400万人以上・利用企業4万社以上（二次情報）。スタートアップは社風・事業フェーズの見極めが重要で、カジュアル面談前提の両社はその確認に適しています。" },
  { q: "Wantedlyは年収が分からないと聞きました。", a: "はい。Wantedlyは給与・待遇が原則非記載という特徴があり、これは共感軸でまず社風・ビジョンを知ってもらう設計のためです。年収条件はカジュアル面談や選考の中で別途確認する必要があります。年収を最初に把握したい場合は、求人に条件が記載されるGreenや、選考サポートで条件交渉まで支援するレバテックキャリアを併用すると安心です。" },
  { q: "モダン技術の開発組織に行きたいです。", a: "Go／TypeScript／Python／Ruby等のモダン技術でスタートアップの開発組織を狙うなら、GitHub連携でスキル偏差値を算出するFindyが向きます。厳選800社以上（公式・2024年7月時点）のモダン自社開発企業が中心で、コードで評価されてマッチしやすい設計です。GitHubの公開活動が少ない場合はスカウトが届きにくいため、Green等の直接応募と併用してください。" },
  { q: "メガベンチャーも視野に入れています。", a: "Greenやレバテックキャリアはメガベンチャーからスタートアップまで幅広くカバーします。メガベンチャーに特化した比較は当サイトのメガベンチャー向けエージェント比較で整理しています。スタートアップとメガベンチャーは安定性・裁量・年収のバランスが異なるため、両方の求人を見比べて判断するのが現実的です。" },
  { q: "40代でもスタートアップに転職できますか？", a: "スタートアップは即戦力・自走力を重視するため、特定領域の深い専門性やリード・マネジメント経験があれば40代でも可能性があります。Findyは年齢より技術活動が重視されやすく、現役でコードを書くミドルに有利な面があります。Green/Wantedlyで直接やり取りし、事業フェーズと求められる役割が自分の強みと合うかを面談で見極めてください。" },
  { q: "複数登録した方がいいですか？", a: "はい。直接応募のGreen/Wantedly、技術評価のFindy、選考サポートのレバテックキャリアは役割が異なるため、併用で「直接やり取り・コード評価・選考支援」を補完できます。いずれも無料です。同じ企業への重複応募は避け、応募状況を自分で管理しましょう。" },
];

const relatedLinks = [
  { name: "Green（ベンチャー直応募）の評判", href: "/review/green/" },
  { name: "Wantedly（共感軸・カジュアル面談）の評判", href: "/review/wantedly/" },
  { name: "Findy（GitHubスキル偏差値）の評判", href: "/review/findy/" },
  { name: "メガベンチャー向けエージェント比較", href: "/compare/megaventure-agents/" },
  { name: "スタートアップと大企業どちらを選ぶか", href: "/knowledge/startup-vs-enterprise/" },
  { name: "IT転職エージェント比較", href: "/compare/agents/" },
];

export default function StartupAgentsPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="スタートアップ転職に強いエージェント・サービスおすすめ｜選び方" description="スタートアップ・ベンチャー転職に強いサービスを実在のものから根拠付きで厳選し、選び方とリスクの見極めを整理します。" url="/compare/startup-agents/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "スタートアップ転職に強いエージェント" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">スタートアップ転職に強いエージェント・サービスおすすめ｜実在サービスから根拠付きで選ぶ</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ 直接応募×共感軸×技術評価×選考サポートを組み合わせて選ぶ</p>

        <p className="text-slate-600 leading-relaxed mb-4">スタートアップ・ベンチャー転職は、<strong>企業と直接・カジュアルにやり取りできるサービス</strong>を軸に、社風・事業フェーズを見極めるのが鍵です。これにモダン開発組織向けの技術評価型、選考サポート型を組み合わせると、求人の質と母数を両取りできます。本記事は当サイトに実在するサービスの中から、各社の公式・公表情報に基づいてスタートアップと相性の良いものを根拠付きで選定しています。架空のサービスや順位の捏造はしていません。</p>

        <p className="text-slate-600 leading-relaxed mb-4">一口に「スタートアップ」と言っても、シード期の数名規模から、シリーズB・Cで組織化が進んだ企業、上場を視野に入れたレイターステージまで、フェーズによって求められる役割も働き方も大きく異なります。アーリー期は何でも自走できる即戦力が求められ、レイター期は専門性とチームでの推進力が評価されやすい傾向があります。そのため、エージェント選び以前に「自分はどのフェーズで価値を出したいか」を言語化しておくと、提案やカジュアル面談での見極めが格段にしやすくなります。スタートアップは正社員転職の中でも特に情報の非対称性が大きいため、求人票の数字だけで判断せず、直接やり取りで一次情報を取りにいく姿勢が重要です。</p>

        <DataNote surveyedAt="2026年6月" sources={["Green（アトラエ）公式", "Wantedly公式・二次情報", "Findy公式（掲載企業数 2024年7月時点）", "レバテックキャリア公式系ガイド", "口コミの傾向要約"]} />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (<li key={t.id}><a href={`#${t.id}`} className="text-blue-600 hover:underline">{t.label}</a></li>))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：スタートアップはどう選ぶか</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-4">
            <p className="font-bold text-blue-900 mb-3">先に結論をお伝えします。</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li><strong>・軸は直接応募の「Green」「Wantedly」</strong>。企業と直接やり取りし、社風・事業フェーズを見極められる。</li>
              <li><strong>・モダン開発組織は「Findy」</strong>。GitHubのスキル偏差値で、コードで評価されてマッチできる。</li>
              <li><strong>・選考サポートは「レバテックキャリア」</strong>。書類添削・面接対策・年収交渉で直接応募の弱点を補える。</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">いずれも無料です。スタートアップは「合うか」の見極めが最重要のため、まず直接応募で温度感を確かめ、必要に応じて技術評価・選考サポートを足すのが効率的です。</p>
        </section>

        <section id="point" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選定のポイント</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { t: "社風・事業フェーズを確認できるか", d: "スタートアップは合うかの見極めが命。カジュアル面談で文化やフェーズを確かめられるか。" },
              { t: "ベンチャーを得意領域とするか", d: "公式にIT/Webベンチャー・スタートアップを得意領域として掲げているか。Green・Wantedlyが該当。" },
              { t: "選考・条件交渉を補えるか", d: "直接応募は選考対策や年収交渉を自分で担う。必要なら選考サポート型で補えるか。" },
            ].map((c, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2 text-sm">{c.t}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="ranking" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スタートアップに強いサービス（根拠付き）</h2>
          <p className="text-slate-600 leading-relaxed text-sm mb-6">順位は「スタートアップとの相性」を基準に、各社の公式・公表情報に基づいて整理しています。数値はすべて出典・時点付きの公開情報です。</p>
          <div className="space-y-5">
            {services.map((s, i) => (
              <div key={i} className="border border-slate-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white">{s.rank}</span>
                  <Link href={s.href} className="text-lg font-bold text-blue-700 hover:underline">{s.name}</Link>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">{s.tag}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">{s.reason}</p>
                <p className="text-sm text-slate-700"><span className="font-bold">向いている人：</span>{s.fit}</p>
                <Link href={s.href} className="inline-block mt-3 text-sm font-medium text-blue-600 hover:underline">{s.name}の詳細レビューを見る →</Link>
              </div>
            ))}
          </div>
        </section>

        <section id="risk" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スタートアップ転職のリスクと見極め</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 text-sm text-slate-700">
            <p className="mb-2">スタートアップは裁量・成長機会が大きい一方、事業フェーズによっては不安定さもあります。30代・40代は次の点を面談で確認してください。</p>
            <ul className="space-y-1.5 list-disc pl-5">
              <li><strong>事業フェーズと資金状況：</strong>どのラウンドか、ランウェイ（資金の持ち期間）はどうか。Wantedly/Greenのカジュアル面談で確認する。</li>
              <li><strong>求められる役割と裁量：</strong>即戦力・自走前提が多い。自分の強みと求められる役割が一致するか。</li>
              <li><strong>年収・待遇：</strong>Wantedlyは給与非記載のため、年収・ストックオプションの条件は必ず別途確認する。</li>
            </ul>
            <p className="mt-3">「スタートアップ＝善」と単純化せず、安定・年収・裁量のどれを優先するかで判断するのが大切です。考え方は<Link href="/knowledge/startup-vs-enterprise/" className="text-blue-600 hover:underline">スタートアップと大企業どちらを選ぶか</Link>で整理しています。</p>
          </div>
        </section>

        <section id="combo" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">併用の考え方</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "Green／Wantedlyで温度感を確かめる", desc: "直接・カジュアルにやり取りし、社風・事業フェーズ・求められる役割を見極める。" },
                { num: "2", title: "モダン開発組織はFindyを足す", desc: "GitHub活動があるなら、コードで評価されてモダンな自社開発スタートアップとマッチする。" },
                { num: "3", title: "選考・条件交渉はレバテックキャリア", desc: "書類添削・面接対策・年収交渉で、直接応募型では不足しがちな選考支援を補う。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{item.num}</span>
                  <div><h3 className="font-bold text-slate-800 mb-1">{item.title}</h3><p className="text-sm text-slate-600">{item.desc}</p></div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-4">メガベンチャーも視野に入れるなら<Link href="/compare/megaventure-agents/" className="text-blue-600 hover:underline">メガベンチャー向けエージェント比較</Link>もご覧ください。</p>
          </div>
        </section>

        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">スタートアップ転職は、20代の「成長機会重視」とは異なり、30代・40代では「これまでの専門性・リード経験をどう事業に貢献させるか」が問われます。即戦力・自走が前提の環境が多いため、自分の強みと求められる役割の一致を、カジュアル面談でしっかり確認することが成功の鍵です。</p>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm"><strong>30代の場合：</strong>裁量と成長機会を取りに行ける年代です。Green/Wantedlyで温度感を確かめ、モダン技術ならFindyでコード評価を受けるのが効果的です。年収はWantedlyだと見えにくいため、Greenや選考サポート型で条件を確認しましょう。</p>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm"><strong>40代の場合：</strong>深い専門性・マネジメント経験を武器にできますが、事業の安定性とのバランスが重要です。事業フェーズ・資金状況・求められる役割を面談で見極め、安定とチャレンジのどちらを優先するかを明確にしてください。背景として、経済産業省「IT人材需給に関する調査」（2019年3月公表の試算）では2030年に最大約79万人のIT人材不足が見込まれ、経験あるエンジニアの需要は構造的に存在します。</p>
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
          <h2 className="text-xl font-bold mb-3">スタートアップは「直接応募×技術評価×選考サポート」で選ぶ</h2>
          <p className="text-blue-100 text-sm mb-4">Green/Wantedlyで温度感を確かめ、Findyでコード評価、レバテックキャリアで選考サポート。いずれも無料です。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedLinks.map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
