import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/area/matsuyama/" },
  title: "松山・愛媛のIT転職事情【2026年】四国のIT拠点×リモート移住",
  description:
    "松山・愛媛のITエンジニア転職を30代・40代向けに正直に解説。四国最大の都市圏としてのIT拠点の実情、地元求人の現実、首都圏フルリモート併用、UIターン移住支援、年収の考え方をまとめました。",
};

const toc = [
  { id: "conclusion", label: "結論：松山・愛媛のIT転職市場の特徴" },
  { id: "market", label: "松山・愛媛のIT・産業集積" },
  { id: "reality", label: "求人の実情（正直な市場記述）" },
  { id: "workstyle", label: "働き方の選択肢（地元×リモート移住）" },
  { id: "iju", label: "UIターン移住支援・公的制度" },
  { id: "salary", label: "年収の考え方（年代別データ）" },
  { id: "agents", label: "松山・愛媛に対応するエージェント" },
  { id: "fit", label: "松山転職が向いている人・向いていない人" },
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
      "IT/Web特化型。技術理解の高いアドバイザーが特徴で、首都圏のフルリモート求人を介して松山在住のまま都市部水準の案件を狙う使い方と相性が良い。高年収求人比率の高さも特徴とされる。",
  },
  {
    name: "ワークポート",
    href: "/review/workport/",
    point:
      "全国47都道府県57拠点を構える総合型。地方在住からの相談に向き、未経験歓迎求人も比較的多い。四国・愛媛の地元求人と首都圏求人の双方に当たりやすい。",
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
      "ハイクラス・スカウト型。年収750万円以上の求人やフルリモート対応のシニア・管理職ポジションを、松山在住のまま探したい人向け。市場価値を客観的に把握しやすい。",
  },
];

const faqs = [
  {
    q: "松山・愛媛にITエンジニアの求人はどのくらいありますか？",
    a: "松山は四国の中では人口規模の大きい都市圏ですが、首都圏や福岡と比べると地元のIT求人の母数は限られるのが実情です。具体的な件数は時期やエージェント・媒体によって大きく変わるため、本記事では断定を避けます。地元のSIer・受託・自社開発に加え、首都圏企業のフルリモート求人を併用して母数を広げるのが現実的な進め方です。最新の求人状況はエージェントに確認するのが確実です。",
  },
  {
    q: "松山は四国のIT拠点と言えますか？",
    a: "松山市は四国で人口規模の大きい都市の一つで、県庁所在地として行政・経済の機能が集まる四国の中核都市です。地元密着のSIerや受託開発、自社サービス企業が一定数あり、四国エリアでIT転職を考える際の有力な拠点になります。ただし『四国の拠点』であることと『首都圏並みの求人量がある』ことは別で、最先端のWeb自社開発に絞ると選択肢は限られます。",
  },
  {
    q: "松山・愛媛のITエンジニアの年収はどのくらいですか？",
    a: "松山・愛媛エリア限定の確定した平均年収データは限られます。参考値として、レバテックが公表する正社員SEの年代別平均年収（2025年・全国）は30代で約499万円、40代で約618万円です。地方は額面が首都圏より低めになる傾向がある一方、住居費を抑えやすく可処分所得で見ると差が縮まる場合があります。首都圏フルリモート求人を選べば、松山に住みながら都市部水準の額面を狙える可能性もあります。",
  },
  {
    q: "松山に住みながら首都圏企業で働けますか？",
    a: "オンライン面接が一般化し、フルリモート可の求人であれば松山在住のまま首都圏企業で働ける場合があります。エージェントに『松山在住・フルリモート希望』と明確に伝えると、対象求人を絞り込んでもらいやすくなります。ただし入社後に出社頻度が変わる可能性もあるため、面談で運用実態（恒久的な制度か、月数回の出社があるか）を必ず確認しましょう。",
  },
  {
    q: "松山・愛媛へのUIターン移住に使える支援制度はありますか？",
    a: "愛媛県や松山市など各市町村は移住・定住の相談窓口や支援情報を公開しています。国の地方創生施策である移住支援金（東京圏からの移住で要件を満たすと交付される制度。金額・要件は自治体ごとに異なる）の対象になる場合もあります。制度は年度や居住地によって変わるため、必ず愛媛県・移住先市町村の公式サイトや相談窓口で最新の要件を確認してください。",
  },
  {
    q: "松山・愛媛のIT転職におすすめのエージェントは？",
    a: "首都圏フルリモートを狙うならレバテックキャリア、地方在住からの相談と未経験対応も視野に入れるならワークポート、求人母数を重視するならdoda、ハイクラスのリモート求人を狙うならビズリーチが候補です。地元求人が限られる地方では複数併用が特に有効で、提案傾向を比較しながら進めるのがおすすめです。",
  },
  {
    q: "Uターンで松山に戻りたいのですが、IT転職は現実的ですか？",
    a: "現実的です。地元のSIer・受託・自社開発に絞る方法に加え、首都圏企業のフルリモート求人を選べば前職水準の年収・案件を保ったまま松山に戻る道もあります。地元求人だけだと選択肢が狭くなりやすいので、フルリモートを併用すると無理のないUターンを実現しやすくなります。移住支援制度の対象になるかも合わせて確認するとよいでしょう。",
  },
];

const related = [
  { name: "高松・香川のIT転職事情", href: "/area/takamatsu/" },
  { name: "広島のIT転職事情", href: "/area/hiroshima/" },
  { name: "エリア別IT転職ガイド一覧", href: "/area/" },
  { name: "フルリモート可の求人で働く", href: "/purpose/remote-full/" },
  { name: "リモートワークの実情", href: "/knowledge/remote-work/" },
  { name: "30代の転職ガイド", href: "/age/30s/" },
];

export default function MatsuyamaAreaPage() {
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
        title="松山・愛媛のIT転職事情【2026年】四国のIT拠点×リモート移住"
        description="松山・愛媛のITエンジニア転職を30代・40代向けに正直に解説。四国最大級の都市圏としてのIT拠点の実情、地元求人の現実、首都圏フルリモート併用、UIターン移住支援、年収の考え方をまとめました。"
        url="/area/matsuyama/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エリア別ガイド", href: "/area/" },
          { name: "松山・愛媛のIT転職事情" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          松山・愛媛のIT転職事情【2026年】四国のIT拠点×リモート移住
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 松山・愛媛エリアのITエンジニア転職ガイド
        </p>

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed">
            松山市は、四国で人口規模の大きい都市の一つであり、県庁所在地として行政・経済の機能が集まる四国の中核都市です。地元密着のSIerや受託開発、自社サービス企業が一定数あり、四国でIT転職を考える際の有力な拠点になります。一方で、求人の母数は首都圏や福岡と比べると限られるのが正直なところです。本記事では、創作データを使わず、公開情報をもとに松山・愛媛のIT転職市場の現実、首都圏フルリモートの併用、UIターン移住支援、年代別の年収の考え方を、30代・40代のミドルエンジニア向けに整理します。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテック公表の年代別平均年収（2025年）",
            "経済産業省 IT人材需給に関する調査（2019年3月公表）",
            "愛媛県・松山市等の移住支援情報（公式）",
          ]}
        />

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border-l-4 border-blue-500 rounded-r-lg p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：松山・愛媛のIT転職市場の特徴</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              松山は四国の中核都市として、地元のSIer・受託・自社開発が一定数あり、四国でのIT転職・Uターンの受け皿になります。ただし求人母数は首都圏より限られるため、地元求人と首都圏フルリモート求人を組み合わせて選択肢を広げる戦略が有効です。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>・四国の中核都市として地元IT企業が一定数あり、Uターンの受け皿になりやすい</li>
              <li>・求人母数は首都圏より限られる。件数の断定は避け、エージェントで実数を確認するのが確実</li>
              <li>・首都圏フルリモート求人の併用で、松山の生活コストのまま年収の選択肢を広げられる</li>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">松山・愛媛のIT・産業集積</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            松山市は四国で人口規模の大きい都市の一つで、愛媛県の県庁所在地として行政・金融・サービスの機能が集中しています。四国の中核都市として、地元密着のSIerや受託開発、自社サービスを手がける企業が立地しており、四国エリアでIT転職を考える際の起点になります。
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">地元のSIer・受託・自社開発</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                地域の行政・金融・医療・製造・農業・観光などを支えるシステム需要があり、地元密着のSIerや受託開発企業が一定数あります。自社サービスを手がける企業も見られ、地域に根ざしたキャリアを志向する人の受け皿になります。一方、モダンなWeb/SaaSの最先端領域に絞ると選択肢は首都圏より限られます。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">四国の中核都市としての位置づけ</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                松山は四国内では人口・経済規模の大きい都市であり、四国でのIT就業を考える際の有力な選択肢です。ただし「四国の中核」であることと「首都圏並みの求人量がある」ことは別であり、求人量の点では大都市圏に及ばない点を正直に踏まえる必要があります。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">構造的なIT人材不足という背景</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                経済産業省が2019年3月に公表した「IT人材需給に関する調査」では、2030年に最大約79万人のIT人材不足が試算されています。地方でもDX・社内システム・受託開発を担う人材の需要は構造的に続くと見られ、経験者にとって不利一辺倒ではありません。
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            ※ 上記は公開情報に基づく一般的な傾向の整理です。特定企業の求人数・採用数の断定は避けています。
          </p>
        </section>

        {/* 求人の実情 */}
        <section id="reality" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の実情（正直な市場記述）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            正直にお伝えすると、松山・愛媛の地元IT求人は首都圏や福岡と比べて母数が限られます。四国の中核都市とはいえ、「ソフトウェアエンジニアの求人が無数にある」状況ではありません。これは松山に限らず多くの地方都市に共通する現実です。求人の探し方を工夫することが転職成功の鍵になります。
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3">
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>地元求人だけに絞らない：</strong> 地元のSIer・受託・自社開発に加え、首都圏企業のフルリモート求人を併用すると、応募できる母数が一気に広がります。松山に住んだまま、都市部水準の案件・年収を狙える可能性があります。
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>Uターン・地元志向との相性：</strong> 松山は地元出身者のUターン先として選ばれやすい都市です。地元求人とフルリモートを組み合わせることで、地元に住みながらキャリアの選択肢を確保できます。
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>件数の数字を鵜呑みにしない：</strong> 求人件数は時期・媒体・エージェントで大きく変動します。本記事では具体的な件数を断定しません。最新の実数は複数のエージェントに当たって確認してください。
            </p>
          </div>
        </section>

        {/* 働き方 */}
        <section id="workstyle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">働き方の選択肢（地元×リモート移住）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            松山で働くエンジニアの選択肢は、大きく次の3つに整理できます。年収・出社頻度・生活コスト・地元志向のどれを重視するかで、軸にすべきパターンが変わります。
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-petrol text-white text-xs font-bold shrink-0">A</span>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>地元企業に出社・ハイブリッドで勤務:</strong> 松山中心部のSIer・受託・自社開発で働く。地域に根ざしたキャリアを重視する人や、地元のつながりを活かしたい人向けです。
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-petrol text-white text-xs font-bold shrink-0">B</span>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>松山在住×首都圏企業のフルリモート:</strong> 松山の生活コストを保ちつつ首都圏水準の年収・案件を狙う選択肢。地元求人の母数の制約を回避できるのが最大の利点です。
                <Link href="/purpose/remote-full/" className="text-petrol hover:underline">フルリモート可の求人</Link>
                や
                <Link href="/area/iiju/" className="text-petrol hover:underline">地方移住×IT転職ガイド</Link>
                もあわせて検討しましょう。
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-petrol text-white text-xs font-bold shrink-0">C</span>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>UIターン移住＋リモート:</strong> 県外からの移住で松山に拠点を移しつつ、フルリモートで前職水準の働き方を続ける形。移住支援制度の活用も視野に入ります（次章で解説）。
              </p>
            </div>
          </div>
        </section>

        {/* 移住支援 */}
        <section id="iju" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">UIターン移住支援・公的制度</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            松山・愛媛へのUIターンを検討する場合、自治体の移住支援を活用できる可能性があります。制度は年度・居住地・要件によって変わるため、ここでは仕組みの概要のみを示します。具体的な金額・要件は必ず公式の窓口で確認してください。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">移住支援金（地方創生施策）</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                国の地方創生施策として、東京圏（東京・神奈川・埼玉・千葉の一部）から地方へ移住し一定の要件を満たした場合に交付される移住支援金の制度があります。テレワークで移住前の仕事を続けるケースが対象となる場合もあります。金額・対象要件は愛媛県および移住先市町村ごとに異なります。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">移住相談窓口・お試し移住</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                愛媛県や松山市など各市町村は移住相談の窓口を設けており、住まい・仕事・子育てなどの情報を提供しています。お試し移住や体験プログラムを用意する自治体もあります。転職と移住を同時に進める場合は、こうした窓口を早めに活用すると段取りが組みやすくなります。
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            ※ 移住支援金をはじめとする各制度は要件・金額・実施状況が変わります。必ず愛媛県・移住先市町村の公式サイトや相談窓口で最新情報を確認してください（出典：各自治体公式の移住支援情報）。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方（年代別データ）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            松山・愛媛エリア固有の平均年収を断定できる公的データは限られます。ここでは、レバテックが公表する正社員SEの年代別平均年収（2025年・全国）を参考値として示します。地方は額面が首都圏より低めになる傾向がある一方、住居費を抑えやすく可処分所得で見ると差が縮まる場合があります。
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
            ※ 出典: レバテック公表の年代別平均年収（2025年・正社員SE）。年収1,000万円以上の割合は30代8.01%・40代12.67%とされています。いずれも全国の値で、松山・愛媛エリア限定の数値ではありません。
          </p>
          <p className="text-slate-600 leading-relaxed">
            松山で年収を考えるときは、額面と生活コストのバランスが鍵になります。首都圏のフルリモート求人を選べば、松山の生活コストのまま高めの額面を狙える可能性もあります。年代別の考え方は
            <Link href="/knowledge/salary-30s/" className="text-petrol hover:underline">30代の年収アップ</Link>
            ・
            <Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収戦略</Link>
            も参考にしてください。
          </p>
        </section>

        {/* エージェント */}
        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">松山・愛媛に対応するエージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            地元求人が限られる松山では、首都圏フルリモートに強いIT特化型と、全国対応の総合型を組み合わせるのが基本戦略です。ワークポートは全国47都道府県57拠点を構えており、地方在住からの相談に向いています。
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">松山転職が向いている人・向いていない人</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            エリアには「合う・合わない」があります。松山・愛媛の市場特性を踏まえ、どんな志向の人が力を発揮しやすいかを整理しました。あくまで傾向であり、最終的には個々の求人とのマッチングで判断するのが基本です。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-green-200 bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 text-sm mb-3">向いている人</h3>
              <ul className="space-y-2 text-sm text-green-900">
                <li className="flex gap-2"><span className="shrink-0">✓</span><span>四国・愛媛にゆかりがあり、Uターンで地元に戻って働きたい</span></li>
                <li className="flex gap-2"><span className="shrink-0">✓</span><span>フルリモートで首都圏案件に関わりながら松山で暮らしたい</span></li>
                <li className="flex gap-2"><span className="shrink-0">✓</span><span>地域密着のSIer・受託・自社開発で長く働きたい</span></li>
                <li className="flex gap-2"><span className="shrink-0">✓</span><span>生活コストを抑え、暮らしやすさを重視した移住を検討している</span></li>
              </ul>
            </div>
            <div className="border border-slate-200 bg-slate-50 rounded-lg p-5">
              <h3 className="font-bold text-slate-700 text-sm mb-3">慎重に検討したい人</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2"><span className="shrink-0">−</span><span>最先端のWeb/SaaS自社開発の選択肢を地元で最大化したい（母数は首都圏が圧倒的）</span></li>
                <li className="flex gap-2"><span className="shrink-0">−</span><span>地元出社の求人だけで転職先を決めたい（選択肢が狭くなりやすい）</span></li>
                <li className="flex gap-2"><span className="shrink-0">−</span><span>短期間で大幅な年収アップを地元求人だけで狙いたい（フルリモート併用が現実的）</span></li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            「慎重に検討したい人」に当てはまっても、松山在住のまま首都圏のフルリモート求人を選べば、希望の案件・年収に近づける場合があります。地元にこだわりすぎず、働き方の選択肢を広げることが松山での転職成功の近道です。
          </p>
        </section>

        {/* 30代40代 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代エンジニアの視点</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            松山は、30代・40代のミドルエンジニアが「地元志向と年収のバランスを取る」転職先として検討しやすいエリアです。フルリモートで首都圏の年収を保つ道も、地元企業で地に足のついたキャリアを築く道も選べます。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">30代の進め方</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                技術の市場価値を高めつつ、フルリモートで首都圏案件を経験するか、地元企業で上流から担う経験を積むかを意識的に選ぶフェーズ。生活基盤を整えながらキャリアの幅を広げやすい時期です。
                <Link href="/age/30s/" className="text-petrol hover:underline">30代の転職ガイド</Link>
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 text-sm mb-2">40代の進め方</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                マネジメントや高度専門など役割で評価される段階。地元求人は絞られますが、ハイクラスのリモート求人で年収を維持しつつ移住・Uターンによる暮らしの充実を両立できる形を選ぶのが現実的です。
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
          <h2 className="text-xl font-bold mb-3">松山×リモートでIT転職を進めよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            地元のSIer・受託から首都圏フルリモートまで。エリア対応のエージェントに相談して、年収と暮らしのバランスが取れる選択肢を見つけましょう。
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
