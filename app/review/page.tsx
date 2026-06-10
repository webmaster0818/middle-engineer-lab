import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "転職エージェント・スカウト・フリーランス評判一覧【30代40代向け】",
  description:
    "30代・40代ITエンジニア向けに、転職エージェント・ハイクラススカウト・スキル可視化スカウト・フリーランスエージェント計22サービスの評判と使い分けをタイプ別に整理。各サービスの強み・向き不向きを比較できます。",
};

const categories = [
  {
    name: "IT特化・総合エージェント（担当が求人を提案）",
    intro: "キャリアアドバイザーが求人提案・面接対策・年収交渉まで伴走するタイプ。初めての転職や手厚いサポートを求める層に。",
    items: [
      { slug: "levtech", name: "レバテックキャリア", desc: "IT/Web特化の正社員転職エージェント。高年収求人が中心。" },
      { slug: "geekly", name: "Geekly", desc: "IT/Web/ゲーム特化。提案スピードに定評。" },
      { slug: "doda-it", name: "doda ITエンジニア", desc: "大手の求人量×IT特化サポート。" },
      { slug: "mynavi-it", name: "マイナビIT AGENT", desc: "20〜30代に手厚い書類・面接サポート。" },
      { slug: "recruit-it", name: "リクルートエージェントIT", desc: "国内最大級の求人量と非公開求人。" },
      { slug: "workport", name: "ワークポート", desc: "全国対応・未経験歓迎求人も豊富な総合型。" },
      { slug: "type-agent", name: "type転職エージェントIT", desc: "首都圏IT/Webに強く年収交渉に注力。" },
      { slug: "cloudlink", name: "クラウドリンク（現AIdea Career）", desc: "自社内開発求人100%でSES脱出に特化。" },
      { slug: "willof-tech", name: "ウィルオブテック", desc: "上場ウィルグループ運営。専属2名体制で年収アップに強い経験者向け。" },
      { slug: "techclips", name: "TechClips", desc: "自社開発企業100%・年収500万円以上特化。首都圏向け。" },
    ],
  },
  {
    name: "ハイクラス・スカウト（登録して待つ）",
    intro: "レジュメを登録し、ヘッドハンターや企業からのスカウトを待つタイプ。年収600万円以上のミドル〜ハイクラス向け。",
    items: [
      { slug: "bizreach-it", name: "ビズリーチ", desc: "ハイクラススカウトの定番。外資・管理職に強い。" },
      { slug: "recruit-direct-scout", name: "リクルートダイレクトスカウト", desc: "リクルート系の高年収スカウト。求人量が豊富。" },
      { slug: "doda-x", name: "doda X（旧iX転職）", desc: "年収800万円以上比率が高いハイクラススカウト。" },
      { slug: "jac-recruitment", name: "JACリクルートメント", desc: "両面型ハイクラス。40代エンジニアに最有力の一つ。" },
      { slug: "tenshoku-draft", name: "転職ドラフト", desc: "企業が年収提示つきで指名する競争入札型。市場価値を金額で確認できる。" },
    ],
  },
  {
    name: "スキル可視化・スカウト（エンジニア特化）",
    intro: "GitHubや技術発信を解析して企業からオファーが届くタイプ。コードや発信で実力を示せる現役エンジニア向け。",
    items: [
      { slug: "findy", name: "Findy", desc: "GitHub連携のスキル偏差値でオファーが届く。" },
      { slug: "forkwell", name: "Forkwell", desc: "ポートフォリオ＋技術コミュニティが強み。" },
      { slug: "lapras", name: "LAPRAS", desc: "GitHub以外の発信もAI解析する可視化スカウト。" },
      { slug: "paiza", name: "paiza転職", desc: "スキルチェックのランクで書類選考免除も。" },
      { slug: "green", name: "Green", desc: "企業と直接やり取りする成功報酬型サイト。" },
      { slug: "wantedly", name: "Wantedly", desc: "共感軸・カジュアル面談型。給与は原則非記載に注意。" },
    ],
  },
  {
    name: "フリーランス・独立向けエージェント",
    intro: "業務委託（フリーランス）案件を紹介するタイプ。独立・高単価・副業を目指す経験者向け。",
    items: [
      { slug: "levtech-freelance", name: "レバテックフリーランス", desc: "案件量・単価で最大手クラス（正社員転職とは別）。" },
      { slug: "midworks", name: "Midworks", desc: "正社員並みの保障で安定重視のフリーランス向け。" },
      { slug: "itpropartners", name: "ITプロパートナーズ", desc: "週2〜3日・副業/独立準備に強い。" },
      { slug: "geechs", name: "ギークスジョブ", desc: "リモート8割超＋福利厚生フリノベ。上場企業運営で安心。" },
      { slug: "pe-bank", name: "PE-BANK", desc: "マージン完全公開（8〜12%）＋共済会＋全国12拠点。" },
      { slug: "techreach", name: "TechReach", desc: "エンド直の高単価＋翌月15日支払い。フルリモート案件も豊富。" },
      { slug: "engineer-factory", name: "エンジニアファクトリー", desc: "低マージン・エンド直の高単価。東京大阪圏中心。" },
      { slug: "relance", name: "Relance（リランス）", desc: "スリーシェイク運営。自社開発・プライム中心の高単価×フルリモート。" },
      { slug: "furien", name: "フリエン（現ココナラテック）", desc: "ココナラグループ運営。直請け中心・支払いサイト選択可。" },
      { slug: "freelance-start", name: "フリーランススタート", desc: "国内最大級の案件検索エンジン。複数エージェントを横断比較する入口。" },
    ],
  },
  {
    name: "副業・20代/第二新卒向け（参考）",
    intro: "副業・複業や20代未経験のIT就職に特化したサービス。当サイト中心読者の30-40代経験者には合致しない場合がある点を正直に整理します。",
    items: [
      { slug: "kasooku", name: "カソーク", desc: "ユナイテッドグループ運営。副業・複業から相性を見て転職にもつなげられる。" },
      { slug: "uzuz-it", name: "ウズキャリIT", desc: "UZUZ運営。20代・未経験のIT就職向け。30-40代は対象外気味と正直に明記。" },
    ],
  },
  {
    name: "コンサル・キャリアチェンジ特化",
    intro: "ITコンサル・PM・DX人材へのキャリアチェンジを狙う層向け。純粋な開発職志向には不向きな点に注意。",
    items: [
      { slug: "axis-consulting", name: "アクシスコンサルティング（AXIS Agent）", desc: "コンサル業界特化。ポストコンサル・CxO層に強い。" },
    ],
  },
];

const allItems = categories.flatMap((c) => c.items);

const toc = categories.map((c, i) => ({ id: `cat-${i}`, label: c.name }));

export default function ReviewIndexPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "転職サービス評判一覧 - ミドルエンジニア転職ラボ",
    url: "https://middle-engineer.com/review/",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: allItems.length,
      itemListElement: allItems.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://middle-engineer.com/review/${it.slug}/`,
        name: it.name,
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "評判・口コミ一覧" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          転職エージェント・スカウト・フリーランス評判一覧【30代40代向け】
        </h1>
        <p className="text-slate-600 text-sm leading-relaxed mb-2">
          30代・40代のITエンジニア向けに、転職エージェント／ハイクラススカウト／スキル可視化スカウト／フリーランスエージェントなど計{allItems.length}サービスの評判と使い分けをタイプ別に整理しました。サービスは「型」で性質が大きく異なります。まず自分に合う型を選び、各サービスの詳細評判を確認してください。
        </p>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月</p>

        <DataNote surveyedAt="2026年6月" sources={["各サービス公式サイト", "口コミプラットフォーム（OpenWork・みん評等）の傾向"]} />

        <nav aria-label="目次" className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-700 text-sm mb-3">サービスのタイプ</p>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-blue-600 hover:underline">{t.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {categories.map((cat, ci) => (
          <section key={ci} id={`cat-${ci}`} className="mb-10">
            <h2 className="text-xl font-bold text-slate-800 mb-2">{cat.name}</h2>
            <p className="text-sm text-slate-600 mb-4">{cat.intro}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cat.items.map((it) => (
                <Link
                  key={it.slug}
                  href={`/review/${it.slug}/`}
                  className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors"
                >
                  <h3 className="font-bold text-slate-800 text-sm mb-1">{it.name} の評判 →</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{it.desc}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <section className="mb-4">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/compare/agents/", label: "エンジニア転職エージェントおすすめ比較" },
              { href: "/compare/highclass/", label: "ハイクラス転職の比較" },
              { href: "/compare/freelance-agents/", label: "フリーランスエージェント比較" },
              { href: "/knowledge/how-to-choose/", label: "転職エージェントの選び方" },
              { href: "/knowledge/multiple-agents/", label: "複数エージェントの併用術" },
              { href: "/knowledge/scout/", label: "スカウトの活用法" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                {l.label} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
