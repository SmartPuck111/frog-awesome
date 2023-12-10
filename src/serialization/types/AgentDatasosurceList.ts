/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as SuperAgent from "../../api";
import * as core from "../../core";

export const AgentDatasosurceList: core.serialization.ObjectSchema<
    serializers.AgentDatasosurceList.Raw,
    SuperAgent.AgentDatasosurceList
> = core.serialization.object({
    success: core.serialization.boolean(),
    data: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).PrismaModelsAgentDatasource))
        .optional(),
});

export declare namespace AgentDatasosurceList {
    interface Raw {
        success: boolean;
        data?: serializers.PrismaModelsAgentDatasource.Raw[] | null;
    }
}
