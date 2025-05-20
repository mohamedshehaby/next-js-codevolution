
export async function generateStaticParams() {
    return [{id : "1"}, {id: "2"}, {id: "3"}]
}
export default async function ProductDetailPage({
                                       params,
                                   }: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params


    return <h1>
        {new Date().toTimeString()}
        Product Detail Page {id}
    </h1>
}

