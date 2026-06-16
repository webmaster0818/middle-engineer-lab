import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "Angularエンジニアの転職ガイド｜年収・求人・将来性【2026年】",
  description:
    "Angularエンジニアの転職市場を出典付きで解説。求人ボックス・求人媒体の公表値をもとに、エンタープライズSPA向けフレームワークの市場価値、求人傾向、他技術からの参入ルート、30代・40代の戦い方をミドルエンジニア向けに整理します。",
};

const toc = [
  { id: "conclusion", label: "1. 結論：Angularエンジニアの転職市場の攻め方" },
  { id: "market", label: "2. Angularの市場・年収データ（出典付き）" },
  { id: "level", label: "3. 求められる経験レベルと求人要件の傾向" },
  { id: "career", label: "4. Angularエンジニアのキャリアパス" },
  { id: "find", label: "5. 求人の探し方・強いエージェント" },
  { id: "entry", label: "6. 経験浅めからAngularに参入するルート" },
  { id: "age", label: "7. 30代・40代エンジニアの視点" },
  { id: "learn", label: "8. スキルアップ・学習戦略" },
  { id: "faq", label: "9. よくある質問" },
];

const faqs = [
  {
    q: "Angularエンジニアの平均年収はどのくらいですか？",
    a: "Angular単体の公表平均年収は乏しいため、関連職種・関連技術のデータで代替します。求人ボックス給料ナビ（2026年6月時点）ではフロントエンドエンジニアの平均年収が約460万円、Webエンジニアが約462万円です。求人媒体（Forkwell等）のAngular求人では上限年収1300万円・下限年収の最高値800万円といった例も掲載されています。Angularはエンタープライズ領域での採用が多く、求人の絶対数は限られるものの、扱えるエンジニアが少ないため一定の希少性があります。いずれも調査時点の公開値で、個人の年収を保証するものではありません。",
  },
  {
    q: "Angularはどんな特徴のフレームワークですか？",
    a: "AngularはGoogleが開発するフルスタックなフロントエンドフレームワークで、TypeScriptを前提とし、ルーティング・フォーム・HTTP通信・DI（依存性注入）などを標準で備えます。設計の枠組みがしっかりしているため、大規模・長期運用のエンタープライズSPAに向きます。React/Vueと比べて「すべて入り」で規約が強いのが特徴です。",
  },
  {
    q: "Angularの求人はどんな企業に多いですか？",
    a: "金融・保険・製造・SIerなど、堅牢さと長期保守が重視されるエンタープライズ領域や業務システムに多く見られます。大規模な管理画面・業務アプリでAngularの規約の強さが活きるためです。一方、Web系スタートアップではReact/Vueが選ばれやすい傾向があります。具体的な社名や求人数は時期で変動するため、エージェントで最新の保有求人を確認してください。",
  },
  {
    q: "Angular未経験でも転職は可能ですか？",
    a: "TypeScriptやReact/Vueなどモダンフロントの実務経験があれば、Angular未経験でもポテンシャル採用の対象になり得ます。AngularはTypeScript前提なので、型の素養があると学習がスムーズです。GitHubにAngularで作ったSPAを公開し、コンポーネント設計やDIの意図を説明できる状態にしておくと基礎力を示せます。ただし「Angular実務2年以上」を求める即戦力求人もあり、入口の幅は求人によって差があります。",
  },
  {
    q: "Angularは将来性がありますか？",
    a: "AngularはGoogleが継続的にメンテナンスし、近年はSignalsやスタンドアロンコンポーネントなど近代化が進んでいます。新規のWeb系では採用比率が下がる傾向はあるものの、既存のエンタープライズシステムでの利用は根強く、保守・拡張の需要は継続しています。新興技術ではなく「安定領域で長く使われる」という性格を理解して選ぶのが現実的です。",
  },
  {
    q: "フレームワーク単体より何が評価されますか？",
    a: "実務では「Angularが書ける」こと自体より、TypeScriptの言語力、設計・テスト・大規模アプリの保守経験、バックエンドとの連携といった総合力が評価されます。特にAngularが使われる業務システムでは、要件の複雑さを設計で捌く力が問われます。フレームワークは実装手段であり、面接ではどんな課題をどう解決したかが軸になります。",
  },
  {
    q: "Angularエンジニアにおすすめの転職エージェントは？",
    a: "IT・Web特化で高年収求人比率が高いレバテックキャリア、ハイクラス・スカウト型のビズリーチ、Web系の提案に強いGeeklyの併用が選択肢です。Angularは求人母数が限られ、エンタープライズ案件はエージェント経由のものも多いため、複数登録して保有求人を横断的に比較するのが現実的です。",
  },
  {
    q: "Angularエンジニアはしつこく営業されたり断られたりしますか？",
    a: "エージェントの連絡頻度は担当者により差があり、希望すればメール中心・LINE中心など連絡手段を調整できます。フロントエンドの実績が薄い段階では紹介求人が絞られることもありますが、これは「断られた」のではなく要件とのマッチングの問題です。個人開発やTypeScriptの実務など材料を補って再相談する余地があります。",
  },
];

export default function AngularSkillPage() {
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
        title="Angularエンジニアの転職ガイド｜年収・求人・将来性【2026年】"
        description="Angularエンジニアの転職市場を出典付きで解説。エンタープライズSPA向けフレームワークの市場価値、求人傾向、他技術からの参入ルート、30代・40代の戦い方をミドルエンジニア向けに整理します。"
        url="/skill/angular/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Angularエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Angularエンジニアの転職ガイド｜年収・求人・将来性【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | Angularエンジニアの転職市場をミドル層向けに分析
        </p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            AngularはGoogleが開発するTypeScript前提のフロントエンドフレームワークで、ルーティング・フォーム・HTTP通信・DIなどを標準で備える「フルスタック型」が特徴です。規約と設計の枠組みが強く、大規模・長期運用のエンタープライズSPAや業務システムで採用されてきました。求人の絶対数はReact/Vue系より少ないものの、扱えるエンジニアが限られる希少領域です。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、Angularエンジニア転職の「攻め方」を、<strong>公表年収データ・求められる経験レベル・求人の探し方・経験浅めからの参入ルート</strong>に分けて、30代・40代の視点を交えて整理します。フレームワーク単体ではなく「TypeScriptの言語力＋大規模アプリの実務」で評価される点も誠実にお伝えします。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "求人ボックス 給料ナビ（フロントエンド／Webエンジニア・2026年6月閲覧）",
            "Forkwell Jobs等の求人媒体（Angular求人の提示年収・2026年6月閲覧）",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：Angularエンジニアの転職市場の攻め方</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>Angularは「エンタープライズ領域で長く使われる安定スキル」です。</strong>新規Web系で数を狙うより、業務システム・大規模SPAを開発する企業に的を絞り、TypeScriptと設計力をセットで示すのが転職成功の軸になります。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・関連職種のフロントエンドエンジニア平均年収は<strong>約460万円</strong>（求人ボックス・2026年6月）。求人媒体のAngular求人では上限1300万円の例も</li>
              <li>・TypeScriptやReact/Vueの経験があれば、Angular未経験でもポテンシャル採用の余地がある</li>
              <li>・Angularは<strong>大規模アプリの設計・保守経験</strong>との掛け合わせで市場価値が上がる</li>
            </ul>
          </div>
        </section>

        {/* 市場・年収データ */}
        <section id="market" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Angularの市場・年収データ（出典付き）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Angular単体の公表平均年収は乏しいため、ここでは関連職種（フロントエンド職）の公表値と求人媒体の提示年収で代替し、出典と時点を明示します。創作した数値は使用していません。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["フロントエンドエンジニアの平均年収", "約460万円", "求人ボックス 給料ナビ（2026年6月閲覧）"],
                  ["Webエンジニアの平均年収", "約462万円", "求人ボックス 給料ナビ（2026年6月閲覧）"],
                  ["Angular求人の提示年収（上限の最高値）", "上限1300万円・下限の最高値800万円", "Forkwell Jobs等の求人媒体（2026年6月閲覧）"],
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
            ※ Angular特化の公表平均年収は乏しいため、フロントエンド職の平均と求人媒体の提示年収を代替指標として用いています。求人媒体の上限年収は一部の高額求人の値で、平均ではありません。Angular求人の絶対数は限られるため、最新の実勢はエージェントで保有求人を確認することをおすすめします。
          </p>
        </section>

        {/* 求められる経験レベル */}
        <section id="level" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベルと求人要件の傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Angular求人は「Angular実務そのもの」を必須にするものと、「TypeScript/SPA実務＋Angularは入社後キャッチアップ可」とするものに分かれます。求人票によく登場する要件を傾向としてまとめると次の通りです。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { tier: "入口（ポテンシャル）", req: "TypeScriptまたはJavaScriptでのSPA開発1〜3年／HTML・CSS／AngularはGitHub等での自習レベル", note: "Angular未経験OK求人がここに該当" },
              { tier: "即戦力（ミドル）", req: "Angularでの業務アプリ開発実務／RxJS・DI・フォーム／コンポーネント設計／テスト実装", note: "求人の中心ゾーン" },
              { tier: "ハイクラス", req: "大規模Angularアプリの設計・テックリード／パフォーマンス最適化／フロントの技術選定・規約整備", note: "年収800万円以上が狙える層" },
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">Angularエンジニアのキャリアパス</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Angularはエンタープライズのフロントエンドからアーキテクト・業務システム領域へ広げやすい技術です。掛け合わせるスキルによって到達できるレンジが変わります。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "フロントエンドエンジニア", note: "Angularでの業務アプリ・管理画面開発が中心。求人の最も多いゾーン" },
              { role: "業務システムエンジニア", note: "Angular＋バックエンドで大規模業務システムを担当。SIer・金融で需要" },
              { role: "テックリード／フロントアーキテクト", note: "大規模Angularアプリの設計＋技術選定＋チームリード" },
              { role: "フリーランス（Angular案件）", note: "エンタープライズSPA・長期保守案件。希少性から単価が高い傾向" },
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
            Angularは求人母数が限られるため、特定の1社に絞るより複数のチャネルを横断するのが効率的です。タイプ別に向くサービスを整理します。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア（IT・Web特化）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT・Web特化で高年収求人の比率が高く、技術に踏み込んで話せるアドバイザーが在籍。Angularのような専門求人の提案に向きます。
              </p>
              <Link href="/review/levtech/" className="text-sm text-petrol hover:underline">レバテックキャリアの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ（ハイクラス・スカウト型）</h3>
              <p className="text-sm text-slate-600 mb-2">
                年収750万円以上を中心としたハイクラス・スカウト型。エンタープライズのフロントアーキテクトやテックリード級の求人・スカウトに出会いやすいのが特徴です。
              </p>
              <Link href="/review/bizreach-it/" className="text-sm text-petrol hover:underline">ビズリーチの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Geekly（Web系・IT業界に強い）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT・Web・ゲーム業界専門で、提案スピードが強み。Angularを採用するIT企業・業務システム案件を探したい場合の選択肢になります。
              </p>
              <Link href="/review/geekly/" className="text-sm text-petrol hover:underline">Geeklyの詳細レビュー →</Link>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            エージェント各社の比較は<Link href="/compare/agents/" className="text-petrol hover:underline">転職エージェント比較</Link>も参照してください。
          </p>
        </section>

        {/* 経験浅めからの参入ルート */}
        <section id="entry" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験浅めからAngularに参入するルート</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "TypeScript・SPAの実務経験を土台にする", desc: "TypeScriptやReact/VueでのSPA経験があれば、それを土台に「Angularは未経験だがキャッチアップ可」とアピールできます。AngularはTypeScript前提なので、型の素養があるエンジニアは設計思想に馴染みやすいです。" },
              { num: "2", title: "GitHubに実務に近いAngularアプリを公開する", desc: "業務アプリ風の管理画面や、フォーム・HTTP通信・DIを使ったSPAをAngularで作って公開します。コンポーネント設計・RxJS・テストまで含めると、動くだけでなく設計の意図が伝わる状態になります。" },
              { num: "3", title: "エンタープライズ領域のポテンシャル枠を狙う", desc: "業務システムを内製・保守する企業は、Angular経験者の母数不足から入社後キャッチアップ前提の採用を行うことがあります。エージェントに「Angularは学習中」と伝え、そうした求人を紹介してもらうのが近道です。" },
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
              <strong>安定領域の希少スキルは年齢の不利を相殺しやすい。</strong>Angularのように扱える人が限られ、かつ長期運用が前提の領域では、「若くて安い人材」より「大規模アプリを設計・保守できる経験者」が求められます。30代・40代で業務システムの実務を積んでいるなら、その設計経験こそが武器になります。
            </p>
            <p>
              <strong>掛け算で差別化する。</strong>「Angular＋過去のドメイン知識（金融・製造・物流など）」の掛け合わせが、ミドル層の強みです。年齢を重ねた分の業務知識を、Angularという実装手段と結びつけて語れると、エンタープライズ案件で説得力が増します。
            </p>
            <p>
              <strong>マネジメント経験も資産になる。</strong>テックリードやフロントアーキテクトの求人では、コードを書く力に加えてチームの技術選定・育成の経験が評価されます。40代でPL／PM経験があるなら、それを技術力とセットで提示しましょう。
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
              <strong>① 公式ドキュメントとTypeScriptの基礎を固める。</strong>Angularは公式ドキュメントが体系的です。まずTypeScriptの基礎を固めたうえで、コンポーネント・DI・ルーティング・フォームといったAngular固有の枠組みを公式で押さえると、規約の意図まで理解できます。
            </p>
            <p>
              <strong>② RxJSと状態管理に慣れる。</strong>Angularでは非同期処理にRxJSが多用されます。Observableの考え方や、状態管理パターンを実プロジェクトで使うと、即戦力ゾーンの求人で語れる経験になります。近年のSignalsなど新機能も押さえておくと差がつきます。
            </p>
            <p>
              <strong>③ 大規模アプリの設計・保守を掛け合わせる。</strong>Angularが活きるのは大規模・長期運用の現場です。モジュール分割、テスト戦略、パフォーマンス最適化といった「大きく作って長く保つ」経験は、エンタープライズ案件で差がつくポイントになります。
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
          <h2 className="text-xl font-bold mb-3">Angularのスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            Angularは求人母数が限られるからこそ、複数のIT特化型エージェントで保有求人を横断比較するのが近道です。
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
              { name: "TypeScriptエンジニアの転職ガイド", href: "/skill/typescript/" },
              { name: "Reactエンジニアの転職ガイド", href: "/skill/react/" },
              { name: "Vueエンジニアの転職ガイド", href: "/skill/vue/" },
              { name: "フロントエンドエンジニアの転職ガイド", href: "/skill/frontend/" },
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
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-sm"><li><a href="/company/visional/" className="text-petrol-deep hover:underline">ビジョナル/ビズリーチ</a></li></ul>
          <p className="mt-3 text-sm"><a href="/skill/" className="text-petrol-deep hover:underline">スキル別ガイド一覧</a> ／ <a href="/salary/company-ranking/" className="text-petrol-deep hover:underline">企業年収ランキング</a></p>
        </div>
      </section>
      </>
  );
}
