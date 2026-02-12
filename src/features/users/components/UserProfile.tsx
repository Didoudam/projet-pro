"use client";

import { User, Skill, Experience, formation } from "@prisma/client";
import { Post } from "@/features/posts/components/Post";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { RelationButton } from "@/features/relations";
import { Avatar } from "@/components/ui/Avatar";

type UserWithRelations = User & {
	skill: Skill[];
	Experience: (Experience & {
		company: {
			id: string;
			name: string;
			image: string | null;
		} | null;
	})[];
	formation: (formation & {
		company: {
			id: string;
			name: string;
			image: string | null;
		} | null;
	})[];
};

interface UserProfileProps {
	user: UserWithRelations;
	posts: any[];
}

export function UserProfile({ user, posts }: UserProfileProps) {
	const displayName = user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : user.name;

	// Calculer les statistiques
	const totalPosts = posts.length;
	const totalComments = posts.reduce((acc, post) => acc + post.Comment.length, 0);
	const upvotes = posts.reduce((acc, post) => acc + post.Vote.filter((v) => v.status === true).length, 0);
	const downvotes = posts.reduce((acc, post) => acc + post.Vote.filter((v) => v.status === false).length, 0);

	return (
		<div className='min-h-screen bg-background pattern-dots p-2 sm:p-4 md:p-6'>
			<div className='max-w-7xl mx-auto space-y-4 sm:space-y-6'>
				{/* En-tête du profil */}
				<Card>
					<CardContent className='p-4 sm:p-6'>
						<div className='flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6'>
							{/* Avatar */}
							<Avatar
								src={user.image}
								alt={displayName}
								size={120}
								className='w-20 h-20 sm:w-24 sm:h-24 md:w-30 md:h-30'
							/>

							{/* Informations */}
							<div className='flex-1 w-full text-center sm:text-left'>
								<div className='flex flex-col sm:flex-row items-center sm:items-start sm:justify-between gap-2 mb-2'>
									<h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-foreground font-mono uppercase tracking-wide'>{displayName}</h1>
									{/* Bouton de relation */}
									<RelationButton targetUserId={user.id} targetUserName={displayName} />
								</div>
								<p className='text-muted-foreground mb-3 sm:mb-4 font-mono text-xs sm:text-sm'>{user.email}</p>

								{/* Statistiques en ligne */}
								<div className='flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4'>
									<Badge variant='primary'>
										<span className='font-bold'>{totalPosts}</span> Posts
									</Badge>
									<Badge variant='accent'>
										<span className='font-bold'>{totalComments}</span> <span className='hidden sm:inline'>Commentaires</span>
										<span className='sm:hidden'>Comm.</span>
									</Badge>
									<Badge variant='secondary'>
										<span className='font-bold'>{user.skill.length}</span> <span className='hidden sm:inline'>Compétences</span>
										<span className='sm:hidden'>Comp.</span>
									</Badge>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* Grille principale */}
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6'>
					{/* Colonne gauche - Informations */}
					<div className='lg:col-span-1 space-y-6'>
						{/* Compétences */}
						{user.skill.length > 0 && (
							<Card>
								<CardHeader pattern='dots'>
									<CardTitle mono>Compétences</CardTitle>
								</CardHeader>
								<CardContent>
									<div className='space-y-3'>
										{user.skill.map((skill) => (
											<div key={skill.id}>
												<div className='flex justify-between mb-1'>
													<span className='font-medium text-sm font-mono text-foreground'>{skill.name}</span>
													<span className='text-sm text-muted-foreground font-mono font-bold'>{skill.level}/5</span>
												</div>
												<div className='flex gap-1'>
													{[1, 2, 3, 4, 5].map((level) => (
														<div key={level} className={`flex-1 h-2 border border-border ${level <= skill.level ? "bg-primary" : "bg-muted"}`} />
													))}
												</div>
											</div>
										))}
									</div>
								</CardContent>
							</Card>
						)}
						{/* Expériences */}
						{user.Experience.length > 0 && (
							<Card>
								<CardHeader pattern='grid'>
									<CardTitle mono>Expériences</CardTitle>
								</CardHeader>
								<CardContent>
									<div className='space-y-4'>
										{user.Experience.map((exp) => (
											<div key={exp.id} className='border-l-2 border-primary pl-4'>
												<h3 className='font-semibold text-foreground font-mono'>{exp.name}</h3>
												{exp.company && <p className='text-sm text-muted-foreground font-mono'>{exp.company.name}</p>}
												<p className='text-sm text-muted-foreground font-mono'>
													{new Date(exp.startDate).toLocaleDateString()} - {exp.endDate ? new Date(exp.endDate).toLocaleDateString() : "Aujourd'hui"}
												</p>
												{exp.description && <p className='text-sm text-foreground mt-2'>{exp.description}</p>}
											</div>
										))}
									</div>
								</CardContent>
							</Card>
						)}

						{/* Formations */}
						{user.formation.length > 0 && (
							<Card>
								<CardHeader pattern='barcode'>
									<CardTitle mono>Formations</CardTitle>
								</CardHeader>
								<CardContent>
									<div className='space-y-4'>
										{user.formation.map((form) => (
											<div key={form.id} className='border-l-2 border-accent pl-4'>
												<h3 className='font-semibold text-foreground font-mono'>{form.name}</h3>
												{form.company && <p className='text-sm text-muted-foreground font-mono'>{form.company.name}</p>}
												<p className='text-sm text-muted-foreground font-mono'>
													{new Date(form.startDate).toLocaleDateString()} - {form.endDate ? new Date(form.endDate).toLocaleDateString() : "En cours"}
												</p>
												{form.description && <p className='text-sm text-foreground mt-2'>{form.description}</p>}
											</div>
										))}
									</div>
								</CardContent>
							</Card>
						)}
					</div>

					{/* Colonne droite - Activité */}
					<div className='lg:col-span-2 space-y-6'>
						{/* Posts récents */}
						<div>
							<h2 className='text-xl font-bold mb-4 px-2 text-foreground font-mono uppercase tracking-wide'>Posts récents</h2>
							{posts.length > 0 ? (
								<div className='space-y-4'>
									{posts.map((post) => (
										<Post key={post.id} post={post} />
									))}
								</div>
							) : (
								<Card>
									<CardContent className='p-6'>
										<p className='text-muted-foreground text-center py-8 font-mono uppercase tracking-wider'>Aucun post publié</p>
									</CardContent>
								</Card>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
