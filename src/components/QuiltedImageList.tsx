import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format`,
    }
}

const QuiltedImageList = () => {
  return (
    <ImageList
      variant="quilted"
      cols={window.innerWidth > 900 ? 7: 5}
    >   
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols} rows={item.rows}>
          <img
            {...srcset(item.img, 213, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default QuiltedImageList

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1557261651-a6beab93541f",
    title: 'Helsinki Aleksanterinkatu',
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5",
    title: 'Helsinki Cathedral',
    rows: 3,
    cols: 3,
  },
  {
    img: "https://images.unsplash.com/photo-1606128474787-1ab9fcb620d2",
    title: 'bike',
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1568008842610-6642e5afe517",
    title: 'Suomenlinna',
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1500068865647-1e1ce6b80f13",
    title: 'bike',
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1531502774286-5e4e8e94879f",
    title: 'bike',
    rows: 1,
    cols: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1602148740250-0a4750e232e9",
    title: 'bike',
    rows: 1,
    cols: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1501147830916-ce44a6359892",
    title: 'bike',
    rows: 1,
    cols: 1,
  },
]