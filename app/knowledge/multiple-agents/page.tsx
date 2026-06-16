import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "転職エージェントの複数併用｜2〜3社の組み合わせと管理術";
const PAGE_DESC =
  "転職エージェントは何社併用すべきか。30代・40代エンジニア向けに併用パターン、スプレッドシート管理法、重複応募の防ぎ方、断り方の例文まで具体的に解説します。";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：2〜3社の併用が現実的" },
  { id: "why", label: "1社だけ／多すぎが危険な理由" },
  { id: "merit", label: "併用のメリット・デメリット" },
  { id: "patterns", label: "タイプ別の併用パターン" },
  { id: "manage", label: "管理方法（スプレッドシート）" },
  { id: "duplicate", label: "重複応募を防ぐ方法" },
  { id: "decline", label: "断り方・退会の例文テンプレ" },
  { id: "middle", label: "30代・40代の併用の注意点" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const patterns = [
  {
    title: "30代・実務経験ありの王道",
    combo: "レバテックキャリア（メイン）＋ Geekly（サブ）＋ doda ITエンジニア（補完）",
    note: "特化型2社で技術マッチングの精度を上げ、総合型のdodaで全国・幅広い求人を補完。レバテックは利用者の約80%が20〜30代（公式ガイド）で30代と相性が良い。",
    links: [
      { name: "レバテックキャリア", href: "/review/levtech/" },
      { name: "Geekly", href: "/review/geekly/" },
      { name: "doda ITエンジニア", href: "/review/doda-it/" },
    ],
  },
  {
    title: "40代・ハイクラス/マネジメント志向",
    combo: "ビズリーチ（メイン）＋ レバテックキャリア（サブ）＋ リクルートエージェントIT（補完）",
    note: "ビズリーチは年収1,000万円以上求人が全体の約4割（二次）でハイクラスに強い。特化型で技術面を補い、リクルートで非公開求人の量を確保。",
    links: [
      { name: "ビズリーチ", href: "/review/bizreach-it/" },
      { name: "レバテックキャリア", href: "/review/levtech/" },
      { name: "リクルートエージェントIT", href: "/review/recruit-it/" },
    ],
  },
  {
    title: "Web系・ベンチャー志望",
    combo: "Geekly（メイン）＋ Green（補完・直接応募）＋ paiza転職（補完・スカウト）",
    note: "GeeklyはWeb/ゲームに強く提案が速い。Greenはカジュアル面談で社風を把握でき、paizaはスキルチェックのランクで実力評価される。エージェントとダイレクト型を組み合わせる形。",
    links: [
      { name: "Geekly", href: "/review/geekly/" },
      { name: "Green", href: "/review/green/" },
      { name: "paiza転職", href: "/review/paiza/" },
    ],
  },
  {
    title: "地方在住・全国の求人を見たい",
    combo: "ワークポート（メイン）＋ リクルートエージェントIT（サブ）＋ doda ITエンジニア（補完）",
    note: "ワークポートは全国47都道府県57拠点（公式/二次）。リクルート・dodaは全国対応で求人量が多く、地方やフルリモート求人の取りこぼしを防ぐ。",
    links: [
      { name: "ワークポート", href: "/review/workport/" },
      { name: "リクルートエージェントIT", href: "/review/recruit-it/" },
      { name: "doda ITエンジニア", href: "/review/doda-it/" },
    ],
  },
];

const declineTemplates = [
  {
    label: "紹介された求人を断る（理由を添えて）",
    body:
      "ご紹介ありがとうございます。今回の◯◯社の求人ですが、使用技術が現在のスキルと方向性が異なるため、今回は見送らせていただきます。引き続き、バックエンド（Go/AWS）で年収◯◯万円以上の求人を中心にご紹介いただけると助かります。",
  },
  {
    label: "他社経由で進む企業について断る",
    body:
      "お世話になっております。◯◯社につきましては、別ルートで既に選考が進んでおり、重複を避けるため貴社経由でのご応募は見送らせてください。情報の行き違いを防ぐためお伝えしました。他の求人は引き続きよろしくお願いいたします。",
  },
  {
    label: "内定辞退・他社決定の連絡",
    body:
      "このたびは多くのご支援をいただきありがとうございました。複数社を比較検討した結果、別の企業より内定をいただき、そちらへの入社を決めました。貴社にご紹介いただいた求人も大変参考になりました。心より御礼申し上げます。",
  },
  {
    label: "退会・サポート終了の連絡",
    body:
      "お世話になっております。このたび転職活動を終了することとなりましたので、退会の手続きをお願いできますでしょうか。丁寧にご対応いただきありがとうございました。",
  },
];

const faqs = [
  {
    q: "何社くらい併用するのがベスト？",
    a: "2〜3社が目安です。IT特化型を軸に、総合型やスカウト型を組み合わせると効率的です。1社だけだと求人の幅が狭く担当者の比較もできません。一方5社以上になると面談や連絡の管理が煩雑になり、重複応募のリスクも上がります。",
  },
  {
    q: "同じ求人を複数のエージェントから紹介されたら？",
    a: "必ずどちらか1社に絞って応募します。同じ企業へ複数ルートから応募すると、企業側で情報が重複し印象が悪くなります。先に紹介してくれた、または情報が詳しい1社を選び、もう一方には「別ルートで進んでいる」と伝えて辞退しましょう。",
  },
  {
    q: "複数登録していることは伝えるべき？",
    a: "正直に伝えて問題ありません。「他にも2社利用しています」と伝えることで、選考スケジュールの調整や重複応募の防止がしやすくなります。隠して重複応募が発覚する方がトラブルになります。",
  },
  {
    q: "メインとサブはどう決める？",
    a: "提案の精度・担当者の技術理解・レスポンスの速さで判断します。最も信頼できる1社をメインにして密に連絡を取り、残りはメインで拾えない求人や情報を補完するサブとして使うと管理が楽になります。",
  },
  {
    q: "重複応募はどうやって防ぐ？",
    a: "応募先をスプレッドシートで一元管理し、企業名・応募ルート・選考ステータスを記録します。新しい求人を紹介されたら、まず既存の応募リストと突き合わせて重複がないか確認してから返事をするのが基本です。",
  },
  {
    q: "使わなくなったエージェントは退会すべき？",
    a: "転職活動が終わったら退会しましょう。放置すると不要な連絡が続きます。退会手続きは各社のマイページまたはメール1通で完了するのが一般的です。本記事の退会連絡テンプレも活用してください。",
  },
  {
    q: "担当者の質にバラつきがある場合は？",
    a: "担当変更を依頼します。同じエージェント内でも担当者により提案の質は大きく異なります。「ITに詳しい方へ変更してほしい」と具体的に伝えると適切な担当に変わることがあります。改善しなければ別社へ切り替える判断も自由です。",
  },
];

export default function MultipleAgentsPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/knowledge/multiple-agents/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "転職エージェントの複数併用" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          転職エージェントの複数併用｜2〜3社の組み合わせと管理術
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | エージェント複数併用の実践ガイド
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          転職エージェントは1社に絞るべきか、複数併用すべきか。結論は「2〜3社の併用」です。ただし数を増やすほど管理は煩雑になり、重複応募などのトラブルも起こりやすくなります。本記事では、タイプ別の併用パターン、スプレッドシートでの管理方法、重複応募の防ぎ方、そして断り方・退会の例文テンプレまで、実際に手を動かせる形で解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={["各社公式サイト・公式ガイド", "転職メディア集計値（時点付き）", "Qiita Job Change等の口コミ傾向"]}
        />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：2〜3社の併用が現実的</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              IT特化型1〜2社＋総合型/スカウト型1社の<strong>2〜3社</strong>が、求人の幅・担当者の比較・管理のしやすさのバランスが取れる現実解です。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>・メイン1社を決めて密に連絡、残りはサブ・補完として使う</li>
              <li>・応募先はスプレッドシートで一元管理し重複応募を防ぐ</li>
              <li>・複数利用していることは各社に正直に伝える</li>
            </ul>
          </div>
        </section>

        {/* なぜ */}
        <section id="why" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">1社だけ／多すぎが危険な理由</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-red-500">1社</p>
                <p className="text-sm text-slate-600 mt-1">求人の幅が狭く、担当者の良し悪しを比較できない。提案が偏る。</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-petrol">2〜3社</p>
                <p className="text-sm text-slate-600 mt-1">求人の幅と担当者比較を確保しつつ、連絡管理も現実的に回せる。</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-red-500">5社以上</p>
                <p className="text-sm text-slate-600 mt-1">面談・連絡が増えすぎ、同一求人の重複応募リスクが高まる。</p>
              </div>
            </div>
          </div>
        </section>

        {/* メリット・デメリット */}
        <section id="merit" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">併用のメリット・デメリット</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-5">
              <h3 className="font-bold text-blue-800 mb-3">メリット</h3>
              <ul className="text-sm text-petrol-deep space-y-2">
                <li>・各社の非公開求人を横断でき、求人カバー率が上がる</li>
                <li>・担当者の技術理解・対応速度を比較してメインを選べる</li>
                <li>・複数オファーが交渉材料になり年収交渉を有利に進めやすい</li>
                <li>・特化型と総合型で「精度」と「幅」を役割分担できる</li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <h3 className="font-bold text-amber-800 mb-3">デメリット</h3>
              <ul className="text-sm text-amber-700 space-y-2">
                <li>・面談・連絡が増え、対応に時間と手間がかかる</li>
                <li>・同一求人を別ルートで重複応募してしまうリスク</li>
                <li>・各社へ同じ説明を繰り返す手間が発生する</li>
                <li>・断り・辞退の連絡が増え、気疲れしやすい</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 併用パターン */}
        <section id="patterns" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">タイプ別の併用パターン</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            自分に近いタイプの組み合わせを叩き台にしてください。数値は調査時点の公式・二次情報に基づきます。
          </p>
          <div className="space-y-4">
            {patterns.map((p) => (
              <div key={p.title} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{p.title}</h3>
                <p className="text-sm text-slate-800 font-medium mb-2">{p.combo}</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-2">{p.note}</p>
                <div className="flex flex-wrap gap-2">
                  {p.links.map((l) => (
                    <Link key={l.href} href={l.href} className="text-xs text-petrol hover:underline">
                      {l.name}の評判 →
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            自分のタイプの選び方は<Link href="/knowledge/how-to-choose/" className="text-petrol hover:underline">エージェントの選び方</Link>、年代別の比較は<Link href="/compare/30s-agents/" className="text-petrol hover:underline">30代向け比較</Link>・<Link href="/compare/40s-agents/" className="text-petrol hover:underline">40代向け比較</Link>を参照してください。
          </p>
        </section>

        {/* 管理方法 */}
        <section id="manage" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">管理方法（スプレッドシート）</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            複数併用の成否は「管理」で決まります。次の列を持つスプレッドシートを1枚作るだけで、重複応募と連絡漏れをほぼ防げます。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-2 border border-slate-200 font-medium">企業名</th>
                  <th className="text-left px-3 py-2 border border-slate-200 font-medium">応募ルート</th>
                  <th className="text-left px-3 py-2 border border-slate-200 font-medium">ポジション</th>
                  <th className="text-left px-3 py-2 border border-slate-200 font-medium">年収レンジ</th>
                  <th className="text-left px-3 py-2 border border-slate-200 font-medium">選考ステータス</th>
                  <th className="text-left px-3 py-2 border border-slate-200 font-medium">次アクション/期限</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-slate-50">
                  <td className="px-3 py-2 border border-slate-200">A社</td>
                  <td className="px-3 py-2 border border-slate-200">レバテック</td>
                  <td className="px-3 py-2 border border-slate-200">バックエンド</td>
                  <td className="px-3 py-2 border border-slate-200">600〜700万</td>
                  <td className="px-3 py-2 border border-slate-200">一次面接</td>
                  <td className="px-3 py-2 border border-slate-200">6/12 面接</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-3 py-2 border border-slate-200">B社</td>
                  <td className="px-3 py-2 border border-slate-200">Geekly</td>
                  <td className="px-3 py-2 border border-slate-200">テックリード</td>
                  <td className="px-3 py-2 border border-slate-200">700〜850万</td>
                  <td className="px-3 py-2 border border-slate-200">書類選考中</td>
                  <td className="px-3 py-2 border border-slate-200">結果待ち</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            ポイントは「応募ルート」列を必ず持つこと。新しい求人を紹介されたら、この表を見て同じ企業が別ルートに無いか確認してから返事をします。
          </p>
        </section>

        {/* 重複応募 */}
        <section id="duplicate" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">重複応募を防ぐ方法</h2>
          <div className="space-y-4">
            {[
              { title: "応募前に必ず管理表と突き合わせる", desc: "紹介された求人名と企業名を、既存の応募リストと照合してから返事をします。社名が伏せられている非公開求人は、エージェントに「この求人の企業名は◯◯ですか」と確認してから応募可否を答えます。" },
              { title: "複数利用していることを各社に伝える", desc: "「他社も利用しているため、応募前に企業名を確認させてください」と一言伝えておくと、重複を未然に防げます。隠すより圧倒的にトラブルが減ります。" },
              { title: "先に進んでいるルートを優先する", desc: "万一同じ企業が重なったら、先に選考が進んでいる、または情報が詳しい1社に絞り、もう一方には早めに辞退を連絡します。後述の例文を使ってください。" },
            ].map((d) => (
              <div key={d.title} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{d.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 断り方テンプレ */}
        <section id="decline" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">断り方・退会の例文テンプレ</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            併用では「断る」場面が必ず増えます。角を立てずに伝えるための例文です。◯◯部分を自分の状況に置き換えて使ってください。
          </p>
          <div className="space-y-4">
            {declineTemplates.map((t) => (
              <div key={t.label} className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700">{t.label}</div>
                <p className="px-4 py-3 text-sm text-slate-600 leading-relaxed whitespace-pre-line">{t.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の併用の注意点</h2>
          <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
            <p>
              30代・40代は在職中に活動するケースが大半で、時間が限られます。やみくもに数を増やすと、面談と連絡だけで疲弊し、本業や面接準備に支障が出ます。<strong>「メイン1社＋サブ1〜2社」に絞り、メインに連絡を集約する</strong>のが現実的です。
            </p>
            <p>
              40代はマネジメント経験や専門領域が評価軸になるため、ハイクラス・スカウト型（ビズリーチ等）を1枠入れて市場価値を測りつつ、特化型で技術面を補う併用が有効です。レバテック公表の年代別平均年収では正社員SE 40代 約618万円、年収1,000万円以上の割合は40代で12.67%（2025年・ガイド記事）で、複数オファーは年収交渉の材料になります。
            </p>
            <p>
              年代別の実態は<Link href="/age/30s/" className="text-petrol hover:underline">30代の転職</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職</Link>も参考にしてください。
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">よくある質問</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border border-slate-200 rounded-lg overflow-hidden">
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
          <h2 className="text-xl font-bold mb-3">併用する2〜3社をまず選ぼう</h2>
          <p className="text-blue-100 text-sm mb-4">
            IT特化型と総合型の組み合わせが基本。10社の比較から、自分に合う併用先を選びましょう。
          </p>
          <Link
            href="/compare/agents/"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            IT転職エージェント10社比較を見る
          </Link>
        </section>

        {/* 関連記事 */}
        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "IT転職エージェントの選び方", href: "/knowledge/how-to-choose/" },
              { name: "IT転職エージェント10社比較", href: "/compare/agents/" },
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
              { name: "スカウトの活用法", href: "/knowledge/scout/" },
              { name: "直接応募とエージェントの使い分け", href: "/knowledge/direct-apply/" },
              { name: "エージェントに断られた時", href: "/knowledge/agent-rejection/" },
            ].map((item) => (
              <Link
                key={item.href}
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
