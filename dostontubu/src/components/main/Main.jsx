import {useState} from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'
import { colors } from '../../constants/colors'
import {Category} from '../'
const Main = () => {
    const [selectedCategory, setSelectedCategory] = useState('New')
  return (
   <Stack>
   <Category/>
    <Box p={2} sx={{height:'90vh'}}>
        <Container maxWidth={'90%'}>
            <Typography variant={'h4'} fontWeight={"bold"} mb={2}>
                {selectedCategory} <span style={{color:colors.secondary}}>videos</span>
            </Typography>
            videos
        </Container>

    </Box>
   </Stack>
  )
}

export default Main