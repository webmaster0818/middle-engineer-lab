// テックゴー アフィリエイトCTA（もしもアフィリエイト・2026-07-06 施主提供コード）
// トラッキングコード（a_id/p_id/pc_id/pl_id・rel・referrerpolicy・attributionsrc・impression画像）は提供コードから一切改変しないこと。
const AFF_HTML = (text: string) => `<a href="//af.moshimo.com/af/c/click?a_id=5663317&p_id=6722&pc_id=19209&pl_id=85793" rel="nofollow" referrerpolicy="no-referrer-when-downgrade" attributionsrc class="techgo-cta-btn">${text}</a><img src="//i.moshimo.com/af/i/impression?a_id=5663317&p_id=6722&pc_id=19209&pl_id=85793" width="1" height="1" style="border:none;" loading="lazy">`;

export default function TechgoCta({
  heading = "テックゴーの無料キャリア面談を予約する",
  note = "完全無料（公式FAQ明記）・オンライン面談・平日夜間・土曜も対応",
  buttonText = "テックゴー公式サイトで無料面談を予約する",
}: {
  heading?: string;
  note?: string;
  buttonText?: string;
}) {
  return (
    <div className="bg-petrol-soft border border-slate-200 rounded-xl p-6 my-8 text-center">
      <p className="font-bold text-slate-800 mb-1">{heading}</p>
      <p className="text-xs text-slate-500 mb-4">{note}</p>
      <span dangerouslySetInnerHTML={{ __html: AFF_HTML(buttonText) }} />
      <p className="text-[10px] text-slate-400 mt-3">※広告リンク（アフィリエイト）を含みます</p>
    </div>
  );
}

export function TechgoCtaInline() {
  return (
    <span className="block mt-3">
      <span dangerouslySetInnerHTML={{ __html: AFF_HTML("無料キャリア面談を予約する（公式）") }} />
      <span className="block text-[10px] text-slate-400 mt-1">※広告リンク（アフィリエイト）を含みます</span>
    </span>
  );
}
