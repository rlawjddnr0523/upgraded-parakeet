import { BellRing, Megaphone } from "lucide-react";

interface storeElements {
  name: string;
  announcement: string;
  tableNumber: number;
}

// prettier-ignore
{/* TODO: 매개변수 타입 수정하기 */}
export function TopNavigation({
  name,
  announcement,
  tableNumber,
}: storeElements) {
  return (
    <header className="w-full">
      <div className="flex justify-between items-center py-3 px-5">
        <div className="flex">
          <div className="">
            <BellRing />
          </div>
          <div className="pl-1">직원호출</div>
        </div>
        <div className="">주문내역</div>
      </div>
      <div className="flex justify-between w-full items-center pb-3 px-5">
        <div className="font-bold text-2xl">{name}</div>
        <div className="text-gray-400 text-sm">테이블 번호: {tableNumber}</div>
      </div>

      {/* TODO: 실시간 접속자 확인 */}
      <div className="pb-3 px-5">
        멤버도 QR 찍고 <span className="text-blue-500">함께 주문</span>
        해요
      </div>
      <div className="px-5 pb-3">
        <div className="flex items-center h-10 bg-gray-700 rounded-2xl p-2">
          <Megaphone size={20} />
          {/* 공지사항 */}
          <span className="ml-1 text-sm">{announcement}</span>
        </div>
      </div>
    </header>
  );
}
