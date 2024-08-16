export const currentInitState:CurrentState = {
    data: null,
};
// export interface Current {
//     data: null | {
//         name: string;
//         email: string;
//     };
// }
export interface Current {
    name: string;
    email: string;
  }
  
  interface CurrentState {
    data: Current | null;
  }
  
//   const currentInitState: CurrentState = {
//     data: null,
//   };