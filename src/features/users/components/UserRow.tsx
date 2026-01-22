import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";

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
                        {user.image ? (
                            <Image
                                src={user.image}
                                alt={displayName}
                                width={48}
                                height={48}
                                className="border-2 border-border object-cover"
                            />
                        ) : (
                            <div className="w-12 h-12 border-2 border-border bg-primary flex items-center justify-center text-primary-foreground font-bold font-mono text-xl">
                                {displayName.charAt(0).toUpperCase()}
                            </div>
                        )}

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