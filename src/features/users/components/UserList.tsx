"use client"

import useAsyncAction from "@/hooks/useAsyncAction";
import { useAllUsersStore } from "@/stores/useAllUsersStore";
import { useEffect } from "react";
import { UserRow } from "./UserRow";
import { Button } from "@/components/ui/Button";

export const UserList = () => {
    const { isPending, execute } = useAsyncAction();
    const { users, fetchUsers, createUser} = useAllUsersStore()

    useEffect(() => {
        execute(fetchUsers());
    }, [execute, fetchUsers])

    if (isPending) {
        return (
            <div className="min-h-screen bg-background pattern-dots p-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-center h-64">
                        <p className="text-muted-foreground font-mono uppercase tracking-wider">Chargement...</p>
                    </div>
                </div>
            </div>
        );
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

    return (
        <div className="min-h-screen bg-background pattern-dots p-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-foreground font-mono uppercase tracking-wide">
                        Réseau
                    </h1>
                    <Button onClick={handleAddUser} variant="primary">
                        Ajouter un utilisateur
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {users?.map((u) => <UserRow key={u.id} user={u} />)}
                </div>
            </div>
        </div>
    )
    
}