

import { User } from "@prisma/client";

interface UserRowProps {
    user: User;
    className?: string;
}

export const UserRow = ({ user, className = ""}: UserRowProps) => {

    return <div className={className}>
        <span>{user.name}</span>
    </div>
};