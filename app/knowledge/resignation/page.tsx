import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/resignation/" },
  title: "エンジニアの退職の伝え方【切り出し方・引き止め対応・引き継ぎ】",
  description:
    "エンジニアの退職の伝え方を例文付きで解説。上司への切り出し方、引き止め対応、引き継ぎ計画、退職の法的な基礎知識まで、30代・40代向けに整理しました。",
};

const toc = [
  { id: "conclusion", label: "結論：固い意思・前向きな理由・早めの引き継ぎ" },
  { id: "law", label: "退職の法的な基礎知識（一般論）" },
  { id: "timing", label: "いつ・誰に・どう切り出すか" },
  { id: "scripts", label: "退職の切り出し方 例文集" },
  { id: "counter", label: "引き止めパターンと対応例文" },
  { id: "handover", label: "引き継ぎ計画の立て方とチェックリスト" },
  { id: "schedule", label: "退職までのスケジュール" },
  { id: "middle", label: "30代・40代視点：円満退職が後々効く理由" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const schedule = [
  { period: "8週間前", title: "退職意思を上司に伝える", desc: "直属の上司に1対1で伝えます。メールではなく対面（またはビデオ通話）が基本。転職先の社名は伝えなくても問題ありません。" },
  { period: "6週間前", title: "引き継ぎ計画を作成", desc: "担当プロジェクト・システム・タスクを一覧化し、引き継ぎスケジュールを上司と合意します。" },
  { period: "4〜5週間前", title: "引き継ぎ作業を実施", desc: "コードのドキュメント整備、運用手順書の作成、後任者へのレクチャーを進めます。" },
  { period: "2〜3週間前", title: "退職届の提出", desc: "人事に正式な退職届（退職願ではなく届）を提出。書式は就業規則に従います。" },
  { period: "最終週", title: "有給消化・最終出社", desc: "引き継ぎ完了後に有給消化へ。最終出社日にPC・セキュリティカード返却、アカウント整理を行います。" },
];

const handover = [
  "担当システムのアーキテクチャ図・設計ドキュメントを最新化",
  "運用手順書（デプロイ手順、障害対応フロー、監視・アラート設定）の整備",
  "未解決のバグ・技術負債の一覧と優先度の共有",
  "外部サービスのアカウント・APIキーの棚卸しと個人/会社アカウントの切り分け",
  "CI/CDパイプライン・インフラ権限の担当者変更",
  "GitHub等リポジトリのオーナー/管理権限の移譲",
  "定例・問い合わせ窓口・関係部署の連絡先一覧の引き渡し",
  "進行中タスクの状態（着手済/レビュー待ち/未着手）を可視化して共有",
];

const counters = [
  { q: "「年収を上げるから残ってほしい」", a: "残留すると評価や人間関係に影響が出るリスクがあります。年収が唯一の理由でなければ丁重に断りましょう。", script: "「ご評価いただき本当にありがとうございます。ただ今回は年収だけでなく、◯◯に取り組める環境を選んだ決断です。次の会社とは入社日まで合意済みのため、予定通り進めさせてください。」" },
  { q: "「プロジェクトが終わるまで待ってほしい」", a: "入社日が決まっている場合は明確に伝えます。終了を待っていると退職時期が定まりません。", script: "「ご事情は理解しています。引き継ぎは責任を持って完了させます。ただ入社日は先方と確定しており変更できないため、◯月◯日を最終出社とさせてください。」" },
  { q: "「異動で解決できないか」", a: "実現時期や内容が不確実なことが多く、希望ポジションになる保証もありません。やりたいことが明確なら断ります。", script: "「ご提案ありがとうございます。ただ私が実現したい◯◯は、現在の組織では難しいと判断しての決断です。気持ちは変わりませんので、退職の方向で進めさせてください。」" },
  { q: "「後任がいないと困る」", a: "退職の意思とは切り離し、引き継ぎへの協力姿勢で応じます。後任不在は基本的に会社側で対応する課題です。", script: "「ご迷惑をおかけして申し訳ありません。残りの期間でドキュメント整備とレクチャーを最優先で行い、後任の方が困らない状態を作ります。」" },
];

const faqs = [
  {
    q: "退職は何ヶ月前に伝えるべきですか？",
    a: "まず勤務先の就業規則を確認してください。退職の申し出時期が定められている場合はそれに従うのが基本です。一般論として、引き継ぎを丁寧に行う観点から1〜2ヶ月前に伝える人が多いとされます。エンジニアの場合、リリースやプロジェクトの節目に合わせると引き継ぎがスムーズになりやすいです。なお法律上の取り扱いについては本記事『退職の法的な基礎知識』も参照しつつ、個別の事情は専門家に相談してください。",
  },
  {
    q: "退職はメールで伝えても良いですか？",
    a: "正式な切り出しは、直属の上司に対面またはビデオ通話で行うのが一般的なマナーとされます。最初の一報をメールやチャットで済ませると、印象を損ねたり引き継ぎ調整が滞ったりすることがあります。日程調整の依頼だけをメッセージで行い、内容は口頭で伝える、という順序が無難です。退職届などの書面提出は、口頭での合意後に行います。",
  },
  {
    q: "引き止められたらどう対応すればよいですか？",
    a: "退職意思が固いなら、感謝を述べたうえで丁重に断るのが基本です。年収アップや昇進などの条件提示（カウンターオファー）を受けて残留した場合、根本的な不満が解消されず再び転職を考えるケースや、社内評価に影響するケースがあると指摘されています。判断の詳細はカウンターオファー対応の記事も参考にしてください。転職先と入社日を合意済みであれば、その事実を伝えると引き止めが収まりやすくなります。",
  },
  {
    q: "退職理由は正直に伝えるべきですか？",
    a: "不満をそのままぶつける必要はありません。『新しい技術領域に挑戦したい』『キャリアの方向性を変えたい』など前向きな理由に整理して伝えるのが円満退職のコツです。会社や個人への批判は、たとえ事実でも円満な引き継ぎを妨げ、業界内での評判に影響することがあります。具体的な転職先名は、伝える義務はありません。",
  },
  {
    q: "引き継ぎはどこまでやるべきですか？",
    a: "ドキュメント整備、コード・運用手順の説明、後任がいる場合の直接レクチャーが基本です。担当システムのアーキテクチャ図、デプロイ・障害対応手順、未解決の課題一覧、アカウント・権限の移譲などを優先しましょう。一方で、退職後の長期サポートや過大な要求にまで応じる義務は通常ありません。範囲は上司と合意して線引きしておくと安心です。",
  },
  {
    q: "有給休暇は消化できますか？",
    a: "年次有給休暇は労働者の権利であり、退職時にも取得できるのが原則です。一般的には引き継ぎを終えてから最終出社日以降に消化する流れが多く見られます。残日数と退職日を踏まえて早めにスケジュールを相談しましょう。取得時季や買い取りの可否など個別の取り扱いで疑問がある場合は、会社の規程を確認し、必要に応じて専門家や公的相談窓口に相談してください。",
  },
  {
    q: "退職代行サービスは使うべきですか？",
    a: "ハラスメント等で直接伝えることが心身の負担になる場合には選択肢になります。一方、円満退職や将来の人脈維持を重視するなら、自分で伝えるほうが望ましいとされます。IT業界は転職で再会する機会が多いため、可能であれば直接の挨拶を残しておくと後々のキャリアにプラスに働きやすいです。利用する場合はサービス内容と費用、対応範囲を事前に確認しましょう。",
  },
  {
    q: "退職の意思を撤回することはできますか？",
    a: "一度提出した退職の申し出を撤回できるかは、申し出の形式（退職願か退職届か）や会社の承認状況によって法的な取り扱いが異なります。一般に、会社が承認する前の『退職願』は撤回の余地があるとされる一方、合意が成立した後は一方的な撤回が難しい場合があります。撤回を検討する具体的な状況では、自己判断せず、弁護士や労働相談の窓口など専門家に相談することをおすすめします。",
  },
];

export default function ResignationPage() {
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
        title="エンジニアの退職の伝え方【切り出し方・引き止め対応・引き継ぎ】"
        description="エンジニアの退職の伝え方を例文付きで解説。上司への切り出し方、引き止め対応、引き継ぎ計画、退職の法的な基礎知識まで、30代・40代向けに整理しました。"
        url="/knowledge/resignation/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "退職の伝え方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          エンジニアの退職の伝え方【切り出し方・引き止め対応・引き継ぎ】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 切り出し方の例文・引き止め対応・引き継ぎ計画まで
        </p>

        {/* 直答box (P6-C2) */}
        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】どうすれば円満に退職を進められる？</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3"><strong>結論: 最初の一報を直属の上司に1対1で口頭で伝え、理由は前向きに変換し、引き継ぎを早めに文書化するのが円満退職の基本です。</strong></p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5"><li>・最初の一報は直属の上司に1対1で口頭。退職先の社名は伝えなくてよい</li><li>・退職理由は不満ではなく「次でやりたいこと」に変換して伝える</li><li>・引き止め（カウンターオファー）には「入社日を合意済み」が最も効く</li><li>・就業規則の通知期間を確認し、引き継ぎ計画を早めに文書化する</li></ul>
          </div>
        </section>

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed mb-4">
            転職先が決まったら、次の関門は現職の退職です。エンジニアの退職には、コードの引き継ぎ、ドキュメント整備、プロジェクトのタイミング調整といった独自の論点があります。本記事では、退職の切り出し方の例文、引き止めへの対応、引き継ぎ計画の立て方、そして退職にまつわる法的な基礎知識（一般論）までを整理します。
          </p>
        </section>

        <DataNote surveyedAt="2026年6月" sources={["民法（退職に関する一般的な規定）"]} />

        {/* 目次 */}
        <nav className="mb-10 bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="font-bold text-slate-700 mb-3 text-sm">目次</p>
          <ul className="space-y-2">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-sm text-petrol hover:underline">{t.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 結論 */}
        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：意思は固く、理由は前向きに、引き継ぎは早めに</h2>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>・最初の一報は<strong>直属の上司に1対1で口頭</strong>。退職先の社名は言わなくてよい。</li>
              <li>・退職理由は不満ではなく<strong>「次でやりたいこと」</strong>に変換して伝える。</li>
              <li>・引き止め（カウンターオファー）には<strong>「入社日を合意済み」</strong>が最も効く。</li>
              <li>・就業規則の通知期間を確認し、<strong>引き継ぎ計画を早めに文書化</strong>しておく。</li>
            </ul>
          </div>
        </section>

        {/* 法的基礎 */}
        <section id="law" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">退職の法的な基礎知識（一般論）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            退職の進め方を考えるうえで、最低限知っておきたい一般的な制度を整理します。以下はあくまで一般論であり、実際の取り扱いは雇用契約・就業規則・個別の事情によって異なります。<strong>具体的なトラブルや判断は、弁護士や労働相談の窓口など専門家に相談してください。</strong>
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">期間の定めのない雇用と「2週間」のルール</h3>
              <p className="text-sm text-slate-600">
                正社員のように期間の定めのない雇用契約では、民法上、労働者からの解約の申し入れの日から原則2週間を経過することで雇用契約は終了するとされています（民法627条1項）。つまり、法律上は「退職は会社の許可制」ではなく、申し入れによって一定期間後に成立する、という考え方が基本です。ただし、円満退職や引き継ぎの観点からは、就業規則の定めに沿ってより早めに伝えるのが実務的です。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">就業規則の「◯ヶ月前」規定との関係</h3>
              <p className="text-sm text-slate-600">
                就業規則に「退職は1ヶ月前までに申し出る」等の定めがあることは一般的です。民法上のルールと就業規則の関係については解釈が分かれる論点もあるため、ここでは断定せず、まずは就業規則を確認し、規定の期間を尊重して伝えることをおすすめします。規定と実態が食い違ってトラブルになりそうな場合は、専門家に相談してください。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">有期雇用・年俸制などの例外</h3>
              <p className="text-sm text-slate-600">
                契約社員などの有期雇用や、報酬の定め方によっては、退職に関する取り扱いが上記と異なる場合があります（民法627条2項・3項に関連する論点など）。自分の契約形態が当てはまるか不明な場合は、雇用契約書を確認のうえ、必要に応じて専門家に相談してください。
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">有給休暇・離職票などの手続き</h3>
              <p className="text-sm text-slate-600">
                年次有給休暇は退職時にも取得できるのが原則です。また退職後は、離職票・源泉徴収票・健康保険や年金の切り替えなどの手続きが発生します。これらの具体的な進め方や疑問点は、会社の人事・公的窓口に確認しましょう。
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            ※ 本セクションは一般的な制度の解説であり、法的助言ではありません。個別の事案については、必ず弁護士・社会保険労務士・労働相談窓口などの専門家にご相談ください。
          </p>
        </section>

        {/* タイミング */}
        <section id="timing" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">いつ・誰に・どう切り出すか</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-800 mb-2">いつ</h3>
              <p className="text-sm text-slate-600">就業規則の通知期間を満たし、引き継ぎが可能な時期。リリース直後やプロジェクトの節目だと混乱が少なくなります。内定承諾後、入社日が固まってから伝えるのが安全です。</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-800 mb-2">誰に</h3>
              <p className="text-sm text-slate-600">まず直属の上司へ。先に同僚や人事に話が伝わると上司の心証を損ねます。順序は「直属上司 → 合意後に人事手続き」が基本です。</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-800 mb-2">どう</h3>
              <p className="text-sm text-slate-600">1対1の場を確保し、口頭で簡潔に。日程調整の連絡だけメッセージで行い、内容は対面/ビデオ通話で伝えます。退職先の社名は伝える義務はありません。</p>
            </div>
          </div>
        </section>

        {/* 例文集 */}
        <section id="scripts" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">退職の切り出し方 例文集</h2>
          <div className="space-y-5">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">① 面談を依頼するメッセージ</h3>
              <p className="text-sm text-slate-600 bg-slate-50 rounded p-3">「お疲れさまです。ご相談したいことがあり、近いうちに15分ほどお時間をいただけないでしょうか。1対1でお話しできるとありがたいです。」</p>
              <p className="text-xs text-slate-500 mt-2">※ この時点では用件を「退職」と書かず、対面で伝えます。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">② 切り出しの第一声</h3>
              <p className="text-sm text-slate-600 bg-slate-50 rounded p-3">「お時間ありがとうございます。突然のご相談で恐縮ですが、◯月末をもって退職させていただきたく、ご報告に参りました。これまで大変お世話になり、感謝しています。」</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">③ 理由を前向きに伝える（不満を語らない）</h3>
              <p className="text-sm text-slate-600 bg-slate-50 rounded p-3 mb-2"><strong>Before（NG例）:</strong>「正直、今の評価制度に納得できず、レガシーな環境にも限界を感じていて……」</p>
              <p className="text-sm text-slate-600 bg-slate-50 rounded p-3"><strong>After（推奨）:</strong>「今後は◯◯領域のプロダクト開発に深く関わっていきたいと考え、それが実現できる環境に挑戦する決断をしました。」</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">④ 引き継ぎへの姿勢を示す</h3>
              <p className="text-sm text-slate-600 bg-slate-50 rounded p-3">「残りの期間は、担当しているシステムの引き継ぎを最優先で進めます。ドキュメントの整備と後任の方へのレクチャー計画を、来週までにまとめてご相談させてください。」</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">⑤ 退職届の書式（一般的な例）</h3>
              <p className="text-sm text-slate-600 bg-slate-50 rounded p-3 whitespace-pre-line">{`退職届

私事、
このたび一身上の都合により、来る◯◯年◯月◯日をもって退職いたします。

◯◯年◯月◯日
所属：◯◯部　氏名：◯◯◯◯　㊞

株式会社◯◯
代表取締役 ◯◯◯◯ 殿`}</p>
              <p className="text-xs text-slate-500 mt-2">※ 会社所定の書式がある場合はそれに従ってください。退職「願」と退職「届」は意味合いが異なるため、提出前に人事に確認すると安心です。</p>
            </div>
          </div>
        </section>

        {/* 引き止め対応 */}
        <section id="counter" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">引き止めパターンと対応例文</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            退職を伝えると、引き止め（カウンターオファー）を受けることがあります。意思が固いなら、感謝を示しつつ揺らがない姿勢で応じます。条件提示を受けて残留するかの判断は、
            <Link href="/knowledge/counter-offer/" className="text-petrol hover:underline">カウンターオファー対応の記事</Link>
            も参考にしてください。
          </p>
          <div className="space-y-4">
            {counters.map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-5">
                <h3 className="font-bold text-slate-800 mb-2">{item.q}</h3>
                <p className="text-sm text-slate-600 mb-2">{item.a}</p>
                <p className="text-sm text-slate-700 bg-petrol-soft rounded p-3">対応例：{item.script}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 引き継ぎ */}
        <section id="handover" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">引き継ぎ計画の立て方とチェックリスト</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            エンジニアの引き継ぎは「人」ではなく「仕組み」に残すのが理想です。後任がいなくても回るよう、口頭説明に頼らずドキュメントとリポジトリに知識を集約しましょう。
          </p>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="font-bold text-slate-800 mb-3 text-sm">エンジニア特有の引き継ぎチェックリスト</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              {handover.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-petrol font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* スケジュール */}
        <section id="schedule" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">退職までのスケジュール（2ヶ月計画の例）</h2>
          <div className="space-y-4">
            {schedule.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center min-w-[80px] h-8 rounded-full bg-petrol text-white font-bold text-xs shrink-0">{item.period}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 週数は一例です。就業規則の通知期間や担当業務の状況に合わせて調整してください。全体の活動計画は<Link href="/knowledge/timeline/" className="text-petrol hover:underline">転職スケジュール</Link>も参照。</p>
        </section>

        {/* 30代40代視点 */}
        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代視点：円満退職が後々効く理由</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            30代・40代の退職は、20代の退職とは重みが違います。担当領域が広く引き継ぎが重い一方で、業界内の人脈が今後のキャリアに直結するためです。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">IT業界は「再会」が多い</h3>
              <p className="text-sm text-slate-600">元同僚が転職先や取引先にいる、リファラルで声がかかる、といったことが珍しくありません。立つ鳥跡を濁さない退職は、将来の選択肢を増やします。リファラル経由の転職については<Link href="/knowledge/referral/" className="text-petrol hover:underline">リファラル採用ガイド</Link>も参考に。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">引き継ぎの質がそのまま「評判」になる</h3>
              <p className="text-sm text-slate-600">中堅・ベテランほど担当のブラックボックス化が起きがちです。退職時にドキュメントを整え、後任が困らない状態を残せるかは、エンジニアとしての成熟度の証明にもなります。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">家庭・住宅ローンなど「引けない事情」を味方に</h3>
              <p className="text-sm text-slate-600">引き止めで揺れそうなときほど、入社日を先に確定させておくと意思がぶれません。「次の会社と合意済み」という事実が、感情的な引き止めへの最良の盾になります。カウンターオファーで迷う場合は<Link href="/knowledge/counter-offer/" className="text-petrol hover:underline">こちら</Link>。</p>
            </div>
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
          <h2 className="text-xl font-bold mb-3">退職の進め方に迷ったら相談を</h2>
          <p className="text-blue-100 text-sm mb-4">
            退職のタイミングや引き止め対応に不安があれば、IT特化型エージェントに無料で相談できます。
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
            {[
              { name: "転職スケジュール（在職中の進め方）", href: "/knowledge/timeline/" },
              { name: "カウンターオファーへの対応", href: "/knowledge/counter-offer/" },
              { name: "年収交渉テクニック", href: "/knowledge/salary-negotiation/" },
              { name: "職務経歴書の書き方", href: "/knowledge/resume/" },
              { name: "リファラル採用ガイド", href: "/knowledge/referral/" },
              { name: "転職後90日間の過ごし方", href: "/knowledge/first-90days/" },
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
