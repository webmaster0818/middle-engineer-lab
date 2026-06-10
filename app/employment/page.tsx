import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  title: "エンジニアの雇用形態の違い｜正社員・契約社員・派遣・業務委託を比較",
  description:
    "エンジニアの正社員・契約社員・派遣・業務委託の違いを、契約の性質・社会保険・税・労災・契約期間まで制度横断で正確に比較。SES・請負・派遣の混同を解き、向き不向きと『手取りが多い形態』の落とし穴も解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：『労働者か否か』で全ての差が決まる" },
  { id: "compare", label: "4形態 横断比較表（契約・社保・税・労災）" },
  { id: "line", label: "最大の分岐点『労働者性』の線引き" },
  { id: "ses", label: "IT特有の混同を解く（SES・請負・派遣・業務委託）" },
  { id: "takehome", label: "『一番手取りが多い形態』の落とし穴" },
  { id: "law2024", label: "2024年11月の法改正（フリーランス保護）" },
  { id: "diagnosis", label: "向き不向き診断" },
  { id: "children", label: "形態別の詳しい解説ページ" },
  { id: "faq", label: "よくある質問" },
];

const compareRows: { item: string; seishain: string; keiyaku: string; haken: string; itaku: string }[] = [
  {
    item: "契約の性質",
    seishain: "労働契約（期間の定めなし）",
    keiyaku: "労働契約（期間の定めあり）",
    haken: "派遣元と労働契約（指揮命令は派遣先）",
    itaku: "民法上の請負／準委任。労働契約ではない",
  },
  {
    item: "労働法の保護",
    seishain: "あり",
    keiyaku: "あり",
    haken: "あり",
    itaku: "原則なし（事業主扱い）",
  },
  {
    item: "契約期間の上限",
    seishain: "なし",
    keiyaku: "原則1回3年（一定の場合5年）",
    haken: "同一組織単位で3年",
    itaku: "契約による",
  },
  {
    item: "健康保険",
    seishain: "健康保険（労使折半）",
    keiyaku: "同左",
    haken: "派遣元の健康保険",
    itaku: "国民健康保険（全額自己負担）",
  },
  {
    item: "年金",
    seishain: "厚生年金＋国民年金",
    keiyaku: "同左",
    haken: "厚生年金",
    itaku: "国民年金のみ",
  },
  {
    item: "雇用保険",
    seishain: "あり",
    keiyaku: "あり",
    haken: "あり",
    itaku: "なし",
  },
  {
    item: "労災保険",
    seishain: "あり",
    keiyaku: "あり",
    haken: "あり",
    itaku: "原則なし → 2024年11月1日から特別加入が可能に",
  },
  {
    item: "税（所得税）",
    seishain: "源泉徴収・年末調整",
    keiyaku: "同左",
    haken: "同左",
    itaku: "確定申告が必要・経費計上が可能",
  },
];

const itTerms = [
  {
    term: "正社員（自社開発・受託）",
    desc: "雇用主と直接の労働契約を結ぶ働き方。指揮命令も雇用主が行います。SESや派遣と違い、就業先＝雇用主が一致します。",
  },
  {
    term: "派遣（労働者派遣）",
    desc: "派遣元（派遣会社）と労働契約を結び、実際の指揮命令は派遣先が行う形態。同一組織単位での就業は原則3年が上限です。労働者派遣法に基づく『労働者』であり、社会保険・労災・雇用保険の保護を受けます。",
  },
  {
    term: "SES（準委任契約）",
    desc: "システム開発の労働力提供を準委任契約で行う形態。多くの場合、SES企業の正社員（または契約社員）として雇用され、客先に常駐します。『雇用は自社・就業は客先』という点で派遣に似ますが、契約上は準委任で、指揮命令は本来自社側にある点が建前上の違いです。実態が派遣に該当すると偽装請負として問題になります。",
  },
  {
    term: "請負（民法上の請負）",
    desc: "仕事の『完成』を約束し、成果物に対して報酬が支払われる契約。発注者は労働の進め方を指揮命令できません。納品責任・瑕疵担保が伴います。",
  },
  {
    term: "業務委託（準委任・請負の総称）",
    desc: "『業務委託契約』という名称の法律用語は厳密には存在せず、実態は準委任契約か請負契約のいずれかです。いずれも労働契約ではなく、原則として労働法の保護を受けない『事業主』としての働き方になります。",
  },
];

const diagnosis = [
  {
    title: "安定と保障を最優先したい",
    answer: "正社員（無期労働契約）",
    desc: "社会保険の会社負担、雇用の安定、福利厚生、賞与・退職金など額面に表れない価値が最も厚い形態です。",
  },
  {
    title: "まずは入社のハードルを下げて実績で評価されたい",
    answer: "契約社員 → 無期転換／正社員登用",
    desc: "有期から入り実績を示す道。ただし『無期転換＝正社員』ではない点に注意が必要です。詳細は契約社員ページで解説します。",
  },
  {
    title: "未経験・ブランクから正社員を目指したい",
    answer: "派遣（紹介予定派遣・無期雇用派遣）",
    desc: "紹介予定派遣は直接雇用を前提とした仕組みで、就業先と相性を確認してから正社員化を狙えます。",
  },
  {
    title: "単価を最大化し、案件と働き方を自分で選びたい",
    answer: "業務委託（フリーランス）",
    desc: "単価は高くなりやすい一方、社会保険・税・労災を自己負担する構造で手取りは目減りします。2024年11月の法改正で保護が一部前進しました。",
  },
];

const faqs = [
  {
    q: "派遣・SES・業務委託の違いは何ですか？",
    a: "派遣は派遣元と労働契約を結び指揮命令は派遣先が行う『労働者』です。SESは準委任契約で、多くは自社の正社員・契約社員として客先常駐し、指揮命令は建前上自社にあります。業務委託（準委任・請負）は労働契約ではなく『事業主』としての働き方で、原則として労働法の保護を受けません。雇用主が誰か・指揮命令が誰にあるか・労働者か事業主かの3点で整理すると区別できます。",
  },
  {
    q: "契約社員と派遣はどちらが安定していますか？",
    a: "一概には言えませんが、契約社員は就業先企業と直接の労働契約を結ぶため、その企業の中で実績を示して正社員登用や無期転換を目指しやすい点があります。派遣は派遣元との契約で、同一組織単位の就業は原則3年が上限です。一方で無期雇用派遣（正社員型派遣）は派遣元の無期契約のため雇用は安定します。『どこと雇用関係があるか』『期間の定めがあるか』で安定性を判断するのが現実的です。",
  },
  {
    q: "一番手取りが多い雇用形態はどれですか？",
    a: "額面の報酬・単価が最も高くなりやすいのは業務委託（フリーランス）です。ただし健康保険・年金が全額自己負担、雇用保険なし、所得税は確定申告という構造のため、額面が高くても実質の手取りは想定ほど増えないことがあります。正社員は社会保険料を会社が半額負担し、賞与・退職金・福利厚生など額面に表れない価値もあります。『額面』ではなく『社保・税を差し引いた手取り＋会社負担・保障』の合計で比較することが重要です。",
  },
  {
    q: "業務委託は労災に入れないのですか？",
    a: "従来、業務委託（フリーランス）は労働者ではないため労災保険の対象外でした。しかし2024年11月1日から、業種・職種を問わずフリーランスが労災保険に特別加入できるようになりました。ITエンジニアのフリーランスも対象です。これにより業務委託のデメリットが一部緩和されています（出典：厚生労働省 特別加入制度ページ）。",
  },
  {
    q: "雇用形態は年齢によって選び方が変わりますか？",
    a: "本ページは制度そのものの違いに特化しているため、年齢別の判断は扱っていません。年代ごとの考え方は年代別ガイド（40代・45歳・50代など）を、フリーランスと正社員の損得は専用の比較記事をご覧ください。制度の正確な理解を土台にしたうえで、自分のライフステージに合わせて選ぶのが安全です。",
  },
  {
    q: "正社員と業務委託、どちらが将来の年金で有利ですか？",
    a: "正社員は厚生年金に加入するため、国民年金のみの業務委託（フリーランス）と比べて将来受け取る年金額が手厚くなる傾向があります。業務委託でiDeCo・国民年金基金・小規模企業共済などを活用して自助で補う設計をする人もいます。年金・税の具体的な計算は個別の状況で異なるため、年金事務所や税理士など専門家への確認が安全です。",
  },
  {
    q: "雇用形態を途中で変えることはできますか？",
    a: "可能です。契約社員から正社員、派遣から正社員（紹介予定派遣・登用）、正社員から業務委託（独立）、業務委託から正社員（復帰）など、形態間の移動は珍しくありません。重要なのは、移動のたびに社会保険・税・契約の扱いが変わることを理解し、ライフイベントとの兼ね合いで判断することです。",
  },
];

export default function EmploymentTopPage() {
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
      <ArticleJsonLd
        title="エンジニアの雇用形態の違い｜正社員・契約社員・派遣・業務委託を比較"
        description="エンジニアの正社員・契約社員・派遣・業務委託の違いを、契約・社会保険・税・労災まで制度横断で正確に比較。SES・請負・派遣の混同を解き、向き不向きを解説。"
        url="/employment/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "雇用形態ガイド" },
          { name: "雇用形態の違い" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エンジニアの雇用形態の違い｜正社員・契約社員・派遣・業務委託を制度で比較
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 契約・社会保険・税・労災を横断で正確に整理
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          エンジニアの「雇用形態」は、正社員・契約社員・派遣・業務委託（フリーランス）の4つが代表的です。これらは単に「安定か自由か」といった印象で語られがちですが、本質的な違いは<strong>「労働者として法律の保護を受けるか、事業主として自己責任で働くか」</strong>という一点に集約されます。本記事では、契約の性質・社会保険・税・労災・契約期間を制度横断で正確に整理し、IT業界で混同されがちなSES・請負・派遣の違いまで解きほぐします。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省「さまざまな雇用形態」",
            "厚生労働省 労災保険 特別加入制度ページ",
            "レバテック「正社員と業務委託の違い」",
          ]}
        />

        {/* 結論ファースト */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：すべての差は「労働者か否か」から生まれる</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              正社員・契約社員・派遣はいずれも「労働契約」に基づく<strong>労働者</strong>であり、社会保険・雇用保険・労災・労働法の保護を受けます。一方、業務委託（フリーランス）は民法上の請負・準委任契約に基づく<strong>事業主</strong>で、原則これらの保護の外にいます。この線引きを理解すれば、社保・税・労災・安定性のすべての違いが一本の筋で説明できます。
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><span className="text-blue-600 font-bold shrink-0">1.</span>正社員・契約社員・派遣＝労働者（労働法の保護あり）／業務委託＝事業主（原則保護なし）。</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold shrink-0">2.</span>「手取りが多い形態」は単価が高い業務委託に見えるが、社保・税の自己負担で目減りする構造。</li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold shrink-0">3.</span>2024年11月1日からフリーランスも労災に特別加入可能になり、保護の差が一部縮小した。</li>
            </ul>
          </div>
        </section>

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-800 mb-3 text-sm">目次</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-blue-600 hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* 比較表 */}
        <section id="compare" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">4形態 横断比較表（契約・社会保険・税・労災）</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            まず全体像を一枚で押さえましょう。下表は厚生労働省「さまざまな雇用形態」などの公的情報をもとに、4形態の制度上の違いを横断で整理したものです。色のついた「業務委託」列だけが、他と性質が大きく異なることが見て取れます。
          </p>
          <div className="overflow-x-auto mb-3">
            <table className="w-full text-xs sm:text-sm border-collapse min-w-[720px]">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">項目</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">正社員（無期）</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">契約社員（有期）</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium">派遣</th>
                  <th className="text-left px-3 py-3 border border-slate-200 font-medium bg-amber-50">業務委託（請負/準委任）</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50">
                    <td className="px-3 py-3 border border-slate-200 font-medium">{row.item}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.seishain}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.keiyaku}</td>
                    <td className="px-3 py-3 border border-slate-200">{row.haken}</td>
                    <td className="px-3 py-3 border border-slate-200 bg-amber-50">{row.itaku}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500">
            出典: 厚生労働省「さまざまな雇用形態」、厚生労働省 労災保険 特別加入制度ページ（2024年11月1日施行）ほか。制度の細部や例外は個別の契約・状況により異なります。
          </p>
        </section>

        {/* 労働者性の線引き */}
        <section id="line" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">最大の分岐点「労働者性」の線引き</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            雇用形態を正しく理解する鍵は、その契約が<strong>労働契約か否か</strong>です。労働契約であれば、その人は労働基準法・労働契約法・最低賃金法・労働者災害補償保険法（労災）などの保護対象である「労働者」になります。労働契約でなければ、原則として「事業主（個人事業主）」として扱われ、これらの保護の外に置かれます。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-green-700 mb-3">労働者（保護あり）</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">✓</span>正社員（無期労働契約）</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">✓</span>契約社員（有期労働契約）</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">✓</span>派遣社員（派遣元と労働契約）</li>
                <li className="flex items-start gap-2"><span className="text-green-600 shrink-0">✓</span>社会保険・雇用保険・労災・年次有給休暇などの対象</li>
              </ul>
            </div>
            <div className="border border-amber-200 rounded-lg p-5">
              <h3 className="font-bold text-amber-700 mb-3">事業主（原則 保護なし）</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2"><span className="text-amber-600 shrink-0">●</span>業務委託（準委任・請負）＝フリーランス</li>
                <li className="flex items-start gap-2"><span className="text-amber-600 shrink-0">●</span>社会保険は国民健康保険・国民年金が基本</li>
                <li className="flex items-start gap-2"><span className="text-amber-600 shrink-0">●</span>雇用保険なし・有給なし</li>
                <li className="flex items-start gap-2"><span className="text-amber-600 shrink-0">●</span>労災は2024年11月から特別加入が可能に</li>
              </ul>
            </div>
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            なお、契約書の名称が「業務委託」でも、実態が指揮命令を受けて働く労働であれば、法的に労働者と判断される場合があります（実態優先）。名称ではなく実態で判断される点が重要です。
          </p>
        </section>

        {/* IT特有の混同を解く */}
        <section id="ses" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">IT特有の混同を解く（SES・請負・派遣・業務委託）</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            IT業界では「SES」「客先常駐」「業務委託」「請負」「派遣」が入り混じり、用語が混乱しやすい領域です。それぞれの正確な意味を整理します。
          </p>
          <div className="space-y-4">
            {itTerms.map((t, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{t.term}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 mt-5">
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong>注意：</strong>準委任（SES）契約でありながら、実態として客先が直接指揮命令している場合は「偽装請負」となり、労働者派遣法・職業安定法に抵触するおそれがあります。契約形態と実態が一致しているかは、就業前に確認しておくべき重要なポイントです。
            </p>
          </div>
          <p className="text-slate-600 leading-relaxed mt-5 text-sm">
            整理すると、「雇用主が誰か」「指揮命令が誰にあるか」「労働者か事業主か」の3点で見分けるのが確実です。派遣は雇用＝派遣元・指揮命令＝派遣先・労働者。SESは雇用＝SES企業・指揮命令＝建前上は自社・労働者。業務委託は雇用関係なし・指揮命令なし（本来）・事業主。この3軸を当てはめれば、求人票や契約書の用語に惑わされず、自分が置かれる立場を正確に判断できます。求人を見るときは「契約形態」と「実態」が一致しているかを確認しましょう。
          </p>
        </section>

        {/* 手取りの落とし穴 */}
        <section id="takehome" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">「一番手取りが多い形態」の落とし穴</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            「業務委託は単価が高いから手取りも多い」と考えがちですが、これは半分しか正しくありません。額面（単価）と手取りは別物だからです。業務委託は次の負担をすべて自分で抱えます。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-5">
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex gap-2"><span className="text-slate-400">▸</span>健康保険・年金が<strong>全額自己負担</strong>（正社員は会社が半額負担）</li>
              <li className="flex gap-2"><span className="text-slate-400">▸</span>雇用保険なし（失業時の給付がない）</li>
              <li className="flex gap-2"><span className="text-slate-400">▸</span>賞与・退職金・有給なし（休めば収入が減る）</li>
              <li className="flex gap-2"><span className="text-slate-400">▸</span>所得税・住民税は確定申告で自己管理（経費計上は可能）</li>
              <li className="flex gap-2"><span className="text-slate-400">▸</span>案件の途切れ・単価変動のリスクを自分で吸収</li>
            </ul>
          </div>
          <p className="text-slate-600 leading-relaxed">
            つまり、業務委託の高い単価は「会社が負担していた社会保険料・福利厚生・リスクを、自分で引き受ける対価」という側面があります。手取りを正しく比較するには、<strong>「単価 −（マージン）− 社会保険料 − 税 − 稼働できない期間」</strong>で実質手取りを試算し、正社員の手取り＋会社負担＋保障と並べる必要があります。詳しい損得比較は<Link href="/knowledge/freelance-vs-fulltime/" className="text-blue-600 hover:underline">フリーランスvs正社員</Link>で解説しています。
          </p>
        </section>

        {/* 2024年法改正 */}
        <section id="law2024" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">2024年11月の法改正：フリーランス保護が前進</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            雇用形態を考えるうえで、2024年に起きた2つの重要な制度変更を押さえておく価値があります。いずれも業務委託（フリーランス）の立場を従来より保護する方向の改正です。
          </p>
          <div className="space-y-4">
            <div className="border border-blue-200 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">① 労災保険の特別加入（2024年11月1日施行）</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                これまで業種が限定されていたフリーランスの労災特別加入が、業種・職種を問わず可能になりました。ITエンジニアのフリーランスも対象で、業務中・通勤中のケガや病気に労災保険で備えられます。業務委託の最大の弱点だった「労災なし」が、任意加入で補える形になりました（出典：厚生労働省 特別加入制度ページ）。
              </p>
            </div>
            <div className="border border-blue-200 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">② フリーランス新法（取引条件明示の義務化）</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                発注事業者がフリーランスに業務を委託する際、報酬額・業務内容・支払期日などの取引条件を書面・電磁的方法で明示することが義務化されました。報酬の支払遅延の禁止や、買いたたき・不当な発注内容の変更の禁止なども定められ、立場の弱いフリーランスの保護が強化されています。
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            ※ 制度の適用範囲・要件の詳細は、厚生労働省・公正取引委員会など公的機関の最新情報をご確認ください。
          </p>
        </section>

        {/* 向き不向き診断 */}
        <section id="diagnosis" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">向き不向き診断（目的から逆引き）</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            制度を理解したうえで、自分の目的から逆引きすると形態を選びやすくなります。
          </p>
          <div className="space-y-4">
            {diagnosis.map((d, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                  <h3 className="font-bold text-slate-800">{d.title}</h3>
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full shrink-0">{d.answer}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 子ページ */}
        <section id="children" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">形態別の詳しい解説ページ</h2>
          <p className="text-slate-600 leading-relaxed mb-5">
            各形態の制度・実態・勝ち筋は、専用ページでさらに深く解説しています。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "正社員エンジニアという選択", href: "/employment/seishain/", desc: "安定性・年収・キャリアの土台としての正社員" },
              { name: "業務委託エンジニアの実態と単価", href: "/employment/contractor/", desc: "単価相場・手取りシミュレーション・メリデメ" },
              { name: "業務委託という働き方", href: "/employment/gyomu-itaku/", desc: "準委任・請負の違いと契約の注意点" },
              { name: "フリーランスエンジニアの始め方", href: "/employment/freelance/", desc: "単価・税・保険・案件の取り方" },
              { name: "SESエンジニアの実態", href: "/employment/ses/", desc: "多重下請け・単価構造を中立に解説" },
              { name: "契約社員と無期転換5年ルール", href: "/employment/contract-employee/", desc: "『無期転換≠正社員』の重要な注意点" },
              { name: "派遣から正社員になる道", href: "/employment/dispatch/", desc: "紹介予定派遣・無期雇用派遣・登用ルート" },
              { name: "フリーランスvs正社員の損得", href: "/knowledge/freelance-vs-fulltime/", desc: "税・保険・信用の合計で比べる判断軸" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-4 hover:bg-slate-50 hover:border-blue-300 transition-colors"
              >
                <p className="text-sm font-bold text-slate-800 mb-1">{item.name} →</p>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
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

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-10 text-center">
          <h2 className="text-xl font-bold mb-3">まずは「正社員としての市場価値」を基準にしよう</h2>
          <p className="text-blue-100 text-sm mb-4">
            どの雇用形態が自分に合うか迷ったら、転職エージェントで正社員としての提示年収レンジを把握し、他形態の手取り・保障と並べて比較するのが確実です。
          </p>
          <Link
            href="/compare/agents/"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            IT転職エージェント比較を見る
          </Link>
        </section>

        {/* 関連リンク */}
        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "正社員エンジニアという選択", href: "/employment/seishain/" },
              { name: "業務委託エンジニアの実態", href: "/employment/contractor/" },
              { name: "業務委託という働き方", href: "/employment/gyomu-itaku/" },
              { name: "フリーランスエンジニアの始め方", href: "/employment/freelance/" },
              { name: "SESエンジニアの実態", href: "/employment/ses/" },
              { name: "契約社員と無期転換ルール", href: "/employment/contract-employee/" },
              { name: "派遣から正社員になる道", href: "/employment/dispatch/" },
              { name: "フリーランスvs正社員", href: "/knowledge/freelance-vs-fulltime/" },
              { name: "フリーランスから正社員へ", href: "/career/freelance-to-permanent/" },
              { name: "40代エンジニアの転職ガイド", href: "/age/40s/" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="block border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-blue-300 transition-colors"
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
