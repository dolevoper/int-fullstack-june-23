import { SerializableList } from "./Serializable.js";
import { User, Admin, Client, UserTypes } from "./User.js";
import * as Storage from "./Storage.js";


type UsersList = SerializableList<User>;
type CurrentUser = UserTypes | UserNotFound;

export class UserNotFound extends Error { };
export class InvalidPassword extends Error { };
export class UserAlreadyExists extends Error { };
export type LoginResponse = Client | Admin | UserNotFound | InvalidPassword

export class UsersManager {

    static SOTRAGE_KEY_REGISTERED_USERS = "registered_users"
    static STORAGE_CURRENT_USER = "current_user";

    currentUser: CurrentUser;
    private usersList: UsersList;

    constructor() {
        this.currentUser = this.loadCurrentUser();
        this.usersList = this.loadUsers();
    }


    private loadUsers(): UsersList {
        let loadedUsers = Storage.load<SerializableList<User>>(UsersManager.SOTRAGE_KEY_REGISTERED_USERS)

        if (!loadedUsers)
            loadedUsers = new SerializableList<User>(UsersManager.SOTRAGE_KEY_REGISTERED_USERS);

        return loadedUsers;
    }

    private saveUsersList() {
        Storage.save<UsersList>(UsersManager.SOTRAGE_KEY_REGISTERED_USERS, this.usersList);
    }

    private loadCurrentUser(): CurrentUser {
        const loadedUser = Storage.load<UserTypes>(UsersManager.STORAGE_CURRENT_USER);

        if (!loadedUser) return new UserNotFound;

        if (UsersManager.isAdmin(loadedUser)) {
            const placeholder = new Admin("", "");
            Object.assign(placeholder, loadedUser);
            return placeholder;
        }
        else {
            const placeholder = new Client("", "");
            Object.assign(placeholder, loadedUser);
            return placeholder;
        }
    }

    saveCurrentUser(user: User): void {
        Storage.save<User>(UsersManager.STORAGE_CURRENT_USER, user);
    }

    clearCurrentUser() {
        Storage.remove(UsersManager.STORAGE_CURRENT_USER)
    }

    static isAdmin(user: User): boolean {
        return ((user as Admin).adminId !== undefined)
    }

    static isClient(user: User): boolean {
        return (user as Client).clientId !== undefined;
    }

    isCurrentUserAdmin(): Admin | undefined {
        if (this.currentUser instanceof Admin)
            return this.currentUser;
    }

    isCurrentUserClient(): Client | undefined {
        if (this.currentUser instanceof Client)
            return this.currentUser;
    }

    login(username: string, password: string): LoginResponse {

        const searchedUser = this.searchUserByName(username);

        if (searchedUser instanceof UserNotFound)
            return searchedUser;

        if (searchedUser.password !== password)
            return new InvalidPassword;

        if (UsersManager.isAdmin(searchedUser))
            return searchedUser as Admin;
        else return searchedUser as Client;

    }

    searchUserByName(username: string): User | UserNotFound {
        const searchedUser = this.usersList.find((user) => {
            return user.username === username;
        })

        if (!searchedUser) return new UserNotFound;
        return searchedUser;
    }

    registerUser<U extends User>(userType: new (username: string, password: string) => U, username: string, password: string): User | UserAlreadyExists {
        if (this.searchUserByName(username) instanceof User)
            return new UserAlreadyExists;

        return this.addUser(new userType(username, password));
    }

    private addUser(user: User): User {
        this.usersList.push(user as User);
        this.saveUsersList();
        return user;
    }
}






