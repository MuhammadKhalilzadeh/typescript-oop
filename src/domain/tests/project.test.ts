import { Project } from "../models/Project/project";
import CustomException from "../exceptions/custom.exception";

describe("Project", () => {
  // Test data
  const validProjectData = {
    project_title: "Test Project",
    owner: 1,
    start_date: new Date("2023-01-01"),
    ai_risk_classification: "High risk" as const,
    type_of_high_risk_role: "Deployer" as const,
    goal: "This is a test goal that is long enough to pass validation",
    last_updated: new Date("2023-01-02"),
    last_updated_by: 1,
    created_at: new Date("2023-01-01"),
    id: 1,
  };

  describe("Constructor", () => {
    it("should create a Project instance with all properties", () => {
      const project = new Project(
        validProjectData.project_title,
        validProjectData.owner,
        validProjectData.start_date,
        validProjectData.ai_risk_classification,
        validProjectData.type_of_high_risk_role,
        validProjectData.goal,
        validProjectData.last_updated,
        validProjectData.last_updated_by,
        validProjectData.created_at,
        validProjectData.id
      );

      expect(project.getId()).toBe(validProjectData.id);
      expect(project.getProjectTitle()).toBe(validProjectData.project_title);
      expect(project.getOwner()).toBe(validProjectData.owner);
      expect(project.getStartDate()).toBe(
        validProjectData.start_date.toISOString()
      );
      expect(project.getAiRiskClassification()).toBe(
        validProjectData.ai_risk_classification
      );
      expect(project.getTypeOfHighRiskRole()).toBe(
        validProjectData.type_of_high_risk_role
      );
      expect(project.getGoal()).toBe(validProjectData.goal);
      expect(project.getLastUpdated()).toBe(
        validProjectData.last_updated.toISOString()
      );
      expect(project.getLastUpdatedBy()).toBe(validProjectData.last_updated_by);
      expect(project.getCreatedAt()).toBe(
        validProjectData.created_at.toISOString()
      );
    });

    it("should create a Project instance with default created_at date", () => {
      const project = new Project(
        validProjectData.project_title,
        validProjectData.owner,
        validProjectData.start_date,
        validProjectData.ai_risk_classification,
        validProjectData.type_of_high_risk_role,
        validProjectData.goal,
        validProjectData.last_updated,
        validProjectData.last_updated_by
      );

      expect(project.getCreatedAt()).toBeDefined();
      expect(new Date(project.getCreatedAt())).toBeInstanceOf(Date);
    });
  });

  describe("Getters and Setters", () => {
    let project: Project;

    beforeEach(() => {
      project = new Project(
        validProjectData.project_title,
        validProjectData.owner,
        validProjectData.start_date,
        validProjectData.ai_risk_classification,
        validProjectData.type_of_high_risk_role,
        validProjectData.goal,
        validProjectData.last_updated,
        validProjectData.last_updated_by,
        validProjectData.created_at,
        validProjectData.id
      );
    });

    it("should set and get id", () => {
      const newId = 2;
      project.setId(newId);
      expect(project.getId()).toBe(newId);
    });

    it("should set and get project_title", () => {
      const newTitle = "New Project Title";
      project.setProjectTitle(newTitle);
      expect(project.getProjectTitle()).toBe(newTitle);
    });

    it("should set and get owner", () => {
      const newOwner = 2;
      project.setOwner(newOwner);
      expect(project.getOwner()).toBe(newOwner);
    });

    it("should set and get start_date", () => {
      const newDate = new Date("2023-02-01");
      project.setStartDate(newDate);
      expect(project.getStartDate()).toBe(newDate.toISOString());
    });

    it("should set and get ai_risk_classification", () => {
      const newClassification = "Limited risk" as const;
      project.setAiRiskClassification(newClassification);
      expect(project.getAiRiskClassification()).toBe(newClassification);
    });

    it("should set and get type_of_high_risk_role", () => {
      const newRole = "Provider" as const;
      project.setTypeOfHighRiskRole(newRole);
      expect(project.getTypeOfHighRiskRole()).toBe(newRole);
    });

    it("should set and get goal", () => {
      const newGoal = "New project goal";
      project.setGoal(newGoal);
      expect(project.getGoal()).toBe(newGoal);
    });

    it("should set and get last_updated", () => {
      const newDate = new Date("2023-02-02");
      project.setLastUpdated(newDate);
      expect(project.getLastUpdated()).toBe(newDate.toISOString());
    });

    it("should set and get last_updated_by", () => {
      const newUser = 2;
      project.setLastUpdatedBy(newUser);
      expect(project.getLastUpdatedBy()).toBe(newUser);
    });

    it("should set and get created_at", () => {
      const newDate = new Date("2023-02-03");
      project.setCreatedAt(newDate);
      expect(project.getCreatedAt()).toBe(newDate.toISOString());
    });
  });

  describe("toJSON", () => {
    it("should return a JSON representation of the project", () => {
      const project = new Project(
        validProjectData.project_title,
        validProjectData.owner,
        validProjectData.start_date,
        validProjectData.ai_risk_classification,
        validProjectData.type_of_high_risk_role,
        validProjectData.goal,
        validProjectData.last_updated,
        validProjectData.last_updated_by,
        validProjectData.created_at,
        validProjectData.id
      );

      const json = project.toJSON();

      expect(json).toEqual({
        id: validProjectData.id,
        project_title: validProjectData.project_title,
        owner: validProjectData.owner,
        start_date: validProjectData.start_date,
        ai_risk_classification: validProjectData.ai_risk_classification,
        type_of_high_risk_role: validProjectData.type_of_high_risk_role,
        goal: validProjectData.goal,
        last_updated: validProjectData.last_updated,
        last_updated_by: validProjectData.last_updated_by,
        created_at: validProjectData.created_at,
      });
    });
  });

  describe("Static create method", () => {
    it("should create a valid project", () => {
      const project = Project.create(
        validProjectData.project_title,
        validProjectData.owner,
        validProjectData.start_date,
        validProjectData.ai_risk_classification,
        validProjectData.type_of_high_risk_role,
        validProjectData.goal,
        validProjectData.last_updated_by
      );

      expect(project).toBeInstanceOf(Project);
      expect(project.getProjectTitle()).toBe(validProjectData.project_title);
      expect(project.getGoal()).toBe(validProjectData.goal);
    });

    it("should throw an exception for invalid project title (too short)", () => {
      expect(() => {
        Project.create(
          "AB", // Too short (less than 3 characters)
          validProjectData.owner,
          validProjectData.start_date,
          validProjectData.ai_risk_classification,
          validProjectData.type_of_high_risk_role,
          validProjectData.goal,
          validProjectData.last_updated_by
        );
      }).toThrow(CustomException);
    });

    it("should throw an exception for invalid project title (too long)", () => {
      const longTitle = "a".repeat(129); // 129 characters (more than 128)
      expect(() => {
        Project.create(
          longTitle,
          validProjectData.owner,
          validProjectData.start_date,
          validProjectData.ai_risk_classification,
          validProjectData.type_of_high_risk_role,
          validProjectData.goal,
          validProjectData.last_updated_by
        );
      }).toThrow(CustomException);
    });

    it("should throw an exception for invalid goal (too short)", () => {
      expect(() => {
        Project.create(
          validProjectData.project_title,
          validProjectData.owner,
          validProjectData.start_date,
          validProjectData.ai_risk_classification,
          validProjectData.type_of_high_risk_role,
          "Too short", // Less than 10 characters
          validProjectData.last_updated_by
        );
      }).toThrow(CustomException);
    });

    it("should throw an exception for invalid goal (too long)", () => {
      const longGoal = "a".repeat(1001); // 1001 characters (more than 1000)
      expect(() => {
        Project.create(
          validProjectData.project_title,
          validProjectData.owner,
          validProjectData.start_date,
          validProjectData.ai_risk_classification,
          validProjectData.type_of_high_risk_role,
          longGoal,
          validProjectData.last_updated_by
        );
      }).toThrow(CustomException);
    });
  });
});
