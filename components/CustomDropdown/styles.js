import styled from "@emotion/styled";

export const DropdownContainer = styled.div`
  position: relative;
  width: ${(props) => props.width || "150px"};
  color: #6f7a7a;
`;

export const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  border: 1px solid
    ${({ className }) => (className.includes("error") ? "red" : "#e6e6e6")};
  border-radius: 4px;
  cursor: pointer;
  background-color: ${({ className }) =>
    className.includes("error") ? "#ffe6e6" : "white"};
  transition: border-color 0.3s;
  font-size: 16px;
  font-weight: 400;

  &.active {
    border-color: red;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const ArrowIcon = styled.div`
  border: solid ${(props) => (props.active ? "red" : "#6f7a7a")};
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: ${(props) => (props.active ? "rotate(-135deg)" : "rotate(45deg)")};
  transition: transform 0.3s, border-color 0.3s;
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  z-index: 1000;
  max-height: ${(props) => props.maxHeight || "200px"};
  overflow-y: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: red;
    color: white;
  }
`;
