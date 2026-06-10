import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "CI/CDスキルで転職｜年収・求人・将来性【2026年】";
const PAGE_DESC =
  "CI/CD（継続的インテグレーション／デリバリー）スキルを軸にした転職市場を出典付きで解説。CI/CDは単体スキルではなくDevOps/SRE実務の基盤として評価される点を整理。求人ボックス公表の関連職種年収、求人傾向、30代・40代の戦い方をミドルエンジニア向けにまとめます。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "1. 結論：CI/CDスキルの転職での活かし方" },
  { id: "market", label: "2. 関連職種の市場・年収データ（出典付き）" },
  { id: "level", label: "3. 求められる経験レベルと求人要件の傾向" },
  { id: "career", label: "4. CI/CDスキルが効くキャリアパス" },
  { id: "find", label: "5. 求人の探し方・強いエージェント" },
  { id: "entry", label: "6. 経験浅めからCI/CD実務に入るルート" },
  { id: "age", label: "7. 30代・40代エンジニアの視点" },
  { id: "learn", label: "8. スキルアップ・学習戦略" },
  { id: "faq", label: "9. よくある質問" },
];

const faqs = [
  {
    q: "CI/CDスキルだけで年収はどのくらい上がりますか？",
    a: "CI/CDは「CI/CDエンジニア」という独立職種として年収が公表されているわけではなく、求人ボックスの職種別データにも単体の集計はありません。実態としてはDevOps／SRE／プラットフォーム／インフラエンジニアの中核スキルとして評価されます。求人ボックス「給料ナビ」では、近い職種としてクラウドエンジニアの平均年収が約488万円、インフラエンジニアが約475万円、ソフトウェアエンジニアが約511万円（いずれも2026年5月時点・掲載求人ベース）と公表されています。CI/CDはこれらの職種で年収を底上げする要素と捉えるのが正確です。",
  },
  {
    q: "CI/CDは単体のスキルとして転職市場で評価されますか？",
    a: "CI/CD単体を必須要件にする求人は限定的で、多くは「CI/CDパイプラインの設計・構築経験」「テスト自動化」「デプロイ自動化・IaC」といった文脈の中で問われます。GitHub Actions・GitLab CI・Jenkins・CircleCIなどの具体ツールの運用経験と、なぜその設計にしたかを語れることが評価につながります。CI/CDは開発の生産性とリリース品質に直結するため、DevOps文化を重視する企業ほど重く見ます。",
  },
  {
    q: "開発者がCI/CDを学ぶと転職に有利ですか？",
    a: "有利になりやすいです。アプリ開発の経験に「テストの自動化・ビルド・デプロイのパイプライン構築」が加わると、DevOps寄りのポジションやプラットフォームチームへの応募幅が広がります。30代・40代では「開発もリリース基盤も整備できる」掛け合わせが希少性になり、年収レンジの上振れにつながります。",
  },
  {
    q: "CI/CDの求人はどんな企業に多いですか？",
    a: "アジャイル開発・継続的デリバリーを実践するWeb系・SaaS・フィンテック企業、内製化を進める事業会社に多く見られます。プラットフォームチームやSREチームがCI/CD基盤を整備するケースが多く、Docker・Kubernetes・IaC（Terraform）とセットで募集されることが一般的です。具体的な求人数や社名は時期で変動するため、エージェントで最新の保有求人を確認してください。",
  },
  {
    q: "CI/CD未経験でも関連ポジションに転職できますか？",
    a: "開発やインフラの実務経験があれば、CI/CD未経験でもポテンシャル採用の対象になり得ます。個人開発のリポジトリでGitHub Actions等を使い、テスト→ビルド→デプロイのパイプラインを組んだ実績を公開し、設計意図を語れる状態にしておくと学習意欲と基礎力を示せます。ただし即戦力求人では本番パイプラインの運用経験を求めるものもあります。",
  },
  {
    q: "CI/CDツールはどれを学ぶべきですか？",
    a: "まずGitHub Actionsから始めるのが現実的です。多くのリポジトリで標準的に使われ、無料枠で実務に近いパイプラインを組めます。その上で、エンタープライズで採用例の多いJenkins、GitLab CI、CircleCIなどに触れておくと応募の幅が広がります。ツールそのものより「テスト戦略・デプロイ戦略・ロールバック設計」といった考え方が転用できる資産になります。",
  },
  {
    q: "CI/CDとDevOpsの違いは何ですか？",
    a: "CI/CDは「コードの統合・テスト・デプロイを自動化する仕組み」を指す具体的な技術プラクティスです。DevOpsは開発（Dev）と運用（Ops）の協調によって素早く安全にリリースし続けるための文化・体制の総称で、CI/CDはその中核の実装手段にあたります。CI/CDを語るときは、DevOpsという全体像の中での位置づけを理解しておくと面接で説得力が出ます。",
  },
  {
    q: "CI/CDスキルを活かす転職におすすめのエージェントは？",
    a: "IT・Web特化で高年収求人比率が高いレバテックキャリア、ハイクラス・スカウト型でプラットフォーム／SRE級の求人に出会いやすいビズリーチ、Web系スタートアップの提案に強いGeeklyの併用が選択肢です。CI/CDは職種横断のスキルなので、希望職種（DevOps・SRE・プラットフォーム）を明確に伝えて求人を引き出すのが効率的です。",
  },
];

const salaryTable: [string, string, string][] = [
  ["クラウドエンジニア（近接職種）", "平均約488万円", "求人ボックス 給料ナビ（2026年5月時点・掲載求人ベース）"],
  ["インフラエンジニア（近接職種）", "平均約475万円", "求人ボックス 給料ナビ（2026年5月時点・掲載求人ベース）"],
  ["ソフトウェアエンジニア（開発側）", "平均約511万円", "求人ボックス 給料ナビ（2026年5月時点・掲載求人ベース）"],
  ["正社員SEの平均年収・30代", "約499万円", "レバテック公表（2025年・年代別平均）"],
  ["正社員SEの平均年収・40代", "約618万円", "レバテック公表（2025年・年代別平均）"],
];

export default function CiCdSkillPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/skill/ci-cd/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "CI/CD" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          CI/CDスキルで転職｜年収・求人・将来性【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | CI/CDスキルの転職市場をミドル層向けに分析
        </p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            CI/CDは、コードの統合・テスト・ビルド・デプロイを自動化し、ソフトウェアを素早く安全にリリースし続けるためのプラクティスです。GitHub Actions・GitLab CI・Jenkins・CircleCIなどのツールで実装され、アジャイル開発や継続的デリバリーを支える基盤として、開発・インフラ・DevOpsを横断する前提スキルになっています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            重要なのは、CI/CDが<strong>単体の独立職種ではなく、DevOps／SRE／プラットフォームの実務基盤として評価される</strong>点です。本記事では、近接職種の公表年収・求められる経験レベル・求人の探し方・経験浅めからの参入ルートを、30代・40代の視点を交えて整理します。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "求人ボックス「給料ナビ」クラウド／インフラ／ソフトウェアエンジニア（2026年5月時点・掲載求人ベース）",
            "レバテック公表 年代別平均年収（2025年）",
            "経済産業省「IT人材需給に関する調査」（2019年3月公表）",
          ]}
        />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-sm text-blue-600 hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：CI/CDスキルの転職での活かし方</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>CI/CDは「これ単体で転職する」スキルではなく、DevOps／SRE／プラットフォーム職の市場価値を底上げする実務基盤です。</strong>開発経験やインフラ経験に自動化パイプラインの構築を掛け合わせることで、応募できる求人の幅と年収レンジが広がります。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・CI/CD単体の職種別年収は公表が乏しく、<strong>クラウド約488万円・インフラ約475万円・ソフトウェア約511万円</strong>（求人ボックス2026年5月）など近接職種で代替して把握する</li>
              <li>・求人では「パイプラインの設計・構築」「テスト自動化」「デプロイ自動化」の文脈で問われる</li>
              <li>・CI/CD＋Docker／Kubernetes／IaCの掛け合わせで、SRE／プラットフォーム領域の高年収求人に手が届く</li>
            </ul>
          </div>
        </section>

        {/* 市場・年収データ */}
        <section id="market" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">関連職種の市場・年収データ（出典付き）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            「CI/CDエンジニア」という職種で年収が単体公表されているわけではないため、ここではCI/CDスキルが評価される近接職種の公表値を、出典と時点を明示して掲載します。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {salaryTable.map(([label, value, src], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">
                      {label}
                    </th>
                    <td className="px-4 py-3 text-slate-700 border-b border-slate-200 align-top">
                      <span className="font-medium">{value}</span>
                      <br />
                      <span className="text-xs text-slate-500">{src}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            ※ CI/CDは独立職種としての年収公表が乏しいため、クラウド／インフラ／ソフトウェアエンジニアなどの職種年収で代替して示しています。求人ボックスの平均年収は掲載求人の記載額の集計であり、個人の支給額とは異なります。レバテックの年代別平均はSE全般の値です。実際のレンジは担当領域で幅が大きいため、エージェントで最新の保有求人を確認してください。
          </p>
        </section>

        {/* 求められる経験レベル */}
        <section id="level" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベルと求人要件の傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            CI/CDに関する要件は「既存パイプラインを保守できる」レベルから「組織横断のリリース基盤を設計できる」レベルまで幅があります。求人票によく登場する要件を傾向としてまとめると次の通りです。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { tier: "入口（ポテンシャル）", req: "開発／インフラの実務2〜3年／GitHub Actions等で基本的なテスト・ビルドのパイプラインを組める／Gitの運用", note: "CI/CD実務未経験でも応募余地あり" },
              { tier: "即戦力（ミドル）", req: "本番デプロイまでのパイプライン構築・運用／テスト自動化／Docker・IaCとの連携／ロールバック設計", note: "求人の中心ゾーン" },
              { tier: "ハイクラス", req: "組織横断のリリース基盤の設計／デプロイ戦略の標準化／プラットフォームの技術選定・チームリード", note: "SRE／プラットフォームの高年収層" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2 text-sm">{item.tier}</h3>
                <p className="text-xs text-slate-600 mb-2 leading-relaxed">{item.req}</p>
                <p className="text-xs text-blue-600">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* キャリアパス */}
        <section id="career" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">CI/CDスキルが効くキャリアパス</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            CI/CDは開発からインフラ／プラットフォーム領域へ橋渡しするスキルです。掛け合わせる技術によって到達できるレンジが変わります。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "DevOpsエンジニア", note: "開発と運用の協調を支える役割。CI/CDが中核の武器になる" },
              { role: "SRE／プラットフォームエンジニア", note: "リリース基盤とサービスの信頼性を両立。CI/CD＋IaC＋監視が軸" },
              { role: "クラウドエンジニア", note: "クラウド上でのデプロイ自動化・IaC運用を担当" },
              { role: "リリースエンジニア／QA自動化", note: "テスト自動化・リリースプロセスの品質と速度を担う" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 mb-1">{item.role}</h3>
                <p className="text-xs text-slate-500">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">
            ※ 各ポジションの具体的な年収レンジは企業・時期で変動するため断定を避けています。レンジは面談時にエージェントへ確認してください。
          </p>
        </section>

        {/* 求人の探し方 */}
        <section id="find" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の探し方・強いエージェント</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            CI/CDは職種横断のスキルなので、希望職種（DevOps・SRE・プラットフォーム）を明確にして求人を引き出すのが効率的です。タイプ別に向くサービスを整理します。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア（IT・Web特化）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT・Web特化で高年収求人の比率が高く、技術に踏み込んで話せるアドバイザーが在籍。DevOps・プラットフォーム系の専門求人の提案に向きます。
              </p>
              <Link href="/review/levtech/" className="text-sm text-blue-600 hover:underline">レバテックキャリアの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ（ハイクラス・スカウト型）</h3>
              <p className="text-sm text-slate-600 mb-2">
                ハイクラス・スカウト型で、SREやプラットフォームエンジニア級の求人・スカウトに出会いやすいのが特徴です。
              </p>
              <Link href="/review/bizreach-it/" className="text-sm text-blue-600 hover:underline">ビズリーチの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Geekly（Web系・スタートアップに強い）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT・Web・ゲーム業界専門で、提案スピードが強み。継続的デリバリーを実践するWeb系企業の求人を探したい場合の選択肢です。
              </p>
              <Link href="/review/geekly/" className="text-sm text-blue-600 hover:underline">Geeklyの詳細レビュー →</Link>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            エージェント各社の比較は<Link href="/compare/agents/" className="text-blue-600 hover:underline">転職エージェント比較</Link>も参照してください。
          </p>
        </section>

        {/* 経験浅めからの参入ルート */}
        <section id="entry" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験浅めからCI/CD実務に入るルート</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "既存の開発／インフラ経験を土台にする", desc: "アプリ開発やインフラ運用の経験があれば、それを土台に「テストとデプロイを自動化できる」ことを示せます。完全未経験よりポテンシャル採用の対象になりやすくなります。" },
              { num: "2", title: "個人リポジトリでパイプラインを組んで公開する", desc: "GitHub Actions等で、テスト→ビルド→デプロイまでのワークフローを組んだリポジトリを公開します。なぜそのステージ構成にしたか、失敗時のロールバックをどう設計したかを語れる状態にしておくと評価につながります。" },
              { num: "3", title: "DevOps／プラットフォームのポテンシャル枠を狙う", desc: "内製化を進める事業会社では、CI/CD経験者の母数不足から入社後キャッチアップ前提の採用を行うことがあります。エージェントに「CI/CDは学習中、開発（またはインフラ）の実務はある」と伝え、そうした求人を紹介してもらうのが近道です。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 30代・40代視点 */}
        <section id="age" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>
              <strong>CI/CDは「掛け算」で価値が出るスキル。</strong>30代・40代で開発やインフラの実務を積んでいるなら、そこに自動化パイプラインの構築を足すだけで「開発もリリース基盤も整備できる人材」として希少性が増します。年齢の不利を、横断的な実務経験で相殺できる領域です。
            </p>
            <p>
              <strong>リリースの痛みを知る経験が活きる。</strong>手動デプロイの事故やリリース遅延を実体験している分、なぜ自動化が必要かを説得力を持って語れます。改善の前後でリードタイムや障害率がどう変わったかを定量で示せると、ミドル層ならではの強みになります。
            </p>
            <p>
              <strong>マネジメント経験も資産になる。</strong>プラットフォームチームのリードやSREのマネージャー求人では、技術力に加えてチームの開発プロセス改善・育成の経験が評価されます。40代でPL／PM経験があるなら、それをCI/CDの実務とセットで提示しましょう。
            </p>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            年代別の戦略は<Link href="/age/40s/" className="text-blue-600 hover:underline">40代エンジニアの転職</Link>・<Link href="/age/30s/" className="text-blue-600 hover:underline">30代エンジニアの転職</Link>も参考にしてください。
          </p>
        </section>

        {/* 学習戦略 */}
        <section id="learn" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルアップ・学習戦略</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>
              <strong>① 小さなパイプラインを最後まで通す。</strong>テスト→ビルド→デプロイの一連を、個人プロジェクトでまず完成させます。ツールの機能網羅より「動くパイプラインを一本通す」体験が、本番での応用力につながります。
            </p>
            <p>
              <strong>② Dockerと結びつける。</strong>CI/CDは<Link href="/skill/docker/" className="text-blue-600 hover:underline">Docker</Link>でのコンテナビルドと組み合わせると実務に近づきます。再現性のあるビルド環境を作れると、デプロイの信頼性が上がります。
            </p>
            <p>
              <strong>③ IaC・クラウドへ広げる。</strong><Link href="/skill/terraform/" className="text-blue-600 hover:underline">Terraform</Link>などのIaCや<Link href="/skill/aws/" className="text-blue-600 hover:underline">AWS</Link>のデプロイ自動化まで広げると、SRE／プラットフォーム領域の高年収求人に手が届きます。資格では<Link href="/cert/terraform-associate/" className="text-blue-600 hover:underline">Terraform Associate</Link>も学習の指針になります。
            </p>
            <p>
              学習と転職活動の進め方は<Link href="/knowledge/continuous-learning/" className="text-blue-600 hover:underline">継続的な学習の習慣化</Link>・<Link href="/knowledge/portfolio/" className="text-blue-600 hover:underline">ポートフォリオの作り方</Link>もあわせてご覧ください。
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10">
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
          <h2 className="text-xl font-bold mb-3">CI/CDスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            CI/CDは職種横断のスキルだからこそ、希望職種を明確にして複数のIT特化型エージェントで保有求人を横断比較するのが近道です。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Dockerスキルの転職ガイド", href: "/skill/docker/" },
              { name: "DevOpsエンジニアの転職ガイド", href: "/skill/devops/" },
              { name: "Kubernetesエンジニアの転職ガイド", href: "/skill/kubernetes/" },
              { name: "Terraformエンジニアの転職ガイド", href: "/skill/terraform/" },
              { name: "スキル別転職ガイド一覧", href: "/skill/" },
              { name: "ミドルエンジニア転職ラボTOP", href: "/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors"
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
