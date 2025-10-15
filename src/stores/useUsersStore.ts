import { create } from "zustand";
import { UpdateUserSchemaType, CreateUserSchemaType } from "@/lib/schemas";
import { fetchJson, postJson } from "@/lib/fetch-utils";
import { User } from "@prisma/client";
import { appendUser } from "@/lib/server/users.actions";

interface FetchOptions {
	force?: boolean;
	safety?: boolean;
}

interface UsersStore {
	users: User[] | undefined;

	fetchUsers: (options?: FetchOptions) => Promise<void>;
	updateUser: (id: string, data: UpdateUserSchemaType) => Promise<void>;
	createUser: (data: CreateUserSchemaType) => Promise<void>;
}

export const useUsersStore = create<UsersStore>((set, get) => ({
	users: undefined,

	fetchUsers: async (options?: FetchOptions) => {
		const { force = false, safety = false } = options ?? {};
		const { users } = get();

		if (users && !force) {
		    return;
		}

		try {
			const userList = await fetchJson<User[]>("/api/users/");

			set({ users: userList });
		} catch (err) {
			if (safety) {
				set({ users: [] });
				return;
			}

			throw err;
		}
	},

	updateUser: async (id: string, data: UpdateUserSchemaType) => {
		const updatedUser = await postJson<User>(`/api/users/${id}`, data);
		const usersWithoutUpdated = (get().users ?? []).filter((u) => u.id !== id);

		set({ users: [...usersWithoutUpdated, updatedUser] });
	},

	createUser: async (data: CreateUserSchemaType) => {
		const newUser = await postJson<User>("/api/users", data);
		set({ users: [...(get().users ?? []), newUser] });
	},
}));
