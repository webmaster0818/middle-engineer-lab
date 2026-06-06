import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "ミドルエンジニア転職ラボのプライバシーポリシーです。Cookie使用、Google Analytics、アフィリエイトリンクの開示、個人情報の取扱いについて説明しています。",
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "プライバシーポリシー" },
        ]}
      />

      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">
          プライバシーポリシー
        </h1>
        <p className="text-slate-500 text-sm mb-8">最終更新日: 2026年6月5日</p>

        <div className="prose-slate text-sm leading-relaxed space-y-8">
          <section>
            <h2 className="text-lg font-bold text-slate-800 mb-3">1. 基本方針</h2>
            <p className="text-slate-600">
              「ミドルエンジニア転職ラボ」（以下「当サイト」）は、利用者のプライバシーを尊重し、個人情報の保護に努めます。本プライバシーポリシーでは、当サイトにおける個人情報の取扱いについて説明します。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-800 mb-3">2. 収集する情報</h2>
            <div className="text-slate-600 space-y-3">
              <p>当サイトでは、以下の情報を自動的に収集する場合があります。</p>
              <div>
                <h3 className="font-bold text-slate-700 mb-1">アクセスログ情報</h3>
                <ul className="list-disc list-inside pl-4 space-y-1">
                  <li>IPアドレス</li>
                  <li>ブラウザの種類・バージョン</li>
                  <li>アクセス日時</li>
                  <li>参照元URL（リファラー）</li>
                  <li>閲覧したページのURL</li>
                </ul>
              </div>
              <p>
                これらの情報は個人を特定するものではなく、サイトの改善やアクセス分析の目的で利用します。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-800 mb-3">3. Cookieの使用</h2>
            <div className="text-slate-600 space-y-2">
              <p>当サイトでは、以下の目的でCookieを使用しています。</p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>サイトの利便性向上</li>
                <li>アクセス解析（Google Analytics）</li>
                <li>広告配信の最適化</li>
              </ul>
              <p>
                利用者はブラウザの設定によりCookieの受け入れを拒否することができますが、その場合、当サイトの一部機能が利用できなくなる場合があります。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-800 mb-3">4. Google Analyticsの利用</h2>
            <div className="text-slate-600 space-y-2">
              <p>
                当サイトでは、Googleが提供するアクセス解析ツール「Google Analytics」を使用しています。Google AnalyticsはCookieを使用してデータを収集しますが、個人を特定する情報は含まれません。
              </p>
              <p>
                Google Analyticsの利用規約については、<a href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google アナリティクス利用規約</a>をご確認ください。
              </p>
              <p>
                Google Analyticsのデータ収集を無効にしたい場合は、<a href="https://tools.google.com/dlpage/gaoptout?hl=ja" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google アナリティクス オプトアウト アドオン</a>をご利用ください。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-800 mb-3">5. アフィリエイトプログラム</h2>
            <div className="text-slate-600 space-y-2">
              <p>
                当サイトは、各種アフィリエイトプログラムに参加しています。利用者が当サイト内のリンクを経由して外部サイトにアクセスした場合、Cookie等によりトラッキングが行われ、成果報酬の計測が行われることがあります。
              </p>
              <p>
                アフィリエイトリンクであることは、当サイト内で適切に開示しています。アフィリエイト報酬がランキングや評価に影響を与えることはありません。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-800 mb-3">6. 個人情報の取扱い</h2>
            <div className="text-slate-600 space-y-2">
              <p>
                当サイトでは、お問い合わせフォーム等を通じて利用者の個人情報（氏名、メールアドレス等）をお預かりする場合があります。取得した個人情報は以下の目的にのみ使用します。
              </p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>お問い合わせへの回答</li>
                <li>サービスの改善に必要な統計データの作成</li>
              </ul>
              <p>
                取得した個人情報は、法令に基づく場合を除き、利用者の同意なく第三者に開示・提供することはありません。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-800 mb-3">7. 個人情報の管理</h2>
            <p className="text-slate-600">
              当サイト運営者は、取得した個人情報の漏洩、滅失、毀損を防止するため、適切なセキュリティ対策を講じます。個人情報の保管期間は必要最小限とし、利用目的が達成された後は速やかに削除します。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-800 mb-3">8. 個人情報の開示・訂正・削除</h2>
            <p className="text-slate-600">
              利用者は、当サイトが保有する自身の個人情報について、開示・訂正・削除を求めることができます。ご希望の場合は、当サイトのお問い合わせフォームよりご連絡ください。本人確認の上、合理的な期間内に対応いたします。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-800 mb-3">9. ポリシーの変更</h2>
            <p className="text-slate-600">
              当サイト運営者は、必要に応じて本プライバシーポリシーを変更することがあります。変更後のポリシーは、当サイトに掲載された時点から効力を生じるものとします。
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
