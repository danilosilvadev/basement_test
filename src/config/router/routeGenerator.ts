// export interface IScreensNames {
//   [key: string]: React.ElementType;
// }

// export interface IScreens {
//   [key: string]: {
//     [key: string]: React.ElementType;
//   };
// }

// const generateStack = (Stack: IScreensNames) =>
//   Object.keys(Stack).map((Screen) => ({
//     Component: Stack[Screen as keyof typeof Stack],
//     name: Screen,
//   }));

// export const createRoutes = (Screens: IScreens) => {
//   const { AuthScreens, ...otherScreens } = Screens;
//   return {
//     authStack: AuthScreens ? generateStack(AuthScreens) : [],
//     appStack: generateStack(otherScreens),
//   };
// };

export {};
