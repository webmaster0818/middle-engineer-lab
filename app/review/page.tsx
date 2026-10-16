import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/review/" },
  title: "転職エージェント・スカウト・フリーランス評判一覧【30代40代向け】",
  description:
    "30代・40代ITエンジニア向けに、転職エージェント・ハイクラススカウト・スキル可視化スカウト・フリーランスエージェントの評判と使い分けをタイプ別に整理します。各サービスの強み・向き不向きを比較できます。",
};

const categories = [
  {
    name: "IT特化・総合エージェント（担当が求人を提案）",
    intro: "キャリアアドバイザーが求人提案・面接対策・年収交渉まで伴走するタイプです。初めての転職や手厚いサポートを求める層に適しています。",
    items: [
      { slug: "levtech", name: "レバテックキャリア", desc: "IT/Web特化の正社員転職エージェントです。高年収求人が中心です。" },
      { slug: "geekly", name: "Geekly", desc: "IT/Web/ゲームに特化しています。提案スピードに定評があります。" },
      { slug: "doda-it", name: "doda ITエンジニア", desc: "大手の求人量×IT特化サポート。" },
      { slug: "mynavi-it", name: "マイナビIT AGENT", desc: "20〜30代に手厚い書類・面接サポート。" },
      { slug: "recruit-it", name: "リクルートエージェントIT", desc: "国内最大級の求人量と非公開求人。" },
      { slug: "workport", name: "ワークポート", desc: "全国対応・未経験歓迎求人も豊富な総合型です。" },
      { slug: "type-agent", name: "type転職エージェントIT", desc: "首都圏IT/Webに強く年収交渉に注力しています。" },
      { slug: "cloudlink", name: "クラウドリンク（現AIdea Career）", desc: "自社内開発求人100%でSES脱出に特化しています。" },
      { slug: "willof-tech", name: "ウィルオブテック", desc: "上場ウィルグループ運営。専属2名体制で年収アップに強い経験者向けです。" },
      { slug: "techclips", name: "TechClips", desc: "自社開発企業100%・年収500万円以上に特化しています。首都圏向けです。" },
      { slug: "unison-career", name: "ユニゾンキャリア", desc: "IT/Web業界専門です。未経験〜経験者まで幅広く対応する特化型です。" },
      { slug: "techgate-expert", name: "テックゲートエキスパート", desc: "株式会社セルバ運営。ハイクラスSE・ITコンサルへのキャリアアップに強いです。" },
      { slug: "edb-agent", name: "EDBエージェント", desc: "エンジニアデータバンク運営。実務経験者アドバイザー＋OB/OG面談が特徴です。" },
      { slug: "techgo", name: "テックゴー（TechGo）", desc: "MyVision運営のITに特化しています。模擬面接を何度も実施、年収交渉に強みがあります。" },
    ],
  },
  {
    name: "ハイクラス・スカウト（登録して待つ）",
    intro: "レジュメを登録し、ヘッドハンターや企業からのスカウトを待つタイプです。年収600万円以上のミドル〜ハイクラス向けです。",
    items: [
      { slug: "bizreach-it", name: "ビズリーチ", desc: "ハイクラススカウトの定番です。外資・管理職に強いです。" },
      { slug: "recruit-direct-scout", name: "リクルートダイレクトスカウト", desc: "リクルート系の高年収スカウトです。求人量が豊富です。" },
      { slug: "doda-x", name: "doda X（旧iX転職）", desc: "年収800万円以上比率が高いハイクラススカウトです。" },
      { slug: "jac-recruitment", name: "JACリクルートメント", desc: "両面型ハイクラスです。40代エンジニアに最有力の一つです。" },
      { slug: "tenshoku-draft", name: "転職ドラフト", desc: "企業が年収を提示して指名する競争入札型です。市場価値を金額で確認できます。" },
      { slug: "levtech-direct", name: "レバテックダイレクト", desc: "レバレジーズのIT/Web特化スカウト型です。企業から直接スカウトが届きます（エージェント型のレバテックキャリアとは別商品）。" },
    ],
  },
  {
    name: "スキル可視化・スカウト（エンジニア特化）",
    intro: "GitHubや技術発信を解析して企業からオファーが届くタイプです。コードや発信で実力を示せる現役エンジニア向けです。",
    items: [
      { slug: "findy", name: "Findy", desc: "GitHub連携のスキル偏差値でオファーが届きます。" },
      { slug: "forkwell", name: "Forkwell", desc: "ポートフォリオ＋技術コミュニティが強みです。" },
      { slug: "lapras", name: "LAPRAS", desc: "GitHub以外の発信もAI解析する可視化スカウトです。" },
      { slug: "paiza", name: "paiza転職", desc: "スキルチェックのランクで書類選考免除もあります。" },
      { slug: "green", name: "Green", desc: "企業と直接やり取りする成功報酬型サイトです。" },
      { slug: "wantedly", name: "Wantedly", desc: "共感軸・カジュアル面談型です。給与は原則非記載に注意が必要です。" },
    ],
  },
  {
    name: "フリーランス・独立向けエージェント",
    intro: "業務委託（フリーランス）案件を紹介するタイプです。独立・高単価・副業を目指す経験者向けです。",
    items: [
      { slug: "levtech-freelance", name: "レバテックフリーランス", desc: "案件量・単価で最大手クラスです（正社員転職とは別）。" },
      { slug: "midworks", name: "Midworks", desc: "正社員並みの保障で安定重視のフリーランス向けです。" },
      { slug: "itpropartners", name: "ITプロパートナーズ", desc: "週2〜3日・副業/独立準備に強いです。" },
      { slug: "geechs", name: "ギークスジョブ", desc: "リモート8割超＋福利厚生フリノベです。上場企業運営で安心です。" },
      { slug: "pe-bank", name: "PE-BANK", desc: "マージン完全公開（8〜12%）＋共済会＋全国12拠点です。" },
      { slug: "techreach", name: "TechReach", desc: "エンド直の高単価＋翌月15日支払いです。フルリモート案件も豊富です。" },
      { slug: "engineer-factory", name: "エンジニアファクトリー", desc: "低マージン・エンド直の高単価です。東京大阪圏中心。" },
      { slug: "relance", name: "Relance（リランス）", desc: "スリーシェイク運営。自社開発・プライム中心の高単価×フルリモートです。" },
      { slug: "furien", name: "フリエン（現ココナラテック）", desc: "ココナラグループ運営。直請け中心・支払いサイト選択可。" },
      { slug: "freelance-start", name: "フリーランススタート", desc: "国内最大級の案件検索エンジンです。複数エージェントを横断比較する入口です。" },
    ],
  },
  {
    name: "副業・20代/第二新卒向け（参考）",
    intro: "副業・複業や20代未経験のIT就職に特化したサービスです。当サイト中心読者の30-40代経験者には合致しない場合がある点を整理します。",
    items: [
      { slug: "kasooku", name: "カソーク", desc: "ユナイテッドグループ運営。副業・複業から相性を見て転職にもつなげられます。" },
      { slug: "uzuz-it", name: "ウズキャリIT", desc: "UZUZ運営。20代・未経験のIT就職向けです。30-40代は対象外気味と明記します。" },
    ],
  },
  {
    name: "コンサル・キャリアチェンジ特化",
    intro: "ITコンサル・PM・DX人材へのキャリアチェンジを狙う層向けです。純粋な開発職志向には不向きな点に注意が必要です。",
    items: [
      { slug: "axis-consulting", name: "アクシスコンサルティング（AXIS Agent）", desc: "コンサル業界に特化しています。ポストコンサル・CxO層に強いです。" },
      { slug: "meiko-career", name: "明光キャリアパートナーズ（STRATEGY CAREER）", desc: "東証プライム明光ネットワークジャパン（明光義塾）グループです。M&A・コンサル等のハイキャリア＋エンジニア転職。" },
    ],
  },
];

const allItems = categories.flatMap((c) => c.items);

const toc = categories.map((c, i) => ({ id: `cat-${i}`, label: c.name }));

export default function ReviewIndexPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "転職サービス評判一覧 - CareeHUB for Mid Engineer",
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
                <a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a>
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
                  className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors"
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
              <Link key={l.href} href={l.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
                {l.label} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
