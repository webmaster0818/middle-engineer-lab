import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "広島のIT転職事情【2026年】製造業DX・中国地方の市場と進め方",
  description:
    "広島・中国地方のIT/Webエンジニア転職を解説。製造業DXを軸にした求人の特徴、年収の考え方、対応エージェント、30代・40代の戦略、FAQをまとめた実用ガイドです。",
};

const faqs = [
  {
    q: "広島・中国地方はIT求人が少ない？",
    a: "首都圏や大阪と比べると求人の絶対数は少なめですが、広島は中四国の経済中心地で、製造業のDX推進やSIerの中国地方拠点、Web系・受託開発が一定数集まっています。地元勤務にこだわらずフルリモート求人も視野に入れると、選択肢は大きく広がります。エリアと働き方の両面で条件を整理することが重要です。",
  },
  {
    q: "広島の製造業DXとはどんな求人？",
    a: "自動車・鉄鋼・電機など、広島・中国地方に集積する製造業の業務システム刷新、生産管理・IoT・データ活用、社内DX推進といったポジションが中心です。業界知識がなくても、Web系やSIerでのアプリ開発・クラウド・インフラ経験があれば応募できる求人が多く見られます。詳細な技術スタックは各社の採用ページで確認してください。",
  },
  {
    q: "広島でフルリモートの仕事に就ける？",
    a: "オンライン面接が一般化し、広島在住のまま首都圏企業にフルリモートで入社する選択肢が現実的になっています。地元の求人だけに絞らず、フルリモート前提の求人を併せて探すのが効率的です。詳しくは地方在住×フルリモートの戦略ガイドも参考にしてください。",
  },
  {
    q: "30代・40代でも広島で転職できる？",
    a: "経験者採用が中心の地方では、むしろ実務経験のある30代・40代が評価されやすい場面があります。製造業DXや社内SE、SIerのリーダー職などはマネジメント・要件定義の経験が歓迎されます。年齢より「即戦力として何を任せられるか」を整理して伝えることが鍵です。",
  },
  {
    q: "広島のITエンジニアの年収相場は？",
    a: "当サイトでは断定的な広島限定の平均値は持っていません。全国のレバテック公表値（2025年）では正社員SEの平均が30代約499万円・40代約618万円です。地方は首都圏よりやや低めになる傾向がある一方、フルリモートで首都圏水準の求人に就けば差は縮まります。出典付きの一般データを目安にしてください。",
  },
  {
    q: "地元エージェントと全国型、どちらを使うべき？",
    a: "IT求人は全国型のIT特化エージェントが情報量で有利なケースが多いです。広島の製造業DXや地元企業も押さえたい場合は、全国に求人網を持つ総合型を併用すると死角が減ります。1社に絞らず2〜3社を併用し、エリア・働き方の希望を明確に伝えるのがおすすめです。",
  },
  {
    q: "広島で転職活動を始める手順は？",
    a: "まず「地元勤務かフルリモートか」「年収か働き方どちらを優先するか」を決め、職務経歴を棚卸しします。次にIT特化エージェントへ登録し、希望条件を伝えて求人を集め、複数社の提案を比較します。在職中に進めると焦って妥協しにくくなります。",
  },
  {
    q: "未経験から広島でITエンジニアになれる？",
    a: "地方は経験者採用の比率が高く、完全未経験での正社員採用は首都圏より狭き門になりがちです。まずは学習やポートフォリオで実績を作り、未経験歓迎求人を扱うエージェントに相談するのが現実的です。年齢が上がるほど難易度は上がるため、早めの行動と計画が大切です。",
  },
];

const areas = [
  {
    name: "広島駅・八丁堀エリア",
    type: "SIer中国地方拠点、受託開発、社内SE",
    feature:
      "中四国最大のビジネス街。大手SIerの拠点や受託開発企業、事業会社の情報システム部門が集まる。出社前提の求人が多いが、通勤環境は首都圏より快適。",
  },
  {
    name: "府中町・安芸郡（自動車関連）",
    type: "製造業DX、組込み、生産系IT",
    feature:
      "広島を代表する自動車産業の集積エリア。コネクテッド化・電動化に伴うソフトウェア需要、生産管理・データ活用の求人が出る。専門性が高く年収水準も相対的に高め。",
  },
  {
    name: "東広島・福山（製造業集積）",
    type: "製造業IT、半導体関連、社内DX",
    feature:
      "東広島は大学・研究機関と製造業、福山は鉄鋼・製造業が集積。社内DXや業務システム刷新の求人が中心。腰を据えて働きたいエンジニア向け。",
  },
  {
    name: "Web系・スタートアップ",
    type: "Web制作、自社サービス、EC",
    feature:
      "規模は首都圏に及ばないが、紙屋町・八丁堀周辺を中心にWeb制作・自社サービス企業が点在。リモート・ハイブリッドを取り入れる企業も増加傾向。",
  },
  {
    name: "フルリモート（首都圏企業）",
    type: "Web系、SaaS、受託（在宅）",
    feature:
      "広島在住のまま首都圏企業にフルリモートで勤務するパターン。地元求人より年収レンジが広く、職種の選択肢も多い。地方在住エンジニアの主力戦略になりつつある。",
  },
];

const agents = [
  {
    name: "レバテックキャリア",
    href: "/review/levtech/",
    point:
      "IT/Web特化の大手。公開求人は約5万件超（2026年6月時点・複数転職メディア集計）。利用者の約8割が20〜30代で、フルリモート求人や首都圏の高年収求人にアクセスしやすい。広島在住からの遠隔利用にも向く。",
  },
  {
    name: "doda ITエンジニア",
    href: "/review/doda-it/",
    point:
      "全国対応の国内最大級。IT・通信エンジニア求人は5万件超（2026年2月時点・二次情報）。広島・中国地方の地元企業や製造業系の求人も拾いやすく、検索+エージェント+スカウトのハイブリッド型で併用に向く。",
  },
  {
    name: "リクルートエージェントIT",
    href: "/review/recruit-it/",
    point:
      "IT公開求人110,840件／非公開101,680件（2026年5月22日時点・二次集計）と国内最大級。地方をカバーする求人網が広く、大手からスタートアップまで網羅。選択肢を最大化したい時の軸になる。",
  },
];

const relatedLinks = [
  { name: "地方在住×フルリモート転職の戦略", href: "/area/remote/" },
  { name: "地方移住×エンジニア転職ガイド", href: "/area/iiju/" },
  { name: "福岡のIT転職事情", href: "/area/fukuoka/" },
  { name: "大阪のIT転職事情", href: "/area/osaka/" },
  { name: "製造業からのIT転職", href: "/industry/manufacturing/" },
  { name: "リモート求人に強いエージェント比較", href: "/compare/remote-agents/" },
];

export default function HiroshimaAreaPage() {
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
        title="広島のIT転職事情【2026年】製造業DX・中国地方の市場と進め方"
        description="広島・中国地方のIT/Webエンジニア転職を解説。製造業DXを軸にした求人の特徴、年収の考え方、対応エージェント、30代・40代の戦略をまとめた実用ガイドです。"
        url="/area/hiroshima/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "エリア別ガイド" },
          { name: "広島のIT転職事情" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          広島のIT転職事情【2026年】製造業DX・中国地方の市場と進め方
        </h1>
        <p className="text-slate-500 text-sm mb-4">
          最終更新: 2026年6月 | 広島・中国地方のIT転職ガイド
        </p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            広島・中国地方は、自動車をはじめとする製造業のDX需要と、中四国の経済中心地としてのSIer・受託開発・社内SE求人が組み合わさったエリアです。求人の絶対数は首都圏に及びませんが、「地元勤務」と「フルリモートで首都圏企業に就く」の両方を視野に入れれば、30代・40代でも十分に戦える市場です。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、広島のエリア別求人特徴、年収の考え方、対応エージェント、30代・40代の戦略、FAQまでを実用本位でまとめます。
          </p>
        </section>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテックキャリア公式ガイド（年代別平均年収・2025年）",
            "doda ITエンジニア（二次集計）",
            "リクルートエージェント（二次集計）",
          ]}
        />

        <section className="mb-10 bg-petrol-soft border border-blue-100 rounded-xl p-6">
          <h2 className="text-lg font-bold text-blue-900 mb-3">結論：広島はこう攻める</h2>
          <ul className="space-y-2 text-sm text-blue-900">
            <li>① <strong>地元勤務とフルリモートを併走</strong>させると選択肢が一気に増える。地元求人だけに絞らない。</li>
            <li>② <strong>製造業DX・社内SE・SIer</strong>は経験者の30代・40代が評価されやすく、ミドル層の主戦場。</li>
            <li>③ 求人量は<strong>全国型IT特化エージェントが有利</strong>。1社に依存せず2〜3社併用で死角を減らす。</li>
          </ul>
        </section>

        <nav className="mb-10 border border-slate-200 rounded-xl p-5 bg-white">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ul className="space-y-1.5 text-sm text-petrol-deep">
            <li><a href="#market" className="hover:underline">広島・中国地方IT転職市場の特徴</a></li>
            <li><a href="#areas" className="hover:underline">エリア・働き方別の求人傾向</a></li>
            <li><a href="#strategy" className="hover:underline">広島での転職の進め方</a></li>
            <li><a href="#salary" className="hover:underline">年収の考え方</a></li>
            <li><a href="#agents" className="hover:underline">広島の転職に対応するエージェント</a></li>
            <li><a href="#age" className="hover:underline">30代・40代の視点</a></li>
            <li><a href="#faq" className="hover:underline">よくある質問</a></li>
            <li><a href="#related" className="hover:underline">関連記事</a></li>
          </ul>
        </nav>

        <section id="market" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">広島・中国地方IT転職市場の特徴</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            広島は人口約120万人の政令指定都市で、中四国の経済・交通の結節点です。IT転職市場としての特徴は、大きく次の3点に整理できます。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">1. 製造業DXが需要の柱</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                自動車・鉄鋼・電機など、中国地方に集積する製造業のデジタル化が求人の中心です。基幹システムの刷新、生産管理・IoT・データ活用、社内DX推進など、長期的に取り組むテーマが多く、腰を据えて働きたいエンジニアと相性が良いのが特徴です。業界未経験でもアプリ開発・クラウド・インフラの経験があれば応募できる求人が見られます。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">2. SIer拠点・社内SEが安定して存在</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                広島駅・八丁堀周辺には大手SIerの中国地方拠点や受託開発企業、事業会社の情報システム部門が集まります。プロジェクトの上流（要件定義・設計・進行管理）を担える経験者は重宝され、ミドル層の受け皿になりやすい領域です。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">3. フルリモートで首都圏求人にアクセス可能</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                オンライン面接の定着で、広島在住のまま首都圏企業にフルリモートで入社する道が現実的になりました。地元求人だけでは年収・職種の選択肢が限られる場面でも、フルリモート前提の求人を併せて探すことで市場が大きく広がります。地方在住者ならではの戦略は
                <Link href="/area/remote/" className="text-petrol hover:underline">地方在住×フルリモート転職の戦略</Link>
                で詳しく解説しています。
              </p>
            </div>
          </div>
        </section>

        <section id="areas" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エリア・働き方別の求人傾向</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            広島での求人は、エリアと働き方によって性格が大きく異なります。地理的なエリアに加え、「フルリモートで首都圏企業」という選択肢も1つの枠として捉えると整理しやすくなります。
          </p>
          <div className="overflow-x-auto mb-2">
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">エリア・働き方</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">主な求人タイプ</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">特徴</th>
                </tr>
              </thead>
              <tbody>
                {areas.map((area, i) => (
                  <tr key={i} className="hover:bg-slate-50 align-top">
                    <td className="px-3 py-3 border border-slate-200 font-medium">{area.name}</td>
                    <td className="px-3 py-3 border border-slate-200 text-slate-600">{area.type}</td>
                    <td className="px-3 py-3 border border-slate-200 text-slate-600">{area.feature}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500">
            ※ エリアごとの求人傾向は2026年6月時点の一般的な整理です。実際の求人内容・技術スタックは各社の採用情報をご確認ください。
          </p>
        </section>

        <section id="strategy" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">広島での転職の進め方</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-petrol text-white text-xs font-bold shrink-0">1</span>
                <p className="text-sm text-slate-600"><strong>働き方の軸を先に決める:</strong> 「地元出社」「ハイブリッド」「フルリモートで首都圏企業」のどれを優先するかを最初に決める。これで応募先の母集団が大きく変わる。</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-petrol text-white text-xs font-bold shrink-0">2</span>
                <p className="text-sm text-slate-600"><strong>職務経歴を棚卸し:</strong> 担当領域・規模・役割（設計/実装/リーダー）を整理。製造業DXやSIerでは上流・マネジメント経験が刺さりやすい。<Link href="/knowledge/self-analysis/" className="text-petrol hover:underline">自己分析の進め方</Link>も参考に。</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-petrol text-white text-xs font-bold shrink-0">3</span>
                <p className="text-sm text-slate-600"><strong>IT特化エージェントへ登録:</strong> 地方は求人が分散しやすいため、全国型のIT特化エージェントを軸に。エリアと働き方の希望を初回面談で明確に伝える。</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-petrol text-white text-xs font-bold shrink-0">4</span>
                <p className="text-sm text-slate-600"><strong>2〜3社を併用:</strong> 1社の求人だけでは地方は母数が足りないことがある。複数社を併用して比較材料を増やす。<Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">複数エージェント併用のコツ</Link>を参照。</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-petrol text-white text-xs font-bold shrink-0">5</span>
                <p className="text-sm text-slate-600"><strong>在職中に進める:</strong> 地方は選考機会が限られるため、焦りからの妥協を避けるためにも在職中に進めるのが安全。</p>
              </div>
            </div>
          </div>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            当サイトは「広島限定の正確な平均年収」を独自に保有していません。ここでは出典の明確な全国データを目安として示します。広島限定の数値を断定するのは避け、相場感の参考としてご活用ください。
          </p>
          <div className="bg-white border border-slate-200 rounded-xl p-6 mb-4">
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              <strong>レバテック公表の年代別平均年収（2025年・正社員SE）:</strong> 20代 約378万円／30代 約499万円／40代 約618万円／50代 約685万円。年収1,000万円以上の割合は30代8.01%・40代12.67%（出典: career.levtech.jp/freelance.levtech.jp ガイド記事）。
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>厚労省 job tag（システムエンジニア・受託開発）:</strong> 平均年収578.5万円・平均年齢37.1歳（令和7年賃金構造基本統計調査ベース）。
            </p>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            一般に地方は首都圏よりやや低めの提示になる傾向があります。一方で、フルリモートで首都圏企業の求人に就けば年代別の全国水準に近づけられます。広島の生活コストは首都圏より低いため、同じ年収でも可処分所得の面で有利になりやすい点も考慮材料です。年収交渉の進め方は
            <Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉のコツ</Link>
            を参考にしてください。
          </p>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">広島の転職に対応するエージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            広島・中国地方では地元密着サービスもありますが、IT求人の情報量では全国対応のサービスが有利です。以下は当サイトのデータシートに基づく対応エージェントです（数値は時点付き）。
          </p>
          <div className="space-y-4">
            {agents.map((a, i) => (
              <div key={i} className="bg-petrol-soft rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-2">{i + 1}. {a.name}</h3>
                <p className="text-sm text-petrol-deep leading-relaxed mb-2">{a.point}</p>
                <Link href={a.href} className="text-sm font-medium text-petrol-deep hover:underline">
                  {a.name}の詳細レビューを見る →
                </Link>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">
            ※ 求人数・実績は調査時点の公開情報・二次集計に基づきます。最新の状況は各公式サイトでご確認ください。
          </p>
        </section>

        <section id="age" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の視点</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">30代：経験を武器に選択肢を広げる</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                30代は実務経験と伸びしろのバランスが良く、地方でも歓迎されやすい層です。製造業DXやSIerの中核ポジション、社内SEのリーダー候補など、任せられる役割の幅が広いのが強み。地元勤務とフルリモートを併走させ、年収と働き方の両方を比較したうえで決めると後悔が少なくなります。
                <Link href="/age/30s/" className="text-petrol hover:underline">30代の転職戦略</Link>
                も参考に。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">40代：マネジメント・要件定義が評価される</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                40代は求人数こそ絞られますが、製造業DXや社内DX推進、SIerの上流など「人と要件をまとめる」ポジションでは経験が直接評価されます。プレイヤーとしての実装力だけでなく、プロジェクトを前に進めた実績を具体的に語れるかが分かれ目です。
                <Link href="/age/40s/" className="text-petrol hover:underline">40代の転職戦略</Link>
                や
                <Link href="/knowledge/40s-reality/" className="text-petrol hover:underline">40代転職のリアル</Link>
                も確認しておきましょう。
              </p>
            </div>
          </div>
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
          <h2 className="text-xl font-bold mb-3">広島のIT転職を成功させよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            製造業DXを軸にした地元求人と、フルリモートで首都圏企業に就く選択肢。両方を比較して、自分に合う働き方を見つけましょう。
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
            {relatedLinks.map((item, i) => (
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
