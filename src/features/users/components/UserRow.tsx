import { User } from "@prisma/client";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import { Avatar } from "@/components/ui/Avatar";

interface UserRowProps {
    user: User;
    className?: string;
}

export const UserRow = ({ user, className = ""}: UserRowProps) => {
    const displayName = user.firstName && user.lastName
        ? `${user.firstName} ${user.lastName}`
        : user.name;

    return (
        <Link href={`/profile/${user.id}`}>
            <Card className={`hover:border-primary transition-all cursor-pointer ${className}`}>
                <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                        {/* Avatar */}
                        <Avatar
                            src={user.image}
                            alt={displayName}
                            size={48}
                        />

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                            <p className="font-bold text-foreground font-mono uppercase tracking-wide truncate">
                                {displayName}
                            </p>
                            <p className="text-xs text-muted-foreground font-mono truncate">
                                {user.email}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
};