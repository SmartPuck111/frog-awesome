/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SuperAgent from "..";

/**
 * Represents a Workflow record
 */
export interface PrismaModelsWorkflow {
    id: string;
    name: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
    steps?: SuperAgent.PrismaModelsWorkflowStep[];
    apiUserId: string;
    apiUser?: SuperAgent.PrismaModelsApiUser;
}
