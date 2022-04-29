import { Container, LoadingImage } from "./styles";

export default function Loading() {
  return (
    <Container>
      <LoadingImage
        src="https://assets.nflxext.com/en_us/pages/wiplayer/site-spinner.png"
        alt="Loading"
      />
    </Container>
  );
}
