import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "エンジニア転職のスケジュール【在職中・週次の進め方】",
  description:
    "在職中に進めるエンジニア転職のスケジュールを週単位で解説。準備・応募・面接・内定・退職までの標準的な進め方と、30代・40代の週次の動き方モデルを紹介します。",
};

const toc = [
  { id: "conclusion", label: "結論：在職中に3ヶ月、週次で淡々と進める" },
  { id: "overview", label: "全体像：標準スケジュールの考え方" },
  { id: "plan", label: "3ヶ月の週次計画表（在職中モデル）" },
  { id: "weekly", label: "在職中の「週次の動き方」モデル" },
  { id: "season", label: "求人が増える時期と入社月の逆算" },
  { id: "tips", label: "活動を効率化する実務テクニック" },
  { id: "middle", label: "30代・40代視点：時間がない人のスケジュール術" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const month1 = [
  { week: "1週目", tasks: "キャリアの棚卸し。これまでの経験・スキル・成果を一覧化し、転職の軸（年収・技術・ポジション・働き方）を3つ程度に絞る。求人を眺める前に「何を満たせば成功か」を言語化しておく。" },
  { week: "2週目", tasks: "職務経歴書・履歴書の初稿作成。GitHub・ポートフォリオの整理。IT特化型エージェント2〜3社に登録し、初回面談（オンライン可）を予約する。" },
  { week: "3週目", tasks: "エージェント初回面談を実施。市場価値の確認、希望条件のすり合わせ、書類の添削依頼。並行して気になる企業の採用ページ・技術ブログを読み込む。" },
  { week: "4週目", tasks: "応募企業の選定。エージェント紹介＋自己応募の候補を10〜20社リストアップ。優先度（第1志望群・練習群）を分けておく。" },
];

const month2 = [
  { week: "5週目", tasks: "書類応募を開始。一度に多すぎると日程調整が破綻するため、まず5〜8社ずつ波を作って応募する。書類の通過可否でレジュメを微修正。" },
  { week: "6週目", tasks: "一次面接（カジュアル面談・技術面接）が始まる。技術面接・コーディング試験の対策を並行。面接後はその日のうちに質問内容を記録。" },
  { week: "7週目", tasks: "一次面接を複数社で実施。エージェントと振り返り、刺さらなかった回答を改善する。第2志望群の追加応募もこの週に。" },
  { week: "8週目", tasks: "二次・最終面接に進む企業が出てくる。志望度の高い企業の選考スピードを合わせられるよう、エージェントに日程調整を相談する。" },
];

const month3 = [
  { week: "9週目", tasks: "最終面接を実施。内定・オファー面談が出始める。提示年収・等級・役割を書面で確認し、条件交渉はこの段階で行う。" },
  { week: "10週目", tasks: "オファー比較と内定承諾。複数内定がある場合はスコアリングで比較し1社に決定。入社日は退職スケジュールから逆算して合意する。" },
  { week: "11週目", tasks: "現職の直属上司に退職意思を伝える。引き継ぎ計画のドラフトを作成し、退職日・最終出社日の目安を共有する。" },
  { week: "12週目", tasks: "引き継ぎ開始、退職届の提出、有給消化の調整。入社書類の準備、開発環境やアカウントの個人/会社切り分けを進める。" },
];

const weekly = [
  { slot: "平日 朝（出社前 15分）", action: "エージェントからの新着求人・メッセージを確認。気になる求人は「興味あり」だけ即返信し、精査は夜に回す。" },
  { slot: "平日 昼休み（10分）", action: "面接日程の返信・リスケ対応。スプレッドシートの選考ステータスを最新化する。" },
  { slot: "平日 夜（30〜60分）", action: "週2〜3回。書類のブラッシュアップ、企業研究、面接の振り返りメモ作成。オンライン面接は19時以降の枠を活用。" },
  { slot: "週末（2〜3時間）", action: "翌週の応募候補の選定、技術面接・コーディング対策、職務経歴書の更新をまとめて行う。平日に細切れでやらない作業はここに寄せる。" },
];

const tips = [
  { title: "1. 面接は同じ週・近い日程にまとめる", body: "まとめて受けると比較検討がしやすく、面接スキルも短期間で上がります。第1志望は練習を数社こなした後半に置くと通過率が上がります。" },
  { title: "2. スプレッドシートで一元管理する", body: "応募企業・選考ステータス・面接日程・提示年収・エージェント担当者を1枚で管理。複数エージェント併用時の重複応募事故も防げます。" },
  { title: "3. 面接後は当日中に振り返る", body: "聞かれた質問・自分の回答・改善点をその日のうちにメモ。次の面接とエージェントへのフィードバックに直結します。" },
  { title: "4. 内定のタイミングを揃える", body: "志望度の高い企業ほど選考が長引きがち。エージェントに「他社と時期を合わせたい」と伝え、選考スピードを調整してもらいましょう。" },
  { title: "5. 在職中はリモート面接を最優先で調整", body: "平日夜・オンライン面接を軸にすると有給を温存できます。対面が必須の最終面接だけ半休を充てる、といった配分が現実的です。" },
];

const faqs = [
  {
    q: "在職中に転職活動を進めると、どのくらいの期間がかかりますか？",
    a: "準備開始から内定承諾まで、おおむね2〜3ヶ月を一つの目安とする進め方が一般的です。在職中はまとまった時間を取りにくいため、週次でタスクを分割し、準備（1ヶ月目）→応募・面接（2ヶ月目）→内定・退職（3ヶ月目）の3フェーズで進めると破綻しにくくなります。退職通知から退職日までの期間も別途必要なため、入社希望日から逆算して計画しましょう。",
  },
  {
    q: "在職中と退職後、どちらで活動するのが良いですか？",
    a: "一般論として在職中の活動が無難とされます。収入が途切れず精神的に余裕を持てること、現年収を基準に条件交渉しやすいこと、ブランクが発生しないことが理由です。退職後は時間を確保できる反面、焦りや経済的プレッシャーから条件面で妥協しやすくなる傾向があります。育児・介護・体調など個別事情がある場合は、無理に在職中にこだわらず自分の状況に合わせて判断してください。",
  },
  {
    q: "面接は何回くらいありますか？",
    a: "企業によりますが、書類選考→一次面接→最終面接の2〜3回が典型的な流れです。IT企業ではカジュアル面談が前段に入る、技術面接やコーディング試験が追加される、現場メンバーとの面談が挟まる、といったバリエーションがあります。回数が読めない場合は、エージェントや募集要項で各社の選考フローを事前に確認しておくとスケジュールを立てやすくなります。",
  },
  {
    q: "内定はどのくらい保留できますか？",
    a: "一般的には1週間前後、長くても2週間程度が目安とされます。複数社を並行している場合は、その旨を正直に伝えたうえで回答期限の調整を相談しましょう。エージェント経由なら保留交渉を代行してもらえることもあります。ただし企業側にも採用計画があるため、過度な引き延ばしは印象を損なうおそれがあります。",
  },
  {
    q: "求人が増える時期はありますか？",
    a: "新年度・下期の体制づくりに合わせ、年明け（1〜3月）と秋口（9〜11月）に求人が動きやすいと言われます。一方でIT分野は通年で採用を行う企業が多く、欠員補充は時期を問わず発生します。『良い時期を待つ』より『準備が整い次第始める』ほうが機会損失が少ない、と考えておくとよいでしょう。",
  },
  {
    q: "何社くらい応募すればよいですか？",
    a: "明確な正解はありませんが、第1志望群だけに絞らず、練習を兼ねた企業も含めて複数社を並行するのが現実的です。書類や面接は受けるほど精度が上がるため、序盤は通過率にこだわりすぎず母数を確保し、終盤に本命を集中させる進め方が効率的です。応募数の感覚はエージェントに相談すると、自分の市場価値に応じた目安を教えてもらえます。",
  },
  {
    q: "仕事が忙しくて活動の時間が取れません。どうすればよいですか？",
    a: "1日15〜30分でも進む仕組みを作るのが鍵です。求人チェックや日程返信はスマホで朝・昼に、企業研究や書類更新は週末にまとめる、と作業を時間帯で固定します。エージェントに窓口を一本化すると、求人探しと日程調整の手間を大幅に減らせます。繁忙期はあえて応募の波を止め、面接が重ならないようコントロールするのも有効です。",
  },
  {
    q: "退職交渉まで含めると全体でどのくらい見ておくべきですか？",
    a: "内定承諾後、退職通知から実際の退職日までに、就業規則上の通知期間と引き継ぎ・有給消化の時間が必要です。一般に1〜2ヶ月程度を見込む人が多いですが、就業規則や担当業務の状況で変わります。入社希望日が決まっている場合は、そこから退職に必要な期間を逆算して、内定承諾のタイミングを設計しましょう。具体的な退職手続きは退職の進め方ガイドも参考にしてください。",
  },
];

export default function TimelinePage() {
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
        title="エンジニア転職のスケジュール【在職中・週次の進め方】"
        description="在職中に進めるエンジニア転職のスケジュールを週単位で解説。準備・応募・面接・内定・退職までの標準的な進め方と、30代・40代の週次の動き方モデルを紹介します。"
        url="/knowledge/timeline/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "転職スケジュール" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エンジニア転職のスケジュール【在職中・週次の進め方】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 在職中に進める標準スケジュールと週次の動き方モデル
        </p>

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed mb-4">
            転職活動は「思い立ったら即応募」ではなく、準備→応募→面接→内定→退職の各フェーズを計画的に進めることで、在職中でも無理なく完走できます。本記事では、在職中のエンジニアが週単位でこなす標準スケジュールと、忙しい30代・40代向けの「週次の動き方」モデルを解説します。
          </p>
        </section>

        <DataNote surveyedAt="2026年6月" sources={["パーソルキャリア『doda 決定年収レポート』（2025年5月公表）"]} />

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-sm text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：在職中に約3ヶ月、週次で淡々と</h2>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>・<strong>準備1ヶ月・応募と面接1ヶ月・内定と退職1ヶ月</strong>の3フェーズに分けると、在職中でも破綻しにくい。</li>
              <li>・活動の大半は「<strong>朝昼はスマホで返信、夜と週末にまとめ作業</strong>」の週次ルーティンに落とせる。</li>
              <li>・入社希望日から逆算し、退職に必要な期間（通知＋引き継ぎ＋有給消化）を先に確保しておくのがコツ。</li>
            </ul>
          </div>
        </section>

        {/* 全体像 */}
        <section id="overview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">全体像：標準スケジュールの考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            転職活動を「点（応募）」ではなく「線（プロセス）」で捉えると、いつ何をすべきかが明確になります。標準的には次の3フェーズです。各フェーズは前後しても構いませんが、準備を飛ばすと書類が通らず、退職フェーズを軽視すると入社日が守れません。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-800 mb-2">1ヶ月目：準備</h3>
              <p className="text-sm text-slate-600">棚卸し・書類作成・エージェント登録・応募先選定。ここの質が後半の通過率を左右します。</p>
            </div>
            <div className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-800 mb-2">2ヶ月目：応募・面接</h3>
              <p className="text-sm text-slate-600">波を作って応募し、面接を回す。振り返りを高速で回して回答を磨きます。</p>
            </div>
            <div className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-800 mb-2">3ヶ月目：内定・退職</h3>
              <p className="text-sm text-slate-600">オファー比較・条件確認・退職交渉・引き継ぎ。入社日から逆算して動きます。</p>
            </div>
          </div>
          <div className="mt-5 bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-600">
            <p>
              参考：パーソルキャリアの『doda 決定年収レポート』（2025年5月公表）では、IT・通信領域の平均決定年収が469万円（2023年度）→486万円（2024年度）へ上昇したと報告されています。在職中に腰を据えて条件交渉できると、こうした市場の動きを取りこぼしにくくなります。
            </p>
          </div>
        </section>

        {/* 3ヶ月計画表 */}
        <section id="plan" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">3ヶ月の週次計画表（在職中モデル）</h2>

          <div className="mb-6">
            <h3 className="font-bold text-lg text-petrol-deep mb-3 border-l-4 border-petrol pl-3">1ヶ月目: 準備フェーズ</h3>
            <div className="space-y-3">
              {month1.map((item, i) => (
                <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-4">
                  <span className="font-bold text-petrol text-sm min-w-[60px]">{item.week}</span>
                  <p className="text-sm text-slate-600">{item.tasks}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-bold text-lg text-petrol-deep mb-3 border-l-4 border-petrol pl-3">2ヶ月目: 応募・面接フェーズ</h3>
            <div className="space-y-3">
              {month2.map((item, i) => (
                <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-4">
                  <span className="font-bold text-petrol text-sm min-w-[60px]">{item.week}</span>
                  <p className="text-sm text-slate-600">{item.tasks}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-bold text-lg text-petrol-deep mb-3 border-l-4 border-petrol pl-3">3ヶ月目: 内定・退職フェーズ</h3>
            <div className="space-y-3">
              {month3.map((item, i) => (
                <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-4">
                  <span className="font-bold text-petrol text-sm min-w-[60px]">{item.week}</span>
                  <p className="text-sm text-slate-600">{item.tasks}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-xs text-slate-500">
            ※ 週数はあくまで標準モデルです。選考スピードや繁忙期によって前後します。退職に必要な期間は就業規則や担当業務の状況で変わるため、
            <Link href="/knowledge/resignation/" className="text-petrol hover:underline">退職の進め方ガイド</Link>
            も合わせて確認してください。
          </p>
        </section>

        {/* 週次の動き方 */}
        <section id="weekly" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">在職中の「週次の動き方」モデル</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            在職中の活動が崩れる最大の原因は「まとまった時間が取れないこと」です。そこで、作業を時間帯ごとに固定してしまうのが有効です。以下は1週間のテンプレートです。自分の勤務リズムに合わせて調整してください。
          </p>
          <div className="space-y-3">
            {weekly.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="font-bold text-petrol text-sm min-w-[160px] shrink-0">{item.slot}</span>
                <p className="text-sm text-slate-600">{item.action}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-petrol-soft rounded-lg p-5">
            <h3 className="font-bold text-blue-800 mb-2">週次チェックリスト（毎週末に確認）</h3>
            <ul className="space-y-2 text-sm text-petrol-deep">
              <li>✓ 今週応募した社数・通過した社数を記録したか</li>
              <li>✓ 来週の面接日程はカレンダーに入っているか（本業の予定と衝突していないか）</li>
              <li>✓ 面接の振り返りメモを残したか</li>
              <li>✓ 書類で刺さらなかった点を1つ改善したか</li>
              <li>✓ エージェントへの返信に未対応がないか</li>
            </ul>
          </div>
        </section>

        {/* 季節 */}
        <section id="season" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人が増える時期と入社月の逆算</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            求人は年明け（1〜3月）と秋口（9〜11月）に動きやすいと言われますが、IT分野は通年採用・欠員補充が多いため「時期待ち」のメリットは限定的です。むしろ重要なのは、入社したい月から逆算して活動開始日を決めることです。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">希望入社月</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">活動開始の目安</th>
                  <th className="border border-slate-200 px-4 py-3 text-left font-bold text-slate-700">ポイント</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">4月入社</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">前年12月〜1月ごろ</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">年明けに求人が増える時期と重なり選択肢が多い</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">7月入社</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">4月ごろ</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">新年度の体制が固まり欠員が見えてくる</td>
                </tr>
                <tr>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">10月入社</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">7月ごろ</td>
                  <td className="border border-slate-200 px-4 py-3 text-slate-600">下期に向けた増員・体制づくりの求人が出やすい</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 退職に要する期間を1〜2ヶ月見込み、内定承諾→退職交渉→入社のバッファを確保したうえでの逆算例です。</p>
        </section>

        {/* コツ */}
        <section id="tips" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">活動を効率化する実務テクニック</h2>
          <div className="space-y-4">
            {tips.map((item, i) => (
              <div key={i} className="bg-petrol-soft rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-2">{item.title}</h3>
                <p className="text-sm text-petrol-deep">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代視点：時間がない人のスケジュール術</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            30代・40代は、プレイングマネージャーや家庭・育児・介護との両立で、20代より自由に使える時間が限られます。だからこそ「量で押す」より「設計で勝つ」スケジューリングが効きます。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">窓口を絞って探索コストを下げる</h3>
              <p className="text-sm text-slate-600">求人を自力で広く探すと時間が溶けます。IT特化型エージェント2〜3社に窓口を絞り、求人探しと日程調整を任せると、本業との両立がしやすくなります。エージェントの使い分けは<Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">複数エージェント併用ガイド</Link>を参照してください。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">面接を週1〜2に絞り、繁忙期は止める</h3>
              <p className="text-sm text-slate-600">本業の山場と面接の山場が重なると、どちらも中途半端になります。プロジェクトの締めやリリース週はあえて応募を止め、落ち着いた週に面接を寄せると、有給の消費も抑えられます。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">職務経歴書は「常時メンテ」状態にしておく</h3>
              <p className="text-sm text-slate-600">直前にゼロから書くと負荷が一気に高まります。日頃から成果を箇条書きでストックし、応募時に整える運用にすると、活動開始のハードルが下がります。書き方は<Link href="/knowledge/resume/" className="text-petrol hover:underline">職務経歴書の書き方</Link>を参考に。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">退職・引き継ぎの時間を先取りで予約する</h3>
              <p className="text-sm text-slate-600">30代・40代は担当領域が広く、引き継ぎに時間がかかりがちです。内定が出てから慌てないよう、退職通知から最終出社までの期間をあらかじめスケジュールに織り込んでおきましょう。</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10 scroll-mt-20">
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
          <h2 className="text-xl font-bold mb-3">在職中の活動はスケジュール相談から</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型エージェントに登録すれば、求人探しと日程調整を任せて本業と両立できます。相談は無料です。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "退職の進め方ガイド", href: "/knowledge/resignation/" },
              { name: "年収交渉テクニック", href: "/knowledge/salary-negotiation/" },
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
              { name: "複数エージェント併用ガイド", href: "/knowledge/multiple-agents/" },
              { name: "複数内定の比較方法", href: "/knowledge/offer-compare/" },
              { name: "転職後90日間の過ごし方", href: "/knowledge/first-90days/" },
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
