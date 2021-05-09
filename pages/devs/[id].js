export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const paths = data.map(ninja => {
    return {
      params: { id: ninja.id.toString() }
    }
  });
  
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();

  return {
    props: { ninja: data }
  }
}

const Details = ({ ninja }) => {
  return (
    <div>
      <h1>Details Page for: { ninja.name }</h1>
      <p>Email: { ninja.email }</p>
      <p>wabsite: { ninja.website }</p>
      <p>adress: { ninja.address.city }</p>
    </div>
  );
}

export default Details;