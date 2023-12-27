import ButtonLink from "@/app/components/ButtonLink";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center py-16 px-5 gap-4">
        <h1 className="font-bold text-2xl">Bienvenue !</h1>
        <p className="text-center">Ce quizz est très facile ne vous inquiétez pas !</p>
        <div className="flex flex-col items-center gap-3 my-5">
            <ButtonLink link="/quizz/easy" text="Commencer le quizz"/>

        </div>
    </main>
  )
}
