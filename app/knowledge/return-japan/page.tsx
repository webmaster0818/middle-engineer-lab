import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/return-japan/" },
  title: "海外から日本へ帰国転職【リモート面接・タイミング・アピール】",
  description:
    "海外在住エンジニアの帰国転職を解説。時差を踏まえたリモート面接の進め方、帰国タイミングの決め方、海外経験を強みに変えるアピール方法を30代・40代向けに紹介します。",
};

const toc = [
  { id: "conclusion", label: "結論：内定確定後に帰国するのが鉄則" },
  { id: "remote-interview", label: "リモート面接の進め方（時差・準備・コツ）" },
  { id: "timing", label: "帰国タイミングの決め方" },
  { id: "appeal", label: "海外経験のアピール方法（Before/After例文）" },
  { id: "note", label: "帰国転職で注意すべきこと" },
  { id: "mid-career", label: "30代・40代の帰国転職の視点" },
  { id: "faq", label: "よくある質問" },
];

const remoteSteps = [
  { num: "1", title: "時差を前提に面接枠を設計する", desc: "自分の現地時間で無理のない時間帯（早朝・深夜を避ける）を、第1〜第3希望でエージェントに伝えます。日程調整はエージェントに任せると企業との往復が減ります。" },
  { num: "2", title: "通信・環境を事前テストする", desc: "回線・カメラ・マイク・背景・照明を本番前に必ず確認。回線が不安定な場合は有線接続やモバイル回線の予備を用意します。" },
  { num: "3", title: "オンライン特有の伝え方を意識する", desc: "対面より反応が伝わりにくいため、相づち・要点の先出し・ゆっくりめの発話を意識します。画面共有で図解できる準備もしておきます。" },
  { num: "4", title: "技術課題・ライブコーディングに備える", desc: "オンラインのコーディング環境（共有エディタ等）に慣れておきます。思考を声に出して説明する練習をしておくと安心です。" },
  { num: "5", title: "渡航前に選考を完了させる", desc: "可能な限り、帰国前にオンラインで内定まで進めます。最終面接だけ帰国時に対面、という調整も相談可能です。" },
];

const faqs = [
  { q: "海外から日本のエージェントに登録・面談できますか？", a: "可能です。オンラインでの登録・面談に対応するIT特化型エージェントは多く、レバテックキャリアやGeeklyなどはオンライン面談に対応しています。時差を考慮した日程調整も依頼できます。" },
  { q: "帰国のタイミングはいつがベストですか？", a: "内定が確定してから帰国するのが基本です。多くの企業がオンライン面接に対応しているため、渡航前に選考を完了できれば、無収入の空白期間や焦りによる妥協を避けられます。家族の就学・契約更新など生活側の区切りも併せて考えましょう。" },
  { q: "海外経験は日本の転職市場で評価されますか？", a: "英語力、多国籍チームでの開発経験、グローバルスタンダードの開発手法などは、外資系日本法人やグローバル展開を進める日系企業で評価されやすい要素です。ただし「海外にいた」こと自体ではなく、何を成し遂げ、日本でどう活かせるかを具体的に示すことが重要です。" },
  { q: "リモート面接で気をつけることは？", a: "時差を踏まえた日程設計、通信・カメラ・マイクの事前テスト、オンライン特有の伝え方（要点先出し・ゆっくりめの発話）の3点が基本です。ライブコーディングがある場合は、共有エディタに慣れておき、思考を声に出す練習をしておきましょう。" },
  { q: "年収は海外と比べて下がりますか？", a: "国・企業によって異なり一概には言えません。生活コストの差を考えると、額面の比較だけでは実態を捉えられない場合があります。日本では賞与込みの年間総額で提示されることが多いため、月給ベースではなく年間総額で比較しましょう。" },
  { q: "海外での職歴は職務経歴書にどう書けばよいですか？", a: "国内の職歴と同じ形式で記載しつつ、海外特有の成果（多国籍チームでの協業、英語での技術文書作成、グローバル基準のレビュー文化など）を具体的な行動と結果で明記します。本ページのBefore/After例文を参考にしてください。" },
  { q: "帰国後のオンボーディングで気をつけることは？", a: "報連相やコンセンサス重視といった日本のビジネス文化への再適応が必要になる場合があります。海外で身につけた効率的な進め方を活かしつつ、周囲に合わせる柔軟性を持つと立ち上がりがスムーズです。" },
  { q: "帰国前に何から始めればよいですか？", a: "①帰国の3〜6か月前にエージェントへオンライン登録、②日本のIT市況・年収相場・技術トレンドの把握、③職務経歴書の日本向け最適化、④時差を考慮した面接日程の調整、の順で進めるのが現実的です。" },
];

export default function ReturnJapanPage() {
  const faqJsonLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };

  return (
    <>
      <ArticleJsonLd title="海外から日本へ帰国転職【リモート面接・タイミング・アピール】" description="海外在住エンジニアの帰国転職を解説。時差を踏まえたリモート面接の進め方、帰国タイミングの決め方、海外経験を強みに変えるアピール方法を30代・40代向けに紹介します。" url="/knowledge/return-japan/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "ホーム", href: "/" }, { name: "転職ガイド" }, { name: "帰国転職ガイド" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">海外から日本へ帰国転職【リモート面接・帰国タイミング・海外経験のアピール】</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | 海外経験を最大限活かす帰国転職戦略</p>

        {/* 直答box (P6-C2) */}
        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】海外からの帰国転職はいつ帰るのが正解？</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: 内定が確定してから帰国するのが鉄則です。多くの企業がリモート面接に対応しているため、渡航前にオンラインで内定まで進めれば、無収入の空白期間や焦りによる妥協を避けられます。</strong></p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・リモート面接は、時差を踏まえた日程設計・通信環境の事前テスト・要点先出しの伝え方が基本</li><li>・海外経験は「海外にいた」ことではなく、日本でどう活かせるかを行動と結果で語る</li><li>・年収は月給ベースではなく、賞与込みの年間総額で比較する</li></ul>
          </div>
        </section>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">家族の事情、キャリアの方向転換、日本の技術コミュニティへの貢献など、海外から日本への帰国転職を考えるエンジニアは少なくありません。本記事では、時差を踏まえたリモート面接の進め方、帰国タイミングの決め方、海外経験を強みに変えるアピール方法を、30代・40代のミドルエンジニア向けに実務的にまとめます。</p>
        </section>

        <DataNote surveyedAt="2026年6月" sources={["経済産業省「IT人材需給に関する調査」（2019年公表）", "厚生労働省 job tag"]} />

        <nav className="mb-10 border border-slate-200 rounded-lg p-5 bg-slate-50">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2 text-sm">
            {toc.map((t) => (<li key={t.id}><a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a></li>))}
          </ul>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：内定確定後に帰国するのが鉄則</h2>
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-lg p-5">
            <p className="text-slate-700 leading-relaxed mb-3">帰国転職で最も避けたいのは「先に帰国してから無収入で活動する」状態です。次の3点を押さえれば、リスクを抑えて進められます。</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>1. <strong>オンラインで内定まで進める</strong>。多くの企業がリモート面接に対応</li>
              <li>2. <strong>帰国は内定確定後</strong>。空白期間と焦りによる妥協を避ける</li>
              <li>3. <strong>海外経験は「日本でどう活かせるか」に翻訳して語る</strong></li>
            </ul>
          </div>
        </section>

        <section id="remote-interview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">リモート面接の進め方（時差・準備・コツ）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">帰国転職の選考は、ほぼオンラインで進みます。時差・通信環境・オンライン特有の伝え方を押さえれば、海外にいながら内定まで到達できます。</p>
          <div className="space-y-4">
            {remoteSteps.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.num}</span>
                <div><h3 className="font-bold text-slate-800 mb-1">{item.title}</h3><p className="text-sm text-slate-600">{item.desc}</p></div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">面接対策の基本は<Link href="/knowledge/behavioral/" className="text-petrol hover:underline">行動面接（STAR法）対策</Link>、技術面の準備は<Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接対策</Link>も参考になります。</p>
        </section>

        <section id="timing" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">帰国タイミングの決め方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">帰国のタイミングは「選考の進捗」と「生活側の区切り」の両面で決めます。下記のチェックを使うと判断しやすくなります。</p>
          <div className="border border-slate-200 rounded-lg p-5 mb-4">
            <ul className="space-y-3 text-sm text-slate-700">
              <li>☑ 内定が確定している、または最終段階まで進んでいる</li>
              <li>☑ 入社日と帰国日・住居確保のスケジュールが両立する</li>
              <li>☑ 子どもの就学・進学の区切りと大きくぶつからない</li>
              <li>☑ 現地の住居解約・契約満了のタイミングと整合する</li>
              <li>☑ 帰国後の手続き（転入届・健康保険・税務）の段取りを把握している</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed">理想は「内定確定 → 帰国日確定 → 住居・各種手続き」の順です。最終面接だけ対面を希望される場合は、帰国時期に合わせた調整をエージェントに相談できます。タイミング全般の考え方は<Link href="/knowledge/timeline/" className="text-petrol hover:underline">転職活動のスケジュール</Link>も参考にしてください。</p>
        </section>

        <section id="appeal" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">海外経験のアピール方法（Before/After例文）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">「海外にいた」こと自体は実績ではありません。何を成し遂げ、日本の組織でどう活かせるかを、行動と結果で示すのがポイントです。職務経歴書・面接で使えるBefore/Afterの例を挙げます。</p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <p className="text-xs font-bold text-red-500 mb-1">✕ Before（抽象的で伝わらない）</p>
              <p className="text-sm text-slate-600 mb-3">「海外の企業でエンジニアとして英語環境で働いていました。」</p>
              <p className="text-xs font-bold text-green-600 mb-1">✓ After（行動と結果で示す）</p>
              <p className="text-sm text-slate-700">「5か国のメンバーで構成されるチームで、英語のドキュメントとレビューを通じてマイクロサービスの設計を主導。リリースサイクルを□□に短縮しました。日本拠点と海外拠点の橋渡し役を担える点が強みです。」</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <p className="text-xs font-bold text-red-500 mb-1">✕ Before</p>
              <p className="text-sm text-slate-600 mb-3">「グローバルスタンダードの開発を経験しました。」</p>
              <p className="text-xs font-bold text-green-600 mb-1">✓ After</p>
              <p className="text-sm text-slate-700">「コードレビュー文化・CI/CD・オンコール体制など、海外チームで標準だった開発プロセスを、帰任先のチームに導入・定着できます。実際に現職では◯◯の仕組みを立ち上げ、◯◯を改善しました。」</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <p className="text-xs font-bold text-amber-600 mb-1">よくある懸念への切り返し</p>
              <p className="text-sm text-slate-700">「海外が長くて日本の事情に疎いのでは」と懸念された場合は、「海外のベストプラクティスを日本の組織文脈に合わせて持ち込めること」を、具体的な導入プランとともに示すと前向きに伝わります。</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">書類全体の作り込みは<Link href="/knowledge/resume/" className="text-petrol hover:underline">職務経歴書の書き方</Link>、自己分析は<Link href="/knowledge/self-analysis/" className="text-petrol hover:underline">自己分析の進め方</Link>も役立ちます。</p>
        </section>

        <section id="note" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">帰国転職で注意すべきこと</h2>
          <div className="space-y-3">
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-1">1. 年収は「年間総額」で比較する</h3><p className="text-sm text-petrol-deep">日本では賞与込みで提示されることが多く、月給ベースの比較では実態がずれます。年間総額・福利厚生・残業実態を含めて判断しましょう。具体的な水準はオファー内容で確認します。</p></div>
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-1">2. 日本のビジネス文化への再適応</h3><p className="text-sm text-petrol-deep">報連相・コンセンサス重視のスタイルに戸惑う場合があります。海外の効率性を活かしつつ、周囲に合わせる柔軟性を意識すると立ち上がりがスムーズです。</p></div>
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-1">3. 税・社会保険の手続きは早めに確認</h3><p className="text-sm text-petrol-deep">帰国後の確定申告・住民税・健康保険の手続きは複雑になりがちです。制度や要件は変わることがあるため、最新情報は公式情報を確認し、必要に応じて税理士など専門家に相談しましょう。</p></div>
            <div className="bg-petrol-soft rounded-lg p-5"><h3 className="font-bold text-blue-800 mb-1">4. 家族のケアも計画に入れる</h3><p className="text-sm text-petrol-deep">配偶者のキャリア、子どもの転入学など、家族の生活も含めて計画的に進めます。<Link href="/knowledge/family/" className="text-petrol-deep underline">家族持ちエンジニアの転職戦略</Link>も参考になります。</p></div>
          </div>
        </section>

        <section id="mid-career" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の帰国転職の視点</h2>
          <p className="text-slate-600 leading-relaxed mb-4">30代・40代のミドルエンジニアにとって、海外で積んだ経験は「即戦力 × グローバル対応力」という希少な組み合わせになります。市況も追い風で、経済産業省「IT人材需給に関する調査」（2019年公表の試算）では2030年に最大約79万人のIT人材不足が示されています。職種の参考値として、厚生労働省 job tagでは「システムエンジニア（受託開発）」の平均年収は578.5万円・平均年齢37.1歳（令和7年賃金構造基本統計調査ベース）とされています。</p>
          <p className="text-slate-600 leading-relaxed">狙い目になりやすいのは、外資系日本法人のシニアポジション、日系グローバル企業の海外連携役、スタートアップの技術リードなど、海外経験が直接活きる役割です。ただし具体的な年収は企業・ポジションで大きく異なるため、複数のエージェントで<Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値</Link>を把握したうえで交渉に臨みましょう。海外で働き続ける選択肢は<Link href="/knowledge/overseas/" className="text-petrol hover:underline">海外で働くエンジニアの転職</Link>も参考にしてください。</p>
        </section>

        <section id="faq" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">{faqs.map((faq, i) => (<details key={i} className="group border border-slate-200 rounded-lg overflow-hidden"><summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800"><span>Q. {faq.q}</span><span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span></summary><div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">A. {faq.a}</div></details>))}</div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">帰国転職のサポートはエージェントに</h2>
          <p className="text-blue-100 text-sm mb-4">IT特化型エージェントならオンラインで相談可能。時差を考慮した面接調整や、海外経験の伝え方の添削も依頼できます。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "海外で働くエンジニアの転職", href: "/knowledge/overseas/" },
              { name: "LinkedInを使った転職術", href: "/knowledge/linkedin/" },
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
              { name: "転職後90日間の過ごし方", href: "/knowledge/first-90days/" },
              { name: "年収交渉のコツ", href: "/knowledge/salary-negotiation/" },
              { name: "家族持ちエンジニアの転職戦略", href: "/knowledge/family/" },
            ].map((item, i) => (<Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">{item.name} →</Link>))}
          </div>
        </section>
      </article>
    </>
  );
}
