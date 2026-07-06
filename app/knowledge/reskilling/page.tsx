import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/reskilling/" },
  title: "リスキリングとは｜補助金で職種転換する30-40代の進め方",
  description:
    "30-40代エンジニア向けに、転職を伴うリスキリングを公的補助金とともに解説。経産省のリスキリング支援事業（最大70%）と厚労省教育訓練給付の違い・併用、優先順位、失敗パターンまで整理します。",
};

const toc = [
  { id: "conclusion", label: "1. 結論：補助金を使えば学び直しの負担は大きく下げられる" },
  { id: "what", label: "2. リスキリングとは（リカレントとの違い）" },
  { id: "meti", label: "3. 経産省リスキリング支援事業（最大70%）" },
  { id: "mhlw", label: "4. 厚労省・教育訓練給付との違いと併用" },
  { id: "priority", label: "5. 30-40代の職種転換の優先順位" },
  { id: "steps", label: "6. 学び直し→転職の進め方" },
  { id: "fail", label: "7. ありがちな失敗パターン" },
  { id: "faq", label: "8. よくある質問" },
];

const faqs = [
  {
    q: "リスキリングとリカレント教育は何が違いますか？",
    a: "リスキリングは、主に在職しながら『新しい職務・職種に必要なスキルを学び直す』ことを指します。仕事を続けながら、業務の変化や職種転換に備えて学ぶイメージです。一方リカレント教育は、いったん仕事を離れて学び直し、また就労に戻るという『社会人の学び直し』全般を広く指す言葉です。本記事は、転職・職種転換を見据えたリスキリングと、それを支える公的補助金に焦点を当てます。",
  },
  {
    q: "経産省のリスキリング支援事業はいくらもらえますか？",
    a: "本記事執筆時点の公開情報では、経済産業省「リスキリングを通じたキャリアアップ支援事業」は、在職者が転職を前提にキャリア相談・リスキリング・転職支援を一体で受けられる事業で、受講費用は最大で約70%（上限の目安として約56万円）が補助される枠組みとされています。内訳の目安は、講座修了で受講費用の2分の1（上限約40万円）、さらに転職して1年間継続した場合に追加で5分の1（上限約16万円）が支給される形です。ただし金額・条件・実施事業者は年度ごとに変わるため、必ず最新の公式情報を確認してください。",
  },
  {
    q: "教育訓練給付とは併用できますか？",
    a: "経済産業省のリスキリング支援事業と、厚生労働省の教育訓練給付制度は、所管も制度の建て付けも異なります。同一の費用に対して複数の補助を重ねて受けられるかどうかは制度の条件次第で、年度や講座により扱いが変わります。どちらが使えるか・併用可否は、対象講座の案内や各窓口で必ず確認してください。本記事の情報は一般的な整理であり、個別の適用は公式情報・専門窓口の判断が優先します。",
  },
  {
    q: "40代でも職種転換のリスキリングは間に合いますか？",
    a: "間に合うかどうかは、これまでの経験をどれだけ活かせる方向に学び直すかで変わります。40代でまったくの未経験分野にゼロから挑むのは負担が大きい一方、現在の経験に隣接する領域（例：開発経験を活かしてSRE・クラウド・データ領域へ）への転換は現実的です。経験との地続きを意識すると、学習効率も転職での評価も高まります。",
  },
  {
    q: "資格を取れば転職で評価されますか？",
    a: "資格は体系的な学習のきっかけや、最低限の知識の証明にはなりますが、それ単体で転職が決まるわけではありません。重要なのは、学んだことを実務で使える形（個人開発・OSS・記事などのアウトプット）に結びつけることです。資格取得が目的化すると『資格コレクター』になりがちで、転職市場での評価につながりにくくなります。",
  },
  {
    q: "リスキリングと日々の学習はどう違いますか？",
    a: "本記事は『公的補助金を使い、転職・職種転換を伴う学び直し』に焦点を当てています。日々の業務の中で技術力を維持・向上させる学習戦略全般は",
    aLink: { text: "継続的な学習の進め方", href: "/knowledge/continuous-learning/" },
    aAfter: "を、生成AIに特化した生き残りスキルは生成AI時代の記事を参照してください。",
  },
];

export default function ReskillingPage() {
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
        title="リスキリングとは｜補助金で職種転換する30-40代の進め方"
        description="30-40代エンジニア向けに、転職を伴うリスキリングを公的補助金とともに解説。経産省のリスキリング支援事業（最大70%）と厚労省教育訓練給付の違い・併用、優先順位、失敗パターンまで整理します。"
        url="/knowledge/reskilling/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ" },
          { name: "リスキリングの進め方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          リスキリングとは｜補助金で職種転換する30-40代の進め方
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 公的補助金を使った学び直しと職種転換のガイド
        </p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            「新しい領域に挑戦したいが、学習費用も時間も負担が大きい」——30-40代の学び直しを阻むこの壁は、<strong>公的な補助金</strong>を使えば大きく下げられます。特に転職・職種転換を前提とするなら、経済産業省や厚生労働省の制度が後押しになります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事は<strong>公的補助金を使った、転職を伴う学び直し</strong>に特化します。日々の技術力維持の学習戦略全般は<Link href="/knowledge/continuous-learning/" className="text-petrol underline">継続的な学習の進め方</Link>を、生成AIに絞った生き残りスキルは<Link href="/knowledge/generative-ai-era/" className="text-petrol underline">生成AI時代の生き残りスキル</Link>をあわせてご覧ください。
          </p>
        </section>

        <DataNote surveyedAt="2026年6月" sources={["経済産業省 リスキリングを通じたキャリアアップ支援事業", "厚生労働省 教育訓練給付制度"]} />

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
          <h2 className="text-xl font-bold text-slate-800 mb-4">1. 結論：補助金を使えば学び直しの負担は大きく下げられる</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            転職・職種転換を伴う学び直しなら、受講費用の負担を公的補助で大きく軽減できる可能性があります。代表的なのが経済産業省「リスキリングを通じたキャリアアップ支援事業」と、厚生労働省の「教育訓練給付制度」です。どちらも<strong>自己負担を下げ、学び直しのハードルを下げる</strong>ための制度です。
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="text-sm text-amber-800">
              <strong>重要な注意：</strong>補助金の金額・条件・対象講座・実施事業者は<strong>年度ごとに変動</strong>します。本記事の数字は執筆時点の整理であり、申し込み前に必ず<strong>各制度の公式情報・窓口で最新内容を再確認</strong>してください。
            </p>
          </div>
        </section>

        {/* 2. リスキリングとは */}
        <section id="what" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">2. リスキリングとは（リカレントとの違い）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">言葉の整理から始めます。混同されがちな2つの違いを押さえておくと、自分に合う制度を選びやすくなります。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">リスキリング</h3>
              <p className="text-sm text-petrol-deep">主に在職しながら、新しい職務・職種に必要なスキルを学び直すこと。仕事を続けながら、職種転換や役割の変化に備える。本記事の主題。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">リカレント教育</h3>
              <p className="text-sm text-petrol-deep">いったん就労を離れて学び直し、また就労に戻る『社会人の学び直し』全般を広く指す概念。大学院進学なども含む広い言葉。</p>
            </div>
          </div>
        </section>

        {/* 3. 経産省 */}
        <section id="meti" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">3. 経産省リスキリング支援事業（最大70%）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            経済産業省「リスキリングを通じたキャリアアップ支援事業」は、<strong>在職者が転職を前提に、キャリア相談・リスキリング（講座受講）・転職支援を一体で受けられる</strong>枠組みです。執筆時点の公開情報では、受講費用が段階的に補助される設計になっています。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="border border-slate-200 px-3 py-2 text-left">タイミング</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">補助の目安</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">上限の目安</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">講座修了時</td>
                  <td className="border border-slate-200 px-3 py-2">受講費用の2分の1</td>
                  <td className="border border-slate-200 px-3 py-2">約40万円</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">転職して1年継続後</td>
                  <td className="border border-slate-200 px-3 py-2">追加で5分の1</td>
                  <td className="border border-slate-200 px-3 py-2">約16万円</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-3 py-2 font-medium text-slate-700">合計（最大）</td>
                  <td className="border border-slate-200 px-3 py-2">受講費用の最大約70%</td>
                  <td className="border border-slate-200 px-3 py-2">約56万円</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="text-sm text-amber-800">
              <strong>必ず再確認：</strong>上記は執筆時点の公開情報に基づく目安です。補助率・上限額・対象者要件（在職者であること等）・対象講座・実施事業者は<strong>年度により変わります</strong>。申し込み前に経済産業省および実施事業者の公式案内で最新条件を確認してください。「転職して1年継続」など、追加支給には条件が付く点にも注意が必要です。
            </p>
          </div>
        </section>

        {/* 4. 厚労省 */}
        <section id="mhlw" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">4. 厚労省・教育訓練給付との違いと併用</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            もう一つの代表的な制度が、厚生労働省の<strong>教育訓練給付制度</strong>です。雇用保険の被保険者期間などの要件を満たす人が、指定講座を受講・修了すると費用の一部が支給されます。給付率は講座区分（一般／特定一般／専門実践）によって異なります。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="border border-slate-200 px-3 py-2 text-left">観点</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">経産省 リスキリング支援事業</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">厚労省 教育訓練給付</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                {[
                  ["所管", "経済産業省", "厚生労働省"],
                  ["位置づけ", "転職前提・相談〜転職まで一体支援", "指定講座の受講費用の給付"],
                  ["主な対象", "在職者（転職を前提）", "雇用保険の被保険者など"],
                  ["申請の窓口", "実施事業者経由", "ハローワーク"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 ? "bg-slate-50" : ""}>
                    {row.map((cell, j) => (
                      <td key={j} className={`border border-slate-200 px-3 py-2 ${j === 0 ? "font-medium text-slate-700" : ""}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="text-sm text-amber-800"><strong>併用について：</strong>所管も建て付けも異なる制度のため、同一費用に複数の補助を重ねられるかは制度・年度・講座の条件次第です。どちらを使えるか・併用可否は、対象講座の案内や各窓口（ハローワーク・実施事業者）で必ず確認してください。本記事は一般的な整理であり、個別の適用判断は公式情報が優先します。</p>
          </div>
        </section>

        {/* 5. 優先順位 */}
        <section id="priority" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">5. 30-40代の職種転換の優先順位</h2>
          <p className="text-slate-600 leading-relaxed mb-4">補助金が使えても、何を学ぶかを誤ると効果は薄れます。30-40代は<strong>これまでの経験と地続きの領域</strong>を優先するのが鉄則です。</p>
          <div className="space-y-4">
            {[
              { num: "1", title: "現在の経験に隣接する領域を優先", desc: "開発経験を活かしてSRE・クラウド・データ領域へ、など。ゼロからより、地続きの転換が学習効率も評価も高い。" },
              { num: "2", title: "需要が継続しそうな領域を選ぶ", desc: "一時的な流行より、中長期で必要とされる土台技術。経済産業省はIT人材の不足を継続的な課題として示している（2019年3月公表の試算で2030年に最大約79万人不足とされた）。" },
              { num: "3", title: "アウトプットに結びつく学びにする", desc: "資格取得だけで終わらせず、個人開発・記事・OSSなど検証可能な成果に結びつける。" },
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
          <p className="text-xs text-slate-500 mt-3">※ 79万人不足は経済産業省「IT人材需給に関する調査」（2019年3月公表）の試算値であり、前提により幅があります。最新の動向は公式資料をご確認ください。</p>
        </section>

        {/* 6. 進め方 */}
        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">6. 学び直し→転職の進め方</h2>
          <div className="space-y-4">
            {[
              { num: "STEP 1", title: "目的と転換先を定める", desc: "何の職種・役割に移りたいかを具体化する。自己分析は別記事も参考に。" },
              { num: "STEP 2", title: "使える補助金を確認する", desc: "経産省リスキリング支援事業・教育訓練給付の最新条件を公式・窓口で確認。対象講座か、要件を満たすかをチェック。" },
              { num: "STEP 3", title: "講座を選び、受講する", desc: "経験と地続きで、アウトプットに結びつく講座を選ぶ。修了要件・出席要件を守る。" },
              { num: "STEP 4", title: "学びを成果物に変える", desc: "学んだことを個人開発・記事・OSSなど検証可能な形で残し、職務経歴書に反映する。" },
              { num: "STEP 5", title: "転職活動・条件確認", desc: "追加支給に『転職して1年継続』などの条件が付く制度では、転職後の継続も見据える。市場価値の確認も忘れずに。" },
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
          <div className="bg-petrol-soft rounded-lg p-5 mt-5">
            <p className="text-sm text-petrol-deep">関連: <Link href="/knowledge/self-analysis/" className="text-petrol-deep underline">自己分析の進め方</Link>、<Link href="/knowledge/market-value/" className="text-petrol-deep underline">市場価値の調べ方</Link>、<Link href="/knowledge/career-plan/" className="text-petrol-deep underline">キャリアプランの立て方</Link>。</p>
          </div>
        </section>

        {/* 7. 失敗 */}
        <section id="fail" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">7. ありがちな失敗パターン</h2>
          <div className="space-y-4">
            {[
              { t: "資格コレクターになる", d: "資格取得自体が目的化し、実務で使える形にならない。資格は手段であって、アウトプットに結びつけてこそ評価される。" },
              { t: "目的なき学習に手を広げる", d: "流行りを追って手を広げすぎ、どれも中途半端に。転換先を定めてから学ぶ範囲を絞る。" },
              { t: "補助金の条件を確認せず申し込む", d: "年度で変わる要件・対象講座・追加支給条件を見落とし、想定より補助が出ない。事前に公式で確認する。" },
              { t: "経験を捨ててゼロから始める", d: "これまでの経験を活かせない無関係分野に飛び込み、学習も転職も難航。地続きの領域を優先する。" },
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
          <h2 className="text-xl font-bold mb-3">学び直しと転職をプロに相談しよう</h2>
          <p className="text-blue-100 text-sm mb-4">IT特化型エージェントなら、職種転換の現実的なルートや、学んだスキルの活かし方を具体的にアドバイスしてくれます。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "継続的な学習の進め方", href: "/knowledge/continuous-learning/" },
              { name: "生成AI時代の生き残りスキル", href: "/knowledge/generative-ai-era/" },
              { name: "キャリアプランの立て方", href: "/knowledge/career-plan/" },
              { name: "自己分析の進め方", href: "/knowledge/self-analysis/" },
              { name: "市場価値の調べ方", href: "/knowledge/market-value/" },
              { name: "40代エンジニア転職のリアル", href: "/knowledge/40s-reality/" },
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
