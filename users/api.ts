import axios from "axios";
import Papa from "papaparse";

import {IUser, IUserRaw} from "./types";
import {normalizeData} from "./utils";

const BaseURL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSWYhC8EIHLS0IbB-86cHxVEEx_86P7kp9DJj5mwEYcL8z3jcWUOYh3JYy62v587AhHvUVg7WUNlUmp/pub?gid=1141353787&single=true&output=csv";

const api = {
  list: async (): Promise<IUser[]> => {
    return axios
      .get(BaseURL, {
        responseType: "blob",
      })
      .then(
        (response) =>
          new Promise((resolve, reject) => {
            Papa.parse<IUserRaw>(response.data, {
              header: true,
              complete: (results) => {
                const data = normalizeData(results.data);

                return resolve(data);
              },
              error: (error) => reject(error.message),
            });
          }),
      );
  },
  fetchById: async (id: string): Promise<IUser> => {
    const users: IUser[] = await api.list();

    const user = users.find((user) => user.id === id);

    if (!user) throw new Error("user not found");

    return user;
  },
};

export default api;
