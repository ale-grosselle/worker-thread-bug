import {createInvoice} from "@/app/lib/actions";

export default async function Page() {
    await createInvoice()
    return (
        <main className="flex min-h-screen flex-col p-6">
            <h1>
                Hello Main Page
            </h1>
        </main>
    );
}
