// eslint-disable-next-line no-eval


export const CALCULATOR_KEY = 'calculatorStore'

const initState = {
    number: '',
    ans: '',
    journal: [],
    journalCount: 0
}

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

export const reducer = (state = initState, action) => {
    let {type, payload} = action;
    switch (type) {
      case 'LOAD_BUTTON':
        payload = payload === ',' ? '.' : payload
        return {
          ...state,
          ...payload,
          number: state.number.concat(payload),
          ans: ''
        };
      case 'DEL':
        return {
            ...state,
            ...payload,
            number: state.number.slice(0, -1),
            ans:''
          };
      case 'CLEAR':
        return {
            ...state,
            ...payload,
            number: '',
            ans: ''
        }
      // case 'FAC':
      //   return {
      //       ...state,
      //       ...payload,
      //       ans: factorial(state.number.slice(1)).toString(),
      //       number: ''
      //   }
      case 'ANS':
        state.number = state.number.replace('cos', 'Math.cos')
        state.number = state.number.replace('sin', 'Math.sin')
        state.number = state.number.replace('ln', 'Math.log')
        state.number = state.number.replace('^', '**')
        state.number = state.number.replace('sqrt', 'Math.sqrt')
        try{
          if (state.number.includes('!')){
            return {
              ...state,
              ...payload,
              ans: factorial(state.number.slice(1)).toString(),
              number: '',
              // journal: state.journal.push(+state.ans),
              // journalCount: state.journalCount + 1
            }
          }else{
            return {
              ...state,
              ...payload,
              ans: eval(state.number).toString(),
              number: '',
              journal: state.journal.push(state.ans),
              journalCount: state.journalCount + 1
            };

          }
        }catch{
          return {
            ...state,
            ...payload,
            ans: 'Incorrect input',
            number: ''
          };
        }

      default:
        return state;
    }    
  }