import React from 'react'
import ReservationHero from './components/ReservationHero/ReservationHero'
import ReservationMaker from './components/ReservationMaker/ReservationMaker'
import ReservationCalling from './components/ReservationCalling/ReservationCalling'

export default function ReservationPage() {
  return (
    <>
        <ReservationHero/> 
        <ReservationMaker/>
        <ReservationCalling/>
    </>
  )
}
