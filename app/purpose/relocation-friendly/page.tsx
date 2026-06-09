import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "移住・地方移住OKのエンジニア求人ガイド【2026年版】",
  description:
    "移住・二拠点を起点にIT転職を設計するガイド。段階的移住ロードマップ、居住地不問・全国一律給与の見極め、移住支援金（公的制度）の活用、30-40代の二拠点コストまで解説。",
};

const faqs = [
  {
    q: "移住OK求人とフルリモート・Uターンは何が違う？",
    a: "フルリモートは『出社をなくす』働き方、Uターン・Iターンは『地方の企業に就職して地方で働く』動きです。これに対し本記事の『移住・地方移住OK』は、住む場所＝生活設計を起点に置く考え方です。たとえば東京の企業にフルリモートで在籍したまま地方や海辺に移住する、平日は地方で月数回だけ東京に出社する二拠点生活、といった『暮らしを先に決めて働き方を合わせる』設計が中心になります。在宅勤務そのものを軸にするならフルリモート勤務ガイドを、地方企業への就職を軸にするならUターン・Iターン×IT転職を合わせてご覧ください。",
  },
  {
    q: "移住しても今の給与水準は維持できる？",
    a: "企業の給与ポリシー次第です。『全国一律給与』を掲げる企業なら、地方移住後も都市部水準の給与を維持できます。一方、居住地の物価・水準に応じて給与を調整する企業もあります。求人票や面接で『居住地不問』『全国一律給与』が明記されているか、移住後に給与改定があるかを必ず確認しましょう。",
  },
  {
    q: "移住支援金とはどんな制度？いくらもらえる？",
    a: "内閣官房・内閣府が推進する地方創生の取り組みで、東京圏（東京・埼玉・千葉・神奈川の一定地域）から地方へ移住し、要件を満たす就業・テレワーク継続・起業のいずれかを行う人に支給される制度です。支給額は世帯で最大100万円以内、単身で最大60万円以内が基本で、18歳未満の子ども1人につき最大100万円が加算されます（内閣官房・移住支援金制度。金額・要件は自治体により異なるため、移住先自治体の最新情報を必ず確認してください）。",
  },
  {
    q: "フルリモートで働き続ける場合も移住支援金の対象になる？",
    a: "対象になり得ます。移住支援金は『移住先で対象求人に就業』だけでなく、『移住前の業務を引き続きテレワークで行う（テレワーク継続）』ケースも要件に含まれる場合があります。つまり東京の会社にフルリモートで在籍したまま地方へ移住するパターンでも、テレワーク継続として対象になることがあります。ただし要件は自治体ごとに細かく定められているため、移住先自治体の窓口で必ず確認してください。",
  },
  {
    q: "30-40代が移住で特に注意すべき点は？",
    a: "（1）子の転校：学齢期の子どもがいる場合、転校のタイミング・学習環境・友人関係への影響を慎重に検討する必要があります。（2）配偶者の仕事：パートナーが移住先で働けるか、収入をどう確保するか。（3）二拠点コスト：完全移住でなく二拠点なら、家賃・交通費が二重にかかります。（4）通信・交通インフラ：リモートワークに必要な回線速度、月数回の出社に耐える交通アクセスを事前に確認しましょう。",
  },
  {
    q: "移住・地方移住OKのエンジニア求人はどうやって探す？",
    a: "求人検索では『居住地不問』『全国どこでも可』『フルリモート』といった条件で絞り込みます。当サイトで件数を確認できている関連条件としては、転勤なしのITエンジニア求人が13,561件、フレックス求人が16,825件（いずれもマイナビ転職・2026年6月閲覧時点・変動）などがあります。移住OKに直結する専用件数は媒体により集計が異なり当サイトでは断定しませんが、フルリモート可・居住地不問を軸に複数媒体で横断的に探すのが確実です。",
  },
];

export default function RelocationFriendlyPage() {
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
        title="移住・地方移住OKのエンジニア求人ガイド【2026年版】"
        description="移住・二拠点を起点にIT転職を設計するガイド。段階的移住ロードマップ、居住地不問の見極め、移住支援金の活用、30-40代の二拠点コストまで解説。"
        url="/purpose/relocation-friendly/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "目的別ガイド", href: "/purpose/" },
          { name: "移住・地方移住OK求人ガイド" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          移住・地方移住OKのエンジニア求人ガイド
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | 暮らしを起点に働き方を設計する完全ガイド</p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "マイナビ転職（求人件数・閲覧時点）",
            "内閣官房・内閣府 移住支援金制度（地方創生）",
            "デジタル田園都市国家構想 関連資料",
          ]}
        />

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：移住OK求人は“暮らしを先に決めて働き方を合わせる”という発想</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            フルリモートは「出社をなくす」、Uターン・Iターンは「地方企業に就職する」働き方ですが、本記事の<strong>移住・地方移住OK</strong>はそれらと軸が違います。ここで主役になるのは「どこで暮らしたいか」という<strong>生活設計</strong>です。自然の近くで子育てしたい、実家の近くに住みたい、二拠点で暮らしたい——その望む暮らしを先に決め、それを実現できる働き方（フルリモート・月数回出社・全国一律給与）を後から選ぶ。本記事は、段階的な移住ロードマップと求人の見極め、そして公的な移住支援金の活用までを、家族を持つ30-40代の現実に即して解説します。
          </p>
          <div className="bg-blue-50 border border-slate-200 rounded-lg p-6">
            <p className="text-sm font-medium text-slate-700 mb-2">こんな人におすすめ</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>- 自然の近くや実家の近くで子育てしたい</li>
              <li>- 都市部の給与を維持したまま地方に移住したい</li>
              <li>- いきなり完全移住ではなく二拠点から始めたい</li>
              <li>- 移住支援金など公的制度も活用したい</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">目次</h2>
          <ol className="list-decimal list-inside space-y-1 text-sm text-blue-700">
            <li>段階的移住ロードマップ</li>
            <li>移住OK求人の見極めポイント</li>
            <li>移住支援金（公的制度）の活用</li>
            <li>30-40代ミドルの現実的コスト</li>
            <li>よくある質問</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">1. 段階的移住ロードマップ</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            いきなり完全移住はハードルが高いものです。子の学校、配偶者の仕事、住まいの売買など決めることが多いため、段階を踏むのが現実的です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">段階</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">内容</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">確認すること</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "① 短期トライアル", desc: "ワーケーション・お試し移住で数週間〜数か月暮らす", note: "回線速度・生活インフラ・気候への適応" },
                  { type: "② 二拠点生活", desc: "平日は地方・月数回だけ都市部に出社、など分散して暮らす", note: "出社頻度の上限・交通費負担・二重家賃" },
                  { type: "③ 完全移住", desc: "生活基盤を完全に移し、フルリモート等で働き続ける", note: "全国一律給与か・子の転校・配偶者の就業" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.type}</td>
                    <td className="px-4 py-3 text-slate-600">{row.desc}</td>
                    <td className="px-4 py-3 text-slate-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">2. 移住OK求人の見極めポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "「居住地不問」が明記されているか", desc: "『全国どこでも可』『居住地不問』と求人票に書かれているか。書かれていない場合、実は関東圏限定というケースもあります。" },
              { num: "2", title: "全国一律給与かどうか", desc: "移住先の物価で給与が調整されるのか、全国一律なのか。移住後の給与改定の有無も確認します。" },
              { num: "3", title: "月の出社頻度の上限", desc: "完全リモートか、月1回・四半期1回の出社があるか。二拠点・遠方移住では、この頻度と交通アクセスが死活的です。" },
              { num: "4", title: "通信・交通インフラ", desc: "移住先の回線速度（在宅勤務に耐えるか）、最寄り空港・新幹線駅までのアクセス（出社に耐えるか）を事前に確認します。" },
              { num: "5", title: "リモート前提の評価・コミュニケーション文化", desc: "可視性が低くても成果で評価される仕組みか。非同期コミュニケーションが定着しているか。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">3. 移住支援金（公的制度）の活用</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            移住を後押しする公的制度として、内閣官房・内閣府が推進する<strong>移住支援金</strong>があります。これはエンジニアの移住・転職と非常に相性が良い制度です。
          </p>
          <ul className="space-y-2 text-sm text-slate-700 mb-3">
            <li>- <strong>支給額：</strong>世帯で最大100万円以内、単身で最大60万円以内。さらに18歳未満の子ども1人につき最大100万円が加算されます。</li>
            <li>- <strong>対象者：</strong>東京23区在住者、または東京圏（一定地域）から23区へ通勤していた人が、東京圏外へ移住すること。</li>
            <li>- <strong>要件：</strong>移住先で対象求人に就業／移住前の業務をテレワークで継続／起業のいずれか。</li>
          </ul>
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            特に注目すべきは「テレワーク継続」が要件に含まれる点です。<strong>東京の会社にフルリモートで在籍したまま地方へ移住する</strong>パターンでも、テレワーク継続として対象になり得ます。これはエンジニアにとって大きな後押しです。
          </p>
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            また、政府のデジタル田園都市国家構想では、地方への移住者を年間1万人規模に増やす目標（2027年度）が掲げられており、地方移住の支援環境は今後も拡充が見込まれます。
          </p>
          <p className="text-xs text-slate-500">
            ※ 支給額・対象要件・申請手続きは自治体ごとに異なり、予算上限に達すると締め切られることもあります。必ず移住先自治体の最新の公式情報をご確認ください（出典：内閣官房・内閣府 移住支援金制度）。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">4. 30-40代ミドルの現実的コスト</h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-3">
            移住は夢のある選択ですが、家族を持つミドルには現実的なコストと制約があります。正直に整理します。
          </p>
          <ul className="space-y-2 text-sm text-slate-700 mb-3">
            <li>- <strong>子の転校：</strong>学齢期の子どもがいると、転校のタイミング・学習環境・友人関係が大きな検討事項になります。受験を控える時期は特に慎重に。</li>
            <li>- <strong>配偶者のキャリア：</strong>パートナーが移住先で働けるか、世帯収入をどう維持するか。配偶者が在宅勤務に切り替えられるかも鍵です。</li>
            <li>- <strong>二拠点コスト：</strong>完全移住でなく二拠点を選ぶ場合、家賃・光熱費・交通費が二重にかかります。月数回の出社でも交通費がかさめば、移住で浮いた家賃を相殺しかねません。</li>
            <li>- <strong>インフラの確認：</strong>地方では回線速度や交通アクセスが都市部と大きく異なる場合があります。移住前のお試し滞在で必ず実地確認を。</li>
          </ul>
          <p className="text-sm text-slate-700 leading-relaxed">
            こうしたコストを踏まえても、移住支援金や全国一律給与をうまく組み合わせれば、世帯の生活満足度を上げながら収入を維持することは十分に可能です。働き方の選択肢として、
            <Link href="/purpose/remote-full/" className="text-blue-600 hover:underline">フルリモート勤務ガイド</Link>
            、
            <Link href="/purpose/uturnable/" className="text-blue-600 hover:underline">Uターン・Iターン×IT転職</Link>
            、地方移住の実務をまとめた
            <Link href="/area/iiju/" className="text-blue-600 hover:underline">移住・地方転職エリアガイド</Link>
            も合わせてご覧ください。
          </p>
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
          <h2 className="text-xl font-bold mb-3">移住OKの求人を無料で紹介</h2>
          <p className="text-blue-100 text-sm mb-4">居住地不問・全国一律給与の優良企業をIT特化型エージェントが提案します。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "フルリモート勤務ガイド", href: "/purpose/remote-full/" },
              { name: "Uターン・Iターン×IT転職", href: "/purpose/uturnable/" },
              { name: "移住・地方転職エリアガイド", href: "/area/iiju/" },
              { name: "リモートワークOKエリアの求人", href: "/area/remote/" },
              { name: "リモートワークの実態と続け方", href: "/knowledge/remote-work/" },
              { name: "転勤なし求人の見極め方", href: "/purpose/no-relocation/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
