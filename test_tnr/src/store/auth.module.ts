import { UserService, AuthenticationError } from '../services/user.service'
import { TokenService } from '../services/storage.service'
import router from '../router'


// const state =  {
//     authenticating: false,
//     accessToken: TokenService.getToken(),
//     authenticationErrorCode: 0,
//     authenticationError: ''
// }

// const getters = {
//     loggedIn: (state: any) => {
//         return state.accessToken ? true : false
//     },

//     authenticationErrorCode: (state: any) => {
//         return state.authenticationErrorCode
//     },

//     authenticationError: (state: any) => {
//         return state.authenticationError
//     },

//     authenticating: (state: any) => {
//         return state.authenticating
//     }
// }

// const actions = {
//     async login({ commit }, {email, password}) {
//         commit('loginRequest');

//         try {
//             const token = await UserService.login(email, password);
//             commit('loginSuccess', token)

//             // Redirect the user to the page he first tried to visit or to the home view
//             router.push(router.history.current.query.redirect || '/');

//             return true
//         } catch (e) {
//             if (e instanceof AuthenticationError) {
//                 commit('loginError', {errorCode: e.errorCode, errorMessage: e.message})
//             }

//             return false
//         }
//     },

//     logout({ commit }) {
//         UserService.logout()
//         commit('logoutSuccess')
//         router.push('/login')
//     }
// }

// const mutations = {
//     loginRequest(state) {
//         state.authenticating = true;
//         state.authenticationError = ''
//         state.authenticationErrorCode = 0
//     },

//     loginSuccess(state, accessToken) {
//         state.accessToken = accessToken
//         state.authenticating = false;
//     },

//     loginError(state, {errorCode, errorMessage}) {
//         state.authenticating = false
//         state.authenticationErrorCode = errorCode
//         state.authenticationError = errorMessage
//     },

//     logoutSuccess(state) {
//         state.accessToken = ''
//     }
// }

export const auth = {
    namespaced: true,
    // state,
    // getters,
    // actions,
    // mutations
}