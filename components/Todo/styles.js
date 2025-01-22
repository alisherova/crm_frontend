import styled from "@emotion/styled";

export const DateGroup = styled.div``;

export const DateHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  cursor: pointer;
  margin-top: 12px;
  color: #6f7a7a;

  &:hover {
    background-color: #f9fafb;
  }
`;

export const DateTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0;
  font-size: 16px;
  font-weight: 600;
`;

export const Badge = styled.span`
  background-color: red;
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 9999px;
`;

export const TaskList = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid #e6e6e6;
  margin-top: 6px;
`;

export const TaskItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 6px;

  .star-icon {
    color: #fcd34d;
    cursor: pointer;
  }

  @media screen and (max-width: 560px) {
    flex-direction: column;
    border-bottom: 1px solid #e6e6e6;
    align-items: start;
  }
`;

export const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  border: none;
  border-radius: 12px;
  accent-color: red;
  cursor: pointer;
`;

export const TaskContent = styled.div`
  flex: 1.2;
`;

export const TaskTitle = styled.h4`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: #6f7a7a;
  text-decoration: ${(props) => (props.isChecked ? "line-through" : "none")};
`;

export const TaskDescription = styled.p`
  margin: 4px 0 8px;
  font-size: 15px;
  font-weight: 500;
  color: #6f7a7a;
  text-decoration: ${(props) => (props.isChecked ? "line-through" : "none")};
`;

export const TaskMeta = styled.div`
  flex: 1;
  display: flex;
  gap: 8px;
`;

export const PriorityBadge = styled.span`
  padding: 3px 10px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid transparent;
  background-color: white;
  display: flex;
  align-items: center;
  gap: 4px;

  &:before {
    content: "";
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    display: block;
  }

  ${(props) =>
    props.priority === "High" &&
    `
      border-color: red;
      color: red;

      &:before { 
        background-color: red; 
      }
    `}
  ${(props) =>
    props.priority === "Medium" &&
    `
      border-color: #F59E0B;
      color: #F59E0B;

      &:before { 
        background-color: #F59E0B; 
      }
    `}
    ${(props) =>
    props.priority === "Low" &&
    `
    border-color: #F59E0B;
    color: #F59E0B;

    &:before { 
      background-color: #F59E0B; 
    }
    `};
`;

export const StatusBadge = styled.span`
  padding: 3px 10px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid transparent;
  background-color: white;

  ${(props) =>
    props.status === "New" &&
    `
      border-color: #F59E0B;
      color: #F59E0B;
    `}

  ${(props) =>
    props.status === "Pending" &&
    `
      border-color: #0EA5E9;
      color: #0EA5E9;
    `}

  ${(props) =>
    props.status === "Completed" &&
    `
      border-color: #22C55E;
      color: #22C55E;
    `}

  ${(props) =>
    props.status === "InProgress" &&
    `
      border-color: #F59E0B;
      color: #F59E0B;
    `}
`;

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
`;

export const MoreButton = styled.button`
  border: none;
  background: none;
  color: #6b7280;
  cursor: pointer;
  border-radius: 4px;
  position: relative;
  cursor: pointer;
  margin-top: 5px;
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
    color: gray;

    &:hover {
      background-color: #f5f5f5;
    }
  }
`;
