import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "レバテックキャリアとリクルートエージェントIT比較｜どっちがおすすめ【2026年6月】",
  description:
    "レバテックキャリアとリクルートエージェントITをどっちがおすすめか即答。IT特化型と国内最大級の総合型を、求人数・専門性・サポート・対象層で時点付き実データで徹底比較し、30代40代エンジニアの選び方を解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：どっちがおすすめか" },
  { id: "basic", label: "基本データ比較表（2026年6月時点）" },
  { id: "jobs", label: "求人数で比較" },
  { id: "specialty", label: "専門性・提案の質で比較" },
  { id: "support", label: "サポート体制で比較" },
  { id: "target", label: "対象層・得意領域で比較" },
  { id: "reviews", label: "口コミ傾向（出典付き）" },
  { id: "checklist", label: "向いている人チェックリスト" },
  { id: "combo", label: "併用ガイド" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const comparison = [
  { item: "運営会社", levtech: "レバテック株式会社（レバレジーズグループ）", recruit: "株式会社リクルート" },
  { item: "サービス形態", levtech: "IT/Web特化型エージェント", recruit: "総合型エージェントのIT領域支援（国内最大級）" },
  { item: "求人数", levtech: "約5万件超（2026年6月時点・複数転職メディア集計）", recruit: "IT公開求人110,840件＋IT非公開求人101,680件（2026年5月22日時点・転職メディア集計）" },
  { item: "対応エリア", levtech: "首都圏中心（二次情報）", recruit: "全国47都道府県／リモート求人も多数" },
  { item: "得意領域", levtech: "IT/Web全般。高年収求人比率が高い", recruit: "国内最大級の求人数。大手〜スタートアップまで網羅" },
  { item: "年収アップ実績", levtech: "応募時年収との差70万円以上が3人に2人（2023年1月〜2024年3月実績）", recruit: "統一された公式アップ率は未確認（断定せず）" },
  { item: "サポート", levtech: "IT専門アドバイザーによる技術文脈の理解／LINEで連絡完結", recruit: "大量求人を捌くため事務的との声もあり／独自のAI求人提案ツール" },
  { item: "料金", levtech: "求職者無料", recruit: "求職者は完全無料" },
];

const faqs = [
  { q: "レバテックキャリアとリクルートエージェントITはどっちがおすすめ？", a: "IT/Web領域に絞って技術文脈を理解した提案と高年収求人を受けたいならレバテックキャリア、とにかく多くの求人を比較して母数を最大化したいならリクルートエージェントITがおすすめです。専門性と求人数という得意分野が異なるため、両方無料で登録して使い分けるのが効率的です。" },
  { q: "求人数が多いのはどっち？", a: "リクルートエージェントITが圧倒的に多く、IT公開求人110,840件・IT非公開求人101,680件（2026年5月22日時点・転職メディア集計）とされます。レバテックキャリアは約5万件超（2026年6月時点・複数転職メディア集計）です。ただしレバテックはIT/Web特化のため、件数あたりの自分への適合度は高くなりやすい傾向があります。" },
  { q: "IT専門性が高いのはどっち？", a: "レバテックキャリアです。IT/Web特化型で、アドバイザーが技術スタックやポジションの文脈を理解した提案をしやすい点が強みです。リクルートエージェントITは総合型のIT領域支援で求人の網羅性が魅力ですが、担当者の対応が事務的との声も口コミに見られます。" },
  { q: "年収アップしやすいのはどっち？", a: "レバテックキャリアは内定承諾者のうち応募時年収との差が70万円以上の人が3人に2人（2023年1月〜2024年3月実績）と公表しています。リクルートエージェントITは統一された公式アップ率を確認できないため断定はできませんが、求人母数が大きいぶん高年収求人に出会える機会自体は多い傾向があります。" },
  { q: "40代エンジニアにはどっち？", a: "求人の母数を確保しやすいリクルートエージェントITを軸にしつつ、IT専門の提案を受けるためにレバテックキャリアを併用する形が現実的です。リクルートは求人数が多いため、40代でもPM・PL経験や特定業界の知見があれば紹介につながりやすい傾向があります。" },
  { q: "30代エンジニアにはどっち？", a: "IT/Web領域でキャリアを深めたい30代はレバテックキャリア、業界・職種を広く見比べたい30代はリクルートエージェントITが向きます。レバテックは利用者の約80%が20〜30代（公式系）で、30代の利用実績が豊富です。両方登録して提案の質を比較するのが堅実です。" },
  { q: "地方在住でも使える？", a: "リクルートエージェントITは全国47都道府県の求人を扱い、地方在住でもオンライン面談で利用できます。レバテックキャリアは首都圏中心（二次情報）のため、地方求人を広く見たい場合はリクルートを軸にするとよいでしょう。" },
  { q: "両方登録しても大丈夫？", a: "問題なく、むしろ求人の網（リクルート）と専門性（レバテック）を両立できるため推奨されます。両方無料です。同じ企業へ重複応募しないよう、応募状況は自分で管理しておきましょう。" },
];

const levtechReviews = {
  good: ["IT専門アドバイザーで技術の話が通じる", "高年収求人が多い", "LINEで連絡が完結する"],
  bad: ["未経験者は紹介されにくい", "首都圏中心で地方求人は限定的", "初回面談後の連絡が遅い場合がある"],
};
const recruitReviews = {
  good: ["圧倒的な求人数で選択肢が広い", "非公開求人が充実している", "全国・地方の求人にアクセスできる"],
  bad: ["対応が事務的に感じる場合がある", "サポート期間が短いとの声", "求人量が多く取捨選択が大変"],
};

const relatedLinks = [
  { name: "レバテックキャリアの詳細レビュー", href: "/review/levtech/" },
  { name: "リクルートエージェントITの詳細レビュー", href: "/review/recruit-it/" },
  { name: "IT転職エージェント比較", href: "/compare/agents/" },
  { name: "レバテックキャリア vs doda", href: "/compare/levtech-vs-doda/" },
  { name: "リクルートエージェント vs doda", href: "/compare/recruit-vs-doda/" },
  { name: "40代におすすめのエージェント", href: "/compare/40s-agents/" },
];

export default function LevtechVsRecruitPage() {
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
        title="レバテックキャリアとリクルートエージェントIT比較｜どっちがおすすめ【2026年6月】"
        description="レバテックキャリアとリクルートエージェントITをどっちがおすすめか即答。求人数・専門性・サポート・対象層を時点付き実データで徹底比較します。"
        url="/compare/levtech-vs-recruit/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "比較" },
          { name: "レバテックキャリア vs リクルートエージェントIT" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          レバテックキャリアとリクルートエージェントIT比較｜どっちがおすすめ？
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ IT特化型と国内最大級の総合型を実データで徹底比較
        </p>

        <p className="text-slate-600 leading-relaxed mb-2">
          IT/Web特化型の代表格レバテックキャリアと、国内最大級の求人数を誇る総合型リクルートエージェントのIT領域支援。どちらも30代・40代エンジニアの定番ですが、「専門性で深く」攻めるか「求人数で広く」攻めるかという軸が明確に異なります。本記事では公開されている実データと口コミ傾向をもとに、ミドルエンジニア視点で「どっちを選ぶべきか」を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテックキャリア公式系ガイド記事",
            "リクルートエージェント公式・転職メディア集計値",
            "Qiita Job Change等の口コミプラットフォーム（傾向要約）",
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
              IT/Webの専門提案と高年収狙いなら「レバテックキャリア」、求人数を最大化して幅広く比較するなら「リクルートエージェントIT」。
            </p>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>① レバテックキャリアはIT/Web特化で技術文脈を理解した提案が強み。高年収求人比率が高く、応募時年収との差70万円以上が3人に2人（2023年1月〜2024年3月実績）。</li>
              <li>② リクルートエージェントITはIT公開求人110,840件＋非公開101,680件（2026年5月22日時点・集計）という圧倒的な母数。全国・地方やリモートまで網羅。</li>
              <li>③ 「専門性のレバテック」「求人数のリクルート」と役割が分かれるため、両方無料で登録し求人の網と提案の質を両取りするのが最も損のない選び方。</li>
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
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">レバテックキャリア</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">リクルートエージェントIT</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 align-top">
                    <td className="px-3 py-3 border border-slate-200 font-medium whitespace-nowrap">{row.item}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.levtech}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.recruit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            ※ 求人数は時期により変動が大きく、媒体経由の二次集計値です。取得時点と出典が異なるため、件数の単純比較は推奨しません。
          </p>
        </section>

        <section id="jobs" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人数で比較</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">レバテックキャリア：約5万件超</h3>
              <p className="text-sm text-petrol-deep">
                2026年6月時点・複数転職メディアの集計で約5万件超。IT/Web全般に絞られているぶん、提案される求人の適合度が高くなりやすいのが特徴です。高年収求人の比率の高さも評価されています。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">リクルートエージェントIT：20万件規模</h3>
              <p className="text-sm text-slate-600">
                IT公開求人110,840件＋IT非公開求人101,680件（2026年5月22日時点・転職メディア集計）。国内最大級の求人数で、大手からスタートアップ、全国・地方まで網羅する圧倒的な母数が魅力です。
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            純粋な件数ではリクルートが圧倒します。一方で「多い＝良い」ではなく、膨大な求人から自分に合うものを絞り込む手間も発生します。母数を確保したいならリクルート、絞り込み済みの精度を求めるならレバテック、という整理が実務的です。
          </p>
        </section>

        <section id="specialty" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">専門性・提案の質で比較</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            レバテックキャリアはIT/Web特化型のため、アドバイザーが使用言語・フレームワーク・ポジション（バックエンド／SRE／PM等）の文脈を理解した提案をしやすい点が強みです。技術的なキャリアの相談がそのまま通じやすく、ミスマッチが起きにくい傾向があります。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            リクルートエージェントITは総合型のIT領域支援で、求人の網羅性が最大の武器です。一方、大量の求職者・求人を扱う構造上、「対応が事務的」「サポート期間が短い」という声も口コミに見られます。専門的な深掘りはレバテック、間口の広さはリクルート、と棲み分けるのが現実的です。
          </p>
        </section>

        <section id="support" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">サポート体制で比較</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            レバテックキャリアは書類添削・面接対策の丁寧さと、LINEで連絡が完結する手軽さが評価されています。リクルートエージェントITはAIによる求人提案など独自ツールが充実し、効率的に大量の求人を比較できる仕組みが整っています。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            在職中で時間が限られる30代・40代にとっては、どちらも担当者との相性が満足度を大きく左右します。合わない場合は担当変更を申し出るか、併用先の担当者をメインに据える判断も有効です。
          </p>
        </section>

        <section id="target" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">対象層・得意領域で比較</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3">レバテックキャリアが強い領域</h3>
              <div className="flex flex-wrap gap-2">
                {["IT/Web全般", "高年収求人", "技術文脈の理解", "首都圏中心", "20〜30代の利用が多い"].map((tag, i) => (
                  <span key={i} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-petrol-soft text-petrol-deep">{tag}</span>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">※ 利用者の約80%が20〜30代（公式系）。高年収求人比率の高さが特徴。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3">リクルートエージェントITが強い領域</h3>
              <div className="flex flex-wrap gap-2">
                {["国内最大級の求人数", "全国・地方対応", "非公開求人", "大手〜スタートアップ", "リモート求人"].map((tag, i) => (
                  <span key={i} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">{tag}</span>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">※ IT公開求人11万件超。全国47都道府県の求人を扱う総合型のIT支援。</p>
            </div>
          </div>
        </section>

        <section id="reviews" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミ傾向（出典付き）</h2>
          <p className="text-sm text-slate-500 mb-4">
            以下は、Qiita Job Change・みん評・各種転職口コミメディアに見られる傾向を要約したものです（原文転載ではありません）。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">レバテックキャリアの口コミ傾向</h3>
              <p className="text-xs font-medium text-slate-500 mb-1">良い評判</p>
              <ul className="space-y-1 text-sm text-slate-700 mb-3">
                {levtechReviews.good.map((r, i) => <li key={i}>＋ {r}</li>)}
              </ul>
              <p className="text-xs font-medium text-slate-500 mb-1">気になる評判</p>
              <ul className="space-y-1 text-sm text-slate-600">
                {levtechReviews.bad.map((r, i) => <li key={i}>− {r}</li>)}
              </ul>
              <p className="text-xs text-slate-400 mt-3">出典: OUTSIDEMAGAZINE／Qiita Job Change／イーデス 等の傾向</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">リクルートエージェントITの口コミ傾向</h3>
              <p className="text-xs font-medium text-slate-500 mb-1">良い評判</p>
              <ul className="space-y-1 text-sm text-slate-700 mb-3">
                {recruitReviews.good.map((r, i) => <li key={i}>＋ {r}</li>)}
              </ul>
              <p className="text-xs font-medium text-slate-500 mb-1">気になる評判</p>
              <ul className="space-y-1 text-sm text-slate-600">
                {recruitReviews.bad.map((r, i) => <li key={i}>− {r}</li>)}
              </ul>
              <p className="text-xs text-slate-400 mt-3">出典: みん評／Qiita Job Change／各種転職メディア 等の傾向</p>
            </div>
          </div>
        </section>

        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人チェックリスト</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-3">レバテックキャリアが向く人</h3>
              <ul className="space-y-2 text-sm text-petrol-deep">
                <li>✓ IT/Web領域でキャリアを深めたい</li>
                <li>✓ 技術文脈を理解した提案が欲しい</li>
                <li>✓ 高年収帯を狙いたい</li>
                <li>✓ 首都圏で転職を考えている</li>
                <li>✓ LINEで気軽にやり取りしたい</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3">リクルートエージェントITが向く人</h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li>✓ とにかく多くの求人を比較したい</li>
                <li>✓ 地方在住・全国の求人を見たい</li>
                <li>✓ 大手からスタートアップまで幅広く検討</li>
                <li>✓ 非公開求人の母数を確保したい</li>
                <li>✓ AI提案ツールを活用したい</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="combo" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">併用ガイド</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-4">
              {[
                { num: "1", title: "リクルートで母数を確保", desc: "まず求人数の多いリクルートエージェントITに登録し、業界・職種・エリアを横断して市場全体を把握。非公開求人の母数を押さえます。" },
                { num: "2", title: "レバテックで専門提案を受ける", desc: "並行してレバテックキャリアに登録し、IT/Webに絞った技術文脈の通じる提案を受けます。高年収求人の比較もここで行います。" },
                { num: "3", title: "提案を突き合わせて精度を上げる", desc: "両社の提案を突き合わせると、求人の網羅性（リクルート）と適合度（レバテック）の両方を担保できます。相性の良い担当者をメインに据えましょう。" },
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
              併用時は同じ企業への重複応募を避けるため、応募状況を自分で管理しておきましょう。詳しくは
              <Link href="/compare/agents/" className="text-petrol hover:underline">IT転職エージェント比較</Link>
              も参照してください。
            </p>
          </div>
        </section>

        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
            <p className="text-slate-600 leading-relaxed text-sm">
              30代・40代の転職は、20代と違って「これまでの実績と専門性」で評価されます。レバテックキャリアは利用者の約80%が20〜30代（公式系）で、IT/Web領域の専門提案を受けやすく、ミドル層の年収交渉の土台になりやすいのが特徴です。
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              一方、40代は求人が絞られやすいため、母数の確保が重要になります。リクルートエージェントITは求人数が非常に多く、40代でもPM・PL経験や特定業界の知見があれば紹介につながりやすい傾向があります。専門性のレバテックと母数のリクルートを併用することで、機会損失を最小化できます。
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              背景として、経済産業省「IT人材需給に関する調査」（2019年3月公表の試算）では2030年に最大約79万人のIT人材不足が見込まれており、経験を積んだミドルエンジニアの需要は構造的に存在します。年代でターゲットを絞りすぎず、複数登録で母数を確保しつつ、自分の専門領域に強い担当者を見極めることが成功の近道です。
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
            レバテックキャリアとリクルートエージェントITは両方無料。専門性と求人数という強みが異なるため、2社に登録して提案を比較しましょう。
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
