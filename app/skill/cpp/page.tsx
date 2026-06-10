import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "C++エンジニアの転職ガイド｜年収・求人・将来性【2026年】",
  description:
    "C++エンジニアの転職市場を出典付きで解説。組込み・ゲーム・低レイヤでのC++需要、求人ボックスやフリーランス調査の公表年収、他言語からの参入ルート、30代・40代の戦い方をミドルエンジニア向けに整理します。",
};

const toc = [
  { id: "conclusion", label: "1. 結論：C++エンジニアの転職市場の攻め方" },
  { id: "market", label: "2. C++の市場・年収データ（出典付き）" },
  { id: "level", label: "3. 求められる経験レベルと求人要件の傾向" },
  { id: "career", label: "4. C++エンジニアのキャリアパス" },
  { id: "find", label: "5. 求人の探し方・強いエージェント" },
  { id: "entry", label: "6. 経験浅めからC++に参入するルート" },
  { id: "age", label: "7. 30代・40代エンジニアの視点" },
  { id: "learn", label: "8. スキルアップ・学習戦略" },
  { id: "faq", label: "9. よくある質問" },
];

const faqs = [
  {
    q: "C++エンジニアの平均年収はどのくらいですか？",
    a: "C++に限定した公的な平均年収の公表は乏しいため、職種別・年代別データで代替するのが現実的です。求人ボックス「給料ナビ」では正社員のシステムエンジニアが約516万円、ソフトウェアエンジニアが約511万円と試算されています（掲載求人からの独自集計値）。フリーランス領域では、フリーランスボードの調査でC++スキルの平均年収が約783万円と報じられています（2025年11月公表・案件単価ベース）。年代別ではレバテック公表の正社員SE平均年収（30代約499万円・40代約618万円／2025年）も参考になります。",
  },
  {
    q: "C++はどんな業界・開発で使われていますか？",
    a: "C++は実行速度とハードウェア制御が求められる領域で広く使われます。具体的には、組込み・制御（自動車・家電・産業機器）、ゲーム開発（Unreal Engineなどのゲームエンジンやネイティブ部分）、金融のトレーディングシステム、画像処理・CADなどの低レイヤ・高性能アプリケーションです。Web系より、製造・ゲーム・金融などの専門領域で評価される言語です。",
  },
  {
    q: "C++の実務経験は転職でどう評価されますか？",
    a: "C++はメモリ管理やポインタ、低レイヤの知識を要するため、扱えること自体が一定の技術力の証明になります。組込み・ゲーム・低レイヤといった専門領域では代替が効きにくく、C++経験者は希少人材として評価されやすいのが特徴です。30代・40代でC++の実務を積んでいるなら、その低レイヤの理解は他言語に移っても通用する強みになります。",
  },
  {
    q: "C++の求人はどんな企業に多いですか？",
    a: "自動車・電機・産業機器などの組込み・制御を行うメーカーや、コンソール／PC向けのゲーム会社、トレーディングを行う金融系、画像処理・CAD・シミュレーション系の企業に多く見られます。Web系の求人数とは性質が異なり、専門領域に集中するため、業界を絞って探すのが効率的です。具体的な社名や求人数は時期で変動するため、エージェントで最新の保有求人を確認してください。",
  },
  {
    q: "C++未経験でも転職は可能ですか？",
    a: "C・Rust・Javaなど他の低レイヤ／静的型付け言語の経験があれば、C++未経験でもポテンシャル採用の対象になり得ます。GitHubにC++で書いたツールやアルゴリズム実装、簡単なゲームなどを公開し、メモリ管理やマルチスレッドの理解を示すと評価につながります。ただし組込み・ゲームの即戦力求人は実務経験を求めることが多く、入口の幅は領域により差があります。",
  },
  {
    q: "C++エンジニアにおすすめの転職エージェントは？",
    a: "IT・Web・ゲームに特化し提案スピードが速いGeekly（ゲーム系C++に強み）、IT全般で求人母数が大きいレバテックキャリア、組込み・メーカー系や高年収のハイクラス求人に出会いやすいビズリーチの併用が選択肢です。C++は領域ごとに求人の偏りがあるため、複数登録して保有求人を比較するのが現実的です。",
  },
  {
    q: "C++は将来性がありますか？",
    a: "C++は組込み・ゲーム・金融・高性能計算など、速度とハードウェア制御が不可欠な領域で代替が難しく、需要が安定しています。近年は同じ領域でRustが選択肢に加わる場面も増えていますが、既存資産の規模が大きく、C++の需要が急減する可能性は低いと見られます。C++単体に加えて、組込み・ゲーム・低レイヤといったドメイン知識を掛け合わせると、ミドル層として長く価値を保てます。",
  },
];

export default function CppSkillPage() {
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
        title="C++エンジニアの転職ガイド｜年収・求人・将来性【2026年】"
        description="C++エンジニアの転職市場を出典付きで解説。組込み・ゲーム・低レイヤでのC++需要、求人ボックスやフリーランス調査の公表年収、他言語からの参入ルート、30代・40代の戦い方をミドルエンジニア向けに整理します。"
        url="/skill/cpp/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "C++エンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          C++エンジニアの転職ガイド｜年収・求人・将来性【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | C++エンジニアの転職市場をミドル層向けに分析
        </p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            C++は実行速度とハードウェア制御が求められる領域で使われる言語で、<strong>組込み・制御、ゲーム開発、金融のトレーディング、画像処理・CAD</strong>などの低レイヤ・高性能アプリケーションを支えています。Web系の言語とは性質が異なり、専門領域での代替が効きにくい希少スキルとして評価されます。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、C++エンジニア転職の「攻め方」を、<strong>公表年収データ・求められる経験レベル・求人の探し方・経験浅めからの参入ルート</strong>に分けて、30代・40代の視点を交えて整理します。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "求人ボックス 給料ナビ（掲載求人からの独自試算）",
            "フリーランスボード調査（2025年11月公表のC++案件年収）",
            "レバテック公表の年代別平均年収（2025年）",
          ]}
        />

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

        <section id="conclusion" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：C++エンジニアの転職市場の攻め方</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>C++は組込み・ゲーム・低レイヤという専門領域で代替が効きにくい希少スキルです。</strong>Web系の求人数で比較するのではなく、C++が不可欠な領域に的を絞り、希少性を年収に変える戦い方が向いています。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・C++特化の公的年収は乏しいため<strong>職種別・年代別データで代替</strong>（求人ボックス システムエンジニア約516万円ほか）</li>
              <li>・C／Rust／Javaなど低レイヤ・静的型付けの経験があれば、C++へ移る土台になる</li>
              <li>・C++は<strong>組込み・ゲーム・金融などドメイン知識との掛け合わせ</strong>で市場価値が高まる</li>
            </ul>
          </div>
        </section>

        <section id="market" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">C++の市場・年収データ（出典付き）</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            C++に限定した公的な平均年収の公表は乏しいため、ここでは職種別・年代別、およびフリーランス調査の公表データで代替します。出典と時点を明示できる値のみを使用します。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["C++特化の正社員平均年収", "公的な公表は乏しい（職種別・年代別で代替）", "言語単独の公的統計は限定的"],
                  ["システムエンジニアの平均年収（正社員）", "約516万円", "求人ボックス 給料ナビ（掲載求人からの独自試算）"],
                  ["ソフトウェアエンジニアの平均年収（正社員）", "約511万円", "求人ボックス 給料ナビ（同上）"],
                  ["C++案件の年収（フリーランス）", "約783万円（案件単価ベース）", "フリーランスボード調査（2025年11月公表）"],
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
            ※ C++専任の正社員平均値は確認できる範囲では乏しいため、職種別の試算値とレバテックの年代別平均（いずれもC++特化ではない）で代替しています。フリーランスボードの約783万円は案件単価から想定した年収で、正社員年収とは性質が異なります。具体的なレンジはエージェントで最新の保有求人を確認してください。
          </p>
        </section>

        <section id="level" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベルと求人要件の傾向</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            C++求人は領域（組込み・ゲーム・金融など）によって求められる経験が異なります。共通して求人票によく登場する要件を傾向としてまとめると次の通りです。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { tier: "入口（ポテンシャル）", req: "C等の低レイヤ／静的型付け言語の実務2〜3年／メモリ・ポインタの基礎／C++はGitHub等での自習レベル", note: "C++未経験OK求人がここに該当" },
              { tier: "即戦力（ミドル）", req: "C++での実務（組込み・ゲーム・低レイヤ等）／マルチスレッド／モダンC++（C++11以降）の理解", note: "求人の中心ゾーン" },
              { tier: "ハイクラス", req: "アーキテクチャ設計・テックリード／パフォーマンス最適化／領域の専門性（組込み・ゲームエンジン等）", note: "年収800万円以上が狙える層" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2 text-sm">{item.tier}</h3>
                <p className="text-xs text-slate-600 mb-2 leading-relaxed">{item.req}</p>
                <p className="text-xs text-blue-600">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="career" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">C++エンジニアのキャリアパス</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            C++は領域ごとにキャリアが分かれます。どのドメインで経験を積むかによって到達レンジが変わります。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "組込み／制御エンジニア", note: "自動車・家電・産業機器のファームウェア・制御。メーカー系で需要が安定" },
              { role: "ゲームエンジニア（ネイティブ）", note: "ゲームエンジンやネイティブ部分の開発。高い最適化スキルが評価される" },
              { role: "低レイヤ／基盤エンジニア", note: "OS・ミドルウェア・高性能計算・トレーディング基盤など" },
              { role: "テックリード／アーキテクト", note: "C++基盤の設計＋パフォーマンス最適化＋技術選定" },
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
            C++は領域ごとに求人が偏ります。特定の1社に絞るより、領域に合わせて複数のチャネルを横断するのが効率的です。タイプ別に向くサービスを整理します。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">Geekly（IT・Web・ゲームに強い）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT・Web・ゲーム業界専門で提案スピードが強み。ゲーム会社のC++求人を探したい場合の有力な選択肢になります。
              </p>
              <Link href="/review/geekly/" className="text-sm text-blue-600 hover:underline">Geeklyの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア（IT・Web特化）</h3>
              <p className="text-sm text-slate-600 mb-2">
                IT全般で求人母数が大きく、技術に踏み込んで話せるアドバイザーが在籍。C++を含む幅広い専門求人の提案に向きます。
              </p>
              <Link href="/review/levtech/" className="text-sm text-blue-600 hover:underline">レバテックキャリアの詳細レビュー →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ（ハイクラス・スカウト型）</h3>
              <p className="text-sm text-slate-600 mb-2">
                ハイクラス・スカウト型で、組込み・メーカー系や金融系の高年収C++求人・スカウトに出会いやすいのが特徴です。
              </p>
              <Link href="/review/bizreach-it/" className="text-sm text-blue-600 hover:underline">ビズリーチの詳細レビュー →</Link>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            エージェント各社の比較は<Link href="/compare/agents/" className="text-blue-600 hover:underline">転職エージェント比較</Link>も参照してください。
          </p>
        </section>

        <section id="entry" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験浅めからC++に参入するルート</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "低レイヤ・静的型付けの経験を土台にする", desc: "C・Rust・Javaなど低レイヤや静的型付け言語の経験があれば、それを土台に「C++は未経験だがキャッチアップ可」とアピールできます。メモリやポインタの考え方は共通点が多く、完全未経験より有利です。" },
              { num: "2", title: "GitHubにC++の実装を公開する", desc: "アルゴリズム実装、CLIツール、簡単なゲームなどをモダンC++（C++11以降）で書いて公開します。メモリ管理・マルチスレッド・テストの理解が伝わる状態にしておくと、基礎力を示せます。" },
              { num: "3", title: "領域を絞ってポテンシャル枠を狙う", desc: "組込み・ゲームなど領域ごとに、入社後育成前提のポテンシャル採用があります。エージェントに志望領域と学習状況を伝え、そうした求人を紹介してもらうのが近道です。領域を絞るほどマッチングしやすくなります。" },
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

        <section id="age" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>
              <strong>低レイヤの理解は年齢で目減りしにくい。</strong>C++が支える組込み・ゲーム・低レイヤは、流行り廃りの影響を受けにくい領域です。30代・40代でC++の実務を積んでいるなら、その低レイヤの理解は希少人材としての強みになり、年齢の不利を相殺しやすくなります。
            </p>
            <p>
              <strong>ドメイン知識との掛け算で差別化する。</strong>C++単体より「C++＋自動車・産業機器」「C++＋ゲームエンジン」「C++＋金融」の掛け合わせが、ミドル層の強みです。年齢を重ねた分の業務知識を、C++という実装手段と結びつけて語れると説得力が増します。
            </p>
            <p>
              <strong>マネジメント経験も資産になる。</strong>テックリードやアーキテクトのC++求人では、実装力に加えてチームの技術選定・育成の経験が評価されます。40代でPL／PM経験があるなら、それを技術力とセットで提示しましょう。
            </p>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            年代別の戦略は<Link href="/age/40s/" className="text-blue-600 hover:underline">40代エンジニアの転職</Link>・<Link href="/age/30s/" className="text-blue-600 hover:underline">30代エンジニアの転職</Link>も参考にしてください。
          </p>
        </section>

        <section id="learn" className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルアップ・学習戦略</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>
              <strong>① モダンC++を身につける。</strong>C++11以降のスマートポインタ、ムーブセマンティクス、ラムダなどを使いこなせると、レガシーなC++しか書けない人材との差別化になります。古い書き方ではなくモダンな書き方を学ぶことが、評価につながります。
            </p>
            <p>
              <strong>② メモリ・並行処理を実装で理解する。</strong>メモリ管理とマルチスレッドはC++の核心であり、面接で深く問われます。実際に動かしながら、リソース管理やデータ競合の扱いを経験として語れる状態にしましょう。
            </p>
            <p>
              <strong>③ 志望領域のフレームワーク・基盤を学ぶ。</strong>ゲームならゲームエンジン、組込みならRTOSやハードウェア制御というように、志望領域に応じた周辺知識を積むと、即戦力に近づきます。領域を絞って深掘りするのが効率的です。
            </p>
            <p>
              学習と転職活動の進め方は<Link href="/knowledge/continuous-learning/" className="text-blue-600 hover:underline">継続的な学習の習慣化</Link>・<Link href="/knowledge/portfolio/" className="text-blue-600 hover:underline">ポートフォリオの作り方</Link>もあわせてご覧ください。
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
          <h2 className="text-xl font-bold mb-3">C++のスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            C++は領域ごとに求人が偏るからこそ、志望領域に強いエージェントを併用して保有求人を横断比較するのが近道です。
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
              { name: "組込みエンジニアの転職ガイド", href: "/skill/embedded/" },
              { name: "Unityエンジニアの転職ガイド", href: "/skill/unity/" },
              { name: "Javaエンジニアの転職ガイド", href: "/skill/java/" },
              { name: "Goエンジニアの転職ガイド", href: "/skill/go/" },
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
