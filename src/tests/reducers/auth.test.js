import authReducer from '../../reducers/auth'

test("should handle login reducer",()=>{
    const uid='Abhinavbansal'
    const action={
        type: "LOGIN",
        uid
    };
    const state=authReducer({},action);
    expect(state.uid).toEqual(uid);
});

test("should handle logout reducer",()=>{
    const action={
        type: "LOGOUT"
    };
    const state=authReducer({uid: 'anything'},action);
    expect(state).toEqual({});
});