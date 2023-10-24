import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <header>
        <div id="home">
            <div id="intro">
            <h1 class="who">Who's <span>Soham</span>?</h1>
            <p class="capitalised">I am Soham Sen.</p>
            <p class="intro">I like to code stuff, both for fun and profit. I love open source, and often contribute to the software I use.</p>
            <div class="homebtns">
                <div class="resume">
                <button class="fill">Resume</button></div>
                <div class="blog">
                <button class="outline">Check Out my Blog!</button>
                </div>
            </div>
            </div>
            <div id="introshapes">
                
                <div class="shape1"></div>
                <div class="shape2"></div>
                <div class="shape3"></div>
            </div>
            
        </div>
        <div class="vector">
      <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="1496" viewBox="0 0 1440 1496" fill="none">
        <g filter="url(#filter0_f_2_34)">
          <path d="M1038 374C1130 156 1086 120 1482 -94L0 -52V1128L268 1110C361.333 1109.33 600 1076 808 948C1068 788 946 592 1038 374Z" fill="url(#paint0_linear_2_34)" fill-opacity="0.5"/>
          <path d="M1038 374C1130 156 1086 120 1482 -94L0 -52V1128L268 1110C361.333 1109.33 600 1076 808 948C1068 788 946 592 1038 374Z" stroke="black"/>
        </g>
        <defs>
          <filter id="filter0_f_2_34" x="-367.5" y="-461.5" width="2216.74" height="1957.03" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="183.5" result="effect1_foregroundBlur_2_34"/>
          </filter>
          <linearGradient id="paint0_linear_2_34" x1="454" y1="-82" x2="692" y2="704" gradientUnits="userSpaceOnUse">
            <stop stop-color="#8568FF"/>
            <stop offset="0.296875" stop-color="#3E3579"/>
            <stop offset="1" stop-color="#1D1E3C"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
        
    </header>
  )
}

export default Home