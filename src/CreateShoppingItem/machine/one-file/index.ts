import { assign, createMachine, StateValue } from "xstate";

/*
 * CONTEXT
 */

interface FormValues {
  name: string;
  amount: string;
  unit: string;
}

export interface Context {
  values: Partial<FormValues>;
  errors?: {
    [key: string]: string;
  };
}

/*
 * EVENT
 */

export enum EventEnum {
  AGAIN = "AGIAN",
  CHANGE = "CHANGE",
  ERROR = "ERROR",
  SUBMIT = "SUBMIT",
}

export type AgainEventPayload = undefined;

export interface ChangeEventPayload {
  key: string;
  value: any;
}

export interface ErrorEventPayload {
  errors: {
    [key: string]: string;
  };
}

export type SubmitEventPayload = undefined;

export type EventPayload = AgainEventPayload | ChangeEventPayload | ErrorEventPayload | SubmitEventPayload;

export interface Event<P extends EventPayload> {
  type: EventEnum;
  payload: P;
}

export type AgainEvent = Event<AgainEventPayload>;

export type ChangeEvent = Event<ChangeEventPayload>;

export type ErrorEvent = Event<ErrorEventPayload>;

export type SubmitEvent = Event<SubmitEventPayload>;

/*
 * ACTIONS
 */

export enum ActionEnum {
  onAgain = "onAgain",
  onChange = "onChange",
  onError = "onError",
}

/*
 * SERVICE
 */

export enum ServiceEnum {
  onSubmit = "onSubmit",
}

/*
 * STATE
 */

export enum StateEnum {
  editing = "editing",
  submitting = "submitting",
  success = "success",
}

interface EditingState {
  value: StateEnum.editing;
  context: Context & {
    values: FormValues;
    error: undefined;
  };
}

interface SubmittingState {
  value: StateEnum.submitting;
  context: Context & {
    values: FormValues;
    error: undefined;
  };
}

interface SuccessState {
  value: StateEnum.success;
  context: Context & {
    values: FormValues;
    error: undefined;
  };
}

export type State = EditingState | SubmittingState | SuccessState;

export enum EditingStateEnum {
  error = "error",
  pristine = "pristine",
}

export function stateEnumToString(stateEnum: StateEnum | EditingStateEnum) {
  switch (stateEnum) {
    case EditingStateEnum.error:
    case EditingStateEnum.pristine:
      return `${StateEnum.editing}.${stateEnum}`;
    default:
      return stateEnum;
  }
}

export function xStateStateValueToString(value: StateValue): string {
  if (typeof value === "string") {
    return value;
  }

  const key = Object.keys(value)[0];
  return `${key}.${xStateStateValueToString(value[key])}`;
}

export const matchesStateEnum = (...stateValues: (StateEnum | EditingStateEnum)[]) => {
  const matchedValues = stateValues.map((stateValue) => {
    switch (stateValue) {
      case EditingStateEnum.error:
      case EditingStateEnum.pristine:
        return `${StateEnum.editing}.${stateValue}`;
      default:
        return stateValue;
    }
  });

  return (stateValue: StateValue) => matchedValues.includes(xStateStateValueToString(stateValue));
};

/*
 * MACHINE
 */

export const CreateShoppingItemMachine = createMachine<Context, Event<any>, State>(
  {
    id: "createShoppingItem",
    initial: StateEnum.editing,
    states: {
      [StateEnum.editing]: {
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
      },
      [StateEnum.submitting]: {
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
      },
      [StateEnum.success]: {
        on: {
          [EventEnum.AGAIN]: StateEnum.editing,
        },
      },
    },
  },
  {
    actions: {
      [ActionEnum.onAgain]: assign<Context, AgainEvent>({
        values: {},
        errors: undefined,
      }),
      [ActionEnum.onChange]: assign<Context, ChangeEvent>({
        values: (ctx, { payload }) => ({
          ...ctx.values,
          [payload.key]: payload.value,
        }),
      }),
      [ActionEnum.onError]: assign<Context, ErrorEvent>({
        errors: (_ctx, { payload }) => payload.errors,
      }),
    },
  }
);
