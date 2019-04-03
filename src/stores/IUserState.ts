export interface IUserState {
    loggedIn: boolean | null;
    token: string | null;
    csrf: string | null;
    clientId: string | null;
}
