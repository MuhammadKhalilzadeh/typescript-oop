import { checkStringValidation } from "../../validations/stringValidator";
import CustomException from "../../exceptions/custom.exception";

export class Project {
  constructor(
    public project_title: string,
    public owner: number,
    public start_date: Date,
    public ai_risk_classification:
      | "High risk"
      | "Limited risk"
      | "Minimal risk",
    public type_of_high_risk_role:
      | "Deployer"
      | "Provider"
      | "Distributor"
      | "Importer"
      | "Product manufacturer"
      | "Authorized representative",
    public goal: string,
    public last_updated: Date,
    public last_updated_by: number,
    public created_at: Date = new Date(),
    public id?: number
  ) {
    this.id = id;
    this.project_title = project_title;
    this.owner = owner;
    this.start_date = start_date;
    this.ai_risk_classification = ai_risk_classification;
    this.type_of_high_risk_role = type_of_high_risk_role;
    this.goal = goal;
    this.last_updated = last_updated;
    this.last_updated_by = last_updated_by;
    this.created_at = created_at;
  }

  // Getters
  public getId(): number | undefined {
    return this.id;
  }

  public getProjectTitle(): string {
    return this.project_title;
  }

  public getOwner(): number {
    return this.owner;
  }

  public getStartDate(): string {
    return this.start_date.toISOString();
  }

  public getAiRiskClassification(): string {
    return this.ai_risk_classification;
  }

  public getTypeOfHighRiskRole(): string {
    return this.type_of_high_risk_role;
  }

  public getGoal(): string {
    return this.goal;
  }

  public getLastUpdated(): string {
    return this.last_updated.toISOString();
  }

  public getLastUpdatedBy(): number {
    return this.last_updated_by;
  }

  public getCreatedAt(): string {
    return this.created_at.toISOString();
  }

  public toJSON(): object {
    return {
      id: this.id,
      project_title: this.project_title,
      owner: this.owner,
      start_date: this.start_date,
      ai_risk_classification: this.ai_risk_classification,
      type_of_high_risk_role: this.type_of_high_risk_role,
      goal: this.goal,
      last_updated: this.last_updated,
      last_updated_by: this.last_updated_by,
      created_at: this.created_at,
    };
  }

  // Setters
  public setId(id: number): void {
    this.id = id;
  }

  public setProjectTitle(project_title: string): void {
    this.project_title = project_title;
  }

  public setOwner(owner: number): void {
    this.owner = owner;
  }

  public setStartDate(start_date: Date): void {
    this.start_date = start_date;
  }

  public setAiRiskClassification(
    ai_risk_classification: "High risk" | "Limited risk" | "Minimal risk"
  ): void {
    this.ai_risk_classification = ai_risk_classification;
  }

  public setTypeOfHighRiskRole(
    type_of_high_risk_role:
      | "Deployer"
      | "Provider"
      | "Distributor"
      | "Importer"
      | "Product manufacturer"
      | "Authorized representative"
  ): void {
    this.type_of_high_risk_role = type_of_high_risk_role;
  }

  public setGoal(goal: string): void {
    this.goal = goal;
  }

  public setLastUpdated(last_updated: Date): void {
    this.last_updated = last_updated;
  }

  public setLastUpdatedBy(last_updated_by: number): void {
    this.last_updated_by = last_updated_by;
  }

  public setCreatedAt(created_at: Date): void {
    this.created_at = created_at;
  }

  public static create(
    project_title: string,
    owner: number,
    start_date: Date,
    ai_risk_classification: "High risk" | "Limited risk" | "Minimal risk",
    type_of_high_risk_role:
      | "Deployer"
      | "Provider"
      | "Distributor"
      | "Importer"
      | "Product manufacturer"
      | "Authorized representative",
    goal: string,
    last_updated_by: number
  ): Project {
    const project = new Project(
      project_title,
      owner,
      start_date,
      ai_risk_classification,
      type_of_high_risk_role,
      goal,
      new Date(),
      last_updated_by
    );

    const titleValidation = checkStringValidation(
      "project_title",
      project_title,
      3,
      128
    );

    if (!titleValidation.accepted) {
      throw new CustomException(
        titleValidation.message,
        400,
        "Project title validation failed"
      );
    }

    const goalValidation = checkStringValidation("goal", goal, 10, 1000);

    if (!goalValidation.accepted) {
      throw new CustomException(
        goalValidation.message,
        400,
        "Goal validation failed"
      );
    }

    return project;
  }
}
