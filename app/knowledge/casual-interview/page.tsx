import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "カジュアル面談の進め方｜エンジニアの逆質問リスト20問";
const PAGE_DESC =
  "30代・40代エンジニア向けにカジュアル面談の進め方を解説。面接との違い、30〜60分の進行フロー、技術スタック・開発フロー・評価制度などカテゴリ別の逆質問20問、NG質問、選考に進む流れまでをまとめました。";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/casual-interview/" },
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：評価でなく相互理解の場として使う" },
  { id: "difference", label: "カジュアル面談と面接の違い" },
  { id: "flow", label: "進行フロー（30〜60分）" },
  { id: "questions", label: "エンジニアの逆質問リスト20問" },
  { id: "two-way", label: "経験を添えて双方向にする" },
  { id: "ng", label: "避けたいNG質問" },
  { id: "next", label: "選考に進む流れ" },
  { id: "middle", label: "30代・40代が見るべきポイント" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const questionCategories = [
  {
    cat: "技術スタック・アーキテクチャ",
    items: [
      "現在の主要な技術スタック（言語・フレームワーク・インフラ）を教えてください。",
      "モノリスとマイクロサービスのどちらの構成で、今後の方向性はどう考えていますか。",
      "クラウドはどこを使い、IaC（Terraform等）はどの程度導入されていますか。",
      "技術的負債はどの領域に溜まりやすく、どう向き合っていますか。",
    ],
  },
  {
    cat: "技術選定・意思決定",
    items: [
      "新しい技術を導入するとき、誰がどのように意思決定していますか。",
      "直近で技術選定を変更した事例と、その判断理由を教えてください。",
      "ライブラリやバージョンのアップデートはどの頻度で行っていますか。",
    ],
  },
  {
    cat: "開発フロー・CI/CD",
    items: [
      "コードレビューはどの単位・人数で運用していますか。",
      "CI/CDパイプラインの構成と、デプロイ頻度を教えてください。",
      "テスト（単体・結合・E2E）の方針とカバレッジの考え方はどうですか。",
      "障害発生時のオンコール体制とポストモーテムの運用はありますか。",
    ],
  },
  {
    cat: "チーム・働き方",
    items: [
      "チーム構成（人数・役割・職種比率）と、配属予定のチームを教えてください。",
      "リモート・出社の比率や、コアタイムの運用はどうなっていますか。",
      "ドキュメント文化（設計書・ADR・Wiki）はどの程度根付いていますか。",
    ],
  },
  {
    cat: "評価・キャリア",
    items: [
      "エンジニアの評価制度（等級・評価軸）はどうなっていますか。",
      "スペシャリストとマネジメントのキャリアパスは分かれていますか。",
      "学習支援（書籍・カンファレンス・資格費用）の制度はありますか。",
    ],
  },
  {
    cat: "募集背景・期待役割",
    items: [
      "今回の募集は増員ですか、欠員補充ですか。背景を教えてください。",
      "このポジションに期待する役割と、入社後3〜6か月で求める成果は何ですか。",
      "活躍している方に共通する特徴があれば教えてください。",
    ],
  },
];

const faqs = [
  {
    q: "カジュアル面談で評価されることはありますか？",
    a: "建前としては評価の場ではありませんが、実際には担当者に印象は残ります。話した内容が後の選考に共有されることもあるため、ラフな場であっても最低限の準備と誠実な受け答えは必要です。とはいえ志望動機を完璧に語る必要はなく、相互理解を目的に臨むのが適切です。",
  },
  {
    q: "面接とは何が違うのですか？",
    a: "面接は合否を決める選考プロセスの一部ですが、カジュアル面談は選考前の情報交換が目的です。多くの場合、合否はつかず、双方が「次の選考に進むか」を判断する場として機能します。スカウト経由や、社員と話したいという希望から設定されることが多い形式です。",
  },
  {
    q: "私服でも大丈夫ですか？",
    a: "オフィスカジュアル程度が無難です。「カジュアル」と名前が付くため私服可とされることが多いですが、相手はあなたを判断材料の一つにします。オンラインの場合も、清潔感のある服装と静かな通信環境を整えておくと安心です。",
  },
  {
    q: "逆質問は何個くらい用意すべきですか？",
    a: "5〜8問を準備し、会話の流れで3〜5問使えれば十分です。本記事のカテゴリ別リストから、自分が最も知りたい領域を中心に選びましょう。調べれば分かる内容ではなく、現場の判断や運用に踏み込む質問が好印象です。",
  },
  {
    q: "給与や待遇は聞いてもいいですか？",
    a: "聞いて構いませんが、冒頭から給与の話だけに終始すると印象を損ねます。まず仕事内容や技術環境への関心を示したうえで、「差し支えなければ年収レンジの目安を伺えますか」と一言添えて確認するのが自然です。詳細な交渉は内定前後のフェーズで行います。",
  },
  {
    q: "その場で選考に進みたいと言うべきですか？",
    a: "興味を持ったら、面談の終盤で「ぜひ選考に進みたい」と意思表示して問題ありません。意欲が伝わり、その後の調整がスムーズになります。迷う場合は持ち帰り、後日メールで返答しても失礼にはあたりません。",
  },
];

export default function CasualInterviewPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/knowledge/casual-interview/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "カジュアル面談の進め方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          カジュアル面談の進め方｜エンジニアの逆質問リスト20問
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 30代・40代エンジニアのためのカジュアル面談ガイド
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          カジュアル面談は、選考に入る前に企業と相互理解を深める情報交換の場です。面接とは目的が異なり、合否がつかないことが一般的ですが、担当者に印象は残ります。本記事では、面談と面接の違い、30〜60分の進行フロー、エンジニアが現場の実態を見抜くためのカテゴリ別逆質問20問、避けたいNG質問、そして選考へ進む流れまでを、30代・40代の視点で整理します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={["各社採用情報・スカウトサービスの一般的な運用", "編集部によるエンジニア採用実務の整理"]}
        />

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

        <section id="conclusion" className="mb-12 scroll-mt-20">
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：評価でなく相互理解の場として使う</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              カジュアル面談は「合否を決める面接」ではなく「選考に進むかをお互いに見極める場」です。だからこそ、企業側に評価されることより、<strong>自分が入社後に後悔しないための情報を集めること</strong>に主眼を置くのが正解です。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>・志望動機を完璧に語る必要はない。関心と人柄が伝われば十分</li>
              <li>・現場の判断・運用に踏み込む逆質問を3〜5問用意する</li>
              <li>・興味を持ったら終盤で選考への意思を伝えると流れが速い</li>
            </ul>
            <p className="text-sm text-blue-900 leading-relaxed mt-3">
              選考に入ってからの技術面接対策は<Link href="/knowledge/tech-interview/" className="font-semibold underline">技術面接の準備</Link>、行動面接は<Link href="/knowledge/behavioral/" className="font-semibold underline">行動面接（STAR）対策</Link>で別途解説しています。本記事は選考前の立ち回りに特化します。
            </p>
          </div>
        </section>

        <section id="difference" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">カジュアル面談と面接の違い</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            両者は似て非なるものです。混同すると、面接のつもりで身構えすぎたり、逆に油断して印象を損ねたりします。
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">比較項目</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">カジュアル面談</th>
                  <th className="text-left px-4 py-3 border border-slate-200 font-medium">面接</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: "目的", casual: "相互理解・情報交換", interview: "合否の判断" },
                  { item: "合否", casual: "つかないのが原則", interview: "つく" },
                  { item: "主導権", casual: "ほぼ対等", interview: "企業側" },
                  { item: "話す比率", casual: "企業側の説明が多め", interview: "応募者の回答が中心" },
                  { item: "服装", casual: "オフィスカジュアル可", interview: "きれいめが無難" },
                  { item: "きっかけ", casual: "スカウト・社員と話したい等", interview: "応募・書類通過後" },
                ].map((row) => (
                  <tr key={row.item} className="hover:bg-slate-50">
                    <td className="px-4 py-3 border border-slate-200 font-medium">{row.item}</td>
                    <td className="px-4 py-3 border border-slate-200">{row.casual}</td>
                    <td className="px-4 py-3 border border-slate-200">{row.interview}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">
            ただし「合否がつかない」のは建前で、面談で得た印象が後の選考に共有されることもあります。評価を恐れて萎縮する必要はありませんが、最低限の準備と誠実な態度は欠かせません。スカウト経由で面談に至った場合の返信の組み立ては<Link href="/knowledge/scout-reply/" className="text-petrol hover:underline">スカウト返信の例文</Link>を参考にしてください。
          </p>
        </section>

        <section id="flow" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">進行フロー（30〜60分）</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            多くのカジュアル面談は30〜60分で、おおむね次の流れで進みます。後半に逆質問の時間が用意されることが多いので、聞きたいことを優先順位順に整理しておきましょう。
          </p>
          <div className="space-y-3">
            {[
              { phase: "アイスブレイク（5分）", desc: "自己紹介と、面談に至った経緯（スカウト・興味）の確認。ここで緊張をほぐします。" },
              { phase: "企業・事業の説明（10〜15分）", desc: "企業側から事業内容・組織・募集ポジションの説明。メモを取りながら不明点を控えておきます。" },
              { phase: "あなたの経歴・関心のヒアリング（10〜15分）", desc: "これまでの経験や興味のある領域を聞かれます。話しすぎず、要点を簡潔に伝えます。" },
              { phase: "逆質問・相互Q&A（10〜20分）", desc: "最も重要な時間。技術環境・チーム・評価制度など、現場の実態に踏み込みます。" },
              { phase: "今後の流れの確認（5分）", desc: "選考に進む場合のステップや、検討期間の確認。意欲があればその場で伝えてもOK。" },
            ].map((p, i) => (
              <div key={p.phase} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{p.phase}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="questions" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニアの逆質問リスト20問</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            求人票やコーポレートサイトを読めば分かることではなく、現場の判断・運用・温度感を引き出す質問を厳選しました。気になるカテゴリから3〜5問を選んでください。
          </p>
          <div className="space-y-5">
            {questionCategories.map((c) => (
              <div key={c.cat} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-3">{c.cat}</h3>
                <ul className="space-y-2">
                  {c.items.map((q) => (
                    <li key={q} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="text-petrol font-bold shrink-0">Q</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="two-way" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">経験を添えて双方向にする</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            逆質問は、ただ聞くだけより自分の経験を一言添えると会話が双方向になり、相手の記憶にも残ります。
          </p>
          <div className="space-y-4">
            <div className="bg-slate-50 rounded-lg p-5">
              <p className="text-sm text-slate-700 leading-relaxed">
                <span className="font-semibold text-slate-800">例：</span>「前職ではモノリスからの段階的なマイクロサービス移行を2年ほど担当していました。御社では現在どの段階にあり、今後どんな方向を目指していますか？」
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-5">
              <p className="text-sm text-slate-700 leading-relaxed">
                <span className="font-semibold text-slate-800">例：</span>「これまでオンコール体制の整備に苦労してきたので関心があるのですが、障害対応とポストモーテムの運用は現状どうされていますか？」
              </p>
            </div>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            このように経験と質問をセットにすると、評価の場でないカジュアル面談でも、自然に自分のスキルや関心を伝えられます。
          </p>
        </section>

        <section id="ng" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">避けたいNG質問</h2>
          <div className="space-y-4">
            <div className="bg-red-50 rounded-lg p-5">
              <h3 className="font-bold text-red-800 mb-2">調べれば分かることを聞く</h3>
              <p className="text-sm text-red-700 leading-relaxed">
                「どんな事業をしていますか」「設立はいつですか」など、コーポレートサイトや求人票に書かれている内容を聞くと、準備不足の印象を与えます。基本情報は事前に押さえておきましょう。
              </p>
            </div>
            <div className="bg-red-50 rounded-lg p-5">
              <h3 className="font-bold text-red-800 mb-2">給与・待遇だけに終始する</h3>
              <p className="text-sm text-red-700 leading-relaxed">
                条件の確認は大切ですが、冒頭から待遇の話ばかりだと「仕事への関心が薄い」と受け取られかねません。仕事内容や技術環境への関心を示したうえで触れるのが自然です。
              </p>
            </div>
            <div className="bg-red-50 rounded-lg p-5">
              <h3 className="font-bold text-red-800 mb-2">受け身で質問が一つも出ない</h3>
              <p className="text-sm text-red-700 leading-relaxed">
                「特にありません」で終わると、関心の低さと映ります。たとえ条件が合わなくても、一つは現場に踏み込む質問を用意しておきましょう。
              </p>
            </div>
          </div>
        </section>

        <section id="next" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">選考に進む流れ</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              面談で興味を持ったら、終盤で「ぜひ選考に進みたい」と意思表示すると、その後の調整がスムーズになります。迷う場合は持ち帰り、後日メールで返答しても失礼にはあたりません。
            </p>
            <p>
              選考に進むと、書類選考や面接、企業によっては技術課題が課されます。準備の全体像は<Link href="/knowledge/timeline/" className="text-petrol hover:underline">転職活動のタイムライン</Link>、職務経歴書は<Link href="/knowledge/resume/" className="text-petrol hover:underline">エンジニア向け職務経歴書</Link>を参照してください。技術面接・行動面接・コーディングテストの対策は、それぞれ<Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接</Link>・<Link href="/knowledge/behavioral/" className="text-petrol hover:underline">行動面接</Link>・<Link href="/knowledge/coding-test/" className="text-petrol hover:underline">コーディングテスト</Link>の各記事にまとめています。
            </p>
          </div>
        </section>

        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代が見るべきポイント</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              30代・40代は「ポテンシャル」より「即戦力・マネジメント」で見られます。カジュアル面談でも、若手とは違う角度で情報を取りに行くのが効率的です。
            </p>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">期待役割と裁量を確認する</h3>
              <p>
                「このポジションに期待する役割」「入社後3〜6か月で求める成果」を聞くと、ミドルとしての期待値が分かります。プレイヤーとして採るのか、技術リードやマネジメントを任せたいのかを早期に擦り合わせましょう。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">年齢構成とキャリアパスを見る</h3>
              <p>
                チームの年齢構成や、スペシャリスト／マネジメントのキャリアパスが分かれているかは、長く働けるかを左右します。「自分より年上のエンジニアが現役で活躍しているか」も一つの判断材料です。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">家庭・働き方との両立を擦り合わせる</h3>
              <p>
                リモート比率やコアタイム、オンコールの負荷は、家庭がある世代には重要です。聞きにくければ「働き方の柔軟性について伺えますか」と切り出せば自然です。詳細は<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職</Link>も参考にしてください。
              </p>
            </div>
          </div>
        </section>

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

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">スカウト経由のカジュアル面談を活かす</h2>
          <p className="text-blue-100 text-sm mb-4">
            カジュアル面談はスカウト経由で届くことが多い機会です。スカウトの仕組みと返信の組み立てを押さえて、面談の質を高めましょう。
          </p>
          <Link
            href="/knowledge/scout-reply/"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            スカウト返信の例文を見る
          </Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "技術面接の準備", href: "/knowledge/tech-interview/" },
              { name: "行動面接（STAR）対策", href: "/knowledge/behavioral/" },
              { name: "スカウト返信の例文", href: "/knowledge/scout-reply/" },
              { name: "スカウトの活用法", href: "/knowledge/scout/" },
              { name: "転職活動のタイムライン", href: "/knowledge/timeline/" },
              { name: "エージェント初回面談の流れ", href: "/knowledge/agent-first-meeting/" },
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
