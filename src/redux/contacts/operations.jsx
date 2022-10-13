import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll", async (_, thunkAPI) => {
    try {
      const res = await axios.get("/contacts");
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact", async (contactId, thunkAPI) => {
    try {
      const res = await axios.delete(`/contacts/${contactId}`);
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const isIncludes = (newName, contacts) => {
  return contacts.find(
    contact => contact.name.toLocaleLowerCase() === newName.toLocaleLowerCase()
  )
};
export const addContact = createAsyncThunk(
  "contacts/addContact", async ({ name, number }, thunkAPI) => {
    const stateContacts = thunkAPI.getState().contacts.items;
    if (isIncludes(name, stateContacts)) {
      toast.error(`${name} is already in contacts`);
      return thunkAPI.rejectWithValue(`${name} is already in contacts`);
    }

    try {
      const res = await axios.post("/contacts", { name, number });
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);