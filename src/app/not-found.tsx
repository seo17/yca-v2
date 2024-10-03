export const runtime = "edge"; // Ensures it runs in the edge environment

export default function NotFound() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
    </div>
  );
}
