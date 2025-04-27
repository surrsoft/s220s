import { RespBr } from "s220s";
import { errMsgGet } from "./errMsgGet";

export function predefErr({ error, ...tail }: { error: unknown; } & Omit<RespBr, 'status'>): RespBr {
    return {
        status: 400,
        errMsg: errMsgGet({ error }),
        ...tail,
    };
}
