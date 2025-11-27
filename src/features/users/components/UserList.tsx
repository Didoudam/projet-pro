"use client"

import useAsyncAction from "@/hooks/useAsyncAction";
import { useAllUsersStore } from "@/stores/useAllUsersStore";
import { useEffect } from "react";
import { UserRow } from "./UserRow";

export const UserList = () => {
    const { isPending, execute } = useAsyncAction();
    const { users, fetchUsers, createUser} = useAllUsersStore()

    useEffect(() => {
        execute(fetchUsers());
    }, [execute, fetchUsers])

    if (isPending) {
        return null; // mettre un loader ici
    }

    const handleAddUser = () => {
        const now = Date.now();
        createUser({
            name: `name-${now}`,
            firstName: `firstname-${now}`,
            lastName: `lastname-${now}`,
            email: `m-${now}@exemple.com`,
            password: "Password123!",
            image: null,
        });
    }

    return <div>
        <div>
            <button onClick={handleAddUser}>ajouter</button>
        </div>
        <div>
            {users?.map((u) => <UserRow key={u.id} user={u} />)}
        </div>
    </div>
    
}