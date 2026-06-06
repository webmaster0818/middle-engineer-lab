import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleJsonLd from "@/components/ArticleJsonLd";

export const metadata: Metadata = {
  title: "組込みエンジニアの転職ガイド【IoT/自動車】年収・求人・将来性",
  description:
    "組込みエンジニアの転職市場を徹底解説。平均年収500〜800万円、IoT・自動車・ロボティクス需要の背景、組込みエンジニアのキャリアパスとおすすめ転職エージェントを紹介します。",
};

const faqs = [
  {
    q: "組込みエンジニアの平均年収は？",
    a: "30代で500万〜800万円が相場です。自動車（ADAS/自動運転）領域では650万〜1,000万円、IoTプラットフォーム設計では600万〜900万円が目安です。C/C++に加えRust/Pythonのスキルがあるとさらに高くなります。",
  },
  {
    q: "組込みエンジニアの需要は今後も続く？",
    a: "続きます。自動車のEV化・ADAS・自動運転、IoTデバイスの普及、産業用ロボットの高度化により、組込みソフトウェアの需要は拡大の一途です。特に自動車業界のソフトウェア定義車両（SDV）の流れが需要を押し上げています。",
  },
  {
    q: "組込みエンジニアからWeb系に転向すべき？",
    a: "必ずしも転向する必要はありません。組込み領域の年収はWeb系と遜色なく、特に自動車・半導体領域では高年収が期待できます。ただし、IoTとWebの融合領域（クラウド連携、エッジAI等）を理解すると市場価値がさらに上がります。",
  },
  {
    q: "組込みの求人はどんな企業が多い？",
    a: "自動車メーカー・Tier1サプライヤー（デンソー、アイシン等）、半導体メーカー、家電メーカー、IoTスタートアップ、ロボティクス企業に多いです。自動車業界の求人が特に多く、年収も高い傾向です。",
  },
  {
    q: "組込みエンジニアに必要なスキルは？",
    a: "C/C++が基本で、RTOS（FreeRTOS、Zephyr等）、マイコン（ARM Cortex-M等）、通信プロトコル（CAN、SPI、I2C等）の知識が求められます。最近ではRust、Python（テスト自動化）、CI/CDの知識も評価されます。",
  },
  {
    q: "組込みエンジニアにおすすめの転職エージェントは？",
    a: "メイテックネクスト（組込み・製造業に特化）、レバテックキャリア（IT全般+組込み案件）、ビズリーチ（自動車・半導体のハイクラス求人）の3社がおすすめです。業界経験を活かした転職をサポートしてくれます。",
  },
];

export default function EmbeddedSkillPage() {
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
        title="組込みエンジニアの転職ガイド【IoT/自動車】年収・求人・将来性"
        description="組込みエンジニアの転職市場を徹底解説。平均年収500〜800万円、IoT・自動車・ロボティクス需要の背景、組込みエンジニアのキャリアパスとおすすめ転職エージェントを紹介します。"
        url="/skill/embedded/"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "スキル別転職ガイド", href: "/skill/" },
          { name: "組込みエンジニア" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          組込みエンジニアの転職ガイド【IoT/自動車】年収・求人・将来性
        </h1>
        <p className="text-slate-500 text-sm mb-8">
          最終更新: 2026年6月 | 組込みエンジニアの転職市場を徹底分析
        </p>

        <section className="mb-10">
          <p className="text-slate-600 leading-relaxed mb-4">
            組込みエンジニアは、自動車、IoTデバイス、家電製品、産業用ロボットなどに搭載されるソフトウェアを開発する専門職です。自動運転、EV化、IoTの普及により、組込みソフトウェアの重要性は年々高まっています。
          </p>
          <p className="text-slate-600 leading-relaxed">
            本記事では、組込みエンジニアの年収、求人動向、将来性、転職で成功するためのポイントを解説します。
          </p>
        </section>

        {/* 市場データ */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">組込みエンジニアの市場データ</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">500〜800万</p>
                <p className="text-sm text-slate-600 mt-1">30代組込みエンジニアの年収相場</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">+28%</p>
                <p className="text-sm text-slate-600 mt-1">自動車ソフトウェア求人の前年比増加率</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-600">2.8倍</p>
                <p className="text-sm text-slate-600 mt-1">組込み求人の求人倍率（1人あたり）</p>
              </div>
            </div>
          </div>
        </section>

        {/* 組込みが求められる理由 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">組込みエンジニアの需要が高い理由</h2>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">自動車のSDV化（ソフトウェア定義車両）</h3>
              <p className="text-sm text-blue-700">
                自動車はハードウェアからソフトウェア中心の製品へと変革しています。ADAS、自動運転、OTAアップデートなど、1台の車に搭載されるソフトウェアコードは1億行以上に達しており、自動車ソフトウェアエンジニアの需要は急増しています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">IoTデバイスの爆発的普及</h3>
              <p className="text-sm text-blue-700">
                スマートホーム、ウェアラブルデバイス、産業用IoTセンサーなど、ネットワークに接続される組込みデバイスの数は急増しています。省電力設計、セキュリティ、クラウド連携の知識を持つ組込みエンジニアの価値が高まっています。
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="font-bold text-blue-800 mb-2">エッジAI/エッジコンピューティングの台頭</h3>
              <p className="text-sm text-blue-700">
                AIをクラウドではなくデバイス上で実行するエッジAIの需要が拡大中です。TinyML、NVIDIA Jetsonなど、組込み環境でのAI推論を実装できるエンジニアは希少で、高い市場価値を持っています。
              </p>
            </div>
          </div>
        </section>

        {/* キャリアパス */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">組込みエンジニアのキャリアパス</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { role: "自動車ソフトウェアエンジニア", range: "600万〜1,000万円", note: "ADAS/自動運転/車載OS開発" },
              { role: "IoTエンジニア", range: "550万〜800万円", note: "IoTデバイス設計、クラウド連携" },
              { role: "エッジAIエンジニア", range: "650万〜950万円", note: "組込みAI、TinyML、画像認識" },
            ].map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-lg p-4">
                <h3 className="font-bold text-slate-800 mb-1">{item.role}</h3>
                <p className="text-blue-600 font-bold mb-1">{item.range}</p>
                <p className="text-xs text-slate-500">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 転職のポイント */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-slate-800 mb-4">組込みエンジニア転職の成功ポイント</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "AUTOSAR/車載ソフトの知識を身につける", desc: "自動車業界への転職を目指すなら、AUTOSAR（車載ソフトウェアアーキテクチャ）やISO 26262（機能安全）の知識が強力な武器になります。自動車OEM/Tier1から高い評価を受けられます。" },
              { num: "2", title: "Rust/Pythonなどモダン言語も習得する", desc: "C/C++に加えて、Rustによる安全な組込みプログラミングやPythonによるテスト自動化のスキルがあると、モダンな開発チームで重宝されます。" },
              { num: "3", title: "クラウド連携・通信技術の知識を持つ", desc: "IoT時代の組込みエンジニアには、MQTT、BLE、Wi-Fi、5G等の通信技術やAWS IoT、Azure IoTなどクラウドサービスとの連携知識が求められます。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start border border-slate-200 rounded-lg p-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
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
          <h2 className="text-xl font-bold mb-3">組込みのスキルを活かした転職を無料で相談</h2>
          <p className="text-blue-100 text-sm mb-4">
            組込み・IoT求人に精通したIT特化型エージェントに登録して、年収アップの可能性を探りましょう。
          </p>
          <Link
            href="/#ranking"
            className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
          >
            おすすめエージェントランキングを見る
          </Link>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-800 mb-4">関連記事</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "Rust転職ガイド", href: "/skill/rust/" },
              { name: "ネットワークエンジニア転職ガイド", href: "/skill/network/" },
              { name: "スキル別転職ガイド一覧", href: "/skill/" },
              { name: "ミドルエンジニア転職ラボTOP", href: "/" },
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
