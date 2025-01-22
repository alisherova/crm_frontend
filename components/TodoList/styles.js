import styled from "@emotion/styled";

export const ListWrapper = styled.div`
  flex: 3;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const ListHeader = styled.div`
  padding: 18px 16px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 560px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const ActionBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;

  @media screen and (max-width: 560px) {
    flex-direction: column;
  }
`;

export const BulkActions = styled.div`
  display: flex;
  gap: 8px;
  width: 240px;

  button {
    padding: 8px 18px;
    background-color: #6b7280;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    transition: all 0.3s ease-in;

    &:hover {
      background-color: red;
    }
  }

  @media screen and (max-width: 560px) {
    width: 100%;
  }
`;

export const SearchBar = styled.div`
  position: relative;
  max-width: 400px;
  width: 35%;

  @media screen and (max-width: 560px) {
    width: 100%;
    max-width: 600px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  font-size: 16px;
  color: #000;

  &:focus {
    outline: none;
    border-color: #ccc;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-40%);
  color: #9ca3af;
`;

export const FilterWrapper = styled.div`
  width: 180px;

  @media screen and (max-width: 560px) {
    width: 100%;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
  padding: 16px;
`;

export const PageNumber = styled.button`
  padding: 8px 12px;
  border: none;
  background: ${(props) => (props.active ? "red" : "transparent")};
  color: ${(props) => (props.active ? "white" : "#374151")};
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.active ? "#dc2626" : "#f3f4f6")};
  }
`;

export const PageButton = styled.button`
  padding: 8px 12px;
  border: none;
  background: transparent;
  color: #374151;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #f3f4f6;
  }
`;
