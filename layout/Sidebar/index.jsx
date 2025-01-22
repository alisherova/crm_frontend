import { useEffect, useRef, useState } from "react";
import { items } from "./menuItems";
import { TbArrowBarToLeft } from "react-icons/tb";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiUserSettingsLine } from "react-icons/ri";
import { MdLockOutline } from "react-icons/md";
import {
  Container,
  LogoWrapper,
  ProfileCard,
  SidebarContainer,
  StyledSider,
  Menu,
  GroupHeader,
  GroupChildren,
  MenuItem,
  IconWrapper,
  ArrowIconWrapper,
  BurgerIcon,
  MobileHeader,
  ThreeDotsWrapper,
  DropdownMenu,
} from "./style";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Application");
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const dropdownMenuRef = useRef()
  const sidebarRef = useRef()

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const handleResize = () => {
        if (window.innerWidth <= 995) {
          setCollapsed(true);
          setIsVisible(false);
        } else {
          setCollapsed(false);
          setIsVisible(true);
        }
      };

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isClient]);

  const toggleSidebar = () => {
    setIsVisible((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    setMenuVisible(false);
  };

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownMenuRef.current && !dropdownMenuRef.current.contains(event.target)) {
        setMenuVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {isClient && window.innerWidth <= 995 && (
        <MobileHeader>
          <BurgerIcon onClick={toggleSidebar}>
            <HiOutlineMenuAlt1 size={28} stroke="red" />
          </BurgerIcon>
          <img src="/assets/images/logo.svg" alt="logo" />
          <ThreeDotsWrapper onClick={toggleMenu}>
            <BsThreeDotsVertical size={28} fill="red" />
            {menuVisible && (
              <DropdownMenu ref={dropdownMenuRef}>
                <li onClick={() => handleOptionClick("Dashboard")}>
                  <LuLayoutDashboard /> Dashboard
                </li>
                <li onClick={() => handleOptionClick("My Profile")}>
                  <RiUserSettingsLine /> My Profile
                </li>
                <li onClick={() => handleOptionClick("Logout")}>
                  <MdLockOutline /> Logout
                </li>
              </DropdownMenu>
            )}
          </ThreeDotsWrapper>
        </MobileHeader>
      )}
      <Container isVisible={isVisible}>
        {isVisible && (
          <StyledSider collapsed={collapsed} ref={sidebarRef}>
            <LogoWrapper>
              <img src="/assets/images/logo.svg" alt="logo" />
              <TbArrowBarToLeft size={17} />
            </LogoWrapper>
            <ProfileCard>
              <img
                src="/assets/images/profilePic.webp"
                alt="Adrian Davies"
                className="profile-picture"
              />
              <div className="profile-details">
                <h4>Adrian Davies</h4>
                <p>Tech Lead</p>
              </div>
            </ProfileCard>
            <SidebarContainer>
              <Menu>
                {items.map((item, index) => {
                  if (item.type === "group") {
                    return (
                      <li key={index}>
                        <GroupHeader>
                          <span>{item.label}</span>
                        </GroupHeader>
                        <GroupChildren>
                          {item.children.map((child, childIndex) => (
                            <MenuItem
                              key={childIndex}
                              status={
                                child.label === activeMenu ? "active" : "inactive"
                              }
                              onClick={() => setActiveMenu(child.label)}
                            >
                              {child.icon && (
                                <IconWrapper
                                  status={
                                    child.label === activeMenu
                                      ? "active"
                                      : "inactive"
                                  }
                                >
                                  {child.icon}
                                </IconWrapper>
                              )}
                              <p>{child.label}</p>
                              {child.arrowIcon && (
                                <ArrowIconWrapper
                                  status={
                                    child.label === activeMenu
                                      ? "active"
                                      : "inactive"
                                  }
                                >
                                  {child.arrowIcon}
                                </ArrowIconWrapper>
                              )}
                            </MenuItem>
                          ))}
                        </GroupChildren>
                      </li>
                    );
                  }
                  return (
                    <MenuItem key={index}>
                      {item.icon && <IconWrapper>{item.icon}</IconWrapper>}
                      {item.label}
                    </MenuItem>
                  );
                })}
              </Menu>
            </SidebarContainer>
          </StyledSider>
        )}
      </Container>
    </>
  );
};

export default Sidebar;
