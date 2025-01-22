import styled from "@emotion/styled";

export const NavbarWrapper = styled.nav`
  width: 82%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 20px;
  background-color: #ffffff;
  height: 60px;
  position: fixed;
  top: 0;
  z-index: 999;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);

  @media screen and (max-width: 1200px) {
    width: 78%;
  }

  @media screen and (max-width: 995px) {
    display: none;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 300px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  background-color: #f6f6f6;
  color: black;

  &::placeholder {
    color: #9ca3af;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: black;
  cursor: pointer;
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  background: transparent;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: #374151;
  }
`;

export const ModeButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 72px;
  height: 36px;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  background: transparent;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: #374151;
  }
`;

export const SunIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border: none;
  border-radius: 6px;
  background: #67b85d;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: #374151;
  }
`;

export const Divider = styled.div`
  display: block;
  width: 1.5px;
  height: 20px;
  background-color: #ebebeb;
  margin: 0 6px;
`;

export const NotificationBadge = styled.div`
  position: relative;
`;

export const NotificationCount = styled.span`
  position: absolute;
  top: -2px;
  right: -2px;
  background-color: red;
  color: white;
  font-size: 11px;
  padding: 2px 6px;
  border-radius: 9999px;
  font-weight: 500;
`;

export const UserAvatar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background-color: #f3f4f6;
  color: #6b7280;
  cursor: pointer;
  margin-left: 4px;

  &:hover {
    background-color: #e5e7eb;
    color: #374151;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
`;

export const OnlineBadge = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #67b85d;
  border: 3px solid white;
  position: absolute;
  bottom: -2px;
  right: -2px;
`;
