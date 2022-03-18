import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/system/Box'
import CardActions from '@mui/material/CardActions'
import Skeleton from '@mui/material/Skeleton'

const styles = {
  card: {
    backgroundColor: 'background.default',
    borderRadius: 0,
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: 2,
    },
  },
  cardMedia: {
    paddingTop: '56.25%',
    width: '100%',
    objectFit: 'cover',
  },
}

export default function LoadingCard() {
  return (
    <Card sx={styles.card} align='left'>
      <CardActionArea component='div'>
        <Skeleton width='100%'>
          <Box sx={{ width: '100%', height: '56%' }} />
        </Skeleton>

        <CardContent>
          <Box display='flex' justifyContent='space-between'>
            <Skeleton width='100%'>
              <Typography gutterBottom variant='h5' component='h2'>
                yeah
              </Typography>
            </Skeleton>
          </Box>

          <Skeleton width='100%'>
            <Button
              fullWidth
              size='small'
              sx={{ mr: 1, mb: 1, borderRadius: 0 }}
              variant='outlined'
            >
              .
            </Button>
          </Skeleton>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Skeleton width='100%'>
          <Button
            fullWidth
            size='small'
            sx={{ mr: 1, mb: 1, borderRadius: 0 }}
            variant='outlined'
          >
            .
          </Button>
        </Skeleton>
      </CardActions>
    </Card>
  )
}
