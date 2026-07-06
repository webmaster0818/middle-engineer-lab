import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "30代・40代エンジニア向け転職エージェント比較ランキング【2026年版】",
  description:
    "30代・40代のITエンジニアにおすすめの転職エージェントを徹底比較。年収UP実績・口コミ・得意分野を出典付きデータで比較し、あなたに最適なエージェントが見つかります。最終更新2026年6月。",
};

interface Agent {
  rank: number;
  name: string;
  tagline: string;
  features: string[];
  pros: string[];
  cons: string[];
  recommend: string;
  reviewPath: string;
}

const agents: Agent[] = [
  {
    rank: 1,
    name: "レバテックキャリア",
    tagline: "IT・Web特化 - 高年収求人比率が高い",
    features: [
      "IT・Web特化の公開求人 約5万件超(2026年5〜6月時点・複数転職メディア集計)",
      "年収600万円以上が公開求人の約8割との二次情報",
      "利用者の約80%が20〜30代(公式ガイド)",
      "技術知識を持つキャリアアドバイザーが在籍",
    ],
    pros: [
      "技術トレンドを理解したアドバイザーによる的確な提案",
      "企業の開発環境や技術スタックの詳細情報を把握",
      "年収交渉力が高く、平均年収UP額が大きい",
    ],
    cons: [
      "地方の求人は都市部と比較すると少ない",
      "ハイクラス寄りのため未経験者向けではない",
    ],
    recommend:
      "実務経験のある30代エンジニアで、年収アップを目指す方に最適。特にWeb系・SaaS企業への転職を考えている方におすすめ。",
    reviewPath: "/review/levtech/",
  },
  {
    rank: 2,
    name: "Geekly",
    tagline: "IT/Web/ゲーム特化 - 提案スピードが強み",
    features: [
      "IT・Web・ゲーム業界に特化(2026年5月時点で非公開含め46,000件以上・二次集計)",
      "年収アップ率約81%・平均上昇額約76万円(2025年9月時点・二次情報)",
      "希望職種への定着率97%(二次情報)",
      "提案スピードの速さに定評",
    ],
    pros: [
      "ゲーム・エンタメ・Web業界の求人に強い",
      "レスポンスが早く選考までスムーズ(口コミ傾向)",
      "実務経験者への提案数が多い(口コミ傾向)",
    ],
    cons: [
      "IT/Web/ゲーム以外の求人はほとんどない",
      "連絡がしつこい・担当の質にばらつきとの声(Qiita Job Change等)",
    ],
    recommend:
      "ゲーム・エンタメ・Web業界への転職を狙う30代エンジニアに最適。スピーディに選考を進めたい方や、実務経験を活かしたい方に。",
    reviewPath: "/review/geekly/",
  },
  {
    rank: 3,
    name: "マイナビIT AGENT",
    tagline: "大手の安定感 - 社内SE求人が豊富",
    features: [
      "マイナビグループの信頼とネットワーク",
      "20〜30代の若手層に強い求人構成",
      "書類添削・面接対策が手厚い",
      "転職後定着率97.5%・年収アップ率73.7%(転職メディア集計)",
    ],
    pros: [
      "サポートが手厚く担当がIT業界に詳しい(口コミ傾向)",
      "初めての転職でも安心の支援体制",
      "若手・第二新卒層への提案に強い",
    ],
    cons: [
      "ハイクラス・地方求人が手薄との声(axxis等)",
      "紹介求人数が少ない場合・連絡が多いとの声",
    ],
    recommend:
      "SIerから社内SEへのキャリアチェンジを考える30代前半のエンジニアに。大手企業の安定した環境で働きたい方におすすめ。",
    reviewPath: "/review/mynavi-it/",
  },
  {
    rank: 4,
    name: "ワークポート",
    tagline: "IT未経験OK - 転職決定人数No.1のスピード対応",
    features: [
      "全国47都道府県57拠点(2025年4月現在・公式)",
      "公開求人11万件以上・うちIT関連3万件以上(公式LP・二次)",
      "未経験歓迎求人も豊富でスピード重視",
      "総合型だがIT・ゲーム領域が最も強い",
    ],
    pros: [
      "紹介求人の量が多くレスポンスが早い(口コミ傾向)",
      "異業種からIT業界への転職支援に強い",
      "未経験歓迎求人が豊富",
    ],
    cons: [
      "連絡が多すぎるとの声(axxis/イーデス等)",
      "希望と異なる求人紹介・担当の専門性にばらつき",
    ],
    recommend:
      "製造業や金融業からITエンジニアへのキャリアチェンジを目指す30代に。未経験からでもIT業界に入りたい方に最適。",
    reviewPath: "/review/workport/",
  },
  {
    rank: 5,
    name: "doda(IT特化)",
    tagline: "求人数最多級 - エージェント+サイト両方使える",
    features: [
      "IT・通信エンジニア求人5万件超(2026年2月時点・二次経由)",
      "検索+エージェント+スカウトのハイブリッド型",
      "全国対応で選択肢が広い(doda公式)",
      "転職者の約6割が年収アップ(2024年度・パーソルキャリア公表)",
    ],
    pros: [
      "求人量が多く好条件求人も多い(口コミ傾向)",
      "自分で求人を探しつつ、エージェントの提案も受けられる",
      "全国対応でエリアを選ばない",
    ],
    cons: [
      "求人・連絡が多すぎるとの声(freeconsul/HonNe等)",
      "IT専門性がやや低いとの声・担当の質にばらつき",
    ],
    recommend:
      "幅広い選択肢の中からじっくり選びたい方に。エージェント型と自分で探す方法の両方を使い分けたい方におすすめ。",
    reviewPath: "/review/doda-it/",
  },
  {
    rank: 6,
    name: "テックゴー（TechGo）",
    tagline: "MyVision運営 - 模擬面接と年収交渉に強い新鋭",
    features: [
      "年収アップ金額 平均138万円(2025年6〜7月の内定承諾者平均・公式)",
      "年収交渉成功率100%(2025年9月時点・公式)",
      "求人1万件以上。独占選考ルート・面接確約求人あり(公式)",
      "オンライン面談中心で平日夜間・土曜も対応(公式FAQ)",
    ],
    pros: [
      "模擬面接を何度も実施する手厚い選考対策(公式明記)",
      "コンサル転職大手MyVisionグループの交渉ノウハウ",
      "30代の公表実績は平均+160万円と年収軸に強い",
    ],
    cons: [
      "2025年開始の新しいサービスで口コミの蓄積が少ない",
      "経験者向けの訴求が中心で、未経験からの利用は要確認",
    ],
    recommend:
      "経験を年収に変えたい20〜30代エンジニアに。面接に不安があり模擬面接に何度も付き合ってほしい方、在職中で夜間・土曜に進めたい方におすすめ。",
    reviewPath: "/review/techgo/",
  },
];

const faqs = [
  {
    q: "30代エンジニアが転職エージェントを使うメリットは？",
    a: "30代エンジニアは即戦力として評価されるため、エージェント経由で非公開求人にアクセスすることで、年収UP・好条件の求人に出会いやすくなります。また、技術スタックに精通したアドバイザーが市場価値を正確に把握し、年収交渉もサポートしてくれます。",
  },
  {
    q: "40代エンジニアでも転職は可能ですか？",
    a: "可能です。40代はマネジメント経験やアーキテクト経験が評価されます。ただし求人数は30代より減る傾向があるため、全国対応で求人量の多いdoda(IT特化)や、ハイクラス求人に強いレバテックキャリアなどを併用するのが有効です。",
  },
  {
    q: "転職エージェントは何社登録すべきですか？",
    a: "2〜3社の併用がおすすめです。IT特化型（レバテックキャリアなど）と総合型（dodaなど）を組み合わせることで、求人の幅を広げつつ、専門的なアドバイスも受けられます。",
  },
  {
    q: "SIerから自社開発企業への転職は難しいですか？",
    a: "近年はSIer出身者を積極採用する自社開発企業が増えています。レバテックキャリアやGeeklyはWeb系自社開発企業とのコネクションが強く、SIerからのキャリアチェンジ支援実績も豊富です。",
  },
  {
    q: "未経験からITエンジニアに転職できますか？",
    a: "30代前半までであれば十分可能です。ワークポートは未経験者向け求人が豊富で、無料プログラミングスクール「みんスク」も併設しているため、スキルアップと転職活動を同時に進められます。",
  },
  {
    q: "転職で年収はどのくらいUPしますか？",
    a: "公表値ではGeeklyが年収アップ率約81%・平均上昇額約76万円(2025年9月時点・二次情報)、dodaは転職者の約6割が年収アップ(2024年度・パーソルキャリア公表)としています。アップ幅はスキル・経験・転職先により大きく異なります。レバテックキャリアは公開求人の約8割が年収600万円以上との二次情報があります。",
  },
  {
    q: "製造業からIT業界への転職は可能ですか？",
    a: "製造業出身者はIoTやDX推進の現場で重宝されます。製造業の業務知識とプログラミングスキルを組み合わせることで、製造DXエンジニアとして高い市場価値を持てます。ワークポートやdodaが業界横断の転職に強いです。",
  },
  {
    q: "フリーランスと正社員、どちらがよいですか？",
    a: "30代後半〜40代は家族状況や安定性を考慮して判断しましょう。正社員は安定収入・福利厚生が魅力、フリーランスは年収の上限が高い傾向があります。まずは正社員転職で市場価値を確認してから判断するのも有効な戦略です。",
  },
];

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ミドルエンジニア転職ラボ",
    alternateName: "ミドルエンジニア転職ラボ | 30代・40代エンジニア転職エージェント比較",
    url: "https://middle-engineer.com/",
    inLanguage: "ja",
    description:
      "30代・40代のITエンジニアに特化した転職エージェント比較サイト。出典付きデータで厳選サービスを比較。",
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "30代・40代エンジニア向け転職エージェントおすすめランキング",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: agents.length,
    itemListElement: agents.map((agent) => ({
      "@type": "ListItem",
      position: agent.rank,
      name: agent.name,
      url: `https://middle-engineer.com${agent.reviewPath}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      {/* Hero */}
      <section className="atmosphere bg-paper py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <p className="reveal reveal-1 font-display italic text-petrol text-base md:text-lg mb-5">
            Career data &amp; guidance for engineers in their 30s &amp; 40s
          </p>
          <h1 className="reveal reveal-2 font-display text-4xl md:text-6xl font-semibold leading-[1.15] tracking-tight mb-7 max-w-3xl">
            経験を、<span className="text-petrol">次の年収</span>へ。
            <br className="hidden md:block" />
            30代・40代エンジニアの転職を<wbr />データで導く。
          </h1>
          <p className="reveal reveal-3 text-ink-soft text-base md:text-lg max-w-2xl mb-9 leading-relaxed">
            年収データ・口コミ・得意分野を出典付きで徹底比較。
            厳選したエージェントと、企業別・言語別の年収データから、あなたに最適な一手が見つかります。
          </p>
          <div className="reveal reveal-4 flex flex-wrap items-center gap-4">
            <a
              href="#ranking"
              className="inline-flex items-center gap-2 bg-ink text-paper font-medium py-3 px-7 rounded-full hover:bg-petrol transition-colors duration-300"
            >
              比較ランキングを見る
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="/salary/company-ranking/"
              className="inline-flex items-center text-ink-soft font-medium py-3 ul-grow hover:text-ink transition-colors"
            >
              企業年収ランキング(有報準拠)
            </a>
          </div>
        </div>
      </section>

      {/* Update / Sources note */}
      <section className="bg-paper border-y border-[var(--line)] py-4">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-xs text-ink-faint leading-relaxed text-center">
            <span className="font-medium text-ink-soft">最終更新: 2026年6月</span>
            {" ｜ "}
            求人数・年収などの数値は調査時点の公開情報・公的統計に基づき、出典と時点を明記しています。評価方針は
            <Link href="/editorial/" className="text-petrol ul-grow">記事制作ポリシー</Link>
            をご覧ください。
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-paper py-14">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "10社", label: "IT転職サービスを比較" },
              { value: "有報準拠", label: "企業年収を一次情報で" },
              { value: "30/40代", label: "ミドル世代に特化" },
              { value: "出典明記", label: "公的統計・公式データ" },
            ].map((stat, i) => (
              <div
                key={i}
                className={`reveal reveal-${i + 1} bg-paper-raised border border-[var(--line)] rounded-xl p-5 text-center lift`}
              >
                <p className="font-display text-3xl md:text-4xl font-semibold text-ink mb-1">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-ink-faint leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ranking */}
      <section id="ranking" className="bg-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
            30代・40代エンジニア向け転職エージェント
          </h2>
          <p className="text-center text-slate-500 mb-10">
            IT特化型エージェント6社を徹底比較
          </p>

          <div className="space-y-8">
            {agents.map((agent) => (
              <div
                key={agent.rank}
                className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 px-6 py-4 bg-slate-50 border-b border-slate-200">
                  <span
                    className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-white text-lg ${
                      agent.rank === 1
                        ? "bg-yellow-500"
                        : agent.rank === 2
                        ? "bg-slate-400"
                        : agent.rank === 3
                        ? "bg-amber-700"
                        : "bg-slate-300"
                    }`}
                  >
                    {agent.rank}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">{agent.name}</h3>
                    <p className="text-sm text-slate-500">{agent.tagline}</p>
                  </div>
                </div>

                <div className="p-6">
                  {/* Features */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                    {agent.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="text-petrol mt-0.5 shrink-0">--</span>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pros & Cons */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-sm font-bold text-green-700 mb-2">良い点</p>
                      <ul className="space-y-1">
                        {agent.pros.map((p, i) => (
                          <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                            <span className="text-green-600 shrink-0">+</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-red-700 mb-2">注意点</p>
                      <ul className="space-y-1">
                        {agent.cons.map((c, i) => (
                          <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                            <span className="text-red-500 shrink-0">-</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Recommend */}
                  <div className="bg-petrol-soft rounded-lg p-4 mb-4">
                    <p className="text-sm font-bold text-blue-800 mb-1">こんな方におすすめ</p>
                    <p className="text-sm text-petrol-deep">{agent.recommend}</p>
                  </div>

                  <Link
                    href={agent.reviewPath}
                    className="inline-block text-petrol hover:text-blue-800 font-medium text-sm transition-colors"
                  >
                    詳細レビューを読む →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Section */}
      <section id="age" className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            年代別おすすめエージェント
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-800 mb-2">30代前半（30〜34歳）</h3>
              <p className="text-sm text-slate-500 mb-4">
                即戦力として最も市場価値が高い年代。選択肢が広く、キャリアチェンジも可能。
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>1位: レバテックキャリア - 年収大幅UPのチャンス</li>
                <li>2位: Geekly - Web/ゲーム業界なら最強</li>
                <li>3位: マイナビIT AGENT - 社内SEで安定を目指すなら</li>
              </ul>
            </div>
            <div className="border border-slate-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-slate-800 mb-2">30代後半〜40代（35〜49歳）</h3>
              <p className="text-sm text-slate-500 mb-4">
                マネジメント経験や専門性が武器に。求人数は減るが、質の高いポジションが狙える。
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>1位: doda(IT特化) - 全国対応で選択肢が広い</li>
                <li>2位: レバテックキャリア - ハイクラス求人に強い</li>
                <li>3位: ワークポート - 異業種からのIT転職に</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
            {[
              { name: "30代エンジニアの転職", slug: "30s" },
              { name: "35歳前後の転職", slug: "35" },
              { name: "40代エンジニアの転職", slug: "40s" },
            ].map((a) => (
              <Link
                key={a.slug}
                href={`/age/${a.slug}/`}
                className="border border-slate-200 rounded-lg p-4 text-center bg-slate-50 hover:shadow-md transition text-sm font-medium text-slate-700"
              >
                {a.name} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Section */}
      <section id="industry" className="bg-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            業界横断キャリアチェンジ
          </h2>
          <p className="text-center text-slate-500 mb-8 max-w-2xl mx-auto">
            異業種の経験はIT業界で大きな強みになります。
            製造DX、フィンテック、ヘルステックなど、業界知識 x IT スキルの掛け算がキャリアの武器に。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                from: "製造業",
                to: "製造DX / IoTエンジニア",
                desc: "生産管理・品質管理の知識が、スマートファクトリー推進で高く評価される",
                slug: "manufacturing",
              },
              {
                from: "金融業",
                to: "フィンテックエンジニア",
                desc: "金融業務知識があるエンジニアは、決済・保険テック企業で希少人材",
                slug: "finance",
              },
              {
                from: "医療・製薬",
                to: "ヘルステックエンジニア",
                desc: "電子カルテ・医療AI・遠隔診療など、医療DXの需要が拡大",
                slug: "healthcare",
              },
            ].map((item, i) => (
              <Link
                key={i}
                href={`/industry/${item.slug}/`}
                className="block bg-white rounded-xl p-6 border border-slate-200 hover:shadow-md transition"
              >
                <div className="flex items-center gap-2 mb-3 text-sm font-bold">
                  <span className="text-slate-600">{item.from}</span>
                  <span className="text-petrol">→</span>
                  <span className="text-petrol">{item.to}</span>
                </div>
                <p className="text-sm text-slate-500 mb-3">{item.desc}</p>
                <p className="text-xs text-petrol font-medium">業界別ガイドを読む →</p>
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
            {[
              { name: "ゲーム業界", slug: "gaming" },
              { name: "広告・メディア", slug: "advertising" },
              { name: "物流・運輸", slug: "logistics" },
              { name: "小売・EC", slug: "retail" },
              { name: "保険", slug: "insurance" },
              { name: "不動産", slug: "realestate" },
              { name: "官公庁・自治体", slug: "government" },
              { name: "SIerからWeb系へ", slug: "sier-to-web" },
            ].map((ind) => (
              <Link
                key={ind.slug}
                href={`/industry/${ind.slug}/`}
                className="border border-slate-200 rounded-lg p-3 text-center bg-white hover:shadow-md transition text-xs md:text-sm font-medium text-slate-700"
              >
                {ind.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group border border-slate-200 rounded-lg overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-4 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800">
                  <span>Q. {faq.q}</span>
                  <span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">
                    &#9662;
                  </span>
                </summary>
                <div className="px-6 py-4 text-sm text-slate-600 leading-relaxed">
                  A. {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Company Guide */}
      <section id="company" className="bg-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-10">
            人気企業のエンジニア転職ガイド
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: "Google", slug: "google" },
              { name: "Amazon", slug: "amazon" },
              { name: "メルカリ", slug: "mercari" },
              { name: "LINEヤフー", slug: "line-yahoo" },
              { name: "ソニー", slug: "sony" },
              { name: "サイバーエージェント", slug: "cyberagent" },
              { name: "freee", slug: "freee" },
              { name: "SmartHR", slug: "smarthr" },
              { name: "NRI", slug: "nri" },
              { name: "LayerX", slug: "layerx" },
            ].map((company) => (
              <Link
                key={company.slug}
                href={`/company/${company.slug}/`}
                className="border border-slate-200 rounded-lg p-4 text-center bg-white hover:shadow-md transition text-sm font-medium text-slate-700"
              >
                {company.name}
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/company/" className="text-petrol hover:underline font-medium text-sm">
              すべての企業ガイドを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* Skill Guide */}
      <section id="skill" className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-10">
            スキル・言語別 転職ガイド
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Java", slug: "java" },
              { name: "Python", slug: "python" },
              { name: "TypeScript", slug: "typescript" },
              { name: "React", slug: "react" },
              { name: "AWS", slug: "aws" },
              { name: "Go", slug: "go" },
              { name: "AI/ML", slug: "ai-ml" },
              { name: "Kubernetes", slug: "kubernetes" },
            ].map((skill) => (
              <Link
                key={skill.slug}
                href={`/skill/${skill.slug}/`}
                className="border border-slate-200 rounded-lg p-4 text-center bg-white hover:shadow-md transition text-sm font-medium text-slate-700"
              >
                {skill.name}
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/skill/" className="text-petrol hover:underline font-medium text-sm">
              すべてのスキル別ガイドを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* Career Path */}
      <section id="career" className="bg-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-10">
            キャリアパス別ガイド
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "SE → Web系エンジニア", slug: "se-to-web" },
              { name: "PM → CTO", slug: "pm-to-cto" },
              { name: "SRE（サイト信頼性エンジニア）", slug: "sre" },
              { name: "テックリード", slug: "tech-lead" },
              { name: "大企業 → スタートアップ", slug: "corporate-to-startup" },
              { name: "フリーランス → 正社員", slug: "freelance-to-permanent" },
            ].map((career) => (
              <Link
                key={career.slug}
                href={`/career/${career.slug}/`}
                className="border border-slate-200 rounded-lg p-5 bg-white hover:shadow-md transition text-sm font-medium text-slate-700"
              >
                {career.name}
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/career/" className="text-petrol hover:underline font-medium text-sm">
              すべてのキャリアパスを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section id="purpose" className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-10">
            目的別おすすめガイド
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "年収UP", slug: "salary-up" },
              { name: "WLB重視", slug: "wlb" },
              { name: "フルリモート", slug: "remote-full" },
              { name: "自社開発", slug: "jigyoukaihatsu" },
              { name: "技術力UP", slug: "growth" },
              { name: "安定重視", slug: "stable" },
            ].map((purpose) => (
              <Link
                key={purpose.slug}
                href={`/purpose/${purpose.slug}/`}
                className="border border-slate-200 rounded-lg p-5 bg-white hover:shadow-md transition text-sm font-medium text-slate-700"
              >
                {purpose.name}
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/purpose/" className="text-petrol hover:underline font-medium text-sm">
              すべての目的別ガイドを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* Area */}
      <section id="area" className="bg-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-10">
            エリア別IT転職事情
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "東京", slug: "tokyo" },
              { name: "大阪", slug: "osaka" },
              { name: "名古屋", slug: "nagoya" },
              { name: "福岡", slug: "fukuoka" },
              { name: "横浜", slug: "yokohama" },
              { name: "札幌", slug: "sapporo" },
              { name: "フルリモート", slug: "remote" },
              { name: "地方移住・Uターン", slug: "iiju" },
            ].map((area) => (
              <Link
                key={area.slug}
                href={`/area/${area.slug}/`}
                className="border border-slate-200 rounded-lg p-4 text-center bg-white hover:shadow-md transition text-sm font-medium text-slate-700"
              >
                {area.name}
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/area/" className="text-petrol hover:underline font-medium text-sm">
              すべてのエリアガイドを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* Agent Comparison */}
      <section id="compare" className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-10">
            エージェント徹底比較
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "レバテック vs Geekly", slug: "levtech-vs-geekly" },
              { name: "30代向けランキング", slug: "30s-agents" },
              { name: "40代向けランキング", slug: "40s-agents" },
              { name: "ハイクラス比較", slug: "highclass" },
              { name: "年収UPランキング", slug: "salary-ranking" },
              { name: "リモート求人に強いエージェント", slug: "remote-agents" },
            ].map((compare) => (
              <Link
                key={compare.slug}
                href={`/compare/${compare.slug}/`}
                className="border border-slate-200 rounded-lg p-5 bg-white hover:shadow-md transition text-sm font-medium text-slate-700"
              >
                {compare.name}
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/compare/agents/" className="text-petrol hover:underline font-medium text-sm">
              すべての比較記事を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* Knowledge */}
      <section id="knowledge" className="bg-slate-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 text-center mb-2">
            転職ノウハウ・お役立ちガイド
          </h2>
          <p className="text-center text-slate-500 mb-10 text-sm">
            職務経歴書・年収交渉・エージェントの選び方など、進め方の実践知識
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "エンジニアの職務経歴書の書き方", slug: "resume" },
              { name: "年収交渉の進め方", slug: "salary-negotiation" },
              { name: "転職エージェントの選び方", slug: "how-to-choose" },
              { name: "複数エージェントの使い分け", slug: "multiple-agents" },
              { name: "初回面談で聞かれること", slug: "agent-first-meeting" },
              { name: "自分の市場価値の調べ方", slug: "market-value" },
            ].map((k) => (
              <Link
                key={k.slug}
                href={`/knowledge/${k.slug}/`}
                className="border border-slate-200 rounded-lg p-5 bg-white hover:shadow-md transition text-sm font-medium text-slate-700"
              >
                {k.name}
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/knowledge/" className="text-petrol hover:underline font-medium text-sm">
              すべての転職ノウハウを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            あなたに最適なエージェントを見つけよう
          </h2>
          <p className="text-blue-100 mb-8">
            複数のエージェントに登録して比較するのが、転職成功の鍵です。
            まずは気になるエージェントの詳細レビューをチェックしましょう。
          </p>
          <a
            href="#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            ランキングに戻る
          </a>
        </div>
      </section>
    </>
  );
}
