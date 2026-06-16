import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "技術ブログの始め方｜Qiita・Zenn・noteの選び方と評価軸",
  description:
    "30-40代エンジニア向けに、技術ブログのプラットフォーム選定（Qiita/Zenn/note/個人ブログ）と転職での評価メカニズムを深掘り。第二の職務経歴書としての見せ方、評価される記事の型、炎上リスク回避まで解説します。",
};

const toc = [
  { id: "conclusion", label: "1. 結論：技術ブログは『第二の職務経歴書』" },
  { id: "platforms", label: "2. プラットフォーム比較（Qiita/Zenn/note/個人）" },
  { id: "choose", label: "3. 目的別・あなたが選ぶべきプラットフォーム" },
  { id: "evaluated", label: "4. 採用担当に評価される記事の型" },
  { id: "themes", label: "5. ミドルが書くと刺さるテーマ" },
  { id: "show", label: "6. 職務経歴書への載せ方・提示方法" },
  { id: "risk", label: "7. 炎上・守秘リスクの避け方" },
  { id: "age", label: "8. 30代・40代の発信戦略の違い" },
  { id: "faq", label: "9. よくある質問" },
];

const faqs = [
  {
    q: "QiitaとZennはどちらを使えばいいですか？",
    a: "目的によります。Qiitaは日本最大級の技術記事プラットフォームで読者母数が大きく、SEO流入も期待できます。Zennはエンジニア向けに設計が洗練され、Markdownの執筆体験やGitHub連携、本（Book）の販売機能が特徴です。『広く読まれたいならQiita寄り、エンジニア読者に質で評価されたいならZenn寄り』が一つの目安です。両方にクロス投稿する人もいますが、まずは続けやすい方を一つ選ぶのが現実的です。",
  },
  {
    q: "noteは技術ブログに向いていますか？",
    a: "noteはコードのシンタックスハイライトなどエンジニア向け機能はQiita/Zennほど充実していませんが、キャリア論・働き方・チームづくりといった『コード以外の発信』には向いています。技術的な深掘り記事はQiita/Zenn、キャリアや組織の話はnote、と使い分ける人もいます。技術力そのものの証明を狙うなら、コードが綺麗に表示されるプラットフォームの方が無難です。",
  },
  {
    q: "独自ドメインの個人ブログを立てるべきですか？",
    a: "長期的に資産化したい、デザインや構成を自由にしたい、収益化も視野に入れる、という場合は個人ブログが向いています。一方で初期構築・運用・SEOの立ち上げに手間がかかり、最初の読者がつきにくいというデメリットもあります。30-40代で時間が限られているなら、まずは集客力のあるQiita/Zennで実績を作り、必要になったら個人ブログへ移行・併用する順序が現実的です。",
  },
  {
    q: "記事は何本くらい書けば転職で評価されますか？",
    a: "本数の明確な基準はありません。採用担当が見るのは数より中身で、『課題→試行錯誤→解決』の思考過程が伝わる記事が1〜2本あるだけでも、量産された入門記事より評価されることがあります。特に30-40代は、量より『設計判断・トラブル対応・技術選定』を深く掘った記事の方が実務力の証明になります。",
  },
  {
    q: "技術ブログを書くと本当に採用担当に見られますか？",
    a: "応募者の名前で検索する採用担当・面接官は珍しくありません。その意味で技術ブログは『第二の職務経歴書』として機能します。職務経歴書にブログURLを添えておくと、技術理解度・言語化能力・継続性をコードを読まずに把握してもらえます。逆に、検索で炎上記事や不正確な内容が出てくるとマイナスにもなり得るため、公開内容には注意が必要です。",
  },
  {
    q: "ブログとGitHub、どちらを優先すべきですか？",
    a: "どちらも成果物の見せ方の一手段で、優先度はあなたの強みによります。コードで魅せたいならGitHub、思考や設計判断を言語化して魅せたいならブログが向きます。両者の使い分けと全体像は",
    aLink: { text: "ポートフォリオの見せ方", href: "/knowledge/portfolio/" },
    aAfter: "を、GitHub単体の運用は別記事を参照してください。",
  },
];

export default function TechBlogPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a + (faq.aLink ? faq.aLink.text + (faq.aAfter ?? "") : ""),
      },
    })),
  };

  return (
    <>
      <ArticleJsonLd
        title="技術ブログの始め方｜Qiita・Zenn・noteの選び方と評価軸"
        description="30-40代エンジニア向けに、技術ブログのプラットフォーム選定（Qiita/Zenn/note/個人ブログ）と転職での評価メカニズムを深掘り。第二の職務経歴書としての見せ方、評価される記事の型、炎上リスク回避まで解説します。"
        url="/knowledge/tech-blog/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ" },
          { name: "技術ブログの始め方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          技術ブログの始め方｜Qiita・Zenn・noteの選び方と評価軸
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | プラットフォーム選定と評価メカニズムの深掘り
        </p>

        <section className="mb-6">
          <p className="text-slate-600 leading-relaxed mb-4">
            技術ブログは、応募者の名前を検索した採用担当が最初に出会う<strong>「第二の職務経歴書」</strong>になり得ます。コードを読まずとも、技術理解度・言語化能力・継続性が伝わるからです。一方で、どのプラットフォームを選ぶかで読まれ方も評価のされ方も変わります。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事は<strong>プラットフォーム選定と評価メカニズム</strong>に絞って深掘りします。GitHub・登壇・OSSも含めた成果物の全体像は<Link href="/knowledge/portfolio/" className="text-petrol underline">ポートフォリオの見せ方</Link>を、GitHub単体は<Link href="/knowledge/github-showcase/" className="text-petrol underline">GitHubの見せ方</Link>をあわせてご覧ください。
          </p>
        </section>

        <DataNote surveyedAt="2026年6月" sources={["各IT転職エージェント公開情報"]} />

        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-sm text-petrol hover:underline">{t.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 1. 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">1. 結論：技術ブログは『第二の職務経歴書』</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            技術ブログがキャリアに効くメカニズムはシンプルです。採用担当・面接官は応募者の名前で検索し、ヒットした記事から<strong>「この人は技術をどう考え、どう言語化するか」</strong>を読み取ります。職務経歴書では伝えきれない思考の質が、記事には滲み出ます。
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
            <p className="text-sm text-amber-800">
              <strong>ミドルの結論：</strong>30-40代は流行りの入門記事を量産するより、<strong>設計判断・トラブル対応・技術選定を深く掘った1本</strong>の方が刺さります。「車輪の再発明」的な記事ではなく、自分が実際に詰まり、試行錯誤して解いた過程を書きましょう。学習の継続そのものについては<Link href="/knowledge/continuous-learning/" className="text-amber-900 underline">継続的な学習の進め方</Link>も参考になります。
            </p>
          </div>
        </section>

        {/* 2. 比較 */}
        <section id="platforms" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">2. プラットフォーム比較（Qiita / Zenn / note / 個人）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            主要4つのプラットフォームを、転職で重要な観点で比較します。読者母数や機能は時期により変わるため、最終的な使い心地は各公式サイトでご確認ください。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="border border-slate-200 px-3 py-2 text-left">観点</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">Qiita</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">Zenn</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">note</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">個人ブログ</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                {[
                  ["読者母数", "大（日本最大級）", "中〜大（エンジニア中心）", "大（非エンジニア含む）", "立ち上げ次第"],
                  ["SEO流入", "強い（ドメイン力）", "強まりつつある", "テーマ次第", "自分のSEO力に依存"],
                  ["読者層", "幅広いエンジニア", "エンジニア寄り", "幅広い一般＋エンジニア", "自分で集める"],
                  ["コード表示", "得意", "得意（執筆体験良）", "やや弱い", "自由（自分で構築）"],
                  ["収益化", "限定的", "Book販売・バッジ等", "有料記事・サポート", "広告・自由"],
                  ["転職での見られ方", "技術記事として標準的", "質重視で好印象になりやすい", "キャリア・組織論向き", "資産性・本気度が伝わる"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 ? "bg-slate-50" : ""}>
                    {row.map((cell, j) => (
                      <td key={j} className={`border border-slate-200 px-3 py-2 ${j === 0 ? "font-medium text-slate-700" : ""}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500">※ 各プラットフォームの規模・機能は時期により変動します。本表は傾向の整理であり、最新仕様は各公式サイトをご確認ください。</p>
        </section>

        {/* 3. 目的別 */}
        <section id="choose" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">3. 目的別・あなたが選ぶべきプラットフォーム</h2>
          <div className="space-y-4">
            {[
              { t: "とにかく広く読まれて実績を作りたい", d: "Qiita。読者母数とSEOが強く、検索流入で名前が露出しやすい。まず継続して書く第一歩に向く。" },
              { t: "エンジニア読者に質で評価されたい", d: "Zenn。執筆体験が良くGitHub連携も可能。質の高い記事が評価されやすく、採用担当への印象も作りやすい。" },
              { t: "キャリア・組織・働き方を発信したい", d: "note。コードより文章主体のテーマに向く。マネジメント志向のミドルの発信に。" },
              { t: "長期的に資産化・収益化したい", d: "個人ブログ。自由度と資産性が最大。ただし立ち上げに手間がかかるため、QiitaやZennで実績を作ってからの併用が現実的。" },
            ].map((n, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{n.t}</h3>
                <p className="text-sm text-slate-600">{n.d}</p>
              </div>
            ))}
          </div>
          <div className="bg-petrol-soft rounded-lg p-5 mt-5">
            <p className="text-sm text-petrol-deep"><strong>迷ったら：</strong>まずQiitaかZennのどちらか1つに絞って続けるのが最適です。複数同時運用は更新が止まりがちで、止まったブログはかえって現役性を疑わせます。続けられる1つを選びましょう。</p>
          </div>
        </section>

        {/* 4. 評価される記事 */}
        <section id="evaluated" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">4. 採用担当に評価される記事の型</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            評価される技術記事には共通の構造があります。「やってみた」で終わらず、<strong>課題→試行→解決の思考過程</strong>が見える記事は、読む人に判断力と再現性を伝えます。
          </p>
          <div className="space-y-4">
            {[
              { num: "1", title: "課題（なぜ取り組んだか）", desc: "実務や個人開発で実際に直面した問題から始める。背景があると説得力が出る。" },
              { num: "2", title: "試行錯誤（何を試し、何が外れたか）", desc: "うまくいかなかった選択肢も書く。失敗の記録こそ再現性とE-E-A-Tの証拠になる。" },
              { num: "3", title: "解決（なぜそれで解けたか）", desc: "最終解だけでなく、なぜそれが効いたかの理由を言語化する。" },
              { num: "4", title: "学び・残課題", desc: "得た教訓と、残っている課題を正直に書く。誠実さが信頼につながる。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.num}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. テーマ */}
        <section id="themes" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">5. ミドルが書くと刺さるテーマ</h2>
          <p className="text-slate-600 leading-relaxed mb-4">経験のある30-40代だからこそ書けるテーマは、入門記事より差別化が効きます。次のパターンは反応も評価も得やすい傾向です。</p>
          <ul className="space-y-2">
            {[
              "本番障害の原因調査と恒久対策（ポストモーテムの汎用版）",
              "技術選定で迷った点と、最終的にこれを選んだ理由",
              "レガシーをリファクタした過程と、数値で見た効果",
              "チームの開発体験（DX）を改善した取り組み",
              "新技術を実務に導入する際の検証プロセスと判断基準",
              "若手にレビューで伝えている設計の勘所",
            ].map((t, i) => (
              <li key={i} className="flex gap-2 text-sm text-slate-600">
                <span className="text-petrol font-bold shrink-0">✓</span>{t}
              </li>
            ))}
          </ul>
        </section>

        {/* 6. 提示方法 */}
        <section id="show" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">6. 職務経歴書への載せ方・提示方法</h2>
          <p className="text-slate-600 leading-relaxed mb-4">せっかく書いた記事も、採用担当に届かなければ評価されません。提示方法のチェックリストです。</p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <ul className="space-y-2">
              {[
                "職務経歴書の冒頭近くにブログURLを記載している",
                "代表的な記事1〜2本を『おすすめ記事』として直接リンクしている",
                "プロフィールに経験年数・得意領域が書かれている",
                "GitHubプロフィールのREADMEからもブログに導線がある",
                "本名公開が難しい場合も、応募書類には実URLを添えている",
                "古い不正確な記事は加筆修正 or 非公開にしてある",
              ].map((c, i) => (
                <li key={i} className="flex gap-2 text-sm text-slate-700">
                  <span className="text-petrol font-bold shrink-0">✓</span>{c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 7. リスク */}
        <section id="risk" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">7. 炎上・守秘リスクの避け方</h2>
          <div className="space-y-4">
            {[
              { t: "守秘義務を守る", d: "社名・固有のビジネス数値・内部構成・顧客情報は書かない。再現可能な技術的学びだけを切り出し、固有情報は一般化する。" },
              { t: "不正確な断定を避ける", d: "誤った情報は検索でヒットし続け、信頼を損なう。検証していない内容は『未検証』と明記するか、書かない。" },
              { t: "他者・他技術を過度に貶めない", d: "比較は事実ベースで。特定の技術や人を断定的に貶める記事は炎上リスクが高く、採用でも印象を悪くする。" },
              { t: "在職中の発信は会社の規定を確認", d: "副業・発信に関する就業規則がある場合がある。トラブルを避けるため事前に確認する。" },
            ].map((n, i) => (
              <div key={i} className="bg-red-50 border border-red-200 rounded-lg p-5">
                <h3 className="font-bold text-red-700 mb-1">{n.t}</h3>
                <p className="text-sm text-slate-600">{n.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 8. 年代別 */}
        <section id="age" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">8. 30代・40代の発信戦略の違い</h2>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：技術の深さと幅を見せる</h3>
              <p className="text-sm text-petrol-deep">技術選定・設計・トラブル対応の記事で、手が動くことと判断できることの両方を示すと効果的です。関連: <Link href="/age/30s/" className="text-petrol-deep underline">30代の転職</Link>。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：現役性＋知見の還元を見せる</h3>
              <p className="text-sm text-petrol-deep">「現役で技術を追えている」ことを最新テーマの記事で示しつつ、チーム・組織への知見還元の記事を添えると、テックリード・EM採用で強みになります。関連: <Link href="/age/40s/" className="text-petrol-deep underline">40代の転職</Link>、<Link href="/knowledge/management/" className="text-petrol-deep underline">マネジメントキャリア</Link>。</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">9. よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-lg overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-3 bg-slate-50 hover:bg-slate-100 transition-colors font-medium text-sm text-slate-800">
                  <span>Q. {faq.q}</span>
                  <span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">&#9662;</span>
                </summary>
                <div className="px-5 py-3 text-sm text-slate-600 leading-relaxed">
                  A. {faq.a}
                  {faq.aLink && (
                    <>
                      <Link href={faq.aLink.href} className="text-petrol underline">{faq.aLink.text}</Link>
                      {faq.aAfter}
                    </>
                  )}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">技術発信を転職に活かす相談をしよう</h2>
          <p className="text-blue-100 text-sm mb-4">IT特化型エージェントなら、技術ブログや成果物を応募先にどう見せるか具体的にアドバイスしてくれます。</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "ポートフォリオの見せ方（横断）", href: "/knowledge/portfolio/" },
              { name: "GitHubの見せ方・採用担当が見る7点", href: "/knowledge/github-showcase/" },
              { name: "OSS貢献の始め方・8つの貢献", href: "/knowledge/oss-contribution/" },
              { name: "継続的な学習の進め方", href: "/knowledge/continuous-learning/" },
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
              { name: "市場価値の調べ方", href: "/knowledge/market-value/" },
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
