import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "岐阜のIT転職事情【2026年】製造業・名古屋通勤圏とリモート",
  description:
    "岐阜県のITエンジニア転職を30代・40代向けに解説。製造業の産業集積、名古屋通勤圏という立地、首都圏フルリモート併用、UIターン移住支援（出典付き）、年収の現実を公開情報をもとに正直に整理します。",
};

const toc = [
  { id: "conclusion", label: "結論：岐阜のIT転職市場の現実" },
  { id: "market", label: "岐阜の産業集積とIT・エンジニア求人の特徴" },
  { id: "workstyle", label: "働き方の選択肢（名古屋通勤・移住×リモート）" },
  { id: "iju", label: "UIターン移住支援制度（出典付き）" },
  { id: "salary", label: "年収の考え方（年代別データ）" },
  { id: "agents", label: "岐阜エリアに対応するエージェント" },
  { id: "howto", label: "転職・移住の進め方" },
  { id: "fit", label: "岐阜転職が向いている人・向いていない人" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const fitYes = [
  "製造業のIT・DX、生産システム、組込み・制御系などものづくり寄りの領域に関心がある",
  "名古屋に通勤できる立地で、岐阜の住みやすさ・住居費の安さを活かしたい",
  "首都圏のフルリモート求人を活用し、東海エリアで暮らしたい",
  "UIターンで地元に戻りつつ、東海・首都圏の選択肢も確保したい",
];

const fitNo = [
  "Web/SaaS自社開発の求人を岐阜県内で数多く比較したい（名古屋・首都圏の方が母数が大きい）",
  "出社前提で岐阜県内だけから選びたい（県内の出社求人は数が限られる）",
  "短期間での大幅な年収アップだけを最優先したい（地元求人は提示が控えめな場合がある）",
];

const salaryByAge = [
  { age: "20代", salary: "約378万円", note: "第二新卒〜若手。ポテンシャル採用も見られる層。" },
  { age: "30代", salary: "約499万円", note: "実務リーダー・専門性で評価される中核層。" },
  { age: "40代", salary: "約618万円", note: "マネジメントや高度専門で年収が伸びやすい層。" },
  { age: "50代", salary: "約685万円", note: "管理職・技術顧問など役割で差が大きい層。" },
];

const agents = [
  {
    name: "レバテックキャリア",
    href: "/review/levtech/",
    point:
      "IT/Web特化型。技術理解の高いアドバイザーが特徴で、フルリモート求人を介して岐阜在住のまま首都圏企業を狙う転職と相性が良い。高年収求人比率の高さも特徴とされる。",
  },
  {
    name: "ワークポート",
    href: "/review/workport/",
    point:
      "全国47都道府県57拠点を構える総合型。IT・ゲーム領域に強く、地方在住からの相談に向く。レスポンスの速さに定評があり、未経験歓迎求人も比較的多い。",
  },
  {
    name: "doda ITエンジニア",
    href: "/review/doda-it/",
    point:
      "全国対応の総合型。検索・エージェント・スカウトのハイブリッド型で、岐阜・名古屋の地元求人から首都圏フルリモート求人まで幅広く当たりやすい。求人量の多さが強み。",
  },
  {
    name: "リクルートエージェントIT",
    href: "/review/recruit-it/",
    point:
      "国内最大級の求人数で、非公開求人が豊富。全国対応のため岐阜・東海エリアの求人にもアクセスしやすく、製造業のIT部門や首都圏フルリモートまで網羅している。",
  },
];

const faqs = [
  {
    q: "岐阜県にITエンジニアの求人は多いですか？",
    a: "正直に言えば、岐阜県内のIT・Web求人の母数は名古屋や首都圏に比べると限られます。一方で、岐阜は航空宇宙・自動車部品・刃物・陶磁器など多様な製造業が集積する地域で、製造業のIT部門・社内SE、生産システムや組込み・制御系の求人が一定の層を形成します。加えて名古屋に通勤できる立地のため、名古屋圏の豊富なIT求人を視野に入れられるのが岐阜の強みです。求人数を断定できる公的データは限られるため、最新の件数はエージェントで確認するのが確実です。",
  },
  {
    q: "岐阜のITエンジニアの平均年収はいくらですか？",
    a: "岐阜エリア限定の確定した平均年収データは乏しく、断定は避けます。参考値として、レバテックが公表する正社員SEの年代別平均年収（2025年・全国）は30代で約499万円、40代で約618万円です。地方は額面が首都圏よりやや控えめになる傾向がある一方、岐阜は住居費を抑えやすく名古屋圏の求人も狙えるため、可処分所得で見るとバランスが取りやすい点も踏まえて考えるのが現実的です。",
  },
  {
    q: "岐阜から名古屋に通勤してIT転職するのは現実的ですか？",
    a: "現実的です。岐阜市から名古屋まではJRで20分程度とアクセスが良く、岐阜に住みながら名古屋圏のIT求人で働く選択肢が広く取れます。名古屋は自動車関連を中心にIT・組込みの需要が大きく、岐阜の住みやすさと名古屋の求人量を両立できるのがこの立地の魅力です。出社頻度やオフィス所在地を確認しつつ、通勤負担と生活設計のバランスで判断しましょう。",
  },
  {
    q: "岐阜県の移住支援制度はありますか？",
    a: "岐阜県は移住・定住支援に取り組んでおり、国の地方創生施策と連動した「移住支援金」の対象地域です。内閣府・各市町村の制度では、東京圏から移住し対象法人へ就業した場合やテレワークを継続する場合などに世帯最大100万円程度（単身は60万円程度）が支給される枠組みがあり、子育て世帯は加算される場合があります。県・市町村独自の住宅補助や子育て支援が併用できる場合もあります。金額・要件は年度や市町村で異なるため、岐阜県および移住先市町村の公式サイトで最新の条件を必ず確認してください。",
  },
  {
    q: "岐阜のIT転職におすすめのエージェントは？",
    a: "首都圏フルリモートを狙うならIT/Web特化型のレバテックキャリア、地方・東海在住からの相談しやすさと拠点網ならワークポート、求人量の多さならdodaやリクルートエージェントITが候補です。名古屋圏の求人も視野に入れる場合は、全国対応の総合型を併用すると当たりやすくなります。複数登録して提案傾向を比較するのが基本です。",
  },
  {
    q: "岐阜でフルリモートの求人は見つかりますか？",
    a: "岐阜県内企業のフルリモート求人は数が限られますが、首都圏・名古屋企業のフルリモート求人に岐阜在住のまま応募する方法があります。エージェントに『岐阜在住・フルリモート希望』と明確に伝えると、対象求人を絞り込んでもらいやすくなります。求人票に『リモート可』とあっても運用は企業差が大きいため、週何日出社か、恒久的な制度かを面談で確認しましょう。",
  },
  {
    q: "30代・40代でも岐阜でIT転職できますか？",
    a: "できます。地元の製造業IT・社内SE・生産システム領域では、要件定義から運用まで担える経験やマネジメント力が評価されやすく、名古屋圏まで視野を広げれば求人の母数も確保しやすくなります。経済産業省が2019年3月に公表した試算では2030年に最大約79万人のIT人材不足が見込まれており、東海の製造業でもDX人材の需要は構造的に続くと見られます。",
  },
];

const related = [
  { name: "富山のIT転職事情", href: "/area/toyama/" },
  { name: "フルリモートIT転職ガイド", href: "/area/remote/" },
  { name: "地方移住×IT転職ガイド", href: "/area/iiju/" },
  { name: "フルリモート求人の探し方", href: "/purpose/remote-full/" },
  { name: "リモートワークの実情", href: "/knowledge/remote-work/" },
  { name: "エリア別ガイド一覧", href: "/area/" },
];

export default function GifuAreaPage() {
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
        title="岐阜のIT転職事情【2026年】製造業・名古屋通勤圏とリモート"
        description="岐阜県のITエンジニア転職を30代・40代向けに解説。製造業の産業集積、名古屋通勤圏という立地、首都圏フルリモート併用、UIターン移住支援、年収の現実を整理します。"
        url="/area/gifu/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エリア別ガイド", href: "/area/" },
          { name: "岐阜のIT転職事情" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          岐阜のIT転職事情【2026年】製造業・名古屋通勤圏とリモート
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 岐阜県のITエンジニア転職ガイド
        </p>

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed">
            岐阜県は、航空宇宙・自動車部品・刃物・陶磁器など多様な製造業が集積する地域です。県内のWeb/SaaS自社開発のIT求人の母数は限られるのが現実ですが、岐阜には「名古屋に通勤できる立地」という大きな強みがあります。本記事では、その現実を正直に踏まえたうえで、地元の製造業IT求人、名古屋圏の求人活用、首都圏企業のフルリモート、UIターン移住という、岐阜ならではの価値ある選択肢を公開情報をもとに整理します。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表の年代別平均年収（2025年）",
            "経済産業省 IT人材需給に関する調査（2019年3月公表）",
            "内閣府 地方創生 移住支援金・岐阜県および各市町村の移住支援ページ",
          ]}
        />

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：岐阜のIT転職市場の現実</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              岐阜のIT求人は、県内の母数こそ限られますが、製造業のIT・DX需要、名古屋圏の豊富な求人へのアクセス、首都圏フルリモートの併用という三本柱で価値を出せる市場です。「岐阜に住みながら名古屋・首都圏の求人を狙う」という発想が、選択肢を大きく広げる鍵になります。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>・航空宇宙・自動車部品など製造業のIT・DX・生産システム領域に需要がある</li>
              <li>・名古屋までJRで20分程度。住みやすさと名古屋圏の求人量を両立できる</li>
              <li>・首都圏フルリモート求人の併用で、岐阜在住のまま年収水準の選択肢が広がる</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-lg p-5">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-blue-600 hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 市場 */}
        <section id="market" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">岐阜の産業集積とIT・エンジニア求人の特徴</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            岐阜県は、各務原を中心とした航空宇宙産業、自動車・輸送機器の部品、関の刃物、美濃焼の陶磁器など、多様なものづくりが根づく地域です。こうした製造業の基盤を背景に、生産システムやDX、組込み・制御系、社内SEといったエンジニア求人が見られます。Web/SaaS自社開発の県内求人は数が限られますが、名古屋圏まで視野を広げれば母数が一気に増えるのが岐阜の特徴です。
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">製造業のIT・DX・社内SE</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                航空宇宙・自動車部品・産業機械などの製造業では、基幹システムの開発・運用、生産管理・MES、IoTによる工場のスマート化など、社内SE・DX人材の求人が見られます。地域に根ざした安定就業を重視する人の選択肢になります。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">名古屋通勤圏という立地</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                岐阜市から名古屋まではJRで20分程度。名古屋は自動車関連を中心にIT・組込みの需要が大きく、岐阜に住みながら名古屋圏の求人で働く選択肢が広く取れます。住みやすさと求人量を両立できる点が、他の地方エリアにはない岐阜の強みです。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">岐阜市・大垣市の都市部</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                岐阜市や、ソフトピアジャパンを擁する大垣市にはSIerや受託開発、IT関連企業が見られます。ただし母数は名古屋・首都圏ほど多くないため、県内の出社求人だけで幅広く比較したい場合は求人数の制約を前提に動くのが現実的です。
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            ※ 上記は公開情報に基づく一般的な傾向の整理です。特定企業の求人数・採用数の断定は避けています。
          </p>
        </section>

        {/* 働き方 */}
        <section id="workstyle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">働き方の選択肢（名古屋通勤・移住×リモート）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            岐阜で働くエンジニアの選択肢は、大きく次の3つに整理できます。名古屋通勤圏という立地を活かせるのが、岐阜ならではのポイントです。
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">A</span>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>地元の製造業IT・社内SEに出社/ハイブリッド:</strong> 生産システムやDXなど、岐阜の産業特性を活かせる領域。地域に根ざしたキャリアを重視する人向けです。
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">B</span>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>岐阜在住×名古屋圏に通勤:</strong> 岐阜の住みやすさを保ちつつ、JRで名古屋圏のIT・組込み求人に通う働き方。求人量を確保したい人向けです。
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">C</span>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>岐阜在住×首都圏企業のフルリモート:</strong> 岐阜の生活コストを保ちつつ首都圏水準の年収を狙う選択肢。
                <Link href="/purpose/remote-full/" className="text-blue-600 hover:underline">フルリモート求人の探し方</Link>
                や
                <Link href="/area/iiju/" className="text-blue-600 hover:underline">地方移住×IT転職ガイド</Link>
                もあわせて検討しましょう。
              </p>
            </div>
          </div>
        </section>

        {/* 移住支援 */}
        <section id="iju" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">UIターン移住支援制度（出典付き）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            岐阜県は移住・定住支援に取り組んでおり、国の地方創生施策と連動した支援が利用できる場合があります。代表的なのが「移住支援金」です。
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・<strong>移住支援金:</strong> 内閣府の地方創生施策に基づき、東京圏（条件不利地域を除く）から岐阜県内の対象市町村へ移住し、対象法人への就業やテレワーク継続、起業などの要件を満たすと、世帯で最大100万円程度・単身で60万円程度が支給される枠組みがあります。18歳未満の子どもがいる世帯は加算がある場合があります。</li>
              <li>・<strong>テレワーク移住:</strong> 首都圏企業の業務を移住後も続ける「テレワーク」を支援金の対象とする市町村があり、フルリモートのIT職と相性が良い制度です。</li>
              <li>・<strong>市町村独自の補助:</strong> 住宅取得・改修補助、子育て支援、空き家バンクなど、市町村ごとに独自制度が用意されている場合があります。</li>
            </ul>
            <p className="text-xs text-slate-500 mt-4">
              ※ 金額・対象要件・対象法人は年度や市町村によって異なります。必ず岐阜県および移住先市町村の公式サイトで最新の条件を確認してください（出典: 内閣府 地方創生「移住支援金」、岐阜県および各市町村の移住支援ページ）。
            </p>
          </div>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方（年代別データ）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            岐阜エリア固有の平均年収を断定できる公的データは限られます。ここでは、レバテックが公表する正社員SEの年代別平均年収（2025年・全国）を参考値として示します。地方は額面が首都圏よりやや控えめになる傾向がある一方、生活コストの差を加味して考えるのが現実的です。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-sm border-collapse min-w-[560px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">年代</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">正社員SE平均年収（2025年・全国）</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">補足</th>
                </tr>
              </thead>
              <tbody>
                {salaryByAge.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-3 py-3 border border-slate-200 font-medium">{row.age}</td>
                    <td className="px-3 py-3 border border-slate-200 font-bold text-blue-600">{row.salary}</td>
                    <td className="px-3 py-3 border border-slate-200 text-slate-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-4">
            ※ 出典: レバテック公表の年代別平均年収（2025年・正社員SE）。年収1,000万円以上の割合は30代8.01%・40代12.67%とされています。いずれも全国の値で、岐阜エリア限定の数値ではありません。
          </p>
          <p className="text-slate-600 leading-relaxed">
            岐阜で年収を考えるときは、額面と生活コストのバランスが鍵です。住居費を抑えやすいエリアでは同じ額面でも可処分所得が増えやすく、名古屋圏や首都圏フルリモートの求人を選べば、岐阜の生活コストのまま高めの額面を狙える可能性もあります。年代別の考え方は
            <Link href="/age/30s/" className="text-blue-600 hover:underline">30代の転職</Link>
            ・
            <Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職</Link>
            も参考にしてください。
          </p>
        </section>

        {/* エージェント */}
        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">岐阜エリアに対応するエージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            岐阜での転職は、首都圏フルリモート求人に強いIT特化型と、名古屋圏・全国の求人に当たれる総合型を組み合わせるのが基本戦略です。名古屋圏の求人を確保したい場合は、求人量の多い総合型を併用すると当たりやすくなります。
          </p>
          <div className="space-y-4">
            {agents.map((a, i) => (
              <div key={i} className="bg-blue-50 rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-2">
                  {i + 1}.{" "}
                  <Link href={a.href} className="hover:underline">
                    {a.name}
                  </Link>
                </h3>
                <p className="text-sm text-blue-700 leading-relaxed">{a.point}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">
            ※ 各社の対応エリア・求人傾向は時点により変動します。
          </p>
        </section>

        {/* 進め方 */}
        <section id="howto" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">転職・移住の進め方</h2>
          <div className="space-y-3">
            {[
              { step: "1", title: "軸を決める", desc: "「地元の製造業IT」「名古屋圏に通勤」「首都圏フルリモート」のどれを中心に据えるかを先に決める。提案される求人の質が変わります。" },
              { step: "2", title: "エージェントを2〜3社登録", desc: "フルリモートに強いIT特化型と、名古屋圏・全国に強い総合型を組み合わせて提案傾向を比較します。県内求人が限られる前提で母数を確保しましょう。" },
              { step: "3", title: "移住支援制度を確認", desc: "移住・UIターンを伴う場合は、移住先市町村の移住支援金・住宅補助などの最新条件を公式サイトで確認します。テレワーク移住が対象かも要チェックです。" },
              { step: "4", title: "出社要件・通勤を確認", desc: "求人ごとの出社頻度やオフィス所在地を確認し、名古屋通勤の負担や住居費を試算します。" },
              { step: "5", title: "額面＋生活コストで意思決定", desc: "複数の提案を比べ、額面だけでなく生活コスト・働き方・通勤・移住支援を含めて総合判断します。" },
            ].map((s, i) => (
              <div key={i} className="flex items-start gap-3 border border-slate-200 rounded-lg p-4">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-800 text-white text-xs font-bold shrink-0">{s.step}</span>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm mb-1">{s.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 向き不向き */}
        <section id="fit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">岐阜転職が向いている人・向いていない人</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            エリアには「合う・合わない」があります。岐阜の市場特性を踏まえ、どんな志向の人が力を発揮しやすいかを整理しました。あくまで傾向であり、最終的には個々の求人とのマッチングで判断するのが基本です。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 text-sm mb-3">向いている人</h3>
              <ul className="space-y-2">
                {fitYes.map((t, i) => (
                  <li key={i} className="text-sm text-green-900 leading-relaxed flex gap-2">
                    <span className="shrink-0">✓</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-slate-200 bg-slate-50 rounded-lg p-5">
              <h3 className="font-bold text-slate-700 text-sm mb-3">慎重に検討したい人</h3>
              <ul className="space-y-2">
                {fitNo.map((t, i) => (
                  <li key={i} className="text-sm text-slate-700 leading-relaxed flex gap-2">
                    <span className="shrink-0">−</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            「慎重に検討したい人」に当てはまっても、岐阜に住みながら名古屋圏に通勤する、あるいは首都圏のフルリモート求人を狙えば、希望と地域を両立できる場合があります。通勤許容範囲や出社頻度を面談で言語化しておくと、提案のミスマッチを防げます。
          </p>
        </section>

        {/* 30代40代 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            岐阜は、30代・40代のミドルエンジニアが「住みやすさ」と「求人量」を両立しやすい市場です。名古屋圏に通う道も、地元の製造業ITで専門性を深める道も、首都圏フルリモートで年収水準を保つ道も選べます。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">30代の進め方</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                技術の市場価値を高めながら、名古屋圏のIT・組込みで経験を積むか、首都圏フルリモートで幅を広げるかを意識的に選ぶフェーズ。住みやすい岐阜で生活基盤を整えやすい時期でもあります。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">40代の進め方</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                マネジメントや高度専門など役割で評価される段階。県内求人が限られる前提で、名古屋通勤やフルリモート併用により選択肢を確保しつつ、生活設計と両立する形を選ぶのが現実的です。
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            年代別の市場感は
            <Link href="/age/30s/" className="text-blue-600 hover:underline">30代の転職</Link>
            ・
            <Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職</Link>
            、リモート前提の働き方は
            <Link href="/knowledge/remote-work/" className="text-blue-600 hover:underline">リモートワークの実情</Link>
            もあわせてご覧ください。
          </p>
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
          <h2 className="text-xl font-bold mb-3">岐阜のIT転職を進めよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            地元の製造業ITから名古屋圏、首都圏フルリモート、UIターン移住まで。エリア対応のエージェントに相談して、住みやすさと年収のバランスが取れる選択肢を見つけましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors"
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
