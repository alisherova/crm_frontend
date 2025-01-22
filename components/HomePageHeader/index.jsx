import React, { useState } from 'react';
import { GiSettingsKnobs } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { GoPlusCircle } from "react-icons/go";
import {
    HeaderWrapper,
    TitleSection,
    Title,
    Subtitle,
    ActionsWrapper,
    MarkAllButton,
    SortButton,
    AddTaskButton,
    CustomCheckbox
} from './styles';
import AddTodoModal from '../AddTodoModal';
import CustomDropdown from '../CustomDropdown';

const HomePageHeader = ({ setTaskGroups }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const sortOptions = ["Sort by Date", "Ascending", "Descending", "Recently Viewed", "Recently Added", "Creation Date"];

    return (
        <HeaderWrapper>
            <TitleSection>
                <Title>Todo</Title>
                <Subtitle>Manage your tasks</Subtitle>
            </TitleSection>

            <ActionsWrapper>
                <MarkAllButton>
                    <CustomCheckbox id='checkboxInput' type='checkbox' defaultChecked />
                    <label htmlFor="checkboxInput">Mark all as Complete</label>
                </MarkAllButton>
                <CustomDropdown
                    icon={<GiSettingsKnobs size={18} />}
                    options={sortOptions}
                    placeholder="Sort by Date"
                    width={"180px"}
                    maxHeight="150px"
                />
                <AddTaskButton onClick={() => setIsModalOpen(true)}>
                    <GoPlusCircle size={18} />
                    Add Task
                </AddTaskButton>
                <AddTodoModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    setTaskGroups={setTaskGroups}
                    setIsOpen={setIsModalOpen}
                />
            </ActionsWrapper>
        </HeaderWrapper>
    );
};

export default HomePageHeader;