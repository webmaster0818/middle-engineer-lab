import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "ゲーム業界に強い転職エージェントおすすめ｜選び方【2026年6月】",
  description:
    "ゲーム業界に強い転職エージェントを、当サイトに実在するサービスから根拠付きで厳選。ゲーム特化のGeekly、IT/Web全般のレバテックキャリア、ベンチャー直応募のGreen、Unityなど職種別の探し方まで、30代40代エンジニア向けに選び方を整理します。",
};

const toc = [
  { id: "conclusion", label: "結論：ゲーム業界はどう選ぶか" },
  { id: "point", label: "選定のポイント" },
  { id: "ranking", label: "ゲーム業界に強いサービス" },
  { id: "freelance", label: "フリーランス・業務委託で関わるなら" },
  { id: "skill", label: "職種・スキル別の探し方" },
  { id: "combo", label: "併用の考え方" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const services = [
  {
    rank: "本命",
    name: "Geekly（ギークリー）",
    href: "/review/geekly/",
    tag: "ゲーム特化・提案スピード",
    reason: "IT・Web・ゲーム業界に専門特化するエージェント。ゲーム業界をはっきりと得意領域に掲げている数少ないサービスで、提案スピードが強み。年収アップ率約81%・平均上昇額約76万円（2025年9月時点・二次情報の公表値）、希望職種への定着率97%（二次）を公表。求人は首都圏中心でフルリモート求人もあり。",
    fit: "ゲーム業界に絞ってスピード感を持って転職したい経験者",
  },
  {
    rank: "網羅",
    name: "レバテックキャリア",
    href: "/review/levtech/",
    tag: "IT/Web全般・高年収",
    reason: "IT・Web系全般を扱う大手の正社員転職エージェント。約5万件超（2026年6月時点・複数転職メディア集計）の求人数で母数が大きく、ゲーム関連の開発職も幅広く拾える。高年収求人に強く、利用者の約80%が20〜30代（公式ガイド記事）。ゲーム特化のGeeklyと並べて母数を確保する用途に向く。",
    fit: "ゲームに限定せず開発職全般の母数を広げて比較したい人",
  },
  {
    rank: "直応募",
    name: "Green",
    href: "/review/green/",
    tag: "ベンチャー・直接やり取り",
    reason: "エージェントを介さず企業と直接やり取りする成功報酬型の転職サイト。IT/Webベンチャー・スタートアップ・メガベンチャーが得意領域で、ゲーム系スタートアップやベンチャーの開発職を自分のペースで探せる。掲載企業9,000社以上・求人15,000件以上（媒体により幅あり）。仲介サポートは付かないため自分で進める前提。",
    fit: "ゲーム系ベンチャーと直接カジュアルにやり取りしたい人",
  },
  {
    rank: "共感軸",
    name: "Wantedly",
    href: "/review/wantedly/",
    tag: "カジュアル面談・社風重視",
    reason: "共感軸の直接応募／ビジネスSNS。スタートアップ・ベンチャーに強く、カジュアル面談で社風・ビジョンを知ってから検討できる。ゲーム系インディー・スタートアップのカルチャーフィットを確かめたいときに有効。ただし給与・待遇は原則非記載のため、年収条件は別途確認が必要。",
    fit: "ゲーム系スタートアップの文化やビジョンに共感して入りたい人",
  },
];

const faqs = [
  { q: "ゲーム業界に強い転職エージェントはどれですか？", a: "当サイトに実在するサービスの中で、ゲーム業界を明確に得意領域として掲げているのはGeekly（ギークリー）です。IT・Web・ゲーム業界に専門特化し提案スピードが強みです。これに、IT/Web全般を網羅して母数を広げられるレバテックキャリア、ベンチャー・スタートアップと直接やり取りできるGreenやWantedlyを組み合わせると、ゲーム関連の求人を幅広く比較できます。" },
  { q: "なぜGeeklyを本命にしているのですか？", a: "Geeklyは公式にIT・Web・ゲーム業界への専門特化を掲げており、当サイトでレビューしているサービスの中でゲーム業界をはっきり得意領域とする数少ないエージェントだからです。年収アップ率約81%・平均上昇額約76万円（2025年9月時点・二次情報）、希望職種への定着率97%（二次）を公表しています。提案スピードも評価されており、在職中で時間が限られるミドル層と相性が良いです。" },
  { q: "ゲーム会社の正社員ではなくフリーランスで関わりたいです。", a: "フリーランス（業務委託）でゲーム開発に関わりたい場合は、案件紹介エージェントが選択肢です。当サイトでレビューしているフリーランス系では、リモート案件比率が高いとされるgeechs（ギークス）などが該当します。ゲーム特化を保証するものではないため、面談でゲーム・エンタメ領域の案件があるかを必ず確認してください。" },
  { q: "Unityエンジニアとしてゲーム業界に行きたいです。", a: "Unityはゲーム開発の主要エンジンで、ゲーム業界転職と相性が良いスキルです。Unityエンジニアの市場や年収の探し方は当サイトのUnityスキルガイドで整理しています。エージェントはゲーム特化のGeeklyを軸に、Unity求人の有無を面談で確認するのが現実的です。" },
  { q: "ゲーム業界未経験でも転職できますか？", a: "ゲーム業界は即戦力を求める求人が中心で、未経験からの大幅な職種転換は若いほど通りやすい傾向があります。Web系やアプリ開発などの実務経験があれば、技術を活かしてゲーム関連に移れる可能性があります。まずは経験を整理し、ゲーム特化のGeeklyや母数の大きいレバテックキャリアで現実的な求人を確認してください。創作の体験談ではなく、自分の経歴に基づく相談が重要です。" },
  { q: "40代でもゲーム業界に転職できますか？", a: "40代では求人が絞られやすいのは事実ですが、特定ジャンルの開発経験やマネジメント・リードの実績があれば可能性はあります。ゲーム特化のGeeklyで母数を確認しつつ、レバテックキャリアで開発職全般に広げ、ベンチャーならGreenで直接やり取りする、と複数ルートで母数を確保するのが現実的です。" },
  { q: "複数登録した方がいいですか？", a: "はい。ゲーム特化のGeeklyを軸に、網羅性のレバテックキャリア、ベンチャー直応募のGreen/Wantedlyを組み合わせると、特化と網羅・正社員とベンチャーの両面から求人を比較できます。いずれも無料です。同じ企業への重複応募は避け、応募状況を自分で管理しましょう。" },
];

const relatedLinks = [
  { name: "Geekly（ゲーム特化）の評判・口コミ", href: "/review/geekly/" },
  { name: "レバテックキャリア（IT/Web全般）の評判", href: "/review/levtech/" },
  { name: "Green（ベンチャー直応募）の評判", href: "/review/green/" },
  { name: "Unityエンジニアの転職市場ガイド", href: "/skill/unity/" },
  { name: "レバテックキャリアとGeekly比較", href: "/compare/levtech-vs-geekly/" },
  { name: "IT転職エージェント比較", href: "/compare/agents/" },
];

export default function GameAgentsPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="ゲーム業界に強い転職エージェントおすすめ｜選び方" description="ゲーム業界に強い転職エージェントを実在サービスから根拠付きで厳選し、職種・働き方別の探し方を整理します。" url="/compare/game-agents/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "ゲーム業界に強いエージェント" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">ゲーム業界に強い転職エージェントおすすめ｜実在サービスから根拠付きで選ぶ</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ ゲーム特化・網羅・ベンチャー直応募を組み合わせて選ぶ</p>

        <p className="text-slate-600 leading-relaxed mb-4">ゲーム業界への転職は、<strong>ゲームを得意領域に掲げる特化エージェント</strong>を軸にしつつ、求人の母数を網羅型で補い、ベンチャーは直接応募で拾う、という組み合わせが現実的です。本記事は当サイトに実在するサービスの中から、各社の公式・公表情報に基づいてゲーム業界と相性の良いものを根拠付きで選定しています。架空のサービスや順位の捏造はしていません。</p>

        <p className="text-slate-600 leading-relaxed mb-4">ゲーム業界はコンシューマ・スマホ・PC・ブラウザなど領域が多岐にわたり、求められる技術スタックも幅広いのが特徴です。クライアント開発（Unity/Unreal/C++/C#）、サーバーサイド、インフラ、ツール開発など、職種ごとに評価される実績が異なります。そのため「ゲーム求人をどれだけ持っているか」だけでなく、<strong>自分の職種・得意ジャンルに合う求人を提案してくれるか</strong>が選定の本質になります。在職中で動く時間が限られる30代・40代ほど、特化エージェントに職種・ジャンルを明確に伝え、提案の精度を上げることが効率に直結します。なお、求人状況は時期により変動するため、本記事の各サービスの数値はすべて出典・時点付きの公開情報として参照し、最新は各公式サイトで確認してください。</p>

        <DataNote surveyedAt="2026年6月" sources={["Geekly公式会社概要・公表値", "レバテックキャリア公式系ガイド", "Green（アトラエ）公式", "Wantedly公式", "各社の二次集計値・口コミの傾向要約"]} />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (<li key={t.id}><a href={`#${t.id}`} className="text-blue-600 hover:underline">{t.label}</a></li>))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：ゲーム業界はどう選ぶか</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-4">
            <p className="font-bold text-blue-900 mb-3">先に結論をお伝えします。</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li><strong>・本命は「Geekly」</strong>。IT・Web・ゲーム業界に専門特化し、ゲーム業界を明確に得意領域とする数少ないエージェント。</li>
              <li><strong>・母数は「レバテックキャリア」で補う</strong>。IT/Web全般を網羅し、開発職全般の求人を幅広く拾える。</li>
              <li><strong>・ベンチャー・スタートアップは「Green」「Wantedly」</strong>で直接やり取り。文化やビジョンを確かめてから動ける。</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">いずれも無料です。特化×網羅×直応募を組み合わせ、ゲーム関連求人の母数と質を両取りするのが、限られた時間で動くミドルにとって効率的です。</p>
        </section>

        <section id="point" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選定のポイント</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { t: "ゲームを得意領域に掲げているか", d: "「IT全般」ではなく、公式にゲーム業界を得意領域として明示しているかどうか。Geeklyが該当します。" },
              { t: "求人の母数を確保できるか", d: "ゲーム特化だけでは母数が限られる場合があるため、IT/Web全般を網羅する大手で補えるか。" },
              { t: "ベンチャー・スタートアップに届くか", d: "ゲーム系スタートアップは直接応募型の方が拾いやすい。直接やり取りできるサービスがあるか。" },
            ].map((c, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2 text-sm">{c.t}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="ranking" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ゲーム業界に強いサービス（根拠付き）</h2>
          <p className="text-slate-600 leading-relaxed text-sm mb-6">順位は「ゲーム業界との相性」を基準に、各社の公式・公表情報に基づいて整理しています。数値はすべて出典・時点付きの公開情報です。</p>
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

        <section id="freelance" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フリーランス・業務委託で関わるなら</h2>
          <p className="text-slate-600 leading-relaxed text-sm mb-3">正社員ではなくフリーランス（業務委託）でゲーム・エンタメ開発に関わりたい場合は、案件紹介エージェントが選択肢です。当サイトでレビューしている<Link href="/review/geechs/" className="text-blue-600 hover:underline">geechs（ギークス）</Link>はリモートワーク案件が8割以上という二次情報があり、IT全般の案件を扱います。ゲーム特化を保証するものではないため、面談でゲーム・エンタメ領域の案件があるかを必ず確認してください。フリーランス全体の選び方は<Link href="/compare/freelance-agents/" className="text-blue-600 hover:underline">フリーランスエージェント比較</Link>を参照してください。</p>
        </section>

        <section id="skill" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">職種・スキル別の探し方</h2>
          <p className="text-slate-600 leading-relaxed text-sm mb-3">ゲーム開発はスキルによって相性の良い探し方が変わります。<Link href="/skill/unity/" className="text-blue-600 hover:underline">Unity</Link>はゲーム開発の主要エンジンで、ゲーム業界転職と最も相性の良いスキルです。Unityエンジニアの市場・年収の探し方はスキルガイドで整理しています。エンジン・言語の強みを言語化したうえで、ゲーム特化のGeeklyに相談すると提案の精度が上がります。</p>
          <p className="text-slate-600 leading-relaxed text-sm mb-3">クライアント側のUnity/Unreal/C++/C#だけでなく、大規模オンラインゲームを支えるサーバーサイドやインフラ、運用ツールの開発も、ゲーム業界では重要な職種です。Web系やバックエンドの実務経験がある人は、その技術をゲーム会社のサーバー・基盤ポジションに横展開できる可能性があります。逆にクライアント開発に未経験から入る場合は、エンジン経験の有無で評価が大きく変わります。自分の経歴がクライアント・サーバー・インフラのどこに強いかを整理し、それに合うジャンル（コンシューマ／スマホ／PC）と職種をエージェントに伝えることで、ミスマッチの少ない提案を受けやすくなります。希望条件は求人票だけでは読み取れないことも多いため、リモート可否や開発体制を含め面談で具体的に確認するのが安全です。</p>
        </section>

        <section id="combo" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">併用の考え方</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "Geeklyを軸に据える", desc: "ゲーム業界を得意領域とするGeeklyをメインに、ゲーム関連求人と提案スピードを確保する。" },
                { num: "2", title: "レバテックキャリアで母数を補う", desc: "ゲーム特化だけでは限られる母数を、IT/Web全般の大手で広げる。開発職全般を比較できる。" },
                { num: "3", title: "ベンチャーはGreen／Wantedly", desc: "ゲーム系スタートアップは直接応募の方が拾いやすい。文化・ビジョンを確かめてから検討できる。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{item.num}</span>
                  <div><h3 className="font-bold text-slate-800 mb-1">{item.title}</h3><p className="text-sm text-slate-600">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">ゲーム業界は技術トレンドの移り変わりが速く、特定エンジン・ジャンルの実務経験が評価されやすい領域です。30代・40代は、これまで積んだ開発経験やリード経験を武器に、得意ジャンルへ移る戦略が現実的です。在職中で時間が限られるミドルにとって、提案スピードが強みのGeeklyは相性が良いと言えます。</p>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm"><strong>30代の場合：</strong>Web/アプリ開発の経験をゲーム関連に活かしやすい年代です。Geeklyを軸に、Unity等のエンジン経験があれば前面に出し、母数はレバテックキャリアで広げましょう。レバテック公表（2025年）では正社員SEで30代約499万円が一つの目安です。</p>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm"><strong>40代の場合：</strong>求人が絞られやすいため、特定ジャンルの開発・マネジメント実績を明確に言語化することが重要です。Geeklyで特化求人、レバテックキャリアで開発職全般、Greenでベンチャーと、複数ルートで母数を確保してください。背景として、経済産業省「IT人材需給に関する調査」（2019年3月公表の試算）では2030年に最大約79万人のIT人材不足が見込まれ、経験あるエンジニアの需要は構造的に存在します。</p>
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
          <h2 className="text-xl font-bold mb-3">ゲーム業界は「特化×網羅×直応募」で選ぶ</h2>
          <p className="text-blue-100 text-sm mb-4">ゲーム特化のGeeklyを軸に、レバテックキャリアで母数を補い、ベンチャーはGreen/Wantedlyで直接やり取り。いずれも無料です。</p>
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
