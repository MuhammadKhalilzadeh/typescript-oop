import { hashPassword } from "../../security/hasher";
import { isValidEmail } from "../../validations/emailValidator";
import { checkStringValidation } from "../../validations/stringValidator";
import { Role } from "../Role/role";
import CustomException from "../../exceptions/custom.exception";

export class User {
  constructor(
    public name: string,
    public surname: string,
    public email: string,
    public password: string,
    public role: Role,
    public created_at: Date,
    public last_login: Date,
    public id?: number
  ) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
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
      password: this.password,
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

  public setPasswordHash(password: string): void {
    this.password = password;
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

  public async hashUserPassword(password: string) {
    this.password = await hashPassword(password);
  }

  public async create(
    name: string,
    surname: string,
    email: string,
    password: string,
    role: Role
  ): Promise<User> {
    const user = new User(
      name,
      surname,
      email,
      password,
      role,
      new Date(),
      new Date()
    );

    const nameValidation = checkStringValidation("name", name, 3, 128);

    if (!nameValidation.accepted) {
      throw new CustomException(
        nameValidation.message,
        400,
        "Name validation failed"
      );
    }

    const surnameValidation = checkStringValidation("surname", surname, 3, 128);

    if (!surnameValidation.accepted) {
      throw new CustomException(
        surnameValidation.message,
        400,
        "Surname validation failed"
      );
    }

    const emailValidation = isValidEmail(email);

    if (!emailValidation) {
      throw new CustomException(
        "Invalid email format",
        400,
        "Email validation failed"
      );
    }

    const passwordValidation = checkStringValidation(
      "Password",
      password,
      8,
      128,
      true,
      true,
      true,
      true,
      "password"
    );

    if (!passwordValidation.accepted) {
      throw new CustomException(
        passwordValidation.message,
        400,
        "Password validation failed"
      );
    }

    const hashedPassword = await hashPassword(password);
    user.password = hashedPassword;

    return user;
  }
}
