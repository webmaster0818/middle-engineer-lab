import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "40代エンジニア転職のリアル【現実と対策を深掘り】",
  description:
    "40代エンジニア転職の現実を年収・市場データで定量的に解説。30代との違い、書類が通らない原因、年収を落とさない交渉、応募から内定までの動き方を実践的にまとめました。",
};

const TITLE = "40代エンジニア転職のリアル【現実と対策を深掘り】";
const DESC =
  "40代エンジニア転職の現実を年収・市場データで定量的に解説。30代との違い、書類が通らない原因、年収を落とさない交渉、応募から内定までの動き方を実践的にまとめました。";

const toc = [
  { id: "conclusion", label: "結論：40代転職のリアルを一言で" },
  { id: "data", label: "数字で見る40代エンジニアの現実" },
  { id: "gap-30s", label: "30代と何が変わるのか" },
  { id: "why-fail", label: "書類が通らない・落ちる本当の理由" },
  { id: "patterns", label: "40代で通用する4つの勝ちパターン" },
  { id: "resume", label: "職務経歴書 Before/After（40代版）" },
  { id: "salary", label: "年収を落とさないための立ち回り" },
  { id: "checklist", label: "動き出す前のチェックリスト" },
  { id: "mid", label: "30代・40代視点：40代「前半」と「後半」は別物" },
  { id: "faq", label: "よくある質問" },
];

const ageSalary = [
  { age: "20代", salary: "約378万円", over1000: "—" },
  { age: "30代", salary: "約499万円", over1000: "8.01%" },
  { age: "40代", salary: "約618万円", over1000: "12.67%" },
  { age: "50代", salary: "約685万円", over1000: "—" },
];

const faqs = [
  {
    q: "40代エンジニアの転職は本当に厳しいですか？",
    a: "「20代・30代より選考の母数が減る」のは事実ですが、「無理」ではありません。経済産業省が2019年に公表した試算では2030年に最大約79万人のIT人材不足が見込まれており、即戦力のミドル層への需要は構造的に存在します。厳しさの正体は求人の「数」が減ることであり、専門性とマネジメント経験で勝負できる人にとっては年収を上げる好機にもなります。",
  },
  {
    q: "40代だと年収は下がりますか？",
    a: "必ずしも下がりません。レバテックが公表する年代別平均年収（2025年）では、正社員SEの平均は40代で約618万円と30代の約499万円を上回ります。年収1,000万円以上の割合も40代で12.67%と30代の8.01%より高く、年齢が上がるほど高年収層が広がる構造です。下がるのは「技術が古く即戦力性を示せない」「大幅な職種転換を伴う」ケースに偏ります。",
  },
  {
    q: "マネジメント経験がない40代は不利ですか？",
    a: "不利になりやすいのは事実ですが、代替手段があります。セキュリティ・SRE・データベース・クラウド基盤などの専門領域で深い実績を示せれば、IC（Individual Contributor）として評価する企業が増えています。マネジメント経験が薄い場合は『3〜5人規模のリード経験』『後輩育成』『技術選定の主導』など、規模が小さくても主体性が伝わる事実を棚卸ししましょう。",
  },
  {
    q: "40代の転職活動はどのくらいの期間がかかりますか？",
    a: "一概には言えませんが、求人母数が30代より絞られるぶん、複数社のエージェント併用と在職中の活動が前提になります。退職してから始めると焦りで条件を妥協しやすいため、在職のまま並行して進めるのが基本戦略です。",
  },
  {
    q: "ブランク（離職期間）があると40代では致命的ですか？",
    a: "致命的ではありませんが、説明の準備は必須です。ブランク中に何をしていたか（学習・OSS・家庭の事情からの復帰など）を前向きに、かつ事実ベースで語れるようにしておきましょう。直近で手を動かした実績（個人開発・キャッチアップ）を1つでも示せると、技術の陳腐化への懸念を払拭しやすくなります。",
  },
  {
    q: "40代でモダンな技術への移行は間に合いますか？",
    a: "間に合います。レガシー領域（COBOL・古いJavaなど）の経験そのものは価値がありますが、それだけだと年収が頭打ちになりやすい傾向があります。クラウド（AWS/GCP）やコンテナ、CI/CDなど現場で使われる技術を直近2〜3年で実務または個人開発で触れておくと、選択肢が大きく広がります。",
  },
  {
    q: "40代エンジニアの転職に向いているエージェントは？",
    a: "ハイクラス・専門領域に強いサービスとの相性が良い傾向です。スカウト型で市場価値を測りたいならビズリーチ、IT特化で求人提案を受けたいならレバテックキャリアなどが候補になります。1社に絞らず複数併用し、自分の経歴にスカウトが来るか・どんな求人が来るかで現在地を客観把握するのが有効です。",
  },
];

export default function FortyRealityPage() {
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
      <ArticleJsonLd title={TITLE} description={DESC} url="/knowledge/40s-reality/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "40代エンジニア転職のリアル" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">{TITLE}</h1>
        <p className="text-slate-500 text-sm mb-4">最終更新: 2026年6月 | 40代エンジニア転職の現実と具体的な対策</p>

        <p className="text-slate-600 leading-relaxed mb-2">
          「40代のエンジニア転職は厳しい」という言葉だけが独り歩きしていますが、実際の年収データを見ると、40代は20代・30代より平均年収が高く、高年収層の割合も大きい年代です。本記事は、煽りでも気休めでもなく、公表データに基づいて40代エンジニア転職の「現実」と「対策」を深掘りします。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表の年代別平均年収（2025年）",
            "経済産業省「IT人材需給に関する調査」（2019年公表）",
            "厚生労働省 job tag",
          ]}
        />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <div className="border-l-4 border-petrol bg-petrol-soft rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：40代転職のリアルを一言で</h2>
            <p className="text-slate-700 leading-relaxed mb-3">
              40代エンジニアの転職は「求人の<strong>数</strong>は確実に絞られるが、<strong>1件あたりの年収水準は高く</strong>、専門性・マネジメント・直近のキャッチアップの3点が揃えば年収アップも十分狙える」のが現実です。
            </p>
            <ul className="text-sm text-slate-700 space-y-1.5">
              <li>・年代別平均年収は40代で約618万円（レバテック公表値・2025年）と、30代の約499万円を上回る</li>
              <li>・落ちる原因の多くは「年齢」そのものより「即戦力性を言語化できていない」こと</li>
              <li>・量より質。在職中・複数エージェント併用・専門性の明確化が3本柱</li>
            </ul>
          </div>
        </section>

        {/* データ */}
        <section id="data" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">数字で見る40代エンジニアの現実</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            まず、年齢と年収の関係を公表データで確認します。下表はレバテックが公表する正社員SEの年代別平均年収（2025年）です。年齢が上がるほど平均年収・高年収層の割合がともに上がっている点が読み取れます。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">年代</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">正社員SE平均年収</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">年収1,000万円以上の割合</th>
                </tr>
              </thead>
              <tbody>
                {ageSalary.map((r, i) => (
                  <tr key={r.age} className={i % 2 === 1 ? "bg-slate-50" : ""}>
                    <td className="border border-slate-200 px-4 py-3 text-slate-700 font-medium">{r.age}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{r.salary}</td>
                    <td className="border border-slate-200 px-4 py-3 text-slate-600">{r.over1000}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-6">
            出典：レバテック公表の年代別平均年収（2025年）。年収1,000万円以上の割合は30代8.01%・40代12.67%。「—」は公表値が確認できない項目。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              市場全体で見ても、経済産業省「IT人材需給に関する調査」（2019年公表の試算）では、2030年に最大約79万人のIT人材不足が見込まれています。これは「ミドル層を採らざるを得ない」構造的な追い風です。
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              一方で、職種全体の水準としては厚生労働省 job tag の「システムエンジニア（受託開発）」で平均年収約578.5万円・平均年齢37.1歳（令和7年賃金構造基本統計調査ベース）という数字もあり、40代の618万円はこの水準を上回ります。つまり「40代＝不利」ではなく「40代＝高年収レンジに入りやすいが、求められる水準も上がる」のが正確な理解です。
            </p>
          </div>
        </section>

        {/* 30代との違い */}
        <section id="gap-30s" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代と何が変わるのか</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            30代と40代では、企業が見るポイントが質的に変わります。30代は「伸びしろ＋現在のスキル」で評価されますが、40代は「即戦力性＋組織への波及効果」で評価されます。違いを整理すると次の通りです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">観点</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">30代の見られ方</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">40代の見られ方</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-700 font-medium">採用区分</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">ポテンシャル＋即戦力</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">即戦力前提</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-700 font-medium">求人の数</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">多い</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">絞られる（質で勝負）</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-700 font-medium">期待される役割</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">手を動かす中心戦力</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">設計判断・育成・牽引</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-700 font-medium">年収交渉</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">アップを狙いやすい</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">維持〜アップ。根拠提示が鍵</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-700 font-medium">懸念されやすい点</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">定着・伸びしろ</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">技術の陳腐化・柔軟性・年下上司</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm mt-4">
            年代ごとの年収相場や戦略は<Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代エンジニアの年収戦略</Link>、35歳前後の壁については<Link href="/age/35/" className="text-petrol hover:underline">35歳エンジニアの転職</Link>も合わせて確認すると立体的に把握できます。
          </p>
        </section>

        {/* 落ちる理由 */}
        <section id="why-fail" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">書類が通らない・落ちる本当の理由</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「年齢で落とされた」と感じるケースの多くは、実際には次のような言語化不足が原因です。年齢は変えられませんが、これらは準備で改善できます。
          </p>
          <div className="space-y-4">
            {[
              { t: "即戦力性が伝わらない", d: "「何ができるか」が役割名（リーダー・PL等）止まりで、再現可能なスキルとして書かれていない。40代は『入って3か月で何を任せられるか』が見えないと通りにくい。" },
              { t: "技術が古いまま更新されていない", d: "直近の経歴がレガシー中心で、クラウド・モダン開発の接点が見えない。陳腐化への懸念を払拭する直近の一手（個人開発・資格・キャッチアップ）が欠けている。" },
              { t: "年収の希望が市場とずれている", d: "現職年収を根拠なく上回る額を希望し、エージェント段階で見送られる。レンジと根拠（実績・専門性）をセットで提示できていない。" },
              { t: "応募の母数が足りない", d: "40代は求人の絶対数が減るため、30代と同じ応募数では通過数が出ない。1社のエージェントだけに頼ると機会損失になる。" },
              { t: "柔軟性・年下上司への懸念", d: "面接で過去の役職・やり方に固執する姿勢が出ると敬遠される。『学ぶ姿勢』『フラットに動ける』ことを具体例で示せていない。" },
            ].map((x, i) => (
              <div key={i} className="bg-red-50 rounded-lg p-5">
                <h3 className="font-bold text-red-800 mb-1.5">{x.t}</h3>
                <p className="text-sm text-red-700 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 勝ちパターン */}
        <section id="patterns" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">40代で通用する4つの勝ちパターン</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "スペシャリスト型（IC）", desc: "セキュリティ・SRE・DB・クラウド基盤など特定領域の深い実績で勝負。マネジメント経験が薄くても、技術力で評価する企業が増えている。年収レンジは専門性次第で高め。" },
              { num: "2", title: "テックリード／EM型", desc: "5名以上のチームマネジメントや技術選定の主導経験があれば、リード・EMポジションが射程に入る。『組織への波及効果』を数値で語れると強い。" },
              { num: "3", title: "社内SE／DX推進型", desc: "非IT企業のDX・基幹刷新リーダー。前職や担当業界のドメイン知識×技術力の掛け算が効く。腰を据えて働きたい40代と相性が良い。" },
              { num: "4", title: "フリーランス併走型", desc: "正社員にこだわらず高単価案件で年収を確保する道。安定性は下がるが、専門性が高い40代には現実的な選択肢。詳細は関連記事を参照。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.num}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed text-sm mt-4">
            正社員かフリーランスかで迷う場合は<Link href="/knowledge/freelance-vs-fulltime/" className="text-petrol hover:underline">フリーランスvs正社員</Link>、マネジメントへ寄せるなら<Link href="/knowledge/management/" className="text-petrol hover:underline">エンジニアからマネジメントへ</Link>が参考になります。
          </p>
        </section>

        {/* 職務経歴書 Before/After */}
        <section id="resume" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">職務経歴書 Before/After（40代版）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            40代の職務経歴書は「役割の羅列」から「再現可能な即戦力性」へ書き換えるのが鉄則です。冒頭のキャリアサマリーで一貫性を示し、各経験は成果を数値で添えます。以下は書き換えの例です。
          </p>
          <div className="space-y-5">
            <div className="border border-red-200 rounded-lg overflow-hidden">
              <div className="bg-red-50 px-4 py-2 text-sm font-bold text-red-800">Before（伝わらない例）</div>
              <p className="px-4 py-3 text-sm text-slate-600 leading-relaxed">
                「大手SIerにて15年間、開発からプロジェクトリーダーまで幅広く担当。マネジメント経験あり。」
              </p>
            </div>
            <div className="border border-[var(--line)] rounded-lg overflow-hidden">
              <div className="bg-petrol-soft px-4 py-2 text-sm font-bold text-blue-800">After（即戦力性が伝わる例）</div>
              <p className="px-4 py-3 text-sm text-slate-600 leading-relaxed">
                「金融系基幹システムのバックエンドを軸に15年。直近5年はAWS移行プロジェクトでテックリード（チーム6名）を担当し、オンプレからのクラウド移行で運用コストを年間約20%削減。CI/CD整備によりリリース頻度を月1回→週1回に改善。直近は個人開発でGo＋コンテナ構成のAPIを設計・公開し、モダン開発の手を動かし続けている。」
              </p>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mt-5">
            <p className="text-sm font-bold text-slate-700 mb-2">書き換えの4原則</p>
            <ul className="text-sm text-slate-600 space-y-1.5">
              <li>① 冒頭3〜5行のキャリアサマリーで一貫したテーマを宣言する</li>
              <li>② 成果は必ず数値（◯%削減・◯倍・◯名）で示す</li>
              <li>③ 直近2〜3社を厚く、古い経歴は概要のみに圧縮する</li>
              <li>④ モダン技術への接点（直近の一手）を1文入れて陳腐化懸念を消す</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm mt-4">
            職務経歴書の基本フォーマットは<Link href="/knowledge/resume/" className="text-petrol hover:underline">職務経歴書の書き方</Link>で詳しく解説しています。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収を落とさないための立ち回り</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            40代は「希望年収の根拠」を求められます。データ上、40代の平均は約618万円（レバテック公表値・2025年）と高めですが、平均に届くかは専門性次第です。次の順序で進めると年収を落としにくくなります。
          </p>
          <div className="space-y-3">
            {[
              "現職の総支給（基本給＋賞与＋各種手当）を正確に把握し、提示年収の下限を決める",
              "スカウト型サービスで『自分にどんな年収のオファーが来るか』を先に観測し、相場感を持つ",
              "希望額は『額＋根拠（実績・専門性・市場相場）』をセットでエージェントに伝える",
              "複数オファーを並行で取り、比較材料を作る（1社単独だと交渉力が出ない）",
              "目先の額面だけでなく、賞与比率・残業・リモート・裁量を含めた実質条件で判断する",
            ].map((s, i) => (
              <div key={i} className="flex gap-3 items-start border border-slate-200 rounded-lg p-4">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-petrol text-white font-bold text-xs shrink-0">{i + 1}</span>
                <p className="text-sm text-slate-600 leading-relaxed">{s}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed text-sm mt-4">
            交渉の具体的な進め方は<Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉の進め方</Link>、複数内定の比較は<Link href="/knowledge/offer-compare/" className="text-petrol hover:underline">オファー比較</Link>を参照してください。
          </p>
        </section>

        {/* チェックリスト */}
        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">動き出す前のチェックリスト</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <ul className="space-y-2.5 text-sm text-slate-700">
              {[
                "在職中に活動を始める準備ができている（退職後スタートは避ける）",
                "キャリアサマリーで一貫したテーマを1文で言える",
                "直近2〜3年でモダン技術に触れた実績が1つ以上ある",
                "代表的な成果を数値で3つ以上挙げられる",
                "希望年収と、その根拠をセットで言える",
                "エージェントを2社以上併用する段取りができている",
                "年下上司・新しいやり方を受け入れる姿勢を具体例で語れる",
              ].map((c, i) => (
                <li key={i} className="flex gap-2.5 items-start">
                  <span className="text-petrol font-bold shrink-0">✓</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 30代40代視点 */}
        <section id="mid" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代視点：40代「前半」と「後半」は別物</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「40代」とひとくくりにされがちですが、実務上は40代前半と後半で動き方が変わります。ミドル層特化の視点で補足します。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">40代前半：30代の延長戦が効く</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                40代前半はまだ「即戦力スペシャリスト」「テックリード」として30代と近い戦い方ができます。求人母数の減少を、専門性の明確化と応募数の確保でカバーするのが基本。年収アップも十分狙えるレンジです。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">40代後半：定着と役割の明確さが鍵</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                40代後半は「腰を据えて長く働けるか」「組織にどう効くか」を企業がより重視します。社内SE・DX推進・EMなど役割が明確なポジション、または高単価フリーランスとの併用が現実的。年収維持を軸に、無理に大幅アップを狙わず実質条件で選ぶのが堅実です。
              </p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm mt-4">
            自分の市場価値を客観把握したい場合は<Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の調べ方</Link>、年齢の壁の実態は<Link href="/knowledge/age-discrimination/" className="text-petrol hover:underline">エンジニア転職の年齢の壁</Link>も参考になります。
          </p>
        </section>

        {/* FAQ */}
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

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">40代の市場価値を、まず客観的に測る</h2>
          <p className="text-blue-100 text-sm mb-4">
            ハイクラス・IT特化のエージェントに登録すれば、自分にどんな年収・ポジションの提案が来るかが分かります。現在地の把握から始めましょう。
          </p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "40代エンジニアの年収戦略", href: "/knowledge/salary-40s/" },
              { name: "エンジニア転職の年齢の壁と対策", href: "/knowledge/age-discrimination/" },
              { name: "35歳エンジニアの転職は限界？", href: "/age/35/" },
              { name: "40代エンジニア向けエージェント比較", href: "/compare/40s-agents/" },
              { name: "フリーランスvs正社員", href: "/knowledge/freelance-vs-fulltime/" },
              { name: "エンジニアのセカンドキャリア", href: "/knowledge/second-career/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors"
              >
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
