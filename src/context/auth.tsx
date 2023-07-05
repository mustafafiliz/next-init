import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { IMe } from '@/interfaces/Auth/auth.interface';
import { deleteCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/router';

const Context = createContext<{ user: any; me: IMe | undefined; login?: any; logout: any }>({ user: undefined, me: undefined, login: async () => null, logout: async () => null });

export function AuthContext({ token, children }: { token?: string; children: ReactNode }) {
  const [user, setUser] = useState<any>(token);
  const [me, setMe] = useState<IMe | undefined>(undefined);
  const router = useRouter();
  // useEffect(() => {
  //   const getDatas = async () => {
  //     try {
  //       const res = await getMe();
  //       setMe(res.data);
  //     } catch (error) {
  //       return error;
  //     }
  //   };
  //   if (token) getDatas();
  //   setUser(token);
  // }, [token]);

  // const login = async (phone: string, code: string, type: 'login' | 'register') => {
  //   try {
  //     const response = type === 'login' ? await verifyCode(phone, Number(code)) : await verifyRegister(phone, Number(code));
  //     const token = response.data.token;
  //     setCookie('token', token, { maxAge: 60 * 60 });
  //     router.reload();
  //   } catch (error) {
  //     return error;
  //   }
  // };
  const logout = async () => {
    deleteCookie('token');
    router.push('/');
  };
  return <Context.Provider value={{ user, logout, me }}>{children}</Context.Provider>;
}

export function useAuth() {
  return useContext(Context);
}
