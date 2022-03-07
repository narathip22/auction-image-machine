// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  eventsCausingActions: {
    updateAucImages: "done.invoke.fetch-image-url";
    updateCurrentNextImage: "AUCTION_IMG.NEXT_PRESSED";
    updateCurrentPreviousImage: "AUCTION_IMG.PREVIOUS_PRESSED";
  };
  internalEvents: {
    "done.invoke.fetch-image-url": {
      type: "done.invoke.fetch-image-url";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "xstate.init": { type: "xstate.init" };
    "error.platform.fetch-image-url": {
      type: "error.platform.fetch-image-url";
      data: unknown;
    };
  };
  invokeSrcNameMap: {
    fetchImageUrl: "done.invoke.fetch-image-url";
  };
  missingImplementations: {
    actions: never;
    services: never;
    guards: never;
    delays: never;
  };
  eventsCausingServices: {
    fetchImageUrl: "xstate.init";
  };
  eventsCausingGuards: {};
  eventsCausingDelays: {};
  matchesStates: "idle" | "display" | "error";
  tags: never;
}
