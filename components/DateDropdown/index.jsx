import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
`;

const InputBox = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #e6e6e6;
  border-radius: 4px; 
  cursor: pointer;
  color: #6f7a7a;
  font-size: 16px;

  &:focus{
    outline:none;
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  width: 70%;
  margin: 0;
  padding: 0;
  list-style: none;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  z-index: 10;
  max-height: 200px;
  overflow-y: auto;
`;

const DropdownItem = styled.li`
  padding: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #6f7a7a;

  &:hover {
    background: #F6F6F6; 
  }

  ${(props) =>
        props.status === "active" &&
        `
    background-color: #48928e;  
    color: #fff;

    &:hover {
        background-color: #48928e;  
    color: #fff; 
      }
    `}
`;

const options = [
    { label: "Today", value: "today" },
    { label: "Yesterday", value: "yesterday" },
    { label: "Last 7 Days", value: "last7days" },
    { label: "Last 30 Days", value: "last30days" },
    { label: "This Month", value: "thismonth" },
    { label: "Last Month", value: "lastmonth" },
    { label: "Custom Range", value: "custom" },
];

const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
};

const getDateRange = (value) => {
    const today = new Date();
    let startDate, endDate;

    switch (value) {
        case "today":
            startDate = endDate = today;
            break;
        case "yesterday":
            startDate = endDate = new Date(today.setDate(today.getDate() - 1));
            break;
        case "last7days":
            startDate = new Date(today.setDate(today.getDate() - 7));
            endDate = new Date();
            break;
        case "last30days":
            startDate = new Date(today.setDate(today.getDate() - 30));
            endDate = new Date();
            break;
        case "thismonth":
            startDate = new Date(today.getFullYear(), today.getMonth(), 1);
            endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
            break;
        case "lastmonth":
            startDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
            endDate = new Date(today.getFullYear(), today.getMonth(), 0);
            break;
        default:
            startDate = endDate = null;
    }

    if (startDate && endDate) {
        return {
            start: formatDate(startDate),
            end: formatDate(endDate),
        };
    }
    return { start: "", end: "" };
};

const DateDropdown = ({ onDateRangeChange }) => {

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const [selectedOption, setSelectedOption] = useState("last7days");
    const [dateRange, setDateRange] = useState(getDateRange("last7days"));

    const handleOptionClick = (value, label) => {
        setDateRange(getDateRange(value));
        if (value === "today" || value === "yesterday"
            ? onDateRangeChange(label)
            : onDateRangeChange(dateRange.start))
            setSelectedOption(value);
    };

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <DropdownContainer ref={dropdownRef}>
            <InputBox
                value={`${dateRange.start} - ${dateRange.end}`}
                placeholder="Select Date Range"
                readOnly
                onClick={toggleDropdown}
            />
            {isOpen && (
                <DropdownMenu>
                    {options.map((option) => (
                        <DropdownItem
                            key={option.value}
                            onClick={() => handleOptionClick(option.value, option.label)}
                            status={selectedOption === option.value ? "active" : "inactive"}
                        >
                            {option.label}
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            )}
        </DropdownContainer>
    );
};

export default DateDropdown;
