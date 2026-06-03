import { ChevronLeft } from "lucide-react";
import SampleImage from "../assets/examples/img.png";

export function Menu() {
  const price = 0xffffffffffffffffffffffffffffffffffffffffffffn;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center border-b border-b-gray-700">
        <span className="py-5 px-5 cursor-pointer">
          <ChevronLeft onClick={() => history.back()} />
        </span>
        <span className="py-5 px-5">주문내역</span>
      </div>
      <div className="pt-0.5">
        <img src={SampleImage} alt="sample" className="w-full h-60 object-cover" />
        <div className="flex flex-col px-5">
          <span className="pt-5 pb-3 font-bold text-2xl">이것은 메뉴 이름</span>
          <span className="pb-3 text-gray-400">이것은 메뉴의 설명인데, 소금과 간장을 곁들인 기가막힌 설명.</span>
          <div className="flex flex-row justify-between">
            <span className="font-bold text-2xl">{price.toLocaleString()}원</span>
            <div className="">수량 선택기</div>
          </div>
        </div>
      </div>
    </div>
  );
}
