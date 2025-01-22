import React from 'react';
import {
  BiFullscreen,
  BiSun,
  BiMoon,
} from 'react-icons/bi';
import { TbTopologyStarRing, TbBell, TbMessageCircleExclamation } from "react-icons/tb";
import { BsQuestionOctagon } from "react-icons/bs";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { HiOutlineChartPie } from "react-icons/hi";
import {
  NavbarWrapper,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  IconsWrapper,
  IconButton,
  NotificationBadge,
  NotificationCount,
  UserAvatar,
  ModeButtons,
  SunIconButton,
  Divider,
  OnlineBadge
} from './style';
import { BsCommand } from "react-icons/bs";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <SearchWrapper>
        <SearchInput placeholder="Search" />
        <SearchIcon>
          <BsCommand size={14} />
        </SearchIcon>
      </SearchWrapper>

      <IconsWrapper>
        <IconButton>
          <BiFullscreen size={16} />
        </IconButton>

        <ModeButtons>
          <SunIconButton>
            <BiSun size={16} />
          </SunIconButton>
          <BiMoon size={16} />
        </ModeButtons>

        <IconButton style={{ backgroundColor: "#E0F5D7", borderColor: "#48928E" }} >
          <MdOutlineDashboardCustomize style={{ fill: "#48928E" }} size={16} />
        </IconButton>

        <IconButton style={{ backgroundColor: "#f3edff", borderColor: "#f3edff" }}>
          <BsQuestionOctagon style={{ stroke: "#3e2e71" }} size={16} />
        </IconButton>

        <IconButton style={{ backgroundColor: "#fff7d8", borderColor: "#fff7d8" }}>
          <HiOutlineChartPie style={{ stroke: "rgb(255, 96, 0)" }} size={16} />
        </IconButton>
        <Divider></Divider>

        <NotificationBadge>
          <IconButton style={{ backgroundColor: "#EBEBEB", borderColor: "#EBEBEB " }}>
            <TbMessageCircleExclamation size={18} />
          </IconButton>
          <NotificationCount>14</NotificationCount>
        </NotificationBadge>
        <NotificationBadge>
          <IconButton style={{ backgroundColor: "#EBEBEB", borderColor: "#EBEBEB " }}>
            <TbBell size={18} />
          </IconButton>
          <NotificationCount>13</NotificationCount>
        </NotificationBadge>

        <UserAvatar>
          <img
            src="/assets/images/avatar.webp"
            alt="Adrian Davies"
            className="profile-picture"
          />
          <OnlineBadge></OnlineBadge>
        </UserAvatar>
      </IconsWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;