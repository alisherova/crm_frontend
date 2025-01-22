import React from 'react';
import {
    MdStarBorder,
} from 'react-icons/md';
import { LuInbox, LuTrash2 } from "react-icons/lu";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoDocumentTextOutline } from "react-icons/io5";
import {
    SidebarWrapper,
    MenuList,
    MenuItem,
    MenuIcon,
    MenuText,
    Badge,
    SectionTitle,
    TagList,
    TagItem,
    TagIcon,
    PriorityList,
    PriorityItem,
    PriorityIcon,
    SidebarHeader
} from './styles';

const TodoSidebar = () => {
    return (
        <SidebarWrapper>
            <SidebarHeader>
                <IoDocumentTextOutline size={20} stroke='#6f7a7a' />
                <p>Todo List</p>
            </SidebarHeader>
            <MenuList>
                <MenuItem active>
                    <MenuIcon>
                        <LuInbox size={16} />
                    </MenuIcon>
                    <MenuText>Inbox</MenuText>
                    <Badge>1</Badge>
                </MenuItem>

                <MenuItem>
                    <MenuIcon>
                        <IoMdCheckmarkCircleOutline size={16} />
                    </MenuIcon>
                    <MenuText>Done</MenuText>
                </MenuItem>

                <MenuItem>
                    <MenuIcon>
                        <MdStarBorder size={18} />
                    </MenuIcon>
                    <MenuText>Important</MenuText>
                </MenuItem>

                <MenuItem>
                    <MenuIcon>
                        <LuTrash2 size={16} />
                    </MenuIcon>
                    <MenuText>Trash</MenuText>
                </MenuItem>
            </MenuList>

            <SectionTitle>Tags</SectionTitle>
            <TagList>
                <TagItem color="#3B82F6">
                    <div></div>
                    <span>Pending</span>
                </TagItem>
                <TagItem color="#F59E0B">
                    <div ></div>
                    <span>Onhold</span>
                </TagItem>
                <TagItem color="#EC4899">
                    <div ></div>
                    <span>Inprogress</span>
                </TagItem>
                <TagItem color="#10B981">
                    <div ></div>
                    <span>Done</span>
                </TagItem>
            </TagList>

            <SectionTitle>Priority</SectionTitle>
            <PriorityList>
                <PriorityItem color="#8B5CF6">
                    <div></div>
                    <span>Medium</span>
                </PriorityItem>
                <PriorityItem color="#EF4444">
                    <div></div>
                    <span>High</span>
                </PriorityItem>
                <PriorityItem color="#F59E0B">
                    <div></div>
                    <span>Low</span>
                </PriorityItem>
            </PriorityList>
        </SidebarWrapper>
    );
};

export default TodoSidebar;