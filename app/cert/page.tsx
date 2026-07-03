import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "エンジニアの資格は転職に有利？30・40代におすすめ8資格を比較【2026年】";
const PAGE_DESC =
  "30代・40代エンジニアの転職で資格は本当に有利か。PMP・情報処理安全確保支援士・AWS認定など主要8資格を合格率・年収・有効期限で比較し、目的別マトリクスと『実務×資格』の活かし方を公的データで解説します。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：30-40代は資格より実務、資格は補強材" },
  { id: "kokka-vendor", label: "国家資格とベンダー資格の違い" },
  { id: "compare", label: "主要8資格 一覧比較表" },
  { id: "matrix", label: "目的別おすすめマトリクス" },
  { id: "kakezan", label: "30-40代の価値＝実務×資格の掛け算" },
  { id: "demerit", label: "資格取得のデメリット・限界" },
  { id: "middle", label: "30代・40代の視点" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "40代から資格を取る意味はありますか？",
    a: "あります。ただし「資格単体で評価が上がる」発想ではなく、これまでの実務経験を客観的に裏づける目的で取るのが40代の正解です。たとえばPM経験があるならPMP、運用・監査の経験があるなら情報処理安全確保支援士、オンプレ実務があるならAWS認定というように、既にある経験と掛け算できる資格を選ぶと費用対効果が高くなります。逆に未経験入口資格（基本情報・CCNA・LPIC）を40代で単体取得しても、年齢に見合う実務がなければ評価は限定的です。",
  },
  {
    q: "無資格でもエンジニア転職はできますか？",
    a: "可能です。30-40代の中途採用で最も見られるのは実務経験・プロジェクト実績であり、資格は必須要件でないことがほとんどです。経済産業省「IT人材需給に関する調査」（2019年3月公表）は2030年に最大約79万人のIT人材不足を試算しており、実務経験者の需要は高い状態が続いています。資格は「書類選考の通過率を少し上げる」「学習意欲・基礎知識の証明になる」補助的な武器と捉えるのが現実的です。",
  },
  {
    q: "資格は複数取るべきですか？",
    a: "数を競う必要はありません。むしろ「自分のキャリアの方向性に沿って1〜2個を深く」が原則です。たとえばマネジメント志向ならPMP＋応用情報、クラウド志向ならAWS認定（SAA→上位）＋LPIC/LinuC、セキュリティ志向なら応用情報→情報処理安全確保支援士といった『関連する組み合わせ』が評価されます。バラバラな資格を並べても一貫したキャリアストーリーにならず、面接で深掘りされたときに弱くなります。",
  },
  {
    q: "国家資格とベンダー資格はどちらが有利ですか？",
    a: "目的が違うため一概には比べられません。国家資格（IPA系の応用情報・支援士など）は普遍的で基本的に有効期限がなく（支援士は維持要件あり）、上流・公共系で評価されやすい一方、ベンダー資格（AWS・Cisco・LPI）は実務に直結し技術力の証明になりますが有効期限があります（AWS・CCNAは3年、LPIC/LinuCは5年）。クラウド・インフラの現場ではベンダー資格、設計・PM・公共系では国家資格が効きやすい傾向です。",
  },
  {
    q: "資格手当はどのくらい付きますか？",
    a: "企業によって大きく異なり、当サイトでは具体的な金額を保証できません。一般に資格手当や報奨金（合格時の一時金）を設ける企業は存在しますが、金額・対象資格は各社の制度次第です。求人票や面接で「資格手当の有無・対象資格・金額」を確認するのが確実です。手当目当てよりも、資格で得た知識を実務で使えることのほうが長期の年収には効きます。",
  },
];

const certTable = [
  ["PMP", "ベンダー（PMI）", "180問・3時間50分", "PMI公式は非公表（難易度高）", "3年ごと60PDU", "PM・マネジメント志向の経験者", "/cert/pmp/"],
  ["情報処理安全確保支援士", "国家（IPA）", "午前Ⅰ/Ⅱ＋午後記述", "2025秋22.3%・春19.0%", "登録更新・年次講習（維持費あり）", "セキュリティ実務のある経験者", "/cert/security-specialist/"],
  ["AWS認定（SAA）", "ベンダー（AWS）", "65問・130分", "AWS公式は非公表", "3年", "クラウド・インフラ実務者", "/cert/aws/"],
  ["応用情報技術者", "国家（IPA）", "午前80問＋午後記述", "2025秋24.5%・春22.1%", "なし", "上流・設計へ進みたい経験者", null],
  ["基本情報技術者", "国家（IPA）", "科目A＋科目B（CBT通年）", "新制度平均約47.1%", "なし", "異業種→IT転職のミドル", null],
  ["CCNA", "ベンダー（Cisco）", "120分", "非公開（通説の目安あり）", "3年", "インフラ未経験〜若手の入口", null],
  ["LPIC / LinuC", "ベンダー（LPI / LPI-Japan）", "レベル1＝101＋102の2試験", "LPIC合格500/800点", "5年", "Linux・インフラ入口", null],
  ["LPIC上位 / 応用×実務", "—", "—", "—", "—", "経験者の上積み", null],
];

export default function CertTopPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/cert/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エンジニア資格と転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エンジニアの資格は転職に有利？30・40代におすすめ8資格を比較【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 主要8資格を合格率・年収・有効期限で比較し、30代・40代の活かし方を解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          「エンジニアの転職で資格は有利か」という問いに対し、本記事は<strong>30代・40代のミドル層という前提で結論を言い切ります</strong>。資格の有無だけを並べる比較ではなく、年代・経験の有無で資格の価値がどう変わるかを、PMI公式や経済産業省・IPAなどの一次データをもとに整理しました。各資格の詳細ページへのハブとしてもご利用ください。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "PMI Salary Survey 13th Edition（2023）",
            "経済産業省 IT関連産業の給与等に関する実態調査",
            "IPA 情報処理技術者試験 令和7年度実施結果",
            "国税庁 民間給与実態統計調査（令和6年分）",
            "本サイト データシート（2026年6月）",
          ]}
        />

        {/* 目次 */}
        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
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
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：30-40代は資格より実務、資格は補強材</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              先に結論です。<strong>30代・40代の転職では、評価の中心はあくまで実務経験であり、資格はそれを客観的に裏づける「補強材」です。</strong>資格単体で年収が跳ね上がることは稀で、最も効くのは「実務×資格の掛け算」です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① 既にある実務に<strong>掛け算できる資格</strong>を選ぶ（PM経験→PMP、運用・監査→支援士、オンプレ→AWS）</li>
              <li>② <strong>経験者加点資格</strong>（PMP・支援士・応用情報・AWS）と<strong>未経験入口資格</strong>（基本情報・CCNA・LPIC）を分けて考える</li>
              <li>③ 数を集めるより、<strong>キャリアの方向に沿って1〜2個を深く</strong>取り、面接で語れる状態にする</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-3 text-sm">
              この「実務×資格・経験者加点」という軸を、以降の各資格ページでも一貫して使います。
            </p>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            背景として、IT人材の需給は逼迫が続いています。経済産業省「IT人材需給に関する調査」（2019年3月公表）は、2030年に最大約79万人のIT人材が不足すると試算しました。これは実務経験を持つエンジニアにとって追い風で、<strong>資格がなくても経験があれば転職市場で評価される土壌がある</strong>ことを意味します。だからこそ「資格を取ること」自体を目的化せず、「実務をどう見せるか」を主軸に据えるべきなのです。本記事では、その主軸を補強する手段として各資格を位置づけて解説します。
          </p>
        </section>

        {/* 国家 vs ベンダー */}
        <section id="kokka-vendor" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">国家資格とベンダー資格の違い</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            資格は大きく「国家資格（IPA系）」と「ベンダー資格」に分かれ、性質がまったく違います。どちらが上ということではなく、<strong>狙う領域で使い分ける</strong>のが正解です。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">国家資格（IPA系）</h3>
              <ul className="text-sm text-slate-600 space-y-1.5 list-disc pl-4">
                <li>基本情報・応用情報・情報処理安全確保支援士など</li>
                <li>知識が普遍的で<strong>基本的に有効期限なし</strong>（支援士のみ登録更新・維持要件あり）</li>
                <li>上流・設計・公共系で評価されやすい</li>
                <li>体系的な基礎知識の証明になる</li>
              </ul>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2 text-sm">ベンダー資格</h3>
              <ul className="text-sm text-slate-600 space-y-1.5 list-disc pl-4">
                <li>AWS認定・CCNA（Cisco）・LPIC/LinuC（LPI）など</li>
                <li>実務に直結し技術力を示せるが<strong>有効期限あり</strong>（AWS・CCNAは3年、LPIC/LinuCは5年）</li>
                <li>クラウド・インフラの現場で評価されやすい</li>
                <li>製品・技術のバージョン更新に追従が必要</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed mt-3">
            有効期限の出典: 各認定の公式情報（AWS Certification、Cisco、LPI/LPI-Japan、2026年6月時点）。維持要件は変更される場合があるため、受験前に各公式で最新条件をご確認ください。
          </p>
        </section>

        {/* 比較表 */}
        <section id="compare" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">主要8資格 一覧比較表</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            30-40代の転職でよく検討される8資格を、性質・難易度・有効期限・向いている人で整理しました。詳細ページがある資格はリンクから深掘りできます。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-x-auto mb-3">
            <table className="w-full text-xs md:text-sm min-w-[760px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-3 py-3 text-left font-medium text-slate-700 border-b border-slate-200">資格</th>
                  <th className="px-3 py-3 text-left font-medium text-slate-700 border-b border-slate-200">種別（主催）</th>
                  <th className="px-3 py-3 text-left font-medium text-slate-700 border-b border-slate-200">形式</th>
                  <th className="px-3 py-3 text-left font-medium text-slate-700 border-b border-slate-200">合格率の目安</th>
                  <th className="px-3 py-3 text-left font-medium text-slate-700 border-b border-slate-200">有効期限</th>
                  <th className="px-3 py-3 text-left font-medium text-slate-700 border-b border-slate-200">向いている人</th>
                </tr>
              </thead>
              <tbody>
                {certTable.map(([name, type, form, rate, exp, target, href], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-3 py-3 text-slate-700 border-b border-slate-200 font-medium">
                      {href ? (
                        <Link href={href} className="text-petrol hover:underline">{name}</Link>
                      ) : (
                        name
                      )}
                    </td>
                    <td className="px-3 py-3 text-slate-600 border-b border-slate-200">{type}</td>
                    <td className="px-3 py-3 text-slate-600 border-b border-slate-200">{form}</td>
                    <td className="px-3 py-3 text-slate-600 border-b border-slate-200">{rate}</td>
                    <td className="px-3 py-3 text-slate-600 border-b border-slate-200">{exp}</td>
                    <td className="px-3 py-3 text-slate-600 border-b border-slate-200">{target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            出典: 合格率はIPA 情報処理技術者試験 令和7年度実施結果（応用情報・支援士）、基本情報はIPA公表の新制度合格率の集計値。PMP・AWS・CCNAの合格点・合格率は各主催が非公表のため断定を避けています。表内の「向いている人」は当サイトの編集方針に基づく整理です。
          </p>
          <div className="mt-5 space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>
              比較表だけでは伝わりにくい「各資格の立ち位置」を、30-40代の転職という前提で補足します。<strong>PMP</strong>は受験資格にPM実務36ヶ月以上（大卒）を求めるため、そもそもミドル以上を想定した資格です。実務の裏づけがある人ほど真価が出ます。<strong>情報処理安全確保支援士</strong>はセキュリティ分野で唯一の国家資格で、サイバー攻撃の増加を背景に需要が伸びている一方、登録には継続的な維持費がかかる点に注意が必要です。
            </p>
            <p>
              <strong>AWS認定（SAA）</strong>と<strong>応用情報技術者</strong>は、いずれも「経験者が一段上へ行くための上積み」として機能します。AWSはクラウド・インフラの実務に、応用情報は上流・設計の土台にそれぞれ効きます。これに対し<strong>基本情報技術者・CCNA・LPIC/LinuC</strong>は、主に未経験〜若手の入口資格です。30-40代がこれらを単体で取得しても、年齢に見合う実務がなければ武器になりにくく、「異業種からのIT転向で最低限の知識を示す」用途に向きます。
            </p>
            <p>
              つまり同じ「資格」でも、<strong>経験者の信頼性を底上げするもの</strong>と<strong>未経験者が土俵に上がるためのもの</strong>とで役割がはっきり分かれます。自分がどちらの立場かを先に決めることが、資格選びの出発点になります。
            </p>
          </div>
        </section>

        {/* 目的別マトリクス */}
        <section id="matrix" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">目的別おすすめマトリクス</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            「どの資格を取るか」は、目指す方向で決めます。代表的な4方向の対応表です。資格は「とりあえず人気だから」ではなく、<strong>5年後にどんな仕事をしていたいか</strong>から逆算して選ぶと失敗しません。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2 text-sm">マネジメントに進みたい</h3>
              <p className="text-sm text-petrol-deep mb-2">PM・PdM・上流志向なら<strong>PMP</strong>。受験資格自体がPM実務を求めるため、構造的にミドル向けです。</p>
              <Link href="/cert/pmp/" className="text-sm text-petrol-deep underline">PMPの詳細を見る →</Link>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2 text-sm">セキュリティで信頼性を示したい</h3>
              <p className="text-sm text-petrol-deep mb-2">運用・監査の実務がある経験者なら国家資格の<strong>情報処理安全確保支援士</strong>。</p>
              <Link href="/cert/security-specialist/" className="text-sm text-petrol-deep underline">支援士の詳細を見る →</Link>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2 text-sm">クラウドへ寄せたい</h3>
              <p className="text-sm text-petrol-deep mb-2">オンプレ・インフラ実務がある人は<strong>AWS認定（SAA→上位）</strong>で掛け算。</p>
              <Link href="/cert/aws/" className="text-sm text-petrol-deep underline">AWS認定の詳細を見る →</Link>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2 text-sm">インフラ未経験から入口を作りたい</h3>
              <p className="text-sm text-petrol-deep mb-2"><strong>CCNA・LPIC/LinuC</strong>が入口。ただし30-40代未経験は「なぜこの年齢でIT転職か」の納得感が要ります。</p>
              <Link href="/skill/infrastructure/" className="text-sm text-petrol-deep underline">インフラ転職ガイド →</Link>
            </div>
          </div>
        </section>

        {/* 資格別 詳細ガイド一覧 */}
        <section id="all-guides" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">資格別 詳細ガイド一覧</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            当サイトで個別に解説している資格ガイドの一覧です。受験料・試験形式・合格率（公表値）・30-40代の転職での活かし方を、各ページで公式情報の出典付きで整理しています。
          </p>
          <p className="text-sm mb-4"><Link href="/cert/compare/" className="text-petrol-deep font-medium hover:underline">▶ 32資格の受験料・合格率を一覧で横断比較する（IT資格 比較データ）</Link></p>
          <p className="text-sm mb-4"><Link href="/cert/salary/" className="text-petrol-deep font-medium hover:underline">▶ 資格別の想定年収・資格手当データを見る（基本情報・支援士・AWS等）</Link></p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3 text-sm">国家試験（IPA）</h3>
              <ul className="text-sm space-y-1.5">
                {[
                  ["ITパスポート", "/cert/it-passport/"],
                  ["基本情報技術者", "/cert/basic-info/"],
                  ["情報セキュリティマネジメント", "/cert/info-sec-management/"],
                  ["応用情報技術者", "/cert/applied-info/"],
                  ["ネットワークスペシャリスト", "/cert/network-specialist/"],
                  ["データベーススペシャリスト", "/cert/database-specialist/"],
                  ["情報処理安全確保支援士", "/cert/security-specialist/"],
                  ["プロジェクトマネージャ", "/cert/project-manager/"],
                  ["システムアーキテクト", "/cert/system-architect/"],
                  ["システム監査技術者", "/cert/system-auditor/"],
                  ["エンベデッドシステムスペシャリスト", "/cert/embedded-systems/"],
                  ["ITストラテジスト", "/cert/it-strategist/"],
                  ["ITサービスマネージャ", "/cert/it-service-manager/"],
                ].map(([name, href]) => (
                  <li key={href}><Link href={href} className="text-petrol hover:underline">{name}</Link></li>
                ))}
              </ul>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3 text-sm">クラウド（AWS / Azure / GCP）</h3>
              <ul className="text-sm space-y-1.5">
                {[
                  ["AWS認定（総論）", "/cert/aws/"],
                  ["AWS SAA（ソリューションアーキテクト アソシエイト）", "/cert/aws-saa/"],
                  ["AWS SAP（同 プロフェッショナル）", "/cert/aws-sap/"],
                  ["AWS DVA（デベロッパー アソシエイト）", "/cert/aws-dva/"],
                  ["AWS SOA（SysOps アソシエイト）", "/cert/aws-soa/"],
                  ["Azure Fundamentals（AZ-900）", "/cert/azure-fundamentals/"],
                  ["Azure Administrator（AZ-104）", "/cert/azure-administrator/"],
                  ["Azure Solutions Architect（AZ-305）", "/cert/azure-solutions-architect/"],
                  ["Google Cloud ACE（アソシエイト）", "/cert/gcp-ace/"],
                  ["Google Cloud PCA（プロフェッショナル）", "/cert/gcp-pca/"],
                ].map(([name, href]) => (
                  <li key={href}><Link href={href} className="text-petrol hover:underline">{name}</Link></li>
                ))}
              </ul>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3 text-sm">ベンダー・言語・基盤</h3>
              <ul className="text-sm space-y-1.5">
                {[
                  ["CCNA（Cisco）", "/cert/ccna/"],
                  ["CCNP（Cisco）", "/cert/ccnp/"],
                  ["LPIC（LPI）", "/cert/lpic/"],
                  ["LinuC（LPI-Japan）", "/cert/linuc/"],
                  ["Oracle Java Silver", "/cert/oracle-java-silver/"],
                  ["Oracle Java Gold", "/cert/oracle-java-gold/"],
                  ["CKA（Kubernetes）", "/cert/cka/"],
                  ["Terraform Associate", "/cert/terraform-associate/"],
                  ["CISSP（情報セキュリティ）", "/cert/cissp/"],
                ].map(([name, href]) => (
                  <li key={href}><Link href={href} className="text-petrol hover:underline">{name}</Link></li>
                ))}
              </ul>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-3 text-sm">マネジメント・AI</h3>
              <ul className="text-sm space-y-1.5">
                {[
                  ["PMP（プロジェクトマネジメント）", "/cert/pmp/"],
                  ["G検定（JDLA ディープラーニング）", "/cert/g-kentei/"],
                ].map(([name, href]) => (
                  <li key={href}><Link href={href} className="text-petrol hover:underline">{name}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 掛け算 */}
        <section id="kakezan" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30-40代の価値＝実務×資格の掛け算</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            ミドル層の市場価値は「資格を持っているか」より「<strong>その資格の知識を、過去の実務でどう使ってきたか／これから使えるか</strong>」で決まります。当サイトはこれを「実務×資格の掛け算」と呼んでいます。20代であれば資格はポテンシャルや学習意欲の証明として単体でも一定の意味を持ちますが、30-40代は「即戦力かどうか」が問われるため、資格を実務と結びつけて語れない限り評価につながりにくいのが現実です。
          </p>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            採用側の視点に立つと分かりやすくなります。ミドルの中途採用で見ているのは「入社後すぐに、どの領域で、どの程度のアウトプットを出せるか」です。資格はその予測の精度を上げる材料の一つにすぎません。逆に言えば、<strong>実務という土台があるところに資格を載せると、採用側の不安を減らし、提示年収のレンジを引き上げる効果が期待できます</strong>。資格はゼロから価値を生むのではなく、既にある価値を「見えやすくする」道具だと捉えるのが正確です。
          </p>
          <div className="space-y-3">
            {[
              { t: "経験者加点資格（30-40代に効く）", d: "PMP・情報処理安全確保支援士・応用情報・AWS認定。これらは実務経験とセットで初めて真価を発揮し、面接で『この場面で使った』と語れると強い。" },
              { t: "未経験入口資格（主に若手・異業種向け）", d: "基本情報・CCNA・LPIC/LinuC。基礎知識の証明としては有効だが、30-40代が単体で取得しても、年齢に見合う実務がなければ評価は限定的になりやすい。" },
              { t: "掛け算の例", d: "オンプレ運用5年×AWS SAA→クラウド移行案件。PM実務3年×PMP→高単価PM案件のフィルタ通過。インフラ運用×支援士→セキュリティ運用の信頼性。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            職種側の市場感は<Link href="/skill/pm/" className="text-petrol hover:underline">PM（プロジェクトマネージャー）転職ガイド</Link>、<Link href="/skill/security/" className="text-petrol hover:underline">セキュリティエンジニア転職ガイド</Link>、<Link href="/skill/aws/" className="text-petrol hover:underline">AWSエンジニア転職ガイド</Link>も合わせてご覧ください。
          </p>
        </section>

        {/* デメリット */}
        <section id="demerit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">資格取得のデメリット・限界</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>① <strong>資格単体では年収は上がりにくい。</strong>採用側が見るのは再現性のある実務であり、資格はあくまで補助。「取れば年収UP」という期待はミスマッチを生みます。</p>
            <p>② <strong>有効期限・維持費がかかる資格がある。</strong>AWS・CCNAは3年、LPIC/LinuCは5年で再認定が必要。情報処理安全確保支援士は登録更新と年次講習に継続的な費用がかかります（詳細は各ページ）。</p>
            <p>③ <strong>学習時間という機会費用。</strong>方向性に合わない資格に時間を使うと、実務でのアウトプットや成果物づくりの時間を失います。</p>
            <p>④ <strong>「資格コレクター」化のリスク。</strong>一貫性のない資格を並べると、面接でキャリアの軸が見えず逆効果になることがあります。</p>
          </div>
        </section>

        {/* ミドル視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の視点</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              ミドルの転職では、資格を「これまでの自分を説明する道具」として使うと最も効きます。職務経歴書に資格名を書くだけでなく、<strong>その知識をどの案件でどう使ったかを1〜2行添える</strong>だけで、書類の説得力が変わります。たとえば「AWS SAA取得」とだけ書くより「オンプレ基盤の運用経験を活かし、SAAで学んだマルチAZ設計をクラウド移行の冗長化設計に適用」と書くほうが、面接官に具体的な働き方が伝わります。
            </p>
            <p>
              また、未経験から30-40代でIT転職する場合は、入口資格（基本情報・CCNA・LPIC）に加えて「なぜこの年齢で転向するのか」「前職の何が活きるのか」の物語が不可欠です。資格はその物語を補強する材料であって、物語の代わりにはなりません。前職が営業なら顧客折衝力、製造なら品質管理や現場改善の視点といったように、IT以外の経験を「移ってもなお活きる強み」として言語化したうえで、資格で基礎知識を補えば、年齢のハンデは相当程度埋められます。
            </p>
            <p>
              一点、ミドルが陥りやすい罠が「資格の取りすぎ」です。学習自体は良いことですが、転職活動の文脈では一貫性のない資格が並ぶと「結局この人は何をしたいのか」が伝わらず、かえってマイナスに働くことがあります。<strong>方向性に沿って1〜2個を深く取り、面接で語れる状態にする</strong>ことを優先してください。
            </p>
            <p>
              年代別の市場感は<Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職</Link>、自分の立ち位置の測り方は<Link href="/knowledge/market-value/" className="text-petrol hover:underline">自分の市場価値の調べ方</Link>、マネジメント志向の方は<Link href="/knowledge/management/" className="text-petrol hover:underline">マネジメントへのキャリア</Link>も参考になります。
            </p>
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
          <h2 className="text-xl font-bold mb-3">資格を活かした転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            「実務×資格」をどう見せれば評価されるか。IT特化型エージェントであなたの市場価値を確認しましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "PMP資格と転職｜価値・年収", href: "/cert/pmp/" },
              { name: "情報処理安全確保支援士と転職", href: "/cert/security-specialist/" },
              { name: "AWS認定資格と転職", href: "/cert/aws/" },
              { name: "PM（プロジェクトマネージャー）転職ガイド", href: "/skill/pm/" },
              { name: "セキュリティエンジニア転職ガイド", href: "/skill/security/" },
              { name: "AWSエンジニア転職ガイド", href: "/skill/aws/" },
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
