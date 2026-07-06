import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/career/se-to-pm/" },
  title: "SE→プロジェクトマネージャー（PM）転職ガイド【2026年版】",
  description:
    "システムエンジニア（SE）からプロジェクトマネージャー（PM）へ移行するための現実性、スキルギャップ比較、在職中の準備ステップ、職務経歴書のBefore/After例文を公的データに基づき解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：PMはミドルSEの王道キャリア" },
  { id: "gap", label: "SEとPMのスキルギャップ比較表" },
  { id: "build", label: "必要スキルの身につけ方" },
  { id: "steps", label: "移行ステップ（在職中の準備）" },
  { id: "resume", label: "職務経歴書での見せ方（Before/After）" },
  { id: "salary", label: "年収の考え方" },
  { id: "agents", label: "おすすめの転職エージェント" },
  { id: "middle", label: "30代・40代がPMを目指すなら" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const gapRows = [
  {
    skill: "要件定義・設計",
    se: "◎ 上流工程の経験はそのままPMの土台になる",
    pm: "◎ 顧客・チームと合意形成しながら要件を固める",
  },
  {
    skill: "QCD（品質・コスト・納期）管理",
    se: "○ 自分の担当範囲の進捗・品質は管理してきた",
    pm: "◎ プロジェクト全体のQCDに最終責任を持つ",
  },
  {
    skill: "ステークホルダー・顧客折衝",
    se: "○ 顧客とのやり取り経験はあるが補助的なことも",
    pm: "◎ 顧客・経営・チームの調整と交渉が中核業務",
  },
  {
    skill: "リスク・課題管理",
    se: "○ 技術リスクの把握は得意",
    pm: "◎ スコープ・予算・体制を含む全体リスクを管理",
  },
  {
    skill: "予算・契約・体制管理",
    se: "△ 担当外のことが多い",
    pm: "◎ 見積もり・契約・要員計画まで責任範囲",
  },
  {
    skill: "技術的判断力",
    se: "◎ 実装・設計の妥当性を判断できる",
    pm: "○ 技術が分かるPMは現場の信頼を得やすい強み",
  },
];

const buildSteps = [
  {
    title: "サブリーダー・小規模リードを経験する",
    desc: "PMの中核は進捗・品質・課題をチーム単位で回すことです。現職で機能チームのリードやサブリーダーを引き受け、複数人のタスクと進捗を管理する経験を積みます。自分の担当だけでなく、チーム全体のデリバリーに責任を持つ感覚を養います。",
  },
  {
    title: "QCD管理とリスク管理の型を学ぶ",
    desc: "品質・コスト・納期のトレードオフをどう判断するか、課題やリスクをどう早期に検知して手を打つかは、PMの基礎技術です。PMBOKなどの体系的な枠組みに触れ、現場の実務と照らし合わせて理解を深めます。",
  },
  {
    title: "顧客・ステークホルダー折衝に関わる",
    desc: "要件のすり合わせ、仕様変更の交渉、報告の場づくりなど、顧客や関係者との折衝にできるだけ関与します。技術を分かったうえで合意形成できる力は、PMとしての大きな差別化要因になります。",
  },
  {
    title: "見積もり・計画立案の精度を上げる",
    desc: "工数見積もり、体制計画、スケジュール立案に関わり、計画と実績のズレを振り返る習慣をつけます。見積もり精度の改善は、PMの信頼に直結する実務スキルです。",
  },
  {
    title: "資格でマネジメント知識を裏づける",
    desc: "PMP（Project Management Professional）やプロジェクトマネージャ試験（情報処理技術者試験）は、マネジメント知識の客観的な証明になります。必須ではありませんが、SEからの移行では学習姿勢と体系的理解を示す材料になります。",
  },
];

const transitionSteps = [
  {
    phase: "現職での準備（〜3ヶ月）",
    items: [
      "機能チームのサブリーダー・リードを引き受け、複数人の進捗管理を経験する",
      "QCD・リスク管理の体系（PMBOK等）に触れ、実務と照らし合わせて理解する",
      "上流工程（要件定義・設計）と顧客折衝の経験を棚卸しする",
    ],
  },
  {
    phase: "マネジメント実績づくり（3〜6ヶ月）",
    items: [
      "小規模でもプロジェクト全体の進捗・課題管理を任される機会を作る",
      "見積もり・計画立案に関わり、計画と実績のズレを振り返る",
      "PMPやプロジェクトマネージャ試験など、知識を裏づける資格を検討する",
    ],
  },
  {
    phase: "応募・面接フェーズ（6ヶ月〜）",
    items: [
      "IT特化型エージェントに登録し、PM求人の役割（規模・業界）をすり合わせる",
      "職務経歴書を『自分の担当』から『プロジェクトをどう成功に導いたか』に書き換える",
      "面接ではQCD管理・リスク対応・ステークホルダー調整のエピソードを準備する",
    ],
  },
];

const faqs = [
  {
    q: "SEからプロジェクトマネージャー（PM）への移行は可能？",
    a: "可能です。SEの王道キャリアの一つで、上流工程（要件定義・設計）や技術判断の経験はそのままPMの土台になります。ギャップになりやすいのはQCDの全体管理、予算・契約・体制管理、顧客・経営との折衝です。在職中にサブリーダーやリードを経験し、チーム単位の進捗管理の実績を作ることが鍵になります。",
  },
  {
    q: "SEとPMの違いは何？",
    a: "SEはシステムの要件定義・設計・実装に責任を持ちますが、PMはプロジェクト全体の品質・コスト・納期（QCD）に最終責任を持ちます。技術そのものより、計画・進捗・リスク・予算・体制・ステークホルダー調整をまとめてマネジメントするのがPMの役割です。",
  },
  {
    q: "PMはミドル層に向いている？",
    a: "向いています。要件定義・設計・技術判断の蓄積、顧客とのやり取りの場数、現場の機微への理解が、そのままPMの強みになります。技術が分かるPMは現場の信頼を得やすく、30代・40代のSEにとって自然なキャリアパスの一つです。",
  },
  {
    q: "PMに必要な資格はある？",
    a: "必須ではありませんが、PMP（Project Management Professional）やプロジェクトマネージャ試験（情報処理技術者試験）が代表的です。SEからの移行では、マネジメント知識を体系的に学んだ証明として、書類選考で有効に働くことがあります。",
  },
  {
    q: "PMになるとコーディングはしなくなる？",
    a: "コーディングの比率は大きく下がるのが一般的です。ただし技術が分かることはPMの強みで、設計やリスクの妥当性を判断する土台として活き続けます。手を動かし続けたい場合は、テックリードやEMといった技術寄りのトラックも選択肢になります。",
  },
  {
    q: "PMに移ると年収は上がる？",
    a: "上がる傾向はありますが、保証はされません。PMはプロジェクト全体に責任を持つポジションのため、一般にSEより上のレンジが期待できます。一方で提示はプロジェクト規模・業界・企業で幅が大きいため、複数社のオファーで市場感を確認するのが安全です。",
  },
  {
    q: "PM求人はどのエージェントで探せばいい？",
    a: "IT/Web特化型のレバテックキャリアは技術理解のあるアドバイザーが在籍し、PM求人を扱っています。ハイクラス向けのスカウト型サービスを併用すると、PMポジションの市場価値を客観的に把握しながら進められます。",
  },
];

const related = [
  { name: "PMスキルガイド", href: "/skill/pm/" },
  { name: "マネジメント転職の知識", href: "/knowledge/management/" },
  { name: "エンジニア→EMへのキャリアパス", href: "/career/engineer-to-em/" },
  { name: "PM→CTOへのキャリアパス", href: "/career/pm-to-cto/" },
  { name: "エンジニア職務経歴書の書き方", href: "/knowledge/resume/" },
  { name: "40代の転職事情", href: "/age/40s/" },
];

export default function SeToPmPage() {
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
        title="SE→プロジェクトマネージャー（PM）転職ガイド【2026年版】"
        description="システムエンジニア（SE）からプロジェクトマネージャー（PM）へ移行するための現実性、スキルギャップ比較、在職中の準備ステップ、職務経歴書のBefore/After例文を公的データに基づき解説します。"
        url="/career/se-to-pm/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "キャリアパス", href: "/career/" },
          { name: "SE→PM転職ガイド" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          SE→プロジェクトマネージャー（PM）転職ガイド
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 上流工程と技術判断の経験を「プロジェクトを成功に導く力」に翻訳する
        </p>

        <p className="text-slate-600 leading-relaxed mb-4">
          システムエンジニア（SE）からプロジェクトマネージャー（PM）への移行は、ミドルSEの王道キャリアパスの一つです。要件定義・設計・技術判断の経験はそのままPMの土台になり、技術が分かるPMは現場の信頼を得やすいという強みもあります。一方で、QCDの全体管理、予算・契約・体制管理、顧客・経営との折衝は新たに担う領域です。このページでは、現実性、スキルギャップ、在職中の準備、職務経歴書の書き方までを具体的に解説します。
        </p>

        <DataNote
          surveyedAt="2026年6月"
          sources={[
            "厚生労働省 job tag",
            "レバテック公表 年代別平均年収（2025年）",
            "doda 決定年収レポート（2025年5月公表）",
          ]}
        />

        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-10">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-petrol hover:underline text-sm">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">結論：PMはミドルSEの王道キャリア</h2>
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-lg p-6">
            <p className="text-slate-700 leading-relaxed mb-3">
              <strong>SEからPMへの移行は、30代・40代の王道キャリアパスの一つです。</strong>
              上流工程と技術判断の経験がそのまま土台になるため、ミドルSEの蓄積が活きやすい移行です。
            </p>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li>① 要件定義・設計・技術判断は<strong>そのままPMの強み</strong>になり、技術が分かるPMは現場の信頼を得やすい</li>
              <li>② ギャップになりやすいのは<strong>QCDの全体管理・予算/契約/体制管理・顧客/経営との折衝</strong></li>
              <li>③ 在職中にサブリーダーやリードを経験し、チーム単位の進捗・課題管理の実績を作ることが成否を分ける</li>
            </ul>
          </div>
        </section>

        <section id="gap" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">SEとPMのスキルギャップ比較表</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            PMに求められるスキルを、SEの典型的な経験と比較しました。◎＝十分／○＝経験あり／△＝補強が必要、の目安です。SEで強い行と、新たに担う行の両方が見えてきます。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-petrol-soft">
                  <th className="text-left px-4 py-3 font-medium text-slate-700">必要スキル</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">SE（現職）</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-700">PMで求められる水準</th>
                </tr>
              </thead>
              <tbody>
                {gapRows.map((row, i) => (
                  <tr key={i} className="border-t border-slate-200 align-top">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.skill}</td>
                    <td className="px-4 py-3 text-slate-600">{row.se}</td>
                    <td className="px-4 py-3 text-slate-600">{row.pm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="build" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">必要スキルの身につけ方</h2>
          <div className="space-y-4">
            {buildSteps.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            PMの体系的な知識は
            <Link href="/skill/pm/" className="text-petrol hover:underline">PMスキルガイド</Link>
            、マネジメント移行の心構えは
            <Link href="/knowledge/management/" className="text-petrol hover:underline">マネジメント転職の知識</Link>
            も参考にしてください。
          </p>
        </section>

        <section id="steps" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">移行ステップ（在職中にできる準備）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            PMへの移行は、今のプロジェクトの中で実績を作りながら進めるのが効率的です。退職してから学ぶより、現職の案件を題材に「チームやプロジェクトを動かした経験」を積み上げるほうが、職務経歴書に書ける材料が増えます。
          </p>
          <div className="space-y-5">
            {transitionSteps.map((step, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <span className="text-petrol">STEP {i + 1}</span>
                  {step.phase}
                </h3>
                <ul className="space-y-2">
                  {step.items.map((it, j) => (
                    <li key={j} className="flex gap-2 text-sm text-slate-600">
                      <span className="text-petrol shrink-0">✓</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="resume" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">職務経歴書での見せ方（Before/After例文）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            SEの職務経歴書は、担当工程の記述に閉じると「実装担当者」に見えがちです。ポイントは、進捗・品質・課題をどう管理し、プロジェクトをどう前に進めたかを、定量と再現性の視点で書くことです。
          </p>

          <div className="space-y-5">
            <div className="border border-rose-200 bg-rose-50 rounded-lg p-5">
              <p className="font-bold text-rose-700 text-sm mb-2">Before（担当工程の記述に閉じている例）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                業務システムの開発プロジェクトにて、要件定義書をもとに詳細設計と実装、テストを担当した。進捗会議に参加し、自分の作業状況を報告した。
              </p>
            </div>
            <div className="border border-emerald-200 bg-emerald-50 rounded-lg p-5">
              <p className="font-bold text-emerald-700 text-sm mb-2">After（プロジェクト推進を主語にした例）</p>
              <p className="text-sm text-slate-700 leading-relaxed">
                業務システム開発（〇名規模・期間〇ヶ月）で、要件定義から携わりサブリーダーを担当。担当チーム〇名の進捗・課題を管理し、遅延リスクを早期に検知してタスクの再配分で納期を維持。顧客との仕様調整にも参加し、変更要望の影響範囲を整理して合意形成に貢献。品質面ではレビュー観点を整備し、手戻りを削減した。
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-sm text-slate-600 leading-relaxed">
              <p className="font-bold text-slate-700 mb-2">改善のポイント</p>
              <ul className="space-y-1">
                <li>・「担当した」→「進捗・品質・課題をどう管理し、プロジェクトをどう前に進めたか」を書く</li>
                <li>・遅延リスクの検知・対応、顧客との合意形成など、PM的な動きを具体化する</li>
                <li>・チーム規模・期間・手戻り削減など、出せる範囲で定量を添える（数値は実績に合わせて記載）</li>
              </ul>
            </div>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mt-4">
            より詳しい書き方は
            <Link href="/knowledge/resume/" className="text-petrol hover:underline">エンジニア職務経歴書の書き方</Link>
            を参照してください。
          </p>
        </section>

        <section id="salary" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">年収の考え方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            PMはプロジェクト全体に責任を持つポジションのため、一般にSEより上のレンジが期待できます。基準として、レバテックが公表した正社員SEの年代別平均年収（2025年）は、30代で約499万円、40代で約618万円です。PMはこのレンジの上側〜それ以上を狙える傾向がありますが、プロジェクト規模や業界で幅が大きいため、目安として捉えてください。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            また、doda（パーソルキャリア）の「決定年収レポート」（2025年5月公表）では、IT・通信エンジニアの平均決定年収は2023年度の469万円から2024年度の486万円へと上昇しており、転職者の約6割が年収アップを実現しています。PMの具体的な提示レンジは企業・プロジェクト規模で差が大きいため、複数社のオファーを比較して市場感をつかむことをおすすめします。
          </p>
          <p className="text-slate-500 text-xs leading-relaxed">
            出典: 厚生労働省 job tag／レバテック公表 年代別平均年収（2025年）／doda「決定年収レポート」（2025年5月公表）。PM職の年収はプロジェクト規模・業界により幅が大きいため、複数社での確認を推奨します。
          </p>
        </section>

        <section id="agents" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">おすすめの転職エージェント</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            PM求人は規模や業界でポジション定義が異なるため、役割をすり合わせられるIT特化型サービスが向いています。エージェント型とハイクラス向けスカウト型を併用すると進めやすくなります。
          </p>
          <div className="space-y-3">
            {[
              {
                name: "レバテックキャリア",
                point:
                  "IT/Web特化で技術に詳しいアドバイザーが在籍。高年収求人の比率が高いと公表されており、PM・マネジメント系ポジションの相談に向きます。",
              },
              {
                name: "ビズリーチ",
                point:
                  "ハイクラス・スカウト型。年収750万円以上の定義でハイレンジ求人が中心。経験を登録するとPM求人のスカウトで市場価値を客観的に把握できます。",
              },
              {
                name: "doda ITエンジニア",
                point:
                  "国内最大級の求人数で、検索・エージェント・スカウトのハイブリッド型。幅広い企業のPM求人を比較検討したい場合に有効です。",
              },
            ].map((agent, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-1">{agent.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{agent.point}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代がPMを目指すなら</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>
              PMは、開発の難所を知り、要件のブレや仕様変更に向き合ってきた経験が活きる職種です。ミドルSEが積み重ねてきた「上流工程の経験」「技術判断」「顧客とのやり取りの場数」は、そのままPMの強みになります。技術が分かるPMは現場の信頼を得やすく、実務経験が活きるため年齢を理由に諦める必要はありません。
            </p>
            <p>
              一方で、QCDの全体管理、予算・契約・体制管理、経営との折衝は、SE時代には担当外だったことが多い領域です。だからこそ、在職中にサブリーダーやリードを経験し、チーム単位の進捗・課題管理の実績を作っておくことが重要です。PMPなどの資格で体系的な理解を裏づけるのも有効です。
            </p>
            <p>
              年収交渉の前提として、
              <Link href="/knowledge/salary-30s/" className="text-petrol hover:underline">30代の年収相場</Link>
              ・
              <Link href="/knowledge/salary-40s/" className="text-petrol hover:underline">40代の年収相場</Link>
              を把握しておくと、提示レンジが妥当かを判断しやすくなります。
            </p>
          </div>
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
          <h2 className="text-xl font-bold mb-3">PM転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            PMポジションに強いIT特化型エージェントが、あなたのSE経験を活かせる求人を提案します。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-petrol-deep font-bold py-3 px-8 rounded-lg hover:bg-petrol-soft transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section id="related" className="scroll-mt-20">
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((item, i) => (
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
