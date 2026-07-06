import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "Webデザイナーからフロントエンドエンジニアへの転職｜移行ステップ";
const DESC =
  "Webデザイナーからフロントエンドエンジニアへキャリアチェンジする進め方を、スキルギャップ比較表・学習ステップ・職務経歴書のBefore/After例文付きで解説。30代40代の現実も正直に紹介します。";
const URL = "/career/designer-to-frontend/";

export const metadata: Metadata = { alternates: { canonical: "/career/designer-to-frontend/" }, title: TITLE, description: DESC };

const toc = [
  { id: "conclusion", label: "結論：現実性と正直な難度" },
  { id: "gap", label: "スキルギャップ比較表" },
  { id: "build", label: "必要スキルの身につけ方" },
  { id: "steps", label: "移行ステップ（在職中の準備）" },
  { id: "resume", label: "職務経歴書での見せ方（Before/After）" },
  { id: "salary", label: "年収の考え方" },
  { id: "agents", label: "活動で使うエージェント" },
  { id: "midage", label: "30代・40代の現実と進め方" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const gapRows = [
  { axis: "HTML/CSS", designer: "○ コーディング経験がある場合も多い", front: "◎ セマンティック・レスポンシブ実装が前提", gap: "中" },
  { axis: "JavaScript/TypeScript", designer: "△ 軽い実装どまりのことが多い", front: "◎ 言語仕様・型・非同期まで必要", gap: "大" },
  { axis: "モダンフレームワーク（React等）", designer: "× 未経験のことが多い", front: "◎ React/Next.js等のSPA開発が中核", gap: "大" },
  { axis: "UI/UX・デザイン理解", designer: "◎ 設計・視覚表現が本職", front: "○ 実装に直結する大きな強みになる", gap: "活用" },
  { axis: "開発プロセス・Git", designer: "△ 触れる機会が限定的", front: "◎ チーム開発の作法が前提", gap: "中" },
  { axis: "アクセシビリティ", designer: "○ デザイン観点での配慮はある", front: "◎ WAI-ARIA等の実装まで", gap: "中" },
];

const buildSteps = [
  { title: "JavaScript/TypeScriptを実務レベルにする", desc: "デザイナーの強みであるHTML/CSSの上に、JavaScript（TypeScript）の言語仕様・型・非同期処理を積み増します。軽い動きの実装どまりだった部分を、ロジックを自分で書ける水準まで引き上げます。" },
  { title: "React/Next.jsを習得する", desc: "現在のフロント求人の中心はReact系です。コンポーネント設計・フック・状態管理・ルーティングを学び、デザインの構造化センスをコンポーネント分割に活かします。デザイン視点はそのまま設計力になります。" },
  { title: "デザイン×実装の作品を作り切る", desc: "自分でデザインしたUIをReactで実装し、API連携・レスポンシブ・アクセシビリティまで備えたアプリを公開します。『デザインも実装もできる』という希少性を、動く成果物で見せられます。" },
  { title: "開発プロセス・Gitに慣れる", desc: "GitでのPRレビュー、Issue管理、CIなどチーム開発の作法を、個人プロジェクトやOSS貢献で体験します。デザイナー時代に手薄になりがちな『エンジニアとしての協働』を補強します。" },
];

const migrationSteps = [
  { phase: "0〜2ヶ月", title: "現在地の棚卸しと基礎固め", desc: "HTML/CSSやデザインツールの経験を棚卸しし、JavaScript（TypeScript）の不足分を特定します。デザイナーとしてのコーディング経験の有無で学習計画が変わります。" },
  { phase: "2〜6ヶ月", title: "React＋作品制作", desc: "React/Next.jsを学びながら、自分でデザインしたUIを実装した作品を1〜2本作り、GitHubに公開します。デザインの引き出しを活かし、見た目だけでなく使いやすさと実装品質を両立させます。" },
  { phase: "6〜7ヶ月", title: "職務経歴書をエンジニア文脈へ", desc: "『デザインした・コーディングした』から『UIをどう設計し、どう実装して動かしたか』へ表現を転換します。デザインと実装を橋渡しできる強みを言語化します（後述のBefore/After参照）。" },
  { phase: "7ヶ月〜", title: "応募とデザイン強みの活用", desc: "純粋なフロント職だけでなく、デザインエンジニア・UIエンジニアなどデザイン素養を求めるポジションも有力です。在職中に進め、条件を固めてから動きます。" },
];

const agents = [
  { name: "レバテックキャリア", point: "IT/Web特化で技術理解のあるアドバイザーが在籍。デザイン経験を活かせるフロント／UIエンジニア求人の相談に向きます。", href: "/review/levtech/" },
  { name: "リクルートエージェント（IT）", point: "国内最大級の求人数。Web系の求人が豊富で、キャリアチェンジを含む転職でも選択肢を確保しやすい。", href: "/review/recruit-it/" },
  { name: "ビズリーチ", point: "ハイクラス・スカウト型。デザインエンジニアなど、デザイン×実装を評価するポジションのスカウトを受けられる可能性があります。", href: "/review/bizreach-it/" },
];

const faqs = [
  { q: "Webデザイナーからフロントエンドへの転職は現実的？", a: "HTML/CSSやデザインの素養が土台になるため、まったくの異職種よりは移行しやすい部類です。ただしJavaScript/TypeScriptとReact等のフレームワークは新たに習得が必要で、ここを成果物で示せるかが現実性を左右します。" },
  { q: "コーディング経験がないデザイナーでも大丈夫？", a: "可能ですが、HTML/CSSのコーディング経験がある人より学習量は増えます。まずHTML/CSSから固め、JavaScript、Reactと段階的に進めるのが現実的です。継続できるかを早めに見極めることが大切です。" },
  { q: "デザインのスキルはフロントで評価される？", a: "強く評価されます。UI/UXの設計力、視覚表現、アクセシビリティへの配慮は実装に直結し、『デザインも実装もできる』人材は希少で重宝されます。デザインエンジニア・UIエンジニアという職種では特に強みになります。" },
  { q: "どのフレームワークを学ぶべき？", a: "求人数の多いReact／Next.jsが第一候補です。デザインの構造化センスはコンポーネント設計に活き、学習の土台になります。1つを実務レベルまで深めることを優先しましょう。" },
  { q: "年収は上がる？下がる？", a: "断定はできません。デザイナーの年収水準やフロント側の入社等級により変わります。デザイン×実装の希少性を示せれば維持・上振れも狙えますが、ジュニア相当で入ると一時的に下がる場合もあります。提示額は書面で確認しましょう。" },
  { q: "30代・40代でも移行できる？", a: "可能ですが、年齢が上がるほどポテンシャル枠は狭くなるのが現実です。だからこそ、デザインという即戦力の強みを実装と掛け合わせ、『なぜこの年齢でエンジニアに』に一貫した答えを用意することが重要です。デザイン×実装の作品が説得力になります。" },
  { q: "デザインエンジニアという選択肢は？", a: "デザインと実装を両立する職種で、デザイナー出身の強みを最も活かしやすい入口の一つです。純粋なフロント職に正面から挑むより、これまでの経験が差別化要因になりやすく、検討する価値があります。" },
];

const related = [
  { name: "バックエンド→フロントエンド転職", href: "/career/backend-to-frontend/" },
  { name: "フロントエンドのスキルと転職ガイド", href: "/skill/frontend/" },
  { name: "Reactのスキルと転職ガイド", href: "/skill/react/" },
  { name: "30代未経験からのエンジニア転職", href: "/knowledge/inexperienced-30s/" },
  { name: "ポートフォリオの作り方", href: "/knowledge/portfolio/" },
  { name: "職務経歴書の書き方ガイド", href: "/knowledge/resume/" },
];

export default function DesignerToFrontendPage() {
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
      <ArticleJsonLd title={TITLE} description={DESC} url={URL} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "Webデザイナー→フロントエンド転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Webデザイナーからフロントエンドエンジニアへの転職｜移行ステップ
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | デザインの強みを実装力と掛け合わせて移行する
        </p>

        <p className="text-slate-600 leading-relaxed mb-2">
          「自分のデザインを自分で動かしたい」「実装まで担える幅広い人材になりたい」という動機で、Webデザイナーからフロントエンドエンジニアへキャリアチェンジする人がいます。HTML/CSSやデザインの素養が土台になる一方、JavaScript/TypeScriptとReact等は新たな習得が必要です。本記事は難しさも正直に踏まえつつ、スキルギャップの可視化・在職中の学習ステップ・職務経歴書の書き換え例を解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省 job tag（Webデザイナー／システムエンジニア・Webサイト開発）",
            "レバテック公表 年代別平均年収（2025年）",
            "doda 2024年度決定年収レポート（パーソルキャリア）",
          ]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：デザインは強い武器。鍵はJSとReactの習得</h2>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・HTML/CSSとデザインの素養が土台。まったくの異職種より移行しやすい部類。</li>
              <li>・ギャップが大きいのは「JavaScript/TypeScript」と「React等のフレームワーク」。成果物が決め手。</li>
              <li>・デザイン×実装の希少性は強み。デザインエンジニア・UIエンジニアという入口も有力。</li>
            </ul>
          </div>
        </section>

        <section id="gap" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルギャップ比較表（Webデザイナー vs フロントエンドエンジニア）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            現職とのギャップを可視化し、「そのまま活きる力」と「埋めるべき力」を切り分けます。◎＝十分／○＝経験あり／△＝補強が必要／×＝未経験が多い、の目安です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-petrol-soft">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">比較軸</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">Webデザイナー（現職）</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">フロントエンド（転職先）</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">ギャップ</th>
                </tr>
              </thead>
              <tbody>
                {gapRows.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200 align-top">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.axis}</td>
                    <td className="px-4 py-3 text-slate-600">{row.designer}</td>
                    <td className="px-4 py-3 text-slate-600">{row.front}</td>
                    <td className="px-4 py-3 text-slate-600">{row.gap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="build" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">必要スキルの身につけ方</h2>
          <div className="space-y-4">
            {buildSteps.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{i + 1}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">移行ステップ（在職中にできる準備）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            プログラミングの学習を伴うため期間が長くなりやすい転職です。在職中に少しずつ進める前提で、目安スケジュールを示します。
          </p>
          <div className="space-y-4">
            {migrationSteps.map((s, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-bold text-white bg-slate-700 rounded px-2 py-1">{s.phase}</span>
                  <h3 className="font-bold text-slate-800">{s.title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="resume" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">職務経歴書での見せ方（Before/After例文）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            デザイナーの職務経歴書は「デザイン・コーディング」が中心になりがちですが、フロント選考では「UIをどう設計し、どう実装して動かしたか」と「デザインと実装を橋渡しできる強み」を語る形が刺さります。書き換え例を示します。
          </p>
          <div className="space-y-4">
            <div className="border border-red-200 rounded-lg p-5 bg-red-50/40">
              <p className="font-bold text-red-700 text-sm mb-2">Before（デザイン制作の羅列）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                コーポレートサイトやLPのデザインを担当。Figmaでデザインカンプを作成し、HTML/CSSでコーディング。レスポンシブ対応やバナー制作も行った。
              </p>
            </div>
            <div className="border border-emerald-200 rounded-lg p-5 bg-emerald-50/40">
              <p className="font-bold text-emerald-700 text-sm mb-2">After（設計・実装と希少性を主語に）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                個人開発で自身がデザインしたUIをReact/Next.js・TypeScriptで実装し、API連携・状態管理・レスポンシブ・アクセシビリティ（WAI-ARIA）まで対応してデプロイ。デザイン経験を活かしコンポーネント設計とデザインシステムを構築した。デザインと実装を一貫して担える点が強み。GitHubでコードを公開。
              </p>
            </div>
          </div>
          <p className="text-slate-500 text-xs mt-3">
            ※技術・実績は自分のものに置き換えてください。型は<Link href="/knowledge/resume/" className="text-petrol hover:underline">職務経歴書の書き方ガイド</Link>と<Link href="/knowledge/portfolio/" className="text-petrol hover:underline">ポートフォリオの作り方</Link>を参照。
          </p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            相場の基準として、厚生労働省 job tag のWebデザイナーの平均年収は478.7万円・平均年齢36.8歳、システムエンジニア（Webサイト開発）の平均年収は550.9万円・平均年齢38.4歳（いずれも令和7年賃金構造基本統計調査ベース）です。職種間の平均には差があり、実装力を身につけてフロント側へ移ることで、中長期的に年収を伸ばせる可能性があります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            ただし入社時の等級により、ジュニア相当で入ると一時的に下がる場合もあります。デザイン×実装の希少性を成果物で示せれば、下げ幅を抑えやすくなります。転職者全体では、doda（パーソルキャリア）の2024年度決定年収レポート（2025年5月公表）でIT・通信の平均決定年収が469万円（2023年度）→486万円（2024年度）と推移しています。提示額は採用ポジション・等級で決まるため、必ず書面で確認しましょう。
          </p>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">活動で使うエージェント</h2>
          <div className="space-y-3">
            {agents.map((agent, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">
                  <Link href={agent.href} className="text-petrol-deep hover:underline">{agent.name}</Link>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{agent.point}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="midage" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の現実と進め方</h2>
          <p className="text-slate-600 leading-relaxed mb-3">
            正直にお伝えすると、30代・40代でのキャリアチェンジは、年齢が上がるほどポテンシャル採用の枠が狭くなります。ただしデザイナーからフロントへの移行は、HTML/CSSとデザインという即戦力の強みを持ち込めるため、まったくの未経験職種への転換よりは戦いやすい部類です。
          </p>
          <p className="text-slate-600 leading-relaxed mb-3">
            鍵は、デザインという強みを実装と掛け合わせ、「なぜこの年齢でエンジニアに移るのか」に一貫した答えを用意することです。純粋なフロント職に正面から挑むより、デザインエンジニア・UIエンジニアなど、デザイン素養が差別化要因になる入口を選ぶと勝率が上がります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            在職中に学習を始め、デザイン×実装の作品を1つ作って続けられるかを見極めましょう。<Link href="/knowledge/inexperienced-30s/" className="text-petrol hover:underline">30代未経験からのエンジニア転職</Link>も参考になります。年収は<Link href="/knowledge/salary-30s/" className="text-petrol hover:underline">30代の年収相場</Link>・<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収相場</Link>も確認しておきましょう。
          </p>
        </section>

        <section id="faq" className="mb-10 scroll-mt-20">
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
          <h2 className="text-xl font-bold mb-3">フロントエンド転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">デザイン経験を活かせるフロント／デザインエンジニア求人をプロが提案します。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
