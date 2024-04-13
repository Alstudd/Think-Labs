import LogicGame from '@/components/LogicGame';
import Navbar from '@/components/Navbar';
import React from 'react'

export default function page() {
    return (
      <div className='bg-white'>
      <Navbar/>
      <LogicGame/>
      </div>
    );
  }