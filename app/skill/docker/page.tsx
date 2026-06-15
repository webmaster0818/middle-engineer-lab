import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "Dockerスキルで転職｜年収・求人・将来性【2026年】";
const PAGE_DESC =
  "Docker（コンテナ）スキルを軸にした転職市場を出典付きで解説。Dockerは単体スキルというより、DevOps/SRE・クラウド実務の基盤として評価される点を整理。求人ボックス公表の関連職種年収、求人傾向、30代・40代の戦い方をミドルエンジニア向けにまとめます。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "1. 結論：Dockerスキルの転職での活かし方" },
  { id: "market", label: "2. 関連職種の市場・年収データ（出典付き）" },
  { id: "level", label: "3. 求められる経験レベルと求人要件の傾向" },
  { id: "career", label: "4. Dockerスキルが効くキャリアパス" },
  { id: "find", label: "5. 求人の探し方・強いエージェント" },
  { id: "entry", label: "6. 経験浅めからコンテナ実務に入るルート" },
  { id: "age", label: "7. 30代・40代エンジニアの視点" },
  { id: "learn", label: "8. スキルアップ・学習戦略" },
  { id: "faq", label: "9. よくある質問" },
];

const faqs = [
  {
    q: "Dockerスキルだけで年収はどのくらい上がりますか？",
    a: "Dockerは「Dockerエンジニア」という独立職種として年収が公表されているわけではなく、求人ボックスの職種別データにも単体の集計はありません。実態としてはDevOps／SRE／クラウド／インフラエンジニアの実務スキルの一部として評価されます。求人ボックス「給料ナビ」では、近い職種としてクラウドエンジニアの平均年収が約488万円、インフラエンジニアが約475万円（いずれも2026年5月時点・掲載求人ベース）と公表されています。Dockerはこれらの職種で年収を底上げする要素と捉えるのが正確です。",
  },
  {
    q: "Dockerは単体のスキルとして転職市場で評価されますか？",
    a: "Docker単体を必須要件にする求人は限定的で、多くは「コンテナでの開発・運用経験」「CI/CDパイプラインの構築経験」「Kubernetesでのオーケストレーション経験」といった文脈の中でDockerが問われます。つまりDockerは実務基盤として、クラウドやCI/CDとセットで語れることが評価につながります。Dockerfileが書ける、というレベルより、本番運用での設計・トラブルシュート経験が重視されます。",
  },
  {
    q: "アプリ開発者がDockerを学ぶと転職に有利ですか？",
    a: "有利になりやすいです。バックエンドやWebアプリの開発経験にコンテナ化・ローカル開発環境のDocker化・CI上でのビルドといった経験が加わると、DevOps寄りのポジションやプラットフォームチームへの応募幅が広がります。30代・40代では「開発もインフラも分かる」掛け合わせが希少性になり、年収レンジの上振れにつながります。",
  },
  {
    q: "Dockerの求人はどんな企業に多いですか？",
    a: "マイクロサービス化やクラウド移行を進めるWeb系・SaaS・フィンテック企業、内製化を進める事業会社に多く見られます。Kubernetesと組み合わせたコンテナ基盤を運用する企業や、CI/CDを整備するプラットフォームチームでも需要があります。具体的な求人数や社名は時期で変動するため、エージェントで最新の保有求人を確認してください。",
  },
  {
    q: "Docker未経験でもコンテナ系のポジションに転職できますか？",
    a: "サーバーサイドやインフラの実務経験があれば、Docker未経験でもポテンシャル採用の対象になり得ます。GitHubに自作アプリをDocker化した構成（Dockerfile・docker-compose・CIでのビルド）を公開し、なぜその構成にしたかを語れる状態にしておくと学習意欲と基礎力を示せます。ただし即戦力求人ではコンテナ本番運用の経験を求めるものもあります。",
  },
  {
    q: "DockerとKubernetesはどちらを先に学ぶべきですか？",
    a: "Dockerが先です。Kubernetesはコンテナのオーケストレーションツールであり、Dockerで「コンテナとは何か・イメージとレイヤ・ネットワーク・ボリューム」を理解していないと習得が難しくなります。まずDockerで個人開発環境のコンテナ化を体得し、その上でKubernetesへ進むのが定石です。",
  },
  {
    q: "Dockerスキルを活かす転職におすすめのエージェントは？",
    a: "IT・Web特化で高年収求人比率が高いレバテックキャリア、ハイクラス・スカウト型でプラットフォーム／SRE級の求人に出会いやすいビズリーチ、Web系スタートアップの提案に強いGeeklyの併用が選択肢です。Dockerは職種横断のスキルなので、希望職種（DevOps・SRE・クラウド）を明確に伝えて求人を引き出すのが効率的です。",
  },
];

const salaryTable: [string, string, string][] = [
  ["クラウドエンジニア（近接職種）", "平均約488万円", "求人ボックス 給料ナビ（2026年5月時点・掲載求人ベース）"],
  ["インフラエンジニア（近接職種）", "平均約475万円", "求人ボックス 給料ナビ（2026年5月時点・掲載求人ベース）"],
  ["ソフトウェアエンジニア（開発側）", "平均約511万円", "求人ボックス 給料ナビ（2026年5月時点・掲載求人ベース）"],
  ["正社員SEの平均年収・30代", "約499万円", "レバテック公表（2025年・年代別平均）"],
  ["正社員SEの平均年収・40代", "約618万円", "レバテック公表（2025年・年代別平均）"],
];

export default function DockerSkillPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/skill/docker/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Docker（コンテナ）" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Dockerスキルで転職｜年収・求人・将来性【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | Dockerスキルの転職市場をミドル層向けに分析
        </p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            Dockerはアプリケーションをコンテナ化して、開発・テスト・本番で同じ実行環境を再現するための基盤技術です。マイクロサービス化やCI/CD、クラウド移行が当たり前になった現在、Dockerはバックエンド・インフラ・DevOpsを横断する「実務の前提スキル」になっています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            重要なのは、Dockerが<strong>単体の独立職種としてではなく、DevOps／SRE／クラウド／インフラの実務基盤として評価される</strong>点です。本記事では、近接職種の公表年収・求められる経験レベル・求人の探し方・経験浅めからの参入ルートを、30代・40代の視点を交えて整理します。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：Dockerスキルの転職での活かし方</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>Dockerは「これ単体で転職する」スキルではなく、DevOps／SRE／クラウド職の市場価値を底上げする実務基盤です。</strong>開発経験やインフラ経験にコンテナ運用を掛け合わせることで、応募できる求人の幅と年収レンジが広がります。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・Docker単体の職種別年収は公表が乏しく、<strong>クラウド約488万円・インフラ約475万円</strong>（求人ボックス2026年5月）など近接職種で代替して把握する</li>
              <li>・求人では「コンテナでの開発・運用経験」「CI/CD構築経験」の文脈でDockerが問われる</li>
              <li>・Docker＋Kubernetes＋クラウドの掛け合わせで、SRE／プラットフォーム領域の高年収求人に手が届く</li>
            </ul>
          </div>
        </section>

        {/* 市場・年収データ */}
        <section id="market" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">関連職種の市場・年収データ（出典付き）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            「Dockerエンジニア」という職種で年収が単体公表されているわけではないため、ここではDockerスキルが評価される近接職種の公表値を、出典と時点を明示して掲載します。
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
            ※ Dockerは独立職種としての年収公表が乏しいため、クラウド／インフラ／ソフトウェアエンジニアなどの職種年収で代替して示しています。求人ボックスの平均年収は掲載求人の記載額の集計であり、個人の支給額とは異なります。レバテックの年代別平均はSE全般の値です。実際のレンジは担当領域で幅が大きいため、エージェントで最新の保有求人を確認してください。
          </p>
        </section>

        {/* 求められる経験レベル */}
        <section id="level" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベルと求人要件の傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Dockerに関する要件は「ローカル開発のコンテナ化ができる」レベルから「本番コンテナ基盤の設計・運用ができる」レベルまで幅があります。求人票によく登場する要件を傾向としてまとめると次の通りです。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { tier: "入口（ポテンシャル）", req: "開発／インフラの実務2〜3年／Dockerfile・docker-composeでローカル環境を構築できる／CIの基礎", note: "Docker実務未経験でも応募余地あり" },
              { tier: "即戦力（ミドル）", req: "コンテナでのアプリ運用／マルチステージビルドやイメージ最適化／CI/CDパイプラインでのビルド・デプロイ", note: "求人の中心ゾーン" },
              { tier: "ハイクラス", req: "Kubernetes基盤の設計運用／コンテナのセキュリティ・監視／プラットフォームの技術選定", note: "SRE／プラットフォームの高年収層" },
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">Dockerスキルが効くキャリアパス</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Dockerは開発からインフラ／プラットフォーム領域へ橋渡しするスキルです。掛け合わせる技術によって到達できるレンジが変わります。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "DevOpsエンジニア", note: "開発とインフラの境界を埋める役割。Docker＋CI/CDが基盤になる" },
              { role: "SRE／プラットフォームエンジニア", note: "Docker＋Kubernetes＋クラウドでサービスの信頼性を支える" },
              { role: "クラウドエンジニア", note: "コンテナをクラウド上で運用。ECS/EKS/GKE等の経験が武器になる" },
              { role: "バックエンドエンジニア（コンテナ運用込み）", note: "アプリ開発＋コンテナ化・デプロイまで一気通貫で担当" },
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
            Dockerは職種横断のスキルなので、希望職種（DevOps・SRE・クラウド）を明確にして求人を引き出すのが効率的です。タイプ別に向くサービスを整理します。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア（IT・Web特化）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT・Web特化で高年収求人の比率が高く、技術に踏み込んで話せるアドバイザーが在籍。コンテナ・クラウド系の専門求人の提案に向きます。
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
                IT・Web・ゲーム業界専門で、提案スピードが強み。コンテナ基盤を内製するWeb系企業の求人を探したい場合の選択肢です。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験浅めからコンテナ実務に入るルート</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "既存の開発／インフラ経験を土台にする", desc: "バックエンド開発やオンプレ運用の経験があれば、それを土台に「Dockerでコンテナ化・CIでビルド」まで自走できることを示せます。完全未経験よりポテンシャル採用の対象になりやすくなります。" },
              { num: "2", title: "自作アプリをDocker化してGitHubに公開する", desc: "Dockerfile・docker-compose・CIでのビルドまでを含めたリポジトリを公開します。マルチステージビルドでイメージを軽量化した、環境変数で設定を切り替えた、といった設計判断を語れる状態にしておくと評価につながります。" },
              { num: "3", title: "コンテナ運用のあるポジションのポテンシャル枠を狙う", desc: "クラウド移行中の事業会社では、コンテナ運用経験者の母数不足から入社後キャッチアップ前提の採用を行うことがあります。エージェントに「コンテナは学習中、開発（またはインフラ）の実務はある」と伝え、そうした求人を紹介してもらうのが近道です。" },
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
              <strong>Dockerは「掛け算」で価値が出るスキル。</strong>30代・40代で開発やインフラの実務を積んでいるなら、そこにコンテナ運用を足すだけで「開発も運用も分かる人材」として希少性が増します。年齢の不利を、横断的な実務経験で相殺できる領域です。
            </p>
            <p>
              <strong>ドメイン知識との組み合わせが強い。</strong>金融・物流・製造など、これまで携わってきた業務ドメインの知識を、コンテナ基盤というモダンな実装手段と結びつけて語れると、ミドル層ならではの説得力が出ます。
            </p>
            <p>
              <strong>マネジメント経験も資産になる。</strong>プラットフォームチームのリードやSREのマネージャー求人では、技術力に加えてチームの技術選定・育成の経験が評価されます。40代でPL／PM経験があるなら、それをコンテナ・クラウドの実務とセットで提示しましょう。
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
              <strong>① コンテナの仕組みから理解する。</strong>イメージとレイヤ、コンテナのライフサイクル、ネットワーク、ボリュームといった基礎概念を、公式ドキュメントとハンズオンで押さえます。コマンドの暗記より「なぜそう動くか」を理解することが本番運用で効きます。
            </p>
            <p>
              <strong>② CI/CDと結びつける。</strong>DockerはCI/CDパイプラインの中で真価を発揮します。<Link href="/skill/ci-cd/" className="text-blue-600 hover:underline">CI/CD</Link>でのビルド・テスト・デプロイまで一連で組めると、DevOps寄りの求人で語れる経験になります。
            </p>
            <p>
              <strong>③ Kubernetes・クラウドへ広げる。</strong>Dockerを土台に<Link href="/skill/kubernetes/" className="text-blue-600 hover:underline">Kubernetes</Link>のオーケストレーション、<Link href="/skill/aws/" className="text-blue-600 hover:underline">AWS</Link>などクラウドのコンテナサービスへ広げると、SRE／プラットフォーム領域の高年収求人に手が届きます。資格では<Link href="/cert/cka/" className="text-blue-600 hover:underline">CKA</Link>も学習の指針になります。
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
          <h2 className="text-xl font-bold mb-3">Dockerスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            Dockerは職種横断のスキルだからこそ、希望職種を明確にして複数のIT特化型エージェントで保有求人を横断比較するのが近道です。
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
              { name: "Kubernetesエンジニアの転職ガイド", href: "/skill/kubernetes/" },
              { name: "CI/CDスキルの転職ガイド", href: "/skill/ci-cd/" },
              { name: "DevOpsエンジニアの転職ガイド", href: "/skill/devops/" },
              { name: "インフラエンジニアの転職ガイド", href: "/skill/infrastructure/" },
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
    
      <section className="mx-auto max-w-3xl px-4 pb-10">
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
          <h2 className="font-bold text-slate-900 mb-2">この技術と関連の深い掲載企業</h2>
          <p className="text-xs text-slate-500 mb-2">各社の公開技術情報でこの技術への言及が確認できた掲載企業です。年収・選考は各社ページをご覧ください。</p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-sm"><li><a href="/company/jcb/" className="text-blue-700 hover:underline">JCB（ジェーシービー）</a></li></ul>
          <p className="mt-3 text-sm"><a href="/skill/" className="text-blue-700 hover:underline">スキル別ガイド一覧</a> ／ <a href="/salary/company-ranking/" className="text-blue-700 hover:underline">企業年収ランキング</a></p>
        </div>
      </section>
      </>
  );
}
