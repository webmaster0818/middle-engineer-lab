import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "キャリアパス別エンジニア転職ガイド一覧【27ルート】",
  description:
    "エンジニアのキャリアチェンジ・キャリアアップ・職種特化の27パターンを難易度と年収変化つきで分類。30代40代がキャリアパスを選ぶ考え方と、各ルートの実現性を解説します。",
};

const categories = [
  {
    name: "キャリアチェンジ",
    intro: "今の職種から別領域へ移るルート。在職中の準備と見せ方次第で実現性が変わります。",
    paths: [
      { slug: "se-to-web", from: "SE（SIer）", to: "Web系エンジニア", difficulty: "中", salaryChange: "+50〜150万円", desc: "受託からモダン開発へ。最も相談の多い王道ルート。" },
      { slug: "consultant-to-engineer", from: "ITコンサルタント", to: "エンジニア", difficulty: "中", salaryChange: "-50〜+50万円", desc: "上流から実装側へ。技術力の証明が鍵になる。" },
      { slug: "tester-to-developer", from: "テスター/QA", to: "開発エンジニア", difficulty: "中〜高", salaryChange: "+50〜200万円", desc: "品質知見を武器に開発職へ移行する道筋。" },
      { slug: "support-to-infra", from: "ヘルプデスク/運用", to: "インフラエンジニア", difficulty: "中", salaryChange: "+50〜150万円", desc: "運用経験を土台にクラウド構築側へ。" },
      { slug: "engineer-to-consultant", from: "エンジニア", to: "ITコンサルタント", difficulty: "中", salaryChange: "+100〜300万円", desc: "技術力を活かし上流・高年収を狙う。" },
      { slug: "domestic-to-foreign", from: "日系企業", to: "外資系IT企業", difficulty: "高", salaryChange: "+200〜500万円", desc: "英語と選考対策が必須。年収インパクト大。" },
      { slug: "sales-to-engineer", from: "営業", to: "エンジニア", difficulty: "高", salaryChange: "-150〜±0万円", desc: "未経験転職で難度高。成果物と動機の一貫性が鍵。" },
      { slug: "designer-to-frontend", from: "Webデザイナー", to: "フロントエンドエンジニア", difficulty: "中〜高", salaryChange: "-50〜+100万円", desc: "デザイン強みを実装と掛け合わせ希少性で勝負。" },
      { slug: "ses-to-jigyo", from: "SES（客先常駐）", to: "自社開発エンジニア", difficulty: "中〜高", salaryChange: "横ばい〜上昇", desc: "人気ルートだが選考でポートフォリオ・主体性が問われる。" },
      { slug: "embedded-to-web", from: "組込みエンジニア", to: "Web系エンジニア", difficulty: "高", salaryChange: "横ばい〜一時減", desc: "低レイヤ基礎力と品質文化は武器。文化差の学習が前提。" },
    ],
  },
  {
    name: "キャリアアップ",
    intro: "役割・ポジションを上げるルート。マネジメントや裁量の拡大を志向する人向けです。",
    paths: [
      { slug: "pm-to-cto", from: "PM", to: "CTO/VPoE", difficulty: "高", salaryChange: "+200〜500万円", desc: "技術組織の責任者へ。経営視点が問われる。" },
      { slug: "tech-lead", from: "シニアエンジニア", to: "テックリード", difficulty: "中", salaryChange: "+100〜200万円", desc: "技術と人を束ねるリーダー職への一歩。" },
      { slug: "corporate-to-startup", from: "大企業エンジニア", to: "スタートアップCTO", difficulty: "高", salaryChange: "±0〜+SO", desc: "裁量とストックオプションを取りに行く。" },
      { slug: "startup-to-corporate", from: "スタートアップ", to: "大企業エンジニア", difficulty: "低〜中", salaryChange: "+50〜200万円", desc: "安定と待遇を求めて大手へ移る選択。" },
      { slug: "freelance-to-permanent", from: "フリーランス", to: "正社員", difficulty: "低", salaryChange: "-100〜+50万円", desc: "安定や役割拡大を理由に正社員へ戻る道。" },
      { slug: "engineer-to-em", from: "現場エンジニア", to: "エンジニアリングマネージャー", difficulty: "中", salaryChange: "横ばい〜上昇", desc: "個人の成果からチームの成果へ。ミドルの王道パス。" },
      { slug: "se-to-pm", from: "SE", to: "プロジェクトマネージャー", difficulty: "中", salaryChange: "上昇傾向", desc: "上流・技術判断が土台。QCD全体管理と折衝がギャップ。" },
      { slug: "pg-to-se", from: "プログラマー", to: "システムエンジニア", difficulty: "低〜中", salaryChange: "上昇傾向", desc: "実装経験を設計力の土台に。王道のステップアップ。" },
      { slug: "manager-to-ic", from: "管理職", to: "現場エンジニア（IC）", difficulty: "高", salaryChange: "横ばい〜一時減", desc: "技術キャッチアップが最大の壁。直近のコードで証明。" },
    ],
  },
  {
    name: "職種特化",
    intro: "専門領域を深めて希少性を高めるルート。需要の伸びる領域で年収アップを狙えます。",
    paths: [
      { slug: "backend-to-fullstack", from: "バックエンド", to: "フルスタック", difficulty: "中", salaryChange: "+50〜150万円", desc: "対応範囲を広げて市場価値を底上げ。" },
      { slug: "sre", from: "インフラ/開発", to: "SRE", difficulty: "中〜高", salaryChange: "+100〜250万円", desc: "信頼性エンジニアリングで高需要・高年収。" },
      { slug: "devsecops", from: "開発/インフラ", to: "DevSecOps", difficulty: "中〜高", salaryChange: "+100〜200万円", desc: "セキュリティ×開発の希少ポジション。" },
      { slug: "cre", from: "CS/開発", to: "CRE（顧客信頼性）", difficulty: "中", salaryChange: "+50〜150万円", desc: "顧客対応と技術を橋渡しする新興職種。" },
      { slug: "infra-to-sre", from: "インフラエンジニア", to: "SRE", difficulty: "中", salaryChange: "-50〜+150万円", desc: "運用経験を信頼性改善力に翻訳。コードで解く力が鍵。" },
      { slug: "frontend-to-backend", from: "フロントエンド", to: "バックエンド", difficulty: "中", salaryChange: "±0〜+100万円", desc: "同じ開発職内の移行。API・DB設計を成果物で示す。" },
      { slug: "backend-to-frontend", from: "バックエンド", to: "フロントエンド", difficulty: "中", salaryChange: "-50〜+100万円", desc: "設計力を流用しReactとUI/UXを習得して移行。" },
      { slug: "data-analyst-to-scientist", from: "データアナリスト", to: "データサイエンティスト", difficulty: "中〜高", salaryChange: "±0〜+150万円", desc: "SQL・ビジネス理解を土台に統計と機械学習を証明。" },
    ],
  },
];

const allPaths = categories.flatMap((c) => c.paths);

const toc = [
  { id: "guide", label: "キャリアパスの選び方" },
  ...categories.map((c, i) => ({ id: `cat-${i}`, label: c.name })),
];

export default function CareerIndexPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "キャリアパス別エンジニア転職ガイド一覧",
    description:
      "エンジニアのキャリアチェンジ・キャリアアップ・職種特化の27パターンを分類した一覧ページ。",
    url: "https://middle-engineer.com/career/",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: allPaths.length,
      itemListElement: allPaths.map((path, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://middle-engineer.com/career/${path.slug}/`,
        name: `${path.from}→${path.to}キャリアパス`,
      })),
    },
  };

  return (
    <>
      <ArticleJsonLd
        title="キャリアパス別エンジニア転職ガイド一覧【27ルート】"
        description="エンジニアのキャリアチェンジ・キャリアアップ・職種特化の27パターンを分類した一覧ページ。"
        url="/career/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          キャリアパス別エンジニア転職ガイド一覧【27ルート】
        </h1>
        <p className="text-slate-600 leading-relaxed mb-4">
          エンジニアの転職は「同じ職種で会社を変える」だけではありません。職種を変える、役割を上げる、専門を深めるなど、進む方向によって難易度も年収の変化も大きく異なります。本ページでは代表的な{allPaths.length}のキャリアパスを3カテゴリに分類し、難易度・年収変化の目安とともに各ルートのガイドへ案内します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={["厚生労働省 job tag", "doda・レバテック公表値", "各サービス公式サイト"]}
        />

        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月｜難易度・年収変化は一般的な傾向の目安であり、個人の経歴・市況により変わります。
        </p>

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ガイド: キャリアパスの選び方 */}
        <section id="guide" className="mb-12">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キャリアパスの選び方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            キャリアパスを選ぶときは「やりたい方向」と「現実的に通る道」を分けて考えるのがコツです。30代・40代の場合、次の3点を押さえると選択の精度が上がります。
          </p>
          <ul className="space-y-3 text-slate-600 leading-relaxed list-disc pl-5 mb-4">
            <li>
              <span className="font-medium text-slate-700">現職の経験との地続き感</span>
              ：いまの経験を一部でも活かせるルートほど難易度が下がります。表に示した「難易度」は、経験の流用しやすさをおおまかに反映しています。
            </li>
            <li>
              <span className="font-medium text-slate-700">年収の上下と納得感</span>
              ：コンサルや外資、SREのように上振れしやすい道がある一方、フリーランスから正社員への転換のように一時的に下がる選択もあります。短期の年収だけでなく、数年後の到達点で比較しましょう。
            </li>
            <li>
              <span className="font-medium text-slate-700">在職中にできる準備</span>
              ：多くのルートは、副業・個人開発・社内での役割拡大など、在職中の積み上げで通過率が変わります。各ガイドでは「移行ステップ」と「職務経歴書での見せ方」を具体的に解説しています。
            </li>
          </ul>
          <p className="text-slate-600 leading-relaxed">
            気になるルートを2〜3本ピックアップし、難易度と年収変化を見比べてから、各ガイドで必要スキルと準備手順を確認するのがおすすめです。
          </p>
        </section>

        {/* カテゴリ別 */}
        {categories.map((category, ci) => (
          <section key={category.name} id={`cat-${ci}`} className="mb-10">
            <h2 className="text-xl font-bold text-slate-800 mb-2 pb-2 border-b border-slate-200">
              {category.name}
            </h2>
            <p className="text-sm text-slate-600 mb-4">{category.intro}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {category.paths.map((path) => (
                <Link
                  key={path.slug}
                  href={`/career/${path.slug}/`}
                  className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors group"
                >
                  <h3 className="font-bold text-slate-800 text-sm mb-1 group-hover:text-petrol transition-colors">
                    {path.from} → {path.to}
                  </h3>
                  <p className="text-xs text-slate-600 mb-2">{path.desc}</p>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded">
                      難易度: {path.difficulty}
                    </span>
                    <span className="bg-petrol-soft text-petrol-deep px-2 py-1 rounded font-medium">
                      年収 {path.salaryChange}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* 関連 */}
        <section className="mb-10">
          <h2 className="text-lg font-bold text-slate-800 mb-4">キャリア設計に役立つガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <Link href="/knowledge/career-plan/" className="text-petrol hover:underline">→ キャリアプランの立て方</Link>
            <Link href="/knowledge/market-value/" className="text-petrol hover:underline">→ 自分の市場価値の調べ方</Link>
            <Link href="/skill/" className="text-petrol hover:underline">→ スキル別の転職戦略を見る</Link>
            <Link href="/company/" className="text-petrol hover:underline">→ 企業別の転職ガイドを見る</Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">キャリアチェンジを相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントがあなたの経歴に合ったキャリアパスを提案してくれます。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>
      </article>
    </>
  );
}
