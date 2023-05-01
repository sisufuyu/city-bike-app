import { Container, Pagination } from '@mui/material'

const StyledPagination = ({ setPage, pageCount }: { setPage: (page: number) => void, pageCount: number }) => {
  const onPageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page)
    console.log(page)
  }

  return (
    <Container sx={{ my: "1rem", display: "flex", justifyContent: "center" }}>
      <Pagination count={pageCount} color="secondary" variant="outlined" onChange={onPageChange}/>
    </Container>
  )
}

export default StyledPagination