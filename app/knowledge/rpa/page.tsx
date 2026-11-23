import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "RPAとは｜仕組み・主要3ツールの公式情報と自治体の導入状況【2026年】";
const DESCRIPTION =
  "RPA（Robotic Process Automation）とは、人が行ってきた定型的なパソコン操作をソフトウェアのロボットで自動化する仕組みです。総務省の定義と自治体の導入状況（市区町村796団体・45.7％）、UiPath・Power Automate・WinActorの公式情報を一次情報で整理します。";
const URL = "/knowledge/rpa/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "RPAの定義" },
  { id: "compare", label: "RPA・マクロ・業務システムの違い" },
  { id: "tools", label: "主要3ツールの公式情報" },
  { id: "adoption", label: "導入状況（自治体・企業）" },
  { id: "career", label: "エンジニアのキャリアとRPA" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const tools = [
  {
    name: "UiPath",
    vendor: "UiPath",
    feature: "公式サイトでは、デジタルシステムやソフトウェアと対話する人間の行動を模倣するソフトウェアロボットの開発・展開・管理を容易にする技術と説明されています。",
    price: "ベーシックは月額 $25 から（個人・小規模チーム向け）。スタンダード・エンタープライズは問い合わせ",
    url: "https://www.uipath.com/ja/pricing",
  },
  {
    name: "Power Automate（デスクトップ用）",
    vendor: "Microsoft",
    feature: "デスクトップ フローは、Power Automate の RPA 機能を拡張し、デスクトップで繰り返される処理を自動化する機能と説明されています。対応OSは Windows 10／11（Home・Pro・Enterprise）と Windows Server 2016〜2025 です。",
    price: "Premium ¥2,248／ユーザー／月相当（アテンド型）、Process ¥22,488／ボット／月相当（非アテンド型）。いずれも税抜・年払い",
    url: "https://www.microsoft.com/ja-jp/power-platform/products/power-automate/pricing",
  },
  {
    name: "WinActor",
    vendor: "NTTアドバンステクノロジ",
    feature: "Windows PC で行う業務の手順を「シナリオ」として記憶し、繰り返し実行するツールです。2010年に NTT の研究所で生まれ、2014年1月に販売が開始された国産ツールで、2025年3月末時点で8,500社超に導入されたと公表されています。",
    price: "公式ページに価格の記載はなく、販売店への問い合わせ",
    url: "https://winactor.biz/product/winactor.html",
  },
];

const faqs = [
  {
    q: "RPAとは簡単に言うと何ですか？",
    a: "人がパソコンで繰り返している定型操作（表計算ソフトへの転記、業務システムへの入力、メール送信など）を、ソフトウェアのロボットに代わりに実行させる仕組みです。総務省は「これまで人間が行ってきた定型的なパソコン操作をソフトウエアのロボットにより自動化するもの」と説明しています。",
  },
  {
    q: "RPAとExcelマクロの違いは何ですか？",
    a: "マクロは主に1つのアプリケーションの中の処理を自動化するのに対し、RPAは表計算ソフト・業務システム・Webサイト・メールなど複数のアプリケーションをまたぐ操作を自動化できる点が異なります。総務省のガイドブックでは、RPAの導入期間を数週間〜数か月、短所を「基本的にパソコン上で操作できることしか自動化できない」と整理しています。",
  },
  {
    q: "RPAはどのくらい導入されていますか？",
    a: "総務省の調査では、令和7年10月31日時点で都道府県は全団体、市区町村は1,741団体のうち796団体（45.7％）がRPAを導入しています。企業については、RPA単独の導入率を示す最新の公的統計を当サイトでは確認できていません。",
  },
  {
    q: "RPAの経験は転職で評価されますか？",
    a: "評価のされ方は求人によって異なります。IPAのデジタルスキル標準では、RPAは「自動化・内製化ツール」や「サービス活用」スキルの学習項目として位置づけられており、単独の職種ではなく業務改善・システム連携のスキルの一部として扱われています。業務分析や運用ルールの整備まで担った経験は、社内SEや業務改善系の職種で説明しやすい実績になります。",
  },
  {
    q: "「野良ロボット」とは何ですか？",
    a: "作成者の異動・退職などで管理されなくなったRPAのロボットを指す通称です。総務省のガイドブックは、野良ロボットがセキュリティ上のリスクになりかねないとして、運用ルールや管理体制の整備を求めています。",
  },
];

export default function RpaPage() {
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
          { name: "RPAとは" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          RPAとは｜仕組み・主要3ツールの公式情報と自治体の導入状況
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月24日 | 公式資料の確認日: 2026年11月24日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】RPAとは</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>RPA（Robotic Process Automation）とは、人が行ってきた定型的なパソコン操作を、ソフトウェアのロボットで自動化する仕組みです。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・表計算ソフト・業務システム・メールなど、複数のアプリケーションをまたぐ定型業務を自動化できます</li>
              <li>・自治体では令和7年10月時点で、都道府県の全団体と市区町村の45.7％（796団体）が導入しています（総務省）</li>
              <li>・自治体が挙げる導入の課題で最も多いのは「取り組むための人材がいない又は不足している」（985件）です</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、RPAの定義と仕組みを総務省の資料にもとづいて説明し、主要3ツールの公式情報を当サイトで同じ項目にそろえて比較します。あわせて、自治体の導入状況と、エンジニアのキャリアにおけるRPAの位置づけを整理します。製品の価格・仕様は変更されることがあるため、ご利用前に各社の公式サイトにて最新情報をご確認ください。
        </p>

        <DataNote
          surveyedAt="2026年11月24日"
          sources={["総務省「自治体におけるRPA導入ガイドブック」（令和7年7月）", "総務省「自治体DX・情報化推進概要」令和7年度版", "IPA「デジタルスキル標準 ver.2.0」", "UiPath・Microsoft・WinActor 各公式サイト"]}
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

        <section id="definition" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">RPAの定義</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            総務省は、RPAを「これまで人間が行ってきた定型的なパソコン操作をソフトウエアのロボットにより自動化するもの」と説明しています。具体的には、画面上の操作を認識する技術とワークフローの実行を組み合わせ、表計算ソフトやメールソフト、ERP（基幹業務システム）など複数のアプリケーションを使う業務プロセスを自動化します。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            総務省のガイドブックでは、パソコン上の操作を認識・記録し、処理のルールを定義した「シナリオ」に沿って業務を自動化するツールと説明されています。システム化が見送られてきた手作業の業務を、比較的低コストかつ短期間で自動化できる点が特徴とされています。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <h3 className="font-bold text-slate-800 mb-2">自動化の段階（総務省の整理）</h3>
            <ul className="text-sm text-slate-600 leading-7">
              <li>・クラス1 RPA：定型業務の自動化</li>
              <li>・クラス2 EPA：一部非定型業務の自動化</li>
              <li>・クラス3 CA：高度な自律化</li>
            </ul>
          </div>
        </section>

        <section id="compare" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">RPA・マクロ・業務システムの違い</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            総務省のガイドブックの比較表から、RPAに関する項目を抜き出すと次のとおりです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">項目</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">RPA</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">必要なITスキル</td><td className="border border-slate-200 px-3 py-2">シナリオ作成能力</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">導入期間</td><td className="border border-slate-200 px-3 py-2">短（数週間〜数か月）</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">導入コスト</td><td className="border border-slate-200 px-3 py-2">小〜中</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">短所</td><td className="border border-slate-200 px-3 py-2">基本的にパソコン上で操作できることしか自動化できない</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：総務省「自治体におけるRPA導入ガイドブック」（令和7年7月）</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            マクロは主に1つのアプリケーション内の処理を自動化するのに対し、RPAは複数のアプリケーションをまたぐ操作を対象にします。業務システムの改修に比べて短期間で導入できる一方、画面の変更に弱く、パソコン上で完結しない業務は対象外になる点に注意が必要です。
          </p>
        </section>

        <section id="tools" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">主要3ツールの公式情報</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            国内の求人や自治体の導入事例で名前が挙がることの多い3ツールについて、各社の公式サイトの記載を当サイトで同じ項目にそろえました（2026年11月24日確認）。順位付けは行っていません。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">ツール</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">提供元</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">公式の説明</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">価格の公開状況</th>
                </tr>
              </thead>
              <tbody>
                {tools.map((t) => (
                  <tr key={t.name}>
                    <td className="border border-slate-200 px-3 py-2 font-medium">{t.name}</td>
                    <td className="border border-slate-200 px-3 py-2">{t.vendor}</td>
                    <td className="border border-slate-200 px-3 py-2">{t.feature}</td>
                    <td className="border border-slate-200 px-3 py-2">
                      {t.price}
                      <br />
                      <a href={t.url} className="text-xs text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">公式ページ</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            ※ WinActor の導入社数は製品ページ（2025年3月末時点で8,500社超）とトップページ（8,000社）で記載が異なります。本記事では時点が明記された製品ページの値を掲載しています。
          </p>
        </section>

        <section id="adoption" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">導入状況（自治体・企業）</h2>
          <h3 className="font-bold text-slate-800 mb-2">自治体の導入状況</h3>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">調査時点</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">都道府県</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">市区町村</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">出典</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">令和6年12月31日</td>
                  <td className="border border-slate-200 px-3 py-2">45団体（96％）</td>
                  <td className="border border-slate-200 px-3 py-2">指定都市20団体（100％）、その他の市区町村742団体（43％）</td>
                  <td className="border border-slate-200 px-3 py-2">RPA導入ガイドブック</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2">令和7年10月31日</td>
                  <td className="border border-slate-200 px-3 py-2">全団体（47団体）</td>
                  <td className="border border-slate-200 px-3 py-2">796団体（45.7％・母数1,741）</td>
                  <td className="border border-slate-200 px-3 py-2">自治体DX・情報化推進概要</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed mb-4">
            ガイドブックによると、本運用の導入分野は「財政・会計・財務」（468件）、「児童福祉・子育て」（346件）、「健康・医療」（326件）の順に多く、導入に向けた課題（3つ以内の複数回答）は「取り組むための人材がいない又は不足している」が985件で最多でした。自治体DX推進計画（第5.1版）では、AI・RPAの導入経費に特別交付税（措置率0.3・令和11年度まで）が講じられています。
          </p>
          <h3 className="font-bold text-slate-800 mb-2">企業の導入状況</h3>
          <p className="text-slate-600 leading-relaxed">
            企業のRPA単独の導入率を示す最新の公的統計は、当サイトでは確認できていません。参考として、令和7年版情報通信白書の各国比較では、「業務の省力化（AI/RPAによる無人化など）」に全社で取り組んでいる企業は日本36.3％、米国37.2％でした（AIとRPAをまとめた項目です）。
          </p>
        </section>

        <section id="career" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニアのキャリアとRPA</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            IPAの「デジタルスキル標準 ver.2.0」では、RPAは全社員向けのDXリテラシー標準で「RPA、AutoMLなどの自動化・内製化ツールの概要」として、DX推進スキル標準では「サービス活用」スキルの学習項目（API管理・データ連携・ローコード/ノーコードと並ぶ項目）として挙げられています。RPAエンジニアという独立した人材類型は設けられていません。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            このため、30代・40代のエンジニアが転職でRPAの経験を説明する際は、ツールの操作経験だけでなく、次のような周辺の実績とあわせて示すと伝わりやすくなります。
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-7 mb-4">
            <li>自動化の対象業務を洗い出し、効果を見積もった業務分析の経験</li>
            <li>ロボットの管理台帳・権限・変更手順など、野良ロボットを防ぐ運用ルールの整備</li>
            <li>APIやデータ連携（iPaaS・ETL）への置き換えを判断・実施した経験</li>
          </ul>
          <p className="text-slate-600 leading-relaxed">
            社内SEや業務改善の職種への転職を検討している方は、<Link href="/purpose/daikigyo/" className="text-blue-600 hover:underline">大企業のITポジション（社内SE・DX推進）</Link>や<Link href="/knowledge/reskilling/" className="text-blue-600 hover:underline">リスキリングの進め方</Link>もあわせてご覧ください。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">出典一覧（確認日：2026年11月24日）</h2>
          <ul className="text-xs text-slate-600 leading-6 space-y-1 break-all">
            <li>総務省「RPA（働き方改革：業務自動化による生産性向上）」M-ICTナウ vol.21（2018年5月）：https://www.soumu.go.jp/menu_news/s-news/02tsushin02_04000043.html</li>
            <li>総務省「自治体におけるRPA導入ガイドブック」（令和7年7月）：https://www.soumu.go.jp/main_content/000731625.pdf</li>
            <li>総務省「自治体DX・情報化推進概要」令和7年度版 資料編：https://www.soumu.go.jp/main_content/001097739.pdf</li>
            <li>総務省「自治体DX推進計画【第5.1版】」（2026年1月30日）：https://www.soumu.go.jp/main_content/001053408.pdf</li>
            <li>総務省「令和7年版 情報通信白書」図表Ⅱ-1-11-19：https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/r07/csv/f00328_01.csv</li>
            <li>IPA「デジタルスキル標準 ver.2.0」：https://www.ipa.go.jp/jinzai/skill-standard/dss/download.html</li>
            <li>UiPath「RPAとは」「プランと価格」：https://www.uipath.com/ja/rpa/robotic-process-automation</li>
            <li>Microsoft Learn「デスクトップ用 Power Automate の要件」：https://learn.microsoft.com/ja-jp/power-automate/desktop-flows/requirements</li>
            <li>WinActor 製品ページ：https://winactor.biz/product/winactor.html</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "DXとは", href: "/knowledge/dx/" },
              { name: "リスキリングの進め方", href: "/knowledge/reskilling/" },
              { name: "大企業のITポジションガイド", href: "/purpose/daikigyo/" },
              { name: "転職ナレッジ一覧", href: "/knowledge/" },
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
