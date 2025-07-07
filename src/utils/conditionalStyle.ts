function conditionalStyle(show: boolean, value: string, elseValue: string = ''): string {
  return show ? value : elseValue
}

export { conditionalStyle }
