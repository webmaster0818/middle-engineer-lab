import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "SIerとは｜統計で見る受託開発の規模・元請と下請の構成・職種別の賃金【2026年】";
const DESCRIPTION =
  "SIer（エスアイヤー）とは、顧客の委託を受けて情報システムの企画・設計・開発・運用を一括して請け負う企業です。日本標準産業分類での位置づけ、経済構造実態調査の元請・下請の売上構成、JISAの基本統計調査、賃金構造基本統計調査の職種別賃金を一次情報で整理します。";
const URL = "/knowledge/sier/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "SIerの定義" },
  { id: "scale", label: "統計で見る受託開発の規模" },
  { id: "structure", label: "元請・下請と外注の構造" },
  { id: "wage", label: "職種別の賃金（賃金構造基本統計調査）" },
  { id: "difference", label: "SES・自社開発との違い" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "SIerとは簡単に言うと何ですか？",
    a: "顧客企業や官公庁から委託を受け、情報システムの企画・要件定義・設計・開発・テスト・運用までを一括して請け負う企業です。SIはシステムインテグレーション（System Integration）の略で、日本標準産業分類では「受託開発ソフトウェア業」（細分類3911）に「システムインテグレーションサービス業」が含まれています。",
  },
  {
    q: "SIerの売上規模はどのくらいですか？",
    a: "総務省・経済産業省の2025年経済構造実態調査（2024年実績）では、情報サービス業の売上高は43兆5014億円で、そのうち「ソフトウェアの受注制作サービス（組込みソフトウェアを除く）」は元請が38.8％、下請が9.8％を占めています。SIerだけを切り出した公的統計はないため、受託開発の規模として参考にしてください。",
  },
  {
    q: "SIerは多重下請け構造だと言われますが本当ですか？",
    a: "下請けの段数を示す公的な統計は、当サイトでは確認できていません。参考となる数値として、経済構造実態調査では受注制作サービスの売上のうち下請分が情報サービス業全体の9.8％、JISAの基本統計調査では回答企業の売上高外注費率が加重平均で33.54％でした。外注の比率は企業ごとに大きく異なるため、転職先を検討する際は商流（元請か、何次請けか）を面接で確認することをおすすめします。",
  },
  {
    q: "SIerとSESの違いは何ですか？",
    a: "SIerはシステムの完成（請負）や工程単位の業務（準委任）を契約で引き受け、プロジェクトを管理する立場です。SESは主に準委任契約で技術者の労働力を提供する形態で、成果物の完成責任を負わないのが一般的です。同じ企業がSIとSESの両方を手がけていることもあります。",
  },
  {
    q: "SIerからの転職先にはどのような選択肢がありますか？",
    a: "要件定義やプロジェクト管理の経験は、社内SE（事業会社の情報システム部門）、ITコンサルタント、Web系・自社開発企業のPM・テックリードなどで生かしやすいとされています。どの経験が評価されるかは求人ごとに異なるため、担当した工程・規模・役割を具体的に整理しておくことが重要です。",
  },
];

export default function SierPage() {
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
          { name: "SIerとは" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          SIerとは｜統計で見る受託開発の規模・元請と下請の構成・職種別の賃金
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月24日 | 公的資料の確認日: 2026年11月24日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】SIerとは</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>SIer（エスアイヤー）とは、顧客の委託を受けて情報システムの企画・設計・開発・運用を一括して請け負う企業です。SIはシステムインテグレーション（System Integration）の略です。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・情報サービス業の売上高43兆5014億円のうち、受注制作サービスの元請が38.8％、下請が9.8％を占めます（2024年実績）</li>
              <li>・JISA会員の回答企業300社では、売上のうちSIサービスが46.3％、売上高外注費率は加重平均33.54％です</li>
              <li>・職種別の賃金は、システムコンサルタント・設計者が年収目安約889万円、ソフトウェア作成者が約578万円です（当サイト算出）</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、SIerの定義を日本標準産業分類にもとづいて説明し、経済構造実態調査・JISAの基本統計調査・賃金構造基本統計調査の数値を組み合わせて、受託開発の規模や構造を整理します。SIerだけを対象とした公的統計はないため、各数値の対象範囲をあわせて記載しています。
        </p>

        <DataNote
          surveyedAt="2026年11月24日"
          sources={["総務省・経済産業省「2025年経済構造実態調査」", "JISA「2025年版 情報サービス産業基本統計調査」", "厚生労働省「令和7年賃金構造基本統計調査」", "総務省「日本標準産業分類」"]}
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">SIerの定義</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            SIerは「SI（システムインテグレーション）を行う企業」を指す和製の呼び方です。統計上は、日本標準産業分類（令和6年4月施行）の細分類3911「受託開発ソフトウェア業」に当たり、同分類は「顧客の委託により、電子計算機のプログラムの作成及びその作成に関して、調査、分析、助言など並びにこれらを一括して行う事業所」と定義され、例示に「システムインテグレーションサービス業」が含まれています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            業界団体のJISA（情報サービス産業協会）は、SIサービスを「システム構築を一括して提供するサービス」とし、ハードウェアや、構築に関わる企画・コンサルティング・要求定義を含むものと説明しています。一般には、親会社の系列に属するユーザー系・メーカー系、独立系などの区分で呼ばれることもあります。
          </p>
        </section>

        <section id="scale" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">統計で見る受託開発の規模</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">項目</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">値</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">対象・出典</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">情報サービス業の売上高</td><td className="border border-slate-200 px-3 py-2">43兆5014億円</td><td className="border border-slate-200 px-3 py-2">2024年実績・経済構造実態調査</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">受注制作サービス（組込みを除く）元請の構成比</td><td className="border border-slate-200 px-3 py-2">38.8％（約16.9兆円）</td><td className="border border-slate-200 px-3 py-2">同上</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">受注制作サービス（組込みを除く）下請の構成比</td><td className="border border-slate-200 px-3 py-2">9.8％（約4.3兆円）</td><td className="border border-slate-200 px-3 py-2">同上</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">業務別売上高に占めるSIサービスの比率</td><td className="border border-slate-200 px-3 py-2">46.3％</td><td className="border border-slate-200 px-3 py-2">JISA正会員の回答300社・2025年版基本統計調査</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            ※ 括弧内の金額は、売上高に構成比を掛けて当サイトで算出した概算です。経済構造実態調査の値は情報サービス業全体、JISAの値は会員の回答企業の合計で、対象範囲が異なります。
          </p>
        </section>

        <section id="structure" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">元請・下請と外注の構造</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            SIerの業界では、元請の企業が要件定義やプロジェクト管理を担い、設計・開発・テストの一部を協力会社に外注する形が多く見られます。経済構造実態調査では、受注制作サービスの売上のうち元請分が情報サービス業全体の38.8％、下請分が9.8％でした。JISAの基本統計調査では、回答企業の売上高外注費率が加重平均で33.54％（中央値29.01％）です。
          </p>
          <p className="text-slate-600 leading-relaxed">
            下請けの段数（何次請けまであるか）を示す公的統計は、当サイトでは確認できていません。商流は企業・案件ごとに異なるため、転職先を検討する際は、元請比率、プライム案件の割合、担当工程を面接で確認することをおすすめします。SESから自社開発や社内SEへ移る方法は<Link href="/industry/ses-exit/" className="text-blue-600 hover:underline">SESから脱出する方法</Link>でご説明しています。
          </p>
        </section>

        <section id="wage" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">職種別の賃金（賃金構造基本統計調査）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            SIerに多い職種について、令和7年賃金構造基本統計調査（産業計・企業規模10人以上・男女計）の値を掲載します。年収目安は「きまって支給する現金給与額×12＋年間賞与その他特別給与額」で当サイトが算出しました。SIer以外の企業で働く人も含む職種全体の値です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">職種</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">平均年齢</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">月の労働時間（所定内＋超過）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">きまって支給する現金給与額</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">年間賞与等</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">年収目安</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">システムコンサルタント・設計者</td><td className="border border-slate-200 px-3 py-2 text-right">38.3歳</td><td className="border border-slate-200 px-3 py-2 text-right">173＋11時間</td><td className="border border-slate-200 px-3 py-2 text-right">54.21万円</td><td className="border border-slate-200 px-3 py-2 text-right">238.52万円</td><td className="border border-slate-200 px-3 py-2 text-right">約889万円</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">ソフトウェア作成者</td><td className="border border-slate-200 px-3 py-2 text-right">37.1歳</td><td className="border border-slate-200 px-3 py-2 text-right">159＋12時間</td><td className="border border-slate-200 px-3 py-2 text-right">39.08万円</td><td className="border border-slate-200 px-3 py-2 text-right">109.51万円</td><td className="border border-slate-200 px-3 py-2 text-right">約578万円</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">その他の情報処理・通信技術者</td><td className="border border-slate-200 px-3 py-2 text-right">42.2歳</td><td className="border border-slate-200 px-3 py-2 text-right">160＋12時間</td><td className="border border-slate-200 px-3 py-2 text-right">41.58万円</td><td className="border border-slate-200 px-3 py-2 text-right">110.80万円</td><td className="border border-slate-200 px-3 py-2 text-right">約610万円</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：厚生労働省「令和7年賃金構造基本統計調査」（職種）第1表（e-Stat）。年収目安は残業代を含む月額をもとにした当サイトの概算です。</p>
          <p className="text-slate-600 leading-relaxed mt-4">
            上流工程を担うシステムコンサルタント・設計者と、プログラミングを担うソフトウェア作成者では、年収目安に約311万円の差があります。SIerで年収を上げる道筋としては、要件定義・設計・プロジェクト管理といった上流工程の経験を積むことが一つの方法です。詳しくは<Link href="/knowledge/pmo/" className="text-blue-600 hover:underline">PMOとは</Link>もご覧ください。
          </p>
        </section>

        <section id="difference" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SES・自社開発との違い</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">形態</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">主な契約</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">仕事の中心</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">SIer</td><td className="border border-slate-200 px-3 py-2">請負・準委任（顧客と直接、または元請から）</td><td className="border border-slate-200 px-3 py-2">顧客のシステムの企画・構築・運用を一括して引き受ける</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">SES</td><td className="border border-slate-200 px-3 py-2">準委任</td><td className="border border-slate-200 px-3 py-2">技術者の労働力を提供し、客先で業務を行う</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">自社開発</td><td className="border border-slate-200 px-3 py-2">（顧客との受託契約は前提としない）</td><td className="border border-slate-200 px-3 py-2">自社のサービス・製品を企画・開発・運用する</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">
            SESの仕組みは<Link href="/employment/ses/" className="text-blue-600 hover:underline">SESエンジニアの実態</Link>、SIerからWeb系への転職は<Link href="/industry/sier-to-web/" className="text-blue-600 hover:underline">SIerからWeb系に転職するには</Link>で詳しく解説しています。
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
            <li>総務省「日本標準産業分類（令和5年7月改定）」大分類G：https://www.soumu.go.jp/main_content/000934060.pdf</li>
            <li>総務省・経済産業省「2025年経済構造実態調査」二次集計結果の概要：https://www.stat.go.jp/data/kkj/kekka/pdf/2025gaiyo2.pdf</li>
            <li>JISA「2025年版 情報サービス産業基本統計調査報告書」：https://www.jisa.or.jp/Portals/0/report/basic2025report.pdf</li>
            <li>厚生労働省「令和7年賃金構造基本統計調査」（職種）第1表：https://www.e-stat.go.jp/stat-search/files?stat_infid=000040421116</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "SIerからWeb系に転職するには", href: "/industry/sier-to-web/" },
              { name: "SIer転職エージェントおすすめ", href: "/compare/sier-agents/" },
              { name: "SESエンジニアの実態", href: "/employment/ses/" },
              { name: "PMOとは", href: "/knowledge/pmo/" },
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
