import { User } from "../models/User/user";
import { Role } from "../models/Role/role";
import CustomException from "../exceptions/custom.exception";

// Mock the hasher module
jest.mock("../security/hasher", () => ({
  hashPassword: jest.fn().mockResolvedValue("hashedPassword123"),
}));

// Mock the validators
jest.mock("../validations/emailValidator", () => ({
  isValidEmail: jest.fn().mockReturnValue(true),
}));

jest.mock("../validations/stringValidator", () => ({
  checkStringValidation: jest
    .fn()
    .mockReturnValue({ accepted: true, message: "" }),
}));

describe("User Class", () => {
  let user: User;
  let role: Role;
  const testDate = new Date("2023-01-01T00:00:00.000Z");

  beforeEach(() => {
    // Create a role instance
    role = new Role("admin", 1);

    // Create a user instance
    user = new User(
      "John",
      "Doe",
      "john.doe@example.com",
      "password123",
      role,
      testDate,
      testDate,
      1
    );
  });

  describe("Constructor", () => {
    it("should create a user with the provided properties", () => {
      expect(user.getName()).toBe("John");
      expect(user.getSurname()).toBe("Doe");
      expect(user.getFullName()).toBe("John Doe");
      expect(user.email).toBe("john.doe@example.com");
      expect(user.password).toBe("password123");
      expect(user.getRole()).toBe("admin");
      expect(user.getCreatedAt()).toBe(testDate.toISOString());
      expect(user.getLastLogin()).toBe(testDate.toISOString());
      expect(user.getId()).toBe(1);
    });
  });

  describe("Getters", () => {
    it("should return the correct name", () => {
      expect(user.getName()).toBe("John");
    });

    it("should return the correct surname", () => {
      expect(user.getSurname()).toBe("Doe");
    });

    it("should return the correct full name", () => {
      expect(user.getFullName()).toBe("John Doe");
    });

    it("should return the correct email", () => {
      expect(user.email).toBe("john.doe@example.com");
    });

    it("should return the correct password", () => {
      expect(user.password).toBe("password123");
    });

    it("should return the correct role name", () => {
      expect(user.getRole()).toBe("admin");
    });

    it("should return the correct created_at date", () => {
      expect(user.getCreatedAt()).toBe(testDate.toISOString());
    });

    it("should return the correct last_login date", () => {
      expect(user.getLastLogin()).toBe(testDate.toISOString());
    });

    it("should return the correct id", () => {
      expect(user.getId()).toBe(1);
    });
  });

  describe("Setters", () => {
    it("should set the name correctly", () => {
      user.setName("Jane");
      expect(user.getName()).toBe("Jane");
    });

    it("should set the surname correctly", () => {
      user.setSurname("Smith");
      expect(user.getSurname()).toBe("Smith");
    });

    it("should set the email correctly", () => {
      user.setEmail("jane.smith@example.com");
      expect(user.email).toBe("jane.smith@example.com");
    });

    it("should set the password hash correctly", () => {
      user.setPasswordHash("newHashedPassword");
      expect(user.password).toBe("newHashedPassword");
    });

    it("should set the role correctly", () => {
      const newRole = new Role("editor", 2);
      user.setRole(newRole);
      expect(user.getRole()).toBe("editor");
    });

    it("should set the created_at date correctly", () => {
      const newDate = new Date("2023-02-01T00:00:00.000Z");
      user.setCreatedAt(newDate);
      expect(user.getCreatedAt()).toBe(newDate.toISOString());
    });

    it("should set the last_login date correctly", () => {
      const newDate = new Date("2023-02-01T00:00:00.000Z");
      user.setLastLogin(newDate);
      expect(user.getLastLogin()).toBe(newDate.toISOString());
    });
  });

  describe("hashUserPassword", () => {
    it("should hash the password correctly", async () => {
      const { hashPassword } = require("../security/hasher");

      await user.hashUserPassword("newPassword");

      expect(hashPassword).toHaveBeenCalledWith("newPassword");
      expect(user.password).toBe("hashedPassword123");
    });
  });

  describe("create", () => {
    it("should create a new user with valid data", async () => {
      const { hashPassword } = require("../security/hasher");
      const { isValidEmail } = require("../validations/emailValidator");
      const {
        checkStringValidation,
      } = require("../validations/stringValidator");

      const newRole = new Role("reviewer");
      const newUser = await user.create(
        "Jane",
        "Smith",
        "jane.smith@example.com",
        "Password123!",
        newRole
      );

      expect(checkStringValidation).toHaveBeenCalledWith(
        "name",
        "Jane",
        3,
        128
      );
      expect(checkStringValidation).toHaveBeenCalledWith(
        "surname",
        "Smith",
        3,
        128
      );
      expect(isValidEmail).toHaveBeenCalledWith("jane.smith@example.com");
      expect(checkStringValidation).toHaveBeenCalledWith(
        "Password",
        "Password123!",
        8,
        128,
        true,
        true,
        true,
        true,
        "password"
      );
      expect(hashPassword).toHaveBeenCalledWith("Password123!");

      expect(newUser.getName()).toBe("Jane");
      expect(newUser.getSurname()).toBe("Smith");
      expect(newUser.email).toBe("jane.smith@example.com");
      expect(newUser.password).toBe("hashedPassword123");
      expect(newUser.getRole()).toBe("reviewer");
    });

    it("should throw an exception when name validation fails", async () => {
      const {
        checkStringValidation,
      } = require("../validations/stringValidator");
      checkStringValidation.mockReturnValueOnce({
        accepted: false,
        message: "Name is too short",
      });

      const newRole = new Role("reviewer");

      await expect(
        user.create(
          "Jo", // Too short name
          "Smith",
          "jane.smith@example.com",
          "Password123!",
          newRole
        )
      ).rejects.toThrow(CustomException);
    });

    it("should throw an exception when surname validation fails", async () => {
      const {
        checkStringValidation,
      } = require("../validations/stringValidator");
      checkStringValidation
        .mockReturnValueOnce({ accepted: true, message: "" }) // Name validation passes
        .mockReturnValueOnce({
          accepted: false,
          message: "Surname is too short",
        }); // Surname validation fails

      const newRole = new Role("reviewer");

      await expect(
        user.create(
          "Jane",
          "Sm", // Too short surname
          "jane.smith@example.com",
          "Password123!",
          newRole
        )
      ).rejects.toThrow(CustomException);
    });

    it("should throw an exception when email validation fails", async () => {
      const { isValidEmail } = require("../validations/emailValidator");
      isValidEmail.mockReturnValueOnce(false);

      const newRole = new Role("reviewer");

      await expect(
        user.create(
          "Jane",
          "Smith",
          "invalid-email", // Invalid email
          "Password123!",
          newRole
        )
      ).rejects.toThrow(CustomException);
    });

    it("should throw an exception when password validation fails", async () => {
      const {
        checkStringValidation,
      } = require("../validations/stringValidator");
      checkStringValidation
        .mockReturnValueOnce({ accepted: true, message: "" }) // Name validation passes
        .mockReturnValueOnce({ accepted: true, message: "" }) // Surname validation passes
        .mockReturnValueOnce({
          accepted: false,
          message: "Password is too weak",
        }); // Password validation fails

      const newRole = new Role("reviewer");

      await expect(
        user.create(
          "Jane",
          "Smith",
          "jane.smith@example.com",
          "weak", // Weak password
          newRole
        )
      ).rejects.toThrow(CustomException);
    });
  });
});
