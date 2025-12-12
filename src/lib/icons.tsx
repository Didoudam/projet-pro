import {
    FaHome,
    FaUsers,
    FaBell,
    FaUser,
    FaSignOutAlt,
    FaBriefcase,
    FaComment,
    FaEdit,
    FaArrowUp,
    FaArrowDown,
} from "react-icons/fa";

/**
 * Icônes centralisées pour toute l'application
 * Changez ici pour modifier les icônes partout
 */

// Navigation
export const HomeIcon = FaHome;
export const UsersIcon = FaUsers;
export const NotificationsIcon = FaBell;
export const ProfileIcon = FaUser;
export const LogoutIcon = FaSignOutAlt;
export const CompanyIcon = FaBriefcase;

// Interactions
export const CommentIcon = FaComment;
export const UpvoteIcon = FaArrowUp;
export const DownvoteIcon = FaArrowDown;
export const PostIcon = FaEdit;

// Emojis pour les stats (peuvent être remplacés par des composants React Icons)
export const StatsIcons = {
    posts: "📝",
    comments: "💬",
    upvotes: "👍",
    downvotes: "👎",
    skills: "⭐",
    warning: "⚠️",
    verified: "✓",
} as const;

// Couleurs associées aux icônes (optionnel)
export const IconColors = {
    primary: "text-blue-600",
    success: "text-green-600",
    warning: "text-yellow-600",
    danger: "text-red-600",
    muted: "text-gray-600",
} as const;
