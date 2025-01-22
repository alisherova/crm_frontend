import React, { useEffect, useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import CustomDropdown from "../CustomDropdown";
import DateDropdown from "../DateDropdown";
import { createTask, fetchTasks } from "@/api/task";
import {
    ModalOverlay,
    ModalWrapper,
    ModalHeader,
    ModalTitle,
    CloseButton,
    Form,
    FormGroup,
    Label,
    Input,
    FormRow,
    TextArea,
    ButtonGroup,
    CancelButton,
    SubmitButton,
    ErrorMessage,
} from "./styles";

const AddTodoModal = ({ isOpen, onClose, setTaskGroups, setIsOpen }) => {
    const [formData, setFormData] = useState({
        title: "",
        assignee: "",
        tag: "",
        priority: "",
        status: "",
        description: "",
    });

    const [errors, setErrors] = useState({});
    const modalRef = useRef(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setErrors((prev) => ({ ...prev, [e.target.name]: false }));
    };

    const handleDropdownChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors((prev) => ({ ...prev, [name]: false }));
    };

    const handleDateRangeChange = (range) => {
        setFormData((prev) => ({
            ...prev,
            date: range,
        }));
        setErrors((prev) => ({ ...prev, date: false }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.title.trim()) newErrors.title = "Title is required.";
        if (!formData.assignee) newErrors.assignee = "Assignee is required.";
        if (!formData.tag) newErrors.tag = "Tag is required.";
        if (!formData.priority) newErrors.priority = "Priority is required.";
        if (!formData.status) newErrors.status = "Status is required.";
        if (!formData.date) newErrors.date = "Date is required.";
        if (!formData.description.trim()) {
            newErrors.description = "Description is required.";
        } else if (formData.description.length > 60) {
            newErrors.description = "Description must be 60 characters or less.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const formDataWithAvatar = {
            ...formData,
            avatar: "/assets/images/user-04.jpg",
        };

        try {
            await createTask(formDataWithAvatar);
            const tasks = await fetchTasks();
            if (tasks) {
                setTaskGroups(tasks);
            }
            setFormData({
                title: "",
                assignee: "",
                tag: "",
                priority: "",
                date: "",
                status: "",
                description: "",
            });
            onClose();
        } catch (error) {
            console.error("Error creating task:", error);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const assigneeOptions = ["Choose", "Recent 1", "Recent 2"];
    const tagOptions = ["Select", "Tag 1", "Tag 2"];
    const priorityOptions = ["Select", "High", "Medium", "Low"];
    const statusOptions = ["Select", "New", "InProgress", "Completed"];

    return (
        <ModalOverlay >
            <ModalWrapper ref={modalRef}>
                <ModalHeader>
                    <ModalTitle>Add Todo</ModalTitle>
                    <CloseButton onClick={onClose}>
                        <MdClose size={16} />
                    </CloseButton>
                </ModalHeader>

                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label>Todo Title<span>*</span></Label>
                        <Input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                        {errors.title && <ErrorMessage>{errors.title}</ErrorMessage>}
                    </FormGroup>

                    <FormGroup>
                        <Label>Assignee<span>*</span></Label>
                        <CustomDropdown
                            options={assigneeOptions}
                            placeholder="Choose"
                            width={"100%"}
                            required={true}
                            name="assignee"
                            onSelect={handleDropdownChange}
                        />
                        {errors.assignee && <ErrorMessage>{errors.assignee}</ErrorMessage>}
                    </FormGroup>

                    <FormRow>
                        <FormGroup>
                            <Label>Tag<span>*</span></Label>
                            <CustomDropdown
                                options={tagOptions}
                                placeholder="Select"
                                width={"100%"}
                                required={true}
                                name="tag"
                                onSelect={handleDropdownChange}
                            />
                            {errors.tag && <ErrorMessage>{errors.tag}</ErrorMessage>}
                        </FormGroup>

                        <FormGroup>
                            <Label>Priority<span>*</span></Label>
                            <CustomDropdown
                                options={priorityOptions}
                                placeholder="Select"
                                width={"100%"}
                                required={true}
                                name="priority"
                                onSelect={handleDropdownChange}
                            />
                            {errors.priority && <ErrorMessage>{errors.priority}</ErrorMessage>}
                        </FormGroup>
                    </FormRow>

                    <FormRow>
                        <FormGroup>
                            <Label>Due Date<span>*</span></Label>
                            <DateDropdown onDateRangeChange={handleDateRangeChange} />
                            {errors.date && <ErrorMessage>{errors.date}</ErrorMessage>}
                        </FormGroup>

                        <FormGroup>
                            <Label>Status<span>*</span></Label>
                            <CustomDropdown
                                options={statusOptions}
                                placeholder="Select"
                                width={"100%"}
                                required={true}
                                name="status"
                                onSelect={handleDropdownChange}
                            />
                            {errors.status && <ErrorMessage>{errors.status}</ErrorMessage>}
                        </FormGroup>
                    </FormRow>

                    <FormGroup>
                        <Label>Descriptions<span>*</span></Label>
                        <TextArea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Maximum 60 Characters"
                            maxLength={60}
                        />
                        {errors.description && <ErrorMessage>{errors.description}</ErrorMessage>}
                    </FormGroup>


                    <ButtonGroup>
                        <CancelButton type="button" onClick={onClose}>
                            Cancel
                        </CancelButton>
                        <SubmitButton type="submit">Submit</SubmitButton>
                    </ButtonGroup>
                </Form>
            </ModalWrapper>
        </ModalOverlay>
    );
};

export default AddTodoModal;
