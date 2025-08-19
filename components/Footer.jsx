export default function Footer(){
  return (
    <footer className="mt-24 border-t border-white/10/">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-muted">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} HireFlow · Created by @Aditi Kesharwani</p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="hover:text-page">Privacy</a>
            <a href="/terms" className="hover:text-page">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
