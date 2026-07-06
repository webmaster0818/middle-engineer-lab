import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  alternates: { canonical: "/terms/" },
  title: "利用規約",
  description:
    "ミドルエンジニア転職ラボの利用規約です。免責事項、著作権、リンクポリシー等について定めています。",
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "利用規約" },
        ]}
      />

      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">
          利用規約
        </h1>
        <p className="text-slate-500 text-sm mb-8">最終更新日: 2026年6月5日</p>

        <div className="prose-slate text-sm leading-relaxed space-y-8">
          <section>
            <h2 className="text-lg font-bold text-slate-800 mb-3">第1条（適用）</h2>
            <p className="text-slate-600 mb-2">
              本利用規約（以下「本規約」）は、「ミドルエンジニア転職ラボ」（以下「当サイト」）の利用に関する条件を定めるものです。当サイトを利用されるすべての方（以下「利用者」）は、本規約に同意したものとみなします。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-800 mb-3">第2条（免責事項）</h2>
            <div className="text-slate-600 space-y-2">
              <p>
                1. 当サイトに掲載されている情報は、可能な限り正確な情報を提供するよう努めておりますが、その正確性、完全性、有用性等について保証するものではありません。
              </p>
              <p>
                2. 当サイトの情報を利用したことにより、利用者またはその他の第三者に生じた損害について、当サイト運営者は一切の責任を負いません。
              </p>
              <p>
                3. 当サイトからリンクされている外部サイトの内容について、当サイト運営者は一切の責任を負いません。
              </p>
              <p>
                4. 転職エージェントのサービス内容、料金、対応等は各社の方針により変更される場合があります。最新情報は各公式サイトにてご確認ください。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-800 mb-3">第3条（著作権）</h2>
            <div className="text-slate-600 space-y-2">
              <p>
                1. 当サイトに掲載されているすべてのコンテンツ（文章、画像、データ、デザイン等）の著作権は、当サイト運営者または正当な権利を有する第三者に帰属します。
              </p>
              <p>
                2. 利用者は、当サイトのコンテンツを個人的な情報収集の範囲で利用することができますが、以下の行為は禁止します。
              </p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>当サイトのコンテンツを無断で転載・複製・改変する行為</li>
                <li>当サイトのコンテンツを商業目的で利用する行為</li>
                <li>当サイトのコンテンツを自動的にスクレイピング・収集する行為</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-800 mb-3">第4条（リンクポリシー）</h2>
            <div className="text-slate-600 space-y-2">
              <p>
                1. 当サイトへのリンクは原則として自由です。ただし、以下の場合はリンクをお断りします。
              </p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>当サイトの信用を毀損するおそれがあるサイトからのリンク</li>
                <li>違法または公序良俗に反する内容を含むサイトからのリンク</li>
                <li>フレーム内リンク等、当サイトのコンテンツが第三者のものであるかのような誤認を生じさせるリンク</li>
              </ul>
              <p>
                2. 当サイト内には外部サイトへのリンク（アフィリエイトリンクを含む）が含まれています。これらのリンク先の内容・サービスについて当サイトは保証しません。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-800 mb-3">第5条（アフィリエイトプログラム）</h2>
            <div className="text-slate-600 space-y-2">
              <p>
                当サイトは、アフィリエイトプログラムに参加しています。当サイト内のリンクを経由して商品・サービスの申し込みがあった場合、当サイト運営者が紹介報酬を受け取ることがあります。
              </p>
              <p>
                アフィリエイト報酬の有無が、当サイトのランキングや評価に影響を与えることはありません。詳しくは<Link href="/editorial/" className="text-petrol hover:underline">記事制作ポリシー</Link>をご覧ください。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-800 mb-3">第6条（禁止事項）</h2>
            <div className="text-slate-600 space-y-2">
              <p>利用者は、当サイトの利用にあたり、以下の行為を行ってはなりません。</p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>当サイトの運営を妨害する行為</li>
                <li>他の利用者または第三者の権利を侵害する行為</li>
                <li>不正アクセス等、サーバーに過度の負荷をかける行為</li>
                <li>法令または公序良俗に違反する行為</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-800 mb-3">第7条（規約の変更）</h2>
            <p className="text-slate-600">
              当サイト運営者は、必要と判断した場合、利用者への事前通知なく本規約を変更することがあります。変更後の規約は、当サイトに掲載された時点から効力を生じるものとします。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-800 mb-3">第8条（準拠法・管轄裁判所）</h2>
            <p className="text-slate-600">
              本規約の解釈にあたっては日本法を準拠法とし、当サイトに関する紛争については東京地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
