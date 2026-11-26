import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";
import DataNote from "@/components/DataNote";

const TITLE = "UNIXの歴史｜誕生からBSD・Linux・macOSまでの年表と、UNIX認証・POSIXの現状【2026年】";
const DESCRIPTION =
  "UNIXは1969年にベル研究所で生まれたOSです。開発者の論文にもとづく年表、BSD・Linuxの系譜、UNIX認証製品一覧の当サイト集計、検証用Macで確かめたPOSIXの版を一次情報で整理します。";
const URL = "/knowledge/unix-history/";

export const metadata: Metadata = {
  alternates: { canonical: URL },
  title: TITLE,
  description: DESCRIPTION,
};

const toc = [
  { id: "timeline", label: "UNIXの歴史年表（1969年〜2026年）" },
  { id: "origin", label: "ベル研究所での誕生（1969〜1974年）" },
  { id: "family", label: "BSDとLinuxの系譜" },
  { id: "certification", label: "UNIX認証とPOSIXの現状（当サイト集計）" },
  { id: "mac", label: "macOSでUNIXの名残を確かめる（当サイト実行結果）" },
  { id: "related", label: "C言語・Linux・転職の詳しい情報" },
  { id: "faq", label: "よくある質問" },
  { id: "sources", label: "出典一覧" },
];

const faqs = [
  {
    q: "UNIXはいつ、誰が作ったのですか？",
    a: "1969年に、米国のベル研究所でKen Thompson氏とDennis Ritchie氏らが開発を始めたオペレーティングシステムです。Ritchie氏の論文「The Evolution of the Unix Time-sharing System」には、Unixについて最初に発表された論文は1974年のものだが、Unixが生まれたのは1974年ではなく1969年であると書かれています。最初はPDP-7というコンピュータの上で作られました。",
  },
  {
    q: "UNIXという名前の由来は何ですか？",
    a: "Ritchie氏の論文によると、1970年に入ってしばらくしてからBrian Kernighan氏が「Unix」という名前を提案しました。ベル研究所が以前に参加していたOS開発プロジェクト「Multics」をもじった名前です。",
  },
  {
    q: "UNIXとLinuxの違いは何ですか？",
    a: "LinuxはUNIXのソースコードを受け継いだものではなく、Linus Torvalds氏が一から書いたカーネルで、最初の版（0.01）の著作権表示は1991年です。kernel.orgは、LinuxをUNIXのクローンであり、POSIXとSingle UNIX Specificationへの準拠を目指すものと説明しています。一方、「UNIX」は商標であり、The Open Groupの認証を受けた製品だけが名乗れます。2026年11月27日に当サイトが登録製品一覧を確認した時点で、Linuxディストリビューションの掲載はありませんでした。",
  },
  {
    q: "macOSはUNIXですか？",
    a: "macOSの中核であるDarwinのカーネルXNUは、MachカーネルにFreeBSD由来の部品を組み合わせたものとAppleが説明しており、設計はUNIXの系譜にあります。当サイトの検証用Macでは、POSIX.1-2001に対応する値（_POSIX_VERSION=200112）が返りました。ただし、2026年11月27日に当サイトがThe Open GroupのUNIX認証製品一覧（UNIX V7・UNIX 03・UNIX 98・UNIX 95）を確認した時点では、Apple・macOSの掲載はありませんでした。過去の認証の経緯は、当サイトでは公式資料で確認できていないため記載していません。",
  },
  {
    q: "POSIXとUNIXはどのような関係ですか？",
    a: "POSIXは、UNIX系OSのシステムコール・シェル・コマンドなどの共通の仕様を定めた規格です。最新版のPOSIX.1-2024は、IEEE Std 1003.1-2024であると同時にThe Open GroupのBase Specifications Issue 8でもあります。The Open GroupのUNIX認証は、Single UNIX Specificationに完全に準拠していることを確認する制度です。",
  },
];

const timelineRows = [
  { year: "1968〜1969年", event: "ベル研究所がOS開発プロジェクトMulticsから撤退していく。Thompson氏・Ritchie氏らは代わりの環境を探し始める", source: "Ritchie「Evolution」" },
  { year: "1969年", event: "Thompson氏・R. H. Canaday氏・Ritchie氏がファイルシステムの基本設計を行い、Thompson氏がPDP-7上で実装を始める", source: "Ritchie「Evolution」" },
  { year: "1970年", event: "Brian Kernighan氏が「Unix」という名前を提案。5月にPDP-11を発注し、夏の終わりに本体が届く（ディスクは12月）", source: "Ritchie「Evolution」" },
  { year: "1971年2月", event: "PDP-11版のUnixが稼働を始める", source: "Ritchie・Thompson「The UNIX Time-Sharing System」" },
  { year: "1971年後半", event: "ベル研究所の特許部門が特許出願書類の作成にUnixを採用。研究所内で最初の利用部門になる", source: "Ritchie「Evolution」" },
  { year: "1972年", event: "M. D. McIlroy氏の提案で、Unixにパイプが入る", source: "Ritchie「Evolution」" },
  { year: "1973年夏", event: "カーネルをアセンブリ言語からC言語で書き直す。規模は約3分の1増えたが、理解しやすく変更しやすくなる", source: "Ritchie・Thompson「The UNIX Time-Sharing System」" },
  { year: "1973年10月", event: "第4回ACMオペレーティングシステム原理シンポジウムでUnixの論文を発表", source: "同上（論文の注記）" },
  { year: "1974年7月", event: "論文「The UNIX Time-Sharing System」がCommunications of the ACM 17巻7号に掲載される", source: "同上（論文の注記）" },
  { year: "1978年", event: "改訂版の論文がBell System Technical Journalに掲載。PDP-11版の稼働以来、600以上の設置があると記載", source: "同上（BSTJ版）" },
  { year: "1991年", event: "Linus Torvalds氏によるLinux 0.01（著作権表示は1991年）。「i386向けのフリーなminix風カーネル」と説明", source: "kernel.org「RELNOTES-0.01」" },
  { year: "1993年", event: "NetBSDプロジェクトが発足し、4月にNetBSD 0.8を公開。12月にFreeBSD 1.0を公開", source: "NetBSD・FreeBSD公式" },
  { year: "1994年12月", event: "FreeBSD 2.0を公開。カリフォルニア大学バークレー校の4.4BSD-Liteにもとづく版へ移行", source: "FreeBSDハンドブック" },
  { year: "2024年", event: "POSIX.1-2024（IEEE Std 1003.1-2024／The Open Group Base Specifications Issue 8）", source: "The Open Group" },
  { year: "2026年", event: "FreeBSD 15.1（6月16日）、OpenBSD 8.0（10月20日・61回目のリリース）、NetBSD 11.1（11月2日）、Linux 7.3.6（11月23日・安定版）", source: "各プロジェクト公式・kernel.org" },
];

const certRows = [
  { standard: "UNIX V7", count: "1件", products: "IBM AIX 7（7.2 TL5以降）" },
  { standard: "UNIX 03", count: "4件", products: "IBM AIX 7（7.1 TL5以降または7.2 TL2以降）、HPE HP-UX 11i V3、IBM AIX 5L V5.3、IBM AIX 6 V6.1.2" },
  { standard: "UNIX 98", count: "0件", products: "表示される製品なし" },
  { standard: "UNIX 95", count: "3件", products: "IBM z/OS 3.1以降、IBM z/OS V2R1以降、SCO UnixWare 7.1.3以降" },
];

const macRows = [
  { cmd: "uname -s / uname -r / uname -m", out: "Darwin / 25.5.0 / arm64", meaning: "カーネルを含むOSの基盤の名前はDarwin" },
  { cmd: "sw_vers", out: "ProductName: macOS／ProductVersion: 26.5.2／BuildVersion: 25F84", meaning: "製品名としてのOSのバージョン" },
  { cmd: "getconf _POSIX_VERSION", out: "200112", meaning: "IEEE Std 1003.1-2001（POSIX.1-2001）に対応する値。POSIX.1-2024の値は202405" },
  { cmd: "getconf _XOPEN_VERSION", out: "600", meaning: "Base Specifications Issue 6のXSIに対応する値。Issue 8の値は800" },
  { cmd: "getconf _XOPEN_UNIX", out: "1", meaning: "XSI（X/Open System Interfaces）オプションに対応していることを示す" },
  { cmd: "SDKのヘッダー（sys/unistd.h・unistd.h）", out: "_POSIX_VERSION 200112L／_XOPEN_VERSION 600", meaning: "コマンドの出力と同じ値が定義されている" },
  { cmd: "man uname（HISTORYの項）", out: "PWB UNIX 1.0で登場し、Berkeley版では4.4BSDが最初", meaning: "コマンドのマニュアルにUNIX・BSDからの来歴が残っている" },
];

export default function UnixHistoryKnowledgePage() {
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
          { name: "UNIXの歴史" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          UNIXの歴史｜誕生からBSD・Linux・macOSまでの年表と、UNIX認証・POSIXの現状
        </h1>
        <p className="text-slate-500 text-sm mb-6">最終更新: 2026年11月27日 | 公式資料の確認日: 2026年11月27日</p>

        <section className="max-w-3xl mx-auto px-4 pt-2 pb-4">
          <div className="bg-petrol-soft border-l-4 border-petrol-deep rounded-r-xl p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-2">【直答】UNIXの歴史</h2>
            <p className="text-sm leading-7 text-slate-700 mb-3">
              <strong>UNIXは、1969年に米国のベル研究所でKen Thompson氏とDennis Ritchie氏らが開発を始めたオペレーティングシステムです。1973年にカーネルがC言語で書き直され、その後BSDなどの派生や、互換を目指すLinuxが生まれました（開発者の論文と各プロジェクトの公式資料による）。</strong>
            </p>
            <ul className="text-sm leading-7 text-slate-700 space-y-1.5">
              <li>・1969年にPDP-7で開発が始まり、1971年2月にPDP-11版が稼働、1972年にパイプ、1973年夏にC言語での書き直しが行われました</li>
              <li>・「UNIX」は商標で、The Open Groupの認証を受けた製品だけが名乗れます。2026年11月27日時点の登録製品一覧に表示されたのは、4つの規格で計8件でした（当サイト集計）</li>
              <li>・当サイトの検証用Mac（macOS 26.5.2）では、POSIX.1-2001に対応する値が返りました。最新のPOSIX.1-2024の値ではありません</li>
            </ul>
          </div>
        </section>

        <p className="text-slate-600 leading-relaxed mb-4">
          本記事では、開発者であるRitchie氏とThompson氏の論文（ベル研究所の後身であるNokia Bell Labsが公開している電子版）、FreeBSD・NetBSD・OpenBSD・kernel.orgの公式資料、The Open GroupのUNIX認証製品一覧とPOSIX規格をもとに、UNIXの歴史を年表にまとめました。あわせて、認証製品の件数を当サイトで数え、macOSで実際にコマンドを実行してUNIXの系譜を確かめた結果を掲載しています。
        </p>

        <DataNote
          surveyedAt="2026年11月27日"
          sources={["Dennis M. Ritchie「The Evolution of the Unix Time-sharing System」", "D. M. Ritchie・K. Thompson「The UNIX Time-Sharing System」", "The Open Group「The Register of UNIX Certified Products」", "The Open Group Base Specifications Issue 8（POSIX.1-2024）", "FreeBSD・NetBSD・OpenBSD・kernel.org 公式サイト"]}
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

        <section id="timeline" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">UNIXの歴史年表（1969年〜2026年）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            一次資料に書かれている出来事だけを選び、当サイトで1つの年表にまとめました。出典の欄は、その出来事を確認した資料です。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">時期</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">出来事（当サイト要約）</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">出典</th>
                </tr>
              </thead>
              <tbody>
                {timelineRows.map((r) => (
                  <tr key={r.year + r.event}>
                    <td className="border border-slate-200 px-3 py-2 whitespace-nowrap">{r.year}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.event}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典の正式名称とURLは、本記事末尾の出典一覧をご覧ください。日本語の要約は当サイトによるものです。BSDの初期（1970年代後半〜1980年代）の版の公開時期は、当サイトでは公式の一次資料で確認できていないため、年表に含めていません。</p>
        </section>

        <section id="origin" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">ベル研究所での誕生（1969〜1974年）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Ritchie氏の論文「The Evolution of the Unix Time-sharing System」（1979年にシドニーの会議で発表、1984年にAT&amp;T Bell Laboratories Technical Journalに再掲）によると、1968〜1969年のベル研究所は、大型のタイムシェアリングOSを開発するMulticsプロジェクトから撤退しつつある時期でした。Thompson氏・Ritchie氏・McIlroy氏・Ossanna氏らは、Multicsで得られた対話的な計算環境を失わないよう、代わりの仕組みを探し始めます。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            1969年には、ファイルシステムの基本設計が黒板とメモの上で進み、Thompson氏があまり使われていなかったPDP-7で実装を始めました。アセンブラが完成するとシステムは自分自身の上で開発できるようになり、1970年に入ってしばらくしてKernighan氏が「Unix」という名前を提案しています。
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            その後、特許部門の文書作成に使われたことで研究所内での評価が高まり、1972年にはパイプが加わりました。1973年にはカーネルがC言語で書き直され、Ritchie氏は「この時点でシステムは現在の形になった」と述べています。C言語そのものの成り立ちと規格の版は、当サイトの<Link href="/knowledge/c-language/" className="text-blue-600 hover:underline">C言語とは</Link>でご説明しています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            Ritchie氏とThompson氏の論文「The UNIX Time-Sharing System」は、1973年10月の学会発表を経て、1974年7月にCommunications of the ACMに掲載されました。Nokia Bell Labsが公開している電子版は1978年のBell System Technical Journal掲載の改訂版で、Unixを「最低40,000ドルのハードウェアで動き、主要なシステムソフトウェアに費やした工数は2人年未満」と説明しています。
          </p>
        </section>

        <section id="family" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">BSDとLinuxの系譜</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            現在使われている主なUNIX系OSと、その成り立ちを各プロジェクトの公式資料から整理しました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">OS</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">成り立ち（公式資料の記載の要約）</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">2026年11月27日時点の最新版</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 px-3 py-2">FreeBSD</td><td className="border border-slate-200 px-3 py-2">カリフォルニア大学バークレー校で開発されたUNIXであるBSDから派生。1993年初めに386BSDの修正パッチの取りまとめ役らが始めたプロジェクト</td><td className="border border-slate-200 px-3 py-2">15.1（2026年6月16日、サポート期限2027年3月31日）</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">NetBSD</td><td className="border border-slate-200 px-3 py-2">4.3BSDのNet/2と386BSDをもとに1993年に発足。後に4.4BSD Liteの変更も取り込む</td><td className="border border-slate-200 px-3 py-2">11.1（2026年11月2日）</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">OpenBSD</td><td className="border border-slate-200 px-3 py-2">4.4BSDにもとづくUNIX系OS。OpenSSHを開発しているプロジェクト</td><td className="border border-slate-200 px-3 py-2">8.0（2026年10月20日、61回目のリリース）</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">Linux</td><td className="border border-slate-200 px-3 py-2">Linus Torvalds氏が一から書いたUNIXのクローン。POSIXとSingle UNIX Specificationへの準拠を目指す</td><td className="border border-slate-200 px-3 py-2">安定版7.3.6（2026年11月23日）</td></tr>
                <tr><td className="border border-slate-200 px-3 py-2">macOS（Darwin）</td><td className="border border-slate-200 px-3 py-2">カーネルXNUは、カーネギーメロン大学のMachカーネルにFreeBSD由来の部品などを組み合わせたもの</td><td className="border border-slate-200 px-3 py-2">当サイト検証機は26.5.2</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">出典：FreeBSD「About FreeBSD」・FreeBSDハンドブック「A Brief History of FreeBSD」・「Release Information」、NetBSD「The History of the NetBSD Project」、OpenBSD公式トップページ、kernel.org「What is Linux?」・releases.json、Apple「xnu」README。要約は当サイトによるものです。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-4">
            FreeBSDハンドブックによると、ノベルとカリフォルニア大学バークレー校の訴訟の和解で、Net/2のうち3つのファイルがノベルの権利に属するとされ、FreeBSDは1994年7月末までにNet/2ベースの配布をやめることになりました。その後、4.4BSD-Liteをもとに作り直したFreeBSD 2.0を1994年12月に公開しています。NetBSDの沿革のページには、NetBSDがAppleのRhapsodyの土台の1つになったことも記載されています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            Linuxは、kernel.orgで公開されている最初の版の説明書（RELNOTES-0.01）で「i386以上のATマシン向けのフリーなminix風カーネル」と説明されており、著作権表示は「(C) 1991 Linus Torvalds」です。同じ文書には、minixやほかのソースのコードは使っていないと書かれています。BSDがUNIXのソースコードの流れを受け継いでいるのに対し、Linuxは互換を目指して新しく書かれたものという違いがあります。
          </p>
        </section>

        <section id="certification" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">UNIX認証とPOSIXの現状（当サイト集計）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            「UNIX」はThe Open Groupの登録商標です。The Open Groupは、Single UNIX Specificationに完全に準拠し認証を受けたシステムだけがUNIXの商標を使えると説明しています。2026年11月27日に、同社の「The Register of UNIX Certified Products」の規格別ページを開き、表示されている製品を当サイトで数えました。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">規格（Product Standard）</th>
                  <th className="border border-slate-200 px-3 py-2 text-right">表示件数</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">表示されている製品</th>
                </tr>
              </thead>
              <tbody>
                {certRows.map((r) => (
                  <tr key={r.standard}>
                    <td className="border border-slate-200 px-3 py-2">{r.standard}</td>
                    <td className="border border-slate-200 px-3 py-2 text-right">{r.count}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.products}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">集計方法：The Open Groupの規格別ページ（UNIX V7・UNIX 03・UNIX 98・UNIX 95）で、画面に表示される製品を当サイトで数えました。ページのHTMLの中でコメントとして非表示になっている製品（Oracle Solaris、Huawei EulerOSなど）は数えていません。確認日：2026年11月27日。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-4">
            表示されていた計8件は、IBM・ヒューレット・パッカード エンタープライズ・SCOの製品でした。会社別のページに載っている会社（6社）にもAppleは含まれておらず、この確認時点ではmacOSもLinuxディストリビューションも掲載されていませんでした。掲載内容は変わることがあるため、最新の状況は登録ページでご確認ください。
          </p>
          <p className="text-slate-600 leading-relaxed">
            UNIX系OSの共通仕様であるPOSIXの最新版は、POSIX.1-2024です。The Open Groupの公開版では、POSIX.1-2024はIEEE Std 1003.1-2024であると同時にThe Open Group Base Specifications Issue 8でもあり、シェルと共通のユーティリティを含む標準的なOSのインターフェースと環境を定めるものと説明されています。仕様の中では、POSIX.1-2024に準拠する実装は定数_POSIX_VERSIONの値を202405Lにすると定めています。
          </p>
        </section>

        <section id="mac" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">macOSでUNIXの名残を確かめる（当サイト実行結果）</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            2026年11月27日に、当サイトの検証用Mac（Apple シリコン搭載のMac mini）のターミナルで次のコマンドを実行しました。値の意味は、POSIXの仕様（unistd.hの項）の記載と照らし合わせています。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="border border-slate-200 px-3 py-2 text-left">実行したもの</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">結果</th>
                  <th className="border border-slate-200 px-3 py-2 text-left">意味（当サイトの整理）</th>
                </tr>
              </thead>
              <tbody>
                {macRows.map((r) => (
                  <tr key={r.cmd}>
                    <td className="border border-slate-200 px-3 py-2"><code>{r.cmd}</code></td>
                    <td className="border border-slate-200 px-3 py-2">{r.out}</td>
                    <td className="border border-slate-200 px-3 py-2">{r.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-2">実行環境：macOS 26.5.2（ビルド25F84）、Darwin 25.5.0、arm64。SDKはCommand Line Toolsに含まれるMacOSX.sdk。値の意味は、The Open Group Base Specifications Issue 6およびIssue 8のunistd.hの項によります。</p>
          <p className="text-slate-600 leading-relaxed mt-4 mb-4">
            結果から、このMacのOS基盤はDarwinであり、POSIXのC言語インターフェースについてはPOSIX.1-2001（Issue 6）の値を返すことが分かります。最新のPOSIX.1-2024（Issue 8、値は202405）に対応した値ではありません。uname コマンドのマニュアルにはPWB UNIXや4.4BSDに由来することが書かれており、日常的に使うコマンドにもUNIXとBSDの来歴が残っています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            なお、これらの値はUNIX系OSとしての性質を示すものであり、UNIX認証の有無を示すものではありません。認証の状況は前の節の登録製品一覧で確認する必要があります。お使いのMacやLinuxでも、同じコマンドで値を確かめることができます。
          </p>
        </section>

        <section id="related" className="mb-12 scroll-mt-20">
          <h2 className="text-xl font-bold text-slate-800 mb-4">C言語・Linux・転職の詳しい情報</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            本記事はUNIXというOSの歴史と現在の位置づけに絞ってご説明しました。関連する技術や転職の情報は、次の記事で扱っています。
          </p>
          <ul className="list-disc pl-6 text-slate-600 leading-7">
            <li>UNIXを書くために生まれた言語の成り立ちと規格：<Link href="/knowledge/c-language/" className="text-blue-600 hover:underline">C言語とは</Link></li>
            <li>Linuxのスキルを生かした転職（資格・年収）：<Link href="/skill/linux/" className="text-blue-600 hover:underline">Linuxスキルで転職するガイド</Link></li>
            <li>BSDやLinuxのライセンスの考え方：<Link href="/knowledge/oss/" className="text-blue-600 hover:underline">OSSとは</Link></li>
            <li>UNIX系OSで使われるスクリプト言語の例：<Link href="/knowledge/perl/" className="text-blue-600 hover:underline">Perlとは</Link></li>
            <li>サーバーの構築・運用を担う職種：<Link href="/knowledge/infra-engineer/" className="text-blue-600 hover:underline">インフラエンジニアの仕事内容</Link></li>
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
            <li>Dennis M. Ritchie「The Evolution of the Unix Time-sharing System」（Nokia Bell Labs 公開の電子版）：https://www.nokia.com/bell-labs/about/dennis-m-ritchie/hist.html</li>
            <li>D. M. Ritchie・K. Thompson「The UNIX Time-Sharing System」（BSTJ 1978年版の電子版、初出はCACM 17巻7号 1974年）：https://www.nokia.com/bell-labs/about/dennis-m-ritchie/cacm.html</li>
            <li>The Open Group「The Register of UNIX Certified Products」：https://www.opengroup.org/openbrand/register/</li>
            <li>同 UNIX V7：https://www.opengroup.org/openbrand/register/xv7.htm</li>
            <li>同 UNIX 03：https://www.opengroup.org/openbrand/register/xy.htm</li>
            <li>同 UNIX 98：https://www.opengroup.org/openbrand/register/xx.htm</li>
            <li>同 UNIX 95：https://www.opengroup.org/openbrand/register/xu.htm</li>
            <li>同 会社別：https://www.opengroup.org/openbrand/register/company.htm</li>
            <li>The Open Group Base Specifications Issue 8（POSIX.1-2024）：https://pubs.opengroup.org/onlinepubs/9799919799/</li>
            <li>同 unistd.h（Issue 8）：https://pubs.opengroup.org/onlinepubs/9799919799/basedefs/unistd.h.html</li>
            <li>The Open Group Base Specifications Issue 6 unistd.h：https://pubs.opengroup.org/onlinepubs/009695399/basedefs/unistd.h.html</li>
            <li>FreeBSD「About FreeBSD」：https://www.freebsd.org/about/</li>
            <li>FreeBSD ハンドブック「Introduction」（A Brief History of FreeBSD）：https://docs.freebsd.org/en/books/handbook/introduction/</li>
            <li>FreeBSD「Release Information」：https://www.freebsd.org/releases/</li>
            <li>NetBSD「The History of the NetBSD Project」：https://www.netbsd.org/about/history.html</li>
            <li>OpenBSD 公式サイト：https://www.openbsd.org/</li>
            <li>kernel.org「What is Linux?」（About）：https://www.kernel.org/category/about.html</li>
            <li>kernel.org releases.json：https://www.kernel.org/releases.json</li>
            <li>kernel.org「RELNOTES-0.01」：https://www.kernel.org/pub/linux/kernel/Historic/old-versions/RELNOTES-0.01</li>
            <li>Apple「xnu」README：https://github.com/apple-oss-distributions/xnu</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "C言語とは", href: "/knowledge/c-language/" },
              { name: "Linuxスキルで転職するガイド", href: "/skill/linux/" },
              { name: "OSSとは", href: "/knowledge/oss/" },
              { name: "インフラエンジニアの仕事内容", href: "/knowledge/infra-engineer/" },
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
