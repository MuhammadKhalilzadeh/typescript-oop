import { CRUD } from "../../interfaces/event";

export class Role {
  constructor(public id: number, public name: "admin" | "reviewer" | "editor") {
    this.id = id;
    this.name = name;
  }

  public getId(): number {
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

  public create(role: Role) {
    const event = new CRUD();
    event.create({ title: "create", data: role, occured_at: new Date() });
    return event; // This is a mock implementation
  }

  public update(role: Role) {
    const event = new CRUD();
    event.update({ title: "update", data: role, occured_at: new Date() });
    return event; // This is a mock implementation
  }

  public delete(role: Role) {
    const event = new CRUD();
    event.delete({ title: "delete", data: role, occured_at: new Date() });
    return event; // This is a mock implementation
  }
}
