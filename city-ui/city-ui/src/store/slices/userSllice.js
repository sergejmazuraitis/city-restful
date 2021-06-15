const {createSlice} = require("@reduxjs/toolkit");


const initialState = {
    loginUser: null,
    jwt: null
}

const userSllice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(user, { payload }) {
            return payload
        },
        logout(){
            return initialState
        }
    }
})

export default userSllice.reducer
export const { login, logout } = userSllice.actions