import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import axios from 'axios'
import { DropzoneArea } from 'material-ui-dropzone'
import { useState } from 'react'
import { CircularProgress } from '@mui/material'

const DropZone = () => {
  const [file, setFile] = useState(null)
  const [result, setResult] = useState([])
  const [loading, setLoading] = useState(false)

  const handleChange = (files) => {
    if (files[0]) {
      setFile(files[0])
      console.log(files[0])
    }
  }

  const onSubmit = (file) => {
    setLoading(true)
    var formData = new FormData()
    formData.append('file', file)
    axios({
      method: 'POST',
      url: 'http://localhost:5000/predict',
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then((res) => {
        setLoading(false)
        console.log(res)
        setResult(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  console.log(file)
  return (
    <Box my={6}>
      <DropzoneArea
        acceptedFiles={['image/*']}
        filesLimit={1}
        dropzoneText={'Drag and drop an image here or click'}
        onChange={(files) => handleChange(files)}
        clearOnUnmount={true}
      />
      <Button
        onClick={() => onSubmit(file)}
        sx={{
          marginTop: '20px !important',
          padding: '6px !important',
          borderRadius: '6px !important',
          bgcolor: !!file ? '#2196F3 !important' : 'lightgrey !important',
          color: !!file ? '#fff !important' : 'grey !important',
        }}
        fullWidth
        disabled={!file}
        variant='contained'
        color='primary'
      >
        Check
      </Button>
      {loading && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {result !== [] && loading === false && (
        <Paper sx={{ mt: 3, p: 1 }}>
          <Typography
            gutterBottom
            variant='h4'
            fontWeight='bold'
            align='center'
          >
            Result
          </Typography>
          <Typography gutterBottom variant='h5' fontWeight='bold'>
            Boxes:
          </Typography>
          {result?.boxes?.map((e) => (
            <Typography>{e?.toString()}</Typography>
          ))}
          <Typography gutterBottom variant='h5' fontWeight='bold'>
            Labels:
          </Typography>
          {<Typography>{result?.labels?.toString()}</Typography>}
        </Paper>
      )}
    </Box>
  )
}

export default DropZone
