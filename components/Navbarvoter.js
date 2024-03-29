import React from 'react'
import Image from 'next/image'
import { MdDomainVerification } from 'react-icons/md'
import { BsFillPersonPlusFill } from 'react-icons/bs'
import { GiVote } from 'react-icons/gi'
import { GiArchiveRegister } from 'react-icons/gi'
import { GrThreeDEffects } from 'react-icons/gr'
import { IconContext } from 'react-icons'
import { TiTick } from 'react-icons/ti'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="navbar mb-2 bg-neutral text-2xl text-neutral-content shadow-lg">
      
      <div class="navbar-start mx-2 px-2">
        <Link href="/">
          <span class="text-xl font-bold text-teal-500 hover:cursor-pointer">
            ONLINE SECURED VOTING
          </span>
        </Link>
      </div>

      <div class="navbar-center mx-2 hidden  px-4 lg:flex">
        <div class="justify-space flex items-stretch justify-evenly">
          <Link href="/registration">
            <a class="btn btn-ghost rounded-btn btn-sm text-lg">
              <MdDomainVerification /> Registration
            </a>
          </Link>
          {/* <a class="btn btn-ghost rounded-btn btn-sm text-lg">
            <BsFillPersonPlusFill /> Add Candidate
          </a> */}
          {/* <a class="btn btn-ghost rounded-btn btn-sm text-lg">
            <GiArchiveRegister /> Registration
          </a> */}
          <Link href="/vote">
            <a class="btn btn-ghost rounded-btn btn-sm text-lg">
              <GiVote /> Voting
            </a>
          </Link>

          <Link href="/results">
            <a class="btn btn-ghost rounded-btn btn-sm text-lg">
              <TiTick className="text-white" /> Results
            </a>
          </Link>
        </div>
      </div>
      <div class="navbar-end"></div>
    </div>
  )
}

export default Navbar
