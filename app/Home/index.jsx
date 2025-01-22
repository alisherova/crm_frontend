import MainLayout from '@/layout/Main'
import React, { useState } from 'react'
import TodoSidebar from '@/components/TodoSidebar'
import HomePageHeader from '@/components/HomePageHeader'
import TodoList from '@/components/TodoList'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { CollapseArrow, LinearDiv, Wrapper } from './styles'

const HomePage = () => {

    const [taskGroups, setTaskGroups] = useState([])

    return (
        <MainLayout>
            <HomePageHeader setTaskGroups={setTaskGroups} />
            <div>
                <CollapseArrow>
                    <IoIosArrowDroprightCircle stroke='white' fill='#1B2850' size={28} />
                    <LinearDiv></LinearDiv>
                </CollapseArrow>
                <Wrapper>
                    <TodoSidebar />
                    <TodoList taskGroups={taskGroups} setTaskGroups={setTaskGroups} />
                </Wrapper>
            </div>
        </MainLayout>
    )
}

export default HomePage