import HTTP from "."

const userRegister = (newUser) => HTTP.post('/user', newUser)

const getUserById = (userId) => HTTP.get('/user/' + userId)

const deleteUserById = (userId) => HTTP.delete('/user/' + userId)

const updateUser = (user) => HTTP.put('/user', user)

export { userRegister, getUserById, deleteUserById, updateUser }