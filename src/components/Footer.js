export default function Footer() {
  return (
    <footer className="my-20 py-4">
      <div
        className="bg-gradient-to-t from-red-500 to-transparent"
        style={{ height: "10px" }}
      ></div>
      <p className="text-center text-sm text-red-500">
        Copyright © {new Date().getFullYear()} WebMuba. All rights reserved.
      </p>
      <p className="text-center text-xs text-red-500 mt-1">
        Made by{" "}
        <a
          href="https://webmuba.co.zw"
          target="_blank"
          rel="noopener"
          className="hover:underline"
        >
          WebMuba
        </a>
      </p>
    </footer>
  );
}