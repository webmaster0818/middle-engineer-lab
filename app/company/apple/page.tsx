import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/company/apple/" },
  title: "Apple Japanの年収は平均700万円【2026年・有報】エンジニア転職・選考ガイド",
  description:
    "Apple Japanのエンジニア中途採用を公式採用情報・口コミ出典付きで解説。年収の考え方、秘密主義の開発文化、英語要件、選考フロー、30代40代の注意点までまとめました。",
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
    q: "Apple Japanのエンジニア職にはどんなポジションがありますか？",
    a: "ハードウェアエンジニア、ソフトウェアエンジニア（iOS/macOS等）、機械学習・AI、品質・テスト、ローカライゼーション関連など多岐にわたります。募集は公式採用ポータル（jobs.apple.com）で職種・勤務地を絞って検索できます。中途採用が中心で、各ポジションで実務経験が前提です。",
  },
  {
    q: "Apple Japanのエンジニア年収はどのくらいですか？",
    a: "Apple Japanは合同会社で有価証券報告書による平均年収の公式開示がありません。OpenWork等の口コミでは平均年収は700万円台との集計が紹介されつつ、エンジニア・専門職では2,000万円超の高額回答例も見られます（出典: OpenWork、2026年時点の口コミ集計）。これらは回答者の偏りや職種・等級・株式報酬の有無で大きく変動する参考値であり、正確なレンジはオファー内容で確認してください。",
  },
  {
    q: "Apple Japanの面接の特徴は？",
    a: "秘密主義が徹底されており、入社前に担当プロジェクトの詳細が開示されないことが多いとされます。技術面接ではコーディングやシステム設計、Appleのプロダクト・ものづくり哲学への理解が問われる傾向が口コミで語られています。面接官の裁量が大きいとの声もあります（出典: OpenWork・転職会議等の口コミ要約）。",
  },
  {
    q: "Apple Japanで英語力はどの程度必要ですか？",
    a: "クパチーノ本社やグローバルチームとの連携が日常的に発生するため、多くのエンジニア職でビジネスレベルの英語力が求められます。二次の解説ではTOEIC800点前後が目安と紹介されることもありますが、ポジションにより要件は異なります。募集要項の語学要件を確認してください。",
  },
  {
    q: "Apple Japanの開発環境の特徴は？",
    a: "Swift・Objective-Cを中心としたApple独自のエコシステムで開発する比重が高く、ハードウェアとソフトウェアを統合的に手がける点が特徴です。チップからOS、アプリまで一貫した開発に触れられる環境です。",
  },
  {
    q: "Apple Japanへの転職で有利な経験は？",
    a: "iOS/macOS開発、組み込み・低レイヤ、機械学習・コンピュータビジョンの実務経験が評価されやすいとされます。加えて、Appleのプロダクトやユーザー体験への深い理解・共感も重要な評価軸として口コミで挙げられています。",
  },
  {
    q: "Apple Japanの転職難易度は高いですか？",
    a: "ブランド人気が高く応募が集中するため難易度は高めとされます。一方で職種の幅が広く、特定領域の専門性が深い人には通過の余地があります。リテール職とエンジニア職では求められる要件が大きく異なる点に注意してください。",
  },
  {
    q: "Apple Japanのリモートワークや働き方は？",
    a: "外資系らしく裁量を重んじる文化との口コミがある一方、勤務形態はポジション・チームにより異なります。ハードウェア系は出社前提のことも多く、勤務地・働き方は募集要項で確認するのが確実です。",
  },
];

export default function AppleCompanyPage() {
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
      <ArticleJsonLd title="Apple Japan エンジニア転職ガイド" description="Apple Japanのエンジニア中途採用を公式採用情報・口コミ出典付きで解説。年収の考え方、秘密主義の開発文化、英語要件、選考フローまでまとめました。" url="/company/apple/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb items={[{ name: "Pythonの転職ガイド", href: "/skill/python/" }, { name: "App Storeにアプリを公開するの転職ガイド", href: "/skill/swift/" }, { name: "C++の転職ガイド", href: "/skill/cpp/" }, { name: "IT企業平均年収ランキング43社【有報準拠】", href: "/salary/company-ranking/" }, { name: "ホーム", href: "/" }, { name: "企業別ガイド", href: "/company/" }, { name: "Apple Japan" }]} />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Apple Japan エンジニア転職ガイド【2026年版】</h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | 世界最高峰のプロダクトを支えるエンジニア組織</p>

        {/* 直答box (P0/company年収) */}
        <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】Apple Japanの年収は？</h2>
          <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: Apple Japanは合同会社のため有価証券報告書による平均年収の公式開示がありません。OpenWork集計では全社平均700万円台、エンジニア・専門職では2,000万円超の回答例も見られます（2026年時点・変動大）。</strong></p>
          <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・合同会社ゆえ公式の平均年収は非公表。OpenWork集計で全社平均は700万円台（2026年時点の口コミ参考値）。</li><li>・エンジニア・専門職では株式報酬（RSU）等を含め2,000万円超の回答例もありますが、職種・等級・回答者の偏りで大きく変動します。</li><li>・参考としてレバテック2025年公表の正社員SEは30代約499万円・40代約618万円。正確なレンジはオファー内容でご確認ください。</li></ul>
        </div>

        <p className="text-slate-700 leading-relaxed mb-4">
          Apple Japan合同会社は、iPhone・Mac・Apple Watch等を支えるソフトウェア／ハードウェア開発、機械学習、品質、ローカライゼーションなどのエンジニアリング職を擁する日本法人です。本ガイドは、公式採用ポータル（jobs.apple.com）と口コミサイトの公開情報のみを根拠に、エンジニア中途採用の実像を出典付きで整理します。合同会社のため有価証券報告書による年収開示がない点を踏まえ、年収は「変動の大きい参考値」として扱います。30代・40代のミドルエンジニアが現実的に判断できる情報を重視しました。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "Apple公式採用ポータル jobs.apple.com",
            "OpenWork(年収・社風の口コミ集計)",
            "転職会議・Yahoo!しごとカタログ等の選考口コミ要約",
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
            <p className="font-bold text-blue-900 mb-3">難易度は「高い」。専門性×プロダクト愛×英語の3点が揃う人に向く。</p>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>● <strong>向いている人</strong>：iOS/macOS開発、組み込み・低レイヤ、機械学習など特定領域で深い実務経験があり、ビジネスレベルの英語が使える人。</li>
              <li>● <strong>魅力</strong>：ハードとソフトを統合的に扱う独自の開発環境と、世界規模のプロダクトに関われること。</li>
              <li>● <strong>注意点</strong>：秘密主義の文化への適応、OSSより独自エコシステム中心の開発、勤務形態がポジション依存である点。年収は口コミ参考値で振れ幅が大きい。</li>
            </ul>
          </div>
        </section>

        <section id="basic" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">基本データ（出典付き）</h2>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["企業名", "Apple Japan合同会社"],
                  ["業種", "ハードウェア・ソフトウェア・サービス"],
                  ["有報による年収開示", "なし（合同会社のため）"],
                  ["年収の参考値", "OpenWork集計で全社平均700万円台、エンジニア・専門職では2,000万円超の回答例も（2026年時点・変動大）"],
                  ["技術スタック", "Swift / Objective-C / C++ / Python / Metal / Core ML 等（公式採用要件・公開情報）"],
                  ["英語要件", "多くのエンジニア職でビジネスレベル必須（ポジションにより異なる）"],
                  ["採用ポータル", "jobs.apple.com（職種・勤務地で検索・応募）"],
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
            ※年収はOpenWork等の口コミを集計した参考値で、回答者の偏り・職種・等級・株式報酬の有無により大きく変動します。最新の募集職種・条件は<a href="https://jobs.apple.com/ja-jp/search?location=japan-JPNC" className="text-petrol hover:underline" target="_blank" rel="noopener noreferrer">Apple公式採用ポータル</a>でご確認ください。
          </p>
        </section>

        <section id="features" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア採用の特徴</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">極めて高い秘密主義</h3>
              <p className="text-sm text-petrol-deep">Appleは情報管理が非常に厳格で、選考過程でも担当予定プロジェクトの詳細が開示されないことが多いと口コミで語られています。入社後も担当外の情報にはアクセスが制限される文化に適応できるかが評価のポイントになり得ます（出典: OpenWork・転職会議等の口コミ要約）。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">プロダクトへの深い理解・共感を重視</h3>
              <p className="text-sm text-petrol-deep">技術力に加え、Appleのプロダクトやデザイン哲学（Think Different）への理解・共感が強く問われる傾向があります。「なぜAppleなのか」を自分の言葉で語れることが重要との声が多く見られます。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">ハードウェア×ソフトウェアの統合開発</h3>
              <p className="text-sm text-petrol-deep">チップ設計からOS、アプリケーションまで一貫して手がけるApple特有の統合的な開発環境があり、幅広い技術領域に触れられます。低レイヤや組み込みの経験が活きやすい環境です。</p>
            </div>
          </div>
        </section>

        <section id="proscons" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">入社のメリット・デメリット</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            公式採用情報とOpenWork・転職会議等の口コミ傾向から、メリット・デメリットの両面を整理します。秘密主義など独自の文化があるため、注意点も具体的に確認しておきましょう。
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-3 text-sm">メリット</h3>
              <ul className="space-y-2 text-sm text-green-900">
                <li>● ハードとソフトを統合的に扱う、世界規模のプロダクト開発に関われる</li>
                <li>● 成果主義・年功序列が薄いとの口コミが多く、専門性が正当に評価されやすい</li>
                <li>● 専門職では総報酬が高水準になる事例があり、株式報酬を含むと大きく伸びることも</li>
                <li>● 製品品質・ユーザー体験への徹底した基準のもとで開発経験を積める</li>
              </ul>
            </div>
            <div className="border border-rose-200 bg-rose-50 rounded-lg p-5">
              <h3 className="font-bold text-rose-800 mb-3 text-sm">デメリット・注意点</h3>
              <ul className="space-y-2 text-sm text-rose-900">
                <li>● 秘密主義が徹底され、入社前に担当業務の詳細が見えにくくミスマッチが起きやすい</li>
                <li>● OSSより独自エコシステム中心で、外向きの技術発信が制限される</li>
                <li>● 多くの職種でビジネスレベルの英語が必須</li>
                <li>● 年収は口コミ参考値で振れ幅が大きく、ポジション・等級で大差がある</li>
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
                <li>✓ iOS/macOS・低レイヤ・ML等で深い専門性がある</li>
                <li>✓ ビジネスレベルの英語でグローバルチームと協働できる</li>
                <li>✓ Appleのプロダクト・ものづくり哲学に強い共感がある</li>
                <li>✓ 秘密保持を前提とした内製・統合開発の文化に適応できる</li>
              </ul>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3 text-sm">向いていない人</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>✕ OSS活動・登壇など外向きの発信を重視したい</li>
                <li>✕ 入社前に担当業務を詳細に把握してから決めたい</li>
                <li>✕ 英語でのコミュニケーションに不安が大きい</li>
                <li>✕ 幅広く浅く担当する働き方を望む（専門特化が前提）</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="tech" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">技術スタック・開発文化</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            以下は公式採用要件や一般に公開されている情報に基づく概観です。ポジションにより使用技術は大きく異なります。
          </p>
          <div className="border border-slate-200 rounded-lg p-5 mb-4">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><strong>アプリ・OS</strong>：Swift / Objective-C を中心としたAppleエコシステム</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><strong>低レイヤ・組み込み</strong>：C / C++</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><strong>機械学習・データ</strong>：Python / Core ML 等</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><strong>グラフィックス</strong>：Metal 等の独自フレームワーク</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span><strong>開発文化</strong>：OSSよりApple独自ツール・フレームワーク中心、品質・体験への高い基準</li>
            </ul>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm">
            一般的なWeb企業のように技術発信を活発に行う文化ではなく、秘密保持を前提とした内製・統合開発が中心です。OSSコミュニティでの可視的な活動より、製品品質とユーザー体験への徹底したこだわりが評価軸になりやすい点が、他のテック企業との大きな違いです。
          </p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収データ</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Apple Japanは<strong>合同会社のため有価証券報告書による平均年収の公式開示がありません</strong>。そのため、信頼できる単一の公式数値は存在せず、口コミサイトの集計を「参考値」として扱う必要があります。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-4">
            <p className="text-sm text-slate-700 leading-relaxed mb-2">
              <strong>OpenWork（2026年時点の口コミ集計）：</strong>全社平均は700万円台と紹介される一方、エンジニア・SE等の専門職では年収2,000万円を超える回答例も投稿されています。基本給に加え株式報酬（RSU）等が総報酬を押し上げるケースがあるとされます。
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>重要：</strong>これらは投稿者の偏り・職種・等級・株式報酬の有無で大きく変動する参考値です。当サイトでは出典の取れない等級別年収表は掲載しません。具体的なレンジは選考過程で提示されるオファーで確認してください。
            </p>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm">
            参考までに、レバテック公表（2025年）の正社員SE平均年収は30代約499万円・40代約618万円です（出典: レバテック ガイド記事）。外資テックのトップ層はこれを大きく上回る一方、ポジションと評価次第で差が大きい点に留意してください。
          </p>
        </section>

        <section id="flow" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考フロー</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Appleは選考フローを詳細に公式公開していないため、以下は公式採用ポータルの応募方式と、口コミ（OpenWork・転職会議・Yahoo!しごとカタログ等）から一般に知られる範囲の概観です。職種・チームにより内容は大きく異なります。
          </p>
          <ol className="space-y-3">
            {[
              ["1. 応募（jobs.apple.com）", "公式採用ポータルで職種・勤務地を絞り、プロフィール登録のうえ応募。リファラル（社員紹介）経由のルートもあるとされる。"],
              ["2. リクルーター／書類スクリーニング", "経歴・専門性がポジション要件に合致するかを確認。"],
              ["3. 技術面接（複数回）", "コーディング・システム設計・専門領域の深掘りが中心。リモート職ではビデオ通話で実施されることが多いとされる。"],
              ["4. 最終面接・オファー", "面接官の裁量が大きいとの口コミがあり、相性・カルチャーフィットも重視される。条件提示を経て内定。"],
            ].map(([title, desc], i) => (
              <li key={i} className="border border-slate-200 rounded-lg p-4">
                <p className="font-bold text-slate-800 text-sm mb-1">{title}</p>
                <p className="text-sm text-slate-600">{desc}</p>
              </li>
            ))}
          </ol>
          <p className="text-xs text-slate-500 mt-3">※選考フローは非公開部分が多く、上記は口コミ等から一般に知られる範囲です。実際の手順は応募ポジションにより異なります。</p>
        </section>

        <section id="interview" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考で重視される点</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            口コミ傾向から重視されやすい観点を整理します（個別の面接質問の断定は避け、一般に知られる範囲にとどめます）。
          </p>
          <div className="border border-slate-200 rounded-lg p-5">
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>担当領域における深い専門性と、課題解決の具体例</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>コーディング・システム設計の基礎力</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>Appleのプロダクト・ユーザー体験への理解と「なぜApple」への明確な動機</li>
              <li className="flex items-start gap-2"><span className="text-petrol shrink-0">●</span>英語でのコミュニケーション力（多くの職種でビジネスレベル）</li>
            </ul>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm mt-4">
            コーディング対策は<Link href="/knowledge/coding-test/" className="text-petrol hover:underline">コーディングテスト対策ガイド</Link>、設計面接は<Link href="/knowledge/system-design/" className="text-petrol hover:underline">システム設計面接の準備</Link>、外資特有の進め方は<Link href="/knowledge/overseas/" className="text-petrol hover:underline">外資・グローバル転職ガイド</Link>も参考にしてください。
          </p>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3">
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong>「広く浅く」より「狭く深く」が効く企業。</strong>Appleは特定領域の専門性が重視されるため、30代・40代で積み上げてきた深い経験（iOS、低レイヤ、ML等）がそのまま武器になります。年齢そのものより、領域の専門性と英語が揃うかが分かれ目です。
            </p>
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong>事前に覚悟しておきたい2点。</strong>(1) 秘密主義の文化上、入社前に担当業務の詳細が見えにくく、ミスマッチが起きると軌道修正しづらいとの口コミがあります。リファラルや面接で可能な限り情報を引き出す姿勢が重要です。(2) OSS活動や登壇で外向きにブランディングしてきた人にとっては、発信が制限される文化への適応が必要です。
            </p>
            <p className="text-sm text-amber-900 leading-relaxed">
              市場価値の整理は<Link href="/knowledge/market-value/" className="text-petrol hover:underline">エンジニアの市場価値の測り方</Link>、年収交渉は<Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉の進め方</Link>も合わせてご覧ください。
            </p>
          </div>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Apple Japan転職におすすめのエージェント</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "ビズリーチ", href: "/review/bizreach-it/", desc: "ハイクラス・スカウト型。外資や専門職を扱うヘッドハンター経由の案件に出会いやすい。" },
              { name: "レバテックキャリア", href: "/review/levtech/", desc: "IT/Web特化で高年収求人比率が高い。iOS/組み込み等の専門求人も。" },
              { name: "Geekly", href: "/review/geekly/", desc: "IT/Web/ゲーム業界専門。外資系メーカー・専門職の求人も取り扱い。" },
            ].map((agent, i) => (
              <Link key={i} href={agent.href} className="block border border-slate-200 rounded-lg p-4 hover:bg-slate-50 hover:border-petrol transition-colors">
                <h3 className="font-bold text-slate-800 text-sm mb-1">{agent.name}</h3>
                <p className="text-xs text-slate-500">{agent.desc}</p>
              </Link>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">外資は公式応募・リファラルも有力ルートです。併用の考え方は<Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">転職エージェントの併用ガイド</Link>を参照してください。</p>
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
          <h2 className="text-xl font-bold mb-3">Apple Japanへの転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">外資IT企業への転職に強いエージェントに無料相談してみませんか？</p>
          <Link href="/review/levtech/" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">おすすめエージェントを見る</Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Google Japan の転職ガイド", href: "/company/google/" },
              { name: "Amazon Japan の転職ガイド", href: "/company/amazon/" },
              { name: "Microsoft Japan の転職ガイド", href: "/company/microsoft/" },
              { name: "Meta Japan の転職ガイド", href: "/company/meta/" },
              { name: "外資・グローバル転職ガイド", href: "/knowledge/overseas/" },
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
