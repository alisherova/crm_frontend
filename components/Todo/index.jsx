import React, { useEffect, useRef, useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoMdStarOutline } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import {
    DateGroup,
    DateHeader,
    DateTitle,
    Badge,
    TaskList,
    TaskItem,
    TaskContent,
    TaskTitle,
    TaskDescription,
    TaskMeta,
    PriorityBadge,
    StatusBadge,
    Avatar,
    MoreButton,
    Checkbox,
    DropdownMenu,
    AvatarWrapper,
} from "./styles";
import { fetchTasks } from "@/api/task";
import { deleteTask } from "@/api/task";

const DynamicTaskList = ({
    taskGroups,
    setTaskGroups,
    searchQuery,
    selectedBulkAction,
    setSelectedBulkAction,
}) => {
    const isMounted = useRef(true);
    const [visibleDropdownIndex, setVisibleDropdownIndex] = useState(null);
    const dropdownMenuRef = useRef();
    const [visibleGroups, setVisibleGroups] = useState({});

    useEffect(() => {

        const initialVisibility = taskGroups.reduce((acc, _, index) => {
            acc[index] = true;
            return acc;
        }, {});
        setVisibleGroups(initialVisibility);
    }, [taskGroups]);

    useEffect(() => {
        const loadTasks = async () => {
            const tasks = await fetchTasks();
            if (tasks && isMounted.current) {
                setTaskGroups(tasks);
            }
        };

        loadTasks();

        return () => {
            isMounted.current = false;
        };
    }, [setTaskGroups]);

    useEffect(() => {
        const updateTaskGroups = async () => {
            if (selectedBulkAction === "Delete Marked") {
                const tasksToDelete = taskGroups.flatMap((group) =>
                    group.tasks.filter((task) => task.isChecked)
                );


                await Promise.all(
                    tasksToDelete.map(async (task) => {
                        try {
                            await deleteTask(task._id);
                        } catch (error) {
                            console.error(
                                `Failed to delete task with ID ${task._id}:`,
                                error
                            );
                        }
                    })
                );


                const updatedTaskGroups = taskGroups.map((group) => ({
                    ...group,
                    tasks: group.tasks.filter((task) => !task.isChecked),
                }));
                setTaskGroups(updatedTaskGroups);
                setSelectedBulkAction(null);
            }

            if (selectedBulkAction === "Mark All") {
                const updatedTaskGroups = taskGroups.map((group) => ({
                    ...group,
                    tasks: group.tasks.map((task) => ({
                        ...task,
                        isChecked: true,
                    })),
                }));
                setTaskGroups(updatedTaskGroups);
                setSelectedBulkAction(null);
            }

            if (selectedBulkAction === "Unmark All") {
                const updatedTaskGroups = taskGroups.map((group) => ({
                    ...group,
                    tasks: group.tasks.map((task) => ({
                        ...task,
                        isChecked: false,
                    })),
                }));
                setTaskGroups(updatedTaskGroups);
                setSelectedBulkAction(null);
            }
        };

        if (selectedBulkAction) {
            updateTaskGroups();
        }
    }, [selectedBulkAction, taskGroups, setTaskGroups, setSelectedBulkAction]);


    const filteredTasks = taskGroups.map((group) => ({
        ...group,
        tasks: group.tasks.filter(
            (task) =>
                task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                task.description.toLowerCase().includes(searchQuery.toLowerCase())
        ),
    }));

    const handleCheckboxChange = (groupIndex, taskIndex) => {
        const updatedTasks = [...taskGroups];
        const updatedTask = { ...updatedTasks[groupIndex].tasks[taskIndex] };
        updatedTask.isChecked = !updatedTask.isChecked;

        updatedTasks[groupIndex].tasks[taskIndex] = updatedTask;
        setTaskGroups(updatedTasks);
    };

    const toggleTodo = (groupIndex) => {
        setVisibleGroups((prev) => ({
            ...prev,
            [groupIndex]: !prev[groupIndex],
        }));
    };

    const toggleMenu = (groupIndex, taskIndex) => {
        if (
            visibleDropdownIndex?.groupIndex === groupIndex &&
            visibleDropdownIndex?.taskIndex === taskIndex
        ) {
            setVisibleDropdownIndex(null);
        } else {
            setVisibleDropdownIndex({ groupIndex, taskIndex });
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownMenuRef.current &&
                !dropdownMenuRef.current.contains(event.target)
            ) {
                setVisibleDropdownIndex(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            {filteredTasks.map((group, groupIndex) => (
                <DateGroup key={groupIndex}>
                    <DateHeader onClick={() => toggleTodo(groupIndex)}>
                        <DateTitle>
                            <CiCalendar size={20} />
                            {group.date}
                            {group.date === "Today" && group.badgeCount !== 0 && (
                                <Badge>{group.badgeCount}</Badge>
                            )}
                        </DateTitle>
                        <IoIosArrowDown
                            size={20}

                            style={{
                                transform: visibleGroups[groupIndex]
                                    ? "rotate(0deg)"
                                    : "rotate(180deg)",
                                transition: "transform 0.2s",
                            }}
                        />
                    </DateHeader>
                    {visibleGroups[groupIndex] && (
                        <TaskList>
                            {group.tasks.map((task, taskIndex) => (
                                <TaskItem key={taskIndex}>
                                    <Checkbox
                                        type="checkbox"
                                        checked={task.isChecked}
                                        onChange={() => handleCheckboxChange(groupIndex, taskIndex)}
                                    />
                                    <TaskContent>
                                        <TaskTitle isChecked={task.isChecked}>{task.title}</TaskTitle>
                                        <TaskDescription isChecked={task.isChecked}>
                                            {task.description}
                                        </TaskDescription>
                                    </TaskContent>
                                    <TaskMeta>
                                        <PriorityBadge priority={task.priority}>
                                            {task.priority}
                                        </PriorityBadge>
                                        <StatusBadge status={task.status}>{task.status}</StatusBadge>
                                    </TaskMeta>
                                    <AvatarWrapper>
                                        <Avatar src={task.avatar} alt="User" />
                                        <MoreButton onClick={() => toggleMenu(groupIndex, taskIndex)}>
                                            <HiDotsVertical size={18} />
                                            {visibleDropdownIndex?.groupIndex === groupIndex &&
                                                visibleDropdownIndex?.taskIndex === taskIndex && (
                                                    <DropdownMenu ref={dropdownMenuRef}>
                                                        <li>
                                                            {" "}
                                                            <FaRegEdit />
                                                            Edit
                                                        </li>
                                                        <li>
                                                            <RiDeleteBinLine /> Delete
                                                        </li>
                                                        <li>
                                                            <IoMdStarOutline /> Not Important
                                                        </li>
                                                        <li>
                                                            <IoEyeOutline />
                                                            View
                                                        </li>
                                                    </DropdownMenu>
                                                )}
                                        </MoreButton>
                                    </AvatarWrapper>
                                </TaskItem>
                            ))}
                        </TaskList>
                    )}
                </DateGroup>
            ))}
        </>
    );
};

export default DynamicTaskList;
