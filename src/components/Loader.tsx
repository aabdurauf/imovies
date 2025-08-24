import { CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center dark:bg-[#0D0D0F]">
      <CircularProgress
        sx={{ color: "red" }}
      />
    </div>
  )
}

export default Loader