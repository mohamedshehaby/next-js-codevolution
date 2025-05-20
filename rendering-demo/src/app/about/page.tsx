import { cookies } from 'next/headers'

export default async  function About() {
  const cookieStore = await cookies()
  const theme = cookieStore.get('theme')

  console.log(theme)
  return <div>About {new Date().toTimeString()} {theme?.name}</div>;
}
