import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/line-yahoo/" },
  title: "LINEヤフーの年収は平均884万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "LINEヤフーのエンジニア中途採用を有価証券報告書・公式採用情報・口コミ出典付きで解説。平均年収884万円(2025年3月期)、選考フロー、出社方針、30代40代の狙い目までまとめました。",
};

const tocItems = [
  { id: "conclusion", label: "結論：転職難易度と向くエンジニア" },
  { id: "basic", label: "基本データ（出典付き）" },
  { id: "features", label: "エンジニア採用の特徴" },
  { id: "proscons", label: "入社のメリット・デメリット" },
  { id: "fit", label: "向いている人・向いていない人" },
  { id: "tech", label: "技術スタック・開発文化" },
  { id: "salary", label: "年収データ" },
  { id: "flow", label: "選考フロー" },
  { id: "interview", label: "選考で重視される点" },
  { id: "middle", label: "30代・40代の視点" },
  { id: "agents", label: "おすすめエージェント" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const faqs = [
  {
    q: "LINEヤフーのエンジニア中途採用の難易度は高いですか？",
    a: "ポジションにもよりますが、応募者が多く、書類選考・コーディングテスト・複数回の技術面接を通過する必要があるため難易度は高めとされています。一方で職種の幅が広く、特定領域の実務経験が深い人には通過の余地があります。InterviewCat JobsやKOTORA JOURNAL等の選考解説でも「実務での課題解決経験を具体的に語れるか」が鍵とされています。",
  },
  {
    q: "LINEヤフーの平均年収はいくらですか？",
    a: "有価証券報告書（2025年3月期）によると、提出会社であるLINEヤフー株式会社の平均年間給与は884万円、平均年齢38.4歳です（出典: 有報データベース等の二次集計、2025年3月期）。これは全社・全職種の平均で、エンジニア職や役職・グレードによって実際の年収は上下します。",
  },
  {
    q: "選考でコーディングテストはありますか？",
    a: "職種によりコーディングテストや技術課題が課されるケースがあります。LINEヤフー採用note（lycorp_recruit）でもコーディングテストの位置づけが紹介されており、アルゴリズム・SQL・実装寄りなど出題は幅があるとされています。詳細は応募ポジションの募集要項で確認するのが確実です。",
  },
  {
    q: "LINEヤフーはフルリモートで働けますか？",
    a: "かつてはフルリモート可の方針でしたが、2024年12月に方針が見直され、2025年4月から事業（カンパニー）部門は原則週1回、開発・コーポレート部門などは原則月1回の出社へ。さらに2026年4月からは部署を問わず週3日程度の出社が予定されています（出典: ITmedia NEWS・LINEヤフー公式発表）。最新の勤務条件は募集要項で確認してください。",
  },
  {
    q: "LINEヤフーで英語力は必要ですか？",
    a: "旧LINE系の一部チームではグローバル拠点との連携があり英語が有利になりますが、国内向けサービスのチームでは日本語中心で進むポジションも多くあります。ポジションごとに求められる語学要件が異なるため、募集要項の記載を確認しましょう。",
  },
  {
    q: "LINEヤフーの残業や働きやすさはどうですか？",
    a: "OpenWork・転職会議等の口コミでは、フレックスや各種支援制度が整っている一方、所属部署によって残業や評価の納得感に差があるという声が見られます。残業時間は月20〜40時間程度の報告例があり、配属部署の影響が大きい傾向です（出典: OpenWork・転職会議の口コミ要約）。",
  },
  {
    q: "LINEヤフーの選考はどれくらいの期間がかかりますか？",
    a: "二次情報の選考解説では、応募から内定までおおよそ1カ月〜1カ月半が目安とされています。課題選考や面接回数が増えるとさらに伸びる場合があります。",
  },
  {
    q: "未経験や異業種からLINEヤフーに転職できますか？",
    a: "中途採用は基本的に即戦力採用で、各ポジションで実務経験が前提となります。完全未経験からの直接転職は現実的ではなく、まずSIや事業会社で実務経験を積んでから挑戦するのが一般的なルートです。",
  },
];

export default function LineYahooCompanyPage() {
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
      <ArticleJsonLd title="LINEヤフー エンジニア転職ガイド" description="LINEヤフーのエンジニア中途採用を有価証券報告書・公式採用情報・口コミ出典付きで解説。平均年収884万円(2025年3月期)、選考フロー、出社方針までまとめました。" url="/company/line-yahoo/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "フロントエンドスペシャリスト路線の転職ガイド", href: "/skill/react/" }, { name: "フルスタックの転職ガイド", href: "/skill/typescript/" }, { name: "Kotlinの転職ガイド", href: "/skill/kotlin/" }, { name: "Javaの転職ガイド", href: "/skill/java/" }, { name: "Kubernetesの転職ガイド", href: "/skill/kubernetes/" }, { name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "LINEヤフー" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">LINEヤフー エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | 国内最大級のユーザー基盤を持つ上場テック企業</p>

        {/* 直答box (P0/company年収) */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】LINEヤフーの年収は？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: LINEヤフー株式会社の平均年間給与は884万円です（2025年3月期・平均年齢38.4歳。有価証券報告書を集計した二次情報）。</strong></p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・平均年間給与 884万円（2025年3月期・有報二次集計、全職種平均）。</li><li>・前年度（2024年3月期）の集計値は819万円で、近年は上昇傾向との報告があります。</li><li>・全職種平均であり、エンジニア職・グレード別の年収表は非公表。実際のレンジはオファー内容で確認してください。</li></ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-4">
          LINEヤフー株式会社（東証プライム上場）は、メッセンジャー「LINE」と「Yahoo! JAPAN」を中核に、検索・EC・決済・広告・AIなど幅広いサービスを展開する国内最大級のインターネット企業です。本ガイドは、有価証券報告書・公式採用情報・公開技術ブログ・口コミサイトの公開情報のみを根拠に、エンジニア中途採用の実像を出典付きで整理します。30代・40代のミドルエンジニアが「自分に勝ち目があるか」を判断できるよう、年収・選考・働き方を具体的に解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "LINEヤフー有価証券報告書(2025年3月期)・有報データベース二次集計",
            "LINEヤフー公式採用情報・採用note(lycorp_recruit)",
            "LINEヤフー Tech Blog(techblog.lycorp.co.jp)",
            "ITmedia NEWS(出社方針)",
            "OpenWork・転職会議の口コミ要約",
          ]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 text-sm mb-3">目次</p>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {tocItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-petrol hover:underline">{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：転職難易度と向くエンジニア</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="font-bold text-blue-900 mb-3">難易度は「高め」。大規模トラフィックを扱った実務経験者に向く。</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>● <strong>向いている人</strong>：Java/Kotlin/TypeScript等で大規模Webサービスを開発・運用した経験があり、Kubernetes基盤やデータ処理基盤に関心がある人。</li>
              <li>● <strong>狙い目</strong>：GAFA系外資ほど英語ハードルが高くなく、国内最大級の規模とユーザー数を扱える点が魅力。30代・40代でも専門領域の深さがあれば十分戦える。</li>
              <li>● <strong>注意点</strong>：2025年以降、出社方針が「フルリモート可」から段階的に出社中心へ見直されている点。働き方は応募前に必ず確認を。</li>
            </ul>
          </div>
        </section>

        <section id="basic" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ（出典付き）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["企業名", "LINEヤフー株式会社（東証プライム上場）"],
                  ["事業内容", "メディア・コマース・戦略事業（検索/メッセンジャー/EC/決済/広告/AI等）"],
                  ["連結従業員数", "27,003名（2025年3月期・有報二次集計）"],
                  ["提出会社従業員数", "11,035名（2025年3月期・有報二次集計）"],
                  ["平均年間給与", "884万円・平均年齢38.4歳（2025年3月期・有報二次集計、全職種平均）"],
                  ["技術スタック", "Java / Kotlin / TypeScript / React / Kubernetes / Apache Kafka / Spark 等（公式Tech Blog公開情報）"],
                  ["出社方針", "2025年4月〜事業部門は原則週1回・他部門は原則月1回／2026年4月〜週3日程度予定（公式発表）"],
                ].map(([label, value], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <th className="px-4 py-3 text-left font-medium text-slate-700 w-1/3 border-b border-slate-200">{label}</th>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            ※従業員数・平均給与は有価証券報告書（2025年3月期）を集計した二次情報に基づきます。求人内容や勤務条件は変動するため、最新情報は<a href="https://www.lycorp.co.jp/ja/recruit/" className="text-petrol hover:underline" target="_blank" rel="noopener noreferrer">LINEヤフー公式採用ページ</a>で必ずご確認ください。
          </p>
        </section>

        <section id="features" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">国内最大級のトラフィック規模</h3>
              <p className="text-sm text-petrol-deep">LINEとYahoo! JAPANという国内有数の大規模サービスを擁し、膨大なリクエストを捌くシステムの設計・運用経験を積めます。公式Tech Blogでは、社内Kubernetes as a Service基盤「ZCP」が2018年に立ち上がり、グローバルで多数のクラスタ・100万超のコンテナを運用してきたことが紹介されています。この規模感は転職先として希少です。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">多様なサービスドメインと社内異動</h3>
              <p className="text-sm text-petrol-deep">メッセンジャー、検索、EC、決済、広告、AIなど扱う領域が広く、エンジニアのキャリアパスの選択肢が豊富です。社内公募・異動の仕組みもあり、入社後にドメインを変えやすい点はミドル層にとってのメリットになります。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">OSS・技術発信への積極姿勢</h3>
              <p className="text-sm text-petrol-deep">Kubernetes関連OSS（kustomize等）でのコントリビューションや、KubeCon等の国際カンファレンスへの登壇・参加レポートが公式Tech Blogで多数公開されています。技術を外に発信したいエンジニアにとって、活動の土台がある環境です。</p>
            </div>
          </div>
        </section>

        <section id="proscons" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">入社のメリット・デメリット</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            公開情報とOpenWork・転職会議等の口コミ傾向から、メリット・デメリットの両面を整理します。判断材料として、良い面だけでなく注意点も具体的に確認してください。
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3 text-sm">メリット</h3>
              <ul className="space-y-2 text-sm text-green-900">
                <li>● 国内最大級のトラフィックと、クラウドネイティブな大規模基盤に触れられる</li>
                <li>● 平均年収884万円（2025年3月期・有報集計）とIT平均を大きく上回る待遇水準</li>
                <li>● GAFA系外資より英語ハードルが低いポジションが多く、日本語中心でも挑戦しやすい</li>
                <li>● サービスドメインが広く、社内公募・異動でキャリアの選択肢を変えやすい</li>
                <li>● OSS貢献・カンファレンス登壇など技術発信の土台がある</li>
              </ul>
            </div>
            <div className="border border-rose-200 bg-rose-50 rounded-lg p-5">
              <h3 className="font-bold text-rose-800 mb-3 text-sm">デメリット・注意点</h3>
              <ul className="space-y-2 text-sm text-rose-900">
                <li>● 出社方針が「フルリモート可」から段階的に出社中心へ見直されている（2026年4月〜週3日程度予定）</li>
                <li>● 組織が大きく、残業・働きやすさ・評価の納得感は配属部署による差が大きいとの声</li>
                <li>● 制度は充実するが情報が分散し、把握しづらいという口コミがある</li>
                <li>● 即戦力採用が中心で、未経験・異業種からの直接転職は現実的でない</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="fit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向いている人・向いていない人</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3 text-sm">向いている人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>✓ 大規模Webサービスの開発・運用経験がある</li>
                <li>✓ Java/Kotlin/TypeScript等の実務経験が深い</li>
                <li>✓ Kubernetes・データ基盤などクラウドネイティブ技術に関心がある</li>
                <li>✓ 国内大手で安定性と規模の両方を求めたい30代・40代</li>
                <li>✓ 出社を含むハイブリッド勤務を許容できる</li>
              </ul>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3 text-sm">向いていない人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>✕ 完全フルリモートを絶対条件にしたい</li>
                <li>✕ 実務経験が浅く即戦力性をアピールしづらい</li>
                <li>✕ 小規模・裁量重視のスタートアップ的環境を強く望む</li>
                <li>✕ 評価・働き方の社内ばらつきを許容できない</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="tech" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック・開発文化</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            以下はLINEヤフー Tech Blog（techblog.lycorp.co.jp）および旧Yahoo! JAPAN Tech Blogで公開されている情報をもとにした技術スタックの概観です。サービスやチームによって採用技術は異なるため、あくまで公開情報の範囲です。
          </p>
          <div className="border border-slate-200 rounded-lg p-5 mb-4">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><strong>サーバーサイド</strong>：Java / Kotlin が中心。サービスによりGo・Python等も</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><strong>フロントエンド</strong>：TypeScript / React など</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><strong>基盤・インフラ</strong>：Kubernetes（社内KaaS「ZCP」）を全社的に活用</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><strong>データ基盤</strong>：Apache Kafka / Apache Spark 等を大規模に運用</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><strong>開発文化</strong>：内製プラットフォーム志向＋OSSコミュニティ参加の両輪</li>
            </ul>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm">
            旧LINE・旧ヤフーの統合後も、チームごとに最適な技術を選ぶ自由度が比較的高いとされています。コンテナ・クラウドネイティブ技術に強みを持ち、Platform Engineering（社内開発者向け基盤整備）に取り組む文化が公開情報からうかがえます。
          </p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            LINEヤフーは上場企業のため、有価証券報告書で<strong>全社・全職種の平均年間給与</strong>が開示されています。最新の2025年3月期では<strong>平均884万円・平均年齢38.4歳</strong>でした（有報を集計した二次情報）。前年度（2024年3月期）の集計値は819万円とされ、ここ数年で上昇傾向との報告があります。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-4">
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>重要な注意：</strong>上記は全職種を含む平均であり、エンジニア職・グレード別の正確な年収表は公式には開示されていません。口コミサイト（OpenWork等）では数千万円規模の高額回答例も見られますが、これは一部の上位事例で、職種・グレード・評価により大きく変動します。当サイトでは出典の取れない等級別年収表は掲載しません。実際のレンジは選考過程で提示されるオファー内容で確認してください。
            </p>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm">
            参考までに、レバテック公表（2025年）の正社員SE平均年収は30代約499万円・40代約618万円で、LINEヤフーの平均884万円はIT業界全体の平均を大きく上回る水準です（出典: レバテック ガイド記事、2025年）。
          </p>
        </section>

        <section id="flow" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            公式採用情報および二次の選考解説（InterviewCat Jobs・KOTORA JOURNAL・シンシアード等）を総合すると、エンジニア中途採用の一般的な流れは次のとおりです。職種により課題選考や面接回数は前後します。
          </p>
          <ol className="space-y-3">
            {[
              ["1. 書類選考", "職務経歴書で、これまで担当したプロジェクト・成果・スキルがポジション要件に合致するかを確認。"],
              ["2. 適性検査・技術課題／コーディングテスト", "職種によりWebテストや技術課題、コーディングテストを実施。アルゴリズム・SQL・実装寄りなど出題範囲は幅がある。"],
              ["3. 技術面接（複数回）", "現場リーダー・部長クラスとの面接が基本2〜3回程度。実務経験の深掘りが中心。"],
              ["4. 最終面接・オファー", "条件面談を経て内定。応募から内定まではおおよそ1〜1.5カ月が目安（二次情報）。"],
            ].map(([title, desc], i) => (
              <li key={i} className="border border-slate-200 rounded-lg p-4">
                <p className="font-bold text-slate-800 text-sm mb-1">{title}</p>
                <p className="text-sm text-slate-600">{desc}</p>
              </li>
            ))}
          </ol>
          <p className="text-xs text-slate-500 mt-3">※選考フローは公式採用ページの記載と各ポジションの募集要項が最優先です。上記は一般に知られている範囲の概観です。</p>
        </section>

        <section id="interview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考で重視される点</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            公開情報・口コミ傾向からは、次のような観点が重視されているとされます（特定の面接質問の断定は避け、一般に知られる範囲にとどめます）。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>大規模サービスで直面した技術課題と、その解決プロセスを具体的に語れるか</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>担当領域における技術選定の判断軸・トレードオフの理解</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>コーディング／アルゴリズムの基礎力（職種により課題で確認）</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>チームでの協働・コミュニケーション、ステークホルダーへの説明力</li>
            </ul>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm mt-4">
            コーディングテスト対策は<Link href="/knowledge/coding-test/" className="text-petrol hover:underline">コーディングテスト対策ガイド</Link>、技術面接の準備は<Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接の進め方</Link>も参考にしてください。
          </p>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3">
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong>英語ハードルが低めで、国内大規模を扱える数少ない選択肢。</strong>GAFA系外資と比べると英語要件が厳しくないポジションが多く、日本語中心で大規模サービスに関われる点は、ミドルエンジニアにとって現実的な「ハイクラス国内転職」の有力候補です。平均年齢38.4歳という数字も、30代・40代が浮かない組織であることを示唆します。
            </p>
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong>確認すべきは「出社方針」と「配属部署」。</strong>2025年以降、フルリモート前提から出社中心へ段階的に移行しており、2026年4月からは週3日程度の出社が予定されています。地方在住での応募を考える場合は、ポジションの勤務地要件を必ず確認しましょう。また口コミでは部署により残業・評価の納得感に差があるため、面接で配属チームの働き方を具体的に質問するのがおすすめです。
            </p>
            <p className="text-sm text-amber-900 leading-relaxed">
              40代の市場価値の整理は<Link href="/knowledge/market-value/" className="text-petrol hover:underline">エンジニアの市場価値の測り方</Link>、年収交渉は<Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉の進め方</Link>も合わせてご覧ください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">LINEヤフー転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT/Web特化。高年収求人比率が高く、メガベンチャー領域に強い。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム業界専門。提案スピードと実務経験者への提案数が強み。" },
              { name: "ビズリーチ", href: "/review/bizreach-it/", desc: "ハイクラス・スカウト型。年収750万円以上の求人やヘッドハンター経由の案件が豊富。" },
            ].map((agent, i) => (
              <Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3>
                <p className="text-xs text-slate-500">{agent.desc}</p>
              </Link>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">複数併用の考え方は<Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">転職エージェントの併用ガイド</Link>を参照してください。</p>
        </section>

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
          <h2 className="text-xl font-bold mb-3">LINEヤフーへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">メガベンチャー・大手テックへの転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "メルカリ の転職ガイド", href: "/company/mercari/" },
              { name: "楽天グループ の転職ガイド", href: "/company/rakuten/" },
              { name: "サイバーエージェント の転職ガイド", href: "/company/cyberagent/" },
              { name: "DeNA の転職ガイド", href: "/company/dena/" },
              { name: "コーディングテスト対策ガイド", href: "/knowledge/coding-test/" },
              { name: "ハイクラス向けエージェント比較", href: "/compare/highclass/" },
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
