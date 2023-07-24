import $host from "./index";
import { Page, ServiceListItem, ServiceTabItem, TabOption } from "../types";

export const fetchPageData = async (id: number): Promise<Page> => {
  try {
    const response = await $host.get(`/page/${id}`);
    return response.data;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const fetchListItems = async (): Promise<ServiceListItem[]> => {
  try {
    const response = await $host.get("/service/list-items");

    return response.data;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const fetchTabOptions = async (): Promise<TabOption[]> => {
  try {
    const response = await $host.get("/service/tab-options");

    return response.data;
  } catch (e: any) {
    throw new Error(e.message);
  }
};

export const fetchTabItems = async (): Promise<ServiceTabItem[]> => {
  try {
    const response = await $host.get("/service/tab-items");

    return response.data;
  } catch (e: any) {
    throw new Error(e.message);
  }
};
