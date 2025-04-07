import { User } from "../models/User/user";
import { Role } from "../models/Role/role";
import { hashPassword } from "../security/hasher";
import { isValidEmail } from "../validations/emailValidator";
import { checkStringValidation } from "../validations/stringValidator";

// Mock dependencies
jest.mock("../security/hasher");
jest.mock("../validations/emailValidator");
jest.mock("../validations/stringValidator");

describe("User.create", () => {
  // Setup common test variables
  const validName = "John";
  const validSurname = "Doe";
  const validEmail = "john.doe@example.com";
  const validPassword = "Password123!";
  const mockRole = new Role("editor", 1);

  // Reset mocks before each test
  beforeEach(() => {
    jest.resetAllMocks();

    // Setup default mock implementations
    (hashPassword as jest.Mock).mockResolvedValue("hashedPassword123");
    (isValidEmail as jest.Mock).mockReturnValue(true);
    (checkStringValidation as jest.Mock).mockReturnValue({
      accepted: true,
      message: "",
    });
  });

  it("should create a user successfully with valid inputs", async () => {
    // Arrange
    const expectedHashedPassword = "hashedPassword123";
    (hashPassword as jest.Mock).mockResolvedValue(expectedHashedPassword);

    // Act
    const user = await User.prototype.create(
      validName,
      validSurname,
      validEmail,
      validPassword,
      mockRole
    );

    // Assert
    expect(user).toBeInstanceOf(User);
    expect(user.getName()).toBe(validName);
    expect(user.getSurname()).toBe(validSurname);
    expect(user.email).toBe(validEmail);
    expect(user.password).toBe(expectedHashedPassword);
    expect(user.getRole()).toBe(mockRole.getName());
    expect(user.getCreatedAt()).toBeDefined();
    expect(user.getLastLogin()).toBeDefined();

    // Verify validation functions were called
    expect(checkStringValidation).toHaveBeenCalledWith(
      "name",
      validName,
      3,
      128
    );
    expect(checkStringValidation).toHaveBeenCalledWith(
      "surname",
      validSurname,
      3,
      128
    );
    expect(isValidEmail).toHaveBeenCalledWith(validEmail);
    expect(checkStringValidation).toHaveBeenCalledWith(
      "Password",
      validPassword,
      8,
      128,
      true,
      true,
      true,
      true,
      "password"
    );
    expect(hashPassword).toHaveBeenCalledWith(validPassword);
  });

  it("should throw an error when name validation fails", async () => {
    // Arrange
    const invalidName = "Jo"; // Too short
    (checkStringValidation as jest.Mock).mockReturnValueOnce({
      accepted: false,
      message: "Name must be between 3 and 128 characters",
    });

    // Act & Assert
    await expect(
      User.prototype.create(
        invalidName,
        validSurname,
        validEmail,
        validPassword,
        mockRole
      )
    ).rejects.toThrow("Name must be between 3 and 128 characters");
  });

  it("should throw an error when surname validation fails", async () => {
    // Arrange
    const invalidSurname = "Do"; // Too short
    (checkStringValidation as jest.Mock)
      .mockReturnValueOnce({ accepted: true, message: "" }) // For name
      .mockReturnValueOnce({
        accepted: false,
        message: "Surname must be between 3 and 128 characters",
      }); // For surname

    // Act & Assert
    await expect(
      User.prototype.create(
        validName,
        invalidSurname,
        validEmail,
        validPassword,
        mockRole
      )
    ).rejects.toThrow("Surname must be between 3 and 128 characters");
  });

  it("should throw an error when email validation fails", async () => {
    // Arrange
    const invalidEmail = "not-an-email";
    (isValidEmail as jest.Mock).mockReturnValue(false);

    // Act & Assert
    await expect(
      User.prototype.create(
        validName,
        validSurname,
        invalidEmail,
        validPassword,
        mockRole
      )
    ).rejects.toThrow("Invalid email");
  });

  it("should throw an error when password validation fails", async () => {
    // Arrange
    const invalidPassword = "weak"; // Too short and missing required characters
    (checkStringValidation as jest.Mock)
      .mockReturnValueOnce({ accepted: true, message: "" }) // For name
      .mockReturnValueOnce({ accepted: true, message: "" }) // For surname
      .mockReturnValueOnce({
        accepted: false,
        message:
          "Password must be between 8 and 128 characters and contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      }); // For password

    // Act & Assert
    await expect(
      User.prototype.create(
        validName,
        validSurname,
        validEmail,
        invalidPassword,
        mockRole
      )
    ).rejects.toThrow(
      "Password must be between 8 and 128 characters and contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    );
  });
});
