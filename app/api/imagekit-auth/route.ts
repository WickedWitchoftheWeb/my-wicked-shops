import ImageKit from "imagekit";

export async function GET() {
  const publicKey = process.env.IMAGEKIT_PUBLIC_KEY;
  const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
  const urlEndpoint = process.env.IMAGEKIT_URL_ENDPOINT;

  if (!publicKey || !privateKey || !urlEndpoint) {
    return new Response(
      JSON.stringify({ error: "Missing ImageKit env vars" }),
      { status: 500 }
    );
  }

  const imagekit = new ImageKit({
    publicKey,
    privateKey,
    urlEndpoint,
  });

  return new Response(
    JSON.stringify(imagekit.getAuthenticationParameters()),
    {
      status: 200,
      headers: { "content-type": "application/json" },
    }
  );
}