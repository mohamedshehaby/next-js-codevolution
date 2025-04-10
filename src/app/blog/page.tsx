const delay = new Promise((resolve) => setTimeout(resolve, 5000));

const Page = async () => {
  await delay;

  return <div>Blog</div>;
};

export default Page;
