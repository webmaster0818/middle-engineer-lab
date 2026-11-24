import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "ブロックチェーンの仕組み｜NISTの定義・ビットコインとイーサリアムの数値で解説【2026年】";
const DESCRIPTION =
  "ブロックチェーンの仕組みを、NIST（米国国立標準技術研究所）の定義、ビットコインのホワイトペーパーとBitcoin Coreのソースコード、ethereum.orgの公式情報にもとづいて解説します。ブロック間隔・半減期・発行上限などの数値と、日本の法律上の暗号資産の定義・交換業者の登録数も整理します。";
const URL = "/knowledge/blockchain/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "definition", label: "ブロックチェーンの定義" },
  { id: "mechanism", label: "仕組み：ブロック・ハッシュ・合意形成" },
  { id: "numbers", label: "ビットコインとイーサリアムの数値比較" },
  { id: "types", label: "パブリック型とプライベート型" },
  { id: "japan", label: "日本の法律での位置づけ" },
  { id: "career", label: "エンジニアのキャリアとの関係" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "ブロックチェーンとは簡単に言うと何ですか？",
    a: "取引などの記録を「ブロック」にまとめ、前のブロックとつなげて、多数の参加者が同じ記録を分散して持つ仕組みです。NISTは、改ざんが検知でき改ざんに強いデジタル台帳で、中央の保管場所を持たずに分散して実装され、通常は銀行・企業・政府のような中央の管理者を持たないもの、と定義しています。",
  },
  {
    q: "ブロックチェーンはなぜ改ざんしにくいのですか？",
    a: "各ブロックには前のブロックのハッシュ値が含まれているため、過去のブロックを書き換えると、それ以降のすべてのブロックとの整合が取れなくなります。ビットコインのホワイトペーパーは、取引をハッシュベースのプルーフ・オブ・ワークの連鎖に記録することで、プルーフ・オブ・ワークをやり直さない限り変更できない記録になると説明しています。",
  },
  {
    q: "ビットコインの発行上限はいくらですか？",
    a: "Bitcoin Coreのソースコードでは、上限の値（MAX_MONEY）が2,100万BTCと定義されています。また、1BTCは1億単位（COIN＝100,000,000）に分割されます。新規発行の報酬は210,000ブロックごとに半減します。",
  },
  {
    q: "プルーフ・オブ・ワークとプルーフ・オブ・ステークの違いは何ですか？",
    a: "プルーフ・オブ・ワーク（PoW）は計算量によってブロックを作る権利を決める方式で、ビットコインが採用しています。プルーフ・オブ・ステーク（PoS）は暗号資産を預け入れた参加者（バリデーター）がブロックの提案・検証を行う方式で、イーサリアムは2022年9月15日のThe Mergeで移行しました。ethereum.orgは、移行によりエネルギー消費を約99.95％削減したとしています。",
  },
  {
    q: "日本で暗号資産交換業者として登録されている会社は何社ですか？",
    a: "金融庁の暗号資産交換業者登録一覧では、令和8年9月30日現在で27業者が登録されています（関東財務局25業者、近畿財務局2業者）。最新の一覧は金融庁のウェブサイトでご確認ください。",
  },
];

export default function BlockchainPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const cell = "border border-slate-200 px-3 py-2";

  return (
    <>
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url={URL} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "ブロックチェーンの仕組み" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          ブロックチェーンの仕組み｜NISTの定義・ビットコインとイーサリアムの数値で解説
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月25日 | 公式資料の確認日: 2026年11月25日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】ブロックチェーンの仕組み</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>ブロックチェーンは、取引の記録をブロックにまとめ、前のブロックのハッシュ値でつなげた台帳を、多数の参加者が分散して持つ仕組みです。どのブロックを正しい記録とするかは、プルーフ・オブ・ワークなどの合意形成の方式で決めます。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・ビットコインは目標のブロック間隔が10分、210,000ブロックごとに報酬が半減し、発行上限は2,100万BTCです（Bitcoin Coreのソースコード）</li>
              <li>・イーサリアムは2022年9月15日にプルーフ・オブ・ステークへ移行し、12秒のスロットで動いています（ethereum.org）</li>
              <li>・日本では資金決済法が暗号資産を定義し、令和8年9月30日現在で27の交換業者が登録されています（金融庁）</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、ブロックチェーンの基本的な仕組みを、NISTの技術文書、ビットコインのホワイトペーパーとソースコード、ethereum.orgの公式ドキュメントといった一次情報をもとに説明します。投資の判断を目的とした記事ではありません。数値の換算（日数・年数）は当サイトで計算したものです。
        </p>

        <DataNote
          surveyedAt="2026年11月25日"
          sources={["NIST IR 8202「Blockchain Technology Overview」", "Satoshi Nakamoto「Bitcoin: A Peer-to-Peer Electronic Cash System」・Bitcoin Core ソースコード", "ethereum.org 公式ドキュメント", "資金決済に関する法律 第2条（e-Gov法令検索）・金融庁 暗号資産交換業者登録一覧"]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">{t.label}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="definition" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ブロックチェーンの定義</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            米国国立標準技術研究所（NIST）の技術文書「Blockchain Technology Overview」（NIST IR 8202）は、ブロックチェーンを「改ざんが検知でき、改ざんに強いデジタル台帳で、分散して（中央の保管場所を持たずに）実装され、通常は中央の管理者（銀行・企業・政府など）を持たないもの」と定義しています。同文書は別の箇所で、「暗号的に署名された取引をブロックにまとめた、分散型のデジタル台帳」とも説明しています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            ブロックチェーンの代表的な実装であるビットコインは、サトシ・ナカモトのホワイトペーパーで提案されました。その要旨では、金融機関を通さずに当事者間で直接オンライン決済を行うための仕組みとして、ピアツーピアのネットワークで二重支払いの問題を解決する方法が提案されています。
          </p>
        </section>

        <section id="mechanism" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">仕組み：ブロック・ハッシュ・合意形成</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ブロックチェーンの仕組みは、次の4つの要素に分けると理解しやすくなります（当サイトの整理）。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={`${cell} text-left`}>要素</th>
                  <th className={`${cell} text-left`}>役割</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={cell}>取引と電子署名</td><td className={cell}>送り手が秘密鍵で取引に署名し、誰でも公開鍵で正しさを検証できるようにします</td></tr>
                <tr><td className={cell}>ブロック</td><td className={cell}>一定期間の取引をまとめた単位です。前のブロックのハッシュ値を含みます</td></tr>
                <tr><td className={cell}>ハッシュの連鎖</td><td className={cell}>過去のブロックを書き換えると以降のハッシュ値と合わなくなるため、改ざんが検知できます</td></tr>
                <tr><td className={cell}>合意形成（コンセンサス）</td><td className={cell}>どのブロックを次に追加するかを参加者の間で決める方式です。PoW・PoSなどがあります</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">
            ビットコインのホワイトペーパーは、取引（Transactions）、タイムスタンプサーバー（Timestamp Server）、プルーフ・オブ・ワーク（Proof-of-Work）、ネットワーク（Network）、インセンティブ（Incentive）などの12の章で構成され、上の要素がどのように組み合わされているかを説明しています。
          </p>
        </section>

        <section id="numbers" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ビットコインとイーサリアムの数値比較</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            代表的な2つのブロックチェーンについて、公式のソースコード・ドキュメントで確認できる値を並べました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={`${cell} text-left`}>項目</th>
                  <th className={`${cell} text-left`}>ビットコイン</th>
                  <th className={`${cell} text-left`}>イーサリアム</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={cell}>合意形成の方式</td><td className={cell}>プルーフ・オブ・ワーク</td><td className={cell}>プルーフ・オブ・ステーク（2022年9月15日のThe Mergeで移行）</td></tr>
                <tr><td className={cell}>ブロックの時間単位</td><td className={cell}>目標間隔10分（nPowTargetSpacing＝10×60秒）</td><td className={cell}>スロット12秒、32スロットで1エポック（6.4分）</td></tr>
                <tr><td className={cell}>難易度・期間の区切り</td><td className={cell}>2週間（nPowTargetTimespan）ごとに難易度を調整＝2,016ブロック分</td><td className={cell}>エポック単位で処理</td></tr>
                <tr><td className={cell}>新規発行の仕組み</td><td className={cell}>210,000ブロックごとに報酬が半減（約4年）</td><td className={cell}>バリデーターへの報酬</td></tr>
                <tr><td className={cell}>上限・参加条件</td><td className={cell}>発行上限2,100万BTC（MAX_MONEY）</td><td className={cell}>バリデーターになるには32ETHを預け入れ</td></tr>
                <tr><td className={cell}>その他</td><td className={cell}>ブロック重量の上限400万（MAX_BLOCK_WEIGHT）、採掘報酬は100ブロック後から利用可</td><td className={cell}>移行でエネルギー消費を約99.95％削減（ethereum.org）</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            出典：Bitcoin Core（GitHub master）src/kernel/chainparams.cpp・src/consensus/consensus.h・src/consensus/amount.h、ethereum.org「Proof-of-stake」「The Merge」。2,016ブロック（2週間÷10分）と約4年（210,000ブロック×10分）は当サイトによる換算で、実際のブロック生成時間は変動します。
          </p>
        </section>

        <section id="types" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">パブリック型とプライベート型</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            NIST IR 8202は、ブロックチェーンを参加の制限によって2つに分けています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className={`${cell} text-left`}>区分</th>
                  <th className={`${cell} text-left`}>NISTの説明（要旨）</th>
                  <th className={`${cell} text-left`}>例</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={cell}>パーミッションレス型（パブリック型）</td><td className={cell}>誰でも許可なく読み書きでき、ブロックを公開するのに管理者の許可が要らない</td><td className={cell}>ビットコイン、イーサリアム</td></tr>
                <tr><td className={cell}>パーミッションド型（プライベート型・コンソーシアム型）</td><td className={cell}>参加を特定の人や組織に限り、ブロックを公開する利用者は何らかの管理者の許可を受ける必要がある</td><td className={cell}>企業間の業務システムなど</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">
            企業の業務システムで使われるのは、参加者を限定できるパーミッションド型が中心です。転職先を検討する際は、暗号資産の取引所のようなパブリック型の事業か、企業向けのシステム開発かで、求められるスキルが異なる点に留意してください。
          </p>
        </section>

        <section id="japan" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">日本の法律での位置づけ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            日本では、資金決済に関する法律第2条第14項が「暗号資産」を定義しています。要旨は、代価の弁済のために不特定の者に対して使用でき、不特定の者を相手に売買できる財産的価値で、電子的に記録され、電子情報処理組織を用いて移転できるもの（本邦通貨・外国通貨・通貨建資産などを除く）です。同条第16項は、第63条の2の登録を受けた者を「暗号資産交換業者」としています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            金融庁の暗号資産交換業者登録一覧によると、令和8年9月30日現在の登録業者は27社（関東財務局25社、近畿財務局2社）です。暗号資産の売買や交換を業として行うには、この登録が必要です。
          </p>
        </section>

        <section id="career" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニアのキャリアとの関係</h2>
          <p className="text-slate-600 leading-relaxed">
            ブロックチェーンの開発では、暗号技術・分散システム・セキュリティの知識に加え、スマートコントラクトの開発言語などが求められます。業界への転職の考え方は<Link href="/industry/web3/" className="text-blue-600 hover:underline">Web3・ブロックチェーン業界へのエンジニア転職ガイド</Link>でご説明しています。分散システムの信頼性という観点では、<Link href="/knowledge/sre/" className="text-blue-600 hover:underline">SREとは</Link>も参考になります。
          </p>
        </section>

        <section id="faq" className="mb-12 scroll-mt-20">
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

        <section id="sources" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">出典一覧（確認日：2026年11月25日）</h2>
          <ul className="text-xs text-slate-600 leading-6 space-y-1 break-all">
            <li>NIST IR 8202「Blockchain Technology Overview」（2018年）：https://nvlpubs.nist.gov/nistpubs/ir/2018/NIST.IR.8202.pdf</li>
            <li>Satoshi Nakamoto「Bitcoin: A Peer-to-Peer Electronic Cash System」：https://bitcoin.org/bitcoin.pdf</li>
            <li>Bitcoin Core src/kernel/chainparams.cpp：https://github.com/bitcoin/bitcoin/blob/master/src/kernel/chainparams.cpp</li>
            <li>Bitcoin Core src/consensus/consensus.h・amount.h：https://github.com/bitcoin/bitcoin/tree/master/src/consensus</li>
            <li>ethereum.org「Proof-of-stake (PoS)」：https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/</li>
            <li>ethereum.org「The Merge」：https://ethereum.org/en/roadmap/merge/</li>
            <li>資金決済に関する法律 第2条（e-Gov法令検索）：https://laws.e-gov.go.jp/law/421AC0000000059</li>
            <li>金融庁「暗号資産交換業者登録一覧」：https://www.fsa.go.jp/menkyo/menkyoj/kasoutuka.pdf</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Web3・ブロックチェーン業界へのエンジニア転職ガイド", href: "/industry/web3/" },
              { name: "DXとは", href: "/knowledge/dx/" },
              { name: "IoTとは", href: "/knowledge/iot/" },
              { name: "OSSとは", href: "/knowledge/oss/" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-petrol transition-colors">
                {item.name} →
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
