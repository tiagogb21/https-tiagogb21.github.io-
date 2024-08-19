import { LeftMenu } from "./components/LeftMenu";
import { RightContent } from "./components/RightContent";

export default function Home() {
    return (
        <main className="min-h-screen flex bg-slate-950 dark:bg-zinc-400 items-center justify-center h-screen flex-col p-8">
            <div className="container bg-gray-800 dark:bg-gray-200 flex mx-auto rounded-lg text-white dark:text-gray-800 p-10 gap-10">
                <LeftMenu />
                <RightContent />
            </div>
        </main>
    );
}
