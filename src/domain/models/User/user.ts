import { Role } from "../Role/role";

export class User {
  private _name: string;
  private _surname: string;
  private _email: string;
  private _password_hash: string;
  private _role: Role;
  private _created_at: Date;
  private _last_login: Date;
  private _id?: number;

  constructor(
    name: string,
    surname: string,
    email: string,
    password_hash: string,
    role: Role,
    created_at: Date,
    last_login: Date,
    id?: number
  ) {
    this._name = name;
    this._surname = surname;
    this._email = email;
    this._password_hash = password_hash;
    this._role = role;
    this._created_at = created_at;
    this._last_login = last_login;
    this._id = id;
  }

  // Getters
  public get name(): string {
    return this._name;
  }

  public get surname(): string {
    return this._surname;
  }

  public get fullName(): string {
    return `${this._name} ${this._surname}`;
  }

  public get role(): string {
    return this._role.name;
  }

  public get created_at(): string {
    return this._created_at.toISOString();
  }

  public get last_login(): string {
    return this._last_login.toISOString();
  }

  public get id(): number | undefined {
    return this._id;
  }

  public toJSON(): object {
    return {
      id: this._id,
      name: this._name,
      surname: this._surname,
      email: this._email,
      password_hash: this._password_hash,
      role: this._role,
      created_at: this._created_at,
      last_login: this._last_login,
    };
  }

  // Setters
  public set name(name: string) {
    this._name = name;
  }

  public set surname(surname: string) {
    this._surname = surname;
  }

  public set email(email: string) {
    this._email = email;
  }

  public set password_hash(password_hash: string) {
    this._password_hash = password_hash;
  }

  public set role(role: Role) {
    this._role = role;
  }

  public set created_at(created_at: Date) {
    this._created_at = created_at;
  }

  public set last_login(last_login: Date) {
    this._last_login = last_login;
  }
}
