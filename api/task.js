import axios from "axios";

export const fetchTasks = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/tasks`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error.response.data);
  }
};

export const createTask = async (taskData) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/tasks`,
      taskData
    );
    return response.data;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};

export const deleteTask = async (taskId) => {
  try {
    await axios.delete(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/tasks/${taskId}`
    );
  } catch (error) {
    console.error("Error deleting task:", error);
  }
};
