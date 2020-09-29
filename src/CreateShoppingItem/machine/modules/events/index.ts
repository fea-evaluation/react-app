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
  errors: string[];
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
