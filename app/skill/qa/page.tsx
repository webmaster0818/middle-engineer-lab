import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "QAエンジニアの転職完全ガイド｜年収・資格・自動化の攻め方【2026年】";
const PAGE_DESC =
  "QAエンジニアの転職市場を2026年最新の公表データで解説。テストエンジニアとの違い、経験段階別の年収目安、JSTQB等の資格、テスト自動化が年収を分ける理由、開発職への転向ルートを30代・40代向けにまとめました。";

export const metadata: Metadata = {
  alternates: { canonical: "/skill/qa/" },
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "diff", label: "まず：QAエンジニアとテストエンジニアの違い" },
  { id: "conclusion", label: "結論：QA転職市場の攻め方" },
  { id: "market", label: "市場・年収データ（経験段階別）" },
  { id: "auto", label: "テスト自動化が年収の分岐点" },
  { id: "cert", label: "資格（JSTQB / QC検定 / IVEC）" },
  { id: "path", label: "キャリアパスと開発職への転向" },
  { id: "find", label: "求人の探し方" },
  { id: "entry", label: "未経験・働きやすさの実情" },
  { id: "middle", label: "30代・40代の視点" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "QAエンジニアとテストエンジニアの違いは何ですか？",
    a: "ざっくり言うと、QAエンジニアは「品質をどう担保するか」を上流から設計する役割、テストエンジニアは「決められたテストを実行・記録する」役割が中心です。実際には企業によって呼称や境界が曖昧で、テスト実行から入ってQA設計へ広げるキャリアが一般的です。QAは品質保証プロセス・テスト戦略・自動化方針の策定まで踏み込むため、年収レンジも上に伸びやすい傾向があります。",
  },
  {
    q: "QAエンジニアの年収はどのくらいですか？",
    a: "リクルートエージェントが公表するテスト・QA系職種の想定年収は約575万円で、業界別ではコンサル約750万円・機械電気約735万円と幅があります（2026年6月時点・リクルートエージェント想定年収）。経験段階別の目安としては、ジュニア層が約350万円、テスト設計・リードクラスで約500万円、上級で600万円以上というレンジが各社情報で語られます（各社推定・幅あり）。自動化スキルの有無で大きく差が開く点が特徴です。",
  },
  {
    q: "テスト自動化はやはり必須ですか？",
    a: "年収を上げたいなら実質必須です。Selenium・Playwright等のツールと、Python・JavaScript・Javaのいずれかでテストコードを書ける力が、手動テスト中心の層との明確な分岐点になります。CI/CDに自動テストを組み込んだ経験は特に評価され、SDET（Software Development Engineer in Test）と呼ばれる開発寄りのQA職に接続できます。",
  },
  {
    q: "QAエンジニアに資格は必要ですか？",
    a: "必須ではありませんが、JSTQB Foundation Levelはテスト設計の共通言語を証明でき、書類段階で有利に働きます。Advanced Levelまで進むとテストマネージャー・アナリストとしての専門性を示せます。製造・品質管理寄りならQC検定、ソフトウェアテスト技能ならIVECも選択肢です。資格より「どんな品質課題をどう解決したか」を語れることが重要です。",
  },
  {
    q: "未経験からQAエンジニアになれますか？",
    a: "比較的入りやすい領域とされ、未経験歓迎の求人も一定数あります。まずテスト実行・テスト設計から入り、自動化・QA設計へ広げるのが王道です。ただし「入りやすい＝低年収で頭打ち」になりやすい面もあるため、早期に自動化スキルや開発知識を身につけ、上流や開発職へ抜ける設計をしておくことをおすすめします。",
  },
  {
    q: "QAから開発エンジニアへ転向できますか？",
    a: "可能で、相性も良い進路です。テスト自動化でコードを書くうちにプログラミング力が育ち、仕様理解・品質視点を持った開発者として評価されます。詳しくは当サイトのテスターから開発者への転向ガイドで、具体的なステップを解説しています。",
  },
  {
    q: "40代でもQAエンジニアへ転職できますか？",
    a: "品質管理・テストマネジメントの経験があれば十分可能です。製造業の品質保証やプロジェクト管理の経験は、ソフトウェアQAの上流（テスト戦略・プロセス改善・チームマネジメント）に転用しやすく、ミドル層の強みになります。一方、手動テスト実行のみの経験は若手と競合しやすいため、自動化・マネジメントいずれかの軸を持つことが鍵です。",
  },
];

const salaryByStage = [
  ["ジュニア（テスト実行中心）", "約350万円", "手動テスト・テストケース消化が中心の入口層"],
  ["テスト設計・リード", "約500万円", "テスト戦略・設計、チームの取りまとめを担う中核層"],
  ["上級（QAマネージャー / SDET）", "600万円以上", "品質保証プロセス設計・自動化基盤・マネジメント"],
];

const certTable = [
  ["JSTQB Foundation Level", "ソフトウェアテスト技術者資格", "テスト設計の共通言語。書類で基礎を示せる入口"],
  ["JSTQB Advanced Level", "テストマネージャー / テストアナリスト等", "上流・専門性を示す。リード以上で評価されやすい"],
  ["QC検定（品質管理検定）", "品質管理の知識を体系的に証明", "製造・品質管理寄りのQAで親和性が高い"],
  ["IVEC", "IT検証技術者認定試験", "ソフトウェアテスト・検証の実務スキルを段階評価"],
];

export default function QaSkillPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/skill/qa/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "QAエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          QAエンジニアの転職完全ガイド｜年収・資格・自動化の攻め方【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | QAスキルを活かした転職を30代・40代エンジニア向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          ソフトウェアの品質保証を担うQAエンジニアは、開発スピードと品質の両立が求められる現在、需要が高まっている職種です。本記事は求人数の比較ではなく、「QAスキルを転職市場でどう価値化するか」という情報意図に絞り、公表データと公式情報をもとに30代・40代エンジニアの戦略を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "リクルートエージェント 職種別想定年収（2026年6月時点・参考値）",
            "レバテック「QAエンジニアとは」解説",
            "JSTQB / QC検定 / IVEC 各公式",
            "本サイト データシート（2026年6月）",
          ]}
        />

        {/* 目次 */}
        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 違い（冒頭差別化） */}
        <section id="diff" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">まず：QAエンジニアとテストエンジニアの違い</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              「QAエンジニア」と「テストエンジニア」は混同されがちですが、市場価値の設計上、最初に押さえておきたい違いがあります。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li><strong>QAエンジニア</strong>＝品質をどう担保するかを<strong>上流から設計</strong>する。テスト戦略・品質保証プロセス・自動化方針の策定まで踏み込む。</li>
              <li><strong>テストエンジニア</strong>＝定義されたテストケースを<strong>実行・記録</strong>するのが中心。テスト実行の品質を担保する。</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-3 text-sm">
              実務では境界が曖昧で、テスト実行から入りQA設計へ広げるキャリアが一般的です。本記事はQAを軸にしつつ、テスト実行からのステップアップにも触れます。なお、ここからさらに「開発エンジニアへ抜ける」進路に関心がある方は、<Link href="/career/tester-to-developer/" className="text-petrol hover:underline">テスターから開発者への転向ガイド</Link>が直接の続きになります。
            </p>
          </div>
        </section>

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：QA転職市場の攻め方</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              QAエンジニアの転職は、<strong>「手動テスト実行」から「品質設計＋自動化」へ役割を上げて見せられるか</strong>で年収が大きく変わります。攻め方は次の3点です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>テスト自動化</strong>（Selenium/Playwright＋Python/Java）を年収の分岐点と捉える</li>
              <li>② <strong>JSTQB</strong>で設計の共通言語を示し、上流（テスト戦略）の経験を言語化する</li>
              <li>③ 将来の伸びしろとして<strong>SDET・開発職への接続</strong>を視野に入れておく</li>
            </ul>
          </div>
        </section>

        {/* 市場・年収 */}
        <section id="market" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">市場・年収データ（経験段階別）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            リクルートエージェントが公表するテスト・QA系職種の想定年収は<strong>約575万円</strong>で、業界別ではコンサルティング約750万円、機械・電気約735万円と幅があります（2026年6月時点・リクルートエージェント想定年収。求人構成により変動するため目安です）。QAは経験段階による差が大きい職種のため、レンジで把握するのが実態に合います。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">段階</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年収目安</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">役割の位置づけ</th>
                </tr>
              </thead>
              <tbody>
                {salaryByStage.map(([stage, salary, note], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{stage}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{salary}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: 段階別の年収目安は各社が公表する求人・市場情報に基づく推定で、幅があります（各社推定）。職種全体の想定年収はリクルートエージェント（2026年6月時点・参考値）。レバテックの「QAエンジニアとは」解説も一次的な解説情報として広く参照されています。市場全体では、経済産業省「IT人材需給に関する調査」（2019年3月公表）が2030年に最大約79万人のIT人材不足を試算しており、品質保証人材の需給も逼迫傾向が続く前提で語られます。
          </p>
        </section>

        {/* 自動化 */}
        <section id="auto" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">テスト自動化が年収の分岐点</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            QAの年収を左右する最大の要素は、手動テスト中心か、自動化まで担えるかです。自動化スキルは「ツールが使える」だけでなく、テストコードを設計・保守し、CI/CDに組み込める段階まで来ると評価が一段上がります。
          </p>
          <div className="space-y-3">
            {[
              { t: "テスト自動化ツール", d: "Selenium（Web UI自動化の定番）、Playwright（モダンなE2E自動化）。Cypress等も含め、どれか一つは実務レベルで使えると強い。" },
              { t: "プログラミング言語", d: "Python・JavaScript/TypeScript・Javaのいずれか。自動テストの記述・保守に必須。言語の選択は対象システムに合わせる。" },
              { t: "CI/CDへの組み込み", d: "GitHub Actions等で自動テストを継続実行する経験。リグレッション工数を削減した実績は面接で効く。" },
              { t: "SDETへの接続", d: "開発と品質保証を横断するSDET（Software Development Engineer in Test）は高年収帯。自動化＋開発知識が前提になる。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            自動化で使う言語は<Link href="/skill/python/" className="text-petrol hover:underline">Python転職ガイド</Link>や<Link href="/skill/typescript/" className="text-petrol hover:underline">TypeScript転職ガイド</Link>も合わせて参考になります。
          </p>
        </section>

        {/* 資格 */}
        <section id="cert" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">資格（JSTQB / QC検定 / IVEC）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            QAは資格必須の職種ではありませんが、テスト設計の共通言語を持つことを示せる資格は書類段階で有効です。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">資格</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">内容</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">転職での位置づけ</th>
                </tr>
              </thead>
              <tbody>
                {certTable.map(([name, desc, note], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{name}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{desc}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-3">出典: JSTQB・QC検定（日本規格協会）・IVEC（IT検証産業協会）各公式（2026年6月時点）</p>
          <p className="text-sm text-slate-600 leading-relaxed">
            資格は「持っているか」より「学んだ設計知識を実務で使えるか」で評価されます。たとえばJSTQBで学ぶ同値分割・境界値分析を、実際のテストケース削減や不具合検出にどう活かしたかを語れると効果的です。
          </p>
        </section>

        {/* キャリアパス */}
        <section id="path" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キャリアパスと開発職への転向</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">QAマネージャー / テストマネージャー路線</h3>
              <p className="text-sm text-petrol-deep">
                品質保証プロセス全体を設計し、チームと品質指標を管理する方向。テスト戦略・プロセス改善・マネジメント経験が武器になり、ミドル層の強みを活かしやすい進路です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">SDET / 自動化エンジニア路線</h3>
              <p className="text-sm text-petrol-deep">
                テスト自動化基盤を開発・保守する開発寄りのQA。コードを書く比重が高く、高年収帯に届きやすい一方、継続的な技術学習が前提になります。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">開発エンジニアへの転向路線</h3>
              <p className="text-sm text-petrol-deep">
                自動化でコードを書くうちに開発力が育ち、品質視点を持った開発者として転向する道。
                <Link href="/career/tester-to-developer/" className="text-petrol-deep underline ml-1">テスターから開発者への転向ガイド</Link>で具体ステップを解説しています。
              </p>
            </div>
          </div>
        </section>

        {/* 求人の探し方 */}
        <section id="find" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の探し方</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            QA求人は「どこに強い求人が集まるか」を押さえて使い分けるのが効率的です。以下は当サイトのデータシート（2026年6月時点・各社公表/二次情報）に基づく整理です。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア</h3>
              <p className="text-sm text-slate-600 mb-2">IT/Web特化。QA・SDET・自動化求人を技術に明るいアドバイザー経由で探せます。高年収求人比率が高いとされます。</p>
              <Link href="/review/levtech/" className="text-sm text-petrol hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">リクルートエージェントIT</h3>
              <p className="text-sm text-slate-600 mb-2">国内最大級の求人数。手動テストから自動化、QAマネージャーまで幅広く比較したい場合の併用先です。</p>
              <Link href="/review/recruit-it/" className="text-sm text-petrol hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ</h3>
              <p className="text-sm text-slate-600 mb-2">ハイクラス（年収750万円以上が一つの目安）・スカウト型。QAマネージャー/SDET層を狙う場合に有効です。</p>
              <Link href="/review/bizreach-it/" className="text-sm text-petrol hover:underline">詳細レビューを見る →</Link>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            複数併用の進め方は<Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">エージェント複数利用のコツ</Link>、選び方の軸は<Link href="/knowledge/how-to-choose/" className="text-petrol hover:underline">転職エージェントの選び方</Link>を参考にしてください。
          </p>
        </section>

        {/* 未経験・働きやすさ */}
        <section id="entry" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">未経験・働きやすさの実情</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            QAは未経験歓迎の求人が一定数あり、比較的入りやすい領域とされます。一方で、入口の手動テスト中心の働き方は年収が頭打ちになりやすい点も正直にお伝えします。
          </p>
          <div className="space-y-3">
            {[
              { n: "STEP 1", t: "テスト実行・設計から入る", d: "未経験歓迎求人でテスト実行に入り、テストケース設計まで担えるようにする。JSTQB Foundationの取得もこの時期に。" },
              { n: "STEP 2", t: "自動化スキルを足す", d: "Selenium/Playwright＋いずれかの言語でテストコードを書き、小さな自動化実績を作る。これが年収の分岐点。" },
              { n: "STEP 3", t: "上流 or 開発へ抜ける", d: "テスト戦略・プロセス改善でQAマネージャーへ、あるいは開発知識を伸ばして開発職・SDETへ。早期に方向を決める。" },
            ].map((x, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="text-xs font-bold text-petrol shrink-0 w-14 pt-1">{x.n}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                  <p className="text-sm text-slate-600">{x.d}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            QAは仕様に沿った検証が中心のため、納期前の繁忙はあるものの計画的に働きやすいとされる職種です。ただし企業・プロジェクトにより差が大きいため、応募時に体制を確認しましょう。30代未経験での参入は<Link href="/knowledge/inexperienced-30s/" className="text-petrol hover:underline">30代未経験からのITエンジニア転職</Link>も参考になります。
          </p>
        </section>

        {/* 30代・40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              ミドル層のQA転職では、<strong>「テストを実行できる」より「品質をどう作り込むかを設計・主導できる」</strong>ことが評価軸になります。前職が製造業の品質保証やプロジェクト管理であっても、品質基準の設計やプロセス改善の経験はソフトウェアQAの上流に転用しやすく、強みになります。
            </p>
            <p>
              一方で注意点として、手動テスト実行のみの経験は若手と競合しやすく、年収も伸びにくい傾向があります。30代・40代でQAに参入・継続するなら、<strong>自動化スキルかマネジメント</strong>のいずれかの軸を必ず持っておくことが、市場価値を保つ保険になります。
            </p>
            <p>
              年代別の市場感は<Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>、年収交渉は<Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉のコツ</Link>も合わせてご覧ください。
            </p>
          </div>
        </section>

        {/* FAQ */}
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

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">QAスキルを活かした転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            QA・自動化・SDET求人に強いIT特化型エージェントで、あなたの品質保証スキルの市場価値を確認しましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "テスターから開発者への転向ガイド", href: "/career/tester-to-developer/" },
              { name: "Python転職ガイド", href: "/skill/python/" },
              { name: "TypeScript転職ガイド", href: "/skill/typescript/" },
              { name: "30代未経験からのITエンジニア転職", href: "/knowledge/inexperienced-30s/" },
              { name: "40代エンジニアの転職", href: "/age/40s/" },
              { name: "スキル別転職ガイド一覧", href: "/skill/" },
            ].map((item, i) => (
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
