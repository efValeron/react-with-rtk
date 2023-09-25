import {moneyReducer} from "./moneyReducer.ts";

test('should add money', () => {
  const start = 10

  const end = moneyReducer(start, {type: 'ADD', amount: 10})

  expect(end).toBe(20)
})

test('should subtract money', () => {
  const start = 20

  const end = moneyReducer(start, {type: 'MINUS', amount: 10})

  expect(end).toBe(10)
})