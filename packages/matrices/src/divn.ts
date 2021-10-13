import { divN as _divN, divN4 } from "@thi.ng/vectors/divn";
import type { MatOpMN, MultiMatOpMN } from "./api.js";
import { defMathN } from "./compile/emit.js";

/**
 * Componentwise matrix division by single scalar. If `out` is not
 * given, writes result in `mat`.
 *
 * out = mat / n
 *
 * @param out -
 * @param mat -
 * @param n -
 */
export const divN: MultiMatOpMN = _divN;
export const divN22: MatOpMN = divN4;
export const [divN23, divN33, divN44] = defMathN(divN, "/");
