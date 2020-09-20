export default function Post({postData}) {
  return (
    <div>
        <h1>{postData.title}</h1>
        <p>id: {postData.id}</p>
    </div>
  )
}

export async function getStaticPaths() {
    const paths=[
        {
            params: {
                id: 'pagina_web'
            }
        }
    ]
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {

    const postData = {
        id: params.id,
        title: 'Página web'
    }
    return {
      props: {
        postData
      }
    }
  }
  