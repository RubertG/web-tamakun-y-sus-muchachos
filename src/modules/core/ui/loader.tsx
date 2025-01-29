const Loader = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <div className="flex h-10 w-10 animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-accent-100 text-4xl text-accent-100">
        <div className="flex h-7 w-7 animate-spin items-center justify-center rounded-full border-4 border-transparent border-t-primary-100 text-2xl text-primary-100"></div>
      </div>
    </div>
  )
}

export { Loader }
