export default function Navbar() {
  return (
    <div className="flex place-items-center absolute w-[1322px] h-[91px] gap-[324px]">
      <div className="w-[187px] h-[58px] absolute top-[17px] left-[136px] gap-[10px] py-[13px] pl-0 pr-[35px]">
        <h3 className=" grid w-[152px] h-[32px] gap-[0px] absolute top-[13px] font-[700] text-2xl font-Montserrat leading-8 -tracking-tight text-left text-white font-Montserrat">
          BrandName
        </h3>
      </div>
      <div className="flex w-[815px] h-[58px] top-[16px] left-[364px] py-[3px] gap-0 absolute">
        <div>
          <ul className="flex justify-center gap-[21px] w-[275px] h-[24px] absolute top-[17px] text-white text-[14px] tracking-[0.2px] leading-[24px] font-[700] font-Montserrat">
            <li>Home</li>
            <li>Product</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex gap-[45px] w-[189px] h-[52px] absolute top-[3px] left-[626px] text-white text-[14px] font-[700] font-Montserrat">
          <button>Login</button>
          <button className="w-[110px] h-[52px] px-[15px] py-[25] bg-[#23A6F0] gap-[55px] rounded-tl-[5px] rounded-tr-[0px] rounded-br-[0px] rounded-bl-[5px] font-Montserrat">
            JOIN US
          </button>
        </div>
      </div>
    </div>
  );
}
