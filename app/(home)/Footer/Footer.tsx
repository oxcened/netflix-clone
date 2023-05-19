export default function Footer() {
  return (
    <footer className="px-[4%] py-20 lg:pt-0 bg-neutral-900 text-neutral-400 text-sm">
      <div className="flex justify-between flex-col lg:flex-row gap-12 lg:gap-0">
        <ul className="space-y-2">
          <li>
            <a href="#">Audio Description</a>
          </li>
          <li>
            <a href="#">Investor Relations</a>
          </li>
          <li>
            <a href="#">Legal Notices</a>
          </li>
        </ul>

        <ul className="space-y-2">
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Cookie Preferences</a>
          </li>
        </ul>

        <ul className="space-y-2">
          <li>
            <a href="#">Gift Cards</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Corporate Information</a>
          </li>
        </ul>

        <ul className="space-y-2">
          <li>
            <a href="#">Media Center</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>

      <div className="mt-14 flex flex-col lg:flex-row justify-between gap-4 lg:gap-0">
        <p>
          Made with ❤️ by&nbsp;
          <a
            href="https://alenajam.dev"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Alen Ajam
          </a>
        </p>

        <a
          href="https://github.com/oxcened/netflix-clone"
          className="underline"
          target="_blank"
          rel="noreferrer"
        >
          Fork on GitHub
        </a>
      </div>
    </footer>
  );
}
