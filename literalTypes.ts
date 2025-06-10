let userName =  "Bob"
const myName2 = "Ceejay"

let nextUserId = 0

type User = {
    id: number
    username: string
    role: UserRole
}

type UpdateUsers = Partial<User>

type UserRole = "contributor" | "member" | "guest"

const users: User[] = [
    {id: nextUserId++, username: "John", role: "member"},
    {id: nextUserId++, username: "Bisi", role: "guest"},
    // {id: 3, username: "Kemi", role: "contributor"},
    // {id: 4, username: "Queen", role: "member"}
]

const updateUser = (id: number, updates: UpdateUsers) => {
    let user = users.find((user) => user.id === id)
    if (user) {
        Object.assign(user, updates)
    } else {
        console.error('User not found')
    }
}

const addNewUser = (newUser: Omit<User, 'id'>): User => {
    let user: User = {id: nextUserId++, ...newUser}
    users.push(user)
    return user
}

const fetchUserDetails = (username: string): User => {
    const user = users.find(user => user.username === username)
    if (!user) {
        throw new Error(`User with username ${username} not found`)
    }
    return user
}

updateUser(1, {username: 'Changed'})

console.log(users)