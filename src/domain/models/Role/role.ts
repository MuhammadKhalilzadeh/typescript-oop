import { CRUD } from "../../interfaces/event";

export class Role {
  private _id: number;
  private _name: "admin" | "reviewer" | "editor";

  constructor(id: number, name: "admin" | "reviewer" | "editor") {
    this._id = id;
    this._name = name;
  }

  public get id(): number {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public toJSON(): object {
    return {
      id: this._id,
      name: this._name,
    };
  }

  public create(role: Role): CRUD {
    const event = new CRUD();
    event.create({ title: "create", data: role, occured_at: new Date() });
    return event; // This is a mock implementation
  }

  public update(role: Role): CRUD {
    const event = new CRUD();
    event.update({ title: "update", data: role, occured_at: new Date() });
    return event; // This is a mock implementation
  }

  public delete(role: Role): CRUD {
    const event = new CRUD();
    event.delete({ title: "delete", data: role, occured_at: new Date() });
    return event; // This is a mock implementation
  }
}
