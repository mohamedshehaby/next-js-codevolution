import 'server-only'
 export async function getData() {
    console.log(await new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                product: {
                    id: 1,
                    name: 'Product 1',
                    description: 'This is product 1',
                },
                reviews: [
                    { id: 1, content: 'Great product!' },
                    { id: 2, content: 'Not bad' },
                ],
            });
        }, 1000);
    }));
}