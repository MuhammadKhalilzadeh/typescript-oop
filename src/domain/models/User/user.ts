import { Role } from "../Role/role";

export class User {
  constructor(
    public name: string,
    public surname: string,
    public email: string,
    public password_hash: string,
    public role: Role,
    public created_at: Date,
    public last_login: Date,
    public id?: number
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password_hash = password_hash;
    this.role = role;
    this.created_at = created_at;
    this.last_login = last_login;
  }

  // Getters
  public getName(): string {
    return this.name;
  }

  public getSurname(): string {
    return this.surname;
  }

  public getFullName(): string {
    return `${this.name} ${this.surname}`;
  }

  public getRole(): string {
    return this.role.getName();
  }

  public getCreatedAt(): string {
    return this.created_at.toISOString();
  }

  public getLastLogin(): string {
    return this.last_login.toISOString();
  }

  public getId(): number | undefined {
    return this.id;
  }

  public toJSON(): object {
    return {
      id: this.id,
      name: this.name,
      surname: this.surname,
      email: this.email,
      password_hash: this.password_hash,
      role: this.role,
      created_at: this.created_at,
      last_login: this.last_login,
    };
  }

  // Setters
  public setName(name: string): void {
    this.name = name;
  }

  public setSurname(surname: string): void {
    this.surname = surname;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public setPasswordHash(password_hash: string): void {
    this.password_hash = password_hash;
  }

  public setRole(role: Role): void {
    this.role = role;
  }

  public setCreatedAt(created_at: Date): void {
    this.created_at = created_at;
  }

  public setLastLogin(last_login: Date): void {
    this.last_login = last_login;
  }
}
