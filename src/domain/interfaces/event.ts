export interface Event {
  id?: number;
  title: "create" | "update" | "delete";
  data: any;
  occured_at: Date;
  action?: (
    title: "create" | "update" | "delete",
    data: any,
    occured_at: Date
  ) => void;
}

export interface EventRepository {
  create(event: Event): Promise<Event>;
  update(event: Event): Promise<Event>;
  delete(event: Event): Promise<Event>;
}

export class CRUD implements EventRepository {
  constructor() {}

  create(event: Event): Promise<Event> {
    return Promise.resolve(event); // This is a mock implementation
  }
  update(event: Event): Promise<Event> {
    return Promise.resolve(event); // This is a mock implementation
  }
  delete(event: Event): Promise<Event> {
    return Promise.resolve(event); // This is a mock implementation
  }
}
