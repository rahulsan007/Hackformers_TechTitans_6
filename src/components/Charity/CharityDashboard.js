import { Box, Container } from '@mui/system'
import React from 'react'
import CharityCard from './CharityCard'

const CharityDashboard = () => {
  return (
    <Container sx={{padding:'10px'}}>
        <CharityCard/>
    </Container>
  )
}

export default CharityDashboard
