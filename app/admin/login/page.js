import { loginAction } from '@/lib/actions/auth';
import Logo from '@/components/Logo';

export const metadata = {
  title: 'Admin login — P2B Infotech',
  robots: { index: false, follow: false },
};

export default function AdminLoginPage({ searchParams }) {
  const hasError = searchParams?.error === '1';

  return (
    <main className="min-h-screen bg-paper flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-[380px]">
        <div className="flex justify-center mb-10">
          <Logo tone="dark" />
        </div>

        <div className="border border-line rounded-2xl p-8">
          <h1 className="font-display text-[20px] font-semibold text-ink">Admin sign in</h1>
          <p className="mt-1.5 text-[14px] text-muted">Manage job listings for the careers page.</p>

          <form action={loginAction} className="mt-7 space-y-4">
            <div>
              <label htmlFor="username" className="block text-[13px] font-medium text-ink/70 mb-1.5">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                autoComplete="username"
                className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-[14.5px] text-ink focus:outline-none focus:border-signal transition-colors"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-[13px] font-medium text-ink/70 mb-1.5">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-[14.5px] text-ink focus:outline-none focus:border-signal transition-colors"
              />
            </div>

            {hasError && (
              <p className="text-[13.5px] text-red-600">
                Invalid username or password. Please try again.
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-full bg-gradient-brand bg-gradient-brand-hover text-paper text-[14.5px] font-medium py-3.5 transition-[background-image] duration-300"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
