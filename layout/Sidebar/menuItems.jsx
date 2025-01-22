import { RiLayoutLeftLine, RiLayoutTopLine, RiLayoutTop2Line, RiUserSettingsLine } from "react-icons/ri";
import { LuPilcrowLeft, LuLayoutDashboard, LuPyramid } from "react-icons/lu";
import { TbUserUp, TbBuildingCommunity, TbLoader3, TbCircleDashedCheck } from "react-icons/tb";
import { PiShootingStarLight, PiProjectorScreen } from "react-icons/pi";
import { GiPaperBoat } from "react-icons/gi";
import { GrTask, GrDocumentTime, GrDocumentText } from "react-icons/gr";
import { HiOutlineDocumentPlus, HiOutlineDocumentCheck, HiOutlineDocumentCurrencyDollar } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import { GrInstall } from "react-icons/gr";

export const items = [
  {
    type: "group",
    label: "MAIN MENU",
    children: [
      {
        key: "dashboard",
        label: "Dashboard",
        icon: <LuLayoutDashboard />,
        arrowIcon: <IoIosArrowForward />
      },
      {
        key: "application",
        label: "Application",
        icon: <GrInstall />,
        arrowIcon: <IoIosArrowForward />
      },
      {
        key: "super-admin",
        label: "Super Admin",
        icon: <RiUserSettingsLine />,
        arrowIcon: <IoIosArrowForward />
      },
    ]
  },
  {
    type: "group",
    label: "LAYOUT",
    children: [
      {
        key: "layout-mini",
        label: "Mini",
        icon: <RiLayoutTopLine />,
      },
      {
        key: "layout-horizontal",
        label: "Horizontal Single",
        icon: <RiLayoutTop2Line />,
      },
      {
        key: "layout-without-header",
        label: "Without Header",
        icon: <RiLayoutLeftLine />,
      },
      {
        key: "layout-rtl",
        label: "RTL",
        icon: <LuPilcrowLeft />,
      },
      {
        key: "layout-detached",
        label: "Detached",
        icon: <LuPyramid />,
      },
      {
        key: "layout-dark",
        label: "Dark",
        icon: <LuPyramid />,
      },
    ],
  },
  {
    type: "group",
    label: "CRM",
    children: [
      {
        key: "crm-contacts",
        label: "Contacts",
        icon: <TbUserUp />,
      },
      {
        key: "crm-companies",
        label: "Companies",
        icon: <TbBuildingCommunity />,
      },
      {
        key: "crm-deals",
        label: "Deals",
        icon: <PiShootingStarLight />,
      },
      {
        key: "crm-leads",
        label: "Leads",
        icon: <TbLoader3 />,
      },
      {
        key: "crm-pipeline",
        label: "Pipeline",
        icon: <PiProjectorScreen />,
      },
      {
        key: "crm-campaign",
        label: "Campaign",
        icon: <GiPaperBoat />,
      },
      {
        key: "crm-projects",
        label: "Projects",
        icon: <TbCircleDashedCheck />,
      },
      {
        key: "crm-tasks",
        label: "Tasks",
        icon: <GrTask />,
      },
      {
        key: "crm-proposals",
        label: "Proposals",
        icon: <HiOutlineDocumentPlus />,
      },
      {
        key: "crm-contracts",
        label: "Contracts",
        icon: <HiOutlineDocumentCheck />,
      },
      {
        key: "crm-estimations",
        label: "Estimations",
        icon: <GrDocumentTime />,
      },
      {
        key: "crm-invoices",
        label: "Invoices",
        icon: <GrDocumentText />,
      },
      {
        key: "crm-payments",
        label: "Payments",
        icon: <HiOutlineDocumentCurrencyDollar />,
      },
    ],
  },

];
