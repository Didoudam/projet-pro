import { create } from "zustand";
import { UpdateUserSchemaType, CreateUserSchemaType } from "@/lib/schemas";
import { fetchJson, postJson } from "@/lib/fetch-utils";
import { User } from "@prisma/client";

interface FetchOptions {
	force?: boolean;
	safety?: boolean;
}

type WriterSpec = {
	id: string;
	name: string;
}

type UserWithWriterIds = Omit<User, "isRoot"> & {writers: WriterSpec[]}
type UserPost = string;

interface MyUsersStore {
	user: UserWithWriterIds | undefined;
	currentWriterId?: string;
	posts: UserPost[],

	fetchUserInfo: (id: string, options?: FetchOptions) => Promise<void>;
	fetchPosts: (writerId: string, options?: FetchOptions) => Promise<void>;
}

export const useMyUserStore = create<MyUsersStore>((set, get) => ({
	user: undefined,
	currentWriterId: undefined,
	posts: [],

	fetchUserInfo: async (id: string, option ?: FetchOptions) => {
		const { force = false, safety = false } = option ?? {};
		const { user } = get();

		if (user && !force) {
		    return;
		}

		try {
			const myUser = await fetchJson<UserWithWriterIds>(`/api/users/${id}`);

			set({ user: myUser });
		} catch (err) {
			if (safety) {
				set({ user: undefined });
				return;
			}

			throw err;
		}
	},

	fetchPosts: async (writerId: string, option ?: FetchOptions) => {
		const { force = false, safety = false } = option ?? {};
		const { user, currentWriterId } = get();

		if (!user || (currentWriterId === writerId && !force)) {
		    return;
		}

		if (!user.writers.some(writer => writer.id === writerId)) { //verifie si le writerId de la requette fait partie des writer attribuer a l'utilisateur
			throw new Error("WriterId inconnu !")
		}

		try {
			const posts = await fetchJson<UserPost[]>(`/api/users/${user.id}/writer/${writerId}/posts`);

			set({ posts, currentWriterId: writerId });
		} catch (err) {
			if (safety) {
				set({ posts: [] });
				return;
			}

			throw err;
		}
	}


}));
