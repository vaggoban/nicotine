"use client"
import { useState } from 'react'
import React from 'react'
import Image from 'next/image'
import logo from "../../img/cigar.png"
import list from "../../img/list.png"
const page = () => {
    const [show,setShow]=useState(false);
    function myF(){
        setShow(show=>!show)
    }
    let toggle = show ? " active" : null
  return (
    <div>
        <div className="nav p-2 ">
            <div className="logo w-10 h-10">
                <Image alt='img' src={logo} ></Image>
            </div>
            <div className={`btn${toggle}`}>
                btn
            </div>
            <div className="list h-10 w-10">
                <Image alt='omg'src={list} onClick={myF} ></Image>
            </div>
        </div>
    </div>
  )
}

export default page