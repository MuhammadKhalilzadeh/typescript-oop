import CustomException from "../../exceptions/custom.exception";

export class Role {
  constructor(
    public name: "admin" | "reviewer" | "editor" = "admin",
    public id?: number
  ) {
    this.id = id;
    this.name = name;
  }

  public getId(): number | undefined {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public toJSON(): object {
    return {
      id: this.id,
      name: this.name,
    };
  }

  public create(name: "admin" | "reviewer" | "editor", id?: number): Role {
    const role = new Role(name, id);

    if (name !== "admin" && name !== "reviewer" && name !== "editor") {
      throw new CustomException(
        "Invalid role name",
        400,
        "Role validation failed"
      );
    }

    return role;
  }
}
