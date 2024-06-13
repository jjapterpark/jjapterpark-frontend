"use client";

import { getLogo } from "@/utils/asset";
import tw from "tailwind-styled-components";
import Search from "./search";
import { useState } from "react";
import Menu from "./menu";

const HeaderContainer = tw.div`

  px-[30px]
  w-full
  h-[100px]
  flex
  flex-row
  items-center
  justify-center
  box-border
`;

const HeaderWrapper = tw.div`
  flex
  flex-row
  items-center
  justify-between
  mw-[1280px]
  w-full
  h-[50px]


`;

const HeaderLogo = tw.img`
  w-[200px]

`;

const HeaderSearch = tw.div`
  flex
  flex-row
  gap-[20px]
`;

const HeaderLoginMenu = tw.div`
  flex
  flex-row
  gap-[20px]
  p-0
  w-full
  mw-[312px]
  h-[18px]
  rounded-[6px]
  justify-end
 
`;

const LoginMenuText = tw.div`
  cursor-pointer
  font-normal
  text-[15px]
  text-[#111]
  leading-[18px]
`;

const Header = () => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <HeaderContainer>
            <HeaderWrapper>
                <HeaderSearch>
                    <HeaderLogo src={getLogo("jjapterpark-logo.svg")} />
                    <Search />
                </HeaderSearch>
                <HeaderLoginMenu>
                    {isLogin ? <LoginMenuText onClick={() => setIsLogin(false)}>로그아웃</LoginMenuText> : <LoginMenuText onClick={() => setIsLogin(true)}>로그인</LoginMenuText>}
                    <LoginMenuText>회원가입</LoginMenuText>
                    <LoginMenuText>마이페이지</LoginMenuText>
                </HeaderLoginMenu>
            </HeaderWrapper>
        </HeaderContainer>
    );
};

export default Header;
