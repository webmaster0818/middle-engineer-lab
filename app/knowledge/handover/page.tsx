import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

export const metadata: Metadata = {
  alternates: { canonical: "/knowledge/handover/" },
  title: "引き継ぎドキュメントの作り方【エンジニア向けテンプレと逆算術】",
  description:
    "エンジニアの退職時に作る引き継ぎドキュメントの構成テンプレートを公開。属人化コード・インフラ・暗黙知の文書化、後任未定時の進め方、逆算スケジュールとチェックリストを30代・40代向けに解説します。",
};

const toc = [
  { id: "conclusion", label: "結論：人ではなく仕組みに残す" },
  { id: "precondition", label: "前提：引き継ぎ完了を退職の条件にはできない" },
  { id: "template", label: "引き継ぎドキュメントの構成テンプレート" },
  { id: "sample", label: "そのまま使える記入サンプル" },
  { id: "engineer", label: "エンジニア特有：属人化・インフラ・暗黙知" },
  { id: "schedule", label: "逆算スケジュールとOJTの確保" },
  { id: "no-successor", label: "後任が未定のときの進め方" },
  { id: "checklist", label: "引き継ぎチェックリスト" },
  { id: "middle", label: "30代・40代視点：引き継ぎの質が評判になる" },
  { id: "faq", label: "よくある質問" },
  { id: "related", label: "関連記事" },
];

const template = [
  { name: "担当業務一覧", desc: "担当しているプロジェクト・サービス・運用業務を棚卸し。それぞれの目的、ステークホルダー、現在の状況を1行ずつでも明記します。" },
  { name: "システム構成", desc: "アーキテクチャ図、使用技術スタック、外部サービス連携、ネットワーク構成。図があれば最新化します。" },
  { name: "運用手順", desc: "デプロイ手順、リリースフロー、障害対応フロー、監視・アラート設定、バックアップ・復旧手順。" },
  { name: "アカウント・権限", desc: "各種クラウド・SaaS・リポジトリのアカウントとアクセス権限。個人アカウントと会社アカウントの切り分け、APIキーの棚卸し。" },
  { name: "定例タスク", desc: "日次・週次・月次の定期作業、バッチの内容と実行タイミング、棚卸し・締め作業など忘れやすいルーティン。" },
  { name: "連絡先一覧", desc: "関係部署、社外ベンダー、問い合わせ窓口、エスカレーション先。誰に何を聞けばよいかをまとめます。" },
  { name: "トラブル履歴・ナレッジ", desc: "過去に起きた障害とその原因・対処、ハマりやすいポイント、回避策。暗黙知の文書化はここが要です。" },
  { name: "残課題・技術負債", desc: "未解決のバグ、進行中タスクの状態（着手済/レビュー待ち/未着手）、既知の技術負債と優先度。" },
];

const schedule = [
  { period: "退職日から逆算", title: "担当業務を棚卸し", desc: "まず自分の担当を一覧化。ドキュメント化が必要な範囲と優先度を見積もります。" },
  { period: "4〜5週間前", title: "ドキュメント整備を開始", desc: "構成テンプレに沿って文書化。属人化が強い領域・障害時に困る領域から優先して着手します。" },
  { period: "2〜3週間前", title: "後任へのOJT・レクチャー", desc: "後任がいる場合は、ドキュメントを見ながら一緒に作業し、疑問点をその場で潰します。" },
  { period: "最終週", title: "残課題の引き渡し・予備日", desc: "未解決事項を整理して引き渡し。質問対応のための予備日を残しておくと安心です。" },
];

const faqs = [
  {
    q: "引き継ぎが終わらないと退職できないのですか？",
    a: "引き継ぎは円満退職のために重要ですが、引き継ぎの完了を退職の条件や退職金支給の条件にすることはできないと考えられています。退職そのものは、就業規則や法律上のルールに沿って成立します。とはいえ、後任が困らない状態を残すことは、業界内の評判や転職後のリファレンスに直結します。『法的には条件にできないが、自分のために丁寧にやる』というスタンスが現実的です。法律上の前提は円満退職の交渉術の記事も参照してください。なお、個別のトラブルは専門家にご相談ください。",
  },
  {
    q: "後任が決まっていない場合はどう引き継げばいいですか？",
    a: "後任が未定でも、引き継ぎは『人』ではなく『ドキュメントとリポジトリ』に残すのが基本です。直接レクチャーできない前提で、誰が読んでも作業を再現できるよう、運用手順・障害対応・アカウント権限などを文書化します。優先度を付け、まず『止まると事業に影響する領域』『障害時に困る領域』から固めましょう。完成したドキュメントはチームや上司宛に共有し、引き継ぎ先が後から決まっても困らない状態にしておきます。後任確保自体は基本的に会社側の課題です。",
  },
  {
    q: "属人化したコードはどう引き継げばよいですか？",
    a: "属人化したコードは、コードそのものより『なぜそう実装したか』という背景の文書化が重要です。設計判断の理由、過去のトラブルとその回避策、触ると危険な箇所、暗黙の前提などを、READMEやドキュメントに残します。コードコメントやコミット履歴だけでは伝わらない『暗黙知』を言語化することが、後任が事故を起こさないための鍵になります。インフラ設定や手作業に依存している部分があれば、手順を明文化しておきましょう。",
  },
  {
    q: "引き継ぎドキュメントはどこに置くべきですか？",
    a: "後任やチームが継続的にアクセスできる場所に置くのが原則です。社内Wiki、ドキュメント共有ツール、リポジトリのREADMEやdocsディレクトリなど、退職後も残り、検索できる場所が適しています。個人の端末やローカルファイルにしか残さないと、退職後に参照できず引き継ぎが無駄になります。アクセス権限の移譲とあわせて、ドキュメントの保管場所も引き渡してください。",
  },
  {
    q: "オンコールや障害対応はどう引き継げばよいですか？",
    a: "オンコール体制がある場合は、アラートの種類ごとの一次対応手順、エスカレーション先、過去の障害履歴と対処をまとめておきます。『このアラートが鳴ったらまず何を見るか』を手順化しておくと、後任が深夜の障害でも動けます。監視ツールのアカウント・通知設定の移管、連絡網の更新も忘れずに行いましょう。トラブル履歴は暗黙知の宝庫なので、ドキュメントの中でも特に丁寧に残す価値があります。",
  },
  {
    q: "引き継ぎはどこまでやれば十分ですか？",
    a: "目安は『自分がいなくても、ドキュメントを見れば後任が事故なく運用を再現できる』状態です。具体的には、担当業務一覧、システム構成、運用手順、アカウント権限、定例タスク、連絡先、トラブル履歴、残課題の8項目が一通り揃っているかを確認します。一方で、退職後の長期サポートや過大な要求にまで応じる義務は通常ありません。範囲は上司と合意し、最終出社日までに完了する計画を立てておくと安心です。",
  },
];

export default function HandoverPage() {
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
        title="引き継ぎドキュメントの作り方【エンジニア向けテンプレと逆算術】"
        description="エンジニアの退職時に作る引き継ぎドキュメントの構成テンプレートを公開。属人化コード・インフラ・暗黙知の文書化、後任未定時の進め方、逆算スケジュールとチェックリストを30代・40代向けに解説します。"
        url="/knowledge/handover/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "転職ナレッジ", href: "/knowledge/" },
          { name: "引き継ぎドキュメントの作り方" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          引き継ぎドキュメントの作り方【エンジニア向けテンプレと逆算術】
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          最終更新: 2026年6月 | 構成テンプレート・属人化の解消・後任未定時の進め方
        </p>

        <section className="mb-8">
          <p className="text-slate-600 leading-relaxed mb-4">
            エンジニアの退職で、最も差が出るのが引き継ぎの質です。担当システムが属人化していると、退職交渉の引き止め材料になるだけでなく、退職後に後任が事故を起こしたり、自分の評判を損ねたりします。本記事では、退職時に作る<strong>引き継ぎドキュメントの構成テンプレート</strong>、属人化・インフラ・暗黙知の文書化、後任が未定のときの進め方、逆算スケジュールとチェックリストを整理します。退職の切り出し方は
            <Link href="/knowledge/smooth-resignation/" className="text-petrol hover:underline">円満退職の交渉術</Link>
            、退職の伝え方全般は
            <Link href="/knowledge/resignation/" className="text-petrol hover:underline">退職の伝え方</Link>
            を参照してください。
          </p>
        </section>

        <DataNote surveyedAt="2026年6月" sources={["エンジニアの引き継ぎ実務に関する一般的な知見"]} />

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

        <section id="conclusion" className="mb-10 scroll-mt-20">
          <div className="bg-petrol-soft border-l-4 border-petrol rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-blue-900 mb-3">結論：人ではなく仕組みに残す</h2>
            <ul className="space-y-2 text-sm text-blue-900">
              <li>・引き継ぎは口頭説明でなく<strong>ドキュメントとリポジトリ</strong>に集約する。</li>
              <li>・構成は<strong>8項目テンプレ</strong>（担当業務／構成／運用手順／権限／定例／連絡先／トラブル履歴／残課題）。</li>
              <li>・エンジニア特有の<strong>属人化・暗黙知</strong>は「なぜそうしたか」まで言語化する。</li>
              <li>・<strong>後任未定でも</strong>チーム・上司宛に優先度を付けて文書化しておく。</li>
            </ul>
          </div>
        </section>

        <section id="precondition" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">前提：引き継ぎ完了を退職の条件にはできない</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            まず押さえておきたいのは、引き継ぎの完了を退職や退職金支給の条件にすることはできないと考えられている点です。退職そのものは、就業規則や法律上のルールに沿って成立します。「引き継ぎが終わるまで辞めさせない」という引き止めに、必要以上に縛られる必要はありません。
          </p>
          <p className="text-slate-600 leading-relaxed text-sm">
            一方で、丁寧な引き継ぎは「やらされること」ではなく「自分のためにやること」です。後任が困らない状態を残せるかは、業界内の評判や転職後のリファレンスに直結します。法的に縛られないからこそ、自分の意思で質の高い引き継ぎを残すのがミドルの流儀です。なお、引き止めや条件をめぐる個別のトラブルは専門家にご相談ください。
          </p>
        </section>

        <section id="template" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">引き継ぎドキュメントの構成テンプレート</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            引き継ぎドキュメントは、次の8項目を骨組みにすると漏れが出にくくなります。各項目を見出しにして、後任が読めば作業を再現できる粒度で書きます。
          </p>
          <div className="space-y-3">
            {template.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-petrol text-white font-bold text-sm shrink-0">{i + 1}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.name}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="sample" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">そのまま使える記入サンプル</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            テンプレートだけだと手が止まりがちなので、各項目をどの粒度で書けばよいかの記入例を示します。固有名詞は伏せ字（◯◯）にしていますので、自分の環境に置き換えて使ってください。
          </p>
          <div className="space-y-5">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">担当業務一覧（記入例）</h3>
              <p className="text-sm text-slate-600 bg-slate-50 rounded p-3 whitespace-pre-line">{`・◯◯サービス バックエンドAPIの開発・運用（主担当）
　目的：◯◯機能の提供／関係者：PdM ◯◯さん、フロント ◯◯さん
　状況：機能追加◯件が進行中（詳細は「残課題」参照）
・夜間バッチ ◯◯の運用監視（副担当）
　毎日2:00実行。失敗時はSlack #alert に通知。一次対応は「運用手順」参照`}</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">運用手順（デプロイ／記入例）</h3>
              <p className="text-sm text-slate-600 bg-slate-50 rounded p-3 whitespace-pre-line">{`【本番デプロイ手順】
1. main ブランチへマージ（PRは2名以上のレビュー必須）
2. CI（◯◯）のパイプラインが成功することを確認
3. リリースタグを付与 → 自動デプロイが走る
4. デプロイ後、◯◯のヘルスチェックURLで200を確認
注意：毎月◯日のメンテナンス時間帯はデプロイ不可（◯◯の都合）`}</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">トラブル履歴・暗黙知（記入例）</h3>
              <p className="text-sm text-slate-600 bg-slate-50 rounded p-3 whitespace-pre-line">{`・◯◯のタイムアウトが稀に発生 → 原因は外部API ◯◯のレート制限。
　対処：リトライ設定を◯回に。根本対応は未実施（残課題に記載）
・◯◯の設定ファイルは手動更新。コード化されていないので変更時は要注意
・このサービスは過去の経緯で◯◯ライブラリを使用。安易な置き換えは不可`}</p>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 記入例はあくまで粒度の参考です。実際の構成・固有名詞に置き換えて使用してください。</p>
        </section>

        <section id="engineer" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">エンジニア特有：属人化・インフラ・暗黙知</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            エンジニアの引き継ぎが難しいのは、コードやインフラに「書かれていない前提」が多いからです。コードコメントやコミット履歴だけでは伝わらない暗黙知を、いかに言語化するかが勝負どころです。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">属人化コードは「なぜ」を残す</h3>
              <p className="text-sm text-slate-600">設計判断の理由、過去のトラブルと回避策、触ると危険な箇所、暗黙の前提をREADMEやドキュメントに明記します。「何をしているか」はコードを読めば分かりますが、「なぜそうしたか」は本人にしか分かりません。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">インフラ・手作業を明文化する</h3>
              <p className="text-sm text-slate-600">手動で行っている設定変更、コード化されていないインフラ操作、特定環境でしか動かない手順などは、退職後に再現できなくなりがちです。手順を文書化し、可能ならスクリプト化・コード化しておきます。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">README・オンコール手順を整える</h3>
              <p className="text-sm text-slate-600">リポジトリのREADMEを最新化し、セットアップ・ビルド・デプロイの手順を整理します。オンコール体制があれば、アラートごとの一次対応手順とエスカレーション先をまとめ、深夜の障害でも後任が動ける状態にします。</p>
            </div>
          </div>
        </section>

        <section id="schedule" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">逆算スケジュールとOJTの確保</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            引き継ぎは、退職日から逆算して計画します。ドキュメント整備とOJT（後任との並走）の両方に時間を確保するのがコツです。
          </p>
          <div className="space-y-4">
            {schedule.map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center min-w-[110px] h-8 rounded-full bg-petrol text-white font-bold text-xs px-2 shrink-0">{item.period}</span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-2">※ 有給消化に入る前に引き継ぎを完了させる前提で計画すると安心です。有給の扱いは<Link href="/knowledge/paid-leave/" className="text-petrol hover:underline">有給消化の法律論</Link>、全体の段取りは<Link href="/knowledge/timeline/" className="text-petrol hover:underline">転職スケジュール</Link>も参照。</p>
        </section>

        <section id="no-successor" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">後任が未定のときの進め方</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            後任が決まっていないケースは珍しくありません。その場合でも引き継ぎは止めず、「誰が読んでも再現できるドキュメント」を残すことに集中します。
          </p>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="text-petrol font-bold mt-0.5">・</span><span><strong>優先度を付ける</strong>：すべてを完璧に文書化する時間はないため、「止まると事業に影響する領域」「障害時に困る領域」から固めます。</span></li>
            <li className="flex items-start gap-2"><span className="text-petrol font-bold mt-0.5">・</span><span><strong>チーム・上司宛に共有</strong>：特定の後任ではなく、チームや上司がアクセスできる場所にドキュメントを置き、引き継ぎ先が後から決まっても困らない状態にします。</span></li>
            <li className="flex items-start gap-2"><span className="text-petrol font-bold mt-0.5">・</span><span><strong>後任確保は会社側の課題</strong>：後任がいないこと自体を理由に退職を引き延ばす必要はありません。協力姿勢を示しつつ、できる範囲でドキュメントを残します。</span></li>
          </ul>
        </section>

        <section id="checklist" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">引き継ぎチェックリスト</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <ul className="space-y-3 text-sm text-slate-600">
              {[
                "担当システムのアーキテクチャ図・設計ドキュメントを最新化した",
                "デプロイ・リリース・障害対応・監視設定など運用手順を整備した",
                "未解決のバグ・技術負債を一覧化し、優先度を付けて共有した",
                "外部サービスのアカウント・APIキーを棚卸しし、個人/会社を切り分けた",
                "CI/CDパイプライン・インフラ権限・リポジトリ管理権限を移譲した",
                "定例タスク・問い合わせ窓口・関係部署の連絡先を引き渡した",
                "過去のトラブル履歴と回避策（暗黙知）を文書化した",
                "進行中タスクの状態（着手済/レビュー待ち/未着手）を可視化した",
                "ドキュメントを後任・チームがアクセスできる場所に保管した",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2"><span className="text-petrol font-bold mt-0.5">✓</span><span>{item}</span></li>
              ))}
            </ul>
          </div>
        </section>

        <section id="middle" className="mb-10 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">30代・40代視点：引き継ぎの質が評判になる</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            ミドル層の引き継ぎは、20代よりも担当範囲が広く、属人化も進みやすい傾向があります。だからこそ、引き継ぎの質がそのまま「エンジニアとしての成熟度」と「業界内の評判」を映し出します。
          </p>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">丁寧な引き継ぎがリファレンスに効く</h3>
              <p className="text-sm text-slate-600">IT業界は再会が多く、前職の上司や同僚がリファレンスチェックの相手になることもあります。後任が困らない状態を残せたかは、後々の評判として返ってきます。リファラル経由の機会にも影響します。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">属人化の解消が退職交渉も楽にする</h3>
              <p className="text-sm text-slate-600">「あなたにしか分からない」状態を解消しておくと、引き止めの材料を減らせます。引き継ぎ準備は、円満退職の交渉を有利に進める実務的な手段でもあります。交渉術は<Link href="/knowledge/smooth-resignation/" className="text-petrol hover:underline">円満退職の交渉術</Link>を参照。</p>
            </div>
            <div className="border border-slate-200 rounded-lg p-5">
              <h3 className="font-bold text-slate-800 mb-2">文書化スキルは次の職場でも武器になる</h3>
              <p className="text-sm text-slate-600">暗黙知を言語化し、誰でも再現できる形に落とす力は、転職後のオンボーディングや設計ドキュメント整備でも評価されます。退職時の引き継ぎは、その力を示す機会でもあります。</p>
            </div>
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
          <h2 className="text-xl font-bold mb-3">次のキャリアの相談を</h2>
          <p className="text-blue-100 text-sm mb-4">
            退職と引き継ぎの段取りに迷ったら、IT特化型エージェントに無料で相談できます。
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
              { name: "円満退職の交渉術", href: "/knowledge/smooth-resignation/" },
              { name: "退職の伝え方（切り出し方の例文集）", href: "/knowledge/resignation/" },
              { name: "有給消化の法律論", href: "/knowledge/paid-leave/" },
              { name: "退職後の手続き（健保・年金・失業給付）", href: "/knowledge/after-resignation-procedures/" },
              { name: "退職代行の選び方", href: "/knowledge/retirement-agency/" },
              { name: "転職スケジュール（在職中の進め方）", href: "/knowledge/timeline/" },
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
