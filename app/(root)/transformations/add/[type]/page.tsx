// 'use client'
import React from 'react'
import Header from '@/components/shared/Header'
import { transformationTypes } from '@/constants';
import TransformationForm from '@/components/shared/TransformationForm';
import { SearchParamProps } from '@/types';
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs/server';
import {redirect} from 'next/navigation';
import { TransformationTypeKey } from '../../../../../types';
const AddTransformationTypePage = async ({params:{type}}: 
SearchParamProps) => {
  const {userId} = auth();
  const transformation =  transformationTypes[type];
  if(!userId) redirect('/sign-in')
  const user = await getUserById(userId);

  return (
    <>
        <Header
          title={transformation.title}
          subTitle = {transformation.subTitle}
         />
         <TransformationForm
          action='Add'
          userId ={user.id}
          type={transformation.type as TransformationTypeKey}
          creditBalance = {user.creditBalance}
         />

    </>
  )
}

export default AddTransformationTypePage
