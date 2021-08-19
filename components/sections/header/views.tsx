import React, { useState, useRef } from 'react';
import { INavData } from 'utils/vars/sitemap';
import Link from 'next/link';
import { styled } from 'theme';
import * as Styled from './styles';
import useOutsideAlerter from 'utils/hooks/outsideAlerter';

interface IDesktopDropdown {
  item: INavData;
}

export const DesktopDropdown = ({ item }: IDesktopDropdown) => {
  const [ open, setOpen ] = useState(false);
  const dropdownRef = useRef(null);

  const handleOutsideClick = (): void => {
    setOpen(false);
  };
  useOutsideAlerter(dropdownRef, handleOutsideClick);

  const handleNav = () => {

  }

  return (
    <Styled.DropdownToggle
      active={typeof window !== 'undefined' && window.location.pathname.includes('about-us')}
      open={open}
      onClick={() => setOpen(prevState => !prevState)}
      ref={dropdownRef}
    >
      {item.title}
      <Styled.Indicator open={open} />
      <Styled.DropdownMenu open={open}>
        {item.sublinks?.map(sublink =>
          <Styled.DropdownNavItem onClick={handleNav}>
            {sublink.title}
            <img src={"/assets/icons/close.svg"} width={1.8} />
          </Styled.DropdownNavItem>
        )}
      </Styled.DropdownMenu>
    </Styled.DropdownToggle>
  )
}

interface IMobileMenu {
  items: INavData[];
  open: boolean;
}

export const MobileMenu = ({ items, open }: IMobileMenu) => {
  return (
    <Styled.MenuContainer open={open}>
      {items.map((item, i) =>
        <Styled.MenuItemWrapper key={i}>
          {item.sublinks ? (
            <>
              <Styled.SubmenuTitle>{item.title}</Styled.SubmenuTitle>
              {item.sublinks.map((sublink, i) => 
                <Styled.StyledSublink href={sublink.path} key={i}>
                  <>
                    {sublink.title}
                    <img src="/assets/icons/close.svg" width={1.8} />
                  </>
                </Styled.StyledSublink>
              )}
            </>
          ) : (
            <Styled.StyledLink href={item.path}>
              <>
                {item.title}
                <img src="/assets/icons/close.svg" width={1.8} />
              </>
            </Styled.StyledLink>
          )
          }
      </Styled.MenuItemWrapper>
      )}
    </Styled.MenuContainer>
  )
};
