import { ActionFunctionMap, assign } from "xstate";

import { Context } from "../context";
import { AgainEvent, ChangeEvent, ErrorEvent, Event } from "../events";

export enum ActionEnum {
  onAgain = "onAgain",
  onChange = "onChange",
  onError = "onError",
}

export const onAgain = assign<Context, AgainEvent>({
  values: {},
  errors: undefined,
});

export const onChange = assign<Context, ChangeEvent>({
  values: (ctx, { payload }) => ({
    ...ctx.values,
    [payload.key]: payload.value,
  }),
});

export const onError = assign<Context, ErrorEvent>({
  errors: (_ctx, { payload }) => payload.errors,
});

export const actions: ActionFunctionMap<Context, Event<any>> = {
  [ActionEnum.onAgain]: onAgain,
  [ActionEnum.onChange]: onChange,
  [ActionEnum.onError]: onError,
};
