import React from 'react'
import Hero from './components/Hero/Hero'
import WordBreak from './components/WordBreak/WordBreak'
import MakeReservation from './components/MakeReservation/MakeReservation'
import FirstStepMenu from './components/FirstStepMenu/FirstStepMenu'
import PictureBreak from './components/PictureBreak/PictureBreak'

export default function Home() {
  return (
    <>
    <Hero/>
    <WordBreak/>
    <MakeReservation/>
    <FirstStepMenu/>
    <PictureBreak/>
    </>
  )
}
