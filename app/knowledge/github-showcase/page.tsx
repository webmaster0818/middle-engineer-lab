import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "GitHubの見せ方｜採用担当が見る7ポイントと運用テク",
  description:
    "30-40代エンジニア向けに、転職でGitHubを単体でどう運用・整備するかを深掘り。採用担当が見る7ポイント、READMEチェックリスト、業務コードを出せない時の代替策、NG例まで実例で解説します。",
};

const toc = [
  { id: "conclusion", label: "1. 結論：ミドルのGitHubは『現役性と再現性』を示す場" },
  { id: "seven", label: "2. 採用担当が見る7つのポイント" },
  { id: "readme", label: "3. リポジトリREADMEチェックリスト" },
  { id: "pinned", label: "4. ピン留め・草・プロフィールの運用テク" },
  { id: "private", label: "5. 業務コードを出せない人の代替策" },
  { id: "ng", label: "6. ミドルがやりがちなNG例" },
  { id: "age", label: "7. 30代・40代でのGitHubの使い分け" },
  { id: "faq", label: "8. よくある質問" },
];

const faqs = [
  {
    q: "GitHubに公開リポジトリがほとんどありません。転職で不利になりますか？",
    a: "GitHubが空でも、それ自体で不採用になることは多くありません。多くのエンジニアは業務コードを公開できないからです。ただし、Web系・自社開発企業では『コードが書ける現役性』を見たい採用担当もいるため、個人開発・OSS・技術記事のいずれか1つでも継続している痕跡があると安心材料になります。空のまま放置するより、小さくても整ったリポジトリを1〜2個用意する方が効果的です。",
  },
  {
    q: "業務で書いたコードをGitHubに載せても大丈夫ですか？",
    a: "業務コードをそのまま公開するのは守秘義務・著作権の観点で原則NGです。会社に著作権が帰属しているケースが大半で、社名や内部構成が特定できる情報を出すと信頼を失います。業務で得た知見を活かして、固有情報を取り除いた『汎用版』を個人で作り直して公開するのが安全な方法です。",
  },
  {
    q: "コントリビューションの草（緑のグラフ）は毎日埋めるべきですか？",
    a: "毎日埋める必要はありません。草は『活動が継続しているか』を示す補助的な指標であり、不自然な毎日コミットはかえって作為的に見えることもあります。週に数回でも、意味のある変更が継続的に記録されていれば十分です。業務リポジトリが非公開でも、個人開発やOSSへのコミットで活動を可視化できます。",
  },
  {
    q: "ピン留めリポジトリには何を選べばいいですか？",
    a: "最大6枠には『最も見てほしいもの』を厳選します。READMEが整っていて技術判断が伝わるリポジトリ、設計の工夫が見えるもの、OSS貢献のフォーク先などが候補です。チュートリアルそのままの学習用リポジトリや、READMEのない未完成リポジトリは外し、質で勝負しましょう。",
  },
  {
    q: "古いリポジトリが残っていると印象が悪いですか？",
    a: "古い技術スタックの学習用リポジトリが大量に残っていると、現役性が伝わりにくくなることがあります。アーカイブ機能で過去のものを整理するか、ピン留めで見せたいものを前面に出すと印象が整います。ただし完成度の高い過去作品なら、年代が古くても残す価値はあります。",
  },
  {
    q: "GitHub以外で技術力を示す方法はありますか？",
    a: "あります。技術ブログ（Zenn・Qiita）、OSS貢献、登壇資料、個人開発のデモサイトなどが代表例です。GitHubはあくまで成果物の置き場の一つなので、横断的な見せ方は",
    aLink: { text: "ポートフォリオの見せ方", href: "/knowledge/portfolio/" },
    aAfter: "を、ブログ単体の運用は技術ブログの記事を参照してください。",
  },
];

export default function GithubShowcasePage() {
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
        title="GitHubの見せ方｜採用担当が見る7ポイントと運用テク"
        description="30-40代エンジニア向けに、転職でGitHubを単体でどう運用・整備するかを深掘り。採用担当が見る7ポイント、READMEチェックリスト、業務コードを出せない時の代替策、NG例まで実例で解説します。"
        url="/knowledge/github-showcase/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ" },
          { name: "GitHubの見せ方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          GitHubの見せ方｜採用担当が見る7ポイントと運用テク
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 30-40代エンジニアのためのGitHub単体運用ガイド
        </p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            転職活動でGitHubのURLを添えるとき、採用担当はコードを隅々まで読むわけではありません。限られた時間で<strong>プロフィール・ピン留め・READMEをざっと眺め、「この人は今も手を動かしているか」「設計判断ができるか」を推し量ります</strong>。だからこそ、同じ成果物でも整え方ひとつで印象は大きく変わります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事はGitHub<strong>単体</strong>の運用・整備テクニックに絞って深掘りします。GitHub・ブログ・登壇・OSSを横断してどう組み合わせるかの全体像は<Link href="/knowledge/portfolio/" className="text-petrol underline">ポートフォリオの見せ方</Link>を、ブログやOSSの個別深掘りはそれぞれの記事をあわせてご覧ください。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">1. 結論：ミドルのGitHubは『現役性と再現性』を示す場</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            未経験者のGitHubが「コードが書ける証明」なのに対し、実務経験のある30代・40代のGitHubに期待されるのは別物です。結論から言えば、ミドルが示すべきは次の2点です。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">現役性</h3>
              <p className="text-sm text-petrol-deep">「マネジメント中心で、もう手を動かせないのでは」という40代特有の懸念を払拭する。最新のコミット・モダンな技術スタックの痕跡が効きます。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">再現性</h3>
              <p className="text-sm text-petrol-deep">「なぜその設計にしたか」をREADMEで語れること。手が動くだけでなく、判断の理由を再現可能な形で残せるのがミドルの差別化点です。</p>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="text-sm text-amber-800">
              <strong>ミドルの優先順位：</strong>即席アプリを量産するより、<strong>①整ったプロフィール ＋ ②設計判断が伝わるリポジトリ1〜2個 ＋ ③継続の痕跡</strong>に時間を投資する方が費用対効果が高いケースが多いです。数ではなく、1つの完成度で勝負しましょう。
            </p>
          </div>
        </section>

        {/* 2. 7ポイント */}
        <section id="seven" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">2. 採用担当が見る7つのポイント</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            技術系の採用担当・エンジニア面接官がGitHubを開いたとき、無意識にチェックしている観点を7つに整理しました。順番に潰していけば、限られた閲覧時間で好印象を作れます。
          </p>
          <div className="space-y-4">
            {[
              { num: "1", title: "コントリビューション（草）＝継続性", desc: "緑のグラフは「今も活動しているか」の第一印象。毎日埋める必要はなく、不自然に詰める必要もありません。継続の痕跡があれば十分です。" },
              { num: "2", title: "ピン留めリポジトリ＝見せたい代表作", desc: "最大6枠に何を置くかで自己プロデュース力が伝わります。READMEが整い技術判断が見えるものだけを厳選します。" },
              { num: "3", title: "README＝コードを読まずに伝わる説明", desc: "概要・構成図・起動方法・工夫点・残課題が書かれているか。多くの採用担当はREADMEで判断を済ませます。" },
              { num: "4", title: "技術選定の理由＝設計判断の証拠", desc: "「なぜこの言語・構成にしたか」が書かれていると、ミドルらしい判断力が伝わります。最も差をつけやすい部分です。" },
              { num: "5", title: "issue・PRの使い方＝協働の作法", desc: "個人開発でもissueでタスクを管理し、PR単位で変更を積んでいると、チーム開発に馴染む人だと伝わります。" },
              { num: "6", title: "コード品質＝命名・粒度・テスト", desc: "全部は読まれませんが、開いた1ファイルの命名・関数の粒度・テストの有無で印象が決まります。" },
              { num: "7", title: "最新性＝モダンさと現役性", desc: "数年前で更新が止まっていると不安材料に。直近に手を入れた痕跡があると現役性が伝わります。" },
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

        {/* 3. README チェックリスト */}
        <section id="readme" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">3. リポジトリREADMEチェックリスト</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ポイント3・4で触れたREADMEは、GitHub運用で最も投資対効果が高い箇所です。プロフィールREADMEの雛形は<Link href="/knowledge/portfolio/" className="text-petrol underline">ポートフォリオの見せ方</Link>にありますので、ここでは<strong>各リポジトリのREADME</strong>に絞って、ミドルが書くべき項目をチェックリストにしました。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-5">
            <ul className="space-y-2">
              {[
                "1行で「何を解決するもの」かが書かれている",
                "技術スタックと、なぜそれを選んだかの一文がある",
                "アーキテクチャ図 or 構成の概要がある",
                "ローカルでの起動手順（環境構築コマンド）がある",
                "工夫した点・設計上のトレードオフが書かれている",
                "既知の課題・残タスク（Known Issues）を正直に書いている",
                "デモURL or スクリーンショットがある（動くものは強い）",
                "ライセンスが明記されている",
              ].map((c, i) => (
                <li key={i} className="flex gap-2 text-sm text-slate-700">
                  <span className="text-petrol font-bold shrink-0">✓</span>{c}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed mb-4">下は「工夫した点・トレードオフ」セクションの記述例です。ミドルらしさは、選んだ理由と<strong>選ばなかった選択肢</strong>を併記できるかに出ます。</p>
          <pre className="bg-slate-900 text-slate-100 text-xs rounded-xl p-5 overflow-x-auto leading-relaxed">{`## 設計上の判断

- 永続化はPostgreSQLを採用。当初はNoSQLも検討したが、
  集計クエリが多くトランザクション整合性が要るためRDBを選択。
- 認証は自前実装せず外部IdPに委譲。運用負荷とセキュリティ責任を
  外出しする判断（小規模個人開発のため）。
- 非同期処理はあえて入れていない。現状のスループットでは
  オーバーエンジニアリングと判断した（負荷が増えたら導入予定）。

## 残課題（Known Issues）

- E2Eテスト未整備。現状はユニットテストのみ。
- N+1クエリが一覧画面に1箇所残っている（issue #12）。`}</pre>
        </section>

        {/* 4. 運用テク */}
        <section id="pinned" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">4. ピン留め・草・プロフィールの運用テク</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">ピン留めは「見てほしい順」に並べ替える</h3>
              <p className="text-sm text-slate-600">ピン留めは表示順を手動で変えられます。最も自信のあるリポジトリを左上に置きましょう。OSS貢献のフォーク先や、業務に近い技術構成のものを前に出すと、応募先に刺さります。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">古い・未完成リポジトリはアーカイブで整理</h3>
              <p className="text-sm text-slate-600">削除せずともアーカイブすれば「読み取り専用の過去作」として整理できます。学習用の使い捨てリポジトリが大量に並んでいる状態を解消し、現役性のノイズを減らせます。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">草は「無理なく継続」が原則</h3>
              <p className="text-sm text-slate-600">空コミットや意味のない更新で草を埋めるのは逆効果になり得ます。OSSのドキュメント修正、個人開発の小さな改善など、意味のある変更を週数回積む方が誠実に見えます。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">プロフィールREADMEで「顔」を作る</h3>
              <p className="text-sm text-slate-600">プロフィールトップのREADMEに得意領域・経験年数・連絡先・アウトプット先をまとめます。雛形は<Link href="/knowledge/portfolio/" className="text-petrol underline">ポートフォリオの見せ方</Link>を流用してください。</p>
            </div>
          </div>
        </section>

        {/* 5. 代替策 */}
        <section id="private" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">5. 業務コードを出せない人の代替策</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            30-40代の多くは「業務コードは公開できないし、家庭や仕事で個人開発の時間も取りにくい」という現実を抱えています。GitHubが薄いこと自体は珍しくありません。出せないなら、別の形で現役性と再現性を示しましょう。
          </p>
          <div className="space-y-4">
            {[
              { t: "知見の汎用版を作り直す", d: "業務で得た課題感から固有情報を取り除き、小さな汎用ツールやサンプルとして公開する。社内ツールの汎用版はよくあるパターンです。" },
              { t: "OSSに小さく貢献する", d: "ドキュメント修正・翻訳・issue報告など、コードを書かない貢献でも公開された履歴が残ります。詳細はOSS貢献の記事へ。" },
              { t: "技術記事で思考を可視化する", d: "コードを公開できなくても、設計判断やトラブル対応の思考過程は記事にできます。これも立派なアウトプットです。" },
              { t: "サンプルコード付きの検証リポジトリ", d: "新技術を試した最小構成のサンプルを公開する。完成プロダクトでなくても、検証の丁寧さが伝わります。" },
            ].map((n, i) => (
              <div key={i} className="bg-emerald-50 border border-emerald-200 rounded-lg p-5">
                <h3 className="font-bold text-emerald-800 mb-1">{n.t}</h3>
                <p className="text-sm text-slate-600">{n.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. NG */}
        <section id="ng" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">6. ミドルがやりがちなNG例</h2>
          <div className="space-y-4">
            {[
              { t: "NG1：bot的なコミットで草を量産", d: "自動コミットや空更新で草を埋めると、見る人が見れば不自然さに気づきます。継続性を偽装するより、薄くても本物の活動を残しましょう。" },
              { t: "NG2：フォークしただけのリポジトリが大量", d: "スター代わりにフォークしたリポジトリが並ぶと、自分の成果物が埋もれます。フォークは整理し、貢献したものだけ残します。" },
              { t: "NG3：READMEのない空リポジトリを放置", d: "コードがあってもREADMEがないと読まれません。説明のないリポジトリは公開しないか、最低限の概要を付けます。" },
              { t: "NG4：業務コードをそのまま公開", d: "守秘義務・著作権違反になり、信頼を一発で失います。社名・内部数値・固有構成は出さず、汎用化してから公開します。" },
            ].map((n, i) => (
              <div key={i} className="bg-red-50 border border-red-200 rounded-lg p-5">
                <h3 className="font-bold text-red-700 mb-1">{n.t}</h3>
                <p className="text-sm text-slate-600">{n.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. 年代別 */}
        <section id="age" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">7. 30代・40代でのGitHubの使い分け</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：技術の幅と設計判断を見せる</h3>
              <p className="text-sm text-petrol-deep">手が動くのは前提として、技術選定やリファクタの判断ができることをREADMEで示すと効果的です。Web系・新領域への挑戦時はGitHubの効果が大きくなります。関連: <Link href="/age/30s/" className="text-petrol-deep underline">30代の転職</Link>。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：現役性を疑われないことが最優先</h3>
              <p className="text-sm text-petrol-deep">「もう手を動かせないのでは」という先入観を、直近のコミットとモダンな構成で払拭します。マネジメント志向でも、コードを読み書きできる現役性を見せると採用の安心材料になります。関連: <Link href="/age/40s/" className="text-petrol-deep underline">40代の転職</Link>。</p>
            </div>
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
          <h2 className="text-xl font-bold mb-3">GitHubの見せ方をプロに相談しよう</h2>
          <p className="text-blue-100 text-sm mb-4">IT特化型エージェントなら、応募先に刺さるGitHub・成果物の見せ方を具体的にアドバイスしてくれます。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "ポートフォリオの見せ方（横断）", href: "/knowledge/portfolio/" },
              { name: "技術ブログの書き方・プラットフォーム選び", href: "/knowledge/tech-blog/" },
              { name: "OSS貢献の始め方・8つの貢献", href: "/knowledge/oss-contribution/" },
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
