"use client"
import React, { ReactNode, useEffect, useState } from 'react';
import {createContext} from 'react'
import client from '@/app/api/client';

type AuthContextType = {
  user:never | null;
  loading: boolean;
}
type AuthProviderProps = {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);


const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState(null);
  const [loading, isLoading] = useState<boolean>(true);

  useEffect(() => {
    client.auth.getSession().then((data) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      setUser(data?.session?.user || null);
      isLoading(false);
    });
    const { data: listener } = client.auth.onAuthStateChange((e, session) => {

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      return setUser(session?.user ?? null);
    });
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return <AuthContext.Provider value={{ user, loading }}>{children}</AuthContext.Provider>;
};

export {
  AuthProvider,
  AuthContext
}