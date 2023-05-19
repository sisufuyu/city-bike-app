import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

const StandardImageList = () => {
  const width =
    window.innerWidth > 900 ? window.innerWidth / 6 : window.innerWidth / 3
  const height =
    window.innerWidth > 900 ? window.innerHeight : window.innerHeight / 2

  return (
    <ImageList cols={window.innerWidth > 900 ? 6 : 3} sx={{ m: 0 }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=${width}&h=${height}&fit=crop&auto=format`}
            srcSet={`${item.img}?w=${width}&h=${height}&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default StandardImageList

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1592614558340-8095660384f6',
    title: 'mintgreen bike'
  },
  {
    img: 'https://images.unsplash.com/photo-1510736594446-2832676f52c7',
    title: 'green bike'
  },
  {
    img: 'https://images.unsplash.com/photo-1533641568252-76ce0951d5b4',
    title: 'bike & red brick wall'
  },
  {
    img: 'https://images.unsplash.com/photo-1558190596-69daf12cf424',
    title: 'black bike'
  },
  {
    img: 'https://images.unsplash.com/photo-1658245487953-244a9a89a933',
    title: 'white bike'
  },
  {
    img: 'https://images.unsplash.com/photo-1496104570434-e8719f0c1c02',
    title: 'red bike'
  }
]
