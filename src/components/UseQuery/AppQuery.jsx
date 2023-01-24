import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const AppQuery = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BasicUseQuery />
      <ReactQueryDevtools/>
    </QueryClientProvider>
  );
};

export default AppQuery;

const BasicUseQuery = () => {
  const Posts = [
    { id: 1, title: "Hello world" },
    { id: 2, title: "Canada" },
  ];

  const postQuery = useQuery({
    queryKey: ["posts"],
    queryFn:()=> wait(1000).then(() => [...Posts]),
  });

  const newMututation = useMutation({
    mutationFn:title=>{
      return wait(1000).then(()=>Posts.push({id:crypto.randomUUID(),title}))
    },
    onSuccess:()=>{
      queryClient.invalidateQueries(["posts"])
    }
  })

  return (
    <>
      <h1>BasicUseQuery</h1>
      {postQuery?.data?.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}

      <button onClick={()=>newMututation.mutate("hello net")}>ADD NEW</button>
     
    </>
  );
};

function wait(duration){
  return new Promise(value=>setTimeout(value,duration))
}
