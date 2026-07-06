import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/skill/dart/" },
  title: "Dartエンジニアの転職ガイド｜年収・求人・将来性【2026年】",
  description:
    "Dart（Flutter）エンジニアの転職市場を出典付きで解説。モバイルアプリ開発でのFlutter需要、求人ボックスやレバテックの公表年収、Web・ネイティブからの参入ルート、30代・40代の戦い方をミドルエンジニア向けに整理します。",
};

const toc = [
  { id: "conclusion", label: "1. 結論：Dartエンジニアの転職市場の攻め方" },
  { id: "market", label: "2. Dart/Flutterの市場・年収データ（出典付き）" },
  { id: "level", label: "3. 求められる経験レベルと求人要件の傾向" },
  { id: "career", label: "4. Dartエンジニアのキャリアパス" },
  { id: "find", label: "5. 求人の探し方・強いエージェント" },
  { id: "entry", label: "6. 他分野からDart/Flutterに参入するルート" },
  { id: "age", label: "7. 30代・40代エンジニアの視点" },
  { id: "learn", label: "8. スキルアップ・学習戦略" },
  { id: "faq", label: "9. よくある質問" },
];

const faqs = [
  {
    q: "Dart（Flutter）エンジニアの平均年収はどのくらいですか？",
    a: "DartやFlutterに限定した公的平均値の公表は乏しいため、年代別・職種別データで代替するのが現実的です。求人ボックス「給料ナビ」では正社員のソフトウェアエンジニアの平均年収が約511万円と試算されています（掲載求人からの独自集計値）。年代別では、レバテック公表の正社員SE平均年収（30代約499万円・40代約618万円／2025年）が参考になります。Flutter案件はフリーランスでは平均月額単価が高めに報じられることもありますが、これは案件単価であり正社員年収とは性質が異なります。",
  },
  {
    q: "DartとFlutterの関係は何ですか？転職市場ではどちらで探すべきですか？",
    a: "DartはGoogleのプログラミング言語で、クロスプラットフォームのUIフレームワークFlutterの記述言語です。実務上、Dartエンジニアの求人はほぼ「Flutterエンジニア」「Flutterアプリ開発」として募集されます。転職活動では『Flutter』のキーワードで求人を探すのが効率的で、Dartの言語力はFlutterアプリをつくるための基礎として評価されます。",
  },
  {
    q: "Web・ネイティブからFlutterへ転向するのは難しいですか？",
    a: "TypeScript／JavaScriptでのフロントエンド経験や、Swift／Kotlinでのネイティブアプリ経験があれば、Flutterへの転向はスムーズです。Dartは静的型付けで文法習得は短期間で進みます。ただしWidgetツリーによる宣言的UI、状態管理（Riverpod／Bloc等）、プラットフォーム差異の吸収などFlutter特有の設計に慣れるには実プロジェクトの経験が必要です。個人でアプリを1本ストアに公開すると評価につながります。",
  },
  {
    q: "Flutterの求人はどんな企業に多いですか？",
    a: "スタートアップや受託開発でのモバイルアプリ開発、iOS／Androidを1つのコードベースで開発したい自社サービス企業に多く見られます。1ソースで両OS対応できるコスト効率から、新規アプリやMVP開発でFlutterを採用するケースが増えています。具体的な社名や求人数は時期で変動するため、エージェントで最新の保有求人を確認してください。",
  },
  {
    q: "未経験でもFlutterエンジニアに転職できますか？",
    a: "Web・ネイティブいずれかのアプリ開発経験があれば、Flutter未経験でもポテンシャル採用の対象になり得ます。実機で動くアプリをストアに公開し、状態管理やAPI連携、テストを含めて実装しておくと、学習意欲と基礎力を示せます。完全な開発未経験から狙う場合は、まず別領域で実務経験を積んでからFlutterへ寄せる方が現実的です。",
  },
  {
    q: "Dart/Flutterエンジニアにおすすめの転職エージェントは？",
    a: "IT・Web・ゲームに特化し提案スピードが速いGeekly、IT・Web特化で求人の質が高いレバテックキャリア、自社サービス企業と直接やり取りできる成功報酬型サイトのGreenが選択肢です。Flutterはスタートアップ・自社開発の求人が中心なので、ダイレクト型と仲介型を併用すると間口が広がります。",
  },
  {
    q: "Flutter/Dartは将来性がありますか？",
    a: "Flutterはモバイルのクロスプラットフォーム開発で広く採用され、Web・デスクトップへの展開も進んでいます。一方、案件はモバイルアプリ開発に集中するため、業界としての浮き沈みの影響は受けます。Flutter単体より「Flutter＋バックエンド」「Flutter＋特定ドメインのアプリ知見」の掛け合わせで価値を高めるのが、ミドル層にとって現実的な将来戦略です。",
  },
];

export default function DartSkillPage() {
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
        title="Dartエンジニアの転職ガイド｜年収・求人・将来性【2026年】"
        description="Dart（Flutter）エンジニアの転職市場を出典付きで解説。モバイルアプリ開発でのFlutter需要、求人ボックスやレバテックの公表年収、Web・ネイティブからの参入ルート、30代・40代の戦い方をミドルエンジニア向けに整理します。"
        url="/skill/dart/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Dartエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Dartエンジニアの転職ガイド｜年収・求人・将来性【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | Dart（Flutter）エンジニアの転職市場をミドル層向けに分析
        </p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            DartはGoogleが開発したプログラミング言語で、クロスプラットフォームUIフレームワーク<strong>Flutter</strong>の記述言語として使われます。実務上、Dartエンジニアの求人はほぼ「Flutterエンジニア」として募集され、iOS／Androidを1つのコードベースで開発できるコスト効率からモバイルアプリ開発で採用が広がっています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、Dart/Flutterエンジニア転職の「攻め方」を、<strong>公表年収データ・求められる経験レベル・求人の探し方・他分野からの参入ルート</strong>に分けて、30代・40代の視点を交えて整理します。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "求人ボックス 給料ナビ（掲載求人からの独自試算）",
            "レバテック公表の年代別平均年収（2025年）",
            "経済産業省 IT人材需給に関する調査（2019年公表）",
          ]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-sm text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：Dartエンジニアの転職市場の攻め方</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>Dartは実質「Flutterエンジニア」として戦う言語です。</strong>言語単独で探すより、Flutterによるモバイルアプリ開発の求人に的を絞るのが効率的です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・Dart/Flutter特化の公的年収は乏しいため、<strong>年代別・職種別データで代替</strong>するのが現実的（求人ボックス ソフトウェアエンジニア約511万円ほか）</li>
              <li>・TypeScript／Swift／Kotlinなどアプリ開発経験があれば、Flutter未経験でもポテンシャル採用の余地がある</li>
              <li>・Flutterは<strong>1ソースで両OS対応できるコスト効率</strong>から、スタートアップ・受託のモバイル開発で需要が安定</li>
            </ul>
          </div>
        </section>

        <section id="market" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Dart/Flutterの市場・年収データ（出典付き）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            DartやFlutterに限定した公的な平均年収の公表は乏しいため、ここでは年代別・職種別の公表データで代替します。出典と時点を明示できる値のみを使用します。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Dart/Flutter特化の平均年収", "公的な公表は乏しい（年代別データで代替）", "言語単独の公的統計は限定的"],
                  ["ソフトウェアエンジニアの平均年収（正社員）", "約511万円", "求人ボックス 給料ナビ（掲載求人からの独自試算）"],
                  ["正社員SEの平均年収・30代", "約499万円", "レバテック公表（2025年）"],
                  ["正社員SEの平均年収・40代", "約618万円", "レバテック公表（2025年）"],
                  ["IT人材不足の試算", "2030年に最大約79万人不足", "経産省 IT人材需給調査（2019年公表の試算）"],
                ].map(([label, value, src], i) => (
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
            ※ Dart/Flutter専任の公的平均値は確認できる範囲では乏しいため、本ページではソフトウェアエンジニアの試算値とレバテックの年代別平均（いずれもFlutter特化ではない）で代替しています。Flutter案件の具体的なレンジは、エージェントで最新の保有求人を確認してください。
          </p>
        </section>

        <section id="level" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベルと求人要件の傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Flutter求人は「Flutter経験そのもの」を必須にするものと、「モバイル／フロント経験＋Flutterは入社後キャッチアップ可」とするものに分かれます。求人票によく登場する要件を傾向としてまとめると次の通りです。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { tier: "入口（ポテンシャル）", req: "Web／ネイティブのアプリ開発実務2〜3年／HTTP・APIの基礎／FlutterはGitHub・個人アプリでの自習レベル", note: "Flutter未経験OK求人がここに該当" },
              { tier: "即戦力（ミドル）", req: "Flutterでのアプリ開発・ストアリリース実務／状態管理／ネイティブ連携・テスト実装", note: "求人の中心ゾーン" },
              { tier: "ハイクラス", req: "Flutterアプリの設計・テックリード／CI/CD・大規模化／技術選定", note: "年収800万円以上が狙える層" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2 text-sm">{item.tier}</h3>
                <p className="text-xs text-slate-600 mb-2 leading-relaxed">{item.req}</p>
                <p className="text-xs text-petrol">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="career" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Dartエンジニアのキャリアパス</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Dart/Flutterはモバイルアプリ開発を軸に、設計やマルチプラットフォーム展開へ広がります。掛け合わせるスキルによって到達レンジが変わります。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "モバイルアプリエンジニア", note: "FlutterでのiOS／Androidアプリ開発が中心。求人の最も多いゾーン" },
              { role: "テックリード／モバイル基盤", note: "状態管理・CI/CD・大規模化を担う。設計力が問われる" },
              { role: "フルスタック（モバイル＋API）", note: "Flutter＋バックエンドで、アプリを一気通貫で開発" },
              { role: "フリーランス（Flutter案件）", note: "受託・スタートアップのアプリ開発案件。クロス開発の効率が評価される" },
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

        <section id="find" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の探し方・強いエージェント</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Flutter求人はスタートアップ・自社開発が中心です。特定の1社に絞るより、ダイレクト型と仲介型を併用するのが効率的です。タイプ別に向くサービスを整理します。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Geekly（Web系・スタートアップに強い）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT・Web・ゲーム業界専門で提案スピードが強み。Flutterを採用するスタートアップ・受託のアプリ開発求人を探したい場合の選択肢になります。
              </p>
              <Link href="/review/geekly/" className="text-sm text-petrol hover:underline">Geeklyの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア（IT・Web特化）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT・Web特化で求人の質が高く、技術に踏み込んで話せるアドバイザーが在籍。Flutterのようなモバイル専門求人の提案に向きます。
              </p>
              <Link href="/review/levtech/" className="text-sm text-petrol hover:underline">レバテックキャリアの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Green（ダイレクト型・自社開発）</h3>
              <p className="text-sm text-slate-600 mb-2">
                自社サービス企業と直接やり取りできる成功報酬型サイト。Flutterを採用する自社開発企業の求人に応募したい場合の選択肢です。
              </p>
              <Link href="/review/green/" className="text-sm text-petrol hover:underline">Greenの詳細レビュー →</Link>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            エージェント各社の比較は<Link href="/compare/agents/" className="text-petrol hover:underline">転職エージェント比較</Link>も参照してください。
          </p>
        </section>

        <section id="entry" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">他分野からDart/Flutterに参入するルート</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "アプリ開発の実務経験を土台にする", desc: "TypeScript／JavaScriptのフロント経験や、Swift／Kotlinのネイティブ経験があれば、それを土台に「Flutterは未経験だがキャッチアップ可」とアピールできます。UIや状態管理の考え方は共通点が多く、完全未経験より有利です。" },
              { num: "2", title: "アプリを1本ストアに公開する", desc: "API連携・状態管理・テストまで含めたFlutterアプリを作り、App Store／Google Playに公開します。実機で動くものをストアに出した経験は、口頭の自己申告より強いアピールになります。" },
              { num: "3", title: "Flutter採用企業のポテンシャル枠を狙う", desc: "新規アプリやMVPをFlutterで作る企業は経験者の母数不足から、入社後キャッチアップ前提の採用を行うことがあります。エージェントに「Flutterは学習中、アプリを公開済み」と伝え、そうした求人を紹介してもらうのが近道です。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
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

        <section id="age" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>
              <strong>アプリ開発経験の横展開がしやすい。</strong>FlutterはWeb・ネイティブの知見をそのまま活かせる領域です。30代・40代でアプリ開発の実務を積んでいるなら、その設計経験を土台にFlutterへ寄せることで、年齢の不利を補えます。
            </p>
            <p>
              <strong>掛け算で差別化する。</strong>Flutter単体より「Flutter＋バックエンド」「Flutter＋特定業界のアプリ知見（金融・医療・小売など）」の掛け合わせが、ミドル層の強みです。年齢を重ねた分の業務知識をアプリという実装手段と結びつけて語れると説得力が増します。
            </p>
            <p>
              <strong>マネジメント経験も資産になる。</strong>テックリードやモバイル基盤のFlutter求人では、実装力に加えてチームの技術選定・育成の経験が評価されます。40代でPL／PM経験があるなら、それを技術力とセットで提示しましょう。
            </p>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            年代別の戦略は<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>・<Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職</Link>も参考にしてください。
          </p>
        </section>

        <section id="learn" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルアップ・学習戦略</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>
              <strong>① 公式ドキュメントとWidgetの理解から始める。</strong>Flutterは公式ドキュメントが充実しています。宣言的UIとWidgetツリーの考え方を最初に押さえると、その後の学習がスムーズです。Dartの言語仕様もあわせて学びましょう。
            </p>
            <p>
              <strong>② 状態管理を実プロジェクトで使う。</strong>Riverpod／Blocなどの状態管理はFlutterの実務で必ず問われます。API連携を伴う実用的なアプリを作り、状態管理の設計を経験として語れる状態にしましょう。
            </p>
            <p>
              <strong>③ ストアリリースとCI/CDを経験する。</strong>アプリをストアに公開し、可能ならCI/CDで配信を自動化すると、実務に近い開発フローを示せます。クロスプラットフォームの強みを実証できる題材を選びましょう。
            </p>
            <p>
              学習と転職活動の進め方は<Link href="/knowledge/continuous-learning/" className="text-petrol hover:underline">継続的な学習の習慣化</Link>・<Link href="/knowledge/portfolio/" className="text-petrol hover:underline">ポートフォリオの作り方</Link>もあわせてご覧ください。
            </p>
          </div>
        </section>

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

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">Dart/Flutterのスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            Flutter求人はスタートアップ・自社開発が中心。ダイレクト型とIT特化型エージェントを併用して保有求人を横断比較するのが近道です。
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
              { name: "Flutterエンジニアの転職ガイド", href: "/skill/flutter/" },
              { name: "TypeScriptエンジニアの転職ガイド", href: "/skill/typescript/" },
              { name: "Reactエンジニアの転職ガイド", href: "/skill/react/" },
              { name: "Unityエンジニアの転職ガイド", href: "/skill/unity/" },
              { name: "スキル別転職ガイド一覧", href: "/skill/" },
              { name: "ミドルエンジニア転職ラボTOP", href: "/" },
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
