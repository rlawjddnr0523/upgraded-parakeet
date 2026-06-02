import { BellRing } from 'lucide-react';

export function TopNavigation() {
    return (
        <header>
            <div className="flex">
                <BellRing />
                직원 호출
            </div>
            <div>
                주문 내역
            </div>
            <div>
                00 주점
            </div>
            <div>
                멤버도 QR 찍고 함께 주문해요!
            </div>
            <div>
                {/* 공지사항 */}
            </div>
        </header>
    )
}
