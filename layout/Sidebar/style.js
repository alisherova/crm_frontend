import styled from "@emotion/styled";

export const MobileHeader = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 10px 16px;
  z-index: 9999;
  height: 60px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
`;

export const BurgerIcon = styled.div`
  cursor: pointer;
  background: transparent;
  border: none;
`;

export const ThreeDotsWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 35px;
  right: 10px;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  list-style: none;
  margin: 0;
  z-index: 1000;
  min-width: 160px;
  padding: 4px 0;

  li {
    padding: 8px 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    color: #333;

    &:hover {
      background-color: #f5f5f5;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  height: 100vh;

  @media (max-width: 995px) {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1000;
    overflow: hidden;
    background-color: #3c39399c;
    transform: translateX(${(props) => (props.isVisible ? "0" : "-100%")});
  }
`;

export const StyledSider = styled.div`
  width: 18%;
  min-width: 220px;
  max-width: 300px;
  background: #fff;
  height: 100%;
  overflow-y: auto;
  transition: width 0.3s ease;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 0 16px;

  /* Hide Scrollbar */
  &::-webkit-scrollbar {
    display: none; /* For WebKit browsers */
  }
  scrollbar-width: none; /* For Firefox */

  @media (max-width: 995px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 250px;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 999;
    transition: all 0.3s ease-in-out;
    transform: translateX(${(props) => (props.isVisible ? "-100%" : "0")});
  }
`;

export const LogoWrapper = styled.div`
  padding: 9px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    object-fit: contain;
  }

  svg {
    stroke: black;
  }
`;

export const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 6px;
  margin-top: 16px;

  .profile-picture {
    width: 42px;
    height: 42px;
    border-radius: 6px;
    margin-right: 10px;
  }

  .profile-details {
    h4 {
      margin: 0;
      font-size: 16px;
      color: #333;
      font-weight: 600;
    }
    p {
      margin: 0;
      font-size: 16px;
      color: #888;
    }
  }
`;

export const SidebarContainer = styled.div`
  padding: 10px 0;
`;

export const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li`
  padding: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  transition: color 0.3s ease;

  ${(props) =>
    props.status === "active" &&
    ` 
      background-color: #FAE9E6;  
      color: red;
    `}

  &:hover {
    color: red;
  }

  p {
    flex: 1;
  }
`;

export const GroupHeader = styled.p`
  padding: 10px 0;
  font-weight: 600;
  color: #888;
`;

export const GroupChildren = styled.ul`
  list-style: none;
  margin: 0;
`;

export const IconWrapper = styled.span`
  margin-right: 10px;
  display: inline-flex;
  font-size: 16px;
  width: 26px;
  height: 26px;
  background-color: #f6f6f6;
  border-radius: 4px;
  justify-content: center;
  align-items: center;

  svg {
    width: 14px;
    height: 14px;
  }

  ${(props) =>
    props.status === "active" &&
    ` 
      background-color: red;  
      color: white;
    `}
`;

export const ArrowIconWrapper = styled.span`
  ${(props) =>
    props.status === "active" &&
    `  
      color: red;
    `}
`;
