import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "Google（グーグル）の年収とエンジニア転職【2026年】レベル別給与・選考・技術を解説",
  description:
    "Google合同会社（日本法人）へのエンジニア転職を、公式採用情報とlevels.fyi・OpenWork等の集計値をもとに解説。年収レンジ・選考フロー・面接の特徴・30代40代の現実までまとめました。",
};

const toc = [
  { id: "conclusion", label: "結論：難易度と向くエンジニア" },
  { id: "basic", label: "基本データ" },
  { id: "hiring", label: "エンジニア採用の特徴" },
  { id: "stack", label: "技術スタック・開発文化" },
  { id: "salary", label: "年収データ（出典付き）" },
  { id: "flow", label: "選考フロー" },
  { id: "interview", label: "面接で重視される点" },
  { id: "review", label: "口コミ傾向" },
  { id: "midage", label: "30代・40代から見たGoogle" },
  { id: "agents", label: "おすすめエージェント" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const basicData: [string, string][] = [
  ["企業名", "Google合同会社（Google Japan G.K.）"],
  ["業種", "インターネット・テクノロジー"],
  ["本社所在地", "東京都渋谷区（渋谷ストリーム）"],
  ["主な開発拠点", "東京・横浜（Google マップ等のプロダクト開発組織あり）"],
  ["主な使用言語", "社内公用語は英語。会議・メール・面接の多くが英語"],
  ["技術スタック", "C++ / Java / Python / Go / TypeScript / Kubernetes / Google Cloud 等"],
];

const salaryRows: [string, string][] = [
  ["L3（SWE II・若手）", "総報酬 中央値の目安 約1,600万円〜"],
  ["L4（SWE III）", "総報酬 約2,000万円台前半"],
  ["L5（Senior SWE）", "総報酬 約2,500万円前後"],
  ["L6（Staff SWE）", "総報酬 約3,000万円超のレポートも"],
];

const faqs = [
  {
    q: "Google日本法人のエンジニア中途採用の難易度は？",
    a: "外資ITの中でも最難関クラスとされます。複数回のコーディング面接・システムデザイン面接に加え、社内公用語が英語のため英語力も必要です。国内IT企業で数年の実務経験を積み、アルゴリズムと英語を準備してから挑むのが現実的です。",
  },
  {
    q: "面接は英語ですか？",
    a: "Googleは社内公用語が英語で、面接の多くも英語で実施されると一般に知られています。ビジネスレベルの英語でのコミュニケーションが前提になるポジションが中心です。詳細は応募ポジションごとに公式の募集要項を確認してください。",
  },
  {
    q: "ソフトウェアエンジニアの年収はどのくらい？",
    a: "Google日本法人は有価証券報告書を公表していないため平均年収の一次情報はありません。levels.fyi（2026年6月時点）の日本拠点ソフトウェアエンジニアの総報酬は中央値で約2,550万円、L3で約1,600万円〜、L6で約4,000万円超のレポートもあります。RSU（株式報酬）の比率が高く、株価や成績で大きく変動する点に注意が必要です。",
  },
  {
    q: "選考フローはどうなっていますか？",
    a: "Google公式の採用プロセス案内によると、応募→リクルーターとの面談→ポジションに応じたスクリーニング→複数回の面接（面接ループ）→Hiring Committee（採用委員会）による合議という流れです。構造化面接で同一職種には共通の評価基準が用いられると公式に説明されています。",
  },
  {
    q: "未経験からGoogle日本法人に転職できますか？",
    a: "IT実務未経験からの直接転職は極めて困難です。まず国内IT企業で3〜5年の開発経験を積み、データ構造・アルゴリズムの基礎を固めるのが先決です。30代・40代の場合は、これまでの専門領域での深い実績を軸にするほうが現実的です。",
  },
  {
    q: "Googleyness（グーグリネス）とは何ですか？",
    a: "技術力に加えて評価される行動・価値観の総称として広く知られている概念です。曖昧な状況での判断力、協働姿勢、知的好奇心などが行動面接で見られると一般に言われています。公式に質問内容が公開されているわけではないため、過度な対策本の鵜呑みは避け、自分の経験を構造化して語れるようにしておくのが有効です。",
  },
  {
    q: "ワークライフバランスはどうですか？",
    a: "OpenWorkの集計では月間平均残業が約16時間（業界平均より少なめ）と公開されており、フレックスや在宅、福利厚生の充実を評価する声が見られます。一方でチームや時期による差はあるため、面接の逆質問で配属チームの実態を確認することをおすすめします。",
  },
  {
    q: "応募ルートは何が一般的ですか？",
    a: "公式採用サイトからの直接応募、LinkedIn経由、リファラル（社員紹介）、ハイクラス系エージェント・ヘッドハンター経由が一般的です。社内推薦は通過率が高いと一般に言われますが、まずは複数ルートで接点を作るのが現実的です。",
  },
];

const sources = [
  "Google Careers 採用プロセス（公式）",
  "levels.fyi（2026年6月時点・ユーザー投稿集計）",
  "OpenWork グーグル合同会社（社員クチコミ集計）",
];

export default function GoogleCompanyPage() {
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
        title="Google Japan エンジニア転職ガイド【2026年版】"
        description="Google合同会社（日本法人）へのエンジニア転職を、公式採用情報とlevels.fyi・OpenWork等の集計値をもとに解説。年収レンジ・選考フロー・面接の特徴・30代40代の現実までまとめました。"
        url="/company/google/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "企業別ガイド", href: "/company/" },
          { name: "Google Japan" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Google Japan（Google合同会社）エンジニア転職ガイド【2026年版】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 ｜ 公式採用情報＋levels.fyi・OpenWork集計値で読み解く外資ITトップ企業
        </p>

        <p className="text-slate-700 leading-relaxed mb-6">
          Google合同会社（Google Japan）は、検索・広告・Android・Google
          Cloud・YouTubeなどを支えるソフトウェアエンジニアを中途採用しています。
          本ページは、Google
          Careersの公式採用プロセス案内、報酬集計サイトlevels.fyi、社員クチコミサイトOpenWorkといった出典を明示しながら、
          30代・40代のミドルエンジニアが「自分に現実的な選択肢か」を判断できるようにまとめたガイドです。
          年収は有価証券報告書のような一次情報が存在しないため、出典・時点・変動が大きい旨を必ず添えて記載しています。
        </p>

        <DataNote surveyedAt="2026年6月" sources={sources} />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 text-sm mb-3">目次</p>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-xl p-6">
            <h2 className="text-xl font-bold text-blue-900 mb-3">結論：難易度と向くエンジニア</h2>
            <p className="text-blue-900 text-sm leading-relaxed mb-3">
              Google日本法人のエンジニア中途採用は<strong>外資ITの中でも最難関クラス</strong>です。
              次の3つに当てはまる人ほど現実的な挑戦になります。
            </p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>① データ構造・アルゴリズムを<strong>コーディング面接で発揮できる</strong>レベルまで磨いている</li>
              <li>② 大規模・分散システムの設計／運用に<strong>関与した実績</strong>がある</li>
              <li>③ <strong>英語でのコミュニケーション</strong>に抵抗がない（面接・業務とも英語中心のポジションが多い）</li>
            </ul>
            <p className="text-blue-900 text-sm leading-relaxed mt-3">
              逆に、特定言語・特定フレームワークの経験年数だけを売りにする転職活動では通りにくい企業です。
              まずは
              <Link href="/knowledge/coding-test/" className="text-petrol-deep underline font-medium">コーディングテスト対策</Link>
              と
              <Link href="/knowledge/system-design/" className="text-petrol-deep underline font-medium">システムデザイン面接の準備</Link>
              から着手するのが王道です。
            </p>
          </div>
        </section>

        {/* 基本データ */}
        <section id="basic" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {basicData.map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200 align-top">
                      {label}
                    </th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            ※社名・所在地は公開情報、技術スタックは公式のプロダクト技術情報・採用要項から一般に知られている範囲。組織や時期により担当技術は異なります。
          </p>
        </section>

        {/* 採用の特徴 */}
        <section id="hiring" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">構造化面接でブレを抑える</h3>
              <p className="text-sm text-petrol-deep">
                Googleは公式に「同じ職種には共通の質問・評価基準を用いる構造化面接」を採用していると説明しています。面接官個人の好みではなく、決められた観点で評価される仕組みです。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">採用は委員会（Hiring Committee）の合議</h3>
              <p className="text-sm text-petrol-deep">
                個々の面接官が合否を決めるのではなく、面接フィードバックをもとにHiring
                Committeeが合議で判断します。1人の面接が振るわなくても総合評価で見られる一方、複数領域で一定水準が求められます。
              </p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">RSU比率の高い総報酬</h3>
              <p className="text-sm text-petrol-deep">
                基本給に加えRSU（制限付き株式）が総報酬の大きな割合を占めます。Alphabet株の値動きで実受取額が変わるため、提示額は「変動前提」で捉える必要があります。
              </p>
            </div>
          </div>
        </section>

        {/* 技術スタック */}
        <section id="stack" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック・開発文化</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-3">
            Googleは大規模システムを支える言語としてC++・Java・Python・Goなどを使い、コンテナ基盤Kubernetesや、それを支えた社内基盤の流れを汲むGoogle
            Cloudのプロダクト群を自社で運用していることが、公式の技術情報・OSS（GoやKubernetes等）から広く知られています。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>大規模・低レイテンシなシステムを前提とした設計思想（スケーラビリティ重視）</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>コードレビュー・テスト・SRE的な運用文化が根付いていることが公開情報で知られる</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>Go・Kubernetes・TensorFlowなどOSSへの貢献を多数公開</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>クラウド領域は<Link href="/skill/go/" className="text-petrol hover:underline">Go</Link>・<Link href="/skill/kubernetes/" className="text-petrol hover:underline">Kubernetes</Link>のスキルが評価されやすい</li>
          </ul>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ（出典付き）</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            Google日本法人は上場企業ではなく<strong>有価証券報告書を公表していないため、公式の平均年収は存在しません</strong>。
            以下は報酬集計サイトと口コミサイトの数値で、いずれも<strong>ユーザー投稿ベースで変動が大きい</strong>点に留意してください。
          </p>
          <ul className="space-y-2 text-sm text-slate-700 mb-5">
            <li>
              ・<strong>levels.fyi（2026年6月時点・日本拠点のソフトウェアエンジニア集計）</strong>：総報酬の中央値 約2,550万円、L3 約1,600万円〜、L6 約4,000万円超のレポートも。基本給＋RSU＋ボーナスの合計値。
            </li>
            <li>
              ・<strong>OpenWork（グーグル合同会社・社員クチコミ集計）</strong>：会社全体の平均年収 約1,719万円、開発職 約2,151万円という集計値が公開されている。
            </li>
          </ul>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">レベル（参考）</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">総報酬の目安</th>
                </tr>
              </thead>
              <tbody>
                {salaryRows.map(([level, range], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{level}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 mt-2">
            出典：levels.fyi（2026年6月時点・ユーザー投稿集計）。RSUの株価変動・付与額・入社時期で実受取額は大きく動きます。等級の呼称・境界は公式に公開されたものではなく目安です。
          </p>
          <p className="text-slate-600 text-sm mt-4">
            外資の高年収レンジと国内企業の差については
            <Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代エンジニアの年収相場</Link>
            も参考にしてください。
          </p>
        </section>

        {/* 選考フロー */}
        <section id="flow" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー（公式採用プロセスベース）</h2>
          <ol className="space-y-3 text-sm text-slate-700">
            {[
              ["応募 / リクルーターとの面談", "公式採用サイトやLinkedIn、リファラル経由で応募。リクルーターが経歴と志向を確認します。"],
              ["ポジション別スクリーニング", "ソフトウェアエンジニアの場合、コーディング中心のオンライン面接（45分程度×複数）が一般的とされます。"],
              ["面接ループ（複数回）", "コーディング、システムデザイン、行動面接などが複数回実施されます。"],
              ["Hiring Committee（採用委員会）", "面接フィードバックをもとに委員会が合議で合否を判断します。"],
              ["オファー", "条件提示。リクルーター連絡からオファーまで平均8週間程度との二次情報もあります（時期・職種で変動）。"],
            ].map(([title, desc], i) => (
              <li key={i} className="flex gap-3">
                <span className="shrink-0 w-7 h-7 rounded-full bg-petrol text-white font-bold flex items-center justify-center text-xs">{i + 1}</span>
                <div>
                  <p className="font-bold text-slate-800">{title}</p>
                  <p className="text-slate-600">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-xs text-slate-400 mt-3">
            出典：Google Careers 採用プロセス（公式）。期間・回数は二次情報を含み、ポジションにより異なります。
          </p>
        </section>

        {/* 面接で重視される点 */}
        <section id="interview" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">面接で重視される点</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-3">
            公式に「具体的な質問リスト」は公開されていないため、ここでは<strong>公開情報と一般に知られている範囲</strong>に留めて整理します。
          </p>
          <ul className="space-y-2 text-sm text-slate-600 border border-slate-200 rounded-lg p-5">
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><strong>コーディング</strong>：データ構造・アルゴリズムを使い、思考過程を声に出して説明できるか</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><strong>システムデザイン</strong>：要件整理・トレードオフ・スケーラビリティの議論ができるか（<Link href="/knowledge/system-design/" className="text-petrol hover:underline">対策ガイド</Link>）</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><strong>行動面接</strong>：曖昧さへの対応・協働・学習姿勢（いわゆるGoogleyness）。<Link href="/knowledge/behavioral/" className="text-petrol hover:underline">行動面接の答え方</Link>でSTAR法を確認</li>
            <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><strong>英語</strong>：面接・業務とも英語中心のポジションが多く、技術を英語で説明できること</li>
          </ul>
        </section>

        {/* 口コミ */}
        <section id="review" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">口コミサイトでの評判傾向</h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-3">
            OpenWork（グーグル合同会社）の社員クチコミ集計では、次のような傾向が見られます（原文転載ではなく出典に基づく傾向要約です）。
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-emerald-200 bg-emerald-50 rounded-lg p-5">
              <h3 className="font-bold text-emerald-800 text-sm mb-2">良い評判の傾向</h3>
              <ul className="space-y-1 text-sm text-emerald-900">
                <li>・月間平均残業が約16時間と少なめという集計値</li>
                <li>・フレックス・在宅・福利厚生の充実を評価する声</li>
                <li>・優秀な同僚と働ける刺激的な環境という声</li>
              </ul>
            </div>
            <div className="border border-amber-200 bg-amber-50 rounded-lg p-5">
              <h3 className="font-bold text-amber-800 text-sm mb-2">気になる点の傾向</h3>
              <ul className="space-y-1 text-sm text-amber-900">
                <li>・成長を求めて3〜5年で次へ移る人材流動性の高さ</li>
                <li>・組織変更・プロダクト方針変更の影響を受けることがある</li>
                <li>・成果へのプレッシャーはチーム差が大きいとの声</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-2">出典：OpenWork グーグル合同会社（社員クチコミ集計・2026年6月時点参照）。</p>
        </section>

        {/* 30-40代視点 */}
        <section id="midage" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代から見たGoogle日本法人</h2>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              30代・40代のミドルエンジニアにとってGoogleは「年齢」より「直近で何を作り、何を判断してきたか」が問われる企業です。年齢的なハンデよりも、
              <strong>コーディング面接の準備不足</strong>と<strong>英語</strong>がボトルネックになりやすいのが実情です。
            </p>
            <p>
              強みになるのは、特定ドメイン（決済・大規模Web・インフラなど）での深い実績や、テックリード・設計判断の経験です。
              逆に「マネジメント専任で手を動かしていない期間が長い」場合は、コーディング面接で苦戦しやすいので、応募前の数か月で技術の手を取り戻しておくのが安全です。
            </p>
            <p>
              準備の進め方は
              <Link href="/career/domestic-to-foreign/" className="text-petrol hover:underline">国内企業から外資系への転職</Link>
              、英語面での不安は
              <Link href="/purpose/english/" className="text-petrol hover:underline">英語を使う仕事への転職</Link>
              、応募ルート設計は
              <Link href="/knowledge/referral/" className="text-petrol hover:underline">リファラル採用の活用</Link>
              ・
              <Link href="/knowledge/linkedin/" className="text-petrol hover:underline">LinkedIn活用</Link>
              が参考になります。
            </p>
          </div>
        </section>

        {/* エージェント */}
        <section id="agents" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Google転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "ビズリーチ", href: "/review/bizreach-it/", desc: "ハイクラス・スカウト型。外資ITを扱うヘッドハンターと接点を作りやすい。" },
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT/Web特化。技術職の選考対策やキャリアの棚卸しに強い。" },
              { name: "リクルートエージェントIT", href: "/review/recruit-it/", desc: "国内最大級の求人網。外資・大手の選択肢を広く比較したい人向け。" },
            ].map((agent, i) => (
              <Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3>
                <p className="text-xs text-slate-500">{agent.desc}</p>
              </Link>
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-2">
            外資ITは直接応募・リファラルの比率も高い領域です。エージェントは「非公開求人の把握」と「条件交渉」を目的に併用するのが効率的です。
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
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-12 text-center">
          <h2 className="text-xl font-bold mb-3">外資IT転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            選考対策と非公開求人の把握から始めたい方は、ハイクラス・IT特化のエージェントへの無料相談が出発点になります。
          </p>
          <Link
            href="/review/bizreach-it/"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントを見る
          </Link>
        </section>

        {/* 関連記事 */}
        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "コーディングテスト対策", href: "/knowledge/coding-test/" },
              { name: "システムデザイン面接の準備", href: "/knowledge/system-design/" },
              { name: "国内企業から外資系への転職", href: "/career/domestic-to-foreign/" },
              { name: "Amazon Japan 転職ガイド", href: "/company/amazon/" },
              { name: "Microsoft Japan 転職ガイド", href: "/company/microsoft/" },
              { name: "40代エンジニアの年収相場", href: "/knowledge/salary-40s/" },
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
