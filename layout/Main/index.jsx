import Navbar from "@/layout/Navbar";
import Sidebar from "@/layout/Sidebar";
import { ContentLayout, LayoutWrapper, StyledContent } from "./style";

const MainLayout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Sidebar />
      <ContentLayout>
        <Navbar />
        <StyledContent>{children}</StyledContent>
      </ContentLayout>
    </LayoutWrapper>
  );
};

export default MainLayout;
