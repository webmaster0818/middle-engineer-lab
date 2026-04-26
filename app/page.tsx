import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "30代・40代エンジニア向け転職エージェント比較ランキング【2024年最新】",
  description:
    "30代・40代のITエンジニアにおすすめの転職エージェント5社を徹底比較。年収UP実績・口コミ・得意分野をデータで比較し、あなたに最適なエージェントが見つかります。",
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
    tagline: "IT特化No.1 - 30代エンジニアの年収UPを実現",
    features: [
      "IT・Web特化の求人48,000件以上",
      "年収800万円以上の求人が全体の半数",
      "30代の転職成功実績が豊富",
      "専門知識を持つキャリアアドバイザーが在籍",
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
      "実務経験3年以上の30代エンジニアで、年収600万円以上を目指す方に最適。特にWeb系・SaaS企業への転職を考えている方におすすめ。",
    reviewPath: "/review/levtech/",
  },
  {
    rank: 2,
    name: "Geekly",
    tagline: "IT/Web/ゲーム特化 - 平均年収UP76万円の実績",
    features: [
      "IT・Web・ゲーム業界に特化した独占求人3万件",
      "利用者の平均年収UP額は76万円",
      "書類選考通過率が業界平均の3.4倍",
      "マッチング精度の高い独自AIシステム",
    ],
    pros: [
      "ゲーム・エンタメ業界の求人に圧倒的に強い",
      "書類添削・面接対策のサポートが手厚い",
      "内定までのスピードが早い（平均25日）",
    ],
    cons: [
      "IT業界以外の求人はほとんどない",
      "首都圏中心の求人構成",
    ],
    recommend:
      "ゲーム・エンタメ・Web業界への転職を狙う30代エンジニアに最適。年収を大幅UPさせたい方や、書類選考が通らず悩んでいる方に。",
    reviewPath: "/review/geekly/",
  },
  {
    rank: 3,
    name: "マイナビIT AGENT",
    tagline: "大手の安定感 - 社内SE求人が豊富",
    features: [
      "マイナビグループの信頼とネットワーク",
      "社内SE・情シス求人が業界トップクラス",
      "20代後半〜30代前半に強い求人構成",
      "非公開求人が全体の80%以上",
    ],
    pros: [
      "大手企業・メーカーの社内SE求人に強い",
      "初めての転職でも安心のサポート体制",
      "求人の質が安定している（ブラック企業が少ない）",
    ],
    cons: [
      "40代向けの求人は比較的少ない",
      "ハイクラス（年収1000万以上）は他社が強い",
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
      "転職決定人数No.1の実績（リクナビNEXT調べ）",
      "IT業界未経験者でも応募できる求人が豊富",
      "みんスク（無料プログラミングスクール）併設",
      "コンシェルジュの対応スピードが業界最速クラス",
    ],
    pros: [
      "異業種からIT業界への転職支援に強い",
      "対応が早く、登録から面談まで最短当日",
      "無料スクールで未経験からのスキルアップも可能",
    ],
    cons: [
      "ハイクラス求人は少なめ",
      "アドバイザーの質にばらつきがある",
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
      "業界最多級のIT求人数を保有",
      "エージェントとサイトの両方が使える柔軟性",
      "40代のエンジニア向け求人も豊富",
      "年収査定ツールなど独自の無料サービスが充実",
    ],
    pros: [
      "圧倒的な求人数で選択肢が広い",
      "自分で求人を探しつつ、エージェントの提案も受けられる",
      "40代エンジニアの転職実績が多い",
    ],
    cons: [
      "求人数が多すぎて、自分に合う求人を絞りにくい",
      "IT特化アドバイザーの専門性はレバテックに劣る",
    ],
    recommend:
      "40代エンジニアや、幅広い選択肢の中からじっくり選びたい方に。エージェント型と自分で探す方法の両方を使い分けたい方におすすめ。",
    reviewPath: "/review/doda-it/",
  },
];

const faqs = [
  {
    q: "30代エンジニアが転職エージェントを使うメリットは？",
    a: "30代エンジニアは即戦力として評価されるため、エージェント経由で非公開求人にアクセスすることで、年収UP・好条件の求人に出会いやすくなります。また、技術スタックに精通したアドバイザーが市場価値を正確に把握し、年収交渉もサポートしてくれます。",
  },
  {
    q: "40代エンジニアでも転職は可能ですか？",
    a: "可能です。40代はマネジメント経験やアーキテクト経験が評価されます。ただし求人数は30代より減るため、doda(IT特化)やレバテックキャリアなど40代の実績が豊富なエージェントを選ぶことが重要です。",
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
    a: "IT特化エージェント利用者の平均では50〜100万円のUPが一般的です。Geeklyは平均76万円UP、レバテックキャリアは年収800万円以上の求人が半数を占めるなど、エージェント選びが年収UPに直結します。",
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-blue-400 font-medium text-sm mb-4 tracking-wider uppercase">
            Engineer Career Lab for 30s &amp; 40s
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            30代・40代エンジニアの転職を、
            <br className="hidden md:block" />
            <span className="text-blue-400">データで支える</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            年収UP実績・口コミ・得意分野を徹底調査。
            <br className="hidden md:block" />
            厳選5社のエージェントを比較して、あなたに最適な1社が見つかります。
          </p>
          <a
            href="#ranking"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-lg shadow-blue-600/30"
          >
            ランキングを見る
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "5社厳選", label: "IT特化エージェント" },
              { value: "年収UP", label: "平均50〜100万円の実績" },
              { value: "業界特化", label: "IT/Web/ゲーム/SaaS" },
              { value: "体験談", label: "リアルな口コミを掲載" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-4">
                <p className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-slate-500">{stat.label}</p>
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
            IT特化型エージェント5社を徹底比較
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
                        <span className="text-blue-600 mt-0.5 shrink-0">--</span>
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
                  <div className="bg-blue-50 rounded-lg p-4 mb-4">
                    <p className="text-sm font-bold text-blue-800 mb-1">こんな方におすすめ</p>
                    <p className="text-sm text-blue-700">{agent.recommend}</p>
                  </div>

                  <Link
                    href={agent.reviewPath}
                    className="inline-block text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
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
                <li>1位: doda(IT特化) - 40代向け求人が豊富</li>
                <li>2位: レバテックキャリア - ハイクラス求人に強い</li>
                <li>3位: ワークポート - 異業種からのIT転職に</li>
              </ul>
            </div>
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
                agents: "ワークポート、doda(IT特化)",
              },
              {
                from: "金融業",
                to: "フィンテックエンジニア",
                desc: "金融業務知識があるエンジニアは、決済・保険テック企業で希少人材",
                agents: "レバテックキャリア、Geekly",
              },
              {
                from: "医療・製薬",
                to: "ヘルステックエンジニア",
                desc: "電子カルテ・医療AI・遠隔診療など、医療DXの需要が急拡大中",
                agents: "doda(IT特化)、マイナビIT AGENT",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-center gap-2 mb-3 text-sm font-bold">
                  <span className="text-slate-600">{item.from}</span>
                  <span className="text-blue-600">→</span>
                  <span className="text-blue-600">{item.to}</span>
                </div>
                <p className="text-sm text-slate-500 mb-3">{item.desc}</p>
                <p className="text-xs text-slate-400">おすすめ: {item.agents}</p>
              </div>
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
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            ランキングに戻る
          </a>
        </div>
      </section>
    </>
  );
}
