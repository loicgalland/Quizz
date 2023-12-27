import Cta from "@/app/components/Cta";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center py-16">
        <h1 className="font-bold text-2xl">Bienvenue !</h1>
        <p className="text-lg">Veuillez choisir votre quizz</p>
        <div className="flex flex-col items-center gap-3 my-5">
            <Cta link="/easy" text="Quizz facile"/>
            <Cta link="/meduim" text="Quizz moyen"/>
            <Cta link="/hard" text="Quizz hard"/>
        </div>
    </main>
  )
}
