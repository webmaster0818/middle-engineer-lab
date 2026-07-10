import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/oss-contribution/" },
  title: "OSS貢献の始め方｜プルリクだけじゃない8種の貢献と進め方",
  description:
    "30-40代エンジニア向けに、OSS貢献が転職で効く理由と『プルリクだけじゃない』8種の貢献方法を深掘り。good first issueの探し方、マージされやすいPRの条件、業務コードを出せない人の証明づくりまで解説します。",
};

const toc = [
  { id: "conclusion", label: "1. 結論：OSS貢献は『公開された客観的な証明』" },
  { id: "eight", label: "2. プルリクだけじゃない、8種の貢献" },
  { id: "start", label: "3. 始め方：good first issueから最初のPRまで" },
  { id: "merge", label: "4. マージされやすいPRの条件" },
  { id: "talk", label: "5. 職務経歴書・面接での語り方" },
  { id: "time", label: "6. 多忙なミドルの時間の作り方" },
  { id: "honest", label: "7. 盛らない誠実さ（やりがちなNG）" },
  { id: "faq", label: "8. よくある質問" },
];

const faqs = [
  {
    q: "OSS貢献はコードが書けないとできませんか？",
    a: "いいえ。OSS貢献は『プルリクでコードを書くこと』だけではありません。ドキュメントの修正、翻訳、バグの再現報告（issue）、テストの追加、他者のPRレビュー、サンプルコードの提供など、コードを大量に書かなくてもできる貢献が数多くあります。まずはドキュメントの誤字修正やissue報告から始める人も多く、立派な貢献履歴として残ります。",
  },
  {
    q: "OSS貢献は転職で本当に評価されますか？",
    a: "公開された貢献履歴は、業務コードを出せないエンジニアにとって数少ない『客観的な証明』になります。マージされたPRやissueでのやり取りは、コードの読解力・コミュニケーション力・コミュニティでの振る舞いを第三者の目で裏づけます。ただし貢献の量や有名度より、どんな課題にどう向き合ったかという中身が見られます。",
  },
  {
    q: "どのOSSに貢献すればいいか分かりません。",
    a: "まずは自分が業務や個人開発で実際に使っているライブラリ・ツールから探すのがおすすめです。使っているからこそ不便な点やドキュメントの不足に気づけ、貢献の動機も自然です。各リポジトリの『good first issue』『help wanted』『documentation』といったラベルの付いたissueは、初心者でも着手しやすいよう用意されていることが多いです。",
  },
  {
    q: "英語ができないとOSS貢献は無理ですか？",
    a: "海外OSSのやり取りは英語が基本ですが、短く丁寧な英語で十分通じます。翻訳ドキュメントへの貢献、日本語コミュニティのOSS、国産ライブラリへの貢献など、英語のハードルが低い入り口もあります。完璧な英語より、再現手順やPRの意図が正確に伝わることの方が重視されます。",
  },
  {
    q: "業務が忙しくてOSSに割く時間がありません。",
    a: "毎週まとまった時間を取る必要はありません。ドキュメントの誤字修正やissue報告なら数十分でできますし、普段使っているツールで困った瞬間を貢献の起点にすれば、学習と貢献を兼ねられます。『専用の時間を作る』より『日々の開発の延長で貢献する』方が、多忙な30-40代には続きやすい方法です。",
  },
  {
    q: "OSS貢献とGitHub・技術ブログはどう使い分けますか？",
    a: "OSS貢献は『第三者のプロジェクトに参加した客観的な証明』、GitHubは『自分の成果物の置き場』、技術ブログは『思考や設計判断の言語化』という役割の違いがあります。横断的な見せ方の全体像は",
    aLink: { text: "ポートフォリオの見せ方", href: "/knowledge/portfolio/" },
    aAfter: "を、それぞれの単体運用はGitHub・技術ブログの記事を参照してください。",
  },
];

export default function OssContributionPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a + (faq.aLink ? faq.aLink.text + (faq.aAfter ?? "") : ""),
      },
    })),
  };

  return (
    <>
      <ArticleJsonLd
        title="OSS貢献の始め方｜プルリクだけじゃない8種の貢献と進め方"
        description="30-40代エンジニア向けに、OSS貢献が転職で効く理由と『プルリクだけじゃない』8種の貢献方法を深掘り。good first issueの探し方、マージされやすいPRの条件、業務コードを出せない人の証明づくりまで解説します。"
        url="/knowledge/oss-contribution/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ" },
          { name: "OSS貢献の始め方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          OSS貢献の始め方｜プルリクだけじゃない8種の貢献と進め方
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 業務コードを出せないミドルのための客観的な証明づくり
        </p>

        {/* 直答box (P6-C2) */}
        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】OSS貢献はどう始め、転職にどう効く？</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: OSS貢献は第三者のプロジェクトに残る「公開された客観的な証明」で、業務コードを出せないミドルほど価値があります。プルリクだけでなくドキュメント改善やissue報告から始められ、派手さより丁寧で誠実な貢献が信頼を生みます。</strong></p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・貢献はPRだけでなくドキュメント改善・翻訳・issue報告・テスト追加・レビューなど8種ある</li><li>・自分が業務や個人開発で使うライブラリの「good first issue」等のラベルから着手すると始めやすい</li><li>・職務経歴書・面接では貢献の量や有名度より、どんな課題にどう向き合ったかの中身が見られる</li></ul>
          </div>
        </section>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            「業務コードは公開できない。でも技術力を客観的に示したい」——30-40代の多くが抱えるこのジレンマに、OSS貢献は一つの答えになります。<strong>公開された貢献履歴は、第三者のプロジェクト上に残る客観的な証明</strong>だからです。そして貢献はプルリク（PR）だけではありません。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事はOSS貢献を<strong>単体</strong>で深掘りします。GitHub・ブログ・登壇も含めた成果物の全体像は<Link href="/knowledge/portfolio/" className="text-petrol underline">ポートフォリオの見せ方</Link>を、GitHub単体は<Link href="/knowledge/github-showcase/" className="text-petrol underline">GitHubの見せ方</Link>、発信は<Link href="/knowledge/tech-blog/" className="text-petrol underline">技術ブログの始め方</Link>をあわせてご覧ください。
          </p>
        </section>

        <DataNote surveyedAt="2026年6月" sources={["各IT転職エージェント公開情報"]} />

        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-sm text-petrol hover:underline">{t.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 1. 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">1. 結論：OSS貢献は『公開された客観的な証明』</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            自分の個人開発リポジトリは「自己申告」ですが、OSSへの貢献は<strong>第三者のメンテナーとのやり取りを経てプロジェクトに取り込まれた事実</strong>です。マージされたPRやissueでの議論は、コードの読解力・問題の切り分け・コミュニケーションの作法を、外部の目で裏づけてくれます。
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="text-sm text-amber-800">
              <strong>ミドルにとっての価値：</strong>業務コードを出せない人ほど、OSS貢献は数少ない客観的証明になります。大きな機能追加でなくても、ドキュメント1行の改善やissue報告から始められます。「派手な貢献」より「丁寧で誠実な貢献」が信頼を生みます。
            </p>
          </div>
        </section>

        {/* 2. 8種 */}
        <section id="eight" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">2. プルリクだけじゃない、8種の貢献</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            OSS貢献=機能追加のPR、と思うとハードルが高く感じます。実際にはコードを大量に書かなくてもできる貢献が多くあります。下の8種から、自分が始めやすいものを選びましょう。
          </p>
          <div className="space-y-4">
            {[
              { num: "1", title: "ドキュメント改善", desc: "READMEや公式ドキュメントの誤字修正・説明追加・分かりにくい箇所の改善。最も着手しやすく、メンテナーに歓迎されやすい。" },
              { num: "2", title: "翻訳", desc: "英語ドキュメントの日本語化、日本語ドキュメントの英語化。語学を活かせ、利用者への貢献度も高い。" },
              { num: "3", title: "issue報告（バグ報告）", desc: "再現手順・期待挙動・実際の挙動・環境を整理して報告する。良い再現報告は修正と同じくらい価値がある。" },
              { num: "4", title: "テストの追加", desc: "未カバーのケースにテストを足す。既存挙動を壊さず品質を上げる貢献で、コードを深く読む力が伝わる。" },
              { num: "5", title: "他者PRのレビュー", desc: "オープンなPRに建設的なコメントを残す。コードを読み解く力とコミュニケーションの作法が見える。" },
              { num: "6", title: "サンプル・examplesの提供", desc: "使い方のサンプルコードやチュートリアルを追加する。利用者の入口を作る貢献。" },
              { num: "7", title: "issueへの回答・トリアージ", desc: "他の利用者の質問に答えたり、重複issueを整理したりする。コミュニティ運営への貢献。" },
              { num: "8", title: "バグ修正・機能追加のPR", desc: "いわゆる『プルリク』。issueで合意を取ってから、小さく安全に出すのが基本。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.num}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. 始め方 */}
        <section id="start" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">3. 始め方：good first issueから最初のPRまで</h2>
          <div className="space-y-4">
            {[
              { num: "STEP 1", title: "使っているOSSを選ぶ", desc: "業務や個人開発で実際に使っているライブラリ・ツールから始める。不便さに気づけ、動機も自然。" },
              { num: "STEP 2", title: "good first issueを探す", desc: "リポジトリのissueで『good first issue』『help wanted』『documentation』ラベルを絞り込む。初心者向けに整理されていることが多い。" },
              { num: "STEP 3", title: "貢献ガイドを読む", desc: "CONTRIBUTING.md・行動規範・PRテンプレートを必ず確認する。プロジェクトごとの作法に従うのが第一歩。" },
              { num: "STEP 4", title: "着手前に一声かける", desc: "issueに『取り組んでよいか』をコメントし、重複作業や方針ずれを防ぐ。メンテナーの合意があると進めやすい。" },
              { num: "STEP 5", title: "小さくPRを出す", desc: "1PR=1目的。差分を小さく保ち、変更理由と影響範囲を説明する。テストがあれば添える。" },
              { num: "STEP 6", title: "レビューに丁寧に対応する", desc: "指摘には素直に対応し、議論は事実ベースで。マージされたら貢献履歴として残る。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center px-3 h-8 rounded-full bg-emerald-600 text-white font-bold text-xs shrink-0">{item.num}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. マージされやすいPR */}
        <section id="merge" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">4. マージされやすいPRの条件</h2>
          <p className="text-slate-600 leading-relaxed mb-4">メンテナーは限られた時間でレビューします。取り込みやすいPRには共通点があります。チェックリストで確認しましょう。</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-5">
            <ul className="space-y-2">
              {[
                "事前にissueで方針の合意が取れている",
                "1つのPRが1つの目的に絞られている（差分が小さい）",
                "既存の挙動を壊していない（後方互換に配慮）",
                "変更が必要な理由と影響範囲を説明している",
                "テストを追加 or 既存テストが通ることを示している",
                "プロジェクトのコーディング規約・lintに従っている",
                "コミットメッセージ・PR説明が読みやすい",
                "安全である根拠（なぜ壊れないか）を添えている",
              ].map((c, i) => (
                <li key={i} className="flex gap-2 text-sm text-slate-700">
                  <span className="text-petrol font-bold shrink-0">✓</span>{c}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed mb-3">下はバグ報告（issue）の記述例です。良い報告は、それ自体が価値ある貢献になります。</p>
          <pre className="bg-slate-900 text-slate-100 text-xs rounded-xl p-5 overflow-x-auto leading-relaxed">{`### 概要
〇〇の条件で△△が期待通り動作しない。

### 再現手順
1. ...を実行する
2. ...を設定する
3. ...が表示される

### 期待する挙動
□□が表示されるはず。

### 実際の挙動
エラー「...」が発生する。

### 環境
- バージョン: v1.2.3
- OS / ランタイム: ...
- 関連設定: ...`}</pre>
        </section>

        {/* 5. 語り方 */}
        <section id="talk" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">5. 職務経歴書・面接での語り方</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">URLを添えて『事実』で語る</h3>
              <p className="text-sm text-slate-600">貢献したリポジトリ名・PR/issueのURL・概要を職務経歴書にまとめます。「〇〇というOSSの△△を改善（PRリンク）」のように、検証可能な形で示すのが最強です。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">『なぜ・どう』を言語化する</h3>
              <p className="text-sm text-slate-600">面接では、なぜその課題に取り組み、どう設計・実装し、メンテナーとどうやり取りしたかを語れると深みが出ます。技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-petrol underline">技術面接対策ガイド</Link>も参考に。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">小さな貢献でも卑下しない</h3>
              <p className="text-sm text-slate-600">ドキュメント修正やissue報告も立派な貢献です。「小さいですが」と過度に卑下せず、何を改善したかを淡々と事実で伝えましょう。</p>
            </div>
          </div>
        </section>

        {/* 6. 時間 */}
        <section id="time" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">6. 多忙なミドルの時間の作り方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">仕事と家庭で時間が限られる30-40代が、無理なく続けるコツです。</p>
          <div className="space-y-4">
            {[
              { t: "日々の開発の『困った』を起点にする", d: "普段使うツールで詰まった瞬間こそ貢献のチャンス。ドキュメント不足やバグに気づいたらメモし、後でissue/PRにする。学習と貢献を兼ねられる。" },
              { t: "まず『数十分でできる貢献』から", d: "誤字修正・翻訳・issue報告は短時間で完了する。まとまった時間を確保しなくても始められる。" },
              { t: "完璧主義を捨てる", d: "1回で大きな貢献を狙わず、小さく出して反応をもらう。継続の方が大きな一発より価値がある。" },
            ].map((n, i) => (
              <div key={i} className="bg-emerald-50 border border-emerald-200 rounded-lg p-5">
                <h3 className="font-bold text-emerald-800 mb-1">{n.t}</h3>
                <p className="text-sm text-slate-600">{n.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. 誠実さ */}
        <section id="honest" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">7. 盛らない誠実さ（やりがちなNG）</h2>
          <div className="space-y-4">
            {[
              { t: "NG1：実態より大きく見せる", d: "誤字修正1件を『主要OSSにコミッターとして参加』のように誇張すると、URLを見れば実態が分かり信頼を失う。事実を事実のまま伝える。" },
              { t: "NG2：合意なしに大きなPRを送る", d: "issueでの相談なしに大規模変更を出すと、メンテナーの方針と合わずクローズされやすい。まず一声かける。" },
              { t: "NG3：スター稼ぎ・数稼ぎ目的の貢献", d: "中身のないPRや形だけの貢献は見抜かれる。利用者・プロジェクトの役に立つ貢献を心がける。" },
            ].map((n, i) => (
              <div key={i} className="bg-red-50 border border-red-200 rounded-lg p-5">
                <h3 className="font-bold text-red-700 mb-1">{n.t}</h3>
                <p className="text-sm text-slate-600">{n.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">8. よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800">
                  <span>Q. {faq.q}</span>
                  <span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span>
                </summary>
                <div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">
                  A. {faq.a}
                  {faq.aLink && (
                    <>
                      <Link href={faq.aLink.href} className="text-petrol underline">{faq.aLink.text}</Link>
                      {faq.aAfter}
                    </>
                  )}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">技術の証明づくりをプロに相談しよう</h2>
          <p className="text-blue-100 text-sm mb-4">IT特化型エージェントなら、OSS貢献やGitHubを応募先にどう見せるか具体的にアドバイスしてくれます。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "ポートフォリオの見せ方（横断）", href: "/knowledge/portfolio/" },
              { name: "GitHubの見せ方・採用担当が見る7点", href: "/knowledge/github-showcase/" },
              { name: "技術ブログの始め方・プラットフォーム選び", href: "/knowledge/tech-blog/" },
              { name: "継続的な学習の進め方", href: "/knowledge/continuous-learning/" },
              { name: "技術面接対策ガイド", href: "/knowledge/tech-interview/" },
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
