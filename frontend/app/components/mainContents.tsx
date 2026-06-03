import { useEffect, useState } from "react";
import categoryExample from "../assets/examples/categoryExample.json";
import menuExample from "../assets/examples/menuExample.json";
import SampleImage from "../assets/examples/img.png";
import { useNavigate, useParams, useSearchParams } from "react-router";

export function MainContents() {

  const navigate = useNavigate();

  const { sid, mid } = useParams();

  const [searchParams] = useSearchParams();

  const tid = searchParams.get("tid");

  const [activeTab, setActiveTab] = useState<number>(
    categoryExample.categories[0].id,
  );

  const tabs = categoryExample.categories;
  const menus = menuExample.menu;

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const ratios = new Map<number, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = Number(entry.target.id.replace("section-", ""));

          ratios.set(id, entry.intersectionRatio);
        });

        let maxId = 0;
        let maxRatio = 0;

        ratios.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            maxId = id;
          }
        });

        setActiveTab(maxId);
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    // Tab Section
    <div className="w-full">
      <div className="flex pr-12 w-full sticky z-50 top-0 backdrop-blur-md">
        <div className="pl-3.5 w-full">
          <ul
            className="flex overflow-x-auto whitespace-nowrap scrollbar-none"
            role="tablist"
          >
            {tabs.map((tab) => (
              <li
                key={tab.id}
                role="tab"
                onClick={() => {
                  document.getElementById(`section-${tab.id}`)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className={`shrink-0 px-3 cursor-pointer ${
                  activeTab === tab.id
                    ? "font-bold text-white"
                    : "text-gray-500"
                }`}
              >
                <div className="pt-5 pb-5.5">
                  <span>{tab.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* TODO: 가능하다면 섹션 인디케이터 만들기 */}
      </div>
      {/* Menu Section */}
      <div className="bg-gray-900">
        {tabs.map((tab) => {
          const categoryMenus = menus.filter(
            (menu) => menu.category === tab.name,
          );

          return (
            <section
              key={tab.id}
              id={`section-${tab.id}`}
              className="mb-5 scroll-mt-15 bg-gray-950 px-5"
            >
              {tab.id !== 0 ? (
                <h2 className="text-xl font-bold pt-5">{tab.name}</h2>
              ) : (
                <div className=""></div>
              )}

              {categoryMenus.map((menu) => (
                <div
                  key={menu.id}
                  className="border-b border-b-gray-900 py-4 flex justify-between items-center gap-3 cursor-pointer"
                  onClick={() => {
                    navigate(`${menu.id.toString()}?tid=${tid}`);
                  }}
                >
                  <div className="">
                    {menu.menuSpecification !== "없음" && (
                      <div className="text-xs rounded-2xl bg-blue-500 w-max mb-2">
                        <div className="px-2 py-1">
                          {menu.menuSpecification}
                        </div>
                      </div>
                    )}
                    <div className="font-semibold text-lg">{menu.name}</div>

                    <div className="text-sm py-1">
                      {menu.price.toLocaleString()}원
                    </div>

                    <div className="text-sm text-gray-500 pb-2">
                      {menu.description}
                    </div>
                  </div>
                  <div className="shrink-0">
                    <img
                      src={SampleImage}
                      alt="sampleImage"
                      width="100"
                      height="100"
                      className="w-25 h-25 rounded-2xl object-cover"
                    />
                  </div>
                </div>
              ))}
            </section>
          );
        })}
      </div>
    </div>
  );
}
