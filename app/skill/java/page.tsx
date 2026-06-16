import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "Javaエンジニアの転職ガイド｜年収・求人・将来性【2026年】",
  description:
    "Javaエンジニアの転職市場を出典付きで解説。求人数で上位を占めるJavaの市場価値、SIerから自社開発への移行、Spring Boot・クラウドでの差別化、30代・40代の戦い方をミドル向けに整理します。",
};

const toc = [
  { id: "conclusion", label: "1. 結論：Javaエンジニアの転職市場の攻め方" },
  { id: "market", label: "2. Javaの市場・年収データ（出典付き）" },
  { id: "level", label: "3. 求められる経験レベルと求人要件の傾向" },
  { id: "career", label: "4. Javaエンジニアのキャリアパス" },
  { id: "find", label: "5. 求人の探し方・強いエージェント" },
  { id: "entry", label: "6. SIerから自社開発へ移行するルート" },
  { id: "age", label: "7. 30代・40代エンジニアの視点" },
  { id: "learn", label: "8. スキルアップ・学習戦略" },
  { id: "faq", label: "9. よくある質問" },
];

const faqs = [
  {
    q: "Javaエンジニアの平均年収はどのくらいですか？",
    a: "言語単独の公的平均値は限られますが、求人ボックス「給料ナビ」では正社員のシステムエンジニアの平均年収が約516万円、ソフトウェアエンジニアが約511万円と試算されています（掲載求人からの独自集計値）。年代別では、レバテック公表の正社員SE平均年収（30代約499万円・40代約618万円／2025年）が参考になります。金融系やアーキテクト・PM級ではこれより上のレンジになる傾向です。",
  },
  {
    q: "Javaの将来性はどうですか？",
    a: "Javaは金融・保険・物流・官公庁などミッションクリティカルなシステムで広く使われ、需要が安定しています。paiza「プログラミング言語に関する調査（2025年版）」でも、企業ニーズ（求人数比率）でJavaは2位（13.9%）と上位でした。提示年収トップ層ではないものの、求人の母数が大きく転職機会を得やすい言語です。",
  },
  {
    q: "Javaエンジニアの転職で有利なスキルは？",
    a: "Spring Boot/Spring Cloud、マイクロサービスアーキテクチャ、AWS/Azure上でのJavaアプリ運用、CI/CDパイプライン構築の経験が評価されやすい傾向です。Kotlin経験もプラスになります。レガシーJavaのモダナイゼーション（Spring Boot移行・クラウドリフト）の経験は、DX案件で重宝されます。",
  },
  {
    q: "SIerから自社開発に転職できますか？",
    a: "可能です。SIerで培ったJava開発・大規模システムの経験は自社開発企業でも評価されます。ただしモダンなフレームワーク（Spring Boot等）やアジャイル開発の理解、そしてGitHub等での活動実績があるとより有利になります。「設計書通りに作る」だけでなく「自分で設計・改善した」経験を言語化しておきましょう。",
  },
  {
    q: "Javaエンジニアにおすすめの転職エージェントは？",
    a: "IT特化でJava求人が豊富なレバテックキャリア、金融・保険系のJava求人や求人母数の大きいリクルートエージェントIT、アーキテクト・テックリード級のハイクラス求人に強いビズリーチの3社併用が選択肢です。求人の幅が広い言語なので、複数登録して比較するのが効率的です。",
  },
  {
    q: "40代のJavaエンジニアでも転職できますか？",
    a: "十分可能です。特にPL/PM経験のある40代Javaエンジニアは需要が高く、金融・保険業界では業務知識を持つベテランの需要が安定しています。一方で「古い技術しか触っていない」と見られないよう、Spring Bootやクラウドなどモダンな要素を一つでも経験・学習しておくことが重要です。",
  },
  {
    q: "Javaエンジニアはエージェントから連絡が多くてしつこいですか？",
    a: "求人母数が大きい言語のため、エージェントによっては紹介数・連絡が多くなることがあります。希望すればメール中心・頻度控えめなど調整できるので、初回面談で連絡方針を伝えておくとミスマッチを防げます。複数社に登録する場合は、メインとサブの役割を決めると負担が減ります。",
  },
];

export default function JavaSkillPage() {
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
        title="Javaエンジニアの転職ガイド｜年収・求人・将来性【2026年】"
        description="Javaエンジニアの転職市場を出典付きで解説。求人数で上位を占めるJavaの市場価値、SIerから自社開発への移行、Spring Boot・クラウドでの差別化、30代・40代の戦い方をミドル向けに整理します。"
        url="/skill/java/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Javaエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Javaエンジニアの転職ガイド｜年収・求人・将来性【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | Java転職市場の動向を30代・40代エンジニア向けに解説
        </p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            Javaは金融・保険・物流・官公庁などの基幹システムで広く使われ、求人数で常に上位を占める「機会の多い」言語です。提示年収トップ層ではないものの、求人母数が大きく、モダンな要素を掛け合わせれば年収レンジを引き上げやすいのが特徴です。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、<strong>公表データ・求められる経験レベル・求人の探し方・SIerから自社開発への移行ルート</strong>を、30代・40代の視点を交えて整理します。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "paiza「プログラミング言語に関する調査（2025年版）」",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：Javaエンジニアの転職市場の攻め方</h2>
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>Javaは「求人数が多い＝機会が多い」言語です。</strong>母数の多さを活かしつつ、レガシー専任で止まらず「モダンJava＋クラウド」で年収レンジを引き上げるのが攻め方です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・paiza 2025年調査で企業ニーズ（求人数比率）<strong>2位（13.9%）</strong>。転職機会を得やすい</li>
              <li>・Spring Boot／クラウド／マイクロサービスの経験が<strong>年収アップの分岐点</strong></li>
              <li>・40代でもPL／PM・金融ドメイン知識があれば<strong>安定した需要</strong>がある</li>
            </ul>
          </div>
        </section>

        {/* 市場・年収データ */}
        <section id="market" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Javaの市場・年収データ（出典付き）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Java単独の公的平均年収は限られるため、求人数・年代別・職種別の公表データを出典と時点付きで使用します。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Javaの求人数ランキング", "企業ニーズ2位（13.9%）", "paiza 2025年版調査（求人比率）"],
                  ["システムエンジニアの平均年収（正社員）", "約516万円", "求人ボックス 給料ナビ（独自試算）"],
                  ["ソフトウェアエンジニアの平均年収（正社員）", "約511万円", "求人ボックス 給料ナビ（同上）"],
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
            ※ paizaの求人比率は「paiza転職」掲載求人の集計、求人ボックスは掲載求人からの試算で、いずれも職種・言語ラベルベースの参考値です。レバテックの年代別平均はSE全般の値で、Java特化ではありません。金融系・アーキテクト級の具体的なレンジはエージェントで確認してください。
          </p>
        </section>

        {/* 求められる経験レベル */}
        <section id="level" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベルと求人要件の傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Java求人は「業務系・SIer型」と「Web系・自社開発型」で求められる要素が異なります。代表的な3層の要件傾向を整理します。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { tier: "ミドル（実装中心）", req: "Java実務3〜5年／Spring Boot／RDB設計／チーム開発", note: "求人の最も多いゾーン" },
              { tier: "シニア／PL", req: "設計・レビュー／要件定義／後進育成／アジャイルやCI/CDの理解", note: "マネジメント手前の層" },
              { tier: "ハイクラス（設計・管理）", req: "アーキテクチャ設計／クラウド・マイクロサービス／PM・技術選定", note: "年収800万円以上が狙える層" },
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">Javaエンジニアのキャリアパス</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">技術スペシャリスト路線</h3>
              <p className="text-sm text-petrol-deep">
                Javaアーキテクト、Spring Boot/Cloudのスペシャリスト、マイクロサービスアーキテクトへの道。深い技術力と設計能力が求められ、システム全体のアーキテクチャ設計を担います。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">マネジメント路線</h3>
              <p className="text-sm text-petrol-deep">
                PL→PM→開発部門マネージャーへのキャリアパス。Java開発の技術的背景を持ちながら、チームマネジメントやプロジェクト管理を担当します。40代のJavaエンジニアに多い進路です。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Kotlin／モダンJVM言語への拡張</h3>
              <p className="text-sm text-petrol-deep">
                JavaからKotlinへのスキル拡張は比較的容易で、Android開発やサーバーサイドKotlinの求人に幅が広がります。Scalaへの拡張でデータエンジニアリング領域への進出も可能です。
              </p>
            </div>
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
              <p className="text-sm text-slate-600 mb-2">Java/Spring Boot求人が豊富で、技術に精通したアドバイザーが在籍。モダンJava・自社開発の提案に向きます。</p>
              <Link href="/review/levtech/" className="text-sm text-petrol hover:underline">レバテックキャリアの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">リクルートエージェントIT（求人数最大級）</h3>
              <p className="text-sm text-slate-600 mb-2">金融・保険系のJava求人が豊富で、国内最大級の求人数から幅広い選択肢を得られます。40代の支援実績も多数です。</p>
              <Link href="/review/recruit-it/" className="text-sm text-petrol hover:underline">リクルートエージェントITの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ（ハイクラス・スカウト型）</h3>
              <p className="text-sm text-slate-600 mb-2">アーキテクト・テックリード向けのスカウトが充実。年収750万円以上のハイクラスJava求人を狙う層に向きます。</p>
              <Link href="/review/bizreach-it/" className="text-sm text-petrol hover:underline">ビズリーチの詳細レビュー →</Link>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            エージェント各社の比較は<Link href="/compare/agents/" className="text-petrol hover:underline">転職エージェント比較</Link>も参照してください。
          </p>
        </section>

        {/* 移行ルート */}
        <section id="entry" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SIerから自社開発へ移行するルート</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "モダンな開発要素を一つ経験する", desc: "Spring Boot、クラウド（AWS等）、CI/CD、アジャイルのいずれかを現職または個人開発で経験しておきます。「設計書通りに作る」だけでなく「モダンな開発に触れている」ことが、自社開発企業への入口になります。" },
              { num: "2", title: "成果を“自分の貢献”として言語化する", desc: "SIerでは成果がチーム単位になりがちですが、職務経歴書では『自分が何を設計・改善し、どう効果が出たか』を主語を自分にして書きます。これが自社開発の面接で評価されます。" },
              { num: "3", title: "GitHub等で自走力を示す", desc: "Spring Bootで作ったアプリやリファクタの記録をGitHubに残すと、指示待ちではなく自分で考えて手を動かせることを示せます。自社開発企業はこの自走力を重視します。" },
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
          <p className="text-xs text-slate-500 mt-3">
            SIerからの脱出は<Link href="/industry/ses-exit/" className="text-petrol hover:underline">SES・SIerからの転職</Link>もあわせてご覧ください。
          </p>
        </section>

        {/* 30代・40代視点 */}
        <section id="age" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>
              <strong>求人母数の多さは年齢のリスクヘッジになる。</strong>Javaは求人数が多く、年齢で間口が極端に狭まりにくい言語です。30代・40代でも応募先の選択肢を確保しやすいのは、安定して需要のある言語ならではの強みです。
            </p>
            <p>
              <strong>「レガシー専任」で止まらない。</strong>古いJavaだけの経験だと評価が伸びにくいため、Spring Bootやクラウドなどモダンな要素を一つでも持つことが年収アップの分岐点です。レガシーとモダンの両方が分かる人材は、DX・モダナイゼーション案件で重宝されます。
            </p>
            <p>
              <strong>業務知識とマネジメントが武器になる。</strong>金融・保険・物流などのドメイン知識や、PL／PMの経験は、若手では代替しにくい資産です。技術力とセットで提示すれば、40代でも上流ポジションで戦えます。
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
              <strong>① Spring Bootで一気通貫の成果物を作る。</strong>認証・CRUD・API・DB連携を含むアプリをSpring Bootで作り、テストとCI/CDまで整えます。モダンJavaを実務レベルで扱える証拠になります。
            </p>
            <p>
              <strong>② クラウドとコンテナを掛け合わせる。</strong>AWS等でのデプロイ、Dockerによるコンテナ化を経験すると、レガシー脱却・モダナイゼーション案件で評価されます。インフラ寄りの知識はミドル層の差別化要素です。
            </p>
            <p>
              <strong>③ 新しいJavaバージョン・Kotlinに触れる。</strong>最近のJavaの言語機能やKotlinを試しておくと、技術のアップデートを止めていないことを示せます。学び続ける姿勢が、年齢への懸念を払拭します。
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
          <h2 className="text-xl font-bold mb-3">Javaエンジニアの市場価値を確認する</h2>
          <p className="text-blue-100 text-sm mb-4">
            あなたのJavaスキルが今の市場でどう評価されるか、複数のIT特化型エージェントで保有求人を比較してみましょう。
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
              { name: "Kotlinエンジニアの転職ガイド", href: "/skill/kotlin/" },
              { name: "Goエンジニアの転職ガイド", href: "/skill/go/" },
              { name: "SES・SIerからの転職", href: "/industry/ses-exit/" },
              { name: "PMの転職ガイド", href: "/skill/pm/" },
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
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-sm"><li><a href="/company/amazon/" className="text-petrol-deep hover:underline">Amazon／AWS Japan</a></li><li><a href="/company/cybozu/" className="text-petrol-deep hover:underline">サイボウズ</a></li><li><a href="/company/fujitsu/" className="text-petrol-deep hover:underline">富士通</a></li><li><a href="/company/ibm/" className="text-petrol-deep hover:underline">日本IBM</a></li><li><a href="/company/jcb/" className="text-petrol-deep hover:underline">JCB（ジェーシービー）</a></li><li><a href="/company/line-yahoo/" className="text-petrol-deep hover:underline">LINEヤフー</a></li><li><a href="/company/nintendo/" className="text-petrol-deep hover:underline">任天堂</a></li><li><a href="/company/nri/" className="text-petrol-deep hover:underline">野村総合研究所(NRI)</a></li></ul>
          <p className="mt-3 text-sm"><a href="/skill/" className="text-petrol-deep hover:underline">スキル別ガイド一覧</a> ／ <a href="/salary/company-ranking/" className="text-petrol-deep hover:underline">企業年収ランキング</a></p>
        </div>
      </section>
      </>
  );
}
