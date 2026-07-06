import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "ネットワークエンジニアの転職ガイド｜年収・CCNA資格・求人の攻め方【2026年】";
const PAGE_DESC =
  "ネットワークエンジニアの転職市場を2026年最新の公表データで解説。レバテック公表の平均年収、Cisco認定資格の活かし方、クラウドネットワークへの転向、求人の探し方を30代・40代エンジニア向けにまとめました。";

export const metadata: Metadata = {
  alternates: { canonical: "/skill/network/" },
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：ネットワーク転職市場の攻め方" },
  { id: "market", label: "市場・年収データ" },
  { id: "cert", label: "Cisco認定資格の活かし方" },
  { id: "level", label: "求められる経験レベル" },
  { id: "path", label: "キャリアパスの選択肢" },
  { id: "find", label: "求人の探し方" },
  { id: "entry", label: "クラウドネットワークへの転向ルート" },
  { id: "middle", label: "30代・40代の視点" },
  { id: "learn", label: "スキルアップ・学習戦略" },
  { id: "faq", label: "よくある質問" },
];

const faqs = [
  {
    q: "ネットワークエンジニアの平均年収はどのくらいですか？",
    a: "レバテックキャリアの公表統計では、ネットワークエンジニアの平均年収は437万円・中央値450万円です（2025年1月時点・career.levtech.jp保有求人ベース）。同統計のエンジニア全体平均（約504万円）よりやや低めですが、クラウドネットワークやセキュリティを掛け合わせると年代別平均（40代約618万円・2025年）を上回るレンジも見られます。役割や担当領域で幅が大きいため目安としてご覧ください。",
  },
  {
    q: "ネットワークエンジニアの需要は今後も続きますか？",
    a: "続きますが、求められるスキルが変化しています。従来のオンプレネットワーク構築に加え、SD-WAN、ゼロトラスト、クラウドネットワーク（AWS VPC・Azure VNet等）、5G対応など、新しい領域のスキルが評価されるようになっています。",
  },
  {
    q: "ネットワークエンジニアからクラウドエンジニアに転向できますか？",
    a: "転向しやすいキャリアパスです。TCP/IP・DNS・ルーティング・ファイアウォールといったネットワークの基礎はクラウドインフラでも不可欠で、AWS/GCP/Azureのネットワークサービス（VPC・Transit Gateway等）は既存スキルの延長線上にあります。",
  },
  {
    q: "ネットワークの求人はどんな企業に多いですか？",
    a: "通信キャリア、SIer、データセンター運営企業、セキュリティベンダー、クラウド系企業などに多く見られます。ゼロトラストネットワークの導入案件が増えており、セキュリティとネットワークの両方を理解するエンジニアの需要が高まっています。",
  },
  {
    q: "CCNA/CCNPは転職に有利ですか？",
    a: "有利です。Cisco技術者認定はエントリー・アソシエイト・プロフェッショナル・エキスパート・アーキテクトの5段階で構成され、CCNA（アソシエイト）は基礎力を示す資格として広く認知されています。CCNP（プロフェッショナル）、CCIE（エキスパート）といった上位資格はさらに専門性の証明になります（Cisco公式体系）。",
  },
  {
    q: "ネットワークエンジニアにおすすめの転職サービスは？",
    a: "インフラ・ネットワーク案件に強いレバテックキャリア、SIer系ネットワーク求人が豊富なマイナビIT AGENT、ハイクラスインフラ案件を狙えるビズリーチの併用が定番です（2026年6月時点・各社公表/二次情報）。",
  },
];

const salaryTable = [
  ["ネットワークエンジニア（レバテック公表）", "平均437万円・中央値450万円", "2025年1月時点・career.levtech.jp保有求人"],
  ["正社員SE 30代（レバテック公表）", "約499万円", "2025年・年代別平均"],
  ["正社員SE 40代（レバテック公表）", "約618万円", "2025年・年代別平均"],
  ["年収1,000万円以上の割合", "30代8.01% / 40代12.67%", "2025年・レバテック公表"],
];

const certTable = [
  ["エントリー", "CCT など", "未経験者向けの入口"],
  ["アソシエイト", "CCNA", "基礎力の証明。転職でまず狙う層"],
  ["プロフェッショナル", "CCNP", "中級。専門性とキャリアの前進を示す"],
  ["エキスパート", "CCIE", "上級。難関資格として高く評価される"],
  ["アーキテクト", "CCAr", "最上位の設計者向け"],
];

export default function NetworkSkillPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/skill/network/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "ネットワークエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          ネットワークエンジニアの転職ガイド｜年収・CCNA資格・求人の攻め方【2026年】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | ネットワークエンジニアのキャリアを30代・40代向けに解説
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          ネットワークエンジニアは企業のネットワークインフラを設計・構築・運用する専門職です。SD-WAN、ゼロトラスト、クラウドネットワーク、5Gの普及により求められるスキルが進化しています。本記事は求人数の比較ではなく、「ネットワークスキルを転職市場でどう価値化するか」という情報意図に絞り、公表データと公式情報をもとに30代・40代エンジニアの戦略を整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "レバテックキャリア 職種別平均年収統計（2025年1月時点）",
            "レバテック公表 年代別平均年収（2025年）",
            "Cisco技術者認定 公式体系",
            "本サイト データシート（2026年6月）",
          ]}
        />

        <nav aria-label="目次" className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：ネットワーク転職市場の攻め方</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              ネットワークエンジニアの転職は、<strong>「従来型の構築・運用」から「クラウド/セキュリティ/自動化」へ領域を広げられるか</strong>で年収が変わります。攻め方は次の3点です。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① クラウドネットワーク（VPC/Transit Gateway等）の<strong>設計経験</strong>を上乗せする</li>
              <li>② ゼロトラスト/SASEなど<strong>セキュリティ×ネットワーク</strong>の希少性を打ち出す</li>
              <li>③ ネットワーク自動化（IaC/Python）で<strong>従来型との差別化</strong>を図る</li>
            </ul>
          </div>
        </section>

        <section id="market" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">市場・年収データ</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            レバテックキャリアの公表統計では、ネットワークエンジニアの平均年収は<strong>437万円・中央値450万円</strong>です（2025年1月時点・career.levtech.jp保有求人ベース）。これはエンジニア全体平均（同統計で約504万円）よりやや低めですが、クラウドネットワークやセキュリティを掛け合わせることで年代別平均を上回るレンジも見られます。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">指標</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">数値</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">時点・出典</th>
                </tr>
              </thead>
              <tbody>
                {salaryTable.map(([k, v, src], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{k}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{v}</td>
                    <td className="px-4 py-3 text-slate-500 border-b border-slate-200 text-xs">{src}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            数値は統計・職種定義により異なるため目安としてご覧ください。中長期では経済産業省「IT人材需給に関する調査」（2019年3月公表）が2030年に最大約79万人のIT人材不足を試算しています。
          </p>
        </section>

        <section id="cert" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">Cisco認定資格の活かし方</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Cisco技術者認定は5段階で構成されています。転職でまず狙うのはCCNA（アソシエイト）、専門性をさらに示すならCCNP・CCIEです。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">段階</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">代表資格</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">位置づけ</th>
                </tr>
              </thead>
              <tbody>
                {certTable.map(([lv, name, note], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200 font-medium">{lv}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{name}</td>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-3">出典: Cisco技術者認定 公式体系（2026年6月時点）。クラウドネットワーク領域ではAWS Advanced Networking等の認定も評価対象。</p>
          <p className="text-sm text-slate-600 leading-relaxed">
            資格は書類段階のスクリーニング通過に効きますが、実務での設計・障害対応経験とセットで語れることが評価の決め手です。
          </p>
        </section>

        <section id="level" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求められる経験レベル</h2>
          <div className="space-y-3">
            {[
              { t: "構築・運用層", d: "LAN/WANの設計・構築・運用、ルーティング/スイッチング、ファイアウォール設定、障害対応。CCNA保有が歓迎されやすい。" },
              { t: "セキュリティ/クラウド層", d: "ゼロトラスト設計、SASE導入、AWS VPC/Azure VNetのネットワーク設計。希少性が高く年収帯が上がる。" },
              { t: "アーキテクト層", d: "大規模・マルチサイトのネットワーク設計、クラウド/オンプレ統合、ネットワーク自動化の標準化。CCIE等が後押し。" },
            ].map((x, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                <p className="text-sm text-slate-600">{x.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="path" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">キャリアパスの選択肢</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "ネットワークエンジニア", note: "LAN/WANの設計・構築・運用" },
              { role: "セキュリティネットワークエンジニア", note: "ゼロトラスト設計、SASE導入" },
              { role: "クラウドネットワークアーキテクト", note: "AWS/Azure/GCPのネットワーク設計" },
              { role: "インフラ/SREへの横展開", note: "ネットワーク基礎を土台にクラウド基盤へ" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 mb-1 text-sm">{item.role}</h3>
                <p className="text-xs text-slate-500">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            関連: <Link href="/skill/infrastructure/" className="text-petrol hover:underline">インフラエンジニア転職ガイド</Link>、<Link href="/skill/security/" className="text-petrol hover:underline">セキュリティエンジニア転職ガイド</Link>。
          </p>
        </section>

        <section id="find" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">求人の探し方</h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            以下は当サイトのデータシート（2026年6月時点・各社公表/二次情報）に基づく使い分けの整理です。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">レバテックキャリア</h3>
              <p className="text-sm text-slate-600 mb-2">IT/Web特化。インフラ・ネットワーク案件に強く、クラウドネットワーク求人も扱います。</p>
              <Link href="/review/levtech/" className="text-sm text-petrol hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">マイナビIT AGENT</h3>
              <p className="text-sm text-slate-600 mb-2">20〜30代若手層に強く、書類添削・面接対策が手厚いとされます。SIer系ネットワーク求人を探す際の選択肢です。</p>
              <Link href="/review/mynavi-it/" className="text-sm text-petrol hover:underline">詳細レビューを見る →</Link>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">ビズリーチ</h3>
              <p className="text-sm text-slate-600 mb-2">ハイクラス・スカウト型。ネットワークアーキテクトやセキュリティ寄りの上位ポジションを狙う場合に有効です。</p>
              <Link href="/review/bizreach-it/" className="text-sm text-petrol hover:underline">詳細レビューを見る →</Link>
            </div>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            併用の進め方は<Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">エージェント複数利用のコツ</Link>を参考にしてください。
          </p>
        </section>

        <section id="entry" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">クラウドネットワークへの転向ルート</h2>
          <div className="space-y-3">
            {[
              { n: "STEP 1", t: "基礎の棚卸し", d: "TCP/IP・DNS・ルーティング・ファイアウォールの経験を整理。クラウドでもそのまま活きる。" },
              { n: "STEP 2", t: "クラウドのネットワークを学ぶ", d: "AWS VPC/サブネット/ルートテーブル/Transit Gatewayなど、既存知識の延長で理解できる領域から着手する。" },
              { n: "STEP 3", t: "資格で裏付ける", d: "AWS Advanced Networking等の認定で、クラウドネットワークのスキルを可視化する。" },
              { n: "STEP 4", t: "自動化で差別化", d: "Ansible/Terraform/Pythonでネットワーク構成をコード化し、従来型エンジニアとの差を示す。" },
            ].map((x, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="text-xs font-bold text-petrol shrink-0 w-14 pt-1">{x.n}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1 text-sm">{x.t}</h3>
                  <p className="text-sm text-slate-600">{x.d}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            関連: <Link href="/career/support-to-infra/" className="text-petrol hover:underline">運用保守からインフラへの転向</Link>、<Link href="/knowledge/portfolio/" className="text-petrol hover:underline">ポートフォリオの作り方</Link>。
          </p>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の視点</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 space-y-3 text-sm text-slate-700">
            <p>
              ミドル層のネットワーク転職では、<strong>「物理機器の設定ができる」だけでなく「クラウド・セキュリティへ領域を広げられる」</strong>ことが評価軸になります。従来型の構築・運用に閉じると年収が頭打ちになりやすいため、クラウドネットワークやゼロトラストへ踏み出すのが鍵です。
            </p>
            <p>
              年収面では、レバテック公表の正社員SE平均が40代で約618万円、1,000万円以上の割合が40代で12.67%（2025年）。ネットワークの土台にクラウド・セキュリティを掛け合わせると、高年収帯への接続が見えてきます。
            </p>
            <p>
              年代別の市場感は<Link href="/age/30s/" className="text-petrol hover:underline">30代の転職</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職</Link>もご覧ください。
            </p>
          </div>
        </section>

        <section id="learn" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">スキルアップ・学習戦略</h2>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>✓ CCNAで基礎を固め、CCNP/CCIEで専門性を段階的に示す</li>
            <li>✓ クラウドネットワーク（VPC/VNet）を学び、AWS Advanced Networking等で裏付ける</li>
            <li>✓ ゼロトラスト/SASEの設計知識を加え、セキュリティ×ネットワークの希少性を作る</li>
            <li>✓ Ansible/Terraform/Pythonでネットワーク自動化（NaC）を体験する</li>
            <li>✓ 学んだ構成は検証環境で再現し、設計意図を説明できる状態にする</li>
          </ul>
          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            学習習慣は<Link href="/knowledge/continuous-learning/" className="text-petrol hover:underline">継続的な学習</Link>、市場価値の把握は<Link href="/knowledge/market-value/" className="text-petrol hover:underline">市場価値の調べ方</Link>を参考に。
          </p>
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
          <h2 className="text-xl font-bold mb-3">ネットワークスキルを活かした転職を相談する</h2>
          <p className="text-blue-100 text-sm mb-4">
            ネットワーク・インフラ求人に強いIT特化型エージェントで、年収アップの可能性を確認しましょう。
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
              { name: "インフラエンジニア転職ガイド", href: "/skill/infrastructure/" },
              { name: "セキュリティエンジニア転職ガイド", href: "/skill/security/" },
              { name: "AWS転職ガイド", href: "/skill/aws/" },
              { name: "Kubernetes/コンテナ転職ガイド", href: "/skill/kubernetes/" },
              { name: "SREへの転向ガイド", href: "/career/sre/" },
              { name: "スキル別転職ガイド一覧", href: "/skill/" },
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
