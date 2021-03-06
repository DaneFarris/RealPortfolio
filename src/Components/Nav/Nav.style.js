import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-bottom: 30px;
  font-weight: 400;
`;
export const NavList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  width: 100%;
  @media (max-width: 600px) {
    margin-top: 50px;
  }
  ${NavLink}:last-child {
    @media (max-width: 600px) {
      display: none;
    }
  }
`;
export const MenuHover = styled.div`
  position: absolute;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0,
    #fff 50%,
    #fff 50%,
    #fff 50%,
    rgba(255, 255, 255, 0) 100%
  );
  content: "";
  width: 100%;
  height: 40px;
  opacity: 0.25;
  margin-top: -5px;

  z-index: -1;
  transition-duration: 0.1s;
  &.hide {
    display: none;
  }
`;
