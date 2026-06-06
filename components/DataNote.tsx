import Link from "next/link";

type DataNoteProps = {
  /** データ調査時点（例: "2026年6月"） */
  surveyedAt: string;
  /** 主要な出典名のリスト（例: ["レバテックキャリア公式サイト", "厚生労働省 job tag"]） */
  sources?: string[];
};

/**
 * 記事冒頭・データ表直下に置く「調査時点・出典」表記。
 * E-E-A-T対策: 数値データの鮮度と出典の透明性を明示する。
 */
export default function DataNote({ surveyedAt, sources }: DataNoteProps) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 mb-8 text-xs text-slate-500 leading-relaxed">
      <p>
        <span className="font-medium text-slate-600">データ調査時点: {surveyedAt}</span>
        {sources && sources.length > 0 && (
          <span> ｜ 出典: {sources.join("、")}</span>
        )}
      </p>
      <p className="mt-1">
        求人数・年収などの数値は調査時点の公開情報に基づきます。最新の情報は各サービスの公式サイトをご確認ください。
        当サイトの評価基準は<Link href="/editorial/" className="text-blue-600 hover:underline">記事制作ポリシー</Link>をご覧ください。
      </p>
    </div>
  );
}
