import { GroupData } from "@/types/types";
import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface GroupState{
    groups: GroupData[];
    selectedGroupId: number | null
}

const initialState:GroupState = {
    groups: [],
    selectedGroupId: null
}
const groupSlice = createSlice({
    name:"groups",
    initialState,
    reducers:{
        setGroups: (state, action: PayloadAction<GroupData[]>) => {
            state.groups = action.payload
        },
        selectGroup: (state, action: PayloadAction<number | null>) =>{
            state.selectedGroupId = action.payload
        }
    }
});
const groupStore = configureStore({
    reducer:{
        groups: groupSlice.reducer
    }
});
export const {setGroups, selectGroup} = groupSlice.actions;
export default groupStore;