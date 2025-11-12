import BASE_API from "../base";

export function AuthService() {

  const CONTROLLER = '/users';

  return {
    login: async ():Promise<string> => BASE_API.post(`${CONTROLLER}/login`, {
      email: "jhonatansromeroc@gmail.com",
      password: "hola1234"
    }),
    logout: async ():Promise<string> => BASE_API.post(`${CONTROLLER}/logout`),
    verify: async ():Promise<string> => BASE_API.get(`${CONTROLLER}/verify`),
  }
}
