import { Lane } from "../api.js";
import { __luminanceABGR } from "../internal/utils.js";
import { defPackedFormat } from "./packed-format.js";

export const GRAY8 = defPackedFormat({
    type: "u8",
    size: 8,
    channels: [{ size: 8, lane: Lane.RED }],
    fromABGR: (x) => __luminanceABGR(x),
    toABGR: (x) => (0xff000000 | ((x & 0xff) * 0x010101)) >>> 0,
});
