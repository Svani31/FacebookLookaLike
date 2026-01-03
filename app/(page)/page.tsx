'use client';
import Link from 'next/dist/client/link';
import { useEffect, useState } from 'react';
import { supabase } from '@/app/lib/supabase';

interface User {
  id?: string;
  username: string;
  email: string;
}

export default function Home() {
  const [user, setUser] = useState<User>({
    username: '',
    email: '',
  });
  const [loading, isLoading] = useState<boolean>(false);

  const submitForm = async (e:any) => {
    e.preventDefault();
    console.log(user);
    isLoading(true);

    const { error, data } = await supabase.from('Name').insert([user]);
    console.log(data, 'this is Date from supaabase');

    if (error) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      throw new error();
    }

    isLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('Name').select('*');
    };
    fetchData();
  }, []);

  return (
    <div>
      <Link href="/components/main">Main</Link>
      <Link href="/components/sigup">Sign Up</Link>
      <form onSubmit={(e) => submitForm(e)}>
        <input
          placeholder={'input Username'}
          value={user?.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <input
          placeholder={'input Email'}
          value={user?.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <button type={'submit'} disabled={loading}>
          Submit
        </button>
      </form>
    </div>
  );
}
