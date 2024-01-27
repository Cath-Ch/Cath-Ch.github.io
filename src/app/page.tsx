import { StyledEngineProvider } from '@mui/material/styles';

export default function Home() {
  return (
    <StyledEngineProvider injectFirst>
      <main>
        <h1>Home</h1>
      </main>
    </StyledEngineProvider>
  );
}