export enum UserPrivilege {
	Admin = "admin",
	Client = "client",
}

export abstract class User {
	constructor(
		protected privilege: UserPrivilege,
		public username: string,
		public password: string
	) {}

	static generateID(): number {
		return Math.floor(Math.random() * 999) + 1;
	}
}

export class Client extends User {
	private clientId: string;

	constructor(username: string, password: string) {
		super(UserPrivilege.Client, username, password);
		this.clientId = UserPrivilege.Client + User.generateID();
	}
}

export class Admin extends User {
	private adminId: string;

	constructor(username: string, password: string) {
		super(UserPrivilege.Admin, username, password);
		this.adminId = UserPrivilege.Admin + User.generateID();
	}
}
