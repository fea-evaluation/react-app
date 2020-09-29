import { createMachine } from "xstate";

import { actions } from "./actions";
import { Context } from "./context";
import { EventPayload, Event } from "./events";
import { createInitialState, states, State } from "./states";

export * from "./actions";
export * from "./context";
export * from "./events";
export * from "./services";
export * from "./states";

export const id = "createShoppingItem";

export const CreateShoppingItemMachine = createMachine<Context, Event<EventPayload>, State>(
  {
    id,
    initial: createInitialState(),
    states,
  },
  {
    actions,
  }
);
