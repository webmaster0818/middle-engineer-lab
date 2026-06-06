import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "トヨタ自動車 エンジニア転職ガイド | 年収・技術スタック・面接対策【2026年版】",
  description:
    "トヨタ自動車へのエンジニア転職を徹底解説。年収700〜1100万円、自動運転・コネクテッドカー・Woven Cityの技術基盤を現場目線でまとめました。",
};

const faqs = [
  {
    q: "トヨタ自動車のソフトウェアエンジニア採用は増えている？",
    a: "はい、「ソフトウェア・ファースト」を掲げ、IT/ソフトウェアエンジニアの中途採用を大幅に強化中です。Woven by Toyotaを中心にソフトウェア人材の採用が加速しています。",
  },
  {
    q: "トヨタ自動車のエンジニア年収はどのくらい？",
    a: "トヨタ本体で700〜1100万円、Woven by Toyotaでは800〜1500万円程度です。Woven by Toyotaは外資系並みの報酬体系を採用しています。",
  },
  {
    q: "Woven by Toyotaとトヨタ本体の違いは？",
    a: "Woven by Toyotaは自動運転・スマートシティのソフトウェア開発を担う子会社で、英語公用語、ジョブ型人事、外資系並みの報酬体系が特徴です。",
  },
  {
    q: "トヨタ自動車で英語力は必要？",
    a: "Woven by Toyotaでは英語必須です。トヨタ本体は部署によりますが、グローバルプロジェクトでは英語力が必要です。日本語のみのポジションもあります。",
  },
  {
    q: "トヨタ自動車の面接プロセスは？",
    a: "トヨタ本体は書類選考 → 適性検査 → 面接（2〜3回）。Woven by Toyotaはコーディングテスト → 技術面接（2〜3回）→ 最終面接で、外資系に近い選考プロセスです。",
  },
  {
    q: "トヨタ自動車への転職で有利な経験は？",
    a: "自動運転技術、組み込みシステム、クラウドインフラ、データプラットフォーム、セキュリティの経験が有利です。C++/Python/Rustのスキルが求められます。",
  },
];

export default function ToyotaCompanyPage() {
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
      <ArticleJsonLd title="トヨタ自動車 エンジニア転職ガイド" description="トヨタ自動車へのエンジニア転職を徹底解説。年収700〜1100万円、自動運転・コネクテッドカー・Woven Cityの技術基盤を現場目線でまとめました。" url="/company/toyota/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "トヨタ自動車" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">トヨタ自動車 エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2026年6月 | 自動運転・Woven Cityで進化する世界最大の自動車メーカー</p>

        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["企業名", "トヨタ自動車株式会社"],
                ["業種", "自動車・モビリティ"],
                ["従業員数", "約375,000名（連結）"],
                ["平均年収", "700〜1,100万円（エンジニア職）"],
                ["本社所在地", "愛知県豊田市（Woven: 東京都中央区）"],
                ["技術スタック", "C++ / Python / Rust / ROS / AWS / Kubernetes"],
              ].map(([label, value], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200">{label}</th>
                  <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ソフトウェア・ファースト戦略</h3>
              <p className="text-sm text-blue-700">SDV（Software Defined Vehicle）時代に向け、ソフトウェアエンジニアの採用を大幅強化中。車載OS、自動運転、コネクテッドサービスなど、ITエンジニアの活躍フィールドが急拡大しています。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">Woven by Toyotaでの先端開発</h3>
              <p className="text-sm text-blue-700">自動運転プラットフォーム「Arene」やスマートシティ「Woven City」の開発を手がけるWoven by Toyota。英語公用語・外資系報酬・モダンな開発環境で、GAFAM出身者も多数在籍しています。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">圧倒的なスケールのプロジェクト</h3>
              <p className="text-sm text-blue-700">世界販売台数1位の自動車メーカーとして、開発するソフトウェアが数千万台の車両に搭載されます。社会インフラレベルのスケールで技術的チャレンジに取り組めます。</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められるスキル・経験</h2>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>C++ / Python / Rust いずれかの実務経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>組み込みシステム・リアルタイムOS の開発経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>自動運転・ADAS関連の技術知識（あれば大きく加点）</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>クラウドインフラ（AWS / GCP）の構築・運用経験</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>英語力（Woven by Toyotaは必須、トヨタ本体は部署による）</li>
              <li className="flex items-start gap-2"><span className="text-blue-600 shrink-0">●</span>機能安全・セキュリティの知識（車載系ポジション）</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ポジション別年収レンジ</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-100">
                <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">ポジション</th>
                <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">区分</th>
                <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">年収レンジ</th>
              </tr></thead>
              <tbody>
                {[
                  ["ジュニアエンジニア", "トヨタ本体", "550〜750万円"],
                  ["ミドルエンジニア", "トヨタ本体", "750〜1,000万円"],
                  ["シニアエンジニア", "トヨタ本体", "1,000〜1,300万円"],
                  ["ソフトウェアエンジニア", "Woven", "800〜1,500万円"],
                  ["シニアSWE", "Woven", "1,200〜2,000万円"],
                ].map(([pos, level, range], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{pos}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{level}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">トヨタ自動車転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "doda(IT)", href: "/review/doda-it/", desc: "大手メーカーの求人が豊富。トヨタ本体・Woven両方の求人を保有。" },
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT特化でWoven by Toyotaなどの先進企業求人にも強い。" },
              { name: "マイナビIT AGENT", href: "/review/mynavi-it/", desc: "大手メーカーへの転職支援に強い。トヨタグループの求人も充実。" },
            ].map((agent, i) => (
              <Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3>
                <p className="text-xs text-slate-500">{agent.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-10">
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
          <h2 className="text-xl font-bold mb-3">トヨタ自動車への転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">大手メーカーへの転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/doda-it/" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連企業ガイド</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "ソニーグループ", href: "/company/sony/" },
              { name: "日立製作所", href: "/company/hitachi/" },
              { name: "パナソニック", href: "/company/panasonic/" },
              { name: "富士通", href: "/company/fujitsu/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                {item.name} の転職ガイド →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
