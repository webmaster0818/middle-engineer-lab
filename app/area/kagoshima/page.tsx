import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "鹿児島のIT転職事情【2026年】南九州のIT誘致とリモート移住",
  description:
    "鹿児島県のITエンジニア転職を30代・40代向けに解説。南九州のIT企業誘致・サテライトオフィスの動き、首都圏フルリモート併用、UIターン移住支援（出典付き）、年収の現実を公開情報をもとに正直に整理します。",
};

const toc = [
  { id: "conclusion", label: "結論：鹿児島のIT転職市場の現実" },
  { id: "market", label: "鹿児島の産業・IT誘致とエンジニア求人の特徴" },
  { id: "workstyle", label: "働き方の選択肢（地元・移住×リモート）" },
  { id: "iju", label: "UIターン移住支援制度（出典付き）" },
  { id: "salary", label: "年収の考え方（年代別データ）" },
  { id: "agents", label: "鹿児島エリアに対応するエージェント" },
  { id: "howto", label: "転職・移住の進め方" },
  { id: "fit", label: "鹿児島転職が向いている人・向いていない人" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const fitYes = [
  "首都圏のフルリモート求人を活用し、自然豊かな南九州で暮らしたい",
  "サテライトオフィスやニアショア開発など、地方のIT拠点で働きたい",
  "UIターンで地元・南九州に戻りつつ、首都圏水準の仕事を続けたい",
  "住居費を抑え、可処分所得やQOLを重視した移住を考えている",
];

const fitNo = [
  "Web/SaaS自社開発の求人を地元で数多く比較したい（首都圏・福岡の方が母数が大きい）",
  "出社前提で多くの選択肢から選びたい（鹿児島県内の出社求人は数が限られる）",
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
      "IT/Web特化型。技術理解の高いアドバイザーが特徴で、フルリモート求人を介して鹿児島在住のまま首都圏企業を狙う転職と相性が良い。高年収求人比率の高さも特徴とされる。",
  },
  {
    name: "ワークポート",
    href: "/review/workport/",
    point:
      "全国47都道府県57拠点を構える総合型。IT・ゲーム領域に強く、九州・地方在住からの相談に向く。レスポンスの速さに定評があり、未経験歓迎求人も比較的多い。",
  },
  {
    name: "doda ITエンジニア",
    href: "/review/doda-it/",
    point:
      "全国対応の総合型。検索・エージェント・スカウトのハイブリッド型で、鹿児島・福岡の地元求人から首都圏フルリモート求人まで幅広く当たりやすい。求人量の多さが強み。",
  },
  {
    name: "リクルートエージェントIT",
    href: "/review/recruit-it/",
    point:
      "国内最大級の求人数で、非公開求人が豊富。全国対応のため九州エリアの求人にもアクセスしやすく、地方拠点から首都圏フルリモートまで網羅している。",
  },
];

const faqs = [
  {
    q: "鹿児島県にITエンジニアの求人は多いですか？",
    a: "正直に言えば、鹿児島県内のIT・Web求人の母数は首都圏や福岡に比べると限られます。一方で、鹿児島は南九州のIT誘致やサテライトオフィスの取り組みが進められてきた地域で、誘致された企業の開発拠点・コールセンター連携のシステム、地元の受託・社内SEなどの求人が一定の層を形成します。求人数を断定できる公的データは限られるため、最新の件数はエージェントで確認するのが確実です。地元求人にこだわらず、首都圏企業のフルリモート求人を組み合わせると選択肢が大きく広がります。",
  },
  {
    q: "鹿児島のITエンジニアの平均年収はいくらですか？",
    a: "鹿児島エリア限定の確定した平均年収データは乏しく、断定は避けます。参考値として、レバテックが公表する正社員SEの年代別平均年収（2025年・全国）は30代で約499万円、40代で約618万円です。地方は額面が首都圏よりやや控えめになる傾向がある一方、鹿児島は住居費や生活コストを抑えやすいため、可処分所得で見るとバランスが取りやすい点も踏まえて考えるのが現実的です。首都圏フルリモート求人を選べば、鹿児島の生活コストのまま高めの額面を狙える可能性もあります。",
  },
  {
    q: "鹿児島でリモートワークの移住はできますか？",
    a: "オンライン面接とフルリモート勤務が一般化したため、首都圏企業に在籍したまま鹿児島へ移住する選択肢は現実的になっています。鹿児島は自然環境に恵まれ、移住先として人気のある地域です。一方で首都圏と物理的に離れているため、出社が必要な求人では移動コストが大きくなりやすい点に注意が必要です。フルリモート前提の求人を中心に探すと、地理的なハンデを補いやすくなります。求人ごとの出社要件は必ず面談で確認しましょう。",
  },
  {
    q: "鹿児島県の移住支援制度はありますか？",
    a: "鹿児島県は移住・定住支援に取り組んでおり、国の地方創生施策と連動した「移住支援金」の対象地域です。内閣府・各市町村の制度では、東京圏から移住し対象法人へ就業した場合やテレワークを継続する場合などに世帯最大100万円程度（単身は60万円程度）が支給される枠組みがあり、子育て世帯は加算される場合があります。離島を含む市町村独自の住宅補助や子育て支援が併用できる場合もあります。金額・要件は年度や市町村で異なるため、鹿児島県および移住先市町村の公式サイトで最新の条件を必ず確認してください。",
  },
  {
    q: "鹿児島のIT転職におすすめのエージェントは？",
    a: "首都圏フルリモートを狙うならIT/Web特化型のレバテックキャリア、九州・地方在住からの相談しやすさと拠点網ならワークポート、求人量の多さならdodaやリクルートエージェントITが候補です。福岡の求人も視野に入れる場合は、全国対応の総合型を併用すると当たりやすくなります。複数登録して提案傾向を比較するのが基本です。",
  },
  {
    q: "鹿児島でフルリモートの求人は見つかりますか？",
    a: "鹿児島県内企業のフルリモート求人は数が限られますが、首都圏・福岡企業のフルリモート求人に鹿児島在住のまま応募する方法があります。鹿児島は首都圏から距離があるため、出社頻度の少ないフルリモート求人を中心に探すのが現実的です。エージェントに『鹿児島在住・フルリモート希望』と明確に伝えると、対象求人を絞り込んでもらいやすくなります。求人票の『リモート可』は運用差が大きいため、面談で出社頻度を確認しましょう。",
  },
  {
    q: "30代・40代でも鹿児島でIT転職できますか？",
    a: "できます。地元の受託・社内SEや誘致企業の開発拠点では、要件定義から運用まで担える経験やマネジメント力が評価されやすく、フルリモート併用なら首都圏の経験者ポジションも狙えます。経済産業省が2019年3月に公表した試算では2030年に最大約79万人のIT人材不足が見込まれており、地方でもDX・開発人材の需要は構造的に続くと見られます。地元求人が限られる場合は、首都圏フルリモート求人を併用すると選択肢が広がります。",
  },
];

const related = [
  { name: "奈良のIT転職事情", href: "/area/nara/" },
  { name: "フルリモートIT転職ガイド", href: "/area/remote/" },
  { name: "地方移住×IT転職ガイド", href: "/area/iiju/" },
  { name: "フルリモート求人の探し方", href: "/purpose/remote-full/" },
  { name: "リモートワークの実情", href: "/knowledge/remote-work/" },
  { name: "エリア別ガイド一覧", href: "/area/" },
];

export default function KagoshimaAreaPage() {
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
        title="鹿児島のIT転職事情【2026年】南九州のIT誘致とリモート移住"
        description="鹿児島県のITエンジニア転職を30代・40代向けに解説。南九州のIT企業誘致・サテライトオフィスの動き、首都圏フルリモート併用、UIターン移住支援、年収の現実を整理します。"
        url="/area/kagoshima/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エリア別ガイド", href: "/area/" },
          { name: "鹿児島のIT転職事情" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          鹿児島のIT転職事情【2026年】南九州のIT誘致とリモート移住
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 鹿児島県のITエンジニア転職ガイド
        </p>

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed">
            鹿児島県は、南九州の中核を担い、自然環境に恵まれた移住先として人気の地域です。県内のIT求人の母数は首都圏や福岡に比べると限られるのが現実ですが、近年は自治体によるIT企業誘致やサテライトオフィスの取り組みが進められてきました。本記事では、その現実を正直に踏まえたうえで、地元のIT求人、首都圏企業のフルリモートの活用、UIターン移住という、鹿児島ならではの価値ある選択肢を公開情報をもとに整理します。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表の年代別平均年収（2025年）",
            "経済産業省 IT人材需給に関する調査（2019年3月公表）",
            "内閣府 地方創生 移住支援金・鹿児島県および各市町村の移住支援ページ",
          ]}
        />

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：鹿児島のIT転職市場の現実</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              鹿児島のIT求人は、県内の母数こそ限られますが、南九州のIT誘致・サテライトオフィスの動き、首都圏フルリモートの併用、そして自然豊かな環境を活かしたUIターン移住という三本柱で価値を出せる市場です。首都圏から距離があるぶん、フルリモートを軸に据えるのが現実的な戦略になります。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>・南九州のIT企業誘致・サテライトオフィスの取り組みが進められてきた</li>
              <li>・首都圏フルリモート求人を併用すれば、鹿児島在住のまま年収水準の選択肢が広がる</li>
              <li>・自然環境と生活コストの低さを活かしたUIターン移住の受け皿として人気</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-lg p-5">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-petrol hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 市場 */}
        <section id="market" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">鹿児島の産業・IT誘致とエンジニア求人の特徴</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            鹿児島県は、農業・畜産・食品加工・観光などが基幹産業で、製造業では電子部品の工場立地も見られます。IT分野では、自治体による企業誘致やサテライトオフィスの誘致が進められ、首都圏企業の開発拠点やBPO・コールセンター連携のシステム部門が置かれることがあります。Web/SaaS自社開発の県内求人は数が限られるため、自分の技術がどの領域に向くかを見極めることが、鹿児島での求人探しの起点になります。
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">IT誘致・サテライトオフィスの動き</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                鹿児島では、地方創生の流れの中で自治体がIT企業誘致やサテライトオフィスの設置を後押ししてきました。首都圏企業の開発拠点が置かれると、首都圏案件を鹿児島で担うニアショア的な働き方につながる場合があります。地方にいながら首都圏の開発に関わりたい人の選択肢になります。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">鹿児島市の都市部</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                県庁所在地の鹿児島市にはSIerの拠点や受託開発、地元密着のWeb制作、流通・サービス業の社内SEといった求人が見られます。ただし母数は首都圏・福岡ほど多くないため、県内の出社求人だけで幅広く比較したい場合は求人数の制約を前提に動くのが現実的です。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">福岡という選択肢</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                九州のIT求人は福岡に集積しています。鹿児島から福岡は新幹線でアクセスでき、福岡企業のフルリモート・ハイブリッド求人を視野に入れることで、九州内でも求人の母数を広げられます。地元志向と求人量のバランスを取りたい人の選択肢になります。
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            ※ 上記は公開情報に基づく一般的な傾向の整理です。特定企業の求人数・採用数の断定は避けています。
          </p>
        </section>

        {/* 働き方 */}
        <section id="workstyle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">働き方の選択肢（地元・移住×リモート）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            鹿児島で働くエンジニアの選択肢は、大きく次の3つに整理できます。首都圏から距離がある分、フルリモートの併用が選択肢を広げる鍵になります。
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-petrol text-white text-xs font-bold shrink-0">A</span>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>地元の受託・社内SE・誘致拠点に出社/ハイブリッド:</strong> 鹿児島市を中心に、地域に根ざしたキャリアを重視する人向け。誘致拠点ではニアショア的に首都圏案件を担う場合もあります。
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-petrol text-white text-xs font-bold shrink-0">B</span>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>福岡企業のフルリモート/ハイブリッド:</strong> 九州のIT集積地である福岡の求人を、鹿児島在住のまま狙う働き方。九州内で求人量を確保したい人向けです。
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-petrol text-white text-xs font-bold shrink-0">C</span>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>鹿児島在住×首都圏企業のフルリモート:</strong> 鹿児島の生活コストを保ちつつ首都圏水準の年収を狙う選択肢。
                <Link href="/purpose/remote-full/" className="text-petrol hover:underline">フルリモート求人の探し方</Link>
                や
                <Link href="/area/iiju/" className="text-petrol hover:underline">地方移住×IT転職ガイド</Link>
                もあわせて検討しましょう。
              </p>
            </div>
          </div>
        </section>

        {/* 移住支援 */}
        <section id="iju" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">UIターン移住支援制度（出典付き）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            鹿児島県は移住・定住支援に取り組んでおり、国の地方創生施策と連動した支援が利用できる場合があります。代表的なのが「移住支援金」です。
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <ul className="space-y-2 text-sm text-slate-700">
              <li>・<strong>移住支援金:</strong> 内閣府の地方創生施策に基づき、東京圏（条件不利地域を除く）から鹿児島県内の対象市町村へ移住し、対象法人への就業やテレワーク継続、起業などの要件を満たすと、世帯で最大100万円程度・単身で60万円程度が支給される枠組みがあります。18歳未満の子どもがいる世帯は加算がある場合があります。</li>
              <li>・<strong>テレワーク移住:</strong> 首都圏企業の業務を移住後も続ける「テレワーク」を支援金の対象とする市町村があり、フルリモートのIT職と相性が良い制度です。鹿児島のように首都圏から離れた地域では、特に有効な選択肢になります。</li>
              <li>・<strong>市町村独自の補助:</strong> 住宅取得・改修補助、子育て支援、空き家バンク、離島向けの支援など、市町村ごとに独自制度が用意されている場合があります。</li>
            </ul>
            <p className="text-xs text-slate-500 mt-4">
              ※ 金額・対象要件・対象法人は年度や市町村によって異なります。必ず鹿児島県および移住先市町村の公式サイトで最新の条件を確認してください（出典: 内閣府 地方創生「移住支援金」、鹿児島県および各市町村の移住支援ページ）。
            </p>
          </div>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方（年代別データ）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            鹿児島エリア固有の平均年収を断定できる公的データは限られます。ここでは、レバテックが公表する正社員SEの年代別平均年収（2025年・全国）を参考値として示します。地方は額面が首都圏よりやや控えめになる傾向がある一方、生活コストの差を加味して考えるのが現実的です。
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
                    <td className="px-3 py-3 border border-slate-200 font-bold text-petrol">{row.salary}</td>
                    <td className="px-3 py-3 border border-slate-200 text-slate-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-4">
            ※ 出典: レバテック公表の年代別平均年収（2025年・正社員SE）。年収1,000万円以上の割合は30代8.01%・40代12.67%とされています。いずれも全国の値で、鹿児島エリア限定の数値ではありません。
          </p>
          <p className="text-slate-600 leading-relaxed">
            鹿児島で年収を考えるときは、額面と生活コストのバランスが鍵です。住居費・生活コストを抑えやすいエリアでは同じ額面でも可処分所得が増えやすく、首都圏のフルリモート求人を選べば鹿児島の生活コストのまま高めの額面を狙える可能性もあります。年代別の考え方は
            <Link href="/age/30s/" className="text-petrol hover:underline">30代の転職</Link>
            ・
            <Link href="/age/40s/" className="text-petrol hover:underline">40代の転職</Link>
            も参考にしてください。
          </p>
        </section>

        {/* エージェント */}
        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">鹿児島エリアに対応するエージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            鹿児島での転職は、首都圏フルリモート求人に強いIT特化型と、九州・全国に強い総合型を組み合わせるのが基本戦略です。福岡の求人も視野に入れる場合は、求人量の多い総合型を併用すると当たりやすくなります。
          </p>
          <div className="space-y-4">
            {agents.map((a, i) => (
              <div key={i} className="bg-petrol-soft rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-2">
                  {i + 1}.{" "}
                  <Link href={a.href} className="hover:underline">
                    {a.name}
                  </Link>
                </h3>
                <p className="text-sm text-petrol-deep leading-relaxed">{a.point}</p>
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
              { step: "1", title: "軸を決める", desc: "「地元のIT・誘致拠点」「福岡企業のリモート」「首都圏フルリモート」のどれを中心に据えるかを先に決める。提案される求人の質が変わります。" },
              { step: "2", title: "エージェントを2〜3社登録", desc: "フルリモートに強いIT特化型と、九州・全国に強い総合型を組み合わせて提案傾向を比較します。県内求人が限られる前提で母数を確保しましょう。" },
              { step: "3", title: "移住支援制度を確認", desc: "移住・UIターンを伴う場合は、移住先市町村の移住支援金・住宅補助などの最新条件を公式サイトで確認します。テレワーク移住が対象かも要チェックです。" },
              { step: "4", title: "出社要件を確認", desc: "首都圏から距離があるため、出社頻度を必ず確認します。フルリモート前提の求人を中心に据えると、地理的なハンデを補いやすくなります。" },
              { step: "5", title: "額面＋生活コストで意思決定", desc: "複数の提案を比べ、額面だけでなく生活コスト・働き方・移動コスト・移住支援を含めて総合判断します。" },
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">鹿児島転職が向いている人・向いていない人</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            エリアには「合う・合わない」があります。鹿児島の市場特性を踏まえ、どんな志向の人が力を発揮しやすいかを整理しました。あくまで傾向であり、最終的には個々の求人とのマッチングで判断するのが基本です。
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
            「慎重に検討したい人」に当てはまっても、鹿児島在住のまま首都圏や福岡のフルリモート求人を狙えば、希望と地域を両立できる場合があります。出社頻度や移動コストの許容範囲を面談で言語化しておくと、提案のミスマッチを防げます。
          </p>
        </section>

        {/* 30代40代 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            鹿児島は、30代・40代のミドルエンジニアが「暮らしの質」と「キャリアの継続」を両立しやすい市場です。フルリモートで首都圏の年収水準を保つ道も、地元・福岡で地域に根ざす道も選べます。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">30代の進め方</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                技術の市場価値を高めながら、首都圏フルリモートで経験の幅を広げるか、地元・福岡で地域に根ざすかを意識的に選ぶフェーズ。自然豊かな環境で生活基盤を整えやすい時期でもあります。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">40代の進め方</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                マネジメントや高度専門など役割で評価される段階。県内求人が限られる前提で、フルリモート併用により首都圏・福岡の選択肢を確保しつつ、生活設計と両立する形を選ぶのが現実的です。
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            年代別の市場感は
            <Link href="/age/30s/" className="text-petrol hover:underline">30代の転職</Link>
            ・
            <Link href="/age/40s/" className="text-petrol hover:underline">40代の転職</Link>
            、リモート前提の働き方は
            <Link href="/knowledge/remote-work/" className="text-petrol hover:underline">リモートワークの実情</Link>
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
          <h2 className="text-xl font-bold mb-3">鹿児島のIT転職を進めよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            地元のIT・誘致拠点から福岡・首都圏フルリモート、UIターン移住まで。エリア対応のエージェントに相談して、暮らしと年収のバランスが取れる選択肢を見つけましょう。
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
            {related.map((item, i) => (
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
