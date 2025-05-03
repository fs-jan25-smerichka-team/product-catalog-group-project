import { CircularProgress, Stack, useTheme } from '@mui/material';

export const Loader = () => {
  const theme = useTheme();

  return (
    <Stack alignItems={'center'} minHeight={'50vh'} justifyContent={'center'}>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={theme.palette.info.main} />
            <stop offset="100%" stopColor={theme.palette.warning.main} />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress
        sx={{
          'svg circle': { stroke: 'url(#my_gradient)' },
        }}
      />
    </Stack>
  );
};
