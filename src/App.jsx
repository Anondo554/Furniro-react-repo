import "./App.css";
import Logo from "./assets/images/Logo.png";
import Flex from "./components/Flex";
import Image from "./components/Images";
import Droing from "./assets/images/Droing.png";
import Living from "./assets/images/LIVING.png";
import Bedroom from "./assets/images/Bedroom.png";
import Tool from "./assets/images/image 1 (1).png";
import { FaRegUser } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { GrShareOption } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdCompareArrows } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import Menu from "./components/Menu";
import Container from "./components/Countainer";
import Heading from "./components/Hedding";
import Button from "./components/Button";

function App() {
  return (
    <>
      <section className="font-pop">
        {/* navbar part start */}
        <Container cla>
          <div className="py-[40px] ">
            <Flex className={"justify-between items-center"}>
              <div>
                <Image src={Logo} alt={Logo} />
              </div>
              <div>
                <Flex
                  className={
                    "space-x-[70px] text-[16px] font-medium font-pop mt-1"
                  }
                >
                  <Menu mText={"Home"} />
                  <Menu mText={"Shop"} />
                  <Menu mText={"About"} />
                  <Menu mText={"Contact"} />
                </Flex>
              </div>
              <div>
                <Flex className={"text-[25px] space-x-[30px]"}>
                  <FaRegUser />
                  <IoSearchOutline />
                  <FaRegHeart />
                  <MdOutlineShoppingCart />
                </Flex>
              </div>
            </Flex>
          </div>
        </Container>
        {/* navbar part end  */}
      </section>
      {/* banner part start  */}
      <section className="font-pop">
        <div className="bg-banner bg-cover bg-center bg-no-repeat py-[150px] ">
          <Container>
            <div className=" w-[643px] bg-[#FFF3E3] p-[40px] ml-auto mt-5">
              <div>
                <Heading text={"New Arrival"} as={"p"} />
                <Heading
                  text={"Discover Our New Collection"}
                  as={"h1"}
                  className={
                    "pb-[20px] pr-[154px] text-[52px] leading-[64px] font-bold text-[#B88E2F]  "
                  }
                />
                <Heading
                  text={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
                  }
                  as={"p"}
                  className={"pr-[36px] pb-[50px] text-[18px] font-medium "}
                />
                <Button
                  btnText={"BUY Now"}
                  className={
                    "py-[25px] px-[70px] bg-[#B88E2F] text-[16px] font-bold text-white "
                  }
                />
              </div>
            </div>
          </Container>
        </div>
      </section>
      {/* banner part end  */}

      {/* room part start  */}
      <section className="font-pop">
        <div className="py-[65px] text-center">
          <Heading
            text={"Browse The Range"}
            as={"h3"}
            className={"text-[32px] font-bold text[#000000] pb-2 "}
          />
          <Heading
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            as={"p"}
            className={"text-[20px] text-[#666666]"}
          />
        </div>
        <Container>
          <Flex className={"justify-center space-x-7"}>
            <div>
              <Image src={Droing} alt={Droing} />
              <Heading
                text={"Dining"}
                as={"h4"}
                className={
                  "text-[24px] text-[#333333] font-semibold text-center mt-4 "
                }
              />
            </div>
            <div>
              <Image src={Living} alt={Living} />
              <Heading
                text={"Living"}
                as={"h4"}
                className={
                  "text-[24px] text-[#333333] font-semibold text-center mt-4 "
                }
              />
            </div>
            <div>
              <Image src={Bedroom} alt={Bedroom} />
              <Heading
                text={"Bedroom"}
                as={"h4"}
                className={
                  "text-[24px] text-[#333333] font-semibold text-center mt-4 "
                }
              />
            </div>
          </Flex>
        </Container>
      </section>
      {/* room part end  */}

      {/* prodect part start  */}
      <section className="font-pop">
        <div className="pt-[70px] pb--[50px] ">
          <Heading
            text={"Browse The Range"}
            as={"h3"}
            className={"text-[40px] font-bold text-[#3A3A3A] pb-2 text-center "}
          />
        </div>

        <Container className={"font-pop"}>
          <Flex className={'justify-center'}>
            <div  className="grid grid-cols-4 gap-9">
              <div className="relative productItem ">
                <div>
                  <Image src={Tool} alt={Tool} />
                  <div className="absolute top-[23px] right-[23px] w-[48px] h-[48px] rounded-[50%] bg-red-500 text-center">
                    <Heading
                      text={"-35%"}
                      as={"h3"}
                      className={" mt-[12px] "}
                    />
                  </div>
                </div>

                <div className="bg-[#F4F5F7] p-[20px]">
                  <Heading
                    text={"Syltherine"}
                    as={"h3"}
                    className={"text-[24px] font-semibold text-[#3A3A3A]  "}
                  />
                  <Heading
                    text={"Stylish cafe chair"}
                    as={"p"}
                    className={"text-[16px] font-medium text-[#898989]"}
                  />
                  <h4 className="text-[20px] font-semibold text-[#3A3A3A] ">
                    Rp 2.500.000{" "}
                    <span>
                      {" "}
                      <del className="text-[16px] font-semibold text-[#B0B0B0]">
                        Rp 3.500.000
                      </del>
                    </span>
                  </h4>
                </div>
                <div className="productOverly top-0 left-0 absolute w-full h-full bg-customCyan ">
                  <div className="text-center pt-[150px]">
                    <Button
                      btnText={"Add to cart"}
                      className={
                        "py-[12px] px-[50px] bg-[#FFFFFF] text-[#B88E2F] font-semibold text-[16px] "
                      }
                    />
                    <div className="font-pop">
                      <Flex className={"justify-center space-x-4 mt-[24px]"}>
                        <div className="text-[16px] font-semibold text-[#ffffff] ">
                          <Flex>
                            <GrShareOption className="mt-1 " />
                            <Heading text={"Share"} as={"p"} />
                          </Flex>
                        </div>
                        <div className="text-[16px] font-semibold text-[#ffffff] ">
                          <Flex>
                            <MdCompareArrows className=" mt-1 " />
                            <Heading text={"Compare"} as={"p"} />
                          </Flex>
                        </div>
                        <div className="text-[16px] font-semibold text-[#ffffff] ">
                          <Flex>
                            <FiHeart className="mt-1 text-xl " />
                            <Heading text={"Like"} as={"p"} />
                          </Flex>
                        </div>
                      </Flex>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative productItem">
                <div>
                  <Image src={Tool} alt={Tool} />
                  <div className="absolute top-[23px] right-[23px] w-[48px] h-[48px] rounded-[50%] bg-red-500 text-center">
                    <Heading
                      text={"-35%"}
                      as={"h3"}
                      className={" mt-[12px] "}
                    />
                  </div>
                </div>

                <div className="bg-[#F4F5F7] p-[20px]">
                  <Heading
                    text={"Syltherine"}
                    as={"h3"}
                    className={"text-[24px] font-semibold text-[#3A3A3A]  "}
                  />
                  <Heading
                    text={"Stylish cafe chair"}
                    as={"p"}
                    className={"text-[16px] font-medium text-[#898989]"}
                  />
                  <h4 className="text-[20px] font-semibold text-[#3A3A3A] ">
                    Rp 2.500.000{" "}
                    <span>
                      {" "}
                      <del className="text-[16px] font-semibold text-[#B0B0B0]">
                        Rp 3.500.000
                      </del>
                    </span>
                  </h4>
                </div>
                <div className="productOverly top-0 left-0 absolute w-full h-full bg-customCyan ">
                  <div className="text-center pt-[150px]">
                    <Button
                      btnText={"Add to cart"}
                      className={
                        "py-[12px] px-[50px] bg-[#FFFFFF] text-[#B88E2F] font-semibold text-[16px] "
                      }
                    />
                    <div className="font-pop">
                      <Flex className={"justify-center space-x-4 mt-[24px]"}>
                        <div className="text-[16px] font-semibold text-[#ffffff] ">
                          <Flex>
                            <GrShareOption className="mt-1 " />
                            <Heading text={"Share"} as={"p"} />
                          </Flex>
                        </div>
                        <div className="text-[16px] font-semibold text-[#ffffff] ">
                          <Flex>
                            <MdCompareArrows className=" mt-1 " />
                            <Heading text={"Compare"} as={"p"} />
                          </Flex>
                        </div>
                        <div className="text-[16px] font-semibold text-[#ffffff] ">
                          <Flex>
                            <FiHeart className="mt-1 text-xl " />
                            <Heading text={"Like"} as={"p"} />
                          </Flex>
                        </div>
                      </Flex>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative productItem">
                <div>
                  <Image src={Tool} alt={Tool} />
                  <div className="absolute top-[23px] right-[23px] w-[48px] h-[48px] rounded-[50%] bg-red-500 text-center">
                    <Heading
                      text={"-35%"}
                      as={"h3"}
                      className={" mt-[12px] "}
                    />
                  </div>
                </div>

                <div className="bg-[#F4F5F7] p-[20px]">
                  <Heading
                    text={"Syltherine"}
                    as={"h3"}
                    className={"text-[24px] font-semibold text-[#3A3A3A]  "}
                  />
                  <Heading
                    text={"Stylish cafe chair"}
                    as={"p"}
                    className={"text-[16px] font-medium text-[#898989]"}
                  />
                  <h4 className="text-[20px] font-semibold text-[#3A3A3A] ">
                    Rp 2.500.000{" "}
                    <span>
                      {" "}
                      <del className="text-[16px] font-semibold text-[#B0B0B0]">
                        Rp 3.500.000
                      </del>
                    </span>
                  </h4>
                </div>
                <div className="productOverly top-0 left-0 absolute w-full h-full bg-customCyan ">
                  <div className="text-center pt-[150px]">
                    <Button
                      btnText={"Add to cart"}
                      className={
                        "py-[12px] px-[50px] bg-[#FFFFFF] text-[#B88E2F] font-semibold text-[16px] "
                      }
                    />
                    <div className="font-pop">
                      <Flex className={"justify-center space-x-4 mt-[24px]"}>
                        <div className="text-[16px] font-semibold text-[#ffffff] ">
                          <Flex>
                            <GrShareOption className="mt-1 " />
                            <Heading text={"Share"} as={"p"} />
                          </Flex>
                        </div>
                        <div className="text-[16px] font-semibold text-[#ffffff] ">
                          <Flex>
                            <MdCompareArrows className=" mt-1 " />
                            <Heading text={"Compare"} as={"p"} />
                          </Flex>
                        </div>
                        <div className="text-[16px] font-semibold text-[#ffffff] ">
                          <Flex>
                            <FiHeart className="mt-1 text-xl " />
                            <Heading text={"Like"} as={"p"} />
                          </Flex>
                        </div>
                      </Flex>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative productItem">
                <div>
                  <Image src={Tool} alt={Tool} />
                  <div className="absolute top-[23px] right-[23px] w-[48px] h-[48px] rounded-[50%] bg-red-500 text-center">
                    <Heading
                      text={"-35%"}
                      as={"h3"}
                      className={" mt-[12px] "}
                    />
                  </div>
                </div>

                <div className="bg-[#F4F5F7] p-[20px]">
                  <Heading
                    text={"Syltherine"}
                    as={"h3"}
                    className={"text-[24px] font-semibold text-[#3A3A3A]  "}
                  />
                  <Heading
                    text={"Stylish cafe chair"}
                    as={"p"}
                    className={"text-[16px] font-medium text-[#898989]"}
                  />
                  <h4 className="text-[20px] font-semibold text-[#3A3A3A] ">
                    Rp 2.500.000{" "}
                    <span>
                      {" "}
                      <del className="text-[16px] font-semibold text-[#B0B0B0]">
                        Rp 3.500.000
                      </del>
                    </span>
                  </h4>
                </div>
                <div className="productOverly top-0 left-0 absolute w-full h-full bg-customCyan ">
                  <div className="text-center pt-[150px]">
                    <Button
                      btnText={"Add to cart"}
                      className={
                        "py-[12px] px-[50px] bg-[#FFFFFF] text-[#B88E2F] font-semibold text-[16px] "
                      }
                    />
                    <div className="font-pop">
                      <Flex className={"justify-center space-x-4 mt-[24px]"}>
                        <div className="text-[16px] font-semibold text-[#ffffff] ">
                          <Flex>
                            <GrShareOption className="mt-1 " />
                            <Heading text={"Share"} as={"p"} />
                          </Flex>
                        </div>
                        <div className="text-[16px] font-semibold text-[#ffffff] ">
                          <Flex>
                            <MdCompareArrows className=" mt-1 " />
                            <Heading text={"Compare"} as={"p"} />
                          </Flex>
                        </div>
                        <div className="text-[16px] font-semibold text-[#ffffff] ">
                          <Flex>
                            <FiHeart className="mt-1 text-xl " />
                            <Heading text={"Like"} as={"p"} />
                          </Flex>
                        </div>
                      </Flex>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative productItem">
                <div>
                  <Image src={Tool} alt={Tool} />
                  <div className="absolute top-[23px] right-[23px] w-[48px] h-[48px] rounded-[50%] bg-red-500 text-center">
                    <Heading
                      text={"-35%"}
                      as={"h3"}
                      className={" mt-[12px] "}
                    />
                  </div>
                </div>

                <div className="bg-[#F4F5F7] p-[20px]">
                  <Heading
                    text={"Syltherine"}
                    as={"h3"}
                    className={"text-[24px] font-semibold text-[#3A3A3A]  "}
                  />
                  <Heading
                    text={"Stylish cafe chair"}
                    as={"p"}
                    className={"text-[16px] font-medium text-[#898989]"}
                  />
                  <h4 className="text-[20px] font-semibold text-[#3A3A3A] ">
                    Rp 2.500.000{" "}
                    <span>
                      {" "}
                      <del className="text-[16px] font-semibold text-[#B0B0B0]">
                        Rp 3.500.000
                      </del>
                    </span>
                  </h4>
                </div>
                <div className="productOverly top-0 left-0 absolute w-full h-full bg-customCyan ">
                  <div className="text-center pt-[150px]">
                    <Button
                      btnText={"Add to cart"}
                      className={
                        "py-[12px] px-[50px] bg-[#FFFFFF] text-[#B88E2F] font-semibold text-[16px] "
                      }
                    />
                    <div className="font-pop">
                      <Flex className={"justify-center space-x-4 mt-[24px]"}>
                        <div className="text-[16px] font-semibold text-[#ffffff] ">
                          <Flex>
                            <GrShareOption className="mt-1 " />
                            <Heading text={"Share"} as={"p"} />
                          </Flex>
                        </div>
                        <div className="text-[16px] font-semibold text-[#ffffff] ">
                          <Flex>
                            <MdCompareArrows className=" mt-1 " />
                            <Heading text={"Compare"} as={"p"} />
                          </Flex>
                        </div>
                        <div className="text-[16px] font-semibold text-[#ffffff] ">
                          <Flex>
                            <FiHeart className="mt-1 text-xl " />
                            <Heading text={"Like"} as={"p"} />
                          </Flex>
                        </div>
                      </Flex>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative productItem">
                <div>
                  <Image src={Tool} alt={Tool} />
                  <div className="absolute top-[23px] right-[23px] w-[48px] h-[48px] rounded-[50%] bg-red-500 text-center">
                    <Heading
                      text={"-35%"}
                      as={"h3"}
                      className={" mt-[12px] "}
                    />
                  </div>
                </div>

                <div className="bg-[#F4F5F7] p-[20px]">
                  <Heading
                    text={"Syltherine"}
                    as={"h3"}
                    className={"text-[24px] font-semibold text-[#3A3A3A]  "}
                  />
                  <Heading
                    text={"Stylish cafe chair"}
                    as={"p"}
                    className={"text-[16px] font-medium text-[#898989]"}
                  />
                  <h4 className="text-[20px] font-semibold text-[#3A3A3A] ">
                    Rp 2.500.000{" "}
                    <span>
                      {" "}
                      <del className="text-[16px] font-semibold text-[#B0B0B0]">
                        Rp 3.500.000
                      </del>
                    </span>
                  </h4>
                </div>
                <div className="productOverly top-0 left-0 absolute w-full h-full bg-customCyan ">
                  <div className="text-center pt-[150px]">
                    <Button
                      btnText={"Add to cart"}
                      className={
                        "py-[12px] px-[50px] bg-[#FFFFFF] text-[#B88E2F] font-semibold text-[16px] "
                      }
                    />
                    <div className="font-pop">
                      <Flex className={"justify-center space-x-4 mt-[24px]"}>
                        <div className="text-[16px] font-semibold text-[#ffffff] ">
                          <Flex>
                            <GrShareOption className="mt-1 " />
                            <Heading text={"Share"} as={"p"} />
                          </Flex>
                        </div>
                        <div className="text-[16px] font-semibold text-[#ffffff] ">
                          <Flex>
                            <MdCompareArrows className=" mt-1 " />
                            <Heading text={"Compare"} as={"p"} />
                          </Flex>
                        </div>
                        <div className="text-[16px] font-semibold text-[#ffffff] ">
                          <Flex>
                            <FiHeart className="mt-1 text-xl " />
                            <Heading text={"Like"} as={"p"} />
                          </Flex>
                        </div>
                      </Flex>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative productItem">
                <div>
                  <Image src={Tool} alt={Tool} />
                  <div className="absolute top-[23px] right-[23px] w-[48px] h-[48px] rounded-[50%] bg-red-500 text-center">
                    <Heading
                      text={"-35%"}
                      as={"h3"}
                      className={" mt-[12px] "}
                    />
                  </div>
                </div>

                <div className="bg-[#F4F5F7] p-[20px]">
                  <Heading
                    text={"Syltherine"}
                    as={"h3"}
                    className={"text-[24px] font-semibold text-[#3A3A3A]  "}
                  />
                  <Heading
                    text={"Stylish cafe chair"}
                    as={"p"}
                    className={"text-[16px] font-medium text-[#898989]"}
                  />
                  <h4 className="text-[20px] font-semibold text-[#3A3A3A] ">
                    Rp 2.500.000{" "}
                    <span>
                      {" "}
                      <del className="text-[16px] font-semibold text-[#B0B0B0]">
                        Rp 3.500.000
                      </del>
                    </span>
                  </h4>
                </div>
                <div className="productOverly top-0 left-0 absolute w-full h-full bg-customCyan ">
                  <div className="text-center pt-[150px]">
                    <Button
                      btnText={"Add to cart"}
                      className={
                        "py-[12px] px-[50px] bg-[#FFFFFF] text-[#B88E2F] font-semibold text-[16px] "
                      }
                    />
                    <div className="font-pop">
                      <Flex className={"justify-center space-x-4 mt-[24px]"}>
                        <div className="text-[16px] font-semibold text-[#ffffff] ">
                          <Flex>
                            <GrShareOption className="mt-1 " />
                            <Heading text={"Share"} as={"p"} />
                          </Flex>
                        </div>
                        <div className="text-[16px] font-semibold text-[#ffffff] ">
                          <Flex>
                            <MdCompareArrows className=" mt-1 " />
                            <Heading text={"Compare"} as={"p"} />
                          </Flex>
                        </div>
                        <div className="text-[16px] font-semibold text-[#ffffff] ">
                          <Flex>
                            <FiHeart className="mt-1 text-xl " />
                            <Heading text={"Like"} as={"p"} />
                          </Flex>
                        </div>
                      </Flex>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative productItem">
                <div>
                  <Image src={Tool} alt={Tool} />
                  <div className="absolute top-[23px] right-[23px] w-[48px] h-[48px] rounded-[50%] bg-red-500 text-center">
                    <Heading
                      text={"-35%"}
                      as={"h3"}
                      className={" mt-[12px] "}
                    />
                  </div>
                </div>

                <div className="bg-[#F4F5F7] p-[20px]">
                  <Heading
                    text={"Syltherine"}
                    as={"h3"}
                    className={"text-[24px] font-semibold text-[#3A3A3A]  "}
                  />
                  <Heading
                    text={"Stylish cafe chair"}
                    as={"p"}
                    className={"text-[16px] font-medium text-[#898989]"}
                  />
                  <h4 className="text-[20px] font-semibold text-[#3A3A3A] ">
                    Rp 2.500.000{" "}
                    <span>
                      {" "}
                      <del className="text-[16px] font-semibold text-[#B0B0B0]">
                        Rp 3.500.000
                      </del>
                    </span>
                  </h4>
                </div>
                <div className="productOverly top-0 left-0 absolute w-full h-full bg-customCyan ">
                  <div className="text-center pt-[150px]">
                    <Button
                      btnText={"Add to cart"}
                      className={
                        "py-[12px] px-[50px] bg-[#FFFFFF] text-[#B88E2F] font-semibold text-[16px] "
                      }
                    />
                    <div className="font-pop">
                      <Flex className={"justify-center space-x-4 mt-[24px]"}>
                        <div className="text-[16px] font-semibold text-[#ffffff] ">
                          <Flex>
                            <GrShareOption className="mt-1 " />
                            <Heading text={"Share"} as={"p"} />
                          </Flex>
                        </div>
                        <div className="text-[16px] font-semibold text-[#ffffff] ">
                          <Flex>
                            <MdCompareArrows className=" mt-1 " />
                            <Heading text={"Compare"} as={"p"} />
                          </Flex>
                        </div>
                        <div className="text-[16px] font-semibold text-[#ffffff] ">
                          <Flex>
                            <FiHeart className="mt-1 text-xl " />
                            <Heading text={"Like"} as={"p"} />
                          </Flex>
                        </div>
                      </Flex>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Flex>
        </Container>
      </section>
      {/* prodact part end  */}
    </>
  );
}

export default App;
