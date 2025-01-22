import React, { useState, useEffect, useRef } from "react";
import {
    DropdownContainer,
    DropdownHeader,
    ArrowIcon,
    DropdownList,
    DropdownItem,
    Wrapper,
} from "./styles";

const CustomDropdown = ({
    options = [],
    placeholder = "Select an option",
    width,
    maxHeight,
    icon,
    onSelect,
    name,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen((prev) => !prev);

    const handleSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);

        if (onSelect) {
            onSelect(name, option);
        }
    };

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

    return (
        <DropdownContainer width={width} ref={dropdownRef}>
            <DropdownHeader
                onClick={toggleDropdown}
                className={`${isOpen ? "active" : ""}`}
            >
                <Wrapper>
                    {icon && icon}
                    {selectedOption || placeholder}
                </Wrapper>
                <ArrowIcon active={isOpen} />
            </DropdownHeader>
            {isOpen && (
                <DropdownList maxHeight={maxHeight}>
                    {options.map((option, index) => (
                        <DropdownItem key={index} onClick={() => handleSelect(option)}>
                            {option}
                        </DropdownItem>
                    ))}
                </DropdownList>
            )}
        </DropdownContainer>
    );
};

export default CustomDropdown;
