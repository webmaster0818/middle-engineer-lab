import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "営業からエンジニアへの転職｜30代40代の現実と移行ステップ";
const DESC =
  "営業職からエンジニアへ未経験で転職する進め方を、スキルギャップ比較表・学習ステップ・職務経歴書のBefore/After例文付きで解説。30代40代で難度が上がる現実も正直に紹介します。";
const URL = "/career/sales-to-engineer/";

export const metadata: Metadata = { title: TITLE, description: DESC };

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
  { axis: "プログラミング", sales: "× 未経験。ゼロからの習得が必要", engineer: "◎ 自走できる開発スキルが必須", gap: "特大" },
  { axis: "開発プロセス・ツール", sales: "× Git・テスト等に触れていない", engineer: "◎ チーム開発の作法が前提", gap: "大" },
  { axis: "論理的思考・課題解決", sales: "○ 提案・課題発見で鍛えている", engineer: "◎ 設計・デバッグに流用できる", gap: "活用" },
  { axis: "コミュニケーション・折衝", sales: "◎ 顧客折衝・調整が得意", engineer: "○ 要件定義・チーム連携で活きる", gap: "活用" },
  { axis: "ドメイン・業務知識", sales: "◎ 担当業界の業務理解が深い", engineer: "○ 業務システム開発で差別化要因に", gap: "活用" },
  { axis: "継続的な技術学習", sales: "△ 自走学習の習慣づけが必要", engineer: "◎ 学び続ける姿勢が前提", gap: "中" },
];

const buildSteps = [
  { title: "言語を1つ実務レベルまで習得する", desc: "Webエンジニアを目指すならHTML/CSS/JavaScript（TypeScript）から、業務システムならJava/C#なども選択肢です。文法だけでなく、エラーハンドリングや非同期処理まで自分で書ける水準を目指します。" },
  { title: "Webアプリを一から作り切る", desc: "認証・CRUD・DB連携・デプロイまで含む小規模アプリを通しで構築します。未経験転職で最も説得力のある証拠は『動くものを公開した』実績です。営業の課題発見力は、作るものの要件定義に活きます。" },
  { title: "チーム開発の作法に慣れる", desc: "GitでのPRレビュー、Issue管理、CIなどの開発プロセスを、OSS貢献や勉強会参加を通じて体験します。実装単独より『チームで開発を回せそう』と思われることが、ミドルの未経験では特に重要です。" },
  { title: "営業の強みを技術と結びつける", desc: "顧客折衝・ドメイン知識・提案力は、要件定義やフロント開発、技術営業（セールスエンジニア）寄りのポジションで武器になります。『なぜ自分が開発側に来るのか』を強みと結びつけて語れるようにします。" },
];

const migrationSteps = [
  { phase: "0〜3ヶ月", title: "適性確認と基礎学習", desc: "まず無料教材や入門書でプログラミングに触れ、続けられそうかを見極めます。営業を続けながら学習習慣を作り、向き不向きを早期に確認することが、年齢的にも重要です。" },
  { phase: "3〜8ヶ月", title: "ポートフォリオ制作", desc: "公開できるWebアプリを1〜2本作り、GitHubに履歴を残します。READMEに『なぜ作ったか・どう設計したか』を書くと、コードと考え方の両方を見てもらえます。ミドルの未経験では成果物の質が選考を左右します。" },
  { phase: "8〜10ヶ月", title: "職務経歴書を開発文脈へ", desc: "『売った・達成した』だけでなく『課題をどう捉え、何を作って解決したか』へ表現を加えます。営業の強み（折衝・ドメイン）を開発でどう活かすかを言語化します（後述のBefore/After参照）。" },
  { phase: "10ヶ月〜", title: "応募と現実的なポジション選び", desc: "純粋な開発職だけでなく、技術営業・社内SE・自社サービスの業務寄りポジションなど、ドメイン知識が活きる入口も検討します。在職中に進め、条件を固めてから動きます。" },
];

const agents = [
  { name: "リクルートエージェント（IT）", point: "国内最大級の求人数。未経験要素のある転職でも選択肢を広く確保でき、営業からのキャリアチェンジ相談にも対応しやすい。", href: "/review/recruit-it/" },
  { name: "レバテックキャリア", point: "IT/Web特化。技術力を重視する求人が中心のため、ポートフォリオで自走力を示せるかが鍵。要件のすり合わせに使えます。", href: "/review/levtech/" },
  { name: "ビズリーチ", point: "ハイクラス・スカウト型。技術営業（セールスエンジニア）など、営業経験＋技術を活かせるポジションのスカウトを受けられる可能性があります。", href: "/review/bizreach-it/" },
];

const faqs = [
  { q: "営業からエンジニアへの転職は現実的？", a: "未経験職種への転換のため、難度は高めです。特に年齢が上がるほど難しくなります。ただし不可能ではなく、半年〜1年の学習で自走できる開発スキルとポートフォリオを用意し、ドメイン知識が活きる入口を選べば現実的に挑戦できます。" },
  { q: "なぜこの年齢で営業からエンジニアに？と聞かれたら？", a: "面接で必ず問われる質問です。『手を動かして課題を解決したい』『担当業界の業務を技術で改善したい』など、これまでの経験と結びついた一貫性のある動機を語れることが重要です。思いつきではないと示せるかが選考を左右します。" },
  { q: "プログラミングはどれくらいできれば応募できる？", a: "目安は、1つの言語で小〜中規模のWebアプリを一から作り、デプロイまで自走できるレベルです。未経験のハンデを埋めるには、公開できる成果物が事実上必須と考えてください。" },
  { q: "営業経験はエンジニア転職で評価される？", a: "評価される場面があります。顧客折衝・要件のヒアリング・提案力・担当業界のドメイン知識は、要件定義や技術営業、業務システム開発で武器になります。ただし最低限の実装力は別途必要です。" },
  { q: "年収は下がる？", a: "未経験からの開発職では、一時的に下がる可能性が高いと考えるのが現実的です。営業のインセンティブ込みの年収が高い場合は特に差が出ます。ドメイン知識を活かせるポジションや技術営業なら、下げ幅を抑えられる場合があります。提示額は書面で確認しましょう。" },
  { q: "スクールに通うべき？", a: "独学で続けられるなら必須ではありませんが、学習の挫折を防ぎ転職支援を受けたい場合は選択肢です。費用と内容を比較し、最終的にはポートフォリオの質で評価される点を念頭に置いてください。" },
  { q: "技術営業（セールスエンジニア）という選択肢は？", a: "営業経験と技術を両立させる職種で、純粋な開発職よりも営業の強みを活かしやすい入口です。開発に深く関わりたい場合は物足りなさもありますが、キャリアの橋渡しとして検討する価値があります。" },
];

const related = [
  { name: "30代未経験からのエンジニア転職", href: "/knowledge/inexperienced-30s/" },
  { name: "ITコンサル→エンジニア転職", href: "/career/consultant-to-engineer/" },
  { name: "未経験から学ぶリスキリングガイド", href: "/knowledge/reskilling/" },
  { name: "ポートフォリオの作り方", href: "/knowledge/portfolio/" },
  { name: "職務経歴書の書き方ガイド", href: "/knowledge/resume/" },
  { name: "30代の転職市場価値の調べ方", href: "/knowledge/market-value/" },
];

export default function SalesToEngineerPage() {
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
          { name: "営業→エンジニア転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          営業からエンジニアへの転職｜30代40代の現実と移行ステップ
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 未経験転職の難度を正直に踏まえ、現実的なルートを示す
        </p>

        <p className="text-slate-600 leading-relaxed mb-2">
          「手を動かしてものづくりに関わりたい」「担当業界の業務を技術で改善したい」という動機で、営業からエンジニアを目指す人がいます。これは未経験職種への転換であり、特に30代・40代では年齢が上がるほど難度が上がるのが現実です。本記事はその難しさを正直に踏まえたうえで、スキルギャップの可視化・在職中の学習ステップ・職務経歴書の書き換え例を具体的に解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省 job tag（システムエンジニア・受託開発）",
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
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：未経験転職で難度は高い。鍵は成果物と動機の一貫性</h2>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・プログラミング未経験からの転換のため難度は高く、年齢が上がるほど厳しくなる（正直な前提）。</li>
              <li>・それでも、自走できる開発スキルとポートフォリオを用意し、ドメイン知識が活きる入口を選べば道はある。</li>
              <li>・営業の折衝力・課題発見力・業務知識は要件定義や技術営業で武器になる。動機の一貫性を語れるかが鍵。</li>
            </ul>
          </div>
        </section>

        <section id="gap" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルギャップ比較表（営業 vs エンジニア）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            現職とのギャップを可視化し、「埋めるべき力」と「そのまま活きる力」を切り分けます。営業からの移行は技術面のギャップが特に大きい一方、活用できる強みもあります。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-petrol-soft">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">比較軸</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">営業（現職）</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">エンジニア（転職先）</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">ギャップ</th>
                </tr>
              </thead>
              <tbody>
                {gapRows.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200 align-top">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.axis}</td>
                    <td className="px-4 py-3 text-slate-600">{row.sales}</td>
                    <td className="px-4 py-3 text-slate-600">{row.engineer}</td>
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
            ゼロからの学習を伴うため、最も期間が長くなりやすい転職です。在職中に少しずつ進め、まず適性を確かめる前提で目安スケジュールを示します。
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
            営業の職務経歴書は「実績・達成」が中心になりがちですが、エンジニア選考では「課題をどう捉え、何を作って解決したか」と「営業の強みを開発でどう活かすか」を語る形が必要です。書き換え例を示します。
          </p>
          <div className="space-y-4">
            <div className="border border-red-200 rounded-lg p-5 bg-red-50/40">
              <p className="font-bold text-red-700 text-sm mb-2">Before（営業実績のみ）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                法人向けにSaaSの新規開拓営業を担当。担当エリアで予算を達成し、複数の大型契約を獲得。顧客の課題ヒアリングから提案、クロージングまでを一貫して担当した。
              </p>
            </div>
            <div className="border border-emerald-200 rounded-lg p-5 bg-emerald-50/40">
              <p className="font-bold text-emerald-700 text-sm mb-2">After（課題解決と自作成果物を主語に）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                法人営業で蓄積した顧客課題への理解をもとに、業務効率化のWebアプリを個人開発で構築（認証・データ管理・デプロイまでをTypeScript/Next.jsで実装、GitHub公開）。営業で培ったヒアリング力を要件定義に、ドメイン知識を機能設計に活かした。継続的に学習し、技術ブログでアウトプットを続けている。
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
            未経験から開発職に入る場合、一時的に年収が下がる可能性が高いと正直に見ておくべきです。特に営業でインセンティブ込みの年収が高かった場合は差が出やすくなります。相場の基準として、厚生労働省 job tag のシステムエンジニア（受託開発）の平均年収は578.5万円・平均年齢37.1歳（令和7年賃金構造基本統計調査ベース）ですが、これは経験者を含む全体の平均であり、未経験スタートの初年度はこれを下回るのが一般的です。
          </p>
          <p className="text-slate-600 leading-relaxed">
            一方で、ドメイン知識を活かせる業務システム開発や技術営業（セールスエンジニア）なら、下げ幅を抑えられる場合があります。中長期では、スキルを積み上げることで巻き返しが可能です。転職者全体の傾向として、doda（パーソルキャリア）の2024年度決定年収レポート（2025年5月公表）ではIT・通信の平均決定年収が469万円（2023年度）→486万円（2024年度）と推移しています。目先の額面だけでなく、数年後を見据えて判断しましょう。
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
            正直にお伝えすると、営業からエンジニアへの未経験転職は、30代・40代では年齢が上がるほど難度が上がります。企業はミドル層に即戦力や育成コストの低さを期待するため、ポテンシャル採用の枠は若手より狭くなるのが実情です。「なぜこの年齢で開発側に来るのか」という問いに、思いつきではない一貫した答えを用意できるかが分かれ目になります。
          </p>
          <p className="text-slate-600 leading-relaxed mb-3">
            だからこそ、ミドルの強みである「担当業界のドメイン知識」「顧客折衝力」「課題発見力」を技術と掛け合わせる戦略が現実的です。純粋な開発職に正面から挑むより、業務システム開発・社内SE・技術営業など、これまでの経験が差別化要因になる入口を選ぶと勝率が上がります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            まずは在職中に学習を始め、続けられるか・向いているかを早期に見極めることが大切です。<Link href="/knowledge/inexperienced-30s/" className="text-petrol hover:underline">30代未経験からのエンジニア転職</Link>や<Link href="/knowledge/reskilling/" className="text-petrol hover:underline">リスキリングガイド</Link>も参考に、現実的な計画を立ててください。年収は<Link href="/knowledge/salary-30s/" className="text-petrol hover:underline">30代の年収相場</Link>・<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収相場</Link>も確認しておきましょう。
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
          <h2 className="text-xl font-bold mb-3">エンジニア転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">営業経験とドメイン知識を活かせる入口を、プロと一緒に探せます。</p>
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
