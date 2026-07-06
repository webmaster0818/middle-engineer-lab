import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/area/utsunomiya/" },
  title: "宇都宮・栃木のIT転職事情【2026年】製造業×IT×新幹線通勤圏",
  description:
    "宇都宮・栃木のITエンジニア転職を30代・40代向けに正直に解説。北関東の製造業集積×ITの実情、新幹線で東京通勤圏という立地、地元求人の現実、首都圏フルリモート併用、UIターン移住支援、年収の考え方をまとめました。",
};

const toc = [
  { id: "conclusion", label: "結論：宇都宮・栃木のIT転職市場の特徴" },
  { id: "market", label: "宇都宮・栃木のIT・製造業集積" },
  { id: "reality", label: "求人の実情（正直な市場記述）" },
  { id: "workstyle", label: "働き方の選択肢（新幹線通勤×リモート）" },
  { id: "iju", label: "UIターン移住支援・公的制度" },
  { id: "salary", label: "年収の考え方（年代別データ）" },
  { id: "agents", label: "宇都宮・栃木に対応するエージェント" },
  { id: "fit", label: "宇都宮転職が向いている人・向いていない人" },
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
      "IT/Web特化型。技術理解の高いアドバイザーが特徴で、首都圏のフルリモート求人や新幹線通勤圏の都内求人を介して宇都宮在住のまま都市部水準の案件を狙う使い方と相性が良い。高年収求人比率の高さも特徴とされる。",
  },
  {
    name: "ワークポート",
    href: "/review/workport/",
    point:
      "全国47都道府県57拠点を構える総合型。地方在住からの相談に向き、未経験歓迎求人も比較的多い。北関東・栃木の地元求人と首都圏求人の双方に当たりやすい。",
  },
  {
    name: "doda ITエンジニア",
    href: "/review/doda-it/",
    point:
      "全国対応の総合型。検索・エージェント・スカウトのハイブリッド型で、求人母数の多さが強み。製造業DXの求人や首都圏通勤圏の求人など、幅広く当たりやすい。",
  },
  {
    name: "ビズリーチ",
    href: "/review/bizreach-it/",
    point:
      "ハイクラス・スカウト型。年収750万円以上の求人やフルリモート対応のシニア・管理職ポジションを、宇都宮在住のまま探したい人向け。市場価値を客観的に把握しやすい。",
  },
];

const faqs = [
  {
    q: "宇都宮・栃木にITエンジニアの求人はどのくらいありますか？",
    a: "宇都宮は北関東の中核都市で製造業が集積しており、その関連のIT・社内DX求人が一定数あります。ただし純粋なWeb/SaaS自社開発に絞ると、地元求人の母数は首都圏より限られるのが実情です。具体的な件数は時期やエージェント・媒体によって大きく変わるため、本記事では断定を避けます。地元の製造業×IT求人に加え、新幹線通勤圏の都内求人や首都圏フルリモート求人を併用すると母数を広げられます。",
  },
  {
    q: "宇都宮は東京に通勤できますか？",
    a: "宇都宮駅から東京駅までは東北新幹線で概ね1時間弱でアクセスでき、新幹線通勤圏として知られています。出社頻度が週数回のハイブリッド勤務であれば、宇都宮に住みながら都内企業に通う選択肢が現実的に取れます。完全な毎日出社は通勤負担・交通費の面で論点になりますが、ハイブリッドやフルリモートと組み合わせれば、都内の求人と宇都宮の暮らしを両立しやすい立地です。",
  },
  {
    q: "宇都宮・栃木の製造業×ITとはどういうものですか？",
    a: "栃木県は自動車・輸送機器・電機・精密などの製造業が集積する北関東の工業県として知られています。製造現場には生産設備の制御、自動化、品質管理システム、データ基盤、社内DXといったIT需要が付随します。Web系の自社開発というより、製造業×ITの領域で組み込み・制御・生産技術・社内SE・DXの経験を活かしたい人にとって、宇都宮・栃木は実需のあるエリアといえます。",
  },
  {
    q: "宇都宮・栃木のITエンジニアの年収はどのくらいですか？",
    a: "宇都宮・栃木エリア限定の確定した平均年収データは限られます。参考値として、レバテックが公表する正社員SEの年代別平均年収（2025年・全国）は30代で約499万円、40代で約618万円です。北関東は首都圏より額面が低めになる傾向がある一方、住居費を抑えやすく、新幹線通勤圏ゆえに都内水準の求人も狙いやすい点が特徴です。フルリモートや都内ハイブリッド求人を選べば、宇都宮に住みながら高めの額面を狙える可能性があります。",
  },
  {
    q: "宇都宮・栃木へのUIターン移住に使える支援制度はありますか？",
    a: "栃木県や宇都宮市など各市町村は移住・定住の相談窓口や支援情報を公開しています。国の地方創生施策である移住支援金（東京圏からの移住で要件を満たすと交付される制度。金額・要件は自治体ごとに異なる）の対象になる場合もあります。ただし宇都宮・栃木は東京圏の通勤圏という性格もあり、移住支援金の対象範囲は地域・要件で変わります。必ず栃木県・移住先市町村の公式サイトや相談窓口で最新の要件を確認してください。",
  },
  {
    q: "宇都宮・栃木のIT転職におすすめのエージェントは？",
    a: "首都圏フルリモートや都内通勤圏の求人を狙うならレバテックキャリア、地方在住からの相談と未経験対応も視野に入れるならワークポート、製造業DXや求人母数を重視するならdoda、ハイクラスのリモート求人を狙うならビズリーチが候補です。複数併用して提案傾向を比較しながら進めるのがおすすめです。",
  },
  {
    q: "Web系志望ですが宇都宮で転職先はありますか？",
    a: "宇都宮・栃木は製造業×ITの実需がある一方、純粋なWeb/SaaS自社開発の地元求人は母数が限られます。Web系を志望する場合は、新幹線通勤圏の都内求人（ハイブリッド）や首都圏企業のフルリモート求人を中心に探すのが現実的です。宇都宮の暮らしを保ちつつ、都内水準のWeb開発の案件に関われる可能性があります。地元求人だけに絞らないことが選択肢を広げる鍵です。",
  },
];

const related = [
  { name: "埼玉のIT転職事情", href: "/area/saitama/" },
  { name: "東京のIT転職事情", href: "/area/tokyo/" },
  { name: "エリア別IT転職ガイド一覧", href: "/area/" },
  { name: "フルリモート可の求人で働く", href: "/purpose/remote-full/" },
  { name: "リモートワークの実情", href: "/knowledge/remote-work/" },
  { name: "30代の転職ガイド", href: "/age/30s/" },
];

export default function UtsunomiyaAreaPage() {
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
        title="宇都宮・栃木のIT転職事情【2026年】製造業×IT×新幹線通勤圏"
        description="宇都宮・栃木のITエンジニア転職を30代・40代向けに正直に解説。北関東の製造業集積×ITの実情、新幹線で東京通勤圏という立地、地元求人の現実、首都圏フルリモート併用、UIターン移住支援、年収の考え方をまとめました。"
        url="/area/utsunomiya/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エリア別ガイド", href: "/area/" },
          { name: "宇都宮・栃木のIT転職事情" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          宇都宮・栃木のIT転職事情【2026年】製造業×IT×新幹線通勤圏
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 宇都宮・栃木エリアのITエンジニア転職ガイド
        </p>

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed">
            宇都宮市は北関東の中核都市であり、栃木県は自動車・輸送機器・電機・精密などの製造業が集積する工業県として知られています。製造業に付随するIT・社内DXの実需があり、加えて東北新幹線で東京駅まで概ね1時間弱という新幹線通勤圏の立地が大きな特徴です。一方で、純粋なWeb/SaaS自社開発の地元求人は首都圏より限られるのが正直なところです。本記事では、創作データを使わず、公開情報をもとに宇都宮・栃木のIT転職市場の現実、製造業×ITと通勤圏という立地、首都圏フルリモートの併用、UIターン移住支援、年代別の年収の考え方を、30代・40代のミドルエンジニア向けに整理します。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表の年代別平均年収（2025年）",
            "経済産業省 IT人材需給に関する調査（2019年3月公表）",
            "栃木県・宇都宮市等の移住支援情報（公式）",
          ]}
        />

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：宇都宮・栃木のIT転職市場の特徴</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              宇都宮・栃木は「製造業×ITの実需」と「新幹線で東京通勤圏」という2つの強みを併せ持つ稀有なエリアです。地元の製造業DX・社内SE求人に加え、都内ハイブリッド求人や首都圏フルリモートを組み合わせれば、地方都市の中でも選択肢を広げやすい立地です。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>・北関東の製造業集積を背景に、製造業×IT・社内DXの実需がある</li>
              <li>・東北新幹線で東京駅まで概ね1時間弱。都内ハイブリッド勤務が現実的に取れる立地</li>
              <li>・Web/SaaS自社開発の地元求人は限られる。フルリモート・都内通勤圏の併用で補う</li>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">宇都宮・栃木のIT・製造業集積</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            栃木県は、自動車・輸送機器・電機・精密機械などの製造業が集積する北関東の工業県として知られています。宇都宮市はその中核都市であり、製造業の事業所や関連企業が多く立地しています。製造現場には、生産設備の制御・自動化、品質管理システム、データ基盤、社内DXといったIT需要が付随し、これが地元のIT求人の主軸の一つになっています。
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">製造業×ITという需要の方向性</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                製造業の集積を背景に、組み込み・制御、生産技術、社内SE、製造現場のDXといった領域で経験を活かせる需要があります。Web/SaaSのモダンな自社開発というより、ものづくりを支えるITの領域に関心がある人にとって、宇都宮・栃木は実需のあるエリアです。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">新幹線通勤圏という立地</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                宇都宮駅から東京駅までは東北新幹線で概ね1時間弱。地方都市でありながら東京の求人を通勤圏として捉えられる稀有な立地です。週数回出社のハイブリッド勤務であれば、宇都宮に住みながら都内企業で働く選択肢が現実的に取れます。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">構造的なIT人材不足という背景</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                経済産業省が2019年3月に公表した「IT人材需給に関する調査」では、2030年に最大約79万人のIT人材不足が試算されています。製造業DXを含め、地方でもIT人材の需要は構造的に続くと見られ、経験者にとって不利一辺倒ではありません。
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            ※ 製造業集積・通勤圏の立地は公知の事実に基づく整理です。特定企業の求人数・採用数の断定は避けています。
          </p>
        </section>

        {/* 求人の実情 */}
        <section id="reality" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の実情（正直な市場記述）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            正直にお伝えすると、宇都宮・栃木の地元IT求人は製造業×ITに偏りがあり、純粋なWeb/SaaS自社開発に絞ると母数は首都圏より限られます。一方で、新幹線通勤圏という立地のおかげで、他の地方都市より「都内の求人を現実的な選択肢に含めやすい」という強みがあります。この立地特性を活かすことが転職成功の鍵になります。
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3">
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>地元求人だけに絞らない：</strong> 地元の製造業×IT・社内SEに加え、新幹線通勤圏の都内求人（ハイブリッド）や首都圏フルリモート求人を併用すると、応募できる母数が大きく広がります。
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>自分の専門の向き先を見極める：</strong> 製造業×IT・社内SE志向なら地元求人、Web/SaaS志向なら都内ハイブリッドかフルリモート、と専門によって有利な方向が変わります。
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>件数の数字を鵜呑みにしない：</strong> 求人件数は時期・媒体・エージェントで大きく変動します。本記事では具体的な件数を断定しません。最新の実数は複数のエージェントに当たって確認してください。
            </p>
          </div>
        </section>

        {/* 働き方 */}
        <section id="workstyle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">働き方の選択肢（新幹線通勤×リモート）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            宇都宮で働くエンジニアの選択肢は、他の地方都市より幅が広いのが特徴です。年収・出社頻度・生活コスト・専門領域のどれを重視するかで、軸にすべきパターンが変わります。
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-petrol text-white text-xs font-bold shrink-0">A</span>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>地元の製造業×IT・社内SEに勤務:</strong> 宇都宮・栃木の製造業や関連企業で、組み込み・制御・生産技術・社内DXを担う。ものづくりを支えるITに関心がある人や、地域に根ざして働きたい人向けです。
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-petrol text-white text-xs font-bold shrink-0">B</span>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>宇都宮在住×都内企業のハイブリッド勤務:</strong> 新幹線通勤圏の立地を活かし、週数回出社で都内企業に通う。宇都宮の暮らしと都内水準の求人・年収を両立したい人向けです。交通費・通勤時間は求人ごとに確認しましょう。
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-petrol text-white text-xs font-bold shrink-0">C</span>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>宇都宮在住×首都圏企業のフルリモート:</strong> 通勤すら省き、宇都宮の生活コストを保ちつつ首都圏水準の年収・案件を狙う選択肢。
                <Link href="/purpose/remote-full/" className="text-petrol hover:underline">フルリモート可の求人</Link>
                や
                <Link href="/area/iiju/" className="text-petrol hover:underline">地方移住×IT転職ガイド</Link>
                もあわせて検討しましょう。
              </p>
            </div>
          </div>
        </section>

        {/* 移住支援 */}
        <section id="iju" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">UIターン移住支援・公的制度</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            宇都宮・栃木へのUIターンを検討する場合、自治体の移住支援を活用できる可能性があります。制度は年度・居住地・要件によって変わるため、ここでは仕組みの概要のみを示します。具体的な金額・要件は必ず公式の窓口で確認してください。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">移住支援金（地方創生施策）</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                国の地方創生施策として、東京圏（東京・神奈川・埼玉・千葉の一部）から地方へ移住し一定の要件を満たした場合に交付される移住支援金の制度があります。テレワークで移住前の仕事を続けるケースが対象となる場合もあります。ただし宇都宮・栃木は東京圏への通勤圏という性格もあり、対象範囲・要件は地域によって異なります。金額・対象要件は栃木県および移住先市町村ごとに確認が必要です。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">移住相談窓口・新幹線通勤の支援</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                栃木県や宇都宮市など各市町村は移住相談の窓口を設けており、住まい・仕事・子育てなどの情報を提供しています。自治体によっては新幹線通勤の費用補助など独自の支援を設ける例もあります。転職・移住と通勤スタイルをあわせて検討する場合、こうした窓口を早めに活用すると段取りが組みやすくなります。
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            ※ 移住支援金や通勤補助をはじめとする各制度は要件・金額・実施状況が変わります。必ず栃木県・移住先市町村の公式サイトや相談窓口で最新情報を確認してください（出典：各自治体公式の移住支援情報）。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方（年代別データ）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            宇都宮・栃木エリア固有の平均年収を断定できる公的データは限られます。ここでは、レバテックが公表する正社員SEの年代別平均年収（2025年・全国）を参考値として示します。北関東は首都圏より額面が低めになる傾向がある一方、新幹線通勤圏ゆえに都内水準の求人も狙いやすく、住居費を抑えやすい利点があります。
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
            ※ 出典: レバテック公表の年代別平均年収（2025年・正社員SE）。年収1,000万円以上の割合は30代8.01%・40代12.67%とされています。いずれも全国の値で、宇都宮・栃木エリア限定の数値ではありません。
          </p>
          <p className="text-slate-600 leading-relaxed">
            宇都宮で年収を考えるときは、立地を活かすのが鍵です。都内ハイブリッドやフルリモート求人を選べば、宇都宮の生活コストのまま都内水準の額面を狙える可能性があります。年代別の考え方は
            <Link href="/knowledge/salary-30s/" className="text-petrol hover:underline">30代の年収アップ</Link>
            ・
            <Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収戦略</Link>
            も参考にしてください。
          </p>
        </section>

        {/* エージェント */}
        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">宇都宮・栃木に対応するエージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            宇都宮では、製造業×ITの地元求人に強い総合型と、都内通勤圏・フルリモートに強いIT特化型を組み合わせるのが基本戦略です。ワークポートは全国47都道府県57拠点を構えており、地方在住からの相談に向いています。
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
            ※ 各社の対応エリア・求人傾向は時点により変動します。複数社の比較は
            <Link href="/compare/agents/" className="text-petrol hover:underline">IT転職エージェント比較</Link>
            、リモート求人特化の比較は
            <Link href="/compare/remote-agents/" className="text-petrol hover:underline">リモート求人に強いエージェント比較</Link>
            を参照してください。
          </p>
        </section>

        {/* 向き不向き */}
        <section id="fit" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">宇都宮転職が向いている人・向いていない人</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            エリアには「合う・合わない」があります。宇都宮・栃木の市場特性を踏まえ、どんな志向の人が力を発揮しやすいかを整理しました。あくまで傾向であり、最終的には個々の求人とのマッチングで判断するのが基本です。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 text-sm mb-3">向いている人</h3>
              <ul className="space-y-2 text-sm text-green-900">
                <li className="flex gap-2"><span className="shrink-0">✓</span><span>製造業×IT・組み込み・制御・生産技術・社内DXの経験を活かしたい</span></li>
                <li className="flex gap-2"><span className="shrink-0">✓</span><span>新幹線通勤圏を活かし、宇都宮在住で都内企業に週数回出社したい</span></li>
                <li className="flex gap-2"><span className="shrink-0">✓</span><span>フルリモートで首都圏案件に関わりながら宇都宮で暮らしたい</span></li>
                <li className="flex gap-2"><span className="shrink-0">✓</span><span>住居費を抑えつつ、都内水準の求人・年収にアクセスしたい</span></li>
              </ul>
            </div>
            <div className="border border-slate-200 bg-slate-50 rounded-lg p-5">
              <h3 className="font-bold text-slate-700 text-sm mb-3">慎重に検討したい人</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><span className="shrink-0">−</span><span>最先端のWeb/SaaS自社開発を地元の出社求人だけで探したい（母数は限られる）</span></li>
                <li className="flex gap-2"><span className="shrink-0">−</span><span>毎日の新幹線通勤の交通費・時間を負担に感じる（ハイブリッド・フルリモートで調整）</span></li>
                <li className="flex gap-2"><span className="shrink-0">−</span><span>製造業×ITの領域に関心がない（地元求人の主軸とミスマッチになりやすい）</span></li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            「慎重に検討したい人」に当てはまっても、宇都宮在住のまま都内ハイブリッドや首都圏フルリモートの求人を選べば、希望の案件・年収に近づける場合があります。立地の強みを活かして働き方の選択肢を広げることが宇都宮での転職成功の近道です。
          </p>
        </section>

        {/* 30代40代 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            宇都宮は、30代・40代のミドルエンジニアが「都内水準のキャリアと地方の暮らしやすさを両立する」転職先として検討しやすいエリアです。新幹線通勤圏という立地のおかげで、フルリモートに限定せず都内ハイブリッドも選べるのが他の地方都市にない強みです。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">30代の進め方</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                技術の市場価値を高めつつ、製造業×ITで上流から担うか、都内ハイブリッド・フルリモートで首都圏案件を経験するかを意識的に選ぶフェーズ。生活基盤を整えながらキャリアの幅を広げやすい時期です。
                <Link href="/age/30s/" className="text-petrol hover:underline">30代の転職ガイド</Link>
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">40代の進め方</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                マネジメントや高度専門など役割で評価される段階。都内ハイブリッドやハイクラスのリモート求人で年収を維持しつつ、宇都宮の暮らしやすさを両立できる形を選ぶのが現実的です。
                <Link href="/age/40s/" className="text-petrol hover:underline">40代の転職ガイド</Link>
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            リモート前提の働き方の実情は
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
          <h2 className="text-xl font-bold mb-3">宇都宮×リモート・通勤圏でIT転職を進めよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            地元の製造業×ITから都内ハイブリッド・首都圏フルリモートまで。エリア対応のエージェントに相談して、年収と暮らしのバランスが取れる選択肢を見つけましょう。
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
