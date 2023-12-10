/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as SuperAgent from "../../api";
import * as core from "../../core";

export const PrismaModelsAgentLlm: core.serialization.ObjectSchema<
    serializers.PrismaModelsAgentLlm.Raw,
    SuperAgent.PrismaModelsAgentLlm
> = core.serialization.object({
    agentId: core.serialization.string(),
    llmId: core.serialization.string(),
    agent: core.serialization.lazyObject(async () => (await import("..")).PrismaModelsAgent).optional(),
    llm: core.serialization.lazyObject(async () => (await import("..")).PrismaModelsLlm).optional(),
    createdAt: core.serialization.date(),
    updatedAt: core.serialization.date(),
});

export declare namespace PrismaModelsAgentLlm {
    interface Raw {
        agentId: string;
        llmId: string;
        agent?: serializers.PrismaModelsAgent.Raw | null;
        llm?: serializers.PrismaModelsLlm.Raw | null;
        createdAt: string;
        updatedAt: string;
    }
}
