import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownMenu } from "styled-bootstrap-components";
import { IoMdMenu, IoIosGlobe } from "react-icons/io";

import { StyledNavbar, StyledNav, StyledNavbarLink } from "./styles";
import {
  StyledDropdownItem,
  StyledDropdownMenu,
  StyledDropdown,
} from "../../style";

const Navigation = ({ routes }) => {
  const [hiddenDropdown1, setHiddenDropdown1] = useState(true);
  const [hiddenDropdown2, setHiddenDropdown2] = useState(true);
  const handleOpenCloseDropdown1 = () => setHiddenDropdown1(!hiddenDropdown1);
  const handleOpenCloseDropdown2 = () => setHiddenDropdown2(!hiddenDropdown2);

  return (
    <>
      <StyledNavbar expandSm dark>
        <StyledNav start>
          <StyledNavbarLink dark brand href="/">
            Two00 Docs
          </StyledNavbarLink>
        </StyledNav>
        <StyledNav end>
          <StyledNavbarLink dark href="https://two00.com/">
            Two00 App
          </StyledNavbarLink>
          <Dropdown>
            <StyledNavbarLink
              outline
              as={Link}
              onClick={() => handleOpenCloseDropdown1()}
              flex
            >
              <IoIosGlobe />
            </StyledNavbarLink>
            <StyledDropdownMenu
              as={DropdownMenu}
              noRadius
              hidden={hiddenDropdown1}
            >
              {["en", "de"].map(item => {
                return (
                  <StyledDropdownItem>
                    <StyledNavbarLink
                      as={Link}
                      to={{
                        pathname: `/${item}/`,
                        state: {
                          clicked: true,
                        },
                      }}
                      onClick={() => {
                        handleOpenCloseDropdown1();
                      }}
                    >
                      {item === "en" ? "English" : "German"}
                    </StyledNavbarLink>
                  </StyledDropdownItem>
                );
              })}
            </StyledDropdownMenu>
          </Dropdown>
          <StyledDropdown as={Dropdown}>
            <StyledNavbarLink
              outline
              noRadius
              as={Link}
              onClick={() => handleOpenCloseDropdown2()}
              flex
            >
              <IoMdMenu />
            </StyledNavbarLink>
            <StyledDropdownMenu
              as={DropdownMenu}
              noRadius
              hidden={hiddenDropdown2}
            >
              {routes.map(item => {
                return (
                  <StyledDropdownItem>
                    <StyledNavbarLink
                      as={Link}
                      to={item.path}
                      onClick={() => {
                        handleOpenCloseDropdown2();
                      }}
                    >
                      {item.name}
                    </StyledNavbarLink>
                  </StyledDropdownItem>
                );
              })}
            </StyledDropdownMenu>
          </StyledDropdown>
        </StyledNav>
      </StyledNavbar>
    </>
  );
};

export { Navigation };
