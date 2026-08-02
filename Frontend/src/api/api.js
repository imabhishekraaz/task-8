import axios from 'axios'

const onlineAPI = 'https://to-do-application-poa1.onrender.com';
// All APIs
const signupUserAPI = import.meta.env?.VITE_SIGNUP_URL || `${onlineAPI}/api/user/signup`
const loginUserAPI = import.meta.env?.VITE_LOGIN_URL || `${onlineAPI}/api/user/login`
const verifyTokenAPI = import.meta.env?.VITE_VERIFY_URL || `${onlineAPI}/api/user/verify`
const userAllTasksAPI = import.meta.env?.VITE_ALL_TASKS || `${onlineAPI}/api/user/tasks`
const deleteUserTaskAPI = import.meta.env?.VITE_DELETE_TASK || `${onlineAPI}/api/user/task`
const getUserTaskDetailsAPI = import.meta.env?.VITE_TASK_DETAILS || `${onlineAPI}/api/user/task`
const addUserTaskAPI = import.meta.env?.VITE_ADD_TASK || `${onlineAPI}/api/user/task`


/**
 * - METHOD - POST,
 * - signup the user with Name,Email,Password and gender
 * @requires { Name , Email , Password , Gender}
 * @param {string} name - A User Name
 * @param {string} Email - A unique User Email ID
 * @param {password} Password - A User Password 
 * @param {string} Gender - user gender 
 */
export const signupUser = async (userData) => {

    try {
        const response = await axios.post(signupUserAPI, userData);
        return response
    } catch (err) {
        if (err.response) {
            console.error("Backend Error Message:", err.response.data);
            console.error("Status Code:", err.response.status);

        } else if (err.request) {
            console.error("No response received from backend:", err.request);

        } else {
            console.error("Error setting up request:", err.message);
        }
    }
}
/**
 * - METHOD - POST,
 * - Login the user with email and password
 * @requires { Email , Password}
 * @param {string} Email - A unique User Email ID
 * @param {password} Password - A User Password  
 */
export const loginUser = async (userData) => {

    try {
        const response = await axios.post(loginUserAPI, userData);
        return response;
    } catch (err) {
        if (err.response) {
            console.error("Backend Error Message:", err.response.data);
            console.error("Status Code:", err.response.status);

        } else if (err.request) {
            console.error("No response received from backend:", err.request);

        } else {
            console.error("Error setting up request:", err.message);
        }
    }

}


/**
 * - METHOD - GET,
 * - Verify the user JWT Token
 * @requires { JWT Token}
 */
export const verifyToken = async () => {
    try {
        // Get user details from the localstorage
        const user = JSON.parse(localStorage.getItem('user'));
        const response = await axios.get(verifyTokenAPI,
            {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            }
        )
        return response
    } catch (err) {
        if (err.response) {
            console.error("Backend Error Message:", err.response.data);
            console.error("Status Code:", err.response.status);

        } else if (err.request) {
            console.error("No response received from backend:", err.request);

        } else {
            console.error("Error setting up request:", err.message);
        }
    }
}

// Handle logout button

export const handleLogoutButton = (navigate) => {
    localStorage.removeItem('user');
    navigate('/login')
}

/**
 * - METHOD - GET,
 * - get user tasks
 * @requires { JWT Token}
 */
export const getUserTasks = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    try {
        const response = axios.get(userAllTasksAPI, {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        })
        return response

    } catch (err) {
        if (err.response) {
            console.error("Backend Error Message:", err.response.data);
            console.error("Status Code:", err.response.status);

        } else if (err.request) {
            console.error("No response received from backend:", err.request);

        } else {
            console.error("Error setting up request:", err.message);
        }
    }
}


/**
 * - METHOD - DELETE,
 * - Delete the user task
 * @requires { JWT Token, Task ID}
 * @param {import('mongoose').ObjectId} TaskID - A unique task id
 */
export const deleteUserTask = async (taskId) => {
    const user = JSON.parse(localStorage.getItem('user'));
    try {
        const response = await axios.delete(`${deleteUserTaskAPI}/${taskId}`, {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        })
        return response
    } catch (err) {
        if (err.response) {
            console.error("Backend Error Message:", err.response.data);
            console.error("Status Code:", err.response.status);

        } else if (err.request) {
            console.error("No response received from backend:", err.request);

        } else {
            console.error("Error setting up request:", err.message);
        }
    }
}


/**
 * - METHOD - GET,
 * - Get user task with the TaskId
 * @requires { JWT Token, Task ID}
 * @param {import('mongoose').ObjectId} TaskID - A unique task id
 */
export const getUserTaskDetails = async (taskId) => {
    const user = JSON.parse(localStorage.getItem('user'));

    try {
        const response = await axios.get(`${getUserTaskDetailsAPI}/${taskId}`, {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        })
        return response

    } catch (err) {
        if (err.response) {
            console.error("Backend Error Message:", err.response.data);
            console.error("Status Code:", err.response.status);

        } else if (err.request) {
            console.error("No response received from backend:", err.request);

        } else {
            console.error("Error setting up request:", err.message);
        }
    }
}

/**
 * - METHOD - POST,
 * - Create a user task 
 * @requires { JWT Token, Title, description}
 * @param {string} Title Task's Title
 * @param {string} description Task's description
 */
export const addUserTask = async (taskDetails) => {
    const user = JSON.parse(localStorage.getItem('user'));

    try {
        const response = await axios.post(addUserTaskAPI,taskDetails, {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        })

        return response
    } catch (err) {
        if (err.response) {
            console.error("Backend Error Message:", err.response.data);
            console.error("Status Code:", err.response.status);

        } else if (err.request) {
            console.error("No response received from backend:", err.request);

        } else {
            console.error("Error setting up request:", err.message);
        }
    }
}




