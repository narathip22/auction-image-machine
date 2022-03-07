import { interpret, matchState } from "xstate";
import { aucImagesMachine } from "./auction-image-machine";

it('should update "aucImages" when the "onDone" event occurs', () => {
  const expectedValue = 2;
  const service = interpret(aucImagesMachine)
    .onTransition((state) => {
      if (state.matches("display")) {
        expect(state.context.aucImages.length === expectedValue).toBeTruthy();
      }
    })
    .start();
});

// test transition state

it('should reach "display" given "display" when the "AUCTION_IMG.NEXT_PRESSED" event occurs', () => {
  const expectedValue = "display"; // the expected state value

  const actualState = aucImagesMachine.transition("display", {
    type: "AUCTION_IMG.NEXT_PRESSED",
  });
  expect(actualState.matches(expectedValue)).toBeTruthy();
});

it('should reach "display" given "display" when the "AUCTION_IMG.PREVIOUS_PRESSED" event occurs', () => {
  const expectedValue = "display";
  const actualState = aucImagesMachine.transition("display", {
    type: "AUCTION_IMG.PREVIOUS_PRESSED",
  });
  expect(actualState.matches(expectedValue)).toBeTruthy();
});

// test context change

it('should update "currentIndex" given "display" when the "AUCTION_IMG.NEXT_PRESSED" event occurs', () => {
  const Context = { aucImages: ["0", "1"], currentIndex: 0 };
  const expectedValue = 1;
  const service = aucImagesMachine.withContext(Context);

  const actualState = service.transition("display", {
    type: "AUCTION_IMG.NEXT_PRESSED",
  });

  expect(actualState.context.currentIndex === expectedValue).toBeTruthy();
});

it('should update "currentIndex" given "display" when the "AUCTION_IMG.PREVIOUS_PRESSED" event occurs', () => {
  const Context = { aucImages: ["0", "1"], currentIndex: 1 };
  const expectedValue = 0;
  const service = aucImagesMachine.withContext(Context);

  const actualState = service.transition("display", {
    type: "AUCTION_IMG.PREVIOUS_PRESSED",
  });

  expect(actualState.context.currentIndex === expectedValue).toBeTruthy();
});
