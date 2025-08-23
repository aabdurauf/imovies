import { CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <CircularProgress
        sx={{ color: "#ff0000" }}
      />
    </div>
  )
}

export default Loader