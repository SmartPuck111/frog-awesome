/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as SuperAgent from "../../api";
import * as core from "../../core";

export const AgentToolList: core.serialization.ObjectSchema<serializers.AgentToolList.Raw, SuperAgent.AgentToolList> =
    core.serialization.object({
        success: core.serialization.boolean(),
        data: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("..")).PrismaModelsAgentTool))
            .optional(),
    });
//also this is fixed


//add    









export declare namespace AgentToolList {
    interface Raw {
        success: boolean;
        data?: serializers.PrismaModelsAgentTool.Raw[] | null;
    }
}
