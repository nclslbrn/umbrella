import { Lane } from "../api.js";
import { defPackedFormat } from "./packed-format.js";

export const BGR888 = defPackedFormat({
    type: "u32",
    size: 24,
    channels: [
        { size: 8, lane: Lane.BLUE },
        { size: 8, lane: Lane.GREEN },
        { size: 8, lane: Lane.RED },
    ],
    fromABGR: (x) => x & 0xffffff,
    toABGR: (x) => 0xff000000 | x,
});
