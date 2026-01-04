"use client"
import React, { useEffect, useState } from 'react';
import {supabase} from '@/app/lib/supabase';
import { create } from 'node:domain';
// importing Props
import type {PostProps} from "@/app/types/@global"


const MainPage = () => {

  const [context,setContext] = useState<string>("rame");
  const [post, setPost] = useState<PostProps[]>([]);

  const createPostHandler = async () =>{
    const { data, error } = await supabase
      .from('post')
      .insert({
        image:
          'https://cdn.hashnode.com/res/hashnode/image/upload/v1732628467711/a13b0012-2561-4bb0-b05c-606c8aa46fab.png',
        context: `This is Second Context of Supabase`,
        user_id: 'd5320ec2-075f-4b25-b206-07536800c422',
      })
      .select();

    if(error){
      console.log(error);
      throw error;
    }
    console.log(data,"Post handler created");
  }


  useEffect(()=>{
    const getPostHandler = async () =>{
      const {data:post, error} = await supabase.from("post").select("*")
      if(error){
        throw error;
      }
      console.log(post,"Post handler created");
      setPost(post)
      console.log(post,"this is post handler")
    }
    getPostHandler();
  },[])

  return (
    <div>
      {/*Headre div*/}
      <div className={'p-3'}>
        <h1>This is Header</h1>
        {/*div for left middle and right side*/}
        <div className={'flex mt-5 justify-between'}>
          {/*Left Side */}
          <div className={''}>
            <h1 className={'text-white hover:bg-[#6a6b6e]'}>George Ratiani</h1>
          </div>
          {/*Middle Side*/}
          <div>
            <h1>this is post side</h1>
          </div>
          {/*  this is right side*/}
          <div>
            <h1>This si Right Side</h1>
            <button onClick={createPostHandler}>Post</button>
            {/*Getting Each Post From Each User*/}
            {post.map((eachPost) =>{
              return(
                <div key={eachPost.id}>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;