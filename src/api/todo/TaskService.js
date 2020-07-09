import axios from 'axios'
class TaskService {
    getTasks(userId) {
        return axios.get(`http://localhost:8080/rest/users/${userId}/tasks`);
    }

    getTask(id) {
        return axios.get(`http://localhost:8080/rest/task/${id}`);
    }

    deleteTask(id) {
        return axios.delete(`http://localhost:8080/rest/users/tasks/d/${id}`);
    }
}
export default new TaskService()