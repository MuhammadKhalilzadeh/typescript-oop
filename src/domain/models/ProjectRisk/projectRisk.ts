import { checkStringValidation } from "../../validations/stringValidator";
import CustomException from "../../exceptions/custom.exception";

export class ProjectRisk {
  constructor(
    public project_id: number,
    public risk_name: string,
    public risk_owner: number,
    public ai_lifecycle_phase:
      | "Problem definition & planning"
      | "Data collection & processing"
      | "Model development & training"
      | "Model validation & testing"
      | "Deployment & integration"
      | "Monitoring & maintenance"
      | "Decommissioning & retirement",
    public risk_description: string,
    public risk_category:
      | "Strategic risk"
      | "Operational risk"
      | "Compliance risk"
      | "Financial risk"
      | "Cybersecurity risk"
      | "Reputational risk"
      | "Legal risk"
      | "Technological risk"
      | "Third-party/vendor risk"
      | "Environmental risk"
      | "Human resources risk"
      | "Geopolitical risk"
      | "Fraud risk"
      | "Data privacy risk"
      | "Health and safety risk",
    public impact: string,
    public assessment_mapping: string,
    public controls_mapping: string,
    public likelihood:
      | "Rare"
      | "Unlikely"
      | "Possible"
      | "Likely"
      | "Almost Certain",
    public severity:
      | "Negligible"
      | "Minor"
      | "Moderate"
      | "Major"
      | "Catastrophic",
    public risk_level_autocalculated:
      | "No risk"
      | "Low risk"
      | "Medium risk"
      | "High risk"
      | "Very high risk",
    public review_notes: string,
    public mitigation_status:
      | "Not Started"
      | "In Progress"
      | "Completed"
      | "On Hold"
      | "Deferred"
      | "Canceled"
      | "Requires review",
    public current_risk_level:
      | "Very Low risk"
      | "Low risk"
      | "Medium risk"
      | "High risk"
      | "Very high risk",
    public deadline: Date,
    public mitigation_plan: string,
    public implementation_strategy: string,
    public mitigation_evidence_document: string,
    public likelihood_mitigation:
      | "Rare"
      | "Unlikely"
      | "Possible"
      | "Likely"
      | "Almost Certain",
    public risk_severity:
      | "Negligible"
      | "Minor"
      | "Moderate"
      | "Major"
      | "Critical",
    public final_risk_level: string,
    public risk_approval: number,
    public approval_status: string,
    public date_of_assessment: Date,
    public recommendations?: string,
    public id?: number,
    public created_at: Date = new Date()
  ) {
    this.id = id;
    this.project_id = project_id;
    this.risk_name = risk_name;
    this.risk_owner = risk_owner;
    this.ai_lifecycle_phase = ai_lifecycle_phase;
    this.risk_description = risk_description;
    this.risk_category = risk_category;
    this.impact = impact;
    this.assessment_mapping = assessment_mapping;
    this.controls_mapping = controls_mapping;
    this.likelihood = likelihood;
    this.severity = severity;
    this.risk_level_autocalculated = risk_level_autocalculated;
    this.review_notes = review_notes;
    this.mitigation_status = mitigation_status;
    this.current_risk_level = current_risk_level;
    this.deadline = deadline;
    this.mitigation_plan = mitigation_plan;
    this.implementation_strategy = implementation_strategy;
    this.mitigation_evidence_document = mitigation_evidence_document;
    this.likelihood_mitigation = likelihood_mitigation;
    this.risk_severity = risk_severity;
    this.final_risk_level = final_risk_level;
    this.risk_approval = risk_approval;
    this.approval_status = approval_status;
    this.date_of_assessment = date_of_assessment;
    this.recommendations = recommendations;
    this.created_at = created_at;
  }

  // Getters
  public getId(): number | undefined {
    return this.id;
  }

  public getProjectId(): number {
    return this.project_id;
  }

  public getRiskName(): string {
    return this.risk_name;
  }

  public getRiskOwner(): number {
    return this.risk_owner;
  }

  public getAiLifecyclePhase(): string {
    return this.ai_lifecycle_phase;
  }

  public getRiskDescription(): string {
    return this.risk_description;
  }

  public getRiskCategory(): string {
    return this.risk_category;
  }

  public getImpact(): string {
    return this.impact;
  }

  public getAssessmentMapping(): string {
    return this.assessment_mapping;
  }

  public getControlsMapping(): string {
    return this.controls_mapping;
  }

  public getLikelihood(): string {
    return this.likelihood;
  }

  public getSeverity(): string {
    return this.severity;
  }

  public getRiskLevelAutocalculated(): string {
    return this.risk_level_autocalculated;
  }

  public getReviewNotes(): string {
    return this.review_notes;
  }

  public getMitigationStatus(): string {
    return this.mitigation_status;
  }

  public getCurrentRiskLevel(): string {
    return this.current_risk_level;
  }

  public getDeadline(): string {
    return this.deadline.toISOString();
  }

  public getMitigationPlan(): string {
    return this.mitigation_plan;
  }

  public getImplementationStrategy(): string {
    return this.implementation_strategy;
  }

  public getMitigationEvidenceDocument(): string {
    return this.mitigation_evidence_document;
  }

  public getLikelihoodMitigation(): string {
    return this.likelihood_mitigation;
  }

  public getRiskSeverity(): string {
    return this.risk_severity;
  }

  public getFinalRiskLevel(): string {
    return this.final_risk_level;
  }

  public getRiskApproval(): number {
    return this.risk_approval;
  }

  public getApprovalStatus(): string {
    return this.approval_status;
  }

  public getDateOfAssessment(): string {
    return this.date_of_assessment.toISOString();
  }

  public getRecommendations(): string | undefined {
    return this.recommendations;
  }

  public getCreatedAt(): string {
    return this.created_at.toISOString();
  }

  public toJSON(): object {
    return {
      id: this.id,
      project_id: this.project_id,
      risk_name: this.risk_name,
      risk_owner: this.risk_owner,
      ai_lifecycle_phase: this.ai_lifecycle_phase,
      risk_description: this.risk_description,
      risk_category: this.risk_category,
      impact: this.impact,
      assessment_mapping: this.assessment_mapping,
      controls_mapping: this.controls_mapping,
      likelihood: this.likelihood,
      severity: this.severity,
      risk_level_autocalculated: this.risk_level_autocalculated,
      review_notes: this.review_notes,
      mitigation_status: this.mitigation_status,
      current_risk_level: this.current_risk_level,
      deadline: this.deadline,
      mitigation_plan: this.mitigation_plan,
      implementation_strategy: this.implementation_strategy,
      mitigation_evidence_document: this.mitigation_evidence_document,
      likelihood_mitigation: this.likelihood_mitigation,
      risk_severity: this.risk_severity,
      final_risk_level: this.final_risk_level,
      risk_approval: this.risk_approval,
      approval_status: this.approval_status,
      date_of_assessment: this.date_of_assessment,
      recommendations: this.recommendations,
      created_at: this.created_at,
    };
  }

  // Setters
  public setId(id: number): void {
    this.id = id;
  }

  public setProjectId(project_id: number): void {
    this.project_id = project_id;
  }

  public setRiskName(risk_name: string): void {
    this.risk_name = risk_name;
  }

  public setRiskOwner(risk_owner: number): void {
    this.risk_owner = risk_owner;
  }

  public setAiLifecyclePhase(
    ai_lifecycle_phase:
      | "Problem definition & planning"
      | "Data collection & processing"
      | "Model development & training"
      | "Model validation & testing"
      | "Deployment & integration"
      | "Monitoring & maintenance"
      | "Decommissioning & retirement"
  ): void {
    this.ai_lifecycle_phase = ai_lifecycle_phase;
  }

  public setRiskDescription(risk_description: string): void {
    this.risk_description = risk_description;
  }

  public setRiskCategory(
    risk_category:
      | "Strategic risk"
      | "Operational risk"
      | "Compliance risk"
      | "Financial risk"
      | "Cybersecurity risk"
      | "Reputational risk"
      | "Legal risk"
      | "Technological risk"
      | "Third-party/vendor risk"
      | "Environmental risk"
      | "Human resources risk"
      | "Geopolitical risk"
      | "Fraud risk"
      | "Data privacy risk"
      | "Health and safety risk"
  ): void {
    this.risk_category = risk_category;
  }

  public setImpact(impact: string): void {
    this.impact = impact;
  }

  public setAssessmentMapping(assessment_mapping: string): void {
    this.assessment_mapping = assessment_mapping;
  }

  public setControlsMapping(controls_mapping: string): void {
    this.controls_mapping = controls_mapping;
  }

  public setLikelihood(
    likelihood: "Rare" | "Unlikely" | "Possible" | "Likely" | "Almost Certain"
  ): void {
    this.likelihood = likelihood;
  }

  public setSeverity(
    severity: "Negligible" | "Minor" | "Moderate" | "Major" | "Catastrophic"
  ): void {
    this.severity = severity;
  }

  public setRiskLevelAutocalculated(
    risk_level_autocalculated:
      | "No risk"
      | "Low risk"
      | "Medium risk"
      | "High risk"
      | "Very high risk"
  ): void {
    this.risk_level_autocalculated = risk_level_autocalculated;
  }

  public setReviewNotes(review_notes: string): void {
    this.review_notes = review_notes;
  }

  public setMitigationStatus(
    mitigation_status:
      | "Not Started"
      | "In Progress"
      | "Completed"
      | "On Hold"
      | "Deferred"
      | "Canceled"
      | "Requires review"
  ): void {
    this.mitigation_status = mitigation_status;
  }

  public setCurrentRiskLevel(
    current_risk_level:
      | "Very Low risk"
      | "Low risk"
      | "Medium risk"
      | "High risk"
      | "Very high risk"
  ): void {
    this.current_risk_level = current_risk_level;
  }

  public setDeadline(deadline: Date): void {
    this.deadline = deadline;
  }

  public setMitigationPlan(mitigation_plan: string): void {
    this.mitigation_plan = mitigation_plan;
  }

  public setImplementationStrategy(implementation_strategy: string): void {
    this.implementation_strategy = implementation_strategy;
  }

  public setMitigationEvidenceDocument(
    mitigation_evidence_document: string
  ): void {
    this.mitigation_evidence_document = mitigation_evidence_document;
  }

  public setLikelihoodMitigation(
    likelihood_mitigation:
      | "Rare"
      | "Unlikely"
      | "Possible"
      | "Likely"
      | "Almost Certain"
  ): void {
    this.likelihood_mitigation = likelihood_mitigation;
  }

  public setRiskSeverity(
    risk_severity: "Negligible" | "Minor" | "Moderate" | "Major" | "Critical"
  ): void {
    this.risk_severity = risk_severity;
  }

  public setFinalRiskLevel(final_risk_level: string): void {
    this.final_risk_level = final_risk_level;
  }

  public setRiskApproval(risk_approval: number): void {
    this.risk_approval = risk_approval;
  }

  public setApprovalStatus(approval_status: string): void {
    this.approval_status = approval_status;
  }

  public setDateOfAssessment(date_of_assessment: Date): void {
    this.date_of_assessment = date_of_assessment;
  }

  public setRecommendations(recommendations: string): void {
    this.recommendations = recommendations;
  }

  public setCreatedAt(created_at: Date): void {
    this.created_at = created_at;
  }

  public static create(
    project_id: number,
    risk_name: string,
    risk_owner: number,
    ai_lifecycle_phase:
      | "Problem definition & planning"
      | "Data collection & processing"
      | "Model development & training"
      | "Model validation & testing"
      | "Deployment & integration"
      | "Monitoring & maintenance"
      | "Decommissioning & retirement",
    risk_description: string,
    risk_category:
      | "Strategic risk"
      | "Operational risk"
      | "Compliance risk"
      | "Financial risk"
      | "Cybersecurity risk"
      | "Reputational risk"
      | "Legal risk"
      | "Technological risk"
      | "Third-party/vendor risk"
      | "Environmental risk"
      | "Human resources risk"
      | "Geopolitical risk"
      | "Fraud risk"
      | "Data privacy risk"
      | "Health and safety risk",
    impact: string,
    assessment_mapping: string,
    controls_mapping: string,
    likelihood: "Rare" | "Unlikely" | "Possible" | "Likely" | "Almost Certain",
    severity: "Negligible" | "Minor" | "Moderate" | "Major" | "Catastrophic",
    risk_level_autocalculated:
      | "No risk"
      | "Low risk"
      | "Medium risk"
      | "High risk"
      | "Very high risk",
    review_notes: string,
    mitigation_status:
      | "Not Started"
      | "In Progress"
      | "Completed"
      | "On Hold"
      | "Deferred"
      | "Canceled"
      | "Requires review",
    current_risk_level:
      | "Very Low risk"
      | "Low risk"
      | "Medium risk"
      | "High risk"
      | "Very high risk",
    deadline: Date,
    mitigation_plan: string,
    implementation_strategy: string,
    mitigation_evidence_document: string,
    likelihood_mitigation:
      | "Rare"
      | "Unlikely"
      | "Possible"
      | "Likely"
      | "Almost Certain",
    risk_severity: "Negligible" | "Minor" | "Moderate" | "Major" | "Critical",
    final_risk_level: string,
    risk_approval: number,
    approval_status: string,
    date_of_assessment: Date
  ): ProjectRisk {
    const projectRisk = new ProjectRisk(
      project_id,
      risk_name,
      risk_owner,
      ai_lifecycle_phase,
      risk_description,
      risk_category,
      impact,
      assessment_mapping,
      controls_mapping,
      likelihood,
      severity,
      risk_level_autocalculated,
      review_notes,
      mitigation_status,
      current_risk_level,
      deadline,
      mitigation_plan,
      implementation_strategy,
      mitigation_evidence_document,
      likelihood_mitigation,
      risk_severity,
      final_risk_level,
      risk_approval,
      approval_status,
      date_of_assessment
    );

    const riskNameValidation = checkStringValidation(
      "risk_name",
      risk_name,
      3,
      128
    );

    if (!riskNameValidation.accepted) {
      throw new CustomException(
        riskNameValidation.message,
        400,
        "Risk name validation failed"
      );
    }

    const riskDescriptionValidation = checkStringValidation(
      "risk_description",
      risk_description,
      10,
      1000
    );

    if (!riskDescriptionValidation.accepted) {
      throw new CustomException(
        riskDescriptionValidation.message,
        400,
        "Risk description validation failed"
      );
    }

    return projectRisk;
  }
}
