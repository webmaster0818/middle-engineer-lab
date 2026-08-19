import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/compare/women-agents/" },
  title: "女性エンジニアの転職エージェントおすすめ｜選び方【2026年8月】",
  description:
    "女性エンジニアの転職に役立つエージェントを、当サイトに実在するサービスから根拠付きで厳選。IT特化のレバテックキャリア、総合大手のdoda、サポート手厚いマイナビIT AGENT、首都圏特化のtype転職エージェントまで、30代40代の両立・働き方の見極め方とあわせて選び方を整理します。",
};

const toc = [
  { id: "conclusion", label: "結論：女性エンジニアはどう選ぶか" },
  { id: "point", label: "選定のポイント（両立・働き方の見極め）" },
  { id: "ranking", label: "女性エンジニアに役立つサービス" },
  { id: "remote", label: "リモート・働き方で見極める" },
  { id: "combo", label: "併用の考え方" },
  { id: "middle", label: "30代・40代女性エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const services = [
  {
    rank: "本命",
    name: "レバテックキャリア",
    href: "/review/levtech/",
    tag: "IT/Web特化・高年収・リモート求人",
    reason: "IT・Web系全般を扱う大手の正社員転職エージェント。約5万件超（2026年6月時点・複数転職メディア集計）の求人数で、リモート可・フレックスなど働き方を考慮した求人も探しやすい。IT特化のため技術的な文脈を理解した提案を受けやすく、書類添削・面接対策・年収交渉のサポートも充実。利用者の約80%が20〜30代（公式ガイド記事）。",
    fit: "技術を活かしつつ、働き方と年収のバランスを取りたい女性エンジニア",
  },
  {
    rank: "総合大手",
    name: "doda（IT）",
    href: "/review/doda-it/",
    tag: "検索＋エージェント＋スカウト・全国",
    reason: "総合型でIT・通信エンジニア求人5万件超（2026年2月時点・二次経由）。自分で条件検索しつつエージェント提案・スカウトも受けられるハイブリッド型で全国対応。勤務地・リモート・時短など条件を自分で絞り込めるため、両立を重視した求人探しがしやすい。転職者の約6割が年収アップ。",
    fit: "勤務地・働き方の条件を自分で絞り込みつつ提案も受けたい人",
  },
  {
    rank: "サポート手厚",
    name: "マイナビ IT AGENT",
    href: "/review/mynavi-it/",
    tag: "20〜30代・サポートの手厚さ",
    reason: "20〜30代若手層に強く、書類添削・面接対策の手厚さが特徴。IT専門のキャリアアドバイザーによる個別支援で、転職後定着率97.5%・年収アップ率73.7%（転職メディア集計値・二次情報）。初めての転職や、丁寧に伴走してほしい人に向く。全国（首都圏・関西・名古屋・福岡が中心）。",
    fit: "丁寧なサポートを受けながら腰を据えて転職を進めたい人",
  },
  {
    rank: "首都圏特化",
    name: "type転職エージェント",
    href: "/review/type-agent/",
    tag: "首都圏IT/Web・年収交渉",
    reason: "首都圏（一都三県）中心のIT/Web業界に強く、年収交渉・面接対策に注力。年収アップ希望者の約71%が増収・平均増額92万円／ITエンジニアは124万円（2021年10月〜2022年9月の自社調査）、定着率97.4%（自社公表値）。運営のキャリアデザインセンターは女性向け転職メディアも展開しており、首都圏で条件を上げたい人に向く。",
    fit: "首都圏で年収・条件をしっかり交渉したい女性エンジニア",
  },
];

const faqs = [
  { q: "女性エンジニアの転職エージェントはどう選べばいいですか？", a: "「女性専用」を名乗るかどうかより、IT/Webに強く、リモート・時短・育児との両立など働き方の条件を踏まえた求人を提案してくれるかで選ぶのが現実的です。当サイトに実在するサービスでは、IT特化で求人数・高年収に強いレバテックキャリアを軸に、条件を自分で絞り込めるdoda、サポートが手厚いマイナビIT AGENT、首都圏で交渉力のあるtype転職エージェントを組み合わせると、技術・年収・働き方のバランスを取りやすくなります。" },
  { q: "なぜレバテックキャリアを本命にしているのですか？", a: "レバテックキャリアはIT・Web特化で技術文脈を理解した提案を受けやすく、約5万件超（2026年6月時点・複数転職メディア集計）の求人数からリモート可・フレックスなど働き方を考慮した求人も探しやすいためです。高年収求人に強く、書類添削・面接対策・年収交渉のサポートもあるため、技術を活かしながら働き方と年収のバランスを取りたい女性エンジニアの土台になります。" },
  { q: "リモートワークや時短勤務の求人を重視したいです。", a: "リモート・時短・フレックスなどの働き方は、求人ごとに条件が異なるため、エージェントに希望を明確に伝えて絞り込んでもらうのが近道です。dodaは自分で条件検索ができ、レバテックキャリアはIT特化でリモート求人も扱います。面談で「リモート可否」「コアタイム」「残業実態」を具体的に確認し、入社後のミスマッチを避けましょう。働き方の見極め方は当サイトの女性エンジニア向け記事でも整理しています。" },
  { q: "30代・40代で育児と両立しながら転職できますか？", a: "可能です。両立を重視する場合は、勤務地・リモート・残業実態を面談で具体的に確認することが重要です。サポートが手厚いマイナビIT AGENTで丁寧に伴走してもらい、条件を自分で絞り込めるdodaで母数を確保し、年収・条件を上げたいなら首都圏特化のtype転職エージェントで交渉する、という組み合わせが現実的です。専門性があれば、両立しやすい環境で年収を維持・向上させることも狙えます。" },
  { q: "「女性専用エージェント」でないと不利ですか？", a: "必ずしもそうではありません。重要なのは、IT/Webに強く、自分の働き方の希望を理解して求人を提案してくれるかどうかです。本記事で挙げたサービスはいずれもIT/Webに強く、働き方の条件も相談できます。なお、type転職エージェントを運営するキャリアデザインセンターは女性向け転職メディアも展開しており、女性のキャリア支援の知見があります。" },
  { q: "年収を下げずに働き方を変えたいです。", a: "専門性のあるエンジニアなら、働き方を変えつつ年収を維持・向上させることは十分に狙えます。年収交渉に強いレバテックキャリアやtype転職エージェント（ITエンジニアの平均増額124万円・自社調査）を活用し、希望する働き方と年収の両方を交渉材料として伝えましょう。複数社で提示を比較すると交渉の土台ができます。" },
  { q: "複数登録した方がいいですか？", a: "はい。IT特化のレバテックキャリアを軸に、条件検索のdoda、サポートのマイナビIT AGENT、首都圏交渉のtype転職エージェントを組み合わせると、技術・働き方・年収の各面を補完できます。いずれも無料です。同じ企業への重複応募は避け、応募状況を自分で管理しましょう。" },
];

const relatedLinks = [
  { name: "女性エンジニアの転職【両立と企業の見極め方】", href: "/knowledge/woman-engineer/" },
  { name: "レバテックキャリア（IT/Web特化）の評判", href: "/review/levtech/" },
  { name: "マイナビ IT AGENT（サポート手厚）の評判", href: "/review/mynavi-it/" },
  { name: "type転職エージェント（首都圏・年収交渉）の評判", href: "/review/type-agent/" },
  { name: "ワークライフバランスの考え方", href: "/knowledge/work-life-balance/" },
  { name: "IT転職エージェント比較", href: "/compare/agents/" },
];

export default function WomenAgentsPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="女性エンジニアの転職エージェントおすすめ｜選び方" description="女性エンジニアの転職に役立つエージェントを実在サービスから根拠付きで厳選し、両立・働き方の見極めとあわせて選び方を整理します。" url="/compare/women-agents/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "比較" }, { name: "女性エンジニアのエージェント" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">女性エンジニアの転職エージェントおすすめ｜実在サービスから根拠付きで選ぶ</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 ｜ 技術・働き方・年収のバランスで選ぶ</p>

        <p className="text-slate-600 leading-relaxed mb-4">女性エンジニアの転職は、「女性専用」を名乗るかどうかより、<strong>IT/Webに強く、リモート・時短・両立など働き方の条件を踏まえた提案ができるか</strong>で選ぶのが現実的です。本記事は当サイトに実在するサービスの中から、各社の公式・公表情報に基づいて、技術・働き方・年収のバランスを取りやすいものを根拠付きで選定しています。架空のサービスや順位の捏造はしていません。</p>

        <DataNote surveyedAt="2026年6月" sources={["レバテックキャリア公式系ガイド", "doda（パーソルキャリア）公表値", "マイナビ IT AGENT 二次情報", "type転職エージェント（キャリアデザインセンター）自社公表値", "口コミの傾向要約"]} />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (<li key={t.id}><a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a></li>))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：女性エンジニアはどう選ぶか</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6 mb-4">
            <p className="font-bold text-blue-900 mb-3">先に結論をお伝えします。</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li><strong>・本命は「レバテックキャリア」</strong>。IT特化で求人数・高年収に強く、リモート等の働き方も相談しやすい。</li>
              <li><strong>・条件検索は「doda」、サポートは「マイナビ IT AGENT」</strong>。勤務地・働き方を絞り込み、丁寧に伴走してもらえる。</li>
              <li><strong>・首都圏で交渉するなら「type転職エージェント」</strong>。年収交渉に注力し、ITエンジニアの平均増額124万円（自社調査）。</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">いずれも無料です。「女性専用」という看板より、IT/Webに強く働き方の希望を理解してくれるかを基準に、複数併用で技術・働き方・年収を両取りするのが効率的です。</p>
        </section>

        <section id="point" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選定のポイント（両立・働き方の見極め）</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { t: "IT/Webに強いか", d: "技術的な文脈を理解し、エンジニア職に合った求人を提案できるIT特化型・総合大手か。" },
              { t: "働き方の条件を踏まえるか", d: "リモート・時短・フレックス・残業実態など、両立に関わる条件を相談・絞り込みできるか。" },
              { t: "年収を交渉できるか", d: "働き方を変えても年収を維持・向上できるよう、年収交渉を支援してくれるか。" },
            ].map((c, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2 text-sm">{c.t}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="ranking" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">女性エンジニアに役立つサービス（根拠付き）</h2>
          <p className="text-slate-600 leading-relaxed text-sm mb-6">順位は「IT/Webへの強さ×働き方への対応×交渉力」を基準に、各社の公式・公表情報に基づいて整理しています。数値はすべて出典・時点付きの公開情報です。なお働き方の実態は企業ごとに異なるため、最終的には面談での確認が前提です。</p>
          <div className="space-y-5">
            {services.map((s, i) => (
              <div key={i} className="border border-slate-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-petrol text-white">{s.rank}</span>
                  <Link href={s.href} className="text-lg font-bold text-petrol-deep hover:underline">{s.name}</Link>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">{s.tag}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">{s.reason}</p>
                <p className="text-sm text-slate-700"><span className="font-bold">向いている人：</span>{s.fit}</p>
                <Link href={s.href} className="inline-block mt-3 text-sm font-medium text-petrol hover:underline">{s.name}の詳細レビューを見る →</Link>
              </div>
            ))}
          </div>
        </section>

        <section id="remote" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">リモート・働き方で見極める</h2>
          <p className="text-slate-600 leading-relaxed text-sm mb-3">育児・介護・ライフイベントとの両立を重視する場合、求人票の「リモート可」だけでは実態が分かりません。面談では次の点を具体的に確認しましょう。</p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 text-sm text-slate-700">
            <ul className="space-y-1.5 list-disc pl-5">
              <li><strong>リモートの頻度：</strong>フルリモートか週何日出社か、入社後も維持されるか。</li>
              <li><strong>コアタイム・時短：</strong>フレックスのコアタイム、時短勤務制度の有無と実績。</li>
              <li><strong>残業実態：</strong>制度上の残業時間ではなく、現場の実態。</li>
              <li><strong>復帰・両立の前例：</strong>育休・時短からの復帰や、両立しているメンバーの実例があるか。</li>
            </ul>
            <p className="mt-3">これらは求人票では見えにくいため、エージェント経由で確認するのが安全です。働き方と企業の見極め方は<Link href="/knowledge/woman-engineer/" className="text-petrol hover:underline">女性エンジニアの転職【両立と企業の見極め方】</Link>で詳しく扱っています。</p>
          </div>
        </section>

        <section id="combo" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">併用の考え方</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "レバテックキャリアを軸に据える", desc: "IT特化で技術文脈を理解した提案を受け、リモート等の働き方と高年収帯を確保する。" },
                { num: "2", title: "dodaで条件を絞り込む", desc: "勤務地・リモート・時短などの条件を自分で検索しつつ、エージェント提案も受けて母数を広げる。" },
                { num: "3", title: "サポートと交渉を補う", desc: "丁寧に伴走してほしいならマイナビ IT AGENT、首都圏で年収・条件を交渉したいならtype転職エージェントを足す。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.num}</span>
                  <div><h3 className="font-bold text-slate-800 mb-1">{item.title}</h3><p className="text-sm text-slate-600">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代女性エンジニアの視点</h2>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm">30代・40代の女性エンジニアは、結婚・育児・介護などライフイベントと、これまで積んだ専門性・実績の両方を踏まえて転職先を選ぶ必要があります。重要なのは「働き方を変える＝年収を下げる」と決めつけないことです。専門性があれば、両立しやすい環境で年収を維持・向上させることは十分に狙えます。</p>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm"><strong>30代の場合：</strong>スキルが市場で評価され、働き方と年収のバランスを取りやすい年代です。レバテックキャリアを軸にリモート求人を探し、年収はtype転職エージェント等で交渉しましょう。レバテック公表（2025年）では正社員SEで30代約499万円が一つの目安です。</p>
          <p className="text-slate-600 leading-relaxed mb-4 text-sm"><strong>40代の場合：</strong>専門性・マネジメント経験を武器に、両立できる環境で上位ポジションを狙えます。求人が絞られやすい分、希望する働き方と強みを明確に言語化し、複数社で母数を確保することが重要です。経済産業省「IT人材需給に関する調査」（2019年3月公表の試算）では2030年に最大約79万人のIT人材不足が見込まれ、経験あるエンジニアの需要は構造的に存在します。両立と企業の見極めは<Link href="/knowledge/woman-engineer/" className="text-petrol hover:underline">女性エンジニアの転職記事</Link>もあわせてご覧ください。</p>
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
          <h2 className="text-xl font-bold mb-3">女性エンジニアは「IT特化×働き方×交渉力」で選ぶ</h2>
          <p className="text-blue-100 text-sm mb-4">レバテックキャリアを軸に、dodaで条件検索、マイナビIT AGENTでサポート、type転職エージェントで交渉。いずれも無料です。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedLinks.map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
