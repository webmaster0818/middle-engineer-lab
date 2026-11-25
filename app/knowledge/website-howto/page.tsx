import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "Webサイトの作り方｜公開までの5ステップと無料ホスティング4社の制限比較【2026年・公式情報】";
const DESCRIPTION =
  "Webサイトは、HTML・CSS・JavaScriptでページを作り、ホスティングに置いて公開します。MDNの解説にもとづく公開までの手順、GitHub Pages・Cloudflare Pages・Netlify・Vercelの無料枠と商用利用の可否、セキュリティとアクセシビリティの公的資料を整理します。";
const URL = "/knowledge/website-howto/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "steps", label: "Webサイトを公開するまでの5ステップ" },
  { id: "hosting", label: "無料ホスティング4社の制限比較" },
  { id: "domain", label: "独自ドメインとHTTPS" },
  { id: "rules", label: "公開前に確認したい安全性とアクセシビリティ" },
  { id: "career", label: "転職での活かし方（ポートフォリオ）" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "Webサイトを作るには何を学べばよいですか？",
    a: "MDN（Mozilla）の入門教材は、HTMLをページの構造、CSSを見た目、JavaScriptを動きを加えるプログラミング言語と説明し、この3つでページを作ってから公開する流れを示しています。HTMLの現行の標準は、WHATWGが公開しているHTML Living Standardです。",
  },
  {
    q: "無料でWebサイトを公開できますか？",
    a: "静的なサイト（HTML・CSS・JavaScriptのファイルだけで動くサイト）であれば、GitHub Pages・Cloudflare Pages・Netlify・Vercelの無料枠で公開できます。ただし、GitHub PagesとVercelのHobbyプランは、商用目的の利用が規約で認められていません。各社の制限は本文の比較表をご覧ください。",
  },
  {
    q: "独自ドメインの費用はどのくらいですか？",
    a: "MDNは、ドメイン名は通常1年あたり5〜15ドル程度と説明しています。実際の価格はドメインの種類（.com・.jpなど）と登録事業者によって異なりますので、各登録事業者の料金表でご確認ください。",
  },
  {
    q: "個人のサイトでもアクセシビリティへの配慮は必要ですか？",
    a: "障害者差別解消法の改正により、2024年4月1日から事業者による合理的配慮の提供が法的義務になりました（内閣府）。個人の趣味のサイトは事業者に当たりませんが、デジタル庁は、ウェブアクセシビリティの規格としてJIS X 8341-3:2016が参照されることが多いと説明しており、作る段階から意識しておくと仕事にも活かせます。",
  },
];

const hostingRows = [
  {
    name: "GitHub Pages",
    capacity: "公開サイトは1GBまで",
    traffic: "帯域の目安は月100GB（ソフトリミット）",
    build: "1時間に10回まで（ソフトリミット。GitHub Actionsで公開する場合は対象外）",
    commercial: "不可（ネットショップ・SaaSなど商取引が主目的のサイトに使うことは規約で禁止）",
  },
  {
    name: "Cloudflare Pages",
    capacity: "1サイト2万ファイルまで・1ファイル25MiBまで",
    traffic: "—",
    build: "月500回・同時に1回・1回20分まで",
    commercial: "—（利用規約でご確認ください）",
  },
  {
    name: "Netlify",
    capacity: "—",
    traffic: "月300クレジットの中で消費（1GBあたり20クレジット）",
    build: "本番デプロイ1回あたり15クレジット・同時に1回",
    commercial: "—（利用規約でご確認ください）",
  },
  {
    name: "Vercel（Hobby）",
    capacity: "—",
    traffic: "Fast Data Transfer 月100GBまで・CDNリクエスト月100万回まで",
    build: "デプロイは1日100回まで",
    commercial: "不可（個人的・非商用の利用に限ると規約に記載）",
  },
];

export default function WebsiteHowtoPage() {
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
          { name: "Webサイトの作り方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Webサイトの作り方｜公開までの5ステップと無料ホスティング4社の制限比較
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月25日 | 公式資料の確認日: 2026年11月25日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】Webサイトの作り方</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>Webサイトは、HTMLで構造を、CSSで見た目を、JavaScriptで動きを作り、そのファイルをホスティング（Webサーバーの貸し出し）に置いて公開します。静的なサイトであれば、無料のホスティングでも公開できます。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・GitHub Pagesは公開サイト1GBまで・帯域の目安は月100GBで、商取引が主目的のサイトには使えません</li>
              <li>・Cloudflare Pagesの無料プランは月500回のビルド・1サイト2万ファイルまでです</li>
              <li>・Vercelの無料（Hobby）プランは個人的・非商用の利用に限られます</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、MDNの入門教材「Your first website」、各ホスティングサービスの公式ドキュメントと利用規約、JPRSの統計、IPA・内閣府・デジタル庁の資料をもとに、Webサイトを作って公開するまでの流れを整理します。エンジニアが自分のポートフォリオサイトを公開するときの判断材料としてお使いください。
        </p>

        <DataNote
          surveyedAt="2026年11月25日"
          sources={["MDN「Your first website」", "GitHub Docs「GitHub Pages limits」", "Cloudflare「Pages Limits」", "Netlify「Pricing」", "Vercel「Hobby Plan」・利用規約", "JPRS「JPドメイン名の登録数」", "IPA「安全なウェブサイトの作り方」"]}
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

        <section id="steps" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Webサイトを公開するまでの5ステップ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            MDNの入門教材の構成をもとに、当サイトが公開までの流れを5つに整理しました。
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-slate-600 leading-relaxed">
            <li><strong>目的と構成を決める</strong>：誰に何を見せるサイトか、何ページ必要かを決めます。ポートフォリオなら、自己紹介・作ったもの・連絡先の3つが基本です。</li>
            <li><strong>HTMLでページの構造を作る</strong>：MDNはHTMLを「Webページとその内容を構造化するためのコード」と説明しています。現行の標準は、2019年にW3CとWHATWGが合意して以降、WHATWGのHTML Living Standardです。</li>
            <li><strong>CSSで見た目を整える</strong>：MDNはCSSを「Webコンテンツの見た目を整えるコード」と説明しています。スマートフォンでの表示も確認します。</li>
            <li><strong>JavaScriptで動きを加える</strong>：MDNはJavaScriptを「Webサイトに対話性を加えるプログラミング言語」としています。動きが不要なサイトでは使わなくても公開できます。</li>
            <li><strong>ホスティングに置いて公開する</strong>：MDNは、ホスティングを「ホスティング会社のWebサーバー上の貸しファイル領域」と説明し、静的ファイルを無料で置けるサービスもあるとしています。次の比較表をご覧ください。</li>
          </ol>
          <p className="text-xs text-slate-500 mt-3">出典：MDN「Your first website」「Publishing your website」、WHATWG「HTML Living Standard」、W3C・WHATWG覚書（2019年5月28日）。日本語訳と5ステップの整理は当サイトによるものです。</p>
        </section>

        <section id="hosting" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">無料ホスティング4社の制限比較</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            静的サイトを無料で公開できる主なサービスの無料枠を、各社の公式ドキュメントと利用規約から当サイトが一覧にしました。制限は予告なく変わることがありますので、契約前に公式ページでご確認ください。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">サービス</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">容量・ファイル</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">転送量</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">ビルド・デプロイ</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">商用利用</th>
                </tr>
              </thead>
              <tbody>
                {hostingRows.map((r) => (
                  <tr key={r.name}>
                    <td className="border border-slate-200 px-3 py-2 font-medium">{r.name}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.capacity}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.traffic}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.build}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.commercial}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：GitHub Docs「GitHub Pages limits」、Cloudflare「Pages Limits」、Netlify「Pricing」、Vercel「Hobby Plan」・「Terms of Service」第4条。「—」は本記事で公式の記載を確認していない項目です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            GitHub Pagesは、GitHub Freeでは公開リポジトリでのみ使え、1アカウントにつきユーザーサイトは1つです。Netlifyの無料プランは、デプロイ・転送量・リクエストなどを1つのクレジット枠（月300クレジット）で消費する方式で、本番デプロイを20回行うと枠を使い切る計算です（15クレジット×20回＝300クレジット、当サイト算出）。更新の頻度が高いサイトでは、この点を確認しておくと安心です。
          </p>
        </section>

        <section id="domain" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">独自ドメインとHTTPS</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            無料ホスティングでは「〇〇.github.io」「〇〇.pages.dev」のようなサブドメインで公開できます。独自ドメインを使う場合は、MDNが説明するとおり、DNSにAレコードまたはCNAMEレコードを設定して、ホスティング先に向けます。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">JPドメイン名の種類</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">登録数（2026年11月1日現在）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">汎用JPドメイン名（例：example.jp）</td><td className="border border-slate-200 px-3 py-2 text-right">1,319,806</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">属性型・地域型JPドメイン名（うちCO.JPは505,157）</td><td className="border border-slate-200 px-3 py-2 text-right">580,560</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">都道府県型JPドメイン名</td><td className="border border-slate-200 px-3 py-2 text-right">9,786</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2 font-medium">合計</td><td className="border border-slate-200 px-3 py-2 text-right font-medium">1,910,152</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：JPRS「JPドメイン名の登録数」。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            HTTPS（暗号化した通信）は、現在のWebでは標準になっています。Let&apos;s Encryptの統計ページに掲載されたGoogle Transparency Reportのデータでは、2026年11月22日の週にChromeで読み込まれたページのうちHTTPSの割合は、Windowsで95.3％、Macで97.8％、Androidで99.1％でした。上記の4社はいずれもHTTPSで公開できます。
          </p>
        </section>

        <section id="rules" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">公開前に確認したい安全性とアクセシビリティ</h2>
          <ul className="space-y-3 text-slate-600 leading-relaxed">
            <li>
              <strong>安全性</strong>：IPAの「安全なウェブサイトの作り方」（改訂第7版・2015年3月掲載、2021年3月に第4刷）は、SQLインジェクション・OSコマンド・インジェクション・クロスサイト・スクリプティングなど11種類の脆弱性と対策を取り上げています。問い合わせフォームなど入力を受け付ける機能を作る場合は、事前に確認しておくことをおすすめします。
            </li>
            <li>
              <strong>アクセシビリティ</strong>：障害者差別解消法の改正（令和3年法律第56号）により、2024年4月1日から事業者による合理的配慮の提供が努力義務から義務に変わりました（内閣府）。デジタル庁の「ウェブアクセシビリティ導入ガイドブック」は、規格としてJIS X 8341-3:2016が参照されることが多いと説明しています。画像に代替テキストを付ける、見出しを正しい順で使うといった基本は、個人のサイトでも取り入れられます。
            </li>
          </ul>
          <p className="text-xs text-slate-500 mt-3">出典：IPA「安全なウェブサイトの作り方」、内閣府「障害を理由とする差別の解消の推進」、デジタル庁「ウェブアクセシビリティ導入ガイドブック」。</p>
        </section>

        <section id="career" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職での活かし方（ポートフォリオ）</h2>
          <p className="text-slate-600 leading-relaxed">
            自分で作って公開したサイトは、そのままポートフォリオとして選考で見せることができます。どの技術で作ったか、なぜそのホスティングを選んだか、公開後にどう改善したかを説明できるようにしておくと、技術の理解度が伝わりやすくなります。まとめ方は<Link href="/knowledge/portfolio/" className="text-blue-600 hover:underline">エンジニアのポートフォリオの作り方</Link>、Web系の職種の違いは<Link href="/knowledge/frontend-backend/" className="text-blue-600 hover:underline">フロントエンドとバックエンドの違い</Link>でご説明しています。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">出典一覧（確認日：2026年11月25日）</h2>
          <ul className="text-xs text-slate-600 leading-6 space-y-1 break-all">
            <li>MDN「Your first website」：https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website</li>
            <li>MDN「Publishing your website」：https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website</li>
            <li>WHATWG「HTML Living Standard」Introduction：https://html.spec.whatwg.org/multipage/introduction.html</li>
            <li>W3C・WHATWG「Memorandum of Understanding」：https://www.w3.org/2019/04/WHATWG-W3C-MOU.html</li>
            <li>GitHub Docs「GitHub Pages limits」：https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits</li>
            <li>Cloudflare「Pages Limits」：https://developers.cloudflare.com/pages/platform/limits/</li>
            <li>Netlify「Pricing」：https://www.netlify.com/pricing/</li>
            <li>Vercel「Hobby Plan」：https://vercel.com/docs/plans/hobby</li>
            <li>Vercel「Terms of Service」：https://vercel.com/legal/terms</li>
            <li>JPRS「JPドメイン名の登録数」：https://jprs.jp/about/stats/</li>
            <li>Let&apos;s Encrypt「Stats」：https://letsencrypt.org/stats/</li>
            <li>IPA「安全なウェブサイトの作り方」：https://www.ipa.go.jp/security/vuln/websecurity/about.html</li>
            <li>内閣府「障害を理由とする差別の解消の推進」：https://www8.cao.go.jp/shougai/suishin/sabekai.html</li>
            <li>デジタル庁「ウェブアクセシビリティ導入ガイドブック」：https://www.digital.go.jp/resources/introduction-to-web-accessibility-guidebook</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "エンジニアのポートフォリオの作り方", href: "/knowledge/portfolio/" },
              { name: "フロントエンドとバックエンドの違い", href: "/knowledge/frontend-backend/" },
              { name: "TypeScriptとJavaScriptの違い", href: "/knowledge/typescript-javascript/" },
              { name: "フロントエンドエンジニア転職ガイド", href: "/skill/frontend/" },
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
