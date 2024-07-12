import { Button, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Achievement = () => {
  // const TriangleImg = styled("img")({
  //   right: 0,
  //   bottom: 0,
  //   height: 170,
  //   position: 'absolute'
  // })

  const TrophyImg = styled("img")({
    right: 36,
    bottom: 20,
    height: 98,
    position:'absolute'
  })

  return (
    <Card sx={{position:'relative'}}>
      <CardContent>
        <Typography variant='h6' sx={{letterSpacing:".25px"}}>Dsimilar</Typography>
        <Typography variant='body2'>Congratulations</Typography>
        <Typography variant='h5' sx={{ my: 3.1 }}>127.2k</Typography>
        <Button size='small' variant='contained'>View Sales</Button>
        {/* <TriangleImg src="" alt="triangle" /> */}
        <TrophyImg src="https://ik.imagekit.io/yvkwe3mb0/trophy.png?updatedAt=1720076817658" alt="trophy" />
      </CardContent>
    </Card>
  )
}

export default Achievement