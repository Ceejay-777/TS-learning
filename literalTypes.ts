let userName =  "Bob"
const myName2 = "Ceejay"

type User = {
    username: string
    role: UserRole
}

type UserRole = "admin" | "user" | "guest"

const users: User[] = [
    {username: "John", role: "admin"},
    {username: "Bisi", role: "guest"},
    {username: "Kemi", role: "user"}
]

const fetchUserDetails = (username: string): User => {
    const user = users.find(user => user.username === username)
    if (!user) {
        throw new Error(`User with username ${username} not found`)
    }
    return user
}