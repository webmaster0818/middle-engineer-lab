import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "SESから脱出する方法｜自社開発・社内SEへの転職ガイド";
const DESCRIPTION =
  "SESから自社開発・社内SEへ抜け出すための具体的な道筋を徹底解説。SES経験の正しい見せ方、脱出先の選び方、年収の現実、30代・40代の戦略、おすすめエージェントまでガイドします。";

const toc = [
  { id: "conclusion", label: "結論：SES脱出は経験の“見せ方”で決まる" },
  { id: "issues", label: "SESで抱えがちな課題" },
  { id: "destinations", label: "主な脱出先と選び方" },
  { id: "show", label: "SES経験の見せ方（Before/After）" },
  { id: "salary", label: "年収の考え方（公表データ）" },
  { id: "steps", label: "脱出の具体的ステップ" },
  { id: "middle", label: "30代・40代の脱出戦略" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const destinations: { title: string; desc: string; fit: string }[] = [
  {
    title: "Web系自社開発企業",
    desc: "自社プロダクトに一貫して関われる。技術選定の自由度が高く、モダン技術・リモートワークの環境が多い。レバテックキャリアやGeeklyが強い領域。",
    fit: "プロダクトに当事者として関わりたい人 / モダン技術を使いたい人",
  },
  {
    title: "社内SE（事業会社の情報システム部門）",
    desc: "社内システムの企画・運用・ベンダーコントロールを担当。残業が比較的少なく、安定した環境で腰を据えて働きやすい。マイナビIT AGENTが強い領域。",
    fit: "ワークライフバランス重視 / 安定志向 / 上流・調整が得意な人",
  },
  {
    title: "SaaS企業",
    desc: "安定した収益基盤の上でプロダクト改善に集中できる。業務システムの知識がドメイン理解として活きるケースも多い。",
    fit: "業務知識を活かしたい人 / 長期でプロダクトを育てたい人",
  },
  {
    title: "受託でも自社内開発の企業",
    desc: "受託開発でも常駐ではなく自社内で開発する企業。客先常駐の負担を減らしつつ、まずは環境を変えたい人の現実的な選択肢。",
    fit: "急なキャリアチェンジが不安な人 / 段階的に移行したい人",
  },
];

const faqs = [
  {
    q: "SESから転職するベストなタイミングは？",
    a: "プロジェクトの切れ目（契約更新のタイミング）が引き継ぎ面でスムーズです。ただし在職中に転職活動を始めるのが鉄則で、内定を得てから退職の意思を伝えましょう。情報収集やエージェント登録は今すぐ始めても問題ありません。",
  },
  {
    q: "SES経験しかなくても自社開発企業に転職できますか？",
    a: "可能です。SESでの開発経験は立派な実務経験として評価されます。重要なのは「何の技術で、どんなシステムを、どんな役割で開発したか」を具体的に語れること。ポートフォリオやGitHubの活動があるとさらに有利です。",
  },
  {
    q: "SESを辞めたい理由を面接でどう伝えるべきですか？",
    a: "「SESが嫌だから」ではなく、「プロダクトに一貫して関わりたい」「技術選定から携わりたい」「チームで継続的に改善する開発がしたい」など前向きな理由に変換しましょう。ネガティブな転職理由はマイナス評価につながりやすいためです。",
  },
  {
    q: "SESからの転職で年収は上がりますか？",
    a: "SESは多重下請けの構造上、現場での評価が自社に伝わりにくく年収が抑えられがちなため、転職で上がるケースは多いです。参考としてdoda（パーソルキャリア）の2024年度決定年収レポート（2025年5月公表）では転職者の約6割が年収アップ、IT・通信の平均決定年収は2024年度486万円とされています。ただし上がるかは現職水準と移行先次第で、保証はありません。",
  },
  {
    q: "SES脱出におすすめの転職エージェントは？",
    a: "Web系自社開発を狙うならIT/Web特化のレバテックキャリアやGeekly、社内SE・安定環境ならマイナビIT AGENTが定番です。スキルアップ途上なら未経験歓迎求人も扱うワークポートも選択肢。複数社に登録して比較するのが基本です。",
  },
  {
    q: "SESの経験年数が短くても転職できますか？",
    a: "開発経験が1年以上あれば選択肢はあります。経験が浅い場合は、ポートフォリオ作成やモダン技術の学習を並行しましょう。未経験寄りの方は別記事も参考にしてください。",
  },
  {
    q: "「SES＝悪」なのでしょうか？",
    a: "そうとは限りません。教育体制が整い、希望に沿った案件を選べるSES企業もあります。問題は会社の運用と本人のキャリア志向のミスマッチです。今の不満が「SESという形態」由来か「今の会社・案件」由来かを切り分けると、転職先の判断がぶれません。",
  },
  {
    q: "退会・登録解除はあとからできますか？",
    a: "エージェントの利用はいつでも終了でき、費用もかかりません。合わないと感じたら担当変更を申し出るか、利用を停止すれば問題ありません。複数登録して合う担当者を見つける使い方が一般的です。",
  },
];

export const metadata: Metadata = {
  alternates: { canonical: "/industry/ses-exit/" },
  title: TITLE,
  description: DESCRIPTION,
};

export default function SesExitPage() {
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
      <ArticleJsonLd title={TITLE} description={DESCRIPTION} url="/industry/ses-exit/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "業界別ガイド" },
          { name: "SESからの転職" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          SESから脱出する方法｜自社開発・社内SEへの転職ガイド
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年6月 | SESからの脱出ルートと成功戦略を徹底解説</p>

        <p className="text-slate-600 leading-relaxed mb-2">
          「客先常駐でスキルが伸びにくい」「案件ガチャで将来が不安」「現場での評価が年収に反映されない」。SESで働くエンジニアが抱えがちな悩みです。一方で、SESでの開発経験は自社開発・社内SE・SaaSへの転職で十分に武器になります。
        </p>
        <p className="text-slate-600 leading-relaxed mb-6">
          本記事では、SESから脱出するための具体的なルートと、経験の正しい見せ方、年収の現実、そして30代・40代ならではの戦略までを解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "doda（パーソルキャリア）2024年度決定年収レポート（2025年5月公表）",
            "レバテック公表の年代別平均年収（2025年）",
          ]}
        />

        {/* 目次 */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-petrol hover:underline">
                  {t.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：SES脱出は経験の“見せ方”で決まる</h2>
          <div className="bg-petrol-soft border border-[var(--line)] rounded-xl p-6">
            <p className="text-slate-700 leading-relaxed mb-3 font-medium">
              SESからの脱出は十分に現実的です。鍵は「常駐していた」事実ではなく、「何を作り、どう関わったか」を言語化して示せるかどうかにあります。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>① 脱出先は自社開発・社内SE・SaaS・自社内受託の4タイプ。志向に合わせて選ぶ。</li>
              <li>② SES経験は「使用技術×規模×役割×成果」に翻訳すれば立派な実務経験になる。</li>
              <li>③ 年収は抑えられているケースが多く、転職で改善する可能性が高い（ただし保証はない）。</li>
            </ul>
          </div>
        </section>

        {/* 課題 */}
        <section id="issues" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SESで抱えがちな課題</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            まず、自分の不満が「SESという形態」由来なのか「今の会社・案件」由来なのかを切り分けましょう。下記の課題に強く当てはまるなら、転職で環境を変える価値が高いと言えます。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "スキルの停滞", desc: "案件に依存するため技術選択の自由が小さく、レガシー技術に固定されやすい。" },
              { title: "評価の不透明さ", desc: "現場評価が自社に正しく伝わらず、スキルに見合わない年収になりがち。多重下請けで中間マージンも発生する。" },
              { title: "キャリアの不確実性", desc: "次の案件が読めない「案件ガチャ」で、中長期のキャリア設計が難しい。" },
              { title: "帰属意識の薄さ", desc: "客先で働くため自社への帰属意識が持ちにくく、チームの一体感を感じにくい。" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 脱出先 */}
        <section id="destinations" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">主な脱出先と選び方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            脱出先は一つではありません。いきなり人気のWeb系自社開発だけに絞らず、自分の志向（プロダクト志向か、安定志向か）に合わせて選ぶとミスマッチを防げます。
          </p>
          <div className="space-y-4">
            {destinations.map((d, i) => (
              <div key={i} className="bg-petrol-soft rounded-lg p-5">
                <h3 className="font-bold text-blue-800 mb-2">{d.title}</h3>
                <p className="text-sm text-petrol-deep mb-2">{d.desc}</p>
                <p className="text-xs text-slate-600">
                  <span className="font-medium">向いている人：</span>
                  {d.fit}
                </p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">
            自社開発に絞った進め方は
            <Link href="/industry/sier-to-web/" className="text-petrol hover:underline">SIerからWeb系への転職</Link>
            、エージェント選びは
            <Link href="/review/levtech/" className="text-petrol hover:underline">レバテックキャリアの評判</Link>
            ・
            <Link href="/review/mynavi-it/" className="text-petrol hover:underline">マイナビIT AGENTの評判</Link>
            も参考になります。
          </p>
        </section>

        {/* 見せ方 */}
        <section id="show" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SES経験の見せ方（Before/After）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            職務経歴書で「常駐していた」事実を書くだけでは、技術力が伝わりません。担当した技術・規模・役割・成果に翻訳することで、SES経験は強力なアピール材料になります。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border border-slate-200 rounded-lg p-5 bg-slate-50">
              <p className="text-xs font-bold text-slate-500 mb-2">Before（伝わりにくい書き方）</p>
              <p className="text-sm text-slate-600">大手通信会社のプロジェクトに常駐し、開発業務を担当しました。</p>
            </div>
            <div className="border border-[var(--line)] rounded-lg p-5 bg-petrol-soft">
              <p className="text-xs font-bold text-petrol mb-2">After（評価される書き方）</p>
              <p className="text-sm text-slate-700">月間数百万PVのWebサービスのバックエンドをJava/Spring Bootで開発。5名チームでAPI設計・実装・単体テストを担当し、レスポンス改善で平均応答時間を短縮した。</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed">
            ポイントは「使用技術・システム規模・自分の役割・定量的な成果」をセットで書くこと。守秘義務に配慮しつつ、再現性のある形で具体化します。書き方の詳細は
            <Link href="/knowledge/resume/" className="text-petrol hover:underline">職務経歴書の書き方</Link>
            、退職理由の伝え方を含む面接準備は
            <Link href="/knowledge/tech-interview/" className="text-petrol hover:underline">技術面接対策ガイド</Link>
            を参照してください。
          </p>
        </section>

        {/* 年収 */}
        <section id="salary" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方（公表データ）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            SESは多重下請けの構造上、現場で生み出す価値より年収が低く抑えられているケースが少なくありません。そのため、市場価値を正しく評価される環境に移れば年収が改善する可能性があります。公表データを基準に現実的な期待値を持ちましょう。
          </p>
          <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">データ</th>
                  <th className="px-4 py-3 text-left font-medium text-slate-700 border-b border-slate-200">数値</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["転職者の年収アップ割合（doda・2025年5月公表）", "約6割"],
                  ["IT・通信の平均決定年収 2024年度（同）", "486万円（前年度469万円）"],
                  ["正社員SE 30代の平均年収（レバテック公表・2025年）", "約499万円"],
                  ["正社員SE 40代の平均年収（同）", "約618万円"],
                ].map(([label, val], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 border-b border-slate-200">{label}</td>
                    <td className="px-4 py-3 text-petrol font-medium border-b border-slate-200 whitespace-nowrap">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-xs leading-relaxed mb-4">
            ※出典：doda（パーソルキャリア）2024年度決定年収レポート（2025年5月公表）、レバテック公表の年代別平均年収（2025年）。数値は調査時点の公表値で、個別の年収を保証するものではありません。
          </p>
          <p className="text-slate-600 leading-relaxed">
            年収の詳しい考え方は
            <Link href="/knowledge/salary-change/" className="text-petrol hover:underline">エンジニア転職で年収は上がる？</Link>
            、交渉のコツは
            <Link href="/knowledge/salary-negotiation/" className="text-petrol hover:underline">年収交渉のコツ</Link>
            で解説しています。
          </p>
        </section>

        {/* ステップ */}
        <section id="steps" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">脱出の具体的ステップ</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "現在のスキルを棚卸しする", desc: "使用技術・開発規模・担当工程・成果物を整理。SESでの経験を具体的に言語化する。" },
              { step: "2", title: "不足スキルを補強する", desc: "モダンなフレームワークやクラウドを学習。GitHubにコードを公開し、技術力を示せる状態にする。" },
              { step: "3", title: "転職エージェントに登録する", desc: "IT特化型エージェント2〜3社に登録。SESからの転職実績が豊富な担当者に相談する。" },
              { step: "4", title: "書類・面接対策を行う", desc: "職務経歴書を移行先に合わせて最適化。退職理由は「何を実現したいか」に変換して語れるようにする。" },
              { step: "5", title: "内定獲得後に退職手続き", desc: "内定を得てから退職の意思を伝える。SES契約の更新タイミングに合わせると引き継ぎがスムーズ。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{item.step}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の脱出戦略</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ミドル層がSESから脱出する場合、「とにかく自社開発へ」と焦るより、これまでの経験が活きる移行先を選ぶ方が成功率は高まります。
          </p>
          <div className="space-y-4">
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">30代：実務経験を武器に選択肢を広げる</h3>
              <p className="text-sm text-petrol-deep">開発実務の蓄積がある30代は、自社開発・SaaS・社内SEのいずれも狙いやすい時期。モダン技術のキャッチアップで「常駐から内製へ」の説得力を高められる。</p>
            </div>
            <div className="bg-petrol-soft rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">40代：上流・調整力を活かせる先を狙う</h3>
              <p className="text-sm text-petrol-deep">純粋な開発職だけでなく、ベンダーコントロールや要件整理の経験が活きる社内SE・PM・DX推進が現実的。求人数は絞られるため、非公開求人を持つエージェントの活用が鍵。</p>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-4">
            年代別の戦略は
            <Link href="/age/30s/" className="text-petrol hover:underline">30代エンジニアの転職ガイド</Link>
            ・
            <Link href="/age/40s/" className="text-petrol hover:underline">40代エンジニアの転職ガイド</Link>
            、複数エージェントの使い分けは
            <Link href="/knowledge/multiple-agents/" className="text-petrol hover:underline">転職エージェントの併用術</Link>
            を参考にしてください。
          </p>
        </section>

        {/* FAQ */}
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

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">SESからの脱出、今日から始めよう</h2>
          <p className="text-blue-100 text-sm mb-4">IT特化型エージェントに無料登録して、自社開発・社内SEの求人をチェックしてみませんか？</p>
          <Link href="/#ranking" className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors">
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "SIerからWeb系に転職するには", href: "/industry/sier-to-web/" },
              { name: "SEからWebエンジニアへのキャリアチェンジ", href: "/career/se-to-web/" },
              { name: "エンジニア転職で年収は上がる？", href: "/knowledge/salary-change/" },
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
              { name: "ポートフォリオ作成ガイド", href: "/knowledge/portfolio/" },
              { name: "マイナビIT AGENTの評判", href: "/review/mynavi-it/" },
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
