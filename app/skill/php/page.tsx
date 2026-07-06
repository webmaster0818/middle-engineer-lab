import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/skill/php/" },
  title: "PHPエンジニアの転職ガイド｜Laravel・年収・将来性【2026年】",
  description:
    "PHPエンジニアの転職市場を出典付きで解説。求人数で上位を占めるPHPの市場価値、Laravelでの差別化、WordPress案件からの脱却、求人の探し方、30代・40代の戦い方を整理します。",
};

const toc = [
  { id: "conclusion", label: "1. 結論：PHPエンジニアの転職市場の攻め方" },
  { id: "market", label: "2. PHPの市場・年収データ（出典付き）" },
  { id: "level", label: "3. 求められる経験レベルと求人要件の傾向" },
  { id: "career", label: "4. PHPエンジニアのキャリアパス" },
  { id: "find", label: "5. 求人の探し方・強いエージェント" },
  { id: "entry", label: "6. レガシー／WordPress中心から脱却するルート" },
  { id: "age", label: "7. 30代・40代エンジニアの視点" },
  { id: "learn", label: "8. スキルアップ・学習戦略" },
  { id: "faq", label: "9. よくある質問" },
];

const faqs = [
  {
    q: "PHPエンジニアの平均年収はどのくらいですか？",
    a: "言語単独の公的平均値は限られますが、求人ボックス「給料ナビ」では正社員のWebエンジニアの平均年収が約462万円、ソフトウェアエンジニアが約511万円と試算されています（掲載求人からの独自集計値）。年代別では、レバテック公表の正社員SE平均年収（30代約499万円・40代約618万円／2025年）が参考になります。Laravel等のモダンPHPやテックリード級では、これより上のレンジになる傾向です。",
  },
  {
    q: "PHPの需要は今後も続きますか？",
    a: "続く見込みです。W3Techsの集計（2026年6月時点）では、PHPはサーバーサイド言語が判明しているWebサイトの約71.8%で使われており、Webの基盤として圧倒的なシェアを保っています。WordPress・Laravel・EC-CUBEなど用途も広く、新規のLaravel案件とレガシーのモダナイゼーション案件の双方で需要があります。",
  },
  {
    q: "PHPから他の言語に転向すべきですか？",
    a: "必ずしも転向は必要ありません。LaravelでのモダンPHP開発スキルがあれば十分に市場価値があります。ただしTypeScript（Next.js）やGoを掛け合わせると選択肢が広がり、年収アップにもつながります。完全転向よりスキルの幅を広げる戦略が現実的です。",
  },
  {
    q: "PHPの求人はどんな企業に多いですか？",
    a: "Web制作会社、ECサイト運営企業、SaaS企業、受託開発企業に多く見られます。Laravel案件はスタートアップからエンタープライズまで幅広く、WordPress案件はメディア・コーポレートサイト制作で根強い需要があります。求人数や社名は時期で変動するため、エージェントで最新の保有求人を確認してください。",
  },
  {
    q: "レガシーPHPの経験しかなくても転職できますか？",
    a: "転職は可能ですが、Laravelなどモダンフレームワークの知識を学んでおくことが評価の分かれ目になります。CakePHPやSymfonyの経験があればLaravelへの移行は比較的容易です。個人でLaravelアプリを作りポートフォリオにすると、モダンな開発への適応力を示せます。",
  },
  {
    q: "PHPエンジニアにおすすめの転職エージェントは？",
    a: "IT特化でPHP求人が豊富なレバテックキャリア、Web系企業の求人に強く未経験歓迎求人も多いワークポート、スタートアップのLaravel案件に強いGeeklyが選択肢です。PHPは求人母数が大きいので、複数登録して質と量を比較するのが効率的です。",
  },
  {
    q: "WordPress案件中心のキャリアでも年収は上げられますか？",
    a: "WordPress案件はサイト制作で安定した需要がありますが、年収レンジはやや限られる傾向があります。Laravel等のアプリ開発スキルや、PHP 8系のモダン機能、フロント技術を掛け合わせることで、より年収レンジの広いポジションに移りやすくなります。",
  },
];

export default function PhpSkillPage() {
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
        title="PHPエンジニアの転職ガイド｜Laravel・年収・将来性【2026年】"
        description="PHPエンジニアの転職市場を出典付きで解説。求人数で上位を占めるPHPの市場価値、Laravelでの差別化、WordPress案件からの脱却、求人の探し方、30代・40代の戦い方を整理します。"
        url="/skill/php/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "PHPエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          PHPエンジニアの転職ガイド｜Laravel・年収・将来性【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | PHPエンジニアの転職市場をミドル層向けに分析
        </p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            PHPはWebの基盤として圧倒的なシェアを持ち、求人数でも上位を占める「機会の多い」言語です。一方で案件の幅が広く、WordPress制作中心かLaravelのアプリ開発かで年収レンジが大きく変わります。どの領域で勝負するかの設計が、転職成否を分けます。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、<strong>公表データ・求められる経験レベル・求人の探し方・レガシー／WordPress中心からの脱却ルート</strong>を、30代・40代の視点を交えて整理します。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "paiza「プログラミング言語に関する調査（2025年版）」",
            "W3Techs（2026年6月時点）",
            "求人ボックス 給料ナビ",
            "レバテック公表の年代別平均年収（2025年）",
          ]}
        />

        {/* 目次 */}
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

        {/* 結論 */}
        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：PHPエンジニアの転職市場の攻め方</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>PHPは求人数が多い分、「どの案件で戦うか」で年収が決まります。</strong>WordPress制作で止まらず、Laravelのアプリ開発やフロント・他言語の掛け合わせで、レンジの広いポジションへ移るのが攻め方です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・paiza 2025年調査で企業ニーズ（求人数比率）<strong>3位（11.0%）</strong>。転職機会を得やすい</li>
              <li>・W3Techs集計（2026年6月時点）でWebの<strong>約71.8%がPHP</strong>。需要の土台が大きい</li>
              <li>・<strong>Laravel＋フロント／他言語</strong>の掛け合わせが年収アップの分岐点</li>
            </ul>
          </div>
        </section>

        {/* 市場・年収データ */}
        <section id="market" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">PHPの市場・年収データ（出典付き）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            PHP単独の公的平均年収は限られるため、シェア・求人数・職種別・年代別の公表データを出典と時点付きで使用します。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["WebサイトでのPHP利用シェア", "約71.8%（サーバーサイド言語判明分）", "W3Techs（2026年6月時点）"],
                  ["PHPの求人数ランキング", "企業ニーズ3位（11.0%）", "paiza 2025年版調査（求人比率）"],
                  ["Webエンジニアの平均年収（正社員）", "約462万円", "求人ボックス 給料ナビ（独自試算）"],
                  ["ソフトウェアエンジニアの平均年収（正社員）", "約511万円", "求人ボックス 給料ナビ（同上）"],
                  ["正社員SEの平均年収・30代／40代", "約499万円／約618万円", "レバテック公表（2025年）"],
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
            ※ W3Techsのシェアは「サーバーサイド言語が判明しているサイト」を母数とした集計です。paizaの求人比率・求人ボックスの年収はいずれも掲載求人ベースの参考値で、PHP専任の数値ではありません。Laravel案件・テックリード級の具体的なレンジはエージェントで確認してください。
          </p>
        </section>

        {/* 求められる経験レベル */}
        <section id="level" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベルと求人要件の傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            PHP求人は「WordPress・サイト制作系」と「Laravel・アプリ開発系」で求められる要素が異なります。代表的な3層の要件を整理します。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { tier: "サイト制作系", req: "WordPress／テーマ・プラグイン開発／HTML・CSS・JS／受託の進め方", note: "制作会社・メディア中心" },
              { tier: "Laravel（アプリ開発）", req: "Laravel実務2〜4年／Eloquent・API設計／RDB／テスト", note: "求人レンジが広いゾーン" },
              { tier: "リード／設計", req: "アーキテクチャ設計／レビュー・育成／モダナイゼーション／フロント・クラウド", note: "年収レンジが上がる層" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2 text-sm">{item.tier}</h3>
                <p className="text-xs text-slate-600 mb-2 leading-relaxed">{item.req}</p>
                <p className="text-xs text-petrol">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* キャリアパス */}
        <section id="career" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">PHPエンジニアのキャリアパス</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "Laravelエンジニア", note: "Laravel＋Vue/ReactでのWebアプリ開発が中心" },
              { role: "WordPress開発者", note: "テーマ・プラグイン開発、サイト構築・運用" },
              { role: "フルスタックエンジニア", note: "PHP＋フロント＋クラウドで一気通貫に対応" },
              { role: "テックリード", note: "PHPチームのリード・アーキテクチャ設計" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 mb-1">{item.role}</h3>
                <p className="text-xs text-slate-500">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">
            ※ 各ポジションの年収レンジは企業・時期で変動するため断定を避けています。面談時にエージェントへ確認してください。
          </p>
        </section>

        {/* 求人の探し方 */}
        <section id="find" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の探し方・強いエージェント</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア（IT・Web特化）</h3>
              <p className="text-sm text-slate-600 mb-2">PHP求人が豊富で、技術に精通したアドバイザーが在籍。Laravel・自社開発の提案に向きます。</p>
              <Link href="/review/levtech/" className="text-sm text-petrol hover:underline">レバテックキャリアの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ワークポート（Web系・未経験歓迎も豊富）</h3>
              <p className="text-sm text-slate-600 mb-2">IT・Webに強い総合型で、未経験歓迎求人も多くレスポンスが速いのが特徴。幅広いPHP求人を当たりたい場合に向きます。</p>
              <Link href="/review/workport/" className="text-sm text-petrol hover:underline">ワークポートの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Geekly（Web系・スタートアップに強い）</h3>
              <p className="text-sm text-slate-600 mb-2">IT・Web・ゲーム業界専門で提案スピードが強み。スタートアップのLaravel案件を探したい場合の選択肢です。</p>
              <Link href="/review/geekly/" className="text-sm text-petrol hover:underline">Geeklyの詳細レビュー →</Link>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            エージェント各社の比較は<Link href="/compare/agents/" className="text-petrol hover:underline">転職エージェント比較</Link>も参照してください。
          </p>
        </section>

        {/* 脱却ルート */}
        <section id="entry" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">レガシー／WordPress中心から脱却するルート</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "Laravelの実践スキルを身につける", desc: "Eloquent ORM、Queue、Event、Policyなど、Laravelの機能を実務レベルで使えることが脱却の第一歩です。認証・CRUD・API連携を含むアプリを作り、ポートフォリオにしましょう。" },
              { num: "2", title: "PHP 8系のモダン機能を理解する", desc: "Enum、Fiber、名前付き引数、Union型など、PHP 8系の新機能を活用できると「モダンPHP開発者」としてアピールできます。レガシーとモダンの差を語れることが評価につながります。" },
              { num: "3", title: "フロント・他言語を掛け合わせる", desc: "PHP＋Vue/React（Inertia.js）、PHP＋TypeScriptの組み合わせができると、フルスタックとして年収レンジの広いポジションに移りやすくなります。" },
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

        {/* 30代・40代視点 */}
        <section id="age" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>
              <strong>求人母数の多さは年齢のリスクヘッジになる。</strong>PHPは求人数が多く、年齢で間口が極端に狭まりにくい言語です。30代・40代でも応募先を確保しやすいのは、需要の土台が大きいPHPならではの強みです。
            </p>
            <p>
              <strong>「制作止まり」を脱して年収レンジを上げる。</strong>WordPress制作中心のキャリアだと年収が頭打ちになりやすいため、Laravelのアプリ開発やPHP 8系のモダン機能を一つでも持つことが分岐点です。レガシーとモダンの両方が分かる人材は、モダナイゼーション案件で重宝されます。
            </p>
            <p>
              <strong>受託・業務知識を武器にする。</strong>受託開発で培った要件定義・顧客折衝の経験や、ECなどのドメイン知識は、若手では代替しにくい資産です。技術力とセットで提示すれば、40代でも設計・リードのポジションで戦えます。
            </p>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            年代別の戦略は<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>・<Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職</Link>も参考にしてください。
          </p>
        </section>

        {/* 学習戦略 */}
        <section id="learn" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルアップ・学習戦略</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>
              <strong>① Laravelで一気通貫の成果物を作る。</strong>認証・CRUD・API・テストを含むアプリをLaravelで作り、デプロイまで通します。モダンPHPを実務レベルで扱える証拠になります。
            </p>
            <p>
              <strong>② テストと設計の質を高める。</strong>PHPUnitやPestでのテスト、サービス層の分離など、保守性を意識した設計を学ぶと、レガシー脱却・モダナイゼーション案件で評価されます。
            </p>
            <p>
              <strong>③ フロント・他言語で選択肢を広げる。</strong>TypeScript（Next.js）やGoを掛け合わせると、フルスタック・新規開発の求人にも対応でき、キャリアの幅が広がります。
            </p>
            <p>
              学習と転職活動の進め方は<Link href="/knowledge/continuous-learning/" className="text-petrol hover:underline">継続的な学習の習慣化</Link>・<Link href="/knowledge/portfolio/" className="text-petrol hover:underline">ポートフォリオの作り方</Link>もあわせてご覧ください。
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
          <h2 className="text-xl font-bold mb-3">PHPのスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            PHPは求人母数が大きいからこそ、複数のIT特化型エージェントで質と量を比較して年収アップの可能性を探りましょう。
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
              { name: "Ruby on Railsエンジニアの転職ガイド", href: "/skill/ruby/" },
              { name: "TypeScriptエンジニアの転職ガイド", href: "/skill/typescript/" },
              { name: "フロントエンドエンジニアの転職ガイド", href: "/skill/frontend/" },
              { name: "Web系への転職（SIerから）", href: "/industry/sier-to-web/" },
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
    
      <section className="mx-auto max-w-3xl px-4 pb-10">
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
          <h2 className="font-bold text-slate-900 mb-2">この技術と関連の深い掲載企業</h2>
          <p className="text-xs text-slate-500 mb-2">各社の公開技術情報でこの技術への言及が確認できた掲載企業です。年収・選考は各社ページをご覧ください。</p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-sm"><li><a href="/company/base/" className="text-petrol-deep hover:underline">BASE</a></li><li><a href="/company/colopl/" className="text-petrol-deep hover:underline">コロプラ</a></li><li><a href="/company/gree/" className="text-petrol-deep hover:underline">グリー（GREE）</a></li><li><a href="/company/kadokawa/" className="text-petrol-deep hover:underline">KADOKAWA</a></li><li><a href="/company/kaonavi/" className="text-petrol-deep hover:underline">カオナビ</a></li><li><a href="/company/meta/" className="text-petrol-deep hover:underline">Meta Japan</a></li></ul>
          <p className="mt-3 text-sm"><a href="/skill/" className="text-petrol-deep hover:underline">スキル別ガイド一覧</a> ／ <a href="/salary/company-ranking/" className="text-petrol-deep hover:underline">企業年収ランキング</a></p>
        </div>
      </section>
      </>
  );
}
