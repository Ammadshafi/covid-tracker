import { Grid,Typography,Box } from '@mui/material'
import React from 'react'

const DataCard = ({heading,data}) => {
  return (
 <Box textAlign={'center'} p={5}color='white' textTransform={"capitalize"}>
 
 <Typography variant="h5">
  {heading}
</Typography>
<Typography variant="h4">
{data}
</Typography>

  

 </Box>
  )
}

export default DataCard