export class Role {
  constructor(
    public name: "admin" | "reviewer" | "editor" = "editor",
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
}
