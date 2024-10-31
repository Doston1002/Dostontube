import { Box, Stack } from '@mui/material'
import React from 'react'

import {VideoCard, ChannelCard} from '../'


const Videos = ({videos}) => {
  return (
<>

   <Stack 
   width={'100%'}
   direction={'row'}
   flexWrap={'wrap'}
   justifyContent={'start'}
   alignItems={'center'}
   gap={2}
   >
{videos.map( item=>(
    <Box key={item.id.videoId}>
        {item.id.channelId && <VideoCard video={item}/>}
        {item.id.videoId && <ChannelCard video={item}/>}
    </Box>
))}
   </Stack>
   </>
  )
}

export default Videos