import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: start;
    gap: 16px;
  }

  @media screen and (max-width: 560px) {
    flex-direction: row;
  }
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #1f2937;
  margin: 0;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin: 4px 0 0 0;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  @media screen and (max-width: 560px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const CustomCheckbox = styled.input`
  width: 18px;
  height: 18px;
  border: none;
  border-radius: 12px;
  accent-color: red;
  cursor: pointer;
`;

export const MarkAllButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  border-radius: 6px;
  background-color: transparent;
  color: #374151;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;

  label {
    cursor: pointer;
  }
`;

export const SortButton = styled(MarkAllButton)`
  min-width: 120px;
  background-color: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
`;

export const AddTaskButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  background-color: red;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 700;

  &:hover {
    background-color: #dc2626;
  }
`;
