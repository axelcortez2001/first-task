// utils/api.js
import Axios from "axios";

const api_url = "https://master.d2jxnxewppnx52.amplifyapp.com/api/routes";

export const getData = async () => {
  try {
    const res = await fetch(api_url, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to get data.");
    } else {
      return res.json();
    }
  } catch (error) {
    console.log(error);
  }
};

export const addData = async (todo) => {
  try {
    const res = await fetch(api_url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    });
    const newData = await res.json();
    return newData;
  } catch (error) {
    console.error(error);
  }
};

export const delData = async (id) => {
  try {
    await fetch(`${api_url}?id=${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error(error);
  }
};

export const getSingleTask = async (id) => {
  try {
    const res = await fetch(`${api_url}/${id}`, {
      cache: "no-store",
    });
    const todo_data = res.json();
    return todo_data;
  } catch (error) {
    console.error(error);
  }
};

export const editData = async (id, todo) => {
  try {
    const res = await fetch(`${api_url}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    });
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const updated_data = await res.json();
    return updated_data;
  } catch (error) {
    console.error(error);
  }
};
