import React from 'react'
import Hero from './components/Hero/Hero'
import WordBreak from './components/WordBreak/WordBreak'
import MakeReservation from './components/MakeReservation/MakeReservation'
import FirstStepMenu from './components/FirstStepMenu/FirstStepMenu'
import PictureBreak from './components/PictureBreak/PictureBreak'
import KitchenInsight from './components/KitchenInsight/KitchenInsight'
import BottomPhoto from './components/BottomPhoto/BottomPhoto'

export default function Home() {
  return (
    <>
    <Hero/>
    <WordBreak/>
    <MakeReservation/>
    <FirstStepMenu/>
    <PictureBreak/>
    <KitchenInsight/>
    <BottomPhoto/>
    </>
  )
}
