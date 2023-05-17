import { Box, Skeleton } from '@mui/material'

const StationSkeleton = () => {
  return (
    <>
      <Box sx={{mr:2}}>
        <Skeleton variant="rectangular" width={200} height={40} />
        <Skeleton variant="rectangular" width={200} height={24} sx={{my: 2}} />
        <Skeleton variant="rectangular" width={500} height={50} sx={{mt: 1}} />
        <Skeleton variant="rectangular" width={500} height={50} sx={{mt: 1}} />
      </Box>
      <Skeleton variant="rectangular" width={300} height={300} />
    </>
  )
} 

export default StationSkeleton