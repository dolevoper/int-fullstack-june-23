
export type UserTypes = Admin | Client;

export class InvalidUserType extends Error { };
export abstract class User {

	constructor(
		public username: string,
		public password: string
	) { }

	static generateID(): number {
		return Math.floor(Math.random() * 999) + 1;
	}
}

export class Client extends User {
	public clientId: string;

	constructor(username: string, password: string) {
		super(username, password);
		this.clientId = "client" + User.generateID();
	}
}

export class Admin extends User {
	public adminId: string;

	constructor(username: string, password: string) {
		super(username, password);
		this.adminId = "admin" + User.generateID();
	}
}

