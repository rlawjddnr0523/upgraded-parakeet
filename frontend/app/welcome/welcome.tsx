import { TopNavigation } from "~/components/topNavigation";
import { MainContents } from "~/components/mainContents";

export function Welcome() {
  return (
    <div className="flex flex-col justify-center items-center">
      <TopNavigation
        name={"00 주점"}
        announcement={"1인 1메뉴 주문해주세요"}
        tableNumber={1}
      />
      <MainContents />
    </div>
  );
}
