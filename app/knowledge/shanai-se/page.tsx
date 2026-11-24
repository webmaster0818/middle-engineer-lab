import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "社内SEとは｜IT人材の所属の日米比較・内製化とIT部門の人員見通しを調査で整理【2026年】";
const DESCRIPTION =
  "社内SEとは、事業会社の情報システム部門などで自社のITを担うエンジニアです。IPA「DX白書2023」のIT人材の所属（日本はIT企業以外26.4％・米国64.9％）、「DX動向」の内製化と人材不足、JUAS「企業IT動向調査2026」のIT部門の人員見通しを一次情報で整理します。";
const URL = "/knowledge/shanai-se/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "社内SEの定義と仕事内容" },
  { id: "share", label: "IT人材の所属：日本と米国の比較" },
  { id: "insource", label: "内製化の状況" },
  { id: "demand", label: "IT部門の人員見通しと人材不足" },
  { id: "difference", label: "SIer・SESとの違い" },
  { id: "career", label: "社内SEへの転職の考え方" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "社内SEとは簡単に言うと何ですか？",
    a: "IT企業以外の事業会社（メーカー・金融・小売など）に所属し、自社の情報システムの企画・導入・運用や社内のIT環境の整備を担うエンジニアです。法令や統計で定められた職種名ではなく、求人などで使われる呼び方のため、担当範囲は企業によって異なります。",
  },
  {
    q: "日本のIT人材のうち、社内SEのような事業会社所属の人はどのくらいいますか？",
    a: "IPA「DX白書2023」によると、2020年国勢調査にもとづく日本の情報処理・通信に携わる人材のうち、IT企業以外に所属する人は26.4％で、IT企業所属が73.6％でした。米国（2021年）はIT企業以外が64.9％で、日米で構成が逆になっています。",
  },
  {
    q: "社内SEの求人は増えていますか？",
    a: "求人数そのものを示す公的統計は当サイトでは確認できていません。参考として、JUAS「企業IT動向調査報告書2026」では、IT部門の人材を中長期（3〜5年）で「増加」させる見通しの企業が56.6％、「減少」が8.1％でした。",
  },
  {
    q: "社内SEとSIerの違いは何ですか？",
    a: "社内SEは自社のシステムを発注・運用する側（ユーザー企業）に所属し、SIerは顧客企業から委託を受けてシステムを構築する側に所属します。社内SEはベンダーの選定や管理、社内調整を担うことが多く、SIerは受託したプロジェクトの設計・開発・管理を担います。",
  },
  {
    q: "社内SEに転職するにはどのような経験が評価されますか？",
    a: "要件定義やベンダー管理、プロジェクト管理の経験、業務部門との調整経験などが生かしやすいとされています。どの経験が評価されるかは求人ごとに異なるため、求人票の業務内容と変更の範囲を確認し、面接で担当範囲を具体的に確認することをおすすめします。",
  },
];

export default function ShanaiSePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const cell = "border border-slate-200 px-3 py-2";

  return (
    <>
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url={URL} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "社内SEとは" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          社内SEとは｜IT人材の所属の日米比較・内製化とIT部門の人員見通し
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月25日 | 調査資料の確認日: 2026年11月25日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】社内SEとは</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>社内SEとは、IT企業以外の事業会社に所属し、自社の情報システムの企画・導入・運用や社内IT環境の整備を担うエンジニアです。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・日本のIT人材のうちIT企業以外に所属する人は26.4％で、米国の64.9％と比べて少ない構成です（IPA「DX白書2023」）</li>
              <li>・日本企業で「内製化を進めている」「必要な部分は内製化済み」は合わせて39.0％です（IPA「DX動向2025」・当サイト合算）</li>
              <li>・IT部門の人材を中長期で増やす見通しの企業は56.6％、減らす見通しは8.1％です（JUAS「企業IT動向調査報告書2026」）</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、社内SEの仕事内容を整理したうえで、IPA（情報処理推進機構）とJUAS（日本情報システム・ユーザー協会）が公開している調査から、事業会社のIT人材をめぐる数値を紹介します。社内SEだけを対象とした公的統計はないため、各数値の対象範囲をあわせて記載しています。
        </p>

        <DataNote
          surveyedAt="2026年11月25日"
          sources={["IPA「DX白書2023」", "IPA「DX動向2025」「DX動向2026」", "JUAS「企業IT動向調査報告書2026」サマリー"]}
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">社内SEの定義と仕事内容</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            社内SEは、求人などで使われる呼び方で、法令や統計で定義された職種名ではありません。一般には、事業会社の情報システム部門・DX推進部門などで、自社のITを担うエンジニアを指します。主な仕事内容は次のとおりです（当サイトの整理。担当範囲は企業によって異なります）。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={`${cell} text-left`}>領域</th>
                  <th className={`${cell} text-left`}>仕事内容の例</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={cell}>企画・IT戦略</td><td className={cell}>業務課題の整理、システム化の企画、IT予算の計画</td></tr>
                <tr><td className={cell}>システム導入・開発</td><td className={cell}>要件定義、ベンダーの選定と管理、パッケージ・SaaSの導入、内製開発</td></tr>
                <tr><td className={cell}>運用・保守</td><td className={cell}>基幹システムの運用、障害対応、システムの更新</td></tr>
                <tr><td className={cell}>社内インフラ・ヘルプデスク</td><td className={cell}>PC・ネットワーク・アカウントの管理、社員からの問い合わせ対応</td></tr>
                <tr><td className={cell}>セキュリティ</td><td className={cell}>情報セキュリティの規程づくり、対策の導入、教育</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="share" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">IT人材の所属：日本と米国の比較</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            IPA「DX白書2023」は、情報処理・通信に携わる人材がIT企業とIT企業以外のどちらに所属しているかを日米で比較しています。IT企業以外に所属する人材が、社内SEに近い立場の人材です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={`${cell} text-left`}>国・年</th>
                  <th className={`${cell} text-right`}>IT企業</th>
                  <th className={`${cell} text-right`}>IT企業以外</th>
                  <th className={`${cell} text-right`}>人数</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={cell}>日本（2015年）</td><td className={`${cell} text-right`}>72.0％</td><td className={`${cell} text-right`}>28.0％</td><td className={`${cell} text-right`}>1,045,200人</td></tr>
                <tr><td className={cell}>日本（2020年）</td><td className={`${cell} text-right`}>73.6％</td><td className={`${cell} text-right`}>26.4％</td><td className={`${cell} text-right`}>1,253,930人</td></tr>
                <tr><td className={cell}>米国（2015年）</td><td className={`${cell} text-right`}>34.6％</td><td className={`${cell} text-right`}>65.4％</td><td className={`${cell} text-right`}>4,195,110人</td></tr>
                <tr><td className={cell}>米国（2021年）</td><td className={`${cell} text-right`}>35.1％</td><td className={`${cell} text-right`}>64.9％</td><td className={`${cell} text-right`}>4,981,090人</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            出典：IPA「DX白書2023」第4部第2章（日本は2020年国勢調査抽出詳細集計、2015年は「IT人材白書2017」の引用で国勢調査抽出速報集計にもとづく値。米国は労働統計局の職業別雇用・賃金統計）。日本の「IT企業」はソフトウェア業、情報処理・提供サービス業、インターネット附随サービス業の3業種です。
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            日本では、IT人材の約4分の3がIT企業に所属しており、事業会社がシステム開発をIT企業に委託する構造がうかがえます。2015年から2020年にかけて、IT企業以外の比率はわずかに下がっています。
          </p>
        </section>

        <section id="insource" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">内製化の状況</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            IPA「DX動向2025」（2024年度調査）は、システム開発の内製化の状況を日本・米国・ドイツで比較しています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={`${cell} text-left`}>回答</th>
                  <th className={`${cell} text-right`}>日本（n=1,500）</th>
                  <th className={`${cell} text-right`}>米国（n=509）</th>
                  <th className={`${cell} text-right`}>ドイツ（n=537）</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={cell}>内製化を進めている</td><td className={`${cell} text-right`}>22.3％</td><td className={`${cell} text-right`}>46.4％</td><td className={`${cell} text-right`}>22.7％</td></tr>
                <tr><td className={cell}>必要な部分は内製化済み</td><td className={`${cell} text-right`}>16.7％</td><td className={`${cell} text-right`}>37.1％</td><td className={`${cell} text-right`}>36.5％</td></tr>
                <tr><td className={cell}>パッケージ・SaaS利用のため内製化していない</td><td className={`${cell} text-right`}>22.5％</td><td className={`${cell} text-right`}>9.2％</td><td className={`${cell} text-right`}>21.6％</td></tr>
                <tr><td className={cell}>外部開発を今後も利用</td><td className={`${cell} text-right`}>29.3％</td><td className={`${cell} text-right`}>6.5％</td><td className={`${cell} text-right`}>17.5％</td></tr>
                <tr><td className={cell}>その他</td><td className={`${cell} text-right`}>9.3％</td><td className={`${cell} text-right`}>0.8％</td><td className={`${cell} text-right`}>1.7％</td></tr>
                <tr className="bg-slate-50"><td className={cell}>内製化を進めている＋内製化済み（当サイト合算）</td><td className={`${cell} text-right`}>39.0％</td><td className={`${cell} text-right`}>83.5％</td><td className={`${cell} text-right`}>59.2％</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：IPA「DX動向2025」図表2-14。最下段は上2行を当サイトで合算した値です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            同調査は、日本企業の内製化の課題として「人材の確保や育成が難しい」が突出していると報告しています。内製化を進める企業では、開発やプロジェクト管理の経験を持つ社内SEの役割が大きくなると考えられます。
          </p>
        </section>

        <section id="demand" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">IT部門の人員見通しと人材不足</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            JUAS「企業IT動向調査報告書2026」では、IT部門の人材の増減の見通しを次のように報告しています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={`${cell} text-left`}>期間</th>
                  <th className={`${cell} text-right`}>回答数</th>
                  <th className={`${cell} text-right`}>増加</th>
                  <th className={`${cell} text-right`}>不変</th>
                  <th className={`${cell} text-right`}>減少</th>
                  <th className={`${cell} text-right`}>DI値</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={cell}>短期（1〜2年）</td><td className={`${cell} text-right`}>927</td><td className={`${cell} text-right`}>43.5％</td><td className={`${cell} text-right`}>48.9％</td><td className={`${cell} text-right`}>7.7％</td><td className={`${cell} text-right`}>35.8</td></tr>
                <tr><td className={cell}>中長期（3〜5年）</td><td className={`${cell} text-right`}>926</td><td className={`${cell} text-right`}>56.6％</td><td className={`${cell} text-right`}>35.3％</td><td className={`${cell} text-right`}>8.1％</td><td className={`${cell} text-right`}>48.5</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：JUAS「企業IT動向調査報告書2026」サマリー。DI値は「増加」の割合から「減少」の割合を引いた値です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            同サマリーでは、IT予算のDI値が2025年度計画で43.3ポイントとなり、計画値として過去10年間で最も高いと報告されています。また、IPA「DX動向2026」では、DXに取り組む日本企業のうちDX推進人材の量が「大幅に不足」が50.1％、「やや不足」が35.4％で、合わせて85.5％が不足と回答しています（2025年度調査・n=1,354。2024年度調査の合計は85.1％）。DXについては<Link href="/knowledge/dx/" className="text-blue-600 hover:underline">DXとは</Link>で詳しく解説しています。
          </p>
        </section>

        <section id="difference" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SIer・SESとの違い</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={`${cell} text-left`}>形態</th>
                  <th className={`${cell} text-left`}>所属・立場</th>
                  <th className={`${cell} text-left`}>仕事の中心</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={cell}>社内SE</td><td className={cell}>事業会社（システムの発注・利用側）</td><td className={cell}>自社のIT企画・ベンダー管理・運用・社内調整</td></tr>
                <tr><td className={cell}>SIer</td><td className={cell}>IT企業（受託側）</td><td className={cell}>顧客のシステムの構築・運用を一括して引き受ける</td></tr>
                <tr><td className={cell}>SES</td><td className={cell}>IT企業（技術者を提供する側）</td><td className={cell}>客先で技術者として業務を行う</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">
            SIerの業界構造は<Link href="/knowledge/sier/" className="text-blue-600 hover:underline">SIerとは</Link>、SESの仕組みは<Link href="/employment/ses/" className="text-blue-600 hover:underline">SESエンジニアの実態</Link>でご説明しています。
          </p>
        </section>

        <section id="career" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">社内SEへの転職の考え方</h2>
          <ul className="text-slate-600 leading-relaxed space-y-2">
            <li>・SESから社内SEを目指す方法は<Link href="/industry/ses-exit/" className="text-blue-600 hover:underline">SESから脱出する方法</Link>をご覧ください。</li>
            <li>・大企業の情報システム部門・IT子会社の違いは<Link href="/purpose/daikigyo/" className="text-blue-600 hover:underline">大企業ITエンジニアポジションガイド</Link>で解説しています。</li>
            <li>・求人票の業務内容と変更の範囲の読み方は<Link href="/knowledge/job-posting/" className="text-blue-600 hover:underline">求人票の見方</Link>でご説明しています。</li>
          </ul>
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
            <li>IPA「DX白書2023」全体版（第4部第2章）：https://www.ipa.go.jp/publish/wp-dx/gmcbt8000000botk-att/000108041.pdf</li>
            <li>IPA「DX動向2025」（図表2-14）：https://www.ipa.go.jp/digital/chousa/dx-trend/tbl5kb0000001mn2-att/dx-trend-2025.pdf</li>
            <li>IPA「DX動向2026」（図表4-1）：https://www.ipa.go.jp/digital/chousa/dx-trend/rcu1hd0000017uk8-att/dx-trend-2026.pdf</li>
            <li>JUAS「企業IT動向調査報告書2026」サマリー：https://juas.or.jp/cms/media/2026/04/JUAS_IT2026summary.pdf</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "SESから脱出する方法", href: "/industry/ses-exit/" },
              { name: "大企業ITエンジニアポジションガイド", href: "/purpose/daikigyo/" },
              { name: "SIerとは", href: "/knowledge/sier/" },
              { name: "DXとは", href: "/knowledge/dx/" },
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
