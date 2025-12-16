// Redirect /home to / to avoid duplicate route
export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
}

export default function Home() {
  return null;
}

