import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "30-40代エンジニアのポートフォリオの見せ方【GitHub・登壇】",
  description:
    "実務経験のある30代・40代エンジニア向けに、GitHub・技術ブログ・登壇・OSSの見せ方を解説。即席アプリより実務の裏づけを示す構成、プロフィールREADMEの作り方、NG例まで実用テンプレで紹介します。",
};

const toc = [
  { id: "policy", label: "1. ミドル層のポートフォリオは『学習証明』ではない" },
  { id: "github", label: "2. GitHubの見せ方（プロフィール・ピン留め・草）" },
  { id: "readme", label: "3. プロフィールREADMEテンプレート" },
  { id: "blog", label: "4. 技術ブログの見せ方（Zenn/Qiita/個人）" },
  { id: "talk", label: "5. 登壇・OSS・コミュニティ活動の見せ方" },
  { id: "ng", label: "6. ミドル層がやりがちなNG例" },
  { id: "checklist", label: "7. 提出前チェックリスト" },
  { id: "age", label: "8. 30代・40代の見せ方の違い" },
  { id: "faq", label: "9. よくある質問" },
];

const faqs = [
  {
    q: "30代・40代エンジニアにもポートフォリオは必要ですか？",
    a: "必須ではありませんが、あると技術力の裏づけになります。特にSIerからWeb系への転職や、新しい技術領域への挑戦では『実際にコードが書ける』ことの証明になります。ただしミドル層は、即席のチュートリアル系アプリより『実務知見の延長』や『技術ブログ・登壇』の方が評価につながりやすい点に注意しましょう。",
  },
  {
    q: "業務で作ったコードはポートフォリオに載せていいですか？",
    a: "業務コードをそのまま公開するのは守秘義務違反になるため絶対に避けてください。ただし、業務で培った知見を活かして『類似の仕組み』を個人で作り直し、公開するのは問題ありません。社内ツールの汎用版を作る、というのがよくあるパターンです。",
  },
  {
    q: "GitHubのプロフィールはどう整えるべきですか？",
    a: "プロフィールREADMEを作成し、得意技術・経験領域・連絡先を記載しましょう。ピン留めリポジトリには最も見てほしいものを設定します。コントリビューションの草（緑のグラフ）は活動の継続性を示すので、無理のない範囲で定期的にコミットするのがおすすめです。",
  },
  {
    q: "技術ブログもポートフォリオになりますか？",
    a: "なります。Zenn・Qiita・はてなブログなどで技術記事を発信していると、技術の理解度や言語化能力の証明になります。特に30代以上が設計判断やトラブル対応の記事を書いていると、ナレッジ共有やチーム貢献の姿勢として評価されやすいです。",
  },
  {
    q: "ポートフォリオにどのくらいの完成度が必要ですか？",
    a: "数より質です。1〜2個でも、基本機能の実装・テスト・デプロイ・READMEの整備ができていれば十分です。ミドル層の場合、設計判断や運用面の工夫（CI/CD、監視、エラーハンドリング）まで踏み込めていると差がつきます。",
  },
  {
    q: "登壇や勉強会の経験がアピールになりますか？",
    a: "なります。社内LTや勉強会での登壇は、技術を言語化し人前で伝える力の証明になります。資料をSpeaker Deckやスライド共有サービスで公開し、職務経歴書にURLを添えましょう。コミュニティ運営の経験も、影響力の裏づけになります。",
  },
];

export default function PortfolioPage() {
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
        title="30-40代エンジニアのポートフォリオの見せ方【GitHub・登壇】"
        description="実務経験のある30代・40代エンジニア向けに、GitHub・技術ブログ・登壇・OSSの見せ方を解説。即席アプリより実務の裏づけを示す構成、プロフィールREADMEの作り方、NG例まで実用テンプレで紹介します。"
        url="/knowledge/portfolio/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ" },
          { name: "ポートフォリオの見せ方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          30-40代エンジニアのポートフォリオの見せ方【GitHub・登壇】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 実務経験者ならではの技術力の見せ方
        </p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            未経験者のポートフォリオが『コードが書ける証明』なのに対し、実務経験のある30代・40代のポートフォリオは『どんな技術判断ができ、どんな問題を解いてきたか』を示すものです。同じ成果物でも、見せ方を変えるだけで評価は大きく変わります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、ミドルエンジニアが<strong>GitHub・技術ブログ・登壇・OSS活動</strong>をどう見せれば実務力が伝わるかを、テンプレートとチェックリスト付きで解説します。
          </p>
        </section>

        <DataNote surveyedAt="2026年6月" sources={["各IT転職エージェント公開情報"]} />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-sm text-blue-600 hover:underline">{t.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 1. 方針 */}
        <section id="policy" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">1. ミドル層のポートフォリオは『学習証明』ではない</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            30代・40代がチュートリアルのToDoアプリを提出しても、未経験者との差別化になりません。実務経験者に期待されるのは次の3点です。
          </p>
          <div className="space-y-4">
            {[
              { num: "1", title: "技術判断の根拠を語れること", desc: "「なぜその技術／設計を選んだか」を説明できる成果物。技術選定の理由をREADMEに書くだけで実務力が伝わる。" },
              { num: "2", title: "運用・品質まで踏み込んでいること", desc: "テスト、CI/CD、エラーハンドリング、監視など『作って終わり』でない工夫を見せる。" },
              { num: "3", title: "実務知見の延長であること", desc: "業務で得た課題感を個人開発・ブログ・登壇に昇華する。守秘義務を守りつつ汎用化するのがコツ。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">{item.num}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mt-5">
            <p className="text-sm text-amber-800">
              <strong>ミドル層の優先順位：</strong>「即席アプリを量産」より「①整ったGitHub ＋ ②設計やトラブル対応の技術ブログ ＋ ③登壇・OSS」の方が費用対効果が高いケースが多いです。限られた時間を、実務の裏づけが伝わる出力に投資しましょう。
            </p>
          </div>
        </section>

        {/* 2. GitHub */}
        <section id="github" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">2. GitHubの見せ方（プロフィール・ピン留め・草）</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">プロフィールREADMEで第一印象を作る</h3>
              <p className="text-sm text-blue-700">プロフィールトップに表示されるREADMEに、得意技術・経験領域・代表的な成果物・連絡先をまとめます。採用担当が最初に見る『顔』なので、整っているだけで印象が変わります。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ピン留めは『見てほしい順』に厳選する</h3>
              <p className="text-sm text-blue-700">最大6つのピン留め枠には、READMEが整っていて技術判断が伝わるリポジトリだけを置きます。中途半端な学習用リポジトリは外し、質で勝負します。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">草（コントリビューション）は継続性の証明</h3>
              <p className="text-sm text-blue-700">毎日埋める必要はありませんが、活動が継続していることは伝わります。業務リポジトリが非公開でも、個人開発やOSSへのコミットで可視化できます。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">READMEに技術選定の理由を書く</h3>
              <p className="text-sm text-blue-700">「アーキテクチャ図」「なぜこの構成にしたか」「工夫した点・残課題」をREADMEに書くと、コードを全部読まなくても実務力が伝わります。ミドル層が最も差をつけやすいポイントです。</p>
            </div>
          </div>
        </section>

        {/* 3. README テンプレ */}
        <section id="readme" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">3. プロフィールREADMEテンプレート</h2>
          <p className="text-slate-600 leading-relaxed mb-4">そのまま使えるプロフィールREADMEの雛形です。技術スタックは習熟度つきで書くのがポイントです。</p>
          <pre className="bg-slate-900 text-slate-100 text-xs rounded-xl p-5 overflow-x-auto leading-relaxed">{`# こんにちは、〇〇です

バックエンドを軸に8年。直近5年はGo/TypeScriptでWebサービスの
設計・運用をリードしています。SREやチームの開発体験改善にも関心があります。

## 得意領域
- API設計・パフォーマンスチューニング（Go / gRPC）
- AWS上のインフラ設計・運用（ECS / RDS / Terraform）
- 小規模チームのテックリード・コードレビュー文化づくり

## 技術スタック
| 領域 | 技術（習熟度） |
|------|----------------|
| 言語 | Go(業務メイン) / TypeScript(業務メイン) / Java(実務) |
| インフラ | AWS / Terraform / GitHub Actions |
| DB | PostgreSQL / Redis |

## アウトプット
- 技術ブログ: https://zenn.dev/xxxx
- 登壇資料: https://speakerdeck.com/xxxx
- 連絡先: xxxx@example.com`}</pre>
        </section>

        {/* 4. ブログ */}
        <section id="blog" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">4. 技術ブログの見せ方（Zenn / Qiita / 個人）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ミドル層の技術ブログは『流行りの入門記事』より『実務で詰まった話・設計判断の話』の方が刺さります。次のテーマは反応も評価も得やすいパターンです。
          </p>
          <ul className="space-y-2 mb-4">
            {[
              "本番障害の原因調査と恒久対策（ポストモーテムの汎用版）",
              "技術選定で迷った点と、最終的にAを選んだ理由",
              "レガシーをリファクタした過程と数値で見た効果",
              "チームの開発体験（DX）を改善した取り組み",
              "新技術を実務に導入する際の検証プロセス",
            ].map((t, i) => (
              <li key={i} className="flex gap-2 text-sm text-slate-600">
                <span className="text-blue-600 font-bold shrink-0">✓</span>{t}
              </li>
            ))}
          </ul>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="text-sm text-amber-800"><strong>注意：</strong>記事を書く際も守秘義務を守り、社名・固有のビジネス数値・内部構成は伏せるか一般化します。再現可能な技術的学びだけを切り出すのが安全です。</p>
          </div>
        </section>

        {/* 5. 登壇 */}
        <section id="talk" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">5. 登壇・OSS・コミュニティ活動の見せ方</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">登壇</h3>
              <p className="text-sm text-slate-600">社内LT・勉強会・カンファレンスいずれも実績になります。スライドを公開し、職務経歴書に『登壇テーマ・イベント名・URL』を添えます。人前で技術を言語化できる力の証明になります。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">OSS貢献</h3>
              <p className="text-sm text-slate-600">小さなバグ修正やドキュメント改善でも、マージされたPRはコードの読解力・コミュニケーション力の裏づけになります。貢献したリポジトリとPRのURLをまとめておきましょう。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">コミュニティ運営</h3>
              <p className="text-sm text-slate-600">勉強会の主催・運営は、影響力やリーダーシップの証明になります。EM・テックリード志向のミドル層には特に効果的です。関連: <Link href="/knowledge/management/" className="text-blue-600 underline">マネジメントキャリア</Link>。</p>
            </div>
          </div>
        </section>

        {/* 6. NG */}
        <section id="ng" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">6. ミドル層がやりがちなNG例</h2>
          <div className="space-y-4">
            {[
              { t: "NG1：チュートリアルそのままのアプリを提出", d: "実務経験者が入門教材レベルの成果物を出すと、かえって評価を下げます。設計判断や運用面の工夫を1つでも加えましょう。" },
              { t: "NG2：READMEがない・動かし方が不明", d: "コードが良くてもREADMEがないと読まれません。概要・構成図・起動方法・工夫した点を必ず書きます。" },
              { t: "NG3：業務コードをそのまま公開", d: "守秘義務違反になり信頼を失います。知見を活かして作り直す形にとどめ、社名や内部数値は出しません。" },
            ].map((n, i) => (
              <div key={i} className="bg-red-50 border border-red-200 rounded-lg p-5">
                <h3 className="font-bold text-red-700 mb-1">{n.t}</h3>
                <p className="text-sm text-slate-600">{n.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. チェックリスト */}
        <section id="checklist" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">7. 提出前チェックリスト</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <ul className="space-y-2">
              {[
                "プロフィールREADMEに得意領域・連絡先がある",
                "ピン留めリポジトリは見てほしい順に厳選されている",
                "各リポジトリのREADMEに概要・構成・起動方法・工夫点がある",
                "技術選定の理由がどこかに書かれている",
                "テストやCI/CDなど運用面の工夫が1つ以上ある",
                "技術ブログ・登壇資料のURLを職務経歴書に添えている",
                "業務由来のコード・社名・内部数値が含まれていない",
              ].map((c, i) => (
                <li key={i} className="flex gap-2 text-sm text-slate-700">
                  <span className="text-blue-600 font-bold shrink-0">✓</span>{c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 8. 年代別 */}
        <section id="age" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">8. 30代・40代の見せ方の違い</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：技術の幅と設計判断を見せる</h3>
              <p className="text-sm text-blue-700">手を動かせることに加え、技術選定やリファクタの判断ができることを成果物とブログで示すと効果的です。Web系・新領域への挑戦時はポートフォリオの効果が大きくなります。関連: <Link href="/age/30s/" className="text-blue-700 underline">30代の転職</Link>。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：技術の証明＋影響力を見せる</h3>
              <p className="text-sm text-blue-700">40代は『手を動かせること』を疑われがちなので、現役性を示すGitHub・ブログが有効です。同時に登壇・OSS・コミュニティ運営など影響力の裏づけを添えると、マネジメント・テックリード採用で強みになります。関連: <Link href="/age/40s/" className="text-blue-700 underline">40代の転職</Link>。</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">9. よくある質問</h2>
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
          <h2 className="text-xl font-bold mb-3">成果物の見せ方をプロに相談しよう</h2>
          <p className="text-blue-100 text-sm mb-4">IT特化型エージェントなら、応募先に刺さるポートフォリオ・成果物の見せ方を具体的にアドバイスしてくれます。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
              { name: "技術面接対策ガイド", href: "/knowledge/tech-interview/" },
              { name: "副業・個人開発の活かし方", href: "/knowledge/side-project/" },
              { name: "継続的な学習の進め方", href: "/knowledge/continuous-learning/" },
              { name: "市場価値の調べ方", href: "/knowledge/market-value/" },
              { name: "40代エンジニア転職のリアル", href: "/knowledge/40s-reality/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
