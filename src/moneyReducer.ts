type Add = {
  type: "ADD"
  amount: number
}
type Minus = {
  type: "MINUS"
  amount: number
}
type Action = Add | Minus

const initialState = 0

export const moneyReducer = (state = initialState, action: Action): number => {
  switch (action.type) {
    case "ADD":
      return state + action.amount
    case "MINUS":
      return state - action.amount
    default:
      return state
  }
}

export const addAC = (amount: number): Add => ({
  type: "ADD",
  amount,
})
export const minusAC = (amount: number): Minus => ({
  type: "MINUS",
  amount,
})