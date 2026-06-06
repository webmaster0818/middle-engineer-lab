import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "エンジニアのセカンドキャリア｜選択肢7つを徹底比較",
  description:
    "エンジニアのセカンドキャリアの選択肢を整理。PM/EM・ITコンサル・講師・CRE・テクニカルライター・社内SE・独立を比較表で。活かせるスキル・準備・収入の考え方と移行ステップを30代・40代向けに解説。",
};

const toc = [
  { id: "conclusion", label: "結論" },
  { id: "what", label: "エンジニアのセカンドキャリアとは" },
  { id: "options", label: "7つの選択肢を一覧比較" },
  { id: "detail", label: "各ルートの詳細（スキル・準備・収入）" },
  { id: "skill-map", label: "活かせるスキルの棚卸し表" },
  { id: "steps", label: "セカンドキャリアへの移行5ステップ" },
  { id: "income", label: "収入の考え方（公的・公表データ）" },
  { id: "middle", label: "40代・50代の現実的な考え方" },
  { id: "checklist", label: "向いている選択肢チェックリスト" },
  { id: "faq", label: "よくある質問" },
];

const options = [
  {
    name: "PM／EM（マネジメント）",
    base: "技術＋人・プロダクト統括",
    skill: "設計・開発経験、調整力、育成・評価",
    prep: "現職でのリード経験、1on1・採用の実務",
    income: "上振れ余地が大きい。求人レンジは管理職水準",
    age: "30代後半〜40代の王道",
  },
  {
    name: "ITコンサルタント",
    base: "技術知見をビジネス課題解決へ",
    skill: "要件定義、業務理解、資料化・提案力",
    prep: "上流工程の経験、論理的な文章・提案訓練",
    income: "ファーム・等級により高め。実力主義",
    age: "30代〜40代前半が動きやすい",
  },
  {
    name: "講師／教育（IT研修・スクール）",
    base: "知識・経験を人に伝える",
    skill: "技術の言語化、ドキュメント作成、傾聴",
    prep: "登壇・勉強会経験、教材づくりの実績",
    income: "正社員講師・業務委託で幅。副業から始めやすい",
    age: "年齢の壁が比較的低い",
  },
  {
    name: "CRE／サポートエンジニア",
    base: "顧客と技術の橋渡し",
    skill: "障害対応、ログ調査、顧客折衝、文章力",
    prep: "顧客対応・問い合わせ一次対応の経験整理",
    income: "開発職と近い水準。企業差が大きい",
    age: "30代〜40代・50代も需要あり",
  },
  {
    name: "テクニカルライター",
    base: "技術文書・ドキュメント整備",
    skill: "技術理解、構造化された文章、図解",
    prep: "OSS・ブログ・社内ドキュメントの実績",
    income: "正社員・業務委託で幅。副業と相性◎",
    age: "年齢より文章力・正確さが評価軸",
  },
  {
    name: "社内SE（情報システム）",
    base: "事業会社のIT全般を担う",
    skill: "幅広い技術、社内調整、ベンダー管理",
    prep: "インフラ・運用・業務知識の棚卸し",
    income: "安定志向。残業少なめの求人も多い",
    age: "40代・50代の受け皿になりやすい",
  },
  {
    name: "独立・フリーランス／起業",
    base: "自分の裁量で稼ぐ",
    skill: "専門スキル、営業・契約・経理の自走",
    prep: "実績・人脈づくり、当面の生活防衛資金",
    income: "上限なし／下限もなし。変動が大きい",
    age: "実力と人脈があれば年齢の壁は低い",
  },
];

const skillMap = [
  { have: "設計・アーキテクチャ経験", to: "PM/EM・ITコンサル・社内SE・テクニカルライター" },
  { have: "障害対応・運用・監視", to: "CRE/サポート・社内SE・SRE系" },
  { have: "顧客折衝・要件ヒアリング", to: "ITコンサル・CRE・PM" },
  { have: "ドキュメント・技術ブログ執筆", to: "テクニカルライター・講師・教育" },
  { have: "後輩育成・コードレビュー", to: "EM・講師・テックリード" },
  { have: "特定ドメイン知識（金融・医療等）", to: "ITコンサル・PdM・社内SE" },
  { have: "個人開発・OSS・副業実績", to: "フリーランス・起業・テクニカルライター" },
];

const steps = [
  {
    num: "1",
    title: "現在地の棚卸し（1〜2週間）",
    desc: "これまでの担当領域・チーム規模・成果を書き出す。「何ができるか」より「どの場面で価値を出したか」を言語化すると、向く選択肢が見えてくる。",
  },
  {
    num: "2",
    title: "選択肢の仮決め（2〜4週間）",
    desc: "本記事の比較表で2〜3つに絞る。年収だけでなく「日々やる仕事の中身」「労働時間」「数年後の発展性」の3軸で見比べる。",
  },
  {
    num: "3",
    title: "小さく試す（1〜3ヶ月）",
    desc: "EM志望なら現職でリード役を引き受ける、講師志望なら勉強会で登壇、ライター志望ならブログ・ドキュメント整備。本業のまま検証できる範囲で動く。",
  },
  {
    num: "4",
    title: "実績の翻訳と書類化（2〜4週間）",
    desc: "試した経験を職務経歴書に「規模・担当範囲・もたらした変化」の3点で書く。職種転換では、前職経験を新職種の言葉に翻訳することが通過率を左右する。",
  },
  {
    num: "5",
    title: "応募・面談・意思決定（1〜2ヶ月）",
    desc: "IT特化エージェントに方向性を相談しつつ、複数社を比較。内定が出たら年収だけでなく、3で確かめた「仕事の中身」と一致するかで決める。",
  },
];

const faqs = [
  {
    q: "エンジニアのセカンドキャリアにはどんな選択肢がありますか？",
    a: "大きく分けて、PM/EMなどのマネジメント、ITコンサルタント、IT講師・教育、CRE/サポートエンジニア、テクニカルライター、社内SE（情報システム）、独立・フリーランス/起業の7つが代表的です。いずれも開発経験をベースに、「人・組織を動かす」「ビジネス課題を解く」「知識を伝える」「顧客と技術をつなぐ」「文章で価値を出す」「事業会社で支える」「自分の裁量で稼ぐ」と価値の出し方が異なります。年収だけでなく、日々の仕事の中身と数年後の発展性で選ぶのが失敗しにくい考え方です。",
  },
  {
    q: "コードを書かないキャリアに進むと技術力は落ちますか？",
    a: "コーディング時間が減れば、最新フレームワークの手の速さは落ちる可能性があります。ただしPM/EM・ITコンサル・社内SE・テクニカルライターはいずれも技術的な土台があるほど質が上がる職種で、設計判断やレビュー、技術選定の場面で経験が効きます。技術を主軸に続けたい場合は、テックリードやSRE/CREのように手を動かし続けられる道を選ぶ方法もあります。",
  },
  {
    q: "セカンドキャリアに進むと年収は下がりますか？",
    a: "職種と等級次第です。PM/EMやITコンサルは管理職・専門職水準で上振れ余地があり、社内SEは安定志向で残業が少ない代わりに横ばい〜やや控えめのケースもあります。一般的な傾向として、転職者全体ではdoda（パーソルキャリア）の2024年度決定年収レポート（2025年5月公表）で約6割が年収アップとされ、IT・通信の平均決定年収は469万円（2023年度）から486万円（2024年度）へ上昇しています。個別の結果は企業・等級で大きく変わるため、求人票の提示レンジで確認してください。",
  },
  {
    q: "40代・50代からでもセカンドキャリアに移れますか？",
    a: "移れます。レバテック公表の年代別平均年収（2025年）では正社員SEの平均年収は40代約618万円・50代約685万円と、経験を積むほど高くなる傾向があります。年齢が上がるほど「これまで何を担ってきたか」が評価軸になるため、特定ドメイン知識や顧客折衝・チーム運営の実績が活きる社内SE・ITコンサル・CRE・講師は受け皿になりやすい選択肢です。一方で未経験の新職種にゼロから挑むより、現職の延長線上で価値を翻訳する戦略が現実的です。",
  },
  {
    q: "未経験の職種に移るために資格は必要ですか？",
    a: "必須ではありません。多くの職種で実務経験と実績（リード経験・登壇・ドキュメント・個人開発など）が資格より重視されます。ただしITコンサルや社内SEでは業務理解やプロジェクト管理の知識が問われる場面があり、学習の方向性を示す材料として資格が補助的に役立つことはあります。まずは小さく試して実績を作る方が、転職市場では評価されやすい傾向です。",
  },
  {
    q: "セカンドキャリアの相談はIT特化エージェントにできますか？",
    a: "できます。経験者向けのIT特化エージェントは、開発経験を前提にPM/EMやコンサル、社内SEなど職種転換を含めた求人を扱っています。方向性が固まっていない段階でも、市場でどの選択肢が通りやすいか、求人レンジはどの程度かといった客観情報を得る目的で使えます。複数社に登録して提案の傾向を比べると、自分の市場価値を立体的に把握できます。",
  },
  {
    q: "副業から始められるセカンドキャリアはありますか？",
    a: "テクニカルライター・IT講師/教育・個人開発（フリーランス準備）は、本業を続けながら副業や勉強会登壇から小さく試しやすい領域です。いきなり転職や独立に踏み切るより、まず副業で適性と需要を確かめてから本格移行する方が、収入が一時的に下がるリスクを抑えられます。会社の副業規定の確認は必ず行ってください。",
  },
  {
    q: "独立・フリーランスと社内SE、安定を求めるならどちらですか？",
    a: "安定を最優先するなら一般に社内SE（情報システム）です。事業会社の正社員として雇用が安定し、残業が比較的少ない求人も多く、40代・50代の受け皿にもなりやすい職種です。独立・フリーランスは収入の上限がない一方で下限もなく、案件獲得・契約・経理を自走する必要があります。生活防衛資金や人脈・実績が十分かを基準に、段階的に判断するのが現実的です。",
  },
];

const detail = [
  {
    id: "pm-em",
    title: "1. PM／EM（マネジメント）",
    body: "エンジニアリングマネージャー（EM）は人と組織、プロダクトマネージャー（PM/PdM）はプロダクトの成功が責任の軸です。開発経験があるほどメンバーの工数感や技術的難所を理解でき、現場の信頼を得やすいのが強みです。移行は現職でのリード経験づくり→部分的なマネジメント→EM/PM候補ポジションが王道で、いきなり未経験マネージャーを狙うより通りやすくなります。",
    skill: "設計・開発の実務経験、チームのリード経験、調整・交渉力、優先順位付けの判断軸。",
    prep: "現職で1on1やレビュー、採用面接の同席を引き受け、「チームの成果に責任を持った」実績を作る。",
    income: "管理職・専門職水準の求人が多く、上振れ余地が大きい。役割の広さと裁量で金額が変わる。",
    link: { href: "/knowledge/management/", label: "EM・PMへのマネジメント転身ガイド" },
  },
  {
    id: "consultant",
    title: "2. ITコンサルタント",
    body: "技術知見をビジネス課題の解決に転換する職種です。要件定義・業務理解・提案資料の作成といった上流スキルが中心になり、論理的な文章力とコミュニケーションが評価されます。実力主義のファームが多く、等級により年収の上振れ余地が大きい一方、稼働や成果へのプレッシャーも相応です。",
    skill: "上流工程（要件定義・基本設計）の経験、業務・ドメイン理解、ロジカルな資料化・提案力。",
    prep: "提案書・設計書を構造的に書く訓練、業界課題のインプット、ケース面接対策。",
    income: "ファーム・等級で高めの傾向。成果と稼働に連動しやすく、実力主義の色が濃い。",
    link: { href: "/career/engineer-to-consultant/", label: "エンジニアからITコンサルへの転身" },
  },
  {
    id: "teacher",
    title: "3. 講師／教育（IT研修・スクール）",
    body: "知識と経験を人に伝える仕事です。技術の言語化・教材づくり・傾聴が軸で、登壇や勉強会の経験が実績になります。正社員講師から業務委託まで関わり方の幅が広く、副業として小さく始めやすいのも特徴。年齢の壁が比較的低く、「教えるのが好き」という適性が活きる選択肢です。",
    skill: "技術を初心者にも伝わる言葉に変える力、教材設計、傾聴と質問対応の根気。",
    prep: "社内勉強会やイベントでの登壇、ブログやスライドでの解説、メンター経験の整理。",
    income: "正社員講師・業務委託で幅がある。副業から始め、実績を見て本格移行する人が多い。",
    link: { href: "/knowledge/continuous-learning/", label: "学び続けるエンジニアの習慣" },
  },
  {
    id: "cre",
    title: "4. CRE／サポートエンジニア",
    body: "Customer Reliability Engineer（CRE）やサポートエンジニアは、顧客と技術の橋渡しを担います。障害対応・ログ調査・顧客折衝・正確な文章でのやり取りが中心で、開発経験があるほど一次解決力が高まります。30代〜50代まで需要があり、人と接するのが苦でないエンジニアに向きます。",
    skill: "障害切り分け・ログ調査の実務、製品理解、顧客への分かりやすい説明と文章力。",
    prep: "問い合わせ一次対応や顧客折衝の経験を棚卸しし、再現性のある対応事例をまとめる。",
    income: "開発職と近い水準だが企業差が大きい。SREに近い役割ほど高くなる傾向。",
    link: { href: "/career/cre/", label: "CRE（顧客信頼性エンジニア）への道" },
  },
  {
    id: "writer",
    title: "5. テクニカルライター",
    body: "API仕様書・マニュアル・技術ブログなどの技術文書を整備する職種です。技術理解と構造化された文章・図解が武器になり、OSSや社内ドキュメント、技術ブログの実績がそのままポートフォリオになります。正社員・業務委託の幅が広く、副業との相性が良いのも特徴。年齢より文章の正確さと読み手への配慮が評価軸です。",
    skill: "技術を正確に理解する力、構造化された文章、図解、読み手目線の編集力。",
    prep: "技術ブログ・OSSのドキュメント・社内手順書など、公開できる文章実績を蓄積する。",
    income: "正社員・業務委託で幅がある。副業と相性がよく、段階移行しやすい。",
    link: null,
  },
  {
    id: "joushi-se",
    title: "6. 社内SE（情報システム）",
    body: "事業会社のIT全般（社内システム・インフラ・ベンダー管理・ヘルプデスク等）を担います。幅広い技術と社内調整力が求められ、残業が比較的少ない求人も多く、40代・50代の受け皿になりやすい職種です。安定志向で「特定技術を尖らせるより、広く事業を支えたい」人に向きます。",
    skill: "インフラ・運用・業務システムの幅広い知識、社内調整、ベンダーマネジメント。",
    prep: "対応してきたインフラ・運用・社内業務の範囲を棚卸しし、調整実績を言語化する。",
    income: "安定志向で残業少なめの求人が多い反面、年収は横ばい〜やや控えめのケースもある。",
    link: { href: "/knowledge/40s-reality/", label: "40代エンジニア転職の現実" },
  },
  {
    id: "freelance",
    title: "7. 独立・フリーランス／起業",
    body: "自分の裁量で稼ぐ道です。専門スキルに加えて、営業・契約・経理を自走する力が要ります。収入に上限がない一方で下限もなく、変動が大きいのが特徴。実力と人脈があれば年齢の壁は低い反面、当面の生活防衛資金と継続的な案件獲得が前提になります。まず副業で需要を確かめてから移行するのが安全です。",
    skill: "市場価値のある専門スキル、案件獲得の営業力、契約・経理・税務を自走する力。",
    prep: "副業で実績と人脈を作り、当面の生活防衛資金と継続案件の見通しを確保する。",
    income: "上限も下限もない。稼働と単価に直結し、月ごとの変動が大きい。",
    link: { href: "/knowledge/freelance-vs-fulltime/", label: "フリーランスと正社員の比較" },
  },
];

export default function SecondCareerPage() {
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
        title="エンジニアのセカンドキャリア｜選択肢7つを徹底比較"
        description="エンジニアのセカンドキャリアの選択肢を整理。PM/EM・ITコンサル・講師・CRE・テクニカルライター・社内SE・独立を比較表で。活かせるスキル・準備・収入の考え方と移行ステップを30代・40代向けに解説。"
        url="/knowledge/second-career/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ガイド" },
          { name: "エンジニアのセカンドキャリア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エンジニアのセカンドキャリア｜選択肢7つを徹底比較
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | PM/EM・ITコンサル・講師・CRE・社内SE・独立まで
        </p>

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed">
            「このまま開発を続けるか、次の道に進むか」。30代・40代のエンジニアにとって、セカンドキャリアの検討は避けて通れないテーマです。エンジニア経験は、マネジメント・コンサル・教育・サポート・ライティング・社内SE・独立など、想像以上に多くの道へつながります。本記事では代表的な<strong>7つの選択肢</strong>を比較表で整理し、それぞれの<strong>活かせるスキル・必要な準備・収入の考え方</strong>、移行ステップ、そして40代・50代の現実的な見方までをまとめます。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表の年代別平均年収（2025年）",
            "doda（パーソルキャリア）2024年度 決定年収レポート（2025年5月公表）",
            "経済産業省「IT人材需給に関する調査」（2019年3月公表）",
          ]}
        />

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4 text-sm text-blue-700">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="hover:underline">{t.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：セカンドキャリアは「年収」ではなく「価値の出し方」で選ぶ</h2>
            <ul className="text-sm text-blue-900 space-y-2 leading-relaxed">
              <li>・選択肢は大きく<strong>7つ</strong>。人・組織を動かす（PM/EM）、課題を解く（ITコンサル）、伝える（講師）、顧客とつなぐ（CRE）、書く（テクニカルライター）、事業を支える（社内SE）、自分で稼ぐ（独立）。</li>
              <li>・<strong>いきなり転職・独立より、現職で小さく試す</strong>のが王道。リード経験・登壇・ドキュメント整備など本業のまま検証できる。</li>
              <li>・<strong>40代・50代ほど「これまで担った領域」が評価軸</strong>。ドメイン知識・顧客折衝・チーム運営の実績が活きる社内SE・コンサル・CRE・講師が受け皿になりやすい。</li>
            </ul>
          </div>
        </section>

        {/* セカンドキャリアとは */}
        <section id="what" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニアのセカンドキャリアとは</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ここで言うセカンドキャリアとは、これまで積んだエンジニア経験を土台に、<strong>次の職種・働き方へ軸足を移すこと</strong>を指します。完全な異業種転職ではなく、開発で培った技術理解・課題解決力・ドキュメント力を「別の価値の出し方」へ翻訳していくイメージです。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            背景には、IT人材需要の継続的な拡大があります。経済産業省「IT人材需給に関する調査」（2019年3月公表）の試算では、2030年に最大約79万人のIT人材不足が見込まれるとされています。これは開発職に限らず、技術がわかる人材を必要とする周辺職種（コンサル・社内SE・教育・サポートなど）の裾野が広いことを示唆します。
          </p>
          <p className="text-slate-600 leading-relaxed">
            つまり、セカンドキャリアは「開発から逃げる選択」ではなく、<strong>技術の土台を別の形で活かす選択</strong>です。だからこそ、年収の高低だけでなく「日々やる仕事の中身」「労働時間」「数年後の発展性」で選ぶことが満足度を左右します。
          </p>
        </section>

        {/* 7つの選択肢 比較表 */}
        <section id="options" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">7つの選択肢を一覧比較</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            代表的な7ルートを、価値の出し方・活かせるスキル・必要な準備・収入の考え方・年齢適性の観点で並べました。収入欄は「水準の傾向」を示すもので、具体的な金額は企業・等級により大きく変わります。後述の収入セクションで公的・公表データを確認してください。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[840px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">選択肢</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">価値の出し方</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">活かせるスキル</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">必要な準備</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">収入の傾向</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">年齢適性</th>
                </tr>
              </thead>
              <tbody>
                {options.map((o, i) => (
                  <tr key={o.name} className={i % 2 === 1 ? "bg-slate-50" : ""}>
                    <td className="px-3 py-3 border border-slate-200 text-slate-700 font-medium">{o.name}</td>
                    <td className="px-3 py-3 border border-slate-200 text-slate-600">{o.base}</td>
                    <td className="px-3 py-3 border border-slate-200 text-slate-600">{o.skill}</td>
                    <td className="px-3 py-3 border border-slate-200 text-slate-600">{o.prep}</td>
                    <td className="px-3 py-3 border border-slate-200 text-slate-600">{o.income}</td>
                    <td className="px-3 py-3 border border-slate-200 text-slate-600">{o.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">※「収入の傾向」は水準感の比較。実際の金額は企業・等級・地域で変動します。</p>
        </section>

        {/* 各ルート詳細 */}
        <section id="detail" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">各ルートの詳細（スキル・準備・収入）</h2>
          <div className="space-y-5">
            {detail.map((d) => (
              <div key={d.id} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{d.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">{d.body}</p>
                <dl className="text-sm text-slate-600 space-y-1.5 mb-3 bg-slate-50 rounded-md p-4">
                  <div className="flex gap-2"><dt className="font-bold text-slate-700 shrink-0 w-28">活かせるスキル</dt><dd>{d.skill}</dd></div>
                  <div className="flex gap-2"><dt className="font-bold text-slate-700 shrink-0 w-28">必要な準備</dt><dd>{d.prep}</dd></div>
                  <div className="flex gap-2"><dt className="font-bold text-slate-700 shrink-0 w-28">収入の考え方</dt><dd>{d.income}</dd></div>
                </dl>
                {d.link && (
                  <Link href={d.link.href} className="text-sm text-blue-700 hover:underline font-medium">
                    詳しく見る：{d.link.label} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* スキル棚卸し表 */}
        <section id="skill-map" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">活かせるスキルの棚卸し表</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            セカンドキャリア選びは「やりたいこと」だけでなく「持っているもの」から逆算すると現実的です。これまでの経験を左列に当てはめ、つながりやすい選択肢を確認してみてください。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">これまでの経験・強み</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">つながりやすいセカンドキャリア</th>
                </tr>
              </thead>
              <tbody>
                {skillMap.map((s, i) => (
                  <tr key={s.have} className={i % 2 === 1 ? "bg-slate-50" : ""}>
                    <td className="px-3 py-3 border border-slate-200 text-slate-700 font-medium">{s.have}</td>
                    <td className="px-3 py-3 border border-slate-200 text-slate-600">{s.to}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 移行ステップ */}
        <section id="steps" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">セカンドキャリアへの移行5ステップ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            焦って転職活動を始める前に、現職にいながら検証できることがたくさんあります。次の順番で進めると、収入が一時的に下がるリスクを抑えながら確実に移行できます。
          </p>
          <div className="space-y-4">
            {steps.map((item) => (
              <div key={item.num} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 収入の考え方 */}
        <section id="income" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">収入の考え方（公的・公表データ）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            セカンドキャリアで気になるのが収入です。職種・等級で大きく変わるため断定はできませんが、公的・公表データを参照すると判断の目安になります。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-4">
            <h3 className="font-bold text-slate-800 mb-2 text-sm">年代別の平均年収（参考値）</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              レバテック公表の年代別平均年収（2025年）では、正社員SEの平均年収は20代約378万円・30代約499万円・40代約618万円・50代約685万円とされています。年代が上がるほど高くなる傾向があり、年収1,000万円以上の割合は30代8.01%・40代12.67%と公表されています。セカンドキャリアでマネジメントやコンサルに進む場合、この上位レンジを狙える余地があります。
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-4">
            <h3 className="font-bold text-slate-800 mb-2 text-sm">転職時の年収変化（参考値）</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              doda（パーソルキャリア）の2024年度 決定年収レポート（2025年5月公表）によると、転職者の約6割が年収アップを実現し、IT・通信の平均決定年収は469万円（2023年度）から486万円（2024年度）へ上昇しています。職種転換でも、これまでの経験を正しく翻訳できれば年収維持・アップは十分に狙えます。
            </p>
          </div>
          <p className="text-slate-600 leading-relaxed">
            一方で、社内SEのように「残業が少なく安定」を選ぶと年収は横ばい〜やや控えめになるケースもあります。収入は<strong>「金額」と「時間・安定・発展性」のトレードオフ</strong>で見ることが大切です。自分の市場価値の調べ方は <Link href="/knowledge/market-value/" className="text-blue-700 hover:underline">市場価値の調べ方</Link> も参考にしてください。
          </p>
        </section>

        {/* 40代・50代視点 */}
        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">40代・50代の現実的な考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            当サイトの読者の多くは30代・40代のミドルエンジニアです。年齢が上がるほど、セカンドキャリアの選び方にはいくつかの現実的なポイントがあります。
          </p>
          <ul className="space-y-3 mb-4">
            <li className="flex gap-3 text-sm text-slate-600">
              <span className="text-blue-600 font-bold shrink-0">●</span>
              <span><strong>「未経験ゼロから」より「経験の翻訳」が現実的。</strong>40代・50代で全く新しい職種にゼロから挑むのは時間的に不利。これまで担った領域を、新職種の言葉に置き換えて見せる戦略が通りやすい。</span>
            </li>
            <li className="flex gap-3 text-sm text-slate-600">
              <span className="text-blue-600 font-bold shrink-0">●</span>
              <span><strong>ドメイン知識・人脈が最大の武器。</strong>特定業界（金融・医療・製造など）の深い理解や社内外の人脈は、若手にはない強み。ITコンサル・社内SE・CREでそのまま価値になる。</span>
            </li>
            <li className="flex gap-3 text-sm text-slate-600">
              <span className="text-blue-600 font-bold shrink-0">●</span>
              <span><strong>社内SE・講師は年齢の壁が比較的低い受け皿。</strong>幅広い技術と調整力が求められる社内SE、経験の伝達が価値になる講師は、40代・50代の需要が一定ある。</span>
            </li>
            <li className="flex gap-3 text-sm text-slate-600">
              <span className="text-blue-600 font-bold shrink-0">●</span>
              <span><strong>収入は「金額の最大化」だけで決めない。</strong>家族・健康・働く年数を踏まえ、安定・労働時間とのバランスで選ぶ方が長期的な満足度は高い。</span>
            </li>
            <li className="flex gap-3 text-sm text-slate-600">
              <span className="text-blue-600 font-bold shrink-0">●</span>
              <span><strong>独立は「実績・人脈・資金」が揃ってから。</strong>年齢が上がるほど再就職のハードルも上がるため、生活防衛資金と継続案件の見通しを確認してから踏み切る。</span>
            </li>
          </ul>
          <p className="text-slate-600 leading-relaxed">
            40代以降の動き方は <Link href="/knowledge/40s-reality/" className="text-blue-700 hover:underline">40代エンジニア転職の現実</Link> や <Link href="/knowledge/salary-40s/" className="text-blue-700 hover:underline">40代エンジニアの年収事情</Link> で具体的に整理しています。
          </p>
        </section>

        {/* チェックリスト */}
        <section id="checklist" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている選択肢チェックリスト</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            当てはまる項目が多いものが、あなたに向いた方向性の候補です。複数当てはまる場合は、移行5ステップの「小さく試す」で適性を確かめましょう。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">PM／EM・ITコンサルが向く人</h3>
              <ul className="text-sm text-slate-600 space-y-1.5">
                <li>✓ 個人成果よりチーム・事業の成果に関心がある</li>
                <li>✓ 調整・交渉・資料化が苦にならない</li>
                <li>✓ 「何を作るか」「なぜ作るか」に興味がある</li>
                <li>✓ 上流工程やリード経験が一定ある</li>
              </ul>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">講師・テクニカルライターが向く人</h3>
              <ul className="text-sm text-slate-600 space-y-1.5">
                <li>✓ 技術を分かりやすく言語化するのが得意</li>
                <li>✓ 教える・書くことにやりがいを感じる</li>
                <li>✓ ブログ・登壇・ドキュメントの実績がある</li>
                <li>✓ 副業から段階的に始めたい</li>
              </ul>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">CRE・社内SEが向く人</h3>
              <ul className="text-sm text-slate-600 space-y-1.5">
                <li>✓ 顧客・社内とのやり取りが苦でない</li>
                <li>✓ 幅広く事業を支える働き方をしたい</li>
                <li>✓ 安定・残業少なめを重視する</li>
                <li>✓ 障害対応・運用・業務知識に強みがある</li>
              </ul>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">独立・フリーランスが向く人</h3>
              <ul className="text-sm text-slate-600 space-y-1.5">
                <li>✓ 専門スキルと案件獲得の自信がある</li>
                <li>✓ 営業・契約・経理を自走できる</li>
                <li>✓ 人脈・実績が一定たまっている</li>
                <li>✓ 生活防衛資金を確保できている</li>
              </ul>
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

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">セカンドキャリアの方向性をプロに相談</h2>
          <p className="text-blue-100 text-sm mb-4">IT特化型エージェントなら、開発経験を前提にPM/EM・コンサル・社内SEまで含めた求人提案と、市場価値の客観情報が得られます。</p>
          <Link href="/#ranking" className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">おすすめエージェントランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "EM・PMへのマネジメント転身ガイド", href: "/knowledge/management/" },
              { name: "エンジニアからITコンサルへの転身", href: "/career/engineer-to-consultant/" },
              { name: "テックリードという選択肢", href: "/career/tech-lead/" },
              { name: "CRE（顧客信頼性エンジニア）への道", href: "/career/cre/" },
              { name: "フリーランスと正社員の比較", href: "/knowledge/freelance-vs-fulltime/" },
              { name: "40代エンジニア転職の現実", href: "/knowledge/40s-reality/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors">{item.name} →</Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
