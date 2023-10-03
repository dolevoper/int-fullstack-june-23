import { load, remove, save} from "./Storage.js";

export enum UserPrivilege {
	Admin = "admin",
	Client = "client",
}

export abstract class User  {

	constructor(
		protected privilege: UserPrivilege,
		public username: string,
		public password: string
	) {}
	

	public getPrivilege(): UserPrivilege {
		return this.privilege;
	}

	static generateID(): number {
		return Math.floor(Math.random() * 999) + 1;
	}

}

export class Client extends User {
	public clientId: string;

	constructor(username: string, password: string) {
		super(UserPrivilege.Client, username, password);
		this.clientId = UserPrivilege.Client + User.generateID();
	}
}

export class Admin extends User {
	public adminId: string;

	constructor(username: string, password: string) {
		super(UserPrivilege.Admin, username, password);
		this.adminId = UserPrivilege.Admin + User.generateID();
	}
}


const STORAGE_CURRENT_USER = "current_user";
export function saveCurrentUser<T = Client | Admin>(user: T): void {
	save<T>(STORAGE_CURRENT_USER, user);
}
export function loadCurrentUser(): Client | Admin | null {
	const user = load<Client | Admin>(STORAGE_CURRENT_USER);
	if(!user) return null;

	if(isAdmin(user)) {
		const placeholder = new Admin("","");
		Object.assign(placeholder,user);
		return placeholder;
	} else if(isClient(user)) {
		const placeholder = new Client("","");
		Object.assign(placeholder, user);
		return placeholder;
	} else return null;
}

export function isAdmin(user: User): boolean {
	return ((user as Admin).adminId !== undefined)
}
export function isClient(user: User): boolean {
	return (user as Client).clientId !== undefined;
}
export function clearCurrentUser() {
	remove(STORAGE_CURRENT_USER)
}