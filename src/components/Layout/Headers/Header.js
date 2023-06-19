import { logo } from "../../../assets";
import { MENU_CONSTANT } from "../../../constant/menuConstant";
import { BsFillPersonFill } from "react-icons/bs";
import { VscTriangleDown } from "react-icons/vsc";

const Header = () => {
  return (
    <div className="w-full bg-[#2e3f6e] h-[70px] flex flex-row items-center justify-between px-5">
      <div className="w-[20%]">
        <img src={logo} alt="siibeken" className="h-[80px] w-auto mt-[30px]" />
      </div>
      <div className="w-[70%] flex items-center justify-start gap-[40px]">
        {MENU_CONSTANT.map((item) => {
          return (
            <div>
              <div
                className={`${
                  item.subMenu && `peer`
                } text-white text-[14px] hover:text-[#4cb7fe] cursor-pointer flex flex-row items-center gap-[5px]`}
              >
                {item.title}
                {item.subMenu && <VscTriangleDown color={"#4cb7fe"} />}
              </div>
              {item.subMenu && (
                <div
                  class={`hidden peer-hover:flex hover:flex w-[200px] flex-col p-5 gap-[20px] bg-white drop-shadow-lg absolute rounded-lg`}
                >
                  {item.subMenu?.map((item) => {
                    console.log(item);
                    return (
                      <div className="text-[14px] text-[#4cb7fe] hover:text-[#2e3f6e] cursor-pointer">
                        {item.title}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="text-white text-[14px] hover:text-[#4cb7fe] cursor-pointer flex flex-row items-center gap-[5px]">
        <BsFillPersonFill color={"#4cb7fe"} className="text-[16px]" />
        Sign In
      </div>
    </div>
  );
};

export default Header;
