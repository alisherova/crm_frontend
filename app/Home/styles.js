import styled from "@emotion/styled";

export const CollapseArrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    @media screen and (max-width: 995px) {
      display: none;
    }
  }
`;
export const LinearDiv = styled.div`
  display: block;
  width: 100%;
  height: 1px;
  background-color: #ebebeb;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  gap: 16px;
  margin-top: 16px;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    gap: 32px;
  }
`;
