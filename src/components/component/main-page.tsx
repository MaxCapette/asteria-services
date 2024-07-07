
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SheetTrigger, SheetContent, Sheet, SheetClose } from "@/components/ui/sheet"
import ContactPage from "../contact/contact"
export function MainPage() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="bg-primary/80 text-primary-foreground py-4 px-6 sticky top-0 z-50  backdrop-blur flex items-center justify-between">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <img src="/logo.png" width="40" height="40" alt="Logo" />
          <span className="text-xl font-bold px-4">ASTERIA SERVICES</span>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6 font-medium">
          <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
            Accueil
          </Link>
          <Link href="#services" className="hover:underline underline-offset-4" prefetch={false}>
            Services
          </Link>
          <Link href="#about" className="hover:underline underline-offset-4" prefetch={false}>
            À propos
          </Link>
          <Link href="#testimonials" className="hover:underline underline-offset-4" prefetch={false}>
            Témoignages
          </Link>
          <Link href="#contact" className="hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
          <Button variant="default" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          </SheetTrigger>
          <SheetContent className="w-full max-w-xs  p-6 backgroundCustom" side="right">
              <div className="flex flex-col gap-6">
              <SheetClose asChild>
                <Link className="font-medium hover:text-gray-900 dark:hover:text-gray-50" href="#about">
                À propos
                </Link>
                </SheetClose>
                <SheetClose asChild>
              <Link className="font-medium hover:text-gray-900 dark:hover:text-gray-50" href="#services">
              Services
                </Link>
                </SheetClose> 
                <SheetClose asChild>
                <Link className="font-medium hover:text-gray-900 dark:hover:text-gray-50" href="#testimonials">
                Témoignages
                </Link>
                </SheetClose>
                <SheetClose asChild>
                <Link className="font-medium hover:text-gray-900 dark:hover:text-gray-50" href="#contact">
                  Contact
                </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
      </header>
      <main className="flex-1">
        <section className="flex justify-center bg-primary text-primary-foreground py-12 md:py-24 lg:py-32">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Sécurité informatique de confiance
              </h1>
              <p className="text-lg md:text-xl">
                Chez ASTERIA SERVICES, nous mettons notre expertise au service de la protection de vos données et de
                votre infrastructure IT.
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground shadow-sm transition-colors hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                  prefetch={false}
                >
                  Nous contacter
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center rounded-md border border-primary-foreground px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}
                >
                  Nos services
                </Link>
              </div>
            </div>
            <img
              src="/secu.jpeg"
              width="550"
              height="310"
              alt="Hero"
              className="mx-auto overflow-hidden rounded-t-xl object-cover"
            />
          </div>
        </section>
        <section id="services" className="flex justify-center py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-8 md:space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm">Nos services</div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Des solutions sur-mesure pour votre sécurité
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Chez ASTERIA SERVICES, nous proposons une gamme complète de services pour répondre à tous vos besoins en
                matière de sécurité informatique.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <ShieldIcon className="w-10 h-10 text-primary" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Audit de sécurité</h3>
                  <p className="text-muted-foreground">
                    Évaluez les failles de votre système et identifiez les risques potentiels.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <LockIcon className="w-10 h-10 text-primary" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Protection des données</h3>
                  <p className="text-muted-foreground">
                    Sécurisez vos données sensibles et assurez-vous de leur confidentialité.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <ShieldCheckIcon className="w-10 h-10 text-primary" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Surveillance et intervention</h3>
                  <p className="text-muted-foreground">
                    Surveillez en permanence votre infrastructure et intervenons rapidement en cas d&apos;incident.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <FingerprintIcon className="w-10 h-10 text-primary" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Authentification renforcée</h3>
                  <p className="text-muted-foreground">
                    Protégez l&apos;accès à vos systèmes avec des méthodes d&apos;authentification avancées.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <ShieldAlertIcon className="w-10 h-10 text-primary" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Gestion des incidents</h3>
                  <p className="text-muted-foreground">
                    Soyez prêt à faire face aux incidents de sécurité et à les résoudre rapidement.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BriefcaseIcon className="w-10 h-10 text-primary" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Conseil et formation</h3>
                  <p className="text-muted-foreground">
                    Bénéficiez de l&apos;expertise de nos consultants pour renforcer la sécurité de votre entreprise.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="about" className="flex justify-center bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-8 md:space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm">À propos</div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Qui sommes-nous ?</h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                ASTERIA SERVICES est une entreprise spécialisée dans la sécurité informatique. Depuis plus de 10 ans,
                nous aidons nos clients à protéger leurs données et leur infrastructure IT.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <TargetIcon className="w-10 h-10 text-primary" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Notre mission</h3>
                  <p className="text-muted-foreground">
                    Offrir des solutions de sécurité sur-mesure pour protéger nos clients contre les menaces cyber.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CompassIcon className="w-10 h-10 text-primary" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Nos valeurs</h3>
                  <p className="text-muted-foreground">
                    Intégrité, expertise, innovation et engagement sont au cœur de notre entreprise.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <TrophyIcon className="w-10 h-10 text-primary" />
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-bold">Notre expertise</h3>
                  <p className="text-muted-foreground">
                    Notre équipe de spécialistes en sécurité informatique met son savoir-faire à votre service.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="testimonials" className="flex justify-center py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-8 md:space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm">Témoignages</div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Nos clients témoignent</h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Découvrez ce que nos clients pensent de nos services.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent>
                  <blockquote className="text-lg font-semibold leading-snug pt-4">
                    ASTERIA SERVICES a su répondre à tous nos besoins en matière de sécurité informatique. Leur
                    expertise et leur réactivité ont été essentielles pour protéger notre entreprise.
                  </blockquote>
                  <div className="flex items-center gap-4 mt-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">Jean Duppral</div>
                      
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <blockquote className="text-lg font-semibold leading-snug pt-4">
                    Grâce à ASTERIA SERVICES, nous avons pu renforcer la sécurité de notre infrastructure IT et
                    protéger nos données sensibles. Leur accompagnement a été exceptionnel.
                  </blockquote>
                  <div className="flex items-center gap-4 mt-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>RD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">Robert Davidson</div>
                     
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <blockquote className="text-lg font-semibold leading-snug pt-4">
                    L&apos;équipe d&apos;ASTERIA SERVICES a su comprendre nos enjeux et nous proposer des solutions adaptées.
                    Nous sommes très satisfaits de leur travail et de leur professionnalisme.
                  </blockquote>
                  <div className="flex items-center gap-4 mt-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>DM</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">David Martin</div>
                     
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="flex justify-center bg-muted py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-8 md:space-y-12">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm">Contact</div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Prenez contact avec nous</h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Remplissez le formulaire ci-dessous pour nous contacter et obtenir plus d&apos;informations.
              </p>
            </div>
            <div className="max-w-xl mx-auto">
              <ContactPage  />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary py-8">
      <div className=" mx-auto px-4 md:px-6 flex flex-col md:flex-column items-center justify-between">
          <p className="  mt-4 ">© 2024 ASTERIA SERVICES.</p>
          <p className="  "> Tous droits réservés.</p>
          </div>
          <div className=" mx-auto px-4 md:px-6 flex flex-col md:flex-column items-center justify-between">
          <p className="  mt-4 ">97 RUE SAUVEUR TOBELEM</p>
          <p className="   ">13007 MARSEILLE</p>
          <p className="  mt-4 ">contact@asteria-services.fr</p>

          <p className="  mt-4 ">TEL: 04 84 89 63 50</p>
          </div>
      </footer>
    </div>
  )
}

function BriefcaseIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function CompassIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}


function FingerprintIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
      <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
      <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
      <path d="M2 12a10 10 0 0 1 18-6" />
      <path d="M2 16h.01" />
      <path d="M21.8 16c.2-2 .131-5.354 0-6" />
      <path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" />
      <path d="M8.65 22c.21-.66.45-1.32.57-2" />
      <path d="M9 6.8a6 6 0 0 1 9 5.2v2" />
    </svg>
  )
}


function LockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}


function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function ShieldAlertIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </svg>
  )
}


function ShieldCheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}


function ShieldIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}


function TargetIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}


function TrophyIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}
