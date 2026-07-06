import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/compare/paiza-vs-findy/" },
  title: "paiza転職とFindy比較｜スキル評価型はどっちがおすすめ【2026年6月】",
  description:
    "paiza転職とFindyをどっちがおすすめか即答。コーディングテスト型とGitHub連携スキル偏差値型を、評価軸・求人数・得意言語・対象層で時点付き実データで徹底比較。30代40代エンジニアの選び方を解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：どっちがおすすめか" },
  { id: "basic", label: "基本データ比較表（2026年6月時点）" },
  { id: "skill", label: "スキル評価の仕組みで比較（最大の違い）" },
  { id: "jobs", label: "求人数・企業数で比較" },
  { id: "language", label: "得意言語・領域で比較" },
  { id: "target", label: "対象層で比較" },
  { id: "reviews", label: "口コミ傾向（出典付き）" },
  { id: "checklist", label: "向いている人チェックリスト" },
  { id: "combo", label: "併用ガイド" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const comparison = [
  { item: "運営会社", paiza: "paiza株式会社（2013年設立・二次情報）", findy: "ファインディ株式会社（2016年創業）" },
  { item: "サービス種別", paiza: "コーディングテスト型（スキルチェックのランクで応募・書類選考免除）", findy: "スカウト型（GitHub連携によるスキル偏差値算出）" },
  { item: "スキル評価", paiza: "プログラミングスキルチェック（S〜Eランク）", findy: "GitHub連携によるスキル偏差値" },
  { item: "求人数・企業数", paiza: "約5,100件（2026年4月更新・二次情報）／掲載1,600社以上", findy: "掲載企業800社以上（厳選・公式 2024年7月時点）／求人数は公式LPで非明示＝確認不可" },
  { item: "登録者数", paiza: "公式値は確認範囲で非明示", findy: "二次情報で幅があり公式値は確認不可" },
  { item: "得意領域", paiza: "Web系・自社開発・スタートアップ／プログラミング職", findy: "モダン言語（Go／TypeScript／Python／Ruby等）・Web自社開発" },
  { item: "対応エリア", paiza: "全国（首都圏中心）", findy: "首都圏中心（地方求人は少なめという傾向）" },
  { item: "料金", paiza: "求職者完全無料", findy: "求職者無料" },
];

const faqs = [
  { q: "paiza転職とFindyはどっちがおすすめ？", a: "コーディングテストのランクで実力を示し、書類選考を飛ばして応募したいならpaiza転職、GitHubのアウトプットを評価してもらいスカウトを受けたいならFindyがおすすめです。どちらもエンジニア特化のスキル評価型で求職者無料のため、両方登録して自分の強みが評価されやすい方を見極めるのが効率的です。" },
  { q: "スキル評価の仕組みが違うって本当？", a: "はい、ここが最大の違いです。paiza転職はその場で解くコーディングテスト（S〜Eランク）で実力を可視化し、高ランクだと書類選考免除で応募できる仕組みです。FindyはGitHub連携でこれまでのアウトプットからスキル偏差値を算出し、それを見た企業からスカウトが届く仕組みです。試験で示すか、実績で示すかの違いと整理できます。" },
  { q: "求人数・企業数が多いのはどっち？", a: "paiza転職は約5,100件（2026年4月更新・二次情報）・掲載1,600社以上。Findyは掲載企業800社以上（厳選・公式 2024年7月時点）で、求人数は公式LPで非明示のため確認不可です。Findyは厳選志向、paizaは間口がやや広い構成と整理できますが、いずれも時点・基準が異なるため単純比較はできません。" },
  { q: "モダンな技術スタックに強いのはどっち？", a: "FindyはGo・TypeScript・Python・Ruby等のモダン言語とWeb自社開発に強いのが特徴です。paiza転職もWeb系・自社開発・スタートアップに強く、プログラミング職全般をカバーします。モダン言語でアウトプットがある人はFindy、コーディング力を試験で示したい人はpaizaが向きます。" },
  { q: "GitHubの実績が少なくても使える？", a: "FindyはGitHub連携でスキル偏差値を算出するため、公開リポジトリのアウトプットが少ないと評価が出にくいことがあります。その場合は、その場のテストで実力を示せるpaiza転職のほうが結果を出しやすい傾向があります。逆に日頃からOSSや個人開発でアウトプットしている人はFindyが有利です。" },
  { q: "30代エンジニアにはどっち？", a: "実装力に自信があり試験で示したい30代はpaiza転職、モダン技術のアウトプットが豊富な30代はFindyが向きます。どちらもWeb系・自社開発志向と相性が良く、両方登録して評価のされ方を比較するのが現実的です。" },
  { q: "40代エンジニアにはどっち？", a: "両社ともスキル・アウトプット重視のため、40代でも実装力や公開実績があれば年齢に左右されにくいのが利点です。ただし首都圏中心の傾向があるため、地方在住の場合は求人母数の多い総合型やIT特化型の併用も検討するとよいでしょう。" },
  { q: "両方登録しても大丈夫？", a: "問題なく、むしろ評価軸が異なるため両方の強みを活かせます。両方無料です。試験型のpaizaと実績型のFindyで、自分のどの強みが企業に響くかを比較できます。" },
];

const paizaReviews = {
  good: ["コーディングテストで実力を示せる", "高ランクは書類選考免除で応募できる", "Web系・自社開発の求人が多い"],
  bad: ["テスト対策の準備が必要", "求人は首都圏中心の傾向", "テストが苦手だと評価が出にくい"],
};
const findyReviews = {
  good: ["GitHub連携でアウトプットが評価される", "モダン言語の求人に強い", "厳選企業からスカウトが届く"],
  bad: ["公開実績が少ないと評価が出にくい", "地方求人は少なめという傾向", "求人数が公式非明示で全体像が掴みにくい"],
};

const relatedLinks = [
  { name: "paiza転職の詳細レビュー", href: "/review/paiza/" },
  { name: "Findyの詳細レビュー", href: "/review/findy/" },
  { name: "IT転職エージェント比較", href: "/compare/agents/" },
  { name: "Findy vs Forkwell", href: "/compare/findy-vs-forkwell/" },
  { name: "Findy vs レバテックキャリア", href: "/compare/findy-vs-levtech/" },
  { name: "30代におすすめのエージェント", href: "/compare/30s-agents/" },
];

export default function PaizaVsFindyPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <ArticleJsonLd
        title="paiza転職とFindy比較｜スキル評価型はどっちがおすすめ【2026年6月】"
        description="paiza転職とFindyをどっちがおすすめか即答。スキル評価の仕組み・求人数・得意言語・対象層を時点付き実データで徹底比較します。"
        url="/compare/paiza-vs-findy/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "比較" },
          { name: "paiza転職 vs Findy" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          paiza転職とFindy比較｜スキル評価型はどっちがおすすめ？
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ エンジニア特化のスキル評価型2社を実データで徹底比較
        </p>

        <p className="text-slate-600 leading-relaxed mb-2">
          エンジニアの実力を可視化して転職に活かすpaiza転職とFindy。どちらもスキルを評価軸にする点は共通ですが、「その場のコーディングテスト」で示すpaizaと、「GitHubのアウトプット」で示すFindyでは、評価のされ方が大きく異なります。本記事では公開されている実データと口コミ傾向をもとに、30代・40代エンジニア視点で「どっちを選ぶべきか」を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "paiza株式会社公式・二次情報",
            "ファインディ株式会社公式（2024年7月時点の掲載企業数等）・二次情報",
            "各種エンジニア転職口コミメディア（傾向要約）",
          ]}
        />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3">目次</p>
          <ol className="space-y-1.5 text-sm text-petrol-deep">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="hover:underline">{t.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：どっちがおすすめか</h2>
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-lg p-6">
            <p className="font-bold text-blue-900 mb-3">
              コーディングテストで実力を示し書類選考を飛ばすなら「paiza転職」、GitHubのアウトプットでスカウトを受けるなら「Findy」。
            </p>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>① paiza転職はコーディングテスト（S〜Eランク）で実力を可視化。高ランクは書類選考免除で応募でき、Web系・自社開発の求人が約5,100件（2026年4月更新・二次情報）。</li>
              <li>② FindyはGitHub連携でスキル偏差値を算出し、それを見た厳選企業（800社以上・2024年7月時点）からスカウトが届く。モダン言語に強い。</li>
              <li>③ 「試験で示す」か「実績で示す」かの違いで、評価される強みが異なる。両方無料のため、自分の強みが響く方を見極めるべく両方登録するのが最も損のない選び方。</li>
            </ul>
          </div>
        </section>

        <section id="basic" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ比較表（2026年6月時点）</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">比較項目</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">paiza転職</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">Findy</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 align-top">
                    <td className="px-3 py-3 border border-slate-200 font-medium whitespace-nowrap">{row.item}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.paiza}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.findy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            ※ 求人数・企業数は時期により変動が大きく、媒体経由の二次集計値や時点付きの公式値です。取得時点と出典が異なるため、件数の単純比較は推奨しません。
          </p>
        </section>

        <section id="skill" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキル評価の仕組みで比較（最大の違い）</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">paiza転職：コーディングテスト型</h3>
              <p className="text-sm text-petrol-deep">
                その場で解くプログラミングスキルチェックでS〜Eのランクを取得し、実力を可視化します。高ランクだと書類選考免除で応募できるため、学歴や職歴より「今の実装力」を評価されたい人に向きます。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Findy：GitHub連携のスキル偏差値型</h3>
              <p className="text-sm text-slate-600">
                GitHub連携でこれまでのアウトプットからスキル偏差値を算出し、それを見た企業からスカウトが届きます。日頃からOSSや個人開発でアウトプットを積んでいる人ほど評価されやすい設計です。
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            「試験で示す」paizaと「実績で示す」Findy。短時間で集中して実装力を示したいならpaiza、継続的なアウトプットを評価してほしいならFindy、という整理が実務的です。両方の評価軸を試すと、自分の強みがどちらで響くか分かります。
          </p>
        </section>

        <section id="jobs" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人数・企業数で比較</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">paiza転職</h3>
              <p className="text-sm text-petrol-deep">
                求人約5,100件（2026年4月更新・二次情報）・掲載1,600社以上。Web系・自社開発・スタートアップのプログラミング職を中心に、間口のやや広い構成です。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Findy</h3>
              <p className="text-sm text-slate-600">
                掲載企業800社以上（厳選・公式 2024年7月時点）。求人数は公式LPで非明示のため確認不可です。数より質の「厳選」志向で、モダン技術を扱う企業が中心です。
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500">
            ※ 集計時点・基準が各社で異なるため、数値の単純な大小比較はできません。Findyの求人数は公式非明示のため断定していません。
          </p>
        </section>

        <section id="language" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">得意言語・領域で比較</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3">paiza転職が強い領域</h3>
              <div className="flex flex-wrap gap-2">
                {["Web系", "自社開発", "スタートアップ", "プログラミング職全般", "コーディング力で勝負"].map((tag, i) => (
                  <span key={i} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-petrol-soft text-petrol-deep">{tag}</span>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">※ コーディングテストのランクで書類選考免除。実装力を試験で示したい人向け。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3">Findyが強い領域</h3>
              <div className="flex flex-wrap gap-2">
                {["Go", "TypeScript", "Python", "Ruby", "Web自社開発", "モダン技術"].map((tag, i) => (
                  <span key={i} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">{tag}</span>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">※ GitHub連携のスキル偏差値。モダン言語・Web自社開発のアウトプットがある人向け。</p>
            </div>
          </div>
        </section>

        <section id="reviews" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミ傾向（出典付き）</h2>
          <p className="text-sm text-slate-500 mb-4">
            以下は、各種エンジニア転職口コミメディアに見られる傾向を要約したものです（原文転載ではありません）。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">paiza転職の口コミ傾向</h3>
              <p className="text-xs font-medium text-slate-500 mb-1">良い評判</p>
              <ul className="space-y-1 text-sm text-slate-700 mb-3">
                {paizaReviews.good.map((r, i) => <li key={i}>＋ {r}</li>)}
              </ul>
              <p className="text-xs font-medium text-slate-500 mb-1">気になる評判</p>
              <ul className="space-y-1 text-sm text-slate-600">
                {paizaReviews.bad.map((r, i) => <li key={i}>− {r}</li>)}
              </ul>
              <p className="text-xs text-slate-400 mt-3">出典: 各種エンジニア転職口コミメディア 等の傾向</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">Findyの口コミ傾向</h3>
              <p className="text-xs font-medium text-slate-500 mb-1">良い評判</p>
              <ul className="space-y-1 text-sm text-slate-700 mb-3">
                {findyReviews.good.map((r, i) => <li key={i}>＋ {r}</li>)}
              </ul>
              <p className="text-xs font-medium text-slate-500 mb-1">気になる評判</p>
              <ul className="space-y-1 text-sm text-slate-600">
                {findyReviews.bad.map((r, i) => <li key={i}>− {r}</li>)}
              </ul>
              <p className="text-xs text-slate-400 mt-3">出典: 各種エンジニア転職口コミメディア 等の傾向</p>
            </div>
          </div>
        </section>

        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人チェックリスト</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">paiza転職が向く人</h3>
              <ul className="space-y-2 text-sm text-petrol-deep">
                <li>✓ コーディングテストで実力を示したい</li>
                <li>✓ 書類選考を飛ばして応募したい</li>
                <li>✓ Web系・自社開発に転職したい</li>
                <li>✓ 学歴・職歴より今の実装力で勝負したい</li>
                <li>✓ 短時間で集中して実力を出せる</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">Findyが向く人</h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li>✓ GitHubのアウトプットが豊富</li>
                <li>✓ モダン言語（Go/TS/Python/Ruby）で開発している</li>
                <li>✓ 厳選企業からのスカウトを受けたい</li>
                <li>✓ 継続的なアウトプットを評価してほしい</li>
                <li>✓ Web自社開発志向</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="combo" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">併用ガイド</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "両方の評価軸を試す", desc: "paizaのコーディングテストとFindyのGitHub連携の両方に登録し、自分のスキルがどちらの軸で高く評価されるかを確かめます。" },
                { num: "2", title: "強みが響く方を主軸に", desc: "試験で高ランクが出るならpaizaを主軸に書類選考免除を活用。アウトプットでスカウトが多いならFindyを主軸にスカウトを選別します。" },
                { num: "3", title: "エージェント型で網を広げる", desc: "どちらも首都圏中心の傾向があるため、求人母数や地方・伴走支援を補いたい場合はレバテックキャリア等のエージェント型を併用すると安心です。" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.num}</span>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-4">
              スキル可視化型の比較は
              <Link href="/compare/findy-vs-forkwell/" className="text-petrol hover:underline">Findy vs Forkwell</Link>
              も参照してください。
            </p>
          </div>
        </section>

        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
            <p className="text-slate-600 leading-relaxed text-sm">
              スキル評価型サービスの利点は、年齢や経歴よりも「今の実力・アウトプット」で勝負できる点です。実装力に自信のある30代・40代エンジニアにとって、paizaのコーディングテストやFindyのスキル偏差値は、年齢フィルターを越えて実力を示す有効な武器になります。
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              一方で、マネジメント中心でコードを書く機会が減っている場合、コーディングテストやGitHubのアウトプットでは強みを出しにくいこともあります。その場合は、職務経歴やマネジメント実績を評価してくれるエージェント型（レバテックキャリア等）を主軸にし、スキル評価型は補助的に使うとよいでしょう。
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              背景として、経済産業省「IT人材需給に関する調査」（2019年3月公表の試算）では2030年に最大約79万人のIT人材不足が見込まれており、即戦力のミドルエンジニアの需要は構造的に高い状況です。実装力で勝負できるなら、試験型のpaizaと実績型のFindyを併用し、自分の強みが最も響くルートを見極めるのが成功の近道です。
            </p>
            <p className="text-xs text-slate-500">
              ※ 厚労省 job tag「システムエンジニア（受託開発）」の平均年収は578.5万円・平均年齢37.1歳（令和7年賃金構造基本統計調査ベース）。年収交渉時の相場感の参考になります。
            </p>
          </div>
        </section>

        <section id="faq" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800">
                  <span>Q. {faq.q}</span>
                  <span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span>
                </summary>
                <div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">迷ったら両方登録がおすすめ</h2>
          <p className="text-blue-100 text-sm mb-4">
            paiza転職とFindyは両方無料。試験型と実績型で評価軸が異なるため、自分の強みが響く方を両方登録して見極めましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedLinks.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors"
              >
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
