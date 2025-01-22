import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import CustomDropdown from '../CustomDropdown';
import { LuFilter } from "react-icons/lu";
import DynamicTaskList from '../Todo';
import {
    ListWrapper,
    ListHeader,
    ActionBar,
    BulkActions,
    SearchBar,
    SearchInput,
    SearchIcon,
    Pagination,
    PageNumber,
    PageButton,
    FilterWrapper
} from './styles';

const TodoList = ({ taskGroups, setTaskGroups }) => {

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedBulkAction, setSelectedBulkAction] = useState("");

    const options = ["Bulk Actions", "Delete Marked", "Unmark All", "Mark All"];
    const recentOptions = ["Recent", "Last Modified", "Last Modified by me"];

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleDropdownChange = (name, value) => {
        setSelectedBulkAction(value);
    };

    return (
        <ListWrapper>
            <ListHeader>
                <ActionBar>
                    <BulkActions>
                        <CustomDropdown
                            options={options}
                            placeholder="Bulk Actions"
                            maxHeight="150px"
                            width={"100%"}
                            onSelect={handleDropdownChange}
                            name="bulkActions"
                        />
                        <button>Apply</button>
                    </BulkActions>
                    <SearchBar>
                        <SearchInput
                            type="text"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <SearchIcon>
                            <BiSearch size={20} />
                        </SearchIcon>
                    </SearchBar>
                </ActionBar>
                <FilterWrapper>
                    <CustomDropdown
                        icon={<LuFilter />}
                        options={recentOptions}
                        placeholder="Recent"
                        width={"100%"}
                    />
                </FilterWrapper>
            </ListHeader>
            <DynamicTaskList
                taskGroups={taskGroups}
                setTaskGroups={setTaskGroups}
                searchQuery={searchQuery}
                selectedBulkAction={selectedBulkAction}
                setSelectedBulkAction={setSelectedBulkAction}
            />
            <Pagination>
                <PageButton>&lt;</PageButton>
                <PageNumber active>1</PageNumber>
                <PageNumber>2</PageNumber>
                <PageNumber>3</PageNumber>
                <PageNumber>4</PageNumber>
                <PageButton>&gt;</PageButton>
            </Pagination>
        </ListWrapper>
    );
};

export default TodoList;
