import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "プログラミングの無料学習サイト9選｜無料の範囲と有料プランの価格を公式ページで比較【2026年】";
const DESCRIPTION =
  "Progate・ドットインストール・paizaラーニング・freeCodeCampなど9サービスについて、無料で使える範囲と有料プランの税込価格を各公式ページで確認し、比較表にまとめました（2026年11月27日確認）。";
const URL = "/knowledge/free-learning-sites/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "summary", label: "9サービスの無料範囲・有料価格の比較表" },
  { id: "freemium", label: "一部無料のサービス：無料プランでできること" },
  { id: "cost", label: "有料プランの年間費用（当サイト算出）" },
  { id: "allfree", label: "全面無料のサービス：運営の仕組みと注意点" },
  { id: "manabi", label: "マナビDXの受講料無料講座は811件中46件（当サイト集計）" },
  { id: "related", label: "学習戦略・転職準備の関連記事" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "プログラミングを完全に無料で学べるサイトはありますか？",
    a: "あります。当サイトが公式ページで確認した範囲では、freeCodeCampは講座・課題・修了認定まですべて無料と案内しており、Microsoft Learnのトレーニング、MDNの学習コンテンツ、AtCoderのコンテスト参加も無料です。CS50xもOpenCourseWareとして無料で受講でき、条件を満たせば無料のCS50 Certificateを受け取れます。ただし、Microsoft Learnの演習にはAzureのサブスクリプションが必要な場合があるなど、周辺の費用はサービスごとに異なります。",
  },
  {
    q: "Progate・ドットインストール・paizaラーニングの無料プランでは何ができますか？",
    a: "2026年11月27日に各公式ページで確認した内容では、Progateの無料プランは一部のレッスンのみ（有料プランとの比較表で「一部のみ」と記載）、ドットインストールのフリープランは無料レッスン動画の視聴とミニクイズ、paizaラーニングの無料プランは講座動画943本・演習課題1,219問とスキルチェックの受験です。いずれも、すべての講座を最後まで学ぶには有料プランが必要です。",
  },
  {
    q: "有料プランはどのくらいの費用がかかりますか？",
    a: "公式ページの税込価格で、Progateのプラスプランは月額1,490円（年額11,880円）、ドットインストールのプレミアムは月々払い1,480円（12か月一括の場合1か月あたり1,080円）、paizaラーニングの有料プランは1か月プラン1,490円（12か月プラン11,760円）です。価格はキャンペーンや改定で変わるため、申し込み前に公式ページで最新の金額をご確認ください。",
  },
  {
    q: "無料の学習サイトだけでエンジニアに転職できますか？",
    a: "学習サイトの利用だけで転職できるかを示す公的な統計は、当サイトでは確認できていません。採用の場では、学習した内容をもとに作成した成果物や、コーディングテストでの実力が見られることが多いため、学習サイトで基礎を身につけた後に、GitHubでの成果物の公開やコーディングテストの対策を進めることをおすすめします。",
  },
  {
    q: "英語のサイト（freeCodeCamp・CS50・MDN）は日本語で使えますか？",
    a: "CS50xは2026年版の講義がポルトガル語・スペイン語に吹き替えられたと公式ページで案内されていますが、日本語の吹き替えについての記載は当サイトでは確認できていません。freeCodeCampのニュースサイトには日本語版の言語切り替えがあります。英語の教材を使う場合は、ブラウザの翻訳機能などを併用することをご検討ください。",
  },
];

type Row = {
  name: string;
  operator: string;
  type: string;
  free: string;
  paid: string;
  tax: string;
};

const rows: Row[] = [
  {
    name: "Progate",
    operator: "Progate, Inc.",
    type: "一部無料",
    free: "無料プラン（¥0）。レッスンは一部のみ、AIの利用はお試し分、公開できる作品は5件",
    paid: "プラス 月額1,490円／年額11,880円、プロ 月額4,990円／年額29,880円",
    tax: "税込（公式に「すべて税込価格」と記載）",
  },
  {
    name: "ドットインストール",
    operator: "dotinstall.com",
    type: "一部無料",
    free: "フリープラン。無料レッスン動画の視聴、無料レッスンのミニクイズ、学習の記録",
    paid: "プレミアム 月々払い1,480円／6か月一括 月あたり1,280円／12か月一括 月あたり1,080円",
    tax: "税込（法人向けの2,680円は税抜と記載）",
  },
  {
    name: "paizaラーニング",
    operator: "paiza株式会社",
    type: "一部無料",
    free: "講座動画943本・演習課題1,219問、スキルチェックの受験。解答コードの閲覧などは制限あり",
    paid: "1か月プラン1,490円、6か月プラン7,200円、12か月プラン11,760円（有料は動画3,192本・演習3,582問）",
    tax: "税込",
  },
  {
    name: "AtCoder",
    operator: "AtCoder株式会社",
    type: "コンテスト参加は無料",
    free: "コンテストへの参加。公式は「無料でどなたでも参加することが出来ます」と案内",
    paid: "本表では扱っていません（検定などは対象外）",
    tax: "—",
  },
  {
    name: "MDN（Learn web development）",
    operator: "Mozilla",
    type: "無料",
    free: "HTML・CSS・JavaScriptなどのドキュメントと学習コンテンツ。公式は「free」の学習基盤と説明",
    paid: "なし（公式ページで有料プランの記載を確認できず）",
    tax: "—",
  },
  {
    name: "Microsoft Learn",
    operator: "Microsoft",
    type: "トレーニングは無料",
    free: "トレーニングは「どなたでも無料」とFAQに記載。プロファイル（アカウント）なしでも全コンテンツを利用可",
    paid: "本表では扱っていません（認定資格の受験料は対象外）。演習にはAzureサブスクリプションが必要な場合あり",
    tax: "—",
  },
  {
    name: "freeCodeCamp",
    operator: "freeCodeCamp（米国の501(c)(3)公益慈善団体）",
    type: "無料",
    free: "講座・プロジェクト・修了認定（certification）まで「100% free」とFAQに記載",
    paid: "なし（寄付で運営）",
    tax: "—",
  },
  {
    name: "CS50x（ハーバード大学）",
    operator: "Harvard University（CS50）",
    type: "受講は無料",
    free: "OpenCourseWareとして無料で受講可。課題と最終課題で各70％以上なら無料のCS50 Certificate",
    paid: "edXの有料の認定証（verified certificate）あり。金額は本表では扱っていません",
    tax: "—",
  },
  {
    name: "マナビDX",
    operator: "経済産業省・IPA",
    type: "講座ポータル（有料・無料が混在）",
    free: "受講料無料の講座は46件（掲載811件中、当サイト集計）",
    paid: "掲載講座の765件は有料。金額は講座ごとに提供事業者が設定",
    tax: "—",
  },
];

const costRows = [
  { name: "Progate プラスプラン", monthly: "1,490円", monthly12: "17,880円", annual: "11,880円", diff: "6,000円" },
  { name: "Progate プロプラン", monthly: "4,990円", monthly12: "59,880円", annual: "29,880円", diff: "30,000円" },
  { name: "ドットインストール プレミアム", monthly: "1,480円", monthly12: "17,760円", annual: "12,960円（1,080円×12）", diff: "4,800円" },
  { name: "paizaラーニング 有料プラン", monthly: "1,490円", monthly12: "17,880円", annual: "11,760円", diff: "6,120円" },
];

export default function FreeLearningSitesKnowledgePage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url={URL} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "プログラミングの無料学習サイト" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          プログラミングの無料学習サイト9選｜無料の範囲と有料プランの価格を公式ページで比較
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月27日 | 公式資料の確認日: 2026年11月27日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】プログラミングを無料で学べる主なサイト</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>当サイトが2026年11月27日に各公式ページで確認した9サービスのうち、freeCodeCamp・MDN・Microsoft Learn（トレーニング）・CS50x（受講）・AtCoder（コンテスト参加）は無料で利用できます。Progate・ドットインストール・paizaラーニングは一部が無料で、すべての講座を学ぶには月額1,480〜1,490円（税込）からの有料プランが必要です。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・日本語で入門するなら、無料プランのあるProgate・ドットインストール・paizaラーニングから始め、続ける見込みが立ってから有料プランを検討する方法があります</li>
              <li>・有料プランは年額・一括払いにすると、月額払いを12か月続けた場合より4,800〜30,000円安くなります（当サイト算出）</li>
              <li>・経済産業省とIPAが運営するマナビDXでは、掲載811講座のうち受講料無料の講座は46件でした（当サイト集計）</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          「プログラミングを無料で学べるサイト」は数多くありますが、どこまでが無料で、どこから料金がかかるかはサービスごとに異なります。本記事では、国内外の主な学習サービス9件について、各サービスの公式の料金ページ・FAQ・案内ページを当サイトで直接確認し、無料で使える範囲と有料プランの価格（税込表記の有無を含む）を1つの表にまとめました。
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          本記事はサービスの優劣を評価するものではなく、ランキングや点数付けは行っていません。公式ページで料金や無料の範囲を確認できなかったサービスは、表に掲載していません。
        </p>

        <DataNote
          surveyedAt="2026年11月27日"
          sources={[
            "Progate 料金・有料会員プラン",
            "ドットインストール 料金プラン",
            "paizaラーニング 有料プランのご案内",
            "AtCoder「AtCoderってどうして無料なの？」",
            "MDN About／Learn web development",
            "Microsoft Learn よく寄せられる質問",
            "freeCodeCamp FAQ",
            "CS50x 2026（Harvard University）",
            "マナビDX（経済産業省・IPA）講座検索",
          ]}
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

        <section id="summary" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">9サービスの無料範囲・有料価格の比較表</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            各サービスの公式ページの記載をもとに、当サイトで整理した比較表です。並び順は「一部無料（国内）」「無料（コンテスト・ドキュメント・講座）」「講座ポータル」の順で、評価の順位ではありません。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">サービス（運営）</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">区分</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">無料で使える範囲</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">有料プランの価格</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">税の表記</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.name}>
                    <td className="border border-slate-200 px-3 py-2">
                      {r.name}
                      <span className="block text-xs text-slate-500">{r.operator}</span>
                    </td>
                    <td className="border border-slate-200 px-3 py-2">{r.type}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.free}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.paid}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.tax}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            出典：各サービスの公式ページ（出典一覧を参照、確認日2026年11月27日）。区分と要約は当サイトによるものです。価格・本数・問題数はキャンペーンや改定で変わることがあります。
          </p>
        </section>

        <section id="freemium" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">一部無料のサービス：無料プランでできること</h2>
          <h3 className="text-lg font-bold text-slate-800 mb-2">Progate</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            Progateの料金ページでは、無料プラン（¥0）・プラスプラン・プロプランの3つが案内されています。プラン機能比較では、Web版で学べる時間の目安が無料は「一部のみ」、プラスは「420時間以上」、プロは「1060時間以上」と記載されています（2026年11月27日時点、各レッスンの目安時間の合計）。AIの利用枠は無料が「お試し分」、プラスが無料の10倍、プロが無料の30倍で、公開できる作品数は無料5件・プラス15件・プロ30件です。学生はプロプランが75％引きになる学割があると案内されています。
          </p>
          <h3 className="text-lg font-bold text-slate-800 mb-2">ドットインストール</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            ドットインストールのフリープランでは、無料レッスン動画の視聴、無料レッスンのミニクイズの閲覧・回答、学習の記録が利用できます。プレミアムでは、7,684本のプレミアム動画と940問のミニクイズ、現役エンジニアへの質問、模写コーディング教材「256times」などが加わります。法人向けプランは「現在準備中」と記載されています。
          </p>
          <h3 className="text-lg font-bold text-slate-800 mb-2">paizaラーニング</h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            paizaラーニングの有料プランの案内ページでは、無料プランと有料プランの違いが数値で示されています。講座の動画は無料943本・有料3,192本、講座の演習課題は無料1,219問・有料3,582問です。スキルチェック（873問）は無料プランでも受験でき、レベルアップ問題集（3,069問）は無料プランでは24時間で回復するチケットを使う形で利用が制限されています。1か月プランは新規申込に限り初月無料と案内されていますが、2か月以上継続した場合のみ適用される条件が付いています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            当サイトで算出すると、paizaラーニングの無料プランで視聴できる動画は有料プランの約30％（943÷3,192）、演習課題は約34％（1,219÷3,582）に当たります。無料の範囲で入門部分を試し、学習を続けられそうかを確かめてから有料プランを検討する使い方ができます。
          </p>
        </section>

        <section id="cost" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">有料プランの年間費用（当サイト算出）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            一部無料の3サービスについて、月額払いを12か月続けた場合と、年額・12か月一括で支払った場合の費用を当サイトで計算しました。いずれも公式ページに記載された税込価格を使っています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">プラン</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">月額払い</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">月額×12か月</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">年額・12か月一括</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">差額</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((r) => (
                  <tr key={r.name}>
                    <td className="border border-slate-200 px-3 py-2">{r.name}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.monthly}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.monthly12}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.annual}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.diff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            算出方法：月額払いの税込価格×12と、公式ページに記載の年額（ドットインストールは12か月一括の1か月あたり価格×12）の差。Progateの差額6,000円・30,000円は公式ページの「月額プランより〇円お得」の記載と一致しました。キャンペーン・学割は含めていません。
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            年額・一括払いは1年あたりの費用を抑えられる一方、途中で学習をやめても返金されない場合があります。たとえばpaizaラーニングの特定商取引法に基づく表記では、当社に帰責性のある場合を除き、契約期間に残りがあっても解約に伴う返金は行わないと記載されています。まず月額払いや無料プランで学習を続けられるかを確かめてから、長期のプランを選ぶことをおすすめします。
          </p>
        </section>

        <section id="allfree" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">全面無料のサービス：運営の仕組みと注意点</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            無料で提供されているサービスにも、それぞれ運営の仕組みがあります。各公式ページの説明は次のとおりです。
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-7 mb-4">
            <li>
              <strong>freeCodeCamp</strong>：FAQで、米国の501(c)(3)公益慈善団体であり、講座・プロジェクト・修了認定まで「100% free」と説明しています。各修了認定の学習時間の目安は約300時間とされています。なお、このFAQの記事の公開日は2019年10月18日です。
            </li>
            <li>
              <strong>AtCoder</strong>：コンテストへの参加は無料で、主にコンテストのスポンサー収益で運営していると説明しています。スポンサー企業の多くは採用活動の一環として協賛していると案内されています。
            </li>
            <li>
              <strong>Microsoft Learn</strong>：FAQで、トレーニングは「どなたでも無料でご利用いただけます」と記載しています。一方で、以前提供されていた無料の演習環境（サンドボックス）は使用できなくなり、演習の完了にはAzureサブスクリプション（無料の30日間試用版または従量課金制）が必要と案内されています。
            </li>
            <li>
              <strong>MDN</strong>：About ページで、HTML・CSS・JavaScript・Web APIなどのドキュメントを含む「free」な学習基盤を提供していると説明しています。Learn web development のページでは外部の学習サイトも紹介されていますが、紹介先には一部有料のものも含まれます。
            </li>
            <li>
              <strong>CS50x</strong>：ハーバード大学の学生でなくても、OpenCourseWareとして11週分の教材を無料で受講できると案内しています。無料のCS50 Certificateとは別に、edXで有料の認定証（verified certificate）を購入でき、いずれの証明書を目指す場合もedXへの登録が必要とFAQに記載されています。edXの登録時には支払い不要の「free」または「audit」の選択肢があると説明されています。
            </li>
          </ul>
          <p className="text-slate-600 leading-relaxed">
            無料のサービスでも、演習環境の利用料、認定資格の受験料、通信費などが別にかかる場合があります。「どこまでを無料で済ませたいか」を決めたうえで、各サービスの公式ページで条件をご確認ください。
          </p>
        </section>

        <section id="manabi" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">マナビDXの受講料無料講座は811件中46件（当サイト集計）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            マナビDXは、経済産業省とIPA（情報処理推進機構）が運営するデジタル人材育成のポータルサイトです。デジタルスキル標準（DSS）などへの対応を経済産業省・IPAが審査し、合格した講座のみを掲載していると説明されています。講座そのものは民間などの提供事業者が提供しており、受講料は講座ごとに異なります。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            当サイトでは2026年11月27日に、マナビDXの講座検索で受講料の条件を切り替え、表示される件数を確認しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">検索条件</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">検索結果</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">うちデジタルリテラシー講座</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">うちデジタル実践講座</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">条件なし（全講座）</td><td className="border border-slate-200 px-3 py-2 text-right">811件</td><td className="border border-slate-200 px-3 py-2 text-right">183件</td><td className="border border-slate-200 px-3 py-2 text-right">629件</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">受講料：無料</td><td className="border border-slate-200 px-3 py-2 text-right">46件</td><td className="border border-slate-200 px-3 py-2 text-right">39件</td><td className="border border-slate-200 px-3 py-2 text-right">8件</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">受講料：有料</td><td className="border border-slate-200 px-3 py-2 text-right">765件</td><td className="border border-slate-200 px-3 py-2 text-right">144件</td><td className="border border-slate-200 px-3 py-2 text-right">621件</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            出典：マナビDX 講座検索（受講料の絞り込み条件fee=2が無料、fee=1が有料）、2026年11月27日に当サイトで取得。カテゴリー別の件数の合計が検索結果の件数を上回るのは、1つの講座が両方のカテゴリーに属する場合があるためと考えられます。
          </p>
          <p className="text-slate-600 leading-relaxed mt-4">
            無料46件と有料765件の合計は全講座811件と一致し、受講料無料の講座は全体の約5.7％でした（当サイト算出）。無料講座は46件中39件がデジタルリテラシー講座で、プログラミングなどの実践的な技術を学ぶデジタル実践講座の無料講座は8件にとどまります。無料講座の多くは入門・リテラシー向けであり、実践レベルの講座は有料のものが中心です。
          </p>
        </section>

        <section id="related" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">学習戦略・転職準備の関連記事</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            本記事は、学習サービスごとの「無料の範囲と料金」を公式ページで確かめることに絞っています。何をどの順番で学ぶか、学んだ内容を転職にどう生かすかは、次の記事で扱っています。
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-7">
            <li>学習の続け方・資格の選び方：<Link href="/knowledge/continuous-learning/" className="text-blue-600 hover:underline">30代・40代エンジニアの学び続ける技術【学習戦略】</Link></li>
            <li>学んだコードを公開する方法：<Link href="/knowledge/github-intro/" className="text-blue-600 hover:underline">GitHub入門</Link></li>
            <li>未経験からの転職の進め方：<Link href="/knowledge/inexperienced-30s/" className="text-blue-600 hover:underline">30代未経験からのIT転職</Link></li>
            <li>AtCoderなどを使った選考対策：<Link href="/knowledge/coding-test/" className="text-blue-600 hover:underline">コーディングテスト対策</Link></li>
            <li>どの言語から学ぶか：<Link href="/knowledge/popular-languages/" className="text-blue-600 hover:underline">プログラミング言語の人気ランキング</Link></li>
          </ul>
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
          <h2 className="text-xl font-bold text-slate-800 mb-4">出典一覧（確認日：2026年11月27日）</h2>
          <ul className="text-xs text-slate-600 leading-6 space-y-1 break-all">
            <li>Progate 料金・有料会員プラン：https://progate.com/plans/for_users</li>
            <li>ドットインストール 料金プラン：https://dotinstall.com/premium</li>
            <li>paizaラーニング 有料プランのご案内：https://paiza.jp/works/paid_plan_lp/settlement</li>
            <li>paizaラーニング 特定商取引法に基づく表記：https://paiza.jp/guide/tokuteishoutorihiki</li>
            <li>AtCoder「AtCoderってどうして無料なの？」：https://info.atcoder.jp/overview/about/why-tada</li>
            <li>MDN About：https://developer.mozilla.org/en-US/about</li>
            <li>MDN Learn web development：https://developer.mozilla.org/en-US/docs/Learn_web_development</li>
            <li>Microsoft Learn よく寄せられる質問：https://learn.microsoft.com/ja-jp/training/support/faq</li>
            <li>freeCodeCamp「About freeCodeCamp - Frequently Asked Questions」：https://www.freecodecamp.org/news/about/</li>
            <li>CS50x 2026：https://cs50.harvard.edu/x/</li>
            <li>CS50x Certificate：https://cs50.harvard.edu/x/certificate/</li>
            <li>CS50x FAQs：https://cs50.harvard.edu/x/faqs/</li>
            <li>マナビDX トップページ：https://manabi-dx.ipa.go.jp/</li>
            <li>マナビDX 講座検索（受講料：無料）：https://manabi-dx.ipa.go.jp/search?text=&amp;level=&amp;time=&amp;fee=2&amp;cert=&amp;lic=&amp;natl=&amp;other=&amp;page=1</li>
            <li>マナビDX 講座検索（受講料：有料）：https://manabi-dx.ipa.go.jp/search?text=&amp;level=&amp;time=&amp;fee=1&amp;cert=&amp;lic=&amp;natl=&amp;other=&amp;page=1</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "30代・40代エンジニアの学び続ける技術", href: "/knowledge/continuous-learning/" },
              { name: "GitHub入門", href: "/knowledge/github-intro/" },
              { name: "30代未経験からのIT転職", href: "/knowledge/inexperienced-30s/" },
              { name: "コーディングテスト対策", href: "/knowledge/coding-test/" },
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
