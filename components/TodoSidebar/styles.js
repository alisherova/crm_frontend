import styled from "@emotion/styled";

export const SidebarWrapper = styled.div`
  flex: 0.8;
  background-color: #ffffff;
  padding: 16px;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e6e6e6;

  p {
    color: #6f7a7a;
    font-weight: 700;
    font-size: 16px;
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  padding-bottom: 12px;
  margin: 12px 0 18px 0;
  border-bottom: 1px solid #e6e6e6;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  margin-bottom: 4px;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#212B36" : "transparent")};
  color: ${(props) => (props.active ? "#ffffff" : "#6f7a7a")};
  font-weight: 600;

  &:hover {
    background-color: #212b36;
    color: #fff;
  }
`;

export const MenuIcon = styled.div`
  display: flex;
  align-items: center;
`;

export const Badge = styled.span`
  background-color: red;
  color: white;
  font-size: 12px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 9999px;
`;

export const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #6f7a7a;
  margin: 0 0 6px 12px;
`;

export const TagList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 24px 0;
`;

export const TagItem = styled.li`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  cursor: pointer;
  color: ${(props) => props.color};

  span {
    font-size: 16px;
    font-weight: 400;
  }

  div {
    width: 14px;
    height: 14px;
    background-color: ${(props) => props.color};
    border-radius: 4px;
    transform: rotate(45deg);
  }
`;

export const PriorityList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const PriorityItem = styled.li`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  cursor: pointer;
  color: ${(props) => props.color};

  span {
    font-size: 16px;
    font-weight: 400;
  }

  div {
    width: 14px;
    height: 14px;
    background-color: ${(props) => props.color};
    border-radius: 4px;
    transform: rotate(45deg);
  }
`;
