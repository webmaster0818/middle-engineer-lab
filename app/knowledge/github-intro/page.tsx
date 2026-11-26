import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "GitHub入門｜GitとGitHubの違い・最初のコミットからプルリクエストまで・Freeプランの無料枠【2026年】";
const DESCRIPTION =
  "GitHubの使い方を、GitとGitHubの違い、最初のコミット（当サイトで実行した出力つき）、pushに必要な認証、プルリクエストの順に公式ドキュメントで解説します。Freeプランの無料枠と、Octoverse 2026の国別の開発者数も整理します。";
const URL = "/knowledge/github-intro/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "difference", label: "GitとGitHubの違い" },
  { id: "first-commit", label: "最初のコミット（当サイトで実行）" },
  { id: "push", label: "GitHubへのpushと認証" },
  { id: "pull-request", label: "プルリクエストの流れ" },
  { id: "free", label: "Freeプランで使える範囲" },
  { id: "octoverse", label: "GitHubの開発者数（Octoverse 2026）" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "GitとGitHubの違いは何ですか？",
    a: "Gitは、ファイルへの変更を追跡するオープンソースのバージョン管理システムで、自分のパソコンで動きます。GitHubは、Gitのプロジェクト（リポジトリ）をクラウドで預かり、チームで共同作業するための機能を加えたサービスです（GitHub Docs）。",
  },
  {
    q: "GitHubは無料で使えますか？",
    a: "使えます。個人向けのGitHub Freeでは、公開・非公開のリポジトリを無制限に作れます。料金ページでは、GitHub Actionsは月2,000分、Packagesのストレージは500MBと案内されています。Codespacesは月120コア時間・15GBまで無料です（2026年11月26日確認）。",
  },
  {
    q: "pushのときにパスワードを入れてもエラーになるのはなぜですか？",
    a: "GitHubは2021年8月13日から、Gitの操作でのアカウントのパスワードによる認証を受け付けていません。HTTPSではパスワードの代わりにpersonal access tokenを入力するか、Git Credential Managerなどの認証情報ヘルパーを使います。SSHの鍵を登録する方法もあります。",
  },
  {
    q: "プルリクエストとは何ですか？",
    a: "GitHub Docsは、プルリクエストを「コードの変更をプロジェクトにマージするための提案」と説明しています。変更をマージする前に、チームで話し合い、確認できるGitHubの主要な共同作業の機能です。",
  },
  {
    q: "ブランチ名はmainとmasterのどちらですか？",
    a: "GitHubで作るリポジトリの既定のブランチ名はmainです。一方、Git本体の既定はmasterで、Git 3.0でmainに変わる予定とされています（git-scm.com）。設定 init.defaultBranch で変えられます。当サイトの検証用のMac（Apple Git）では、Command Line Toolsの設定ファイルでmainが指定されていました。",
  },
];

const freeRows = [
  { item: "リポジトリ", value: "公開・非公開とも無制限（非公開は一部の機能が制限）" },
  { item: "GitHub Actions", value: "月2,000分（料金ページの表記）。ドキュメント上は月12米ドル分の利用枠。公開リポジトリの標準ランナーは無料" },
  { item: "GitHub Packages", value: "ストレージ500MB・データ転送月1GB。公開パッケージは無料" },
  { item: "GitHub Codespaces", value: "月120コア時間・ストレージ15GB（2コアのマシンなら60時間）。個人アカウントのみ" },
];

const countryRows = [
  { c: "米国", n: "3,830万人" },
  { c: "インド", n: "3,200万人" },
  { c: "中国", n: "1,240万人" },
  { c: "ブラジル", n: "1,020万人" },
  { c: "日本", n: "715万人" },
  { c: "英国", n: "647万人" },
];

const th = "border border-slate-200 px-3 py-2 text-left";
const td = "border border-slate-200 px-3 py-2";

export default function GithubIntroPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url={URL} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "GitHub入門" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          GitHub入門｜GitとGitHubの違い・最初のコミットからプルリクエストまで・Freeプランの無料枠
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月26日 | 公式資料の確認日: 2026年11月26日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】GitHub入門</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>GitHubは、Gitで管理するリポジトリをクラウドで預かり、チームの共同作業の機能を加えたサービスです。手元で「git init → git add → git commit」で変更を記録し、GitHubに「git push」で送り、プルリクエストで変更を提案します。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・GitHub Freeでは、非公開のリポジトリも無制限に作れます</li>
              <li>・pushの認証にアカウントのパスワードは使えません（2021年8月13日から）</li>
              <li>・GitHubを使う日本の開発者は715万人で、国別で5番目です（Octoverse 2026）</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、GitHub Docs（日本語版）、GitHubの料金ページ、GitHubブログ（Octoverse 2026・認証の変更の告知）、Git公式サイト（git-scm.com）をもとに、GitHubを使い始める手順を整理します。コマンドの出力は、当サイトの検証用のMacで実行したものです。
        </p>

        <DataNote
          surveyedAt="2026年11月26日"
          sources={["GitHub Docs（日本語版）", "GitHub「Pricing」", "GitHub Blog「Octoverse 2026」・認証の変更の告知（2020年12月15日）", "git-scm.com（git-init）"]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="difference" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">GitとGitHubの違い</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>項目</th>
                  <th className={th}>Git</th>
                  <th className={th}>GitHub</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={td}>何か</td><td className={td}>ファイルへの変更を追跡するバージョン管理システム（オープンソース）</td><td className={td}>Gitのリポジトリをクラウドでホストし、共同作業の機能を加えたサービス</td></tr>
                <tr><td className={td}>動く場所</td><td className={td}>自分のパソコン（各開発者がプロジェクトと履歴の完全なコピーを持つ）</td><td className={td}>クラウド（github.com）</td></tr>
                <tr><td className={td}>主な機能</td><td className={td}>コミット・ブランチ・マージなど履歴の管理</td><td className={td}>プルリクエスト・Issues・Actions（自動化）など</td></tr>
                <tr><td className={td}>最新版・料金</td><td className={td}>2.56.1（2026年10月26日、セキュリティ修正）。無料</td><td className={td}>Freeプランあり（下の表）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：GitHub Docs「GitHub とは」「Git について」、git-scm.com。</p>
        </section>

        <section id="first-commit" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">最初のコミット（当サイトで実行）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            GitHubに送る前に、手元のGitで変更を記録します。当サイトの検証用のMac（Apple Git、2026年11月26日）で、空のフォルダから最初のコミットまでを実行しました。
          </p>
          <pre className="bg-slate-900 text-slate-100 text-xs rounded-lg p-4 overflow-x-auto leading-6"><code>{`$ mkdir hello-repo && cd hello-repo
$ git init
Initialized empty Git repository in ~/hello-repo/.git/
$ echo "# hello-repo" > README.md
$ git add README.md
$ git status --short
A  README.md
$ git commit -m "最初のコミット"
[main (root-commit) f1df7e5] 最初のコミット
 1 file changed, 1 insertion(+)
 create mode 100644 README.md
$ git branch
* main`}</code></pre>
          <p className="text-xs text-slate-500 mt-2">コミットの前に、git config で名前とメールアドレスを設定しておく必要があります。コミットID（f1df7e5）は実行ごとに変わります。</p>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>コマンド</th>
                  <th className={th}>していること</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={td}><code>git init</code></td><td className={td}>フォルダをGitのリポジトリにする</td></tr>
                <tr><td className={td}><code>git add</code></td><td className={td}>次のコミットに含めるファイルを選ぶ（status の「A」は追加予定の意味）</td></tr>
                <tr><td className={td}><code>git commit -m</code></td><td className={td}>選んだ変更を、メッセージつきで履歴に記録する</td></tr>
                <tr><td className={td}><code>git branch</code></td><td className={td}>ブランチの一覧と、今いるブランチ（*）を表示する</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">
            このMacでは、最初のブランチ名がmainになりました。Git公式のドキュメントでは、既定の名前は現在master（Git 3.0でmainに変わる予定）とされていますが、確認すると、Command Line Toolsの設定ファイル（/Library/Developer/CommandLineTools/usr/share/git-core/gitconfig）で init.defaultBranch=main が指定されていました。環境によってはmasterになるため、GitHubの既定（main）とそろえたい場合は <code>git config --global init.defaultBranch main</code> で設定します。
          </p>
        </section>

        <section id="push" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">GitHubへのpushと認証</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            GitHubで空のリポジトリを作ったら、手元のリポジトリにその場所を登録して送ります（ユーザー名とリポジトリ名は自分のものに置き換えます）。
          </p>
          <pre className="bg-slate-900 text-slate-100 text-xs rounded-lg p-4 overflow-x-auto leading-6"><code>{`$ git remote add origin https://github.com/<ユーザー名>/hello-repo.git
$ git push -u origin main`}</code></pre>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>接続方法</th>
                  <th className={th}>認証のしかた（GitHub Docs）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={td}>HTTPS</td><td className={td}>パスワードを求められたら、personal access tokenを入力する。またはGit Credential Managerなどの認証情報ヘルパーを使う</td></tr>
                <tr><td className={td}>SSH</td><td className={td}>パソコンでSSHの鍵ペアを作り、公開鍵をGitHubのアカウントに追加する</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：GitHub Docs「リモートリポジトリについて」、GitHub Blog「Token authentication requirements for Git operations」（2020年12月15日）。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            GitHubは、2021年8月13日からGitの操作でアカウントのパスワードを受け付けていません。古い解説記事のとおりにパスワードを入れてもpushできないのはこのためです。
          </p>
        </section>

        <section id="pull-request" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">プルリクエストの流れ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            GitHub Docsは、プルリクエストを「コードの変更をプロジェクトにマージするための提案」で、「変更をマージする前にディスカッションして確認できます」と説明しています。チーム開発での基本の流れは次のとおりです。
          </p>
          <ol className="list-decimal pl-6 text-sm text-slate-700 leading-7 space-y-1">
            <li>作業用のブランチを作る（<code>git switch -c fix-readme</code>）</li>
            <li>変更してコミットし、ブランチをpushする（<code>git push -u origin fix-readme</code>）</li>
            <li>GitHubの画面で、mainへのプルリクエストを作る</li>
            <li>レビューを受け、指摘があれば同じブランチに追加でコミットする</li>
            <li>承認されたらmainにマージする</li>
          </ol>
          <p className="text-slate-600 leading-relaxed mt-4">
            転職の選考では、GitHubのプロフィールやリポジトリを見られることがあります。見られるポイントと公開のしかたは<Link href="/knowledge/github-showcase/" className="text-blue-600 hover:underline">GitHubの見せ方</Link>、ポートフォリオ全体の作り方は<Link href="/knowledge/portfolio/" className="text-blue-600 hover:underline">ポートフォリオの作り方</Link>をご覧ください。
          </p>
        </section>

        <section id="free" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Freeプランで使える範囲</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>機能</th>
                  <th className={th}>GitHub Free（個人）</th>
                </tr>
              </thead>
              <tbody>
                {freeRows.map((r) => (
                  <tr key={r.item}>
                    <td className={td}>{r.item}</td>
                    <td className={td}>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：GitHub「Pricing」、GitHub Docs「GitHub のプラン」「GitHub Actions」「GitHub Packages」「GitHub Codespaces」の課金のページ（2026年11月26日確認）。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            GitHub Actionsの無料枠は、料金ページでは「月2,000分」、ドキュメントでは「月12米ドル分」と、2つの単位で書かれています。Linuxの2コアのランナーの単価（1分0.006米ドル）で割ると2,000分になり、両者は一致します（当サイト算出）。WindowsやmacOSのランナーは単価が異なるため、使える分数は少なくなります。
          </p>
        </section>

        <section id="octoverse" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">GitHubの開発者数（Octoverse 2026）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            GitHubの年次レポートOctoverse 2026（2026年10月28日公開）によると、GitHubを使う開発者は2億2,500万人を超えています。2026年9月時点の国別の上位は次のとおりです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={th}>国</th>
                  <th className={`${th} text-right`}>GitHubの開発者数</th>
                </tr>
              </thead>
              <tbody>
                {countryRows.map((r) => (
                  <tr key={r.c}>
                    <td className={td}>{r.c}</td>
                    <td className={`${td} text-right`}>{r.n}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：GitHub Blog「Octoverse 2026」（2026年11月6日更新）。万人単位への換算は当サイトによるものです。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            同じレポートでは、GitHubで最も使われている言語は、TypeScript・Python・JavaScriptの順でした。日本でも700万人を超える開発者がGitHubを使っており、GitとGitHubの操作は、職種を問わずエンジニアの基本のスキルになっています。
          </p>
        </section>

        <section id="faq" className="mb-12 scroll-mt-20">
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

        <section id="sources" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">出典一覧（確認日：2026年11月26日）</h2>
          <ul className="text-xs text-slate-600 leading-6 space-y-1 break-all">
            <li>GitHub Docs「GitHub とは」：https://docs.github.com/ja/get-started/start-your-journey/what-is-github</li>
            <li>GitHub Docs「Git について」：https://docs.github.com/ja/get-started/using-git/about-git</li>
            <li>GitHub Docs「GitHub のプラン」：https://docs.github.com/ja/get-started/learning-about-github/githubs-plans</li>
            <li>GitHub Docs「GitHub Actions の課金」：https://docs.github.com/en/billing/concepts/product-billing/github-actions</li>
            <li>GitHub Docs「GitHub Packages の課金」：https://docs.github.com/en/billing/concepts/product-billing/github-packages</li>
            <li>GitHub Docs「GitHub Codespaces の課金」：https://docs.github.com/en/billing/concepts/product-billing/github-codespaces</li>
            <li>GitHub Docs「リモートリポジトリについて」：https://docs.github.com/ja/get-started/git-basics/about-remote-repositories</li>
            <li>GitHub Docs「ブランチ」：https://docs.github.com/ja/pull-requests/reference/branches</li>
            <li>GitHub Docs「プル リクエスト」：https://docs.github.com/ja/pull-requests/reference/pull-requests</li>
            <li>GitHub「Pricing」：https://github.com/pricing</li>
            <li>GitHub Blog「Token authentication requirements for Git operations」：https://github.blog/security/application-security/token-authentication-requirements-for-git-operations/</li>
            <li>GitHub Blog「Octoverse 2026」：https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/</li>
            <li>Git公式サイト：https://git-scm.com/</li>
            <li>git-init（Git公式ドキュメント）：https://git-scm.com/docs/git-init</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "GitHubの見せ方", href: "/knowledge/github-showcase/" },
              { name: "OSSとは", href: "/knowledge/oss/" },
              { name: "OSSへの貢献の始め方", href: "/knowledge/oss-contribution/" },
              { name: "DevOpsとは", href: "/knowledge/devops/" },
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
