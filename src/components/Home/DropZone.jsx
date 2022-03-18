import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { DropzoneArea } from 'material-ui-dropzone'
import { useState } from 'react'

const DropZone = () => {
  const [file, setFile] = useState(null)

  const handleChange = (files) => {
    if (files[0]) {
      setFile(files[0])
      console.log(files[0])
    }
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
        onClick={() => console.log(file)}
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
    </Box>
  )
}

export default DropZone
