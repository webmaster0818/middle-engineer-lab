import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/skill/django/" },
  title: "Djangoエンジニアの転職ガイド｜年収・求人・将来性【2026年】",
  description:
    "Django（Python）エンジニアの転職市場を出典付きで解説。Web開発・データ／AI連携でのDjango需要、求人ボックスやレバテックの公表年収、他フレームワークからの参入ルート、30代・40代の戦い方をミドルエンジニア向けに整理します。",
};

const toc = [
  { id: "conclusion", label: "1. 結論：Djangoエンジニアの転職市場の攻め方" },
  { id: "market", label: "2. Djangoの市場・年収データ（出典付き）" },
  { id: "level", label: "3. 求められる経験レベルと求人要件の傾向" },
  { id: "career", label: "4. Djangoエンジニアのキャリアパス" },
  { id: "find", label: "5. 求人の探し方・強いエージェント" },
  { id: "entry", label: "6. 他フレームワークからDjangoに参入するルート" },
  { id: "age", label: "7. 30代・40代エンジニアの視点" },
  { id: "learn", label: "8. スキルアップ・学習戦略" },
  { id: "faq", label: "9. よくある質問" },
];

const faqs = [
  {
    q: "Djangoエンジニアの平均年収はどのくらいですか？",
    a: "Djangoはフレームワークのため言語単独の公的平均値は乏しく、記述言語Pythonや職種別・年代別データで代替するのが現実的です。求人ボックス「給料ナビ」では正社員のソフトウェアエンジニアが約511万円、Webエンジニアが約462万円と試算されています（掲載求人からの独自集計値）。年代別ではレバテック公表の正社員SE平均年収（30代約499万円・40代約618万円／2025年）が参考になります。PythonはAI・データ領域でも使われ、求人ごとの年収幅が大きいため、レンジで捉えるのが現実的です。",
  },
  {
    q: "DjangoとPythonの違いは何ですか？このページは何が違いますか？",
    a: "Pythonはプログラミング言語、DjangoはPythonで書かれたWebアプリケーションフレームワークです。本ページはフレームワークとしてのDjango（Web開発、管理画面の自動生成、データ／AIとの連携）に焦点を当てています。AI・データ分析を含むPython全体の市場は、Pythonエンジニアの転職ガイドもあわせてご覧ください。",
  },
  {
    q: "Djangoはどんな開発・企業で使われていますか？",
    a: "DjangoはフルスタックのWebフレームワークで、管理画面（admin）の自動生成やORM、認証など『電池付属（batteries included）』の機能が揃っているのが特徴です。業務系Webアプリ、社内システム、SaaS、データ／機械学習の結果を見せる管理画面やAPIなどで採用されます。Pythonのデータ・AIエコシステムと同じ言語で書けるため、データ連携を伴うWeb開発で選ばれやすいフレームワークです。",
  },
  {
    q: "他のフレームワークからDjangoへ転向するのは難しいですか？",
    a: "Rails／Laravel／SpringなどでのWeb開発経験があれば、MVT（MVC相当）やORM、ルーティングの概念は共通しており、Djangoへの移行はスムーズです。Pythonの文法はシンプルで習得しやすく、Djangoの規約に沿った構成を一度作れば全体像をつかめます。個人でDjangoアプリを1本作ると、admin・ORM・認証といった標準機能の使い方を実地で学べます。",
  },
  {
    q: "Django未経験でも転職できますか？",
    a: "他言語でのWeb開発経験や、Pythonでのデータ／スクリプト経験があれば、Django未経験でもポテンシャル採用の対象になり得ます。GitHubにDjangoで作ったWebアプリ（認証・CRUD・APIを含む）を公開すると、フレームワークの基礎を示せます。データ／AI連携の経験があると、Pythonエコシステムの強みとして評価につながります。",
  },
  {
    q: "Djangoエンジニアにおすすめの転職エージェントは？",
    a: "IT・Web特化で求人の質が高いレバテックキャリア、データ・AI連携を含むWeb系の提案に強いGeekly、自社サービス企業と直接やり取りできる成功報酬型サイトのGreenが選択肢です。Djangoは業務系・データ系・自社開発と幅があるため、複数登録して保有求人を比較するのが現実的です。",
  },
  {
    q: "Djangoは将来性がありますか？",
    a: "Pythonの普及とともにDjangoは安定した需要を保っており、業務系WebやデータプロダクトのバックエンドでDjangoが採用される場面は多くあります。一方、API中心の構成ではFastAPIが選ばれることも増えています。Django単体より「Django＋データ／AI」「Django＋フロントエンド」の掛け合わせで価値を高めるのが、ミドル層にとって現実的な将来戦略です。",
  },
];

export default function DjangoSkillPage() {
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
        title="Djangoエンジニアの転職ガイド｜年収・求人・将来性【2026年】"
        description="Django（Python）エンジニアの転職市場を出典付きで解説。Web開発・データ／AI連携でのDjango需要、求人ボックスやレバテックの公表年収、他フレームワークからの参入ルート、30代・40代の戦い方をミドルエンジニア向けに整理します。"
        url="/skill/django/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Djangoエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Djangoエンジニアの転職ガイド｜年収・求人・将来性【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | Djangoエンジニアの転職市場をミドル層向けに分析
        </p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            DjangoはPythonで書かれたフルスタックWebフレームワークで、<strong>管理画面の自動生成・ORM・認証</strong>などの機能が標準で揃う「電池付属」の設計が特徴です。業務系Webアプリやデータ／AI連携を伴うバックエンドで採用され、Pythonのデータエコシステムと同じ言語で書ける点が強みです。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、フレームワークとしてのDjangoを軸に、転職の「攻め方」を<strong>公表年収データ・求められる経験レベル・求人の探し方・他フレームワークからの参入ルート</strong>に分けて、30代・40代の視点を交えて整理します。Python全体の市場は<Link href="/skill/python/" className="text-petrol hover:underline">Pythonエンジニアの転職ガイド</Link>もあわせてご覧ください。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：Djangoエンジニアの転職市場の攻め方</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>DjangoはPythonエコシステムの強みを活かせるWebフレームワークです。</strong>Web開発単体で勝負するより、データ・AIとの連携という掛け合わせで価値を高めるのが向いています。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・Django特化の公的年収は乏しいため<strong>Python・職種別・年代別データで代替</strong>（求人ボックス ソフトウェアエンジニア約511万円ほか）</li>
              <li>・Rails／Laravel／Springなど他フレームワークのWeb開発経験があれば、Djangoへの移行はスムーズ</li>
              <li>・Djangoは<strong>データ／AI連携やフロントエンドとの掛け合わせ</strong>で市場価値が高まる</li>
            </ul>
          </div>
        </section>

        <section id="market" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Djangoの市場・年収データ（出典付き）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Djangoはフレームワークのため言語単独の公的平均値は乏しく、ここでは職種別・年代別の公表データで代替します。出典と時点を明示できる値のみを使用します。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Django特化の平均年収", "公的な公表は乏しい（Python・職種別で代替）", "フレームワーク単独の公的統計は限定的"],
                  ["ソフトウェアエンジニアの平均年収（正社員）", "約511万円", "求人ボックス 給料ナビ（掲載求人からの独自試算）"],
                  ["Webエンジニアの平均年収（正社員）", "約462万円", "求人ボックス 給料ナビ（同上）"],
                  ["正社員SEの平均年収・30代", "約499万円", "レバテック公表（2025年）"],
                  ["正社員SEの平均年収・40代", "約618万円", "レバテック公表（2025年）"],
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
            ※ Django専任の公的平均値は確認できる範囲では乏しいため、職種別の試算値とレバテックの年代別平均（いずれもDjango特化ではない）で代替しています。PythonはWeb系かAI／データ系かで年収分布が大きく変わるため、具体的なレンジはエージェントで最新の保有求人を確認してください。
          </p>
        </section>

        <section id="level" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベルと求人要件の傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Django求人は「Django経験そのもの」を必須にするものと、「Web開発経験＋Djangoは入社後キャッチアップ可」とするものに分かれます。求人票によく登場する要件を傾向としてまとめると次の通りです。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { tier: "入口（ポテンシャル）", req: "他言語でのWeb開発実務2〜3年（またはPythonでのスクリプト・データ経験）／DB・HTTPの基礎／Djangoは自習レベル", note: "Django未経験OK求人がここに該当" },
              { tier: "即戦力（ミドル）", req: "DjangoでのWebアプリ・API開発の実務／ORM・テスト／Django REST framework等", note: "求人の中心ゾーン" },
              { tier: "ハイクラス", req: "Django基盤の設計・テックリード／データ・AI連携／技術選定", note: "年収800万円以上が狙える層" },
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">Djangoエンジニアのキャリアパス</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            DjangoはWeb開発を軸に、データ・AI連携やフルスタックへ広がります。掛け合わせるスキルによって到達レンジが変わります。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "Webアプリエンジニア", note: "DjangoでのWebアプリ・社内システム開発が中心。求人の多いゾーン" },
              { role: "バックエンド（API＋データ連携）", note: "Django REST framework＋データ／機械学習の結果を扱うAPI開発" },
              { role: "フルスタック（Django＋フロント）", note: "Django＋React等で、サービスを一気通貫で開発" },
              { role: "テックリード／アーキテクト", note: "Django基盤の設計＋データ基盤連携＋技術選定" },
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
            Django求人は業務系・データ系・自社開発と幅があります。特定の1社に絞るより、複数のチャネルを横断するのが効率的です。タイプ別に向くサービスを整理します。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア（IT・Web特化）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT・Web特化で求人の質が高く、技術に踏み込んで話せるアドバイザーが在籍。Djangoを含むPython系求人の提案に向きます。
              </p>
              <Link href="/review/levtech/" className="text-sm text-petrol hover:underline">レバテックキャリアの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Geekly（Web系・スタートアップに強い）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT・Web・ゲーム業界専門で提案スピードが強み。データ・AI連携を含むWeb系のDjango求人を探したい場合の選択肢になります。
              </p>
              <Link href="/review/geekly/" className="text-sm text-petrol hover:underline">Geeklyの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Green（ダイレクト型・自社開発）</h3>
              <p className="text-sm text-slate-600 mb-2">
                自社サービス企業と直接やり取りできる成功報酬型サイト。Djangoを採用する自社開発企業に直接応募したい場合の選択肢です。
              </p>
              <Link href="/review/green/" className="text-sm text-petrol hover:underline">Greenの詳細レビュー →</Link>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            エージェント各社の比較は<Link href="/compare/agents/" className="text-petrol hover:underline">転職エージェント比較</Link>も参照してください。
          </p>
        </section>

        <section id="entry" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">他フレームワークからDjangoに参入するルート</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "Web開発またはPython経験を土台にする", desc: "Rails／Laravel／SpringなどのWeb開発経験、またはPythonでのデータ・スクリプト経験があれば、それを土台に「Djangoは未経験だがキャッチアップ可」とアピールできます。完全未経験より有利です。" },
              { num: "2", title: "DjangoアプリをGitHubに公開する", desc: "認証・CRUD・APIを備えたDjangoアプリを作って公開します。admin・ORM・Django REST frameworkといった標準機能を使いこなせることが伝わると、フレームワークの理解を示せます。" },
              { num: "3", title: "データ・AI連携を絡めて差別化する", desc: "機械学習の結果を返すAPIや、データ集計の管理画面など、Pythonエコシステムを活かした題材を作ると、他フレームワーク出身者との差別化になります。エージェントにその志向を伝え、データ寄りのDjango求人を紹介してもらいましょう。" },
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
              <strong>Web開発経験を横展開しやすい。</strong>DjangoはMVCの考え方が他フレームワークと共通で、30代・40代でWeb開発の実務を積んでいるなら移行しやすい領域です。Pythonの汎用性も相まって、業務系からデータ寄りまで幅広いポジションを狙えます。
            </p>
            <p>
              <strong>データ・AIとの掛け算で差別化する。</strong>Django単体より「Django＋データ／AI」「Django＋特定ドメイン（医療・製造・金融など）」の掛け合わせが、ミドル層の強みです。年齢を重ねた分の業務知識を、Pythonエコシステムと結びつけて語れると説得力が増します。
            </p>
            <p>
              <strong>マネジメント経験も資産になる。</strong>テックリードやアーキテクトのDjango求人では、実装力に加えてチームの技術選定・育成の経験が評価されます。40代でPL／PM経験があるなら、それを技術力とセットで提示しましょう。
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
              <strong>① 標準機能（admin・ORM・認証）を使いこなす。</strong>Djangoは「電池付属」で標準機能が豊富です。公式チュートリアルに沿ってアプリを作り、adminやORM、認証の使い方を押さえると、Djangoらしい開発を最短で身につけられます。
            </p>
            <p>
              <strong>② API開発（DRF）を経験する。</strong>Django REST frameworkを使ったAPI開発は実務で頻出です。フロントやモバイルと連携するAPIを設計・実装し、認証やシリアライザの扱いを経験として語れる状態にしましょう。
            </p>
            <p>
              <strong>③ データ・AIエコシステムを掛け合わせる。</strong>pandasや機械学習の成果をDjangoで配信するなど、Pythonの強みを活かす題材に取り組むと、データ寄りの高付加価値ポジションに近づきます。Web単体に閉じないのが市場価値を高める鍵です。
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
          <h2 className="text-xl font-bold mb-3">Djangoのスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            Django求人は業務系・データ系・自社開発と幅広いので、複数のIT特化型エージェントで保有求人を横断比較するのが近道です。
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
              { name: "Pythonエンジニアの転職ガイド", href: "/skill/python/" },
              { name: "Ruby on Railsエンジニアの転職ガイド", href: "/skill/rails/" },
              { name: "データアナリストの転職ガイド", href: "/skill/data-analyst/" },
              { name: "生成AIエンジニアの転職ガイド", href: "/skill/generative-ai/" },
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
