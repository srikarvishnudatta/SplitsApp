import { ExpenseType } from "@/types/types";
import axiosInstance from "./axios";
import { EXPENSE, GROUP } from "@/lib/endpoints";

async function createExpense(data: ExpenseType){
    return await axiosInstance.post(`${GROUP}${data.groupId}/${EXPENSE}`, data);
}
export {createExpense};