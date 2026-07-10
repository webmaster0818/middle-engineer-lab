import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const PAGE_TITLE = "ハローワークのIT転職での使い方｜職業訓練と失業給付";
const PAGE_DESC =
  "30代・40代エンジニア向けに、ハローワークをIT転職でどう使うかを解説。IT求人の質と量の傾向、職業訓練（ハロートレーニング）、失業給付の流れ、IT特化サービスとの併用が現実的な理由を、公的制度の出典付きで整理します。";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/hello-work/" },
  title: PAGE_TITLE,
  description: PAGE_DESC,
};

const toc = [
  { id: "conclusion", label: "結論：IT特化サービスとの併用が現実的" },
  { id: "what", label: "ハローワークとは" },
  { id: "pros-cons", label: "IT転職でのメリットとデメリット" },
  { id: "training", label: "職業訓練（ハロートレーニング）" },
  { id: "benefit", label: "失業給付の流れ" },
  { id: "fit", label: "ハローワークが向く人" },
  { id: "middle", label: "30代・40代の使い方" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const faqs = [
  {
    q: "ハローワークにIT・エンジニアの求人はありますか？",
    a: "あります。ただしIT専門の求人は、IT特化型の転職サービスと比べると数が限られ、質にもばらつきがある傾向です。地元の中小企業や社内SE、未経験歓迎の求人が中心になりやすく、ハイクラスやモダンな技術環境の求人は少なめです。求人の幅を確保するには、IT特化サービスとの併用が現実的です。",
  },
  {
    q: "ハローワークの利用は無料ですか？",
    a: "無料です。ハローワーク（公共職業安定所）は厚生労働省が運営する公的な職業紹介機関で、求人検索・職業相談・職業紹介・失業給付の手続き・職業訓練の申し込みまで、すべて無料で利用できます。在職中でも利用可能です。",
  },
  {
    q: "失業給付の給付制限はどのくらいですか？",
    a: "自己都合退職の場合、2025年4月以降の離職では給付制限期間が原則1か月に短縮されました（厚生労働省・令和6年雇用保険法改正、令和7年4月施行）。改正前は原則2か月でした。なお5年以内に3回以上自己都合離職した場合は3か月となります。会社都合の場合は給付制限がなく、待期7日後から支給対象になります。",
  },
  {
    q: "職業訓練を受けながら転職活動はできますか？",
    a: "できます。ハロートレーニング（公的職業訓練）は、求職活動と並行して受講するのが前提です。条件を満たせば訓練期間中も失業給付が支給され、要件を満たすと給付制限が解除される場合もあります。IT分野の訓練もありますが、内容やレベルは地域・コースにより差があるため、事前にカリキュラムを確認しましょう。",
  },
  {
    q: "在職中でもハローワークは使えますか？",
    a: "使えます。在職中でも求人検索や職業相談は可能です。ただし失業給付は離職後に受給資格が生じるため、在職中は対象外です。情報収集や職業訓練の下調べとして活用し、本格的な求人探しはIT特化サービスを併用するのが効率的です。",
  },
  {
    q: "エンジニアはハローワークだけで転職すべきですか？",
    a: "おすすめしません。IT専門求人の量と質の面で、IT特化型の転職サービスに分があります。ハローワークは「公的支援・職業訓練・地元求人」に強みがあるため、これらを目的に併用するのが現実的です。求人の幅と技術マッチングはIT特化サービスで補いましょう。",
  },
];

export default function HelloWorkPage() {
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
      <ArticleJsonLd title={PAGE_TITLE} description={PAGE_DESC} url="/knowledge/hello-work/" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "ハローワークのIT転職での使い方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          ハローワークのIT転職での使い方｜職業訓練と失業給付
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 30代・40代エンジニアのためのハローワーク活用ガイド
        </p>

        {/* 直答box (P6-C2) */}
        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】ハローワークだけでIT・エンジニア転職はできる？</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: できますが非効率です。ハローワークは失業給付・職業訓練・地元求人の窓口として使い、求人探しはIT特化サービスと併用するのが現実的です。</strong></p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・利用は完全無料。求人検索・職業相談・失業給付の手続き・職業訓練の申し込みまで公的機関で対応</li><li>・IT専門求人は数・質ともに限られ、モダンな技術環境やハイクラス求人は少なめ</li><li>・自己都合退職の給付制限は2025年4月以降の離職で原則1か月に短縮（厚生労働省・令和6年雇用保険法改正）</li><li>・地方在住・公的支援や職業訓練を使いたい人ほど価値が高い</li></ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          ハローワークは無料で使える公的な職業紹介機関ですが、IT・エンジニア転職で「使えるのか」は気になるところです。本記事では、ハローワークのIT求人の質と量の傾向、職業訓練（ハロートレーニング）、失業給付の流れを、公的制度の出典とともに整理します。結論から言えば、エンジニアにとってはIT特化サービスとの併用が現実的です。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省 ハローワーク・雇用保険制度",
            "厚生労働省 令和6年雇用保険法改正（令和7年4月施行）",
            "厚生労働省 ハロートレーニング（公的職業訓練）",
          ]}
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
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：IT特化サービスとの併用が現実的</h2>
            <p className="text-sm text-blue-900 leading-relaxed mb-3">
              ハローワークの強みは「公的支援・職業訓練・地元求人・無料」です。一方、IT専門求人の量と質はIT特化型の転職サービスに分があります。エンジニアは、<strong>失業給付・職業訓練・地方求人の目的でハローワークを使い、求人探しはIT特化サービスで補う</strong>併用が現実的です。
            </p>
            <ul className="text-sm text-blue-900 space-y-1.5">
              <li>・失業給付や職業訓練の窓口としては必須</li>
              <li>・IT専門求人は数・質ともに限られる傾向</li>
              <li>・地方在住・公的支援を使いたい人ほど価値が高い</li>
            </ul>
          </div>
        </section>

        <section id="what" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ハローワークとは</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            ハローワーク（公共職業安定所）は、厚生労働省が運営する公的な職業紹介機関です。全国に拠点があり、求人検索・職業相談・職業紹介・失業給付の手続き・職業訓練の申し込みまでを無料で提供しています。営利目的の人材紹介会社とは異なり、誰でも利用でき、在職中の利用も可能です。
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            民間の転職エージェントが企業から成功報酬を得るのに対し、ハローワークは公的機関のため求人企業も無料で求人を出せます。この構造の違いが、求人の傾向（地元中小・幅広い業種）にも表れます。
          </p>
        </section>

        <section id="pros-cons" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">IT転職でのメリットとデメリット</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-lg p-5">
              <h3 className="font-bold text-green-800 mb-2">メリット</h3>
              <ul className="text-sm text-green-700 space-y-1.5">
                <li>・完全無料で利用できる</li>
                <li>・地元・地方の求人に強い</li>
                <li>・公的職業訓練（ハロートレーニング）と連携</li>
                <li>・失業給付の手続き窓口になる</li>
                <li>・職業相談で客観的な助言が得られる</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-5">
              <h3 className="font-bold text-red-800 mb-2">デメリット</h3>
              <ul className="text-sm text-red-700 space-y-1.5">
                <li>・IT専門求人が少なめ</li>
                <li>・求人の質にばらつきがある</li>
                <li>・モダンな技術環境・ハイクラス求人は少ない</li>
                <li>・技術に精通した相談員は限られる</li>
                <li>・年収交渉や技術面接の対策は手薄</li>
              </ul>
            </div>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            技術マッチングや年収アップを重視するなら、<Link href="/knowledge/how-to-choose/" className="text-petrol hover:underline">IT転職エージェントの選び方</Link>で解説するIT特化型サービスの併用が有効です。
          </p>
        </section>

        <section id="training" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">職業訓練（ハロートレーニング）</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            ハロートレーニング（公的職業訓練）は、求職者がスキルを身につけるための公的な訓練制度です。IT分野のコース（プログラミング・Webデザイン・ネットワーク等）も用意されていますが、内容やレベルは地域・コースにより差があります。
          </p>
          <ul className="space-y-2 mb-4">
            {[
              "雇用保険を受給できる人向けの「公共職業訓練」と、受給できない人向けの「求職者支援訓練」がある",
              "受講料は基本無料（テキスト代等は自己負担）",
              "条件を満たすと訓練期間中も失業給付が支給され、給付制限が解除される場合がある",
              "コース内容・期間・選考は地域により異なるため、最寄りのハローワークで要確認",
            ].map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="text-petrol font-bold shrink-0">✓</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-600 text-sm leading-relaxed">
            未経験から学び直す手段としては選択肢の一つですが、実務経験のあるエンジニアには物足りない場合もあります。学習戦略の全体像は<Link href="/knowledge/continuous-learning/" className="text-petrol hover:underline">エンジニアの学習戦略</Link>も参考にしてください。
          </p>
        </section>

        <section id="benefit" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">失業給付の流れ</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            離職後にハローワークで手続きをすると、雇用保険の基本手当（いわゆる失業給付）を受給できます。おおまかな流れは次のとおりです。
          </p>
          <div className="space-y-3">
            {[
              { step: "離職票を提出し求職申込み", desc: "前職から受け取った離職票を持参し、ハローワークで求職の申し込みと受給資格の決定を受けます。" },
              { step: "待期7日間", desc: "受給資格決定日から通算7日間は「待期」期間で、この間は支給対象になりません。自己都合・会社都合を問わず共通です。" },
              { step: "給付制限（自己都合のみ）", desc: "自己都合退職は、2025年4月以降の離職で給付制限が原則1か月に短縮されました（改正前は原則2か月）。5年以内に3回以上の自己都合離職は3か月です。会社都合は給付制限なし。" },
              { step: "雇用保険説明会・認定日", desc: "説明会に参加し、その後は原則4週ごとの失業認定日に求職活動の状況を申告します。認定を受けると基本手当が振り込まれます。" },
            ].map((s, i) => (
              <div key={s.step} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{s.step}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <p className="text-sm text-amber-800 leading-relaxed">
              給付日数・金額・要件は離職理由や被保険者期間、年齢により異なります。本記事は一般的な流れの整理であり、個別の受給可否や金額は最寄りのハローワークで必ずご確認ください。制度は改正される場合があります（出典：厚生労働省・令和6年雇用保険法改正、令和7年4月施行）。
            </p>
          </div>
        </section>

        <section id="fit" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ハローワークが向く人</h2>
          <ul className="space-y-2">
            {[
              "地方在住で、地元の求人を中心に探したい人",
              "失業給付を受けながら転職活動をしたい人",
              "公的職業訓練でスキルを学び直したい人",
              "未経験からIT職を目指し、訓練と求人をセットで使いたい人",
            ].map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="text-petrol font-bold shrink-0">✓</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            逆に、年収アップやモダンな技術環境を重視する経験者は、IT特化サービスを主軸にし、ハローワークは給付・訓練の窓口として併用するのがおすすめです。
          </p>
        </section>

        <section id="middle" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代の使い方</h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <p>
              30代・40代のエンジニアは、即戦力としての市場価値を重視されます。ハローワークの求人だけでは、その価値に見合う求人に出会いにくいのが実情です。
            </p>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">給付・訓練の窓口として割り切る</h3>
              <p>
                退職後の失業給付や職業訓練は、ハローワークでしか手続きできません。求人探しはIT特化サービス、生活基盤の制度はハローワーク、と役割を分けると効率的です。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-1">地方・Uターン転職では価値が上がる</h3>
              <p>
                地方やUターン・地元志向の転職では、ハローワークが持つ地元企業の求人が役立ちます。フルリモート求人と組み合わせれば、選択肢を広げられます。地方転職の論点は<Link href="/knowledge/remote-work/" className="text-petrol hover:underline">リモートワーク転職</Link>も参考になります。
              </p>
            </div>
            <p>
              年代別の転職事情は<Link href="/age/30s/" className="text-petrol hover:underline">30代の転職</Link>・<Link href="/age/40s/" className="text-petrol hover:underline">40代の転職</Link>もご覧ください。
            </p>
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
          <h2 className="text-xl font-bold mb-3">IT特化サービスと併用する</h2>
          <p className="text-blue-100 text-sm mb-4">
            ハローワークは給付・訓練の窓口に。求人の幅と技術マッチングはIT特化型エージェントで補うのが現実的です。
          </p>
          <Link
            href="/knowledge/how-to-choose/"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            IT転職エージェントの選び方を見る
          </Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "IT転職エージェントの選び方", href: "/knowledge/how-to-choose/" },
              { name: "エンジニアの学習戦略", href: "/knowledge/continuous-learning/" },
              { name: "リモートワーク転職", href: "/knowledge/remote-work/" },
              { name: "退職の伝え方", href: "/knowledge/resignation/" },
              { name: "30代未経験からのIT転職", href: "/knowledge/inexperienced-30s/" },
              { name: "転職活動のタイムライン", href: "/knowledge/timeline/" },
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
