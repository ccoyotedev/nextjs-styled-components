import React, { useState } from "react"
import * as Styled from "./styles";
import { DesktopDropdown, MobileMenu } from "./views";
import useWindowWidth from "utils/hooks/windowSize";
import Link from "next/link";
import { sitemap } from 'utils/vars/sitemap';
import { useScrollPosition } from "utils/hooks/scrollPosition";
import { Hamburger } from "components/ui";

interface Props {
  title: string,
  logoSrc: string,
  darkLogoSrc?: string,
}

export const Header = ({ title, logoSrc, darkLogoSrc }: Props) => {
  const [ open, setOpen ] = useState(false);
  const [ initialState, setInitialState ] = useState<boolean>(true);

  const width = useWindowWidth();
  const isDesktop = width >= 1024;

  useScrollPosition(({ prevPos, currPos }: { prevPos: any, currPos: any}) => {
    if (!isDesktop) return;
    if (currPos.y === 0) {
      return setInitialState(true)
    };
    return setInitialState(false);
    
  }, [initialState]);

  const handleNav = () => {

  };

  return (
    <Styled.HeaderWrapper
      initial={initialState}
      open={open}
    >
      <Styled.Container>
          <Styled.LogoContainer href="/">
            <Styled.Logo
              src={
                initialState
                  ? isDesktop
                    ? darkLogoSrc || logoSrc
                    : logoSrc
                  : logoSrc
                }
              alt={`${title} Logo`}
            />
          </Styled.LogoContainer>
          <Styled.DesktopNav>
            {sitemap.map(item => {
              if (item.sublinks) {
                return (
                  <DesktopDropdown item={item} />
                )
              }
              return (
                <Link href={item.path}>
                  <Styled.NavItem
                    cta={item.path === '/contact'}
                    
                    active={typeof window !== 'undefined' && window.location.pathname.includes(item.path)}
                  >
                    {item.title}
                  </Styled.NavItem>
                </Link>
              )
            })}
          </Styled.DesktopNav>
          <Hamburger
            onClick={() => setOpen(prevState => !prevState)}
            style={{height: '1.6rem', width: '2.4rem', position: 'absolute', right: '1.6rem', zIndex: 9999}}
          />
      </Styled.Container>
      <MobileMenu items={sitemap} open={open} />
    </Styled.HeaderWrapper>
  )
}
