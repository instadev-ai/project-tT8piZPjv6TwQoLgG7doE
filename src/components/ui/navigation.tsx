import { Button } from './button'

export function Navigation() {
  return (
    <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="font-bold">YourSaaS</span>
        </div>
        <nav className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">About</Button>
          <Button variant="ghost" size="sm">Features</Button>
          <Button variant="ghost" size="sm">Contact</Button>
          <Button size="sm">Early Access</Button>
        </nav>
      </div>
    </header>
  )
}