const {createSlice} = require("@reduxjs/toolkit");


const initialState = {
    loggedUser: null,
    jwt: null
}

const userSllice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(user, { payload }) {
            return payload
        }
    }
})

export default userSllice.reducer
export const { login } = userSllice.actions