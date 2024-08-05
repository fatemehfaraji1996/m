import { Typography } from '@mui/material'
import React from 'react'

export default function page({params}) {
  return (
    <Typography>admin id:{params.id}</Typography>
  )
}
