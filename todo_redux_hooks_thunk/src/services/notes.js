import axios from "axios";

const baseUrl = "http://localhost:3001/notes";

const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
};

const createNew = async (text) => {
    const object = { text, completed: false };
    const response = await axios.post(baseUrl, object);
    return response.data;
}

const deleteOne = async (id) => {
    const response = await axios.delete(baseUrl + id);
    return response.status;
}

export default { getAll, createNew, deleteOne };