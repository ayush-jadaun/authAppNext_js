interface UserProfileProps {
    params: { id: string }
}

export default function UserProfile({ params }: UserProfileProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p className="text-4xl">Profile Page</p>
            <span className="p-2 rounded bg-orange-500">{params.id}</span>
        </div>
    )
}
