import styled from "@emotion/styled";

export const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
`;

export const StyledContent = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #f9f9fc;
  min-height: 280px;
`;

export const ContentLayout = styled.div`
  margin-left: 18%;
  margin-top: 60px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 1200px) {
    margin-left: 22%;
  }

  @media screen and (max-width: 995px) {
    margin-left: 0;
  }
`;
