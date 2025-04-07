import { ProjectRisk } from "../models/ProjectRisk/projectRisk";
import CustomException from "../exceptions/custom.exception";

describe("ProjectRisk", () => {
  const mockDate = new Date("2024-01-01");

  const validProjectRiskData = {
    project_id: 1,
    risk_name: "Test Risk",
    risk_owner: 1,
    ai_lifecycle_phase: "Problem definition & planning" as const,
    risk_description:
      "This is a test risk description that meets the minimum length requirement",
    risk_category: "Strategic risk" as const,
    impact: "High impact on project timeline",
    assessment_mapping: "Risk assessment mapping details",
    controls_mapping: "Risk controls mapping details",
    likelihood: "Likely" as const,
    severity: "Major" as const,
    risk_level_autocalculated: "High risk" as const,
    review_notes: "Review notes for the risk",
    mitigation_status: "In Progress" as const,
    current_risk_level: "High risk" as const,
    deadline: mockDate,
    mitigation_plan: "Plan to mitigate the risk",
    implementation_strategy: "Strategy for implementation",
    mitigation_evidence_document: "Evidence document details",
    likelihood_mitigation: "Possible" as const,
    risk_severity: "Major" as const,
    final_risk_level: "High risk",
    risk_approval: 1,
    approval_status: "Approved",
    date_of_assessment: mockDate,
  };

  describe("Constructor", () => {
    it("should create a ProjectRisk instance with valid data", () => {
      const projectRisk = new ProjectRisk(
        validProjectRiskData.project_id,
        validProjectRiskData.risk_name,
        validProjectRiskData.risk_owner,
        validProjectRiskData.ai_lifecycle_phase,
        validProjectRiskData.risk_description,
        validProjectRiskData.risk_category,
        validProjectRiskData.impact,
        validProjectRiskData.assessment_mapping,
        validProjectRiskData.controls_mapping,
        validProjectRiskData.likelihood,
        validProjectRiskData.severity,
        validProjectRiskData.risk_level_autocalculated,
        validProjectRiskData.review_notes,
        validProjectRiskData.mitigation_status,
        validProjectRiskData.current_risk_level,
        validProjectRiskData.deadline,
        validProjectRiskData.mitigation_plan,
        validProjectRiskData.implementation_strategy,
        validProjectRiskData.mitigation_evidence_document,
        validProjectRiskData.likelihood_mitigation,
        validProjectRiskData.risk_severity,
        validProjectRiskData.final_risk_level,
        validProjectRiskData.risk_approval,
        validProjectRiskData.approval_status,
        validProjectRiskData.date_of_assessment
      );

      expect(projectRisk).toBeInstanceOf(ProjectRisk);
      expect(projectRisk.getProjectId()).toBe(validProjectRiskData.project_id);
      expect(projectRisk.getRiskName()).toBe(validProjectRiskData.risk_name);
    });
  });

  describe("Getters", () => {
    let projectRisk: ProjectRisk;

    beforeEach(() => {
      projectRisk = new ProjectRisk(
        validProjectRiskData.project_id,
        validProjectRiskData.risk_name,
        validProjectRiskData.risk_owner,
        validProjectRiskData.ai_lifecycle_phase,
        validProjectRiskData.risk_description,
        validProjectRiskData.risk_category,
        validProjectRiskData.impact,
        validProjectRiskData.assessment_mapping,
        validProjectRiskData.controls_mapping,
        validProjectRiskData.likelihood,
        validProjectRiskData.severity,
        validProjectRiskData.risk_level_autocalculated,
        validProjectRiskData.review_notes,
        validProjectRiskData.mitigation_status,
        validProjectRiskData.current_risk_level,
        validProjectRiskData.deadline,
        validProjectRiskData.mitigation_plan,
        validProjectRiskData.implementation_strategy,
        validProjectRiskData.mitigation_evidence_document,
        validProjectRiskData.likelihood_mitigation,
        validProjectRiskData.risk_severity,
        validProjectRiskData.final_risk_level,
        validProjectRiskData.risk_approval,
        validProjectRiskData.approval_status,
        validProjectRiskData.date_of_assessment
      );
    });

    it("should get all properties correctly", () => {
      expect(projectRisk.getProjectId()).toBe(validProjectRiskData.project_id);
      expect(projectRisk.getRiskName()).toBe(validProjectRiskData.risk_name);
      expect(projectRisk.getRiskOwner()).toBe(validProjectRiskData.risk_owner);
      expect(projectRisk.getAiLifecyclePhase()).toBe(
        validProjectRiskData.ai_lifecycle_phase
      );
      expect(projectRisk.getRiskDescription()).toBe(
        validProjectRiskData.risk_description
      );
      expect(projectRisk.getRiskCategory()).toBe(
        validProjectRiskData.risk_category
      );
      expect(projectRisk.getImpact()).toBe(validProjectRiskData.impact);
      expect(projectRisk.getAssessmentMapping()).toBe(
        validProjectRiskData.assessment_mapping
      );
      expect(projectRisk.getControlsMapping()).toBe(
        validProjectRiskData.controls_mapping
      );
      expect(projectRisk.getLikelihood()).toBe(validProjectRiskData.likelihood);
      expect(projectRisk.getSeverity()).toBe(validProjectRiskData.severity);
      expect(projectRisk.getRiskLevelAutocalculated()).toBe(
        validProjectRiskData.risk_level_autocalculated
      );
      expect(projectRisk.getReviewNotes()).toBe(
        validProjectRiskData.review_notes
      );
      expect(projectRisk.getMitigationStatus()).toBe(
        validProjectRiskData.mitigation_status
      );
      expect(projectRisk.getCurrentRiskLevel()).toBe(
        validProjectRiskData.current_risk_level
      );
      expect(projectRisk.getDeadline()).toBe(
        validProjectRiskData.deadline.toISOString()
      );
      expect(projectRisk.getMitigationPlan()).toBe(
        validProjectRiskData.mitigation_plan
      );
      expect(projectRisk.getImplementationStrategy()).toBe(
        validProjectRiskData.implementation_strategy
      );
      expect(projectRisk.getMitigationEvidenceDocument()).toBe(
        validProjectRiskData.mitigation_evidence_document
      );
      expect(projectRisk.getLikelihoodMitigation()).toBe(
        validProjectRiskData.likelihood_mitigation
      );
      expect(projectRisk.getRiskSeverity()).toBe(
        validProjectRiskData.risk_severity
      );
      expect(projectRisk.getFinalRiskLevel()).toBe(
        validProjectRiskData.final_risk_level
      );
      expect(projectRisk.getRiskApproval()).toBe(
        validProjectRiskData.risk_approval
      );
      expect(projectRisk.getApprovalStatus()).toBe(
        validProjectRiskData.approval_status
      );
      expect(projectRisk.getDateOfAssessment()).toBe(
        validProjectRiskData.date_of_assessment.toISOString()
      );
    });
  });

  describe("Setters", () => {
    let projectRisk: ProjectRisk;

    beforeEach(() => {
      projectRisk = new ProjectRisk(
        validProjectRiskData.project_id,
        validProjectRiskData.risk_name,
        validProjectRiskData.risk_owner,
        validProjectRiskData.ai_lifecycle_phase,
        validProjectRiskData.risk_description,
        validProjectRiskData.risk_category,
        validProjectRiskData.impact,
        validProjectRiskData.assessment_mapping,
        validProjectRiskData.controls_mapping,
        validProjectRiskData.likelihood,
        validProjectRiskData.severity,
        validProjectRiskData.risk_level_autocalculated,
        validProjectRiskData.review_notes,
        validProjectRiskData.mitigation_status,
        validProjectRiskData.current_risk_level,
        validProjectRiskData.deadline,
        validProjectRiskData.mitigation_plan,
        validProjectRiskData.implementation_strategy,
        validProjectRiskData.mitigation_evidence_document,
        validProjectRiskData.likelihood_mitigation,
        validProjectRiskData.risk_severity,
        validProjectRiskData.final_risk_level,
        validProjectRiskData.risk_approval,
        validProjectRiskData.approval_status,
        validProjectRiskData.date_of_assessment
      );
    });

    it("should set all properties correctly", () => {
      const newDate = new Date("2024-02-01");

      projectRisk.setId(2);
      projectRisk.setProjectId(3);
      projectRisk.setRiskName("New Risk Name");
      projectRisk.setRiskOwner(4);
      projectRisk.setAiLifecyclePhase("Model development & training");
      projectRisk.setRiskDescription("New risk description");
      projectRisk.setRiskCategory("Operational risk");
      projectRisk.setImpact("New impact");
      projectRisk.setAssessmentMapping("New assessment mapping");
      projectRisk.setControlsMapping("New controls mapping");
      projectRisk.setLikelihood("Possible");
      projectRisk.setSeverity("Minor");
      projectRisk.setRiskLevelAutocalculated("Medium risk");
      projectRisk.setReviewNotes("New review notes");
      projectRisk.setMitigationStatus("Completed");
      projectRisk.setCurrentRiskLevel("Medium risk");
      projectRisk.setDeadline(newDate);
      projectRisk.setMitigationPlan("New mitigation plan");
      projectRisk.setImplementationStrategy("New implementation strategy");
      projectRisk.setMitigationEvidenceDocument("New evidence document");
      projectRisk.setLikelihoodMitigation("Unlikely");
      projectRisk.setRiskSeverity("Minor");
      projectRisk.setFinalRiskLevel("Medium risk");
      projectRisk.setRiskApproval(5);
      projectRisk.setApprovalStatus("Pending");
      projectRisk.setDateOfAssessment(newDate);
      projectRisk.setRecommendations("New recommendations");
      projectRisk.setCreatedAt(newDate);

      expect(projectRisk.getId()).toBe(2);
      expect(projectRisk.getProjectId()).toBe(3);
      expect(projectRisk.getRiskName()).toBe("New Risk Name");
      expect(projectRisk.getRiskOwner()).toBe(4);
      expect(projectRisk.getAiLifecyclePhase()).toBe(
        "Model development & training"
      );
      expect(projectRisk.getRiskDescription()).toBe("New risk description");
      expect(projectRisk.getRiskCategory()).toBe("Operational risk");
      expect(projectRisk.getImpact()).toBe("New impact");
      expect(projectRisk.getAssessmentMapping()).toBe("New assessment mapping");
      expect(projectRisk.getControlsMapping()).toBe("New controls mapping");
      expect(projectRisk.getLikelihood()).toBe("Possible");
      expect(projectRisk.getSeverity()).toBe("Minor");
      expect(projectRisk.getRiskLevelAutocalculated()).toBe("Medium risk");
      expect(projectRisk.getReviewNotes()).toBe("New review notes");
      expect(projectRisk.getMitigationStatus()).toBe("Completed");
      expect(projectRisk.getCurrentRiskLevel()).toBe("Medium risk");
      expect(projectRisk.getDeadline()).toBe(newDate.toISOString());
      expect(projectRisk.getMitigationPlan()).toBe("New mitigation plan");
      expect(projectRisk.getImplementationStrategy()).toBe(
        "New implementation strategy"
      );
      expect(projectRisk.getMitigationEvidenceDocument()).toBe(
        "New evidence document"
      );
      expect(projectRisk.getLikelihoodMitigation()).toBe("Unlikely");
      expect(projectRisk.getRiskSeverity()).toBe("Minor");
      expect(projectRisk.getFinalRiskLevel()).toBe("Medium risk");
      expect(projectRisk.getRiskApproval()).toBe(5);
      expect(projectRisk.getApprovalStatus()).toBe("Pending");
      expect(projectRisk.getDateOfAssessment()).toBe(newDate.toISOString());
      expect(projectRisk.getRecommendations()).toBe("New recommendations");
      expect(projectRisk.getCreatedAt()).toBe(newDate.toISOString());
    });
  });

  describe("toJSON", () => {
    it("should return correct JSON representation", () => {
      const projectRisk = new ProjectRisk(
        validProjectRiskData.project_id,
        validProjectRiskData.risk_name,
        validProjectRiskData.risk_owner,
        validProjectRiskData.ai_lifecycle_phase,
        validProjectRiskData.risk_description,
        validProjectRiskData.risk_category,
        validProjectRiskData.impact,
        validProjectRiskData.assessment_mapping,
        validProjectRiskData.controls_mapping,
        validProjectRiskData.likelihood,
        validProjectRiskData.severity,
        validProjectRiskData.risk_level_autocalculated,
        validProjectRiskData.review_notes,
        validProjectRiskData.mitigation_status,
        validProjectRiskData.current_risk_level,
        validProjectRiskData.deadline,
        validProjectRiskData.mitigation_plan,
        validProjectRiskData.implementation_strategy,
        validProjectRiskData.mitigation_evidence_document,
        validProjectRiskData.likelihood_mitigation,
        validProjectRiskData.risk_severity,
        validProjectRiskData.final_risk_level,
        validProjectRiskData.risk_approval,
        validProjectRiskData.approval_status,
        validProjectRiskData.date_of_assessment
      );

      const json = projectRisk.toJSON();
      expect(json).toEqual({
        id: undefined,
        project_id: validProjectRiskData.project_id,
        risk_name: validProjectRiskData.risk_name,
        risk_owner: validProjectRiskData.risk_owner,
        ai_lifecycle_phase: validProjectRiskData.ai_lifecycle_phase,
        risk_description: validProjectRiskData.risk_description,
        risk_category: validProjectRiskData.risk_category,
        impact: validProjectRiskData.impact,
        assessment_mapping: validProjectRiskData.assessment_mapping,
        controls_mapping: validProjectRiskData.controls_mapping,
        likelihood: validProjectRiskData.likelihood,
        severity: validProjectRiskData.severity,
        risk_level_autocalculated:
          validProjectRiskData.risk_level_autocalculated,
        review_notes: validProjectRiskData.review_notes,
        mitigation_status: validProjectRiskData.mitigation_status,
        current_risk_level: validProjectRiskData.current_risk_level,
        deadline: validProjectRiskData.deadline,
        mitigation_plan: validProjectRiskData.mitigation_plan,
        implementation_strategy: validProjectRiskData.implementation_strategy,
        mitigation_evidence_document:
          validProjectRiskData.mitigation_evidence_document,
        likelihood_mitigation: validProjectRiskData.likelihood_mitigation,
        risk_severity: validProjectRiskData.risk_severity,
        final_risk_level: validProjectRiskData.final_risk_level,
        risk_approval: validProjectRiskData.risk_approval,
        approval_status: validProjectRiskData.approval_status,
        date_of_assessment: validProjectRiskData.date_of_assessment,
        recommendations: undefined,
        created_at: expect.any(Date),
      });
    });
  });

  describe("static create", () => {
    it("should create a ProjectRisk instance with valid data", () => {
      const projectRisk = ProjectRisk.create(
        validProjectRiskData.project_id,
        validProjectRiskData.risk_name,
        validProjectRiskData.risk_owner,
        validProjectRiskData.ai_lifecycle_phase,
        validProjectRiskData.risk_description,
        validProjectRiskData.risk_category,
        validProjectRiskData.impact,
        validProjectRiskData.assessment_mapping,
        validProjectRiskData.controls_mapping,
        validProjectRiskData.likelihood,
        validProjectRiskData.severity,
        validProjectRiskData.risk_level_autocalculated,
        validProjectRiskData.review_notes,
        validProjectRiskData.mitigation_status,
        validProjectRiskData.current_risk_level,
        validProjectRiskData.deadline,
        validProjectRiskData.mitigation_plan,
        validProjectRiskData.implementation_strategy,
        validProjectRiskData.mitigation_evidence_document,
        validProjectRiskData.likelihood_mitigation,
        validProjectRiskData.risk_severity,
        validProjectRiskData.final_risk_level,
        validProjectRiskData.risk_approval,
        validProjectRiskData.approval_status,
        validProjectRiskData.date_of_assessment
      );

      expect(projectRisk).toBeInstanceOf(ProjectRisk);
      expect(projectRisk.getProjectId()).toBe(validProjectRiskData.project_id);
      expect(projectRisk.getRiskName()).toBe(validProjectRiskData.risk_name);
    });

    it("should throw CustomException when risk_name is too short", () => {
      expect(() => {
        ProjectRisk.create(
          validProjectRiskData.project_id,
          "ab", // Too short
          validProjectRiskData.risk_owner,
          validProjectRiskData.ai_lifecycle_phase,
          validProjectRiskData.risk_description,
          validProjectRiskData.risk_category,
          validProjectRiskData.impact,
          validProjectRiskData.assessment_mapping,
          validProjectRiskData.controls_mapping,
          validProjectRiskData.likelihood,
          validProjectRiskData.severity,
          validProjectRiskData.risk_level_autocalculated,
          validProjectRiskData.review_notes,
          validProjectRiskData.mitigation_status,
          validProjectRiskData.current_risk_level,
          validProjectRiskData.deadline,
          validProjectRiskData.mitigation_plan,
          validProjectRiskData.implementation_strategy,
          validProjectRiskData.mitigation_evidence_document,
          validProjectRiskData.likelihood_mitigation,
          validProjectRiskData.risk_severity,
          validProjectRiskData.final_risk_level,
          validProjectRiskData.risk_approval,
          validProjectRiskData.approval_status,
          validProjectRiskData.date_of_assessment
        );
      }).toThrow(CustomException);
    });

    it("should throw CustomException when risk_description is too short", () => {
      expect(() => {
        ProjectRisk.create(
          validProjectRiskData.project_id,
          validProjectRiskData.risk_name,
          validProjectRiskData.risk_owner,
          validProjectRiskData.ai_lifecycle_phase,
          "Too short", // Too short
          validProjectRiskData.risk_category,
          validProjectRiskData.impact,
          validProjectRiskData.assessment_mapping,
          validProjectRiskData.controls_mapping,
          validProjectRiskData.likelihood,
          validProjectRiskData.severity,
          validProjectRiskData.risk_level_autocalculated,
          validProjectRiskData.review_notes,
          validProjectRiskData.mitigation_status,
          validProjectRiskData.current_risk_level,
          validProjectRiskData.deadline,
          validProjectRiskData.mitigation_plan,
          validProjectRiskData.implementation_strategy,
          validProjectRiskData.mitigation_evidence_document,
          validProjectRiskData.likelihood_mitigation,
          validProjectRiskData.risk_severity,
          validProjectRiskData.final_risk_level,
          validProjectRiskData.risk_approval,
          validProjectRiskData.approval_status,
          validProjectRiskData.date_of_assessment
        );
      }).toThrow(CustomException);
    });
  });
});
