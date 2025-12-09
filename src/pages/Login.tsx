export function Login() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24">
      <div className="max-w-[500px] mx-auto px-20 w-full">
        <h1 className="text-5xl font-extrabold mb-8 text-text-primary text-center">Login</h1>
        <form className="bg-bg-card border border-border rounded-2xl p-10">
          <div className="mb-6">
            <label className="block text-text-primary mb-2">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 bg-bg-dark border border-border rounded-lg text-text-primary focus:outline-none focus:border-accent-orange"
              placeholder="your@email.com"
            />
          </div>
          <div className="mb-8">
            <label className="block text-text-primary mb-2">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 bg-bg-dark border border-border rounded-lg text-text-primary focus:outline-none focus:border-accent-orange"
              placeholder="••••••••"
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-accent-orange text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-[#ff5722] transition-all"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  )
}
