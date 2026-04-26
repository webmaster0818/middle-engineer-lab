import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "ワークポートの評判・口コミ | 30代・40代エンジニア向け徹底レビュー",
  description:
    "ワークポートを30代・40代エンジニア目線で徹底レビュー。IT未経験OKの求人、転職決定人数No.1の実力を口コミ・体験談で検証します。",
};

const reviews = [
  {
    label: "30代前半 / 元製造業(品質管理) → ITエンジニア",
    stars: 5,
    date: "2024年11月",
    text: "製造業で10年間品質管理をしていましたが、DXの波を受けてITエンジニアに転職を決意。ワークポートのみんスクでPythonの基礎を学び、製造DXのポジションで採用されました。製造業の知識がプラスに評価され、年収はほぼ据え置きで異業種転職できました。",
  },
  {
    label: "30代後半 / 元金融(銀行員) → フィンテックエンジニア",
    stars: 4,
    date: "2024年10月",
    text: "銀行で8年勤務後、独学でプログラミングを学んでIT転職を目指しました。ワークポートは未経験でも丁寧に対応してくれ、金融知識を活かせるフィンテック企業を複数紹介してもらえました。対応スピードが早く、登録翌日に面談できたのが良かったです。",
  },
  {
    label: "30代前半 / Webエンジニア",
    stars: 3,
    date: "2024年9月",
    text: "経験者としてワークポートに登録しましたが、紹介される求人の年収帯がやや低めでした。未経験者や若手向けのエージェントという印象です。ハイクラス転職を目指す場合は、レバテックキャリアの方が合っていると思います。対応の早さは評価できます。",
  },
  {
    label: "30代前半 / 元営業 → インフラエンジニア",
    stars: 5,
    date: "2024年8月",
    text: "IT完全未経験でしたが、みんスクでLinuxとネットワークの基礎を学んだ上で転職活動を開始。コンシェルジュが未経験でも応募できる求人を丁寧に探してくれ、最終的にインフラ構築の企業に入社できました。面談から2週間で内定が出るスピード感は素晴らしいです。",
  },
];

const faqs = [
  {
    q: "ワークポートの登録は無料ですか？",
    a: "はい、完全無料です。みんスク（無料プログラミングスクール）の利用も含め、すべてのサービスが無料です。",
  },
  {
    q: "みんスクとは何ですか？",
    a: "ワークポートが運営する完全無料のプログラミングスクールです。PHP、Java、インフラなどのコースがあり、転職活動と並行してスキルアップできます。",
  },
  {
    q: "転職決定人数No.1は本当ですか？",
    a: "リクナビNEXTの「GOOD AGENT RANKING」で転職決定人数部門No.1を獲得した実績があります。求人数の多さと対応スピードが要因です。",
  },
  {
    q: "IT未経験でも本当に転職できますか？",
    a: "はい。30代前半までであれば未経験からのIT転職実績が多数あります。特に製造業・金融業などの業界知識を活かせるDX系ポジションは採用されやすい傾向があります。",
  },
  {
    q: "対応スピードはどのくらいですか？",
    a: "業界最速クラスで、登録から面談まで最短当日、求人紹介まで最短翌日です。急いで転職したい方にもおすすめです。",
  },
  {
    q: "地方の求人はありますか？",
    a: "全国に拠点があり、地方の求人も取り扱っています。札幌、仙台、名古屋、大阪、広島、福岡など主要都市の求人が揃っています。",
  },
];

export default function WorkportReview() {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "レビュー", href: "/#ranking" }, { name: "ワークポート" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          ワークポートの評判・口コミ【30代・40代エンジニア向け】
        </h1>
        <p className="text-slate-500 text-sm mb-8">最終更新: 2024年12月 | IT未経験OK、転職決定人数No.1の実力を徹底検証</p>

        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-10">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["運営会社", "株式会社ワークポート"],
                ["求人数", "70,000件以上"],
                ["対応エリア", "全国（主要都市に拠点あり）"],
                ["得意分野", "IT未経験者の転職、異業種からのキャリアチェンジ"],
                ["年収帯", "300万〜600万円が中心"],
                ["対象年代", "20代〜30代前半がメイン"],
                ["料金", "完全無料（みんスク含む）"],
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">ワークポートの強み</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">異業種からIT業界への転職支援に強い</h3>
              <p className="text-sm text-blue-700">製造業、金融業、営業職など、IT業界以外からのキャリアチェンジ支援実績が豊富。業界知識を活かせるDX系ポジションの紹介に定評があります。「製造業 x IT」「金融 x フィンテック」など、業界横断のキャリア設計が得意です。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">みんスク（無料プログラミングスクール）併設</h3>
              <p className="text-sm text-blue-700">完全無料のプログラミングスクール「みんスク」を併設。PHP、Java、インフラなどのコースがあり、学習しながら転職活動を進められます。スクール卒業生の転職成功率も高く、未経験からの転職を強力にサポートします。</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">業界最速クラスの対応スピード</h3>
              <p className="text-sm text-blue-700">登録から面談まで最短当日、求人紹介まで最短翌日という圧倒的なスピード。コンシェルジュ（担当者）の対応が素早く、転職を急いでいる方にも対応できます。</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">メリット・デメリット</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-3">メリット</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">+</span>IT未経験者でも転職可能</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">+</span>無料プログラミングスクール併設</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">+</span>対応スピードが業界最速クラス</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">+</span>全国に拠点があり地方でも使える</li>
              </ul>
            </div>
            <div className="border border-red-200 rounded-lg p-5">
              <h3 className="font-bold text-red-700 mb-3">デメリット</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="text-red-500 shrink-0">-</span>ハイクラス求人は少ない</li>
                <li className="flex items-start gap-2"><span className="text-red-500 shrink-0">-</span>アドバイザーの質にばらつきがある</li>
                <li className="flex items-start gap-2"><span className="text-red-500 shrink-0">-</span>経験者にはやや物足りない求人構成</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">利用者の口コミ・体験談</h2>
          <div className="space-y-4">
            {reviews.map((review, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-sm font-medium text-slate-700">{review.label}</span>
                  <span className="text-yellow-500 text-sm">{"★".repeat(review.stars)}{"☆".repeat(5 - review.stars)}</span>
                  <span className="text-xs text-slate-400">{review.date}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{review.text}</p>
              </div>
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
          <h2 className="text-xl font-bold mb-3">ワークポートに無料相談する</h2>
          <p className="text-blue-100 text-sm mb-4">IT未経験からの転職も、ワークポートなら安心。まずは無料相談から始めませんか？</p>
          <a href="#" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">無料カウンセリングを予約する</a>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">他のエージェントも比較する</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/" },
              { name: "Geekly", href: "/review/geekly/" },
              { name: "マイナビIT AGENT", href: "/review/mynavi-it/" },
              { name: "doda(IT特化)", href: "/review/doda-it/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">
                {item.name} の詳細レビュー →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
