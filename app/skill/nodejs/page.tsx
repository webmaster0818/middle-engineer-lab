import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "Node.jsエンジニアの転職ガイド｜年収・求人・TypeScriptとの違い【2026年】";
const PAGE_DESC =
  "Node.jsエンジニアの転職市場を2026年最新の公表データで解説。TypeScript（言語）との違い、Express/NestJSなどのスキルセット、フルスタック親和性、年収1,000万円超の実在、IoT・リアルタイムのユースケースを30代・40代向けにまとめました。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "diff", label: "まず：TypeScript（言語）との違い" },
  { id: "conclusion", label: "結論：Node.js転職市場の攻め方" },
  { id: "market", label: "市場・年収データ" },
  { id: "skillset", label: "求められるスキルセット" },
  { id: "fullstack", label: "フロントとバックを繋ぐフルスタック親和性" },
  { id: "usecase", label: "Node.jsが活きるユースケース" },
  { id: "level", label: "求められる経験レベル" },
  { id: "find", label: "求人の探し方" },
  { id: "middle", label: "30代・40代の視点" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "Node.jsとTypeScriptの違いは何ですか？",
    a: "Node.jsはJavaScript（やTypeScript）をサーバーサイドで動かす実行環境であり、職種としては主にバックエンドエンジニアの領域です。一方TypeScriptはJavaScriptに型を加えたプログラミング言語そのものです。つまり「TypeScriptという言語で書いたコードを、Node.jsという環境で動かす」という関係で、両者は競合せず組み合わせて使います。求人でも「Node.js（バックエンド）」と「TypeScript（言語スキル）」は別の軸として並びます。",
  },
  {
    q: "Node.jsエンジニアの年収はどのくらいですか？",
    a: "Node.js専用の公的な平均年収統計は確認できていないため、近接区分の参考値で見ると、求人ボックスのWebエンジニア平均は約462万円、ソフトウェアエンジニア平均は約511万円です（2026年6月時点・動的に変動する値のため参考）。一方で高年収帯も実在し、マイナビ転職では「Node.js・初年度年収1,000万円以上」の求人が約440件確認できます（2026年6月時点）。Forkwellでは年収上限に最高2,020万円クラスの提示も見られ、役割・スキルで大きく上下します。",
  },
  {
    q: "Node.jsで本当に年収1,000万円を狙えますか？",
    a: "実在します。マイナビ転職の「Node.js・初年度年収1,000万円以上」求人は約440件（2026年6月時点）、Forkwellでは上限最高2,020万円クラスの提示も見られます。ただしこれは高スキル・上流ポジションが前提で、Expressやフレームワークが使える程度では届きません。設計・スケーラビリティ・チームリードまで担えることが条件になります。",
  },
  {
    q: "Node.jsエンジニアに必要なスキルは何ですか？",
    a: "サーバーサイドの基盤一式です。Express/NestJSなどのフレームワーク、REST/GraphQLのAPI設計、データベース（RDB・NoSQL）、Linux、認証・認可（JWT/OAuth等）が中核になります。これにTypeScriptでの型安全な実装、テスト、CI/CD、クラウド（AWS等）が加わると市場価値が上がります。非同期処理・イベントループの理解はNode特有の必須知識です。",
  },
  {
    q: "フロントエンドからNode.jsへ移行できますか？",
    a: "相性が良い移行です。JavaScript/TypeScriptの知識をそのまま活かせるため、フロントエンド経験者がNode.jsでバックエンドを学び、フルスタックとして市場価値を高めるルートは王道です。フロントとバックを同じ言語で書けることがNodeの強みで、BFF（Backend for Frontend）やフルスタック求人で評価されます。",
  },
  {
    q: "Node.jsはどんな場面で使われますか？",
    a: "非同期・I/O中心の処理に強いため、リアルタイム通信（チャット・通知・WebSocket）、API/BFF、マイクロサービス、IoTのデータ処理などで採用されます。逆にCPU負荷の高い計算処理は不得意な面もあり、用途に応じてGoやPython等と使い分ける現場もあります。この向き不向きを理解していることも面接で評価されます。",
  },
  {
    q: "40代でもNode.jsエンジニアへ転職できますか？",
    a: "バックエンドの設計力・チームをまとめる力があれば可能です。ミドル層では、API設計・スケーラビリティ・DB設計の方針決め・若手レビューといった上流要素が評価されます。言語・環境の細かな記法より、システム全体を設計し品質と性能を担保できる経験が、年代を問わず通用する武器になります。",
  },
];

const salaryRef = [
  ["Webエンジニア（近接区分）", "約462万円", "Web系バックエンドの参考値"],
  ["ソフトウェアエンジニア（近接区分）", "約511万円", "ソフトウェア開発全般の参考値"],
];

export default function NodejsSkillPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/skill/nodejs/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "Node.jsエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Node.jsエンジニアの転職ガイド｜年収・求人・TypeScriptとの違い【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | Node.jsスキルを活かした転職を30代・40代エンジニア向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          Node.jsはJavaScript/TypeScriptをサーバーサイドで動かす実行環境で、フロントとバックを同じ言語で扱えることから、Web・リアルタイム・API基盤で広く採用されています。本記事は「Node.jsスキルを転職市場でどう価値化するか」に絞り、公表データをもとに30代・40代エンジニアの戦略を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "求人ボックス 給料ナビ Webエンジニア / ソフトウェアエンジニア（2026年6月時点・動的値）",
            "マイナビ転職 求人件数（2026年6月時点）",
            "Forkwell 求人情報（2026年6月時点）",
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">まず：TypeScript（言語）との違い</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              「Node.js」と「TypeScript」は混同されがちですが、レイヤーが違います。最初にこの整理をしておくと、求人選びと自己PRがぶれません。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li><strong>Node.js</strong>＝JavaScript/TypeScriptを<strong>サーバーサイドで動かす実行環境</strong>。職種としてはバックエンド寄り。</li>
              <li><strong>TypeScript</strong>＝JavaScriptに型を加えた<strong>プログラミング言語そのもの</strong>。フロントでもバックでも使う。</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-3 text-sm">
              つまり「TypeScriptで書いたコードをNode.jsで動かす」という補完関係で、競合しません。本ページは<strong>Node.js（バックエンド環境）</strong>の戦略に絞ります。言語としての型スキルは<Link href="/skill/typescript/" className="text-petrol hover:underline">TypeScript転職ガイド</Link>を参照してください。
            </p>
          </div>
        </section>

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：Node.js転職市場の攻め方</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              Node.jsエンジニアの転職は、<strong>「Expressが書ける」から「設計・スケーラビリティ・運用まで担える」へ役割を上げて見せられるか</strong>で年収が大きく変わります。攻め方は次の3点です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① <strong>API設計・DB・Linux・認証</strong>のバックエンド基盤を一通り語れる状態にする</li>
              <li>② <strong>TypeScript＋NestJS</strong>で型安全・大規模対応の設計力を示す</li>
              <li>③ <strong>フルスタック親和性</strong>（フロントも書ける）を市場価値として打ち出す</li>
            </ul>
          </div>
        </section>

        {/* 市場・年収 */}
        <section id="market" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">市場・年収データ</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Node.js専用の年収統計は確認できていないため、近接区分の参考値で見ます。求人ボックスの数値は次の通りです（2026年6月時点・動的に変動する値のため参考。Node専用ではなく近接区分の代用です）。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">区分</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">平均年収（参考）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">位置づけ</th>
                </tr>
              </thead>
              <tbody>
                {salaryRef.map(([cat, salary, note], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{cat}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{salary}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            一方で高年収帯も実在します。マイナビ転職では「Node.js・初年度年収1,000万円以上」の求人が<strong>約440件</strong>（2026年6月時点）、Forkwellでは年収上限に最高<strong>2,020万円</strong>クラスの提示も見られます（2026年6月時点）。ただしこれらは高スキル・上流ポジションが前提で、平均値とは別物として捉えてください。
          </p>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: 平均は求人ボックス給料ナビ（2026年6月時点・動的値・参考）。高年収求人件数はマイナビ転職、上限提示はForkwell（いずれも2026年6月時点・閲覧時点で変動）。これらは単一の確定値ではなく、役割・スキルで上下する目安です。市場全体では経済産業省「IT人材需給に関する調査」（2019年3月公表）が2030年に最大約79万人のIT人材不足を試算しています。
          </p>
        </section>

        {/* スキルセット */}
        <section id="skillset" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められるスキルセット</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Node.jsエンジニアはサーバーサイドの基盤を一通り扱えることが前提です。中核は次の領域です。
          </p>
          <div className="space-y-3">
            {[
              { t: "フレームワーク（Express / NestJS）", d: "Expressは軽量で定番、NestJSはTypeScript前提・大規模向けの構造化フレームワーク。求人ではNestJSの需要が伸びている。" },
              { t: "API設計（REST / GraphQL）", d: "リソース設計、認可、バージョニング。GraphQLのスキーマ設計も求められる現場が増加。" },
              { t: "データベース", d: "RDB（PostgreSQL/MySQL）とNoSQL（MongoDB等）、ORM/クエリ設計、パフォーマンスチューニング。" },
              { t: "Linux・運用", d: "サーバOSの基本操作、プロセス管理、ログ、デプロイ。Node特有の非同期・イベントループ理解も必須。" },
              { t: "認証・認可", d: "JWT・OAuth・セッション管理など。セキュリティ要件を満たす設計力が評価される。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            Linuxの基礎は<Link href="/skill/linux/" className="text-petrol hover:underline">Linux転職ガイド</Link>、型は<Link href="/skill/typescript/" className="text-petrol hover:underline">TypeScript転職ガイド</Link>も合わせてご覧ください。
          </p>
        </section>

        {/* フルスタック */}
        <section id="fullstack" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">フロントとバックを繋ぐフルスタック親和性</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              Node.js最大の強みは、<strong>フロントエンドと同じJavaScript/TypeScriptでバックエンドを書ける</strong>ことです。これにより、フロント経験者がNodeでサーバーサイドを学んでフルスタック化する、あるいはBFF（Backend for Frontend）でフロントとバックの橋渡しを担う、といった市場価値の高め方が可能になります。
            </p>
            <p>
              採用側から見ても「フロントもバックも一人で完結できる」人材は、特にスタートアップ・自社開発で重宝されます。React等のフロント経験があるなら、Nodeを足してフルスタックを名乗れる状態は強力な差別化になります。
            </p>
            <p>
              フロント側は<Link href="/skill/react/" className="text-petrol hover:underline">React転職ガイド</Link>・<Link href="/skill/frontend/" className="text-petrol hover:underline">フロントエンド転職ガイド</Link>が参考になります。
            </p>
          </div>
        </section>

        {/* ユースケース */}
        <section id="usecase" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Node.jsが活きるユースケース</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Node.jsは非同期・I/O中心の処理に強く、次のような領域で採用されます。向き不向きを理解していることも面接で評価されます。
          </p>
          <div className="space-y-3">
            {[
              { t: "リアルタイム通信", d: "チャット、通知、WebSocketを使う双方向通信。多数の同時接続を効率よくさばける。" },
              { t: "API / BFF", d: "フロント向けに最適化したAPI層（BFF）。フロントと同じ言語で書ける利点が活きる。" },
              { t: "マイクロサービス", d: "軽量なサービスを多数構成する設計。起動の速さ・コンテナ親和性が強み。" },
              { t: "IoT・データ処理", d: "センサーデータの収集・中継などI/O中心の処理。逆にCPU負荷の高い計算は不得意な面もある。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 経験レベル */}
        <section id="level" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベル</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Node.js求人はおおむね次の3層に分かれます（求人票の頻出要件をもとにした傾向）。
          </p>
          <div className="space-y-3">
            {[
              { t: "実務1〜3年層（API実装）", d: "Express等でのAPI実装、DB操作、基本的な認証。チームの一員として機能を作れる層。" },
              { t: "実務3〜6年層（設計・性能）", d: "NestJSでの構造化、スキーマ設計、非同期処理の最適化、テスト・CI/CD。年収帯が一段上がる中核ゾーン。" },
              { t: "実務6年以上層（リード・アーキテクト）", d: "システム全体設計、スケーラビリティ、マイクロサービス分割、技術選定。1,000万円超帯はこの層が中心。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 求人の探し方 */}
        <section id="find" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の探し方</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Node.js求人は自社開発・スタートアップに多く、IT/Web特化サービスで探すのが効率的です。以下は当サイトのデータシート（2026年6月時点・各社公表/二次情報）に基づく整理です。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア</h3>
              <p className="text-sm text-slate-600 mb-2">IT/Web特化。Node.js/NestJSの自社開発・フルスタック求人を技術に明るいアドバイザー経由で探せます。</p>
              <Link href="/review/levtech/" className="text-sm text-petrol hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ</h3>
              <p className="text-sm text-slate-600 mb-2">ハイクラス（年収750万円以上が一つの目安）・スカウト型。1,000万円超を狙うリード・アーキテクト層に有効です。</p>
              <Link href="/review/bizreach-it/" className="text-sm text-petrol hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">リクルートエージェントIT</h3>
              <p className="text-sm text-slate-600 mb-2">国内最大級の求人数。幅広く比較し、母数を確保したい場合の併用先です。</p>
              <Link href="/review/recruit-it/" className="text-sm text-petrol hover:underline">詳細レビューを見る →</Link>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            複数併用の進め方は<Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">エージェント複数利用のコツ</Link>、選び方の軸は<Link href="/knowledge/how-to-choose/" className="text-petrol hover:underline">転職エージェントの選び方</Link>を参考にしてください。
          </p>
        </section>

        {/* 30代・40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              ミドル層のNode.js転職では、<strong>「APIを実装できる」より「システム全体を設計し性能と品質を担保できる」</strong>ことが評価軸になります。API設計・DB設計・スケーラビリティの方針決め、若手レビューといった上流要素が差を生みます。1,000万円超帯はこうした設計・リード経験が前提です。
            </p>
            <p>
              一方で注意点として、Node.jsは技術トレンドの移り変わりが速く、特定フレームワークの記法だけに依存すると陳腐化しやすい面があります。<strong>言語・環境に依存しない設計力</strong>（API設計・分散システム・DB設計）へ寄せておくことが、年代を問わず市場価値を保つ保険になります。フルスタック親和性も併せて打ち出すと強みになります。
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
          <h2 className="text-xl font-bold mb-3">Node.jsスキルを活かした転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            Node.js/NestJSの自社開発・フルスタック求人に強いIT特化型エージェントで、あなたのバックエンドスキルの市場価値を確認しましょう。
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
              { name: "TypeScript転職ガイド", href: "/skill/typescript/" },
              { name: "React転職ガイド", href: "/skill/react/" },
              { name: "フロントエンド転職ガイド", href: "/skill/frontend/" },
              { name: "Linux転職ガイド", href: "/skill/linux/" },
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
    
      <section className="mx-auto max-w-3xl px-4 pb-10">
        <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
          <h2 className="font-bold text-slate-900 mb-2">この技術と関連の深い掲載企業</h2>
          <p className="text-xs text-slate-500 mb-2">各社の公開技術情報でこの技術への言及が確認できた掲載企業です。年収・選考は各社ページをご覧ください。</p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-1 text-sm"><li><a href="/company/kakehashi/" className="text-petrol-deep hover:underline">カケハシ</a></li><li><a href="/company/plaid/" className="text-petrol-deep hover:underline">プレイド</a></li><li><a href="/company/ubie/" className="text-petrol-deep hover:underline">Ubie</a></li></ul>
          <p className="mt-3 text-sm"><a href="/skill/" className="text-petrol-deep hover:underline">スキル別ガイド一覧</a> ／ <a href="/salary/company-ranking/" className="text-petrol-deep hover:underline">企業年収ランキング</a></p>
        </div>
      </section>
      </>
  );
}
