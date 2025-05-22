import { GroupData } from "@/types/types";
import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface GroupState{
    groups: GroupData[];
}

const initialState:GroupState = {
    groups: [],
}
const groupSlice = createSlice({
    name:"groups",
    initialState,
    reducers:{
        setGroups: (state, action: PayloadAction<GroupData[]>) => {
            state.groups = action.payload
        },
    }
});
const groupStore = configureStore({
    reducer:{
        groups: groupSlice.reducer
    }
});
export const {setGroups} = groupSlice.actions;
export default groupStore;