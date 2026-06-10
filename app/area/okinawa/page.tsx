import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "沖縄・那覇のIT転職事情【2026年】IT誘致×リモート移住の現実",
  description:
    "沖縄・那覇のITエンジニア転職を30代・40代向けに正直に解説。IT・コールセンター誘致やリゾートワークの実情、地元IT求人の現実、首都圏フルリモート併用、UIターン移住支援、年収の考え方をまとめました。",
};

const toc = [
  { id: "conclusion", label: "結論：沖縄・那覇のIT転職市場の特徴" },
  { id: "market", label: "沖縄のIT・産業集積と誘致政策" },
  { id: "reality", label: "求人の実情（正直な市場記述）" },
  { id: "workstyle", label: "働き方の選択肢（地元×リモート×リゾートワーク）" },
  { id: "iju", label: "UIターン移住支援・公的制度" },
  { id: "salary", label: "年収の考え方（年代別データ）" },
  { id: "agents", label: "沖縄に対応するエージェント" },
  { id: "fit", label: "沖縄転職が向いている人・向いていない人" },
  { id: "middle", label: "30代・40代エンジニアの視点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const salaryByAge = [
  { age: "20代", salary: "約378万円", note: "第二新卒〜若手。ポテンシャル採用も見られる層。" },
  { age: "30代", salary: "約499万円", note: "実務リーダー・専門性で評価される中核層。" },
  { age: "40代", salary: "約618万円", note: "マネジメント・高度専門で年収が伸びやすい層。" },
  { age: "50代", salary: "約685万円", note: "管理職・技術顧問など役割で差が大きい層。" },
];

const agents = [
  {
    name: "レバテックキャリア",
    href: "/review/levtech/",
    point:
      "IT/Web特化型。技術理解の高いアドバイザーが特徴で、首都圏のフルリモート求人を介して沖縄在住のまま都市部水準の案件を狙う使い方と相性が良い。高年収求人比率の高さも特徴とされる。",
  },
  {
    name: "ワークポート",
    href: "/review/workport/",
    point:
      "全国47都道府県57拠点を構える総合型。地方在住からの相談に向き、未経験歓迎求人も比較的多い。沖縄の地元求人と首都圏求人の双方に当たりやすい。",
  },
  {
    name: "doda ITエンジニア",
    href: "/review/doda-it/",
    point:
      "全国対応の総合型。検索・エージェント・スカウトのハイブリッド型で、求人母数の多さが強み。地元求人が限られる地方では、母数の大きいサービスで取りこぼしを防ぐ意味が大きい。",
  },
  {
    name: "ビズリーチ",
    href: "/review/bizreach-it/",
    point:
      "ハイクラス・スカウト型。年収750万円以上の求人やフルリモート対応のシニア・管理職ポジションを、沖縄在住のまま探したい人向け。市場価値を客観的に把握しやすい。",
  },
];

const faqs = [
  {
    q: "沖縄・那覇にITエンジニアの求人はどのくらいありますか？",
    a: "沖縄は首都圏や福岡と比べると地元のIT求人の母数が限られるのが実情です。具体的な件数は時期やエージェント・媒体によって大きく変わるため、本記事では断定を避けます。沖縄県はIT産業の誘致を進めてきた経緯があり、コールセンターやBPO、ソフトウェア開発拠点が一定数ありますが、最先端のWeb自社開発に絞ると選択肢は狭くなります。首都圏フルリモート求人の併用で母数を広げるのが現実的です。",
  },
  {
    q: "沖縄のIT誘致やリゾートワークとはどういうものですか？",
    a: "沖縄県は情報通信関連産業の誘致を県の重点政策として進めてきた経緯があり、コールセンター・BPO・データセンター・ソフトウェア開発などの拠点が立地してきたことは公知です。また、リゾート地という特性を活かしたワーケーション（休暇地でのリモートワーク）の受け入れも各地で進んでいます。エンジニアにとっては、地元拠点での勤務とリモートワークを暮らし方とセットで考えやすいエリアといえます。",
  },
  {
    q: "沖縄のITエンジニアの年収はどのくらいですか？",
    a: "沖縄エリア限定の確定した平均年収データは限られます。参考値として、レバテックが公表する正社員SEの年代別平均年収（2025年・全国）は30代で約499万円、40代で約618万円です。沖縄は全国的に見ても賃金水準が高いエリアではないとされ、地元求人では額面が抑えめになる傾向があります。首都圏フルリモート求人を選べば、沖縄に住みながら都市部水準の額面を狙える可能性があります。",
  },
  {
    q: "沖縄に住みながら首都圏企業で働けますか？",
    a: "オンライン面接が一般化し、フルリモート可の求人であれば沖縄在住のまま首都圏企業で働ける場合があります。エージェントに『沖縄在住・フルリモート希望』と明確に伝えると、対象求人を絞り込んでもらいやすくなります。離島・遠隔地ゆえに出社頻度や移動コストが論点になりやすいため、面談で出社要件を必ず確認しましょう。",
  },
  {
    q: "沖縄へのUIターン移住に使える支援制度はありますか？",
    a: "沖縄県や各市町村は移住・定住の相談窓口や支援情報を公開しています。国の地方創生施策である移住支援金（東京圏からの移住で要件を満たすと交付される制度。金額・要件は自治体ごとに異なる）の対象になる場合もあります。制度は年度や居住地によって変わるため、必ず沖縄県・移住先市町村の公式サイトや相談窓口で最新の要件を確認してください。",
  },
  {
    q: "沖縄のIT転職におすすめのエージェントは？",
    a: "首都圏フルリモートを狙うならレバテックキャリア、地方在住からの相談と未経験対応も視野に入れるならワークポート、求人母数を重視するならdoda、ハイクラスのリモート求人を狙うならビズリーチが候補です。地元求人が限られる地方では複数併用が特に有効で、提案傾向を比較しながら進めるのがおすすめです。",
  },
  {
    q: "沖縄でリゾートワーク・ワーケーションをしながら転職活動はできますか？",
    a: "ワーケーションそのものと正社員転職は別物ですが、フルリモートの正社員求人に転職できれば、沖縄を生活拠点にしながら働く形は実現可能です。短期のワーケーションで沖縄の暮らしを体験し、相性を確かめてから移住＋フルリモート転職に進む人もいます。まずはフルリモート求人を扱うエージェントに相談し、生活と働き方を両立できる求人を探すのが現実的です。",
  },
];

const related = [
  { name: "福岡のIT転職事情", href: "/area/fukuoka/" },
  { name: "熊本のIT転職事情", href: "/area/kumamoto/" },
  { name: "エリア別IT転職ガイド一覧", href: "/area/" },
  { name: "フルリモート可の求人で働く", href: "/purpose/remote-full/" },
  { name: "リモートワークの実情", href: "/knowledge/remote-work/" },
  { name: "40代の転職ガイド", href: "/age/40s/" },
];

export default function OkinawaAreaPage() {
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
        title="沖縄・那覇のIT転職事情【2026年】IT誘致×リモート移住の現実"
        description="沖縄・那覇のITエンジニア転職を30代・40代向けに正直に解説。IT・コールセンター誘致やリゾートワークの実情、地元IT求人の現実、首都圏フルリモート併用、UIターン移住支援、年収の考え方をまとめました。"
        url="/area/okinawa/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エリア別ガイド", href: "/area/" },
          { name: "沖縄・那覇のIT転職事情" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          沖縄・那覇のIT転職事情【2026年】IT誘致×リモート移住の現実
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 沖縄・那覇エリアのITエンジニア転職ガイド
        </p>

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed">
            沖縄県は、情報通信関連産業の誘致を県の重点政策として進めてきた経緯があり、コールセンター・BPO・ソフトウェア開発などの拠点が立地してきたことが知られています。一方で、最先端のWeb自社開発に絞ると地元IT求人の母数は首都圏より限られるのが正直なところです。本記事では、創作データを使わず、公開情報をもとに沖縄のIT転職市場の現実、誘致政策やリゾートワークの実情、首都圏フルリモートの併用、UIターン移住支援、年代別の年収の考え方を、30代・40代のミドルエンジニア向けに整理します。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表の年代別平均年収（2025年）",
            "経済産業省 IT人材需給に関する調査（2019年3月公表）",
            "沖縄県の情報通信関連産業の誘致政策に関する公表情報",
            "沖縄県・移住先市町村の移住支援情報（公式）",
          ]}
        />

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：沖縄・那覇のIT転職市場の特徴</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              沖縄のIT転職は「暮らし方と働き方を一体で考えたいエンジニア」と相性の良い市場です。地元はIT誘致でコールセンター・BPO・開発拠点が一定数ある一方、最先端のWeb自社開発は母数が限られます。首都圏フルリモート求人を併用して母数と年収の選択肢を広げるのが現実的な進め方です。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>・地元はIT誘致でコールセンター・BPO・開発拠点が立地。一方Web自社開発の母数は限られる</li>
              <li>・リゾート地特性を活かしたワーケーション・リモートワークと相性が良い</li>
              <li>・地元求人は額面が抑えめになりやすい。首都圏フルリモート併用で年収の選択肢を広げられる</li>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">沖縄のIT・産業集積と誘致政策</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            沖縄県は、製造業の基盤が限られる地理的条件のもとで、情報通信関連産業を成長分野と位置づけ、企業の誘致を進めてきました。これは県の重点政策として広く知られている公知の事実です。その結果、那覇市を中心にコールセンター・BPO・データセンター・ソフトウェア開発などの拠点が立地してきました。
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">誘致企業・拠点の層</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                コールセンター・BPOは沖縄のIT・サービス雇用の一角を占めてきました。加えて、首都圏企業の開発拠点やテスト・運用拠点が置かれることもあり、こうした拠点での開発・運用・サポート系の業務がエンジニアの受け皿になる場合があります。ただし、いわゆるモダンなWeb/SaaS自社開発の母数は首都圏より限られます。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">リゾートワーク・ワーケーション</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                沖縄はリゾート地としての特性を活かし、休暇地で働くワーケーションの受け入れが各地で進んでいます。これは正社員転職とは別の文脈ですが、フルリモートの働き方が広がる中で「沖縄を生活拠点にしてリモートで働く」という選択肢を後押しする土壌になっています。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">構造的なIT人材不足という背景</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                経済産業省が2019年3月に公表した「IT人材需給に関する調査」では、2030年に最大約79万人のIT人材不足が試算されています。地方でもDX・社内システム・運用を担う人材の需要は構造的に続くと見られ、経験者にとって不利一辺倒ではありません。
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            ※ 誘致政策・拠点立地は公知の事実に基づく整理です。特定企業のIT求人数・採用数の断定は避けています。
          </p>
        </section>

        {/* 求人の実情 */}
        <section id="reality" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の実情（正直な市場記述）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            正直にお伝えすると、沖縄の地元IT求人は首都圏や福岡と比べて母数が限られ、職種の偏りもあります。コールセンター・BPO・サポート系の比重が相対的に大きく、モダンなWeb/SaaSの自社開発を志向する人には選択肢が狭く感じられることがあります。これは沖縄の市場特性として正直に踏まえておくべき点です。
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3">
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>地元求人だけに絞らない：</strong> 地元の誘致企業・開発拠点に加え、首都圏企業のフルリモート求人を併用すると、応募できる母数が広がります。沖縄に住んだまま、都市部水準の案件・年収を狙える可能性があります。
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>額面の傾向を理解する：</strong> 沖縄は賃金水準が高いエリアとはされず、地元求人では額面が抑えめになりやすい傾向があります。年収を重視するなら、フルリモートで首都圏水準の求人を狙う選択が現実的です。
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>件数の数字を鵜呑みにしない：</strong> 求人件数は時期・媒体・エージェントで大きく変動します。本記事では具体的な件数を断定しません。最新の実数は複数のエージェントに当たって確認してください。
            </p>
          </div>
        </section>

        {/* 働き方 */}
        <section id="workstyle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">働き方の選択肢（地元×リモート×リゾートワーク）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            沖縄で働くエンジニアの選択肢は、大きく次の3つに整理できます。年収・出社頻度・生活コスト・暮らし方のどれを重視するかで、軸にすべきパターンが変わります。
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">A</span>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>地元の誘致企業・拠点に出社・ハイブリッドで勤務:</strong> 那覇市中心の開発拠点・BPO・サポート系で働く。地域に根ざしたキャリアや、まずは沖縄で就業基盤を作りたい人向けです。
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">B</span>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>沖縄在住×首都圏企業のフルリモート:</strong> 沖縄の暮らしを保ちつつ首都圏水準の年収・案件を狙う選択肢。地元求人の母数・額面の制約を回避できるのが最大の利点です。
                <Link href="/purpose/remote-full/" className="text-blue-600 hover:underline">フルリモート可の求人</Link>
                や
                <Link href="/area/iiju/" className="text-blue-600 hover:underline">地方移住×IT転職ガイド</Link>
                もあわせて検討しましょう。
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0">C</span>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>ワーケーション・移住で生活拠点を沖縄に:</strong> 短期のワーケーションで暮らしを体験し、相性を確かめてから移住＋フルリモート転職に進む形。生活と働き方を一体で設計したい人向けです。
              </p>
            </div>
          </div>
        </section>

        {/* 移住支援 */}
        <section id="iju" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">UIターン移住支援・公的制度</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            沖縄へのUIターンを検討する場合、自治体の移住支援を活用できる可能性があります。制度は年度・居住地・要件によって変わるため、ここでは仕組みの概要のみを示します。具体的な金額・要件は必ず公式の窓口で確認してください。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">移住支援金（地方創生施策）</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                国の地方創生施策として、東京圏（東京・神奈川・埼玉・千葉の一部）から地方へ移住し一定の要件を満たした場合に交付される移住支援金の制度があります。テレワークで移住前の仕事を続けるケースが対象となる場合もあります。金額・対象要件は沖縄県および移住先市町村ごとに異なり、離島など実施状況が地域で分かれる点にも注意が必要です。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">移住相談窓口・離島の暮らし情報</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                沖縄県や各市町村は移住相談の窓口を設けており、住まい・仕事・子育てに加え、本島・離島それぞれの暮らしの情報を提供しています。離島は医療・教育・物流などの条件が本島と異なるため、生活面の確認を含めて窓口を早めに活用すると段取りが組みやすくなります。
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            ※ 移住支援金をはじめとする各制度は要件・金額・実施状況が変わります。必ず沖縄県・移住先市町村の公式サイトや相談窓口で最新情報を確認してください（出典：各自治体公式の移住支援情報）。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方（年代別データ）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            沖縄エリア固有の平均年収を断定できる公的データは限られます。ここでは、レバテックが公表する正社員SEの年代別平均年収（2025年・全国）を参考値として示します。沖縄は賃金水準が高いエリアとはされず、地元求人では額面が抑えめになる傾向がある点を踏まえて捉えてください。
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
            ※ 出典: レバテック公表の年代別平均年収（2025年・正社員SE）。年収1,000万円以上の割合は30代8.01%・40代12.67%とされています。いずれも全国の値で、沖縄エリア限定の数値ではありません。
          </p>
          <p className="text-slate-600 leading-relaxed">
            沖縄で年収を考えるときは、額面と暮らし方のバランスが鍵になります。地元求人の額面が抑えめな分、首都圏のフルリモート求人を選べば沖縄に住みながら高めの額面を狙える可能性があります。年代別の考え方は
            <Link href="/knowledge/salary-30s/" className="text-blue-600 hover:underline">30代の年収アップ</Link>
            ・
            <Link href="/knowledge/salary-40s/" className="text-blue-600 hover:underline">40代の年収戦略</Link>
            も参考にしてください。
          </p>
        </section>

        {/* エージェント */}
        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">沖縄に対応するエージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            地元求人が限られる沖縄では、首都圏フルリモートに強いIT特化型と、全国対応の総合型を組み合わせるのが基本戦略です。ワークポートは全国47都道府県57拠点を構えており、地方在住からの相談に向いています。
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
            ※ 各社の対応エリア・求人傾向は時点により変動します。複数社の比較は
            <Link href="/compare/agents/" className="text-blue-600 hover:underline">IT転職エージェント比較</Link>
            、リモート求人特化の比較は
            <Link href="/compare/remote-agents/" className="text-blue-600 hover:underline">リモート求人に強いエージェント比較</Link>
            を参照してください。
          </p>
        </section>

        {/* 向き不向き */}
        <section id="fit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">沖縄転職が向いている人・向いていない人</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            エリアには「合う・合わない」があります。沖縄の市場特性を踏まえ、どんな志向の人が力を発揮しやすいかを整理しました。あくまで傾向であり、最終的には個々の求人とのマッチングで判断するのが基本です。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 text-sm mb-3">向いている人</h3>
              <ul className="space-y-2 text-sm text-green-900">
                <li className="flex gap-2"><span className="shrink-0">✓</span><span>フルリモートで首都圏案件に関わりながら沖縄で暮らしたい</span></li>
                <li className="flex gap-2"><span className="shrink-0">✓</span><span>自然・気候を含めた暮らし方を重視し、働き方とセットで設計したい</span></li>
                <li className="flex gap-2"><span className="shrink-0">✓</span><span>誘致企業・開発拠点・サポート系で地域に根ざして働きたい</span></li>
                <li className="flex gap-2"><span className="shrink-0">✓</span><span>ワーケーションで体験してから移住・転職を判断したい</span></li>
              </ul>
            </div>
            <div className="border border-slate-200 bg-slate-50 rounded-lg p-5">
              <h3 className="font-bold text-slate-700 text-sm mb-3">慎重に検討したい人</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><span className="shrink-0">−</span><span>最先端のWeb/SaaS自社開発の選択肢を地元で最大化したい（母数は首都圏が圧倒的）</span></li>
                <li className="flex gap-2"><span className="shrink-0">−</span><span>地元求人の額面だけで大幅な年収アップを狙いたい（賃金水準・フルリモート併用が論点）</span></li>
                <li className="flex gap-2"><span className="shrink-0">−</span><span>頻繁な本州出張・対面前提の働き方を負担に感じる（フルリモート求人で軽減可能）</span></li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            「慎重に検討したい人」に当てはまっても、沖縄在住のまま首都圏のフルリモート求人を選べば、希望の案件・年収に近づける場合があります。地元にこだわりすぎず、働き方の選択肢を広げることが沖縄での転職成功の近道です。
          </p>
        </section>

        {/* 30代40代 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            沖縄は、30代・40代のミドルエンジニアが「暮らし方を起点にキャリアを設計する」転職先として検討しやすいエリアです。フルリモートで首都圏の年収を保つ道も、誘致企業・拠点で地域に根ざして働く道も選べます。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">30代の進め方</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                技術の市場価値を高めつつ、フルリモートで首都圏案件を経験するか、地元拠点で運用・開発の経験を積むかを意識的に選ぶフェーズ。暮らし方を整えながらキャリアの幅を広げやすい時期です。
                <Link href="/age/30s/" className="text-blue-600 hover:underline">30代の転職ガイド</Link>
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">40代の進め方</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                マネジメントや高度専門など役割で評価される段階。地元求人は絞られますが、ハイクラスのリモート求人で年収を維持しつつ移住によるQOL向上を両立できる形を選ぶのが現実的です。
                <Link href="/age/40s/" className="text-blue-600 hover:underline">40代の転職ガイド</Link>
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            リモート前提の働き方の実情は
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
          <h2 className="text-xl font-bold mb-3">沖縄×リモートでIT転職を進めよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            地元の誘致企業・拠点から首都圏フルリモートまで。エリア対応のエージェントに相談して、暮らしと年収のバランスが取れる選択肢を見つけましょう。
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
