import { Container, Pagination } from '@mui/material'

const StyledPagination = ({
  setPage,
  pageCount
}: {
  setPage: (page: number) => void
  pageCount: number
}) => {
  const onPageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setPage(page)
  }

  return (
    <Container sx={{ py: '1rem', display: 'flex', justifyContent: 'center' }}>
      <Pagination
        count={pageCount}
        color="secondary"
        variant="outlined"
        onChange={onPageChange}
      />
    </Container>
  )
}

export default StyledPagination
