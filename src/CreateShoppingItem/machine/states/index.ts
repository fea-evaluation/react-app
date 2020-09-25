import { ShoppingItem } from "../../../common";

import { ActionEnum } from "../actions";
import { Context } from "../context";
import { EventEnum } from "../events";
import { ServiceEnum } from "../services";

export enum StateEnum {
  editing = "editing",
  submitting = "submitting",
  success = "success",
}

interface EditingState {
  value: StateEnum.editing;
  context: Context & {
    values: ShoppingItem;
    error: undefined;
  };
}

interface SubmittingState {
  value: StateEnum.submitting;
  context: Context & {
    values: ShoppingItem;
    error: undefined;
  };
}

interface SuccessState {
  value: StateEnum.success;
  context: Context & {
    values: ShoppingItem;
    error: undefined;
  };
}

export type State = EditingState | SubmittingState | SuccessState;

enum EditingStateEnum {
  error = "error",
  pristine = "pristine",
}

const editing = {
  initial: EditingStateEnum.pristine,
  on: {
    [EventEnum.CHANGE]: {
      // Stay in the same state
      target: "",

      // Execute the onChange action
      actions: [ActionEnum.onChange],
    },
    [EventEnum.SUBMIT]: StateEnum.submitting,
  },
  states: {
    [EditingStateEnum.pristine]: {
      entry: [ActionEnum.onAgain],
    },
    [EditingStateEnum.error]: {},
  },
};

const submitting = {
  invoke: {
    src: ServiceEnum.onSubmit,
    // Move to the success state onDone
    onDone: StateEnum.success,
    onError: {
      // Move to the error state onError
      target: `${StateEnum.editing}.${EditingStateEnum.error}`,

      // Execute onChange action
      actions: [ActionEnum.onError],
    },
  },
};

const success = {
  on: {
    [EventEnum.AGAIN]: StateEnum.editing,
  },
};

export const createInitialState = () => StateEnum.editing;

export const states = {
  editing,
  submitting,
  success,
};
