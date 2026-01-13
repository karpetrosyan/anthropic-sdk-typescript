import { BetaToolResultContentBlockParam, BetaToolUnion, BetaToolUseBlock } from '../../resources/beta';

export type Promisable<T> = T | Promise<T>;

export type BetaToolRunContext = {
  toolUseBlock: BetaToolUseBlock;
};

export type BetaRunnableTool<Input = any> = BetaToolUnion & {
  run: (
    args: Input,
    context: BetaToolRunContext,
  ) => Promisable<string | Array<BetaToolResultContentBlockParam>>;
  parse: (content: unknown) => Input;
};
