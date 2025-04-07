import { Role } from "../models/Role/role";
import CustomException from "../exceptions/custom.exception";

describe("Role Class", () => {
  describe("Constructor", () => {
    it("should create a role with the provided properties", () => {
      const role = new Role("admin", 1);

      expect(role.getName()).toBe("admin");
      expect(role.getId()).toBe(1);
    });

    it("should use default name if not provided", () => {
      const role = new Role();

      expect(role.getName()).toBe("admin");
      expect(role.getId()).toBeUndefined();
    });
  });

  describe("Getters", () => {
    it("should return the correct name", () => {
      const role = new Role("reviewer", 2);

      expect(role.getName()).toBe("reviewer");
    });

    it("should return the correct id", () => {
      const role = new Role("editor", 3);

      expect(role.getId()).toBe(3);
    });
  });

  describe("toJSON", () => {
    it("should return the correct JSON representation", () => {
      const role = new Role("admin", 1);

      expect(role.toJSON()).toEqual({
        id: 1,
        name: "admin",
      });
    });
  });

  describe("create", () => {
    it("should create a role with valid admin name", () => {
      const roleInstance = new Role();
      const role = roleInstance.create("admin", 1);

      expect(role.getName()).toBe("admin");
      expect(role.getId()).toBe(1);
    });

    it("should create a role with valid reviewer name", () => {
      const roleInstance = new Role();
      const role = roleInstance.create("reviewer", 2);

      expect(role.getName()).toBe("reviewer");
      expect(role.getId()).toBe(2);
    });

    it("should create a role with valid editor name", () => {
      const roleInstance = new Role();
      const role = roleInstance.create("editor", 3);

      expect(role.getName()).toBe("editor");
      expect(role.getId()).toBe(3);
    });

    it("should create a role without an id", () => {
      const roleInstance = new Role();
      const role = roleInstance.create("admin");

      expect(role.getName()).toBe("admin");
      expect(role.getId()).toBeUndefined();
    });

    it("should throw an exception when an invalid role name is provided", () => {
      const roleInstance = new Role();

      // Using 'as any' to bypass TypeScript's type checking for testing purposes
      expect(() => {
        roleInstance.create("invalid_role" as any);
      }).toThrow(CustomException);

      expect(() => {
        roleInstance.create("invalid_role" as any);
      }).toThrow("Invalid role name");
    });
  });
});
